# 絶対衝激II

machineName: 絶対衝激II
manufacturer: アリストクラートテクノロジーズ
releaseDate: 2013-03-04
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi、パチ＆スロ必勝本、2013-03-04付ドラス発表が2013-03-04実機導入で一致。
generation: 5号機
systemType: AT / 擬似ボーナス+規定ゲーム数管理+自力CZ / セット数・ゲーム数上乗せ
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- 表記: **絶対衝激II ～PLATONIC HEART～**。
- メーカー: **アリストクラートテクノロジーズ**。
- 2013-03-04付ドラス発表は「実機導入同日」のアプリ配信として実機導入日を直接明示。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.5% |
| 3 | 100.5% |
| 4 | 104.2% |
| 5 | 107.5% |
| 6 | 111.8% |

- P-WORLD、pacnk、CrankySeven、後年回顧資料で一致。
- パチ＆スロ必勝本の基本スペックページは当時掲載時点で機械割「調査中」のため、値の根拠には用いない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### PLATONIC BONUS初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/314.9 |
| 2 | 1/286.7 |
| 3 | 1/292.2 |
| 4 | 1/251.0 |
| 5 | 1/263.0 |
| 6 | 1/215.5 |

### 衝激RUSH初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/624.4 |
| 2 | 1/609.3 |
| 3 | 1/585.3 |
| 4 | 1/532.1 |
| 5 | 1/511.2 |
| 6 | 1/451.4 |

### BONUS+AT合算

| 設定 | 確率 |
|---|---:|
| 1 | 1/208.9 |
| 2 | 1/194.2 |
| 3 | 1/194.4 |
| 4 | 1/170.8 |
| 5 | 1/170.9 |
| 6 | 1/148.3 |

- K-Naviとパチ＆スロ必勝本でBONUS/AT初当たりが一致。合算はK-Naviおよび当時系資料で確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約34G/50枚**。
- 現存する直接比較値はみんスロ掲載値。
- 「1000円あたり」「50枚」「ベース」「コイン持ち」等を表記揺れで再探索し、2013年版の別系統直接値は今回確定できず。
- 2025年スマスロ版の36.7G/50枚は別機種のため混入させない。
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## netIncrease

- AT「衝激RUSH」: **約+2.9枚/G**。
- パチ＆スロ必勝本、K-Navi、P-WORLDで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- PLATONIC BONUS: **約75枚**（P-WORLD）。
- パチ＆スロ必勝本/K-Naviは「116枚を超える払い出しで終了」と払い出し終了条件を掲載。約75枚は実獲得目安として定義を分けて保持。
- 衝激RUSH: **1セット40G+α**（パチ＆スロ必勝本、K-Navi）。
- P-WORLDは「50ゲーム+α」とするため、セットG数はCONFLICTとして下記に保持し、当時解析2系統一致の40Gを主値とする。
- confidence: ANALYSIS_HIGH_WITH_CONFLICT_NOTE

## modeSpecificMinimumData

### 通常モード

- **通常 / 準備 / 天国 / 超天国**の4モード。
- モード別最大規定ゲーム数:
  - 通常: **992G**
  - 準備: **800G**
  - 天国: **128G**
  - 超天国: **128G**
- 通常時は別軸で**低確 / 高確**の2状態があり、CZ当選率へ影響。
- CZ「絶対領域」は15G or 30G、当時解析でAT当選期待度約43%。完全再現用の小役別詳細抽選は収録対象外。

### 天井

- 通常時最大 **992G** ハマリでBONUS or AT当選。
- 準備モード最大800G、天国/超天国最大128G。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_GAME_MODE_STATE_REROLL__POWER_CYCLE_ALL_RETAIN__RESET_MODE_DISTRIBUTION_DIRECT
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井までのゲーム数: 再抽選**。
- **モード: 再抽選**。
- **内部状態: 再抽選**。
- **液晶ステージ: 学校ステージ**。
- パチ＆スロ必勝本「天井&設定変更」に直接記載。
- confidence: ANALYSIS_PERIOD_DIRECT

### carryOverBehavior

- 純据え置きの独立表記は今回確認できなかった。
- ただし同資料で電源OFF→ONのみの場合に天井G・モード・状態をすべて引き継ぐことが直接明示されるため、通常の据え置き+電断は内部値保持として扱う。
- confidence: ANALYSIS_HIGH_BY_DIRECT_POWER_CYCLE_SPEC

### powerCycleBehavior

- **電源OFF→ONのみ**:
  - 天井までのゲーム数: **RETAIN_CONFIRMED**
  - モード: **RETAIN_CONFIRMED**
  - 状態: **RETAIN_CONFIRMED**
  - 液晶ステージ: **学校ステージ**
- confidence: ANALYSIS_PERIOD_DIRECT

### gameCounterReset

- 設定変更時: **REROLL / RESET_CONFIRMED**。
- 据え置き時: **RETAIN_BY_POWER_CYCLE_SPEC**。
- 電源OFF→ONのみ: **RETAIN_CONFIRMED**。

### ceilingAfterReset

- 設定変更時はモードを再抽選するため、朝一の最大規定Gは選択モードに依存。
- 通常モードなら最大992G、準備800G、天国/超天国128G。
- 「設定変更専用の固定短縮天井」は確認できず、モード再抽選による短縮可能性と分離する。

### modeAfterReset

- 設定変更時: **4モードを再抽選**。
- 公開振り分け:

| 設定 | 通常 | 準備 | 天国 | 超天国 |
|---|---:|---:|---:|---:|
| 1 | 77.5% | 10.0% | 12.2% | 0.3% |
| 2 | 72.5% | 15.0% | 12.2% | 0.3% |
| 3 | 75.7% | 10.0% | 13.8% | 0.4% |
| 4 | 65.7% | 20.0% | 13.8% | 0.4% |
| 5 | 73.3% | 10.0% | 16.1% | 0.6% |
| 6 | 58.3% | 25.0% | 16.1% | 0.6% |

- パチ＆スロ必勝本「モード移行率」に設定変更時として直接掲載。
- 天国+超天国合計は設定1/2 **12.5%**、設定3/4 **14.2%**、設定5/6 **16.7%**。
- confidence: ANALYSIS_PERIOD_DIRECT_NUMERIC

### stateAfterReset

- 通常時には**低確 / 高確**の2状態が存在。
- 設定変更時に状態移行抽選が行われ、設定変更で「状態再抽選」されることは直接確認済み。
- ただし設定変更専用の低確/高確具体振り分けは、機種名表記揺れ・メーカー名・「状態移行率/設定変更/リセット/朝一/高確」を組み替え、必勝本/K-Navi/pacnk/P-WORLD/古い解析系を再探索しても今回直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後に天国/超天国が選択される割合は **12.5～16.7%**で、選択時の最大規定Gは128G。
- 準備モードも設定により10～25%で選択され、通常992Gより最大天井が800Gへ短くなる。
- これは固定のリセット天井短縮ではなく、設定変更時モード再抽選による朝一恩恵として扱う。

### resetPenalties

- 前日天井進捗は設定変更で再抽選されるため、**宵越しゲーム数進捗を失う**。
- 前日が天国/超天国、高確など有利な内部条件でも設定変更で再抽選される。

### resetDetection

- 設定変更時も電源OFF→ON時も**液晶ステージは学校ステージ**から開始するため、朝一ステージ単独では設定変更/据え置きを判別できない。
- 本機固有のリールガックン、初期出目、表示による確定的な変更判別は「ガックン/朝一/設定変更/据え置き/判別」を組み替えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 朝一128G以内の当選は天国系選択の可能性を上げるが、通常モード等でも別契機当選があるため設定変更確定要素にはしない。

### publicMorningNumbers

- settingChangeModeNormal: **77.5 / 72.5 / 75.7 / 65.7 / 73.3 / 58.3%**
- settingChangeModePreparation: **10.0 / 15.0 / 10.0 / 20.0 / 10.0 / 25.0%**
- settingChangeModeHeaven: **12.2 / 12.2 / 13.8 / 13.8 / 16.1 / 16.1%**
- settingChangeModeSuperHeaven: **0.3 / 0.3 / 0.4 / 0.4 / 0.6 / 0.6%**
- settingChangeHeavenOrAbove: **12.5 / 12.5 / 14.2 / 14.2 / 16.7 / 16.7%**
- normalModeCeiling: **992G**
- preparationModeCeiling: **800G**
- heavenModesCeiling: **128G**
- powerCycleGameCounter: **RETAIN**
- powerCycleMode: **RETAIN**
- powerCycleState: **RETAIN**
- morningStageSettingChange: **学校**
- morningStagePowerCycle: **学校**
- fixedResetShortCeiling: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE_5TH_GEN**

### numericResetData

- setting1ResetMode: normal77.5 / preparation10.0 / heaven12.2 / superHeaven0.3
- setting2ResetMode: normal72.5 / preparation15.0 / heaven12.2 / superHeaven0.3
- setting3ResetMode: normal75.7 / preparation10.0 / heaven13.8 / superHeaven0.4
- setting4ResetMode: normal65.7 / preparation20.0 / heaven13.8 / superHeaven0.4
- setting5ResetMode: normal73.3 / preparation10.0 / heaven16.1 / superHeaven0.6
- setting6ResetMode: normal58.3 / preparation25.0 / heaven16.1 / superHeaven0.6
- settingChangeGameCounter: REROLL_CONFIRMED
- settingChangeMode: REROLL_CONFIRMED
- settingChangeState: REROLL_CONFIRMED
- powerCycleGameCounter: RETAIN_CONFIRMED
- powerCycleMode: RETAIN_CONFIRMED
- powerCycleState: RETAIN_CONFIRMED
- advantageousSection: NOT_APPLICABLE_5TH_GEN

resetQaReliability: ANALYSIS_PERIOD_DIRECT_FOR_RESET_POWER_CYCLE_AND_MODE_NUMBERS__MULTI_SOURCE_FOR_CORE

## missingFields

- 2013年版の50枚ベースを直接掲載する別系統の当時資料（現状34G/50枚は単一回顧資料）。
- 設定変更時の低確/高確具体振り分け。
- 本機固有のリールガックン/初期出目等による設定変更判別。

## conflicts

- 衝激RUSHの基本1セットG数は、パチ＆スロ必勝本/K-Naviが **40G+α**、P-WORLDが **50G+α**。平均せず `CONFLICT_40G_VS_50G` として保持し、当時解析2系統一致の40Gを主値に採用。
- PLATONIC BONUSはP-WORLDが**約75枚**、必勝本/K-Naviは**116枚超の払い出しで終了**と記載。これは実獲得目安と払い出し終了条件の定義差であり、数値を平均しない。

## sources

取得日: 2026-09-06

- ドラス / ValuePress 2013-03-04: https://www.value-press.com/pressrelease/108120
  - 実機導入同日2013-03-04のアプリ配信、メーカー/正式機種名。
- K-Navi 機種TOP: https://p-kn.com/slot/1803/
  - 2013-03-04導入、BONUS/AT初当たり、AT純増約2.9枚/G、40G+α。
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2162/1/38716
  - 2013-03-04導入、BONUS/AT初当たり。
- パチ＆スロ必勝本 AT概要: https://p.hisshobon.jp/machine/2162/1/38882
  - AT40G+α、純増+2.9枚/G、モード別最大規定G、CZ概要。
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/2162/1/38881
  - 992G天井、設定変更時のG/モード/状態再抽選、電源OFF→ON時の全引継ぎ、双方学校ステージ。
- パチ＆スロ必勝本 モード移行率: https://p.hisshobon.jp/machine/2162/1/39632
  - 設定変更時モード振り分け。
- パチ＆スロ必勝本 状態移行率: https://p.hisshobon.jp/machine/2162/1/39130
  - 低確/高確2状態、設定変更時に状態移行抽選。
- P-WORLD: https://www.p-world.co.jp/machine/database/6991
  - 5号機AT、機械割97.1～111.8%、PLATONIC BONUS約75枚、純増2.9枚/G。ATセットGは50G+α表記のためCONFLICT保持。
- pacnk: https://pacnk.com/slot/2013/zettaishougeki2/top.php
  - 機械割・BONUS/AT初当たり、4モード構造。
- CrankySeven: https://crankyseven.com/zettaisyougeki-two-pc.htm
  - 機械割97.1～111.8%。
- みんスロ: https://minslo.com/%E7%B5%B6%E5%AF%BE%E8%A1%9D%E6%BF%80ii/
  - 50枚あたり34G、992G天井、機械割・主要初当たりの回顧照合。
