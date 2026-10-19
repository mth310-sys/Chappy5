# パチスロ零 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1422
canonicalKey: 2021-07-05_pachislot-zero
machineName: パチスロ零
manufacturer: 山佐
brand: 山佐ネクスト
modelCode: Sパチスロ零YTFF
inspectionCode: 0S1431
releaseDate: 2021-07-05
machineType: 6.1号機 AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_UNVERIFIED
confidence: HIGH_CORE_MEDIUM_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  firstHitProbability: ["1/265.1", "1/247.7", "1/231.6", "1/212.6", "1/197.0", "1/181.6"]
  payoutRatePct: [97.8, 98.7, 100.4, 103.1, 105.9, 109.3]
  baseGamesPer50Coins: "約42.0G/50枚"
  atNetIncrease: "約2.8枚/G（準備中は約1.0枚/G）"
  zeroBonus: "ベルナビ20回・平均約100枚。消化中にAT抽選。"
  omaGatoki: "最大5G。突入時点でAT系当選が確定するジャッジ区間で、ZERO期待度約55%。失敗時は当主狂乱へ。"
  mainAT: "ZERO。自力バトル継続型AT。準備区間8G+α→周忌バトル20G+αが基本。"
  normalCeiling: "有利区間移行後最大800G+αで逢魔刻"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET; 有利区間移行から再計数。通常最大800G+α"
    modeState: "有利区間移行時に通常/チャンスA-D等を再抽選。設定変更専用固定モードは確認できず。"
    advantageousSection: "RESET; 朝一ランプ消灯が変更推測材料"
    morningStart: "非有利区間→有利区間移行時の共通抽選から開始。設定変更専用短縮天井は確認できない。"
    benefit: "有利区間移行後は設定1でも100G以内約20%、200G以内約40%で零ボーナスor逢魔刻に当選。ただし設定変更専用値ではなく有利区間移行時共通値。"
    disadvantage: "RESET_SPECIFIC_DISADVANTAGE_NONE_CONFIRMED_AFTER_RESEARCH"
  unchanged:
    gameCountCeiling: "CARRY_OVER_EXPECTED_FROM_ADVANTAGEOUS_SECTION_CONTINUATION; direct machine-specific reset table not found"
    modeState: "CARRY_OVER_EXPECTED_WHILE_ADVANTAGEOUS_SECTION_CONTINUES; direct standalone table not found"
    advantageousSection: "CARRY_OVER unless ordinary game flow itself ends the advantageous section"
  powerOffOn:
    gameCountCeiling: UNVERIFIED_AFTER_RESEARCH
    modeState: UNVERIFIED_AFTER_RESEARCH
    advantageousSection: UNVERIFIED_AFTER_RESEARCH
    note: "本機固有の純電源OFF→ON直接契約を、据え置き一般論や他機種仕様から補完しない。"
  normalModes:
    normal: "最大800G"
    chanceAtoD: "最大400G"
    pullback: "有利区間引継ぎ時のみ。最大300Gかつ逢魔刻当選"
  morningNumbers:
    resetSpecificCeiling: "NONE_CONFIRMED_AFTER_RESEARCH"
    advantageousSectionTransitionSetting1HitDistribution: "1-100G累積 約20% / 1-200G累積 約40%（全当選契機込み。有利区間移行時共通で設定変更専用ではない）"
    detailedObservedCumulativeSetting1: "1-50G 1.15%; 1-100G 18.46%; 1-150G 24.35%; 1-200G 40.55%; 1-400G 80.14%"
    resetSpecificModeDistribution: "NO_RESET_ONLY_TABLE_CONFIRMED; public tables are advantageous-section-transition common"
  changeDetection:
    advantageousSectionLamp: "通常時点灯型。朝一消灯=設定変更濃厚、点灯=据え置き濃厚の推測材料。ただし前日消灯閉店・店側対策等の例外あり。"
    lampPosition: "クレジット右下ドット"
    machineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH
    overall: "ランプは有力な推測材料だが確定判別ではない。"

sources:
  - url: https://hazuse.com/machine/pachislot/0S1431/
    sourceType: analysis-high
    usedFor: [modelCode, inspectionCode, releaseDate, manufacturer, payoutRange, ceiling, modes, advantageousSectionLamp]
  - url: https://p-kn.com/slot/3612/
    sourceType: contemporary-machine-db
    usedFor: [releaseDate, firstHitProbability, payoutRate]
  - url: https://nana-press.com/kaiseki/machine/135/
    sourceType: contemporary-analysis
    usedFor: [baseGamesPer50Coins, atNetIncrease, ceiling, gameFlow]
  - url: https://nana-press.com/kaiseki/machine/135/4475/
    sourceType: contemporary-analysis
    usedFor: [advantageousSectionTransitionSetting1HitDistribution]
  - url: https://nana-press.com/kaiseki/machine/135/4165/
    sourceType: analysis
    usedFor: [publicMorningNumbers, modes]
  - url: https://nana-press.com/kaiseki/machine/135/4278/
    sourceType: analysis
    usedFor: [modeCeilings, pullbackMode]
  - url: https://www.slopachi-quest.com/article/zero-tenjou/
    sourceType: contemporary-analysis
    usedFor: [ceiling, advantageousSectionLampResetDetection, publicMorningNumbers]
  - url: https://slotmethod.jp/archives/6948/
    sourceType: later-analysis
    usedFor: [advantageousSectionLampResetDetection, lampPosition]
  - url: https://www.pidea.jp/articles/1621323538
    sourceType: contemporary-industry
    usedFor: [manufacturerBrand, atNetIncrease, gameFlow]
  - url: https://web-greenbelt.jp/post-48704/
    sourceType: contemporary-industry
    usedFor: [releaseDate, brand]

unverifiedAfterResearch:
  - "純電源OFF→ON時の本機固有の天井G・内部モード/状態・有利区間の直接契約"
  - "本機固有の設定変更1G目ガックン条件・発生率"
  - "設定変更専用の固定短縮天井"
  - "設定変更専用に限定したモード振り分け表（公開表は有利区間移行時共通）"
```

## QAメモ

- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、No.1421「新ハナビ」を再取得し、handoff指定どおりNo.1422として登録。
- 型式 `Sパチスロ零YTFF`、検定番号 `0S1431`、2021-07-05導入をHAZUSEと当時/現存DBで照合。
- 初当り、機械割、約42G/50枚、AT約2.8枚/G、天井800G+αを複数資料で照合。
- 通常時モードは通常/チャンスA-D/引き戻し。通常最大800G、チャンス最大400G、引き戻しは有利区間引継ぎ時のみ最大300Gかつ逢魔刻。
- 有利区間移行後の設定1初当り累積は100G以内約20%、200G以内約40%。これは設定変更専用恩恵ではなく、有利区間移行時共通の公開朝一相当値として保存。
- 有利区間ランプは通常時点灯型。朝一消灯は設定変更濃厚、点灯は据え置き濃厚の推測材料だが、前日消灯状態・店舗対策等を考慮し確定判別とはしない。
- 純電源OFF→ONの本機固有直接契約は、機種名/型式/電断/据え置き/朝一を変えて再探索したが固定できず、据え置き一般論から補完せず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックンも十分な再探索後に直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
