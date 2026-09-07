# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **923**
- latestRecordAdded: **パチスロ 地獄少女**（藤商事）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-19_jigoku-shoujo.md`
- chronologicalFrontier: **2015-10-19**
- frontierLatestMachine: **パチスロ 地獄少女**
- frontierRecord: `docs/real_machine_db/machines/2015-10-19_jigoku-shoujo.md`
- schema: **resetBehavior v0.7**
- status: **2015-10-19_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.922 `2015-10-13_beast-busters.md` を再読。
- INDEXは19件時点の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount 922 / chronologicalFrontier 2015-10-13 / `2015-10-13_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
- 10/14〜10/18境界は前回監査済みCLOSEDを確認し、handoff指定の次の具体日 **2015-10-19** へ進行。
- GitHub既存レコードで初代「パチスロ 地獄少女」が未登録であることを確認し、No.923として追加。

## No.923 — パチスロ 地獄少女

- record: `docs/real_machine_db/machines/2015-10-19_jigoku-shoujo.md`
- manufacturer: **藤商事**
- releaseDate: **2015-10-19**
- generation/system: **5号機 A+ART / ゲーム数管理ART + CZ + 疑似ボーナス**
- formalModelName: **地獄少女FSA**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### performanceCore

- 機械割: **97.5 / 99.5 / 101.5 / 104.0 / 108.0 / 112.5%**。
- ART初当たり: **1/374 / 353 / 334 / 325 / 299 / 271**。藤商事公式とも一致。
- 50枚ベース: **約39G**（39.2G表記資料あり）。
- ART「地獄流し」純増: **約2.3枚/G**。
- ART基本: **1セット50G+α**。開始50G or 100G表記資料もあるが、共通比較値は50G+α。
- 疑似BIG / SUPER BIG / ゆずきBONUS: 各40G（平均上乗せ約50G / 約100G / 約100G）。
- 天井: 詳細解析では **ART間970G + 前兆最大32G = 最大1002G**。一部資料の999G表記は `CEILING_PRESENTATION_DIFFERENCE_999_VS_970_PLUS_32` として保持。

### resetBehavior v0.7

- 設定変更: **天井ゲーム数RESET / 内部モード再抽選**。
- 据え置き: 天井進捗・内部モード **CARRYOVER_SUPPORTED**。
- 純電源OFF→ON: 当時解析の直接比較表で **天井ゲーム数引継ぎ / 内部モード引継ぎ**。
- 朝一開始ステージ: 設定変更・電源OFF→ONとも **学校 or 街（商店街）**。開始ステージ単独では変更判別不可。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。ART終了後の通常モード移行表をリセット専用値へ流用しない。
- 設定変更時の低確/高確/超高確初期振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目/ランプ等: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### 公開朝一数値

- 期待値見える化の新台初日1回目実践サンプルでは **30G以内初当たり 2/356**。
- 同資料はリセット後天国ゾーン・偶数百GゾーンがART後より強い挙動を示さないと評価。
- これは内部解析による設定変更専用当選率ではないため `EMPIRICAL_RESET_SAMPLE` として分離し、リセットモード振り分けには使用しない。

### conflicts / missing

- 天井: **999G** vs **970G+前兆最大32G=最大1002G**。定義差として平均しない。
- formalModelNameは後年実機流通資料で **地獄少女FSA** を複数確認。
- inspectionNumberは型式/検定/メーカー/導入日へ検索語を変更し再探索後も安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 時系列境界監査

### 2015-10-13群
- No.922 ビーストバスターズまで処理済み。
- **2015-10-13_GROUP_CLOSED_FOR_CURRENT_RESEARCH** 維持。

### 2015-10-14〜10-18
- 前回の各日付・月間新台・メーカー横断監査を確認。
- **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH** 維持。

### 2015-10-19群
処理済み:
1. **パチスロ 地獄少女 — No.923**

- status: **GROUP_OPEN**。
- 次候補として既に強く確認されている **パチスロ デッドマン・ワンダーランド（北電子）** を次に処理する。
- 候補だけに限定せず、10/19全メーカーを再監査してからCLOSED判定する。

## 遡及 resetBehavior QA

- 今回は時系列新規収集を優先し、retroQaCursorは推測で前進させていない。
- retroQaStatus: **CURSOR_RESOLUTION_PENDING / NO_FALSE_PROGRESS**。

## 次回再開地点

1. **recordCount 923 / chronologicalFrontier 2015-10-19 / 2015-10-19_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.923を再取得。
3. 次の未処理機種 **パチスロ デッドマン・ワンダーランド（北電子）** を同じv0.7仕様で調査・登録する。
4. その後10/19同日群をメーカー横断再監査する。
5. 10/19群を閉じる前に **STEINS;GATE、機甲戦記ドラグナー** 等の10月後半機の正確な導入日境界を再確認する。
6. 遡及QAは長州力の次の実未処理resetBehaviorレコードをリポジトリ実体から特定して補完。カーソルを推測で飛ばさない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せずCONFLICT/定義差として双方保持。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 主要出典 — 取得日 2026-09-08

### No.923 パチスロ 地獄少女
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_jigoku/
- 娯楽産業: https://www.goraku-sangyo.com/%E8%97%A4%E5%95%86%E4%BA%8B%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%9C%B0%E7%8D%84%E5%B0%91%E5%A5%B3%E3%80%8D%E7%99%BA%E8%A1%A8/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/11673/
- 期待値見える化 朝一リセット: https://slotjin.com/slot/jigoku-reset/
- 期待値見える化 天井・モード: https://slotjin.com/zone/jigoku/
- スロット新台速報: https://pachislo-data.com/fuji/18817
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/18/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7834
- SPARK（型式表記）: https://spark777.jp/%E3%80%8E%E8%97%A4%E5%95%86%E4%BA%8B%E3%80%8F%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%9C%B0%E7%8D%84%E5%B0%91%E5%A5%B3%E3%80%90%E3%82%B3%E3%82%A4%E3%83%B3%E4%B8%8D%E8%A6%81%E6%A9%9F%E3%82%BB%E3%83%83/

### 次時系列候補
- デッドマン・ワンダーランド: https://p-kn.com/slot/2345/

## confidence

- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelName: SECONDARY_MULTI_SOURCE
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- performanceCore: OFFICIAL_AND_ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON_MULTI_SOURCE
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetModeNumericData: UNVERIFIED_AFTER_RESEARCH
- empiricalResetSample: ANALYSIS_EMPIRICAL_SAMPLE_NOT_INTERNAL_RATE
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- retroQaCursor: CURSOR_RESOLUTION_PENDING
