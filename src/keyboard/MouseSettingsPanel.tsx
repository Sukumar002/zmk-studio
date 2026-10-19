import { useEffect, useState } from "react";
import type { MouseSettings } from "@zmkfirmware/zmk-studio-ts-client/pointing";
import { call_rpc } from "../rpc/logging";
import { useConnectedDeviceData } from "../rpc/useConnectedDeviceData";
import { useContext } from "react";
import { ConnectionContext } from "../rpc/ConnectionContext";

const ACCEL_LABELS = ["Off", "Gentle", "Normal", "Fast"];

export function MouseSettingsPanel({ variant = "sidebar" }: { variant?: "sidebar" | "settings" }) {
  const connection = useContext(ConnectionContext);
  const [deviceSettings, setDeviceSettings] = useConnectedDeviceData<MouseSettings>(
    { pointing: { getSettings: true } },
    (resp) => resp?.pointing?.getSettings,
    true
  );

  const [moveSpeed, setMoveSpeed] = useState(600);
  const [scrollSpeed, setScrollSpeed] = useState(10);
  const [acceleration, setAcceleration] = useState(1);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!deviceSettings) return;
    setMoveSpeed(deviceSettings.moveSpeed || 600);
    setScrollSpeed(deviceSettings.scrollSpeed || 10);
    setAcceleration(deviceSettings.acceleration ?? 1);
  }, [deviceSettings]);

  const apply = async () => {
    if (!connection.conn) return;
    setSaving(true);
    try {
      const response = await call_rpc(connection.conn, {
        pointing: {
          setSettings: {
            moveSpeed,
            scrollSpeed,
            acceleration,
          },
        },
      });
      const saved = response.pointing?.setSettings;
      if (saved) setDeviceSettings(saved);
    } finally {
      setSaving(false);
    }
  };

  if (!deviceSettings) return null;

  return (
    <div className={variant === "settings" ? "rounded-lg border border-base-line bg-base-200 p-5" : "mt-4 rounded-lg border border-base-line bg-base-100 p-3"}>
      <div className="mb-3 text-sm font-semibold">{variant === "settings" ? "Mouse settings" : "Mouse Settings"}</div>

      <label className="mb-3 block text-xs">
        <div className="mb-1 flex justify-between">
          <span>Cursor speed</span>
          <span>{moveSpeed}</span>
        </div>
        <input
          className="range range-xs w-full"
          type="range"
          min={100}
          max={2000}
          step={50}
          value={moveSpeed}
          onChange={(e) => setMoveSpeed(Number(e.target.value))}
        />
      </label>

      <label className="mb-3 block text-xs">
        <div className="mb-1 flex justify-between">
          <span>Scroll speed</span>
          <span>{scrollSpeed}</span>
        </div>
        <input
          className="range range-xs w-full"
          type="range"
          min={1}
          max={50}
          step={1}
          value={scrollSpeed}
          onChange={(e) => setScrollSpeed(Number(e.target.value))}
        />
      </label>

      <label className="mb-3 block text-xs">
        <div className="mb-1 flex justify-between">
          <span>Acceleration</span>
          <span>{ACCEL_LABELS[acceleration] ?? acceleration}</span>
        </div>
        <input
          className="range range-xs w-full"
          type="range"
          min={0}
          max={3}
          step={1}
          value={acceleration}
          onChange={(e) => setAcceleration(Number(e.target.value))}
        />
      </label>

      <button
        type="button"
        className="btn btn-primary btn-sm w-full"
        disabled={saving}
        onClick={apply}
      >
        {saving ? "Applying…" : "Apply mouse settings"}
      </button>
    </div>
  );
}
