更新日: 2026-09-10

## 現在地点
- recordCount: **1226**
- latestRecordAdded: **スーパービンゴリバース**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-09-03_super-bingo-reverse.md`
- chronologicalFrontier: **2018-09-03**
- frontierLatestMachine: **スーパービンゴリバース — No.1226**
- schema: **resetBehavior v0.7**
- status: **2018-09-03_GROUP_OPEN_1_OF_2_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1225を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 開始時点は1225件 / 2018-08-27群CLOSED。8/28～9/2境界を導入カレンダー等で再監査し、次の群は2018-09-03と確認。
- 日刊スポーツ当時カレンダーは9/3パチスロとして `スーパービンゴリバース（ベルコ）` と `パチスロ ハクション大魔王（WORLD）` の2機を掲載。
- 先頭のスーパービンゴリバースを既存重複なし確認後No.1226として登録。
- ベルコ公式、PiDEA X、日刊スポーツ、パチマガスロマガ、ちょんぼりすた、すろぱちくえすと、グリーンべると、中古実機DBを横断。
- 導入2018-09-03、ベルコ、5.9号機A+ART、型式 `ビンゴ/A1` を固定。検定番号は再探索後もUNVERIFIED。
- 機械割97.5/99.0/100.5/102.0/103.5/105.0%。ボーナス合算1/76.2/1/74.3/1/72.5/1/70.7/1/69.1/1/67.6。ART初当たりは解析系1/563/1/559/1/554/1/549/1/544/1/539。
- ベルコ公式のみ設定1 ARTを1/536と掲載し、設定2～6は解析値と一致。平均せず `CONFLICT_ART_INITIAL_SETTING1_OFFICIAL_1_536_VS_ANALYSIS_1_563` を保存。
- 約31G/50枚。ART単体約1.7枚/G、ボーナス込み約2.0枚/G。ボーナスは約30/78/150/150枚。ART基本1セット50G。通常ゲーム数天井なし。
- resetBehaviorは設定変更時 `非有利区間 / 星ステージ`、据え置き時 `状態 / 液晶ステージ引継ぎ` を当時設定判別資料から取得。星ステージ以外で前日閉店なら翌朝星ステージは変更判別材料。
- 純電源OFF→ONのみを据え置きから独立して示す本機固有契約、ガックン確定条件/発生率、公開朝一数値は検索語・資料系統変更後も固定できずUNVERIFIED/NONE_CONFIRMED。

## No.1226 — スーパービンゴリバース
- manufacturer: **ベルコ**
- releaseDateCanonical: **2018-09-03**
- formalModelName: **ビンゴ/A1**（グリーンべると+中古実機DB照合）
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5.9号機 / A+ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 99.0 / 100.5 / 102.0 / 103.5 / 105.0%**
- bonusCombined: **1/76.2 / 1/74.3 / 1/72.5 / 1/70.7 / 1/69.1 / 1/67.6**
- ARTInitial: **解析 1/563 / 1/559 / 1/554 / 1/549 / 1/544 / 1/539**
- ARTInitialConflict: **設定1のみ公式1/536 vs 複数解析1/563**
- baseGamesPer50: **約31G/50枚**
- netIncrease: **ART単体約1.7枚/G / ボーナス込み約2.0枚/G**
- basicPayout: **プチ約30枚 / ミドル約78枚 / スーパー約150枚 / 極約150枚 / ART基本50G**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **RESET_TO_NON_ADVANTAGEOUS_SECTION / STAR_STAGE**。
- carryOver: **STATE_AND_LCD_STAGE_CARRYOVER**。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- gameCounter/ceiling: 通常ゲーム数天井なし。短縮天井NOT_APPLICABLE。
- mode/state: 設定変更時非有利区間+星ステージ、据え置き時状態/ステージ引継ぎ。
- advantageousSection: **設定変更時非有利区間 / 据え置き時引継ぎ**。
- resetBenefits: **専用ART/CZ優遇率、短縮天井等はNONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **液晶ステージ引継ぎを利用した判別材料あり。ガックン条件/率はUNVERIFIED_AFTER_RESEARCH**。
- numericResetData: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2018-09-03群監査
### 登録済み
- No.1226 スーパービンゴリバース — 2018-09-03。

### 未処理の既知同日機
- パチスロ ハクション大魔王 — WORLD — 2018-09-03。

### 群判定
- 日刊スポーツ2018-08-31導入カレンダーは9/3パチスロ群を上記2機として掲載。
- 9/3群はまだ `OPEN`。ハクション大魔王処理後、全メーカー/別スペック/PB/地域差を再監査してCLOSE可否を判定する。

## 次時系列群
- 9/3群をCLOSEした後の次既知群は日刊スポーツ当時カレンダー上 **2018-09-18**。
- 候補: `パチスロ ベン・トー ～狼たちの夜～（バルテック）` / `パチスロ 闇芝居（ネット）` / `アレックス（アクロス）`。
- 9/4～9/17境界漏れを別系統資料で監査してから進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08-28_taiho-shichauzo.md**（逮捕しちゃうぞ）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-09_kyuji.md`（球児）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 既存性能コアは無駄に再収集せず、QAではreset側のみ順次補完する。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を本機固有契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 技術介入機では通常/フル攻略等の機械割定義を混同しない。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1226を再取得。
2. **1226件 / chronologicalFrontier 2018-09-03 / `2018-09-03_GROUP_OPEN_1_OF_2_KNOWN_PROCESSED`**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **パチスロ ハクション大魔王（WORLD、2018-09-03）**をNo.1227先頭候補として既存重複・正式型式・検定番号・導入日を照合し、性能コア+resetBehavior v0.7を収集。
4. ハクション大魔王処理後、9/3同日全メーカー/別スペック/PB/地域差を再監査して群CLOSE可否を判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-09_kyuji.md`（球児）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1226 スーパービンゴリバース
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/superbingo_rebirth/
- PiDEA X: https://www.pidea.jp/articles/1%2F2%E8%B6%85%E3%81%A7Hooah%21%E7%99%BA%E7%94%9F%E3%80%8C%E3%83%93%E3%83%B3%E3%82%B4%E3%83%AA%E3%83%90%E3%83%BC%E3%82%B9%E3%80%8D%EF%BC%8F%E3%83%99%E3%83%AB%E3%82%B3
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201808310000459.html
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/102/h-1.php
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/63231/
- すろぱちくえすと: https://www.slopachi-quest.com/article/super-bingo-reverse/
- すろぱちくえすと設定判別: https://www.slopachi-quest.com/article/super-bingo-reverse-settei/
- グリーンべると旧規則機リスト: https://web-greenbelt.jp/post-55482/
- 中一商事中古実機DB: https://item.rakuten.co.jp/auc-nakaiti/bikoba/
