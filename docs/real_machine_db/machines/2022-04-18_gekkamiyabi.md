# パチスロ 月華 雅 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1493
canonicalKey: 2022-04-18_gekkamiyabi
machineName: "パチスロ 月華 雅"
alternateName: "月華 雅 / 月華雅 / S月華ZC"
manufacturer: "エンターライズ（フィールズ販売）"
modelCode: "S月華ZC"
inspectionCode: "UNVERIFIED_AFTER_RESEARCH"
releaseDate: 2022-04-18
generation: "6.2号機"
systemType: "AT（擬似ボーナス・完全告知・高純増）"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_NUMERIC_RESET_TABLES
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.3
    "2": 98.9
    "3": 100.9
    "4": 104.5
    "5": 107.4
    "6": 110.3
  initialHitBySetting:
    pseudoBonus:
      "1": "1/203.3"
      "2": "1/201.8"
      "3": "1/199.9"
      "4": "1/194.8"
      "5": "1/192.5"
      "6": "1/190.4"
  baseGamesPer50Coins: "約25G/50枚"
  netIncrease: "擬似ボーナスAT 約4.0枚/G"
  basicPayout:
    bigBonus: "平均約290枚（JAC3回）"
    regularBonus: "平均約100枚（JAC1回）"
  normalCeiling:
    maximum: "有利区間移行後、ボーナス間最大333G+αでボーナス。"
    modeCeilings: "通常A 321G / 通常B 321G / 引き戻し128G / 天国準備333G / 天国32G / 超天国32G / 雅32G（なな徹解析）。"
  modeSpecificMinimumData: "通常A・通常B・引き戻し・天国準備・天国・超天国・雅の7モード。天国以上は32G以内の連チャン域。ボーナスはBIG約290枚/REG約100枚、純増約4.0枚/G。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。滞在モードを問わず天井G数が32G短縮される。"
    modeState: "内部状態RESET。新規有利区間移行時にモードを再抽選し、設定1～3は引き戻し40.6% / その他59.4%、設定4～6は引き戻し42.6% / その他57.4%。その他の内訳は公開固定できず。"
    advantageousSection: "RESET。"
    morningStart: "新規有利区間として開始。通常時は初当りボーナスまで有利区間ランプが非点灯のため、朝一消灯だけでは変更判別不可。"
    benefit: "全モード天井32G短縮 + 40%以上で引き戻しモード選択。引き戻し通常天井128Gに32G短縮を適用すると朝一最大96Gとなる。"
    disadvantage: "設定変更専用の主要不利数値はNO_PUBLIC_RESET_PENALTY_FOUND_AFTER_RESEARCH。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。"
    modeState: "CARRY_OVER。据え置きは内部状態を引き継ぐとする解析資料あり。"
    advantageousSection: "CARRY_OVER。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。設定変更なし電源OFF→ONでは天井を引き継ぐ。"
    modeState: "内部モードCARRY_OVERとする解析資料あり。高確等を含む全内部状態の個別完全契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "CARRY_OVER。"
  gameCounterReset: "設定変更=RESET / 据え置き・純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    fixedShortening: "全モード一律32G短縮。"
    normalModeCeilings: "通常A 321G / 通常B 321G / 引き戻し128G / 天国準備333G / 天国・超天国・雅32G。"
    morningHikimodoshi: "引き戻し選択時は通常128G天井から32G短縮され最大96G。"
  modeAfterReset:
    behavior: "新規有利区間移行時に再抽選。設定1～3: 引き戻し40.6% / その他59.4%。設定4～6: 引き戻し42.6% / その他57.4%。『その他』の通常A/B/天国準備等への細分値は公開固定できず、推測分解しない。"
  stateAfterReset:
    behavior: "設定変更=RESET / 据え置き=CARRY_OVER。純電源OFF→ONは内部モードCARRY_OVERを確認したが、モード以外の全内部状態を項目別に固定する直接資料は不足。"
  advantageousSectionReset: "設定変更=RESET / 据え置き・純電源OFF→ON=CARRY_OVER。ボーナス終了時の一部でも有利区間が終了する。"
  resetBenefits:
    - "滞在モードを問わず天井G数を32G短縮。"
    - "設定1～3は40.6%、設定4～6は42.6%で引き戻しモードを選択。"
    - "引き戻し選択時は朝一天井最大96G（通常128G - 32G短縮）。"
  resetPenalties:
    - "設定変更専用の主要不利数値はNONE_CONFIRMED_AFTER_RESEARCH。"
  resetDetection:
    lampDisplay: "通常時は初当りボーナスまで有利区間ランプ非点灯のため、朝一消灯単独では設定変更/据え置きを判別できない。朝一点灯なら据え置き濃厚。前日閉店時点で点灯を確認し、翌朝消灯なら設定変更濃厚。"
    reelBehavior: "本機固有のガックン条件/発生率は十分な再探索後も直接固定できずUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    resetCeilingShortening: "32G（全モード共通）。"
    resetModeSelectionSettings1to3: "引き戻し40.6% / その他59.4%。"
    resetModeSelectionSettings4to6: "引き戻し42.6% / その他57.4%。"
    morningHikimodoshiCeiling: "最大96G（引き戻し通常天井128Gに設定変更時32G短縮を適用）。"
    publicMorningNumbers: "32G短縮 / 引き戻し40.6%または42.6% / 引き戻し選択時最大96G。"

sources:
  - url: https://amusement-japan.co.jp/article/detail/10002746/
    sourceType: industry
    usedFor: [machineName, manufacturer, releaseDate, systemType]
  - url: https://p-kn.com/slot/3773/
    sourceType: analysis-high
    usedFor: [modelCode, releaseDate, systemType, basicPayout]
  - url: https://1geki.jp/slot/s_gekkamiyabi/
    sourceType: analysis-high
    usedFor: [releaseDate, payoutRateBySetting, initialHitBySetting, basicPayout, modeStructure, ceiling]
  - url: https://nana-press.com/kaiseki/machine/339/9653/
    sourceType: analysis-high
    usedFor: [settingChangeBehavior, carryOverBehavior, ceilingResetCarryOver, internalStateResetCarryOver, advantageousSection, resetBenefit32G, resetDetection]
  - url: https://nana-press.com/kaiseki/machine/339/9652/
    sourceType: analysis-high
    usedFor: [initialHitBySetting, favorableSectionModeSelection]
  - url: https://nana-press.com/kaiseki/machine/339/8974/
    sourceType: analysis-high
    usedFor: [modeCeilings, normalCeiling]
  - url: https://nana-press.com/kaiseki/machine/339/8976/
    sourceType: analysis-high
    usedFor: [resetModeSelection40_6_42_6]
  - url: https://chonborista.com/slot/enta-slot/165841/
    sourceType: contemporary-analysis
    usedFor: [powerCycleBehavior, favorableSectionModeSelection, resetDetection, morningHikimodoshi96G]
  - url: https://pachinko-curation.com/28557/
    sourceType: contemporary-analysis
    usedFor: [modelCode, payoutRateBySetting, initialHitBySetting, baseGamesPer50, netIncrease, ceiling]
  - url: https://slotmethod.jp/archives/9618/
    sourceType: contemporary-analysis
    usedFor: [baseGamesPer50, normalCeiling, modeCeilings]

unverifiedAfterResearch:
  - "検定番号。『S月華ZC / 月華雅 / エンターライズ / 検定番号』で再探索し型式は固定できたが、検定番号を信頼できる現存資料で直接固定できず。"
  - "設定変更時の『その他』59.4%/57.4%を通常A/B/天国準備等へ分解した全振り分け。公開値を推測分解しない。"
  - "設定変更なし電源OFF→ON時について、内部モードのCARRY_OVERは確認したが、高確等を含む全内部状態の個別完全契約。"
  - "本機固有の設定変更ガックン条件/発生率。"

conflicts: []

researchNotes:
  - "機械割97.3/98.9/100.9/104.5/107.4/110.3%、初当り1/203.3～1/190.4、約25G/50枚、純増約4.0枚/G、BIG約290枚/REG約100枚は複数解析・業界資料で整合。"
  - "設定変更時は32G短縮、引き戻し40.6%/42.6%。『引き戻し最大96G』は通常引き戻し天井128Gに公開の32G短縮契約を適用した値で、当時資料にも朝一96G狙いとして掲載される。"
  - "朝一有利区間ランプ消灯は本機では通常仕様でも起こるため、消灯単独を変更確定にしない。"
  - "実機完全再現用の通常時全モード移行テーブル、演出示唆、細かな抽選は収集対象外。"
```
