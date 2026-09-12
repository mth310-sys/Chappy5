# ハイハイシオサイ2 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1443
canonicalKey: 2021-11-08_haihai-shiosai2
machineName: ハイハイシオサイ2
manufacturer: パイオニア
modelCode: Sハイハイシオサイ2HY
inspectionCode: 1S0644
releaseDate: 2021-11-08
generation: 6.1号機
systemType: ノーマル / Aタイプ / 完全告知 / 技術介入あり / 25φ
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_FIRST_BONUS_DATA
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.9, 99.8, 101.9, 104.1, 106.0, 110.0]
  bigBySetting: ["1/195", "1/190", "1/185", "1/181", "1/148", "1/164"]
  regBySetting: ["1/204", "1/197", "1/191", "1/184", "1/297", "1/168"]
  bonusCombinedBySetting: ["1/99", "1/97", "1/94", "1/91", "1/99", "1/83"]
  initialHitBySetting: "ボーナス合算を主要初当たりとして採用: 1/99 / 1/97 / 1/94 / 1/91 / 1/99 / 1/83"
  baseGamesPer50Coins: "約32.3G/50枚（設定1）"
  netIncrease: null
  basicPayout: "BIG最大194枚、REG最大102枚。技術介入成功でBIGは通常182枚から+12枚、REGは通常91枚から+11枚。"
  normalCeiling: "非搭載"
  notes:
    - "設定5はBIG偏向型の特殊設計（BIG 1/148、REG 1/297、合算1/99）。"
    - "ハイビスカス点灯でボーナス確定の完全告知ノーマルタイプ。"
    - "通常時は小役取りこぼしなしのオールフリー打ちが可能。"
    - "25φ機。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE。天井機能非搭載のため、設定変更による天井ゲーム数リセット/短縮という概念はない。"
    modeState: "通常時の天井モード・AT/CZ用内部モードを持つゲーム性ではなく、物差し上NOT_APPLICABLE。設定変更後1回目のボーナスのみカモメランプ紫の出現率が専用値へ上昇する。"
    advantageousSection: "ノーマルボーナス主体機で、有利区間を用いたAT/CZゲーム性は確認されず、物差し上NOT_APPLICABLE。"
    morningStart: "設定変更後の最初のボーナスで、技術介入成功時カモメランプ『紫（設定2以上示唆）』の出現率が通常時より上昇。"
    benefit: "設定変更後1回目のボーナスでは紫カモメランプの出現率が設定2=10.0%、3=10.5%、4=11.0%、5=11.5%、6=12.0%。設定1は出現なし。通常の2回目以降は2.0/2.1/2.2/2.3/2.4%のため、設定推測情報が出やすい。"
    disadvantage: "公開された設定変更専用の出玉上の不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "天井モード/AT状態の引継ぎという概念は物差し上NOT_APPLICABLE。設定変更後1回目専用のカモメランプ紫振り分けは『設定変更後』として公開されており、据え置き時に同条件が再発する根拠は確認できず。"
    advantageousSection: "NOT_APPLICABLE（ノーマルボーナス主体）。"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "純電源OFF→ONだけで設定変更後1回目専用カモメランプテーブルが再セットされるかは、表記揺れ・型式名・メーカー名と電断/電源OFF ON/据え置きを組み替えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE（ノーマルボーナス主体）。"
  gameCounterReset: "NOT_APPLICABLE。天井・ゾーン非搭載のため朝一ゲーム数リセット/引継ぎによる狙い目なし。"
  ceilingAfterReset:
    resetSpecificShortening: "NO / NOT_APPLICABLE。天井自体を非搭載。"
    distributions: []
  modeAfterReset:
    behavior: "天井モード/ATモードはNOT_APPLICABLE。"
    resetSpecificDistribution: null
  stateAfterReset:
    behavior: "AT/CZ内部状態の再抽選はNOT_APPLICABLE。設定変更後1回目のボーナスに限る設定示唆テーブル差を別項目で保持。"
    numeric: null
  advantageousSectionReset: "NOT_APPLICABLE（ノーマルボーナス主体のため、朝一客行動に関係する有利区間リセット仕様なし）。"
  resetBenefits:
    - "設定変更後1回目のボーナスで技術介入成功時の紫カモメランプ出現率が大幅上昇。設定2～6で10.0 / 10.5 / 11.0 / 11.5 / 12.0%。"
  resetPenalties:
    - "公開された設定変更専用の定量的不利要素なし。"
  resetDetection:
    firstBonusLamp: "設定変更後1回目のボーナスでは紫カモメランプ出現率が通常の約5倍。紫は設定2以上示唆でもあるため単独で設定変更確定ではないが、朝一最初のボーナスで出現した場合は設定変更後専用テーブルの統計的材料になる。"
    reelBehavior: "本機固有の設定変更ガックン条件・発生率は、機種名/型式/メーカー/シリーズと設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・リール始動を組み替えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "有利区間ランプによる変更判別はNOT_APPLICABLE。"
  numericResetData:
    firstBonusKamoPurpleRateBySetting: {setting1: "0%", setting2: "10.0%", setting3: "10.5%", setting4: "11.0%", setting5: "11.5%", setting6: "12.0%"}
    laterBonusKamoPurpleRateBySetting: {setting1: "0%", setting2: "2.0%", setting3: "2.1%", setting4: "2.2%", setting5: "2.3%", setting6: "2.4%"}
    note: "HAZUSEは設定変更後1回目について紫率のみを独立表で掲載。別二次資料は青/赤の通常比率と紫の設定変更後比率を同一行に並べ、設定2以上で合計100%を超える表示になるため、その合計表現は採用せず、複数資料で一致する紫率だけを設定変更専用数値として固定。"

sources:
  - url: https://news.p-world.co.jp/articles/17449/nippon
    sourceType: contemporary-industry
    usedFor: [manufacturer, modelCode, productAnnouncement, releaseTiming, baseGamesPer50]
  - url: https://news.p-world.co.jp/articles/17601/greenbelt
    sourceType: contemporary-industry
    usedFor: [manufacturer, specificationOverview, payoutRange, bonusRange, baseGamesPer50, basicPayout]
  - url: https://www.pidea.jp/articles/1629182526
    sourceType: contemporary-industry
    usedFor: [releaseDate, 25phi, systemType, featureOverview]
  - url: https://www.pachibee.jp/machines/lecture/221090006
    sourceType: contemporary-industry-analysis
    usedFor: [releaseDate, generation, systemType]
  - url: https://hazuse.com/machine/pachislot/1S0644/
    sourceType: old-machine-database-analysis
    usedFor: [modelCode, inspectionCode, releaseDate, payoutRateBySetting, bigBySetting, regBySetting, combinedBySetting, baseGamesPer50, ceilingAbsent, firstBonusResetNumericData]
  - url: https://hisshobon.news/analyze/4580/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, payoutRateBySetting, bigBySetting, regBySetting, combinedBySetting, baseGamesPer50, basicPayout]
  - url: https://www.slopachi-quest.com/article/haihaisiosai2-settei/
    sourceType: contemporary-analysis
    usedFor: [firstBonusResetNumericData, laterBonusLampData, performanceCrossCheck]
  - url: https://chonborista.com/slot/pionia-slot/154093/
    sourceType: analysis
    usedFor: [ceilingAbsent, payoutRateBySetting, bonusRates, basicPayout]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/134/tj02.php
    sourceType: old-analysis
    usedFor: [baseGamesPer50]

unverifiedAfterResearch:
  - "純電源OFF→ONのみで『設定変更後1回目』カモメランプ専用テーブルが再セットされるか否か。"
  - "本機固有の設定変更ガックン条件・発生率。"

conflicts:
  - field: generationLabel
    values: ["6.1号機", "6号機"]
    resolution: "Pachibee等の詳細分類では6.1号機、一般解析では6号機表記。世代の包含関係として6.1号機をcanonicalにし、一般6号機表記は矛盾ではなく上位分類として保持。"
  - field: firstBonusKamoLampCombinedTablePresentation
    values: ["HAZUSE: 設定変更後1回目は紫率のみを独立掲載", "一部二次資料: 通常青/赤比率と変更後紫率を同一行掲載し合計100%超"]
    resolution: "不可能な合計を補正・平均せず、HAZUSEと二次資料の双方で一致する設定変更後紫率のみcanonicalなreset numericとして採用。"
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1442「パチスロ戦国乙女 暁の関ヶ原-DARKNESS-」を確認し、handoff指定の次機として追加。
- 型式 `Sハイハイシオサイ2HY`、検定番号 `1S0644`、2021-11-08導入、パイオニア製をHAZUSE・当時業界資料で照合。
- 性能コアは設定1～6のBIG/REG/合算・機械割、約32.3G/50枚、BIG最大194枚/REG最大102枚を複数資料で照合。
- 天井は非搭載。AT/CZ用の天井・モード・有利区間リセット狙いは物差し上NOT_APPLICABLE。
- resetBehaviorの公開固有値として、設定変更後1回目のボーナスで紫カモメランプ出現率が設定2～6で10.0/10.5/11.0/11.5/12.0%へ上昇する点を保存。通常2回目以降は2.0/2.1/2.2/2.3/2.4%。
- 一部二次資料の設定変更後1回目『青/赤/紫/虹』表は行合計が100%を超えるため勝手に正規化せず、HAZUSEが独立表で示す紫率のみを変更専用canonical値とした。
- 電源OFF→ONだけで変更後初回テーブルが再設定されるか、本機固有ガックンは再探索後も固定できず推測補完しない。
