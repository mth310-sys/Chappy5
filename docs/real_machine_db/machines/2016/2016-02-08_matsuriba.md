# まつりば！

machineName: まつりば！
manufacturer: 大都技研
releaseDate: 2016-02-08
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 954
generation: 5号機
systemType: A+ART / 完走型ART
formalModelName: まつりば！／A5
inspectionNumber: 5S0999
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_CONTRACT

## identity
- HAZUSEで型式名 **まつりば！／A5**、検定番号 **5S0999**、導入開始日 **2016-02-08** を確認。
- ちょんぼりすた、すろぱちくえすと、P-WORLD系でも2016-02-08導入を確認。
- 大都技研の5号機A+ART機として扱う。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.7% |
| 3 | 100.4% |
| 4 | 105.3% |
| 5 | 108.5% |
| 6 | 112.4% canonical / 112.3% alternate |

- 設定1〜5は複数解析で一致。
- 設定6のみ112.3%表記と112.4%表記があるため `PAYOUT_SETTING6_ROUNDING_CONFLICT_112_3_VS_112_4`。平均しない。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONFLICT

## initialHitBySetting
| 設定 | ボーナス合算 | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/150.3 | 1/370.4 | 1/106.9 |
| 2 | 1/146.9 | 1/361.7 | 1/104.5 |
| 3 | 1/141.9 | 1/349.6 | 1/100.9 |
| 4 | 1/137.4 | 1/332.6 | 1/97.2 |
| 5 | 1/131.9 | 1/317.8 | 1/93.2 |
| 6 | 1/125.4 | 1/303.3 | 1/89.3 |

### bonus breakdown
| 設定 | 祭ボーナス | 花火大会 | REG |
|---:|---:|---:|---:|
| 1 | 1/321.3 | 1/1170.3 | 1/372.4 |
| 2 | 1/312.1 | 1/1170.3 | 1/364.1 |
| 3 | 1/307.7 | 1/1110.8 | 1/344.9 |
| 4 | 1/295.2 | 1/1074.4 | 1/337.8 |
| 5 | 1/283.7 | 1/1024.0 | 1/324.4 |
| 6 | 1/269.6 | 1/1024.0 | 1/304.3 |

- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約31G/50枚**。
- 複数解析で一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「祭」: **約0.8枚/G**。
- P-WORLD、パチビー、複数解析で一致。
- reliability: INDUSTRY_DATABASE_PLUS_ANALYSIS_HIGH

## basicPayout
- 祭ボーナス: **約200枚**。
- 花火大会: **最大/約200枚**。
- 神輿チャレンジ(REG): **8G、最大104枚**。通常時は押し順ナビ条件により実獲得が変動する。
- ART「祭」: **1セット30G、完走型**。
- reliability: INDUSTRY_DATABASE_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時 **777G** 到達で次回ボーナスまで継続する **無限ART**。
- ART中は完走型のため、通常時天井カウントの定義と混同しない。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_NUMERIC_RESET_BENEFIT_AND_UNRESOLVED_CEILING_RESET
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **ベルメーター初期ptを再抽選**。
- 設定変更後1回目のボーナスでは、低確ボーナスから高確ボーナス相当への昇格抽選が大幅優遇される。
- 天井ゲーム数そのものが設定変更でRESETかCARRYOVERかは、当時解析が「調査中」としており、十分な再探索後も直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 据え置き時の天井ゲーム数・内部状態・ベルメーターの完全な直接比較契約は **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ONについては天井引継ぎが直接記載されているため、据え置き一般と同義にはしない。

### powerCycleBehavior
- **電源OFF→ONのみでは天井ゲーム数を引き継ぐ**。
- 内部状態の扱いは当時解析で調査中のため **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- setting change: **UNVERIFIED_AFTER_RESEARCH**。
- pure power cycle: **CARRYOVER_CONFIRMED**。
- carry-over setting: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- 通常天井は777G。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時に777Gカウンタがゼロから再スタートするかは **UNVERIFIED_AFTER_RESEARCH**。

### modeAfterReset
- 本機はAT機のような通常A/B等のゲーム数モードを主要構造としない。
- 設定変更専用モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 設定変更直後の低確/高確そのものの初期状態振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- ただし設定変更後1回目のボーナスに専用の高確ボーナス昇格優遇が存在する。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後1回目ボーナスの高確ボーナス昇格率:
  - 設定1〜3: **50.0%**
  - 設定4: **66.0%**
  - 設定5: **66.0%**（表組み上、設定4行の66%を設定4〜6共通列として解釈する資料系統と、後続行が2回目以降値のみを示す資料構造があるため注記）
  - 設定6: **66.0%**
- 設定変更時ベルメーター初期pt振り分け:
  - 0pt 20.7%
  - 1pt 20.3%
  - 2pt 20.3%
  - 3pt 14.8%
  - 4pt 9.8%
  - 5pt 6.3%
  - 6pt 4.7%
  - 7pt 3.1%
  - 平均 **2.3pt**
- reset-only numeric dataは客の朝一行動に影響するため保存する。

### resetPenalties
- 設定変更時だけに適用される主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 朝一ステージは **町ステージ** とする解析資料あり。ただし町ステージ単独で設定変更確定とはならない。
- 設定変更後1回目ボーナスで高確ボーナス相当挙動が出れば変更推測材料にはなるが、100%判別契約ではない。
- 本機固有のメーカー保証ガックン/初期出目/ランプ確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- reset bell-meter initial points: **0:20.7 / 1:20.3 / 2:20.3 / 3:14.8 / 4:9.8 / 5:6.3 / 6:4.7 / 7:3.1% / avg 2.3pt**。
- reset first-bonus low-to-high bonus upgrade: **設定1〜3 50.0%、設定4〜6 66%級**。後年整理資料の表構造に注意。
- exact reset ceiling-counter behavior: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- `PAYOUT_SETTING6_ROUNDING_CONFLICT_112_3_VS_112_4`: 設定6機械割が112.3% / 112.4%。平均しない。
- `RESET_FIRST_BONUS_TABLE_PRESENTATION_CAUTION`: 設定変更後1回目の高確ボーナス昇格は設定1〜3=50%、設定4〜6=66%級として複数整理資料で扱われるが、一部HTML表崩れがあるため元テーブル構造を注記し、通常時2回目以降の設定5=7.8%、設定6=9.4%と混同しない。

## missingFields
- exact setting-change ceiling counter reset/carryover: UNVERIFIED_AFTER_RESEARCH
- exact carry-over setting state/ceiling contract independent of pure power cycle: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle internal state: UNVERIFIED_AFTER_RESEARCH
- manufacturer-guaranteed reset detection: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. HAZUSE — まつりば！
   - https://hazuse.com/machine/pachislot/5S0999/
   - 型式名、検定番号、導入開始日。
   - reliability: ANALYSIS_DATABASE_HIGH
2. ちょんぼりすた — まつりば！ スロット｜最新解析を完全攻略
   - https://chonborista.com/slot/daito-slot/15540/
   - 天井、電源OFF→ON天井引継ぎ、朝一ステージ、設定変更時ベルメーター初期pt、リセット後1回目優遇。
   - reliability: ANALYSIS_HIGH_PERIOD
3. すろぱちくえすと — まつりば！ 天井恩恵・狙い目・ヤメ時・解析
   - https://www.slopachi-quest.com/article/matsuriba/
   - 設定別ボーナス/ART/機械割、31G/50枚、ART純増、基本獲得、777G天井。
   - reliability: ANALYSIS_HIGH_PERIOD
4. P-WORLD — まつりば!
   - https://www.p-world.co.jp/machine/database/7938
   - 5号機ART、純増約0.8枚/G、ボーナス獲得枚数、ART30G。
   - reliability: INDUSTRY_DATABASE
5. パチビー — まつりば!
   - https://www.pachibee.jp/machines/lecture/216010006
   - 2016-02-08、5号機ART、天井あり、純増約0.8枚/G。
   - reliability: INDUSTRY_DATABASE
6. スロットガーデン — まつりば!
   - https://xn--mckza4ard4ttb2d.com/matsuriba
   - 777G天井、ベルメーター再抽選、スペック補強。
   - reliability: ANALYSIS_SINGLE
7. 楽スロ — 設定変更後の恩恵
   - https://rakuslo.com/matsuriba-asaiti.html
   - 設定変更後1回目の高確ボーナス昇格優遇、高確関連数値。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
8. 5号機クロニクル — 大都技研5号機一覧
   - https://5goki.com/daito
   - 機械割97.4/98.7/100.4/105.3/108.5/112.4%。
   - reliability: RETROSPECTIVE_DATABASE

## confidence
- identity/formalModel/inspection: ANALYSIS_DATABASE_HIGH
- exactReleaseDate: ANALYSIS_MULTI_SOURCE_HIGH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- ceiling: ANALYSIS_HIGH_MULTI_SOURCE
- reset numeric benefit: ANALYSIS_HIGH_PLUS_RETROSPECTIVE_DIRECT_NUMERIC
- setting-change ceiling contract: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle ceiling: ANALYSIS_HIGH_DIRECT
- reset detection: RESEARCHED_NO_CONFIRMED_HARD_DETECTION
