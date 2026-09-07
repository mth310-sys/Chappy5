# 吉宗～極～

machineName: 吉宗～極～
manufacturer: 大都技研
releaseDate: 2015-06-08
releaseDatePrecision: exact_hall_start_multi_source
releaseDateNote: HAZUSE、K-Navi、パチマガスロマガ系、当時新台資料で2015-06-08ホール導入開始が一致。直営店テスト導入版とは分離し、正式量産版を対象とする。
generation: 5号機
systemType: AT / 疑似ボーナス搭載 / ゲーム数管理
modelName: ヨシムネH2A4
inspectionNumber: 3S1093
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.2% |
| 2 | 98.2% |
| 3 | 100.6% |
| 4 | 103.3% |
| 5 | 106.5% |
| 6 | 110.9% |

- パチマガスロマガ精密値 96.17 / 98.17 / 100.58 / 103.30 / 106.45 / 110.89% を小数1桁へ丸めた比較用表記。
- HAZUSE、K-Navi等の掲載値とも整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

疑似ボーナス初当たり:

| 設定 | ボーナス初当たり |
|---:|---:|
| 1 | 1/408.22 |
| 2 | 1/385.46 |
| 3 | 1/383.13 |
| 4 | 1/347.40 |
| 5 | 1/328.33 |
| 6 | 1/305.03 |

AT初当たり:

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/1452.34 |
| 2 | 1/1344.04 |
| 3 | 1/1273.11 |
| 4 | 1/1126.27 |
| 5 | 1/1081.79 |
| 6 | 1/867.27 |

ボーナス+AT合算:

| 設定 | 合算 |
|---:|---:|
| 1 | 1/318.7 |
| 2 | 1/299.5 |
| 3 | 1/294.5 |
| 4 | 1/265.5 |
| 5 | 1/251.9 |
| 6 | 1/225.7 |

- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31.67G/50枚**。
- 別解析の約31G表記と整合するため、精密掲載値31.67Gをcanonicalとして保持。
- confidence: ANALYSIS_HIGH

## netIncrease

- AT「爆走大盤振舞」純増 **約2.8枚/G**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: 初期獲得 **320枚+α**。
- REG: **20G**。
- AT「爆走大盤振舞」: **初期80G+α**。
- 解析上のBIG期待約700枚、AT期待約1400枚という値は期待獲得であり、基本単位とは分離して扱う。

## modeSpecificMinimumData

- ボーナス間ゲーム数管理。途中でATを挟んでもボーナス天井ゲーム数はリセットされない。
- 通常A / 通常B / 天国準備の規定天井は **1400G**、天国A / 天国Bは **128G**。前兆を経て告知される。
- 別資料の最大 **1432G** は前兆込み最大到達表現であり、1400G規定値と定義を分離する。CONFLICT扱いしない。
- 1000G以降の深いハマリからの初当たりはBIG確定とする解析あり。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_AFTER_MACHINE_SPECIFIC_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **ボーナス間天井までのゲーム数をリセット**。
- 「吉宗～極～ / 吉宗極 / ヨシムネH2A4 / 大都技研」×「設定変更 / リセット / 朝一 / 据え置き / モード移行 / 電源OFF ON / 電断 / ガックン」で再探索。
- 2013年旧作「吉宗」の設定変更時モード振り分けが多数検索されるが、別スペックのため本機へ転記しない。

### carryOverBehavior

- 本機固有資料で、据え置き時のボーナス天井G・モード・内部状態を一式明示した直接契約は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 宵越しを前提とする実戦資料は存在するが、物差しDBでは直接仕様の根拠として一般化しない。

### powerCycleBehavior

- 設定変更なしの **純電源OFF→ONのみ**について、本機固有の天井G・モード・内部状態の直接契約を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きや旧作仕様から推定しない。

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- ボーナス間天井進捗は0から再スタート。
- AT当選のみではボーナス間天井進捗をリセットしない。
- 据え置き / 純電断: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 設定変更で天井カウンタはリセットされる。
- 本機固有の **設定変更専用固定短縮天井** は複数検索語・資料系統の再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常モード系の規定上限1400G、天国系128Gは通常モード仕様であり、リセット専用短縮値とは扱わない。

### modeAfterReset

- 本機固有の設定変更時モード振り分け数値は `UNVERIFIED_AFTER_RESEARCH`。
- 検索で出る通常A/B/天国の設定変更振り分けの一部は2013年旧作「吉宗」の値であるため不採用。
- モード再抽選の完全な契約も本機固有資料で安全に固定できず、推定しない。

### stateAfterReset

- 設定変更後の高確/低確等の内部状態について、本機固有の直接数値・確定契約を安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更専用の固定天井短縮や公開された確定恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一のキャラクターアイコンを利用した天国狙いの当時立ち回り情報はあるが、本機の設定変更確定恩恵・変更判別値としては固定しない。

### resetPenalties

- 設定変更により前日までのボーナス間天井進捗が消去されること自体は確認済み。
- それ以外の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 朝一キャラクターアイコンは当時の立ち回り材料として扱われたが、設定変更確定判別とはしない。
- 本機固有のリールガックン、初期出目、液晶表示による確定的な変更判別は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- settingChangeGameCounter: **RESET_TO_START**。
- resetSpecificShortCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`。
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`。
- 旧作2013年「吉宗」の設定変更時モード数値は **NOT_TRANSFERRED_DIFFERENT_MACHINE**。

## source / definition control

- 正式量産版「吉宗～極～」と、過去の直営店テスト導入版を混同しない。
- 1400Gは規定天井、1432Gは前兆込み最大到達表現として定義分離。
- 2013年旧作「吉宗」の設定変更モード振り分けを本機へ流用しない。
- BIG約700枚 / AT約1400枚は期待獲得値として、初期320枚 / 80G+αと分離する。

## sources

取得日: 2026-09-07

1. HAZUSE — https://hazuse.com/machine/pachislot/3S1093/
   - 型式ヨシムネH2A4、検定3S1093、2015-06-08、設定別合算/機械割、AT性能。
   - confidence: ANALYSIS_HIGH_PERIOD_DATABASE
2. K-Navi — https://p-kn.com/slot/2272/
   - 2015-06-08ホール導入、基本スペック。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
3. パチマガスロマガ ボーナス確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/59/h.php
   - 設定別ボーナス、AT、合算、PAYOUT精密値。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
4. パチマガスロマガ 50枚ベース — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/59/c.php
   - 約31.67G/50枚。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
5. パチマガスロマガ 基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/59/a.php
   - BIG/AT基本性能。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
6. 必勝本 — https://p.hisshobon.jp/machine/2581/1/52226
   - 導入日、設定別初当たり、機械割。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
7. 必勝本 システム — https://p.hisshobon.jp/machine/2581/1/52373
   - モード構造、基本ゲーム性。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
8. 期待値見える化 — https://slotjin.com/zone/yoshimunekiwami/
   - モード別天井、設定変更時天井Gリセット、ATを挟んだ際のボーナス天井扱い。
   - confidence: ANALYSIS_SINGLE_DETAILED_PERIOD_SOURCE
9. ちょんぼりすた — https://chonborista.com/slot/daito-slot/7880/
   - 2015-06-08、約31G/50枚、純増約2.8枚/G等の照合。
   - confidence: ANALYSIS_HIGH_SECONDARY
10. 2015年導入新台まとめ — https://slotnews777.blog.fc2.com/blog-entry-2348.html
   - 2015-06-08同日群と量産版全国販売開始の補助確認。
   - confidence: ANALYSIS_SINGLE_SECONDARY

## missingFields

- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset distribution/contract: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- machine-specific definitive resetDetection: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- NONE_NUMERIC_CORE_CONFIRMED.
- 天井1400G / 最大1432Gは前兆込み有無の定義差でありCONFLICTではない。
- 2013年旧作のreset数値は別機種データとして除外。
