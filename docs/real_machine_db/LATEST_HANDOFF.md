# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **963**
- latestRecordAdded: **パチスロ ウルトラマン**（七匠）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-03-14_ultraman-nanashow.md`
- chronologicalFrontier: **2016-03-14**
- frontierLatestMachine: **パチスロ ウルトラマン**
- schema: **resetBehavior v0.7**
- status: **2016-03-14_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.962 `2016-03-14_okidoki-tropical-30.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **962** / chronologicalFrontier **2016-03-14** / 03-14群OPEN。
- handoff指定の次機種 **パチスロ ウルトラマン（七匠）** が未登録であることを確認し、性能コア + resetBehavior v0.7をNo.963として追加。

## No.963 — パチスロ ウルトラマン
- record: `docs/real_machine_db/machines/2016-03-14_ultraman-nanashow.md`
- manufacturer: **七匠**
- releaseDate canonical: **2016-03-14**
- formalModelName: **パチスロウルトラマンM**（二次DB確認）
- certificationNumber: **5S1500**（二次DB確認）
- generation/system: **5号機 / ノーマル / Aタイプ / 完全告知**

### identity / releaseDate
- 七匠公式製品ページで「パチスロ ウルトラマン」を完全告知Aタイプとして確認。
- P-WORLDもメーカー七匠、5号機・ノーマルタイプ・完全告知を確認。
- 当時スペック記事、パチビー、2016年導入カレンダー、当時攻略記事は **2016-03-14** で一致。
- 後年パチナビに **2016-03-22** 表記があるため、削除せず `CONFLICT_RELEASE_DATE_2016_03_14_VS_2016_03_22` として保持。当時複数資料を優先して3/14をcanonical。

### performanceCore
- 機械割: **97.59 / 98.69 / 99.94 / 102.64 / 104.93 / 107.49%**。
- BIG: **1/299.3 / 295.2 / 290.0 / 282.5 / 275.4 / 268.6**。
- REG: **1/468.1 / 448.9 / 431.2 / 390.1 / 358.1 / 334.4**。
- 合算: **1/182.6 / 178.1 / 173.4 / 163.8 / 155.7 / 148.9**。
- 50枚ベース canonical: **約34.1G/50枚**。後年資料に約33G表記があるため近似差として保持。
- BIG: **336枚**、REG: **130枚**。
- AT/ART純増: **NOT_APPLICABLE**。
- 天井/ゲーム数ゾーン: **なし**。

### resetBehavior v0.7
- ノーマルAタイプで天井・AT/ART/CZモード・有利区間を持たないため、設定変更に伴う天井短縮/モード再抽選/朝一専用CZ等は **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置きで持ち越し価値を持つ内部天井G数・AT/ARTモード・CZ周期は **NOT_APPLICABLE**。
- 純電源OFF→ONで朝一期待値へ影響する天井・モード・有利区間も **NOT_APPLICABLE**。
- 朝一専用の高確/低確振り分け、当選率、専用モード、恩恵発生率は検索語・資料系統を変えて横断後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有のガックン/リールガックン/初期出目/ランプ等の確定設定変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 通常のボーナス確率・小役による設定推測は朝一変更判別とは分離。

## 2016-03-14群監査
処理済み:
1. **ユルビスカス-30** — パイオニア — No.961
2. **沖ドキ！トロピカル-30** — アクロス — No.962
3. **パチスロ ウルトラマン** — 七匠 — No.963

- 2016年新台導入カレンダーでは03/14群は上記3機種で一致。
- handoff既知候補もすべて処理済みとなり、現調査範囲で追加未登録03/14機を強く固定できなかったため **2016-03-14_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とする。
- 3/14〜次の具体日3/22の間は境界監査を残し、日付の後年誤記/納品日混入を確認してから次群へ進む。

## 次の具体日群候補 — 2016-03-22
導入カレンダーで確認済みの候補:
1. **ミラクル**
2. **ゲッターマウス**
3. **バガナックルー**

- ただし候補名だけで追加せず、次回はまず **2016-03-15〜03-21境界監査** を行う。
- 境界に未処理機が無ければ03/22群へ進み、公式/業界/当時資料で全国導入日とメーカー・型式を固定した最初の未処理機種からNo.964を継続する。
- 03/22群についても候補外を含む全メーカー横断監査を行う。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_crash-bandicoot-s.md**
- retroQaNextInspection: **2006-02_new-oasis.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は前進リレーを優先し、既存retro QA地点は変更していない。

## 次回再開地点
1. **recordCount 963 / chronologicalFrontier 2016-03-14 / 03-14群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.963をmainから再取得。
3. **2016-03-15〜03-21境界監査**。未登録5号機が確認できれば日付順に先に処理。
4. 境界が閉じれば **2016-03-22群**へ。現時点候補はミラクル / ゲッターマウス / バガナックルー。
5. 最初の未処理機種を性能コア + resetBehavior v0.7で追加し、同日群を全メーカー監査。
6. 遡及QAは `2006-02_new-oasis.md` から継続。既存性能コアを無駄にやり直さない。
7. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
8. 競合は平均せずCONFLICT/variant差/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と納品予定日・地域先行日を混同しない。
- 後年設置期限・検定期限一覧の日付を導入日へ転記しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同名スマスロのresetBehaviorを旧5号機へ流用しない。

## 主要出典 — 取得日 2026-09-08
### No.963 パチスロ ウルトラマン
- 七匠公式: https://www.nanashow.co.jp/product/
- P-WORLD: https://www.p-world.co.jp/machine/database/7998
- 2016年当時スペック記事: https://pachinkopachisro.com/archives/46780361.html
- パチビー: https://www.pachibee.jp/movies/index/12474
- 2016年新台カレンダー: https://moge-site.com/new-slot2016
- 当時攻略記事一覧: https://jikyu2000.com/2016/03/
- 回顧解析: https://xn--x9ja8p0go69l5jtgfm.com/ultraman-1463
- パチナビ（型式/検定・3/22競合）: https://pachinavi.net/machines/ultraman-1/

### 03/14群 / 次群境界
- 2016年新台カレンダー: https://moge-site.com/new-slot2016

## confidence
- No.963 identity/manufacturer/system: **OFFICIAL_PLUS_MULTI_SOURCE_HIGH**
- No.963 formalModelName/certificationNumber: **SECONDARY_SINGLE_UNVERIFIED_PRIMARY**
- No.963 releaseDate: **HIGH_MULTI_SOURCE_PERIOD_WITH_CONFLICT_RETAINED**
- No.963 performanceCore: **HIGH_MULTI_SOURCE**
- No.963 resetBehavior: **STRUCTURAL_NOT_APPLICABLE_PLUS_NEGATIVE_FINDINGS_AFTER_MULTI_QUERY_RESEARCH**
- No.963 resetDetection: **NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH**
- 03/14 group completeness: **CLOSED_FOR_CURRENT_RESEARCH**
