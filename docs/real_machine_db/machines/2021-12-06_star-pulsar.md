# スターパルサー — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1449
canonicalKey: 2021-12-06_star-pulsar
machineName: スターパルサー
manufacturer: 山佐ネクスト
modelCode: SスターパルサーYTCC
inspectionCode: 1S0038
releaseDate: 2021-12-06
generation: "6号機"
systemType: ノーマル / 完全告知 / ボーナス主体 / 技術介入あり
coreStatus: COMPLETE_CORE_WITH_SETTING6_COMBINED_RATE_CONFLICT
resetQaStatus: COMPLETE_APPLICABILITY_WITH_MACHINE_SPECIFIC_GAME_COUNT_TABLE_AND_DETECTION_UNVERIFIED
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct:
    1: 96.1
    2: 97.9
    3: 99.6
    4: 102.7
    5: 105.9
    6: 109.4
  bigBySetting:
    1: "1/268.6"
    2: "1/264.3"
    3: "1/262.1"
    4: "1/252.1"
    5: "1/240.9"
    6: "1/227.6"
  regBySetting:
    1: "1/425.6"
    2: "1/360.1"
    3: "1/312.1"
    4: "1/270.8"
    5: "1/250.1"
    6: "1/227.6"
  combinedBySetting:
    1: "1/164.7"
    2: "1/152.4"
    3: "1/142.5"
    4: "1/130.5"
    5: "1/122.7"
    6: "1/113.8"
  initialHitBySetting: "リアルボーナス合算 1/164.7→1/113.8。設定6のみ一部資料に1/113.6表記ありCONFLICT。"
  baseGamesPer50Coins: "約40〜43G/50枚（設定差あり。解析表では設定1〜3約40G、設定4約41G、設定5約42G、設定6約43G）"
  netIncrease: NOT_APPLICABLE_NORMAL_TYPE
  basicPayout: "BIG BONUS 最大239枚 / REGULAR BONUS 最大95枚。ボーナス中に1度だけ逆押しで14枚獲得後、順押しで最大枚数獲得可能。"
  normalCeiling: NOT_APPLICABLE_NO_CEILING
  notes:
    - "スターランプ点灯でボーナス確定の完全告知ノーマル機。"
    - "天井・ゾーン非搭載。天国/高確などの通常時モードもないと解析資料で明記。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "機種別解析表では設定変更時のG数はRESET。天井非搭載のため、天井短縮・天井狙いへの影響はNOT_APPLICABLE。"
    modeState: "天国・高確等の通常時モード/状態は非搭載とされるためNOT_APPLICABLE。成立済みボーナス状態などの設定変更時固有契約は十分再探索後も直接固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE。AT/ART非搭載のリアルボーナス主体ノーマル機として、有利区間を朝一物差しに使用しない。"
    morningStart: "設定変更専用の朝一モード、短縮天井、初当たり優遇などは確認できず。"
    benefit: "比較可能な設定変更専用の主要恩恵は確認できず。"
    disadvantage: "比較可能な設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "天井非搭載。据え置き時の本機固有G数挙動を天井性能として扱う必要なし。成立済みボーナス等の内部契約はUNVERIFIED_AFTER_RESEARCH。"
    modeState: "通常時モード/高確はNOT_APPLICABLE。その他の内部状態契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: NOT_APPLICABLE
  powerOffOn:
    gameCountCeiling: "機種別解析表では純電源ON/OFF時のG数は引き継ぐ。天井非搭載のため天井進行上の実利はなし。"
    modeState: "通常時モード/高確はNOT_APPLICABLE。成立済みボーナス等の純電断時固有契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: NOT_APPLICABLE
  gameCounterReset: "設定変更時RESET / 純電源OFF→ONではCARRY_OVERとする機種別解析表あり。ただし天井非搭載。"
  ceilingAfterReset:
    resetSpecificShortening: NOT_APPLICABLE_NO_CEILING
    distributions: []
  modeAfterReset:
    behavior: NOT_APPLICABLE_NO_NORMAL_MODE_SYSTEM
    resetSpecificDistribution: null
  stateAfterReset:
    behavior: "天国/高確などの通常時状態は非搭載。設定変更専用の別状態抽選は確認できず。"
    numeric: null
  advantageousSectionReset: NOT_APPLICABLE_NORMAL_TYPE
  resetBenefits:
    - "天井短縮、朝一専用モード、朝一初当たり優遇などの公開恩恵は確認できず。"
  resetPenalties:
    - "設定変更専用の比較可能な定量的不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有のガックン条件・発生率は、スターパルサー/SスターパルサーYTCC/山佐ネクスト/パルサー/設定変更/リセット/朝一/据え置き/ガックン等へ検索語を変更しても直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "スターランプはボーナス告知/設定示唆用であり、設定変更・据え置き判別用の朝一表示契約は確認できず。"
    other: "朝一の設定変更/据え置きを直接判別できる本機固有の公開契約は十分再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    resetSpecificNumericData: NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH
    note: "設定変更専用モード振り分け、朝一特定G以内当選率、短縮天井、リセット恩恵発生率などの比較可能な公開値は確認できず。"

sources:
  - url: https://news.p-world.co.jp/articles/18072/nippon
    sourceType: contemporary-industry
    usedFor: [manufacturer, modelCode, generation, systemType, bigRegRange, combinedRange, payoutRateSetting6, basicPayout, releaseWindow]
  - url: https://web-greenbelt.jp/post-51350/
    sourceType: contemporary-industry
    usedFor: [manufacturer, systemType, combinedRange, basicPayout, releaseWindow]
  - url: https://p-bomb.co.jp/industry/new-machine/2366/
    sourceType: contemporary-industry
    usedFor: [manufacturer, systemOverview, combinedRange, payoutRateSetting6, basicPayout]
  - url: https://hazuse.com/machine/pachislot/1S0038/
    sourceType: machine-database-analysis
    usedFor: [modelCode, inspectionCode, releaseDate, generation, payoutRange]
  - url: https://hazuse.com/machine/pachislot/1S0038/genre/203/
    sourceType: machine-database-analysis
    usedFor: [basicPayout, noCeiling]
  - url: https://hazuse.com/machine/pachislot/1S0038/genre/208/
    sourceType: machine-database-analysis
    usedFor: [bigBySetting, regBySetting, combinedBySetting]
  - url: https://ichikatsu.com/starpulsar/
    sourceType: contemporary-analysis
    usedFor: [payoutRateBySetting, bigBySetting, regBySetting, combinedBySetting, baseGamesPer50, noCeiling, noNormalMode, settingChangeGameCount, powerCycleGameCount]
  - url: https://chonborista.com/slot/yamasa-slot/155710/
    sourceType: analysis
    usedFor: [baseGamesPer50BySetting, payoutRateBySetting, bigBySetting, regBySetting, combinedBySetting, basicPayout, noCeiling]
  - url: https://www.p-world.co.jp/machine/database/9494
    sourceType: industry-database
    usedFor: [manufacturer, generation, systemType, basicPayout, combinedRange, payoutRateSetting6]
  - url: https://www.nicozon.net/watch/so39655965
    sourceType: contemporary-video-mirror
    usedFor: [releaseDate, baseGamesPer50, noCeiling, fullSpecTable, setting6CombinedConflict]

unverifiedAfterResearch:
  - "設定変更/据え置き/純電断時の成立済みボーナス状態など、本機固有の内部契約"
  - "本機固有ガックン条件・発生率"
  - "朝一表示/出目等による本機固有の設定変更・据え置き判別契約"

conflicts:
  - "設定6ボーナス合算は業界記事・HAZUSE・複数解析で1/113.8が一致する一方、ニコナナ系動画説明では1/113.6。平均せず1/113.8をcanonicalとし、1/113.6をCONFLICTとして保持。"
```

## QAメモ
- 2026-09-12: 最新main README、Mission v0.7、旧INDEX、LATEST_HANDOFF、直前No.1448を確認し、handoff指定の次機No.1449として追加。
- 山佐ネクスト、型式 `SスターパルサーYTCC`、検定番号 `1S0038`、2021-12-06導入を確認。
- 設定別BB/RB/合算/機械割、約40〜43G/50枚、BIG最大239枚/REG最大95枚を複数系統で照合。
- resetBehaviorは天井/ゾーン/天国・高確等をNOT_APPLICABLEとし、機種別解析表にある設定変更G数RESET・純電源ON/OFF G数引継ぎを保存。ノーマル機の一般論から成立済みボーナス状態やガックンを補完していない。
- 境界再監査で2021-12-06群に既存handoff未記載の「泡盛」を検出。GitHub全文検索では既存レコードを確認できなかったため、12/6群はCLOSEDせず次機No.1450候補へ差し込む。
