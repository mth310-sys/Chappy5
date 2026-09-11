# パチスロ鉄拳4デビルVer. — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1418
canonicalKey: 2021-06-07_tekken4-devil-ver
machineName: パチスロ鉄拳4デビルVer.
manufacturer: 山佐ネクスト
makerFamily: 山佐系
modelCode: S鉄拳4デビルバージョンTCD
inspectionCode: 0S1475
releaseDate: 2021-06-07
machineType: 6.1号機 AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_RESET_ZONE_BENEFIT
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.5, 98.6, 100.1, 102.3, 105.1, 110.0]
  atInitial:
    label: AT「デビルラッシュ」初当たり
    values: ["1/1877.0", "1/1642.1", "1/1457.7", "1/1256.2", "1/1008.7", "1/903.2"]
  baseGamesPer50Coins: "約50G"
  at:
    name: デビルラッシュ
    netIncrease: "約2.7枚/G"
    note: "セット継続型AT。上位契機・フリーズ等の完全内部抽選再現は物差しDB対象外。"
  normalCeiling:
    games: "最大756G+α"
    reward: "デビルゾーン経由のAT当選契機"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: RESET
    modeState: RESET_OR_RESELECT
    advantageousSection: RESET
    morningStart: "非有利区間を経て有利区間へ移行。設定変更時は朝一デビルゾーン抽選が行われる。"
    benefit: "設定変更時は朝一デビルゾーン移行抽選が存在し、通常時より早いAT契機になり得る。"
    disadvantage: "朝一デビルゾーン非当選時にATを保証するものではない。"
  unchanged:
    gameCountCeiling: CARRY_OVER
    modeState: CARRY_OVER
    advantageousSection: CARRY_OVER
    note: "据え置き時は前日の有利区間・天井進行を基本的に引き継ぐ扱い。"
  powerOffOn:
    gameCountCeiling: CARRY_OVER
    modeState: CARRY_OVER
    advantageousSection: CARRY_OVER
    note: "設定変更を伴わない純電源OFF→ONは据え置きとして扱う。"
  morningNumbers:
    resetDevilZone:
      note: "設定変更時の朝一デビルゾーン移行抽選が公開解析で確認される。資料間で表現差があるため、固定当選率を本レコードではcanonical化しない。"
  changeDetection:
    advantageousLamp: "朝一の有利区間ランプ状態は変更推測材料。ただし前日終了状態・ホール対策を含むため単独断定不可。"
    machineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH
  qaNotes:
    - "通常天井756G+αと設定変更時の朝一デビルゾーン恩恵を分離して保存。"
    - "詳細な内部抽選・フリーズ経路は実機完全再現領域として収集対象外。"

sources:
  - url: https://p-town.dmm.com/machines/3883
    sourceType: industry-analysis
    usedFor: [releaseDate, performanceCore, ceiling, reset]
  - url: https://nana-press.com/kaiseki/machine/177/
    sourceType: industry-analysis
    usedFor: [performanceCore, reset, advantageousSection]
  - url: https://1geki.jp/slot/s_tekken4_devil/
    sourceType: contemporary-analysis
    usedFor: [performanceCore, reset, morningBehavior]
  - url: https://pachiseven.jp/machines/6267
    sourceType: industry-db
    usedFor: [releaseDate, modelIdentity]

conflicts:
  - field: resetMorningNumericRate
    status: NOT_CANONICALIZED
    note: "朝一デビルゾーンの公開数値は資料の定義・対象状態表現に差があるため、存在と方向性のみ確定。"
```

## QAメモ

- 2026-09-12: 性能コアとv0.7 resetBehaviorを複数系統で再探索。
- 設定変更・据え置き・純電源OFF→ONを分離し、通常天井と朝一デビルゾーンを混同しない。
- 既存DB方針に従い、詳細内部抽選は収集対象外。
