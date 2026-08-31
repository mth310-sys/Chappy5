# Customer Parameter Composition v0.1

Status: PROVISIONAL CALCULATION BASELINE

`CUSTOMER_FIXED_MODEL_CATALOG_V01.md` の269固定モデルへ、無理のない個体差を与えるための合成方式。

## 1. 原則

269モデルへ個別数値を直書きしない。

**基準値 + 年代補正 + 生活職業補正 + 打ち方補正 + 組み合わせ補正 + 個体差**

で生成する。

ただし最終値は固定モデルごとの min/max で clamp し、禁止条件を検証する。

年代・職業だけから人格を決めつけず、主に「時間制約・経済条件・遊技行動」に影響させる。

## 2. 内部パラメータ（0–100）

- budgetPower: 遊技予算余力
- timeFreedom: 来店時間自由度
- information: 情報感度
- settingSkill: 設定推測力
- technicalSkill: 遊技技術
- patience: 粘り
- quitSpeed: 見切り速度
- heat: 熱くなりやすさ
- caution: 慎重さ
- mobility: 台移動傾向
- hallLoyalty: 店への愛着形成性
- novelty: 新台反応
- expectationFocus: 期待値重視度

別途、来店可能時間帯・曜日・予算金額・最大滞在時間を生活職業モデルから生成する。

## 3. 打ち方の中心プロファイル

| 打ち方 | 情報 | 判別 | 期待値 | 粘り | 見切り | 移動 | 新台 | 熱さ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 設定狙い ST | 75 | 72 | 80 | 72 | 68 | 55 | 45 | 25 |
| ハイエナ HY | 82 | 55 | 92 | 38 | 88 | 90 | 35 | 15 |
| 新台追随 NW | 60 | 45 | 45 | 58 | 45 | 48 | 95 | 48 |
| 機種固定 MF | 42 | 40 | 30 | 78 | 30 | 20 | 25 | 42 |
| 勝負型 GB | 35 | 32 | 25 | 70 | 28 | 42 | 55 | 82 |
| エンジョイ EN | 28 | 25 | 18 | 55 | 35 | 32 | 45 | 45 |
| 無計画 NP | 18 | 15 | 10 | 45 | 25 | 58 | 50 | 65 |

この表は固定値そのものではなく中心値。個体生成時に範囲を持たせる。

## 4. パチプロ専用中心値

### PRO-ST
- information 95
- settingSkill 92
- technicalSkill 88
- expectationFocus 98
- patience 82
- quitSpeed 88
- caution 90
- mobility 70
- heat 8

### PRO-HY
- information 96
- settingSkill 72
- technicalSkill 88
- expectationFocus 99
- patience 35
- quitSpeed 96
- caution 94
- mobility 98
- heat 5

パチプロは一般客ST/HYと同一AIにしない。

## 5. 年代補正

年代は主に体力・時間・新台反応などへ弱い補正を与える。嗜好や能力を年代だけで固定しない。

| 年代 | timeFreedom | novelty | maxSession傾向 |
|---|---:|---:|---|
| 20代 | +5 | +8 | 標準 |
| 30代 | 0 | +5 | 標準 |
| 40代 | 0 | 0 | 標準 |
| 50代 | +2 | -3 | 標準 |
| 60代 | +8 | -6 | やや短め〜標準 |
| 70代 | +12 | -8 | 短め〜標準 |

勤務・職業側の補正を優先するため、会社員70代等を無理に想定する必要はない（42基礎モデル制約が先に適用される）。

## 6. 生活・職業補正

### 大学生
- budgetPower -18
- timeFreedom +12
- 平日: 授業時間による制約
- 休日: 自由度高

### アルバイト
- budgetPower -10
- timeFreedom +5
- シフト型を高確率

### 会社員
- budgetPower +5
- timeFreedom -15
- 日勤中心、仕事帰り来店を高確率
- 夜勤/シフト個体も許容

### 自営業
- budgetPower +8
- timeFreedom +8
- 不規則/時間自由を高確率

### フリーランス
- budgetPower 0
- timeFreedom +15
- 時間自由/不規則を高確率

### 主婦
- budgetPower -3
- timeFreedom +6
- 日中中心になりやすいが固定しない

### 無職
- budgetPower -20
- timeFreedom +25
- 時間自由を高確率

### 年金暮らし
- budgetPower -8
- timeFreedom +25
- 日中来店を高確率

### パチプロ
- budgetPowerは一般的な経済力と分離
- timeFreedom +30
- 期待値を基準に遊技資金を管理
- 開店前判断・長時間稼働・店移動を許可

## 7. 経済力生成

生活職業ごとに許容する経済力レンジを持たせる。

経済力は職業名から一意に決定しない。
例:
- 会社員でも「やや低〜富裕」まで成立可能
- 自営業も低〜富裕まで成立可能
- 大学生は低〜余裕ありを基本、富裕は非常に低確率
- 年金暮らしも低〜余裕ありまで成立可能
- 無職の富裕個体は低確率だが、資産保有等を想定し禁止にはしない

経済力は日予算上限の分布へ接続する。毎回来店時に必ず上限まで使うわけではない。

## 8. 勤務・時間タイプ制約

- 大学生: 授業型（内部）/ シフト / 不規則 / 時間自由
- アルバイト: シフト中心
- 会社員: 日勤中心 + 夜勤 + シフト
- 自営業: 日勤 / 不規則 / 時間自由
- フリーランス: 不規則 / 時間自由中心
- 主婦: 家庭時間帯制約（内部）/ 不規則 / 時間自由
- 無職: 時間自由中心
- 年金暮らし: 時間自由中心
- パチプロ: 時間自由

不成立な勤務タイプは抽選候補に入れない。

## 9. 機種嗜好

打ち方とは別に0〜100の嗜好ウェイトを持つ。

- normalPreference
- artPreference
- artRtPreference
- okisloPreference
- newMachinePreference
- favoriteMachineAffinity

年代による補正は弱くし、個人差を大きくする。
「70代だからARTを禁止」「20代だから沖スロを嫌う」のような決め打ちはしない。

ただしゲーム開始時代（5号機モデル）に存在しない将来カテゴリは時代進行まで抽選対象外。

## 10. 個体差

中心値から原則 ±10〜20 の範囲で揺らす。
パラメータごとに固定モデル側の min/max を設定する。

例:
設定狙い客の expectationFocus は高レンジから生成し、無計画客が偶然95になることは許可しない。

パチプロではさらに狭い専用レンジを使用し、熱くなりやすさ等が極端に高い個体を通常生成しない。

## 11. 組み合わせ補正

年代・職業・打ち方の単純加算だけでは不自然になる場合にのみ使用する。

例:
- 20代大学生ST: 情報感度を少し上げ、予算上限を抑える
- 会社員HY: 平日は仕事帰り時間帯に限定されやすく、探索可能時間を抑える
- 年金暮らしMF: 日中来店・機種固定継続を強める
- 無職GB: timeFreedomは高いがbudgetPowerに上限補正

組み合わせ補正は必要最小限にし、269件すべてへ手入力しない。

## 12. 常連システムとの接続

固定モデル生成時点では常連ではない。

CustomerInstanceに以下を保持する。
- visitCount30d
- lastVisitDay
- hallTrust
- hallLoyalty
- machineMemories
- categoryMemories
- favoriteMachineIds
- competitorPreference
- regularStage

regularStage:
0 初来店/未定着
1 再来店客
2 準常連
3 常連
4 超常連
5 離反傾向

段階は単純な来店回数だけで決めず、来店頻度・信用・満足・競合評価を合成して更新する。

## 13. 次工程

この係数をコード化して269固定モデルからCustomerInstanceを生成するジェネレーターを作る。
その後、既存A+RT32顧客シミュレーションの4固定タイプをCustomerInstanceへ置き換える。
