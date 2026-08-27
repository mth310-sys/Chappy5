# Chappy5 1号機 — 企画選定共有状態

> Status: `REAL_PACHISLOT_RESEARCH_FIRST`
> Stage: `Stage 1 — Product Planning / Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production permission: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## 正本
最新 `main`、`README.md`、`docs/PACHISLOT_PRODUCTION_WORKFLOW.md`、`docs/REALITY_PRESENTATION_STANDARD.md`、`docs/REAL_PACHISLOT_RESEARCH.md`、`docs/research/GAME_REEL_REALITY_BASELINE.md`、`docs/research/VISUAL_MECHANISM_REALITY_BASELINE.md`、`docs/research/SOUND_EXPERIENCE_REALITY_BASELINE.md`、`docs/research/PLAYTEST_QA_REALITY_BASELINE.md`、既存企画・比較資料。過去チャット・旧企画は正本ではない。

## Human feedback — 2026-08-28
人間から「案を出す前にリアルなパチスロについて各担当で学習すること。オリジナリティの前にリアリティが不足している。どういった台があるか掘り下げ、学習内容を各担当で記録すること」と明示指示。

この指示を最優先し、既存3案 `SIGNAL//3` / `FORGE//HEART` / `VAULT://3` の詳細化・順位付け・淘汰を停止。3案は `PROVISIONAL_FROZEN`。研究後に全廃・再構成してよい。

## 現在の共通目標
**5 Directorそれぞれが、実在するパチスロを担当専門から十分に学び、「パチスロ台が現実には何によって成立しているか」のReality Baselineをmainへ蓄積する。**

第1研究巡は5 Directorすべて完了した。ただしReality Baselineはまだ `RESEARCH_ACTIVE`。次巡Machine Directorは即座に企画へ戻らず、5専門の学習を統合し「何がまだ実機理解として薄いか」を選別する。

- Machine: 複数時代・複数系統の完成機構造、着席理由、通常、当たり、報酬、長時間、全要素統合を研究済み。
- Game & Reel: 配列、役、内部フラグ、停止制御、スベリ、目押し/押し順、出目、状態、抽選を研究済み。
- Visual & Mechanism: 実寸・奥行き、リール回転体、液晶階層、操作卓、素材、LED、役物、視線、ホール内識別を研究済み。
- Sound & Experience: 基本操作音、注意階層、無音/遅れ、出目法則との統合、BONUS/AT BGM、物理スピーカー/振動、ホール騒音、疲労を研究済み。
- Playtest & QA: 最初5分、通常100G、500G級ハマり、レア役期待、前兆/CZ失敗、初当たり、BONUS/AT、上位非到達、上位、終了/引戻し/次BET、30分/3時間の実遊技構造を研究済み。

各担当は `SOURCED FACT / FIELD REPORT / INTERPRETATION / REUSABLE PRINCIPLE / UNRESOLVED` を区別する。

## Machine Director Reality Baseline — 第1研究Run
詳細と出典は `docs/REAL_PACHISLOT_RESEARCH.md`。

重要修正：
- 「3STOPそれぞれへ独自テーマ上の役割を与えること」はリアルなパチスロの必要条件ではない。
- STOPの意味は、出目/スベリを読む、技術介入する、押し順を通す、状態に応じて成立役を待つ等の複数形。
- ノーマル機では通常時そのものが商品、AT/ST機では状態変化が同じ1Gの心理価値を変える。
- 現代風を上位AT/高純増/複雑CZと同義にしない。

## Game & Reel Reality Baseline — 第1研究Run
詳細と出典は `docs/research/GAME_REEL_REALITY_BASELINE.md`。

重要修正：
- 内部当選と停止結果は同義ではない。`成立フラグ × 押し位置 × 停止順 × 引込み × 優先順位 × 状態` から出目が生まれる。
- 配列はVisual AssetではなくGame System。
- 3STOPは毎回3段階のドラマである必要はない。1確、2確、第3停止否定、普通のハズレが混在してリズムになる。
- 技術介入ではSTOPが技能入力になり、AT等では押し順ナビによって探索から指示遂行へ責務が変わる。
- 同じ役/出目でも内部状態によって価値が変化する。

## Visual & Mechanism Reality Baseline — 第1研究Run
詳細と出典は `docs/research/VISUAL_MECHANISM_REALITY_BASELINE.md`。

重要修正：
- 正面図だけでは実機感にならない。実筐体は奥行き・重量・内部機構を持つ。
- 古典的筐体の上部情報→リール窓→操作卓→下部パネルには視線と手の合理性がある。
- 大型液晶化はリール排除ではなく視覚階層の再編。
- リール窓は平面画像ではなく曲面回転体・遮蔽・内部影・照明・停止運動を持つ物理空間。
- 操作卓は人間工学。レバー/MAX BET/STOP/振動まで筐体設計。
- LEDは輪郭色ではなく光源で、周囲素材への照り返しを含む。
- 役物は常時動かさず `REST POSITION` と希少動作の差が重要。

未解決：前面比率定量比較、バックライト物理構造、役物駆動、ホール照明下素材、着席目線、iPhoneへの立体圧縮。

## Sound & Experience Reality Baseline — 第1研究Run
詳細と出典は `docs/research/SOUND_EXPERIENCE_REALITY_BASELINE.md`。

重要修正：
- 強告知より先に毎ゲーム反復する基本操作音を成立させる。
- 音響は最大音量ではなく `ATTENTION HIERARCHY`。
- 無音/遅れは通常ルーティンとの差で情報になる。
- Audioは出目・消灯・対応役と結合したUIにもなる。
- 「全部鳴らせるから全部鳴らす」を避け、重要音を立てるため他を引く。
- BONUS/AT突入ピークと長時間持続BGMは別責務。
- 記憶音は `音 × 発生頻度 × 期待/報酬 × 出目 × 光/役物 × 直前の静けさ` で成立する。
- 低域・振動は希少性と疲労を考える。
- ハマリ500Gでも嫌いにならない基本音をQA条件に含める。

未解決：実機械音実測、指向性、スマスロで物理払出音が減った影響、音量ガイドライン、振動疲労、方式別音響密度、iPhone定位。

## Playtest & QA Reality Baseline — 第1研究Run完了
詳細と出典は `docs/research/PLAYTEST_QA_REALITY_BASELINE.md`。

### Playtest側で確認・修正した重要認識
- 「通常時の退屈」は演出量の少なさと同義ではない。リーチ目/技術介入では狙う・読む・設定を推測すること自体が反復動機になる。
- CZ/モード/ゲーム数型では、通常時はゾーン・周期・ポイント・状態等の時間的ランドマークで分節される。ただしリールが単なる移動手段になる危険もある。
- `意味のある待ち` と `死んだ待ち` を分ける。カウンター表示だけでは遊技価値にならない。
- 最初5分で全仕様を教える必要はないが、「この台では何に注意を向ければ報われるか」は学習できる必要がある。
- 通常100GのQAでは「次の10Gを回す最小理由」を問う。読む、狙う、推測する、状態価値が変わる、実利ある蓄積などが候補。
- ハマリは欠点増幅器。500Gでは基本SE、長い煽り、偽の惜しさ、意味のないレア役、強制演出が疲労へ変わる。
- CZ/前兆失敗では `failure residue` を確認する。失敗後に本物の状態・情報・保持値が残るのか、単なる「惜しかった演出」なのかを分離する。
- 初当たりは「当たり自体が気持ちいい」と「長い空白から解放されただけ」を分けて評価する。
- BONUS/ATは `ENTRY IMPACT` と `SUSTAIN QUALITY` を別評価する。突入ピークを毎G繰り返すと疲れる。
- 上位状態が強すぎると、通常AT/初当たりが「上位に入れなかった失敗」に見える。普通の当たりに独立価値が必要。
- 終了後の次BET理由は、本当の引戻し・保持状態・モード/周期・情報、または意図したクリーンリセットで作る。「何かあるかも」を永久に匂わせることは価値ではない。
- 深さは同時情報量ではない。`今やること / 今の期待 / 長期推測` の階層に分けられる。

### Playtest & QAで今後必須にする時間軸
将来の候補比較では、最低限以下を1本の遊技として検証する。
`最初5分 → 通常100G → 500G級ハマり → レア役/前兆 → CZ失敗 → 初当たり → 普通のBONUS/AT → 上位へ行けない時間 → 上位 → 終了 → 引戻し/即ヤメ判断 → 次BET`

さらに `30分品質` と `3時間品質` を分ける。「強演出を一度見たい」は10分の長所であり、3時間商品の証明ではない。

### Playtest & QA未解決
CZ失敗耐性の定量資料、強演出反復頻度と疲労の定量、現行スマスロ長時間負け実戦の追加標本、同時認知負荷、物理操作疲労、メダルレス化で払出触覚/音が消えた影響は追加研究が必要。

## 第1研究巡を終えた共通結論
**企画書で最も派手な1分ではなく、当たりのない普通の100G〜500Gを成立させる構造を先に問う。**

パチスロのリアリティは「液晶演出＋3リール」ではなく、
`抽選 → 配列/停止 → 出目/ナビ → 状態価値 → 視線/操作 → 光/機構 → 音 → 次ゲームへの期待`
が長時間の中で反復しても破綻しないことから生まれる。

## 次巡Machine Directorへのハンドオフ
第1研究巡5本を統合する。ただし**まだ既存3案の順位付け・淘汰・再設計へ戻らない**。

次の一手：
1. 5専門の `UNRESOLVED` を横断し、企画に戻る前に致命的なReality不足を最大3テーマへ絞る。
2. 機種タイプごとに「通常100Gを成立させる原理」がどう違うかを統合表現する（リーチ目/技術介入、AT/ST、CZ、モード/ゲーム数、スマスロ等）。
3. `REALITY_BASELINE_SUFFICIENT_FOR_CONCEPT_REVIEW` を出す条件を定義する。AIだけでHuman Gateは通さない。
4. 既存3案は研究を正当化材料として当てはめない。Baseline十分判定後にゼロベースで再評価する。

## 制作ライン
固定5 Directorと12分オフセットは維持。当面は企画制作ではなくReality Baseline研究ライン。各Directorは毎回最新mainを再取得する。

## 禁止
研究を既存3案の正当化に使わない。人気台の要素を寄せ集めない。第三者IP・固有意匠・固有音源・固有演出をコピーしない。資料量だけを成果にしない。Human Gate前のコード、ゲーム、Micro Playable、Visual/Audio Prototype、リール/筐体/役物実装は禁止。

## Human Gate
`HUMAN_GATE_1_NOT_READY` を維持。AIはHuman Gateを通過しない。