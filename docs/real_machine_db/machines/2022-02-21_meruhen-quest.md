# メルヘンクエスト — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1481
canonicalKey: 2022-02-21_meruhen-quest
machineName: メルヘンクエスト
alternateName: "SLOTメルヘンクエスト-ワールドウォーズ-"
manufacturer: "ジェイピーエス（JPS）"
modelCode: "Sオリスロ4AA"
inspectionCode: "UNVERIFIED_AFTER_RESEARCH"
releaseDate: 2022-02-21
generation: "6.2号機（複数解析資料表記。HAZUSEは広義の6号機表記）"
systemType: "ノーマルAタイプ / PB機 / ボーナス主体 / PLUSシステム"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_MACHINE_SPECIFIC_STATE_POWER_AND_GAKKUN
confidence: HIGH_CORE_MEDIUM_GENERATION_RESET_NON_APPLICABLE_FIELDS_HIGH_MACHINE_SPECIFIC_STATE_POWER_GAKKUN_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["5", "6", "P"]
  payoutRatePctMarket:
    "5": 99.4
    "6": 100.6
    "P": 102.3
  payoutRatePctFullProcedure:
    "5": 101.6
    "6": 103.1
    "P": 105.1
  initialHitBySetting:
    definition: "ボーナス合算"
    "5": "1/123.7"
    "6": "1/109.2"
    "P": "1/109.2"
  bonusProbability:
    BIG:
      "5": "1/172.5"
      "6": "1/218.5"
      "P": "1/218.5"
    REG:
      "5": "1/436.9"
      "6": "1/218.5"
      "P": "1/218.5"
  baseGamesPer50Coins:
    nominal: "約36G/50枚"
    strawberryAim: "36.2～37.3G/50枚"
    allSmallRolesAcquired: "38.0～41.6G/50枚"
    note: "解析資料で打ち方別に定義が異なるため混合せず併記。"
  netIncrease: "NOT_APPLICABLE（ノーマルボーナス機）"
  basicPayout: "BIG 195枚 / REG 最大104枚"
  normalCeiling: "非搭載"
  modeSpecificMinimumData:
    privateBrand: "メルヘンワールド（カツヨシ商事）とJPSの共同PB。JPS『Sオリスロ4シリーズ / オリスロ4 PLUS』ベース。"
    plusSystem: "小役払い出し1枚=1ptで累積し、500ptごとにステータス上昇。2000pt以上の虹状態では小役告知率99.9%。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "AT/CZ用モード・天井モードなし。PLUSシステムの累積ポイント/ステータスが設定変更で初期化されるかは、機種名・型式・ベース機を変えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "ノーマルAタイプの朝一有利区間狙いに関する機種固有公開情報を確認できず、実用上NOT_APPLICABLEとして扱う。"
    morningStart: "設定変更専用ステージ・朝一専用モード・短縮天井は確認できず。"
    benefit: "短縮天井、CZ/AT優遇、専用モード等はNOT_APPLICABLE。設定変更専用のボーナス優遇率も確認できず。"
    disadvantage: "公開された設定変更専用の主要不利数値は確認できず。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "PLUS累積ポイント/ステータスおよび成立済みボーナス状態の据え置き時の機種固有契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLEとして扱う。"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "純電源OFF→ON時のPLUS累積ポイント/ステータス、成立済みボーナス状態の機種固有契約は、Sオリスロ4AA/オリスロ4 PLUS/JPSを含めて再探索したがUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLEとして扱う。"
  gameCounterReset: "NOT_APPLICABLE。ゲーム数天井なし。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE。天井非搭載。"
    normalCeiling: "NOT_APPLICABLE"
  modeAfterReset:
    behavior: "NOT_APPLICABLE。AT/CZ用の通常モード・朝一専用モードなし。"
  stateAfterReset:
    behavior: "PLUSシステムの累積ポイント/ステータスと成立済みボーナス状態について、設定変更/据え置き/純電断の直接契約はUNVERIFIED_AFTER_RESEARCH。一般論から推測補完しない。"
  advantageousSectionReset: "NOT_APPLICABLEとして扱う（ノーマルAタイプで朝一攻略用の有利区間挙動を確認できず）。"
  resetBenefits:
    - "天井非搭載のため短縮天井なし。"
    - "設定変更専用のモード・CZ/AT優遇・公開朝一当選率は確認できず。"
  resetPenalties:
    - "公開された主要な設定変更専用不利数値は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン条件/発生率は、メルヘンクエスト/SLOTメルヘンクエスト/Sオリスロ4AA/オリスロ4 PLUS/JPSと設定変更・リセット・朝一・据え置き・電源OFF ON・ガックンを組み替えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "PLUSランプ/セグは通常ゲーム中のポイント状態表示用途。設定変更/据え置きを確定できるランプ契約は確認できず。"
    morningBehavior: "設定変更専用の外見上確定挙動は確認できず。"
  numericResetData:
    resetSpecificCeiling: "NOT_APPLICABLE"
    resetSpecificModeDistribution: "NOT_APPLICABLE"
    resetSpecificHitRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    plusPointResetValue: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://web-greenbelt.jp/post-56150/
    sourceType: industry-primary
    usedFor: [manufacturer, privateBrand, releaseDate, baseMachineSeries, systemType, bonusProbability, payoutRates, bigPayout, regPayout]
  - url: https://pachinko-curation.com/28698/
    sourceType: industry-secondary
    usedFor: [modelCode, modelInspectionPassTiming, releaseDate, generationContext, performanceCore]
  - url: https://www.p-world.co.jp/machine/database/9589
    sourceType: old-machine-db
    usedFor: [bonusProbability, bigPayout, regPayout]
  - url: https://hazuse.com/machine/pachislot/SX0044/
    sourceType: old-machine-db-analysis-high
    usedFor: [releaseDate, systemType, bonusProbability, payoutRates, baseGamesPer50, ceilingNotEquipped, plusSystem]
  - url: https://hazuse.com/machine/pachislot/SX0044/genre/201/
    sourceType: old-machine-db-analysis-high
    usedFor: [bonusProbability, payoutRates, baseGamesPer50, bigPayout, regPayout]
  - url: https://pachiseven.jp/machines/6501
    sourceType: analysis-high
    usedFor: [releaseDate, manufacturer, systemType, ceilingNotEquipped, bonusProbability]
  - url: https://pachiseven.jp/machines/6501/cutout/8
    sourceType: analysis-high
    usedFor: [bigPayout, regPayout]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/48/kh02.php
    sourceType: analysis-high-historical
    usedFor: [bonusProbability, payoutRates]
  - url: https://www.slopachi-quest.com/article/meruhenkuesuto-settei/
    sourceType: analysis-secondary
    usedFor: [generation, releaseDate, baseGamesPer50, bonusProbability, payoutRates]
  - url: https://chonborista.com/slot/jps-slot/134601/
    sourceType: analysis-secondary-base-machine
    usedFor: [baseMachineIdentity, ceilingNotEquipped, performanceCrossCheck]

unverifiedAfterResearch:
  - "検定番号。型式Sオリスロ4AAの検定通過自体は確認できたが、公開検定番号を固定できず。"
  - "設定変更/据え置き/純電源OFF→ON時のPLUS累積ポイント/ステータスの初期化・保持契約。"
  - "設定変更/据え置き/純電源OFF→ON時の成立済みボーナス状態の機種固有契約。"
  - "本機固有の設定変更時ガックン条件・発生率。"
  - "設定変更専用の公開朝一当選率等の数値。"

conflicts:
  - field: "generation_label"
    status: "LABEL_VARIATION"
    values: "スロパチクエスト等は6.2号機、HAZUSEは広義に6号機ノーマルと表記。"
    handling: "6.2号機表記を採用し、広義6号機表記も注記。数値競合ではない。"
  - field: "baseGamesPer50Coins"
    status: "DEFINITION_DIFFERENCE_NOT_AVERAGED"
    values: "約36G/50枚（一般掲載） / 36.2～37.3G（イチゴ狙い） / 38.0～41.6G（小役全取得）。"
    handling: "打ち方・取得条件が異なるため平均せず併記。"

researchNotes:
  - "最初の検索で欠損扱いにせず、メルヘンクエスト/SLOTメルヘンクエスト-ワールドウォーズ-/Sオリスロ4AA/オリスロ4 PLUS/JPS/メルヘンワールドを使い分け、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ポイント/ガックン/有利区間を組み替えて再探索。"
  - "PB名称とベース型式を混同せず、メルヘンクエストを独立レコードとして登録。"
  - "天井非搭載ノーマル機のため、ゲーム数天井・短縮天井・AT/CZモード欄は空欄にせずNOT_APPLICABLEを明示。"
```
