import { useEffect, useState } from "react";
import { listen } from "@tauri-apps/api/event";
import { PhysicalPosition } from "@tauri-apps/api/dpi";
import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";
import {
  Battery,
  Bluetooth,
  Cable,
  Command,
  GripHorizontal,
  Layers3,
  LockKeyhole,
  MonitorCog,
  X,
} from "lucide-react";

export type FloatingStatus = {
  connected: boolean;
  deviceName?: string;
  layer?: number;
  layerName?: string;
  modifiers?: number;
  transport?: "usb" | "ble" | "none";
  profile?: number;
  leftBattery?: number;
  rightBattery?: number;
  dongleBattery?: number;
  locks?: number;
  osMode?: "macOS" | "Windows";
};

const initialStatus: FloatingStatus = { connected: false, transport: "none" };
const POSITION_KEY = "zmk-floating-widget-position-v1";

function BatteryValue({ label, value }: { label: string; value?: number }) {
  return (
    <div className="flex items-center gap-1 tabular-nums whitespace-nowrap" title={`${label} battery`}>
      <Battery size={14} aria-hidden />
      <span className="text-[10px] opacity-60">{label}</span>
      <span className="text-xs font-medium">{value == null ? "—" : `${value}%`}</span>
    </div>
  );
}

export default function FloatingStatusWidget() {
  const [status, setStatus] = useState<FloatingStatus>(initialStatus);

  useEffect(() => {
    let stopStatus: (() => void) | undefined;
    let stopMoved: (() => void) | undefined;
    const win = getCurrentWebviewWindow();

    try {
      const saved = JSON.parse(localStorage.getItem(POSITION_KEY) || "null") as
        | { x: number; y: number }
        | null;
      if (saved && Number.isFinite(saved.x) && Number.isFinite(saved.y)) {
        win.setPosition(new PhysicalPosition(saved.x, saved.y)).catch(() => {});
      }
    } catch {
      // Ignore an invalid/stale position and let the window manager place us.
    }

    listen<FloatingStatus>("zmk-floating-status", (event) =>
      setStatus(event.payload)
    ).then((unlisten) => (stopStatus = unlisten));

    win.onMoved(({ payload }) => {
      localStorage.setItem(POSITION_KEY, JSON.stringify(payload));
    }).then((unlisten) => (stopMoved = unlisten));

    return () => {
      stopStatus?.();
      stopMoved?.();
    };
  }, []);

  const mods = status.modifiers ?? 0;
  const activeMods = [
    [0x01 | 0x10, "CTRL"],
    [0x02 | 0x20, "SHIFT"],
    [0x04 | 0x40, status.osMode === "macOS" ? "OPT" : "ALT"],
    [0x08 | 0x80, status.osMode === "macOS" ? "CMD" : "GUI"],
  ]
    .filter(([mask]) => (mods & (mask as number)) !== 0)
    .map(([, name]) => name as string);

  const lockBits = status.locks ?? 0;
  const lockLabels = [
    lockBits & 0x02 ? "CAPS" : null,
    status.osMode !== "macOS" && lockBits & 0x01 ? "NUM" : null,
    status.osMode !== "macOS" && lockBits & 0x04 ? "SCRL" : null,
  ].filter(Boolean);

  return (
    <main className="h-screen w-screen select-none bg-transparent p-1">
      <section className="h-full rounded-2xl border border-base-line bg-base-200/95 shadow-xl backdrop-blur flex items-center gap-3 px-3 text-base-content">
        <button
          className="opacity-35 hover:opacity-80 cursor-move shrink-0"
          data-tauri-drag-region
          aria-label="Move Keyboard HUD"
          title="Drag to move"
          onMouseDown={() => {
            getCurrentWebviewWindow()
              .startDragging()
              .catch((error) => console.error("Failed to drag status widget", error));
          }}
        >
          <GripHorizontal size={17} data-tauri-drag-region />
        </button>

        <div className="min-w-[116px] max-w-[145px]">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full shrink-0 ${
                status.connected ? "bg-success" : "bg-base-content/25"
              }`}
            />
            <span className="truncate text-xs font-semibold">
              {status.connected ? status.deviceName || "ZMK" : "Dongle disconnected"}
            </span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[10px] opacity-65">
            <MonitorCog size={12} aria-hidden />
            <span>{status.osMode || "Host mode"}</span>
          </div>
        </div>

        <div
          className="min-w-[78px] rounded-lg bg-base-100/70 px-2 py-1 text-center"
          title="Active layer"
        >
          <div className="flex items-center justify-center gap-1 text-[9px] uppercase opacity-55">
            <Layers3 size={11} />
            Layer
          </div>
          <div className="truncate text-sm font-bold leading-5">
            {status.layerName || (status.layer == null ? "—" : `L${status.layer}`)}
          </div>
        </div>

        <div className="min-w-[82px]">
          <div className="flex items-center gap-1 text-[9px] uppercase opacity-55">
            <Command size={11} />
            Mods
          </div>
          <div className="mt-1 truncate text-[10px] font-semibold">
            {activeMods.length ? activeMods.join("+") : "—"}
          </div>
        </div>

        <div className="min-w-[58px]">
          <div className="flex items-center gap-1 text-[9px] uppercase opacity-55">
            {status.transport === "ble" ? <Bluetooth size={11} /> : <Cable size={11} />}
            Output
          </div>
          <div className="mt-1 text-xs font-semibold">
            {status.transport === "ble"
              ? `BT${(status.profile ?? 0) + 1}`
              : status.transport === "usb"
                ? "USB"
                : "—"}
          </div>
        </div>

        <div className="min-w-[54px]">
          <div className="flex items-center gap-1 text-[9px] uppercase opacity-55">
            <LockKeyhole size={11} />
            Locks
          </div>
          <div className="mt-1 text-[10px] font-semibold">
            {lockLabels.length ? lockLabels.join(" ") : "—"}
          </div>
        </div>

        <div className="flex items-center gap-2 pl-1">
          <BatteryValue label="L" value={status.leftBattery} />
          <BatteryValue label="R" value={status.rightBattery} />
          {status.dongleBattery != null ? (
            <BatteryValue label="D" value={status.dongleBattery} />
          ) : null}
        </div>

        <button
          className="ml-auto opacity-35 hover:opacity-90 shrink-0"
          aria-label="Hide Keyboard HUD"
          title="Hide"
          onClick={() => getCurrentWebviewWindow().hide()}
        >
          <X size={15} />
        </button>
      </section>
    </main>
  );
}
