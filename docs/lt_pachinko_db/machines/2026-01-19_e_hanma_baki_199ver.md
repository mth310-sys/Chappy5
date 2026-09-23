# e範馬刃牙 199ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e範馬刃牙 199ver.
manufacturer: アムテックス（平和系）
formalModel: eバキ2LBM4
releaseDate: 2026-01-19
modelType: ライトミドル / e機 / LT3.0プラス
gameType: 一種二種混合 / 1回転バトル型 / 下位RUSH→LT
jackpotProbability:
- 通常時: 1/199.8
- 右打ち中: 1/1.34（小当り経由時V入賞条件）
initialPayout:
- 基本初当り: 2R 約300個
- 初当り後の「地球史上最強決定戦」成功でバトルMODE。TOTAL突入約50%
- 左打ち時に1500BONUSが発生した場合はVストックを獲得しLT直行する例外経路あり（具体振分率は直接確認できず推測しない）
rushEntryRate:
- バトルMODE 約50%
rushContinuationRate:
- バトルMODE 約75%（時短1回、右1/1.34、特図2に限る）
ltName: 史上最強バトルMODE86
ltEntryRoute:
- バトルMODEで3連勝 → LT突入ジャッジ「地上最強の親子喧嘩」へ → 約75%成功でLT
- バトルMODE中大当りの約5%でも3連勝を待たず「地上最強の親子喧嘩」へ
- 左打ち時1500BONUS発生時はVストックを獲得しLT直行する例外経路あり
ltEntryRate:
- 地上最強の親子喧嘩の成功率: 約75%
- 通常遊技全体基準の総LT到達率: 直接公表値を確認できず。経路値から独自算出しない
ltContinuationRate:
- 約86%（特図2に限る）
- 時短1回 or 10000回。LT中大当りの約43%で時短10000回、約57%で時短1回
ltPayoutStructure:
- LT中大当り: ALL 10R 約1500個
- 約43%: 1500個 + 時短10000回（実質次回側）
- 約57%: 1500個 + 時短1回
- 上記を含むTOTAL継続約86%
totalPayoutDistribution:
- 通常初当り基本: 2R 約300個
- バトルMODE中大当り: 10R 約1500個。1〜2回目は約5%で親子喧嘩、約95%でバトルMODE継続。3連勝時は親子喧嘩へ
- 親子喧嘩: 右1/1.34の1回転ジャッジ、成功約75%で1500個 + LT
- LT中: ALL 10R 約1500個（時短10000回約43% / 時短1回約57%）
timeShortening:
- バトルMODE: 時短1回
- 地上最強の親子喧嘩: 時短1回
- LT: 時短1回 or 10000回
cTimeOrSpecialSystems:
- バトルMODEは1変動決着。3連勝または各大当り約5%でLTジャッジへ
- LT中約43%の時短10000回付与により、右1/1.34の単発1回抽選より継続性能を約86%へ引き上げる
ceilingOrSupport:
- 遊タイム非搭載

gameFlow: |
  通常時（1/199.8）
   ↓ 初当り（基本2R 約300個）
  約50% → バトルMODE（時短1回、勝率/継続約75%）
  約50% → 通常時
   ↓ バトルMODE大当り（10R 約1500個）
  1〜2勝目: 約5%で親子喧嘩 / 約95%で次のバトルMODE
  3連勝: 地上最強の親子喧嘩へ
   ↓ LT突入ジャッジ（時短1回、成功約75%）
  成功 → 10R 約1500個 → 史上最強バトルMODE86（LT）
  失敗 → 通常時
   ↓
  LT（継続約86%）
   ↓ 大当り ALL約1500個
  約43% → 時短10000回 → LT継続
  約57% → 時短1回 → LT継続抽選
notes:
- 型式 `eバキ2LBM4`、アムテックス製、2026-01-19導入を複数資料で確認。
- グリーンべると/アミューズメントジャパン/一撃/なな徹/P-WORLDで、通常1/199.8、下位約50%・約75%、親子喧嘩約75%、LT約86%、右ALL1500個の骨格が一致。
- 左打ち1500BONUSからのLT直行はP-WORLD/なな徹が明記するが、具体的な通常時振分率を本文資料から確定できないため推測しない。
- 通常遊技基準の総LT到達率は、50%、約75%、5%、3連勝等から独自計算しない。
- 2025年6月の1/499系 `e範馬刃牙` と別スペック。
sources:
- https://news.p-world.co.jp/articles/32355/greenbelt — グリーンべると。アムテックス製、1/199.8、RUSH約50%/約75%、3連勝→親子喧嘩、LT約86%、右ALL1500。取得2026-09-23
- https://amusement-japan.co.jp/article/detail/10005056/ — アミューズメントジャパン。導入日、LT3.0プラス、親子喧嘩経路、LT約86%、LT中43%時短10000/57%時短1。取得2026-09-23
- https://hazuse.com/machine/pachinko/PX0331/ — HAZUSE。型式、検定番号、メーカー、導入日、RUSH/LT継続。取得2026-09-23
- https://pachimaga.com/free/mach/maker-p/amutex/064586.php — パチマガスロマガ。型式、メーカー、導入日、基本フロー。取得2026-09-23
- https://1geki.jp/pachinko/e_hanmabaki199/39/ — 一撃。通常/右確率、時短1回、親子喧嘩成功約75%、LT時短1/10000・約86%。取得2026-09-23
- https://1geki.jp/pachinko/e_hanmabaki199/51/ — 一撃。3連勝または大当り約5%で親子喧嘩、LT中約43%時短10000。取得2026-09-23
- https://nana-press.com/kaiseki/machine/1091/34563/ — なな徹。1種2種、払出300/1500、遊タイム非搭載、左1500BONUS直行注記。取得2026-09-23
- https://www.p-world.co.jp/machine/database/10393 — P-WORLD。LT経路、左1500BONUS例外直行、下位/LT継続。取得2026-09-23
confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常遊技全体基準の総LT到達率/確率: UNVERIFIED_AFTER_RESEARCH
- 左打ち1500BONUS直行の具体振分率: UNVERIFIED_AFTER_RESEARCH
conflicts: none
