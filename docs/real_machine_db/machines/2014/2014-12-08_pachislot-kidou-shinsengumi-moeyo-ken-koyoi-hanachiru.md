# パチスロ機動新撰組 萌えよ剣～今宵、花散る～

machineName: パチスロ機動新撰組 萌えよ剣～今宵、花散る～
manufacturer: 北電子
releaseDate: 2014-12-08
releaseDatePrecision: multi_source_hall_start
releaseDateNote: 業界発表の納品予定2014-12-07と、複数解析資料のホール導入2014-12-08を分離。DB canonical はホール導入開始日2014-12-08。
generation: 5号機
systemType: A+ART / ボーナス+ART / 継続バトル
modelName: 萌えよ剣 今宵花散るTK
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- 北電子公式製品ページで機種名・メーカーを確認。
- グリーンべると2014-10-14記事で、2014-12-07から納品予定と確認。
- 複数の当時/後年解析資料でホール導入日2014-12-08を確認したため、本DBでは2014-12-08をcanonical。
- 型式名は当時機種整理資料で **萌えよ剣 今宵花散るTK** を確認。
- confidence: OFFICIAL_FOR_IDENTITY / INDUSTRY_FOR_DELIVERY / ANALYSIS_HIGH_MULTI_SOURCE_FOR_HALL_START / ANALYSIS_SINGLE_FOR_MODEL_NAME

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.7% |
| 2 | 98.7% |
| 3 | 100.2% |
| 4 | 102.5% |
| 5 | 105.0% |
| 6 | 109.4% |

- 旧パチマガスロマガでメーカー発表値として掲載。
- P-WORLD等の機種資料でも同系列を照合。
- confidence: ANALYSIS_HIGH_WITH_MANUFACTURER_ANNOUNCED_VALUES

## initialHitBySetting

### ART「誠剣RUSH」初当たり

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/392.3 |
| 2 | 1/376.9 |
| 3 | 1/375.6 |
| 4 | 1/320.5 |
| 5 | 1/310.3 |
| 6 | 1/261.3 |

- 旧パチマガスロマガ独自調査値。
- confidence: ANALYSIS_SINGLE_PERIOD_SOURCE

### ボーナス+ART合成

| 設定 | ボーナス+ART |
|---:|---:|
| 1 | 1/163.0 |
| 2 | 1/157.2 |
| 3 | 1/153.3 |
| 4 | 1/141.4 |
| 5 | 1/136.2 |
| 6 | 1/123.7 |

- 旧パチマガスロマガとP-WORLD系資料で照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### ボーナス参考値

| 設定 | BIG合成 | REG | ボーナス合成 |
|---:|---:|---:|---:|
| 1 | 1/481.9 | 1/662.0 | 1/278.9 |
| 2 | 1/461.5 | 1/648.9 | 1/269.7 |
| 3 | 1/442.8 | 1/624.2 | 1/259.0 |
| 4 | 1/431.2 | 1/612.5 | 1/253.0 |
| 5 | 1/409.6 | 1/595.8 | 1/242.7 |
| 6 | 1/394.8 | 1/580.0 | 1/234.9 |

- S-BIGは全設定共通 **1/10922.7**。
- ボーナス合成は別資料に設定1 1/279.9、設定4 1/253.1の差があるため conflicts に保持し、平均しない。

## baseGamesPer50

- **約31.74G / 50枚**。
- 旧パチマガスロマガの小役確率ページに直接掲載。
- confidence: ANALYSIS_HIGH_PERIOD_DIRECT_VALUE

## netIncrease

- ART「誠剣RUSH」: **純増約1.5枚/G**。
- 北電子発表を報じたグリーンべると、P-WORLD、旧パチマガスロマガで一致。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## basicPayout

- SPECIAL BIG BONUS: **純増28枚**。
- BIG BONUS: **純増203枚**。
- REGULAR BONUS: **純増42枚**。
- ART「誠剣RUSH」: **1セット30G+継続バトル**。
- ARTはゲーム数上乗せ+継続抽選+セットストック型。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時内部状態: 低確 / 高確 / 超高確を確認。
- 第1天井: **ボーナス間932G+前兆 → ART確定**。
- 第2天井: **ボーナス間1432G+前兆 → ART + 妖撃乱舞確定**。
- ARTを途中で挟んでもボーナス間天井の対象として扱う当時解析を確認。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: DEDICATED_MORNING_RESET_PAGE_EXISTENCE_CONFIRMED_BUT_BODY_UNRECOVERED / UNVERIFIED_FOR_MACHINE_SPECIFIC_RESET_CONTRACTS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 旧パチマガスロマガの本機専用メニューに **「朝イチ・設定変更」** ページが存在したことは確認。
- ただし現在検索可能な本文から、設定変更時のボーナス間天井G、内部状態、液晶状態等の具体契約を安全に復元できなかった。
- `UNVERIFIED_AFTER_RESEARCH`。一般的な5号機A+ART機の慣例から補完しない。

### carryOverBehavior

- 据え置き時のボーナス間天井G、低確/高確/超高確、前兆状態を直接明示する本機固有資料は、表記・検索語・資料系統変更後も固定できず。
- `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 設定変更なしの純電源OFF→ON時について、ボーナス間G数・内部状態・画面復帰を直接対照した本機固有契約は固定できず。
- `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更時: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時: `UNVERIFIED_AFTER_RESEARCH`。
- power cycle: `UNVERIFIED_AFTER_RESEARCH`。
- 通常天井値932G/1432Gが公開されていることだけを根拠にリセット/引継ぎを推定しない。

### ceilingAfterReset

- 通常天井: 932G+前兆 / 1432G+前兆。
- 設定変更専用の短縮天井・振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 通常時の低確/高確/超高確は確認済み。
- 設定変更時の状態振り分けまたは朝一専用モード: `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時の低確/高確/超高確の再抽選/固定/引継ぎ: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更専用の短縮天井、朝一高確確定、ART優遇等の本機固有恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 専用「朝イチ・設定変更」ページの存在だけでは恩恵内容を推定しない。

### resetPenalties

- 設定変更専用の冷遇・不利数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、初期出目、開始ステージ、ランプ等による変更判別契約: `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時モード/状態振り分け: UNVERIFIED_AFTER_RESEARCH。
- リセット専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。
- リセット恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH。
- 朝一特定G以内当選率: NONE_CONFIRMED_AFTER_RESEARCH。

### publicMorningNumbers

- 比較可能な設定変更専用の公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `パチスロ機動新撰組 萌えよ剣～今宵、花散る～ / 機動新撰組 萌えよ剣 / 萌えよ剣 今宵花散る / 萌えよ剣 今宵花散るTK / 萌えよ剣2 / 北電子`。
- 検索語: `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 天井 / 932G / 1432G / 天井短縮 / 低確 / 高確 / 超高確 / 温泉ステージ / ガックン / 50枚 / ベース`。
- 資料系統: 北電子公式、当時業界記事、P-WORLD、旧パチマガスロマガ、当時天井解析、後年回顧/機種DB、年次機種一覧。
- 旧パチマガスロマガに本機専用「朝イチ・設定変更」導線は残るが、当該本文を現行検索キャッシュから復元できなかったため、内容を推測転記していない。

## sources

取得日: 2026-09-07

1. 北電子公式製品ページ: https://www.kitadenshi.co.jp/slot/moeyoken/
2. グリーンべると 北電子発表: https://web-greenbelt.jp/00007309/
3. P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/7544
4. 旧パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/93/a.php
5. 旧パチマガスロマガ 総合メニュー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/93/kitac_slot_93.php
6. 旧パチマガスロマガ ボーナス/ART/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/93/h-1.php
7. 旧パチマガスロマガ 小役・50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/93/c.php
8. 旧パチマガスロマガ ART突入フロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/93/l.php
9. スロパチクエスト 機種解析/導入日/天井: https://www.slopachi-quest.com/article/moeyo-ken2/
10. 後年機種回顧: https://www.nikuziru.com/archives/1705
11. 2014年機種資料（型式名）: https://pachinko.hatenablog.jp/archive/2014

## missingFields

- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の天井内部G処理: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の天井G/状態引継ぎ: UNVERIFIED_AFTER_RESEARCH
- 設定変更なし電源OFF→ON: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の低確/高確/超高確振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有の変更判別: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更専用の公開朝一数値: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- ボーナス合成・設定1: 旧パチマガスロマガ **1/278.9** に対し、一部後年解析 **1/279.9**。平均せず双方を保持。canonicalは当時詳細表の1/278.9。
- ボーナス合成・設定4: 旧パチマガスロマガ **1/253.0** に対し、一部後年解析 **1/253.1**。丸め/転記差の可能性はあるが平均せず保持。canonicalは当時詳細表の1/253.0。
