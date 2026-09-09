更新日: 2026-09-09

## 現在地点
- recordCount: **1116**
- latestRecordAdded: **アイムジャグラーEX-AE**（北電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08-07_im-juggler-ex-ae.md`
- chronologicalFrontier: **2017-08-07**
- frontierLatestMachine: **アイムジャグラーEX-AE — No.1116**
- schema: **resetBehavior v0.7**
- status: **2017-08-07_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1115「政宗2」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1115件 / chronologicalFrontier 2017-07-31 / 7/31群OPEN_BOUNDARY_RESOLVED**。
- 2017-07-31同日群を導入日順一覧、当時系新台カレンダー、解析/機種個別資料で横断監査。既登録のNo.1113「バイオハザード リベレーションズ」、No.1114「燃えよ！功夫淑女ドラゴン」、No.1115「政宗2（一部地域先行）」以外の追加候補を固定できず **2017-07-31_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** と判定。
- 政宗2の一般導入8/7表記は同一機種なので重複登録しない。
- 次の未処理日2017-08-07へ進み、No.1116「アイムジャグラーEX-AE」をperformance core + resetBehavior v0.7で登録。
- 欠損判定前に「アイムジャグラーEX-AE / EX AE / アイムジャグラーEX-AE／KT / 北電子 / 7S0393」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 50枚」を組み替え、北電子公式、業界記事、HAZUSE、K-Navi、P-WORLD、解析、ジャグラー専門整理を横断。

## No.1116 — アイムジャグラーEX-AE
- manufacturer: **北電子**
- releaseDate canonical: **2017-08-07**
- formalModelName: **アイムジャグラーEX-AE／KT**
- certificationNumber: **7S0393**
- generation/system: **5号機 / ノーマルA / 完全告知**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT_RESOLVED_TO_OFFICIAL_INDUSTRY_2017_08_07**

### identity / releaseDate
- 北電子公式製品一覧はAEを **2017年8月** 製品として掲載。
- PiDEA Xの2017-06-23記事は北電子の発売発表と **8/7開店予定** を明記。
- HAZUSE/K-Naviも **2017-08-07** で一致。
- ちょんぼりすたのシリーズまとめのみ **2017-03-06** とするが、北電子公式で2017年3月製品は別機「アイムジャグラーEX AnniversaryEdition」、AEは8月。3/6は **CONFLICT_SECONDARY_LIKELY_SERIES_AGGREGATION_MISASSIGNMENT_2017_03_06** として保持し、canonicalは8/7。

### performanceCore
- 機械割: **95.9 / 96.7 / 98.7 / 100.8 / 102.8 / 105.2%**。
- BIG: **1/287.4 / 282.5 / 282.5 / 273.1 / 273.1 / 268.6**。
- REG: **1/455.1 / 442.8 / 348.6 / 321.3 / 268.6 / 268.6**。
- 合算: **1/176.2 / 172.5 / 156.0 / 147.6 / 135.4 / 134.3**。
- 北電子公式、K-Navi、HAZUSEで一致。
- ベース代表値: **約35〜36G/50枚**。必勝本は算出条件付き34.46〜35.82G、なな徹実戦値34.52〜36.39G。条件差を平均せず代表レンジ化。
- BIG: **平均約325枚**、REG: **平均約104枚**。
- ノーマルAのためART/AT純増はN/A、ゲーム数天井は非搭載。

### resetBehavior v0.7
- settingChange: ゲーム数天井/ゾーン/朝一専用モード/高確低確は **NOT_APPLICABLE**。本機固有の低レベル内部状態の変更契約は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- carryOver/stay setting: 天井/モード/高確の引継ぎはN/A。成立済みボーナス、リール初期状態等の本機固有の独立「据え置き」契約は **UNVERIFIED_AFTER_RESEARCH**。
- pure power OFF→ON: 同様に天井/モード/高確はN/A。成立済みボーナス/リール初期状態/ガックンへの影響を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING / NOT_APPLICABLE_NO_CEILING**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties: 天井短縮、朝一高確、CZ優遇、初当たり優遇、設定変更専用の出玉上の不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: ジャグラー専門整理で本機は **ガックン判別○**。ただし本機固有の100% deterministicな発生契約/確率や純電断との差までは固定できず、**POSSIBLE_GAKKUN_NONDETERMINISTIC / ANALYSIS_SINGLE_PRACTICE** として保持。
- numericResetData: resetCeiling N/A、resetModeDistribution N/A、publishedMorningHitRate NONE_CONFIRMED、deterministicGakkunProbability UNVERIFIED。

## 2017-07-31群監査結果
- **2017-07-31_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- 登録済み: No.1113 バイオハザード リベレーションズ / No.1114 燃えよ！功夫淑女ドラゴン / No.1115 政宗2（一部地域先行）。
- すろぱちくえすと2017導入一覧は7/31を上記3機、別の2017新台カレンダーもバイオ/功夫を同日群として掲載。政宗2は地域先行7/31を既存資料で解決済み。
- 7/31〜8/6の追加未処理日候補も複数カレンダーで固定できず、次の未処理日は8/7。

## 2017-08-07群
- No.1116 アイムジャグラーEX-AE 登録済み。
- 政宗2は8/7一般導入表記があるがNo.1115として地域先行7/31で登録済みのため重複登録しない。
- すろぱちくえすと/ALL7/機種個別資料から、次の未処理候補は **パチスロ 世界でいちばん強くなりたい！**（藤商事、2017-08-07）。藤商事公式機種ページ、K-Navi、ちょんぼりすた、パチスロデータで存在・メーカー・8/7導入を先行確認済み。
- 8/7群はまだ **OPEN**。世界でいちばん強くなりたい！登録後、同日全メーカー横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は新規本線No.1116を優先したため遡及カーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1116を再取得。
2. **1116件 / chronologicalFrontier 2017-08-07 / 8/7群OPEN** を正本として継続。
3. 次の未処理 **No.1117候補「パチスロ 世界でいちばん強くなりたい！」（藤商事）** をperformance core + resetBehavior v0.7で登録。
4. 設定変更時ポイント抽選、天井、周期/モード状態、据え置き、純電断、朝一恩恵/不利、変更判別、公開朝一数値を優先探索する。K-Naviには「設定変更時のポイント抽選」、ちょんぼりすた/すろぱちくえすとには朝一リセット項目が存在するため直接確認する。
5. No.1117登録後、2017-08-07同日全メーカー横断監査を行い群CLOSE可否を判定する。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1116 アイムジャグラーEX-AE
- 北電子公式製品情報: https://www.kitadenshi.co.jp/slot/
- 北電子公式検定情報: https://www.kitadenshi.co.jp/slot-kentei/imjugglerex-ae/
- PiDEA X: https://pidea.jp/articles/%E5%88%9D%E4%BB%A3%E3%83%91%E3%83%8D%E3%83%AB%E5%BE%A9%E5%88%BB%E7%89%88%E3%80%8C%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BCEX%E3%80%8D%E7%99%BA%E5%A3%B2%EF%BC%8F%E5%8C%97%E9%9B%BB%E5%AD%90
- HAZUSE: https://hazuse.com/machine/pachislot/7S0393/
- K-Navi: https://p-kn.com/slot/2839/
- P-WORLD: https://www.p-world.co.jp/machine/database/8441
- ぱちすろLIFE: https://pachislot-life.com/information/ex-ae/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3223/1/70622
- なな徹: https://nana-press.com/kaiseki/machine/15/279/
- 元プロMGジャグラーシリーズ整理: https://www.pachislotblog.tokyo/juggler-series-specmatome/
- ちょんぼりすたシリーズまとめ: https://chonborista.com/slot/kitadenshi/9698/

### 7/31〜8/7境界監査
- すろぱちくえすと2017導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 2017新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
- ALL7 2017年8月導入予定一覧: https://www.all7.jp/plans/index/2017/08

### 次候補 パチスロ 世界でいちばん強くなりたい！
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_sekatsuyo/
- K-Navi: https://p-kn.com/slot/2840/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/41739/
- パチスロデータ: https://pachislo-data.com/fuji/47522
- すろぱちくえすと: https://www.slopachi-quest.com/article/sekaideichibantuyokunaritai/
