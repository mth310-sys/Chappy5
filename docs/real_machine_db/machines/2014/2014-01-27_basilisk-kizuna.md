# バジリスク～甲賀忍法帖～絆

machineName: バジリスク～甲賀忍法帖～絆
aliases: バジリスク絆 / バジ絆 / 初代絆
manufacturer: エレコ
modelName: バジリスク絆MK
approvalNumber: 3S0950
releaseDate: 2014-01-27
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: 擬似ボーナス + AT
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- K-Navi、HAZUSE、ALL7、一撃はいずれもホール導入日/導入予定日を **2014-01-27** とする。
- 2013-11-29のグリーンべるとは2014年1月下旬納品開始予定と報道しており整合する。
- HAZUSEで型式名 **バジリスク絆MK**、検定番号 **3S0950** を確認。青森県公安委員会告示転載資料でも同型式・同検定番号を確認した。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE + INDUSTRY_SUPPORT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.3% |
| 2 | 98.6% |
| 3 | 102.0% |
| 4 | 106.6% |
| 5 | 112.1% |
| 6 | 119.2% |

- 一撃、ちょんぼりすた、複数攻略資料で上記系列が一致。
- 一部二次資料には97.46 / 98.43 / 102.07 / 106.46 / 111.90 / 118.82%という精密表記があるため、定義/算出差の可能性を考慮し `CONFLICT_MINOR_PAYOUT_DECIMAL_SERIES` として safeguards に残す。平均化しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT_MINOR_FOR_ALTERNATE_DECIMAL_SERIES

## initialHitBySetting

### 通常時BC初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/139.4 |
| 2 | 1/138.7 |
| 3 | 1/137.9 |
| 4 | 1/130.6 |
| 5 | 1/130.1 |
| 6 | 1/118.6 |

### AT「バジリスクタイム」初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/441.3 |
| 2 | 1/377.9 |
| 3 | 1/403.4 |
| 4 | 1/303.9 |
| 5 | 1/343.1 |
| 6 | 1/245.1 |

- 一撃、ちょんぼりすた、スロパチネット等で主要値を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G/50枚**。
- みんスロ、複数攻略整理資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「バジリスクタイム」: **約2.8枚/G**。
- グリーンべると、一撃、HAZUSE等で一致。
- confidence: INDUSTRY + ANALYSIS_HIGH

## basicPayout

- 擬似ボーナス「バジリスクチャンス（BC）」: **ベルナビ8回、平均約40枚**。
- プレミアムBC: **ベルナビ20回、約100枚 + AT突入確定**。
- AT「バジリスクタイム」: 「追想の刻」+「争忍の刻」で構成される1セット**約40G**、ループ率25/33/50/66/80%系。
- 物差し用途ではBC約40枚、AT約2.8枚/G・約40G/セットを基本性能として採用する。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はBC当選を経由してAT「バジリスクタイム」を目指す構造。
- BCスルー回数と内部モードA～Eをテーブルで管理。モードD/E滞在時はBC当選でAT確定。
- 通常時の全モード移行テーブル・全小役別昇格率は実機完全再現用のため本DBの必須収集対象外。ただし設定変更時専用値はresetBehaviorに保存する。

## ceiling

- ゲーム数天井: **BC間500G**でBC当選。
- BC回数天井: AT非当選BCが最大10回連続した場合、**11回目のBCでAT確定**。実際の規定回数はテーブルにより1～11回。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_COUNTER_MODE_STATE_NUMBERS_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **BC間ゲーム数天井をリセット**。
- **BC回数天井（スルー回数）もリセットして再抽選**。
- 内部モードをリセット/再抽選し、設定変更時専用のモード・テーブル振り分けが存在。
- 内部状態も再抽選。設定変更時は全設定共通で高確以上へ移行する公開数値がある。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は **BC間天井ゲーム数およびBCスルー回数を引き継ぐ**とする攻略資料を確認。
- 内部モード/状態まで含む据え置き時の完全な直接契約は、設定変更解析ほど明瞭な一次・当時資料を固定できなかったため、天井/スルー以外は **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_SINGLE_DIRECT_FOR_COUNTER_CARRY + UNVERIFIED_FOR_FULL_INTERNAL_STATE

### powerCycleBehavior

- ちょんぼりすたの本機専用朝一表で、設定変更なしの **電源ON・OFFは天井・内部状態を引き継ぐ**と明記。
- モード/テーブルの電源OFF→ON時の完全な直接記述は今回の現存本文では固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 後継6号機「絆2」やスマスロ「天膳」の電源仕様は別機種のため流用しない。
- confidence: ANALYSIS_SINGLE_DIRECT_FOR_CEILING_AND_STATE_POWER_CYCLE

### gameCounterReset

- 設定変更時: **RESET_CONFIRMED** — BC間500G天井をリセット、BCスルー回数天井もリセットして再抽選。
- 据え置き時: **KEEP_CONFIRMED_ANALYSIS** — BC間G数・スルー回数を引き継ぐ。
- 電源OFF→ONのみ: **KEEP_CONFIRMED_FOR_CEILING**。

### ceilingAfterReset

- BC間ゲーム数天井そのものは通常と同じ **500G**。設定変更専用の短縮ゲーム数天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一方、BC回数天井は設定変更時に再抽選され、1/3/5/7/9/10/11回のいずれかが選ばれる。これは公開された朝一数値としてnumericResetDataへ保存。

### modeAfterReset

- 設定変更時は内部モードを再抽選。
- 公開モード振り分け:

| モード | 設定1 | 設定2 | 設定3 | 設定4 | 設定5 | 設定6 |
|---|---:|---:|---:|---:|---:|---:|
| A | 41.5% | 40.5% | 42.1% | 41.1% | 42.7% | 41.7% |
| B | 25.5% | 26.3% | 25.1% | 25.9% | 24.7% | 25.5% |
| C | 25.0% | 25.2% | 24.8% | 25.0% | 24.6% | 24.8% |
| D | 7.0% | 7.0% | 7.0% | 7.0% | 7.0% | 7.0% |
| E | 1.0% | 1.0% | 1.0% | 1.0% | 1.0% | 1.0% |

- D/Eなら次回BC当選時AT確定。朝一客行動に影響するためv0.7例外として設定変更時数値のみ保存する。
- パチマガスロマガと後年解析整理で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset

- 設定変更時は内部状態を再抽選。
- 全設定共通で **高確以上スタート29.4%**。
- 内訳（低確を除いた当選側の公開振り分けとして解析ページ掲載）:
  - 高確15G 62.43%
  - 高確35G 20.81%
  - 高確55G 5.20%
  - 高確無限 0.52%
  - 超高確15G 9.37%
  - 超高確25G 1.04%
  - 超高確35G 0.52%
  - 超高確無限 0.10%
- 別資料では全体比として低確70.6%、高確15G18.35%、高確35G6.12%等の表現があり、29.4%高確以上という総量と整合する。定義を混ぜない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時はモードD **7%** + E **1%** = **8%**で、次回BC当選時AT確定モードから開始。
- 設定変更時は全設定共通 **29.4%**で高確以上スタート。
- BC回数天井再抽選で **1回天井8.0%**（全設定共通）が存在し、朝一のAT到達を早める可能性がある。
- ただしBC間ゲーム数天井が500Gより短くなる固定短縮は確認されない。

### resetPenalties

- 据え置きなら蓄積していたBC間G数・BCスルー回数を設定変更で失う点は、朝一狙い上の主要な不利要素。
- その他の設定変更専用ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 朝一リールガックンは **変更判別に使えない**とする本機専用解析を確認。
- 朝一液晶は甲賀卍谷、液晶リールは「リプ・リプ・ベル」とする攻略整理資料があるが、据え置き/変更を外見だけで確定判別する材料にはしない。
- 実用的な変更判別は、前日分を足した宵越しBC間500Gやスルー回数を超える/到達する挙動の確認が主。天井到達の前後はレア役による自力BC等を考慮し確定扱いに注意。
- confidence: ANALYSIS_MULTI_SOURCE_FOR_NO_GACKUN_AND_COUNTER_BASED_INFERENCE

### publicMorningNumbers

#### 設定変更時 BC回数天井振り分け

| 天井回数 | 設定1 | 設定2 | 設定3 | 設定4 | 設定5 | 設定6 |
|---|---:|---:|---:|---:|---:|---:|
| 1回 | 8.0% | 8.0% | 8.0% | 8.0% | 8.0% | 8.0% |
| 3回 | 1.5% | 1.0% | 1.6% | 1.1% | 1.7% | 1.2% |
| 5回 | 1.5% | 1.0% | 1.6% | 1.1% | 1.7% | 1.2% |
| 7回 | 1.5% | 1.0% | 1.6% | 1.1% | 1.7% | 1.2% |
| 9回 | 22.5% | 19.0% | 23.2% | 19.7% | 23.9% | 20.4% |
| 10回 | 60.5% | 66.5% | 59.1% | 65.1% | 57.7% | 63.7% |
| 11回 | 4.5% | 3.5% | 4.9% | 3.9% | 5.3% | 4.3% |

- 設定変更時モード振り分けは `modeAfterReset` に保存。
- 設定変更時高確以上スタート率 **29.4%**は `stateAfterReset` に保存。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## missingFields

- 据え置き時の内部モード/内部状態の完全保持契約: UNVERIFIED_AFTER_RESEARCH。
- 電源OFF→ONのみのモード/テーブル完全保持契約: UNVERIFIED_AFTER_RESEARCH。
- メーカー公式の設定変更解析値: 現存公開ページからは未回収。解析複数系統で照合。

## conflicts / safeguards

- 機械割は97.3 / 98.6 / 102.0 / 106.6 / 112.1 / 119.2%系列を複数解析一致値として採用。一部二次資料の97.46 / 98.43 / 102.07 / 106.46 / 111.90 / 118.82%は `CONFLICT_MINOR_PAYOUT_DECIMAL_SERIES` として保持し平均しない。
- BC間500G天井とBC回数天井は別管理。設定変更時に両方リセットされるが、500G自体が短縮天井になるわけではない。
- 設定変更時の29.4%は「高確以上スタート総率」。高確G数別の表は当選側の内訳表現と、全体比表現を混同しない。
- 「バジリスク絆2」（2020）、「Lバジリスク絆2 天膳 BLACK EDITION」（2023）の有利区間・電源仕様は別機種なので流用禁止。

## sources

取得日: 2026-09-06

- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/6230/greenbelt
- K-Navi: https://p-kn.com/slot/1983/
- ALL7 2014年1月導入一覧: https://www.all7.jp/plans/index/2014/01
- HAZUSE: https://hazuse.com/machine/pachislot/SX0055/
- HAZUSE basic: https://hazuse.com/machine/pachislot/SX0055/genre/201/
- 一撃: https://1geki.jp/slot/basilisk3/
- 一撃 BC概要: https://1geki.jp/slot/basilisk3/71/
- パチマガスロマガ 朝イチ・設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/93znmiulk/rs.php
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/bajirisk-kizuna/19817/
- CrankySeven: https://crankyseven.com/sp/basilisk-kizuna-pc.htm
- みんスロ: https://minslo.com/%E3%83%90%E3%82%B8%E3%83%AA%E3%82%B9%E3%82%AF%EF%BD%9E%E7%94%B2%E8%B3%80%E5%BF%8D%E6%B3%95%E5%B8%96%EF%BD%9E%E7%B5%86/
- モゲスロ 朝一判別: https://moge-site.com/archives/18250
- 期待値見える化 朝一リセット: https://slotjin.com/slot/basilisk3kizuna-reset/
- スロパチネット: https://slopachi-net.com/post-1350
- 公安委員会告示転載資料: https://manualzilla.com/doc/6595483/h25.12.26%EF%BC%8825%E5%B9%B412%E6%9C%88%E4%B8%AD%EF%BC%89
