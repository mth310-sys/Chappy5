# S牙狼-黄金騎士- — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1447
canonicalKey: 2021-12-06_s-garo-ogon-kishi
machineName: S牙狼-黄金騎士-
manufacturer: サボハニ（大都技研×サンセイR&Dコラボ）
modelCode: S牙狼-黄金騎士-SA4
inspectionCode: 1S0765
releaseDate: 2021-12-06
generation: 6.2号機
systemType: AT / CZ経由 / セット数管理AT
coreStatus: COMPLETE_CORE_WITH_SETTING_L_PUBLIC_VALUES_UNVERIFIED
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_SHORT_CZ_CEILING_AND_YA_MODE_RATE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [L, 1, 2, 4, 5, 6]
  payoutRatePct:
    L: UNVERIFIED_PUBLIC_VALUE
    1: 97.7
    2: 98.9
    4: 103.1
    5: 105.0
    6: 110.1
  initialHitCombinedBySetting:
    L: UNVERIFIED_PUBLIC_VALUE
    1: "1/227.7"
    2: "1/223.4"
    4: "1/208.9"
    5: "1/201.4"
    6: "1/185.6"
  initialHitBySetting: "黄金騎士CHANCE・呀バトル・魔戒RUSHの初当たり合成は設定1 1/227.7、2 1/223.4、4 1/208.9、5 1/201.4、6 1/185.6。設定Lの比較可能な公開値は確認できず。"
  baseGamesPer50Coins: "約30.2G/50枚"
  netIncrease: "呀バトル / 魔戒RUSHとも約2.8枚/G"
  basicPayout: "呀バトルは20G継続のAT。メインAT『魔戒RUSH』は1セット30G / 50G / 100Gのセット数管理型。"
  normalCeiling: "CZ『黄金騎士CHANCE』間600G+α / 呀バトル・魔戒RUSH間1500G+α"
  notes:
    - "設定L搭載。デモ画面中の下パネル消灯が設定Lの判別要素として公開されている。"
    - "設定3は搭載せず、通常運用設定は1/2/4/5/6。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "CZ間天井は通常600G+αから400Gへ短縮。AT側（呀バトル・魔戒RUSH間1500G+α）の内部カウンタは設定変更時RESET。"
    modeState: "設定変更時は呀モード移行抽選を行い、全設定共通15.2%で呀モードへ。呀モード滞在中は次回呀バトル勝利が確定。その他の初期状態振り分けは設定別公開値があるが、物差し用途ではリセット固有値15.2%を優先保存。"
    advantageousSection: "RESET。設定変更時は有利区間ランプ消灯。"
    morningStart: "前日閉店時に有利区間ランプ点灯を確認でき、朝一消灯なら設定変更濃厚。朝一点灯なら据え置き濃厚。ただし店舗側の対策は例外。"
    benefit: "CZ天井400Gへの短縮と、呀モード移行率15.2%への優遇。"
    disadvantage: "設定変更専用の比較可能な定量的不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "据え置き時のCZ/AT内部ゲーム数について、本機固有の直接契約を十分再探索しても固定できず UNVERIFIED_AFTER_RESEARCH。朝一ランプ点灯は据え置き濃厚材料。"
    modeState: "据え置き時の呀モード・その他内部状態の直接契約は UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "前日点灯状態から朝一点灯なら据え置き濃厚。ただし店舗側対策は例外。"
  powerOffOn:
    gameCountCeiling: "純電源OFF→ONではCZ天井・AT天井とも引き継ぐ。"
    modeState: "純電源OFF→ONでは呀モードを引き継ぐ。その他の内部状態契約は公開資料不足のため UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "純電断のみの有利区間ランプ表示契約を明示した高信頼資料は固定できず、一般論から補完しない。"
  gameCounterReset: "設定変更でAT側カウンタRESET。CZ側は設定変更専用400G天井へ切替。純電源OFF→ONではCZ/AT天井を引き継ぐ。"
  ceilingAfterReset:
    resetSpecificShortening: "CZ間天井は通常600G+αから設定変更時400Gへ短縮。AT側は1500G+αのままカウンタRESET。"
    distributions: []
  modeAfterReset:
    behavior: "設定変更時は呀モードを15.2%で抽選。呀モードなら次回呀バトル勝利確定。"
    resetSpecificDistribution:
      yaModePct: 15.2
  stateAfterReset:
    behavior: "リセット固有で比較可能な主要状態値は呀モード15.2%。その他の内部状態初期振り分けは本DBの必要粒度を超えるため詳細保存しない。"
    numeric: null
  advantageousSectionReset: "YES。設定変更時に有利区間ランプ消灯。通常時は基本消灯だが、黄金騎士CHANCE失敗後は点灯するため前日状態を合わせて判定する。"
  resetBenefits:
    - "CZ天井が600G+αから400Gへ短縮。"
    - "呀モード移行率が全設定共通15.2%。呀モードなら次回呀バトル勝利確定。"
  resetPenalties:
    - "設定変更専用の主要な定量的不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有のガックン条件・発生率は十分再探索後も UNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "有利区間ランプはクレジット左の2連ランプ下側。前日点灯→朝一消灯で設定変更濃厚、朝一点灯で据え置き濃厚。設定変更時・呀バトル失敗時・魔戒RUSH終了時に消灯。店舗対策は例外。"
    other: "設定Lはデモ画面中の下パネル消灯で判別可能だが、これは設定変更/据え置き判別とは別の設定L固有判別。"
  numericResetData:
    normalCzCeilingG: 600
    resetCzCeilingG: 400
    normalAtCeilingG: 1500
    yaModeAfterSettingChangePct: 15.2
    note: "設定変更時のみCZ天井短縮。呀モード15.2%は全設定共通のリセット専用公開値。"

sources:
  - url: https://news.p-world.co.jp/articles/18139/nippon
    sourceType: contemporary-industry
    usedFor: [machineName, manufacturer, releaseDate, generation, netIncrease]
  - url: https://www.p-world.co.jp/machine/database/9512
    sourceType: industry-database
    usedFor: [modelIdentity, yaMode, resetNumericData]
  - url: https://hazuse.com/machine/pachislot/1S0765/
    sourceType: old-machine-database-analysis
    usedFor: [inspectionCode, settings, payoutRate, initialHit, ceiling]
  - url: https://hazuse.com/machine/pachislot/1S0765/genre/208/
    sourceType: old-machine-database-analysis
    usedFor: [yaModeAfterSettingChange]
  - url: https://nana-press.com/kaiseki/machine/159/6771/
    sourceType: contemporary-analysis
    usedFor: [normalCeiling, resetCzCeiling]
  - url: https://nana-press.com/kaiseki/machine/159/7036/
    sourceType: contemporary-analysis
    usedFor: [advantageousSectionLamp, resetDetection, yaModeAfterSettingChange]
  - url: https://ichikatsu.com/garoougon/
    sourceType: analysis
    usedFor: [settingChangeVsPowerCycle, resetCzCeiling, atCeilingReset, yaModeCarryOver]
  - url: https://1geki.jp/slot/s_garo_golden_knight/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, payoutRate, initialHit, settingL, netIncrease, basicPayout]
  - url: https://www.slopachi-quest.com/article/garo-goldknight-settei/
    sourceType: analysis
    usedFor: [baseGamesPer50, payoutRate, initialHit, generation]

unverifiedAfterResearch:
  - "設定Lの機械割・初当たり合成の比較可能な公開数値"
  - "据え置き時のCZ/AT内部カウンタ、呀モードその他内部状態の機種固有直接契約"
  - "純電源OFF→ON時の有利区間ランプ表示契約と、呀モード以外の内部状態保持契約"
  - "本機固有ガックン条件・発生率"

conflicts:
  - "通常有利区間開始時の設定1呀モード移行率は資料に5.1% / 5.5%差がある。ただし設定変更時15.2%は複数資料で一致し、本レコードのリセット固有値には競合なし。"
```

## QAメモ
- 2026-09-12: 最新main README、Mission v0.7、旧INDEX、LATEST_HANDOFF、直前No.1446を確認し、handoff指定の次機No.1447として追加。
- 型式 `S牙狼-黄金騎士-SA4`、検定番号 `1S0765`、2021-12-06導入、6.2号機ATを業界記事・P-WORLD・HAZUSE・複数解析で照合。
- 性能コアは設定1/2/4/5/6の機械割・初当たり合成、約30.2G/50枚、純増約2.8枚/Gを複数資料で一致確認。設定Lは搭載事実と判別要素は確認できるが機械割/初当たり数値は公開固定値を確認できないため推測しない。
- resetBehaviorは設定変更時CZ天井400G、AT側カウンタRESET、呀モード15.2%、設定変更時ランプ消灯、純電断時CZ/AT天井および呀モード引継ぎを収録。
- 2021-12-06群は既知5機中3機処理済み。次は「主役は銭形3」。
