# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-08-04 `e真・一騎当千～軍神覚醒～319大入りver.`
- sibling 396ver. record checked; AM-TS / LTM-JH separation preserved

## Boundary status
### 2025-07-07 — CLOSED 9/9
Previous closure retained.

### 2025-07-22 — CLOSED 3/3
Previous closure retained.

## Previous relay retained
- `e牙狼12黄金騎士極限` — COMPLETE_CORE
- `e黄門ちゃま 寿限無 LLサイズ` — COMPLETE_CORE
- `eシャーマンキング` — COMPLETE_CORE
- `eシャーマンキング でっけぇえなver.` — COMPLETE_CORE
- `e真・一騎当千～軍神覚醒～396ver.` — COMPLETE_CORE

## This relay
### e真・一騎当千～軍神覚醒～319大入りver. — COMPLETE_CORE
- D-light / 型式 `e真・一騎当千～軍神覚醒～AM-TS` / 検定番号510289 / 2025-08-04。
- LT3.0 PLUS / 一種二種混合 / 大入りスタート。
- 通常図柄揃い1/319.7。チャージ当りなし。初当りは2R約300個。
- 初当り51%で下位「真・闘士連撃」ST100回、49%は通常へ。396ver.と異なり非RUSH時チャンスタイムはない。
- 下位は1/109.6、継続約60%。下位大当り50%でLT「真・軍神BATTLEモード」、残り50%は1500個+下位継続。
- LTは1/84.7、ST134回、継続約80%。LT中は3000個（1500×2）50% / 1500個50%、いずれもLT継続。
- 通常遊技全体基準の総LT到達率は直接値未確認のためUNVERIFIED。経路値から独自算出しない。
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_shin_ikkitousen_gunshin_kakusei_319_ooiri_ver.md`
- commit: `73dc7569dec0db10ff6e3afb32cfd6cb36062c1d`

Sources:
- https://daiichi777.jp/pachinko/ikkitousen3/
- https://news.p-world.co.jp/articles/31380/yugitsushin
- https://p-johojima.jp/machine_spec/post-9486/
- https://hisshobon.com/machineinfo/98283/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/d-light_pachi/036/kh02.php
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/d-light_pachi/036/kh04.php
- https://hazuse.com/hd/510289-2/

## 2025-08-04 — OPEN
Independent-calendar candidate queue. Do not assume all candidates are LT; audit each before registration.
1. `e牙狼12黄金騎士極限` — LT搭載 — COMPLETE_CORE
2. `e黄門ちゃま 寿限無 LLサイズ` — LT搭載 — COMPLETE_CORE
3. `eシャーマンキング` — LT搭載 — COMPLETE_CORE
4. `eシャーマンキング でっけぇえなver.` — LT搭載 — COMPLETE_CORE
5. `e真・一騎当千～軍神覚醒～396ver.` — LT搭載 — COMPLETE_CORE
6. `e真・一騎当千～軍神覚醒～319大入りver.` — LT搭載 — COMPLETE_CORE
7. `Pクイーンズブレイド奈落5400` — NEXT
8. `Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.`
9. `Pフィーバー戦姫絶唱シンフォギア4 Light ver.` — LT eligibility must be checked separately; do not merge with LT-Light

Calendar evidence retained:
- https://1geki.jp/newmachinecalender/202508/
- https://p-kn.com/calendar/202508/
- https://pachinkopachisro.com/archives/58760696.html

## Effective DB state
Previous effective state: 119 machine records / 118 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **120**
- COMPLETE_CORE: **119**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-08-04 OPEN boundary with `Pクイーンズブレイド奈落5400`. First determine LT eligibility and exact model/spec; only create a machine record if LT-equipped. Then continue `Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.` followed by the separately audited `Light ver.`. LT非搭載はEXCLUDEDとしてDBレコードを作らない。**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.