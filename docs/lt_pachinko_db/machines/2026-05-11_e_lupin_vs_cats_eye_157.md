# eルパン三世VSキャッツ・アイ157ver. 極限突破ブッた斬り7500

status: COMPLETE_CORE
retrievedAt: 2026-09-25

machineName: eルパン三世VSキャッツ・アイ157ver. 極限突破ブッた斬り7500
manufacturer: アムテックス（平和）
formalModel: eルパン三世VSキャッツアイLBM6
certificationNumber: 5P1547
releaseDate: 2026-05-11
modelType: スマパチ / ライトミドル / ラッキートリガー
gameType: 1種2種混合 / ST149回 / LT
jackpotProbability: 通常時 1/157.9。右打ち中 1/97.3。
initialPayout: 特図1は1500個+銭形LT BATTLE BONUS 約25% / 300個+通常 約75%（払出）。
rushEntryRate: 銭形LT BATTLE BONUS突入 約25%。SUPER HERO RUSH Wへの通常初当り基準の総到達率は直接公表値を確認できないため、独自乗算せずUNVERIFIED。
rushContinuationRate: 通常RUSHを独立して持たず、銭形LT BATTLE BONUS突破後はLT「SUPER HERO RUSH W」へ。銭形LT BATTLE BONUS突破期待度 約50%。
ltName: SUPER HERO RUSH W
ltEntryRoute: 通常初当りの約25%で1500個+銭形LT BATTLE BONUSへ。BATTLE BONUS中の特図2大当りは約25%が1500〜7500個+LT、約25%が1500個+LT、約50%が1500個+通常。したがって同BONUS突破期待度は約50%。
ltEntryRate: 銭形LT BATTLE BONUS突入 約25%、同BONUS突破 約50%。通常初当り基準の総LT到達率は直接値未確認のため推測・乗算値をcanonical登録しない。
ltContinuationRate: 約79%（ST149回、特図2に限る）。
ltPayoutStructure: SUPER HERO RUSH W中は1500〜7500個+LT継続 約25% / 1500個+LT継続 約75%。7500個=1500個×5回で、1500〜7500個は複数大当り合計払出。
totalPayoutDistribution: 特図1 1500個+銭形LT BATTLE BONUS 約25% / 300個+通常 約75%。銭形LT BATTLE BONUS中は1500〜7500個+LT 約25% / 1500個+LT 約25% / 1500個+通常 約50%。LT中は1500〜7500個 約25% / 1500個 約75%。
timeShortening: SUPER HERO RUSH WはST149回。
cTimeOrSpecialSystems: 極限突破ブッた斬り。右打ち大当りの約25%で1500〜7500個（7500個=1500個×5回）。
ceilingOrSupport: 確認した主要資料で遊タイム搭載根拠なし。
gameFlow: |
  通常時 1/157.9
   ↓ 初当り
  ├─ 300個 約75% → 通常
  └─ 1500個 約25% → 銭形LT BATTLE BONUS
                         ↓ 特図2大当り
                         ├─ 1500個 約50% → 通常
                         ├─ 1500個 約25% → LT「SUPER HERO RUSH W」
                         └─ 1500〜7500個 約25% → LT「SUPER HERO RUSH W」
                                                    ↓
                                               ST149回 / 継続約79%
                                                    ↓ 大当り
                                               1500個 75%
                                               1500〜7500個 25%
                                                    ↓
                                               ST149回へ
notes: |
  平和発表を扱う業界記事は製造元アムテックス、型式eルパン三世VSキャッツアイLBM6、通常1/157.9を明記。P-WORLD・一撃・パチビー等もLT搭載、銭形LT BATTLE BONUS約25%、突破約50%、SUPER HERO RUSH W 149回/約79%で一致。
  通常初当り基準の総LT到達率は、25%×約50%を独自計算すれば概算可能だが、直接公表値として確認していないためcanonical値にしない。
  1500〜7500個は1500個×最大5回の複数大当り合計であり、単一大当り7500個と混同しない。
  HAZUSEの旧詳細ページには「ラッキートリガー 非搭載」という孤立表記がある一方、同サイト現行機種ページはLTタグ・SUPER HERO RUSH W約79%を掲載。業界発表、P-WORLD、一撃、パチビー等がLT搭載で一致するため、旧詳細ページの非搭載表記はサイト内不整合としてcanonical判定には採用しない。
sources:
  - url: https://news.p-world.co.jp/articles/33096/greenbelt
    role: 業界記事 / 平和発表・アムテックス製・導入日・通常確率・BATTLE BONUS約25%/突破約50%
    retrievedAt: 2026-09-25
  - url: https://yugi-nippon.com/pachinko-new-machine/post-75986/
    role: 業界記事 / 型式名・製造元・基本確率
    retrievedAt: 2026-09-25
  - url: https://www.p-world.co.jp/machine/database/10461
    role: 解析DB / 特図1・BATTLE BONUS・LT中振り分け、ST149回、継続約79%、7500個定義
    retrievedAt: 2026-09-25
  - url: https://1geki.jp/pachinko/e_rupin_vs_catseye157/
    role: 解析 / 型式・検定番号・1種2種混合・LT・確率・ST/継続
    retrievedAt: 2026-09-25
  - url: https://www.pachibee.jp/machines/about/126040006
    role: 解析 / LT搭載・導入日・銭形LT BATTLE BONUS約25%
    retrievedAt: 2026-09-25
  - url: https://hazuse.com/hd/5p1547/
    role: QA注記 / 旧詳細ページの「LT非搭載」孤立表記
    retrievedAt: 2026-09-25
confidence: ANALYSIS_HIGH
missingFields:
  - 通常初当り基準の総LT到達率（直接公表値）
conflicts: []
