# PA戦国乙女7 終焉の関ヶ原 ときめき78バージョン

machineName: PA戦国乙女7 終焉の関ヶ原 ときめき78バージョン
manufacturer: アムテックス（平和系）
releaseDate: 2026-03-02
modelType: 甘デジ / PA機 / 6段階設定付きPB機
gameType: 一種二種混合 / ST / c時短 / LT搭載
modelCode: PA戦国乙女7～78GO1
inspectionNumber: 5P0712
jackpotProbability: 通常時 設定1 1/78.2 / 設定2 1/77.0 / 設定3 1/75.6 / 設定4 1/74.3 / 設定5 1/73.1 / 設定6 1/71.9。乙女RUSH中は大当り+c時短合算 設定1 1/61.7～設定6 1/57.7。天剣チャンス中/極乙女RUSH中トータル 設定1 1/63.7～設定6 1/59.5。
initialPayout: 通常時は10R 700個または5R 350個（払出）。初当り最低5R。
rushEntryRate: (極)乙女RUSH突入 約60%。詳細: 10R 700個+極乙女RUSH 0.1% / 5R 350個+乙女RUSH 59.9% / 5R 350個+通常 40.0%。
rushContinuationRate: 乙女RUSH 70.1%～72.6%（設定1～6、残保留込み）
ltName: 極乙女RUSH
ltEntryRoute: ①通常時10R「OVER斬BONUS EXTRA」0.1%から極乙女RUSH直行。②乙女RUSH中にc時短「天剣チャンス」へ移行し、天剣チャンス中の大当りの55%（10R 50% + 4R 5%）で極乙女RUSHへ。
ltEntryRate: 通常時直行0.1%。天剣チャンス中大当りから55%。通常遊技全体基準の総LT到達率は直接公表値未確認のため推測しない。
ltContinuationRate: 93.6%～94.8%（設定1～6、ST170回＋残保留込み）
ltPayoutStructure: 極乙女RUSH中は10R 700個+極乙女RUSH 50% / 4R 280個+極乙女RUSH 50%（払出）。
totalPayoutDistribution: 通常時特図1: 10R 700個+極乙女RUSH170回 0.1% / 5R 350個+乙女RUSH70回 59.9% / 5R 350個+通常 40.0%。乙女RUSH中特図2: 10R 700個+乙女RUSH70回 48.4% / 4R 280個+乙女RUSH70回 48.4% / c時短「天剣チャンス」3.2%。天剣チャンス中: 10R 700個+極乙女RUSH170回 50% / 4R 280個+極乙女RUSH170回 5% / 4R 280個+乙女RUSH70回 45%。極乙女RUSH中: 10R 700個+極乙女RUSH170回 50% / 4R 280個+極乙女RUSH170回 50%。
timeShortening: 通常大当り後0回 / 乙女RUSH ST70回 / 極乙女RUSH ST170回 / 天剣チャンス c時短10000回（次回大当りまで）。継続率表記は残保留込み。
cTimeOrSpecialSystems: 乙女RUSH中c時短「天剣チャンス」3.2%。時短10000回で実質次回大当りまで。天剣チャンス中大当りの55%でLT発動。
ceilingOrSupport: 遊タイムは主要確認資料で搭載根拠を確認できず。推測で搭載扱いしない。

gameFlow: |
  通常時（設定1 1/78.2 ～ 設定6 1/71.9）
   ↓ 初当り
   ├─ 40.0% 5R 350個 → 通常
   ├─ 59.9% 5R 350個 → 乙女RUSH（ST70回 / 継続70.1～72.6%・残保留込み）
   │                       ├─ 大当り 96.8%相当の振り分け → 乙女RUSH継続
   │                       └─ c時短 天剣チャンス 3.2% → 時短10000回
   │                                                  ↓ 大当り
   │                                                  ├─ 45% → 乙女RUSH
   │                                                  └─ 55% → LT「極乙女RUSH」
   └─ 0.1% 10R 700個 → LT「極乙女RUSH」直行
                              ST170回 / 継続93.6～94.8%（残保留込み）
                              ↓ 大当り 700個50% / 280個50% → LT継続

notes:
- アムテックスとホール企業7社の共同開発PB機。販売名・型式名・最短導入日はダイナム発表を報じた業界記事で確認。
- 同日候補#2 `P戦国乙女7 終焉の関ヶ原 99ver.`（型式P戦国乙女7L0YU1）とは別機種。99ver.の数値を混入しない。
- 天剣チャンス自体をLTとはせず、c時短のLT突入チャンス状態として分離。LT正式名称/上位状態は「極乙女RUSH」。
- 「RUSH突入約60%」は通常時0.1% LT直行+59.9%乙女RUSHのTOTAL。LT総到達率へ独自換算しない。
- 乙女RUSH中の1/61.7～1/57.7は大当り+c時短の合算。極乙女RUSH/天剣チャンス中の1/63.7～1/59.5とは定義を分離。
- 業界記事、P-WORLD、パチマガ/CS、HAZUSE、一撃で主要値を横断し未解決競合なし。

sources:
- https://www.nikkansports.com/amusement/pachislot/news/202602090001182.html — ダイナム発表を報じる業界記事。販売名、型式PA戦国乙女7～78GO1、導入日2026-03-02、設定付き、天剣チャンス中大当り55%でLT。取得日 2026-09-24。
- https://news.p-world.co.jp/articles/32887 — 遊技通信/P-WORLD業界ニュース。アムテックス、共同開発PB、導入日、通常確率、LT搭載、天剣チャンス中大当り55%。取得日 2026-09-24。
- https://news.p-world.co.jp/articles/32889/greenbelt — グリーンべると/P-WORLD。通常確率、RUSH約60%、下位約70.1%、LT約93.6%、特図1/2主要振り分け。取得日 2026-09-24。
- https://hazuse.com/machine/pachinko/5P0712/ — HAZUSE。型式、検定番号5P0712、メーカー、導入日、LT搭載、継続率レンジ。取得日 2026-09-24。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/070/kh01.php — 機種概要。型式、仕様、導入日、LT名称/経路。取得日 2026-09-24。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/070/kh02.php — 詳細スペック。設定別通常/右確率、払出。取得日 2026-09-24。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/070/kh03.php — 詳細振り分け。通常/乙女RUSH/天剣チャンス/LT中。取得日 2026-09-24。
- https://www.p-world.co.jp/machine/database/10441 — P-WORLD機種DB。LT搭載、RUSH/LT継続、天剣チャンスからLT約55%。取得日 2026-09-24。
- https://1geki.jp/pachinko/pa_otome7_78ver/51/ — 一撃。乙女RUSH ST70、設定別継続率、c時短。取得日 2026-09-24。
- https://1geki.jp/pachinko/pa_otome7_78ver/53/ — 一撃。LT「極乙女RUSH」ST170、継続93.6～94.8%。取得日 2026-09-24。
- https://pachimaga.com/free/mach/maker-p/amutex/064766.php — パチマガスロマガFREE。型式、導入日、LT構造。取得日 2026-09-24。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: 通常遊技全体基準の総LT到達率は直接公表値未確認。遊タイムは搭載根拠未確認。
conflicts: none
status: COMPLETE_CORE
retrievedAt: 2026-09-24
