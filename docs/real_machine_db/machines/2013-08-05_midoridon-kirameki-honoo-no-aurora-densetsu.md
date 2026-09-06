# 緑ドン～キラメキ！炎のオーロラ伝説～

machineName: 緑ドン～キラメキ！炎のオーロラ伝説～
manufacturer: エレコ
releaseDate: 2013-08-05
releaseDatePrecision: exact_day
generation: 5号機
systemType: A+ART / ボーナス + CZ「白夜ZONE」 + 2系統ART
recordStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_RESET_RESEARCHED

## identity

- ホール導入日: **2013-08-05**。パチ＆スロ必勝本、K-Naviで一致。
- ユニバーサルエンターテインメント公式は発売月を **2013年8月** と記載。
- manufacturer: **エレコ**。
- 型式名: **緑ドン3-D**（実機流通資料）。
- confidence: OFFICIAL_MONTH + ANALYSIS_MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.6% |
| 2 | 98.4% |
| 3 | 102.8% |
| 4 | 106.3% |
| 5 | 110.4% |
| 6 | 115.4% |

- パチ＆スロ必勝本の2013-07-27基本スペックと後年整理資料で一致。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

| 設定 | ART初当たり | ボーナス合算 |
|---|---:|---:|
| 1 | 1/549.1 | 1/249.2 |
| 2 | 1/544.2 | 1/245.5 |
| 3 | 1/508.8 | 1/238.3 |
| 4 | 1/458.7 | 1/230.0 |
| 5 | 1/416.0 | 1/220.7 |
| 6 | 1/341.6 | 1/208.1 |

- BIG: **1/381.0 / 376.6 / 368.2 / 356.2 / 344.9 / 334.4**。
- REG: **1/809.1 / 789.6 / 753.3 / 720.2 / 675.6 / 601.2**。
- ビリーボーナス: **全設定共通1/6553.6**。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 機種名・略称「緑ドン オーロラ」・型式名・エレコと「50枚/1000円/1K/コイン持ち/ベース/回転数」を組み替え、公式、P-WORLD、必勝本、旧解析DB、回顧資料を再探索したが、2013年本機を明示した比較可能な直接値を安全に固定できず。
- 2025年スマスロ「緑ドン VIVA!情熱南米編 REVIVAL」の約33.2G/50枚は別機種なので混入させない。

## netIncrease

- ART「オーロラゲーム」: **約+1.7枚/G**。
- ユニバーサル公式はボーナス+ART型、必勝本/P-WORLDはART純増約1.7枚/Gで一致。
- confidence: OFFICIAL_SYSTEM + ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- ART「オーロラゲーム」: **1セット30G / 50G / 100G**。継続抽選型「ドンART」とゲーム数上乗せ型「ビリーART」の2種類。
- BIG: **約206枚**。
- REG: **約54枚**。
- ビリーボーナス: **約14枚**。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- CZ「白夜ZONE」: **15G / 30G / 無限**、全役でART抽選。
- ART中に大航海（30G）、スーパー大航海、ロケット大航海、V-RUSHを搭載。
- 通常天井: **ビリーボーナス以外のボーナス間1400G**。
- 天井恩恵: **ビリーART + ドンART + 大航海またはスーパー大航海（1:1）確定**。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_AND_POWER_CYCLE_CONTRACT_DIRECTLY_CONFIRMED_WITH_NUMERIC_STATE_DISTRIBUTION
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **天井ゲーム数リセット**。
- **内部状態を再抽選**。
- 液晶は **港町ステージ** から開始。
- confidence: ANALYSIS_HIGH_PERIOD_MACHINE_SPECIFIC

### carryOverBehavior

- 純据え置き単独の専用記述は今回直接固定していない。
- ただし設定変更を伴わない電源OFF→ONの機種専用契約として天井ゲーム数・内部状態の引継ぎが明記されている。
- carryOverOnly wording beyond power-cycle contract: **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 単純電源OFF→ONでは **天井ゲーム数引き継ぎ**。
- **内部状態引き継ぎ**。
- CZ・ART・ボーナス中以外では液晶を **港町ステージ** へ移す。
- よって港町スタートだけでは設定変更と単純電源再投入を判別できない。
- confidence: ANALYSIS_HIGH_PERIOD_MACHINE_SPECIFIC

### gameCounterReset

- settingChange: **RESET_CONFIRMED**。
- powerCycleOnly: **CARRY_OVER_CONFIRMED**。
- pureCarryOverWithoutPowerCycle: **UNVERIFIED_AFTER_RESEARCH_AS_SEPARATE_CONTRACT**。

### ceilingAfterReset

- 通常天井: **ビリーボーナス以外のボーナス間1400G**。
- 設定変更時は進捗リセット。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 本機はゲーム数解除モード型ではなく、resetBehavior上重要なのは通常/高確/白夜ショート等の内部状態再抽選。
- 朝一専用ゲーム数モード: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

設定変更時の状態振り分け:

| 設定 | 通常 | 高確 | 白夜ショート |
|---|---:|---:|---:|
| 1 | 80.1% | 18.3% | 1.6% |
| 2 | 80.1% | 18.3% | 1.6% |
| 3 | 80.1% | 18.3% | 1.6% |
| 4 | 63.5% | 33.3% | 3.1% |
| 5 | 75.4% | 18.3% | 6.3% |
| 6 | 63.5% | 33.3% | 3.1% |

- 設定4/6は高確スタート約1/3、設定5は白夜ショート6.3%と朝一状態に設定差がある。
- confidence: ANALYSIS_HIGH_PERIOD_MACHINE_SPECIFIC_NUMERIC

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時に状態再抽選が行われ、設定4/6では高確 **33.3%**、設定5では白夜ショート **6.3%** など公開された朝一状態振り分けが存在。
- 固定短縮天井や設定変更だけのART確定恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日ボーナス間ハマリの1400G天井進捗が設定変更で消えるため、宵越し天井狙いには不利。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 設定変更でも電源OFF→ONでも、通常時は港町ステージへ移行するため、**港町スタート単独は変更判別材料にならない**。
- 本機固有のリールガックン/初期出目による変更判別は、表記揺れ・「ガックン/出目/朝一/設定変更判別」で再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeStateDistribution: **CONFIRMED**（上表）。
- resetSpecificCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetOnlyHitRateWithinSpecificGames: **NONE_CONFIRMED_AFTER_RESEARCH**。
- powerCycleCounterCarryOver: **CONFIRMED**。

## sources

取得日: **2026-09-06**

1. ユニバーサルエンターテインメント公式「緑ドン～キラメキ！炎のオーロラ伝説～」
   - https://www.universal-777.com/product/slot/midoridon_aurora/
   - エレコ、5号機、ボーナス+ART、2013年8月発売、2種類ART/V-RUSH。
   - confidence: OFFICIAL

2. ユニバーサルエンターテインメント/AtPress 発表（2013-05-21）
   - https://www.atpress.ne.jp/news/35711
   - エレコ新機種として発表、2種類ART、大航海/ロケット大航海/バイキングラッシュ。
   - confidence: OFFICIAL_PRIMARY_RELEASE

3. パチ＆スロ必勝本「基本スペック」
   - https://p.hisshobon.jp/machine/2246/1/41041
   - 2013-08-05導入、設定別ボーナス合算/BIG/REG/ART初当たり/機械割。
   - confidence: ANALYSIS_HIGH_PERIOD

4. パチ＆スロ必勝本「天井&設定変更」
   - https://p.hisshobon.jp/machine/2246/1/41654
   - ボーナス間1400G天井、設定変更時天井Gリセット/状態再抽選/港町、設定別状態振り分け、電源OFF→ON時天井G/状態引継ぎ。
   - confidence: ANALYSIS_HIGH_PERIOD_MACHINE_SPECIFIC

5. パチ＆スロ必勝本「ART概要」
   - https://p.hisshobon.jp/machine/2246/1/41103
   - ART純増約1.7枚/G、30/50/100G、CZ/ART構造。
   - confidence: ANALYSIS_HIGH_PERIOD

6. P-WORLD「緑ドン～キラメキ!炎のオーロラ伝説～」
   - https://www.p-world.co.jp/machine/database/7108
   - BIG約206枚、REG54枚、ビリーボーナス約14枚、ART 30/50/100G+α・約1.7枚/G。
   - confidence: INDUSTRY_DB

7. K-Navi「緑ドン ～キラメキ！炎のオーロラ伝説～」
   - https://p-kn.com/slot/1875/
   - 2013-08-05ホール導入開始、エレコ。
   - confidence: ANALYSIS_DB

8. 中一商事 実機情報
   - https://www.nakaiti.com/html/sEleco088.html
   - 型式名「緑ドン3-D」、5号機、ART基本構造。
   - confidence: RETAIL_MACHINE_IDENTITY_SINGLE

## missingFields

- baseGamesPer50
- 純据え置きだけを独立定義した内部状態/天井契約（電源OFF→ON契約は確認済み）
- 本機固有のガックン/初期出目変更判別

## conflicts

- 後年回顧資料の一部にART純増約1.5枚/G、BIG約204/208枚等の丸め・表記差がある。2013当時の必勝本/P-WORLDで **約1.7枚/G、BIG約206枚** が一致するため本線値はこちらを採用し、別定義値を平均しない。
- 2025年スマスロ「緑ドン VIVA!情熱南米編 REVIVAL」は別機種。検索結果に大量混入する800Gリセット天井、50%高確、約33.2G/50枚、有利区間情報は本2013年機へ転記しない。
