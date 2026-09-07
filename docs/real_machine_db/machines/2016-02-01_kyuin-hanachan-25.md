# キュインハナチャン-25

machineName: キュインハナチャン-25
manufacturer: ニューギン
releaseDate: 2016-02-01
releaseDatePrecision: exact_hall_start_analysis_database_plus_industry_delivery_boundary
recordNumber: 951
generation: 5号機
systemType: ノーマルAタイプ / 完全告知 / 25φ
formalModelName: キュインハナチャンX-25
inspectionNumber: 5S0958
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCHED

## identity
- HAZUSEで導入開始日 **2016-02-01**、型式 **キュインハナチャンX-25**、検定番号 **5S0958** を確認。
- グリーンべると2015-12-21記事で25φ/30φの2スペック、納品開始予定 **2016-01-31** を確認。納品予定日とホール導入開始日は分離する。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97% |
| 2 | 99% |
| 3 | 102% |
| 4 | 104% |
| 5 | 107% |
| 6 | 111% |

- HAZUSE、ちょんぼりすたで一致。
- パチマガスロマガのシミュレート値 96.30 / 98.52 / 101.08 / 104.06 / 107.06 / 111.22% は定義が異なるため、通常掲載機械割と混ぜず別定義として保持。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/310.6 | 1/516.0 | 1/193.9 |
| 2 | 1/296.5 | 1/481.9 | 1/183.6 |
| 3 | 1/283.7 | 1/445.8 | 1/173.4 |
| 4 | 1/269.7 | 1/409.6 | 1/162.6 |
| 5 | 1/256.0 | 1/376.6 | 1/152.4 |
| 6 | 1/240.1 | 1/343.1 | 1/141.2 |

- HAZUSE、ちょんぼりすた、5号機クロニクルで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定1〜6: **約37.0 / 37.3 / 37.4 / 37.6 / 37.7 / 38.0G/50枚**。
- HAZUSEの一括表記は約37G/50枚、ちょんぼりすたは37.1〜38.0G。設定別値はすろぱちくえすと掲載のスロット日報引用値。
- reliability: ANALYSIS_MULTI_SOURCE_WITH_ROUNDING

## netIncrease
- **NOT_APPLICABLE_NORMAL_TYPE**。

## basicPayout
- BIG CHANCE: **最大312枚**。
- REG CHANCE: **最大130枚**。
- グリーンべると、HAZUSEで一致。

## modeSpecificMinimumData
- 天井: **非搭載**。
- AT/ART/RT、通常時ゲーム数天井モードは非搭載。
- ボーナス終了後32Gは夕方背景となり、その間のボーナス当選でBGM変化。これはボーナス後演出状態であり、朝一リセットモードとして扱わない。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_SPECIAL_RESET_CONTRACT_CONFIRMED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 「キュインハナチャン / キュインハナチャンX-25 / ニューギン」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / モード」を組み替え、業界記事、HAZUSE、P-WORLD系DB、当時解析、後年DBを再探索。
- 天井・AT/ART・通常時ゲーム数モードを持たないノーマルAタイプで、設定値変更以外の朝一専用短縮天井・専用モード・主要リセット恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### carryOverBehavior
- 天井、ゲーム数モード、AT/ART状態は非搭載のため、それらの据え置きCARRYOVERは **NOT_APPLICABLE**。
- ボーナス成立中など実機完全再現粒度の例外状態は本DB対象外。

### powerCycleBehavior
- 純電源OFF→ONだけで発生する朝一専用恩恵・専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- ボーナス後32Gの液晶背景など、遊技途中表示状態の純電断保持契約は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- **NOT_APPLICABLE_NO_CEILING_OR_GAME_COUNT_MODE**。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。

### modeAfterReset
- **NOT_APPLICABLE_NO_PUBLIC_NORMAL_GAME_MODE_SYSTEM**。

### stateAfterReset
- ホール経営/朝一客AIへ必要な設定変更専用内部状態は **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、ランプ等による設定変更/据え置き確定判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- REG中パールランプやボーナス後パネルフラッシュは設定推測要素であり、朝一変更判別とは分離する。

### numericResetData
- reset shortened ceiling: **NOT_APPLICABLE_NO_CEILING**。
- reset mode allocation: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset-only morning hit probability: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset-only benefit occurrence rate: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
- `PAYOUT_DEFINITION_DIFFERENCE`:
  - 通常掲載機械割: 97 / 99 / 102 / 104 / 107 / 111%。
  - パチマガスロマガ7000G×10万日シミュレート: 96.30 / 98.52 / 101.08 / 104.06 / 107.06 / 111.22%。
  - 定義差のため平均しない。

## missingFields
- manufacturer-guaranteed setting-change detection: NONE_CONFIRMED_AFTER_RESEARCH
- purePowerCycle display-state contract: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. グリーンべると — 沖スロ感満載の「キュインハナチャン」登場
   - https://web-greenbelt.jp/00008317/
   - 25φ/30φ、納品予定、BIG/REG最大獲得、確率レンジ。
   - reliability: INDUSTRY
2. HAZUSE — キュインハナチャン-25
   - https://hazuse.com/machine/pachislot/5S0958/
   - 導入日、型式/検定番号、BIG/REG/合算、機械割、約37G/50枚、天井非搭載、獲得枚数。
   - reliability: ANALYSIS_DATABASE_HIGH
3. ちょんぼりすた — キュインハナチャン攻略まとめ
   - https://chonborista.com/slot/newgin-slot/16763/
   - 2016-02-01、設定別確率、機械割、37.1〜38.0G/50枚、天井なし。
   - reliability: ANALYSIS_HIGH
4. すろぱちくえすと — キュインハナチャン設定判別
   - https://www.slopachi-quest.com/article/kyuin-hanachan/
   - 設定別コイン持ち37.0〜38.0G、設定推測情報。
   - reliability: ANALYSIS_PERIOD
5. パチマガスロマガ — キュインハナチャン-25
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/37/g.php
   - シミュレートPAYOUT。通常掲載機械割とは定義分離。
   - reliability: ANALYSIS_MAJOR_MEDIA
6. 5号機クロニクル — ニューギン＆エキサイト5号機一覧
   - https://5goki.com/newgin-excite
   - 25φ/30φの存在、25φボーナス確率。
   - reliability: RETROSPECTIVE_DATABASE

## confidence
- identity/formalModel/inspectionNumber: ANALYSIS_DATABASE_HIGH
- exactReleaseDate: ANALYSIS_HIGH_PLUS_INDUSTRY_DELIVERY_BOUNDARY
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- bonusProbabilityBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_MULTI_SOURCE
- basicPayout: INDUSTRY_PLUS_ANALYSIS_HIGH
- ceiling: ANALYSIS_HIGH_NO_CEILING
- settingChangeBehavior: RESEARCHED_NO_SPECIAL_RESET_CONTRACT_CONFIRMED
- powerCycleBehavior: PARTIAL_UNVERIFIED_DISPLAY_CONTRACT
- resetDetection: RESEARCHED_NO_CONFIRMED_CHANGE_DETECTION
