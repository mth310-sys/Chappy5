# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **871**
- latestRecordAdded: **スーパーラクラクビスカス**（パイオニア）
- latestRecord: `docs/real_machine_db/machines/2015-03-02_super-rakuraku-biscus.md`
- chronologicalFrontier: **2015-03-02**
- frontierLatestMachine: **スーパーラクラクビスカス**（パイオニア）
- schema: **resetBehavior v0.7**
- status: **2015-03-02_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.870 `2015-03-02_sengoku-collection-2.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **870件 / chronologicalFrontier 2015-03-02 / 03-02_GROUP_OPEN**。
- 前handoffで03/02候補として挙がっていた **コブラ（SNKプレイモア）** は、K-Navi/HAZUSE/当時資料を再照合すると **2015-03-16導入**で一致。03/02群から除外し、03/16到達時の未処理候補として保持。
- **スーパーラクラクビスカス**はパチ7で導入日2015-03-02を確認、パイオニア公式は2015年3月発売、業界記事は1月内覧会。No.871として追加。
- **パチスロサイバーブルー**はK-Navi/パチ7で2015-03-02導入を確認済み。次優先候補。
- **パチスロベルセルク**は資料競合あり。一撃/パチ7/後年整理は2015-03-02、K-Naviは2015-03-09。平均せず、次回は業界一次/当時導入資料で日付を追加固定してから登録する。

## No.871 — スーパーラクラクビスカス

- record: `docs/real_machine_db/machines/2015-03-02_super-rakuraku-biscus.md`
- manufacturer: **パイオニア**
- releaseDate: **2015-03-02**
- systemType: **5号機 ノーマルA / 完全告知 / 25φ**

### 性能コア

- 機械割: **98.0 / 99.0 / 102.0 / 104.0 / 106.0 / 110.0%**。
- BIG: **1/287 / 281 / 273 / 264 / 257 / 247**。
- REG: **1/458 / 417 / 368 / 332 / 300 / 276**。
- 合算: **1/176 / 168 / 156 / 147 / 138 / 130**。
- BIG **312枚** / REG **104枚**。
- 50枚ベースは `50枚 / 1000円 / ベース / コイン持ち / 通常時`、表記揺れ・メーカー名を変えて再探索したが比較可能な明示G数を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- P-WORLD、パチマガスロマガ、pacnk、当時解析で主要数値一致。

### resetBehavior v0.7

- AT/ART/CZ非搭載、規定ゲーム数解除なし、**天井・ゾーンなし**。
- gameCounterReset / ceilingAfterReset / 内部規定Gモード / 有利区間は `NOT_APPLICABLE`。
- 設定変更専用の朝一恩恵・不利・短縮天井・公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有のガックン、リール位置、告知モード初期化、純電源OFF→ON時の筐体レベル挙動は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 他パイオニア機・ハナハナ系のガックン契約は転記しない。

## 2015-03-02群 — OPEN

現時点での処理状況:

- 戦国コレクション2 — KPE — **No.870処理済み**
- スーパーラクラクビスカス — パイオニア — **No.871処理済み**
- パチスロサイバーブルー — 三洋物産 — **03/02導入を複数系統で確認、未処理**
- パチスロベルセルク — 七匠 — **03/02 vs 03/09の導入日CONFLICTを追加監査してから処理**
- コブラ — SNKプレイモア — **03/02候補から除外。K-Navi/HAZUSEで03/16導入**

## 次回再開地点

1. **recordCount 871 / chronologicalFrontier 2015-03-02 / 03-02_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.871を再確認。
3. 次処理優先: **パチスロサイバーブルー（三洋物産）**。K-Navi/パチ7で03/02導入確認済み。No.872候補として性能コア + resetBehavior v0.7を収集。
4. その後 **パチスロベルセルク（七匠）** の導入日競合を公式/業界一次/当時DBで再監査。03/02または03/09をcanonical固定し、CONFLICTを平均せず保持して登録。
5. 03/02同日群を全メーカー再監査後にのみ `CLOSED_FOR_CURRENT_RESEARCH` 判定。
6. **コブラ（SNKプレイモア）は2015-03-16候補**として先送り。03/02へ入れない。
7. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、メーカー公式・業界・当時解析・古いDB・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
8. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・後継機のリセット契約を転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### スーパーラクラクビスカス
- パイオニア公式2015年製品一覧: https://www.slot-pioneer.co.jp/products/2015.html
- パイオニア公式発売告知: https://www.slot-pioneer.co.jp/information/super_rakuraku.html
- PiDEA: https://www.pidea.jp/articles/%E3%83%91%E3%82%A4%E3%82%AA%E3%83%8B%E3%82%A2%E3%80%8C%E3%83%93%E3%82%B9%E3%82%AB%E3%82%B9%E3%80%8D%E3%81%AF%E7%9B%AE%E6%8A%BC%E3%81%97%E6%A5%BD%E3%80%85
- P-WORLD: https://www.p-world.co.jp/machine/database/7625
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/112/h.php
- パチ7: https://pachiseven.jp/machines/4398/cutout/92
- pacnk: https://pacnk.com/slot/2015/superrakurakubisu/top.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/super-rakuraku/

### 日付修正 / 次候補
- コブラ K-Navi: https://p-kn.com/slot/2207/
- コブラ HAZUSE: https://hazuse.com/machine/pachislot/3S0862/
- サイバーブルー K-Navi: https://p-kn.com/slot/2215/
- サイバーブルー パチ7: https://pachiseven.jp/machines/4422/cutout/4
- ベルセルク K-Navi: https://p-kn.com/slot/2221/
- ベルセルク 一撃: https://1geki.jp/slot/berserk/
