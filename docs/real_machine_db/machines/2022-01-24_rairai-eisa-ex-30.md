# 来雷エイサーEX-30 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1474
canonicalKey: 2022-01-24_rairai-eisa-ex-30
machineName: 来雷エイサーEX-30
manufacturer: オーイズミ
modelCode: "SライライエイサーEX-30"
inspectionCode: "0S1248"
releaseDate: 2022-01-24
generation: "6号機"
systemType: ノーマル / 完全告知 / 30Φ / 技術介入
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_MEDIUM_RESET_WITH_MACHINE_SPECIFIC_POWER_CYCLE_AND_DETECTION_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.4
    "2": 99.2
    "3": 100.4
    "4": 102.5
    "5": 104.8
    "6": 107.6
  initialHitBySetting:
    definition: "ボーナス合算"
    "1": "1/191.1"
    "2": "1/186.7"
    "3": "1/179.6"
    "4": "1/169.8"
    "5": "1/159.8"
    "6": "1/145.6"
  bonusBySetting:
    big:
      "1": "1/303.4"
      "2": "1/296.5"
      "3": "1/288.7"
      "4": "1/274.2"
      "5": "1/260.0"
      "6": "1/255.0"
    reg:
      "1": "1/516.0"
      "2": "1/504.1"
      "3": "1/474.9"
      "4": "1/445.8"
      "5": "1/414.8"
      "6": "1/339.6"
  baseGamesPer50Coins: "約42.5〜44.0G/50枚（なな徹掲載値。後年Aタイプ比較資料では設定1約42.5G）"
  netIncrease: "NOT_APPLICABLE（純ボーナスノーマル機）"
  basicPayout: "BIG最大259枚 / REG最大129枚。いずれも14枚役を1回取得する簡易技術介入で最大獲得。"
  normalCeiling: "NONE。天井機能非搭載。"
  modeSpecificMinimumData:
    bonusRatio: "BB:RBは概ね6:4のBIG偏向型。"
    notification: "H.O.D.点滅でボーナス告知。告知割合は先告知80% / プレミアム告知20%。プレミアムはBIG濃厚。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE。天井機能非搭載の純ノーマル機で、朝一に引き継ぎ/リセット対象となるゲーム数天井はない。"
    modeState: "AT/ART/CZ・天井モード・高確率モードはNOT_APPLICABLE。成立済みボーナスフラグ、告知状態、設定シーサー用内部回数等の設定変更時クリア契約は機種固有資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE_FOR_YARDSTICK。AT/ART等の指示機能を搭載しない純ノーマル機で、朝一狙いに用いる有利区間進行/天井はない。"
    morningStart: "設定変更専用の短縮天井・朝一専用モード・CZ/AT優遇は構造上NOT_APPLICABLE。機種固有の朝一ボーナス優遇数値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    benefit: "NONE_CONFIRMED_AFTER_RESEARCH。天井非搭載で、公開された設定変更専用の主要恩恵は確認できず。"
    disadvantage: "NONE_CONFIRMED_AFTER_RESEARCH。公開された設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "AT/ART/CZ等はNOT_APPLICABLE。成立済みボーナスフラグ/告知状態/設定シーサー内部回数の据え置き契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE_FOR_YARDSTICK。"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "純電源OFF→ONのみの場合の成立済みボーナスフラグ、告知状態、設定シーサー内部回数などの機種固有保持/初期化契約は、検索語・資料系統変更後もUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE_FOR_YARDSTICK。"
  gameCounterReset: "NOT_APPLICABLE_TO_CEILING。ゲーム数天井が存在しないため、朝一天井狙いに関係する内部ゲーム数リセット/引継ぎはない。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE。通常天井そのものが非搭載。"
  modeAfterReset:
    behavior: "NOT_APPLICABLE。AT/CZ/天井モード等を持つ機種ではない。"
  stateAfterReset:
    behavior: "AT/CZの内部高低状態はNOT_APPLICABLE。成立済みボーナス/告知等の電断・設定変更差はUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "NOT_APPLICABLE_FOR_YARDSTICK。純ボーナスノーマル機で朝一の有利区間ランプ/有利区間天井を用いる立ち回り要素なし。"
  resetBenefits:
    - "天井非搭載のためリセット天井短縮なし。"
    - "設定変更専用モード/CZ/AT優遇はNOT_APPLICABLE。"
    - "公開された朝一専用数値は確認できず。"
  resetPenalties:
    - "公開された設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン条件・発生率は、機種名/型式/オーイズミ/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索したがPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    lampDisplay: "朝一の有利区間ランプによる変更判別はNOT_APPLICABLE_FOR_YARDSTICK。設定変更専用の表示・ランプ挙動はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    internalBonusCount: "BIG5回ごとの設定シーサールーレット等は存在するが、その内部回数が設定変更/据え置き/純電断でどう扱われるかはUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    resetSpecificCeiling: "NOT_APPLICABLE"
    resetModeDistribution: "NOT_APPLICABLE"
    resetFirstHitRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://www.youtube.com/watch?v=oJLcLEaufwo
    sourceType: official
    usedFor: [preReleaseProductName, manufacturer, productConcept]
  - url: https://www.p-world.co.jp/machine/database/9524
    sourceType: industry-database
    usedFor: [machineName, manufacturer, generation, systemType, modelCode, inspectionCode, releaseDate, payoutRateRange, bonusPayout, normalType]
  - url: https://hazuse.com/machine/pachislot/0S1248/
    sourceType: analysis-high
    usedFor: [machineName, modelCode, inspectionCode, releaseDate, payoutRateBySetting, bigProbability, regProbability, combinedProbability, bonusPayout, ceilingNone, systemType]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/52/kh02.php
    sourceType: analysis-high
    usedFor: [payoutRateBySetting, bigProbability, regProbability, combinedProbability]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/52/bn01.php
    sourceType: analysis-high
    usedFor: [bonusPayout]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/52/kh08.php
    sourceType: analysis-high
    usedFor: [bonusTechnicalProcedure]
  - url: https://nana-press.com/kaiseki/machine/219/
    sourceType: analysis-high
    usedFor: [releaseDate, systemType, baseGamesPer50Coins, combinedProbabilityRange, bonusPayout]
  - url: https://www.slopachi-quest.com/article/rairaieisa-ex30-settei/
    sourceType: analysis-secondary
    usedFor: [releaseDate, settingStructure, settingAnalysisCrossCheck]
  - url: https://www.marimo0925.net/pachislot-shinkisyu-ranraneisa/
    sourceType: prerelease-secondary
    usedFor: [preReleaseConflictingSpec]

unverifiedAfterResearch:
  - "設定変更時の成立済みボーナスフラグ/告知状態の機種固有クリア契約。"
  - "据え置き・純電源OFF→ON時の成立済みボーナスフラグ/告知状態の保持契約。"
  - "BIG回数に連動する設定シーサー内部回数の設定変更/据え置き/純電断時の扱い。"
  - "本機固有のリールガックン条件・発生率。"
  - "設定変更専用の表示/ランプによる判別法および公開朝一当選数値。"

conflicts:
  - field: "preReleaseSpecVsFinalSpec"
    status: "CONFLICT_PRERELEASE_SECONDARY_VS_FINAL_MULTI_SOURCE"
    finalSpec: "PAYOUT 97.4/99.2/100.4/102.5/104.8/107.6%、BB 1/303.4〜1/255.0、REG 1/516.0〜1/339.6、合算1/191.1〜1/145.6。HAZUSE・パチマガスロマガ・P-WORLD系最終資料で採用。"
    prereleaseSecondary: "PAYOUT 97.3/98.6/99.9/101.6/105.0/110.0%、BB 1/287.4〜1/238.3、REG 1/489.1〜1/346.8、合算1/181.0〜1/141.2。導入前二次記事に掲載。"
    handling: "平均化しない。導入後の型式0S1248に紐づく複数最終資料をperformanceCoreへ採用し、導入前値は履歴CONFLICTとして保持。"

notes:
  - "オーイズミ公式PV（2021-09-28）の商品名表記は『来雷エイサー30』。導入後のP-WORLD/HAZUSE等では『来雷エイサーEX-30』、型式SライライエイサーEX-30として整理されているため、本DBのmachineNameは最終市場表記を採用。"
  - "純ボーナスノーマル機のため、天井・AT/CZモード・有利区間進行を『未確認』ではなくNOT_APPLICABLEとして区別した。"
  - "機種名・正式型式・メーカー名と、設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等の検索語を組み替え、解析・古いDB・回顧系まで再探索したが、機種固有resetBehaviorの直接資料は固定できなかったため推定補完していない。"
```
