# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-08-04 `e黄門ちゃま 寿限無 LLサイズ`
- duplicate search / previous records checked before write

## Boundary status
### 2025-07-07 — CLOSED 9/9
Previous closure retained.

### 2025-07-22 — CLOSED 3/3
Previous closure retained.

## Previous relay retained
### e牙狼12黄金騎士極限 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_garo12_ougon_kishi_kyokugen.md`
- commit: `13b8f3773ac9a7c424e8e07e7c323dda778d5c25`

## This relay
### e黄門ちゃま寿限無 LLサイズ — COMPLETE_CORE
- 平和 / 型式 `e黄門ちゃま9HC3` / 2025-08-04。
- LT3.0 PLUS / 一種二種混合 / ST / LLサイズSTART。
- 通常時図柄揃い1/399.8、水戸チャージ約1/2716、大当り合算1/348.5。分母定義を分離。
- 特図1図柄揃い時約52%で下位 `寿限無RUSH`。水戸チャージの一部からもRUSH経路あり。
- 寿限無RUSHは1/97.0、ST66回、継続約50%。大当り時約50%で約6000個+αを獲得しLT `寿限無RUSH極`、残り約50%は約3000個で下位RUSH継続。
- LT `寿限無RUSH極` は1/97.0、ST132回、継続約75%。LT中は約6000個+α 約7% / 約3000個 約93%、いずれもLT継続。
- 約3000個=約1500個×2、約6000個=約1500個×4の払い出し合計。期待出玉と混同しない。
- 通常遊技全体を分母とする総LT到達率は直接公表値を固定できず `UNVERIFIED_AFTER_RESEARCH`。経路から独自算出しない。
- 水戸チャージからRUSHへ移行する具体割合も今回固定せず欠損として保持。
- 2026-02-02のP黄門ちゃま寿限無 LLサイズ 259ver. / P黄門ちゃま寿限無 99ver.とは別スペック。
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_koumon_chama_jugemu_ll_size.md`
- commit: `43221e16327b75e26ed2c27e61fbeb466aad7328`

Sources:
- https://yugi-nippon.com/pachinko-new-machine/post-71474/
- https://www.p-world.co.jp/machine/database/10295
- https://hisshobon.com/machineinfo/98199/
- https://hisshobon.com/machineinfo/98201/
- https://p-johojima.jp/new_machine/post-9203/
- https://1geki.jp/pachinko/e_koumon_jlls/

## 2025-08-04 — OPEN
Independent-calendar candidate queue retained. Do not assume all candidates are LT; audit each before registration.
1. `e牙狼12黄金騎士極限` — LT搭載 — COMPLETE_CORE
2. `e黄門ちゃま 寿限無 LLサイズ` — LT搭載 — COMPLETE_CORE (this relay)
3. `eシャーマンキング` — NEXT
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
Previous effective state after e牙狼12: 115 machine records / 114 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **116**
- COMPLETE_CORE: **115**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-08-04 OPEN boundary with `eシャーマンキング`. Then audit the separately listed `eシャーマンキング でっけぇえなver.` and decide canonical record handling only after checking whether it is a distinct specification/model or naming/listing variant. Continue same-day queue in the fixed order above; LT非搭載はEXCLUDEDとしてDBレコードを作らない。**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
