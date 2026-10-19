# マジカルハロウィン～Trick or Treat！～ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1433
canonicalKey: 2021-09-21_magical-halloween-trick-or-treat
machineName: マジカルハロウィン～Trick or Treat！～
manufacturer: コナミアミューズメント（製造元: ファイトクラブ）
modelCode: SマジカルハロウィンFP
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2021-09-21
generation: 6.2号機
systemType: A+ART
coreStatus: COMPLETE_CORE_WITH_BASE_GAMES_CONFLICT
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_INTERNAL_CZ_START
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.3, 98.4, 100.0, 103.2, 105.1, 107.0]
  initialHitBySetting:
    bonusCombined: ["1/169.8", "1/168.0", "1/166.3", "1/163.0", "1/161.4", "1/159.8"]
    art: ["1/370.0", "1/365.6", "1/353.5", "1/330.9", "1/303.8", "1/285.7"]
  baseGamesPer50Coins: "解析系では約33.2/33.3/33.4/33.6/33.8/34.1G（設定1〜6）。一方、導入時業界記事に設定1 32.2Gの記載がありCONFLICTとして保持。"
  netIncrease: "ART『カボチャンス』約1.0枚/G"
  basicPayout: "赤7BIG約203枚、青7BIG約175枚、異色BIG約154枚、REG約42枚。ARTは1セット30G+αのセット継続型。"
  normalCeiling: "通常時333G消化でCZ『詠唱チャレンジ』へ突入。"
  notes:
    - "6.2号機・有利区間3000G対応。MagicaLink Systemを搭載。"
    - "通常時は内部モード0〜3、高確/超高確、カボモード、結界モード等を持つ。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。333G天井を新規計数。"
    modeState: "RESETし、内部的にCZ『詠唱チャレンジ』状態から開始。学院ステージ表示。"
    advantageousSection: "RESET。朝一有利区間ランプは消灯。"
    morningStart: "内部CZスタート。3択コインこぼし後、6択リプレイ正解でARTへ突入可能。"
    benefit: "内部的に詠唱チャレンジから始まるため、平均10G前後でART突入機会。公開解析では実質ART突入率は1/6以上と説明されるが、厳密な固定当選率ではないため参考値扱い。"
    disadvantage: "天井到達時の状態・モード依存特典は朝一CZには付かないとの解析あり。"
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
    resetSpecificShortening: "NONE_CONFIRMED"
    ceilingValue: "通常時333Gで詠唱チャレンジ。設定変更専用の短縮天井は確認できず。"
  modeAfterReset:
    behavior: "通常モード/状態はRESETし、内部CZ状態から開始。設定変更専用のモード0〜3確率付き初期振り分けは確認できず。"
    resetSpecificDistribution: "UNVERIFIED_AFTER_RESEARCH"
  stateAfterReset: "内部CZ『詠唱チャレンジ』スタート。"
  advantageousSectionReset: "設定変更時RESET / 据え置き・純電断CARRY_OVER。通常時は有利区間ランプ基本消灯のためランプ単独判別は困難。"
  resetBenefits:
    - "朝一設定変更時は内部CZスタート。"
    - "3択コインこぼし後の6択リプレイ正解でART突入可能。"
  resetPenalties:
    - "朝一CZは天井到達時の状態・モード依存追加恩恵を受けないとの解析あり。"
  resetDetection:
    advantageousSectionLamp: "通常時は基本消灯のため、朝一ランプ単独では設定変更判別困難。"
    reelBehavior: "3択コインこぼし後すぐのリプ・リプ・コイン停止またはART突入は設定変更濃厚。こぼし前のリプ・リプ・コイン非ボーナス、またはこぼし後の通常リプレイは据え置き濃厚。ボーナス先当たり等では判別不能。"
    machineSpecificGakkun: "朝一1G目ガックン有り＝設定変更濃厚、無し＝据え置き濃厚と当時解析。ただし個体差・店側対策を考慮し確定扱いしない。"
  numericResetData:
    resetCeilingGames: "333G"
    morningInternalCz: "START"
    morningArtChance: "実質1/6以上との解析説明あり。ただしレア役ナビストック等を含む実戦・解析表現で固定当選率としては扱わない。"
    resetSpecificModeDistribution: "UNVERIFIED_AFTER_RESEARCH"

sources:
  - url: https://prtimes.jp/main/html/rd/p/000000075.000053327.html
    sourceType: official-release
    usedFor: [manufacturer, manufacturerOrigin, generation, systemType, advantageousSection3000G, releasePeriod]
  - url: https://news.p-world.co.jp/articles/17264/nippon
    sourceType: contemporary-industry
    usedFor: [modelCode, generation, systemType, bonusRateSetting1, artRateSetting1, ceiling333G]
  - url: https://web-greenbelt.jp/post-50855/
    sourceType: contemporary-industry
    usedFor: [releaseDate, bonusPayout, artNetIncrease, artSetGames, baseGamesConflict32_2G, ceiling333G]
  - url: https://nana-press.com/kaiseki/machine/144/4998/
    sourceType: analysis-high
    usedFor: [settings, bonusRates, artRates, payoutRate]
  - url: https://nana-press.com/kaiseki/machine/144/5012/
    sourceType: analysis-high
    usedFor: [baseGamesPer50BySetting]
  - url: https://ichikatsu.com/magihallo8/
    sourceType: contemporary-analysis
    usedFor: [ceiling333G, resetVsPowerCycle, internalCzStart, resetDetection]
  - url: https://slotjin.com/slot/magihallotot/
    sourceType: contemporary-analysis
    usedFor: [resetVsUnchanged, resetVsPowerCycle, internalCzStart, morningBenefit, gakkun, reelResetDetection, advantageousSectionLamp]
  - url: https://www.pachibee.jp/machines/kouryaku/221080001
    sourceType: industry-analysis
    usedFor: [generation, artNetIncrease, internalStates]

unverifiedAfterResearch:
  - "検定番号。型式SマジカルハロウィンFPは業界発表で固定できたが、検定番号そのものは今回の再探索で直接固定できず。"
  - "設定変更専用の通常モード0〜3の確率付き初期振り分け。"
  - "朝一内部CZの厳密な固定ART当選率。1/6以上という解析表現は参考値として分離。"

conflicts:
  - field: baseGamesPer50Coins
    sourceA: "なな徹等の解析値: 設定1 33.2G/50枚〜設定6 34.1G/50枚"
    sourceB: "グリーンべると導入時記事: 設定1 32.2G/50枚"
    handling: "平均化せずCONFLICT保持。性能コアの他主要項目は複数系統一致。"
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1432 HIT128を確認し、handoff指定の次機として追加。
- 設定1〜6のボーナス合算、ART初当たり、機械割はなな徹・複数解析資料で一致。
- resetBehaviorは設定変更時の内部CZ開始、333G天井RESET、据え置き/純電断で天井・内部状態・有利区間引継ぎを複数当時解析で照合。
- 朝一の変更判別は有利区間ランプ単独ではなく、ガックンおよび3択コインこぼし後の停止形/ART突入挙動を機種固有情報として保存。いずれも店側対策等があるため確定扱いはしない。
- 50枚ベースは設定1 33.2Gと32.2Gの資料競合を検出し、平均化せずCONFLICTとして保持。
