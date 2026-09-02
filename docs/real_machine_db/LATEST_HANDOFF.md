# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは390件 `パチスロうる星やつら2`。過去会話の旧地点へ戻らず390を正本として継続した。
- 2009-07-06同日群を監査し、repo未登録だったエマ `ビガーV` を性能コア＋v0.7 resetBehavior付きで **391** として追加。

## 391. ビガーV

record:
- `docs/real_machine_db/machines/2009-07-06_vigor-v.md`

machine record commit:
- `12b4e09098ad86fe8565e45cb77fac9740046b82`

要点:
- manufacturer: **エマ**
- formalModelName: **ビガーV**
- inspectionNumber: **9S0257**
- releaseDate: **2009-07-06**。当時グリーンべるとは7月5日納品開始、当時導入一覧/業界史料は7月6日発売・導入、P-WORLDは2009年7月。DB主値を7/6、7/5を納品開始として分離。
- generation: **5号機**
- systemType: **ノーマルA / ボーナス主体 / 技術介入 / 特殊リプレイ後5GプチRT**
- BIG: **1/297.89 / 1/287.44 / 1/277.69 / 1/264.26 / 1/254.02 / 1/239.18**。
- REG: **1/448.88 / 1/420.10 / 1/390.10 / 1/356.17 / 1/324.44 / 1/297.89**。
- 合算: **1/179.06 / 1/170.67 / 1/162.22 / 1/151.70 / 1/142.47 / 1/132.66**。
- 50枚ベース: **35.91 / 36.36 / 36.89 / 37.40 / 37.73 / 38.07G**（旧パチマガ、プチRT考慮せず）。別系統同一精度照合は未取得のため `ANALYSIS_SINGLE_OLD_MAJOR`。
- BIG約**309枚**、REG約**111枚**。
- 機械割はP-WORLD/HAZUSE/当時業界系列 **97.1 / 98.8 / 100.8 / 103.4 / 106.9 / 110.7%** と、旧パチマガのシミュレート **97.64 / 99.94 / 102.50 / 105.81 / 108.69 / 112.52%** が競合。平均せず `CONFLICT_DIFFERENT_PAYOUT_SERIES` として両方保存。
- 当時史料で**天井無しの純Aタイプ**を直接確認。通常ゲーム数天井・リセット短縮天井は非該当。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_CONFLICT_AND_BASE_SINGLE_SOURCE`。

### v0.7 resetBehavior — ビガーV

- settingChangeBehavior: **NO_RESET_SPECIFIC_BENEFIT_CONFIRMED_AFTER_RESEARCH**。短縮天井・朝一モード・ボーナス優遇は確認できず。5GプチRT残G/リプレイ状態の設定変更時処理は直接資料なし。
- carryOverBehavior: **NO_GAME_COUNT_CEILING_TO_CARRY**。天井なし。据え置き時の5GプチRT残G/状態復帰は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の5GプチRT残G、初期出目、炎ランプ状態を本機固有資料で確定できず。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。5GプチRT/特殊リプレイ後状態を一般的5号機RT仕様から補完しない。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/炎ランプ等による本機固有の設定変更判別根拠なし。
- 公開朝一数値: 設定変更専用の天井・モード振分・当選率・恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_NO_CEILING_OR_RESET_ADVANTAGE_FOUND_MINIRT_POWER_CYCLE_DETECTION_UNVERIFIED`。

主要出典・取得日2026-09-02・信頼度はレコード本文へ保存。

## resetBehavior遡及QA

進捗:
- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- `格闘激戦区` v0.7補完済み（commit `7e347061984668071e466b444c360c4f8b7b968b`）。
- 性能コアの既存値/完了判定は変更せず、resetBehavior QAのみ別管理で進める。

## 直前mainの主な進捗

### 390. パチスロうる星やつら2
- `docs/real_machine_db/machines/2009-07-06_urusei-yatsura2.md`
- machine record commit: `381a66c0dfd268dd7a27c4806935521324706e4a`

### 389. 七色未来
- `docs/real_machine_db/machines/2009-07-06_nanairo-mirai.md`
- machine record commit: `e61dcce5979aaff6f2dcb0ee4fabd893d36efd00`

### 388. パチスロ エマニエル～夜蝶Ver.～
- `docs/real_machine_db/machines/2009-07-06_emmanuelle-yachou-ver.md`
- machine record commit: `6a85f96c2520dae320141357c108156388de43cb`

### 387. ハイアップマシンガンバージョン
- `docs/real_machine_db/machines/2009-07-06_hi-up-machinegun-version.md`
- machine record commit: `c32592b454795e23d7f42dd83f39fb10737b8da8`

## 次回再開地点

### 本線
1. **391件地点 / 2009-07-06 `ビガーV`まで完了**から再開。
2. 2009-07-06同日群の残候補 **`ヴァンパイア`** を最優先で処理する。repo code searchでは現時点未登録。P-WORLDでエンターライズ、5号機、RT/ART表記、青7BIG約292枚・異色BIG約206枚・REG約50枚、通常時80Gで高確率ゾーン突入まで先行確認済み。導入具体日・型式・性能系列・resetBehaviorを当時資料と別系統で照合してから392候補とする。
3. `ヴァンパイア`処理後、7/6群に他の未登録機がないかメーカー別/当時導入一覧で最終監査して同日群を閉じる。
4. 2009-07-07〜12を境界監査し、その後2009-07-13 `デンジャラッシュ7` 等へ時系列で進む。
5. `サイボーグ009～未知なる加速へ～` は2009年ニューギンCRパチンコ機なので本線対象外。

### resetBehavior遡及QA
1. **格闘激戦区まで補完済み**。
2. 次の実ファイル候補は `docs/real_machine_db/machines/2006-10_nangoku-musume-30.md`。開始時に必ず最新mainを再走査し、resetBehavior未補完か実ファイル確認してから処理する。
3. その後 `2006-10_spiderman2g.md` → `2006-10_surogenjin.md` の順で欠損を確認。既に補完済みなら飛ばす。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 欠損判定前に機種名/型式/メーカー/シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
- resetBehavior QAは既存 `COMPLETE_CORE` を不用意に崩さず、性能と別のQA状態として更新する。

## 今回の保存

- 391 ビガーV: `docs/real_machine_db/machines/2009-07-06_vigor-v.md`
- machine record commit: `12b4e09098ad86fe8565e45cb77fac9740046b82`
- 本 `LATEST_HANDOFF.md` を391件地点へ更新。
