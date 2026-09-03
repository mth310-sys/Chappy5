# 出番だ！葉月ちゃん

machineName: 出番だ！葉月ちゃん
manufacturer: エレコ / ユニバーサルエンターテインメント
releaseDate: 2010-10-04
releaseDateStatus: NATIONWIDE_INTRODUCTION_DATE_WITH_CONFLICTING_EARLIER_DATE
releaseDateNote: 2010-08-17当時解析記事は納品2010-10-03〜・導入2010-10-04〜、K-Navi全国一斉導入カレンダーも2010-10-04。ユニバーサル公式は発売2010年9月、HAZUSEは導入開始2010-09-21とするため、全国一斉導入基準と先行/別定義日を分離してCONFLICT保持。
generation: 5号機
systemType: ノーマル / A+RT（5GプチRT＋次回ボーナスまでRT）
formalModelName: 出番だ！葉月ちゃんEA
inspectionNumber: 0S0151
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線レコードを再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFFの recordCount 518 / chronologicalFrontier 2010-10-04 を進捗正本として使用。
- LATEST_HANDOFF指定の2010-10-04同日群を継続。パチスロピンポン、ロケットパニック、極お父さんは既登録のため重複追加せず、本機を次の未処理機種として追加。

## payoutRateBySetting

HAZUSE・当時解析記事・5号機クロニクルで一致:
- 設定1: **97.2%**
- 設定2: **99.9%**
- 設定3: **104.8%**
- 設定4: **108.5%**
- 設定5: **113.1%**
- 設定6: **119.1%**
confidence: MULTI_SOURCE_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/299.3**
- 設定2: **1/284.9**
- 設定3: **1/269.7**
- 設定4: **1/256.0**
- 設定5: **1/240.1**
- 設定6: **1/219.9**

### REG / 葉月ボーナス
- 設定1: **1/431.2**
- 設定2: **1/385.5**
- 設定3: **1/344.9**
- 設定4: **1/299.3**
- 設定5: **1/256.0**
- 設定6: **1/219.9**

### ボーナス合算（当時解析記事の丸め値）
- 設定1: **約1/177**
- 設定2: **約1/164**
- 設定3: **約1/151**
- 設定4: **約1/138**
- 設定5: **約1/124**
- 設定6: **約1/110**
confidence: MULTI_SOURCE_HIGH

## baseGamesPer50

- **約34G/1000円（50枚）**
- 2010-08-17の当時解析記事にベース値として直接掲載。
confidence: CONTEMPORARY_ANALYSIS_SINGLE

## netIncrease

- 「葉月チャンス」: チャンスリプレイ後の**5GプチRT**。
- 「葉月タイム」: ボーナス非当選の特殊リプレイから突入し、**次回ボーナス成立まで継続**。
- 葉月タイム純増: **約+0.3枚/G**（HAZUSE・保存実機販売資料で一致）。
confidence: MULTI_SOURCE_HIGH

## basicPayout

- BIG: **純増約310枚**。規定は345枚を超える払い出しで終了。
- REG / 葉月ボーナス: **最大純増約116枚**。規定は119枚を超える払い出しで終了。
- 5号機クロニクルはBIG最大311枚 / REG最大104枚とするためREG数値に資料差あり。物差し主値は当時2010年解析＋実機販売資料の約116枚を採用し、104枚はCONFLICT保持。
confidence: CONFLICT_REG_PAYOUT_OTHERWISE_MULTI_SOURCE

## modeSpecificMinimumData

- ユニバーサル公式は本機を「ノーマル」タイプとして掲載。
- チャンスリプレイから5GプチRT「葉月チャンス」、ボーナス非当選時の特殊リプレイから次回ボーナスまでのRT「葉月タイム」へ移行。
- 規定ゲーム数解除型の通常モード/AT/ARTは確認されない。
- 固定ゲーム数天井について、機種名・型式名と「天井 / ゲーム数 / 朝一 / リセット」を組み替えて探索したが、本機固有の天井数値は確認できず **NO_FIXED_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
confidence: MULTI_SOURCE_HIGH_FOR_SYSTEM

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名「出番だ！葉月ちゃん / 出番だ葉月ちゃん」、型式「出番だ！葉月ちゃんEA」、メーカー「エレコ / ユニバーサル」、HANABI/ドンちゃん系表記と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / RT / 葉月タイム / ガックン」を組み替えて公式・HAZUSE・当時解析・保存資料・回顧資料を横断したが、設定変更時のRT状態等を直接説明する実機固有高信頼資料を確定できなかった。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の葉月チャンス/葉月タイム等RT状態の扱いを直接確認できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のRT状態/ボーナス成立状態等の保持・初期化を直接確認できず。

gameCounterReset: **NOT_APPLICABLE_FOR_CONFIRMED_STANDARD_CEILING / UNVERIFIED_FOR_TRANSIENT_RT_STATE**。規定ゲーム数解除型の通常天井は確認できず、設定変更で引き継ぐべき天井ゲーム数の公開値も確認なし。ただし5GプチRT等の途中電断・変更処理は未確認。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井、朝一専用天井数値は確認できず。

modeAfterReset: **NOT_APPLICABLE_FOR_CONFIRMED_GAME_COUNT_MODE / UNVERIFIED_FOR_RT_STATE**。通常時の選択演出モードは内部当選モードとは別物。設定変更専用の内部モード振り分けは確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。葉月チャンス/葉月タイム等RT状態について設定変更・据え置き・単純電断の処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、高確スタート、RT確定、朝一ボーナス優遇などの公開恩恵を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。公開された設定変更固有の主要不利数値を確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶/ランプ、RT表示等による本機固有の設定変更/据え置き判別を直接確定できず。

numericResetData:
- standardGameCountCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- publishedResetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- morningBonusOrRTProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

- 導入時期: 当時2010-08-17解析記事およびK-Navi全国一斉導入カレンダーは **2010-10-04**（納品10-03〜）。ユニバーサル公式は **2010年9月**、HAZUSEは **2010-09-21**。地域先行/発売月/全国一斉導入の定義差を含むため平均化せず保持。
- REG基本獲得: 当時解析記事・A-SLOT保存説明 **最大約116枚**、5号機クロニクル **最大104枚**。平均化せずCONFLICT保持。

## missingFields

- settingChangeBehaviorのRT状態処理: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior / powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- 公開朝一数値: UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. ユニバーサルエンターテインメント公式「出番だ！葉月ちゃん」 — メーカー、5号機、ノーマル、発売2010年9月、葉月チャンス5G、葉月タイム概要
   - https://www.universal-777.com/product/slot/hazukichan/
   - confidence: OFFICIAL
2. K-Navi「2010年10月 新台導入カレンダー」 — 全国一斉導入開始日2010-10-04。地域により前後する旨も明記
   - https://p-kn.com/calendar/201010/
   - confidence: CONTEMPORARY_DATABASE_HIGH
3. HAZUSE「出番だ!葉月ちゃん」 — 型式EA、検定番号0S0151、導入2010-09-21、設定別BIG/REG/機械割、5GプチRT、葉月タイム約+0.3枚/G
   - https://hazuse.com/machine/pachislot/0S0151/
   - confidence: ANALYSIS_HIGH
4. パチンコ・パチスロ攻略＆解析情報まとめブログ 2010-08-17「出番だ！葉月ちゃん スペック詳細」 — 導入10-04、納品10-03〜、設定別確率/機械割、約34G/千円、BIG約310枚、REG最大約116枚
   - https://ameblo.jp/pachimatome/
   - confidence: CONTEMPORARY_ANALYSIS_SINGLE
5. A-SLOT保存実機説明 — BIG約310枚、葉月ボーナス最大116枚、葉月チャンス5G、葉月タイム約+0.3枚/G、2010年10月設置開始
   - https://www.a-slot.com/SHOP/eleco30.html
   - confidence: ARCHIVED_SPEC_SECONDARY_MEDIUM
6. 5号機クロニクル「ユニバーサル系5号機全機種一覧」 — 機械割系列、2010年9月、Aタイプ(RT付き)、BIG最大311枚/REG最大104枚
   - https://5goki.com/universal
   - confidence: RETROSPECTIVE_DATABASE_MEDIUM
7. なな徹「ハナビシリーズ」回顧 — 2010年機、5GプチRT、次回までRT、設定6約119%の系統確認
   - https://nana-press.com/post/1570386
   - confidence: RETROSPECTIVE_ANALYSIS_MEDIUM
