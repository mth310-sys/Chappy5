# 回胴黙示録カイジ 狂宴

recordNo: 1711
machineName: 回胴黙示録カイジ 狂宴
aliases: スマスロ カイジ 狂宴 / L回胴黙示録カイジ 狂宴
manufacturer: サミー / ロデオ
formalModel: L スマスロカイジ 狂宴 FJ
inspectionCode: 4S1731
releaseDate: 2025-03-03
generation: 6.5号機 / スマスロ / AT
systemType: CZ + 擬似ボーナスAT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- HAZUSEは型式 `L スマスロカイジ 狂宴 FJ`、検定番号 `4S1731`、導入開始日2025-03-03を掲載。
- 主要解析各社も2025-03-03導入で一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.8% canonical / 98.9% conflict source
- setting3: 101.5%
- setting4: 105.4%
- setting5: 108.5%
- setting6: 111.2%
initialHitBySetting:
- setting1: 1/384.9
- setting2: 1/376.0
- setting3: 1/360.0
- setting4: 1/324.6
- setting5: 1/304.2
- setting6: 1/290.6
bonusCombinedBySetting:
- setting1: 1/180.4
- setting2: 1/175.9
- setting3: 1/167.8
- setting4: 1/154.2
- setting5: 1/145.7
- setting6: 1/139.3
baseGamesPer50: 約31.8G/50枚（HAZUSEはCZ込み約33.8Gも併記）
netIncrease: 約5.3枚/G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_EXCEPT_SETTING2_PAYOUT_CONFLICT

## modeSpecificMinimumData
- 通常時はレア役・規定G数からざわ高確、閃き前兆、CZ「運否天賦」を経由してボーナスを目指す。
- 通常天井: ボーナス間1000G消化でトネガワRUSH経由のボーナス。当選時トネガワRUSHはレート2倍以上とする資料あり。
- 設定変更後天井: 800G+αへ短縮。
- 通常モードA/B/C/D、裏レートモード、死神モード、勝たなきゃ誰かの養分ポイントを持つ。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_CHANGE_CARRY_POWER_TABLES
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- 天井G: RESET。最大800G+αへ短縮。
- 内部状態: RESET / 再抽選。
- 通常モード: RESET / 再抽選。
- 裏レートモード: 再抽選。
- 死神モード: 再抽選。
- 勝たなきゃ誰かの養分ポイント: RESET / 再抽選。
- 内部ゲーム数: ランダム短縮抽選あり。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間、天井、内部状態、内部モード、勝たなきゃ誰かの養分ポイントを引き継ぐ。
- 裏レートモード、死神モードも電源OFF/ON比較表では引継ぎ確認。設定据え置き時も内部状態継続として扱う。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### powerCycleBehavior
- 純電源OFF→ON: 天井までのG数、状態、通常モード、裏レートモード、死神モード、勝たなきゃ誰かの養分ポイントを引き継ぐ。
- ステージは主要比較表で調査中のため `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間そのものについて純電断比較表の独立記載は固定できなかったため一般論で補完せず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LISTED_ITEMS / UNVERIFIED_FOR_SECTION_AND_STAGE

### gameCounterReset
- 設定変更: RESETし、通常最大1000G → 800G+αへ短縮。内部G数のランダム加算/短縮抽選あり。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### ceilingAfterReset
normalCeiling: 1000G+α
resetCeiling: 800G+α
ceilingBenefit: トネガワRUSH経由でボーナス（必勝本はレート2倍以上のトネガワRUSH）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時モード振り分け:
  - A: 60.2%
  - B: 9.4%
  - C: 27.3%
  - D: 3.1%
- B以上合計: 39.8%（解析上「約40%」）。
- 据え置き: 内部モードCARRY_OVER。
- 電源OFF→ON: 通常モードCARRY_OVER。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### stateAfterReset
- 設定変更: 内部状態RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### advantageousSectionReset
- 設定変更: RESET。なな徹が設定変更を有利区間リセット契機として直接掲載。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 独立した機種固有明記を十分再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更以外の有利区間リセット後はCZ当選＋超千載一遇シナリオ恩恵があるが、資料は明確に設定変更を除外しているため朝一恩恵に混入しない。
confidence: ANALYSIS_HIGH_FOR_CHANGE_AND_CARRY / UNVERIFIED_FOR_POWER_CYCLE

### resetBenefits
- 天井が1000G+α → 800G+αへ短縮。
- 内部ゲーム数ランダム短縮。
- 朝一1G目のレア小役成立でざわ高確移行濃厚。
- 約40%でモードB以上。
- 約20%で死神モード開始。
- 勝たなきゃ誰かの養分ポイント初期値を再抽選し、大量ptスタートの可能性あり。
- 低確率でトネガワRUSH直撃抽選。
- なな徹/主要解析はこれら込みで設定1でも朝一リセット時の出玉率100%超を示唆するが、厳密数値は公開確認できないため定量値としては採らない。
confidence: ANALYSIS_HIGH / PUBLIC_MORNING_VALUES_AVAILABLE

### resetPenalties
- 前日の天井進行、内部状態、通常/特殊モード、養分ポイントを失う可能性がある。
- 設定変更以外の有利区間リセットに付くCZ＋超千載一遇恩恵は設定変更時には適用外。
- 数値化された設定変更固有の不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- なな徹はリセット判別を「現在調査中」としており、機種固有の確定判別法は公開確認できない。
- 800G+α天井を超過した場合は据え置き推測材料になるが、内部G数ランダム短縮があるため早い当選だけで変更確定とはしない。
- 本機固有のリールガックン条件・発生率は検索語・資料系統を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LIMITS / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 1000G+α
resetCeiling: 800G+α
resetModeDistribution:
- A: 60.2%
- B: 9.4%
- C: 27.3%
- D: 3.1%
resetModeBOrHigher: 39.8%（約40%）
resetDeathModeStartApprox: 約20%
firstGameRareRole: ざわ高確移行濃厚
resetTonegawaRushDirect: 低確率 / exact rate PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 設定2機械割: 必勝本・HAZUSE等は98.8%、ちょんぼりすた/一部解析は98.9%。多数かつ型式DB系と必勝本が一致する98.8%をcanonicalとし、`CONFLICT_SETTING2_PAYOUT_98_8_VS_98_9` を保持。

## missingFields
- 純電源OFF→ON時の有利区間そのもの: UNVERIFIED_AFTER_RESEARCH
- 朝一ステージの確定契約: UNVERIFIED_AFTER_RESEARCH（必勝本は設定変更時「限定ジャンケンor17歩」、他比較表は調査中表記が残る）
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- トネガワRUSH朝一直撃率の具体値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 数値化された設定変更固有の不利率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- HAZUSE 型式/検定/導入/基本スペック: https://hazuse.com/hd/4s1731/
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/4S1731/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/85980/
- パチ&スロ必勝本 天井&設定変更/電源OFF-ON: https://hisshobon.com/machineinfo/85978/
- なな徹 朝一/設定変更/据え置き/有利区間: https://nana-press.com/kaiseki/machine/908/28069/
- ちょんぼりすた 基本/天井/朝一/モード振り分け: https://chonborista.com/slot/sammy-slot/228305/
- Sammy公式製品リンク（HAZUSE収録）: https://www.sammy.co.jp/japanese/product/pachislot/kai_ky/

## researchNotes
- 実機完全再現用の詳細内部抽選は収集対象外。
- PARTIAL/UNVERIFIED項目は機種名・正式型式・設定変更・リセット・朝一・据え置き・電源OFF ON・天井・モード・状態・ガックン・有利区間を組み替え、主要解析/旧DB/回顧系を横断しても固定できない項目のみ残した。
