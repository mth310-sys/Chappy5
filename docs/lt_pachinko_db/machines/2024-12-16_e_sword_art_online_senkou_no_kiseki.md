# eソードアート・オンライン 閃光の軌跡

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: eソードアート・オンライン 閃光の軌跡
formalModel: eソードアート・オンライン2～閃光の軌跡～K1
manufacturer: 京楽産業.
releaseDate: 2024-12-16
modelType: スマパチ / ライトミドル / LT搭載
gameType: 一種二種混合 / 下位ST → LT上位ST
jackpotProbability: 通常時 約1/199.9 / 右打ち中 約1/59.9
initialPayout: 2R 約300個 or 10R 約1500個（払出）
rushEntryRate: 70%（うち1%はLIGHTNING RUSH直行、69%はSWORD RUSH）
rushContinuationRate: SWORD RUSH 約60%（ST50回+残保留4）
ltName: LIGHTNING RUSH
ltEntryRoute: 通常時10R 1%でLT直行（実質次回まで）。SWORD RUSH中大当りの30%でLTへ（3%は10R+実質次回まで、27%は10R+ST115回+残保留4）。1500個大当り時のLAST ATTACK CHANCE成功が主要昇格演出。
ltEntryRate: 通常初当り基準 約22.2% / LT突入確率 約1/900（解析資料の直接公表値）。通常時直行振り分けは1%、SWORD RUSH中大当り時LT振り分けは30%。
ltContinuationRate: 約90%。時短10000回（実質次回まで）とST115回+残保留4の約86.5%を合わせたTOTAL値。
ltPayoutStructure: LIGHTNING RUSH中 = 10R約1500個+実質次回まで 22.5% / 10R約1500個+ST115回+残保留4 47.5% / 2R約300個+ST115回+残保留4 30%。右打ちLT中の1500個比率70%。残保留での引き戻しはSWORD RUSH中の振り分け。
totalPayoutDistribution: 通常時 = 10R約1500個+LT実質次回まで 1% / 2R約300個+SWORD RUSH 69% / 2R約300個+通常 30%。SWORD RUSH中 = 10R約1500個+LT実質次回まで 3% / 10R約1500個+LT 27% / 10R約1500個+SWORD RUSH 40% / 2R約300個+SWORD RUSH 30%。
timeShortening: 0 / 50 / 115 / 10000回。各STは残保留4あり。
cTimeOrSpecialSystems: LT中22.5%は時短10000回で実質次回まで。通常時1%直行も実質次回まで。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時 約1/199.9
   ├─ 30%: 2R約300個 → 通常へ
   ├─ 69%: 2R約300個 → SWORD RUSH（50回+残保留4、約60%）
   │    └─ 右打ち大当り
   │         ├─ 30%: 10R約1500個 → LIGHTNING RUSH（LT）
   │         └─ 70%: SWORD RUSH継続（10R40% / 2R30%）
   └─ 1%: 10R約1500個 → LIGHTNING RUSH直行（実質次回まで）

  LIGHTNING RUSH
   ├─ 22.5%: 10R約1500個 + 実質次回まで
   ├─ 47.5%: 10R約1500個 + ST115回+残保留4
   └─ 30%: 2R約300個 + ST115回+残保留4
  TOTAL継続 約90%
notes: |
  型式名は業界記事で確認。2026年導入の99Ver.は別スペックであり混同しない。
  払出約1500/300個と実獲得約1400/280個は定義を分離。本レコードの主要出玉は払出表記で統一。
  LT総到達について一撃が「初当り約1/199から約22.2%、LT突入確率約1/900」と直接掲載しているため、経路値から独自算出せず直接値として採用。
  約90%は単純なST119回だけの継続率ではなく、実質次回まで振り分けを含むTOTAL。ST115+残保留4単体は約86.5%。

sources:
  - url: https://news.p-world.co.jp/articles/29285/yugitsushin
    role: 業界一次系記事 / 型式名・LT搭載・基本構造
  - url: https://news.p-world.co.jp/articles/29291/greenbelt
    role: 業界資料 / 導入日・LT構造
  - url: https://1geki.jp/pachinko/e_sao_lt/
    role: 解析 / 基本スペック・LT到達直接値・出玉定義
  - url: https://1geki.jp/pachinko/e_sao_lt/51/
    role: 解析 / SWORD RUSH・LT振り分け
  - url: https://nana-press.com/kaiseki/machine/847/25175/
    role: 解析 / 基本スペック・ST回数・遊タイム
  - url: https://nana-press.com/kaiseki/machine/847/26257/
    role: 解析 / RUSH構造
  - url: https://pachiseven.jp/articles/detail/23205
    role: 解析 / 振り分け・TOTAL継続定義
  - url: https://www.kyoraku.co.jp/news/detail/853
    role: メーカー公式 / 2024-12-16導入の原スペック存在確認と後発99Ver.分離

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: []
conflicts: []
