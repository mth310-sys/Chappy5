# eルパン三世VSキャッツ・アイ

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: eルパン三世VSキャッツ・アイ
manufacturer: 平和
modelName: eルパン三世VSキャッツアイMAH4
releaseDate: 2025-11-04
modelType: スマパチ / ライトミドル / LT3.0プラス
gameType: 一種二種混合 / 普電ST / RUSH=LT直行型 / C時短（特定図柄時短）搭載

jackpotProbability:
- 通常時図柄揃い: 1/257.9（LUPIN CHARGE除外）
- LUPIN CHARGE: 約1/911
- 通常時大当り合算: 約1/201
- SUPER HERO RUSH W中: 1/99.9（大当り＋時短図柄/C時短の合算）

initialPayout:
- 図柄揃い: 2R 約300個
- LUPIN CHARGE: 2R 約300個
- 払出表記。解析資料では2R実獲得目安約280個、10R約1400個。

rushEntryRate:
- 本機は非LT下位RUSHなし。RUSH=LT。
- 特図1図柄揃い時のSUPER HERO RUSH W突入率: 約50%

rushContinuationRate:
- 通常RUSH（非LT）: 該当なし

ltName: SUPER HERO RUSH W
ltEntryRoute:
- 図柄揃い時の約50%から直接LT。
- 奇数図柄揃いBIG BONUSはLT突入濃厚。
- 偶数図柄揃いBONUSはラウンド後ファイナルチャンス成功でLT、失敗で通常。
- LUPIN CHARGEの一部でもLTへ突入。タイプライタ発生時はLT突入濃厚。

ltEntryRate:
- 直接公表LT突入確率: 1/515.8
- 特図1図柄揃い時: 約50%
- LUPIN CHARGEからのLT割合は「一部／かなり薄い」と確認できるが具体割合は未公表のため推測しない。

ltContinuationRate:
- ST153回
- 継続率: 約79%（特図2に限る）
- RUSH中当選確率: 1/99.9（大当り＋時短図柄/C時短合算）

ltPayoutStructure:
- 約3000個 + SUPER HERO RUSH W: 約50%（1500個×2回）
- 約1500個 + SUPER HERO RUSH W: 約35%
- リスタート（C時短/特定図柄時短、ST回数リセット）: 約15%
- したがって継続イベントの約85%が1500個以上、約50%が3000個。

totalPayoutDistribution:
- 通常時図柄揃い（特図1）: 約300個+LT 約50% / 約300個+通常 約50%
- LUPIN CHARGE: 約300個。大半は通常へ、一部LT。具体LT割合は未確認。
- LT中: 約3000個50% / 約1500個35% / リスタート15%。
- 3000個は1500個×2回の合計払い出しであり単一10R出玉ではない。

timeShortening:
- SUPER HERO RUSH W: 153回
- 初当りまたはリスタート後は153回。
- 1500個/3000個大当り時は2回+151回の構造として公表。
- 普電STのため残保留なし。153回スルーで通常へ。

cTimeOrSpecialSystems:
- c時短（特定図柄時短）当選でST回数リセット。
- RUSH中1/99.9は大当りと時短図柄の合算値であり、純粋な大当り確率として扱わない。

ceilingOrSupport:
- 遊タイム非搭載
- コンプリート機能搭載

gameFlow: |
  通常時
   ├─ 図柄揃い 1/257.9 → 2R約300個
   │    ├─ 約50% → LT「SUPER HERO RUSH W」
   │    └─ 約50% → 通常時
   └─ LUPIN CHARGE 約1/911 → 2R約300個
        ├─ 一部 → LT「SUPER HERO RUSH W」
        └─ 大半 → 通常時

  SUPER HERO RUSH W（LT）
   └─ ST153回 / 当選1/99.9（大当り+C時短合算） / 継続約79%
        ├─ 約50% → 3000個（1500×2）+ LT継続
        ├─ 約35% → 1500個 + LT継続
        └─ 約15% → リスタート / ST153回へリセット
   → 153回スルーで通常時

notes:
- RUSH=LTの直LTタイプで、比較用の非LT下位RUSHは存在しない。
- 2026年導入の「eルパン三世VSキャッツ・アイ157ver. 極限突破ブッた斬り7500」とは別スペック。混同禁止。
- 「LT突入率約50%」は特図1図柄揃い時の分母。「LT突入確率1/515.8」は通常遊技基準の直接公表値で、LUPIN CHARGEを含む経路の扱いを独自再計算しない。
- 「継続率約79%」は特図2に限る公表値。
- 3000個は1500個×2回の合計払い出し。

sources:
- https://yugi-nippon.com/pachinko-new-machine/post-73123/ — 業界記事。型式、LT3.0プラス、図柄揃い1/257.9、LT50%/1/515.8、ST153、1/99.9、約79%、右50/35/15、導入2025-11-04。
- https://news.p-world.co.jp/articles/31870/greenbelt — 業界記事。通常/右スペック、特図1・特図2振り分け、C時短注記を照合。
- https://www.pachibee.jp/machines/index/125090012 — 導入日、通常/右確率、時短153、C時短リセット、3000個=1500個×2を照合。
- https://www.pachibee.jp/machines/about/125090012 — BIG BONUS/BONUS/LUPIN CHARGEの通常時ゲームフローを照合。
- https://hisshobon.com/machineinfo/98955/ — 図柄揃い/LUPIN CHARGE/合算、LT突入確率、払出を照合。
- https://hisshobon.com/machineinfo/98957/ — LT発動契機、ST終了条件、普電ST・残保留なしを照合。
- https://1geki.jp/pachinko/e_rupin_vs_catseye/ — 型式名・検定番号・導入日を照合。
- https://1geki.jp/pachinko/e_rupin_vs_catseye/51/ — LT発動契機、1/515.8、ST153、約79%を照合。

confidence:
- machineName/manufacturer/modelName/releaseDate: INDUSTRY
- LT搭載/名称/構造: INDUSTRY + ANALYSIS_HIGH
- 通常時確率/LT突入率/LT継続率: INDUSTRY + ANALYSIS_HIGH
- LT中振り分け: INDUSTRY + ANALYSIS_HIGH
- LUPIN CHARGE→LT具体割合: UNVERIFIED（公表具体値を確認できず）

missingFields:
- LUPIN CHARGEからLTへ移行する具体割合（資料は「一部」「かなり薄い」まで）

conflicts: []
