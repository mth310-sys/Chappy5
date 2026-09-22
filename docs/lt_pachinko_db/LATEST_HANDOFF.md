# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before write

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3
- 2025-09-08 — CLOSED / candidate set covered
- 2025-09-22 — CLOSED 2/2
- 2025-10-06 — CLOSED / candidate set covered

## 2025-10-20 boundary — CLOSED 2/2
Independent calendar checks (情報島＋過去新台一覧 / SuloCale) list the same two pachinko introductions for 2025-10-20.

1. `Pゴッドイーター199ゴッドトリガーVER.` — **COMPLETE_CORE this relay**.
2. `Pはねものファインプレー` — **EXCLUDED / LT非搭載**. パチマガスロマガ詳細スペック directly states `ラッキートリガー: なし`; 1geki and other machine pages identify it as a conventional 羽根モノ. No LT record created.

`デカスタPシュタインズ・ゲート ゼロ まゆしぃば～じょん` is already COMPLETE_CORE at canonical first introduction 2025-10-06. Some sales/calendar material has 10/20, but it is the same `P STEINS;GATE0 N3`; do not duplicate.

### Pゴッドイーター199ゴッドトリガーVER. — COMPLETE_CORE
- サンセイR&D。型式 `P LTゴッドイーター199VER-ARB`（空白なし `PLT...` 表記あり）、検定番号510086、2025-10-20導入。
- 通常1/199.5 / ジャッジメント中1/199.8 / 下位RUSH・LT中1/1。
- 初当り2R約300個100% → ジャッジメント時短108回100%。突破約42%で下位 `神バトルRUSH RAGE BURST`。
- 下位RUSH継続約77%。右打ち主要比率は10R約1500個+RUSH 約77% / 2R約154個+通常 約23%。
- 下位RUSH中、10R継続時の約77%で `結合崩壊BONUS BURST`。2回獲得 / 結合崩壊Lv.MAXでLT `PREMIUM神RUSH`。
- 下位RUSH突入後のTOTAL LT昇格期待度は直接公表約48%。
- LT公表継続率約85%。ただしこの85%は `ぷちBONUS（2R+LT継続）` を除外し、10R+LT継続と2R時短なしの図柄比率だけで算出した特殊定義。
- LT主要表記: 10R約1500個+LT 約85% / 2R約154個+通常 約15%、これとは別に2R約154個+LT継続のぷちBONUSが存在。
- ぷちBONUSの絶対振り分け率は業界記事/P-WORLD/必勝本/情報島＋/メーカー系流通資料を表記・検索語を変えて再探索したが公開テキストで確定できず `UNVERIFIED_AFTER_RESEARCH`。85%へ推定加算しない。
- 通常遊技全体基準の総LT到達率も直接公表値未確認のため `UNVERIFIED_AFTER_RESEARCH`。経路値から独自算出しない。
- HAZUSEページ上部にLT約88%の孤立表示があるが、同ページ基本スペック本文は85%、業界一次記事/P-WORLD/必勝本/情報島＋等も85%で一致。内部不整合の孤立表示として注記し、平均せず85%採用。
- record: `docs/lt_pachinko_db/machines/2025-10-20_p_god_eater_199_god_trigger_ver.md`
- record commit: `3c0554cfe0617d4892a0f8ee1c3c5bf6c585c61b`

Sources:
- https://news.p-world.co.jp/articles/31946/yugitsushin
- https://news.p-world.co.jp/articles/31999/greenbelt
- https://www.p-world.co.jp/machine/database/10356
- https://hisshobon.com/machineinfo/99512/
- https://hisshobon.com/machineinfo/99513/
- https://p.hisshobon.jp/machine/4623/1/111738
- https://p-johojima.jp/machine_spec/post-15926/
- https://www.pachibee.jp/machines/about/125090009
- https://hazuse.com/machine/pachinko/PX0315/
- https://www.chu-3sei.com/productlist/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/maruhon_pachi/287/kh02.php
- https://p-johojima.jp/machine_spec/post-2074/
- https://sulocale.sulopachinews.com/archives/イベント/10月20日導入開始予定機種

## Effective DB state
Previous effective state: 140 machine records / 139 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **141**
- COMPLETE_CORE: **140**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-10-20 boundary is CLOSED. Re-enumerate the next introduction boundary after 2025-10-20 using at least two independent new-machine calendars, then continue from the first unprocessed LT-equipped pachinko in chronological order. Preliminary calendar evidence points to 2025-11-04 as the next major boundary; do not assume candidate completeness until re-enumerated.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
