# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **947**
- latestRecordAdded: **パチスロ 機動戦士ガンダム 覚醒 -Chained battle-**（ビスティ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-01-18_gundam-kakusei-chained-battle.md`
- chronologicalFrontier: **2016-01-18**
- frontierLatestMachine: **パチスロ 機動戦士ガンダム 覚醒 -Chained battle-**
- schema: **resetBehavior v0.7**
- status: **2016-01-18_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.946 `2016-01-18_sengoku-otome2-shinen-ni-kagayaku-kedakaki-shousei.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **946** / chronologicalFrontier **2016-01-18** / 01-18群OPEN。
- mainにガンダム覚醒の先行レコードがないことを確認してNo.947を追加。

## No.947 — パチスロ 機動戦士ガンダム 覚醒 -Chained battle-
- record: `docs/real_machine_db/machines/2016-01-18_gundam-kakusei-chained-battle.md`
- manufacturer: **ビスティ**
- releaseDate: **2016-01-18**
- formalModelName: **パチスロ 機動戦士ガンダム・覚醒CB**（SANKYO公式アーカイブ）
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / A+ART / CZ経由ART / 継続率上乗せ型**

### performanceCore
- 機械割: **97.2 / 98.8 / 101.7 / 103.8 / 109.0 / 113.0%**。
- ART初当たり: **1/560.7 / 538.4 / 492.3 / 454.6 / 414.3 / 380.0**。
- ボーナス合算: **1/256.0 / 254.0 / 243.6 / 239.2 / 229.1 / 223.7**。ART初当たりとは定義分離。
- 50枚ベース: **約32G**。
- ART純増: **約1.5枚/G**。ボーナス込み約2.0枚/G表現とは定義分離。
- SBB **300枚** / BIG **150枚** / REG **48枚**。
- ART「G-DRIVE」: **1セット40G+α**。
- 通常天井: **ボーナス間999G+前兆最大32G**。ARTを挟んでもボーナス間カウント継続。
- 通常時333/555/777GのCZ当選率: **全設定共通30.3%**。リセット専用数値ではないため別保持。

### resetBehavior v0.7
- settingChange game ceiling: **RESET**。
- settingChange internal state: **RESELECT**。
- settingChange stage: **ブリッジ**。
- purePowerCycle game ceiling: **CARRYOVER**。
- purePowerCycle internal state: **CARRYOVER**。
- carryOver game ceiling/internal state: **CARRYOVER**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の具体的内部状態振り分け、固定朝一当選率、専用モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。

#### powerCycle stage CONFLICT
- ちょんぼりすた: 電源ON/OFF時の液晶ステージ **引き継ぐ**。
- 期待値見える化: 電源OFF→ON（据え置き）でも **ブリッジ**。
- 平均せず `POWER_CYCLE_STAGE_CONFLICT` として双方保存。
- この競合のため、朝一ブリッジ単独を変更判別の確定契約にはしない。

#### reset detection
- ちょんぼりすたは設定変更時ブリッジ開始、ブリッジ以外なら据え置き濃厚と説明するが、上記電断ステージ競合を保持。
- 期待値見える化ではフェイク前兆は据え置きでも当日G数基準なので、当日ゾロ目付近のフェイク前兆だけでは変更判別不能。
- 前日+当日の宵越しゾロ目到達時に契機役なしで前兆が始まった場合は、据え置き+CZ当選の強い推測材料とされる。
- 本機固有ガックン確定契約: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2016-01-18群 — OPEN
今回までに具体日付きで処理した同日パチスロ:
1. **戦国乙女2～深淵に輝く気高き将星～** — オリンピア — No.946登録済み。
2. **パチスロ 機動戦士ガンダム 覚醒 -Chained battle-** — ビスティ — No.947登録済み。
3. **ペガッパ（PEGAPPA）** — エマ — 当時記事で2016-01-18導入候補として確認済み。**次回先頭候補**。
- 上記だけで同日群を閉じず、次回ペガッパ処理後に同日全メーカーを再監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_dokonjo-gaeru-s.md**
- retroQaNextInspection: **2006-01_birei2.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 既存性能コアを不用意にやり直さず、余力リレーでresetBehavior欠損のみ順次補完する。

## 次回再開地点
1. **recordCount 947 / chronologicalFrontier 2016-01-18 / 01-18群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.947をmainから再取得。
3. 先頭候補 **「ペガッパ（PEGAPPA）」** を性能コア + resetBehavior v0.7で登録する。
4. 同日全メーカー監査で1/18群の漏れを確認する。
5. 1/18群を閉じられたら次の具体日 **2016-01-25** へ進む。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与する。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. main先行レコードを見つけた場合は重複作成せず、その次の未処理機へ進む。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 検定日/認定日/発表日/納品予定日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- COMPLETE_COREは性能コアの従来判定として保持し、reset QA状態は別管理する。

## 主要出典 — 取得日 2026-09-08
### No.947 ガンダム覚醒
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/884/
- K-Navi: https://p-kn.com/slot/2410/
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/14990/
- 期待値見える化: https://slotjin.com/zone/gundam-kakusei/
- man-soft: https://smaslo.man-soft.com/slot-kaiseki/gundam-kakusei.html
- P-WORLD: https://www.p-world.co.jp/machine/database/7936
- 当時スペック記事: https://pachinkopachisro.com/archives/46238096.html
- FIELDS公式機種サイト: https://gundam-ps.jp/

### 2016-01-18群
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- 2016年1月当時解析一覧（ペガッパ/ガンダム）: https://jikyu2000.com/2016/01/

## confidence
- No.947 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_OFFICIAL_MONTH
- No.947 identity/formalModel: OFFICIAL
- No.947 inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- No.947 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.947 settingChangeBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- No.947 powerCycleGameCounterInternalState: ANALYSIS_HIGH_MULTI_SOURCE
- No.947 powerCycleStage: CONFLICT
- No.947 resetDetection: ANALYSIS_HIGH_WITH_STAGE_CONFLICT
- No.947 numericResetData: UNVERIFIED_AFTER_RESEARCH_NO_DIRECT_RESET_NUMERIC_TABLE
