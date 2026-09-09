# No.1167 パチスロ烈火の炎 Flame of Recca

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ烈火の炎 Flame of Recca
- manufacturer: ニューギン
- releaseDateCanonical: 2018-01-22
- generation: 5.9号機
- systemType: A+RT+ART / 技術介入 / 4段階設定
- formalModelName: `烈火の炎Z`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- collectedAt: 2026-09-10

## releaseDateEvidence
- パチ7、パチビー、ちょんぼりすた、すろぱちくえすとが2018-01-22導入で一致。
- 2017-11-24の事前業界系資料では納品開始予定日2018-01-21とされ、翌1/22ホール導入と整合。
- 型式は複数資料で`烈火の炎Z`を確認。検定番号は型式名・ニューギン・検定/7S等へ検索語を変えて再探索したが直接固定できず推測しない。

## performanceCore

### settingStructure
- settings: 1 / 2 / 5 / 6（4段階）

### payoutRateBySetting
#### marketPublished
- setting1: 97.7%
- setting2: 100.0%
- setting5: 103.3%
- setting6: 106.3%

#### fullStrategy
- setting1: 99.6%
- setting2: 100.2%
- setting5: 105.8%
- setting6: 108.9%
- 技術介入機のため通常掲載値とフル攻略値を分離して保持。

### bigBonusCombinedBySetting
- setting1: 1/302.0
- setting2: 1/288.7
- setting5: 1/261.1
- setting6: 1/249.2

### regularBonusCombinedBySetting
- setting1: 1/809.1
- setting2: 1/728.2
- setting5: 1/601.2
- setting6: 1/492.8

### bonusCombinedBySetting
- setting1: 1/219.9
- setting2: 1/206.7
- setting5: 1/182.0
- setting6: 1/165.5

### initialHitBySetting
- SP-ART「超烈火ターン」初当たり: 約1/6526（全設定共通として解析掲載）
- 出玉の主体はリアルボーナス+RTであり、通常比較用の主要初当たりは上記ボーナス合算をcanonicalにする。

### baseGamesPer50
- 約34.0〜35.7G/50枚
- 複数解析で約34G、事前スペックで34.0〜35.7G。

### netIncrease
- RT「烈火ターン/紅麗ターン」: 約0.3枚/G
- SP-ART「超烈火ターン」: 約0.3枚/G

### basicPayout
- 火竜BIG: 約255枚
- 魔導具BIG: 約255枚
- 合成火竜ZONE: 平均111枚（技術介入時最大208枚の解析あり）
- REGULAR BONUS: 80枚

### ceiling
- `NONE`
- ゲーム数天井非搭載。

## modeSpecificMinimumData
- RT「烈火ターン」: 20G / 50G / 次回ボーナスまで。
- RT「紅麗ターン」: 転落条件成立まで。烈火ターンとのループ率は約66%。
- SP-ART「超烈火ターン」: 最大1500G、純増約0.3枚/G。ボーナス中もゲーム数を含み、途中ボーナスで終了しない。
- SP-ART突入率は約1/6500級（解析では1/6526）。

## resetBehavior

### settingChangeBehavior
- ゲーム数天井非搭載のため天井ゲーム数リセットは`NOT_APPLICABLE_NO_CEILING`。
- 本機専用の当時朝一表では、設定変更時の「内部状態」「ステージ」はいずれも調査中のまま掲載。
- 型式`烈火の炎Z`、ニューギン、設定変更/リセット/朝一/据え置き/電源OFF ON/RT/ガックン/有利区間へ検索語を変えて再探索したが、設定変更時のRT内部状態・開始ステージを直接固定できる資料は確認できず`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- ゲーム数天井非搭載のため前日ハマリG数の持越し狙いは`NOT_APPLICABLE_NO_CEILING`。
- 据え置き時のRT状態、SP-ART状態、開始ステージについて本機固有の直接契約を固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 規格一般論や他ニューギン機の挙動は転記しない。

### powerCycleBehavior
- 純電源OFF→ON時について、当時朝一表は「内部状態」「ステージ」とも調査中。
- RT/SP-ART内部状態の電断保持/非保持を本機固有資料で固定できず`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- 天国等のゲーム数モードは`NONE_CONFIRMED_AFTER_RESEARCH`。
- RT/ART内部状態の設定変更専用振り分けは`UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き時: `UNVERIFIED_AFTER_RESEARCH`
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`

### advantageousSectionReset
- 5.9号機でSP-ART「超烈火ターン」が最大1500G（ボーナス消化Gを含む）として有利区間制約と結び付くことは複数資料で確認。
- 設定変更/据え置き/純電断ごとの有利区間リセット・保持を本機固有の朝一資料では固定できず`UNVERIFIED_AFTER_RESEARCH_AS_MACHINE_SPECIFIC_CONTRACT`。
- 規則一般論だけで本機の朝一挙動を補完しない。

### resetBenefits
- 天井短縮: `NOT_APPLICABLE_NO_CEILING`
- 朝一専用高確、RT優遇、ART初当たり優遇: `NONE_CONFIRMED_AFTER_RESEARCH`
- 公開された設定変更専用の比較可能な恩恵数値は確認できず。

### resetPenalties
- 設定変更固有の主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetDetection
- 本機固有のガックン発生条件/確率、変更時初期出目、ランプ、ステージによる決定的変更判別は、表記揺れ・型式・メーカー・朝一/設定変更/据え置き/電断へ検索語を変えて再探索後も固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 当時朝一表でも開始ステージは設定変更/電源OFF→ONとも調査中のため、ステージ判別を推測で追加しない。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitProbability: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更時だけ適用されるモード振り分け・短縮天井・初当たり/CZ当選率などの公開朝一数値は、再探索後も`NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時のSP-ART初当たり約1/6526は朝一専用値ではないためnumericResetDataには流用しない。

## conflicts
- systemTypeは資料により「ノーマル+RT」「A+RT+ART」と表記差がある。本機はリアルボーナス+RTに加え押し順ナビを伴う1500G SP-ART「超烈火ターン」を搭載するため、DBでは`A+RT+ART`をcanonicalとし、単純なノーマル+RT表記は簡略分類として扱う。
- スペック表の「BIG合算」はサイトによって青7合成火竜ZONEをBIG側へ含める定義が異なる。DBでは比較用に公開される全BIG合算1/302.0→1/249.2と全ボーナス合算1/219.9→1/165.5を分離保持し、個別内部定義を混ぜない。

## sources
取得日: 2026-09-10

1. パチ7 — パチスロ烈火の炎 Flame of Recca
   - https://pachiseven.jp/machines/5347/cutout/14
   - 導入2018-01-22、ニューギン、ノーマル+RT表記、天井なし、RT20G/50G/次回ボーナス、純増約0.3枚/G。
   - confidence: `ANALYSIS_HIGH`

2. パチビー — パチスロ烈火の炎
   - https://www.pachibee.jp/machines/lecture/217110000
   - 導入2018-01-22、ニューギン、5.9号機、RT/ART、純増約0.3枚/G、ゲーム性確認。
   - confidence: `INDUSTRY`

3. ちょんぼりすた — 烈火の炎
   - https://chonborista.com/slot/newgin-slot/51280/
   - 導入2018-01-22、A+RT+ART、5.9号機、約34G/50枚、天井なし、ボーナス/RT/ART性能。朝一表は設定変更・電源OFF→ONとも内部状態/ステージを「調査中」と掲載。
   - confidence: `ANALYSIS_HIGH`

4. すろぱちくえすと — 烈火の炎
   - https://www.slopachi-quest.com/article/flame-of-rekka/
   - 導入2018-01-22、設定1/2/5/6、通常/フル攻略機械割、BIG/REG/ボーナス合算、34.0〜35.7G/50枚、RT/ART純増、各ボーナス獲得、ART初当たり約1/6526。
   - confidence: `ANALYSIS_HIGH`

5. P-WORLD — パチスロ烈火の炎
   - https://www.p-world.co.jp/machine/database/8552
   - ニューギン、ボーナス獲得枚数、RT約66%ループ、SP-ART最大1500G/約0.3枚/G。
   - confidence: `INDUSTRY`

6. スロパチネット — 烈火の炎 スペック
   - https://slopachi-net.com/rekkanohono
   - 型式`烈火の炎Z`、ニューギン、A+RT+ART、天井非搭載、各基本獲得性能。
   - confidence: `ANALYSIS_SINGLE`

7. パスログ — ニューギン烈火の炎事前情報
   - https://slotlog.net/archives/27302581.html
   - 2017-11-24掲載。型式`パチスロ烈火の炎Z`、納品開始予定2018-01-21、ボーナス合算/出率、34.0〜35.7G/50枚、SP-ART約1/6500・1500G。
   - confidence: `INDUSTRY_SECONDARY_ARCHIVE`

8. すろ・ぱち(解) — スロット検定通過情報
   - https://kaiseki.sulopachinews.com/archives/2352
   - `烈火の炎Z（ニューギン）`の検定通過型式確認。
   - confidence: `ANALYSIS_SINGLE_ARCHIVE`

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更時RT/ART内部状態・開始ステージ: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き時RT/ART内部状態・開始ステージ: `UNVERIFIED_AFTER_RESEARCH`
- 純電源OFF→ON時RT/ART内部状態・開始ステージ: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`
- 本機固有ガックン/確定的変更判別: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更/純電断ごとの有利区間保持契約: `UNVERIFIED_AFTER_RESEARCH_AS_MACHINE_SPECIFIC_CONTRACT`

## qualityNotes
- 朝一表が「調査中」の項目を規格一般論で埋めない。
- 5.9号機の有利区間一般仕様と、本機固有の設定変更/純電断契約を分離する。
- 通常モード移行や演出示唆など、物差し作成に不要な詳細内部抽選は収集しない。
