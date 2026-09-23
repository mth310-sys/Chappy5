# e 盾の勇者の成り上がり アルティメット199ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e 盾の勇者の成り上がり アルティメット199ver.
manufacturer: タイヨーエレック / Sammy
formalModel: e盾の勇者の成り上がりEREF
inspectionNumber: 5P0814
releaseDate: 2026-01-05
modelType: ライトミドル / スマパチ / LT3.0プラス
gameType: 一種二種混合 / 転落型下位RUSH + ST型LT
jackpotProbability:
- 通常時: 約1/199
- 右打ち中: 約1/45.2
- RISING RUSH中転落小当り: 約1/23.7
initialPayout:
- 2R: 300個（払出）
- LT直行の一部: 1800個+α / 3000個+α
rushEntryRate:
- RISING RUSH: 49.9%
- RISING RUSH + 初当りLT直行を合わせた右状態TOTAL: 約52%（資料表記）
rushContinuationRate:
- RISING RUSHは次回大当りまたは転落小当りまで
- LT突破率: 約40%（転落小当り約1/23.7より先に大当り約1/45.2を獲得）
ltName: 裏アルティメットタイム
ltEntryRoute:
- 初当りの一部（2.1%）からLT直行。アルティメットBONUS / アルティメットBONUS MAX後
- 初当り300個からRISING RUSHへ入り、転落前に大当りして突破するとLTへ
- RISING RUSH突破時は3000個または4500個+αを獲得してLTへ
ltEntryRate:
- 初当り直行: 2.1%
- RISING RUSH突入: 49.9%、その突破率約40%
- 通常遊技全体基準の総LT到達率/到達確率: UNVERIFIED_AFTER_RESEARCH（経路値から独自合算しない）
ltContinuationRate:
- 裏アルティメットタイム: 約85%（残保留込み）
- ST80回または10000回 + 残保留4個
ltPayoutStructure:
- LT中: 1500個または3000個+α
- 3000個は1500個×2回を含む複数大当り合算。単一10R出玉と混同しない
- 残保留での大当り: 3000個+αが濃厚
totalPayoutDistribution:
- 通常時解析値: 3000個+α + LT 0.1% / 1800個+α + LT 2.0% / 300個 + RISING RUSH 49.9% / 300個 + 通常 48.0%
- RISING RUSH中解析値: 4500個+α + LT 10% / 3000個+α + LT 90%（大当り獲得時）
- LT中解析値: 3000個+α + LT 10% / 1500個 + LT 90%
- 基本払出: 10R 1500個 / 2R 300個
- `+α`は10R大当りの上乗せ機構を含むため、固定出玉として扱わない
timeShortening:
- RISING RUSH: 時短10000回相当だが転落小当り当選で終了
- 裏アルティメットタイム: 80回または10000回 + 残保留4個
cTimeOrSpecialSystems:
- RISING RUSHは大当り約1/45.2と転落小当り約1/23.7の競合による突破型
- LT開始時/大当り時の3000個・4500個+αは複数回大当り合算を含む
- 残保留引き戻し時は3000個+α
ceilingOrSupport: 遊タイムなし
gameFlow: |
  通常時（約1/199）
   ↓ 初当り
  2.1% → 1800個+α / 3000個+α → 裏アルティメットタイム（LT）
  49.9% → 300個 → RISING RUSH
  48.0% → 300個 → 通常時
   ↓ RISING RUSH（大当り約1/45.2 vs 転落約1/23.7）
  大当りを先に獲得（突破約40%） → 3000個 or 4500個+α → LT
  転落を先に獲得 → 通常時
   ↓
  裏アルティメットタイム（ST80回 or 10000回+残4、継続約85%）
   ↓
  1500個 or 3000個+α → LT継続
  STスルー → 残保留4個 → 引き戻し時3000個+α
notes:
- 遊技通信は型式 `e盾の勇者の成り上がりEREF`、タイヨーエレック製、通常約1/199、右約1/45.2、RISING RUSH49.9%/突破約40%、LT約85%を明示。
- 導入日はグリーンべると、K-Navi等の2026-01-05で一致。遊技通信記事本文の「2024年12月上旬予定」は機種世代と他資料に反するため採用せず、記事内誤記として扱う。
- パチマガスロマガ詳細はRISING RUSH49.9%、初当りLT直行2.1%、LT80/10000回+残4、約85%、遊タイムなしを明示。
- 3000個/4500個/+αは複数大当り・上乗せを含むため、単一大当りの10R1500個と分離。
- 2024-12導入の旧 `P盾の勇者の成り上がり` と別スペック。
sources:
- https://news.p-world.co.jp/articles/32065/yugitsushin — 遊技通信。型式、製造、通常/右確率、RISING RUSH49.9%/突破40%、LT85%、LT3.0プラス。取得2026-09-23
- https://news.p-world.co.jp/articles/32082/greenbelt — グリーンべると。2026-01-05導入、RISING RUSH突破40%、LT80回+残4/約85%、3000/4500+α。取得2026-09-23
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/331/kh02.php — パチマガスロマガ。通常/右/転落確率、RISING RUSH49.9%、初当りLT直行2.1%、LT80/10000回+残4、遊タイムなし。取得2026-09-23
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/331/bo01.php — パチマガスロマガ。通常時各BONUS、1800/3000+α直行、3000=1500×2等。取得2026-09-23
- https://1geki.jp/pachinko/p_tateyuu_ul199/51/ — 一撃。RISING RUSH約1/45.2、転落約1/23.7、突破約40%。取得2026-09-23
- https://hazuse.com/machine/pachinko/5P0814/genre/102/ — HAZUSE。LT名称、約85%、LT中1500/3000+α、残保留3000+α。取得2026-09-23
- https://p-kn.com/pachinko/4413/ — K-Navi。型式、LT搭載、2026-01-05導入。取得2026-09-23
confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常遊技全体基準の総LT到達率/到達確率は直接公表値を確認できずUNVERIFIED_AFTER_RESEARCH
conflicts: none
