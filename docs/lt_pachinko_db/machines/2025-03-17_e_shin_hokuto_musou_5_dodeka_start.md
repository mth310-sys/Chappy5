# e真・北斗無双 第5章 ドデカSTART

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: e真・北斗無双 第5章 ドデカSTART
modelName: e真北斗無双5SFEE
manufacturer: サミー
releaseDate: 2025-03-17
modelType: スマパチ / ミドル
gameType: 一種二種混合 / ST / ラッキートリガー
jackpotProbability: 通常時 約1/319.7 / 右打ち実質 約1/99.8（大当り約1/319.7と小当り約1/145.0の合算）
initialPayout: 特図1 0.1% 約3000個（約1500個×2）+LT / 50.0% 約600個+真・幻闘RUSH / 49.9% 約600個+通常。払出表記。
rushEntryRate: 50.1%（LT直行0.1%を含む。真・幻闘RUSH単独50.0%）
rushContinuationRate: 真・幻闘RUSH 約50%
ltName: 超・幻闘RUSH
ltEntryRoute: 通常初当りの約0.1%（究極連結3000BONUS）から直行、または真・幻闘RUSH（ST65回）中に大当りするとLT発動して超・幻闘RUSHへ。残保留での大当りは真・幻闘RUSHへ移行するため区別。
ltEntryRate: 通常時LT直行は約0.1%。通常初当り基準の総LT到達率について直接公表値は今回確認できず、経路から独自算出しない。
ltContinuationRate: 超・幻闘RUSH 約84%
ltPayoutStructure: 特図2大当りは100% 約1500個（払出）+超・幻闘RUSH。ただし残保留大当り時は真・幻闘RUSHへ。
totalPayoutDistribution: 特図1=約3000個+LT 0.1% / 約600個+真・幻闘RUSH 50.0% / 約600個+通常49.9%。特図2=約1500個+超・幻闘RUSH100%。3000個は1500個×2回。
timeShortening: 真・幻闘RUSH ST65回 / 超・幻闘RUSH ST175回
cTimeOrSpecialSystems: サミー初のドデカSTART。右打ち実質確率約1/99.8は大当りと小当りの合算値。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（約1/319.7）
   ↓ 初当り
   ├─ 0.1% 約3000個 → LT「超・幻闘RUSH」ST175回
   ├─ 50.0% 約600個 → 「真・幻闘RUSH」ST65回（継続約50%）
   │                    ↓ ST中大当り
   │                 LT発動 → 「超・幻闘RUSH」ST175回（継続約84%）
   └─ 49.9% 約600個 → 通常へ
  超・幻闘RUSH中の大当りはALL約1500個でLT継続。
  ※残保留大当りは真・幻闘RUSHへ移行。

notes:
- 業界一次記事（遊技通信）は型式名、大当り約1/319.7→約1/99.8、RUSH突入50.1%、下位約50%、LT約84%、ST65→175、右打ちALL1500個を掲載。
- P-WORLD、必勝本、1geki、HAZUSEで主要値を横断照合。
- 一部資料の「RUSH突入50%」は丸め/下位RUSH単独の表記。詳細振り分け50.0%+LT直行0.1%=TOTAL50.1%と整合するためCONFLICT扱いしない。
- 右打ち約1/99.8を通常大当り確率と混同しない。

sources:
- https://news.p-world.co.jp/articles/30134/yugitsushin — 遊技通信 / 業界一次記事 / 2025-02-03 / 型式・基本確率・RUSH/LT性能・導入時期
- https://www.p-world.co.jp/machine/database/10218 — P-WORLD / LT搭載・初当り振り分け・RUSH/LT構造
- https://hisshobon.com/machineinfo/96513/ — パチ&スロ必勝本 / 特図1・特図2詳細振り分け・残保留注記
- https://1geki.jp/pachinko/e_sinhmusou5ds/39/ — 一撃 / 型式構造・右打ち合算定義・払出/実獲得・ST回数
- https://1geki.jp/pachinko/e_sinhmusou5ds/51/ — 一撃 / 真・幻闘RUSH
- https://1geki.jp/pachinko/e_sinhmusou5ds/53/ — 一撃 / 超・幻闘RUSH
- https://hazuse.com/hd/410853-2/ — HAZUSE / 型式名・LT搭載・導入日・メーカー公式URL
- https://pachiseven.jp/machines/7122/cutout/16 — パチ7 / 遊タイム非搭載

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率の直接公表値は未確認。独自算出しない。
conflicts: none
