# パチスロ楽園追放 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1430
canonicalKey: 2021-09-06_rakuen-tsuiho
machineName: パチスロ楽園追放
manufacturer: サミー（製造元: ロデオ）
modelCode: S 楽園追放 FS
inspectionCode: 1S0218
releaseDate: 2021-09-06
generation: 6.1号機
systemType: AT（疑似ボーナス/CZ経由・ゲーム数上乗せ+継続バトル）
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_MORNING_NUMERIC_BENEFIT
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.9, 99.5, 100.9, 104.5, 108.1, 109.0]
  initialHitBySetting:
    combinedAtBigRd: ["1/164.5", "1/160.1", "1/147.9", "1/134.0", "1/121.3", "1/111.1"]
    fsDefenseAt: ["1/575.1", "1/542.4", "1/484.9", "1/412.1", "1/353.1", "1/310.0"]
    revoltToDevaCz: ["1/323.1", "1/308.1", "1/270.8", "1/226.7", "1/190.2", "1/165.4"]
  baseGamesPer50Coins: "約38G/50枚"
  netIncrease: "約4.0枚/G（AT・疑似BIG）"
  basicPayout: "通常時BIGは25G固定・約100枚。AT『FS防衛戦』は初期30G+α、設定1のAT突入時平均獲得約540枚。"
  normalCeiling: "有利区間移行後、通常時最大650G+αでBIG当選濃厚。"
  notes:
    - "通常運用では、どこから打ってもAT/BIG/RDのいずれかに100G以内で当選する期待度50%以上と案内される。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。通常天井650G+αを新規カウント。"
    modeState: "RESET。内部状態は高確スタート確定。"
    advantageousSection: "RESET。"
    morningStart: "有利区間開始時は高確確定。開始から30G間はCZ当選率が上昇する特殊抽選区間。"
    benefit: "高確スタート + 有利区間開始30G間のCZ優遇。設定変更後は100G以内にCZ以上へ当選する期待度60%以上との当時解析あり。"
    disadvantage: "有利区間開始後30G間はレア役からBIGに当選しないとされる。CZ/AT側が優遇される一方、BIG抽選には制約がある。"
  unchanged:
    gameCountCeiling: "CARRY_OVER"
    modeState: "CARRY_OVER"
    advantageousSection: "CARRY_OVER"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER"
    modeState: "CARRY_OVER"
    advantageousSection: "CARRY_OVER"
  gameCounterReset: "設定変更時RESET / 据え置き・純電断CARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "NO_PUBLIC_FIXED_SHORTENING_FOUND"
    ceilingValue: "通常天井650G+αを新規カウント。設定変更専用の固定短縮天井は確認できず。"
  modeAfterReset:
    behavior: "設定変更時は有利区間を新規開始し、高確スタート確定。"
    resetSpecificDistribution: "具体的な高確内訳/モード振り分け率はUNVERIFIED_AFTER_RESEARCH。"
  stateAfterReset: "設定変更時は高確確定 / 据え置き・純電断は内部状態CARRY_OVER。"
  advantageousSectionReset: "設定変更時RESET / 据え置き・純電断CARRY_OVER。通常時は有利区間ランプ点灯型。"
  resetBenefits:
    - "有利区間開始時は高確確定。"
    - "有利区間開始から30G間はCZ当選率アップ。"
    - "設定変更後100G以内のCZ以上当選期待度60%以上との当時解析あり。"
  resetPenalties:
    - "有利区間開始後30G間はレア役からBIGに当選しない。"
  resetDetection:
    advantageousSectionLamp: "朝一ランプ消灯＝設定変更濃厚、点灯＝据え置き濃厚。ただし前日消灯状態で閉店・店舗側対策などの例外あり。"
    gameCountBehavior: "据え置きは天井ゲーム数を引き継ぐため、前日ゲーム数との合算挙動が判別材料になり得る。単独確定材料にはしない。"
    machineSpecificGakkun: "UNVERIFIED_AFTER_RESEARCH"
  numericResetData:
    within100AfterReset: "CZ以上への当選期待度60%以上（当時解析。設定別内訳なし）。"
    advantageousSectionOpeningWindow: "30G"
    openingState: "高確確定"
    normalWithin100: "通常運用全体では初当たり100G以内50%以上。設定変更専用60%以上と混同しない。"

sources:
  - url: https://news.p-world.co.jp/articles/17688/nippon
    sourceType: contemporary-industry
    usedFor: [releaseDate, manufacturer]
  - url: https://hazuse.com/machine/pachislot/1S0218/
    sourceType: analysis-high
    usedFor: [modelCode, inspectionCode, releaseDate, generation, payoutRate, initialHit, baseGamesPer50Coins, ceiling, settingChangeReset, powerCycleCarryOver, highStateAfterReset, advantageousSection]
  - url: https://p-kn.com/slot/3636/
    sourceType: contemporary-analysis-high
    usedFor: [manufacturer, manufacturerFactory, releaseDate, initialHit, baseGamesPer50Coins, netIncrease, averageAtPayout]
  - url: https://nana-press.com/kaiseki/machine/146/4853/
    sourceType: analysis-high
    usedFor: [payoutRate, initialHit, czRate]
  - url: https://nana-press.com/kaiseki/machine/146/4932/
    sourceType: analysis-high
    usedFor: [settingChangeReset, unchangedCarryOver, highStateAfterReset, opening30GCzBoost, resetPenalty]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/190/kh02-1.php
    sourceType: contemporary-analysis-high
    usedFor: [payoutRate, initialHit, czRate]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/190/bn01.php
    sourceType: contemporary-analysis-high
    usedFor: [bigGames, bigPayout, netIncrease]
  - url: https://1geki.jp/slot/s_rakuentsuiho/
    sourceType: analysis-high
    usedFor: [payoutRate, initialHit, netIncrease, atInitialGames, averageAtPayout]
  - url: https://1geki.jp/slot/s_rakuentsuiho/6/
    sourceType: analysis-high
    usedFor: [advantageousSectionLamp, resetDetection, opening30GCzBoost]
  - url: https://chonborista.com/slot/sammy-slot/144802/
    sourceType: contemporary-analysis
    usedFor: [ceiling, settingChangeReset, powerCycleCarryOver, highStateAfterReset, within100AfterReset]

unverifiedAfterResearch:
  - "本機固有の設定変更時ガックン条件・発生率。"
  - "設定変更時の高確内部振り分け/具体的モード振り分け率。"
  - "設定変更後100G以内60%以上の設定別内訳および厳密な母集団。"
  - "設定変更専用の固定短縮天井は確認できず。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1429を確認し、指定キューの次機として追加。
- 型式/検定番号はHAZUSE、導入日は業界記事・複数解析で照合。性能値はパチマガスロマガ、なな徹、HAZUSE、一撃、K-Navi系でクロスチェック。
- resetBehaviorはHAZUSE、なな徹、一撃、ちょんぼりすたを横断。設定変更時の天井/有利区間RESET、純電断CARRY_OVER、高確確定、開始30GのCZ優遇は複数系統で整合。
- 朝一数値は『通常時どこからでも100G以内50%以上』と『設定変更後100G以内60%以上』を別定義として保存した。
- ガックンおよび設定変更専用の高確内訳は、機種名・型式・サミー/ロデオ・リセット/朝一/ガックン等へ検索語を変更しても直接値を固定できず、推測していない。
