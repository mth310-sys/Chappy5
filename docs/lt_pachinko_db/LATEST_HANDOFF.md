# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-02-03 `Pとある魔術の禁書目録2 Light PREMIUM 2000 ver.`
- existing target record duplicate check performed before write

## This relay
### Added: Pとある魔術の禁書目録2 Light PREMIUM 2000 ver.
- path: `docs/lt_pachinko_db/machines/2025-02-03_p_toaru_majutsu_no_index2_light_premium_2000.md`
- manufacturer: JFJ（藤商事グループ）
- formalModel: Pとある魔術の禁書目録2 Light JWX
- release: 2025-02-03
- type: 甘デジ / 二種機 / 普図ST / 下位RUSH→LT昇格型
- 通常時当選: 約1/99.9（特図1小当りからのV当り、V入賞条件）
- RUSH entry: 50%
- 下位RUSH: `最強激突(ヒーローズRUSH)` 70回 / 約65%
- LT: `最強領域(ラッキートリガー)` 162回 / 約91%
- LT route: 下位RUSH中の約2000個大当り（右打ち当りの約11%）
- LT payout: 約2000個11.0% / 約1150個44.5% / 約300個44.5%（特図2大当り2回分の合計払出）
- status: COMPLETE_CORE
- conflicts: none
- missing: 通常初当り基準の総LT到達率は直接公表値を確認できずUNVERIFIED。独自合算しない

Cross-check: JFJ公式、必勝本、P-WORLD、K-Naviを横断。公式の1/99.9・RUSH50%・右1/68.0・70回/約65%・162回/約91%と、必勝本の特図2振り分け/2000個約11%LT契機が一致。右打ち出玉は特図2大当り2回分の合計払出であることを定義分離。LT突入時期待出玉約11844個は突入率ではないため混同しない。

## 2025-02-03 boundary remains OPEN
Remaining same-date candidates requiring formal LT-positive verification/full record:
- `Pフィーバー戦姫絶唱シンフォギア4 199 ver.` — next priority
- `eルパン三世 ONE COLLECTION 超ブチヌキLTver.`
- `ぱちんこ シン・エヴァンゲリオン 129 LT ver.`

Excluded / hold already noted:
- `P愛の不時着`: LT非搭載確認済み、対象外
- `P冬のソナタ My Memory`: LT-positive根拠なし。先行登録しない

## Effective DB state
Previous handoff after e閃乱カグラ:
- machine records: 61
- COMPLETE_CORE: 60
- CONFLICT: 1

After this relay:
- machine records: **62**
- COMPLETE_CORE: **61**
- CONFLICT: **1**
- 2025-02-03 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
Re-sync latest main first. Continue **2025-02-03** with **`Pフィーバー戦姫絶唱シンフォギア4 199 ver.`**. First verify that this exact 199 specification is LT-equipped using official/industry/analysis sources; only if LT-positive, collect and save the full machine record. Then continue the same-date queue with `eルパン三世 ONE COLLECTION 超ブチヌキLTver.` and `ぱちんこ シン・エヴァンゲリオン 129 LT ver.`, and independently re-enumerate 2025-02-03 introductions before closing the boundary.

## Sources used this relay
- https://www.fujimarukun.co.jp/products/p_toaru2ama/ — JFJ公式。通常1/99.9、RUSH50%、右1/68.0、70回/約65%、LT162回/約91%、主要出玉
- https://hisshobon.com/machineinfo/95695/ — 必勝本。特図1/特図2振り分け、2000個約11%でLT
- https://p.hisshobon.jp/machine/4455/1/106860 — 必勝本。LT発動契機、残保留なし
- https://p.hisshobon.jp/machine/4455/1/106858 — 必勝本。基本スペック/期待出玉定義
- https://www.p-world.co.jp/machine/database/10192 — P-WORLD。LT搭載、RUSH/LT継続、期待出玉定義照合
- https://p-kn.com/pachinko/4274/ — K-Navi。導入日2025-02-03、型式/甘デジ/ST/LT照合
