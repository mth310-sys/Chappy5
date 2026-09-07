# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **949**
- latestRecordAdded: **ラッキージャックポット**（岡崎産業）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-01-25_lucky-jackpot.md`
- chronologicalFrontier: **2016-01-25**
- frontierLatestMachine: **ラッキージャックポット**
- schema: **resetBehavior v0.7**
- status: **2016-01-25_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.948 `2016-01-18_pegappa.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **948** / chronologicalFrontier **2016-01-18** / 01-18群CLOSED。
- mainにラッキージャックポットの先行レコードがないことを確認してNo.949を追加。

## No.949 — ラッキージャックポット
- record: `docs/real_machine_db/machines/2016-01-25_lucky-jackpot.md`
- manufacturer: **岡崎産業**
- releaseDate canonical: **2016-01-25**
- formalModelName: **ラッキージャックポットL1**
- inspectionNumber: **5S0799**
- generation/system: **5号機 / ノーマルAタイプ / CT内部状態連動型 / 7セグ告知**

### performanceCore
- 機械割: **96.4 / 98.6 / 100.4 / 103.1 / 106.2 / 109.5%**。
- BIG: **1/396 / 375 / 355 / 330 / 299 / 278**。
- REG: **1/396 / 376 / 354 / 330 / 299 / 277**。
- 合算: **1/198 / 188 / 177 / 165 / 149 / 139**。
- 50枚ベース: **約46G**。
- BIG最大 **311枚** / REG最大 **92枚**。
- 天井: **非搭載**。
- 高確モード中ボーナス: **BIG 1/270.81 / REG 1/270.81 / 合算1/135.40（全設定共通）**。
- netIncrease: **NOT_APPLICABLE_NORMAL_TYPE**。

### resetBehavior v0.7
- settingChange: 後年実機資料で **設定変更後は天国モードからスタート** を確認。
- 当時2016-01-27解析は当初「設定変更後に高確状態からスタートする可能性あり（噂）」としており、情報成熟差を `RESET_INFORMATION_MATURITY` として保持。
- 天井: 非搭載のためゲーム数RESET/CARRY・短縮天井は非該当。
- carryOver: 据え置き時に通常/高確・天国内部状態をどの粒度で保持するかは **UNVERIFIED_AFTER_RESEARCH**。
- purePowerCycle: 純電源OFF→ON時の内部状態・高確ランプ表示保持/初期化は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一恩恵: 設定変更後の天国モードスタート。高確モード中は全設定共通でボーナス合算約1/135.4。
- 変更判別: 高確ランプは状態推測材料だが、朝一ランプだけで設定変更を確定する契約は未確認。ガックン/初期出目等も **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset-onlyモード振り分け率・固定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。

### conflicts / definition separation
- `RESET_INFORMATION_MATURITY`:
  - 2016-01-27当時解析: 設定変更後高確スタートは噂・未確定。
  - 後年中古実機資料: 設定変更後天国モードスタートと明記。
  - 100%数値テーブルは推測せず、定性的な天国スタートのみ採用。
- `PAYOUT_DEFINITION_DIFFERENCE`:
  - 業界発表: BB344枚 / RB155枚（払い出し）。
  - 実獲得: BIG最大311枚 / REG最大92枚。
  - 定義差として分離。

## 2016-01-25群 — OPEN
今回処理済み:
1. **ラッキージャックポット** — 岡崎産業 — No.949。

### group audit status
- 「2016-01-25」「2016年1月25日導入」「1月25日導入」「HAZUSE」等で初回横断検索。
- 現時点の強い具体日ヒットはラッキージャックポット。
- ただし同日群の全メーカー横断閉鎖監査は未完了のため **OPEN** のまま。
- 次回はメーカー別/新台一覧/当時業界記事/古DBで1/25同日群を再監査し、未登録機があれば先に処理。漏れがなければ `2016-01-25_GROUP_CLOSED_FOR_CURRENT_RESEARCH` として次の具体日へ進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_dokonjo-gaeru-s.md**
- retroQaNextInspection: **2006-01_birei2.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規収集を止めず、余力リレーでresetBehavior欠損のみ順次補完する。

## 次回再開地点
1. **recordCount 949 / chronologicalFrontier 2016-01-25 / 01-25群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.949をmainから再取得。
3. **2016-01-25同日群を全メーカー横断で再監査**。未処理機が見つかれば導入日順に性能コア + resetBehavior v0.7で登録する。
4. 1/25群に追加なしと十分確認できた場合のみ同日群CLOSEDとし、次の具体日へ進む。
5. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
6. 競合は平均せずCONFLICT/定義差として双方保存。
7. main先行レコードを見つけた場合は重複作成せず、その次の未処理機へ進む。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 検定日/認定日/発表日/納品予定日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- COMPLETE_COREは性能コアの従来判定として保持し、reset QA状態は別管理する。

## 主要出典 — 取得日 2026-09-08
### No.949 ラッキージャックポット
- HAZUSE: https://hazuse.com/machine/pachislot/5S0799/
- ちょんぼりすた: https://chonborista.com/slot/okazaki-slot/16194/
- すろぱちくえすと: https://www.slopachi-quest.com/article/lucky-jackpot/
- P-WORLD: https://www.p-world.co.jp/machine/database/7919
- ニッカンアミューズメント: https://www.nikkansports.com/amusement/pachinko/news/1567893.html
- 中一商事: https://www.nakaiti.com/html/sOkazaki009.html

## confidence
- No.949 identity/formalModel/inspectionNumber: ANALYSIS_DATABASE_HIGH
- No.949 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- No.949 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.949 ceiling: ANALYSIS_HIGH_MULTI_SOURCE_NO_CEILING
- No.949 settingChangeBehavior: ANALYSIS_MEDIUM_WITH_LATER_SECONDARY_CONFIRMATION
- No.949 carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- No.949 powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- No.949 resetDetection: RESEARCHED_NO_CONFIRMED_CHANGE_DETECTION
- 2016-01-25 group closure: NOT_YET_CLOSED / AUDIT_CONTINUES
