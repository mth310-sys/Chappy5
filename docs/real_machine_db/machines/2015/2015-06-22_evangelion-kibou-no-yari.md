# ヱヴァンゲリヲン・希望の槍

machineName: ヱヴァンゲリヲン・希望の槍
manufacturer: ビスティ
releaseDate: 2015-06-22
releaseDatePrecision: exact_hall_start_multi_source
releaseDateNote: K-Navi、HAZUSEで2015-06-22全国ホール導入開始が一致。グリーンべるとは2015-06-15発表時に「6月下旬納品開始予定」としており、発表/納品予定と全国実ホール導入日を分離する。
generation: 5号機 / 新試験適合機
systemType: A+ART / ボーナス+ゲーム数上乗せART
modelName: ヱヴァンゲリヲン・希望の槍R
inspectionNumber: 5S0191
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 98.6% |
| 3 | 100.6% |
| 4 | 103.3% |
| 5 | 108.5% |
| 6 | 114.3% |

- K-Navi、すろぱちくえすとで全設定一致。グリーンべるとの発表値も97.6～114.3%で上下限一致。
- 後年資料には設定3 100.7%、設定6 114.4%という0.1pt差の系列があるため、canonicalは当時解析複数一致の100.6/114.3を採用し、丸め/シミュレート差としてconflictsへ保持する。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_INDUSTRY_RANGE

## initialHitBySetting

ART「EVANGELION IMPACT」初当たり:

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/465.7 |
| 2 | 1/463.2 |
| 3 | 1/449.7 |
| 4 | 1/419.4 |
| 5 | 1/352.1 |
| 6 | 1/282.7 |

ボーナス合算:

| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/431.2 |
| 2 | 1/420.1 |
| 3 | 1/409.6 |
| 4 | 1/390.1 |
| 5 | 1/376.6 |
| 6 | 1/364.1 |

- K-Navi、当時解析/回顧資料で主要系列を照合。
- グリーンべるとはART初当たり1/465.7～1/282.7、ボーナス1/431.2～1/364.1の上下限を発表時点で掲載。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約34～35G/50枚**。
- グリーンべると発表記事で約34～35G、当時解析で約34G/千円を確認。
- 通常時はRT状態を行き来する仕様で、打順/取りこぼし条件により実コイン持ちが変わり得るため、比較値は通常手順前提とする。
- confidence: INDUSTRY_PLUS_ANALYSIS

## netIncrease

- ART「EVANGELION IMPACT」純増 **約1.5枚/G**。
- グリーンべると、パチマガスロマガ、K-Navi、必勝本で一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- SUPER BIG BONUS: **約252枚**。
- BIG BONUS: **約203枚**。
- ART「EVANGELION IMPACT」: 初期 **50～150G+α**、純増約1.5枚/G。
- プレミアム系の覚醒ボーナスも存在するが、物差し目的では通常SBB/BBとART基本性能を主値とする。

## modeSpecificMinimumData

- ART間第1天井（仮天井）: **780G**。到達時50%でCZまたはART（設定6のみ56.3%という必勝本解析あり）。
- ART間第2天井（本天井）: **1280G**。到達でART当選。
- **ボーナスではART間天井G数をリセットしない**。
- CZ「第10使徒迎撃作戦」はART期待度約50%。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時はART間ハマりG数をリセット。
- 通常時の第1天井780Gは **100G**、第2天井1280Gは **600G** へ短縮される。
- 設定変更時の内部状態は **通常B 25% / 高確 75%**。
- 朝一ステージはネルフ。
- すろぱちくえすと、必勝本、pacnk、後年回顧で天井短縮を照合。75%高確も複数解析系で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時はART間ハマりG数を **引き継ぐ**。
- 据え置き時の内部状態も **引き継ぐ**。
- 天井は通常どおり第1 780G / 第2 1280G。
- すろぱちくえすとの設定変更/据え置き対照表で直接確認。
- confidence: ANALYSIS_HIGH

### powerCycleBehavior

- 設定変更を伴わない電源ON/OFFでは **前日の内部状態を引き継ぐ** とする本機固有解析をpacnkで確認。
- ART間G数について「電源ON/OFFのみ」を独立列で明記する同等強度の別資料は今回固定できなかったため、内部状態以外を据え置き契約から自動推定しない。
- powerCycleInternalState: `CARRY_OVER_CONFIRMED_ANALYSIS_SINGLE`。
- powerCycleGameCounter: `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き: **CARRY_OVER**。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`（設定変更なし電源ON/OFFの内部状態引継ぎは確認済みだが、ART間G数を独立明記した資料は固定できず）。

### ceilingAfterReset

- 第1天井: 通常 **780G** → 設定変更後 **100G**。
- 第2天井: 通常 **1280G** → 設定変更後 **600G**。
- 第1天井はCZ/ART抽選、第2天井はART確定。
- 必勝本は設定変更後第1天井で50%（設定6のみ56.3%）でCZorARTと記載。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset

- 設定変更専用の「ゲーム数解除モード」振り分けのような独立モードテーブルは確認せず。
- resetで比較上重要なのは、天井短縮と内部状態の通常B/高確振り分けとして公開されている。
- `NO_SEPARATE_RESET_GAME_NUMBER_MODE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時: **通常B 25% / 高確 75%**。
- 据え置き: **内部状態引継ぎ**。
- 純電源OFF→ON: **前日の内部状態引継ぎ**（pacnk単一解析系で直接記録）。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RESET / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 第1天井が780G→100Gへ大幅短縮。
- 第2天井が1280G→600Gへ大幅短縮。
- **75%で高確スタート**。
- 朝一リセット台を0Gから狙う対象として当時攻略で強く評価されていた。

### resetPenalties

- 設定変更専用の比較可能な公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- **リールガックンによる簡単なリセット判別は不可**とする当時解析あり。
- 朝一の高確挙動や100G仮天井、600G本天井を利用して設定変更を推測可能。
- pacnkでは朝一600Gを超えてART非当選なら据え置き確定と整理されるが、これは短縮天井を利用した事後判別。
- 初期画面/メニューを用いた補助推測記事はあるが、100%確定契約としては扱わない。
- confidence: ANALYSIS_HIGH_FOR_NO_GAKKUN_AND_CEILING_BASED_DETECTION

### numericResetData

- resetFirstCeiling: **100G**（通常780G）。
- resetFirstCeilingHitRate: **50%でCZorART**、設定6のみ **56.3%**（必勝本）。
- resetSecondCeiling: **600G**（通常1280G）。
- resetHighStateRate: **75%**。
- resetNormalBRate: **25%**。
- resetGameCounter: **RESET**。
- carryOverGameCounter: **CARRY_OVER**。
- powerCycleInternalState: **CARRY_OVER**。
- resetGakkunDetection: **NOT_EFFECTIVE / simple gakkun check unavailable**。

## conflicts

- 機械割に小数0.1ptの資料差あり。
  - K-Navi / すろぱちくえすと / グリーンべると上下限: **97.6 / 98.6 / 100.6 / 103.3 / 108.5 / 114.3%**。
  - 一部後年資料: **97.6 / 98.6 / 100.7 / 103.3 / 108.5 / 114.4%**。
  - `CONFLICT_MINOR_ROUNDING_OR_SIMULATION_SETTING3_100_6_VS_100_7_SETTING6_114_3_VS_114_4`。平均化しない。
- 導入日は全国ホール導入2015-06-22をcanonicalとし、グリーンべるとの「6月下旬納品開始予定」は別イベントとして保持。

## missingFields

- 純電源OFF→ON時のART間G数を独立して明示した本機固有資料: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の別個のゲーム数モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用の公開不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. HAZUSE — https://hazuse.com/en/machine/pachislot/5S0191/
   - 型式ヱヴァンゲリヲン・希望の槍R、検定5S0191、2015-06-22導入、メーカーBisty。
   - confidence: ANALYSIS_HIGH_DB
2. K-Navi — https://p-kn.com/slot/2286/
   - 2015-06-22ホール導入開始、設定別ART初当たり/ボーナス/機械割、ART基本性能。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
3. グリーンべると — https://web-greenbelt.jp/00007830/
   - 2015-06-15発表記事。A+ART、純増約1.5枚/G、ART初当たり1/465.7～1/282.7、ボーナス1/431.2～1/364.1、約34～35G/50枚、機械割97.6～114.3%、ART間1280G、6月下旬納品予定。
   - confidence: INDUSTRY
4. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/27/a.php
   - 2015年06月、A+ART、ART純増約1.5枚/G、SBB約252枚、BB約203枚。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
5. パチ&スロ必勝本 — https://p.hisshobon.jp/machine/2574/1/52500
   - ART間第1天井780G→設定変更後100G、第2天井1280G→設定変更後600G、第1天井CZ/ART50%（設定6のみ56.3%）、第2天井ART当選。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
6. パチ&スロ必勝本 ART — https://p.hisshobon.jp/machine/2574/1/52502
   - ART初期50～150G、純増約1.5枚/G。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
7. すろぱちくえすと — https://www.slopachi-quest.com/kisyubetsu/%E3%82%A8%E3%83%B4%E3%82%A1%E5%B8%8C%E6%9C%9B/
   - 設定変更/据え置き対照、天井短縮、G数RESET/CARRY_OVER、内部状態通常B25%/高確75%、設定別ART/ボーナス/機械割。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
8. すろぱちくえすと リセット判別 — https://www.slopachi-quest.com/article/%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3%E5%B8%8C%E6%9C%9B%E3%81%AE%E6%A7%8D-%E8%A8%AD%E5%AE%9A%E5%A4%89%E6%9B%B4%E3%83%BB%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88%E5%88%A4/
   - 簡単なガックン判別不可、朝一挙動/仮天井を用いた推測手順。
   - confidence: ANALYSIS_PERIOD_SOURCE
9. pacnk — https://pacnk.com/slot/2015/eva10/top.php
   - 設定変更で天井Gリセット、第1 100G/第2 600G、朝一高確3/4、**電源ON/OFFでは前日の内部状態を引き継ぐ**。
   - confidence: ANALYSIS_SINGLE
10. 後年回顧 — https://www.tettunn.com/entry/2018-04-30-230924
   - 設定変更時600G天井、100G仮天井50%、75%高確の再照合。
   - confidence: SECONDARY_REVIEW
11. 後年系列差資料 — https://animemiru.jp/articles/48042
   - 機械割100.7/114.4系列。canonicalとは平均せずCONFLICT補助として保持。
   - confidence: SECONDARY_REVIEW

## notes

- 実機完全再現用の小役別ART抽選、EVA CRASH詳細振り分け、特化ゾーン内部抽選は収集対象外として省略。
- ART間天井はボーナス成立ではリセットされない点を、ボーナス間天井と混同しない。
- 設定変更/据え置き/純電源OFF→ONを自動で同義扱いしない。純電断は内部状態のみ直接契約を固定し、ゲーム数は独立資料不足のためUNVERIFIEDとした。
