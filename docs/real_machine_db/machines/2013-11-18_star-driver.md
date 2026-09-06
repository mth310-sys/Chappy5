# パチスロ スタードライバー

machineName: パチスロ スタードライバー
aliases: スタードライバー / STAR DRIVER / スタードライバー 輝きのタクト
manufacturer: 山佐
releaseDate: 2013-11-18
releaseDatePrecision: exact_day

generation: 5号機
systemType: A+ART / ボーナス+ART / 技術介入 / 天井
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- 山佐ネクスト公式で5号機・A+ART・2013年11月稼働を確認。
- パチビー / K-Navi / HAZUSE / ALL7でホール導入日 **2013-11-18** が一致。
- HAZUSEの型式名は **パチスロスタードライバーGG**、検定番号 **3S0386**。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

### 通常掲載値 / 技術介入下限系列

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.0% |
| 3 | 102.0% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 110.0% |

- アタリ7 / 当時スペック資料で一致。
- HAZUSEはボーナス中の技術介入により機械割が変動するとし、設定1〜6をそれぞれ **97.5〜99.0 / 99.0〜100.4 / 102.0〜103.5 / 104.0〜105.3 / 107.0〜108.5 / 110.0〜111.8%** と掲載。
- 技術介入上限を通常値と平均せず、別条件系列として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | ボーナス合成 | ART初当たり | ボーナス+ART合算 |
|---|---:|---:|---:|
| 1 | 1/297.9 | 1/385.6 | 1/168.1 |
| 2 | 1/292.6 | 1/364.2 | 1/162.2 |
| 3 | 1/282.5 | 1/338.8 | 1/154.0 |
| 4 | 1/277.7 | 1/314.8 | 1/147.5 |
| 5 | 1/268.6 | 1/294.9 | 1/140.6 |
| 6 | 1/260.1 | 1/277.8 | 1/134.3 |

- HAZUSE / アタリ7 / 当時スペック資料で一致（丸め精度差のみ）。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 当時スペック資料で **約31G/1000円（50枚）**。
- 同値を独立した高信頼解析本文で直接再確認できなかったため、単一当時資料値として保存。
- confidence: ANALYSIS_SINGLE_PERIOD_SOURCE

## netIncrease

- ART「ZERO DRIVE」: **純増約1.8枚/G**。
- 山佐公式 / パチビー / K-Navi / パチマガスロマガ / HAZUSEで一致。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- SAMEKH BIG BONUS: **約205枚**。
- BIG BONUS: **約205枚**。
- REGULAR BONUS: **約55枚**。
- ART「ZERO DRIVE」: **1セット50G+α**、純増約1.8枚/G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時のART抽選状態は **通常 / 高確 / 超高確**。
- 液晶は学園・ビーチが通常、カフェが高確示唆、星空が超高確示唆。
- ART前兆ステージ「綺羅星モード」を搭載。
- confidence: ANALYSIS_HIGH

## ceiling

- **第一天井: ボーナス間1200G** → ART当選確定。
- **第二天井: ボーナス間1800G** → ザメク決戦 + エンディングART。
- ART当選ではボーナス間天井ゲーム数はリセットされない。
- HAZUSE / すろぱちくえすとで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_GAME_COUNTER_CLEAR_CONFIRMED__CARRYOVER_POWER_MODE_STATE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 当時解析「すろぱちくえすと」で **設定変更時は天井までのゲーム数をリセット**と明記。
- 第一/第二天井ともボーナス間ゲーム数を基準とするため、設定変更後は前日進捗を持ち越さない。
- 設定変更時の通常/高確/超高確の初期状態振り分けや専用朝一モードは、機種名・型式・山佐・設定変更/リセット/朝一/高確を組み替えて再探索しても直接値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_SINGLE_PERIOD_FOR_COUNTER_CLEAR__UNVERIFIED_FOR_STATE

### carryOverBehavior

- 「据え置き」と明示してボーナス間天井G、通常/高確/超高確をどう扱うかを列挙した本機固有資料を、宵越し/据え置き/天井/朝一で再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時G数リセットの逆を自動的に据え置きKEEPとは推定しない。

### powerCycleBehavior

- 設定変更を伴わない単純 **電源OFF→ON** 時のボーナス間G数・内部状態・ART関連状態の保持/初期化を示す本機固有資料は、電源/電断/電源OFF ON/再起動等で再探索しても取得できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと電源OFF→ONを自動同一視しない。

### gameCounterReset

- setting change: **CLEAR_CONFIRMED_ANALYSIS_PERIOD_SOURCE**。
- carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更時は天井Gをクリアし0から再スタート。
- 設定変更専用の短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常仕様の第一天井1200G / 第二天井1800Gをリセット専用短縮と混同しない。

### modeAfterReset

- 本機はゲーム数解除モード型ではなくA+ART機。
- 設定変更専用の朝一モード/テーブル振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- ART抽選状態（通常/高確/超高確）の設定変更時初期振り分けは stateAfterReset で扱う。

### stateAfterReset

- 通常 / 高確 / 超高確の3状態は確認済み。
- 設定変更時・据え置き時・単純電源OFF→ON時の初期/保持契約は十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の天井短縮、ART確定、朝一高確率などは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更で前日のボーナス間天井進捗が消えるため、深い宵越しG数を期待する客側には不利要素。
- 期待値の定量推計は行わない。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ、ランプ等による設定変更/据え置き判別契約を、朝一/ガックン/リール/ステージ/判別で再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時カフェ/星空ステージは高確示唆だが、朝一変更判別契約としては確認できないため転用しない。

### publicMorningNumbers

- 設定変更時天井G: **0から再スタート**。
- 通常仕様の第一天井: **1200G**。
- 通常仕様の第二天井: **1800G**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の高確/超高確振り分け: **UNVERIFIED_AFTER_RESEARCH**。

## missingFields

- 据え置き時の天井G/内部状態: UNVERIFIED_AFTER_RESEARCH。
- 単純電源OFF→ON時の天井G/内部状態: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の通常/高確/超高確振り分け: UNVERIFIED_AFTER_RESEARCH。
- 本機固有のガックン等変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- 機械割は技術介入の成否で変動するため、通常掲載系列とHAZUSEの技術介入上限系列を平均しない。
- 第一/第二天井は **ボーナス間**。ART当選を挟んでも天井Gがリセットされない通常仕様を保持。
- 設定変更時の天井Gクリアから、据え置き・単純電断時のKEEPを推測しない。
- 高確示唆ステージを設定変更判別と混同しない。

## sources

取得日: 2026-09-06

- 山佐ネクスト公式: https://yamasa-next.co.jp/model_std/ — 5号機、A+ART、2013年11月、ART純増約1.8枚/G。
- ALL7 2013年11月導入一覧: https://www.all7.jp/plans/index/2013/11 — 2013-11-18導入予定。
- パチビー: https://www.pachibee.jp/machines/about/213100007 — 2013-11-18、A+ART、ART 50G+α/約1.8枚/G。
- K-Navi: https://p-kn.com/slot/1951/ — 2013-11-18、BIG/REG獲得枚数、A+ART基本仕様。
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/195/a.php — BIG約205枚、REG約55枚、ART純増約1.8枚/G・50G+α。
- HAZUSE基本/解析: https://hazuse.com/machine/pachislot/3S0386/ — 型式/検定番号、導入日、初当たり、天井、内部状態。
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/3S0386/genre/201/ — 技術介入条件別機械割、基本獲得枚数。
- アタリ7: https://www.atari7.com/slot/date1428987492.php — 設定別ボーナス/ART/合算/機械割。
- ★スロスター★当時スペック: https://ameblo.jp/slostar/entry-11621255228.html — 約31G/千円、設定別確率/出玉率、ART/獲得枚数。
- すろぱちくえすと（2013-11-18）: https://www.slopachi-quest.com/article/380506551-html/ — 第一1200G/第二1800G天井、設定変更時天井Gリセット。
