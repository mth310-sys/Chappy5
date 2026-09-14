# L ダーリン・イン・ザ・フランキス

recordNo: 1747
machineName: L ダーリン・イン・ザ・フランキス
aliases: スマスロ ダーリン・イン・ザ・フランキス / ダリフラ / Lダリフラ
manufacturer: スパイキー
formalModel: LダーリンインザフランキスSA
inspectionCode: 5S0291
releaseDate: 2025-08-04
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス + ボーナス高確率ST型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- スパイキー公式は2025-05-07に『Ｌ ダーリン・イン・ザ・フランキス』機種サイト公開を告知。
- グリーンべると/P-WORLDは2025-05-15付山形県公安委員会の検定通過型式として `LダーリンインザフランキスSA` を掲載。
- HAZUSEは型式 `LダーリンインザフランキスSA`、検定番号 `5S0291`、導入開始日2025-08-04を掲載。
- 一撃・情報島・K-Naviも2025-08-04導入で一致。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.9%
- setting3: 100.6%
- setting4: 105.4%
- setting5: 110.5%
- setting6: 114.5%
initialHitBySetting:
  bonus:
  - setting1: 1/229.8
  - setting2: 1/224.1
  - setting3: 1/214.9
  - setting4: 1/207.3
  - setting5: 1/190.3
  - setting6: 1/180.3
  bonusHighProbability:
  - setting1: 1/343.0
  - setting2: 1/334.1
  - setting3: 1/320.1
  - setting4: 1/298.9
  - setting5: 1/270.3
  - setting6: 1/252.3
baseGamesPer50: 約30.8G
netIncrease:
- 擬似ボーナス / ボーナス高確率中ボーナス: 約5.0枚/G
basicPayout:
- レギュラーボーナス: 約40枚
- ダーリン・イン・ザ・ボーナス: 約100枚
- エピソードボーナス: 約200枚
- ボーナス高確率「ダーリン・イン・ザ・フランキス」: 初期10G保証、最大30G継続 / ボーナス確率約1/10.4
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はフランクス目等からCZ、レア役直撃、ゲーム数天井等で擬似ボーナスを目指す。
- ボーナス間ゲーム数天井は通常666G+αでボーナス当選。
- REG/ボーナス高確率スルー回数天井を搭載。通常時REGまたはボーナス高確率を4回連続スルーすると、次回5回目のボーナスは「ダーリン・イン・ザ・ボーナス」orエピソードボーナス濃厚。
- ボーナス高確率「ダーリン・イン・ザ・フランキス」は10G+α（最大30G）のボーナス連ゾーン。小役確率約1/4.4、ボーナス確率約1/10.4。
- 有利区間リセット後はボーナス高確率30Gから開始する通常運用上のツラヌキ恩恵があるが、設定変更時の朝一挙動とは分離して扱う。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間、ボーナス間天井ゲーム数、REG/ボーナス高確率スルー回数、内部状態をRESET。
- ボーナス間ゲーム数天井は通常666G+αから最大390G+αへ短縮。
- 設定変更時は内部的にゲーム数がランダム加算されるため、実際には390Gより浅いゲーム数で天井到達する場合がある。
- フランクス高確は非フランクス高確、高確集中状態は非高確集中、ボーナス高確は非ボーナス高確、フリーズ高確は非フリーズ高確へ移行。
- 必勝本実戦上、ゲーム数表示は0G、寄宿舎ステージ開始。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間、天井、内部状態を引き継ぐと、なな徹の設定変更/据え置き直接比較表で確認。
- REG/ボーナス高確率スルー回数についても、電源OFF→ON比較表で引継ぎを直接確認。設定変更時はRESET。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみでは天井までのゲーム数、REG/ボーナス高確率スルー回数、フランクス高確、高確集中状態、ボーナス高確、フリーズ高確を引き継ぐ。
- ゲーム数表示と開始ステージの純電断時挙動は必勝本で「現在調査中」。
- 純電断時の有利区間を独立項目として直接列挙した高優先資料は今回固定できなかったため `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH` とする。
confidence: ANALYSIS_HIGH_FOR_DIRECT_POWER_CYCLE_TABLE / UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_FOR_ADVANTAGEOUS_SECTION

### gameCounterReset
settingChange: RESET_WITH_RANDOM_INTERNAL_GAME_ADDITION
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalBonusGameCeiling: 666G+α
resetBonusGameCeiling: 最大390G+α
resetActualReach: ランダム内部G数加算により390Gより浅く到達する場合あり
normalSkipCeiling: REG/ボーナス高確率4連続スルー後、次回5回目
resetSkipCount: RESET
powerCycleSkipCount: CARRY_OVER
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 独立した名称付き朝一専用モードは今回の公開資料横断では確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- REG/ボーナス高確率スルー回数は設定変更でRESET、純電断で引継ぎ。
confidence: ANALYSIS_HIGH_FOR_SKIP_COUNTER / UNVERIFIED_FOR_NAMED_RESET_MODE

### stateAfterReset
settingChange:
- franxxHigh: RESET_TO_NON_HIGH
- concentratedHigh: RESET_TO_NON_HIGH
- bonusHigh: RESET_TO_NON_HIGH
- freezeHigh: RESET_TO_NON_HIGH
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
- なな徹は内部状態を設定変更でRESET、据え置きでCARRY_OVERと整理。
- 必勝本は上記4状態を設定変更/電源OFF→ONで個別比較し、設定変更時は各非高確、純電断時は引継ぎと掲載。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- なな徹の朝一比較表で設定変更は有利区間RESET、据え置きは引継ぎを直接確認。
- 通常遊技中の有利区間リセット契機として、エンディング終了時、差枚条件を満たしたボーナス高確率突入時、比翼BEATS終了時の一部などが公開されている。
- 通常遊技中の有利区間リセット後に付随するボーナス高確率30G開始は、設定変更朝一の恩恵として自動転記しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER

### resetBenefits
- ボーナス間天井が通常666G+αから最大390G+αへ大幅短縮。
- ランダム内部G数加算により390Gより浅い到達もある。
- なな徹独自シミュレーターでは設定1・等価交換・朝一0Gからのゲーム数天井狙いで天井到達率20.40%、実質初当り1/196、期待値-730円。100G開始では期待値+90円としている。独自計算値のため性能コアとは分離。
confidence: ANALYSIS_HIGH_FOR_MECHANISM / ANALYSIS_SINGLE_FOR_SIMULATION_VALUE

### resetPenalties
- 前日までのボーナス間天井進行、REG/ボーナス高確率スルー回数、各種高確状態を失う。
- 設定変更時にボーナス種別そのものが優遇される公開根拠は確認できず、Altemaも「ボーナス振り分けに関する恩恵はない」と整理。
confidence: ANALYSIS_HIGH / ANALYSIS_SINGLE

### resetDetection
- 朝一390G+αまでボーナス間ゲーム数天井が発動しなかった場合は据え置き濃厚。なな徹は390G消化して天井非発動なら据え置き濃厚と明記。
- 設定変更時はゲーム数表示が実戦上0G、寄宿舎開始だが、純電断時の表示/ステージが「現在調査中」のため、表示や開始ステージだけでの確定判別には使わない。
- 本機固有ガックン条件/発生率は、機種名・型式・スパイキー・設定変更・据え置き・電源OFF ON・ガックン等へ検索語を変えて再探索したが高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalBonusGameCeiling: 666G+α
resetBonusGameCeiling: 最大390G+α
resetInternalGameAddition: RANDOM_EXACT_DISTRIBUTION_NOT_PUBLICLY_FIXED_AFTER_RESEARCH
normalSkipCeiling: 4連続スルー後の5回目
resetSkipCount: 0_FROM_PREVIOUS_PROGRESS
resetSimulationSetting1Equivalent0G:
- expectedValue: -730円
- ceilingReachRate: 20.40%
- effectiveInitialHit: 1/196
resetSimulationSetting1Equivalent100G:
- expectedValue: +90円
resetGakkun: UNVERIFIED_AFTER_RESEARCH

## conflicts
- CZ確率は一撃がCZ合算（コネクトチャンス+ココロチャンス）として設定1 `1/125.1` を掲載する一方、HAZUSEの設定推測欄は設定1 `1/126.6` 等を掲載。定義/集計時点差が疑われるため平均化せず `CONFLICT_CZ_RATE_DEFINITION_OR_REVISION` として保持し、主要性能コアのinitialHitにはボーナス初当りとボーナス高確率を採用。
- ベースは情報島・HAZUSE等で約30.8G/50枚、一撃オンライン遊技説明で約31G（設定1）。丸め差としてcanonicalは約30.8G/50枚。

## missingFields
- 設定変更時ランダム内部ゲーム数加算の正確な振り分け: PUBLIC_EXACT_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の有利区間を独立条件で直接列挙した高優先資料: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 独立した名称付き朝一専用モード: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- スパイキー公式: https://www.spiky.co.jp/
- P-WORLD/グリーンべると 検定通過記事: https://news.p-world.co.jp/articles/30934/greenbelt
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/5S0291/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/5S0291/genre/201/
- 一撃 オンライン遊技説明/基本スペック: https://1geki.jp/slot/l_darlifra/39/
- 一撃 天井・朝一: https://1geki.jp/slot/l_darlifra/3/
- なな徹 設定変更・朝一・リセット判別: https://nana-press.com/kaiseki/machine/989/30975/
- なな徹 天井: https://nana-press.com/kaiseki/machine/989/31174/
- 必勝本 機種トップ: https://hisshobon.com/machines/l-%E3%83%80%E3%83%BC%E3%83%AA%E3%83%B3%E3%83%BB%E3%82%A4%E3%83%B3%E3%83%BB%E3%82%B6%E3%83%BB%E3%83%95%E3%83%A9%E3%83%B3%E3%82%AD%E3%82%B9/
- 必勝本 天井&設定変更/電源OFF ON: https://hisshobon.com/machineinfo/87871/
- 必勝本 設定変更時の恩恵: https://hisshobon.com/machineinfo/87858/
- 必勝本 天井: https://hisshobon.com/machineinfo/87891/
- 必勝本 エンディング/有利区間リセット条件: https://hisshobon.com/machineinfo/87884/
- 情報島 機種情報: https://p-johojima.jp/machine_spec/post-9649/
- Altema 基本解析: https://altema.jp/pachimo/ldarihura
- Altema 朝一リセット: https://altema.jp/pachimo/ldarihurareset
- K-Navi: https://p-kn.com/slot/4375/
