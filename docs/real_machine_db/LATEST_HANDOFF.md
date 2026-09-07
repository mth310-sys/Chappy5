# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **952**
- latestRecordAdded: **キュインハナチャン-30**（ニューギン）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-02-01_kyuin-hanachan-30.md`
- chronologicalFrontier: **2016-02-01**
- frontierLatestMachine: **キュインハナチャン-30**
- schema: **resetBehavior v0.7**
- status: **2016-02-01_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.950 `2016-02-01_super-oasis.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **950** / chronologicalFrontier **2016-02-01** / 02-01群OPEN。
- mainにキュインハナチャン先行レコードがないことを確認。
- 調査で25φと30φが別型式・別検定番号で、30φBIG確率に25φとの差があることを確認したため、同一性能として潰さず独立レコード化。

## No.951 — キュインハナチャン-25
- record: `docs/real_machine_db/machines/2016-02-01_kyuin-hanachan-25.md`
- manufacturer: **ニューギン**
- releaseDate canonical: **2016-02-01**
- formalModelName: **キュインハナチャンX-25**
- inspectionNumber: **5S0958**
- generation/system: **5号機 / ノーマルA / 完全告知 / 25φ**

### performanceCore
- 機械割: **97 / 99 / 102 / 104 / 107 / 111%**。
- BIG: **1/310.6 / 296.5 / 283.7 / 269.7 / 256.0 / 240.1**。
- REG: **1/516.0 / 481.9 / 445.8 / 409.6 / 376.6 / 343.1**。
- 合算: **1/193.9 / 183.6 / 173.4 / 162.6 / 152.4 / 141.2**。
- 50枚ベース: 設定別 **約37.0〜38.0G**。HAZUSEは約37G、ちょんぼりすたは37.1〜38.0Gのため丸め/表示粒度差として分離。
- BIG最大 **312枚** / REG最大 **130枚**。
- 天井: **非搭載**。
- パチマガスロマガの96.30〜111.22%は7000G×10万日シミュレート値で、通常掲載機械割とは定義分離。

### resetBehavior v0.7
- 設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックンへ検索語を変え、業界・HAZUSE・当時解析・古DB・回顧資料を再探索。
- 天井/AT/ART/通常時ゲーム数モードを持たないノーマルAタイプ。
- 設定変更時専用の短縮天井、朝一モード、主要恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- purePowerCycle: 朝一専用恩恵はNONE_CONFIRMED。ボーナス後32G背景など表示状態の保持は **UNVERIFIED_AFTER_RESEARCH**。
- resetDetection: 本機固有ガックン/初期出目/ランプによる変更確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

## No.952 — キュインハナチャン-30
- record: `docs/real_machine_db/machines/2016-02-01_kyuin-hanachan-30.md`
- manufacturer: **ニューギン**
- releaseDate canonical: **2016-02-01**（P-WORLD月表示2016年1月、業界1/31納品予定との工程/粒度差を保持）
- formalModelName: **キュインハナチャンX-30**
- inspectionNumber: **5S0977**
- generation/system: **5号機 / ノーマルA / 完全告知 / 沖スロ / 30φ**

### performanceCore
- 30φBIG canonical: **1/309.1 / 297.9 / 283.7 / 269.7 / 256.0 / 240.1**（P-WORLD。グリーンべるとも設定1→6レンジ一致）。
- REG: **1/516.0 / 481.9 / 445.8 / 409.6 / 376.6 / 343.1**。
- 合算: **1/193.3 / 184.1 / 173.4 / 162.6 / 152.4 / 141.2**。
- 5号機クロニクルは30φの設定1/2 BIGを25φと同じ1/310.6・1/296.5で掲載するため、平均せず **BIG_VARIANT_SOURCE_CONFLICT**。
- パチマガスロマガ30φシミュレートPAYOUT: **96.30 / 98.53 / 101.07 / 104.06 / 107.06 / 111.22%**。通常掲載機械割と定義分離。
- 30φ単独の同定義フル機械割と50枚ベースは、型式/30φ/コイン持ち/50枚/ベースへ検索語を変えた後も独立固定できず **UNVERIFIED_AFTER_RESEARCH**。25φ値を自動転記していない。
- BIG最大 **312枚** / REG最大 **130枚**。

### resetBehavior v0.7
- 30φ型式 `キュインハナチャンX-30` / `5S0977` を含めて設定変更・リセット・朝一・据え置き・電源OFF ON・天井・モード・ガックンを再探索。
- 設定変更専用の短縮天井/朝一モード/主要恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井/ゲーム数モード/AT・ART状態: **NOT_APPLICABLE / NONE_CONFIRMED**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- purePowerCycle表示保持: **UNVERIFIED_AFTER_RESEARCH**。
- resetDetection: 本機固有の変更確定契約 **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2016-02-01群 — OPEN
今回処理済み:
1. **スーパーオアシス** — パイオニア — No.950。
2. **キュインハナチャン-25** — ニューギン — No.951。
3. **キュインハナチャン-30** — ニューギン — No.952。

現時点で具体日一致を確認済みの未処理候補:
- **沖ドキ！トロピカル** — ユニバーサルブロス — 2016-02-01。

### group audit status
- 02-01群は **OPEN**。
- 次回はmainに沖ドキ！トロピカル先行レコードがないことを確認し、性能コア + resetBehavior v0.7で追加。
- その後、メーカー別一覧、新台一覧、業界記事、古DBを横断して同日残存機を監査し、十分確認できた場合のみCLOSED。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-01_birei2.md**
- retroQaNextInspection: **2006-02_jinzo-ningen-kikaider-k.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規同日群の25φ/30φ分離調査を優先。遡及QA再開地点は変更しない。

## 次回再開地点
1. **recordCount 952 / chronologicalFrontier 2016-02-01 / 02-01群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.951 / No.952をmainから再取得。
3. **沖ドキ！トロピカル** を先頭候補として先行レコード有無を確認し、未登録なら追加。
4. 同日全メーカー監査を継続し、02-01群のCLOSED判定を行う。
5. 遡及QAは `2006-02_jinzo-ningen-kikaider-k.md` から継続。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
7. 競合は平均せずCONFLICT/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 25φ/30φのように型式・検定番号・性能値が分かれる場合は同一機種名だけで統合しない。
- 検定日/認定日/発表日/納品予定日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.951 キュインハナチャン-25
- グリーンべると: https://web-greenbelt.jp/00008317/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0958/
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/16763/
- すろぱちくえすと: https://www.slopachi-quest.com/article/kyuin-hanachan/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/37/g.php
- 5号機クロニクル: https://5goki.com/newgin-excite

### No.952 キュインハナチャン-30
- グリーンべると: https://web-greenbelt.jp/00008317/
- P-WORLD: https://www.p-world.co.jp/machine/database/7946
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/36/g.php
- 5号機クロニクル: https://5goki.com/newgin-excite
- スロズバ: https://slozuva.com/?MK=36

### 次候補
- 沖ドキ！トロピカル: https://1geki.jp/slot/okidoki_tropical/
- 必勝本: https://p.hisshobon.jp/machine/2699/1/56245

## confidence
- No.951 identity: ANALYSIS_DATABASE_HIGH
- No.951 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.951 resetBehavior: RESEARCHED_NO_SPECIAL_RESET_CONTRACT_CONFIRMED
- No.952 identity: INDUSTRY_DATABASE_HIGH
- No.952 bonusCore: ANALYSIS_MULTI_SOURCE_WITH_VARIANT_CONFLICT
- No.952 payout/base: PARTIAL_AFTER_REQUIRED_RESEARCH
- No.952 resetBehavior: RESEARCHED_NO_SPECIAL_RESET_CONTRACT_CONFIRMED
- 2016-02-01 group closure: NOT_YET_CLOSED / AUDIT_CONTINUES
