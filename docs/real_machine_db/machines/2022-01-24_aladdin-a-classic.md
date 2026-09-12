# パチスロアラジンAクラシック — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1469
canonicalKey: 2022-01-24_aladdin-a-classic
machineName: パチスロアラジンAクラシック
manufacturer: サミー（製造: 銀座）
modelCode: "S アラジンクラシック KF"
inspectionCode: "1S1061"
releaseDate: 2022-01-24
generation: "6.2号機"
systemType: AT / 状態ループ型
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_YARDSTICK
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.6
    "2": 98.8
    "3": 100.3
    "4": 104.0
    "5": 107.2
    "6": 108.8
  initialHitBySetting:
    definition: "AC（アラジンチャンス）+BIG CHANCE初当たり合算"
    "1": "1/275.3"
    "2": "1/263.4"
    "3": "1/251.4"
    "4": "1/226.0"
    "5": "1/199.6"
    "6": "1/176.4"
  baseGamesPer50Coins: "約32.2G/50枚"
  netIncrease: "AT『アラジンチャンス（AC）』約2.9枚/G"
  basicPayout: "ACは1セット30G（純増約2.9枚/G）。BIG CHANCEは平均約100枚。SACは20G〜最大1000G、裏ACは1セット30G。"
  normalCeiling: "通常時1200GでAC当選+『状態』突入濃厚。AC単発時は天井G数を引き継ぐ。"
  modeSpecificMinimumData:
    acHigh: "AC高確率移行時のAC期待度は約60%。"
    state: "AC初当たり後は状態準備へ。25G以内のAC引き戻しで『状態』移行濃厚。状態中のACループ期待は平均約80%（ショート/ロング/超ロング平均）。"
    postAdvantageousSection: "ACループ終了後の有利区間終了後はAC引き戻し区間へ移行する場合があり、引き戻し期待度は約50%。"
    rescue: "有利区間開始後または状態準備終了後310G消化で救済機能を抽選し、約25%でAC当選。告知は311〜312G付近。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。通常時1200G天井の進行をリセットし、新規有利区間として再計数。"
    modeState: "内部状態RESET。新規有利区間移行時の朝一抽選へ移る。設定変更の一部で高確フェイク演出または高確スタート報告あり。"
    advantageousSection: "RESET。有利区間ランプ消灯から開始し、1G目消化後に点灯する挙動。"
    morningStart: "有利区間移行時抽選あり。リセット後1G目の成立役が朝一価値に直結。サブ液晶遊技回数0Gは設定変更濃厚材料。"
    benefit: "有利区間移行時、成立役不問で3.6%で『状態超ロング』移行抽選。これに漏れた場合、1G目の連チェリー25%・ラクダ50%・単チェリー/チャンス目は状態移行濃厚。さらに設定変更後は有利区間開始を起点として311G付近に救済機能（約25%でAC）抽選が来る。"
    disadvantage: "前日の1200G天井進行・内部状態・有利区間を失う。前日ハマリを据え置き狙いする価値は消滅。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。朝一表で天井引継ぎ。"
    modeState: "CARRY_OVER。内部状態引継ぎ。"
    advantageousSection: "CARRY_OVER。有利区間ランプも引継ぎ。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。複数解析で電源ON/OFF時は天井引継ぎ。"
    modeState: "CARRY_OVER。電源ON/OFF時は内部状態引継ぎ。"
    advantageousSection: "CARRY_OVER。電源ON/OFF時は有利区間引継ぎ。"
  gameCounterReset: "設定変更時RESET / 据え置きCARRY_OVER / 純電源OFF→ON CARRY_OVER。AC単発では天井G数を引き継ぐ。"
  ceilingAfterReset:
    resetSpecificShortening: "1200G本天井そのものの固定短縮は確認されず。新規有利区間開始後310G消化時に約25%の救済機能発動抽選があり、設定変更後は311G付近が朝一の明確な狙い目となる。"
  modeAfterReset:
    behavior: "新規有利区間移行時の状態抽選へ。成立役不問3.6%で状態超ロング、その抽選に漏れた場合は1G目成立役で状態移行抽選。"
  stateAfterReset:
    behavior: "内部状態RESET。設定変更の一部で高確フェイクまたは高確スタート報告あり。1G目の成立役に応じて状態移行を抽選。"
  advantageousSectionReset: "設定変更時RESET / 据え置きCARRY_OVER / 純電源OFF→ON CARRY_OVER。"
  resetBenefits:
    - "有利区間移行時に成立役不問3.6%で状態超ロング移行抽選。"
    - "リセット1G目: 連チェリー25%で状態移行、ラクダ50%、単チェリー・チャンス目は状態移行濃厚。"
    - "設定変更後の有利区間開始を起点に310G消化時、約25%で救済AC抽選（告知311〜312G付近）。"
  resetPenalties:
    - "前日の1200G天井進行、内部状態、有利区間を失う。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時リールガックン条件・発生率は、機種名/型式/銀座/サミー/ガックン/リール始動等で再探索したが固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "設定変更で有利区間ランプ消灯、据え置き・電源ON/OFFでは引継ぎ。通常時点灯状態を前提に朝一消灯は設定変更濃厚、点灯は据え置き濃厚。"
    subDisplay: "サブ液晶をタッチして遊技回数が朝一0Gなら設定変更濃厚。"
  numericResetData:
    stateSuperLongOnReset: "有利区間移行時・成立役不問 3.6%"
    firstGameStateLottery: "連チェリー25% / ラクダ50% / 単チェリー・チャンス目は状態移行濃厚"
    rescueAfterReset: "有利区間開始後310G消化で約25%でAC当選（告知311〜312G付近）"
    resetSpecificMainCeiling: "固定短縮なし確認。通常本天井1200Gを新規計数。"

sources:
  - url: https://news.p-world.co.jp/articles/18863/nippon
    sourceType: industry
    usedFor: [modelCode, manufacturerAndMaker, generation, netIncrease, initialHitRange, stateLoop, postAdvantageousSection]
  - url: https://www.yugitsushin.jp/open/maker/20211109-1203/
    sourceType: official-industry-inspection
    usedFor: [modelCode, inspectionCode, manufacturer]
  - url: https://news.p-world.co.jp/articles/19303/greenbelt
    sourceType: industry
    usedFor: [releaseDate, netIncrease, baseGamesPer50Coins, initialHitRange, stateLoop, postAdvantageousSection]
  - url: https://1geki.jp/slot/s_aladdin_ac/
    sourceType: analysis-high
    usedFor: [payoutRate, initialHitBySetting, netIncrease, acStructure]
  - url: https://hazuse.com/machine/pachislot/1S1061/
    sourceType: old-analysis-database
    usedFor: [inspectionCode, payoutRate, initialHitBySetting, settingChangeBehavior, powerCycleBehavior, resetDetection]
  - url: https://nana-press.com/kaiseki/machine/275/8030/
    sourceType: analysis-high
    usedFor: [settingChangeBehavior, carryOverBehavior, resetDetection]
  - url: https://www.slopachi-quest.com/article/aladdin-a-classic-tenjou/
    sourceType: analysis
    usedFor: [normalCeiling, settingChangeBehavior, powerCycleBehavior, advantageousSection, resetBenefits, numericResetData, rescue]
  - url: https://1geki.jp/slot/s_aladdin_ac/3/
    sourceType: analysis-high
    usedFor: [normalCeiling, acSingleCeilingCarry, rescue]
  - url: https://ichikatsu.com/aladdinaclassic/
    sourceType: contemporary-analysis
    usedFor: [normalCeiling, baseGamesPer50Coins, resetCeiling, rescue]
  - url: https://slot8192m.blog.fc2.com/blog-entry-416.html
    sourceType: retrospective-official-voice-quotation
    usedFor: [stateSuperLongOnReset, firstGameStateLottery]

unverifiedAfterResearch:
  - "本機固有の設定変更時リールガックン条件・発生率。"
  - "設定変更の一部で発生する高確フェイク/高確スタートの詳細振り分け率。"

conflicts: []

notes:
  - "3.6%の状態超ロング抽選と1G目成立役別抽選は、後年解析とサミー開発ボイス引用資料で確認。完全再現用の状態内部抽選までは収集対象外。"
  - "310G救済は設定変更専用ではなく『有利区間開始後または状態準備終了後』の共通機構。朝一では設定変更により新規有利区間開始となるため311G付近に出現する。"
  - "有利区間終了後の通常引き戻し区間（約50%）と、設定変更朝一のリセット抽選を混同しない。"
```
