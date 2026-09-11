# GⅠ優駿倶楽部3 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1427
canonicalKey: 2021-08-02_g1-yushun-club-3
machineName: GⅠ優駿倶楽部3
manufacturer: KPE
brandContext: コナミアミューズメント
modelCode: S GⅠ優駿倶楽部3PK
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2021-08-02
machineType: 6.1号機 AT（擬似ボーナス経由・ゲーム数上乗せ型AT）
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.5, 98.8, 101.0, 104.3, 106.3, 108.6]
  bonusCombinedProbability: ["1/294", "1/289", "1/285", "1/278", "1/273", "1/267"]
  baseGamesPer50Coins: "約37G/50枚"
  netIncrease: "約3.0枚/G"
  basicPayout: "クラシックボーナス約150枚 / まいまい☆ぼーなす約80枚"
  atBasicPerformance: "AT『GⅠロード』はゲーム数上乗せ型。初期G数はMM♥らっしゅ等で決定。メーカー発表を伝える業界資料ではAT突入時TY約700枚。"
  normalCeiling: "有利区間移行から通常時666G消化で勝利濃厚の新馬戦（クラシックボーナス濃厚）。別系統として蓄積後輩ポイント天井（50～255pt）があり、到達で成功濃厚のまい☆チャレンジ/まいまい☆ぼーなすまたはフリーズ。"
  cycleStructure: "通常は約90G/1周期が目安。マコマコブラック出現時はゲーム数天井短縮抽選あり。初回出現時は111G 10.16% / 333G 19.92% / 555G 69.92%、2回目以降は111G短縮64.84% / 222G短縮25.00% / 333G短縮10.16%。これは設定変更専用抽選ではない。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。設定変更で有利区間がリセットされ、通常の有利区間移行後666G天井を新たにカウント。蓄積後輩ポイントも有利区間リセットまで蓄積される構造のため、新規区間側へ切り替わる。"
    modeState: "内部状態RESET。設定変更専用の独立モード振り分け率は十分な再探索後も確認できず。"
    advantageousSection: "RESET。有利区間ランプは設定変更時に消灯し、新規有利区間へ移行。"
    morningStart: "新規有利区間1周期目は『電撃の3ハロンループ』対象。UMAチャンス抽選→ブリードゾーン→南国ゾーンという朝一恩恵がある。開始ステージの固定契約はUNVERIFIED_AFTER_RESEARCH。"
    benefit: "1周期目はブリードゾーン後に南国ゾーンへ移行し、新馬戦勝率/ボーナス期待度は約33%以上。さらに有利区間開始時のレア役成立時は約20%でUMAチャンス。"
    disadvantage: "RESET_SPECIFIC_DISADVANTAGE_NONE_CONFIRMED_AFTER_RESEARCH"
  unchanged:
    gameCountCeiling: "CARRY_OVER。設定変更を伴わない据え置きは電源OFF→ON側の公開契約に従い天井を引き継ぐ。"
    modeState: "CARRY_OVER。内部状態を引き継ぐ。"
    advantageousSection: "CARRY_OVER。進行中有利区間を維持する扱い。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER"
    modeState: "内部状態CARRY_OVER"
    advantageousSection: "CARRY_OVER。設定変更を伴わない単純電断では新規有利区間への強制移行なし。"
    stage: "UNVERIFIED_AFTER_RESEARCH（当時解析でも調査中）"
  ceilingAfterReset:
    resetSpecificShortening: "NONE_CONFIRMED。設定変更専用の固定短縮天井は確認できず、通常の新規有利区間天井666Gを使用。マコマコブラックによる111/333/555G等の短縮は通常運用でも発生する別抽選。"
    ceilingValue: "有利区間移行後666G → 勝利濃厚の新馬戦 / クラシックボーナス濃厚"
  modeAfterReset:
    behavior: "新規有利区間の初回ループ（UMAチャンス抽選→ブリードゾーン→南国ゾーン）へ。設定変更専用モードという独立名称・振り分けは確認できず。"
    resetSpecificDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"
  stateAfterReset: "内部状態RESET。新規有利区間1周期目の公開恩恵は確認できるが、内部状態の細かな初期振り分け率はUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "設定変更時RESET。通常運用でもボーナス/GⅠロード終了時に有利区間を切り替え、電撃の3ハロンループへ移行する設計。"
  resetBenefits:
    - "新規有利区間1周期目はブリードゾーン後に南国ゾーンへ移行し、新馬戦勝率/ボーナス期待度約33%以上。"
    - "有利区間開始時、レア役成立時の約20%でUMAチャンス。"
    - "ブリードゾーンではAT直撃やゲーム数天井短縮の可能性あり。"
  resetPenalties:
    - "公開された設定変更専用不利要素は確認できず。"
  resetDetection:
    advantageousSectionLamp: "ランプは設定変更時に消灯するが、本機は通常時も消灯するタイプのため朝一ランプ単独では変更判別不可。ボーナス/AT開始で点灯、設定変更・ボーナス/AT終了で消灯。"
    firstCycleBehavior: "朝一1周期目に南国ゾーンへ入らなければ据え置き濃厚とする解析資料あり。ただし確定判別ではなく、通常時ランプ判別不能を補う推測材料として扱う。"
    machineSpecificGakkun: "UNVERIFIED_AFTER_RESEARCH"
  numericResetData:
    resetCeiling: "666G（新規有利区間の通常天井。設定変更専用短縮ではない）"
    firstCycleNangokuZone: "1周期目ブリードゾーン後に移行 / 新馬戦勝率・ボーナス期待度 約33%以上"
    umaChanceAtSectionStart: "有利区間開始時、レア役成立時の約20%（有利区間移行時共通。設定変更専用値ではない）"
    resetSpecificModeDistribution: "NONE_CONFIRMED_AFTER_RESEARCH"
    resetSpecificInitialHitRate: "NONE_CONFIRMED_AFTER_RESEARCH"

sources:
  - url: https://www.konami.com/amusement/psm/slot/g1-dclub3/
    sourceType: official
    usedFor: [releaseMonth, systemType, officialMachineIdentity]
  - url: https://www.4gamer.net/games/999/G999905/20210721187/
    sourceType: official-release-reprint
    usedFor: [releaseDate, manufacturerBrandContext]
  - url: https://web-greenbelt.jp/post-47409/
    sourceType: contemporary-industry
    usedFor: [systemType, bonusCombinedProbability, baseGamesPer50Coins, netIncrease, atBasicPerformance, electricThreeFurlongLoop]
  - url: https://www.p-world.co.jp/machine/database/9405
    sourceType: machine-database
    usedFor: [manufacturerKPEContext, systemType, basicPayout, netIncrease, ceiling]
  - url: https://p-kn.com/slot/3611/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, bonusCombinedProbability, gameSystem]
  - url: https://1geki.jp/slot/s_g1_3/3/
    sourceType: analysis-high
    usedFor: [ceiling, makomakoBlackCeilingShortening, shorteningDistribution]
  - url: https://1geki.jp/slot/s_g1_3/0/
    sourceType: analysis-high
    usedFor: [bonusCombinedProbability, firstCycleBenefit]
  - url: https://chonborista.com/slot/konami-slot/140131/
    sourceType: contemporary-analysis
    usedFor: [payoutRate, bonusCombinedProbability, baseGamesPer50Coins, netIncrease, cycleLength, settingChangeReset, powerCycleCarryOver, advantageousSectionLamp, accumulatedJuniorPoints, firstCycleBenefit, umaChanceRate]
  - url: https://slot-seven.com/g1derbyclub3-tenzyou/
    sourceType: contemporary-analysis-secondary
    usedFor: [settingChangeCeilingReset, powerCycleCeilingCarryOver, internalStateResetCarryOver, advantageousSectionLamp, firstCycleBenefit, umaChanceRate]
  - url: https://kanzenkokuchi.jp/news/2376.php
    sourceType: retrospective-analysis
    usedFor: [payoutRate, releaseDate, resetFirstCycleNangokuZone, resetDetectionFirstCycle]
  - url: https://nana-press.com/kaiseki/machine/136/4485/
    sourceType: analysis
    usedFor: [advantageousSectionLamp, resetDetectionLimitation]
  - url: https://nana-press.com/kaiseki/machine/136/
    sourceType: analysis
    usedFor: [generation, netIncrease, baseGamesPer50Coins, releaseDate]
  - url: https://ichikatsu.com/newslot/
    sourceType: calendar-secondary
    usedFor: [releaseDate, payoutRate, bonusCombinedProbability, baseGamesPer50Coins, augustBoundaryAudit]
  - url: https://store.shopping.yahoo.co.jp/nakaiticom/21057.html
    sourceType: used-machine-database-secondary
    usedFor: [modelCode, manufacturerKPEContext]

unverifiedAfterResearch:
  - "検定番号。型式『S GⅠ優駿倶楽部3PK』は複数資料で固定したが、検定番号自体を公的/高信頼資料から確認できず。"
  - "設定変更後の液晶開始ステージ固定契約。複数当時解析でステージは調査中。"
  - "本機固有ガックン条件・発生率。"
  - "設定変更専用の独立モード振り分け率・内部状態初期振り分け率・専用初当たり率。"

conflicts:
  - "市場上のメーカー表記はコナミアミューズメントだが、P-WORLDは製造KPEと明記。DBではmanufacturer=KPE / brandContext=コナミアミューズメントとして役割分離。"
  - "一部古い/後年紹介文にはUMAチャンス成功で2400枚濃厚とする表現があるが、後の訂正ではMM♥らっしゅはいぱー＝うまぽん玉5個確定で完走濃厚ではない。物差しコアには2400枚保証として採用しない。"
```

## QAメモ

- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、No.1426を確認し、2021-08-02群の4機目として登録。
- 機械割97.5～108.6%、ボーナス合算1/294～1/267、約37G/50枚、純増約3.0枚/G、クラシック約150枚・まいまい約80枚を複数系統で照合。
- 設定変更時は天井・内部状態・有利区間RESET、純電断/据え置きは天井・内部状態CARRY_OVER。通常時有利区間ランプ消灯型なので朝一ランプ単独判別は不可。
- 新規有利区間の朝一価値として、1周期目南国ゾーン（新馬戦勝率/ボーナス期待度約33%以上）と、有利区間開始時レア役成立時UMAチャンス約20%を取得。いずれも『設定変更専用抽選値』ではなく有利区間移行時共通仕様として区別した。
- 666G天井とマコマコブラックによる111/333/555G等の短縮抽選を分離。マコマコブラック短縮は設定変更専用恩恵ではない。
- 型式名はS GⅠ優駿倶楽部3PKまで固定。検定番号、設定変更後ステージ、本機固有ガックン、設定変更専用モード/状態振り分けは表記・検索語・資料系統を変えて再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。
