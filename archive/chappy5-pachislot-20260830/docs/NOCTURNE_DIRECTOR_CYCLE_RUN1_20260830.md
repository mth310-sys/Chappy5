# ノクターン・アクアリウム — 5 Director Product Cycle Run 1

Status: `ACTIVE_PRODUCT_CYCLE_RUN1`

Human directive 2026-08-30: 各担当、製品化作業を開始する。

正本: latest main / README / PACHISLOT_PRODUCTION_WORKFLOW / REALITY_PRESENTATION_STANDARD / NOCTURNE_PRODUCTIZATION_MASTER_20260830.

完成像はHuman提示のノクターン・アクアリウム完成イメージを参照する。ただし画像内の数値・確率・純増・天井等は自動的に確定仕様としない。SIGNAL / FORGE / VAULTは変更禁止。

## 共通Human Rule
- 画面内の説明文は極力使わない。
- パチスロの基本操作を中心にする。
- 映像・音・光はGame Eventに従って同期する。
- 通常ステージは複数ゲーム滞在。毎ゲーム選択UIにしない。
- 完成宣言はHuman Gate 2まで禁止。

## Run 1 — Machine Director
製品化の第一ボトルネックを「通常時から当たりまでの一連のパチスロ演出骨格」とする。新しい探索UIは追加しない。現在のStage V2を統合開発機として前進させる。

Acceptance:
- 通常遊技を連続して回せる。
- 弱→中→強→発展→当落が文字説明なしで視覚・光・音から区別できる。
- リール停止が演出進行の同期点になる。
- BONUSへ入る経路を作る。

## Run 1 — Game & Reel Director
担当: 通常→前兆→発展→当落→BONUSのGame Event骨格。

実装方針:
- BET→LEVER→SPIN→STOP×3の基本型を維持。
- 演出抽選はprototype-only tuningとして分離し、確定出玉仕様と混同しない。
- STOP1/2/3で情報量と緊張を上げ、第三停止で結果へ収束。
- 出目は演出と独立させず、第三停止後の結果Visualへ接続。
- 旧「第一停止=行先選択」は完成方向から除外。

## Run 1 — Visual & Mechanism Director
担当: 完成イメージに近づける筐体、水槽、左右透明発光部、下部時計機構、リール窓、LED同期。

実装方針:
- テキストパネルを増やさない。
- 通常時は暗い水中の奥行き、前兆で遠景/クラゲ/側面光が変化、発展で水槽全体の光路を使う。
- STOP入力は各リール＋左右フレーム＋下部機構へ短く同期。
- 当たりは第三停止後の「間」から解放へ。
- iPhone WebKitで危険な高頻度DOM更新・重いfilter/blend stackを避ける。

## Run 1 — Sound & Experience Director
担当: BET/LEVER/SPIN/STOP/前兆/発展/告知/BONUSを一つの音響文法へ統合。

実装方針:
- 既存v3 procedural buffersと試聴済みBGM方向を再利用可能。
- 常時環境音は弱く、操作音と当落音を埋めない。
- STOP1→2→3で音響密度を段階化。
- 強演出では一度「無音/減衰」を作り、第三停止後の解放を強調。
- AudioContext開始は実タッチ起点を維持。

## Run 1 — Playtest & QA Director
担当: 上記統合後の実ブラウザ検証。

必須:
- iPhone幅390px。
- 6停止順。
- 30G以上通常連続遊技。
- rapid tap / idle STOP / spin中BET / reload。
- 44px以上のtouch target。
- horizontal overflowなし。
- JS error / DOM growth / animation accumulation / WebKit crash監視。
- 前兆→発展→当落→BONUS→通常復帰の到達確認。
- 説明文を読まないと成立しない箇所をUX defectとして記録。

Current verification remains `PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED` until evidence exists.
