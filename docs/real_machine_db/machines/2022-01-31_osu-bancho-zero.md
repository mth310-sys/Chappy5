# 押忍！番長ZERO — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1476
canonicalKey: 2022-01-31_osu-bancho-zero
machineName: 押忍！番長ZERO
manufacturer: パオン・ディーピー / 大都技研
modelCode: "S押忍！番長ZERO PC1"
inspectionCode: "UNVERIFIED_AFTER_RESEARCH"
releaseDate: 2022-01-31
generation: "6.2号機"
systemType: AT / 擬似ボーナス+AT / 押忍ポイント・モード管理
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED
confidence: HIGH_CORE_HIGH_RESET_MINOR_MACHINE_SPECIFIC_GAKKUN_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.6
    "2": 98.7
    "3": 101.5
    "4": 105.3
    "5": 109.1
    "6": 113.0
  initialHitBySetting:
    definition: "ボーナス初当り合算"
    "1": "1/246.0"
    "2": "1/239.4"
    "3": "1/224.0"
    "4": "1/207.8"
    "5": "1/193.7"
    "6": "1/179.5"
  baseGamesPer50Coins: "約35G/50枚。資料に約33G表記もあるが、導入当時複数解析・新台カレンダーで約35Gが一致するため主値は約35G。"
  netIncrease: "AT/擬似ボーナス 約2.7枚/G"
  basicPayout: "AT『頂ROAD』は1セット30G以上。番長ボーナスは30G、REGはベルナビ8回で終了、超番長ボーナスは50G。いずれもAT方式で純増約2.7枚/G。"
  normalCeiling: "通常時600G+αでBB以上。当該天井でREGだった場合はAT突入濃厚と解析資料で確認。"
  modeSpecificMinimumData:
    normalModes:
      normal: "最大790押忍pt"
      chance: "最大290押忍pt"
      zero: "最大390押忍pt"
    zeroMode: "設定変更後・ボーナス終了後・AT終了後に突入する特殊モード。規定pt到達時の初当り期待度50%超、初当り時の番長ボーナス比率80%超。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。通常時600G+α天井のゲーム数はリセット。"
    modeState: "ZEROモードから開始。内部状態リセット、押忍ポイントリセット。なな徹の朝一表で設定変更時は天井/内部状態/押忍ポイントがリセットと確認。"
    advantageousSection: "RESET。設定変更時に有利区間リセット。リセット後はZEROモード濃厚。"
    morningStart: "ZEROモード濃厚。1周期目の規定押忍ポイントは最大390pt。規定pt到達時の初当り期待度50%超、当選時BB比率80%超。"
    benefit: "ZEROモード確定/濃厚による浅い規定pt・高い初当り期待度。全設定共通でZEROモード中は機械割100%超とする解析あり。"
    disadvantage: "設定変更専用の主要な不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。据え置き時は天井引継ぎ。"
    modeState: "CARRY_OVER。据え置き時は内部状態を引継ぎ、押忍ポイントも内部的に引継ぐ。"
    advantageousSection: "CARRY_OVER扱い。ただし通常時の有利区間ランプは消灯タイプで、朝一ランプ単独では判別不能。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。設定変更なしの電源OFF→ONでは天井引継ぎと解析表で確認。"
    modeState: "CARRY_OVER。内部状態引継ぎ。電源ON/OFF後はZEROモード非滞在でも1回目の特訓まで鋼鉄が紫オーラを纏うため、紫オーラ単独ではリセット判別不可。"
    advantageousSection: "設定変更を伴わない純電断では有利区間をリセットしたとする機種固有資料は確認せず、据え置き扱い。"
  gameCounterReset: "設定変更=RESET / 据え置き・純電断=CARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "ゲーム数天井そのものが600G+αから固定短縮される仕様ではない。ただし設定変更後はZEROモードとなり、1周期目の規定押忍ポイントが最大390ptのため朝一初当り挙動は実質優遇。"
    normalCeiling: "600G+α"
    zeroModePointCeiling: "390pt"
  modeAfterReset:
    behavior: "ZEROモード確定/濃厚。通常・チャンス・ZEROの3モード中、設定変更後はZERO。"
  stateAfterReset:
    behavior: "内部状態リセット。押忍ポイントリセット。ステージは街角（昼）開始とする解析表あり。"
  advantageousSectionReset: "設定変更時RESET。ボーナス終了時、AT終了時、REG後の対決/特訓失敗時にも有利区間リセットが行われ、ZEROモードへ移行。通常時ランプは消灯タイプ。"
  resetBenefits:
    - "設定変更後はZEROモード。"
    - "ZEROモード最大規定押忍ポイント390pt。"
    - "ZEROモード規定pt到達時の初当り期待度50%超。"
    - "ZEROモード初当り時の番長ボーナス比率80%超。"
  resetPenalties:
    - "設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン条件・発生率は、機種名/型式/メーカー/設定変更/リセット/朝一/据え置き/電源ON OFF/ガックンで再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時は有利区間ランプ消灯タイプのため、朝一ランプ点灯/消灯のみでリセット判別不可。"
    modeBehavior: "朝一1周期目で390ptを超えても規定pt到達契機が来ない場合、ZEROモード否定となり据え置き濃厚材料。"
    visualCaution: "電源ON/OFF後はZEROモード非滞在でも1回目の特訓まで紫オーラを纏うため、朝一紫オーラ=設定変更とは判定できない。"
  numericResetData:
    normalGameCeiling: "600G+α"
    resetMode: "ZERO"
    zeroModeMaxPoint: "390pt"
    zeroModeFirstHitExpectation: "50%over at prescribed point"
    zeroModeBBRatioOnHit: "80%over"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/19366/nippon
    sourceType: industry-primary
    usedFor: [releaseDate, manufacturer, launch]
  - url: https://ichikatsu.com/newslot2022/
    sourceType: analysis-calendar
    usedFor: [releaseDate, manufacturer, systemType, netIncrease, baseGamesPer50, initialHitBySetting, payoutRateBySetting, boundaryAudit]
  - url: https://1geki.jp/slot/s_osubancho_zero/
    sourceType: analysis-high
    usedFor: [releaseDate, manufacturer, systemType, netIncrease, initialHitBySetting, payoutRateBySetting, modeData, zeroModeData]
  - url: https://nana-press.com/kaiseki/machine/167/10134/
    sourceType: analysis-high
    usedFor: [settingChangeResetTable, carryOver, powerCycleCaution, advantageousSection, resetDetection, zeroMode]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/81/tj03-1.php
    sourceType: analysis-high
    usedFor: [modeDefinitions, resetZeroMode, maxPointValues]
  - url: https://slothack.net/matome/54962/
    sourceType: analysis-secondary
    usedFor: [releaseDate, manufacturer, systemType, netIncrease, baseGamesPer50, normalCeiling, initialHitBySetting, payoutRateBySetting, basicAtStructure]
  - url: https://slotkaiseki.com/banchouzero_modetenjou/
    sourceType: analysis-secondary
    usedFor: [normalCeiling, advantageousSectionReset, zeroModeResetBenefits, firstHitExpectation, bbRatio]
  - url: https://slot-seven.com/osubanchozero-tenzyou/
    sourceType: analysis-secondary
    usedFor: [settingChangeVsPowerCycle, advantageousSectionLamp, resetBenefits]
  - url: https://www.nakaiti.com/html/sPaonDP004.html
    sourceType: secondary-machine-db
    usedFor: [modelCode, manufacturer, basicPayout]

unverifiedAfterResearch:
  - "検定番号。型式S押忍！番長ZERO PC1は複数資料で確認したが、今回固定できる検定番号一次/業界DB値を取得できず。"
  - "本機固有の設定変更時リールガックン条件・発生率。"

conflicts:
  - field: "baseGamesPer50Coins"
    status: "MINOR_SOURCE_DIFFERENCE"
    canonical: "約35G/50枚。導入当時の複数解析・新台カレンダー一致。"
    alternate: "後年整理サイトに約33G/50枚表記あり。"
    handling: "平均化せず、複数当時資料一致の約35Gを主値とする。"
  - field: "manufacturerLabel"
    status: "LABEL_DIFFERENCE"
    canonical: "パオン・ディーピー / 大都技研"
    alternate: "資料により大都技研単独表記。"
    handling: "型式・製造元側のパオン・ディーピーとブランド/販売系の大都技研を併記。"

notes:
  - "2022-01-31導入群は複数新台カレンダーで押忍！番長ZERO 1機を確認。次の全国導入群は2022-02-07。"
  - "有利区間ランプは通常時消灯タイプのため、過去6.0/6.1号機で多い朝一ランプ判別を流用しない。"
  - "紫オーラはZEROモード示唆だが純電断後にも一時的に出るため、朝一変更判別では390pt超過挙動の方が有用。"
```
