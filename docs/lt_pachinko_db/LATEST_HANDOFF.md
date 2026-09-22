# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-08-04 `eシャーマンキング でっけぇえなver.`
- existing standard `eシャーマンキング` record checked; LB/MH model separation verified before write

## Boundary status
### 2025-07-07 — CLOSED 9/9
Previous closure retained.

### 2025-07-22 — CLOSED 3/3
Previous closure retained.

## Previous relay retained
### e牙狼12黄金騎士極限 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_garo12_ougon_kishi_kyokugen.md`

### e黄門ちゃま寿限無 LLサイズ — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_koumon_chama_jugemu_ll_size.md`

### eシャーマンキング — COMPLETE_CORE
- 型式 `eシャーマンキングMH`。RUSH=LT「シャーマンファイト」。標準仕様。
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_shaman_king.md`
- commit: `f748b62f30a5c602920dac7ce93cd18713f2a183`

## This relay
### eシャーマンキング でっけぇえなver. — COMPLETE_CORE
- メーシー / 型式 `eシャーマンキングLB` / 2025-08-04。
- LT3.0 PLUS / 一種二種混合。標準MHとは別仕様。
- 通常時1/349.9。初当り1%がLT「超シャーマンファイト」直行、50%が下位「シャーマンファイト」、49%が通常へ。
- 下位はST60回、シャーマンバトル出現率1/87.7、継続約50%。バトル勝利でLT発動、敗北は出玉なしでST60回へリセットし下位状態を維持。
- LT「超シャーマンファイト」はST120回、バトル出現率1/76.1、TOTAL継続約81%。バトル勝率約80%（電チュー4個入賞条件）。
- 勝利時は約6000個1.5% / 4500個12.2% / 3000個36.9% / 1500個49.4%。複数回1500個の合計払い出し。
- 通常遊技全体基準の総LT到達率は直接値未確認のためUNVERIFIED。経路値から推測しない。
- 一部解析表のLT「130回」は標準MHとの混同可能性が高く、LBについて複数資料がST120回で一致するため120回をcanonical採用。
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_shaman_king_dekkeeena_ver.md`
- commit: `0791e6c72b472243fd9fdea9bcb5d32a7c7e4d4f`

Sources:
- https://g-net-ps.com/info/p0454/
- https://hisshobon.com/machineinfo/98167/
- https://hisshobon.com/machineinfo/98168/
- https://hisshobon.com/machineinfo/98169/
- https://1geki.jp/pachinko/e_shamanking_dh/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/macy_pachi/050/kh01.php

### e真・一騎当千～軍神覚醒～396ver. — COMPLETE_CORE
- D-light / 型式 `e真・一騎当千～軍神覚醒～LTM-JH` / 検定番号5P0288 / 2025-08-04。
- LT3.0 PLUS / 一種二種混合。
- 通常図柄揃い1/396.1。HAZUSEのチャージ込み1/348.6とは定義分離。
- 初当り66.5%で下位「真・闘士連撃」ST100回、33.5%で時短100回「チャンスタイム」。業界一次のRUSH突入約74%はチャンスタイム引き戻し込みTOTAL値であり66.5%と競合しない。
- 下位は1/84.7、継続約70%。下位大当り50%でLT「真・軍神BATTLEモード」、残り50%は1500個+下位継続。
- チャンスタイムは1/399.6、突破約22%。引き戻し時はLT直行100%。
- LTは1/84.7、ST134回、継続約80%。LT中は3000個（1500×2）50% / 1500個50%、いずれもLT継続。
- 通常遊技全体基準の総LT到達率は直接値未確認のためUNVERIFIED。
- record: `docs/lt_pachinko_db/machines/2025-08-04_e_shin_ikkitousen_gunshin_kakusei_396ver.md`
- commit: `ea089f1190826d7862b547d499aa269945b164f7`

Sources:
- https://daiichi777.jp/pachinko/ikkitousen3/
- https://news.p-world.co.jp/articles/31381/yugitsushin
- https://news.p-world.co.jp/articles/31312/greenbelt
- https://p-johojima.jp/machine_spec/post-11147/
- https://1geki.jp/pachinko/e_shinikki_gk396/
- https://hazuse.com/hd/5p0288/

## 2025-08-04 — OPEN
Independent-calendar candidate queue. Do not assume all candidates are LT; audit each before registration.
1. `e牙狼12黄金騎士極限` — LT搭載 — COMPLETE_CORE
2. `e黄門ちゃま 寿限無 LLサイズ` — LT搭載 — COMPLETE_CORE
3. `eシャーマンキング` — LT搭載 — COMPLETE_CORE
4. `eシャーマンキング でっけぇえなver.` — LT搭載 — COMPLETE_CORE
5. `e真・一騎当千～軍神覚醒～396ver.` — LT搭載 — COMPLETE_CORE
6. `e真・一騎当千～軍神覚醒～319大入りver.` — NEXT
7. `Pクイーンズブレイド奈落5400`
8. `Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.`
9. `Pフィーバー戦姫絶唱シンフォギア4 Light ver.` — LT eligibility must be checked separately; do not merge with LT-Light

Calendar evidence retained:
- https://1geki.jp/newmachinecalender/202508/
- https://p-kn.com/calendar/202508/
- https://pachinkopachisro.com/archives/58760696.html

## Effective DB state
Previous effective state after standard eシャーマンキング: 117 machine records / 116 COMPLETE_CORE / 1 CONFLICT.
This relay added 2 COMPLETE_CORE records.
- machine records: **119**
- COMPLETE_CORE: **118**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-08-04 OPEN boundary with `e真・一騎当千～軍神覚醒～319大入りver.`. Keep it separate from the just-registered 396ver.; verify its distinct型式, 大入りスタート, 通常確率, lower RUSH/LT entry routes, ST counts/continuation and payout distributions. Then continue same-day queue in fixed order. LT非搭載はEXCLUDEDとしてDBレコードを作らない。**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
