更新日: 2026-09-11

## 現在地点
- recordCount: **1348**
- latestRecordAdded: **スナイパイ71 — No.1348**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-04-06_snipai71.md`
- chronologicalFrontier: **2020-04-06**
- frontierLatestMachine: **スナイパイ71 — No.1348**
- schema: **resetBehavior v0.7**
- status: **2020-04-06_GROUP_OPEN_1_OF_2_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正とした。
- 開始直後にmainへNo.1347「新鬼武者～DAWN OF DREAMS～」が並行反映されたため、重複作成せず最新mainを再取得して正本として引き継いだ。
- 2020-04-06群を再監査し、最初の未処理 **スナイパイ71** をNo.1348として追加。
- 次の未処理候補は同日群の **パチスロ 咲-Saki-**。

## No.1348 — スナイパイ71
- path: `docs/real_machine_db/machines/2020-04-06_snipai71.md`
- manufacturer: **ネット**
- formalModel: **Sスナイパイ71CC**
- certificationNumber: **9S1644**
- releaseDate canonical: **2020-04-06**
- generation/system: **6号機 / 技術介入型AT / 疑似ボーナス+差枚数管理AT**
- marketPayoutRate: **98.0 / 98.3 / 101.6 / 102.7 / 107.1 / 106.7%**
- fullStrategyPayoutRate: **102.0 / 104.1 / 104.7 / 107.4 / 109.3 / 110.1%**
- AmyBattleInitialHit: **1/453 / 433 / 389 / 308 / 277 / 254**
- ATInitialHit: **1/416 / 382 / 346 / 276 / 222 / 203**
- combinedInitialHit: **1/217 / 203 / 183 / 146 / 123 / 113**
- base: **約43.2G/50枚**
- netIncrease: **約2.8枚/G**
- basicPayout: **アミヤバトル20G / AT初期100枚+α**
- gameCeiling: **有利区間移行後710G → AT+OPT**
- coinCeiling: **最大71枚 → アミヤバトル**
- coreStatus: **COMPLETE_CORE**
- overallReliability: **ANALYSIS_HIGH_WITH_INDUSTRY_AND_MANUFACTURER_CONFIRMATION**

### resetBehavior v0.7 — No.1348
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- **設定変更=天井RESET / 内部状態RESET / 有利区間RESET / 非有利区間開始**。
- **据え置き・電源OFF→ON=天井 / 内部状態 / 有利区間CARRY_OVER**。
- 朝一開始ステージはスコープモード。
- 通常時から有利区間ランプ点灯タイプ。**朝一点灯=据え置き濃厚 / 消灯=リセット濃厚**。
- 有利区間移行時 **CZ抽選4.7%**。
- 有利区間移行時アイテム **100%獲得 / 平均約1.9個**。
- 有利区間移行後1G目の一部でOPT抽選。固定率は未取得。
- AT内部モード（通常/スナイプ/バズーカ）は有利区間移行時に抽選。設定1 99.4/0.5/0.1% → 設定6 97.6/2.3/0.1%。設定変更専用ではなく有利区間移行時共通値として分離保存。
- リセット専用短縮天井は確認されず、攻略資料も「リセット狙い目なし（ボーナス/AT終了後と同じ状態）」と整理。
- 本機固有ガックン条件/率は検索語・資料系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1348 data-quality notes
- 技術介入機のため機械割は通常側と完全攻略時を混ぜずに分離保存。
- 初期導入予定資料に2020-03-16表記が残るが、正式導入時のHAZUSE、1geki、当時実戦記事、修正済み解析が2020-04-06で一致するためcanonicalは4/6。
- coreStatus: **COMPLETE_CORE**。

## 2020-04-06群監査
- 1. スナイパイ71 — **No.1348 / 処理済み**
- 2. パチスロ 咲-Saki- — **未処理 / No.1349候補**
- 当時導入直前情報・4月導入一覧で上記2機を確認。
- 群判定: **OPEN_1_OF_2_CONFIRMED_CANDIDATES_PROCESSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次の未formalized候補は `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan4.md`（やったネ！はるみちゃん4）。
- その次は `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 既存COMPLETE_COREは崩さずreset側のみv0.7で正式化する。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1348を再取得。
2. **2020-04-06群の未処理「パチスロ 咲-Saki-」をNo.1349候補として処理する。**
3. 処理後、4/6同日全メーカー・別型式・別スペック・PB・地域差まで再監査しCLOSED可否を判定する。
4. 次の導入群を時系列で特定して本線継続。
5. 遡及QAは `2007-04-15_yattane-harumi-chan4.md` から継続。

## 主要出典 — 取得日 2026-09-11
### No.1348
- HAZUSE: https://hazuse.com/machine/pachislot/9S1644/
- 1geki: https://1geki.jp/slot/s_snipai71/
- スロナビ東京: https://noslotnolife.com/45313
- ちょんぼりすた: https://chonborista.com/slot/net-slot/104121/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/snipai71/
- スロパチクエスト: https://www.slopachi-quest.com/article/snipai71-tennjou/
- ネット株式会社プレスリリース（DreamNews）: https://www.dreamnews.jp/index.php/press/0000208744
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/12808/yugitsushin
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/12703/greenbelt

### 次導入群監査
- 当時4/6導入直前情報: https://pachi-jyouhoukyoku.hatenablog.com/entry/2020/04/06/190000
- ALL7 2020年4月導入一覧: https://www.all7.jp/plans/index/2020/04
