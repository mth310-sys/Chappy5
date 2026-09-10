更新日: 2026-09-10

## 現在地点
- recordCount: **1225**
- latestRecordAdded: **SLOTファミリースタジアム**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-08-27_slot-family-stadium.md`
- chronologicalFrontier: **2018-08-27**
- frontierLatestMachine: **SLOTファミリースタジアム — No.1225**
- schema: **resetBehavior v0.7**
- status: **2018-08-27_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1224を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 開始時点は1224件 / 2018-08-20群CLOSED。未処理先頭 `SLOTファミリースタジアム` を既存重複なし確認後No.1225として登録。
- ユニバーサルエンターテインメント公式、Amusement Japan、日刊スポーツ、P-WORLD、パチマガスロマガ、K-Navi、ちょんぼりすた、一撃、すろぱちくえすと等を横断。
- 導入2018-08-27、メーシー、5号機A+RTを固定。型式 `SLOTファミリースタジアム/DN` は中古実機DBで確認したが公報/一次資料照合が取れず単一二次資料扱い。検定番号は再探索後もUNVERIFIED。
- 設定は1/2/5/6。機械割97.5/99.3/103.2/107.1%、BIG合成1/341.3/1/337.8/1/327.7/1/318.1、REG1/481.9/1/431.2/1/394.8/1/348.6、ボーナス合算1/199.8/1/189.4/1/179.1/1/166.3。
- 約35.5～37.9G/50枚。BIG最大304枚、REG最大108枚。BIG後RT30G、REG後RTはチャンスリプレイ成立まで。RT純増は当時解析で現状維持程度。通常ゲーム数天井なし。
- resetBehaviorは設定変更時RT RESET、電源OFF→ON時RT CARRYOVERをちょんぼりすた/一撃でクロスチェック。朝一専用特典なし。未告知ボーナス成立中に電源断した場合は復帰時ボーナス告知状態へ移行する当時解析注記あり。
- 据え置きそのものを純電断と分離した本機固有契約、ガックン/初期出目等の変更判別確定条件・発生率、公開朝一数値は検索語/資料系統変更後も固定できずUNVERIFIED/NONE_CONFIRMED。
- 8/21～8/26境界および8/27同日全メーカー/別スペック/PB/地域差を再監査。日刊スポーツ当時カレンダーは8/27パチスロを本機のみ掲載し、複数導入DBでも8/27を照合。今回独立登録すべき追加機を固定できず `2018-08-27_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。

## No.1225 — SLOTファミリースタジアム
- manufacturer: **メーシー**
- releaseDateCanonical: **2018-08-27**
- formalModelName: **SLOTファミリースタジアム/DN**（単一二次DB、一次照合待ち）
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / A+RT / リアルボーナス+RT / 技術介入**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **97.5 / 99.3 / 103.2 / 107.1%**
- BIGCombined: **1/341.3 / 1/337.8 / 1/327.7 / 1/318.1**
- REG: **1/481.9 / 1/431.2 / 1/394.8 / 1/348.6**
- bonusCombined: **1/199.8 / 1/189.4 / 1/179.1 / 1/166.3**
- baseGamesPer50: **約35.5～37.9G/50枚**
- netIncrease: **RT 現状維持程度（精密枚/GはUNVERIFIED）**
- basicPayout: **BIG最大304枚 / REG最大108枚 / BIG後RT30G / REG後RTはチャンスリプレイ成立まで**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **RT_STATE_RESET_ANALYSIS_HIGH_CROSSCHECKED**。ちょんぼりすたはボーナス/RT等の状態をすべてリセット、一撃はRT RESETを明記。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。据え置きを純電断と同義扱いしない。
- powerOFF→ON: **RT_STATE_CARRYOVER_ANALYSIS_HIGH_CROSSCHECKED**。未告知ボーナス成立状態は復帰後告知状態へ移行との注記あり。
- gameCounter/ceiling: 通常ゲーム数天井なし。短縮天井NOT_APPLICABLE。RT残り状態は上記設定変更/純電断契約に従う。
- mode/state: 朝一専用モードなし確認。RTは設定変更RESET / 純電断CARRYOVER。
- advantageousSection: 公開ゲーム性はリアルボーナス+RTで、朝一有利区間挙動は `NOT_APPLICABLE_TO_PUBLIC_GAMEPLAY_NO_ADVANTAGEOUS_SECTION_BEHAVIOR_CONFIRMED`。
- resetBenefits: **NONE_CONFIRMED / 朝一特典なし**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。本機固有ガックン/変更判別確定条件・発生率を固定できず。
- numericResetData: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2018-08-27群監査
### 登録済み
- No.1225 SLOTファミリースタジアム — 2018-08-27。

### 群判定
- 日刊スポーツ2018年8月導入カレンダーは8/27パチスロ群として本機のみを掲載。
- K-Navi、ちょんぼりすた、すろぱちくえすと、一撃でも2018-08-27導入を照合。
- 8/21～8/26境界および同日全メーカー/別スペック/PB/地域差を追加検索したが、今回独立登録すべき別パチスロ機は固定できず `2018-08-27_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。

## 次時系列群
- 日刊スポーツ当時導入カレンダーでは **2018-09-03 スーパービンゴリバース（ベルコ） / パチスロ ハクション大魔王（WORLD）** が次のパチスロ導入群。
- 次回は8/28～9/2境界漏れと9/3同日全メーカー/別スペック/PB/地域差を別系統資料で再監査し、**スーパービンゴリバース**をNo.1226先頭候補として処理する。並行更新があれば最新mainを優先。

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
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1225を再取得。
2. **1225件 / chronologicalFrontier 2018-08-27 / `2018-08-27_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. 2018-08-28～09-02境界を再監査し、**スーパービンゴリバース**（ベルコ、2018-09-03）をNo.1226先頭候補として既存重複・正式型式・検定番号・導入日を照合、性能コア+resetBehavior v0.7を収集。
4. 続いて **パチスロ ハクション大魔王**（WORLD、2018-09-03）を処理し、9/3群の全メーカー/別スペック/PB/地域差を監査して群CLOSE可否を判定する。
5. 遡及QAは `docs/real_machine_db/machines/2006-09_kyuji.md`（球児）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1225 SLOTファミリースタジアム
- ユニバーサルエンターテインメント公式: https://www.universal-777.com/product/slot/famista/
- ユニバーサルエンターテインメント2018製品一覧: https://www.universal-777.com/product/slot/2018/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000738/
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201808170000386.html
- P-WORLD: https://www.p-world.co.jp/machine/database/8735
- パチマガスロマガ確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/49/h-1.php
- パチマガスロマガゲーム性: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/49/l.php
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/62557/
- 一撃: https://1geki.jp/slot/s_famista/ ; https://1geki.jp/slot/s_famista/3/
- K-Navi: https://p-kn.com/slot/3072/
- すろぱちくえすと: https://www.slopachi-quest.com/article/family-stadium/
- 中一商事型式DB: https://www.nakaiti.com/html/sMacy101.html
