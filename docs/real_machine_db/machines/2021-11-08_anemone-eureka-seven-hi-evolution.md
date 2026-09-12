# パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1439
canonicalKey: 2021-11-08_anemone-eureka-seven-hi-evolution
machineName: パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION
manufacturer: ロデオ製造 / サミー総発売元
modelCode: S ANEMONE FF
inspectionCode: 1S0790
releaseDate: 2021-11-08
generation: 6.2号機
systemType: AT / 擬似ボーナス / CZ / 有利区間3000G対応
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_ADVANTAGEOUS_SECTION_START_MODE_TABLE
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.9, 98.9, 100.1, 105.4, 108.6, 110.5]
  bonusInitialBySetting: ["1/178.8", "1/171.9", "1/171.4", "1/147.9", "1/144.9", "1/126.0"]
  atInitialBySetting: ["1/537.3", "1/519.9", "1/493.3", "1/433.3", "1/378.0", "1/357.6"]
  baseGamesPer50Coins: "約37G/50枚"
  netIncrease: "AT『Dive To Eureka Seven』約2.6枚/G"
  basicPayout: "GULLIVER BONUS=ベルナビ5回 / ANEMONE BONUS=ベルナビ10回 / EPISODE BONUS=30G / NIRVASH-X BONUS=20G。上位CLIMAX MODEは1セット10G+α・継続期待度約89%。"
  czBasicPerformance: "Missionは3G完結型。成功期待度平均約32%。"
  normalCeiling: "通常モード808G+αでANEMONE BONUS+AT濃厚。ガリバーモード606G+α、エピソードモード505G+αでEPISODE BONUS濃厚。同一有利区間内GULLIVER BONUS6連続AT非当選で次回NIRVASH-X BONUS。"
  notes:
    - "サミー初の有利区間3000G対応6.2号機として公表。"
    - "GULLIVER BONUS後は有利区間を継続し、内部天井G数も継続する。"
    - "AT/ホワイトルーム失敗等、有利区間終了契機では次の有利区間開始時にモードを再抽選。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。設定変更で天井G数をリセット。"
    modeState: "内部モード・内部状態を再抽選。朝一ステージは富士基地内。"
    advantageousSection: "RESET。有利区間を新規開始。"
    morningStart: "有利区間開始時の通常処理へ入り、成立役に応じて開始モード抽選。設定変更専用の別天井は確認されない。"
    benefit: "固定のリセット恩恵なし。有利区間開始時モード抽選でガリバー/エピソードモードが選ばれれば通常808Gより浅い606G/505G天井となるが、これは設定変更専用テーブルではなく有利区間開始共通処理。"
    disadvantage: "据え置きなら残る天井進行・GULLIVER BONUSスルー履歴・モード/状態を失う。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。設定変更しない据え置きでは天井進行を引き継ぐ。"
    modeState: "CARRY_OVER。内部モード・内部状態を引き継ぐ。"
    advantageousSection: "CARRY_OVER。前日が継続中の有利区間なら継続。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。電源OFF→ONのみでは天井を引き継ぐ。"
    modeState: "CARRY_OVER。内部モード・内部状態を引き継ぐ。朝一ステージ表示の詳細は当時解析で調査中表記が残る。"
    advantageousSection: "CARRY_OVER。設定変更を伴わない電断では有利区間状態を引き継ぐ。"
  gameCounterReset: "設定変更でRESET / 据え置き・純電断でCARRY_OVER。GULLIVER BONUS後は同一有利区間の天井進行を継続。"
  ceilingAfterReset:
    resetSpecificShortening: "NO_FIXED_RESET_SHORTENING。設定変更専用の短縮天井は確認されない。"
    ceilingValue: "有利区間開始時に選ばれたモードにより通常808G / ガリバー606G / エピソード505G。"
    note: "モード別天井差は通常の有利区間開始モード抽選によるもので、朝一だけの固定短縮ではない。"
  modeAfterReset:
    behavior: "有利区間開始時に成立役を参照して通常/ガリバー/エピソードを抽選。設定変更後もこの開始処理に入る。"
    resetSpecificDistribution: "NO_SEPARATE_RESET_ONLY_TABLE_FOUND。有利区間開始共通テーブルをnumericResetDataへ保存。"
  stateAfterReset: "設定変更で内部状態再抽選 / 据え置き・純電断は引継ぎ。"
  advantageousSectionReset: "設定変更でRESET / 据え置き・純電断はCARRY_OVER。AT終了・ホワイトルーム失敗等でも有利区間終了契機あり。GULLIVER BONUS後は継続。"
  resetBenefits:
    - "固定のリセット専用恩恵は公開解析でなし。"
    - "有利区間開始時のモード抽選でガリバー/エピソードが選ばれた場合は天井が606G/505Gとなる。"
    - "有利区間開始後33G/66G/99GはいずれかでMission当選期待度が高いが、設定変更専用ではなく有利区間開始共通挙動。"
  resetPenalties:
    - "据え置きなら保持できる天井進行・GULLIVER BONUSスルー履歴・内部モード/状態を設定変更で失う。"
  resetDetection:
    advantageousSectionLamp: "朝一点灯なら据え置き濃厚。消灯のみでは判別不可。ただし前日点灯状態を確認できていた場合、朝一消灯ならリセット濃厚。GULLIVER BONUS後は有利区間継続のためランプ点灯継続。"
    stageBehavior: "設定変更後は富士基地内。純電断時の朝一ステージは当時資料で調査中表記があり、ステージ単独の確定判別には使用しない。"
    reelBehavior: "本機固有のガックン条件・発生率は表記揺れ・型式名を含め再探索したが直接固定できずUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    normalModeCeilingGames: 808
    gulliverModeCeilingGames: 606
    episodeModeCeilingGames: 505
    advantageousSectionStartModeDistributionNonRare:
      setting1: {normal: "97.3%", gulliver: "1.6%", episode: "1.2%"}
      setting2: {normal: "97.3%", gulliver: "1.2%", episode: "1.6%"}
      setting3: {normal: "96.9%", gulliver: "1.2%", episode: "2.0%"}
      setting4: {normal: "96.9%", gulliver: "1.2%", episode: "2.0%"}
      setting5: {normal: "95.7%", gulliver: "1.2%", episode: "3.1%"}
      setting6: {normal: "94.5%", gulliver: "0.8%", episode: "4.7%"}
    advantageousSectionStartModeDistributionWeakRareAllSettings: {normal: "85.9%", gulliver: "1.6%", episode: "12.5%"}
    advantageousSectionStartModeDistributionStrongRareAllSettings: {normal: "58.2%", gulliver: "1.6%", episode: "40.2%"}
    note: "上記は設定変更専用ではなく有利区間開始時共通値。朝一設定変更も有利区間開始となるため比較用に保存。丸めで合計が100.0/100.1%となる行があるが補正しない。"

sources:
  - url: https://p-bomb.co.jp/industry/new-machine/2111/
    sourceType: contemporary-industry
    usedFor: [modelCode, manufacturer, releaseWindow, bonusInitialBySetting, atInitialBySetting]
  - url: https://news.p-world.co.jp/articles/17576/nippon
    sourceType: contemporary-industry
    usedFor: [modelCode, manufacturer, certificationPass]
  - url: https://news.p-world.co.jp/articles/17670/yugitsushin
    sourceType: contemporary-industry
    usedFor: [modelCode, inspectionCode]
  - url: https://www.p-world.co.jp/machine/database/9476
    sourceType: machine-database
    usedFor: [releaseDate, manufacturer, modelCode, inspectionCode, generation, payoutRange, netIncrease, basicPayout]
  - url: https://www.pachibee.jp/machines/index/221090002
    sourceType: machine-database
    usedFor: [releaseDate, generation, netIncrease, basicPayout, advantageousSection3000]
  - url: https://slot-seven.com/anemone-settei/
    sourceType: contemporary-analysis
    usedFor: [performanceCore, baseGamesPer50, settingChange, powerCycle, modeState, lamp]
  - url: https://www.slopachi-quest.com/article/anemone-tenjou/
    sourceType: contemporary-analysis
    usedFor: [ceiling, settingChange, powerCycle, advantageousSectionLamp, noFixedResetBenefit]
  - url: https://1geki.jp/slot/s_anemone/8/
    sourceType: analysis-high
    usedFor: [advantageousSectionLamp, sectionContinuationAfterGulliverBonus]
  - url: https://nana-press.com/kaiseki/machine/153/6323/
    sourceType: analysis-high
    usedFor: [modeCeilings, advantageousSectionStartModeDistribution]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/192/tj04.php
    sourceType: old-analysis-database
    usedFor: [advantageousSectionStartModeDistribution, modeCeilings]

unverifiedAfterResearch:
  - "本機固有の設定変更時ガックン条件・発生率。『ANEMONE』『S ANEMONE FF』『アネモネ』『ガックン』『設定変更判別』『朝一』で資料系統を変えて再探索したが直接契約を固定できず。"
  - "純電断後の朝一表示ステージ。天井・内部モード/状態の引継ぎは複数解析で確認できるが、ステージ欄は当時資料で調査中。"
  - "設定変更だけに限定した独自モード振り分け。確認できた数値は有利区間開始時共通テーブルであり、リセット専用表として扱わない。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1438「パチスロ かまいたちの夜」を確認し、handoff指定の次機として追加。
- 型式 `S ANEMONE FF`、検定番号 `1S0790`、2021-11-08導入は業界検定情報/P-WORLDで照合。
- BONUS/AT初当たりはメーカー発表由来の業界記事と複数解析資料で一致。機械割97.9〜110.5%、約37G/50枚、AT純増約2.6枚/Gも複数資料で照合。
- resetBehaviorは設定変更で天井・モード・状態・有利区間RESET、据え置き/純電断でCARRY_OVER。有利区間ランプは朝一点灯なら据え置き濃厚、消灯単独では判別不可。
- 有利区間開始時モード振り分けは朝一客AIに比較価値があるため保存したが、設定変更専用テーブルではないことを明示し、通常時全モード移行表へ拡張していない。
