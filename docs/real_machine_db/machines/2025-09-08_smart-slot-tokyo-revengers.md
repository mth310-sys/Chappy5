# スマスロ 東京リベンジャーズ

recordNo: 1751
machineName: スマスロ 東京リベンジャーズ
aliases: L東京リベンジャーズ / 東リベ / スマスロ東リベ
manufacturer: サミー / Sammy
formalModel: L スマスロ東京リベンジャーズ ZF
inspectionCode: 5S0551 / 0707-123
releaseDate: 2025-09-08
generation: 6.5号機 / スマスロ
systemType: AT / 周期・ポイント / CZ / 擬似ボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- サミー発表を扱う遊技通信/遊技日本は型式 `Lスマスロ東京リベンジャーズZF`、2025-09-08全国導入、AT機であることを掲載。
- グリーンべるとは新潟県公安委員会の検定通過型式 `L スマスロ東京リベンジャーズ ZF` を掲載。
- 一撃は型式、検定番号 `5S0551、0707-123`、導入日2025-09-08を掲載。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.8%
- setting3: 101.4%
- setting4: 106.3%
- setting5: 111.2%
- setting6: 114.9%
initialHitBySetting:
- setting1: 1/282.4
- setting2: 1/279.5
- setting3: 1/272.2
- setting4: 1/255.8
- setting5: 1/249.1
- setting6: 1/240.1
atHitBySetting:
- setting1: 1/482.2
- setting2: 1/474.7
- setting3: 1/456.9
- setting4: 1/414.0
- setting5: 1/393.8
- setting6: 1/373.1
baseGamesPer50: 約32G
netIncrease:
- 東卍RUSH: 約3.2枚/G
- 東卍RUSH BURST: 約8.0枚/G
basicPayout:
- 東卍CHANCE: 20G
- 東卍RUSH: 初期150枚以上
- 東卍RUSH BURST: 初期200枚以上
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は毎ゲーム周期ポイントを獲得し、規定ポイント到達で前兆「決戦前夜」へ。1周期最大500pt、1周期目は最大200pt。
- 周期天井は最大6周期、東卍CHANCE4スルー後の5回目初当りでAT救済。
- AT間ゲーム数天井は通常1190G+α。
- 上位ATは純増約8.0枚/G。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_MULTI_SOURCE_RESET_DATA
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更で有利区間・内部状態・AT間天井・周期/ポイント・モードをRESET/再抽選する解析あり。
- AT間ゲーム数天井は通常1190G+αから900G+αへ短縮。
- 1周期目の規定ポイントは最大200ptとなり、到達で決戦前夜移行濃厚。
- モード移行抽選が優遇され、初当り時のAT期待度もアップする。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは前日までの天井進行、モード、周期ポイントを引き継ぐ扱いが後発解析で確認される。
- 設定変更時の900G天井/朝一モード優遇と対照になるため、前日履歴を用いた据え置き判別が成立する。
confidence: ANALYSIS_HIGH_FOR_GAME_COUNTER_INFERENCE / ANALYSIS_SINGLE_DIRECT_FOR_MODE_AND_POINT_CARRYOVER

### powerCycleBehavior
- 純電源OFF→ONでは天井・内部状態を引き継ぐとの機種別解析があり、別系統後発資料ではモード・周期ポイントも引継ぎと明記。
- 設定変更と純電断を混同しない。
confidence: ANALYSIS_HIGH_SECONDARY_MATCH / DIRECT_POWER_CYCLE_WORDING_AVAILABLE

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
normalAtCeiling: 1190G+α
resetAtCeiling: 900G+α
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalAtCeiling: 1190G+α
resetAtCeiling: 900G+α
firstCyclePointCeilingAfterReset: 最大200pt
normalCycleCeiling: 最大6周期（モード依存）
bonusSkipCeiling: 東卍CHANCE4スルー後、5回目初当りでAT
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモードA/B/チャンス/天国/特殊を再抽選し、高設定ほど天国比率が上昇する公開値がある。
resetModeDistribution:
  setting1: A34.4% / B25.0% / Chance25.0% / Heaven9.4% / Special6.3%
  setting2: A34.4% / B25.0% / Chance25.0% / Heaven9.4% / Special6.3%
  setting3: A28.5% / B25.0% / Chance25.0% / Heaven15.2% / Special6.3%
  setting4: A27.3% / B25.0% / Chance25.0% / Heaven16.4% / Special6.3%
  setting5: A21.1% / B25.0% / Chance25.0% / Heaven22.7% / Special6.3%
  setting6: A18.8% / B25.0% / Chance25.0% / Heaven25.0% / Special6.3%
confidence: ANALYSIS_HIGH / NUMERIC_SECONDARY_DIRECT

### stateAfterReset
- 設定変更では内部状態をRESET/再抽選する解析あり。
- 純電源OFF→ONでは内部状態引継ぎとする機種別後発解析あり。
- 通常時全状態移行テーブルは本DB対象外。
confidence: ANALYSIS_HIGH_SECONDARY

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER_BY_STATIONARY_OPERATION
powerCycle: CARRY_OVER_IN_MACHINE_SPECIFIC_SECONDARY_ANALYSIS
- 設定変更時の有利区間RESETは機種別解析に直接記載。
confidence: ANALYSIS_HIGH_SECONDARY / MULTI_SOURCE_SETTING_CHANGE

### resetBenefits
- AT間天井1190G+α→900G+αへ短縮。
- 1周期目規定ポイント最大200pt。
- モード移行抽選優遇。
- 初当り時AT期待度アップ。
- なな徹はリセット時機械割が設定1でも100%を超える旨を掲載。ただし具体的な公表率は固定せず定性情報として保持。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日の天井進行・周期/ポイント・モードは失われるため、据え置きの宵越し価値は消滅する。
- これ以外の設定変更固有の不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PROGRESS_LOSS / NONE_CONFIRMED_FOR_OTHER_PENALTY

### resetDetection
- 朝一200pt到達で決戦前夜へ移行しなければ据え置き濃厚材料。
- 朝一AT間900G+αを超えてAT天井が発動しなければ据え置き濃厚材料。
- 本機固有ガックン条件・発生率は機種名・型式・`ガックン`・`リール ガックン`で再探索しても高優先資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_POINT_AND_CEILING_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalAtCeiling: 1190G+α
resetAtCeiling: 900G+α
firstCyclePointCeilingAfterReset: 200pt
resetModeDistribution: SEE_modeAfterReset
resetMorningBenefitRate: PUBLIC_MODE_DISTRIBUTION_AVAILABLE / OVERALL_RATE_NOT_FIXED
resetMorningPenaltyRate: NONE_PUBLISHED
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 導入台数は一撃等で約20,000台、業界向けG-netで販売25,000台の記載があるが、本DB必須性能値ではなく販売台数と導入台数の定義も異なるため性能コアへ採用しない。
- 一部二次資料のベース計算文中に34G相当の表現があるが、サミー系業界資料・主要解析は約32G/50枚で一致するためcanonicalは約32G。

## sourceSearchNotes
- resetBehavior再探索語: `スマスロ 東京リベンジャーズ 設定変更 リセット 朝一 天井 据え置き`, `電源OFF`, `電源OFF→ON`, `引き継ぎ`, `周期pt`, `モード`, `ガックン`, `有利区間`, 型式 `L スマスロ東京リベンジャーズ ZF`。
- 資料系統: サミー発表を扱う業界記事、検定通過記事、一撃、なな徹、Altema/PachiRush/6確/スロベース等の機種別解析。
- 朝一客行動に必要なリセット専用モード振り分けは取得したが、通常時全モード移行テーブルは収集対象外。

## sources
retrievedAt: 2026-09-15
- 遊技通信: https://news.p-world.co.jp/articles/31384/yugitsushin
- グリーンべると 検定通過: https://news.p-world.co.jp/articles/31318/greenbelt
- 遊技日本 新機種記事: https://yugi-nippon.com/pachinko-new-machine/post-72094/
- G-net 販売概要: https://g-net-ps.com/info/s0226/
- 一撃: https://1geki.jp/slot/l_tokyo_revengers/
- パチビー: https://www.pachibee.jp/machines/index/225080000
- なな徹 リセット狙い: https://nana-press.com/kaiseki/machine/1014/31678/
- なな徹 周期抽選: https://nana-press.com/kaiseki/machine/1014/31691/
- Altema 天井/朝一: https://altema.jp/pachimo/ltorive
- Altema リセット詳細: https://altema.jp/pachimo/ltorivereset
- PachiRush: https://www.pachirush.jp/slot/revengers-index/
- 6確: https://www.kaku6.jp/slot/revengers/
- スロベース: https://slobase.jp/machines/tokyo-revengers
- スロベース 電源OFF/ON補助: https://slobase.jp/articles/tokyo-revengers-why-losing
