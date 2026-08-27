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
Stage 1継続。3候補すべて生存。Game & Reel Director第1巡で、共通ボトルネックだった「3STOPが内部当選後の見せ方に過ぎない」問題へ具体的な出目情報階層を与えた。採択企画はまだない。

## 現在の3候補

- `SIGNAL//3`: 1stで基準波、2ndで位相差、3rdでSYNC/ECHO/DRIFT/NOISEを確定。規則的な“ズレ”そのものを価値にでき、Game & Reel観点で最も伸びた。
- `FORGE//HEART`: 1stで加工起点、2ndでTEMPER/OVERHEAT/COLD/FOLD、3rdでMASTER/USABLE/CRACK/REFORGE。左=素材／中=熱／右=刻印の固定役割案は却下し、全リール共通語彙へ修正。
- `VAULT://3`: 1stで基準タンブラー角、2ndでDOUBLE CLICK/OFFSET/CROSS、3rdでOPEN/FALSE GATE/ONE PIN LEFT/RELOCK。AUTHでは一部タンブラー半固定によりSTOP責務を変える。

詳細は `docs/MACHINE_01_CONCEPTS.md`、専門比較は `docs/MACHINE_01_COMPARISON.md`。

## 今巡の共通目標
**「3STOPがテーマ演出ではなくゲームそのものになっているか」を、リール→Visual/Mechanism→Sound→机上試打まで同じ3候補で検証する。**

Game & Reelでは3案とも `1st=情報発生 → 2nd=期待分岐 → 3rd=意味確定` の企画骨格を作れた。次はこの情報差が液晶説明なしでも物理的に伝わるかを検証する。

## 最大ボトルネック — 更新
“STOPに意味を与えられるか”から一段進み、**その意味をリール窓・図柄・機構・光・音だけで瞬時に読めるか**が最大ボトルネック。

- SIGNAL: 位相差を難解な計器読解にしない。
- FORGE: 大型ハンマーを休ませてもリールだけで鍛造が成立すること。
- VAULT: NOTCHを細密化せずiPhoneでも一瞥できること。

## Director評価の重要差分
Machine Director総合暫定順位は `VAULT → SIGNAL → FORGE`。Game & Reel専門評価は `SIGNAL → VAULT → FORGE`。この差は削除せず、後続Directorが統合する材料とする。点数だけで採択しない。

## 確定事項
1号機は完全オリジナル。完成機前提。REALITY/PRESENCEをゲーム性と同格。リールを飾りにしない。Soundを後付けにしない。3候補は現時点で生存。Human Gate前のコード／ゲーム／Micro Playable／Visual・Audio Prototype／リール・筐体・役物実装は禁止。AIは `HUMAN_MACHINE_APPROVED` を発行しない。

## 今回確定したGame & Reel方針
- 3案とも1st/2nd/3rdで異なる情報責務を持たせる。
- 液晶より先に出目が意味を持つ。
- 同じ三段演出を100G反復しない。
- 出目法則・演出信頼性を設定差で壊さない。
- 報酬中／上位でもリールの意味を残し、色違い状態にしない。
- 数値確率・具体的配列・停止制御はStage 2以降。現段階では確定しない。

## 未確定
3案の淘汰、最終候補数、具体配列、確率・数値スペック、Visualでの出目可読性、Mechanism頻度、Signature Sound最終形、長時間疲労、過去資産採否、Machine Director最終推奨。

## 次Directorが読むもの
最新main全体に加え、`README.md`、制作工程、Reality標準、本ファイル、`MACHINE_01_CONCEPTS.md`、`MACHINE_01_COMPARISON.md`。

Visual & Mechanism Directorは新企画を作らず、今回のSTOP情報階層を物理筐体へ翻訳する。優先条件は、SIGNALを計器ゲーム化しない、FORGEで毎STOP大型ハンマーを動かさない、VAULTのNOTCHを細密パズル化しないこと。

## Human Gate
`HUMAN_GATE_1_NOT_READY` を維持。最終候補が完成機として頭の中で試打でき、5 Director評価・比較・最大リスク・Machine推奨・人間が決めるべき点が揃った時のみ `HUMAN_GATE_1_WAITING` へ移行する。人間の `HUMAN_MACHINE_APPROVED` まで本制作禁止。
