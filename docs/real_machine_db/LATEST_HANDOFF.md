# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新handoffは391件 `ビガーV`。旧INDEXの19件地点へ戻らず391を正本として継続。
- 2009-07-06同日群の残候補を監査し、repo未登録だったエンターライズ `ヴァンパイア` を性能コア＋v0.7 resetBehavior付きで **392** として追加。

## 392. ヴァンパイア

record:
- `docs/real_machine_db/machines/2009-07-06_vampire-enterrise.md`

machine record commit:
- `37a4d11eae38baea7e31fc72b5340572c57b7883`

要点:
- manufacturer: **エンターライズ**
- formalModelName / inspectionNumber: 表記揺れ・型式・検定番号を再探索したが今回直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- releaseDate: **2009-07-06**。2009年当時業界史料の発売日と当時導入一覧で照合。P-WORLD/5号機クロニクルは2009年7月。
- generation: **5号機**
- systemType: **ボーナス+周期CZ+ART / パンク回避 / ナビストック**
- 機械割: **97.3 / 99.0 / 103.5 / 106.2 / 109.3 / 117.6%**。P-WORLD・旧パチマガ・5号機クロニクルで一致。
- 青7BIG: 全設定 **1/1638.40**。
- VB合成: **1/448.88 → 1/315.08**。
- REG合成: **1/455.11 → 1/318.14**。
- 全ボーナス合算: **1/198.59 → 1/144.35**。
- 50枚ベース: **31.96 / 32.04 / 32.06 / 32.09 / 32.11 / 32.22G**（旧パチマガ単一精密系列）。
- 青7BIG約**292枚**、VB約**206枚**、REG約**50枚**。
- ART `DEMONS TIME`: **1セット50G / 純増約+1.0枚/G**。
- 周期CZ/高確は後年整理資料で**チェリー後78G / 3択10枚役取りこぼし後83G**。P-WORLDはこれを「天井」と表現するが、当選保証ではないためDBでは通常ゲーム数天井と分離。天井機能は非搭載として扱う。
- `coreStatus=COMPLETE_CORE_WITH_FORMAL_MODEL_UNVERIFIED_AND_BASE_SINGLE_SOURCE`。

### v0.7 resetBehavior — ヴァンパイア

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。旧パチマガに「攻め時・ヤメ時・設定変更時」専用項目の存在は確認したが、設定変更時の周期進捗/CZ/ナビストック/ART状態本文を回収できず。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の78/83G周期進捗、CZ/ART、ナビストック引継ぎは直接根拠なし。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。電源OFF→ONのみの周期進捗、CZ/ART、ナビストック、初期出目/表示状態を確定できず。
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。当選保証天井はないが周期CZ用カウンタの設定変更時処理は未確定。
- ceilingAfterReset: **NOT_APPLICABLE_NO_BONUS_OR_ART_GUARANTEE_CEILING_CONFIRMED**。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。一般的5号機挙動から補完しない。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、周期ゲーム数等による本機固有判別根拠なし。
- 公開朝一数値: 設定変更専用のモード振分/当選率/恩恵率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_RESET_CARRY_POWER_CYCLE_PERIODIC_COUNTER_STATE_AND_DETECTION_UNVERIFIED`。

主要出典・取得日2026-09-02・信頼度はレコード本文へ保存。

## 直前mainの主な進捗

### 391. ビガーV
- `docs/real_machine_db/machines/2009-07-06_vigor-v.md`
- machine record commit: `12b4e09098ad86fe8565e45cb77fac9740046b82`

### 390. パチスロうる星やつら2
- `docs/real_machine_db/machines/2009-07-06_urusei-yatsura2.md`

### 389. 七色未来
- `docs/real_machine_db/machines/2009-07-06_nanairo-mirai.md`

### 388. パチスロ エマニエル～夜蝶Ver.～
- `docs/real_machine_db/machines/2009-07-06_emmanuelle-yachou-ver.md`

## resetBehavior遡及QA

進捗:
- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み。
- `格闘激戦区` v0.7補完済み。
- 性能コアの既存値/完了判定は変更せず、resetBehavior QAのみ別管理で進める。

## 次回再開地点

### 本線
1. **392件地点 / 2009-07-06 `ヴァンパイア`まで完了**から再開。
2. 2009-07-06同日群をメーカー別/当時導入一覧で最終監査し、未登録機があれば最古順に追加する。
3. 同日群に残件がなければ **2009-07-07〜12** を境界監査する。
4. その後 **2009-07-13群**へ進み、`デンジャラッシュ7` 等についてrepo既存有無・具体導入日を確認して未処理だけを追加する。
5. `サイボーグ009～未知なる加速へ～` は2009年ニューギンCRパチンコ機なので本線対象外。

### resetBehavior遡及QA
1. **格闘激戦区まで補完済み**。
2. 次の実ファイル候補は `docs/real_machine_db/machines/2006-10_nangoku-musume-30.md`。開始時に必ず最新mainを再走査し、resetBehavior未補完か実ファイル確認してから処理。
3. その後 `2006-10_spiderman2g.md` → `2006-10_surogenjin.md` の順で欠損確認。既に補完済みなら飛ばす。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 欠損判定前に機種名/型式/メーカー/シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
- resetBehavior QAは既存 `COMPLETE_CORE` を不用意に崩さず、性能と別のQA状態として更新。

## 今回の保存

- 392 ヴァンパイア: `docs/real_machine_db/machines/2009-07-06_vampire-enterrise.md`
- machine record commit: `37a4d11eae38baea7e31fc72b5340572c57b7883`
- 本 `LATEST_HANDOFF.md` を392件地点へ更新。
