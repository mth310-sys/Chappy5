# eGODZILLA7 TYPE-CRASH

machineName: eGODZILLA7 TYPE-CRASH
manufacturer: ニューギン
releaseDate: 2025-08-18
modelType: スマパチ / ライトミドル
modelNumber: eGODZILLA7M5
status: COMPLETE_CORE
gameType: LT3.0 PLUS / 一種二種混合 / ST・時短突破→LT ST
jackpotProbability: 通常時1/229.95。G-RUSH/LT中約1/107。ULTIMATE CHARGE中1/2.67。
initialPayout: 通常初当り3R 約300個（払い出し）。
rushEntryRate: 初当り後50%でG-RUSH（ST80回）、50%でG-TURN（時短50回）。初当り後100%いずれかの右打ち状態へ移行。
rushContinuationRate: G-RUSHの大当り突破期待度約53%。G-TURNの大当り突破期待度約20%。いずれも右打ち中に1回大当りすればLTへ移行。
ltName: ULTIMATE G-RUSH（UG-RUSH）
ltEntryRoute: 通常初当り→50% G-RUSH（ST80）または50% G-TURN（時短50）→各状態中に1回大当り→ULTIMATE G-RUSH。
ltEntryRate: 通常遊技基準 約1/635（詳細解析約1/635.48）。初当りから約36.2%。別解析の「約37%」は丸め表記として併記し、直接値1/635・約36.2%を優先。
ltContinuationRate: 約77.7%
ltPayoutStructure: LT中大当りは約1000個+LT 37.5% / ULTIMATE CHARGE+LT 62.5%。ULTIMATE CHARGEは約2000個36.6% / 約3000個38.5% / 約4000個19.1% / 約5000個+α5.8%。約2000～5000個は約1000個×2～5回の一連の大当り合計（払い出し）で、単一大当り出玉ではない。UC発動時平均約3000個。
totalPayoutDistribution: 通常時 約300個+G-RUSH 50% / 約300個+G-TURN 50%。右打ち時 ULTIMATE CHARGE+UG-RUSH 62.5% / ULTIMATE BONUS約1000個+UG-RUSH 37.5%。
timeShortening: G-TURN 時短50回 / G-RUSH ST80回 / ULTIMATE G-RUSH ST160回。G-TURN中の電チューロング開放確率1/229.95。
cTimeOrSpecialSystems: ULTIMATE CHARGEは大当り確率1/2.67、抽選5回の出玉可変型BONUS。初回以外の全保留が非当選の場合は再度UC発生。コンプリート機能搭載。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時（1/229.95）
   ↓ 初当り 約300個
  50% → G-RUSH（ST80回 / 大当り突破期待度約53%）
  50% → G-TURN（時短50回 / 大当り突破期待度約20%）
   ↓ どちらも右打ち中に1回大当り
  LT「ULTIMATE G-RUSH」（ST160回 / 約77.7%）
   ↓ 大当り
  約1000個 37.5% / ULTIMATE CHARGE 62.5%
   ↓
  ULTIMATE CHARGE: 約2000～5000個+α（平均約3000個）
   ↓
  ULTIMATE G-RUSH継続
notes: LT突入率は業界資料で約1/635・初当りから約36.2%、解析資料で約37%とされる。これは50%×約53%と50%×約20%を含むTOTALの丸め差として扱い、CONFLICTとはしない。パチマガスロマガの大規模シミュレート分析ではLT突入確率約1/635.48。右打ち62.5%のUC出玉2000～5000個+αは複数回大当りの合計払い出しであり、単発10R出玉1000個と混同しない。
sources:
  - url: https://p-johojima.jp/new_machine/post-9302/
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: 基本確率、G-RUSH/G-TURN突破率、LT160回/約77.7%、右打ち/UC振り分け。
  - url: https://p-johojima.jp/machine_spec/post-9312/
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: TOTAL LT約1/635・初当り約36.2%、通常/右打ち/UC振り分け、払い出し注記。
  - url: https://www.p-world.co.jp/machine/database/10320
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 1/229.95、G-RUSH ST80、G-TURN時短50、UG-RUSH ST160/約77.7%、UC62.5%。
  - url: https://p.hisshobon.jp/machine/4569/1/110291
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 一種二種混合、各右打ち回数・突破率、LTは右打ち中大当り100%、遊タイム非搭載。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/504/sm01.php
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 通常時50億回転シミュレートによるLT突入確率約1/635.48。
  - url: https://p-johojima.jp/new_machine/post-7984/
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: 型式eGODZILLA7M5の検定通過確認。
confidence: INDUSTRY
missingFields: []
conflicts: []
