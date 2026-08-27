# Chappy5 1号機 — 企画選定共有状態

> Status: `PRODUCT_PLANNING_ACTIVE`
> Stage: `Stage 1 — Product Planning`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production permission: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## 正本
最新 `main`、`README.md`、`docs/PACHISLOT_PRODUCTION_WORKFLOW.md`、`docs/REALITY_PRESENTATION_STANDARD.md`、`docs/MACHINE_01_CONCEPTS.md`、`docs/MACHINE_01_COMPARISON.md`。過去チャット・過去企画・旧SLOT制は正本ではない。

## 制作ライン
固定5 Director: Machine → Game & Reel → Visual & Mechanism → Sound & Experience → Playtest & QA。5つの独立Scheduled Taskを12分オフセットし、1巡60分。同じ1号機・同じ共通目標をmain経由で継続する。

## 現在地
Stage 1継続。3候補すべて生存。Visual & Mechanism Director第1巡で、Game & Reelが作った `1st=情報発生 → 2nd=期待分岐 → 3rd=意味確定` を液晶説明ではなく、リール窓・固定基準線・導光・希少可動機構へ翻訳した。採択企画はまだない。

## 現在の3候補
- `SIGNAL//3`: PHASE MARKと太い線接続で位相を“つながる／ずれる／反転する”として読む。TUNING RINGはSYNC級以上でのみ短く作動。計器UI増加は禁止方向。
- `FORGE//HEART`: 毎STOP大型ハンマーを却下。通常は金属図柄＋炉内残光、MASTER級のみPRESS RAM。物質感は最強だが、役物なしの通常出目が弱ければ失格。
- `VAULT://3`: 細いNOTCHを太いGATE CUTへ再定義し、固定SHEAR LINEで3STOP途中経過を一瞥。LOCK RINGとBOLTを頻度・役割分担。直感性は最強。

詳細は `docs/MACHINE_01_CONCEPTS.md`、比較は `docs/MACHINE_01_COMPARISON.md`。

## 今巡の共通目標
**「3STOPがテーマ演出ではなくゲームそのものになっているか」を、リール→Visual/Mechanism→Sound→机上試打まで同じ3候補で検証する。**

Game & ReelとVisual & Mechanismまでは、3STOPの情報差を物理的途中経過へ変換できる見込みを確認した。次はSoundがその情報を重複説明せず、手と耳へ同じ因果を返せるかを見る。

## 最大ボトルネック — 更新
**初見の可読性と、3時間打てる情報密度・刺激密度を両立できるか。**

- SIGNAL: 線接続は理解しやすくなったが、SF情報を足すほど計器ゲーム化する。
- FORGE: 大型RAMを希少化した後も通常出目に加工の快感が必要。
- VAULT: GATE CUTで視認性は改善したが、“開く／開かない”の単調化を避ける必要。

## Director評価差分
Machine Director総合暫定順位 `VAULT → SIGNAL → FORGE`。
Game & Reel専門評価 `SIGNAL → VAULT → FORGE`。
Visual & Mechanism専門評価 `VAULT ≈ SIGNAL → FORGE`。

順位を一本化しない。後続のSound、机上試打を経てMachine Directorが統合する。

## 今回確定したVisual & Mechanism方針
- 液晶はリールより先に答えを出さない。
- 1st/2nd/3rdの途中経過は固定基準線・図柄関係・局所導光で読ませる。
- 大型可動機構を毎STOPで動かさない。普段静かな物が意味ある時だけ動くことを価値にする。
- LEDは色替えではなく光路と周囲への照り返しを持つ光源として扱う。
- 上位状態は単なる色違いにせず、筐体構造／機構法則が一段変わる完成像を持つ。
- 具体寸法、図柄配列、モーション尺、実装方式はStage 2以降。現段階では固定しない。

## 未確定
3案の淘汰、最終候補数、具体配列、確率・数値スペック、Sound Signature最終形、音と機構の優先順位、30分／3時間疲労、過去資産の具体採否、Machine Director最終推奨。

## 次Directorが読むもの
最新main全体に加え、README、制作工程、Reality標準、本ファイル、`MACHINE_01_CONCEPTS.md`、`MACHINE_01_COMPARISON.md`。

Sound & Experience Directorは新企画を作らず、今回の物理途中経過へ音を重ねる。SIGNALは位相・残響・無音、FORGEは通常の小さな金属停止と希少RAM衝突、VAULTはGATE接続／ラッチ保持／BOLT後退の材質差を中心に、Signature Soundと3時間疲労を同時評価する。

## Human Gate
`HUMAN_GATE_1_NOT_READY` を維持。人間の `HUMAN_MACHINE_APPROVED` までコード／ゲーム／Micro Playable／Visual Prototype／Audio Prototype／リール・筐体・役物実装は禁止。AIはHuman Gateを通過しない。
