# ぱちスロ ギャグダー — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1472
canonicalKey: 2022-01-24_pachislot-gaguda
machineName: ぱちスロ ギャグダー
manufacturer: 京楽産業.
modelCode: "SギャグラーKB"
inspectionCode: "1S1065"
releaseDate: 2022-01-24
generation: "6.2号機"
systemType: AT / 完全告知 / 擬似ボーナス
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_MEDIUM_HIGH_RESET_WITH_UNVERIFIED_CARRYOVER_DETAILS
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "4", "5", "6"]
  payoutRatePct:
    "1": 97.8
    "2": 98.4
    "4": 101.7
    "5": 106.8
    "6": 110.4
  initialHitBySetting:
    definition: "擬似ボーナス合算"
    "1": "1/167.4"
    "2": "1/163.1"
    "4": "1/151.0"
    "5": "1/133.1"
    "6": "1/122.5"
  bonusBySetting:
    big:
      "1": "1/281.2"
      "2": "1/275.8"
      "4": "1/260.0"
      "5": "1/234.3"
      "6": "1/219.3"
    reg:
      "1": "1/413.5"
      "2": "1/399.1"
      "4": "1/360.0"
      "5": "1/308.4"
      "6": "1/277.3"
  baseGamesPer50Coins: "約34.9〜36.2G/50枚（設定1〜6。別資料では約35G表記）"
  netIncrease: "擬似ボーナス約6.0枚/G"
  basicPayout: "BIG約300〜305枚 / REG約100〜104枚"
  normalCeiling: "通常時999G消化で擬似ボーナス確定。設定変更時は894Gへ短縮。"
  modeSpecificMinimumData:
    gagRen: "ボーナス4連でギャグ連状態移行確定（3連以下でも移行抽選あり）。ギャグ連状態は100G以内の引き戻し期待度約80%。"
    immediateZone: "ボーナス後5G間は即連期待度約20%とする解析あり。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。通常999G天井に対して設定変更後は894Gへ短縮。105G短縮。"
    modeState: "設定変更専用の内部モード振り分け・朝一専用モード公開値は再探索後も直接確認できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "設定変更後は有利区間ランプ消灯。ランプ挙動資料から有利区間リセットと判断できるが、内部全状態の詳細は収集対象外。"
    morningStart: "最大天井894G。固定105G短縮が主要な朝一恩恵。"
    benefit: "天井999G→894Gへ105G短縮。"
    disadvantage: "公開された設定変更専用の主要不利要素はNONE_CONFIRMED_AFTER_RESEARCH。"
  unchanged:
    gameCountCeiling: "前日点灯→朝一点灯が据え置き濃厚材料。天井ゲーム数の厳密な据え置きCARRY_OVERを直接明記した高信頼資料は今回固定できずUNVERIFIED_AFTER_RESEARCH。"
    modeState: "UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "朝一有利区間ランプ点灯は据え置き濃厚とする解析あり。前日消灯時は判別不能。"
  powerOffOn:
    gameCountCeiling: "純電源OFF→ONのみでの天井ゲーム数・内部モード・状態の扱いを機種固有資料で直接固定できずUNVERIFIED_AFTER_RESEARCH。"
    modeState: "UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "純電源OFF→ON単独の機種固有契約はUNVERIFIED_AFTER_RESEARCH。"
  gameCounterReset: "設定変更時は天井基準が894Gへ再設定。据え置き/純電源OFF→ONの厳密なゲーム数引継ぎ契約はUNVERIFIED_AFTER_RESEARCH。"
  ceilingAfterReset:
    resetSpecificShortening: "通常999G → 設定変更後894G（105G短縮）。恩恵は擬似ボーナス確定。"
  modeAfterReset:
    behavior: "設定変更専用のモード振り分け・高確スタート等は公開値を固定できずUNVERIFIED_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "細かな内部状態の設定変更/据え置き/純電断差は再探索後も直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "設定変更後は有利区間ランプ消灯。通常時は点灯/消灯の両状態があり、ボーナス初当たりで点灯、完走やボーナス後100G消化時の一部で消灯とする解析がある。"
  resetBenefits:
    - "設定変更後の最大天井が894Gへ短縮（通常999Gから105G短縮）。"
  resetPenalties:
    - "公開された設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン条件・発生率は、機種名/型式/京楽/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等へ検索語を変えて再探索したが直接固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "有利区間ランプは払出表示（WIN）右下ドット。前日点灯＋朝一消灯=設定変更濃厚、朝一点灯=据え置き濃厚。前日消灯ならランプ判別不可。"
  numericResetData:
    normalCeiling: "999G"
    resetCeiling: "894G"
    ceilingReduction: "105G"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://www.kyoraku.co.jp/news/detail/602
    sourceType: official
    usedFor: [machineName, releaseDate, manufacturerBrand, completeNoticeConcept, bonusTypes, bigApproxPayout]
  - url: https://web-greenbelt.jp/post-54543/
    sourceType: industry
    usedFor: [releaseDate, manufacturer, bigRegProbabilityRange, bonusPayout]
  - url: https://news.p-world.co.jp/articles/18686/yugitsushin
    sourceType: industry-regulatory
    usedFor: [modelCode, inspectionCode, manufacturer]
  - url: https://www.p-world.co.jp/machine/database/9561
    sourceType: industry-database
    usedFor: [generation, systemType, netIncrease, bonusPayout, normalCeiling, bigRegProbabilities]
  - url: https://1geki.jp/slot/s_gyaguda/
    sourceType: analysis-high
    usedFor: [payoutRate, initialHit, bonusProbabilities, releaseDate, basicPayout, netIncrease]
  - url: https://chonborista.com/slot/kyoraku-slot/157473/
    sourceType: analysis-high
    usedFor: [baseGamesPer50Coins, payoutRate, bonusProbabilities, normalCeiling, resetCeiling, gagRen]
  - url: https://slotmethod.jp/archives/13485/
    sourceType: analysis-single
    usedFor: [resetCeiling, ceilingReduction, advantageousSectionLamp, resetDetection]
  - url: https://www.slopachi-quest.com/article/gyaguda-tenjou/
    sourceType: analysis-single
    usedFor: [resetCeiling, ceilingReduction, resetBenefit, gagRenZone]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/13/kyoraku_slot_13.php
    sourceType: old-analysis
    usedFor: [crossCheckMachineIdentity, morningResearchRoute]

unverifiedAfterResearch:
  - "据え置き時の天井ゲーム数/内部モード/状態の厳密なCARRY_OVER契約。"
  - "純電源OFF→ONのみの場合の天井ゲーム数・内部モード・状態・有利区間の機種固有契約。"
  - "設定変更時の内部モード振り分け・高確等の公開朝一数値。"
  - "本機固有の設定変更時リールガックン条件・発生率。"

conflicts:
  - field: basicPayout
    canonical: "BIG約300枚 / REG約100枚（公式・P-WORLDの丸め表記）"
    alternate: "BIG約305枚 / REG約104枚（解析資料）"
    treatment: "定義差/丸めの可能性があるため平均せず両表記を保持。"

notes:
  - "型式名は検定通過資料でSギャグラーKB。商品名『ぱちスロ ギャグダー』と異なるため表記揺れ検索に利用。"
  - "設定3は搭載されず、設定構成は1/2/4/5/6。"
  - "朝一ランプ判別は前日消灯時に不能。通常時も有利区間ランプが点灯/消灯し得るため、消灯単独を絶対的な設定変更確定とは扱わない。"
```
