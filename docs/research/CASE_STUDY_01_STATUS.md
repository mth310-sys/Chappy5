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

## Game & Reel latest
Read:
- `docs/research/CASE_STUDY_01_SMASLOT_HOKUTO.md`
- `docs/research/CASE_STUDY_01_HOKUTO_GAME_REEL_RUN2.md`

Run 2 added concrete reel-system findings:
- 第1停止は「三段階演出の第一幕」ではなく、停止位置により次の狙い方を変える `classifier` として機能する。
- 中押し/順押しは単なる好みではなく、スイカA/B・中段チェリーA/B・チャンス目・北斗カウンター・リーチ目/JAC等、取得できる情報を交換する観測手段になっている。
- `INTERNAL ROLE != OBSERVED STOP FORM`。同じ内部役でも押し順/押下位置により見える停止形が変わり、チャンス目とベルこぼしの類似形等も存在する。
- リーチ目は専用の別ゲームではなく、普段のチェリー/スイカ判別木からの小役ハズレ・矛盾として混ざるため、通常時に学んだ規則そのものが確定発見へ使われる。
- BB確定画面の赤7狙いにも停止ライン/フェイク/次G昇格/継続率示唆という実情報があり、当選後もリール観察価値を残す。
- 同じレア役の責務は通常→BB小役パート→バトルパート→上位で変化し、状態が同じ図柄の現在価値を書き換える。
- 抽選タイミング、状態更新タイミング、結果提示タイミングを別仕様として扱う必要がある。通常モード更新は第3停止離し、BB小役パートの宿命バトル抽選はレバーONと公開されている。
- 公開されていない停止制御テーブル/滑りテーブル/優先制御は推測せず `UNRESOLVED` を維持。

## Visual & Mechanism latest
Read:
- `docs/research/CASE_STUDY_01_HOKUTO_VISUAL_MECHANISM.md`
- `docs/research/CASE_STUDY_01_HOKUTO_VISUAL_MECHANISM_RUN2.md`

Run 2 added physical/presentation findings:
- 型式一致の中古実機販売情報では外形はおおよそ `H810 × W475 × D400mm`。メーカー公式寸法ではないため正式値とはしないが、正面UIではなく奥行き約40cm級の物体として考える必要がある。
- 斜め実機写真から、rear body / outer shell / LCD / reel-window front / reel cylinder / operation deck / STOP touch plane に明確な前後差がある。実機感は正面drop-shadowではなく `DEPTH LADDER` から生まれる。
- 正面だけでなく斜め45度付近でも外周シェルと発光部が輪郭を作る。島設備へ収まる `ROOM SILHOUETTE` と、プレイヤーへ見える `FACE SILHOUETTE` を分けて考える。
- 情報面は `MAIN LCD / PHYSICAL REELS / LEFT SUB DISPLAY / LAMPS-BUTTONS` に物理分業され、情報の寿命・頻度ごとに「家」がある。
- `REST VISUAL` はOFF状態ではない。通常LCD、明るいリール、赤3STOP、サブ液晶、外周常設光が基準状態を作り、そこからの偏差として強演出が読める。
- 全リール消灯、虹色入賞LED、ライト回転等から、強さは「光を足す」だけでなく `add / subtract / color / motion / timing` で作られる。
- STOP同期は毎G使うのではなく `SYNC SCARCITY` として希少性を持たせる。通常反応が薄いから特定GのSTOP同期が意味になる。
- 初代モードは演出頻度・煽り・可視Vストック等を減らしても遊技骨格が残る。`PRESENTATION CAN BE SUBTRACTED` をReality試験に使う。
- 毎Gのレバー/STOPと、希少なPUSH+振動は身体入力を分離している。`INPUT RARITY MUST MATCH FEEDBACK RARITY`。
- 上位でも基本操作の身体座標は保持される。`BODY GRAMMAR STABILITY` を保ち、価値・光・音側を増幅する。
- 発光は `identity light / operation light / event light` へ責務分離する。全部の光を当落示唆に使わない。
- ホールの視覚ノイズ下でも、リール窓・STOP・サブ液晶・メインLCD中央という `FIXED ATTENTION ANCHORS` が動かないことが可読性を支える。
- 北斗固有の正式寸法/重量、リール径、窓深度、STOP荷重、レバー復元力、LED内部構造、スピーカー位置、PUSH振動方式、実輝度は引き続き `UNRESOLVED`。

## Sound & Experience latest
Read:
- `docs/research/CASE_STUDY_01_HOKUTO_SOUND_EXPERIENCE.md`
- `docs/research/CASE_STUDY_01_HOKUTO_SOUND_EXPERIENCE_RUN2.md`

Run 2 added concrete audio-system findings:
- `REST AUDIO`: 強Cueより先に、BET→LEVER→REEL→STOP→RESULTの通常タイミングを身体へ覚えさせる。違和感は安定した基準からの偏差として成立する。
- 強さは音量だけではなく `ADD / DELAY / OMIT / RELOCATE / CONTRADICT / SUSTAIN` の軸で作れる。
- ラオウステージのギター音等では、Audioが答えを告知せず後続の役/演出候補を作り、リールとVisualが一致/矛盾を返す。`AUDIO AS QUESTION`。
- STOP演出やねじり音のような同期は毎G使わず `INPUT-AUDIO CONTRACT / SYNC SCARCITY` として希少化する。
- BB入口は告知1発ではなく `NOTICE → CONFIRM → PARTICIPATE → START` の `ENTRY STAIRS`。確定後にも狙え/停止形で参加余地が残る。
- BGM変化は継続確定という状態情報を長く保持する `BGM AS STATE MEMORY` として働く。通常モードでは5セット目以降の継続時の一部から発生し、序盤から毎セット最大化しない。
- 同じBGM変化でも通常モードではLEVER、初代モードではBETへ発火位置が変わる。復活もMAX BET/LEVER条件に法則があり、`どの入力に反応したか` 自体がゲーム情報になる。
- 初代カスタムは演出頻度・可視Vストック・一部チャンスアップ・BGM変化種類等を減らしても内部ゲームが成立するため、`PRESENTATION SUBTRACTION TEST` の実例になる。
- `MEMORABLE = SCARCITY × MEANING × SYNCHRONY × REWARD`。高頻度・高音量・低意味・回避不能のCueは疲労リスクが高い。
- 北斗固有スピーカー仕様、実dB/周波数/定位、基礎BET/STOP/払出音の波形、PUSH振動、無想転生長連時のAudio event countは未確認のまま `UNRESOLVED`。

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

北斗1台について5 Directorの専門深掘りとMachine統合は完了した。Game & Reel / Visual & Mechanism / Sound & ExperienceはRun 2まで具体化したが、AT/モード/継続型の一例だけでパチスロ全体を理解したとは判定しない。

既存 `SIGNAL//3 / FORGE//HEART / VAULT://3` は引き続き `PROVISIONAL_FROZEN`。

## Remaining unresolved
- 設定1ノーカット3時間で通常/前兆/BB/上位の実時間割合・演出密度を定量化。
- 無想転生20セット以上のノーカット視聴でVisual/Audio疲労を確認。
- 初代カスタムON/OFFの同一100G比較（Visual event count / Audio event count）。
- 実機/アプリで30分中押し反復時の目・手の疲労。
- BB単発/低連反復後の再挑戦意欲。
- 実ホール騒音下のCue識別。
- 北斗固有スピーカー/音圧/周波数/PUSH振動の実測。
- 北斗固有のメーカー公式外形寸法/重量、リール径、リール窓深度、操作卓角度/突出量、STOP径/荷重/ストローク、LED/導光構造。
- 全20コマ配列と代表押下点からの実際のフォロー範囲定量化。
- 未公開の全停止制御/滑り/優先制御は一次資料なしで確定しない。
- ベルナビ時と自由停止時のSTOP認知負荷差。

## Next research direction
次は北斗と設計思想が逆方向の、ノーマル／リーチ目／技術介入系をCase Study 02として同じ5 Directorで深掘りする価値が高い。

選定条件：
- 通常時そのものが商品。
- リール配列/停止/スベリ/目押しが中心価値。
- 大型AT/上位に依存しない。
- 攻略解析、配列、打ち方、長尺実戦、可能なら開発資料が豊富。

Human Gateは `HUMAN_GATE_1_NOT_READY` を維持。企画再開・本制作へは進まない。