# てぃだどんどん

recordNo: 1715
machineName: てぃだどんどん
aliases: Lてぃだどんどん / スマスロ てぃだどんどん
manufacturer: パオン・ディーピー / 大都技研
formalModel: Lてぃだどんどん
inspectionCode: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
releaseDate: 2025-03-03
generation: 6.5号機 / スマスロ / AT
systemType: 沖スロ系 擬似ボーナスAT
settings: 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 1geki/P-WORLD/主要解析は2025-03-03導入で一致。
- パオン・ディーピー機として扱われ、大都技研系販売/公式情報も確認できる。
- 型式細部・検定番号は表記揺れを含め十分再探索後も高信頼固定値を確認できず、推測採用しない。
confidence: ANALYSIS_HIGH_FOR_RELEASE / UNVERIFIED_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- setting2: 97.7%
- setting3: 99.0%
- setting4: 102.9%
- setting5: 107.1%
- setting6: 110.3%
initialHitBySetting:
- setting2: 1/295.7
- setting3: 1/282.9
- setting4: 1/248.3
- setting5: 1/222.9
- setting6: 1/204.4
baseGamesPer50: 約30G/50枚
netIncrease: 約6.0枚/G
basicPayout:
- BIG: 50G+α / 平均約345枚
- REG: ベルナビ5回 / 平均約56枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時最大天井999G+α。
- 設定変更後最大555G+α。
- 引き戻しモード/ガトリング抜け後など一部状況は最大222G+α。
- ボーナス高確率「ヘブン」は5G+α。ボーナス後はヘブン高確率へ移行。
- ヘブン高確率は連準備/連ノーマル/ストロング/ガトリングの4段階。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_CHANGE_CARRY_POWER_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- 天井: RESET。通常999G+α → 555G+αへ短縮。
- 内部モード: RESET / 再抽選。
- 約40%でリプ連チャンスモードへ移行。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間、天井、内部モードを引き継ぐ。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON: 有利区間、天井、内部モードを引き継ぐ。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### gameCounterReset
- 設定変更: RESETし555G+αへ短縮。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: 999G+α
resetCeiling: 555G+α
specialShortCeiling: 222G+α（引き戻しモード/ガトリング抜け後等。設定変更そのものの固定天井ではない）
ceilingBenefit: ボーナス当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: 内部モードRESET / 再抽選。
- 約40%でリプ連チャンスモードへ移行。
- 据え置き・電源OFF→ON: 内部モードCARRY_OVER。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### stateAfterReset
- 「内部状態」をモードと独立して設定変更/据え置き/純電断比較した高信頼機種固有資料は十分再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間ランプによる設定変更/据え置き判別は不可。
confidence: ANALYSIS_HIGH

### resetBenefits
- 天井999G+α → 555G+αへ短縮。
- 約40%でリプ連チャンスモードスタート。
- リプ連チャンスモードはリプレイ2連からヘブン当選率が大きく上がる朝一重要モードとして公開解析あり。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日の天井進行・内部モードを失う。
- 数値化された設定変更固有不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 朝一555G+αを超えてボーナス非当選なら据え置き濃厚材料。
- 有利区間ランプでは判別不可。
- 本機固有ガックン条件・発生率は機種名/型式候補/メーカー/リセット/据え置き/電源OFF ONを変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 999G+α
resetCeiling: 555G+α
resetReplayChainChanceMode: 約40%
special222Ceiling: 222G+α（条件付き）

## conflicts
- メーカー表記は媒体によりパオン・ディーピー / 大都技研の表現差があるため製造/販売系統として併記。

## missingFields
- 正式型式細部・検定番号: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 内部状態の独立リセット契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 1geki オンライン遊技説明/基本スペック: https://1geki.jp/slot/l_thidadndn/39/
- なな徹 朝一/設定変更/据え置き: https://nana-press.com/kaiseki/machine/939/28174/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/939/28175/
- スロパチクエスト 天井/電源OFF-ON/リセット: https://www.slopachi-quest.com/article/tlidadondon-tenjou/
- P-WORLD 基本仕様: https://www.p-world.co.jp/machine/database/10226
- 6確 天井/基本性能: https://www.kaku6.jp/slot/tidadondon/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/231988/

## researchNotes
- 実機完全再現用のヘブン中全抽選や通常全モード移行テーブルは対象外。
- 型式/検定番号とガックンは再探索後も固定できないため推測で埋めていない。
