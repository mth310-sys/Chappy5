# P戦国乙女7 終焉の関ヶ原 99ver.

machineName: P戦国乙女7 終焉の関ヶ原 99ver.（業界資料別表記: 強カワ99ver.）
manufacturer: アムテックス（平和系）
releaseDate: 2026-03-02
modelType: 甘デジ / P機
gameType: 一種二種混合 / ST / c時短 / LT搭載
modelCode: P戦国乙女7L0YU1
inspectionNumber: 5P0670
jackpotProbability: 通常時図柄揃い 約1/99.9（大当り1/100.5＋小当り1/16384合算） / 乙女RUSH中 図柄揃い＋天剣チャンス 約1/47.3 / 極乙女RUSH中図柄揃い 約1/52.5
initialPayout: 3R 300個が主体。通常時10R 1000個+LT直行 0.6%。いずれも払出。
rushEntryRate: canonical 約63%（通常時10R+極乙女RUSH 0.6% + 3R+乙女RUSH 62.4%）。ただしパチマガスロマガFREE本文のみ「約53%」と記載し他資料・詳細振り分けと競合するためCONFLICTとして保持。
rushContinuationRate: 乙女RUSH 約75%（ST60回＋残保留4個＋天剣チャンス経由継続を含むTOTAL）
ltName: 極乙女RUSH
ltEntryRoute: ①通常時金七/10Rの0.6%からLT直行。②乙女RUSH中にc時短「天剣チャンス」（約1/471.4、時短10000回）へ入り、同チャンス中大当りの約50%で極乙女RUSHへ。
ltEntryRate: 通常時直行0.6%。天剣チャンスから約50%。通常遊技全体基準の総LT到達率は直接公表値未確認のため推測しない。
ltContinuationRate: 約94%（ST138回＋残保留4個。ST138回引き戻し約93%、残保留4個引き戻し約8%を含むTOTAL）
ltPayoutStructure: 極乙女RUSH中は10R 1000個+LT 25% / 3R 300個+LT 75%。ただし残保留当選時は乙女RUSH中と同様の振り分け。
totalPayoutDistribution: 通常時: 10R 1000個+極乙女RUSH 0.6% / 3R 300個+乙女RUSH 62.4% / 3R 300個+通常 37.0%。乙女RUSH図柄揃い時: 10R 1000個+乙女RUSH 25% / 3R 300個+乙女RUSH 75%。天剣チャンス中: 10R 1000個+極乙女RUSH 25% / 3R 300個+極乙女RUSH 25% / 3R 300個+乙女RUSH 50%。極乙女RUSH中: 10R 1000個 25% / 3R 300個 75%（残保留は下位RUSH時振り分け）。
timeShortening: 乙女RUSH ST60回+残保留4個 / 極乙女RUSH ST138回+残保留4個 / 天剣チャンス(c時短)10000回
cTimeOrSpecialSystems: 天剣チャンス。乙女RUSH中c時短約1/471.4で発生し、時短10000回。LT突入率約50%。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（図柄揃い 約1/99.9）
   ↓ 初当り
   ├─ 37.0% 3R 300個 → 通常
   ├─ 62.4% 3R 300個 → 乙女RUSH（ST60+残4 / TOTAL継続約75%）
   │                         ↓ 図柄揃い → 乙女RUSH継続
   │                         ↓ c時短約1/471.4 → 天剣チャンス（10000回）
   │                                              ├─ 約50% → 乙女RUSH
   │                                              └─ 約50% → LT「極乙女RUSH」
   └─ 0.6% 10R 1000個 → LT「極乙女RUSH」直行
                              ST138+残4 / 継続約94%
                              ↓ 大当り 1000個 25% / 300個 75%

notes:
- HAZUSE/G-netでは商用名を「P戦国乙女7 終焉の関ヶ原 強カワ99ver.」と表記。一撃/P-WORLD/必勝本等の「99ver.」と型式P戦国乙女7L0YU1が一致するため同一機として整理。
- 同日候補#11 `PA戦国乙女7 終焉の関ヶ原 ときめき78バージョン`（型式PA戦国乙女7～78GO1）とは別機種。
- G-net、P-WORLD、必勝本、なな徹、グリーンべると系記事はいずれもRUSH突入約63%。通常時振り分け0.6%+62.4%=63.0%とも整合。
- パチマガスロマガFREEの機種概要本文だけが「初当たりの約53%でRUSH」と記載。これは299ver.の53%と同値で sibling-spec 混入/編集誤りの可能性が高いが、推測で消さず競合資料として保存する。
- 通常遊技全体基準の総LT到達率は独自計算しない。

sources:
- https://g-net-ps.com/info/p0517/ — 業界向け販売資料。型式、商用名、導入日、LT搭載、確率、RUSH約63%、下位約75%、LT約94%、電サポ。取得日 2026-09-24。
- https://g-net-ps.com/industry/certif-2025-1212/ — 検定資料。型式P戦国乙女7L0YU1、検定番号5P0670、アムテックス。取得日 2026-09-24。
- https://hazuse.com/hd/5p0670/ — HAZUSE。強カワ99ver.表記、型式、検定番号、LT搭載、導入日。取得日 2026-09-24。
- https://www.p-world.co.jp/machine/database/10417 — P-WORLD。通常/右確率、RUSH約63%、乙女RUSH約75%、極乙女RUSH約94%、ゲームフロー。取得日 2026-09-24。
- https://news.p-world.co.jp/articles/32689 — グリーンべると/P-WORLD業界ニュース。通常/下位/天剣/上位の詳細振り分け。取得日 2026-09-24。
- https://p.hisshobon.jp/machine/4684/1/113477 — パチ&スロ必勝本。乙女RUSH約62.4%、天剣チャンス1/471.4・LT約50%、LT ST138+4/約94%、遊タイム非搭載。取得日 2026-09-24。
- https://nana-press.com/kaiseki/machine/1117/35322/ — なな徹。甘デジ/LT搭載、各確率、TOTAL約63%、下位/上位回数・継続、遊タイム非搭載。取得日 2026-09-24。
- https://1geki.jp/pachinko/p_otome7_99ver/53/ — 一撃。LT正式名称、ST138回、約94%。取得日 2026-09-24。
- https://pachimaga.com/free/mach/maker-p/amutex/064553.php — パチマガスロマガFREE。型式/導入日一致だが概要本文にRUSH約53%と記載し、他資料の約63%と競合。取得日 2026-09-24。

confidence: INDUSTRY + ANALYSIS_HIGH（主要コア値） / CONFLICT（RUSH突入率の単一資料53%表記）
missingFields: 通常遊技全体基準の総LT到達率は直接資料未確認
conflicts: rushEntryRate — 約63%（G-net/P-WORLD/必勝本/なな徹/詳細振り分け） vs 約53%（パチマガスロマガFREE本文）。平均せず保持。
status: CONFLICT
retrievedAt: 2026-09-24
