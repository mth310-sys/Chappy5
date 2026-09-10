更新日: 2026-09-10

## 現在地点
- recordCount: **1227**
- latestRecordAdded: **パチスロ ハクション大魔王**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-09-03_hakushon-daimaoh.md`
- chronologicalFrontier: **2018-09-03**
- frontierLatestMachine: **パチスロ ハクション大魔王 — No.1227**
- schema: **resetBehavior v0.7**
- status: **2018-09-03_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1226を再取得して開始。
- INDEXは旧スナップショットのためREADME規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 1226件 / 2018-09-03群OPENから、既知同日未処理の `パチスロ ハクション大魔王` を重複なし確認後No.1227として登録。
- Amusement Japan当時業界記事、日刊スポーツ導入カレンダー、パチマガスロマガ、ちょんぼりすた、すろぱちくえすと、P-WORLD、中古実機DBを横断。
- WORLDブランド第1弾、製造JPS、5号機A+RT、正式型式表記 `パチスロハクション大魔王AA` を複数DBで照合。検定番号は再探索後もUNVERIFIED。
- 導入日は当時業界記事+カレンダー+複数解析が2018-09-03で一致。一部後年ページの2018-09-02は `CONFLICT_RELEASE_DATE_2018_09_02_VS_2018_09_03` として保持。
- 設定2/5/6。通常機械割98.5/101.7/105.3%、完全攻略101.1/103.7/107.2%。BIG 1/348.6/1/372.3/1/394.8、REG 1/387.7/1/269.7/1/221.4、合算1/183.5/1/156.4/1/141.8。
- 約39G/50枚をcanonical headlineとし、別解析の約39～43Gは設定/手順差を含むレンジとして併記。BIG最大311枚、REG最大104枚、RT約0.1枚/G、BIG後10G CZ経由で20G/40G RT。通常ゲーム数天井なし。
- resetBehaviorは当時解析自体が設定変更/電源OFF→ON時のRT状態・ステージを「調査中」と掲載。他系統も再探索したが直接契約を固定できず、一般論を転記せずUNVERIFIED。公開朝一数値・変更判別条件もNONE_CONFIRMED/UNVERIFIED。
- 日刊スポーツ当時カレンダー上9/3パチスロはスーパービンゴリバースとハクション大魔王の2機。別検索でも追加同日機を固定できなかったため9/3群をCLOSED。
- 遡及QAは `2006-09_kyuji.md`（球児）を再探索。既存 `coreStatus: PARTIAL` は維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- 球児の設定変更/据え置き/純電断時「反撃タイム」残G・内部RT状態を直接示す本機固有資料は追加固定できず、据え置き/純電断を独立未確認として保存。有利区間は制度前でNOT_APPLICABLE。

## No.1227 — パチスロ ハクション大魔王
- manufacturer: **WORLD（ブランド） / JPS（製造）**
- releaseDateCanonical: **2018-09-03**
- formalModelName: **パチスロハクション大魔王AA**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / A+RT**
- settings: **2 / 5 / 6**
- payoutRateNormal: **98.5 / 101.7 / 105.3%**
- payoutRateFullStrategy: **101.1 / 103.7 / 107.2%**
- BIG: **1/348.6 / 1/372.3 / 1/394.8**
- REG: **1/387.7 / 1/269.7 / 1/221.4**
- bonusCombined: **1/183.5 / 1/156.4 / 1/141.8**
- baseGamesPer50: **約39G/50枚（別解析レンジ約39～43G）**
- netIncrease: **RT約0.1枚/G**
- basicPayout: **BIG最大311枚 / REG最大104枚 / BIG後CZ10G→RT20G or 40G**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH**（当時解析もRT状態/ステージ「調査中」）。
- gameCounter/ceiling: 通常ゲーム数天井なし。短縮天井NOT_APPLICABLE。
- mode/state: 朝一専用モードNONE_CONFIRMED、RT残G処理UNVERIFIED。
- advantageousSection: **UNVERIFIED_AFTER_RESEARCH**。5.9号機一般論等を本機固有契約に昇格しない。
- resetBenefits/resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。
- numericResetData: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2018-09-03群監査
### 登録済み
- No.1226 スーパービンゴリバース — 2018-09-03。
- No.1227 パチスロ ハクション大魔王 — 2018-09-03。

### 群判定
- 日刊スポーツ2018-08-31導入カレンダーは9/3パチスロを上記2機として掲載。
- 機種名/9月3日/新台/各メーカー系検索を追加し、別スペック/PB/地域差の追加対象を固定できず `2018-09-03_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。

## 次時系列群
- 次の既知群は **2018-09-18**。
- 候補: `パチスロ ベン・トー ～狼たちの夜～（バルテック）` / `パチスロ 闇芝居（ネット）` / `アレックス（アクロス）`。
- 次回は9/4～9/17境界漏れを別系統資料で再監査後、9/18群をOPENする。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-09_kyuji.md**（球児）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-09_burichika-30.md`（ブリチカ-30）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- Git追加履歴上、球児追加commit `48ba1794...` の直後の実機追加がブリチカ-30 commit `f2dcb4d4...` であることを確認。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を本機固有契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 技術介入機では通常/完全攻略等の機械割定義を混同しない。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1227を再取得。
2. **1227件 / chronologicalFrontier 2018-09-03 / `2018-09-03_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. 9/4～9/17境界監査後、**2018-09-18群**をOPEN。先頭候補は `パチスロ ベン・トー ～狼たちの夜～`。闇芝居/アレックスも同日候補として保持。
4. 遡及QAは `docs/real_machine_db/machines/2006-09_burichika-30.md`（ブリチカ-30）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1227 パチスロ ハクション大魔王
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000709/
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/m/amusement/pachislot/news/amp/201808310000459.html
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/world_slot/01/a.php
- ちょんぼりすた: https://chonborista.com/slot/world/63323/
- すろぱちくえすと: https://www.slopachi-quest.com/article/hakushon-daimaoh/
- P-WORLD: https://www.p-world.co.jp/machine/database/8708
- 中一商事: https://www.nakaiti.com/html/sJPS002.html

### 球児 QA
- 5号機クロニクル: https://5goki.com/snkplaymore
- パチメロ: https://pachimelo.com/snk/s-kyuji/
- SNK公式: https://www.snk-corp.co.jp/official/slot-panic/
- 回顧資料: https://www.marimo0925.net/pachislot-kikaiwari-ranking-kyuuji-ban/
