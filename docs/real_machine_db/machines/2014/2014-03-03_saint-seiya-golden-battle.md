# パチスロ聖闘士星矢 黄金激闘編

machineName: パチスロ聖闘士星矢 黄金激闘編
aliases: 聖闘士星矢 黄金激闘編 / 星矢 黄金激闘編
manufacturer: 三洋物産 / SANYO BUSSAN
releaseDate: 2014-03-03
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: AT / ゲーム数管理 / 擬似ボーナス / CZ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- 型式名: **パチスロ聖闘士星矢黄金激闘編YL**。
- 検定番号: **3S1130**。
- HAZUSEとK-Naviでホール導入開始 **2014-03-03** が一致。
- 2012年初代「パチスロ聖闘士星矢」、後年の「海皇覚醒」「冥王復活」等とは別機種。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 99.0% |
| 3 | 99.5% |
| 4 | 104.3% |
| 5 | 107.5% |
| 6 | 111.6% |

- K-Naviおよび2014年当時解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス＋AT初当たり

| 設定 | 初当たり |
|---|---:|
| 1 | 1/230.7 |
| 2 | 1/221.7 |
| 3 | 1/217.3 |
| 4 | 1/189.9 |
| 5 | 1/180.5 |
| 6 | 1/152.5 |

- HAZUSE/K-Navi/当時解析で同系列を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「50枚」「1000円」「ベース」「コイン持ち」等で当時解析・機種DB・回顧資料を再探索したが、比較用に安全に固定できる数値を今回取得できなかった。

## netIncrease

- AT「聖闘士RUSH」: **約2.8枚/G**。
- 1セット **40G+α**。
- HAZUSE、K-Navi、複数回顧資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 擬似ボーナス「小宇宙BURST」: **20G固定**。
- AT「聖闘士RUSH」: **初回40G+α**、純増約2.8枚/G。
- AT1回あたり期待獲得枚数を約510枚とする当時解析があるが、これは期待値であり基本保証枚数ではないため補助値としてのみ保持。

## modeSpecificMinimumData

- 主な初当たり契機は **規定ゲーム数解除 / フェニックスチャンス / レア役直撃**。
- CZ「フェニックスチャンス」: **10G+α**。
- 通常モード系は通常A / 通常B / 通常C / 天国A / 天国B等が存在する解析資料あり。
- 通常時最大天井は **999G**。900G以降の当選はAT当選優遇/確定とする当時解析がある。

## ceiling

- 通常時は最大 **999G** ハマリで小宇宙BURST or AT当選。
- モード別の最大値として通常A 900G、通常B/C 999G、天国A/B 100Gとする当時解析が存在。
- 設定変更時は短縮テーブルへ移行し、最大750G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_NORMAL_MAX / PERIOD_ANALYSIS_FOR_RESET_TABLE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_CEILING_SHORTENING_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **ハマリゲーム数をリセット**。
- モードもリセット/再設定され、通常時とは異なる短縮天井テーブルが適用される当時解析を確認。
- 最大天井は通常時999Gから **750G**へ短縮。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_G_COUNTER_RESET / PERIOD_ANALYSIS_FOR_MODE_RESET_AND_SHORTENING

### carryOverBehavior

- **UNVERIFIED_AFTER_RESEARCH**。
- 「据え置き」「宵越し」「前日G数」「天井引継ぎ」等で当時解析・古い攻略DB・回顧資料を再探索したが、本機専用で据え置き時の天井G・モード・状態保持を直接固定できる資料を今回取得できなかった。
- 設定変更時リセット仕様からの逆推定は採用しない。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの単純な電源OFF→ONについて、天井G・モード・状態の保持/再抽選を本機専用で直接比較した資料を今回固定できなかった。

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更時は最大天井 **750G**。
- 当時解析でのモード別短縮値:

| モード | 通常時最大 | 設定変更時最大 |
|---|---:|---:|
| 通常A | 900G | 650G |
| 通常B | 999G | 750G |
| 通常C | 999G | 650G |
| 天国A | 100G | 100G |
| 天国B | 100G | 100G |

- したがって設定変更には明確な朝一天井短縮恩恵がある。
- confidence: PERIOD_ANALYSIS

### modeAfterReset

- 設定変更時にモードがリセット/再設定される旨を当時解析で確認。
- **具体的な設定変更時モード振り分け率はUNVERIFIED_AFTER_RESEARCH**。
- 「ほとんどが通常A」等の当時記事中の仮定・考察は解析確定値ではないため採用しない。

### stateAfterReset

- 通常/高確/超高確等の状態概念は確認できるが、**設定変更時の初期状態振り分け・保持契約はUNVERIFIED_AFTER_RESEARCH**。
- 通常時の全状態移行率は実機完全再現不要のため収集対象外。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 2014年導入の5号機ATで、後年の有利区間概念は非該当。

### resetBenefits

- 最大天井が **999G → 750G**へ短縮。
- モード別では通常A/Cが650G、通常Bが750Gまで短縮。
- これは朝一客の設定変更狙いに直接影響する主要恩恵。

### resetPenalties

- 前日の天井進捗は設定変更で消滅するため、前日深ハマリ台では宵越し価値を失う可能性がある。
- その他の設定変更専用不利数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、液晶初期出目、ステージ固定などによる高信頼な変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 短縮天井/規定G数の挙動から事後的に推測できる可能性はあるが、確定判別としては扱わない。

### publicMorningNumbers

- 設定変更後最大天井: **750G**。
- モードA: **650G**。
- モードB: **750G**。
- モードC: **650G**。
- 天国A/B: **100G**。
- 設定変更時モード振り分け率: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一特定G数以内の総当選率: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / safeguards

- 後年の「聖闘士星矢 海皇覚醒」「冥王復活」「スマスロ聖闘士星矢」等の有利区間・GBスルー・不屈・リセット恩恵を本機へ混入しない。
- 2014年当時の一部記事には設定変更後モード構成について仮定・考察表現があり、確定振り分けとして採用しない。
- 初当たりはサイトにより「ART初当たり」「AT初当たり」「ボーナス+AT初当たり」とラベル差があるが、数値列は1/230.7〜1/152.5で一致。本機の擬似ボーナス/AT初当たり合成として記録する。

## sources

取得日: **2026-09-06**

1. HAZUSE「パチスロ聖闘士星矢 黄金激闘編」
   - https://hazuse.com/machine/pachislot/3S1130/
   - 型式名、検定番号、導入日、設定別初当たり、AT純増、40G+α、最大999G天井。
   - confidence: ANALYSIS_HIGH_DATABASE

2. K-Navi「パチスロ聖闘士星矢 黄金激闘編」
   - https://p-kn.com/slot/2000/
   - 導入日、設定別初当たり、機械割、AT純増約2.8枚/G、初回40G+α。
   - confidence: ANALYSIS_HIGH

3. スロパチクエスト「聖闘士星矢 黄金激闘編 機種別解析まとめ」
   - https://www.slopachi-quest.com/kisyubetsu/seint-seiya/
   - 設定別初当たり、機械割、通常最大999G、設定変更時天井Gリセット。
   - confidence: PERIOD_ANALYSIS

4. スロパチクエスト「聖闘士星矢 黄金激闘編 朝一リセット・設定変更恩恵解析」2014-03-07/03-27
   - https://www.slopachi-quest.com/article/seint-seiya-reset/
   - 設定変更時ハマリ/モードリセット、最大750G、モードA650/B750/C650/天国100G。
   - confidence: PERIOD_ANALYSIS

5. 目指せ月収20万「聖闘士星矢 黄金激闘編 天井・ゾーン・スペック解析」2014-03-03
   - https://mezase20.com/slot_seiya_ougongekitouhen.html
   - 通常最大999G、設定変更後狙い目330G等の当時運用情報。
   - confidence: PERIOD_SECONDARY

6. パチ＆スロ必勝本「基本スペック パチスロ聖闘士星矢 黄金激闘編」
   - https://p.hisshobon.jp/machine/2354/1/45381
   - 本機専用「天井&設定変更」解析項目の存在、AT/特化ゾーン基本仕様。
   - confidence: ANALYSIS_HIGH

7. 期待値見える化「聖闘士星矢 黄金激闘編 天井・ゾーン実践値」2014-03-07
   - https://slotjin.com/zone/saintseiya-ougon/
   - 通常最大999G、設定変更後最大750G、20G擬似ボーナス、AT期待獲得約510枚。
   - confidence: PERIOD_ANALYSIS

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の天井G/モード/状態の直接契約: UNVERIFIED_AFTER_RESEARCH
- 単純電源OFF→ON時の天井G/モード/状態: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の具体的モード振り分け率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部状態振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有のガックン/初期出目等による確定変更判別: NONE_CONFIRMED_AFTER_RESEARCH
- 朝一特定G数以内の総当選率: UNVERIFIED_AFTER_RESEARCH
