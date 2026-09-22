# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

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
- 2025-09-22 — **CLOSED 2/2**

## 2025-09-22 boundary — CLOSED 2/2
1. `Pルパン三世 ONE COLLECTION 100ver.` — COMPLETE_CORE (previous relay)
2. `～廻るヘソワイド～PホワイトシャカRUSH` — COMPLETE_CORE this relay
3. `デカスタPデビルマン THE FINAL 179ver.` — already collected under canonical first-introduction date 2025-09-08; do not duplicate even though some calendars show 9/22 rollout

Boundary verification:
- 情報島＋「過去の新台情報」は2025-09-22のパチンコをルパン100ver.とホワイトシャカRUSHの2機種として列挙。
- 情報島＋の9/22導入前レビューも「新台3機種（パチンコ2機種・パチスロ1機種）」として同じ2機種を列挙。
- ちょんぼりすた/1geki/HAZUSE等でも両機の2025-09-22導入を確認。
- よって9/22境界をCLOSED 2/2とする。

### ～廻るヘソワイド～PホワイトシャカRUSH — COMPLETE_CORE
- マルホン工業、型式 `PシャカRUSH ZD`、2025-09-22、ライトミドル、LT搭載、一種二種混合/ST。
- 通常1/199.8、右打ち1/59.5。通常初当りは2R約220個で、50%が下位 `Z超RUSH`（ST50回）、50%通常。
- 下位Z超RUSH継続約57%。下位大当りは右打ちALL約2200個（10R約1100個×2回の合計払出）。
- 下位大当りの10.7%でLT `Z超RUSH LT`。内訳は2200個+LT/ST3000回 5.1%、2200個+LT/ST50回 5.6%。残り89.3%は2200個+下位ST50回。
- LTはST50回 or 3000回（実質次回）、TOTAL継続約80%。LT中は2200個+ST3000回 52.3% / 2200個+ST50回 47.7%、双方LT継続。
- 通常遊技全体を分母とする総LT到達率は直接公表値未確認。50%入口と下位10.7%から独自算出しない。
- record: `docs/lt_pachinko_db/machines/2025-09-22_p_white_shaka_rush_wide_heso.md`
- record commit: `13430e4786cc21e6451ec11d0113a6da4a522452`

Sources:
- https://maruhon-kogyo.co.jp/news/%EF%BD%9E%E5%BB%BB%E3%82%8B%E3%83%98%E3%82%BD%E3%83%AF%E3%82%A4%E3%83%89%EF%BD%9E-p%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%82%B7%E3%83%A3%E3%82%ABrush-%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E5%85%AC.html
- https://web-greenbelt.jp/post-101670/
- https://news.p-world.co.jp/articles/31636/greenbelt
- https://p-johojima.jp/new_machine/post-13521/
- https://1geki.jp/pachinko/p_white_shakarushz/
- https://1geki.jp/pachinko/p_white_shakarushz/51/
- https://hazuse.com/machine/pachinko/5P0545/
- https://pachinko-curation.com/56430/
- https://nana-press.com/kaiseki/machine/1020/31901/
- https://p-kn.com/pachinko/4384/
- https://p-johojima.jp/machine_spec/post-2074/
- https://p-johojima.jp/colum/post-15224/

## Next chronological boundary discovered — 2025-10-06
Independent calendars (情報島＋ and パチンコ・パチスロ.com; ALL7 partially corroborates) list the next broad pachinko introduction boundary as 2025-10-06. Candidate queue before LT filtering:
1. `Pスーパー海物語IN沖縄6` — likely non-LT conventional probability-change machine; verify and exclude if no LT.
2. `eとある科学の超電磁砲 PHASE NEXT` — LT confirmed by analysis material; **next LT collection target after exclusion check above**.
3. `eガールズ＆パンツァー 最終章` — LT3.0 PLUS confirmed; queue.
4. `eベルセルク無双 第2章` — LT status must be checked.
5. `e聖戦士ダンバイン3 ZEROSONIC` — LT status must be checked.
6. `Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.` — LT explicit in name/material; queue.
7. `PAぱちんこ冬のソナタ My Memory Sweet Version` — LT status must be checked.
8. `PA義風堂々!!～兼続と慶次～3 99ver.` — LT status must be checked.
9. `デカスタPシュタインズゲート ゼロ まゆしぃば～じょん` — calendars disagree on 10/6 vs 10/20 rollout; verify canonical first-introduction date and LT status before placement.

Discovery sources:
- https://p-johojima.jp/machine_spec/post-2074/
- https://pachinkopachisro.com/archives/58760696.html
- https://www.all7.jp/plans/index/2025/10

## Effective DB state
Previous effective state: 132 machine records / 131 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **133**
- COMPLETE_CORE: **132**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Begin 2025-10-06 boundary. First verify `Pスーパー海物語IN沖縄6` LT status; if non-LT, do not create a record. Then collect `eとある科学の超電磁砲 PHASE NEXT` (LT already confirmed) as the next LT machine. Continue through the full 10/6 candidate queue without skipping non-LT checks, and CLOSE only after at least two independent calendars demonstrate coverage.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.