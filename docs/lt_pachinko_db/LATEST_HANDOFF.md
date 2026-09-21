# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- current machine files searched for duplicates before each write

## This relay

### Added COMPLETE_CORE — Pフィーバーうたわれるもの 199ver.
`docs/lt_pachinko_db/machines/2025-04-07_p_fever_utawarerumono_199ver.md`
- SANKYO / 型式 `PフィーバーうたわれるものZ` / 2025-04-07 / 一種二種混合ライトミドル。
- 通常約1/199.9、右約1/14.3、初当り2R約300個、仮面RUSH突入約50%。
- 下位 `仮面RUSH` は15回+残保留4、TOTAL約75%。
- 下位RUSH中図柄揃いの約20%でLT `仮面RUSH超`。LTも15+4、TOTAL約75%。継続率強化ではなく出玉振り分け強化型。
- LT中大当り約50%が約3000個（1500×2）+1500個上乗せループ/次回大当り濃厚、約50%が1500個。
- 残保留当選時は仮面RUSH側振り分けとなる解析注記を保存。
- 通常初当り基準の総LT到達率は直接公表値未確認のため独自算出せずUNVERIFIED。
- SANKYO公式博物館、必勝本、一撃、HAZUSE、解析資料で照合。新規CONFLICTなし。

Sources:
- https://www.sankyo-fever.jp/collection/979/
- https://hisshobon.com/machineinfo/96838/
- https://hisshobon.com/machineinfo/96839/
- https://1geki.jp/pachinko/p_utawarerumono199/39/
- https://1geki.jp/pachinko/p_utawarerumono199/52/
- https://chonborista.com/pachinko/sankyo/229574/
- https://hazuse.com/hd/4p1607/

### Added COMPLETE_CORE — Pアナザーゴッドハーデス-獄炎-
`docs/lt_pachinko_db/machines/2025-04-07_p_another_god_hades_gokuen.md`
- メーシー / 型式 `Pアナザーゴッドハーデス3SB` / 2025-04-07 / 一種二種混合ライトミドル。
- 通常約1/199.8、右約1/77.8（大当り+小当り合算）、c時短約1/312（GOD GAME中と残保留特図2のみ有効）。
- 初当り1%は10R約1500個+LT `GOD GAME` 直行、99%は7R約1050個+獄炎CHALLENGE。
- 獄炎CHALLENGE 20回+残4、突破約28% → HADES ROAD 53回+残4、突破約50% → LT GOD GAME。
- GOD GAMEは130回+残4、継続約89%、図柄揃いALL10R約1500個。
- メーカー公式の「時短100%突入×ワンルートLT」「時短中に2回の大当りで確実にLT」を構造として保存。
- 約28%/約50%/約89%は状態別に大当り・小当り・残保留/c時短を含む定義。単純確率に置換しない。
- 通常初当り基準の総LT到達率は直接TOTAL値未確認のため独自合算せずUNVERIFIED。
- ユニバーサル公式、遊技通信、パチビー、なな徹、HAZUSE、解析資料で照合。新規CONFLICTなし。

Sources:
- https://www.universal-777.co.jp/news/20250114001619/
- https://www.universal-777.com/product/pachinko/hades_gokuen/
- https://news.p-world.co.jp/articles/29998/yugitsushin
- https://www.pachibee.jp/machines/index/125030005
- https://nana-press.com/kaiseki/machine/915/27128/
- https://chonborista.com/pachinko/universal/229728/
- https://hazuse.com/hd/410215-2/

## 2025-04-07 boundary audit — CLOSED
GreenBelt/P-WORLD's 2025-04-07 schedule enumerates exactly six pachinko releases:
1. P少女☆歌劇 レヴュースタァライト ラッキートリガー4500 — registered COMPLETE_CORE.
2. e牙狼神速神撃3000LT — registered COMPLETE_CORE.
3. eシン・ウルトラマン — registered COMPLETE_CORE.
4. eフィーバーうたわれるもの — registered COMPLETE_CORE.
5. Pフィーバーうたわれるもの 199ver. — **this relay COMPLETE_CORE**.
6. Pアナザーゴッドハーデス-獄炎- — **this relay COMPLETE_CORE**.

Independent schedule source:
- https://news.p-world.co.jp/articles/30646/greenbelt

All six 2025-04-07 pachinko releases are LT-positive and now represented in the machine DB. **2025-04-07 is CLOSED. Do not reprocess this date unless later QA discovers a concrete omission/conflict.**

## Next boundary discovery — 2025-04-21 OPEN
The same GreenBelt/P-WORLD schedule lists four regular pachinko releases for 2025-04-21:
1. `e東京喰種` — LT搭載 confirmed; unprocessed; **next machine**.
2. `Pゾンビランドサガ` — independent calendar marks LT; queue after e東京喰種.
3. `P痛いのは嫌なので防御力に極振りしたいと思います。` — LT搭載 confirmed; queue.
4. `PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver.` — calendar does not mark LT; verify before any registration.

Additional boundary note:
- `P【超甘LT】江頭2：50 in ナナシー 奇跡の99％` had a **limited Tokyo/Shinjuku advance introduction from 2025-04-21** according to industry reports. Before deciding canonical releaseDate/order, verify whether DB chronology should use this advance-introduction date or its later nationwide rollout date. Do not silently omit it, but do not assign canonical date without checking the existing DB convention.

Discovery sources:
- https://news.p-world.co.jp/articles/30646/greenbelt — 4/21 regular schedule.
- https://sulocale.sulopachinews.com/archives/イベント/4月21日導入開始予定機種 — e東京喰種/Pゾンビランドサガ/P防振り marked LT; PA異世界魔王 not marked LT.
- https://news.p-world.co.jp/articles/30576/greenbelt — e東京喰種 LT confirmation.
- https://chonborista.com/pachinko/fujishouji/230246/ — P防振り LT confirmation.
- https://p-johojima.jp/news/post-4390/ — P【超甘LT】江頭2：50 in ナナシー 奇跡の99％ 2025-04-21 Shinjuku advance introduction.

## Effective DB state
Previous handoff: 82 records / 81 COMPLETE_CORE / 1 CONFLICT.
This relay added 2 COMPLETE_CORE records.
- machine records: **84**
- COMPLETE_CORE: **83**
- CONFLICT: **1**
- INDEX remains stale; current machine files + this handoff are the progress source of truth.

## Next restart point
**2025-04-07 is CLOSED. Start 2025-04-21 with `e東京喰種`. Then continue the same-day LT-positive queue without skipping `Pゾンビランドサガ` and `P痛いのは嫌なので防御力に極振りしたいと思います。`; verify `PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver.` for LT/non-LT. Separately resolve the canonical chronology treatment of the 2025-04-21 advance-introduction `P【超甘LT】江頭2：50 in ナナシー 奇跡の99％` before closing the boundary.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search current machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate an unpublished total LT arrival rate from route probabilities.
