更新日: 2026-09-12

## 現在地点
- recordCount: **1475**
- latestRecordAdded: **HYPER A-30 BLUE FALCON — No.1475**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-25_hyper-a30-blue-falcon.md`
- chronologicalFrontier: **2022-01-25**
- frontierLatestMachine: **HYPER A-30 BLUE FALCON — No.1475**
- schema: **resetBehavior v0.7**
- status: **2022-01-25_PB_GROUP_CLOSED_1_OF_1_KNOWN_INDEPENDENT_RECORD_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1474「来雷エイサーEX-30」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機、玉越PB限定機 `HYPER A-30 BLUE FALCON` をNo.1475へ追加。
- 玉越発表・遊技日本・アミューズメントジャパン・遊技通信・グリーンべると・P-WORLD・1geki等を横断。正式型式 `SブルーファルコンDA-30`、DAXEL製造、玉越PB、GOLD玉越8店舗で2022-01-25稼働開始を確認。
- P-WORLDメタデータで検定番号 `1S1372`、6.2号機、30Φノーマル機を確認。
- 性能コアは設定1〜6の完全攻略時機械割97.0/98.5/100.0/103.0/106.0/109.0%、BIG 1/282.5〜1/237.4、REG 1/425.6〜1/237.4、合算1/169.8〜1/118.7、ベース39.8〜40.5G/50枚、BIG最大259枚/REG最大103枚を保存。
- 玉越発表系では出玉率端数付きレンジ97.02〜109.02%を確認。中間設定の端数値は固定できないため複数解析一致の完全攻略時丸め値を主テーブルに採用し、定義を明記。
- 純ノーマル機で天井非搭載。設定変更時の短縮天井、AT/CZモード、有利区間天井は `NOT_APPLICABLE`。
- 設定変更/据え置き/純電源OFF→ON時の成立済みボーナスフラグ・告知状態、本機固有ガックン、変更専用表示/ランプ、公開朝一当選数値は、商品名・型式・DAXEL・玉越・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間で再探索したが機種固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- REG最大獲得は103枚がP-WORLD・遊技通信・1gekiで一致する一方、一部記事に104枚表記があるため平均せずCONFLICT。104枚超払い出し終了と最大獲得枚数を区別した。
- 告知割合はP-WORLD・グリーンべると・1gekiが先告知85%/後告知15%で一致。プレイグラフ記事のみ逆表記のためCONFLICT保持。
- 稼働日は玉越発表・複数業界記事が2022-01-25で一致する一方、P-WORLDメタデータに2022-01-24表記がある。PB実店舗の稼働開始日2022-01-25を時系列基準として採用し、日付差をCONFLICT保持。
- 2022-01-25は現時点で本PB限定機1件を独立レコードとして確認。次の全国導入境界は2022-01-31「押忍！番長ZERO」を一次系記事で先行確認。
- 遡及resetBehavior QAは本線を優先し、前回カーソルを維持。

## No.1475 — HYPER A-30 BLUE FALCON
- path: `docs/real_machine_db/machines/2022-01-25_hyper-a30-blue-falcon.md`
- manufacturer: **DAXEL / 玉越PB**
- formalModel: **SブルーファルコンDA-30**
- inspectionCode: **1S1372**
- releaseDate: **2022-01-25**
- generation/system: **6.2号機 / ノーマル / 完全告知 / 30Φ / 技術介入 / PB限定**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRateCompletePlay: **97.0 / 98.5 / 100.0 / 103.0 / 106.0 / 109.0%**
- BIG: **1/282.5 / 1/276.5 / 1/271.9 / 1/258.0 / 1/246.4 / 1/237.4**
- REG: **1/425.6 / 1/383.3 / 1/346.8 / 1/303.4 / 1/267.5 / 1/237.4**
- bonusCombined: **1/169.8 / 1/160.6 / 1/152.4 / 1/139.4 / 1/128.3 / 1/118.7**
- baseGamesPer50: **39.8 / 39.9 / 40.0 / 40.1 / 40.2 / 40.5G**
- basicPayout: **BIG最大259枚 / REG最大103枚**
- normalCeiling: **NONE**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_MEDIUM_RESET_WITH_MACHINE_SPECIFIC_POWER_CYCLE_AND_DETECTION_UNVERIFIED**

### resetBehavior v0.7 — No.1475
- **設定変更**: 天井非搭載、AT/CZモード・有利区間天井は `NOT_APPLICABLE`。成立済みボーナス/告知状態の機種固有クリア契約は `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 天井非搭載。成立済みボーナス/告知状態の保持契約は `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: 天井非搭載。成立済みボーナス/告知状態の保持/初期化契約は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 天井機能非搭載、リセット短縮天井なし。
- **モード/状態**: AT/ART/CZ・天井モードは非該当。
- **有利区間**: 純ノーマル機のため朝一狙いに用いる有利区間進行/天井は `NOT_APPLICABLE_FOR_YARDSTICK`。
- **朝一恩恵/不利**: 公開された設定変更専用の主要恩恵/不利は確認できず。
- **変更判別**: 本機固有ガックン、変更専用表示/ランプは `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## 次回本線の再開地点
- **2022-01-26〜01-30境界を最終監査後、No.1476候補「押忍！番長ZERO」— 2022-01-31。**
- 型式 `S押忍!番長ZERO PC1`、製造元パオン・ディーピー、大都技研系。遊技日本で全国ホール導入2022-01-31を先行確認済み。
- 1/31同日群に他の独立機種・PB・30Φ別型式・地域先行がないか新台カレンダー/業界記事/メーカー別一覧で横断してから群をCLOSED判定する。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線を優先し新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1475追加 commit: `17dcf1021a69d67c98643ea2a3f88cd3c9108279`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1475 HYPER A-30 BLUE FALCON
- https://news.p-world.co.jp/articles/19129/nippon
- https://amusement-japan.co.jp/article/detail/10002607/
- https://news.p-world.co.jp/articles/19158/yugitsushin
- https://news.p-world.co.jp/articles/19132/playgraph
- https://web-greenbelt.jp/post-54549/
- https://www.p-world.co.jp/machine/database/9560
- https://1geki.jp/slot/s_hyper_a_30/
- https://1geki.jp/slot/s_hyper_a_30/1/
- https://1geki.jp/slot/s_hyper_a_30/4/
- https://www.dechau.com/machine/single.php?area=&id=736
- https://news.p-world.co.jp/articles/18759/nippon

### 次回候補 No.1476 押忍！番長ZERO
- https://news.p-world.co.jp/articles/19366/nippon
