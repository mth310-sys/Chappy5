machineName: ぱちスロ テラフォーマーズ
manufacturer: 京楽産業.
releaseDate: 2016-06-20
recordNumber: 986
generation: 5号機
systemType: A+ART / ボーナス+ART
formalModelName: ぱちスロ テラフォーマーズ
certificationNumber: 6S0317
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 京楽公式が2016-06-20に全国導入開始を告知。
- HAZUSE URL/型式識別で `6S0317` を確認。
reliability: OFFICIAL_INDUSTRY_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.0% |
| 3 | 100.3% |
| 4 | 104.1% |
| 5 | 107.8% |
| 6 | 112.0% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ボーナス合算 | ART初当たり |
|---:|---:|---:|
| 1 | 1/149.6 | 1/443.2 |
| 2 | 1/144.7 | 1/425.1 |
| 3 | 1/138.3 | 1/407.2 |
| 4 | 1/132.4 | 1/363.9 |
| 5 | 1/124.8 | 1/328.4 |
| 6 | 1/119.4 | 1/294.4 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約37G/50枚**。
reliability: ANALYSIS_HIGH

## netIncrease
- ART「MARS RUSH」: **約1.6枚/G**。
- ボーナス込み総合目安: 約1.9枚/Gとする後年整理あり。DB canonicalはART単体純増1.6枚/Gを採用。
reliability: ANALYSIS_HIGH

## basicPayout
- ART「MARS RUSH」: **1セット40G**、継続率約76〜97%、平均継続率約80%。
- ボーナスはART突入抽選の主要契機。
reliability: OFFICIAL_ANALYSIS_HIGH

## modeSpecificMinimumData
- ゲーム数天井: **ボーナス/ART間777G消化後、次回ボーナスでART確定**。
- ARTスルー天井: **ボーナスからART非当選10連続後、次回ボーナスでART確定**。
- チャンスリプレイ天井: 規定回数到達後のボーナスでART確定。別契機ARTではリセットされない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- ゲーム数天井: **RESET**。
- 内部状態: **再抽選**。
- チャンスリプレイ天井: 設定変更時専用の残り規定回数振り分けで再セット。
- ARTスルー進捗の設定変更時処理は今回固定できる直接資料が不足しているため、一般論で補わず UNVERIFIED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時のゲーム数天井/内部状態は、純電断時の直接比較資料から **CARRYOVER** と判断可能。
- ARTスルー回数、チャンスリプレイ天井進捗の据え置き時詳細は、今回の直接資料で個別明示が弱いため UNVERIFIED_AFTER_RESEARCH。

### powerCycleBehavior
- **電源OFF→ONのみ**: 天井 **引き継ぎ**、内部状態 **引き継ぎ**、ステージ **引き継ぎ**。
- 設定変更と純電断を同義扱いしない。
reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: ボーナス/ART間777G天井進捗を **RESET**。
- 電源OFF→ON: **CARRYOVER**。

### ceilingAfterReset
- 固定短縮天井は NONE_CONFIRMED。
- ただしチャンスリプレイ天井は設定変更時に残り回数を専用テーブルで再セットするため、朝一の実質的な当選契機差がある。

### modeAfterReset
- ゲーム数モード型ではない。
- 設定変更時のチャンスリプレイ天井残り回数は専用再抽選。

### stateAfterReset
- 設定変更時: 通常/高確/超高確を再抽選。
- 電源OFF→ON: 内部状態を引き継ぎ。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時は内部状態再抽選で**高確以上が約30.19%**選択される。
- チャンスリプレイ天井の残り回数が再抽選され、0/5/10回が各10.2%で選択されるため、朝一早期のART契機が一定割合で存在。
- 固定ゲーム数天井短縮は NONE_CONFIRMED。

### resetPenalties
- 前日ゲーム数天井進捗は設定変更で失われる。
- その他主要不利は NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 本機固有のガックン/表示による確定的設定変更判別は十分再探索後も UNVERIFIED_AFTER_RESEARCH。
- 777G天井宵越し成立有無は据え置き推測材料になりうるが、確定判別器ではない。

### numericResetData
設定変更時・内部状態振り分け:
- 通常: **69.80%**
- 高確: **29.80%**
- 超高確: **0.39%**

設定変更時・チャンスリプレイ天井 残り回数振り分け:
- 0回: **10.2%**
- 5回: **10.2%**
- 10回: **10.2%**
- 25回: **19.9%**
- 50回: **19.9%**
- 75回: **29.7%**

## dataQualityNotes
- 公式全国導入日2016-06-20をcanonical。
- 性能コアは京楽公式、HAZUSE、複数解析で一致。
- リセットは設定変更/電源OFF→ONの天井・状態比較を直接資料で固定。ARTスルー進捗の設定変更/据え置き詳細だけは推測せずUNVERIFIED。

## sources
取得日: 2026-09-08

1. 京楽公式 — 〈ぱちスロ テラフォーマーズ〉全国導入スタート
   - https://www.kyoraku.co.jp/news/20160620.php
   - 2016-06-20全国導入、平均ART継続率約80%、BONUS約1/119.4〜1/149.6。
   - reliability: OFFICIAL
2. パチビー — ぱちスロ テラフォーマーズ
   - https://www.pachibee.jp/machines/movie/216050005
   - 導入日2016-06-20、5号機ART。
   - reliability: PERIOD_DATABASE
3. HAZUSE — ぱちスロ テラフォーマーズ
   - https://hazuse.com/machine/pachislot/6S0317/
   - 型式識別6S0317、設定別ボーナス/ART/機械割、777G天井、10スルー天井、チャンスリプレイ天井、設定変更時CR天井振り分け。
   - reliability: ANALYSIS_HIGH
4. HAZUSE — ART関連
   - https://hazuse.com/machine/pachislot/6S0317/genre/209/
   - ART40G、純増1.6枚/G、継続率76〜97%、設定変更時CR天井振り分け。
   - reliability: ANALYSIS_HIGH
5. スロ確.com — ぱちスロ テラフォーマーズ 基本情報・天井・機械割解析
   - https://slotkaku.com/terraformars
   - 設定変更: 天井リセット/内部状態再抽選、電源OFF ON: 天井・内部状態引継ぎ、設定変更時内部状態69.80/29.80/0.39%。
   - reliability: ANALYSIS_HIGH
6. pachinavi — ぱちスロ テラフォーマーズ
   - https://pachinavi.net/machines/terraformars/
   - 37G/50枚、ART1.6枚/G、設定別ボーナス/ART/機械割。
   - reliability: SECONDARY_ANALYSIS
7. pacnk — ぱちスロ テラフォーマーズ 設定判別
   - https://pacnk.com/slot/tools/sh_terafuomazu.html
   - 設定別ART初当り/ボーナス初当り/PAYOUT精密系列。
   - reliability: SECONDARY_DATABASE

## missingFields
- ARTスルー回数進捗の設定変更/据え置き/純電断時個別処理
- 本機固有の確定的設定変更判別

## conflicts
- 現時点で主要性能コアの明確なCONFLICTなし。
