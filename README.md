# jupytergis-ui

JupyterLab-themed shadcn / Base UI components for Jupyter extensions.

## Install

```bash
pnpm add jupytergis-ui
```

**Peers:** `react`, `react-dom` (`^18` or `^19`).

Under JupyterLab 4 the host supplies React 18. The kit stays React 18–compatible
(`forwardRef` on Base UI `render=` chains) so it works in Lab today and in
React 19 apps later.

## Styles (required)

Import **once** in your extension stylesheet. JupyterLab theme tokens (`--jp-*`)
must already be on the page:

```css
@import '~jupytergis-ui/style/index.css';
```

```ts
import 'jupytergis-ui/style';
```

If your app adds its own Tailwind utility classes, run a separate Tailwind build
for those sources. This package’s CSS only covers kit components.

## Usage

```tsx
import { Button, Input, NativeSelect, Dialog } from 'jupytergis-ui';
```

## Develop

```bash
pnpm install
pnpm run build
```

Built artifacts: `lib/` (JS) and `style/tailwind.css` (generated, gitignored).

## What’s included

Buttons, inputs, selects/comboboxes, dialogs/sheets/drawers, tabs, tips/banners,
calendar/date picker, and related primitives — plus `cn` and JupyterLab dialog
style undo helpers (`stripJupyter*`).
