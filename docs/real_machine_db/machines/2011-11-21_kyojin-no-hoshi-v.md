# 巨人の星V～汗と涙と根性編～

machineName: 巨人の星V～汗と涙と根性編～
aliases: 巨人の星V / 巨人の星Ⅴ / パチスロ巨人の星V 汗と涙と根性編
manufacturer: アリストクラートテクノロジーズ
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2011-11-21
releaseDateStatus: EXACT_HALL_INTRODUCTION

generation: 5号機
systemType: ボーナス+ART / ゲーム数上乗せART
coreStatus: COMPLETE_CORE_WITH_BASIC_PAYOUT_CONFLICT
resetQaStatus: PARTIAL_RESET_BEHAVIOR_AFTER_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「浮浪雲」を確認して開始。
- 開始時正本は recordCount 618 / chronologicalFrontier 2011-11-14。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 2011-11-14同日群を再監査し、浮浪雲より先に追加すべき未登録5号機を確定できず同日群を閉鎖。
- HAZUSEカレンダー上の次境界2011-11-18、11-19についても機種名・日付・メーカーを変えて検索したが、今回の再探索では本DB対象となる具体的未登録5号機を確定できなかった。
- 次の具体的ホール導入日としてK-Naviで「巨人の星V～汗と涙と根性編～」2011-11-21を確認。後年資料でも2011-11-21で一致。
- repo code searchで「巨人の星V」未検出を確認し、未登録と判断。

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 96.4% |
| 2 | 98.5% |
| 3 | 101.1% |
| 4 | 105.3% |
| 5 | 110.1% |
| 6 | 114.8% |

- K-Naviと後年DBで同系列を確認。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

| 設定 | BIG合算 | REG | ボーナス合算 | ART初当り |
|---|---:|---:|---:|---:|
| 1 | 1/414.8 | 1/712.4 | 1/262.1 | 約1/606 |
| 2 | 1/385.5 | 1/668.7 | 1/244.5 | 約1/549 |
| 3 | 1/399.6 | 1/697.2 | 1/254.0 | 約1/560 |
| 4 | 1/385.5 | 1/668.7 | 1/244.5 | 約1/469 |
| 5 | 1/399.6 | 1/697.2 | 1/254.0 | 約1/487 |
| 6 | 1/364.1 | 1/642.5 | 1/232.4 | 約1/401 |

- ボーナス確率はK-Navi、ART初当りは後年整理DBで確認。
- K-Navi掲載の「ボーナス＋ART合算」は 1/183.0 / 1/169.2 / 1/174.8 / 1/160.8 / 1/167.0 / 1/147.2。
confidence: ANALYSIS_HIGH_FOR_BONUS / ANALYSIS_SINGLE_RETROSPECTIVE_FOR_ART_INITIAL

## baseGamesPer50

- **約34G/50枚**。
- 後年整理DBに比較可能な50枚あたり回転数として掲載。
- 当時一次/解析資料で同値を別照合できていないため単一回顧資料扱い。
confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## netIncrease

- ART「激闘TIME」: **約+1.5枚/G**。
- K-Navi、P-WORLD、メーカー系アプリ紹介資料、パチマガスロマガで一致。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## basicPayout

- REG: **約56枚**。P-WORLD、パチマガスロマガで一致。
- BIG: **CONFLICT**。
  - P-WORLD: 約201枚。
  - パチマガスロマガ: 約210枚（規定払い出し315枚）。
  - 後年整理DB: 210枚。
- 定義/掲載差を平均せず保持。
confidence: CONFLICT_FOR_BIG / ANALYSIS_HIGH_CROSSCHECKED_FOR_REG

## modeSpecificMinimumData

- ART「激闘TIME」は特訓/猛特訓モードで獲得したゲーム数を初期ゲーム数として開始する上乗せ型ART。
- 特訓中はリプレイ/レア役でARTゲーム数を獲得。K-Naviでは1回の上乗せ最大300G。
- 通常時リプレイ4連で特訓突入が確定する構造をK-Naviおよびメーカー系アプリ紹介資料で確認。
- ART初当りは約1/606（設定1）～約1/401（設定6）の整理値を確認。
- 通常天井は**ボーナス後の規定ゲーム数 800 / 1000 / 1200 / 1400G のいずれか**。到達でARTストック/天井ARTが確定。
- P-WORLD、旧天井DB、後年整理DBで天井構造を照合。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。K-Navi本機ページに専用「設定変更後の挙動」解析項目の存在は確認したが、今回取得経路では具体本文を安全に回収できず、設定変更時の天井再振り分け/内部状態処理を断定しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス後天井進捗、内部低確/高確/超高確、ARTストック等の保持を本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の天井進捗、内部状態、ART関連状態の扱いを直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。本機はボーナス後800/1000/1200/1400Gの振り分け天井を持つが、設定変更で当該ゲーム数進捗がCLEAR/RETAINのどちらになるかを直接確定できず。一般的な5号機挙動から補完しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更後専用の天井短縮/振り分け値を直接回収できず。通常天井は800/1000/1200/1400G。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の天井ゲーム数再振り分けや朝一専用モードの有無/振り分けを確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機には低確/高確/超高確の内部状態が存在するが、設定変更時の具体的状態選択/振り分けを今回の直接資料では確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、朝一高確保証、特定G以内当選率などを直接確定できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日天井進捗消失等を推測で記載しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、天井ゲーム数挙動等による変更判別を本機固有の直接資料で確定できず。

numericResetData:
- 通常天井振り分け候補: 800 / 1000 / 1200 / 1400G
- 設定変更時天井振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更時内部状態振り分け: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内当選率/恩恵発生率: UNVERIFIED_AFTER_RESEARCH
- 変更判別数値: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: UNVERIFIED_AFTER_RESEARCH_EXCEPT_NOT_APPLICABLE_ADVANTAGEOUS_SECTION_AND_CONFIRMED_NORMAL_CEILING_STRUCTURE

## conflicts

1. **BIG純増掲載差**
   - P-WORLD: 約201枚。
   - パチマガスロマガ/後年整理DB: 約210枚。
   - 平均せずCONFLICTとして保持。
2. **メーカー表記の後年DB差**
   - 当時K-Navi/P-WORLD/メーカー系資料: アリストクラートテクノロジーズ。
   - 後年整理DBの一部はクロスアルファ表記。2011年当時の発売主体として本レコードはアリストクラートテクノロジーズを採用。

## missingFields

- formalModelName / approvalNumber
- 設定変更時の天井進捗CLEAR/RETAIN
- 設定変更時の天井振り分け/モード
- 据え置き時の天井/状態/ART関連保持
- 単純電源OFF→ON時の処理
- 朝一専用恩恵/不利の公開数値
- ガックン等の変更判別

## sources

取得日: 2026-09-05

1. K-Navi「巨人の星V～汗と涙と根性編～」 — https://p-kn.com/slot/1524/
   - 2011-11-21ホール導入、設定別BIG/REG/合算、ボーナス+ART合算、ART純増/ゲーム性、設定変更解析項目の存在。
   - confidence: ANALYSIS_HIGH
2. K-Navi「機械割＆期待収支」 — https://p-kn.com/slot/1524/34185/
   - 設定別機械割96.4～114.8%。
   - confidence: ANALYSIS_HIGH
3. K-Navi「特訓・猛特訓モード」 — https://p-kn.com/slot/1524/34199/
   - ART純増約1.5枚/G、特訓突入契機、上乗せ10～300G。
   - confidence: ANALYSIS_HIGH
4. P-WORLD「巨人の星V」 — https://www.p-world.co.jp/machine/database/6534
   - 5号機ART、BIG約201枚/REG約56枚、ART約+1.5枚/G、通常天井800/1000/1200/1400G。
   - confidence: ANALYSIS_HIGH
5. パチマガスロマガ「巨人の星Ⅴ～汗と涙と根性編～ スペック」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/45/a.php
   - BIG約210枚（315枚払い出し）、REG約56枚（63枚払い出し）、ART約+1.5枚/G。
   - confidence: ANALYSIS_HIGH
6. グリーンべると「新たなる原点をコンセプトに『巨人の星V』登場」2011-10-14 — https://web-greenbelt.jp/00002345/
   - アリストクラート、シリーズ第5弾、ボーナス+ART構造。
   - confidence: INDUSTRY
7. 株式会社ドラス/アリストクラート公式アプリ紹介プレスリリース 2012-05-11 — https://www.value-press.com/pressrelease/96282
   - 2011年11月ホール導入、ART約+1.5枚/G、通常時リプレイ4連でART確定。
   - confidence: INDUSTRY
8. みんスロ「巨人の星V」 — https://minslo.com/%E5%B7%A8%E4%BA%BA%E3%81%AE%E6%98%9Fv/
   - 2011-11-21、約34G/50枚、ART初当り設定別、通常天井800/1000/1200/1400G、BIG210枚/REG56枚。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE
9. パチスロ立ち回り講座「か行の機種の天井情報(5号機版)」 — https://crankyseven.com/sp/tenjo-5ka.htm
   - 巨人の星Vの通常天井800/1000/1200/1400G、天井到達でARTストック確定。
   - confidence: LEGACY_ANALYSIS
10. HAZUSE新台カレンダー — https://hazuse.com/new-machine-calendar/newmachine-calendar/
   - 2011-11-14 → 11-18 → 11-19 → 11-21の時系列境界確認。
   - confidence: ANALYSIS_HIGH

## status

- 性能コアは主要設定別性能、50枚ベース、ART純増、ボーナス獲得性能、通常天井を収集済み。BIG純増のみ資料差をCONFLICT保持。
- resetBehaviorはK-Naviに専用解析項目が存在するが具体本文を取得できず、検索語・資料系統を変えて再探索後も本機固有の設定変更/据え置き/電断処理を直接確定できないため一般則で補完せずPARTIAL。
