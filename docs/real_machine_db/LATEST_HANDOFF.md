# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 前回handoffは **376件 `琉球浪漫（25φ）`** で停止していたが、その後mainへ **377 `Get The Ranker`、378 `ニューパルサー3`** が追加済みであることを直近コミットから確認。
- 本リレーでは重複追加を避け、同じ2009-06-01群の未処理 **藤商事 `COBRA -THE SLOT-` を379として追加**した。
- 2009-06-01のK-Navi掲載パチスロ群は `天誅 / 琉球浪漫 / Get The Ranker / ニューパルサー3` が処理済み。ALL7だけに同日予定として出る `COBRA -THE SLOT-` も今回個別照合して処理済み。ALL7同日欄の `疾風迅雷`・`石川さゆり` はパチンコ機であり対象外。
- したがって本線は **379件地点から2009-06-08群へ移行**する。

## 379. COBRA -THE SLOT-

record:
- `docs/real_machine_db/machines/2009-06-01_cobra-the-slot.md`

要点:
- manufacturer: **藤商事**
- releaseDate主値: **2009-06-01**（K-Naviホール導入開始 / ALL7導入予定）。藤商事公式と当時グリーンべるとは **2009年5月下旬から順次納品**、当時回顧資料は **2009-05-25発売**。納品/発売/全国導入の定義差として保持。
- generation: **5号機**
- systemType: **ボーナス+ART / RT「STORY MODE」経由 / パンク回避ART**
- 機械割: **98.0 / 100.7 / 103.5 / 106.3 / 110.0 / 112.3%**。P-WORLD・5号機クロニクル・2009年当時スペック転載で一致。
- ボーナス合算: **1/199.80 / 1/192.75 / 1/187.25 / 1/179.06 / 1/180.04 / 1/173.38**。P-WORLD丸め系列と当時精密転載が整合。
- S-BIG/BIG/BONUS GAMEの設定別個別確率は、K-Navi/パチマガ現存ページが未発表/調査中で、別系統直接系列も確定できず `UNVERIFIED_AFTER_RESEARCH`。合算から逆算していない。
- 50枚ベース: パチマガ現存ページが「現在調査中」。多段再探索後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- S-BIG約250枚、BIG約250枚、BONUS GAME約104〜111枚。
- ART「BATTLE ZONE」: **約+0.8枚/G**。解析資料では平均約280G。ARTはボーナス成立で終了せず、S-BIG後は次回ボーナスまでARTが確定する仕様を公式/当時記事/解析で照合。
- 通常時には **3つの内部状態**が存在。通常時**777G消化後はハイモード滞在率が優遇され、ART突入期待度が上昇**。777G即ART確定型とは扱わず、状態優遇型の天井相当条件として保存。
- `coreStatus=PARTIAL_CORE_WITH_COMBINED_BONUS_ONLY_AND_BASE_UNVERIFIED`。

### v0.7 resetBehavior — COBRA -THE SLOT-

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。777G進捗の据え置き/設定変更時処理を直接確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の777G進捗・内部状態・STORY MODE/ART状態を確定できず。
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`。設定変更後の短縮天井/別ゲーム数なしを断定できる直接資料も未回収。
- modeAfterReset: `UNVERIFIED_AFTER_RESEARCH`。内部3状態は確認済みだが、設定変更時の初期状態/振り分けは未確認。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目/液晶/朝一挙動まで表記揺れ込みで再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetBehaviorQA=PARTIAL_WITH_777G_STATE_ADVANTAGE_CONFIRMED_RESET_CARRYOVER_POWER_CYCLE_MODE_STATE_AND_DETECTION_UNVERIFIED`。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存:
- 藤商事公式製品ページ
- 藤商事 2009-04-01公式リリース
- グリーンべると 2009-04-01
- K-Navi `COBRA THE SLOT`
- P-WORLD `COBRA-THE SLOT-`
- ALL7 2009年6月導入一覧
- パチマガスロマガ旧解析ページ
- 5号機クロニクル
- 2009年4月当時スペック転載
- パチスロ業界初まとめ旧アーカイブ

## 直前mainで追加済みの未反映分

### 378. ニューパルサー3
- `docs/real_machine_db/machines/2009-06-01_new-pulsar-3.md`
- commit: `31d36ba1a2edd209ea00dcdd2c24941c30f41cb7`
- 性能コア＋v0.7 resetBehavior保存済み。

### 377. Get The Ranker
- 2009-06-01、アリストクラートテクノロジーズ。
- commit: `b8d0472083d35b563c4245be0bff520558719965`
- 性能コア＋v0.7 resetBehavior保存済み。

### 376. 琉球浪漫（25φ）
- `docs/real_machine_db/machines/2009-06-01_ryukyu-roman.md`
- 30φ既存機と分離。性能コア＋v0.7 resetBehavior保存済み。

### 375. 天誅
- `docs/real_machine_db/machines/2009-06-01_tenchu.md`
- 性能コア＋v0.7 resetBehavior保存済み。

## resetBehavior遡及QA

- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- 次回QAを行う場合は、machine treeを最新mainで再走査し、`快盗天使ツインエンジェル` より後の最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **379件地点から2009-06-08群へ進む**。
2. K-Navi 2009年6月カレンダーで同日パチスロとして確認済みのうち、既存登録チェック後、最優先は **オーイズミ `銀河豪華客船クイーンギャラクシア`**。
3. 同日次候補は **北電子 `パチスロ「BON JOVI」`**。
4. 6月8日群を閉じた後は **2009-06-15 `サタデーナイトフィーバー`（ビスティ）** → **2009-06-22 `ぶっちゃけはっちゃけ大奥浪漫`（ラスター）** → **2009-06-29 `ワイルドドッグ`（パラジェーピー）** の順に、境界漏れ監査を挟みながら接続する。
5. 過去月の月精度/納品日だけ判明している機種は具体日を推測挿入せず、別根拠が取れた時だけ遡及処理する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 379 COBRA -THE SLOT-: `docs/real_machine_db/machines/2009-06-01_cobra-the-slot.md`
- machine record commit: `f34cfb6e3f8db9ae0a944bd2b3eb5ca7df487197`
- 本 `LATEST_HANDOFF.md` を379件地点へ更新。
