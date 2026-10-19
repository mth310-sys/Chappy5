# No.1259 パチスロ フィーバークィーンII

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL`
- machineName: パチスロ フィーバークィーンII
- manufacturer: SANKYO
- releaseDateCanonical: 2019-01-21
- generation: 5.9号機
- systemType: A+RT / リアルボーナス+30G RT
- formalModelNameCanonical: `パチスロ フィーバークィーンII b`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## releaseDateEvidence
- SANKYOオンライン博物館は導入年月2019.01、Amusement Japan当時記事はホール導入2019-01-21予定、ちょんぼりすた・K-Navi・複数解析も2019-01-21で一致。
- confidence: `OFFICIAL + INDUSTRY + ANALYSIS_CROSSCHECKED`。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.9% |
| 5 | 104.2% |
| 6 | 109.3% |

- Amusement Japanが設定1=97.5%〜設定6=109.3%を掲載、ちょんぼりすた・K-Navi・5号機クロニクルで設定別値一致。

### initialHitBySetting
| 設定 | 赤7BIG | 青7BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/993 | 1/402 | 1/346 | 1/156 |
| 2 | 1/963 | 1/390 | 1/321 | 1/148 |
| 5 | 1/936 | 1/376 | 1/299 | 1/141 |
| 6 | 1/910 | 1/356 | 1/268 | 1/131 |

- SANKYOオンライン博物館公式スペック、ちょんぼりすた、K-Navi、pachislo-dataで一致。
- K-Navi本文のBIG合算欄に設定2=1/278とする不整合があるため、BIG合算値はcanonicalへ採用せず、公式の赤/青BIG個別値と全ボーナス合算を優先。

### baseGamesPer50
- 約33.3G/50枚。ちょんぼりすた、pachislo-dataで一致。

### netIncrease / basicPayout
- RT純増: `現状維持程度`。比較可能な枚/Gの公開値は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_NUMERIC_RATE`。
- 赤7BIG: **300枚**。
- 青7BIG: **240枚**。
- REG: **最大108枚**。
- 全ボーナス終了後に **30G RT** へ必ず突入。
- SANKYO公式は獲得枚数の異なる2種類のBIG、REG最大108枚、全ボーナス後30G RTを確認。K-Navi、P-WORLD、pachislo-dataで300/240/108枚を照合。

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- 通常時はQueen Mode / Classic Modeの2演出モードを選択可能。
- ボーナス後RTは30G固定。

## resetBehavior
### settingChangeBehavior
- 本機専用朝一表で、設定変更時は **RT状態リセット**。
- 演出モードは **クィーンモード**。
- 保留・リーチ状態は **リセット**。
- ちょんぼりすたとpachislo-dataの本機専用表で一致。

### carryOverBehavior
- 「据え置き」を純電源OFF→ONと完全に分離した本機固有の直接契約は、機種名/型式名/SANKYO/ビスティ表記、設定変更、リセット、据え置き、朝一、電源OFF ON、RT、ガックン等で再探索後も `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- ホール運用上、純電断時のRT引継ぎ情報は別項目に保持し、据え置きと同義にはしない。

### powerCycleBehavior
- 電源OFF→ONのみでは **RT状態引継ぎ**。
- 演出モードは **クィーンモード**。
- 保留・リーチは **リセット**。
- ちょんぼりすたとpachislo-dataで一致。

### gameCounterReset
- 通常ゲーム数天井非搭載につき `NOT_APPLICABLE_NORMAL_GAME_CEILING`。
- RT残Gについて、設定変更時はRT状態自体をリセット、純電断時はRT状態引継ぎと本機専用表で確認。

### ceilingAfterReset
- 通常天井非搭載。設定変更時短縮天井は `NOT_APPLICABLE / NONE`。

### modeAfterReset
- 設定変更・純電断とも演出モードはクィーンモード。
- 朝一専用の内部当選モード/モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: `RT_RESET; HOLD_AND_REACH_RESET; QUEEN_MODE`
- powerCycle: `RT_CARRY_OVER; HOLD_AND_REACH_RESET; QUEEN_MODE`
- carryOver distinct condition: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`

### advantageousSectionReset
- 本機固有資料で有利区間を用いる通常抽選/AT・ART構造を確認できず、A+RT機のため一般5.9号機仕様から自動補完しない。
- `NOT_CONFIRMED_AS_APPLICABLE / UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 朝一専用短縮天井、専用ボーナス当選率、専用RT優遇などは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時はRT状態がリセットされるため、RT中状態を跨いだ場合は純電断との明確な差になる。
- その他の設定変更固有不利は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一がRT状態なら純電断/据え置き側の材料になり得るが、据え置き独立契約は未固定のため断定用にはしない。
- 本機固有ガックン条件・発生率は検索語/資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
- 保留・リーチは設定変更でも純電断でもリセットされるため変更判別には使えない。
- 演出モードも双方クィーンモードのため変更判別には使えない。

### numericResetData
- normalCeiling: `NONE`
- resetShortenedCeiling: `NONE / NOT_APPLICABLE`
- resetSpecificModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- resetSpecificMorningHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- resetBenefitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## conflictsAndQualityNotes
- メーカー表記はSANKYO公式オンライン博物館のブランド=SANKYOをcanonical。P-WORLD/一部中古実機DBにはビスティ表記があるため資料差として保持するが、公式を優先。
- 正式型式名はSANKYO公式オンライン博物館が `(パチスロ フィーバークィーンII b)` と明記するためOFFICIALで固定。
- 検定番号は型式名、検定、公安委員会、検定通過、SANKYO/ビスティ等へ検索語を変更し旧DB・中古実機系まで再探索したが、高信頼に固定できずUNVERIFIED。
- RT純増は「現状維持程度」まで複数資料で固定できるが、枚/G数値は見つからず推定しない。

## missingFields
- 検定番号。
- 据え置きを純電源OFF→ONから分離した本機固有契約。
- RT純増の比較可能な枚/G数値。
- 本機固有ガックン発生条件/発生率。
- 有利区間の適用有無・設定変更時契約を直接示す本機固有資料。

## sources
取得日: 2026-09-11

1. SANKYOオンライン博物館 — https://www.sankyo-fever.jp/collection/720/ — 導入2019.01、公式型式名、設定別赤7/青7/REG/合算、REG最大108枚、全ボーナス後30G RT — reliability: `OFFICIAL`
2. Amusement Japan — https://amusement-japan.co.jp/article/detail/10000919/ — 2018-11-28、1/21導入予定、全ボーナス後30G RT、合算約1/156〜1/131、出玉率97.5〜109.3% — reliability: `INDUSTRY`
3. ちょんぼりすた — https://chonborista.com/slot/sankyo-slot/74772/ — 導入日、設定別確率/機械割、33.3G/50枚、天井非搭載、朝一設定変更/電源OFF→ON表 — reliability: `MAJOR_ANALYSIS_HIGH`
4. pachislo-data — https://pachislo-data.com/sankyo/82208 — 5.9号機A+RT、33.3G、現状維持程度、300/240/108枚、朝一設定変更/電断表 — reliability: `ANALYSIS_CROSSCHECK`
5. K-Navi — https://p-kn.com/slot/3140/ — 導入日、設定別主要確率/機械割、300/240/108枚、30G RT — reliability: `ANALYSIS_HIGH`
6. P-WORLD — https://www.p-world.co.jp/machine/database/8808 — 300/240/最大108枚、全ボーナス後30G RT — reliability: `MACHINE_DATABASE_HIGH`
7. 5号機クロニクル — https://5goki.com/bisty — 2019/1、機械割97.5/99.9/104.2/109.3% — reliability: `RETROSPECTIVE_DATABASE`

## confidence
- releaseDate: `OFFICIAL_MONTH + INDUSTRY_EXACT_DATE + ANALYSIS_CROSSCHECKED`
- formalModelName: `OFFICIAL`
- performanceCore: `OFFICIAL + INDUSTRY + ANALYSIS_CROSSCHECKED`
- resetBehavior: `ANALYSIS_CROSSCHECKED_MACHINE_SPECIFIC_PARTIAL`
