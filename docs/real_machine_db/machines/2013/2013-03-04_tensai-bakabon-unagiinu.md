# パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！

machineName: パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！
manufacturer: D-light
releaseDate: 2013-03-04
releaseDatePrecision: exact_day
releaseDateNotes: パチビーは2013-03-04導入と明記。5号機クロニクルは2013/2とするため導入月表記差をCONFLICTとして保持し、時系列キーは具体日を持つ当時系資料の2013-03-04を採用。
generation: 5号機
systemType: ボーナス+ART / 自力CZ / ゲーム数上乗せ+セットストック
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_MISSING_BASE

## identity

- 正式表記: **パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！**。
- メーカー: **D-light**。
- パチビーが導入日 **2013-03-04** を直接掲載。
- 5号機クロニクルの「導入時期2013/2」は月単位の後年整理値であり、具体日の2013-03-04と競合するため平均・補正しない。
- 型式名/検定番号は、機種名・略称・メーカー名を組み替えて再探索したが今回確定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_IDENTITY_AND_EXACT_DATE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.4% |
| 2 | 98.1% |
| 3 | 100.0% |
| 4 | 103.0% |
| 5 | 108.4% |
| 6 | 112.0% |

- P-WORLD、5号機クロニクル、A-SLOT系整理値で一致。
- パチマガスロマガ旧ページの検索表示に設定1/2が196.4/198.1%と出る箇所があるが、同系列の設定3以降および独立資料群と連続せず、複数資料が96.4/98.1%で一致するため `SOURCE_TEXT_LEADING_DIGIT_CORRUPTION` として性能CONFLICTとは分離。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG / REG / ART初当たり

| 設定 | BIG | REG | ART初当たり |
|---|---:|---:|---:|
| 1 | 1/399.6 | 1/712.4 | 1/485.3 |
| 2 | 1/385.5 | 1/712.4 | 1/454.2 |
| 3 | 1/372.4 | 1/712.4 | 1/440.7 |
| 4 | 1/356.2 | 1/655.4 | 1/400.5 |
| 5 | 1/341.4 | 1/655.4 | 1/349.6 |
| 6 | 1/327.7 | 1/655.4 | 1/319.0 |

### ボーナス合算

| 設定 | BIG+REG |
|---|---:|
| 1 | 1/256.0 |
| 2 | 1/250.1 |
| 3 | 1/244.5 |
| 4 | 1/230.8 |
| 5 | 1/224.4 |
| 6 | 1/218.5 |

- 当時攻略資料の精密値を主表とし、P-WORLD/パチマガスロマガ旧ページの丸め値（BIG 1/399→1/327、REG 1/712→1/655、ART 1/485→1/319）で系列を照合。
- P-WORLDのボーナス+ART総合値は設定1から **1/174 / 168 / 163 / 153 / 143 / 137**（丸め）で、上記とは定義が異なるため別値として保持。
- confidence: ANALYSIS_HIGH_WITH_PERIOD_PRECISION

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- 「天才バカボン / 人類ウナギイヌ化計画 / D-light」と「50枚 / 1000円 / 1K / ベース / コイン持ち / 回転」を組み替え、当時解析、古いDB、後年整理資料を横断したが、2013年機を明示する比較可能な直接値を確定できなかった。

## netIncrease

- ART「ハチャメチャRUSH」: **約+1.5枚/G**。
- パチビー、P-WORLD、パチマガスロマガ旧ページで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約204枚**。
- REG（ひげボーナス）: **約48枚**。
- ART「ハチャメチャRUSH」: **1セット41G+α**、ゲーム数上乗せ+セットストック型。
- P-WORLD、パチマガスロマガ旧ページで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

### CZ / ART

- CZ「いまがチャンス!」からART当選を狙う構造。
- ART「ハチャメチャRUSH」は1セット41G+α、純増約1.5枚/G。
- CZ/ART終了後には「天才モード」移行抽選が存在する当時解析を確認。ただし通常時全モード移行テーブルは物差しDBの対象外。

### 天井

- **ボーナスまたはART終了後888G**で天井ART当選。
- 天井ARTは**2セット以上**。
- 当時攻略資料は「天井ゲーム数のカウントはART終了後から開始」とも記載するため、個別局面のカウント起点はその資料注記を保持する。
- confidence: ANALYSIS_PERIOD_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CEILING_COUNTER_CLEAR_CONFIRMED__POWER_AND_STATE_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更で天井ゲーム数をリセット**することを当時攻略資料2系統で確認。
- 設定変更時の内部モード、低確/高確等の状態、液晶開始ステージ、ARTストック等の包括的な再抽選契約は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_PERIOD_MULTI_SOURCE_FOR_CEILING_RESET

### carryOverBehavior

- 純据え置き時の天井G、内部状態、天才モード等の保持契約は `UNVERIFIED_AFTER_RESEARCH`。
- 当時資料の「宵越し不可」は本文で**設定変更すると天井Gがリセットされるため**と説明されており、これを根拠に電源OFFのみの挙動まで推定しない。

### powerCycleBehavior

- 設定変更を伴わない**電源OFF→ONのみ**の天井G、内部モード/状態、液晶ステージの保持・再抽選は `UNVERIFIED_AFTER_RESEARCH`。
- 機種名表記揺れ、D-light、大一、シリーズ名と「電源OFF ON / 電断 / 据え置き / 朝一 / リセット / 天井引継ぎ」を組み替えて再探索後も直接仕様を確定できず。

### gameCounterReset

- 設定変更時: **CLEAR_CONFIRMED**。
- 据え置き時: `UNVERIFIED_AFTER_RESEARCH`。
- 電源OFF→ONのみ: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常の天井値: **888G**。
- 設定変更でそれまでの天井進捗をクリアし、朝一は新たにカウント開始する仕様として保存。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- CZ/ART終了後に天才モード移行抽選があることは確認済み。
- ただし**設定変更時専用のモード再抽選/引継ぎ、振り分け率**は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 通常時にCZ期待度へ関係する内部状態/液晶ステージ示唆があることは確認できるが、**設定変更時の状態再抽選/引継ぎと具体振り分け**は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、朝一専用モード、優遇率などの公開値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井進捗クリアは恩恵ではなく通常リセット挙動として分離。

### resetPenalties

- 前日から天井へ向けて進んでいたゲーム数は、**設定変更で失われる**。
- そのため宵越し天井狙いに対して不利となる。

### resetDetection

- 本機固有のリールガックン、初期出目、朝一液晶表示、特定ステージによる設定変更/据え置き判別は、検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
- 「888Gを超えた/超えない」等を単独で変更判別へ使う契約は、ペナルティやカウント起点の注記があるため本DBでは確定要素にしない。

### publicMorningNumbers

- settingChangeGameCounter: **CLEAR_CONFIRMED**
- normalCeiling: **888G**
- ceilingARTMinimum: **2セット以上**
- fixedResetShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleGameCounter: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE_5TH_GEN**

### numericResetData

- settingChangeCeilingProgress: CLEAR_CONFIRMED
- postResetNormalCeiling: 888G
- resetSpecificShortCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- resetModeNumericRate: UNVERIFIED_AFTER_RESEARCH
- resetStateNumericRate: UNVERIFIED_AFTER_RESEARCH
- powerCycleGameCounter: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: ANALYSIS_PERIOD_MULTI_SOURCE_FOR_SETTING_CHANGE_CEILING_RESET__UNVERIFIED_AFTER_RESEARCH_FOR_POWER_CYCLE_AND_INTERNAL_RESET_STATE

## missingFields

- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`
- formalModelName / inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- pureCarryOverCeilingAndState: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetDetectionSpecifics: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- `CONFLICT_RELEASE_PERIOD_2013_02_VS_2013_03_04`: 5号機クロニクルは導入時期2013/2、パチビーは導入日2013-03-04。平均せず双方保持し、時系列キーは具体日資料を優先。
- `SOURCE_TEXT_LEADING_DIGIT_CORRUPTION_NOT_PERFORMANCE_CONFLICT`: パチマガスロマガ旧ページの一部検索表示で設定1/2の機械割が196.4/198.1%と表示されるが、P-WORLD・5号機クロニクル等は96.4/98.1%、同旧資料の後続設定値も100.0/103.0/108.4/112.0と連続するため、表示/索引破損として分離し平均しない。

## sources

取得日: **2026-09-06**

- パチビー — 導入日/メーカー/5号機ART/CZ/純増: `https://www.pachibee.jp/movies/index/9095`
- P-WORLD — 基本仕様/ボーナス/ART/機械割/初当たり: `https://www.p-world.co.jp/machine/database/6982`
- パチマガスロマガ旧ページ — 基本スペック/41G/純増/獲得枚数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/02/a.php`
- パチマガスロマガ旧ページ — ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/02/l.php`
- 5号機クロニクル D-light — 機械割/導入月整理: `https://5goki.com/daiichi`
- 当時攻略資料（天井ハイエナ生活） — 888G天井/2セット以上/設定変更で天井Gリセット/精密確率: `https://macerate.seesaa.net/article/342837505.html`
- 当時攻略資料（すろぱちくえすと系旧記事） — 888G天井/設定変更で天井Gリセット: `https://mezase20.com/blog-entry-790.html`
- A-SLOT — スペック照合: `https://www.a-slot.com/SHOP/dlight_3.html`

## collectionNotes

- 性能コアの既確認値を無駄に再計算せず、複数系統の一致確認に留めた。
- resetBehavior欠損については「天才バカボン」「人類ウナギイヌ化計画」「D-light」「大一」と「設定変更/リセット/朝一/据え置き/電源OFF ON/電断/天井短縮/モード/状態/高確/ガックン」を組み替え、当時解析・古いDB・回顧資料を横断後のみ `UNVERIFIED_AFTER_RESEARCH` とした。
- 実機完全再現用の小役別抽選、CZ中詳細抽選、上乗せモード詳細振り分けは収集対象外。
