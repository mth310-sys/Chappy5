# SLOT STEINS;GATE — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1496
canonicalKey: 2022-05-09_slot-steins-gate
machineName: "SLOT STEINS;GATE"
alternateName: "SLOT STEINS；GATE / Sシュタインズゲート / スロット シュタインズ・ゲート"
manufacturer: "メーシー（製造） / ユニバーサルエンターテインメント（販売・ブランド）"
modelCode: "S/STEINS;GATE/TG"
inspectionCode: "1S1545"
releaseDate: 2022-05-09
generation: "6.2号機"
systemType: "擬似ボーナス連鎖型AT"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["L", "1", "2", "4", "5", "6"]
  payoutRatePct:
    "L": "UNVERIFIED"
    "1": 97.2
    "2": 98.8
    "4": 102.0
    "5": 105.0
    "6": 108.1
  initialHitBySetting:
    bonusCombined:
      "1": "1/283.6"
      "2": "1/262.5"
      "4": "1/211.0"
      "5": "1/167.4"
      "6": "1/130.8"
    unmeiSoushiBonus:
      "1": "1/306.8"
      "2": "1/282.7"
      "4": "1/223.5"
      "5": "1/174.6"
      "6": "1/135.0"
    kyoukiSaiseiBonus:
      "1": "1/3757.4"
      "2": "1/3666.2"
      "4": "1/3783.5"
      "5": "1/4032.3"
      "6": "1/4185.0"
  baseGamesPer50Coins: "33.9G/50枚（設定1）"
  netIncrease: "約5.0枚/G"
  basicPayout:
    unmeiSoushiBonus: "20G・約100枚。終了後STEINS;ROADへ。"
    kyoukiSaiseiBonus: "25G・約125枚。終了後STEINS;GATEへ。"
    steinsRoad: "初期16G、最大32G。ボーナス高確率ゾーン、継続率MAX74%。"
    steinsGate: "32G固定。ボーナス超高確率ゾーン、ボーナスとのループ期待度86%。"
    nostalgiaDrive: "1セット20G・5セット保証、平均500枚以上とする解析あり。"
  normalCeiling:
    gameCeiling: "有利区間移行後、通常時1000G消化でボーナス。運命創始50% / 狂気再醒50%。"
    cycleCeiling: "12周期消化で上位CZ『ダイバージェンスゾーン』。1周期は150pt、平均約70G。"
  modeSpecificMinimumData: "通常時は150pt=1周期でCZ抽選。魔眼保有時は失敗演出/CZ/ボーナス高確率等を前回期待度以上でやり直すシステムを搭載。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。1000G天井をリセット。"
    cycleCount: "RESET。周期数は0スタート。"
    modeState: "RESET。有利区間・内部状態をリセットして新規有利区間へ移行。"
    advantageousSection: "RESET。"
    morningStart: "通常時の開始ステージについては当時解析で調査中。固定開始ステージはUNVERIFIED_AFTER_RESEARCH。"
    benefit: "新規有利区間移行時に魔眼獲得抽選。公開解析値50%。設定変更時にも適用。"
    disadvantage: "設定変更専用の主要不利数値はNONE_CONFIRMED_AFTER_RESEARCH。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。"
    cycleCount: "CARRY_OVER。"
    modeState: "CARRY_OVER。"
    advantageousSection: "CARRY_OVER。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。"
    cycleCount: "CARRY_OVER。"
    modeState: "CARRY_OVER。内部状態を引き継ぐ。"
    advantageousSection: "CARRY_OVER。"
    morningStart: "固定液晶開始ステージはUNVERIFIED_AFTER_RESEARCH。"
  gameCounterReset: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER。設定変更時は周期も0スタート。"
  ceilingAfterReset:
    fixedShortening: "NONE_CONFIRMED。設定変更専用の短縮天井は確認されず、通常1000G天井/12周期天井を0から再開。"
    gameCeiling: "1000G。到達時ボーナスは運命創始50% / 狂気再醒50%。"
    cycleCeiling: "12周期。"
  modeAfterReset:
    behavior: "新規有利区間として開始。通常時の全ダイバージェンスMAP/状態初期振り分けは朝一客AIに必要な公開リセット専用値として固定できずUNVERIFIED_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "内部状態RESET。新規有利区間移行時の魔眼獲得率50%。"
  advantageousSectionReset: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER。通常時は有利区間ランプ非点灯タイプ。"
  resetBenefits:
    - "設定変更後の新規有利区間移行時、魔眼獲得率50%。"
    - "魔眼保有時は失敗した演出/CZ/ボーナス高確率等を前回期待度以上でやり直すため、朝一の期待値要素になる。"
  resetPenalties:
    - "設定変更専用の主要不利数値はNONE_CONFIRMED_AFTER_RESEARCH。"
  resetDetection:
    lampDisplay: "通常時は有利区間ランプ非点灯のため、通常の朝一消灯だけでは判別不可。前日がDZ/初当りボーナス等で点灯したまま閉店→朝一消灯なら設定変更濃厚材料。ただし店舗対策例外あり。"
    reelBehavior: "本機固有の設定変更時リールガックン条件/発生率は、機種名・型式・メーカー名と『ガックン/設定変更/リセット/朝一』で再探索したがUNVERIFIED_AFTER_RESEARCH。"
    liquidCrystal: "設定変更/電源OFF→ON時の固定開始ステージは当時解析で調査中のまま。液晶のみの確定判別法はUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    maganAcquisitionAtAdvantageousSectionStart: "50%"
    resetGameCeiling: "1000G（短縮なし）"
    resetCycleCeiling: "12周期（0スタート）"
    gameCeilingUpperBonusSelection: "狂気再醒のボーナス50% / 運命創始のボーナス50%"

sources:
  - url: https://www.universal-777.co.jp/news/20220307001533/
    sourceType: official
    usedFor: [manufacturer, releaseMonth, gameSystem, steinsRoad, steinsGate]
  - url: https://p-bomb.co.jp/industry/new-machine/3760/
    sourceType: industry-news
    usedFor: [manufacturer, releaseMonth, gameSystem]
  - url: https://hazuse.com/machine/pachislot/1S1545/
    sourceType: analysis-high
    usedFor: [modelCode, inspectionCode, generation, releaseDate, payoutRateBySetting, initialHitBySetting, settingChangeReset, powerCycleCarryOver, cycleReset, resetDetection, maganResetRate]
  - url: https://p-kn.com/slot/3767/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, initialHitBySetting, payoutRateBySetting]
  - url: https://1geki.jp/slot/s_steins_gate/
    sourceType: contemporary-analysis
    usedFor: [payoutRateBySetting, initialHitBySetting, netIncrease, bonusPerformance, system]
  - url: https://1geki.jp/slot/s_steins_gate/3/
    sourceType: contemporary-analysis
    usedFor: [gameCeiling, cycleCeiling, ceilingBonusSelection]
  - url: https://nana-press.com/kaiseki/machine/347/9125/
    sourceType: analysis-high
    usedFor: [settingChangeReset, unchangedCarryOver, advantageousSectionReset, resetDetection]
  - url: https://nana-press.com/kaiseki/machine/347/9220/
    sourceType: analysis-high
    usedFor: [gameCeiling, cycleCeiling, ceilingBonusSelection]
  - url: https://chonborista.com/slot/universal-slot/164980/
    sourceType: contemporary-analysis
    usedFor: [baseGamesPer50, payoutRateBySetting, initialHitBySetting, ceiling, powerCycleCarryOver, maganResetRate, advantageousSectionLamp]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/55/kh02-3.php
    sourceType: contemporary-analysis
    usedFor: [initialHitBySetting, payoutRateBySetting]
  - url: https://slot-seven.com/steinsgate-tenzyou/
    sourceType: analysis-secondary
    usedFor: [settingChangeReset, powerCycleCarryOver, advantageousSectionBehavior]

unverifiedAfterResearch:
  - "設定変更/純電源OFF→ON時の固定液晶開始ステージ。当時の複数朝一解析が『調査中』で、後年資料にも本機固有の固定開始値を確認できず。"
  - "設定変更時の通常ダイバージェンスMAP/表裏状態の全初期振り分け。通常時全MAP解析は存在するが、朝一設定変更専用の比較可能な初期振り分けとして固定できず。"
  - "本機固有の設定変更時リールガックン条件/発生率。機種名、型式S/STEINS;GATE/TG、メーシー/ユニバーサル、朝一/リセット/設定変更/ガックンで再探索後も直接資料なし。"
  - "設定Lの正確な出玉率。設定L搭載・下パネル消灯は複数資料一致だがPAYOUT値は調査中表記。"

conflicts: []

researchNotes:
  - "有利区間移行時の魔眼獲得50%は設定変更だけの専用抽選ではなく、新規有利区間移行時共通の公開値。設定変更後も新規有利区間へ移るため朝一恩恵として記録した。"
  - "通常時は有利区間ランプ非点灯なので、朝一消灯そのものを設定変更根拠にはできない。前日点灯→朝一消灯という限定条件のみ変更判別材料。"
  - "有利区間継続時に6周期目または9周期目から開始する仕様があるが、設定変更リセット恩恵ではないためresetBenefitsへ混入させない。"
  - "詳細な通常時MAP移行、AT中モード移行、ボーナス抽選テーブル等は実機完全再現粒度のため収集対象外。"
```
