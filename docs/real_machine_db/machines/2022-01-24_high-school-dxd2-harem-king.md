# ハイスクールD×D2 ハーレム王に俺はなる — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1471
canonicalKey: 2022-01-24_high-school-dxd2-harem-king
machineName: ハイスクールD×D2 ハーレム王に俺はなる
manufacturer: グレードワン（販売・ブランド: コナミアミューズメント）
modelCode: "SハイスクールD×D2GT"
inspectionCode: "1S0348"
releaseDate: 2022-01-24
generation: "6.1号機"
systemType: AT / 周期抽選 / 擬似ボーナス / CZ
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_HIGH_RESET_WITH_MINOR_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.6
    "2": 98.7
    "3": 100.1
    "4": 104.1
    "5": 107.1
    "6": 107.4
  initialHitBySetting:
    definition: "D×Dボーナス/主要初当り（初当り後ATへ接続）"
    "1": "1/256.0"
    "2": "1/251.4"
    "3": "1/245.5"
    "4": "1/228.2"
    "5": "1/215.1"
    "6": "1/206.9"
  baseGamesPer50Coins: "約32.0G/50枚"
  netIncrease: "AT約3.0枚/G / D×Dボーナス等の擬似ボーナス約5.0枚/G"
  basicPayout: "D×Dボーナスはベルナビ7回/1セット。ボーナス終了後はAT『サービスタイム』へ接続し、BOOSTチャレンジでAT初期差枚数を決定。"
  normalCeiling: "実ゲーム数666G+α または最大10周期。通常モード最大10周期、チャンスモード最大7周期、天国モード最大3周期。"
  modeSpecificMinimumData:
    normalCycle: "1周期到達の平均は約64G。周期到達で主CZ『アーシア救出』へ。"
    cz: "アーシア救出の成功期待度は約40%超。上位CZ『エクストラバトル』は期待度約60%超。"
    upperPerformance: "特化ゾーン『二天龍バトル』は100G+α・ボーナス約1/18・期待獲得約1700枚。『キングスガーデン』は平均上乗せ約500枚、期待獲得約1500枚級とする資料あり。物差し補助値として保持し、内部抽選詳細は収集しない。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。天井ゲーム数/周期天井はリセット。"
    modeState: "内部モードRESET。リセット後（設定変更後・AT終了後を含む有利区間リセット後）は全設定共通で約50%が天国モード。"
    advantageousSection: "RESET。有利区間ランプは設定変更時に消灯。"
    morningStart: "有利区間リセット後の約50%で天国スタート。天国は最大3周期天井。"
    benefit: "天国モード移行率約50%。CZ自力当選を含む3周期以内D×Dボーナス当選率は約80%。"
    disadvantage: "公開された設定変更専用の主要不利要素はNONE_CONFIRMED_AFTER_RESEARCH。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。据え置き時は天井を引き継ぐ。"
    modeState: "CARRY_OVER。据え置き時は内部モードを引き継ぐ。"
    advantageousSection: "CARRY_OVER。据え置き時は有利区間を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。純電源OFF→ONでは天井を引き継ぐ。"
    modeState: "CARRY_OVER。純電源OFF→ONでは内部モードを引き継ぐ。"
    advantageousSection: "CARRY_OVER。純電源OFF→ONでは有利区間を引き継ぐ。"
  gameCounterReset: "設定変更=RESET / 据え置き・純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "固定G数への短縮ではなく、リセット後約50%の天国モード選択により実質的な早当たり優遇。天国は最大3周期で、天国選択時は70%で2周期天井が選択される。"
  modeAfterReset:
    behavior: "有利区間リセット後は天国モード約50%。通常/チャンス/天国の全振り分け表は今回の物差し範囲では固定しない。"
  stateAfterReset:
    behavior: "内部モードは設定変更でRESET、据え置き/純電断ではCARRY_OVER。モード以外の細かな内部状態全テーブルは収集対象外。"
  advantageousSectionReset: "設定変更=RESET / 据え置き・純電源OFF→ON=CARRY_OVER。AT終了時にも有利区間ランプ消灯。"
  resetBenefits:
    - "リセット後の天国モード選択率 約50%（全設定共通）。"
    - "天国モードは最大3周期天井。"
    - "天国選択時は70%で2周期天井。"
    - "CZ自力抽選込みで3周期以内D×Dボーナス当選率 約80%。"
  resetPenalties:
    - "公開された設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン条件/発生率は、機種名・型式・メーカー・リセット・朝一・ガックン等で検索語を変えて再探索したが直接固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "有利区間ランプはPAY右下のドット。設定変更時に消灯し、D×Dボーナス突入時/AT突入時に点灯、AT終了時に消灯する。したがって朝一点灯は据え置き推測材料になり得る一方、朝一消灯だけでは前日終了状態等があるため変更確定材料とはしない。"
  numericResetData:
    resetHeavenModeRate: "約50%（全設定共通）"
    heavenMaxCycles: "最大3周期"
    heavenTwoCycleCeilingSelection: "70%"
    withinThreeCyclesBonusRateIncludingCZ: "約80%"
    resetSpecificFixedGameCeiling: "NONE_CONFIRMED。固定G数短縮ではなくモード優遇。"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://www.konami.com/amusement/corporate/ja/topics/20211108/
    sourceType: official
    usedFor: [machineName, manufacturerBrand, releaseWindow, systemConcept, atConnection, upperATOverview]
  - url: https://www.p-world.co.jp/machine/database/9526
    sourceType: industry-database
    usedFor: [manufacturer, manufacturerOfMachine, generation, systemType, netIncrease, bonusStructure, modeStructure, resetHeavenRate, withinThreeCyclesBonusRate]
  - url: https://data.hazuse.com/?genre=202&machine_code=1S0348
    sourceType: old-analysis-database
    usedFor: [inspectionCodeDatabaseKey, releaseDate, machineIdentity]
  - url: https://chonborista.com/slot/konami-slot/155884/
    sourceType: analysis-high
    usedFor: [modelFamily, generation, releaseDate, payoutRate, initialHit, baseGamesPer50Coins, netIncrease, normalCeiling]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/17/kr01.php
    sourceType: old-analysis
    usedFor: [settingChangeBehavior, powerCycleBehavior, gameCounterReset, modeAfterReset, advantageousSectionReset, resetHeavenRate]
  - url: https://nana-press.com/kaiseki/machine/270/7711/
    sourceType: analysis-high
    usedFor: [settingChangeBehavior, unchangedBehavior, resetHeavenRate, advantageousSectionLamp]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/17/tj02.php
    sourceType: old-analysis
    usedFor: [baseGamesPer50Coins]
  - url: https://nana-press.com/kaiseki/machine/270/7708/
    sourceType: analysis-high
    usedFor: [baseGamesPer50Coins]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/17/tk03.php
    sourceType: old-analysis
    usedFor: [upperPerformance]

unverifiedAfterResearch:
  - "本機固有の設定変更時リールガックン条件・発生率。"
  - "検定番号1S0348はHAZUSEのmachine_codeで機種同定できるためDBコードとして保存したが、今回検索で公的検定一覧本文の同一番号表記までは別系統固定できていない。"

conflicts: []

notes:
  - "『リセット後』には設定変更後とAT終了後の有利区間リセットを含む資料がある。朝一専用50%ではなく、有利区間リセット共通値として保存。"
  - "天国移行約50%は固定G数の『リセット天井短縮』とは区別する。通常最大10周期に対し、天国選択時最大3周期となるモード優遇。"
  - "有利区間ランプはAT終了時にも消灯するため、朝一消灯のみを設定変更確定とは扱わない。"
```
