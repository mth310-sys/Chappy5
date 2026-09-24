# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-24
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before positive write

## Closed boundaries retained
- through 2025-11-17: previous closed boundaries retained.
- 2025-12-08 — CLOSED 9/9.
- 2025-12-22 — CLOSED 3/3.
- 2026-01-05 — CLOSED 11/11.
- 2026-01-19 — CLOSED 3/3.
- 2026-02-02 — CLOSED 10/10.
- 2026-03-02 — CLOSED 12/12; 11 LT-equipped records, 1 LT-negative exclusion.
- 2026-03-16 — CLOSED 5/5; 1 LT-equipped record, 4 LT-negative exclusions.
- 2026-04-06 — CLOSED 7/7; 5 records (4 COMPLETE_CORE + 1 CONFLICT), 2 LT-negative exclusions.

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。
- `P戦国乙女7 終焉の関ヶ原 99ver.` — RUSH突入約63%対約53%の同型式ページ競合。CONFLICT維持。
- `P ウルトラマンメビウス デカヘソ319` — LT搭載判定自体が資料競合。CONFLICT。詳細はrecord参照。

## 2026-04-20 boundary — OPEN 2/3
Boundary evidence:
- https://1geki.jp/newmachinecalender/202604/ — 2026-04-20 パチンコ3機種。retrieved 2026-09-24

Queue:
1. eリング 最恐領域 — COMPLETE_CORE
2. e86-エイティシックス- — COMPLETE_CORE
3. eフィーバーキン肉マン — NEXT

### 1. eリング 最恐領域 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-20_e_ring_saikyou_ryouiki.md`
- manufacturer: オレンジ（藤商事グループ）。型式 `eリング最恐領域RHA`、検定番号 `5P1458`、2026-04-20導入。
- 一種二種混合 / LT3.0プラス。通常図柄揃い約1/399、貞子チャージ約1/2723、チャージ込み大当り1/348。
- 下位RUSHなし。図柄揃い時約57%でLT/RUSH `最恐領域` へ直行。通常時全抽選基準の総LT到達率は直接値未確認のため推測しない。
- `最恐領域` は二段階ST。前半 `貞子覚醒BURST` 5回・約1/8、後半 `呪いの連鎖` 70回・約1/129、TOTAL継続約70%。
- 前半当選は6000個50% / 3000個50%。3000個=特図2大当り2回分、6000個=4回分の合計。後半当選はALL1500個。
- confidence: ANALYSIS_HIGH

### 2. e86-エイティシックス- — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-20_e_86_eightysix.md`
- manufacturer: アムテックス（平和グループ）。型式 `eエイティシックスMAM2`、検定番号 `5P1519`、2026-04-20導入。
- ライトミドル / スマパチ / LT3.0+ / 1種2種混合。通常約1/239.1。
- 特図1: 4500個（1500×3）+ Operation86 約0.5% / 300個+CHALLENGE TO THE BATTLEFRONT 約54.5% / 300個+通常 約45.0%。
- CHALLENGE突入約55%、突破約55%（LAST JUDGE引き戻し期待度約29%込み）。突破または全回転直行からLT `Operation86` へ。
- Operation86継続約79%（LAST JUDGE込み）。特図2は1500個約70% / 300個約30%。
- 1500BONUS当選時の約30%（Operation86継続後）で上乗せ特化BONUS `キリヤ血戦`。1戦目V獲得濃厚、2戦目以降約70%、最大5戦、終了後Operation86へ復帰。
- キリヤ血戦の大出玉表示は2R/10R複数大当りの合計。単一大当り出玉ではない。
- 通常時全初当り基準の総LT到達率は直接公表値未確認のため、経路値から独自合算しない。
- sources / retrieved 2026-09-24:
  - https://www.p-world.co.jp/machine/database/10451
  - https://1geki.jp/pachinko/e_eightysix/
  - https://pachimaga.com/free/mach/maker-p/amutex/064767.php
  - https://hisshobon.com/machines/e86-%E3%82%A8%E3%82%A4%E3%83%86%E3%82%A3%E3%82%B7%E3%83%83%E3%82%AF%E3%82%B9/
  - https://www.pachibee.jp/machines/index/126030009
- confidence: ANALYSIS_HIGH
- conflicts: none

## Effective DB state
- machine records: **197**
- COMPLETE_CORE: **193**
- CONFLICT: **4**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
2026-04-20 boundary candidate #3 **`eフィーバーキン肉マン`**. Duplicate-search first, verify formal model/manufacturer/LT status, collect full core/LT fields, then close the 2026-04-20 boundary if no additional same-day candidates are found.
