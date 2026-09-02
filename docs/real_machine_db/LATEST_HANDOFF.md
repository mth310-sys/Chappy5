# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは400件 `パチスロがんばれ!!ロボコン` まで完了済み。400を正本として継続。
- 2009-08-24同日群の次の未処理 `めぞん一刻2` を **401** に追加。

## 401. めぞん一刻2

record:
- `docs/real_machine_db/machines/2009-08-24_maison-ikkoku-2.md`

machine record commit:
- `a9aace00fd72e504553d51390e8fbab1fd14c54e`

要点:
- manufacturer: **オリンピア**
- releaseDate: **2009-08-24**（K-Naviホール導入開始）
- formalModelName / inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation: **5号機**
- systemType: **ボーナス+ART / ゲーム数管理ART / 無限ART / 振り分け型天井**
- 機械割は当時パチマガスロマガのシミュレート値 **97.88 / 99.78 / 102.10 / 104.78 / 107.96 / 112.16%**。
- BIG **1/397.19 → 1/315.08**、REG **1/485.45 → 1/390.10**、合算 **1/218.45 → 1/174.30**。K-Naviの丸め表示とも整合。
- 50枚ベースは多段再探索後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- BIG約**250枚**、REG約**50枚**。
- ART「ドラマチックタイム」は**50G/セット**。純増は当時K-Navi/パチマガスロマガ約**+1.0枚/G**、後年パチセブン約**+0.9枚/G**で `CONFLICT_NET_INCREASE_0_9_VS_1_0`。
- 最大天井は**1590G**。浅い振り分け天井は無限ART「ドラマチックタイムSP」、1590G到達は無限ARTを80%で継続する「ウエディングモード」。510G/950Gが代表点という後年回顧と、500G 10% / 900G 20%という別回顧の表現差は未解消のため注記保持。
- `coreStatus=PARTIAL_BASE_AND_FORMAL_MODEL_UNVERIFIED`。

### v0.7 resetBehavior — めぞん一刻2

- 2009-11-09の当時ブログ解析で、**設定変更時はART＆ストック消滅 / 天井ゲーム数再セット**を直接確認。
- 同資料で設定変更後の天井発動は **50%で590G以内 / 85%で990G以内** と公開朝一数値あり。
- 後年天井整理でも本機は **宵越し× / 設定変更時天井ゲーム数再セット** と一致。
- 設定変更しても **液晶＆次回エピソードは変化しない**。設定変更判別は難しいが、天井発動約10G前から「ぴよぴよ演出」が頻発するため、前日G+当日Gとの照合で変更/据え置きを推測する方法が当時資料に記載。
- `settingChangeBehavior=CONFIRMED_RESET_RESEEDS_CEILING_AND_ERASES_ART_STOCK`。
- `gameCounterReset=CONFIRMED_RESET_ON_SETTING_CHANGE`。
- `ceilingAfterReset=CONFIRMED_RESELECTION_WITH_PUBLIC_MORNING_DISTRIBUTION_SUMMARY`。
- `stateAfterReset=PARTIAL_CONFIRMED_ART_AND_STOCK_ERASED`。
- 据え置き時の天井カウンタ継続は当時判別説明から強く示唆されるが、ART/ストック/高確まで含む完全な据え置き仕様は未確認のため `PARTIAL_CONFIRMED_BY_CONTRAST`。
- 単純電源OFF→ON、設定変更時の内部高確/通常モード振り分け、本機固有ガックンは多段検索後も `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機のため `NOT_APPLICABLE`。

## 400. パチスロがんばれ!!ロボコン（直前）

record:
- `docs/real_machine_db/machines/2009-08-24_ganbare-robocon.md`

machine record commit:
- `1780df9c1b33f1df524b716eddac04408bb051e4`

- 設定変更後は内部CZ開始まで確認済み。
- 900G天井カウンタclear/retain、据え置き、単純電断、変更判別は未確認部分を分離して保存済み。

## 399. 神たま～ARTやで!全員集合～

record:
- `docs/real_machine_db/machines/2009-08-24_kamitama-art.md`

machine record commit:
- `f9b7c96cc03f221a70f9376b6ebc4da9634abb81`

- 設定変更時ナビストック消滅 / 1/2高確スタートまで確認済み。
- 999G天井高確カウンタ、周期CZカウンタ、据え置き、単純電断、変更判別は未確認部分を分離して保存済み。

## resetBehavior遡及QA

既補完:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30
- スパイダーマン2G

直近QA:
- `docs/real_machine_db/machines/2006-10_spiderman2g.md`
- QA commit: `2412e7ff194ae127b67a76864a1c13c87a684276`

性能コアの既存COMPLETE_CORE完了判定は不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **401件地点 / めぞん一刻2まで完了**から再開。
2. **2009-08-24同日群を最終監査**。メーカー別/当時導入一覧で同日未処理がないか確認する。
3. 同日群終了後、**2009-08-25〜29**を境界監査する。
4. `サンサンハナハナ-30` はパイオニア公式2009年8月発売、当時グリーンべると2009-08-30納品予定の候補として月末群でrepo未登録確認後に処理する。
5. 8月30日群を閉じたら8月31日/9月初頭へ時系列継続する。

### resetBehavior遡及QA
1. **スパイダーマン2Gまで補完済み**。
2. 次は `docs/real_machine_db/machines/2006-10_surogenjin.md`。既にresetBehaviorがあれば飛ばし、次の未補完実ファイルへ進む。
3. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT/ART状態 / ガックン` を組み替え、当時解析・古いDB・アーカイブ・回顧まで再探索する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイル/検索で未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 競合値は平均せずCONFLICT、欠損は十分な再探索後のみUNVERIFIED_AFTER_RESEARCH。

## 今回の保存

- 401 めぞん一刻2: `docs/real_machine_db/machines/2009-08-24_maison-ikkoku-2.md`
- machine record commit: `a9aace00fd72e504553d51390e8fbab1fd14c54e`
- 本 `LATEST_HANDOFF.md` を401件地点へ更新。
