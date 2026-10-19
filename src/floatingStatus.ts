import { emit } from "@tauri-apps/api/event";
import { getAllWindows } from "@tauri-apps/api/window";
import type { FloatingStatus } from "./FloatingStatusWidget";

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
