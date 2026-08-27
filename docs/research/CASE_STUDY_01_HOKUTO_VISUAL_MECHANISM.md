# Case Study 01 — スマスロ北斗の拳 / Visual & Mechanism Deep Dive

> Director: Visual & Mechanism
> Target: サミー「スマスロ北斗の拳」（2023）
> Status: `DEEP_DIVE_RUN_1_COMPLETE`
> Stage: Stage 1 / Reality Baseline Study only
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: 禁止。Visual Prototype / Asset / Cabinet / Mechanism / Codeは作らない。
> Rule: 第三者IP・ロゴ・固有筐体意匠・固有演出をコピーせず、実機事実・観察・解釈・再利用可能原則を分離する。

## 0. 今回の問い

Game & Reel側が確認した「中押しでは第1停止から第3停止まで役候補を判別し続ける」という遊技が、実際の筐体で成立する理由をVisual/Mechanism側から調べる。

特に以下を見る。

- 遠目のシルエットと着席時の視線階層
- 大型液晶と物理3リールの上下関係
- リール窓の深さ・遮蔽・バックライト
- 左サブ液晶と右側縦情報部
- 操作卓、MAX BET、PUSH、レバー、3 STOP
- 通常静止時の筐体の顔
- 通常→レア役→前兆→BB→継続→無想転生で、何が変わり何が変わらないか
- LEDを「色」ではなく光源として見る
- 可動役物を使わずに、どこまで状態差を出しているか
- ホールでリールを読むため、液晶がどうリールを邪魔しないか

---

# 1. Sources

## Primary / official

1. SEGA SAMMY IR presentation, 2023-02-16 — product slide / official cabinet image
   - https://www.segasammy.co.jp/cms/wp-content/uploads/pdf/ja/ir/20230216_presentation_script_j_final.pdf
2. SEGA SAMMY IR presentation, 2023-04-28 — official cabinet image and launch/operation context
   - https://www.segasammy.co.jp/cms/wp-content/uploads/pdf/ja/20230428_q4_presentation_j_final.pdf
3. 北斗の拳 OFFICIAL WEB SITE, 2023-04-03
   - https://hokuto-no-ken.jp/3340
4. サミーチャンネル「スマスロ北斗の拳」スペシャルムービー, 2023-01-05
   - https://www.youtube.com/watch?v=xKHrOZwX0Tg

## Real-machine / long-form video references

5. BASH tv 新台試打「スマスロ北斗の拳」, 2023-03-23
   - https://www.youtube.com/watch?v=7PjVshxCT7s
6. CLUB SINDY 世界最速設定⑥実戦, 2023-03-03
   - https://www.youtube.com/watch?v=tLi9vHaBrYo
7. Case Study共通資料で既に使用されている導入初日長尺実戦
   - https://www.youtube.com/live/PiQB20sn5Tg

## Strategy / effect law references

8. なな徹 — 味方キャラ演出・停止タイミング法則
   - https://nana-press.com/kaiseki/machine/514/20886/
9. なな徹 — ラオウステージ演出法則
   - https://nana-press.com/kaiseki/machine/514/15598/
10. なな徹 — 長時間実戦 / 本前兆濃厚演出整理
   - https://nana-press.com/post/1620034
11. 一撃 — スマスロ北斗の拳 機種トップ / 筐体・リール資料
   - https://1geki.jp/slot/s_sma_hokutonoken/

## Cabinet-photo / hardware observation references

12. パチンコビレッジ — 試打写真（正面寄り）
   - https://www.pachinkovillage.com/diary_2/?blog=18&id=99146
13. 中古実機販売ページ A-SLOT / HOME-SLOT — 実機正面、PUSHバイブ機構の存在確認補助
   - https://www.a-slot.com/SHOP/s-taiyo_elec207.html
   - https://home-slot.net/SHOP/s-taiyo_elec204.html
14. 実機斜め写真（中古実機流通写真）— depth observation only
   - source was used only as visual evidence; exact寸法推定には使用しない。

## General hardware context — NOT confirmed as the exact Hokuto cabinet

15. ZEEG current cabinet specification / development tool pages
   - https://www.zeeg.jp/lineup/st230-ar
   - https://www.zeeg.jp/lineup/st230-an
   - https://www.zeeg.jp/zsdk

**CAUTION:** ZEEGの現行仕様は「実パチスロ筐体の物理スケール・リール・ランプ/サウンド開発の一般的な参考」。2023スマスロ北斗の拳が記載された型式そのものと確認できていないため、北斗固有の寸法・スピーカー構成としては扱わない。

---

# 2. Cabinet silhouette — 遠目で何が一台を作っているか

## OBSERVATION — front view

公式IR画像・試打写真・中古実機写真を横断すると、正面の大きな階層は以下に見える。

1. 上部の大型横長LCD
2. LCD直下の独立した3リール窓
3. リール左右の縦情報部（左＝サブ液晶、右＝縦装飾/状態表示領域）
4. リール下の浅い操作デッキ
5. さらに手前/下側の3 STOP列
6. 下部大型パネル
7. 左右外周の縦発光フレーム

これは「巨大液晶の中に小さなリールを貼った」構成ではない。**LCDとリールは上下で明確に物理層が分かれている。**

## OBSERVATION — asymmetrical identity

筐体外周は完全左右対称ではない。

- 左外周は赤系の太い縦アクセント。
- 右外周は白〜紫/青系に発光する縦アクセントとタイトル意匠。
- 上中央には青い半透明/発光部が見える。
- 中央は黒い筐体フレームがLCDとリールをまとめる。

**INTERPRETATION:** 遠距離では細部を読む前に、`赤 / 青白 / 黒 / 大型横LCD / 三連物理リール` の大きな色面と形状で識別される。ブランド固有の文字やキャラクターを除いても、シルエットの認識単位は「大きな色面＋画面/リールの比率」である。

## REUSABLE PRINCIPLE

遠距離識別はロゴを大きく置くことと同義ではない。

- 1〜3m: 大きな発光面とシルエット
- 着席: リール、サブ表示、操作卓
- 遊技中: LCD内演出、リール停止形、ランプ変化

の3スケールを分ける。

---

# 3. LCD / Reel relationship — 「画面を見る台」なのにリールが死んでいない理由

## OBSERVATION

大型LCDはリールの**上**にあり、リール自体を覆っていない。リール窓は横3列を一つの独立領域として黒いフレーム内に確保している。

通常歩行画面などでは、LCD内のキャラクターや背景が動いていても、リール窓は別の物理平面として常に視認できる。強い演出時も映像がリール面へ直接被さる構造ではない。

## INTERPRETATION — gaze path

プレイヤーの視線は毎ゲーム、概ね

`上LCD（状態/演出） → リール窓（成立役判別） → STOP列（手の操作） → 再び上LCD（停止タイミングの演出/状態反応）`

を短い距離で往復できる。

リールがLCDの真下にあるため、Game & Reelで確認した「中押し第1停止で候補を絞る→残りリールを見る」が、画面演出と競合しながらも成立しやすい。

## REUSABLE PRINCIPLE

映像を豪華にするほどリールを大きくする必要はないが、**遊技上読ませたい情報には固定された視線領域を予約する必要がある。**

液晶の派手さでリールを視覚的に飲み込ませると、出目を読むゲーム性は実質消える。

---

# 4. Reel window as a physical cavity

## OBSERVATION

正面/斜め写真では、リール面は前面ガラス/透明カバーより奥に存在し、左右および上下に黒い遮蔽フレームがある。各リールは平面カードではなく、曲面回転体の一部分として見える。

停止時には白〜明るいバックライトで図柄面が均一に読みやすく、周囲の黒フレームと強い明暗差がある。

## INTERPRETATION

リールの「実機感」は図柄画像の精細度ではなく、少なくとも以下から出る。

- 窓より奥にある
- 曲面が見える
- 上下が遮蔽される
- 黒い内壁/影がある
- リールだけに別系統の照明が当たる
- 停止ボタン列と垂直方向に揃う

## REUSABLE PRINCIPLE

Chappy5で将来リールを作る場合、`sprite × 3` を正面に置くのではなく、**窓・内壁・曲率・遮蔽・照明・回転体の前後関係**を先に決める。

---

# 5. Two-tier information beside the reels

## OBSERVATION — left sub display

リール左には縦長の小型カラー表示が常設されている。実機写真ではゲーム数/獲得情報等の数値表示やアイコンが確認できる。攻略資料では初代カスタム等にサブ液晶操作を用いる記載もある。

この表示はメインLCDより小さく、リールに近い。

## OBSERVATION — right vertical zone

リール右には円形/縦長の発光・装飾領域が存在し、リール窓の左右バランスを形成している。左のサブ液晶のような汎用数値画面とは役割が異なって見える。

## INTERPRETATION

情報を1枚の大LCDへ集約していない。

- 大LCD: 世界/演出/前兆
- 物理リール: 成立役と停止結果
- 左サブ表示: 数値・履歴・設定操作等の補助情報
- 右縦領域: 状態/意匠/ランプの補助

と責務が分かれている。

## REUSABLE PRINCIPLE

UIは大画面に全部表示するほど分かりやすくなるとは限らない。**常時見る情報を、リールに近い固定位置へ物理的に分離する**ことで、ゲーム画面の没入と遊技情報を両立できる。

---

# 6. Operation deck — 手の場所がVisual hierarchyを作る

## OBSERVATION

実機写真から操作部は一枚の平面ではなく、少なくとも二段階に見える。

### Upper / slanted deck
- 左寄りに大きな円形MAX BET
- 中央付近に方向入力/補助操作部
- 中央〜右寄りにPUSH系の大きな操作面
- グロス黒の成型面

### Lower / front STOP rail
- 左・中・右の3つの円形STOPを横一直線
- 3ボタンは通常時も赤く発光して強く視認できる
- レバーはさらに左下/手前側へ独立配置

## INTERPRETATION

この配置では「毎ゲーム触るもの」と「演出時に触るもの」が物理的に分かれる。

- レバー + STOP = 基本ループ
- MAX BET = 基本ループ開始
- PUSH/方向入力 = 選択・強演出・補助

PUSHがSTOPと同じ列にないため、通常3STOPの運動記憶を壊さず、PUSH時だけ手を別位置へ移動させることができる。

## REUSABLE PRINCIPLE

操作の重要度は画面上のボタンサイズだけでなく、**物理位置・高さ・傾斜・常時触る頻度**で階層化する。

---

# 7. Lever / STOP readability

## OBSERVATION

レバーは左手前に球状ノブを持つ独立部品として大きく突き出している。3 STOPは同径・同間隔の赤い円形で、視覚と触覚のリズムが一致する。

STOP列はリール各列の真下に概ね対応しており、左リール→左STOP、中→中、右→右の身体マッピングが明瞭。

## INTERPRETATION

中押しをする場合でも、プレイヤーは画面上の「中」ではなく物理中央ボタンを先に押す。Game & Reel上の停止順選択を成立させる前提に、**身体側の3列マッピング**がある。

## REUSABLE PRINCIPLE

STOP順をゲームに使うなら、まず手が迷わないこと。複雑な形状差や過剰な装飾で3 STOPの位置認識を壊してはいけない。

---

# 8. Materials — 何が“重い機械”に見えるか

## DIRECT OBSERVATION

写真から区別できる範囲：

- operation deck: glossy black molded surface
- outer rails: translucent/clear light-guide-like pieces with embedded illumination
- reel front: clear protective surface + dark inner masking
- STOP: translucent red lit button faces
- upper center: blue translucent lighted piece
- frame accents: metallic/chrome-like reflective trims in places
- lower panel: printed artwork behind a clear/gloss surface

## HARDWARE FIELD REPORT

中古実機販売店ではレバー・STOP周りのメッキ/塗装剥がれが起きやすい旨が明記されている。これは当該部位が装飾だけでなく、実際に手が触れ摩耗する表面である証拠でもある。

Source:
https://www.a-slot.com/SHOP/s-taiyo_elec207.html

## INTERPRETATION

「メッキを描く」だけでは実機にならない。人が触る部分は反射だけでなく、エッジ、成型境界、摩耗し得る物理表面として存在する。

## REUSABLE PRINCIPLE

素材を色名で定義しない。

`base material / gloss / roughness / transparency / edge / illumination response / touch zone`

まで役割を持たせる。

---

# 9. Normal resting state — 強演出がなくても“一台”に見える

## OBSERVATION

通常遊技中の写真では、筐体は派手な可動役物を常時展開していない。

静止状態でも以下は残る。

- 左赤・右青白系の外周発光
- 青い上部アクセント
- リールの明るいバックライト
- 赤い3 STOP
- 左サブ液晶
- メインLCDの通常歩行背景
- 黒いフレーム/操作卓

## INTERPRETATION

通常時の筐体認識は「全部消灯」ではなく、**低〜中強度の常設光でブランドの骨格を維持し、状態変化はその上へ乗る**。

これはChappy5第1研究巡で出した `REST POSITION FIRST` と一致する。ただし北斗のケースではRESTは物理役物の待機だけではなく、**光量・画面密度・ボタン発光の定常セット**でもある。

## REUSABLE PRINCIPLE

演出状態表には `NORMAL REST VISUAL` を必須にする。

通常時の90%以上が「強演出前の未完成画面」になってはいけない。

---

# 10. Lamp hierarchy — LEDは何を伝えるか

## SOURCED FACT

なな徹の演出法則には、以下のようにランプ/消灯そのものが遊技情報に使われる例が記載されている。

- リール全消灯で本前兆濃厚となる法則
- 小役入賞時LEDが虹色なら本前兆濃厚
- 奇跡の村で特定の緑ライト回転が本前兆濃厚
- 通常演出の発生タイミング（第1/第2/第3停止）がモード/前兆示唆に関与

Source:
https://nana-press.com/post/1620034
https://nana-press.com/kaiseki/machine/514/20886/

## INTERPRETATION

ランプは「期待度が上がるほど赤くする」だけではない。

- リール消灯 = いつもある光を引く
- 虹 = 稀少な確定級情報
- 特定色/回転 = 場所と動きの法則
- 発光タイミング = STOPタイミングとの同期情報

つまりVisual情報は `color × location × timing × baseline deviation` で成立している。

## REUSABLE PRINCIPLE

LED設計では「何色か」より先に、

1. 通常時にどこがどれだけ点いているか
2. 何を消すか
3. どのSTOPで変えるか
4. 何が確定情報で何が示唆か

を決める。

---

# 11. Effect timing vs 3 STOP — LCDがリール読解を奪わない

## SOURCED FACT

攻略解析では、同じ液晶演出でも発生タイミングが第1停止/第2停止/第3停止で意味を変える例がある。

Examples:
- 駆けつけ演出：第一停止より第三停止発生の方が期待が高く、第三停止は天国期待にも関与。
- ケンシロウ見渡し/振り向き：第3停止時＋成立役の組合せに法則。
- 服破り：初代モードでは第2停止発生で本前兆濃厚などの法則。

Sources:
https://nana-press.com/kaiseki/machine/514/15598/
https://nana-press.com/kaiseki/machine/514/20886/

## INTERPRETATION

液晶がSTOP前に答えを全部出すのではなく、**STOP操作を時計として液晶演出を分割**している。

視覚的には大画面が主役でも、時間制御上は物理STOPが映像の句読点になる。

## REUSABLE PRINCIPLE

「液晶が派手だからリールは飾り」ではなく、LCD演出を物理入力へ従属させることで、リール/STOPを中心に戻せる。

---

# 12. Rare role → foreshadowing — 通常時の“強さ”は筐体全点灯ではない

## OBSERVATION / SOURCED LAW

通常時には小さなキャラ動作、色、リール消灯、オーラ、背景/ステージ変化、サブ情報など、多数の局所変化が存在する。強い本前兆法則の一部は「いつもと違う動作」「無演出なのにレア役」「全消灯」など、情報を増やすより**通常との差**を使う。

## INTERPRETATION

前兆は筐体全体を常時強発光させる段階ではない。通常の静かな状態を保持したまま、違和感の密度を上げる。

## REUSABLE PRINCIPLE

通常→前兆のVisual階層は、

`REST → LOCAL DEVIATION → REPEATED/CONTRADICTORY DEVIATION → DEVELOPMENT → HIT`

のように、まず局所差分で作る方が長時間向き。

---

# 13. BB state — 何が変わり、何が変わらないか

## SOURCED FACT

BBは小役パート30G+αとバトルパート8Gで構成され、バトルが継続の判定/提示を担う。

Source:
https://www.pachibee.jp/machines/index/223020004
https://hokuto-no-ken.jp/3340

## OBSERVATION

BB表示写真では、上LCDが通常歩行世界から大きなタイトル/バトル映像へ変化し、画面内の赤・炎・高コントラストが強まる。

しかし物理側は、

- 同じ3リール
- 同じ3 STOP
- 同じ操作卓
- 同じ外周フレーム

を維持する。

つまり「別のゲーム機になる」のではなく、**同じ機械の空気を映像・光で上げる**。

## REUSABLE PRINCIPLE

状態遷移のリアリティは筐体全部を別デザインに変えることではない。固定物を残すから変化が読める。

---

# 14. Continuation battle — physical buttons as suspense anchors

## OBSERVATION / SOURCED FACT

継続バトルは8Gの時間を持ち、演出内の攻防・復活等によって結果を見せる。攻略資料ではSTOPタイミングやPUSHが法則へ関与する場面がある。

中古実機の販売情報では「PUSHボタン バイブストップスイッチ取付加工」が存在し、この実機のPUSHに振動機構があることをハードウェア補助証拠として確認できる。

Source:
https://home-slot.net/SHOP/s-taiyo_elec204.html

## CONFIDENCE

`PUSH has vibration capability = MEDIUM-HIGH`（実機業者が専用停止スイッチ加工を販売）。

振動の内部制御条件・振動波形・強度・モーター仕様は今回確認できないため `UNRESOLVED`。

## INTERPRETATION

常に筐体全体を振動させるのではなく、手を置く/押すPUSHへ局所的な物理フィードバックを集中できる。画面内の攻防から、最後に「手」へ結果を落とすことができる。

## REUSABLE PRINCIPLE

強い物理フィードバックは、筐体全体を動かす役物でなくても成立する。**入力部そのものを結果の触覚出口にする**設計がある。

---

# 15. Upper state / 無想転生 — “more” does not require a new cabinet mechanism

## SOURCED FACT

無想転生バトルは継続率94%の上位状態として公開されている。

Source:
https://hokuto-no-ken.jp/3340

## OBSERVATION

実機写真では、上位状態で上LCDの色調/タイトル/エフェクトが青系へ大きく変化し、外周の青白系発光と視覚的に共鳴する。一方、リール窓・STOP・操作卓の物理位置はそのまま。

## INTERPRETATION

上位状態の「別格感」は新しい大型可動役物の展開ではなく、

- LCD palette
- outer rail intensity / color balance
- title treatment
- sound（Sound Director検証待ち）
- payout/continuation meaning

を同じ筐体骨格へ重ねることで作られている。

## REUSABLE PRINCIPLE

上位状態のために必ず新役物を増やす必要はない。通常時に確立した筐体骨格を保持し、**一部の物理光源と画面空気を再意味化**する方法がある。

---

# 16. What deliberately stays still

## DIRECT OBSERVATION

今回確認した正面/斜め実機資料では、北斗の主要な正面体験を支配する大型可動役物は確認できない。

少なくとも通常遊技の大半では、

- LCD位置
- reel assembly
- left sub display
- right vertical area
- operation deck
- STOP rail
- outer frame silhouette

は固定。

## INTERPRETATION

この固定性が重要。状態差のたびに物体位置が変わらないため、プレイヤーは毎ゲーム同じ場所を見て同じ場所へ手を出せる。

「演出が起きる＝何かが物理的に動く」としないことが、長時間の操作機械としての安定感を作る。

## REUSABLE PRINCIPLE

役物設計の前に `NEVER MOVES / RARELY MOVES / OFTEN MOVES` を区分する。

固定物は演出不足ではなく、身体座標の基準である。

---

# 17. Hall readability

## OBSERVATION

ホール写真/実機写真で残りやすい特徴は、細かいUIではなく以下。

- 左右の縦発光面
- 上LCDの大きな色面
- 白く明るい3リール
- 赤い3 STOP
- 黒い筐体中央部

## INTERPRETATION

ホールでは他台の光・音があるため、遠くから細字UIや小アイコンを読ませる設計は成立しにくい。

北斗では、

`SCREEN COLOR FIELD` と `PHYSICAL REEL WHITE` と `STOP RED`

が別の視覚チャネルになっている。

## REUSABLE PRINCIPLE

Chappy5でも将来、遠距離視認性をロゴサイズだけで評価せず、縮小画像/周辺光の中で**大色面・明暗・入力部**が残るかを見る。

---

# 18. Visual state communication vs branding decoration

## STATE COMMUNICATION — high confidence

- main LCD scene/state change
- reel illumination / reel blackout
- STOP timing linked LCD animation
- small-role LED color law
- sub-display information
- PUSH appearance / vibration when invoked
- BB / upper-state palette and scene

## BRAND / IDENTITY — high confidence

- asymmetric red/blue-white outer rails
- title graphics on side frame/panel
- lower-panel character artwork
- overall color identity

## MIXED FUNCTION

Outer illumination belongs to both. Normally it creates machine identity; in stronger states it can participate in event intensity. Therefore the same physical part can have `brand-at-rest` and `state-communication-on-event` responsibilities.

## REUSABLE PRINCIPLE

筐体部品を「飾り」か「UI」の二択にしない。`REST identity` と `EVENT communication` の二重責務を持たせられる。

---

# 19. Comparison with Chappy5 Reality Standard

## Confirmed alignment

Chappy5のReality Standardで要求している以下は実機観察と整合する。

- LCDとリールに前後/上下の物理階層が必要。
- リール窓は回転体を収納した cavity として扱う。
- LEDは色変更ではなく光源。
- STOPは手の位置とリール列が対応する。
- 強演出はGame Event/STOP timingへ同期する。
- 通常時RESTを設計する。

## Important correction

これまでChappy5は「Mechanism」を可動役物へ寄せすぎていた。

北斗のケースから、Mechanismには以下も含めるべき。

- reel cylinder + motor + masking
- lever
- STOP switch / travel / illumination
- MAX BET / PUSH
- vibration inside PUSH
- fixed translucent light guides
- LCD/reel mounting depth
- human reach geometry

**Mechanism ≠ moving gimmick.**

---

# 20. Critical learnings for future ORIGINAL design — no copying

1. **Physical hierarchy before decoration**
   - screen / reels / deck / stop rail / panel の前後上下関係がまず台を作る。
2. **Reserve the reel-reading zone**
   - 出目をゲームに使うなら、LCDの演出が視覚的にリールを食わない。
3. **Controls are a visual system**
   - 毎ゲーム操作と特別操作を位置で分ける。
4. **REST is a designed state**
   - 通常状態にも定常光、素材反射、画面密度の基準が必要。
5. **LED meaning comes from baseline deviation**
   - 点灯だけでなく消灯、色、場所、STOP同期を使う。
6. **Mechanism includes fixed hardware**
   - 可動役物の数をMechanism品質としない。
7. **Keep body coordinates stable**
   - 長時間台では、リール/STOP/leverの位置を演出都合で揺らさない。
8. **Upper state can re-mean existing hardware**
   - 新しい物を足すより、既存光源/画面/音の意味を変える。
9. **Large LCD can coexist with reel play**
   - 画面位置とSTOP同期を正しく設計すれば物理リールを殺さない。
10. **Hall silhouette and seat readability are different tests**
   - 遠距離は大色面、着席後はリール/サブ表示/操作卓。

---

# 21. Unresolved / must not invent

- 2023スマスロ北斗の拳の正確な筐体外形寸法・重量を一次資料から今回特定できていない。
- 当該機がどのZEEG型式/部品セットを何点採用しているか未確認。現行ZEEG寸法を北斗固有値に流用しない。
- リール窓の実測奥行き、透明カバー厚、リール径、図柄幅の当該機固有値。
- STOPボタンの押下ストローク/スイッチ荷重/復帰特性。
- レバー荷重/作動角/スイッチ構造。
- PUSH振動のモーター方式、周波数、振幅、発生条件全表。
- 外周LEDの正確なLED個数/ピッチ/導光板構造/電流制御。
- 上部/左右スピーカーの当該機固有配置・ユニット径。
- ホール照度下の素材反射の実測。
- 着席目線高さとLCD/リールの実角度。
- BB/無想転生時の全ランプシーケンス。映像だけで完全なイベント表は作らない。

これらは `UNRESOLVED` のまま保持する。

---

# 22. Handoff to Sound & Experience Director

同じ実機を用いて、Visual側で確認した以下の物理固定点へSoundを対応させる。

1. 毎ゲームの手のループ：MAX BET → lever → STOP1/2/3
2. リール窓がLCDと別物理層であるため、reel-spin/STOP mechanical soundが画面SEとどう分離して聞こえるか
3. 通常REST時に外周光・ボタン光は残るが、音はどこまで静かなのか
4. リール消灯/遅れ/第3停止演出時、Visual deviationとSound deviationは同時か、どちらかだけか
5. BB entryで上LCDが大きく変わる瞬間に、音量/帯域/BGMがどう切り替わるか
6. 継続バトルでPUSH vibrationが使われる場合、振動・SE・映像の結果提示タイミング
7. 無想転生で青系Visualへ変化した際、BGM/SEも同じ階層で変わるか
8. 3時間実戦で、外周Visualは常設でもAudioまで常時高密度になっていないか

Sound側は第三者固有音源を再現せず、`baseline / deviation / hit / sustain / fatigue` の構造として記録する。

---

# 23. Gate / project state

- `CASE_STUDY_01_VISUAL_MECHANISM = DEEP_DIVE_RUN_1_COMPLETE`
- `REALITY_BASELINE_SUFFICIENT = FALSE`
- `SIGNAL//3 / FORGE//HEART / VAULT://3 = PROVISIONAL_FROZEN`
- `HUMAN_GATE_1_NOT_READY`
- Production remains denied until explicit `HUMAN_MACHINE_APPROVED`.
