# パチスロツインエンジェルPARTY — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1435
canonicalKey: 2021-10-04_twin-angel-party
machineName: パチスロツインエンジェルPARTY
manufacturer: サミー
modelCode: S ツインエンジェル PARTY ZF
inspectionCode: 1S0682
releaseDate: 2021-10-04
generation: 6.1号機
systemType: A+AT / リアルボーナス+AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.9, 99.8, 101.4, 106.1, 108.1, 111.2]
  initialHitBySetting:
    hbbBigCombined: ["1/318.1", "1/303.4", "1/290.0", "1/277.7", "1/266.4", "1/256.0"]
    middleBonus: ["1/537.2", "1/528.5", "1/520.1", "1/512.0", "1/504.1", "1/496.5"]
    bonusCombined: ["1/199.8", "1/192.8", "1/186.2", "1/180.0", "1/174.3", "1/168.9"]
    angelChanceTotal: ["1/192.6", "1/193.4", "1/179.0", "1/179.8", "1/162.8", "1/167.1"]
    dateTimeTotal: ["1/496.1", "1/444.1", "1/437.9", "1/364.3", "1/361.1", "1/306.0"]
  baseGamesPer50Coins: "約35.6G/50枚"
  netIncrease: "AT 約2.0枚/G"
  basicPayout: "HYPER BIG約150枚+デートタイム / BIG+エンジェルチャンス平均約164枚 / MIDDLE BONUS約50枚+AT抽選 / デートタイム1セット50枚以上"
  normalCeiling: "有利区間移行後555G+αでAT『デートタイム』"
  notes:
    - "シリーズ初のA+AT構成。リアルボーナスを軸にエンジェルチャンス→デートタイムを目指す。"
    - "エンジェルチャンスはBB経由で平均32G、CZ/MB経由では30Gまたは100G。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。通常555G+αの天井が設定変更後333G+αへ短縮。"
    modeState: "内部状態RESET。設定変更後は内部的にデートタイム直撃高確からスタート。"
    advantageousSection: "RESET相当。設定変更後はリセット専用333G天井と有利区間開始時の朝一挙動が適用される。明示資料では有利区間ランプ消灯のみでは変更判別不可。"
    morningStart: "333G+α短縮天井 + デートタイム直撃高確スタート。"
    benefit: "天井222G短縮（555G+α→333G+α）かつDT直撃高確スタート。"
    disadvantage: "主要な設定変更固有の不利要素は確認されない。"
  unchanged:
    gameCountCeiling: "前日の天井ゲーム数を引き継ぐ。通常天井は有利区間移行後555G+α。"
    modeState: "内部状態を引き継ぐ。"
    advantageousSection: "有利区間ランプ点灯で据え置き濃厚となるケースあり。ただし通常時は基本消灯のため消灯だけでは判別不可。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。電源OFF→ONのみでは天井を引き継ぐ。"
    modeState: "CARRY_OVER。内部状態を引き継ぐ。"
    advantageousSection: "CARRY_OVER扱い。公開攻略表では設定変更と異なり天井・内部状態を引き継ぐ。"
  gameCounterReset: "設定変更時RESET / 据え置き・純電断時CARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "YES"
    ceilingValue: "333G+α（通常555G+αから222G短縮）"
    specialContinuation: "リセット333G天井からDTへ突入後、DT終了までにボーナスまたはチャンスチェリー非当選の場合、次回天井も再度333G+αとなる公開情報あり。"
  modeAfterReset:
    behavior: "通常のモード振り分け表ではなく、設定変更後はデートタイム直撃高確状態から開始。"
    resetSpecificDistribution: "公開率の固定値は今回確認できず。"
  stateAfterReset: "設定変更時RESET後、デートタイム直撃高確スタート。純電断時は内部状態引継ぎ。"
  advantageousSectionReset: "設定変更ではRESET相当 / 据え置き・電断ではCARRY_OVER。ランプ消灯だけでは変更判別不可。"
  resetBenefits:
    - "天井333G+αへ短縮。"
    - "内部的にデートタイム直撃高確からスタート。"
    - "リセット333G天井後、条件次第で次回も333G+α天井が再セットされる。"
  resetPenalties:
    - "NONE_CONFIRMED。"
  resetDetection:
    advantageousSectionLamp: "通常時は基本消灯。消灯=判別不可、点灯=据え置き濃厚。アトラクションゾーン失敗後などは点灯したまま通常時へ戻ることがある。"
    reelBehavior: "複数攻略資料でガックン判別可能との記載あり。ただし確定条件・発生率は固定できず、補助材料扱い。"
    machineSpecificGakkun: "ガックン判別可能とする二次資料はあるが、サミー公式の発生条件/率はUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    normalCeilingGames: "555G+α"
    resetCeilingGames: "333G+α"
    ceilingShorteningGames: "222G"
    morningSpecialHitRate: "UNVERIFIED_AFTER_RESEARCH（DT直撃高確の設定変更専用当選率は固定できず）"
    resetSpecificModeDistribution: "UNVERIFIED_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/18030/nippon
    sourceType: contemporary-industry
    usedFor: [releaseDate, modelCode, manufacturer, systemType, basicPayout, netIncrease]
  - url: https://news.p-world.co.jp/articles/17453/nippon
    sourceType: contemporary-industry
    usedFor: [performanceCore, bonusRates, atRates, basicPayout, netIncrease]
  - url: https://p-bomb.co.jp/industry/new-machine/1580/
    sourceType: contemporary-industry
    usedFor: [performanceCore, baseGamesPer50, payoutRates, bonusRates, atRates]
  - url: https://hazuse.com/machine/pachislot/1S0682/genre/201/
    sourceType: old-database-analysis
    usedFor: [inspectionCode, modelCode, releaseDate, payoutRates, basicPayout]
  - url: https://p.hisshobon.jp/machine/3686/1/84385
    sourceType: contemporary-analysis
    usedFor: [payoutRates, bonusRates, atRates, releaseDate]
  - url: https://www.slopachi-quest.com/article/twinangel-party-tenjou/
    sourceType: contemporary-analysis
    usedFor: [normalCeiling, resetCeiling, settingChangeBehavior, powerCycleBehavior, internalStateResetCarry, resetBenefits, resetDetection, specialContinuation]
  - url: https://nana-press.com/kaiseki/machine/147/5190/
    sourceType: analysis-high
    usedFor: [normalCeiling, resetCeiling]
  - url: https://nana-press.com/kaiseki/machine/147/5194/
    sourceType: analysis-high
    usedFor: [baseGamesPer50]
  - url: https://nana-press.com/kaiseki/machine/147/5187/
    sourceType: analysis-high
    usedFor: [bonusRates, payoutRates, atRatesConflictCheck]
  - url: https://pachiseven.jp/machines/6396/cutout/3
    sourceType: contemporary-analysis
    usedFor: [normalCeiling, resetCeiling, resetSectionResearch]
  - url: https://www.slopachi-quest.com/article/resets/
    sourceType: analysis-secondary
    usedFor: [gakkunSupplement, resetCeiling, resetDirectHigh]

unverifiedAfterResearch:
  - "設定変更後のデートタイム直撃高確について、専用の当選率/転落率など比較可能な公開数値は固定できず。"
  - "本機固有のガックン発生条件・発生率。攻略資料には判別可能との記載があるが、公式保証条件は確認できず。"
  - "有利区間の設定変更/電断契約を『RESET/CARRY_OVER』と明記したメーカー一次表は今回確認できず。天井・内部状態のRESET/CARRY_OVERと朝一挙動から実用上の契約を記録。"

conflicts:
  - field: angelChanceTotal_setting6
    canonical: "1/167.1"
    alternate: "1/167.8"
    resolution: "当時業界記事、P-BOMB、1geki、パチマガスロマガ、P-WORLDで1/167.1が一致するためcanonical。なな徹の1/167.8はCONFLICTとして保持。"
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1434「ファンキージャグラー2」を確認し、handoff指定の次機として追加。
- 型式 `S ツインエンジェル PARTY ZF`、検定番号 `1S0682`、2021-10-04導入を業界記事/HAZUSEで固定。
- 性能コアは当時業界記事・必勝本・1geki・パチマガスロマガ・P-WORLDで多重照合。設定6エンジェルチャンスTOTALのみ1/167.1と1/167.8の資料差をCONFLICT保持。
- resetBehaviorは設定変更時333G+α天井、純電断時天井/内部状態引継ぎ、リセット時DT直撃高確、ランプ点灯時据え置き濃厚を複数攻略資料で確認。
- 朝一固有のDT直撃高確率/転落率と本機固有ガックン発生率は検索語・型式・メーカー・シリーズ名を変えて再探索したが固定できずUNVERIFIED_AFTER_RESEARCH。
