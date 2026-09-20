# e北斗の拳10

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: e北斗の拳10
manufacturer: サミー（製造: 銀座）
releaseDate: 2024-08-05
modelType: スマパチ / ミドル

gameType: 1種2種混合 / 転落RUSH + LT転落RUSH
jackpotProbability: 通常時図柄揃い 約1/348.6。特図1小当り（世紀末チャージ）約1/478。右打ち中大当り+小当り合算 約1/40.0。
initialPayout: 約300個(2R) or 約1500個(10R)。世紀末チャージも約300個。
rushEntryRate: 約80%
rushContinuationRate: BATTLE MODE 約80%（大当り約1/40.0 vs 転落小当り約1/136.9）。
ltName: HYPER BATTLE MODE
ltEntryRoute: (1)通常時特図1の一部から直行（大当り振り分け1%、世紀末チャージの約1%）、(2)BATTLE MODE中10R大当りの約36%で無想転生チャンス発生→成功期待度約50%でLT発動。神拳勝舞勝利時の一部も直行経路。
ltEntryRate: 特図1大当り振り分けでは300個+HYPER BATTLE MODE 1%。世紀末チャージの約1%も直行。BATTLE MODE中は10R約70%のうち約36%で無想転生チャンスが発生し、その約50%成功が主要経路。通常初当り全体からの単一総到達率は資料定義が複数経路に分かれるためUNVERIFIED。
ltContinuationRate: 約89%（右打ち約1/40.0、LT中転落小当り約1/275.9）。
ltPayoutStructure: HYPER BATTLE MODE中も特図2は10R約1500個 約70% / 3R約450個 約30%。大当り後LT継続、転落小当りで終了。
totalPayoutDistribution: 特図1: 1500個+BATTLE MODE 5%、300個+BATTLE MODE 74%、300個+HYPER BATTLE MODE 1%、300個通常20%。特図2: 1500個70%、450個30%。世紀末チャージは約1% HYPER BATTLE MODE / 約99%通常。
timeShortening: BATTLE/HYPER BATTLE MODEとも次回大当りまたは転落小当りまで。通常時からHYPER BATTLE MODE直行時は初回のみ転落なしで次回大当り濃厚。
cTimeOrSpecialSystems: 転落小当り。BATTLE MODE 1/136.9、HYPER BATTLE MODE 1/275.9。
ceilingOrSupport: 遊タイムなし（解析資料照合）

gameFlow: |
  通常時 図柄揃い約1/348.6 / 世紀末チャージ約1/478
   ├─ 通常 20%相当
   ├─ BATTLE MODEへ（初当りRUSH突入期待 約80%）
   │    ↓ 約80%継続、特図2 70%が約1500個
   │   10Rの約36% → 無想転生チャンス
   │    ↓ 約50%成功
   │   LT「HYPER BATTLE MODE」
   └─ 特図1/世紀末チャージの一部 → LT直行
        ↓
      HYPER BATTLE MODE 約89%
        ↓ 大当り約1/40.0 / 転落約1/275.9
      1500個70% / 450個30%

notes:
- サミーグループ初のスマパチ。2024-08-05全国導入を業界一次で確認。
- LT突入時期待出玉13,452個は業界資料掲載値。
- 通常時の「図柄揃い大当り」と「世紀末チャージ（特図1小当り経由）」を混同しない。
- 通常初当り基準LT総到達率は直行・RUSH経由が併存し、公開資料の分母定義を統一できないため推測せずUNVERIFIED。

sources:
- https://news.p-world.co.jp/articles/27742/yugitsushin — 遊技通信/P-WORLD。基本確率、転落率、RUSH80%、HBM89%、世紀末チャージ経路。取得 2026-09-21。
- https://news.p-world.co.jp/articles/27748/greenbelt — グリーンべると/P-WORLD。振り分け、無想転生チャンス、期待出玉。取得 2026-09-21。
- https://news.p-world.co.jp/articles/28604/greenbelt — グリーンべると/P-WORLD。2024-08-05導入、ゲームフロー。取得 2026-09-21。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/315/kh01.php — パチマガスロマガ。型式、導入日、確率/転落構造照合。取得 2026-09-21。
- https://p.hisshobon.jp/machine/4322/1/102759 — 必勝本。LT経路3系統、無想転生36%→成功50%、LT終了条件。取得 2026-09-21。
- https://1geki.jp/pachinko/e_hokutonoken10/51/ — 一撃。BATTLE MODE約80%、無想転生経路照合。取得 2026-09-21。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: ltEntryRate total-from-normal UNVERIFIED
conflicts: none
