更新日: 2026-09-12

## 現在地点
- recordCount: **1483**
- latestRecordAdded: **パチスロ蒼天の拳4 — No.1483**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-03-07_souten-no-ken-4.md`
- chronologicalFrontier: **2022-03-07**
- frontierLatestMachine: **パチスロ蒼天の拳4 — No.1483**
- schema: **resetBehavior v0.7**
- status: **2022-03-07_GROUP_OPEN_2_OF_4_KNOWN_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1482 `パチスロ デビル メイ クライ 5` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点mainはNo.1482まで進行済み。handoff指定の次機種No.1483 `パチスロ蒼天の拳4` を追加。
- メーカー表記は市場ブランド `サミー`、製造元 `銀座` を分離。型式 `S パチスロ蒼天の拳AC KA`、検定番号 `1S1529` を業界検定資料・機種DBで照合。
- 2022-03-07群の既知4機のうち2機処理済み。群はOPENのまま。

## No.1483 — パチスロ蒼天の拳4
- path: `docs/real_machine_db/machines/2022-03-07_souten-no-ken-4.md`
- manufacturer: **サミー（製造: 銀座）**
- formalModel: **S パチスロ蒼天の拳AC KA**
- inspectionCode: **1S1529**
- releaseDate: **2022-03-07**
- generation/system: **6.2号機 / 差枚数管理型AT / CZ経由・AT直撃**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.8 / 100.4 / 104.4 / 107.6 / 111.4%**
- AT初当たり: **1/379.3 / 1/363.6 / 1/345.3 / 1/313.8 / 1/290.5 / 1/271.2**
- CZ双龍門: **1/139.3 / 1/133.5 / 1/128.8 / 1/120.1 / 1/111.0 / 1/109.8**
- baseGamesPer50: **約37G**
- netIncrease: **約2.7枚/G**
- basicPayout: **AT初当たり時は双龍の刻から開始。初回20G+α、荒天初期50枚、静天は初当たり時100/150枚。蒼拳ボーナス20G+α or 40G+α。天授の儀は1セット30G。**
- ceiling: **通常時1200GでAT当選**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_POWER_CYCLE_AND_DETECTION**
- confidence: **HIGH_CORE_HIGH_RESET**

### resetBehavior v0.7 — No.1483
- **設定変更**: 1200G天井・内部モード・内部状態・有利区間をRESET。
- **据え置き**: 天井・内部モード・内部状態・有利区間をCARRY_OVER。
- **純電源OFF→ON**: 天井・内部モード・内部状態・有利区間をCARRY_OVER。HAZUSEの設定変更/電源ON・OFF比較表で直接確認。
- **ゲーム数/天井**: 通常時1200G。設定変更専用の固定短縮天井は確認されず、RESET後も最大1200G。
- **モード/状態**: 設定変更後は新規有利区間移行抽選。1枚モードを否定し、非レア小役/弱チェリーでも2枚以上から開始。
- **有利区間**: 設定変更=RESET、据え置き/純電断=CARRY_OVER。AT終了時にも消灯するため朝一ランプ判別には前日最終状態の例外あり。
- **朝一恩恵**: 新規有利区間移行時は1枚モード否定。非レア小役/弱チェリー時は2枚44.1%、3枚54.7%、AT高確1.2%で、55.9%が3枚以上。固定短縮天井型ではない。
- **変更判別**: 有利区間ランプはクレジット上部。朝一点灯=据え置き濃厚、消灯=設定変更濃厚。ただしAT終了時にも消灯。パチ＆スロ必勝本はリールガックンでも設定変更判別可と明記。
- **公開朝一/有利区間移行数値**: 非レア小役/弱チェリー=2枚44.1%・3枚54.7%・AT高確1.2%、弱スイカ=25.8/62.1/12.1%、チャンス目=33.6/62.1/4.3%、強ベル=3枚97.7%・AT高確2.3%、強チェリー=3枚100%、強スイカ=3枚50%・AT高確50%。有利区間移行時共通値であり設定変更専用テーブルではない。
- **UNVERIFIED_AFTER_RESEARCH**: 設定変更/据え置き時の開始ステージ、本機固有ガックン発生率。ガックン自体が判別要素であることは確認済み。

## 2022-03-07群
既知候補4機:
1. `パチスロ デビル メイ クライ 5` — **No.1482 処理済み**
2. `パチスロ蒼天の拳4` — **No.1483 処理済み**
3. `Sルパン三世` — 未処理
4. `パチスロ TIGER ＆ BUNNY SP` — 未処理

- status: **OPEN**。
- 4機処理後、PB・別型式・30Φ/別スペック・地域先行・延期/段階導入を横断再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- **No.1484候補 `Sルパン三世` から処理。**
- その後 `パチスロ TIGER ＆ BUNNY SP` を処理し、2022-03-07群を再監査する。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線を優先し新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1483追加 commit: `2808c505ff2753ead36b5d6e04275a532df4775e`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1483 パチスロ蒼天の拳4
- https://news.p-world.co.jp/articles/19219/nippon
- https://news.p-world.co.jp/articles/18972/greenbelt
- https://www.p-world.co.jp/machine/database/9571
- https://hazuse.com/machine/pachislot/1S1529/
- https://nana-press.com/kaiseki/machine/319/8421/
- https://nana-press.com/kaiseki/machine/319/8286/
- https://nana-press.com/kaiseki/machine/319/8302/
- https://p.hisshobon.jp/machine/3829/1/87468
- https://p.hisshobon.jp/machine/3829/1/90305
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/195/kh01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/195/at02.php
- https://www.slopachi-quest.com/article/soutennoken4-tenjou/
