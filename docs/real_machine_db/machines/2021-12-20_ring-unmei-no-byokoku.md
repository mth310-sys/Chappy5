# パチスロ リング 運命の秒刻 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1458
canonicalKey: 2021-12-20_ring-unmei-no-byokoku
machineName: パチスロ リング 運命の秒刻
manufacturer: 藤商事
modelCode: Sリング 運命の秒刻FL
inspectionCode: 1S0477
releaseDate: 2021-12-20
generation: "6.1号機"
systemType: AT / 疑似ボーナス / 高純増ストレートAT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.3
    "2": 98.4
    "3": 100.2
    "4": 103.6
    "5": 106.2
    "6": 110.1
  initialHitBySetting:
    "1": "貞子BONUS 1/296.2 / 超貞子BONUS 1/787.2"
    "2": "貞子BONUS 1/282.6 / 超貞子BONUS 1/749.9"
    "3": "貞子BONUS 1/272.8 / 超貞子BONUS 1/723.3"
    "4": "貞子BONUS 1/246.8 / 超貞子BONUS 1/640.9"
    "5": "貞子BONUS 1/238.3 / 超貞子BONUS 1/618.6"
    "6": "貞子BONUS 1/220.1 / 超貞子BONUS 1/565.4"
  baseGamesPer50Coins: "約35.3G"
  netIncrease: "約6.0枚/G"
  basicPayout: "貞子BONUS=100枚+α / 超貞子BONUS=初期差枚数100〜1000枚 / 貞子接近ZONE=15GのST型引き戻しAT"
  normalCeiling: "最大800G+α。内部モード別にA=800G / B=500G / C=300G / D=100Gが上限目安。到達で貞子BONUS。"
  modeSpecificMinimumData:
    cz1: "怨念解放の刻：設定1 1/287〜設定6 1/238、成功期待度約37%。"
    cz2: "運命の秒刻：設定1 1/865〜設定6 1/710、成功期待度約70%。"
    upperAT: "超貞子BONUSは純増約6枚/G、初期差枚100〜1000枚。終了後は15Gの貞子接近ZONE。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "天井/ゲーム数をRESET。"
    modeState: "内部モード・内部状態をRESET/再抽選。"
    advantageousSection: "RESET。"
    morningStart: "朝一ステージを設定に応じて再抽選。ユイ/智子/メグミの3種。"
    benefit: "朝一メグミステージなら設定変更濃厚材料かつ偶数設定ほど選ばれやすい。"
    disadvantage: "比較可能な設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "天井/ゲーム数を引き継ぐ。"
    modeState: "内部モード・内部状態を引き継ぐ。"
    advantageousSection: "進行中の有利区間を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "引き継ぐ。"
    modeState: "内部モード・内部状態を引き継ぐ。"
    advantageousSection: "引き継ぐ。"
  gameCounterReset: "設定変更でRESET / 据え置き・純電源OFF→ONでCARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "固定の設定変更専用短縮天井は確認できず。新規モード抽選結果により最大100/300/500/800Gのいずれかとなる。"
  modeAfterReset:
    behavior: "設定変更で内部モードを再抽選。据え置き・純電断は引継ぎ。"
  stateAfterReset:
    behavior: "設定変更でRESET / 据え置き・純電断でCARRY_OVER。"
  advantageousSectionReset: "RESET_ON_SETTING_CHANGE / CARRY_OVER_ON_UNCHANGED_AND_POWER_CYCLE"
  resetBenefits:
    - "朝一ステージ振り分けに設定差。メグミステージは設定変更濃厚材料。"
    - "有利区間ランプ通常点灯型のため、前日状態を含めて設定変更推測が可能。"
  resetPenalties:
    - "比較可能な設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有のガックン条件・発生率は、機種名/型式/メーカー/設定変更/リセット/朝一/据え置き/ガックン等で再探索後も高信頼直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時点灯型。有利区間ランプ点灯=据え置き濃厚、消灯=設定変更濃厚。ただし前日消灯閉店・店舗側対策は例外。"
    other: "朝一メグミステージなら設定変更濃厚。ユイ/智子では設定変更否定にならない。"
  numericResetData:
    morningStageBySetting:
      setting1: "ユイ43.7% / 智子43.7% / メグミ12.5%"
      setting2: "ユイ37.5% / 智子37.5% / メグミ25.0%"
      setting3: "ユイ43.7% / 智子43.7% / メグミ12.5%"
      setting4: "ユイ37.5% / 智子37.5% / メグミ25.0%"
      setting5: "ユイ43.7% / 智子43.7% / メグミ12.5%"
      setting6: "ユイ37.5% / 智子37.5% / メグミ25.0%"

sources:
  - url: https://www.p-world.co.jp/machine/database/9515
    sourceType: database-high
    usedFor: [manufacturer, modelCode, inspectionCode, releaseDate, generation, systemType, netIncrease, basicPayout, normalCeiling]
  - url: https://www.pachibee.jp/machines/index/221110006
    sourceType: industry-media
    usedFor: [releaseDate, generation, payoutRate, netIncrease, basicPayout, normalCeiling]
  - url: https://web-greenbelt.jp/post-52243/
    sourceType: industry
    usedFor: [manufacturer, netIncrease, basicPayout, initialHitBySetting]
  - url: https://p-kn.com/slot/3695/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, initialHitBySetting]
  - url: https://data.hazuse.com/?genre=208&machine_code=1S0477
    sourceType: analysis-high
    usedFor: [releaseDate, initialHitBySetting, czInitialHit]
  - url: https://www.slopachi-quest.com/article/ring-unnmeinobyoukoku-settei/
    sourceType: analysis
    usedFor: [generation, payoutRate, initialHitBySetting, baseGamesPer50Coins, netIncrease]
  - url: https://slot-seven.com/ringunmeinobyokoku-tenzyou/
    sourceType: analysis
    usedFor: [settingChange, unchanged, powerOffOn, modeAfterReset, stateAfterReset, advantageousSectionReset, resetDetection, morningStageBySetting]
  - url: https://chonborista.com/slot/fuji-slot/153989/comment-page-8/
    sourceType: analysis
    usedFor: [releaseDate, payoutRate, initialHitBySetting, baseGamesPer50Coins, netIncrease, normalCeiling]

unverifiedAfterResearch:
  - "本機固有の設定変更ガックン条件・発生率。"

conflicts:
  - "世代表記はP-WORLD/パチビー/当時解析で6.1号機が複数一致する一方、一部二次資料に6.2号機表記あり。canonicalは6.1号機とし、6.2表記はCONFLICT_SECONDARYとして保持。"
```

## QAメモ
- 2026-09-12: 2021-12-20群の既知最終候補として処理。
- P-WORLDで型式 `Sリング 運命の秒刻FL`、検定番号 `1S0477`、2021-12-20、6.1号機ATを固定。
- パチビー・K-Navi・HAZUSE・複数解析・業界記事で機械割97.3〜110.1%、貞子BONUS 1/296.2〜1/220.1、超貞子BONUS 1/787.2〜1/565.4、約35.3G/50枚、純増約6.0枚/Gを照合。
- resetBehaviorは設定変更=天井/モード/状態/有利区間RESET、据え置き/純電源OFF→ON=引継ぎを確認。
- 朝一ステージ振り分けの公開数値を収録。メグミは設定変更濃厚材料、偶数設定は25.0%、奇数設定は12.5%。
- 有利区間ランプ通常点灯型で、朝一消灯=設定変更濃厚、点灯=据え置き濃厚。ただし前日消灯閉店・店舗側対策は例外。
- 固有ガックンのみ十分な再探索後も直接値を固定できず推測していない。