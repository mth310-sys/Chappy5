# パチスロコブラ

machineName: パチスロコブラ
manufacturer: SNKプレイモア
releaseDate: 2015-03-16
releaseDatePrecision: exact_hall_start
releaseDateNote: K-Navi、HAZUSE、パチ7、パチビーで2015-03-16導入を照合。SNK公式は2015年3月予定と記載。
generation: 5号機
systemType: A+ART / ボーナス+ART / CZ搭載
modelName: パチスロコブラAB
inspectionNumber: 3S0862
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- SNKプレイモア公式で型式名 **パチスロコブラAB** と2015年3月稼働予定を確認。
- HAZUSEで型式名 **パチスロコブラAB**、検定番号 **3S0862**、導入開始日 **2015-03-16** を確認。
- K-Navi、パチ7、パチビーも2015-03-16導入で一致。

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 99.0% |
| 3 | 100.3% |
| 4 | 104.7% |
| 5 | 109.3% |
| 6 | 114.8% |

- HAZUSE、pacnkで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 | ART初当たり | CZ初当たり |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/422.8 | 1/642.5 | 1/255.0 | 1/449.2 | 1/690.83 |
| 2 | 1/414.7 | 1/618.2 | 1/248.2 | 1/415.7 | 1/632.68 |
| 3 | 1/402.0 | 1/595.7 | 1/240.0 | 1/408.4 | 1/635.86 |
| 4 | 1/394.8 | 1/574.8 | 1/234.0 | 1/343.3 | 1/556.10 |
| 5 | 1/381.0 | 1/546.1 | 1/224.4 | 1/314.3 | 1/555.34 |
| 6 | 1/368.1 | 1/524.2 | 1/216.2 | 1/257.1 | 1/468.34 |

- PREMIUM BONUSは全設定共通 **1/65536**。
- HAZUSE、K-Navi、pacnkで主要値を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G/50枚**（設定1〜6）。
- HAZUSEと当時スペック記事で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- ART「BIG BANG RUSH」: **約1.6枚/G**。
- HAZUSE、パチマガスロマガ、P-WORLD、パチビーで一致。

## basicPayout

- BIG BONUS: **約204枚**（297枚超払い出しで終了）。
- REG BONUS: **約36枚**（45枚超払い出しで終了）。
- PREMIUM BONUS: **約36枚**（45枚超払い出しで終了）+ ART確定系上乗せ契機。
- ART「BIG BANG RUSH」: **1セット50G or 315G**。
- CZ「サイコガンチャンス」: **11G構成、ART期待度約33%**。

## modeSpecificMinimumData

- 通常天井: **ボーナス間最大1315G**でART当選。
- ART当選を挟んでもボーナス間天井Gはリセットされない。
- 天井到達時はART初期 **315G濃厚**とされる。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は通常1315Gのボーナス間天井に対して、**100G / 500G / 1315G** のリセット専用天井振り分けが行われる。
- したがって通常天井進捗は設定変更でリセットされ、リセット専用G数を再セットすると判断できる。
- 設定変更時の内部状態再抽選・液晶ステージ固定等について、本機固有の直接契約は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置き時のボーナス間天井Gについて、通常天井がボーナス間で管理されARTではリセットされないことは確認できるが、前日→翌日の据え置き跨ぎを直接明記した本機固有資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機慣例からの推定は行わない。

### powerCycleBehavior

- 設定変更なしの純電源OFF→ON時の天井G・内部状態・液晶ステージについて直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更時: **RESET_AND_RESELECT_RESET_CEILING**。
- 据え置き/純電断: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 設定変更時のみ **100G / 500G / 1315G** の専用振り分け。
- 振り分け:
  - 設定1・2: 100G **6.0%** / 500G **20.0%** / 1315G **74.0%**
  - 設定3・4: 100G **7.5%** / 500G **20.0%** / 1315G **72.5%**
  - 設定5・6: 100G **10.0%** / 500G **20.0%** / 1315G **70.0%**
- 全設定で500G以内選択率は **26.0% / 27.5% / 30.0%**（設定1-2 / 3-4 / 5-6）。

### modeAfterReset

- 規定Gモード式ではなくリセット専用天井G振り分けを確認。
- 別の朝一専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- 通常時には内部状態差が存在するが、設定変更時専用の状態振り分けは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 通常最大1315Gに対し、設定変更後は **26.0〜30.0%で500G以内天井**、うち **6.0〜10.0%で100G天井**となる明確な朝一恩恵。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 100G/500Gで天井ARTが発動した場合は設定変更を強く示す材料となる。
- 本機固有のガックン、初期出目、電断表示等の確定判別契約は、表記揺れ・型式名・SNKプレイモア名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 変更判別` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

| 設定 | 100G | 500G | 1315G |
|---:|---:|---:|---:|
| 1 | 6.0% | 20.0% | 74.0% |
| 2 | 6.0% | 20.0% | 74.0% |
| 3 | 7.5% | 20.0% | 72.5% |
| 4 | 7.5% | 20.0% | 72.5% |
| 5 | 10.0% | 20.0% | 70.0% |
| 6 | 10.0% | 20.0% | 70.0% |

### publicMorningNumbers

- 設定変更後100G天井選択率: **6.0〜10.0%**。
- 設定変更後500G天井選択率: **20.0%**。
- 設定変更後500G以内天井選択率: **26.0〜30.0%**。

## conflicts

- 導入日について一部後年まとめに2015-03-02表記があるが、K-Navi・HAZUSE・パチ7・パチビーが **2015-03-16** で一致し、SNK公式も2015年3月予定。canonicalは2015-03-16とし、後年単一まとめの03-02は低信頼競合として採用しない。

## missingFields

- carryOverBehavior exact overnight contract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- stateAfterReset exact distribution: `UNVERIFIED_AFTER_RESEARCH`
- resetDetection gakkun/display: `UNVERIFIED_AFTER_RESEARCH`

## sources

取得日: 2026-09-07

1. SNKプレイモア公式「パチスロコブラ」— https://slot.snk-corp.co.jp/official/cobra/
   - 型式名、2015年3月稼働予定、ゲームフロー。
2. HAZUSE「パチスロコブラ」— https://hazuse.com/machine/pachislot/3S0862/
   - 導入日、型式、検定番号、ボーナス/ART/CZ確率、機械割、31G/50枚、純増、基本獲得枚数、通常天井、設定変更時100/500/1315G天井振り分け。
3. K-Navi「パチスロコブラ」— https://p-kn.com/slot/2207/
   - 2015-03-16導入、設定別BIG/REG、ART仕様。
4. パチマガスロマガ「パチスロコブラ」— https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/49/snk_slot_49.php
   - A+ART構成、ART純増、基本獲得性能、朝イチ・設定変更コンテンツの存在。
5. P-WORLD「パチスロコブラ」— https://www.p-world.co.jp/machine/database/7637
   - A+ART、基本獲得枚数、ART純増・セットG数。
6. パチビー「パチスロコブラ」— https://www.pachibee.jp/machines/lecture/215020002
   - 導入日2015-03-16、A+ART、純増約1.6枚/G。
7. すろぱちくえすと「パチスロコブラ 天井期待値」— https://www.slopachi-quest.com/article/cobra/
   - 通常1315G天井、ARTではボーナス間天井Gがリセットされない、リセット100G/500G選択の当時整理。
8. pacnk「パチスロ コブラ 設定判別ツール」— https://pacnk.com/slot/tools/sh_cobra2015.html
   - 機械割、ART/CZ/BIG/REG確率の照合。

## confidenceSummary

- identity / releaseDate: OFFICIAL_PLUS_ANALYSIS_HIGH
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- initialHitBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- netIncrease / basicPayout: ANALYSIS_HIGH_MULTI_SOURCE
- reset ceiling numeric data: ANALYSIS_HIGH
- carryOver / powerCycle / resetDetection detail: UNVERIFIED_AFTER_RESEARCH
