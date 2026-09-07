# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **948**
- latestRecordAdded: **ペガッパ（PEGAPPA）**（エマ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-01-18_pegappa.md`
- chronologicalFrontier: **2016-01-18**
- frontierLatestMachine: **ペガッパ（PEGAPPA）**
- schema: **resetBehavior v0.7**
- status: **2016-01-18_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.947 `2016-01-18_gundam-kakusei-chained-battle.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **947** / chronologicalFrontier **2016-01-18** / 01-18群OPEN。
- mainにペガッパの先行レコードがないことを確認してNo.948を追加。

## No.948 — ペガッパ（PEGAPPA）
- record: `docs/real_machine_db/machines/2016-01-18_pegappa.md`
- manufacturer: **エマ**
- releaseDate canonical: **2016-01-18**
- formalModelName: **ペガッパZ**
- inspectionNumber: **5S0947**
- generation/system: **5号機 / ノーマルAタイプ / 完全告知 / 技術介入**

### performanceCore
- 機械割: **97.5 / 99.8 / 103.1 / 106.0 / 108.6 / 112.0%**。
- BIG: **1/315.1 / 300.6 / 287.4 / 275.3 / 264.2 / 252.0**。
- REG: **1/474.9 / 431.1 / 394.8 / 364.8 / 337.8 / 312.1**。
- 合算: **1/189.4 / 177.1 / 166.3 / 156.8 / 148.3 / 139.4**。
- BIG最大 **311枚** / REG最大 **111枚**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。当時解析でもコイン持ち「調査中」の資料が残る。
- 天井: **非搭載**。
- netIncrease: **NOT_APPLICABLE_NORMAL_TYPE**。

### resetBehavior v0.7
- 天井/ゲーム数モード/AT・ART状態: **NOT_APPLICABLE_NORMAL_TYPE**。
- settingChange dedicated ceiling/mode/state benefit: **NONE_CONFIRMED_AFTER_RESEARCH**。
- carryOver dedicated ceiling/mode behavior: **NOT_APPLICABLE**。
- purePowerCycle machine-specific display/state behavior: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一リセット恩恵/不利の公開契約: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有ガックン・初期出目・ランプ等の変更判別契約: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ノーマル機の成立役/ボーナス内部成立等、実機完全再現向け内部契約は収集対象外。

### conflicts
- `RELEASE_DATE_MONTH_CONFLICT`:
  - 当時解析複数: **2016-01-18導入**。
  - P-WORLD: **2015年12月導入開始**（月単位）。
  - PiDEA Xの東京都検定告示日は **2015-11-16**。検定日とホール導入日は分離。
  - chronological canonicalは具体日付き複数資料の2016-01-18。
- `REG_SETTING4_PRECISION_CONFLICT`:
  - pacnk: **1/364.10**。
  - pachislo-data: **1/364.8**。
  - 平均化せず精度差として保持。

## 2016-01-18群 — CLOSED_FOR_CURRENT_RESEARCH
今回までに具体日付きで処理した同日パチスロ:
1. **戦国乙女2～深淵に輝く気高き将星～** — オリンピア — No.946。
2. **パチスロ 機動戦士ガンダム 覚醒 -Chained battle-** — ビスティ — No.947。
3. **ペガッパ（PEGAPPA）** — エマ — No.948。

### group audit
- HAZUSE/当時解析/新台一覧系を「2016-01-18」「1月18日導入」「メーカー別」へ検索語を変えて再監査。
- 上記3機以外に、2016-01-18を全国ホール初導入日として複数/具体日資料で固定できる未登録5号機を今回追加発見できなかった。
- `2016-01-18_GROUP_CLOSED_FOR_CURRENT_RESEARCH` とし、次の具体日2016-01-25へ進む。

## 次の具体日 — 2016-01-25
- 強い先頭候補: **ラッキージャックポット**（岡崎産業）。
- ちょんぼりすた: 2016-01-25導入、ノーマルタイプ、約46G/50枚、約1,000台。
- HAZUSE: 2016-01-25導入、型式 **ラッキージャックポットL1**、検定番号 **5S0799**。
- 次回は同機から性能コア + resetBehavior v0.7を登録し、その後1/25群を全メーカー横断監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_dokonjo-gaeru-s.md**
- retroQaNextInspection: **2006-01_birei2.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 既存性能コアを不用意にやり直さず、余力リレーでresetBehavior欠損のみ順次補完する。

## 次回再開地点
1. **recordCount 948 / chronologicalFrontier 2016-01-18 / 01-18群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.948をmainから再取得。
3. **2016-01-25「ラッキージャックポット」（岡崎産業）** を先頭に性能コア + resetBehavior v0.7で登録する。
4. 1/25同日群をメーカー横断で監査し、未処理機を導入日順に漏れなく処理する。
5. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与する。
6. 競合は平均せずCONFLICT/定義差として双方保存。
7. main先行レコードを見つけた場合は重複作成せず、その次の未処理機へ進む。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 検定日/認定日/発表日/納品予定日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- COMPLETE_COREは性能コアの従来判定として保持し、reset QA状態は別管理する。

## 主要出典 — 取得日 2026-09-08
### No.948 ペガッパ
- P-WORLD: https://www.p-world.co.jp/machine/database/7924
- pachislo-data: https://pachislo-data.com/other/22709
- すろぱちくえすと: https://www.slopachi-quest.com/article/pegappa/
- 時給2000円生活 2016年1月: https://jikyu2000.com/2016/01/
- pacnk: https://pacnk.com/slot/tools/sh_pegappa2015.html
- PiDEA X 5号機設置期限一覧: https://www.pidea.jp/articles/1620982702
- パチセブン回顧: https://pachiseven.jp/articles/detail/11917

### 2016-01-25 次候補
- ちょんぼりすた ラッキージャックポット: https://chonborista.com/slot/okazaki-slot/16194/
- HAZUSE ラッキージャックポット: https://hazuse.com/machine/pachislot/5S0799/

## confidence
- No.948 identity/formalModel/inspectionNumber: INDUSTRY_DATABASE_HIGH
- No.948 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MONTH_CONFLICT
- No.948 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_EXCEPT_BASE
- No.948 baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- No.948 ceiling: ANALYSIS_HIGH_MULTI_SOURCE_NO_CEILING
- No.948 resetBehavior: RESEARCHED_NOT_APPLICABLE_NORMAL_TYPE_WITH_NO_MACHINE_SPECIFIC_RESET_CONTRACT_FOUND
- 2016-01-18 group closure: CURRENT_RESEARCH_MULTI_SOURCE_AUDIT
