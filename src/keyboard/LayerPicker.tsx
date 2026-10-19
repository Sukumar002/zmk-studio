import { Plus } from "lucide-react";
import { useCallback, useMemo } from "react";
import {
  DropIndicator,
  ListBox,
  ListBoxItem,
  Selection,
  useDragAndDrop,
} from "react-aria-components";

import { Button } from "../misc/Button";
import { controlFocusRing, cx, selectableCard } from "../misc/controlStyles";
import { LayerToolbar } from "./LayerToolbar";

interface Layer {
  id: number;
  name?: string;
}

export type LayerClickCallback = (index: number) => void;
export type LayerMovedCallback = (index: number, destination: number) => void;

interface LayerPickerProps {
  layers: Array<Layer>;
  selectedLayerIndex: number;
  canAdd?: boolean;
  availableLayers?: number;

  onLayerClicked?: LayerClickCallback;
  onLayerMoved?: LayerMovedCallback;
  onAddClicked?: () => void | Promise<void>;
  onRenameLayer?: (index: number, name: string) => void;
  onDeleteLayer?: (index: number) => void;
}

// Layer list. Mirrors the Combos/Behaviours sidebars: a plain title, a
// full-width Add button, and selectable cards. Rename/delete actions live on
// each layer row and reveal on hover/focus while their reserved width keeps the
// layer label stable. Drag a card to move that layer.
export const LayerPicker = ({
  layers,
  selectedLayerIndex,
  canAdd,
  availableLayers,
  onLayerClicked,
  onLayerMoved,
  onAddClicked,
  onRenameLayer,
  onDeleteLayer,
  ...props
}: LayerPickerProps) => {
  const layer_items = useMemo(() => {
    return layers.map((l, i) => ({
      name: l.name || i.toLocaleString(),
      id: l.id,
      index: i,
      selected: i === selectedLayerIndex,
    }));
  }, [layers, selectedLayerIndex]);

  const selectionChanged = useCallback(
    (s: Selection) => {
      if (s === "all") {
        return;
      }

      onLayerClicked?.(layer_items.findIndex((l) => s.has(l.id)));
    },
    [onLayerClicked, layer_items]
  );

  const { dragAndDropHooks } = useDragAndDrop({
    renderDropIndicator(target) {
      return (
        <DropIndicator
          target={target}
          className={"data-[drop-target]:outline outline-1 outline-accent"}
        />
      );
    },
    getItems: (keys) =>
      [...keys].map((key) => ({ "text/plain": key.toLocaleString() })),
    onReorder(e) {
      const startIndex = layer_items.findIndex((l) => e.keys.has(l.id));
      const endIndex = layer_items.findIndex((l) => l.id === e.target.key);
      onLayerMoved?.(startIndex, endIndex);
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-bold uppercase opacity-70">Layers</h2>
      <ListBox
        aria-label="Keymap Layer"
        selectionMode="single"
        items={layer_items}
        disallowEmptySelection={true}
        selectedKeys={
          layer_items[selectedLayerIndex]
            ? [layer_items[selectedLayerIndex].id]
            : []
        }
        className="flex flex-col gap-2"
        onSelectionChange={selectionChanged}
        dragAndDropHooks={dragAndDropHooks}
        {...props}
      >
        {(layer_item) => (
          <ListBoxItem
            textValue={layer_item.name}
            className={({ isSelected }) =>
              cx(
                selectableCard.base,
                "group flex items-center justify-between gap-2",
                controlFocusRing,
                isSelected ? selectableCard.selected : selectableCard.resting
              )
            }
          >
            <span className="min-w-0 flex-1 truncate text-base font-medium">
              {layer_item.name}
            </span>
            <LayerToolbar
              name={layers[layer_item.index]?.name ?? ""}
              placeholder={layer_item.index.toString()}
              canDelete={layers.length > 1}
              className="w-16 justify-end opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
              onRename={(name) => onRenameLayer?.(layer_item.index, name)}
              onDelete={() => onDeleteLayer?.(layer_item.index)}
            />
          </ListBoxItem>
        )}
      </ListBox>
      <div>
        <Button
          className="w-full justify-center"
          variant="ghost"
          icon={<Plus />}
          isDisabled={!canAdd || !onAddClicked}
          onPress={() => onAddClicked?.()}
        >
          Add layer
        </Button>
        <p className="mt-1 text-xs text-base-content/50">
          {(availableLayers ?? 0) > 0
            ? `${availableLayers} spare layer slot${availableLayers === 1 ? "" : "s"} available`
            : "No spare layer slots exposed by firmware."}
        </p>
      </div>
    </div>
  );
};
