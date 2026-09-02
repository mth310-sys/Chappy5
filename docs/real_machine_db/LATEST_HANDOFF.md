# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは **401件 `めぞん一刻2`** まで完了済みだったため、401を正本として継続。
- 2009-08-24同日群を再監査し、未登録だったエマ `イケイケめんそーれ-30` を発見。repo検索で未登録確認後、**402** に追加。

## 402. イケイケめんそーれ-30

record:
- `docs/real_machine_db/machines/2009-08-24_ikeike-mensore-30.md`

machine record commit:
- `9e5bdf1898752bcc0b638ba4341ba87d4e19954c`

要点:
- manufacturer: **エマ**
- formalModelName: **メンソーレ3H-30**（2009年当時グリーンべると）
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2009-08-24**（K-Naviホール導入開始）。2009-07-30グリーンべるとは「8月下旬納品開始」。5号機クロニクルは2009/9、筐体回顧は2009/6表記のため月表記差を `CONFLICT` として保持。
- generation: **5号機**
- systemType: **ノーマル / 完全告知 / 30Φ / BB+RB**
- RT非搭載の純正ノーマルタイプ。
- BIG **1/318.14 → 1/266.41**、REG **1/537.18 → 1/381.02**、合算 **1/199.80 → 1/156.78**。当時パチマガスロマガ精密値、K-Navi丸め値、当時業界記事端点で整合。
- 50枚ベース相当（1000円あたり）は設定1→6で **38.02 / 38.21 / 38.46 / 38.67 / 38.93 / 39.14G**。
- BIG約**312枚**、REG約**130枚**。
- 機械割は資料系列が不一致のため `CONFLICT_PAYOUT_RATE`：
  - 当時パチマガスロマガ（シミュレート） **96.54 / 98.68 / 100.93 / 103.06 / 105.26 / 107.42%**
  - 5号機クロニクル **97.1 / 99.1 / 101.2 / 103.2 / 105.2 / 107.3%**
  - pacnk **96.2 / 98.5 / 100.3 / 103.3 / 106.1 / 109.0%**
- 算出条件を直接解消できないため平均せず三系列保持。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_AND_RELEASE_DATE_CONFLICT_INSPECTION_UNVERIFIED`。

### v0.7 resetBehavior — イケイケめんそーれ-30

- 純正ノーマルでRT/ART/AT/CZ非搭載。当時パチマガスロマガも「攻め時・ヤメ時→特にナシ」。ゲーム数天井、周期CZ、ゲーム数管理モード、朝一専用モードは確認されない。
- `gameCounterReset=NOT_APPLICABLE_NO_CEILING_OR_GAME_COUNT_SYSTEM_CONFIRMED`。
- `ceilingAfterReset=NOT_APPLICABLE_NO_CEILING_CONFIRMED`。
- `modeAfterReset=NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED`。
- `stateAfterReset=NOT_APPLICABLE_FOR_RT_ART_CZ_STATE / OTHER_INTERNAL_START_STATE_UNVERIFIED`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- 設定変更固有の短縮天井、モード優遇、CZ/初当たり優遇等の公開朝一恩恵/不利は多段再探索後も確認なし。
- 一方、設定変更操作時や単純電源OFF→ON時の**リール初期位置・ガックン・ハイビスカス/ドット表示等の本機固有ハード起動挙動**は、型式名 `メンソーレ3H-30` も含め検索語・資料系統を変えても直接確証を取れず `UNVERIFIED_AFTER_RESEARCH`。
- 4号機「めんそーれ30」には設定変更時モード解析があるが、5号機純正ノーマルの本機とは別機種なので混入させない。
- 公開朝一数値は `NONE_CONFIRMED`。

## 401. めぞん一刻2（直前）

record:
- `docs/real_machine_db/machines/2009-08-24_maison-ikkoku-2.md`

machine record commit:
- `a9aace00fd72e504553d51390e8fbab1fd14c54e`

- 設定変更時ART＆ストック消滅 / 天井ゲーム数再セットを確認済み。
- 設定変更後の公開朝一数値として **50%で590G以内 / 85%で990G以内**の天井発動を保存済み。
- 単純電断、内部高確/通常モード、本機固有ガックンは未確認部分を分離済み。

## 400. パチスロがんばれ!!ロボコン

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
1. **402件地点 / イケイケめんそーれ-30まで完了**から再開。
2. **2009-08-24同日群をもう一度最終監査**。K-Navi/メーカー別一覧/当時導入一覧で未処理がないか確認する。今回、同日群からイケイケめんそーれ-30の漏れを発見したため、同日閉鎖を急がない。
3. 同日群終了後、**2009-08-25〜29**を境界監査する。
4. `サンサンハナハナ-30` はパイオニア2009年モデル。2009-07-31グリーンべるとが **2009-08-30納品予定**、P-WORLDが2009年8月導入としている。repo未登録確認後、8/24〜29により古い未処理がなければ次の有力候補。
5. 8月30日群を閉じたら8月31日/9月初頭へ時系列継続する。
6. `イケイケめんそーれ-30` は5号機クロニクルで2009/9表記もあるが、K-Naviの具体的ホール導入日2009-08-24と当時業界記事の8月下旬納品が整合するため、時系列本線では8/24同日群として処理済み。再登録しない。

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

- 402 イケイケめんそーれ-30: `docs/real_machine_db/machines/2009-08-24_ikeike-mensore-30.md`
- machine record commit: `9e5bdf1898752bcc0b638ba4341ba87d4e19954c`
- 本 `LATEST_HANDOFF.md` を402件地点へ更新。
