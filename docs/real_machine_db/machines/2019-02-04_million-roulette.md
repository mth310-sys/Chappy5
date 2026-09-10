# No.1264 ミリオンルーレット

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ミリオンルーレット
- manufacturer: コナミアミューズメント
- releaseDateCanonical: 2019-02-04
- generation: 5.9号機
- systemType: ノーマル / Aタイプ
- formalModelNameCanonical: `ミリオンルーレット／KU`
- certificationNumber: `7S1401`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.7% |
| 3 | 100.1% |
| 4 | 102.1% |
| 5 | 104.9% |
| 6 | 110.9% |

### initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/277.7 | 1/368.2 | 1/158.3 |
| 2 | 1/274.2 | 1/348.6 | 1/153.5 |
| 3 | 1/271.9 | 1/321.3 | 1/147.3 |
| 4 | 1/268.6 | 1/290.0 | 1/139.4 |
| 5 | 1/262.1 | 1/266.4 | 1/132.1 |
| 6 | 1/241.8 | 1/241.8 | 1/120.9 |

- ちょんぼりすた、すろぱちくえすと、モゲスロ、P-WORLDで一致。

### baseGamesPer50
- canonical: **約33.7G/50枚**。
- 設定別レンジは公開値を固定できず、代表値として保存。

### netIncrease / basicPayout
- RT/ART/AT: **非搭載**。
- netIncrease: `NOT_APPLICABLE`。
- BIG: **312枚**。
- REG: **約104枚**。
- P-WORLDはBIG「345枚を超える払い出しで終了（獲得312枚）」、REG「105枚を超える払い出しで終了（獲得約104枚）」と掲載。

## modeSpecificMinimumData
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。
- ゾーン: `NOT_APPLICABLE`。
- 通常時は巨大ルーレット役物を用いた告知演出を備える純ボーナス主体のノーマル機で、AT/ART/RTによる状態管理はない。

## resetBehavior
### settingChangeBehavior
- 通常ゲーム数天井・AT/ART/RTモード管理は存在しないため、それらのリセット処理は `NOT_APPLICABLE`。
- 設定変更時の初期出目、内部ボーナス成立状態、ルーレット演出状態を本機固有に明記した直接資料は、表記揺れ・型式名・メーカー名・「設定変更」「リセット」「朝一」「ガックン」を切り替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを純電源OFF→ONと明確に分離して本機固有の初期出目・内部成立状態・演出状態保持を示す直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 純電源OFF→ONのみの場合の初期出目、内部ボーナス成立状態、ルーレット演出状態を本機固有に明記した資料は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井/ゾーン非搭載のため `NOT_APPLICABLE`。

### ceilingAfterReset
- `NOT_APPLICABLE`。通常時天井非搭載のため短縮天井なし。

### modeAfterReset
- AT/ARTの通常モードや朝一専用モードは `NOT_APPLICABLE_TO_GAMEPLAY`。
- 設定変更時専用のボーナス当選率/朝一モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- AT/ART/RT内部状態は `NOT_APPLICABLE`。
- ルーレット演出状態等の本機固有設定変更/据え置き/純電断契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 5.9号機ノーマルでAT/ARTを搭載せず、本DBの朝一客行動へ直結する有利区間挙動は `NOT_APPLICABLE_TO_GAMEPLAY / NO_AT_ART_ADVANTAGEOUS_SECTION_BEHAVIOR_TO_MODEL`。
- 世代一般論から内部処理を補完しない。

### resetBenefits
- ちょんぼりすたは「朝イチの恩恵などは存在しない可能性が高い」と記載。
- 天井短縮、朝一専用当選率上昇、専用モード等の公開恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- モゲスロは「液晶なしAタイプのため確実なリセット判別は難しい」「コナミ機はガックンチェックが効かない機種である可能性が高い」とする。
- 断定的な機種固有契約や発生率ではないため `RESET_DETECTION_DIFFICULT / GAKKUN_UNCONFIRMED_POSSIBLY_INEFFECTIVE` として保持。

### numericResetData
- resetShortenedCeiling: `NOT_APPLICABLE`
- resetMorningHitRate: `PUBLIC_VALUE_NOT_FOUND / NO_SPECIFIC_BENEFIT_CONFIRMED`
- resetModeDistribution: `NOT_APPLICABLE_TO_GAMEPLAY / PUBLIC_VALUE_NOT_FOUND`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## releaseDateDecision
- コナミアミューズメント公式アーカイブは稼働開始を2019年2月と掲載。
- ちょんぼりすた、すろぱちくえすと、モゲスロ、P-WORLD、当時2/4新台一覧が2019-02-04で一致するため、ホール導入日canonicalを **2019-02-04** とする。

## formalModel / certification
- P-WORLD機種DBで型式名 **`ミリオンルーレット／KU`**、検定番号 **`7S1401`** を確認。
- 公式アーカイブでは機種名・2019年2月稼働開始・5.9号機ノーマルを確認。

## missingFields
- 設定変更/据え置き/純電断別の初期出目・内部ボーナス成立状態・ルーレット演出状態の本機固有契約。
- ガックンの機種固有発生条件/発生率。
- 設定別50枚ベース。

## conflicts
- 性能コア・導入日の主要値に、今回確認した資料間で実質的CONFLICTなし。
- ちょんぼりすたの朝一恩恵記述、モゲスロのガックン記述はいずれも推測表現を含むため、確定契約へ昇格させない。

## sources
取得日: 2026-09-11
1. コナミアミューズメント公式 機種アーカイブ — https://www.konami.com/amusement/psm/archive/ps/2019/millionroulette/ — 2019年2月稼働開始、5.9号機ノーマル — reliability: `OFFICIAL`
2. P-WORLD — https://www.p-world.co.jp/machine/database/8822 — 型式 `ミリオンルーレット／KU`、検定番号7S1401、2019-02-04、BIG/REG/合算、312枚/約104枚、ノーマル — reliability: `MACHINE_DB_CROSSCHECK`
3. ちょんぼりすた — https://chonborista.com/slot/konami-slot/75448/ — 2019-02-04、設定別BIG/REG/合算/機械割、天井非搭載、朝一恩恵なしの可能性 — reliability: `ANALYSIS_HIGH`
4. すろぱちくえすと — https://www.slopachi-quest.com/article/millionroulette-settei/ — 2019-02-04、33.7G/50枚、設定別性能、BIG312枚/REG104枚、RT非搭載 — reliability: `ANALYSIS_HIGH`
5. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/05/a.php — 5.9号機ノーマル、BIG312枚、REG約104枚 — reliability: `ANALYSIS_HIGH`
6. モゲスロ — https://moge-site.com/archives/19565 — 2019-02-04、設定別性能、液晶なしAタイプのリセット判別困難、ガックン非有効可能性 — reliability: `ANALYSIS_SINGLE`
7. スロット解析情報~すろかい~ — https://slotkaiseki.hatenablog.com/entry/million — BIG312枚、REG104枚、PRIME Project第2弾 — reliability: `ANALYSIS_SINGLE`
8. 当時2/4新台一覧 — https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/01/27/223203 — 2019-02-04群、BIG312枚/REG104枚 — reliability: `CONTEMPORARY_SECONDARY`

## confidence
- releaseDateCanonical: `OFFICIAL_MONTH + ANALYSIS_HIGH_CROSSCHECKED`
- formalModelName/certificationNumber: `MACHINE_DB_CROSSCHECK`
- performanceCore: `ANALYSIS_HIGH_CROSSCHECKED + MACHINE_DB_CROSSCHECK`
- baseGamesPer50: `ANALYSIS_HIGH_SINGLE_VALUE`
- resetBenefits/ceiling: `ANALYSIS_HIGH`
- resetDetection: `ANALYSIS_REFERENCE_ONLY`
- resetBehaviorOther: `PARTIAL_RESEARCH_EXHAUSTED`
