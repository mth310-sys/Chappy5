# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **922**
- latestRecordAdded: **ビーストバスターズ**（SNKプレイモア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-13_beast-busters.md`
- chronologicalFrontier: **2015-10-13**
- frontierLatestMachine: **ビーストバスターズ**
- frontierRecord: `docs/real_machine_db/machines/2015-10-13_beast-busters.md`
- schema: **resetBehavior v0.7**
- status: **2015-10-13_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.921 `2015-10-05_kujilucky.md` を再読。
- INDEXは19件時点の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount 921 / 2015-10-05_GROUP_OPEN_REAUDIT_PENDING。
- 10/05群と10/06〜10/18境界を再監査したところ、前回handoffが次候補を10/19としていた一方で、**2015-10-13「ビーストバスターズ」**（SNKプレイモア）が未登録と判明。時系列漏れ防止のため10/19へ進まずNo.922として先に追加。

## No.922 — ビーストバスターズ

- record: `docs/real_machine_db/machines/2015-10-13_beast-busters.md`
- manufacturer: **SNKプレイモア**
- releaseDate canonical: **2015-10-13**
- generation/system: **5号機 A+ART / 自力継続型ART + CZ**
- formalModelName: **ビーストバスターズAE**
- inspectionNumber: **5S0596**

### performanceCore

- 機械割: **97.5 / 99.2 / 100.9 / 105.8 / 110.6 / 114.8%**。
- ART初当たり: **1/527.7 / 505.2 / 457.0 / 401.3 / 347.5 / 299.4**。
- ボーナス合算: **1/249.1 / 234.9 / 239.1 / 211.4 / 213.4 / 199.2**。
- 50枚ベース: **約30G**。
- ART純増: **約1.4枚/G**。
- ART「ビーストラッシュ」: **1セット7G+α、初回31G保証、継続率89〜99%**。
- ボーナス純増: 青7 **304枚** / 赤7 **200枚** / EXTRA SHOCK **108枚** / REG **48枚**。
- 実質天井: **バレット12個獲得でART確定**（解析上約1200G目安）。固定G数天井とは分離。

### resetBehavior v0.7

- 設定変更: 当時解析に **天井進捗RESET** の直接記載あり。
- 据え置き: 2-9伝説の宵越し分類では本機は「宵×＝設定変更でリセット」。純電源OFFリセット機は別記号「宵××」のため、設定変更なしなら天井進捗の宵越しを `CARRYOVER_SUPPORTED_BY_YOI_CLASSIFICATION` とした。
- 純電源OFF→ON: 本機固有の直接比較表は確認できず、上記分類から **CARRYOVER_SUPPORTED_INDIRECT_CLASSIFICATION**。DIRECT扱いにはしていない。
- バレット個数 / 途中ビーストカウンター / 高確状態を設定変更時に個別にどう初期化するかは、表記揺れ・型式・SNK・設定変更/リセット/朝一/据え置き/電源OFF ON/バレット/ビーストカウンターを組み替えて再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の固定短縮天井、朝一専用モード振り分け、CZ/ART優遇率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目/ランプ等の変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflicts

- 導入日は HAZUSE / パチビー / 2-9伝説等が **2015-10-13**、ちょんぼりすた/すろぱちくえすと旧記事に **2015-10-05**。SNK発表を扱う業界記事は「10月中旬納品予定」。平均せず `RELEASE_DATE_CONFLICT_SECONDARY` として10-05を保持し、具体日複数一致 + 中旬整合から10-13をcanonical。
- ART継続率はPiDEA Xに89〜98%、グリーンべると/パチマガスロマガ等に89〜99%。多数資料側89〜99%を性能コア採用し98%表記を競合注記。

## 時系列境界監査

### 2015-10-05群
処理済み:
1. ルパン三世 ロイヤルロード — No.917
2. ベヨネッタ — No.918
3. Zゴールド・インフィニティ — No.919
4. サイレントヒル — No.920
5. クジラッキー — No.921

- メーカー名・機種名・導入カレンダー系資料で再監査。
- ビーストバスターズには10/05表記資料があるが、具体日高信頼資料では10/13が優勢のため10/05群には重複登録しない。
- 追加未登録の10/05確定機を今回固定できず、**2015-10-05_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

### 2015-10-06〜10-12
- 日付別・月間新台・メーカー横断で再監査。
- 未登録の具体日付き5号機を今回固定できず **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

### 2015-10-13群
- **ビーストバスターズ**をNo.922として登録。
- 10/13日付を機種名なし・メーカーなしでも再検索したが、他の未登録パチスロ5号機を今回固定できず **GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

### 2015-10-14〜10-18
- 各日付・導入日・新台で再監査。
- パチビーの10/14〜15掲載は既存機種の動画公開日等でありホール導入日と混同しない。
- 未登録の具体日付き5号機を今回固定できず **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## 遡及 resetBehavior QA

- 今回は時系列漏れ修正を優先し、retroQaCursorは推測で前進させていない。
- 既存 `COMPLETE_CORE` は変更なし。
- retroQaStatus: **CURSOR_RESOLUTION_PENDING / NO_FALSE_PROGRESS**。

## 次回再開地点

1. **recordCount 922 / chronologicalFrontier 2015-10-13 / 10-13_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.922を再取得。
3. 10/14〜10/18境界を短く再確認し、次の強い導入日 **2015-10-19** へ進む。
4. 10/19先頭候補: **パチスロ地獄少女（藤商事）**。続いて **パチスロ デッドマン・ワンダーランド（北電子）**。候補だけに限定せず同日全メーカーを再監査。
5. 10/19群を閉じる前にSTEINS;GATE、機甲戦記ドラグナー等の10月後半機との日付境界を確認し、導入日を発表日/記事日と混同しない。
6. 遡及QAは長州力の次の実未処理resetBehaviorレコードをリポジトリ実体から特定して補完。カーソルを推測で飛ばさない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 「宵×」分類から得られる純電断挙動はDIRECTではなくINDIRECT SUPPORTとして保持。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せずCONFLICT/定義差として双方保持。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 主要出典 — 取得日 2026-09-08

### No.922 ビーストバスターズ
- SNKプレイモア公式: https://slot.snk-corp.co.jp/
- PiDEA X: https://www.pidea.jp/articles/SNK%E3%80%8C%E3%83%93%E3%83%BC%E3%82%B9%E3%83%88%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%E3%80%8D%E5%B0%82%E7%94%A8%E7%AD%90%E4%BD%93%E3%81%A7%E7%99%BB%E5%A0%B4
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/7727/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/5S0596/
- パチビー: https://www.pachibee.jp/movies/index/12113
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/51/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7821
- ちょんぼりすた: https://chonborista.com/slot/snk/11910/
- 2-9伝説 個別: https://2-9densetsu.com/beastbasters/
- 2-9伝説 天井一覧: https://2-9densetsu.com/blog-entry-311-html/
- 楽スロ: https://rakuslo.com/beastbusters-bonus.html

### 次時系列候補
- 地獄少女: https://chonborista.com/slot/fuji-slot/11673/
- デッドマン・ワンダーランド: https://p-kn.com/slot/2345/

## confidence

- exactReleaseDate: CONFLICT_WITH_CANONICAL_ANALYSIS_HIGH_MULTI_SOURCE_2015_10_13
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeCeilingProgressReset: ANALYSIS_HIGH_DIRECT_STATEMENT
- carryOverBehavior: ANALYSIS_SUPPORTING_YOI_CLASSIFICATION
- purePowerCycleBehavior: ANALYSIS_SUPPORTING_INDIRECT_NOT_DIRECT
- resetModeNumericData: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- retroQaCursor: CURSOR_RESOLUTION_PENDING
