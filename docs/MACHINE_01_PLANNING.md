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
Stage 1継続。3候補すべて生存。Game & Reelが作った `1st=情報発生 → 2nd=期待分岐 → 3rd=意味確定` をVisual & Mechanismが物理途中経過へ翻訳し、Sound & Experience第1巡で同じ因果を耳と手へ接続した。採択企画はまだない。

## 現在の3候補
- `SIGNAL//3`: PHASE MARK＋線接続＋位相／残響／無音。Signature候補 `THREE-LOCK RESOLVE` は雑音→無音→完全同期→リング物理ロック。Sound統合力は3案首位。
- `FORGE//HEART`: 通常STOPは小さな材質音、MASTER級だけ `DEAD-AIR PRESS`。質量感は最強だが、Soundで通常リールの弱さを隠した場合は淘汰対象。
- `VAULT://3`: GATE CUT＋SHEAR LINE＋位置の異なる内部ラッチ音。Signature候補 `FULL WITHDRAWAL` は三連ピン→ラッチ→リング→左右BOLT→閉鎖音場の開放。初見理解は最速。

詳細は `docs/MACHINE_01_CONCEPTS.md`、比較は `docs/MACHINE_01_COMPARISON.md`。

## 今巡の共通目標
**「3STOPがテーマ演出ではなくゲームそのものになっているか」を、リール→Visual/Mechanism→Sound→机上試打まで同じ3候補で検証する。**

Soundまで、3STOPの情報差を重複説明ではなく異なる感覚へ翻訳できる見込みを確認した。次のPlaytest & QAは企画書の魅力ではなく、最初の5分／通常100G／ハマり／失敗／初当たり／上位非到達／上位／終了直後／次BETを一続きに机上試打する。

## 最大ボトルネック — 更新
**「初見で3STOPの意味が分かる」と「100G〜3時間、その意味が反復作業へ落ちない」を同時に成立できるか。**

- SIGNAL: 音がゲーム法則そのものになれる一方、電子音を足すほどSF UI化・高域疲労する。
- FORGE: 希少RAM音は強いが、通常出目が弱い場合Soundがアトラクションとして欠点を隠してしまう。
- VAULT: 物理解放は直感的だが、CLICKの快感だけでは「開く／開かない」の単調化を解決できない。

## Director評価差分
Machine Director総合暫定順位 `VAULT → SIGNAL → FORGE`。
Game & Reel専門評価 `SIGNAL → VAULT → FORGE`。
Visual & Mechanism専門評価 `VAULT ≈ SIGNAL → FORGE`。
Sound & Experience専門評価 `SIGNAL → VAULT → FORGE`。

順位を一本化しない。Playtest & QAの机上試打を経て次巡Machine Directorが統合する。

## 今回確定したSound & Experience方針
- 毎STOPで音程／音量を段階上昇させるだけの設計は禁止方向。
- 通常時は低密度。強い音を増やすより静けさと希少な解放の落差を価値にする。
- 失敗ごとのブザー／否定SEを避け、機械がどこで止まったかを音で返す。
- AudioはVisualの答えを説明せず、STOPの手応え、内部機構の位置、期待の“間”を補強する。
- 大型機構音は大型機構が実際に意味を持つEventだけに限定。
- 上位は単なる豪華BGM化でなく、音場／方向／残響法則そのものを変える。
- Signature Sound候補は企画比較用。音源制作・Audio Prototype・具体波形・具体尺固定はHuman Gate後。

## 未確定
3案の淘汰、最終候補数、具体配列、確率・数値スペック、Signature Sound最終形、具体的音量／周波数／尺、30分／3時間の実疲労、過去資産の具体採否、Machine Director最終推奨。

## 次Directorが読むもの
最新main全体に加え、README、制作工程、Reality標準、本ファイル、`MACHINE_01_CONCEPTS.md`、`MACHINE_01_COMPARISON.md`。

Playtest & QA Directorは実ブラウザ試打を行わず机上試打する。候補ごとに最初の5分、通常100G、ハマり、初当たり、CZ等失敗、BONUS/AT、上位へ行けない時間、上位、終了直後、もう一度BETする瞬間を通し、説明上の魅力と実遊技の魅力を分離する。特に通常時の静けさが“余白”か“退屈”か、Signature Soundが本当に再遊技動機になるか、3時間疲労源は何かを記録する。

## Human Gate
`HUMAN_GATE_1_NOT_READY` を維持。人間の `HUMAN_MACHINE_APPROVED` までコード／ゲーム／Micro Playable／Visual Prototype／Audio Prototype／リール・筐体・役物実装は禁止。AIはHuman Gateを通過しない。
