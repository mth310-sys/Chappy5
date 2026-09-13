更新日: 2026-09-13

## 現在地点
- recordCount: **1572**
- latestRecordAdded: **SOZ1-AA-30 — No.1572**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-06-19_soz1-aa-30.md`
- chronologicalFrontier: **2023-06-19**
- frontierLatestMachine: **SOZ1-AA-30 — No.1572**
- schema: **resetBehavior v0.7**
- status: **2023-06-19_GROUP_CLOSED_1_OF_1_CANONICAL_PROCESSED / NEXT_2023-07-03_GROUP_NO1573**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1568 `Lパチスロベルセルク無双` を確認して開始。
- INDEXは旧表示（19件）のためREADME規定どおり、LATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 既存性能値をやり直さず、handoff指定の次未処理から No.1569～1572 を性能コア + resetBehavior v0.7で追加。
- 欠損項目は機種名 / 正式型式 / メーカー名 / シリーズ名と、設定変更・リセット・朝一・据え置き・電源OFF ON・天井短縮・モード・ガックン・有利区間を組み替え、公的検定・メーカー/業界記事・当時解析・旧DB/回顧資料を横断して再探索。

## No.1569 — パチスロ コードギアス 反逆のルルーシュ3 C.C.&Kallen ver.
- path: `docs/real_machine_db/machines/2023-06-05_code-geass-3-cc-kallen-ver.md`
- manufacturer: **ロデオ製造 / サミーブランド・販売**
- formalModel: **S コードギアス3C.C. FS**
- inspectionCode: **2S1060**
- releaseDate: **2023-06-05**
- generation/system: **6.5号機 / メダル / A+AT / リアルボーナス+現状維持型GAT**
- payoutRate: **98.2 / 99.2 / 101.5 / 104.5 / 107.5 / 110.4%**（設定1～6）
- fullStrategyPayout: **100.1 / 101.1 / 103.6 / 106.8 / 110.0 / 113.1%**
- bonusCombined: **1/198.0 → 1/148.9**
- base: **約34.6G/50枚**
- AT純増: **約0.1枚/G**
- basic: **HBB最大257枚 / BIG最大204枚 / REG約50枚、HBB/BB後AT150G・REG後50G+α**
- 天井: **非搭載**
- reset: なな徹本機固有ページで設定変更後「すべての状態がリセット」。天井関連はN/A。有利区間ランプ変更判別不可。純電断、据え置き個別状態、本機固有ガックン、朝一専用数値は十分な再探索後も直接固定できず一般論で補完しない。
- coreStatus: **COMPLETE_CORE**

## No.1570 — 真天下布武
- path: `docs/real_machine_db/machines/2023-06-05_shin-tenka-fubu.md`
- manufacturer: **山佐製造 / 山佐ネクスト販売**
- formalModel: **S真天下布武DD**
- inspectionCode: **230183**
- releaseDate canonical: **2023-06-05**
- schedule conflict: 初期資料の5/8予定に対しG-netが納品5/7→6/4、開店5/8→6/5への延期を明示。複数実導入資料も6/5で一致するためcanonical=6/5。
- payoutRate: **97.7 / 99.0 / 103.0 / 108.5 / 112.2%**（設定1/2/4/5/6）
- AT: **1/374.5 → 1/166.9**
- CZ: **1/116.7 → 1/75.9**
- base: **約34.2G/50枚**
- netIncrease: **約2.5枚/G**
- normalCeiling: **999G+α**
- reset: 設定変更で有利区間・天井・内部モード・内部状態RESET。純電源OFF→ONは同各項目CARRY_OVER。設定変更後/AT後はCZ非当選なら55G+αでCZ。設定変更/有利区間移行時の秀吉モード選択率は **14.5 / 17.6 / 25.0 / 31.3 / 37.5%**（1/2/4/5/6）。秀吉SPなら111G+α天井。本機固有ガックンは未固定。
- coreStatus: **COMPLETE_CORE**

## No.1571 — ウルトラちゃぶ台返し
- path: `docs/real_machine_db/machines/2023-06-05_ultra-chabudai-gaeshi.md`
- manufacturer: **ベルコ**
- formalModel: **SチャブダイEB6**
- inspectionCode: **2S1767**
- releaseDate: **2023-06-05**
- settings: **L / 1 / 2 / 3 / 4 / 6**
- payoutRate: **L 74.8 / 1 98.0 / 2 99.5 / 3 101.5 / 4 103.5 / 6 106.0%**
- initialHit canonical: **1/240.3 / 1/236.1 / 1/231.2 / 1/225.7 / 1/221.4**（1/2/3/4/6）
- conflict: 設定3初当りはベルコ公式・なな徹 **1/231.2** vs G-net **1/234.2**。平均せず公式一致側をcanonical、alternateをCONFLICT保持。
- base: **約31G/50枚**
- netIncrease: **約4.0枚/G**
- basic: **BIG50G 約200枚 / REG20G 約80枚**
- ceiling: **777G**
- reset: 設定変更で有利区間・天井・内部モードRESET、四畳半ステージ（昼）開始。純電源OFF→ONは有利区間・天井・内部モード・ステージ・初回周期CZをCARRY_OVER。設定変更後初回周期は最大111Gで「怒気っとロックチャレンジ」、期待度約40%。固定短縮天井はなし。本機固有ガックンは未固定。
- coreStatus: **COMPLETE_CORE**

## 2023-06-05群 — CLOSED 6/6 canonical processed
1. SLOTメイドインアビス — No.1566 **DONE**
2. ぱちスロ にゃんこ大戦争 BIGBANG — No.1567 **DONE**
3. Lパチスロベルセルク無双 — No.1568 **DONE**
4. パチスロ コードギアス 反逆のルルーシュ3 C.C.&Kallen ver. — No.1569 **DONE**
5. 真天下布武 — No.1570 **DONE**
6. ウルトラちゃぶ台返し — No.1571 **DONE**

### 群監査
- スロパチクエスト導入日一覧と、6月16日時点の2023年導入一覧で6/5の実導入6機が一致。
- 事前スケジュールに `L戦国BASARAギガZE` の6/5予定表記が残る資料はあるが、実導入側資料との差があるため既存方針どおり **2023-08-07境界へdefer**。6/5群へ重複追加しない。
- PB・別型式・地域先行・延期を再監査し、追加canonical独立機を固定できなかったため **CLOSED 6/6**。

## No.1572 — SOZ1-AA-30
- path: `docs/real_machine_db/machines/2023-06-19_soz1-aa-30.md`
- manufacturer: **オズ**
- formalModel: **SOZ1-AA-30**
- inspectionCode: **2S1541**
- releaseDate: **2023-06-19**
- generation/system: **6号機 / 30Φ / ノーマルAタイプ / 完全告知 / リアルボーナス**
- payoutRate: **96.49 / 98.36 / 100.35 / 103.10 / 105.01 / 107.03%**
- BIG: **1/274 / 1/265 / 1/258 / 1/248 / 1/242 / 1/236**
- REG: **1/492 / 1/438 / 1/395 / 1/350 / 1/318 / 1/288**
- combined: **1/176 / 1/165 / 1/156 / 1/145 / 1/137 / 1/130**
- base: **約40G/50枚**
- basic: **BIG約259枚 / REG約103枚**
- ceiling: **非搭載**
- reset: 設定変更 / 据え置き / 純電断の本機固有ボーナス状態・内部状態、ガックン、有利区間別挙動は、`SOZ1-AA-30 / OZ1-AA-30 / オズワンエース / オズ` と各リセット検索語を複数回組み替え、公安委員会・一撃・P-WORLD・なな徹・スロパチクエスト・パチマガスロマガ・中古実機資料・旧DBを横断したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。天井/短縮/朝一モード/CZ・AT恩恵はN/AまたはNONE_CONFIRMED。一般論で補完しない。
- coreStatus: **COMPLETE_CORE**

## 2023-06-19群 — CLOSED 1/1 canonical processed
1. SOZ1-AA-30 — No.1572 **DONE**

### 群監査
- 一撃メーカー別一覧、スロパチクエスト2023導入一覧、2023年機種一覧で6/19スロット導入はSOZ1-AA-30で一致。
- 追加PB・別型式・地域先行機を固定できなかったため **CLOSED 1/1**。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8・6/5系の事前スケジュール表記 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。
- `Lパチスロベルセルク無双`: 6/5複数導入・稼働資料 vs Amusement Japan 6/19予定表記。**6/5 canonical / 6/19 conflict保持**。
- `ウルトラちゃぶ台返し`: 設定3初当り **1/231.2（ベルコ公式・なな徹） vs 1/234.2（G-net）**。平均せず保持。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次 / 当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### No.1569 コードギアス3 C.C.&Kallen
- PiDEA X 東京都公安委員会検定通過: https://www.pidea.jp/articles/1668388131
- P-BOMB サミー発表: https://p-bomb.co.jp/industry/new-machine/6577/
- 一撃: https://1geki.jp/slot/s_codegeass3cc/
- なな徹 ボーナス/機械割: https://nana-press.com/kaiseki/machine/552/14240/
- なな徹 朝一/有利区間: https://nana-press.com/kaiseki/machine/552/15272/

### No.1570 真天下布武
- G-net 納期変更: https://g-net-ps.com/info/s0058/
- HAZUSE: https://hazuse.com/zh-hans/machine/pachislot/SX0047/
- パチマガスロマガ 朝一/設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/249/kr01-3.php
- 一撃: https://1geki.jp/slot/s_shin_tenkafubu/3/

### No.1571 ウルトラちゃぶ台返し
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/ultrachabudai/
- 遊技通信 東京都公安委員会検定: https://news.p-world.co.jp/articles/23427/yugitsushin
- 一撃 朝一/電断: https://1geki.jp/slot/s_ultra_chabu/3/
- なな徹: https://nana-press.com/kaiseki/machine/551/14673/

### No.1572 SOZ1-AA-30
- 遊技通信 東京都公安委員会検定: https://news.p-world.co.jp/articles/23427/yugitsushin
- 一撃: https://1geki.jp/slot/s_oz1_aa/
- P-WORLD: https://www.p-world.co.jp/machine/database/9857
- なな徹: https://nana-press.com/kaiseki/machine/569/15445/
- スロパチクエスト: https://www.slopachi-quest.com/article/ozuone-settei/

### 群監査
- スロパチクエスト 2023導入機種一覧: https://www.slopachi-quest.com/article/2023-dounyuukisyu/
- しんのすけちゃんねる 2023導入一覧: https://shinnosuke-ch.com/2023%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%B0%8E%E5%85%A5%E6%A9%9F%E7%A8%AE%E4%B8%80%E8%A6%A7/
- 一撃 2023年7月新台カレンダー: https://1geki.jp/newmachinecalender/202307/

## 保存コミット
- No.1569追加: `3ea0db96f68e0a93b475cee68e2209043fd8dceb`
- No.1570追加: `c4f1a607fecac592dc864ac8cf2b5a15fc5bb663`
- No.1571追加: `e8e78f5864777d2bf052943c5da42506bf88be4e`
- No.1572追加: `a47efc2c08c83831f1044f5816a43567513106fb`
- handoff更新: 本コミット

## 次回再開地点
**本線は2023-07-03群の先頭、No.1573候補 `パチスロ からくりサーカス` から継続する。現時点の同日knownは `パチスロ からくりサーカス` / `ゴーゴージャグラー3` / `パチスロ 蛇喰夢子という女` / `ナイツ-nights-` の4機。各機を性能コア + resetBehavior v0.7で処理し、4機完了後にPB・別型式・地域先行・延期を横断してCLOSED可否を判定する。遡及QAはカリビアンクイーンから継続し、既存性能値はやり直さない。**