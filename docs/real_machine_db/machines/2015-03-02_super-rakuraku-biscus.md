# スーパーラクラクビスカス

machineName: スーパーラクラクビスカス
manufacturer: パイオニア
releaseDate: 2015-03-02
releaseDatePrecision: exact_hall_start_multi_source
releaseDateNote: パチ7が導入日2015-03-02を明記。パイオニア公式製品一覧は2015年3月発売。業界記事は2015-01-08内覧会を報告しており、発表日/内覧会日と導入日を分離する。
generation: 5号機
systemType: ノーマルA / 完全告知 / 25φ
modelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
settingConfiguration: 1 / 2 / 3 / 4 / 5 / 6
recordStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_RESET_BEHAVIOR_V0_7

## identity

- パイオニア公式2015年製品一覧で「スーパーラクラクビスカス」、2015年3月発売を確認。
- PiDEA/グリーンべると系業界記事で25φ・完全告知Aタイプ・ラクラクシステム第2弾を確認。
- パチ7で導入日2015-03-02を確認。
- P-WORLDでもメーカー=パイオニア、5号機ノーマルタイプ、完全告知を確認。
- confidence: OFFICIAL_PLUS_INDUSTRY_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 98.0% |
| 2 | 99.0% |
| 3 | 102.0% |
| 4 | 104.0% |
| 5 | 106.0% |
| 6 | 110.0% |

- P-WORLD、パチマガスロマガ、pacnk、当時解析資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG

| 設定 | BIG |
|---:|---:|
| 1 | 1/287 |
| 2 | 1/281 |
| 3 | 1/273 |
| 4 | 1/264 |
| 5 | 1/257 |
| 6 | 1/247 |

### REG

| 設定 | REG |
|---:|---:|
| 1 | 1/458 |
| 2 | 1/417 |
| 3 | 1/368 |
| 4 | 1/332 |
| 5 | 1/300 |
| 6 | 1/276 |

### 合算

| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/176 |
| 2 | 1/168 |
| 3 | 1/156 |
| 4 | 1/147 |
| 5 | 1/138 |
| 6 | 1/130 |

- P-WORLD、パチマガスロマガ、pacnk、すろぱちくえすとで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- `50枚 / 1000円 / ベース / コイン持ち / 通常時`、機種名表記揺れ、メーカー名を組み替えて再探索したが、比較可能な明示G数を固定できなかった。
- 初期投資推計値はボーナス合算からの計算値であり、50枚ベースとして転用しない。

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE`。
- AT/ART非搭載のノーマルタイプ。

## basicPayout

- BIG BONUS: **312枚**。
- REGULAR BONUS: **104枚**。
- P-WORLDおよび当時解析資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 完全告知ノーマルAタイプ。
- 天井・ゾーン: **なし**。
- 先告知/後告知は演出告知モードであり、内部当選モード・規定ゲーム数モードではないためresetBehavior上の「モード」には含めない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_NOT_APPLICABLE_CORE_WITH_DEVICE_LEVEL_DETAILS_UNVERIFIED
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機はノーマルAタイプでAT/ART、CZ、規定ゲーム数解除、ゲーム数天井を持たない。
- 設定変更専用の内部モード再抽選、短縮天井、朝一CZ/高確等は `NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時のリール位置・告知モード初期値等の筐体レベル挙動は本機固有資料で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 天井・規定Gカウンタ・AT/ARTモードが存在しないため、それらの据え置き引継ぎは `NOT_APPLICABLE`。
- ボーナス非成立通常時の設定変更/据え置きで保持される筐体表示・選択告知モード等の細部は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 設定変更なし電源OFF→ON時の本機固有のリール位置、先告知/後告知モード選択状態等は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井/AT状態等の引継ぎ契約は非搭載のため `NOT_APPLICABLE`。

### gameCounterReset

- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。

### ceilingAfterReset

- `NOT_APPLICABLE_NO_CEILING`。
- 当時解析資料が天井・ゾーンなしを明記。

### modeAfterReset

- `NOT_APPLICABLE_NO_INTERNAL_GAME_COUNT_MODE_CONFIRMED`。
- 先告知/後告知はプレイヤー選択の演出告知方式であり、朝一内部モードではない。

### stateAfterReset

- `NOT_APPLICABLE_NO_AT_ART_CZ_HIGH_LOW_STATE_CONFIRMED`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時専用の朝一恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更時専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、出目、ランプ、告知モード初期化等による設定変更判別について、表記揺れ・メーカー名・`設定変更 / リセット / 朝一 / ガックン / 電源OFF ON`で再探索したが直接契約を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 他のパイオニア機・ハナハナ系のガックン契約を本機へ転記しない。

### numericResetData

- 公開された設定変更専用モード振り分け、短縮天井G、朝一当選率、リセット恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `スーパーラクラクビスカス / すーぱーらくらくビスカス / ラクラクビスカス 第2弾 / パイオニア`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / ゾーン / 50枚 / 1000円 / ベース / コイン持ち / 型式 / 検定番号`。
- 資料系統: パイオニア公式、業界記事、P-WORLD、パチマガスロマガ、パチ7、pacnk、当時解析ブログ、中古実機資料。

## conflicts

- 現時点で主要性能値の数値CONFLICTなし。
- `baseGamesPer50`、型式名、検定番号、筐体レベルの電断/設定変更挙動は十分な再探索後も固定できずUNVERIFIED。

## sources

取得日: 2026-09-07

1. パイオニア公式 2015年製品一覧 — https://www.slot-pioneer.co.jp/products/2015.html
2. パイオニア公式 発売のお知らせ — https://www.slot-pioneer.co.jp/information/super_rakuraku.html
3. PiDEA「パイオニア『ビスカス』は目押し楽々」 — https://www.pidea.jp/articles/%E3%83%91%E3%82%A4%E3%82%AA%E3%83%8B%E3%82%A2%E3%80%8C%E3%83%93%E3%82%B9%E3%82%AB%E3%82%B9%E3%80%8D%E3%81%AF%E7%9B%AE%E6%8A%BC%E3%81%97%E6%A5%BD%E3%80%85
4. P-WORLD — https://www.p-world.co.jp/machine/database/7625
5. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/112/h.php
6. パチ7 — https://pachiseven.jp/machines/4398/cutout/92
7. pacnk — https://pacnk.com/slot/2015/superrakurakubisu/top.php
8. すろぱちくえすと — https://www.slopachi-quest.com/article/super-rakuraku/

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- modelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- device-level settingChange/powerCycle/resetDetection details: UNVERIFIED_AFTER_RESEARCH
