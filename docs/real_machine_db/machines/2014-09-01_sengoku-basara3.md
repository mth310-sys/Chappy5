# パチスロ 戦国BASARA3

machineName: パチスロ 戦国BASARA3
manufacturer: エンターライズ
releaseDate: 2014-09-01
releaseDatePrecision: exact_start
generation: 5号機
systemType: 疑似ボーナス+ART / CZ / 天井
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- K-Navi・パチセブン・解析DBで **2014-09-01ホール導入開始**を一致確認。
- P-WORLDではメーカー **エンターライズ**、5号機ART、BR非搭載、CZ・天井搭載、純増約2.2枚/Gとして掲載。
- 正式型式名・検定番号は、機種名表記揺れ・メーカー名・検定語を変えて再探索したが今回高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.8% |
| 3 | 101.0% |
| 4 | 105.9% |
| 5 | 108.0% |
| 6 | 113.3% |

- パチスロ解析ガイド等の複数整理資料で上記系列を確認。
- Pachinaviの現行再構築ページでは設定1 **97.3%**、設定3 **102.3%** と異なる値が掲載されるため、平均せず `CONFLICT_PAYOUT_RATE_SETTINGS_1_3` として保持する。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT_PARTIAL

## initialHitBySetting

| 設定 | BASARA BONUS | 武将BONUS | ボーナス合算 | ART初当たり |
|---:|---:|---:|---:|---:|
| 1 | 1/523.7 | 1/791.3 | 1/315.1 | 1/355.2 |
| 2 | 1/548.8 | 1/659.4 | 1/299.5 | 1/327.7 |
| 3 | 1/473.6 | 1/712.6 | 1/284.5 | 1/326.7 |
| 4 | 1/457.4 | 1/558.7 | 1/251.5 | 1/282.1 |
| 5 | 1/377.1 | 1/570.0 | 1/226.9 | 1/258.1 |
| 6 | 1/372.2 | 1/452.8 | 1/204.3 | 1/208.5 |

- ボーナス+ART初当たり合算: **1/167.0 / 1/156.5 / 1/152.1 / 1/133.0 / 1/120.7 / 1/103.2**。
- confidence: ANALYSIS_HIGH

## baseGamesPer50

- **約30G/50枚**。
- 当時攻略資料で「1000円あたり平均約30G」を確認。
- confidence: ANALYSIS_SINGLE_CONTEMPORARY_WITH_MULTI_SOURCE_CONTEXT

## netIncrease

- ART「BASARA FEVER」: **約2.2枚/G**。
- P-WORLD、K-Navi、パチマガスロマガ、解析DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BASARA BONUS: **ベルナビ20 / 30 / 50 / 100回**。
- 武将BONUS: **ベルナビ8回**。
- ART「BASARA FEVER」: **1セット40G+α**。
- 解析整理資料ではBASARA BONUS最大純増約600枚、武将BONUS純増約48枚の記載あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 第一天井: **疑似ボーナスまたはART間996G+前兆 → ART**。
- 第二天井: **疑似ボーナス間1598G+前兆**。当時攻略資料では決戦モード70%以上+夜ART初期100G以上の恩恵を確認。
- 別系統としてレア小役間 **50〜200G** のCZ天井が存在するが、物差し用途を超える細かな振り分けは収集しない。
- 内部モード: 通常A / 通常B / 天国A / 天国B。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井ゲーム数RESET / 内部モード再抽選**。
- 当時攻略資料で **内部状態は高確スタート**を確認。
- confidence: ANALYSIS_MULTI_SOURCE_CONTEMPORARY

### carryOverBehavior

- 当時の実戦記録に前日ボーナス間ゲーム数を加算した「宵越し」で第二天井へ到達した例が複数あり、少なくとも **据え置き時のボーナス間天井進捗CARRYOVER**を支持。
- モード・高低状態の全項目について純据え置き契約を直接列挙した一次対照表は今回未取得。
- status: `CARRYOVER_SUPPORTED_BY_CONTEMPORARY_PRACTICE`。

### powerCycleBehavior

- 「設定変更なしの電源OFF→ONのみ」を独立条件として、天井・モード・状態を直接列挙する本機固有資料は検索語を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き実戦値から純電断契約まで自動推定しない。

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 据え置き: **CARRYOVER_SUPPORTED_AT_LEAST_FOR_BONUS_INTERVAL_CEILING**。
- 電源OFF→ONのみ: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 設定変更後はモード再抽選。
- 通常A/B第一天井: **996G+前兆**。
- 天国A第一天井: **96G+前兆**。
- 天国B第一天井: **32G+前兆**。
- 固定一律の短縮天井ではなく、天国モード選択時に短い第一天井となる。

### modeAfterReset

- **RESET_AND_REROLL_CONFIRMED**。
- 設定変更時モード振り分け:
  - 設定1・3・5: 通常A/B **92.5%** / 天国A/B **7.5%**
  - 設定2・4: 通常A/B **90.0%** / 天国A/B **10.0%**
  - 設定6: 通常A/B **87.5%** / 天国A/B **12.5%**
- A/B個別内訳は公開値を安全に固定できないため合算のまま保持。

### stateAfterReset

- 当時攻略資料で **設定変更後は高確スタート**を確認。
- 朝一は必ず夕方ステージになるわけではないため、液晶ステージだけで高確/変更を断定しない。
- status: `HIGH_START_CONFIRMED_ANALYSIS_SINGLE_CONTEMPORARY`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 高確スタート。
- 天国A/B選択率は設定により **7.5〜12.5%**。
- 天国Aなら第一天井96G+前兆、天国Bなら32G+前兆。

### resetPenalties

- 設定変更で前日の天井進捗を消去。
- 独立したリセット冷遇抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 設定変更後は高確スタートだが、朝一夕方ステージ固定ではないためステージ単独は確定判別にならない。
- 本機固有の確実なガックン・初期出目等は検索語を変えて再探索しても高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 設定1・3・5: 通常A/B 92.5% / 天国A/B 7.5%。
- 設定2・4: 通常A/B 90.0% / 天国A/B 10.0%。
- 設定6: 通常A/B 87.5% / 天国A/B 12.5%。
- モード別第一天井: 通常A/B 996G+前兆 / 天国A 96G+前兆 / 天国B 32G+前兆。

### publicMorningNumbers

- 天国A/B合算: **設定1・3・5=7.5% / 設定2・4=10.0% / 設定6=12.5%**。
- 通常A/B合算: **92.5% / 90.0% / 87.5%**。
- 朝一実戦値は少数サンプル資料が存在するが、解析値と混在させず性能コアには採用しない。

## resetBehavior 再探索メモ

- 表記揺れ: `パチスロ 戦国BASARA3 / 戦国BASARA3 / BASARA3 / バサラ3`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 天国 / モード / 高確 / ガックン`。
- P-WORLD、K-Navi、パチセブン、パチマガスロマガ、当時攻略記事、後年解析DBを横断。
- ゲーム版・舞台版「戦国BASARA3」は検索ノイズとして除外。

## conflicts

- `CONFLICT_PAYOUT_RATE_SETTINGS_1_3`: 主系列 **設定1=97.1%, 設定3=101.0%** に対し、Pachinavi現行再構築ページは **97.3%, 102.3%**。平均せず双方保持。

## missingFields

- 正式型式名・検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON契約: `UNVERIFIED_AFTER_RESEARCH`。
- モードA/B個別の設定変更振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有の確実な変更判別手段: `UNVERIFIED_AFTER_RESEARCH`。

## sources

取得日: **2026-09-07**

1. P-WORLD — パチスロ 戦国BASARA3
   - https://www.p-world.co.jp/machine/database/7480
   - エンターライズ / ART / 純増約2.2枚/G / BASARA BONUS・武将BONUS / ART40G+α
   - reliability: ANALYSIS_HIGH
2. K-Navi — パチスロ 戦国BASARA3
   - https://p-kn.com/slot/2107/
   - 2014-09-01ホール導入開始
   - reliability: ANALYSIS_HIGH
3. パチセブン — パチスロ 戦国BASARA3
   - https://pachiseven.jp/machines/4243/cutout/3
   - 2014-09-01導入 / エンターライズ / 疑似ボーナス仕様
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ゲーム性
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/09/01.php
   - 純増約2.2枚/G / ボーナス / ART構造
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — CZ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/09/03.php
   - レア小役間50〜200G天井
   - reliability: ANALYSIS_HIGH
6. パチスロ解析ガイド — 戦国BASARA3
   - https://pachislot-guide.net/2014/sengoku-basara3/
   - 設定別ボーナス・ART初当たり・機械割・基本獲得性能
   - reliability: ANALYSIS_HIGH
7. すろぱちくえすと — 設定変更・リセット時
   - https://www.slopachi-quest.com/article/basara3-reset/
   - 天井RESET / モード再抽選 / 設定別通常・天国振り分け / モード別第一天井
   - reliability: ANALYSIS_SINGLE_CONTEMPORARY
8. すろぱちくえすと — 機種別解析まとめ
   - https://www.slopachi-quest.com/kisyubetsu/sengoku-basara3/
   - 3種天井・設定変更解析索引
   - reliability: ANALYSIS_SINGLE_CONTEMPORARY
9. 勝ち組父さん負け組父さん — 2014年解析整理
   - https://ameblo.jp/mpkhb1311/entry-11902976739.html
   - 約30G/1000円 / 第一・第二天井 / 設定変更後高確スタート
   - reliability: ANALYSIS_SINGLE_CONTEMPORARY
10. Pachinavi — 戦国BASARA3 現行再構築解析
   - https://pachinavi.net/machines/sengoku-basara-3/
   - 導入日・純増・一部機械割競合値
   - reliability: ANALYSIS_SINGLE / CONFLICT_SOURCE

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_WITH_SOURCE_LIMITS
