# 華一番-30

machineName: 華一番-30
manufacturer: パイオニア
releaseDate: 2007-11-12
generation: 5号機
systemType: ノーマル / ボーナス主体 + 演出用RT
medalType: 30φ
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
retrievedAt: 2026-09-01

## 導入・機種整理

- パイオニア公式は25φ「ハナイチバン」と30φ「ハナイチバン-30」を別機種として2007年11月発売欄に掲載し、「25Φ・30Φデザイン違いで同時発表」と明記。
- パチマガスロマガは「華一番&30」として同一攻略ページで扱い、基本システムと規定払い出し枚数を共通掲載している。
- 本レコードは30φ版を独立機種として保存する。25φ版の単純流用ではなく、公式の同時発表・デザイン違い記述と当時解析の「華一番&30」共通スペック扱いを根拠に性能値を共有する。

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

### 機械割

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 99.0% |
| 3 | 101.0% |
| 4 | 103.0% |
| 5 | 105.0% |
| 6 | 107.0% |

baseGamesPer50: 約37G / 1000円

basicPayout:
- BIG: 約300枚
- REG: 約100枚
- 規定払い出し: BIG 348枚超、REG 108枚超で終了

## ゲーム性

- 演出用プチRT「おかわりタイム」を搭載。
- 最低7G継続。
- 「並」「超」の2種類。
- パチマガスロマガ「華一番&30」の共通攻略ページでも `同時成立あり/完全告知/プチRT` として扱われる。

## v0.7 resetBehavior

`華一番-30 / ハナイチバン-30 / 華一番&30 / パイオニア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / おかわりタイム / RT / ガックン` を組み替え、公式・業界記事・当時解析・旧DB・回顧資料を横断。

resetBehavior:
  settingChangeBehavior: 設定変更時の「おかわりタイム」残G/内部RT状態の直接資料は UNVERIFIED。
  carryOverBehavior: 据え置き時の演出用RT残G/内部状態は UNVERIFIED。
  powerCycleBehavior: 電源OFF→ONのみ時の演出用RT残G/内部状態は UNVERIFIED。
  gameCounterReset: 通常時ゲーム数天井は NONE_CONFIRMED。7Gは演出用RT継続G数であり天井ではない。
  ceilingAfterReset: リセット短縮天井 / 朝一専用天井は NONE_CONFIRMED。
  modeAfterReset: 朝一専用モード / 設定変更専用モードは NONE_CONFIRMED。
  stateAfterReset: 演出用RT状態の設定変更・据え置き・電断時処理は UNVERIFIED。
  advantageousSectionReset: NOT_APPLICABLE。
  resetBenefits: NONE_CONFIRMED。
  resetPenalties: NONE_CONFIRMED。
  resetDetection: 本機固有ガックン / 初期出目 / ランプ等による変更判別は UNVERIFIED。
  numericResetData: 公開朝一専用数値・短縮天井G・変更時モード振り分けは NONE_CONFIRMED。

## sources

1. パイオニア公式
   - https://www.slot-pioneer.co.jp/products/2009.html
   - 2007年11月発売、25φ/30φを別掲載し「デザイン違いで同時発表」と明記。
   - confidence: OFFICIAL

2. パチマガスロマガ「華一番&30」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/a.php
   - 25φ/30φを共通機種ページで扱い、基本システム、BIG/REG払い出し、純増目安を確認。
   - confidence: ANALYSIS_HIGH

3. K-Navi「華一番」
   - https://p-kn.com/slot/723/
   - 設定別BIG/REG/合算、設定別機械割を確認。30φはパチマガ共通ページと公式「デザイン違い」記述を併用して同一性能と判定。
   - confidence: ANALYSIS_HIGH

4. グリーンべると / P-WORLD業界ニュース
   - https://news.p-world.co.jp/articles/2426/greenbelt
   - 納品開始予定、合算1/178〜1/146、出玉率97〜107%、1000円約37G、BB/RB約300/100枚、おかわりタイム仕様を確認。
   - confidence: INDUSTRY

5. パチビー 2007年11月導入日
   - https://www.pachibee.jp/machines/schedule/2007-11
   - 同日群の時系列確認に使用。
   - confidence: ANALYSIS_HIGH

## missingFields

- 設定変更/据え置き/電源OFF→ON時の演出用RT処理
- 本機固有の設定変更判別

## conflicts

- 納品開始予定2007-11-11とホール導入日2007-11-12は日付定義差として保持。releaseDateは同日群管理上2007-11-12を採用。

## confidenceSummary

- machine identity / 30φ distinction: OFFICIAL
- performance core: INDUSTRY + ANALYSIS_HIGH
- resetBehavior: PARTIAL / UNVERIFIED_AFTER_RESEARCH for direct reset-specific behavior
