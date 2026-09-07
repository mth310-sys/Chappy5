# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **873**
- latestRecordAdded: **パチスロ ベルセルク**（七匠 / NANASHOW）
- latestRecord: `docs/real_machine_db/machines/2015-03-02_pachislot-berserk.md`
- chronologicalFrontier: **2015-03-02**
- frontierLatestMachine: **パチスロ ベルセルク**（七匠）
- schema: **resetBehavior v0.7**
- status: **2015-03-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.872 `2015-03-02_pachislot-cyber-blue.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **872件 / chronologicalFrontier 2015-03-02 / 03-02_GROUP_OPEN**。
- 次未処理の **パチスロ ベルセルク（七匠）** をNo.873として追加。
- 03/02同日群を再監査し、戦国コレクション2 / スーパーラクラクビスカス / パチスロサイバーブルー / パチスロ ベルセルクの4機を処理済みとして `CLOSED_FOR_CURRENT_RESEARCH`。
- `コブラ（SNKプレイモア）` は一部後年一覧に03/02表記があるが、K-Navi・パチ7・HAZUSEが **2015-03-16** で一致し、当時事前資料も納品3/15予定。03/02へは入れず03/16候補を維持する。

## No.873 — パチスロ ベルセルク

- record: `docs/real_machine_db/machines/2015-03-02_pachislot-berserk.md`
- manufacturer: **七匠（NANASHOW）**
- releaseDate canonical: **2015-03-02**
- releaseDate conflict: **K-Navi 2015-03-09**
- modelName: **パチスロベルセルクS**（後年整理DB、公式/公的検定資料未固定）
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- systemType: **5号機 ART / 擬似ボーナス / CZ / 1G連ストック**

### 性能コア

- 機械割: **97.2 / 98.7 / 100.3 / 104.5 / 109.0 / 112.6%**。
- ART / 擬似ボーナス初当たり: **1/221.8 / 210.6 / 198.9 / 183.7 / 173.1 / 160.8**。
- 50枚ベース: **約32G**。
- 純増: **約2.3枚/G**。
- 斬魔BONUS: **40～200G**。
- バーサーカーBONUS: **40～200G+α**。
- ファルコンBONUS: **120～711枚**。
- 蝕BONUS: 約50枚のリアルボーナス。
- 狂戦士MODE(滅): **11G or 21G**。

### resetBehavior v0.7

- 設定変更時:
  - **天井Gリセット**
  - **通常モード再抽選**
  - **内部状態再抽選**
  - ベヘリットポイント規定数再抽選 / 蓄積数リセット
  - 液晶は森ステージ
- 電源OFF→ONのみ:
  - **天井G引継ぎ**
  - **モード・状態引継ぎ**
  - **ベヘリットポイント規定数・蓄積数とも引継ぎ**
  - 液晶のみ森ステージ
- 据え置きは上記電断契約と整合する `CARRY_OVER_CONFIRMED_VIA_POWER_CYCLE_CONTRACT`。
- モード別最大天井（最大32G前兆込み）: **通常A 1000G / 通常B 333G / 天国 100G**。
- 基礎到達G表記は **968 / 301 / 68G + 最大32G前兆**。定義差として保持。

#### 設定変更時・通常モード

- 設定1-3: 通常A75.0 / 通常B20.0 / 天国5.0%
- 設定4: 75.0 / 18.8 / 6.3%
- 設定5: 75.0 / 17.2 / 7.8%
- 設定6: 75.0 / 15.0 / 10.0%

#### 設定変更時・内部状態

- 設定1-3: 低確75.0 / 高確21.9 / 超高確3.1%
- 設定4: 66.7 / 30.2 / 3.1%
- 設定5: 59.4 / 37.5 / 3.1%
- 設定6: 50.0 / 46.9 / 3.1%

#### 設定変更時・BPモード

- 設定1-3: 通常A37.5 / 通常B25.0 / 通常C12.5 / 天国A18.8 / 天国B6.3%
- 設定4-6: 通常A21.7 / 通常B25.0 / 通常C20.0 / 天国A22.2 / 天国B11.1%

### 朝一変更判別

- 設定変更時、ベルこぼし目（ベル大V字）が出るまで **斜めリプレイが揃う挙動**を利用した当時の変更判別情報あり。対策時は不可。
- 設定変更 / 純電断とも液晶は森ステージのため、森ステージ単独では判別不可。
- 本機固有の一般的なガックン確定契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2015-03-02群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:

- 戦国コレクション2 — KPE — **No.870**
- スーパーラクラクビスカス — パイオニア — **No.871**
- パチスロサイバーブルー — 三洋物産 — **No.872**
- パチスロ ベルセルク — 七匠 — **No.873**

監査メモ:

- ベルセルクは03/02 vs 03/09の導入日CONFLICTを保持したまま03/02 canonical。
- コブラは03/16 canonicalを維持。孤立した03/02後年一覧値は現時点では採用しない。

## 次回再開地点

1. **recordCount 873 / chronologicalFrontier 2015-03-02 / 03-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.873を再確認。
3. **2015-03-03～03-08境界監査**を行う。地域先行・別日導入・小規模メーカー機を落とさない。
4. 境界に未処理がなければ **2015-03-09群**へ進む。
5. 現時点で03/09の強い次候補はヤーマ **TRAD（型式トラッドT2 / 検定4S1127）** と **TRAD480（型式トラッド480R2 / 検定4S1081）**。HAZUSEで双方2015-03-09導入を確認済み。全メーカー同日群監査後、最初の未処理をNo.874として処理する。
6. ベルセルクのK-Navi03/09表記は既処理CONFLICTなので重複登録しない。
7. `コブラ（SNKプレイモア）` は2015-03-16候補を維持。
8. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、公式・業界一次・当時解析・古いDB・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
9. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・後継機のリセット契約を転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### パチスロ ベルセルク
- PiDEA（発売発表 / 納品3/1予定）: https://www.pidea.jp/articles/%E4%B8%83%E5%8C%A0%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%20%E3%83%99%E3%83%AB%E3%82%BB%E3%83%AB%E3%82%AF%E3%80%8D%E6%96%B0%E8%A6%8F%E5%8F%82%E5%85%A5%E7%AC%AC1%E5%BC%BE
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2525/1/50340
- パチ&スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/2525/1/51151
- 一撃 TOP: https://1geki.jp/slot/berserk/
- 一撃 天井/設定変更: https://1geki.jp/slot/berserk/3/
- 一撃 モード移行: https://1geki.jp/slot/berserk/63/
- 一撃 状態移行: https://1geki.jp/slot/berserk/64/
- 一撃 BP: https://1geki.jp/slot/berserk/67/
- P-WORLD: https://www.p-world.co.jp/machine/database/7640
- K-Navi: https://p-kn.com/slot/2221/
- パチ7: https://pachiseven.jp/machines/4419/cutout/74
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nanashow_slot/01/c.php
- パチマガスロマガ 斬魔BONUS: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nanashow_slot/01/03.php
- すろぱちくえすと 朝一判別: https://www.slopachi-quest.com/article/berserk0-reset-check/

### 次候補 / 境界
- HAZUSE TRAD: https://hazuse.com/machine/pachislot/4S1127/
- HAZUSE TRAD480: https://hazuse.com/machine/pachislot/4S1081/
- K-Navi コブラ: https://p-kn.com/slot/2207/
- パチ7 コブラ: https://pachiseven.jp/machines/4412/cutout/74
- HAZUSE コブラ: https://hazuse.com/machine/pachislot/3S0862/
