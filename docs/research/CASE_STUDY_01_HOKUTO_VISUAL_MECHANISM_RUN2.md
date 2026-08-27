# Case Study 01 — スマスロ北斗の拳 / Visual & Mechanism Deep Dive Run 2

> Director: Visual & Mechanism
> Target: サミー「スマスロ北斗の拳」（2023）
> Status: `DEEP_DIVE_RUN_2_COMPLETE`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Rule: 第三者IP・ロゴ・固有筐体意匠・固有演出をコピーしない。実機事実、画像/動画観察、解釈、再利用可能原則、未解決を分離する。

---

## 0. Run 2 の問い

Run 1では、北斗の筐体を `大型LCD → 独立物理リール窓 → 操作デッキ → 3STOP → 下パネル` の固定階層として捉えた。

Run 2ではさらに、**通常時の大半でこの機械がどの程度「静かに存在」し、レア役・前兆・BB・上位で何を変え、何を絶対に動かさないか**を中心に掘る。

確認項目：
- 正面だけでなく斜め/側面から見た奥行きと突出量
- 実機のおおよその物理スケール
- 操作部の前後段差と手の固定座標
- メインLCD / リール / サブ液晶 / ランプの情報分担
- 通常時のREST VISUALと強状態の差
- 点灯だけでなく消灯・色・回転・タイミングを情報にする方法
- 初代カスタムで「見せない」ことが成立する理由
- PUSH振動が常時入力ではなく強入力として分離される意味
- 上位状態でも身体座標が変わらないこと
- branding decoration と state communication の分離

---

# 1. Sources added / rechecked in Run 2

## Machine identity / real-unit scale
1. 一撃「スマスロ北斗の拳」機種ページ（型式、筐体画像、リール資料）
   - https://1geki.jp/slot/s_sma_hokutonoken/
2. 中古実機販売 家スロット（型式一致実機のおおよその外形寸法）
   - https://item.rakuten.co.jp/noanoanoa/sumahokuto/
   - 記載: 高さ810mm × 横475mm × 奥行き400mm（販売者が「おおよそのサイズ」と明記）
3. 中一商事 / Yahoo!ショッピング（製造元タイヨーエレック、型式 `L パチスロ北斗の拳AD XR`）
   - https://store.shopping.yahoo.co.jp/nakaiticom/21616.html
4. 実機斜め写真（Yahoo!フリマ/中古流通画像）
   - https://paypayfleamarket.yahoo.co.jp/item/z533223990
   - depth / silhouette observation only。寸法の確定には使わない。

## Long-form real play / cabinet-in-use
5. BASH tv 新台試打, 2023-03-23
   - https://www.youtube.com/watch?v=7PjVshxCT7s
6. 必勝本WEB-TV 導入初日実戦, 2023-04-06
   - https://www.youtube.com/live/PiQB20sn5Tg

## Presentation law / visual information
7. パチ＆スロ必勝本「演出モードについて」
   - https://p.hisshobon.jp/machine/4047/1/94295
8. パチマガスロマガ「初代カスタム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/203/en11.php
9. なな徹 実戦/本前兆濃厚演出整理
   - https://nana-press.com/post/1620034
10. パチ＆スロ必勝本「BB小役パート演出」
   - https://p.hisshobon.jp/machine/4047/1/96019
11. なな徹「無想転生バトル」
   - https://nana-press.com/kaiseki/machine/514/19434/
12. P-WORLD業界ニュース（初代踏襲、初代カスタム、無想転生等の製品説明）
   - https://news.p-world.co.jp/articles/22761/yugitsushin

## Hardware caution
ZEEG現行一般筐体資料は、Run 1同様、北斗固有仕様としては使わない。北斗固有のリール径・LED個数・スピーカー位置・PUSH振動方式は一次資料で未確認。

---

# 2. Cabinet scale — 「画面の枠」ではなく、奥行き約40cm級の箱

## SOURCED FACT
型式が一致する中古実機販売ページでは、本機をおおよそ `H810 × W475 × D400mm` と記載している。

これはメーカー公式寸法ではなく中古販売者による概算なので、**北斗固有の正式寸法として確定しない**。

## OBSERVATION — oblique unit photo
斜め実機写真では、正面フェイスの後ろに深い金属/筐体ボックスがあり、前面装飾だけが400mm近い奥行きを持つのではない。前面側でも、

- 上部クラウン/外周フレーム
- LCD面
- リール窓
- 操作卓
- STOP前縁

が同一平面には並んでいない。

特に操作卓はリール窓より明確に手前へ張り出し、STOP列はさらに身体側へ近い。

## INTERPRETATION
実機らしい「厚み」は、正面のdrop shadowでは作れない。

`箱の奥行き → 前面カバー → LCD面 → リールcavity → 操作卓突出 → STOP前縁`

という異なるZ座標が存在し、着席者は常にその前後差を見下ろしている。

## REUSABLE PRINCIPLE — DEPTH LADDER
将来のChappy5筐体では、正面レイアウトを決める前に主要部品へ相対深度を割り当てる。

最低でも：
1. rear body
2. outer shell
3. display surface
4. reel-window front plane
5. reel cylinder plane
6. operation deck
7. STOP / lever touch plane

を別レイヤーとして考える。

---

# 3. Side silhouette — 遠目の識別は前面だけではない

## OBSERVATION
斜め写真では、右外周の大型サイド意匠/発光部が前面から側面へ回り込み、上部も前方へ庇のように張り出して見える。左側にも赤系の大きな立体アクセントがあり、正面だけでなく30〜60度斜めからも固有の輪郭が残る。

一方、筐体本体側板は直方体に近い実用的な箱で、その前に装飾シェルが載る。

## INTERPRETATION
`機械の箱` と `ブランドの顔` が同じ形状である必要はない。

- 背面/側板 = 設置・構造の箱
- 前面シェル = 遠距離識別
- 操作部 = 着席身体座標

が別責務。

## REUSABLE PRINCIPLE — TWO SILHOUETTES
筐体は少なくとも2種類のシルエットを設計する。

- `ROOM SILHOUETTE`: 島設備に並んだ時の外形
- `FACE SILHOUETTE`: 正面〜斜め45度でプレイヤーへ見える前面立体

ロゴを外してもFACE SILHOUETTEが識別できるかを見る。

---

# 4. Visual field division — 4つの表示面が競合しない

## OBSERVATION
本機には、遊技中に意味を持つ固定視覚面が少なくとも4つある。

1. `MAIN LCD` — 世界、人物、ステージ、前兆/BB/バトル等
2. `PHYSICAL REELS` — 成立役、押し位置、停止形
3. `LEFT SUB DISPLAY` — 数値/補助/カスタム等
4. `LAMPS / BUTTON LIGHTS` — 小役入賞、消灯、色、外周光、STOP状態等

初代カスタムは左サブ液晶から選択できると攻略資料に記載され、メインLCDだけが全UIを背負っていない。

## INTERPRETATION
大画面に情報を集約する代わりに、**情報の寿命と見る頻度に応じて物理位置を分けている**。

- 一瞬の物語/期待 → MAIN LCD
- 毎Gの成立結果 → REELS
- 持続する補助値/設定 → SUB DISPLAY
- 瞬間的な確信/違和感 → LIGHT

## REUSABLE PRINCIPLE — INFORMATION HAS A HOME
状態情報を増やす時は、まず「どの表示面の責務か」を決める。

同じ情報をLCD、LED、ボタン、サブ表示へ重複表示することを豪華さとみなさない。

---

# 5. REST VISUAL 2.0 — 通常時は「何もしていない」のではない

## OBSERVATION
通常時の実機写真では、
- メインLCDは歩行/通常背景
- 物理リールは明るい白系バックライトで読みやすい
- 3STOPは赤い固定発光
- 左サブ液晶は独立して点灯
- 外周左右は赤 / 青白〜紫系の常設光
- 上部にも半透明発光面

が同時に存在する。

つまり、強演出がなくても機械は完全暗転していない。

## INTERPRETATION
通常時のRESTは `OFF` ではなく、**機械の既定状態を学習させる基準画像**。

その基準があるから、
- 全リール消灯
- 特定色LED
- ライト回転
- ボタン/外周の強い発光
- LCDのステージ転換

が「通常からの偏差」として読める。

## REUSABLE PRINCIPLE — REST IS A CALIBRATION STATE
強演出を作る前に、通常時の
`輝度 / 色温度 / 動画密度 / リール照明 / ボタン光 / 外周光 / サブ表示`
を固定する。

強演出はこの基準から何を変えたかで定義する。

---

# 6. Darkness as a signal — LED設計は点灯量ではない

## SOURCED FACT
攻略情報では、通常時に以下の法則が整理されている。
- 全リール消灯で本前兆濃厚
- 小役入賞時LEDの虹色点灯が本前兆濃厚
- 特定場面で緑ライトが回転していることが本前兆法則に接続
- 第3停止時のオーラ/変化などSTOPタイミングに結びつく演出がある

## INTERPRETATION
普段リールが明るく安定しているから、**消えること自体が強い情報**になる。

これは「LED演出 = 明るくする」という発想と逆。

Visual attentionは、
`光を足す / 光を引く / 色を変える / 移動させる / 発生タイミングをずらす`
の5方向で作れる。

## REUSABLE PRINCIPLE — LIGHT VECTOR
ランプ仕様では単なるRGB値ではなく、最低限以下を持つ。
- source location
- baseline state
- delta: add / subtract / color / motion
- trigger input: LEVER / STOP1 / STOP2 / STOP3 / result
- gameplay truth
- return timing

---

# 7. STOP timing is visual editing

## SOURCED FACT
攻略資料では、同じキャラクター系演出でも第1停止・第2停止・第3停止など発生タイミングにより法則/期待が変わる例が整理されている。第3停止離しでオーラ変化等の本前兆濃厚パターンもある。

## INTERPRETATION
物理STOPは入力だけでなく、映像編集のカット点になっている。

`LEVER → image setup → STOP1 → reaction 1 → STOP2 → reaction 2 → STOP3 → truth/release`

という演出は存在し得るが、重要なのは「毎ゲームこの形にする」ことではない。

普段はSTOPに映像反応が薄いからこそ、特定ゲームでSTOP同期が強くなる。

## REUSABLE PRINCIPLE — SYNC SCARCITY
STOP同期は常時使わない。

同期自体を希少資源とし、通常の薄反応とのコントラストを作る。

---

# 8. Initial-mode custom — 見せないことで物理骨格が露出する

## SOURCED FACT
初代モードでは、
- 通常時演出頻度が大幅ダウン
- BB小役パートの煽り要素がなくなる
- 宿命バトル/Vストックが見た目上出現しない
- BBバトル中の一部チャンスパターンが発生しない

一方、内部抽選自体が消えるわけではないケースがある。

## INTERPRETATION
これはVisual量を減らしても、
`リール + 基本操作 + 基本LCD + 固定ランプ + BB反復`
の身体文法だけで遊技が維持できることを示す。

映像演出は台を成立させる唯一の柱ではなく、**同じゲーム骨格へ情報密度を上乗せする層**。

## REUSABLE PRINCIPLE — PRESENTATION CAN BE SUBTRACTED
完成候補は「Visual演出を半分にしたらゲームが崩壊するか」を試験する。

崩壊するなら、ゲーム上必要な情報をVisual量で代替している可能性がある。

---

# 9. Operation deck — normal input と strong input を分離する

## OBSERVATION
斜め写真から、
- レバーは左下の独立した球状入力
- 3STOPは身体正面の水平列
- MAX BETは上段左寄り
- 大型PUSH/補助操作はSTOP列と別の上段面

に分かれている。

中古実機販売ではPUSHバイブON/OFF加工が提供されており、PUSHに振動機構が存在することは確認できる。ただし方式・強度・周波数は未解決。

## INTERPRETATION
毎Gの`LEVER + STOP`と、演出時の`PUSH + vibration`を同じ身体入力へ載せていない。

強入力が常時入力と分離されているから、PUSHを要求された時点で身体側にも「例外」が発生する。

## REUSABLE PRINCIPLE — INPUT RARITY MUST MATCH FEEDBACK RARITY
常時入力に強振動を付けない。

- frequent input → low fatigue / predictable feedback
- rare explicit input → stronger tactile feedback allowed

と分ける。

---

# 10. Upper state — machine does not need a second body

## SOURCED FACT
無想転生バトルは94%継続の上位状態だが、基本ゲーム性は通常BB同様に小役パート30G+αとバトルパート8Gを維持する。

## OBSERVATION / INTERPRETATION
公開動画・画像では、上位へ入っても筐体の物理リール位置、STOP列、レバー、サブ表示の身体座標が別の位置へ移動するわけではない。

上位価値は主として、
- LCD世界/色/演出
- Audio
- light hierarchy
- 内部報酬価値

を増幅し、身体側の基本操作を維持する。

## REUSABLE PRINCIPLE — BODY GRAMMAR STABILITY
上位状態を豪華にするために、操作位置まで別物にしない。

プレイヤーが既に学習した身体文法を保ち、意味/価値だけを上げる方が、一台としての連続性を維持しやすい。

---

# 11. Branding decoration vs state communication

## OBSERVATION
外周の赤/青白系大型発光、タイトルサイド意匠、下パネル等は遠距離で台を識別する役割が強い。一方、
- リール消灯
- 小役LED色
- STOPタイミングでの変化
- サブ液晶
- MAIN LCDステージ/演出

は遊技中の状態通信を担う。

## INTERPRETATION
一つの発光部に `ブランド / 常時装飾 / 状態示唆 / 当たり告知` を全部背負わせると、通常時から光が強すぎて差がなくなる。

## REUSABLE PRINCIPLE — LIGHT ROLE SEPARATION
ランプ群を最低3クラスへ分ける。
1. identity light — 台の顔
2. operation light — 操作/可読性
3. event light — 状態/結果

同じ部品が複数責務を持つ場合も、通常時とイベント時の優先順位を決める。

---

# 12. Hall readability — noisy hall is also visually noisy

## OBSERVATION
ホール実戦動画では周囲にも他台の液晶・照明があり、単体の商品写真より背景が圧倒的にうるさい。

北斗の遊技中にプレイヤーが継続して使う情報は、近距離の固定領域：
- リール窓
- 3STOP
- 左サブ液晶
- メインLCD中央
へ集中している。

## INTERPRETATION
ホールでの可読性は「全部を明るくする」ことではなく、**情報位置が毎G動かないこと**で支えられている。

外周光は遠目識別、着席後の重要情報は中央固定という分業。

## REUSABLE PRINCIPLE — FIXED ATTENTION ANCHORS
派手な演出で画面全体を使っても、
- result anchor
- reel anchor
- hand anchor
を動かさない。

ホール視覚ノイズ下で、プレイヤーが視線を戻す場所を固定する。

---

# 13. Run 2 correction to Chappy5 Visual thinking

今回の北斗研究から、Visual & Mechanism側では以下を正式修正する。

1. `MECHANISM ≠ MOVABLE GIMMICK`
   - cavity / reel cylinder / lever / STOP / deck depth / vibration / light pathもMechanism。

2. `REST ≠ NOTHING`
   - 通常光量、通常映像密度、リール照明、ボタン発光が基準状態。

3. `MORE LIGHT ≠ STRONGER EVENT`
   - 消灯・光量低下も強い情報になり得る。

4. `BIG LCD ≠ REEL DEATH`
   - リールに固定された物理窓と視線領域があれば、大画面と出目読解は共存できる。

5. `STRONG STATE ≠ NEW CABINET`
   - 身体座標を維持し、意味/価値/光/音を増幅する方が一台として連続する。

6. `UI ≠ ONE SCREEN`
   - 長寿命情報、瞬間情報、出目情報は物理表示面を分けられる。

7. `STOP SYNC IS A SCARCE RESOURCE`
   - 毎G同期させず、同期自体を強い偏差にする。

8. `PRESENTATION DENSITY IS VARIABLE`
   - 初代カスタムのように演出を引いてもゲームが成立する骨格を要求する。

---

# 14. UNRESOLVED after Run 2

以下は今も確定しない。

- メーカー公式の北斗固有外形寸法・重量
- リール径、リール窓からドラムまでの実深度
- STOPボタン径、ストローク、荷重、間隔
- レバーの復元力/ストローク
- 操作卓の実突出量/角度
- 前面透明材の材質と厚み
- メッキ/塗装/半透明樹脂の正式素材構成
- LED個数、光源位置、導光板/拡散材の内部構造
- 北斗固有のスピーカー位置/構成
- PUSHバイブのモーター方式、振幅、周波数、発生条件全表
- ホール照度下の実輝度/nit、LED lux
- 3時間ノーカットでの光刺激密度
- 初代カスタムON/OFF同一100GのVisual event count比較

これらを推測で `CONFIRMED` にしない。

---

# 15. Handoff to Sound & Experience

次Sound Runでは、Visualで確認した3層
`identity light / operation light / event light`
にAudio側の
`baseline / deviation / reward`
がどう対応するかを見る。

特に、
- リール消灯時にAudioも引くのか/足すのか
- PUSH + vibration + sound の三者同期
- 初代カスタムでVisual event densityが減った時、Audio densityもどう変わるか
- 上位で身体座標を維持したまま、Audioだけでどこまで価値差を作るか

を研究候補とする。

---

## Final status

`VISUAL_MECHANISM_DEEP_DIVE_RUN_2_COMPLETE`

既存 `SIGNAL//3 / FORGE//HEART / VAULT://3` は `PROVISIONAL_FROZEN` のまま。
`HUMAN_GATE_1_NOT_READY` を維持。
本制作・Visual Prototype・Asset・Cabinet/Mechanism implementation・Codeは行っていない。
