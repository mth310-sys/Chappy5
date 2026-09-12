# 沖縄フェスティバル-30 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1486
canonicalKey: 2022-03-28_okinawa-festival-30
machineName: "沖縄フェスティバル-30"
alternateName: "S沖縄フェスティバル-30 / 沖フェス30"
manufacturer: "パイオニア"
modelCode: "S沖縄フェスティバルEX-30"
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2022-03-28
generation: "6号機"
systemType: "30Φ・完全告知ノーマルAタイプ"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_SCOPE_WITH_UNVERIFIED_DEVICE_BEHAVIOR
confidence: HIGH_CORE_MEDIUM_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.0
    "2": 98.5
    "3": 100.0
    "4": 103.5
    "5": 105.5
    "6": 108.0
  bigBySetting:
    "1": "1/280"
    "2": "1/270"
    "3": "1/260"
    "4": "1/240"
    "5": "1/230"
    "6": "1/220"
  regBySetting:
    "1": "1/455"
    "2": "1/439"
    "3": "1/425"
    "4": "1/399"
    "5": "1/385"
    "6": "1/366"
  bonusCombinedBySetting:
    "1": "1/173"
    "2": "1/167"
    "3": "1/161"
    "4": "1/150"
    "5": "1/144"
    "6": "1/137"
  baseGamesPer50Coins: "約40.4G/50枚（別資料では約40G表記）"
  netIncrease: NOT_APPLICABLE_REAL_BONUS_NORMAL
  basicPayout:
    big: "最大252枚"
    reg: "最大96枚"
  normalCeiling: "非搭載"
  modeSpecificMinimumData: "通常時AT/CZ・規定G数モードを用いない完全告知ノーマルタイプ。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE。天井・規定G数ゾーン非搭載。"
    modeState: "NOT_APPLICABLE_TO_GAMEPLAY。朝一専用モード、AT/CZモード、通常時高確状態は公開仕様上確認されない。成立済みボーナス等の電断/設定変更時の厳密な内部契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "通常ノーマル機として朝一客判断に使う有利区間リセット恩恵/ランプ判別は確認できず。厳密な内部管理契約はUNVERIFIED_AFTER_RESEARCH。"
    morningStart: "設定変更専用の朝一ゲーム数、短縮天井、専用モード、初当たり優遇の公開情報なし。"
    benefit: "設定変更専用の主要恩恵は確認できず。"
    disadvantage: "設定変更専用の主要な不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "NOT_APPLICABLE_TO_GAMEPLAY。通常時モード/状態の持越しを狙うゲーム性ではない。成立済みボーナス等の厳密契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "朝一判別・天井狙いに使える公開持越し契約は確認できず。"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "通常時モード/状態はNOT_APPLICABLE_TO_GAMEPLAY。成立済みボーナス等の純電源OFF→ON時契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "朝一判別・恩恵に使える公開値は確認できず。"
  gameCounterReset: "NOT_APPLICABLE。天井・規定ゲーム数ゾーンなし。前回ボーナス後777G以降の単独BIGフリーズは設定示唆条件であり、天井ではないためリセット天井値として扱わない。"
  ceilingAfterReset:
    fixedShortening: "NOT_APPLICABLE。通常時天井非搭載。"
    normalMax: "NONE"
  modeAfterReset:
    behavior: "NOT_APPLICABLE。設定変更時専用の通常モード/朝一モードは確認されない。"
  stateAfterReset:
    behavior: "通常時の高確/低確等、朝一客行動に影響する状態管理は確認されない。成立済みボーナス等の低レイヤ状態はUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "朝一客が利用できる有利区間ランプ/区間リセット恩恵は確認できず。ノーマル機のためAT機の有利区間挙動を推測転記しない。"
  resetBenefits:
    - "公開された設定変更専用の短縮天井、専用モード、初当たり優遇、朝一当選率は確認できず。"
  resetPenalties:
    - "公開された設定変更専用の不利数値は確認できず。"
  resetDetection:
    lampDisplay: "設定変更/据え置きを判別する本機固有の朝一ランプ表示契約はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    reelBehavior: "本機固有の設定変更時ガックン発生条件・発生率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    note: "777G以降の単独BIGフリーズは設定4以上濃厚とされる設定推測要素で、設定変更判別ではない。"
  numericResetData: "NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH"

sources:
  - url: https://www.slot-pioneer.co.jp/information/pdf/okifes2022.pdf
    sourceType: official
    usedFor: [machineName, manufacturer, modelCode, coinSize, systemType, shipmentWindow, basicPayout, separate25phiModel]
  - url: https://p-bomb.co.jp/industry/new-machine/3343/
    sourceType: industry-primary-secondary
    usedFor: [modelCode, separate25phiModel, shipmentWindow, basicPayout, bonusRange, payoutRange]
  - url: https://www.p-world.co.jp/machine/database/9581
    sourceType: industry-database
    usedFor: [generation, systemType, basicPayout, gameplay]
  - url: https://ichikatsu.com/newslot2022/
    sourceType: analysis-calendar
    usedFor: [releaseDate, baseGamesPer50, bigBySetting, regBySetting, combinedBySetting, payoutRate]
  - url: https://chonborista.com/slot/pionia-slot/165458/
    sourceType: analysis-high
    usedFor: [releaseDate, baseGamesPer50, basicPayout, ceilingNone, bigBySetting, regBySetting, combinedBySetting, payoutRate]
  - url: https://1geki.jp/slot/s_okinawafestival30/
    sourceType: analysis-high
    usedFor: [releaseDate, systemType, payoutRateCrossCheck]
  - url: https://p-kn.com/slot/3751/
    sourceType: historical-analysis
    usedFor: [releaseDate, systemType, bigRegCrossCheck]
  - url: https://pachinko-curation.com/28405/
    sourceType: industry-secondary
    usedFor: [modelCode, releaseDate, baseGamesPer50, basicPayout, performanceCrossCheck]

unverifiedAfterResearch:
  - "検定番号。『S沖縄フェスティバルEX-30』『S沖縄フェスティバルEX－30』『沖縄フェスティバル 2022』『パイオニア』を組み替え、検定/型式試験/1S系を探索したが番号を直接固定できず。"
  - "設定変更/据え置き/純電源OFF→ON時の成立済みボーナス等、低レイヤ内部状態の厳密な保持/初期化契約。機種名・型式名・メーカー名に設定変更/リセット/朝一/据え置き/電源OFF ONを組み合わせて再探索したが直接資料を固定できず。"
  - "本機固有の朝一ガックン条件・発生率、および表示による設定変更/据え置き判別。『ガックン』『リール』『朝一』『変更判別』まで検索語を変えたが直接資料を固定できず。"
  - "朝一客判断に使える有利区間ランプの本機固有契約。AT機の一般論は転記しない。"

conflicts:
  - field: baseGamesPer50Coins
    values: ["約40.4G/50枚", "約40G/50枚"]
    treatment: "丸め差として平均せず併記し、より精密な複数解析掲載値40.4Gを代表値とした。"

researchNotes:
  - "メーカー公式プレスリリースでは30φ『沖縄フェスティバル-30』型式S沖縄フェスティバルEX-30の納品開始を2022年3月下旬、25φ『沖縄フェスティバル』型式S沖縄フェスティバルEXは未定としている。2022-03-28の実導入本線は30φ版として独立登録し、25φ版を同日導入扱いで混同しない。"
  - "3/8〜3/27の境界は2022年新台カレンダーを再確認し、3/7群の次の明確なパチスロ導入が3/28本機であることを確認。"
  - "ノーマルAタイプかつ天井非搭載のため、resetBehaviorはAT機の一般論で穴埋めせず、朝一稼働・収益へ影響する公開差分が見つからない項目をNOT_APPLICABLEまたはUNVERIFIED_AFTER_RESEARCHで分離した。"
  - "前回ボーナスから777G以降の単独BIG時フリーズは設定4以上濃厚とする解析があるが、天井/リセット恩恵ではないためnumericResetDataへ混入させていない。"
```
