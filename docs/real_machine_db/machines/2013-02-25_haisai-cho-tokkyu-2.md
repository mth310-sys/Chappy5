# ハイサイ蝶特急2

machineName: ハイサイ蝶特急2
manufacturer: タイヨー
releaseDate: 2013-02-25
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviとパチ＆スロ必勝本が2013-02-25導入で一致。グリーンべると2013-01-17業界記事は納品予定を2013-02-24からとしており、翌25日のホール導入開始と整合。
generation: 5号機
systemType: ART / ボーナス非搭載 / 規定ゲーム数管理 / ゲーム数上乗せART
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- 型式名: **ハイサイ蝶特急2**。
- 検定番号: **2S1296**（P-WORLD後年DB）。
- confidence: INDUSTRY_PLUS_ANALYSIS_DATABASE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.1% |
| 2 | 96.0% |
| 3 | 98.5% |
| 4 | 100.2% |
| 5 | 105.1% |
| 6 | 109.7% |

- パチ＆スロ必勝本、当時系紹介資料、後年実機販売DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 蝶特急モード

| 設定 | 確率 |
|---|---:|
| 1 | 1/639.7 |
| 2 | 1/394.2 |
| 3 | 1/347.2 |
| 4 | 1/280.6 |
| 5 | 1/313.0 |
| 6 | 1/257.6 |

### ハイサイチャンス

| 設定 | 確率 |
|---|---:|
| 1 | 1/94.3 |
| 2 | 1/85.2 |
| 3 | 1/95.1 |
| 4 | 1/82.9 |
| 5 | 1/92.4 |
| 6 | 1/84.1 |

### ART合算

| 設定 | 確率 |
|---|---:|
| 1 | 1/82.2 |
| 2 | 1/70.1 |
| 3 | 1/74.7 |
| 4 | 1/64.0 |
| 5 | 1/71.3 |
| 6 | 1/63.4 |

- グリーンべると2013-01-17業界記事とパチ＆スロ必勝本で一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## baseGamesPer50

- **32.5G/1000円（50枚相当）**。
- パチマガスロマガ小役確率ページに「1000円あたりのゲーム数 32.5G」と直接記載。
- confidence: ANALYSIS_PERIOD_DIRECT

## netIncrease

- ART「蝶特急モード」: **約+2.96枚/G**。
- 1セット: **40G+α**。
- グリーンべるとは純増約3枚/G、K-Navi/P-WORLD/パチマガスロマガは約2.96枚/G。精密値2.96枚/Gを主値とし、業界記事の約3枚は丸めとして整合。
- confidence: INDUSTRY_PLUS_MULTI_SOURCE_ANALYSIS

## basicPayout

- ハイサイチャンス: **5G固定 / 平均約20枚**。
- 蝶特急モード: **40G～ / 平均約300枚**（グリーンべると業界記事）。
- 蝶特急モードは40G+αのゲーム数上乗せ型。
- 最大天井128G到達時は「超確変」へ突入し、業界発表では平均300Gの上乗せ、大量出玉期待。
- confidence: INDUSTRY

## modeSpecificMinimumData

### 通常モード

- 通常時は **通常A / 通常B / 天国 / 超確変** の4モード。
- モードで規定ゲーム数振り分けと蝶特急モード選択率が変化。
- モード移行抽選契機はハイサイチャンス当選時、蝶特急モード終了時、設定変更時。

### 天井

- **通常時128Gハマリで超確変当選**。
- 天井ゲーム数はAT終了後にハズレ目が出現してからカウント開始。
- 別系統の連続HC天井として、**24回連続ハイサイチャンス突入で24回目HC終了後1G目に蝶特急モード確定**。
- 業界記事でも128G天井到達時の超確変を確認。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_GAME_AND_MODE_RESET__POWER_CYCLE_GAME_AND_MODE_RETAIN__RESET_MODE_DISTRIBUTION_DIRECT
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井までのゲーム数: RESET / 再セット**。
- **内部モード: RESET / 再セット**。
- パチ＆スロ必勝本の「天井&設定変更」ページに直接記載。
- confidence: ANALYSIS_PERIOD_DIRECT

### carryOverBehavior

- 据え置き時の専用表記は確認できなかった。
- ただし電源OFF→ONのみでは天井G・モードとも引き継ぐ直接仕様があるため、通常の据え置き+電断では内部天井進捗・モード保持として扱う。
- 据え置き中に電断を伴わない場合も設定変更契機がないため同様の保持契約とする。
- confidence: ANALYSIS_HIGH_BY_DIRECT_POWER_CYCLE_SPEC

### powerCycleBehavior

- **電源OFF→ONのみ**:
  - 天井までのゲーム数: **RETAIN_CONFIRMED**。
  - 内部モード: **RETAIN_CONFIRMED**。
  - 7セグ表示: **再セット**。
- 内部値は保持する一方で表示だけ再セットされる点が、朝一判別上重要。
- confidence: ANALYSIS_PERIOD_DIRECT

### gameCounterReset

- 設定変更時: **CLEAR / RESET_CONFIRMED**。
- 据え置き時: **RETAIN_BY_POWER_CYCLE_SPEC**。
- 電源OFF→ONのみ: **RETAIN_CONFIRMED**。
- 天井カウントの起算点はAT終了後のハズレ目出現後。

### ceilingAfterReset

- 設定変更時も最大天井は通常契約の**128G**。
- 設定変更専用の固定短縮天井は確認できない。
- 設定変更後のモード再セットにより天国が選択される場合は早い当選が期待できるが、これは固定天井短縮とは分離する。

### modeAfterReset

- 設定変更時: **モード再セット**。
- 設定変更時の公開モード振り分け:

| 設定 | 通常A | 天国 |
|---|---:|---:|
| 1 | 90.0% | 10.0% |
| 2 | 87.0% | 13.0% |
| 3 | 82.0% | 18.0% |
| 4 | 80.0% | 20.0% |
| 5 | 75.0% | 25.0% |
| 6 | 70.0% | 30.0% |

- 設定変更時は通常B・超確変の直接選択表記なし（0%扱いの表）。
- パチ＆スロ必勝本「モード移行率」に直接掲載。
- confidence: ANALYSIS_PERIOD_DIRECT_NUMERIC

### stateAfterReset

- 本機で物差し上重要な通常状態は規定ゲーム数モードとして上記modeAfterResetへ収録。
- モード以外に独立した高確/低確等の設定変更時状態振り分けを示す信頼できる公開表は、機種名表記揺れ、型式名、タイヨーと「設定変更/リセット/朝一/状態/高確/据え置き/電源OFF ON」を組み替え、K-Navi、必勝本、パチマガスロマガ、P-WORLD、業界記事、当時系資料を横断後も確認できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後は全設定で天国モード選択があり、**設定1 10.0% ～ 設定6 30.0%**。
- 天井自体が最大128Gと浅く、設定変更後も128G天井契約から再スタートする。
- 天井到達時は超確変へ突入するため、朝一128G以内で強い恩恵到達の可能性を持つ。

### resetPenalties

- 前日から天井へ進んでいたゲーム数は設定変更で消えるため、**宵越し天井進捗は失われる**。
- 前日が有利な内部モードでも設定変更で再セットされる。

### resetDetection

- 電源OFF→ONのみでも**7セグ表示は再セット**されるため、朝一7セグ初期化だけで設定変更とは判別できない。
- 設定変更時の7セグ表示を明示した独立資料は今回確認できず、表示初期化単独を変更確定根拠にはしない。
- 本機固有のリールガックン、初期出目等による設定変更判別は検索語・資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeCeiling: **128G max / counter reset**。
- settingChangeModeNormalA: **90 / 87 / 82 / 80 / 75 / 70%**。
- settingChangeModeHeaven: **10 / 13 / 18 / 20 / 25 / 30%**。
- powerCycleGameCounter: **RETAIN**。
- powerCycleMode: **RETAIN**。
- powerCycleSevenSegmentDisplay: **RESET**。
- ceilingBenefit: **128G -> 超確変**。
- consecutiveHcCeiling: **24 consecutive HC -> HC終了後1G目 蝶特急モード**。
- fixedResetShortCeiling: **NONE_CONFIRMED**。
- advantageousSection: **NOT_APPLICABLE_5TH_GEN**。

### numericResetData

- maximumCeilingG: 128G
- settingChangeGameCounter: RESET_CONFIRMED
- settingChangeMode: RESET_CONFIRMED
- setting1ResetNormalA: 90.0%
- setting1ResetHeaven: 10.0%
- setting2ResetNormalA: 87.0%
- setting2ResetHeaven: 13.0%
- setting3ResetNormalA: 82.0%
- setting3ResetHeaven: 18.0%
- setting4ResetNormalA: 80.0%
- setting4ResetHeaven: 20.0%
- setting5ResetNormalA: 75.0%
- setting5ResetHeaven: 25.0%
- setting6ResetNormalA: 70.0%
- setting6ResetHeaven: 30.0%
- powerCycleGameCounter: RETAIN_CONFIRMED
- powerCycleMode: RETAIN_CONFIRMED
- powerCycleSevenSegment: RESET_CONFIRMED
- advantageousSection: NOT_APPLICABLE_5TH_GEN

resetQaReliability: ANALYSIS_PERIOD_DIRECT_FOR_RESET_POWER_CYCLE_AND_RESET_MODE_DISTRIBUTION__INDUSTRY_CONFIRMATION_FOR_CEILING

## missingFields

- 設定変更時に規定ゲーム数モード以外で独立して存在する高確/低確等の状態振り分け。
- 本機固有のリールガックン/初期出目による設定変更判別。
- 設定変更時7セグ表示の独立直接表記（電源OFF→ON時の再セットは確認済み）。

## conflicts

- 純増はK-Navi/P-WORLD/パチマガスロマガが**約2.96枚/G**、グリーンべると業界記事が**約3枚/G**。丸め差として整合しCONFLICT扱いしない。
- システム呼称は当時媒体にART/ATの表記揺れがある。押し順ナビで純増約2.96枚/G、BR非搭載、規定ゲーム数管理という実仕様を優先し、本DBでは当時主要DBに合わせてART表記を主とする。

## sources

取得日: 2026-09-06

- K-Navi ハイサイ蝶特急2: https://p-kn.com/slot/1795/
  - 2013-02-25導入、純増約2.96枚/G、蝶特急モード40～300G、最大天井128G、天井時超確変。
- グリーンべると「目指せ天井!? 新感覚のART機『ハイサイ蝶特急2』」2013-01-17: https://web-greenbelt.jp/00000729/
  - 2/24納品予定、純増約3枚/G、128G天井、HC/蝶特急/ART合成確率、平均獲得性能。
- パチ＆スロ必勝本 機種TOP: https://p.hisshobon.jp/machine/2157
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2157/1/38524
  - 2013-02-25導入、設定別蝶特急モード/HC/AT合算、機械割。
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/2157/1/38758
  - 128G天井、24回HC天井、設定変更時天井G/モード再セット、電源OFF→ON時天井G/モード引継ぎ、7セグ表示再セット。
- パチ＆スロ必勝本 モード移行率: https://p.hisshobon.jp/machine/2157/1/38848
  - 設定変更時通常A/天国振り分け。
- パチマガスロマガ スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/76/a.php
  - ART40G、純増+2.96枚/G、128G天井超確変。
- パチマガスロマガ 小役確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/76/c.php
  - 1000円あたり32.5G。
- P-WORLD: https://www.p-world.co.jp/machine/database/6980
  - 5号機ART、BR非搭載、純増約2.96枚/G、蝶特急モード40G+α、検定番号2S1296、2013年2月導入。
- グリーンべると「タイヨーが破格の13万5,000円で新機種を販売」2014-04-22: https://web-greenbelt.jp/00006182/
  - 後継ターボ記事から前作ハイサイ蝶特急2の128G天井を回顧確認。
