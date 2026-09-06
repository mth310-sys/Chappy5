# トリプルクラウンZERO-ONE

machineName: トリプルクラウンZERO-ONE
manufacturer: 清龍ゲームジャパン
releaseDate: 2014-11-17
releaseDatePrecision: hall_start_multi_source
releaseDateConflict: PACHIMAGA_ARCHIVE_LABELS_2014_12
 generation: 5号機
systemType: ノーマル / 完全告知 / 沖スロ30Φ
modelName: トリプルクラウンZERO1-30
inspectionNumber: 4S0620
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- メーカー: **清龍ゲームジャパン**。
- 導入開始: **2014-11-17**。HAZUSE / K-Naviで一致。
- 旧パチマガスロマガの機種トップは **2014年12月** 表記のため、月単位資料差を `CONFLICT_RELEASE_MONTH_2014_11_17_VS_2014_12_LABEL` として保持する。具体日を持つ2資料を時系列キーに採用。
- 型式名: **トリプルクラウンZERO1-30**。
- 検定番号: **4S0620**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_HALL_START / DATABASE_FOR_MODEL_AND_INSPECTION / CONFLICT_FOR_SECONDARY_MONTH_LABEL

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.47% |
| 2 | 98.72% |
| 3 | 100.99% |
| 4 | 103.22% |
| 5 | 105.47% |
| 6 | 107.72% |

- HAZUSEと旧パチマガスロマガで精密値が一致。後年整理資料も同系列。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG

| 設定 | BIG |
|---:|---:|
| 1 | 1/327.68 |
| 2 | 1/312.08 |
| 3 | 1/297.89 |
| 4 | 1/284.94 |
| 5 | 1/273.07 |
| 6 | 1/262.14 |

### REG

| 設定 | REG |
|---:|---:|
| 1 | 1/546.13 |
| 2 | 1/504.12 |
| 3 | 1/468.11 |
| 4 | 1/436.91 |
| 5 | 1/409.60 |
| 6 | 1/385.51 |

### ボーナス合算

| 設定 | 合算 |
|---:|---:|
| 1 | 1/204.80 |
| 2 | 1/192.75 |
| 3 | 1/182.04 |
| 4 | 1/172.46 |
| 5 | 1/163.84 |
| 6 | 1/156.04 |

- HAZUSE / 旧パチマガスロマガ / K-Naviで一致（K-Naviは丸め表記）。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- `50枚 / 1000円 / 千円 / ベース / コイン持ち / 通常ゲーム数` と機種名・型式名を組み替え、HAZUSE、K-Navi、P-WORLD、旧パチマガスロマガ、後年沖スロ回顧/実戦資料まで再探索したが、本機固有の比較可能な安全値を固定できず推定しない。

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE`。
- AT/ART非搭載。ボーナスのみで出玉を増やすノーマルタイプ。

## basicPayout

- BIG: **純増約312枚**。345枚を超える払い出しで終了。
- REG / BONUS GAME: **純増約104枚**。105枚を超える払い出しで終了。
- P-WORLD / HAZUSEで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 完全告知ノーマルタイプ。通常時のゲーム数解除モード、CZ、AT/ARTは非搭載。
- **天井機能非搭載**。
- BIG後77G以内に再びBIG当選時はスペシャルBGMが発生する演出仕様があるが、ゲーム数解除・朝一恩恵ではない。
- REG中のビタ押し成功時に左右ランプがフラッシュする設定推測要素があるが、設定変更判別そのものではないためresetDetectionへ混同しない。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS_NO_CEILING_NORMAL_TYPE_POWER_AND_REEL_CONTRACTS_UNVERIFIED
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 天井・ゲーム数解除モード・AT/ART状態が存在しないため、それらに対する設定変更リセットは **NOT_APPLICABLE**。
- 設定変更時にボーナス抽選以外の専用朝一状態を持つという本機固有の直接資料は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時のリール初期動作など物理的挙動は下記resetDetectionのとおり未確認。

### carryOverBehavior

- 天井G数、規定Gモード、AT/ART/CZ状態の据え置き引継ぎは **NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_MODE_OR_AT_ART_CZ**。
- ボーナス成立状態など通常ノーマル機内部の実装詳細は物差し用途外とし、本機固有の公開契約がない項目を一般論で補完しない。

### powerCycleBehavior

- 設定変更を伴わない純電源OFF→ON時について、天井・規定Gモード・AT/ART/CZは非搭載なので対象外。
- 本機固有のリール位置、告知表示、ボーナス成立状態等の電断復帰契約は、検索語・資料系統を変えても直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- `NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER解除_MODE`。
- 通常時に天井へ向けて蓄積するゲーム数カウンタを持たない。

### ceilingAfterReset

- `NOT_APPLICABLE_NO_CEILING`。
- HAZUSEで **天井機能非搭載** を直接確認。
- 設定変更時だけの短縮天井も概念上非該当。

### modeAfterReset

- `NOT_APPLICABLE_NO_GAME_NUMBER_MODE`。
- 朝一専用モード、リセット専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- AT/ART/CZの内部状態は `NOT_APPLICABLE`。
- 設定変更専用の低確/高確等の内部状態は **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更専用の天井短縮、CZ/AT優遇、高確スタート等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- BIG後77G以内のBIGでスペシャルBGMが流れる仕様は通常のボーナス後演出であり、リセット恩恵として扱わない。

### resetPenalties

- 設定変更専用の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、リール初動、ランプ/表示による設定変更・据え置き判別について、`ガックン / リール / 朝一 / 設定変更 / リセット / 据え置き / 電源` を機種名・型式名と組み替え、当時攻略、旧DB、後年沖スロ回顧まで再探索したが、安全な直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- REG中の左右ランプは設定推測要素であり、変更判別ではない。

### numericResetData

- 設定変更時専用の公開モード振り分け、朝一当選率、短縮天井、CZ/AT優遇率等: **NONE_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `トリプルクラウンZERO-ONE / トリプルクラウン ZERO-ONE / トリプルクラウンZERO1-30 / ZERO1 / 清龍ゲームジャパン`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / 状態 / ガックン / リール / 50枚 / 1000円 / 千円 / ベース / コイン持ち`。
- 資料系統: HAZUSE、K-Navi、P-WORLD、旧パチマガスロマガ、後年沖スロ回顧/実戦資料、中古実機資料。
- 他のトリプルクラウンシリーズのガックン・朝一情報を本機へ自動転記しない。

## sources

取得日: 2026-09-07

1. HAZUSE — トリプルクラウンZERO-ONE
   - https://hazuse.com/machine/pachislot/4S0620/
   - 導入日、メーカー、型式、検定番号、BIG/REG/合算、機械割、ボーナス構成、純増目安、天井非搭載
   - reliability: ANALYSIS_DATABASE_HIGH
2. K-Navi — トリプルクラウン ZERO-ONE
   - https://p-kn.com/slot/2147/
   - 2014-11-17ホール導入開始、ノーマルタイプ、設定別ボーナス確率
   - reliability: ANALYSIS_DATABASE
3. K-Navi — ボーナス確率
   - https://p-kn.com/slot/2147/52058/
   - BIG/REG/合算の丸め値
   - reliability: ANALYSIS_DATABASE
4. 旧パチマガスロマガ — トリプルクラウンZERO-ONE
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/05/h.php
   - 設定別BIG/REG/合算、PAYOUT
   - reliability: ANALYSIS_HIGH_ARCHIVE
5. 旧パチマガスロマガ — 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/05/a.php
   - 2014年12月ラベル、ノーマル/5ライン、ゲーム性
   - reliability: ANALYSIS_HIGH_ARCHIVE
6. P-WORLD — トリプルクラウンZERO1-30
   - https://www.p-world.co.jp/machine/database/7548
   - 5号機ノーマル/完全告知/沖スロ、BIG約312枚・REG約104枚
   - reliability: INDUSTRY_DATABASE

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior physical/display contract: UNVERIFIED_AFTER_RESEARCH
- resetDetection reel-gakun/display contract: UNVERIFIED_AFTER_RESEARCH

## conflicts

- `CONFLICT_RELEASE_MONTH_2014_11_17_VS_2014_12_LABEL`
  - HAZUSE / K-Navi: 2014-11-17導入開始。
  - 旧パチマガスロマガ機種トップ: 2014年12月。
  - 定義差/地域差の可能性はあるが断定せず両方保持。時系列キーは具体日2資料一致の2014-11-17。

## confidenceSummary

- identity: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SECONDARY_MONTH_CONFLICT
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: UNVERIFIED
- resetBehavior: COMPLETE_WITH_SOURCE_LIMITS / N_A_FOR_CORE_GAME_NUMBER_CONTRACTS / UNVERIFIED_FOR_POWER_AND_REEL_PHYSICAL_CONTRACTS
