# 鬼浜爆走紅蓮隊 激闘謳歌編 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1461
canonicalKey: 2022-01-11_onihama-gekitou-ouka
machineName: 鬼浜爆走紅蓮隊 激闘謳歌編
manufacturer: ベルコ
modelCode: Sオニハマ4VSH3
inspectionCode: 1S0065
releaseDate: 2022-01-11
generation: "6号機（6.1号機/6.2号機表記CONFLICT）"
systemType: AT / 周期抽選 / 擬似ボーナス
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_MEDIUM_RESET_WITH_GENERATION_CONFLICT
retrievedAt: 2026-09-12

performanceCore:
  settings: ["L", "1", "2", "3", "4", "6"]
  payoutRatePct:
    "L": 80.5
    "1": 97.4
    "2": 98.5
    "3": 101.4
    "4": 104.5
    "6": 108.1
  initialHitBySetting:
    "L": "ボーナス初当り 調査中/公開固定値未確認"
    "1": "ボーナス初当り 1/298.1"
    "2": "ボーナス初当り 1/289.6"
    "3": "ボーナス初当り 1/265.0"
    "4": "ボーナス初当り 1/242.1"
    "6": "ボーナス初当り 1/228.7"
  baseGamesPer50Coins: "約38G/50枚"
  netIncrease: "約4.5枚/G"
  basicPayout: "ツッパリボーナス20G / 鬼浜ボーナス20G。特攻ボーナスは突入時トータル1000枚獲得濃厚と紹介。"
  normalCeiling: "通常時700G+α消化または12周期到達でツッパリボーナス当選。1周期の規定Gは50/100/150G、平均到達は約80G。"
  modeSpecificMinimumData:
    cycleSystem: "周期開始ごとに周期レベル1〜4を抽選。周期到達時にボーナス/CZ抽選。完全再現用の全振り分けは対象外。"
    cz: "CZ『悪一文字』10G、成功期待度約50%、成功時は鬼浜ボーナスへ。"
    bonusLoop: "鬼浜ボーナス後『仁義なき争い』5G、ループ率約75%。4連勝で特攻ボーナス。"
  specialSetting:
    settingL: "出玉率80.5%。デモ画面中の下パネル消灯で外見判別可能と複数資料に記載。通常営業向け設定ではない特殊設定。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。ゲーム数天井・周期ゲーム数をリセット。"
    modeState: "内部状態の設定変更時契約は、当時解析でも調査中が残り、検索語・資料系統変更後も固定できずUNVERIFIED_AFTER_RESEARCH。周期開始時の通常周期レベル抽選は存在するが、設定変更専用振り分けは未確認。"
    advantageousSection: "RESET。有利区間をリセット。"
    morningStart: "液晶G数表示は『???』、鹿広場ステージから開始とする複数解析あり。設定変更専用の短縮天井・専用モード・固定初当り優遇は確認できず。"
    benefit: "公開された設定変更専用の固定恩恵・朝一当選率・短縮天井は十分な再探索後も確認できず。"
    disadvantage: "設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "通常の閉店→開店で設定据え置きかつ電源OFF→ONの場合、ゲーム数天井・周期ゲーム数をCARRY_OVER。"
    modeState: "内部状態の個別引継ぎ契約は高信頼資料で固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "設定据え置き＋純電断では有利区間CARRY_OVERとする解析あり。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。天井・周期ゲーム数を引き継ぐ。"
    modeState: "内部状態は当時資料で調査中表記が残るためUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "CARRY_OVER。"
    display: "表示G数は『???』、鹿広場ステージ開始。見た目だけでは内部周期Gの引継ぎを直接読めない。"
  gameCounterReset: "設定変更時RESET。据え置き/純電源OFF→ONは内部の天井・周期GをCARRY_OVER。表示は双方『???』。"
  ceilingAfterReset:
    resetSpecificShortening: "設定変更専用の短縮天井は確認できず。通常の700G+α / 12周期天井をリセットして再計数。"
  modeAfterReset:
    behavior: "設定変更専用モード/周期レベル初期振り分けの公開固定値はUNVERIFIED_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "設定変更時・純電源OFF→ON時の内部状態詳細は複数当時資料で調査中。十分な再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "SETTING_CHANGE_RESET / POWER_CYCLE_CARRY_OVER"
  resetBenefits:
    - "設定変更専用の固定恩恵・短縮天井・朝一特別当選率は確認できず。"
  resetPenalties:
    - "設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有のガックン条件・発生率は十分な再探索後もUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時に有利区間ランプが点灯する運用を前提とする解析では、朝一点灯=据え置き濃厚、消灯=設定変更濃厚（前日消灯閉店・店舗対策等を除く）。"
    other: "設定変更/純電断とも液晶G数『???』・鹿広場開始のため、液晶初期画面だけでの変更判別は困難。"
  numericResetData: {}

sources:
  - url: https://news.p-world.co.jp/articles/17999/nippon
    sourceType: industry
    usedFor: [manufacturer, modelCode, releaseWindow, systemType, netIncrease]
  - url: https://web-greenbelt.jp/post-50376/
    sourceType: industry
    usedFor: [modelCode, manufacturer, inspectionPassage]
  - url: https://zenrin-net.com/kenteis/listsend?machinesort_id=2&order_date=2024
    sourceType: old-database
    usedFor: [modelCode, inspectionCode]
  - url: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/2109/documents/90168_20210924100448-1.pdf
    sourceType: official-public
    usedFor: [modelCode, inspectionCode, manufacturer]
  - url: https://www.p-world.co.jp/machine/database/9496
    sourceType: industry-database
    usedFor: [systemType, netIncrease, basicPayout, initialHitBySetting, payoutRate, normalCeiling]
  - url: https://nana-press.com/kaiseki/machine/163/
    sourceType: analysis-high
    usedFor: [releaseDate, systemType, baseGamesPer50Coins, netIncrease, normalCeiling]
  - url: https://nana-press.com/kaiseki/machine/163/7408/
    sourceType: analysis-high
    usedFor: [initialHitBySetting]
  - url: https://nana-press.com/kaiseki/machine/163/7410/
    sourceType: analysis-high
    usedFor: [cycleSystem, cycleGames, cycleAverage]
  - url: https://nana-press.com/kaiseki/machine/163/7412/
    sourceType: analysis-high
    usedFor: [basicPayout, netIncrease]
  - url: https://nana-press.com/kaiseki/machine/163/7416/
    sourceType: analysis-high
    usedFor: [bonusLoop]
  - url: https://chonborista.com/slot/belko-slot/154177/
    sourceType: analysis
    usedFor: [releaseDate, payoutRate, initialHitBySetting, baseGamesPer50Coins, resetDisplay, resetCycleGame]
  - url: https://www.slopachi-quest.com/article/onihama-gekitououka-tenjou/
    sourceType: analysis
    usedFor: [normalCeiling, settingChange, powerOffOn, cycleCarryOver, advantageousSection, resetDetection]
  - url: https://ichikatsu.com/onihamageki/
    sourceType: analysis
    usedFor: [releaseDate, generation62, payoutRate, initialHitBySetting, baseGamesPer50Coins, normalCeiling]

unverifiedAfterResearch:
  - "設定Lのボーナス初当り確率。"
  - "設定変更時の内部状態・設定変更専用モード/周期レベル初期振り分け。"
  - "純電源OFF→ON時の内部状態詳細。"
  - "設定変更専用の朝一当選率、短縮天井、固定リセット恩恵。"
  - "本機固有の設定変更ガックン条件・発生率。"

conflicts:
  - field: generation
    values:
      - "6.2号機: イチカツ等"
      - "6.1号機: Slopachi-Quest、ちょんぼりすた系一部資料等"
    handling: "平均化不可。型式・性能コアには影響させず『6号機（6.1/6.2表記CONFLICT）』として保持。"
```

## QAメモ
- 2026-09-12: 最新main No.1460「スーパーリノSP」の次機として登録。
- 型式 `Sオニハマ4VSH3`、検定番号 `1S0065` は業界検定通過記事、公安委員会公報/検定DBで照合。
- 2022-01-11導入、ベルコ、純増約4.5枚/G、約38G/50枚、設定L/1/2/3/4/6の出玉率・初当りを複数資料で照合。
- 天井は700G+αまたは12周期。設定変更で有利区間・天井・周期G RESET、純電断でCARRY_OVERを保存。
- 内部状態、設定変更専用恩恵/数値、ガックンは欠損判定前に表記・検索語・資料系統を変えて再探索し、直接契約を固定できなかったためUNVERIFIED_AFTER_RESEARCH。
- 号機細分類は6.1/6.2表記が競合するためCONFLICT保持。
- 2022-01-11新台カレンダーを再監査し、バーサスリヴァイズ / スーパーリノSP / 本機の3機を確認。別型式・PB・地域先行の追加候補は今回確認できず、同日群CLOSED候補。
