更新日: 2026-09-13

## 現在地点
- recordCount: **1573**
- latestRecordAdded: **パチスロナイツ — No.1573**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-07-03_pachislot-nights.md`
- chronologicalFrontier: **2023-07-03**
- frontierLatestMachine: **パチスロナイツ — No.1573**
- schema: **resetBehavior v0.7**
- status: **2023-07-03_GROUP_OPEN_1_OF_4_CANONICAL_PROCESSED / NEXT_NO1574_JABAMI_YUMEKO**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1572 `SOZ1-AA-30` を確認して開始。
- INDEXは旧表示（19件）のためREADME規定どおり、LATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-07-03群を当時新台集計・個別導入資料で監査し、canonical 4機を固定。
- 同日群の先頭として No.1573 `パチスロナイツ` を性能コア + resetBehavior v0.7で追加。
- 欠損項目は機種名 / 正式型式 / メーカー名 / シリーズ名と、設定変更・リセット・朝一・据え置き・電源OFF ON・天井・ハイパーゾーン・ガックン・有利区間を組み替え、公的検定・メーカー/業界記事・当時解析・旧DB/回顧資料を横断して再探索。

## No.1573 — パチスロナイツ
- path: `docs/real_machine_db/machines/2023-07-03_pachislot-nights.md`
- manufacturer: **山佐ネクスト**
- formalModel: **SナイツYTCC**
- inspectionCode: **2S1313**
- releaseDate: **2023-07-03**
- generation/system: **6.5号機 / メダル / AT擬似ノーマル / 擬似ボーナス / 技術介入**
- payoutRate market: **98.9 / 100.0 / 101.6 / 104.0 / 107.0 / 110.5%**（設定1～6）
- payoutRate fullStrategy: **100.5 / 101.6 / 103.2 / 105.6 / 108.6 / 112.1%**
- HBB: **1/296.4 → 1/231.7**
- challengeBB: **1/409.8 → 1/355.5**
- combined: **1/172.0 → 1/140.3**
- base: **約32.7G/50枚**
- HBB純増: **約8.7枚/G**
- basic: **HBB平均約350枚 / チャレンジBB平均約151枚**
- ceiling/rescue: **1000G到達で強制当選ではなく、通常時1000G消化以降の次回ボーナスがHBB確定**。
- reset: 設定変更 / 据え置き / 純電源OFF→ONごとの1000G救済カウンタ、ハイパーゾーン、内部状態、有利区間、本機固有ガックンを直接固定できる公開資料は十分な再探索後も未確認。朝一解析ページも設定変更/電源OFF→ONの天井・内部状態・ステージ、有利区間を「調査中」としているため一般論で補完せず `UNVERIFIED_AFTER_RESEARCH / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。設定変更専用の公開朝一数値・短縮値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **PARTIAL_RESEARCH_EXHAUSTED**

## 2023-07-03群 — OPEN 1/4 canonical processed
1. パチスロナイツ — No.1573 **DONE**
2. パチスロ 蛇喰夢子という女 — **NEXT / No.1574候補**
3. ゴーゴージャグラー3 — **QUEUED**
4. パチスロ からくりサーカス — **QUEUED**

### 群監査
- パチマガスロマガの2023-07-10新台集計が「7月3日導入の4機種」として `パチスロナイツ / パチスロ 蛇喰夢子という女 / ゴーゴージャグラー3 / パチスロ からくりサーカス` を列挙。
- 各機の個別導入資料でも2023-07-03を確認。
- 群は残り3機処理後にPB・別型式・地域先行・延期を再監査してCLOSED判定する。

## 次回再開地点
- **No.1574候補: パチスロ 蛇喰夢子という女**
- 同じ2023-07-03群を順番に継続し、その後 `ゴーゴージャグラー3` → `パチスロ からくりサーカス`。
- 4機処理後、当日群の漏れ監査を行いCLOSED判定へ進む。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8・6/5系の事前スケジュール表記 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。
- `Lパチスロベルセルク無双`: 6/5複数導入・稼働資料 vs Amusement Japan 6/19予定表記。**6/5 canonical / 6/19 conflict保持**。
- `ウルトラちゃぶ台返し`: 設定3初当り **1/231.2（ベルコ公式・なな徹） vs 1/234.2（G-net）**。平均せず保持。
- `パチスロナイツ`: 設定2ボーナス合算 **1/167.1 vs 1/167.2** の丸め差。複数当時資料一致の1/167.1をcanonical。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次 / 当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### 2023-07-03群
- パチマガスロマガ 7月3日導入4機種集計: https://p.hisshobon.jp/vpage/2499/33

### No.1573 パチスロナイツ
- 遊技通信 東京都公安委員会検定通過: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%885%E6%9C%8815%E6%97%A5%EF%BC%89/
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/24679/nippon
- 遊技通信 / P-WORLD: https://news.p-world.co.jp/articles/24663/yugitsushin
- パチビー: https://www.pachibee.jp/machines/index/223060000
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/12/kh02.php
- 一撃: https://1geki.jp/slot/s_pachisuro_nights/5/
- HAZUSE: https://hazuse.com/machine/pachislot/2S1313/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/188783/
- 必勝本: https://p.hisshobon.jp/vpage/2553/4
