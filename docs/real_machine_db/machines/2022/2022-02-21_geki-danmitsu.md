# パチスロ 言い訳はさせないわよ by 激壇蜜 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1480
canonicalKey: 2022-02-21_geki-danmitsu
machineName: パチスロ 言い訳はさせないわよ by 激壇蜜
manufacturer: ボーダー
modelCode: "SゲキダンミツEE"
inspectionCode: "1S1568"
releaseDate: 2022-02-21
generation: "6号機"
systemType: "ノーマルAタイプ / 完全告知 / A-280"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_MACHINE_SPECIFIC_POWER_AND_GAKKUN
confidence: HIGH_CORE_RESET_NON_APPLICABLE_FIELDS_HIGH_MACHINE_SPECIFIC_POWER_GAKKUN_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["L", "3", "6", "H"]
  payoutRatePctMarket:
    "L": 97.5
    "3": 99.3
    "6": 105.2
    "H": 105.6
  payoutRatePctFullProcedure:
    "L": 100.0
    "3": 101.8
    "6": 107.7
    "H": 108.2
  payoutRatePublishedIndustryPrecision:
    note: "業界記事では市場L=97.47%、H=105.62%、フル攻略L=100.01%、H=108.21%の精密表記あり。HAZUSE等の丸め表記とは定義同一の丸め差として併記。"
  initialHitBySetting:
    definition: "ボーナス合算"
    "L": "1/168.5"
    "3": "1/159.8"
    "6": "1/142.5"
    "H": "1/442.8"
  bonusProbability:
    BIG:
      "L": "1/9362.3"
      "3": "1/284.9"
      "6": "1/284.9"
      "H": "1/8192.0"
    REG:
      "L": "1/171.6"
      "3": "1/364.1"
      "6": "1/284.9"
      "H": "1/468.1"
  baseGamesPer50Coins:
    "L": "78.6G/50枚"
    "3": "41.0G/50枚"
    "6": "43.9G/50枚"
    "H": "1227.7G/50枚"
  netIncrease: "NOT_APPLICABLE（ノーマルボーナス機）"
  basicPayout: "BIG 280枚 / REG 104枚"
  normalCeiling: "非搭載"
  modeSpecificMinimumData:
    specialSettings: "設定L・Hを含む4段階。L/HはBIGが極端に重く、Hはベース1227.7G/50枚という特殊設計。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "AT/CZ用モード・天井モードを持つ機種ではない。設定変更時の成立済みボーナスフラグ/告知状態の機種固有契約は公開資料から固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLEとして扱う。ノーマルAタイプで、朝一攻略に関係する有利区間ランプ/有利区間モードの機種固有公開情報は確認できず。"
    morningStart: "設定変更専用ステージ・朝一専用モードは確認できず。"
    benefit: "短縮天井、専用モード、CZ/AT優遇などはNOT_APPLICABLE。公開された設定変更専用のボーナス優遇率も確認できず。"
    disadvantage: "公開された設定変更専用の主要不利数値は確認できず。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "据え置き時の成立済みボーナスフラグ/告知状態について機種固有の直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE。"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "純電源OFF→ON時の成立済みボーナスフラグ/告知状態の機種固有契約は、型式・メーカーを含めて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE。"
  gameCounterReset: "NOT_APPLICABLE。ゲーム数天井なし。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE。天井非搭載。"
    normalCeiling: "NOT_APPLICABLE"
  modeAfterReset:
    behavior: "NOT_APPLICABLE。AT/CZ用モード・朝一専用モードなし。"
  stateAfterReset:
    behavior: "設定変更/据え置き/純電断時の成立済みボーナスフラグ・告知状態の機種固有公開契約はUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "NOT_APPLICABLE（ノーマルAタイプとして朝一有利区間狙いの対象外）。"
  resetBenefits:
    - "短縮天井・専用モード・朝一当選率などの主要リセット恩恵は確認できず/該当なし。"
  resetPenalties:
    - "公開された主要リセット不利数値は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン条件/発生率は、機種名・略称『激壇蜜』・型式SゲキダンミツEE・ボーダーと設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンを組み替えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "設定Lは通常時上部パネル消灯という設定識別要素があるが、これは設定L固有挙動であり設定変更判別とは別。設定変更/据え置き判別用の機種固有ランプ契約は確認できず。"
    morningBehavior: "設定変更専用の外見上確定挙動は確認できず。"
  numericResetData:
    resetSpecificCeiling: "NOT_APPLICABLE"
    resetSpecificModeDistribution: "NOT_APPLICABLE"
    resetSpecificHitRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/19124/nippon
    sourceType: industry-primary
    usedFor: [systemType, bigPayout, regPayout, bonusProbabilitySettings3And6, payoutRateFullProcedure, releaseTiming]
  - url: https://news.p-world.co.jp/articles/19606/nippon
    sourceType: industry-primary
    usedFor: [releaseDate, modelCode, systemType, payoutOutline]
  - url: https://news.p-world.co.jp/articles/19108/yugitsushin
    sourceType: industry-primary
    usedFor: [systemType, bigPayout, regPayout, baseSetting3, bonusProbabilitySettings3And6, releaseTiming]
  - url: https://news.p-world.co.jp/articles/19224/yugitsushin
    sourceType: industry-primary-public-safety-summary
    usedFor: [modelCode, inspectionCode]
  - url: https://web-greenbelt.jp/post-60171/
    sourceType: industry-primary
    usedFor: [marketPayoutRange, fullProcedurePayoutRange, bigPayout, regPayout]
  - url: https://hazuse.com/machine/pachislot/1S1568/
    sourceType: old-machine-db-analysis-high
    usedFor: [releaseDate, manufacturer, modelCode, inspectionCode, generation, bonusProbability, baseBySetting, payoutRates]
  - url: https://hazuse.com/machine/pachislot/1S1568/genre/201/
    sourceType: old-machine-db-analysis-high
    usedFor: [bonusProbability, baseBySetting, payoutRates]
  - url: https://p-kn.com/slot/3745/
    sourceType: analysis-high
    usedFor: [bonusProbability, fullProcedurePayout, bigPayout, regPayout]
  - url: https://1geki.jp/slot/s_geki_danmitsu/1/
    sourceType: analysis-high
    usedFor: [bonusProbability]
  - url: https://1geki.jp/slot/s_geki_danmitsu/4/
    sourceType: analysis-high
    usedFor: [baseBySetting]
  - url: https://chonborista.com/slot/border/163661/
    sourceType: analysis-secondary
    usedFor: [ceilingNotEquipped, systemType, bigPayout, regPayout, baseSetting3]

unverifiedAfterResearch:
  - "設定変更/据え置き/純電源OFF→ON時の成立済みボーナスフラグ・告知状態の機種固有契約。"
  - "本機固有の設定変更時ガックン条件・発生率。"
  - "設定変更専用のボーナス当選率/朝一数値。"

conflicts:
  - field: "payoutRate_precision"
    status: "ROUNDING_DIFFERENCE_NOT_AVERAGED"
    values: "業界記事: 市場L97.47/H105.62、フルL100.01/H108.21。HAZUSE等: 市場L97.5/H105.6、フルL100.0/H108.2。"
    handling: "精密値と丸め値を併記し平均しない。"

researchNotes:
  - "最初の検索で欠損扱いにせず、正式名・激壇蜜・SゲキダンミツEE・ボーダーと設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン/有利区間を組み替えて再探索。"
  - "ノーマルAタイプで天井/CZ/ATモードが非搭載のため、resetBehaviorの該当しない欄は空欄にせずNOT_APPLICABLEを明示。"
  - "設定Lの上部パネル消灯は設定L識別であり、設定変更判別とは混同しない。"
```
