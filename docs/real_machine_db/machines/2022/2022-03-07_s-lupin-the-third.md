# Sルパン三世 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1484
canonicalKey: 2022-03-07_s-lupin-the-third
machineName: Sルパン三世
alternateName: "パチスロ Sルパン三世"
manufacturer: "オリンピア（平和グループ）"
modelCode: "Sルパン三世L2"
inspectionCode: "1S1355"
releaseDate: 2022-03-07
generation: "6.2号機"
systemType: "擬似ボーナス+差枚数管理・セット継続型AT"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_NUMERIC_RESET_TABLES
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.5
    "2": 98.5
    "3": 100.0
    "4": 103.0
    "5": 105.2
    "6": 108.0
  initialHitBySetting:
    definition: "擬似ボーナス/AT直撃を含む初当たり"
    "1": "1/196.7"
    "2": "1/193.2"
    "3": "1/186.5"
    "4": "1/177.2"
    "5": "1/171.7"
    "6": "1/165.5"
  mainAtBySetting:
    definition: "メインAT『SUPER HEROES』突入確率"
    "1": "1/429.4"
    "2": "1/415.6"
    "3": "1/396.2"
    "4": "1/362.7"
    "5": "1/341.0"
    "6": "1/313.3"
  baseGamesPer50Coins: "約32.5G/50枚（設定1）"
  netIncrease: "約2.7枚/G"
  basicPayout:
    heroesBonus: "赤7シングル揃い。25G継続の擬似ボーナス、純増約2.7枚/G。終了後は複製人間バトルでAT突入を抽選。"
    superHeroesBonus: "赤7ダブル揃い。25G継続、突入時点でAT『SUPER HEROES』濃厚。"
    at: "SUPER HEROESは差枚数管理×セット継続型。5Gのチャレンジタイムで差枚数を決定し、ラウンドゲームで消化。3・6セット目はVストック高確、7セット消化後は極限BATTLE。"
    upperAt: "GOLDEN SUPER HEROESは純増約2.7枚/G。AT初当たり時の突入割合は解析上約9.5%。"
  normalCeiling:
    gameCeiling: "通常時最大555G消化でボーナス or AT当選。"
    advantageousSectionCeiling: "有利区間移行から1300G消化後に当選したボーナス後、複製人間バトル敗北時に有利区間リセット→トリガーチャンス。"
  modeSpecificMinimumData:
    doubleSevenMode: "初当たりボーナス時のダブル揃い期待度を左右するモードA〜Fを持つ。設定変更時は通常開始時より上位モードが選ばれやすい。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。初回天井を111G / 333G / 555Gから振り分け。"
    modeState: "内部モード・内部状態をRESET。設定変更時専用のダブルセブンモード初期抽選を行う。"
    advantageousSection: "RESET。"
    morningStart: "設定変更後は短縮天井抽選とダブルセブンモード再抽選を受ける。"
    benefit: "111Gまたは333G天井が合計57.1%。ダブルセブンモードも通常開始時より上位側が優遇。"
    disadvantage: "前日の天井進行・内部モード・内部状態・有利区間を失う。設定変更専用の追加不利数値は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。"
    modeState: "内部モード・内部状態をCARRY_OVER。"
    advantageousSection: "CARRY_OVER。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。電源ON・OFF比較資料で天井引継ぎを直接確認。"
    modeState: "本機固有の純電断時モード/状態契約は直接資料で固定できず UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "電源ON・OFF比較資料では朝一有利区間ランプ点灯側として示されるが、内部有利区間契約の詳細は一般論で補完せず、表示契約のみ保存。"
  gameCounterReset: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER（天井について直接確認）。"
  ceilingAfterReset:
    resetSpecificDistribution: "111G 10.2% / 333G 46.9% / 555G 43.0%。"
    shortenedWithin333: "57.1%"
    normalCeiling: "555G"
  modeAfterReset:
    behavior: "設定変更で内部モードRESET。ダブルセブンモードは設定変更時専用初期振り分けを適用。据え置きは引継ぎ。"
  stateAfterReset:
    behavior: "設定変更=RESET / 据え置き=CARRY_OVER。純電断時はUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "設定変更=RESET / 据え置き=CARRY_OVER。AT終了時や有利区間1300G到達条件成立後にも消灯する。純電断はランプ点灯比較資料を確認するが詳細内部契約は推測しない。"
  resetBenefits:
    - "設定変更後は111Gまたは333G天井が合計57.1%。"
    - "設定変更時はダブルセブンモードA 66.4% / B 23.4% / C 8.6% / D 0.8% / E 0.4% / F 0.4%。通常開始時よりB・Cが優遇。"
  resetPenalties:
    - "前日の天井進行・内部モード・内部状態をリセット。公開された設定変更専用の追加不利数値は確認できず。"
  resetDetection:
    lampDisplay: "有利区間ランプはクレジット右下のドット。朝一消灯=設定変更濃厚、点灯=据え置き濃厚。AT終了時にも消灯するため前日最終状態の例外を考慮する。"
    reelBehavior: "本機固有のガックン発生条件/発生率は PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
  numericResetData:
    resetCeilingDistribution:
      "111G": "10.2%"
      "333G": "46.9%"
      "555G": "43.0%"
    doubleSevenModeInitialAfterSettingChange:
      "A": "66.4%"
      "B": "23.4%"
      "C": "8.6%"
      "D": "0.8%"
      "E": "0.4%"
      "F": "0.4%"
    doubleSevenModeInitialNormalStart:
      "A": "81.6%"
      "B": "15.2%"
      "C": "1.6%"
      "D": "0.8%"
      "E": "0.4%"
      "F": "0.4%"

sources:
  - url: https://news.p-world.co.jp/articles/19081/yugitsushin
    sourceType: industry-primary-secondary
    usedFor: [manufacturer, modelCode, releaseDate, systemType, netIncrease, setting1InitialHit, setting1At, atStructure]
  - url: https://news.p-world.co.jp/articles/19224/yugitsushin
    sourceType: industry-regulatory
    usedFor: [modelCode, inspectionCode]
  - url: https://news.p-world.co.jp/articles/19111/greenbelt
    sourceType: industry-primary-secondary
    usedFor: [releaseDate, systemType, netIncrease, atStructure]
  - url: https://pachinavi.net/machines/s-lupin/
    sourceType: analysis-secondary
    usedFor: [payoutRate, initialHit, mainAt]
  - url: https://nana-press.com/kaiseki/machine/297/8329/
    sourceType: analysis-high
    usedFor: [normalCeiling, advantageousSectionCeiling, resetCeilingDistribution]
  - url: https://nana-press.com/kaiseki/machine/297/8334/
    sourceType: analysis-high
    usedFor: [settingChange, unchanged, resetDetection, doubleSevenModeInitialAfterSettingChange]
  - url: https://nana-press.com/kaiseki/machine/297/8338/
    sourceType: analysis-high
    usedFor: [heroesBonus, superHeroesBonus]
  - url: https://nana-press.com/kaiseki/machine/297/8340/
    sourceType: analysis-high
    usedFor: [atStructure]
  - url: https://nana-press.com/kaiseki/machine/297/8345/
    sourceType: analysis-high
    usedFor: [upperAt]
  - url: https://www.slopachi-quest.com/article/rupin-the-3rd-tenjou/
    sourceType: analysis-secondary
    usedFor: [baseGamesPer50, resetCeilingDistribution, doubleSevenModeCrossCheck, resetDetection]
  - url: https://ichikatsu.com/lupin/
    sourceType: analysis-secondary
    usedFor: [payoutRateCrossCheck, initialHitCrossCheck, baseGamesPer50, powerCycleCeiling, lampDisplay]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/152/kh03.php
    sourceType: analysis-high-historical
    usedFor: [atStructure, upperAtStructure]

unverifiedAfterResearch:
  - "純電源OFF→ONのみの場合の内部ダブルセブンモード/内部状態の機種固有契約。天井引継ぎと朝一ランプ点灯比較は確認済み。"
  - "本機固有の設定変更時リールガックン発生条件・発生率。"

conflicts: []

researchNotes:
  - "型式Sルパン三世L2、検定番号1S1355は東京都公安委員会検定通過記事で照合。"
  - "設定変更時の天井振り分けとダブルセブンモード初期振り分けはなな徹と複数解析資料でクロスチェック。"
  - "設定変更後111G/333G選択率は10.2%+46.9%=57.1%。"
  - "純電断については天井引継ぎを直接確認できるが、内部モード/状態まで一括して一般論からCARRY_OVERとはしない。"
```
