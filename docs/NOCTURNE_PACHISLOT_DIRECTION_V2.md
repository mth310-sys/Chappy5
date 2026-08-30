# ノクターン・アクアリウム — Pachislot Direction V2

Status: `HUMAN_DIRECTION_CONFIRMED_2026-08-30`

## Human direction

ノクターンを先行候補として開発する。成功後に刻ノ一閃へ進む。

重要：ノクターンは表現作品ではなくパチスロである。パチスロの基本型を崩して別ジャンルの探索ゲーム／選択ゲームへ寄せない。

- 基本は `BET → LEVER → 内部結果 → REEL SPIN → STOP1 → STOP2 → STOP3 → 出目／演出決着 → NEXT GAME`。
- パチスロは基本型の中で、演出を映像・音・光によってどう魅せるかを追求する。
- 映像・音・光だけを独立して追求せず、リール／停止／当落／前兆／BONUS等のパチスロEventと結びつける。
- リールを液晶を見るための3ボタンにしない。出目と演出を往復して見たくなる構造を目指す。

## Stage correction

旧プロトタイプの `第一停止 = 広場 / 塔 / 記録庫を毎ゲーム選択` は通常時の完成方向として採用しない。

通常ステージは複数ゲーム滞在する「演出の舞台」とする。プレイヤーへ毎ゲーム行先選択を要求しない。

Stage V2 prototype:
- 沈都外縁
- 月影広場
- 玻璃の塔
- 深層記録庫

各ステージは一定ゲーム滞在し、BET/LEVER/STOPという通常のパチスロ操作だけで進行する。ステージごとに映像・音・光・演出テーブルの個性を後続Runで重ねる。

`観測 / MEMORY / DEPTH` は毎ゲームの選択UIではなく、前兆・チャンスアップ・発展・当落をノクターンらしく見せる演出言語として再設計する。

## Implementation checkpoint

`prototypes/nocturne-aquarium/play-stage-v2.html` をStage V2の最初の比較開発機として追加。

現段階では旧内部抽選を大規模に壊さず、プレイヤーから見える毎ゲームの観測層選択HUDを外し、通常ステージ滞在を導入した。これは完成仕様ではない。

Next priorities:
1. LEVER/STOP/出目に連動した通常演出の強弱階層。
2. 前兆の映像・音・光の時間軸。
3. 発展→当落のパチスロ演出フロー。
4. BONUS突入と試聴済みBGMへの接続。
5. 実iPhone試打で演出頻度・テンポ・視認性を調整。

Human Gate 2 remains closed. `PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED` until browser/human verification.