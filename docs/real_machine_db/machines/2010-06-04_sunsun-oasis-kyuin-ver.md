# サンサンオアシス キュイーンVer.

machineName: サンサンオアシス キュイーンVer.
manufacturer: パイオニア
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-06-04
releaseDateStatus: DATE_DEFINITION_DIFFERENCE
releaseDateNote: HAZUSEは「導入開始日 2010年6月4日」。2010-04-23付グリーンべるとは「納品は6月6日からの予定」、パイオニア公式製品一覧は2010年6月発売。異なる定義の日付を平均せず併記し、本DBの導入開始主値にはHAZUSEの2010-06-04を採用。
generation: 5号機
systemType: ノーマル / 完全告知 / 技術介入 / 25φ
coreStatus: COMPLETE_CORE_RESET_NON_APPLICABLE_FIELDS_CONFIRMED_POWER_CYCLE_DETECTION_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線484「コウヘイ最凶伝」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 484 / chronologicalFrontier 2010-06-07。
- LATEST_HANDOFFの6/7同日群候補として未登録だった本機を再監査したところ、HAZUSEに2010-06-04導入開始日が残っていたため、6/7前線より前の漏れとして485件目に遡及追加。
- chronologicalFrontierは2010-06-07を維持する。

## payoutRateBySetting

- 設定1: **97%**
- 設定2: **99%**
- 設定3: **101%**
- 設定4: **104%**
- 設定5: **107%**
- 設定6: **110%**

P-WORLD / K-Navi / HAZUSEで一致。当時グリーンべるとも設定1 97.0%〜設定6 110.0%を掲載。
confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/297**
- 設定2: **1/287**
- 設定3: **1/276**
- 設定4: **1/265**
- 設定5: **1/253**
- 設定6: **1/240**

### REG
- 設定1: **1/496**
- 設定2: **1/464**
- 設定3: **1/434**
- 設定4: **1/399**
- 設定5: **1/370**
- 設定6: **1/344**

### ボーナス合算
- 設定1: **1/186**
- 設定2: **1/177**
- 設定3: **1/168**
- 設定4: **1/159**
- 設定5: **1/150**
- 設定6: **1/141**

P-WORLD / K-Navi / HAZUSEで一致。
confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## baseGamesPer50

- **約37G / 1000円（50枚）**

2010-04-23付グリーンべると発表記事に「1000円あたりのゲーム数は約37G」。設定別差は公開値として確認していないため一律値へ展開しない。
confidence: INDUSTRY

## netIncrease

- NOT_APPLICABLE（ボーナスのみのノーマルタイプ。AT/ART/RTによる継続出玉区間なし）

P-WORLDはゲームフローを「ボーナスのみの仕様」と明記。
confidence: INDUSTRY_MACHINE_DB

## basicPayout

- BIG: **MAX312枚**
- REG: **MAX125枚**（技術介入時）
- BIG終了条件: **345枚を超える払い出しで終了**
- REG終了条件: **119枚を超える払い出しで終了**
- REGはスイカを1回獲得後に外す手順でMAX125枚。P-WORLDは非実施時より13枚増と説明。

P-WORLD / グリーンべるとで整合。
confidence: INDUSTRY_MULTI_SOURCE

## modeSpecificMinimumData

- 25φの完全告知ノーマル機。
- 基本告知タイミングはレバーON 40% / 第3停止時30% / 次GレバーON30%（当時グリーンべると、P-WORLD）。
- 通常ゲーム数天井、周期CZ、AT/ARTモードは確認されず、物差しDB上は該当なし。

confidence: INDUSTRY_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **NO_GAME_COUNT_OR_MODE_RESET_RELEVANCE_CONFIRMED / DEVICE_SPECIFIC_DETAILS_UNVERIFIED_AFTER_RESEARCH**。本機はP-WORLDで「ボーナスのみ」のノーマルタイプと確認でき、通常ゲーム数天井・CZ・AT/ARTモードの設定変更リセット対象は存在しない。一方、設定変更時のリール初期位置、告知ランプ等の本機固有挙動を直接説明する資料は、「サンサンオアシス キュイーンVer. / レッドパネル / パイオニア」と「設定変更 / リセット / 朝一」を組み替えた再探索でも確定できず。

carryOverBehavior: **NO_CEILING_OR_MODE_CARRYOVER_RELEVANCE_CONFIRMED**。ゲーム数天井・モード・ARTストック等を持たないボーナス主体ノーマル機のため、ホール朝一物差し上の宵越し天井/モード引継ぎ対象は該当なし。ボーナス成立状態を跨いだ特殊運用等の実機完全再現領域は収集対象外。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_DEVICE_SPECIFIC_VISIBLE_STATE / NO_CEILING_MODE_RELEVANCE**。単純電源OFF→ONで天井・モードを引き継ぐ/消すという対象自体は該当しない。リール位置・ランプ等の見た目上の本機固有挙動は直接資料未確認。

gameCounterReset: **NOT_APPLICABLE**。通常ゲーム数天井を確認せず。

ceilingAfterReset: **NOT_APPLICABLE**。通常天井およびリセット短縮天井なし。

modeAfterReset: **NOT_APPLICABLE**。通常時のAT/ART/CZ用モードなし。

stateAfterReset: **NOT_APPLICABLE_FOR_LONG_TERM_INTERNAL_STATE / DEVICE_VISIBLE_STATE_UNVERIFIED**。ホール経営・朝一狙いに影響する長期内部状態は確認されず。表示・ランプ等の電源投入時挙動は未確認。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用天井短縮、モード優遇、初当たり優遇等は確認されず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等の朝一不利対象は該当なし。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「サンサンオアシス キュイーンVer. / サンサンオアシスキュイーンVer.レッドパネル / パイオニア」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 判別」を組み替え、メーカー公式、P-WORLD、K-Navi、HAZUSE、当時業界記事を横断したが、本機固有のガックン・初期出目・ランプ等による変更判別を直接確定できず。

numericResetData:
- normalGameCeiling: **NOT_APPLICABLE**
- resetCeilingShortening: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: NORMAL_BONUS_ONLY_NO_CEILING_MODE_RESET_RELEVANCE_CONFIRMED_POWER_CYCLE_VISIBLE_STATE_AND_DETECTION_UNVERIFIED

## conflicts

- release timing is a **definition difference**, not an averaged conflict: HAZUSE「導入開始日 2010-06-04」 / グリーンべると「6月6日から納品予定」 / パイオニア公式「2010年6月発売」。
- formalModelName / approvalNumberは今回の再探索で直接資料を確定できず、推測しない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior device-specific visible behavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior device-specific visible behavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. 株式会社パイオニア「パチスロ機種情報2010年」 — https://www.slot-pioneer.co.jp/products/2010.html — 2010年6月発売、赤/青パネル — reliability: OFFICIAL
2. 株式会社パイオニア「サンサンオアシスキュイーンVer. 発売のお知らせ」 — https://www.slot-pioneer.co.jp/information/ssoasis.html — 公式機種リリース — reliability: OFFICIAL
3. グリーンべると「『サンサンオアシス キュイーンVer.』登場」2010-04-23 — https://web-greenbelt.jp/00002639/ — 6/6納品予定、BB/RB/合算/出玉率レンジ、MAX312/125枚、約37G/1000円、告知タイミング — reliability: INDUSTRY
4. P-WORLD「サンサンオアシス キュイーンVer.」 — https://www.p-world.co.jp/machine/database/5940 — ノーマル/完全告知/技術介入、設定別BIG/REG/合算/機械割、MAX312/125枚、ボーナスのみのゲームフロー — reliability: INDUSTRY_MACHINE_DB
5. HAZUSE DATA「サンサンオアシスキュイーンVer.レッドパネル」 — https://data.hazuse.com/?machine_code=0S0163 — 導入開始2010-06-04、設定別BIG/REG/合算/PAY OUT — reliability: ANALYSIS_DB
6. K-Navi「サンサンオアシスキュイーンVer.」 — https://p-kn.com/slot/1208/ — 設定別BIG/REG/合算/機械割、25φ — reliability: ANALYSIS_HIGH
7. K-Navi「機械割&期待収支」 — https://p-kn.com/slot/1208/19145/ — 機械割97/99/101/104/107/110% — reliability: ANALYSIS_HIGH
