# Chappy5 1号機 — 企画選定共有状態

> Status: `REAL_PACHISLOT_RESEARCH_FIRST`
> Stage: `Stage 1 — Product Planning / Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production permission: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## 正本
最新 `main`、`README.md`、`docs/PACHISLOT_PRODUCTION_WORKFLOW.md`、`docs/REALITY_PRESENTATION_STANDARD.md`、`docs/REAL_PACHISLOT_RESEARCH.md`、既存企画・比較資料。過去チャット・過去企画・旧SLOT制は正本ではない。

## Human feedback — 2026-08-28
人間から「案を出す前にリアルなパチスロについて各担当で学習すること。オリジナリティの前にリアリティが不足している。どういった台があるか掘り下げ、学習内容を各担当で記録すること」と明示指示。

この指示を最優先し、既存3案 `SIGNAL//3` / `FORGE//HEART` / `VAULT://3` の詳細化・順位付け・淘汰を一時停止する。3案は採択候補ではなく `PROVISIONAL_FROZEN` とする。研究後に全廃・再構成してよい。

## 現在の共通目標
**5 Directorそれぞれが、実在するパチスロを担当専門から十分に学び、「パチスロ台が現実には何によって成立しているか」のReality Baselineをmainへ蓄積する。**

- Machine: 複数時代・複数系統の完成機構造、着席理由、通常、当たり、報酬、長時間、全要素統合。
- Game & Reel: 配列、役、内部フラグ、停止制御、スベリ、目押し/押し順、出目、状態、抽選、出玉。
- Visual & Mechanism: 実筐体の形状、奥行き、素材、リール窓、液晶、操作部、LED、反射、役物、可動頻度。
- Sound & Experience: 実機の操作音・リール音・演出音・BGM・無音・告知・音響物理・ホール環境・疲労。
- Playtest & QA: 実機の5分/100G/ハマり/初当たり/CZ失敗/AT/上位/終了/次BET、退屈と気持ちよさの実態。

研究正本は `docs/REAL_PACHISLOT_RESEARCH.md`。各担当は `SOURCED FACT / INTERPRETATION / REUSABLE PRINCIPLE / UNRESOLVED` を区別する。

## Machine Director Reality Baseline — 第1研究Run完了
Machine Directorは既存3案へ触れず、リーチ目ノーマル、技術介入、ART/AT、ST、モード/連チャン、CZ/状態依存、現行スマスロを横断研究した。詳細と出典は `docs/REAL_PACHISLOT_RESEARCH.md` の `Machine Director Reality Baseline — Run 1 / 2026-08-28` に保存。

### 今回修正された重要認識
- 「3STOPそれぞれへ独自テーマ上の役割を与えること」は、リアルなパチスロの必要条件ではない。
- 実機ではSTOPの意味が複数形で存在する。出目/スベリを読む、技術介入する、押し順を通す、状態に応じて成立役を待つ等がある。
- ノーマル機では通常時そのものが商品になり、AT/ST機では状態変化により同じ1Gの心理価値が変わる。
- モード型では終了後や履歴までBET判断の材料になる。CZは単なる派手な中間ゲームではなく、通常時から存在する役・出目の価値を変換する区間にもなり得る。
- 現行スマスロにも出目中心ノーマルと高純増ATが共存するため、「現代風＝上位AT/高純増/複雑CZ」とは定義しない。
- 今後はテーマや筐体アイデアより前に、`通常100Gで何を待つか / 何を読むか / 当たり後に1Gの価値がどう変わるか / 終了後なぜ次BETするか` を説明できる遊技構造を要求する。

### Machine Director側の未解決研究
完全告知ノーマル、ゲーム数/ゾーン、周期・ポイント蓄積、上位ATの存在意義、時代別の通常時設計、外部要因を除いた純粋な着席理由は追加研究が必要。Machine側もReality Baseline完成とは判定しない。

## 制作ライン
固定5 Directorと12分オフセットは維持する。ただし当面の各Runは企画制作ラインではなく、同じReality Baselineを専門別に厚くする研究ラインとして使う。各Directorは毎回最新mainを再取得する。

## 次Directorへの共通課題
**Game & Reel Directorは企画を進めず、今回Machineが分類した遊技系統を「実際のリール内部構造」まで掘る。**

特に、同じ3リール3STOPでも以下がなぜ別物になるかを実機資料から記録する。
- 内部フラグと停止結果
- 配列と有効ライン
- スベリ/引込み/停止制御
- リーチ目とハズレ目
- 技術介入と押し順
- AT/ST中のナビと成立役
- 状態によって同じ出目の価値が変わる仕組み

Machine Directorが作った15項目のReality Baselineチェックリストは「企画採点表」ではなく、今後各専門研究で修正・補強する仮の統合観点として扱う。

## 禁止
研究を既存3案の正当化に使わない。人気台の要素を寄せ集めない。第三者IP・固有意匠・固有音源・固有演出をコピーしない。資料量だけを成果にしない。Human Gate前のコード、ゲーム、Micro Playable、Visual/Audio Prototype、リール/筐体/役物実装は禁止。

## Human Gate
`HUMAN_GATE_1_NOT_READY` を維持。AIはHuman Gateを通過しない。
