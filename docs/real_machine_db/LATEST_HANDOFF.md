更新日: 2026-09-12

## 現在地点
- recordCount: **1484**
- latestRecordAdded: **Sルパン三世 — No.1484**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-03-07_s-lupin-the-third.md`
- chronologicalFrontier: **2022-03-07**
- frontierLatestMachine: **Sルパン三世 — No.1484**
- schema: **resetBehavior v0.7**
- status: **2022-03-07_GROUP_OPEN_3_OF_4_KNOWN_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1483 `パチスロ蒼天の拳4` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点mainはNo.1483まで進行済み。handoff指定の次機種No.1484 `Sルパン三世` を追加。
- 型式 `Sルパン三世L2`、検定番号 `1S1355`、2022-03-07導入を業界検定資料・機種資料で照合。
- 設定変更時の111G/333G/555G天井振り分け、ダブルセブンモード初期振り分け、据え置き時の天井・モード・状態・有利区間引継ぎを複数解析資料で照合。
- 純電源OFF→ONは天井引継ぎを直接確認したが、内部ダブルセブンモード/内部状態まで一般的6号機挙動から一括補完せず、未確認部分を分離した。
- 遡及QAは `パチスロ暴れん坊将軍` を再探索。既存 `coreStatus: COMPLETE_CORE` を維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` に更新。
- 2022-03-07群の既知4機のうち3機処理済み。群はOPENのまま。

## No.1484 — Sルパン三世
- path: `docs/real_machine_db/machines/2022-03-07_s-lupin-the-third.md`
- manufacturer: **オリンピア（平和グループ）**
- formalModel: **Sルパン三世L2**
- inspectionCode: **1S1355**
- releaseDate: **2022-03-07**
- generation/system: **6.2号機 / 擬似ボーナス+差枚数管理・セット継続型AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.5 / 100.0 / 103.0 / 105.2 / 108.0%**
- 初当たり: **1/196.7 / 1/193.2 / 1/186.5 / 1/177.2 / 1/171.7 / 1/165.5**
- メインAT: **1/429.4 / 1/415.6 / 1/396.2 / 1/362.7 / 1/341.0 / 1/313.3**
- baseGamesPer50: **約32.5G（設定1）**
- netIncrease: **約2.7枚/G**
- ceiling: **通常時最大555Gでボーナス or AT**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_NUMERIC_RESET_TABLES**
- confidence: **HIGH_CORE_HIGH_RESET**

### resetBehavior v0.7 — No.1484
- **設定変更**: 天井G・内部モード・内部状態・有利区間をRESET。初回天井を111G/333G/555Gから再抽選。
- **据え置き**: 天井・内部モード・内部状態・有利区間をCARRY_OVER。
- **純電源OFF→ON**: 天井はCARRY_OVERを直接確認。内部ダブルセブンモード/内部状態の機種固有契約は `UNVERIFIED_AFTER_RESEARCH`。
- **設定変更時天井振り分け**: **111G 10.2% / 333G 46.9% / 555G 43.0%**。333G以内合計57.1%。
- **設定変更時ダブルセブンモード**: **A 66.4% / B 23.4% / C 8.6% / D 0.8% / E 0.4% / F 0.4%**。
- **通常開始時比較値**: **A 81.6% / B 15.2% / C 1.6% / D 0.8% / E 0.4% / F 0.4%**。
- **変更判別**: 有利区間ランプはクレジット右下ドット。朝一消灯=設定変更濃厚、点灯=据え置き濃厚。ただしAT終了時にも消灯するため前日最終状態を考慮。
- **UNVERIFIED_AFTER_RESEARCH**: 純電断時の内部ダブルセブンモード/内部状態、本機固有ガックン発生条件・発生率。

## 遡及QA — パチスロ暴れん坊将軍
- path: `docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`
- 既存性能判定 **`coreStatus: COMPLETE_CORE` を維持**。
- reset側のみ **`PARTIAL_RESEARCH_EXHAUSTED`** に更新。
- 確認済み通常仕様: チェリー後3G RT「暴れん坊チャンス」、赤7 SUPER BIG後最大250G RT「スーパー暴れん坊チャンス」。
- 設定変更/据え置き/純電断時のRT残G・内部RT状態、成立済みボーナス/告知待ち状態、本機固有ガックン/初期出目は、公式・業界・当時解析・古いDB・実戦/回顧資料を再横断しても直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機初期のため `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 公開された設定変更時専用の比較数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 5号機一般論からの推測補完は行わない。

## 2022-03-07群
既知候補4機:
1. `パチスロ デビル メイ クライ 5` — **No.1482 処理済み**
2. `パチスロ蒼天の拳4` — **No.1483 処理済み**
3. `Sルパン三世` — **No.1484 処理済み**
4. `パチスロ TIGER ＆ BUNNY SP` — 未処理

- status: **OPEN**。
- 残る `パチスロ TIGER ＆ BUNNY SP` 処理後、PB・別型式・30Φ/別スペック・地域先行・延期/段階導入を横断再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- **No.1485候補 `パチスロ TIGER ＆ BUNNY SP` から処理。**
- 処理後、2022-03-07群を横断再監査してCLOSED可否を判定する。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。
- 結果: **coreStatus COMPLETE_CORE維持 / resetBehaviorQA PARTIAL_RESEARCH_EXHAUSTED**。
- Git追加履歴を再確認し、暴れん坊将軍追加後に次に追加された実機レコードをカーソルとする。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）**。

## GitHub保存
- No.1484追加 commit: `fc2795593d802f2bad440b577152df581e56c818`
- 暴れん坊将軍 reset QA commit: `efc3dfc95c0551783eb19b4e8b3cd5e8a7445a20`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1484 Sルパン三世
- https://news.p-world.co.jp/articles/19081/yugitsushin
- https://news.p-world.co.jp/articles/19224/yugitsushin
- https://news.p-world.co.jp/articles/19111/greenbelt
- https://pachinavi.net/machines/s-lupin/
- https://nana-press.com/kaiseki/machine/297/8329/
- https://nana-press.com/kaiseki/machine/297/8334/
- https://nana-press.com/kaiseki/machine/297/8338/
- https://nana-press.com/kaiseki/machine/297/8340/
- https://nana-press.com/kaiseki/machine/297/8345/
- https://www.slopachi-quest.com/article/rupin-the-3rd-tenjou/
- https://ichikatsu.com/lupin/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/152/kh03.php

### 遡及QA パチスロ暴れん坊将軍
- https://www.fujimarukun.co.jp/products/abare_slot/
- https://web-greenbelt.jp/00003966/
- https://www.p-world.co.jp/machine/database/4574
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/06/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/06/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/06/k.php
- https://5goki.com/fuji
- https://newscast.jp/news/797453
