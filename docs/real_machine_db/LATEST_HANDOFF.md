更新日: 2026-09-13

## 現在地点
- recordCount: **1520**
- latestRecordAdded: **CREA Newクレアの秘宝伝 — No.1520**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-09-05_crea-new-clea-no-hihouden.md`
- chronologicalFrontier: **2022-09-05**
- frontierLatestMachine: **CREA Newクレアの秘宝伝 — No.1520**
- schema: **resetBehavior v0.7**
- status: **2022-09-05_GROUP_CLOSED_6_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1519 `Sアバサー` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種No.1520 `CREA Newクレアの秘宝伝` を性能コア＋resetBehavior v0.7で追加。
- 大都技研公式、Greenbelt/P-WORLD、遊技日本、HAZUSE、1geki、パチマガスロマガ、なな徹/ななプレス、当時営業資料系、導入カレンダーを横断。
- 2022-09-05導入、大都技研、型式 `S CREA～Newクレアの秘宝伝～A2`、検定番号 `1S1758`、6.5号機・RT非搭載ノーマルAタイプを固定。
- 設定1〜6機械割97.6〜110.1%、BIG 1/243.6〜1/205.4、REG主系列1/409.6〜1/251.1、合算1/152.8〜1/113.0、約39G/50枚、BIG最大251枚・REG最大71枚。
- 天井非搭載。AT/ART/CZ天井、短縮天井、朝一内部モードはNOT_APPLICABLE。
- 設定変更/据え置き/純電断時の成立済みボーナスフラグ・告知状態・選択演出モード等の低レイヤ契約、本機固有ガックン/初期出目/表示判別は検索語・型式・検定番号・シリーズ名まで変えて再探索しても直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の朝一恩恵/不利/公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- REG設定1は主系列 `1/409.6` に対し、なな徹/ななプレス系に `1/406.9` があるためCONFLICT保持。機械割にも一部後年DBで別系列があるため平均せず主系列をcanonicalとした。

## No.1520 — CREA Newクレアの秘宝伝
- path: `docs/real_machine_db/machines/2022-09-05_crea-new-clea-no-hihouden.md`
- manufacturer: **大都技研**
- formalModel: **S CREA～Newクレアの秘宝伝～A2**
- inspectionCode: **1S1758**
- releaseDate: **2022-09-05**
- generation/system: **6.5号機 / ノーマルAタイプ / RT非搭載**
- payoutRate: **97.6 / 98.8 / 100.2 / 103.2 / 106.1 / 110.1%**
- BIG: **1/243.6 / 240.9 / 238.3 / 230.8 / 220.7 / 205.4**
- REG canonical: **1/409.6 / 394.8 / 360.1 / 310.6 / 281.3 / 251.1**
- 合算: **1/152.8 / 149.6 / 143.4 / 132.4 / 123.7 / 113.0**
- baseGamesPer50: **約39G/50枚（設定1）**
- basicPayout: **BIG最大251枚 / REG最大71枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **OFFICIAL_INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_CORE / RESET_SOURCE_LIMITED**

### resetBehavior v0.7 — No.1520
- **設定変更**: 天井/AT-CZモードはNOT_APPLICABLE。成立済みボーナスフラグ・告知状態・演出モード等の機種固有契約はUNVERIFIED_AFTER_RESEARCH。
- **据え置き**: 同上。天井・AT/CZモードはNOT_APPLICABLE。
- **純電源OFF→ON**: 成立済みボーナスフラグ・告知状態・演出モード等の機種固有契約はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 天井非搭載。
- **モード/状態**: 5演出モードは演出選択であり朝一内部モードではない。朝一専用高確等はNONE_CONFIRMED。
- **有利区間**: ボーナスのみで出玉を増やすRT非搭載ノーマル機で、AT/ARTの有利区間を用いた出玉システムはNOT_APPLICABLE。
- **朝一恩恵/不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 本機固有ガックン/初期出目/表示判別はUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: NONE_CONFIRMED_AFTER_RESEARCH。

## 2022-09-05群 — CLOSED 6/6 known
1. `スーパーリオエース` — **No.1515 処理済み**
2. `ヴィーナスゾーン` — **No.1516 処理済み**
3. `パチスロペルソナ5` — **No.1517 処理済み**
4. `ボンバーガール` — **No.1518 処理済み**
5. `Sアバサー` — **No.1519 処理済み**
6. `CREA Newクレアの秘宝伝` — **No.1520 処理済み**

群監査メモ:
- Greenbelt/P-WORLD 2022-08-22更新の新台スケジュールは9/5パチスロを上記6機として掲載。
- 当時のパチスロ立ち回り講座、イチカツの2022新台一覧でも同じ6機で一致。
- 9月導入機一覧でも9/20の `S BIG島唄30` / `パチスロBOØWY` は別日群として分離される。
- Sアバサー25Φ/30Φは同一性能の同時展開派生としてNo.1519へ統合済み。
- PB・地域先行・延期/段階導入・別型式の追加候補を再探索したが、9/5に追加すべき独立パチスロ機は今回確認できず、6/6でCLOSED判定。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_gaogao-festival-s.md`（ガオガオフェスティバルS）**。
- 今回は本線No.1520の性能コア＋resetBehaviorと9/5群CLOSED監査を優先し、遡及QAカーソルは維持。

## 次回本線の再開地点
- **2022-09-20群へ進む。No.1521候補 `S BIG島唄30`。**
- 同日known候補: `S BIG島唄30`、`パチスロBOØWY`。
- 既存No.1515〜1520の性能コアはやり直さず、No.1521から性能コア＋resetBehavior v0.7を収集する。
- 2機処理後、9/20群についてPB・派生・別型式・地域先行・延期/段階導入を再監査し、CLOSED可否を判定する。

## GitHub保存
- No.1520追加 commit: `5d369bdc21b18dfa44eb15aef64f4ce2c5a19c10`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1520 CREA Newクレアの秘宝伝
- https://www.daitogiken.com/contents/product/slot/newcrea/
- https://web-greenbelt.jp/post-62199/
- https://news.p-world.co.jp/articles/21494/greenbelt
- https://yugi-nippon.com/pachinko-new-machine/post-53661/
- https://hazuse.com/machine/pachislot/1S1758/
- https://1geki.jp/slot/s_crea_new/3/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/83/tj02-1.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/83/bn01.php
- https://nana-press.com/kaiseki/machine/426/10738/
- https://pidea.jp/articles/1657784969
- https://crankyseven.com/newmachine-info.htm
- https://ichikatsu.com/newslot2022/
