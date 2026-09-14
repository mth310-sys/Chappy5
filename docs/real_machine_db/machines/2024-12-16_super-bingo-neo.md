# Lスーパービンゴネオ

recordNo: 1696
machineName: Lスーパービンゴネオ
aliases: スマスロ スーパービンゴネオ / Ｌスーパービンゴネオ / LスーパービンゴネオSB5
manufacturer: ベルコ
formalModel: LスーパービンゴネオSB5
inspectionCode: 4S0685
releaseDate: 2024-12-16
generation: 6.5号機 / スマスロ
systemType: AT / 継続率・ゲーム数管理AT + 上位差枚AT
settings: 1 / 2 / 4 / 5 / 6 / L
coreStatus: COMPLETE_CORE_WITH_CONFLICT

## releaseAndModelEvidence
- HAZUSEで型式名 `LスーパービンゴネオSB5`、検定番号 `4S0685`、導入開始日2024-12-16、メーカー=ベルコを確認。
- ゼンリン業界向け新機種情報で型式名 `LスーパービンゴネオSB5`、納品開始予定2024-12-15を確認。
- PiDEAの中古遊技機保証書発給停止記事では型式番号を `4S068500` と表記。HAZUSEの検定番号とは表記桁が異なるため、検定番号欄はHAZUSEの `4S0685` を採用し、別制度/表記差として注記保持。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.3%
- setting2: 98.5%
- setting4: 104.3%
- setting5: 108.3%
- setting6: 114.9%
- settingL: PUBLIC_VALUE_NOT_FOUND / デモ状態中は下パネル消灯とされる
initialHitBySetting:
- setting1: AT 1/449.2
- setting2: AT 1/440.4
- setting4: CONFLICT 1/404.5 vs 1/405.5
- setting5: AT 1/387.2
- setting6: AT 1/365.3
- settingL: PUBLIC_VALUE_NOT_FOUND
baseGamesPer50: 約31.4G/50枚（設定1。HAZUSEは設定1～6 約31.4G）
netIncrease: BC 約2.8枚/G / HBC 約5.0枚/G
basicPayout:
- AT「ビンゴチャンス（BC）」: 1セット33G+α / 純増約2.8枚/G / 継続率約50・67・75・80・90%
- 上位AT「ハイパービンゴチャンス（HBC）」: 初回2500枚、2セット目以降333枚以上+α / 純増約5.0枚/G / 継続率約80%以上
- Hooah!: 111G以上上乗せ。通常7揃い時の発生率約1/25、天井到達時約1/5
confidence: ANALYSIS_HIGH + INDUSTRY / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定G数、直撃、ビンゴポイント、CZからBCを目指す。
- CZ「THEセグ」: 10G+α / 成功期待度設定1約40%、設定6約50%。上位CZ「THEセグハイパー」は期待度約66%以上。
- 通常天井: 999G+αでBC当選。天井到達時はHooah!発生率が約1/25→約1/5へ上昇。
- 規定G数は111/222/333/444/555/666/777/888/999G。奇数ゾロ目が相対的に強く999Gは天井。
- 設定変更後またはハイパーカウントダウン7終了後の初当りでは、HBC昇格に関わるBC規定継続回数が最大15セットへ短縮（通常は最大30セット）。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_CONFLICT_SETTING4_INITIAL_HIT_AND_UNVERIFIED_GAKKUN_POWER_LOOP_POINT
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間・天井・内部状態・内部モード・ループポイント・ビンゴポイントをRESET/再抽選。
- 通常999G+αのゲーム数天井は777G+αへ短縮。
- ビンゴポイント表示は「？？」、天空ステージ、液晶ボール「3・7・F」から開始。
- ビンゴポイントは再抽選され、平均約50G消化後から数字表示される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きは有利区間・天井・内部状態・ループポイント・ビンゴポイントをCARRY_OVER。
- ビンゴポイント表示は朝一「？？」となるため、表示だけでは即時判別できない。
confidence: ANALYSIS_HIGH / MACHINE_SPECIFIC_TABLE

### powerCycleBehavior
- 純電源OFF→ONでは天井G数・内部状態・内部モード・ビンゴポイントをCARRY_OVER。
- ビンゴポイント表示は「？？」、天空ステージ、液晶ボール「3・7・F」から開始するため、設定変更時と外見が共通する。
- 有利区間は後発解析でCARRY_OVERを確認。
- ループポイントの純電源OFF→ON契約は、設定変更/据え置き比較表では据え置き引継ぎを確認できる一方、純電断を独立条件で明記する高信頼資料を固定できず `UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_STATE_MODE_BINGO_POINT_AND_ADVANTAGEOUS_SECTION / UNVERIFIED_FOR_LOOP_POINT_DIRECT_POWER_WORDING

### gameCounterReset
- 設定変更: RESET。天井777G+αへ短縮。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 999G+α
resetCeiling: 777G+α
resetCeilingBenefit: BC当選 + 天井到達BCのHooah!発生率優遇
ceilingHooahRateNormal7Align: 約1/25
ceilingHooahRateAtCeiling: 約1/5
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: 内部モード再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更専用の内部モード具体的振り分けは、正式型式/メーカー/シリーズ名とリセット・朝一・モード振り分け等で再探索後も比較可能な公開値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_EXACT_RESET_MODE_DISTRIBUTION

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER（後発解析で直接表記確認）。
- 通常営業中はエンディング後・HBC後にも有利区間リセット。設定変更時を除き、リセット後はハイパーカウントダウン7へ突入。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 天井999G+α→777G+αへ短縮。
- 短縮天井到達時も天井BCのHooah!優遇が有効で、7揃い時Hooah!発生率は通常約1/25に対し天井到達時約1/5。
- 設定変更後の初当りではHBC昇格に関わる規定BC継続回数が最大15セットへ短縮（通常最大30セット）。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日の天井進行・内部状態/モード・ループポイント・ビンゴポイント・有利区間は設定変更でリセット対象。
- エンディング/HBC後の有利区間リセットで得られるハイパーカウントダウン7突入恩恵は設定変更時には適用されない。
- その他の設定変更固有の公開不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更でも純電源OFF→ONでも、ビンゴポイント表示「？？」・天空ステージ・液晶「3・7・F」開始となるため、朝一画面だけでは変更判別不可。
- ビンゴポイントは平均約50Gで表示開始。前日のポイントを把握している場合は、表示後の値が据え置き推測材料になる可能性があるが確定ではない。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 朝一777G+αを超えて天井契機が発生しなければ据え置きの強い材料になる。
- 本機固有のリールガックン条件・発生率は `Lスーパービンゴネオ / SB5 / ベルコ / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール` 等へ検索語を変更し主要解析・業界資料を横断後も高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_CEILING_AND_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 999G+α
resetCeiling: 777G+α
ceilingHooahRate: 約1/5
nonCeilingHooahRate: 約1/25
bingoPointDisplayReveal: 平均約50G
resetHbcPromotionMaxBcSets: 最大15セット（通常最大30セット）
settingChangeAdvantageousSection: RESET
carryOverAdvantageousSection: CARRY_OVER
powerCycleAdvantageousSection: CARRY_OVER
exactResetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 通常天井999G+α → 設定変更後777G+α。
- 天井到達時の7揃いHooah!発生率: 約1/5（通常の約1/25から優遇）。
- ビンゴポイントは朝一「？？」表示、平均約50Gで数字表示開始。
- 設定変更後初当りのHBC昇格規定BC回数: 最大15セット（通常最大30セット）。

## conflicts
- AT初当り設定4: HAZUSE/P-WORLD系は `1/404.5`、1geki・アタリ7・ちょんぼりすた等は `1/405.5`。平均化せず `CONFLICT_404.5_VS_405.5` として保持。
- 型式番号表記: HAZUSE検定番号 `4S0685` に対し、PiDEAの中古遊技機保証書発給停止記事は `4S068500`。制度/表記桁差の可能性があるため数値統合せず注記。

## missingFields
- 設定LのAT初当り・出玉率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の内部モード具体的振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時のループポイント契約を独立条件で明記する高信頼資料: UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- INDUSTRY: https://www.amusement-japan.co.jp/article/detail/10004552/
- INDUSTRY: https://zenrin-net.co.jp/10567/
- INDUSTRY_TYPE_NUMBER_NOTE: https://www.pidea.jp/articles/1739415141
- ANALYSIS_HIGH: https://hazuse.com/machine/pachislot/4S0685/
- ANALYSIS_HIGH: https://1geki.jp/slot/l_superbingo_neo/
- ANALYSIS_HIGH_RESET: https://1geki.jp/slot/l_superbingo_neo/3/
- ANALYSIS_HIGH_RESET: https://hisshobon.com/machineinfo/85181/
- ANALYSIS_HIGH_HOOAH: https://hisshobon.com/machineinfo/85199/
- ANALYSIS_HIGH_RESET: https://nana-press.com/kaiseki/machine/845/25961/
- ANALYSIS_HIGH_ADVANTAGEOUS_SECTION: https://nana-press.com/kaiseki/machine/845/25962/
- ANALYSIS_HIGH_POWER_CYCLE: https://www.slopachi-quest.com/article/superbingoneo-tenjou/
- ANALYSIS_HIGH_CROSSCHECK: https://chonborista.com/slot/belko-slot/223041/
- ANALYSIS_CROSSCHECK: https://www.atari7.com/slot/l-superbingoneo.php
- BOUNDARY_AUDIT: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/12%E6%9C%8816

## notes
- 2025年1月末に自主規制抵触による自主回収が発表され、2025-02-28以降は中古遊技機保証書発給停止。性能物差しレコードでは市場実績ではなく型式同定の補助情報としてのみ保持する。
