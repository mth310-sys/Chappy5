# e東京リベンジャーズ

machineName: e東京リベンジャーズ
manufacturer: サミー（製造: 銀座）
formalModel: e東京リベンジャーズGFEC
releaseDate: 2025-07-07
modelType: ミドル / スマパチ / LT3.0 PLUS
gameType: 2種＋2種 / ST + 普図時短 / LT直撃型
jackpotProbability: 通常時 約1/319.7 / RUSH中 約1/99.9 / 時短中 約1/399〜1/399.6
initialPayout: 2R 約300個 または 10R×2 約3000個+α（払い出し）
rushEntryRate: LT「芭流覇羅決戦」直行50%; 時短100回からの引き戻し約22.2%を含むTOTAL約61%
rushContinuationRate: LTそのものがRUSH。ST144回、継続約77%（解析精密表記 約76.5%）
ltName: 芭流覇羅決戦
ltEntryRoute: 通常初当りの50%で直行。残り50%は「決戦前夜」時短100回へ移行し、時短中の大当りでLTへ突入。
ltEntryRate: 直行50%; 時短引き戻し込みTOTAL約61%（約61.1%表記あり）
ltContinuationRate: 約77% / ST144回（RUSH中当選約1/99.9）
ltPayoutStructure: LT中は約4500個+α 2.5% / 約3000個 47.5% / 約1500個 50.0%。3000個以上側の一部で上乗せ特化「渋谷JACK」へ。渋谷JACKは1500個上乗せが50%でループし、終了後はLTへ戻る。
totalPayoutDistribution: 特図1: 10R×2 約3000個+α + LT 4.0% / 2R 約300個 + LT 46.0% / 2R 約300個 + 時短100回 50.0%。特図2 LT中: 10R×3 約4500個+α 2.5% / 10R×2 約3000個 47.5% / 10R 約1500個 50.0%。時短中の特図2振り分けはLT中と異なる資料あり（4500個+α 0.25% / 3000個 4.75% / 1500個 95%）。
timeShortening: LT=ST144回。LT非直行初当り後=普図時短「決戦前夜」100回、時短中当選確率約1/399〜1/399.6、引き戻し約22.2%。
cTimeOrSpecialSystems: 渋谷JACK（1500個上乗せ50%ループ）。チャージ当り非搭載として紹介されるLT3.0 PLUS直撃型。
ceilingOrSupport: 遊タイムなし（公開解析上）
gameFlow: |
  通常時 約1/319.7
   ├─ 50% → LT「芭流覇羅決戦」ST144回
   └─ 50% → 「決戦前夜」時短100回
                 ├─ 引き戻し約22.2% → LT「芭流覇羅決戦」
                 └─ 非当選 → 通常時
  LT中 約1/99.9 / 継続約77%
   ├─ 約4500個+α 2.5% → LT継続（渋谷JACK）
   ├─ 約3000個 47.5% → LT継続
   └─ 約1500個 50% → LT継続
notes: |
  LT3.0 PLUSで実現した「319×LT直撃型」。通常RUSHと上位LTの二段階ではなく、芭流覇羅決戦自体がラッキートリガー。
  「RUSH合算突入率約61%」は直行50%と、非直行50%に付く時短100回の引き戻し約22.2%を合算した公表TOTAL値。
  継続率約77%と約76.5%は丸め差として扱いCONFLICTにしない。
  出玉は払い出し。3000個=1500個×2、4500個=1500個×3。上乗せ分は別途。
sources:
  - url: https://news.p-world.co.jp/articles/30756/yugitsushin
    sourceType: INDUSTRY
    retrievedAt: 2026-09-22
    supports: 型式、通常/右確率、TOTAL突入約61%、継続約77%、時短100回、1500/3000以上、渋谷JACK、2025年7月導入
  - url: https://news.p-world.co.jp/articles/31193/nippon
    sourceType: INDUSTRY
    retrievedAt: 2026-09-22
    supports: 2025-07-07全国導入
  - url: https://www.p-world.co.jp/machine/database/10262
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-22
    supports: 通常1/319.7、RUSH1/99.9、時短約1/399、ST144、時短100、TOTAL約61%、LT名称/ゲームフロー
  - url: https://hisshobon.com/machineinfo/98034/
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-22
    supports: 特図1/特図2詳細振り分け、渋谷JACK
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/325/kh03.php
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-22
    supports: 特図1、時短中/ LT中の特図2振り分け差、ST/時短回数
  - url: https://p-kn.com/pachinko/4329/
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-22
    supports: 2025-07-07導入、基本スペック照合
confidence: ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields: []
conflicts: []
