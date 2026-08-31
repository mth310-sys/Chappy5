# 開始ホール A+RT32台 出玉率ソース接続完了 v0.1

更新日: 2026-09-01

目的: `START_HALL_ART32_MACHINE_LEVEL_ECONOMICS_V01.md` で未接続だった S079〜S090 を実機DBへ接続し、A+RT32台すべてに `payoutSourceStatus` を持たせる。

**位置づけ:** ゲーム本体接続用の計算データ。機種構成そのものはまだ開始ホール仮構成であり、製品版では架空機へ変換する。

## 1. S079〜S084: 新世紀エヴァンゲリオン

実機DB:
`docs/real_machine_db/machines/2005-09_shinseiki-evangelion.md`

機械割にはCONFLICTがあるため、平均化しない。
計算v0.1では資料A（5号機クロニクル系列）を `calculationSeries=A` と明示して使用する。

- 設定1: 96.1%
- 設定2: 98.0%
- 設定3: 100.6%
- 設定4: 103.4%
- 設定5: 106.2%
- 設定6: 109.2%

台帳接続:

|ID|設定|計算機械割|sourceStatus|
|---|---:|---:|---|
|S079|2|98.0%|REAL_DB_CONFLICT_SERIES_A|
|S080|1|96.1%|REAL_DB_CONFLICT_SERIES_A|
|S081|3|100.6%|REAL_DB_CONFLICT_SERIES_A|
|S082|1|96.1%|REAL_DB_CONFLICT_SERIES_A|
|S083|2|98.0%|REAL_DB_CONFLICT_SERIES_A|
|S084|1|96.1%|REAL_DB_CONFLICT_SERIES_A|

50枚ベース45〜52G/1000円、REG後100G RTという実機情報もMachineMasterへ保持できる。

## 2. S085〜S090: 「その他A+RT」を実機DB候補へ具体化

元台帳では機種名を「その他A+RT」としていたため、計算用v0.1では同時期にDB収録済みの実在A+RTを研究基準として仮マッピングする。

**これは正式な開始機種採用ではなく、計算のための研究基準マッピング。**

### S085 / S086: 快盗天使ツインエンジェル

実機DB:
`docs/real_machine_db/machines/2006-10_kaitou-tenshi-twin-angel.md`

機械割CONFLICTあり。v0.1計算ではHAZUSE系列を明示使用。

- 設定1: 96.0%
- 設定2: 99.2%
- 設定3: 102.1%
- 設定4: 104.1%
- 設定5: 105.8%
- 設定6: 108.3%

|ID|設定|計算機械割|sourceStatus|
|---|---:|---:|---|
|S085|2|99.2%|REAL_DB_CONFLICT_HAZUSE|
|S086|1|96.0%|REAL_DB_CONFLICT_HAZUSE|

### S087 / S088: 逮捕しちゃうぞ

実機DB:
`docs/real_machine_db/machines/2006-08-28_taiho-shichauzo.md`

機械割は複数資料で一致。

- 設定1: 98.7%
- 設定2: 100.1%
- 設定3: 101.3%
- 設定4: 102.7%
- 設定5: 103.9%
- 設定6: 105.2%

|ID|設定|計算機械割|sourceStatus|
|---|---:|---:|---|
|S087|1|98.7%|REAL_DB|
|S088|1|98.7%|REAL_DB|

### S089 / S090: 電撃フランケン

実機DB:
`docs/real_machine_db/machines/2006-07-24_dengeki-franken.md`

本機は設定1/4/6のみの公開値をDBで保持している。S089/S090はどちらも設定1なので直接接続可能。

- 設定1: 97.7%
- 設定4: 100.0%
- 設定6: 103.9%

|ID|設定|計算機械割|sourceStatus|
|---|---:|---:|---|
|S089|1|97.7%|REAL_DB_PARTIAL_SETTING_GRID|
|S090|1|97.7%|REAL_DB_PARTIAL_SETTING_GRID|

## 3. A+RT32台のソース状態

S059〜S078は前段でスパイダーマン2/リングにかけろ1へ接続済み。
今回S079〜S090も接続したため、32台すべてが実機DB由来の機械割へ到達した。

|範囲|台数|研究基準|状態|
|---|---:|---|---|
|S059〜S068|10|スパイダーマン2|REAL_DB|
|S069〜S078|10|リングにかけろ1|REAL_DB|
|S079〜S084|6|新世紀エヴァンゲリオン|REAL_DB / CONFLICT系列明示|
|S085〜S086|2|快盗天使ツインエンジェル|REAL_DB / CONFLICT系列明示|
|S087〜S088|2|逮捕しちゃうぞ|REAL_DB|
|S089〜S090|2|電撃フランケン|REAL_DB / PARTIAL_SETTING_GRID|
|**合計**|**32**|—|**32/32 接続**|

## 4. 重要なデータ管理ルール

実機DBにCONFLICTがある場合:

- 平均しない
- ゲーム計算で使用する系列を明示する
- 元の競合値をMachineMaster側に残す
- 将来より強い資料が得られたら計算系列を差し替え可能にする

例:

```text
payoutRateSources: [...]
calculationSeries: "A"
sourceStatus: "CONFLICT"
```

これにより研究DBの不確実性を隠さず、ゲーム計算だけは再現可能にする。

## 5. 32台の個体別計算へ移行

A+RT区分の一括 `99.xx%` は今後使用しない。

各台:

```text
actualOut_i
× payoutRate_i(setting)
→ expectedSafe_i
→ expectedDifference_i
→ expectedGross_i
```

を計算し、S059〜S090を合計する。

## 6. 次段階

次はDay 2について:

- Strategy A: 前日期待を回収する
- Strategy B: A+RTへ追加設定を投入する

の双方で、S059〜S090の32台へ具体的な当日設定を割り当て、個体別OUT・SAFE・粗利を積み上げて再計算する。

これにより前段の「A+RT全体の出玉率を仮置き」方式を廃止する。
