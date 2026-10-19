import type { Key } from "react-aria-components";

import { MouseSettingsPanel } from "../keyboard/MouseSettingsPanel";
import { Select } from "../misc/Select";

export type ComboViewMode = "expanded" | "list";

const COMBO_VIEW_OPTIONS = [
  {
    id: "expanded" as const,
    name: "Expanded",
    description: "Show the physical layout preview inside every combo row.",
  },
  {
    id: "list" as const,
    name: "List",
    description: "Use compact rows and show the physical layout on hover.",
  },
];

export interface StudioSettingsProps {
  comboViewMode: ComboViewMode;
  onComboViewModeChange: (mode: ComboViewMode) => void;
}

export function StudioSettings({
  comboViewMode,
  onComboViewModeChange,
}: StudioSettingsProps) {
  return (
    <div className="h-full overflow-y-auto bg-base-300 px-6 py-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 pb-8">
        <div>
          <h1 className="text-xl font-semibold">Settings</h1>
          <p className="mt-1 text-sm text-base-content/60">
            Configure Studio preferences and runtime settings exposed by the
            connected keyboard.
          </p>
        </div>

        <section className="rounded-lg border border-base-line bg-base-200 p-5">
          <h2 className="text-sm font-bold uppercase opacity-70">Studio</h2>
          <div className="mt-4">
            <Select
              items={COMBO_VIEW_OPTIONS}
              label="Combos view"
              description="Expanded is the default. List keeps the sidebar compact and moves the layout preview to hover."
              selectedKey={comboViewMode}
              onSelectionChange={(key: Key) => {
                if (key === "expanded" || key === "list") {
                  onComboViewModeChange(key);
                }
              }}
              renderItem={(item) => (
                <span className="flex min-w-0 flex-col">
                  <span>{item.name}</span>
                  <span className="truncate text-xs opacity-60">
                    {item.description}
                  </span>
                </span>
              )}
              renderValue={(item) => item.name}
              triggerClassName="w-full max-w-sm"
            />
          </div>
        </section>

        <section className="rounded-lg border border-base-line bg-base-200 p-5">
          <h2 className="text-sm font-bold uppercase opacity-70">
            Keyboard tuning
          </h2>
          <p className="mt-2 text-sm text-base-content/60">
            Global hold-tap tuning such as Mod-Tap and Layer-Tap tapping terms
            will appear here when the connected firmware exposes those values as
            runtime settings. Current firmware keeps the built-in values in
            compiled devicetree behavior configuration, so Studio does not
            present non-functional controls.
          </p>
        </section>

        <MouseSettingsPanel variant="settings" />
      </div>
    </div>
  );
}
