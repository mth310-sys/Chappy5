# P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver.
formalModelName: P戦国乙女7H0YZ3
manufacturer: アムテックス（平和系）
releaseDate: 2025-09-08
modelType: ミドル / P機 / LLサイズSTART（デカヘソ） / LT搭載
gameType: 一種二種混合 / ST / c時短搭載 / 下位RUSH→CZ→LT型
jackpotProbability: 通常時図柄揃い 約1/299.2（大当り約1/300.6＋小当り約1/65536の合算） / 乙女RUSH中 図柄揃い＋天剣チャンス 約1/38.2 / 極乙女RUSH中図柄揃い 約1/44.9
initialPayout: 特図1 10R約1500個または2R約300個（払い出し）
rushEntryRate: （極）乙女RUSH突入 約53%（特図1: LT直行0.5%＋乙女RUSH52.5%）
rushContinuationRate: 乙女RUSH 約77%（ST51回＋残保留4個＋天剣チャンスからの継続を含むTOTAL）
ltName: 極乙女RUSH
ltEntryRoute: 特図1の0.5%で10R約1500個＋LTへ直行。主経路は乙女RUSH中にc時短約1/255.0を引いて時短10000回の「天剣チャンス」へ入り、次回大当り時の約52.5%（公表丸め約53%）でLT「極乙女RUSH」へ移行。
ltEntryRate: 初当り時LT直行 約0.5%。天剣チャンス中大当り時 約52.5%（10R50.0%＋3R2.5%、資料では約53%表記）。通常遊技全体を分母とする総LT到達率の直接公表値は確認できず、経路確率から独自算出しない。
ltContinuationRate: 極乙女RUSH 約91%（ST100回の引き戻し約89%＋残保留4個の引き戻し約10%を含むTOTAL。特図2に限る）
ltPayoutStructure: 極乙女RUSH中は10R約1500個＋LT継続 50% / 3R約450個＋LT継続 50%。残保留当選時は乙女RUSH中と同じ振り分け。
totalPayoutDistribution: |
  特図1: 10R約1500個＋極乙女RUSH 0.5% / 2R約300個＋乙女RUSH 52.5% / 2R約300個＋通常 47.0%。
  乙女RUSH中: 10R約1500個＋乙女RUSH 50% / 3R約450個＋乙女RUSH 50%。別抽選でc時短「天剣チャンス」約1/255.0。
  天剣チャンス中: 10R約1500個＋極乙女RUSH 50.0% / 3R約450個＋極乙女RUSH 2.5% / 3R約450個＋乙女RUSH 47.5%。
  極乙女RUSH中: 10R約1500個＋極乙女RUSH 50% / 3R約450個＋極乙女RUSH 50%。
timeShortening: 通常大当り後0回 / 乙女RUSH ST51回＋残保留4個 / 極乙女RUSH ST100回＋残保留4個 / 天剣チャンス c時短10000回（実質次回大当りまで）。
cTimeOrSpecialSystems: 乙女RUSH中はc時短「天剣チャンス」を約1/255.0で抽選。天剣チャンスは時短10000回で実質次回大当りまで継続し、その大当りの52.5%でLTへ、47.5%で下位乙女RUSHへ戻る。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。
gameFlow: |
  通常時（図柄揃い約1/299.2）
   ↓ 初当り
  0.5% → 10R約1500個 → LT「極乙女RUSH」直行
  52.5% → 2R約300個 → 下位「乙女RUSH」
  47.0% → 2R約300個 → 通常時
   ↓
  乙女RUSH（ST51回＋残保留4個、TOTAL継続約77%）
   ├ 大当り → 1500個50% / 450個50% → 乙女RUSH継続
   └ c時短約1/255 → 天剣チャンス（時短10000回、実質次回）
                         ↓ 次回大当り
                    52.5% → LT「極乙女RUSH」
                    47.5% → 乙女RUSHへ復帰
   ↓
  極乙女RUSH（ST100回＋残保留4個、TOTAL継続約91%）
   ↓ 大当り
  1500個50% / 450個50% → LT継続
   ↓ ST＋残保留で非当選
  通常時
notes: |
  2025年1月導入の「P戦国乙女7 終焉の関ヶ原」1/399.6版とは別スペック。型式P戦国乙女7H0YZ3を検定情報・業界資料で確認。
  通常時1/299.2は大当り約1/300.6と小当り約1/65536の合算。乙女RUSH中1/38.2は大当り約1/300.6、小当り約1/52.8、c時短約1/255.0の合算で、極乙女RUSH中1/44.9とは定義が異なる。
  乙女RUSH約77%はST51回単体ではなく、残保留と天剣チャンス由来の継続を含むTOTAL。極乙女RUSH約91%もST100回＋残保留のTOTAL。
  天剣チャンスLT発動率は業界記事/必勝本で「約53%」、詳細振り分けでは52.5%。丸め差として整合しCONFLICTにしない。
  出玉は払い出し値。

sources:
  - url: https://www.heiwanet.co.jp/products/pachinko/p-sg8ll/
    retrievedAt: 2026-09-22
    confidence: OFFICIAL
    note: メーカー公式機種ページ（公式URLは業界DBでも照合）。
  - url: https://yugi-nippon.com/pachinko-new-machine/post-72158/
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: 平和販売発表、製造元アムテックス、型式P戦国乙女7H0YZ3、基本確率、LT約91%。
  - url: https://amusement-japan.co.jp/article/detail/10004914/
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: 2025-09-08導入、RUSH約53%、c時短天剣チャンス、LT発動約53%、極乙女RUSH約91%。
  - url: https://www.pachibee.jp/machines/index/125080003
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 通常/乙女RUSH/極乙女RUSHの確率定義、時短回数、継続率の定義、LT搭載明記。
  - url: https://hisshobon.com/machineinfo/98516/
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 乙女RUSH51+4、天剣チャンス10000回、LT直行0.5%、天剣チャンス時約53%、LT100+4、出玉。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/066/kh01.php
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 型式、導入日、確率定義、下位約77%、LT約91%、残保留条件。
  - url: https://nana-press.com/kaiseki/machine/1011/31390/
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 特図1/乙女RUSH/天剣チャンス/極乙女RUSHの詳細振り分け照合。

confidence: INDUSTRY
missingFields:
  - 通常遊技全体基準の総LT到達率（直接公表値未確認）
conflicts: []
