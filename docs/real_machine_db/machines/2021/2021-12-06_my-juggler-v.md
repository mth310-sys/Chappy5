# マイジャグラーV — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1445
canonicalKey: 2021-12-06_my-juggler-v
machineName: マイジャグラーV
manufacturer: 北電子
modelCode: SマイジャグラーVKD
inspectionCode: 9S1793
releaseDate: 2021-12-06
generation: 6号機
systemType: ノーマルA / 完全告知 / リアルボーナス
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.0, 98.0, 99.9, 102.8, 105.3, 109.4]
  bigBySetting: ["1/273.1", "1/270.8", "1/266.4", "1/254.0", "1/240.1", "1/229.1"]
  regBySetting: ["1/409.6", "1/385.5", "1/336.1", "1/290.0", "1/268.6", "1/229.1"]
  bonusCombinedBySetting: ["1/163.8", "1/159.1", "1/148.6", "1/135.4", "1/126.8", "1/114.6"]
  initialHitBySetting: "ボーナス合算を主要初当たりとして採用: 1/163.8 / 1/159.1 / 1/148.6 / 1/135.4 / 1/126.8 / 1/114.6"
  baseGamesPer50Coins: "約42G/50枚"
  netIncrease: "NOT_APPLICABLE（AT/ART非搭載のノーマルAタイプ）"
  basicPayout: "BIG平均約240枚 / REG平均約96枚（266枚超/98枚超払い出しで終了とする資料あり）"
  normalCeiling: "非搭載"
  notes:
    - "マイジャグラーシリーズ第5弾。6号機の完全告知ノーマルタイプ。"
    - "設定6はBIG/REGとも1/229.1、機械割109.4%。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE。天井・ゲーム数ゾーン非搭載。"
    modeState: "天国/高確等の通常時モードはなく、天井モードもNOT_APPLICABLE。BGM変化条件は設定変更でリセット。"
    advantageousSection: "NOT_APPLICABLE。ノーマルAタイプで、AT機の朝一有利区間リセット狙いに相当する仕様なし。"
    morningStart: "設定変更後1G目はリールにガックン挙動が発生する直接資料あり。ただし挙動は微弱・個体差があり、目視困難とする資料もある。クレジット/BET状態/BGM変化条件はリセット。"
    benefit: "天井短縮、初当たり優遇、専用モード等の設定変更恩恵は確認されず。"
    disadvantage: "公開された設定変更専用の定量的不利要素は確認されず。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "設定据え置きではBGM変化条件を引き継ぐ。前日ヤメG数と当日朝一当選G数を利用した特殊BGM条件が据え置き推測材料となる。"
    advantageousSection: "NOT_APPLICABLE。"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "純電源OFF→ONではガックンなし、クレジット/BET状態/BGM変化条件を引き継ぐと解析資料に明記。"
    advantageousSection: "NOT_APPLICABLE。"
  gameCounterReset: "天井ゲーム数としてはNOT_APPLICABLE。設定変更でBGM変化条件に用いるゲーム数条件はリセット、据え置き/純電断では引継ぎ。"
  ceilingAfterReset:
    resetSpecificShortening: "NO / NOT_APPLICABLE。天井自体を非搭載。"
    distributions: []
  modeAfterReset:
    behavior: "天国/高確/ATモードなし。設定変更専用モード振り分けなし。"
    resetSpecificDistribution: null
  stateAfterReset:
    behavior: "朝一客行動に影響する高確/低確等の内部状態はNOT_APPLICABLE。BGM変化条件のみ設定変更でリセット、据え置き/純電断で引継ぎ。"
    numeric: null
  advantageousSectionReset: "NOT_APPLICABLE。ノーマルAタイプで有利区間天井・ATモードを利用するゲーム性ではない。"
  resetBenefits:
    - "天井短縮・専用初当たり率・モード優遇等の定量的リセット恩恵なし。"
  resetPenalties:
    - "公開された設定変更専用の定量的不利要素なし。"
  resetDetection:
    reelBehavior: "パチマガスロマガFREEは設定変更（同一設定への打ち直し含む）後1G目にガックンあり、純電源OFF→ONはなしと明記。ただし微弱・個体差あり。別解析は『正確にはガックンしているが目視判別困難』としており、仕様差ではなく視認性の定義差として保持。ホール側の1G回し・リール位置変更等で対策可能。"
    lampDisplay: "設定変更判別用の有利区間ランプはNOT_APPLICABLE。"
    other: "BGM変化条件は設定変更でリセット、据え置き/純電断で引継ぎ。前日のヤメG数＋当日朝一当選G数がゾロ目となるBIGで対応プレミアムBGMが流れれば据え置き推測材料。ただしプレミア演出由来のBGM例外があり確定判別ではない。"
  numericResetData:
    resetSpecificPublishedNumericData: null
    note: "設定変更専用の当選率、モード振り分け、短縮天井値、恩恵発生率等の比較可能な公開数値は確認されず。"

sources:
  - url: https://web-greenbelt.jp/post-42052/
    sourceType: contemporary-industry
    usedFor: [manufacturer, modelCode, inspectionPassage]
  - url: https://hazuse.com/machine/pachislot/9S1793/genre/201/
    sourceType: old-machine-database-analysis
    usedFor: [modelCode, inspectionCode, releaseDate, generation, payoutRateRange]
  - url: https://www.pachibee.jp/machines/index/221100004
    sourceType: contemporary-industry-analysis
    usedFor: [releaseDate, systemType, payoutRateBySetting, bonusRates, basicPayout]
  - url: https://1geki.jp/slot/s_myj5/
    sourceType: analysis
    usedFor: [releaseDate, modelCode, inspectionCodeCrossCheck, systemType, bonusRates]
  - url: https://pachimaga.com/free/mach/maker-s/kitac/064282.php
    sourceType: contemporary-analysis
    usedFor: [settingChangeBehavior, powerCycleBehavior, resetDetection, bonusRates]
  - url: https://www.nankaikoya.jp/myjuggler-five/
    sourceType: secondary-analysis
    usedFor: [releaseDate, baseGamesPer50, ceilingAbsent, payoutRateBySetting, bonusRates, resetDetection, bgmCarryOver]
  - url: https://ichikatsu.com/myjuggler5/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, baseGamesPer50, ceilingAbsent, modeAbsent, payoutRateBySetting, bonusRates, gameCountReset]
  - url: https://www.kaku6.jp/slot/myjuggler5/
    sourceType: analysis
    usedFor: [releaseDate, systemType, baseGamesPer50, payoutRateBySetting, bonusCombined]
  - url: https://www.nakaiti.com/html/sKitadenshi109.html
    sourceType: old-machine-database
    usedFor: [modelCode, systemType, payoutRateBySetting, bonusRates, basicPayout]

unverifiedAfterResearch: []

conflicts:
  - field: resetReelGakkunDescription
    values: ["設定変更後はガックンあり（微弱・個体差あり）", "設定変更してもガックンしない＝正確にはガックンしているが目視判別困難"]
    resolution: "直接解析資料同士を照合すると物理的挙動の有無ではなく視認可能性の表現差。canonicalは『設定変更後に微弱ガックンあり、目視困難な場合あり』。"
  - field: inspectionNumberDisplay
    values: ["9S1793", "0211-173を併記する後年DB"]
    resolution: "HAZUSEと当時型式資料に一致する9S1793を検定番号canonicalとし、後年DBの別番号表記は採用しない。"
```

## QAメモ
- 2026-09-12: 最新main README、Mission v0.7、旧INDEX、LATEST_HANDOFF、直前No.1444を確認し、handoff指定の次機としてNo.1445を追加。
- 2021-12-06導入、北電子、型式SマイジャグラーVKD、検定番号9S1793を当時業界記事・HAZUSE・複数機種DBで照合。
- 性能コアは設定別BIG/REG/合算・機械割、約42G/50枚、BIG約240枚/REG約96枚を複数ソース照合。
- 天井・ゾーンなし、天国/高確なし。設定変更専用の天井短縮・モード振り分け・初当たり優遇等はNOT_APPLICABLE / 公開値なし。
- resetBehaviorはパチマガスロマガFREEの設定変更/純電源OFF→ON比較表を主根拠とし、BGM条件の引継ぎと微弱ガックンの視認性を別資料で照合。
- 2021-12-06群はOPEN。handoff既知5機中1機処理済み。次は「パチスロ モンスターハンター:ワールドTM 黄金狩猟」。
