machineName: シスタークエスト～時の魔術師と悠久の姉妹～
manufacturer: ハイライツ・エンタテインメント
releaseDate: 2017-01-10
recordNumber: 1038
generation: 5号機 / 5.5号機期
systemType: A+ART
formalModelName: シスタークエスト/HA
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ハイライツ・エンタテインメントのパチスロ第1弾。ドラスの当時プレスは実機稼働開始を2017-01-10予定と明記し、パチビー・複数解析資料も2017-01-10導入で一致。
- 中古実機流通資料で型式名「シスタークエスト/HA」を確認。検定番号は今回の複数系統再探索で直接固定できず推測しない。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.8% |
| 3 | 100.0% |
| 4 | 103.5% |
| 5 | 105.5% |
| 6 | 109.3% |

- 当時解析「期待値見える化」の精密表。ちょんぼりすたは設定6を109.4%とするため、設定6のみ丸め差としてCONFLICT注記。
reliability: ANALYSIS_HIGH_WITH_ROUNDING_CONFLICT

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 | ART初当たり |
|---:|---:|---:|---:|---:|
| 1 | 1/428.3 | 1/648.9 | 1/258.0 | 1/531.0 |
| 2 | 1/428.3 | 1/636.3 | 1/256.0 | 1/498.8 |
| 3 | 1/422.8 | 1/624.2 | 1/252.1 | 1/474.8 |
| 4 | 1/417.4 | 1/612.5 | 1/248.2 | 1/404.0 |
| 5 | 1/412.2 | 1/601.2 | 1/244.5 | 1/371.7 |
| 6 | 1/407.1 | 1/569.9 | 1/237.4 | 1/239.9 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約31.64〜32G / 50枚。解析資料間の丸め差としてレンジ保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_RANGE

## netIncrease
- ART「冒険RUSH」: 約1.4枚/G（ボーナスを除く）。解析資料ではボーナス込み約2.0枚/Gの表記もあり、定義を分離。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG「ストーリーボーナス」: 204枚。
- REG「錬金チャンス」: 54枚。
- ART「冒険RUSH」: 1セット40Gまたは100G + 継続バトル4G、ゲーム数上乗せ+継続抽選+セットストック型。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ゲーム数天井: ボーナス間999G消化でART当選。ART当選ではボーナス間天井ゲーム数はリセットされない。
- 自力CZ非搭載。通常時はレア役・ボーナス等からARTを目指す。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更: ボーナス間999G天井進捗RESET。
- 内部状態RESELECT。
- RT状態RESET。
- 開始ステージは帝国街道。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### carryOverBehavior
- 据え置きは設定変更を行わないため、天井進捗・内部状態・RT状態を継続する攻略契約として扱う。
- 純電源OFF→ONについて直接比較表で天井・内部状態・RT状態の引継ぎを確認。
reliability: ANALYSIS_HIGH_DIRECT_FOR_POWER_CYCLE

### powerCycleBehavior
- 純電源OFF→ON: 天井CARRYOVER / 内部状態CARRYOVER / RT状態CARRYOVER。
- 朝一ステージは帝国街道。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### gameCounterReset
- 設定変更: ボーナス間999Gの内部ゲーム数RESET。
- 据え置き / 純電源OFF→ON: CARRYOVER。
- ART当選のみではボーナス間天井ゲーム数はリセットされない。
reliability: ANALYSIS_HIGH_DIRECT

### ceilingAfterReset
- 設定変更で前日の天井進捗を失い、999G天井を0G側から再開。
- 設定変更専用の固定短縮天井は検索語・資料系統を変えて再探索したが確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_DIRECT_PLUS_RESEARCH

### modeAfterReset
- 本機で朝一専用の通常モード振り分けとして比較可能な公開契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_RESEARCH

### stateAfterReset
- 設定変更時は内部状態を再抽選し、全設定共通で高確スタート50%。
- 純電源OFF→ONは前日内部状態をCARRYOVER。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_RESET_DATA

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更時は全設定共通50%で高確スタート。朝一高確は設定変更推測材料になり得る。
- 固定短縮天井は確認なし。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_RESET_DATA

### resetPenalties
- 前日のボーナス間999G天井進捗と有利な内部状態は設定変更で失われる。
reliability: ANALYSIS_HIGH_DIRECT

### resetDetection
- 朝一高確挙動は設定変更推測材料。ただし50%抽選であり確定判別ではない。
- 設定変更/純電断とも開始ステージは帝国街道のためステージ単独では判別不可。
- 本機固有の確定的ガックン・初期出目等は今回の再探索で固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_DIRECT_PLUS_RESEARCH

### numericResetData
- 設定変更時の高確スタート率: **50.0%（全設定共通）**。
- 設定変更専用固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `CONFLICT_PAYOUT_RATE_SETTING6_ROUNDING_109_3_VS_109_4`
  - 期待値見える化: 109.3%。
  - ちょんぼりすた: 109.4%。
  - 平均化せず丸め差候補として保持。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-09
- 株式会社ドラス / valuepress（2017-01-10実機稼働開始予定）: https://www.value-press.com/pressrelease/175765
- 株式会社ドラス / valuepress（2017年1月稼働開始）: https://www.value-press.com/pressrelease/176619
- パチビー 機種情報: https://www.pachibee.jp/machines/about/216110008
- 期待値見える化（性能・天井・設定変更/電源OFF→ON直接比較）: https://slotjin.com/tenjoukitaichi/sister-quest4/
- ちょんぼりすた（性能照合）: https://chonborista.com/slot/high-enter/28232/
- パチ＆スロ必勝本（天井・50枚ベース・設定変更時高確50%照合）: https://p.hisshobon.jp/machine/2871/1/61614
- P-WORLD（基本獲得・天井・ART構造）: https://www.p-world.co.jp/machine/database/8211
