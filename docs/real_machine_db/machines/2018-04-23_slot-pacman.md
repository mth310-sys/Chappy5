# No.1187 SLOTパックマン

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: SLOTパックマン
- manufacturer: メーシー（ユニバーサル系）
- releaseDateCanonical: 2018-04-23
- generation: 5.9号機 / 5号機
- systemType: ノーマル / 完全告知
- formalModelName: `SLOTパックマン／DG`
- certificationNumber: `7S1558`
- settings: `1 / 2 / 5 / 6`（4段階）
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、K-Navi、ちょんぼりすた、すろかい、すろぱちくえすとが2018-04-23導入で一致。
- releaseDateCanonical: 2018-04-23。

## performanceCore

### payoutRateBySetting
- setting1: 97.7%
- setting2: 99.5%
- setting5: 103.5%
- setting6: 111.1%

### initialHitBySetting
BIG:
- setting1: 1/277.7
- setting2: 1/269.7
- setting5: 1/259.0
- setting6: 1/231.6

REG:
- setting1: 1/436.9
- setting2: 1/390.1
- setting5: 1/350.5
- setting6: 1/296.5

ボーナス合算:
- setting1: 1/169.8
- setting2: 1/159.5
- setting5: 1/148.9
- setting6: 1/130.0

### baseGamesPer50
- 通常基準: 約35G/50枚。
- すろかい試算: 約35.2〜36.3G/50枚。
- コーヒーブレイク状態では公開値として setting1/2 36.9G、setting5 38.0G、setting6 39.7G /50枚。

### netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`

### basicPayout
- BIG: 312枚。
- REG: 最大104枚。

### ceiling
- 天井非搭載。

## modeSpecificMinimumData
- ボーナス後256G消化で「コーヒーブレイク状態」へ移行し、リプレイ確率が若干上昇。
- 設定変更後も1回目のボーナス当選までコーヒーブレイク状態。
- コーヒーブレイク状態の機械割: setting1 100.1%、setting2 102.1%、setting5 105.7%、setting6 113.4%。

## resetBehavior

### settingChangeBehavior
- 設定変更後はコーヒーブレイク状態から開始。
- 通常ゲーム数天井は非搭載。
- 設定変更時の成立済みボーナス、初期出目等の詳細契約は `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時にコーヒーブレイク状態/256G経過状態をどう保持するかを、純電源OFF→ONと分離して直接記述した資料は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON時のコーヒーブレイク状態・ボーナス間ゲーム数の直接契約は、検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- coffeeBreak trigger counter on settingChange: 設定変更直後からコーヒーブレイク状態のため通常の256G到達待ちは不要。
- carryOver/powerCycle counter: `UNVERIFIED_AFTER_RESEARCH`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- settingChange: `COFFEE_BREAK_STATE_CONFIRMED`
- reset-specific morning mode distribution: `NOT_APPLICABLE_FIXED_CONFIRMED_STATE`

### stateAfterReset
- 設定変更後: コーヒーブレイク状態。
- 据え置き/純電断: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- ノーマルタイプで、ホール経営シミュレーション上比較対象となるAT/ART型の有利区間挙動は `NOT_APPLICABLE_TO_GAMEPLAY_CORE`。
- 5.9号機一般論から本機固有契約を推定転記しない。

### resetBenefits
- 設定変更後、1回目のボーナスまでコーヒーブレイク状態となりリプレイ確率が若干上昇。
- 同状態の公開ベース/機械割は setting1 36.9G・100.1%、setting2 36.9G・102.1%、setting5 38.0G・105.7%、setting6 39.7G・113.4%。
- 通常天井短縮ではない。

### resetPenalties
- 設定変更専用の主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetDetection
- 設定変更後はコーヒーブレイク状態だが、公開資料上「リプレイ確率が若干上昇」であり、単独で確定判別できるものとは扱わない。
- 本機固有ガックン、初期出目、ランプによる変更確定判別: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- coffeeBreakBaseBySetting: `36.9 / 36.9 / 38.0 / 39.7 G/50枚`（設定1/2/5/6）
- coffeeBreakPayoutRateBySetting: `100.1 / 102.1 / 105.7 / 113.4%`
- coffeeBreakDurationAfterReset: `設定変更後〜1回目ボーナス当選まで`
- gakkunChangeDetectionProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更後は1回目ボーナスまでコーヒーブレイク状態。
- 同状態の公開ベース/機械割を上記numericResetDataへ保存。
- ちょんぼりすたは「朝イチの恩恵などは存在しない」と記載する一方、別解析資料では設定変更後コーヒーブレイク状態という実利的差分を確認できるため、前者を全面的NONEとはせず `WORDING_CONFLICT_RESET_BENEFIT` として解釈を分離。

## conflicts
- `WORDING_CONFLICT_RESET_BENEFIT`: ちょんぼりすたは「朝イチの恩恵などは存在しない」とするが、すろぱちくえすとは設定変更後〜1回目ボーナスまでコーヒーブレイク状態とし、同状態のベース/機械割上昇値を掲載。数値差ではなく「恩恵」の定義差として保持。
- 通常ベース約35Gと35.2〜36.3Gは概算/試算定義差であり平均化しない。

## missingFields
- 据え置きと純電断を分けたコーヒーブレイク/ボーナス間G契約: `UNVERIFIED_AFTER_RESEARCH`
- ガックン/初期出目/ランプ変更判別: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. HAZUSE — SLOTパックマン
   - https://hazuse.com/machine/pachislot/7S1558/
   - 型式`SLOTパックマン／DG`、検定番号`7S1558`、導入2018-04-23、メーカー、基本仕様。
   - confidence: `ANALYSIS_HIGH`
2. K-Navi — SLOTパックマン
   - https://p-kn.com/slot/2993/
   - 導入2018-04-23、メーシー、ノーマル/完全告知、BIG312枚、REG最大104枚。
   - confidence: `ANALYSIS_HIGH`
3. ちょんぼりすた — パックマン
   - https://chonborista.com/slot/universal-slot/56726/
   - 導入、5.9号機、約35G/50枚、設定別BIG/REG/合算/機械割、天井非搭載、コーヒーブレイク状態、朝一記述。
   - confidence: `ANALYSIS_HIGH`
4. すろぱちくえすと — パックマン
   - https://www.slopachi-quest.com/article/pachislot-pacman/
   - 設定変更後コーヒーブレイク状態、設定変更後〜1回目ボーナスまで、状態中ベース・機械割の設定別公開数値。
   - confidence: `ANALYSIS_HIGH`
5. すろかい — SLOTパックマン解析情報
   - https://slotkaiseki.hatenablog.com/entry/pacman
   - 導入、ノーマル、約35.2〜36.3G/50枚試算、コーヒーブレイク補足。
   - confidence: `ANALYSIS_SINGLE`
