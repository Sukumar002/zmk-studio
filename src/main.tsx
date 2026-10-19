import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import FloatingStatusWidget from "./FloatingStatusWidget.tsx";
import "./index.css";

// A backstop, not a handler: `call_rpc` rejects on a transport fault, and the
// mutation callbacks that don't catch it would otherwise fail in complete
// silence — no row, no message, no log. Console only, deliberately: these fire
// from event handlers, and a blocking dialog per rejection would be worse than
// the bug.
window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled rejection", e.reason);
});

const isFloatingWidget =
  !!window.__TAURI_INTERNALS__ &&
  new URLSearchParams(window.location.search).get("widget") === "1";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {isFloatingWidget ? <FloatingStatusWidget /> : <App />}
  </React.StrictMode>
);
