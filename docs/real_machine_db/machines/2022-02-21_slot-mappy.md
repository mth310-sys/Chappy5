# SLOTマッピー — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1479
canonicalKey: 2022-02-21_slot-mappy
machineName: SLOTマッピー
manufacturer: メーシー
modelCode: "S/マッピー/GS"
inspectionCode: "1S1341"
releaseDate: 2022-02-21
generation: "6.1号機"
systemType: "A+AT / リアルボーナス+技術介入AT"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED
confidence: HIGH_CORE_MEDIUM_RESET_POWER_STATE_AND_GAKKUN_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "5", "6"]
  payoutRatePctMarket:
    "1": 99.3
    "2": 100.3
    "5": 102.5
    "6": 103.9
  payoutRatePctFullProcedure:
    definition: "BIG中HARD（青7狙い）を全成功した完全手順"
    "1": 102.1
    "2": 103.2
    "5": 105.2
    "6": 106.7
  payoutRatePctUltraFullProcedure:
    definition: "HARD+BIG最終ゲームのVERY HARD/裏技を全成功した超完全手順"
    "1": 104.1
    "2": 105.2
    "5": 106.9
    "6": 108.3
  initialHitBySetting:
    definition: "ボーナス合算"
    "1": "1/149.6"
    "2": "1/145.0"
    "5": "1/141.5"
    "6": "1/138.0"
  bonusProbability:
    BIG:
      definition: "BIG（全設定共通）"
      "1": "1/248.2"
      "2": "1/248.2"
      "5": "1/248.2"
      "6": "1/248.2"
    REG:
      "1": "1/376.6"
      "2": "1/348.6"
      "5": "1/329.3"
      "6": "1/310.6"
  baseGamesPer50Coins: "約38.0G/50枚"
  netIncrease: "AT『MAPPY ROUND』『MAPPY GAME』とも約0.3枚/G"
  basicPayout: "BIG最大153枚 / REG最大55枚。MAPPY ROUNDは1セット20G。REG後は30G固定のチャンスタイム。"
  normalCeiling: "非搭載"
  modeSpecificMinimumData:
    technicalIntervention: "BIG中にNORMAL（3連マッピー2コマ）/ HARD（青7ビタ）/ VERY HARD（最終ゲームBARひし形ビタ）の技術介入。市場予測・完全・超完全の機械割定義を分離して保存。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "天井非搭載のため実質NOT_APPLICABLE。解析表では設定変更時『天井リセット』表記。"
    modeState: "天井/通常モード主体の機種ではない。AT・チャンスタイム等の機種固有内部状態について設定変更時の完全な公開契約は再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "設定変更時RESETを確認。"
    morningStart: "設定変更後の専用朝一ステージ・専用モードは確認できず。"
    benefit: "設定変更専用の短縮天井・専用初当たり/CZ優遇・公開数値は確認できず。"
    disadvantage: "前日AT/チャンスタイム等の内部状態について設定変更時の詳細契約は公開資料から固定できず。"
  unchanged:
    gameCountCeiling: "天井非搭載。解析表では電源OFF→ON時『天井引き継ぎ』表記だが、狙える天井機能自体はない。"
    modeState: "据え置き時のAT/チャンスタイム等の内部状態について機種固有の直接公開契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "通常時はランプ消灯状態が多く、朝一ランプ単独では据え置き/変更を確定できない。"
  powerOffOn:
    gameCountCeiling: "天井非搭載。解析表では引き継ぎ表記。"
    modeState: "純電源OFF→ON時の機種固有内部状態引継ぎ詳細は、機種名/型式/メーカー/朝一/据え置き/電断で再探索後も直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "純電源OFF→ON時の有利区間の機種固有公開契約は再探索後もUNVERIFIED_AFTER_RESEARCH。"
  gameCounterReset: "天井非搭載のため朝一狙い用ゲーム数天井はNOT_APPLICABLE。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE。天井非搭載。"
    normalCeiling: "NOT_APPLICABLE"
  modeAfterReset:
    behavior: "設定変更専用モード/モード振り分けの公開値は確認できず。"
  stateAfterReset:
    behavior: "AT・REG後30Gチャンスタイム等の内部状態に関する設定変更/据え置き/純電断の完全な公開契約は再探索後もUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "設定変更時RESETを確認。有利区間ランプはボーナス入賞時に点灯し、設定変更時・REG終了時・MAPPY GAME終了時に消灯するため、朝一消灯だけでは変更判別不能。"
  resetBenefits:
    - "短縮天井・設定変更専用モード・公開された朝一当選率などの主要恩恵は確認できず。"
  resetPenalties:
    - "公開された設定変更専用の主要不利数値は確認できず。"
  resetDetection:
    reelBehavior: "本機固有のガックン条件/発生率は、SLOTマッピー/マッピー/SマッピーGS/メーシーと設定変更・リセット・朝一・据え置き・電源OFF ON・ガックンを組み替えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "有利区間ランプはボーナス入賞時点灯、設定変更時/REG終了時/MAPPY GAME終了時消灯。通常時から消灯し得るため、朝一消灯=変更とは判定できない。"
    morningBehavior: "設定変更専用の外見上確定挙動は確認できず。"
  numericResetData:
    resetSpecificCeiling: "NOT_APPLICABLE"
    resetSpecificModeDistribution: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    resetSpecificHitRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/19157/nippon
    sourceType: industry-primary
    usedFor: [manufacturer, modelCode, releaseDate, systemType, bonusCombinedRange, technicalInterventionOutline]
  - url: https://hazuse.com/machine/pachislot/1S1341/
    sourceType: old-machine-db-analysis-high
    usedFor: [releaseDate, manufacturer, modelCode, inspectionCode, generation, netIncrease]
  - url: https://hazuse.com/machine/pachislot/1S1341/genre/201/
    sourceType: old-machine-db-analysis-high
    usedFor: [payoutRateMarket, payoutRateFullProcedure, payoutRateUltraFullProcedure, bonusPayoutConditions]
  - url: https://p-kn.com/slot/3722/
    sourceType: analysis-high
    usedFor: [releaseDate, systemOutline, bigPayout, regPayout, atNetIncrease, mappyRoundGames, regChanceTime]
  - url: https://1geki.jp/slot/s_mappy/
    sourceType: analysis-high
    usedFor: [bonusProbability, payoutRateDefinitions, releaseDate, technicalIntervention]
  - url: https://1geki.jp/slot/s_mappy/1/
    sourceType: analysis-high
    usedFor: [bigProbability, regProbability, combinedProbability]
  - url: https://nana-press.com/kaiseki/machine/289/8117/
    sourceType: analysis-high
    usedFor: [bonusProbability, payoutRateMarket, payoutRateFullProcedure, payoutRateUltraFullProcedure]
  - url: https://pachiseven.jp/machines/6458/cutout/3
    sourceType: analysis-high
    usedFor: [ceilingNotEquipped]
  - url: https://chonborista.com/slot/universal-slot/159051/
    sourceType: analysis-secondary
    usedFor: [resetBehavior, powerCycleTable, advantageousSectionLamp, ceilingNotEquipped]
  - url: https://pachinko-curation.com/27348/
    sourceType: industry-summary
    usedFor: [modelCode, releaseDate, baseGamesPer50, payoutRateMarket, netIncrease]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/53/bn01.php
    sourceType: analysis-high
    usedFor: [bigPayout, technicalInterventionExpectedGames]

unverifiedAfterResearch:
  - "設定変更/据え置き/純電源OFF→ON時のAT・REG後チャンスタイム等の内部状態の完全な機種固有契約。"
  - "純電源OFF→ON時の有利区間そのものの機種固有明記。"
  - "設定変更時のリールガックン条件・発生率。"
  - "設定変更専用のモード振り分け、短縮天井、初当たり/CZ優遇率。天井自体は非搭載。"

conflicts: []

researchNotes:
  - "性能コアは業界記事・HAZUSE・K-Navi・1geki・なな徹で照合。"
  - "機械割は市場予測/完全手順/超完全手順で定義が異なるため同一列に混ぜず分離。"
  - "resetBehaviorは最初の検索で止めず、機種名表記揺れ、正式型式S/マッピー/GS、メーカー名メーシーと設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間を組み替えて再探索。"
  - "解析表の『天井リセット/引き継ぎ』は一般テンプレート表記だが、本機は天井非搭載。そのため朝一狙いの実効天井値はNOT_APPLICABLEとして扱う。"
```
