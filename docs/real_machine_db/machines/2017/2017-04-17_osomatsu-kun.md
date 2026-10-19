machineName: パチスロ おそ松くん
manufacturer: D-light / ディ・ライト
releaseDate: 2017-04-17
recordNumber: 1069
generation: 5号機 / 5.5号機
systemType: A+ART / ゲーム数上乗せ型ART
formalModelName: パチスロおそ松くんS
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- DAIICHI公式製品ページで「パチスロ おそ松くん」を確認。
- パチビー、ちょんぼりすた、すろぱちくえすと、期待値見える化がD-light製・2017-04-17導入で一致。
- 中古実機流通資料で型式名 `パチスロおそ松くんS` を確認。
- 検定番号は機種名・型式名・D-light・検定通過等へ検索語/資料系統を変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: OFFICIAL_FOR_MACHINE_IDENTITY; ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE_DATE; ANALYSIS_SINGLE_FOR_FORMAL_MODEL_NAME

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.5% |
| 3 | 100.5% |
| 4 | 106.6% |
| 5 | 112.1% |
| 6 | 119.2% |
- ちょんぼりすた、すろぱちくえすと、期待値見える化で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ボーナス合算
| 設定 | ボーナス |
|---:|---:|
| 1 | 1/697 |
| 2 | 1/668 |
| 3 | 1/642 |
| 4 | 1/618 |
| 5 | 1/595 |
| 6 | 1/555 |

### ART初当たり
| 設定 | ART |
|---:|---:|
| 1 | 1/358 |
| 2 | 1/335 |
| 3 | 1/344 |
| 4 | 1/252 |
| 5 | 1/238 |
| 6 | 1/196 |
- ちょんぼりすた、期待値見える化、P-WORLDで設定3を含め `1/344` で一致。
- すろぱちくえすとの記事上部表には設定3 ART `1/334` の記載がある一方、同ページ後段スペック表では `1/344`。単一ページ内誤記とみられるが平均化せず `CONFLICT_ART_SETTING3_334_VS_344` を保持し、複数独立資料一致の1/344をcanonicalとする。

### PREMIUMロボ松RUSH
| 設定 | PRR |
|---:|---:|
| 1 | 1/7281 |
| 2 | 1/6553 |
| 3 | 1/5957 |
| 4 | 1/5461 |
| 5 | 1/5041 |
| 6 | 1/4681 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONFLICT_ART_SETTING3

## baseGamesPer50
- 約36G/50枚。
- ちょんぼりすた、すろぱちくえすと、期待値見える化で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ツールドおフランス」: ボーナス込み約2.0枚/G。
- P-WORLD/パチビーも1Gあたり約2.0枚増加と掲載。
- ART単体純増とボーナス込み純増を分離できる直接資料は今回固定できないため、canonicalは公開定義どおり「ボーナス込み約2.0枚/G」。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- V図柄BIG BONUS: 306枚。
- 赤7図柄BIG BONUS: 204枚。
- PREMIUMロボ松RUSH: 36枚。突入時点でART濃厚、平均上乗せ約200GとP-WORLD/パチビーが掲載。
- ART「ツールドおフランス」: 基本30G+α、ゲーム数上乗せ型。
- ART開始時/ART中の「おそ松チャンス」は1セット6G、最大継続率89%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 第一天井: ART間666G → CZまたはART。
- 第二天井: ART間999G → ART。
- ボーナスを挟んでもART間天井ゲーム数は継続。
- CZ中・宝石チャレンジ等、内部天井G数が進まない区間があるため、データカウンタ上の実到達は999Gを超える場合がある。
- 111/222/333…のゾロ目G数で玉獲得/CZ・ART関連抽選が存在。
- 実機完全再現用の全周期抽選・全玉振り分けはSCOPE_EXCLUDED。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ART間天井ゲーム数: RESET。
- 設定変更後は天井G数を111/333/666/999Gから再抽選。
- 内部状態: RESELECT。
- CA玉: RESELECT（内部0〜9個）。
- 試練玉: RESELECT（内部0〜2個）。
- 朝一表示ステージ: 中央広場。
- 設定変更後の内部G数表示用オフセットは0〜110Gから振り分けられ、当日消化分との合算が111Gに到達した時点で液晶G数表示が「-」から「111G」へ切り替わる。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き時は前日最終G数との宵越し合算がゾロ目G数へ到達した際に液晶表示が「111G」へ切り替わるため、内部G数の継続が実戦判別に利用できる。
- 据え置き時の内部状態・CA玉・試練玉について「据え置き」列として直接明示した独立資料は今回固定できず、純電断契約から機械的に転記せず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_GAME_COUNTER_CARRYOVER_DETECTION; UNVERIFIED_FOR_FULL_STATE_CONTRACT

### powerCycleBehavior
- 純電源OFF→ON:
  - 天井ゲーム数: CARRYOVER。
  - 内部状態: CARRYOVER。
  - CA玉: CARRYOVER。
  - 試練玉: CARRYOVER。
  - 朝一ステージ: 中央広場。
- ちょんぼりすた、期待値見える化で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- 通常時天井基準: ART間。
- settingChange: RESET + 111/333/666/999G再抽選。
- powerCycle: CARRYOVER。
- carryOver: 前日+当日G数を用いた液晶表示判別ロジックからCARRYOVERを確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 設定変更時天井振り分け:
  - 111G: 10%
  - 333G: 15%
  - 666G: 25%
  - 999G: 50%
- 通常時は第一天井666G、第二天井999G。
- 設定変更後は50%で666G以下が選択されるため明確な朝一短縮恩恵あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 朝一専用の独立名称モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 周期/玉関連の内部G数・初期玉は設定変更時に再抽選される。
- 純電断時は関連内部情報を引き継ぐ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RESELECTION_AND_CARRYOVER

### stateAfterReset
- 設定変更時高確移行率:
  - 設定1: 6.7%
  - 設定2: 12.5%
  - 設定3: 6.7%
  - 設定4: 12.5%
  - 設定5: 12.5%
  - 設定6: 12.5%
- 純電源OFF→ON: 内部状態CARRYOVER。
- 据え置き時内部状態の直接比較表は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 最大の朝一恩恵は天井短縮抽選。設定変更後50%で111/333/666G天井が選択。
- 高確再抽選あり。
- CA玉0〜9個、試練玉0〜2個を内部的に再抽選。見た目表示は0個から開始。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 前日のART間ハマリ進捗は設定変更で消去される。
- 設定変更専用の追加不利抽選: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH

### resetDetection
- 朝一液晶G数は設定変更/据え置きとも「-」開始。
- 設定変更時は内部0〜110Gオフセット+当日消化が111Gになった時に「111G」表示。
- 据え置き時は前日最終G数+当日消化がゾロ目到達した時に「111G」表示へ切り替わる。
- 前日最終G数が把握できれば、表示切替タイミングからリセット/据え置きを高精度で推測可能。
- ガックンによる本機固有変更判別は検索語・資料系統変更後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_DISPLAY_BASED_DETECTION

### numericResetData
- resetCeilingDistribution:
  - 111G: 10%
  - 333G: 15%
  - 666G: 25%
  - 999G: 50%
- resetHighStateDistribution:
  - setting1: 6.7%
  - setting2: 12.5%
  - setting3: 6.7%
  - setting4: 12.5%
  - setting5: 12.5%
  - setting6: 12.5%
- resetInitialCaBalls: 0〜9個
- resetInitialTrialBalls: 0〜2個
- resetDisplayInternalOffset: 0〜110G
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## dataQualityNotes
- 「おそ松さん」（2017-02-06導入Aタイプ）とは別機。名称混同禁止。
- ART設定3は1/344をcanonical。すろぱちくえすと同一ページ内に1/334表記が一箇所あるためCONFLICT保持。
- 純増2.0枚/Gは公開資料が「ボーナス込み」と明示しているため、ART単体純増として扱わない。
- 天井はデータカウンターG数ではなく内部ART間G数基準。停止区間があるため実表示上は999G超到達があり得る。

## sources
取得日: 2026-09-09
1. DAIICHI公式 — パチスロ おそ松くん
   - https://daiichi777.jp/product/detail/151/osomatsukun2
   - 機種存在/公式製品ページ
   - reliability: OFFICIAL
2. P-WORLD — パチスロおそ松くん
   - https://www.p-world.co.jp/machine/database/8327
   - 5号機A+ART、基本獲得枚数、ART30G+α、約2.0枚/G、ART初当たり
   - reliability: INDUSTRY_DATABASE
3. パチビー — パチスロ おそ松くん
   - https://www.pachibee.jp/machines/about/217030007
   - 2017-04-17導入、基本ゲーム性、基本獲得枚数、ART仕様
   - reliability: INDUSTRY_DATABASE
4. ちょんぼりすた — おそ松くん
   - https://chonborista.com/slot/d-light/34734/
   - 導入日、機械割、ボーナス/ART初当たり、36G/50枚、天井、設定変更/電断、天井振り分け、高確率、玉再抽選、表示判別
   - reliability: ANALYSIS_HIGH
5. すろぱちくえすと — パチスロ おそ松くん
   - https://www.slopachi-quest.com/article/osomatsukun/
   - 導入日、性能コア、天井。設定3 ARTのページ内表記差をCONFLICTとして保持
   - reliability: ANALYSIS_HIGH
6. 期待値見える化 — おそ松くん 朝一リセット解析
   - https://slotjin.com/zone/osomatsukun/
   - 性能コア、天井仕様、設定変更/電断、111/333/666/999G振り分け、高確移行率、表示切替による変更判別
   - reliability: ANALYSIS_HIGH
7. 中古実機流通 — D-light パチスロ おそ松くん
   - https://store.shopping.yahoo.co.jp/nakaiticom/20105.html
   - 型式名 `パチスロおそ松くんS`
   - reliability: ANALYSIS_SINGLE_FOR_FORMAL_MODEL_NAME

## missingFields
- certificationNumber
- 据え置き時内部状態/CA玉/試練玉の独立した直接契約
- 本機固有ガックン判別の有無

## conflicts
- ART設定3: `1/334`（すろぱちくえすと記事上部表） vs `1/344`（同ページ後段、ちょんぼりすた、期待値見える化、P-WORLD）。canonicalは複数独立資料一致の1/344。
