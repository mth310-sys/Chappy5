# ワニワニパニック～キミのハートをワニづかみ～

machineName: ワニワニパニック～キミのハートをワニづかみ～
manufacturer: Daiichi（大一商会）
releaseDate: 2010-09-21
releaseDateStatus: CONFIRMED_KNAVI
releaseDateNote: K-Naviがホール導入開始2010-09-21を明記。P-WORLDは2010年09月導入、5号機クロニクルも2010/9としており月単位で整合。
generation: 5号機
systemType: ノーマル / ボーナス主体 / BIG+REG / RT・ART非搭載
formalModelName: パチスロワニワニパニック
inspectionNumber: 9S1084
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_RESEARCHED_BASE_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線507「パチスロスパイダーマン3」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount 507 / chronologicalFrontier 2010-09-06。
- 2010-09-06同日群と9/7以降をK-Navi/P-WORLD/当時系資料・月間候補で再監査。9/7〜9/20について具体的なホール導入日を直接確定できる未登録機を今回見つけられず、K-Naviで2010-09-21導入を直接確認できた本機を次の時系列アンカーとして採用。
- 同じ2010-09-21にはKPE「極楽パロディウス」もK-Naviで導入開始を確認。次回は同日群を継続し、境界漏れ監査後に進む。

## payoutRateBySetting

- 設定1: **96.5%**
- 設定2: **98.0%**
- 設定3: **99.8%**
- 設定4: **103.5%**
- 設定5: **107.0%**
- 設定6: **112.0%**

P-WORLDと後年5号機クロニクルで全設定一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/290.0**
- 設定2: **1/282.5**
- 設定3: **1/274.2**
- 設定4: **1/258.0**
- 設定5: **1/242.7**
- 設定6: **1/227.6**

### REG
- 設定1: **1/431.2**
- 設定2: **1/414.8**
- 設定3: **1/394.8**
- 設定4: **1/354.2**
- 設定5: **1/309.1**
- 設定6: **1/252.1**

### ボーナス合算
- 設定1: **1/173.4**
- 設定2: **1/168.0**
- 設定3: **1/161.8**
- 設定4: **1/149.3**
- 設定5: **1/136.0**
- 設定6: **1/119.6**

P-WORLDの設定別表を主値とし、パチビー/K-Naviが設定1約1/173.4・設定6約1/119〜1/119.6を別系統で照合。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「ワニワニパニック」「パチスロワニワニパニック」「Daiichi」「9S1084」と、「50枚」「1000円あたり」「ベース」「コイン持ち」「通常ゲーム数」を組み替え、P-WORLD、K-Navi、パチビー、旧DB、回顧資料、販売資料を再探索したが、比較可能な本機固有の直接値を確定できなかった。
- 小役確率からの逆算は行わない。
confidence: UNVERIFIED

## netIncrease

- **NOT_APPLICABLE**
- P-WORLD/パチビーはRT・ART等の付加機能を搭載せず、ボーナスのみで出玉を増やすノーマルタイプと明記。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- BIG: **約312枚**（345枚を超える払い出しで終了）
- REG: **約117枚**（120枚を超える払い出しで終了）

P-WORLD/K-Navi/パチビー系で一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- RT/ART/AT: **非搭載**。
- 通常ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH**。P-WORLD/K-Navi/パチビーの本機仕様ではボーナス主体のノーマル機として扱われ、天井・周期CZ等の出玉契機を確認しない。
- ボーナス後32G: 「ワニパニゾーン」と呼ばれ、プレミア演出の出現率が上がる演出区間。P-WORLD/K-Naviで確認。
- **重要**: 32G区間はRT/ARTや高確率ボーナス抽選モードとして公開されているものではなく、演出頻度アップとして分離する。出玉性能モードへ読み替えない。

confidence: ANALYSIS_MULTI_SOURCE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH / NO_GAMEPLAY_RESET_BENEFIT_CONFIRMED**。機種名表記揺れ、正式型式名、Daiichi、検定番号9S1084と「設定変更」「リセット」「朝一」「据え置き」「宵越し」「ガックン」「初期出目」を組み替えて再探索したが、本機固有の設定変更時内部処理を直接説明する高信頼資料を確定できなかった。一般的なノーマル機の挙動から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_32G_PRESENTATION_WINDOW / NO_CEILING_TO_CARRY_CONFIRMED**。通常ゲーム数天井やART/ATストック等は確認されないため、それらの据え置き引継ぎ対象はない。ボーナス後32Gの演出頻度アップ区間が日跨ぎ据え置きでどう扱われるかは本機固有資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のボーナス後32G演出区間、リール位置/初期出目等の復帰処理を直接確認できず。

gameCounterReset: **NOT_APPLICABLE_FOR_CEILING / PRESENTATION_32G_POWER_HANDLING_UNVERIFIED**。通常ゲーム数天井・周期天井を確認しないため、天井進捗カウンタのリセット/引継ぎという意味では対象なし。32Gの演出区間は天井ではない。

ceilingAfterReset: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。通常天井および設定変更専用短縮天井は確認されない。

modeAfterReset: **NO_GAMEPLAY_MODE_CONFIRMED / 32G_PRESENTATION_WINDOW_RESET_HANDLING_UNVERIFIED**。通常/天国等のゲーム数モードやRT/ARTモードを確認しない。ボーナス後32Gはプレミア演出頻度アップであり、出玉モードとして扱わない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH / NO_RT_ART_STATE_APPLICABLE**。RT/ART状態は非搭載。設定変更時に演出状態をどう初期化するかは直接資料なし。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更/朝一専用の短縮天井、モード優遇、初当たり優遇等の公開情報は今回確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。失われる天井進捗等の公開不利要素は確認されない。32G演出区間の扱いは未確定なので不利と断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「ガックン」「リール」「初期出目」「朝一」「変更判別」まで検索語を拡張したが、本機固有の信頼できる変更判別条件・確率を確定できなかった。

numericResetData:
- resetDedicatedCeiling: **NOT_APPLICABLE / NONE_CONFIRMED**
- normalCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- postBonusPresentationWindow: **32G**（プレミア演出出現率アップ。出玉モードではない）
- gakkunExactProbability: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: RESEARCHED_NO_DIRECT_RESET_SPEC_FOUND / NORMAL_TYPE_NON_APPLICABLE_FIELDS_SEPARATED / POWER_CYCLE_AND_32G_PRESENTATION_HANDLING_UNVERIFIED

## conflicts

- **NONE_CONFIRMED_FOR_CORE_VALUES**。今回採用した設定別機械割はP-WORLDと5号機クロニクルで一致し、基本獲得枚数・合算両端値も複数解析資料で整合。
- 32G「ワニパニゾーン」はK-Navi/P-WORLDともプレミア演出出現率アップとして説明しており、RT/ART・ボーナス高確率モードとは扱わない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior exact internal handling: UNVERIFIED_AFTER_RESEARCH
- carryOver/powerCycle handling of post-bonus 32G presentation window: UNVERIFIED_AFTER_RESEARCH
- resetDetection exact behavior: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. K-Navi — 本機ページ / 導入日 / 基本仕様 / 獲得枚数 / 32Gワニパニゾーン
   - https://p-kn.com/slot/1283/
   - confidence: ANALYSIS_HIGH
2. P-WORLD — 本機DB / 設定別BIG・REG・合算・機械割 / 基本獲得 / 型式・検定番号 / RT・ART非搭載
   - https://www.p-world.co.jp/machine/database/6101
   - confidence: ANALYSIS_HIGH
3. パチビー — 本機機種情報 / ノーマルタイプ / 合算両端 / RT・ART非搭載 / 32G演出頻度アップ
   - https://www.pachibee.jp/machines/about/210080003
   - confidence: ANALYSIS_HIGH
4. 5号機クロニクル — Daiichi 5号機一覧 / 2010年9月 / 設定別機械割照合
   - https://5goki.com/daiichi
   - confidence: ANALYSIS_SINGLE_REVIEW
5. 中一商事 — 中古実機資料 / 型式名・ノーマルA・312枚/117枚の補助照合
   - https://www.nakaiti.com/html/sDaiichi001.html
   - confidence: SECONDARY_SUPPORT

## nextRelayHint

- recordCount 508 / chronologicalFrontier 2010-09-21。
- 同日未処理候補 **「極楽パロディウス」KPE** はK-Naviで2010-09-21ホール導入開始を確認済み。次回最優先でrepo未登録確認→性能コア＋resetBehavior v0.7収集。
- 2010-09-07〜20境界は今回複数検索したが、日付の定義差が出る機種があり得るため、9/21同日群を閉じる前に月間一覧/当時納品資料で漏れがないかもう一段確認する。
- 遡及resetBehavior QAの既存地点（`2006-11_jack-to-mamenoki.md`まで）は維持し、新規時系列前進を止めない。
