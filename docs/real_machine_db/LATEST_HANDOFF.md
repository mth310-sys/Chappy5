# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 本リレー開始時、mainは **379件 `COBRA -THE SLOT-`** まで進行済みだったため、過去チャットの371件地点へ戻らず379件地点を正本として継続。
- K-Navi 2009年6月カレンダーで2009-06-08群を監査し、未登録だった **オーイズミ `銀河豪華客船クイーンギャラクシア` を380として追加**。
- 同日群では **北電子 `パチスロ「BON JOVI」`** が次の未処理候補。repo既存登録を再確認してから381候補として調査する。

## 380. 銀河豪華客船クイーンギャラクシア

record:
- `docs/real_machine_db/machines/2009-06-08_queen-galaxia.md`

要点:
- manufacturer: **オーイズミ**
- formalModelName: **クイーンギャラクシア4X**
- inspectionNumber: **8S1254**
- releaseDate主値: **2009-06-08**（K-Navi全国一斉導入開始）。当時グリーンべるとは **2009-06-07納品開始**。物流開始/全国導入の1日差として保持。
- generation: **5号機**
- systemType: **ボーナス+RT / CZ経由 / パンク回避型RT**
- 機械割: **97.4 / 99.7 / 102.6 / 105.2 / 108.7 / 114.5%**。P-WORLD・pacnk・パチマガスロマガで一致し、パチマガはメーカー発表値と明記。
- QB: 全設定 **1/1985.94**。
- BIG合成: **1/481.88 / 1/461.52 / 1/448.88 / 1/436.91 / 1/425.56 / 1/409.60**。
- REG合成: **1/390.10 / 1/381.02 / 1/372.36 / 1/364.09 / 1/352.34 / 1/337.81**。
- ボーナス合算: **1/194.47 / 1/188.86 / 1/184.61 / 1/180.54 / 1/175.70 / 1/169.34**。
- 50枚ベース: **31.49 / 31.85 / 32.23 / 32.61 / 33.01 / 33.49G**。旧パチマガ直接値。別系統の同一設定別系列を直接再照合できないため `ANALYSIS_SINGLE_OLD_MAJOR`。
- QB約270枚+RT、BIG約270枚、REG約80枚。
- RT「ギャラクシードライブ」: P-WORLD/pacnkは **約+0.5枚/G**、2009年当時グリーンべるとは **約+0.6枚/G**。平均化せず `CONFLICT_SMALL_ESTIMATE_DIFFERENCE`。
- RTループ率は **1% / 75% / 85%**。炎の惑星は平均約50G、氷の惑星は平均約150Gの解析値。
- 天井: **QB/BIG後1200G、REG後800G** で次回ボーナスまで継続するRTへ突入。P-WORLDと旧天井DBで照合。
- `coreStatus=COMPLETE_CORE_WITH_BASE_SINGLE_SOURCE_AND_NET_INCREASE_CONFLICT`。

### v0.7 resetBehavior — 銀河豪華客船クイーンギャラクシア

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。1200G/800G天井進捗、高確/CZ/RT状態の据え置き時引継ぎを直接確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の天井進捗、高確/CZ/RT状態を直接確定できず。
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`。通常天井値は確認済みだが設定変更時RESET/CARRY_OVERは未確認。
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`。設定変更後の短縮天井・別ゲーム数を確認できず、「短縮なし」と断定する直接資料も未回収。
- modeAfterReset: `UNVERIFIED_AFTER_RESEARCH`。高確モードの存在は確認済みだが設定変更時の初期モード/振り分けは未確認。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。CZ/RT状態、高確状態の設定変更時処理は未確認。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目/液晶背景/ゲーム数挙動まで検索語を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- パチマガスロマガの機種トップに **「攻め時・ヤメ時・設定変更時」** 項目の存在までは確認したが、現存検索結果から具体本文を回収できなかったため内容を推測しない。
- `resetBehaviorQA=PARTIAL_RESET_CARRYOVER_POWER_CYCLE_COUNTER_MODE_STATE_AND_DETECTION_UNVERIFIED_AFTER_RESEARCH`。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存:
- K-Navi 2009年6月導入カレンダー
- グリーンべると 2009-04-20
- P-WORLD
- パチマガスロマガ旧解析（基本システム / 小役・1000円ゲーム数 / ボーナス確率・PAYOUT / 機種トップ）
- pacnk旧機種DB
- 旧天井DB
- 5号機クロニクル
- パチスロ業界初まとめ旧アーカイブ

## 直前mainの主な進捗

### 379. COBRA -THE SLOT-
- `docs/real_machine_db/machines/2009-06-01_cobra-the-slot.md`
- machine record commit: `f34cfb6e3f8db9ae0a944bd2b3eb5ca7df487197`
- 性能コア＋v0.7 resetBehavior保存済み。

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
- 次回QAを行う場合はmachine treeを最新mainで再走査し、最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **380件地点 / 2009-06-08群**から再開。
2. 同日群の次候補 **北電子 `パチスロ「BON JOVI」`** をrepo検索して未登録確認し、未処理なら381として性能コア＋v0.7 resetBehaviorを収集。
3. BON JOVI処理後、2009-06-08同日群をメーカー別一覧・当時業界記事で最終監査して漏れを閉じる。
4. その後は **2009-06-15 `サタデーナイトフィーバー`（ビスティ）** → **2009-06-22 `ぶっちゃけはっちゃけ大奥浪漫`（ラスター）** → **2009-06-29 `ワイルドドッグ`（パラジェーピー）** の順に、各境界漏れ監査を挟みながら接続する。
5. 過去月の月精度/納品日だけ判明している機種は具体日を推測挿入せず、別根拠が取れた時だけ遡及処理する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 380 銀河豪華客船クイーンギャラクシア: `docs/real_machine_db/machines/2009-06-08_queen-galaxia.md`
- machine record commit: `97c716263c67646776007237654094a0652eb971`
- 本 `LATEST_HANDOFF.md` を380件地点へ更新。
