# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 本リレー開始時、mainは **380件 `銀河豪華客船クイーンギャラクシア`** まで進行済みだったため、380件地点を正本として継続。
- 次候補だった **北電子 `パチスロ「BON JOVI」`** はrepo検索で未登録を確認し、性能コア＋v0.7 resetBehaviorを381として追加。
- K-Navi 2009年6月全国一斉導入カレンダー上、2009-06-08のパチスロは `銀河豪華客船クイーンギャラクシア` と `パチスロ「BON JOVI」` の2機種。別表記/日付検索も再確認し、今回安全に追加できる同日未処理機を確定できなかったため、2009-06-08群を閉じる。

## 381. パチスロ「BON JOVI」

record:
- `docs/real_machine_db/machines/2009-06-08_bon-jovi.md`

要点:
- manufacturer: **北電子**
- formalModelName: **ボンジョビ5**
- inspectionNumber: **8S1007**
- releaseDate主値: **2009-06-08**（K-Navi全国一斉導入開始、当時パチスロ業界初まとめも2009-06-08発売）。パチビーは **2009-06-09** と掲載するため、全国導入/掲載基準差として保持。
- generation: **5号機**
- systemType: **ノーマル / ボーナス主体 / 技術介入あり / 演出用プチRT**
- 北電子公式出玉率: **96.6 / 98.0 / 101.0 / 103.5 / 105.8 / 108.3%**。P-WORLD、パチビー、2009年更新5号機まとめで照合。
- BIG: **1/280.1 / 1/270.8 / 1/260.1 / 1/251.1 / 1/244.5 / 1/240.1**。
- REG主値: **1/489.1 / 1/471.5 / 1/436.9 / 1/409.6 / 1/378.8 / 1/316.6**。
- 合算: **1/178.1 / 1/172.0 / 1/163.0 / 1/155.7 / 1/148.6 / 1/136.5**。
- K-NaviのREG設定3〜5だけ **1/471.5 / 1/436.9 / 1/409.6** と公式系列から1段ずれたような表記で、同ページの合算値とも不整合。平均せずCONFLICT保持し、北電子公式+パチビー+当時5号機まとめ一致系列を主値とした。
- 50枚ベース: **35.10 / 35.10 / 35.93 / 36.54 / 37.17 / 37.17G**。旧パチマガの1000円あたりゲーム数直接値。別系統の同一設定別表を直接照合できないため `ANALYSIS_SINGLE_OLD_MAJOR`。
- BIG平均約**307枚**。REG **MAX129枚**、パチビーは平均約**117枚**も併記。
- 特殊リプレイ成立後に **3Gの演出用プチRT**、リプレイ確率 **1/3.08**。出玉増加用RTではなく、物差し上のnetIncreaseは`NOT_APPLICABLE_AS_OUTPUT_SYSTEM`。
- 通常ゲーム数天井/ゲーム数管理当選/ART・AT/長期通常モードなし。`coreStatus=COMPLETE_CORE_WITH_BASE_SINGLE_SOURCE_AND_KNAVI_REG_TABLE_CONFLICT`。

### v0.7 resetBehavior — BON JOVI

- settingChangeBehavior: 通常ゲーム数天井・長期通常モード等の主要リセット対象はなし。特殊リプレイ後3GプチRT中の設定変更時処理のみ `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 通常ゲーム数天井/通常モードの据え置き引継ぎは `NOT_APPLICABLE`。瞬間的内部状態の据え置き処理は直接資料未確認。
- powerCycleBehavior: 通常ゲーム数天井/通常モードは `NOT_APPLICABLE`。3GプチRT中の単純電源OFF→ON復帰処理のみ `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- ceilingAfterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- modeAfterReset: `NOT_APPLICABLE_NO_PERSISTENT_NORMAL_MODE_CONFIRMED`。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH_FOR_TRANSIENT_3G_RT_ONLY`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン、初期出目、液晶、BON JOVIランプ等まで検索語を変えて公式/業界/旧解析/古いDBを横断したが `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- パチマガスロマガ機種トップに **「攻め時・ヤメ時・設定変更時」** 項目の存在までは確認したが、現存検索結果から具体本文を回収できず推測しない。
- `resetBehaviorQA=COMPLETE_FOR_HALL_SIM_PRIMARY_ITEMS_WITH_TRANSIENT_3G_RT_AND_RESET_DETECTION_UNVERIFIED`。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存:
- 北電子公式製品ページ
- K-Navi 2009年6月導入カレンダー / 機種ページ
- P-WORLD
- パチビー
- パチマガスロマガ旧解析（基本システム / 小役・1000円ゲーム数 / 機種トップ）
- 2009年更新パチスロ5号機まとめwiki
- パチスロ業界初まとめ旧更新履歴
- グリーンべると2009年完成披露記事

## 直前mainの主な進捗

### 380. 銀河豪華客船クイーンギャラクシア
- `docs/real_machine_db/machines/2009-06-08_queen-galaxia.md`
- machine record commit: `97c716263c67646776007237654094a0652eb971`
- 性能コア＋v0.7 resetBehavior保存済み。

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

## resetBehavior遡及QA

- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- 次回QAを行う場合はmachine treeを最新mainで再走査し、最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **381件地点 / 2009-06-08群完了**から再開。
2. 2009-06-09〜14をメーカー別一覧・当時業界記事・旧導入カレンダーで境界監査し、具体日付き未処理機がなければ **2009-06-15 `サタデーナイトフィーバー`（ビスティ）** をrepo検索して382候補として処理。
3. `サタデーナイトフィーバー`後は **2009-06-22 `ぶっちゃけはっちゃけ大奥浪漫`（ラスター）** → **2009-06-29 `ワイルドドッグ`（パラジェーピー）** の順に、各境界漏れ監査を挟みながら接続。
4. パチスロ業界初まとめには `天誅` を2009-06-08発売とする記載もある一方、K-Naviは2009-06-01全国導入、repoでは既に375として2009-06-01登録済み。これは新規追加せず、日付定義QA候補として既存レコード側で必要時にCONFLICT補強する。
5. 過去月の月精度/納品日だけ判明している機種は具体日を推測挿入せず、別根拠が取れた時だけ遡及処理する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 381 パチスロ「BON JOVI」: `docs/real_machine_db/machines/2009-06-08_bon-jovi.md`
- machine record commit: `8a6fe6f186903aec297541fb308f1508b0540d09`
- 本 `LATEST_HANDOFF.md` を381件地点へ更新。
