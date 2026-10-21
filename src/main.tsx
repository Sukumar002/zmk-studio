import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import FloatingStatusWidget from "./FloatingStatusWidget.tsx";
import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";
import "./index.css";

// A backstop, not a handler: `call_rpc` rejects on a transport fault, and the
// mutation callbacks that don't catch it would otherwise fail in complete
// silence — no row, no message, no log. Console only, deliberately: these fire
// from event handlers, and a blocking dialog per rejection would be worse than
// the bug.
window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled rejection", e.reason);
});

// Prefer Tauri's authoritative window label over relying only on the URL query.
// The widget is a separately configured webview, and if the query is normalized
// or dropped by the desktop protocol, rendering App here creates a second full
// Studio UI instead of the compact HUD. Keep the query check as a browser/dev
// fallback, but the configured window label is the source of truth in Tauri.
const isFloatingWidget =
  !!window.__TAURI_INTERNALS__ &&
  (getCurrentWebviewWindow().label === "status-widget" ||
    new URLSearchParams(window.location.search).get("widget") === "1");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {isFloatingWidget ? <FloatingStatusWidget /> : <App />}
  </React.StrictMode>
);
