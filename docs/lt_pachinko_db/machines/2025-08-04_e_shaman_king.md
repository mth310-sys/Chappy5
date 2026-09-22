# eシャーマンキング

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: eシャーマンキング
manufacturer: メーシー
modelNumber: eシャーマンキングMH
releaseDate: 2025-08-04
modelType: スマパチ / ミドル / LT3.0 PLUS
gameType: 一種二種混合 / LT直結ST

jackpotProbability:
- 通常時大当り: 1/349.9
- 起きパチョモード中シャーマンバトル出現率: 1/348.6
- LT「シャーマンファイト」中シャーマンバトル出現率: 1/77.4

initialPayout:
- 10R: 約1500個（払い出し。特定初当りは1500個+α）
- 9R: 約450個（払い出し）

rushEntryRate: RUSH=LT。LT「シャーマンファイト」TOTAL突入率 約53%（時短「起きパチョモード」経由を含む）
rushContinuationRate: RUSH=LTのため通常RUSHは独立して存在しない

ltName: シャーマンファイト
ltEntryRoute: 通常時大当りから直行、またはチャレンジBONUS失敗後の時短20回「起きパチョモード」でシャーマンバトル発展。恐山ル・ヴォワールBONUS/ハオBONUS/シャーマンキングBONUS、およびチャレンジBONUS演出成功後はLTへ。
ltEntryRate:
- 通常遊技基準LT発動確率: 1/662.9（解析/業界資料の直接値）
- TOTAL突入率: 約53%（起きパチョモード経由込み）
ltContinuationRate: 約83%（特図2大当り時、ST130回のシャーマンバトル発展率と「連戦」の合算）

ltPayoutStructure:
- シャーマンバトル勝利時: 約6000個 1.5% / 約4500個 12.2% / 約3000個 36.9% / 約1500個 49.4%
- 約6000個 = 約1500個×4回分。4500/3000も複数回大当りの合計払い出しとして扱う。
- シャーマンバトル敗北時: 払い出しなし、ST130回へ復帰しLT継続。
- 勝利後の一部で「連戦」へ移行し、即バトルの追加チャンスを得る。

totalPayoutDistribution:
- 特図1: 約1500個+α + LT 1.5% / 約450個 + LT 48.5% / 約450個 + 時短20回 50%
- LT中シャーマンバトル勝利時: 約6000個 1.5% / 約4500個 12.2% / 約3000個 36.9% / 約1500個 49.4%、いずれもLT継続
- LT中シャーマンバトル敗北時: 出玉なし + LT継続 100%

timeShortening:
- 起きパチョモード: 時短20回、シャーマンバトル出現率1/348.6、引き戻し期待度約5.6%
- シャーマンファイト: ST130回（資料上10500回の電サポ状態もあり）

cTimeOrSpecialSystems: LT3.0 PLUS。「連戦」によりバトル勝利後の一部で即バトルへ接続。シャーマンバトル勝率は約80%（電チュー4個入賞条件）。
ceilingOrSupport: 遊タイム非搭載 / コンプリート機能搭載

gameFlow: |
  通常時 1/349.9
   ├─ 1.5%: 約1500個+α → LT「シャーマンファイト」
   ├─ 48.5%: 約450個 → LT「シャーマンファイト」
   └─ 50%: 約450個 → 起きパチョモード（時短20回）
       ├─ シャーマンバトル発展: LT「シャーマンファイト」
       └─ 非発展: 通常時

  LT「シャーマンファイト」
   └─ ST130回 / シャーマンバトル出現率1/77.4 / TOTAL継続約83%
       ├─ バトル勝利（勝率約80%）: 1500〜6000個 → LT継続、一部「連戦」
       └─ バトル敗北: 出玉なし → ST130回へ復帰
       ST終了 → 通常時

notes:
- RUSHとLTは同一状態「シャーマンファイト」。下位RUSHを別建てしない。
- LT突入率約53%は起きパチョモード経由込み。通常特図1のLT直行振り分けは1.5%+48.5%=50%であり、53%と分母定義が異なる。
- LT発動確率1/662.9は公開資料の直接値として保存し、1/349.9×経路から独自算出していない。
- 継続約83%は単純なST当選率ではなく、特図2大当り時・ST130回のシャーマンバトル発展率・連戦を含むTOTAL値。
- 同日導入の「eシャーマンキング でっけぇえなver.」は型式eシャーマンキングLBで、下位シャーマンファイト60回→LT超シャーマンファイトという別仕様。混同しない。

sources:
- https://universal-777.com/product/pachinko/shamanking_m/ — メーカー公式機種ページ（HAZUSE公式リンク経由で型式対応確認）。
- https://g-net-ps.com/info/p0455/ — G-net業界向け資料。型式eシャーマンキングMH、2025-08-04、1/349.9、LT3.0 PLUS、LT突入確率1/662.9。
- https://hazuse.com/machine/pachinko/4P1905/ — HAZUSE。型式/検定番号/導入日、1/349.9、TOTAL突入約53%、ST130、約83%、時短20、出玉定義を照合。
- https://1geki.jp/pachinko/e_shamanking/ — 一撃。導入日/型式、LT突入1/662.9、約53%、ST130、約83%、1500/450払い出しを照合。
- https://chonborista.com/pachinko/universal/237826/ — 解析。特図1 1.5/48.5/50、LT勝利時6000/4500/3000/1500振り分け、敗北時ST復帰を照合。
- https://www.p-world.co.jp/machine/database/10285 — P-WORLD。BONUS別LT経路、起きパチョモード、右打ち複数回大当り構造を照合。

confidence:
- LT搭載/名称/型式/導入日/基本確率/LT突入率/ST/継続率/主要振り分け: INDUSTRY + ANALYSIS_HIGH（複数照合）
- LT発動確率1/662.9: INDUSTRY + ANALYSIS_HIGH

missingFields: none
conflicts: none
