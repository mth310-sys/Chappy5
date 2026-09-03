# 燃えよ!功夫大戦

machineName: 燃えよ!功夫大戦
manufacturer: 山佐 / YAMASA
generation: 5号機
releaseDate: 2011-01-24
releaseDateStatus: HIGH_CONFIDENCE
releaseDateNote: K-Naviのホール導入開始2011-01-24を主値。グリーンべるとは2010-12-20時点で「2011年1月下旬納品予定」と報道しており、日付定義は整合する。
systemType: A+ART / CZ / セットストック+継続率ART
aliases: 燃えよ！功夫大戦 / 功夫大戦 / カンフー大戦
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、535「009-1」、536「ハーレムエース2」、537「幻想水滸伝」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 537 / chronologicalFrontier 2011-01-17。
- 2011-01-18〜1/23の境界を導入日語・メーカー名・業界記事/K-Navi節点で再監査したが、この期間に新たな未登録実ホール導入機を具体日付きで確定できず。
- 2011-01-24群の「燃えよ!功夫大戦」「凄忍」「じゃりン子チエ 雷蔵伝説」はrepo検索で未登録を確認。handoff記載順の本機を538件目として追加し、chronologicalFrontierを2011-01-24へ進める。

## payoutRateBySetting

### P-WORLD掲載値
- 設定1: **96.9%**
- 設定2: **98.5%**
- 設定3: **100.9%**
- 設定4: **104.2%**
- 設定5: **106.8%**
- 設定6: **115.0%**

### pacnk掲載値
- 設定1: **98.1%**
- 設定2: **99.5%**
- 設定3: **101.7%**
- 設定4: **104.9%**
- 設定5: **107.5%**
- 設定6: **115.0%**

設定1〜5で継続的な差があるため平均化せず **CONFLICT** として双方を保持する。5号機クロニクル/回顧資料はP-WORLD系列96.9〜115.0%を掲載するが、同ページには導入月誤記等の混在があるため補助照合に留める。
confidence: CONFLICT

## initialHitBySetting

### BIG
- 設定1: **1/409.6**
- 設定2: **1/404.5**
- 設定3: **1/399.6**
- 設定4: **1/394.7**
- 設定5: **1/390.0**
- 設定6: **1/381.0**

### REG
- 設定1: **1/682.6**
- 設定2: **1/668.7**
- 設定3: **1/655.3**
- 設定4: **1/630.1**
- 設定5: **1/618.2**
- 設定6: **1/564.9**

### ボーナス合算（P-WORLD）
- 設定1: **1/256.0**
- 設定2: **1/252.0**
- 設定3: **1/248.2**
- 設定4: **1/242.7**
- 設定5: **1/239.1**
- 設定6: **1/227.5**

### ART
- P-WORLD掲載の **ART(連チャン込み)**: 設定1〜6 **1/116 / 1/110 / 1/101 / 1/94 / 1/83 / 1/67**。
- これは「初当たり」ではなく連チャン込みの出現率なので、物差しの `ART初当たり` へ置換しない。
- 設定別ART初当たりの直接表: **UNVERIFIED_AFTER_RESEARCH**。

BIG/REGはP-WORLDとpacnkで一致。
confidence: ANALYSIS_HIGH for BIG/REG; ART_INITIAL UNVERIFIED

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「燃えよ!功夫大戦 / 功夫大戦 / 山佐」＋「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数」でP-WORLD、K-Navi、pacnk、当時ブログ、業界記事、回顧DBまで再探索したが、比較可能な直接値を確定できず。小役確率から逆算しない。
confidence: UNVERIFIED

## netIncrease

- ART「功夫RUSH」: **1セット40G**
- 純増: **約+1.5枚/G**
- 継続: **継続率抽選＋セットストック**
- 通常時CZ: **試練の刻 / 武天の刻**

K-Navi、P-WORLD、グリーンべるとで40G/+1.5枚/Gが一致。
confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

- BIG: **約205枚**（271枚を超える払い出しで終了）
- REG: **63枚**（7G消化）

P-WORLD掲載値。K-NaviもBIGの271枚超払い出し終了、REG7G消化を確認。
confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- CZ「試練の刻」: ミッション型。10Gまたは20G滞在とするP-WORLD資料あり。
- CZ「武天の刻」: 毎ゲーム抽選型。22G滞在とするP-WORLD資料あり。
- ART「功夫RUSH」: 40G、継続率＋ストック型。
- 通常時には内部状態が存在し、K-Naviに「内部状態」「高確移行率」「高確ゲーム数詳細」の専用解析項目がある。
- 天井: 当時天井狙い資料では **ボーナス終了後999G / ART終了後959Gで天井状態 → 試練の刻を経てART**。
- ARTを挟むと天井カウントがリセットされる旨も同資料に記録。

confidence: ANALYSIS_HIGH for ART/CZ; ANALYSIS_SINGLE for exact ceiling

## resetBehavior — v0.7

settingChangeBehavior: **PARTIALLY_VERIFIED**。K-Naviに本機専用「設定変更後の挙動」解析項目が存在する。当時2011-01-30天井狙い資料は「設定変更時：ゲーム数リセット」と明記。設定変更時の通常状態/CZ状態/ARTストック等の具体処理は高信頼本文を回収できず一般論で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時にボーナス後999G/ART後959Gの進捗、内部状態、ARTストックが厳密にどのように保持されるか、本機固有の直接資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の天井進捗、状態、ARTストック処理を直接記した資料を確定できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE / ANALYSIS_SINGLE_CONTEMPORARY**。当時資料が「設定変更時：ゲーム数リセット」と明記。通常天井はボーナス終了後999G/ART終了後959Gとされる。

ceilingAfterReset: **NORMAL_COUNTER_RESTART / NO_SHORTENED_RESET_CEILING_CONFIRMED**。設定変更専用の短縮/延長天井数値は検索語・資料系統変更後も確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機固有の設定変更時モード振り分け・朝一専用モードの公開値を確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に内部状態/高確が存在することはK-Naviで確認したが、設定変更時の状態振り分け数値は回収できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、高確確定、CZ/ART優遇などの具体公開値は確認できず。

resetPenalties: **CEILING_PROGRESS_LOSS_ON_SETTING_CHANGE**。前日の天井進捗は設定変更時にゲーム数リセットとする当時資料があり、天井狙い上は不利。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「ガックン / リール / 初期出目 / 液晶 / ステージ / 朝一 / 変更判別」で検索語を変えたが、本機固有の十分な直接根拠を確定できず。

numericResetData:
- normalCeilingAfterBonus: **999G -> ceiling state -> 試練の刻経由ART (ANALYSIS_SINGLE)**
- normalCeilingAfterART: **959G -> ceiling state -> 試練の刻経由ART (ANALYSIS_SINGLE)**
- settingChangeCounter: **RESET / ANALYSIS_SINGLE_CONTEMPORARY**
- carryOverCounter: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleCounter: **UNVERIFIED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **RESEARCHED_WITH_PARTIAL_CONTEMPORARY_RESET_EVIDENCE**

## conflicts

- 設定別機械割はP-WORLD **96.9 / 98.5 / 100.9 / 104.2 / 106.8 / 115.0%** とpacnk **98.1 / 99.5 / 101.7 / 104.9 / 107.5 / 115.0%**で設定1〜5が競合。平均化せず両系列を保持。
- 5号機クロニクルには本機を2011年9月導入とする記載があるが、K-Naviの2011-01-24、2010-12-20グリーンべると「翌年1月下旬納品予定」、pacnk「2011年1月導入」と整合しないため、導入時系列の根拠から除外し `SOURCE_ERROR_OR_PAGE_CONTAMINATION` とする。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- exact ART initial hit by setting: UNVERIFIED_AFTER_RESEARCH
- formalModelName / inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- exact carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- exact reset state/mode distribution: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. K-Navi「燃えよ!功夫大戦」— ホール導入開始2011-01-24、ART40G/+1.5枚/G、設定変更後の挙動/天井/内部状態等の専用解析項目。
   - https://p-kn.com/slot/1346/
   - confidence: ANALYSIS_HIGH
2. P-WORLD「燃えよ!功夫大戦」— BIG/REG、ボーナス合算、ART(連チャン込み)、機械割、BIG約205枚/REG63枚、ART40G/+1.5枚/G、CZ基本仕様。
   - https://www.p-world.co.jp/machine/database/6201
   - confidence: INDUSTRY_DATABASE
3. グリーンべると「“劇闘”型ART搭載『燃えよ！功夫大戦』が登場」— 2010-12-20、翌年1月下旬納品予定、ART40G/+1.5枚/G、継続率＋ストック。
   - https://web-greenbelt.jp/00006683/
   - confidence: INDUSTRY
4. pacnk「燃えよ！功夫大戦 設定判別ツール」— BIG/REG、別系列PAYOUT。
   - https://pacnk.com/slot/tools/sh_moeyokanfu.html
   - confidence: ANALYSIS_SINGLE
5. パチスロレシピ「燃えよ！功夫大戦＠天井狙い」— 2011-01-30当時記事。ボーナス後999G/ART後959G天井、設定変更時ゲーム数リセット。
   - https://recipe.sloters.net/2011/01/blog-post_30.html
   - confidence: ANALYSIS_SINGLE_CONTEMPORARY
6. 5号機クロニクル「山佐5号機全機種一覧」— P-WORLD系列の機械割を補助照合。ただし導入月・ゲーム性記述に他機種/後継混在疑義があるため主根拠には不採用。
   - https://5goki.com/yamasa
   - confidence: CONFLICT_SOURCE_QUALITY_WARNING
