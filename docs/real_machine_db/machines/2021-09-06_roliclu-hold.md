# パチスロ ロリクラ☆ほーるど！ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1431
canonicalKey: 2021-09-06_roliclu-hold
machineName: パチスロ ロリクラ☆ほーるど！
manufacturer: NET（製造: DAXEL株式会社）
modelCode: SロリクラホールドDD
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2021-09-06
generation: 6.1号機
systemType: AT（差枚数管理型 / CZ3択経由）
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_MORNING_NUMERIC_BENEFIT
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 5, 6]
  payoutRatePct: [98.4, 100.2, 103.0, 107.0]
  initialHitBySetting:
    czRolicluChance: ["1/333", "1/317", "1/297", "1/259"]
    atRoliclu1000Bonus: ["1/999", "1/951", "1/889", "1/777"]
  baseGamesPer50Coins: "約40.8G/50枚"
  netIncrease: "約2.7枚/G"
  basicPayout: "AT『ロリクラ☆1000ぼーなす』は初期1000枚固定・1000枚+α獲得。AT終了後は10Gの引き戻し『わんもあマッチ』へ移行。"
  normalCeiling: "液晶ゲーム数333G到達でCZ期待度60%以上の『部室ステージ』へ移行。ただしCZ/AT当選そのものを保証する天井ではないため、資料によって『天井あり』『天井なし』の表現差がある。"
  notes:
    - "通常時は時計カウンターを進め、18時到達でもCZ期待度60%以上の部室ステージへ移行。"
    - "AT突入契機は原則CZの3択正解。"
    - "業界資料PiDEAでは設定5出玉率103.1%、P-WORLD/パチビー/導入前動画等では103.0%。丸め/掲載差としてCONFLICT保持。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。液晶333G到達までのカウントを新規開始。"
    modeState: "RESET。内部モード・内部状態を再セット。新規有利区間移行直後は内部的に『わんもあマッチ』と同じ抽選状態へ。"
    advantageousSection: "RESET。"
    morningStart: "内部的に引き戻しゾーン『わんもあマッチ』相当の10G状態から開始。液晶上で必ず同演出を表示するとは限らない。"
    benefit: "朝一10Gは『わんもあマッチ』と同じCZ抽選を受けられる。業界資料では有利区間移行時の10G引き戻しゾーンのCZ期待度約6%。"
    disadvantage: "公開された設定変更専用の明確な不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER"
    modeState: "CARRY_OVER"
    advantageousSection: "CARRY_OVER"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER"
    modeState: "CARRY_OVER"
    advantageousSection: "CARRY_OVER"
  gameCounterReset: "設定変更時RESET / 据え置き・純電源OFF→ONはCARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "NO_PUBLIC_FIXED_SHORTENING_FOUND"
    ceilingValue: "設定変更後も液晶333G到達で部室ステージ移行。設定変更専用の短縮ゲーム数は確認できず。"
  modeAfterReset:
    behavior: "設定変更で内部モードRESET。有利区間移行直後は内部わんもあマッチ相当。"
    resetSpecificDistribution: "モードの確率付き振り分け表はUNVERIFIED_AFTER_RESEARCH。"
  stateAfterReset: "設定変更時RESETし、最初の10Gは内部わんもあマッチ相当 / 据え置き・純電断CARRY_OVER。"
  advantageousSectionReset: "設定変更時RESET / 据え置き・純電断CARRY_OVER。通常時は有利区間ランプ常時点灯型。"
  resetBenefits:
    - "設定変更後は内部的に『わんもあマッチ』相当の10G状態。"
    - "その10G間は成立役に応じてCZ突入抽選。"
    - "有利区間移行時の10G引き戻しゾーンは業界資料でCZ期待度約6%。"
  resetPenalties:
    - "NO_PUBLIC_RESET_SPECIFIC_PENALTY_FOUND_AFTER_RESEARCH"
  resetDetection:
    advantageousSectionLamp: "PAY OUT右下ドット。通常時常時点灯型のため、朝一消灯＝設定変更濃厚、点灯＝据え置き濃厚。AT終了/CZ失敗/部室ステージ終了時にも一旦消灯後、数Gで再点灯するため前日終了状態や店舗対策には注意。"
    gameCountBehavior: "据え置きは液晶333G区間や内部モード/状態を引き継ぐため前日状況との合算挙動が材料になり得る。"
    machineSpecificGakkun: "UNVERIFIED_AFTER_RESEARCH"
  numericResetData:
    openingInternalState: "わんもあマッチ相当"
    openingWindowGames: "10G"
    openingCzExpectation: "約6%（有利区間移行時の引き戻しゾーン期待値として業界資料に掲載。設定変更専用に独立測定された値ではない）"
    roomStageThresholdAfterReset: "333G"
    roomStageCzExpectation: "60%以上"

sources:
  - url: https://www.net-fun.co.jp/product/page/2
    sourceType: official
    usedFor: [machineName, modelCode, manufacturerFactory, releaseMonth, netIncrease, basicPayout]
  - url: https://www.dreamnews.jp/press/0000240224/
    sourceType: official-press-release
    usedFor: [manufacturer, releasePeriod, gameConcept]
  - url: https://amusement-japan.co.jp/article/detail/10002412/
    sourceType: contemporary-industry
    usedFor: [releaseDate, czRate, atRate, payoutRate, systemType, basicPayout]
  - url: https://news.p-world.co.jp/articles/17298/playgraph
    sourceType: contemporary-industry
    usedFor: [manufacturerFactory, systemType, netIncrease, basicPayout, oneMoreMatch10G, releasePeriod]
  - url: https://pidea.jp/articles/1629681507
    sourceType: contemporary-industry-analysis
    usedFor: [settings, payoutRateConflict, czRate, atRate, baseGamesPer50Coins, netIncrease, basicPayout, roomStage, advantageousSectionOpening10G, openingCzExpectation]
  - url: https://www.pachibee.jp/machines/index/221070002
    sourceType: industry-database
    usedFor: [releaseDate, generation, payoutRate, czRate, atRate, netIncrease, basicPayout, roomStage333G]
  - url: https://www.p-world.co.jp/machine/database/9442
    sourceType: industry-database
    usedFor: [manufacturer, manufacturerFactory, generation, payoutRate, czRate, atRate, netIncrease, basicPayout, roomStage333G]
  - url: https://nana-press.com/kaiseki/machine/149/5137/
    sourceType: analysis-high
    usedFor: [settingChangeReset, unchangedCarryOver, internalModeStateReset, advantageousSectionLamp, internalOneMoreMatchAfterReset]
  - url: https://slothack.net/matome/47169/
    sourceType: contemporary-analysis
    usedFor: [gameCounterReset, powerCycleCarryOver, internalModeStateCarryOver, advantageousSectionCarryOver, roomStage333G, roomStageCzExpectation, resetDetection, internalOneMoreMatch10G]
  - url: https://1geki.jp/slot/s_roliclu/83/
    sourceType: analysis-high
    usedFor: [oneMoreMatch10G, oneMoreMatchCzLottery]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/182/bn01-1.php
    sourceType: contemporary-analysis-high
    usedFor: [netIncrease, basicPayout]

unverifiedAfterResearch:
  - "検定番号。公式製品一覧で型式名『SロリクラホールドDD』までは確認できたが、検索語を型式/メーカー/DAXEL/検定通過情報へ変更しても検定番号を固定できず。"
  - "本機固有の設定変更時ガックン条件・発生率。"
  - "設定変更専用の内部モード確率付き振り分け。"
  - "設定変更専用の固定短縮天井。"
  - "朝一10GのCZ期待度について設定別内訳。"

conflicts:
  - field: payoutRateSetting5
    canonical: "103.0%"
    alternatives: ["103.1%"]
    note: "P-WORLD/パチビー/複数導入資料は103.0%、PiDEAは103.1%。平均化せず掲載差として保持。"
  - field: ceilingDefinition
    canonical: "333GでCZ期待度60%以上の部室ステージへ移行。CZ/AT当選保証ではない。"
    alternatives: ["天井333G", "天井なし"]
    note: "資料の『天井』語義差。333G到達の事実は一致するが恩恵は高確率ステージ移行までなので、AT/CZ保証天井と混同しない。"
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1430を確認し、handoff指定の次機として追加。
- 性能コアはNET公式製品一覧、業界一次記事、P-WORLD/パチビー、PiDEA等でクロスチェック。型式名はNET公式の `SロリクラホールドDD` を採用。
- resetBehaviorはなな徹、SLOT HACK、PiDEA、一撃を横断。設定変更時RESET / 据え置き・純電断CARRY_OVER、通常時有利区間ランプ常時点灯、設定変更後の内部わんもあマッチ相当10Gは複数系統で整合。
- 公開朝一数値は10G、および有利区間移行時のCZ期待度約6%を保存。設定変更専用に独立計測された6%ではないため定義注記を付した。
- 333Gは『部室ステージ移行』でありCZ/AT確定ではない。『天井あり/なし』の資料差を意味論CONFLICTとして保持。
- 検定番号、ガックン、設定変更専用モード振り分けは、公式・業界・解析・型式表記変更まで再探索しても固定できず推測していない。
