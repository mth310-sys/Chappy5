# パチスロ うしおととら 雷槍一閃 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1428
canonicalKey: 2021-09-06_ushio-to-tora-raiso-issen
machineName: パチスロ うしおととら 雷槍一閃
manufacturer: D-light（大一商会系）
modelCode: Sパチスロうしおととら雷槍一閃JH
inspectionCode: 1S0775
releaseDate: 2021-09-06
generation: 6.2号機
systemType: AT（擬似ボーナス経由・周期抽選・セットストック+継続抽選）
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_MORNING_CZ_BENEFIT
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [L, 1, 2, 4, 5, 6]
  payoutRatePct: [80.0, 97.8, 98.9, 103.0, 107.2, 110.2]
  initialHitBySetting:
    allInitialHit: [UNPUBLISHED, "1/286.9", "1/281.0", "1/256.8", "1/246.8", "1/216.1"]
    atInitialHit: [UNPUBLISHED, "1/685.2", "1/644.8", "1/546.9", "1/454.9", "1/313.1"]
  baseGamesPer50Coins: "約37.9G/50枚"
  netIncrease: "AT・擬似ボーナス 約2.7枚/G"
  basicPayout: "うしとらチャンスは10G+αの擬似ボーナス。AT『うしとRUSH』初回は30G消化後に決戦の刻へ移行し、セットストック+継続抽選で継続。"
  normalCeiling: "有利区間移行後、通常時最大7周期（約700G+α）。到達時はうしとらチャンス60% / 真・うしとらチャンス25% / AT直撃15%。"
  notes:
    - "業界初期の有利区間3000G対応6.2号機。"
    - "設定Lは待機状態で下パネル消灯により外見判別可能との解析資料がある。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。通常時7周期（約700G+α）天井を新規有利区間側で再カウント。"
    modeState: "RESET。うしおポイントもRESET。設定変更時の一部で内部CZ『激槍慟哭ゾーン』状態から開始する公開解析あり。発生率は未公表。"
    advantageousSection: "RESET。"
    morningStart: "液晶はおん爺ステージから開始。"
    benefit: "設定変更時の一部で内部CZスタートとなるため、朝一0～20G程度に実戦上の狙い価値があるとする当時解析あり。"
    disadvantage: "RESET_SPECIFIC_DISADVANTAGE_NONE_CONFIRMED_AFTER_RESEARCH"
  unchanged:
    gameCountCeiling: "CARRY_OVER"
    modeState: "CARRY_OVER。うしおポイント・液晶ステージも引き継ぐ。"
    advantageousSection: "CARRY_OVER"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER"
    modeState: "CARRY_OVER。うしおポイント・ステージ引継ぎ。"
    advantageousSection: "CARRY_OVER"
  gameCounterReset: "設定変更時RESET / 据え置き・純電断CARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "NONE_CONFIRMED。設定変更専用の固定短縮天井は確認できず。"
    ceilingValue: "通常の新規有利区間天井＝7周期（約700G+α）"
  modeAfterReset:
    behavior: "うしおポイントをクリアし、新規有利区間へ。設定変更時の一部で内部CZ『激槍慟哭ゾーン』開始。"
    resetSpecificDistribution: "UNPUBLISHED_AFTER_RESEARCH"
  stateAfterReset: "内部状態は新規有利区間側へ切替。設定変更時の一部で内部CZスタート。具体的初期振り分け率はUNPUBLISHED_AFTER_RESEARCH。"
  advantageousSectionReset: "設定変更時RESET / 据え置き・純電断CARRY_OVER。通常運用ではうしとらチャンス失敗・AT終了等で有利区間ランプ消灯契機あり。"
  resetBenefits:
    - "設定変更時の一部で、見た目通常でも内部CZ『激槍慟哭ゾーン』スタート。"
    - "そのため朝一短時間に当選機会が上乗せされる。"
  resetPenalties:
    - "公開された設定変更専用不利要素は確認できず。"
  resetDetection:
    advantageousSectionLamp: "通常時点灯型。朝一消灯＝設定変更濃厚、点灯＝据え置き濃厚。ただし前日消灯閉店・店側対策時を除く。"
    stageAndPoints: "設定変更はおん爺ステージ+うしおポイントRESET。据え置きはステージ・ポイント引継ぎのため補助判別に利用可能。"
    machineSpecificGakkun: "UNVERIFIED_AFTER_RESEARCH"
  numericResetData:
    resetCeiling: "7周期（約700G+α）。設定変更専用短縮値なし。"
    ceilingRewardDistribution: "うしとらチャンス60% / 真・うしとらチャンス25% / AT直撃15%（通常天井共通値）"
    internalCzAfterResetRate: "UNPUBLISHED_AFTER_RESEARCH"
    resetSpecificModeDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"

sources:
  - url: https://daiichi777.jp/news/detail/97/
    sourceType: official
    usedFor: [modelCode, generation, advantageousSection3000G]
  - url: https://yugi-nippon.com/pachinko-new-machine/post-45468/
    sourceType: contemporary-industry
    usedFor: [manufacturerContext, modelCode, directStorePreRelease, generation]
  - url: https://hazuse.com/machine/pachislot/1S0495/
    sourceType: analysis-high
    usedFor: [releaseDate, manufacturer, modelCode, inspectionCode, netIncrease, generation]
  - url: https://hazuse.com/machine/pachislot/1S0495/genre/207/
    sourceType: analysis-high
    usedFor: [ceiling, ceilingRewardDistribution, settingChangeReset, powerCycleCarryOver, ushioPoint, stage, advantageousSectionLamp]
  - url: https://1geki.jp/slot/s_ushiototora/
    sourceType: analysis-high
    usedFor: [releaseDate, payoutRate, initialHit, atInitialHit, netIncrease, system]
  - url: https://1geki.jp/slot/s_ushiototora/3/
    sourceType: analysis-high
    usedFor: [ceiling, settingChangeBehavior, powerCycleBehavior]
  - url: https://www.p-world.co.jp/machine/database/9429
    sourceType: industry-database
    usedFor: [generation, netIncrease, system, atBasicPerformance]
  - url: https://www.slopachi-quest.com/article/usiototora-settei/
    sourceType: contemporary-analysis
    usedFor: [baseGamesPer50Coins, payoutRate, initialHit, atInitialHit]
  - url: https://slot-seven.com/ushiototora-tenzyou/
    sourceType: contemporary-analysis-secondary
    usedFor: [settingChangeReset, unchangedCarryOver, internalCzMorningBenefit, resetDetection]
  - url: https://ichikatsu.com/ushitora/
    sourceType: contemporary-analysis-secondary
    usedFor: [releaseDate, ceiling, advantageousSectionLampDetection]

unverifiedAfterResearch:
  - "設定変更時の内部CZ『激槍慟哭ゾーン』開始率。公開資料は『一部』まで。"
  - "設定変更専用のモード振り分け率・状態初期振り分け率。"
  - "本機固有のガックン条件・発生率。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、旧表示のINDEX、LATEST_HANDOFF、No.1427を確認して2021-09-06群先頭として追加。
- Daiichi公式適合告知で型式と6.2号機（有利区間3000G対応）を確認。HAZUSEで検定番号1S0775、導入2021-09-06を固定。
- 性能値は1geki、HAZUSE、P-WORLD、当時解析を照合。設定Lを含む特殊設定構成はそのまま保持。
- resetBehaviorは設定変更と電源ON/OFFの比較表をHAZUSE・1gekiで照合し、天井/有利区間/うしおポイント/ステージのRESET・CARRY_OVERを分離。
- 朝一内部CZは複数解析で確認できるが発生率非公開のため数値推測はしていない。
