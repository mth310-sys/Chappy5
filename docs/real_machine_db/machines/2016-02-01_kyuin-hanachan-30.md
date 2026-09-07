# キュインハナチャン-30

machineName: キュインハナチャン-30
manufacturer: ニューギン
releaseDate: 2016-02-01
releaseDatePrecision: exact_hall_start_analysis_plus_industry_delivery_boundary
recordNumber: 952
generation: 5号機
systemType: ノーマルAタイプ / 完全告知 / 沖スロ / 30φ
formalModelName: キュインハナチャンX-30
inspectionNumber: 5S0977
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCHED_WITH_VARIANT_CONFLICTS

## identity
- P-WORLDで型式 **キュインハナチャンX-30**、検定番号 **5S0977**、30φノーマル完全告知機を確認。
- グリーンべるとは25φ/30φの2スペックを同時発表し、納品開始予定を **2016-01-31** と報道。中古実機DB系の導入日一覧では25/30とも **2016-02-01**。P-WORLDの月表示2016年1月とは粒度差として保持する。

## payoutRateBySetting
### canonical market-published family rate
- **97 / 99 / 102 / 104 / 107 / 111%** をシリーズ通常掲載値として参照可能だが、30φ単独の同定義フル表を独立資料で固定できなかったため、30φ固有canonicalへの無条件転記はしない。

### 30φ simulation payout
| 設定 | シミュレートPAYOUT |
|---:|---:|
| 1 | 96.30% |
| 2 | 98.53% |
| 3 | 101.07% |
| 4 | 104.06% |
| 5 | 107.06% |
| 6 | 111.22% |

- パチマガスロマガの7000G×10万日シミュレート値。
- 通常掲載機械割と定義が異なるため平均しない。
- reliability: ANALYSIS_MAJOR_MEDIA_SIMULATION

## initialHitBySetting
### BIG canonical
| 設定 | BIG |
|---:|---:|
| 1 | 1/309.1 |
| 2 | 1/297.9 |
| 3 | 1/283.7 |
| 4 | 1/269.7 |
| 5 | 1/256.0 |
| 6 | 1/240.1 |

- P-WORLD。グリーンべるとも設定1 1/309.1〜設定6 1/240.1のレンジを明記。

### REG / 合算
| 設定 | REG | 合算 |
|---:|---:|---:|
| 1 | 1/516.0 | 1/193.3 |
| 2 | 1/481.9 | 1/184.1 |
| 3 | 1/445.8 | 1/173.4 |
| 4 | 1/409.6 | 1/162.6 |
| 5 | 1/376.6 | 1/152.4 |
| 6 | 1/343.1 | 1/141.2 |

- REG系列は5号機クロニクルとシリーズ解析、合算はP-WORLD。グリーンべるとはREG設定1 1/516.0〜設定6 1/343.1を明記。
- reliability: ANALYSIS_MULTI_SOURCE_WITH_VARIANT_CONFLICT

## baseGamesPer50
- 30φ単独の設定別/平均50枚ベースは、機種名・型式・30φ・50枚・コイン持ち・ベースを組み替えて再探索したが、25φからの無条件転記を避け **UNVERIFIED_AFTER_RESEARCH**。
- シリーズ25φでは約37〜38G/50枚だが、30φ固有値としては採用しない。

## netIncrease
- **NOT_APPLICABLE_NORMAL_TYPE**。

## basicPayout
- BIG CHANCE: **最大312枚**。
- REG CHANCE: **最大130枚**。
- P-WORLD、グリーンべるとで一致。

## modeSpecificMinimumData
- 天井: ノーマルAタイプで天井機能を示す資料なし。P-WORLDのゲームフローもボーナスのみで増やす構成。
- ボーナス終了後32Gは夕方背景、その間のボーナス当選でBGM変化。朝一リセットモードとは分離。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_SPECIAL_RESET_CONTRACT_CONFIRMED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 「キュインハナチャン-30 / キュインハナチャンX-30 / ニューギン / 5S0977」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン」を組み替え、業界記事、P-WORLD、当時解析、古DB、回顧資料を再探索。
- 設定値変更以外にホール経営/朝一客AIへ必要な短縮天井・専用モード・主要リセット恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### carryOverBehavior
- AT/ART、ゲーム数天井、通常時ゲーム数モードを持つ資料はなく、それらの据え置きCARRYOVERは **NOT_APPLICABLE**。

### powerCycleBehavior
- 純電源OFF→ONだけで生じる朝一専用恩恵・専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- ボーナス後32G背景など表示状態の純電断保持契約は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- **NOT_APPLICABLE_NO_CONFIRMED_CEILING_OR_GAME_COUNT_MODE**。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CONFIRMED_CEILING**。

### modeAfterReset
- **NOT_APPLICABLE_NO_PUBLIC_NORMAL_GAME_MODE_SYSTEM**。

### stateAfterReset
- 設定変更専用内部状態は **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、ランプによる設定変更/据え置き確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- REG中パールランプ等の設定推測は朝一変更判別と分離。

### numericResetData
- reset shortened ceiling: **NOT_APPLICABLE_NO_CONFIRMED_CEILING**。
- reset mode allocation: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset-only morning hit probability: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset-only benefit occurrence rate: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
- `BIG_VARIANT_SOURCE_CONFLICT`:
  - P-WORLD/グリーンべると30φ: 設定1 **1/309.1**、P-WORLD設定2 **1/297.9**。
  - 5号機クロニクル30φ表: 設定1 **1/310.6**、設定2 **1/296.5**（25φ表と同値）。
  - 設定3〜6は一致。30φ固有資料を優先してP-WORLD系列をcanonicalとし、回顧DB値をCONFLICTとして保持。
- `RELEASE_MONTH_GRANULARITY_DIFFERENCE`:
  - P-WORLD: 導入開始2016年01月（月粒度）。
  - グリーンべると: 1/31納品開始予定。
  - 導入日DB: 2016-02-01。工程/粒度差として分離。
- `PAYOUT_DEFINITION_DIFFERENCE`:
  - シリーズ通常掲載値とパチマガスロマガのシミュレートPAYOUTを混ぜない。

## missingFields
- 30φ standalone market-published machine-rate full table: UNVERIFIED_AFTER_RESEARCH
- 30φ standalone baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- manufacturer-guaranteed setting-change detection: NONE_CONFIRMED_AFTER_RESEARCH
- purePowerCycle display-state contract: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. グリーンべると — 沖スロ感満載の「キュインハナチャン」登場
   - https://web-greenbelt.jp/00008317/
   - 25φ/30φ、納品1/31予定、30φBIG/REG確率レンジ、獲得枚数。
   - reliability: INDUSTRY
2. P-WORLD — キュインハナチャン-30
   - https://www.p-world.co.jp/machine/database/7946
   - 型式、検定番号、30φ、BIG系列、合算、最大獲得枚数、ボーナス後32G挙動。
   - reliability: INDUSTRY_DATABASE
3. パチマガスロマガ — キュインハナチャン-30
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/36/g.php
   - 30φシミュレートPAYOUT。
   - reliability: ANALYSIS_MAJOR_MEDIA
4. 5号機クロニクル — ニューギン＆エキサイト5号機一覧
   - https://5goki.com/newgin-excite
   - 30φ独立掲載、ボーナス確率。BIG設定1/2はP-WORLD/業界資料とCONFLICT。
   - reliability: RETROSPECTIVE_DATABASE
5. スロズバ — ニューギン実機一覧
   - https://slozuva.com/?MK=36
   - キュインハナチャンX-25/X-30を2016-02-01として別掲載。
   - reliability: SECONDARY_DATABASE

## confidence
- identity/formalModel/inspectionNumber: INDUSTRY_DATABASE_HIGH
- exactReleaseDate: ANALYSIS_DATABASE_PLUS_INDUSTRY_DELIVERY_BOUNDARY
- payoutRateBySetting: PARTIAL_DEFINITION_SEPARATED_AFTER_RESEARCH
- bonusProbabilityBySetting: ANALYSIS_MULTI_SOURCE_WITH_VARIANT_CONFLICT
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- basicPayout: INDUSTRY_MULTI_SOURCE
- ceiling: RESEARCHED_NO_CEILING_CONTRACT_CONFIRMED
- settingChangeBehavior: RESEARCHED_NO_SPECIAL_RESET_CONTRACT_CONFIRMED
- powerCycleBehavior: PARTIAL_UNVERIFIED_DISPLAY_CONTRACT
- resetDetection: RESEARCHED_NO_CONFIRMED_CHANGE_DETECTION
