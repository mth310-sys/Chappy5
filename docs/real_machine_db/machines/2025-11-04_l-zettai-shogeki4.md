# L 絶対衝激Ⅳ

recordNo: 1762
machineName: L 絶対衝激Ⅳ
aliases: L絶対衝激IV / スマスロ絶対衝激4 / 絶対衝激4 / L絶対衝激フォースFH
manufacturer: アイドル（Daiichiブランド）
formalModel: L絶対衝激フォースFH
inspectionCode: 5S0676
releaseDate: 2025-11-04
generation: 6.5号機 / スマスロ
systemType: AT / CZ / 疑似ボーナス / 周期管理
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 1gekiはメーカーIdol、導入開始日2025-11-04、型式 `L絶対衝激フォースFH`、検定番号 `5S0676` を掲載。
- P-WORLD / P-Summa等でも2025-11-04ホール導入を確認。
- グリーンべると検定通過記事では `L絶対衝激フォースFH` を確認。
- 円谷フィールズホールディングス/フィールズ系発表でスマートパチスロ新機種『L 絶対衝激 IV』の発売を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.2%
- setting2: 98.6%
- setting3: 100.6%
- setting4: 105.8%
- setting5: 109.0%
- setting6: 112.5%
initialHitBySetting:
  bonus:
  - setting1: 1/270
  - setting2: 1/261
  - setting3: 1/254
  - setting4: 1/241
  - setting5: 1/231
  - setting6: 1/225
  at:
  - setting1: 1/543
  - setting2: 1/501
  - setting3: 1/450
  - setting4: 1/357
  - setting5: 1/304
  - setting6: 1/266
baseGamesPer50: 約31.6G/50枚
netIncrease:
- プラトニックタイム: 約0.5枚/G
- プラトニックボーナス系: 約5.5枚/G
- プラトニックタイムGOLD: 約5.5枚/G
basicPayout:
- プラトニックボーナス: 約100枚、純増約5.5枚/G
- プラトニックタイム: 50G以上保証、平均約80Gスタート、ボーナス初当り平均約1/50
- 絶対領域: 8G+α、AT当選期待度約48%
- 上位AT/ツラヌキ後: 有利区間リセット後（設定変更時を除く）の綾覚醒ループはAT約80%ループ
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は月曜〜日曜の周期管理。1周期は平均約80Gで、日曜日到達時にCZ/前兆/ボーナス等を抽選。
- モードA〜Dで周期天井を管理。A=9周期、B=7周期、C=5周期、D=2周期。
- 天井周期の日曜日到達で内部的にプラトニックボーナスブラック当選。
- AT「プラトニックタイム」は純増約0.5枚/G、50G以上保証・平均80Gスタート。
- 上位AT「プラトニックタイムGOLD」は純増約5.5枚/G。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 必勝本の機種別比較表で、設定変更時は天井までの周期数・スマホレベル・倫高確をリセットし、状態・モード・黒高確を再抽選することを直接確認。
- 設定変更後はモードC or D濃厚。通常最大9周期から最大5周期へ短縮。
- 有利区間は設定変更時にリセット。
- サブ液晶はキャラ3人画面、ステージは昼ステージへ移行と必勝本が掲載。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は天井、内部状態、有利区間、モード、ゲーム数、スマホレベル、周期数を引き継ぐと機種別解析で確認。
- 見た目での設定変更/据え置き判別は困難とされる。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 必勝本は電源OFF→ON時に天井までの周期数、スマホレベル、状態、モード、倫高確、黒高確をすべて引き継ぐと直接掲載。
- 電源OFF→ON時のサブ液晶表示・開始ステージは同資料で「現在調査中」。
- 純電断時の有利区間そのものを機種固有に直接列挙した高優先資料は固定できなかったため、スマスロ一般論で補完せず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_INTERNAL_CARRY_OVER / UNVERIFIED_FOR_POWER_CYCLE_ADVANTAGEOUS_SECTION_DIRECT_WORDING

### gameCounterReset
settingChange: RESET_PERIOD_COUNT
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 本機にAT間ゲーム数天井はなく、主要天井は周期天井。
- 設定変更で周期進行をリセットしモードC/Dへ再抽選。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCycleCeiling:
- modeA: 9 cycles
- modeB: 7 cycles
- modeC: 5 cycles
- modeD: 2 cycles
resetCycleCeiling: maximum_5_cycles
resetModeRestriction: modeC_or_modeD
ceilingBenefit: 内部的にプラトニックボーナスブラック当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモードC or D濃厚。
- Cは5周期、Dは2周期が天井。
- C/Dの具体的選択率は、必勝本・なな徹・1geki・6確・周辺解析を表記揺れ/型式名を変えて再探索したが公開値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き/電源OFF→ONではモード引継ぎ。
confidence: ANALYSIS_HIGH_FOR_C_OR_D / UNVERIFIED_FOR_NUMERIC_SPLIT

### stateAfterReset
- 設定変更時: 状態を再抽選、倫高確をリセット、黒高確を再抽選。
- 電源OFF→ON時: 状態・倫高確・黒高確を引き継ぐ。
- 設定変更時の各状態具体振り分け数値は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_NUMERIC_DISTRIBUTIONS

### advantageousSectionReset
- 設定変更時: RESET。パチマガ系機種解析の有利区間リセットタイミングに設定変更時が明記。
- 据え置き時: CARRY_OVERと機種別朝一比較で確認。
- エンディング終了時も有利区間リセット契機。ただしその恩恵「綾覚醒ループ」は設定変更時を除くため、朝一設定変更恩恵には混入させない。
- 純電源OFF→ON時の有利区間を直接列挙する高優先資料は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- 周期天井が通常最大9周期 → 最大5周期へ短縮。
- 朝一はモードC or D濃厚。Dなら2周期天井。
- なな徹独自シミュレーターでは設定1・等価0Gで期待値-504円、天井到達率25.82%、実質初当り1/220、平均投資6946円。50Gで等価期待値+40円、150Gで+1447円。
confidence: ANALYSIS_HIGH / PUBLIC_SIMULATION_VALUE_FOR_EXPECTATION_METRICS

### resetPenalties
- 設定変更で前日の周期数・スマホレベル・モード・高確類を消去/再抽選するため、前日進行や良状態持越しを狙う価値は失われる。
- 有利区間リセット後の「綾覚醒ループ」約80%は設定変更時には適用されない。通常遊技中の有利区間切断恩恵を朝一恩恵と誤認しないこと。
- 設定変更固有の冷遇率等は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_EXCLUSION_OF_TSURANUKI_BENEFIT / NONE_CONFIRMED_FOR_OTHER_NUMERIC_PENALTY

### resetDetection
- 最大5周期を超えても天井PBBが発動しない場合、設定変更契約と整合しないため据え置き推測の強材料。
- 必勝本では設定変更時サブ液晶=キャラ3人画面、昼ステージ開始。一方、純電断時のサブ液晶/ステージは調査中のため、単独での確定判別材料にはしない。
- なな徹は見た目でのリセット判別は困難とする。
- `絶対衝激4 / L絶対衝激Ⅳ / L絶対衝激フォースFH / アイドル / Daiichi + ガックン / リールガックン / 設定変更 / 朝一 / 据え置き` で再探索したが、本機固有ガックン条件/発生率は高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PERIOD_AND_DISPLAY_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalMaximumCycleCeiling: 9 cycles
resetMaximumCycleCeiling: 5 cycles
resetMode: C_or_D
resetModeCCeiling: 5 cycles
resetModeDCeiling: 2 cycles
resetModeCvsDDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetMorningSimulationSetting1Equivalent0G:
- expectedValue: -504円
- ceilingReachRate: 25.82%
- effectiveFirstHit: 1/220
- averageInvestment: 6946円
resetMorningSimulationSetting1Equivalent50G:
- expectedValue: +40円
resetMorningSimulationSetting1Equivalent150G:
- expectedValue: +1447円
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues:
- 最大9周期 → 最大5周期
- モードC or D濃厚（C=5周期 / D=2周期）
- 設定1・等価0G独自シミュレーター -504円 / 天井到達率25.82% / 実質初当り1/220 / 平均投資6946円

## conflicts
- 設定別ボーナス確率・AT確率・機械割は1geki、なな徹系、6確、Altema等で概ね一致し重大CONFLICTなし。
- 一部低優先資料には本機を純増約5.5枚/G主体の高純増ATのように要約する表現があるが、通常AT「プラトニックタイム」は約0.5枚/G、ボーナス/上位ATが約5.5枚/G。性能コアでは状態別に分離して保持。
- 有利区間リセット後の綾覚醒ループ約80%は設定変更時除外と明示されているため、設定変更時のresetBenefitsには採用しない。

## missingFields
- powerCycleBehavior.advantageousSection: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- modeAfterReset.modeCvsDDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- stateAfterReset.numericDistribution: UNVERIFIED_AFTER_RESEARCH
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-15
- INDUSTRY/OFFICIAL_GROUP: 円谷フィールズHD/フィールズ 新機種発売発表（2025-09-01） https://www.tsuburaya-fields.co.jp/ir/j/files/press/2025/press_20250901a.pdf
- INDUSTRY: P-WORLD 機種DB https://www.p-world.co.jp/machine/database/10376
- INDUSTRY: P-Summa 導入記事 https://psumma.jp/pachislo/68085/
- ANALYSIS_HIGH: 1geki 機種TOP https://1geki.jp/slot/l_zetai4/
- ANALYSIS_HIGH: 1geki 天井・朝一 https://1geki.jp/slot/l_zetai4/3/
- ANALYSIS_HIGH: 必勝本 天井&設定変更 https://hisshobon.com/machineinfo/88607/
- ANALYSIS_HIGH: 必勝本 モード https://hisshobon.com/machineinfo/88599/
- ANALYSIS_HIGH: なな徹 朝一・リセット https://nana-press.com/kaiseki/machine/1043/32617/
- ANALYSIS_HIGH: パチマガスロマガ系 有利区間・ツラヌキ https://cs62.cs-plaza.com/g/pachi/pla/s_conq/idol_slot/01/kr04.php
- ANALYSIS_HIGH: 6確 https://www.kaku6.jp/slot/zettai4/

## sourceNotes
- 公式グループPDFは発売事実確認用。性能/リセットのcanonical数値はHTMLで追跡可能な1geki・必勝本・なな徹等の複数解析一致を優先。
- 朝一期待値はなな徹独自シミュレーター値であり、メーカー公表性能ではないため性能コアと分離。
- C/D具体振り分けとガックンは十分な再探索後も公開値を固定できず未検証のまま保持。
