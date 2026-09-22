# e ノーゲーム・ノーライフ 319Ver.

machineName: e ノーゲーム・ノーライフ 319Ver.
manufacturer: 高尾 / TAKAO
releaseDate: 2025-11-04
modelType: ミドル / スマパチ / LT3.0+
gameType: 一種二種混合 / ST型（下位RUSH→LT）
modelNumber: eノーゲーム・ノーライフV1B
jackpotProbability: 通常時 1/319.6。右打ち中 約1/17.7（大当り1/319.6＋小当り1/18.8の合算）。
initialPayout: 10R 約1500個（払出）100%。初当りの60%でノゲノラッシュ、40%で通常へ。
rushEntryRate: 60%
rushContinuationRate: ノゲノラッシュ 10回＋残保留4個、TOTAL約56%（電サポ10回約43.9%＋残保留4個約20.6%の合算公表値）。
ltName: ノゲノラッシュHYPER
ltEntryRoute: 初当り60%でノゲノラッシュへ。ノゲノラッシュの電サポ10回内で右打ち大当りを引くとLT「ノゲノラッシュHYPER」へ。残保留での大当り後はノゲノラッシュへ突入するとの公式注記があるため、残保留当選を無条件LT直行として扱わない。
ltEntryRate: 通常遊技全体基準の総LT到達率/確率は直接公表値を確認できず、60%×約56%等から独自算出しない（UNVERIFIED_AFTER_RESEARCH）。
ltContinuationRate: ノゲノラッシュHYPER 32回＋残保留4個、TOTAL約88%（電サポ32回約84.2%＋残保留4個約20.6%の合算公表値）。
ltPayoutStructure: LT中大当りは10R 約1500個（払出）100%。電サポ32回内の大当り後はHYPER継続。残保留当選後は公式注記どおりノゲノラッシュへ移行する扱い。
totalPayoutDistribution: 特図1=10R約1500個＋ノゲノラッシュ60% / 10R約1500個＋通常40%。右打ち中=10R約1500個100%。
timeShortening: 0回 / 10回＋残保留4個 / LT 32回＋残保留4個。
cTimeOrSpecialSystems: LT3.0+。右打ち約1/17.7は大当りと小当りの合算。小当り時にV入賞しなかった場合は大当りが発生せず、電サポ終了の場合がある。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時（1/319.6）
   ↓ 初当り10R約1500個
   ├─ 40% → 通常時
   └─ 60% → ノゲノラッシュ（10回＋残保留4、TOTAL約56%）
                 ↓ 電サポ10回内で大当り
              LT「ノゲノラッシュHYPER」
                 ↓ 10R約1500個100%
              32回＋残保留4、TOTAL約88%
                 ↓ 電サポ32回内の大当りでHYPER継続
  ※残保留当選後は公式注記上ノゲノラッシュへ移行。
notes:
- 199Ver.（eノーゲーム・ノーライフV3C）とは別スペック。319Ver.は型式V1B、通常1/319.6、RUSH突入60%、初当りもALL1500個。
- 公式・業界・複数解析でLT搭載、下位約56%、LT約88%、右ALL1500個が一致。
- 「残保留での大当り後はノゲノラッシュへ突入」というメーカー公式注記を保持。単純に右打ち当選すべてがLT継続とは記録しない。
- 払出1500個と実獲得値を混同しない。
sources:
- https://www.takao.gr.jp/sp/product/2025/no-game-no-life.html
- https://news.p-world.co.jp/articles/31530/yugitsushin
- https://hisshobon.com/machineinfo/98752/
- https://1geki.jp/pachinko/e_ngnl_319/
- https://nana-press.com/kaiseki/machine/1035/31924/
- https://www.pachibee.jp/machines/index/125090016
- https://chonborista.com/pachinko/takao/245640/
retrievedAt: 2026-09-23
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields:
- 通常遊技全体基準の総LT到達率/確率（直接公表値未確認）
conflicts: []
