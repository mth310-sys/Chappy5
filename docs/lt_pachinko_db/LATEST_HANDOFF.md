# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-25
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
- 2026-04-20 — CLOSED 3/3; all 3 LT-equipped and COMPLETE_CORE.

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。
- `P戦国乙女7 終焉の関ヶ原 99ver.` — RUSH突入約63%対約53%の同型式ページ競合。CONFLICT維持。
- `P ウルトラマンメビウス デカヘソ319` — LT搭載判定自体が資料競合。CONFLICT。詳細はrecord参照。

## 2026-04-20 boundary — CLOSED 3/3
Boundary evidence:
- https://1geki.jp/newmachinecalender/202604/ — 2026-04-20 パチンコ3機種。retrieved 2026-09-24
- https://p-johojima.jp/machine_spec/post-2074/ — 2026-04-20同日3機種を再照合。retrieved 2026-09-25

Queue:
1. eリング 最恐領域 — COMPLETE_CORE
2. e86-エイティシックス- — COMPLETE_CORE
3. eフィーバーキン肉マン — COMPLETE_CORE

### 3. eフィーバーキン肉マン — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-20_e_fever_kinnikuman.md`
- SANKYO（製造: ジェイビー）。型式 `eフィーバーキン肉マン`、検定番号 `5P1492`、2026-04-20導入。
- スマパチ / LT3.0+ / 1種2種混合 / 直LT。図柄揃い約1/399.9、資料上の大当り確率1/349.9。
- 特図1: 1500個+LT 約50% / 300個+LT 約1% / 1500個+通常 約49%。RUSH突入約51%でRUSH=LT。
- LT `正義超人バトルモード / オールスターモード` はST（時短）145回、継続約77%。リーチ発生約1/92.3、リーチ後の特図2 5回転引き戻し期待度約89%。c時短/STリセットを含む公表TOTAL定義。
- 特図2: 7500個0.6% / 6000個5.6% / 4500個20.2% / 3000個36.5% / 1500個33.1% / 出玉なしSTリセット4.0%。
- 3000〜7500個は1500個×2〜5回の複数大当り合計払出であり、単一大当り出玉ではない。
- 遊タイム非搭載。145回スルーで通常時へ。解析資料では残保留なし。
- sources / retrieved 2026-09-25:
  - https://www.sankyo-fever.jp/collection/993/
  - https://news.p-world.co.jp/articles/32834/yugitsushin
  - https://hisshobon.com/machineinfo/100936/
  - https://hisshobon.com/machineinfo/100935/
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/550/kh03.php
  - https://pachiseven.jp/articles/detail/25877
  - https://hazuse.com/hd/e%E3%83%95%E3%82%A3%E3%83%BC%E3%83%90%E3%83%BC%E3%82%AD%E3%83%B3%E8%82%89%E3%83%9E%E3%83%B3/
- confidence: ANALYSIS_HIGH
- conflicts: none

## Next chronological boundary discovery
The next calendar boundary after 2026-04-20 is **2026-05-07**. Onegeki's current 2026-05 calendar lists two pachinko machines on that date:
1. `eまわるん超ワープ ギンギラパラダイス VIVA FESTA` — calendar tags LT; unprocessed.
2. `e ライザのアトリエ 常闇の女王と秘密の隠れ家` — calendar tags LT; unprocessed.
Boundary source: https://1geki.jp/newmachinecalender/202605/ (retrieved 2026-09-25). Cross-calendar source https://p-johojima.jp/machine_spec/post-2074/ also lists these two at 2026-05-07.

## Effective DB state
- machine records: **198**
- COMPLETE_CORE: **194**
- CONFLICT: **4**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
2026-05-07 boundary candidate #1 **`eまわるん超ワープ ギンギラパラダイス VIVA FESTA`**. Duplicate-search first, verify formal model/manufacturer/LT status and collect full core/LT fields. Then candidate #2 `e ライザのアトリエ 常闇の女王と秘密の隠れ家` before closing the 2026-05-07 boundary.
