# ネオアイムジャグラーEX

recordNo: 1749
machineName: ネオアイムジャグラーEX
aliases: SネオアイムジャグラーEX / ネオアイム / Neo I'm Juggler EX
manufacturer: 北電子 / KITA DENSHI
formalModel: SネオアイムジャグラーEX-KK
inspectionCode: 4S0346
releaseDate: 2025-09-01
generation: 6号機 / メダル機
systemType: ノーマル(A)タイプ / 完全告知
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSEは型式 `SネオアイムジャグラーEX-KK`、検定番号 `4S0346`、導入開始日2025-09-01、メーカー北電子、天井非搭載を掲載。
- 一撃は導入日2025-09-01、メーカー北電子、ノーマル(A)タイプ、約70,000台、BB約252枚/RB約96枚、天井非搭載を掲載。
- なな徹も導入予定日2025-09-01、メーカー北電子、ノーマル、BB約252枚/RB約96枚で一致。
confidence: INDUSTRY_DB / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.0%
- setting2: 98.0%
- setting3: 99.5%
- setting4: 101.1%
- setting5: 103.3%
- setting6: 105.5%
bonusBySetting:
  big:
  - setting1: 1/273.1
  - setting2: 1/269.7
  - setting3: 1/269.7
  - setting4: 1/259.0
  - setting5: 1/259.0
  - setting6: 1/255.0
  reg:
  - setting1: 1/439.8
  - setting2: 1/399.6
  - setting3: 1/331.0
  - setting4: 1/315.1
  - setting5: 1/255.0
  - setting6: 1/255.0
  combined:
  - setting1: 1/168.5
  - setting2: 1/161.0
  - setting3: 1/148.6
  - setting4: 1/142.2
  - setting5: 1/128.5
  - setting6: 1/127.5
baseGamesPer50: 約40G（後発解析/理論・実戦系資料。主要公開解析では調査中表記もあるため参考値）
basicPayout:
- BIG: 約252枚
- REG: 約96枚
netIncrease: N/A（ボーナスのみで出玉を増やすノーマルタイプ）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_BONUS_AND_PAYOUT / SECONDARY_FOR_BASE

## modeSpecificMinimumData
- GOGO!ランプ点灯でボーナス濃厚となる完全告知ノーマルタイプ。
- 告知タイミングは先告知25%、後告知75%。後告知の約50%で「ガコッ!」告知音。
- BIG約252枚、REG約96枚。
- 天井非搭載。
- AT/CZ、周期、ゲーム数モードによる初当り管理は公開仕様上なし。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL_MACHINE_SPECIFIC_RESET_DETAILS_NOT_PUBLICLY_FIXED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 本機固有の設定変更時について、天井短縮・朝一専用モード・内部状態優遇などの公開解析は確認できず。
- 天井自体が非搭載のため、設定変更専用のゲーム数天井リセット/短縮はN/A。
- 設定変更時のボーナス成立状態、内部フラグ等を含む詳細な機種固有契約は高優先資料で固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_INTERNAL_RESET_CONTRACT

### carryOverBehavior
- 据え置き時の機種固有「ゲーム数・状態・ボーナス成立状態」の引継ぎ表は、なな徹・一撃・必勝本・HAZUSEおよび検索語変更後の資料で固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 天井非搭載のため、天井ゲーム数の据え置き/リセットという実戦上の契約はN/A。
confidence: HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_INTERNAL_CARRYOVER

### powerCycleBehavior
- 純電源OFF→ONの独立比較表、ボーナス成立状態・内部フラグ・表示状態の機種固有引継ぎ記載を固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 一般的なジャグラー/ノーマル機の挙動から推測補完はしない。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### gameCounterReset
settingChange: N/A_NO_CEILING_GAME_COUNTER
carryOver: N/A_NO_CEILING_GAME_COUNTER
powerCycle: N/A_NO_CEILING_GAME_COUNTER
- 通常時ゲーム数はデータ表示上存在するが、機種内天井管理用ゲーム数としてのresetBehavior対象は存在しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_NO_CEILING

### ceilingAfterReset
normalGameCeiling: NONE
resetGameCeiling: NONE
carryOverGameCeiling: NONE
powerCycleGameCeiling: NONE
confidence: INDUSTRY_DB / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用モード、設定変更専用モード、規定ゲーム数モードは公開解析で確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機はボーナスのみで出玉を増やすノーマルタイプとして公開されている。
confidence: ANALYSIS_HIGH_FOR_SYSTEM / NONE_CONFIRMED_AFTER_RESEARCH_FOR_RESET_MODE

### stateAfterReset
- 高確/低確等の継続管理状態や朝一専用内部状態の公開仕様は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス成立内部フラグの設定変更/据え置き/純電断契約は機種固有公開資料を固定できないため `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_FOR_PERSISTENT_STATE / UNVERIFIED_FOR_BONUS_INTERNAL_FLAG

### advantageousSectionReset
settingChange: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
carryOver: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
powerCycle: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
- 有利区間の設定変更/据え置き/純電断を機種固有に列挙した公開資料を固定できず、6号機一般論から補完しない。
- AT/CZ型の有利区間リセット恩恵として扱うべき公開朝一仕様は確認できない。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### resetBenefits
- 設定変更専用の天井短縮、朝一モード優遇、初当り優遇、保証ゲーム等は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 前日天井進行や周期/モード進行喪失に相当する公開仕様は天井・周期・モード非搭載のため確認されない。
- 設定変更固有の朝一不利数値も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 本機固有の設定変更/据え置き判別として確定利用できるガックン条件・発生率、ランプ/表示差は、高優先資料と検索語変更後の二次資料でも固定できず `UNVERIFIED_AFTER_RESEARCH`。
- REG確率・ボーナス履歴等は設定推測材料であり、設定変更そのものを確定する朝一判別とは分離する。
confidence: UNVERIFIED_FOR_DIRECT_RESET_DETECTION

### numericResetData
normalGameCeiling: NONE
resetGameCeiling: NONE
resetMorningModeDistribution: NONE_PUBLISHED
resetMorningBenefitRate: NONE_PUBLISHED
resetMorningPenaltyRate: NONE_PUBLISHED
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues: NONE_FOUND_AFTER_RESEARCH

## conflicts
- 50枚あたりゲーム数は、なな徹では2025-08-26時点で「現在調査中」、一方で後発解析/シミュレーション系は約40G（理論値では条件別約41G前後）を掲載。性能コアの参考値として `約40G` を保持するが、公式/主要初期解析の固定値ではないため信頼度をSECONDARYに落とす。
- 東京スロカス情報局に導入日2024-11-05、設定3 REG 1/331.3という明らかな不整合値がある。一撃・なな徹・HAZUSE等の複数一致する2025-09-01、1/331.0をcanonicalとし、当該二次資料値は `CONFLICT_LIKELY_ERRONEOUS_SECONDARY_SOURCE` として不採用。

## sourceSearchNotes
- resetBehavior再探索語: `ネオアイムジャグラーEX 設定変更`, `据え置き`, `電源OFF ON`, `ガックン`, `朝一`, `天井`, `有利区間`, 型式 `SネオアイムジャグラーEX-KK`。
- 資料系統: HAZUSE業界DB、一撃、なな徹、パチ&スロ必勝本、後発解析/シミュレーション、機種別設定判別ページ。
- シリーズ一般論や旧アイムジャグラーEXのリセット挙動は、本機固有直接根拠がないため移植しない。

## sources
retrievedAt: 2026-09-14
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/4S0346/
- 一撃 機種概要: https://1geki.jp/slot/s_nijex/
- なな徹 機種概要: https://nana-press.com/kaiseki/machine/978/
- なな徹 ボーナス確率/機械割: https://nana-press.com/kaiseki/machine/978/30873/
- なな徹 ボーナス概要: https://nana-press.com/kaiseki/machine/978/31568/
- パチ&スロ必勝本 通常時解説: https://hisshobon.com/machineinfo/87146/
- こぜログ 機種解析（ベース補助）: https://kozelog.net/machine/kitadenshi/neo-aim-juggler-ex/
- けんのスロットシミュレーション（ベース理論補助）: https://kenslo65536.com/sp/kaiseki/juggler-neo-im-ex.html
- 1geki 2025年9月新台スケジュール: https://1geki.jp/newmachinecalender/202509/
