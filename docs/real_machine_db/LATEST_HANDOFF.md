# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **874**
- latestRecordAdded: **TRAD**（ヤーマ）
- latestRecord: `docs/real_machine_db/machines/2015-03-09_trad.md`
- chronologicalFrontier: **2015-03-09**
- frontierLatestMachine: **TRAD**（ヤーマ）
- schema: **resetBehavior v0.7**
- status: **2015-03-09_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.873 `2015-03-02_pachislot-berserk.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **873件 / chronologicalFrontier 2015-03-02 / 03-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2015-03-03～03-08境界監査**を実施。地域先行・小規模メーカー・別日導入を含め検索したが、今回具体日付き未処理5号機を固定できず `CLOSED_FOR_CURRENT_RESEARCH`。
- 次の強いアンカー **2015-03-09** へ進み、ヤーマ **TRAD（トラッドT2 / 4S1127）** をNo.874として追加。
- 同日候補 **TRAD480（トラッド480R2 / 4S1081）** は未処理のため03/09群はOPEN。
- ベルセルクのK-Navi03/09表記はNo.873の導入日CONFLICTとして既保存のため重複登録しない。

## No.874 — TRAD

- record: `docs/real_machine_db/machines/2015-03-09_trad.md`
- manufacturer: **ヤーマ**
- releaseDate canonical: **2015-03-09**
- modelName: **トラッドT2**
- inspectionNumber: **4S1127**
- systemType: **5号機 ノーマル / ボーナス主体**

### 性能コア

- 市場掲載機械割: **96.5 / 98.5 / 100.0 / 102.5 / 105.0 / 108.5%**。
- パチマガスロマガPAYOUTシミュレート値: **97.05 / 98.51 / 100.34 / 102.09 / 104.51 / 107.36%**。定義違いのため平均化しない。
- BIG: **1/287.4 / 277.7 / 273.1 / 268.6 / 260.1 / 252.1**。
- REG: **1/356.2 / 348.6 / 334.4 / 315.1 / 303.4 / 292.6**。
- 合算: **1/159.1 / 154.6 / 150.3 / 145.0 / 140.0 / 135.4**。
- BIG: **約312枚（312枚固定）**。
- REG: **約104枚（104枚固定）**。
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`。
- 天井: **非搭載**。

### resetBehavior v0.7

- 天井・規定Gモード・AT/ART/CZ状態はノーマル機のため `NOT_APPLICABLE`。
- `gameCounterReset`: `NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_MODE`。
- `ceilingAfterReset`: `NOT_APPLICABLE_NO_CEILING`。
- `modeAfterReset`: `NOT_APPLICABLE_NO_GAME_NUMBER_MODE`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 設定変更専用の短縮天井・朝一モード・CZ/AT恩恵等: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の純電源OFF→ON時のリール/表示契約: `UNVERIFIED_AFTER_RESEARCH`。
- ガックン等の設定変更判別: 検索語・資料系統を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- 同時期の他ヤーマ機や兄弟機TRAD480の挙動は転記しない。

## 2015-03-03～03-08境界 — CLOSED_FOR_CURRENT_RESEARCH

- `2015-03-03 / 03-04 / 03-05 / 03-06 / 03-07 / 03-08` の導入表記、2015年3月第1週、新台一覧、メーカー/機種DBを横断。
- 今回、03/02処理済み群と03/09候補群の間に具体日付き未処理5号機を固定できず。
- 後続資料で地域先行・小規模導入が判明した場合は遡及追加可。

## 2015-03-09群 — OPEN

処理済み:

- TRAD — ヤーマ — **No.874**

未処理の強い候補:

- **TRAD480 — ヤーマ — 型式トラッド480R2 / 検定4S1081 / HAZUSE導入開始2015-03-09**

重複注意:

- パチスロ ベルセルク — No.873。K-Naviのみ03/09表記だがcanonical 03/02 + CONFLICTとして既処理済み。

## 次回再開地点

1. **recordCount 874 / chronologicalFrontier 2015-03-09 / 03-09_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.874を再確認。
3. 次の未処理は **TRAD480（ヤーマ / トラッド480R2 / 4S1081）**。性能コア + resetBehavior v0.7を収集しNo.875として処理する。
4. TRAD480処理後、**2015-03-09同日群を全メーカー横断で再監査**。追加がなければ `CLOSED_FOR_CURRENT_RESEARCH`。
5. その後 **2015-03-10～03-15境界監査**へ進む。
6. `コブラ（SNKプレイモア）` はK-Navi・パチ7・HAZUSEが **2015-03-16** で一致しているため03/16候補を維持。
7. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、公式・業界一次・当時解析・古いDB・アーカイブ・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
8. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・兄弟機・後継機のリセット契約を転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### TRAD
- HAZUSE: https://hazuse.com/machine/pachislot/4S1127/
- パチマガスロマガ 機種TOP: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/16/a.php
- パチマガスロマガ ボーナス確率・PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/16/h.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/trad/

### 次候補 / 境界
- HAZUSE TRAD480: https://hazuse.com/machine/pachislot/4S1081/
- K-Navi コブラ: https://p-kn.com/slot/2207/
- パチ7 コブラ: https://pachiseven.jp/machines/4412/cutout/74
- HAZUSE コブラ: https://hazuse.com/machine/pachislot/3S0862/
