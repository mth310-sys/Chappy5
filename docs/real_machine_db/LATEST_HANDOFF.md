# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **961**
- latestRecordAdded: **ユルビスカス-30**（株式会社パイオニア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-03-14_yurubiscus-30.md`
- chronologicalFrontier: **2016-03-14**
- frontierLatestMachine: **ユルビスカス-30**
- schema: **resetBehavior v0.7**
- status: **2016-03-14_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.960 `2016-03-07_jujika3.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **960** / chronologicalFrontier **2016-03-07** / 03-07群CLOSED。
- 03/08〜03/13境界を確認し、公式一次資料に従い3/14全国稼働の **ユルビスカス-30** をNo.961で追加。

## No.961 — ユルビスカス-30
- record: `docs/real_machine_db/machines/2016-03-14_yurubiscus-30.md`
- manufacturer: **株式会社パイオニア**
- releaseDate canonical: **2016-03-14 全国稼働開始**
- formalModelName: **ユルビスカスDX-30**
- generation/system: **5号機 / ノーマル / 完全告知 / 30Φ / BB+REG**

### performanceCore
- 機械割: **96.6 / 98.2 / 99.9 / 102.4 / 105.1 / 112.0%**。
- BIG: **1/299 / 287 / 275 / 264 / 253 / 226**。
- REG: **1/496 / 478 / 458 / 439 / 420 / 376**。
- 合算: **1/186 / 179 / 172 / 165 / 157 / 141**。
- 50枚ベース: **約38.5G**。
- BIG最大純増 **312枚** / REG最大純増 **104枚**。
- 天井なしのノーマルタイプとして扱う。

### identity / 日付競合
- パイオニア公式プレス: **全国納品2016-03-13より順次、沖縄のみ2016-02-21**。
- パイオニア公式機種サイト: **2016-03-14 全国稼働開始**。
- K-Navi / 777パチガブ / パチ7も3/14導入で一致。
- 一部DBの **2016-02-22** 表記は全国導入canonicalには採用せず、`CONFLICT_RELEASE_DATE_DATABASE_0222_VS_OFFICIAL_INDUSTRY_MARCH` として保持。

### resetBehavior v0.7
- 通常ゲーム数天井: **NOT_APPLICABLE / NONE_CONFIRMED**。
- 通常時ゲーム数モード / 朝一専用モード: **NONE_CONFIRMED_AFTER_RESEARCH**。
- AT/ART/RT状態: **NOT_APPLICABLE**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 設定変更専用短縮天井・初当たり優遇・朝一恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 成立済みボーナス等の特殊状態についての設定変更/純電断契約: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有のガックン/初期出目/ランプ等による即時変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ボーナス後パネルフラッシュは設定推測要素であり、設定変更/据え置き即時判別とは分離。

## 2016-03-14群監査
処理済み:
1. **ユルビスカス-30** — パイオニア — No.961

未処理として今回確認:
2. **沖ドキ！トロピカル-30** — 3/14導入資料あり。25Φ/既存variantと混同せず独立性を確認して次処理。
3. **ウルトラマン** — 七匠 — 3/14導入資料あり。

- 2016年導入カレンダー/当時解析記事で上記3機を03/14群として確認。
- よって03/14群は **OPEN** のまま。沖ドキ！トロピカル-30 → ウルトラマンの順に独立レコード有無を確認し、全メーカー横断後にCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_crash-bandicoot-s.md**
- retroQaNextInspection: **2006-02_new-oasis.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**

### 今回QA — クラッシュバンディクーS
- 性能側 `status: PARTIAL` は維持。
- resetBehavior QAのみ **PARTIAL_RESEARCH_EXHAUSTED** へ更新。
- 「クラッシュバンディクーS / クラッシュ・バンディクーS / サミー」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目」を再探索。
- 当時業界記事、P-WORLD、古DB、解析、回顧資料を横断したが、本機固有の成立済みボーナス等の電断/設定変更時処理および変更判別は直接根拠を固定できず。
- 通常時ゲーム数天井・朝一専用モード・設定変更専用恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。有利区間は非該当。
- 既存性能コア判定は崩していない。

## 次回再開地点
1. **recordCount 961 / chronologicalFrontier 2016-03-14 / 03-14群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.961をmainから再取得。
3. **沖ドキ！トロピカル-30** が既存25Φ/別variantと独立レコード化対象かを型式・メーカー・導入日で確認し、未登録なら性能コア + resetBehavior v0.7を収集して追加。
4. 続いて **ウルトラマン（七匠）** を処理。
5. 03/14群を全メーカー横断監査し、漏れがなければCLOSEDへ。
6. 遡及QAは `2006-02_new-oasis.md` から継続。既存 `COMPLETE_CORE` は維持し、resetBehavior QA状態だけ別管理する。
7. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
8. 競合は平均せずCONFLICT/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と一部地域先行日を混同しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 検定日/認定日/発表日/納品予定日/設置期限起点日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・別variantのresetBehaviorを無条件流用しない。

## 主要出典 — 取得日 2026-09-08
### No.961 ユルビスカス-30
- パイオニア公式プレス: https://www.slot-pioneer.co.jp/information/pdf/pioneer_yuru_pr_web.pdf
- パイオニア公式機種サイト: https://www.slot-pioneer.co.jp/product/yurubiscus/
- グリーンべると: https://web-greenbelt.jp/00008412/
- P-WORLD: https://www.p-world.co.jp/machine/database/7979
- 777パチガブ: https://p-gabu.jp/guideworks/machinecontents/detail/4137
- パチ7: https://pachiseven.jp/articles/detail/11686
- 5号機クロニクル: https://5goki.com/pioneer

### 03/14群境界
- 2016年新台カレンダー（03/14: 沖ドキ！トロピカル-30 / ウルトラマン / ユルビスカス-30）: https://moge-site.com/new-slot2016
- 当時解析記事（ウルトラマン3/14導入）: https://jikyu2000.com/2016/03/

### retro QA クラッシュバンディクーS
- グリーンべると: https://web-greenbelt.jp/00004520/
- P-WORLD: https://www.p-world.co.jp/machine/database/4070
- 5号機クロニクル: https://5goki.com/sammy
- pacnk: https://pacnk.com/slot/tools/sh_kurasshubikuesu.html

## confidence
- No.961 identity/releaseDate: **OFFICIAL_PLUS_INDUSTRY_HIGH**
- No.961 performanceCore: **OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- No.961 resetBehavior: **NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH**
- 03/14 group completeness: **OPEN_MORE_CONFIRMED_MACHINES_PENDING**
- Crash Bandicoot S reset QA: **PARTIAL_RESEARCH_EXHAUSTED**
