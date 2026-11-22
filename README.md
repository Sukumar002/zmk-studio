# ZMK Studio Custom

An experimental personal/community fork of ZMK Studio focused on practical split-keyboard workflows: runtime combo editing, firmware-defined custom behaviors, clearer key legends, backup/restore, mouse settings, and standalone desktop builds.

## Web app

https://custom-zmk-studio.onrender.com/

The hosted build provides the same custom Studio frontend. For USB access in the browser, use a Chromium-based browser with Web Serial support such as Chrome or Edge.

## Firmware compatibility

Standard ZMK Studio functionality can still work with a normal Studio-enabled ZMK firmware build. The extended features in this fork — especially runtime combo editing, runtime custom-behavior editing, and dynamic mouse settings — require matching firmware-side RPC/protocol support.

Installing ZMK Studio Custom by itself does **not** add those capabilities to stock firmware.

### Recommended firmware base

For the initial modular dongle profile, point your ZMK config at this tested ZMK fork/commit:

```yaml
manifest:
  remotes:
    - name: sukumar
      url-base: https://github.com/Sukumar002

  projects:
    - name: zmk
      remote: sukumar
      revision: 7e05bf9846900e6eafd7b4665ac5240dcaca7b39
      import: app/west.yml

  self:
    path: config
```

That firmware revision pins the matching `zmk-studio-messages` protocol definitions at commit `e416c02ad1a431de504270ed2477190a0ab5d5c2` through `app/west.yml`, so a keyboard config does not need to add the messages repository separately. The matching TypeScript client development branch is `architecture/pinned-studio-protocol` (commit `74b51813c3bcd762f548d4296d896a6ebc55d95a`); its postinstall uses the pinned submodule commit and no longer fetches a moving `main` branch.

### Enable Studio on the central half / dongle

The Studio-capable build target must enable ZMK Studio and an RPC transport. A typical GitHub Actions `build.yaml` entry looks like:

```yaml
- board: <your-central-board>
  shield: <your-central-shield>
  snippet: studio-rpc-usb-uart
  cmake-args: -DCONFIG_ZMK_STUDIO=y
```

The initial modular platform profile enables combo runtime editing when Studio RPC is enabled, but deliberately keeps `CONFIG_ZMK_BEHAVIOR_RUNTIME_EDITING=n` by default. This is intentional: hold-tap and sticky-key timing remains firmware-defined and cannot be changed accidentally through Studio while ordinary key remapping and combo editing are in use.

Runtime custom-behavior editing can still be enabled explicitly in a future profile, but it is not part of the initial regression-safe profile. Do not enable it for the first board migrations.

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
