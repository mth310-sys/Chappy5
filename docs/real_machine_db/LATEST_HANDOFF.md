# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **950**
- latestRecordAdded: **スーパーオアシス**（パイオニア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-02-01_super-oasis.md`
- chronologicalFrontier: **2016-02-01**
- frontierLatestMachine: **スーパーオアシス**
- schema: **resetBehavior v0.7**
- status: **2016-02-01_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainのルート `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.949 `2016-01-25_lucky-jackpot.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **949** / chronologicalFrontier **2016-01-25** / 01-25群OPEN。
- mainにスーパーオアシスの先行レコードがないことを確認してNo.950を追加。

## 2016-01-25群 — CLOSED_FOR_CURRENT_RESEARCH
- 「2016年1月25日」「2016/01/25」「1月25日導入」「新台」「パチスロ」「スロット」を組み替え、当時/後年解析、HAZUSE、業界系、検索インデックスを再監査。
- 全国導入日を2016-01-25として強く固定できた未登録5号機は今回追加で確認できず、既登録 **ラッキージャックポット（No.949）** で現時点群を閉鎖。
- 次の具体日 **2016-02-01** にはスーパーオアシス、キュインハナチャン、沖ドキ！トロピカル等の具体日一致を確認できるため境界も成立。

## No.950 — スーパーオアシス
- record: `docs/real_machine_db/machines/2016-02-01_super-oasis.md`
- manufacturer: **パイオニア**
- releaseDate canonical: **2016-02-01**
- formalModelName: **スーパーオアシス／DX**
- inspectionNumber: **5S0953**
- generation/system: **5号機 / ノーマルAタイプ / 完全告知**

### performanceCore
- 機械割 canonical: **96.1 / 97.8 / 99.9 / 102.5 / 105.7 / 110.3%**。
- HAZUSEのみ設定1を96.9%とするため **PAYOUT_RATE_SETTING1_CONFLICT** として双方保持。
- BIG: **1/299 / 290 / 278 / 265 / 252 / 239**。
- REG: **1/399 / 374 / 348 / 321 / 296 / 273**。
- 合算: **1/171 / 163 / 154 / 145 / 136 / 127**。
- 50枚ベース: **約36.5G**（解析の約37Gは丸め差）。
- BIG最大 **312枚** / REG最大 **104枚**。
- 天井: **非搭載**。
- netIncrease: **NOT_APPLICABLE_NORMAL_TYPE**。

### resetBehavior v0.7
- 設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/天井へ検索語を変え、公式、業界、HAZUSE、P-WORLD、当時解析、後年DBを再探索。
- 天井・AT/ART/RT・通常時ゲーム数モードを持たないノーマルAタイプで、設定変更時専用の短縮天井、朝一モード、主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **NOT_APPLICABLE_NO_PUBLIC_NORMAL_GAME_MODE_SYSTEM**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- purePowerCycle: 朝一専用恩恵はNONE_CONFIRMED。表示/初期出目保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- resetDetection: ガックン/初期出目/ランプによる本機固有の変更確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- REG中/ボーナス後ランプの設定示唆は、朝一変更判別とは分離。

## 2016-02-01群 — OPEN
今回処理済み:
1. **スーパーオアシス** — パイオニア — No.950。

現時点で具体日一致を確認した未処理候補:
- **キュインハナチャン** — ニューギン — 2016-02-01。
- **沖ドキ！トロピカル** — ユニバーサルブロス — 2016-02-01。

### group audit status
- 2/1群は複数機種が存在するため **OPEN**。
- 次回はまず既存mainに上記候補の先行レコードがないことを再確認し、未登録なら性能コア + resetBehavior v0.7で導入日順に追加。
- その後、メーカー別/新台一覧/当時業界記事/古DBで2/1群を横断監査し、群CLOSED判定を行う。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-01_birei2.md**
- retroQaNextInspection: **2006-02_jinzo-ningen-kikaider-k.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**

### 今回QA — 美麗II
- `docs/real_machine_db/machines/2006-01_birei2.md` を再探索・更新。
- 検索語を「美麗II 設定変更」「美麗2 リセット」「ストライクゾーン 美麗II 朝一」「美麗II ガックン」「美麗II 電源」「美麗II 据え置き」へ分解して再検索。
- 本機固有の設定変更/据え置き/純電断/変更判別について追加の直接根拠は得られなかった。
- 既存性能側 `coreStatus: PARTIAL` は維持し、reset QAのみ **PARTIAL_RESEARCH_EXHAUSTED** へ更新。
- 有利区間は5号機初期のためNOT_APPLICABLE。天井/朝一専用モード/リセット専用数値はNONE_CONFIRMED。

## 次回再開地点
1. **recordCount 950 / chronologicalFrontier 2016-02-01 / 02-01群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.950をmainから再取得。
3. **2016-02-01同日群**を継続。先頭候補は **キュインハナチャン**。main先行レコードがあれば重複作成せず次へ。
4. 続いて **沖ドキ！トロピカル**、残りメーカー監査を行い、十分確認できた場合のみ02-01群をCLOSED。
5. 遡及QAは **`2006-02_jinzo-ningen-kikaider-k.md`（人造人間キカイダーK）** から継続。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
7. 競合は平均せずCONFLICT/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 検定日/認定日/発表日/納品予定日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- COMPLETE_COREは性能コアの従来判定として保持し、reset QA状態は別管理する。

## 主要出典 — 取得日 2026-09-08
### No.950 スーパーオアシス
- パイオニア公式更新履歴: https://www.slot-pioneer.co.jp/news.html
- Pioneer Channel: https://www.youtube.com/watch?v=waNJERJ-TZA
- グリーンべると: https://web-greenbelt.jp/00008348/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0953/
- P-WORLD: https://www.p-world.co.jp/machine/database/7948
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/16751/
- すろぱちくえすと: https://www.slopachi-quest.com/article/super-oasis/
- 2-9伝説: https://29den.com/superoasis/

### 2016-02-01境界候補
- キュインハナチャン: https://chonborista.com/slot/newgin-slot/16763/
- 沖ドキ！トロピカル: https://1geki.jp/slot/okidoki_tropical/
- 沖ドキ！トロピカル 必勝本: https://p.hisshobon.jp/machine/2699/1/56245

## confidence
- No.950 identity/formalModel/inspectionNumber: ANALYSIS_DATABASE_HIGH
- No.950 exactReleaseDate: ANALYSIS_HIGH_PLUS_INDUSTRY_DELIVERY_BOUNDARY
- No.950 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING1_CONFLICT
- No.950 ceiling: ANALYSIS_HIGH_MULTI_SOURCE_NO_CEILING
- No.950 settingChangeBehavior: RESEARCHED_NO_SPECIAL_RESET_CONTRACT_CONFIRMED
- No.950 powerCycleBehavior: PARTIAL_UNVERIFIED_DISPLAY_CONTRACT
- No.950 resetDetection: RESEARCHED_NO_CONFIRMED_CHANGE_DETECTION
- 2016-01-25 group closure: CLOSED_FOR_CURRENT_RESEARCH
- 2016-02-01 group closure: NOT_YET_CLOSED / AUDIT_CONTINUES
- BireiII reset QA: PARTIAL_RESEARCH_EXHAUSTED
