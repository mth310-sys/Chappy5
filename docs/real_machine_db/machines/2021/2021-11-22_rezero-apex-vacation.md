# Re:ゼロから始める異世界生活 Apex Vacation — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1444
canonicalKey: 2021-11-22_rezero-apex-vacation
machineName: Re:ゼロから始める異世界生活 Apex Vacation
manufacturer: サボハニ（大都技研系）
modelCode: "S Re:ゼロから始める異世界生活 ApexV A6"
inspectionCode: 1S0202
releaseDate: 2021-11-22
generation: 6.1号機
systemType: A+RT / リアルボーナス / 技術介入 / パンク回避型RT
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_PARTIAL_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, エミリア, レム, ラム]
  payoutRatePct: [98.0, 99.8, 101.7, 105.4, 105.4, 105.4]
  bigCombinedBySetting: ["1/276.5", "1/273.1", "1/269.7", "1/256.0", "1/256.0", "1/256.0"]
  regBySetting: ["1/452.3", "1/363.8", "1/319.7", "1/287.4", "1/287.4", "1/287.4"]
  bonusCombinedBySetting: ["1/171.6", "1/156.0", "1/146.3", "1/135.4", "1/135.4", "1/135.4"]
  characterBigBySetting:
    setting1: {emilia: "1/829.6", rem: "1/829.6", ram: "1/829.6"}
    setting2: {emilia: "1/819.2", rem: "1/819.2", ram: "1/819.2"}
    setting3: {emilia: "1/809.1", rem: "1/809.1", ram: "1/809.1"}
    emilia: {emilia: "1/528.5", rem: "1/993.0", ram: "1/993.0"}
    rem: {emilia: "1/993.0", rem: "1/528.5", ram: "1/993.0"}
    ram: {emilia: "1/993.0", rem: "1/993.0", ram: "1/528.5"}
  initialHitBySetting: "ボーナス合算を主要初当たりとして採用: 1/171.6 / 1/156.0 / 1/146.3 / 1/135.4 / 1/135.4 / 1/135.4"
  baseGamesPer50Coins: "設定1 約39.7G、設定2 約40.0G、設定3 約40.5G、設定エミリア/レム/ラム 約41.8G。業界資料の概数は約40G/50枚。"
  netIncrease: "RT純増 約0.04枚/G（業界資料）。P-WORLDは現状維持程度と表記。"
  basicPayout: "エミリアBB最大251枚 / レムBB最大219枚＋30G RT / ラムBB最大175枚＋5G CZ / REG最大109枚。ラムBB後CZ成功時などは次回ボーナスまでRT『ゼロからばかんすComplete』。"
  normalCeiling: "非搭載"
  notes:
    - "設定4～6に相当する最高設定が『設定エミリア』『設定レム』『設定ラム』の3種類として存在し、機械割とボーナス合算は共通だが対応キャラBBが出現しやすい。"
    - "レムBB後は30G RT、ラムBB後は5G CZ、CZ成功で次回ボーナスまでの無限RTへ移行。REG後も1Gの契機で無限RTへ移行する場合がある。"
    - "RTはパンク役回避が必要な技術介入要素を持つ。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE。天井・ゲーム数ゾーン非搭載。"
    modeState: "通常時に天井モードやAT初当たり用モードを持つゲーム性ではなく物差し上NOT_APPLICABLE。ただし、設定変更時にRT/CZ内部状態や成立済みボーナス状態がどのように処理されるかを明示した本機固有資料は再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "A+RTのリアルボーナス主体機で、朝一客行動に関係する有利区間天井・ATモード仕様は確認されず物差し上NOT_APPLICABLE。"
    morningStart: "設定変更専用の朝一モード、短縮天井、初当たり優遇、RT付与等の公開仕様は確認できず。"
    benefit: "公開された設定変更専用の定量的恩恵は確認できず。"
    disadvantage: "公開された設定変更専用の定量的不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "通常時の天井/ATモード引継ぎはNOT_APPLICABLE。据え置き時のRT/CZ内部状態・成立済みボーナス状態の扱いは本機固有の直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE（A+RTリアルボーナス主体）。"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "純電源OFF→ONのみの場合のRT/CZ内部状態・成立済みボーナス状態の保持/初期化契約は、機種名・型式名・サボハニ/大都技研表記と電源OFF ON/電断/据え置き/朝一を組み替えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE。"
  gameCounterReset: "NOT_APPLICABLE。天井・規定G数ゾーン非搭載のため、前日ゲーム数引継ぎによる朝一狙い目なし。"
  ceilingAfterReset:
    resetSpecificShortening: "NO / NOT_APPLICABLE。天井自体を非搭載。"
    distributions: []
  modeAfterReset:
    behavior: "天井/ATモードはNOT_APPLICABLE。設定変更専用モード振り分けの公開値なし。"
    resetSpecificDistribution: null
  stateAfterReset:
    behavior: "設定変更時のRT/CZ内部状態の本機固有処理はUNVERIFIED_AFTER_RESEARCH。通常時の恒常的な高確/低確モードを朝一物差しとして扱う根拠は確認できず。"
    numeric: null
  advantageousSectionReset: "NOT_APPLICABLE。A+RTリアルボーナス主体で、朝一の有利区間リセット狙いに相当する公開仕様なし。"
  resetBenefits:
    - "公開された設定変更専用の天井短縮・初当たり優遇・専用モード・定量恩恵は確認できず。"
  resetPenalties:
    - "公開された設定変更専用の定量的不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更ガックン条件・発生率は、機種名/型式/サボハニ/大都技研/リゼロAと設定変更・リセット・朝一・据え置き・ガックン・リール始動を組み替えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "AT機の有利区間ランプによる設定変更判別に相当する公開仕様は確認できず、物差し上NOT_APPLICABLE。"
    other: "設定変更専用の初期出目・液晶表示・RT表示による確定判別条件は確認できず。"
  numericResetData:
    resetSpecificPublishedNumericData: null
    note: "天井非搭載A+RT機で、設定変更専用の朝一当選率・天井短縮値・モード振り分け等の比較可能な公開数値は確認できなかった。"

sources:
  - url: https://news.p-world.co.jp/articles/18150/nippon
    sourceType: contemporary-industry
    usedFor: [manufacturer, modelCode, productAnnouncement, systemType]
  - url: https://www.pidea.jp/articles/1635729578
    sourceType: contemporary-industry
    usedFor: [manufacturer, releaseTiming, payoutRateBySetting, bonusRates, baseGamesPer50, rtNetIncrease, basicPayout, systemType]
  - url: https://web-greenbelt.jp/post-52159/
    sourceType: contemporary-industry
    usedFor: [manufacturer, deliveryTiming, bonusRange, basicPayout, systemType]
  - url: https://hazuse.com/machine/pachislot/1S0202/genre/201/
    sourceType: old-machine-database-analysis
    usedFor: [modelCode, inspectionCode, releaseDate, generation, payoutRateBySetting, basicPayout]
  - url: https://www.pachibee.jp/machines/index/221100000
    sourceType: contemporary-industry-analysis
    usedFor: [releaseDate, generation, systemType, basicPayout, rtStructure]
  - url: https://1geki.jp/slot/s_rezero_apex/
    sourceType: analysis
    usedFor: [releaseDate, payoutRateBySetting, bonusCombinedBySetting, basicPayout, systemType]
  - url: https://1geki.jp/slot/s_rezero_apex/4/
    sourceType: analysis
    usedFor: [baseGamesPer50BySetting]
  - url: https://www.p-world.co.jp/machine/database/9503
    sourceType: machine-database
    usedFor: [manufacturer, systemType, basicPayout, rtStructure, rtNetIncreaseCrossCheck]
  - url: https://ichikatsu.com/rezero-a/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, ceilingAbsent, payoutRateBySetting, bonusRates, baseGamesPer50]
  - url: https://www.slopachi-quest.com/article/rezeroatype-settei/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, generation, payoutRateBySetting, bonusRates, baseGamesPer50, rtNetIncreaseCrossCheck]

unverifiedAfterResearch:
  - "設定変更時のRT/CZ内部状態および成立済みボーナス状態の本機固有処理。"
  - "据え置き時のRT/CZ内部状態および成立済みボーナス状態の本機固有引継ぎ契約。"
  - "純電源OFF→ONのみの場合のRT/CZ内部状態および成立済みボーナス状態の保持/初期化契約。"
  - "本機固有の設定変更ガックン条件・発生率。"
  - "設定変更専用の初期出目・表示による確定判別条件。"

conflicts:
  - field: releaseTiming
    values: ["2021-11-21納品/導入開始予定とする業界資料", "2021-11-22ホール導入開始とする機種DB・攻略資料"]
    resolution: "日曜納品と翌月曜のホール稼働開始の差と解釈可能。DBのreleaseDateは複数機種DBで一致する2021-11-22をcanonicalとする。"
  - field: rtNetIncrease
    values: ["約0.04枚/G", "現状維持程度"]
    resolution: "定量値0.04枚/Gを比較用canonicalとし、P-WORLD等の『現状維持程度』は定性的な一致として保持。"
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1443「ハイハイシオサイ2」を確認し、handoff指定の次機として追加。
- 型式 `S Re:ゼロから始める異世界生活 ApexV A6`、検定番号 `1S0202`、サボハニ製、6.1号機A+RT、2021-11-22導入を業界資料・HAZUSE・パチビー等で照合。
- 性能コアは6種類の設定、機械割98.0～105.4%、BB合算/REG/ボーナス合算、設定別ベース約39.7～41.8G/50枚、4種ボーナス獲得枚数、RT構造を複数資料で照合。
- 天井・規定G数ゾーンは非搭載。設定変更専用の短縮天井・モード優遇・初当たり優遇・公開朝一数値は確認できず、AT機の一般的なリセット契約を推測転記していない。
- 設定変更/据え置き/純電源OFF→ON時のRT/CZ内部状態・成立済みボーナス状態、本機固有ガックン/初期表示判別は、表記揺れ・型式・メーカー/シリーズ名と検索語を変えて再探索後も直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。
