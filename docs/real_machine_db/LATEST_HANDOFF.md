更新日: 2026-09-12

## 現在地点
- recordCount: **1482**
- latestRecordAdded: **パチスロ デビル メイ クライ 5 — No.1482**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-03-07_devil-may-cry-5.md`
- chronologicalFrontier: **2022-03-07**
- frontierLatestMachine: **パチスロ デビル メイ クライ 5 — No.1482**
- schema: **resetBehavior v0.7**
- status: **2022-03-07_GROUP_OPEN_1_OF_4_KNOWN_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコードNo.1481を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点mainはNo.1481 `メルヘンクエスト` まで進行済み。handoff指定どおり2022-03-07群へ前進し、No.1482 `パチスロ デビル メイ クライ 5` を追加。
- 2025年導入のスマスロ同名機 `スマスロ デビル メイ クライ5 スタイリッシュトライブ` は別機種として明示的に除外し、2022年機 `SデビルメイクライファイブXA / 1S1219` の情報だけを採用。
- 2022-03-07群の既知4機のうち1機処理済み。群はOPENのまま。

## No.1482 — パチスロ デビル メイ クライ 5
- path: `docs/real_machine_db/machines/2022-03-07_devil-may-cry-5.md`
- manufacturer: **アデリオン（ユニバーサルエンターテインメント系）**
- formalModel: **SデビルメイクライファイブXA**
- inspectionCode: **1S1219**
- releaseDate: **2022-03-07**
- generation/system: **6.2号機 / 差枚数管理型AT / 周期抽選**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.1 / 100.7 / 104.0 / 107.9 / 111.1%**
- AT初当たり: **1/358.4 / 1/349.8 / 1/332.6 / 1/301.7 / 1/266.7 / 1/243.6**
- baseGamesPer50: **約39.9G**
- netIncrease: **約3.5枚/G**
- basicPayout: **ATはSDTから開始。SDT平均約100.5枚。DMCボーナス20G、青7/赤7=1:1、SDTストック期待度約30%/70%。**
- ceiling: **最大8周期 / ボス最大7体撃破でも天井**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_POWER_CYCLE_AND_GAKKUN_UNVERIFIED**
- confidence: **HIGH_CORE_HIGH_RESET_POWER_CYCLE_GAKKUN_UNVERIFIED**

### resetBehavior v0.7 — No.1482
- **設定変更**: 周期天井・内部状態/モード・有利区間をRESET。1周期目から再開。
- **据え置き**: 周期天井・内部状態/モード・有利区間をCARRY_OVER。
- **純電源OFF→ON**: 2022年版に限定した直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。2025年スマスロ同名機の電断表は転用しない。
- **ゲーム数/天井**: 1周期100G+α。最大8周期。設定変更時は固定G数短縮ではなく周期を1周期目へリセットし、有利区間移行時に1周期/8周期を再抽選。
- **モード/状態**: 設定変更でRESET/再抽選。設定変更後・AT終了後の1周期目はニコズショップおよびエンカウントバトル高確率状態への突入率100%。
- **有利区間**: 設定変更でRESET、据え置きでCARRY_OVER。AT終了時にも有利区間リセット。
- **朝一恩恵**: 初回1周期はニコズショップ100%（5G）＋エンカウントバトル高確率状態100%。
- **変更判別**: 通常時は有利区間ランプ非点灯型なのでランプ消灯だけでは判別不可。非有利区間専用ステージが朝一に出れば設定変更濃厚。ただし前日AT終了直後ヤメは例外。本機固有ガックンは再探索後もUNVERIFIED。
- **公開朝一/有利区間移行数値**: レア役以外の1周期選択率は設定1 3.5%、2 7.0%、3 7.0%、4 8.2%、5 16.0%、6 19.9%。弱レア役は全設定50.0%、強レア役は全設定87.5%。これは設定変更専用ではなく有利区間移行時共通値。
- 導入時業界資料の「通常時初回周期AT突入率 約40%OVER」はリセット専用値ではないため定義を分けて保存。

## 2022-03-07群
既知候補4機:
1. `パチスロ デビル メイ クライ 5` — **No.1482 処理済み**
2. `パチスロ蒼天の拳4` — 未処理
3. `Sルパン三世` — 未処理
4. `パチスロ TIGER ＆ BUNNY SP` — 未処理

- status: **OPEN**。
- 4機処理後、PB・別型式・30Φ/別スペック・地域先行・延期/段階導入を横断再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- **No.1483候補 `パチスロ蒼天の拳4` から処理。**
- その後 `Sルパン三世` → `パチスロ TIGER ＆ BUNNY SP` の順で2022-03-07群を継続。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線を優先し新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1482追加 commit: `b06756173628e7ac4ff5badbf9e1a8b2c340510d`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1482 パチスロ デビル メイ クライ 5
- https://news.p-world.co.jp/articles/19753/nippon
- https://yugi-nippon.com/pachinko-new-machine/post-49458/
- https://hazuse.com/machine/pachislot/1S1219/
- https://hazuse.com/machine/pachislot/1S1219/genre/201/
- https://nana-press.com/kaiseki/machine/309/8257/
- https://nana-press.com/kaiseki/machine/309/8263/
- https://1geki.jp/slot/s_devilmaycry5/41/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aderion_slot/02/tj01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aderion_slot/02/at03-1.php
- https://pachiseven.jp/machines/6481/cutout/9
- https://flick7.net/slot/devilmaycry5__k.php
- https://slotmethod.jp/archives/8656/
