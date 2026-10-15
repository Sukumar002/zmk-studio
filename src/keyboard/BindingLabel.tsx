import type { ReactNode } from "react";

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
  Usb,
} from "lucide-react";

import type { GetBehaviorDetailsResponse } from "@zmkfirmware/zmk-studio-ts-client/behaviors";
import type { BehaviorBinding } from "@zmkfirmware/zmk-studio-ts-client/keymap";

import { HidUsageLabel } from "./HidUsageLabel";

interface BindingLabelProps {
  binding: BehaviorBinding;
  behavior?: GetBehaviorDetailsResponse;
}

const iconClass = "size-[1.05em] stroke-[1.8]";
const smallIconClass = "size-[0.9em] stroke-[1.8]";

const compact = (icon: ReactNode, text?: ReactNode) => (
  <span className="flex items-center justify-center gap-0.5 leading-none whitespace-nowrap">
    {icon}
    {text && <span className="text-[0.72em] font-sans font-semibold">{text}</span>}
  </span>
);

const stacked = (top: ReactNode, bottom: ReactNode) => (
  <span className="flex flex-col items-center justify-center gap-0.5 leading-none">
    <span className="text-[0.7em] font-sans font-semibold">{top}</span>
    <span className="text-[1.05em]">{bottom}</span>
  </span>
);

function normalize(name?: string) {
  return (name || "")
    .trim()
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");
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

function directionArrow(x: number, y: number) {
  if (Math.abs(x) > Math.abs(y)) {
    return x < 0 ? <ArrowLeft className={iconClass} /> : <ArrowRight className={iconClass} />;
  }

  if (y !== 0) {
    // ZMK mouse move uses negative Y for up, while scroll uses positive Y for up.
    return y < 0 ? <ArrowUp className={iconClass} /> : <ArrowDown className={iconClass} />;
  }

  return <MousePointer2 className={iconClass} />;
}

function scrollDirectionArrow(x: number, y: number) {
  if (Math.abs(x) > Math.abs(y)) {
    return x < 0 ? <ArrowLeft className={iconClass} /> : <ArrowRight className={iconClass} />;
  }

  if (y !== 0) {
    return y > 0 ? <ArrowUp className={iconClass} /> : <ArrowDown className={iconClass} />;
  }

  return <MousePointer2 className={iconClass} />;
}

function bluetoothLabel(param1: number, param2: number) {
  switch (param1) {
    case 0:
      return compact(<Bluetooth className={iconClass} />, "CLR");
    case 1:
      return compact(<Bluetooth className={iconClass} />, "NEXT");
    case 2:
      return compact(<Bluetooth className={iconClass} />, "PREV");
    case 3:
      return compact(<Bluetooth className={iconClass} />, String(param2 + 1));
    case 4:
      return compact(<Bluetooth className={iconClass} />, "CLR");
    case 5:
      return compact(<Bluetooth className={iconClass} />, "DISC");
    default:
      return <Bluetooth className={iconClass} />;
  }
}

function outputLabel(param1: number) {
  switch (param1) {
    case 0:
      return compact(<RotateCcw className={smallIconClass} />, "OUT");
    case 1:
      return <Usb className={iconClass} />;
    case 2:
      return <Bluetooth className={iconClass} />;
    case 3:
      return compact(<Power className={smallIconClass} />, "OFF");
    default:
      return compact(<RotateCcw className={smallIconClass} />, "OUT");
  }
}

function mouseButtonLabel(mask: number) {
  switch (mask) {
    case 1:
      return <span className="font-sans font-semibold text-[0.78em]">LMB</span>;
    case 2:
      return <span className="font-sans font-semibold text-[0.78em]">RMB</span>;
    case 4:
      return <span className="font-sans font-semibold text-[0.78em]">MMB</span>;
    case 8:
      return <span className="font-sans font-semibold text-[0.78em]">MB4</span>;
    case 16:
      return <span className="font-sans font-semibold text-[0.78em]">MB5</span>;
    default:
      return compact(<MousePointer2 className={smallIconClass} />, String(mask));
  }
}

export const BindingLabel = ({ binding, behavior }: BindingLabelProps) => {
  const name = normalize(behavior?.displayName);
  const p1 = binding.param1 || 0;
  const p2 = binding.param2 || 0;

  // Hana custom SET-layer behaviors.
  if (name === "base view cycle" || name.includes("base view")) {
    return compact(<Eye className={iconClass} />, "VIEW");
  }

  if (name === "oled toggle" || name.includes("oled")) {
    return compact(<Monitor className={iconClass} />, "OLED");
  }

  if (name === "timeout cycle" || name.includes("timeout")) {
    return p1 === 0
      ? compact(<Clock3 className={iconClass} />, "DSP")
      : compact(<Clock3 className={iconClass} />, "SLP");
  }

  if (name === "bootloader") {
    return compact(<Power className={iconClass} />, "BOOT");
  }

  if (name === "reset") {
    return compact(<RotateCcw className={iconClass} />, "RST");
  }

  if (
    name === "bt profile" ||
    name === "bluetooth profile" ||
    name.includes("bt profile")
  ) {
    // bt_profile takes the same profile index as both parameters.
    return compact(<Bluetooth className={iconClass} />, String(p1 + 1));
  }

  if (name === "bluetooth") {
    return bluetoothLabel(p1, p2);
  }

  if (name === "output selection") {
    return outputLabel(p1);
  }

  if (name === "none") {
    return <span className="opacity-30 font-sans text-[0.72em]">—</span>;
  }

  if (name === "transparent") {
    return <span className="opacity-50 font-sans text-[0.72em]">▽</span>;
  }

  // Mouse layer.
  if (name === "mouse key press") {
    return mouseButtonLabel(p1);
  }

  if (name === "mouse move") {
    const { x, y } = decodeAxis(p1);
    return compact(<MousePointer2 className={smallIconClass} />, directionArrow(x, y));
  }

  if (name === "mouse scroll") {
    const { x, y } = decodeAxis(p1);
    return stacked("SCR", scrollDirectionArrow(x, y));
  }

  // Standard HID-like behaviors still use the existing adaptive HID label.
  return <HidUsageLabel hid_usage={p1} />;
};
