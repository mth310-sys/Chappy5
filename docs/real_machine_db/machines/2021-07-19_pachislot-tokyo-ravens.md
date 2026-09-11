# パチスロ東京レイヴンズ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1423
canonicalKey: 2021-07-19_pachislot-tokyo-ravens
machineName: パチスロ東京レイヴンズ
manufacturer: オーイズミ
modelCode: Sパチスロ東京レイヴンズJX
inspectionCode: 0S1755
releaseDate: 2021-07-19
machineType: 6.1号機 AT
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_PUBLIC_RESET_CORE_WITH_ADVANTAGEOUS_SECTION_TRANSITION_DATA
confidence: HIGH_CORE_MEDIUM_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  czProbability: ["1/149", "1/146", "1/142", "1/135", "1/127", "1/120"]
  atFirstHitProbability: ["1/649.4", "1/628.7", "1/595.0", "1/542.0", "1/492.7", "1/455.7"]
  payoutRatePct: [97.9, 98.9, 100.5, 103.0, 106.0, 108.8]
  baseGamesPer50Coins: "約43G/50枚"
  atNetIncrease: "約2.7枚/G"
  mainAT: "闇鴉（レイヴンズ）タイム。ストック継続型。ラウンドパートは1ラウンド8G、STパート20G。24ROUND到達で差枚数管理型のプレミアム闇鴉タイムへ移行。"
  premiumATExpectedPayout: "突入時の獲得期待枚数1600枚over（業界発表/解析）"
  normalCeiling: "有利区間移行後の通常時500G消化後、501～508Gは毎G約1/12でフリーズ抽選。非発生でも509GでAT当選。資料によって『508G天井』表記と『509GでAT』表記があるため定義差として保持。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET_EXPECTED_BUT_DIRECT_MACHINE_SPECIFIC_SETTING_CHANGE_TABLE_NOT_FOUND; 設定変更専用の天井表は確認できず"
    modeState: "有利区間移行時に通常モード1～5の移行抽選を行うことは公開済み。ただし設定変更専用のモード振り分けは未公開/未確認。"
    advantageousSection: "RESET_EXPECTED_FOR_SETTING_CHANGE; ただし今回取得できた本機専用資料では設定変更表を直接固定できず、断定資料待ち"
    morningStart: "設定変更専用の短縮天井・CZ/AT直撃保証・朝一専用モードは十分な再探索後も確認できず。"
    benefit: "RESET_SPECIFIC_BENEFIT_NONE_CONFIRMED_AFTER_RESEARCH"
    disadvantage: "RESET_SPECIFIC_DISADVANTAGE_NONE_CONFIRMED_AFTER_RESEARCH"
  unchanged:
    gameCountCeiling: "UNVERIFIED_AFTER_RESEARCH; 本機固有の据え置き時509G天井カウンタ引継ぎ契約を直接固定できず"
    modeState: "UNVERIFIED_AFTER_RESEARCH"
    advantageousSection: "UNVERIFIED_AFTER_RESEARCH; 通常遊技中の有利区間はCZ『陰陽チャンス』突入で必ずリセットされることは確認済み"
  powerOffOn:
    gameCountCeiling: UNVERIFIED_AFTER_RESEARCH
    modeState: UNVERIFIED_AFTER_RESEARCH
    advantageousSection: UNVERIFIED_AFTER_RESEARCH
    note: "純電源OFF→ONの本機固有直接契約は、据え置き一般論から補完しない。"
  advantageousSectionTransitions:
    onOnmyoChance: "CZ『陰陽チャンス』突入時に毎回有利区間RESET。メーカー説明会系業界記事・解析で一致。"
    onPremiumAtEnd: "プレミアム闇鴉タイム終了後は陰陽チャンスから開始するため、有利区間RESETを経てCZへ。"
  normalModes:
    count: 5
    timing: "有利区間移行時に通常モード1～5を抽選"
    effect: "陰陽ポイント初期値とナビ1枚役高確移行抽選に影響。上位モードほどCZへ近づきやすい。"
  morningNumbers:
    resetSpecificCeiling: "NONE_CONFIRMED_AFTER_RESEARCH"
    resetSpecificModeDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"
    commonAdvantageousSectionInitialPointTable: "通常モード別0～3pt初期値表あり（HAZUSE/1geki）。設定変更専用ではなく有利区間移行時共通のためreset専用値として混同しない。"
    normalCeilingFreezeWindow: "501～508Gは毎G約1/12でフリーズ抽選。非発生時509GでAT。設定変更専用ではない。"
  changeDetection:
    advantageousSectionLamp: "朝イチ・設定変更判別について主要解析資料は『調査中』。本機固有の確定的なランプ判別条件を固定しない。"
    machineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH
    overall: "設定変更/据え置きの客側確定判別要素は今回固定できず。"

sources:
  - url: https://hazuse.com/machine/pachislot/0S1755/
    sourceType: analysis-high
    usedFor: [modelCode, inspectionCode, releaseDate, manufacturer, payoutRate, atNetIncrease, ceiling, advantageousSectionTransitionModeData]
  - url: https://hazuse.com/machine/pachislot/0S1755/genre/201/
    sourceType: analysis-high
    usedFor: [payoutRate]
  - url: https://1geki.jp/slot/s_tokyoravens/
    sourceType: analysis-high
    usedFor: [releaseDate, czProbability, atFirstHitProbability, payoutRate, atNetIncrease, gameFlow, advantageousSectionResetOnCZ]
  - url: https://1geki.jp/slot/s_tokyoravens/4/
    sourceType: analysis-high
    usedFor: [baseGamesPer50Coins]
  - url: https://1geki.jp/slot/s_tokyoravens/45/
    sourceType: analysis-high
    usedFor: [normalModes, advantageousSectionInitialPointTable]
  - url: https://www.slopachi-quest.com/article/tokyo-ravens-tenjou/
    sourceType: contemporary-analysis
    usedFor: [ceiling, baseGamesPer50Coins, resetResearch]
  - url: https://pachiseven.jp/machines/6321/cutout/3
    sourceType: contemporary-analysis
    usedFor: [releaseDate, ceiling, resetResearch]
  - url: https://news.p-world.co.jp/articles/16829/yugitsushin
    sourceType: contemporary-industry
    usedFor: [releaseDate, atNetIncrease, gameFlow, advantageousSectionResetOnCZ, premiumATExpectedPayout, baseGamesPer50Coins]
  - url: https://news.p-world.co.jp/articles/16876/amusement
    sourceType: contemporary-industry
    usedFor: [atNetIncrease, gameFlow]
  - url: https://www.all7.jp/plans/index/2021/07
    sourceType: industry-calendar
    usedFor: [releaseDate, sameDateGroupAudit]
  - url: https://crankyseven.com/newmachine-info.htm
    sourceType: contemporary-calendar
    usedFor: [releaseDate, sameDateGroupAudit]

unverifiedAfterResearch:
  - "設定変更時の本機固有の天井G/内部状態/通常モードの専用処理表"
  - "据え置き時の天井G・通常モード・内部状態・有利区間の直接契約"
  - "純電源OFF→ON時の天井G・通常モード・内部状態・有利区間の直接契約"
  - "設定変更専用の短縮天井・CZ/AT直撃保証・モード振り分け"
  - "本機固有の朝一有利区間ランプ判別条件"
  - "本機固有ガックン条件・発生率"

conflicts:
  - "天井表現: HAZUSE/PachiSevenは508G天井表記、解析本文は500G消化後501～508Gで1/12フリーズ抽選、非発生時509GでAT。数値を平均化せず定義差として保持。"
```

## QAメモ

- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、No.1422「パチスロ零」を再取得し、handoff指定どおりNo.1423として登録。
- 型式 `Sパチスロ東京レイヴンズJX`、検定番号 `0S1755`、2021-07-19導入をHAZUSE、1geki、業界記事、導入カレンダーで照合。
- 設定別機械割97.9～108.8%、AT初当り1/649.4～1/455.7、約43G/50枚、純増約2.7枚/Gを複数系統で照合。
- 本機の特徴としてCZ「陰陽チャンス」突入時に必ず有利区間RESETすることを業界説明会記事と解析資料で一致確認。
- 一方、設定変更/据え置き/純電断そのものの3者比較表は十分な再探索でも直接固定できず、6.1号機一般論から埋めず `UNVERIFIED_AFTER_RESEARCH` を残した。
- 2021-07-19群はALL7と当時導入日一覧で本機のみを確認。別メーカー・PB・地域先行・延期/段階導入の追加ユニーク機は今回確認できず、群はCLOSED候補。
