# パチスロ デビル メイ クライ 5 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1482
canonicalKey: 2022-03-07_devil-may-cry-5
machineName: パチスロ デビル メイ クライ 5
alternateName: "デビル メイ クライ5 / DMC5（2022年メダル機。2025年スマスロ版とは別機種）"
manufacturer: "アデリオン（ユニバーサルエンターテインメント系）"
modelCode: "SデビルメイクライファイブXA"
inspectionCode: "1S1219"
releaseDate: 2022-03-07
generation: "6.2号機"
systemType: "差枚数管理型AT / 周期抽選"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_POWER_CYCLE_AND_GAKKUN_UNVERIFIED
confidence: HIGH_CORE_HIGH_RESET_POWER_CYCLE_GAKKUN_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.9
    "2": 99.1
    "3": 100.7
    "4": 104.0
    "5": 107.9
    "6": 111.1
  initialHitBySetting:
    definition: "AT『デビルラッシュ』初当たり"
    "1": "1/358.4"
    "2": "1/349.8"
    "3": "1/332.6"
    "4": "1/301.7"
    "5": "1/266.7"
    "6": "1/243.6"
  baseGamesPer50Coins: "約39.9G/50枚"
  netIncrease: "約3.5枚/G"
  basicPayout:
    at: "差枚数管理型。AT当選時は基本的に上乗せ特化ゾーン『スペシャルデビルタイム（SDT）』から開始。SDT平均上乗せ/獲得枚数は約100.5枚の解析値あり。"
    dmcBonus: "20G継続。青7/赤7は1:1で、SDTストック期待度は青約30% / 赤約70%。"
  normalCeiling:
    cycleCeiling: "最大8周期。8周期目のデビルバトル到達でAT当選。"
    bossDefeatCeiling: "デビルバトルで最大7体のボス撃破でも天井。"
  modeSpecificMinimumData:
    cycleLength: "1周期100G+α"
    firstCycleFeature: "設定変更後およびAT終了後の1周期目はニコズショップ/エンカウントバトル高確率状態への突入率100%。1周期目のニコズショップは必ず突入（5G）。"
    officialIndustryPitch: "通常時の初回周期AT突入率 約40%OVER（導入時業界記事）。設定変更専用値とは断定しない。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "周期天井をリセット。1周期目から再開。"
    modeState: "内部状態・内部モードをリセット/再抽選。MISSION数等の周期進行情報もリセットとする解析あり。"
    advantageousSection: "有利区間リセット。移行時に規定周期（1周期 or 8周期）抽選。"
    morningStart: "非有利区間を経由。非有利区間中は専用のトレーラー/非有利区間ステージへ移行するため、朝一に同ステージが確認できれば設定変更濃厚。ただし前日AT終了直後ヤメは例外。"
    benefit: "初回1周期はニコズショップ突入100%かつエンカウントバトル高確率状態。設定変更後/AT終了後に共通する有利区間再移行後の1周期恩恵。"
    disadvantage: "設定変更専用の主要不利数値は確認できず。"
  unchanged:
    gameCountCeiling: "周期天井を引き継ぐ。"
    modeState: "内部状態・内部モードを引き継ぐ。"
    advantageousSection: "有利区間を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "2022年機に限定して『電源OFF→ONのみ』の周期天井契約を直接示す高信頼資料を固定できずUNVERIFIED_AFTER_RESEARCH。2025年スマスロ同名機の電断表は混入させない。"
    modeState: "2022年機の純電断固有の内部状態・モード契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "2022年機の純電断のみでの有利区間契約を直接固定できずUNVERIFIED_AFTER_RESEARCH。一般的挙動から推測補完しない。"
  gameCounterReset: "設定変更=RESET / 据え置き=CARRY_OVER。周期進行・天井を対象。純電断はUNVERIFIED_AFTER_RESEARCH。"
  ceilingAfterReset:
    resetSpecificShortening: "固定G数の『リセット天井短縮』ではなく、周期を1周期目から再抽選。最大は8周期。"
    normalCeiling: "最大8周期"
  modeAfterReset:
    behavior: "有利区間移行時に規定周期を1周期/8周期から抽選。設定変更専用ではなく、有利区間移行時共通の公開抽選。"
  stateAfterReset:
    behavior: "内部状態リセット。初回周期はニコズショップ/エンカウントバトル高確率状態への突入率100%。"
  advantageousSectionReset: "設定変更でRESET / 据え置きでCARRY_OVER。AT終了時にも有利区間リセット。"
  resetBenefits:
    - "設定変更後の初回1周期はニコズショップ突入100%。"
    - "設定変更後/AT終了後の1周期目はエンカウントバトル高確率状態への突入率100%。"
    - "有利区間移行ゲームの成立役・設定に応じて1周期天井が選ばれる可能性あり。"
  resetPenalties:
    - "公開された設定変更専用の主要不利数値は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン条件・発生率は、機種名/型式名とリセット・設定変更・朝一・据え置き・電断・ガックンを組み替えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時は有利区間ランプ非点灯タイプのため、朝一ランプ消灯だけでは設定変更判別不可。"
    morningBehavior: "非有利区間中は専用ステージへ移行。朝一に非有利区間ステージなら設定変更濃厚。ただし前日AT終了直後ヤメは除外。"
  numericResetData:
    advantageousSectionMoveCycleSelection:
      definition: "有利区間移行時の規定周期抽選。設定変更専用ではなく、AT終了後等の有利区間再移行にも共通。"
      other:
        "1": "1周期 3.5% / 8周期 96.5%"
        "2": "1周期 7.0% / 8周期 93.0%"
        "3": "1周期 7.0% / 8周期 93.0%"
        "4": "1周期 8.2% / 8周期 91.8%"
        "5": "1周期 16.0% / 8周期 84.0%"
        "6": "1周期 19.9% / 8周期 80.1%"
      weakRareRole: "全設定共通 1周期50.0% / 8周期50.0%"
      strongRareRole: "全設定共通 1周期87.5% / 8周期12.5%"
    firstCycleNicosShopRate: "100%（1周期目。4周期目も100%）"
    firstCycleEncounterHighStateRate: "100%（設定変更後/AT終了後の1周期目）"
    firstCycleAtEntryRateIndustryPitch: "約40%OVER（通常時初回周期の導入時訴求。リセット専用値ではない）"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/19753/nippon
    sourceType: industry-primary-secondary
    usedFor: [releaseDate, manufacturer, modelCode, systemType, netIncrease, dmcBonus, systemOutline]
  - url: https://yugi-nippon.com/pachinko-new-machine/post-49458/
    sourceType: industry-primary-secondary
    usedFor: [manufacturer, modelCode, systemType, netIncrease, firstCycleAtEntryRateIndustryPitch, dmcBonus]
  - url: https://hazuse.com/machine/pachislot/1S1219/
    sourceType: old-machine-db-analysis-high
    usedFor: [generation, manufacturer, modelCode, inspectionCode, releaseDate, netIncrease, ceiling, initialHit]
  - url: https://hazuse.com/machine/pachislot/1S1219/genre/201/
    sourceType: old-machine-db-analysis-high
    usedFor: [payoutRate, performanceCore]
  - url: https://nana-press.com/kaiseki/machine/309/8257/
    sourceType: analysis-high
    usedFor: [initialHitBySetting, payoutRatePct]
  - url: https://nana-press.com/kaiseki/machine/309/8263/
    sourceType: analysis-high
    usedFor: [settingChange, unchanged, advantageousSection, resetDetection, numericResetData]
  - url: https://1geki.jp/slot/s_devilmaycry5/41/
    sourceType: analysis-high
    usedFor: [firstCycleNicosShopRate, nicosShopDuration]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aderion_slot/02/tj01.php
    sourceType: analysis-high-historical
    usedFor: [firstCycleBenefit, cycleLength]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aderion_slot/02/at03-1.php
    sourceType: analysis-high-historical
    usedFor: [dmcBonus]
  - url: https://pachiseven.jp/machines/6481/cutout/9
    sourceType: analysis-high
    usedFor: [sdtBasicPerformance, averageSdtPayout]
  - url: https://flick7.net/slot/devilmaycry5__k.php
    sourceType: analysis-secondary
    usedFor: [resetCrossCheck, resetBenefit, numericResetData, resetDetection]
  - url: https://slotmethod.jp/archives/8656/
    sourceType: analysis-secondary
    usedFor: [resetDetectionCrossCheck]

unverifiedAfterResearch:
  - "2022年版に限定した純電源OFF→ON時の周期天井・内部モード/状態・有利区間の直接契約。検索結果には2025年スマスロ同名機の電断情報が多数混在するため転用しない。"
  - "本機固有の設定変更時ガックン条件・発生率。"

conflicts: []

researchNotes:
  - "2025年導入『スマスロ デビル メイ クライ5 スタイリッシュトライブ』を別機種として除外し、2022年『SデビルメイクライファイブXA / 検定1S1219』に限定して調査。"
  - "設定変更/据え置きはなな徹の比較表、Flick7、パチスロメソッド等で照合。"
  - "純電源OFF→ONは『電源OFF ON』『電断』『据え置き』『型式名』を組み替え、一撃・パチマガスロマガ系を含めて再探索したが、2022年機固有の直接表を固定できなかったためUNVERIFIED_AFTER_RESEARCH。"
  - "有利区間移行時の1周期/8周期振り分けは公開値を保存するが、設定変更専用抽選ではないことを明示。"
```
