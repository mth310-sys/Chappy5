# パチスロ南国物語30 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1470
canonicalKey: 2022-01-24_nangoku-monogatari-30
machineName: パチスロ南国物語30
manufacturer: アムテックス（総販売元: 平和）
modelCode: "S南国物語UNA2-30"
inspectionCode: "1S1192"
releaseDate: 2022-01-24
generation: "6号機"
systemType: ノーマルA / 完全告知 / 30Φ
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_PARTIAL_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.5
    "2": 98.5
    "3": 99.8
    "4": 102.6
    "5": 104.3
    "6": 106.5
  initialHitBySetting:
    definition: "BIG / REG / ボーナス合算"
    "1": "BIG 1/287.4 / REG 1/431.2 / 合算 1/172.5"
    "2": "BIG 1/283.7 / REG 1/412.2 / 合算 1/168.0"
    "3": "BIG 1/277.7 / REG 1/392.4 / 合算 1/162.6"
    "4": "BIG 1/269.7 / REG 1/362.1 / 合算 1/154.6"
    "5": "BIG 1/263.2 / REG 1/346.8 / 合算 1/149.6"
    "6": "BIG 1/256.0 / REG 1/316.6 / 合算 1/141.5"
  baseGamesPer50Coins: "約39.0G/50枚（設定1）"
  netIncrease: "NOT_APPLICABLE（AT/ART/RT純増型ではない）"
  basicPayout: "BIG平均約264枚・最大271枚 / REG 120枚"
  normalCeiling: "NONE。天井機能非搭載。"
  modeSpecificMinimumData:
    format: "30Φ完全告知ノーマル。蝶ランプ点灯でボーナス告知。"
    bonus: "BIGは赤7揃い、REGは赤7・赤7・BAR。チェリーとの同時当選あり。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載のため、天井ゲーム数リセットという比較対象なし。"
    modeState: "朝一専用モード・CZ・AT状態は確認されない。成立済みボーナス/告知待ち状態など、本機固有の設定変更内部処理は直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "通常時有利区間管理を用いるAT/ART機ではなく、朝一客行動用の有利区間リセット項目はNOT_APPLICABLE。"
    morningStart: "設定変更専用の短縮天井・朝一CZ/AT・専用モードはNONE_CONFIRMED_AFTER_RESEARCH。"
    benefit: "主要な設定変更専用恩恵はNONE_CONFIRMED_AFTER_RESEARCH。"
    disadvantage: "主要な設定変更専用不利要素はNONE_CONFIRMED_AFTER_RESEARCH。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "据え置き時の成立済みボーナス/告知状態等の本機固有契約はUNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION。"
    advantageousSection: "NOT_APPLICABLE。"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "純電源OFF→ON時の成立済みボーナス/告知状態、初期出目・ランプ復帰等の本機固有契約はUNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION。"
    advantageousSection: "NOT_APPLICABLE。"
  gameCounterReset: "NOT_APPLICABLE_NO_CEILING。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE。天井非搭載のため短縮天井なし。"
  modeAfterReset:
    behavior: "朝一専用モード/設定変更専用モードはNONE_CONFIRMED_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "通常時のAT/CZ高確等は非該当。成立済みボーナス・告知待ち状態の設定変更/据え置き/純電断別処理はUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "NOT_APPLICABLE_FOR_YARDSTICK。"
  resetBenefits:
    - "公開された設定変更専用の主要朝一恩恵なし確認。"
  resetPenalties:
    - "公開された設定変更専用の主要不利要素なし確認。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン条件/発生率は、機種名・型式・アムテックス・平和・朝一・設定変更・ガックン等で再探索したが固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "設定変更判別用の有利区間ランプ契約はNOT_APPLICABLE。蝶ランプ/サイドランプ/トップランプは通常の告知・設定示唆機能であり、設定変更判別とは分離する。"
  numericResetData:
    resetCeiling: "NOT_APPLICABLE"
    ceilingShortening: "NOT_APPLICABLE"
    resetModeDistribution: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    resetHitBoost: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/18375/yugitsushin
    sourceType: industry
    usedFor: [modelCode, manufacturer, generation, systemType, initialHitRange, basicPayout, releaseWindow]
  - url: https://news.p-world.co.jp/articles/18331/nippon
    sourceType: industry
    usedFor: [modelCode, manufacturer, generation, systemType, bonusProbabilities, basicPayout]
  - url: https://hazuse.com/machine/pachislot/1S1192/
    sourceType: old-analysis-database
    usedFor: [inspectionCode, releaseDate, payoutRate, bonusProbabilities, noCeiling]
  - url: https://hazuse.com/machine/pachislot/1S1192/genre/201/
    sourceType: old-analysis-database
    usedFor: [payoutRate, bonusProbabilities, basicPayout]
  - url: https://chonborista.com/slot/amute/154953/
    sourceType: analysis
    usedFor: [releaseDate, baseGamesPer50Coins, payoutRate, bonusProbabilities, basicPayout, noCeiling]
  - url: https://1geki.jp/slot/s_nangoku30/3/
    sourceType: analysis-high
    usedFor: [noCeiling]
  - url: https://www.p-world.co.jp/machine/database/9521
    sourceType: industry-database
    usedFor: [manufacturer, generation, systemType, basicPayout]

unverifiedAfterResearch:
  - "設定変更/据え置き/純電源OFF→ON時の成立済みボーナス・告知待ち状態の本機固有契約。"
  - "本機固有の設定変更時ガックン、初期出目、ランプ表示等の変更判別条件/発生率。"
  - "設定変更専用の比較可能な公開朝一数値。"

conflicts: []

notes:
  - "同名系統のAT機『南国育ち-30』とは別機種。南国育ち-30の796Gリセット天井・モード振り分け・有利区間挙動を本機へ流用しない。"
  - "本機は30Φノーマル完全告知機。天井非搭載で、resetBehaviorは『非該当項目の確定』と『機種固有の電源/設定変更契約の未確認』を分離した。"
```
