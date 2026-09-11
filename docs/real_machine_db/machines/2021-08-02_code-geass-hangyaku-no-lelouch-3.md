# パチスロコードギアス 反逆のルルーシュ3 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1426
canonicalKey: 2021-08-02_code-geass-hangyaku-no-lelouch-3
machineName: パチスロコードギアス 反逆のルルーシュ3
manufacturer: 銀座
brandContext: Sammy
modelCode: Sコードギアス反逆のルルーシュ3KZ
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2021-08-02
machineType: 6.1号機 A+AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.9, 98.9, 101.5, 106.3, 109.5, 112.1]
  atInitialProbability: ["1/594.0", "1/565.9", "1/517.8", "1/437.0", "1/383.1", "1/322.0"]
  normalBonusProbability: ["1/250.7", "1/247.4", "1/242.1", "1/238.5", "1/230.7", "1/222.1"]
  atBonusProbability: ["1/199.0", "1/196.7", "1/193.1", "1/191.4", "1/186.1", "1/178.8"]
  baseGamesPer50Coins: "約36.2G/50枚"
  netIncrease: "AT 約2.0枚/G"
  basicPayout: "HYPER BIG 約150枚 / BIG 約115枚 / REG 約50枚"
  atBasicPerformance: "AT『BLACK REBELLION』は1セット40G+α、セット継続型。"
  normalCeiling: "有利区間移行後、通常時500G+αで成功期待度が高いCZ『戦略戦』に当選。+αは主に有利区間移行までの2～3G相当。CZ/CZ前兆中到達時は終了後に発動。"
  ceilingCzSuccessRateSetting1: "45.0%（天井用戦略戦・1geki自社調査）"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。設定変更で有利区間をリセットし、新規有利区間移行後500G+αの天井カウントを開始。"
    modeState: "内部状態は再抽選。新規有利区間移行時は必ず高確からスタートする公開解析あり。RT状態については設定変更時の直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "RESET / 非有利区間を経由して新規有利区間へ移行。"
    morningStart: "実戦上は『夕方・自宅』ステージ開始報告あり。ただし解析確定契約ではないためEMPIRICAL扱い。"
    benefit: "新規有利区間移行時は高確スタート。天井は500G+αの戦略戦CZ。設定変更専用の天井短縮や専用AT/CZ当選率は確認できず。"
    disadvantage: "RESET_SPECIFIC_DISADVANTAGE_NONE_CONFIRMED_AFTER_RESEARCH"
  unchanged:
    gameCountCeiling: "CARRY_OVER。設定変更を伴わない据え置きは内部天井ゲーム数を引き継ぐ。"
    modeState: "内部状態・RT状態を引き継ぐとする朝一解析資料あり。"
    advantageousSection: "CARRY_OVER（進行中の有利区間を維持）"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER"
    modeState: "内部状態・RT状態を引き継ぐ。"
    advantageousSection: "CARRY_OVER"
  ceilingAfterReset:
    resetSpecificShortening: "NONE_CONFIRMED。設定変更後も新規有利区間の通常天井500G+αを使用。"
    ceilingValue: "500G+α → 天井用CZ『戦略戦』"
  modeAfterReset:
    behavior: "天井ゲーム数を変える独立モードの設定変更専用振り分けは確認できず。"
    resetSpecificDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"
  stateAfterReset: "新規有利区間移行時は必ず高確からスタート。設定変更で内部状態は再抽選。"
  advantageousSectionReset: "設定変更時RESET。通常運用上もAT終了時、天井CZ失敗時、C.C.ゾーン終了時、ボーナス後CZ非当選時などでリセットする解析あり。"
  resetBenefits:
    - "新規有利区間移行時は必ず高確スタート。"
    - "500G+α到達時は通常より成功期待度が高い天井用『戦略戦CZ』へ。当該CZの成功期待度は設定1で45.0%とする自社調査値あり。"
  resetPenalties:
    - "公開された設定変更専用不利要素は確認できず。"
  resetDetection:
    advantageousSectionLamp: "設定変更時は消灯。ただし本機は通常時に有利区間ランプが消灯しているタイプのため、朝一の消灯だけでは設定変更判別不可。AT中など点灯状態を跨いだ据え置きでは材料になり得るが、通常状態では弱い。"
    morningStage: "設定変更後は実戦上『夕方・自宅』開始報告あり。確定判別には使用しない。"
    machineSpecificGakkun: "UNVERIFIED_AFTER_RESEARCH"
  numericResetData:
    resetCeiling: "500G+α（新規有利区間移行後）"
    ceilingCzSuccessRateSetting1: "45.0%（1geki自社調査）"
    advantageousSectionStartState: "高確スタート確定（有利区間移行時共通）"
    resetSpecificModeDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"
    resetSpecificInitialHitRate: "NONE_CONFIRMED_AFTER_RESEARCH"

sources:
  - url: https://web-greenbelt.jp/post-49418/
    sourceType: contemporary-industry
    usedFor: [releaseDate, manufacturerContext, systemType, atInitialProbability, netIncrease, baseGamesPer50Coins, atBasicPerformance]
  - url: https://p-kn.com/slot/3617/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, atInitialProbability]
  - url: https://1geki.jp/slot/s_codegeass3/
    sourceType: analysis-high
    usedFor: [payoutRate, atInitialProbability, basicPayout, atBasicPerformance, netIncrease]
  - url: https://1geki.jp/slot/s_codegeass3/3/
    sourceType: analysis-high
    usedFor: [ceiling, advantageousSectionResetTiming, ceilingCzSuccessRateSetting1]
  - url: https://1geki.jp/slot/s_codegeass3/40/
    sourceType: analysis-high
    usedFor: [advantageousSectionStartHighState]
  - url: https://slot-seven.com/codegiass3-tenzyou/
    sourceType: contemporary-analysis-secondary
    usedFor: [settingChangeCeilingReset, powerCycleCarryOver, internalStateResetCarryOver, rtCarryOver, advantageousSectionLamp, morningStage]
  - url: https://ichikatsu.com/codegeass3/
    sourceType: contemporary-analysis
    usedFor: [ceiling, payoutRate, bonusProbabilities, atInitialProbability, releaseDate]
  - url: https://pachinko-curation.com/1161/
    sourceType: contemporary-industry-secondary
    usedFor: [modelCode, manufacturerGinzaContext, systemType, payoutRate, atInitialProbability, baseGamesPer50Coins, basicPayout, ceiling]
  - url: https://p-media.info/post-26564/
    sourceType: contemporary-industry
    usedFor: [modelCode, manufacturerGinzaContext, officialAnnouncementContext]

unverifiedAfterResearch:
  - "検定番号。型式『Sコードギアス反逆のルルーシュ3KZ』と銀座名義の検定通過は複数資料で確認したが、本調査で検定番号そのものを公的/高信頼資料から固定できず。"
  - "設定変更時のRT状態の直接契約。純電断/据え置きは引継ぎ資料があるが、設定変更側は当時解析で『調査中』表記が残るため推定しない。"
  - "本機固有ガックン条件・発生率"
  - "設定変更専用モード振り分け率・専用AT/CZ初当たり率"

conflicts:
  - "メーカー表記は市場ブランドとしてSammy表記の資料が多い一方、検定通過・製造元は銀座名義。DBではmanufacturer=銀座、brandContext=Sammyとして分離。"
  - "有利区間ランプは設定変更で消灯するが、本機は通常時消灯型のため『朝一消灯=設定変更』とは扱わない。"
```

## QAメモ

- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、No.1425を確認し、2021-08-02群の次機No.1426として登録。
- 機械割、AT初当たり、通常時/AT中ボーナス確率、約36.2G/50枚、純増約2.0枚/G、ボーナス獲得枚数、40G+α/SETを複数系統で照合。
- 天井は『有利区間移行後500G+αでCZ戦略戦』。ボーナス/データランプ起点ではズレるため、有利区間起点として保存。
- 設定変更は有利区間・天井RESET、純電断/据え置きはCARRY_OVER。内部状態は設定変更で再抽選、電断/据え置きで引継ぎ。新規有利区間移行時は必ず高確スタートする解析を確認。
- 有利区間ランプは通常時消灯型のため、朝一消灯単独では変更判別不能。
- RTの設定変更時契約、本機固有ガックン、検定番号、設定変更専用モード振り分け/専用初当たり数値は検索語・資料系統を変えて再探索したが固定できずUNVERIFIED_AFTER_RESEARCH。
