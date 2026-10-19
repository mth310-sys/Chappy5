machineName: パチスロ ウィッチクラフトワークス
manufacturer: DAXEL
releaseDate: 2016-11-14
recordNumber: 1024
generation: 5号機 / 5.5号機期
systemType: ART / 擬似ボーナス / 周期抽選
formalModelName: ウィッチクラフトワークス/DA
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ちょんぼりすた、期待値見える化、スロットガーデン等は2016-11-14導入で一致。
- パチビーは2016-11-21導入と掲載しており、導入日には資料差がある。本DBでは複数の当時攻略系資料で一致する2016-11-14をcanonicalとし、11/21説をCONFLICTとして保持する。
- 中古実機流通資料で正式型式 `ウィッチクラフトワークス/DA` を確認。
- 検定番号は機種名・型式DA・DAXEL・6S・検定等を組み替えて再探索したが、今回直接固定できず推測しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.3% |
| 3 | 100.5% |
| 4 | 104.1% |
| 5 | 106.2% |
| 6 | 110.5% |
- ちょんぼりすた掲載値をcanonicalとする。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | S-BIG | BIG | REG | ボーナス初当たり合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/1811 | 1/305 | 1/627 | 1/347 |
| 2 | 1/1779 | 1/283 | 1/605 | 1/337 |
| 3 | 1/1847 | 1/267 | 1/529 | 1/288 |
| 4 | 1/1792 | 1/249 | 1/494 | 1/272 |
| 5 | 1/1812 | 1/229 | 1/502 | 1/264 |
| 6 | 1/1702 | 1/198 | 1/370 | 1/195 |
- スロットガーデンにはより細かな小数値（例: 設定1 S-BIG 1/1810.7、BIG 1/304.6、REG 1/627.2）も掲載。上表は比較用に丸め系列をcanonicalとし、精密値は情報源差ではなく表示精度差として扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約48G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART / 擬似ボーナス中純増: 約+2.0枚/G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- REG「ぷっちボーナス」: 1セット20G、最大7セット、平均約90枚。
- BIG「クラフトワークボーナス」: 50G+α、平均約190枚。
- S-BIG「スーパークラフトワークボーナス」: 100G+α、平均約330枚。
reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は周期抽選型。通常A・通常B・天国を中心とする内部モードを持つ。
- 通常のゲーム数天井はボーナス間999G+前兆。
- 周期天井は最大10周期。
- REG単発後は次回周期天井が最大5周期に短縮される通常ゲーム性上の救済が存在する。これは設定変更恩恵とは別契約。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時はゲーム数天井・周期天井をリセット。
- 周期天井は通常最大10周期から最大7周期へ短縮。
- 内部モードは通常Aから開始。
- 周期状態は再抽選され、通常75.0% / 高確23.8% / クライマックス1.2%。
- 朝一初回ボーナス種別はS-BIG 4.7% / N-BIG 75.4% / REG 19.9%で、BIG系合計80.1%。
- 液晶ステージは多華宮家。

### carryOverBehavior
- 据え置き時は前日のゲーム数天井・周期天井進捗、内部モード、内部状態を引き継ぐとする解析系の直接比較表を確認。
- 液晶上の見かけだけで変更/据え置きを断定しない。

### powerCycleBehavior
- 電源OFF→ONのみではゲーム数天井・周期天井を引き継ぐ。
- 内部モード・内部状態も引き継ぐ。
- 設定変更と純電断で明確に挙動が異なる。

### gameCounterReset
- SETTING_CHANGE: RESET。
- CARRYOVER / POWER_CYCLE_ONLY: CARRYOVER。
- 周期進捗も同様に、設定変更でRESET、純電断ではCARRYOVER。

### ceilingAfterReset
- 通常ゲーム数天井: ボーナス間999G+前兆。
- 通常周期天井: 最大10周期。
- 設定変更後周期天井: 最大7周期へ短縮。
- 設定変更後の天井周期振り分けはnumericResetData参照。

### modeAfterReset
- 設定変更時: 通常A。
- 純電源OFF→ON / 据え置き: 前日内部モードを引き継ぐ。

### stateAfterReset
- 設定変更時の周期状態振り分け: 通常75.0% / 高確23.8% / クライマックス1.2%。
- 据え置き / 純電断: 内部状態引継ぎ。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 周期天井が最大10周期から最大7周期へ短縮。
- 1周期目天井選択率35.55%で、奇数周期が強く優遇される。
- 初回ボーナスはBIG系合計80.1%（S-BIG 4.7% + N-BIG 75.4%）。

### resetPenalties
- 前日の天井ゲーム数・周期進捗、内部モード等は設定変更で消失するため、前日ハマリの宵越し価値は消える。
- それ以外の設定変更固有不利はNONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 設定変更時は液晶ステージが多華宮家となるが、これ単独を確定判別要素とは扱わない。
- 本機固有のリールガックンを用いた確定的な変更判別は、機種名/型式/メーカーと「ガックン・朝一・設定変更・据え置き・電源OFF ON」を組み替えて再探索したが直接固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日周期/モード示唆との比較は据え置き推測材料になり得るが、確定判別とは区別する。

### numericResetData
- 設定変更後周期天井振り分け:
  - 1周期: 35.55%
  - 2周期: 1.6%
  - 3周期: 16.8%
  - 4周期: 1.6%
  - 5周期: 16.0%
  - 6周期: 1.6%
  - 7周期: 27.0%
- 設定変更時周期状態:
  - 通常: 75.0%
  - 高確: 23.8%
  - クライマックス: 1.2%
- 設定変更後初回ボーナス:
  - S-BIG: 4.7%
  - N-BIG: 75.4%
  - REG: 19.9%
  - BIG系合計: 80.1%

## dataQualityNotes
- 導入日は複数解析資料の2016-11-14をcanonicalとしたが、パチビーは2016-11-21と掲載するためCONFLICTを残した。
- 機械割・主要初当たり・ベース・純増は複数系統で照合。
- resetBehaviorはちょんぼりすた、スロパチクエスト、期待値見える化の直接比較表と数値がほぼ一致し、設定変更と純電断を分離して記録できた。
- 通常モードの全移行率や細かな減算抽選は実機完全再現用のため収集対象外。

## conflicts
- CONFLICT_RELEASE_DATE_2016_11_14_VS_2016_11_21
  - 2016-11-14: ちょんぼりすた、期待値見える化、スロットガーデン等。
  - 2016-11-21: パチビー。
  - 平均化せず、複数当時解析で一致する11/14をcanonicalとする。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 本機固有の確定的ガックン判別契約: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. ちょんぼりすた — ウィッチクラフトワークス スロット｜天井・設定判別・フリーズ・評価・PV動画
   - https://chonborista.com/slot/daxel-slot/26251/
2. スロパチクエスト — ウィッチクラフトワークスの設定変更やリセット時の恩恵と挙動から狙い目を解析
   - https://www.slopachi-quest.com/article/witch-craft-works-reset/
3. 期待値見える化 — ウィッチクラフトワークス スロット 天井・ゾーン・狙い目・やめどき・終了画面
   - https://slotjin.com/zone/witchcw/
4. スロットガーデン — ウィッチクラフトワークス│スルー天井・リセット恩恵・ヤメ時・終了画面・REG4連・フリーズ
   - https://xn--mckza4ard4ttb2d.com/witchcraftworks
5. パチビー — パチスロ ウィッチクラフトワークス（導入日11/21資料、5号機ART、純増2.0枚/G）
   - https://www.pachibee.jp/movies/index/13087
6. パチスロバンク — DAXEL ウィッチクラフトワークス/DA（正式型式の実機流通表記）
   - https://pachislobank.com/smp/item/s-daxel0008.html
7. パチ＆スロ必勝本 — 通常時の抽選解説（周期モード構造）
   - https://p.hisshobon.jp/machine/2859/1/60543
