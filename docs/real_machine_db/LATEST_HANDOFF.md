更新日: 2026-09-09

## 現在地点
- recordCount: **1043**
- latestRecordAdded: **オアシスデイズ**（パイオニア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-01-30_oasis-days.md`
- chronologicalFrontier: **2017-01-30**
- frontierLatestMachine: **オアシスデイズ — No.1043**
- schema: **resetBehavior v0.7**
- status: **2017-01-30_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1042実レコードを再取得して開始。
- 開始時main正本は **1042件 / chronologicalFrontier 2017-01-30 / 1/30群OPEN**。旧INDEXの19件表示は進捗正本にせず、README規定どおりLATEST_HANDOFFと実レコードを優先。
- handoff指定の次未処理 **パイオニア「オアシスデイズ」** をNo.1043として登録。
- パイオニア公式、グリーンべると業界記事、P-WORLD、HAZUSE、2-9伝説、すろぱちくえすとを横断し、性能コア＋resetBehavior v0.7を同時収集。
- 2017-01-30群は **ニューペガサスREVIVAL** が未処理確認済みのためOPENを維持。

## No.1043 — オアシスデイズ
- manufacturer: **パイオニア**
- releaseDate canonical: **2017-01-30**
- formalModelName: **オアシスデイズ/DX**
- certificationNumber: **6S1149**
- generation/system: **5号機 / 5.5号機期 / ノーマル / 完全告知 / 25φ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_UNVERIFIED_MACHINE_SPECIFIC_POWER_STATE**

### performanceCore
- 機械割: **97 / 99 / 101 / 104 / 107 / 110%**。
- BIG: **1/299 / 288 / 278 / 268 / 256 / 244**。
- REG: **1/496 / 468 / 436 / 407 / 376 / 348**。
- 合算: **1/186 / 178 / 170 / 161 / 152 / 143**。
- baseGamesPer50: **約37.0G/50枚**。
- BIG最大純増 **312枚**、REG最大純増 **130枚**。
- AT/ART/RT純増: **NOT_APPLICABLE_NORMAL_TYPE**。
- 通常ゲーム数天井: **なし**。

### resetBehavior v0.7
- settingChangeBehavior: 通常ゲーム数天井・AT/ART/CZ・長期モードは構造上NOT_APPLICABLE。本機固有の成立済みボーナス/リール/告知一時状態は **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 引継ぎ対象となる天井/長期モードなし。一時状態の本機固有据え置き直接契約は **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH**。
- powerCycleBehavior: 天井/AT・ARTモード差はNOT_APPLICABLE。一時状態の純電源OFF→ON契約は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。設定変更専用短縮天井はNONE_CONFIRMED。
- modeAfterReset: **NOT_APPLICABLE_NORMAL_TYPE**。朝一専用モード/リセット専用高確率状態はNONE_CONFIRMED。
- stateAfterReset: 設定変更専用高確/低確は **NONE_CONFIRMED_AFTER_RESEARCH**。成立済みボーナス等の一時状態はUNVERIFIED。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 短縮天井、CZ/ART優遇、朝一特定G以内当選率等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有の確定ガックン/初期出目/ランプ契約は十分な再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。ボーナス後パネルフラッシュ/REG中サイドランプは設定推測であり変更判別には混入しない。

### data quality / CONFLICT
- パイオニア公式は2017年1月発売。グリーンべると2016-12-02は一部地域除き2017-01-29納品開始予定、HAZUSEは2017-01-30導入。P-WORLDも2017年1月・型式/検定番号一致のため、ホール導入canonicalを **2017-01-30** とした。
- すろぱちくえすとに **2017-01-16導入**表記が残るため、単一二次資料差として `CONFLICT_RELEASE_DATE_2017_01_30_VS_2017_01_16_SINGLE_SECONDARY` を保持。
- 性能コアは業界一次資料と複数DBで一致。
- resetBehaviorはノーマル機で構造上N/Aの項目と、本機固有資料不足の一時状態を分離し、一般論から電断/据え置きを補完していない。

## 境界監査
- **2017-01-30_GROUP_OPEN**。
- 登録済み:
  - SLOTスターオーシャン4 — No.1041
  - パチスロ ソウルキャリバー — No.1042
  - オアシスデイズ — No.1043
- 未処理確認済み候補:
  - **ニューペガサスREVIVAL**（エマ） — 2-9伝説の2017-01-30新台一覧で同日機として確認。次回、機種単独の公式/業界/当時解析を再探索して導入日・型式・性能コア・resetBehaviorを固定する。
- ニューペガサスREVIVAL処理後、1/30同日全メーカー監査を実施し、漏れがなければCLOSEDへ進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1043を再取得。
2. **1043件 / chronologicalFrontier 2017-01-30 / 1/30群OPEN** を正本として継続。
3. 次の未処理機種は **エマ「ニューペガサスREVIVAL」** をNo.1044候補として処理。
4. 導入日を2-9伝説以外の別系統でも固定し、正式型式/検定番号、設定別機械割・BIG/REG・ベース・獲得枚数を収集。
5. resetBehavior v0.7は設定変更/据え置き/純電断、天井/モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を表記揺れと資料系統を変えて再探索。
6. その後、2017-01-30同日全メーカー監査 → CLOSED可否判定 → 次導入群へ前進。
7. 既登録No.1043以前を重複追加しない。

## 主要出典 — 取得日 2026-09-09
### No.1043 オアシスデイズ
- パイオニア公式2017年製品一覧: https://www.slot-pioneer.co.jp/products/2017.html
- グリーンべると: https://web-greenbelt.jp/00009166/
- P-WORLD: https://www.p-world.co.jp/machine/database/8233
- HAZUSE: https://hazuse.com/machine/pachislot/6S1149/
- 2-9伝説: https://29den.com/oasisdays/
- すろぱちくえすと（導入日CONFLICT資料）: https://www.slopachi-quest.com/article/oasisdays/

### 次回候補
- 2-9伝説 2017年新台一覧 / 2017-01-30群: https://29den.com/newslot/
