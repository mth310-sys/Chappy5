# 華一番

machineName: 華一番
manufacturer: パイオニア
releaseDate: 2007-11-12
generation: 5号機
systemType: ノーマル / ボーナス主体 + 演出用RT
medalType: 25φ
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
retrievedAt: 2026-09-01

## 導入・型式整理

- パイオニア公式の2001〜2009年機種一覧では「ハナイチバン」として2007年11月発売。30φ版「ハナイチバン-30」も同時期に別掲載されている。
- 当時グリーンべると記事では2007-10-11に発表展示会、納品は2007-11-11から開始予定。
- パチビーの当時導入日一覧では2007-11-12導入として掲載。
- 本レコードは25φ版「華一番」を対象とする。30φ版は公式上別機種掲載のため、重複確認後に別レコード候補として扱う。

## 性能コア

### ボーナス確率

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/334 | 1/381 | 1/178 |
| 2 | 1/315 | 1/364 | 1/168 |
| 3 | 1/309 | 1/348 | 1/163 |
| 4 | 1/297 | 1/341 | 1/159 |
| 5 | 1/287 | 1/334 | 1/154 |
| 6 | 1/273 | 1/315 | 1/146 |

- K-Navi掲載値。
- 当時グリーンべると記事の合成確率「設定1 1/178〜設定6 1/146」と一致。

### 機械割 / 出玉率

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 99.0% |
| 3 | 101.0% |
| 4 | 103.0% |
| 5 | 105.0% |
| 6 | 107.0% |

- K-Navi掲載値。
- 当時グリーンべると記事の97%〜107%と上下端が一致。

### ベース

baseGamesPer50: 約37G / 1000円（当時グリーンべると記事）

- 当時20円貸しで1000円=50枚相当として物差し値に採用。

### 基本獲得

basicPayout:
- BIG: 約300枚（当時業界記事）
- REG: 約100枚（当時業界記事）
- K-Naviの役構成ではBIGは348枚超払い出し終了、CHANCE BONUS/REG相当は108枚超払い出し終了。

## ゲーム性 / 最低限の追加値

- 高確率演出「おかわりタイム」を搭載。
- 「おかわりタイム」は最低7G継続の演出用RT。
- 「並」「超」の2種類があり、「超」は基本的に巻物成立から突入する演出仕様。
- 当時グリーンべると記事ではチェリーのボーナス重複期待度20%、巻物50%と説明されているが、実機完全再現用の細かな内部抽選DBには展開しない。
- パイオニア公式も本機最大の特徴として「おかわりタイム」を明記。

## v0.7 resetBehavior

検索語は `華一番 / ハナイチバン / 華一番-30 / ハナイチバン-30 / パイオニア` と、`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / おかわりタイム / RT / ガックン` を組み替え、公式、当時業界記事、当時解析、旧機種DB、回顧資料を横断した。

resetBehavior:
  settingChangeBehavior: 設定変更時の演出用RT「おかわりタイム」残G/内部RT状態、成立済みボーナス状態の扱いは直接資料を確定できず UNVERIFIED。
  carryOverBehavior: 据え置き時の演出用RT残G/内部状態の扱いは直接資料を確定できず UNVERIFIED。
  powerCycleBehavior: 電源OFF→ONのみでの演出用RT残G/内部状態・ランプ状態の扱いは直接資料を確定できず UNVERIFIED。
  gameCounterReset: 通常時ゲーム数天井は NONE_CONFIRMED。最低7Gは演出用RT継続G数でありハマリ天井ではない。
  ceilingAfterReset: リセット時短縮天井 / 朝一専用天井は NONE_CONFIRMED。
  modeAfterReset: 朝一専用モード / 設定変更専用モード振り分けは NONE_CONFIRMED。
  stateAfterReset: 通常時に「並/超」の演出用RT状態は存在するが、設定変更・据え置き・電断時の処理は UNVERIFIED。
  advantageousSectionReset: NOT_APPLICABLE（5号機）。
  resetBenefits: 朝一 / 設定変更時の専用恩恵は NONE_CONFIRMED。
  resetPenalties: 設定変更時の専用不利要素は NONE_CONFIRMED。
  resetDetection: 本機固有のガックン、初期出目、高確率ランプ等による設定変更/据え置き判別の直接資料は UNVERIFIED。
  numericResetData: 公開された朝一専用数値、短縮天井G数、変更時モード振り分け、リセット恩恵発生率は NONE_CONFIRMED。

### resetBehavior判定メモ

- 通常時の主要性能はボーナス主体で、当時一次記事・公式・解析資料に「朝一専用天井」「リセット短縮」「設定変更専用モード」の記述は確認できなかった。
- ただし演出用RTの状態を設定変更・据え置き・単純電断がどう扱うかは、最初の検索だけで欠損扱いにせず語句を変えて再探索した上でも直接資料を確定できなかったため、この部分のみUNVERIFIED。
- 有利区間は世代上非該当。

## sources

1. パイオニア公式「パチスロ機種情報2001年~2009年」
   - https://www.slot-pioneer.co.jp/products/2009.html
   - 2007年11月発売、25φ「ハナイチバン」と30φ「ハナイチバン-30」の公式掲載を確認。
   - confidence: OFFICIAL

2. グリーンべると / P-WORLD業界ニュース「パイオニア、新筐体の『華一番』を発表」2007-10-12
   - https://news.p-world.co.jp/articles/2426/greenbelt
   - 発表日、納品開始予定日、演出用RT、合算、出玉率、1000円あたりG数、BB/RB純増を確認。
   - confidence: INDUSTRY

3. K-Navi「華一番」
   - https://p-kn.com/slot/723/
   - 設定別BIG/REG/合算、設定別機械割、払い出し終了条件、演出用RT概要を確認。
   - confidence: ANALYSIS_HIGH

4. パチビー 2007年11月新機種導入日
   - https://www.pachibee.jp/machines/schedule/2007-11
   - 2007-11-12導入として「華一番」を確認。
   - confidence: ANALYSIS_HIGH

5. パチマガスロマガ「華一番&30」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/pioneer_slot_84.php
   - 当時解析ページの存在と、華一番/30の同系統扱いを確認。現時点では本文取得制約があり、数値の主根拠にはしていない。
   - confidence: ANALYSIS_HIGH

6. Pマンズ / プレイグラフ 2007年10月
   - https://p-mans.blogspot.com/2007/10/
   - 展示会日程と「おかわりタイム（7ゲーム）」の当時業界記述を確認。
   - confidence: INDUSTRY

## missingFields

- 設定変更時の演出用RT残G/内部状態処理
- 据え置き時の演出用RT残G/内部状態処理
- 電源OFF→ONのみ時の演出用RT残G/内部状態処理
- 本機固有の設定変更判別挙動

## conflicts

- 導入時期は「納品開始予定 2007-11-11」（当時業界記事）と「導入日 2007-11-12」（パチビー）がある。発売/納品/ホール導入の定義差として保持し、releaseDateはホール導入日の2007-11-12を採用。数値を平均しない。

## confidenceSummary

- release/date: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- performance core: INDUSTRY + ANALYSIS_HIGH
- base/payout: INDUSTRY
- resetBehavior: PARTIAL / UNVERIFIED_AFTER_RESEARCH for direct reset-specific behavior
