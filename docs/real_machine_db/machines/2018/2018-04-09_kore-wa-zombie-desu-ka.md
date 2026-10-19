# No.1185 パチスロ これはゾンビですか？

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ これはゾンビですか？
- manufacturer: 北電子
- releaseDateCanonical: 2018-04-09
- generation: 5.9号機 / 5号機
- systemType: A+ART / ボーナス+CZ+セット継続ART
- formalModelName: `これはゾンビですか／KA`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 4 / 6`（4段階）
- collectedAt: 2026-09-10

## releaseDateEvidence
- 北電子公式検定情報で型式`これはゾンビですか／KA`を確認。各都道府県の公示は2017年10〜11月。
- パチビー、K-Navi、ちょんぼりすた、パチトラがホール導入2018-04-09で一致。
- releaseDateCanonicalは2018-04-09。

## performanceCore

### payoutRateBySetting
- setting1: 97.9%
- setting2: 100.7%
- setting4: 103.6%
- setting6: 108.2%

### initialHitBySetting
S-BIG:
- setting1: 1/1820.4
- setting2: 1/1489.4
- setting4: 1/1365.3
- setting6: 1/1170.3

BIG:
- setting1: 1/585.1
- setting2: 1/528.5
- setting4: 1/481.9
- setting6: 1/420.1

REG / ゾンビボーナス:
- setting1: 1/910.2
- setting2: 1/744.7
- setting4: 1/655.4
- setting6: 1/555.4

ボーナス合算:
- setting1: 1/297.9
- setting2: 1/256.0
- setting4: 1/230.8
- setting6: 1/198.6

ART初当たり:
- all settings: 約1/466（解析上ほぼ全設定共通）

ボーナス+ART合成:
- setting1: 1/181.8
- setting2: 1/165.3
- setting4: 1/154.4
- setting6: 1/139.3

CZ:
- 魔装チャンス: 1/420.1（設定1〜6共通掲載）
- 魔装チャレンジ: 1/525.0（設定1〜6共通掲載）

### baseGamesPer50
- 約33.3G/50枚。

### netIncrease
- ART単体: 約1.4枚/G。
- ボーナス込みART純増: 約1.9枚/G。

### basicPayout
- S-BIG: 約252枚。
- BIG: 約150枚。
- ゾンビボーナス: 約48枚。
- ART「めっちゃフェスティボー」: 1セット平均40G+α、セット継続+ストック型。

### ceiling
- 通常ゲーム数天井: 非搭載。

## modeSpecificMinimumData
- 通常時は通常 / 高確 / 超高確の内部状態を持つ。
- CZは「魔装チャンス」8G+α・ART期待度約25%、「魔装チャレンジ」15G・ART期待度約50%。
- ARTは「めっちゃフェスティボー」。ボーナス込み純増約1.9枚/G、1セット平均40G+α。
- 通常ゲーム数天井は非搭載。

## resetBehavior

### settingChangeBehavior
- 本機専用朝一比較表で設定変更時の内部状態は`リセット`。
- 設定変更後の開始ステージは`相川家ステージ`。
- 天井非搭載のため天井ゲーム数RESETは`NOT_APPLICABLE`。
- 設定変更時の内部状態の具体的振り分け、CZ/ART状態、成立済みボーナス等の詳細契約は、検索語・資料系統変更後も固定できず`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 「設定据え置き」を純電源OFF→ONと分けた本機固有の内部状態/CZ/ART/成立済みボーナス契約は`UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数天井は非搭載のため天井引継ぎは`NOT_APPLICABLE`。

### powerCycleBehavior
- 本機専用朝一比較表では電源OFF→ON時の内部状態は`調査中`。
- 電源OFF→ON後の開始ステージは`相川家ステージ`。
- 再探索後も内部状態/CZ/ARTの直接契約を固定できず`UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- ART/CZ state on settingChange: `UNVERIFIED_AFTER_RESEARCH`
- ART/CZ state on carryOver: `UNVERIFIED_AFTER_RESEARCH`
- ART/CZ state on powerCycle: `UNVERIFIED_AFTER_RESEARCH`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- reset-specific morning mode: `NONE_CONFIRMED_AFTER_RESEARCH`
- reset-specific mode distribution: `UNVERIFIED_AFTER_RESEARCH`

### stateAfterReset
- settingChange internal state: `RESET_CONFIRMED_DISTRIBUTION_UNVERIFIED`
- carryOver internal state: `UNVERIFIED_AFTER_RESEARCH`
- powerCycle internal state: `UNVERIFIED_AFTER_RESEARCH`
- settingChange start stage: `相川家ステージ`
- powerCycle start stage: `相川家ステージ`

### advantageousSectionReset
- 本機は5.9号機で有利区間採用を確認。
- 本機固有の設定変更/据え置き/純電断時の有利区間ランプ・内部有利区間状態の直接契約は`UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論から推測転記しない。

### resetBenefits
- 短縮天井: `NOT_APPLICABLE_NO_CEILING`
- 解析資料は「5.9号機の仕様上、朝イチ恩恵などは存在しない可能性が高い」とするが推測表現のため、確定恩恵としては`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更専用の主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetDetection
- 設定変更・純電断とも開始ステージが相川家ステージのため、ステージ単独では設定変更判別不能。
- 本機固有のガックン、初期出目、ランプ、朝一ゲーム数挙動による確定変更判別は`UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetBenefitProbability: `UNVERIFIED_AFTER_RESEARCH`
- gakkunChangeDetectionProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 朝一/設定変更専用の初当たり率、CZ開始率、ART開始率、内部状態振り分け、規定G以内当選率: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の内部状態RESETと相川家ステージ開始のみ直接確認。

## conflicts
- 主要性能コアで採用を左右するCONFLICTは確認なし。
- ART純増は`約1.4枚/G`と`ボーナス込み約1.9枚/G`の定義差。競合ではなく別指標として分離。
- ART初当たりはスペック表で設定1欄1/466.3のみ表示される一方、同ページ本文に「ART出現率は全設定共通1/466」と明記。canonicalは`全設定 約1/466`、精密値は設定1 1/466.3として扱う。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更時内部状態の具体的振り分け: `UNVERIFIED_AFTER_RESEARCH`
- 据え置きと純電断を分離した内部状態/CZ/ART契約: `UNVERIFIED_AFTER_RESEARCH`
- 純電源OFF→ON時内部状態: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有有利区間リセット契約: `UNVERIFIED_AFTER_RESEARCH`
- ガックン/初期出目/ランプ変更判別: `UNVERIFIED_AFTER_RESEARCH`
- 朝一専用公開数値: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. 北電子公式 — 「これはゾンビですか／KA」検定情報
   - https://www.kitadenshi.co.jp/slot-kentei/korezon/
   - 型式名、メーカー一次確認。都道府県別公示日を掲載。
   - confidence: `OFFICIAL`

2. ちょんぼりすた — これはゾンビですか? スロット新台｜天井 解析 設定 攻略 評価 PV動画
   - https://chonborista.com/slot/kitadenshi/54588/
   - 導入日、5.9号機/A+ART、機械割、ボーナス確率、ART/CZ、約33.3G/50枚、純増、獲得枚数、天井非搭載、朝一内部状態RESET、設定変更/電断後の開始ステージ。
   - confidence: `ANALYSIS_HIGH`

3. パチビー — パチスロ これはゾンビですか？
   - https://www.pachibee.jp/machines/movie/218020005
   - 導入日2018-04-09、北電子。
   - confidence: `ANALYSIS_HIGH`

4. パチビー — 仕様解説
   - https://www.pachibee.jp/machines/lecture/218020005
   - 5.9号機ART、ボーナス/CZ/ART構造、SBB約252枚・BIG約150枚・ゾンビボーナス約48枚、ART平均40G+α・ボーナス込み約1.9枚/G。
   - confidence: `ANALYSIS_HIGH`

5. K-Navi — パチスロ これはゾンビですか?
   - https://p-kn.com/slot/2961/
   - 導入開始2018-04-09、北電子、ボーナス+ART、有利区間採用、基本獲得枚数。
   - confidence: `ANALYSIS_HIGH`

6. P-WORLD — パチスロ これはゾンビですか?
   - https://www.p-world.co.jp/machine/database/8597
   - 北電子、ART/CZ/リアルボーナス、基本獲得枚数、ART平均40G+α・ボーナス込み約1.9枚/G。
   - confidence: `ANALYSIS_HIGH`

7. パチトラ — パチスロ これはゾンビですか?
   - https://p-tora.com/i5315a4/
   - 導入2018-04-09、型式`これはゾンビですか／KA`、北電子。
   - confidence: `ANALYSIS_HIGH`

8. pacnk — パチスロ これはゾンビですか？設定判別ツール
   - https://pacnk.com/slot/tools/sh_korehazombidesuka.html
   - 設定1/2/4/6、ボーナス合算、設定別機械割、各ボーナス確率の後年照合。
   - confidence: `ANALYSIS_SINGLE`
