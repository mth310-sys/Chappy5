# パチスロ RAVE エンドレスラッシュ

machineName: パチスロ RAVE エンドレスラッシュ
manufacturer: 藤商事
releaseDate: 2013-09-02
releaseDatePrecision: exact_day_multi_source
generation: 5号機
systemType: A+ART / ゲーム数上乗せ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- ホール導入開始: **2013-09-02**。導入日DBで具体日を確認。
- メーカー: **藤商事**。
- 5号機のボーナス+ART機。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.32% |
| 2 | 98.56% |
| 3 | 100.24% |
| 4 | 103.01% |
| 5 | 107.08% |
| 6 | 110.50% |

- パチマガスロマガ系掲載値を主系列とする。
- CrankySeven等の **97.3 / 98.6 / 100.2 / 103.0 / 107.1 / 110.5%** は同系列の丸め値でありCONFLICT扱いしない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/449.5 |
| 2 | 1/430.2 |
| 3 | 1/405.9 |
| 4 | 1/357.8 |
| 5 | 1/300.4 |
| 6 | 1/260.6 |

### ボーナス合算

| 設定 | ボーナス合算 |
|---|---:|
| 1 | 1/248.2 |
| 2 | 1/240.9 |
| 3 | 1/234.1 |
| 4 | 1/227.6 |
| 5 | 1/221.4 |
| 6 | 1/215.6 |

- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約32G/50枚**（当時資料表記は1000円あたり約32G）。
- confidence: ANALYSIS_MULTI_SOURCE

## netIncrease

- ART「レイヴタイム」: **1セット50G + α / 純増約1.5枚/G**。
- ゲーム数上乗せ型。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **純増約200枚**。
- REG: **純増約40枚**。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時には自力高確率ゾーン抽選に影響する複数状態が存在し、CrankySevenは **4状態** とする。
- 自力高確率ゾーンからのART期待度は約31%。
- 「キャリーオーバーシステム」は自力高確率ゾーンの失敗回数等をゲーム中に蓄積し、上乗せ特化ゾーン期待度を高める機能として扱う。
- この名称を、ホールの据え置き/電源OFF→ONにおける内部情報保持と混同しない。

## ceiling

- **ボーナス間1280G**で天井到達。
- 到達後は前兆を経由し、ボーナス当選までARTがループするという解析記述を複数資料で確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CEILING_CLEAR_CONFIRMED__CARRYOVER_POWER_CYCLE_MODE_STATE_DETECTION_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 本機固有解析で **設定変更時は天井到達までのゲーム数をクリア** と確認。
- したがってボーナス間1280G天井の前日進捗は設定変更時に持ち越さない。
- 設定変更時の4状態の初期振り分け、CZ関連蓄積値、液晶初期状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 純据え置き時のボーナス間ゲーム数、天井進捗、通常状態、CZ関連蓄積値の扱いは、本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時CLEARという事実から、据え置き時RETAINを逆算しない。
- 機能名「キャリーオーバーシステム」は通常遊技中のCZ失敗蓄積系の名称であり、据え置き契約の根拠には使用しない。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ** のボーナス間G数、天井進捗、通常状態、CZ関連蓄積値、液晶状態については **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- setting change: **CLEAR_CONFIRMED_MULTI_ANALYSIS_SOURCE**。
- pure carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常時の天井: **ボーナス間1280G**。
- 設定変更時: 前日進捗 **CLEAR**。
- 設定変更専用の短縮天井/特殊天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 通常時に4状態が存在することは確認。
- 設定変更時の状態/モード初期振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時、純据え置き時、電源OFF→ON時の状態処理は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の朝一短縮天井、CZ優遇、専用モード振り分け等の本機固有公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更時はボーナス間天井進捗がクリアされるため、前日ハマリを利用した宵越し天井狙いには不利。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、液晶初期ステージ、ランプ等による設定変更/据え置き判別は **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時の天井進捗: **0G相当へCLEAR**（前日進捗を消去する意味での契約）。
- 設定変更専用モード/状態振り分け率、朝一短縮天井数値: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / safeguards

- 機械割の小数2桁系列と小数1桁系列は丸め関係のためCONFLICTにしない。
- 「キャリーオーバーシステム」を、ホール据え置き時の天井・モード・状態保持と解釈しない。
- 後継/別版機や同名漫画・パチンコ機の情報を混入させない。

## sources

取得日: **2026-09-06**

1. 藤商事「パチスロ RAVE エンドレスラッシュ」公式製品情報
   - https://www.fujimarukun.co.jp/products/s_rave/
   - BIG約200枚、REG約40枚、ART純増約1.5枚/G等の公式基本仕様。
   - confidence: OFFICIAL_HIGH

2. パチマガスロマガ系「RAVE エンドレスラッシュ」解析
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/14/h.php
   - 設定別機械割、ボーナス確率、ART初当たり等。
   - confidence: ANALYSIS_HIGH

3. CrankySeven「RAVE エンドレスラッシュ」
   - https://crankyseven.com/rave-pc.htm
   - 約32G/1000円、BIG約200枚、REG約40枚、ART50G・約1.5枚/G、ボーナス間1280G天井、設定変更時の天井Gクリア、通常時4状態。
   - confidence: ANALYSIS_HIGH

4. パチスロデータ「パチスロRAVE ～エンドレスラッシュ～」
   - https://pachislo-data.com/fuji/rave
   - 導入開始日2013-09-02、性能表、ART、天井、設定変更時天井Gクリアを再照合。
   - confidence: RETROSPECTIVE_ANALYSIS_HIGH
