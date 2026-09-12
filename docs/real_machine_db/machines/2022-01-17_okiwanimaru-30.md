# 沖ワニマル-30 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1463
canonicalKey: 2022-01-17_okiwanimaru-30
machineName: 沖ワニマル-30
manufacturer: バルテック
modelCode: SオキワニマルAA-30
inspectionCode: 1S0361
releaseDate: 2022-01-17
generation: "6.1号機"
systemType: AT / 完全告知 / 擬似ボーナス / 30φ
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_MEDIUM_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.8
    "2": 99.1
    "3": 100.8
    "4": 102.6
    "5": 104.6
    "6": 107.0
  initialHitBySetting:
    definition: "1G連を含まないボーナス初当り。P-WORLD / なな徹 / HAZUSE / K-Naviで一致。"
    "1": "BIG 1/305 / REG 1/449 / 合算 1/182"
    "2": "BIG 1/298 / REG 1/418 / 合算 1/174"
    "3": "BIG 1/289 / REG 1/380 / 合算 1/164"
    "4": "BIG 1/280 / REG 1/340 / 合算 1/154"
    "5": "BIG 1/275 / REG 1/302 / 合算 1/144"
    "6": "BIG 1/266 / REG 1/279 / 合算 1/136"
  totalHitIncludingOneGameChain:
    "1": "BIG 1/290 / REG 1/430 / 合算 1/173"
    "2": "BIG 1/283 / REG 1/402 / 合算 1/166"
    "3": "BIG 1/275 / REG 1/366 / 合算 1/157"
    "4": "BIG 1/269 / REG 1/327 / 合算 1/147"
    "5": "BIG 1/264 / REG 1/291 / 合算 1/138"
    "6": "BIG 1/255 / REG 1/269 / 合算 1/131"
  baseGamesPer50Coins:
    "1": "36.7G/50枚"
    "2": "36.8G/50枚"
    "3": "36.9G/50枚"
    "4": "37.1G/50枚"
    "5": "37.4G/50枚"
    "6": "38.0G/50枚"
  netIncrease: "約7.0枚/G（擬似ボーナス）"
  basicPayout: "BIG約301枚（ベルナビ34回） / REG約106枚（ベルナビ12回）"
  normalCeiling: "有利区間移行後の通常時を約999G消化でBIG当選。30φは天井到達時に裏モード移行確定とする解析あり。"
  modeSpecificMinimumData:
    normalLottery: "通常時は毎ゲーム完全確率でボーナス抽選。ワニランプ点灯でボーナス。"
    oneGameChain: "ボーナス中に1G連ストック抽選。通常モードと裏モードがあり、解析値では1G連トータル確率が通常約1/837・裏約1/53。"
    ceilingThirtyPhiBenefit: "30φは999G天井到達時にBIG+裏モード。25φとは天井恩恵が異なる。"
    twentyFivePhiSeparation: "25φ『沖ワニマル-25 / SオキワニマルBA』とは型式・初当り・機械割・一部ベース・天井恩恵が異なるため別レコード。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "朝一設定変更時の999G天井ゲーム数RESET/CARRY_OVERは当時解析で『調査中』。検索語・資料系統を変えても直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。"
    modeState: "設定変更時の通常/裏モード・内部状態契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "設定変更時の有利区間契約は直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    morningStart: "朝一の初期ステージ/表示・有利区間ランプは当時解析で調査中。"
    benefit: "設定変更専用の短縮天井・専用モード振り分けは確認できず。設定変更後1回目BIG終了時のみ上パネル設定示唆が50%で発生。"
    disadvantage: "公開された設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "据え置き時の999G天井ゲーム数引継ぎ契約はUNVERIFIED_AFTER_RESEARCH。"
    modeState: "据え置き時の通常/裏モード・内部状態引継ぎはUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "据え置き時の有利区間契約はUNVERIFIED_AFTER_RESEARCH。"
  powerOffOn:
    gameCountCeiling: "純電源OFF→ON時の天井G引継ぎはUNVERIFIED_AFTER_RESEARCH。"
    modeState: "純電断時の通常/裏モード・内部状態はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "純電断時の有利区間契約はUNVERIFIED_AFTER_RESEARCH。"
  gameCounterReset: "SETTING_CHANGE_UNVERIFIED / POWER_CYCLE_UNVERIFIED。一般的6号機挙動から推測補完しない。"
  ceilingAfterReset:
    resetSpecificShortening: "設定変更専用の短縮天井は十分な再探索後も確認できず。通常天井は約999G。"
    normalCeilingBenefit: "30φは通常の999G天井到達時にBIG+裏モード。これは設定変更専用恩恵ではない。"
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
    lampDisplay: "朝一有利区間ランプによる設定変更/据え置き判別は当時解析で調査中のまま。ボーナス後の有利区間ランプ消灯を示す試打観察はあるが、朝一判別契約には流用しない。"
    other: "設定変更後1回目BIGに専用の上パネル示唆抽選があるが、色変化の有無だけで設定変更確定とは扱わない。"
  numericResetData:
    firstBigAfterSettingChangePanelHintRate: "50%（設定変更後1回目BIG終了時に色変化/設定示唆発生）"
    firstBigAfterSettingChangePanelDistribution:
      setting1: "なし50.00 / 青23.08 / 黄15.38 / 緑7.69 / 赤3.85 / 虹0%"
      setting2: "なし50.00 / 青21.43 / 黄15.71 / 緑8.57 / 赤4.29 / 虹0%"
      setting3: "なし50.00 / 青20.00 / 黄16.00 / 緑9.33 / 赤4.67 / 虹0%"
      setting4: "なし50.00 / 青18.63 / 黄16.15 / 緑9.94 / 赤4.97 / 虹0.31%"
      setting5: "なし50.00 / 青17.24 / 黄16.09 / 緑10.35 / 赤5.75 / 虹0.58%"
      setting6: "なし50.00 / 青15.96 / 黄15.96 / 緑10.64 / 赤6.39 / 虹1.07%"

sources:
  - url: https://www.p-world.co.jp/machine/database/9486
    sourceType: industry-database
    usedFor: [manufacturer, releaseDate, generation, systemType, initialHitBySetting, payoutRate, netIncrease, basicPayout, normalCeiling]
  - url: https://nana-press.com/kaiseki/machine/282/
    sourceType: analysis-high
    usedFor: [releaseDate, systemType, baseGamesPer50Coins, netIncrease, basicPayout, normalCeiling]
  - url: https://nana-press.com/kaiseki/machine/282/7825/
    sourceType: analysis-high
    usedFor: [initialHitBySetting, totalHitIncludingOneGameChain, payoutRate]
  - url: https://nana-press.com/kaiseki/machine/282/7830/
    sourceType: analysis-high
    usedFor: [baseGamesPer50Coins]
  - url: https://nana-press.com/kaiseki/machine/282/7827/
    sourceType: analysis-high
    usedFor: [normalCeiling, thirtyPhiCeilingBenefit]
  - url: https://nana-press.com/kaiseki/machine/282/7837/
    sourceType: analysis-high
    usedFor: [firstBigAfterSettingChangePanelHintRate, firstBigAfterSettingChangePanelDistribution]
  - url: https://www.slopachi-quest.com/article/okiwanimaru30-settei/
    sourceType: analysis
    usedFor: [releaseDate, generation, payoutRate, initialHitBySetting, baseGamesPer50Coins, twentyFiveVsThirtyPhiSeparation]
  - url: https://www.slopachi-quest.com/article/okiwanimaru30-tenjou/
    sourceType: analysis
    usedFor: [normalCeiling, thirtyPhiCeilingBenefit, resetResearchStatus]
  - url: https://hazuse.com/machine/pachislot/1S0361/
    sourceType: old-database
    usedFor: [modelCode, inspectionCode, releaseDate, generation, initialHitBySetting, payoutRate, netIncrease]
  - url: https://p-kn.com/slot/3719/
    sourceType: analysis
    usedFor: [releaseDate, initialHitBySetting]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/63/bn01.php
    sourceType: analysis-high
    usedFor: [basicPayout, netIncrease]
  - url: https://ichikatsu.com/newslot2022/
    sourceType: analysis
    usedFor: [releaseDate, twentyFiveVsThirtyPhiPerformanceSeparation, dateGroupAudit]

unverifiedAfterResearch:
  - "設定変更時の天井G RESET/CARRY_OVER。"
  - "据え置き/純電源OFF→ON時の999G天井G引継ぎ。"
  - "設定変更/据え置き/純電断時の通常/裏モード・内部状態。"
  - "設定変更/据え置き/純電断時の有利区間契約と朝一有利区間ランプ判別。"
  - "設定変更専用の短縮天井・専用モード振り分け。"
  - "本機固有のガックン条件・発生率。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新main No.1462の次として30φを独立登録。
- `SオキワニマルAA-30 / 1S0361`、2022-01-17導入、6.1号機AT、純増約7枚/GはHAZUSE・P-WORLD・複数解析で照合。
- 30φの初当り・機械割はP-WORLD・なな徹・HAZUSE・K-Navi等が一致し、25φとは別性能。
- 通常天井999G→BIGに加え、30φのみ天井到達時に裏モード移行確定を複数解析で確認。
- 朝一設定変更/据え置き/純電断の天井・モード・有利区間契約は当時解析にも『調査中』が残り、再探索後も直接固定できないためUNVERIFIED_AFTER_RESEARCH。
- 設定変更後1回目BIG終了時の上パネル色変化は50%。設定別色振り分けも公開値として保存。
