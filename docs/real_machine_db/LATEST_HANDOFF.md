# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、既存レコード、machine treeを再取得して継続。
- `INDEX.md` は19件地点の旧版のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 作業開始時の最新mainは **375件 `天誅`**。
- 2009-06-01同日群を継続し、既存30φ版との混同を避けたうえで **25φ `琉球浪漫` を376として追加**。
- resetBehavior遡及QAは `ホークIII（25φ）` より後のrepo実ファイルを走査し、最初の未補完レコードとして **`バーグラー`** をv0.7化した。

## 376. 琉球浪漫（25φ）

record:
- `docs/real_machine_db/machines/2009-06-01_ryukyu-roman.md`

要点:
- manufacturer: **タイヨー**
- formalModelName: **琉球浪漫**
- inspectionNumber: **9S0316**
- releaseDate主値: **2009-06-01**（K-Navi全国一斉導入開始）。当時グリーンべるとは25φ納品開始を **2009-05-31**、P-WORLDは月精度2009年05月とするため、`CONFLICT`で潰さず「納品開始 / 全国一斉導入」の日付定義を分離して保持。
- generation: 5号機
- systemType: **ノーマル / Aタイプ / 完全告知 / 25Φ**
- 30φ既存機 `琉球浪漫30` は別レコード。P-WORLDは25φを30φの25パイ仕様、当時業界記事も演出・スペック同一と明記するため、内部性能の共通値を25φ固有ページと共通解析で照合して採用。
- BIG: **1/292.6 / 1/284.9 / 1/280.1 / 1/264.3 / 1/255.0 / 1/240.1**。
- REG: **1/439.8 / 1/428.3 / 1/420.1 / 1/397.2 / 1/383.3 / 1/360.1**。
- 合算: 旧解析精密系列 **1/175.7 / 1/171.1 / 1/168.0 / 1/158.7 / 1/153.1 / 1/144.0**。P-WORLDの設定3=1/168.1・設定6=1/144.1は丸め差として別保持。
- 市場掲載機械割: **97.3 / 98.8 / 99.9 / 103.1 / 105.1 / 108.4%**。
- 旧パチマガシミュレート: **97.50 / 99.11 / 99.93 / 103.40 / 105.68 / 109.33%**。平均せず定義差CONFLICT。
- 50枚ベース: **35.20 / 35.52 / 35.52 / 36.08 / 36.44 / 36.82G**。
- BIG約312枚、REG約130枚。
- 付加機能非搭載ノーマルのためRT/ART/AT純増、通常ゲーム数天井、ゲーム数モードは非該当。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_DEFINITION_CONFLICT_AND_RELEASE_DATE_DEFINITION_SPLIT`。

### v0.7 resetBehavior — 琉球浪漫

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。通常天井は確認されないため天井G数の宵越しは非該当。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset / ceilingAfterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- modeAfterReset: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED`。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。一般的ノーマル機の挙動から補間しない。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目/設定変更判別を表記揺れ込みで再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値: 確認できず。
- `resetBehaviorQA=PARTIAL_WITH_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_STATE_AND_DETECTION_UNVERIFIED`。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存:
- K-Navi 2009年6月導入カレンダー
- グリーンべると 2009-04-27「リール逆回転でBB確定、タイヨー『琉球浪漫』」
- P-WORLD `琉球浪漫25`
- パチマガスロマガ `琉球浪漫&30` 基本システム / 1000円あたりゲーム数 / ボーナス確率・PAYOUT

## resetBehavior遡及QA

### バーグラー（2006-10）— 補完済み

record:
- `docs/real_machine_db/machines/2006-10_burglar.md`

QA要点:
- 既存性能コアのPARTIAL/CONFLICT内容は変更せず、v0.7 resetBehaviorを別管理で追加。
- ユニバーサル公式で5号機ノーマル・完全告知・小役同時抽選機を再確認。
- pacnkで**天井機能非搭載**を確認したため、通常ゲーム数天井、設定変更時短縮天井、天井G数宵越しは `NOT_APPLICABLE` とした。
- settingChangeBehavior / carryOverBehavior / powerCycleBehavior / stateAfterReset / resetDetectionは、本機固有の直接資料を十分再探索しても確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は制度前で `NOT_APPLICABLE`。
- 朝一専用恩恵/不利・公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetBehaviorQA=PARTIAL_WITH_NO_CEILING_CONFIRMED_AND_DEVICE_SPECIFIC_RESET_DETAILS_UNVERIFIED`。

### 遡及QA次地点

- machine tree上、`バーグラー` の次の未補完候補は **`快盗天使ツインエンジェル`**。
- path: `docs/real_machine_db/machines/2006-10_kaitou-tenshi-twin-angel.md`
- 現在の実ファイルを再取得し、resetBehavior未収集を確認済み。
- A+RT機なので、RT状態・残G・設定変更/据え置き/電断の扱いをノーマル機一般論から補完せず、当時HAZUSE・旧解析・アーカイブを優先して調査する。

## 直前保存済み事項

### 375 天誅
- `docs/real_machine_db/machines/2009-06-01_tenchu.md`
- 2009-06-01。性能コア＋v0.7 resetBehavior保存済み。
- 50枚ベースのみ再探索後もUNVERIFIED。REG後50G RT→無限RT昇格型。

### 374 デュエルドラゴンキングダム
- `docs/real_machine_db/machines/2009-05-25_duel-dragon-kingdom.md`
- 性能コア＋v0.7 resetBehavior保存済み。

### 373 がんばれゴエモン
- `docs/real_machine_db/machines/2009-05-25_ganbare-goemon.md`
- 設定変更時ARTストック消滅 / キャラ数1人 / 表示ステージ維持まで回収済み。

## 次回再開地点

### 本線
1. **376件地点の2009-06-01同日群を継続**。
2. 未処理候補を既存登録チェック後に処理:
   - **`Get The Ranker`（アリストクラート）**
   - **`ニューパルサー3`（山佐）**
3. **`COBRA THE SLOT`（藤商事）** はK-Navi 6月1日カレンダーには出ないが、ALL7の2009年6月導入一覧で2009-06-01予定を確認している。個別K-Navi/業界記事/P-WORLDの日付を突合し、パチスロ機であること・既存未登録を確認後に追加可否を決める。
4. ALL7には `レキオ2-30` も2009-06-01予定として出るが、repoには既に `2009-05_lequio2-30.md` が存在するため、重複追加せず日付定義だけ必要なら後日QAする。
5. 6月1日群を閉じた後はK-Navi上の次群 **2009-06-08 `銀河豪華客船クイーンギャラクシア` / `パチスロ「BON JOVI」`**へ接続。

### 遡及resetBehavior QA
1. **`快盗天使ツインエンジェル`** から再開。
2. 既存性能 `coreStatus` / PARTIAL / CONFLICTを不用意に変更せず、v0.7 resetBehaviorを別管理で補完。
3. RT状態・残G、設定変更、据え置き、単純電源OFF→ON、朝一恩恵/不利、変更判別、公開朝一数値を資料系統を変えて再探索。
4. 新規本線を止めず、既補完機は飛ばす。

## 今回の保存

- 376 琉球浪漫（25φ）: `docs/real_machine_db/machines/2009-06-01_ryukyu-roman.md`
- 遡及QA バーグラー: `docs/real_machine_db/machines/2006-10_burglar.md`
- 本 `LATEST_HANDOFF.md` を376件地点へ更新。

次回も作業開始時に必ず最新mainのREADME / ミッション / INDEX / LATEST_HANDOFF / 既存レコード / 直近コミットを再取得し、この引継ぎよりmainが進んでいればGitHub最新mainを優先する。
