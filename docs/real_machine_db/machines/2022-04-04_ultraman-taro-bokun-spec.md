# ぱちスロ ウルトラマンタロウ 暴君SPEC — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1487
canonicalKey: 2022-04-04_ultraman-taro-bokun-spec
machineName: "ぱちスロ ウルトラマンタロウ 暴君SPEC"
alternateName: "Sウルトラマンタロウ 暴君SPEC / ウルトラマンタロウ 暴君（タイラント）SPEC"
manufacturer: "オッケー.（京楽系）"
modelCode: "SパチスロウルトラマンタロウMG"
inspectionCode: "1S1213"
releaseDate: 2022-04-04
generation: "6.2号機"
systemType: "AT"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "4", "5", "6"]
  payoutRatePct:
    "1": 97.6
    "2": 98.8
    "4": 102.5
    "5": 106.4
    "6": 110.1
  initialHitBySetting:
    at:
      "1": "1/472.0"
      "2": "1/341.8"
      "4": "1/264.7"
      "5": "1/212.8"
      "6": "1/152.2"
    czTyrant:
      "1": "1/207.8"
      "2": "1/173.7"
      "4": "1/149.6"
      "5": "1/133.7"
      "6": "1/109.6"
    specialCzBaltan:
      "1": "1/2167.3"
      "2": "1/1748.6"
      "4": "1/1470.1"
      "5": "1/1262.3"
      "6": "1/925.7"
  baseGamesPer50Coins: "約32.9G/50枚"
  netIncrease: "AT ULTRA RUSH 約2.7枚/G"
  basicPayout:
    atSet: "1セット37G+α（前半30G+α + 継続バトル7G）"
    continuation: "AT継続率 約80%（設定1）"
    completeRoute: "一撃2400枚獲得（有利区間完走）後はCZ『タイラント撃破チャレンジ EXTRA』へ。成功期待度約40%。"
  normalCeiling:
    cycle: "9周期消化（1周期約78G。解析資料では約900G前後目安）でCZ濃厚"
    mechCounter: "メカカウンタ0pt到達でCZ濃厚"
  modeSpecificMinimumData: "通常時はZATポイントを貯め、周期到達後のZAT BATTLE等からCZを目指す。ATはゲーム数上乗せ+継続抽選型。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。周期天井・メカカウンタ天井を含む天井進行はリセット。"
    modeState: "RESET。ウルトラLEVEL・内部状態はリセット。"
    advantageousSection: "RESET。設定変更時は有利区間リセット。"
    morningStart: "設定変更直後は有利区間ランプ消灯。解析では設定変更後1G目に有利区間ランプ点灯とされる。固定の短縮天井は確認できない。"
    benefit: "有利区間開始契機とCZの関係から朝一内部CZの可能性が指摘されるが、設定変更時にCZ確定とは確認できない。"
    disadvantage: "設定変更専用の公開された主要不利数値は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。設定変更を伴わない据え置きは天井進行を引き継ぐものとして、電源ON/OFF比較資料と朝一ランプ判別資料が整合。"
    modeState: "CARRY_OVER。ウルトラLEVEL・内部状態を引き継ぐ。"
    advantageousSection: "CARRY_OVER。有利区間を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。天井を引き継ぐ。"
    modeState: "CARRY_OVER。ウルトラLEVEL・内部状態を引き継ぐ。"
    advantageousSection: "CARRY_OVER。有利区間を引き継ぐ。"
  gameCounterReset: "設定変更=RESET / 据え置き・純電源OFF→ON=CARRY_OVER。周期進行とメカカウンタ天井を含む。"
  ceilingAfterReset:
    fixedShortening: "NO_PUBLIC_FIXED_SHORTENING_FOUND_AFTER_RESEARCH"
    normalMax: "9周期消化（約900G前後目安）またはメカカウンタ0ptでCZ濃厚"
  modeAfterReset:
    behavior: "ウルトラLEVEL等をリセット。設定変更専用のモード振り分け数値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "内部状態RESET。設定変更時の状態振り分け数値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
  advantageousSectionReset: "設定変更でRESET。通常時は有利区間ランプ点灯型で、朝一消灯は設定変更濃厚、点灯は据え置き濃厚。ただし前日終了状態・店舗対策は例外。"
  resetBenefits:
    - "固定の天井短縮は確認できない。"
    - "朝一内部CZの可能性が複数解析で言及されるが、設定変更時確定恩恵としては扱わない。"
  resetPenalties:
    - "設定変更専用の主要な不利要素・不利数値は確認できず。"
  resetDetection:
    lampDisplay: "WIN表示右下ドットの有利区間ランプ。朝一消灯=設定変更濃厚、点灯=据え置き濃厚。前日が非有利区間/消灯状態で閉店した場合や店側対策を除く。"
    reelBehavior: "本機固有の設定変更時ガックン条件・発生率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    note: "設定変更時はランプ消灯後、解析上1G目で点灯。ランプだけで100%断定せず濃厚材料として扱う。"
  numericResetData:
    confirmedMachineSpec: "設定変更専用のモード振り分け、短縮天井、CZ突入率など確定公開数値はNO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH。"
    empiricalMorningSample: "当時の公開実戦メモに、朝一266台中11台が2G当選（約4.1%）という観測あり。全てREG表示で内部CZ告知と推定されるが、設定変更済み台のみの母集団とは確認できず、実機仕様値ではないためLOW_CONFIDENCE_EMPIRICALとして分離。"

sources:
  - url: https://www.kyoraku.co.jp/news/detail/621
    sourceType: official
    usedFor: [releaseDate, manufacturer, systemType, netIncrease, atSet, continuation, gameplay, completeRoute]
  - url: https://news.p-world.co.jp/articles/20093/nippon
    sourceType: industry
    usedFor: [releaseDate, modelCode, netIncrease, atSet, completeRoute]
  - url: https://www.p-world.co.jp/machine/database/9609
    sourceType: industry-database
    usedFor: [systemType, netIncrease, gameplay, completeRoute]
  - url: https://hazuse.com/machine/pachislot/1S1213/
    sourceType: historical-analysis-high
    usedFor: [modelCode, inspectionCode, releaseDate, payoutRateRange, netIncrease, ceiling, settingChangeBehavior, powerCycleBehavior, advantageousSection, resetDetection]
  - url: https://p.hisshobon.jp/machine/3868/1/88173
    sourceType: analysis-high
    usedFor: [releaseDate, payoutRateBySetting, atInitialHitBySetting, netIncrease]
  - url: https://chonborista.com/slot/kyoraku-slot/165309/
    sourceType: analysis-high
    usedFor: [generation, baseGamesPer50, payoutRateBySetting, czRates, atInitialHitBySetting, ceiling, advantageousSection, resetDetection, morningCzPossibility]
  - url: https://1geki.jp/slot/s_ultraman_taro/
    sourceType: analysis-high
    usedFor: [releaseDate, payoutRateBySetting, atInitialHitBySetting, netIncrease, atSet]
  - url: https://slot-seven.com/ultramantaro-tenzyou/
    sourceType: analysis
    usedFor: [settingChangeBehavior, powerCycleBehavior, advantageousSectionLampTiming, resetDetection]
  - url: https://ichikatsu.com/ultramantaro/
    sourceType: analysis
    usedFor: [payoutRateBySetting, czRates, atInitialHitBySetting, baseGamesPer50, powerCycleBehavior, resetDetection]
  - url: https://mokkun7.com/victory/tarou-slot/
    sourceType: retrospective-empirical
    usedFor: [empiricalMorningSample]
  - url: https://news.p-world.co.jp/articles/18388/nippon
    sourceType: industry-inspection
    usedFor: [modelCodeInspectionCrossCheck]

unverifiedAfterResearch:
  - "本機固有の設定変更時ガックン条件・発生率。機種名・型式名に『ガックン』『リール』『設定変更』『朝一』を組み合わせて再探索したが直接資料を固定できず。"
  - "設定変更時専用のウルトラLEVEL/内部状態の振り分け数値。リセットされること自体は複数資料で確認したが、初期振り分けは公開値を固定できず。"
  - "設定変更後の朝一内部CZ突入率。朝一266台中11台=約4.1%の公開観測はあるが、設定変更済みのみのサンプルとは確認できないため仕様値として採用しない。"

conflicts:
  - field: "有利区間リセット後のCZ扱い"
    values:
      - "HAZUSE: 本機は有利区間リセットでCZに突入するタイプとの説明"
      - "スロットセブン: 設定変更後以外の有利区間開始時にCZへ突入と説明し、設定変更後は1G目にランプ点灯"
      - "ちょんぼりすた: 朝一リセット台の一部は内部CZの可能性あり、と限定的に記載"
    treatment: "設定変更時CZ確定とはせずCONFLICT/限定条件を保持。朝一恩恵は『内部CZの可能性あり、率未確定』とした。"

researchNotes:
  - "メーカー公式2022-04-04告知と業界記事で全国導入日、純増、AT1セット構造、2400枚後CZを確認。"
  - "設定1/2/4/5/6の5段階設定。設定3を作らない。"
  - "HAZUSEの型式ページURL識別子と掲載表から検定番号1S1213を確認し、P-WORLD業界記事で型式SパチスロウルトラマンタロウMGの検定通過を照合。"
  - "resetBehaviorはHAZUSEの設定変更/電源ON・OFF比較表を軸に、スロットセブン・イチカツ・ちょんぼりすたの朝一ランプ資料で複数照合。"
  - "朝一2G当選約4.1%は実戦観測であり、設定変更専用の公開抽選値ではない。物差しDBの公開朝一数値欄では参考値として低信頼分離し、機械仕様値に昇格させない。"
```
