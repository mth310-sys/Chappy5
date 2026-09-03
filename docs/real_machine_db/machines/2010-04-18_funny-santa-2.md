# ファニーサンタ2

machineName: ファニーサンタ2
manufacturer: タイヨー
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-04-18
releaseDateStatus: CONFLICT
releaseDateNote: 当時グリーンべると2010-04-26記事は「今年3月には『ファニーサンタ2』も発表し、4月18日にはパーラーに導入」と明記。一方K-Naviは全国導入開始2010-04-26、2010年4月カレンダーも4/26掲載。メーカー協力アプリの2010年リリースは「2010年4月発売」まで確認。物流/先行導入・全国一斉導入の差とみられるが平均化せずCONFLICTとして保持し、時系列漏れ防止の主値は当時業界記事の実導入記述2010-04-18を採用。
generation: 5号機
systemType: ノーマルAタイプ / 完全告知（絶対告知） / 技術介入
coreStatus: COMPLETE_CORE_RESET_NO_PERSISTENT_PROGRESS_RELEASEDATE_CONFLICT_MODEL_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前478「スパイガール」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 478 / chronologicalFrontier 2010-04-19。
- 2010-04-19同日群および2010-04-20〜25境界を再監査中、当時グリーンべると記事から「ファニーサンタ2」が2010-04-18にパーラー導入済みだったことを確認。
- repo検索で未登録を確認したため、前線より1日古い漏れとして479件目へ遡及追加。
- K-Naviは2010-04-26全国導入開始としており日付競合は解消せず保持。

## payoutRateBySetting

### 系列A — P-WORLD / pacnk
- 設定1: **97.2%**
- 設定2: **98.7%**
- 設定3: **100.5%**
- 設定4: **102.5%**
- 設定5: **105.4%**
- 設定6: **108.6%**

### 系列B — 旧パチマガスロマガ シミュレート値
- 設定1: **96.99%**
- 設定2: **98.64%**
- 設定3: **100.48%**
- 設定4: **102.67%**
- 設定5: **105.87%**
- 設定6: **109.27%**

- K-Naviは設定別に **96.7〜97.2 / 98.2〜98.7 / 99.9〜100.5 / 101.9〜102.5 / 104.8〜105.4 / 107.9〜108.6%** のレンジ掲載。
- 定義/攻略条件差を完全確定できないため平均せず `CONFLICT` として保持。

confidence: CONFLICT_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/268.59**
- 設定2: **1/268.59**
- 設定3: **1/268.59**
- 設定4: **1/254.02**
- 設定5: **1/240.06**
- 設定6: **1/229.95**

### REG
- 設定1: **1/464.79**
- 設定2: **1/397.19**
- 設定3: **1/337.81**
- 設定4: **1/327.68**
- 設定5: **1/312.08**
- 設定6: **1/284.94**

### ボーナス合算
- 設定1: **1/170.22**
- 設定2: **1/160.23**
- 設定3: **1/149.63**
- 設定4: **1/143.09**
- 設定5: **1/135.69**
- 設定6: **1/127.25**

旧パチマガスロマガの精密値を主値とし、P-WORLD・K-Navi・pacnkの丸め値と一致。

confidence: ANALYSIS_MULTI_SOURCE

## baseGamesPer50

旧パチマガスロマガ本機専用解析の1000円あたりゲーム数:
- 設定1: **34.29G**
- 設定2: **34.60G**
- 設定3: **34.88G**
- 設定4: **34.66G**
- 設定5: **34.91G**
- 設定6: **35.31G**

confidence: ANALYSIS_HIGH_SINGLE_DIRECT

## netIncrease

- **NOT_APPLICABLE**。ART/AT/RTによる継続的な純増性能はなく、ボーナスのみで出玉を増やすノーマルタイプ。

## basicPayout

- BIG: **MAX311枚**（344枚超払い出しで終了）。技術介入で14枚役を1回取得する手順あり。
- REG: **MAX103枚**（104枚超払い出しで終了）。技術介入で14枚役を1回取得する手順あり。

P-WORLD、K-Navi、当時遊技通信系記事でBIG最大311枚を照合。REG最大103枚はP-WORLD直接値。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルAタイプ。
- ボーナス成立時、小役同時成立なら告知を次ゲームへ持ち越し、単独成立等ではそのまま告知する「絶対告知」。
- 中リール中段トナカイ停止を軸にした「センターチャンス」を搭載。
- P-WORLDおよびpacnkで **天井機能/天井RT非搭載**を確認。
- ART/AT/CZ、通常ゲーム数天井、周期モード、救済RTなどの持続的進行要素は確認されない。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **NO_RESET_RELEVANT_PERSISTENT_PROGRESS_CONFIRMED / LOW_LEVEL_BEHAVIOR_UNVERIFIED**。本機は天井・ART/AT/CZ・周期モードを持たないボーナス主体ノーマル機で、設定変更により朝一客行動へ影響するゲーム数進捗・天井・モード恩恵は確認されない。「ファニーサンタ2 / タイヨー」と「設定変更 / リセット / 朝一 / ガックン / 天井 / 据え置き」を組み替え、P-WORLD、K-Navi、旧パチマガスロマガ、現行整理DBを再探索したが、設定変更固有の朝一恩恵/不利や判別要素は確認できず。ボーナス成立中など低レベルの内部処理は本DB目的外かつ直接資料未確認のため推測しない。

carryOverBehavior: **NOT_APPLICABLE_FOR_GAME_COUNT_CEILING_MODE / LOW_LEVEL_BEHAVIOR_UNVERIFIED**。据え置きで引き継ぐ天井ゲーム数・周期・ART/AT/CZモード等が確認されないため、ホール経営上の主要持越し対象なし。

powerCycleBehavior: **NOT_APPLICABLE_FOR_GAME_COUNT_CEILING_MODE / LOW_LEVEL_BEHAVIOR_UNVERIFIED**。単純電源OFF→ONによる天井・周期・モード差は対象となる機能自体が確認されない。低レベルのRAM/成立フラグ処理は直接資料未確認のため推測しない。

gameCounterReset: **NOT_APPLICABLE**。通常ゲーム数天井・周期救済機能を非搭載。

ceilingAfterReset: **NOT_APPLICABLE**。標準天井自体を非搭載し、リセット短縮天井も存在確認なし。

modeAfterReset: **NOT_APPLICABLE_FOR_PERSISTENT_GAMEPLAY_MODE**。朝一客行動に影響する通常モード/天井モード/周期モードは確認されない。

stateAfterReset: **NOT_APPLICABLE_FOR_ART_AT_CZ_STATE / LOW_LEVEL_UNVERIFIED**。ART/AT/CZ内部状態なし。ボーナス成立等の低レベル状態は本DBの完全再現対象外。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の高確、短縮天井、朝一当選率優遇等は確認されない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等の主要な設定変更不利は対象機能自体がない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、告知ランプ等を使った本機固有の設定変更/据え置き判別を直接確定できず。

numericResetData:
- standardCeiling: **NONE / NOT_APPLICABLE**
- resetCeilingShortening: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE_FOR_PERSISTENT_MODE**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: RESET_RELEVANT_GAME_COUNT_CEILING_MODE_NOT_APPLICABLE_DETECTION_UNVERIFIED_AFTER_RESEARCH

## conflicts

- **releaseDate CONFLICT**: 当時グリーンべると2010-04-26記事は「4月18日にはパーラーに導入」、K-Naviは全国導入開始 **2010-04-26**。メーカー協力アプリ資料は2010年4月発売まで。主値は当時業界記事の実導入記述2010-04-18、全国一斉導入日候補として4/26を保持。
- **payoutRate CONFLICT**: P-WORLD/pacnk系列 97.2〜108.6%、旧パチマガスロマガ・シミュレート値 96.99〜109.27%、K-Naviはレンジ表記。平均化しない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- exact setting-change low-level internal behavior: UNVERIFIED_AFTER_RESEARCH; no reset-relevant persistent progress system identified
- power-cycle low-level internal behavior: UNVERIFIED_AFTER_RESEARCH; no reset-relevant persistent progress system identified
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- public reset-specific morning numeric data: NONE_CONFIRMED_AFTER_RESEARCH
- nationwide/first-install exact release-date definition remains CONFLICT (2010-04-18 vs 2010-04-26)

## sources

取得日: 2026-09-03

1. グリーンべると「タイヨー、民事再生法手続き申請へ」 — https://web-greenbelt.jp/00002631/ — 2010-04-26掲載、ファニーサンタ2を「今年3月発表、4月18日にはパーラーに導入」と明記 — reliability: CONTEMPORARY_INDUSTRY_MEDIA
2. K-Navi「ファニーサンタ2」 — https://p-kn.com/slot/1184/ — 全国導入開始2010-04-26、BIG/REG/合算、機械割レンジ、ボーナス終了条件 — reliability: ANALYSIS_DB; RELEASE_DATE_CONFLICT
3. K-Navi「2010年4月 新台導入カレンダー」 — https://p-kn.com/calendar/201004/ — 2010-04-26ファニーサンタ2、全国一斉導入開始日掲載方針 — reliability: ANALYSIS_CALENDAR
4. P-WORLD「ファニーサンタ2」 — https://www.p-world.co.jp/machine/database/5902 — ノーマルタイプ、BIG/REG/合算、機械割、MAX311/103枚、天井RT非搭載 — reliability: INDUSTRY_DB
5. パチマガスロマガ旧攻略「ファニーサンタ2 ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/71/h.php — 精密BIG/REG/合算、シミュレートPAYOUT — reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧攻略「ファニーサンタ2 小役確率・通常時」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/71/c.php — 設定別1000円あたり34.29〜35.31G — reliability: ANALYSIS_HIGH
7. パチマガスロマガ旧攻略トップ「ファニーサンタ2」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/71/taiyo_slot_71.php — 攻め時・ヤメ時「特にナシ」 — reliability: ANALYSIS_HIGH
8. pacnk「ファニーサンタ2 設定判別ツール」 — https://pacnk.com/slot/tools/sh_funnysanta.html — BIG/REG/PAYOUT照合、天井機能非搭載、通常時はいつヤメても問題なし — reliability: SECONDARY_ANALYSIS_DB
9. @Press「Android版パチスロアプリ『ファニーサンタ2』配信開始」 — https://www.atpress.ne.jp/news/15709 — タイヨー名義・2010年4月発売、メーカー協力系アプリ資料 — reliability: CORPORATE_PRESS_RELEASE
10. 遊技通信記事転載「タイヨー、『ファニーサンタ』最新作を発表」 — https://p-mans.blogspot.com/2010/03/ — 2010-03-16発表、ノーマルA完全告知、設定1〜3 BB 1/268.6、BIG最大311枚 — reliability: CONTEMPORARY_INDUSTRY_REPRINT

## collectionLog

- 取得日: 2026-09-03
- relay: リレー4
- recordNo: 479
- confidenceSummary: PERFORMANCE_CORE=ANALYSIS_MULTI_SOURCE / BASE=ANALYSIS_HIGH_SINGLE_DIRECT / RELEASE_DATE=CONFLICT / RESET_RELEVANT_PROGRESS=NOT_APPLICABLE_CONFIRMED / RESET_DETECTION=UNVERIFIED_AFTER_RESEARCH
