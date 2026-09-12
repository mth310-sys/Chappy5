# パチスロひぐらしのなく頃に祭2 カケラ遊び編 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1488
canonicalKey: 2022-04-04_higurashi-matsuri2-kakera-asobi
machineName: "パチスロひぐらしのなく頃に祭2 カケラ遊び編"
alternateName: "Sひぐらしのなく頃に祭2カケラ遊び編 / ひぐらし祭2 カケラ遊び編"
manufacturer: "オーイズミラボ（販売：オーイズミ）"
modelCode: "Sひぐらしのなく頃に祭2カケラ遊び編L5"
inspectionCode: "1S1826"
releaseDate: 2022-04-04
generation: "6.4号機"
systemType: "技術介入要素あり・高純増疑似ボーナスAT（疑似Aタイプ）"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_CONFLICT
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePctMarketAssumption:
    note: "リプレイはずし成功率90%、ビタ押し成功率50%等の市場想定条件"
    "1": 97.8
    "2": 98.8
    "3": 99.7
    "4": 100.9
    "5": 102.2
    "6": 104.0
  payoutRatePctFullStrategy:
    note: "リプレイはずし100%、ビタ押し100%、小役取りこぼしなし、2回目JAC INを7G以内に入賞等の完全攻略条件"
    "1": 100.5
    "2": 101.7
    "3": 102.7
    "4": 104.0
    "5": 105.4
    "6": 108.3
  initialHitBySetting:
    firstBonus:
      "1": "1/249.5"
      "2": "1/238.9"
      "3": "1/228.6"
      "4": "1/220.5"
      "5": "1/208.7"
      "6": "1/192.5"
    kakeraReminiscence:
      "1": "1/313.7"
      "2": "1/301.1"
      "3": "1/296.1"
      "4": "1/283.6"
      "5": "1/287.0"
      "6": "1/276.6"
    unmeiBunkiMode:
      "1": "1/638.1"
      "2": "1/611.0"
      "3": "1/584.5"
      "4": "1/563.9"
      "5": "1/533.8"
      "6": "1/492.4"
  baseGamesPer50Coins: "約43.5〜44.1G/50枚（設定差あり）"
  netIncrease: "疑似ボーナス 約7.8枚/G"
  basicPayout:
    initialBlue7: "惨劇ボーナス 約47枚"
    initialRed7: "赤7初当り 約266枚"
    redBig: "BIG平均約266枚"
    oyashiroBig: "オヤシロBIG平均約377枚"
    cz: "絶対意思ZONE 15G+α / 成功期待度約42%"
  normalCeiling:
    advantageousSectionGames: "有利区間移行後 最大1500Gで初当りボーナス+CZ突破濃厚（運命分岐モード濃厚）"
    calendar: "液晶カレンダー7月1日到達（平均約650G）で初当りボーナス濃厚"
    czThrough: "初当りボーナス後CZを6回スルーすると7回目CZ突破濃厚"
  modeSpecificMinimumData: "初当り後はCZ『絶対意思ZONE』を経て運命分岐モードを目指す。ボーナス後は35Gの『運命の解』で連続当選を狙う。カケラ遊び編は約80%ループ。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。有利区間1500G、カレンダー進行、同一区間内CZスルー回数等の天井進行をリセット。"
    modeState: "RESET扱い。複数解析で内部状態リセットとされる。新規有利区間開始後はCZ状態へ移行する仕様が業界資料でも説明される。"
    advantageousSection: "RESET。"
    morningStart: "設定変更後は専用/特定ステージ開始とされるが、ステージ名が資料間でCONFLICT（HAZUSE/イチカツ=祭具殿、スロパチクエスト=古手神社）。"
    benefit: "有利区間リセット後はCZ『絶対意思ZONE』へ。CZ自体の一般成功期待度は約42%。固定短縮天井は確認できない。"
    disadvantage: "設定変更専用の主要な不利数値は確認できず。設定変更後の惨劇ではカケラ獲得アクションが発生しないとの解析記載あり。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。設定変更しない据え置きは天井進行・有利区間を引き継ぐものとして、電源OFF→ON資料と据え置き判別資料が整合。"
    modeState: "CARRY_OVER。前日内部状態/ステージを引き継ぐ扱い。"
    advantageousSection: "CARRY_OVER。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。天井を引き継ぐ。"
    modeState: "CARRY_OVER。内部状態/ステージを引き継ぐとする解析あり。ただしHAZUSEはステージのみ『調査中』表記。"
    advantageousSection: "CARRY_OVER。"
  gameCounterReset: "設定変更=RESET / 据え置き・純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    fixedShortening: "NO_PUBLIC_FIXED_SHORTENING_FOUND_AFTER_RESEARCH"
    normalMax: "有利区間最大1500G / カレンダー7月1日平均約650G / CZ7回目突破濃厚の3系統。設定変更で全て新規進行。"
  modeAfterReset:
    behavior: "新規有利区間開始。設定変更専用のモード振り分け数値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "内部状態RESET。新規有利区間開始時はCZ状態へ移行する説明が複数資料にある。"
  advantageousSectionReset: "設定変更でRESET。据え置き・純電源OFF→ONはCARRY_OVER。本機は有利区間中でもランプ非点灯/ランプによる判別不可。"
  resetBenefits:
    - "有利区間リセット後CZ『絶対意思ZONE』へ移行する仕様。一般成功期待度約42%。"
    - "固定短縮天井は確認できず。"
  resetPenalties:
    - "設定変更専用の主要不利数値は確認できず。"
    - "設定変更後の最初の惨劇ではカケラ獲得アクションが発生しないとの解析記載あり。"
  resetDetection:
    lampDisplay: "有利区間ランプからは判別不可。6.4号機で報知義務がなく、本機は有利区間中もランプ非点灯とされる。"
    stage: "朝一の開始ステージが設定変更判別材料。ただしステージ名は資料間CONFLICT。据え置き/電断は前日ステージ引継ぎとする解析あり。"
    reelBehavior: "本機固有の設定変更時ガックン条件・発生率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
  numericResetData:
    resetCz: "有利区間リセット後CZへ移行。CZ一般成功期待度約42%（設定変更専用成功率ではないため区別）。"
    dedicatedModeTable: "設定変更専用のモード/状態振り分け数値はNO_PUBLIC_RESET_SPECIFIC_NUMERIC_TABLE_FOUND_AFTER_RESEARCH。"

sources:
  - url: https://news.p-world.co.jp/articles/19472/nippon
    sourceType: industry-inspection
    usedFor: [modelCode, manufacturer]
  - url: https://news.p-world.co.jp/articles/19773/nippon
    sourceType: industry
    usedFor: [releaseDate, modelCode, manufacturer, netIncrease, firstHitRange]
  - url: https://www.yugitsushin.jp/news/maker/20220307-2100/
    sourceType: industry
    usedFor: [releaseDate, manufacturer, netIncrease, basicPayout, czSuccessRate, gameplay]
  - url: https://p-bomb.co.jp/industry/new-machine/3604/
    sourceType: industry
    usedFor: [modelCode, manufacturer, netIncrease, firstHitRange, advantageousSectionResetCz, czSuccessRate]
  - url: https://hazuse.com/machine/pachislot/1S1826/
    sourceType: historical-analysis-high
    usedFor: [inspectionCode, generation, releaseDate, payoutRate, initialHit, baseGamesPer50, netIncrease, ceilings, settingChangeBehavior, powerCycleBehavior, resetDetection]
  - url: https://nana-press.com/kaiseki/machine/338/8710/
    sourceType: analysis-high
    usedFor: [payoutRateBySetting, fullStrategyPayout, initialHitBySetting]
  - url: https://nana-press.com/kaiseki/machine/338/8712/
    sourceType: analysis-high
    usedFor: [ceilings]
  - url: https://ichikatsu.com/higurashi2kakera/
    sourceType: analysis
    usedFor: [payoutRate, initialHit, settingChangeBehavior, powerCycleBehavior, resetDetection, stage]
  - url: https://www.slopachi-quest.com/article/higurashi-maturi2-kakeraasobi-tenjou/
    sourceType: analysis
    usedFor: [baseGamesPer50, ceilings, settingChangeBehavior, powerCycleBehavior, internalState, advantageousSection, resetDetection, stage]
  - url: https://chonborista.com/slot/oizumi-slot/165265/
    sourceType: analysis-high
    usedFor: [advantageousSectionResetTiming, gameplay, bonusStructure]

unverifiedAfterResearch:
  - "本機固有の設定変更時リールガックン条件・発生率。機種名/型式名に『ガックン』『設定変更』『朝一』『リール』を組み合わせて再探索したが直接資料を固定できず。"
  - "設定変更専用の内部モード/状態初期振り分け数値。状態リセットと新規有利区間CZは確認できるが、専用振り分け表は固定できず。"
  - "設定変更専用CZ成功率。CZ一般成功期待度約42%は業界資料で確認できるが、リセット時だけの別成功率は確認できず。"

conflicts:
  - field: "設定変更後の開始ステージ名"
    values:
      - "HAZUSE / イチカツ: 祭具殿ステージ"
      - "スロパチクエスト: 古手神社ステージ"
    treatment: "名称を平均・強制統一せずCONFLICTとして保持。朝一に通常の前日ステージとは異なるリセット示唆ステージから始まること自体は複数資料で一致。"
  - field: "初当り設定6の丸め表記"
    values:
      - "複数解析: 1/192.5"
      - "一部業界記事: 1/192.7"
    treatment: "設定別表が複数一致する1/192.5をcanonicalとし、業界記事のレンジ丸め/表記差をalternateとして保持。平均化しない。"

researchNotes:
  - "2022-04-04導入。型式Sひぐらしのなく頃に祭2カケラ遊び編L5、検定番号1S1826。"
  - "技術介入条件で機械割の定義が大きく変わるため、市場想定97.8〜104.0%と完全攻略100.5〜108.3%を別系列で保持。"
  - "天井は有利区間1500G、カレンダー7月1日（平均約650G）、CZスルー7回目の3系統。"
  - "本機は6.4号機で有利区間ランプによる朝一判別ができない。変更判別の中心は開始ステージだが、その名称に資料競合があるためCONFLICT。"
  - "有利区間リセット後CZ突入は業界資料と複数解析で確認。CZ一般成功期待度約42%を朝一適用可能な比較値として保存したが、設定変更専用成功率とは扱わない。"
```
