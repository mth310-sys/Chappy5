# パチスロ蒼天の拳4 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1483
canonicalKey: 2022-03-07_souten-no-ken-4
machineName: パチスロ蒼天の拳4
alternateName: "S蒼天の拳4"
manufacturer: "サミー（製造: 銀座）"
modelCode: "S パチスロ蒼天の拳AC KA"
inspectionCode: "1S1529"
releaseDate: 2022-03-07
generation: "6.2号機"
systemType: "差枚数管理型AT / CZ経由・AT直撃"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_POWER_CYCLE_AND_DETECTION
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.6
    "2": 98.8
    "3": 100.4
    "4": 104.4
    "5": 107.6
    "6": 111.4
  initialHitBySetting:
    definition: "AT『上海遊戯』初当たり"
    "1": "1/379.3"
    "2": "1/363.6"
    "3": "1/345.3"
    "4": "1/313.8"
    "5": "1/290.5"
    "6": "1/271.2"
  czBySetting:
    definition: "CZ『双龍門』"
    "1": "1/139.3"
    "2": "1/133.5"
    "3": "1/128.8"
    "4": "1/120.1"
    "5": "1/111.0"
    "6": "1/109.8"
  baseGamesPer50Coins: "約37G/50枚"
  netIncrease: "約2.7枚/G"
  basicPayout:
    at: "AT『上海遊戯』は差枚数管理型。AT初当たり時は上乗せ特化ゾーン『双龍の刻』から開始し、そこで決定した差枚数+αを消化する。"
    initialSpecialZone: "双龍の刻は初回20G+α。荒天は初期50枚、静天はAT初当たり時100枚 or 150枚（AT中ストック放出時のみ静天50枚の可能性あり）。"
    pseudoBonus: "蒼拳ボーナスは20G+α or 40G+α。"
    premiumAt: "天授の儀は1セット30G、継続率約93% or 約97%。"
  normalCeiling:
    gameCeiling: "通常時1200G消化でAT当選。液晶ゲーム数カウンター基準。双龍門消化中も天井到達は有効。"
  modeSpecificMinimumData:
    normalMode: "通常時は1枚/2枚/3枚/AT高確などの内部モードを持つ。高モードほどCZ成功率・AT直撃期待度が上昇。"
    advantageousSectionStart: "有利区間移行時は1枚モードを否定。非レア小役・弱チェリーでも2枚以上から開始し、3枚モード54.7% + AT高確1.2%=55.9%。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "通常時1200G天井をRESET。"
    modeState: "内部モード・内部状態をRESETし、有利区間移行時の抽選を受ける。"
    advantageousSection: "RESET。"
    morningStart: "有利区間移行時は1枚モードを否定し、2枚モード以上から開始。成立役に応じてAT直撃→モード移行/CZ抽選を行う。"
    benefit: "固定G数の天井短縮は確認されないが、朝一の新規有利区間移行時は1枚モードを否定し、非レア小役・弱チェリーでも55.9%で3枚モード以上。設定変更台は朝一狙い対象とする当時解析あり。"
    disadvantage: "設定変更専用の主要不利数値は確認できず。1200G天井進行はリセットされる。"
  unchanged:
    gameCountCeiling: "通常時1200G天井をCARRY_OVER。"
    modeState: "内部モード・内部状態をCARRY_OVER。"
    advantageousSection: "CARRY_OVER。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。HAZUSEの『電源ON・OFF』比較表で天井引き継ぎを直接確認。"
    modeState: "内部モード・内部状態をCARRY_OVER。"
    advantageousSection: "CARRY_OVER。"
  gameCounterReset: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER。対象は内部天井ゲーム数。液晶/データカウンターはズレる可能性があるため液晶G数を天井判断基準とする解析あり。"
  ceilingAfterReset:
    resetSpecificShortening: "設定変更専用の固定短縮天井は確認できず。RESET後も通常天井は1200G。"
    normalCeiling: "通常時1200G"
  modeAfterReset:
    behavior: "設定変更で内部モードRESET→有利区間移行時に再抽選。据え置き/純電断は引継ぎ。新規有利区間移行時は1枚モード否定。"
  stateAfterReset:
    behavior: "設定変更で内部状態RESET。据え置き/純電断は引継ぎ。"
  advantageousSectionReset: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER。AT終了時にも有利区間が消灯するため朝一判別には前日最終状態の例外あり。"
  resetBenefits:
    - "新規有利区間移行時は1枚モードを否定。"
    - "非レア小役・弱チェリー成立時でも3枚モード54.7% + AT高確1.2%で、55.9%が3枚モード以上。"
    - "有利区間移行時の成立役に応じてAT直撃・CZ抽選も行われる。"
  resetPenalties:
    - "設定変更で前日の1200G天井進行を失う。設定変更専用の追加不利数値は確認できず。"
  resetDetection:
    reelBehavior: "パチ＆スロ必勝本は『リールガックン』で設定変更判別が可能と明記。公開資料から本機固有の発生率までは固定できないため、確率値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    lampDisplay: "有利区間ランプはクレジット上部の『_ / ー』。朝一に点灯なら据え置き濃厚、消灯なら設定変更濃厚。設定変更時とAT終了時に消灯するため、前日AT終了直後などは例外。"
    morningBehavior: "設定変更時/据え置き時の開始ステージは当時資料で調査中。"
  numericResetData:
    advantageousSectionMoveModeSelection:
      definition: "有利区間移行時の内部モード抽選。設定変更専用ではなく、有利区間移行時共通。AT直撃非当選後にモード/CZを抽選。"
      nonRareOrWeakCherry: "2枚 44.1% / 3枚 54.7% / AT高確 1.2%"
      weakWatermelon: "2枚 25.8% / 3枚 62.1% / AT高確 12.1%"
      chanceRole: "2枚 33.6% / 3枚 62.1% / AT高確 4.3%"
      strongBell: "3枚 97.7% / AT高確 2.3%"
      strongCherry: "3枚 100%"
      strongWatermelon: "3枚 50.0% / AT高確 50.0%"
    advantageousSectionMoveDirectAt:
      definition: "有利区間移行時のAT直撃抽選。通常時AT高確以外と同じ公開値で、設定変更専用抽選ではない。"
      strongBell: "設定1 1.2% / 2 1.6% / 3 2.3% / 4 2.7% / 5 3.1% / 6 5.1%"
      strongCherry: "設定1 9.0% / 2 9.4% / 3 10.2% / 4 11.7% / 5 12.1% / 6 14.1%"
      strongWatermelon: "設定1 0.4% / 2 0.8% / 3 1.2% / 4 1.6% / 5 2.0% / 6 3.1%"
      strongestCherry: "全設定100%"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/19219/nippon
    sourceType: industry-primary-secondary
    usedFor: [salesAnnouncement, manufacturerBrand, systemOutline, initialHitRange, netIncrease, pseudoBonus, releaseWindow]
  - url: https://news.p-world.co.jp/articles/18972/greenbelt
    sourceType: industry-regulatory
    usedFor: [modelCode, manufacturerGinza, certificationPassage]
  - url: https://www.p-world.co.jp/machine/database/9571
    sourceType: industry-machine-db
    usedFor: [manufacturerBrand, manufacturerGinza, modelCode, inspectionCode, releaseDate, generation, systemType, netIncrease, ceiling, basicPayout]
  - url: https://hazuse.com/machine/pachislot/1S1529/
    sourceType: old-machine-db-analysis-high
    usedFor: [modelCode, inspectionCode, releaseDate, generation, payoutRate, initialHit, baseGamesPer50, ceiling, settingChange, powerOffOn, advantageousSection, resetDetection]
  - url: https://nana-press.com/kaiseki/machine/319/8421/
    sourceType: analysis-high
    usedFor: [settingChange, unchanged, advantageousSection, resetDetection, advantageousSectionMove]
  - url: https://nana-press.com/kaiseki/machine/319/8286/
    sourceType: analysis-high
    usedFor: [ceiling]
  - url: https://nana-press.com/kaiseki/machine/319/8302/
    sourceType: analysis-high
    usedFor: [modeSystem, advantageousSectionStart]
  - url: https://p.hisshobon.jp/machine/3829/1/87468
    sourceType: analysis-high-historical
    usedFor: [payoutRate, initialHit, czBySetting, releaseDate, netIncrease]
  - url: https://p.hisshobon.jp/machine/3829/1/90305
    sourceType: analysis-high-historical
    usedFor: [resetBenefit, resetDetection, reelGakkun]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/195/kh01.php
    sourceType: analysis-high-historical
    usedFor: [generation, systemType, netIncrease]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/195/at02.php
    sourceType: analysis-high-historical
    usedFor: [basicPayout, initialSpecialZone]
  - url: https://www.slopachi-quest.com/article/soutennoken4-tenjou/
    sourceType: analysis-secondary
    usedFor: [powerCycleCrossCheck, numericResetData]

unverifiedAfterResearch:
  - "設定変更時/据え置き時の開始ステージ。HAZUSE・なな徹とも当時『調査中』。"
  - "本機固有の設定変更時リールガックン発生率。判別要素としてのガックンは当時解析で確認できるが、発生率の公開値は見つからない。"

conflicts: []

researchNotes:
  - "メーカー表記は市場ブランドをサミー、製造元を銀座として分離。検定通過記事は型式『S パチスロ蒼天の拳AC KA（銀座）』を確認。"
  - "設定変更/据え置きはなな徹、設定変更/純電源ON・OFFはHAZUSEの比較表で照合。電源OFF→ONは天井・内部モード・内部状態・有利区間すべて引継ぎ。"
  - "有利区間移行時のモード/AT直撃/CZ抽選は朝一に適用される比較可能値として保存するが、設定変更専用抽選ではないことを明示。"
  - "設定変更専用の1200G未満固定天井は確認できないため、短縮天井なしとして保存。"
```
