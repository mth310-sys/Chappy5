# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-02-03 same-date omission audit
- existing target duplicate check performed before write

## This relay — 2025-02-03 omission audit
An independent same-date new-machine sweep found one LT-positive omission: `e蒼天の拳 羅龍`.

During the write, latest main already contained the new record at:
- `docs/lt_pachinko_db/machines/2025-02-03_e_souten_no_ken_raryu.md`

Therefore it was **not duplicated or overwritten**. Existing record is COMPLETE_CORE and cross-checks correctly against current industry/analysis sources:
- manufacturer: サミー
- formalModel: e蒼天の拳羅龍SREN
- canonical release: 2025-02-03
- LT: `真・蒼拳RUSH`
- 図柄揃い: 約1/399.1
- 羅龍チャージ: 約1/372.8〜約1/373
- LT/RUSH突入: 約57%（時短引き戻し込み）
- LT: ST140回、継続約80%（2連目以降1G連込み）
- LT中: ALL約2400個（約1200個×2、払出）、10%で1G連
- routes: 図柄揃い50%直行 / 非突入側の時短50回引き戻し / 羅龍チャージ約0.2%

Definition QA:
- 約57%は図柄揃い時50%直行だけでなく時短50回の引き戻し込み。
- 羅龍チャージ約0.2%は別分母なので57%へ機械的に加算しない。
- 約80%は2連目以降1G連10%込みTOTAL。ST単体約77.2%という解析値とは定義を分離。
- 約2400個は約1200個×2回の合算払出。

### Same-date LT-negative boundary checks
- `P愛の不時着` — 必勝本が **ラッキートリガー(LT) 非搭載** と直接明記。対象外。上位的な `愛の燦然RUSH`（ST10000回・50%ループ）をLTと誤認しない。
- `P冬のソナタ My Memory` — 2025-02-03版は1/315.1、確変62%、時短100回の確変ループ機。複数スペック資料にLT構造なし。対象外。
- `P冬のソナタ My Memory Sweet GORAKU Version` — 同日PB甘デジ。パチマガスロマガが `ラッキートリガー なし` と直接明記。対象外。

## 2025-02-03 boundary status
**CLOSED** after independent re-enumeration and cross-check against current machine records.

LT-positive records confirmed for this boundary include the already processed `e閃乱カグラ`, `Pとある魔術の禁書目録2 Light PREMIUM 2000ver.`, `Pフィーバー戦姫絶唱シンフォギア4 199 ver.`, `eルパン三世 ONE COLLECTION 超ブチヌキLTver.`, `ぱちんこ シン・エヴァンゲリオン 129 LT ver.`, `PLT OVERLORD魔導王光臨129ver.`, and `e蒼天の拳 羅龍`. Do not redo these records unless QA later identifies a concrete defect.

## Effective DB state
Previous handoff stated 66 records / 65 COMPLETE_CORE / 1 CONFLICT before the concurrently added `e蒼天の拳 羅龍` record.

Current effective state:
- machine records: **67**
- COMPLETE_CORE: **66**
- CONFLICT: **1**
- 2025-02-03 boundary: **CLOSED**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
Re-sync latest main first. Advance chronologically to the **next introduction date after 2025-02-03**. Enumerate the complete next-date pachinko candidate list from more than one source, check existing `docs/lt_pachinko_db/machines/` before every write, and register only confirmed LT-positive machines. Do not re-process the closed 2025-02-03 records.

## Sources used / cross-checked this relay
- https://news.p-world.co.jp/articles/29497/yugitsushin — e蒼天の拳 羅龍 industry announcement; direct LT, 57%, ~80%, 2400 definition
- https://amusement-japan.co.jp/article/detail/10004627/ — e蒼天の拳 羅龍; direct-LT structure, routes, charge 0.2%, ST140
- https://1geki.jp/pachinko/e_soutenraryu/ — e蒼天の拳 羅龍; 2025-02-03, model, probabilities
- https://hisshobon.com/machineinfo/95632/ — e蒼天の拳 羅龍 distributions; ST ~77.2% vs 1G連込み~80%
- https://nana-press.com/kaiseki/machine/881/26080/ — e蒼天の拳 羅龍 detailed spec/distributions
- https://www.all7.jp/plans/index/2025/02 — independent February 2025 introduction calendar
- https://hisshobon.com/machineinfo/95649/ — P愛の不時着; explicitly LT非搭載
- https://1geki.jp/pachinko/p_fuyusona_mm/ — P冬のソナタ My Memory; 2025-02-03 conventional loop spec
- https://pachimaga.com/free/article/20241226/056333.php — Sweet GORAKU; explicitly ラッキートリガーなし
