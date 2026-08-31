# 開始ホール Day 1 → Day 2 客期待・記憶接続 v0.1

更新日: 2026-09-01

目的: `START_HALL_DAY1_13H_SALES_SIMULATION_V01.md` の営業結果を、翌日の来店・台選択へ返し、ゲームの最小経営ループを成立させる。

**位置づけ:** 構造検証用。正式バランス値ではない。

## 1. 成立させるループ

```text
運営フェーズで設定を決める
→ 13時間営業
→ 客が結果を観測する
→ 閉店時に期待・記憶を更新する
→ Day 2の来店/台選択/粘りが変わる
→ Day 2のOUT・売上・粗利が変わる
```

プレイヤーの設定変更が翌日の客数へ直接作用するのではなく、必ず営業結果と客の観測を経由する。

## 2. 記憶を3階層に分ける

各客AIは少なくとも以下を持つ。

```text
machineMemory[instanceId]
categoryMemory[categoryId]
hallMemory
```

将来、物理配置確定後に `islandMemory` を追加する。

### machineMemory
特定台について見た/打った履歴。

### categoryMemory
アイム系、30Φ、A+RT、ART/CZなどへの店内期待。

### hallMemory
「この店は設定を使うのか」「回収が強いか」という店舗全体の信用。

## 3. 真の設定は記憶へ保存しない

客が保存するのは観測情報のみ。

```text
visibleOut
visibleBonusPerformance
visibleDifference
staySignal
neighborSignal
```

真の設定1〜6はシミュレーション内部だけが知る。

これにより、
- 高設定不発 → 客には弱く見える
- 低設定誤爆 → 客には強く見える
- 高設定でも低稼働 → 判別材料不足

を自然に扱う。

## 4. Day 1のカテゴリ観測サンプル

Day 1既存結果を客側の印象へ変換する。

|カテゴリ|Day 1の見え方|観測評価の初期例|
|---|---|---:|
|25Φ完全告知|やや弱い|-0.08|
|30Φ沖スロ|弱め|-0.12|
|A+RT|客側プラスで目立つ|+0.18|
|ART/CZ|新しいが回収感|-0.15|
|旧台/バラエティ|低稼働で判別困難|-0.05|

評価レンジは -1.0〜+1.0。

これは「真の設定評価」ではなく、その日に客が受けた印象。

## 5. 記憶更新

前日の記憶を一晩で消さない。

暫定式:

```text
newMemory
= oldMemory × memoryRetention
+ observedSignal × observationWeight
```

開始ホールはもともと信用が弱いので、Day 1開始時の `hallMemory` を -0.20 と仮置きする。

Day 1が一部良かっただけでは店全体評価が急にプラスへ反転しない。

初期候補:
- memoryRetention = 0.75
- observationWeight = 0.25

客タイプによって将来変える。

## 6. Day 2の来店意欲

```text
visitScore
= personalBaseVisit
+ hallMemory
+ preferredCategoryMemory
+ dayAvailability
+ externalFactors
```

`visitScore` から来店確率を求める。

したがってA+RT好きの客はDay 1の結果を見てDay 2来店確率が上がりやすいが、30Φ中心の客は同じ反応をしない。

## 7. Day 2朝の台選択

Day 2の朝は前日履歴が存在する。

```text
seatScore
= machinePreference
+ popularity
+ machineMemory
+ categoryMemory
+ hallMemory
- crowdPenalty
```

Day 1朝より `machineMemory/categoryMemory` の影響が強くなる。

ただし朝一で真の当日設定は分からない。

## 8. Day 1 → Day 2の具体例

### A+RT
Day 1は区分実績出玉率100.15%で客側プラス。

結果:
- A+RT categoryMemory 上昇
- 前日目立った台のmachineMemory上昇
- A+RT好き常連のDay 2来店率上昇
- Day 2朝のA+RT着席がDay 1より強くなる

### ART/CZ
Day 1実績96.90%。

結果:
- 新台人気は残る
- しかしcategoryMemoryは低下
- 夕方以降の空き台再着席が弱くなる可能性

### 高設定不発台
真の設定4/5でも結果が弱ければmachineMemoryは上がらない。

プレイヤーは「設定を使ったのに客に伝わらなかった」という経営上の結果を受け入れる必要がある。

### 低設定誤爆台
設定1でも目立つプラス履歴なら翌朝狙われることがある。

プレイヤーから見ると翌日にその台を据え置く/下げる/別台へ配分する判断材料になる。

## 9. Day 2の基準変化サンプル

Day 1総OUT 572,400を固定値として再利用しない。

Day 2の構造検証用ターゲット例:

|カテゴリ|Day 1 OUT|Day 2期待変化|理由|
|---|---:|---:|---|
|25Φ|156,000|-2%|やや弱い印象|
|30Φ|140,000|-4%|弱めの観測|
|A+RT|150,400|+8%|前日客側プラス|
|ART/CZ|67,200|-5%|回収感|
|旧台|58,800|-1%|そもそも観測量が少ない|

この例ではDay 2総OUTは概算572,000枚前後で店全体はほぼ横ばいだが、**店内の稼働先がA+RTへ移る**。

店全体の信用がまだ低いため、1日だけ出したカテゴリがあっても総客数が突然倍になるような変化はさせない。

## 10. プレイヤー判断への返却

Day 1閉店画面では、内部の `memory` 数値をそのまま見せない。

プレイヤーに見せる候補:
- 稼働推移
- 機種別/島別OUT
- 差枚
- 売上/粗利
- 再着席率
- 朝一着席率
- 客の簡易反応

プレイヤーはこれらから「A+RTに期待が集まりそう」「30Φの信用を落としたかもしれない」と判断する。

詳細分析画面を開けば、ゲーム的に整理した「期待度傾向」を表示してもよいが、客AIの内部真値を完全開示しない。

## 11. Day 2営業で起こること

Day 2では同じ130台でもDay 1と着席順が変わる。

- A+RTへ朝客が寄る
- 前日誤爆した設定1が朝から回される
- 前日不発の設定5は空く可能性がある
- ART/CZは新台人気と前日回収感が競合する
- 旧台はさらに空席が目立つ

ここでプレイヤーがDay 2設定を変えていれば、前日期待と当日実態のズレが生まれる。

これが設定営業の読み合いになる。

## 12. ゲーム本体の状態遷移

```text
ManagementState
  ↓ apply settings
OpenState
  ↓
SalesSimulationState (10:00-23:00)
  ↓
CloseState
  ↓ aggregate visible results
CustomerMemoryUpdate
  ↓
NextDayManagementState
```

保存データには最低限:

```text
machineInstances[130]
customerMemories
categoryMemories
hallMemory
dailyHistory
cash
calendarDay
```

を保持する。

## 13. 次段階

次はDay 2を実際に2パターン比較する。

A. プレイヤーがDay 1と同じ設定配分を続ける
B. Day 1で客期待が上がったA+RTへ設定を追加投入する

比較対象:
- 来店数
- 朝一着席
- 総OUT
- 売上
- 粗利
- 客期待
- Day 3への残存効果

これで「設定を使うと今日の粗利は減るが、明日以降の稼働を買えるのか」を数値で検証する。
