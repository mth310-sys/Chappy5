# ペカチュウ Chappy5搭載用コピー

- Source repository: `mth310-sys/yusosha-slot`
- Source path: `pekachu_v062/`
- Source version: `ペカチュウ Ver.0.6.2`
- Source main commit at copy time: `b512c6243aedeb1e29582b06a201a5cdd27935a1`
- Source tree: `65d0bc643df71d62c961921c40d84137d330f945`
- Chappy5 destination: `src/game/slot-pachiro/machines/pekachu/`

## Current copy state

`index.html` is copied into Chappy5 without changing the game logic. The seven reel symbol PNGs are currently resolved from the original `yusosha-slot/pekachu_v062/` location through the HTML `<base>` element, because the GitHub connector used for this copy cannot directly transfer binary blobs between repositories.

Source asset files:
- `7_red.png`
- `7_white_purple.png`
- `bar.png`
- `bell.png`
- `cherry.png`
- `grape.png`
- `star.png`

Before deleting or restructuring the source repository, migrate these seven PNGs into this directory and remove the `<base>` element from `index.html`.
