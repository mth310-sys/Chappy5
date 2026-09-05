# DARKER THAN BLACK -黒の契約者-

machineName: DARKER THAN BLACK -黒の契約者-
manufacturer: SNKプレイモア
releaseDate: 2013-01-21
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi・パチビーで2013-01-21ホール導入開始が一致。2012-12-14付グリーンべるとは「1月20日から納品予定」と発表しており、納品予定日とホール導入日を分離して保持。
generation: 5号機
systemType: A+ART / ゲーム数上乗せ + セットストック / CZ搭載
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## identity

- 型式名: **ダーカーザンブラックA**。
- 検定番号: **2S0966**。
- P-WORLD / HAZUSE DATA系で確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

### 主系列

| 設定 | 機械割 |
|---|---:|
| 1 | 96.8% |
| 2 | 98.6% |
| 3 | 99.9% |
| 4 | 104.5% |
| 5 | 109.3% |
| 6 | 114.3% |

- P-WORLD、5号機クロニクル、2013年当時の天井攻略資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### CONFLICT

- CrankySevenは設定5 **109.8%** / 設定6 **114.6%** と掲載し、設定1〜4は主系列と一致。
- 平均化せず、設定5・6のみ `CONFLICT_109.3_VS_109.8__114.3_VS_114.6` として保持。

## initialHitBySetting

### ART「DARKER RUSH」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/470.7 |
| 2 | 1/424.3 |
| 3 | 1/438.3 |
| 4 | 1/358.2 |
| 5 | 1/364.0 |
| 6 | 1/279.8 |

- K-Navi、P-WORLD、パチマガスロマガ、CrankySevenで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### BIG

| 設定 | BIG |
|---|---:|
| 1 | 1/448.8 |
| 2 | 1/442.8 |
| 3 | 1/431.1 |
| 4 | 1/420.1 |
| 5 | 1/404.5 |
| 6 | 1/390.1 |

### REG

| 設定 | REG |
|---|---:|
| 1 | 1/606.8 |
| 2 | 1/595.7 |
| 3 | 1/574.8 |
| 4 | 1/555.3 |
| 5 | 1/528.5 |
| 6 | 1/504.1 |

- 複数資料で一致。

## baseGamesPer50

- **約31G/1000円（約31G/50枚）**。
- CrankySevenの本機固有掲載値。
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## netIncrease

- ART「DARKER RUSH」: **約+1.7枚/G**。
- 基本 **1セット50G+α**。
- グリーンべると当時業界発表、K-Navi、P-WORLD、パチマガスロマガで一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約203枚**。
- REG: **約42枚**。
- ART「DARKER RUSH」: 1セット50G+α、純増約+1.7枚/G。
- CZ「大黒斑ゾーン」: 基本15G+α、ART期待度約33%。
- CZ「大黒斑ゾーンSP」: 10G、ART期待度約77%（P-WORLD）。
- 天国RUSH: 10G保証後90%継続、毎ゲーム上乗せ。天井到達時にも突入契機となる。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時内部状態は **通常A / 通常B / 高確**。
- 別軸で「契約MODE」および50G周期の「裏高確」管理が存在。
- 通常天井: **ボーナス間1400G**。
- 天井到達時はARTストックに加え「天国RUSH」突入が確認される資料あり。
- 本DB目的上、通常時の全状態移行率・全裏高確テーブルは収集対象外。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE__SETTING_CHANGE_COUNTER_CLEAR_AND_STATE_TABLE_DRAW_CONFIRMED__SUEOKI_POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- 設定変更で **ボーナス間1400G天井までのゲーム数をクリア**することを複数解析資料で確認。
- K-Naviは本機専用に「設定変更後の挙動」項目、および「通常時の内部状態移行率（ART終了時・設定変更時）」解析項目を持つ。
- パチ＆スロ必勝本では、通常状態とは別軸の「裏高確」A〜Fテーブルについて、**設定変更時にテーブル抽選が行われる**ことを直接確認。
- ただし設定変更時の通常A/通常B/高確の具体的振り分け値、裏高確A〜Fの設定変更専用振り分け値は今回の再探索では直接回収できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 「宵越し×」という当時攻略記述は設定変更時の天井クリアを前提としており、純据え置き時の天井G・通常状態・裏高確テーブルの全保持契約を直接明示する資料としては扱わない。
- 純据え置き時の天井ゲーム数・通常A/B/高確・裏高確テーブル保持契約: **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ON時の天井G、通常状態、裏高確テーブル、液晶開始状態を本機固有資料で直接確定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 通常天井: **ボーナス間1400G**。
- 設定変更時: **CLEAR_CONFIRMED**。
- 据え置き時: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更で天井進捗をクリアし、通常のボーナス間1400G基準へ戻ることを確認。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 通常A / 通常B / 高確という状態系と、契約MODE、裏高確テーブルA〜Fが存在。
- **裏高確テーブルは設定変更時に抽選**されることを確認。
- 設定変更時の各テーブル具体振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 通常A/B/高確の設定変更時初期振り分けも **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時に裏高確テーブル抽選が行われることは確認済み。
- 通常A/B/高確そのものの初期状態振り分け、契約MODEの扱いは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時に裏高確テーブルが再抽選される仕組みは確認できるが、朝一優遇と評価できる設定変更専用発生率を今回直接回収できていないため、比較可能な確定恩恵数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日ボーナス間ハマリが存在した場合、設定変更により1400G天井までの進捗が消える点は朝一天井狙い上の不利。
- それ以外の設定変更専用ペナルティ: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ等による設定変更/据え置きの確定判別要素は、表記揺れ・型式・メーカー名と検索語を変えて再探索後も直接確定できず **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時の通常状態振り分け、裏高確テーブルA〜F振り分け、朝一特定G以内当選率など、比較可能な設定変更専用数値は今回 **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED**。
- 通常運用中の50G周期裏高確移行率は資料が存在するが、設定変更専用数値ではないため公開朝一数値へ混入しない。

### numericResetData

- normalCeiling: BONUS_INTERVAL_1400G
- settingChangeGameCounter: CLEAR
- resetShortenedCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- settingChangeUraKoukakuTableDraw: CONFIRMED
- settingChangeUraKoukakuTableDistribution: UNVERIFIED_AFTER_RESEARCH
- settingChangeNormalStateDistribution: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_COUNTER_CLEAR__ANALYSIS_HIGH_FOR_SETTING_CHANGE_URA_KOUKAKU_TABLE_DRAW__UNVERIFIED_AFTER_RESEARCH_FOR_SUEOKI_POWER_CYCLE_AND_NUMERIC_RESET_DISTRIBUTIONS

## missingFields

- 純据え置き時の天井G・通常状態・裏高確テーブル保持契約。
- 単純電源OFF→ON時の天井G・通常状態・裏高確テーブル・液晶契約。
- 設定変更時の通常A/B/高確の具体振り分け。
- 設定変更時の裏高確A〜Fテーブル具体振り分け。
- 本機固有のガックン等の変更判別。
- 設定変更専用の比較可能な公開朝一数値。

## conflicts

- 機械割は主系列 **96.8 / 98.6 / 99.9 / 104.5 / 109.3 / 114.3%** に対し、CrankySevenのみ設定5 **109.8%** / 設定6 **114.6%**。平均せずCONFLICT保持。
- パチマガスロマガ検索表示に設定1〜3のPAYOUTが196.8/198.6/199.9%と表示される箇所があるが、100ポイント上振れの明白な表示/パース異常と判断し、数値系列の根拠には採用していない。

## sources

取得日: 2026-09-05

1. K-Navi DARKER THAN BLACK -黒の契約者-
   - https://p-kn.com/slot/1772/
   - 2013-01-21導入、BIG/REG/ART初当たり、ART 50G+α・純増約1.7枚/G、設定変更・内部状態解析項目の存在。
2. P-WORLD DARKER THAN BLACK‐黒の契約者‐
   - https://www.p-world.co.jp/machine/database/6944
   - 型式ダーカーザンブラックA、検定番号2S0966、機械割主系列、BIG/REG/ART初当たり、獲得枚数、ART/CZ性能。
3. グリーンべると / P-WORLD業界ニュース（2012-12-14）
   - https://news.p-world.co.jp/articles/5626/greenbelt
   - SNKプレイモア発表、A+ART、純増1.7枚/G・50G、BIG約203枚、REG約42枚、2013-01-20納品予定。
4. パチビー DARKER THAN BLACK -黒の契約者-
   - https://www.pachibee.jp/machines/index/212120007
   - 2013-01-21導入、5号機ART、純増約1.7枚/G。
5. パチマガスロマガ スペック / ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/42/a.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/42/h.php
   - BIG約203枚、REG約42枚、ART 50G・純増1.7枚/G、BIG/REG/ART初当たり。
6. CrankySeven DARKER THAN BLACK -黒の契約者-
   - https://crankyseven.com/darkerthanblack-pc.htm
   - 約31G/1000円、天井ボーナス間1400G、設定変更で天井Gクリア、性能コア。設定5/6機械割は主系列とCONFLICT。
7. 天井ハイエナ生活（2013-01-20 / 2013-01-26）
   - https://macerate.seesaa.net/article/314414485.html
   - https://macerate.seesaa.net/article/316297790.html
   - 当時資料。設定変更で天井Gリセット、1/21新台がDARKER THAN BLACKと十字架2の2機種との記録。
8. パチ＆スロ必勝本 裏高確移行率
   - https://p.hisshobon.jp/machine/2138/1/38134
   - 裏高確A〜Fテーブル管理、ボーナス後・ART終了後・設定変更時にテーブル抽選。
9. HAZUSE DATA DARKER THAN BLACK-黒の契約者-
   - https://data.hazuse.com/?genre=209&machine_code=2S0966
   - 本機解析、検定番号2S0966の機種ページ。
10. 5号機クロニクル SNKプレイモア全機種
   - https://5goki.com/snkplaymore
   - 2013/1、機械割96.8〜114.3%主系列。
11. パチスロ業界初まとめ 更新情報
   - https://slothistory.com/kousin_all_0.html
   - 2013/1/21発売として当時整理。
