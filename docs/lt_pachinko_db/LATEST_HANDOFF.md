# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-07-07 `e犬夜叉3.0`
- duplicate search performed before record creation

## Boundary discovery
### 2025-07-07 — OPEN
Same-day queue:
1. `e東京リベンジャーズ` — COMPLETE_CORE
2. `eフィーバー炎炎ノ消防隊2 シンラver.` — COMPLETE_CORE
3. `eフィーバー炎炎ノ消防隊2 紅丸ver.` — COMPLETE_CORE
4. `e犬夜叉3.0` — COMPLETE_CORE
5. `e一方通行 とある魔術の禁書目録` — NEXT
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
### e犬夜叉3.0 — COMPLETE_CORE
- D-light / 型式 `e犬夜叉LTM-TS` / canonical 2025-07-07.
- LT3.0 PLUS。一種二種混合の直LT機で、下位RUSHなし。RUSH=LT `ブッた斬りRUSH`。
- 通常図柄揃い約1/399.2（チャージ昇格除外）、犬夜叉チャージ約1/368.5、奈落探索MODE約1/191.6（図柄揃い+チャージ合算）、LT中実質約1/6.8。定義を分離。
- 通常図柄揃い/チャージ10R昇格を含むLT突入約51.5%。犬夜叉チャージ非昇格後は10回転のLT高確率ZONE `奈落探索MODE`、同MODE中大当りはLT突入100%。
- 通常時全経路を含むLT突入確率は解析/業界資料で直接値 約1/693 を確認したため保存。経路値から独自算出していない。
- LTは時短6回+残保留4個、継続約80%。
- LT中は約3000個（1500×2）約75% / 約300個約25%、いずれもLT継続。ただし3000個は特図2・時短中に限り、残保留当選は1500個または300個となるため定義分離。
- 通常図柄揃いは約1500個。犬夜叉チャージは約300個。出玉は払い出し。
- record: `docs/lt_pachinko_db/machines/2025-07-07_e_inuyasha_3_0.md`
- commit: `b0e0bca5985f53ebd13784285ad75e0bb5fdeda4`

Sources:
- https://p.hisshobon.jp/news/2158
- https://hazuse.com/machine/pachinko/PX0300/
- https://nana-press.com/kaiseki/machine/971/30388/
- https://1geki.jp/pachinko/e_inuyasha3lt/39/
- https://p-johojima.jp/machine_spec/post-9181/

## Pre-verified remaining queue evidence
Do not skip machine-level research:
- `e一方通行 とある魔術の禁書目録` — LT3.0 PLUS, RUSHチャレンジ約51%, success約60%, LT HYPER約75%. https://news.p-world.co.jp/articles/30868/greenbelt
- `e冒険島` — LT `暴険RUSH`, entry25.9%, continuation約77%, 2回転落システム. https://www.p-world.co.jp/machine/database/10276
- `Pドラムだ!金ドン 花火外伝99ver.` — lower 金ドンRUSH約80%, RUSH終了後LTチャレンジ, LT `SPECIAL金ドンRUSH`約95%. https://news.p-world.co.jp/articles/30764/yugitsushin
- `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` — 覚醒HYPER約51%/約75%, LT `超覚醒HYPER`約91%. https://news.p-world.co.jp/articles/31052/yugitsushin
- `PA CYBORG009 RULE OF SACRIFICE LT99ver.` — lower RUSH約40%/約75%, LT `超加速RUSH`約95%, lower RUSH中10R+LT 9.5%. https://news.p-world.co.jp/articles/31173/greenbelt

## Effective DB state
Previous effective state: 106 records / 105 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **107**
- COMPLETE_CORE: **106**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-07-07 OPEN boundary with `e一方通行 とある魔術の禁書目録`. Then process `e冒険島` → `Pドラムだ!金ドン 花火外伝99ver.` → `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` → `PA CYBORG009 RULE OF SACRIFICE LT99ver.`. Close 2025-07-07 only after all candidates are accounted for and rechecked against at least two calendars.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
