# No.1258 戦国BASARA HEROES PARTY

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL`
- machineName: 戦国BASARA HEROES PARTY
- manufacturer: エンターライズ / Enterrise
- releaseDateCanonical: 2019-01-21
- generation: 5.9号機
- systemType: A+ART / リアルボーナス+ART
- formalModelNameCanonical: `UNVERIFIED_AFTER_RESEARCH`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## releaseDateEvidence
- エンターライズ公式特設サイトは2019-01-21に更新履歴を持ち、当時解析のちょんぼりすた・一撃・すろぱちくえすと等は導入日2019-01-21で一致。
- Amusement Japanの2018-11-20プレス説明会記事は「1月中旬からの予定」としており、具体的なホール導入日は解析系複数一致の2019-01-21をcanonicalとする。
- confidence: `OFFICIAL_PRODUCT_PAGE + INDUSTRY + ANALYSIS_CROSSCHECKED`。

## performanceCore
### payoutRateBySetting
複数解析一致をcanonical:
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.1% |
| 3 | 101.0% |
| 4 | 103.2% |
| 5 | 104.8% |
| 6 | 108.4% |

- ちょんぼりすたのみ設定5を104.2%と掲載するため `CONFLICT_SETTING5_PAYOUT_104_8_VS_104_2`。一撃・モゲスロが104.8%で一致するためcanonicalは104.8%。

### initialHitBySetting
| 設定 | BE/BC合算 | BB | ボーナス合算 | ART | ボーナス+ART合算 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/186.2 | 1/1598.4 | 1/166.8 | 1/311.7 | 1/108.6 |
| 2 | 1/180.0 | 1/1598.4 | 1/161.8 | 1/305.2 | 1/105.7 |
| 3 | 1/171.6 | 1/1598.4 | 1/154.9 | 1/295.9 | 1/101.7 |
| 4 | 1/166.8 | 1/1598.4 | 1/151.0 | 1/290.5 | 1/99.4 |
| 5 | 1/158.7 | 1/1598.4 | 1/144.4 | 1/281.1 | 1/95.4 |
| 6 | 1/151.0 | 1/1598.4 | 1/138.0 | 1/271.9 | 1/91.5 |

- BE = BASARA EPISODE、BC = BASARA CHALLENGE。
- BB（青7/BASARA BONUS）は全設定共通1/1598.4。

### baseGamesPer50
- 約29.9G/50枚。
- ちょんぼりすた、すろぱちくえすとで一致。

### netIncrease / basicPayout
- ART純増: **約1.4枚/G（ボーナスを除くART区間の解析値）**。
- ボーナス込みART純増: **約1.7枚/G**。エンターライズ系当時資料、Amusement Japan、P-WORLD、一撃、パチマガスロマガで一致。
- 定義差のため1.4枚/Gと1.7枚/GをCONFLICT扱いせず別フィールドとして保持。
- BASARA BONUS: **154枚獲得**。
- BASARA CHALLENGE / BASARA EPISODE: **42枚獲得**。
- Let's PARTY: 初期40G+α。
- HEROES PARTY: 1セット30G、実質継続期待度約75%。

## modeSpecificMinimumData
- 通常時はSB成立時の1/3で有利区間へ移行、実質移行率約1/47〜1/47.6。
- 有利区間移行時の内部状態は通常54.7% / 高確30.1% / 超高確15.2%。これは設定変更専用値ではなく有利区間移行時共通値。
- 有利区間平均滞在は約28.8G（設定1）〜約28.4G（設定6）。
- 有利区間移行時ART期待度は13.6%（設定1）〜16.8%（設定6）。
- JACK POT突入時は有利区間完走が確定するゲーム性として当時解析に掲載。
- 通常ゲーム数天井は非搭載。

## resetBehavior
### settingChangeBehavior
- モゲスロの本機専用朝一資料では設定変更時の「内部状態」は再抽選。
- ちょんぼりすたは同項目を当時「リセット?」としており断定度が低いため、再抽選は `ANALYSIS_SINGLE_MACHINE_SPECIFIC` として保持。
- 設定変更時のステージは当時資料でも調査中。

### carryOverBehavior
- 据え置きを「電源OFF→ONのみ」と分離した本機固有の公開契約は、機種名表記揺れ、メーカー名、設定変更、リセット、据え置き、電源OFF/ON、有利区間、朝一、ガックン等で再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- モゲスロの本機専用朝一資料では電源OFF→ON時の内部状態は引き継ぐ。
- ちょんぼりすたは「引き継ぎ?」表記で断定度が低いが方向性は一致。
- ステージ復帰状態は両系統とも調査中のため `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため `NOT_APPLICABLE_NORMAL_GAME_CEILING`。
- 有利区間内の保障G/ART残Gなどを設定変更時にどう処理するかの本機固有直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常天井非搭載。設定変更による短縮天井も `NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更直後に有利区間「通常/高確/超高確」のどれへ入るかを直接示す設定変更専用振り分けは確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 公開されている通常54.7% / 高確30.1% / 超高確15.2%は「有利区間移行時共通値」であり、設定変更専用値へ自動転記しない。

### stateAfterReset
- 設定変更時内部状態: `RESELECT / ANALYSIS_SINGLE_MACHINE_SPECIFIC`。
- 電源OFF→ON時内部状態: `CARRY_OVER / ANALYSIS_MACHINE_SPECIFIC_CROSS_DIRECTION`。
- 据え置き独立条件: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### advantageousSectionReset
- 本機は5.9号機A+ARTで有利区間を使用し、通常時の有利区間移行率・状態振り分け・ランプ点灯を確認。
- ただし「設定変更を行うと有利区間を必ずリセット」「純電源断で有利区間そのものを引継ぐ」と明記した本機固有資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般5.9号機仕様からの類推は記録へ入れない。

### resetBenefits
- 朝一専用の短縮天井・専用当選率・専用ART/CZ優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時内部状態再抽選が確認されるが、朝一専用の有利な振り分け数値は確認できない。

### resetPenalties
- 設定変更固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックンは、モゲスロが「エンターライズにはする/しない機種があり、本機は最近の大神同様しない可能性が高い」と推測しているのみで、確定情報ではない。
- よってガックン発生条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。推測値は採用しない。
- 有利区間ランプは有利区間移行時に点灯することを確認したが、朝一の設定変更/据え置き判別として確定利用できる本機固有契約は確認できない。

### numericResetData
- normalCeiling: `NONE`
- resetShortenedCeiling: `NONE / NOT_APPLICABLE`
- resetSpecificModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- resetSpecificMorningHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- commonAdvantageousSectionEntryStateDistribution: `通常54.7% / 高確30.1% / 超高確15.2%`（設定変更専用ではない）
- commonAdvantageousSectionEntryRate: `約1/47〜1/47.6`（設定変更専用ではない）

## conflictsAndQualityNotes
- 設定5機械割のみ104.8%（一撃・モゲスロ）と104.2%（ちょんぼりすた）が競合。平均せず双方保持。
- 純増1.4枚/Gと1.7枚/Gは定義差。1.4はボーナス除外ART、1.7はボーナス込みのため競合ではない。
- Amusement Japanのプレス記事は純増約1.7枚/G（ボーナス込み）、ART初当たり約1/312〜1/272、BONUS154枚/42枚を一次寄り業界資料として補強。
- エンターライズ公式特設サイトが現存し、本機の公式製品存在と2018-12〜2019-02の更新履歴を確認。
- 正式型式名・検定番号は「型式名」「検定番号」「検定通過」「8S/9S」「エンターライズ」等へ検索語を変更し、公式・業界・解析・中古実機系まで再探索したが、高信頼に固定できずUNVERIFIED。

## missingFields
- 正式型式名 / 検定番号。
- 据え置きを純電源OFF→ONから分離した本機固有内部状態契約。
- 設定変更/純電断時の有利区間そのものの直接契約。
- 設定変更時ステージ。
- 本機固有ガックン発生条件/発生率。

## sources
取得日: 2026-09-11

1. エンターライズ公式 戦国BASARA HEROES PARTY — https://www.enterrise.co.jp/slot/sbh/ — 公式製品ページ、2018-12-03開設、2019-01-21更新 — reliability: `OFFICIAL`
2. エンターライズ公式 スペックページ — https://www.enterrise.co.jp/slot/sbh/spec.php — reliability: `OFFICIAL`（現行テキスト抽出では画像主体で数値本文の直接取得不可）
3. Amusement Japan — https://amusement-japan.co.jp/article/detail/10000912/ — 2018-11-20、A+ART、154枚/42枚、純増約1.7枚/G（ボーナス込み）、ART約1/312〜1/272 — reliability: `INDUSTRY`
4. P-WORLD — https://www.p-world.co.jp/machine/database/8828 — A+ART、純増約1.7枚/G（BONUS込み）、154枚/42枚、Let's PARTY 40G+α、HEROES PARTY 30G — reliability: `MACHINE_DATABASE_HIGH`
5. 一撃 — https://1geki.jp/slot/s_basara_hp/ — 導入2019-01-21、設定別ボーナス+ART合算、機械割97.9〜108.4%、設定5=104.8% — reliability: `MAJOR_ANALYSIS_HIGH`
6. 一撃 ART概要 — https://1geki.jp/slot/s_basara_hp/81/ — 純増約1.7枚/G（ボーナス込み）、Let's PARTY 40G+α — reliability: `MAJOR_ANALYSIS_HIGH`
7. パチマガスロマガ 通常時内部状態 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/19/l07.php — 有利区間移行率、状態振り分け、平均G数、ART期待度 — reliability: `MAJOR_ANALYSIS_HIGH`
8. パチマガスロマガ HEROES PARTY — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/19/l06.php — 1セット30G+α、純増約1.7枚/G（ボーナス込み）、実質約75% — reliability: `MAJOR_ANALYSIS_HIGH`
9. ちょんぼりすた — https://chonborista.com/slot/enta-slot/70813/ — 導入日、29.9G/50枚、設定別確率、朝一内部状態、設定5機械割104.2% — reliability: `ANALYSIS_HIGH`
10. モゲスロ — https://moge-site.com/archives/19735 — 設定別機械割（設定5=104.8%）、設定変更時内部状態再抽選、電源OFF/ON時引継ぎ、ガックン考察 — reliability: `ANALYSIS_MACHINE_SPECIFIC`
11. すろぱちくえすと — https://www.slopachi-quest.com/article/sengokubasara-heroes-party-settei/ — 2019-01-21、29.9G/50枚、ART単体純増1.4枚/G — reliability: `ANALYSIS_HIGH`
