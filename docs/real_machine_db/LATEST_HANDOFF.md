# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは **402件 `イケイケめんそーれ-30`** まで完了済みだったため、402を正本として継続。
- 2009-08-24同日群を最終監査し、2009-08-25〜29も日付/導入/納品検索を行ったが、402より後かつ8月30日より前に今回安全に追加できる未登録5号機は確認できず。
- repo検索で未登録を確認したうえで、パイオニア **`サンサンハナハナ-30`** を **403** に追加。

## 403. サンサンハナハナ-30

record:
- `docs/real_machine_db/machines/2009-08-30_sansan-hanahana-30.md`

machine record commit:
- `b2e7a3075a4416362eb9a3008f12f97fd6f2284a`

要点:
- manufacturer: **パイオニア**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2009-08-30（納品開始予定日）**。2009-07-31グリーンべるとが8月30日納品予定、パイオニア公式は2009年08月発売。全国ホール稼働開始の別具体日を確定できないため定義を明記。
- generation: **5号機**
- systemType: **ノーマル / 完全告知 / 30Φ / BB+RB**
- BIG **1/306 → 1/244**、REG **1/496 → 1/364**、合算 **1/189 → 1/146**。
- 機械割（メーカー発表値） **95 / 98 / 100 / 103 / 106 / 110%**。P-WORLD、当時パチマガ、回顧資料で一致。
- 1000円あたりのゲーム数は当時業界記事で **約37G**。設定別ベース表は多段再探索後も未確定のため単一値を全設定へ展開しない。
- BIG平均約**312枚**、REG平均約**130枚**。
- P-WORLDは「ボーナスのみの仕様」と明記。RT/ART/AT/CZ非搭載の純正ノーマル。
- `coreStatus=COMPLETE_CORE_WITH_FORMAL_MODEL_AND_INSPECTION_UNVERIFIED_RELEASE_DATE_IS_DELIVERY_START`。

### v0.7 resetBehavior — サンサンハナハナ-30

- 通常ゲーム数天井、周期CZ、ゲーム数解除、RT/ART/AT/CZ、ゲーム数管理モード、朝一専用モードは確認されない。
- `gameCounterReset=NOT_APPLICABLE_NO_CEILING_OR_GAME_COUNT_SYSTEM_CONFIRMED`。
- `ceilingAfterReset=NOT_APPLICABLE_NO_CEILING_CONFIRMED`。
- `modeAfterReset=NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED`。
- `stateAfterReset=NOT_APPLICABLE_FOR_RT_ART_AT_CZ_STATE / OTHER_INTERNAL_START_STATE_UNVERIFIED`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- 設定変更固有の短縮天井、朝一モード優遇、CZ/初当たり優遇、公開朝一当選率/恩恵率は多段再探索後も確認なし。
- 一方、設定変更時・単純電源OFF→ON時の**リール初期位置、ハイビスカス/サイドランプ、ガックン、初期出目等の本機固有ハード起動挙動**は、機種名/略称/メーカー名と検索語を組み替え、公式、2009年業界記事、P-WORLD、K-Navi、当時パチマガ、旧DB、回顧資料を横断しても直接確証を取れず `UNVERIFIED_AFTER_RESEARCH`。
- 6号機AT `スーパーハナハナ` 等のリセット解析は別世代・別システムなので流用しない。
- 公開朝一数値は `NONE_CONFIRMED`。

## 402. イケイケめんそーれ-30（直前）

record:
- `docs/real_machine_db/machines/2009-08-24_ikeike-mensore-30.md`

machine record commit:
- `9e5bdf1898752bcc0b638ba4341ba87d4e19954c`

- 純正ノーマル/30Φ、天井・RT/ART・ゲーム数モード非搭載。
- 設定変更/電断ハード挙動は本機固有資料未確認部分を分離済み。
- 機械割は三系列CONFLICTを平均せず保持。

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
1. **403件地点 / サンサンハナハナ-30まで完了**から再開。
2. **2009-08-30同日群を最終監査**。メーカー別一覧/K-Navi/当時導入・納品一覧で、サンサンハナハナ-30より先に処理すべき同日未登録機がないか確認する。
3. 同日群を閉じたら **2009-08-31〜2009-09-06** を境界監査する。今回の一般検索では8月31日固有の安全な未登録機を確定できていないため、次担当は表記/型式/メーカー別一覧を変えて再監査してから9月へ進む。
4. その後は **2009年9月本線**を導入/納品日の古い順に継続する。後年記事やパチンコ機を混入させない。
5. `サンサンハナハナ-30` は2009-08-30を「全国ホール導入日」と断定せず、当時業界記事の「納品開始予定日」として登録済み。別の具体的ホール稼働開始日が後続QAで取れた場合のみ更新する。

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

- 403 サンサンハナハナ-30: `docs/real_machine_db/machines/2009-08-30_sansan-hanahana-30.md`
- machine record commit: `b2e7a3075a4416362eb9a3008f12f97fd6f2284a`
- 本 `LATEST_HANDOFF.md` を403件地点へ更新。
