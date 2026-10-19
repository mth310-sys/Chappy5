# Lパチスロ ありふれた職業で世界最強

recordNo: 1706
machineName: Lパチスロ ありふれた職業で世界最強
aliases: スマスロ ありふれた職業で世界最強 / あり職 / ありふれた
manufacturer: SANKYO（販売・ブランド） / ジェイビー（製造）
formalModel: Lありふれた職業で世界最強jA
inspectionCode: 4S1365
releaseDate: 2025-02-03
generation: 6.5号機 / スマスロ / AT
systemType: 擬似ボーナス + CZ + ゲーム数上乗せAT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- SANKYO公式機種サイト/オンライン博物館で本機を確認。公式コレクションは導入年月2025.02、販売名・型式名 `Lありふれた職業で世界最強jA` を掲載。
- P-WORLD業界ニュース（Amusement Japan）で2024-11-15発表、ホール導入予定日2025-02-03を確認。
- HAZUSEで型式 `Lありふれた職業で世界最強jA`、検定番号 `4S1365`、導入開始日2025-02-03を確認。
- 6確、1geki、K-Naviも2025-02-03導入で一致。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 99.0%
- setting3: 101.3%
- setting4: 105.8%
- setting5: 110.6%
- setting6: 114.9%
myuBonusInitialHitBySetting:
- setting1: 1/523
- setting2: 1/513
- setting3: 1/497
- setting4: 1/471
- setting5: 1/455
- setting6: 1/420
atInitialHitBySetting:
- setting1: 1/395
- setting2: 1/382
- setting3: 1/360
- setting4: 1/323
- setting5: 1/301
- setting6: 1/268
initialHitCombinedBySetting:
- setting1: 1/251
- setting2: 1/245
- setting3: 1/235
- setting4: 1/220
- setting5: 1/212
- setting6: 1/196
baseGamesPer50: 約33.3G/50枚
netIncrease:
- 大迷宮RUSH: 約2.7枚/G
- 神大迷宮RUSH（上位AT）: 約5.0枚/G
basicPayout:
- ミュウボーナス: ベルナビ7回発生まで継続する擬似ボーナス。開始時・消化中にAT抽選。
- 大迷宮RUSH: 初期50G+α、純増約2.7枚/G。
- 神大迷宮RUSH: 初期100G+α、純増約5.0枚/G。終了後は覚醒チャレンジへ。
confidence: OFFICIAL_FOR_AT_STRUCTURE + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常のAT間ゲーム数天井は968G消化+最大32G前兆（表記上最大1000G+α相当）でAT当選。
- 設定変更時は最大668G消化+最大32G前兆（一般表記最大700G）へ短縮。
- ミュウボーナスはAT間ゲーム数をリセットしない。
- AT間でミュウボーナスを最大4回連続スルーすると5回目でAT当選。スルー天井は2/3/4スルー振り分けが存在する。
- 内部モードは通常/天国。天国は100G天井で、到達時は約9割AT・約1割ミュウボーナス。
- CZモードはA/B/Cの3種類。規定G数（100/300/500/700/900G）のCZ抽選を管理。
- 内部状態は通常/高確/引鉄高確。
- 有利区間リセット契機は設定変更時、エンディング終了時、覚醒チャレンジ移行時の一部。通常遊技由来の有利区間リセット後は覚醒チャレンジ恩恵があるが、設定変更時は除外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PUBLIC_RESET_DISTRIBUTIONS_AND_DIRECT_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- 天井: RESET。最大1000G表記から最大700G表記へ短縮（実消化基準968G+前兆 → 668G+前兆）。
- 内部状態: RESET / 再抽選。高確スタート抽選あり。
- 内部モード: RESET / 再抽選。天国移行抽選あり。
- CZモード: RESET / 再抽選。A/B/Cを再振り分け。
- 液晶G数: 0G表示。ただし内部ゲーム数加算抽選あり。
- 設定変更後1G目のレア小役では次回初当たりをATへ昇格させる専用抽選が行われる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_DIRECT_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 天井、内部状態、有利区間、内部モード、CZモードを引き継ぐ。
- 液晶G数は0G表示になるが内部ゲーム数は引き継ぐ。
- なな徹の設定変更/据え置き比較表で直接確認。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### powerCycleBehavior
- 純電源OFF→ON: 天井を引き継ぐ。
- 内部状態を引き継ぐ。
- ちょんぼりすたの機種別「設定変更時 / 電源OFF→ON時」比較表で直接確認。
- 電源OFF→ON時の開始ステージは主要解析で調査中。
- 純電源OFF→ON時の内部モード/CZモード/有利区間については、一般論では補完せず、今回の直接比較で独立固定できなかったため `UNVERIFIED_AFTER_RESEARCH`。据え置き契約では引継ぎが確認できるが、純電断欄として別管理する。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_MODE_CZMODE_ADVANTAGEOUS_SECTION

### gameCounterReset
- 設定変更: RESET + 内部ゲーム数加算抽選。
- 据え置き: CARRY_OVER（液晶は0G表示）。
- 電源OFF→ON: CARRY_OVER。
- ボーナス/CZではAT間天井ゲーム数はリセットされない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 968G+最大32G前兆（一般表記 最大1000G+α）
resetCeiling: 668G+最大32G前兆（一般表記 最大700G+α）
bonusThroughCeiling: AT間ミュウボーナス最大4スルー後、5回目でAT当選
- 6確、なな徹、1geki、ちょんぼりすた、必勝本で設定変更時700G表記短縮が一致。
- 必勝本はより厳密に通常968G、設定変更668G+最大32G前兆と記載。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 内部モード（通常/天国）は設定変更で再抽選。
- 設定変更時の天国移行率:
  - setting1: 約15%
  - setting2: 約16%
  - setting3: 約19%
  - setting4: 約20%
  - setting5: 約21%
  - setting6: 約22%
- CZモード設定変更時振り分け:
  - modeA: 約25%
  - modeB: 約45%
  - modeC: 約30%
- よって設定変更時はCZモードB以上が約75%。
- 据え置きは内部モード/CZモードを引き継ぐ。
- 純電断時の両モードは `UNVERIFIED_AFTER_RESEARCH`（据え置きと同一と推測して固定しない）。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### stateAfterReset
- 設定変更: RESET後、高確スタート抽選。
- 設定変更時の高確移行率:
  - setting1: 約13%
  - setting2: 約14%
  - setting3: 約16%
  - setting4: 約18%
  - setting5: 約21%
  - setting6: 約23%
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_PUBLIC_NUMERIC_DIRECT

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 機種固有の独立した直接記載を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常遊技中の有利区間リセット後は覚醒チャレンジへ移行する恩恵があるが、なな徹は **設定変更時を除く** と明記。朝一設定変更だけで覚醒チャレンジへ入るとは扱わない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_PURE_POWER_CYCLE

### resetBenefits
- 天井最大1000G表記 → 最大700G表記へ短縮。
- 内部ゲーム数加算抽選。
- 天国移行抽選があり、高設定ほど優遇（約15～22%）。
- CZモードB以上が約75%（B約45% + C約30%）。
- 高確スタート抽選があり、高設定ほど優遇（約13～23%）。
- 設定変更後1G目の弱レア小役で次回初当たりAT昇格約34%、強レア小役で100%。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### resetPenalties
- 据え置きで保持される天井進行・内部状態・内部モード・CZモード・有利区間は設定変更で初期化されるため、前日有利状態や進行を失う可能性がある。
- 通常遊技由来の有利区間リセット恩恵「覚醒チャレンジ」は設定変更時には適用されない。
- 設定変更固有の数値化された不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_LOSS / PUBLIC_VALUE_NOT_FOUND_FOR_RATE

### resetDetection
- 据え置き時は朝一10G+α（1G目除く）の間、強チェリー/強チャンス目成立でもフェイク前兆へ移行しないという機種固有特徴が公開されている。
- したがって朝一早いG数で強レア小役→フェイク前兆へ移行した場合は設定変更濃厚の判別材料。
- 設定変更時は高確移行抽選があるため、早い段階で「魔力駆動四輪ブリーゼ」ステージへ移行すればリセット期待度が上がるが確定材料ではない。
- 液晶G数は設定変更/据え置きとも0G表示のため、表示値単独では判別不可。
- 本機固有のリールガックン条件・発生率は、機種名/型式/SANKYO/JBと「ガックン/設定変更/リセット/朝一」を組み替え、主要解析・旧DB系まで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_FOREWARNING_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 968G+最大32G前兆 / 一般表記最大1000G
resetCeiling: 668G+最大32G前兆 / 一般表記最大700G
resetHeavenModeRateBySetting: 15 / 16 / 19 / 20 / 21 / 22%
resetCZModeDistribution: A約25% / B約45% / C約30%
resetCZModeBOrHigher: 約75%
resetHighStateRateBySetting: 13 / 14 / 16 / 18 / 21 / 23%
resetFirstGameWeakRareATUpgrade: 約34%
resetFirstGameStrongRareATUpgrade: 100%
internalGameAddition: あり / concreteRange=PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
powerCycleStage: UNVERIFIED_AFTER_RESEARCH
purePowerCycleInternalMode: UNVERIFIED_AFTER_RESEARCH
purePowerCycleCZMode: UNVERIFIED_AFTER_RESEARCH
purePowerCycleAdvantageousSection: UNVERIFIED_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更後天井: 最大700G表記（668G+最大32G前兆）。
- 天国移行率: 設定1約15% / 2約16% / 3約19% / 4約20% / 5約21% / 6約22%。
- CZモード: A約25% / B約45% / C約30%（B以上約75%）。
- 高確移行率: 設定1約13% / 2約14% / 3約16% / 4約18% / 5約21% / 6約23%。
- 設定変更後1G目レア小役のAT昇格: 弱レア約34% / 強レア100%。

## conflicts
- `CEILING_WORDING_ONLY`: 「最大1000G/700G」とする一般解析と「968G/668G消化後に最大32G前兆」とする必勝本の差は定義差であり数値競合ではない。DBでは実消化基準と一般表記を併記し平均化しない。
- 現時点で性能コアの主要数値に実質的な競合は確認していない。

## missingFields
- 純電源OFF→ON時の内部モード、CZモード、有利区間の機種固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の開始ステージ: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部ゲーム数ランダム加算の具体範囲/振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更固有の数値化された不利率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- SANKYO公式機種サイト: https://www.sankyo-fever.jp/products/machine_list/sbq/
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/975/
- P-WORLD / Amusement Japan 発表記事: https://news.p-world.co.jp/articles/29576/amusement
- HAZUSE 型式/検定/導入/スペック: https://hazuse.com/machine/pachislot/4S1365/
- 6確 基本スペック/天井: https://www.kaku6.jp/slot/arifureta/
- 1geki 基本スペック/解析: https://1geki.jp/slot/l_arifureta/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/885/27308/
- なな徹 天井: https://nana-press.com/kaiseki/machine/885/27305/
- なな徹 CZモード: https://nana-press.com/kaiseki/machine/885/27312/
- なな徹 AT 大迷宮RUSH: https://nana-press.com/kaiseki/machine/885/27317/
- ちょんぼりすた 設定変更/電源OFF ON比較・スペック: https://chonborista.com/slot/sankyo-slot/226112/
- 必勝本 通常時/天井: https://hisshobon.com/machineinfo/85633/
- 必勝本 有利区間: https://hisshobon.com/machineinfo/85649/
- 必勝本 ミュウボーナス: https://hisshobon.com/machineinfo/85659/
- 必勝本 狙いドコロ: https://hisshobon.com/machineinfo/85609/
- K-Navi 基本スペック: https://p-kn.com/slot/4259/

## confidenceSummary
- release/model: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- core performance: ANALYSIS_HIGH / MULTI_SOURCE_MATCH
- AT structure: OFFICIAL + ANALYSIS_HIGH
- setting change/carry over: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC
- pure power cycle: ANALYSIS_HIGH for ceiling/state; UNVERIFIED for mode/CZ mode/advantageous section
- public morning numeric data: ANALYSIS_HIGH / MULTI_SOURCE_DIRECT
- overall: HIGH_WITH_EXPLICIT_POWER_CYCLE_GAPS
