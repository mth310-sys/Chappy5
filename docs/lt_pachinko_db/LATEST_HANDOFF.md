# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-07-07 `eフィーバー炎炎ノ消防隊2 紅丸ver.`
- duplicate search performed before record creation

## Boundary discovery
### 2025-07-07 — OPEN
Same-day queue:
1. `e東京リベンジャーズ` — COMPLETE_CORE
2. `eフィーバー炎炎ノ消防隊2 シンラver.` — COMPLETE_CORE
3. `eフィーバー炎炎ノ消防隊2 紅丸ver.` — COMPLETE_CORE
4. `e犬夜叉3.0` — NEXT
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
### eフィーバー炎炎ノ消防隊2 紅丸ver. — COMPLETE_CORE
- SANKYO（製造: ジェイビー） / 型式 `eフィーバー炎炎ノ消防隊2MS` / canonical 2025-07-07.
- LT3.0 PLUS対応。一種二種混合・転落型の直LT機。下位RUSHはなくRUSH=LT `炎上バトルモード`。
- 通常時図柄揃い約1/399.9（1500個大当りと命の呼吸チャレンジ突入大当りの合算）、大当り1/349.9、炎炎チャージ約1/2186。定義を分離。
- LT中図柄揃い約1/2.0（特図2、大当り+小当り合算）、転落小当り約1/5.3。
- LT突入は特図1約50%。命の呼吸チャレンジ引き戻し約50%経路を含むメーカー/業界公表TOTAL約52%。
- LTは時短250回だが転落小当りで終了、継続約73%。
- 通常時振り分けは解析資料で3000個+LT約50% / 300個+命の呼吸チャレンジ約4% / 1500個通常約46%。
- LT中大当りは1500個または `超炎上BURST` 4500個+3000個×約50%上乗せループ。解析資料で超炎上BURST平均発生約26%、状態別白約14% / 緑約33% / 青約50%。
- 出玉は払い出し。3000個=1500×2、4500個=1500×3。
- シンラver.の約80%継続・転落約1/7.9・BURST 3000+1500ループとは混同しない。
- record: `docs/lt_pachinko_db/machines/2025-07-07_e_fever_fire_force_2_benimaru_ver.md`
- commit: `9923e033964557de4aa227f7b2cb7741804b7e71`

Sources:
- https://www.sankyo-fever.jp/products/machine_list/pxj/spec/
- https://www.sankyo-fever.jp/collection/985/
- https://news.p-world.co.jp/articles/30777/yugitsushin
- https://www.pachibee.jp/machines/kouryaku/125060001
- https://nana-press.com/kaiseki/machine/967/30658/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/538/kh04.php

## Pre-verified remaining queue evidence
Do not skip machine-level research:
- `e犬夜叉3.0` — LT3.0 PLUS / LT高確率ZONE `奈落探索MODE` and `ブッた斬りRUSH`. https://news.p-world.co.jp/articles/31178/nippon
- `e一方通行 とある魔術の禁書目録` — LT3.0 PLUS, RUSHチャレンジ約51%, success約60%, LT HYPER約75%. https://news.p-world.co.jp/articles/30868/greenbelt
- `e冒険島` — LT `暴険RUSH`, entry25.9%, continuation約77%, 2回転落システム. https://www.p-world.co.jp/machine/database/10276
- `Pドラムだ!金ドン 花火外伝99ver.` — lower 金ドンRUSH約80%, RUSH終了後LTチャレンジ, LT `SPECIAL金ドンRUSH`約95%. https://news.p-world.co.jp/articles/30764/yugitsushin
- `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` — 覚醒HYPER約51%/約75%, LT `超覚醒HYPER`約91%. https://news.p-world.co.jp/articles/31052/yugitsushin
- `PA CYBORG009 RULE OF SACRIFICE LT99ver.` — lower RUSH約40%/約75%, LT `超加速RUSH`約95%, lower RUSH中10R+LT 9.5%. https://news.p-world.co.jp/articles/31173/greenbelt

## Effective DB state
Previous effective state: 105 records / 104 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **106**
- COMPLETE_CORE: **105**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-07-07 OPEN boundary with `e犬夜叉3.0`. Then process `e一方通行 とある魔術の禁書目録` → `e冒険島` → `Pドラムだ!金ドン 花火外伝99ver.` → `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` → `PA CYBORG009 RULE OF SACRIFICE LT99ver.`. Close 2025-07-07 only after all candidates are accounted for and rechecked against at least two calendars.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
