# パチスロ春一番 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1473
canonicalKey: 2022-01-24_pachislot-haruichiban
machineName: パチスロ春一番
manufacturer: 西陣（販売） / DAXEL（製造）
modelCode: "S春一番DE"
inspectionCode: "1S1181"
releaseDate: 2022-01-24
generation: "6.2号機"
systemType: AT / 完全告知 / 擬似ボーナス / NewNormal 300+
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_MEDIUM_HIGH_RESET_WITH_UNVERIFIED_POWER_CYCLE_AND_CARRYOVER_DETAILS
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.3
    "2": 99.0
    "3": 100.9
    "4": 103.0
    "5": 105.0
    "6": 106.0
  initialHitBySetting:
    definition: "擬似ボーナス合算"
    "1": "1/189.0"
    "2": "1/177.9"
    "3": "1/170.7"
    "4": "1/157.0"
    "5": "1/149.4"
    "6": "1/143.4"
  bonusBySetting:
    big:
      "1": "1/322.8"
      "2": "1/308.3"
      "3": "1/303.7"
      "4": "1/292.1"
      "5": "1/286.5"
      "6": "1/281.7"
    reg:
      "1": "1/459.2"
      "2": "1/423.1"
      "3": "1/392.3"
      "4": "1/341.0"
      "5": "1/313.8"
      "6": "1/293.3"
    premium:
      "1": "1/67149.4"
      "2": "1/68501.1"
      "3": "1/68724.3"
      "4": "1/68248.5"
      "5": "1/69421.2"
      "6": "1/69593.2"
  baseGamesPer50Coins: "約37.9G/50枚（左第1停止時。業界販売資料/解析で一致）"
  netIncrease: "擬似ボーナス約5.0枚/G"
  basicPayout: "BIG約310枚 / REG約105枚 / 極頂BONUS約2000枚"
  normalCeiling: "第1救済: 555G+αで50%の確率でBIGまたはREG。555G超以降の通常当選はBIG濃厚。第2救済: 777G+αでBIG確定。"
  modeSpecificMinimumData:
    normalGame: "高確率ゾーンや連チャンモードを主軸とせず、通常時は毎ゲーム擬似ボーナスを抽選する設計。"
    oneGameRen: "ボーナス中に1G蓮を抽選。業界記事では発生率約28.5%。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "設定変更時の天井ゲーム数について、通常555G+α/777G+αから短縮される公開情報は確認できず。設定変更で天井カウンタが必ず0へ戻ることを機種固有資料で直接明記した高信頼ソースは今回固定できずUNVERIFIED_AFTER_RESEARCH。"
    modeState: "設定変更専用モード振り分け、高確スタート、専用初当たり率は再探索後もPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    advantageousSection: "通常時の有利区間ランプは消灯タイプで、朝一ランプだけでは変更判別不可。設定変更時の有利区間内部契約を直接明記した機種固有高信頼資料は固定できずUNVERIFIED_AFTER_RESEARCH。"
    morningStart: "リセット狙いの特別な天井短縮・専用ゾーンは解析上『特になし』。ただし初回ボーナス時の下パネル点滅が設定変更の50%で発生する設定変更示唆あり。"
    benefit: "固定天井短縮や朝一専用優遇はNONE_CONFIRMED_AFTER_RESEARCH。"
    disadvantage: "公開された設定変更専用の主要不利要素はNONE_CONFIRMED_AFTER_RESEARCH。"
  unchanged:
    gameCountCeiling: "据え置き時の555G/777G天井ゲーム数の厳密なCARRY_OVER契約を直接明記した機種固有資料は再探索後もUNVERIFIED_AFTER_RESEARCH。"
    modeState: "UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "通常時有利区間ランプが消灯するため、朝一ランプによる据え置き判別は不可。"
  powerOffOn:
    gameCountCeiling: "純電源OFF→ONのみの場合の天井ゲーム数・内部状態・有利区間の扱いを直接明記した機種固有資料は、検索語/資料系統変更後もUNVERIFIED_AFTER_RESEARCH。"
    modeState: "UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "UNVERIFIED_AFTER_RESEARCH。"
  gameCounterReset: "設定変更/据え置き/純電断のゲーム数カウンタ契約は直接資料不足のためUNVERIFIED_AFTER_RESEARCH。通常救済ゲーム数は555G+α/777G+α。"
  ceilingAfterReset:
    resetSpecificShortening: "NONE_CONFIRMED_AFTER_RESEARCH。通常救済555G+α/777G+α以外のリセット専用短縮値は確認できず。"
  modeAfterReset:
    behavior: "設定変更専用モード/状態振り分け公開値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "細かな内部状態の設定変更/据え置き/純電断差は再探索後も直接固定できずUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "通常時有利区間ランプは消灯タイプのため、朝一消灯を設定変更根拠にできない。設定変更時の内部有利区間契約自体はUNVERIFIED_AFTER_RESEARCH。"
  resetBenefits:
    - "設定変更専用の固定天井短縮・朝一専用当選優遇は確認できず。"
    - "客側の主要な朝一情報は、初回ボーナス時の下パネル点滅による変更示唆。"
  resetPenalties:
    - "公開された設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有のガックン条件・発生率は、機種名/型式/西陣/DAXEL/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等で再探索したがPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    lampDisplay: "通常時は有利区間ランプ消灯タイプのため、有利区間ランプによる設定変更判別は不可。ランプ位置はクレジット右下ドット。"
    firstBonusLowerPanel: "初回ボーナスで下パネル点滅なら設定変更（リセット）濃厚。設定変更時の50%で発生とする一撃の自社調査値。非発生では据え置き確定にならない片方向示唆。"
  numericResetData:
    firstBonusLowerPanelFlashOnReset: "50%（一撃・自社調査）"
    normalFirstRelief: "555G+α / 50%でボーナス"
    normalSecondRelief: "777G+α / BIG確定"
    resetSpecificCeilingShortening: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/18588/nippon
    sourceType: industry
    usedFor: [machineName, modelCode, manufacturer, releaseDate, systemConcept, combinedProbabilityRange, payout, ceiling, bonusPayout]
  - url: https://news.p-world.co.jp/articles/18664/greenbelt
    sourceType: industry
    usedFor: [releaseDate, manufacturer, netIncrease, bonusProbabilities, payoutRateRange, baseGamesPer50Coins, basicPayout, oneGameRenRate]
  - url: https://news.p-world.co.jp/articles/18547/yugitsushin
    sourceType: industry-regulatory
    usedFor: [modelCode, inspectionCode, manufacturer]
  - url: https://g-net-ps.com/info/s0005/
    sourceType: industry-sales
    usedFor: [releaseDate, settings, payoutRate, bigRegPremiumProbabilities, combinedProbability, baseGamesPer50Coins]
  - url: https://www.p-world.co.jp/machine/database/9530
    sourceType: industry-database
    usedFor: [generation, systemType, netIncrease, basicPayout, completeNotice]
  - url: https://1geki.jp/slot/s_haruichiban/3/
    sourceType: analysis-high
    usedFor: [normalCeiling, resetDetection, firstBonusLowerPanelFlashOnReset]
  - url: https://1geki.jp/slot/s_haruichiban/4/
    sourceType: analysis-high
    usedFor: [baseGamesPer50Coins]
  - url: https://slotmethod.jp/archives/14158/
    sourceType: analysis-single
    usedFor: [normalCeiling, resetBenefitNone, advantageousSectionLamp, resetDetectionLimit]
  - url: https://nana-press.com/kaiseki/machine/283/7813/
    sourceType: analysis-high
    usedFor: [normalCeiling, ceilingBenefit]
  - url: https://pachinko-curation.com/26710/
    sourceType: archive-secondary
    usedFor: [modelCode, releaseDate, settings, payoutRate, bonusProbabilities, premiumProbability, basicPayout, baseGamesPer50Coins]

unverifiedAfterResearch:
  - "設定変更時に天井ゲーム数が必ず0へ戻ることを直接明記した機種固有資料。"
  - "据え置き時の555G/777G天井ゲーム数・内部状態の厳密なCARRY_OVER契約。"
  - "純電源OFF→ONのみの場合の天井ゲーム数・内部状態・有利区間の機種固有契約。"
  - "設定変更専用モード振り分け・高確スタート・専用初当たり率。"
  - "本機固有ガックン条件・発生率。"

conflicts: []

notes:
  - "西陣が販売、DAXELが製造。型式はS春一番DE。"
  - "検定番号1S1181は東京都公安委員会検定通過資料で確認。"
  - "通常時有利区間ランプ消灯型のため、ランプ消灯単独で設定変更判別はできない。"
  - "設定変更示唆50%は初回ボーナス時の下パネル点滅発生率であり、朝一1G目の当選率やリセット恩恵率ではない。"
```
