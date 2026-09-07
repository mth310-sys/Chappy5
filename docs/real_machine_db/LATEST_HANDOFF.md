# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **875**
- latestRecordAdded: **TRAD480**（ヤーマ）
- latestRecord: `docs/real_machine_db/machines/2015-03-09_trad480.md`
- chronologicalFrontier: **2015-03-09**
- frontierLatestMachine: **TRAD480**（ヤーマ）
- schema: **resetBehavior v0.7**
- status: **2015-03-09_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.874 `2015-03-09_trad.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **874件 / chronologicalFrontier 2015-03-09 / 03-09_GROUP_OPEN**。
- 次未処理のヤーマ **TRAD480（トラッド480R2 / 4S1081）** をNo.875として追加。
- HAZUSE、パチマガスロマガ、P-WORLD、すろぱちくえすとを横断し、兄弟機TRADから性能・resetBehaviorを転記せず独立収集。
- 03/09同日群を再検索し、実ホール導入の追加未処理5号機を今回固定できなかったため `CLOSED_FOR_CURRENT_RESEARCH`。
- 検索に出るアナザーゴッドハーデスの2015-03-09は777TOWN配信日で、実ホール導入（2014-02）ではないため混入させない。

## No.875 — TRAD480

- record: `docs/real_machine_db/machines/2015-03-09_trad480.md`
- manufacturer: **ヤーマ**
- releaseDate canonical: **2015-03-09**
- modelName: **トラッド480R2**
- inspectionNumber: **4S1081**
- systemType: **5号機 ノーマル / ボーナス主体 / 完全告知系**

### 性能コア

- 市場掲載機械割: **96.5 / 98.5 / 100.0 / 102.5 / 105.0 / 107.5%**。
- パチマガスロマガPAYOUTシミュレート値: **97.10 / 98.45 / 100.19 / 101.98 / 104.23 / 105.71%**。定義違いのため平均化しない。
- S-BIG: **1/780.2 / 744.7 / 744.7 / 744.7 / 712.4 / 712.4**。
- N-BIG: **1/819.2 / 819.2 / 780.2 / 780.2 / 780.2 / 780.2**。
- REG: **1/468.1 / 431.2 / 399.6 / 381.0 / 364.1 / 334.4**。
- 合算: **1/215.6 / 204.8 / 195.0 / 190.5 / 184.1 / 176.2**。
- S-BIG **約416枚** / N-BIG **約312枚** / REG **約104枚**。
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`。
- 天井: **非搭載**。

### resetBehavior v0.7

- 天井・規定Gモード・AT/ART/CZ状態はノーマル機のため `NOT_APPLICABLE`。
- `gameCounterReset`: `NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_MODE`。
- `ceilingAfterReset`: `NOT_APPLICABLE_NO_CEILING`。
- `modeAfterReset`: `NOT_APPLICABLE_NO_GAME_NUMBER_MODE`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 設定変更専用の短縮天井・朝一モード・CZ/AT恩恵等: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の純電源OFF→ON時のリール/WIN告知ランプ/表示契約: `UNVERIFIED_AFTER_RESEARCH`。
- ガックン等の変更判別: 表記・型式・検索語・資料系統を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- 兄弟機TRADや他ヤーマ機の挙動は転記しない。

## conflicts

- 機械割は市場掲載 **96.5～107.5%** とパチマガスロマガの明示的なシミュレート値 **97.10～105.71%** が存在。`DEFINITION_DIFFERENCE_NOT_NUMERIC_AVERAGING` として分離保持。

## 2015-03-09群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:

- TRAD — ヤーマ — **No.874**
- TRAD480 — ヤーマ — **No.875**

重複/日付注意:

- パチスロ ベルセルク — No.873。K-Naviのみ03/09表記だがcanonical 03/02 + CONFLICTとして既処理済み。
- アナザーゴッドハーデス-奪われたZEUSver.- — 03/09検索ヒットは777TOWN配信。実ホール導入機として再登録しない。

## 次回再開地点

1. **recordCount 875 / chronologicalFrontier 2015-03-09 / 03-09_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.875を再確認。
3. **2015-03-10～03-15境界監査**を行い、地域先行・小規模メーカー・別日導入を含む具体日付き未処理5号機を確認する。
4. 境界追加がなければ次の強いアンカー **2015-03-16** へ進む。
5. 03/16の既知候補 **コブラ（SNKプレイモア）** はK-Navi・パチ7・HAZUSEが2015-03-16で一致。未登録なら次候補として処理する。
6. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、公式・業界一次・当時解析・古いDB・アーカイブ・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・兄弟機・後継機のリセット契約を転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### TRAD480
- HAZUSE: https://hazuse.com/machine/pachislot/4S1081/
- パチマガスロマガ 機種TOP: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/17/a.php
- パチマガスロマガ ボーナス確率・PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/17/h.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/trad480/
- P-WORLD: https://www.p-world.co.jp/machine/database/7643

### 次候補 / 境界
- K-Navi コブラ: https://p-kn.com/slot/2207/
- パチ7 コブラ: https://pachiseven.jp/machines/4412/cutout/74
- HAZUSE コブラ: https://hazuse.com/machine/pachislot/3S0862/
