# ペカチュウ Ver.0.6.2 / ZELVOLT原型機

- Source repository: `mth310-sys/yusosha-slot`
- Source path: `pekachu_v062/`
- Source version: `ペカチュウ Ver.0.6.2`
- Source main commit at copy time: `b512c6243aedeb1e29582b06a201a5cdd27935a1`
- Source tree: `65d0bc643df71d62c961921c40d84137d330f945`
- Chappy5 destination: `src/game/slot-pachiro/machines/pekachu/`

## 現在の位置づけ

このコピーは現行ペカチュウの動作基準であり、次世代リニューアル機 **ZELVOLT（ゼルヴォルト）** の原型として保持する。

ZELVOLTの確定方針・未確定項目・移行計画は `ZELVOLT_PLAN.md` を正とする。

現行機を一括で置換せず、正常動作を基準に段階的にZELVOLTへ更新する。

## Current copy state

`index.html` はChappy5へコピー済み。7個のリール図柄PNGはまだこのディレクトリへ物理コピーされておらず、HTMLの `<base>` を通じて元の `yusosha-slot/pekachu_v062/` を参照している。

Source asset files:
- `7_red.png`
- `7_white_purple.png`
- `bar.png`
- `bell.png`
- `cherry.png`
- `grape.png`
- `star.png`

元リポジトリを削除・再構成する前に、上記7 PNGをこのディレクトリへ移行し、`index.html` の `<base>` を削除すること。
