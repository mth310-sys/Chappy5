# パチスロ モンスターハンター:ワールド™ 黄金狩猟 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1446
canonicalKey: 2021-12-06_monster-hunter-world-kogane-shuryo
machineName: パチスロ モンスターハンター:ワールド™ 黄金狩猟
manufacturer: エンターライズ
modelCode: S MHW 黄金狩猟ZC
inspectionCode: 1S0995
releaseDate: 2021-12-06
generation: 6.2号機
systemType: AT / 高純増擬似ボーナス / CZ経由
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_PARTIAL_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [98.1, 99.3, 100.5, 104.0, 105.8, 109.5]
  czInitialBySetting: ["1/277.7", "1/275.6", "1/273.2", "1/262.5", "1/258.6", "1/256.9"]
  atInitialBySetting: ["1/609.0", "1/588.8", "1/568.8", "1/518.5", "1/492.7", "1/469.8"]
  initialHitBySetting: "主要初当たりはCZ『歴戦王クエスト』1/277.7→1/256.9。AT『エルドラドボーナス』は1/609.0→1/469.8。"
  baseGamesPer50Coins: "約37.1G/50枚"
  netIncrease: "AT約6.7枚/G"
  basicPayout: "エルドラドボーナスは1セット20G・最大4セット。剥ぎ取りGOLDは1セット10G。いずれも純増約6.7枚/G。"
  normalCeiling: "CZ間800G+αで歴戦王クエスト / AT間2500GでAT"
  notes:
    - "6号機モンハンシリーズ初の高純増約6.7枚/G。"
    - "CZ歴戦王クエスト成功期待度は50%超。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "設定変更時は有利区間ランプ消灯を複数解析で確認。有利区間リセット自体は直接確認できるが、CZ間800G/AT間2500Gの各内部カウンタについて『設定変更時0から再計数』と明記した直接資料は十分な再探索後も固定できず UNVERIFIED_AFTER_RESEARCH。"
    modeState: "設定変更時の専用モード・内部状態初期振り分けは資料未確認。UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "RESET。設定変更時に有利区間ランプ消灯。通常時は点灯するタイプ。"
    morningStart: "朝一有利区間ランプ消灯なら設定変更濃厚、点灯なら据え置き濃厚。ただし前日がAT終了直後などランプ消灯状態で閉店、または店側対策時は例外。"
    benefit: "設定変更専用の短縮天井・初当たり優遇・専用モード等は当時解析で『調査中』が残り、後年資料でも明確な定量恩恵を固定できず。UNVERIFIED_AFTER_RESEARCH。"
    disadvantage: "設定変更専用の定量的不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "据え置き時のCZ間/AT間内部ゲーム数の引継ぎを直接明記した本機固有資料は十分な再探索後も固定できず UNVERIFIED_AFTER_RESEARCH。"
    modeState: "据え置き時の内部モード・状態の引継ぎ契約は UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "通常時ランプ点灯状態なら朝一点灯は据え置き濃厚。ただし消灯閉店等の例外あり。"
  powerOffOn:
    gameCountCeiling: "純電源OFF→ONのみのCZ間/AT間カウンタ契約は本機固有の直接資料を固定できず UNVERIFIED_AFTER_RESEARCH。"
    modeState: "純電源OFF→ON時の内部モード・状態の保持/再抽選は UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "純電断のみのランプ/有利区間保持契約を直接明記した本機固有資料は固定できず UNVERIFIED_AFTER_RESEARCH。"
  gameCounterReset: "設定変更で有利区間リセットは確認。CZ間800G・AT間2500Gの個別内部カウンタ挙動は直接記載不足のため推測補完しない。"
  ceilingAfterReset:
    resetSpecificShortening: "公開された設定変更専用の短縮天井値は確認できず。"
    distributions: []
  modeAfterReset:
    behavior: "設定変更専用モード/振り分けは UNVERIFIED_AFTER_RESEARCH。"
    resetSpecificDistribution: null
  stateAfterReset:
    behavior: "設定変更時の内部状態初期値は UNVERIFIED_AFTER_RESEARCH。"
    numeric: null
  advantageousSectionReset: "YES。設定変更時に有利区間ランプ消灯。AT終了時も消灯し、その後数Gで再点灯するためランプ消灯=設定変更確定ではない。"
  resetBenefits:
    - "設定変更専用の短縮天井・初当たり/CZ優遇・モード優遇は公開固定値を確認できず。"
  resetPenalties:
    - "設定変更専用の公開定量的不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有のガックン条件・発生率は UNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "有利区間ランプはクレジット右下ドット。通常時点灯型。朝一消灯=設定変更濃厚、点灯=据え置き濃厚。ただし前日消灯閉店・店舗対策は例外。"
    other: "ランプ以外の確定的な変更判別材料は固定できず。"
  numericResetData:
    resetSpecificPublishedNumericData: null
    note: "設定変更専用のモード振り分け、特定G以内当選率、短縮天井値、恩恵発生率は十分な再探索後も公開固定値を確認できず。"

sources:
  - url: https://news.p-world.co.jp/articles/18139/nippon
    sourceType: contemporary-industry
    usedFor: [manufacturer, modelCode, generation, performanceCore]
  - url: https://news.p-world.co.jp/articles/18776/greenbelt
    sourceType: contemporary-industry
    usedFor: [releaseDate, baseGamesPer50, netIncrease]
  - url: https://hazuse.com/machine/pachislot/1S0995/genre/201/
    sourceType: old-machine-database-analysis
    usedFor: [modelCode, inspectionCode, releaseDate, payoutRate, netIncrease, initialHit]
  - url: https://hazuse.com/machine/pachislot/1S0995/genre/207/
    sourceType: old-machine-database-analysis
    usedFor: [ceiling, advantageousSectionLamp, resetDetection]
  - url: https://www.pachibee.jp/machines/index/221100001
    sourceType: contemporary-industry-analysis
    usedFor: [releaseDate, systemType, netIncrease, basicPayout]
  - url: https://nana-press.com/kaiseki/machine/189/6797/
    sourceType: contemporary-analysis
    usedFor: [payoutRateBySetting, czInitialBySetting, atInitialBySetting]
  - url: https://nana-press.com/kaiseki/machine/189/7026/
    sourceType: contemporary-analysis
    usedFor: [advantageousSectionLamp, resetDetection]
  - url: https://www.slopachi-quest.com/article/monster-hunter-world-gold-tenjou/
    sourceType: analysis
    usedFor: [ceiling, resetResearchState, resetDetection, resetBenefits]
  - url: https://slotmethod.jp/archives/8078/
    sourceType: analysis
    usedFor: [resetDetection, resetBenefitResearchState]
  - url: https://pachiseven.jp/machines/6417/cutout/3
    sourceType: contemporary-analysis
    usedFor: [ceiling, resetResearchState]

unverifiedAfterResearch:
  - "設定変更時のCZ間800G/AT間2500G内部カウンタ個別リセット契約の直接記載"
  - "据え置き時のCZ間/AT間内部カウンタ・内部モード/状態の引継ぎ契約"
  - "純電源OFF→ON時のゲーム数・天井、内部モード/状態、有利区間保持契約"
  - "設定変更専用モード/状態初期振り分け"
  - "設定変更専用の短縮天井・初当たり/CZ優遇の公開数値"
  - "本機固有ガックン条件・発生率"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新main README、Mission v0.7、旧INDEX、LATEST_HANDOFF、直前No.1445「マイジャグラーV」を確認し、handoff指定の次機No.1446として追加。
- 型式 `S MHW 黄金狩猟ZC`、検定番号 `1S0995`、2021-12-06導入、エンターライズ製、6.2号機ATを業界記事・HAZUSE・複数解析で照合。
- 性能コアは設定別CZ/AT初当たり、機械割、約37.1G/50枚、純増約6.7枚/G、CZ間800G+α/AT間2500G天井を複数ソース照合。
- 設定変更時の有利区間ランプ消灯と通常時点灯型は複数解析で一致。朝一変更判別材料として保存したが、前日消灯閉店・店舗対策の例外を明示。
- 朝一内部状態・設定変更専用恩恵は当時資料で『調査中』が残存。表記揺れ、正式型式、リセット/設定変更/朝一/据え置き/電源OFF ON/有利区間/天井短縮/モード/ガックンを組み替えて再探索したが、純電断契約を含む本機固有の直接資料は固定できず UNVERIFIED_AFTER_RESEARCH。
- 2021-12-06群はOPEN。既知5機中2機処理済み。次は「S牙狼-黄金騎士-」。
