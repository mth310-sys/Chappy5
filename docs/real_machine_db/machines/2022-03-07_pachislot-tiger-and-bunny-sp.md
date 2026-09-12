# パチスロ TIGER ＆ BUNNY SP — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1485
canonicalKey: 2022-03-07_pachislot-tiger-and-bunny-sp
machineName: "パチスロ TIGER ＆ BUNNY SP"
alternateName: "Sタイガー＆バニーSP / タイバニSP"
manufacturer: "山佐ネクスト"
modelCode: "Sパチスロタイガー＆バニーSPYTFF"
inspectionCode: "1S1307"
releaseDate: 2022-03-07
generation: "6.2号機"
systemType: "CZ経由+直撃対応・セット数管理型AT"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_MORNING_NUMERIC_DATA
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.9
    "2": 99.0
    "3": 101.0
    "4": 105.5
    "5": 108.5
    "6": 111.0
  czBySetting:
    definition: "CZ『ライジングチャンス』初当たり"
    "1": "1/377.5"
    "2": "1/364.7"
    "3": "1/342.1"
    "4": "1/290.6"
    "5": "1/273.5"
    "6": "1/256.9"
  atBySetting:
    definition: "AT『グッドラックタイム』初当たり"
    "1": "1/596.7"
    "2": "1/555.1"
    "3": "1/492.7"
    "4": "1/355.0"
    "5": "1/296.3"
    "6": "1/263.7"
  baseGamesPer50Coins: "約38.8G/50枚（資料により約38G表記。なな徹は38.8〜39.2G）"
  netIncrease: "約2.5枚/G"
  basicPayout:
    at: "AT『グッドラックタイム』の主区間『ヒーロードライブ』は1セット5G、最低5セット+α。"
    setting1AverageAt: "約719枚（設定1、解析資料掲載値）"
    stockPerformance: "セットストック確率約1/6.3、平均24.4セット（いずれも設定1）。"
    upperFlow: "ベル15連や金7揃い等からマックスドライブへ移行するとエンディング到達のハイチャンス。"
  normalCeiling:
    max: "有利区間移行後、通常時最大600G+α（最大666G）でCZまたはAT。"
    byMode:
      normalA: "600G+α（最大666G）"
      normalB: "600G+α（最大666G）"
      chance: "400G+α（最大466G）"
      comeback: "300G+α（最大366G）"
      sp: "100G+α（最大166G）"
  modeSpecificMinimumData:
    normalModes: "通常A / 通常B / チャンス / 引き戻し / SPの5モード。モードごとに規定G数のマップと天井が変化。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。"
    modeState: "内部モード・内部状態をRESET。"
    advantageousSection: "RESET。"
    morningStart: "有利区間移行時抽選を新規実行。通常時は有利区間ランプ非点灯型。"
    benefit: "有利区間リセット後は100G以内のAT当選時に専用AT『セレブレーション』へ突入。解析上、設定1の天国ループ率は約34%。"
    disadvantage: "前日の天井進行・内部モード・内部状態・有利区間を失う。設定変更専用の追加不利数値は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。"
    modeState: "内部モード・内部状態をCARRY_OVER。"
    advantageousSection: "CARRY_OVER。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。"
    modeState: "内部モード・内部状態をCARRY_OVER。"
    advantageousSection: "CARRY_OVER。"
  gameCounterReset: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    fixedShortening: "設定変更専用の固定短縮天井は確認できず。リセット後に内部モードを再抽選するため、選択モードにより最大166/366/466/666Gへ変化。"
    normalMax: "666G"
  modeAfterReset:
    behavior: "設定変更で再抽選。据え置き・純電断は引継ぎ。"
    resetStartRareRoleRule: "有利区間移行時にレア小役成立ならチャンスモード以上。弱レア役時はチャンス50.0% / 引き戻し37.5% / SP12.5%、チャンス目時は引き戻し50.0% / SP50.0%、強チェリー時はSP100%。"
  stateAfterReset:
    behavior: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER。"
  advantageousSectionReset: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER。CZ『ライジングチャンス』突入時またはAT直撃時にランプ点灯、CZ/AT終了時に消灯。"
  resetBenefits:
    - "有利区間リセット後100G以内にAT当選すると専用AT『セレブレーション』へ突入。40/60/80/100Gが各25.0%。100G完走時はタイバニラッシュ濃厚。"
    - "有利区間リセット後の天国ループ率は解析上約34%（設定1）。"
    - "有利区間移行時にレア小役を引けばチャンス以上の内部モードが確定。"
  resetPenalties:
    - "前日の天井G・内部モード・内部状態を失う。公開された設定変更専用の追加不利数値は確認できず。"
  resetDetection:
    lampDisplay: "通常時は有利区間ランプが消灯しているタイプのため、朝一の点灯/消灯だけでは設定変更判別不可。"
    reelBehavior: "本機固有の設定変更時ガックン発生条件・発生率は PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
  numericResetData:
    heavenLoopAfterAdvantageousSectionReset_setting1: "約34%"
    beneficialFlagsAtAdvantageousSectionStart_setting1:
      risingChanceEX: "2.3%"
      lunaticBattle: "1.0%"
    resetStartRareRoleModeDistribution:
      weakRare:
        chance: "50.0%"
        comeback: "37.5%"
        sp: "12.5%"
      chanceRole:
        comeback: "50.0%"
        sp: "50.0%"
      strongCherry:
        sp: "100%"
    celebrationDuration:
      "40G": "25.0%"
      "60G": "25.0%"
      "80G": "25.0%"
      "100G": "25.0%"

sources:
  - url: https://news.p-world.co.jp/articles/19381/greenbelt
    sourceType: industry-primary-secondary
    usedFor: [releaseDate, manufacturer, systemType, payoutRange, czRange, atRange, baseGamesPer50, netIncrease, atStructure]
  - url: https://news.p-world.co.jp/articles/19314/nippon
    sourceType: industry-primary-secondary
    usedFor: [modelCode, releaseWindow, czRange, atRange, netIncrease, atStructure]
  - url: https://news.p-world.co.jp/articles/19293/playgraph
    sourceType: industry-primary-secondary
    usedFor: [releaseDate, netIncrease, czExpectation, atStructure]
  - url: https://hazuse.com/machine/pachislot/1S1307/
    sourceType: analysis-high-historical
    usedFor: [modelCode, inspectionCode, generation, releaseDate, resetBehavior, powerCycleBehavior, ceilingByMode, resetDetection, celebration]
  - url: https://hazuse.com/machine/pachislot/1S1307/genre/201/
    sourceType: analysis-high-historical
    usedFor: [payoutRate, cz, at, baseGamesPer50, netIncrease]
  - url: https://nana-press.com/kaiseki/machine/307/8221/
    sourceType: analysis-high
    usedFor: [payoutRate, czBySetting, atBySetting]
  - url: https://nana-press.com/kaiseki/machine/307/8224/
    sourceType: analysis-high
    usedFor: [ceilingByMode]
  - url: https://nana-press.com/kaiseki/machine/307/8446/
    sourceType: analysis-high
    usedFor: [settingChange, unchanged, lampDisplay, advantageousSectionStartFlags]
  - url: https://nana-press.com/kaiseki/machine/307/
    sourceType: analysis-high
    usedFor: [baseGamesPer50, generation, releaseDate]
  - url: https://ichikatsu.com/tigerandbunnysp/
    sourceType: analysis-secondary
    usedFor: [resetStartRareRoleModeDistribution]
  - url: https://1geki.jp/slot/s_tiger_bunny_sp/0/
    sourceType: analysis-secondary
    usedFor: [heavenLoopAfterReset]
  - url: https://chonborista.com/slot/yamasa-slot/161810/
    sourceType: analysis-secondary
    usedFor: [payoutRateCrossCheck, czCrossCheck, atCrossCheck, baseGamesPer50, setting1AverageAt]

unverifiedAfterResearch:
  - "本機固有の設定変更時リールガックン発生条件・発生率。機種名・型式名・山佐/山佐ネクスト・リセット/朝一/ガックンの組み合わせを変えて再探索したが直接契約を固定できず。"
  - "レア小役非成立時の有利区間移行時モード全設定別振り分け。朝一比較に使える公開値として天国ループ率約34%（設定1）は確認したが、通常A〜SPの全初期比率は固定できず。"

conflicts:
  - field: baseGamesPer50Coins
    values: ["約38G", "約38.8G", "38.8〜39.2G"]
    treatment: "丸め/設定差を含む表記差として平均せず併記。代表値は解析ページの約38.8Gを採用。"

researchNotes:
  - "型式Sパチスロタイガー＆バニーSPYTFFは遊技日本記事、検定番号1S1307はHAZUSE機種DBで確認。"
  - "設定変更/据え置き/純電断の天井・内部モード・内部状態・有利区間契約はHAZUSEの比較表と、なな徹の設定変更/据え置き表でクロスチェック。"
  - "通常時は有利区間ランプ非点灯型のため、設定変更で消灯しても朝一ランプ単独判別はできない。"
  - "100G以内AT時のセレブレーションは設定変更限定ではなく有利区間リセット共通恩恵として保存。"
```
