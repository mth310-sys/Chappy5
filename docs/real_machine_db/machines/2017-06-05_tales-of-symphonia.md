machineName: パチスロ テイルズ オブ シンフォニア
manufacturer: 北電子
releaseDate: 2017-06-05
recordNumber: 1086
generation: 5号機 / 5.5号機
systemType: A+ART / リアルボーナス併用 / CZ
formalModelName: テイルズオブシンフォニア／KP
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 導入日は2017-06-05。北電子機。
- 型式名は複数の実機流通資料で `テイルズオブシンフォニア/KP` を確認。
- 検定番号は今回の公開検索範囲では直接固定できず、推測補完しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY_EXCEPT_CERTIFICATION

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.5%|
|2|98.8%|
|3|100.3%|
|4|102.7%|
|5|105.3%|
|6|110.4%|
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
|設定|ART初当たり|
|---:|---:|
|1|1/336.2|
|2|1/327.4|
|3|1/303.2|
|4|1/298.7|
|5|1/274.9|
|6|1/257.2|

### ボーナス合算
|設定|ボーナス合算|
|---:|---:|
|1|1/541.6|
|2|1/516.0|
|3|1/516.0|
|4|1/481.9|
|5|1/481.9|
|6|1/445.8|
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約37G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「シンフォニアラッシュ」: 約1.5枚/G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- UNISON BONUS（赤7ダブル）: 約200枚。
- TALES OF BONUS（白7）: 約150枚。
- TALES OF BONUS（赤7シングル）: 約100枚。
- ART「シンフォニアラッシュ」: 1セット30G+α、ゲーム数上乗せ+セットストック型。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はレア役等からCZ/ART直撃/シンフォニアエピソードを抽選。
- 内部状態は通常 / 高確 / 超高確の3段階。
- 天井はボーナス・ART・CZ間967G+最大前兆32G（実質999G付近）。到達時はART2セット確定とする当時解析が一致。
- CZでも天井進捗がリセットされる点を通常のART間999G型と区別する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_TABLE_AND_REMAINING_UNVERIFIED_FIELDS
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井: RESET。
- 内部状態: RESET / RESELECT。
- 開始ステージ: イセリア。
- 通常時ゲーム数進捗は設定変更でリセットされる。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### carryOverBehavior
- 据え置き時は設定変更処理を伴わないため、天井進捗・内部状態は基本的に継続契約として扱うが、本機固有の独立据え置き比較表は今回の取得範囲で弱い。
- 一般的5号機挙動だけから追加の細部を推測しない。
reliability: ANALYSIS_MEDIUM_DERIVED_FROM_DIRECT_POWER_CYCLE_AND_RESET_TABLE

### powerCycleBehavior
- 電源OFF→ONのみ: 天井CARRYOVER。
- 内部状態: CARRYOVER。
- 復帰ステージ: 当時解析では調査中で、固定しない。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### gameCounterReset
- settingChange: RESET。
- carryOver: CARRYOVER相当。
- powerOffOn: CARRYOVER。
- 天井カウンタはボーナス・ART・CZでもリセットされる通常契約。

### ceilingAfterReset
- standardCeiling: ボーナス・ART・CZ間967G+前兆32G、実質999G付近。
- resetCeiling: 設定変更専用短縮天井はNONE_CONFIRMED_AFTER_RESEARCH。
- 天井恩恵: ART2セット確定。

### modeAfterReset
- 設定変更専用モード振り分け・モード移行率: NONE_CONFIRMED_AFTER_RESEARCH。

### stateAfterReset
- settingChange: 通常/高確/超高確の内部状態をRESET/RESELECT。
- powerOffOn: CARRYOVER。
- 設定変更時の各状態振り分け数値は今回固定できず。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更専用の短縮天井・確定高確・公開朝一当選率などの固定恩恵はNONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties
- 設定変更固有の公開冷遇・不利抽選はNONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 設定変更時はイセリア開始。
- 電源OFF→ON時のステージは当時資料で調査中のため、ステージ単独の確定変更判別契約は固定しない。
- 本機固有の確定ガックン/初期出目による変更判別は再探索後もUNVERIFIED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_RESET_START_STAGE; UNVERIFIED_FOR_DETERMINISTIC_CLUES

### numericResetData
- resetSpecificShortCeiling: NONE_CONFIRMED。
- resetModeDistribution: NONE_CONFIRMED。
- resetHighStateDistribution: NONE_CONFIRMED。
- publicMorningHitRate: NONE_CONFIRMED。

## conflicts
- 天井表現は「999G」と「967G+前兆32G」が併存するが、実質到達地点を丸めた表現差として扱い、数値競合にはしない。
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for core yardstick values.

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- power-cycle return stage: UNVERIFIED / contemporary source marked under investigation
- deterministic gakkun / initial-reel reset clue: UNVERIFIED_AFTER_RESEARCH
- setting-change internal-state distribution percentages: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. ちょんぼりすた — テイルズオブシンフォニア 新台解析
   - https://chonborista.com/slot/kitadenshi/36289/
   - 導入日、設定別機械割/初当たり、37G/50枚、ART純増、天井、設定変更/電断比較、内部状態
2. すろぱちくえすと — テイルズオブシンフォニア 解析攻略まとめ
   - https://www.slopachi-quest.com/article/tales-of-symphonia/
   - 967G+前兆32G天井、ART2セット、CZでも天井リセット
3. P-WORLD — パチスロ テイルズ オブ シンフォニア
   - https://www.p-world.co.jp/machine/database/8354
   - 北電子、5号機A+ART、ART約1.5枚/G、ボーナス獲得枚数、ART30G+α
4. グリーンべると/P-WORLD業界ニュース — 北電子、パチスロ3機種を同時発表（2017-04-10）
   - https://news.p-world.co.jp/articles/9194/greenbelt
   - 北電子による当時発表確認
5. 中一商事 / 楽天市場 — 中古実機情報
   - https://www.nakaiti.com/html/sKitadenshi096.html
   - https://item.rakuten.co.jp/auc-nakaiti/teruzu/
   - 型式名 `テイルズオブシンフォニア/KP`、5号機ART、基本仕様
