# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **967**
- latestRecordAdded: **南国物語**（オリンピア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-03-28_nangoku-monogatari.md`
- chronologicalFrontier: **2016-03-28**
- frontierLatestMachine: **南国物語**
- schema: **resetBehavior v0.7**
- status: **2016-03-28_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（ミッションv0.7）、`INDEX.md`、`LATEST_HANDOFF.md`、No.966 `2016-03-22_baganuckle.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **966** / chronologicalFrontier **2016-03-22** / 03-22群CLOSED。
- 2016-03-23〜03-28境界を監査し、03/28群の未登録 **南国物語** をNo.967として追加。

## No.967 — 南国物語
- record: `docs/real_machine_db/machines/2016-03-28_nangoku-monogatari.md`
- manufacturer: **オリンピア**
- releaseDate canonical: **2016-03-28**
- formalModelName: **南国物語／F1**
- certificationNumber: **5S1146**
- generation/system: **5号機 / AT / 擬似ボーナス / ゲーム数・モード管理 / 連チャンゾーン**

### performanceCore
- 機械割: **97.1 / 98.2 / 100.4 / 103.2 / 107.0 / 110.3%**。
- 南国ボーナス初当り: **1/323.9 / 318.4 / 304.7 / 294.9 / 276.9 / 244.2**。
- ボーナス総出現率: **1/134.3 / 129.1 / 120.7 / 113.2 / 100.6 / 90.5**（連チャン込みの別定義として分離）。
- ベース: **約46G/50枚**（45.8G表記は丸め差）。
- AT純増: **約2.9枚/G**。
- BIG: **70G+α / 基本約203枚**、REG: **20G / 基本約58枚**。
- 通常主要天井: **759G / 996G**。初当たりD系は最大333G。
- HAZUSE、PiDEA、当時解析で性能系列を照合。

### resetBehavior v0.7
- 設定変更: **天井再抽選 / 内部モード再抽選**。告知タイプ・パトランラン表示もリセット。
- 純電源OFF→ON: **天井引継ぎ / 内部モード引継ぎ**。告知タイプ・表示はリセット。
- リセット時天井（全設定共通）: **8G 1.0% / 16G 1.0% / 28G 1.0% / 759G 72.0% / 996G 25.0%**。
- リセット時初当たりモード（設定1・3・5）: **A25.0 / B25.0 / C25.0 / D1 15.6 / D2 3.1 / D3 3.1 / SP南国3.1%**。
- リセット時初当たりモード（設定2・4・6）: **A60.9 / B12.5 / C12.5 / D1 7.8 / D2 1.6 / D3 1.6 / SP南国3.1%**。
- リセット時飛翔モード（設定1・3・5）: **A50.0 / B37.5 / C12.5%**。
- リセット時飛翔モード（設定2・4・6）: **A50.0 / B25.0 / C25.0%**。
- 設定変更時は28G以内天井が合計3%、759Gが72%となり朝一に明確な優遇あり。一方、前日天井進捗・内部モードは設定変更で失う。
- 告知タイプ/表示は設定変更・純電断の双方で初期化されるため判別材料にならない。ガックンは本機固有の確定情報を固定できず変更判別には採用しない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflict
- PiDEAの導入前業界記事は通常天井を **759G or 999G（1:1）** と記載。
- 導入後解析は **996G**、かつリセット時は759G 72% / 996G 25%等を掲載。
- 平均せず `CEILING_PRE_RELEASE_CONFLICT` として保持し、canonicalは導入後解析の996Gを採用。

## 2016-03-23〜03-28境界 / 03-28群監査 — CLOSED_FOR_CURRENT_RESEARCH
- HAZUSE新台カレンダーで03/22の次のパチスロ導入日区分が **03/28**。
- 2016年導入日順一覧では03/28群に **南国物語のみ**を掲載し、03/22群（ゲッターマウス / バガナックルー / ミラクル）との境界も一致。
- 「2016年3月28日導入」「3月28日導入 パチスロ」「2016-03-28 slot」等へ検索語を変え、別機種の具体的な同日全国導入を固定できなかった。
- よって現時点で `2016-03-28_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_new-oasis.md**（前回から変更なし）
- retroQaNextInspection: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線No.967の性能コア+resetBehaviorと03/28境界監査を優先し、既存性能値の再調査は実施していない。

## 次回再開地点
1. **recordCount 967 / chronologicalFrontier 2016-03-28 / 03-28群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.967をmainから再取得。
3. **2016-03-29〜04-04境界監査 → 2016-04-04群**を処理。
4. 現時点の04/04先行候補: **機動警察パトレイバー / キングパルサー / 探偵歌劇 ミルキィホームズ TD**。導入日・メーカー・型式を個別に再確認して最初の未登録機から進める。
5. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
6. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
7. 遡及QAは **`2006-02_nurse-witch-komugi-chan-magicalte.md`** から継続。既存性能コアを無駄にやり直さない。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と納品予定日・地域先行日を混同しない。
- 後年設置期限・検定期限一覧の日付を導入日へ転記しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 設定変更RESETを根拠に据え置き/純電断を自動でCARRYOVER認定しない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.967 南国物語
- HAZUSE: https://hazuse.com/machine/pachislot/5S1146/
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/5S1146/genre/201/
- PiDEA: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%8C%E5%8D%97%E5%9B%BD%E7%89%A9%E8%AA%9E%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- 期待値見える化: https://slotjin.com/zone/nangoku-monogatari/
- すろぱちくえすと朝一: https://www.slopachi-quest.com/article/nangokumonogatari-reset/
- すろぱちくえすとリセット数値: https://www.slopachi-quest.com/article/nangoku-reset28/
- スロットガーデン: https://xn--mckza4ard4ttb2d.com/nangokumonogatari
- 2016年導入一覧: https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/

## confidence
- No.967 identity/formalModel/certification/releaseDate: **PERIOD_DATABASE_HIGH**
- No.967 performanceCore: **INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- No.967 reset settingChange/powerCycle: **ANALYSIS_HIGH_DIRECT_TABLE_MULTI_SOURCE**
- No.967 reset numeric tables: **ANALYSIS_HIGH_PERIOD_DIRECT_NUMERIC_TABLE**
- No.967 resetDetection: **NEGATIVE_FINDING_WITH_EXPLICIT_SHARED_DISPLAY_RESET**
- No.967 ceiling 996 vs pre-release 999: **CONFLICT_PRESERVED_CANONICAL_POST_RELEASE_ANALYSIS**
- 2016-03-28 group: **CLOSED_FOR_CURRENT_RESEARCH**
