# 戦国パチスロ 花の慶次～戦極めし傾奇者の宴～

machineName: 戦国パチスロ 花の慶次～戦極めし傾奇者の宴～
manufacturer: EXCITE
releaseDate: 2015-11-02
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 935
generation: 5号機
systemType: A+ART / ボーナス+初期G数変動型ART
formalModelName: 花の慶次～戦極めし傾奇者の宴～EP
inspectionNumber: 5S0419
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSE機種DBで型式名「花の慶次～戦極めし傾奇者の宴～EP」、検定番号5S0419、EXCITE、導入開始日2015-11-02を確認。
- EXCITE発表を報じたK-Navi/グリーンべるとでA+ART機として確認。グリーンべるとは2015-09-07時点で11月初旬納品予定と報道。
- パチビー、パチマガスロマガ、複数解析資料も2015-11-02導入で整合。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.8% |
| 2 | 99.2% |
| 3 | 102.9% |
| 4 | 105.8% |
| 5 | 109.8% |
| 6 | 112.7% |

- HAZUSE解析値。後年回顧資料でも同値を照合。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
主要初当たりとしてART「戦極RUSH」確率を採用。

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/549.5 |
| 2 | 1/547.1 |
| 3 | 1/509.7 |
| 4 | 1/479.8 |
| 5 | 1/446.3 |
| 6 | 1/412.7 |

参考ボーナス合成:
- 設定1 1/350.5
- 設定2 1/343.1
- 設定3 1/336.1
- 設定4 1/329.3
- 設定5 1/322.8
- 設定6 1/316.6

BIG / REG:
- BIG: 1/704.7 / 689.9 / 675.6 / 662.0 / 648.9 / 636.3
- REG: 1/712.3 / 697.2 / 682.7 / 668.7 / 655.4 / 642.5
- 極BIG: 全設定1/32768.0
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- canonical: **約31.8G/50枚**。
- HAZUSE基本スペックで直接確認。
- reliability: ANALYSIS_HIGH

## netIncrease
- ART「戦極RUSH」: **約1.6枚/G**。
- EXCITE発表系業界記事、パチビー、パチマガスロマガ、HAZUSEで一致。
- reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- 極BIG BONUS: **純増204枚**。
- BIG BONUS: **純増204枚**。
- REGULAR BONUS: **純増54枚**。
- 戦極BONUS: **ART中のみ1セット30G**。
- ART「戦極RUSH」は初期G数変動型、継続率約50～80%。

## modeSpecificMinimumData
- 通常時最大天井: **ボーナス間999G**。
- 天井到達恩恵: **ART当選（継続率優遇）**。
- 内部モード: 通常A / 通常B / 天国 / 戦極。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_HIGH_DIRECT_COMPARISON
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井ゲーム数RESET**。
- **内部モードRESELECT**。
- **内部状態RESELECT**。
- 設定変更時モード振り分けと状態振り分けに公開数値あり。

### carryOverBehavior
- 据え置きは設定変更なしの純電源ON/OFF挙動に準じ、**天井・内部モード・内部状態を引継ぎ**として整理。
- 宵越しボーナス間天井が成立する構造。

### powerCycleBehavior
- 電源OFF→ONのみ:
  - 天井: **CARRYOVER**。
  - 内部モード: **CARRYOVER**。
  - 内部状態: **CARRYOVER**。
- 当時解析の設定変更/電源ON・OFF直接比較表で確認。

### gameCounterReset
- settingChange: **RESET**。
- carryOver: **CARRYOVER**。
- purePowerCycle: **CARRYOVER**。

### ceilingAfterReset
- 設定変更後も通常天井は **ボーナス間999G**。
- リセット専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更はモード/状態振り分けが優遇されるため、短縮天井型ではなく内部抽選優遇型の朝一恩恵。

### modeAfterReset
設定変更時:
- 設定1～3: 通常A **25.0%** / 通常B **50.0%** / 天国 **22.5%** / 戦極 **2.5%**。
- 設定4～6: 通常A **16.7%** / 通常B **50.0%** / 天国 **30.8%** / 戦極 **2.5%**。
- purePowerCycle/carryOver: **CARRYOVER**。

### stateAfterReset
設定変更時:
- 設定1～3: 低確 **36.7%** / 通常 **33.3%** / 高確A **27.5%** / 高確B **2.5%**。
- 設定4～6: 低確 **26.7%** / 通常 **33.3%** / 高確A **37.5%** / 高確B **2.5%**。
- purePowerCycle/carryOver: **CARRYOVER**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時は通常Bが50%、天国が設定1～3で22.5%、設定4～6で30.8%、戦極2.5%へ再抽選される。
- 高確A/B合計も設定1～3で30.0%、設定4～6で40.0%となり、朝一は内部モード/状態面の優遇が明確。
- 固定短縮天井型の恩恵は確認できない。

### resetPenalties
- 前日までのボーナス間ハマり、内部モード、内部状態は設定変更で消去されるため、宵越し天井/状態狙い価値を失う。
- その他の設定変更固有不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のリールガックン、表示差、朝一液晶挙動による確定判別契約は検索語・資料系統を変えて再探索したが、今回安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井ゲーム数の引継ぎ差は事後的な据え置き推測材料になり得るが即時確定判別ではない。

### numericResetData
- resetModeSetting1to3: A 25.0% / B 50.0% / 天国 22.5% / 戦極 2.5%
- resetModeSetting4to6: A 16.7% / B 50.0% / 天国 30.8% / 戦極 2.5%
- resetStateSetting1to3: 低確 36.7% / 通常 33.3% / 高確A 27.5% / 高確B 2.5%
- resetStateSetting4to6: 低確 26.7% / 通常 33.3% / 高確A 37.5% / 高確B 2.5%
- resetCeiling: 999G
- resetDedicatedShortCeiling: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- NONE_MATERIAL_CONFIRMED。
- 導入日は2015-11-02で複数資料一致。業界発表の「11月初旬納品予定」は予定表現として分離し、競合扱いしない。

## missingFields
- resetDetection / reelGakkun: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. HAZUSE — 戦国パチスロ 花の慶次 戦極めし傾奇者の宴 基本スペック
   - https://hazuse.com/machine/pachislot/5S0419/genre/201/
   - 型式、検定番号、2015-11-02導入、設定別BIG/REG/ART、機械割、31.8G/50枚、ボーナス獲得枚数。
   - reliability: ANALYSIS_HIGH / PERIOD_DB
2. HAZUSE — AT/ART・内部モード
   - https://hazuse.com/machine/pachislot/5S0419/genre/209/
   - ART純増約1.6枚/G、内部モード構造。
   - reliability: ANALYSIS_HIGH / PERIOD_DB
3. K-Navi — 新機種発売決定（EXCITE）
   - https://p-kn.com/topics/news/1867/
   - EXCITE発表、A+ART、シリーズ仕様。
   - reliability: INDUSTRY_PERIOD_REPORT
4. グリーンべると — 専用筐体「傾奇御免」に包まれ新たな慶次登場
   - https://web-greenbelt.jp/00008056/
   - 2015-09-07、A+ART、純増1.6枚/G、ART継続率50～80%、BIG/RB枚数、11月初旬納品予定。
   - reliability: INDUSTRY
5. パチビー — 戦国パチスロ 花の慶次 戦極めし傾奇者の宴
   - https://www.pachibee.jp/movies/index/12180
   - 2015-11-02導入、5号機ART、天井あり、純増1.6枚/G。
   - reliability: INDUSTRY_SECONDARY
6. パチマガスロマガ — 戦国パチスロ 花の慶次～戦極めし傾奇者の宴～
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/01/a.php
   - 2015年11月、ボーナス+ART、純増約1.6枚/G。
   - reliability: ANALYSIS_HIGH
7. ちょんぼりすた — 花の慶次 戦極めし傾奇者の宴 解析完全攻略
   - https://chonborista.com/slot/newgin-slot/11573/
   - ボーナス間999G天井、設定変更/電源ON・OFF直接比較、設定変更時モード/状態振り分け。
   - reliability: ANALYSIS_HIGH_DIRECT_COMPARISON
8. 後年回顧 — 花の慶次シリーズ歴代機械割
   - https://www.marimo0925.net/pachislot-kikaiwariranking-hanakei-ban/
   - 機械割96.8～112.7%、基本仕様照合。
   - reliability: ANALYSIS_SECONDARY

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- officialIdentity: INDUSTRY_HIGH
- formalModelNameInspectionNumber: ANALYSIS_HIGH_PERIOD_DB
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- resetGameCounter: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetModeDistribution: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetStateDistribution: ANALYSIS_HIGH_DIRECT_COMPARISON
- purePowerCycle: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetDetection: UNVERIFIED_AFTER_RESEARCH
