# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **964**
- latestRecordAdded: **ミラクル**（エレコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-03-22_miracle.md`
- chronologicalFrontier: **2016-03-22**
- frontierLatestMachine: **ミラクル**
- schema: **resetBehavior v0.7**
- status: **2016-03-22_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.963 `2016-03-14_ultraman-nanashow.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **963** / chronologicalFrontier **2016-03-14** / 03-14群CLOSED。
- handoff指定どおり2016-03-15〜03-21境界を監査後、03/22群の最初の未処理機種 **ミラクル（エレコ）** をNo.964として追加。

## 2016-03-15〜03-21境界監査
- モゲスロ2016年新台カレンダーは03/14群の次を03/22群として掲載。
- 一撃の2016年3月新台スケジュールでも03/15〜03/21のスロット新規導入掲載を確認できず、次の具体日を03/22としている。
- 日別語句（3/15〜3/21 + パチスロ新台）でも全国初導入の未登録5号機を強く固定できなかった。
- よって現調査範囲では **2016-03-15_TO_03-21_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH** とする。
- 後年誤記・地域先行・納品日の混入が後続QAで見つかった場合は再OPEN可。

## No.964 — ミラクル
- record: `docs/real_machine_db/machines/2016-03-22_miracle.md`
- manufacturer: **エレコ**
- releaseDate canonical: **2016-03-22**
- formalModelName: **ミラクルMC**
- certificationNumber: **5S1217**
- generation/system: **5号機 / AT / モード管理型疑似ボーナス**

### identity / releaseDate
- P-WORLDでエレコ製5号機ATを確認。
- HAZUSEで型式「ミラクルMC」/検定「5S1217」/導入開始日2016-03-22を確認。
- グリーンべると2016-02-26当時記事はエレコ社製新機種として発表、3月下旬納品予定。
- 当時解析複数も2016-03-22導入で一致しcanonicalを3/22とした。

### performanceCore
- 機械割 canonical: **97.2 / 98.9 / 101.5 / 103.8 / 106.3 / 110.3%**。
- BIG: **1/333.1 / 305.8 / 271.2 / 246.6 / 222.2 / 189.0**。
- REG: **1/238.7 / 231.6 / 221.9 / 213.3 / 204.9 / 192.5**。
- 合算: **1/139.0 / 131.8 / 122.0 / 114.4 / 106.6 / 95.3**。
- 50枚ベース: **約49.5G/50枚**。
- 純増: **約3.0枚/G**。
- BIG: **150〜600枚以上**、REG: **50枚以上**。
- 通常天井: **999Gで疑似ボーナス**。
- 設定3機械割は101.5%と101.6%の資料差を `CONFLICT_PAYOUT_SETTING3_101_5_VS_101_6` として保持。

### resetBehavior v0.7
- 設定変更: **天井ゲーム数RESET / 内部モードRESET・再抽選**。
- 据え置き: **天井・内部モードCARRYOVER_SUPPORTED**。
- 純電源OFF→ON: **天井ゲーム数・内部モードCARRYOVER**。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の具体的モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- モードとは別の朝一低確/高確等の公開状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有のガックン/初期出目/ランプによる確定変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 直接の設定変更vs電断比較は後年回顧1系統で確認。検索語・資料系統を変更して再探索したが、同内容の独立直接表は固定できなかったため信頼度を `ANALYSIS_SINGLE_DIRECT_TABLE_AFTER_MULTI_QUERY_RESEARCH` として明示。

## 2016-03-22群監査 — OPEN
現時点候補:
1. **ミラクル** — エレコ — No.964 処理済み
2. **ゲッターマウス** — アクロス — 未処理
3. **バガナックルー** — 大都技研系/要正式メーカー確認 — 未処理

- モゲスロでは03/22群として上記3機種を掲載。
- 一撃の月間カレンダーはゲッターマウスのみ掲載で網羅性が低いため、同日群CLOSED判定には使わず補助扱い。
- 次回はゲッターマウスから処理し、バガナックルーを続けた後、03/22群を全メーカー横断で再監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_crash-bandicoot-s.md**
- retroQaNextInspection: **2006-02_new-oasis.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は前進リレーを優先し、既存retro QA地点は変更していない。

## 次回再開地点
1. **recordCount 964 / chronologicalFrontier 2016-03-22 / 03-22群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.964をmainから再取得。
3. 次の未処理機種 **ゲッターマウス（アクロス）** を性能コア + resetBehavior v0.7で処理。
4. 続いて **バガナックルー** を処理し、03/22群を全メーカー横断監査。
5. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
6. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
7. 遡及QAは `2006-02_new-oasis.md` から継続。既存性能コアを無駄にやり直さない。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と納品予定日・地域先行日を混同しない。
- 後年設置期限・検定期限一覧の日付を導入日へ転記しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.964 ミラクル
- グリーンべると: https://web-greenbelt.jp/00008458/
- P-WORLD: https://www.p-world.co.jp/machine/database/7995
- HAZUSE: https://hazuse.com/machine/pachislot/SX0126/
- 期待値見える化: https://slotjin.com/zone/miracle/
- すろぱちくえすと: https://www.slopachi-quest.com/article/miracle/
- pachislo-data: https://pachislo-data.com/eleco/23873
- ゆうべる（reset直接比較表）: https://yuberu-777.com/mirakuru-tenzyou/

### 境界 / 03-22群
- モゲスロ2016年導入カレンダー: https://moge-site.com/new-slot2016
- 一撃2016年3月新台スケジュール: https://1geki.jp/newmachinecalender/201603/

## confidence
- No.964 identity/manufacturer/system: **INDUSTRY_PLUS_MULTI_SOURCE_HIGH**
- No.964 formalModelName/certificationNumber: **ANALYSIS_DATABASE_HIGH**
- No.964 releaseDate: **HIGH_MULTI_SOURCE_PERIOD**
- No.964 performanceCore: **HIGH_MULTI_SOURCE_WITH_MINOR_PAYOUT_CONFLICT**
- No.964 resetBehavior gameCounter/mode/powerCycle: **ANALYSIS_SINGLE_DIRECT_TABLE_AFTER_MULTI_QUERY_RESEARCH**
- No.964 resetModeNumericDistribution: **UNVERIFIED_AFTER_RESEARCH**
- No.964 resetDetection: **NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH**
- 2016-03-15〜03-21 boundary: **CLOSED_FOR_CURRENT_RESEARCH**
- 2016-03-22 group: **OPEN**
