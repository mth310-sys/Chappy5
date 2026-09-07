# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **876**
- latestRecordAdded: **パチスロコブラ**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2015-03-16_pachislot-cobra.md`
- chronologicalFrontier: **2015-03-16**
- frontierLatestMachine: **パチスロコブラ**（SNKプレイモア）
- schema: **resetBehavior v0.7**
- status: **2015-03-16_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.875 `2015-03-09_trad480.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **875件 / chronologicalFrontier 2015-03-09 / 03-09_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2015-03-10〜03-15境界を再探索し、今回具体日付きの未処理5号機を安全に固定できなかったため `CLOSED_FOR_CURRENT_RESEARCH`。
- 次アンカー2015-03-16の **パチスロコブラ** をNo.876として追加。
- SNK公式、HAZUSE、K-Navi、パチマガスロマガ、P-WORLD、パチビー、すろぱちくえすと、pacnkを横断。

## No.876 — パチスロコブラ

- record: `docs/real_machine_db/machines/2015-03-16_pachislot-cobra.md`
- manufacturer: **SNKプレイモア**
- releaseDate canonical: **2015-03-16**
- modelName: **パチスロコブラAB**
- inspectionNumber: **3S0862**
- systemType: **5号機 A+ART / CZ搭載**

### 性能コア

- 機械割: **97.2 / 99.0 / 100.3 / 104.7 / 109.3 / 114.8%**。
- BIG: **1/422.8 / 414.7 / 402.0 / 394.8 / 381.0 / 368.1**。
- REG: **1/642.5 / 618.2 / 595.7 / 574.8 / 546.1 / 524.2**。
- ART初当たり: **1/449.2 / 415.7 / 408.4 / 343.3 / 314.3 / 257.1**。
- CZ初当たり: **1/690.83 / 632.68 / 635.86 / 556.10 / 555.34 / 468.34**。
- 50枚ベース: **約31G**。
- ART純増: **約1.6枚/G**。
- BIG約204枚 / REG約36枚 / PREMIUM BONUS約36枚。
- ART「BIG BANG RUSH」: **50G or 315G**。
- 通常天井: **ボーナス間1315G**。ARTを挟んでもボーナス間天井Gはリセットされない。

### resetBehavior v0.7

- 設定変更時は通常1315G天井進捗をリセットし、**100G / 500G / 1315G** のリセット専用天井を再選択。
- 設定1・2: **100G 6.0% / 500G 20.0% / 1315G 74.0%**。
- 設定3・4: **100G 7.5% / 500G 20.0% / 1315G 72.5%**。
- 設定5・6: **100G 10.0% / 500G 20.0% / 1315G 70.0%**。
- 設定変更後500G以内天井選択率: **26.0% / 27.5% / 30.0%**（設定1-2 / 3-4 / 5-6）。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 据え置き跨ぎの天井G契約、純電源OFF→ON、設定変更時内部状態、ガックン等は検索語・資料系統を変えた再探索後も本機固有直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## conflicts

- 導入日はK-Navi・HAZUSE・パチ7・パチビーが **2015-03-16** で一致。SNK公式も2015年3月稼働予定。
- 一部後年まとめに **2015-03-02** 表記があるが、多数の機種別資料と不一致のため低信頼競合としてレコード内に保持しcanonicalへ採用しない。

## 2015-03-16群 — OPEN

処理済み:

- パチスロコブラ — SNKプレイモア — **No.876**

同日未処理の強い候補:

- **BLACK LAGOON2 / パチスロ ブラックラグーン2** — スパイキー — 2015-03-16。複数機種資料で一致。
- **麻雀物語3 役満乱舞の究極大戦** — オリンピア — 2015-03-16候補。次回、具体日と既存登録有無をmainで再確認して重複回避する。

## 次回再開地点

1. **recordCount 876 / chronologicalFrontier 2015-03-16 / 03-16_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.876を再確認。
3. 03/16同日群の既存レコードを検索し、未登録なら **BLACK LAGOON2（スパイキー）** を次に処理する。
4. 続いて麻雀物語3など03/16同日群を全メーカー横断で監査し、群をCLOSEDにしてから次日へ進む。
5. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、公式・業界一次・当時解析・古いDB・アーカイブ・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・兄弟機・後継機のリセット契約を転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### パチスロコブラ
- SNKプレイモア公式: https://slot.snk-corp.co.jp/official/cobra/
- HAZUSE: https://hazuse.com/machine/pachislot/3S0862/
- K-Navi: https://p-kn.com/slot/2207/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/49/snk_slot_49.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7637
- パチビー: https://www.pachibee.jp/machines/lecture/215020002
- すろぱちくえすと: https://www.slopachi-quest.com/article/cobra/
- pacnk: https://pacnk.com/slot/tools/sh_cobra2015.html

### 次候補 / 境界
- BLACK LAGOON2: https://pachinavi.net/machines/black-lagoon-2/
