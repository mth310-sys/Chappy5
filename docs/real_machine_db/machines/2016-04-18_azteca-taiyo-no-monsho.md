# アステカ-太陽の紋章-

machineName: アステカ-太陽の紋章-
manufacturer: エレコ
releaseDate: 2016-04-18
recordNumber: 974
generation: 5号機
systemType: A+ART+CT / リアルボーナス+ゲーム数上乗せART
formalModelName: アステカ太陽の紋章AE
certificationNumber: 6S0049
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_PAYOUT_CONFLICT

## identity
- HAZUSEは型式 **アステカ太陽の紋章AE**、検定番号 **6S0049**、メーカー **エレコ**、導入開始 **2016-04-18** と記録。
- K-Navi、パチビー等の機種別当時資料もホール導入開始を **2016-04-18** として一致。
- ユニバーサル公式系PVは2016-04-17公開で製品存在を確認。

## payoutRateBySetting
### canonical / 当時主要解析系列
| 設定 | 機械割 |
|---:|---:|
| 1 | 99.3% |
| 2 | 99.5% |
| 3 | 101.9% |
| 4 | 103.8% |
| 5 | 106.0% |
| 6 | 109.0% |

- HAZUSE、パチビー、ちょんぼりすた等で一致。
- 後年整理資料pachinaviには **98.5 / 98.8 / 101.0 / 103.8 / 106.0 / 109.0%** の別系列があるため、平均せず `CONFLICT_PAYOUT_STANDARD_99_3_99_5_101_9_103_8_106_0_109_0_VS_98_5_98_8_101_0_103_8_106_0_109_0` として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT

## initialHitBySetting
### ボーナス
| 設定 | 確率 |
|---:|---:|
| 1 | 1/344.9 |
| 2 | 1/334.4 |
| 3 | 1/324.4 |
| 4 | 1/315.1 |
| 5 | 1/306.2 |
| 6 | 1/290.0 |

### ART「アステカRUSH」初当たり
| 設定 | 確率 |
|---:|---:|
| 1 | 1/494.6 |
| 2 | 1/391.6 |
| 3 | 1/472.1 |
| 4 | 1/353.7 |
| 5 | 1/387.4 |
| 6 | 1/260.7 |

- HAZUSEの設定推測表、複数解析で一致。丸め資料の1/345～1/290、1/495～1/261は同一系列として扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約34.3～34.5G/50枚**。
- ちょんぼりすた等の解析整理値。
reliability: ANALYSIS_HIGH

## netIncrease
- ART単体: **約1.5枚/G**。
- ボーナス込み: **約1.9枚/G**。
- パチビー、ちょんぼりすた等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- アステカボーナス: **純増150枚**（216枚超払い出しで終了）。
- プレミアムボーナス「魂の祭壇」: **150枚**、ART確定を伴う。
- ART「アステカRUSH」: **1セット50G+α**、約1.5枚/G、ゲーム数上乗せ型。
- CT「チャレンジタイム」: **1セット8G+α**の上乗せ特化ゾーン。
reliability: INDUSTRY/ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はCZ抽選に関わる **通常 / 高確** の2状態を持つ。
- 高確移行時は10G保証。
- 通常天井は **ボーナス＆ART間1180G消化**で、最大32Gの前兆を経てART当選。
- CZ「巨獣バトル」がART初当たり構造上重要。CZ突入率は設定1～6で概ね **1/256 / 1/200 / 1/249 / 1/184 / 1/218 / 1/145**。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_CARRYOVER_AND_POWER_CYCLE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時:
  - 天井到達までのゲーム数: **RESET / CLEAR**。
  - 内部状態: **RESELECT**。
  - 設定変更時状態振り分けは全設定共通で **通常87.50% / 高確12.50%**。
- HAZUSEの状態移行表で設定変更時の直接抽選を確認し、別解析でも天井ゲーム数クリアを確認。
reliability: ANALYSIS_HIGH_DIRECT_TABLE_PLUS_SECONDARY_CONFIRMATION

### carryOverBehavior
- 設定を変更しない据え置き時の、天井ゲーム数・内部状態を設定変更/純電断と独立比較した本機固有の直接資料は、表記揺れ・型式・朝一・宵越し・据え置き・天井・状態を再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般則からの推測はしない。

### powerCycleBehavior
- 純電源OFF→ON時のみの、天井ゲーム数・内部状態・液晶ステージの保持/初期化を本機固有に直接比較した資料は、`電源OFF ON / 電源断 / 朝一 / 設定変更 / リセット / 据え置き` を変えて再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- 通常天井: **ボーナス＆ART間1180G + 最大前兆32GでART**。
- 設定変更時は天井進捗を0から再カウント。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset
- 本機で公開確認できる朝一内部要素は通常/高確の状態再抽選。
- 天国等のゲーム数モード再抽選や朝一専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 設定変更時: **通常87.50% / 高確12.50%**（全設定共通）。
- 高確には10G保証。
- 据え置き / 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_DIRECT_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時 **12.50%で高確スタート**。
- 高確はCZ当選率が通常より優遇されるため、朝一の短期的なART契機に影響する。
- 固定短縮天井は確認されていない。

### resetPenalties
- 設定変更で前日からの **1180G天井進捗を失う**。
- 深いハマリを宵越し狙いする価値は設定変更で消失する。

### resetDetection
- 本機固有のガックン、初期出目、ランプ、液晶ステージによる設定変更確定契約は、検索語・資料系統を変えて十分再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一高確挙動は設定変更時12.5%で起こり得るが、通常遊技中にも高確移行が存在するため確定判別にはならない。

### numericResetData
- 設定変更時状態振り分け: **通常87.50% / 高確12.50%（全設定共通）**。
- 設定変更後天井: **通常と同じ1180G**（専用短縮なし確認）。

## sources
取得日: 2026-09-08

1. HAZUSE — アステカ‐太陽の紋章‐
   - https://hazuse.com/machine/pachislot/6S0049/
   - 型式アステカ太陽の紋章AE、検定6S0049、導入2016-04-18、メーカー、機械割、状態移行表
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE
2. HAZUSE — 設定推測
   - https://hazuse.com/machine/pachislot/6S0049/genre/208/
   - 設定別ボーナス・ART初当たり
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE
3. パチビー — アステカ-太陽の紋章-
   - https://www.pachibee.jp/machines/index/216030006
   - 導入日、機械割、150枚ボーナス、ART50G+α、純増1.5枚/G・ボナ込み1.9枚/G
   - reliability: INDUSTRY/ANALYSIS_HIGH
4. K-Navi — アステカ-太陽の紋章-
   - https://p-kn.com/slot/2478/
   - ホール導入開始2016-04-18、基本仕様
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
5. ちょんぼりすた — アステカ 太陽の紋章 解析まとめ
   - https://chonborista.com/slot/universal-slot/18561/
   - 天井1180G、ベース34.3～34.5G/50枚、設定別性能、ART仕様
   - reliability: ANALYSIS_HIGH
6. パチ7 — 通常時解析
   - https://pachiseven.jp/machines/4804/cutout/94
   - 設定変更時状態振り分け通常87.5% / 高確12.5%
   - reliability: ANALYSIS_HIGH
7. crankyseven — アステカ 太陽の紋章
   - https://crankyseven.com/azteca-taiyo-pc.htm
   - 設定変更時に天井ゲーム数クリア
   - reliability: ANALYSIS_SINGLE
8. pachinavi — アステカ-太陽の紋章-
   - https://pachinavi.net/machines/azteca/
   - 後年整理の別機械割系列98.5～109.0%、高確12.5%朝一恩恵
   - reliability: ANALYSIS_SINGLE / CONFLICT_SUPPORT
9. パチマガスロマガ — アステカ-太陽の紋章-
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/98/a.php
   - エレコ2016年4月、ホール登場4月中旬予定、製品特徴
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
10. ユニバチャンネル公式PV
   - https://www.youtube.com/watch?v=agT9WAlPQZM
   - 2016-04-17公開、公式製品存在
   - reliability: OFFICIAL

## missingFields
- carryOverBehavior detailed contract: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset-specific liquid-crystal/start-stage contract: UNVERIFIED_AFTER_RESEARCH
- machine-specific confirmed reset-detection contract: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- `CONFLICT_PAYOUT_STANDARD_99_3_99_5_101_9_103_8_106_0_109_0_VS_98_5_98_8_101_0_103_8_106_0_109_0`
- canonicalは当時複数資料一致の99.3/99.5/101.9/103.8/106.0/109.0%。後年別系列は平均せず保持。

## notes
- 完全再現用の通常時全状態移行率、小役別CZ抽選、CT内部抽選等は物差しDB範囲外のため収録しない。
- 設定変更時の12.5%高確開始は朝一客AIに直接影響する公開数値として収録。
