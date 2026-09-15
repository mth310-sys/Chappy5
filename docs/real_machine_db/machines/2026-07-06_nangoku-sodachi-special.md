# L南国育ち SPECIAL

recordNo: 1805
machineName: L南国育ち SPECIAL
aliases: L南国育ちSPECIAL / 南国育ちスペシャル / 南国育ちSP / L南国育ちSPM1
manufacturer: 平和（製造: アムテックス）
formalModel: L南国育ちSPM1
inspectionNumber: 531057
releaseDate: 2026-07-06
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス連チャン型
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技日本の平和発表記事で製造元アムテックス、型式 `L南国育ちSPM1`、純増3.0枚/G or 6.0枚/Gを確認。
- グリーンべるとで2026-07-06ホール導入予定を確認。
- 情報島+の検定通過記事でアムテックス `L南国育ちSPM1` を確認。
- スロベース掲載の検定番号は531057。
confidence: INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.6%
- setting4: 102.6%
- setting5: 105.0%
- setting6: 110.4%
- settingL: UNVERIFIED_PERFORMANCE_VALUE
initialHitBySetting:
  bonus:
  - setting1: 1/299.7
  - setting2: 1/296.2
  - setting4: 1/276.3
  - setting5: 1/269.1
  - setting6: 1/262.4
baseGamesPer50: 約33.0G/50枚
netIncrease:
- 通常ボーナス/飛翔モード: 約3.0枚/G
- 超飛翔モード: 約6.0枚/G
basicPayout:
- BIG: 210枚以上
- REG: 80枚以上
modeSpecificMinimumData:
- 飛翔モード: ボーナスループ率約84%、期待枚数約1300枚の解析値。
- 超飛翔モード: ボーナスループ率約93%、期待枚数約2400枚の解析値。
- 初当り時のBIG/REG比率は解析資料でBIG約60% / REG40%。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 必勝本の設定変更/電源OFF→ON直接比較で、天井までのゲーム数はRESET、モードは再抽選。
- 設定変更時は全モード共通で最大天井500G+αへ短縮。
- モード振り分けは全設定共通で通常A30.0%、チャンス15.0%、通常B40.0%、飛翔準備A7.5%、飛翔準備B7.5%、超飛翔準備0%。通常A以外が70%。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きは前日のゲーム数・内部モードを引継ぐ旨を複数解析資料で確認。
- スイカ成立回数カウンタそのものの据え置き契約を高優先の直接比較表で固定できず、推測転記しない。
confidence: ANALYSIS_HIGH_FOR_GAME_COUNT_AND_MODE / UNVERIFIED_FOR_SUIKA_COUNTER_DIRECT_CONTRACT

### powerCycleBehavior
- 必勝本直接比較: 天井までのゲーム数、モードを引継ぎ。
- ジャグラーズネット直接比較では内部状態も引継ぎ。
- 開始ステージ、さざなみカスタムは公開比較資料で調査中。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_MODE / ANALYSIS_SINGLE_FOR_STATE / UNVERIFIED_FOR_UI_FIELDS

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER_INTERNAL
- 通常A/Bの通常最大天井は799G+α。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling:
- 通常A: 799G
- 通常B: 799G
- チャンス: 200G
- 飛翔準備A: 500G
- 飛翔準備B: 200G
- 超飛翔準備: 200G
resetCeiling:
- 設定変更時: 全モード共通 最大500G+α
benefit: ボーナス当選
confidence: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時はモード再抽選、純電源OFF→ONは引継ぎ。
- 設定変更時の公開振り分け（全設定共通）: 通常A30.0% / チャンス15.0% / 通常B40.0% / 飛翔準備A7.5% / 飛翔準備B7.5% / 超飛翔準備0%。
- 「チャンスモード以上70%」は通常A以外の合計として公開資料と整合。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- ジャグラーズネットの設定変更/電源OFF→ON比較では、設定変更時は内部状態RESET、電源OFF→ONは引継ぎ。
- 必勝本直接比較は状態欄を設けず天井・モードのみ明記のため、状態は単一解析系統として保持。
confidence: ANALYSIS_SINGLE

### advantageousSectionReset
- 本機固有の設定変更/据え置き/純電断における有利区間契約を直接明記した高優先資料は、機種名・型式・メーカー・「有利区間/リセット/朝一/設定変更/電源OFF ON」で再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。
- 通常営業中の連チャンモード等の挙動から朝一有利区間挙動を推測しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 最大天井799G+α→設定変更時500G+αへ短縮。
- 設定変更時は70%で通常A以外を選択。チャンス15%・飛翔準備B7.5%は200G天井、飛翔準備A7.5%は500G天井、通常B40%も設定変更契約により最大500Gへ短縮される。
- チャンス/飛翔準備B/超飛翔準備中の実質ボーナス確率は約1/120（通常モード性能値。リセット専用確率ではないため分離保持）。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更専用の天井延長、不利専用モード、初当たり冷遇等は検索語・資料系統を変えた再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 朝一で設定変更時最大500G+αを明確に超えてボーナス非当選なら据え置き推測の強材料。
- 開始ステージは設定変更/電源OFF→ONとも調査中で、現時点では判別材料として固定しない。
- 本機固有ガックン条件/発生率は再探索後もUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_CEILING_DETECTION / UNVERIFIED_FOR_GAKKUN_AND_STAGE

### numericResetData
normalMaxCeiling: 799G+α
resetMaxCeiling: 500G+α
resetModeDistributionAllSettings:
- normalA: 30.0%
- chance: 15.0%
- normalB: 40.0%
- hishoPreparationA: 7.5%
- hishoPreparationB: 7.5%
- superHishoPreparation: 0%
nonNormalASelectionRate: 70.0%
publicHighModePracticalBonusRate:
- chance/hishoPreparationB/superHishoPreparation: 約1/120
publicResetExpectedValue: NOT_CANONICALIZED_IN_THIS_PASS
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH

## conflicts
- 必勝本の2026-05-12時点基本スペックページでは機械割が「現在調査中」だが、後発のパチマガスロマガFREE、ジャグラーズネット、スロベース等で97.5 / 98.6 / 102.6 / 105.0 / 110.4%が一致しているため、これは公開時期差であり数値CONFLICTとは扱わない。
- 一部二次資料で「チャンスモード以上70%以上」と表現されるが、必勝本の具体振り分けでは通常A以外合計70.0%。本レコードでは具体振り分けをcanonicalとする。

## missingFields
- 設定変更/据え置き/純電断時の有利区間そのものの直接契約
- スイカ成立回数カウンタの据え置き/純電断直接契約
- 本機固有ガックン条件/発生率
- 設定変更/純電断時の開始ステージ確定挙動
- さざなみカスタムの設定変更/純電断挙動
- 設定Lの性能値

## sources
retrievedAt: 2026-09-15
- 遊技日本 平和発表: https://yugi-nippon.com/pachinko-new-machine/post-76970/
- グリーンべると: https://web-greenbelt.jp/post-112732/
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-24857/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89857/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/138041/
- 必勝本 モード移行: https://hisshobon.com/machineinfo/138062/
- 必勝本 ボーナス抽選: https://hisshobon.com/machineinfo/138063/
- ジャグラーズネット 設定/天井/朝一: https://jugglersnet.com/hikarimonoat/nangokusodachi-special
- ジャグラーズネット AT: https://jugglersnet.com/hikarimonoat/nangokusodachi-special-at
- ちょんぼりすた: https://chonborista.com/slot/amute/259472/
- なな徹 朝一リセット: https://nana-press.com/kaiseki/machine/1173/37760/
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/amutex/nangokusodachi_SP.php
- スロベース: https://slobase.jp/machines/nangoku-sodachi-special
- 6確: https://www.kaku6.jp/slot/nangokusp/
