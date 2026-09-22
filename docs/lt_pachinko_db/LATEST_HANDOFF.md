# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-08-04 `eシャーマンキング`
- previous e黄門ちゃま record checked; duplicate/same-series separation checked before write

## Boundary status
### 2025-07-07 — CLOSED 9/9
Previous closure retained.

### 2025-07-22 — CLOSED 3/3
Previous closure retained.

## Previous relay retained
### e牙狼12黄金騎士極限 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_garo12_ougon_kishi_kyokugen.md`
- commit: `13b8f3773ac9a7c424e8e07e7c323dda778d5c25`

### e黄門ちゃま寿限無 LLサイズ — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_koumon_chama_jugemu_ll_size.md`
- commit: `43221e16327b75e26ed2c27e61fbeb466aad7328`

## This relay
### eシャーマンキング — COMPLETE_CORE
- メーシー / 型式 `eシャーマンキングMH` / 検定番号4P1905 / 2025-08-04。
- LT3.0 PLUS / 一種二種混合。RUSH=LTで、下位RUSHは独立して存在しない。
- 通常時1/349.9。LT「シャーマンファイト」TOTAL突入約53%（時短「起きパチョモード」経由込み）。公開LT発動確率1/662.9を直接値として保存。
- 特図1: 約1500個+α+LT 1.5% / 約450個+LT 48.5% / 約450個+時短20回 50%。
- 起きパチョモードは時短20回、シャーマンバトル出現率1/348.6、引き戻し期待度約5.6%。
- LT「シャーマンファイト」はST130回、シャーマンバトル出現率1/77.4、TOTAL継続約83%。バトル勝率約80%（電チュー4個入賞条件）。
- バトル勝利時: 約6000個1.5% / 約4500個12.2% / 約3000個36.9% / 約1500個49.4%。敗北は出玉なしでST130回へ復帰。
- 6000個は約1500個×4回分。複数回大当り合計と単一大当りを混同しない。
- 継続約83%はST130回のバトル発展率・特図2大当り時・「連戦」を含むTOTAL値。
- 同日 `eシャーマンキング でっけぇえなver.` は型式 `eシャーマンキングLB` で別仕様。標準MHと統合しない。
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_shaman_king.md`
- commit: `f748b62f30a5c602920dac7ce93cd18713f2a183`

Sources:
- https://universal-777.com/product/pachinko/shamanking_m/
- https://g-net-ps.com/info/p0455/
- https://hazuse.com/machine/pachinko/4P1905/
- https://1geki.jp/pachinko/e_shamanking/
- https://chonborista.com/pachinko/universal/237826/
- https://www.p-world.co.jp/machine/database/10285

## 2025-08-04 — OPEN
Independent-calendar candidate queue retained. Do not assume all candidates are LT; audit each before registration.
1. `e牙狼12黄金騎士極限` — LT搭載 — COMPLETE_CORE
2. `e黄門ちゃま 寿限無 LLサイズ` — LT搭載 — COMPLETE_CORE
3. `eシャーマンキング` — LT搭載 — COMPLETE_CORE (this relay)
4. `eシャーマンキング でっけぇえなver.` — NEXT; distinct model `eシャーマンキングLB` confirmed, so audit/register separately if full LT core validates
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
Previous effective state after e黄門ちゃま: 116 machine records / 115 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **117**
- COMPLETE_CORE: **116**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-08-04 OPEN boundary with `eシャーマンキング でっけぇえなver.`. It is now confirmed to be a distinct specification/model (`eシャーマンキングLB`), not a naming variant of MH. Audit its lower `シャーマンファイト` (ST60 / about 50%) → LT `超シャーマンファイト` structure, LT entry routes/rates, ST/continuation and payout distributions with multiple sources before registration. Then continue same-day queue in the fixed order above; LT非搭載はEXCLUDEDとしてDBレコードを作らない。**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
