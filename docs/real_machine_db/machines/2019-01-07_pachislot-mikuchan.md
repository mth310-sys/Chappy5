# No.1256 パチスロ ミクちゃん

- recordStatus: `PARTIAL_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ ミクちゃん
- manufacturer: JPS（タツミコーポレーションPB）
- releaseDateCanonical: 2019-01-07
- generation: 6号機
- systemType: ノーマル / 完全告知 / 技術介入
- formalModelNameCanonical: `SパチスロミクチャンMPB AA`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `3 / 9`
- collectedAt: 2026-09-11

## releaseDateEvidence
- K-Navi、クオぱち、2019年1月新台一覧、パチ7試打動画説明で2019-01-07導入開始が一致。
- すろぱちくえすと本文内には2019-01-08表記もあり、P-Summaにも2019-01-08リリース表記があるため `CONFLICT_RELEASE_DATE_2019_01_07_VS_2019_01_08` を保持。
- canonicalは複数機種DB/当時予定一覧で一致する2019-01-07。
- confidence: `INDUSTRY + MACHINE_DATABASE_HIGH + ANALYSIS_CROSSCHECKED`。

## performanceCore
### payoutRateBySetting
市場/攻略値（チェリー狙い）:
| 設定 | 機械割 |
|---:|---:|
| 3 | 101.50% |
| 9 | 101.54% |

完全攻略時:
| 設定 | 機械割 |
|---:|---:|
| 3 | 104.00% |
| 9 | 104.12% |

- タツミコーポレーション発表会の業界記事では、両設定ともフリー打ち100%、小役完全取得104%と説明。精密値は解析/P-WORLD値として分離保持。

### initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 3 | 1/156.41 | 1/1260.31 | 1/139.14 |
| 9 | 1/224.44 | 1/224.44 | 1/112.22 |

### baseGamesPer50
- `UNVERIFIED_AFTER_RESEARCH`。
- 「50枚あたり」「ベース」「回転数」「1000円」＋機種名/型式名/JPS/PB名で再探索したが比較可能な公開値を固定できず。

### netIncrease / basicPayout
- netIncrease: `NOT_APPLICABLE_NORMAL_TYPE`。
- BIG: 純増200枚（209枚超払い出しで終了）。
- REG / BONUS GAME: 純増約80枚（84枚超払い出しで終了）。

## modeSpecificMinimumData
- 設定3: BIG偏向型。
- 設定9: BIG:REG比率1:1型。
- 完全告知。リール左下「ミクミクCHANCE」点灯でボーナス確定。
- 告知タイミングは先告知25% / 後告知75%とする機種DB情報あり。
- AT/ART/RTを用いないボーナス主体ノーマルタイプ。

## resetBehavior
### settingChangeBehavior
- 通常ゲーム数天井、ゾーン、リセット恩恵は無しとする攻略資料を確認。
- 設定変更時のボーナス内部成立状態、初期出目等を含む本機固有の詳細契約は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを独立条件としてボーナス内部状態/出目等がどう扱われるか、本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電源OFF→ONと同義扱いしない。

### powerCycleBehavior
- 純電源OFF→ON時の本機固有挙動は、JPS/型式/PB名と「電源OFF ON」「電断」「朝一」「据え置き」を組み替えて再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井非搭載につき `NOT_APPLICABLE_NORMAL_GAME_CEILING`。

### ceilingAfterReset
- 天井・ゾーンなし。設定変更による短縮天井も `NOT_APPLICABLE`。

### modeAfterReset
- AT/ARTの朝一モード概念は `NOT_APPLICABLE_AS_PUBLISHED_GAME_STRUCTURE`。
- 設定変更専用モード振り分けの公開値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 本機固有の設定変更/据え置き/純電断時内部成立状態は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- ボーナスのみで出玉を増やす6号機ノーマルタイプとして公開されており、AT/ART有利区間運用をゲーム性の核としない。
- 本機固有の朝一有利区間処理として比較すべき公開契約は `NOT_APPLICABLE_TO_PUBLISHED_NORMAL_GAME_STRUCTURE`。

### resetBenefits
- 天井/ゾーン/リセット狙い資料で **リセット恩恵なし** と明記。
- confidence: `ANALYSIS_SINGLE_MACHINE_SPECIFIC`。

### resetPenalties
- 設定変更固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 液晶なしAタイプのため、攻略資料では「ガックンが有効でない限りリセット判別不可」と整理。
- ただし、本機固有の設定変更時ガックン発生率・据え置き時誤発生率・確定条件は公開値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス比率から設定3/9自体は長期的に判別可能だが、これは朝一リセット判別とは別。

### numericResetData
- normalCeiling: `NONE`
- resetShortenedCeiling: `NONE / NOT_APPLICABLE`
- resetBenefit: `NONE_CONFIRMED_MACHINE_SPECIFIC`
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## conflictsAndQualityNotes
- 導入日は2019-01-07と2019-01-08の資料差を平均せずCONFLICT保持。複数DB・当時新台一覧で一致する1/7をcanonical。
- 業界発表の機械割は「フリー打ち100% / 完全取得104%」という丸め説明。P-WORLD等の101.50/101.54%はチェリー狙い、市場値として定義を分離し、完全攻略104.00/104.12%と混同しない。
- 型式名 `SパチスロミクチャンMPB AA` は複数機種DB/検定通過一覧で一致。
- ベースは欠損判定前に表記揺れ・型式・メーカー・PB名と50枚/ベース/回転数/1000円で再探索済み。
- 実機完全再現用の全小役確率/告知振り分け詳細は収集対象外。

## missingFields
- 50枚あたりゲーム数/ベース。
- 検定番号の高信頼固定。
- 設定変更/据え置き/純電断時の内部状態・初期出目直接契約。
- 本機固有ガックン発生率/確定条件。

## sources
取得日: 2026-09-11

1. Amusement Japan — https://amusement-japan.co.jp/article/detail/10000940/ — 2018-12-06発表会、タツミPB、6号機完全告知Aタイプ、設定3/9、フリー打ち100%・完全取得104%、設定3 BB約1/156、設定9 BB/RB各約1/224、2019年1月導入 — reliability: `INDUSTRY`
2. K-Navi — https://p-kn.com/slot/3160/ — 2019-01-07導入、JPS、タツミPB、設定3/9、BIG200枚/REG80枚 — reliability: `MACHINE_DATABASE_HIGH`
3. P-WORLD — https://www.p-world.co.jp/machine/database/8844 — 設定別BIG/REG/合算、チェリー狙い機械割、完全攻略機械割、BIG200枚/REG約80枚、完全告知 — reliability: `MACHINE_DATABASE_HIGH`
4. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/38/a.php — JPS/2019年1月、タツミPB、ノーマル、BIG200枚/REG80枚、設定3/9、完全取得104%超 — reliability: `MAJOR_ANALYSIS_HIGH`
5. モゲスロ — https://moge-site.com/archives/22202 — 精密ボーナス確率/機械割、天井なし、ゾーンなし、リセット恩恵なし、ガックン以外では変更判別困難 — reliability: `ANALYSIS_SINGLE_MACHINE_SPECIFIC`
6. クオぱち — https://www.pachinkoquora.com/machine/pachinslot/2148/ — 型式 `SパチスロミクチャンMPB AA`、6号機ノーマル、2019-01-07、精密確率/機械割 — reliability: `MACHINE_DATABASE_SECONDARY`
7. すろぱちくえすと — https://www.slopachi-quest.com/article/pachislot-mikuchan/ — 2019-01-07見出し/本文内2019-01-08表記の差、JPS、ノーマル — reliability: `ANALYSIS_SECONDARY`
8. すろ・ぱち(解) 検定通過一覧 — https://kaiseki.sulopachinews.com/archives/2352 — 型式 `SパチスロミクチャンMPB AA` — reliability: `INDUSTRY_SECONDARY`
