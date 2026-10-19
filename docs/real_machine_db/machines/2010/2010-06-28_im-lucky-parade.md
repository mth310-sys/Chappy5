# アイムラッキーパレード

machineName: アイムラッキーパレード
manufacturer: タイヨー
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-06-28
releaseDateStatus: CONFIRMED_PRIMARY_WITH_DATE_CONFLICT
releaseDateNote: パチビー2010年6月導入一覧とパチスロ業界史整理資料が2010-06-28で一致。別系統のパチンコビレッジ導入カレンダーは2010-07-05表記のためCONFLICTとして保持し、本DB主値は6/28。
generation: 5号機
systemType: ノーマル / 完全告知 / ボーナス主体
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、493/494前線を再取得。
- 最新handoffの正本地点は recordCount 494 / chronologicalFrontier 2010-06-21。
- 6/22〜6/27をパチビー月間導入一覧で境界監査し、同一覧上の次の明確なパチスロ新規導入は6/28「アイムラッキーパレード」。
- repo検索で同名レコード未登録を確認して495件目として追加。

## payoutRateBySetting

- 設定1: **96.73%**
- 設定2: **97.47%**
- 設定3: **99.91%**
- 設定4: **102.31%**
- 設定5: **106.33%**
- 設定6: **108.32%**

P-WORLDとpacnkの設定判別DBで全設定系列が一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/284.9**
- 設定2: **1/281.3**
- 設定3: **1/280.1**
- 設定4: **1/271.9**
- 設定5: **1/268.6**
- 設定6: **1/264.3**

### REG
- 設定1: **1/455.1**
- 設定2: **1/442.8**
- 設定3: **1/348.6**
- 設定4: **1/321.3**
- 設定5: **1/268.6**
- 設定6: **1/268.6**

### ボーナス合算
- 設定1: **1/175.2**
- 設定2: **1/172.0**
- 設定3: **1/155.3**
- 設定4: **1/147.3**
- 設定5: **1/134.3**
- 設定6: **1/133.2**

P-WORLD、pacnk、後年回顧のジャグラー系比較資料で同系列を照合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「アイムラッキーパレード / アイム ラッキー パレード / タイヨー」と「50枚 / 1000円 / 千円 / ベース / コイン持ち / 通常時ゲーム数」を組み替え、P-WORLD、当時パチマガスロマガ、後年DBを横断。パチマガスロマガの小役・1000円ページは当時のまま「現在調査中」で、比較可能な直接値を確定できなかったため推定しない。
confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

**NOT_APPLICABLE**。ART/AT/RT等の付加増加機能は搭載せず、ボーナスのみで出玉を増やすノーマルタイプ。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約312枚**（345枚超払い出しで終了）
- REG: **約104枚**（105枚規定払い出し系）

P-WORLDと当時パチマガスロマガで約312枚/約104枚が一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 完全告知ノーマルタイプ。
- Lucky Luckyランプ点灯でボーナス告知。
- 告知タイミングはレバーON時25%、第3停止後75%。
- ART/RT、ゲーム数解除モード、CZ、ストック状態等は確認されない。
- pacnkは本機について**天井機能非搭載**と明記。

confidence: ANALYSIS_HIGH_FOR_CORE_SYSTEM / ANALYSIS_SINGLE_FOR_EXPLICIT_NO_CEILING

## resetBehavior — v0.7

settingChangeBehavior: **NO_GAMEPLAY_RESOURCE_EFFECT_CONFIRMED / PHYSICAL_RESET_DETAILS_UNVERIFIED**。本機はボーナス抽選のみの完全告知ノーマルで、天井・RT/ART・ゲーム数解除モード・CZ等の持続性ゲーム資源を確認できない。設定変更時に客側の朝一期待値へ影響する内部モード再抽選や短縮天井は非該当。初期出目やリール挙動など物理的初期化詳細は本機固有資料を確定できず。

carryOverBehavior: **NOT_APPLICABLE_FOR_CEILING_MODE_STATE**。据え置きで引き継ぐ天井ゲーム数・モード・ART/RT/CZ状態は確認されない。単なるボーナス抽選確率は設定に従う通常抽選であり「朝一持越し資源」として扱わない。

powerCycleBehavior: **NO_GAMEPLAY_RESOURCE_EFFECT_CONFIRMED / PHYSICAL_DETAILS_UNVERIFIED**。電源OFF→ONのみで引き継ぎ対象となる天井・モード・ART等は非該当。初期出目/ランプ等の本機固有電源復帰挙動は未確認。

gameCounterReset: **NOT_APPLICABLE**。天井機能非搭載を確認し、内部天井ゲーム数のリセット/引継ぎ項目自体が非該当。

ceilingAfterReset: **NOT_APPLICABLE**。通常天井・リセット短縮天井とも非搭載/非該当。

modeAfterReset: **NOT_APPLICABLE_FOR_GAME_COUNT_OR_INTERNAL_MODE_SYSTEM**。ゲーム数解除モードや朝一専用モードは確認されない。

stateAfterReset: **NOT_APPLICABLE_FOR_ART_RT_CZ_STATE**。ART/RT/CZ・高確等の持続性状態は確認されない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED / PRACTICALLY_NOT_APPLICABLE_FOR_GAMEPLAY_RESOURCES**。朝一短縮天井、専用モード、当選率優遇等は確認されない。

resetPenalties: **NONE_CONFIRMED / PRACTICALLY_NOT_APPLICABLE_FOR_GAMEPLAY_RESOURCES**。設定変更で失う天井進捗・ART/CZストック等は確認されない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / Lucky Luckyランプ / リール」を組み替え再探索したが、本機固有の高信頼な変更判別要素を確定できず。

numericResetData:
- normalCeiling: **NOT_APPLICABLE / NO_CEILING**
- resetCounterHandling: **NOT_APPLICABLE**
- resetCeilingShortening: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE / NONE_CONFIRMED**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: COMPLETE_FOR_GAMEPLAY_RESOURCE_RELEVANCE / PHYSICAL_RESET_DETECTION_UNVERIFIED

## conflicts

1. 導入日: パチビー月間一覧・パチスロ業界史整理資料 **2010-06-28** / パチンコビレッジ導入カレンダー **2010-07-05**。平均化せず両方保持。現時点主値は6/28。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- physicalPowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. パチビー「2010年6月導入一覧」 — https://www.pachibee.jp/machines/schedule/2010-06 — 2010-06-28導入、メーカー=タイヨー — reliability: INDUSTRY_MACHINE_DB
2. P-WORLD「アイムラッキーパレード」 — https://www.p-world.co.jp/machine/database/6006 — 5号機ノーマル/完全告知、BIG/REG/合算、機械割、BIG約312枚/REG約104枚、ART/RT非搭載 — reliability: INDUSTRY_MACHINE_DB
3. パチマガスロマガ「アイムラッキーパレード 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/72/a.php — 完全告知ノーマル、告知比率、BIG約312枚/REG約104枚 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
4. パチマガスロマガ「アイムラッキーパレード 小役/1000円」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/72/c.php — 1000円あたりゲーム数が「現在調査中」のまま — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
5. パチマガスロマガ「アイムラッキーパレード 機種トップ」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/72/taiyo_slot_72.php — 攻め時・ヤメ時「特にナシ」 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
6. pacnk「アイムラッキーパレード 設定判別」 — https://pacnk.com/slot/tools/sh_imluckyparade.html — BIG/REG/機械割全設定、天井機能非搭載 — reliability: RETROSPECTIVE_ANALYSIS_DB
7. パチスロ業界初項目一覧 — https://slothistory.com/ball_frame.html — 申請2010-04-22、検定2010-05-10、発売2010-06-28 — reliability: RETROSPECTIVE_HISTORICAL_DB
8. パチスロ全機種一覧 2009〜2010 — https://slothistory.com/zenkishu_9.html — 2010-06-28 / タイヨー — reliability: RETROSPECTIVE_HISTORICAL_DB
9. パチンコビレッジ導入カレンダー2010 — https://www.pachinkovillage.com/introduction/index.php?Y=2010&action=archive — 2010-07-05表記。日付競合の検知用 — reliability: INDUSTRY_MACHINE_DB_CONFLICT
