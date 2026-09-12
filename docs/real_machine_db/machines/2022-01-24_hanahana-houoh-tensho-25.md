# ハナハナホウオウ～天翔～ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1464
canonicalKey: 2022-01-24_hanahana-houoh-tensho-25
machineName: ハナハナホウオウ～天翔～
manufacturer: パイオニア
modelCode: Sハナハナホウオウ～天翔～LX
inspectionCode: 0S1386
releaseDate: 2022-01-24
generation: "6.1号機"
systemType: ノーマル / 完全告知 / 25φ
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_HIGH_RESET_WITH_BGM_HISTORY_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.0
    "2": 99.0
    "3": 101.0
    "4": 103.0
    "5": 106.0
    "6": 109.0
  initialHitBySetting:
    definition: "リアルボーナス。業界発表・HAZUSE・複数解析で一致。"
    "1": "BIG 1/297 / REG 1/496 / 合算 1/186"
    "2": "BIG 1/284 / REG 1/458 / 合算 1/175"
    "3": "BIG 1/273 / REG 1/425 / 合算 1/166"
    "4": "BIG 1/262 / REG 1/397 / 合算 1/157"
    "5": "BIG 1/249 / REG 1/366 / 合算 1/148"
    "6": "BIG 1/236 / REG 1/337 / 合算 1/139"
  baseGamesPer50Coins: "約42G/50枚（設定1表記を含む複数資料一致）"
  netIncrease: "NOT_APPLICABLE（リアルボーナス主体ノーマル機）"
  basicPayout: "BIG最大240枚 / REG最大120枚"
  normalCeiling: "非搭載"
  modeSpecificMinimumData:
    bonusSystem: "ハイビスカス点灯でボーナス。単独当選時の告知は当選GレバーON約85%、次GレバーON約10%、小役同時当選は次GレバーON約5%。"
    thirtyPhiSeparation: "30φ『ハナハナホウオウ～天翔～-30 / Sハナハナホウオウ～天翔～EX-30 / 0S1174』とは別型式・別検定番号。同時導入かつ公開性能値は同一のため独立レコードとして扱う。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE（天井非搭載）"
    modeState: "AT/ART/CZモードはNOT_APPLICABLE。BETランプは設定変更でも引き継ぐ。BGM変化条件の履歴/内部条件が設定変更でどう扱われるかは当時解析で『現在調査中』のためUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE（純ボーナスノーマル機として有利区間進行を性能・朝一契約に用いない）"
    morningStart: "設定変更による専用朝一モード・短縮天井・CZ/AT優遇なし。"
    benefit: "設定変更専用の主要恩恵は確認されない。"
    disadvantage: "設定変更専用の主要不利要素は確認されない。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE（天井非搭載）"
    modeState: "AT/ART/CZモードはNOT_APPLICABLE。BETランプは引継ぎ。BGM変化条件の内部履歴は直接固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE（天井非搭載）"
    modeState: "BETランプは電源OFF→ONでも引き継ぐ。BGM変化条件の履歴/内部条件は当時解析で『現在調査中』のためUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE"
  gameCounterReset: "NOT_APPLICABLE_FOR_CEILING。天井ゲーム数自体を持たない。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE。天井非搭載。"
  modeAfterReset:
    behavior: "NOT_APPLICABLE_FOR_AT_CZ。朝一専用モードは確認されない。"
  stateAfterReset:
    behavior: "AT/CZ内部状態はNOT_APPLICABLE。BGM変化条件の内部履歴のみUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "NOT_APPLICABLE"
  resetBenefits:
    - "設定変更専用の短縮天井・朝一専用モード・AT/CZ優遇はなし/非該当。"
  resetPenalties:
    - "公開された設定変更専用の主要不利要素は確認されない。"
  resetDetection:
    reelBehavior: "リールガックンは設定変更時も電源OFF→ON時も『ナシ』。"
    lampDisplay: "BETランプは設定変更・電源OFF→ONとも引き継ぐため、BETランプによる変更判別材料にはならない。"
    other: "天井/有利区間ランプ/朝一専用モードによる変更判別は非該当。BGM変化条件は調査中で、変更判別契約へ流用しない。"
  numericResetData: "公開された設定変更専用の当選率・短縮G数・モード振り分けなし。"

sources:
  - url: https://www.slot-pioneer.co.jp/information/hanahana_houoh_tensho.html
    sourceType: official
    usedFor: [machineName, manufacturer, twentyFiveThirtyPhiRelease]
  - url: https://news.p-world.co.jp/articles/18115/nippon
    sourceType: industry
    usedFor: [modelCode, twentyFiveThirtyPhiSeparation, systemType, releaseSchedule]
  - url: https://news.p-world.co.jp/articles/19304/nippon
    sourceType: industry
    usedFor: [releaseDate, modelCode, basicPayout, bonusSystem]
  - url: https://news.p-world.co.jp/articles/18117/yugitsushin
    sourceType: industry
    usedFor: [baseGamesPer50Coins, payoutRate, bonusProbabilities, basicPayout, releaseDate]
  - url: https://hazuse.com/machine/pachislot/0S1386/
    sourceType: old-database
    usedFor: [modelCode, inspectionCode, generation, releaseDate, payoutRate, bonusProbabilities, baseGamesPer50Coins, normalCeiling]
  - url: https://p.hisshobon.jp/machine/3792/1/85421
    sourceType: analysis-high
    usedFor: [normalCeiling, settingChangeBetLamp, powerCycleBetLamp, reelGakkun, bgmResetResearchStatus]
  - url: https://www.nankaikoya.jp/hanahana-houou-tensho/
    sourceType: retrospective-analysis
    usedFor: [baseGamesPer50Coins, basicPayout, bonusProbabilities, payoutRate]
  - url: https://ichikatsu.com/newslot2022/
    sourceType: analysis-calendar
    usedFor: [releaseDate, boundaryAudit]

unverifiedAfterResearch:
  - "設定変更/据え置き/純電源OFF→ON時のBGM変化条件に関わる内部履歴の保持・初期化。必勝本の当時解析でも『現在調査中』。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新main No.1463の次として、2022-01-18〜01-23境界を新台カレンダーで再監査後、1/24群先頭を登録。
- 25φ `Sハナハナホウオウ～天翔～LX / 0S1386` と30φ `Sハナハナホウオウ～天翔～EX-30 / 0S1174` は別型式・別検定番号。同時導入で公開スペックは同一だが、全機種方針により独立レコード化する。
- 性能コアは設定1〜6、機械割97〜109%、BIG 1/297→1/236、REG 1/496→1/337、約42G/50枚、BIG最大240枚、REG最大120枚。公式/業界/旧DB/解析で照合。
- 天井非搭載。AT/ART/CZ・ゲーム数天井・有利区間進行は本機の朝一物差しでは非該当。
- 設定変更・電源OFF→ONともBETランプは引継ぎ、リールガックンはなし。BGM変化条件の内部履歴だけは当時資料でも調査中のためUNVERIFIED_AFTER_RESEARCH。
