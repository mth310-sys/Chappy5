# e ノーゲーム・ノーライフ 199Ver.

machineName: e ノーゲーム・ノーライフ 199Ver.
manufacturer: 高尾 / TAKAO
releaseDate: 2025-11-04
modelType: ライトミドル / スマパチ / LT3.0+
gameType: 一種二種混合 / ST型（下位RUSH→LT）
modelNumber: eノーゲーム・ノーライフV3C
jackpotProbability: 通常時 1/199.8。右打ち中 約1/17.7（大当り1/199.8＋小当り1/19.5の合算）。
initialPayout: 2R 約300個（払出）100%。初当りの50%でノゲノラッシュ、50%で通常へ。
rushEntryRate: 50%
rushContinuationRate: ノゲノラッシュ 10回＋残保留4個、TOTAL約56%（電サポ10回約43.9%＋残保留4個約20.6%の合算公表値）。
ltName: ノゲノラッシュHYPER
ltEntryRoute: 初当り50%でノゲノラッシュへ。ノゲノラッシュの電サポ10回内で右打ち大当りを引くとLT「ノゲノラッシュHYPER」へ。残保留での大当り後はノゲノラッシュへ突入するため、残保留当選を無条件LT直行として扱わない。
ltEntryRate: 通常遊技全体基準の総LT到達率/確率は、公式・業界・複数解析資料を再探索しても直接公表値を確認できず、50%×約56%等から独自算出しない（UNVERIFIED_AFTER_RESEARCH）。
ltContinuationRate: ノゲノラッシュHYPER 32回＋残保留4個、TOTAL約88%（電サポ32回約84.2%＋残保留4個約20.6%の合算公表値）。
ltPayoutStructure: LT中大当りは10R 約1500個（払出）100%。電サポ32回内の大当り後はHYPER継続。残保留当選後はノゲノラッシュへ移行する。
totalPayoutDistribution: 特図1=2R約300個＋ノゲノラッシュ50% / 2R約300個＋通常50%。ノゲノラッシュ中=10R約1500個＋LT32回100%。LT中=10R約1500個＋LT32回100%。ただし残保留当選後はノゲノラッシュへ移行。
timeShortening: 0回 / 10回＋残保留4個 / LT 32回＋残保留4個。
cTimeOrSpecialSystems: LT3.0+。右打ち約1/17.7は大当り1/199.8と小当り1/19.5の合算。小当り時にV入賞しなかった場合は大当りが発生せず、電サポ終了の場合がある。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。
gameFlow: |
  通常時（1/199.8）
   ↓ 初当り2R約300個
   ├─ 50% → 通常時
   └─ 50% → ノゲノラッシュ（10回＋残保留4、TOTAL約56%）
                 ↓ 電サポ10回内で大当り
              10R約1500個 → LT「ノゲノラッシュHYPER」
                 ↓
              32回＋残保留4、TOTAL約88%
                 ↓ 電サポ32回内の大当り
              10R約1500個 → HYPER継続
  ※残保留での大当り後はノゲノラッシュへ移行。
notes:
- 319Ver.（eノーゲーム・ノーライフV1B）とは別スペック。199Ver.は型式V3C、通常1/199.8、RUSH突入50%、初当りALL2R約300個。
- 高尾公式、遊技通信、G-net、HAZUSE、必勝本、1geki、なな徹、パチマガスロマガ等で主要値を照合。LT搭載、下位約56%、LT約88%、右ALL1500個で一致。
- G-netは特図1を2R(ST10回)50% / 2R(通常)50%、特図2ノゲノラッシュを10R(LT32回)100%、LT中を10R(LT32回)100%と明記。
- 「残保留での大当り後はノゲノラッシュへ突入」を保持し、TOTAL継続率に含まれる残保留当選を電サポ内当選と同一扱いしない。
- 払出300/1500個と実獲得値を混同しない。
sources:
- https://www.takao.gr.jp/sp/product/2025/no-game-no-life.html
- https://news.p-world.co.jp/articles/31527/yugitsushin
- https://g-net-ps.com/info/p0477/
- https://hazuse.com/hd/5p0829/
- https://p.hisshobon.jp/machine/4590/1/110965
- https://1geki.jp/pachinko/e_ngnl_199/
- https://nana-press.com/kaiseki/machine/1035/
- https://pachimaga.com/free/mach/maker-p/takao/064450.php
- https://www.p-world.co.jp/machine/database/10329
retrievedAt: 2026-09-23
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields:
- 通常遊技全体基準の総LT到達率/確率（十分な再探索後も直接公表値未確認）
conflicts: []
