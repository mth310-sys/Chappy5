# No.1246 パチスロ マッハGoGoGo

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_UNVERIFIED`
- machineName: パチスロ マッハGoGoGo
- manufacturer: 七匠
- releaseDateCanonical: 2018-12-03
- generation: 5.9号機
- systemType: A+RT / リアルボーナス+CZ+RT / 技術介入
- formalModelName: `パチスロマッハGoGoGo A`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 3 / 6 / Go`
- collectedAt: 2026-09-10

## releaseDateEvidence
- ちょんぼりすた、すろぱちくえすと、パチビーで2018-12-03導入が一致。
- 2018年12月新台一覧でも12/3群として掲載。
- confidence: `ANALYSIS_HIGH_EXACT_DATE_CROSSCHECKED`。

## identificationEvidence
- 七匠公式製品アーカイブに「パチスロ マッハGoGoGo」を掲載し、Aタイプ・400枚BB・設定Goを確認。
- 中古実機DBで型式名 `パチスロマッハGoGoGo A` を確認。
- 検定番号は機種名/型式名/七匠/検定/認定/公示等へ検索語を変更して再探索したが、今回高信頼で固定できず `UNVERIFIED_AFTER_RESEARCH`。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 3 | 99.6% |
| 6 | 108.0% |
| Go | 108.0% |

- ちょんぼりすた、すろぱちくえすとで一致。

### initialHitBySetting
#### BIG合算
| 設定 | BIG合算 |
|---:|---:|
| 1 | 1/343.12 |
| 3 | 1/329.33 |
| 6 | 1/292.57 |
| Go | 1/313.57 |

#### REG合算
| 設定 | REG合算 |
|---:|---:|
| 1 | 1/426.56 |
| 3 | 1/420.10 |
| 6 | 1/337.81 |
| Go | 1/270.81 |

#### BONUS合算
| 設定 | BONUS合算 |
|---:|---:|
| 1 | 1/189.96 |
| 3 | 1/184.61 |
| 6 | 1/156.78 |
| Go | 1/145.31 |

- S-BIG/青BIG/白BIGを含む詳細個別確率も公開されるが、物差し用途ではBIG合算・REG合算・BONUS合算を主要比較値として保持。

### baseGamesPer50
- canonical: **約44G/50枚**。
- すろぱちくえすと解析値。
- 他の主要資料では空欄のものがあり、現時点では単一解析系値として `ANALYSIS_SINGLE`。

### netIncrease
- RT「GO!GO!TIME」: **約0.1枚/G**。
- すろぱちくえすとの比較可能な純増値。
- パチスロブログ系解析では「現状維持程度」と表現され、方向性は整合。

### basicPayout
- SUPER BIG BONUS: **最大400枚**。
- BIG BONUS: **最大257枚**。
- REGULAR BONUS: **最大65枚**。
- 七匠公式は400枚BB搭載を明示。パチビー、P-WORLD、ちょんぼりすた、すろぱちくえすとで各獲得性能を照合。

### ceiling
- **天井非搭載**。
- ちょんぼりすた、すろぱちくえすとで一致。

## modeSpecificMinimumData
- 全BONUS後に5GのRT-CZ「GoGoチャレンジ」へ移行。
- BAR揃いで55GのRT「GO!GO!TIME」へ突入。
- S-BIG/REG後のRT突入期待度は全設定共通約55.5%。
- BIG後は設定1/3/6が約15.0%、設定Goが約55.5%で、設定Goは同じ108.0%出玉率の設定6とゲーム性を差別化する特殊設定。
- RTは55G固定。純増は約0.1枚/G（別資料表現: 現状維持程度）。
- 技術介入: S-BIG/BIGで14枚役を3回獲得するビタ押し手順が最大獲得枚数に関与。

## resetBehavior
### settingChangeBehavior
- `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすた本機専用朝一表では設定変更時の「RT状態」「ステージ」とも **調査中**。
- 機種名/型式名/七匠/設定変更/リセット/朝一/据え置き/電源OFF ON/RT/CZ/ガックン/有利区間へ検索語を変え、公式・解析・古いDB・回顧資料を横断したが、本機固有の確定契約を固定できず。

### carryOverBehavior
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 据え置き時のRT/CZ状態、液晶状態を純電断と独立して明示した本機固有資料を確認できず。

### powerCycleBehavior
- `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすた本機専用朝一表では電源OFF→ON時の「RT状態」「ステージ」とも **調査中**。

### gameCounterReset
- `NOT_APPLICABLE_NO_CONVENTIONAL_CEILING_COUNTER`。
- 通常G数天井を搭載しないため、天井ゲーム数カウンタのリセット/引継ぎはN/A。
- ボーナス後CZ/RT中に設定変更または純電断した場合の残G・RT状態処理は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- リセット専用短縮天井なし。

### modeAfterReset
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時のゲーム数解除モード/朝一専用モードに相当する公開仕様は確認できず。

### stateAfterReset
- `UNVERIFIED_AFTER_RESEARCH`。
- RT/CZ内部状態の設定変更・据え置き・純電断時契約は固定できず。

### advantageousSectionReset
- `UNVERIFIED_AFTER_RESEARCH_OR_NOT_APPLICABLE_TO_THIS_A_PLUS_RT_IMPLEMENTATION`。
- 5.9号機だが、本機がホール朝一判別に関係する有利区間状態を使用すること、および設定変更/純電断時の本機固有契約を示す直接資料を固定できず。世代一般論から補完しない。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用の短縮天井、朝一専用モード、ボーナス/RT優遇率等の公開恩恵は確認できず。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `UNVERIFIED_AFTER_RESEARCH`。
- ガックン、初期出目、液晶ステージ、RT/CZ表示等を用いた本機固有の設定変更判別条件・発生率は固定できず。
- 設定Go自体は通常遊技中のマッハGoチャージ発生率やBIG後RT突入率から判別しやすいが、これは朝一リセット判別ではないため別扱い。

### numericResetData
- conventionalCeiling: **NONE**
- resetCeilingShortening: **N/A**
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- morningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- reelGakkunRate: `UNVERIFIED_AFTER_RESEARCH`
- advantageousSectionResetRate: `UNVERIFIED_AFTER_RESEARCH`

## conflictsAndQualityNotes
- BONUS合算は資料により設定1を `1/190.0` と丸める表記があるが、精密値 `1/189.96` と丸め整合するためCONFLICTではない。
- RT純増は「約0.1枚/G」と「現状維持程度」の表現差で、方向性が整合するため定義注記として保持。
- 設定6と設定Goは機械割108.0%で同値だが、BIG後RT突入率・マッハGoチャージ発生率などゲーム性が大きく異なる。平均・統合しない。

## missingFields
- certificationNumber。
- 設定変更時のRT/CZ/液晶状態契約。
- 据え置きを純電断と独立して示す状態契約。
- 純電源OFF→ON時のRT/CZ/液晶状態契約。
- 本機固有の有利区間利用有無と朝一リセット契約。
- ガックン等の朝一変更判別条件・発生率。
- 設定変更専用の公開朝一数値。

## sources
取得日: 2026-09-10

1. 七匠 公式製品アーカイブ — https://www.nanashow.co.jp/product/ — 「パチスロ マッハGoGoGo」、Aタイプ、400枚BB、設定Go — reliability: OFFICIAL
2. パチビー — https://www.pachibee.jp/machines/about/218100012 — 2018-12-03、七匠、5.9号機RT、SBB最大400枚/BIG最大257枚/REG最大65枚、CZ、RT55G — reliability: INDUSTRY_DATABASE
3. P-WORLD — https://www.p-world.co.jp/machine/database/8786 — 七匠、RT/CZ/技術介入、基本獲得枚数、RT55G — reliability: INDUSTRY_DATABASE
4. ちょんぼりすた — https://chonborista.com/slot/nanashow/67215/ — 2018-12-03、設定別機械割/ボーナス確率、天井非搭載、朝一設定変更/電源OFF ON表（RT状態・ステージ調査中） — reliability: ANALYSIS_HIGH
5. すろぱちくえすと 機種解析 — https://www.slopachi-quest.com/article/mach-gogogo/ — 2018-12-03、約44G/50枚、RT約0.1枚/G、設定別ボーナス確率/機械割、天井非搭載 — reliability: ANALYSIS_HIGH
6. すろぱちくえすと 2018年12月新台一覧 — https://www.slopachi-quest.com/article/erunote-12-shindai/ — 12/3群としてマッハGoGoGo / スーパーリノXX / ドリームクルーン711 / 巨人の星情熱編を掲載 — reliability: CONTEMPORARY_ANALYSIS_CALENDAR
7. 中一商事 中古実機DB — https://www.nakaiti.com/html/sNanashow009.html — 型式名 `パチスロマッハGoGoGo A`、RT、基本獲得枚数 — reliability: SECONDARY_MACHINE_DATABASE
8. 元プロMG パチスロブログ — https://www.pachislotblog.tokyo/mach-gogogo-kaiseki/ — A+RT、RT55G、純増現状維持程度、各BONUS獲得枚数 — reliability: ANALYSIS_SECONDARY
