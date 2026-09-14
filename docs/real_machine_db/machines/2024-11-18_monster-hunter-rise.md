# スマスロ モンスターハンターライズ

recordNo: 1685
machineName: スマスロ モンスターハンターライズ
aliases: Lモンスターハンターライズ / モンハンライズ / スマスロ モンハンライズ
manufacturer: アデリオン製造 / 総発売元 フィールズ
formalModel: LモンスターハンターライズXA
inspectionCode: 430243
releaseDate: 2024-11-18
generation: 6.5号機 / スマスロ
systemType: AT / カムラポイント・クエスト + CZ + 討伐継続型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 円谷フィールズホールディングス系の発売告知は製造元を株式会社アデリオン、総発売元をフィールズ株式会社と明記。
- 遊技日本/P-WORLDの2024-10-22業界記事は製造元アデリオン、型式名 `LモンスターハンターライズXA` を掲載。
- HAZUSEは型式 `LモンスターハンターライズXA`、検定番号 `430243`、導入開始日2024-11-18を掲載。
- グリーンべると/P-WORLDは2024-11-18にホール導入開始と報道。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.8%
- setting3: 100.3%
- setting4: 105.4%
- setting5: 110.1%
- setting6: 114.3%
initialHitBySetting:
- setting1: AT 1/309.5
- setting2: AT 1/301.4
- setting3: AT 1/290.8
- setting4: AT 1/256.4
- setting5: AT 1/237.1
- setting6: AT 1/230.8
baseGamesPer50: 約32.7G
netIncrease:
- BAR/赤7系AT: 約2.7枚/G
- 紫7系AT: 約4.0枚/G
basicPayout:
- AT「狩猟ボーナス」BAR: 25G+α / 純増約2.7枚/G
- 赤7: 40G or 50G+α / 純増約2.7枚/G
- 紫7: 60G or 100G+α / 純増約4.0枚/G
- 狩猟ボーナスのモンスター平均討伐期待度: 約52%
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はカムラポイント規定到達からクエスト、規定リプレイ回数からCZ「アイルーだるま落とし」、レア役直撃等でATを目指す。
- ゲーム数天井は通常時999G+α、AT間クエスト回数天井は7回目。いずれも赤7以上のボーナス当選。
- ポイントモードA/B/C/DとクエストテーブルA/B/天国準備/天国が存在。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_LIMITED_UNVERIFIED_GAKKUN_AND_EXACT_RESET_DISTRIBUTIONS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、ゲーム数天井、クエスト回数進行、内部状態、ポイントモード、クエストテーブル等をリセット/再抽選。
- 内部状態は通常状態から開始。
- カムラポイントは表示上0ptだが内部的にランダム加算、規定リプレイ回数も内部的にランダム加算。
- ポイントモードはモードB以上濃厚。
- クエストテーブルは75%以上で天国準備以上を選択。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井、内部状態、カムラポイント、ポイントモード、クエストテーブル、リプレイ回数、AT側の翔蟲ポイント・金冠状態を引き継ぐとする機種別比較資料を確認。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは有利区間、ゲーム数天井、内部状態、ポイントモード、クエストテーブル、規定リプレイ回数を引き継ぐとする複数機種別資料を確認。
- カムラポイントは液晶表示上0ptになるが内部値は引き継ぐ。
- 電断時の液晶ステージ確定値は高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CORE_CARRYOVER / UNVERIFIED_FOR_STAGE

### gameCounterReset
- 設定変更: 999G+αのゲーム数天井とAT間クエスト回数進行をリセット。
- 据え置き: 引継ぎ。
- 純電源OFF→ON: 引継ぎ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 999G+α
normalQuestCeiling: AT間7回目のクエスト
resetGameCeiling: 999G+α（固定短縮なし）
resetQuestCeiling: 最大7回（固定短縮なし。ただしクエストテーブル優遇あり）
- 設定変更後のゲーム数天井短縮は確認されていない。朝一の早当たり優遇は主にポイントモード/クエストテーブル/内部加算による。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- ポイントモードはB以上濃厚。
- クエストテーブルは75%以上で天国準備以上。
- B/C/Dの正確な設定変更時ポイントモード振り分け、天国準備/天国の正確な内訳は、表記揺れ・型式名・メーカー名と「設定変更/リセット/朝一/モード振り分け」を変えて公式・業界・主要解析・旧DB系を再探索したが固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LOWER_BOUND / UNVERIFIED_FOR_FULL_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態を通常へリセット。
- 据え置き/純電源OFF→ONは内部状態引継ぎ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 据え置き/純電源OFF→ON: 有利区間引継ぎとする機種別比較資料を確認。
- 通常営業中は有利区間内差枚+2100枚到達等からエンディング後に有利区間リセットし、「百竜ノ淵源チャレンジ」へ移行するが、解析資料はこの恩恵を設定変更時除外としているため朝一恩恵には混入しない。
confidence: ANALYSIS_HIGH

### resetBenefits
- ポイントモードB以上濃厚。
- クエストテーブル75%以上で天国準備以上。
- カムラポイントを内部ランダム加算。
- リプレイ回数を内部ランダム加算し、朝一からCZ到達が早まる可能性あり。
- AT「狩猟ボーナス」初回は50%で金冠付きモンスターが登場。討伐成功時は「剥ぎ取りチャンスG」獲得。
- 初回AT側の翔蟲ポイントを0〜4ptからランダム設定。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 内部状態は設定変更で通常状態へ戻るため、据え置きなら保持される高確/超高確を前日から持っていた場合はその状態を失う。
- それ以外の設定変更時限定の主要な明確な不利要素は、資料系統を変えて再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_STATE_RESET / NO_OTHER_PUBLIC_RESET_PENALTY_FOUND

### resetDetection
- 朝一は液晶上のカムラポイントやリプレイ回数がリセット表示になる一方、設定変更時は内部加算、電源OFF→ON時は内部引継ぎがあるため見た目だけでの判別は困難。
- 前日値を記録していても内部値を直接確認できず、主要解析も確定判別困難/調査中扱い。
- `LモンスターハンターライズXA` / `アデリオン` / `モンハンライズ` と「ガックン/設定変更/据え置き/朝一/電源OFF」を組み合わせて再探索したが、本機固有のリールガックン条件・発生率は高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_DIFFICULTY / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 999G+α
normalQuestCeiling: 7回目
resetGameCeiling: 999G+α
resetQuestCeiling: 7回目
resetPointMode: B以上濃厚
resetQuestTableHeavenPrepOrHigher: 75%以上
resetInternalKamuraPoints: RANDOM_ADDITION_VALUE_UNPUBLISHED
resetInternalReplayCount: RANDOM_ADDITION_VALUE_UNPUBLISHED
firstAtGoldCrownRate: 50%
resetWirebugPoints: 0〜4ptランダム
powerCycleGameCeiling: CARRY_OVER
powerCycleInternalState: CARRY_OVER
powerCyclePointMode: CARRY_OVER
powerCycleQuestTable: CARRY_OVER
powerCycleKamuraPoints: DISPLAY_0_BUT_INTERNAL_CARRY_OVER
powerCycleReplayCount: CARRY_OVER
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更時ポイントモード: B以上100%相当（B以上濃厚）。
- 設定変更時クエストテーブル: 75%以上で天国準備以上。
- 朝一1回目の狩猟ボーナス: 50%で金冠付きモンスター。
- 翔蟲ポイント初期値: 0〜4ptからランダム。
- 天井: 999G+α / AT間7回目クエストで、設定変更による固定短縮なし。
- 内部カムラポイント/内部リプレイ回数: ランダム加算だが具体振り分け・加算値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- 主要資料間で設定別AT初当り、機械割、ベース、純増、通常天井、主要リセット恩恵の重大な数値競合なし。
- メーカー表記は市場資料で「エンターライズ」とする例があるが、発売告知/業界一次資料は製造元をアデリオン、総発売元をフィールズと明記するためcanonicalはこの関係を採用。エンターライズはブランド/案内系表記としてaliases側の扱いとし、別スペックとは判定しない。

## missingFields
- 設定変更時ポイントモードB/C/Dの正確な振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時クエストテーブル天国準備/天国の正確な内訳: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 内部カムラポイントのリセット時ランダム加算量・振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 内部リプレイ回数のリセット時ランダム加算量・振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の開始ステージ確定値: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH_FOR_IDENTITY_CORE_AND_RESET / LIMITED_FOR_EXACT_RESET_DISTRIBUTIONS_STAGE_AND_GAKKUN
sources:
- 円谷フィールズホールディングス/発売告知: https://origin.digitalpr.jp/r/95036
- 遊技日本/P-WORLD 発表会: https://news.p-world.co.jp/articles/29237/nippon
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/29169/yugitsushin
- グリーンべると/P-WORLD 導入開始: https://news.p-world.co.jp/articles/29479/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/SX0089/
- 一撃 基本: https://1geki.jp/slot/l_mh_rize/
- 一撃 天井/朝一: https://1geki.jp/slot/l_mh_rize/3/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aderion_slot/05/kh01.php
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/837/25311/
- なな徹 狙い目/リセット判別: https://nana-press.com/kaiseki/machine/837/25431/
- なな徹 AT性能: https://nana-press.com/kaiseki/machine/837/25321/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10138
- スロベース 電源OFF→ON比較: https://slobase.jp/machines/monster-hunter
- 一勝家 電源ON/OFF比較: https://itikatu.jp/monsterhunter-rise/
- スロぱちクエスト リセット一覧: https://www.slopachi-quest.com/article/resets/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/220896/
