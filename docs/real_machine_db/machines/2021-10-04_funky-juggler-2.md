# ファンキージャグラー2 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1434
canonicalKey: 2021-10-04_funky-juggler-2
machineName: ファンキージャグラー2
manufacturer: 北電子
modelCode: Sファンキージャグラー2KT
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2021-10-04
generation: 6号機
systemType: ノーマル / 完全告知 / ボーナス主体
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_NO_CEILING
confidence: HIGH_CORE_MEDIUM_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.0, 98.5, 99.8, 102.0, 104.3, 109.0]
  initialHitBySetting:
    big: ["1/266.4", "1/259.0", "1/256.0", "1/249.2", "1/240.1", "1/219.9"]
    reg: ["1/439.8", "1/407.1", "1/366.1", "1/322.8", "1/299.3", "1/262.1"]
    bonusCombined: ["1/165.9", "1/158.3", "1/150.7", "1/140.6", "1/133.2", "1/119.6"]
  baseGamesPer50Coins: "約42G/50枚"
  netIncrease: "NOT_APPLICABLE（AT/ART非搭載のノーマルタイプ）"
  basicPayout: "BIG平均約240枚 / REG平均約96枚"
  normalCeiling: "NOT_APPLICABLE（天井・ゾーン非搭載）"
  notes:
    - "6号機ジャグラーシリーズ第2弾。GOGO!ランプ点灯でボーナス確定。"
    - "メーカー発表機械割とは別に、技術介入時の試算値を掲載する資料があるため混同しない。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "公開リセット表ではG数RESET。ただし本機は天井・ゾーン非搭載で、朝一狙いに直結する内部天井G数は存在しない。"
    modeState: "NOT_APPLICABLE。公開資料で朝一専用モード/内部状態恩恵は確認されない。"
    advantageousSection: "NOT_APPLICABLE（ノーマルタイプ）"
    morningStart: "通常ゲーム開始。リセット固有の短縮天井・CZ・AT等はなし。"
    benefit: "NONE_CONFIRMED。設定変更そのものによる出玉性能上の朝一恩恵は確認されない。"
    disadvantage: "NONE_CONFIRMED。"
  unchanged:
    gameCountCeiling: "天井非搭載。前日G数を引き継ぐこと自体に天井/ゾーン上の意味はない。"
    modeState: "NOT_APPLICABLE"
    advantageousSection: "NOT_APPLICABLE"
  powerOffOn:
    gameCountCeiling: "公開リセット表ではG数引継ぎ。天井非搭載のため性能上の恩恵・不利はなし。"
    modeState: "NOT_APPLICABLE"
    advantageousSection: "NOT_APPLICABLE"
  gameCounterReset: "設定変更時RESET / 電源OFF→ONのみでは引継ぎ、という公開攻略表あり。ただし本機は天井・ゾーン非搭載。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE"
    ceilingValue: "天井・ゾーン非搭載"
  modeAfterReset:
    behavior: "NOT_APPLICABLE。朝一専用モード等は確認されない。"
    resetSpecificDistribution: "NOT_APPLICABLE"
  stateAfterReset: "公開資料上、朝一客行動に影響する持続状態/専用内部状態は確認されない。"
  advantageousSectionReset: "NOT_APPLICABLE（ノーマルタイプ）"
  resetBenefits:
    - "NONE_CONFIRMED。天井短縮・高確移行・AT/CZ優遇などは非搭載/確認なし。"
  resetPenalties:
    - "NONE_CONFIRMED。"
  resetDetection:
    advantageousSectionLamp: "NOT_APPLICABLE"
    reelBehavior: "設定変更後の朝一1G目にリールのガックン挙動を利用できるとの複数ジャグラー系資料あり。店側が1G回す等の対策、前日出目変更、個体差があるため確定扱いしない。"
    machineSpecificGakkun: "ガックン有り＝設定変更濃厚材料。無しだけで据え置き確定にはしない。前日閉店出目の記録併用が必要。"
  numericResetData:
    resetCeilingGames: "NOT_APPLICABLE"
    morningSpecialHitRate: "NOT_APPLICABLE"
    resetSpecificModeDistribution: "NOT_APPLICABLE"

sources:
  - url: https://news.p-world.co.jp/articles/18029/nippon
    sourceType: contemporary-industry
    usedFor: [releaseDate, modelCode, manufacturer, basicPayout]
  - url: https://news.p-world.co.jp/articles/17759/nippon
    sourceType: contemporary-industry
    usedFor: [modelCode, releaseDate, bigRateRange, regRateRange, payoutRateRange, basicPayout]
  - url: https://hisshobon.news/analyze/4030/
    sourceType: contemporary-analysis
    usedFor: [settings, bigRates, regRates, combinedRates, payoutRates, basicPayout, systemType]
  - url: https://slobase.jp/machines/funky-juggler2
    sourceType: analysis-high
    usedFor: [baseGamesPer50, settings, bigRates, regRates, combinedRates, payoutRates]
  - url: https://ichikatsu.com/funkyjuggler2/
    sourceType: contemporary-analysis
    usedFor: [ceilingNotEquipped, resetGameCountTable, powerCycleCarryOver]
  - url: https://akirameruna.com/funky2-jug
    sourceType: analysis-secondary
    usedFor: [machineSpecificGakkun, firstGameAfterSettingChange, resetDetectionCaveats]
  - url: https://jugglersnet.com/analysis/funky-juggler2
    sourceType: contemporary-specialist-analysis
    usedFor: [gakkunApplicability, sameCabinetBehaviorContext]
  - url: https://news.p-world.co.jp/articles/16311/greenbelt
    sourceType: contemporary-industry
    usedFor: [modelCode, certificationPassageDate]

unverifiedAfterResearch:
  - "検定番号そのもの。型式Sファンキージャグラー2KTと2021-04-12付検定通過は業界記事で確認したが、番号は今回の再探索で直接固定できず。"
  - "北電子公式資料による本機固有ガックン保証。複数ジャグラー専門/解析資料で実用挙動は確認できるが、確定条件としては扱わない。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1433を確認し、handoff指定の次機として追加。
- 性能コアは当時業界記事・必勝本・複数解析で一致。設定1〜6の機械割、BB/REG/合算、約42G/50枚、BB約240枚/REG約96枚を固定。
- 天井・ゾーン非搭載のため、resetBehavior上の天井短縮・モード優遇・有利区間はNOT_APPLICABLE。公開攻略表の「設定変更G数リセット/電源ON-OFF引継ぎ」は記録するが、性能上の天井狙いへ誤変換しない。
- 朝一変更判別はガックンが主要材料。ただし店側の1G回し等の対策・個体差があるため「濃厚材料」止まり。
- 技術介入時の機械割試算値はメーカー公表機械割とは別定義のため性能コアに混ぜない。
