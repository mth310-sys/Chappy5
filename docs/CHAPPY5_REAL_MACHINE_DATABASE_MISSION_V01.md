# Chappy5 実機基準データベース収集ミッション v0.1

更新日: 2026-08-31

## 目的

ホール経営ゲームの台性能・客AI・経済シミュレーションを、最初から架空数値だけで組み立てないため、実在パチスロ機を研究用基準機として収集する。

最終製品では実機名称・IP・演出・図柄・筐体等を使用せず、実機データから性能特性とレンジを抽出した後、遊創舎オリジナル架空機へ再設計する。

実機DBは「コピー用仕様書」ではなく「現実の性能分布を知る研究DB」とする。

## 収集対象の初期6系統

1. 王道ノーマル
2. 沖スロノーマル / 30φ
3. 技術介入ノーマル / RT系
4. 遊びやすいAT
5. バランスAT
6. 荒波AT

初回は各系統最低3機種、目標5機種。最低18機種、目標30機種。

年代は一世代だけに偏らせず、5号機後期・6号機・スマスロを必要に応じて含める。ただしゲームの現行基準レンジを作る際は現行/近年機を重く扱う。

## Chappy5 5担当

### 1. Normal Director
王道ノーマルを担当。

候補例:
- マイジャグラーV
- アイムジャグラーEX
- ファンキージャグラー2

候補は固定ではない。データ品質を優先して追加/変更可。

### 2. Okinawa / Technical Director
沖スロ30φと技術介入系を担当。

候補例:
- ハナハナホウオウ～天翔～
- キングハナハナ-30
- スターハナハナ-30
- ディスクアップ系
- 新ハナビ系

沖スロと技術介入は同じ系統として扱わず、担当者を共有するだけ。

### 3. Mild / Balanced AT Director
遊びやすいAT・バランスATを担当。

機械割だけで分類せず、初当たり、通常時投資速度、AT性能、平均TY、出玉速度、天井、CZ構造等から分類根拠を記録する。

### 4. High-Volatility AT Director
荒波AT・スマスロ高単価領域を担当。

一撃性だけでなく、初当たりの重さ、上位AT依存、MY/TY、コンプリート級挙動への距離、短時間遊技適性などを調査する。

### 5. Data QA / Market Director
他4担当のデータ監査と市場データを担当。

確認:
- メーカー公式と解析値の区別
- 数値の出典
- 同一機種のサイト間差異
- 推定値の明示
- 稼働/中古価格/市場評価等の時点
- 5号機/6号機/スマスロで単純比較できない指標の警告

## 1機種あたりの必須フィールド

### Identity
- machineName
- manufacturer
- releaseDate
- generation/regulation
- medalSize: 25phi / 30phi
- systemType
- smartSlot: true/false

### Setting / probability
- settingCount
- payoutRateBySetting
- BB/RB probability if applicable
- AT/CZ initial-hit probability by setting if applicable
- setting-sensitive small roles if reliable data exists
- setting inference characteristics

### Output performance
- base / gamesPer50Medals or equivalent
- coinUnit if reliable market data exists
- averageTY if available
- MY or equivalent volatility metric if available
- AT pure increase / net coins per game
- average bonus/AT payout
- upper-mode / premium-route characteristics
- ceiling/game-number features

### Player experience
- volatilityLevel
- initialHitLightness
- outputSpeed
- oneShotPotential
- technicalSkillDemand
- ruleComplexity
- shortSessionSuitability
- longSessionSuitability
- settingInferenceEase
- beginnerSuitability
- fixedFanStrength

上記主観評価は必ず「分析評価」として数値実データから分離する。

### Hall / market
- utilization/out if reliable
- sales per machine if reliable
- gross profit per machine if reliable
- coin unit by setting if available
- new-machine popularity / longevity evidence
- used-machine market price if useful and timestamped
- regional characteristics if evidence exists

## 情報信頼度

各値に可能な限り以下を付ける。

- OFFICIAL: メーカー・公的資料
- INDUSTRY: DK-SIS等の業界統計/業界資料
- ANALYSIS_HIGH: 複数解析媒体一致
- ANALYSIS_SINGLE: 単一解析媒体
- ESTIMATED: 推定
- UNVERIFIED: 未確認
- CONFLICT: 情報源間で不一致

不明値を補間して確定値にしない。

## 出典ルール

優先順位:
1. メーカー公式
2. 公的/業界一次資料
3. 信頼できる解析媒体
4. 複数二次資料の一致
5. 単一二次資料

各機種にsource URLと取得日を残す。

Web検索結果の要約だけを出典にせず、可能な限り元ページを確認する。

## DB構造

最初は人間がレビューしやすいMarkdownで収集する。

候補構成:

`docs/real_machine_db/INDEX.md`
`docs/real_machine_db/normal/*.md`
`docs/real_machine_db/okinawa/*.md`
`docs/real_machine_db/technical/*.md`
`docs/real_machine_db/at_mild/*.md`
`docs/real_machine_db/at_balanced/*.md`
`docs/real_machine_db/at_high_volatility/*.md`

十分な件数とフィールドが安定してからJSON/CSV等の機械可読DBを生成する。

## 比較表

各カテゴリ収集後、カテゴリ比較表を作る。

重要なのは機種ランキングではなく性能レンジ抽出。

例:
- ノーマルの設定1〜6出率レンジ
- ノーマルのBB/RB設定差
- ATの初当たりレンジ
- ATの純増レンジ
- コイン単価レンジ
- TY/MYレンジ
- 技術介入による理論値差

## 架空機への変換ルール

実機1台を名前だけ変えてコピーしない。

原則:
1. 同系統3機種以上を比較
2. 共通する現実的性能レンジを抽出
3. ゲーム内で必要な役割を決める
4. 複数実機の特性を参考に独自パラメータを設計
5. 架空名称/外観/演出/ゲーム性へ置換
6. 元実機と1対1対応にならないかQA

## 初回成果物

Chappy5はまず最低18機種を収集し、以下を提出する。

1. 機種別データシート
2. 6系統比較表
3. 欠損データ一覧
4. CONFLICT一覧
5. 各系統の現実的性能レンジ
6. 客AIへ影響しそうな特性一覧
7. 架空機化する際に残すべき「性能軸」と捨てるべきIP固有要素

## 禁止事項

- 不明な数値をもっともらしく生成しない
- 実機の画像・図柄・キャラ・音・演出文言をゲーム素材として保存しない
- 単一実機をそのまま架空名へ置換しない
- 出典なしの数値を確定値としてDBへ入れない
- 人気と機械性能を同一視しない
- 稼働率を機種固有の固定値にしない
- 現在価格と過去価格を混ぜない

## 完了判定

最低18機種かつ各6系統に3機種以上、必須項目の主要数値に出典が付き、QA担当がCONFLICT/UNVERIFIEDを整理した時点を初回DB完成とする。

その後ユーザーと機種系統・客層を再確認してから、客AIとの相性マトリクスへ進む。
