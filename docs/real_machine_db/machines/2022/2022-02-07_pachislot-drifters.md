# パチスロドリフターズ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1478
canonicalKey: 2022-02-07_pachislot-drifters
machineName: パチスロドリフターズ
manufacturer: サミー
modelCode: "S パチスロドリフターズ ZS"
inspectionCode: "1S1187"
releaseDate: 2022-02-07
generation: "6.2号機"
systemType: "AT / リアルボーナス集中型（解析資料でA+AT表記あり）"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED
confidence: HIGH_CORE_HIGH_RESET_POWER_MODE_AND_GAKKUN_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.6
    "2": 98.9
    "3": 100.6
    "4": 104.8
    "5": 107.9
    "6": 109.2
  initialHitBySetting:
    definition: "ドリフターズゲート（DG）+漂流者BONUS 初当たり"
    "1": "1/299.8"
    "2": "1/281.6"
    "3": "1/267.1"
    "4": "1/243.9"
    "5": "1/228.9"
    "6": "1/216.3"
  secondaryInitialHit:
    definition: "DRIFTERS RUSH（DR）初当たり"
    "1": "1/581.5"
    "2": "1/531.0"
    "3": "1/481.3"
    "4": "1/407.9"
    "5": "1/361.0"
    "6": "1/321.8"
  baseGamesPer50Coins: "約35.6G/50枚"
  netIncrease: "リアルボーナス（DG/漂流者BONUS）約4.9枚/G。AT『DRIFTERS RUSH』を含む平均純増を約4.0枚/Gと表現する資料もあり、定義差として分離。"
  basicPayout: "DGは約114枚獲得・設定1平均突破期待度約50%。DRIFTERS RUSHは初期10G/20G/30G+α、消化中リアルボーナス約1/3.3、平均獲得約690枚。"
  normalCeiling: "異世界ステージ終了後から最大約800G+αでDG以上。当選モードにより最大天井は短縮。"
  modeSpecificMinimumData:
    modeCeilings: "通常A 約800G / 通常B 約600G / 通常C 約250G / 天国 約150G / SP 約350G。SPは初当たり時に漂流者BONUS直撃が特徴。"
    advantageousSectionEntry: "有利区間移行時に通常A・通常B・通常C・天国・SPからモードを抽選。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。天井進行をリセット。"
    modeState: "内部モードRESET・内部状態RESET。有利区間移行時の5モード抽選を受ける。"
    advantageousSection: "RESET。"
    morningStart: "異世界ステージから開始。"
    benefit: "新規有利区間のモード抽選を受け、天国/SPを含む短い最大天井が選択される可能性がある。異世界ステージ継続20GでDG以上、30Gで義経Battle濃厚という朝一にも適用される公開挙動あり。"
    disadvantage: "前日の天井進行・内部モード・内部状態・有利区間進行は消去。設定変更専用の追加不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。据え置きは天井を引き継ぐ。"
    modeState: "内部モード・内部状態は当時解析で『調査中』のため、機種固有の直接契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "CARRY_OVER。有利区間ランプも引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。純電源OFF→ONでは天井を引き継ぐ。"
    modeState: "内部状態はCARRY_OVERを直接確認。内部モードの純電断時契約は直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "純電源OFF→ON単独について有利区間の機種固有明記を今回固定できずUNVERIFIED_AFTER_RESEARCH。天井・内部状態は設定変更時と異なり引き継ぐことを直接確認。"
  gameCounterReset: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "設定変更専用の固定短縮天井は確認できず。有利区間移行時のモード再抽選により、選択モード次第で約150/250/350/600/800Gの最大天井となる。"
    normalCeiling: "通常A最大 約800G+α"
    resetMorningWindow: "異世界ステージは20G継続でDG以上、30G継続で義経Battle濃厚。"
  modeAfterReset:
    behavior: "設定変更でRESETし、有利区間移行時に通常A/B/C・天国・SPを設定別に再抽選。下記公開振り分けを朝一比較値として保存。"
  stateAfterReset:
    behavior: "設定変更でRESET。据え置き時の内部状態は当時解析で調査中。純電源OFF→ONでは内部状態CARRY_OVERを確認。"
  advantageousSectionReset: "設定変更時RESET。据え置き時CARRY_OVER。通常時はクレジット上部の『_』が有利区間ランプで、設定変更時とDRIFTERS RUSH終了時に消灯し、非有利区間は数Gのみ。"
  resetBenefits:
    - "有利区間移行時のモード抽選を受けるため、天国/SPなど浅い天井モードが選ばれる可能性がある。"
    - "異世界ステージ20G継続でDG以上、30G継続で義経Battle濃厚。"
  resetPenalties:
    - "前日の天井進行・内部モード・内部状態は設定変更で消去。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時リールガックン条件・発生率は、機種名/型式/メーカー/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時点灯型。朝一消灯なら設定変更濃厚、点灯なら据え置き濃厚。ただしDRIFTERS RUSH終了後も消灯するため、前日消灯閉店や店舗対策を例外として保持。"
    morningBehavior: "設定変更時は異世界ステージ開始。據え置き側の開始ステージは当時解析で調査中のため、ステージ単独での確定判別には使わない。"
  numericResetData:
    normalGameCeiling: "約800G+α（通常A）"
    settingChangeModeDistributionPct:
      "1": "通常A48.9 / 通常B19.6 / 通常C4.3 / 天国24.8 / SP2.3"
      "2": "通常A42.4 / 通常B19.3 / 通常C9.4 / 天国25.4 / SP3.5"
      "3": "通常A36.3 / 通常B17.9 / 通常C13.6 / 天国26.4 / SP5.8"
      "4": "通常A22.3 / 通常B18.7 / 通常C20.0 / 天国27.3 / SP11.6"
      "5": "通常A14.4 / 通常B18.2 / 通常C24.4 / 天国27.8 / SP15.1"
      "6": "通常A7.1 / 通常B18.6 / 通常C27.7 / 天国28.3 / SP18.2"
    modeDistributionDefinition: "有利区間移行時の設定別モード振り分け。設定変更専用テーブルではないが、設定変更後は新規有利区間へ移行するため朝一適用対象として保存。"
    isekaiStageGuarantees: "20G継続=DG以上 / 30G継続=義経Battle"
    dedicatedResetSpecificHitRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/18968/greenbelt
    sourceType: industry-primary
    usedFor: [releaseTiming, initialHitRange, drInitialHitRange, baseGamesPer50, realBonusNetIncrease, systemOutline]
  - url: https://hazuse.com/machine/pachislot/1S1187/
    sourceType: old-machine-db-analysis-high
    usedFor: [releaseDate, manufacturer, modelCode, inspectionCode, generation, netIncrease]
  - url: https://hazuse.com/machine/pachislot/1S1187/genre/201/
    sourceType: old-machine-db-analysis-high
    usedFor: [payoutRateBySetting]
  - url: https://hazuse.com/machine/pachislot/1S1187/genre/207/
    sourceType: old-machine-db-analysis-high
    usedFor: [normalCeiling, advantageousSectionLamp]
  - url: https://p-kn.com/slot/3728/
    sourceType: analysis-high
    usedFor: [releaseDate, initialHitBySetting, drInitialHitBySetting, systemOutline]
  - url: https://nana-press.com/kaiseki/machine/293/7880/
    sourceType: analysis-high
    usedFor: [payoutRateBySetting, initialHitBySetting, drInitialHitBySetting]
  - url: https://nana-press.com/kaiseki/machine/293/7885/
    sourceType: analysis-high
    usedFor: [baseGamesPer50, rushBonusRate]
  - url: https://nana-press.com/kaiseki/machine/293/7886/
    sourceType: analysis-high
    usedFor: [settingChangeBehavior, unchangedBehavior, advantageousSectionReset, morningStart, resetDetection, isekaiStageGuarantees]
  - url: https://slot-seven.com/drifters-tenzyou/
    sourceType: analysis-secondary
    usedFor: [powerCycleBehavior, advantageousSectionLamp, resetDetection, isekaiStageGuarantees]
  - url: https://slot-seven.com/drifters-settei/
    sourceType: analysis-secondary
    usedFor: [modeDistributionBySetting]
  - url: https://1geki.jp/slot/s_drifters/
    sourceType: analysis-high
    usedFor: [payoutRateBySetting, initialHitBySetting, releaseDate, generation]
  - url: https://1geki.jp/slot/s_drifters/40/
    sourceType: analysis-high
    usedFor: [modeCeilings, modeCharacteristics]
  - url: https://www.p-world.co.jp/machine/database/9555
    sourceType: machine-db
    usedFor: [driftersGatePayout, realBonusNetIncrease, rushInitialGames]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/194/at02.php
    sourceType: analysis-high
    usedFor: [driftersGatePayout, driftersGateBreakthroughRate]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/194/at06-2.php
    sourceType: analysis-high
    usedFor: [rushInitialGames, rushBonusRate, rushAveragePayout]
  - url: https://www.pachibee.jp/machines/lecture/222010000
    sourceType: industry-machine-db
    usedFor: [releaseDate, generation, realBonusNetIncrease]

unverifiedAfterResearch:
  - "据え置き時の内部モード・内部状態。2022-02-07更新の当時解析でも『現在調査中』。"
  - "純電源OFF→ON時の内部モード。有利区間そのものの機種固有明記。天井・内部状態の引継ぎは直接確認済み。"
  - "本機固有の設定変更時リールガックン条件・発生率。"
  - "設定変更専用の固定初当たり率/CZ当選率。一般の有利区間移行時モード振り分けは公開値を取得済み。"

conflicts:
  - field: "DRIFTERS_RUSH_initialHit_setting1"
    status: "MINOR_NUMERIC_CONFLICT"
    canonical: "1/581.5"
    alternate: "1/581.8（なな徹・一部二次資料）"
    handling: "業界一次記事・K-Navi等の1/581.5をcanonical。平均化しない。"
  - field: "DG_plus_bonus_initialHit_setting6"
    status: "SECONDARY_NUMERIC_CONFLICT"
    canonical: "1/216.3"
    alternate: "1/214.9（一部二次資料）"
    handling: "業界一次記事・K-Navi・なな徹・1geki等で一致する1/216.3をcanonical。平均化しない。"
  - field: "netIncreaseExpression"
    status: "DEFINITION_DIFFERENCE"
    canonical: "リアルボーナス純増 約4.9枚/G"
    alternate: "AT全体の平均純増 約4.0枚/G とする資料あり"
    handling: "対象区間の定義が異なるため数値競合として平均せず併記。"
  - field: "systemClassification"
    status: "TERMINOLOGY_DIFFERENCE"
    canonical: "6.2号機AT / リアルボーナス集中型"
    alternate: "A+AT表記の解析資料あり"
    handling: "性能比較上はリアルボーナス集中型ATとして保持。"

notes:
  - "設定別モード振り分けは『設定変更専用抽選』ではなく有利区間移行時の共通抽選。ただし設定変更後は有利区間RESET→新規移行となるため、朝一客AIに有効な公開数値として保存。"
  - "DRIFTERS RUSH終了時にも有利区間ランプが消灯するため、朝一消灯を設定変更確定とは扱わない。"
  - "2022-02-07群はBLACK LAGOON ZERO bullet MAXと本機の2機を複数月間カレンダーで確認。No.1478処理後に群CLOSED判定。"
```
