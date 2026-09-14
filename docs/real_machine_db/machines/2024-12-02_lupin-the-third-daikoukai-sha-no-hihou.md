# Lルパン三世 大航海者の秘宝

recordNo: 1688
machineName: Lルパン三世 大航海者の秘宝
aliases: Lルパン三世大航海者の秘宝 / スマスロ ルパン三世 / ルパン三世 大航海者の秘宝 / Lルパン三世大航海者の秘宝H1
manufacturer: 平和
formalModel: Lルパン三世大航海者の秘宝H1
inspectionCode: 4S0946
releaseDate: 2024-12-02
generation: 6.5号機 / スマスロ
systemType: AT / CZ / 擬似ボーナス / 上位AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- HAZUSEは型式 `Lルパン三世大航海者の秘宝H1`、検定番号 `4S0946`、メーカー平和、導入開始日2024-12-02を掲載。
- 遊技通信は平和発表機として同型式を記載し、2024-12-02より順次導入予定と報道。
- Amusement Japan、パチビー、必勝本などでも2024-12-02導入で一致。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 99.1%
- setting3: 101.4%
- setting4: 106.1%
- setting5: 110.1%
- setting6: 114.3%
initialHitBySetting:
- setting1: シングル7 1/920.1 / ダブル7 1/421.5 / 合算1/289.1
- setting2: シングル7 1/879.1 / ダブル7 1/401.4 / 合算1/275.6
- setting3: シングル7 1/831.3 / ダブル7 1/383.9 / 合算1/262.6
- setting4: シングル7 1/685.2 / ダブル7 1/355.1 / 合算1/233.9
- setting5: シングル7 1/633.5 / ダブル7 1/345.6 / 合算1/223.6
- setting6: シングル7 1/636.9 / ダブル7 1/327.5 / 合算1/216.3
baseGamesPer50: 約31G/50枚（約31.1G表記あり）
netIncrease: 擬似ボーナス約2.0枚/G / AT「SUPER HERO」約2.7枚/G / 上位AT約4.7枚/G
basicPayout:
- シングル7擬似ボーナス: 30G、AT期待度約30%
- AT「SUPER HERO」: 初期50G～300G
- 上位AT「盗り放題 SUPER HERO」: 初期100G～300G
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数とレア役を契機に高確/CZ/ボーナス/ATを抽選。
- CZ「ICPO CHALLENGE」は8G継続、成功期待度約43%。
- 初当たり時はシングル7で擬似ボーナス、ダブル7でAT直行。全設定合算ではダブル7比率が概ね約65～70%。
- 通常時のAT間天井は最大1000G+α。シングル7ボーナスでAT非突入の場合はAT間ゲーム数をリセットしない。
- 100G/200G/300G/400Gにも天井候補があり、高設定ほど短い天井が選択されやすい。設定変更時はこれらではなく700G固定。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_LIMITED_UNVERIFIED_POWER_STATE_POINT_SECTION_DETAILS_AND_GAKKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、AT間天井、内部状態、山盛りポイントをRESET。
- AT間ゲーム数は内部RESETされ、設定変更後の天井は700G+αに固定。
- 液晶ゲーム数カウンターは朝一「？？？」表示となる。
- 開始ステージは機種別資料で湖岸線/フィアット表記の差があるため、変更判別に使える固定差としては採用しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、AT間天井、内部状態、山盛りポイントを引き継ぐとする機種別朝一資料を確認。
- 液晶ゲーム数カウンターは「？？？」表示だが内部ではAT間ゲーム数を引き継ぐ。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONではAT間天井ゲーム数を引き継ぎ、ゲーム数カウンターは「？？？」表示のまま内部引継ぎとする1gekiの機種別比較表を確認。
- 内部状態、山盛りポイント、有利区間については「据え置き時引継ぎ」の直接資料はあるが、純電源OFF→ONのみを独立条件として明記した高信頼資料を今回固定できず、一般仕様から推測転記せず `UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH` とする。
confidence: ANALYSIS_HIGH_FOR_GAME_COUNTER / LIMITED_FOR_STATE_POINT_SECTION_DIRECT_POWER_WORDING

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- シングル7擬似ボーナスでAT非突入の場合: AT間ゲーム数CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 最大1000G+α
resetGameCeiling: 700G+α固定
- 必勝本は設定変更時のAT間天井を700Gに固定と明記。
- HAZUSE/P-WORLD/なな徹/1geki/パチビーでも通常最大1000G→設定変更後最大700Gの短縮で一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機固有の「朝一専用モード」名や設定変更時モード振り分けは主要資料横断後も確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 規定G数による高確/CZ/AT抽選は存在するが、設定変更時は天井700G固定が主要な朝一契約。
confidence: ANALYSIS_HIGH_FOR_NO_PUBLIC_RESET_MODE_DISTRIBUTION_FOUND

### stateAfterReset
- 設定変更時: 内部状態RESET。
- 据え置き時: 内部状態CARRY_OVER。
- 設定変更時の内部状態振り分け公開値は、機種名/型式/平和/ルパンシリーズと「設定変更・リセット・朝一・内部状態・高確・振り分け」を組み合わせて再探索したが固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 純電源OFF→ONの独立明記は `UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / LIMITED_FOR_DISTRIBUTION_AND_DIRECT_POWER_WORDING

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- なな徹は有利区間リセット契機を「設定変更時 / エンディング終了後」と明記。設定変更時を除く有利区間リセット後は「俺の名はルパン三世ゾーン」に突入するが、設定変更時はこの恩恵の対象外。
- 純電源OFF→ONのみの独立明記は今回固定できず `UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / LIMITED_FOR_DIRECT_POWER_WORDING

### resetBenefits
- AT間天井が最大1000G+αから700G+α固定へ短縮。
- 朝一700G+αまでにAT天井へ到達するため、設定変更台はリセット狙いの対象となる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更で前日の天井進行、内部状態、山盛りポイント、有利区間を初期化するため、据え置きなら保持される前日の有利な蓄積は失われる。
- 設定変更後の有利区間リセットは、通常のエンディング後リセット時に付く「俺の名はルパン三世ゾーン」恩恵の対象外。
- その他の設定変更限定公開ペナルティは主要資料横断後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一の液晶ゲーム数は「？？？」表示となるため表示だけでは設定変更/据え置きを判別できない。
- 700G+αを超えてAT天井が発動しなければ据え置き濃厚材料。
- 後年実戦資料では、朝一「？？？」解除後の液晶ゲーム数と当日データカウンター+前日ヤメG数の整合/ズレを据え置き・リセット推測材料とする方法が報告されているが、これは実戦判別補助であり確定契約ではないため参考扱い。
- `Lルパン三世大航海者の秘宝H1` / `Lルパン三世 大航海者の秘宝` / `ルパン 大航海` / `平和` と「ガックン/リール/設定変更/リセット/朝一/据え置き/電源OFF」を組み合わせて再探索したが、本機固有のガックン条件・発生率は高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_COUNTER_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 最大1000G+α
resetGameCeiling: 700G+α固定
settingChangeGameCounter: RESET
carryOverGameCounter: CARRY_OVER
powerCycleGameCounter: CARRY_OVER
settingChangeAdvantageousSection: RESET
carryOverAdvantageousSection: CARRY_OVER
powerCycleAdvantageousSection: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
settingChangeInternalState: RESET
carryOverInternalState: CARRY_OVER
powerCycleInternalState: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
settingChangeYamamoriPoint: RESET
carryOverYamamoriPoint: CARRY_OVER
powerCycleYamamoriPoint: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更後AT間天井: 700G+α固定。
- 設定変更専用のモード振り分け、内部状態振り分け、山盛りポイント初期値、ガックン発生率などの比較可能な公開朝一数値は、検索語・資料系統を変更して再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- 開始ステージについて、なな徹は「湖岸線」、1gekiは「フィアットステージ」と表記。いずれも設定変更/電源OFF→ON・据え置き側で同一ステージ扱いのため、変更判別契約には影響しないが `CONFLICT_START_STAGE_LABEL_KOGANSEN_VS_FIAT` として保持。
- ベースは「約31G/50枚」と「約31.1G/50枚」の表記差があるが丸め差の範囲と判断し約31Gをcanonical。
- AT初期G数は業界発表に50～100G表記、後続解析/発表に50～300G表記がある。上位/特定契機を含む初期振り分け表現の差とみられるため、本レコードは後続複数解析の50～300Gを性能レンジとして採用し、初期基本帯50～100Gとの資料差を保持する。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部状態振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時のモード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の山盛りポイント初期値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の内部状態/山盛りポイント/有利区間の独立契約: UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH_FOR_IDENTITY_CORE_RESET_CEILING_COUNTER_SETTING_CHANGE_AND_CARRYOVER / LIMITED_FOR_GAKKUN_RESET_DISTRIBUTIONS_AND_DIRECT_POWER_STATE_POINT_SECTION_WORDING
sources:
- HAZUSE: https://hazuse.com/machine/pachislot/4S0946/
- 遊技通信: https://www.yugitsushin.jp/news/big-chance%E3%81%AF%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E3%81%9C%E3%80%82%E3%80%8Cl%E3%83%AB%E3%83%91%E3%83%B3%E4%B8%89%E4%B8%96%E3%80%80%E5%A4%A7%E8%88%AA%E6%B5%B7%E8%80%85%E3%81%AE%E7%A7%98%E5%AE%9D/
- P-WORLD業界ニュース（遊技通信）: https://news.p-world.co.jp/articles/29347/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004611/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10157
- パチビー: https://www.pachibee.jp/machines/kouryaku/224100004
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/85416/
- 必勝本 天井振り分け: https://p.hisshobon.jp/machine/4415/1/106072
- 必勝本 通常時: https://hisshobon.com/machineinfo/85414/
- 必勝本 AT: https://hisshobon.com/machineinfo/85401/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/851/25845/
- なな徹 天井: https://nana-press.com/kaiseki/machine/851/25842/
- なな徹 山盛りポイント: https://nana-press.com/kaiseki/machine/851/25850/
- 一撃 天井/朝一: https://1geki.jp/slot/l_lupin_totgn/3/
- 一撃 規定G数: https://1geki.jp/slot/l_lupin_totgn/42/
- マルっとWAVE: https://marutto-w.com/industry_news/20241202
- ちょんぼりすた 天井: https://chonborista.com/slot/orinpia-slot/227544/
- 真パチスロ備忘録 リセット判別実戦例: https://sin-surobi.com/l_rupan_daikoukainohihou/33700/
