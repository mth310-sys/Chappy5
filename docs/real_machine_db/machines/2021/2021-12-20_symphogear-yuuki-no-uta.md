# パチスロ戦姫絶唱シンフォギア 勇気の歌 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1453
canonicalKey: 2021-12-20_symphogear-yuuki-no-uta
machineName: パチスロ戦姫絶唱シンフォギア 勇気の歌
manufacturer: SANKYO
modelCode: S戦姫絶唱シンフォギア 勇気の歌NAT G
inspectionCode: 1S1280
releaseDate: 2021-12-20
generation: "6.2号機"
systemType: AT / CZ経由 / セット継続型
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.5
    "2": 98.8
    "3": 100.3
    "4": 104.1
    "5": 108.5
    "6": 110.5
  initialHitBySetting:
    "1": "CZ 1/285 / AT 1/425"
    "2": "CZ 1/260 / AT 1/408"
    "3": "CZ 1/250 / AT 1/390"
    "4": "CZ 1/226 / AT 1/348"
    "5": "CZ 1/204 / AT 1/308"
    "6": "CZ 1/195 / AT 1/291"
  czBySetting:
    "1": "1/285"
    "2": "1/260"
    "3": "1/250"
    "4": "1/226"
    "5": "1/204"
    "6": "1/195"
  atBySetting:
    "1": "1/425"
    "2": "1/408"
    "3": "1/390"
    "4": "1/348"
    "5": "1/308"
    "6": "1/291"
  baseGamesPer50Coins: "約32.9G"
  netIncrease: "約2.8枚/G"
  basicPayout: "AT『V-SONG』1セット30G＋継続バトル / 継続率＋セットストック型 / 平均継続約5セット"
  normalCeiling: "通常時最大800G+αでCZ。到達CZのAT期待度約80%。通常Cは500G、天国は150G。"
  modeSpecificMinimumData:
    czMain: "GXバトル：AT期待度約65%"
    upperCz: "最終決戦：AT期待度約97%"
    advantageousSectionCeiling: "同一有利区間1499G消化後に当選したCZはAT濃厚（CZ当選時点が1499G以下の場合は対象外）"
    czFailureCeiling: "CZ4連続失敗後、5回目CZはATまたは絶唱濃厚。絶唱期待度約75%。"
  notes:
    - "SANKYO初の6.2号機。メーカー公式オンライン博物館でも純増約2.8枚/GのAT機として確認。"
    - "型式・検定番号・導入日はHAZUSE、性能値は複数解析および当時業界記事で照合。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "有利区間・ゲーム数天井・CZスルー回数などをRESET。"
    modeState: "内部モードRESET。有利区間移行時に通常A/B/C/天国を再抽選。開始はクリスの部屋。"
    advantageousSection: "RESET / 有利区間ランプ消灯。"
    morningStart: "必ずクリスの部屋から開始し、一直線ゲームへ。設定1では150G以内のCZまたはAT当選率が約43%。"
    benefit: "有利区間移行時は通常C約43%・天国約27%で、浅い天井モードが合計約70%。150G以内CZ/AT当選率約43%（設定1）。"
    disadvantage: "公開された設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "天井・有利区間G数・CZスルー回数を引き継ぐ。"
    modeState: "内部モードを引き継ぐ。"
    advantageousSection: "引き継ぐ。有利区間中ならランプ点灯を維持。"
  powerOffOn:
    gameCountCeiling: "引き継ぐ。"
    modeState: "内部モードを引き継ぐ。"
    advantageousSection: "引き継ぐ。"
    stage: "引き継ぐ。"
  gameCounterReset: "設定変更でRESET / 据え置き・純電源OFF→ONでCARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "固定のリセット専用短縮天井ではない。有利区間移行時モード再抽選により通常C=500G、天国=150Gが選ばれ得る。"
    distributions:
      - "有利区間移行時：通常A 約7% / 通常B 約23% / 通常C 約43% / 天国 約27%"
  modeAfterReset:
    behavior: "有利区間移行時に4モードを再抽選。"
    resetSpecificDistribution:
      normalA: "約7%"
      normalB: "約23%"
      normalC: "約43%"
      heaven: "約27%"
  stateAfterReset:
    behavior: "開始ステージはクリスの部屋。一直線ゲーム開始。その他の細かな内部状態抽選は物差し範囲外。"
    numeric: null
  advantageousSectionReset: "RESET_ON_SETTING_CHANGE / CARRY_OVER_ON_UNCHANGED_AND_POWER_CYCLE"
  resetBenefits:
    - "設定1で150G以内のCZまたはAT当選率 約43%。"
    - "有利区間移行時のモード振り分けは通常C約43%・天国約27%で、通常C天井500G・天国天井150G。"
    - "有利区間リセット後は機械割100%超とする解析記載あり（条件定義が粗いため参考扱い）。"
  resetPenalties:
    - "比較可能な設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有ガックン条件・発生率は高信頼の直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "有利区間ランプ点灯=据え置き濃厚、消灯=設定変更濃厚。ただし前日消灯終了や店舗対策は例外。"
    other: "設定変更後はクリスの部屋開始＋一直線ゲームが判別材料。メニューから有利区間G数・CZスルー回数を確認可能。"
  numericResetData:
    within150GamesCzOrAtSetting1: "約43%"
    modeDistributionAtAdvantageousSectionStart: "通常A 約7% / 通常B 約23% / 通常C 約43% / 天国 約27%"
    modeCeilings: "通常A 800G / 通常B 800G / 通常C 500G / 天国 150G"

sources:
  - url: https://www.sankyo-fever.jp/collection/926/
    sourceType: manufacturer-official
    usedFor: [releaseMonth, manufacturer, generation, systemType, netIncrease, czOverview]
  - url: https://news.p-world.co.jp/articles/18687/greenbelt
    sourceType: contemporary-industry
    usedFor: [releaseTiming, generation, netIncrease, atSetGames, systemType]
  - url: https://hazuse.com/machine/pachislot/1S1280/genre/201/
    sourceType: machine-database-analysis
    usedFor: [manufacturer, modelCode, inspectionCode, releaseDate, generation, payoutRate, netIncrease]
  - url: https://hazuse.com/machine/pachislot/1S1280/genre/207/
    sourceType: contemporary-analysis
    usedFor: [normalCeiling, advantageousSectionCeiling, czFailureCeiling, settingChange, powerOffOn, resetDetection]
  - url: https://hazuse.com/machine/pachislot/1S1280/genre/209/
    sourceType: contemporary-analysis
    usedFor: [modeStructure, modeDistribution, modeCeilings]
  - url: https://nana-press.com/kaiseki/machine/161/7184/
    sourceType: contemporary-analysis
    usedFor: [czBySetting, atBySetting, payoutRate]
  - url: https://nana-press.com/kaiseki/machine/161/7192/
    sourceType: analysis
    usedFor: [settingChange, unchanged, advantageousSection, morningStart, within150GamesCzOrAt]
  - url: https://nana-press.com/kaiseki/machine/161/7193/
    sourceType: analysis
    usedFor: [modeDistribution, modeCeilings]
  - url: https://chonborista.com/slot/sankyo-slot/153304/
    sourceType: analysis
    usedFor: [releaseDate, payoutRate, czBySetting, atBySetting, baseGamesPer50Coins, netIncrease, normalCeiling]

unverifiedAfterResearch:
  - "本機固有の設定変更ガックン条件・発生率"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新main README、Mission v0.7、旧INDEX、LATEST_HANDOFF、直前No.1452を確認して開始。
- SANKYO公式、当時業界記事、HAZUSE、なな徹、ちょんぼりすた等を横断。型式 `S戦姫絶唱シンフォギア 勇気の歌NAT G`、検定番号 `1S1280`、2021-12-20導入を固定。
- 設定別CZ/AT・機械割、約32.9G/50枚、純増約2.8枚/G、AT1セット30Gを複数資料で照合。
- resetBehaviorはHAZUSEの設定変更/電源ON・OFF表となな徹朝一解析で照合し、設定変更=有利区間/天井/内部モードRESET、純電源OFF→ON=引継ぎを固定。
- 有利区間移行時モード振り分けはHAZUSEとなな徹で一致（A7/B23/C43/天国27%）。設定1の150G以内CZ/AT約43%も複数解析で一致。
- ガックン条件のみ、機種名・型式・メーカー・リセット/設定変更/据え置き/電源ON OFF/ガックン等で再探索しても高信頼の直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。
