# No.1186 パチスロ 不二子 TYPE A+

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ 不二子 TYPE A+
- manufacturer: オリンピア
- releaseDateCanonical: 2018-04-16
- generation: 5.9号機 / 5号機
- systemType: A+RT / 技術介入 / 枚数変動型BIG
- formalModelName: `ルパン三世不二子Type-A＋／G6`
- certificationNumber: `7S1296`
- settings: `1 / 4 / 6`（3段階）
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、K-Navi、ちょんぼりすた、当時業界関係者資料がホール導入2018-04-16で一致。
- パチビーの一部機種動画ページは2018-04-09とするため `CONFLICT_RELEASE_DATE_2018_04_09_VS_2018_04_16` として保持。
- 型式・検定番号付きHAZUSEおよび複数導入資料の一致を優先し、releaseDateCanonicalは2018-04-16。

## performanceCore

### payoutRateBySetting
通常:
- setting1: 97.9%
- setting4: 100.8%
- setting6: 108.0%

完全攻略時:
- setting1: 100.1%
- setting4: 104.5%
- setting6: 108.1%

### initialHitBySetting
S-BIG:
- setting1: 1/1927.5
- setting4: 1/1285.0
- setting6: 1/1771.2

N-BIG合算:
- setting1: 1/399.6
- setting4: 1/407.1
- setting6: 1/360.1

BIG合算（S-BIG含む）:
- setting1: 1/331.0
- setting4: 1/309.1
- setting6: 1/299.3

REG:
- setting1: 1/390.1
- setting4: 1/374.5
- setting6: 1/321.3

ボーナス合算:
- setting1: 1/179.1
- setting4: 1/169.3
- setting6: 1/154.9

### baseGamesPer50
- 約34〜37G/50枚。

### netIncrease
- RT純増の比較可能な数値は `UNVERIFIED_AFTER_RESEARCH`。
- RT「不二子TIME」は基本30G+α。

### basicPayout
- SUPER BIG BONUS: 最大402枚 + RT30G以上。
- BIG BONUS: 平均約350枚 + RTチャレンジ5G。
- REGULAR BONUS: 最大103枚 + RTチャレンジ1G。

### ceiling
- 天井非搭載。

## modeSpecificMinimumData
- BIG/REG後はRTチャレンジ。BIG後5G、REG後1G。
- RTチャレンジ成功時は30GのRT「不二子TIME」。解析資料ではBIG後RT突入期待度約67%、REG後約20%。
- S-BIG後はRTへ直接突入し、特殊リプレイ成立時に残り30Gへ再セットする可能性あり。

## resetBehavior

### settingChangeBehavior
- 天井非搭載のため天井ゲーム数RESETは `NOT_APPLICABLE`。
- 設定変更時のRT状態/残G、演出モード、成立済みボーナス、開始ステージ等について、本機固有の直接比較資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時のRT状態/残G・演出モード等を設定変更/純電断と分離した直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- 天井は非搭載。

### powerCycleBehavior
- 電源OFF→ON時のRT状態/残G・演出モード等の本機固有直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- RT remaining games on settingChange/carryOver/powerCycle: `UNVERIFIED_AFTER_RESEARCH`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- reset-specific morning mode: `NONE_CONFIRMED_AFTER_RESEARCH`
- reset-specific distribution: `UNVERIFIED_AFTER_RESEARCH`

### stateAfterReset
- RT state: `UNVERIFIED_AFTER_RESEARCH`
- internal morning state: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- 5.9号機だが、本機固有の設定変更/据え置き/純電断時の有利区間状態・ランプ契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般論から推測転記しない。

### resetBenefits
- 短縮天井: `NOT_APPLICABLE_NO_CEILING`
- 朝一専用の主要恩恵: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetPenalties
- 設定変更専用の主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetDetection
- 本機固有のガックン、初期出目、ランプ、RT状態を用いた変更判別は、表記揺れ/型式/メーカー/シリーズ名と「設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・RT状態」を変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetBenefitProbability: `UNVERIFIED_AFTER_RESEARCH`
- gakkunChangeDetectionProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更専用の初当たり率、RT開始率、朝一専用状態振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 通常のRTチャレンジ期待度（BIG後約67%、REG後約20%）は朝一専用値ではないため分離。

## conflicts
- `CONFLICT_RELEASE_DATE_2018_04_09_VS_2018_04_16`: パチビー一部ページは2018-04-09、HAZUSE/K-Navi/ちょんぼりすた/当時資料は2018-04-16。canonicalは2018-04-16。
- 通常機械割と完全攻略時機械割は定義差でありCONFLICTではない。

## missingFields
- RT純増/G: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更/据え置き/純電断時のRT状態契約: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有有利区間リセット契約: `UNVERIFIED_AFTER_RESEARCH`
- ガックン/初期出目等の変更判別: `UNVERIFIED_AFTER_RESEARCH`
- 朝一専用公開数値: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. HAZUSE — パチスロ 不二子TYPE A+
   - https://hazuse.com/machine/pachislot/7S1296/
   - 型式、検定番号、導入日、設定別確率、機械割、獲得枚数、RT構造、天井非搭載。
   - confidence: `ANALYSIS_HIGH`
2. K-Navi — 不二子 TYPE A+
   - https://p-kn.com/slot/2971/
   - 導入2018-04-16、オリンピア、BIG/REG/合算。
   - confidence: `ANALYSIS_HIGH`
3. ちょんぼりすた — 不二子TYPE-A+
   - https://chonborista.com/slot/orinpia-slot/53821/
   - 導入、A+RT、約34〜37G/50枚、設定別性能、獲得枚数、天井非搭載。
   - confidence: `ANALYSIS_HIGH`
4. P-WORLD — 不二子 TYPE A+
   - https://www.p-world.co.jp/machine/database/8589
   - メーカー、RT/CZ/技術介入、基本獲得性能、RT30G+α。
   - confidence: `ANALYSIS_HIGH`
5. P-WORLD/グリーンべると — 平和の新発想「Type-A+」が初お披露目
   - https://news.p-world.co.jp/articles/9916/greenbelt
   - 2018-02-14内覧会、オリンピア製、Type-A+の業界一次寄り資料。
   - confidence: `INDUSTRY`
6. パチビー — 不二子 TYPE A+ 動画ページ
   - https://www.pachibee.jp/movies/index/14439
   - 2018-04-09表記。releaseDate conflict根拠。
   - confidence: `ANALYSIS_HIGH`
