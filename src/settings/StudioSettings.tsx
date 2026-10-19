import type { ConfigValue, CustomBehavior } from "@zmkfirmware/zmk-studio-ts-client/behaviors";

import { MouseSettingsPanel } from "../keyboard/MouseSettingsPanel";
import { ConfigFieldEdit } from "../behaviours/ConfigFieldEditor";
import { fieldHelp } from "../behaviours/fieldHelp";

export interface StudioSettingsProps {
  behaviours?: CustomBehavior[];
  onApplyBehaviourField?: (
    behaviorId: number,
    fieldKey: string,
    newValue: ConfigValue,
    oldValue: ConfigValue
  ) => void;
}

export function StudioSettings({
  behaviours = [],
  onApplyBehaviourField,
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
          <h2 className="text-sm font-bold uppercase opacity-70">
            Behavior tuning
          </h2>
          <p className="mt-2 text-sm text-base-content/60">
            Runtime-editable behaviors can keep different timing and tuning
            values. Sliders are provided for quick adjustment, with an exact
            number field beside each numeric value.
          </p>

          {behaviours.length > 0 ? (
            <div className="mt-5 flex flex-col gap-5">
              {behaviours.map((behaviour) => {
                const tuningFields = behaviour.config.filter(
                  (field) => !field.schema?.positions
                );

                if (tuningFields.length === 0) return null;

                return (
                  <div
                    key={behaviour.id}
                    className="rounded-md border border-base-line bg-base-100 p-4"
                  >
                    <div className="mb-4">
                      <div className="font-medium">
                        {behaviour.displayName || `Behavior #${behaviour.id}`}
                      </div>
                      <div className="text-xs text-base-content/50">
                        {behaviour.kind}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      {tuningFields.map((field) => (
                        <ConfigFieldEdit
                          key={field.key}
                          field={field}
                          help={fieldHelp(behaviour.kind, field.key)}
                          onCommit={(value) =>
                            onApplyBehaviourField?.(
                              behaviour.id,
                              field.key,
                              value,
                              field.value ?? {}
                            )
                          }
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="mt-4 text-sm text-base-content/60">
              No runtime-editable behavior tuning is exposed by this firmware.
              Built-in Mod-Tap and Layer-Tap values remain compile-time settings
              until those behavior instances are explicitly made runtime-editable.
            </p>
          )}
        </section>

        <MouseSettingsPanel variant="settings" />
      </div>
    </div>
  );
}
