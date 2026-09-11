# 新ハナビ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1421
canonicalKey: 2021-07-05_shin-hanabi
machineName: 新ハナビ
manufacturer: エレコ
brand: A PROJECT / アクロス系
modelCode: S／新ハナビR／HA
inspectionCode: 1S0226
releaseDate: 2021-07-05
machineType: 6.1号機 A+RT / リアルボーナス＋RT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_RT_STATE
confidence: HIGH_CORE_MEDIUM_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 5, 6]
  bonusProbability:
    big: ["1/277.7", "1/268.6", "1/256.0", "1/248.2"]
    reg: ["1/356.2", "1/331.0", "1/306.2", "1/280.1"]
    combined: ["1/156.0", "1/148.3", "1/139.4", "1/131.6"]
  payoutRatePctMarketAverage: [98.1, 99.9, 102.3, 104.6]
  payoutRatePctFullStrategy: [102.0, 104.0, 106.5, 109.0]
  baseGamesPer50Coins: "約44G/50枚"
  bigMaxPayout: "202枚"
  regMaxPayout: "112枚"
  rt:
    hanabiChallenge: "BIG後に必ず突入。最大20G、純増約0.3枚/G。JAC INハズシで延命可能。"
    hanabiGame: "花火チャレンジ中のJAC IN後に突入。20G、純増約0.6枚/G。"
  normalCeiling: "NONE（天井・ゾーン非搭載）"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: NOT_APPLICABLE_NO_CEILING
    modeState: "RT_STATE_RESET_TO_NORMAL"
    advantageousSection: "NOT_APPLICABLE_TO_PUBLIC_GAME_FLOW"
    morningStart: "設定変更時はRT状態が通常状態へ戻る。朝一専用のゲーム数短縮・モード優遇・初当たり優遇は確認されない。"
    benefit: "NONE_CONFIRMED_AFTER_RESEARCH"
    disadvantage: "前日RT中で閉店した場合、設定変更なら残RTを失う。通常時閉店なら実質的な朝一専用不利はNONE_CONFIRMED_AFTER_RESEARCH。"
  unchanged:
    gameCountCeiling: NOT_APPLICABLE_NO_CEILING
    modeState: "CARRY_OVER（電源OFF→ONを伴う据え置きでもRT状態継続）"
    advantageousSection: "NOT_APPLICABLE_TO_PUBLIC_GAME_FLOW"
  powerOffOn:
    gameCountCeiling: NOT_APPLICABLE_NO_CEILING
    modeState: "RT_STATE_CARRY_OVER"
    advantageousSection: "NOT_APPLICABLE_TO_PUBLIC_GAME_FLOW"
  morningNumbers:
    resetSpecificCeiling: "NONE"
    resetSpecificModeDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"
    resetSpecificHitRate: "NONE_CONFIRMED_AFTER_RESEARCH"
    publicResetNumericValues: "NO_PUBLIC_FIXED_RESET_SPECIFIC_NUMERIC_TABLE_FOUND_AFTER_RESEARCH"
  changeDetection:
    machineSpecificGakkun: "NO_GAKKUN_CONFIRMED; contemporary/later analysis states no first-game gakkun on setting change or power cycle"
    rtCarryover: "前日RT中閉店が客側から確定でき、朝一もRT継続なら据え置き材料。設定変更ではRT通常化。通常時閉店ではこの方法は使えない。"
    uniMemo: "設定変更でもデータが残るとする解析があり、単独では変更判別不可。"
    overall: "通常時閉店では外見上の設定変更判別は困難。"

sources:
  - url: https://hazuse.com/machine/pachislot/1S0226/genre/201/
    sourceType: analysis-high
    usedFor: [manufacturer, modelCode, inspectionCode, releaseDate, machineType, payoutRange, rtNetIncrease]
  - url: https://hazuse.com/machine/pachislot/1S0226/genre/203/
    sourceType: analysis-high
    usedFor: [noCeiling, bigMaxPayout, regMaxPayout, rtStructure, rtGames, rtNetIncrease]
  - url: https://news.p-world.co.jp/articles/17137/nippon
    sourceType: contemporary-industry
    usedFor: [releaseDate, manufacturer, modelCode, officialAnnouncement, fullStrategySetting1]
  - url: https://ichikatsu.com/shinhanabi/
    sourceType: contemporary-analysis
    usedFor: [bonusProbability, payoutRate, base, noCeiling, resetPowerComparison]
    note: "本文の導入日欄に2020-07-05という誤記があるため導入日は採用せず、2021-07-05を業界記事・HAZUSEで固定。"
  - url: https://www.nankaikoya.jp/shinhanabi-settei/
    sourceType: later-analysis
    usedFor: [bonusProbability, payoutRate, noCeiling, settingChangeRtReset, powerOffRtCarryover, gakkun, uniMemo]
  - url: https://slotters.jp/shinhanabi/
    sourceType: machine-db
    usedFor: [base, bigMaxPayout, regMaxPayout, payoutRange, rtStructure]

conflicts:
  - field: releaseDate
    status: RESOLVED_SOURCE_TYPO
    detail: "イチカツ導入日欄の2020-07-05は、当時業界記事・HAZUSE・複数DBの2021-07-05と矛盾。2021-07-05をcanonical採用。"
```

## QAメモ

- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、No.1420実レコードを再取得し、No.1421として登録。
- 型式 `S／新ハナビR／HA`、検定番号 `1S0226`、製造元エレコ、2021-07-05導入をHAZUSEと当時業界記事で照合。
- 設定は1/2/5/6。BIG・REG確率、市場平均出玉率、完全攻略時出玉率、約44G/50枚を複数解析で照合。
- BIG最大202枚、REG最大112枚。BIG後はRT「花火チャレンジ」最大20G→JAC IN後「花火GAME」20G。天井・ゾーンは非搭載。
- resetBehaviorはゲーム数天井やATモードではなくRT状態を主対象とした。設定変更でRTは通常状態へ、電源OFF→ONではRT状態を引き継ぐ。
- 設定変更・電源OFF→ONとも朝一1G目のガックンはしないとする解析を採用。ユニメモは設定変更でも残るため判別材料にはしない。
- 朝一専用の固定短縮天井、モード振り分け、初当たり率、その他数値付き恩恵は、公式/業界/当時解析/後年DBまで検索語・資料系統を変えて再探索したが確認できず `NO_PUBLIC_FIXED_RESET_SPECIFIC_NUMERIC_TABLE_FOUND_AFTER_RESEARCH`。
- 有利区間はA+RTの公開ゲームフロー比較項目として実用的なリセット契約を確認できないため、推測補完せず `NOT_APPLICABLE_TO_PUBLIC_GAME_FLOW` とした。
- 2021-07-05群は新ハナビ登録後も `パチスロ零` が未処理のためOPENを維持する。
