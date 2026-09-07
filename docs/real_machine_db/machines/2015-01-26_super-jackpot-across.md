# スーパージャックポット

machineName: スーパージャックポット
manufacturer: アクロス
releaseDate: 2015-01-26
releaseDatePrecision: multi_source_hall_start
releaseDateNote: K-Navi、パチ7、当時解析で2015-01-26ホール導入開始を確認。ユニバーサル公式は発売2015年1月、2014-12-04に発表会実施。発表日とホール導入日を分離。
generation: 5号機
systemType: ノーマル / 完全告知
modelName: スーパージャックポットXJ
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- アクロス製、岡崎産業とのコラボ第1弾。
- ユニバーサル公式でメーカー「アクロス」、分類「5号機」、タイプ「ノーマル」、発売「2015年1月」を確認。
- K-Navi、パチ7、パチスロ解析ガイドでホール導入開始2015-01-26を確認。
- 2014-09の検定通過報道で型式表記 `スーパージャックポットXJ` を確認。
- 検定番号は検索語・資料系統を変えた再探索後も安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH_FOR_RELEASE

## payoutRateBySetting

### 市場掲載値 / 主値

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.4% |
| 3 | 100.6% |
| 4 | 102.4% |
| 5 | 105.4% |
| 6 | 109.1% |

- P-WORLD、ぱちんこドキュメント、パチスロ解析ガイド、5号機クロニクルで一致。
- パチマガスロマガには別定義のシミュレート値 **97.99 / 99.45 / 100.63 / 102.31 / 105.26 / 108.69%** が掲載されるため、平均せず `DEFINITION_DIFFERENCE_MARKET_RATE_VS_SIMULATED_RATE` として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT_DEFINITION_FOR_SIMULATED_VALUES

## initialHitBySetting

### BIG

| 設定 | BIG |
|---:|---:|
| 1 | 1/277.7 |
| 2 | 1/268.6 |
| 3 | 1/262.1 |
| 4 | 1/256.0 |
| 5 | 1/249.2 |
| 6 | 1/240.9 |

### REG

| 設定 | REG |
|---:|---:|
| 1 | 1/546.1 |
| 2 | 1/524.3 |
| 3 | 1/508.0 |
| 4 | 1/461.5 |
| 5 | 1/414.8 |
| 6 | 1/364.1 |

### ボーナス合算

| 設定 | 合算 |
|---:|---:|
| 1 | 1/184.1 |
| 2 | 1/177.6 |
| 3 | 1/172.9 |
| 4 | 1/164.7 |
| 5 | 1/155.7 |
| 6 | 1/145.0 |

- BIGはパチマガスロマガ、ぱちんこドキュメント、パチスロ解析ガイドで一致。
- REG設定3はパチマガスロマガ/パチスロ解析ガイドが **1/508.0**、ぱちんこドキュメントのみ **1/508.8**。平均せず `CONFLICT_REG_SETTING3_508_0_VS_508_8` とし、複数一致の1/508.0を主値とする。
- 合算はP-WORLD、パチマガスロマガ、パチスロ解析ガイドで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_ONE_CONFLICT

## baseGamesPer50

- **35.0～36.9G / 50枚**（設定差あり）。
- パチマガスロマガの通常時小役解析ページに明記。
- confidence: ANALYSIS_SINGLE_STRONG_DB

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE`。
- AT/ART非搭載のノーマルタイプ。ボーナスのみで出玉を増やす。

## basicPayout

- BIG BONUS: **約312枚**。
- REG BONUS: **約130枚**。
- K-NaviはBIG「345枚を超える払い出しで終了」、REG「135枚を超える払い出しで終了」と規定払い出し条件を掲載。
- P-WORLD、ぱちんこドキュメント、パチスロ解析ガイドは実獲得目安としてBIG312枚/REG130枚で一致。
- 5号機クロニクルにはBIG最大311枚/REG最大104枚の異なる記載があるため、平均せず `CONFLICT_BASIC_PAYOUT_312_130_VS_311_104` として保持。2015年当時の複数資料一致を主値とする。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT

## modeSpecificMinimumData

- 完全告知ノーマルタイプ。
- AT・ART等の付加機能は非搭載。
- 天井救済機能は **非搭載**。
- 設定別BIG/REG/合算確率を主な比較値とする。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_NOT_APPLICABLE_FOR_GAMEPLAY_STATE_WITH_DETECTION_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機はAT/ART、天井、規定G数モード、CZ等を持たない純ノーマル機で、設定変更によって朝一専用ゲーム数管理やモードを再抽選する構造は確認されない。
- 設定変更後は選択された設定の通常ボーナス/小役確率で遊技する機種として扱う。
- リール位置・ランプ等の外見上の電断/設定変更挙動について本機固有の直接資料は `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_VISIBLE_STARTUP_STATE

### carryOverBehavior

- 天井G・規定Gモード・AT/ART状態等: `NOT_APPLICABLE_NORMAL_TYPE_NO_CEILING_NO_MODE`。
- 前日ゲーム数を朝一恩恵へ持ち越す仕組みは確認されない。
- 外見上の開始状態/リール位置については `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 天井G・規定Gモード・AT/ART状態等: `NOT_APPLICABLE_NORMAL_TYPE_NO_CEILING_NO_MODE`。
- 設定変更なしの純電源OFF→ON時のリール位置・告知表示等の本機固有挙動は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- `NOT_APPLICABLE_NO_CEILING_GAME_COUNTER_DEPENDENCY`。
- 天井救済機能非搭載。

### ceilingAfterReset

- `NOT_APPLICABLE_NO_CEILING`。
- 通常時にも設定変更後にも天井救済機能は非搭載。

### modeAfterReset

- `NOT_APPLICABLE_NO_INTERNAL_GAME_COUNT_MODE_FOR_HALL_RESET_SIMULATION`。
- 朝一専用モード/リセットモードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- `NOT_APPLICABLE_NO_AT_ART_CZ_INTERNAL_STATE_FOR_REQUIRED_V0_7_SCOPE`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 天井短縮、朝一モード、CZ優遇、AT/ART優遇等のリセット恩恵: `NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更専用の冷遇・不利モード・朝一不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、7セグ表示、出目等を用いた設定変更/据え置き判別契約は、`設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / ガックン / 出目 / 7セグ` 等で再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時の7セグ告知はボーナス告知機能であり、設定変更判別表示として扱わない。

### numericResetData

- 設定変更時モード振り分け、短縮天井G数、朝一当選率等: `NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `スーパージャックポット / SUPER JACKPOT / スーパージャックポットXJ / アクロス スーパージャックポット`。
- 検索語: `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / ガックン / 出目 / 7セグ / 50枚 / 千円 / コイン持ち / 型式 / 検定`。
- 資料系統: ユニバーサル公式、K-Navi、P-WORLD、当時解析、旧パチマガスロマガ、5号機クロニクル、当時業界発表/検定通過報道。
- 2008年ヤーマ版「スーパージャックポットN」は600G天井RTを持つ別機種のため、2015年アクロス版へ一切流用していない。

## sources

取得日: 2026-09-07

1. ユニバーサル公式: https://www.universal-777.com/product/slot/super_jackpot/
2. K-Navi: https://p-kn.com/slot/2182/
3. P-WORLD: https://www.p-world.co.jp/machine/database/7610
4. パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/05/h-3.php
5. パチマガスロマガ 小役/50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/05/c.php
6. ぱちんこドキュメント: https://pachinkolist.com/archives/42855966.html
7. パチスロ解析ガイド: https://pachislot-guide.net/2015/super-jackpot/
8. パチ7: https://pachiseven.jp/machines/4383/cutout/7
9. 5号機クロニクル ユニバーサル系: https://5goki.com/universal
10. 娯楽産業 発表記事: https://www.goraku-sangyo.com/across%EF%BC%8F%E3%83%A6%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%86%E3%82%A4%E3%83%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE/
11. 型式名検定通過報道: https://pachinkopachisro.com/archives/40236397.html

## missingFields

- 検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時/設定変更時の外見上の開始状態（リール位置等）: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有の設定変更判別契約: `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット専用公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

- 機械割: 市場掲載 **97.9 / 99.4 / 100.6 / 102.4 / 105.4 / 109.1%** に対し、パチマガスロマガのシミュレート値 **97.99 / 99.45 / 100.63 / 102.31 / 105.26 / 108.69%**。定義差を疑い、平均せず双方保持。
- REG設定3: **1/508.0**（パチマガスロマガ/パチスロ解析ガイド） vs **1/508.8**（ぱちんこドキュメント）。主値1/508.0、`CONFLICT_REG_SETTING3_508_0_VS_508_8`。
- 基本獲得: 2015年当時複数資料 **BIG約312枚 / REG約130枚** vs 5号機クロニクル **BIG最大311枚 / REG最大104枚**。平均せず `CONFLICT_BASIC_PAYOUT_312_130_VS_311_104`。
- 2008年ヤーマ版同名機の天井RT・スペックは別機種情報として排除。
