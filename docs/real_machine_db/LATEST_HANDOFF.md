更新日: 2026-09-12

## 現在地点
- recordCount: **1449**
- latestRecordAdded: **スターパルサー — No.1449**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-12-06_star-pulsar.md`
- chronologicalFrontier: **2021-12-06**
- frontierLatestMachine: **スターパルサー — No.1449**
- schema: **resetBehavior v0.7**
- status: **2021-12-06_GROUP_OPEN_5_OF_6_KNOWN_DONE_AFTER_BOUNDARY_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1448「主役は銭形3」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定の次機No.1449「スターパルサー」を追加。
- 山佐ネクスト、型式 `SスターパルサーYTCC`、検定番号 `1S0038`、2021-12-06導入、6号機完全告知ノーマル機を業界記事、HAZUSE、P-WORLD、複数解析で照合。
- 性能コアは設定1〜6の機械割96.1/97.9/99.6/102.7/105.9/109.4%、BIG 1/268.6→1/227.6、REG 1/425.6→1/227.6、合算1/164.7→1/113.8、約40〜43G/50枚、BIG最大239枚、REG最大95枚を保存。
- 設定6合算は多数資料1/113.8に対しニコナナ系動画説明1/113.6があり、平均せずCONFLICT保持。
- resetBehaviorは天井/ゾーン非搭載、天国・高確等の通常時モードなしをNOT_APPLICABLEとして保存。機種別解析表では設定変更時G数RESET、純電源ON/OFF時G数CARRY_OVER。ただし天井非搭載のため天井狙いへの実利なし。
- 成立済みボーナス状態など設定変更/据え置き/純電断の本機固有内部契約、本機固有ガックン、朝一表示/出目による変更判別は、機種名/正式型式/山佐ネクスト/パルサー/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンへ検索語を変更しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 境界再監査で2021-12-06の一撃カレンダーがパチスロ6機を掲載していることを確認。従来handoffの既知5機に加え **「泡盛」** が同日導入として存在。
- GitHub全文検索で「泡盛」の既存レコードは見つからず、未処理候補としてNo.1450キューへ差し込み。12/6群はCLOSEDせずOPEN継続。

## No.1449 — スターパルサー
- path: `docs/real_machine_db/machines/2021-12-06_star-pulsar.md`
- manufacturer: **山佐ネクスト**
- formalModel: **SスターパルサーYTCC**
- certificationNumber: **1S0038**
- releaseDate: **2021-12-06**
- generation/system: **6号機 / ノーマル / 完全告知 / ボーナス主体**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **96.1 / 97.9 / 99.6 / 102.7 / 105.9 / 109.4%**
- BIG: **1/268.6 / 1/264.3 / 1/262.1 / 1/252.1 / 1/240.9 / 1/227.6**
- REG: **1/425.6 / 1/360.1 / 1/312.1 / 1/270.8 / 1/250.1 / 1/227.6**
- combined: **1/164.7 / 1/152.4 / 1/142.5 / 1/130.5 / 1/122.7 / 1/113.8**
- baseGamesPer50: **約40〜43G**
- basicPayout: **BIG最大239枚 / REG最大95枚**
- normalCeiling: **NOT_APPLICABLE**
- coreStatus: **COMPLETE_CORE_WITH_SETTING6_COMBINED_RATE_CONFLICT**
- resetBehaviorQA: **COMPLETE_APPLICABILITY_WITH_MACHINE_SPECIFIC_GAME_COUNT_TABLE_AND_DETECTION_UNVERIFIED**

### resetBehavior v0.7 — No.1449
- **設定変更**: 機種別解析表ではG数RESET。天井非搭載。成立済みボーナス等の本機固有内部契約は未固定。
- **据え置き**: 天井/通常時モードはNOT_APPLICABLE。本機固有内部契約は未固定。
- **純電源OFF→ON**: 機種別解析表ではG数CARRY_OVER。天井非搭載。本機固有内部契約は未固定。
- **天井/短縮**: 天井・ゾーン非搭載のためNOT_APPLICABLE。
- **モード/状態**: 天国・高確等は非搭載とされNOT_APPLICABLE。設定変更専用モード数値なし。
- **有利区間**: ノーマル機の朝一物差しとしてNOT_APPLICABLE。
- **朝一恩恵/不利**: 比較可能な設定変更専用の主要恩恵/不利は確認できず。
- **変更判別**: 本機固有ガックン、朝一ランプ/出目による直接判別契約は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。

## 2021-12-06群 — OPEN / 境界監査後6機
1. **マイジャグラーV — No.1445 / DONE**
2. **パチスロ モンスターハンター:ワールド™ 黄金狩猟 — No.1446 / DONE**
3. **S牙狼-黄金騎士- — No.1447 / DONE**
4. **主役は銭形3 — No.1448 / DONE**
5. **スターパルサー — No.1449 / DONE**
6. **泡盛 — No.1450候補 / NEXT（境界監査で追加検出）**

## 次回本線の再開地点
- **No.1450候補「泡盛」**。2021-12-06群の漏れとして最優先処理する。
- 泡盛完了後、12/6群をメーカー別/別型式/PB/地域先行・延期/段階導入まで再監査しCLOSED可否を判定。
- その後の明確な日付キューは **2021-12-10「パチスロミクちゃんとイドムンのミラクルチャレンジ」**、次いで **2021-12-13「パチスロうまい棒」**。
- 2021-12-20群には少なくとも「パチスロ 戦姫絶唱シンフォギア 勇気の歌」「沖ドキ！DUO」「沖ドキ！DUO-30」「シンデレラブレイド4」「秘宝伝 解き放たれた女神」「パチスロ リング 運命の秒刻」を確認。12/6群CLOSED後に順次処理する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-06_antonio-inoki-mo-moeru-pachislot-ki.md`（アントニオ猪木も燃えるパチスロ機）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `status: PARTIAL` は維持。50枚ベース未確定や既存CONFLICTを崩していない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06-25_triple-crown-30.md`（トリプルクラウン-30）**。
- 今回は本線No.1449と12/6群境界監査を優先し、遡及QAカーソルは進めていない。

## GitHub保存
- No.1449追加 commit: `61467b692c456a49ebe1db4d6116493e11b2f6f3`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1449 スターパルサー
- https://news.p-world.co.jp/articles/18072/nippon
- https://web-greenbelt.jp/post-51350/
- https://p-bomb.co.jp/industry/new-machine/2366/
- https://hazuse.com/machine/pachislot/1S0038/
- https://hazuse.com/machine/pachislot/1S0038/genre/203/
- https://hazuse.com/machine/pachislot/1S0038/genre/208/
- https://ichikatsu.com/starpulsar/
- https://chonborista.com/slot/yamasa-slot/155710/
- https://www.p-world.co.jp/machine/database/9494
- https://www.nicozon.net/watch/so39655965

### 2021-12境界監査
- https://1geki.jp/newmachinecalender/202112/
