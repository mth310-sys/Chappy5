# キャッツ・アイ-恋ふたたび

machineName: キャッツ・アイ-恋ふたたび
aliases: キャッツアイ-恋ふたたび / キャッツアイ 恋ふたたび / CAT'S EYE-恋ふたたび
manufacturer: オリンピア（平和販売系）
formalModelName: キャッツアイ恋ふたたびA
approvalNumber: 1S0751
releaseDate: 2011-11-07
releaseDateStatus: EXACT_HALL_INTRODUCTION_WITH_DELIVERY_DATE_DIFFERENCE

generation: 5号機
systemType: ボーナス+ART / 完走型ストックART
coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetQaStatus: PARTIAL_RESET_BEHAVIOR_AFTER_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ストリートファイターIV」を確認して開始。
- 開始時正本は recordCount 616 / chronologicalFrontier 2011-11-07。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定の2011-11-07同日群次候補「キャッツ・アイ-恋ふたたび」を処理。
- repo code searchで機種名未検出、想定実パス `docs/real_machine_db/machines/2011-11-07_cats-eye-koi-futatabi.md` を直接fetchして404を確認し未登録と判断。
- K-Navi / HAZUSEはホール導入開始2011-11-07。当時グリーンべると/P-WORLD業界記事は2011-11-06納品開始予定。定義差として分離し、本DB時系列キーはホール導入日の2011-11-07を採用。
- オリンピア公式2011年発売機種一覧にも本機掲載を確認。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.8% |
| 3 | 100.1% |
| 4 | 104.1% |
| 5 | 106.8% |
| 6 | 113.0% |

- K-Navi、パチマガスロマガ、HAZUSE、パチ＆スロ必勝本、当時ホール紹介資料で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### 主系列 — K-Navi / 当時市場表

| 設定 | BIG合算 | REG合算 | ボーナス合算 | ART初当たり | ボーナス+ART合算 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/409.6 | 1/612.5 | 1/245.5 | 1/398.3 | 1/151.9 |
| 2 | 1/404.5 | 1/606.8 | 1/242.7 | 1/370.9 | 1/146.7 |
| 3 | 1/399.6 | 1/601.2 | 1/240.1 | 1/362.9 | 1/144.5 |
| 4 | 1/394.8 | 1/590.4 | 1/236.6 | 1/304.0 | 1/133.1 |
| 5 | 1/390.1 | 1/580.0 | 1/233.2 | 1/282.3 | 1/127.7 |
| 6 | 1/390.1 | 1/580.0 | 1/233.2 | 1/216.0 | 1/112.1 |

- BIG、ART初当たり、機械割は主要資料間で高一致。
- REGには資料系列差があるため下記conflictsに別保持し平均化しない。
confidence: ANALYSIS_HIGH_WITH_REG_CONFLICT

### 精密分解系列 — パチマガスロマガ h-1

- BIG合算: 1/409.60 / 1/404.54 / 1/399.61 / 1/394.80 / 1/390.10 / 1/390.10。
- 赤REG: 全設定1/8192.00。
- 青REG: 1/655.36 / 1/648.87 / 1/642.51 / 1/630.15 / 1/618.26 / 1/618.26。
- REG合成: 1/606.81 / 1/601.25 / 1/595.78 / 1/585.14 / 1/574.88 / 1/574.88。
- ボーナス合成: 1/244.54 / 1/241.83 / 1/239.18 / 1/235.74 / 1/232.40 / 1/232.40。
- ART初当たりは主系列と一致。
- 同一サイトの別ページh.phpおよびK-Navi/HAZUSE市場表とのREG値差はCONFLICTとして保持。

## baseGamesPer50

パチマガスロマガの通常時小役ページが1000円あたりゲーム数を設定別に直接掲載。

| 設定 | 1000円あたりG数 / 50枚比較値 |
|---|---:|
| 1 | 33.77G |
| 2 | 33.84G |
| 3 | 33.91G |
| 4 | 34.07G |
| 5 | 34.30G |
| 6 | 34.30G |

- 通常20円スロット50枚貸し換算の比較値として、そのまま50枚あたりG数に使用。
confidence: ANALYSIS_HIGH_DIRECT

## netIncrease

- ART「キャッツ・タイム」: **1セット40G、約+1.4枚/G**。
- 完走型ストックART。
- ART中ボーナス成立でスーパー/プレミアムキャッツ・タイムへ移行する可能性があり、CAT'S EYE図柄揃い確率はスーパー約1/10、プレミアム約1/4。
- グリーンべると、娯楽産業、K-Navi、HAZUSE、パチマガスロマガで基本性能一致。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## basicPayout

- BIG: **約207枚**（規定払い出し264枚超で終了）。
- REG: **約45枚**（規定払い出し48枚超で終了）。
- パチマガスロマガ、当時ホール紹介資料、中古実機DBで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は低確/高確系の内部状態を持ち、外観ステージで高確期待、作戦会議ステージで前兆期待が高い。
- ボーナス後CZ「予告状モード」は10Gまたは20G。ミッション成功でART確定。
- ART「キャッツ・タイム」は40G完走型、約+1.4枚/G。
- P-WORLD/K-Naviでボーナス間ハマリに応じた多段階天井を確認。
  - 666〜998G間でボーナス成立: 約5%でART。
  - 999〜1221G間でボーナス成立: ART1〜3セット確定。
  - 1222〜1554G間でボーナス成立: ART2〜3セット確定。
  - 1555G消化後: 前兆を経由してスペシャルエピソードART、以後のボーナス成立でART1〜3セット確定。
- 天井は「単純に999G到達で即ART」等とする二次説明もあるが、P-WORLD/K-Naviの詳細段階説明を優先し、簡略資料との差は定義簡略化として扱う。

## resetBehavior — v0.7

settingChangeBehavior: **DEDICATED_SETTING_CHANGE_MECHANICS_CONFIRMED / CONCRETE_FULL_BEHAVIOR_PARTIAL**。K-Naviに本機専用「設定変更後の7揃いpt」「状態移行率(設定変更後)」解析項目が存在。設定変更が朝一ART関連ポイントと内部状態に影響する機種であることは確認できる。ただし現存検索結果から7揃いpt具体振り分けの本文数値は安全に回収できず、推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス間天井進捗、7揃いpt、内部状態の完全な引継ぎ仕様を本機固有の直接本文で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみでボーナス間天井、7揃いpt、内部状態がどう扱われるかを本機固有資料で確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時に666/999/1222/1555G系のボーナス間天井カウンタがCLEAR/RETAINされるかを直接確認できず。一般的な5号機挙動や後継機から補完しない。

ceilingAfterReset: **DEDICATED_SETTING_CHANGE_7_ALIGNMENT_POINT_MECHANIC_EXISTS / RESET_CEILING_GAMES_UNVERIFIED_AFTER_RESEARCH**。設定変更後専用の7揃いpt解析項目が存在するため朝一ART関連抽選の変化は確認できるが、「短縮天井○G」の直接数値は確認できず。

modeAfterReset: **SETTING_CHANGE_STATE_TRANSITION_CONFIRMED / START_DISTRIBUTION_NOT_FULLY_RECOVERED**。K-Naviに設定変更後状態移行率の専用項目が存在。パチ＆スロ必勝本でも「設定変更、ART終了後にも状態移行抽選が行われる」と明記され、低確A/B・高確A/B系状態が存在することを確認。

stateAfterReset: **STATE_RESELECTION_OR_TRANSITION_ON_SETTING_CHANGE_CONFIRMED**。設定変更時に状態移行抽選が行われることを別系統資料で確認。ただし設定変更直後の全状態初期振り分けを、今回取得できた現存本文だけから完全には復元しない。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **SETTING_CHANGE_SPECIFIC_7_ALIGNMENT_POINT_AND_STATE_TRANSITION_MECHANICS_CONFIRMED / NUMERIC_BENEFIT_UNVERIFIED_AFTER_RESEARCH**。朝一に設定変更固有の7揃いpt処理と状態移行処理があることは確定。具体的な平均pt、ART当選期待度、短縮天井等の数値は未回収。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日ハマリ消失等を直接確認できないため、一般則から不利と断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、ゲーム数挙動等を使った設定変更/据え置き判別について、本機固有の直接資料を確認できず。

numericResetData:
- 通常天井関連: 666〜998Gボーナス成立時約5%ART / 999〜1221GでART1〜3セット / 1222〜1554GでART2〜3セット / 1555G後SPエピソードART。
- 設定変更後の7揃いpt: 専用解析項目の存在を確認、具体数値UNVERIFIED_AFTER_RESEARCH。
- 設定変更後の状態移行: 専用解析項目と別系統解析で実施を確認、設定変更直後の全初期振り分け値はUNVERIFIED_AFTER_RESEARCH。
- 設定変更専用短縮天井G数: NONE_CONFIRMED_AFTER_RESEARCH。
- ガックン等直接判別数値: UNVERIFIED_AFTER_RESEARCH。

resetBehaviorConfidence: ANALYSIS_HIGH_FOR_EXISTENCE_OF_SETTING_CHANGE_7_ALIGNMENT_POINT_AND_STATE_TRANSITION_MECHANICS / UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_COUNTER_RESET_DETECTION_AND_MISSING_NUMERIC_RESET_DISTRIBUTIONS

## conflicts

1. **REG確率 / ボーナス合成の資料系列差**
   - K-Navi主表・当時ホール紹介・中古実機DB: REG 1/612.5 / 606.8 / 601.2 / 590.4 / 580.0 / 580.0、ボーナス合成1/245.5 / 242.7 / 240.1 / 236.6 / 233.2 / 233.2。
   - HAZUSE: 設定1〜4は同系列だが設定5/6を1/590.4と掲載。
   - パチマガスロマガ h.php: 1/612.5 / 606.8 / 601.2 / 590.4 / 580.8 / 580.8に近い系列。
   - パチマガスロマガ h-1.phpの赤REG+青REG精密分解: REG合成 1/606.81 / 601.25 / 595.78 / 585.14 / 574.88 / 574.88、ボーナス合成1/244.54 / 241.83 / 239.18 / 235.74 / 232.40 / 232.40。
   - 差は単なる表示丸めを超えるため平均せず `CONFLICT_REG_PROBABILITY_SERIES` として双方保持。
2. **導入日定義**
   - K-Navi / HAZUSE: 2011-11-07ホール導入開始。
   - グリーンべると/P-WORLD業界記事: 2011-11-06納品開始予定。
   - 日付定義差として保持し、時系列キーは2011-11-07。
3. **天井説明の粒度差**
   - P-WORLD/K-Navi: 666〜998 / 999〜1221 / 1222〜1554 / 1555Gの4段階詳細。
   - 一部ホール紹介資料: 999 / 1222 / 1555Gの簡略説明。
   - 詳細資料を主とし、簡略資料を別仕様とは扱わない。

## missingFields

- settingChangeBehavior full concrete details: PARTIAL_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset on setting change: UNVERIFIED_AFTER_RESEARCH
- exact numeric setting-change 7-alignment point distribution: UNVERIFIED_AFTER_RESEARCH
- full initial state distribution immediately after setting change: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-05**

1. オリンピア公式 — 2011年発売機種
   - https://www.olympia.co.jp/official/products/2011.html
   - 本機が2011年発売機種であること、ART機として公式掲載。
   - reliability: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース — 平和、豹変するART搭載『キャッツ・アイ』発表
   - https://news.p-world.co.jp/articles/4908/greenbelt
   - 2011-09-20記事、11月6日納品開始予定、ART40G・純増1.4枚/G。
   - reliability: INDUSTRY
3. 娯楽産業 — オリンピア／平和 パチスロ新機種「キャッツ・アイ−恋ふたたび」発表
   - https://www.goraku-sangyo.com/%E3%82%AA%E3%83%AA%E3%83%B3%E3%83%94%E3%82%A2%EF%BC%8F%E5%B9%B3%E5%92%8C%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%82%AD%E3%83%A3%E3%83%83%E3%83%84%E3%83%BB/
   - 2011-09-15発表、ART40G・純増1.4枚/G、ストック型仕様。
   - reliability: INDUSTRY
4. K-Navi — キャッツ・アイ-恋ふたたび
   - https://p-kn.com/slot/1506/
   - 2011-11-07導入、BIG/REG/ボーナス合算、ART初当たり、機械割、ART仕様、天井詳細、「設定変更後の7揃いpt」「状態移行率(設定変更後)」項目の存在。
   - reliability: ANALYSIS_HIGH
5. HAZUSE — キャッツ･アイ-恋ふたたび
   - https://hazuse.com/machine/pachislot/1S0751/
   - 型式名キャッツアイ恋ふたたびA、検定番号1S0751、2011-11-07、スペック/ART仕様。
   - reliability: ANALYSIS_HIGH
6. P-WORLD — キャッツ・アイ ‐恋ふたたび
   - https://www.p-world.co.jp/machine/database/6500
   - 多段階天井、ART各種仕様。
   - reliability: INDUSTRY_DATABASE
7. パチマガスロマガ — スペック
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/100/a.php
   - BIG約207枚、REG約45枚、ART40G・+1.4枚/G。
   - reliability: ANALYSIS_HIGH
8. パチマガスロマガ — 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/100/c.php
   - 設定別1000円あたり33.77〜34.30G。
   - reliability: ANALYSIS_HIGH
9. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/100/h.php
   - BIG/REG/ボーナス合成/ART初当たり/PAYOUTの市場表系列。
   - reliability: ANALYSIS_HIGH
10. パチマガスロマガ — ボーナス確率精密分解
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/100/h-1.php
   - 赤REG/青REG分解、REG合成・ボーナス合成精密値。主表との競合根拠。
   - reliability: ANALYSIS_HIGH
11. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/1912/1/32044
   - ART初当たり、機械割、ART概要。
   - reliability: ANALYSIS_HIGH
12. パチ＆スロ必勝本 — 状態移行率
   - https://p.hisshobon.jp/machine/1912/1/32053
   - 設定変更・ART終了後にも状態移行抽選が行われること、低確/高確系状態。
   - reliability: ANALYSIS_HIGH
13. 当時ホール紹介 — D’STATION伊勢崎店
   - https://ameblo.jp/d-isesaki/entry-11071175346.html
   - BIG約207枚、REG約45枚、ART40G/+1.4枚、スペック系列、天井簡略説明。
   - reliability: SECONDARY_CONTEMPORARY
