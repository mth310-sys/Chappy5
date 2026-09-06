# SLOT魔法少女まどか☆マギカ

machineName: SLOT魔法少女まどか☆マギカ
aliases: 初代まどマギ / まどか☆マギカ / 魔法少女まどか☆マギカ
manufacturer: メーシー
modelName: 魔法少女まどか☆マギカA
approvalNumber: 3S0820
releaseDate: 2013-12-16
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: 疑似ボーナス + ART / ゲーム数管理 / CZ / 天井 / ゲーム数上乗せ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- K-NaviとHAZUSEで **2013-12-16ホール導入開始**を確認。
- HAZUSEで型式名 **魔法少女まどか☆マギカA**、検定番号 **3S0820**を確認。
- メーシー製5号機。疑似ボーナスとART「マギカラッシュ」で出玉を増やす。
- confidence: INDUSTRY_DATABASE_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.9% |
| 2 | 99.0% |
| 3 | 101.9% |
| 4 | 106.3% |
| 5 | 111.2% |
| 6 | 116.2% |

- HAZUSEとパチ＆スロ必勝本で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 疑似ボーナス合算

| 設定 | 確率 |
|---|---:|
| 1 | 1/217.9 |
| 2 | 1/208.3 |
| 3 | 1/200.7 |
| 4 | 1/193.6 |
| 5 | 1/185.5 |
| 6 | 1/178.5 |

### ART初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/545.4 |
| 2 | 1/525.6 |
| 3 | 1/484.0 |
| 4 | 1/418.5 |
| 5 | 1/369.3 |
| 6 | 1/301.5 |

### ボーナス + ART合算

| 設定 | 確率 |
|---|---:|
| 1 | 1/155.7 |
| 2 | 1/149.2 |
| 3 | 1/141.9 |
| 4 | 1/132.4 |
| 5 | 1/123.5 |
| 6 | 1/112.1 |

- パチ＆スロ必勝本の編集部調べ精密値を採用。K-Naviの合算値および複数回顧資料の丸め値と整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約29.8G/50枚**。
- 後年の5号機低ベース比較資料で初代まどマギの実ベースとして約29.8G/50枚を確認。
- confidence: RETROSPECTIVE_ANALYSIS_SINGLE

## netIncrease

- 疑似ボーナス / ARTともに **純増約2.2枚/G**。
- K-Navi、当時まとめ資料、実機流通資料で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **50G+α**。
- プチボーナス: **30G**。
- エピソードボーナス: **60G**。
- 裏ボーナス: **30G**。
- ART「マギカラッシュ」: **1セット50G+上乗せ分 / 純増約2.2枚/G**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナス規定ゲーム数は内部モードで管理。
- 天井: 通常A / 通常B / 特殊 = **999G**、通常C = **699G**、天国A / 天国B = **99G**。
- ボーナス終了画面等で次回モード示唆が存在するが、実機完全再現用の詳細内部抽選までは収集対象外。

## ceiling

- 最大天井: **ボーナス間999Gで疑似ボーナス当選**。
- モード別では通常C 699G、天国A/B 99G。
- 一撃の天井/設定変更資料と当時・回顧資料で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__DIRECT_RESET_AND_POWER_CYCLE_CONTRACT_WITH_PUBLIC_NUMBERS
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時: **天井ゲーム数リセット / モード再抽選 / 状態再抽選 / 液晶ステージは学校**。
- 一撃の本機専用「天井/設定変更」で直接契約を確認。
- confidence: ANALYSIS_HIGH_DIRECT

### carryOverBehavior

- 「設定据え置き」単独表記でゲーム数・モード・状態を列挙した独立資料は今回直接固定できず、**UNVERIFIED_AFTER_RESEARCH**。
- ただし設定変更を伴わない電源OFF→ONについては下記の直接契約あり。

### powerCycleBehavior

- 電源OFF→ON: **天井ゲーム数引き継ぎ / モード引き継ぎ / 状態引き継ぎ / 液晶ステージは学校**。
- confidence: ANALYSIS_HIGH_DIRECT

### gameCounterReset

- 設定変更: **CLEAR**。
- 電源OFF→ON: **RETAIN**。
- 純据え置き単独契約: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の固定短縮天井は確認されず、再抽選されたモードに対応して **99 / 699 / 999G**。
- 最大は通常A/B/特殊の999G。

### modeAfterReset

設定変更時モード振り分け（%）:

| モード | 設定1・3・5 | 設定2・4・6 |
|---|---:|---:|
| 通常A | 42.97 | 31.25 |
| 通常B | 31.25 | 42.97 |
| 通常C | 12.50 | 12.50 |
| 特殊 | 0.39 | 0.39 |
| 天国A | 12.50 | 12.50 |
| 天国B | 0.39 | 0.39 |

- 偶数設定は通常B、奇数設定は通常Aが相対的に選ばれやすい。
- 天国A/B合計は **12.89%**。
- confidence: ANALYSIS_HIGH_DIRECT_PUBLIC_NUMERIC

### stateAfterReset

設定変更時の内部状態振り分け（%）:

| 設定 | 低確へ | 高確へ |
|---|---:|---:|
| 1・3・5 | 80.0 | 20.0 |
| 2・4 | 75.0 | 25.0 |
| 6 | 66.7 | 33.3 |

- 高設定ほど高確スタート割合が高い。
- confidence: ANALYSIS_HIGH_DIRECT_PUBLIC_NUMERIC

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時はモード再抽選により天国A/B合計12.89%、通常C12.5%を含む。
- 設定6では高確スタート33.3%、設定2/4では25%、設定1/3/5では20%。
- 「短縮天井が必ず付く」とは扱わない。通常A/B/特殊なら最大999Gのまま。

### resetPenalties

- 設定変更時のみの明示的不利契約: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日モード・状態・天井進捗はCLEARされるため、前日有利状態を保持する恩恵は失われるが、これを独立したペナルティ仕様とは定義しない。

### resetDetection

- 朝一液晶ステージは設定変更時も電源OFF→ON時も **学校**で一致するため、学校ステージ単独では変更判別不可。
- 公開モード振り分け・高確率は統計的推測材料にはなるが、単発挙動での確定判別には使用しない。
- ガックン等の本機固有確定契約は今回 **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時モード振り分け: 上記6モードの公開数値を保存。
- 設定変更時状態振り分け: 低確/高確の公開数値を保存。
- 天国A/B合計: **12.89%**。
- 高確開始率: **20.0 / 25.0 / 33.3%系統**（設定グループ別）。

## missingFields

- 純据え置き単独表記でのゲーム数・モード・状態保持契約: UNVERIFIED_AFTER_RESEARCH。
- 本機固有のガックン等による確定的な変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- 2016年「SLOT魔法少女まどか☆マギカ2」、2017年Aタイプ、2019年叛逆、2021年前後編、2023年フォルテ、2025年マギアレコードのリセット仕様・短縮天井を混入しない。
- 初代は設定変更後600G短縮ではない。それは「まどマギ2」の仕様。
- ベース29.8G/50枚は後年比較資料の値で、直接メーカー値ではないため信頼度を限定。

## sources

取得日: 2026-09-06

- K-Navi 機種トップ: https://p-kn.com/slot/1980/
- K-Navi ボーナス概要: https://p-kn.com/slot/1980/46924/
- HAZUSE 機種トップ/型式/検定/機械割: https://hazuse.com/machine/pachislot/3S0820/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/3S0820/genre/201/
- 一撃 天井/設定変更: https://1geki.jp/slot/madomagi/3/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2316/1/44298
- パチ＆スロ必勝本 ボーナス解説: https://p.hisshobon.jp/machine/2316/1/43315
- P-Summa 初代まどマギ回顧: https://psumma.jp/pachislo/871/
- P-Summa 5号機ベース比較（約29.8G/50枚）: https://psumma.jp/pachislo/51204/
- 初代まどマギまとめwiki（補助照合）: https://w.atwiki.jp/madoka_slot/
