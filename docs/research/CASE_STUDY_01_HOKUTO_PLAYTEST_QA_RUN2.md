# Case Study 01 — スマスロ北斗の拳 / Playtest & QA Deep Dive Run 2

> Status: `DEEP_DIVE_RUN_2_COMPLETE`
> Director: Playtest & QA Director
> Date: 2026-08-28
> Scope: Chappy5 #1 / Stage 1 reality research only
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Original concepts: `SIGNAL//3 / FORGE//HEART / VAULT://3 = PROVISIONAL_FROZEN`

## 0. Run 2の目的

Run 1で得た `ATTENTION COMPRESSION / MULTI-SCALE EXPECTATION / RELIEF != REWARD / ENTRY IMPACT != SUSTAIN QUALITY / UPPER ABSENCE TEST / POST-END CONTRACT / RETURN ACCEPTANCE` を、より長い実戦資料と高設定側の不都合な展開へ当てる。

特に「高設定なら退屈しない」「上位へ入れば成功」「編集動画で面白く見えるなら長時間品質も高い」という誤認を避ける。

Evidence class:
- `SOURCED FACT`: 解析・公式説明。
- `FIELD REPORT`: 特定実戦で実際に起きたこと。普遍化しない。
- `VIDEO METADATA OBSERVATION`: 長尺動画の存在・尺・構成。今回の環境では全編をフレーム/音声単位で精密視聴したとは扱わない。
- `INTERPRETATION`: QA推論。
- `REUSABLE QA PRINCIPLE`: Chappy5で再利用する評価原則。
- `UNRESOLVED`: 実機/ノーカット直接観測が必要。

---

## 1. 追加資料

### 攻略・解析
1. 必勝本「演出モードについて」
   - https://p.hisshobon.jp/machine/4047/1/94295
   - 初代モードでは演出頻度が下がり、BB小役パートの前兆/宿命バトル可視化も抑えられる。

2. なな徹「モードの特徴・移行抽選」
   - https://nana-press.com/kaiseki/machine/514/13777/
   - 地獄/通常/天国/本前兆、役成立時のモード移行、第3停止離しでの状態更新。

3. ハズセ「スマスロ北斗の拳」
   - https://hazuse.com/machine/pachislot/2S1502/
   - 初代モードは通常モードより演出頻度が大幅に下がる。

### 長尺/実戦資料
4. がんばるぴえんちゃん「スマスロ北斗の拳 生放送」
   - 公開日 2025-07-23、動画長 8時間17分18秒。
   - 長時間連続遊技が公開資料として存在することを確認。
   - https://www.tubetre.com/videos/view/kgaWc8fJ24c

5. ニコナナ「来い、無想転生! 金トロフィー台」
   - https://www.niconana.net/movie/%E3%80%90%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E5%8C%97%E6%96%97%E3%81%AE%E6%8B%B3%E3%80%91%E6%9D%A5%E3%81%84%E3%80%81%E7%84%A1%E6%83%B3%E8%BB%A2%E7%94%9F-%E3%82%AD%E3%83%AA%E3%83%B3%E6%9F%84%E3%82%82/
   - 金トロフィー台でも1200G級ハマリと大量投資、BB低連が発生したField report。

6. ニコナナ「高設定! リーチ目役と金トロフィー」
   - https://www.niconana.net/movie/%E3%80%90%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E5%8C%97%E6%96%97%E3%81%AE%E6%8B%B3%E3%80%91%E9%AB%98%E8%A8%AD%E5%AE%9A-%E8%87%AA%E5%8A%9B%E6%98%87%E5%A4%A9%E7%9B%AE%E6%8C%87%E3%81%9B%E3%82%8B%E8%A8%AD/
   - 高設定側でも通常→BB→通常を反復する編集実戦資料。

7. 銀次郎のスロビジチャンネル「リセット北斗を0Gから100台」前後編
   - 2025-08-10 / 2025-08-14公開、46:43 / 44:30。
   - 多数の短い独立試行をまとめた資料。個別1台の長時間疲労とは別用途。
   - https://yutura.net/channel/34790/video/albvuXjgiKw/
   - https://yutura.net/channel/34790/video/nwkB1qmkU5U/

---

## 2. 高設定でも「長い通常」は消えない

### FIELD REPORT
金トロフィー確認台の実戦で、1200G級のハマリと大量投資が発生した記録がある。設定示唆が強い台でも、個々の初当たり間隔が短く保証されるわけではない。

### INTERPRETATION
高設定は「通常時をスキップできる権利」ではない。高設定でもプレイヤーはBET→レバー→3STOP→通常結果を大量反復する。

したがって長時間品質を評価する際、設定6や成功展開だけを試すのは不十分。

### REUSABLE QA PRINCIPLE — `GOOD STATE DOES NOT CANCEL BAD MINUTES`
機械割・設定・期待値が良くても、その瞬間の500G/1000Gの身体体験が悪ければQA上は欠点として残す。

Chappy5では高設定想定でも以下を必須試験にする。
- 500G無当たり。
- 強契機複数回不発。
- 低連BBが連続。
- 上位状態なし。

---

## 3. 500Gハマリで支えるのは「派手な救済」ではなく観測契約

### SOURCED FACT
通常時には地獄/通常/天国/本前兆があり、役成立によるモード移行が存在する。本前兆移行後は32G以内にBBへ到達する。状態更新は第3停止離しで行われる。

### INTERPRETATION
500G級ハマリで重要なのは、500Gを一つの長いイベントにすることではない。

通常役は速く捨てる一方、レア役だけ
`役認識 → 状態再解釈 → 数G観測 → 当否/次状態判断`
へ注意を圧縮できる。

つまり長いハマリを支える最低条件は「永久に何か起こりそう」ではなく、**注意を上げる理由と、注意を下げてよい理由の両方が真実であること**。

### REUSABLE QA PRINCIPLE — `ATTENTION RELEASE`
強契機後に観測窓が終わったなら、プレイヤーが通常速度へ戻ってよいことを明確にする。

「ずっと前兆かもしれない」「ずっと何か溜まっているかもしれない」を残し続ける設計は、期待ではなく認知疲労になる。

---

## 4. 初代モードは「情報を減らしても成立するか」の実機テストになる

### SOURCED FACT
初代モードでは演出頻度が下がり、通常モードの新規演出が減る。BB小役パートでは前兆/宿命バトルを画面上で追えなくなるなど、可視情報も減る。

### INTERPRETATION
内部ゲームを変えずにPresentation Densityを落としても、レア役・モード・リール・BBの核が残る。

これは「演出を増やしたから遊べる」のではなく、演出を削ってもゲーム骨格が残ることの強い証拠になる。

### REUSABLE QA PRINCIPLE — `HALF-PRESENTATION TEST`
将来Chappy5候補ではVisual/Audioイベントを意図的に約半分へ落とした仮想条件を作り、以下を問う。
- 何を狙うか残るか。
- 何を待つか残るか。
- 出目/状態の価値が残るか。
- 普通の100Gを回す理由が残るか。

NOならPresentationがゲームを隠している可能性が高い。

---

## 5. 編集実戦と8時間生放送は同じ証拠ではない

### VIDEO METADATA OBSERVATION
北斗には30〜50分程度へ編集された実戦動画が多数ある一方、8時間17分級の生放送記録も存在する。

### INTERPRETATION
編集動画は見せ場の因果・プレイヤーが何を語るかを見るには有用だが、通常時の時間割合、Cue反復数、手/目/耳の疲労を判断するには弱い。

8時間級の生放送はその逆で、長時間反復を観測できる可能性が高いが、今回の取得環境では全編を直接フレーム/音声計測できていない。

### REUSABLE QA PRINCIPLE — `HIGHLIGHT EVIDENCE != DURATION EVIDENCE`
QA資料は最低でも2群に分ける。
- `Highlight evidence`: 当たり方、演出因果、プレイヤー反応。
- `Duration evidence`: 通常の長さ、反復数、疲労、上位不在時間。

片方で片方を代用しない。

---

## 6. 上位なし時間は失敗ではなく製品の大部分になり得る

### FIELD REPORT / SOURCED FACT
無想転生は強力な上位体験だが、高設定実戦でも必ず到達するわけではない。また金トロフィー台で大ハマリ・低連を経験する実戦がある。

### INTERPRETATION
上位状態を宣伝上の中心にしても、個人の3時間では一度も触れない可能性がある。

よってPlaytest & QAは「上位が面白いか」の前に、**上位が存在しない時間だけで台が成立するか**を判定する必要がある。

### REUSABLE QA PRINCIPLE — `UPPER ABSENCE IS A PRIMARY TEST, NOT A CORNER CASE`
上位非到達3時間を例外試験にしない。通常機能の主試験として扱う。

PASS条件:
- 普通の初当たりをまた取りたい。
- 低連でも当たりを引いた価値がゼロにならない。
- 上位示唆が出ない時間を「無意味」と感じる構造になっていない。

---

## 7. 低連反復は「当たり品質」の本試験

### FIELD REPORT
北斗では高設定示唆台でもBBが十分連チャンしない展開が実戦で発生している。

### INTERPRETATION
長い通常の後にBBへ入り、1〜2セット程度で終了する展開は、当たりの入口演出が強いだけでは耐えられない。

プレイヤーが受け取る価値は少なくとも
`当選発見 / 図柄を揃える参加 / 小役パート / バトル判定 / 継続失敗の納得 / 終了後の次判断`
へ分散している必要がある。

### REUSABLE QA PRINCIPLE — `LOW-ROLL REWARD TEST`
「平均連」「上位突入」「大成功」を封印し、下位25%程度の報酬展開を連続させても当たりを引く意味が残るかを見る。

ここで不満が出るのは許容するが、「当たりそのものが外れに見える」はFAIL。

---

## 8. 多数試行資料と1台長時間資料は役割が違う

### VIDEO METADATA OBSERVATION
0Gから100台を打つ企画は、短い独立試行を大量に比較する資料として存在する。

### INTERPRETATION
多数台資料は「どれほど展開差があるか」「初当たり/低連/終了後がどの程度ばらつくか」を見るには有用。しかし同じ身体が3時間同一台を打った疲労は測れない。

### REUSABLE QA PRINCIPLE — `BREADTH SAMPLE / DEPTH SAMPLE`
QA evidenceを分ける。
- `Breadth sample`: 多数試行で分散・例外・低ロールを見る。
- `Depth sample`: 同一台長時間で身体疲労・学習・飽きを見る。

両方が必要。

---

## 9. Run 2で更新する時間軸QA

将来の実機候補は最低限、次を一続きのプレイヤー履歴として評価する。

`初見5分 → 通常100G → 強契機不発 → さらに通常400G → 低連初当たり → 通常復帰 → 再度低連 → 3時間上位なし → 終了判断`

別セッションで

`通常 → 普通BB → 長連 → 上位 → 長連終了 → 通常100Gへ復帰`

を評価する。

この2本を混ぜない。成功体験が前半の欠点を隠すのを防ぐ。

---

## 10. 北斗Case Study Playtest & QA Run 2 verdict

### Confirmed / strengthened
- 高設定でも深いハマリと低連は消えない。
- 長時間品質は設定や機械割では代替できない。
- 演出密度を落としてもゲーム骨格が成立する実例がある。
- 上位非到達時間は主試験として扱うべき。
- 編集動画とノーカット長尺は証拠能力が違う。
- 低連を連続させた時に普通の当たりの価値が残るかが重要。

### New reusable QA principles
- `GOOD STATE DOES NOT CANCEL BAD MINUTES`
- `ATTENTION RELEASE`
- `HALF-PRESENTATION TEST`
- `HIGHLIGHT EVIDENCE != DURATION EVIDENCE`
- `UPPER ABSENCE IS A PRIMARY TEST`
- `LOW-ROLL REWARD TEST`
- `BREADTH SAMPLE / DEPTH SAMPLE`

### UNRESOLVED retained
今回の環境では以下を「実測済み」にしない。
- 設定1ノーカット3時間の通常/前兆/BB/上位の実時間割合。
- 8時間級配信の全Audio/Visual event count。
- 初代モードON/OFF同一条件100GのCue数比較。
- 実機30分中押しでの眼精/指/手首疲労。
- BB単発/2連を複数回連続して受けた人間の再挑戦意欲。
- 実ホール騒音下でのCue識別。

北斗Case Studyはこれで固定5 Director全員が少なくともRun 2相当の専門具体化へ到達したと扱える。ただしReality Baseline全体は完成ではない。

次はMachine Directorが共有状態を確認したうえで、Human Directiveに従い北斗と異なる系統のCase Study 02へ正式移行する。Playtest & QAからは、通常時そのもの・リール読解・技術介入が商品になるノーマル/リーチ目系を優先する。

Human Gate: `HUMAN_GATE_1_NOT_READY`
