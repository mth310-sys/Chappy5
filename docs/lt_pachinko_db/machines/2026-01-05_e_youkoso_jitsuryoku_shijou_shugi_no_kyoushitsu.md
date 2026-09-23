# eようこそ実力至上主義の教室へ

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: eようこそ実力至上主義の教室へ
manufacturer: Sansei R&D（サンセイアールアンドディ）
modelName: eようこそ実力至上主義の教室へMA
inspectionNumber: 510728
releaseDate: 2026-01-05
modelType: ミドル / スマパチ / LT搭載
gameType: 一種二種混合 / 普図ST / 二段階RUSH / コテスタ搭載
jackpotProbability: 通常時 約1/349.9 / TREASURE HUNT中 約1/94.1 / TREASURE HUNT EXTRA中 約1/71.6
initialPayout: 3R 約450個（払出）
rushEntryRate: TREASURE HUNT 約50%
rushContinuationRate: TREASURE HUNT ST65回、引き戻し約50%
ltName: TREASURE HUNT EXTRA
ltEntryRoute: 初当り約50%でTREASURE HUNTへ突入 → ST65回中に大当り → その大当りの約73%でTREASURE HUNT EXTRA（LT）へ
ltEntryRate: TREASURE HUNT中大当り時 約73%。通常初当り全体基準のLT到達率は公式/高信頼解析の直接公表値を確認できず、経路値から独自算出しない。業界診断資料に「LT突入率 約18.27%」表記があるが分母/定義の明示が弱いため参考値としてnotesに分離。
ltContinuationRate: 約87%（TREASURE HUNT EXTRA、ST145回の引き戻し率）
ltPayoutStructure: LT中大当りはALL 3000個（1500個×2、払出）。大当り後 約87%でLT継続、約13%で通常へ。
totalPayoutDistribution: 通常時=3R約450個+TREASURE HUNT 約50% / 3R約450個+通常 約50%。TREASURE HUNT中=3000個（1500個×2）+LT 約73% / 3000個（1500個×2）+通常 約27%。TREASURE HUNT EXTRA中=3000個（1500個×2）+LT 約87% / 3000個（1500個×2）+通常 約13%。
timeShortening: TREASURE HUNT 65回 / TREASURE HUNT EXTRA 145回
cTimeOrSpecialSystems: 新スタートシステム「コテスタ」。打ち出し約10球に1球をヘソへ誘導し、保留3個をキープする設計。LT到達抽選そのものではないため別記。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時 約1/349.9
   ↓ 初当り 3R約450個
   ├─ 約50% → 通常へ
   └─ 約50% → TREASURE HUNT（ST65回、約1/94.1、引き戻し約50%）
                  ↓ ST中大当り ALL3000個（1500個×2）
                  ├─ 約27% → 通常へ
                  └─ 約73% → LT「TREASURE HUNT EXTRA」
                                ST145回 / 約1/71.6 / 継続約87%
                                ↓ 大当り ALL3000個
                                ├─ 約87% → LT継続
                                └─ 約13% → 通常へ
notes:
  - 3000個は単一10Rではなく10R×2（1500個×2）の払出合計。単発3000個大当りとして扱わない。
  - P-WORLD掲載の遊技通信記事、長崎県遊技業協同組合、パチマガスロマガFREE、なな徹、一撃で通常約1/349.9、下位約1/94.1、LT約1/71.6、RUSH50%、下位ST65回/約50%、LT ST145回/約87%、右ALL3000個の主要構造が一致。
  - 情報島＋の機種ページ本文は「ST中出玉オール3000個」とする一方、振分表の通常転落側を450個と記載しておりページ内自己矛盾。複数の上位資料が右ALL3000個/10R×2で一致するため、当該450個表記は採用せず資料内不整合として注記する。
  - ぱちレボ! にLT突入率約18.27%の記載あり。ただし通常初当り全体基準か等の定義説明が十分でないため、canonical ltEntryRateには採用せず参考値とする。
  - 残保留による継続を別加算するタイプではなく、公開資料上はST65回/145回それぞれの引き戻し率として約50%/約87%が定義される。
sources:
  - https://news.p-world.co.jp/articles/32365/yugitsushin — 遊技通信転載 / 発表記事。型式、確率、RUSH/LT、右ALL3000個、導入日。取得 2026-09-23
  - https://nagasaki-yukyo.or.jp/information/%E3%83%91%E3%83%81%E3%83%B3%E3%82%B3%E3%81%AE%E5%9B%BA%E5%AE%9A%E8%A6%B3%E5%BF%B5%E3%82%92%E8%A6%86%E3%81%99%E3%80%81%E6%96%B0%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0/ — 長崎県遊技業協同組合。メーカー発表内容、型式、確率、RUSH/LT、3000個定義。取得 2026-09-23
  - https://pachimaga.com/free/mach/maker-p/sansei/064536.php — パチマガスロマガFREE。ゲームフロー、振分、3000個=1500個×2。取得 2026-09-23
  - https://nana-press.com/kaiseki/machine/1077/33673/ — なな徹。詳細確率、ST回数、払出、遊タイム非搭載。取得 2026-09-23
  - https://1geki.jp/pachinko/e_youzitsu/ — 一撃。型式、検定番号、導入日、ゲームフロー。取得 2026-09-23
  - https://p-johojima.jp/machine_spec/post-20105/ — 情報島＋。LT名称/構造確認。振分表の通常転落側出玉は本文と他資料に対し不整合のため不採用。取得 2026-09-23
  - https://pachirevo.com/featuredmachine/5224/ — ぱちレボ!。LT突入率約18.27%参考値。取得 2026-09-23
confidence: INDUSTRY / ANALYSIS_HIGH
missingFields:
  - 通常初当り全体を分母とした、定義明示済みの公式LT総到達率/確率
conflicts: []
