# ノクターン・アクアリウム — Productization Master

Status: `FULL_PRODUCTIZATION_ACTIVE_2026-08-30`

Human directive: **5 Director全員で、ノクターン・アクアリウムをプロトタイプから完全製品候補まで仕上げる。**

Human Gate 2は維持する。AIだけで完成宣言しない。最終完成はHumanによる実機相当の確認と `HUMAN_MACHINE_VERIFIED` を必要とする。

## 最上位原則

- これは表現作品ではなくパチスロである。
- 基本型 `BET → LEVER → 抽選 → REEL SPIN → STOP1 → STOP2 → STOP3 → 出目／演出決着 → NEXT GAME` を中心にする。
- 演出は **映像で魅せる / 音で魅せる / 光で魅せる**。
- 映像・音・光は独立展示せず、同じGame Eventから動かす。
- 画面内の説明文、状態解説、選択理由、観測ログ等は極力出さない。
- 文字で説明せず、色、動き、光量、音、間、出目、停止タイミングで理解させる。
- 必要文字はクレジット、BET、最小限の状態名、当選告知等に限定する。
- 通常ステージは複数ゲーム滞在する演出舞台。毎ゲーム選択させない。
- `観測 / MEMORY / DEPTH` は操作UIではなく、前兆・チャンスアップ・発展・当落を魅せる演出言語として使う。
- リールを液晶を見るための3ボタンにしない。出目と演出を往復して見たくなる構造を目標とする。
- iPhone Safari実遊技と安定性を最優先し、高負荷表現で既知のWebKitクラッシュ経路を再導入しない。
- SIGNAL / FORGE / VAULT は変更しない。

## 5 Director統合任務

### Machine Director
完成像、優先順位、演出とリールの統合、商品性、Human Gateを管理する。新機能の量ではなく「一台のパチスロとして完成しているか」を判断する。

### Game & Reel Director
通常、前兆、発展、当落、BONUS、終了／復帰、リール、役、出目、停止、Game Eventを一体設計する。パチスロの型そのものは崩さない。

### Visual & Mechanism Director
液晶、筐体、LED、リール窓、ガラス、水中都市、役物を、Game Eventに従って同期させる。説明テキストに逃げず、視覚と光で期待度を伝える。

### Sound & Experience Director
BET、LEVER、SPIN、STOP、前兆、発展、当選、BONUS BGMを一貫したノクターン音響へ統合する。映像・光と同じEventで鳴らし、iPhone Safariの実音確認を必須とする。

### Playtest & QA Director
iPhone想定で通常連続遊技、全STOP順、雑操作、長時間、前兆、当落、BONUS、復帰を確認する。文字を読まないと理解できない箇所、退屈、演出過多、音が弱い、光が意味不明な箇所も不具合として記録する。

## 製品化順序

1. **通常遊技再構成** — persistent stage、文字削減、LEVER/STOP同期、通常演出の弱中強。
2. **前兆ライン** — 違和感 → 弱変化 → 中変化 → 強変化 → 発展を映像・音・光で構築。
3. **発展／当落ライン** — リール停止結果と液晶演出が同時に決着する演出群を構築。
4. **BONUSライン** — 当選告知、突入、BGM、専用映像、LED、終了、通常復帰を統合。
5. **リール／出目深化** — 演出と出目の往復、狙いどころ、停止形の意味を強化。
6. **筐体実在感** — 水槽、透明部品、リール窓、側面光、操作部、光漏れ、奥行きを完成機品質へ。
7. **音響完成** — 通常環境、機械音、停止音、前兆、発展、告知、BONUS BGMを最終統合。
8. **統合試打** — 30G / 50G / 100G以上、主要状態、雑操作、復帰、iPhone Safari実機確認。
9. **商品性調整** — 演出頻度、期待感、間、光量、音量、文字量、疲労、再遊技意欲を反復調整。
10. **Release Candidate** — 重大不具合、Visual、Audio、Reality、Playtestを確認しHuman Gate 2へ提出。

## Current checkpoint

`prototypes/nocturne-aquarium/play-stage-v2.html` を製品化先行開発機とする。

2026-08-30 first integrated correction:
- 常時表示していたステージ説明文を削除。
- ステージ名は遷移時の短い表示だけへ縮小。
- 旧観測HUDを非表示継続。
- LEVER起点の弱／中／強Visual-light cadenceを追加。
- STOP1 / STOP2 / STOP3に短い筐体・光反応を追加。
- 追加説明テキストなし。
- 内部出玉仕様の確定やHuman Gate 2 PASSは行っていない。

Current verification: `PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED`。
