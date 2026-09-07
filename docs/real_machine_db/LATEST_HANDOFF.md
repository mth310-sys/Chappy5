# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **929**
- latestRecordAdded: **ぱちスロAKB48 バラの儀式**（京楽産業.）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-02_akb48-bara-no-gishiki.md`
- chronologicalFrontier: **2015-11-02**
- frontierLatestMachine: **ぱちスロAKB48 バラの儀式**
- schema: **resetBehavior v0.7**
- status: **2015-11-02_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.928 `2015-11-02_ryu-ga-gotoku-of-the-end.md` を再取得。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **928** / chronologicalFrontier **2015-11-02** / `2015-11-02_GROUP_OPEN`。
- handoff指定の次未処理 **ぱちスロAKB48 バラの儀式** をNo.929として追加。

## No.929 — ぱちスロAKB48 バラの儀式
- record: `docs/real_machine_db/machines/2015-11-02_akb48-bara-no-gishiki.md`
- manufacturer: **京楽産業.**
- releaseDate: **2015-11-02**（京楽公式の全国導入開始日）
- generation/system: **5号機 A+ART / ゲーム数上乗せ型ART**
- formalModelName / inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### performanceCore
- 機械割 canonical: **97.4 / 99.0 / 100.2 / 103.9 / 107.1 / 111.2%**。
- ボーナス合算: **1/297.9 / 293.9 / 282.5 / 265.3 / 255.0 / 242.7**。
- ART初当たり canonical: **1/404.8 / 393.1 / 386.4 / 356.8 / 326.6 / 278.5**。
- 50枚ベース: **約33.9G**。
- ART「神曲RUSH」純増: **約1.5枚/G**。
- BIG約**200枚**、REG/じゃんけんBONUS約**48枚**。
- 通常天井: **ボーナス・ART間999G → ART**。

### resetBehavior v0.7
- 設定変更: **天井RESET / 内部モード・ゲーム数シナリオ再抽選 / シナリオB以上**。
- 純電源OFF→ON: **天井ゲーム数・内部モードCARRYOVER**。ステージは当時資料で「調査中」→ `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き: 純電断直接比較と宵越し文脈から **天井進捗・内部モード CARRYOVER_SUPPORTED**。据え置きと純電断は別項目として保持。
- リセット専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。999Gを0から再カウント。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一変更判別: 数Gで高確示唆ステージ移行なら変更可能性上昇。確定ではない。本機固有ガックン等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### 公開朝一数値
- 設定変更時シナリオ:
  - 設定1/3/5: **B65% / C35%**
  - 設定2/4/6: **B15% / C85%**
  - A: **0%**
- 96G状態移行:
  - B: **高確60% / 超高確40%**
  - C: **高確30% / 超高確70%**
- 480G:
  - B: **75/25%**、C: **10/90%**（高確/超高確）
- 777G:
  - B: **50/50%**、C: **10/90%**。
- 具体振り分けは現存する単一解析系統のため `ANALYSIS_SINGLE_DIRECT_NUMERIC`。

### conflicts / missing
- `PAYOUT_SETTING1_97_4_VS_98_2`: 設定1 97.4% vs 98.2%。平均せず97.4%をcanonical。
- `ART_INITIAL_HIT_EXACT_TABLE_VS_ALTERNATE_SERIES`: 1/404.8〜1/278.5 vs 1/401〜1/277。平均せず双方保持。
- formalModelName / inspectionNumber / resetImmediateStateAt0G / powerCycleStageDisplay: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetectionDedicatedCue: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 2015-11-02群 — OPEN
処理済み:
1. **パチスロ龍が如く OF THE END — No.928**
2. **ぱちスロAKB48 バラの儀式 — No.929**

未処理の強候補（順番維持）:
1. **パチスロガールズ＆パンツァー — 平和/オリンピア**
2. **ハイスクールD×D — KPE**
3. **銀河機攻隊 マジェスティックプリンス — D-light**
4. **パチスロ IS〈インフィニット・ストラトス〉 — SANKYO**
5. **ベルコ系を含む残りメーカーを全件監査**

- ガールズ＆パンツァーはK-Navi等で **2015-11-02ホール導入開始**を事前確認済み。
- 11/02群はまだCLOSEDにしない。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-10_devilman3.md**
- retroQaNextInspection: **2005-11_demashita-hakushon-daimaou.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE / NOT_ADVANCED_THIS_RELAY**
- 本線時系列収集を優先。既収集なら重複更新しない。

## 次回再開地点
1. **recordCount 929 / chronologicalFrontier 2015-11-02 / 11/02群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.929を再取得。
3. 本線: 次の未処理 **パチスロガールズ＆パンツァー（平和/オリンピア）** を性能コア + resetBehavior v0.7で登録。
4. 続けて **ハイスクールD×D → マジェスティックプリンス → IS〈インフィニット・ストラトス〉**、その後ベルコ系を含む11/02全メーカー監査。
5. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等で検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
6. 競合は平均せずCONFLICTとして双方保存。
7. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せずCONFLICT/定義差として双方保持。

## 主要出典 — 取得日 2026-09-08
### No.929 ぱちスロAKB48 バラの儀式
- 京楽産業.公式: https://www.kyoraku.co.jp/news/20151102.php
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/12160/
- pacnk: https://pacnk.com/slot/tools/sh_akb482015.html
- K-Navi: https://p-kn.com/slot/

## confidence
- No.929 exactReleaseDate: OFFICIAL_PLUS_MULTI_SOURCE_HIGH
- No.929 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.929 payoutRate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING1_CONFLICT
- No.929 initialHit: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT
- No.929 settingChangeBehavior: ANALYSIS_HIGH_DIRECT_RESET_COMPARISON
- No.929 carryOverBehavior: ANALYSIS_HIGH_SUPPORTED_BY_PURE_POWER_AND_OVERNIGHT_CONTEXT
- No.929 purePowerCycleBehavior: ANALYSIS_SINGLE_DIRECT_COMPARISON
- No.929 resetScenarioNumeric: ANALYSIS_SINGLE_DIRECT_NUMERIC
- No.929 resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- No.929 formalIdentity: UNVERIFIED_AFTER_RESEARCH
