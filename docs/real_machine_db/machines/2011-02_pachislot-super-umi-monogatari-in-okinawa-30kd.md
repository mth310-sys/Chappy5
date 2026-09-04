# パチスロスーパー海物語IN沖縄30KD

machineName: パチスロスーパー海物語IN沖縄30KD
manufacturer: 三洋物産
formalModelName: パチスロスーパー海物語IN沖縄30KD
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: パチスロ スーパー海物語IN沖縄30KD / スーパー海物語IN沖縄30KD / スーパー海物語IN沖縄-30 / 沖海スロ30
generation: 5号機
releaseDate: 2011-02
releaseDateStatus: MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED
releaseDateNote: pacnkと5号機クロニクルで2011年2月導入を確認。P-WORLDで30KDが独立した30Φスペックとして存在することを確認。2011-02-07/02-06等の具体日を機種名・型式名・30KD・メーカー名で再探索したが、30KD固有の直接日付は確定できなかったため日付を推定しない。
systemType: ノーマルタイプ / ボーナス主体 / 完全告知 / 沖スロ30Φ / ART非搭載
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、2011-02-07前線を再取得して開始。
- main上で標準25Φ「パチスロスーパー海物語IN沖縄」とDAXEL「幕末維新龍馬烈伝」がすでに登録済みであることを対象パス再取得で確認し、重複追加を回避。
- LATEST_HANDOFFが具体日未確定候補として残していた30KDを、標準機とは性能が異なる別スペックと確認。
- exact-date探索を「30KD」「IN沖縄-30」「導入日」「2011年2月7日」「2月6日」「三洋物産」等で再実施したが、月粒度より細かい本機固有日付を確定できず。
- 時系列漏れを防ぐため月粒度レコードとして追加するが、chronologicalFrontierの日付値2011-02-07を本機から逆算・変更しない。

## payoutRateBySetting

pacnk / 5号機クロニクル一致:
- 設定1: **96.7%**
- 設定2: **98.1%**
- 設定3: **99.4%**
- 設定4: **102.0%**
- 設定5: **104.4%**
- 設定6: **108.4%**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

pacnk:

### BIG
- 設定1: **1/306.2**
- 設定2: **1/299.3**
- 設定3: **1/295.2**
- 設定4: **1/287.4**
- 設定5: **1/278.9**
- 設定6: **1/266.4**

### REG
- 設定1: **1/574.9**
- 設定2: **1/560.1**
- 設定3: **1/546.1**
- 設定4: **1/496.5**
- 設定5: **1/452.0**
- 設定6: **1/404.5**

### ボーナス合算（上記BIG/REGからの計算値は元データへ採用しない）
- **UNVERIFIED_DIRECT_SOURCE_AFTER_RESEARCH**

confidence: ANALYSIS_SINGLE_CROSSCHECKED_VARIANT

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「スーパー海物語IN沖縄30KD / IN沖縄-30 / 30Φ / 50枚 / 1000円 / ベース / コイン持ち」を組み替え、P-WORLD、pacnk、5号機一覧、検索可能な旧攻略資料を横断したが、30KD固有の比較可能な直接値を確定できず。
- 標準25Φの34.34〜36.18Gを転用しない。

confidence: UNVERIFIED

## netIncrease

- ART/AT純増: **NOT_APPLICABLE**
- P-WORLDがART等の付加機能を搭載しないノーマルタイプと明記。

confidence: INDUSTRY_DATABASE

## basicPayout

P-WORLD:
- BIG: **約336枚**
- REG: **104枚**

confidence: INDUSTRY_DATABASE

## modeSpecificMinimumData

- 30Φ沖スロ仕様の完全告知ノーマルタイプ。
- P-WORLDは5号機海シリーズ第2弾、ARTなどの付加機能なしと明記。
- 海モード / マリンモード / シーサーモードはプレイヤー選択の演出モードであり、内部ゲーム数モードとは分離する。
- 標準25ΦとはBIG/REG・機械割系列が異なるため別レコード化。
- 通常ゲーム数天井の具体値は本機固有の直接資料で確認できず、標準25Φや後継機の記述を転用しない。

confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **NO_MATERIAL_GAMEPLAY_RESET_EFFECT_CONFIRMED_AFTER_RESEARCH / LOW_LEVEL_UNVERIFIED**。30KDはART/AT/CZ非搭載のボーナス主体ノーマル。機種名・30KD・IN沖縄-30・三洋物産と設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックンを組み替えて再探索したが、朝一客行動に影響する本機固有の設定変更恩恵・不利や低レベル挙動の直接資料を確定できず。標準25ΦのresetBehaviorを自動転記しない。

carryOverBehavior: **NO_MATERIAL_CARRYOVER_TARGET_CONFIRMED / LOW_LEVEL_UNVERIFIED**。ARTストック/CZ/長期ゲーム数モード等の主要持越し対象は確認されない。ボーナス成立状態等の低レベル処理は未確認。

powerCycleBehavior: **NO_MATERIAL_GAMEPLAY_EFFECT_CONFIRMED / LOW_LEVEL_UNVERIFIED**。単純電源OFF→ON時の初期出目・リール等は本機固有の直接根拠を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH / NO_NUMERIC_CEILING_CONFIRMED**。本機固有の通常天井G数を直接確定できないため、設定変更時のCLEAR/RETAINも推測しない。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井・朝一専用G数は確認されない。

modeAfterReset: **NOT_APPLICABLE_AS_GAME_COUNT_MODE / LOW_LEVEL_UNVERIFIED**。3つのモードは演出選択。内部ゲーム数モードのリセット振り分けは確認されない。

stateAfterReset: **NO_MATERIAL_INTERNAL_STATE_CONFIRMED / LOW_LEVEL_UNVERIFIED**。長期高確/低確状態による初当たり管理は確認されない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。30KD固有のガックン、初期出目、ランプ/表示等による変更判別は検索語・資料系統変更後も直接確定できず。

numericResetData:
- normalCeiling: **UNVERIFIED_AFTER_RESEARCH / NO_NUMERIC_CEILING_CONFIRMED**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **NONE_CONFIRMED**
- resetStateDistribution: **NONE_CONFIRMED**
- resetMorningHitRate: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE**
- resetDetectionNumeric: **NONE_CONFIRMED**

resetBehaviorQA: **RESEARCHED_NO_MATERIAL_RESET_TARGET_CONFIRMED_LOW_LEVEL_DETAILS_UNVERIFIED**

## conflicts

- 標準25Φと30KDは同一タイトル系統だが性能値が明確に異なるため、同一機種のCONFLICTとして平均化せず**別スペック**として分離。
- 5号機クロニクルは「25Φ/30Φ」を一見同一見出しで96.7〜108.4%と掲載するが、当時標準25Φ資料は97.5〜110.0%系列。pacnkが30KDを独立項目で96.7〜108.4%と掲載するため、当該系列を30KD側へ保持。

## missingFields

- exact releaseDate: **UNVERIFIED_AFTER_RESEARCH（2011-02のみ確定）**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- bonusCombinedBySetting direct source: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- explicit normal ceiling/no-ceiling statement: **UNVERIFIED_AFTER_RESEARCH**
- low-level settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. P-WORLD — パチスロスーパー海物語IN沖縄30KD
   - https://www.p-world.co.jp/machine/database/6276
   - 三洋物産、5号機、ノーマルタイプ、完全告知、沖スロ、ART等付加機能なし、BIG約336枚/REG104枚を確認。
   - confidence: INDUSTRY_DATABASE

2. pacnk — パチスロ スーパー海物語IN沖縄30KD 設定判別ツール
   - https://pacnk.com/slot/tools/sh_supaumistoryinokinawa30ked.html
   - 2011年2月導入、設定別BIG/REG、PAYOUT 96.7〜108.4%を確認。
   - confidence: ANALYSIS_SINGLE

3. 5号機クロニクル — 三洋物産5号機一覧
   - https://5goki.com/sanyo
   - 「パチスロスーパー海物語IN沖縄 25Φ/30Φ」2011/2、機械割96.7〜108.4%を確認。pacnkの30KD系列と照合。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE

4. PAPIMO機種一覧
   - https://papimo.jp/installed/search_50/S/33
   - 「パチスロスーパー海物語IN沖縄」と「パチスロスーパー海物語IN沖縄-30」が別表示されることを確認。
   - confidence: INDUSTRY_DATABASE_VARIANT_IDENTIFICATION
