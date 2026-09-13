更新日: 2026-09-13

## 現在地点
- recordCount: **1574**
- latestRecordAdded: **パチスロ 蛇喰夢子という女 — No.1574**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-07-03_pachislot-jabami-yumeko-toiu-onna.md`
- chronologicalFrontier: **2023-07-03**
- frontierLatestMachine: **パチスロ 蛇喰夢子という女 — No.1574**
- schema: **resetBehavior v0.7**
- status: **2023-07-03_GROUP_OPEN_2_OF_4_CANONICAL_PROCESSED / NEXT_NO1575_GO_GO_JUGGLER_3**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1573 `パチスロナイツ` を確認して開始。
- INDEXは旧表示（19件）のためREADME規定どおり、LATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-07-03群のcanonical 4機を維持し、2機目として No.1574 `パチスロ 蛇喰夢子という女` を性能コア + resetBehavior v0.7で追加。
- 欠損項目は機種名 / 正式型式 / メーカー名 / シリーズ名と、設定変更・リセット・朝一・据え置き・電源OFF ON・650G・961G・127マス・MAP・モード・状態・ガックン・有利区間を組み替え、メーカー発表・業界記事・当時解析・旧DB/回顧資料を横断して再探索。
- リセット650G短縮は当時攻略資料に明記がある一方、なな徹は設定変更詳細を調査中、ちょんぼりすたは650G付近短縮を推測表記としており、メーカー一次の確定値を固定できなかった。そのため `PROVISIONAL_PUBLIC_VALUE` として保存し、確定canonicalへ格上げしていない。

## No.1574 — パチスロ 蛇喰夢子という女
- path: `docs/real_machine_db/machines/2023-07-03_pachislot-jabami-yumeko-toiu-onna.md`
- manufacturer: **ネット**
- formalModel: **S蛇喰夢子という女NE**
- inspectionCode: **2S1871**（Pachinavi二次DB照合。型式名は遊技日本等業界資料でも一致）
- releaseDate: **2023-07-03**
- generation/system: **6.5号機 / メダル / AT / 差枚数管理 / 技術介入**
- payoutRate market: **97.3 / 98.2 / 101.4 / 102.4 / 105.6 / 105.2%**（設定1～6）
- payoutRate fullStrategy: **102.0 / 105.2 / 105.9 / 107.1 / 108.5 / 109.1%**
- CZ合算: **1/259 → 1/216**
- AT初当たり: **1/323 → 1/271**
- base: **約33.2～35.2G/50枚**
- AT純増: **約2.7枚/G**
- basic: **初期差枚100枚+α / AT突入時は原則ディーラータイム5G+αから開始**
- ceiling: **961G+α（前兆最大26G） / MAP127マス+αでAT**。
- reset: 設定変更時は天井・状態/モードRESETとする複数攻略資料、純電源OFF→ONは天井・状態/モードCARRY_OVERとする複数資料を確認。有利区間も設定変更RESET / 純電断引継ぎとする資料あり。ただし高信頼解析の朝一欄は詳細調査中のため、確度差を明示。
- reset ceiling: **650G短縮**の公開値あり。ただし高信頼複数ソース確定に至らず `ANALYSIS_SINGLE / PROVISIONAL_PUBLIC_VALUE`。
- reset detection: 有利区間ランプ判別不可。設定変更/電源OFF→ONとも通常ステージ開始・序盤MAP表示も近く、見た目判別は困難。650G短縮が成立する場合は朝一650G超AT非当選で据え置き濃厚材料だが、短縮値と同じPROVISIONAL扱い。本機固有ガックンは再探索後も未固定。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **PARTIAL_RESEARCH_EXHAUSTED**

## 2023-07-03群 — OPEN 2/4 canonical processed
1. パチスロナイツ — No.1573 **DONE**
2. パチスロ 蛇喰夢子という女 — No.1574 **DONE**
3. ゴーゴージャグラー3 — **NEXT / No.1575候補**
4. パチスロ からくりサーカス — **QUEUED**

### 群監査
- パチマガスロマガの2023-07-10新台集計が「7月3日導入の4機種」として `パチスロナイツ / パチスロ 蛇喰夢子という女 / ゴーゴージャグラー3 / パチスロ からくりサーカス` を列挙。
- 各機の個別導入資料でも2023-07-03を確認。
- 群は残り2機処理後にPB・別型式・地域先行・延期を再監査してCLOSED判定する。

## 次回再開地点
- **No.1575候補: ゴーゴージャグラー3**
- 同じ2023-07-03群を順番に継続し、その後 `パチスロ からくりサーカス`。
- 4機処理後、当日群の漏れ監査を行いCLOSED判定へ進む。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8・6/5系の事前スケジュール表記 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。
- `Lパチスロベルセルク無双`: 6/5複数導入・稼働資料 vs Amusement Japan 6/19予定表記。**6/5 canonical / 6/19 conflict保持**。
- `ウルトラちゃぶ台返し`: 設定3初当り **1/231.2（ベルコ公式・なな徹） vs 1/234.2（G-net）**。平均せず保持。
- `パチスロナイツ`: 設定2ボーナス合算 **1/167.1 vs 1/167.2** の丸め差。複数当時資料一致の1/167.1をcanonical。
- `パチスロ 蛇喰夢子という女`: 設定変更後**650G短縮**は攻略資料明記あり。ただし高信頼朝一解析が調査中、別解析は導入初週実戦からの推測表記を含むため `PROVISIONAL_PUBLIC_VALUE` を維持。有利区間約2500G天井説も噂/推測としてcanonical不採用。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次 / 当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### 2023-07-03群
- パチマガスロマガ 7月3日導入4機種集計: https://p.hisshobon.jp/vpage/2499/33

### No.1574 パチスロ 蛇喰夢子という女
- ネット公式発表転載 / DreamNews: https://www.dreamnews.jp/press/0000279666/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-58079/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10003478/
- なな徹 機種総合: https://nana-press.com/kaiseki/machine/579/
- なな徹 朝一/有利区間: https://nana-press.com/kaiseki/machine/579/15639/
- なな徹 AT/ディーラータイム: https://nana-press.com/kaiseki/machine/579/15672/
- 一撃 天井: https://1geki.jp/slot/s_kakegurui/3/
- 一撃 ベース: https://1geki.jp/slot/s_kakegurui/4/
- すろぱちくえすと 天井/朝一: https://www.slopachi-quest.com/article/jyabamiyumeko-tenjou/
- すろぱちくえすと 設定: https://www.slopachi-quest.com/article/jyabamiyumeko-settei/
- パチスロメソッド: https://slotmethod.jp/archives/17040/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/188181/
- Pachinavi: https://pachinavi.net/machines/kakegurui-yumeko/
