# 沖ワニマル-25 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1462
canonicalKey: 2022-01-17_okiwanimaru-25
machineName: 沖ワニマル-25
manufacturer: バルテック
modelCode: SオキワニマルBA
inspectionCode: 1S0755
releaseDate: 2022-01-17
generation: "6.1号機"
systemType: AT / 完全告知 / 擬似ボーナス / 25φ
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_MEDIUM_RESET_WITH_INITIAL_HIT_SOURCE_CONFLICT
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.4
    "2": 98.6
    "3": 100.5
    "4": 102.7
    "5": 104.2
    "6": 106.2
  initialHitBySetting:
    definition: "1G連を含まないボーナス初当り。P-WORLD / なな徹 / Slopachi-Quest / ちょんぼりすた一致値をcanonical採用。"
    "1": "BIG 1/313 / REG 1/459 / 合算 1/186"
    "2": "BIG 1/306 / REG 1/428 / 合算 1/178"
    "3": "BIG 1/293 / REG 1/393 / 合算 1/168"
    "4": "BIG 1/285 / REG 1/338 / 合算 1/155"
    "5": "BIG 1/285 / REG 1/300 / 合算 1/146"
    "6": "BIG 1/277 / REG 1/291 / 合算 1/142"
  totalHitIncludingOneGameChain:
    "1": "BIG 1/293 / REG 1/433 / 合算 1/175"
    "2": "BIG 1/286 / REG 1/405 / 合算 1/168"
    "3": "BIG 1/274 / REG 1/373 / 合算 1/158"
    "4": "BIG 1/266 / REG 1/322 / 合算 1/146"
    "5": "BIG 1/266 / REG 1/287 / 合算 1/138"
    "6": "BIG 1/258 / REG 1/278 / 合算 1/134"
  baseGamesPer50Coins:
    "1": "36.8G/50枚"
    "2": "36.8G/50枚"
    "3": "36.8G/50枚"
    "4": "36.8G/50枚"
    "5": "37.2G/50枚"
    "6": "38.0G/50枚"
  netIncrease: "約7.0枚/G（擬似ボーナス）"
  basicPayout: "BIG約301枚（ベルナビ34回） / REG約106枚（ベルナビ12回）"
  normalCeiling: "通常時約999G消化でBIG当選。"
  modeSpecificMinimumData:
    normalLottery: "通常時は毎ゲーム完全確率でボーナス抽選。ワニランプ点灯でボーナス。"
    oneGameChain: "ボーナス中に1G連ストック抽選。通常/裏モードが存在するが、全内部移行表は物差し用途外。"
    thirtyPhiSeparation: "30φ『沖ワニマル-30 / SオキワニマルAA-30』とは型式・公開初当り/機械割が異なるため別レコード。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "当時解析で『調査中』。通常天井999Gの存在は確定するが、設定変更時RESET/CARRY_OVERの直接契約を十分な再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。"
    modeState: "内部状態・裏モード等の設定変更時契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "設定変更時の有利区間契約は直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。通常天井は有利区間移行後最大999Gとする解析あり。"
    morningStart: "朝一ステージ/表示等は当時解析で調査中。"
    benefit: "設定変更専用の天井短縮・初当り優遇は確認できず。設定変更後1回目のBIG終了時のみ上パネル設定示唆が50%で発生する公開値あり。"
    disadvantage: "設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "据え置き時の999G天井ゲーム数引継ぎ契約はUNVERIFIED_AFTER_RESEARCH。"
    modeState: "据え置き時の内部状態/裏モード引継ぎはUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "据え置き時の有利区間契約はUNVERIFIED_AFTER_RESEARCH。"
  powerOffOn:
    gameCountCeiling: "当時解析で調査中。純電源OFF→ON時の天井G引継ぎはUNVERIFIED_AFTER_RESEARCH。"
    modeState: "当時解析で調査中。"
    advantageousSection: "純電断時の有利区間契約はUNVERIFIED_AFTER_RESEARCH。"
  gameCounterReset: "SETTING_CHANGE_UNVERIFIED / POWER_CYCLE_UNVERIFIED。一般的6号機挙動から推測補完しない。"
  ceilingAfterReset:
    resetSpecificShortening: "設定変更専用の短縮天井は十分な再探索後も確認できず。通常天井は約999G→BIG。"
  modeAfterReset:
    behavior: "設定変更専用の通常/裏モード振り分けはUNVERIFIED_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "設定変更/据え置き/純電断の内部状態契約はUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "UNVERIFIED_AFTER_RESEARCH"
  resetBenefits:
    - "設定変更後1回目BIG終了時の上パネル設定示唆発生率50%。"
  resetPenalties:
    - "公開された設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有ガックン条件・発生率はUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "朝一有利区間ランプによる設定変更/据え置き判別は当時解析で調査中のまま。"
    other: "設定変更後1回目BIGに専用の上パネル示唆抽選があるが、色変化の有無だけで変更確定とは扱わない。"
  numericResetData:
    firstBigAfterSettingChangePanelHintRate: "50%（設定変更後1回目BIG終了時に設定示唆発生）"

sources:
  - url: https://www.p-world.co.jp/machine/database/9485
    sourceType: industry-database
    usedFor: [manufacturer, modelCode, inspectionCode, releaseDate, generation, systemType, initialHitBySetting, payoutRate, netIncrease, basicPayout, normalCeiling]
  - url: https://nana-press.com/kaiseki/machine/220/
    sourceType: analysis-high
    usedFor: [releaseDate, systemType, baseGamesPer50Coins, netIncrease, basicPayout, normalCeiling]
  - url: https://nana-press.com/kaiseki/machine/220/7838/
    sourceType: analysis-high
    usedFor: [initialHitBySetting, totalHitIncludingOneGameChain, payoutRate]
  - url: https://nana-press.com/kaiseki/machine/220/7843/
    sourceType: analysis-high
    usedFor: [baseGamesPer50Coins]
  - url: https://nana-press.com/kaiseki/machine/220/7847/
    sourceType: analysis-high
    usedFor: [basicPayout, netIncrease]
  - url: https://nana-press.com/kaiseki/machine/220/7850/
    sourceType: analysis-high
    usedFor: [resetSpecificPanelHintRate]
  - url: https://www.slopachi-quest.com/article/okiwanimaru25-settei/
    sourceType: analysis
    usedFor: [releaseDate, generation, payoutRate, initialHitBySetting, baseGamesPer50Coins]
  - url: https://www.slopachi-quest.com/article/okiwanimaru25-tenjou/
    sourceType: analysis
    usedFor: [normalCeiling, resetResearchStatus]
  - url: https://chonborista.com/slot/baltec/151815/
    sourceType: analysis
    usedFor: [releaseDate, normalCeiling, resetResearchStatus, firstBigAfterSettingChange]
  - url: https://1geki.jp/slot/s_okiwanimaru25/3/
    sourceType: analysis
    usedFor: [normalCeiling]
  - url: https://hazuse.com/machine/pachislot/1S0755/
    sourceType: old-database
    usedFor: [modelCode, inspectionCode, releaseDate, generation, payoutRate, netIncrease, conflictInitialHit]
  - url: https://ichikatsu.com/newslot2022/
    sourceType: analysis
    usedFor: [releaseDate, twentyFiveVsThirtyPhiPerformanceSeparation]

unverifiedAfterResearch:
  - "設定変更時の天井G RESET/CARRY_OVER。"
  - "据え置き/純電源OFF→ON時の999G天井G引継ぎ。"
  - "設定変更/据え置き/純電断時の内部状態・裏モード。"
  - "設定変更/据え置き/純電断時の有利区間契約と朝一有利区間ランプ判別。"
  - "設定変更専用の短縮天井・通常/裏モード振り分け。"
  - "本機固有のガックン条件・発生率。"

conflicts:
  - field: initialHitBySetting
    values:
      - "25φ canonical: P-WORLD / なな徹 / Slopachi-Quest / ちょんぼりすた = BIG 1/313→1/277, REG 1/459→1/291, 合算 1/186→1/142"
      - "HAZUSE 1S0755ページ = BIG 1/305→1/266, REG 1/449→1/279, 合算 1/182→1/136（他資料では30φ値として一致）"
    handling: "25φ専用の複数独立資料一致値をcanonical採用。HAZUSE値は30φ値との混在疑いがあるが、誤記と断定せずCONFLICTとして保持。"
```

## QAメモ
- 2026-09-12: 最新main No.1461の次として、25φと30φの別型式・別性能を再確認し25φを独立登録。
- 型式 `SオキワニマルBA` / 検定番号 `1S0755`、2022-01-17導入、6.1号機AT、純増約7枚/GはP-WORLD/HAZUSE/複数解析で照合。
- 25φの初当りはP-WORLD・なな徹・Slopachi-Quest・ちょんぼりすたが一致。HAZUSE 25φページのみ30φと同値を掲載しているためCONFLICT保持。
- 通常天井999G→BIGは複数資料で一致。設定変更/据え置き/純電断時の天井・内部状態・有利区間は当時解析にも調査中が残り、検索語・資料系統変更後も直接契約を固定できなかったためUNVERIFIED_AFTER_RESEARCH。
- 設定変更後1回目BIG終了時の上パネル設定示唆発生率50%を、比較可能な朝一専用公開数値として保存。
