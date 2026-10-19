# No.1183 押忍！番長A

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 押忍！番長A
- manufacturer: 大都技研
- releaseDateCanonical: 2018-04-02
- generation: 5.9号機 / 5号機
- systemType: A+RT / ボーナス+RT / 技術介入機
- formalModelName: `押忍！番長A／A3`
- certificationNumber: `7S1429`
- settings: `1 / 2 / 5 / 6`（4段階）
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`押忍！番長A／A3`、検定番号`7S1429`、導入開始日2018-04-02、メーカー大都技研を掲載。
- K-Navi、パチビー、ちょんぼりすたもホール導入2018-04-02で一致。
- グリーンべるとは2018-02-28付記事で納品4月1日開始を報道しており、ホール導入4月2日と整合。
- releaseDateCanonicalは2018-04-02。

## performanceCore

### payoutRateBySetting
通常打ち:
- setting1: 98.5%
- setting2: 101.4%
- setting5: 105.2%
- setting6: 109.7%

攻略打ち / 完全攻略:
- setting1: 100.7%
- setting2: 103.2%
- setting5: 107.2%
- setting6: 111.8%

- パチビー、ちょんぼりすた、後年5号機資料で一致。グリーンべるとも完全打ち100.7〜111.8%を報道。

### initialHitBySetting
BB合成:
- setting1: 1/273.1
- setting2: 1/273.1
- setting5: 1/237.4
- setting6: 1/240.9

REG合成:
- setting1: 1/331.0
- setting2: 1/273.1
- setting5: 1/331.0
- setting6: 1/240.9

ボーナス合成:
- setting1: 1/149.6
- setting2: 1/136.5
- setting5: 1/138.3
- setting6: 1/120.5

- HAZUSE、パチビー、ちょんぼりすたで整合。

### baseGamesPer50
- 約33〜35G/50枚。
- 実戦系資料では33.35〜35.15G/50枚の設定差掲載あり。
- 比較用canonicalは`約33〜35G/50枚`。

### netIncrease
- RT純増: 約0.2枚/G。

### basicPayout
- 青7番長ボーナス: 最大304枚 + RT50G。
- その他番長ボーナス: 最大260枚 + RT20G。
- REG: 最大106枚。
- 番長ボーナス後は必ずRTへ突入。

### ceiling
- 通常ゲーム数天井: 非搭載。

## modeSpecificMinimumData
- A+RTの技術介入型。
- 青7BIG後RTは50G、その他BIG後RTは20G。
- RT純増は約0.2枚/G。
- 通常時の「前兆型Aタイプ」演出はボーナス察知演出であり、AT/ARTのゲーム数モードとして扱わない。

## resetBehavior

### settingChangeBehavior
- 天井非搭載のため天井カウンタRESETは`NOT_APPLICABLE`。
- ちょんぼりすた朝一比較表では設定変更時のRT状態・ステージとも`調査中`。
- 本機専用の設定変更時RT状態/残G、成立済みボーナス、表示状態を直接固定する高信頼資料は再探索後も確認できず`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 「設定据え置き」を純電源OFF→ONと分離してRT状態・残G・成立済みボーナス・表示状態を直接定義した本機固有資料は`UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため通常天井G数引継ぎは`NOT_APPLICABLE`。

### powerCycleBehavior
- ちょんぼりすたは電源OFF→ON時のRT状態を`引き継ぎ?`、ステージを`調査中`と記載。
- 疑問符付き情報のためcanonicalでは確定せず、`UNVERIFIED_AFTER_RESEARCH_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`として保持。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- RT remaining games / state on settingChange: `UNVERIFIED_AFTER_RESEARCH`
- RT remaining games / state on carryOver: `UNVERIFIED_AFTER_RESEARCH`
- RT remaining games / state on powerCycle: `UNVERIFIED_AFTER_RESEARCH_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- 朝一専用内部モード: `NONE_CONFIRMED_AFTER_RESEARCH`
- 設定変更時モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`

### stateAfterReset
- settingChange RT state: `UNVERIFIED_AFTER_RESEARCH`
- carryOver distinct RT state: `UNVERIFIED_AFTER_RESEARCH`
- powerCycle RT state: `UNVERIFIED_AFTER_RESEARCH_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`

### advantageousSectionReset
- A+RT機として確認した本機専用資料では、朝一客判断に使える有利区間ランプ/有利区間リセット契約を固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論から自動補完しない。

### resetBenefits
- ちょんぼりすたは「Aタイプなのでリセットの恩恵などは存在しない」と明記。
- reset-specific ceiling benefit: `NOT_APPLICABLE_NO_CEILING`
- reset-specific bonus/RT優遇: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetPenalties
- 設定変更専用の主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetDetection
- ちょんぼりすたは「大都技研の台はガックン判別が効かないため、本機もリセット時ガックンしない可能性が高い」とするが推測表現。
- 本機固有の実測/解析でガックン発生条件や確定判別を固定できず`UNVERIFIED_AFTER_RESEARCH`。
- RT終了画面やボーナス中の設定示唆は設定推測材料であり、設定変更/据え置き判別と混同しない。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitProbability: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 朝一/設定変更時だけに適用される初当たり率、RT突入率、モード振り分け、規定G以内当選率等の比較可能な公開数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- 主要性能コアで採用を左右する重大CONFLICTは確認なし。
- 設定番号表記について一部業界記事に「設定1〜4」と一般化した記載があるが、実機の設定段階は複数解析で`1/2/5/6`。本DBは1/2/5/6をcanonical採用。
- 電源OFF→ON時RT状態の「引き継ぎ?」は未確定表現のため確定値へ昇格させない。

## missingFields
- 設定変更時RT状態/残G、成立済みボーナス、表示状態: `UNVERIFIED_AFTER_RESEARCH`
- 据え置きと純電断を分離した本機固有RT状態: `UNVERIFIED_AFTER_RESEARCH`
- 純電源OFF→ON時RT状態の確定契約: `UNVERIFIED_AFTER_RESEARCH_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`
- 本機固有の有利区間使用/朝一ランプ判別契約: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有ガックン確定判別: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. HAZUSE — 押忍！番長A
   - https://hazuse.com/machine/pachislot/7S1429/
   - 型式、検定番号、導入日、メーカー、ボーナス確率。
   - confidence: `ANALYSIS_HIGH`

2. パチビー — 押忍！番長A 基本スペック
   - https://www.pachibee.jp/machines/index/218020004
   - 導入日、5.9号機RT、通常/攻略機械割、BB/RB確率、獲得枚数、RT20G/50G。
   - confidence: `ANALYSIS_HIGH`

3. ちょんぼりすた — 押忍！番長A
   - https://chonborista.com/slot/daito-slot/53886/
   - 導入日、A+RT、約33〜35G/50枚、天井非搭載、通常/攻略機械割、朝一比較表、リセット恩恵なしの記載。
   - confidence: `ANALYSIS_HIGH`

4. グリーンべると — 歴代シリーズの魅力が凝縮した『番長A』！
   - https://web-greenbelt.jp/00010275/
   - 2018-02-28、納品4/1、A+RT、最大304/260/106枚、RT純増約0.2枚/G、完全打ち100.7〜111.8%。
   - confidence: `INDUSTRY`

5. K-Navi — 押忍！番長A
   - https://p-kn.com/slot/2981/
   - ホール導入2018-04-02、RT機、基本獲得性能。
   - confidence: `ANALYSIS_HIGH`

6. さむらい流スロプロ道 — 押忍！番長A実戦記
   - https://sloter-samurai.com/practicing/banchoua_jissen01
   - 50枚33.35〜35.15G、通常/攻略機械割、ボーナス確率、天井非搭載。
   - confidence: `ANALYSIS_SINGLE`
