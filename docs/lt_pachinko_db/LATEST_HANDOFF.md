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

## 2026-01-05 boundary — OPEN
Multiple calendars were cross-checked before collection. HAZUSE currently enumerates 11 pachinko introductions on 2026-01-05; K-Navi and other calendars overlap materially, with some date-listing variation for PA清流物語4. Treat HAZUSE's 11 as the working boundary set and audit every candidate before closure.

Working candidate set:
1. e ゴジラ対エヴァンゲリオン2 超デカゴールド
2. Pリングにかけろ1 129ver. — COMPLETE_CORE this relay
3. P【超甘LT】華牌RR 1/49×99de遊タイム
4. e吉宗 極乗3000ver.
5. PA清流物語4 ウキウキ79ver.
6. eソードアート・オンライン 閃光の軌跡 99Ver.
7. eようこそ実力至上主義の教室へ
8. Pフィーバーうたわれるもの LT-Light ver.
9. Pフィーバー彼女、お借りします LT-Light ver.
10. e 盾の勇者の成り上がり アルティメット199ver.
11. P ゴジラ対エヴァンゲリオン2 超デカシルバー

Calendar sources checked 2026-09-23:
- https://hazuse.com/new-machine/202601h/ — 11-machine 2026-01-05 pachinko set.
- https://p-kn.com/calendar/202601/ — overlapping 2026-01-05 calendar.
- https://1geki.jp/newmachinecalender/202601/ — 2026-01-05 calendar, 11 pachinko / 4 slot.
- https://pachinkopachisro.com/archives/59511928.html — independent January calendar cross-check.

## Added this relay
### Pリングにかけろ1 129ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_p_ring_ni_kakero1_129ver.md`
- commit: `b4b88341f49bdc8ccab1f9d5700a0821c5d24c22`
- ニューギン、型式 `Pリングにかけろ1LM`、検定5P0704、導入2026-01-05。
- 通常1/129.77。初当り50%で下位 `K.O.RUSH`、50%通常。初当り振り分けは1200個+RUSH 5% / 720個+RUSH 45% / 720個通常50%。
- K.O.RUSHはST49回＋リンかけCHANCE（最終1回＋残4）、TOTAL突破約40.5%。K.O.RUSH中の大当りまたはST回数リセットでLT `超K.O.RUSH`。
- 超K.O.RUSHはST129回＋リンかけCHANCE、TOTAL継続約79.5%。
- K.O.RUSH中: 1200個+LT 70.4% / 0R STリセット+LT 29.6%。
- LT中: 2400個+LT 54.5% / 1200個19.5% / 480個5.5% / 0R STリセット20.5%。2400個は1200×2。
- リンかけCHANCEは最終1回＋残4の計5回、C時短/STリセット込み当選1/36.16、成功約13.1%。当選時はLTへ。
- 通常遊技全体基準の総LT到達率/確率は直接公表値未確認。50%×40.5%等から独自算出しない。
- 業界一次（遊技通信/グリーンべると）＋HAZUSE/P-WORLD/必勝本/一撃で照合。conflictsなし。

Sources checked 2026-09-23:
- https://news.p-world.co.jp/articles/32525/yugitsushin
- https://news.p-world.co.jp/articles/32510/greenbelt
- https://hazuse.com/machine/pachinko/5P0704/
- https://www.p-world.co.jp/machine/database/10406
- https://p.hisshobon.jp/machine/4669/1/113026
- https://1geki.jp/pachinko/p_rinkake1_129ver/51/

## Positive LT prechecks for remaining boundary
Do not treat these prechecks as completed records; they only establish likely LT-positive status and useful identifiers.
- `e ゴジラ対エヴァンゲリオン2 超デカゴールド`: HAZUSE explicitly LT, 型式 `eゴジラ対エヴァンゲリオン2TR`, 検定510468, 約1/299.9, ビスティ, 2026-01-05.
- `e吉宗 極乗3000ver.`: HAZUSE LT page; 1/199.9, `振舞RUSH`突入30%, ST157, 約80%, 3000個=750×4.
- `eソードアート・オンライン 閃光の軌跡 99Ver.`: HAZUSE explicitly LT, 型式 `eソードアート・オンライン～閃光の軌跡～99Ver．K1`, 検定4P1693, 約1/99.90, RUSH55%, LT `LIGHTNING RUSH` 約94%.
- `eようこそ実力至上主義の教室へ`: HAZUSE explicitly LT, 型式 `eようこそ実力至上主義の教室へMA`, 検定510728, 約1/349.9, Sansei R&D.
- `Pフィーバーうたわれるもの LT-Light ver.`: 一撃/解析でLT明示、型式 `PAフィーバーうたわれるものY`, 1/99.9, 仮面RUSH50%/約75%, LT仮面RUSH超。
- `Pフィーバー彼女、お借りします LT-Light ver.`: HAZUSE explicitly LT, 型式 `Pフィーバー彼女、お借りしますLR`, 検定5P0526, 約1/189.7, DREAM RUSH約50%, LT `DREAM RUSH極/ヒロインRUSH` 約86%.
- `e 盾の勇者の成り上がり アルティメット199ver.`: HAZUSE explicitly LT, 型式 `e盾の勇者の成り上がりEREF`, 検定5P0814, 約1/199, RISING RUSH49.9%/突破約40%, LT `裏アルティメットタイム` 約85%.
- 華牌RR / ゴジエヴァ銀 / PA清流は次リレー以降にLT搭載可否と詳細を改めて監査する。機種名だけで推測しない。

## Effective DB state
Previous: 159 machine records / 158 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **160**
- COMPLETE_CORE: **159**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue the OPEN 2026-01-05 boundary. Next collect/audit `e ゴジラ対エヴァンゲリオン2 超デカゴールド` (LT-positive precheck already confirmed), then continue through the 11-machine candidate set without skipping.**

For every positive LT machine: duplicate-search first, collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. LT-negative candidates receive no machine record; retain exclusion evidence in this handoff when audited.
