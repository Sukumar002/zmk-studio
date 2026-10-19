import { useState } from "react";
import type { ConfigValue, CustomBehavior } from "@zmkfirmware/zmk-studio-ts-client/behaviors";

import { MouseSettingsPanel } from "../keyboard/MouseSettingsPanel";
import { ConfigFieldEdit } from "../behaviours/ConfigFieldEditor";
import { fieldHelp } from "../behaviours/fieldHelp";

export interface StudioSettingsProps {
  behaviours?: CustomBehavior[];
  behavioursLoaded?: boolean;
  onApplyBehaviourField?: (
    behaviorId: number,
    fieldKey: string,
    newValue: ConfigValue,
    oldValue: ConfigValue
  ) => void;
}

export function StudioSettings({
  behaviours = [],
  behavioursLoaded = true,
  onApplyBehaviourField,
}: StudioSettingsProps) {
  const [mouseSettingsAvailable, setMouseSettingsAvailable] = useState<
    boolean | undefined
  >(undefined);

  const hasBehaviourTuning = behaviours.some((behaviour) =>
    behaviour.config.some((field) => !field.schema?.positions)
  );
  const capabilitiesLoaded =
    behavioursLoaded && mouseSettingsAvailable !== undefined;
  const isEmpty =
    capabilitiesLoaded && !hasBehaviourTuning && !mouseSettingsAvailable;

  return (
    <div className="h-full overflow-y-auto bg-base-300 px-6 py-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 pb-8">
        <div>
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>

        {hasBehaviourTuning ? (
          <section className="rounded-lg border border-base-line bg-base-200 p-5">
            <h2 className="text-sm font-bold uppercase opacity-70">
              Behavior tuning
            </h2>
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
                    <div className="mb-4 font-medium">
                      {behaviour.displayName || `Behavior #${behaviour.id}`}
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
          </section>
        ) : null}

        <MouseSettingsPanel
          variant="settings"
          onAvailabilityChange={setMouseSettingsAvailable}
        />

        {isEmpty ? (
          <div className="grid flex-1 place-items-center py-16 text-center">
            <div>
              <h2 className="text-lg font-medium">Nothing to tune here yet</h2>
              <p className="mt-2 text-sm text-base-content/60">
                Your keyboard firmware doesn’t currently support changing these
                settings in real time.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
