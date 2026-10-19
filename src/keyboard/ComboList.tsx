import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Plus } from "lucide-react";

import type { Combos } from "@zmkfirmware/zmk-studio-ts-client/combos";
import type { GetBehaviorDetailsResponse } from "@zmkfirmware/zmk-studio-ts-client/behaviors";
import type { BehaviorBinding, KeyPhysicalAttrs } from "@zmkfirmware/zmk-studio-ts-client/keymap";

import { HidUsageLabel } from "./HidUsageLabel";
import { PhysicalLayout } from "./PhysicalLayout";
import { keyPhysicalAttrsToPositions } from "./layoutKeyPositions";
import { Button } from "../misc/Button";
import { SidebarCard } from "../misc/SidebarCard";
import type { ComboViewMode } from "../settings/StudioSettings";
import { hid_usage_get_labels, hid_usage_page_and_id_from_usage } from "../hid-usages";

type BehaviorMap = Record<number, GetBehaviorDetailsResponse>;
type HoverPreview = {
  anchor: HTMLElement;
  title: string;
  positions: number[];
};

function ComboHoverPreview({
  preview,
  layoutPositions,
}: {
  preview: HoverPreview;
  layoutPositions: ReturnType<typeof keyPhysicalAttrsToPositions>;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    position: "fixed",
    visibility: "hidden",
  });

  useLayoutEffect(() => {
    const anchor = preview.anchor;
    const overlay = overlayRef.current;
    if (!anchor || !overlay) return;

    const update = () => {
      const anchorRect = anchor.getBoundingClientRect();
      const overlayRect = overlay.getBoundingClientRect();
      const gap = 8;
      const margin = 12;

      let left = anchorRect.right + gap;
      if (left + overlayRect.width > window.innerWidth - margin) {
        left = Math.max(margin, anchorRect.left - gap - overlayRect.width);
      }

      let top = anchorRect.top;
      if (top + overlayRect.height > window.innerHeight - margin) {
        top = Math.max(margin, window.innerHeight - margin - overlayRect.height);
      }
      top = Math.max(margin, top);

      setStyle({
        position: "fixed",
        left,
        top,
        zIndex: 1000,
        visibility: "visible",
      });
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(anchor);
    resizeObserver.observe(overlay);
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [preview]);

  return createPortal(
    <div
      ref={overlayRef}
      role="tooltip"
      style={style}
      className="pointer-events-none min-w-max rounded border border-base-line bg-base-100 p-3 text-base-content shadow-xl"
    >
      <div className="mb-2 text-xs font-medium">{preview.title}</div>
      <PhysicalLayout
        positions={layoutPositions}
        oneU={12}
        keyVariant="preview"
        selectedPositions={preview.positions}
      />
    </div>,
    document.body
  );
}


export interface ComboListProps {
  combos: Combos;
  behaviors: BehaviorMap;
  layers: { id: number; name: string }[];
  /** Physical-layout keys for the mini keyboard preview; array index is the key
   * position. When absent the preview falls back to a plain list of positions. */
  layoutKeys?: KeyPhysicalAttrs[];
  /** Base-layer bindings used to label combo positions in compact list mode. */
  baseBindings?: BehaviorBinding[];
  selectedIndex?: number;
  onComboSelected?: (index: number) => void;
  onAddCombo?: () => void;
  /** A new combo is being filled in but doesn't exist on the device yet; shown
   * as a trailing placeholder row so the list still reflects what's being edited. */
  draftSelected?: boolean;
  canAdd?: boolean;
  viewMode?: ComboViewMode;
}

// Combo list. Rows are clickable cards, mirroring the layer picker on the left of
// the keymap editor. Each card shows a small physical-keyboard preview with the
// combo's key positions highlighted so the list stays scannable at a glance, plus
// the bound behavior. The "Add" button creates a new combo and selects it.
export const ComboList = ({
  combos,
  behaviors,
  layers,
  layoutKeys,
  baseBindings,
  selectedIndex,
  onComboSelected,
  onAddCombo,
  draftSelected,
  canAdd,
  viewMode = "expanded",
}: ComboListProps) => {
  // The preview keyboard is the same for every row (only the highlight differs),
  // so build the bare positions once.
  const previewPositions = useMemo(
    () => (layoutKeys ? keyPhysicalAttrsToPositions(layoutKeys) : undefined),
    [layoutKeys],
  );

  // The preview is laid out at `oneU` px per key-unit with no auto-zoom, so to
  // fill the card width we size `oneU` from the measured row width: a board that
  // is `columns` units wide should span the full card, and its height follows
  // proportionally. Measured off the first row's preview slot (all rows share
  // the same card width); falls back to the old fixed size until measured.
  const columns = useMemo(
    () =>
      previewPositions
        ? previewPositions.reduce((m, p) => Math.max(m, p.x + p.width), 0)
        : 0,
    [previewPositions],
  );
  const slotRef = useRef<HTMLDivElement>(null);
  const [oneU, setOneU] = useState(11);
  const [hoverPreview, setHoverPreview] = useState<HoverPreview | null>(null);
  useLayoutEffect(() => {
    const el = slotRef.current;
    if (!el || !columns) return;
    const update = () => {
      if (el.clientWidth > 0) setOneU(el.clientWidth / columns);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [columns]);

  const keyLabel = (position: number) => {
    const binding = baseBindings?.[position];
    if (!binding) return `#${position}`;

    const behaviorName =
      behaviors[binding.behaviorId]?.displayName || `#${position}`;

    if (/key[ -]?press/i.test(behaviorName) && binding.param1 !== undefined) {
      const [pageRaw, id] = hid_usage_page_and_id_from_usage(binding.param1);
      const labels = hid_usage_get_labels(pageRaw & 0xff, id);
      return (
        labels.long ||
        labels.med ||
        labels.short ||
        `#${position}`
      ).replace(/^Keyboard /, "");
    }

    return behaviorName;
  };

  const groupedCombos = useMemo(() => {
    const groups = new Map<string, typeof combos.combos>();

    for (const entry of combos.combos) {
      const mask = entry.combo?.layers ?? 0;
      let label = "All Layers";
      if (mask !== 0) {
        const names = layers
          .map((layer, i) => ((mask & (1 << i)) !== 0 ? layer.name || String(i) : null))
          .filter((name): name is string => name !== null);
        label = names.length > 0 ? names.join(" + ") : "Other Layers";
      }

      const existing = groups.get(label);
      if (existing) existing.push(entry);
      else groups.set(label, [entry]);
    }

    for (const entries of groups.values()) {
      entries.sort((a, b) => {
        const ao = a.combo?.displayOrder || a.index + 1;
        const bo = b.combo?.displayOrder || b.index + 1;
        return ao - bo || a.index - b.index;
      });
    }

    const ordered: Array<[string, typeof combos.combos]> = [];
    for (const layer of layers) {
      const entries = groups.get(layer.name);
      if (entries) {
        ordered.push([layer.name, entries]);
        groups.delete(layer.name);
      }
    }
    for (const [label, entries] of groups) {
      if (label !== "All Layers") ordered.push([label, entries]);
    }
    const all = groups.get("All Layers");
    if (all) ordered.push(["All Layers", all]);

    return ordered;
  }, [combos.combos, layers]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-bold uppercase opacity-70">Combos</h2>
      {combos.combos.length === 0 && !draftSelected ? (
        <p className="text-sm opacity-70">No combos defined.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {groupedCombos.map(([groupLabel, entries]) => (
            <li key={groupLabel} className="flex flex-col gap-2">
              <div className="px-1 pt-1 text-xs font-semibold uppercase tracking-wide opacity-60">
                {groupLabel}
              </div>
              <ul className="flex flex-col gap-2">
                {entries.map((entry) => {
                  const combo = entry.combo;
                  const binding = combo?.binding;
                  const behaviorName = binding
                    ? behaviors[binding.behaviorId]?.displayName || "Unknown"
                    : "—";
                  const positions = combo?.keyPositions || [];
                  const configuredKeys =
                    positions.length > 0
                      ? positions.map(keyLabel).join(" + ")
                      : "No keys configured";
                  const displayName = combo?.name?.trim() || configuredKeys;
                  const selected = entry.index === selectedIndex;

                  return (
                    <li
                      key={entry.index}
                      onMouseEnter={(event) => {
                        if (viewMode === "list" && previewPositions) {
                          setHoverPreview({
                            anchor: event.currentTarget,
                            title: displayName,
                            positions,
                          });
                        }
                      }}
                      onMouseLeave={() => setHoverPreview(null)}
                      onFocusCapture={(event) => {
                        if (viewMode === "list" && previewPositions) {
                          setHoverPreview({
                            anchor: event.currentTarget,
                            title: displayName,
                            positions,
                          });
                        }
                      }}
                      onBlurCapture={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                          setHoverPreview(null);
                        }
                      }}
                    >
                      <SidebarCard
                        selected={selected}
                        onSelect={() => onComboSelected?.(entry.index)}
                      >
                        <div className="flex flex-col gap-0.5">
                          <span className="truncate text-base font-medium">
                            {displayName}
                          </span>
                          {viewMode === "expanded" ? (
                            <>
                              <span className="truncate text-sm opacity-60">
                                {combo?.name?.trim() ? behaviorName : "Combo #" + entry.index}
                              </span>
                              {binding ? (
                                <span className="inline-flex text-base opacity-70 [&_svg]:size-4">
                                  <HidUsageLabel hid_usage={binding.param1} verbose />
                                </span>
                              ) : null}
                            </>
                          ) : combo?.name?.trim() ? (
                            <span className="truncate text-xs opacity-60">
                              {configuredKeys}
                            </span>
                          ) : null}
                        </div>
                        {viewMode === "expanded" &&
                          (previewPositions ? (
                            <div
                              ref={entry === combos.combos[0] ? slotRef : undefined}
                              className="mt-1.5 flex justify-start"
                            >
                              <PhysicalLayout
                                positions={previewPositions}
                                oneU={oneU}
                                keyVariant="preview"
                                selectedPositions={positions}
                              />
                            </div>
                          ) : (
                            <div className="mt-1 font-mono text-xs opacity-60">
                              {positions.join(", ") || "no keys"}
                            </div>
                          ))}
                      </SidebarCard>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
          {draftSelected && (
            <SidebarCard selected>
              {/* Same two-line shape as a real row: name on top, detail below. */}
              <div className="flex flex-col gap-0.5">
                <span className="truncate text-base font-medium">
                  New combo
                </span>
                <span className="text-base opacity-70">Not saved yet</span>
              </div>
            </SidebarCard>
          )}
        </ul>
      )}
      {viewMode === "list" && previewPositions && hoverPreview ? (
        <ComboHoverPreview
          preview={hoverPreview}
          layoutPositions={previewPositions}
        />
      ) : null}
      <Button
        className="w-full justify-center"
        variant="ghost"
        icon={<Plus />}
        isDisabled={!canAdd || !onAddCombo}
        onPress={() => onAddCombo?.()}
      >
        Add combo
      </Button>
    </div>
  );
};
