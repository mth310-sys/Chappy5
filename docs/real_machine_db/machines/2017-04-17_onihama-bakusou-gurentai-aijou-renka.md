machineName: 鬼浜爆走紅蓮隊 愛情恋歌編
manufacturer: ベルコ
releaseDate: 2017-04-17
recordNumber: 1068
generation: 5号機 / 5.5号機
systemType: A+ART / 差枚数管理型ART
formalModelName: オニハマアイ／L7
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_VERIFICATION

## identity
- ベルコ公式YouTubeの2017-01-05公開ティザーPVで新機種「鬼浜爆走紅蓮隊 愛情恋歌編」を確認。
- ちょんぼりすた、期待値見える化、P-WORLDがメーカー=ベルコ、2017-04-17導入で一致。
- 後年筐体資料で型式名 `オニハマアイ／L7` を確認。中古実機流通資料でも同型式表記をクロスチェック。
- 検定番号は「鬼浜爆走紅蓮隊 愛情恋歌編 / オニハマアイ / L7 / ベルコ / 6S / 検定番号 / 検定通過」等で古い検定資料・DBを再探索したが、直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY; UNVERIFIED_FOR_CERTIFICATION_NUMBER

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.3% |
| 3 | 101.6% |
| 4 | 104.8% |
| 5 | 108.3% |
| 6 | 112.1% |
- すろぱちくえすと、期待値見える化で一致。
- ちょんぼりすたは設定2のみ99.2%表記。他設定は一致するため、設定2を `CONFLICT_99_3_VS_99_2` として保持し、複数解析一致の99.3%をcanonicalに採用。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONFLICT_SETTING2

## initialHitBySetting
### ART初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/471.1 |
| 2 | 1/445.6 |
| 3 | 1/407.4 |
| 4 | 1/362.3 |
| 5 | 1/331.5 |
| 6 | 1/302.1 |
- 期待値見える化の設定別ART初当たり。

### ボーナス
- 全設定共通 約1/819.2。
- P-WORLD/解析資料で約174枚獲得のリアルボーナスとして確認。

### ボーナス+ART合算
| 設定 | 合算 |
|---:|---:|
| 1 | 1/299.1 |
| 2 | 1/288.6 |
| 3 | 1/272.1 |
| 4 | 1/251.2 |
| 5 | 1/236.0 |
| 6 | 1/220.7 |
- P-WORLD、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約39〜39.9G/50枚。
- すろぱちくえすと約39G、期待値見える化約39.9G、ちょんぼりすた約39G。定義差/丸めとして範囲保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「狂乱麗舞」単体: 約1.8枚/G。
- ボーナス込み掲載値: 約2.0枚/G。
- P-WORLDは約2.0枚/G表記。期待値見える化は単体1.8枚/G・ボーナス込み2.0枚/Gと定義を分離しているため、本DBでは単体値と込み値を混同しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_SEPARATION

## basicPayout
- リアルボーナス: 約174枚。
- ART「狂乱麗舞」: 差枚数管理型。初期差枚数70枚以上。
- 初当たり時は鬼カードチャレンジで初期差枚数を決定。
- 天井ARTでは約1/8（12.5%）で「超鬼カード」、平均初期上乗せ約450枚と解析。
- 実機完全再現用の鬼カード全振り分け・CZ全抽選はSCOPE_EXCLUDED。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は低確/高確に加え、CZ当選率が毎G約1/10へ上がる「赤テープモード」が存在。
- 通常天井: ART間1470G。ボーナスを挟んでもART間ゲーム数は継続。
- 天井到達でART当選、約1/8で超鬼カード選択。
- 愛ポイントは通常時のCZ関連蓄積要素だが、設定変更時の厳密な引継ぎ/リセット契約は今回直接固定できず、推測補完しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_MULTI_SOURCE_WITH_PARTIAL_UNVERIFIED_SUBFIELDS
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ART間1470G天井: RESET。
- 内部状態: RESELECT。
- 設定変更時に高確移行抽選と赤テープモード移行抽選を実施。
- 朝一開始ステージは期待値見える化で「鬼浜電鉄」とされる一方、別解析では当初「調査中」表記が残るため、後発解析値を採用しつつ資料時点差を注記。
- 愛ポイントの設定変更時契約は `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING_AND_STATE_RESELECT

### carryOverBehavior
- 据え置き時は設定変更処理が行われない前提で、朝一BETランプ点灯が「据え置き濃厚」材料として当時解析に掲載。
- ART間天井ゲーム数の据え置き契約を「据え置き」列として直接明示した資料は今回固定できなかったため、純電断のCARRYOVER契約を自動転記せず `UNVERIFIED_AFTER_RESEARCH` とする。
- 内部状態/赤テープモード/愛ポイントの厳密な据え置き契約も `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_RESET_DETECTION_CLUE; UNVERIFIED_FOR_FULL_CARRYOVER_CONTRACT

### powerCycleBehavior
- 純電源OFF→ON:
  - ART間1470G天井: CARRYOVER。
  - 内部状態: CARRYOVER。
- すろぱちくえすと、ちょんぼりすた、期待値見える化で一致。
- 朝一ステージは期待値見える化では鬼浜電鉄、他の初期解析では調査中。実質挙動契約の主要部分は天井/内部状態の引継ぎとして採用。
- 愛ポイントの純電断時契約: `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- normalCeiling: ART間1470G。
- settingChange: RESET。
- powerCycle: CARRYOVER。
- carryOver: `UNVERIFIED_AFTER_RESEARCH`（機種固有の直接比較表で「据え置き」欄を今回固定できず、純電断から推測しない）。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- 設定変更後も通常天井の最大値はART間1470G。
- 設定変更専用の固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一恩恵の主因は天井短縮ではなく高確/赤テープモード再抽選。
reliability: ANALYSIS_HIGH

### modeAfterReset
- 赤テープモード: 設定変更時にRESELECT。
- 設定変更時赤テープモード移行率: 全設定共通24.2%とする解析と「約25%」表記が存在。数値系列の丸め差として24.2%を精密値、約25%を丸め表記として保持。
- 純電源OFF→ON: 内部状態引継ぎ資料に含めてCARRYOVER扱い。ただし赤テープモード単独の直接表記は限定的。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset
- 設定変更時高確移行率:
  - 設定1: 24.2%
  - 設定2: 26.4%
  - 設定3: 29.8%
  - 設定4: 36.1%
  - 設定5: 40.8%
  - 設定6: 47.1%
- 純電源OFF→ON: 内部状態CARRYOVER。
- 据え置き: `UNVERIFIED_AFTER_RESEARCH`（純電断契約から機械的に転記しない）。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更時は高確および赤テープモードから始まる可能性が上がり、朝一に明確な狙い目が生じる。
- 赤テープモード移行率は全設定共通24.2%（別資料では約25%）。滞在中は毎G約1/10でCZ抽選。
- 高確移行率は設定1でも24.2%、設定6では47.1%。
- ちょんぼりすた掲載の設定変更直後機械割は設定1→6で 104.45 / 105.88 / 107.41 / 110.27 / 113.17 / 117.29%。これは通常機械割と定義が異なる朝一リセット期待値指標のため、通常payoutRateBySettingには混入させない。
reliability: ANALYSIS_HIGH_FOR_DISTRIBUTIONS; ANALYSIS_SINGLE_FOR_RESET_PAYOUT_SERIES

### resetPenalties
- 設定変更でART間天井進捗はRESETされるため、前日深いハマリを消す点は朝一客に対する不利要素。
- 設定変更専用の別の明確な不利抽選: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH

### resetDetection
- ガックン判別: 期待値見える化で「可能」、実動画付きで分かりやすいとされる。確定判別ではなく実戦上の変更推測材料として保持。
- 朝一BETランプ:
  - 点灯: 据え置き濃厚
  - 非点灯: リセットまたは対策済み
- BETランプはコイン投入後の精算等で対策可能なため非決定的。
- 朝一ステージ単独判別は、鬼浜電鉄開始資料があるものの設定変更/純電断で同一開始になり得るため主要確定材料にはしない。
reliability: ANALYSIS_HIGH_FOR_PRACTICAL_DETECTION; NOT_DETERMINISTIC

### numericResetData
- resetHighStateDistribution:
  - setting1: 24.2%
  - setting2: 26.4%
  - setting3: 29.8%
  - setting4: 36.1%
  - setting5: 40.8%
  - setting6: 47.1%
- resetRedTapeModeDistribution:
  - allSettings: 24.2% precise in one analysis / approximately 25% rounded in another
- resetPayoutPublishedSingleSource:
  - setting1: 104.45%
  - setting2: 105.88%
  - setting3: 107.41%
  - setting4: 110.27%
  - setting5: 113.17%
  - setting6: 117.29%
- fixedResetShortenedCeiling: NONE_CONFIRMED_AFTER_RESEARCH
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_STATE_VALUES; ANALYSIS_SINGLE_FOR_RESET_PAYOUT

## dataQualityNotes
- ART純増は「単体約1.8枚/G」と「ボーナス込み約2.0枚/G」の定義差を分離。
- 通常機械割の設定2は99.3%が複数解析一致、ちょんぼりすたのみ99.2%。平均せずCONFLICT保持。
- 赤テープモード設定変更率24.2%と約25%は精密値/丸め表記の差として扱い、数値競合にはしない。
- 朝一ステージは後発解析で鬼浜電鉄、初期解析では調査中。公開時点差として保持。
- 据え置き時の天井/内部状態の厳密な直接契約は、純電断契約や一般的5号機挙動から推測補完していない。

## conflicts
- `PAYOUT_SETTING2`: 99.3%（すろぱちくえすと / 期待値見える化） vs 99.2%（ちょんぼりすた）。canonical=99.3%。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior full direct contract: UNVERIFIED_AFTER_RESEARCH
- lovePoint settingChange/carryOver/powerCycle contract: UNVERIFIED_AFTER_RESEARCH
- detailed internal draw tables: SCOPE_EXCLUDED

## sources
retrievedAt: 2026-09-09
- https://www.youtube.com/watch?v=nS5ycT2umXo — ベルコ公式ティザーPV、機種存在/名称一次確認
- https://www.p-world.co.jp/machine/database/8294 — メーカー、5号機/A+ART、ボーナス174枚、ART約2.0枚/G、天井、合算系列
- https://chonborista.com/slot/belko-slot/32378/ — 導入日、性能コア、天井、設定変更/純電断比較、高確/赤テープ移行率、朝一リセット機械割
- https://www.slopachi-quest.com/article/onihama-aijou/ — 性能コア、天井、設定変更/純電断比較、高確/赤テープ移行率
- https://slotjin.com/zone/onihama-ai/ — ART初当たり、通常機械割、ベース、ART単体/込み純増、天井、朝一状態、ガックン/BETランプ判別
- https://pachinko.hatenablog.jp/entry/2017/04/onihama-ai — 型式名オニハマアイ/L7、2017年4月リリース
- https://auctions.yahoo.co.jp/jp/auction/1174252970 — 中古実機流通で型式オニハマアイ/L7をクロスチェック
