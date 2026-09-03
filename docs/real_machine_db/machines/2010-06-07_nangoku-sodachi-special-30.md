# 南国育ちスペシャル-30

machineName: 南国育ちスペシャル-30
manufacturer: オリンピア
formalModelName: 南国育ちスペシャルYH-30
approvalNumber: 0S0130
releaseDate: 2010-06-07
releaseDateStatus: CONFLICT
releaseDateNote: HAZUSEは導入開始日2010-06-04、パチビーは2010-06-07。前線25φ版について当時グリーンべるとが2010-06-06納品開始予定としているため、6/4と6/7の差を推測で統合せずCONFLICTとして保持する。
generation: 5号機
systemType: ボーナス＋ART / 30Φ沖スロ / モード管理 / 2段階天井 / 無限ART
coreStatus: COMPLETE_CORE_RESET_PARTIAL_BASE_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線482「南国育ちスペシャル」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 482 / chronologicalFrontier 2010-06-07。
- LATEST_HANDOFFが次候補に指定していた30Φ「南国育ちスペシャル-30」を処理。
- 25Φ版とは別型式 `南国育ちスペシャルYH-30`、検定番号 `0S0130` をHAZUSE/P-WORLDで直接確認したため別レコード化。
- パチビーは「南国育ちスペシャルの沖スロ仕様」「基本的なゲーム性からモード、ART仕様など基本的に同じ」とするが、25Φの未確認値を30Φへ自動転記しない。

## payoutRateBySetting

- 設定1: **96.2%**
- 設定2: **99.2%**
- 設定3: **102.4%**
- 設定4: **106.4%**
- 設定5: **111.3%**
- 設定6: **116.3%**

HAZUSEとP-WORLDの30Φ専用ページで一致。
confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/397**
- 設定2: **1/392**
- 設定3: **1/390**
- 設定4: **1/386**
- 設定5: **1/383**
- 設定6: **1/381**

### REG
- 設定1: **1/655**
- 設定2: **1/636**
- 設定3: **1/618**
- 設定4: **1/590**
- 設定5: **1/565**
- 設定6: **1/537**

### ボーナス合算
- 設定1: **1/247**
- 設定2: **1/243**
- 設定3: **1/239**
- 設定4: **1/233**
- 設定5: **1/228**
- 設定6: **1/223**

HAZUSEとP-WORLDで一致。
confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 30Φ専用の比較可能な通常時50枚ベースを、今回確認したHAZUSE / P-WORLD / パチビーの30Φ資料では直接取得できず。
- 第1天井到達後AT状態についてはP-WORLD/パチビーに **約200G/50枚** とあるが、これは通常時ベースではないため `baseGamesPer50` へ混入しない。
- 25Φ版には30.5G/50枚の資料があるが、別型式のため自動転記しない。
confidence: UNVERIFIED

## netIncrease

- ART「南国チャンス」: **約+1.5枚/G**
- **1セット50G**
- トータル継続率: **約83%**（HAZUSE）
- 無限南国チャンス: **約+1.5枚/G / 次回ボーナスまで継続**

confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## basicPayout

- BIG: **約204枚**
- REG: **約48枚**
- BIG終了条件: **297枚を超える払い出しで終了**
- REG終了条件: **8G消化または8回入賞で終了**

P-WORLD/パチビー/HAZUSEで整合。
confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時内部モード: **通常 / 高確率 / 天国 / スペシャル南国** の4モード（HAZUSE）。P-WORLD表記は低確 / 高確 / 天国 / スペシャル南国。
- スペシャル南国モード: ボーナス成立時ART突入 **75%**、ART終了時同モード継続 **75%**。
- 第1天井: **ボーナス後996G**でAT状態へ移行。ベル押し順ナビにより約200G/50枚の維持状態。
- 第2天井: **RT終了後/通常時1600G**で次回ボーナスまで継続する無限ART相当状態。

confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_PARTIAL**。30Φ専用のP-WORLD/パチビー資料で、**RT終了後1600Gの第2天井ゲーム数は設定変更後も引き継がれる**ことを直接確認。設定変更時の開始モードや第1天井996Gカウンタ処理は30Φ固有資料で直接確定できず、25Φ情報を自動転記しない。

carryOverBehavior: **PARTIAL_CONFIRMED_SECOND_CEILING_ONLY**。第2天井1600Gは設定変更でも保持されるため、据え置きで進捗を消去する根拠は確認できない。ただし据え置き時の第1天井996G、モード、ART/RT状態の直接記述は未回収。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の996G/1600Gカウンタ、内部モード、ART/RT状態、告知ランプ状態の扱いを30Φ本機固有資料で直接確定できず。

gameCounterReset: **PARTIAL_NOT_RESET**。第2天井1600Gは設定変更後も引継ぎを直接確認。第1天井996Gの設定変更時処理は `UNVERIFIED_AFTER_RESEARCH`。

ceilingAfterReset: **NO_SHORTENING_CONFIRMED_FOR_SECOND_CEILING**。1600Gは設定変更後も進捗引継ぎ。996G側の変更有無は未確認。設定変更専用の短縮天井数値は今回確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/高確率/天国/スペシャル南国の4モード存在は確認したが、30Φ専用資料で設定変更時開始モード/振り分けを確定できず。25Φ版の「高確モードスタート」は別型式のため自動転記しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART/RT/前兆/告知ランプ等のclear/retainを30Φ固有資料で直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **SECOND_CEILING_PROGRESS_SURVIVES_SETTING_CHANGE**。設定変更後も1600G第2天井進捗が失われない点は朝一の宵越し価値として確認可能。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。30Φ固有資料で設定変更に伴う公開済みの明確な不利要素は今回確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「南国育ちスペシャル30 / 南国育ちスペシャル-30 / YH-30 / 0S0130」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / パトランプ / 判別」を組み替えて探索したが、30Φ本機固有の高信頼な変更判別法を確定できず。2009年南国育ち30、2021年南国育ち-30、2026年L南国育ちSPECIALの情報は除外。

numericResetData:
- firstCeiling: **996G（ボーナス後）**
- secondCeiling: **1600G（RT終了後/通常時）**
- resetSecondCeilingCarryOver: **CONFIRMED**
- resetFirstCeilingCarryOver: **UNVERIFIED_AFTER_RESEARCH**
- resetStartMode: **UNVERIFIED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: SECOND_CEILING_1600G_CARRYOVER_CONFIRMED_FIRST_CEILING_MODE_POWER_CYCLE_DETECTION_UNVERIFIED

## conflicts

- releaseDate: HAZUSE **2010-06-04** / パチビー **2010-06-07**。前線25Φの当時業界資料では6/6納品予定。全国導入の定義差/データ差を今回確定解消できないためCONFLICTを保持し、時系列frontierとの整合上主値を2010-06-07とする。
- mode naming: HAZUSEは「通常 / 高確率 / 天国 / スペシャル南国」、P-WORLDは「低確 / 高確 / 天国 / スペシャル南国」。実質同系統の表記差とみなし、数値競合にはしない。
- 25Φ「南国育ちスペシャルZ」と基本ゲーム性は同系統だが、30Φは `南国育ちスペシャルYH-30 / 0S0130` の別型式。30Φで直接確認できない値は25Φから自動転記しない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior first ceiling 996G handling: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset exact ART/RT/lamp handling: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode distribution / morning hit rate: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. HAZUSE「南国育ちスペシャル－30｜天井・設定判別・機械割」 — https://hazuse.com/machine/pachislot/0S0130/ — 型式名 `南国育ちスペシャルYH-30`、検定番号0S0130、導入開始2010-06-04、設定別BIG/REG/合算/機械割、4モード、ART約+1.5枚/G・50G・83%、75%/75%、996G/1600G天井 — reliability: ANALYSIS_DB
2. HAZUSE「南国育ちスペシャル－30｜基本スペック」 — https://hazuse.com/machine/pachislot/0S0130/genre/201/ — 30Φ専用スペック表、型式・検定番号・導入日 — reliability: ANALYSIS_DB
3. P-WORLD「南国育ちスペシャル30」 — https://www.p-world.co.jp/machine/database/5948 — 30Φ、設定別BIG/REG/合算/機械割、BIG204枚/REG48枚、ART50G・約+1.5枚/G、996G/1600G天井、**1600Gは設定変更後も引継ぎ**、基本ゲーム性は25Φスペシャルと同系統 — reliability: INDUSTRY_MACHINE_DB
4. パチビー「南国育ちスペシャル-30」 — https://www.pachibee.jp/machines/index/210060003 — 導入日2010-06-07、沖スロ仕様、BIG204枚/REG48枚、ART50G・約+1.5枚/G、996G/1600G天井、**1600G設定変更後引継ぎ** — reliability: ANALYSIS_MACHINE_DB
5. 前線25Φレコード `docs/real_machine_db/machines/2010-06-07_nangoku-sodachi-special.md` — 25Φ/30Φを別型式として扱うための重複防止・比較参照のみ。30Φ未確認値の自動転記には使用しない。
