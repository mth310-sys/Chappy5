# No.1252 アナザーゴッドハーデス-冥王召喚-

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: アナザーゴッドハーデス-冥王召喚-
- manufacturer: ミズホ
- releaseDateCanonical: 2018-12-17
- generation: 5.9号機
- systemType: ART
- formalModelNameCanonical: `アナザーゴッドハーデス冥王／GL`
- certificationNumber: `8S0069`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## releaseDateEvidence
- HAZUSE、ちょんぼりすた、K-Navi、アタリ7で2018-12-17導入が一致。
- 2018-12-14のグリーンべると記事でもミズホ製5.9号機ARTとして発表を確認。
- confidence: `ANALYSIS_HIGH_CROSSCHECKED_WITH_CONTEMPORARY_INDUSTRY`。

## identificationEvidence
- HAZUSEで型式 `アナザーゴッドハーデス冥王／GL`、検定番号 `8S0069`、メーカー ミズホを対応確認。
- reliability: `MACHINE_DATABASE_HIGH`。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.3% |
| 3 | 99.3% |
| 4 | 104.4% |
| 5 | 105.7% |
| 6 | 106.8% |

### initialHitBySetting
| 設定 | CZ合算 | GG初当たり |
|---:|---:|---:|
| 1 | 1/228.7 | 1/737.0 |
| 2 | 1/230.3 | 1/740.9 |
| 3 | 1/232.8 | 1/744.6 |
| 4 | 1/235.3 | 1/749.6 |
| 5 | 1/237.1 | 1/752.7 |
| 6 | 1/239.8 | 1/756.1 |

- 主要表はちょんぼりすた、アタリ7、スロット解析.com、モゲスロで一致。
- 確定役は全設定共通でGOD 1/8192、冥王 1/16384、紫7 約1/7281.8。

### baseGamesPer50
- canonical comparison range: **約40.6〜45.9G/50枚**。
- ちょんぼりすた、スロット解析.comで同範囲を確認。
- HAZUSE本文には設定1〜6 `40.6G` とする掲載があり、設定差のある弱MB等と上記レンジ表記との定義/更新差が考えられるため平均化しない。
- quality flag: `CONFLICT_BASE_40_6_ALL_SETTINGS_VS_40_6_TO_45_9_RANGE`。

### netIncrease
- ART「GOD GAME」: **約2.0枚/G**。
- 基本初期ゲーム数: **100G+α**。

### basicPayout
- GOD GAME: 初期100G+α、ゲーム数上乗せ型ART。
- GOD揃い: GG100G + JUDGEMENT 3個。
- JUDGEMENT平均上乗せ目安: ケルベロス約100G / ペルセポネ約200G / ハーデス約300G / ANOTHER LEGEND約510G。
- 通常ゲーム数天井: **非搭載**。

## modeSpecificMinimumData
- 通常時は `GG抽選モード`、`JOT抽選モード`、`HZモード` の3系統。
- 有利区間移行後はGG/JOT関連状態が作動し、有利区間が120G継続するとJOT抽選モード高確Dとなり実質GG当選が確定する公開仕様を確認。
- 有利区間移行時・通常時の詳細モード移行全テーブルは実機完全再現用のため本DBでは収集対象外。

## resetBehavior
### settingChangeBehavior
- 本機固有攻略資料で **内部状態は再抽選**、**MB状態はリセット**。
- 液晶出目は設定変更後も `123`。
- 別の当時解析は内部状態を `リセット!?` と疑問符付きで掲載しており、方向性は一致するが確定度表現に差がある。
- confidence: `ANALYSIS_SINGLE_DIRECT_WITH_SECOND_SOURCE_INDICATION`。

### carryOverBehavior
- 据え置き独立条件について、MB出目を利用した据え置き判別資料は確認。
- 前日MB出目で終了して据え置きの場合、朝一2枚掛けで13枚獲得できる可能性があり、成立すれば据え置き濃厚。
- 内部全状態・有利区間を「据え置き」という独立条件で網羅する直接表は固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 本機固有攻略表で **内部状態引継ぎ / MB状態引継ぎ**。
- 液晶出目は `123`。
- ちょんぼりすたでも電源OFF→ONは内部状態 `据え置き!?` とするため方向性は一致。
- confidence: `ANALYSIS_HIGH_MACHINE_SPECIFIC_CROSSCHECKED_DIRECTION`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため `NOT_APPLICABLE_NO_CEILING`。
- 有利区間120G継続によるJOT高確D到達は通常天井とは別の状態継続恩恵として扱う。
- その120G進捗の設定変更/据え置き/純電断別カウンタ処理は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。

### modeAfterReset
- 設定変更時は内部状態再抽選という本機固有資料を確認したが、GG/JOT/HZ各モードのリセット時専用振り分け公開値は確認できず。
- pure power cycleは内部状態引継ぎ。
- `RESET_RESELECT_CONFIRMED_BUT_NUMERIC_MODE_DISTRIBUTION_NOT_FOUND`。

### stateAfterReset
- 設定変更: **内部状態再抽選 / MB状態リセット**。
- 電源OFF→ON: **内部状態・MB状態引継ぎ**。
- 据え置き独立条件の全状態契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### advantageousSectionReset
- 本機が5.9号機で有利区間を搭載し、通常時の有利区間ランプ位置・移行抽選・120G継続恩恵を確認。
- ただし **設定変更 / 据え置き / 純電断ごとの有利区間RESET/CARRY_OVERを本機固有資料として直接固定できなかった**ため、一般5.9号機規則から自動補完せず `APPLICABLE_BUT_RESET_CONTRACT_UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 通常ゲーム数天井はなく、設定変更専用短縮天井もなし。
- 設定変更時のみの公開CZ/GG優遇率・朝一専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間120G継続でJOT高確D→実質GG確定という仕様は存在するが、リセット専用恩恵ではない。

### resetPenalties
- 設定変更専用の公開不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- **設定変更後にリールガックンしない**とする本機固有解析あり。
- 液晶出目は設定変更/電源OFF→ONとも `123` のため、それだけでは判別不能。
- 前日MB出目を把握している場合、据え置きなら朝一2枚掛けで13枚獲得できる可能性があり、成立時は据え置き濃厚。
- 有利区間ランプは通常時の有利区間滞在確認には利用可能だが、朝一単独で設定変更を確定できる本機固有契約は固定できず。

### numericResetData
- normalCeiling: `NOT_APPLICABLE`
- resetCeiling: `NOT_APPLICABLE`
- settingChangeInternalState: `RESELECT`
- powerCycleInternalState: `CARRY_OVER`
- settingChangeMBState: `RESET`
- powerCycleMBState: `CARRY_OVER`
- morningLiquidCrystalDigitsSettingChange: `123`
- morningLiquidCrystalDigitsPowerCycle: `123`
- gakkunAfterSettingChange: `NO_GAKKUN_REPORTED_MACHINE_SPECIFIC`
- resetSpecificCZorGGRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## conflictsAndQualityNotes
- performance core major values are cross-source consistent except baseGamesPer50: HAZUSE `40.6G` all settings vs multiple analyses `40.6〜45.9G`; preserved as `CONFLICT` rather than averaged.
- reset internal state wording differs in certainty: モゲスロ gives `再抽選/引継ぎ`, while ちょんぼりすた writes `リセット!?/据え置き!?`; direction is consistent but certainty is not treated as identical.
- general 5.9号機 behavior was not used to fill the machine-specific advantageous-section reset contract.
- no detailed internal lottery tables were collected beyond reset-relevant public behavior.

## missingFields
- machine-specific advantageous-section RESET/CARRY_OVER contract by setting-change / carry-over / pure power-cycle.
- independent carry-over contract for all GG/JOT/HZ internal modes.
- reset-specific numeric mode distribution / CZ or GG hit probability.
- machine-specific morning advantageous-section lamp contract sufficient for deterministic setting-change detection.

## sources
取得日: 2026-09-11

1. HAZUSE — https://hazuse.com/machine/pachislot/8S0069/ — 型式、検定番号、導入日、メーカー、機械割、純増、CZ、確定役、内部モード、有利区間、40.6G表記 — reliability: `MACHINE_DATABASE_HIGH`
2. ちょんぼりすた — https://chonborista.com/slot/universal-slot/71691/ — 導入日、設定別CZ/GG/機械割、40.6〜45.9G/50枚、天井非搭載、朝一設定変更/電源OFF→ON表、液晶123、有利区間120G仕様 — reliability: `CONTEMPORARY_ANALYSIS_HIGH`
3. モゲスロ — https://moge-site.com/archives/22301 — 設定別CZ/GG/機械割、設定変更時内部状態再抽選・MB状態リセット、電源OFF/ON時引継ぎ、MB出目による据え置き推測 — reliability: `CONTEMPORARY_ANALYSIS_MACHINE_SPECIFIC`
4. 元プロMGのパチスロブログ — https://www.pachislotblog.tokyo/hades-meioushoukan-kaiseki/ — 本機は設定変更後リールガックンなし、有利区間仕様 — reliability: `ANALYSIS_SINGLE_MACHINE_SPECIFIC`
5. P-WORLD — https://www.p-world.co.jp/machine/database/8827 — ミズホ、ART、GG初期100G、純増2.0枚/G、ゲーム性 — reliability: `MACHINE_DATABASE_HIGH`
6. グリーンべると/P-WORLD業界ニュース — https://news.p-world.co.jp/articles/10641/greenbelt — 2018-12-14発表、ミズホ製、5.9号機、ART純増2.0枚/G — reliability: `CONTEMPORARY_INDUSTRY`
7. アタリ7 — https://www.atari7.com/slot/date1543922271.php — 2018-12-17、設定別GG初当たり・機械割 — reliability: `ANALYSIS_SECONDARY`
8. スロット解析.com — https://slotkaiseki.com/hades_meiou-spec_/ — 2018-12-17、設定別CZ/GG/機械割、40.6〜45.9G/50枚、純増2.0枚/G、天井非搭載 — reliability: `ANALYSIS_SECONDARY`
