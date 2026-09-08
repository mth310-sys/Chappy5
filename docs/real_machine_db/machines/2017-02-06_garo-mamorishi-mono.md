machineName: パチスロ牙狼-守りし者-
manufacturer: サミー（開発製造） / サンセイR&D（販売・共同展開）
releaseDate: 2017-02-06
recordNumber: 1044
generation: 5号機 / 5.5号機期
systemType: A+ART / CZ搭載
formalModelName: 牙狼 守りし者/ZX
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_POWER_STATE_PARTIAL

## identity
- K-Navi、一撃、当時解析、後年DBでホール導入日2017-02-06が一致。
- 当時解析および流通実機資料で型式 `牙狼 守りし者/ZX` を確認。
- 日刊ゲンダイの発表会記事ではサンセイR&Dが販売、サミーが開発製造と説明。
- 検定番号は機種名/型式/ZX/サミー/サンセイ/6S系/検定を組み替えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_FOR_IDENTITY; UNVERIFIED_FOR_CERTIFICATION_NUMBER

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.0% |
| 3 | 100.6% |
| 4 | 104.0% |
| 5 | 108.0% |
| 6 | 112.7% |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ボーナス合算
| 設定 | ボーナス |
|---:|---:|
| 1 | 1/399.6 |
| 2 | 1/358.1 |
| 3 | 1/387.8 |
| 4 | 1/336.1 |
| 5 | 1/336.1 |
| 6 | 1/309.1 |

### ART「魔戒CHANCE」初当たり
| 設定 | ART |
|---:|---:|
| 1 | 1/526.1 |
| 2 | 1/524.5 |
| 3 | 1/483.4 |
| 4 | 1/445.1 |
| 5 | 1/404.5 |
| 6 | 1/365.5 |

### CZ「桜幻ノ舞」初当たり
| 設定 | CZ |
|---:|---:|
| 1 | 1/213.4 |
| 2 | 1/219.4 |
| 3 | 1/186.2 |
| 4 | 1/167.7 |
| 5 | 1/145.5 |
| 6 | 1/126.5 |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約33G / 50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「魔戒CHANCE」: 約1.5枚/G。
- ボーナス込み実効表記: 約1.8枚/G。
- 定義を分離して保持する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 牙狼BIG / 呀BIG: 約157枚。
- REG: 約56枚。
- ART「魔戒CHANCE」: 1セット50G+α。
reliability: DATABASE_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常天井: ボーナスおよびART間999G消化で、最大32G前兆後にART当選。
- 設定変更後のみ天井666Gへ短縮。
- ARTは牙狼魂を用いた継続バトル型。詳細抽選はSCOPE_EXCLUDED。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_CORE_RESET_WITH_POWER_STATE_PARTIAL
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数はRESETされ、通常999Gから設定変更後のみ666Gへ短縮。
- 内部状態は再抽選。
- 一撃解析の公開振り分けは、低確25.0% / 通常25.0% / 高確25.0% / 連舞ショート25.0%。
- 液晶開始ステージは資料差があり、一撃は調査中、パチマガスロマガは紅蓮の森としているため、後者を単独直接資料として保持しつつ強断定しない。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_STATE_RESELECT; ANALYSIS_SINGLE_FOR_STAGE

### carryOverBehavior
- 据え置き時は通常の天井進捗を継続するものとして扱う。設定変更後専用666G短縮は適用されない。
- 長期状態の据え置き直接比較は純電源OFF→ON資料と整合するが、据え置き専用の全状態契約を独立に列挙した資料は限定的。
reliability: ANALYSIS_HIGH_FOR_CEILING_CARRYOVER; ANALYSIS_SINGLE_FOR_STATE_SCOPE

### powerCycleBehavior
- 純電源OFF→ON: 天井ゲーム数を引き継ぐ。
- パチマガスロマガは状態も引き継ぐと明記。一撃の2017-03-03時点では状態・液晶ステージを「現在調査中」としており、時点差を保持する。
- 液晶ステージはパチマガスロマガで紅蓮の森。一撃初期資料は調査中。
reliability: ANALYSIS_HIGH_FOR_GAME_COUNT; CONFLICT_TEMPORAL_EVIDENCE_FOR_STATE_DETAIL

### gameCounterReset
- 設定変更: `RESET_TO_RESET_SPEC_CEILING_666G`。
- 据え置き / 純電源OFF→ON: `CARRYOVER`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 通常: ボーナス&ART間999G + 最大32G前兆。
- 設定変更後: **666G + 前兆**へ短縮。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 朝一専用の通常A/B等ゲーム数モードは確認していない。
- 設定変更時は内部状態を再抽選し、低確/通常/高確/連舞ショートが各25.0%。
reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時: 低確25.0% / 通常25.0% / 高確25.0% / 連舞ショート25.0%。
- 高確または連舞ショート開始という朝一優遇が合計50.0%存在するが、両状態を同一効果として扱わない。
- 純電源OFF→ONの状態は後発パチマガスロマガが引継ぎと明記。初期一撃資料は調査中のため資料時点差を注記。
reliability: ANALYSIS_HIGH_FOR_RESET_DISTRIBUTION; ANALYSIS_SINGLE_LATER_FOR_POWER_STATE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 最大天井が999Gから666Gへ333G短縮。
- 設定変更時、高確25.0%・連舞ショート25.0%を含む状態再抽選。
- リセット確定時の朝一狙い価値が公開攻略資料で明確に扱われる。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 前日999G天井への進捗は設定変更で消失するため、深い前日ハマリ台では宵越し価値を失う。ただしリセット後天井自体は666Gへ短縮。
reliability: DERIVED_DIRECTLY_FROM_VERIFIED_RESET_CONTRACT

### resetDetection
- サミー筐体の朝一1G目ガックンを設定変更推測要素として当時攻略資料が動画付きで紹介。
- ただし `ガックンしない = 据え置き` とは断定できず、個体差・対策可能性があるため `POSSIBLE_RESET_INDICATOR_NOT_DETERMINISTIC`。
- 前日ハマリG数が把握できる場合、666G付近でのART天井発動は設定変更推測材料になり得る。
reliability: ANALYSIS_HIGH_FOR_INDICATOR_EXISTENCE; NON_DETERMINISTIC

### numericResetData
- reset ceiling: **666G**（通常999Gから333G短縮）。
- setting-change state distribution: **低確25.0% / 通常25.0% / 高確25.0% / 連舞ショート25.0%**。
- 高確+連舞ショート単純合算: **50.0%**（状態定義は別物のため合算値は参考値）。
- 朝一特定G以内の実ART当選率: `UNVERIFIED_AFTER_RESEARCH`。天井短縮や状態配分を実当選率へ変換しない。

## dataQualityNotes
- 一撃、パチマガスロマガ、K-Navi、P-WORLD、当時解析、後年DBを横断。
- 性能コアは複数解析で主要値一致。
- resetBehaviorは設定変更と純電断を明確に分離。純電断状態について初期一撃資料「調査中」と後発パチマガスロマガ「引き継ぐ」の時点差を平均・混同しない。
- 検定番号は十分な再探索後も直接固定できずUNVERIFIED。

## conflicts
- powerCycle state evidence: `TEMPORAL_SOURCE_DIFFERENCE_ICHIGEKI_2017_INVESTIGATING_VS_PACHIMAGA_CARRYOVER`。後発資料をcanonical補助とするが初期不確定記録も保持。
- liquid stage after reset/power-cycle: `TEMPORAL_SOURCE_DIFFERENCE_ICHIGEKI_INVESTIGATING_VS_PACHIMAGA_GUREN_NO_MORI`。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。
- direct public morning ART-hit probability within fixed G window: `UNVERIFIED_AFTER_RESEARCH`。
- 実機完全再現用詳細抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- ANALYSIS / 一撃 天井・設定変更: https://1geki.jp/slot/s_garo_mamorishimono/3/
- ANALYSIS / パチマガスロマガ 朝イチ・設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/155/rs.php
- ANALYSIS / パチマガスロマガ 天井・ヤメ時: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/155/tj.php
- DATABASE / K-Navi: https://p-kn.com/slot/2686/
- DATABASE / P-WORLD: https://www.p-world.co.jp/machine/database/8226
- ANALYSIS / すろかい: https://slotkaiseki.hatenablog.com/entry/garo
- ANALYSIS / すろぱちくえすと 朝一リセット: https://www.slopachi-quest.com/article/garo-mamorishimono-reset/
- ANALYSIS / 期待値見える化: https://slotjin.com/tenjoukitaichi/garo/
- INDUSTRY / 日刊ゲンダイ発表会記事: https://www.nikkan-gendai.com/articles/view/pr/195690
- RETAIL_REFERENCE / 中一商事 型式確認: https://www.nakaiti.com/html/sSammy188.html

## retrievalHistory
- performance: 機種名 + 機械割 / ボーナス / ART / CZ / 50枚 / 純増 / 獲得枚数。
- reset: 機種名 + 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / 状態 / ガックン。
- identity: 牙狼 守りし者/ZX + 型式 / 検定番号 / 6S / サミー / サンセイR&D。
- 公式・業界、当時解析、古いDB、後年整理資料を横断し、直接固定できない検定番号のみUNVERIFIEDとした。