# Case Study 01 — スマスロ北斗の拳 Machine Director Integration

> Target: サミー「スマスロ北斗の拳」（2023）
> Director: Machine Director
> Status: `DEEP_DIVE_RUN_1_COMPLETE`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Rule: 第三者IP・固有演出・固有音源・固有意匠をコピーしない。事実・観察・解釈・再利用可能原則を分離する。

## 0. 読んだChappy5正本

- `README.md`
- `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`
- `docs/REALITY_PRESENTATION_STANDARD.md`
- `docs/MACHINE_01_PLANNING.md`
- `docs/REAL_PACHISLOT_RESEARCH.md`
- `docs/research/CASE_STUDY_01_SMASLOT_HOKUTO.md`
- `docs/research/CASE_STUDY_01_HOKUTO_VISUAL_MECHANISM.md`
- `docs/research/CASE_STUDY_01_HOKUTO_SOUND_EXPERIENCE.md`
- `docs/research/CASE_STUDY_01_HOKUTO_PLAYTEST_QA.md`
- `docs/research/GAME_REEL_REALITY_BASELINE.md`
- `docs/research/VISUAL_MECHANISM_REALITY_BASELINE.md`
- `docs/research/SOUND_EXPERIENCE_REALITY_BASELINE.md`
- `docs/research/PLAYTEST_QA_REALITY_BASELINE.md`

既存 `SIGNAL//3 / FORGE//HEART / VAULT://3` は本Runでは一切評価・詳細化しない。

---

# 1. なぜこの製品を作ったのか

## SOURCED FACT

セガサミーの2023-10-06開発者インタビューでは、企画は2020年6月頃、「初代北斗の拳の再現」という声から開始した。背景には遊技機規制見直しの動きがあり、過去にも6号機で初代再現を試みたが規制の影響で実現できなかった、と開発担当が説明している。

初代は2003年発売、累計約62万台を販売した大ヒット機。経営側もブランド復活と、当時遊技していた層を含む幅広いファンの掘り起こしを期待した。

Sources:
- https://www.segasammy.co.jp/ja/ir/individual/interviews/archive/archive_20231006/
- https://www.segasammy.co.jp/ja/ir/individual/interviews/archive/archive_20231108/

## INTERPRETATION

本機の出発点は「北斗というIPを使って現代流行スペックを作る」ではなく、**過去に支持された遊技構造を、現在の規則・筐体・スマスロ条件の中で再成立させる**という商品課題だった。

したがって各専門ラインの自由度より、「何を守れば同じ遊技感として認識されるか」が上位判断になっている。

## REUSABLE PRINCIPLE

企画の一文フックは世界観名ではなく、`プレイヤーが何を繰り返し、何を待ち、何で報われる機械か` まで含む必要がある。

---

# 2. 足したことより、入れなかったことが製品を定義している

## SOURCED FACT

開発担当は、当時の人気機種のスペック要素を入れるべきか葛藤したが、過去シリーズでは余計な遊技性の追加で北斗の良さが失われたり、追加要素が悪目立ちした経験があったと説明している。そのため「初代のそのままの再現に徹する」、合わない遊技性はあえて入れない「引き算の思考」で進めた。

営業企画側は初代のバトルボーナス継続率66%を「死守してほしい」と要望していた。

Source:
- https://www.segasammy.co.jp/ja/ir/individual/interviews/archive/archive_20231006/

## INTERPRETATION

リアルな完成機では、機能数が商品価値ではない。**核の反復を弱める機能は、単体で面白くても不採用にする統合判断**が必要になる。

北斗の場合、通常時のモード×レア役、BBの継続ループ、中押しを含むリール読解、継続バトルという核があるため、それらより前に別の周期・ポイント・CZ等を大量に置かないこと自体が商品設計になっている。

## REUSABLE PRINCIPLE

Chappy5 Machine Directorは将来、候補機能ごとに `面白いか` だけでなく `この機種の核を薄めないか` を判定する。

---

# 3. 2003→2023は「見た目の復刻」ではなく、入力文法と期待文法の翻訳

## SOURCED FACT

スマスロ化の検討時、開発側はスマスロで有利区間のゲーム数上限が撤廃されれば初代のバトルボーナスへ近づけられるとして、スマスロで進めることを強く希望した。

筐体は初代らしい下パネル、赤・青ランプ等を重視しつつ、15.6インチ16:9液晶を新規採用するなど2023年のハードへ置換している。

Sources:
- https://www.segasammy.co.jp/ja/ir/individual/interviews/archive/archive_20231006/
- `docs/research/CASE_STUDY_01_HOKUTO_VISUAL_MECHANISM.md`

## INTERPRETATION

守られたのは古い解像度や古い物理部品ではない。

- レア役を引く
- 今の状態を推測する
- リール停止で役を認識する
- その後の前兆を読む
- BBへ入る
- 1セットごとに継続を待つ
- 終了後に次の状態を読む

という**プレイヤーの認知・操作の順序**が核である。

2023化は、この順序を保持しながら液晶・スマスロ・上位状態・現行映像品質へ翻訳している。

## REUSABLE PRINCIPLE

過去技術や既存遊創舎資産を再利用する時も、表面をコピーせず `入力文法 / 情報文法 / 報酬文法` を抽出して現行環境へ翻訳する。

---

# 4. 通常時の商品性 — 毎Gを派手にしない

## SOURCED FACT

攻略解析では通常時に地獄・通常・天国・本前兆のモードがあり、成立役に応じて移行抽選を行う。本前兆なら32G以内にBB。中段チェリーは地獄/通常では本前兆25%、天国では本前兆濃厚とされる。

モード移行は昇格・転落とも第3停止ボタンを離した瞬間に行われると解析され、レバーON時に参照された示唆と第3停止後の内部状態が一致しない場合もある。

設定1のAT初当たりは約1/383.4。初代カスタムでは演出発生頻度を大幅に下げられる。

Sources:
- https://nana-press.com/kaiseki/machine/514/13777/
- https://nana-press.com/kaiseki/machine/514/14420/
- https://pachiseven.jp/articles/detail/17383
- `docs/research/CASE_STUDY_01_HOKUTO_PLAYTEST_QA.md`

## INTEGRATED INTERPRETATION

北斗の通常時は「1Gごとにイベントを発生させる設計」ではない。

通常Gの多くは高速に捨てられる一方、

1. 長めの時間軸：モード・天井・AT終了後状態
2. 中間の時間軸：レア役後最大32G
3. 1G時間軸：レバーON・出目・停止順・矛盾・演出

を重ねている。

Playtest & QAが記録した `ATTENTION COMPRESSION` と `MULTI-SCALE EXPECTATION` はMachine視点でも重要。熟練者が「全部を見る」のではなく、**普段は無視できる情報があり、必要な時だけ注意が圧縮される**。

## REUSABLE PRINCIPLE

通常100Gを成立させるために、100Gすべてへ演出を足してはいけない。`捨てられるG` と `見るべきG` の差を設計する。

---

# 5. 中段チェリーは「機能」ではなく機械全体を接続するノード

## SOURCED FACT

Game & Reel調査では、中段チェリーは停止出目だけでなく、滞在モードで本前兆期待度が変化し、直撃しなくても状態上昇の可能性が残り、その後の前兆観測へ接続する。

`docs/research/CASE_STUDY_01_SMASLOT_HOKUTO.md` Game & Reel section参照。

## INTEGRATED INTERPRETATION

1つの出来事に対して、

`内部状態 → レバー抽選 → リール停止 → 出目認識 → LCD/ランプ/音の反応 → その後の状態推測 → BB`

が同じ因果でつながる。

これがChappy5 Reality Standardの `Game Event → Reel / Visual / LED / Mechanism / Audio` を実機側で理解する具体例になった。

## REUSABLE PRINCIPLE

Signatureを作るなら「強い演出」から考えず、**ゲーム上の1イベントが機械全体へ波及する因果鎖**を作る。

---

# 6. BBは一発の報酬ではなく、反復可能な小さな判定ループ

## SOURCED FACT

攻略媒体ではBATTLE BONUSは基本継続率66/79/84/89%を持ち、継続バトルを繰り返す。上位の無想転生バトルは94%継続とされる。

バトルパートでは、攻防・立ち上がり・復活・BGM変化等に継続情報が割り当てられている。BGM変化は当該セット継続濃厚の法則を持つ。

Sources:
- https://pachiseven.jp/articles/detail/17777
- Game & Reel / Sound & Experience case-study files

## INTEGRATED INTERPRETATION

BBの報酬は「ATへ入った瞬間」だけではない。

`小役パート → バトルへの接近 → 継続判定 → 継続/終了 → 次セット`

という短い反復が、毎セット新しい期待を作る。Soundがいう `ENTRY IMPACT != SUSTAIN QUALITY` とQAの同名原則はここで一致する。

長く続くほど、入口演出を繰り返すのではなく、継続判定という再評価点が商品を支える。

## REUSABLE PRINCIPLE

長いAT/BONUSを作る場合、総G数や上乗せ量だけでなく、**途中にプレイヤーが再び結果を待てる短い判定単位**が必要。

---

# 7. 上位状態は「別ゲーム」化ではなく価値倍率化

## SOURCED FACT

無想転生バトルは通常BBの文法を利用しつつ継続率94%へ強化される。

専門調査では、リール窓・3STOP・操作卓という身体座標は上位状態でも保持され、Sound側も入力/STOPの既習リズムを維持しつつ価値側が強化されると整理している。

## INTEGRATED INTERPRETATION

上位へ入った瞬間に、プレイヤーが別ゲームのルールを一から学び直す必要がない。**既に覚えたループが強くなる**ため、通常BBの経験が無駄にならない。

QAの `UPPER ABSENCE TEST` も重要で、上位に入らない時間でも普通のBBが独立報酬として成立しなければならない。

## REUSABLE PRINCIPLE

上位状態は、通常状態を否定する「本当のゲーム」にしない。できるだけ `INPUT GRAMMAR KEEP / VALUE GRAMMAR UPGRADE` を検討する。

---

# 8. 終了はゼロではなく、次BETへの契約

## SOURCED FACT

AT終了後のモード振り分けが存在し、設定1でも天国約25.82%、本前兆約0.71%と解析されている。終了後ステージもモード示唆を持つ。

Sources:
- https://1geki.jp/slot/s_sma_hokutonoken/0/
- https://nana-press.com/kaiseki/machine/514/14408/

## INTEGRATED INTERPRETATION

終了後に「まだ何かあるかも」とだけ煽るのではなく、内部状態が実際に再設定され、次ゲームの価値が変わる。QAの `POST-END CONTRACT` と一致する。

ここは3時間遊技の循環に重要。AT終了が完全断絶なら席を立つ強い区切りになるが、北斗は終了直後にも本物の観測理由を残す。

## REUSABLE PRINCIPLE

終了後に追わせるなら、演出上の匂わせではなく、内部状態・保持・モード・1G連等の**真実の理由**を持たせる。逆にクリーン終了を選ぶなら曖昧に煽らない。

---

# 9. Visual / Mechanism統合

## SOURCED OBSERVATION FROM SPECIALTY STUDY

Visual & Mechanism調査では、北斗の2023筐体は大型LCDを使いながら独立した物理リール窓、操作デッキ、3STOP、下パネルを維持している。通常時にも外周光・リールバックライト・STOP発光・通常LCDが `NORMAL REST VISUAL` を形成する。

LED/消灯/画面変化はSTOPタイミングと結びつく法則があり、大型可動役物を常時動かすことに依存していない。

## INTERPRETATION

視覚の役割は「ゲームの代わり」ではなく、リールと状態を読みやすくすること。強状態でも身体座標が固定されるため、演出強度が上がっても手は迷わない。

## REUSABLE PRINCIPLE

現代感は大型液晶や役物の数ではない。`NORMAL REST` が完成しており、そこから状態に応じて必要な層だけを変化させる。

---

# 10. Sound / Experience統合

## SOURCED OBSERVATION FROM SPECIALTY STUDY

Sound & Experience調査では、通常ルーティンが安定しているため遅れ・欠落・対応音・矛盾が情報になる。BB中のBGM変化は継続濃厚というゲーム上の意味を持つ。復活はMAX BET/LEVER等、どの入力で発火するか自体が体験差になる。

初代カスタムでは演出密度を下げても遊技が成立する。

## INTERPRETATION

音は「盛り上げ担当」ではなく、プレイヤーが何を次に見るかを選ばせる注意制御。通常時を静かに成立させられるため、強いCueを希少化できる。

## REUSABLE PRINCIPLE

Sound仕様には `何を鳴らすか` だけでなく `いつ鳴らさないか / 何の入力で鳴るか / 鳴った事実が何を保証するか` を含める。

---

# 11. 30分と3時間の商品構造

## 30 MINUTES — INTERPRETATION

短時間では、
- 中押し等の押し方を覚える
- レア役を一度見る
- モード示唆の存在を理解する
- BBへ一度入れば継続バトルの文法を理解する

という「学習→報酬」の短い弧ができる。

## 3 HOURS — INTERPRETATION

長時間では、
- 普通のGを高速処理
- レア役成立時だけ注意上昇
- モード推測
- 32G前兆
- BBの短いセットループ
- 単発/低連も受け入れる
- 稀な長連/上位
- 終了後モードを再観測

が反復する。

重要なのは、3時間ずっと刺激を上げ続けないこと。QAの `HIGHLIGHT RATIO TRAP` の通り、見せ場動画の強さと長時間商品の強さは別。

## REUSABLE PRINCIPLE

長時間商品は `attention duty cycle` を持つべき。高注意状態を常時維持せず、休める通常Gと集中すべき局面を交互にする。

---

# 12. この1台から見えた「完成機統合」の骨格

Machine Directorとして、Case Study 01を次の一本へ統合する。

**`BASE ROUTINE → MEANINGFUL DEVIATION → STATE EDIT → OBSERVATION WINDOW → REWARD LOOP → JUDGEMENT → VALUE UPGRADE → POST-END CONTRACT → BASE ROUTINE`**

北斗固有語へ依存しない一般化：

1. `BASE ROUTINE` — 普通のGを安全に高速反復できる。
2. `MEANINGFUL DEVIATION` — 役/音/出目/光のズレに意味がある。
3. `STATE EDIT` — 1イベントが内部状態を本当に変える。
4. `OBSERVATION WINDOW` — 変化後に読む時間がある。
5. `REWARD LOOP` — 当たりは単発演出ではなく反復可能な内部ループ。
6. `JUDGEMENT` — 継続/終了を短い周期で再評価する。
7. `VALUE UPGRADE` — 上位は既習文法の価値を増幅する。
8. `POST-END CONTRACT` — 終了後にも真実の次BET理由、または明確な終了がある。
9. `BASE ROUTINE` — 通常へ戻っても再び回せる。

Visual / Reel / Audio / Mechanismはこの循環の各地点へ同じEventから反応する。

---

# 13. Machine Directorが修正するChappy5企画観

Case Study 01後、以下を禁止方向として扱う。

- テーマから先に3STOPへ役割を割り当てる。
- 通常時の退屈を演出量で埋める。
- CZ/ポイント/周期/上位を「現代的だから」で足す。
- Signature Sound/巨大役物を先に作り、後からゲーム上の意味を付ける。
- 上位だけを本当の成功にする。
- 終了後を偽の示唆で引き延ばす。
- 液晶がリールを置き換える。
- 強状態ほど全部の光・音・役物を同時最大化する。

今後要求する方向：

- 通常100Gの反復が説明できる。
- 何を見なくていいかまで設計する。
- 強い役/出来事が前後の時間を接続する。
- 普通の当たりに独立価値がある。
- 上位不在3時間でも成立する。
- 通常→当たり→終了→通常復帰が循環として成立する。
- Visual/Reel/Audio/Mechanismが同じ内部Eventへ因果的に反応する。

---

# 14. CONTRADICTIONS / LIMITS

1. 「初代完全再現」という販促表現と、実際の2023仕様は同一ではない。新液晶、スマスロ、上位状態等が存在するため、本研究では「完全再現」を技術的同一性とは扱わない。
2. 公開攻略解析はメーカー一次仕様書ではない。内部制御テーブル等の非公開事項は推測しない。
3. YouTube長尺映像は編集・収録音・撮影環境の影響を受けるため、実ホールの音圧/疲労を完全再現しない。
4. 初代経験者の懐古価値と、若年層が感じる新鮮さは別要因。開発者インタビューでは社内試打で20・30代からも「逆に新鮮で面白い」という評価があったが、全市場へ一般化しない。
5. Case Study 01はAT/継続型の強い事例であり、ノーマル/リーチ目/技術介入機のRealityを代表しない。

---

# 15. UNRESOLVED — Case Study 01でまだ足りないもの

- 設定1ノーカット3時間での通常/前兆/BB/上位の実時間比率。
- 初代カスタムON/OFF同一条件100Gでの演出密度差。
- 無想転生20セット以上のノーカット視聴による音・光疲労。
- 実ホール騒音下でのCue識別。
- 北斗固有のスピーカー構成、実dB、周波数、PUSH振動実測。
- 実機での中押し30分反復時の目・指・姿勢疲労。
- BB単発/低連を複数回経験した後の再挑戦意欲。

これらを未解決のまま `REALITY_BASELINE_COMPLETE` としない。

---

# 16. Case Study 01 Machine verdict

`CASE_STUDY_01_INTEGRATED — NOT REALITY_BASELINE_COMPLETE`

5 Directorの第1深掘りは揃った。北斗については「何が一台を成立させているか」を専門横断で説明可能な段階に入った。

ただし北斗1台だけからChappy5の企画へ戻ると、AT/モード/継続バトル型の常識へ偏る危険が高い。

**次の研究ケースは北斗と設計思想が逆方向の、ノーマル／リーチ目／技術介入系実機を同じ5 Directorで深掘りする。**

選定条件：
- 通常時そのものが商品である。
- リール配列/停止/スベリ/目押しが中心価値。
- 大型AT/上位状態に依存しない。
- 攻略解析、配列、打ち方、長尺実戦、可能なら開発資料が豊富。

候補名の確定は次研究Runで行い、既存Chappy5企画は引き続き `PROVISIONAL_FROZEN` とする。

Human Gate: `HUMAN_GATE_1_NOT_READY`
