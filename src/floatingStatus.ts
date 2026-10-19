import { emit } from "@tauri-apps/api/event";
import { getAllWindows } from "@tauri-apps/api/window";
import type { FloatingStatus } from "./FloatingStatusWidget";

export type RpcStatusSnapshot = {
  activeLayer?: number;
  layerName?: string;
  modifiers?: number;
  transport?: number;
  bleProfile?: number;
  connected?: boolean;
  hidIndicators?: number;
  leftBattery?: number;
  rightBattery?: number;
  dongleBattery?: number;
  osMode?: number;
};

export function floatingStatusFromRpc(
  status: RpcStatusSnapshot,
  deviceName?: string
): FloatingStatus {
  const battery = (value?: number) =>
    value == null || value < 0 ? undefined : value;

  return {
    connected: !!status.connected,
    deviceName,
    layer: status.activeLayer,
    layerName: status.layerName || undefined,
    modifiers: status.modifiers ?? 0,
    transport:
      status.transport === 1 ? "usb" : status.transport === 2 ? "ble" : "none",
    profile: status.bleProfile,
    leftBattery: battery(status.leftBattery),
    rightBattery: battery(status.rightBattery),
    dongleBattery: battery(status.dongleBattery),
    locks: status.hidIndicators ?? 0,
    osMode:
      status.osMode === 1 ? "macOS" : status.osMode === 2 ? "Windows" : undefined,
  };
}

export async function emitFloatingStatus(status: FloatingStatus) {
  if (!window.__TAURI_INTERNALS__) return;
  await emit("zmk-floating-status", status);
}

export async function showFloatingStatusWidget() {
  if (!window.__TAURI_INTERNALS__) return;
  const widget = (await getAllWindows()).find((w) => w.label === "status-widget");
  await widget?.show();
  await widget?.setAlwaysOnTop(true);
}
