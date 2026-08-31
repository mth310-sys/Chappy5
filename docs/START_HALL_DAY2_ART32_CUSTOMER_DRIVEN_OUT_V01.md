# Day 2 A+RT32台 客AI駆動OUTモデル v0.1

更新日: 2026-09-01

目的: `START_HALL_DAY2_ART32_INSTANCE_AB_V01.md` で仮置きしていた Strategy A=+8%、B=+15% のA+RT OUTターゲットを廃止し、客の来店・着席・継続・離席からS059〜S090のactualOutを生成する。

**位置づけ:** ゲーム本体接続用の構造検証。客数・回転速度・各確率の係数は暫定で、実装後に反復検証する。

## 1. 廃止するトップダウン入力

今後、以下はA+RT計算の入力値にしない。

- Strategy AだからDay 1比OUT +8%
- Strategy BだからDay 1比OUT +15%
- 区分合計OUTを先に決めて32台へ配る

OUTは結果値にする。

## 2. 13時間の処理順

各営業時刻 t について:

```text
1. 来店客を生成
2. 各客が候補台を評価
3. 空席なら着席
4. 着席客が遊技
5. ボーナス/RT結果をvisibleHistoryへ反映
6. 客が継続/離席を判断
7. 空席になれば次客が再評価
8. 1時間分を集計
```

これを10:00〜23:00まで繰り返す。

## 3. 客が真の設定を知らない

seatScoreは当日設定を直接参照しない。

```text
seatScore
= machinePreference
+ machineMemory
+ categoryMemory
+ popularitySignal
+ visibleHistorySignal
- crowdPenalty
- lateHourRisk
```

Day 2開始時点ではDay 1のA+RT客側プラス観測によりcategoryMemoryが上昇している。

Strategy A/Bで朝一の期待は原則同じ。Bで設定を上げた事実は、当日の結果として客に観測されるまで着席率を直接増やさない。

## 4. 客タイプの最小セット

A+RT検証では4タイプを使用する。

### 常連・設定狙い
- 前日履歴を強く見る
- 朝から来る
- 良挙動なら長く粘る
- settingInferenceSkill 高

### 機種ファン
- 好きな機種を優先
- 設定期待が多少低くても打つ
- machinePreference 高

### 仕事帰り客
- 17〜20時中心
- 空席と当日履歴を重視
- 残り時間を考慮

### ライト客
- 人気/空席/目立つ出玉を重視
- 設定推測は弱い
- 滞在短め

## 5. 来店数は時間帯から生成

Day 1の13時間営業曲線を初期基準にするが、A+RT専用の人数を先に固定しない。

ホール来店客のうちA+RT候補へ流れる割合を、

```text
categoryAttraction
= basePreference
+ categoryMemory
+ currentFloorSignal
```

で決める。

A+RTが当日強く見えれば午後以降に再着席が増える。弱く見えれば前日好印象があっても徐々に失速する。

## 6. 1セッションのOUT

着席客は1分単位の全リール処理を要求しない。

内部計算単位では:

```text
sessionOut
= occupiedMinutes × effectiveGamesPerMinute × 3枚
```

を基本にし、ボーナス/RT中は状態別の投入・払い出しへ切り替える。

`effectiveGamesPerMinute` は客の遊技速度、目押し、離席、ボーナス消化などで変化する。

初期検証レンジ:
- ライト: 9〜11G/分相当の通常時操作能力ではなく、休憩等を含めた営業時間平均へ圧縮して調整
- 通常客: 同様に実測/既存シミュレーションと整合するよう校正

※ここは現時点で数値を固定しない。現実の遊技速度との照合が必要。

## 7. 継続判断

1時間ごとの継続確率候補:

```text
continueScore
= remainingBudget
+ machinePreference
+ currentSessionResult
+ visibleSettingSignal
+ categoryMemory
- fatigue
- timeRisk
```

高設定でも不発なら離席する。
低設定でも大きく出ている/高設定らしく見えるなら粘ることがある。

22時以降はRT/ART取り切れないリスクをtimeRiskへ入れる。

## 8. Strategy A/Bの違い

### Strategy A
Day 1設定を維持。

客は前日A+RTが良かったため朝から期待して来るが、低設定個体が多いため当日のvisibleHistoryが弱ければ午後から期待が低下する。

### Strategy B
8台を設定変更:
- S060 1→3
- S062 1→2
- S064 1→2
- S070 1→3
- S072 1→2
- S074 1→2
- S080 1→2
- S086 1→2

朝一はAと同程度の期待から開始する。

ただし営業中にB側で良挙動台が増えれば:

```text
良い履歴
→ 継続率上昇
→ 空席時間減少
→ 周辺客へのfloorSignal上昇
→ 再着席増加
→ actualOut増加
```

となる。

つまり設定投入がOUTを直接増やすのではなく、**観測可能な結果を介してOUTが伸びる**。

## 9. actualOutから経済値へ

S059〜S090各台について、客AIが生成したactualOutを既存実機DB機械割へ渡す。

```text
expectedSafe_i = actualOut_i × payoutRate_i(setting_i)
expectedDifference_i = actualOut_i - expectedSafe_i
expectedGross_i = expectedDifference_i × 20円
```

日次確率ブレを導入した段階ではexpectedSafeではなく実際のボーナス/RT抽選結果からactualSafeへ移行する。

## 10. 重要: 理論機械割と短期実績を分ける

ゲーム画面に理論値をそのまま出玉履歴として描画しない。

MachineMaster:
- payoutRateBySetting = 長期理論

MachineInstance DayState:
- actualOut
- actualSafe
- actualDifference
- bonusCount
- rtState

を分離する。

これにより設定1でもプラス、設定4でもマイナスという1日のブレを表現する。

## 11. 必要な乱数ストリーム

再現可能な検証のため、乱数を用途別に分ける。

```text
trafficSeed
seatSeed
bonusSeed
rtSeed
leaveSeed
```

同じseedなら同じ営業日を再生できる。

A/B比較ではtrafficSeedと初期客メモリを共通化し、設定配分だけ変える。

これで「Bのほうが偶然客が多かっただけ」を避けられる。

## 12. A/B比較の正式な方法

単日1seedだけで判断しない。

```text
同一初期状態
× 同一trafficSeed群
× Strategy A/B
× 複数営業日/複数seed
```

で比較する。

最低限見る値:
- 平均OUT
- OUT中央値
- 平均粗利
- 粗利分散
- 朝一着席率
- 再着席率
- 平均滞在
- 客側プラス台率
- categoryMemory終値
- hallMemory終値

## 13. ゲーム本体への接続

営業中の描画は計算本体からSnapshotを受け取る。

```text
SalesEngine
  ↓
HallSnapshot
  - currentTime
  - occupiedMachineIds
  - visibleMachineHistories
  - customerPositions/state
  - currentSales
  - currentGrossEstimate
  ↓
Phaser/WebGL view
```

描画FPSと経済計算tickを分離する。

130台/将来216台でも、全台を毎フレーム重計算しない。

## 14. 現時点で確定したこと

- A+RT32台の機械割: 実機DB接続済み
- 設定: MachineInstance単位
- OUT: 客AIの着席/離席結果として生成
- SAFE: 実機性能へ接続
- 客は真の設定を知らない
- A/B比較では同一乱数条件を使う
- 区分OUT +8%/+15%は正式計算から廃止

## 15. 次の実装・検証

次はこの仕様を計算コードへ落とす。

最小プロトタイプ:
1. 32 MachineInstance
2. 4 CustomerType
3. 13 hourly ticks
4. deterministic seed
5. A/B設定差
6. OUT/SAFE/粗利/記憶を出力

まずA+RT32台だけでコード検証し、安定後に130台へ拡張する。
