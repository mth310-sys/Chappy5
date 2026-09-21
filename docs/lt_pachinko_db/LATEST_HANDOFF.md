# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-07-07 `eフィーバー炎炎ノ消防隊2 シンラver.`
- duplicate search performed before record creation

## Boundary discovery
### 2025-07-07 — OPEN
Same-day queue remains:
1. `e東京リベンジャーズ` — COMPLETE_CORE
2. `eフィーバー炎炎ノ消防隊2 シンラver.` — COMPLETE_CORE
3. `eフィーバー炎炎ノ消防隊2 紅丸ver.` — NEXT
4. `e犬夜叉3.0`
5. `e一方通行 とある魔術の禁書目録`
6. `e冒険島`
7. `Pドラムだ!金ドン 花火外伝99ver.`
8. `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.`
9. `PA CYBORG009 RULE OF SACRIFICE LT99ver.`

Boundary sources retained:
- https://p-johojima.jp/machine_spec/post-2074/
- https://p-kn.com/calendar/202507/
- https://1geki.jp/newmachinecalender/202507/
- https://www.all7.jp/plans/index/2025/07

## This relay
### eフィーバー炎炎ノ消防隊2 シンラver. — COMPLETE_CORE
- SANKYO（製造: ジェイビー） / 型式 `eフィーバー炎炎ノ消防隊2` / canonical 2025-07-07.
- LT3.0 PLUS対応。一種二種混合の直LT型で、通常RUSHと上位LTの二段階ではなくRUSH=LT `炎上バトルモード`。
- 通常時図柄揃い約1/399.9（1500個大当り+命の呼吸チャレンジ突入大当りの合算）、大当り1/349.9、炎炎チャージ約1/2613。定義を分離。
- LT中図柄揃い約1/2.0（特図2、大当り+小当り合算）、転落小当り約1/7.9。
- LT突入は特図1から約50%。炎炎チャージ→命の呼吸チャレンジ引き戻し約49%の経路を含め、メーカー公式TOTAL約50.5%。
- LTは時短250回だが転落小当りで終了、継続約80%。
- 通常時図柄揃い振り分けは解析資料で3000個+LT約50% / 1500個通常約49% / 300個+命の呼吸チャレンジ約1%。
- LT中は全大当り1500個以上。一部 `超炎上BURST` は3000個+1500個×約50%上乗せループ。白/緑/青ランプで発生期待度約12.5%/25%/50%。
- 出玉は払い出し。3000個=1500個×2。
- record: `docs/lt_pachinko_db/machines/2025-07-07_e_fever_fire_force_2_shinra_ver.md`
- commit: `f5ff767e4f49a158c7d7259be2b22cccfa4158ce`

Sources:
- https://www.sankyo-fever.jp/products/machine_list/pxj/spec/
- https://www.sankyo-fever.jp/collection/984/
- https://news.p-world.co.jp/articles/30776/yugitsushin
- https://www.pachibee.jp/machines/index/125060000
- https://nana-press.com/kaiseki/machine/967/30173/
- https://hisshobon.com/machineinfo/98019/

## Pre-verified remaining queue evidence
Do not skip machine-level research:
- `eフィーバー炎炎ノ消防隊2 紅丸ver.` — official SANKYO spec confirms LT `炎上バトルモード`, TOTAL entry約52%, continuation約73%, right payout 1500 or 4500+3000×約50%上乗せループ. https://www.sankyo-fever.jp/products/machine_list/pxj/spec/
- `e犬夜叉3.0` — LT3.0 PLUS / LT高確率ZONE `奈落探索MODE` and `ブッた斬りRUSH`. https://news.p-world.co.jp/articles/31178/nippon
- `e一方通行 とある魔術の禁書目録` — LT3.0 PLUS, RUSHチャレンジ約51%, success約60%, LT HYPER約75%. https://news.p-world.co.jp/articles/30868/greenbelt
- `e冒険島` — LT `暴険RUSH`, entry25.9%, continuation約77%, 2回転落システム. https://www.p-world.co.jp/machine/database/10276
- `Pドラムだ!金ドン 花火外伝99ver.` — lower 金ドンRUSH約80%, RUSH終了後LTチャレンジ, LT `SPECIAL金ドンRUSH`約95%. https://news.p-world.co.jp/articles/30764/yugitsushin
- `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` — 覚醒HYPER約51%/約75%, LT `超覚醒HYPER`約91%. https://news.p-world.co.jp/articles/31052/yugitsushin
- `PA CYBORG009 RULE OF SACRIFICE LT99ver.` — lower RUSH約40%/約75%, LT `超加速RUSH`約95%, lower RUSH中10R+LT 9.5%. https://news.p-world.co.jp/articles/31173/greenbelt

## Effective DB state
Previous effective state: 104 records / 103 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **105**
- COMPLETE_CORE: **104**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-07-07 OPEN boundary with `eフィーバー炎炎ノ消防隊2 紅丸ver.`. Then process `e犬夜叉3.0` → `e一方通行 とある魔術の禁書目録` → `e冒険島` → `Pドラムだ!金ドン 花火外伝99ver.` → `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` → `PA CYBORG009 RULE OF SACRIFICE LT99ver.`. Close 2025-07-07 only after all candidates are accounted for and rechecked against at least two calendars.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
