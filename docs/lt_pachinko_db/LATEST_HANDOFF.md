# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: next pachinko introduction after 2025-06-16
- duplicate search performed before record creation

## Boundary discovery
### 2025-07-07 — OPEN
At least two independent calendars were re-enumerated. The next nationwide pachinko introduction boundary after 2025-06-16 is 2025-07-07.

Same-day candidates identified:
1. `e東京リベンジャーズ`
2. `eフィーバー炎炎ノ消防隊2 シンラver.`
3. `eフィーバー炎炎ノ消防隊2 紅丸ver.`
4. `e犬夜叉3.0`
5. `e一方通行 とある魔術の禁書目録`
6. `e冒険島`
7. `Pドラムだ!金ドン 花火外伝99ver.`
8. `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.`
9. `PA CYBORG009 RULE OF SACRIFICE LT99ver.`

Boundary sources:
- 情報島 2025-07-07 list: https://p-johojima.jp/machine_spec/post-2074/
- K-Navi July calendar: https://p-kn.com/calendar/202507/
- 一撃 July calendar: https://1geki.jp/newmachinecalender/202507/
- ALL7 July calendar: https://www.all7.jp/plans/index/2025/07

K-Navi lists `e犬夜叉3.0` as July上旬 rather than date-specific, while 情報島 and other introduction observations place it in the 7/7 boundary. Preserve canonical 2025-07-07 only after machine-level source confirmation when its turn is processed.

## This relay
### e東京リベンジャーズ — COMPLETE_CORE
- サミー（銀座製） / 型式 `e東京リベンジャーズGFEC` / canonical 2025-07-07.
- 通常約1/319.7、LT中約1/99.9、時短中約1/399〜1/399.6。
- LT3.0 PLUSの直LT型。通常初当り50%でLT `芭流覇羅決戦`へ直行、残り50%は普図時短 `決戦前夜` 100回。
- 決戦前夜引き戻し約22.2%。直行と引き戻しを合わせたLT/RUSH TOTAL突入約61%（約61.1%精密表記あり）。
- LTはST144回、継続約77%（解析精密約76.5%）。丸め差としてCONFLICTにしない。
- 特図1: 約3000個+α+LT 4% / 約300個+LT 46% / 約300個+時短100回 50%。
- LT中: 約4500個+α 2.5% / 約3000個 47.5% / 約1500個 50%、全てLT継続。
- 3000個以上側の一部で `渋谷JACK`。1500個上乗せが50%でループし、終了後LTへ戻る。
- 時短中の特図2はLT中と振り分けが異なり、解析資料では4500個+α 0.25% / 3000個 4.75% / 1500個 95%。定義を分離して保存。
- record: `docs/lt_pachinko_db/machines/2025-07-07_e_tokyo_revengers.md`
- commit: `9713d6d354571be999fd1153aecf2afa982ea9d1`

Sources:
- https://news.p-world.co.jp/articles/30756/yugitsushin
- https://news.p-world.co.jp/articles/31193/nippon
- https://www.p-world.co.jp/machine/database/10262
- https://hisshobon.com/machineinfo/98034/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/325/kh03.php
- https://p-kn.com/pachinko/4329/

## Pre-verified queue evidence
Do not skip research on each machine, but the following LT-positive evidence is already located:
- `eフィーバー炎炎ノ消防隊2 シンラver.` — industry source: LT `炎上バトルモード`, total entry約50.5%, continuation約80%, 2025-07上旬. https://news.p-world.co.jp/articles/30776/yugitsushin
- `eフィーバー炎炎ノ消防隊2 紅丸ver.` — LT `炎上バトルモード`, total entry約52%, continuation約73%. https://news.p-world.co.jp/articles/30777/yugitsushin
- `e犬夜叉3.0` — LT3.0 PLUS / LT高確率ZONE `奈落探索MODE` and `ブッた斬りRUSH`. https://news.p-world.co.jp/articles/31178/nippon and https://news.p-world.co.jp/articles/31311/greenbelt
- `e一方通行 とある魔術の禁書目録` — LT3.0 PLUS, RUSHチャレンジ約51%, success約60%, LT HYPER約75%, right ALL3000+ class. https://news.p-world.co.jp/articles/30868/greenbelt and https://nana-press.com/kaiseki/machine/966/29728/
- `e冒険島` — LT `暴険RUSH`, entry25.9%, continuation約77%, 2回転落システム. https://www.p-world.co.jp/machine/database/10276
- `Pドラムだ!金ドン 花火外伝99ver.` — lower 金ドンRUSH約80%, RUSH終了後LTチャレンジ, LT `SPECIAL金ドンRUSH`約95%. https://news.p-world.co.jp/articles/30764/yugitsushin
- `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` — 覚醒HYPER約51%/約75%, LT `超覚醒HYPER`約91%, 2025-07-07. https://news.p-world.co.jp/articles/31052/yugitsushin
- `PA CYBORG009 RULE OF SACRIFICE LT99ver.` — lower RUSH約40%/約75%, LT `超加速RUSH`約95%, lower RUSH中10R+LT 9.5%. https://news.p-world.co.jp/articles/31173/greenbelt

## Effective DB state
Previous effective state: 103 records / 102 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **104**
- COMPLETE_CORE: **103**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-07-07 OPEN boundary with `eフィーバー炎炎ノ消防隊2 シンラver.`. Then process the remaining same-day candidates in the exact queue above. Verify each LT structure with machine-level official/industry/analysis sources, duplicate-search before writing, and close 2025-07-07 only after all same-day candidates are accounted for and the candidate list is rechecked against at least two calendars.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
