# シンデレラブレイド4 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1456
canonicalKey: 2021-12-20_cinderella-blade-4
machineName: シンデレラブレイド4
manufacturer: ネット
modelCode: Sシンデレラ×ブレイド4NA
inspectionCode: 1S0839
releaseDate: 2021-12-20
generation: "6.2号機"
systemType: AT / 周期抽選 / CZ経由AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.8
    "2": 99.0
    "3": 101.3
    "4": 104.3
    "5": 106.9
    "6": 110.0
  initialHitBySetting:
    "1": "滅龍戦線(CZ/擬似ボーナス) 1/229 / 武闘会(AT) 1/523 / 合算 1/159"
    "2": "滅龍戦線 1/219 / 武闘会 1/494 / 合算 1/152"
    "3": "滅龍戦線 1/202 / 武闘会 1/452 / 合算 1/140"
    "4": "滅龍戦線 1/184 / 武闘会 1/398 / 合算 1/126"
    "5": "滅龍戦線 1/170 / 武闘会 1/359 / 合算 1/115"
    "6": "滅龍戦線 1/153 / 武闘会 1/318 / 合算 1/103"
  baseGamesPer50Coins: "約34.3G"
  netIncrease: "約2.7枚/G"
  basicPayout: "滅龍戦線『絆』は40G固定。AT『武闘会』はレイラHP継続型・継続率約72%。(超)シンデレラBONUSは最大300枚。"
  normalCeiling: "最大18周期。天井候補は1・3・6・10・17・18周期。18周期目のCZ失敗時はレイラOPT→シンデレラBONUS→武闘会。"
  modeSpecificMinimumData:
    cycle: "通常周期は32Gを基本単位。小役成立時など減算停止あり。"
    ceilingDistribution: "有利区間移行時に天井周期を抽選。実質振り分けは設定差あり。"
    advantageousSection: "6.2号機・有利区間3000G対応。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "天井/周期進行をRESET。新たに有利区間移行時の天井周期抽選を行う。"
    modeState: "内部状態をRESET。有利区間移行時の周期/天井関連抽選を再実施。"
    advantageousSection: "RESET。"
    morningStart: "設定変更後1周期目は、AT終了後の有利区間移行時1周期目と同様にCZ『滅龍戦線』当選期待度が通常周期より優遇。"
    benefit: "1周期目の初当たり期待度が優遇される。"
    disadvantage: "比較可能な設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "天井/周期進行を引き継ぐとする解析。"
    modeState: "内部状態を引き継ぐとする解析。"
    advantageousSection: "進行中の有利区間を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "引き継ぐ。"
    modeState: "内部状態を引き継ぐ。"
    advantageousSection: "引き継ぐ。電断時は修行ステージ開始、液晶左上の周期ゲーム数は『??』表示とする解析あり。"
  gameCounterReset: "設定変更でRESET / 据え置き・純電源OFF→ONでCARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "固定のリセット専用短縮天井は確認できず。有利区間移行時に通常の天井周期抽選を新規実施。"
  modeAfterReset:
    behavior: "有利区間移行時の天井周期/周期関連抽選を再実施。朝一専用モードの存在は確認できず。"
  stateAfterReset:
    behavior: "設定変更でRESET / 純電断ではCARRY_OVER。"
  advantageousSectionReset: "RESET_ON_SETTING_CHANGE / CARRY_OVER_ON_UNCHANGED_AND_POWER_CYCLE"
  resetBenefits:
    - "設定変更後1周期目はCZ当選期待度が優遇。AT終了後の有利区間移行時1周期目も同様。"
  resetPenalties:
    - "比較可能な設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更ガックン条件・発生率は、機種名/型式/メーカー/朝一/リセット/据え置き/ガックン等で再探索後も高信頼の直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時は有利区間ランプ消灯型とする解析があり、点灯/消灯だけでは設定変更判別不可。"
    other: "純電断時は修行ステージ開始・周期G数『??』表示とする解析あり。ただしこれ単独で設定変更/据え置きを確定できるとは扱わない。"
  numericResetData:
    firstCycleAfterSettingChange: "CZ当選期待度が優遇（公開資料で優遇方向は確認。設定変更専用の独立数値テーブルとして切り出せる値は今回固定せず）"

sources:
  - url: https://hazuse.com/machine/pachislot/1S0839/
    sourceType: analysis-high
    usedFor: [modelCode, inspectionCode, releaseDate, generation, payoutRate, initialHitBySetting, baseGamesPer50Coins, netIncrease, normalCeiling, ceilingDistribution]
  - url: https://hazuse.com/machine/pachislot/1S0839/genre/207/
    sourceType: analysis-high
    usedFor: [normalCeiling, ceilingDistribution]
  - url: https://nana-press.com/kaiseki/machine/222/7111/
    sourceType: analysis-high
    usedFor: [payoutRate, initialHitBySetting]
  - url: https://nana-press.com/kaiseki/machine/222/7119/
    sourceType: analysis-high
    usedFor: [normalCeiling, resetBenefits]
  - url: https://www.pachibee.jp/machines/index/221110004
    sourceType: industry-media
    usedFor: [releaseDate, generation, netIncrease, basicPayout, systemType]
  - url: https://chonborista.com/slot/net-slot/154174/
    sourceType: analysis
    usedFor: [releaseDate, payoutRate, initialHitBySetting, baseGamesPer50Coins, netIncrease, settingChange, powerOffOn, stateAfterReset, resetBenefits, advantageousSectionLamp]
  - url: https://slot-seven.com/cinderellablade4-tenzyou/
    sourceType: analysis
    usedFor: [settingChange, powerOffOn, resetBenefits, powerCycleDisplay]
  - url: https://www.slopachi-quest.com/article/shindererablade4-tenjou/
    sourceType: analysis
    usedFor: [resetDetection, advantageousSectionLamp]

unverifiedAfterResearch:
  - "本機固有の設定変更ガックン条件・発生率。"
  - "設定変更専用として独立した1周期目CZ当選率の単一公開値。優遇方向は複数資料で確認済み。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新main README、Mission v0.7、旧INDEX、LATEST_HANDOFF、直前No.1455を確認してhandoff指定の次機から継続。
- HAZUSEで型式 `Sシンデレラ×ブレイド4NA`、検定番号 `1S0839`、2021-12-20、6.2号機ATを固定。
- HAZUSE・なな徹・複数解析で機械割97.8〜110.0%、CZ 1/229〜1/153、AT 1/523〜1/318、約34.3G/50枚、純増約2.7枚/Gを照合。
- resetBehaviorは設定変更で天井/内部状態RESET、純電源OFF→ONで引継ぎを複数解析で確認。
- 設定変更後1周期目はAT終了後の有利区間移行時1周期目と同様にCZ当選期待度が優遇される点を確認。
- 通常時有利区間ランプ消灯型のため、ランプ単独でのリセット判別不可。
- ガックン固有契約と設定変更専用の独立CZ数値のみ、十分な再探索後も直接値を固定できず推測していない。