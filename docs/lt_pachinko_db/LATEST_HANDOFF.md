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

## 2025-09-08 boundary — CLOSED / candidate set covered
1. `eフィーバーブルーロック` — COMPLETE_CORE
2. `eパリピ孔明` — EXCLUDED: LT搭載根拠なし
3. `P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver.` — COMPLETE_CORE
4. `ぱちんこ シン・エヴァンゲリオン PREMIUM MODEL` — EXCLUDED: LT搭載根拠なし
5. `Pアズールレーン THE ANIMATION 異次元トリガー 79ver.` — EXCLUDED: LTなし確認
6. `デジハネP 頭文字D せかんど` — COMPLETE_CORE
7. `P FAIRY TAIL 超一夜Ver.` — COMPLETE_CORE
8. `P真・座頭市物語 LT99Ver.` — COMPLETE_CORE
9. `デカスタPデビルマン THE FINAL 179ver.` — COMPLETE_CORE this relay

Boundary cross-check:
- 情報島＋ 2025-09-08 list includes all nine pachinko candidates above, including Devilman.
- K-Navi / すろかる等の9/8 list agrees on the other eight; some calendars place Devilman at 2025-09-22 instead.
- Devilman itself is already collected, so no machine is lost whichever rollout-date convention is used. HAZUSE and 1geki give introduction start 2025-09-08; other calendars show 9/22 and pachinko-curation shows both 9/8 and 9/22. Keep canonical first-introduction date 9/8 with rollout-date note; do not duplicate the machine at 9/22.

### デカスタPデビルマン THE FINAL 179ver. — COMPLETE_CORE
- ニューギン / 型式 `PデビルマンLM3` / LT搭載 / ライトミドル / 二種。
- 通常約1/179.55、右打ち実質1/1.0。
- 初当り: 7R約560個+LT 0.1% / 2R約160個+真悪魔RUSH 31.4% / 2R約160個+通常68.5%。TOTAL RUSH突入約31.5%。
- 下位 `真悪魔RUSH`: 電サポ1回転、継続約91.5%。7R+LT 2.00% / 7R+下位継続28.19% / 3R+下位継続61.31% / 2R短開放+通常8.50%。
- LT `デデデRUSH BONUS`: 通常0.1%直行または真悪魔RUSH中大当り2.00%。電サポ1回転、継続約93.1%。
- LT中: 7R約560個+LT継続28.04% / 3R約240個+LT継続65.06% / 7R約560個+真悪魔RUSH2.08% / 3R約240個+真悪魔RUSH4.82%。LT終了時は通常ではなく真悪魔RUSHへ復帰。
- 通常遊技全体基準の総LT到達率は直接公表値未確認。経路値から独自算出しない。
- 1geki LT詳細ページに孤立した「94.5%」表示があるが、同サイト機種概要・P-WORLD・HAZUSE・詳細振り分け合計は93.1%で一致。93.1%をcanonicalとし、孤立表示を注記。平均しない。
- record: `docs/lt_pachinko_db/machines/2025-09-08_dekasuta_p_devilman_the_final_179.md`
- commit: `309ed4f8611805eee78aac4808189c59615c180b`

Sources:
- https://hazuse.com/hd/5p0364/
- https://1geki.jp/pachinko/p_devilman_tf179ds/
- https://1geki.jp/pachinko/p_devilman_tf179ds/51/
- https://1geki.jp/pachinko/p_devilman_tf179ds/53/
- https://www.p-world.co.jp/machine/database/10333
- https://chonborista.com/pachinko/newgin/244098/
- https://p-johojima.jp/machine_spec/post-2074/
- https://p-kn.com/calendar/202509/
- https://pachinko-curation.com/56234/

## Effective DB state
Previous effective state: 130 machine records / 129 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **131**
- COMPLETE_CORE: **130**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Advance to the 2025-09-22 boundary. Start with `Pルパン三世 ONE COLLECTION 100ver.` and verify LT installation before collecting. Then inspect `～廻るヘソワイド～PホワイトシャカRUSH`. `デカスタPデビルマン THE FINAL 179ver.` is already collected and must not be duplicated even though some calendars list its rollout on 9/22. Use at least two independent new-machine calendars to enumerate the full 9/22 boundary before closing it.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.