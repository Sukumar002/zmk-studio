import {
  PhysicalLayout,
  Keymap as KeymapMsg,
  BehaviorBinding,
} from "@zmkfirmware/zmk-studio-ts-client/keymap";
import { GetBehaviorDetailsResponse } from "@zmkfirmware/zmk-studio-ts-client/behaviors";

import { PhysicalLayout as PhysicalLayoutComp } from "./PhysicalLayout";
import { HidUsageLabel } from "./HidUsageLabel";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bluetooth,
  Clock3,
  Eye,
  Monitor,
  MousePointer2,
  Power,
  RotateCcw,
} from "lucide-react";
import { matchDescriptor, validateValue } from "../behaviors/parameters";

export type BehaviorMap = Record<number, GetBehaviorDetailsResponse>;

export interface KeymapProps {
  layout: PhysicalLayout;
  keymap: KeymapMsg;
  behaviors: BehaviorMap;
  layers: { id: number; name: string }[];
  selectedLayerIndex: number;
  selectedKeyPosition: number | undefined;
  onKeyPositionClicked: (keyPosition: number) => void;
}


function signed16(value: number) {
  const n = value & 0xffff;
  return n & 0x8000 ? n - 0x10000 : n;
}

function decodeAxis(encoded: number) {
  return {
    x: signed16(encoded >>> 16),
    y: signed16(encoded),
  };
}

function iconText(icon: React.ReactNode, text?: React.ReactNode) {
  return (
    <span className="flex items-center justify-center gap-0.5 leading-none whitespace-nowrap">
      {icon}
      {text !== undefined && (
        <span className="text-[0.72em] font-sans font-semibold">{text}</span>
      )}
    </span>
  );
}

function directionIcon(x: number, y: number, scroll = false) {
  const cls = "w-4 h-4";
  if (Math.abs(x) > Math.abs(y)) {
    return x < 0 ? <ArrowLeft className={cls} /> : <ArrowRight className={cls} />;
  }
  if (y !== 0) {
    const up = scroll ? y > 0 : y < 0;
    return up ? <ArrowUp className={cls} /> : <ArrowDown className={cls} />;
  }
  return <MousePointer2 className={cls} />;
}

function hanaLegend(
  binding: BehaviorBinding,
  behavior: GetBehaviorDetailsResponse | undefined,
  layerName: string,
  position: number
): React.ReactNode | undefined {
  const name = (behavior?.displayName || "").toLowerCase();
  const p1 = binding.param1 || 0;
  const p2 = binding.param2 || 0;
  const icon = "w-4 h-4";

  // Hana's BT profile hold-taps have no distinct display-name in firmware, so
  // identify the five known SET positions directly. This is intentionally
  // scoped to the SET layer and leaves every other hold-tap untouched.
  if (layerName === "SET" && position >= 1 && position <= 5) {
    return iconText(<Bluetooth className={icon} />, String(position));
  }

  if (name.includes("base view")) {
    return iconText(<Eye className={icon} />, "VIEW");
  }

  if (name.includes("oled")) {
    return iconText(<Monitor className={icon} />, "OLED");
  }

  if (name.includes("timeout")) {
    return iconText(<Clock3 className={icon} />, p1 === 0 ? "DSP" : "SLP");
  }

  if (name === "bootloader") {
    return iconText(<Power className={icon} />, "BOOT");
  }

  if (name === "reset") {
    return iconText(<RotateCcw className={icon} />, "RST");
  }

  if (name === "output selection") {
    return iconText(<RotateCcw className={icon} />, p1 === 0 ? "OUT" : String(p1));
  }

  if (name === "bluetooth") {
    if (p1 === 4) {
      return iconText(<Bluetooth className={icon} />, "CLR");
    }
    if (p1 === 3) {
      return iconText(<Bluetooth className={icon} />, String(p2 + 1));
    }
    return <Bluetooth className={icon} />;
  }

  if (name === "mouse key press") {
    const labels: Record<number, string> = {
      1: "LMB",
      2: "RMB",
      4: "MMB",
      8: "MB4",
      16: "MB5",
    };
    return (
      <span className="font-sans font-semibold text-[0.78em]">
        {labels[p1] ?? `M${p1}`}
      </span>
    );
  }

  if (name === "mouse move") {
    const { x, y } = decodeAxis(p1);
    return iconText(<MousePointer2 className="w-3.5 h-3.5" />, directionIcon(x, y));
  }

  if (name === "mouse scroll") {
    const { x, y } = decodeAxis(p1);
    return (
      <span className="flex flex-col items-center justify-center gap-0.5 leading-none">
        <span className="text-[0.62em] font-sans font-semibold">SCR</span>
        {directionIcon(x, y, true)}
      </span>
    );
  }

  if (name === "none") {
    return <span className="opacity-30 font-sans text-[0.72em]">—</span>;
  }

  return undefined;
}

// A layer param renders as the target layer's name rather than as a (meaningless)
// HID usage — this is what makes a layer-tap show the layer it goes to, next to
// its tap key, the way a mod-tap shows its modifier glyph.
const LayerLabel = ({ name }: { name: string }) => (
  <span className="text-xs leading-none text-nowrap" aria-label={name}>
    {name}
  </span>
);

// Render a binding's editable params, most-significant first (e.g. the tap key
// before the hold of a mod-tap, or before the target layer of a layer-tap). A
// param the behavior describes as a layer is shown by name; everything else
// goes through the HID usage label. Falls back to the HID label for every
// non-zero param when the behavior's metadata isn't loaded yet.
function renderBindingParams(
  binding: BehaviorBinding,
  behavior: GetBehaviorDetailsResponse | undefined,
  layers: { id: number; name: string }[]
) {
  const layerIds = layers.map((l) => l.id);
  const md = behavior?.metadata ?? [];

  // The set whose param1 the current value satisfies (mirrors the picker), so a
  // multi-set behavior is classified against the set actually in effect.
  const set =
    md.find((s) => validateValue(layerIds, binding.param1, s.param1)) ??
    (md.length === 1 ? md[0] : undefined);

  return [
    { value: binding.param2, descriptors: set?.param2 },
    { value: binding.param1, descriptors: set?.param1 },
  ]
    .map((p) => ({
      ...p,
      descriptor: matchDescriptor(layerIds, p.value, p.descriptors),
    }))
    // Drop unused params (the empty hold of a plain key press), but keep a
    // layer param even when it points at layer 0 — that's a real target.
    .filter((p) => p.value !== 0 || !!p.descriptor?.layerId)
    .map((p, index) => {
      if (p.descriptor?.layerId) {
        const layer = layers.find((l) => l.id === p.value);
        return <LayerLabel key={index} name={layer?.name ?? `${p.value}`} />;
      }
      return <HidUsageLabel key={index} hid_usage={p.value} />;
    });
}

export const Keymap = ({
  layout,
  keymap,
  behaviors,
  layers,
  selectedLayerIndex,
  selectedKeyPosition,
  onKeyPositionClicked,
}: KeymapProps) => {
  if (!keymap.layers[selectedLayerIndex]) {
    return <></>;
  }

  const positions = layout.keys.map((k, i) => {
    if (i >= keymap.layers[selectedLayerIndex].bindings.length) {
      return {
        id: `${keymap.layers[selectedLayerIndex].id}-${i}`,
        x: k.x / 100.0,
        y: k.y / 100.0,
        width: k.width / 100,
        height: k.height / 100.0,
        children: <span></span>,
      };
    }

    const binding = keymap.layers[selectedLayerIndex].bindings[i];
    const layerName = keymap.layers[selectedLayerIndex].name || layers[selectedLayerIndex]?.name || "";
    const legend = hanaLegend(binding, behaviors[binding.behaviorId], layerName, i);

    return {
      id: `${keymap.layers[selectedLayerIndex].id}-${i}`,
      x: k.x / 100.0,
      y: k.y / 100.0,
      width: k.width / 100,
      height: k.height / 100.0,
      r: (k.r || 0) / 100.0,
      rx: (k.rx || 0) / 100.0,
      ry: (k.ry || 0) / 100.0,
      children:
        legend ??
        renderBindingParams(binding, behaviors[binding.behaviorId], layers),
    };
  });

  return (
    <PhysicalLayoutComp
      positions={positions}
      oneU={48}
      zoom="auto"
      selectedPosition={selectedKeyPosition}
      onPositionClicked={onKeyPositionClicked}
    />
  );
};
