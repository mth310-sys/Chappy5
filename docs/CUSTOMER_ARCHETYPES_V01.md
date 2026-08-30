# 客AI 個体モデル v0.1 — 常連型 / ライト型

更新日: 2026-08-31

目的: これまで集団近似だった客AIを、店内で異なる判断をする個体へ移行する最初の2客層を定義する。

注意: 数値は検証用暫定値。正式採用ではない。客層を最初から増やしすぎず、まず2種類で差が自然に発生するか確認する。

## 1. 共通原則

全客共通:
- hidden setting を参照しない
- 公開データだけを見る
- 資金・滞在可能時間・遊技速度を個体ごとに持つ
- 台選択、続行、移動、退店を個別判断する
- 過去の来店経験を持てる
- 同じ公開データを見ても評価が一致する必要はない

## 2. Archetype R — 設定意識型常連

役割:
- 店の営業傾向を読む
- ノーマル機ではRBや高サンプル合算を重視
- 島・曜日の過去傾向を記憶
- 強い根拠があれば長時間遊技
- 根拠が崩れれば勝っていてもやめることがある

### 暫定特性
- settingKnowledge: 0.80
- storeMemory: 0.85
- islandMemory: 0.90
- weekdayMemory: 0.85
- diffCoinBias: 0.30
- rbEvidenceWeight: 0.90
- combinedEvidenceWeight: 0.75
- sampleConfidenceWeight: 0.85
- moveWillingness: 0.65
- quitDiscipline: 0.75
- gamesPerHour: 620〜750
- typicalStayCapacity: 3〜9時間

### 台評価イメージ
`machineScoreR = rbEvidence*0.34 + combinedEvidence*0.25 + sampleConfidence*0.18 + playerDiffSignal*0.08 + islandExpectation*0.10 + weekdayExpectation*0.05`

差枚の重みは小さめ。

例:
- +2000枚でもRBが弱くサンプル十分 → 低評価になり得る
- -800枚でもRB/合算が強くサンプルが育っている → 続行候補になり得る

## 3. Archetype L — ライト客

役割:
- 店の詳細な設定配分までは読まない
- 出ている台、空いている台、遊びやすさを重視
- 滞在時間は常連より短め
- 曜日/島の細かな癖は弱くしか覚えない
- 差枚や直近当たりを常連より強く評価する

### 暫定特性
- settingKnowledge: 0.25
- storeMemory: 0.45
- islandMemory: 0.25
- weekdayMemory: 0.15
- diffCoinBias: 0.80
- rbEvidenceWeight: 0.20
- combinedEvidenceWeight: 0.35
- sampleConfidenceWeight: 0.25
- moveWillingness: 0.35
- quitDiscipline: 0.35
- gamesPerHour: 500〜650
- typicalStayCapacity: 0.5〜3時間

### 台評価イメージ
`machineScoreL = playerDiffSignal*0.38 + recentHitSignal*0.22 + combinedEvidence*0.12 + storeExpectation*0.13 + occupancySocialSignal*0.10 + convenience*0.05`

RB単独の設定示唆を強く理解しない。

## 4. 同じ台を見た時の違い

例: 3200G / BB16 / RB7 / +1800枚

常連型:
- BBは強い
- RBは弱い
- 3200Gあるのでサンプル無視できない
- 「出ているが高設定根拠は弱い」と判断可能

ライト型:
- +1800枚
- BB16回
- 見た目に好調
- 空いたら座りたい候補になりやすい

逆例: 4200G / BB12 / RB17 / -500枚

常連型:
- RBを高評価
- 差枚マイナスでも候補に残す

ライト型:
- マイナス差枚
- 見た目が弱い
- 優先順位が下がりやすい

この認識差が店内の台移動を生む。

## 5. 個体状態

各Customerに最低限以下を持たせる。

```text
id
archetype
cashBudget
medalsHeld
arrivalTime
leaveDeadline
gamesPerHour
currentMachineId
currentSessionGames
lifetimeSessionGames
storeExpectation
categoryExpectation
islandExpectation
weekdayExpectation
fatigue
satisfaction
```

設定番号はCustomerへ保存しない。

## 6. 資金

資金は遊技継続の物理制約。

暫定分布例:

常連型:
- 15,000〜60,000円

ライト型:
- 3,000〜25,000円

ただし将来、持ちメダル・再プレイ・交換率を入れるため、単純に「1G=60円減る」方式にはしない。

## 7. 滞在可能時間

客は期待値だけで無限に遊技しない。

例:
- 昼休みに1時間だけ
- 仕事後19時から22時まで
- 朝から夕方まで

`leaveDeadline` 到達で原則退店。

これにより設定6を発見しても時間都合で帰る客が存在する。

## 8. 来店時間分布

常連型:
- 朝10時への比率を高める
- 強い曜日期待があるほど朝来店率上昇

ライト型:
- 12〜20時中心
- 夕方ピークの影響を強く受ける

これにより「強い日は朝から常連、夕方はライト客も増える」という店内構成を作れる。

## 9. 続行判断

続行判断は archetype ごとの評価 + 個体事情。

`continueUtility = machineScore + storeConfidence + heldMedalComfort - fatigue - timePressure - budgetPressure`

常連型:
- machineScoreを強く使う

ライト型:
- satisfaction / currentDiff / recentHitを強く使う

## 10. 台移動

客は現在台と空き台候補を比較する。

`moveGain = bestVacantScore - currentScore - moveCost`

moveGainが閾値超過なら移動。

常連型:
- 根拠のある空き台へ比較的移動しやすい

ライト型:
- 一度座ると大差がなければ動きにくい
- ただし目立って出ていた台が空けば反応しやすい

## 11. 店内で見えるゲーム表現

個体AIの判断は画面上の小さな行動差として表現できる。

常連型:
- データ表示を見る
- 複数台を見比べる
- 空き台を確認して移動
- 好挙動なら長時間同じ台

ライト型:
- 空いている/出ている台へ入りやすい
- 短時間で帰る
- 大きく出ると満足して退店する場合もある

UI上で「常連」「ライト」と巨大なラベルを出す必要はない。行動から客層がなんとなく分かることを目標にする。

## 12. 初期構成比（検証用）

まず:
- 常連型 35%
- ライト型 65%

から試験する。

店の成長・地域・機種構成で比率は変化可能にする。

弱い店:
- 設定意識常連が減少
- 偶発ライト客中心

信頼を回復した店:
- 常連型の再来店が増える

## 13. 次のシミュレーション

10台N-01島へ個体客を流し、最低10,000営業日相当を試験する。

比較指標:
- 客層別着席時間
- 客層別平均投資
- 客層別台移動回数
- 客層別退店時刻
- 客層別選択台の実設定分布（解析用のみ。客本人は知らない）
- 高設定発見率
- 低設定誤認率
- 設定6放置時間
- 設定1が高設定扱いされた時間
- 島アウト
- 売上/粗利

最重要確認:
同じ公開データを見た常連型とライト型が、設定番号を直接知らないまま異なる台選択・滞在行動を自然に示すか。

## 14. 次段階以降（未実装）

2種類の差が成立した後だけ追加候補を検討する。

候補:
- 沖スロ固定ファン
- AT一撃志向
- 低貸し/低予算客
- 新台目的客

現時点では追加しない。
