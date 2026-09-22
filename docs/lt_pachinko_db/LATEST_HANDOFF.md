# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-07-07 `e冒険島`
- duplicate search performed before record creation

## Boundary discovery
### 2025-07-07 — OPEN
Same-day queue:
1. `e東京リベンジャーズ` — COMPLETE_CORE
2. `eフィーバー炎炎ノ消防隊2 シンラver.` — COMPLETE_CORE
3. `eフィーバー炎炎ノ消防隊2 紅丸ver.` — COMPLETE_CORE
4. `e犬夜叉3.0` — COMPLETE_CORE
5. `e一方通行 とある魔術の禁書目録` — COMPLETE_CORE
6. `e冒険島` — COMPLETE_CORE
7. `Pドラムだ!金ドン 花火外伝99ver.` — NEXT
8. `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.`
9. `PA CYBORG009 RULE OF SACRIFICE LT99ver.`

Boundary sources retained:
- https://p-johojima.jp/machine_spec/post-2074/
- https://p-kn.com/calendar/202507/
- https://1geki.jp/newmachinecalender/202507/
- https://www.all7.jp/plans/index/2025/07

## This relay
### e冒険島 — COMPLETE_CORE
- 三洋物産 / 型式 `e冒険島EHLC2` / canonical 2025-07-07.
- メーカー公式プレスリリースでLT3.0 PLUS、チャージ/下位RUSH非搭載、RUSH突入=LT発動の直LT型を確認。
- 通常大当り約1/155.2、LT中大当り約1/59.9、転落図柄約1/63.7。
- LT `暴険RUSH` は特図1の25.9%で直接突入。メーカー公式が通常回転基準LT突入確率約1/599も直接公表。
- 特図1: 約3000個+LT 0.1% / 約300個+LT 25.8% / 約300個+通常74.1%。3000個は1500個×2の合計払い出し。
- LTは時短10000回、2回転落システム。大当り間で転落図柄約1/63.7を2回引くと終了し、大当り時は転落ストック2個へ回復。継続約77%（詳細約76.5%）。丸め差でCONFLICTではない。
- 特図2: 約3000個+欲望ループ40% / 約1500個60%、いずれもLT継続。欲望ループは約1500個上乗せを40%でループ。
- 遊タイム非搭載。
- record: `docs/lt_pachinko_db/machines/2025-07-07_e_boukenjima.md`
- commit: `d15ec8c37af3035b3a3c1379d091cdc92b81ad56`

Sources:
- https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20250425.pdf
- https://www.sanyobussan.co.jp/products/pk_boukenjima/
- https://www.p-world.co.jp/machine/database/10276
- https://nana-press.com/kaiseki/machine/985/29607/
- https://1geki.jp/pachinko/e_boukenjima/51/

## Pre-verified remaining queue evidence
Do not skip machine-level research:
- `Pドラムだ!金ドン 花火外伝99ver.` — lower 金ドンRUSH約80%, RUSH終了後LTチャレンジ, LT `SPECIAL金ドンRUSH`約95%. https://news.p-world.co.jp/articles/30764/yugitsushin
- `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` — 覚醒HYPER約51%/約75%, LT `超覚醒HYPER`約91%. https://news.p-world.co.jp/articles/31052/yugitsushin
- `PA CYBORG009 RULE OF SACRIFICE LT99ver.` — lower RUSH約40%/約75%, LT `超加速RUSH`約95%, lower RUSH中10R+LT 9.5%. https://news.p-world.co.jp/articles/31173/greenbelt

## Effective DB state
Previous effective state: 108 records / 107 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **109**
- COMPLETE_CORE: **108**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-07-07 OPEN boundary with `Pドラムだ!金ドン 花火外伝99ver.`. Then process `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` → `PA CYBORG009 RULE OF SACRIFICE LT99ver.`. Close 2025-07-07 only after all candidates are accounted for and rechecked against at least two calendars.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
