# もっと！クレアの秘宝伝 女神の歌声と太陽の子供達 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1425
canonicalKey: 2021-08-02_motto-crea-hihouden-megami-utagoe-taiyo
machineName: もっと！クレアの秘宝伝 女神の歌声と太陽の子供達
manufacturer: パオン・ディーピー
brandContext: 大都技研
modelCode: Sもっと！クレアの秘宝伝 女神の歌声と太陽の子供達PA2
inspectionCode: 0S0647
releaseDate: 2021-08-02
machineType: 6.1号機 ボーナス+RT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE
confidence: HIGH_CORE_MEDIUM_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  bonusCombinedProbability: ["1/168.9", "1/161.0", "1/152.8", "1/138.0", "1/131.1", "1/120.5"]
  bbProbability: ["1/277.7", "1/270.8", "1/262.1", "1/240.9", "1/224.4", "1/206.1"]
  rbProbability: ["1/431.2", "1/397.2", "1/366.1", "1/322.8", "1/315.1", "1/290.0"]
  payoutRatePctMarket: [97.1, 98.0, 100.0, 103.2, 105.8, 108.6]
  payoutRatePctFullStrategy: [98.2, 99.2, 101.2, 104.5, 107.2, 110.0]
  baseGamesPer50Coins: "約39G/50枚"
  rtNetIncrease: "現状維持程度（約±0枚/G表記あり）"
  basicPayout: "BIG最大207枚 / REG最大71枚"
  rtBasicPerformance: "クレアのRTは1セット30G。RT終了後はCZへ移行し、再突入の可能性あり。"
  normalCeiling: "NOT_APPLICABLE / 天井・ゾーン非搭載"
  manufacturerAnnouncedBonusRtFirstHit: "設定1でボーナス+RT初当たり合算 約1/87.7"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE / 天井・規定G数なし"
    modeState: "AT/ARTの天井モード・有利区間モードはNOT_APPLICABLE。RT/CZを含む電断・設定変更時の内部状態契約は直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE（ボーナス+RT機として収録。AT/ART用の有利区間リセット契約を推測転記しない）"
    morningStart: "前日から設定が上がった場合、朝イチ1回目のRT終了後CZ失敗時に『上げ上げだ』スタンプが出現する可能性あり。"
    benefit: "設定変更専用の天井短縮・CZ/RT優遇・ボーナス確率優遇は確認できず。"
    disadvantage: "RESET_SPECIFIC_DISADVANTAGE_NONE_CONFIRMED_AFTER_RESEARCH"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE"
    modeState: "据え置き時のRT/CZ内部状態・成立済みボーナス状態の朝一契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE"
    modeState: "RT/CZ・成立済みボーナス等の内部状態はUNVERIFIED_AFTER_RESEARCH。"
    auxiliaryPersistence: "BB楽曲の解放状態は電断されない限り維持される。したがって純電断で楽曲解放状態が初期化されることを確認。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE / 天井非搭載"
  modeAfterReset:
    behavior: "NOT_APPLICABLE_FOR_CEILING_MODE; RT/CZ内部状態はUNVERIFIED_AFTER_RESEARCH"
    resetSpecificDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"
  stateAfterReset: "RT/CZ・成立済みボーナス等の朝一内部状態はUNVERIFIED_AFTER_RESEARCH"
  advantageousSectionReset: "NOT_APPLICABLE"
  resetBenefits:
    - "設定上げ時のみ、朝イチ1回目のRT終了後CZ失敗時に『上げ上げだ』スタンプが出現し得るため、客側の設定変更/上げ判別材料になる。"
  resetPenalties:
    - "公開された設定変更専用不利要素は確認できず。"
  resetDetection:
    morningStamp: "『上げ上げだ』= 前日から設定が上がった場合に出現する可能性あり。朝イチ1回目のみ。設定2～6の公開出現率は各1.00%。設定1は出現なし。"
    advantageousSectionLamp: "NOT_APPLICABLE"
    machineSpecificGakkun: "UNVERIFIED_AFTER_RESEARCH"
    note: "上げ上げだスタンプは『設定変更全般』ではなく『前日より設定が上がった場合』の限定示唆として扱う。出なかった場合に据え置きを断定しない。"
  numericResetData:
    morningSettingUpStampRate: "前日より設定上昇時の朝イチ1回目のみ。新設定2/3/4/5/6で各1.00%（HAZUSE調べ）。設定1は対象外。"
    resetSpecificCeiling: "NOT_APPLICABLE"
    resetSpecificModeDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"
    resetSpecificHitRate: "NONE_CONFIRMED_AFTER_RESEARCH"

sources:
  - url: https://hazuse.com/machine/pachislot/0S0647/
    sourceType: analysis-high/database
    usedFor: [manufacturer, modelCode, inspectionCode, releaseDate, generation, bonusProbabilities, payoutRate, basicPayout, rtPerformance, ceilingAbsent, morningSettingUpStamp, morningStampRate, musicUnlockPowerPersistence]
  - url: https://p-kn.com/slot/3627/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, manufacturer, bonusCombinedProbability, payoutRate, baseGamesPer50Coins, basicPayout]
  - url: https://1geki.jp/slot/s_crea_taiyo/
    sourceType: analysis-high
    usedFor: [basicPayout, rtPerformance, rtNetIncrease]
  - url: https://slothack.net/matome/32805/
    sourceType: analysis-secondary
    usedFor: [bonusProbabilities, payoutRateMarket, payoutRateFullStrategy, rtPerformance]
  - url: https://p-bomb.co.jp/industry/new-machine/1336/
    sourceType: contemporary-industry
    usedFor: [manufacturerReleaseAnnouncement, releaseTiming, bonusRtFirstHitSetting1]
  - url: https://ichikatsu.com/crea4/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, ceilingAbsent]

unverifiedAfterResearch:
  - "設定変更/据え置き/純電断時のRT・CZ内部状態の厳密な引継ぎ/リセット契約"
  - "成立済みボーナス状態の設定変更/純電断時契約"
  - "本機固有ガックン条件・発生率"
  - "設定変更専用のCZ/RT優遇率・朝一ボーナス当選率"

conflicts:
  - "導入日: K-Navi/HAZUSE/イチカツ等は2021-08-02で一致し、2021-06-28の業界リリースも8月上旬予定として整合。一部二次資料に2021-06-07表記があるが、発表時系列と矛盾するためcanonicalには採用せずSECONDARY_DATE_ERRORとして保持。"
  - "機械割は通常/市場手順と完全攻略時で定義が異なるため平均せず、97.1～108.6%と98.2～110.0%を別系列で保持。"
```

## QAメモ

- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、No.1424を確認し、2021-08-02群の次機No.1425として登録。
- 6.1号機のボーナス+RT。天井・ゾーンは非搭載で、AT機向けの天井/有利区間リセット仕様を推測転記していない。
- 設定別BB/RB/合算、通常機械割と完全攻略機械割、約39G/50枚、BIG207枚/REG71枚、30G RTを複数系統で照合。
- resetBehaviorで重要なのは、前日より設定が上がった場合に朝イチ1回目のRT終了後CZ失敗時のみ出現し得る『上げ上げだ』スタンプ。公開出現率は新設定2～6で各1%。
- 設定変更/据え置き/純電断時のRT/CZ内部状態、本機固有ガックンは表記揺れ・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等を組み替えて再探索したが、直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。
- 楽曲解放状態は電断されない限り維持されるため、純電断が演出系永続状態に影響する公開仕様として補助記録。
