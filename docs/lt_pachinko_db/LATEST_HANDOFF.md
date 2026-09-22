# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-08-04 `e牙狼12黄金騎士極限`
- duplicate search / previous records checked before write

## Boundary status
### 2025-07-07 — CLOSED 9/9
Previous closure retained.

### 2025-07-22 — CLOSED 3/3
1. `e マギアレコード 魔法少女まどか☆マギカ外伝` — LT搭載 — COMPLETE_CORE
2. `デカスタe花の慶次～傾奇一転` — LT搭載 — COMPLETE_CORE
3. `PAコマコマ倶楽部with坂本冬美 89STver.` — LT非搭載 — EXCLUDED

## This relay
### e牙狼12黄金騎士極限 — COMPLETE_CORE
- サンセイアールアンドディ / 型式表記 `e牙狼12 XX-MJ` / 2025-08-04。
- LT3.0 PLUS、一種二種混合、右打ち1/1の1G連ループ型。
- 通常大当り合算1/349.99、液晶図柄揃い1/437.49、ガロチャージ2R 1/1749.97。定義を分離。
- 図柄揃いは10R約1500個。50%で時短1回の `極限7500バトル`、残り50%は通常へ。
- 極限7500バトルは右1/1。50%で10R×5=約7500個 + LT `魔戒CHANCE LT`、50%で10R約1500個 + 通常へ。
- LTは時短1回、継続約76%。内訳は7500個+継続 約25% / 1500個+継続 約51% / 1500個+終了 約24%。
- 7500個は1500個×5回の払い出し合計。期待出玉や初当りからの累計と混同しない。
- 液晶図柄揃い基準でLT25%とする簡易資料はあるが、通常遊技全体を分母とする総LT到達率は一次/高信頼の直接公表値として固定せず `UNVERIFIED_AFTER_RESEARCH`。独自換算しない。
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_garo12_ougon_kishi_kyokugen.md`
- commit: `13b8f3773ac9a7c424e8e07e7c323dda778d5c25`

Sources:
- https://news.p-world.co.jp/articles/31185/amusement
- https://www.amusement-japan.co.jp/article/detail/10004882/
- https://www.p-world.co.jp/machine/database/10305
- https://nana-press.com/kaiseki/machine/1009/30845/
- https://hisshobon.com/machineinfo/98270/
- https://hisshobon.com/machineinfo/98271/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sansei_pachi/314/kh04.php

## 2025-08-04 — OPEN
Previous independent-calendar candidate queue retained. Do not assume all candidates are LT; audit each before registration.
1. `e牙狼12黄金騎士極限` — LT搭載 — COMPLETE_CORE (this relay)
2. `e黄門ちゃま 寿限無 LLサイズ` — NEXT
3. `eシャーマンキング`
4. `eシャーマンキング でっけぇえなver.` — calendars may combine/list separately; verify canonical handling before write
5. `e真・一騎当千～軍神覚醒～396ver.`
6. `e真・一騎当千～軍神覚醒～319大入りver.`
7. `Pクイーンズブレイド奈落5400`
8. `Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.`
9. `Pフィーバー戦姫絶唱シンフォギア4 Light ver.` — LT eligibility must be checked separately; do not merge with LT-Light

Calendar evidence retained:
- https://1geki.jp/newmachinecalender/202508/
- https://p-kn.com/calendar/202508/
- https://pachinkopachisro.com/archives/58760696.html

## Effective DB state
Previous effective state after 2025-07-22: 114 machine records / 113 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **115**
- COMPLETE_CORE: **114**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-08-04 OPEN boundary with `e黄門ちゃま 寿限無 LLサイズ`. Then audit `eシャーマンキング` and the separately listed `でっけぇえなver.` before deciding canonical record handling. Continue same-day queue in the fixed order above; LT非搭載はEXCLUDEDとしてDBレコードを作らない。**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
