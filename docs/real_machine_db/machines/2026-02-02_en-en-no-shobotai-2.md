# Lパチスロ 炎炎ノ消防隊2

recordNo: 1778
machineName: Lパチスロ 炎炎ノ消防隊2
aliases: L炎炎ノ消防隊2 / スマスロ 炎炎ノ消防隊2 / 炎炎2
manufacturer: SANKYO
formalModel: L炎炎ノ消防隊2
inspectionCode: 530634
releaseDate: 2026-02-02
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス+ST型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- SANKYOオンライン博物館で導入年月2026.02、後継スマスロATとして確認。
- 情報島の2025-10-24検定通過記事で `L炎炎ノ消防隊2` を確認。
- HAZUSEで型式 `L炎炎ノ消防隊2`、検定番号 `530634`、導入2026-02-02を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.8%
- setting3: 101.2%
- setting4: 105.6%
- setting5: 110.2%
- setting6: 114.9%
initialHitBySetting:
  bonus:
  - setting1: 1/272.7（メーカー公表系丸め表記1/272）
  - setting2: 1/269.4（同1/269）
  - setting3: 1/257.4（同1/257）
  - setting4: 1/242.0（同1/242）
  - setting5: 1/236.4（同1/236）
  - setting6: 1/227.4（同1/227）
  enenLoop:
  - setting1: 1/684.0（メーカー公表系丸め表記1/684）
  - setting2: 1/662.1（同1/662）
  - setting3: 1/617.2（同1/617）
  - setting4: 1/546.5（同1/546）
  - setting5: 1/518.2（同1/518）
  - setting6: 1/486.2（同1/486）
baseGamesPer50: 約33.1G/50枚（設定1）
netIncrease:
- 擬似ボーナス / 炎炎大戦等: 約5.8枚/G
basicPayout:
- SPECIALエピソードBONUS: 約200枚
- REGULAR BONUS: ベルナビ10回 / 約85枚
- 炎炎BONUS: 約200枚
modeSpecificMinimumData:
- 炎炎激闘: 1セット15G+α、ボーナス期待度約57%
- 炎炎大戦: 15G+α、ボーナス期待度約80%、期待獲得枚数約1200枚
- 紅J大戦: 15G+α、ボーナス期待度約90%、期待獲得枚数約2050枚
- アドラバースト突入後一連のループ期待枚数は約2760枚（なな徹注記定義）。
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井・内部状態・ゲーム数・モードをRESET/再抽選。
- ボーナス間天井は通常最大850G+αから最大650G+αへ短縮。
- 炎炎ループ間天井は通常2000G+αから1500G+αへ短縮。
- 設定変更時は通常Aを選択せず、必ず通常B以上を選択。天国相当の通常Eも選択されやすい。
- 設定変更後の規定ゲーム数は平均約300G。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間・天井・内部状態・ゲーム数・モードを引き継ぐ。
- 朝一の見た目上の表示は初期化されるため、表示だけで設定変更/据え置きを単純判別することは困難。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井と内部状態を引き継ぐことを機種別比較資料で確認。
- モード・ゲーム数も据え置き契約として引継ぎとする二次解析があるが、純電断時の有利区間そのものを独立して明記した高優先資料は今回固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 開始ステージの設定変更/純電断差は主要資料で調査中のまま。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_INTERNAL_STATE / ANALYSIS_SINGLE_FOR_MODE_GAMECOUNT / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION_POWER_CYCLE_DIRECT_WORDING

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 設定変更時はボーナス間・炎炎ループ間の双方の進行がリセットされ、短縮上限が適用される。
- 前日最終G数との合算地点で規定ゲーム数前兆が発生した場合は据え置き推測材料になる。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling:
- bonusInterval: 850G+α
- enenLoopInterval: 2000G+α
- denshoshaTrapMisses: 最大5連続スルー後、次回ボーナスがSPECIALエピソードBONUS
resetCeiling:
- bonusInterval: 650G+α
- enenLoopInterval: 1500G+α
resetShortening: YES
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常モードはA/B/C/D/Eの5種類。
- 設定変更時は通常A非選択でB以上を再抽選。
- 公開振り分け: 通常B 約24% / 通常C 約4% / 通常D 約39% / 通常E 約33%。
- 通常Eは88G+α天井、Dは250G+α、Cは450G+α、Bは650G+α。
- 設定変更後の規定ゲーム数は平均約300G。
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE

### stateAfterReset
- 設定変更時は内部状態RESET。
- 据え置き・純電源OFF→ONは内部状態引継ぎ。
- 通常時の内部状態は低確・高確・超高確の3段階だが、設定変更時の個別初期振り分け数値は高信頼公開資料で固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_CARRYOVER / UNVERIFIED_FOR_INITIAL_DISTRIBUTION

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
notes:
- なな徹の朝一比較表で設定変更RESET・据え置き引継ぎを直接確認。
- 通常営業中は炎炎ループの一部・エンディング終了時等でも有利区間がリセットされ、炎炎激闘ストック等の恩恵がある。
- 通常営業中の有利区間リセット恩恵を設定変更朝一へそのまま転用しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- ボーナス間天井: 850G+α → 650G+α。
- 炎炎ループ間天井: 2000G+α → 1500G+α。
- 通常Aを除外し、通常D約39% + 通常E約33%で浅いモードが合計約72%。
- 設定変更後の規定ゲーム数は平均約300G。
- 通常E選択率が上昇。
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE

### resetPenalties
- 据え置きなら維持される内部状態・モード・天井進行を設定変更では失う。
- 設定変更固有の追加数値的不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- ボーナス間短縮天井650G+αを超えてボーナス非当選なら据え置き濃厚材料。
- 前日最終G数との合算で規定ゲーム数前兆が発生した場合は据え置きの可能性あり。
- 朝一は見た目の各表示が初期化されるため、表示だけで設定変更/据え置きを判別するのは困難。
- 開始ステージ差は主要資料で現在調査中。
- 本機固有のリールガックン条件/発生率は `炎炎ノ消防隊2 / L炎炎ノ消防隊2 / SANKYO + ガックン / リールガックン / 朝一 / 設定変更` で再探索したが、高信頼機種固有資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_PREVIOUS_DAY_GAMECOUNT / UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
resetBonusIntervalCeiling: 650G+α
resetEnenLoopIntervalCeiling: 1500G+α
normalBonusIntervalCeiling: 850G+α
normalEnenLoopIntervalCeiling: 2000G+α
resetModeDistribution:
- modeA: 0%
- modeB: 約24%
- modeC: 約4%
- modeD: 約39%
- modeE: 約33%
resetModeDOrECombined: 約72%
resetAverageScheduledGame: 約300G
resetExpectationSimulationSetting1:
- 0G equalExchange: -820円
- 0G 5.6枚交換: -1565円
- 0G ceilingReachRate: 10.33%
- 0G effectiveInitialHit: 1/257
- 0G averageInvestment: 7770円
- 200G equalExchange: +84円
- 300G equalExchange: +837円
- 350G equalExchange: +1324円
notes:
- 期待値はなな徹独自シミュレーター値で、メーカー公表性能ではないため分離保存。
- 算出は設定1、33.1G/50枚、純増5.8枚/G、天井650G、モード非考慮等の条件。
confidence: ANALYSIS_HIGH_FOR_RESET_FIXED_VALUES_AND_MODE_DISTRIBUTION / ANALYSIS_SIMULATION_FOR_EXPECTATION_VALUES

## conflicts
- 性能コアの初当たりは、なな徹・メーカー公表系まとめで整数丸め（例:設定1 1/272）、UP-Slot等で小数精密値（1/272.7）を掲載。定義は同一で丸め差と判断し、精密値をcanonical、丸め値を併記した。
- 1gekiの2026-02-04時点ページでは設定変更時天井を「調査中」としているが、後続のなな徹・必勝本・複数解析では650G+α/1500G+αと具体化。これは時点差による解析成熟であり数値CONFLICTとは扱わない。

## sources
retrievedAt: 2026-09-15
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/991/
- SANKYO 開発こぼれ話: https://www.secret-story.sankyo-fever.jp/product/sbh
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-18278/
- HAZUSE 型式/検定/導入: https://hazuse.com/machine/pachislot/SX0122/
- パチビー 機種情報: https://www.pachibee.jp/machines/index/225120000
- なな徹 機種TOP/性能: https://nana-press.com/kaiseki/machine/1088/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/1088/34535/
- なな徹 モード: https://nana-press.com/kaiseki/machine/1088/34539/
- 必勝本 モード: https://hisshobon.com/machineinfo/88895/
- 必勝本 モード移行解析: https://hisshobon.com/machineinfo/88837/
- 必勝本 状態: https://hisshobon.com/machineinfo/88894/
- 必勝本 初当たりボーナス: https://hisshobon.com/machineinfo/88877/
- 必勝本 炎炎激闘: https://hisshobon.com/machineinfo/88884/
- 必勝本 炎炎大戦: https://hisshobon.com/machineinfo/88886/
- 必勝本 紅J大戦: https://hisshobon.com/machineinfo/88887/
- 1geki 天井/朝一: https://1geki.jp/slot/l_ennenn2/3/
- P-WORLD: https://www.p-world.co.jp/machine/database/10415
- パチマガスロマガ 朝一: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/67/kr01.php
- ジャグラーズネット: https://jugglersnet.com/chumoku/enennosyobotai2
- UP-Slot 精密初当たり値: https://up-slot.com/enennoshobotai-2-info/
- アルテマ 朝一補助: https://altema.jp/pachimo/lenen2reset

## qaNotes
- resetBehaviorはホール経営ゲームの設定変更/据え置きと朝一客判断へ必要な粒度に限定。
- 通常時の全ゾーン前兆振り分け、全状態移行率、伝導者の罠内部抽選、ST内抽選は収集対象外。
- 朝一公開数値はモード振り分け、短縮天井、平均規定G、独自期待値など設定変更判断に直結する値だけを保存。
- 純電源OFF→ONの有利区間直接文言と本機固有ガックンは十分な再探索後も固定できずUNVERIFIED。
