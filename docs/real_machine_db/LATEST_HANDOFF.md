更新日: 2026-09-13

## 現在地点
- recordCount: **1577**
- latestRecordAdded: **S 織田信奈の野望 全国版 — No.1577**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-07-18_oda-nobuna-zenkokuban.md`
- chronologicalFrontier: **2023-07-18**
- frontierLatestMachine: **S 織田信奈の野望 全国版 — No.1577**
- schema: **resetBehavior v0.7**
- status: **2023-07-18_GROUP_OPEN_1_OF_2_KNOWN_PROCESSED / NEXT_NO1578_SENGOKU_KOIHIME_2023-07-18**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1576 `パチスロ からくりサーカス` を確認して開始。
- INDEXは旧表示（19件）のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-07-18群の1機目として No.1577 `S 織田信奈の野望 全国版` を性能コア + resetBehavior v0.7で追加。
- 欠損は機種名表記揺れ、正式型式 `S織田信奈の野望 全国版TA`、新日テクノロジー/SPIKY/フィールズと `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 高確 / 忠誠度 / 合戦の刻 / ガックン / 有利区間` を組み替え、公式・業界・検定・当時解析・後年整理資料を横断。
- 検定番号、本機固有ガックン、設定変更時CZシナリオ完全振り分け、純電断時の表示/開始ステージ契約は十分な再探索後も固定できず、推測補完していない。

## No.1577 — S 織田信奈の野望 全国版
- path: `docs/real_machine_db/machines/2023-07-18_oda-nobuna-zenkokuban.md`
- manufacturer: **新日テクノロジー**（総発売元フィールズ / SPIKYブランド表記あり）
- formalModel: **S織田信奈の野望 全国版TA**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2023-07-18**
- generation/system: **6.5号機 / メダルAT / 差枚数管理 / 上位AT搭載**
- payoutRate: **97.7 / 99.0 / 102.5 / 105.1 / 110.3%**（設定1/2/4/5/6）
- CZ「合戦の刻」: **1/179.0 / 1/167.7 / 1/147.4 / 1/138.0 / 1/115.6**
- AT「姫武将RUSH」: **1/280.6 / 1/264.8 / 1/227.3 / 1/205.3 / 1/158.4**
- base: **約33G/50枚**（約33.6G表記もあり。丸め/算出差として保持）
- netIncrease: **約2.5枚/G**
- upper AT: `極上嫁武将RUSH`。業界発表の出玉期待値は設定1約1,250枚。
- ceiling: 通常最大 **999G+α**。CZ「合戦の刻」は最大3スルー後の4回目が勝利濃厚。
- reset: **設定変更 = 有利区間 / 天井 / CZスルー進行 / 内部状態RESET**、**据え置き・純電断 = CARRY_OVER**。
- reset benefits: 初期忠誠度レベル2以上 **50.0%**、高確スタート **25%**、初回CZ当選時「武田信玄襲来」 **約10%**、3回目までに勝利濃厚となるCZシナリオ選択率優遇。
- first strategic meeting CZ rate after reset/AT-end: **60.5 / 60.5 / 65.6 / 66.8 / 75.0%**（設定1/2/4/5/6）。設定変更専用値ではなくAT終了後初回も共通。
- ceilingAfterReset: **固定ゲーム数短縮なし**。朝一は忠誠度・高確・CZ関連抽選の優遇で実質的早当たり期待が上がる。
- resetDetection: 有利区間ランプ判別不可。本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## 2023-07-18群 — OPEN 1/2 known processed
1. S 織田信奈の野望 全国版 — No.1577 **DONE**
2. パチスロ 戦国†恋姫 — **NEXT / No.1578候補**

### 群境界
- `S 織田信奈の野望 全国版` はパチ＆スロ必勝本、ちょんぼりすた、複数解析で **2023-07-18**導入が一致。
- `パチスロ 戦国†恋姫` も2023-07-18導入資料を確認済み。
- 2機目処理後に7/18群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED可否を判定する。

## 次回再開地点
- **No.1578候補: パチスロ 戦国†恋姫**
- canonical導入候補日: **2023-07-18**
- まず正式型式・メーカー/製造元・性能コア・resetBehavior v0.7を固定する。
- 処理後、2023-07-18群を漏れ監査してCLOSED可否を判定する。
- 次のknown境界: **2023-07-24 スマスロ バイオハザード:ヴェンデッタ**。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8・6/5系の事前スケジュール表記 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。
- `Lパチスロベルセルク無双`: 6/5複数導入・稼働資料 vs Amusement Japan 6/19予定表記。**6/5 canonical / 6/19 conflict保持**。
- `ウルトラちゃぶ台返し`: 設定3初当り **1/231.2（ベルコ公式・なな徹） vs 1/234.2（G-net）**。平均せず保持。
- `パチスロナイツ`: 設定2ボーナス合算 **1/167.1 vs 1/167.2** の丸め差。1/167.1をcanonical。
- `パチスロ 蛇喰夢子という女`: 設定変更後650G短縮は `PROVISIONAL_PUBLIC_VALUE` を維持。有利区間約2500G天井説はcanonical不採用。
- `パチスロ からくりサーカス`: 設定変更時の通常C優遇率は公開固定値未確認。
- `S 織田信奈の野望 全国版`: 一部検定記事の製造元「朝日テクノロジー」は、発売発表・複数業界資料の「新日テクノロジー」と競合するため誤記候補として保持。設定2相当スペックを設定3とする二次資料もあり、設定1/2/4/5/6をcanonical。ベース約33G vs 約33.6Gは丸め/算出差として両方保持。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次 / 当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### No.1577 S 織田信奈の野望 全国版
- 公式機種サイト: https://www.s-odanobuna.jp/
- Amusement Japan（製造元・発売）: https://amusement-japan.co.jp/article/detail/10003496/
- 遊技日本/P-WORLD（型式）: https://news.p-world.co.jp/articles/24090/nippon
- 遊技通信/P-WORLD（純増・上位AT・150G期待度）: https://news.p-world.co.jp/articles/24494/yugitsushin
- 遊技日本/P-WORLD（AT初当り・出玉率）: https://news.p-world.co.jp/articles/24701/nippon
- グリーンべると（検定通過型式）: https://web-greenbelt.jp/post-72363/
- パチ＆スロ必勝本（導入日・ベース・純増）: https://p.hisshobon.jp/vpage/2550/2
- なな徹（機種TOP）: https://nana-press.com/kaiseki/machine/582/
- なな徹（朝一・設定変更）: https://nana-press.com/kaiseki/machine/582/15867/
- なな徹（天井）: https://nana-press.com/kaiseki/machine/582/15865/
- 一撃（ベース）: https://1geki.jp/slot/s_odanobuna_zen/4/
- ちょんぼりすた（スペック/CZ/AT/導入日）: https://chonborista.com/slot/spiky/189031/
- スロパチクエスト（リセット/電源OFF→ON）: https://www.slopachi-quest.com/article/odanobuna-yabou-zenkokuban-tenjou/
