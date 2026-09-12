# パチスロ かまいたちの夜 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1438
canonicalKey: 2021-10-04_kamaitachi-no-yoru
machineName: パチスロ かまいたちの夜
manufacturer: オーイズミ
modelCode: Sパチスロかまいたちの夜SX
inspectionCode: 0S0366
releaseDate: 2021-10-04
generation: 6.1号機
systemType: A+RT / 技術介入 / 完走型RT / CZ周期天井
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_STATE_DEPENDENT_MORNING_START_AND_POWER_CARRYOVER
confidence: HIGH_CORE_MEDIUM_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 5, 6]
  payoutRatePct:
    lowIntervention: [97.8, 98.9, 101.9, 104.0]
    fullIntervention: [102.0, 103.0, 106.0, 108.0]
    note: "公開値は技術介入条件によりレンジ表記。平均化せず両端を保持。"
  bonusBySetting:
    bigAggregate: ["1/331.0", "1/322.8", "1/300.6", "1/292.6"]
    regAggregate: ["1/339.6", "1/331.0", "1/310.6", "1/293.9"]
    combined: ["1/167.6", "1/163.4", "1/152.8", "1/146.6"]
  baseGamesPer50Coins: "約39G（設定1）〜43G（設定6）/50枚"
  netIncrease: "RT『深層推理モード』約0.4枚/G"
  basicPayout: "かまいたちBONUS平均約172枚 / BIG平均約147枚 / REG平均約65枚"
  rtBasicPerformance: "RT 30G / 50G / 90G / 150G等。完走型。"
  normalCeiling: "CZ終了後、通常時最大256G。前回CZで規定G数短縮の技術介入成功時は128G。到達でCZ『運命分岐モード』。"
  notes:
    - "4段階設定（1/2/5/6）。"
    - "ボーナス主体＋完走型RT。通常時の規定G数到達またはボーナス後にCZへ移行する。"
    - "CZ転落側の難易度高でビタ押し成功時は次回CZ規定G数128G、失敗時は256G。難易度低は75%で128G、25%で256G。"
    - "有利区間を使用しないA+RT機として複数解析資料で扱われる。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。設定変更で通常時CZ天井の進行はリセットされると解析資料に明記。"
    modeState: "STATE_DEPENDENT_MORNING_START。通常時に設定変更した場合は通常時から開始。ボーナス/CZ/RTなど通常時以外で設定変更した場合はCZ『運命分岐モード』から開始すると複数解析資料で一致。"
    advantageousSection: "NOT_APPLICABLE。本機は有利区間を使用しないA+RT機として公開資料に明記。"
    morningStart: "通常時→通常時開始。通常時以外→運命分岐モード開始。初期出荷状態は運命分岐モード開始との解析資料あり。"
    benefit: "条件付きで朝一CZ開始があり得る。これは固定の全リセット恩恵ではなく、変更前状態依存。"
    disadvantage: "通常時CZ天井進行はRESETされるため、据え置きなら残る宵越し進行を失う。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。設定変更を伴わない据え置きではCZ規定G数進行を引き継ぐ扱い。"
    modeState: "CARRY_OVER相当。前日状態に基づくCZ/RT/通常状態の継続が基本だが、閉店時の遊技状態とホール停止手順に依存。"
    advantageousSection: "NOT_APPLICABLE。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。電源入切では天井G数を引き継ぐと解析資料に明記。"
    modeState: "詳細なCZ/RT残G・成立済みボーナス状態の全契約は高信頼資料で固定できずPARTIAL_DETAIL_UNVERIFIED。出玉上重要なCZ天井G数はCARRY_OVER。"
    advantageousSection: "NOT_APPLICABLE。"
  gameCounterReset: "設定変更でCZ天井進行RESET / 据え置き・純電源OFF→ONでCARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "NO_FIXED_RESET_SHORTENING_CONFIRMED。設定変更そのものに128G固定等の短縮は確認されない。"
    ceilingValue: "通常のCZ天井は128Gまたは256G。128G/256Gは前回CZの転落側技術介入結果等で決定する通常システムで、設定変更専用振り分けではない。"
    note: "通常時以外から設定変更した場合は朝一CZ開始となるため、結果として通常天井待ちを介さない場合がある。"
  modeAfterReset:
    behavior: "ゲーム数モード型ではなく、通常時/CZ/RT等の遊技状態に応じた開始処理。朝一専用モード振り分けは確認されない。"
    resetSpecificDistribution: "NO_PUBLIC_RESET_SPECIFIC_MODE_TABLE"
  stateAfterReset: "通常時からの変更は通常状態開始、通常時以外からの変更はCZ開始。純電断時のRT/CZ残状態詳細はUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "NOT_APPLICABLE / 有利区間なし。"
  resetBenefits:
    - "通常時以外で設定変更した場合、朝一CZ『運命分岐モード』開始。"
    - "初期出荷状態では運命分岐モード開始との解析資料あり。"
  resetPenalties:
    - "通常時のCZ天井進行は設定変更でリセットされる。"
  resetDetection:
    advantageousSectionLamp: "NOT_APPLICABLE。有利区間なし。"
    stageBehavior: "朝一が運命分岐モード開始なら設定変更の可能性が高い。ただし前日が運命分岐モード等で終了した場合は判別不能。通常時開始でも通常時から設定変更したケースがあるため据え置き確定にはならない。"
    reelBehavior: "本機固有のガックン発生条件・発生率は十分再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    normalCeilingGames: "128G or 256G（CZ終了後の通常システム）"
    resetCeilingGames: "固定短縮値なし。状態によっては朝一CZ開始。"
    resetSpecificBenefitRate: "NO_PUBLIC_FIXED_RATE_FOUND"
    normalCzNextGameSelection: "難易度低の転落側では75%で128G / 25%で256G。難易度高はビタ成功128G / 失敗256G。これは設定変更専用値ではない。"

sources:
  - url: https://news.p-world.co.jp/articles/17487/greenbelt
    sourceType: contemporary-industry
    usedFor: [releaseDate, manufacturer, systemType, bonusPayout, bonusCombined]
  - url: https://p-bomb.co.jp/industry/maker/1847/
    sourceType: contemporary-industry
    usedFor: [modelCode, releaseDate, systemType, bonusPayout, rtPerformance, ceiling]
  - url: https://hazuse.com/machine/pachislot/0S0366/
    sourceType: old-database-analysis
    usedFor: [modelCode, inspectionCode, releaseDate, generation, bonusProbabilities, payoutRate, rtNetIncrease, ceiling]
  - url: https://pachiseven.jp/machines/6369/cutout/2
    sourceType: analysis-high
    usedFor: [settings, payoutRate, bonusProbabilities, baseGamesPer50, releaseDate]
  - url: https://chonborista.com/slot/oizumi-slot/146434/comment-page-9/
    sourceType: analysis-high
    usedFor: [performanceCore, baseGamesPer50, rtGames, ceiling]
  - url: https://pachiseven.jp/machines/6369/cutout/3
    sourceType: analysis-high
    usedFor: [settingChangeBehavior, stateDependentMorningStart, advantageousSectionNotApplicable]
  - url: https://www.slopachi-quest.com/article/kamaitachinoyoru-tenjou/
    sourceType: contemporary-analysis
    usedFor: [settingChangeBehavior, morningStart, resetDetection, advantageousSectionNotApplicable]
  - url: https://slogati.com/kamaitachi/
    sourceType: retrospective-analysis
    usedFor: [settingChangeCeilingReset, powerCycleCeilingCarryOver, initialShipmentCzStart, resetDetection]
  - url: https://1geki.jp/slot/s_kamaitachi/3/
    sourceType: analysis-high
    usedFor: [ceiling, resetAndPowerDetailStillInvestigating]

unverifiedAfterResearch:
  - "純電源OFF→ON時のCZ/RT残G、内部RT状態、成立済みボーナス/告知状態の完全な機種固有契約。天井G数CARRY_OVERは公開解析で確認。"
  - "本機固有のガックン条件・発生率。『かまいたちの夜』『Sパチスロかまいたちの夜SX』『ガックン』『設定変更判別』『朝一』で資料系統を変えて再探索したが固定できず。"
  - "設定変更専用の固定モード振り分け・朝一CZ開始率。朝一CZ開始は変更前状態依存として公開され、固定発生率は確認されない。"

conflicts:
  - "REG合成の設定6は一部解析で1/293.6表記、HAZUSE・ぱち7では1/293.9。丸め/転記差の可能性があるため、本線は複数一致の1/293.9を採用し差異を注記。"
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1437「ニューパルサーDX3」を確認し、handoff指定の次機として追加。
- 型式 `Sパチスロかまいたちの夜SX`、検定番号 `0S0366`、2021-10-04導入はHAZUSEと当時業界資料で確認。
- 設定1/2/5/6のボーナス確率・機械割レンジ、約39〜43G/50枚、RT純増約0.4枚/G、主要ボーナス獲得枚数は複数資料で照合。
- resetBehaviorは設定変更でCZ天井進行RESET、純電断で天井進行CARRY_OVERを保存。通常時変更→通常時、通常時以外の変更→CZ開始という状態依存仕様はぱち7・スロパチクエストで一致。
- 1gekiは設定変更/電源OFF→ONの状態・液晶詳細を現在調査中としているため、CZ/RT残状態などの細部を一般論で補完しなかった。
