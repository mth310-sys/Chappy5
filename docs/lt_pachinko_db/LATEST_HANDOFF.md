# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-02-03 `Pフィーバー戦姫絶唱シンフォギア4 199 ver.`
- existing target record duplicate check performed before write

## This relay
### Added: Pフィーバー戦姫絶唱シンフォギア4 199 ver.
- path: `docs/lt_pachinko_db/machines/2025-02-03_p_fever_symphogear4_199.md`
- manufacturer: SANKYO
- formalModel: Pフィーバー戦姫絶唱シンフォギア4Z
- release: 2025-02-03
- type: ライトミドル / 一種二種混合 / 1回転RUSH / 下位RUSH→LT昇格型
- 通常: 約1/199.9
- RUSH TOTAL: 約52%（LT直行含む）
- 下位: `絶唱RUSH` 時短1回 / 約55%
- LT: `超絶唱RUSH` 時短1回または実質次回 / TOTAL約86%（時短1回のみ約83%）
- LT routes: 特図1約1%直行 / 絶唱RUSH1回目大当り時約20% / 下位RUSH2連達成で100%LT
- LT direct analysis value: 約1/1092.6（パチマガスロマガFREE）
- payout: 初当り大半約900個、約1%約1500個LT直行; 右打ち大当りALL約1500個払出
- status: COMPLETE_CORE
- conflicts: none
- missing: none for core fields

Cross-check: SANKYO公式オンライン博物館、アミューズメントジャパン/遊技通信の業界記事、HAZUSE、K-Navi、パチマガスロマガを横断。公式の絶唱RUSH突入率約51%と業界資料のRUSH TOTAL約52%は、後者がLT直行約1%を含む定義差として分離しCONFLICT扱いしない。2025-08-04のLT-Light ver.（約1/99.9）と混同しない。

## 2025-02-03 boundary remains OPEN
Remaining same-date candidates requiring full record:
- `eルパン三世 ONE COLLECTION 超ブチヌキLTver.` — next priority
- `ぱちんこ シン・エヴァンゲリオン 129 LT ver.`

Excluded / hold already noted:
- `P愛の不時着`: LT非搭載確認済み、対象外
- `P冬のソナタ My Memory`: LT-positive根拠なし。先行登録しない

Before closing 2025-02-03, independently re-enumerate same-date introductions and verify LT-positive status for any additional candidates.

## Effective DB state
Previous handoff:
- machine records: 62
- COMPLETE_CORE: 61
- CONFLICT: 1

After this relay:
- machine records: **63**
- COMPLETE_CORE: **62**
- CONFLICT: **1**
- 2025-02-03 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
Re-sync latest main first. Continue **2025-02-03** with **`eルパン三世 ONE COLLECTION 超ブチヌキLTver.`**. Verify the exact specification and LT structure using official/industry/analysis sources, then save the full record if LT-positive. Next process `ぱちんこ シン・エヴァンゲリオン 129 LT ver.` and independently re-enumerate all 2025-02-03 introductions before closing the boundary.

## Sources used this relay
- https://www.sankyo-fever.jp/collection/974/ — SANKYO公式オンライン博物館
- https://news.p-world.co.jp/articles/29315/amusement — アミューズメントジャパン/P-WORLD業界ニュース
- https://news.p-world.co.jp/articles/29345/yugitsushin — 遊技通信/P-WORLD業界ニュース
- https://hazuse.com/machine/pachinko/PX0263/genre/101/ — HAZUSE
- https://p-kn.com/pachinko/4244/ — K-Navi
- https://pachimaga.com/free/article/20250222/056021.php — パチマガスロマガFREE、LT確率約1/1092.6
