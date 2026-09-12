# パチスロ戦国乙女 暁の関ヶ原-DARKNESS- — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1442
canonicalKey: 2021-11-08_sengoku-otome-akatsuki-no-sekigahara-darkness
machineName: パチスロ戦国乙女 暁の関ヶ原-DARKNESS-
manufacturer: オリンピア（平和）
modelCode: S戦国乙女暁の関ヶ原L7
inspectionCode: 1S1071
releaseDate: 2021-11-08
generation: 6.2号機
systemType: AT / ゲーム数上乗せ型 / CZ搭載
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_RESET_TABLES
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.5, 98.5, 99.9, 105.1, 108.0, 111.1]
  atInitialHitBySetting: ["1/385.5", "1/371.5", "1/352.2", "1/298.3", "1/272.5", "1/248.0"]
  baseGamesPer50Coins: "約37.3G/50枚"
  netIncrease: "約2.2枚/G"
  basicPayout: "AT『乙女RUSH』は初当たり時に必ず上乗せ特化ゾーンから開始し、獲得した初期ゲーム数を消化するゲーム数上乗せ型。"
  normalCeiling: "有利区間移行後、通常時最大634GでCZ『戦国モード』当選。通常時最大969G+前兆でAT当選。"
  notes:
    - "有利区間3000G対応の6.2号機。"
    - "CZ『戦国モード』のAT期待度は50%超。"
    - "AT終了時は必ず有利区間をリセットし、非有利区間へ移行する。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。通常天井をそのまま再開せず、設定変更専用の天井A/B/Cから再抽選。"
    modeState: "内部モードRESET / 内部状態RESET。設定変更時は内部状態・モードを再セットする。"
    advantageousSection: "RESET。有利区間ランプ消灯から開始。"
    morningStart: "天井A/B/Cを抽選し、さらにアルティメットモード移行抽選と黄7×3連AT高確が適用される。"
    benefit: "天井B/CならCZ・AT天井が短縮。アルティメットモード移行率5.1%。黄7×3連時AT当選率が全設定共通10.2%となる高確状態が存在。"
    disadvantage: "公開された設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。設定変更を伴わない据え置きは天井進行を引き継ぐ扱い。"
    modeState: "CARRY_OVER。内部モード・内部状態を引き継ぐ。"
    advantageousSection: "CARRY_OVER。通常時点灯中の有利区間を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。天井を引き継ぐ。"
    modeState: "CARRY_OVER。内部モード・内部状態を引き継ぐ。"
    advantageousSection: "CARRY_OVER。有利区間を引き継ぐ。"
  gameCounterReset: "設定変更=RESETし専用天井A/B/Cを再抽選。据え置き/純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "YES。設定変更後のみ天井A/B/Cを抽選。"
    distributions:
      - {name: "天井A", czCeiling: "634G", atCeiling: "969G+α", rate: "58.2%"}
      - {name: "天井B", czCeiling: "300G", atCeiling: "635G+α", rate: "40.2%"}
      - {name: "天井C", czCeiling: "100G", atCeiling: "435G+α", rate: "1.6%"}
  modeAfterReset:
    behavior: "内部モードを再セット。設定変更専用でアルティメットモード移行抽選あり。"
    resetSpecificDistribution: "アルティメットモード移行率5.1%（全設定共通）。"
    note: "通常の有利区間移行時アルティメットモード移行率0.4%とは別の設定変更専用値。"
  stateAfterReset:
    behavior: "内部状態を再セット。黄7×3連AT高確状態が設定変更後に適用される。"
    numeric: "黄7×3連時AT当選率10.2%（全設定共通）。"
  advantageousSectionReset: "YES。設定変更時RESET、据え置き/純電断はCARRY_OVER。AT終了時も必ず有利区間RESET。"
  resetBenefits:
    - "設定変更後の天井短縮抽選: B 40.2% / C 1.6%。"
    - "設定変更時アルティメットモード移行率5.1%（全設定共通）。"
    - "設定変更後の黄7×3連AT高確中は黄7×3連でAT当選率10.2%（全設定共通）。"
  resetPenalties:
    - "公開された設定変更専用の定量的不利要素なし。"
  resetDetection:
    advantageousSectionLamp: "通常時点灯型。クレジット右下ドットが朝一消灯なら設定変更濃厚、点灯なら据え置き濃厚。ただし前日AT終了直後の消灯閉店や店舗対策等の例外あり。"
    ceilingBehavior: "朝一100Gまたは300Gで契機不明のCZに入った場合は天井C/B選択の可能性が高く、設定変更推測材料になる。"
    reelBehavior: "本機固有のガックン条件・発生率は、機種名/型式/メーカーと設定変更・リセット・朝一・据え置き・電断・ガックンを組み替えて再探索したが直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    resetCeilingTable: "A 58.2%=CZ634G/AT969G+α; B 40.2%=CZ300G/AT635G+α; C 1.6%=CZ100G/AT435G+α"
    ultimateModeRate: "5.1%（設定変更時・全設定共通）"
    yellow7TripleAtRate: "10.2%（設定変更後の黄7×3連AT高確中・全設定共通）"
    morningHitRate: null
    note: "有利区間移行時の引き戻し50%、カシン超天国0.1%、通常のアルティメットモード0.4%は通常有利区間開始共通値であり、設定変更専用値と混同しない。"

sources:
  - url: https://news.p-world.co.jp/articles/17793/greenbelt
    sourceType: contemporary-industry
    usedFor: [manufacturer, releaseTiming, generation, systemType]
  - url: https://www.pidea.jp/articles/1631263875
    sourceType: contemporary-industry
    usedFor: [releaseDate, atInitialHitBySetting, netIncrease, gameSystem]
  - url: https://hazuse.com/machine/pachislot/1S1071/
    sourceType: old-machine-database-analysis
    usedFor: [modelCode, inspectionCode, releaseDate, generation, payoutRange, netIncrease]
  - url: https://hazuse.com/machine/pachislot/1S1071/genre/207/
    sourceType: old-machine-database-analysis
    usedFor: [settingChangeBehavior, powerCycleBehavior, carryOverBehavior, resetCeilingTable, ultimateModeResetRate, advantageousSectionLamp, resetDetection]
  - url: https://nana-press.com/kaiseki/machine/157/6385/
    sourceType: contemporary-analysis
    usedFor: [normalCeilings, resetCeilingTable]
  - url: https://nana-press.com/kaiseki/machine/157/6382/
    sourceType: contemporary-analysis
    usedFor: [advantageousSectionTransition, lampBehavior, commonAdvantageousSectionStartData]
  - url: https://nana-press.com/kaiseki/machine/157/6589/
    sourceType: analysis
    usedFor: [resetSpecificUltimateModeRate, commonUltimateModeRate]
  - url: https://chonborista.com/slot/orinpia-slot/150615/
    sourceType: analysis
    usedFor: [payoutRateBySetting, atInitialHitBySetting, baseGamesPer50, netIncrease, normalCeiling]
  - url: https://p-kn.com/slot/3669/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, payoutRateBySetting, atInitialHitBySetting]
  - url: https://ichikatsu.com/otome-darkness/
    sourceType: analysis
    usedFor: [baseGamesPer50, resetPowerCycleCeiling, resetCeilingTable]

unverifiedAfterResearch:
  - "本機固有のガックン発生条件・発生率。"
  - "設定変更専用の朝一○G以内AT当選率/期待度。天井A/B/C・アルティメット5.1%・黄7×3連10.2%は個別公開値として保存。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1441「パチスロGANTZ極 THE SURVIVAL GAME」を確認し、handoff指定の次機として追加。
- オリンピア製、型式 `S戦国乙女暁の関ヶ原L7`、検定番号 `1S1071`、2021-11-08導入をHAZUSE・当時業界資料で照合。
- 性能コアはAT初当たり1/385.5〜1/248.0、機械割97.5〜111.1%、約37.3G/50枚、純増約2.2枚/Gを複数資料で照合。
- resetBehaviorは設定変更/電源ON-OFFの4項目比較をHAZUSEで固定し、設定変更時の天井A/B/Cをなな徹でも照合。
- 設定変更専用の数値として、天井A/B/C=58.2/40.2/1.6%、アルティメットモード5.1%、黄7×3連AT高確中10.2%を保存。通常有利区間移行時の引き戻し50%やアルティメット0.4%とは区別した。
- 通常時有利区間ランプ点灯型のため、未対策なら朝一消灯=設定変更濃厚、点灯=据え置き濃厚。ただし前日消灯閉店・店舗対策を例外として明記。
