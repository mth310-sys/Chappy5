# ハッピージャグラーVII

machineName: ハッピージャグラーVII
formalModelName: ハッピージャグラーV II KK
manufacturer: 北電子
releaseDate: 2014-04-07
releaseDatePrecision: exact_national_hall_start_calendar
generation: 5号機
systemType: ノーマル / リアルボーナス / 完全告知
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT

## identity

- HAZUSEで導入開始日 **2014-04-07**、メーカー **北電子**、型式名 **ハッピージャグラーV II KK**、検定番号 **3S0869** を確認。
- 北電子公式現行製品アーカイブは「ハッピージャグラーVⅡ」を掲載し、同一スペック表を保持。
- P-WORLD系業界記事は2014年登場機として後継「VⅢ」発表時にも系譜を明記。
- confidence: OFFICIAL_SPEC + ANALYSIS_HIGH_EXACT_DATE + INDUSTRY_SERIES_CROSSCHECK

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.1% |
| 2 | 97.9% |
| 3 | 99.9% |
| 4 | 102.9% |
| 5 | 105.8% |
| 6 | 108.4% |

- 北電子公式と複数解析資料で一致。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | 合成 |
|---:|---:|---:|---:|
| 1 | 1/287.4 | 1/409.6 | 1/168.9 |
| 2 | 1/282.5 | 1/364.1 | 1/159.1 |
| 3 | 1/273.1 | 1/341.3 | 1/151.7 |
| 4 | 1/264.3 | 1/315.1 | 1/143.7 |
| 5 | 1/252.1 | 1/287.4 | 1/134.3 |
| 6 | 1/240.9 | 1/273.1 | 1/128.0 |

- 北電子公式、HAZUSE、すろぱちくえすとで一致。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

通常打ち1000円あたり:
- 設定1: **34.13G**
- 設定2: **34.33G**
- 設定3: **34.53G**
- 設定4: **35.26G**
- 設定5: **35.47G**
- 設定6: **35.69G**

完全小役獲得時:
- 設定1: 34.92G
- 設定2: 35.13G
- 設定3: 35.34G
- 設定4: 36.10G
- 設定5: 36.32G
- 設定6: 36.55G

- すろぱちくえすと掲載値。1000円=50枚等価換算前提の比較値として保持。
- confidence: ANALYSIS_SINGLE

## netIncrease

- **NOT_APPLICABLE_REAL_BONUS_TYPE**。

## basicPayout

- BIG: **約312枚**（規定払い出し345枚）。
- REG: **約104枚**（規定払い出し105枚）。
- パチマガスロマガ、後年中古機DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ノーマル/完全告知。GOGO!ランプ点灯でボーナス確定。
- 告知タイミングはシリーズ資料で先告知1/4、後告知3/4。
- AT/ART/CZ等は非搭載。

## ceiling

- **NOT_APPLICABLE / 天井機能非搭載**。
- HAZUSEが本機ページで明記。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_CONFIRMED_GAKKUN_SIGNAL_AND_UNVERIFIED_POWER_CONTRACT
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更後の朝一1G目でリールがガックンする挙動が確認されており、設定変更推測に利用可能。
- ボーナス/天井/AT/ART/CZの内部ゲーム数リセットは本機では該当する管理機構が確認されない。
- それ以外の本機固有の設定変更時初期出目・内部ボーナス状態等は **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 天井、AT/ART/CZ、出玉管理モード: **NOT_APPLICABLE**。
- 据え置き時の本機固有物理状態・リール初動契約: **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない電源OFF→ONのみでガックンが発生するかを本機固有の高信頼資料で固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的なジャグラー挙動からは補完しない。

### gameCounterReset

- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- AT/ART/CZ/天井用内部モード: **NOT_APPLICABLE**。
- 朝一専用出玉モード: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- 朝一高確/CZ/RT等: **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_TYPE**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更そのものによる出玉上の主要恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一ガックンは恩恵ではなく変更推測シグナル。

### resetPenalties

- **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- **CONFIRMED_PROBABILISTIC_GAKKUN_SIGNAL**。
- 朝一1回転目でガックンなら設定変更濃厚とする解析資料あり。
- 2014年当時企画の回顧掲載でも、前日出目据え置きのホールでガックンを設定変更判別に利用した実戦記録を確認。
- ただしリール停止位置などにより判定しづらい場合があるため、100%確定契約としては扱わない。

### publicMorningNumbers

- 設定変更時専用モード振り分け、朝一特定G以内当選率、短縮天井、リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 「ハッピージャグラーVⅡ / VII / V2」の表記揺れを同一2014年機として扱う。2022年「ハッピージャグラーVⅢ」を混入させない。
- ガックン情報は設定変更推測シグナルとして保持するが、純電源OFF→ONとの差を推定しない。

## sources

取得日: **2026-09-06**

1. 北電子公式「ハッピージャグラーVⅡ」
   - https://www.kitadenshi.co.jp/slot/happyjugglerv2/
   - 設定別BB/RB/合成/出玉率。
   - reliability: OFFICIAL

2. HAZUSE「ハッピージャグラーVII」
   - https://hazuse.com/machine/pachislot/3S0869/
   - 2014-04-07導入、型式名、検定番号、設定別ボーナス確率。
   - reliability: ANALYSIS_HIGH

3. HAZUSE「天井」
   - https://hazuse.com/machine/pachislot/3S0869/genre/207/
   - 天井機能非搭載。
   - reliability: ANALYSIS_HIGH

4. パチマガスロマガ「ハッピージャグラーVⅡ」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/89/a.php
   - 2014年4月、ノーマル/完全告知、BIG約312枚、REG約104枚。
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE

5. すろぱちくえすと「ハッピージャグラーV2」
   - https://www.slopachi-quest.com/article/happy-juggler-v2/
   - 設定別スペック、1000円あたり回転数、朝一1G目ガックン=設定変更濃厚。
   - reliability: ANALYSIS_RETROSPECTIVE

6. パチマガスロマガFREE「プロの思考・戦術を復刻掲載！第26回・ハッピージャグラーVⅡ編」
   - https://pachimaga.com/free/playback/2500f2839c7f281330480623b049efdf636beae9.php
   - 当時企画の回顧掲載でガックンを設定変更判別に利用した実戦記録。
   - reliability: ANALYSIS_RETROSPECTIVE_PERIOD_PRACTICE

7. P-WORLD/遊技通信・グリーンべると後継機記事
   - https://news.p-world.co.jp/articles/21515/yugitsushin
   - https://news.p-world.co.jp/articles/21503/greenbelt
   - 2014年登場のVⅡとしてシリーズ系譜を補助確認。
   - reliability: INDUSTRY_RETROSPECTIVE

## missingFields

- 純電源OFF→ON時の本機固有挙動: UNVERIFIED_AFTER_RESEARCH
- 据え置き時のリール初動/物理状態契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部物理状態詳細: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
