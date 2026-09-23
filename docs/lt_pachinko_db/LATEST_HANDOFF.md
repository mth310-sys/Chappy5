# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before positive write

## Closed boundaries retained
- through 2025-11-17: previous closed boundaries retained.
- 2025-12-08 — CLOSED 9/9.
- 2025-12-22 — CLOSED 3/3.
- 2026-01-05 — CLOSED 11/11.
- 2026-01-19 — CLOSED 3/3.

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。

## 2026-02-02 boundary — OPEN 1/10 processed
Boundary enumeration source: 一撃 2026年2月新台カレンダー (10 pachinko machines) cross-checked against K-Navi February calendar. HAZUSE calendar confirms 2026-02-02 is the February boundary; its dedicated February list was not directly surfaced in this run.

Boundary candidates, preserving calendar order:
1. eフィーバーBASTARD!! -暗黒の破壊神- — COMPLETE_CORE
2. e 真・北斗無双 第5章 夢幻闘双 — NEXT
3. P黄門ちゃま寿限無 LLサイズ 259ver. — unprocessed
4. P黄門ちゃま寿限無 99ver. — unprocessed
5. P冴えない彼女の育てかた 99ver. — unprocessed
6. eAぷらねっとアポロGO — unprocessed
7. P俺の妹がこんなに可愛いわけがない。攻略!!スキップ159ver. — unprocessed
8. PA乗物娘 with CYBERJAPANDANCERS 2nd season 77ver. — unprocessed
9. PA乗物娘 with CYBERJAPANDANCERS 2nd season 59ver. — unprocessed
10. e異世界でチート能力を手にした俺は現実世界をも無双する ～レベルアップは人生を変えた～ — unprocessed

Boundary evidence:
- https://1geki.jp/newmachinecalender/202602/ — 2026-02-02, 10 pachinko / 6 slot; complete 10-machine list.
- https://p-kn.com/calendar/202602/ — 2026-02-02 calendar cross-check; naming may group sibling specs.
- https://hazuse.com/new-machine-calendar/newmachine-calendar/ — confirms 2026-02-02 February introduction boundary.

### 1. eフィーバーBASTARD!! -暗黒の破壊神- — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_e_fever_bastard_ankoku_no_hakaishin.md`
- commit: `94a56697debdc4b1ff2684abb05f46825a324706`
- SANKYO（製造: ジェイビー）、型式 `eフィーバーバスタードG`、検定510640、2026-02-02。
- 通常図柄揃い約1/399.9。公式併記の大当り確率1/349.9とは定義分離。右約1/10.8（大当り＋小当り合算）。
- 初当りRUSH突入約50%。バスタードRUSHはST10回＋残4、TOTAL約75%（ST10約62%＋残4約32%）。
- 下位RUSHのST区間大当り約50%で3000個（1500×2）＋LT `超バスタードRUSH`。残保留当選時は1500個＋LT 100%。
- LTもST10回＋残4/TOTAL約75%。ST区間大当りは4500個（1500×3）約30% / 3000個（1500×2）約70%。残保留当選は1500個＋LT。
- 継続率上昇型ではなく、同じ約75%のままST区間出玉を強化するLT。
- ラーズちゃーじ300個経由のRUSH突入あり。遊タイム非搭載。
- 通常遊技全体基準の総LT到達率は直接値未確認。経路値から独自算出しない。
- official/industry/analysis sources cross-checked: SANKYO, 遊技通信/P-WORLD, HAZUSE, なな徹, 遊技日本, 必勝本。

## Effective DB state
Previous: 172 machine records / 170 COMPLETE_CORE / 2 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **173**
- COMPLETE_CORE: **171**
- CONFLICT: **2**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue OPEN **2026-02-02 boundary candidate #2: `e 真・北斗無双 第5章 夢幻闘双`**. Duplicate-search first, then collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling, and complete normal→initial→RUSH→LT flow.

After each candidate, audit LT-equipped status. LT-negative candidates receive no machine record, but exclusion evidence and status must be retained here. Do not skip the non-LT-looking candidates: the 10-machine boundary must reach 10/10 before closure. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
