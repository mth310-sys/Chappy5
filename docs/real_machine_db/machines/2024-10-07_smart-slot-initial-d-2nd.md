# スマスロ頭文字D 2nd

recordNo: 1677
machineName: スマスロ頭文字D 2nd
aliases: 頭文字D 2nd / イニシャルD 2nd / Lスマスロ頭文字D2ndYR
manufacturer: ロデオ製造 / サミー
formalModel: Lスマスロ頭文字D2ndYR
inspectionCode: 430357
releaseDate: 2024-10-07
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_PURE_POWER_CYCLE_AND_GAKKUN_UNVERIFIED

## releaseAndModelEvidence
- 遊技通信/P-WORLDでサミー発表・ロデオ製、型式 `Lスマスロ頭文字D2ndYR` を確認。
- HAZUSEで型式 `L スマスロ頭文字D2nd YR`、検定番号 `430357`、2024-10-07導入を確認。
- 必勝本・なな徹・P-WORLDでも2024-10-07導入および主要性能を照合。
confidence: INDUSTRY + MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 100.8%
- setting4: 106.3%
- setting5: 111.0%
- setting6: 114.3%
initialHitBySetting:
- setting1: レジェンドバトル 1/216.6 / AT 1/405.5
- setting2: レジェンドバトル 1/212.3 / AT 1/396.8
- setting3: レジェンドバトル 1/205.0 / AT 1/379.1
- setting4: レジェンドバトル 1/188.9 / AT 1/338.9
- setting5: レジェンドバトル 1/178.4 / AT 1/314.6
- setting6: レジェンドバトル 1/169.7 / AT 1/296.7
baseGamesPer50: 約31.0G/50枚
netIncrease:
- LEGEND RUSH: 約2.4枚/G
- 擬似ボーナス: 約4.0枚/G
basicPayout:
- LEGEND RUSH: 初回30G+α、2セット目以降20G+α + LEGEND BATTLE
- BIG: 30G、純増約4.0枚/G（約120枚相当の区間性能）
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレジェンドバトル（LB）当選からAT「LEGEND RUSH」を目指す。
- ゲーム数天井は通常最大599G+αでLB当選。299G+α天井の状態も存在。
- AT間でLBを6回連続スルーすると7回目LBでAT当選濃厚。
- AT中のボーナスは擬似ボーナスで純増約4.0枚/G。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PURE_POWER_CYCLE_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間をリセット。
- 天井・内部状態「LBモード」・LBランクをリセットし再構築する。
- 設定変更時は内部ゲーム数をランダム加算してスタートする。
- 50%でゲーム数天井が299G+αに短縮される。
- LBランク抽選を行い、LBランクシナリオが優遇される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間・天井・内部状態「LBモード」・LBランクを引き継ぐことをなな徹の設定変更/据え置き比較表で確認。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONだけを独立条件として、天井・LBモード・LBランク・有利区間の全項目を明示した高信頼機種固有資料は、`電源OFF ON` / `電源OFF・ON` / `電源オンオフ` / 据え置き / 型式名を組み替え、なな徹・一撃・必勝本・旧攻略資料を横断したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の内部引継ぎは確認済みだが、純電断単独へ推定転記しない。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_PURE_POWER_CYCLE

### gameCounterReset
- 通常時ゲーム数天井は最大599G+α。
- 設定変更時は内部G数をランダム加算し、50%で299G+α天井を選択。
- 据え置き時は天井を引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 最大599G+α
resetShortCeiling: 299G+α
resetShortCeilingRate: 50%
benefit: レジェンドバトル当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は内部状態「LBモード」をリセット。
- LBランクを再抽選し、LBランクシナリオは優遇。
- 詳細な設定変更専用LBランク/シナリオ振り分け率は、検索語・資料系統を変えても比較可能な全表を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_FULL_RESET_DISTRIBUTION

### stateAfterReset
- 設定変更時はLBモードをリセット、据え置き時は引き継ぐ。
- 設定変更直後の数ゲーム間はレア小役からのAT直撃抽選が優遇される。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 据え置き時: 有利区間引継ぎ。
- 設定変更以外ではエンディング終了後、AT中LBの一部でも有利区間リセットが発生する。
- 設定変更以外の有利区間リセット後はLB天井299G短縮・LBランクシナリオ3以上・覚醒ゾーン等の恩恵があるが、なな徹はこれらを「設定変更時を除く」と明記しているため朝一設定変更恩恵へ混同しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 設定変更時50%でゲーム数天井が599G+αから299G+αへ短縮。
- 内部ゲーム数をランダム加算。
- LBランクシナリオ優遇。
- 設定変更後1G目に1/199のリーチ目フラグ成立でLEGEND BONUS濃厚。
- 設定変更後数ゲーム間はレア小役からのAT直撃抽選が優遇され、その間のAT当選は初回対戦相手「高橋涼介」濃厚。
- 設定変更後からAT当選まで打ち切った場合、設定1でも機械割100%OVERとの解析あり。
status: CONFIRMED
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の主要な不利要素は主要公開資料から確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NO_PUBLIC_RESET_PENALTY_FOUND

### resetDetection
- 朝一は見た目上のデータが全てリセットされ、なな徹は設定変更/据え置きを見た目で見抜くことは不可能とする。
- 設定変更時は内部G数をランダム加算するため、299G/599G以外で天井発動・LBモード移行がズレても据え置き確定材料にならない。
- 有利区間ランプでも設定変更/据え置き判別不可。
- 一方、前日G数+当日G数の継続挙動は据え置き推測材料として扱う二次攻略資料あり。ただしランダム加算との混同を避け、確定判別にはしない。
- 機種固有リールガックン条件・発生率は `ガックン` / `リセット判別` / 型式名を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_AND_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 599G+α
resetShortCeiling: 299G+α
resetShortCeilingRate: 50%
resetInternalGameAddition: RANDOM_ADD_VALUE_NOT_PUBLICLY_FIXED
firstGameReachFlag: 1/199成立時 LEGEND BONUS濃厚
resetLbRankScenarioDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_NUMERICS / UNVERIFIED_FOR_UNPUBLISHED_VALUES

### publicMorningNumbers
- 設定変更時299G+α天井選択率: 50%。
- 設定変更後1G目リーチ目フラグ: 1/199、成立時LEGEND BONUS濃厚。
- 設定変更後からAT当選まで打ち切り: 設定1でも機械割100%OVER（解析値）。
- ランダム内部G数加算の具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 主要性能値（LB/AT確率、機械割、純増、導入日）に実質的な競合は確認せず。
- 設定変更時の天井表記は「299G」と「299G+α」が資料により併記されるため、本DBでは前兆等を含む解析表記として `299G+α` をcanonicalとし、50%選択率は共通値として採用。

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH
sources:
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/28551/yugitsushin
- 遊技通信: https://www.yugitsushin.jp/news/%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%81%8Cat%E3%81%A7%E8%A6%9A%E9%86%92%E3%81%99%E3%82%8B%E3%80%8C%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E9%A0%AD%E6%96%87%E5%AD%97d-2nd%E3%80%8D/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0085/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10097
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/84697/
- 必勝本 天井: https://hisshobon.com/machineinfo/84643/
- 必勝本 狙いドコロ: https://hisshobon.com/machineinfo/84655/
- 必勝本 有利区間: https://hisshobon.com/machineinfo/84647/
- なな徹 基本確率: https://nana-press.com/kaiseki/machine/818/23266/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/818/24492/
- なな徹 天井: https://nana-press.com/kaiseki/machine/818/24489/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/818/24494/
- 一撃 天井/朝一: https://1geki.jp/slot/ini_d2nd/3/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/218631/

## QA notes
- 実機完全再現用の細粒度抽選は収集対象外。
- 設定変更以外の有利区間リセット恩恵を朝一設定変更恩恵へ混ぜていない。
- 純電源OFF→ONとガックンは十分な再探索後のみUNVERIFIED扱い。
