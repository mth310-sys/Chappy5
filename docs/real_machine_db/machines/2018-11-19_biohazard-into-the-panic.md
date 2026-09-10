# No.1244 バイオハザード イントゥザパニック

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: バイオハザード イントゥザパニック
- manufacturer: スパイキー
- releaseDateCanonical: 2018-11-19
- generation: 5号機
- systemType: ノーマルAタイプ / ボーナス+20GベースアップRT状態
- formalModelName: `バイオイントゥザパニック／ZA`
- certificationNumber: `8S0023`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、K-Navi、ちょんぼりすた、当時解析で2018-11-19導入が一致。
- confidence: `ANALYSIS_HIGH_EXACT_DATE_CROSSCHECKED`。

## identificationEvidence
- HAZUSE/P-WORLDはメーカーをスパイキー、型式 `バイオイントゥザパニック／ZA`、検定番号 `8S0023` と掲載。
- P-WORLDおよびパチマガスロマガは著作権表示 `©Spiky`、スパイキー機種として掲載。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.3% |
| 2 | 99.8% |
| 3 | 101.6% |
| 4 | 104.5% |
| 5 | 107.4% |
| 6 | 115.3% |

- P-WORLD、ちょんぼりすた、当時解析で一致。

### initialHitBySetting
#### SBB
| 設定 | SBB |
|---:|---:|
| 1 | 1/728.2 |
| 2 | 1/728.2 |
| 3 | 1/728.2 |
| 4 | 1/712.3 |
| 5 | 1/697.2 |
| 6 | 1/655.4 |

#### BB
| 設定 | BB |
|---:|---:|
| 1 | 1/364.1 |
| 2 | 1/352.3 |
| 3 | 1/348.6 |
| 4 | 1/327.7 |
| 5 | 1/321.3 |
| 6 | 1/287.4 |

#### REG
| 設定 | REG |
|---:|---:|
| 1 | 1/390.1 |
| 2 | 1/370.3 |
| 3 | 1/336.1 |
| 4 | 1/307.7 |
| 5 | 1/262.1 |
| 6 | 1/199.8 |

#### BONUS合算
| 設定 | BONUS合算 |
|---:|---:|
| 1 | 1/149.6 |
| 2 | 1/144.7 |
| 3 | 1/138.6 |
| 4 | 1/129.8 |
| 5 | 1/119.6 |
| 6 | 1/99.9 |

- P-WORLD、HAZUSE、ちょんぼりすた、当時解析で照合。

### baseGamesPer50
- canonical: **約35G/50枚**。
- ちょんぼりすたは約35G。別当時解析は約35〜37Gのレンジ表記。
- `SOURCE_RANGE_DIFFERENCE_APPROX_35_VS_35_TO_37` として注記するが、矛盾ではなく丸め/設定差を含む可能性のある表現差として扱う。

### netIncrease
- `NOT_APPLICABLE_AS_AT_ART_NET_INCREASE`。
- SBB/BB後20Gはリプレイ確率が上がるベースアップゾーン「非常通路」。通常時比でコイン持ち約3倍との資料あり。

### basicPayout
- SBB: **最大310枚**。
- BB: **最大232枚**。
- REG: **最大102枚**。
- 技術介入1回成功で最大枚数取得可能。

### ceiling
- **天井非搭載**。

## modeSpecificMinimumData
- 主に特殊リプレイから5Gのパニックゾーンへ。ボーナス期待度約33%。
- パチマガスロマガは通常時について「モードや状態の概念は一切なし」と整理。
- SBB/BB後のみ20Gのベースアップゾーン「非常通路」へ移行。

## resetBehavior
### settingChangeBehavior
- `CONFIRMED`。
- RT状態リセット。
- PZ/心音演出など前兆状態をリセット。
- ベースアップゾーンはリセット。
- 液晶ステージは再抽選。

### carryOverBehavior
- `PARTIAL_CONFIRMED`。
- 据え置きで前日がベースアップゾーン中なら、内部的にベースアップ状態を引き継ぐとの解析あり。
- 朝一20G以内に非同時当選のチャンスリプレイ成立やリプレイ頻出なら据え置き推測材料。
- 据え置きを純電断から独立させた通常RT/PZ/演出状態すべての契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- `CONFIRMED_PARTIAL`。
- 純電源OFF→ONではRT状態を引き継ぐ。
- 液晶ステージは設定変更時と同じ比率で再抽選。
- ベースアップゾーン「非常通路」中の電断では内部状態のみ引き継ぐ。
- PZ/心音演出など画面上の前兆表示の純電断時詳細は、設定変更時ほど明確な直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。
- 固定G数天井カウンタなし。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- リセット専用天井短縮なし。

### modeAfterReset
- 通常時の恒常モード概念は `NONE` とする当時解析あり。
- 設定変更/電源OFF→ONの液晶初期ステージは共通再抽選。

### stateAfterReset
- 設定変更: RT/ベースアップ状態をリセット。
- 純電断: RT状態を引継ぎ。非常通路中は内部ベースアップ状態を引継ぎ。
- 通常時にAT系の高低内部状態はなし。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_NORMAL_MACHINE`。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット専用天井短縮、初当たり優遇、朝一専用モードは確認なし。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `PARTIAL_CONFIRMED`。
- 液晶ステージは設定変更/純電断の双方で同じ比率に再抽選されるため単独判別不可。
- 据え置きで前日非常通路中なら内部状態を引き継ぐため、朝一20G以内のリプレイ挙動が据え置き推測材料になり得る。
- ガックンは当時資料でも「調査中」。表記揺れ/型式/メーカー/設定変更/リセット/据え置き/電源OFF ON/ガックン等へ検索を変えたが確定条件・発生率は固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- stageAfterSettingChangeOrPowerCycle:
  - 研究施設: **50%**
  - アジト地下室: **25%**
  - テラグリジア: **25%**
- conventionalCeiling: **NONE**
- resetCeilingShortening: **N/A**
- resetModeDistribution: `NONE_APPLICABLE_NORMAL_MODE_CONCEPT`
- morningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- reelGakkunRate: `UNVERIFIED_AFTER_RESEARCH`

## conflictsAndQualityNotes
- manufacturer表記はHAZUSE/P-WORLD/パチマガスロマガ/当時資料が **スパイキー** で一致する一方、ちょんぼりすたの機種概要欄に **エンターライズ** 表記あり。型式・著作権表示・複数資料一致を優先しcanonicalはスパイキー。`CONFLICT_MANUFACTURER_SPIKY_VS_ENTERRISE_SINGLE_SECONDARY_METADATA` を保持。
- baseGamesPer50は約35Gと約35〜37Gの資料差。設定差/丸めを含む可能性があるため平均化せずcanonical約35G、別表現を品質注記として保持。

## missingFields
- 据え置きを純電断から完全に独立させた通常RT/PZ/演出状態の全契約。
- 純電断時のPZ/心音演出等の画面前兆状態の確定契約。
- 本機固有ガックンの発生条件・発生率。

## sources
取得日: 2026-09-10

1. HAZUSE — https://hazuse.com/machine/pachislot/8S0023/ — 型式 `バイオイントゥザパニック／ZA`、検定 `8S0023`、メーカー スパイキー、2018-11-19、設定別ボーナス確率 — reliability: ANALYSIS_HIGH_DATABASE
2. P-WORLD — https://www.p-world.co.jp/machine/database/8809 — スパイキー、5号機ノーマル、型式/検定番号、機械割98.3〜115.3%、設定別SBB/BB/RB、最大310/232/102枚 — reliability: INDUSTRY_DATABASE
3. ちょんぼりすた — https://chonborista.com/slot/enta-slot/65096/ — 2018-11-19、約35G/50枚、機械割/ボーナス確率、天井非搭載、設定変更/電源OFF ON/朝一ステージ、据え置き推測 — reliability: ANALYSIS_HIGH
4. 一撃 天井/設定変更 — https://1geki.jp/slot/s_bio_panic/3/ — 天井非搭載、設定変更/電源OFF ON時ステージ振り分け、非常通路中電断の内部状態引継ぎ — reliability: OLD_ANALYSIS_HIGH
5. すろぱちくえすと — https://www.slopachi-quest.com/article/biohazard-intothepanic/ — 天井非搭載、設定変更時RTリセット/電断時引継ぎ、朝一ステージ50/25/25、ガックン調査中 — reliability: ANALYSIS_SECONDARY
6. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/13/a.php — スパイキー2018年11月、ノーマル、SBB約310/BB約232/REG約102枚 — reliability: ANALYSIS_HIGH_ARCHIVE
7. パチマガスロマガ ゲーム性 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/13/l.php — 通常時モード/状態概念なし、PZ 5G、SBB/BB後20Gベースアップゾーン — reliability: ANALYSIS_HIGH_ARCHIVE
8. Amusement Japan — https://amusement-japan.co.jp/article/detail/10000821/ — 当時業界記事、SBB最大310/BB最大232/RB最大102枚、PZ・ベースアップゾーン概要、©Spiky — reliability: CONTEMPORARY_INDUSTRY
9. 元プロMGのパチスロブログ — https://www.pachislotblog.tokyo/biohazard-into-the-panic-kaiseki/ — スパイキー、2018-11-19、約35〜37G/50枚、機械割/ボーナス確率、天井非搭載 — reliability: ANALYSIS_SECONDARY
