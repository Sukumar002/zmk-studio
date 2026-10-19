import { useEffect, useState } from "react";
import { listen } from "@tauri-apps/api/event";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { Battery, Bluetooth, Cable, Command, GripHorizontal, Layers3, X } from "lucide-react";

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
  locks?: number;
};

const initialStatus: FloatingStatus = { connected: false, transport: "none" };

function BatteryValue({ label, value }: { label: string; value?: number }) {
  return (
    <div className="flex items-center gap-1 tabular-nums" title={`${label} battery`}>
      <Battery size={14} aria-hidden />
      <span className="text-[10px] opacity-60">{label}</span>
      <span className="text-xs font-medium">{value == null ? "—" : `${value}%`}</span>
    </div>
  );
}

export default function FloatingStatusWidget() {
  const [status, setStatus] = useState<FloatingStatus>(initialStatus);

  useEffect(() => {
    let stop: (() => void) | undefined;
    listen<FloatingStatus>("zmk-floating-status", (event) => setStatus(event.payload)).then(
      (unlisten) => (stop = unlisten)
    );
    return () => stop?.();
  }, []);

  const mods = status.modifiers ?? 0;
  const activeMods = [
    [0x01 | 0x10, "CTRL"],
    [0x02 | 0x20, "SHIFT"],
    [0x04 | 0x40, "ALT"],
    [0x08 | 0x80, "GUI"],
  ].filter(([mask]) => (mods & (mask as number)) !== 0).map(([, name]) => name);

  return (
    <main className="h-screen w-screen select-none bg-transparent p-1">
      <section className="h-full rounded-xl border border-base-line bg-base-200/95 shadow-xl backdrop-blur flex items-center gap-3 px-3">
        <button
          className="opacity-40 hover:opacity-80 cursor-move"
          data-tauri-drag-region
          aria-label="Move status widget"
          title="Drag to move"
        >
          <GripHorizontal size={16} data-tauri-drag-region />
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${status.connected ? "bg-success" : "bg-base-content/25"}`} />
            <span className="truncate text-xs font-semibold">
              {status.connected ? status.deviceName || "ZMK" : "Dongle disconnected"}
            </span>
          </div>
          <div className="mt-1 flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1" title="Active layer">
              <Layers3 size={14} />
              <span>{status.layerName || (status.layer == null ? "—" : `L${status.layer}`)}</span>
            </div>
            <div className="flex items-center gap-1 min-w-[44px]" title="Held modifiers">
              <Command size={14} />
              <span className="text-[10px]">{activeMods.length ? activeMods.join("+") : "—"}</span>
            </div>
            <div className="flex items-center gap-1" title="Output">
              {status.transport === "ble" ? <Bluetooth size={14} /> : <Cable size={14} />}
              <span>{status.transport === "ble" ? `BT${(status.profile ?? 0) + 1}` : status.transport === "usb" ? "USB" : "—"}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <BatteryValue label="L" value={status.leftBattery} />
          <BatteryValue label="R" value={status.rightBattery} />
        </div>

        <button
          className="opacity-40 hover:opacity-90"
          aria-label="Hide status widget"
          title="Hide"
          onClick={() => getCurrentWindow().hide()}
        >
          <X size={15} />
        </button>
      </section>
    </main>
  );
}
