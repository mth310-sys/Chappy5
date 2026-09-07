# パチスロ 緋弾のアリア

machineName: パチスロ 緋弾のアリア
manufacturer: 藤商事
releaseDate: 2016-02-08
releaseDatePrecision: canonical_national_or_major_start_with_2016-02-01_regional_source_conflict
recordNumber: 955
generation: 5号機
systemType: ART / 周期CZ / ボーナス併用
formalModelName: 緋弾のアリアFSB
inspectionNumber: 5S0988
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT

## identity
- 藤商事公式製品ページで本機を確認。
- 広島県公安委員会告示で型式名 **緋弾のアリアFSB**、検定番号 **5S0988** を確認。
- 導入日は一撃・ちょんぼりすた・販売業界資料が **2016-02-08**。一方、K-Navi・パチビー・期待値見える化は **2016-02-01** を掲示し、ちょんぼりすたは「2016-02-08、※一部地域では1日」と明記する。
- 本DBでは全国/主要導入のcanonicalを **2016-02-08**、regional/alternate startを **2016-02-01** と分離し、`RELEASE_DATE_CONFLICT_2016_02_01_VS_2016_02_08_WITH_REGIONAL_NOTE` を保持する。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.7% |
| 3 | 100.2% |
| 4 | 103.2% |
| 5 | 106.2% |
| 6 | 109.1% |

- 一撃・ちょんぼりすた等で一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/300.77 |
| 2 | 1/285.74 |
| 3 | 1/267.54 |
| 4 | 1/232.54 |
| 5 | 1/206.88 |
| 6 | 1/176.97 |

- 藤商事公式は丸め値 **1/300.7 / 285.7 / 267.5 / 232.5 / 206.8 / 176.9** を掲載。解析精密値との定義は丸め差として分離。
- 周期CZ「武偵ミッション」は通常時32〜63G周期。整理資料ではCZ確率を概ね **1/46** とするが、設定別ART初当たりと混同しない。
- reliability: OFFICIAL_PLUS_ANALYSIS_HIGH

## baseGamesPer50
- **約37.5G/50枚**。
- 複数解析で一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「バレットゾーン」: **約2.0枚/G**。
- 藤商事公式、P-WORLD、パチビー、一撃で一致。
- reliability: OFFICIAL_PLUS_INDUSTRY_HIGH

## basicPayout
- ART「バレットゾーン」: **1セット30G+α**。
- 弾丸図柄揃いのボーナスは解析資料で **純増約120枚**。
- チャレンジミッション等、内部的にボーナスとして扱われる区間があり、天井G数カウントから除外される。
- reliability: OFFICIAL_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は32〜63G周期でCZ「武偵ミッション」。
- 天井: **ART間999G（通常時消化G数）**。到達でARTをストックし、その後の武偵ミッション/チャレンジミッションでART告知。
- CZ/内部ボーナス消化Gは天井カウントに含めないため、データカウンター表示と内部天井進捗がズレる場合がある。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_CONTRACT
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井ゲーム数RESET**。
- **モード再抽選**。
- **液晶ステージ再選択**。
- 一撃の2016-10-03更新「天井/設定変更」で直接比較表を確認。

### carryOverBehavior
- 設定据え置き単独を「設定変更なし」として明示した本機固有表は十分な再探索後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ただし純電源OFF→ONでは天井・モード・液晶ステージを引き継ぐ直接資料があるため、据え置き一般と純電断を無条件同義にはしない。

### powerCycleBehavior
- **天井ゲーム数CARRYOVER**。
- **モードCARRYOVER**。
- **液晶ステージCARRYOVER**。
- setting changeとは明確に別契約。

### gameCounterReset
- setting change: **RESET_CONFIRMED**。
- pure power cycle: **CARRYOVER_CONFIRMED**。
- carry-over setting independent contract: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- 通常天井は999G。
- 設定変更時は天井カウンタをリセット。
- リセット専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset
- setting change: **RESELECT_CONFIRMED**。
- pure power cycle: **CARRYOVER_CONFIRMED**。
- 設定変更時の具体的モード振り分け数値は、検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset
- 一撃では「モード再抽選」「液晶ステージ再選択」まで直接確認。
- ヒステリア高確等の内部状態を含む専用初期振り分け値は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 固定短縮天井や設定変更専用当選率など、数値化された強い朝一恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 当時整理資料には「朝イチに特別な恩恵は存在しない可能性が高い」とする記載がある。

### resetPenalties
- 設定変更時だけの主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 設定変更時は液晶ステージ再選択、純電断時は液晶ステージ引継ぎのため、前日状態を把握できる場合は補助的な推測材料になり得る。
- ただしステージ単独の確定判別契約、ガックン、初期出目、ランプ等の本機固有メーカー保証判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開朝一特定G以内当選率: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- `RELEASE_DATE_CONFLICT_2016_02_01_VS_2016_02_08_WITH_REGIONAL_NOTE`:
  - 2016-02-08: 一撃、ちょんぼりすた、泰成産業。ちょんぼりすたは「一部地域では1日」と注記。
  - 2016-02-01: K-Navi、パチビー、期待値見える化。
  - 平均化せず、canonical 2016-02-08 + regional/alternate 2016-02-01として保持。

## missingFields
- exact carry-over setting contract independent of pure power cycle: UNVERIFIED_AFTER_RESEARCH
- reset mode distribution numeric table: UNVERIFIED_AFTER_RESEARCH
- reset-specific public hit rate: UNVERIFIED_AFTER_RESEARCH
- manufacturer-guaranteed hard reset detection: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. 藤商事公式 — パチスロ 緋弾のアリア
   - https://www.fujimarukun.co.jp/products/s_aria/
   - ART設定別確率、製品同一性。
   - reliability: OFFICIAL
2. 広島県公安委員会告示第85号
   - https://www.pref.hiroshima.lg.jp/soumu/soumu/kenpo/pdf27/11gatsu/091/20151124300085.pdf
   - 型式名 緋弾のアリアFSB、検定番号5S0988。
   - reliability: OFFICIAL_PUBLIC
3. 一撃 — パチスロ緋弾のアリア
   - https://1geki.jp/slot/aria/
   - 2016-02-08、設定別ART初当たり/機械割、ART純増・セット性能。
   - reliability: ANALYSIS_HIGH
4. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/aria/3/
   - 999G天井、設定変更時RESET/モード再抽選/液晶再選択、電源OFF/ON時の天井・モード・液晶引継ぎ。
   - reliability: ANALYSIS_HIGH_DIRECT
5. ちょんぼりすた — 緋弾のアリア
   - https://chonborista.com/slot/fuji-slot/15513/comment-page-2/
   - 97.5〜109.1%、ART1/301〜1/177、37.5G/50枚、純増約2.0枚、999G天井、2016-02-08・一部地域1日。
   - reliability: ANALYSIS_HIGH_PERIOD
6. 泰成産業 — スロット新機種情報
   - https://www.taisei777.co.jp/slot.html
   - 緋弾のアリアFSB、藤商事、2016-02-08。
   - reliability: INDUSTRY
7. K-Navi — パチスロ緋弾のアリア
   - https://p-kn.com/slot/2415/
   - 2016-02-01表記、ART確率・ゲーム性。
   - reliability: ANALYSIS_DATABASE
8. パチビー — パチスロ 緋弾のアリア
   - https://www.pachibee.jp/machines/index/216010004
   - 2016-02-01表記、5号機ART、約2.0枚/G、30G+α。
   - reliability: INDUSTRY_DATABASE
9. すろぱちくえすと — 緋弾のアリア
   - https://www.slopachi-quest.com/article/hidannoaria/
   - 37.5G/50枚、約2.0枚/G、ボーナス約120枚、導入日2/1 or 2/8。
   - reliability: ANALYSIS_PERIOD
10. P-WORLD — パチスロ緋弾のアリア
   - https://www.p-world.co.jp/machine/database/7943
   - 5号機ART、約2.0枚/G、30G+α、ゲームフロー。
   - reliability: INDUSTRY_DATABASE

## confidence
- identity/formalModel/inspection: OFFICIAL_PUBLIC_HIGH
- releaseDate: CONFLICT_WITH_REGIONAL_EXPLANATION
- performanceCore: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- ceiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_HIGH_DIRECT
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT
- carryOverSettingIndependentContract: UNVERIFIED_AFTER_RESEARCH
- resetNumericBenefit: RESEARCHED_NO_CONFIRMED_PUBLIC_NUMERIC_BENEFIT
