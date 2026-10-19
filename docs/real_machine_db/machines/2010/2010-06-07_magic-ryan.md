# マジックライアン

machineName: マジックライアン
manufacturer: ネイチャー・アセスメント
formalModelName: マジックライアン
approvalNumber: 0S0332
releaseDate: 2010-06-07
releaseDateStatus: CONFIRMED_INDUSTRY_SCHEDULE
releaseDateNote: パチビー2010年6月導入スケジュールで2010-06-07導入群に掲載。P-WORLDは2010年06月導入開始と月精度で整合。
generation: 5号機
systemType: ノーマル / BIG+REG / 完全告知
coreStatus: COMPLETE_CORE_BASE_UNVERIFIED_RESET_BEHAVIOR_NA_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前488「ニューパルサーV2」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 488 / chronologicalFrontier 2010-06-07。
- LATEST_HANDOFFの2010-06-07同日群未処理候補から「マジックライアン」をrepo未登録確認後に追加。
- chronologicalFrontierは2010-06-07を維持する。

## payoutRateBySetting

- 設定1: **96.87%**
- 設定2: **98.32%**
- 設定3: **100.83%**
- 設定4: **103.25%**
- 設定5: **105.82%**
- 設定6: **106.97%**

パチマガスロマガとP-WORLDで一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/293.8**
- 設定2: **1/288.7**
- 設定3: **1/288.7**
- 設定4: **1/278.8**
- 設定5: **1/278.8**
- 設定6: **1/274.2**

### REG
- 設定1: **1/464.7**
- 設定2: **1/451.9**
- 設定3: **1/356.1**
- 設定4: **1/327.6**
- 設定5: **1/274.2**
- 設定6: **1/274.2**

### ボーナス合算
- 設定1: **1/180.0**
- 設定2: **1/176.1**
- 設定3: **1/159.4**
- 設定4: **1/150.6**
- 設定5: **1/138.2**
- 設定6: **1/137.1**

パチマガスロマガとP-WORLDで一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「マジックライアン / 50枚 / 1000円あたり / ベース / コイン持ち」、型式名、メーカー名を組み替えて再探索。パチマガスロマガの専用小役ページ自体が「1000円あたりのゲーム数 現在調査中」としており、比較可能な直接値を確定できず。小役確率から独自計算は行わない。

## netIncrease

NOT_APPLICABLE（RT/ART/ATなし）

## basicPayout

- BIG: **約312枚**（345枚超払い出しで終了）
- REG: **約104枚**（105枚超払い出しで終了）

パチマガスロマガとP-WORLDで一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- BIG+REGのみの完全告知ノーマルタイプ。
- GAOGAOランプ点灯でボーナス確定。
- 告知比率は先告知25%、後告知70%、プレミアム5%と解析資料に掲載。
- RT/ART等の付加機能なし。
- 通常ゲーム数天井・ゲーム数モードは確認なし。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **NO_GAME_COUNT_MODE_OR_RT_ART_RESET_TARGET_CONFIRMED / OTHER_INTERNAL_HANDLING_UNVERIFIED**。本機はBIG+REGのみのノーマルタイプで、通常ゲーム数天井・RT/ART・AT・ゲーム数モードを確認していない。設定変更時の完全再現用内部処理は対象外かつ直接資料未確認。

carryOverBehavior: **NO_CEILING_OR_MODE_CARRYOVER_TARGET_CONFIRMED**。据え置き時に宵越し対象となる通常天井・ゲーム数モード・RT/ARTは確認なし。

powerCycleBehavior: **NO_CEILING_OR_MODE_POWER_CYCLE_TARGET_CONFIRMED / OTHER_INTERNAL_HANDLING_UNVERIFIED**。単純電源OFF→ONで引継ぎ/リセットが問題となる通常天井・ゲーム数モード・RT/ARTは確認なし。その他の内部状態は直接資料未確認。

gameCounterReset: **NOT_APPLICABLE_AS_NO_GAME_COUNT_CEILING_CONFIRMED**。

ceilingAfterReset: **NOT_APPLICABLE / NO_CEILING_CONFIRMED**。

modeAfterReset: **NOT_APPLICABLE_AS_NO_GAME_COUNT_MODE_CONFIRMED**。

stateAfterReset: **NOT_APPLICABLE_FOR_RT_ART_STATE / OTHER_INTERNAL_STATE_UNVERIFIED**。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、高確スタート、RT/ART優遇、朝一当選率等は確認なし。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「マジックライアン / ネイチャー・アセスメント / 0S0332」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / ガックン / 初期出目 / リール」を組み替え、P-WORLD、パチマガスロマガ、旧機種一覧・検索アーカイブを横断したが、本機固有の高信頼な変更判別要素を確定できず。

numericResetData:
- normalCeiling: **NONE_CONFIRMED**
- resetCeilingShortening: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: NORMAL_TYPE_NO_CEILING_NO_RT_ART_NO_GAME_COUNT_MODE_RESET_BENEFIT_NONE_CONFIRMED_DETECTION_UNVERIFIED

## conflicts

- なし。今回採用した設定別BIG/REG/合算/PAYOUTはパチマガスロマガとP-WORLDで一致。
- P-WORLDの表示上「BG 約104枚」とある箇所があるが、同ページのボーナス詳細とパチマガスロマガはREGとして扱っており、本レコードではREGに統一。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehaviorOtherInternal: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. パチビー 2010年6月新機種導入日 — https://www.pachibee.jp/machines/schedule/2010-06 — 2010-06-07導入群にマジックライアン掲載 — reliability: INDUSTRY_MACHINE_DB
2. P-WORLD「マジックライアン」 — https://www.p-world.co.jp/machine/database/5960 — ネイチャー・アセスメント、5号機ノーマル、完全告知、設定別BIG/REG/合算/機械割、BIG312枚/REG104枚、型式名、検定番号、2010年06月導入 — reliability: INDUSTRY_MACHINE_DB
3. パチマガスロマガ「マジックライアン 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/07/a.php — BIG+REGのみ、完全告知、告知比率、BIG約312枚/REG約104枚 — reliability: ANALYSIS_HIGH
4. パチマガスロマガ「ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/07/h.php — 設定別BIG/REG/合算、PAYOUT 96.87〜106.97% — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「小役確率・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/07/c.php — 1000円あたりゲーム数は現在調査中 — reliability: ANALYSIS_HIGH
6. 5号機クロニクル ネイチャー・アセスメント全機種一覧 — https://5goki.com/nature-assessment — 2010年マジックライアンの存在・メーカー系列照合 — reliability: RETROSPECTIVE
