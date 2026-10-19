# クレアの秘宝伝 ～はじまりの扉と太陽の石～

machineName: クレアの秘宝伝 ～はじまりの扉と太陽の石～
manufacturer: 大都技研
releaseDate: 2012-09-03
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviおよびパチ＆スロ必勝本は2012-09-03導入。HAZUSEは2012-09-10としており日付競合を保持。
generation: 5号機
systemType: ノーマルタイプ / ボーナス主体 / プチRT演出
modelName: クレアの秘宝伝K
approvalNumber: 1S1039
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

### 市場掲載/解析値
| 設定 | 機械割 |
|---|---:|
| 1 | 97.50% |
| 2 | 98.90% |
| 3 | 101.30% |
| 4 | 105.10% |
| 5 | 108.70% |
| 6 | 115.30% |

confidence: ANALYSIS_HIGH

### 完全技術介入シミュレート値
| 設定 | 機械割 |
|---|---:|
| 1 | 98.06% |
| 2 | 99.63% |
| 3 | 101.80% |
| 4 | 105.40% |
| 5 | 109.39% |
| 6 | 114.46% |

confidence: ANALYSIS_HIGH_SIMULATION
notes: パチ＆スロ必勝本の7000G×10万日・等価・完全技術介入シミュレート。通常掲載値と定義が異なるため平均化しない。

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/287.44 | 1/321.25 | 1/151.7 |
| 2 | 1/282.48 | 1/303.41 | 1/146.3 |
| 3 | 1/273.07 | 1/295.21 | 1/141.9 |
| 4 | 1/256.00 | 1/277.69 | 1/133.2 |
| 5 | 1/237.45 | 1/260.06 | 1/124.1 |
| 6 | 1/221.41 | 1/227.56 | 1/112.1 |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

P-WORLDのBIG/REG系列とパチ＆スロ必勝本の系列が一致。合算は必勝本値。

## baseGamesPer50

- 34.6G/50枚（設定1）～37.3G/50枚（設定6）
- confidence: ANALYSIS_HIGH

## netIncrease

- ART/AT非搭載。
- 「高確率」はボーナス期待演出に用いる短い内部RT/プチRT系状態で、出玉増加用ARTとして扱わない。
- netIncrease: NOT_APPLICABLE_NORMAL_TYPE

## basicPayout

- BIG: 約311枚（344枚超払い出しで終了）
- REG: 約104枚（105枚超払い出しで終了）
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナス主体のノーマルタイプ。ART非搭載。
- 通常時チャンス目の一部から「高確率」へ移行する演出構造。
- ゲーム数天井/規定G解除型天井は確認されず、本機の物差し上は天井非搭載として扱う。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_STATE_TRANSITION**
- 「クレアの秘宝伝」「クレアの秘宝伝K」「大都技研」「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/高確率」を組み替え、当時解析・古いDB・後年資料を横断。
- 初代2012年機固有の設定変更時RT状態・液晶初期ステージ等を直接明記した高信頼資料は今回確定できず、後継機クレア2/3のリセット仕様を流用しない。

### carryOverBehavior

- **NO_GAME_COUNT_CEILING_TO_CARRY_OVER_CONFIRMED**
- ゲーム数天井/規定G天井を持たないボーナス主体ノーマル機のため、天井進捗の据え置き/宵越しという比較項目はNOT_APPLICABLE。
- ボーナス成立状態やプチRT等の電断時保持仕様は本機固有資料を確定できずUNVERIFIED_AFTER_RESEARCH。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 電源OFF→ONのみを独立条件として初代2012年機のRT/液晶状態を明記した資料は今回回収できず。
- 後継機の電断仕様は流用しない。

### gameCounterReset

- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**
- 天井ゲーム数/規定ゲーム数による解除機構は確認されない。

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING**
- 設定変更専用短縮天井・朝一規定ゲーム数恩恵はなし（天井非搭載のため）。

### modeAfterReset

- **NOT_APPLICABLE_FOR_GAME_COUNT_MODE / INTERNAL_RT_STATE_UNVERIFIED**
- 規定Gモード管理機ではない。
- 通常時のプチRT/高確率演出状態について、設定変更時の初期化契約はUNVERIFIED_AFTER_RESEARCH。

### stateAfterReset

- **UNVERIFIED_AFTER_RESEARCH**
- 通常時に「高確率」等の短いRT/演出状態が存在するが、設定変更時の具体的な初期状態を初代固有資料で確定できず。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **NONE_CONFIRMED_AFTER_RESEARCH**
- 天井非搭載のため、リセット専用短縮天井・朝一ゾーン等の主要恩恵は確認されない。

### resetPenalties

- **NONE_CONFIRMED_AFTER_RESEARCH**
- ホール経営/朝一客行動に影響する初代固有の主要不利要素は確認できず。

### resetDetection

- **UNVERIFIED_AFTER_RESEARCH**
- 初代固有のガックン、初期ステージ、表示等による確定的な変更判別は今回確定できず。
- 後継クレアシリーズの「原始の森」等は流用しない。

### publicMorningNumbers

- NONE_CONFIRMED_AFTER_RESEARCH
- リセット時のモード振分、朝一当選率、短縮天井など比較可能な公開数値は確認されない。

### numericResetData

- gameCountCeiling: NONE_CONFIRMED
- resetShortenedCeiling: NOT_APPLICABLE
- morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetQaReliability: HIGH_FOR_NO_CEILING_AND_NON_AT_CLASSIFICATION__LOW_FOR_MACHINE_SPECIFIC_POWER_STATE

## conflicts

- releaseDate: K-Navi/パチ＆スロ必勝本は2012-09-03、HAZUSEは2012-09-10。平均せず両方保持し、本線キーは複数当時系資料一致の2012-09-03。
- payoutRate: HAZUSEの97.50/98.90/101.30/105.10/108.70/115.30%と、必勝本の完全技術介入シミュレート98.06/99.63/101.80/105.40/109.39/114.46%は定義が異なるためCONFLICTではなくSEPARATE_DEFINITIONとして併記。

## missingFields

- 初代2012年機固有の設定変更時RT/高確率状態初期化
- 電源OFF→ONのみのRT/液晶状態
- 据え置き時のRT/液晶状態
- ガックン等の変更判別

## sources

取得日: 2026-09-05

1. K-Navi クレアの秘宝伝 ～はじまりの扉と太陽の石～
   - https://p-kn.com/slot/1694/
   - 2012-09-03導入、ノーマルタイプ、BIG約311枚、ボーナス合算レンジ。
   - reliability: ANALYSIS_HIGH_PERIOD

2. P-WORLD クレアの秘宝伝～はじまりの扉と太陽の石～
   - https://www.p-world.co.jp/machine/database/6820
   - 大都技研、5号機ノーマル/技術介入/プチRT、BIG約311枚、REG約104枚、設定別BIG/REG。
   - reliability: INDUSTRY_DATABASE

3. HAZUSE クレアの秘宝伝 ～はじまりの扉と太陽の石～
   - https://hazuse.com/machine/pachislot/1S1039/
   - 型式クレアの秘宝伝K、検定番号1S1039、機械割97.50～115.30%、BIG/REG獲得、導入日2012-09-10表記。
   - reliability: ANALYSIS_HIGH_ARCHIVE

4. パチ＆スロ必勝本 基本スペック
   - https://p.hisshobon.jp/machine/2062/1/35798
   - 2012-09-03導入、設定別BIG/REG/合算、完全技術介入シミュレート機械割。
   - reliability: ANALYSIS_HIGH_PERIOD

5. パチ＆スロ必勝本 打ち方説明
   - https://p.hisshobon.jp/machine/2062/1/36020
   - 1000円あたり34.6G(設定1)～37.3G(設定6)、技術介入手順。
   - reliability: ANALYSIS_HIGH

6. パチ＆スロ必勝本 シミュレートデータ
   - https://p.hisshobon.jp/machine/2062/1/36021
   - 7000G×10万日、等価、完全技術介入条件の機械割。
   - reliability: ANALYSIS_HIGH_SIMULATION

## reliabilitySummary

- identity: HIGH
- releaseDate: CONFLICT_DAY_09_03_VS_09_10
- payoutRate: HIGH_SEPARATE_DEFINITIONS
- bonusRates: HIGH_MULTI_SOURCE
- baseGamesPer50: HIGH_SINGLE_PERIOD_ANALYSIS
- basicPayout: HIGH_MULTI_SOURCE
- resetBehavior: HIGH_FOR_NON_APPLICABLE_CEILING / PARTIAL_FOR_STATE_POWER

## qaNotes

- 2025年BT版、2016年「眠りの塔」、2018年「女神の夢」の仕様を初代へ混入させないよう除外検索とページ識別を実施。
- 初代固有のresetBehaviorが直接取れない部分だけをUNVERIFIED_AFTER_RESEARCHとし、ノーマル機一般論で埋めていない。
