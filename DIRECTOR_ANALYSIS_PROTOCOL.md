# Director Analysis Protocol

このファイルはREADME.mdの5 Director運営を具体化する共通解析プロトコルである。README.mdに反する解釈は禁止し、README.mdを常に優先する。

## 1. 目的

専門Directorの解析をチャット内で消費せずGitHub上の共有知識として残し、Executive Game Directorが最新mainから確実に取得・比較・統合できるようにする。

解析の目的は点数付けではない。**現在のゲームに何が起きているか、どれほど重要か、どこまで確かか、何を次に確認・変更すべきかを伝えること**である。

## 2. 共通の解析記録

各専門Directorは重要な解析結果をGitHubへ残す。既存の解析記録がある場合は重複ファイルを量産せず、適切な既存ファイルを更新する。

各Findingには可能な限り以下を含める。

- `director` — 解析担当
- `status` — PASS / WARNING / FAIL / UNKNOWN
- `severity` — 1〜5。5がゲーム成功を阻害する最重要問題
- `confidence` — LOW / MEDIUM / HIGH
- `verification` — OBSERVED / SIMULATED / HUMAN_VERIFIED / UNKNOWN / UNVERIFIED
- `finding` — 何を発見したか
- `evidence` — コード、計測、シミュレーション、人間フィードバック等の根拠
- `impact` — プレイヤーまたは製品へ何が起こるか
- `recommended_action` — 推奨する次の行動
- `human_verification_needed` — YES / NO。YESなら人間に何を確認してほしいか
- `last_updated` — 更新日時または対象commit

根拠のない精密な数値化は禁止する。「面白さ82点」のような値を事実として作らない。

## 3. Director別の代表指標

### Game Systems Analysis

例：
- core_loop_status
- decision_quality
- dominant_strategy_risk
- difficulty_curve
- build_balance
- risk_reward_quality
- randomness_vs_skill

可能な項目は自動テスト・状態探索・シミュレーション等で裏付ける。

### Player Experience Analysis

例：
- clarity
- control_friction
- information_load
- tempo
- feedback_quality
- predicted_reward_feel
- predicted_replay_motivation
- predicted_dropoff_risk

これらは人間確認がない限り原則SIMULATEDである。人間として遊んだかのように記録しない。

### Progression & Content Analysis

例：
- short_term_progression
- mid_term_progression
- long_term_goal_strength
- unlock_density
- meaningful_build_diversity
- discovery_rate
- content_exhaustion_risk
- replay_depth

コンテンツ数ではなく、意味のある選択・変化・発見を評価する。

### Technical & Quality Analysis

例：
- critical_bugs
- state_integrity
- save_integrity
- save_migration
- regression_risk
- performance
- mobile_layout
- iphone_runtime
- safari_runtime

実機確認していない項目をPASSにしない。静的確認と実機確認を区別する。

## 4. Executive Dashboard

Executive Game Directorは、必要になった時点で `STUDIO_DASHBOARD.md` を作成・維持する。

Dashboardは詳細解析の代わりではなく、**最新の重要状態を一枚で把握する索引**である。

最低限、以下を把握できるようにする。

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | | | | | |
| Player Experience | | | | | |
| Progression & Content | | | | | |
| Technical & Quality | | | | | |

Executiveだけが総合状態・優先順位を統合判断する。専門Directorは自分の解析結果をExecutiveの総合判断として勝手に書き換えない。

## 5. Executiveが解析を読む手順

Executiveは毎回、前回Executive実行以降の最新mainを確認し、次の順で判断する。

1. 各専門Directorの最新Findingを読む。
2. 前回値・前回状態から何が変わったかを見る。
3. severityが高い問題を抽出する。
4. confidenceとverificationを確認する。
5. HUMAN_VERIFIEDの人間評価を特に重く扱う。
6. Director間で矛盾する解析を確認する。
7. 根拠の弱い高評価・低評価を鵜呑みにしない。
8. 現在の最優先目標を原則1つ決定する。
9. 採用する提案、保留する提案、却下する提案を判断する。
10. 必要な制作・修正・検証へ変換する。
11. Dashboardを更新する必要があれば更新する。

## 6. 差分を重視する

同じ解析を毎時間繰り返して成果扱いしない。

既知Findingについては、以下のいずれかがある場合に更新価値がある。

- 新しい証拠
- 反証
- severityの変化
- confidenceの変化
- verification状態の変化
- 修正による改善/悪化
- 人間フィードバック
- 別Directorとの重要な矛盾

変化がなければ「変化なし」を大量の文章にして残さない。

## 7. 人間評価との関係

`HUMAN_VERIFIED` はAIが生成してはならない。実際の人間プレイ結果が根拠として存在する場合だけ使用する。

AI解析が `SIMULATED: PASS` でも、人間が `HUMAN_VERIFIED: FAIL` と評価した場合、人間評価を打ち消してはならない。原因を再解析する。

一方、人間の一言を原因まで確定した事実にはしない。例えば「つまらない」はHUMAN_VERIFIEDな体験評価だが、「敵が少ないからつまらない」は別途原因検証が必要な場合がある。

## 8. 解析と制作の境界

専門Directorは解析だけをして何も前進させないことを目的にしない。ただし複数Directorが独立にゲーム本体を大改造することも避ける。

- 安全な計測、テスト、軽微な明白修正：専門Directorが実施可
- コアループ、主要進行、ゲーム全体の方向を変える変更：Executiveが統合判断
- 人間テスト対象を変える変更：原則Executive判断

## 9. 解析値の意味

`severity` は問題の重大度であり、面白さの点数ではない。

目安：
- 1 — 軽微。成功への影響が小さい
- 2 — 改善価値あり
- 3 — 無視すると体験・品質へ明確な影響
- 4 — 主要な成功条件を阻害する可能性が高い
- 5 — 現在のゲーム仮説・公開品質・データ安全性等を根本から脅かす

`confidence` は解析の確からしさであり、severityとは独立する。

例：`severity: 5 / confidence: LOW / verification: SIMULATED` は「もし正しければ重大だが、まだ仮説」という意味になる。

## 10. 24時間試験での評価

24時間終了時、ExecutiveはDashboardと詳細Findingを用いて、単なる作業回数ではなく以下を比較できる状態にする。

- 開始時と終了時の主要Status
- 解消した重大Finding
- 新たに発見した重大Finding
- HUMAN_VERIFIEDが必要な未確認事項
- 各Directorが独自の価値を出したか
- 重複解析が多すぎなかったか
- 解析が実際の制作判断へ変換されたか
- 24時間でゲームが明確に前進したか
