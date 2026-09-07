# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **945**
- latestRecordAdded: **パチスロ 秘宝伝 ～伝説への道～**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-12-21_hihouden-densetsu-e-no-michi.md`
- chronologicalFrontier: **2015-12-21**
- frontierLatestMachine: **パチスロ 秘宝伝 ～伝説への道～**
- schema: **resetBehavior v0.7**
- status: **2015-12-21_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.944 `2015-12-07_evangelion-tamashii-wo-tsunagu-mono.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **944** / chronologicalFrontier **2015-12-07** / 12-07群CLOSED / 12-08〜12-20境界CLOSED。
- 旧会話のNo.940地点へ戻らず、main先行のNo.944からhandoff指定の未処理機へ継続。

## No.945 — パチスロ 秘宝伝 ～伝説への道～
- record: `docs/real_machine_db/machines/2015-12-21_hihouden-densetsu-e-no-michi.md`
- manufacturer: **大都技研**
- releaseDate: **2015-12-21**
- formalModelName: **秘宝伝 伝説への道／A4**
- inspectionNumber: **5S0974**
- generation/system: **5号機 / 5.5号機初期 / A+ART / MB（秘宝CHANCE）起点CZ**

### performanceCore
- 機械割: **97.9 / 99.3 / 101.5 / 105.3 / 109.1 / 113.5%**。
- ART初当たり: **1/447.5 / 438.4 / 426.2 / 405.3 / 392.4 / 354.7**。
- 秘宝CHANCE(MB): 約 **1/119.8 → 1/99.1〜99.2**。
- BIG: **1/16384 → 1/5461**。
- 50枚ベース: **約35G**。
- ART「秘宝RUSH」: **1セット50G+α**、MB込み実質純増 **約2.0枚/G**。
- ART単独約1.6枚/G表記はMB除外値として定義分離。
- BIG: 約200枚（264枚超払い出し終了）とする当時資料あり。
- チャンス目間 **500G** でART当選。
- 秘宝CHANCE **11連続スルー後、12回目が無限高確率**で実質ART確定。

### resetBehavior v0.7
- settingChange chance-MB interval counter: **CARRYOVER**。
- carryOver chance-MB interval counter: **CARRYOVER**。
- purePowerCycle chance-MB interval counter: **CARRYOVER**。
- settingChange Secret CHANCE miss count: **RESET**。
- purePowerCycle miss progression: **CARRYOVER**（後年整理資料で確認）。
- settingChange internal state: **RESET**。
- power OFF→ON internal state: **CARRYOVER**。
- 設定変更/電源入切とも朝一液晶は **深緑の森**。
- 設定変更専用短縮天井: **NONE_CONFIRMED**。500G天井進捗自体を引き継ぐため宵越し狙いが可能。
- 朝一専用モード振り分け/固定朝一当選率: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: 深緑の森は変更/電断共通、500G天井も変更時に引継ぐため単独判別不可。スルー進捗の崩れは補助推測材料。本機固有ガックン確定契約は `UNVERIFIED_AFTER_RESEARCH`。

## 2015-12-21群 — CLOSED_FOR_CURRENT_RESEARCH
- HAZUSE新台カレンダー、2015年導入一覧、当時新台資料、P-WORLD/業界資料を横断。
- 2015-12-21全国ホール導入を具体日付きで固定できる未登録5号機は、現時点ではNo.945「秘宝伝 ～伝説への道～」以外に追加発見できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 12/21後の年末〜2016年初頭は次回、日付境界を候補限定せず再監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_dokonjo-gaeru-s.md**
- retroQaNextInspection: **2006-01_birei2.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 「ど根性ガエルS」は既存性能 `coreStatus: PARTIAL` を維持し、reset QAのみ **PARTIAL_RESEARCH_EXHAUSTED** へ更新。
- 2026-09-08再探索で「設定変更/リセット/据え置き/電源OFF ON/RT/ど根性タイム/ガックン」を表記揺れ込みで再検索し、グリーンべると、パチマガスロマガ、P-WORLD、旧DB/回顧資料を再確認。
- 本機固有の設定変更・据え置き・純電断時DT/無限RT残G/状態契約は追加固定できず、一般的5号機挙動から補完しない。
- 有利区間はN/A、通常時G数天井/朝一専用モード/短縮天井/変更判別は確認なしまたはUNVERIFIED_AFTER_RESEARCHとして明示。

## 次回再開地点
1. **recordCount 945 / chronologicalFrontier 2015-12-21 / 12-21群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.945を再取得。
3. **2015-12-22〜2016年1月初頭の境界を全メーカー横断再監査**し、最初の全国ホール導入具体日を固定する。
4. 最初の未登録機を性能コア + resetBehavior v0.7で登録。カレンダー上の2016-01-04/01-12等の日付を、実機の具体的ホール導入資料と照合してから採用する。
5. 遡及QAは `2006-01_birei2.md` から再開し、resetBehavior欠損を資料系統変更後まで掘る。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/状態/ガックン等へ検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ欠損確定。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. 全変更後、mainから新規レコード・QAレコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 検定日/認定系日付/納品予定日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- COMPLETE_COREは性能コアの従来判定として保持し、reset QA状態は別管理する。

## 主要出典 — 取得日 2026-09-08
### No.945 秘宝伝 ～伝説への道～
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/7951/greenbelt
- PiDEA X: https://www.pidea.jp/articles/%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94%E3%80%8C%E7%A7%98%E5%AE%9D%E4%BC%9D%20%E3%80%8D%E3%81%A7%E3%83%81%E3%83%A3%E3%83%B3%E3%82%B9%E7%9B%AE%E9%80%B2%E5%8C%96
- HAZUSE: https://hazuse.com/machine/pachislot/5S0974/
- pacnk: https://pacnk.com/slot/tools/sh_hihoudendensetsu.html
- pachislo-data: https://pachislo-data.com/daito/20996
- スロがち.COM: https://slogati.com/hihoudenden/
- すろぱちくえすと: https://www.slopachi-quest.com/article/hihou-densetu/
- 楽スロ: https://rakuslo.com/hihoudensetsu-asaiti.html
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/14017/
- P-Summa: https://psumma.jp/pachislo/16737/

### 2015-12-21群監査
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- 2015年導入一覧: https://slotnews777.blog.fc2.com/blog-entry-2348.html
- 新台一覧: https://smaslo.man-soft.com/new.html

### 遡及QA — ど根性ガエルS
- グリーンべると: https://web-greenbelt.jp/00005254/
- パチマガスロマガ ど根性タイム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/37/i.php
- P-WORLD: https://www.p-world.co.jp/machine/database/3998

## confidence
- No.945 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PERIOD_INDUSTRY_DELIVERY
- No.945 identity/formalModel/inspection: ANALYSIS_HIGH_OLD_DB
- No.945 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.945 settingChange500GCounter: ANALYSIS_HIGH_DIRECT_RESET_MULTI_SOURCE
- No.945 settingChangeSecretChanceMissProgress: ANALYSIS_HIGH_MULTI_SOURCE
- No.945 powerCycleBehavior: ANALYSIS_SINGLE_CORROBORATED_PARTIALLY
- No.945 resetOnlyNumericModeData: UNVERIFIED_AFTER_RESEARCH
- DokonjoGaeruS reset QA: PARTIAL_RESEARCH_EXHAUSTED
