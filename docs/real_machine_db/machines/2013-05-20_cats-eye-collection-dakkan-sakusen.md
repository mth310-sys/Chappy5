# キャッツ・アイ－コレクション奪還作戦

machineName: キャッツ・アイ－コレクション奪還作戦
manufacturer: オリンピア
releaseDate: 2013-05-20
releaseDatePrecision: exact_day
generation: 5号機
systemType: ART
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-05-20**。K-Navi、HAZUSE、パチビー、パチスロ解析ガイドで一致。
- formalModelName: **キャッツアイ-コレクション奪還作戦A2**。
- inspectionNumber: **2S1464**。
- confidence: MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 99.0% |
| 3 | 100.3% |
| 4 | 105.2% |
| 5 | 110.2% |
| 6 | 115.1% |

- K-Navi、P-WORLD、HAZUSE、パチスロ解析ガイドで一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## initialHitBySetting

ART「キャッツRUSH」初当たり:

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/282.2 |
| 2 | 1/268.0 |
| 3 | 1/257.0 |
| 4 | 1/219.0 |
| 5 | 1/186.0 |
| 6 | 1/159.2 |

- K-Navi、P-WORLD、HAZUSE、パチスロ解析ガイドで一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## baseGamesPer50

- **約32G/50枚**。
- 後年実機販売系スペック整理で確認。主要解析サイトの現存本文では比較可能なベース値を追加照合できず、`ANALYSIS_SINGLE` として保持。

## netIncrease

- ART「キャッツRUSH」: **約2.7枚/G**。
- K-Navi、P-WORLD、パチビー、パチマガスロマガ、パチスロ解析ガイドで一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## basicPayout

- ART「キャッツRUSH」: **1セット50～250G+α**、純増約2.7枚/G。
- 擬似ボーナス「キャッツボーナス」: **20G固定**、パチマガスロマガでは規定ゲーム数ベースの純増目安 **約54枚**。
- スーパーキャッツRUSH: **20G**。スーパーキャッツボーナス抽選確率は **1/9.9**。

## modeSpecificMinimumData

- 通常時は規定ゲーム数管理を持ち、主要モードは **通常A / 通常B / 天国A / 天国B / 天国C / 超天国**。
- P-WORLDは通常A/Bの天井を **999G**、天国A/B/C・超天国を **100G** と掲載。
- 当時天井整理資料は通常A **最大990G** / 通常B **最大999G** / 天国各種 **最大100G** と掲載。
- 990Gと999Gの差は規定G/前兆等の定義差の可能性があるため平均せず `CONFLICT_DEFINITION_990_VS_999` として保持。
- 天井到達時はART「キャッツRUSH」当選確定。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CEILING_RESET_CONFIRMED__MODE_RESELECT_EXISTENCE_CONFIRMED__CARRYOVER_POWER_CYCLE_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- パチスロ立ち回り講座の機種別天井資料で、**設定変更後は天井到達までのゲーム数がクリアされる**ことを確認。
- K-Naviの当該機ページには機種固有解析項目として **「モード移行率(設定変更時)」** が存在し、設定変更時にモード移行抽選が行われる仕様であることは直接確認できる。
- ただし今回取得できた現存本文では、その設定変更時モード振り分けの数値表そのものを安全に回収できなかったため、具体率は `UNVERIFIED_AFTER_RESEARCH` とする。

### carryOverBehavior

- 当時の天井狙い整理資料には本機を「宵越し×」とする記述がある。
- ただしこれは純据え置き時の内部ゲーム数・モード・状態の全契約を直接列挙した資料ではなく、設定変更時リセットと店運用を含む実戦上の評価である可能性を排除できない。
- そのため純据え置き時のゲーム数・モード・内部状態の完全契約は `UNVERIFIED_AFTER_RESEARCH`。設定変更仕様の反対推定で埋めない。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ON時のゲーム数・モード・内部状態・液晶表示契約は、機種名表記揺れ、型式名、メーカー名、「電源OFF ON」「電断」「朝一」「据え置き」「宵越し」を組み替えて再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- settingChange: **RESET_CONFIRMED**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更後は前日の天井進捗をクリア。
- 一律の短縮天井が存在するという直接資料は今回確認できず、`NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時最大天井は資料定義により **990/999G** の差があるためCONFLICT保持。

### modeAfterReset

- **RESELECT_CONFIRMED_AT_FEATURE_LEVEL**。
- K-Naviに当該機固有の「モード移行率(設定変更時)」解析項目が存在。
- 具体的な設定別振り分け数値は本文を安全に回収できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 通常時には高確率ステージ等の内部状態が存在するが、設定変更時の状態初期化/再抽選率を直接示す本機固有資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時にモード再抽選が行われるため、朝一の規定G分布は前日の続きではない。
- ただし設定変更時の天国選択率など、比較可能な公開朝一数値は今回安全に回収できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 前日の天井ゲーム数進捗は設定変更で消えるため、宵越し天井狙いの前提が崩れる。
- その他の設定変更固有の不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- ガックン、初期出目、液晶ステージ、データ表示などによる本機固有の設定変更/据え置き判別は、検索語・資料系統変更後も直接仕様を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- settingChangeModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetHitRateWithin100G: `UNVERIFIED_AFTER_RESEARCH`
- shortenedCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`

### numericResetData

- settingChangeGameCounter: RESET
- settingChangeMode: RESELECT_FEATURE_CONFIRMED
- settingChangeModeDistribution: UNVERIFIED_AFTER_RESEARCH
- carryOverGameCounter: UNVERIFIED_AFTER_RESEARCH
- powerCycleGameCounter: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: MEDIUM_HIGH_FOR_SETTING_CHANGE_CEILING_RESET_AND_MODE_RESELECT_EXISTENCE__UNVERIFIED_FOR_NUMERIC_MODE_TABLE_CARRYOVER_POWER_CYCLE_AND_DETECTION

## missingFields

- settingChangeModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- pureCarryOverFullContract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleContract: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- gakkunOrInitialDisplayDetection: `UNVERIFIED_AFTER_RESEARCH`
- baseGamesPer50CrossCheck: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- normalModeCeiling:
  - P-WORLD: 通常A/B **999G**
  - 当時天井整理: 通常A **990G** / 通常B **999G**
  - `CONFLICT_DEFINITION_990_VS_999`

## sources

retrievedAt: 2026-09-06

- K-Navi: https://p-kn.com/slot/1843/
  - 2013-05-20、設定別ART初当たり、機械割、ART 50～250G、純増約2.7枚/G、設定変更時モード移行率ページの存在。
- HAZUSE: https://hazuse.com/machine/pachislot/2S1464/
  - 型式名、検定番号、2013-05-20、設定別ART初当たり、機械割。
- P-WORLD: https://www.p-world.co.jp/machine/database/7056
  - ART仕様、設定別初当たり/機械割、通常A/Bと天国系の天井・モード概要。
- パチビー: https://www.pachibee.jp/movies/index/9419
  - 2013-05-20、5号機ART、純増約2.7枚/G。
- パチマガスロマガ 基本情報: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/109/a.php
  - ART純増2.7枚/G、50～250G、キャッツボーナス20G/約54枚。
- パチマガスロマガ ART突入フロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/109/l.php
  - ART 50～250G、純増2.7枚/G、CZ/擬似ボーナス概要。
- パチスロ解析ガイド: https://pachislot-guide.net/2013/catseye-collection/
  - 2013-05-20、設定別初当たり/機械割、ART仕様。
- パチスロ立ち回り講座 天井一覧: https://crankyseven.com/sp/tenjo-5ka.htm
  - ART間999G、設定変更後は天井Gクリア。
- 天井ハイエナ生活 当時整理: https://macerate.seesaa.net/article/226196713.html
  - 通常A最大990G/通常B999G/天国系100G、宵越し×表記。
- 実機販売スペック整理: https://slot-kakaku.com/%E3%82%AD%E3%83%A3%E3%83%83%E3%83%84%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%AE%9F%E6%A9%9F/
  - 1000円あたり約32G。

## researchNotes

- 検索語は「キャッツ・アイ/キャッツアイ/コレクション奪還作戦/キャッツアイ-コレクション奪還作戦A2」に加え、「設定変更」「リセット」「朝一」「据え置き」「宵越し」「電源OFF ON」「電断」「天井」「モード移行率」「ガックン」を組み替えた。
- K-Naviのトップページには設定変更時モード移行率の機種固有項目が残るが、今回の検索インデックスでは数値表の個別ページ本文を安全に回収できなかったため、値を推測していない。
- 2013-05-08～05-19境界監査で一度「BADBOYS」「美らん娘-30」の2013-05-13表記を発見したが、これは後年の撤去期限記事における**検定通過日**。当時グリーンべるとの2013-06-06発表では両機の納品開始は2013-08-04予定なので、5月導入機としては採用しない。
