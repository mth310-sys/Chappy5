# パチスロ 百花繚乱 サムライガールズ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1419
canonicalKey: 2021-06-07_hyakka-ryoran-samurai-girls
machineName: パチスロ 百花繚乱 サムライガールズ
manufacturer: エンターライズ
modelCode: S百花繚乱サムライガールズZA
inspectionCode: 0S1214
releaseDate: 2021-06-07
machineType: 6.1号機 AT / 擬似ボーナス・周期管理型
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_MORNING_NUMERIC_DATA
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [98.1, 99.2, 100.1, 103.3, 107.0, 111.1]
  initialHit:
    label: ボーナス初当たり
    values: ["1/233.0", "1/225.7", "1/219.6", "1/198.6", "1/172.9", "1/132.1"]
  baseGamesPer50Coins: "約38.7G（全設定共通掲載値）"
  netIncrease: "約3.5枚/G（擬似ボーナス）"
  normalCeiling:
    type: 周期天井
    values: {通常A: "最大10周期", 通常B: "最大5周期", 天国A: "最大2周期", 天国B: "最大2周期"}
    reward: ボーナス当選
  basicPayout:
    note: "差枚数/ストック型の擬似ボーナス連チャン機。単一の固定基本獲得枚数より、純増約3.5枚/G・周期初当たり・ブライドループ期待獲得を比較軸とする。"
    brideLoopExpectedPayout: "約774枚（業界/解析紹介値）"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: RESET
    modeState: RESET_OR_RESELECT
    advantageousSection: RESET
    morningStart: "有利区間新規開始。天国モード選択の可能性があり、朝一は2周期以内当選のチャンス。"
    benefit: "有利区間リセット後は天国モード移行の可能性があり、天国なら2周期以内にボーナス当選。高確状態等の恩恵が示唆される解析あり。"
  unchanged:
    gameCountCeiling: CARRY_OVER
    modeState: CARRY_OVER
    advantageousSection: CARRY_OVER
  powerOffOn:
    gameCountCeiling: CARRY_OVER
    modeState: CARRY_OVER
    advantageousSection: CARRY_OVER
    note: "設定変更を伴わない電源OFF→ONは天井・内部状態引き継ぎの公開表を確認。"
  morningNumbers:
    ceilingAfterReset: "固定短縮G数ではなく、モード再抽選型。天国A/B選択時は最大2周期。"
    heavenModeCeiling: "最大2周期"
    resetSpecificModeDistribution: UNVERIFIED_AFTER_RESEARCH
  changeDetection:
    advantageousLamp: "通常時の有利区間ランプ運用だけで設定変更を確定できる高信頼の本機固有契約は今回固定できず。"
    machineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH

sources:
  - url: https://hazuse.com/machine/pachislot/0S1214/
    sourceType: industry-analysis
    usedFor: [modelIdentity, inspectionCode, releaseDate, payoutRate, initialHit, base, netIncrease, ceiling]
  - url: https://hazuse.com/machine/pachislot/0S1214/genre/201/
    sourceType: industry-analysis
    usedFor: [performanceCore]
  - url: https://1geki.jp/slot/s_hyakkaryouran_s/41/
    sourceType: analysis
    usedFor: [modeCeilings, heavenMode]
  - url: https://chonborista.com/slot/enta-slot/132524/
    sourceType: contemporary-analysis
    usedFor: [performanceCore, resetCarryover, resetBenefit]
  - url: https://ichikatsu.com/hyakkaryoran/
    sourceType: contemporary-analysis
    usedFor: [performanceCore, resetCarryover]
  - url: https://www.slopachi-quest.com/article/hyakka-ryoran-samurai-girls-tenjou/
    sourceType: contemporary-analysis
    usedFor: [ceiling, resetResearch, advantageousSection]
  - url: https://slotkaiseki.com/hyakkaryouran_yuuri_tenjou/
    sourceType: contemporary-analysis
    usedFor: [advantageousSectionResetTiming, modeCeilings]
  - url: https://p-kn.com/slot/3582/
    sourceType: industry-db
    usedFor: [releaseDate, initialHitCrossCheck]
  - url: https://www.pachibee.jp/machines/lecture/221040003
    sourceType: industry-db
    usedFor: [releaseDate, machineType, netIncrease]

conflicts: []
```

## QAメモ

- 2026-09-12: 性能コア＋v0.7 resetBehaviorを正式再探索。
- 型式 `S百花繚乱サムライガールズZA` / 検定番号 `0S1214` / 2021-06-07導入をHAZUSE等で照合。
- 設定変更時は天井・内部状態をRESET、純電断は引き継ぎ。6.1号機の有利区間リセット後は内部モードを再抽選し、天国なら2周期以内当選。
- 「朝一リセット台は高確状態等の恩恵あり」とする当時解析は存在するが、設定変更専用の天国移行率・高確移行率を直接固定できる高信頼表は見つからなかったため推定しない。
- 旧DAXEL版『百花繚乱サムライガールズ』のリセット周期振り分け（1周期37.7%等）は別機種であり、本機には流用していない。
- 本機固有ガックン条件/発生率、有利区間ランプ単独での変更判別契約も検索語・型式・メーカーを変えて再探索したが高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 細かな通常時全モード移行率・内部抽選は実機完全再現領域として対象外。
