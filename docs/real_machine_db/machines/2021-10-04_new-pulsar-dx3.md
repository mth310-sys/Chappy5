# ニューパルサーDX3 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1437
canonicalKey: 2021-10-04_new-pulsar-dx3
machineName: ニューパルサーDX3
manufacturer: 山佐ネクスト
modelCode: SニューパルサーDX-VYTDD
inspectionCode: 0S1757
releaseDate: 2021-10-04
generation: 6号機
systemType: ノーマル / 純ボーナス / 完全告知
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_APPLICABILITY_CORE_WITH_UNVERIFIED_DISPLAY_RESET_DETAILS
confidence: HIGH_CORE_MEDIUM_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 6]
  payoutRatePct: [97.4, 98.4, 100.3, 105.0, 108.3]
  bonusBySetting:
    big: ["1/318.1", "1/315.1", "1/306.2", "1/290.0", "1/273.1"]
    reg: ["1/356.2", "1/348.6", "1/337.8", "1/292.6", "1/273.1"]
    combined: ["1/168.0", "1/165.5", "1/160.6", "1/145.6", "1/136.5"]
  baseGamesPer50Coins: "約43G/50枚（設定1）"
  netIncrease: "NOT_APPLICABLE（純ボーナス機。AT/ART純増の単一指標なし）"
  basicPayout: "BIG最大259枚 / REG固定104枚"
  normalCeiling: "NOT_APPLICABLE / 天井非搭載"
  notes:
    - "設定5非搭載の5段階設定。"
    - "ゲコゲコランプによる完全告知。ボーナス優先制御。"
    - "天井・ゾーン非搭載で、通常時に天国/高確などの出玉モードは確認されない。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE。ゲーム数天井非搭載のため、設定変更で失う天井進行はない。"
    modeState: "NOT_APPLICABLE_TO_PAYOUT_MODE。AT/ART型の内部モード・高確状態・周期状態を持つ機種ではない。ボーナス抽選は各ゲームの成立役/単独成立に基づく純ボーナス型。"
    advantageousSection: "NOT_APPLICABLE。純ボーナスノーマル機のため、朝一狙いに使う有利区間進行/リセット契約は対象外。"
    morningStart: "リセット固有の短縮天井・専用モード・CZ/AT優遇はなし。後年整理資料でも『リセット恩恵は特になし』。"
    benefit: "NONE_CONFIRMED。設定変更専用の朝一恩恵は確認されない。"
    disadvantage: "NONE_CONFIRMED。前日天井/モード進行を消すタイプではないため、出玉面の主要な設定変更不利要素は確認されない。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "NOT_APPLICABLE_TO_PAYOUT_MODE。引き継ぐべきAT/ARTモード・周期状態は確認されない。"
    advantageousSection: "NOT_APPLICABLE。"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "出玉に関わるAT/ARTモード・周期状態はNOT_APPLICABLE。BGM変化等の演出条件が設定変更/電源OFF→ONでどう扱われるかは当時解析でも『調査中』で、十分な再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE。"
  gameCounterReset: "INTERNAL_CEILING_COUNTER_NOT_APPLICABLE。データ表示器等の外部カウンタ挙動はホール設備依存でDB対象外。機種固有の演出/BGM履歴の設定変更・純電断時処理はUNVERIFIED_AFTER_RESEARCH。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE"
    ceilingValue: "天井非搭載"
    note: "通常時から天井が存在しないため、設定変更専用短縮天井も存在しない。"
  modeAfterReset:
    behavior: "NOT_APPLICABLE_TO_PAYOUT_MODE。朝一専用モード/天国/周期テーブルなし。"
    resetSpecificDistribution: "NOT_APPLICABLE / NO_PUBLIC_RESET_SPECIFIC_MODE_TABLE"
  stateAfterReset: "NOT_APPLICABLE_TO_PAYOUT_STATE。AT/ART系の高確・CZ状態等はなし。演出/BGM履歴の保持・初期化詳細のみUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "NOT_APPLICABLE。"
  resetBenefits:
    - "NONE_CONFIRMED。天井・CZ・AT・モード優遇を利用する朝一狙い要素は確認されない。"
  resetPenalties:
    - "NONE_CONFIRMED。"
  resetDetection:
    advantageousSectionLamp: "NOT_APPLICABLE。"
    stageBehavior: "液晶ステージ型の変更判別要素なし。ゲコゲコランプ/告知はボーナス告知用途で、設定変更判別用の朝一契約は確認できず。"
    reelBehavior: "本機固有のガックン発生条件・設定変更時の再始動挙動は、機種名・型式名・『ガックン』『設定変更』『朝一』『電源OFF/ON』で再探索したが固定できずUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    normalCeilingGames: "NOT_APPLICABLE"
    resetCeilingGames: "NOT_APPLICABLE"
    resetSpecificBenefitRate: "NO_PUBLIC_RESET_SPECIFIC_RATE_FOUND_AFTER_RESEARCH"
    morningHitRate: "NOT_RESET_SPECIFIC。通常ボーナス確率そのもの以外に、設定変更専用の朝一当選率は確認されない。"

sources:
  - url: https://yugi-nippon.com/pachinko-new-machine/post-44739/
    sourceType: contemporary-industry
    usedFor: [manufacturer, modelCode, announcement, performanceCore]
  - url: https://p-bomb.co.jp/industry/new-machine/1519/
    sourceType: contemporary-industry
    usedFor: [manufacturer, releaseWindow, bonusProbabilities]
  - url: https://www.nikkansports.com/amusement/pachislot/news/202107200000604.html
    sourceType: contemporary-industry
    usedFor: [manufacturer, productAnnouncement, bonusPayout]
  - url: https://hazuse.com/machine/pachislot/0S1757/
    sourceType: old-database-analysis
    usedFor: [modelCode, inspectionCode, releaseDate, payoutRate, bonusProbabilities]
  - url: https://opt.p-world.co.jp/machine/database/9439
    sourceType: old-database
    usedFor: [machineIdentity, releaseEra]
  - url: https://1geki.jp/slot/s_newpal_dx3/
    sourceType: analysis-high
    usedFor: [bonusPayout, bonusProbabilities, systemType]
  - url: https://chonborista.com/slot/yamasa-slot/145987/
    sourceType: analysis-high
    usedFor: [payoutRates, bonusProbabilities, baseGamesPer50, ceilingAbsent, releaseDate]
  - url: https://ichikatsu.com/newpulsardx3/
    sourceType: contemporary-analysis
    usedFor: [ceilingAbsent, zoneAbsent, systemType, bonusPayout]
  - url: https://p.hisshobon.jp/machine/3692/1/83152
    sourceType: old-analysis-database
    usedFor: [ceilingAbsent, bonusPriorityControl, settingChangePowerCycleUnknownBgmCondition]
  - url: https://pachisuro100.com/reset/
    sourceType: retrospective-analysis
    usedFor: [resetBenefitNone]

unverifiedAfterResearch:
  - "本機固有のガックン発生条件・発生率。機種名/正式型式と『ガックン』『リール始動』『設定変更判別』『朝一』を組み合わせて再探索したが固定できず。"
  - "設定変更/純電源OFF→ONでのBGM変化条件・演出履歴の保持/初期化。当時の必勝本でも双方『現在調査中』で、後年資料も含めて固定できず。"
  - "設定変更専用の朝一当選率・専用ボーナス抽選。純ボーナス機の通常確率以外に公開固定値を確認できず。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1436「SLOTタブー・タトゥー」を確認し、handoff指定の次機として追加。
- 正式型式 `SニューパルサーDX-VYTDD` は遊技日本・HAZUSE・後年設置店表記で一致。検定番号 `0S1757` はHAZUSEで確認。
- 設定1/2/3/4/6のBIG・REG・合算・機械割は遊技日本、P-BOMB、1geki、ちょんぼりすた、HAZUSEで一致。
- 約43G/50枚（設定1）、BIG最大259枚、REG104枚は複数解析・業界資料で一致。
- 天井非搭載はイチカツ、ちょんぼりすた、必勝本で一致。
- resetBehaviorは純ボーナス機として、AT/ART機の天井・モード・状態・有利区間を誤って付与しないことを優先。必勝本は設定変更/電源OFF→ON欄でBGM変化条件を『現在調査中』としており、演出履歴だけはUNVERIFIED_AFTER_RESEARCHに残した。
