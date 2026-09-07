# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **931**
- latestRecordAdded: **ハイスクールD×D**（KPE）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-02_high-school-dxd.md`
- chronologicalFrontier: **2015-11-02**
- frontierLatestMachine: **ハイスクールD×D**
- schema: **resetBehavior v0.7**
- status: **2015-11-02_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.930 `2015-11-02_girls-und-panzer.md` を再取得。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **930** / chronologicalFrontier **2015-11-02** / `2015-11-02_GROUP_OPEN`。
- handoff指定の次未処理 **ハイスクールD×D** をNo.931として追加。

## No.931 — ハイスクールD×D
- record: `docs/real_machine_db/machines/2015-11-02_high-school-dxd.md`
- manufacturer: **KPE**
- releaseDate: **2015-11-02**（KONAMI/KPE公式ブログが全国ホール稼働開始日を明記）
- generation/system: **5号機 ART / 周期CZ・疑似ボーナス経由 / 継続型+上乗せ型ART**
- formalModelName / inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### performanceCore
- 機械割: **96.9 / 98.1 / 99.9 / 104.1 / 107.1 / 112.7%**。
- ST+ART主要初当たり: **1/324.8 / 312.7 / 298.2 / 265.8 / 246.1 / 223.4**。別資料の1/324.7等は丸め差として注記。
- CZ突入率: **1/109.1 / 108.0 / 108.7 / 105.6 / 106.2 / 105.4**（補助値）。
- 50枚ベース: **約48G**。
- ART純増: **約2.0枚/G**。
- 疑似ボーナス「サービスタイム」: **30G / ART期待度約50%**。
- ART「ディアボロスドライブ」: **1セット40G+α / 継続期待度約70%**。
- 天井: **純ハズレ573回成立（実ゲーム数目安約1000G）→次回周期CZでサービスタイム確定**。

### resetBehavior v0.7
- 設定変更後は **最初の周期だけ専用周期G数振り分け**を使用。
- 公開専用値: 基準90G 10% / 120G 20% / 140G 20% / 150G 10% / 160G 20% / 180G 20%、その後 **+1～10G均等**で実周期G数を決定。
- 朝一第1周期が **90G以下 / 111～120G / 131～140G / 171～180G** なら据え置き濃厚とする当時解析あり。
- 設定変更後/ST後/DD後に共通する「1周期目」はCZ上位選択が優遇。CZ2+CZ3合算は設定1 **28%**、2 **22%**、3 **37%**、4 **28%**、5 **46%**、6 **46%**。
- **純ハズレ573回天井カウンタの設定変更時RESET/CARRYOVER、据え置き時の個別引継ぎ、純電源OFF→ON、CZ内部状態/高確状態の処理**は、初代固有の直接比較資料を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2022年D×D2の「設定変更で天井/有利区間/モードRESET・電源OFFで引継ぎ」は別世代・別機種のため一切流用していない。
- 設定変更専用の短縮天井・AT直撃保証: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リールガックン等の確定判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### source note / conflict
- ちょんぼりすた朝一周期表の120G行が「20G」表記だが、同表の割合構造・説明文から割合欄の誤植と判断できるため、原表記を注記したうえで20%として扱う。
- ST+ART初当たりはK-Navi 1/324.8等 vs すろぱちくえすと1/324.7等の丸め差を保持し、平均していない。

## 2015-11-02群 — OPEN
処理済み:
1. **パチスロ龍が如く OF THE END — No.928**
2. **ぱちスロAKB48 バラの儀式 — No.929**
3. **パチスロ ガールズ＆パンツァー — No.930**
4. **ハイスクールD×D — No.931**

未処理の強候補（順番維持）:
1. **銀河機攻隊 マジェスティックプリンス — D-light**
2. **パチスロ IS〈インフィニット・ストラトス〉 — SANKYO**
3. **ベルコ系を含む残りメーカーを全件監査**

- K-Navi / HAZUSEは **銀河機攻隊 マジェスティックプリンスを2015-11-02導入**と一致。HAZUSEで型式 **`パチスロマジェスティックプリンスS`** / 検定番号 **`5S0670`** も確認済み。次回はこれを先頭に処理する。
- 11/02群はまだCLOSEDにしない。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-11_demashita-hakushon-daimaou.md**
- retroQaNextInspection: **2005-12_nobunaga-no-yabou-tenka-sousei-r.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE / HAKUSHON_RESEARCH_RECONFIRMED_NO_NEW_DIRECT_RESET_EVIDENCE**
- 本線収集を優先し、今回QAカーソルは変更していない。

## 次回再開地点
1. **recordCount 931 / chronologicalFrontier 2015-11-02 / 11/02群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.931を再取得。
3. 本線: 次の未処理 **銀河機攻隊 マジェスティックプリンス（D-light）** を性能コア + resetBehavior v0.7で登録。
4. 続けて **IS〈インフィニット・ストラトス〉**、その後ベルコ系を含む11/02全メーカー監査。
5. 遡及QA: **`2005-12_nobunaga-no-yabou-tenka-sousei-r.md`** が次。既存性能判定とreset QAは分離管理。
6. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等で検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
7. 競合は平均せずCONFLICTとして双方保存。
8. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せずCONFLICT/定義差として双方保持。

## 主要出典 — 取得日 2026-09-08
### No.931 ハイスクールD×D
- KONAMI機種アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2015/haremking/
- KONAMI/KPE公式ブログ: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_151124.html
- グリーンべると: https://web-greenbelt.jp/00008063/
- K-Navi: https://p-kn.com/slot/2352/
- ちょんぼりすた: https://chonborista.com/slot/kpe-slot/11948/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/40/kpe_slot_40.php
- パチマガスロマガ CZ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/40/02-1.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/highschool-dd/
- P-WORLD: https://www.p-world.co.jp/machine/database/7846
- pacnk: https://pacnk.com/slot/tools/sh_highschooldd.html

### 次候補 銀河機攻隊 マジェスティックプリンス
- K-Navi: https://p-kn.com/slot/2343/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0670/
- すろぱちくえすと: https://www.slopachi-quest.com/article/majestic-prince/

## confidence
- No.931 exactReleaseDate: OFFICIAL_EXACT
- No.931 identityManufacturer: OFFICIAL
- No.931 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.931 resetFirstCycleDedicatedDistribution: ANALYSIS_HIGH_DIRECT_PERIOD_SOURCE
- No.931 resetFirstCycleCzDistribution: ANALYSIS_HIGH_DIRECT
- No.931 resetDetectionByFirstCycleGames: ANALYSIS_HIGH_SINGLE_DIRECT
- No.931 settingChangeCeilingCounterReset: UNVERIFIED_AFTER_RESEARCH
- No.931 purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
