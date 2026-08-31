# 開始ホール130台 machineInstance モデル v0.1

更新日: 2026-09-01

目的: `START_HALL_130_MACHINE_COMPOSITION_V01.md` と `START_HALL_130_TYPE_ECONOMICS_V01.md` を、130台それぞれが独立した状態を持つシミュレーションへ接続する。

**位置づけ:** 計算構造の仮モデル。正式バランス値ではない。実在機名は研究用で、製品版では架空機種・メーカーへ変換する。

## 1. machineInstance の最小構造

各設置台は以下を持つ。

```text
instanceId
machineId
machineCategory
setting
ageClass
condition
popularity
baseOutPotential
previousDayOut
previousDayDifference
customerVisibleHistory
expectationMemory
actualOut
theoreticalPayout
actualSafe
coinUnit
sales
grossProfit
```

`machineId` は実機研究DB側の機種定義を参照し、`instanceId` はホールに置かれた個体を表す。同一機種18台でも18個のinstanceを持つ。

## 2. 130台のinstance生成ルール

既存構成を維持する。

- 25Φ完全告知ノーマル: 30台
- 30Φ沖スロ系ノーマル: 28台
- A+RT / ボーナス+RT: 32台
- 新しめART/CZ: 12台
- 旧台・バラエティ: 28台
- 合計130台

設定も既存値を維持する。

- 設定1: 80台
- 設定2: 28台
- 設定3: 14台
- 設定4: 6台
- 設定5: 2台
- 設定6: 0台

## 3. OUTを台ごとに分散させる

区分平均OUTをそのまま全台へ与えない。

```text
expectedOut
= categoryBaseOut
× popularityFactor
× ageFactor
× conditionFactor
× expectationFactor
× historyFactor
```

開始値の中心は既存タイプ別計算を使う。

- 25Φ: 5,200 OUT
- 30Φ: 5,000 OUT
- A+RT: 4,700 OUT
- ART/CZ: 5,600 OUT
- 旧台/バラエティ: 2,100 OUT

各補正の初期レンジ候補:

- popularityFactor: 0.55〜1.35
- ageFactor: 0.70〜1.10
- conditionFactor: 0.85〜1.00
- expectationFactor: 0.70〜1.35
- historyFactor: 0.80〜1.20

補正を無制限に掛け合わせず、最終expectedOutにはカテゴリ別上下限を設ける。

## 4. 設定はOUTへ直接掛けない

設定を単純に `設定6だから稼働1.5倍` のようにはしない。

設定はまず実機DBの `payoutRateBySetting` とボーナス/RT/ART挙動を変える。客側は設定そのものを知らず、過去履歴・出玉・店の評判・機種特性から高設定期待を推測する。

したがって因果は、

```text
設定
→ 出玉挙動
→ 客から見える履歴
→ 設定期待
→ 次の着席/継続
→ OUT
```

とする。

これにより「高設定を入れた瞬間に客が超能力で察知する」問題を防ぐ。

## 5. 1日のactualOut

`expectedOut` は期待値であり、営業日は揺れる。

初期モデルでは台ごとに日次変動を与える。

```text
actualOut = expectedOut × dailyTrafficNoise
```

`dailyTrafficNoise` は通常日を中心に概ね0.75〜1.25。新台初日、競合イベント、休日、悪天候などは別のホール全体/カテゴリ補正として加える。

130台合計の初期目標は既存v0.1と同じ約572,400 OUT/日を中心にする。

## 6. 出玉計算

台iについて、実機DBの設定別理論出玉率を `theoreticalPayout_i` とする。

```text
expectedSafe_i = actualOut_i × theoreticalPayout_i
```

ただし実際の1日は確率変動するため、製品シミュレーションではボーナス/RT/ART抽選結果から `actualSafe` を生成する。初期の経済検証では理論値近似を許容する。

```text
hallDifference_i = actualOut_i - actualSafe_i
```

プラスならホール側差枚、マイナスなら客側差枚。

## 7. 売上と粗利

現段階では既存コイン単価モデルを維持する。

```text
sales_i = actualOut_i × coinUnit_i
grossProfit_i = hallDifference_i × 20円
```

カテゴリ中心値:

- 25Φ: 1.75円
- 30Φ: 1.80円
- A+RT: 1.95円
- ART/CZ: 2.25円
- 旧台/バラエティ: 1.85円

将来はコイン単価を固定属性ではなく、50枚ベース、ボーナス/ART挙動、持ちメダル遊技から生成する。

## 8. customerVisibleHistory

客が見る履歴と内部真値を分離する。

内部:
- 真の設定
- 内部抽選状態
- 実機スペック

客に見える候補:
- 当日ゲーム数
- BIG/REG/ART回数
- 差枚グラフ
- 前日最終履歴
- 過去数日の当たり履歴
- 島全体の出玉感

客AIは真の設定を直接読まない。

## 9. expectationMemory

台単体だけでなく、客は店/島/機種への期待を記憶する。

```text
machineExpectation
categoryExpectation
hallExpectation
```

営業終了後に当日の観測結果から更新し、翌日の `expectationFactor` に反映する。

高設定を1日使っても必ず翌日満席にはならず、客が認識できるだけの結果・頻度・継続が必要になる。

## 10. 130台初期状態の分散方針

開始店は弱っているため、平均OUTだけでなく台間格差を大きくする。

例:
- 人気主力ノーマル: 7,000〜9,000 OUT級が一部存在
- 同じ主力でも弱い履歴台: 3,000〜4,000 OUT
- 最新ART: 話題性で高OUTだが低設定中心
- 旧台: 500〜1,500 OUTしか動かない台も存在
- バラエティの一部: ほぼ終日空席

これで店内を見渡した時に「全部同じように回っている」状態を避ける。

## 11. 初期130台ID

ゲーム内部では `S001`〜`S130` を割り当てる。

カテゴリ範囲:

- S001〜S030: 25Φ完全告知ノーマル
- S031〜S058: 30Φ沖スロ系ノーマル
- S059〜S090: A+RT / ボーナス+RT
- S091〜S102: 新しめART/CZ
- S103〜S130: 旧台・バラエティ

このIDは後で12島・4ブロックの物理配置IDへ接続する。

## 12. 次の計算段階

次はS001〜S130へ具体的に、

1. machineId
2. setting
3. ageClass
4. popularity
5. previousDayHistory

を配り、Day 1を台別に計算する。

その後、Day 1結果を客AIへ見せ、Day 2の着席・稼働が変化するところまで接続する。

重要なのは、130台合計の売上を先に決めて各台へ割るのではなく、**130台の個別行動結果を積み上げてホール日次結果を作る**こと。
