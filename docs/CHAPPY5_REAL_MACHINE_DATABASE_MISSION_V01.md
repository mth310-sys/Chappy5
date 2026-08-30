# Chappy5 実機基準データベース収集ミッション v0.2

更新日: 2026-08-31

## 目的

ホール経営ゲームの台性能・客AI・経済シミュレーションを、最初から架空数値だけで組み立てないため、実在パチスロ機を研究用基準機として収集する。

最終製品では実機名称・IP・演出・図柄・筐体等を使用せず、実機データから性能特性とレンジを抽出した後、遊創舎オリジナル架空機へ再設計する。

実機DBは「コピー用仕様書」ではなく「現実の性能分布と時代変化を知る研究DB」とする。

## 収集年代の範囲

**5号機初期から2026年現在までを網羅対象とする。**

単に現行機を集めるのではなく、パチスロのゲーム性・出玉構造・客層・ホール運用がどう変化したかを追えるDBにする。

大分類:
1. 5号機初期
2. 5号機中期
3. 5号機後期
4. 5.5号機 / 5.9号機
5. 6号機初期
6. 6.1〜6.5号機
7. スマスロ初期
8. スマスロ成熟期 / 2026年現行

規則上の厳密な区分と、市場上の便宜的な時代区分が一致しない場合は両方を記載する。

## 網羅方針

初回18〜30機種で終わらせない。

フェーズ1では代表機を選び、フェーズ2以降で継続拡張する。

目標:
- 最低100機種を中期目標
- 可能なら200機種以上へ拡張
- 各年代・各系統に偏りが出ないよう監査

有名機だけでなく、性能上の転換点になった機種、短命だった機種、技術介入機、沖スロ、低単価型、高単価型も含める。

## 収集対象の初期6系統

1. 王道ノーマル
2. 沖スロノーマル / 30φ
3. 技術介入ノーマル / RT系
4. 遊びやすいAT
5. バランスAT
6. 荒波AT

ただし年代を網羅する過程で、必要ならART / A+ART / 疑似ボーナスAT / CZ主導型 / 高純増AT / 上位AT依存型等の下位タグを追加する。

## 年代別に必ず押さえるテーマ

### 5号機初期〜中期
- Aタイプ / RT
- ARTの成立と普及
- ボーナス+ART
- 技術介入の位置付け
- コイン持ちと出玉速度のバランス

### 5号機後期
- 高純増AT/ART
- 疑似ボーナス
- ゲーム数解除/ゾーン
- 天井狙い
- 高い一撃性とホール粗利構造

### 5.5 / 5.9号機
- 規制対応でのゲーム性変化
- ART性能制約
- 有利区間前史
- 5号機後期との客層差

### 6号機初期
- 有利区間
- 2400枚規制
- 高ベース
- 低い吸い込みと低い一撃性
- 短期出玉性能の変化

### 6.1〜6.5号機
- ベース低下
- 有利区間仕様変化
- 差枚管理
- 一撃性能復活
- 客の遊技時間/投資行動の変化

### スマスロ初期〜現代
- メダルレス
- 高単価化
- 上位AT
- 高純増
- コンプリート機能
- MY/TYの拡大
- 一撃志向と短時間遊技適性
- ホール設備投資/導入費との関係

## Chappy5 5担当

### 1. Normal History Director
王道ノーマルを5号機から現代まで担当。

追跡:
- ジャグラー系統の世代差
- Aタイプの設定差
- ボーナス獲得枚数
- ベース
- コイン単価
- 長期稼働性

### 2. Okinawa / Technical History Director
沖スロ30φと技術介入系を年代横断で担当。

追跡:
- ハナハナ系統
- 沖スロ地域性
- 30φ固定客
- RT技術介入機
- フル攻略時出率と一般遊技時との差

### 3. ART / Mild / Balanced AT History Director
5号機ARTから現代のマイルド/バランスATまで担当。

追跡:
- A+ART
- ART
- 疑似ボーナスAT
- CZ型
- 6号機初期AT
- 中単価スマスロ

### 4. High-Volatility / Smart Slot History Director
5号機高純増ATから現代スマスロ高単価領域を担当。

追跡:
- 初当たりの重さ
- 天井/ゾーン
- 純増
- TY/MY
- 上位AT依存
- 一撃性
- コイン単価

### 5. Data QA / Market History Director
他4担当を年代横断で監査し、市場/規制の変化を整理する。

確認:
- メーカー公式と解析値の区別
- 数値の出典
- 同一機種のサイト間差異
- 推定値の明示
- 稼働/中古価格/市場評価等の時点
- 世代間で定義の違う指標を無理に単純比較しない
- 当時の市場環境と現在評価を混同しない

## 1機種あたりの必須フィールド

### Identity
- machineName
- manufacturer
- releaseDate
- generation/regulation
- marketEra
- medalSize: 25phi / 30phi
- systemType
- subTypeTags
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
- payout ceiling / regulatory constraints if relevant

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
- knowledgeAdvantage

上記主観評価は必ず「分析評価」として数値実データから分離する。

### Hall / market
- utilization/out if reliable
- sales per machine if reliable
- gross profit per machine if reliable
- coin unit by setting if available
- new-machine popularity / longevity evidence
- used-machine market price if useful and timestamped
- installation scale / market penetration if available
- regional characteristics if evidence exists
- relevant regulation-era context

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

古い5号機は公式ページ消失が多いため、Wayback等のアーカイブ、当時資料、複数解析媒体の照合を許可する。その場合はソース種別と保存時点を明記する。

Web検索結果の要約だけを出典にせず、可能な限り元ページを確認する。

## DB構造

最初は人間がレビューしやすいMarkdownで収集する。

年代と系統の両方で追跡できるようにする。

候補構成:

`docs/real_machine_db/INDEX.md`
`docs/real_machine_db/eras/5g_early/`
`docs/real_machine_db/eras/5g_mid/`
`docs/real_machine_db/eras/5g_late/`
`docs/real_machine_db/eras/5_5_5_9/`
`docs/real_machine_db/eras/6g_early/`
`docs/real_machine_db/eras/6_1_6_5/`
`docs/real_machine_db/eras/smartslot_early/`
`docs/real_machine_db/eras/current_2026/`

各機種ファイル内にsystemType/subTypeTagsを持たせ、カテゴリ横断検索可能にする。

十分な件数とフィールドが安定してからJSON/CSV等の機械可読DBを生成する。

## 比較表

年代ごと、系統ごとの双方で比較表を作る。

重要なのは機種ランキングではなく性能レンジと時代変化の抽出。

例:
- ノーマルの設定1〜6出率レンジ推移
- BB/RB設定差の世代変化
- AT初当たりレンジ推移
- 純増推移
- コイン単価推移
- TY/MY推移
- ベース推移
- 技術介入による理論値差
- 一撃性と遊技時間の変化

## 架空機への変換ルール

実機1台を名前だけ変えてコピーしない。

原則:
1. 同系統かつ複数年代の3機種以上を比較
2. 共通する現実的性能レンジと時代特性を抽出
3. ゲーム内で必要な役割を決める
4. 複数実機の特性を参考に独自パラメータを設計
5. 架空名称/外観/演出/ゲーム性へ置換
6. 元実機と1対1対応にならないかQA

このDBを使えばゲーム内に「古い5号機的な設計思想」「6号機初期の遊びやすい設計思想」「現代スマスロ的な高単価設計思想」を持つ架空機を別々に作れる。

## フェーズ1成果物

まず各年代・各系統の代表機を最低30〜50機種まで収集し、以下を提出する。

1. 機種別データシート
2. 年代別代表機一覧
3. 6系統比較表
4. 規制/市場転換点一覧
5. 欠損データ一覧
6. CONFLICT一覧
7. 各系統の現実的性能レンジ
8. 各年代の性能レンジ
9. 客AIへ影響しそうな特性一覧
10. 架空機化する際に残すべき性能軸と捨てるべきIP固有要素

## 禁止事項

- 不明な数値をもっともらしく生成しない
- 実機の画像・図柄・キャラ・音・演出文言をゲーム素材として保存しない
- 単一実機をそのまま架空名へ置換しない
- 出典なしの数値を確定値としてDBへ入れない
- 人気と機械性能を同一視しない
- 稼働率を機種固有の固定値にしない
- 現在価格と過去価格を混ぜない
- 5号機とスマスロの指標を定義差を無視して単純比較しない

## 完了判定

これは一度で完了するDBではなく、継続拡張型とする。

初回完了条件:
- 5号機初期〜2026年現行まで各時代に代表機が存在
- 6系統すべてに複数年代の機種が存在
- 30〜50機種以上の主要数値に出典が付く
- QA担当がCONFLICT/UNVERIFIEDを整理
- 年代別性能レンジが抽出できる

中期目標:
- 100機種以上
- 主要な市場転換点をほぼ網羅

長期目標:
- 200機種以上を目安に継続蓄積
- 客AI・ホール経営シミュレーションの基礎データセットとして利用可能な状態

その後ユーザーと機種系統・客層を再確認してから、客AIとの相性マトリクスへ進む。
