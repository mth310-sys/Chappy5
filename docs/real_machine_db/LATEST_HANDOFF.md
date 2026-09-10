更新日: 2026-09-10

## 現在地点
- recordCount: **1246**
- latestRecordAdded: **パチスロ マッハGoGoGo**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-12-03_mach-gogogo.md`
- chronologicalFrontier: **2018-12-03**
- frontierLatestMachine: **パチスロ マッハGoGoGo — No.1246**
- schema: **resetBehavior v0.7**
- status: **2018-12-03_GROUP_OPEN_1_OF_AT_LEAST_4_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1245を取得して開始。
- `INDEX.md` は旧スナップショット（19件）のため、README指示どおり `LATEST_HANDOFF.md` + main実レコードを現行正本として継続。
- 開始時正本は1245件 / 2018-11-19群CLOSED。
- 2018-11-20〜12-02の境界を導入一覧で再確認し、今回追加すべき未処理機を固定できなかったため次の明確な群2018-12-03へ進行。
- handoff指定の次機種 `パチスロ マッハGoGoGo` をNo.1246として登録。
- すろぱちくえすと2018年12月一覧では12/3群に `マッハGoGoGo / スーパーリノXX / ドリームクルーン711 / 巨人の星 情熱編` の4機を掲載。2-9伝説の導入一覧でも同4機を確認。
- 12/3群はまだOPEN。次はスーパーリノXXから継続する。

## No.1246 — パチスロ マッハGoGoGo
- manufacturer: **七匠**
- releaseDateCanonical: **2018-12-03**
- formalModelName: **パチスロマッハGoGoGo A**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5.9号機 / A+RT / 技術介入**
- settings: **1 / 3 / 6 / Go**
- payoutRate: **97.8 / 99.6 / 108.0 / 108.0%**
- BIG合算: **1/343.12 / 1/329.33 / 1/292.57 / 1/313.57**
- REG合算: **1/426.56 / 1/420.10 / 1/337.81 / 1/270.81**
- BONUS合算: **1/189.96 / 1/184.61 / 1/156.78 / 1/145.31**
- baseGamesPer50: **約44G**（ANALYSIS_SINGLE）
- RT純増: **約0.1枚/G**（別資料表現: 現状維持程度）
- basicPayout: **SBB最大400枚 / BIG最大257枚 / REG最大65枚**
- RT: **全BONUS後5G CZ→BAR揃いで55G RT**
- ceiling: **NONE**

### resetBehavior v0.7
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。ちょんぼりすた本機専用朝一表でもRT状態/ステージは調査中。検索語・資料系統を変更して再探索後も確定契約を固定できず。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。据え置き時のRT/CZ/液晶状態を純電断と独立して示す直接資料なし。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH**。本機専用朝一表でRT状態/ステージとも調査中。
- gameCounterReset: 通常G数天井非搭載のため **N/A**。CZ/RT残Gの設定変更・純電断処理はUNVERIFIED。
- ceilingAfterReset: **N/A / NO_CEILING**。
- modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。通常ゲーム数解除/朝一専用モードは確認なし。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。RT/CZ内部状態契約を固定できず。
- advantageousSection: **UNVERIFIED_AFTER_RESEARCH_OR_NOT_APPLICABLE_TO_THIS_A_PLUS_RT_IMPLEMENTATION**。5.9号機一般論から補完しない。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶等の本機固有朝一判別条件・発生率を固定できず。
- numericResetData: conventionalCeiling **NONE**、reset専用公開数値は **NONE_CONFIRMED / UNVERIFIED**。

### quality notes
- 設定1 BONUS合算 `1/190.0` 表記と精密値 `1/189.96` は丸め整合のためCONFLICTではない。
- 設定6と設定Goは機械割108.0%で同値だが、BIG後RT突入率やマッハGoチャージ発生率が異なるため別設定として保持。
- RT純増 `約0.1枚/G` と `現状維持程度` は方向性が整合し、表現差として保持。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-11_garou-densetsu.md`**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-11_jack-to-mamenoki.md`（ジャックと豆の木）**。
- 既存性能値をやり直さず、resetBehavior欠損のみ順次QAする。

## 2018-12-03群
### 登録済み
- No.1246 パチスロ マッハGoGoGo

### 未処理既知候補
1. **スーパーリノXX**（山佐）— No.1247候補
2. **ドリームクルーン711 / ドリームクルーンR711/CX**（オーイズミ）
3. **巨人の星 情熱編 / 巨人の星情熱編/S3**（サンセイR&D）

### 判定
- **2018-12-03_GROUP_OPEN_1_OF_AT_LEAST_4_PROCESSED**。
- すろぱちくえすと月次/年次一覧と2-9伝説で少なくとも上記4機を確認。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED化する。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1246を再取得。
2. **1246件 / chronologicalFrontier 2018-12-03 / `2018-12-03_GROUP_OPEN_1_OF_AT_LEAST_4_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理機種 **スーパーリノXX** をNo.1247候補として調査・登録。
4. 続いて **ドリームクルーン711 → 巨人の星 情熱編** を処理し、12/3群を全メーカー/別型式/別スペック/PB/地域差まで再監査してCLOSED判定。
5. 遡及QAは **`docs/real_machine_db/machines/2006-11_jack-to-mamenoki.md`（ジャックと豆の木）** から再開。

## 主要出典 — 取得日 2026-09-10
### No.1246 パチスロ マッハGoGoGo
- 七匠 公式製品アーカイブ: https://www.nanashow.co.jp/product/
- パチビー: https://www.pachibee.jp/machines/about/218100012
- P-WORLD: https://www.p-world.co.jp/machine/database/8786
- ちょんぼりすた: https://chonborista.com/slot/nanashow/67215/
- すろぱちくえすと 機種解析: https://www.slopachi-quest.com/article/mach-gogogo/
- すろぱちくえすと 2018年12月新台: https://www.slopachi-quest.com/article/erunote-12-shindai/
- すろぱちくえすと 2018年導入一覧: https://www.slopachi-quest.com/article/sindai-2018/
- 中一商事 中古実機DB: https://www.nakaiti.com/html/sNanashow009.html
- 元プロMG パチスロブログ: https://www.pachislotblog.tokyo/mach-gogogo-kaiseki/
- 2-9伝説 新台一覧: https://29den.com/newslot/
