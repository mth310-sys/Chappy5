# SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1424
canonicalKey: 2021-08-02_slot-madoka-magica-movie-beginnings-eternal
machineName: SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語
manufacturer: ミズホ
modelCode: S/劇場版まどか/KK
inspectionCode: 1S0068
releaseDate: 2021-08-02
machineType: 6.1号機 AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  atFirstHitProbability: ["1/269.4", "1/251.3", "1/241.9", "1/222.2", "1/205.5", "1/188.8"]
  payoutRatePct: [97.3, 99.8, 102.0, 104.1, 107.1, 110.0]
  baseGamesPer50Coins: "約39G/50枚（資料に約39.1G表記あり）"
  atNetIncrease: "約2.5枚/G"
  basicPayout: "AT『マギカラッシュ』初期差枚数100枚以上。BIGは30G、エピソードBONUSは50G。"
  normalCeiling: "有利区間移行後最大700G（解析上659G+前兆の表記あり）でAT。特殊モードは699G+前兆付近でエピソードBONUS濃厚とする解析あり。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET"
    modeState: "内部モード再抽選。内部状態はリセットとする解析表を確認。"
    advantageousSection: "RESET / 朝一有利区間ランプ消灯。通常時もランプ消灯型のため消灯のみでは変更判別不可。"
    morningStart: "学校ステージ開始（解析表）。設定変更専用の固定短縮天井は確認できず、通常の最大700G枠。"
    benefit: "RESET_SPECIFIC_FIXED_BENEFIT_NONE_CONFIRMED; 有利区間移行時に解除G数・特殊モード等を再抽選するが、設定変更専用の優遇表としては扱わない。"
    disadvantage: "RESET_SPECIFIC_DISADVANTAGE_NONE_CONFIRMED_AFTER_RESEARCH"
  unchanged:
    gameCountCeiling: "CARRY_OVER"
    modeState: "CARRY_OVER"
    advantageousSection: "CARRY_OVER"
    note: "据え置き（電源OFF→ONのみ）の解析表で天井・内部モード引継ぎ、有利区間ランプ引継ぎを確認。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER"
    modeState: "CARRY_OVER"
    advantageousSection: "CARRY_OVER"
    stage: "資料間で学校/調査中など表現差があり、変更判別材料にしない。"
  ceilingAfterReset:
    resetSpecificShortening: "NONE_CONFIRMED_AFTER_RESEARCH"
    normalMaximum: "最大700G（659G+前兆表記あり）"
  modeAfterReset:
    behavior: "RESELECT"
    resetSpecificDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"
    commonRule: "有利区間移行時に解除ゲーム数を決定し、特殊モード移行も抽選。これは設定変更専用振り分けではなく有利区間移行時共通。"
  stateAfterReset: "RESET（解析表）"
  advantageousSectionReset: "YES_ON_SETTING_CHANGE; AT終了時にも有利区間ランプ消灯。"
  resetBenefits:
    - "設定変更専用の天井短縮・AT直撃保証・特殊モード優遇率は十分な再探索後も固定できず。"
  resetPenalties:
    - "公開された設定変更専用不利要素は確認できず。"
  resetDetection:
    advantageousSectionLamp: "通常時が基本消灯型のため朝一消灯は判別不可。朝一で点灯していれば据え置き濃厚材料。"
    stage: "設定変更時は学校ステージ。ただしステージ単独の確定判別には使用しない。"
    machineSpecificGakkun: "UNVERIFIED_AFTER_RESEARCH"
  numericResetData:
    resetSpecificCeiling: "NONE_CONFIRMED_AFTER_RESEARCH"
    resetSpecificModeDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"
    resetSpecificHitRate: "NONE_CONFIRMED_AFTER_RESEARCH"
    commonNormalCeiling: "最大700G（解析上659G+前兆）"

sources:
  - url: https://www.p-world.co.jp/machine/database/9413
    sourceType: industry-database
    usedFor: [manufacturer, modelCode, inspectionCode, releaseDate, generation, atFirstHitProbability, payoutRate, atNetIncrease, basicPayout, ceiling, advantageousSectionModeBasics]
  - url: https://yugi-nippon.com/pachinko-new-machine/post-45013/
    sourceType: contemporary-industry
    usedFor: [releaseDate, manufacturer, modelCode]
  - url: https://news.p-world.co.jp/articles/17121/greenbelt
    sourceType: contemporary-industry
    usedFor: [releaseTiming, manufacturer, atNetIncrease, gameFlow]
  - url: https://web-greenbelt.jp/post-49389/
    sourceType: contemporary-industry
    usedFor: [releaseDate, manufacturer, atNetIncrease]
  - url: https://p-kn.com/slot/3620/
    sourceType: contemporary-analysis
    usedFor: [atFirstHitProbability, payoutRate, baseGamesPer50Coins]
  - url: https://nana-press.com/kaiseki/machine/140/4212/
    sourceType: analysis-high
    usedFor: [atFirstHitProbability, payoutRate]
  - url: https://slotjin.com/tenjoukitaichi/madokazenkouhen/
    sourceType: contemporary-analysis
    usedFor: [ceiling, settingChangeReset, unchangedCarryOver, modeResetCarryOver, advantageousSectionLamp, resetDetection]
  - url: https://slot-seven.com/madokamagica4-tenzyou/
    sourceType: contemporary-analysis
    usedFor: [ceiling, settingChangeReset, internalStateReset, morningStage, advantageousSectionLamp]
  - url: https://chonborista.com/slot/universal-slot/141931/
    sourceType: analysis-high
    usedFor: [ceiling, advantageousSectionTransition, normalModeGameCountBasics]
  - url: https://web-greenbelt.jp/post-47595/
    sourceType: contemporary-industry
    usedFor: [modelCode, manufacturer, inspectionPassContext]

unverifiedAfterResearch:
  - "設定変更専用の解除ゲーム数/特殊モード振り分け率"
  - "設定変更専用の短縮天井・AT直撃保証・朝一当選率"
  - "本機固有ガックン条件・発生率"

conflicts:
  - "設定1機械割: P-WORLD/K-Navi/なな徹等は97.3%で一致。一部二次資料に97.9%表記があるため平均化せず、97.3%を複数系統一致のcanonicalとし97.9%をCONFLICT_SECONDARY_TABLEとして保持。"
  - "天井表現: 700G、659G+前兆で最大700G、特殊モード699G+前兆など表現差。定義を混ぜず保持。"
```

## QAメモ

- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、No.1423を再取得し、正本handoffの次機としてNo.1424を登録。
- 2021-08-02導入、ミズホ製、型式 `S/劇場版まどか/KK`、検定番号 `1S0068` を業界記事・P-WORLDで照合。
- AT初当たり1/269.4～1/188.8、機械割97.3～110.0%、約39G/50枚、純増約2.5枚/G、初期100枚以上を複数系統で照合。
- resetBehaviorは設定変更で天井リセット・内部モード再抽選・内部状態リセット、据え置き/純電断で天井・内部モード・有利区間引継ぎを当時解析で確認。
- 通常時有利区間ランプ消灯型のため朝一消灯だけではリセット判別不可。点灯なら据え置き濃厚材料。
- 設定変更専用の固定短縮天井・専用モード振り分け・AT直撃保証・朝一当選率は検索語/型式/メーカー/シリーズを変えて再探索したが固定できず、一般論で補完していない。
