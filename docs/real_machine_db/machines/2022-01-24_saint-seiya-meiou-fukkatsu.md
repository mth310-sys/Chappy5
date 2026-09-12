# 聖闘士星矢 冥王復活 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1467
canonicalKey: 2022-01-24_saint-seiya-meiou-fukkatsu
machineName: 聖闘士星矢 冥王復活
manufacturer: 三洋物産
modelCode: S聖闘士星矢冥王復活JH
inspectionCode: 1S0875
releaseDate: 2022-01-24
generation: "6.2号機"
systemType: AT / CZ突破型 / 差枚数上乗せ
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_YARDSTICK
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: ["L", "1", "2", "4", "5", "6"]
  payoutRatePct:
    "L": 86.4
    "1": 97.4
    "2": 101.1
    "4": 106.1
    "5": 108.0
    "6": 110.0
  initialHitBySetting:
    definition: "CZ『冥闘士激闘』 / AT『聖闘士RUSH』初当たり。複数解析で一致。"
    "1": "CZ 1/330.7 / AT 1/562.8"
    "2": "CZ 1/286.5 / AT 1/485.1"
    "4": "CZ 1/240.8 / AT 1/401.6"
    "5": "CZ 1/228.1 / AT 1/376.9"
    "6": "CZ 1/222.2 / AT 1/366.3"
  baseGamesPer50Coins: "約39.0〜39.2G/50枚（全設定共通）"
  netIncrease: "AT『聖闘士RUSH』約3.2枚/G"
  basicPayout: "AT初当たり時は差枚数上乗せ特化ゾーンから開始。設定1のAT平均獲得約665枚。『天馬降臨』平均上乗せ約300枚。"
  normalCeiling: "CZ間最大798G / 有利区間開始から2100GでAT / CZ最大9スルー後の次回CZ勝利濃厚"
  modeSpecificMinimumData:
    czStructure: "CZ『冥闘士激闘』は15G+バトル、最大3戦突破でAT。3戦突破期待度約50%。"
    atStructure: "AT『聖闘士RUSH』は差枚数上乗せ型、純増約3.2枚/G。"
    specialSetting: "設定L搭載。設定Lは常時下パネル消灯。"
    arayashikiMode: "設定変更時の一部でのみ移行する独立特殊モード。移行後は再度設定変更されるまで継続し、AT直撃が大幅上昇。設定1でも同モード滞在時PAYOUT 105.4%。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。有利区間・CZ/AT天井・内部モード・内部状態・小宇宙ポイント・不屈ポイントをリセット。"
    modeState: "内部モードを再抽選。阿頼耶識モードは設定変更時のみ突入抽選があり、当選後は次回設定変更まで維持。"
    advantageousSection: "RESET。通常時に有利区間ランプが点灯するタイプで、設定変更直後は消灯。"
    morningStart: "基本は瞬ステージ。有利区間再移行後の初回CZ天井は通常A 548G、通常B/C/SP 598Gへ短縮（RUSH準備は798G）。"
    benefit: "初回CZ天井短縮。阿頼耶識モード突入抽選あり。朝一リセット時のモード移行率はAT後より優遇との解析あり。"
    disadvantage: "前日の天井進行、内部モード/状態、小宇宙ポイント、不屈ポイントを失う。阿頼耶識滞在台を設定変更すると阿頼耶識も再抽選となる。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。天井進行を引き継ぐ。"
    modeState: "CARRY_OVER。内部モード・内部状態・阿頼耶識モード、小宇宙ポイント、不屈ポイントを引き継ぐ。"
    advantageousSection: "CARRY_OVER。朝一有利区間ランプ点灯なら据え置き濃厚材料。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。天井を引き継ぐ。"
    modeState: "CARRY_OVER。内部モード・内部状態・小宇宙ポイント・不屈ポイントを引き継ぐ。通常時の復帰ステージは原則瞬ステージだが、聖域モード/小宇宙CHARGE/パンドラZONE/AT等は状態に応じて引き継ぐ。"
    advantageousSection: "CARRY_OVER。有利区間を引き継ぐ。"
    specialDisplay: "阿頼耶識ランプは電源OFF→ONで消灯するとの解析あり。阿頼耶識モード自体は設定変更まで維持されるため、ランプ消灯だけでモード非滞在とは判定できない。"
  gameCounterReset: "設定変更時RESET / 据え置き・純電源OFF→ONはCARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "初回CZ天井は通常A 748→548G、通常B 698→598G、通常C 648→598G。SPは598Gのまま。RUSH準備は798G。AT天井は有利区間開始から2100G。"
  modeAfterReset:
    behavior: "設定変更後の有利区間移行時に通常A/B/C/SP/RUSH準備等を再抽選。具体的な全モード振り分けは公開確認できず。朝一リセット時のモード移行はAT後より優遇との解析あり。"
    arayashiki: "設定変更時のみ阿頼耶識モード突入抽選。解析サイトでは突入率5%との公開値あり。突入すると次回設定変更まで継続。"
  stateAfterReset:
    behavior: "内部状態、小宇宙ポイント、不屈ポイントをリセット。不屈ポイントは有利区間移行時に初期獲得抽選あり。"
  advantageousSectionReset: "設定変更時RESET / 据え置き・純電源OFF→ONはCARRY_OVER。AT終了時の一部、エンディング終了後等でもリセット契機あり。"
  resetBenefits:
    - "設定変更後・AT後初回のCZ天井が最大598G中心へ短縮（RUSH準備を除く）。"
    - "設定変更時の一部で阿頼耶識モードへ移行。解析公開値5%。"
    - "阿頼耶識モード滞在時はAT直撃確率が大幅上昇し、設定1でもPAYOUT 105.4%。"
  resetPenalties:
    - "前日の天井進行・内部モード/状態・小宇宙ポイント・不屈ポイントは設定変更で消滅。"
    - "阿頼耶識モード滞在中でも設定変更すると維持保証はなく、再抽選となる。"
  resetDetection:
    reelBehavior: "本機固有のガックン発生条件・発生率は、機種名/型式/メーカー/シリーズ名とガックン・リセット語を変えて探索したが高信頼の直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時有利区間ランプ点灯型。朝一消灯＝設定変更濃厚、点灯＝据え置き濃厚。ただし前日が有利区間リセット直後、店側の1G回し等の対策は例外。"
    other: "阿頼耶識ランプはモード滞在濃厚示唆だが、電源OFF→ONで消灯するため朝一の据え置き/変更判別には単純利用できない。"
  numericResetData:
    resetCzCeiling: "通常A 548G / 通常B 598G / 通常C 598G / SP 598G / RUSH準備 798G"
    atCeiling: "有利区間開始から2100G"
    arayashikiEntryRate: "設定変更時5%（解析サイト公開値。設定差なしとする別解析あり）"
    arayashikiPayout: "設定1 105.4 / 設定2 108.5 / 設定4 112.7 / 設定5 114.3 / 設定6 114.9%"
    arayashikiDirectAt: "AT直撃 約1/1100との概算公開値、および押し順ベルベース実質1/668.7という解析値あり。定義差のため混同しない。"

sources:
  - url: https://hazuse.com/machine/pachislot/1S0875/
    sourceType: old-database-analysis-high
    usedFor: [machineName, manufacturer, modelCode, inspectionCode, releaseDate, generation, payoutRate, baseGamesPer50Coins, netIncrease, ceilings, resetBehavior, resetDetection]
  - url: https://hazuse.com/machine/pachislot/1S0875/genre/209/
    sourceType: old-database-analysis-high
    usedFor: [czStructure, atStructure]
  - url: https://1geki.jp/slot/s_seiya_meioh/
    sourceType: analysis-high
    usedFor: [releaseDate, generation, payoutRate, czProbability, atProbability, netIncrease, systemType]
  - url: https://1geki.jp/slot/s_seiya_meioh/3/
    sourceType: analysis-high
    usedFor: [ceilings, advantageousSectionReset, powerCycleBehavior]
  - url: https://nana-press.com/kaiseki/machine/221/7620/
    sourceType: analysis-high
    usedFor: [settingChangeBehavior, carryOverBehavior, internalState, arayashiki, advantageousSectionLamp]
  - url: https://nana-press.com/kaiseki/machine/221/7616/
    sourceType: analysis-high
    usedFor: [resetCzCeiling, atCeiling, czSkipCeiling]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/37/tj08-1.php
    sourceType: analysis-high
    usedFor: [arayashikiBehavior, arayashikiPayout]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/37/tj15.php
    sourceType: analysis-high
    usedFor: [baseGamesPer50Coins]
  - url: https://slot-seven.com/seintoseiyameiofukkatu-tenzyou/
    sourceType: analysis
    usedFor: [resetCzCeiling, resetModePriority, arayashikiEntryRate, arayashikiLampPowerCycle]
  - url: https://news.p-world.co.jp/articles/18383/yugitsushin
    sourceType: industry
    usedFor: [manufacturer, releaseDate, generation, czSetting1, atSetting1, netIncrease, averageAtPayout, baseGamesPer50Coins]
  - url: https://www.slopachi-quest.com/article/saintseiya-meiouhukkatu-settei/
    sourceType: analysis
    usedFor: [payoutRate, czProbability, atProbability, baseGamesPer50Coins]

unverifiedAfterResearch:
  - "本機固有の設定変更時リールガックン発生条件・発生率。"
  - "設定変更後の通常A/B/C/SP/RUSH準備の正確な全モード振り分け。"

conflicts: []
```

## QAメモ
- 2026-09-12: No.1467として2022-01-24群4機目を登録。
- 型式 `S聖闘士星矢冥王復活JH`、検定番号 `1S0875`。HAZUSEで直接確認。
- 6.2号機AT。設定L/1/2/4/5/6。設定1〜6の機械割97.4〜110.0%、CZ 1/330.7→1/222.2、AT 1/562.8→1/366.3、約39G/50枚、純増約3.2枚/G。
- 業界記事で設定1のAT平均獲得約665枚を確認。
- resetBehaviorは設定変更で有利区間・天井・内部モード/状態・小宇宙/不屈をリセット、据え置き/純電断では引継ぎ。初回CZ天井短縮と阿頼耶識モード抽選が主要な朝一恩恵。
- 阿頼耶識突入率5%は解析サイト公開値として信頼度を分離。阿頼耶識モードは設定変更まで継続する一方、阿頼耶識ランプ自体は電断で消灯するとの解析を保存。
- 通常時有利区間ランプ点灯型のため、未対策なら朝一消灯＝設定変更濃厚、点灯＝据え置き濃厚。
