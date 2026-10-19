# パチスロ海物語ミラクルマリン

machineName: パチスロ海物語ミラクルマリン
manufacturer: 三洋物産
releaseDate: 2012-08-06
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviがホール導入開始2012-08-06と明記。当時紹介資料でも8月5日納品予定、8月導入として整合。
generation: 5号機
systemType: ノーマルA+天井ART
modelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

### 主系列（当時解析・後年クロニクル一致）
| 設定 | 機械割 |
|---|---:|
| 1 | 98.0% |
| 2 | 99.1% |
| 3 | 100.6% |
| 4 | 102.6% |
| 5 | 105.0% |
| 6 | 108.1% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガ、当時業界系ブログ、5号機クロニクルで一致。

### 別系列
- pacnk: 97.82 / 98.98 / 100.59 / 102.61 / 105.35 / 108.60%

reliability: CONFLICT
notes: 主系列との差は設定5・6で単純丸めを超えるため平均せず別系列として保持。

## initialHitBySetting

### BIG
| 設定 | BIG |
|---|---:|
| 1 | 1/392.43 |
| 2 | 1/383.25 |
| 3 | 1/372.36 |
| 4 | 1/358.12 |
| 5 | 1/346.75 |
| 6 | 1/334.37 |

### REG
| 設定 | REG |
|---|---:|
| 1 | 1/407.06 |
| 2 | 1/397.19 |
| 3 | 1/383.25 |
| 4 | 1/366.12 |
| 5 | 1/352.34 |
| 6 | 1/334.37 |

### ボーナス合成
| 設定 | 合成 |
|---|---:|
| 1 | 1/199.80 |
| 2 | 1/195.05 |
| 3 | 1/188.86 |
| 4 | 1/181.04 |
| 5 | 1/174.76 |
| 6 | 1/167.18 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: pacnk、当時業界系資料、パチマガスロマガで設定2〜6は整合。パチマガスロマガ取得本文のみ設定1 BIGを1/329.43と表示するが、同ページ合成1/199.80、他資料1/392.43と整合しないため表示/転記異常候補としてCONFLICT_NOTE扱い。

## baseGamesPer50

value: 39.5〜44.2G/50枚相当（1000円あたり）
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガの1000円あたりゲーム数と当時紹介資料のベース値が一致。設定1約39.5G〜設定6約44.2G。

## netIncrease

value: 天井ART「ミラクルタイム」約+0.6枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: K-Navi、パチマガスロマガ、当時攻略資料で一致。

## basicPayout

- BIG: 最大402枚（450枚超払い出し終了）
- REG: 約60枚（12G消化または5回入賞で終了）
- 天井ART「ミラクルタイム」: 次回ボーナス成立まで継続する無限ART、純増約+0.6枚/G

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常はボーナス主体のノーマルタイプ。
- BIG後1000G、REG後800G消化で天井状態へ移行。
- 天井状態ではART突入リプレイ確率が大幅上昇し、突入リプレイ入賞で「ミラクルタイム」へ突入。
- 当時攻略資料のART突入リプレイ確率: 設定1 1/32.8 / 設定2 1/34.5 / 設定3 1/36.4 / 設定4 1/38.6 / 設定5 1/41.0 / 設定6 1/43.7。
- 通常時からも超低確率でART突入の可能性あり。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_GAPS__SETTING_CHANGE_CEILING_CARRYOVER_CONFIRMED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED_PARTIAL. K-Navi当時記事が「設定変更後も天井までのゲーム数を引き継ぐ」と明示。当時攻略資料でも同内容を独立確認。さらに当時攻略資料ではART中に設定変更しても朝一ARTスタートになると記載。
carryOverBehavior: CONFIRMED_PARTIAL. 宵越し天井狙い可とする当時攻略資料が複数あり、前日天井進捗が翌日に残る挙動を確認。ただし据え置き時の液晶表示・一時的演出状態などの詳細契約は未確認。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 「電源OFF ON/電断/電源オン/朝一」を組み替えて検索したが、単純電源OFF→ONのみの場合の本機固有挙動を直接記した資料を確定できず。
gameCounterReset: RETAIN_ON_SETTING_CHANGE_CONFIRMED. BIG後1000G / REG後800Gの天井進捗は設定変更でも引き継ぐ。
ceilingAfterReset: NO_RESET_SHORTENING; NORMAL_CEILING_PROGRESS_RETAINED. 設定変更専用短縮天井ではなく、前日の通常天井進捗そのものを引き継ぐ。
modeAfterReset: NOT_APPLICABLE_OR_NO_MACHINE_SPECIFIC_MODE_SYSTEM_CONFIRMED. 通常時演出モード4種はプレイヤー選択演出であり、朝一内部モード移行として扱わない。
stateAfterReset: CONFIRMED_PARTIAL_ART_RETAINED_ON_SETTING_CHANGE. 当時攻略資料でART中に設定変更してもARTスタートになる旨を確認。その他の内部状態契約はUNVERIFIED_AFTER_RESEARCH。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: CEILING_CARRYOVER_AND_ART_RETAINMENT. 設定変更でも前日天井進捗を消さず、ART中変更でもART継続とされるため、朝一宵越し狙いに有利。
resetPenalties: NONE_MACHINE_SPECIFIC_CONFIRMED_AFTER_RESEARCH
resetDetection: UNVERIFIED_AFTER_RESEARCH. ガックン、初期出目、液晶、ランプ等による本機固有の変更判別を十分再探索したが確定できず。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData:
- 設定変更後もBIG後1000G / REG後800Gの天井進捗を引継ぎ
- 天井到達後ART突入リプレイ: 設定1 1/32.8 / 設定2 1/34.5 / 設定3 1/36.4 / 設定4 1/38.6 / 設定5 1/41.0 / 設定6 1/43.7（通常天井仕様であり設定変更専用数値ではない）

notes:
- 設定変更でも天井進捗を引き継ぐ点はK-Navi当時記事と当時攻略資料で複数系統一致。
- 「宵越し〇」は設定変更の有無を問わず狙えることを示す当時運用記録として補助採用。
- ART中の設定変更でもARTスタートという記録は当時攻略資料の直接記述を採用。ただし電源OFF→ON単独時の契約とは混同しない。
- 5号機のため有利区間は非該当。

resetQaReliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_CEILING_CARRYOVER__ANALYSIS_SINGLE_PERIOD_FOR_ART_RETAINMENT__UNVERIFIED_AFTER_MULTI_QUERY_RESEARCH_FOR_POWER_CYCLE_AND_DETECTION

## conflicts

- payoutRateBySetting: 主系列98.0/99.1/100.6/102.6/105.0/108.1% vs pacnk 97.82/98.98/100.59/102.61/105.35/108.60%。平均せず双方保持。
- パチマガスロマガ取得本文の設定1 BIG=1/329.43は、当時資料/pacnkの1/392.43および同ページの合算1/199.80と数理的に整合しないためDISPLAY_OR_TRANSCRIPTION_CONFLICT_NOTE。

## missingFields

- modelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- machine-specific resetDetection/gakkun: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumbers: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-05

- K-Navi パチスロ海物語ミラクルマリン: https://p-kn.com/slot/1667/
- パチマガスロマガ 機種TOP: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/14/sanyo_slot_14.php
- パチマガスロマガ スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/14/a.php
- パチマガスロマガ 小役確率/1000円あたりG数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/14/c.php
- パチマガスロマガ ボーナス確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/14/h.php
- pacnk パチスロ海物語ミラクルマリン: https://pacnk.com/slot/tools/sh_miraclemarine.html
- 5号機クロニクル 三洋物産: https://5goki.com/sanyo
- 天井ハイエナ生活 2012年当時攻略資料: https://macerate.seesaa.net/article/297010442.html
- 天井ハイエナ生活 2012年当時攻略資料（更新版）: https://macerate.seesaa.net/article/305411305.html
- モゲスロ 回顧資料: https://moge-site.com/archives/6673
- ★スロスター★ブログ 当時紹介: https://ameblo.jp/slostar/entry-11280617505.html
- パチンコ業界!?ブログ 当時スペック: https://ameblo.jp/ita-13-5/entry-11281976399.html

## reliabilitySummary

- releaseDate: ANALYSIS_HIGH_EXACT_DAY
- manufacturer: ANALYSIS_HIGH_CROSSCHECKED
- payoutRateBySetting: CONFLICT_BETWEEN_PUBLISHED_SERIES
- initialHitBySetting: ANALYSIS_HIGH_CROSSCHECKED_WITH_ONE_DISPLAY_ERROR_NOTE
- baseGamesPer50: ANALYSIS_HIGH_CROSSCHECKED
- netIncrease/basicPayout: ANALYSIS_HIGH_CROSSCHECKED
- resetBehavior: setting-change ceiling carryover CONFIRMED_CROSSCHECKED; ART retention on setting change ANALYSIS_SINGLE_PERIOD; power-cycle/detection remain UNVERIFIED_AFTER_RESEARCH
