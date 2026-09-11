# ノーゲーム・ノーライフ THE SLOT — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1420
canonicalKey: 2021-06-14_no-game-no-life-the-slot
machineName: ノーゲーム・ノーライフ THE SLOT
manufacturer: 北電子
modelCode: Sノーゲーム・ノーライフKG
inspectionCode: 1S0178
releaseDate: 2021-06-14
machineType: 6.1号機 AT / 擬似ボーナス・CZ・差枚数管理型AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_INITIAL_SCORE_AND_MODE_TABLE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.5, 98.7, 101.0, 103.1, 106.5, 110.1]
  initialHit:
    label: ストラテジーゲーム
    values: ["1/350.1", "1/296.3", "1/390.1", "1/271.4", "1/265.3", "1/243.7"]
  baseGamesPer50Coins: "約49G/50枚"
  netIncrease: "約2.5枚/G（AT）"
  normalCeiling:
    gameCount: "通常時700Gでストラテジーゲーム当選"
    cycleCount: "スコアジャッジ10周期（累計10000pt）でストラテジーゲーム＋十の盟約当選濃厚"
  basicPayout:
    note: "AT『ラブ・オア・ラベッド2』は差枚数管理型。開始差枚数は上乗せ特化ゾーン等で変動するため、固定の単一基本獲得枚数は採用しない。物差し上は純増約2.5枚/Gを主要比較値とする。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: RESET
    modeState: RESET
    advantageousSection: RESET
    morningStart: "王の寝室ステージ。天井・内部モード・内部状態をリセットし、有利区間を新規開始する。"
    benefit: "設定変更専用の短縮天井・AT/CZ直撃保証などは確認されず、当時解析ではリセット後恩恵『特に無し』。"
  unchanged:
    gameCountCeiling: CARRY_OVER
    modeState: CARRY_OVER
    advantageousSection: CARRY_OVER
  powerOffOn:
    gameCountCeiling: CARRY_OVER
    modeState: CARRY_OVER
    advantageousSection: CARRY_OVER
    morningStage: "王の寝室"
  morningNumbers:
    ceilingAfterReset: "固定短縮なし。通常天井700G / 10周期。"
    initialScore: "有利区間開始時は初期スコア分が優遇され、1周期目到達まで平均約62G。通常の1周期平均は約104G。設定変更専用ではなく有利区間開始時の共通特性。"
    generalAdvantageousSectionModeDistribution:
      note: "有利区間開始/通常時モード滞在比率として公開された設定別値。設定変更専用テーブルとは扱わない。"
      setting1: {modeA: "58.5%", modeB: "29.0%", heaven: "12.5%"}
      setting2: {modeA: "25.5%", modeB: "51.0%", heaven: "23.5%"}
      setting3: {modeA: "60.0%", modeB: "29.8%", heaven: "10.2%"}
      setting4: {modeA: "24.7%", modeB: "49.4%", heaven: "25.9%"}
      setting5: {modeA: "53.3%", modeB: "26.6%", heaven: "20.0%"}
      setting6: {modeA: "22.4%", modeB: "44.3%", heaven: "33.3%"}
  changeDetection:
    advantageousLamp: "通常時は有利区間ランプが消灯しているタイプ。朝一消灯だけでは設定変更判別不可。朝一点灯なら据え置き濃厚。"
    machineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH
  penalties: "設定変更専用の主要な不利要素はNONE_CONFIRMED_AFTER_RESEARCH。"

sources:
  - url: https://hazuse.com/machine/pachislot/1S0178/
    sourceType: industry-analysis
    usedFor: [modelIdentity, inspectionCode, releaseDate, manufacturer, machineType, payoutRange, netIncrease]
  - url: https://slothack.net/matome/35306/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, settings, payoutRate, strategyGameRate, base, netIncrease]
  - url: https://1geki.jp/slot/s_nogamenolife/
    sourceType: analysis
    usedFor: [releaseDate, payoutRate, strategyGameRate, gameFlow]
  - url: https://www.slopachi-quest.com/article/no-game-no-life-tenjou/
    sourceType: contemporary-analysis
    usedFor: [normalCeiling, resetCarryover, resetBenefit, resetDetection, advantageousSection]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/115/tj03-1.php
    sourceType: analysis-high
    usedFor: [scoreSystem, firstCycleAverageGames, normalCycleAverageGames]
  - url: https://slot-seven.com/nogamenolife-tenzyou/
    sourceType: contemporary-analysis
    usedFor: [modeDistribution]
  - url: https://ichikatsu.com/newslot/
    sourceType: release-calendar
    usedFor: [releaseDate, groupAudit, payoutRate, strategyGameRate, base, netIncrease]

conflicts: []
```

## QAメモ

- 2026-09-12: 最新mainのNo.1419後を監査し、2021-06-14導入の独立パチスロ新台として本機をNo.1420登録。
- 型式 `Sノーゲーム・ノーライフKG`、検定番号 `1S0178`、2021-06-14導入、北電子をHAZUSEと複数解析資料で照合。
- 設定別ストラテジーゲーム確率と出玉率、約49G/50枚、AT純増約2.5枚/Gは複数系統で一致。
- 天井は通常時700Gとスコアジャッジ10周期（累計10000pt）の2系統。10周期側はストラテジーゲーム＋『十の盟約』当選濃厚。
- 設定変更では有利区間・天井・内部モード・内部状態をRESET。設定変更を伴わない電源OFF→ONはCARRY_OVER。
- 当時解析のリセット専用恩恵は『特に無し』。固定短縮天井や朝一専用直撃率は推測補完しない。
- 有利区間開始時の初期スコア優遇により1周期目は平均約62G（通常周期平均約104G）だが、これは設定変更専用ではなく有利区間開始時共通の公開値として分離。
- 設定別モードA/B/天国比率も設定変更専用テーブルではなく、公開された通常時/有利区間開始系の比較値として分離。
- 通常時は有利区間ランプ消灯型のため朝一消灯だけでは変更判別不可。朝一点灯は据え置き濃厚。
- 2021-06-14群は新台カレンダー上、本機のみを確認。2021-06-15〜07-04境界も監査し、次の既知導入群は2021-07-05（新ハナビ / パチスロ零）。
