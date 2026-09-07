# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **869**
- latestRecordAdded: **スーパービンゴNEO-30**（ベルコ）
- latestRecord: `docs/real_machine_db/machines/2015-02-23_super-bingo-neo-30.md`
- chronologicalFrontier: **2015-02-23**
- frontierLatestMachine: **スーパービンゴNEO-30**（ベルコ）
- schema: **resetBehavior v0.7**
- status: **2015-02-23_GROUP_CLOSED_FOR_CURRENT_RESEARCH / NEXT_BOUNDARY_2015-02-24_TO_2015-03-01**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.868 `2015-02-23_hanabi.md` を再読。
- INDEXは旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **868件 / chronologicalFrontier 2015-02-23 / 02-23_GROUP_OPEN**。
- 前handoff指定のベルコ **「スーパービンゴNEO-30 / スーパービンゴネオS2-30」** を30φ固有資料で調査しNo.869として追加。
- 25φ「スーパービンゴNEO」の2014-10-20導入情報を30φへ自動転記せず、HAZUSE 30φ固有型式の2015-02-23とK-Navi「2月下旬」を採用。
- 02/23群を再監査し、現時点の具体日付き未処理パチスロを追加で固定できなかったため `2015-02-23_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。

## No.869 — スーパービンゴNEO-30

- record: `docs/real_machine_db/machines/2015-02-23_super-bingo-neo-30.md`
- manufacturer: **ベルコ**
- releaseDate: **2015-02-23**
- modelName: **スーパービンゴネオS2-30**
- inspectionNumber: **4S0463**
- systemType: **5号機 AT / CZ / 周期抽選 / 30φ**

### 性能コア

- AT初当たり: **1/337.6 / 321.4 / 302.1 / 277.6 / 252.9 / 230.0**。
- 機械割: **97.0 / 98.8 / 100.2 / 104.3 / 108.6 / 113.1%**。
- AT「ビンゴチャンス」: **約2.8枚/G、初期33G以上+α**。
- 通常時は周期抽選＋CZ「THEセグ」。
- 天井: **モードA 999G / モードB 444G(+前兆)**。
- 50枚ベースは30φ固有の安全な直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。25φの値は転記しない。

### resetBehavior v0.7

- HAZUSE 30φ固有解析で、**設定変更時・AT終了時に内部モード移行抽選**を確認。
- 設定変更時モード振り分け: **A約65% / B約35%**。
- **A=999G / B=444G(+前兆)**。固定一律短縮ではなく、約35%で短い天井側が選ばれる朝一公開数値として保存。
- 設定変更時の内部高確/低確初期振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の天井G・モード・状態・周期進捗: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更なし電源OFF→ONの天井G・モード・状態・周期進捗: `UNVERIFIED_AFTER_RESEARCH`。
- 30φ固有のBETランプ/ガックン変更判別契約: `UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH`。25φのBETランプ判別情報は転記しない。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### 欠損再探索

- 表記揺れ: `スーパービンゴNEO-30 / スーパービンゴネオS2-30 / SUPER BINGO NEO 30φ / ビンゴネオ30 / 4S0463 / ベルコ`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 444G / 999G / モードA/B / 高確 / 周期 / ガックン / BETランプ / 3BET / 50枚 / 1000円 / ベース`。
- 資料系統: HAZUSE 30φ固有DB、P-WORLD 30φ固有DB、K-Navi導入カレンダー、K-Navi 25φ当時攻略（比較のみ）、後年解析DB。

## release-date / source scope 注意

- HAZUSE 30φ固有: **2015-02-23**。
- K-Navi 30φ: **2015年2月下旬**。
- pacnk 30φ型式ページは **2014年10月** とするが、25φの導入年月混入可能性が高い。`SOURCE_DATE_SCOPE_WARNING_PACNK_2014_10_LIKELY_25PHI_BASE_DATE_ON_30PHI_PAGE` として残し、releaseDateには採用しない。
- 25φ「スーパービンゴNEO」2014-10-20を本30φレコードの日付へ統合しない。

## 2015-02-23群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
- No.868 **ハナビ**（アクロス）
- No.869 **スーパービンゴNEO-30**（ベルコ）

- K-Naviでは02/23「ハナビ」＋2月下旬「スーパービンゴNEO-30」。HAZUSEが30φを02/23へ具体化。
- 現時点で安全に追加できる別の02/23具体日付き未処理パチスロを固定できなかった。

## 次回再開地点

1. **recordCount 869 / chronologicalFrontier 2015-02-23 / 02-23_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.869 を再確認。
3. **2015-02-24～2015-03-01境界監査**。全国導入・地域先行・別日導入を区別して未処理5号機を探索。
4. 境界がCLOSEDなら **2015-03-02同日群を全メーカー横断で洗い出し**。
5. 現時点の強い03/02アンカー: **戦国コレクション2（KPE）**、**パチスロサイバーブルー（三洋物産）**。同日群全件を先に確認して最初の未処理機種からNo.870へ進む。
6. 新規機では性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ・型式・メーカー/シリーズ名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、複数資料系統を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生30φ導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・後継機・25φ/30φ派生を混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### スーパービンゴNEO-30
- HAZUSE 30φ: https://hazuse.com/machine/pachislot/4S0463/
- HAZUSE 30φ AT/ART: https://hazuse.com/machine/pachislot/4S0463/genre/209/
- HAZUSE 30φ 設定推測: https://hazuse.com/machine/pachislot/4S0463/genre/208/
- P-WORLD 30φ: https://www.p-world.co.jp/machine/database/7564
- K-Navi 2015年2月導入カレンダー: https://p-kn.com/calendar/201502/
- K-Navi 25φ（比較資料のみ）: https://p-kn.com/slot/2106/
- pacnk 30φ型式ページ（性能補助照合、導入年月は不採用）: https://pacnk.com/slot/tools/sh_superbingoneos2.html

### 次候補
- K-Navi 戦国コレクション2: https://p-kn.com/slot/2201/
- K-Navi パチスロサイバーブルー: https://p-kn.com/slot/2215/
