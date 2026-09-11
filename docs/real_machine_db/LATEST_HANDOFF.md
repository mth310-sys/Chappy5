更新日: 2026-09-11

## 現在地点
- recordCount: **1376**
- latestRecordAdded: **華祭 — No.1376**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-11-02_hanamatsuri.md`
- chronologicalFrontier: **2020-11-02**
- frontierLatestMachine: **華祭 — No.1376**
- schema: **resetBehavior v0.7**
- status: **2020-11-02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1374「パチスロ七つの大罪」を再取得して開始。
- 開始時点でmainは過去会話のNo.1370ではなく **No.1374** まで並行更新済みだったため、1371～1374を重複登録せず最新handoffを正本として引継いだ。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを優先。
- 2020-11-02群の残り2機、No.1375「パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド」とNo.1376「華祭」を追加。
- 1geki 2020年11月カレンダーは11/02のパチスロを4機と明記し、既存No.1373/1374と今回No.1375/1376の4機が一致。各機の業界記事・機種DBも導入帯を照合し、同日群をCLOSEDと判定。

## No.1375 — パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド
- path: `docs/real_machine_db/machines/2020-11-02_highschool-of-the-dead-gold.md`
- manufacturer: **セブンリーグ / 山佐系**
- formalModel: **SハイスクールオブザデッドゴールドSLFF**
- certificationNumber: **0S0269**
- releaseDate canonical: **2020-11-02**
- releaseDate conflict: **2020-11-09**表記もあり、平均化せずCONFLICT保持。
- generation/system: **6.1号機 / 規定ゲーム数CZ / 高純増AT / 有利区間管理**
- 出玉率: **97.3 / 98.3 / 100.3 / 102.7 / 105.4 / 110.0%**
- CZ: **1/501.3 / 1/456.3 / 1/459.2 / 1/422.5 / 1/414.0 / 1/385.3**
- base: **約52.2G/50枚**
- netIncrease: **約8.7枚/G**
- AT: **初期40～300G**
- 天井: **有利区間移行後最大765GでCZ「黙示録CHANCE」**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_LIMITED_UNVERIFIED_FIELDS**

### resetBehavior v0.7 — No.1375
- 設定変更: **天井RESET / 内部状態RESET / 有利区間RESET**。
- 据え置き・純電源OFF→ON: **天井CARRY_OVER / 内部状態CARRY_OVER / 有利区間CARRY_OVER**。
- 通常時から有利区間ランプ点灯型。朝一 **消灯=設定変更濃厚 / 点灯=据え置き濃厚**。ランプ位置はクレジット右下ドット。
- 設定変更専用短縮天井、専用モード振り分け、専用朝一当選率、本機固有ガックン条件は十分な再探索後も直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間引継ぎ状態に期待値上の強い価値があるとする後発解析があり、リセットが常に客側恩恵になる機種ではない。

## No.1376 — 華祭
- path: `docs/real_machine_db/machines/2020-11-02_hanamatsuri.md`
- manufacturer: **パイオニア**
- formalModel: **SハナマツリSP**
- releaseDate: **2020-11-02**
- generation/system: **6号機 / 擬似ボーナスAT / 完全告知 / 完全レバー抽選 / ハイブリッドAタイプ**
- 出玉率: **97.7 / 99.0 / 101.2 / 103.8 / 105.5 / 108.0%**
- BIG: **1/316.4 → 1/214.7**
- REG: **1/458.9 → 1/368.3**
- 合算: **1/187.3 → 1/135.3**
- base: **約50.8G/50枚**
- netIncrease: **約4.0枚/G**
- basicPayout: **BIG 40G約160枚 / REG 15G約60枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_WITH_NO_NORMAL_CEILING**

### resetBehavior v0.7 — No.1376
- 業界発表で **CZ・ゲーム数解除・通常ゲーム数天井なし、完全レバー抽選**を固定。
- よって朝一の天井短縮/ゲーム数リセット狙いは `NOT_APPLICABLE`。
- 当時1gekiの設定変更/電断欄は「天井G数・状態とも調査中」。後発資料・型式名・メーカー・シリーズ名・設定変更/朝一/据え置き/電断/有利区間/ガックン等で再探索したが、本機固有の内部状態・有利区間・1G連ストックのRESET/CARRY契約は直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 後継2024年「超華祭」のreset仕様は本機へ転用していない。
- 公開された設定変更専用朝一数値、短縮天井、CZ優遇、専用モード振り分けは確認できず。

## conflicts / 定義差
### No.1375
- releaseDate: **2020-11-02 vs 2020-11-09**。複数カレンダー/解析の11/02をcanonical、11/09表記をCONFLICT保持。
- base: 約52.2G / 約52Gの丸め差。
- AT突入時期待枚数（設定1）: 約810枚 / 約812枚表記。平均化せず補助情報として保持。

### No.1376
- 導入台数: 約1,000台 / 約2,000台の資料差。市場実績は現ミッション必須外のためコアへ採用しない。
- 一部資料の `AT?` 表記に対し、業界記事/P-WORLD等は純増約4.0枚/GのAT擬似ボーナス機として説明。本DBでは6号機ATをcanonical。

## 2020-11-02群監査 — CLOSED
処理済み4機:
1. **～ガールズケイリン～GⅠフェアリーグランプリ — No.1373**
2. **パチスロ七つの大罪 — No.1374**
3. **パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド — No.1375**
4. **華祭 — No.1376**

- 1geki月間カレンダーの11/02「スロット4機」と一致。
- 各機の業界記事/機種DB/検定情報を横断し、既知の別型式・別スペック・PB・同日追加機は今回確認されず。
- status: `2020-11-02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`

## 次回本線の再開地点
- 最新main再同期後、**2020-11-03～11-08境界監査**。
- 次の既知未処理は **2020-11-09「アカメが斬る！」— No.1377候補**。
- 11/09群処理後、次の既知は **2020-11-16「パチスロ モンスターハンター:ワールド™」**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04-01_slot-channel-tv.md`（スロットチャンネルTV）**。
- 今回は本線を優先し、遡及QA地点は進めていない。

## GitHub保存
- No.1375追加 commit: `0fd70438511c97d0fd988f8eb3db90bd42f0ab9a`
- No.1376追加 commit: `c75d273e95135309235816164d6a7cff6b2f665e`

## 主要出典 — 取得日 2026-09-11
### No.1375 HOTDゴールド
- https://1geki.jp/slot/s_hotd_g/3/
- https://slotjin.com/tenjoukitaichi/hotdgold/
- https://www.slopachi-quest.com/article/gakuenhotd-tennjou/
- https://slot-seven.com/hotdgold-tenzyou/
- https://slot-seven.com/hotdgold-settei/
- https://chonborista.com/slot/yamasa-slot/119901/
- https://www.p-world.co.jp/machine/database/9251
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/236/at01-4.php
- https://p-town.dmm.com/free_pages/7285
- https://pachinavi.net/machines/hotd-gold/

### No.1376 華祭
- https://1geki.jp/slot/s_hanamatsuri/
- https://1geki.jp/slot/s_hanamatsuri/3/
- https://pidea.jp/articles/1600841828
- https://amusement-japan.co.jp/article/detail/10001935/
- https://web-greenbelt.jp/post-41364/
- https://www.p-world.co.jp/machine/database/9254
- https://www.slopachi-quest.com/article/hana-matsuri/
- https://chonborista.com/slot/pionia-slot/120017/
- https://pachinko-curation.com/17564/
- https://p-media.info/post-25260/

### 11/02群・次回境界
- https://1geki.jp/newmachinecalender/202011/
