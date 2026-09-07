# パチスロ百花繚乱サムライガールズ

machineName: パチスロ百花繚乱サムライガールズ
manufacturer: DAXEL
releaseDate: 2015-10-26
releaseDatePrecision: exact_hall_start_day_multi_source_with_regional_lag_note
generation: 5号機
systemType: 新基準AT / 周期減算 + 擬似ボーナス1G連
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- DAXELが2015-10-05に発表、業界媒体グリーンべると/日刊スポーツが翌日以降に報道。
- K-Navi、当時攻略資料、2015年導入一覧で全国ホール導入開始 **2015-10-26** を確認。
- ちょんぼりすたには「11月2日導入」表記があるが、別当時資料には「一部地域では翌週11月2日」とあるため、全国最速の基準日を2015-10-26とし地域差を注記する。
- 2021年エンターライズ版「パチスロ 百花繚乱 サムライガールズ」と同名近似のため、2021年6.1号機の数値（純増3.5枚/G、38.7G/50枚、機械割98.1〜111.1%等）は本レコードへ混入させない。

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 99.5% |
| 3 | 100.7% |
| 4 | 104.7% |
| 5 | 107.7% |
| 6 | 113.1% |

- すろぱちくえすと、ちょんぼりすた、5号機クロニクルで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

擬似ボーナスはS-BIG / BIG / REG相当の3系統。公開値（1G連を含む）:

| 設定 | S-BIG | BIG | REG | 合算目安 |
|---:|---:|---:|---:|---:|
| 1 | 1/1975.8 | 1/394.6 | 1/509.1 | 約1/200 |
| 2 | 1/1933.9 | 1/361.7 | 1/461.4 | 約1/184 |
| 3 | 1/1910.1 | 1/340.9 | 1/434.3 | 約1/174 |
| 4 | 1/1736.4 | 1/297.5 | 1/376.4 | 約1/152 |
| 5 | 1/1592.0 | 1/281.2 | 1/347.5 | 約1/142 |
| 6 | 1/1486.5 | 1/242.4 | 1/300.7 | 約1/123 |

- すろぱちくえすとに精密値、ちょんぼりすたに丸め値/合算を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約47G/50枚**。
- すろぱちくえすと、ちょんぼりすた、2015年当時の狙い目資料で一致。
- 2021年同名機の約38.7G/50枚は別機種なので不採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- 擬似ボーナスAT: **約3.0枚/G**。
- K-Navi、すろぱちくえすと、ちょんぼりすた、当時導入記事で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ハーレムボーナス: **50G+α**、純増約3.0枚/G、1G連期待度約40%。
- 超ハーレムボーナス: **50G+α**、純増約3.0枚/G、1G連期待度約80%。
- ハーレムチャンス: **1セット ベルナビ10回+α**、最大7セット。
- 本DBではボーナス中の全ストック抽選/小役別詳細は収集しない。

## modeSpecificMinimumData
- 通常時は周期減算システム。周期到達から前兆CZ「集結の刻」または自力CZ「決戦の刻」等を経由して擬似ボーナスを目指す。
- 通常天井: **ボーナス間999Gでボーナス確定**。
- 周期側は通常A/通常B/天国系を持ち、設定変更時は通常A固定かつ専用の周期天井振り分けがある。
- 別天井として、999G到達前に10周期目へ入りEX周期を減算し切った場合は超ハーレムボーナスとなる解析がある。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_CORE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井をRESET**。
- **内部モードを再抽選**。
- **ステージを再抽選**。
- リセット時の内部モードは **通常A確定**。
- リセット専用の周期天井振り分けが存在し、最大7周期。
- 設定変更時の超高確スタート率も公開されている。

### carryOverBehavior
- 設定変更なしで前日状態を据え置く場合、公開されている「電源ON/OFF」比較では天井・内部モード・ステージが引継ぎ側。
- ホールの据え置き操作と純電断は概念上分離するが、公開比較で確認できる朝一主要要素については **CARRYOVER_SUPPORTED**。

### powerCycleBehavior
- **天井: CARRYOVER**。
- **内部モード: CARRYOVER**。
- **ステージ: CARRYOVER**。
- 設定変更時とは明確に異なる。

### gameCounterReset
- settingChange: **RESET**。
- powerCycle: **CARRYOVER**。
- carryOver: **CARRYOVER_SUPPORTED**。
- 対象は999G天井と周期進行の朝一主要管理。内部実装の全カウンタ単位までは過剰推定しない。

### ceilingAfterReset
- 通常ゲーム数天井: **999G**。
- 設定変更後は周期側が専用振り分けになり、**最大7周期**。
- 周期天井振り分け（全設定共通）:

| 周期 | 振り分け |
|---:|---:|
| 1周期 | 37.7% |
| 2周期 | 1.6% |
| 3周期 | 24.9% |
| 4周期 | 1.6% |
| 5周期 | 16.3% |
| 6周期 | 1.6% |
| 7周期 | 16.3% |

- 1周期天井が約38%と高く、朝一狙いの主要恩恵。
- 「7周期到達時に超ハーレム確定か」は当時資料でも不明とされるため、通常の999G/EX周期恩恵と混同しない。

### modeAfterReset
- 設定変更時: **通常A確定**。
- 電源ON/OFFのみ: **内部モード引継ぎ**。
- 通常時の全モード移行率は本ミッション範囲外のため収集しない。

### stateAfterReset
- 設定変更時、別の内部状態として **超高確スタート**抽選がある。
- 設定1〜3: **25.0%**。
- 設定4〜6: **30.5%**。
- 電源ON/OFFのみのステージは引継ぎ。内部高確の全状態遷移契約は収集対象外。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- リセット時は通常A固定だが、周期天井が専用振り分けとなり **1周期37.7%**、最大7周期。
- 設定変更時は超高確スタート率が設定1〜3で25.0%、設定4〜6で30.5%。
- この2点は客側の朝一稼働判断に直接影響するためnumericResetDataへ保存。

### resetPenalties
- 前日999G天井/周期進行や有利な内部モードを持っていた場合、設定変更でリセットされるため宵越し価値を失う。
- リセット時モードは通常A固定なので、前日高モード保持時には不利となり得る。

### resetDetection
- 当時資料で、**朝一0GでNeXTチャンス中の表示/デモ画面へ戻らず固まった状態は据え置き濃厚と考察**されている。
- これは攻略サイトの実戦観察ベースであり確定契約ではないため **ANALYSIS_SINGLE_OBSERVATIONAL** とする。
- 本機固有のガックンによる確定判別は、機種名/DAXEL/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/NeXTチャンスを組み替えて再探索したが、直接固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- reset mode: **通常A 100%**。
- reset cycle ceiling: **1周期37.7 / 2周期1.6 / 3周期24.9 / 4周期1.6 / 5周期16.3 / 6周期1.6 / 7周期16.3%**。
- reset super-high start: **設定1〜3 25.0% / 設定4〜6 30.5%**。
- power-cycle: 天井/内部モード/ステージ **CARRYOVER**。

## conflicts
- `RELEASE_DATE`: K-Navi、すろぱちくえすと、2015年導入一覧は **2015-10-26**。ちょんぼりすたは **2015-11-02**。当時別資料に「一部地域では翌週11/2」とあるため、全国最速基準を10/26として地域差を保持。
- `SAME_NAME_2021_CONTAMINATION_RISK`: 2021年エンターライズ6.1号機は同名近似だが別機種。機械割98.1〜111.1%、初当り1/233.0〜1/132.1、38.7G/50枚、純増3.5枚/G等を2015年DAXEL機へ流用しない。

## missingFields
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`。
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetectionガックン: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-08

1. グリーンべると — 周期減算に特化したアニスロ第3弾を発表（2015-10-06）
   - https://web-greenbelt.jp/00008122/
   - DAXEL、2015-10-05発表、周期減算特化システム。
   - reliability: INDUSTRY
2. 日刊スポーツ / ニッカンアミューズメント — パチスロ百花繚乱サムライガールズ 発表（2015-10-07）
   - https://www.nikkansports.com/amusement/pachinko/news/1549594.html
   - DAXEL、発表会確認。
   - reliability: INDUSTRY
3. K-Navi — パチスロ百花繚乱サムライガールズ(2015年)
   - https://p-kn.com/slot/2375/
   - ホール導入開始2015-10-26、純増約3.0枚/G、ハーレムボーナス50G+α、ハーレムチャンス仕様。
   - reliability: ANALYSIS_HIGH
4. すろぱちくえすと — 百花繚乱サムライガールズ解析まとめ
   - https://www.slopachi-quest.com/kisyubetsu/hyakkaryouran-samuraigirls/
   - 2015-10-26、約47G/50枚、純増3.0枚/G、設定別S-BIG/BIG/REG、機械割、リセット周期天井振り分け。
   - reliability: ANALYSIS_HIGH
5. すろぱちくえすと — 天井恩恵・ヤメ時・天国示唆
   - https://www.slopachi-quest.com/article/hyakkaryouran-samuraigirls/
   - 999G天井、47G/50枚、導入日10/26。
   - reliability: ANALYSIS_HIGH
6. ちょんぼりすた — 百花繚乱サムライガールズ 全解析まとめ
   - https://chonborista.com/slot/daxel-slot/12286/
   - 機械割、疑似ボーナス確率、47G/50枚、999G天井、設定変更/電源ON-OFF比較、リセット通常A、周期天井振り分け、超高確スタート率。
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — DAXEL 5号機全機種一覧
   - https://5goki.com/daxel
   - 2015/10、機械割97.3〜113.1%。
   - reliability: ANALYSIS_SINGLE
8. 真パチスロ備忘録 — 百花繚乱サムライガールズ 狙い目情報追加＆微修正（2015-12-05）
   - https://sin-surobi.com/hyakkaryouransamurai/13372/
   - 999G、約47G/千円、リセット最大7周期、朝一NeXTチャンス/デモ状態による据え置き観察。
   - reliability: ANALYSIS_SINGLE_OBSERVATIONAL
9. 2015年導入のスロット新台情報まとめ
   - https://slotnews777.blog.fc2.com/blog-entry-2348.html
   - DAXEL、導入日2015-10-26、疑似ボーナスAT、純増約3枚/G。
   - reliability: ANALYSIS_SINGLE

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_REGIONAL_LAG_NOTE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- initialHitBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- netIncrease: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_HIGH
- carryOverBehavior: ANALYSIS_HIGH_DIRECT_POWER_COMPARISON
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_POWER_COMPARISON
- resetNumericData: ANALYSIS_HIGH
- resetDetection: ANALYSIS_SINGLE_OBSERVATIONAL / GACKUN_NONE_CONFIRMED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_VERIFIABLE_CORE
