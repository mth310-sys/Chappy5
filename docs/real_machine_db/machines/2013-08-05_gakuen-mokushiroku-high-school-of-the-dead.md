# 学園黙示録 HIGH SCHOOL OF THE DEAD

machineName: 学園黙示録 HIGH SCHOOL OF THE DEAD
manufacturer: スパイキー
releaseDate: 2013-08-05
releaseDatePrecision: exact_day
generation: 5号機
systemType: A+ART / ボーナス + 自力CZ「麗CHALLENGE」 + ゲーム数上乗せART
recordStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_RESET_RESEARCHED

## identity

- ホール導入日: **2013-08-05**。K-Navi、HAZUSE、パチビーに加え、ドラスの2013-08-05プレスリリースが「同日、全国ホールにて稼働開始」と記載。
- manufacturer: **スパイキー**。
- 型式名: **H.O.T.D_BB**。
- 検定番号: **3S0304**。
- confidence: INDUSTRY_AND_PERIOD_ANALYSIS_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.4% |
| 3 | 100.4% |
| 4 | 104.1% |
| 5 | 107.1% |
| 6 | 110.3% |

- HAZUSE、当時系解析資料で一致。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

| 設定 | ART「All DEAD'S Attack」初当たり |
|---|---:|
| 1 | 1/488.7 |
| 2 | 1/471.1 |
| 3 | 1/473.6 |
| 4 | 1/451.5 |
| 5 | 1/430.9 |
| 6 | 1/373.3 |

- 当時解析整理資料で設定別ART初当たりを確認。
- ボーナス合算: **1/255.0 / 1/250.1 / 1/244.5 / 1/238.3 / 1/232.4 / 1/222.9**。
- BIG: **1/431.2 / 1/422.8 / 1/414.8 / 1/407.1 / 1/399.6 / 1/385.5**。
- 殲滅/暴走BONUS: 設定1 **1/624.2**、設定6 **1/528.5**（中間設定もK-Navi/実機DB系資料に掲載）。
- confidence: ANALYSIS_MULTI_SOURCE_MEDIUM_HIGH

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「50枚」「1000円」「ベース」「コイン持ち」「回転数」と機種名・型式名・スパイキーを組み替え、2013年当時解析、旧DB、回顧資料を横断したが、2013年スパイキー版として安全に固定できる同定義値を今回確保できず。
- 2018年山佐版、2020年HOTDゴールドのコイン持ちは別機種のため転記しない。

## netIncrease

- ART「All DEAD'S Attack」: **約+1.6枚/G**。
- K-Navi、HAZUSE、パチビーで一致。
- confidence: INDUSTRY_AND_ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- ART「All DEAD'S Attack」: **1セット50G+α**、ゲーム数上乗せ型。
- BIG: **純増約200枚**（297枚超払い出し終了）。
- 殲滅/暴走BONUS: **純増約40枚**（62枚超払い出し終了）。
- Desperate BONUS: ベル6回入賞で終了し、終了後のフリーズ時間を利用する上乗せ契機。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 自力CZ「麗CHALLENGE」は基本10G、ART期待度50%以上。
- CZ規定ゲーム数は内部モードA～Gで管理され、CZ失敗時・ボーナス終了時・ART終了時にモード移行抽選が行われる。
- ボーナス間 **1280G** 消化でART確定の麗CHALLENGEへ入り、ボーナス成立までART終了後に再びART確定麗CHALLENGEへ突入する天井状態。
- 当時天井解析でも「ボーナス間1280G+αで天井状態」を照合。
- ceiling confidence: ANALYSIS_MULTI_SOURCE_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_RESETS_BONUS_CEILING_PROGRESS__OTHER_RESET_CONTRACTS_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 2013-08-05公開の当時天井解析資料で **「設定変更でゲーム数リセット」** を確認。
- よってボーナス間1280G天井の前日進捗は設定変更時にクリアされるものとして保存。
- 設定変更時のCZモードA～G再抽選有無・具体振り分け、内部高確状態の再抽選契約は、表記・型式・メーカー・「設定変更/リセット/朝一/CZ/麗チャレンジ/モード」を変えて再探索しても安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_SINGLE_PERIOD_FOR_COUNTER_RESET + UNVERIFIED_FOR_MODE_STATE_DETAILS

### carryOverBehavior

- 純据え置き時のボーナス間天井G、CZモード、内部状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動や同メーカー別機種からの類推は採用しない。

### powerCycleBehavior

- 単純電源OFF→ONのみの場合の天井G、CZモード、内部状態、液晶開始ステージについて、本2013年スパイキー版を直接特定できる資料は **UNVERIFIED_AFTER_RESEARCH**。
- 2018年山佐版・2020年HOTDゴールドの「電源OFF→ON」解析は別機種なので遮断。

### gameCounterReset

- settingChange: **RESET_CONFIRMED_PERIOD_ANALYSIS**。
- carryOver/unchanged: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常天井: **ボーナス間1280G+α**。
- 設定変更で進捗リセット。
- 設定変更専用の500G等の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 通常時に麗CHALLENGE規定Gを管理する内部モードA～Gが存在。
- 設定変更時のモード再抽選有無・振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一専用モード: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- 道場/高城邸など上位状態示唆ステージは確認できるが、設定変更時の内部状態リセット・再抽選・開始状態は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、CZ優遇率、ART当選率優遇などの公開朝一恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日ボーナス間ハマリの天井進捗が設定変更で消えるため、宵越し天井狙いには不利。
- その他の専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本2013年スパイキー版固有のガックン、初期出目、液晶ステージ、CZゲーム数挙動を使った確定的な変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 同名の2018年山佐版/2020年ゴールド版の判別法は混入させない。

### publicMorningNumbers

- settingChangeModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- settingChangeStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- resetSpecificCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetOnlyHitRateWithinSpecificGames: **UNVERIFIED_AFTER_RESEARCH**。

## sources

取得日: **2026-09-06**

1. K-Navi「学園黙示録 HIGHSCHOOL OF THE DEAD」
   - https://p-kn.com/slot/1890/
   - 2013-08-05導入、BIG確率、ART 50G+α、純増約1.6枚/G。
   - confidence: ANALYSIS_HIGH

2. HAZUSE「学園黙示録 HIGH SCHOOL OF THE DEAD」
   - https://hazuse.com/machine/pachislot/3S0304/
   - 型式H.O.T.D_BB、検定3S0304、2013-08-05導入、機械割97.2～110.3%、BIG約200枚、殲滅/暴走BONUS約40枚、ART/天井/CZ構造。
   - confidence: ANALYSIS_HIGH

3. パチビー「学園黙示録 HIGH SCHOOL OF THE DEAD」
   - https://www.pachibee.jp/movies/index/9657
   - 2013-08-05導入、スパイキー、5号機ART、CZ/天井あり、純増約1.6枚/G。
   - confidence: INDUSTRY_DB

4. ドラス ValuePress プレスリリース（2013-08-05）
   - https://www.value-press.com/pressrelease/114354
   - スパイキー製実機が同日全国ホールで稼働開始と明記。
   - confidence: INDUSTRY_PRIMARY_RELEASE

5. スロパチクエスト「学園黙示録HIGHSCHOOLOFTHEDEAD 機種別解析まとめ」
   - https://www.slopachi-quest.com/kisyubetsu/high-school-of-the-dead/
   - ART初当たり、ボーナス合算、機械割、ボーナス間1280G天井。
   - confidence: ANALYSIS_HIGH

6. スロパチクエスト 当時天井解析（2013-08-05）
   - https://www.slopachi-quest.com/article/371142555-html/
   - ボーナス間1280G+α、設定変更でゲーム数リセット。
   - confidence: ANALYSIS_SINGLE_PERIOD_SOURCE

7. CrankySeven「学園黙示録 HIGH SCHOOL OF THE DEAD」
   - https://crankyseven.com/highschoolofthedead-pc.htm
   - 麗CHALLENGE、内部モード、ART構造の補助照合。
   - confidence: ANALYSIS_RETROSPECTIVE

## missingFields

- baseGamesPer50
- 設定変更時CZモードA～G振り分け/再抽選契約
- 設定変更時内部状態振り分け
- 純据え置き時の天井G/モード/状態の直接契約
- 単純電源OFF→ON時の天井G/モード/状態/表示契約
- 本機固有の変更判別
- 公開リセット専用当選率

## conflicts

- 同名シリーズに2018年山佐版、2020年HOTDゴールド等が存在する。検索結果が非常に混在するため、2013年スパイキー版（型式H.O.T.D_BB / 3S0304）以外のresetBehavior・ベース・有利区間情報は採用せず分離。
- 天井についてHAZUSEは「ボーナス間1280G消化」、当時天井解析は「1280G+αで天井状態」と表現する。前兆/発動表示差として原文定義を保持し、平均・一律換算しない。
