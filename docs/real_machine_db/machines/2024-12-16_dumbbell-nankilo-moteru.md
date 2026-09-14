# Lパチスロ ダンベル何キロ持てる？

recordNo: 1694
machineName: Lパチスロ ダンベル何キロ持てる？
aliases: スマスロ ダンベル何キロ持てる？ / Lダンベル / ダン持て / Lダンベル何キロ持てる？X
manufacturer: SANKYO
formalModel: Lダンベル何キロ持てる？X
inspectionCode: 4S0474
releaseDate: 2024-12-16
generation: 6.5号機 / スマスロ
systemType: AT / 高純増AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- SANKYO公式オンライン博物館で2024年12月導入・ATタイプ・純増約8.5枚/Gを確認。
- 遊技日本の2024-10-04業界記事で型式名 `Lダンベル何キロ持てる？X` を確認。
- HAZUSE / 一撃で検定番号 `4S0474`、導入開始日2024-12-16を照合。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.7%
- setting3: 101.3%
- setting4: 105.8%
- setting5: 108.5%
- setting6: 114.9%
initialHitBySetting:
- setting1: CZ 1/247 / AT 1/591
- setting2: CZ 1/245 / AT 1/576
- setting3: CZ 1/244 / AT 1/546
- setting4: CZ 1/242 / AT 1/532
- setting5: CZ 1/240 / AT 1/512
- setting6: CZ 1/239 / AT 1/504
baseGamesPer50: 約32.5G/50枚
netIncrease: 約8.5枚/G（通常AT・上位ATとも）
basicPayout:
- AT「ダンベル何キロ持てる？BONUS」: 30G+α / 50G未満終了時は継続保障 / 平均継続約75G / 平均獲得約640枚
- 上位AT「金肉BONUS」: 差枚数管理 / 純増約8.5枚/G / 平均獲得約1070枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- CZ「MUSCLE ZONE」: 10G+α / 成功期待度約40%。
- 通常ATはG数上乗せ型。120G到達で上位CZ「ゴールデンチャレンジ」濃厚。
- 上位CZ成功期待度は設定1約56%。
- 通常AT間天井1500G+α、CZ間天井750G+α、摂取カロリー10万kcalでCZ当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_GAKKUN_AND_RANDOM_ADD_RANGE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は天井・内部状態・有利区間をリセット。
- 液晶上のG数と摂取カロリーは0表示へリセットされるが、内部G数はランダム加算される。
- AT間天井は通常1500G+αから1000G+αへ短縮。
- 設定変更後1回目のCZ/AT終了画面は紫枠の出現率が通常の約6～10倍に上昇（ひびき・サウナ出現時は次回へ持ち越し）。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は天井・内部状態・有利区間を引き継ぐ。
- 液晶上のG数と摂取カロリーは0表示となるが、内部的には引き継ぐ。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE

### powerCycleBehavior
- 純電源OFF→ONではAT間天井G数・内部G数・有利区間・摂取カロリーを内部的に引き継ぐ。
- 液晶上のG数/摂取カロリー表示は0になる。
- 一撃は「基本的にすべての状態を引き継ぐ」と明記。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### gameCounterReset
- 設定変更: 液晶0Gへ。内部G数はランダム加算され、AT間天井は1000G+αへ短縮。
- 据え置き/純電源OFF→ON: 液晶表示は0Gだが内部G数は引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalATCeiling: 1500G+α
resetATCeiling: 1000G+α
normalCZCeiling: 750G+α
calorieCeiling: 100000kcal
resetInternalGameAdd: ランダム加算あり / 具体的加算G数・振り分けは PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_CEILINGS / UNVERIFIED_FOR_EXACT_RANDOM_ADD_RANGE

### modeAfterReset
- 朝一専用の名称付きモード振り分けは、主要解析・型式名・メーカー名・シリーズ名で再探索後も比較可能な公開テーブルを固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更時の内部Gランダム加算により、CZ高確ゾーン・CZ/AT天井の到達位置は通常時とずれる可能性がある。
confidence: UNVERIFIED_FOR_SEPARATE_RESET_MODE_TABLE / ANALYSIS_HIGH_FOR_RANDOM_ADD_EFFECT

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: 内部状態CARRY_OVER。
- 純電源OFF→ON: 一撃の機種固有比較では基本的に状態引継ぎ扱い。
confidence: ANALYSIS_HIGH / DIRECT_TABLE_PLUS_CROSS_CHECK

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更以外の有利区間リセット契機は通常AT終了時の一部、上位AT終了時の一部、エンディング終了後。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- AT間天井が1500G+α→1000G+αへ短縮。
- 内部G数がランダム加算されるためCZ間・AT間天井へ通常より浅い実ゲーム数で到達する可能性がある。
- 設定変更後1回目の終了画面で紫枠出現率が約6～10倍となり、設定判別材料が増える。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日の天井進行・内部状態・有利区間・摂取カロリー等の蓄積は設定変更でリセット対象。
- 設定変更固有の追加的不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一から1000G消化してAT間天井が発動しなければ据え置き濃厚。
- 液晶G数/摂取カロリーは設定変更でも据え置き/電源OFF→ONでも0表示となり、表示単独では判別不可。
- 設定変更時は内部G数ランダム加算があるため、神社ステージ等の規定G挙動がずれてもリセット確定材料にはならない。
- 本機固有のリールガックン条件・発生率は「機種名/正式型式/SANKYO/設定変更/朝一/ガックン」等へ検索語を変えて再探索後も高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIORAL_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalATCeiling: 1500G+α
resetATCeiling: 1000G+α
czCeiling: 750G+α
calorieCeiling: 100000kcal
resetInternalGameAdd: RANDOM / EXACT_RANGE_UNVERIFIED_AFTER_RESEARCH
firstEndScreenPurpleFrameBoost: 約6～10倍
settingChangeAdvantageousSection: RESET
carryOverAdvantageousSection: CARRY_OVER
powerCycleAdvantageousSection: CARRY_OVER
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- AT間天井: 1500G+α → 1000G+α。
- 内部G数: ランダム加算あり（加算範囲・振り分けは未公表/未固定）。
- 設定変更後1回目の終了画面: 紫枠出現率約6～10倍。
- 朝一1000G消化してAT間天井が発動しない場合: 据え置き濃厚。

## conflicts
- AT初当り設定5について、主要高信頼資料（P-WORLD / HAZUSE / ちょんぼりすた）は1/512で一致する一方、一撃の設定判別ページでは1/514表記が確認される。平均化せず `CONFLICT_AT_SETTING5_1_512_VS_1_514` として保持し、canonicalは複数一致の1/512を採用。

## missingFields
- 設定変更時の内部G数ランダム加算の具体的範囲・振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 独立した朝一専用モード振り分け表: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- OFFICIAL: https://www.sankyo-fever.jp/collection/971/
- INDUSTRY: https://yugi-nippon.com/pachinko-new-machine/post-67208/
- INDUSTRY: https://news.p-world.co.jp/articles/29840/greenbelt
- ANALYSIS_HIGH: https://hazuse.com/machine/pachislot/4S0474/
- ANALYSIS_HIGH: https://www.p-world.co.jp/machine/database/10141
- ANALYSIS_HIGH: https://1geki.jp/slot/l_dumbbell/
- ANALYSIS_HIGH_RESET: https://1geki.jp/slot/l_dumbbell/3/
- ANALYSIS_HIGH_RESET: https://nana-press.com/kaiseki/machine/855/25386/
- ANALYSIS_HIGH_CEILING: https://nana-press.com/kaiseki/machine/855/25383/
- ANALYSIS_HIGH: https://chonborista.com/slot/sankyo-slot/222563/
