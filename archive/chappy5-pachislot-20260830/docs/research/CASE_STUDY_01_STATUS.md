# Case Study 01 — Current Handoff

> Target: サミー「スマスロ北斗の拳」（2023）
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## Director progress
- Machine Director: `DEEP_DIVE_RUN_1_COMPLETE / INTEGRATED`
- Game & Reel Director: `DEEP_DIVE_RUN_2_COMPLETE`
- Visual & Mechanism Director: `DEEP_DIVE_RUN_2_COMPLETE`
- Sound & Experience Director: `DEEP_DIVE_RUN_2_COMPLETE`
- Playtest & QA Director: `DEEP_DIVE_RUN_2_COMPLETE`

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

## Game & Reel latest
Read:
- `docs/research/CASE_STUDY_01_SMASLOT_HOKUTO.md`
- `docs/research/CASE_STUDY_01_HOKUTO_GAME_REEL_RUN2.md`

Run 2 added concrete reel-system findings:
- 第1停止は「三段階演出の第一幕」ではなく、停止位置により次の狙い方を変える `classifier` として機能する。
- 中押し/順押しは単なる好みではなく、取得できる情報を交換する観測手段になっている。
- `INTERNAL ROLE != OBSERVED STOP FORM`。同じ内部役でも押し順/押下位置により見える停止形が変わる。
- リーチ目は普段の役判別規則からの小役ハズレ・矛盾として混ざり、通常時に学んだ規則が確定発見へ使われる。
- BB確定後も停止ライン/フェイク/次G昇格/継続率示唆等でリール観察価値が残る。
- 同じレア役の責務は通常→BB小役パート→バトルパート→上位で変化する。
- 抽選タイミング、状態更新タイミング、結果提示タイミングを別仕様として扱う。
- 公開されていない停止制御/滑り/優先制御は `UNRESOLVED`。

## Visual & Mechanism latest
Read:
- `docs/research/CASE_STUDY_01_HOKUTO_VISUAL_MECHANISM.md`
- `docs/research/CASE_STUDY_01_HOKUTO_VISUAL_MECHANISM_RUN2.md`

Run 2 added physical/presentation findings:
- 実機は正面UIではなく約40cm級奥行きを持つ物体として考える必要がある。
- rear body / outer shell / LCD / reel-window / reel cylinder / operation deck / STOP touch plane に前後差がある `DEPTH LADDER`。
- `ROOM SILHOUETTE` と `FACE SILHOUETTE` を分ける。
- 情報面は `MAIN LCD / PHYSICAL REELS / LEFT SUB DISPLAY / LAMPS-BUTTONS` に物理分業される。
- `REST VISUAL` はOFFではなく、通常LCD、リール、STOP、サブ液晶、常設光の定常セット。
- 強さは `add / subtract / color / motion / timing` で作る。
- `SYNC SCARCITY`、`PRESENTATION CAN BE SUBTRACTED`、`INPUT RARITY MUST MATCH FEEDBACK RARITY`、`BODY GRAMMAR STABILITY` を確認。
- 発光は `identity light / operation light / event light` へ責務分離。
- `FIXED ATTENTION ANCHORS` がホール内可読性を支える。
- 北斗固有の正式寸法/重量/リール径/窓深度/STOP荷重/LED構造等は `UNRESOLVED`。

## Sound & Experience latest
Read:
- `docs/research/CASE_STUDY_01_HOKUTO_SOUND_EXPERIENCE.md`
- `docs/research/CASE_STUDY_01_HOKUTO_SOUND_EXPERIENCE_RUN2.md`

Run 2 added concrete audio-system findings:
- `REST AUDIO`: BET→LEVER→REEL→STOP→RESULTの通常タイミングを身体へ覚えさせる。
- 強さは音量以外に `ADD / DELAY / OMIT / RELOCATE / CONTRADICT / SUSTAIN` がある。
- `AUDIO AS QUESTION`、`INPUT-AUDIO CONTRACT / SYNC SCARCITY` を確認。
- BB入口は `NOTICE → CONFIRM → PARTICIPATE → START` の `ENTRY STAIRS`。
- BGM変化は `BGM AS STATE MEMORY` として継続確定等の真実を保持できる。
- どの入力に反応して鳴るか自体がゲーム情報になる。
- `PRESENTATION SUBTRACTION TEST` の実例がある。
- `MEMORABLE = SCARCITY × MEANING × SYNCHRONY × REWARD`。
- 北斗固有スピーカー仕様/実dB/波形/PUSH振動等は `UNRESOLVED`。

## Playtest & QA latest
Read:
- `docs/research/CASE_STUDY_01_HOKUTO_PLAYTEST_QA.md`
- `docs/research/CASE_STUDY_01_HOKUTO_PLAYTEST_QA_RUN2.md`

Run 2 strengthened long-play findings:
- 高設定示唆台でも1200G級ハマリや低連は起こり得る。`GOOD STATE DOES NOT CANCEL BAD MINUTES`。
- 強契機後の観測窓が終わったら通常速度へ戻してよい `ATTENTION RELEASE` が必要。
- 初代モードのように演出密度を落としても骨格が残る。将来候補へ `HALF-PRESENTATION TEST` を適用する。
- 編集実戦は見せ場因果、長尺ノーカットは時間割合/反復/疲労を見る証拠。`HIGHLIGHT EVIDENCE != DURATION EVIDENCE`。
- 上位非到達3時間は例外ではなく主試験。`UPPER ABSENCE IS A PRIMARY TEST`。
- 平均連や上位を封印した低報酬反復で普通の当たり価値を測る `LOW-ROLL REWARD TEST`。
- 多数短期試行と同一台長時間を分離する `BREADTH SAMPLE / DEPTH SAMPLE`。
- 既存の `ATTENTION COMPRESSION / MULTI-SCALE EXPECTATION / FAILURE RESIDUE + TRUE LOSS / RELIEF != REWARD / ENTRY IMPACT != SUSTAIN QUALITY / POST-END CONTRACT / RETURN ACCEPTANCE` を維持。

## Case Study 01 verdict
`CASE_STUDY_01_CURRENT_CYCLE_COMPLETE — NOT REALITY_BASELINE_COMPLETE`

北斗について固定5 Director全員が現在の専門深掘り巡を完了した。AT/モード/継続/上位型という一系統の理解としては具体化したが、パチスロ全体のReality Baseline完成とは判定しない。

既存 `SIGNAL//3 / FORGE//HEART / VAULT://3` は引き続き `PROVISIONAL_FROZEN`。

## Remaining unresolved
- 設定1ノーカット3時間で通常/前兆/BB/上位の実時間割合・演出密度を定量化。
- 8時間級長尺配信の全Visual/Audio event count。
- 初代カスタムON/OFFの同一100G比較。
- 実機/アプリ30分中押し反復時の目・手の疲労。
- BB単発/低連反復後の人間の再挑戦意欲。
- 実ホール騒音下のCue識別。
- 北斗固有スピーカー/音圧/周波数/PUSH振動の実測。
- 北斗固有メーカー公式外形寸法/重量、リール径、窓深度、操作卓角度、STOP径/荷重/ストローク、LED/導光構造。
- 全20コマ配列と代表押下点からの実際のフォロー範囲定量化。
- 未公開の全停止制御/滑り/優先制御は一次資料なしで確定しない。
- ベルナビ時と自由停止時のSTOP認知負荷差。

## Next research direction — Human Directive
人間から「この巡が終わったら次は違う台、違う系統を学ぶこと」と明示指示。

次のMachine Directorは、この `CASE_STUDY_01_CURRENT_CYCLE_COMPLETE` を確認したらCase Study 02を正式に開く。候補は既にHuman Directiveに沿って **ユニバーサル系『新ハナビ』（2021）** とし、北斗と逆方向のノーマル / リーチ目 / 技術介入系として5 Director共通対象にする。

Case Study 02で優先する差分:
- 通常時そのものが商品。
- リール配列/停止/スベリ/リーチ目/目押しが中心価値。
- BIG/REGとRT/技術介入が長時間体験を作る。
- CZ→AT→上位という梯子へ依存しない。
- 初心者と熟練者で同じ3STOPの見え方がどう変わるかを追う。

Human Gateは `HUMAN_GATE_1_NOT_READY` を維持。Machine DirectorがCase Study 02を正式開設するまでは企画再開・本制作へ進まない。
