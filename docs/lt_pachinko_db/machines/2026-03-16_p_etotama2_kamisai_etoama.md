# Pえとたま2 神祭 干支甘

status: COMPLETE_CORE
retrievedAt: 2026-09-24

machineName: Pえとたま2 神祭 干支甘
manufacturer: メーシー（ユニバーサルエンターテインメント）
formalModel: Pえとたま2SE
releaseDate: 2026-03-16
modelType: 甘デジ / P機
gameType: 二種タイプ / 時短突破型 / ラッキートリガー
jackpotProbability: 通常時 1/99.90、右打ち中 1/63.44
initialPayout: 3R 210個（払出）
rushEntryRate: 初当り70%で「えとたまチャンス」へ。えとたまチャンスのTOTAL突破率 約50%（時短40回+残保留4個）
rushContinuationRate: 「えとたまRUSH祭」TOTAL約75%（時短83回+残保留4個）
ltName: 超えとたまRUSH祭
ltEntryRoute: えとたまRUSH祭中の大当り時10%でLT発動。解析資料では10R 910個の内訳がLT10% / 通常RUSH継続60%、3R 210個+通常RUSH30%。
ltEntryRate: RUSH中大当り時10%。通常初当り基準の総LT到達率は直接公表値を確認できないため推測しない。
ltContinuationRate: TOTAL約93%（時短160回+残保留4個）
ltPayoutStructure: LT中 10R 910個 70% / 3R 210個 30%（払出）。いずれも時短160回+残保留4個。ただし特図2残保留での大当りは「えとたまRUSH祭」へ移行する旨の注記あり。
totalPayoutDistribution: 特図1=3R 210個+えとたまチャンス70% / 3R 210個+通常30%。えとたまチャンス中=10R 910個70% / 3R 210個30%、大当り後はえとたまRUSH祭。えとたまRUSH祭中=10R 910個+LT10% / 10R 910個+RUSH60% / 3R 210個+RUSH30%。LT中=10R 910個70% / 3R 210個30%。
timeShortening: 0 / 40 / 83 / 160回。各RUSH継続率は残保留4個込みのTOTAL値。
cTimeOrSpecialSystems: なし（確認資料上）
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時
   ↓ 初当り 1/99.90
  3R 210個
   ├─ 30% → 通常時
   └─ 70% → えとたまチャンス（時短40回+残保留4個、TOTAL突破約50%）
                 ↓ 大当り
              えとたまRUSH祭（時短83回+残保留4個、TOTAL継続約75%）
                 ├─ 大当り時10% → LT「超えとたまRUSH祭」
                 └─ その他 → えとたまRUSH祭継続
                                      ↓
                    超えとたまRUSH祭（時短160回+残保留4個、TOTAL継続約93%）
                                      ↓ ST/時短区間スルー
                    残保留抽選 → 非当選なら通常時
                    ※特図2残保留で当選した場合はえとたまRUSH祭へ

notes:
- LT搭載は業界発表、P-WORLD、CS-plaza、一撃、必勝本等で一致。
- 「LT発動時期待出玉 約11,500個」はLT発動までの平均出玉とLT期待値の払出合計であり、単一大当り出玉ではない。
- 2024-12-02導入の兄弟機「Pえとたま2 神祭」（型式 Pえとたま2MY、1/199.80、LT約90%）とは別スペック。混同しない。
- 「えとたまRUSH祭中大当り時10%」と「910個大当り時の7回に1回」は分母表現が異なるが、910個比率70%×その内約1/7 ≒ 全大当りの10%として整合するためCONFLICT扱いしない。

sources:
- https://news.p-world.co.jp/articles/32497/yugitsushin — 遊技通信。メーカー発表、型式Pえとたま2SE、1/99.90→1/63.44、70%/約50%/約75%/約93%、RUSH中約10%でLT。retrieved 2026-09-24
- https://news.p-world.co.jp/articles/32471/greenbelt — グリーンべると。LT「超えとたまRUSH祭」、約93%、LT発動時期待出玉約11,500個、LT中10R比率70%。retrieved 2026-09-24
- https://www.p-world.co.jp/machine/database/10404 — P-WORLD。LT搭載、初当り70%、各TOTAL値、払出210/910個、LT経路。retrieved 2026-09-24
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/macy_pachi/053/kh02.php — CS-plaza。詳細スペック、時短40/83/160、遊タイムなし、LT搭載。retrieved 2026-09-24
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/macy_pachi/053/kh04.php — CS-plaza。ゲームフロー、RUSH/LT出玉構成、残保留時の移行。retrieved 2026-09-24
- https://hisshobon.com/machineinfo/100619/ — 必勝本。LT発動契機、終了条件、残保留時の扱い。retrieved 2026-09-24
- https://1geki.jp/pachinko/p_etotama2_etoama/ — 一撃。導入日2026-03-16、型式Pえとたま2SE、基本スペック。retrieved 2026-09-24
- https://pachimaga.com/free/mach/maker-p/macy/064769.php — パチマガスロマガFREE。RUSH/LT振り分けと残保留時の扱い。retrieved 2026-09-24

confidence: INDUSTRY / ANALYSIS_HIGH cross-check
missingFields: 通常初当り基準の総LT到達率（直接公表値未確認）
conflicts: none
