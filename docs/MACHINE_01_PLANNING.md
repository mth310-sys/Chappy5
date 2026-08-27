# Chappy5 1号機 — 企画選定共有状態

> Status: `REAL_PACHISLOT_RESEARCH_FIRST`
> Stage: `Stage 1 — Product Planning / Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production permission: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## 正本
最新 `main`、`README.md`、`docs/PACHISLOT_PRODUCTION_WORKFLOW.md`、`docs/REALITY_PRESENTATION_STANDARD.md`、`docs/REAL_PACHISLOT_RESEARCH.md`、`docs/research/GAME_REEL_REALITY_BASELINE.md`、`docs/research/VISUAL_MECHANISM_REALITY_BASELINE.md`、既存企画・比較資料。過去チャット・過去企画・旧SLOT制は正本ではない。

## Human feedback — 2026-08-28
人間から「案を出す前にリアルなパチスロについて各担当で学習すること。オリジナリティの前にリアリティが不足している。どういった台があるか掘り下げ、学習内容を各担当で記録すること」と明示指示。

この指示を最優先し、既存3案 `SIGNAL//3` / `FORGE//HEART` / `VAULT://3` の詳細化・順位付け・淘汰を停止。3案は `PROVISIONAL_FROZEN`。研究後に全廃・再構成してよい。

## 現在の共通目標
**5 Directorそれぞれが、実在するパチスロを担当専門から十分に学び、「パチスロ台が現実には何によって成立しているか」のReality Baselineをmainへ蓄積する。**

- Machine: 第1研究Run完了。複数時代・複数系統の完成機構造、着席理由、通常、当たり、報酬、長時間、全要素統合を研究。
- Game & Reel: 第1研究Run完了。配列、役、内部フラグ、停止制御、スベリ、目押し/押し順、出目、状態、抽選を実機レベルへ掘り下げ。
- Visual & Mechanism: 第1研究Run完了。実寸・奥行き、リール回転体、液晶階層、操作卓、素材、LED、役物の静止/可動、視線、ホール内識別を研究。
- Sound & Experience: 次担当。操作音・回転/停止音・演出音・BGM・無音・告知・スピーカー/低域・ホール環境・疲労を実機から研究する。
- Playtest & QA: その後。実機の5分/100G/ハマり/初当たり/CZ失敗/AT/上位/終了/次BET、退屈と気持ちよさの実態を研究する。

各担当は `SOURCED FACT / INTERPRETATION / REUSABLE PRINCIPLE / UNRESOLVED` を区別する。

## Machine Director Reality Baseline — 第1研究Run完了
Machine Directorは既存3案へ触れず、リーチ目ノーマル、技術介入、ART/AT、ST、モード/連チャン、CZ/状態依存、現行スマスロを横断研究。詳細と出典は `docs/REAL_PACHISLOT_RESEARCH.md`。

### Machine側で修正された重要認識
- 「3STOPそれぞれへ独自テーマ上の役割を与えること」はリアルなパチスロの必要条件ではない。
- STOPの意味は、出目/スベリを読む、技術介入する、押し順を通す、状態に応じて成立役を待つ等の複数形。
- ノーマル機では通常時そのものが商品、AT/ST機では状態変化が同じ1Gの心理価値を変える。
- 現代風を上位AT/高純増/複雑CZと同義にしない。

## Game & Reel Reality Baseline — 第1研究Run完了
詳細と出典は `docs/research/GAME_REEL_REALITY_BASELINE.md`。

### Game & Reel側で修正された重要認識
- 内部当選と停止結果は同義ではない。`成立フラグ × 押し位置 × 停止順 × 引込み × 優先順位 × 状態` を通して出目が生まれる。
- 配列はVisual AssetではなくGame System。図柄間隔と引込み範囲が「狙う/取りこぼす/驚く」を作る。
- 3STOPは毎回3段階のドラマである必要はない。1確、2確、第3停止否定、普通のハズレが混在してリズムになる。
- 技術介入ではSTOPが技能入力になり、AT等では押し順ナビによって「探索」から「指示遂行」へ責務が変わる。
- 同じ役/出目でも内部状態によって価値が変化することが、CZ/AT/ST等の状態差を作る。

## Visual & Mechanism Reality Baseline — 第1研究Run完了
詳細と出典は `docs/research/VISUAL_MECHANISM_REALITY_BASELINE.md`。

### Visual & Mechanism側で確認した実機基準
- 現行実筐体には約 `H810 × W475 × D432.5mm / 約40kg` 級の例があり、φ230mm級の物理リール、モーター、複数スピーカー、操作機構を内部へ積層する。正面図だけでは実機感にならない。
- 古典的筐体は上部情報→リール窓→操作卓→下部パネルの役割分離が強く、視線と手の動きが前面構造に出ている。
- 大型液晶化はリールを不要にしたのではなく視覚階層を再編したもの。現行でも縦型大型液晶、標準型、2面液晶等の異なる筐体思想が併存する。
- リール窓は3枚画像ではなく、曲面回転体・上下遮蔽・内部影・照明・停止運動を持つ物理空間。
- 操作卓は人間工学。現行例では長時間負担を減らすパームレバー、演出連動コンパネ振動、MAX BET自体を省く設計まで存在する。
- LEDは輪郭色ではなく光源。半透明樹脂、クローム、ガラス、操作ボタン等へ光が回り込み、映像・音・ランプは実機オーサリングでも統合Eventとして扱われる。
- 役物は常時動かす装飾ではない。通常の `REST POSITION` と、ゲーム契機にだけ動く希少動作の対比が重要。
- ホール内識別は異形シルエットだけでなく、通常時の顔・発光挙動・リール/パネル構成でも成立する。

### Visual & Mechanism側で修正された誤認
1. 「黒い筐体＋大型液晶＋派手LED」を現代実機の共通形としない。
2. リール窓を平面的3列表示として扱わない。
3. 役物は動く量より、動かない通常位置と動く理由を設計する。
4. LEDは発光部だけでなく周囲素材への照り返しまで含む。
5. 液晶サイズと存在感を同義にしない。
6. 操作部の形状・距離・反力・発光・振動も筐体Visual/Mechanismに含める。

### Visual & Mechanism未解決
メーカー/時代別の前面比率定量比較、リールバックライト/消灯の物理構造、役物のモーター/ギア/リンクと加減速、ホール照明下の素材見え、着席目線/操作高さ、iPhoneへの立体圧縮は追加研究が必要。Reality Baseline完成とは判定しない。

## 次Directorへの共通課題 — Sound & Experience
**企画のSignature Soundを作らず、まず実機で「音がどの物理装置から、どの頻度・音量階層・タイミングで出て、リール/ランプ/役物/操作とどう一体化しているか」を研究する。**

最低限、以下を実機資料から記録する。
- BET/レバー/リール回転/STOP/停止後/払出の基礎機械音と電子音。
- レア役、遅れ、予告、チャンスアップ、告知、BONUS/AT/上位の音階層。
- 無音、遅延、音を鳴らさない演出の役割。
- 実機スピーカー配置、低域/サブウーファー、振動、ホール騒音内での聞こえ方。
- 100G/3時間反復で疲れる音と、反復しても機能する操作音の違い。
- Visual/LED/Mechanismとの同期が「全部同時」ではなく時間差を含むこと。

Visual & Mechanism側の研究から、Sound担当は筐体内部のスピーカー/サブウーファーを「画面外の音源」として扱い、音が筐体から出ている位置感も研究すること。

## 制作ライン
固定5 Directorと12分オフセットは維持する。当面は企画制作ではなくReality Baseline研究ライン。各Directorは毎回最新mainを再取得する。

## 禁止
研究を既存3案の正当化に使わない。人気台の要素を寄せ集めない。第三者IP・固有意匠・固有音源・固有演出をコピーしない。資料量だけを成果にしない。Human Gate前のコード、ゲーム、Micro Playable、Visual/Audio Prototype、リール/筐体/役物実装は禁止。

## Human Gate
`HUMAN_GATE_1_NOT_READY` を維持。AIはHuman Gateを通過しない。
