# No.1169 ニューラッキージャックポット 7ver.

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ニューラッキージャックポット 7ver.
- manufacturer: 岡崎産業
- releaseDateCanonical: 2018-01-22
- generation: 5号機
- systemType: A+RT / 技術介入
- formalModelName: `ニューラッキージャックポット／N1`
- certificationNumber: `7S0919`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、ちょんぼりすた、すろぱちくえすとが2018-01-22導入で一致。
- HAZUSEで型式`ニューラッキージャックポット／N1`、検定番号`7S0919`、メーカー岡崎産業を直接確認。

## performanceCore

### payoutRateBySetting
- setting1: 97.7%
- setting2: 98.6%
- setting3: 100.0%
- setting4: 102.6%
- setting5: 105.2%
- setting6: 110.9%

### bigBonusBySetting
- setting1: 1/296.5
- setting2: 1/291.2
- setting3: 1/286.2
- setting4: 1/275.4
- setting5: 1/264.3
- setting6: 1/239.2

### regularBonusBySetting
- setting1: 1/378.8
- setting2: 1/366.1
- setting3: 1/352.3
- setting4: 1/304.8
- setting5: 1/280.0
- setting6: 1/239.2

### bonusCombinedBySetting
- setting1: 1/166.3
- setting2: 1/162.2
- setting3: 1/157.9
- setting4: 1/144.6
- setting5: 1/136.0
- setting6: 1/119.6

### baseGamesPer50
- 約36G/50枚

### netIncrease
- RT「JACKPOT TIME」: 公開純増値を今回の複数資料から直接固定できず`UNVERIFIED_AFTER_RESEARCH`

### basicPayout
- BIG: 300枚
- REG: 最大107枚
- HAZUSE配当はBB336枚超払出終了、RB111枚超払出終了。実獲得はHAZUSE/P-WORLD/解析で300枚・最大107枚が一致。

### ceiling
- `NONE`

## modeSpecificMinimumData
- BIG終了後は必ず30GのRT「JACKPOT TIME」へ突入。
- 主にボーナスで出玉を増やすA+RT機。
- REG中は1回の技術介入で最大107枚獲得。

## resetBehavior

### settingChangeBehavior
- 天井非搭載のためゲーム数天井は`NOT_APPLICABLE_NO_CEILING`。
- 設定変更時のRT内部状態、開始ステージ/液晶状態を本機固有資料で直接固定できず`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 天井非搭載のため前日ゲーム数持越し狙いは`NOT_APPLICABLE_NO_CEILING`。
- 据え置き時のRT状態・液晶状態について本機固有の直接契約を確認できず`UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON時のRT状態・液晶状態を本機固有資料で固定できず`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 他岡崎産業機や一般A+RT機の挙動は転記しない。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- 天国等のゲーム数モード: `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`

### stateAfterReset
- RT内部状態の設定変更/据え置き/純電断契約: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- 公開ゲーム性はリアルボーナス+30G RTであり、朝一客AI用に意味のある有利区間恩恵/判別契約は確認されない。

### resetBenefits
- 天井短縮: `NOT_APPLICABLE_NO_CEILING`
- 朝一高確/モード優遇/初当たり優遇: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetPenalties
- 設定変更固有の主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetDetection
- 本機固有のガックン発生条件/確率、初期出目、7セグ、ランプ、RT状態による決定的変更判別を、機種名/型式/メーカー/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等へ検索語変更して再探索したが固定できず`UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitProbability: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更時だけ適用されるモード振り分け、短縮天井、初当たり率、RT優遇率などの公開朝一数値は再探索後も`NONE_CONFIRMED_AFTER_RESEARCH`。
- BIG中JACやREG中星/UFOは設定推測要素だが、設定変更専用挙動としては確認できないためresetBehavior numeric値へは流用しない。

## conflicts
- 特筆すべき性能コア競合は今回確認されず。
- RT純増値は検索結果中に明確な本機固有数値を固定できなかったため、一般的なA+RT値から推測せず欠損保持。

## sources
取得日: 2026-09-10

1. HAZUSE — ニューラッキージャックポット 7ver.
   - https://hazuse.com/machine/pachislot/7S0919/
   - 導入2018-01-22、岡崎産業、型式`ニューラッキージャックポット／N1`、検定番号`7S0919`、設定別BIG/REG/合算、約36G/50枚、機械割、BIG300枚/REG最大107枚、BIG後RT30G、天井なし。
   - confidence: `ANALYSIS_HIGH`

2. HAZUSE — 基本スペック
   - https://hazuse.com/machine/pachislot/7S0919/genre/201/
   - 設定別PAY OUT、配当表。
   - confidence: `ANALYSIS_HIGH`

3. ちょんぼりすた — ニューラッキージャックポット 7ver.
   - https://chonborista.com/slot/okazaki-slot/51932/
   - 導入2018-01-22、岡崎産業、A+RT、36G/50枚、天井なし、設定別BIG/REG/合算/出玉率。
   - confidence: `ANALYSIS_HIGH`

4. すろぱちくえすと — ニューラッキージャックポット 7ver.
   - https://www.slopachi-quest.com/article/new-luckyjackpot-7ver/
   - 導入2018-01-22、天井非搭載、設定別解析、REG技術介入。
   - confidence: `ANALYSIS_HIGH`

5. P-WORLD — ニューラッキージャックポット7Ver.
   - https://www.p-world.co.jp/machine/database/8563
   - BIG300枚、REG最大107枚、BIG終了後30G RT。
   - confidence: `INDUSTRY`

## missingFields
- RT純増/G: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更/据え置き/純電断時RT状態: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有ガックン/確定変更判別: `UNVERIFIED_AFTER_RESEARCH`

## qualityNotes
- 天井非搭載A+RT機なので存在しない朝一天井恩恵を作らない。
- BIG後30G RTは通常ゲーム性として確認済みだが、その最中の設定変更/電断挙動は機種固有資料がないため一般論で補完しない。
