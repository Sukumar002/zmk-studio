# ZMK Studio Custom

An experimental personal/community fork of ZMK Studio focused on practical split-keyboard workflows: runtime combo editing, custom behaviors, clearer key legends, backup/restore, mouse settings, and standalone desktop builds.

## Web app

https://custom-zmk-studio.onrender.com/

The hosted build provides the same custom Studio frontend. For USB access in the browser, use a Chromium-based browser with Web Serial support such as Chrome or Edge.

## Firmware compatibility

Standard ZMK Studio functionality can still work with a normal Studio-enabled ZMK firmware build. The extended features in this fork — especially runtime combo editing, runtime custom-behavior editing, and dynamic mouse settings — require matching firmware-side RPC/protocol support.

Installing ZMK Studio Custom by itself does **not** add those capabilities to stock firmware.

### Recommended firmware base

For the same feature set used by the current v1 application, point your ZMK config at the tested ZMK fork/commit:

```yaml
manifest:
  remotes:
    - name: sukumar
      url-base: https://github.com/Sukumar002

  projects:
    - name: zmk
      remote: sukumar
      revision: b19edf953498bf9d0a4598eb39d04e7e43339b08
      import: app/west.yml

  self:
    path: config
```

That ZMK commit already pulls the matching custom `zmk-studio-messages` protocol definitions through its own `app/west.yml`, so a keyboard config does not need to add the messages repository separately.

### Enable Studio on the central half / dongle

The Studio-capable build target must enable ZMK Studio and an RPC transport. A typical GitHub Actions `build.yaml` entry looks like:

```yaml
- board: <your-central-board>
  shield: <your-central-shield>
  snippet: studio-rpc-usb-uart
  cmake-args: -DCONFIG_ZMK_STUDIO=y
```

The custom firmware enables the following automatically when Studio RPC is enabled:

```text
CONFIG_ZMK_COMBO_RUNTIME_EDITING=y
CONFIG_ZMK_BEHAVIOR_RUNTIME_EDITING=y
```

These can also be set explicitly in a central shield/board `.conf` if desired.

Runtime custom-behavior editing currently provides pre-allocated editable pools for hold-tap and sticky-key behaviors. The pool is supplied by the custom ZMK firmware; users do not need to add those runtime behavior nodes to their own keymap.

### Runtime-addable layers

Layer add/remove/reorder is supported by the keymap RPC when the firmware exposes spare layer slots. ZMK preallocates those slots in the keymap devicetree, so Studio cannot create an unlimited number of layers at runtime.

For example, a keyboard can reserve four Studio slots with nodes such as:

```dts
studio_runtime_layer_1 { status = "reserved"; };
studio_runtime_layer_2 { status = "reserved"; };
studio_runtime_layer_3 { status = "reserved"; };
studio_runtime_layer_4 { status = "reserved"; };
```

When Studio RPC is enabled, ZMK reports those as `availableLayers`. ZMK Studio Custom enables **Add layer** while at least one slot is available and shows the remaining runtime-layer capacity in the Layers sidebar. Removing a runtime layer returns that slot to the available pool.

### Mouse settings

For keyboard-driven mouse support and the Mouse Settings panel, enable:

```conf
CONFIG_ZMK_POINTING=y
```

The custom Studio frontend requests the pointing-settings RPC and renders the Mouse Settings panel only when the connected firmware returns that data.

That means the panel is dynamic based on **firmware pointing capability**:

- `CONFIG_ZMK_POINTING=n` / pointing RPC unavailable → Mouse Settings is hidden.
- `CONFIG_ZMK_POINTING=y` / pointing RPC available → Mouse Settings is shown.

The frontend intentionally uses this firmware capability signal rather than scanning the keymap for mouse bindings. This keeps visibility lightweight and remains correct even when mouse behaviors are added, removed, aliased, or placed on different layers.

## What the custom firmware adds

The compatible firmware fork contains the firmware-side support used by this Studio build, including:

- runtime combo pool, editing, persistence, naming, ordering and layer masks
- Studio combo RPC subsystem
- runtime custom-behavior pool and persistence
- Studio custom-behavior RPC extensions and metadata
- matching custom Studio protocol messages
- pointing/mouse settings RPC support when `CONFIG_ZMK_POINTING=y`
- larger Studio RPC buffers required by combo/custom-behavior requests

Board-specific behaviors such as OLED controls, timeout controls, layout-shift behaviors, or Bluetooth helper behaviors remain board/keymap features. They will appear meaningfully in Studio when the firmware exposes suitable behavior metadata.

## Credits

This project is derived from the official ZMK Studio repositories maintained by the ZMK project and its contributors, and from Daniel Svane's custom-keyboard/combos work:

- https://github.com/zmkfirmware/zmk
- https://github.com/zmkfirmware/zmk-studio
- https://github.com/zmkfirmware/zmk-studio-ts-client
- https://github.com/zmkfirmware/zmk-studio-messages
- https://github.com/danielsvane/zmk-studio
- https://github.com/danielsvane/zmk-studio-ts-client
- https://github.com/danielsvane/zmk-studio-messages

See the release notes and repository license files for attribution, licensing, and the unsigned-build disclaimer.
