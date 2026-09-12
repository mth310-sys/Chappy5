# SLOTえとたま — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1489
canonicalKey: 2022-04-04_slot-etotama
machineName: "SLOTえとたま"
alternateName: "Sえとたま / パチスロえとたま"
manufacturer: "メーシー（ユニバーサル系）"
modelCode: "S/えとたま/EM"
inspectionCode: "UNVERIFIED_AFTER_RESEARCH"
releaseDate: 2022-04-04
generation: "6.2号機"
systemType: "A+AT（リアルボーナス+ゲーム数上乗せAT）"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.6
    "2": 98.8
    "3": 100.4
    "4": 104.1
    "5": 106.2
    "6": 108.2
  initialHitBySetting:
    bonusCombined:
      "1": "1/178.1"
      "2": "1/175.2"
      "3": "1/172.5"
      "4": "1/165.5"
      "5": "1/161.4"
      "6": "1/157.5"
    at:
      "1": "1/464.1"
      "2": "1/443.1"
      "3": "1/421.7"
      "4": "1/368.3"
      "5": "1/339.3"
      "6": "1/314.0"
  baseGamesPer50Coins: "約37G/50枚"
  netIncrease: "AT『萌力祭』約2.0枚/G"
  basicPayout:
    etotamaBonus: "平均約150枚"
    miniBonus: "平均約40枚"
    baseBonus: "平均約40枚"
    at: "初期50G+α"
  normalCeiling: "有利区間移行後、ボーナス&AT間800G消化でAT当選"
  modeSpecificMinimumData: "通常時は『せるふまっぷ』で萌力100pt到達を目指し、高確移行またはAT抽選。ATはゲーム数上乗せ型。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。ボーナス&AT間800G天井を新規進行。"
    modeState: "内部状態RESET。設定変更専用のモード振り分け表は確認できず。"
    advantageousSection: "RESET。"
    morningStart: "開始ステージの確定資料は確認できず。"
    benefit: "固定短縮天井や明確なリセット専用優遇は確認できず。実戦解析でも特段のリセット恩恵は見られないとされる。"
    disadvantage: "設定変更専用の主要不利数値は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。据え置きは天井進行を引き継ぐ。"
    modeState: "CARRY_OVER扱い。電源OFF→ON資料と整合。"
    advantageousSection: "CARRY_OVER扱い。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。天井引継ぎ。"
    modeState: "CARRY_OVER。内部状態引継ぎ。"
    advantageousSection: "CARRY_OVER。"
  gameCounterReset: "設定変更=RESET / 据え置き・純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    fixedShortening: "NO_PUBLIC_FIXED_SHORTENING_FOUND_AFTER_RESEARCH"
    normalMax: "ボーナス&AT間800G。"
  modeAfterReset:
    behavior: "内部状態をリセットして新規有利区間へ。設定変更専用モード振り分け数値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "設定変更でRESET / 据え置き・純電断でCARRY_OVER。"
  advantageousSectionReset: "設定変更でRESET。据え置き・純電源OFF→ONはCARRY_OVER。通常時は有利区間ランプが消灯しているため朝一判別には使用不可。"
  resetBenefits:
    - "固定短縮天井・専用早当たり数値は確認できず。"
    - "実戦値ベース資料では明確なリセット恩恵なしと評価。"
  resetPenalties:
    - "設定変更専用の主要不利数値は確認できず。"
  resetDetection:
    lampDisplay: "通常時から有利区間ランプ消灯タイプのため、朝一ランプでは設定変更/据え置きを判別できない。"
    stage: "設定変更専用開始ステージはPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    reelBehavior: "機種別解析でガックン判別は効かない/判別不可とされる。"
  numericResetData:
    dedicatedResetNumeric: "設定変更専用のモード振り分け、短縮天井、一定G以内当選率など比較可能な公開数値はNO_PUBLIC_RESET_SPECIFIC_NUMERIC_TABLE_FOUND_AFTER_RESEARCH。"

sources:
  - url: https://news.p-world.co.jp/articles/20087/nippon
    sourceType: industry
    usedFor: [releaseDate, manufacturer, modelCode, systemType, netIncrease, bonusPayout, atInitialGames]
  - url: https://1geki.jp/slot/s_etotama/
    sourceType: analysis-high
    usedFor: [payoutRateBySetting, bonusCombined, atInitialHit, releaseDate, systemType]
  - url: https://ichikatsu.com/etotama/
    sourceType: analysis
    usedFor: [payoutRateBySetting, bonusCombined, atInitialHit, baseGamesPer50, ceiling, settingChangeBehavior, powerCycleBehavior, lampDetection]
  - url: https://www.slopachi-quest.com/article/etotama-tenjou/
    sourceType: analysis
    usedFor: [ceiling, baseGamesPer50, settingChangeBehavior, powerCycleBehavior, internalState, advantageousSection, lampDetection, reelDetection]
  - url: https://slotjin.com/tenjoukitaichi/etotama/
    sourceType: analysis
    usedFor: [settingChangeBehavior, powerCycleBehavior, internalState, advantageousSection, resetBenefitAssessment, lampDetection]
  - url: https://slotkaiseki.com/etotama_tuujoumap/
    sourceType: analysis
    usedFor: [advantageousSectionResetTiming, ceiling, gameplay]
  - url: https://www.pachibee.jp/machines/index/222030002
    sourceType: machine-database
    usedFor: [generation, releaseDate, basicPayout, netIncrease, ceiling]
  - url: https://chonborista.com/slot/universal-slot/163305/
    sourceType: analysis-high
    usedFor: [payoutRateBySetting, bonusCombined, atInitialHit, baseGamesPer50, netIncrease, ceiling]
  - url: https://q-and-a.hatenablog.com/entry/%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%BC%E3%81%AE%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E
    sourceType: historical-inspection-list
    usedFor: [modelCode, inspectionPassDate]

unverifiedAfterResearch:
  - "検定番号。正式型式S/えとたま/EMと2022-02-14検定通過は確認できたが、1Sxxxx形式の番号を複数系統で固定できず。"
  - "設定変更専用の内部モード/状態振り分け数値。状態RESETは確認できるが専用数値表は確認できず。"
  - "設定変更専用の開始ステージ。複数の朝一解析でステージは調査中/記載なし。"
  - "設定変更専用の早当たり率・CZ/AT優遇数値。実戦値では明確な恩恵なしとされ、解析数値は確認できず。"

conflicts: []

researchNotes:
  - "2022-04-04導入。正式型式S/えとたま/EM。検定通過日は2022-02-14資料で確認。"
  - "性能コアは1geki、イチカツ、ちょんぼりすた等で設定別値が一致。"
  - "天井は有利区間移行後のボーナス&AT間800GでAT当選。"
  - "設定変更時は天井・内部状態・有利区間RESET、電源OFF→ON時は引継ぎ。通常時有利区間ランプ消灯タイプなのでランプ判別不可。"
  - "スロパチクエストはガックン判別も効かないと明記。slotjinもガックン等で判別困難とするため、変更判別は実質困難として保存。"
  - "有利区間は設定変更時だけでなく通常時ボーナス終了時・AT終了時にも100%リセットとする解析があり、朝一だけの特殊恩恵と混同しない。"
```
