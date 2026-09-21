# eF彼女、お借りします

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: eF彼女、お借りします
manufacturer: SANKYO
releaseDate: 2025-06-02
modelType: ミドル / スマパチ / 超デカSTART
gameType: 1種2種混合 / ST型 / LT搭載
jackpotProbability: 通常時大当り約1/349.9（図柄揃い約1/499〜1/499.8、ヒロイン劇場/チャージ約1/1167の合算定義）; 右打ち図柄揃い約1/59.4
initialPayout: 図柄揃い約600個; ヒロイン劇場約300個（払い出し）
rushEntryRate: 図柄揃い時52%。全通常当選内訳では約600個+RUSH 36.4%、約600個+通常33.6%、約300個ヒロイン劇場30.0%（ヒロイン劇場の一部からRUSH経路あり）
rushContinuationRate: DREAM RUSH 約70%
ltName: DREAM RUSH極 / ヒロインRUSH
ltEntryRoute: DREAM RUSH（ST70回）中に大当りを2回獲得するとLTへ移行。ヒロイン劇場から一部DREAM RUSH突入経路あり。
ltEntryRate: RUSH中2回大当り達成が条件。通常初当り全体基準の総LT到達率は直接公表値を十分な横断後も確認できず UNVERIFIED_AFTER_RESEARCH（経路確率から独自合算しない）。
ltContinuationRate: 約82%
ltPayoutStructure: 右打ち大当り1セットは特図2大当り（1200個or300個）5回分の合計。約1500個46% / 約2400個39% / 約3300個13% / 約4200〜6000個2%。LT中は同出玉振り分けでST100回継続。
totalPayoutDistribution: 通常時 約600個+RUSH 36.4% / 約600個+通常33.6% / 約300個ヒロイン劇場30.0%（一部RUSH）。右打ち 約1500個46% / 約2400個39% / 約3300個13% / 約4200〜6000個2%。
timeShortening: DREAM RUSH ST70回; LT DREAM RUSH極/ヒロインRUSH ST100回
cTimeOrSpecialSystems: 超デカSTART。ヒロイン劇場（チャージ）から一部RUSH突入あり。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時
   ↓ 約1/349.9（図柄揃い約1/499系 + ヒロイン劇場合算）
  図柄揃い → 52% DREAM RUSH / 48%通常
  ヒロイン劇場 → 原則通常、一部DREAM RUSH
   ↓
  DREAM RUSH（ST70回、約70%）
   ↓ RUSH中大当り2回獲得
  LT DREAM RUSH極 / ヒロインRUSH
   ↓
  ST100回、約82%、右打ち1回あたり約1500〜6000個
notes: |
  大当り約1/349.9と図柄揃い約1/499系は分母定義が異なるため分離。RUSH突入52%は図柄揃い時の条件付き値であり、通常当選全体では36.4%の図柄揃いRUSH振り分けが確認される。右打ち出玉1500〜6000個は特図2大当り5回分の合算払い出し。通常初当り全体からのLT総到達率は推測しない。
sources:
  - url: https://www.p-world.co.jp/machine/database/10253
    sourceType: industry/database
    retrievedAt: 2026-09-22
    confirms: LT搭載、図柄揃い時RUSH52%、DREAM RUSH約70%/ST70、2回大当りでLT、LT約82%/ST100、右打ち1500〜6000個
  - url: https://hisshobon.com/machines/e%E3%83%95%E3%82%A3%E3%83%BC%E3%83%90%E3%83%BC%E5%BD%BC%E5%A5%B3%E3%80%81%E3%81%8A%E5%80%9F%E3%82%8A%E3%81%97%E3%81%BE%E3%81%99/
    sourceType: analysis
    retrievedAt: 2026-09-22
    confirms: DREAM RUSH極の解析ページ/基本スペック・振り分け系統
  - url: https://altema.jp/pachimo/ekanokari
    sourceType: analysis
    retrievedAt: 2026-09-22
    confirms: 1/349.9合算、図柄揃い約1/499、チャージ約1/1167、RUSH52%、1/59.4、ST70/100、右打ち振り分け
  - url: https://pachinko-curation.com/55619/
    sourceType: industry/official-PV report
    retrievedAt: 2026-09-22
    confirms: SANKYO公式PV由来 LT約82%、右打ち最大6000個
confidence: ANALYSIS_HIGH
missingFields:
  - 通常初当り全体基準の総LT到達率: UNVERIFIED_AFTER_RESEARCH
  - ヒロイン劇場からDREAM RUSHへ移行する具体割合: UNVERIFIED_AFTER_RESEARCH
conflicts: []
