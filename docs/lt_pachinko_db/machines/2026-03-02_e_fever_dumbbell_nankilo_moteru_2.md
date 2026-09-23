# eフィーバーダンベル何キロ持てる？2

machineName: eフィーバーダンベル何キロ持てる？2
manufacturer: SANKYO
releaseDate: 2026-03-02
modelType: ライトミドル / スマパチ
gameType: 一種二種混合 / 普図ST / 直LT型
modelCode: eフィーバーダンベル何キロ持てる？2F
inspectionNumber: 5P1254
jackpotProbability: 通常時図柄揃い 約1/149.9 / 右打ち中図柄揃い 約1/97.7（特図2。普電ロング開放当選時、特図2実質1/1当選を経て大当り）
initialPayout: 300個（払出）
rushEntryRate: 約25%（初当りからLT「超マッスルRUSH」へ直行）
rushContinuationRate: 通常RUSH段階なし。RUSH=LT
ltName: 超マッスルRUSH
ltEntryRoute: 通常時図柄揃い → 約25%で超マッスルRUSHへ直行。残り約75%は300個獲得後通常へ。
ltEntryRate: 初当り時 約25%（公式・複数解析一致）
ltContinuationRate: 約73%（ST127回）
ltPayoutStructure: 特図2大当り3回1セット。払出合計4500個+α 約12.5% / 3300個 約37.5% / 2100個 約37.5% / 900個 約12.5%。各合計は特図2大当り1500個または300個×3回分。4500個獲得時は上乗せモード「ゴールデンタイム」へ入り、次回大当り濃厚。ゴールデンタイム中に再度4500個を獲得すればゴールデンタイムへ復帰する。
totalPayoutDistribution: 特図1: 300個+超マッスルRUSH 約25% / 300個+通常 約75%。特図2: 4500個+α 約12.5% / 3300個 約37.5% / 2100個 約37.5% / 900個 約12.5%。右出玉は3回分合計であり単一大当り出玉ではない。
timeShortening: 超マッスルRUSH ST127回。普図抽選STのため残保留なし。
cTimeOrSpecialSystems: ゴールデンタイム — 4500個（1500個×3）獲得時に突入する上乗せモード。次回大当り濃厚。LTそのものは超マッスルRUSH。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（図柄揃い 約1/149.9）
   ↓ 初当り 300個
   ├─ 約75% → 通常時
   └─ 約25% → LT「超マッスルRUSH」
                 ST127回 / 右図柄揃い約1/97.7 / 継続約73%
                 ↓ 大当り（特図2大当り3回1セット）
                 ├─ 900個 約12.5% → LT継続
                 ├─ 2100個 約37.5% → LT継続
                 ├─ 3300個 約37.5% → LT継続
                 └─ 4500個+α 約12.5% → ゴールデンタイム
                                            ↓ 次回大当り濃厚
                                            └─ 再度4500個ならゴールデンタイム復帰

notes:
- LT3.0プラス世代の直LT型。下位RUSHは存在せず、RUSH=LT「超マッスルRUSH」。
- SANKYO公式は図柄揃い約1/149.9、右約1/97.7、RUSH突入約25%、ST127回、継続約73%、右払出4500個以上/3300個/2100個/900個を明示。
- 右の900～4500個は1500個/300個の特図2大当り3回分の合計値。単発のラウンド出玉として扱わない。
- 4500個時の「ゴールデンタイム」はLT名称ではなくLT内の上乗せモード。必勝本では4500個振り分け12.5%、突入後は次回大当り濃厚と説明。
- 通常遊技全体基準のLT到達率は、初当り時約25%がそのまま直接公表されているため25%を採用。確率1/149.9との積から別の1/x値は独自算出しない。
- 2026年12月導入の77ver.はLT非搭載の別スペックであり混同しない。

sources:
- https://www.sankyo-fever.jp/products/machine_list/ply/spec/ — SANKYO公式スペック。図柄揃い、右確率、RUSH突入率、ST、継続率、出玉定義。取得日 2026-09-23。
- https://www.sankyo-fever.jp/products/machine_list/ply/ — SANKYO公式機種ページ。2026-03-02導入。取得日 2026-09-23。
- https://www.sankyo-fever.jp/collection/992/ — SANKYOオンライン博物館。LT搭載・ゴールデンタイム概要。取得日 2026-09-23。
- https://hisshobon.com/machineinfo/100790/ — パチ&スロ必勝本 基本スペック。LT、遊タイム非搭載、導入日、右出玉構造。取得日 2026-09-23。
- https://hisshobon.com/machineinfo/100792/ — パチ&スロ必勝本 LT解説。LT名称、初当り約25%直行、ST127回、残保留なし。取得日 2026-09-23。
- https://nana-press.com/kaiseki/machine/1105/ — なな徹。特図2 4500/3300/2100/900個の12.5/37.5/37.5/12.5%振り分けと3回分合計定義。取得日 2026-09-23。
- https://www.p-world.co.jp/machine/database/10407 — P-WORLD。特図1/特図2振り分け照合。取得日 2026-09-23。
- https://hazuse.com/machine/pachinko/5P1254/genre/103/ — HAZUSE。型式名、検定番号、導入日、メーカー照合。取得日 2026-09-23。

confidence: OFFICIAL（コア値） + ANALYSIS_HIGH（詳細振り分け/ゲームフロー照合）
missingFields: none for required core fields
conflicts: none identified
status: COMPLETE_CORE
retrievedAt: 2026-09-23
