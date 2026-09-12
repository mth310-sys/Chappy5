# 主役は銭形3 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1448
canonicalKey: 2021-12-06_shuyaku-wa-zenigata3
machineName: 主役は銭形3
manufacturer: 平和
modelCode: S銭形3H2
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2021-12-06
generation: "6.2号機（複数資料表記。6.1号機表記もありCONFLICT）"
systemType: AT / 疑似ボーナス / CZ経由 / 差枚数管理
coreStatus: COMPLETE_CORE_WITH_GENERATION_LABEL_CONFLICT_AND_INSPECTION_CODE_UNVERIFIED
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_480G_REAL_GAME_CEILING_AND_HIGH_STATE_RATE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [L, 1, 2, 3, 5, 6]
  payoutRatePct:
    L: 75.9
    1: 97.5
    2: 98.5
    3: 100.7
    5: 106.0
    6: 110.0
  bonusInitialHitBySetting:
    L: UNVERIFIED_PUBLIC_VALUE
    1: "1/444.7"
    2: "1/432.2"
    3: "1/407.4"
    5: "1/360.4"
    6: "1/334.0"
  czInitialHitBySetting:
    L: UNVERIFIED_PUBLIC_VALUE
    1: "1/250.8"
    2: "1/248.1"
    3: "1/237.9"
    5: "1/229.6"
    6: "1/227.4"
  initialHitBySetting: "主要初当たりはBONUS初当たり1/444.7→1/334.0。CZ『デカ魂』初当たりは1/250.8→1/227.4。設定Lの比較可能な初当たり公開値は固定できず。"
  baseGamesPer50Coins: "約36.7G/50枚"
  netIncrease: "約6.0枚/G"
  basicPayout: "REGULAR BONUS 約100枚 / BIG BONUS 約400枚 / FUJIKO BONUS 約711枚。いずれも純増約6.0枚/Gの差枚数管理型疑似ボーナス。"
  normalCeiling: "内部カウンター最大999G+αでCZ『デカ魂』。別に実ゲーム数天井最大680G+α。モード別では通常A 999G+α、通常B 679G+α、通常C 479G+α、天国/超天国181G+α。"
  notes:
    - "設定4は非搭載。設定Lを含むL/1/2/3/5/6構成。"
    - "CZ『デカ魂』成功期待度は55%超。"
    - "上位的な特化要素『ルパン捕り放題』は平均期待約2000枚とされるが、物差しコアの基本獲得性能とは分離。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "内部カウンター/天井はRESET。設定変更後は実ゲーム数天井が通常最大680G+αから480G+αへ短縮。"
    modeState: "内部モードRESET・再抽選。内部状態もRESETされ、設定変更時は高確ゲーム数抽選を実施。公開値は非当選50.0%、高確30G 43.8%、高確50G 6.2%（別資料6.3%丸め）。"
    advantageousSection: "RESET。有利区間ランプ消灯。"
    morningStart: "ステージはセーヌ川。有利区間ランプ消灯なら設定変更濃厚、点灯なら据え置き濃厚。ただし店舗側の1G回し等の対策や前日消灯状態は例外。"
    benefit: "実ゲーム数天井480G+αへの短縮。加えて約50%で高確30Gまたは50Gから開始。"
    disadvantage: "設定変更専用の主要な定量的不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "据え置き時は天井を引き継ぐ。"
    modeState: "内部モード・内部状態を引き継ぐ。"
    advantageousSection: "有利区間ランプ状態を引き継ぐ。朝一点灯なら据え置き濃厚材料。"
  powerOffOn:
    gameCountCeiling: "純電源OFF→ONでは天井を引き継ぐ。"
    modeState: "純電源OFF→ONでは内部モード・内部状態を引き継ぐ。"
    advantageousSection: "有利区間ランプ状態を引き継ぐ。"
  gameCounterReset: "設定変更時RESET。純電源OFF→ON/据え置きでは引き継ぎ。"
  ceilingAfterReset:
    resetSpecificShortening: "実ゲーム数天井が最大680G+αから480G+αへ短縮。内部カウンター側の規定G数モードは再抽選。"
    distributions: []
  modeAfterReset:
    behavior: "設定変更時に内部モードを再抽選。設定変更専用の各モード正確振り分けは十分再探索後も直接固定できず UNVERIFIED_AFTER_RESEARCH。"
    resetSpecificDistribution: null
  stateAfterReset:
    behavior: "設定変更時に高確ゲーム数を抽選。非当選50.0%、高確30G 43.8%、高確50G 6.2%（資料に6.3%丸め表記あり）。高確15Gは設定変更時選択なし。"
    numeric:
      noHighPct: 50.0
      high30GPct: 43.8
      high50GPct: 6.2
  advantageousSectionReset: "YES。設定変更時は有利区間リセット・ランプ消灯。純電断/据え置きはランプ状態を引き継ぐ。"
  resetBenefits:
    - "実ゲーム数天井が最大680G+αから480G+αへ短縮。"
    - "設定変更時の約50%で高確30Gまたは50Gを選択。"
  resetPenalties:
    - "設定変更専用の比較可能な定量的不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有のガックン条件・発生率は、機種名/型式/平和/リセット/朝一/据え置き/ガックン等で再探索しても直接契約を固定できず UNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時は有利区間ランプが点灯するタイプ。朝一消灯で設定変更濃厚、朝一点灯で据え置き濃厚。前日消灯状態や店舗側対策は例外。"
    other: "設定変更/据え置き/純電断いずれも朝一ステージはセーヌ川とされ、ステージ単独では判別不可。"
  numericResetData:
    normalRealGameCeilingG: 680
    resetRealGameCeilingG: 480
    settingChangeHighStateTotalPct: 50.0
    settingChangeHigh30GPct: 43.8
    settingChangeHigh50GPct: 6.2
    note: "高確50Gは資料に6.2%/6.3%の丸め差あり。平均せず6.2%を詳細解析表の値として保存し、丸め差をconflictsへ記録。"

sources:
  - url: https://news.p-world.co.jp/articles/18795/greenbelt
    sourceType: contemporary-industry
    usedFor: [releaseDate, manufacturer, systemOverview, bonusPayout]
  - url: https://news.p-world.co.jp/articles/18092/yugitsushin
    sourceType: contemporary-industry
    usedFor: [releaseDate, netIncrease, bonusPayout, czExpectation]
  - url: https://www.p-world.co.jp/machine/database/9497
    sourceType: industry-database
    usedFor: [manufacturer, systemType, bonusPayout, normalCeiling, netIncrease]
  - url: https://nana-press.com/kaiseki/machine/162/6863/
    sourceType: contemporary-analysis
    usedFor: [payoutRate, czInitialHit, bonusInitialHitDetail, settingL]
  - url: https://nana-press.com/kaiseki/machine/162/6971/
    sourceType: contemporary-analysis
    usedFor: [settingChange, unchanged, resetCeiling, resetStateDistribution, advantageousSectionLamp]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/49/tj04.php
    sourceType: contemporary-analysis
    usedFor: [modeCeilings, modeResetTiming]
  - url: https://chonborista.com/slot/orinpia-slot/152935/
    sourceType: analysis
    usedFor: [baseGamesPer50, netIncrease, bonusInitialHit, payoutRate, resetBehavior, resetCeiling]
  - url: https://kanzenkokuchi.jp/news/2390.php
    sourceType: analysis
    usedFor: [settingChangeVsPowerCycle, resetStateDistribution, resetDetection, advantageousSection]
  - url: https://ichikatsu.com/zenigata3/
    sourceType: analysis
    usedFor: [normalRealGameCeiling, resetRealGameCeiling, baseGamesPer50]
  - url: https://www.marimo0925.net/pachislot-syuyakuhazenigata3-shinkisyu/
    sourceType: retrospective-machine-info
    usedFor: [modelCode]
  - url: https://zenrin-net.co.jp/10159/
    sourceType: industry-support
    usedFor: [modelCode]

unverifiedAfterResearch:
  - "検定番号（型式S銭形3H2自体は複数資料で確認）"
  - "設定LのBONUS/CZ初当たり比較値"
  - "設定変更専用の通常A/B/C/天国/超天国の正確な各モード振り分け"
  - "本機固有ガックン条件・発生率"

conflicts:
  - "世代表記は複数の2021年当時/後年解析で6.2号機、一部解析資料で6.1号機。平均や独自補正をせず表記競合として保持。"
  - "設定変更時の高確50G振り分けは6.2%と6.3%の資料差。合計100%との整合から生じる丸め差とみられるが、平均せず双方の存在を保持。"
```

## QAメモ
- 2026-09-12: 最新main README、Mission v0.7、旧INDEX、LATEST_HANDOFF、直前No.1447を確認し、handoff指定の次機No.1448として追加。
- 2021-12-06導入、平和、型式 `S銭形3H2`、AT純増約6.0枚/G、REG約100枚/BIG約400枚/FUJIKO BONUS約711枚を業界記事・P-WORLD・複数解析で照合。
- 機械割は設定L/1/2/3/5/6 = 75.9/97.5/98.5/100.7/106.0/110.0%。主要BONUS初当たり1/444.7→1/334.0、CZ初当たり1/250.8→1/227.4、約36.7G/50枚を保存。
- resetBehaviorは設定変更時の実ゲーム数天井480G+α、内部モード/状態RESET、約50%高確開始、設定変更時ランプ消灯、純電断/据え置き引継ぎを収録。
- 世代表記6.2号機/6.1号機の資料差はCONFLICTとして保持。検定番号は十分再探索しても固定できず推測しない。
- 2021-12-06群は既知5機中4機処理済み。次は「スターパルサー」。
