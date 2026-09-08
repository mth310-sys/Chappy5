更新日: 2026-09-09

## 現在地点
- recordCount: **1038**
- latestRecordAdded: **シスタークエスト～時の魔術師と悠久の姉妹～**（ハイライツ・エンタテインメント / P-WORLD掲載メーカー: アイゲート）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-01-10_sister-quest-toki-no-majutsushi.md`
- chronologicalFrontier: **2017-01-10**
- frontierLatestMachine: **シスタークエスト～時の魔術師と悠久の姉妹～ — No.1038**
- schema: **resetBehavior v0.7**
- status: **2017-01-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2017-01-04_TO_2017-01-08_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2017-01-09_TO_10_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1037実レコードを再取得して開始。
- main正本は **1037件 / chronologicalFrontier 2017-01-10 / 1/09〜10群OPEN**。旧INDEXの19件表示は進捗正本にせず、README規定どおりより新しい `LATEST_HANDOFF.md` と実レコードを優先した。
- handoff指定の次機種 **シスタークエスト～時の魔術師と悠久の姉妹～** をNo.1038として登録。
- releaseDateはドラス/Apple実機シミュレーター説明が **2017-01-10** を直接明記し、パチビー・ちょんぼりすたとも一致。
- 1/10同日群を導入カレンダー/解析資料で監査し、未処理の **EXCITE「パチスロZETMAN」** が2017-01-10導入として複数資料で固定できるため群はOPENのまま。モンスターハンター狂竜戦線・シスタークエストは登録済みなので重複追加しない。

## No.1038 — シスタークエスト～時の魔術師と悠久の姉妹～
- manufacturer canonical display: **ハイライツ・エンタテインメント**
- P-WORLD manufacturer label: **アイゲート**
- releaseDate: **2017-01-10**
- formalModelName: **シスタークエスト／HA**
- certificationNumber: **6S0941**
- generation/system: **5号機 / 5.5号機期 / A+ART / リアルボーナス+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_PAYOUT_ROUNDING_CONFLICT**

### performanceCore
- 機械割: **97.5 / 98.8 / 100.0 / 103.5 / 105.5 / 109.3〜109.4%**。設定6のみ二次資料で109.3/109.4の丸め差をCONFLICT保持。
- ボーナス合算: **1/258.0 / 256.0 / 252.1 / 248.2 / 244.5 / 237.4**。
- ART初当たり: **1/531.0 / 498.8 / 474.8 / 404.0 / 371.7 / 239.9**。
- baseGamesPer50: **約31.64〜32G/50枚**。精密値と丸め値を平均せずレンジ保持。
- ART「冒険RUSH」純増: **約1.4枚/G（ボーナス非込）**。解析上のボーナス込み実質約2.0枚/Gは定義分離。
- BIG/十勇士伝説: **204枚**、REG「錬金チャンス」: **54枚**。
- ART: **1セット40G or 100G + 継続バトル4G**。
- 天井: **ボーナス間999GでART**。ARTを挟んでもボーナス間天井はリセットされない。

### resetBehavior v0.7
- settingChangeBehavior: **ボーナス間999G天井RESET / 内部状態RESELECT / RT状態RESET / 帝国街道開始**。
- powerCycleBehavior: **天井・内部状態・RT状態CARRYOVER / 帝国街道開始**。
- carryOverBehavior: 据え置きは継続側として扱う攻略文脈だが、本機固有の独立した「据え置き」比較表は今回直接固定できず **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH** を付記。
- ceilingAfterReset: 設定変更専用固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 通常A/B等の設定変更専用モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: **全設定共通50.0%で高確スタート**。純電源OFF→ONは内部状態引継ぎ。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: 設定変更/純電断とも帝国街道開始のためステージ単独判別不可。高確挙動は変更期待を上げるが確定ではない。本機固有の確定ガックン/初期出目/ランプ契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### public reset numeric data
- 設定変更後高確移行率: **50.0%（全設定共通）**。
- 比較値: ストーリーボーナス後 **25.0%**、錬金チャンス後 **100%**、ART終了後 **18.75〜19.0%**。
- 通常天井: **ボーナス間999G**。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## data quality
- 導入日: ドラス/Apple公式アプリ文、パチビー、ちょんぼりすたで2017-01-10一致。
- 型式/検定: P-WORLDで「シスタークエスト／HA」「6S0941」を確認。
- 性能コア: P-WORLD、ちょんぼりすた、期待値見える化、パチ＆スロ必勝本を横断。
- resetBehavior: ちょんぼりすた/期待値見える化の設定変更 vs 電源OFF→ON直接比較表と、必勝本/すろぱちくえすとの設定変更後高確50%を照合。
- 設定6機械割109.3/109.4は平均せず `CONFLICT_SETTING6_PAYOUT_ROUNDING_109_3_VS_109_4`。
- P-WORLDのメーカー欄「アイゲート」と製品展開主体「ハイライツ・エンタテインメント」は役割差として併記し、数値CONFLICT扱いにはしていない。

## 境界監査
- **2017-01-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2017-01-04_TO_2017-01-08_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- **2017-01-09_TO_10_GROUP_OPEN**。
- 2017-01-10未処理強候補: **EXCITE「パチスロZETMAN」**。ちょんぼりすた、2017新台カレンダー、2-9伝説で1/10一致。
- ZETMAN処理後に1/09〜10群を全メーカー横断再監査し、漏れがなければCLOSED。次の強い日付境界は **2017-01-16「パチスロ エウレカセブンAO」**。
- chronologicalFrontier: **2017-01-10**。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1038を再取得。
2. **1038件 / chronologicalFrontier 2017-01-10 / 1/09〜10群OPEN** を正本として継続。
3. 次の未処理機種は **EXCITE「パチスロZETMAN」** をNo.1039候補として処理。
4. 性能コア＋resetBehavior v0.7を同時収集。天井、設定変更/据え置き/純電断、状態、朝一数値、ガックン等を検索語・資料系統を変えて再探索する。
5. ZETMAN登録後、2017-01-09〜10群を全メーカー横断監査。未登録がなければCLOSED。
6. その後1/11〜1/15境界を監査し、漏れがなければ2017-01-16群へ進む。強候補は **サミー「パチスロ エウレカセブンAO」**。
7. 既登録のモンスターハンター狂竜戦線、弱虫ペダル、シスタークエストを重複追加しない。

## 主要出典 — 取得日 2026-09-09
### No.1038 シスタークエスト
- Apple / ドラス実機シミュレーター: https://apps.apple.com/jp/app/%E6%BF%80j%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B7%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88-%E6%99%82%E3%81%AE%E9%AD%94%E8%A1%93%E5%B8%AB%E3%81%A8%E6%82%A0%E4%B9%85%E3%81%AE%E5%A7%89%E5%A6%B9/id1147076453
- ドラス press: https://www.value-press.com/pressrelease/176619
- パチビー: https://www.pachibee.jp/machines/about/216110008
- P-WORLD: https://www.p-world.co.jp/machine/database/8211/
- ちょんぼりすた: https://chonborista.com/slot/high-enter/28232/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/sister-quest4/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2871/1/61614
- すろぱちくえすと設定判別: https://www.slopachi-quest.com/article/sister-quest4-settei/
- P-WORLD/グリーンべると新パネル記事: https://news.p-world.co.jp/articles/9067/greenbelt

### 次回候補 ZETMAN
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/28706/
- 2017新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
- 2-9伝説カレンダー: https://29den.com/newslot/
