machineName: パチスロ ソウルキャリバー
manufacturer: 山佐
releaseDate: 2017-01-30
recordNumber: 1042
generation: 5号機 / 5.5号機期
systemType: A+ART / CZ+ゲーム数上乗せART
formalModelName: パチスロソウルキャリバー/HH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 山佐公式製品ページは稼働時期を2017年1月、仕様を5号機A+ARTと明記。
- 4Gamer掲載の山佐発表文は2017-01-30のアプリ配信を「ホールデビューに合わせて」と明記し、当時解析も2017-01-30導入で一致。
- 市場実機資料で型式名 `パチスロソウルキャリバー/HH` を確認。初期解析には `/FF` 表記も残るが、同資料自身がHH検定通過・最終スペック変更可能性を記しており、実機市場資料のHHをcanonicalとした。
- 検定番号は「ソウルキャリバー/HH / FF / 山佐 / 6S / 検定番号 / 検定通過」を組み替え、当時解析・中古実機DB等を横断したが直接固定できず推測しない。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH_FOR_IDENTITY; MODEL_NAME_DATABASE; CERTIFICATION_UNVERIFIED

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | CONFLICT: 97.6% / 97.2% |
| 2 | 98.5% |
| 3 | 100.2% |
| 4 | 105.7% |
| 5 | 110.8% |
| 6 | 116.2% |

- ちょんぼりすた、5号機クロニクル等は設定1=97.6%。すろぱちくえすと、別当時解析は97.2%。設定2〜6は一致。
- 差を平均せず設定1のみ `CONFLICT_97_6_VS_97_2` として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING1_CONFLICT

## initialHitBySetting
### BIG BONUS
| 設定 | BIG |
|---:|---:|
| 1 | 1/381.02 |
| 2 | 1/381.02 |
| 3 | 1/381.02 |
| 4 | 1/364.09 |
| 5 | 1/356.17 |
| 6 | 1/341.33 |

### REG BONUS
| 設定 | REG |
|---:|---:|
| 1 | 1/589.79 |
| 2 | 1/579.37 |
| 3 | 1/569.50 |
| 4 | 1/508.17 |
| 5 | 1/492.87 |
| 6 | 1/465.17 |

### ART「ソウルディメンション」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/369.40 |
| 2 | 1/358.49 |
| 3 | 1/332.47 |
| 4 | 1/273.76 |
| 5 | 1/211.18 |
| 6 | 1/163.73 |

- ボーナス合算は約1/229.95 / 228.35 / 226.77 / 210.73 / 205.44 / 195.63。
- プレミアのアルゴルボーナスは約1/34807.65〜1/31011.38。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約34G / 50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ソウルディメンション」: 約1.5枚/G。
reliability: OFFICIAL_DESCRIPTION_PLUS_DATABASE_HIGH

## basicPayout
- ソウルボーナス: 約157枚。
- REGULAR BONUS: 約53枚。
- ALGOL BONUS: 約53枚。
- P-WORLDはソウルボーナスを239枚超払出終了・実獲得約157枚、REG/ALGOLを80枚超払出終了・実獲得約53枚と明記。
- ART「ソウルディメンション」: 1セット50G+α、ゲーム数上乗せ型。
reliability: DATABASE_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井はボーナス間777G / 999G / 1111Gの振り分け。解析値は約33.59% / 33.59% / 32.81%（丸め資料では33.6/33.6/33.8）。最大1111G到達で前兆を経てART。
- ARTを途中で挟んでもボーナス非当選なら天井ゲーム数はリセットされない。
- CZはナイトメアバトル / Ωモード / ジャストジャッジメントの3系統。
- 実機完全再現用の全周期レベル・全CZ内部抽選はSCOPE_EXCLUDED。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_RESET_NUMERIC_DATA_WITH_POWER_CYCLE_UNVERIFIED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時はボーナス間天井進捗をRESETし、天井選択は777G固定。
- 内部状態を再抽選。
- 朝一の内部状態は低確50.0%、高確A31.25%、高確B12.50%、高確C6.25%。高確以上合計50.0%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_NUMERIC

### carryOverBehavior
- 本機固有の「据え置き」直接比較表として天井・内部状態・規定ソウル等を一括固定できる独立資料は今回取得できず、一般挙動から推測しない。
- `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 当時解析の朝一比較表では電源ON・OFF時の天井・内部状態・ステージはいずれも「調査中」とされる。
- 後年資料まで検索語を変えて再探索したが、本機固有の純電源OFF→ON契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 設定変更: RESETし、設定変更後天井777Gへ再セット。
- 据え置き: `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE

### ceilingAfterReset
- 通常: ボーナス間777G / 999G / 1111Gをほぼ1/3ずつ。
- 設定変更後: **777G 100%**。999G / 1111Gは選択されない。
- よって最大天井は1111G→777Gへ短縮。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_NUMERIC

### modeAfterReset
- 通常時には規定ソウル/周期レベル等の管理要素があるが、設定変更専用の独立した「朝一モードA/B」等は今回確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時の規定ソウル振り分けとして、設定1〜6で50/100/150ソウルの公開表があるが、通常時表と同系列であり「リセット専用差分」と断定しない。完全再現用の周期詳細はSCOPE_EXCLUDED。
reliability: ANALYSIS_HIGH_FOR_NO_SEPARATE_RESET_MODE_CONFIRMED

### stateAfterReset
- 設定変更時は内部状態RESELECT。
- 公開振り分け: 低確50.00% / 高確A31.25% / 高確B12.50% / 高確C6.25%。
- 高確以上50.0%。
- 高確開始時のゲーム数振り分け: 20G 50.0% / 30G 31.25% / 50G 12.5% / 100G 6.25%、平均約31.88G。
- 据え置き/純電断時の内部状態は直接固定できずUNVERIFIED。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_NUMERIC

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更後は天井777G固定で、通常最大1111Gから明確な短縮。
- 設定変更後は50.0%で高確以上スタート。
- 高確状態では払出しに対するソウル獲得倍率が上がるため、朝一のCZ接近に寄与する公開マクロ恩恵として記録。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 前日の天井進捗は設定変更でリセットされるため、宵越し天井狙い価値は失われる。
- その他の設定変更専用不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_COUNTER_RESET

### resetDetection
- 777Gを超えてボーナス非当選のまま通常遊技が継続した場合、設定変更後777G固定という公開仕様と矛盾するため、当時解析では据え置き判断材料とされる。
- ガックンについては「山佐なので可能性が高い」という一般論ベースの攻略記述はあるが、本機固有の設定変更/純電断比較を直接確認できないため `GACKUN_UNVERIFIED_MACHINE_SPECIFIC`。確定判別材料にはしない。
- 朝一ステージ契約も `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_777G_BEHAVIOR; UNVERIFIED_FOR_GACKUN

### numericResetData
- 設定変更後天井: 777G 100%。
- 通常天井: 777G 33.59% / 999G 33.59% / 1111G 32.81%（資料丸め差あり）。
- 設定変更時状態: 低確50.00% / 高確A31.25% / 高確B12.50% / 高確C6.25%。
- 高確以上開始率: 50.0%。
- 高確G数: 20G 50.0% / 30G 31.25% / 50G 12.5% / 100G 6.25%、平均31.88G。

## dataQualityNotes
- 公式製品ページで5号機A+ART・2017年1月稼働を確認し、4Gamerの山佐発表転載と当時解析で2017-01-30ホールデビューを固定。
- 型式は実機市場資料の `/HH` をcanonical。初期 `/FF` 記述は最終実機との混同回避のため注記保持。
- 設定1機械割は97.6%と97.2%が複数資料で競合するため平均化しない。
- ボーナス獲得枚数はP-WORLD、すろぱちくえすと、実機市場資料で157/53/53枚が一致。
- resetBehaviorは設定変更後777G固定、高確以上50%および状態振り分けを複数攻略資料で照合。純電源OFF→ONと据え置きの本機固有直接契約は欠損のまま推測しない。

## conflicts
- payoutRate setting1: `CONFLICT_97_6_PERCENT_VS_97_2_PERCENT`。
- formalModelName early material: `/FF` vs deployed-market `/HH`; canonical `/HH`、初期資料差として保持。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior direct machine-specific contract: `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific gakkun contract: `UNVERIFIED_AFTER_RESEARCH`。
- morning start-stage contract: `UNVERIFIED_AFTER_RESEARCH`。
- 実機完全再現用の詳細抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL / 山佐ネクスト機種情報: https://yamasa-next.co.jp/model_sc/
- INDUSTRY / 4Gamer 山佐発表転載（2017-01-30）: https://www.4gamer.net/games/370/G037006/20170130057/
- DATABASE / P-WORLD: https://www.p-world.co.jp/machine/database/8242
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/29992/
- ANALYSIS / 期待値見える化: https://slotjin.com/zone/soulcalibur/
- ANALYSIS / すろぱちくえすと機種解析: https://www.slopachi-quest.com/kisyubetsu/soul-calibur/
- ANALYSIS / すろぱちくえすと設定解析: https://www.slopachi-quest.com/article/soul-calibur-settei/
- RETROSPECTIVE_DATABASE / 5号機クロニクル 山佐一覧: https://5goki.com/yamasa
- MARKET_DATABASE / 中古実機資料（型式HH）: https://item.rakuten.co.jp/auc-nakaiti/souru/
- ANALYSIS_ARCHIVE / すろかい（FF/HH表記差）: https://slotkaiseki.hatenablog.com/entry/soulcalibur
