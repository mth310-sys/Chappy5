# Chappy5 1号機 — 企画選定共有状態

> Status: `REAL_PACHISLOT_RESEARCH_FIRST`
> Stage: `Stage 1 — Product Planning / Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production permission: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## 正本
最新 `main` を唯一の正本とする。必読：
- `README.md`
- `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`
- `docs/REALITY_PRESENTATION_STANDARD.md`
- `docs/REAL_PACHISLOT_RESEARCH.md`
- `docs/research/CASE_STUDY_01_SMASLOT_HOKUTO.md`
- `docs/research/CASE_STUDY_01_HOKUTO_VISUAL_MECHANISM.md`
- `docs/research/CASE_STUDY_01_HOKUTO_SOUND_EXPERIENCE.md`
- `docs/research/MACHINE_REALITY_SYNTHESIS_RUN2.md`
- `docs/research/GAME_REEL_REALITY_BASELINE.md`
- `docs/research/VISUAL_MECHANISM_REALITY_BASELINE.md`
- `docs/research/SOUND_EXPERIENCE_REALITY_BASELINE.md`
- `docs/research/PLAYTEST_QA_REALITY_BASELINE.md`
- 既存 `MACHINE_01_CONCEPTS.md` / `MACHINE_01_COMPARISON.md` は研究前の企画履歴として保持するが、現在の企画判断の正本にしない。

## Human feedback — 2026-08-28
人間から「案を出す前にリアルなパチスロについて各担当で学習すること。オリジナリティの前にリアリティが不足している。どういった台があるか掘り下げ、学習内容を各担当で記録すること」と明示指示。

さらに「各担当それぞれの視点から攻略サイトやYouTubeなどから実機1台を深掘りして学ぶこと」と追加指示。共通ケーススタディ対象をサミー「スマスロ北斗の拳」（2023）に固定し、5 Directorが同じ台を別専門視点から研究する。

この指示を最優先する。

## Existing concept status
`SIGNAL//3` / `FORGE//HEART` / `VAULT://3` はすべて `PROVISIONAL_FROZEN`。

- 詳細化しない。
- 順位付けしない。
- 淘汰しない。
- 研究を既存案の正当化へ使わない。
- Reality Baseline成立後に全廃・再構成してよい。

## 現在の共通目標
**企画再開前に、実機1台の中で通常遊技・リール・状態・報酬・筐体・音・長時間体験がどう統合されているかを説明できるようにする。**

第1研究巡で5 Directorすべてが専門Reality Baselineを作成し、Machine Director第2研究RunでReality Gapを抽出した。現在は抽象的な横断研究だけでは不足と判断し、同一実機ケーススタディ `CASE_STUDY_01_SMASLOT_HOKUTO.md` を5 Directorで進行中。

### Case Study 01 progress
- Machine Director: `PENDING`
- Game & Reel Director: `DEEP_DIVE_RUN_1_COMPLETE`
- Visual & Mechanism Director: `DEEP_DIVE_RUN_1_COMPLETE`
- Sound & Experience Director: `DEEP_DIVE_RUN_1_COMPLETE`
- Playtest & QA Director: `PENDING`

Game & Reel第1深掘りでは、スマスロ北斗の通常時が「強レア役を待つだけ」ではなく、`モード推測 → 成立役認識 → 押し方による情報選択 → 第3停止までの役判別 → 状態更新 → 以後の前兆観測` の連続で成立していることを記録した。特に中段チェリーは単独の強役ではなく、出る前のモード推測・停止瞬間・不発後の状態上昇・最大32Gの当否観測を接続する中心ノードとして評価した。

Visual & Mechanism第1深掘りでは、実機写真・公式画像・長尺試打・攻略演出法則を横断し、`大型LCD → 独立物理リール窓 → 操作デッキ → 3STOP列 → 下パネル` の階層、リール窓をcavityとして成立させる遮蔽/曲面/照明、左サブ液晶と右縦領域、レバー/STOPの身体マッピング、通常REST発光、STOPタイミングとLCD/ランプ法則の同期を記録した。大型可動役物の常時動作ではなく、固定筐体・物理リール・ボタン/PUSH振動・光源の差で状態を伝えている点を重要学習とした。

Sound & Experience第1深掘りでは、北斗の音響を `baseline → deviation → hit → sustain → judgement → fatigue control` として分解した。通常のルーティンが安定しているから遅れ/欠落/タイミング変更が情報になり、ラオウステージのギター音のようにAudioが対応役候補を作り、後続Visual/Reelとの矛盾が本前兆情報になる。BBでは告知→準備→狙え→入賞→小役SUSTAIN→バトルJUDGEMENTを分離し、BGM変化自体が継続確定という実利を持つ。さらに通常モードと初代モードの差から、音量だけでなく `presentation density` 自体がプレイヤー向けパラメータであると学習した。復活はMAX BET/LEVERという入力境界と結合し、同じAudio Eventでも「どの入力で鳴るか」が仕様の一部になっている。

詳細：
- `docs/research/CASE_STUDY_01_HOKUTO_VISUAL_MECHANISM.md`
- `docs/research/CASE_STUDY_01_HOKUTO_SOUND_EXPERIENCE.md`

---

# 第2研究巡から維持する3大Reality Gap

## GAP A — `NORMAL-PLAY ECONOMY`
**100G〜500Gの通常遊技を、方式ごとに実際には何が支えているのか。**

Case Study 01ではスマスロ北斗について、設定1のレア役合算約1/32.1、AT初当たり約1/383.4という頻度だけでなく、弱役によるモード編集・中段チェリーによる直撃/状態上昇・前兆観測の時間まで含めて通常100Gを分解する。

Sound側では、通常時を「無音」ではなく予測可能なAudio Routineとして扱い、その安定性が遅れ/矛盾/対応音を成立させる資産であることを確認した。Playtest & QAは100G/500GでCue頻度と疲労を実遊技時間軸へ落とす。

## GAP B — `REWARD LADDER & FAILURE TRUTH`
**普通の当たり・失敗・上位状態が、実機ではどう価値分担しているか。**

Case Study 01では通常BBが66/79/84/89%の継続ループを持ち、上位の無想転生は94%へ拡張する。上位が通常BBを前座化していないかはPlaytest & QAが長尺実戦から確認する。

Sound側では、通常BBにもBGM変化=継続確定、MAX BET/LEVER復活、BB突入段階など独立した報酬音響があり、上位だけに全音響価値を集中させていない構造を確認した。

## GAP C — `PHYSICAL / SENSORY BASELINE OVER TIME`
**通常時の90%以上で、実機を打つ人間が何を見て・触って・聞いているか。**

Visual側は第1深掘り完了。北斗では通常時にも外周常設光、リールバックライト、赤3STOP、左サブ液晶、通常歩行LCDという `NORMAL REST VISUAL` があり、強状態でもリール/STOP/操作卓という身体座標を保持することを確認。

Sound側は同じ固定物へ、基礎操作音・通常Timing・対応音・遅れ・BGM変化・BET/LEVER復活を対応させた。ただし北斗固有のスピーカー仕様、実dB、周波数、リール機械音、PUSH振動の物理実測は未解決。Playtest & QAは長尺実戦の反復密度と疲労を確認する。

---

# 第1研究巡から維持する共通結論

## Machine
- 3STOPへ毎回テーマ上の別役割を持たせる必要はない。
- STOPの意味は出目読解、技術入力、ナビ遂行、状態依存など複数形。
- ノーマルでは通常時自体が商品になり得る。
- 現代機＝高純増/上位AT/複雑CZではない。

## Game & Reel
- 内部成立と停止結果は別。
- `成立フラグ × 押し位置 × 停止順 × 引込み × 優先順位 × 状態` が出目を作る。
- 配列はVisualではなくGame System。
- 1確/2確/第3停止否定/普通のハズレが混在してリズムになる。
- 技術介入と押し順ナビではSTOPの責務そのものが変わる。
- Case Study 01追加：3STOPの価値は停止瞬間だけでは完結せず、前ゲームからの内部状態と停止後の前兆/状態推測まで時間軸で接続される。

## Visual & Mechanism
- 正面画像だけでは実機感にならない。奥行き・回転体・遮蔽・素材・操作卓が必要。
- LEDは輪郭色ではなく光源。
- 役物はREST POSITIONが先。
- 遠距離識別と着席時識別を分ける。
- Case Study 01追加：Mechanismは大型可動役物と同義ではない。リール回転体、窓のcavity、レバー、STOP、MAX BET、PUSH振動、導光部、固定された身体座標もMechanism。
- Case Study 01追加：大型LCDとリール遊技は両立可能。LCDがリールを覆わず、STOPタイミングへ演出を同期させることで物理リールが映像の句読点になる。
- Case Study 01追加：RESTは「役物が止まる」だけでなく、通常光量・通常画面密度・ボタン発光・素材反射の定常セットとして設計する。

## Sound & Experience
- 強告知より毎ゲーム鳴る基本音が先。
- `ATTENTION HIERARCHY` を持つ。
- 無音/遅れ/他音を引くことも情報。
- BONUS/ATの入口ピークと持続BGMは別責務。
- 記憶音は音源単体ではなくゲーム上の意味と同期で生まれる。
- Case Study 01追加：`PRESENTATION DENSITY` は音量とは別の体験パラメータ。演出/Audio Eventを減らしてもゲームが成立することに価値がある。
- Case Study 01追加：同じBGM変化でもLEVERかBETかで身体体験が変わる。`WHICH INPUT` はAudio仕様の一部。
- Case Study 01追加：BGM changeに継続確定等の真実を持たせることで、楽曲単体以上の記憶価値が生まれる。
- Case Study 01追加：意図的な非同期/矛盾は通常同期が信頼されている時だけ情報になる。
- Case Study 01追加：上位状態は入力/STOP/リールの既習リズムを維持し、価値側を強化する方が一体感を保ちやすい。

## Playtest & QA
- 通常時の退屈は演出量不足と同義ではない。
- `意味のある待ち` と `死んだ待ち` を分ける。
- 500Gハマリは欠点増幅器。
- CZ失敗には `failure residue` または明確なtrue lossが必要。
- 普通の当たりは上位非到達の失敗にしてはいけない。
- 30分品質と3時間品質を分ける。

---

# 現在のReality判定

`REALITY_BASELINE_SUFFICIENT = FALSE`

理由：
1. Case Study 01はGame & Reel、Visual & Mechanism、Sound & Experienceまで完了したが、Machine / Playtestが未完了。
2. 同じ1台について長時間実遊技がまだ統合されていない。
3. 当該北斗筐体の正確な外形寸法、リール径、STOP荷重、LED/導光構造、PUSH振動仕様、スピーカー構成、音量/周波数等は一次資料で未確認。現行ZEEG一般仕様を北斗固有値に流用していない。
4. Game & Reelも全停止制御テーブル等の非公開領域は未解決であり、推測していない。
5. Soundも長尺YouTube全編の直接音響実測は取得制約があり、動画存在/構造と攻略法則を中心に記録した。聞いていないものを聞いたと扱っていない。
6. 1台だけでは方式一般化できないため、Case Study 01統合後に真逆の方式の実機研究が必要。

したがって企画選定へ戻らない。

---

# 次Director — Playtest & QAへのHandoff

Case Study 01の同じスマスロ北斗を、ハイライトではなく時間軸で評価する。

- `最初5分 → 通常100G → 500G級ハマリ → レア役不発/前兆否定 → BB告知 → 準備 → 狙え → 単発/短連 → 再通常 → 長連 → 上位非到達時間 → 無想転生 → 終了 → 復活/ヤメ判断` を一続きで扱う。
- 通常モードと初代モードの `presentation density` 差が、実際に退屈/疲労/集中へどう影響するか分ける。
- 遅れ、対応音、演出矛盾が「聞けば得する情報」になっているか、単なるプレミア探しになっていないかを見る。
- 500GハマリでBET/LEVER/STOP/通常SEが嫌いにならないか。中段チェリー不発→32G前兆を繰り返した時の煽り疲労を見る。
- BBの `ENTRY HIT` と小役パート `SUSTAIN`、バトルパート `JUDGEMENT` を別評価する。
- 5/7/10連以降のBGM変化=継続確定が、楽曲知名度を除いても再体験動機になっているかを見る。
- MAX BET/LEVER復活が、終了境界を強めるのか、頻度次第で「どうせ復活」を生むのかを見る。
- 無想転生20セット以上で上位音響が疲労化しないか、通常BBの価値を上位が前座化していないかを見る。
- 動画/攻略/実戦記録の観察は `SOURCED FACT / VIDEO OBSERVATION / PLAYER FIELD REPORT / SIMULATED INTERPRETATION / UNRESOLVED` を分ける。

Sound研究詳細：`docs/research/CASE_STUDY_01_HOKUTO_SOUND_EXPERIENCE.md`

## Human Gate
`HUMAN_GATE_1_NOT_READY` を維持。

人間が `HUMAN_MACHINE_APPROVED` を出すまで、コード、ゲーム本体、Micro Playable、Visual/Audio Prototype、リール、筐体、役物、制作Assetの実装は禁止。
