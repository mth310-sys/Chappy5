# パチスロ ひぐらしのなく頃に祭

machineName: パチスロ ひぐらしのなく頃に祭
manufacturer: オーイズミ
formalModelName: ひぐらしのなく頃に祭F
approvalNumber: 9S0799
releaseDate: 2010-04-16
releaseDateStatus: VERIFIED_CALENDAR_DATE_WITH_SHIPMENT_DATE_VARIANCE
releaseDateNote: K-Naviがホール導入開始2010-04-16を明示。グリーンべると当時記事は納品開始予定2010-04-18。P-WORLDは2010年04月導入。DB時系列主値はK-Naviの全国導入カレンダー日2010-04-16とし、4/18納品予定を注記として保持。
generation: 5号機
systemType: ボーナス＋完走型RT / CZ「運命分岐モード」 / 技術介入
coreStatus: COMPLETE_CORE_EXCEPT_BASE_RESET_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直近475「皆伝丸」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 475 / chronologicalFrontier 2010-04-12。
- LATEST_HANDOFF指定の2010-04-13〜15境界を検索し、今回新たに具体日を確定できる未登録機は確認できず。次のK-Navi具体日候補「パチスロ ひぐらしのなく頃に祭」をrepo検索し未登録を確認して476件目として追加。

## payoutRateBySetting

### 通常PAYOUT
- 設定1: **96.0%**
- 設定2: **98.8%**
- 設定3: **100.5%**
- 設定4: **104.3%**
- 設定5: **108.4%**
- 設定6: **112.5%**

### 完全攻略PAYOUT
- 設定1: **102.0%**
- 設定2: **104.1%**
- 設定3: **106.9%**
- 設定4: **109.0%**
- 設定5: **112.2%**
- 設定6: **114.5%**

pacnkが通常/完全攻略を明示して両系列を掲載。K-Navi通常機械割とも概ね一致。技術介入機のため両定義を分離保持する。

confidence: ANALYSIS_MULTI_SOURCE_TECHNICAL_INTERVENTION_DEFINED

## initialHitBySetting

### BIG合算
- 設定1: **1/394.8**
- 設定2: **1/385.5**
- 設定3: **1/372.4**
- 設定4: **1/364.1**
- 設定5: **1/352.3**
- 設定6: **1/341.3**

### REG
- 設定1: **1/399.6**
- 設定2: **1/394.8**
- 設定3: **1/385.5**
- 設定4: **1/376.6**
- 設定5: **1/360.1**
- 設定6: **1/376.6**

### ボーナス合算
- 設定1: **1/198.6**
- 設定2: **1/195.0**
- 設定3: **1/189.4**
- 設定4: **1/185.1**
- 設定5: **1/178.1**
- 設定6: **1/179.1**

K-Navi、pacnk、当時系まとめwikiで系列一致。

confidence: ANALYSIS_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「50枚」「1000円」「回転数」「ベース」「コイン持ち」を機種名・型式名・メーカー名と組み替え、P-WORLD、K-Navi、pacnk、当時攻略wiki、旧攻略サイトを横断したが、本機固有の比較可能な50枚ベースを今回直接確定できず。小役確率からの逆算は行わない。

confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- 完走型RT「疑心暗鬼モード」: **約+0.75枚/G**。
- K-Naviは約0.75枚/G、P-WORLDは約0.8枚/G表記。丸め差として扱う。
- RT継続ゲーム数: **30G / 50G / 90G / 150G**。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## basicPayout

- OYASHIRO BIG: **約307枚**
- BIG: **約216枚**（当時wikiでは約209枚の記載あり。K-Navi/P-WORLDの216枚を主値、差異はconflictsに保持）
- REG/MB: **約48枚**
- OYASHIRO BIGは429枚超払い出しで終了、BIGは299枚超、REGは59枚超払い出しで終了。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- CZ「運命分岐モード」はボーナス後、RT終了後、または通常ゲーム間の周期到達で突入。
- 周期CZは **250Gまたは500G**。
- CZ中にベル/チェリー入賞でRTへ。転落リプレイ入賞で通常へ転落。
- 技術介入成功時は、RTゲーム数を30G→50Gへ格上げ、または次回周期CZを500G→250Gへ短縮できる。
- 難易度低では75%でレベルアップ、難易度高ではビタ押し成功で100%レベルアップ。チェリー入賞時は90G RT、CZ中ボーナス成立時には150G RTとなる整理資料がある。
- この250G/500Gはボーナス当選天井ではなく、CZ再突入までの周期ゲーム数として扱う。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。本機名「ひぐらしのなく頃に祭 / ひぐらし祭 / ひぐらしのなく頃に祭F」、オーイズミ、型式9S0799と「設定変更」「リセット」「朝一」「周期」「250G」「500G」「天井」「運命分岐」「据え置き」を組み替え、P-WORLD、K-Navi、当時wiki、旧攻略サイト、後年回顧DBを横断。初代本機固有の設定変更時に周期進捗/周期種別をクリア・引継ぎ・再選択するかを直接確定できる高信頼資料は今回回収できず。2020年の後継「祭2」の設定変更時引継ぎ情報は別機種のため転記しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の周期進捗、CZ/RT状態について初代本機固有の直接資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の周期進捗、CZ/RT状態の保持/初期化を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時の周期CZが250G/500Gであることは確認済みだが、設定変更時・電源OFF→ON時の周期カウンタ処理は未確認。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機の通常周期はCZ中の技術介入結果による250G/500G。設定変更専用の250G固定等を主張する後年単一編集記事は確認したが、当時資料/別系統資料で裏付けできず採用しない。

modeAfterReset: **NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH**。AT系の通常モードテーブルは確認されず、主要管理対象はCZ周期/RT状態。設定変更専用モード振分は確認なし。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ、RT、周期状態の設定変更/据え置き/電源復帰時処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。当時/高信頼資料で設定変更専用の短縮周期、RT優遇、CZ優遇等を確定できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。周期進捗消失等を直接確定できないため不利扱いを推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、ランプ等による本機固有の設定変更/据え置き判別を直接確定できず。

numericResetData:
- normalCycleCZ: **250G or 500G**（CZ中の技術介入結果で変化）
- resetCeilingShortening: **UNVERIFIED_AFTER_RESEARCH**
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: SETTING_CHANGE_CARRYOVER_POWER_CYCLE_GAME_COUNTER_DETECTION_UNVERIFIED_AFTER_RESEARCH

## conflicts

- releaseDate: K-Naviホール導入開始 **2010-04-16** vs グリーンべると当時記事の納品開始予定 **2010-04-18**。定義差（導入カレンダー/納品予定）として両方保持。
- BIG実獲得目安: K-Navi/P-WORLD **約216枚** vs 当時攻略wiki **約209枚**。払い出し終了条件299枚超は一致。平均化しない。
- RT純増: K-Navi/当時wiki **約0.75枚/G** vs P-WORLD **約0.8枚/G**。丸め差と判断し約0.75枚/Gを主値。
- resetAfterChange: 2026年後年編集記事に「リセット時250G確定」とする記載を確認したが、当時資料・別系統資料で裏付けできず、初代本機の主値には採用しない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior exact cycle/state handling: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior exact cycle/state handling: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- public morning reset numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi「パチスロ ひぐらしのなく頃に祭」 — https://p-kn.com/slot/1153/ — ホール導入開始2010-04-16、BIG/REG/合算、通常機械割、5号機RT/CZ/技術介入 — reliability: ANALYSIS_DB
2. グリーンべると / P-WORLD業界ニュース「熱狂的ファン持つ『ひぐらし』が完全パチスロ化」 — https://news.p-world.co.jp/articles/3797/greenbelt — 2010-02-03、オーイズミ発表、納品2010-04-18開始予定 — reliability: INDUSTRY_CONTEMPORARY
3. P-WORLD「パチスロひぐらしのなく頃に祭」 — https://www.p-world.co.jp/machine/database/5835 — オーイズミ、5号機RT、検定9S0799、型式ひぐらしのなく頃に祭F、S-BIG約307枚/BIG約216枚/MB約48枚、CZ周期500G→250G技術介入、RT約0.8枚/G — reliability: INDUSTRY_DB
4. pacnk「パチスロ ひぐらしのなく頃に祭 設定判別ツール」 — https://pacnk.com/slot/tools/sh_higurashi.html — BIG/REG、通常PAYOUT96.0〜112.5%、完全攻略102.0〜114.5% — reliability: ANALYSIS_DB
5. K-Navi「疑心暗鬼モード(RT)」 — https://p-kn.com/slot/1153/17913/ — RT純増約0.75枚/G、30/50/90/150G — reliability: ANALYSIS_HIGH
6. K-Navi「運命分岐モード(CZ)」 — https://p-kn.com/slot/1153/17912/ — ボーナス後/RT後/250G or 500G周期CZ、技術介入による周期短縮 — reliability: ANALYSIS_HIGH
7. K-Navi「ボーナスの種類」 — https://p-kn.com/slot/1153/17909/ — OYASHIRO BIG約307枚、BIG約216枚、REG約48枚 — reliability: ANALYSIS_HIGH
8. 当時系攻略wiki「基本仕様」 — https://w.atwiki.jp/watanagashi-sai/pages/13.html — 5号機A-type+CZ+完走型RT、RT約0.75枚/G、ボーナス確率・獲得目安・技術介入機械割レンジ — reliability: COMMUNITY_CONTEMPORARY_ARCHIVE
9. 当時系攻略wiki「CZ」 — https://w.atwiki.jp/watanagashi-sai/pages/14.html — CZ構造、250G/500G周期、技術介入 — reliability: COMMUNITY_CONTEMPORARY_ARCHIVE
10. 当時系攻略wiki「RT」 — https://w.atwiki.jp/watanagashi-sai/pages/15.html — RT30/50/90/150G、約0.75枚/G — reliability: COMMUNITY_CONTEMPORARY_ARCHIVE
11. ひぐらし祭攻略ガイド「運命分岐モード」 — https://www.reitoumaguro.com/higurasi/unmei.html — 難易度低75%、高ビタ成功時、次回250G/500G周期 — reliability: ANALYSIS_ARCHIVE

## researchNotes

性能コアはP-WORLD、K-Navi、pacnk、当時系攻略wiki/攻略ガイドを横断して照合。技術介入機のため通常PAYOUTと完全攻略PAYOUTを明示的に分離。50枚ベースだけは検索語・資料系統を変えても直接比較可能値を確定できず、逆算せずUNVERIFIED_AFTER_RESEARCH。resetBehaviorは初代と6号機後継「祭2」の検索結果が混在しやすいため、後継機の設定変更/電源情報は完全排除した。後年単一記事の「初代リセット時250G確定」は裏付け不足のため採用せず、CONFLICT/要QA候補としてのみ残した。
