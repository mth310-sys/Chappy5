machineName: JAWS ～it's a SHARK PANIC～
manufacturer: オリンピア
releaseDate: 2017-02-06
recordNumber: 1045
generation: 5号機 / 5.5号機期
systemType: A+ART / 周期CZ搭載
formalModelName: JAWS/J5
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- P-WORLD、期待値見える化、ちょんぼりすた等で2017-02-06導入を確認。
- 流通実機資料で型式 `JAWS/J5` を確認。
- 検定番号は機種名/型式/J5/オリンピア/検定番号等で再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: DATABASE_PLUS_ANALYSIS_HIGH_FOR_RELEASE; RETAIL_REFERENCE_FOR_FORMAL_MODEL; UNVERIFIED_FOR_CERTIFICATION_NUMBER

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.5% |
| 3 | 100.2% |
| 4 | 104.3% |
| 5 | 107.0% |
| 6 | 112.1% |

reliability: DATABASE_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ボーナス合算
| 設定 | ボーナス |
|---:|---:|
| 1 | 1/119.2 |
| 2 | 1/117.0 |
| 3 | 1/114.6 |
| 4 | 1/110.3 |
| 5 | 1/109.6 |
| 6 | 1/99.9 |

### ART初当たり
| 設定 | ART |
|---:|---:|
| 1 | 1/445.3 |
| 2 | 1/389.4 |
| 3 | 1/429.5 |
| 4 | 1/342.4 |
| 5 | 1/343.9 |
| 6 | 1/247.7 |

reliability: DATABASE_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約31G / 50枚。
reliability: ANALYSIS_HIGH

## netIncrease
- ART「JAWS PANIC」/「無敵ART」: ボーナス込み約1.9枚/G。
- 1セット50G。無敵ARTは平均継続率80%以上、最大約92%。
reliability: INDUSTRY_PLUS_DATABASE_HIGH

## basicPayout
- PERFECT BONUS / VICTORY BONUS: 約204枚。
- JAWS襲来(REG): 約48枚。
- ART: 1セット50G。
reliability: DATABASE_PLUS_INDUSTRY_HIGH

## modeSpecificMinimumData
- 周期CZ「パニックゾーン」は通常時約255Gごと。3周期目到達（約765G）でART当選となるゲーム数系天井。
- REG/CZのART非当選回数に応じるスルー天井を持ち、通常モードA～Eは最大10回、モードEは最大3回、設定変更時のみ選択されるモードFは最大7回。
- 実機完全再現用の詳細小役・内部抽選はSCOPE_EXCLUDED。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_BEHAVIOR_V0_7
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井周期数はRESET。
- 周期間ゲーム数（次周期までの進捗G数）はCARRYOVER。
- スルー天井の規定回数は再抽選。
- 内部モードは再抽選し、設定1～6共通でモードE 10.2% / 設定変更専用モードF 89.8%。
- 内部状態は再抽選。
- 開始ステージは昼 or 海底。
reliability: CONTEMPORARY_ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置きでは周期数、周期間G数、スルー天井規定回数、内部モード、内部状態の進捗・状態を継続する扱い。
- 設定変更専用モードFへの再抽選は発生しない。
reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは、天井周期数・周期間G数・スルー天井規定回数・内部モード・内部状態をCARRYOVER。
reliability: CONTEMPORARY_ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 周期数 `RESET` / 周期間G数 `CARRYOVER`。
- 据え置き・純電源OFF→ON: `CARRYOVER`。
reliability: CONTEMPORARY_ANALYSIS_HIGH

### ceilingAfterReset
- ゲーム数系: 設定変更後も3周期目（1周期約255G）でART当選。周期数はリセットされるが、周期間G数は引き継ぐため、単純な朝一765G固定天井とは扱わない。
- スルー回数系: 設定変更後はモードE 10.2%（最大3回）/ モードF 89.8%（最大7回）となり、通常最大10回より短縮方向。
reliability: CONTEMPORARY_ANALYSIS_HIGH

### modeAfterReset
- モードE: 10.2%。最大3回、50%ループの上位モード。
- モードF: 89.8%。設定変更後のみ選択、最大7回。
reliability: CONTEMPORARY_ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset
| 設定 | 通常 | 高確A | 高確B |
|---:|---:|---:|---:|
| 1 | 87.5% | 12.1% | 0.4% |
| 2 | 68.7% | 25.0% | 6.3% |
| 3 | 87.5% | 12.1% | 0.4% |
| 4 | 65.6% | 25.0% | 9.4% |
| 5 | 68.7% | 25.0% | 6.2% |
| 6 | 50.0% | 25.0% | 25.0% |
reliability: CONTEMPORARY_ANALYSIS_HIGH

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- スルー天井モードがモードE/Fに限定され、最大スルー回数が通常最大10回から最大7回へ短縮。
- 10.2%で最大3回のモードEへ。
- 高設定では設定変更後の高確A/B振り分けも強く、設定6は高確A25.0% + 高確B25.0%。
reliability: DIRECTLY_DERIVED_FROM_VERIFIED_RESET_DISTRIBUTIONS

### resetPenalties
- 設定変更で前日の天井周期数とスルー天井規定回数進捗は失われる。
- ただし周期間G数は引き継ぐため、周期途中のゲーム数進捗まで消えるとはしない。
reliability: DIRECTLY_DERIVED_FROM_VERIFIED_RESET_CONTRACT

### resetDetection
- ガックン判別は不可と当時攻略資料に明記。
- 朝一ステージは昼 or 海底で、単独では設定変更確定判別に用いない。
- 周期間G数が設定変更でも引き継がれるため、朝一の周期CZ到達ゲーム数だけではリセット/据え置きを判別できない。
reliability: CONTEMPORARY_ANALYSIS_HIGH

### numericResetData
- setting-change mode distribution: モードE **10.2%** / モードF **89.8%**。
- setting-change state distribution: 設定別に通常/高確A/高確Bを上表の通り。
- reset game-count ceiling: 3周期目到達だが周期内G数CARRYOVERのため `NOT_A_FIXED_765G_FROM_POWER_ON`。
- fixed-window morning ART hit probability: `UNVERIFIED_AFTER_RESEARCH`。

## dataQualityNotes
- P-WORLD、グリーンべると、当時攻略/解析、後年整理資料を横断し主要性能値を照合。
- resetBehaviorは設定変更と純電断を分離し、周期数RESETと周期内G数CARRYOVERを混同しない。
- モードE/F振り分け、設定変更後状態振り分け、純電断引継ぎは当時解析で固定。
- 検定番号のみ十分な再探索後も直接固定できずUNVERIFIED。

## conflicts
- 5号機クロニクルにはART純増約1.5枚/G表記がある一方、P-WORLD・グリーンべると・当時攻略はボーナス込み約1.9枚/G。定義差の可能性が高いため、canonicalは明示的に「ボーナス込み1.9枚/G」とし、1.5枚/G表記は定義差候補として保持。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。
- fixed-window morning ART-hit probability: `UNVERIFIED_AFTER_RESEARCH`。
- 実機完全再現用詳細抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- DATABASE / P-WORLD: https://www.p-world.co.jp/machine/database/8237
- INDUSTRY / グリーンべると展示会記事: https://web-greenbelt.jp/00009184/
- ANALYSIS / 期待値見える化 朝一・天井・スペック: https://slotjin.com/zone/jaws/
- ANALYSIS / 2-9伝説 モード移行率: https://2-9densetsu.com/jaws-mode/
- ANALYSIS / すろぱちくえすと: https://www.slopachi-quest.com/kisyubetsu/jaws/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/29830/
- ANALYSIS / クランキーセブン: https://crankyseven.com/sp/jaws-pc.htm
- RETROSPECTIVE / 5号機クロニクル: https://5goki.com/heiwa-olympia

## retrievalHistory
- performance: 機種名 + 機械割 / ボーナス / ART初当たり / 50枚 / 純増 / 獲得枚数。
- reset: 機種名 + 設定変更 / リセット / 朝一 / 電源OFF ON / 周期 / スルー回数 / モードE / モードF / 状態 / ガックン。
- identity: JAWS/J5 + オリンピア + 型式 / 検定番号。
- 公式・業界、当時解析、古いDB、後年回顧を横断し、直接固定できない検定番号だけUNVERIFIEDとした。
