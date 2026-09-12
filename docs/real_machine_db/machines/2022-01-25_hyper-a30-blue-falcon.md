# HYPER A-30 BLUE FALCON — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1475
canonicalKey: 2022-01-25_hyper-a30-blue-falcon
machineName: HYPER A-30 BLUE FALCON
manufacturer: DAXEL / 玉越PB
modelCode: "SブルーファルコンDA-30"
inspectionCode: "1S1372"
releaseDate: 2022-01-25
generation: "6.2号機"
systemType: ノーマル / 完全告知 / 30Φ / 技術介入 / PB限定機
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_MEDIUM_RESET_WITH_MACHINE_SPECIFIC_POWER_CYCLE_AND_DETECTION_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePctCompletePlay:
    "1": 97.0
    "2": 98.5
    "3": 100.0
    "4": 103.0
    "5": 106.0
    "6": 109.0
  payoutRateOfficialRange:
    setting1: "97.02%"
    setting6: "109.02%"
    note: "玉越発表/業界記事で公開された端数付きレンジ。中間設定の端数付き値は公開資料を固定できず、複数解析サイト一致の完全攻略時97.0/98.5/100.0/103.0/106.0/109.0%を主テーブルとする。"
  initialHitBySetting:
    definition: "ボーナス合算"
    "1": "1/169.8"
    "2": "1/160.6"
    "3": "1/152.4"
    "4": "1/139.4"
    "5": "1/128.3"
    "6": "1/118.7"
  bonusBySetting:
    big:
      "1": "1/282.5"
      "2": "1/276.5"
      "3": "1/271.9"
      "4": "1/258.0"
      "5": "1/246.4"
      "6": "1/237.4"
    reg:
      "1": "1/425.6"
      "2": "1/383.3"
      "3": "1/346.8"
      "4": "1/303.4"
      "5": "1/267.5"
      "6": "1/237.4"
  baseGamesPer50Coins:
    "1": "39.8G"
    "2": "39.9G"
    "3": "40.0G"
    "4": "40.1G"
    "5": "40.2G"
    "6": "40.5G"
  netIncrease: "NOT_APPLICABLE（純ボーナスノーマル機）"
  basicPayout: "BIG最大259枚 / REG最大103枚。業界記事の一部にREG104枚表記があるが、P-WORLD・遊技通信・1geki等は最大103枚、104枚超払い出し終了で一致。"
  normalCeiling: "NONE。天井機能非搭載。"
  modeSpecificMinimumData:
    notification: "上部ファルコンランプ/7セグ等による完全告知。P-WORLD・グリーンべると・1gekiでは先告知85%/後告知15%。プレイグラフ記事のみ逆表記のためCONFLICTとして分離。"
    privateBrandDeployment: "玉越PB機。GOLD玉越8店舗、計128台を2022-01-25から導入と業界記事で確認。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載の純ノーマル機で、設定変更による天井ゲーム数リセット/短縮はない。"
    modeState: "AT/ART/CZ・天井モード・高確率モードはNOT_APPLICABLE。成立済みボーナスフラグ、告知状態、ボーナス中設定示唆関連の内部状態などの設定変更時クリア契約は機種固有資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE_FOR_YARDSTICK。ボーナスのみで出玉を増やす純ノーマル機で、朝一狙いに用いる有利区間ゲーム数/天井はない。"
    morningStart: "設定変更専用の短縮天井・朝一専用モード・CZ/AT優遇は構造上NOT_APPLICABLE。設定変更専用の公開当選率/恩恵数値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    benefit: "NONE_CONFIRMED_AFTER_RESEARCH。"
    disadvantage: "NONE_CONFIRMED_AFTER_RESEARCH。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "AT/ART/CZ等はNOT_APPLICABLE。成立済みボーナスフラグ/告知状態の据え置き時保持契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE_FOR_YARDSTICK。"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE。天井非搭載。"
    modeState: "純電源OFF→ONのみの場合の成立済みボーナスフラグ、告知状態等の機種固有保持/初期化契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE_FOR_YARDSTICK。"
  gameCounterReset: "NOT_APPLICABLE_TO_CEILING。ゲーム数天井なし。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE。通常天井そのものが非搭載。"
  modeAfterReset:
    behavior: "NOT_APPLICABLE。AT/CZ/天井モード等を持つ機種ではない。"
  stateAfterReset:
    behavior: "AT/CZの内部状態はNOT_APPLICABLE。成立済みボーナス/告知等の電断・設定変更差のみUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "NOT_APPLICABLE_FOR_YARDSTICK。純ノーマル機のため朝一有利区間ランプ/有利区間天井狙いなし。"
  resetBenefits:
    - "天井非搭載のためリセット天井短縮なし。"
    - "設定変更専用モード/CZ/AT優遇はNOT_APPLICABLE。"
    - "公開された朝一専用数値は確認できず。"
  resetPenalties:
    - "公開された設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン条件・発生率は、商品名/型式/DAXEL/玉越/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索したがPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。"
    lampDisplay: "設定変更専用の朝一表示・ランプ挙動はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。有利区間ランプによる判別はNOT_APPLICABLE_FOR_YARDSTICK。"
  numericResetData:
    resetSpecificCeiling: "NOT_APPLICABLE"
    resetModeDistribution: "NOT_APPLICABLE"
    resetFirstHitRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/19129/nippon
    sourceType: industry-primary
    usedFor: [machineName, privateBrand, manufacturer, modelCode, releaseDate, deploymentStores, payoutRateRange, bigProbabilityRange, regProbabilityRange, combinedProbabilityRange, baseSetting1, bigPayout]
  - url: https://amusement-japan.co.jp/article/detail/10002607/
    sourceType: industry-primary
    usedFor: [machineName, manufacturer, modelCode, releaseDate, systemType, baseSetting1, payoutRateRange, bonusProbabilityRange, bonusPayout]
  - url: https://news.p-world.co.jp/articles/19158/yugitsushin
    sourceType: industry-primary
    usedFor: [modelCode, manufacturer, releaseDate, normalType, bigPayout, regPayout, payoutTermination]
  - url: https://news.p-world.co.jp/articles/19132/playgraph
    sourceType: industry-primary
    usedFor: [privateBrand, deploymentCount, releaseDate, technicalProcedure, notificationConflict]
  - url: https://web-greenbelt.jp/post-54549/
    sourceType: industry-primary
    usedFor: [releaseDate, systemType, notificationTiming, bonusProbabilityRange, payoutRateRange]
  - url: https://www.p-world.co.jp/machine/database/9560
    sourceType: industry-database
    usedFor: [generation, inspectionCode, modelCode, releaseDate, payoutRateBySetting, bigProbabilityBySetting, regProbabilityBySetting, combinedProbabilityBySetting, bonusPayout, ceilingNone, systemType]
  - url: https://1geki.jp/slot/s_hyper_a_30/
    sourceType: analysis-high
    usedFor: [payoutRateBySetting, combinedProbabilityBySetting, systemType, bonusPayout, notificationTiming]
  - url: https://1geki.jp/slot/s_hyper_a_30/1/
    sourceType: analysis-high
    usedFor: [bigProbabilityBySetting, regProbabilityBySetting, combinedProbabilityBySetting]
  - url: https://1geki.jp/slot/s_hyper_a_30/4/
    sourceType: analysis-high
    usedFor: [baseGamesPer50BySetting]
  - url: https://www.dechau.com/machine/single.php?area=&id=736
    sourceType: analysis-secondary
    usedFor: [baseRange, ceilingNone, crossCheckCore]
  - url: https://news.p-world.co.jp/articles/18759/nippon
    sourceType: industry-primary
    usedFor: [modelCode, inspectionPassage]

unverifiedAfterResearch:
  - "設定変更時の成立済みボーナスフラグ/告知状態の機種固有クリア契約。"
  - "据え置き・純電源OFF→ON時の成立済みボーナスフラグ/告知状態の保持契約。"
  - "本機固有のリールガックン条件・発生率。"
  - "設定変更専用の表示/ランプによる判別法。"
  - "設定変更専用の公開朝一当選率/恩恵数値。"

conflicts:
  - field: "regMaximumPayout"
    status: "CONFLICT_WORDING_103_VS_104"
    canonical: "最大103枚。104枚超払い出し終了。P-WORLD・遊技通信・1gekiで一致。"
    alternate: "アミューズメントジャパン等の一部記事はRB104枚と表記。"
    handling: "平均化しない。終了条件と最大獲得枚数を区別し、複数一致の最大103枚をperformanceCoreに採用。"
  - field: "notificationTiming"
    status: "CONFLICT_INDUSTRY_ARTICLE"
    canonical: "先告知85% / 後告知15%。P-WORLD・グリーンべると・1gekiで一致。"
    alternate: "プレイグラフ記事のみ先告知15% / 後告知85%と逆表記。"
    handling: "平均化しない。複数一致側をcanonicalとし、逆表記をCONFLICT保持。"
  - field: "releaseDate"
    status: "DATE_LABEL_DIFFERENCE"
    canonical: "2022-01-25（玉越PBの実稼働開始日。玉越発表・複数業界記事一致）"
    alternate: "P-WORLD下部メタデータは導入開始2022-01-24と表記。"
    handling: "PB実店舗の稼働開始を時系列基準として2022-01-25を採用。"

notes:
  - "玉越が開発したPB限定機で、GOLD玉越8店舗へ2022-01-25から導入。全国通常導入機とは分離して独立レコード化。"
  - "P-WORLDメタデータで検定番号1S1372、6.2号機表記を確認。"
  - "純ボーナスノーマル機のため天井・AT/CZモード・有利区間進行をNOT_APPLICABLEとして、機種固有で未確認の設定変更/純電断差と区別した。"
  - "resetBehaviorは商品名・型式名・DAXEL・玉越と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/有利区間を組み替えて再探索したが、機種固有の直接資料を固定できなかったため推定補完していない。"
```
