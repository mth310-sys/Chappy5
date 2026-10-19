# スマスロ ゴブリンスレイヤーⅡ

recordNo: 1781
machineName: スマスロ ゴブリンスレイヤーⅡ
aliases: スマスロ ゴブリンスレイヤーII / ゴブスレ2 / LゴブリンスレイヤーII
manufacturer: JFJ / 藤商事
formalModel: LゴブリンスレイヤーII JZ
inspectionCode: 530709
releaseDate: 2026-02-02
generation: 6.5号機 / スマスロ
systemType: AT / CZ経由セット継続型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSE・1gekiで型式 `LゴブリンスレイヤーII JZ`、検定番号 `530709`、JFJ、導入開始日2026-02-02を確認。
- 遊技通信でもJFJ製・2026-02-02以降導入予定として一致。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.7%
- setting3: 100.4%
- setting4: 104.9%
- setting5: 109.7%
- setting6: 113.2%
initialHitBySetting:
  cz:
  - setting1: 1/239.3
  - setting2: 1/232.3
  - setting3: 1/222.9
  - setting4: 1/200.4
  - setting5: 1/187.3
  - setting6: 1/181.9
  at:
  - setting1: 1/541.6
  - setting2: 1/526.4
  - setting3: 1/506.4
  - setting4: 1/453.2
  - setting5: 1/417.8
  - setting6: 1/402.4
baseGamesPer50: 約30.6G/50枚
netIncrease:
- AT「ゴブリンスレイヤーRUSH」: 約2.8枚/G
- 上位AT「ULTIMATE LOOP」: 約6.0枚/G
basicPayout:
- ゴブリンスレイヤーRUSH: 1セット100G、継続率約50% / 67% / 80%
- ULTIMATE LOOP: 1セット100G+α、期待枚数約3500枚OVERと案内
modeSpecificMinimumData:
- CZは主にゴブリンスレイヤーMISSION / CHANCE / BATTLE。
- 天井到達時はAT+宿命バトル1～5個ストック、1個目は勝利濃厚。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_CARRYOVER_AND_POWER_CYCLE_INFORMATION
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間、天井ゲーム数、内部状態、兜ポイント系モードをRESET/再抽選。
- 兜ポイント表示は0ptとなり、内部的に0～5ptを加算して開始。
- 朝一ステージは王都/訓練場を各50%で選択。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井、内部状態、モード、兜ポイントを引き継ぐ。
- 朝一表示上は兜ポイント0pt、ステージは王都/訓練場各50%となるため、見た目だけでは設定変更との判別不可。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE

### powerCycleBehavior
- 純電源OFF→ONのみでは天井までのゲーム数、兜ポイント、内部モード等を引き継ぐ機種固有解析あり。
- 設定変更との主要差は内部進行を保持する点。
confidence: ANALYSIS_HIGH / MACHINE_SPECIFIC_SECONDARY_DIRECT_DESCRIPTION

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 通常時天井は600G / 1000G / 1500Gの振り分け。
- 設定変更時は1500G選択を否定し最大1000Gへ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling:
- 600G / 1000G / 1500G
- maximum: 1500G
resetCeiling:
- 600G / 1000G
- maximum: 1000G
- 高設定ほど600Gなど浅い天井選択が優遇
benefit:
- AT当選+宿命バトル1～5個ストック
- 1個目は勝利濃厚
resetShortening: MAX_1500_TO_1000
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 兜ポイントモードは設定変更時に再抽選。
- 設定変更時振り分け（全設定共通）: 通常A 50.0% / 通常B 37.5% / 天国A 12.1% / 天国B 0.4%。
- 天国A+B合計12.5%。
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE / MULTI_SOURCE_SUPPORT

### stateAfterReset
- 設定変更時内部状態: 通常94.5% / 高確5.1% / 超高確0.4%。
- 据え置き・純電断では内部状態を引き継ぐ。
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER_OR_INTERNAL_PROGRESS_CARRY_OVER
notes:
- なな徹の朝一比較で設定変更RESET・据え置き引継ぎを直接確認。
- 純電断は天井/兜ポイント/内部モード等の機種固有引継ぎを確認。純電断の有利区間そのものを独立明記した高優先一次表現は限定的なため、一般則のみで補完しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE_ADVANTAGEOUS_SECTION_WORDING

### resetBenefits
- 最大天井が1500G→1000Gへ短縮。
- リセット後100G以内にAT当選した場合、宿命バトルをストック。
- リセット時モードは天国A/B合計12.5%。
- リセット時は兜ポイントを内部0～5pt加算して開始。
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_DATA

### resetPenalties
- 前日の天井進行、兜ポイント、モード、内部状態を設定変更で失う。
- 設定変更固有の追加数値的不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更/据え置き共に兜ポイント表示は0pt、朝一ステージは王都/訓練場各50%のため見た目だけでは判別不可。
- リセット時に内部0～5ptが加算されるため、兜ポイント規定到達のズレだけでも判別困難。
- 朝一1000Gを超えてAT非当選なら設定変更否定の強い材料。
- 本機固有ガックン条件/発生率は型式・メーカー・表記揺れで再探索したが高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_AND_CEILING / UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
resetCeilingMax: 1000G
normalCeilingMax: 1500G
resetPointModeDistribution:
- normalA: 50.0%
- normalB: 37.5%
- heavenA: 12.1%
- heavenB: 0.4%
resetHeavenTotal: 12.5%
resetInternalStateDistribution:
- normal: 94.5%
- high: 5.1%
- superHigh: 0.4%
resetInternalHelmetPoints: 0～5pt
resetStartStage:
- royalCapital: 50%
- trainingGround: 50%
resetWithin100GAtBenefit:
- AT当選時に宿命バトルストック
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE

## conflicts
- 一部低品質二次ページに初当たり1/319～・天井999G等の別仕様と思われる誤情報があるが、JFJ型式 `LゴブリンスレイヤーII JZ` に対し必勝本・1geki・なな徹・P-WORLD・パチビー・HAZUSEが97.6～113.2%、AT1/541.6～1/402.4、通常最大1500Gで一致。誤情報はcanonicalへ混入しない。
- パチマガスロマガFREE本文に設定変更後も1500Gを含むよう読める記述がある一方、なな徹・パチビー・複数攻略資料は設定変更時最大1000Gで一致。canonicalは最大1000Gとし、前者は `CONFLICT_LIKELY_EDITORIAL_DESCRIPTION_ERROR` として扱う。

## sources
retrievedAt: 2026-09-15
- HAZUSE: https://hazuse.com/hd/530709h/
- 遊技通信/P-WORLDニュース: https://news.p-world.co.jp/articles/32690/yugitsushin
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89244/
- 必勝本 CZ抽選: https://hisshobon.com/machineinfo/89193/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1095/34377/
- パチビー 攻略: https://www.pachibee.jp/machines/kouryaku/225120003
- 1geki: https://1geki.jp/slot/l_goblinslayer2/
- P-WORLD: https://www.p-world.co.jp/machine/database/10414
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/jfj/064532.php

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電断時の有利区間そのものを独立語句で明記した高優先資料: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
