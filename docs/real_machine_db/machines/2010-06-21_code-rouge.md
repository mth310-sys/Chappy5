# コード・ルージュ

machineName: コード・ルージュ
manufacturer: ネット
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-06-21
releaseDateStatus: CONFIRMED_EXACT_DATE_MULTI_SOURCE
releaseDateNote: パチビー機種ページと2010年6月月間導入一覧で2010-06-21が一致。6/15はパチンコのみ、6/16〜20に同一覧の新規パチスロ掲載はなく、2010-06-14前線から次の明確なパチスロ導入群として採用。
generation: 5号機
systemType: ボーナス+押し順ART / ストックART / 無限ART搭載
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前492「戦国物語-猛虎激闘絵巻-」を再取得。
- 開始時正本は recordCount 492 / chronologicalFrontier 2010-06-14。
- パチビー2010年6月月間導入一覧を再監査。6/15はパチンコのみ、6/16〜20に新規パチスロ掲載はなく、6/21に「コード・ルージュ」「恐怖新聞～第二章～」を確認。
- repo検索で「コード・ルージュ」未登録を確認したため、6/21同日群の先頭候補として493件目に追加。

## payoutRateBySetting

### 主系列（当時パチマガスロマガ）
- 設定1: **97.5%**
- 設定2: **99.5%**
- 設定3: **101.5%**
- 設定4: **104.0%**
- 設定5: **106.5%**
- 設定6: **111.0%**

後年回顧DB「5号機クロニクル」は設定6を110.0%とする一方、同ページのゲーム性説明にART名称・G数・純増など本機と整合しない記述が混在するため、競合値の補助根拠には採用せず、当時パチマガスロマガ系列を主値とする。
confidence: ANALYSIS_HIGH_FOR_PRIMARY_SERIES / RETROSPECTIVE_SOURCE_CONTAMINATION_NOTED

## initialHitBySetting

### BIG
- 設定1〜3: **1/1149**
- 設定4〜6: **1/1040**

### REG合成
- 全設定: **1/152**

### ボーナス合成
- 設定1〜3: **1/134**
- 設定4〜6: **1/132**

### 初当たりART
- 設定1: **1/389.1**
- 設定2: **1/322.7**
- 設定3: **1/323.3**
- 設定4: **1/267.2**
- 設定5: **1/264.7**
- 設定6: **1/206.2**

### ボーナス+ART合成
- 設定1: **1/99**
- 設定2: **1/94**
- 設定3: **1/95**
- 設定4: **1/88**
- 設定5: **1/88**
- 設定6: **1/80**

パチビー/P-WORLDも設定1のボーナス+ART合成が約1/99であることを説明しており、主系列と整合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_SETTING1_TOTAL / ANALYSIS_HIGH_SINGLE_ARCHIVED_FOR_FULL_SETTING_TABLE

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「コード・ルージュ / コードルージュ / NET」と「50枚 / 千円 / 1000円 / ベース / コイン持ち / 通常時ゲーム数」を組み替え、P-WORLD、パチビー、当時パチマガスロマガ、回顧DBを再探索したが、比較可能な直接値を高信頼で確定できなかったため推定しない。
confidence: UNVERIFIED

## netIncrease

- ART DRIVE: **約+1.8枚/G**
- 1セット: **40G**
- 1回の抽選で最大10セットをストックする可能性あり。
- SUPER ART DRIVE: 次回ボーナスまで継続する無限ART。ボーナス成立後も**約50%で無限ARTがループ**。

パチビー、P-WORLD、当時パチマガスロマガで1.8枚/G・40G・無限ART仕様が一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- SBB/BIG: **約114枚**（規定払い出し162枚）
- BB/REG相当: **約36枚**（規定払い出し45枚）

P-WORLDは「SBB MAX114枚 / BB MAX36枚」、パチマガスロマガは「BIG約114枚 / REG約36枚」と表記。呼称差を残し、獲得量を主比較値とする。
confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_NAMING_DIFFERENCE

## modeSpecificMinimumData

- 通常時は**通常・高確・超高確**の3状態。
- 十字架表示で高確、シャッター全閉で超高確の示唆。高確/超高確中はライフル・弾丸・ボーナスからART期待度が上昇。
- ART前兆は約25G継続する場合があり、特定小役後の即ヤメ注意が当時資料に記載。
- 通常ART終了時も潜伏の可能性があり、即ヤメ非推奨。
- ゲーム数天井・周期天井について、本機固有の高信頼な直接記述は今回の再探索で確定できず、存在を推測しない。

confidence: ANALYSIS_HIGH_FOR_STATE_AND_ART_FLOW / UNVERIFIED_FOR_CEILING

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時に通常/高確/超高確をどの状態へ再セットするか、ARTストック・潜伏ART・前兆を消去/保持するか、本機固有の直接解析本文を確定できず。一般的5号機挙動から補間しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の通常/高確/超高確、ARTストック、潜伏/前兆の引継ぎ処理を直接明記する資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の内部状態、ARTストック、潜伏/前兆、初期画面/リール等の本機固有処理は未確認。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH / NO_CONFIRMED_GAME_COUNT_CEILING**。高信頼資料で通常ゲーム数天井を確定できていないため、設定変更時の天井カウンタ処理も確定不可。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井・朝一専用ゲーム数救済は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/高確/超高確の設定変更時振り分けは直接値なし。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ARTストック・ART潜伏・前兆の消去/保持を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一高確/超高確優遇、ARTストック付与、短縮天井等の本機固有高信頼情報は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更に伴う既得ART/状態消失の可能性は直接根拠がないため不利として断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「朝一 / 設定変更 / リセット / 据え置き / ガックン / 十字架 / シャッター / 初期出目 / ART潜伏」を組み替え再探索。P-WORLD掲示板には朝一十字架に関するユーザー質問が残るが、解析本文ではなく設定変更確定/濃厚根拠にもならないため判別値へ採用しない。

numericResetData:
- normalCeiling: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED**
- resetCounterHandling: **UNVERIFIED_AFTER_RESEARCH**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_STATE_SYSTEM_CONFIRMED_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_RESET_NUMERICS_UNVERIFIED_AFTER_RESEARCH

## conflicts

1. 機械割設定6: 当時パチマガスロマガ **111.0%** / 後年5号機クロニクル **110.0%**。後者ページはART名称・G数・純増など本機と整合しない説明が混在するため主系列に採用せず、汚染疑いを注記。
2. ボーナス呼称: P-WORLD「SBB MAX114枚 / BB MAX36枚」、パチマガスロマガ「BIG約114枚 / REG約36枚」。獲得枚数自体は一致し、呼称差として保持。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- normalCeiling: UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. パチビー「コード・ルージュ」 — https://www.pachibee.jp/machines/about/210050003 — 導入日2010-06-21、ART約1.8枚/G、40G、無限ART、ボーナス+ART設定1約1/99 — reliability: INDUSTRY_MACHINE_DB
2. パチビー2010年6月導入一覧 — https://www.pachibee.jp/machines/schedule/2010-06 — 6/14戦国物語、6/15パチンコのみ、6/21コード・ルージュ/恐怖新聞～第二章～ — reliability: INDUSTRY_MACHINE_DB
3. P-WORLD「コード・ルージュ」 — https://www.p-world.co.jp/machine/database/5958 — 5号機ART、SBB114枚/BB36枚、ART約1.8枚/G・40G、通常/高確/超高確、無限ART約50%ループ — reliability: INDUSTRY_MACHINE_DB
4. パチマガスロマガ「コード・ルージュ 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/146/a.php — ART約1.8枚/G・40G、最大10個ストック、無限ART50%ループ、BIG約114枚/REG約36枚 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
5. パチマガスロマガ「コード・ルージュ ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/146/h.php — BIG/REG/合算、ART初当たり、ボーナス+ART、機械割全設定 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
6. 5号機クロニクル「ネット5号機全機種一覧」 — https://5goki.com/net — 機械割設定1〜5は当時系列と一致、設定6=110.0%。同ページのゲーム性説明に本機不整合情報が混在するため補助/競合検知専用 — reliability: RETROSPECTIVE_LOW_FOR_THIS_RECORD
