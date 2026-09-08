# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **965**
- latestRecordAdded: **ゲッターマウス**（アクロス）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-03-22_getter-mouse.md`
- chronologicalFrontier: **2016-03-22**
- frontierLatestMachine: **ゲッターマウス**
- schema: **resetBehavior v0.7**
- status: **2016-03-22_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.964 `2016-03-22_miracle.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **964** / chronologicalFrontier **2016-03-22** / 03-22群OPEN。
- handoff指定どおり次の未処理機種 **ゲッターマウス（アクロス）** をNo.965として追加。

## No.965 — ゲッターマウス
- record: `docs/real_machine_db/machines/2016-03-22_getter-mouse.md`
- manufacturer: **アクロス**
- releaseDate canonical: **2016-03-22**
- formalModelName: **ゲッターマウスDG**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマル / Aタイプ / 技術介入**

### identity / releaseDate
- 2016-02-26グリーンべるとでアクロス社製A PROJECT第5弾として確認、3月下旬納品予定。
- 一撃/K-Navi/複数当時解析で2016-03-22導入一致。
- DMM機種DB検索索引と中古実機DBで型式 **ゲッターマウスDG** を照合。
- 検定番号は「ゲッターマウス / ゲッターマウスDG / アクロス / 検定 / 5S」を組み替え再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### performanceCore
- 市場掲載canonical機械割: **98.7 / 99.7 / 101.3 / 103.4 / 106.7 / 110.8%**。
- 完全攻略時: **100.2 / 101.2 / 102.6 / 105.0 / 108.4 / 112.6%**。技術介入機のため通常値と別定義で保持。
- BIG: **1/284.9 / 280.1 / 274.2 / 266.4 / 252.1 / 234.9**。
- REG: **1/297.9 / 290.0 / 278.9 / 270.8 / 254.0 / 234.9**。
- 合算: **1/145.6 / 142.5 / 138.3 / 134.3 / 126.5 / 117.5**。
- 50枚ベース: **約34.1G/50枚**。
- BIG最大 **310枚** / REG最大 **115枚**。
- 純増: `NOT_APPLICABLE_NORMAL_TYPE`。
- 天井: **非搭載**。
- 通常掲載機械割は、ちょんぼりすたの非攻略時 **97.8 / 98.7 / 100.3 / 103.4 / 106.7 / 109.7%** と一部競合するため平均せず `CONFLICT_STANDARD_PAYOUT_SERIES` を保持。

### resetBehavior v0.7
- 本機は天井・AT/ART・ゲーム数解除・通常時天国モード等を持たないノーマルタイプ。
- 天井ゲーム数、設定変更後短縮天井、モード振り分けは **NOT_APPLICABLE**。
- 当時一撃の専用「天井/設定変更」ページは天井非搭載を明記する一方、設定変更時詳細と純電源OFF/ONは双方 **現在調査中** のまま。
- 本機固有の設定変更時内部状態再抽選、純電断時の初期出目/ランプ保持、朝一専用状態は、検索語・資料系統を変更して再探索しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- リセット短縮天井、天国優遇、朝一CZ、保証ボーナス等の朝一恩恵/不利は **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有のガックン・初期出目・ランプ等による確定設定変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- BIG終了時ボイス/GET表示等の設定示唆は存在するが「設定変更/据え置き判別」ではないためresetDetectionには混入させない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2016-03-22群監査 — OPEN
現時点候補:
1. **ミラクル** — エレコ — No.964 処理済み
2. **ゲッターマウス** — アクロス — No.965 処理済み
3. **バガナックルー** — 大都技研系/要正式メーカー確認 — **次の未処理**

- モゲスロ2016年新台カレンダーでは03/22群として上記3機種を掲載。
- 一撃月間カレンダーは網羅性が限定的なので、同日群CLOSED判定には単独使用しない。
- 次回は **バガナックルー** を性能コア+resetBehavior v0.7で処理し、その後03/22群を全メーカー横断再監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_crash-bandicoot-s.md**
- retroQaNextInspection: **2006-02_new-oasis.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は前進リレーを優先し、既存retro QA地点は変更していない。

## 次回再開地点
1. **recordCount 965 / chronologicalFrontier 2016-03-22 / 03-22群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.965をmainから再取得。
3. 次の未処理機種 **バガナックルー** を処理。正式メーカー・型式・導入日variantを最初に固定する。
4. 性能コア + resetBehavior v0.7（設定変更/据え置き/純電断、ゲーム数・天井、モード・状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値）を収集。
5. バガナックルー処理後、03/22群をメーカー別一覧・当時新台一覧・業界記事・古DBで横断再監査し、漏れがなければCLOSED判定。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
7. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
8. 遡及QAは `2006-02_new-oasis.md` から継続。既存性能コアを無駄にやり直さない。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と納品予定日・地域先行日を混同しない。
- 後年設置期限・検定期限一覧の日付を導入日へ転記しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。
- 技術介入機は市場掲載機械割と完全攻略時機械割を同一定義に混ぜない。

## 主要出典 — 取得日 2026-09-08
### No.965 ゲッターマウス
- グリーンべると: https://web-greenbelt.jp/00008457/
- P-WORLD: https://www.p-world.co.jp/machine/database/7994
- 一撃 本体: https://1geki.jp/slot/gettermouse/
- 一撃 ボーナス確率: https://1geki.jp/slot/gettermouse/1/
- 一撃 天井/設定変更: https://1geki.jp/slot/gettermouse/3/
- K-Navi: https://p-kn.com/slot/2461/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/17567/
- すろかい当時解析: https://slotkaiseki.hatenablog.com/entry/2016/03/28/212125
- DMMぱちタウン: https://p-town.dmm.com/machines/2451
- 中一商事中古実機: https://item.rakuten.co.jp/auc-nakaiti/geta/

### 03-22群
- モゲスロ2016年導入カレンダー: https://moge-site.com/new-slot2016
- 一撃2016年3月新台スケジュール: https://1geki.jp/newmachinecalender/201603/

## confidence
- No.965 identity/manufacturer/system: **INDUSTRY_PLUS_MULTI_SOURCE_HIGH**
- No.965 formalModelName: **ANALYSIS_DATABASE_PLUS_MACHINE_MARKET_CROSSCHECK**
- No.965 certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- No.965 releaseDate: **HIGH_MULTI_SOURCE_PERIOD**
- No.965 performanceCore: **HIGH_MULTI_SOURCE_WITH_PAYOUT_DEFINITION_CONFLICT**
- No.965 resetBehavior ceiling/mode relevance: **HIGH_NOT_APPLICABLE_NORMAL_TYPE_PLUS_PERIOD_SOURCE**
- No.965 settingChange/powerCycle exact internal contract: **UNVERIFIED_AFTER_RESEARCH**
- No.965 resetDetection: **NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH**
- 2016-03-22 group: **OPEN**
