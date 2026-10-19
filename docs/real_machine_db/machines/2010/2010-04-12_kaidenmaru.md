# 皆伝丸

machineName: 皆伝丸
manufacturer: アリストクラートテクノロジーズ
formalModelName: カイデンマル3
approvalNumber: 9S1067
releaseDate: 2010-04-12
releaseDateStatus: VERIFIED_NATIONWIDE_INTRODUCTION_DATE
releaseDateNote: K-Navi 2010年4月新台導入カレンダーが全国一斉導入開始日として2010-04-12を明示。P-WORLDも2010年04月導入として整合。
generation: 5号機
systemType: ボーナス＋ART / 押し順ART / ゲーム数上乗せ
coreStatus: COMPLETE_CORE_RESET_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直近474「神人 八犬伝」を再取得し、recordCount 474 / chronologicalFrontier 2010-04-12 を正本として継続。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- K-Navi 2010年4月全国導入カレンダーでは2010-04-12群が「神人 八犬伝」「皆伝丸」の2機種。前者は474件目として登録済みのため、同日残件の本機を475件目として追加。

## payoutRateBySetting

### パチマガスロマガ シミュレート値
- 設定1: **96.88%**
- 設定2: **98.95%**
- 設定3: **101.81%**
- 設定4: **104.23%**
- 設定5: **106.79%**
- 設定6: **109.27%**

P-WORLD掲載値は **97.0 / 99.1 / 102.2 / 104.7 / 107.4 / 110.0%**。定義差の可能性があるため平均化せず別系列として保持。

confidence: ANALYSIS_MULTI_SOURCE_DEFINITION_VARIANCE

## initialHitBySetting

ボーナスゲーム合算は **全設定共通1/99.9**。

色組み合わせ別BG確率には設定差があるが、実機比較用コアでは全体合算1/99.9を主値として保持する。

confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## baseGamesPer50

- **30.52G/1000円（50枚）** — パチマガスロマガ本機専用小役確率ページ。

confidence: ANALYSIS_HIGH

## netIncrease

- ART「敵城潜入」: **約+1.3枚/G**
- 上乗せゾーン「大宴会」中も約+1.3枚/Gで、ARTゲーム数の減算を停止して上乗せ抽選を行う。

P-WORLD、パチマガスロマガで一致。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## basicPayout

- BG: **約42枚**
- ART「敵城潜入」: 初回突入時 **最低100G**
- ART突入時の平均期待枚数: **約700枚**（パチマガスロマガ）
- 上乗せゾーン「大宴会」: 上乗せ **5G〜300G**。大宴会中はARTゲーム数を減算しない。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は **通常 / 高確 / 超高確** の3状態。
- 高確中のBG成立時はART突入率 **約1/3**、超高確中はART突入確定とする解析がある。
- 通常時 **300Gまたは500G（1:1）消化時に高確または超高確へ移行し、次回ボーナス成立まで継続**。
- この300G/500Gは状態移行の救済仕様であり、固定ゲーム数到達でARTやボーナスに直接当選する通常型天井とは区別する。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。本機名「皆伝丸 / カイデンマル3」とアリストクラートを軸に「設定変更」「リセット」「朝一」「据え置き」「天井」「300G」「500G」「高確」「超高確」「ART」を組み替え、P-WORLD、旧パチマガスロマガ、導入カレンダー、現存する回顧/解析資料を再探索したが、設定変更時の300G/500G状態移行カウンタ、通常/高確/超高確、ART関連状態の初期化・再抽選・引継ぎを直接確定できる本機固有資料は回収できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の300G/500G進捗、通常/高確/超高確、ART関連状態の扱いを本機固有資料で直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の300G/500G進捗、内部状態、ART関連状態の保持・初期化を直接確認できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。300G/500Gは高確/超高確移行用のゲーム数条件として公開されているが、設定変更時にクリア/引継ぎされるかは未確認。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時300G/500Gで状態移行する救済仕様は確認できるが、設定変更後専用の短縮値や朝一専用振分は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/高確/超高確の3状態は確認できるが、設定変更時の初期状態・振分は確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART潜伏・ART残G・大宴会等の設定変更/据え置き/電源復帰時処理は直接資料を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮、朝一高確率優遇、ART優遇等の公開恩恵は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。300G/500G進捗消失の有無を確定できないため、不利扱いを推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、ランプ、ゲーム数挙動等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: GAME_COUNTER_MODE_STATE_POWER_CYCLE_DETECTION_UNVERIFIED_AFTER_RESEARCH

## conflicts

- payoutRateBySetting: パチマガスロマガのシミュレート **96.88〜109.27%** とP-WORLD掲載 **97.0〜110.0%** に差異あり。定義不明のため平均化しない。

## missingFields

- settingChangeBehavior exact counter/mode/state handling: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior exact counter/mode/state handling: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- public morning reset numeric data: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi「2010年4月新台導入カレンダー」 — https://p-kn.com/calendar/201004/ — 全国一斉導入開始日2010-04-12、アリストクラート「皆伝丸」 — reliability: ANALYSIS_DB_CALENDAR
2. P-WORLD「皆伝丸」 — https://www.p-world.co.jp/machine/database/5873 — メーカー、5号機ART、検定番号9S1067、型式カイデンマル3、BG約42枚、ART約+1.3枚/G、初回100G以上、300G/500G状態移行、ボーナス合算、機械割系列 — reliability: INDUSTRY_DB
3. パチマガスロマガ「皆伝丸 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/41/a.php — ART約+1.3枚/G、通常/高確/超高確、ART平均期待約700枚、最低100G、BG約42枚、大宴会上乗せ5〜300G — reliability: ANALYSIS_HIGH
4. パチマガスロマガ「皆伝丸 ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/41/h.php — BG合算1/99.90、PAYOUTシミュレート96.88〜109.27% — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「皆伝丸 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/41/c.php — 1000円あたり30.52G — reliability: ANALYSIS_HIGH
6. パチマガスロマガFREE「5号機ヒストリア2010年前編」 — https://pachimaga.com/free/playback/f90e5710c9d58fbdd546cacf5ba1afa1cb37935d.php — 皆伝丸を2010年前半機種として回顧、ゲーム数上乗せ特化ゾーンの歴史的位置づけ — reliability: RETROSPECTIVE_INDUSTRY

## researchNotes

性能コアはP-WORLDと旧パチマガスロマガを軸に複数ソース照合。PAYOUTは定義差を疑いCONFLICTとして別系列保持。resetBehaviorは本機固有語・型式名・メーカー名と「設定変更/リセット/朝一/据え置き/電源/300G/500G/高確/超高確」を組み替えて再探索したが、設定変更・据え置き・単純電断の処理を直接記述する高信頼資料を回収できなかった。一般的な5号機挙動からの補間は行っていない。
