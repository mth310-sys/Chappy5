# スマスロ とある科学の超電磁砲2

recordNo: 1761
machineName: スマスロ とある科学の超電磁砲2
aliases: レールガン2 / とある科学の超電磁砲2 / Lとある科学の超電磁砲2FV
manufacturer: 藤商事
formalModel: Lとある科学の超電磁砲2FV
inspectionCode: 530447
releaseDate: 2025-11-04
generation: 6.5号機 / スマスロ
systemType: AT / CZ / 疑似ボーナス / ゲーム数管理
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 藤商事公式機種ページで機種名・設定別CZ/AT確率・出玉率を確認。
- 藤商事公式YouTube本編PVは2025-11-04導入開始と明記。
- 業界記事「遊技日本」は型式 `Lとある科学の超電磁砲2FV` と2025年9月19日の販売発表を確認。
- HAZUSE / 1gekiは検定番号 `530447`、型式、2025-11-04導入を一致して掲載。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.9%
- setting3: 100.3%
- setting4: 105.4%
- setting5: 110.0%
- setting6: 112.9%
initialHitBySetting:
  cz:
  - setting1: 1/175.7
  - setting2: 1/172.6
  - setting3: 1/168.5
  - setting4: 1/156.6
  - setting5: 1/145.7
  - setting6: 1/137.5
  at:
  - setting1: 1/317.8
  - setting2: 1/311.8
  - setting3: 1/304.4
  - setting4: 1/272.4
  - setting5: 1/248.1
  - setting6: 1/235.3
baseGamesPer50: 約31.8G/50枚
netIncrease:
- 超電磁砲DRIVE: 約2.6枚/G
- ボーナス / 超電磁砲OVER DRIVE: 約4.0枚/G
basicPayout:
- 超電磁砲DRIVE: ゲーム数上乗せ型AT、基本セットG数50Gとして業界資料掲載
- 超電磁砲OVER DRIVE: 1セット30G、継続率90%以上、期待獲得約3500枚以上と複数資料で掲載
confidence: OFFICIAL_FOR_RATES / INDUSTRY_AND_ANALYSIS_HIGH_FOR_BASE_NET_INCREASE_AND_BASIC_PERFORMANCE

## modeSpecificMinimumData
- 通常時は超電磁砲コイン・レア役・規定ゲーム数からCZ/ATを目指すゲーム数管理型。
- AT間天井は通常最大999G+α。天井到達後は超電磁砲コイン揃いから前兆を経てAT当選濃厚。
- CZ間天井は最大499G+α。自力CZに当選してもCZ天井ゲーム数はリセットされない。
- AT間内部モードはA〜E。最大天井はA=999G+α、B/C=699G+α、D=299G+α、E=199G+α。
- CZ天井はモードA/Bで最大499G+α、C/D/Eで最大299G+α。
- 上位AT「超電磁砲OVER DRIVE」は純増約4.0枚/G、継続率90%以上、期待獲得約3500枚以上。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_RESET_MODE_AND_CEILING_DATA
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間、AT間天井、内部状態、モード、ゲーム数をリセットする機種別比較表を確認。
- AT間天井は通常最大999G+αから最大699G+αへ短縮。
- 設定変更時はモードを再抽選。公開振り分けはA 42.0% / B 23.5% / C 23.5% / D 8.0% / E 3.0%。
- モードA選択時は朝一専用のAT天井ゲーム数抽選を行い、通常Aの999G固定ではなく最大699G+αとなる。
- 開始ステージは「常盤台中学校」または「学園都市」を1:1で選択。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_699G / NUMERIC_MODE_DISTRIBUTION_FROM_NANATETSU

### carryOverBehavior
- 据え置き時は天井、内部状態、有利区間、モード、ゲーム数を引き継ぐ機種別比較表を確認。
- 朝一の開始ステージは設定変更時と据え置き時の双方で「常盤台中学校」または「学園都市」となるため、ステージ単独では変更判別できない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 1gekiの機種別朝一比較で、純電源OFF→ON時は天井ゲーム数を引き継ぐことを直接確認。
- 同資料では開始ステージは設定変更時と同じく「学園都市」または「常盤台中学校」。
- 内部状態についても電源OFF→ONで引継ぎとする機種別解析を確認。
- 純電源OFF→ON時の有利区間・モードを、設定変更との比較で全項目明示した高優先直接資料は十分な再探索後も固定できず、一般スマスロ仕様から推測して埋めない。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_STATE_CARRY_OVER / UNVERIFIED_DIRECT_WORDING_FOR_POWER_CYCLE_ADVANTAGEOUS_SECTION_AND_MODE

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 設定変更ではAT間ゲーム数をリセットし、最大699G+αの朝一天井契約へ移行。
- 据え置き/純電断では天井進行を引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalAtCeiling: 999G+α
resetAtCeiling: maximum_699G+α
normalCzCeiling: maximum_499G+α
resetCzCeiling: MODE_DEPENDENT_AND_RESET_MODE_A_LINKED
atCeilingBenefit: 超電磁砲DRIVE[AT]当選濃厚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時モード振り分け: A 42.0% / B 23.5% / C 23.5% / D 8.0% / E 3.0%。
- B以上合算58.0%、D以上11.0%、E 3.0%。
- モードAは設定変更時専用の天井ゲーム数抽選を行うため、朝一はAでも最大699G+α。
- 据え置き時はモードを引き継ぐ。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時は内部状態リセット、据え置き時は引継ぎと機種別比較表で確認。
- 純電断時も内部状態引継ぎとする機種別解析を確認。
- 設定変更時の高確/通常等の具体的状態振り分け数値は、機種名・型式・メーカー名と「朝一/設定変更/内部状態/高確/振り分け」で資料系統を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_CARRY_OVER / UNVERIFIED_FOR_NUMERIC_STATE_DISTRIBUTION

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- なな徹の朝一比較表で直接確認。
- 純電源OFF→ON時の有利区間を機種固有資料が直接列挙した記述は再探索後も固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- AT間天井が999G+α → 最大699G+αへ300G短縮。
- モードD以上11.0%、モードE3.0%。
- 設定変更時のモードAでも専用天井抽選が行われ、最大699G+α。
- リセット0Gからの公開シミュレーター値では、設定1・等価交換・最大699G条件で天井到達率12.34%、実質初当り1/293、平均投資9167円。
confidence: ANALYSIS_HIGH / PUBLIC_SIMULATION_VALUE_FOR_EXPECTATION_METRICS

### resetPenalties
- 設定変更により前日のゲーム数・天井進行・内部状態・モードを消去するため、前日ハマリや良モード持越しは失われる。
- 設定変更固有の冷遇率・当選率低下など、独立した数値的ペナルティは再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: STRUCTURAL / NONE_CONFIRMED_FOR_NUMERIC_PENALTY

### resetDetection
- 朝一699G+αを超えてもAT間天井が発動しなければ据え置き濃厚。
- 設定変更/据え置きとも開始ステージは「常盤台中学校」または「学園都市」1:1のため、ステージ単独では判別困難。
- 設定変更時モードAの天井はゲーム数の百/十/一の位を個別抽選するため、通常ゾーンと異なるゲーム数でカウンタ発光/前兆が起きてもリセットの可能性がある。
- `とある科学の超電磁砲2 / レールガン2 / Lとある科学の超電磁砲2FV / 藤商事 + ガックン / リールガックン / 朝一 / 設定変更 / 据え置き` で再探索したが、本機固有のガックン条件/発生率を高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_699G_AND_DISPLAY_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalAtCeiling: 999G+α
resetAtCeiling: maximum_699G+α
resetModeDistribution:
- modeA: 42.0%
- modeB: 23.5%
- modeC: 23.5%
- modeD: 8.0%
- modeE: 3.0%
- modeBOrHigher: 58.0%
- modeDOrHigher: 11.0%
resetModeACeilingHundredsDigitDistribution:
- 0G: 1.56%
- 100G: 6.25%
- 200G: 6.25%
- 300G: 1.56%
- 400G: 1.56%
- 500G: 57.82%
- 600G: 25.00%
resetModeACeilingTensDigitDistribution:
- 0G: 0.39%
- 10G: 0.39%
- 20G: 0.39%
- 30G: 0.39%
- 40G: 0.78%
- 50G: 2.34%
- 60G: 15.63%
- 70G: 70.31%
- 80G: 6.25%
- 90G: 3.13%
resetModeACeilingOnesDigit: 1〜9Gをランダム選択
resetMorningSimulationSetting1Equivalent0G:
- expectedValue: -1016円
- ceilingReachRate: 12.34%
- effectiveFirstHit: 1/293
- averageInvestment: 9167円
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues:
- AT間最大999G+α → 最大699G+α
- モード振り分けA/B/C/D/E = 42.0/23.5/23.5/8.0/3.0%
- モードA朝一天井抽選の百/十/一の位分布
- 設定1・等価0Gの独自シミュレーター値 -1016円 / 天井到達率12.34% / 実質初当り1/293 / 平均投資9167円

## conflicts
- 設定別CZ/AT確率・出玉率は藤商事公式、必勝本、G-net、複数解析で一致し重大CONFLICTなし。
- ベースはG-net・1geki等で約31.8G/50枚。一方、なな徹のリセット期待値算出条件は32.0G/50枚固定。後者はシミュレーター用丸め条件であり、性能コアのCONFLICTとは扱わず31.8G/50枚をcanonicalとする。
- 検定識別は業界/解析資料で `530447`、1gekiでは併記識別子 `0708-146` も掲載。本DBでは検定番号欄のcanonicalを530447とし、0708-146は補助識別子としてのみ扱う。

## missingFields
- powerCycleBehavior.advantageousSection: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- powerCycleBehavior.mode: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- stateAfterReset.numericDistribution: UNVERIFIED_AFTER_RESEARCH
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-15
- OFFICIAL: 藤商事「スマスロ とある科学の超電磁砲2」 https://www.fujimarukun.co.jp/products/l_railgun2/
- OFFICIAL: 藤商事公式YouTube 本編PV https://www.youtube.com/watch?v=zqhSuL3GjEA
- INDUSTRY: 遊技日本 新機種発表 https://yugi-nippon.com/pachinko-new-machine/post-73306/
- INDUSTRY: P-WORLD / グリーンべると新台記事 https://news.p-world.co.jp/articles/31915/greenbelt
- INDUSTRY: G-net販売概要 https://g-net-ps.com/info/s0231/
- ANALYSIS_HIGH: なな徹 朝一・設定変更時 https://nana-press.com/kaiseki/machine/1041/32753/
- ANALYSIS_HIGH: 1geki 天井・朝一 https://1geki.jp/slot/l_railgun2/3/
- ANALYSIS_HIGH: 1geki 機種TOP https://1geki.jp/slot/l_railgun2/
- ANALYSIS_HIGH: HAZUSE機種解析 https://hazuse.com/machine/pachislot/SX0112/
- ANALYSIS_HIGH: 必勝本 基本スペック https://hisshobon.com/machineinfo/88388/
- INDUSTRY/DB: HAZUSE検定・機種詳細 https://hazuse.com/hd/530447h/

## sourceNotes
- resetBehaviorのモード振り分け・朝一モードA天井ゲーム数抽選・期待値はなな徹2026-01-09更新値を採用。
- 純電断の有利区間/モードは機種固有の直接比較文言が不足するため、据え置き仕様から推測補完していない。
- 朝一期待値はなな徹独自シミュレーター値であり、メーカー公表性能ではないため性能コアと分離。
