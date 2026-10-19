# パチスロ鉄拳4デビルVer. — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1418
canonicalKey: 2021-06-07_tekken4-devil-ver
machineName: パチスロ鉄拳4デビルVer.
manufacturer: セブンリーグ
makerFamily: 山佐系
modelCode: Sパチスロ鉄拳4デビルバージョンSLFF
inspectionCode: 0S1396
releaseDate: 2021-06-07
machineType: 6.1号機 AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_RESET_DEVIL_ZONE_AND_MODE_TABLE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.5, 98.6, 100.1, 102.3, 105.2, 110.0]
  judgmentBattleInitial: ["1/497.4", "1/481.7", "1/492.2", "1/479.2", "1/493.0", "1/476.1"]
  atInitial:
    label: AT「デビルラッシュ」初当たり
    values: ["1/1877.0", null, null, null, null, null]
    note: "公開解析で設定1のみ1/1877.0、設定2～6は調査中。推定補完しない。"
  baseGamesPer50Coins: "約50.6G（設定1）～51.3G（設定6）"
  at:
    name: デビルラッシュ
    netIncrease: "約2.7枚/G"
    expectedPayout: "JB経由約1600枚、フリーズ経由約2000枚"
  normalCeiling:
    games: "最大756G+α"
    reward: "CZ『ジャッジメントバトル』"
    modeCeilings: {通常A: "756G", 通常B: "556G", 通常C: "356G", 引き継ぎ: "482G", デビルゾーン準備: "200G"}

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: RESET
    modeState: RESET_OR_RESELECT
    advantageousSection: RESET
    morningStart: "有利区間リセット後の初回モードを再抽選。設定変更時の一部でデビルゾーンへ移行。"
    benefit: "設定変更時はJB当選ゲーム数が通常の有利区間移行時より300G台・500G台に寄る。さらに一部でデビルゾーンへ移行。"
    disadvantage: "デビルゾーン突入・AT当選とも保証ではない。"
  unchanged:
    gameCountCeiling: CARRY_OVER
    modeState: CARRY_OVER
    advantageousSection: CARRY_OVER
  powerOffOn:
    gameCountCeiling: CARRY_OVER
    modeState: CARRY_OVER
    advantageousSection: CARRY_OVER
    note: "設定変更を伴わない純電源OFF→ONは天井を引き継ぐ公開解析を確認。"
  morningNumbers:
    resetDevilZone:
      setting1: "7.5%"
      setting6: "9.4%"
      note: "HAZUSE公開値。中間設定の個別値は今回canonical化せず。"
    judgmentBattleGameZoneDistribution:
      settingChange: {"300G台": "約37.5%", "500G台": "約37.5%", "700G台": "約25%"}
      advantageousSectionStartExceptSettingChange: {"300G台": "約20%", "500G台": "約30%", "700G台": "約50%"}
      note: "設定変更時と設定変更以外の有利区間移行時を明示的に分離。"
  changeDetection:
    advantageousLamp: "朝一消灯=設定変更濃厚、点灯=据え置き濃厚。ただし前日終了状態やホール対策を考慮し単独断定不可。"
    machineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH

sources:
  - url: https://hazuse.com/machine/pachislot/0S1396/genre/201/
    sourceType: industry-db
    usedFor: [modelIdentity, inspectionCode, releaseDate, payoutRate, atNetIncrease]
  - url: https://hazuse.com/machine/pachislot/0S1396/genre/209/
    sourceType: industry-analysis
    usedFor: [resetDevilZone, devilZone]
  - url: https://pachiseven.jp/machines_v2/6308
    sourceType: industry-analysis
    usedFor: [performanceCore, base, ceiling, atExpectedPayout]
  - url: https://slot-seven.com/tekken4devilver-tenzyou/
    sourceType: analysis
    usedFor: [ceiling, modeCeilings, resetCarryover, advantageousLamp]
  - url: https://ichikatsu.com/tekken4devil/
    sourceType: analysis
    usedFor: [resetCarryover, advantageousLamp, ceiling]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/240/kh02-1.php
    sourceType: contemporary-analysis
    usedFor: [judgmentBattleInitial, atInitial, payoutRate]

conflicts:
  - field: payoutRate.setting5
    status: RESOLVED_CANONICAL_105_2
    note: "一部二次資料に105.5%表記あり。HAZUSE・パチマガスロマガ等の105.2%をcanonical採用。"
```

## QAメモ

- 2026-09-12: 性能コア＋v0.7 resetBehaviorを再探索。初稿の型式/検定番号を高信頼DB照合で `SLFF / 0S1396` に訂正。
- AT初当たりは設定1以外を推定補完せず、公開済みJB確率と分離。
- 設定変更時のデビルゾーン率（設定1 7.5%～設定6 9.4%）と、JB当選ゲーム数の朝一比較表を保存。
- 詳細内部抽選は実機完全再現領域として対象外。
