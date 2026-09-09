machineName: 忍魂 ～暁ノ章～
manufacturer: 大都技研
releaseDate: 2017-05-08
recordNumber: 1075
generation: 5号機 / 5.5号機
systemType: A+ART / リアルボーナス+ゲーム数上乗せART / 技術介入
formalModelName: 忍魂暁ノ章／A2
certificationNumber: 6S0645
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- パチビー、K-Navi、一撃、すろぱちくえすとで導入日2017-05-08一致。
- 2017-04-17付グリーンべると業界記事では4月13日のプレス試打会と「納品は5月7日開始」を確認し、5月8日ホール導入と整合する。
- 型式名「忍魂暁ノ章／A2」は複数実機/解析資料で一致。
- 検定番号6S0645は後年の実機整理資料で確認したが、公的/当時一次資料へ直接固定できなかったためANALYSIS_SINGLE扱いとする。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE_FOR_DATE_AND_MODEL; ANALYSIS_SINGLE_FOR_CERTIFICATION_NUMBER

## payoutRateBySetting
### 通常市場値
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.1% |
| 2 | 98.9% |
| 3 | 100.9% |
| 4 | 104.9% |
| 5 | 107.7% |
| 6 | 110.6% |

### 完全攻略時
| 設定 | 完全攻略時機械割 |
|---:|---:|
| 1 | 100.1% |
| 2 | 101.6% |
| 3 | 103.6% |
| 4 | 106.1% |
| 5 | 110.0% |
| 6 | 112.8% |
- パチビー、すろぱちくえすとで同一表を確認。技術介入機のため通常値と完全攻略値を別定義で保持する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
| 設定 | BIG |
|---:|---:|
| 1 | 1/343.1 |
| 2 | 1/341.3 |
| 3 | 1/339.6 |
| 4 | 1/337.8 |
| 5 | 1/336.1 |
| 6 | 1/329.3 |

### REG
| 設定 | REG |
|---:|---:|
| 1 | 1/642.5 |
| 2 | 1/636.2 |
| 3 | 1/618.3 |
| 4 | 1/601.2 |
| 5 | 1/590.4 |
| 6 | 1/565.0 |

### ART「月光ノ刻」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/713.4 |
| 2 | 1/626.1 |
| 3 | 1/638.8 |
| 4 | 1/560.9 |
| 5 | 1/574.1 |
| 6 | 1/490.4 |

### ボーナス+ART合算
| 設定 | 合算 |
|---:|---:|
| 1 | 1/170.3 |
| 2 | 1/164.0 |
| 3 | 1/163.2 |
| 4 | 1/156.1 |
| 5 | 1/156.0 |
| 6 | 1/146.1 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: 約33G/50枚。
- すろぱちくえすと、当時解析資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「月光ノ刻」単体: 約1.1枚/G。
- 当時解析には「ボーナス込み約1.5枚/G」の整理もあるため、単体純増とボーナス込み増加性能を混同しない。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: 203枚。
- REGULAR BONUS: 56枚。
- ART「月光ノ刻」: 1セット50G+α、ゲーム数上乗せ+セットストック型。
- ART引き戻し率: 16.80%（全設定共通、比較補助値）。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井: ボーナス or ART間968G+前兆でART「月光ノ刻」へ突入。
- 「忍ノ破片」は通常時/ART中に蓄積され、MAX1000pt到達後の次回ボーナスを特化ボーナスへ昇格させる重要な累積要素。
- 忍ノ破片は設定変更でも引き継ぐため、resetBehavior上の主要な朝一持越し要素として扱う。
reliability: ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_CORE_RESET_CONTRACT_WITH_STATE_UNVERIFIED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数: RESET。
- 忍ノ破片累積ポイント: CARRYOVER。
- 内部状態: 当時直接資料は「調査中」。今回も設定変更時の低確/高確/超高確契約を本機固有値として固定できず UNVERIFIED_AFTER_RESEARCH。
- 液晶ステージ: 滝ステージ（昼）。
reliability: ANALYSIS_HIGH_FOR_CEILING_FRAGMENT_AND_STAGE; UNVERIFIED_FOR_STATE

### carryOverBehavior
- 据え置き: 天井CARRYOVER、忍ノ破片CARRYOVER、状態CARRYOVERとする当時解析表を確認。
- 液晶は昼ステージ表記の資料もある一方、純電源OFF→ONではステージ引継ぎが直接確認されるため、据え置き時の表示挙動は電断条件の有無を分けて扱う。
reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 天井ゲーム数: CARRYOVER。
- 忍ノ破片累積ポイント: CARRYOVER。
- 内部状態: 当時一撃資料は「現在調査中」。推測補完せず UNVERIFIED_AFTER_RESEARCH。
- 液晶ステージ: CARRYOVER。
reliability: ANALYSIS_HIGH_FOR_CEILING_FRAGMENT_AND_STAGE; UNVERIFIED_FOR_STATE

### gameCounterReset
- settingChange: RESET。ボーナス or ART間968G+前兆の天井進捗を消去。
- carryOver: CARRYOVER。
- powerCycle: CARRYOVER。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 通常天井: ボーナス or ART間968G+前兆。
- 設定変更専用の固定短縮天井は NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更は前日の天井進捗をリセットするため、天井狙い上は据え置きより不利になり得る。
reliability: ANALYSIS_HIGH

### modeAfterReset
- 本機に朝一専用のゲーム数モード/天井モード振り分けが存在するという直接資料は固定できず NONE_CONFIRMED_AFTER_RESEARCH。
- 忍ノ破片はモードではなく累積ポイントとして別管理し、設定変更でも引継ぎ。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- settingChange: UNVERIFIED_AFTER_RESEARCH。当時一撃でも「現在調査中」。
- carryOver: 当時解析表でCARRYOVER。
- powerCycle: UNVERIFIED_AFTER_RESEARCH。当時一撃でも「現在調査中」。
- 前作「忍魂2」の設定変更時高確移行率は本機数値ではないため転用しない。
reliability: ANALYSIS_HIGH_FOR_CARRYOVER; UNVERIFIED_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 忍ノ破片累積ポイントは設定変更でも引き継ぐため、前日から高ポイントを保持している場合は朝一にも価値が残る。
- 設定変更専用の高確保証、短縮天井、専用初当たり優遇などは NONE_CONFIRMED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_FRAGMENT_CARRYOVER

### resetPenalties
- 設定変更で前日の968G天井進捗を消去する。
- その他の設定変更専用不利要素: NONE_CONFIRMED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH

### resetDetection
- 設定変更時は滝ステージ（昼）開始。
- 据え置き資料にも昼ステージ表記があり、液晶ステージ単独では確定判別にならない。
- 大都機一般論として「ガックン判別が効かない可能性が高い」とする当時解析はあるが、本機固有の決定的ガックン契約は直接固定できなかったため `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_STAGE; NONE_CONFIRMED_FOR_DETERMINISTIC_GAKKUN

### numericResetData
- normalCeiling: 968G+前兆（ボーナス or ART間）
- settingChangeCeiling: RESET_TO_FULL_NORMAL_CEILING
- carryOverCeiling: CARRYOVER
- powerCycleCeiling: CARRYOVER
- shinobiFragmentSettingChange: CARRYOVER
- shinobiFragmentCarryOver: CARRYOVER
- shinobiFragmentPowerCycle: CARRYOVER
- resetVisibleStage: 滝ステージ（昼）
- resetSpecificCeilingShortening: NONE_CONFIRMED_AFTER_RESEARCH
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## dataQualityNotes
- 技術介入により通常市場値と完全攻略時機械割が大きく異なるため、同一系列として平均化しない。
- ART純増約1.1枚/Gと「ボーナス込み約1.5枚/G」は定義が異なるため別保持。
- 忍ノ破片1000ptは通常天井968Gとは別の累積システム。設定変更でもポイントが引き継がれる点をresetBehaviorの中心情報として保持。
- 設定変更/電断時の内部状態は当時直接資料でも未確定。後年の前作・スマスロ忍魂参のリセット情報は混入させない。

## conflicts
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED.
- DEFINITION_DIFFERENCE_NET_INCREASE: ART単体約1.1枚/G vs ボーナス込み約1.5枚/G。競合ではなく定義差。

## missingFields
- settingChange internal-state contract: UNVERIFIED_AFTER_RESEARCH
- powerCycle internal-state contract: UNVERIFIED_AFTER_RESEARCH
- settingChange state numeric distribution: UNVERIFIED_AFTER_RESEARCH
- machine-specific deterministic gakkun behavior: NONE_CONFIRMED_AFTER_RESEARCH
- certificationNumber primary/industry corroboration: UNVERIFIED_AFTER_RESEARCH; 6S0645 retained from single later machine-reference source

## sources
取得日: 2026-09-09
1. パチビー — 忍魂 ～暁ノ章～
   - https://www.pachibee.jp/machines/index/217040006
   - 導入日、BIG/REG、機械割、完全攻略時機械割、ART基本性能。
2. K-Navi — 忍魂 ～暁ノ章～
   - https://p-kn.com/slot/2774/
   - 2017-05-08ホール導入、A+ART概要。
3. 一撃 — 忍魂 ～暁ノ章～ 機種トップ
   - https://1geki.jp/slot/s_shinobi_akatuki/
   - 機械割、導入日、基本仕様。
4. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_shinobi_akatuki/3/
   - 968G+前兆天井、設定変更時の天井RESET/忍ノ破片CARRYOVER/滝ステージ、電源OFF→ON時の天井・忍ノ破片・ステージCARRYOVER、状態調査中。
5. 一撃 — ART概要
   - https://1geki.jp/slot/s_shinobi_akatuki/81/
   - ART純増1.1枚/G、50G+α、引き戻し率16.80%。
6. 一撃 — 忍ノ破片詳細
   - https://1geki.jp/slot/s_shinobi_akatuki/44/
   - 1000pt MAX、累積ポイント示唆。
7. すろぱちくえすと — 忍魂3 暁ノ章
   - https://www.slopachi-quest.com/article/shinobidamashii3/
   - 33G/50枚、設定別BIG/REG/ART、通常/完全攻略機械割、設定変更/据え置き比較表。
8. グリーンべると — 人気を博した初代「忍魂」を完全踏襲（2017-04-17）
   - https://web-greenbelt.jp/00009505/
   - 大都技研、プレス試打会、BB203枚/RB56枚、ART純増1.1枚/G、納品5月7日開始。
9. スロット解析情報~すろかい~ — 忍魂3 暁の章 解析情報
   - https://slotkaiseki.hatenablog.com/entry/sinobitamasiiakatuki
   - 型式忍魂暁ノ章/A2、2017-05-08、約33G/50枚、A+ART。
10. 愛品館 — 忍魂 ～暁ノ章～ 実機
   - https://www.aihin.co.jp/new/news-1007837/
   - 型式忍魂暁ノ章／A2の後年実機確認。
11. note 所有実機一覧
   - https://note.com/famous_spirea792/n/n98a6e53ba495
   - 検定番号6S0645、型式忍魂暁ノ章／A2。検定番号は単一後年資料として限定採用。
