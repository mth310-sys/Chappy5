# パチスロスパイダーマン3

machineName: パチスロスパイダーマン3
manufacturer: サミー
releaseDate: 2010-09-06
releaseDateStatus: CONFIRMED_MULTI_SOURCE
releaseDateNote: K-Naviがホール導入開始2010-09-06を明記。2010-07-20グリーンべると発表記事は9月上旬より納品開始予定としており、時期整合。P-WORLD/K-Naviの現存機種DBとも同一機を確認。
generation: 5号機
systemType: A+ART / 押し順ART / ボーナス後ART突入
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_BASE_UNVERIFIED_PAYOUT_CONFLICT

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線506「マイジャグラー」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount 506 / chronologicalFrontier 2010-09-06。
- LATEST_HANDOFFが同日群の最優先未処理候補として指定した「パチスロスパイダーマン3」をrepo検索し、未登録を確認して507件目として追加。
- 同日群は引き続き別機種がないか監査し、閉じてから9/7以降へ進む。

## payoutRateBySetting

### source series A — P-WORLD/K-Navi公称系列
- 設定1: **97.0%**
- 設定2: **98.7%**
- 設定3: **101.3%**
- 設定4: **106.8%**
- 設定5: **112.3%**
- 設定6: **119.99%**（K-Navi等では119.9%表記あり）

### source series B — パチマガスロマガ シミュレート値
- 設定1: **97.71%**
- 設定2: **99.63%**
- 設定3: **102.62%**
- 設定4: **106.94%**
- 設定5: **112.75%**
- 設定6: **119.99%**

設定1〜5は単純な表示桁差では説明しきれない差があるため平均化せず `CONFLICT`。設定6は119.99%で一致する系列あり。
confidence: CONFLICT_ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/595.78**
- 設定2: **1/574.88**
- 設定3: **1/537.18**
- 設定4: **1/508.03**
- 設定5: **1/478.36**
- 設定6: **1/439.84**

### MB
- 設定1: **1/595.78**
- 設定2: **1/574.88**
- 設定3: **1/537.18**
- 設定4: **1/508.03**
- 設定5: **1/478.36**
- 設定6: **1/439.84**

### ボーナス合算
- 設定1: **1/297.89**
- 設定2: **1/287.44**
- 設定3: **1/268.59**
- 設定4: **1/254.02**
- 設定5: **1/239.18**
- 設定6: **1/219.92**

P-WORLDは丸め値でBIG/MB 1/595.8〜1/439.8、合算1/298〜1/220。パチマガスロマガの精密値と整合。

ART初当たりの設定別独立確率は、今回の物差し用途で比較可能な直接表を複数高信頼資料から確定できず `UNVERIFIED_AFTER_RESEARCH`。通常時直撃とボーナス後必ずARTという複合構造のため、定義不一致を避けて推算しない。
confidence: ANALYSIS_MULTI_SOURCE_HIGH_FOR_BONUS / UNVERIFIED_FOR_ART_INITIAL

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「1000円あたりのゲーム数」「50枚」「ベース」「コイン持ち」「通常時小役」等へ検索語を変更し、K-Navi、P-WORLD、パチマガスロマガ、当時解析、旧DB、回顧資料を横断したが、本機固有の比較可能な50枚ベース直接値を今回確定できなかった。
- 小役確率等からの逆算は物差し定義を混ぜるため実施しない。
confidence: UNVERIFIED

## netIncrease

- ART「アクロバティックゾーン」: **約+1.0枚/G**
- ART「クライムチャレンジ」: **約+1.0枚/G**
- アクロバティックゾーンは**1セット50G**。消化後は再度同ARTまたはクライムチャレンジへ。

K-Navi、P-WORLD、パチマガスロマガで約+1.0枚/G・50G基本構造が一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- BIG: **MAX306枚**（パチマガスロマガは純増約303枚表記）
- MB: **MAX162枚**（パチマガスロマガは純増約160枚表記）
- P-WORLD/K-Naviは払い出し終了条件をBIG 396枚超、MB 204枚超と記載。
- 2010年当時グリーンべるとはBIG306枚 / ミドル162枚を紹介。

MAX値と解析上の約純増値は定義が異なるためCONFLICT扱いせず併記。
confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常ゲーム数天井: **ボーナス間1200G**。
- 天井状態中: 以後チェリー成立（約1/45）ごとに**ART2個以上**当選。ボーナス成立まで繰り返し上乗せ可能。
- ART「アクロバティックゾーン」: 50G固定区間＋約1.0枚/G。
- ART「クライムチャレンジ」: 継続G数不定、約1.0枚/G。
- ボーナス終了後: **必ずARTへ突入**。まずAT待機状態から始まり、SB成立でART発動、平均約10Gとされる。
- 通常時: レア小役等から高確/超高確およびART抽選あり。

confidence: ANALYSIS_MULTI_SOURCE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **HIGH_PROBABILITY_PLUS_PERIODIC_CZ_START_CONFIRMED_SINGLE_OLD_ANALYSIS / CEILING_COUNTER_RESET_UNVERIFIED_AFTER_RESEARCH**。旧解析「slot-navi」は設定変更（リセット）後に「高確＋周期CZ」からスタートすると明記。一方、同資料自身が1200G天井までのG数がリセットされるかは調査中としており、推測部分は採用しない。パチマガスロマガには本機専用「朝イチ・設定変更」項目の存在までは確認したが、現存検索取得本文から天井カウンタ処理を直接回収できなかった。

carryOverBehavior: **CEILING_CARRY_OVER_UNVERIFIED_AFTER_RESEARCH / STATE_DETAILS_UNVERIFIED**。当時解析には前日1008Gハマリ台を翌日追う実戦記述等はあるが、据え置き時の1200G天井カウンタ継続を仕様として断定できる直接資料ではないため採用しない。ARTストック、高確、周期CZ状態の据え置き処理も本機固有の高信頼直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の1200G天井進捗、高確/周期CZ、ARTストック、AT待機状態の復帰処理を本機固有資料で確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井がボーナス間1200Gであること自体は複数資料で確定。ただし設定変更時の天井カウンタ消去/引継ぎは十分な再探索後も直接確定できない。

ceilingAfterReset: **NO_SHORTENED_NUMERIC_CEILING_CONFIRMED / COUNTER_HANDLING_UNVERIFIED**。設定変更専用の短縮天井数値は確認できず。高確＋周期CZスタートという朝一恩恵は天井短縮とは分離して扱う。

modeAfterReset: **HIGH_PROBABILITY_PLUS_PERIODIC_CZ_START_CONFIRMED_SINGLE_OLD_ANALYSIS**。設定変更後は高確＋周期CZからスタートとの当時系解析あり。詳細振り分け・滞在G数・周期CZの正確な数値は今回確定できず。

stateAfterReset: **HIGH_PROBABILITY_START_CONFIRMED_SINGLE_OLD_ANALYSIS / OTHER_STATE_DETAILS_UNVERIFIED**。設定変更時の高確スタートは確認。ARTストックや超高確、AT待機等の設定変更処理は未確定。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **HIGH_PROBABILITY_PLUS_PERIODIC_CZ_START**。設定変更後は高確＋周期CZスタートという朝一メリットが公開旧解析で確認される。

resetPenalties: **CEILING_PROGRESS_LOSS_UNVERIFIED**。もし天井カウンタがクリアされる場合は前日ハマリ進捗消失となるが、そのカウンタ処理自体が未確定のため不利要素として断定しない。

resetDetection: **GAKKUN_OBSERVED_AS_PRACTICAL_CLUE_SINGLE_OLD_ANALYSIS / EXACT_CONDITION_UNVERIFIED**。当時解析の実戦記述に「ガックンなし（無対策ホール）」をリセット推測材料として扱う記述があるため、ガックンが実戦上の変更推測要素として使われていたことは確認。ただし設定変更時の発生条件・確率、店側対策、非ガックン時の据え置き判定精度は本機固有の高信頼仕様資料で確定できず、確定判別には使わない。

numericResetData:
- resetDedicatedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- normalCeiling: **bonusInterval 1200G**
- resetDedicatedModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **UNVERIFIED_AFTER_RESEARCH**
- highProbabilityStart: **CONFIRMED_SINGLE_OLD_ANALYSIS, exact rate/duration UNVERIFIED**
- periodicCZStart: **CONFIRMED_SINGLE_OLD_ANALYSIS, exact numeric details UNVERIFIED**
- gakkunExactProbability: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_DIRECT_RESET_BEHAVIOR_FOUND / CEILING_COUNTER_AND_POWER_CYCLE_UNVERIFIED_AFTER_RESEARCH

## conflicts

- payoutRateBySetting: P-WORLD/K-Navi公称系列 **97.0 / 98.7 / 101.3 / 106.8 / 112.3 / 119.99%** vs パチマガスロマガ・シミュレート **97.71 / 99.63 / 102.62 / 106.94 / 112.75 / 119.99%**。平均化しない。
- 後年「5号機クロニクル」には本機を2010/8、BIG約204枚/REG約48枚、ART約+1.4枚/Gとする記述があるが、2010年当時グリーンべると、K-Navi、P-WORLD、パチマガスロマガが一致するBIG約303〜306枚/MB約160〜162枚、ART約+1.0枚/Gと大きく異なり、別機/後年整理混同の可能性が高いため本機コア主値には採用しない。資料競合として注記のみ保持。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- ART initial hit probability by setting under a consistent definition: UNVERIFIED_AFTER_RESEARCH
- setting-change ceiling counter reset/carry-over: UNVERIFIED_AFTER_RESEARCH
- unchanged ceiling/state carry-over direct specification: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- exact reset mode/high-probability distribution and duration: UNVERIFIED_AFTER_RESEARCH
- exact gakkun probability/conditions: UNVERIFIED_AFTER_RESEARCH
- exact formal type code / inspection number: UNVERIFIED_AFTER_RESEARCH in this relay

## sources

取得日: 2026-09-04

1. グリーンべると「前作を超える衝撃！『黒』のスパイダーマン」 — https://web-greenbelt.jp/00002740/ — 2010-07-20発表記事。サミー新機種、BIG306枚/MIDDLE162枚、2種類ART、9月上旬納品予定。
2. K-Navi「パチスロスパイダーマン3」 — https://p-kn.com/slot/1256/ — ホール導入2010-09-06、ボーナス合算、BIG/MB終了条件、MAX獲得枚数、ART構造。
3. K-Navi「2種類のART」 — https://p-kn.com/slot/1256/26571/ — アクロバティックゾーン50G、クライムチャレンジ、純増約+1.0枚/G、突入/終了構造。
4. P-WORLD「パチスロスパイダーマン3」 — https://www.p-world.co.jp/machine/database/6048 — BIG/MB確率、合算、機械割、天井1200G、チェリー成立時ART2個以上、ART純増/基本G数、獲得枚数。
5. パチマガスロマガ「スパイダーマン3 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/125/a.php — ART約+1.0枚/G、ボーナス後ART、天井1200G、BIG約303枚/MB約160枚。
6. パチマガスロマガ「スパイダーマン3 ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/125/h.php — 精密BIG/MB/合算確率、シミュレートPAYOUT 97.71〜119.99%。
7. パチマガスロマガ「スパイダーマン3 機種インデックス」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/125/sammy_slot_125.php — 本機専用「天井」「朝イチ・設定変更」項目の存在を確認。現存検索取得では当該本文を直接回収できず。
8. slot-navi「スパイダーマン3 解析・攻略」 — https://slot-navi.com/10/spiderman3/ — 設定変更時「高確＋周期CZ」スタート、ガックンを実戦上のリセット推測材料として扱う当時系解析。天井カウンタ処理は同資料自身が調査中のため推測部分は不採用。
9. PachiSeven「5号機歴代最高の設定6出玉率機種」 — https://pachiseven.jp/articles/detail/14268 — スパイダーマン3の設定6がサイトによって119.99%表記であること、2010年機としての回顧補助。
10. 5号機クロニクル「サミー5号機全機種」 — https://5goki.com/sammy — 後年整理値が当時複数資料と大幅不一致のため主値には不採用。混同監査用の競合資料としてのみ保持。
