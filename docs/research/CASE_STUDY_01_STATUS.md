# Case Study 01 — Current Handoff

> Target: サミー「スマスロ北斗の拳」（2023）
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## Director progress
- Machine Director: `DEEP_DIVE_RUN_1_COMPLETE / INTEGRATED`
- Game & Reel Director: `DEEP_DIVE_RUN_1_COMPLETE`
- Visual & Mechanism Director: `DEEP_DIVE_RUN_1_COMPLETE`
- Sound & Experience Director: `DEEP_DIVE_RUN_1_COMPLETE`
- Playtest & QA Director: `DEEP_DIVE_RUN_1_COMPLETE`

## Machine Director integration
Read: `docs/research/CASE_STUDY_01_HOKUTO_MACHINE_INTEGRATION.md`

Integrated model:
`BASE ROUTINE → MEANINGFUL DEVIATION → STATE EDIT → OBSERVATION WINDOW → REWARD LOOP → JUDGEMENT → VALUE UPGRADE → POST-END CONTRACT → BASE ROUTINE`

Core findings:
- 北斗の核は個別の中段チェリー/BB/無想転生ではなく、通常→状態編集→観測→報酬→継続判定→終了後→通常復帰まで同じ入力・情報文法を保つ循環にある。
- メーカー開発者は流行スペック要素を足すより、初代に合わない遊技性を入れない「引き算」を選択していた。完成機では機能数より核を薄めない統合判断が重要。
- 通常時は毎Gを派手にせず、1G/数十G/数百Gの異なる期待時間軸を重ね、熟練者が「何を見なくてよいか」まで学べる。
- 強い役は停止瞬間だけでなく、事前の状態推測・停止時認識・不発後の残留価値・その後の観測時間を接続する。
- BBは入口演出だけでなく、小役パート→継続判定→次セットという短い反復判定を持つため長時間のSUSTAINを作れる。
- 上位は別ゲーム化より `INPUT GRAMMAR KEEP / VALUE GRAMMAR UPGRADE` として既習文法の価値を増幅する。
- 終了後に追わせるなら本物の内部状態・1G連・前兆等の理由が必要。偽の匂わせは不可。
- Visual/Reel/Audio/Mechanismは別々の見せ場ではなく、同一Game Eventへ因果的に反応する。

## Playtest & QA latest
Read: `docs/research/CASE_STUDY_01_HOKUTO_PLAYTEST_QA.md`

Core findings:
- `ATTENTION COMPRESSION`: 熟練者が何を見るかだけでなく、何を見なくてよいかを学習できる。
- `MULTI-SCALE EXPECTATION`: 1G / 数十G / 数百Gの期待を重ねる。
- `FAILURE RESIDUE + TRUE LOSS`: 本物の残留価値と完全な失敗を混在させる。
- `RELIEF != REWARD`: 深いハマリ後の安堵と当たり自体の快感を分離評価する。
- `ENTRY IMPACT != SUSTAIN QUALITY`: BB入口と長時間反復品質を別評価する。
- `UPPER ABSENCE TEST`: 上位へ3時間入らなくても普通のBBをまた引きたいかを問う。
- `POST-END CONTRACT`: 終了後に追わせるなら本当の理由が必要。
- `RETURN ACCEPTANCE`: 長連・上位後でも通常100Gへ戻ることを受け入れられるか。
- `HIGHLIGHT RATIO TRAP`: 見せ場の強さを台全体の強さと誤認しない。

## Case Study 01 verdict
`CASE_STUDY_01_INTEGRATED — NOT REALITY_BASELINE_COMPLETE`

北斗1台について5 Directorの専門深掘りとMachine統合は完了した。ただしAT/モード/継続型の一例だけでパチスロ全体を理解したとは判定しない。

既存 `SIGNAL//3 / FORGE//HEART / VAULT://3` は引き続き `PROVISIONAL_FROZEN`。

## Remaining unresolved
- 設定1ノーカット3時間で通常/前兆/BB/上位の実時間割合・演出密度を定量化。
- 無想転生20セット以上のノーカット視聴でVisual/Audio疲労を確認。
- 初代カスタムON/OFFの同一100G比較。
- 実機/アプリで30分中押し反復時の目・手の疲労。
- BB単発/低連反復後の再挑戦意欲。
- 実ホール騒音下のCue識別。
- 北斗固有スピーカー/音圧/周波数/PUSH振動の実測。

## Next research direction
次は北斗と設計思想が逆方向の、ノーマル／リーチ目／技術介入系をCase Study 02として同じ5 Directorで深掘りする価値が高い。

選定条件：
- 通常時そのものが商品。
- リール配列/停止/スベリ/目押しが中心価値。
- 大型AT/上位に依存しない。
- 攻略解析、配列、打ち方、長尺実戦、可能なら開発資料が豊富。

Human Gateは `HUMAN_GATE_1_NOT_READY` を維持。企画再開・本制作へは進まない。
