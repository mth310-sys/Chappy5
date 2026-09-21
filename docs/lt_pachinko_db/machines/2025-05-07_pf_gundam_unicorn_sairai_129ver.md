# PF機動戦士ガンダムユニコーン再来 129ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: PF機動戦士ガンダムユニコーン再来 129ver.
formalModelName: Pフィーバー機動戦士ガンダムユニコーン2Y
manufacturer: SANKYO
releaseDate: 2025-05-07
modelType: ライト / 129帯
gameType: 1種2種混合・ST（時短）型 / 下位RUSH→LT
jackpotProbability:
- 通常時図柄揃い: 約1/129.8
- 右打ち中: 約1/40.6（特図2、大当り+小当り合算）
initialPayout:
- 3R 約300個（払出）100%
rushEntryRate: 約51%
rushContinuationRate:
- 覚醒HYPER: 約80% TOTAL
- 内訳定義: 時短60回の継続率約78% + 残保留4個の継続率約9%を加味したTOTAL
ltName: 超覚醒HYPER
ltEntryRoute:
- 通常初当りの約51%で覚醒HYPERへ。
- 覚醒HYPER中の大当りの約4%（7R×2、約1400個）でLT発動し、超覚醒HYPERへ。
- ST最終変動+残保留での大当りは覚醒HYPER側の振り分けとなる。
ltEntryRate:
- 覚醒HYPER中大当り時: 約4%
- 通常初当り基準の総LT到達率: UNVERIFIED_AFTER_RESEARCH（公開直接値を確認できず、経路値から独自算出しない）
ltContinuationRate:
- 超覚醒HYPER: 約93% TOTAL
- 内訳定義: 時短100回の継続率約92% + 残保留4個の継続率約9%を加味したTOTAL
ltPayoutStructure:
- LT突入契機: 7R×2 約1400個（払出）約4%
- 超覚醒HYPER中: 7R 約700個（払出）100%、超覚醒HYPER継続
totalPayoutDistribution:
- 通常時: 3R 約300個 + 覚醒HYPER 約51% / 3R 約300個 + 通常 約49%
- 覚醒HYPER中: 7R×2 約1400個 + 超覚醒HYPER 約4% / 7R 約700個 + 覚醒HYPER 約96%
- 超覚醒HYPER中: 7R 約700個 + 超覚醒HYPER 100%
timeShortening:
- 覚醒HYPER: 時短60回 + 残保留4個
- 超覚醒HYPER: 時短100回 + 残保留4個
cTimeOrSpecialSystems: none confirmed
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時（図柄揃い 約1/129.8）
   ↓ 初当り 3R約300個
   ├─ 約49% → 通常へ
   └─ 約51% → 覚醒HYPER（60回+残保留4、TOTAL約80%）
                  ↓ 右打ち大当り
                  ├─ 約96% → 7R約700個 → 覚醒HYPER継続
                  └─ 約4% → 7R×2 約1400個 → LT発動
                                             ↓
                                      超覚醒HYPER
                                      （100回+残保留4、TOTAL約93%）
                                             ↓
                                      大当りはALL 7R約700個
notes:
- 業界一次記事（遊技通信/P-WORLD）が型式名、1/129.8、右約1/40.6、覚醒HYPER約51%/約80%、LT超覚醒HYPER約93%、2025-05-07導入を明記。
- P-WORLD、必勝本、ちょんぼりすた等で主要数値が一致。
- 右約1/40.6は特図2の大当り+小当り合算値であり、通常時1/129.8と定義を混同しない。
- LT突入時約1400個は7R×2。通常RUSH中の約4%でLTへ移行。
- ST最終変動+残保留は覚醒HYPER側振り分けという例外を保持。
- 319帯の「再来」および後発別スペックと混同しない。

sources:
- url: https://news.p-world.co.jp/articles/30264/yugitsushin
  role: 業界一次 / 発表・型式・導入日・基本スペック・LT継続率
  retrievedAt: 2026-09-22
- url: https://www.p-world.co.jp/machine/database/10229
  role: 機種DB / 基本スペック・RUSH/LT定義
  retrievedAt: 2026-09-22
- url: https://hisshobon.com/machineinfo/97446/
  role: 解析 / 基本スペック・LT突入時1400個・ST最終変動/残保留の扱い
  retrievedAt: 2026-09-22
- url: https://chonborista.com/pachinko/sankyo/235204/
  role: 解析 / 詳細振り分け照合
  retrievedAt: 2026-09-22
- url: https://1geki.jp/pachinko/p_gundam_uc2_129/52/
  role: 解析 / LT詳細・期待出玉定義補助
  retrievedAt: 2026-09-22

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率（直接公表値未確認）
conflicts: none
