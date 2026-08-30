# Case Study 01 — スマスロ北斗の拳 / Sound & Experience Deep Dive

> Director: Sound & Experience
> Target: サミー「スマスロ北斗の拳」（2023）
> Status: `DEEP_DIVE_RUN_1_COMPLETE`
> Stage: Stage 1 / Reality Baseline Study only
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: 禁止。Audio Prototype / Audio Asset / Code / Production Implementationは作らない。
> Rule: 第三者IPの固有楽曲、メロディ、ボイス、SE、告知音、サンプルをコピーしない。研究事実・観察・解釈・再利用可能原則を分離する。

## 0. 今回の問い

Visual & Mechanismが確認した固定物、

`大型LCD → 独立物理リール窓 → 操作デッキ → 3STOP → PUSH/補助操作 → 外周発光`

へ、Soundが実際にどう重なって「一台のパチスロ」になっているかを調べる。

特に見るもの：

- 毎ゲームの基礎ルーティン音
- 通常REST時の音響密度
- レア役/違和感/前兆の注意喚起
- STOPタイミングとAudio/Visualの法則
- 「音を足す」だけでなく遅れ・欠落・タイミング変更
- BB告知/準備/入賞/突入の段差
- 小役パートとバトルパートの音響責務差
- 継続確定を音で知らせるBGM変化
- 復活時のMAX BET / LEVERとの結合
- 無想転生への上位化で何を強くし、何を維持するか
- 長時間での反復疲労とカスタムの意味
- 音単体ではなく `入力 × リール × LCD × ランプ × 振動 × 状態` の同期

---

# 1. Sources

## Official / manufacturer context

1. SEGA SAMMY / 開発者インタビュー 2023-10-06
   - https://www.segasammy.co.jp/ja/ir/individual/interviews/archive/archive_20231006/
2. サミー公式「スマスロ北斗の拳」スペシャルムービー（公式YouTubeへの導線確認）
   - P-WORLD報道: https://news.p-world.co.jp/articles/22686/greenbelt
3. サミー「北斗の拳」シリーズのサウンドトラック資料（シリーズでBGM/楽曲/演出音が商品として設計されてきたことの補助）
   - https://www.sammy.co.jp/japanese/fun/soundtrack/273.html

## Strategy / effect-law sources

4. なな徹 — BGM変化の法則
   - https://nana-press.com/kaiseki/machine/514/20774/
5. なな徹 — バトルパート詳細
   - https://nana-press.com/kaiseki/machine/514/14564/
6. なな徹 — 初代カスタム
   - https://nana-press.com/kaiseki/machine/514/20776/
7. なな徹 — ラオウステージ / ギター音法則
   - https://nana-press.com/kaiseki/machine/514/15598/
8. なな徹 — 通常時演出/北斗カウンタ/初代カスタム
   - https://nana-press.com/kaiseki/machine/514/14420/
9. パチマガスロマガ — 初代カスタム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/203/en11.php
10. パチ＆スロ必勝本 — 通常時演出法則
   - https://p.hisshobon.jp/machine/4047/1/94258
11. パチ＆スロ必勝本 — 演出モード
   - https://p.hisshobon.jp/machine/4047/1/94295
12. パチ＆スロ必勝本 — BB確定画面中
   - https://p.hisshobon.jp/machine/4047/1/94740
13. Pachiseven — 72万G実戦者によるAT中演出法則
   - https://pachiseven.jp/articles/detail/19359
14. Pachiseven — 北斗“あるある”/長期遊技者の体験記述
   - https://pachiseven.jp/articles/detail/20407
15. 1geki — 機種解析/設定差/終了ボイス等の入口
   - https://1geki.jp/slot/s_sma_hokutonoken/

## Long-form play references

16. 必勝本WEB-TV 導入初日長尺実戦（Case Study共通）
   - https://www.youtube.com/live/PiQB20sn5Tg
17. BASH tv 新台試打（Visual側共通）
   - https://www.youtube.com/watch?v=7PjVshxCT7s
18. CLUB SINDY 設定6実戦（Visual側共通）
   - https://www.youtube.com/watch?v=tLi9vHaBrYo
19. サラスロ北斗実戦まとめ（約2時間、複数回実戦）
   - https://www.youtube.com/watch?v=YnrXAuRllrM
20. 2025-07-23 ホール生放送記録（8時間17分）
   - https://www.tubetre.com/videos/view/kgaWc8fJ24c

### Video evidence caution

このRunではWeb経由で長尺動画の存在・長さ・チャプター/概要は確認したが、YouTube本体の取得制限により、全時間を連続した音声波形として直接再生・実測したわけではない。

したがって、以下を厳密に分ける。

- 攻略資料に法則として記載された音/タイミング = `SOURCED FACT`
- 長尺動画から確認できる構造・公開チャプター = `VIDEO REFERENCE`
- 音量、周波数、定位、残響、機械音/電子SE比率の厳密評価 = `UNRESOLVED / NEEDS DIRECT AUDIO OBSERVATION`

「聞いたことにする」ことは禁止する。

---

# 2. 北斗のSoundは「通常から爆音へ上げ続ける階段」ではない

## SOURCED FACT

本機には通常モードと初代モードがあり、初代モードでは通常時の演出発生頻度が大幅に下がる。

AT小役パートでも、初代モードでは宿命バトルやVストックの見た目上の煽りが消え、BGMも初代風へ変化する。バトルパートでは一部チャンスアップが消え、BGM変化の条件/タイミングも変わる。

Sources:
- https://nana-press.com/kaiseki/machine/514/20776/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/203/en11.php
- https://p.hisshobon.jp/machine/4047/1/94295

## INTERPRETATION

同じ出玉ゲームを、情報密度の違う2つの感覚モードで遊べる。

重要なのは、初代カスタムが単なる懐古BGM切替ではなく、

`演出頻度↓ / 可視化される抽選情報↓ / BGMの切替法則変更 / チャンスアップ削減`

まで含んでいること。

Sound & Experienceの観点では、**情報量を減らすこと自体が正式な体験設計**になっている。

## REUSABLE PRINCIPLE

- 「演出をたくさん作ったから全部見せる」をやめる。
- 同じ内部ゲームでも `presentation density` を調整できる。
- 長時間遊技では、情報を隠す/減らすモードにも価値がある。
- 音量調整だけでなく、発生頻度・Cue種類・タイミング・BGM情報量を調整対象にする。

## DO NOT COPY

「初代モード」という名前、北斗固有BGM、具体的演出を流用しない。学ぶのは、内部ゲームを変えずに感覚密度を選択可能にする構造。

---

# 3. 通常RESTは「無音」ではなく、予測可能なAudio Routine

## SOURCED FACT

通常時には複数の演出法則があり、特定の音/演出タイミングのズレがレア役や本前兆と結びつく。

公開攻略例：
- 「遅れ」はチェリー対応で、チェリー否定時にはAT当選濃厚とされる。
- レバーONで出るはずのアクションがリール始動時に出る、通常はSTOP押下時に出るアクションが第3停止を離した時に出る等のタイミング違和感が強い意味を持つ。
- レア役で演出無し、対応役矛盾なども違和感として機能する。

Sources:
- https://altema.jp/pachimo/lhokuto
- https://p.hisshobon.jp/machine/4047/1/94258

## INTERPRETATION

「遅れ」が成立するためには、先にプレイヤーの身体が覚える `NORMAL TIMING` が必要。

毎ゲームの

`BET → lever → reel start → STOP1 → STOP2 → STOP3 → result → next BET`

に対して、通常時の音/映像反応が十分安定しているから、数十ms〜数百ms級のズレ、発音欠落、発火場所の変更が「何か違う」に変わる。

これはSound Baselineで学んだ `ルーティン破壊` が、北斗という実機1台で実ゲーム情報へ接続されている例。

## REUSABLE PRINCIPLE

1. 強い違和感Cueを作る前に、通常Audio timingを固定する。
2. 強演出を新規SE追加だけで作らない。
3. `delay / omission / timing relocation / contradiction` を使う。
4. ただし通常タイミングが頻繁にブレる台では、この資産は使えない。

---

# 4. 音は成立役を単独で告げるのではなく「対応法則」を作る

## SOURCED FACT — ラオウステージのギター音

ラオウステージでは「ギター音」が足跡発見演出またはレア小役（スイカ/チェリー）対応として使われる。

さらに、ギター音後に対応関係から外れた演出が発生すると、本前兆濃厚の違和感法則になると解析されている。

Source:
- https://nana-press.com/kaiseki/machine/514/15598/

## INTERPRETATION

ここで重要なのは「ギターが鳴ると熱い」ではない。

音が先に `候補集合` を作り、後続のリール/液晶がその候補を満たすか裏切るかを見る。

つまりAudioは結果音ではなく、**このゲームで何を観測すべきかを一時的に変更する前置き情報**として働く。

## REUSABLE PRINCIPLE

Audio Eventは少なくとも以下のどれかを持つ。

- 候補役を限定する
- STOP時に見る場所を変える
- 後続Visualとの整合/矛盾を作る
- 状態推測を更新する
- 結果確定まで耳を残す

責務のない雰囲気SEは通常時に増やしすぎない。

---

# 5. STOPタイミングはSound/Visualの「句読点」

## SOURCED FACT

通常時演出には、
- 第1停止→第3停止
- いきなり第2停止
- いきなり第3停止
- 第2停止→第3停止

等、STOPタイミングそのものが法則になる演出が存在する。

またオーラ演出や通行人演出等では第2/第3停止時の変化が成立役/期待度情報になる。

Source:
- https://p.hisshobon.jp/machine/4047/1/94258

## INTERPRETATION

北斗のAudio/Visualは、液晶のアニメーション時間だけで自動再生されるのではない。

3つのSTOP入力が、演出の中で「次の情報を出してよいタイミング」になる。

Sound側でも、STOP押下そのものの基礎音と、STOPを契機に発生する演出音は役割が違う。

- 基礎STOP音 = 手応え/機械反応
- STOP同期演出音 = 候補の更新/期待度変化

これを混同して毎STOPに派手なSEを重ねると、入力の手応えが埋もれる。

## REUSABLE PRINCIPLE

`INPUT CONFIRMATION SOUND` と `GAME INFORMATION SOUND` を別レイヤーで考える。

同時発音する場合でも、どちらが主役かをEventごとに決める。

---

# 6. BB告知後にも「音響の階段」が残っている

## SOURCED FACT

BB告知後は準備中を経由し、狙え演出で赤7または北斗図柄を揃えてBB開始となる。

また、狙え演出の発生タイミングが通常と異なる場合に特別な停止結果を示唆する法則も存在する。

Source:
- https://p.hisshobon.jp/machine/4047/1/94740

## INTERPRETATION

当選告知で体験を全部使い切っていない。

`当選した → 準備に入る → 狙う → 揃える → BB開始`

と、人間の入力とリール停止を通して報酬入口を段階化している。

Soundもここで

`告知ピーク → 準備ループ → 狙えCue → 揃い結果 → ENTRY BGM`

という責務分離を持てる。

## REUSABLE PRINCIPLE

当たりは1つの大SEで終わらせない。

- `HIT CONFIRM`
- `PREPARE`
- `PLAYER EXECUTION`
- `ENTRY RELEASE`

を別の感情段階として扱う。

ただし無意味に長い準備演出を作るという意味ではない。各段階に実際の入力/状態変化が必要。

---

# 7. BBでは「小役パート」と「バトルパート」で耳の責務が変わる

## SOURCED FACT

バトルボーナスは小役パートとバトルパートで構成される。

小役パートでは押し順ベルやレア役、共闘/Vストック等の抽選があり、バトルパートは継続結果を見せる8G区間となる。

通常モードでは小役パート中に宿命バトル等の新規演出が可視化されるが、初代カスタムではそれを隠す。

Sources:
- https://nana-press.com/kaiseki/machine/514/13780/
- https://nana-press.com/kaiseki/machine/514/20776/

## INTERPRETATION

同じBB中でも、Soundの責務は同じではない。

### 小役パート
- 長く繰り返せる
- ナビ/STOPを邪魔しない
- レア役/共闘などの情報を局所的に立てる
- BGMは `SUSTAIN`

### バトルパート
- 毎セットの結果区間
- 緊張と継続/敗北の判定を支える
- 音数を増やすより、攻防のタイミングと静けさが重要
- BGM変化そのものが結果情報になる

## REUSABLE PRINCIPLE

AT/BONUSを1本のBGMと同じテンションで塗らない。

`EARNING / SUSTAIN` と `JUDGEMENT / RELEASE` を分離する。

---

# 8. BGM変化は「ご褒美曲」だけでなく継続確定UI

## SOURCED FACT

バトルパート開始時のBGM変化は継続確定。

通常モードでは、5セット目以降・7セット目以降・10セット目以降などに異なる代表楽曲へ変化する可能性があり、5セット目以降の継続時には約1/3でBGM変化が発生する。

20セット目以降はラオウ昇天が発生しなかった時点で継続濃厚となる関係から、BGMが毎セット変化する仕様と解析されている。

初代カスタムでは楽曲変化の条件が絞られ、10セット目以降の特定曲のみになる。

Sources:
- https://nana-press.com/kaiseki/machine/514/20774/
- https://nana-press.com/kaiseki/machine/514/14564/

## FIELD REPORT

長期遊技者の体験記事では、5連目以降にBGM変化を期待し、楽曲そのものより先にミッション成功SE/表示で変化に気付くことがあると記述されている。

Source:
- https://pachiseven.jp/articles/detail/20407

## INTERPRETATION

BGMは背景ではない。

プレイヤーにとって、曲が変わった瞬間に「次セットがある」というゲーム情報が確定する。

このためBGM変化には二重の報酬がある。

1. 聴覚的な気分上昇
2. 継続確定という実利

記憶に残る理由は楽曲単体の良さだけではない。

## REUSABLE PRINCIPLE

状態BGMの変更にはゲーム上の責務を持たせる。

- 単なる曲替え
- 継続保証
- 状態昇格
- 到達節目
- 危機脱出

のどれなのかを明記する。

第三者楽曲の知名度に頼らなくても、**BGM change = true game event** にすれば記憶価値を作れる。

---

# 9. 「いつBGMが変わるか」までゲーム仕様

## SOURCED FACT

通常モードではバトルパート開始時の楽曲変化はレバーON側で発生する。

初代カスタムでは、楽曲変化タイミングがBETでのラウンド開始表示へ変更される。

Sources:
- https://nana-press.com/kaiseki/machine/514/20776/
- https://p.hisshobon.jp/machine/4047/1/94295

## INTERPRETATION

同じ「次セット継続確定BGM」でも、

- LEVERで分かる
- BETで分かる

では身体体験が違う。

これはAudio Eventの `WHAT` だけでなく `WHEN / WHICH INPUT` がゲームデザインである証拠。

## REUSABLE PRINCIPLE

Audio Event表には最低限

`STATE / GAME CONDITION / INPUT TRIGGER / REEL PHASE / VISUAL SYNC / AUDIO ROLE / PLAYER KNOWLEDGE AFTER CUE`

を持たせる。

「曲Aを流す」だけの仕様書にしない。

---

# 10. 復活はMAX BETとLEVERで意味が変わる

## SOURCED FACT

バトルでケンシロウが倒れた後の復活は基本的に終了画面でMAX BETを押した時に発生する。

ただしリプレイ時などはレバーで復活するケースがあり、特定条件でMAX BETではなくレバー復活となった場合には、バトル中成立役による継続書き換えが確定する法則がある。

Source:
- https://nana-press.com/kaiseki/machine/514/14564/

## INTERPRETATION

復活演出の強さは、復活SEの大きさだけではない。

一度「終わった」と身体に思わせた後、普段の次BET/次レバーという操作を境界にして結果を反転させる。

つまり

`silence/ending posture → player input → reversal`

という因果が重要。

## REUSABLE PRINCIPLE

逆転演出は自動再生で見せるより、**プレイヤーが次の操作をした瞬間に機械が答える**方が身体記憶を作りやすい。

ただし毎回やると終了境界への信頼を壊すため、発生頻度と法則管理が必要。

---

# 11. Soundの強さはVisual法則と矛盾した時にも生まれる

## SOURCED FACT

通常時には「対応役と演出の矛盾」「レア役なのに演出無し」「レバーON演出がリール始動時に発生」「第3停止を離した時に反応」等の違和感法則が存在する。

ラオウステージのギター音でも後続演出との矛盾が本前兆濃厚になる。

Sources:
- https://altema.jp/pachimo/lhokuto
- https://nana-press.com/kaiseki/machine/514/15598/

## INTERPRETATION

SoundとVisualが毎回同じ強さで同期することが「統合」ではない。

統合されたシステムだからこそ、意図した非同期/矛盾が情報になる。

`通常は同期する` という信頼が先に必要。

## REUSABLE PRINCIPLE

REALITY/PRESENCEの同期原則を、常に全要素を同時発火することと誤解しない。

- 通常は同期
- 特別時は音だけ遅らせる
- Visualだけ先に出す
- 一方を欠落させる

等を、同一Game Event上の意図的偏差として設計できる。

---

# 12. 上位状態は「別ゲームの爆音化」ではなく、既存ループの価値を上げる

## SOURCED FACT

無想転生バトルは継続率約94%の上位AT。通常BBのバトル構造を基礎に、継続期待を大きく引き上げる。

Sources:
- https://nana-press.com/kaiseki/machine/514/20825/
- https://nana-press.com/kaiseki/machine/514/13780/

## INTERPRETATION

Visual側の調査でも、上位へ入っても物理リール/STOP/操作座標は維持される。

Sound側も同じであるべきで、上位＝常時最大音量・常時最大密度とは限らない。

プレイヤーは既にBBの

`小役パート → バトルパート → 継続判定`

という耳と身体の文法を学んでいる。上位では、その文法の価値・安心度・節目感を増幅する方が一貫性が高い。

## REUSABLE PRINCIPLE

上位状態で変えるものと維持するものを分ける。

### 維持候補
- STOP基礎音
- リール機械感
- 入力タイミング
- セット進行の基本拍

### 強化候補
- BGMの意味
- 節目Cue
- 継続確定の解放
- 低域/振動の希少使用
- 色/光との同期

上位を別タイトルのように作らない。

---

# 13. 長時間疲労 — 北斗自身が「情報密度を下げる」選択肢を持つ意味

## SOURCED FACT

初代カスタムでは通常時演出頻度が大幅に低下し、小役パートの煽りも削られる。

攻略/体験記事には、初代カスタムは長時間時にシンプルで負担が少ないとするプレイヤー側評価もある。ただしこれは個人記事の感想であり、メーカー公式の疲労試験結果ではない。

Sources:
- https://nana-press.com/kaiseki/machine/514/20776/
- https://juggler-tengoku.com/archives/4260

## FIELD OBSERVATION / LONG-PLAY CONTEXT

5時間〜8時間級の北斗ホール生放送/実戦動画が多数成立しており、通常時・短いBB・再び通常という反復を長時間見る材料が存在する。

Examples:
- https://www.tubetre.com/videos/view/kgaWc8fJ24c (8h17m)
- https://yutura.net/channel/64479/trend/uIePcD0Kq8o/ (5h21m)

本Runでは動画全編の音響を直接測定できていないため、具体的疲労Cueの断定はしない。

## INTERPRETATION

北斗の長期商品性で学ぶべきなのは「人気曲があるから何時間でも聞ける」ではなく、

- 通常時には低密度の時間がある
- レア役/前兆で注意密度が上がる
- BB ENTRYでピーク
- 小役パートで持続可能な密度へ下げる
- バトルで緊張を上げる
- BGM変化は毎セットではなく節目/一部継続で発生
- 初代カスタムでさらに密度を落とせる

という **density wave** である。

## REUSABLE PRINCIPLE

3時間のSound QAでは平均音量だけでなく

`Audio Event count per 100G / strong cue recurrence / continuous BGM duration / silence windows / voice recurrence / vibration recurrence`

を確認する。

---

# 14. 記憶に残るSound Experienceは「音源単体」ではない

## CASE SYNTHESIS

北斗で記憶価値が高い音響体験には、公開法則上ほぼ必ずゲーム意味が接続されている。

- 遅れ → 成立役/当選期待
- ギター音 → 対応候補と矛盾法則
- STOPタイミング変化 → 強い状態/役情報
- 狙え → プレイヤーのリール実行
- BGM変化 → 継続確定
- 復活 → MAX BET/LEVERという身体入力で終了反転
- 初代カスタム → 音/演出密度そのものを選択

## REUSABLE PRINCIPLE

将来Chappy5で「また聞きたい音」を作る時、先に音色を考えない。

先に

`何を引いた/何が起きた → いつ気付く → 何を押す → どこを見る → 音が何を確定/否定する → その後の1Gの価値がどう変わる`

を設計する。

Signature Soundはその最後に生まれる結果であって、企画の最初に置くものではない。

---

# 15. 既存Sound Baselineへの具体的修正

Reality Baseline Study 1で持っていた以下の原則は北斗でも支持された。

1. `BASIC OPERATION FIRST`
2. `ATTENTION HIERARCHY`
3. `NORMAL TIMING` が違和感の資産
4. Audioは出目/状態UIにもなる
5. BONUS ENTRYとSUSTAINは別責務
6. 強さ≠最大音量
7. 同期≠全部同時
8. 長時間ではCue頻度が品質になる

Case Study 01からさらに追加する。

### NEW PRINCIPLE A — `PRESENTATION DENSITY IS A PLAYER-FACING PARAMETER`
音量だけでなく、演出/音の発生頻度を設計・場合によっては選択可能にする。

### NEW PRINCIPLE B — `AUDIO TIMING CAN BELONG TO A SPECIFIC INPUT`
同じBGM変化でもLEVER起点かBET起点かで体験が変わる。Audio Eventは入力責務と結合する。

### NEW PRINCIPLE C — `BGM CHANGE SHOULD MEAN SOMETHING`
状態BGMは壁紙ではない。変化自体に継続/昇格/節目などの真実を持たせられる。

### NEW PRINCIPLE D — `CONTRADICTION REQUIRES A TRUSTED BASELINE`
矛盾/遅れ/欠落は、通常法則が安定している時だけ機能する。

### NEW PRINCIPLE E — `UPPER STATE SHOULD PRESERVE THE LEARNED RHYTHM`
上位状態でも基礎入力・STOP・リールの身体文法を保持し、価値の方を上げる。

---

# 16. まだ確認できていないもの

## UNRESOLVED — physical audio

以下は北斗固有の一次資料/直接測定を確認できていない。

- スピーカー個数/位置/口径/定格
- サブウーファー有無と北斗固有仕様
- 周波数特性
- 筐体内共振
- 音量段階ごとの実dB
- STOPボタン自体の機械クリック音と電子SEの比率
- レバー機械音
- 実リール回転機械音と電子回転SEの分離
- リール停止時の物理衝撃音
- PUSH振動の周波数/振幅/継続時間
- 振動が筐体音としてどの程度聞こえるか

現行ZEEG一般仕様等を、北斗固有値へ勝手に流用しない。

## UNRESOLVED — long-form direct listening

- 通常300〜500Gで同一音が何回反復するか
- レア役を何度外すと特定Cueが疲労へ変わるか
- BB単発/2連時と10連以上でBGM体感がどう変わるか
- 無想転生20〜50セット級で上位BGM/SEが疲れるか
- ホール騒音下でどの帯域が実際に抜けるか
- 隣台とのマスキング

Playtest & QAは長尺実戦を使い、音だけの好悪ではなく「何回聞いた後に意味が変質するか」を確認する。

---

# 17. Playtest & QAへのHandoff

同じスマスロ北斗を対象に、以下を時間軸で確認する。

## A. 最初5分
- 基礎操作音の存在を意識せず操作できるか
- 遅れ/対応音が出た時に自然にリールへ注意が向くか
- 通常モードは情報過多に感じるか
- 初代モードは「何も起こらない」ではなくリール/状態を読む余白になるか

## B. 通常100G
- 強Cueの実発生回数
- voice/演出SEの重複頻度
- 32G前兆中にAudio densityがどのように増減するか
- 前兆否定後に音響が自然にRESTへ戻るか

## C. 500G級ハマリ
- BET/lever/reel/STOP音が嫌いにならないか
- 中段チェリー不発後の32Gが繰り返すと煽り疲労になるか
- 初代カスタムで疲労が実際に下がるか
- 強演出外れの音が怒りを増幅しないか

## D. BB ENTRY
- 告知→準備→狙え→揃い→開始が一つの大音量イベントではなく段階化されているか
- ENTRY HIT後にSUSTAINへ下げられているか

## E. BB短連/長連
- 小役パートBGMが長時間耐えられるか
- バトルパートで十分に緊張差があるか
- 5/7/10連以降のBGM変化が本当に再体験動機になるか
- 変化がないセットでも期待を保てるか

## F. 上位
- 無想転生へのENTRYと、その後20セット以上のSUSTAINを分けて評価
- 上位の価値が音量だけで作られていないか
- 通常BBの音響価値を上位が破壊していないか

## G. END / REVIVAL / NEXT BET
- 敗北時に本当に「終わった」と感じる音響境界があるか
- MAX BET/LEVER復活が身体的に強いか
- 復活頻度が終了境界への信頼を壊していないか
- AT終了後ボイスが次の続行/ヤメ判断へ情報として使われるため、単なるキャラボイス以上の責務を持っているか

### QA分類

`SOURCED FACT / VIDEO OBSERVATION / PLAYER FIELD REPORT / SIMULATED INTERPRETATION / UNRESOLVED`

を混同しない。

---

# 18. Director conclusion

スマスロ北斗の拳からSound & Experience側が学ぶべき核は、**「強い固有音」ではなく、音をゲームの時間軸へ配置する技術**である。

この台では、

`通常ルーティン → 遅れ/対応音 → STOP法則 → 前兆 → 告知 → 準備 → 狙え → BB → 小役SUSTAIN → バトルJUDGEMENT → BGMによる継続確定 → 敗北/復活 → 次BET`

まで、Soundが同じ強度で鳴り続けない。

特に重要なのは次の5点。

1. **通常音を信頼させてから違和感を作る。**
2. **音に対応役・状態・継続などの真実を持たせる。**
3. **BGMの種類だけでなく、切り替わる入力タイミングまで仕様にする。**
4. **当たり入口と長時間SUSTAINの音響責務を分ける。**
5. **プレイヤーが演出密度を下げても遊技が成立するほど、ゲーム本体をSoundが邪魔しない。**

第三者の北斗楽曲、ボイス、具体SEを真似る必要はない。むしろそれを外しても残る `baseline → deviation → judgement → release → sustain → fatigue control` の構造こそChappy5で再利用可能な学習である。

既存 `SIGNAL//3 / FORGE//HEART / VAULT://3` への適用・評価は行わない。3案は `PROVISIONAL_FROZEN` を維持。

`REALITY_BASELINE_SUFFICIENT = FALSE` を維持。Playtest & QAの同一機深掘り、Machine統合、さらに方式の異なる実機ケーススタディが必要。

## Human Gate

`HUMAN_GATE_1_NOT_READY`

人間が `HUMAN_MACHINE_APPROVED` を出すまでAudio Prototype、Audio Assets、コード、本制作は禁止。
