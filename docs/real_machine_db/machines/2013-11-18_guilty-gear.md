# パチスロ ギルティギア

machineName: パチスロ ギルティギア
aliases: ギルティギア / GUILTY GEAR
manufacturer: D-light / ディ・ライト
releaseDate: 2013-11-18
releaseDatePrecision: exact_day
modelName: ギルティギアヴァステッジXT

generation: 5号機
systemType: ART / 擬似ボーナス / 周期CZ / 天井
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_WITH_CONFLICTS

## identity

- ディ・テクノ当時プレスリリースで実機全国導入開始2013-11-18を確認。
- パチビー / K-Naviでもホール導入開始2013-11-18で一致。
- P-WORLDでD-light、5号機ART機として確認。
- confidence: PRIMARY_PLUS_INDUSTRY_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 98.0% |
| 2 | 99.4% |
| 3 | 101.1% |
| 4 | 104.4% |
| 5 | 107.3% |
| 6 | 111.6% |

- K-Navi / 5号機クロニクル / 後年解析整理で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### GUILTY BONUS

| 設定 | 初当たり |
|---|---:|
| 1 | 1/378 |
| 2 | 1/364 |
| 3 | 1/347 |
| 4 | 1/306 |
| 5 | 1/302 |
| 6 | 1/261 |

### REG

| 設定 | 初当たり |
|---|---:|
| 1 | 1/580 |
| 2 | 1/560 |
| 3 | 1/560 |
| 4 | 1/518 |
| 5 | 1/520 |
| 6 | 1/481 |

### ボーナス合算

| 設定 | 初当たり |
|---|---:|
| 1 | 1/229 |
| 2 | 1/220 |
| 3 | 1/214 |
| 4 | 1/192 |
| 5 | 1/191 |
| 6 | 1/169 |

### ART初当たり

| 設定 | K-Navi | 後年解析整理 |
|---|---:|---:|
| 1 | 1/750 | 1/749.8 |
| 2 | 1/713 | 1/712.5 |
| 3 | 1/665 | 1/664.6 |
| 4 | 1/594 | 1/593.5 |
| 5 | 1/518 | 1/517.5 |
| 6 | **1/436** | **1/481.0** |

- 設定1～5は丸め整合。
- 設定6だけ1/436と1/481.0で丸め差を超えるため **CONFLICT**。平均しない。
- ボーナス+ART合算は両系統で 1/175 / 168 / 162 / 145 / 139 / 122。
- confidence: CONFLICT_SETTING6_ONLY

## baseGamesPer50

- 当時販売系スペック資料で **約32.5G/1000円（50枚相当）**。
- 複数の高信頼直接表までは固定できなかったため **ANALYSIS_SINGLE** として保持。
- confidence: ANALYSIS_SINGLE

## netIncrease

- ART「ブラストドライブ」: **1セット40G + 継続バトル7G、純増約2.4枚/G**。
- 最大継続率80%。ゲーム数上乗せ+継続抽選型。
- パチビー / K-Navi / パチマガスロマガ / P-WORLDで整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- PREMIUM BONUS: 約275枚 + ART。
- SUPER GUILTY BONUS: 約240枚（擬似ボーナス100G）。
- GUILTY BONUS: 約120枚（擬似ボーナス50G）。
- REGULAR BONUS: 約60枚（擬似ボーナス25G）。
- K-Navi / パチマガスロマガ / P-WORLDで整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は「ドライブシステム」の周期管理。
- 周期は最大200G、チャンス役による短縮があり平均到達は約90G。
- 周期到達でCZ「審判の門」、そこから「ヘブンオアヘル」を経て擬似ボーナスを狙う。
- 完全再現用の周期短縮内部抽選テーブルは対象外。
- confidence: PRIMARY_PLUS_ANALYSIS_MULTI_SOURCE

## ceiling

- 通常時天井: **ボーナス＆ART間999G**。
- 天井到達時はART確定、ART継続率60/70/80%の優遇系列（50/25/25%とする解析）。
- 設定変更後は後述の当時攻略解析で **555G** とされる。
- confidence: ANALYSIS_MULTI_SOURCE_FOR_999G__RESET_555G_ANALYSIS_SINGLE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_SPECIFIC_555G_ANALYSIS_SINGLE__OTHER_CARRY_CONTRACTS_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 当時攻略資料に **「設定変更時は555G」** のリセット専用天井情報あり。
- 通常ボーナス＆ART間999Gとは分離する。
- 設定変更時の周期ゲーム数、CZ進捗、内部状態の初期化/再抽選契約は直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 555Gは単一攻略系統のため **ANALYSIS_SINGLE**。メーカー確定値として格上げしない。

### carryOverBehavior

- 純据え置き時のボーナス＆ART間天井進捗、周期進捗、内部状態の保持契約は、検索語・資料系統を変えて再探索したが本機固有の直接根拠を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動からKEEPを推測しない。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ON時の天井G、周期、内部状態の保持/初期化は **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと電源OFF→ONを同義扱いしない。

### gameCounterReset

- setting change: **RESET_TO_RESET_SPECIFIC_CEILING_555G_ANALYSIS_SINGLE**。
- carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常: ボーナス＆ART間999G。
- 設定変更時: **555G_ANALYSIS_SINGLE**。
- 解析記事は2013-11-19時点の当時資料で、推測要素を含む旨も明記されているため信頼度を限定。

### modeAfterReset

- 本機は周期CZ型だが、設定変更専用の周期振り分け/モード再抽選数値は **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 高低状態・CZ進捗等の設定変更時初期状態は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後天井555Gが正しければ、通常999Gに対して短縮恩恵。
- ただし単一当時攻略系統のため **ANALYSIS_SINGLE**。

### resetPenalties

- 本機固有の設定変更時不利数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、液晶、周期表示等を用いた高信頼の変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ホール側の対策を含む一般論は収録しない。

### publicMorningNumbers

- **555G**: 設定変更時天井として当時攻略資料が公開。
- その他の設定変更専用周期振り分け、状態振り分け、朝一当選率等は **NONE_CONFIRMED_AFTER_RESEARCH**。

## missingFields

- 設定6 ART初当たり: CONFLICT 1/436 vs 1/481.0。
- baseGamesPer50: 32.5G/50枚はANALYSIS_SINGLE。
- 純据え置き時の天井/周期/状態保持: UNVERIFIED_AFTER_RESEARCH。
- 単純電源OFF→ON時の天井/周期/状態: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の周期/内部状態初期化詳細: UNVERIFIED_AFTER_RESEARCH。
- 変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- ART初当たり設定6の1/436（K-Navi）と1/481.0（後年解析整理）は平均しない。
- REG設定6の1/481とART設定6の競合値1/481.0は同じ数値だが別指標。混同しない。
- 通常天井999Gと設定変更時555Gを分離。
- 「ヴァステッジXT」のゲーム作品側発売日表記とホール実機導入日を混同しない。

## sources

取得日: 2026-09-06

- ディ・テクノ当時プレスリリース: https://www.atpress.ne.jp/news/40700 — 実機全国導入2013-11-18、平均周期約90G。
- パチビー: https://www.pachibee.jp/machines/about/213100003 — 導入日、5号機ART、40G+継続バトル7G、純増約2.4枚/G、最大200G周期。
- K-Navi: https://p-kn.com/slot/1942/ — 導入日、ボーナス/ART初当たり、機械割、ART構造、周期CZ。
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/03/a.php — ART40G+7G、純増約2.4枚/G、各擬似ボーナス枚数。
- P-WORLD: https://www.p-world.co.jp/machine/database/7207 — 5号機ART、純増約2.4枚/G、ボーナス枚数、最大継続率80%。
- すろぱちくえすと機種まとめ: https://www.slopachi-quest.com/kisyubetsu/guilty-gear/ — 999G天井、機械割、ART初当たり精密系列（設定6 1/481.0）。
- すろぱちくえすと当時記事: https://www.slopachi-quest.com/article/379981997-html/ — 通常999G、設定変更時555G、天井ART継続率解析。記事自身の推測注意書きを保持。
- スロスター当時スペック整理: https://ameblo.jp/slostar/entry-11612735280.html — ベース約32.5G/1000円、最大200G周期、平均約90G。
- 5号機クロニクル: https://5goki.com/daiichi — 機械割98.0/99.4/101.1/104.4/107.3/111.6%。

## provenance

- collectedBy: Relay5-QA
- collectedAt: 2026-09-06
- coreConfidence: HIGH_WITH_SETTING6_ART_CONFLICT_AND_BASE_SINGLE_SOURCE
- resetConfidence: PARTIAL__RESET_555G_ANALYSIS_SINGLE
- resetQaSeparatedFromCoreStatus: true
