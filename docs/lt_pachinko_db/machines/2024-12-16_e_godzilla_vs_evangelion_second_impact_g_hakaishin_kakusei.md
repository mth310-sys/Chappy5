# e ゴジラ対エヴァンゲリオン セカンドインパクト G 破壊神覚醒

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: e ゴジラ対エヴァンゲリオン セカンドインパクト G 破壊神覚醒
formalModel: eゴジラ対エヴァンゲリオン2 bA
manufacturer: ビスティ
releaseDate: 2024-12-16
modelType: スマパチ / LT搭載

gameType: 一種二種混合・転落抽選型。LT発動後はシン・バトルモードを転落小当りまで継続。
jackpotProbability: 通常時図柄揃い 約1/499.9 / ペンペンチャージ 約1/234.4 / 右打ち図柄揃い（バトル勝利）約1/32.9 / 転落小当り（バトル敗北）約1/154.8
initialPayout: 図柄揃い10R 約1500個。LT突入側の一部は10R×2＝約3000個。ペンペンチャージは約192個（払出）。
rushEntryRate: シン・バトルモード突入 約52.6%（ペンペンチャージ経由を含む公表値。資料によって約53%表記）
rushContinuationRate: 通常RUSHを別段階として持たず、シン・バトルモード自体がLT。継続率 約85%。
ltName: シン・バトルモード
ltEntryRoute: 初当りから直接LT。通常時図柄揃いのLT側振り分け（約3000個）またはペンペンチャージのLT振り分けからシン・バトルモードへ。
ltEntryRate: 約52.6%（通常時のシン・バトルモード突入率。ペンペンチャージ経由を含む）
ltContinuationRate: 約85%
ltPayoutStructure: 特図2は10R約1500個が基本。約15%は10R×2＝約3000個、約85%は10R約1500個。RUSH中の約3000個表現は保留連/実質次回大当りを含む資料表記に注意。
totalPayoutDistribution: 特図1は解析資料で10R×2→LT 約52%、チャージ→LT 約1%、10R→通常 約47%の整理。別資料では図柄揃い内訳を10R×2 約51% / 2R 約1% / 10R通常 約48%と記載しており、分母定義が異なるため単純競合とは扱わない。特図2は10R×2 約15% / 10R 約85%。
timeShortening: シン・バトルモードは時短10000回相当、転落小当り約1/154.8当選で終了。残保留4個あり。
cTimeOrSpecialSystems: ペンペンチャージ 約1/234.4。LT突入に寄与する小当り/チャージ系入口。
ceilingOrSupport: 遊タイム非搭載。

gameFlow: |
  通常時
   ├─ 図柄揃い 約1/499.9
   │   ├─ LT側：約3000個 → シン・バトルモード（LT）
   │   └─ 非LT側：約1500個 → 通常時
   └─ ペンペンチャージ 約1/234.4
       ├─ 一部 → シン・バトルモード（LT）
       └─ 非突入 → 通常時
  シン・バトルモード（LT）
   ├─ バトル勝利/図柄揃い 約1/32.9 → 約1500個、約15%は約3000個相当 → LT継続
   └─ 転落小当り 約1/154.8 → RUSH終了（残保留4個）

notes:
- P機版「P ゴジラ対エヴァンゲリオン セカンドインパクト G」と混同しない。P版は2024-12-02導入の別スペックでLT非搭載。
- 本機はRUSH突入＝LT発動の直LT型。
- 約52.6%はペンペンチャージ経由を含む総突入率。図柄揃いだけの振り分けと分母を混同しない。
- 継続率約85%は転落型時短10000回と残保留を含む公表値。

sources:
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/bisty_pachi/149/kh01.php
- パチビー 基本スペック/ゲームフロー: https://www.pachibee.jp/machines/index/124110000
- HAZUSE 基本スペック/ゲームフロー: https://hazuse.com/machine/pachinko/PX0249/
- なな徹 スペック詳細・大当り内訳: https://nana-press.com/kaiseki/machine/896/26054/
- パチ&スロ必勝本 大当り振り分け: https://hisshobon.com/machineinfo/95370/
- Amusement Japan 発表記事: https://amusement-japan.co.jp/article/detail/10004635/

confidence:
- LT搭載/正式型式/導入日: ANALYSIS_HIGH / INDUSTRY cross-check
- 通常・右・転落確率: ANALYSIS_HIGH
- LT突入率/継続率: ANALYSIS_HIGH
- 出玉振り分け: ANALYSIS_HIGH; 分母定義注記あり

missingFields: []
conflicts: []
