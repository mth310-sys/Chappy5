# Pフィーバー戦姫絶唱シンフォギア4 199 ver.

machineName: Pフィーバー戦姫絶唱シンフォギア4 199 ver.
manufacturer: SANKYO
formalModel: Pフィーバー戦姫絶唱シンフォギア4Z
releaseDate: 2025-02-03
modelType: ライトミドル 約1/199.9
gameType: 一種二種混合 / 1回転RUSH / 下位RUSH→LT昇格型
jackpotProbability: 通常時 約1/199.9; 絶唱RUSH中図柄揃い 約1/1.8（大当り+小当り合算、特図2）; 超絶唱RUSH中図柄揃い 約1/1.2（大当り+小当り+c時短合算、特図2）
initialPayout: 通常初当りの大半はFEVER 約900個（払出）。約1%はSPECIAL FEVER 約1500個でLT直行
rushEntryRate: RUSH TOTAL約52%（LT直行含む）。SANKYO公式機種コレクションでは絶唱RUSH突入率約51%と表記されるため、TOTAL約52%はLT直行約1%を含む定義として分離
rushContinuationRate: 絶唱RUSH 約55%（時短1回）
ltName: 超絶唱RUSH
ltEntryRoute: 3経路。①通常初当り約1%のSPECIAL FEVERからLT直行、②絶唱RUSH1回目の右打ち大当り時約20%でLT、③絶唱RUSHを2連させるとLT突入（2回目の右打ち大当り後は100%LT）
ltEntryRate: 通常初当り基準のLT確率はパチマガスロマガFREE実データ解説で約1/1092.6。経路別は特図1約1%、絶唱RUSH1回目大当り時約20%、2回目大当り時100%
ltContinuationRate: 超絶唱RUSH TOTAL約86%。時短1回のみの継続率約83%、SPECIAL絶唱FEVER3000/V-STOCK等の実質次回を含むTOTAL約86%
ltPayoutStructure: LT中の右打ち大当りはALL約1500個払出。実質次回振り分けを含みTOTAL継続約86%; 業界資料では実質次回=SPECIAL絶唱FEVER3000とV-STOCKを含む
totalPayoutDistribution: 通常時は大半が約900個FEVER、約1%が約1500個SPECIAL FEVER+LT直行。絶唱RUSH/超絶唱RUSH中の右打ち大当りはALL約1500個払出。絶唱RUSH1回目大当り時は約20%でLT、2回目大当り時は100%LT
timeShortening: 絶唱RUSH 時短1回; 超絶唱RUSH 時短1回または実質次回まで
cTimeOrSpecialSystems: 超絶唱RUSH中の約1/1.2は大当り+小当り+c時短の合算。c時短がLT継続性能の一部を構成
ceilingOrSupport: 遊タイム搭載根拠なし; LTコア構造への関与なし
gameFlow: |
  通常時 約1/199.9
   ↓ 初当り
   ├─約1% SPECIAL FEVER 約1500個 → 超絶唱RUSH(LT)
   └─大半 FEVER 約900個 → 最終決戦
                         ├─成功 → 絶唱RUSH（時短1回 / 約55%）
                         └─失敗 → 通常時
  絶唱RUSH 1回目
   ↓ 大当り
   ├─約20% → 超絶唱RUSH(LT)
   └─残り → 絶唱RUSH 2回目
                 ↓ 大当りすれば100% LT
  超絶唱RUSH(LT)
   ↓ 時短1回継続約83% / 実質次回込みTOTAL約86%
  右打ち大当り ALL約1500個 → LT継続
   ↓ 非継続
  通常時
notes: SANKYO公式でLT搭載、通常約1/199.9、初当り約1%LT直行、約900個FEVER→最終決戦、LT約86%・1500個ループを確認。業界一次系記事で導入日2025-02-03、型式Pフィーバー戦姫絶唱シンフォギア4Z、RUSH TOTAL約52%、下位約55%、LT約86%、LT3経路（特図1約1%、特図2約20%、下位2連で必ずLT）を照合。SANKYO公式の「絶唱RUSH突入率約51%」と業界資料の「RUSH TOTAL約52%」は競合ではなく、後者がLT直行約1%を含む定義差として扱う。2025-08-04導入のLT-Light ver.(約1/99.9)とは別スペック。
sources:
- https://www.sankyo-fever.jp/collection/974/ — SANKYO公式オンライン博物館。LT搭載、型式、通常1/199.9、初当り出玉、約1%LT直行、LT約86%/1500個、別スペック分離
- https://news.p-world.co.jp/articles/29315/amusement — アミューズメントジャパン/P-WORLD業界ニュース。2025-02-03導入、LT3経路、通常1/199.9、RUSH約52%、下位約55%、LT約86%、右ALL1500個
- https://news.p-world.co.jp/articles/29345/yugitsushin — 遊技通信/P-WORLD業界ニュース。型式、確率、RUSH/LT継続、実質次回定義、払出定義
- https://hazuse.com/machine/pachinko/PX0263/genre/101/ — HAZUSE。型式/導入日、通常/右確率、RUSH約52%、下位約55%、LT約86%照合
- https://p-kn.com/pachinko/4244/ — K-Navi。通常/右確率、1回転RUSH、LT突入段階構造を照合
- https://pachimaga.com/free/article/20250222/056021.php — パチマガスロマガFREE。P機LT確率約1/1092.6の直接解析値
retrievedAt: 2026-09-21
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields: none for core fields
conflicts: none
