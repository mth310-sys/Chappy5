# Pフィーバー彼女、お借りします LT-Light ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: Pフィーバー彼女、お借りします LT-Light ver.
manufacturer: SANKYO
formalModel: Pフィーバー彼女、お借りしますLR
inspectionNumber: 5P0526
releaseDate: 2026-01-05
modelType: ライトミドル / 超デカSTART
gameType: 一種二種混合 / ST型 / LT搭載
jackpotProbability:
- 通常時図柄揃い: 約1/189.7
- DREAM RUSH中図柄揃い: 約1/72.5（特図2。普図ロング開放当選時、特図2実質1/1当選を経て大当り）
- LT中図柄揃い: 約1/36.7（特図2。同上）
initialPayout:
- 10R: 約1000個（払出）
- 4R: 約400個（払出）
rushEntryRate:
- 図柄揃い時 約50%（詳細解析値50.1%）
rushContinuationRate:
- DREAM RUSH: 約50%
- ST50回
ltName: DREAM RUSH極 / ヒロインRUSH
ltEntryRoute:
- 初当りからDREAM RUSHへ突入し、DREAM RUSH中に大当りを2回獲得するとLT発動
- メーカー/業界資料とも「右打ち中に2回大当り」でLT突入する仕様を明示
ltEntryRate:
- 通常遊技全体基準の総LT到達率/到達確率: UNVERIFIED_AFTER_RESEARCH
- 経路条件は「DREAM RUSH中に大当り2回」。公表されていない総到達率を経路値から独自算出しない
ltContinuationRate:
- DREAM RUSH極 / ヒロインRUSH: 約86%
- ST70回
ltPayoutStructure:
- 特図2大当りのセット払出: 約800個 50% / 約1400個 38% / 約2000〜3200個 12%
- 上記は特図2大当り（約800個または約200個）4回分の合計値。単一大当りのラウンド出玉と混同しない
totalPayoutDistribution:
- 特図1/通常時（解析詳細）: 約1000個 + DREAM RUSH 6.0% / 約400個 + DREAM RUSH 44.1% / 約400個 + 通常 49.9%
- 特図2: 約800個 50% / 約1400個 38% / 約2000〜3200個 12%。RUSHまたはLTへ移行し、LT到達条件は右打ち中2回大当り
- 基本ラウンド払出: 2R約200個 / 4R約400個 / 8R約800個 / 10R約1000個
timeShortening:
- DREAM RUSH: ST50回
- DREAM RUSH極 / ヒロインRUSH: ST70回
- 電サポ: 0 / 50 / 70回
cTimeOrSpecialSystems:
- 超デカSTART搭載
- 右打ち中は普図ロング開放当選→特図2実質1/1当選を経て図柄揃いとなる仕様。約1/72.5・約1/36.7の定義を通常時大当り確率と混同しない
ceilingOrSupport: 遊タイム非搭載（なな徹解析）
gameFlow: |
  通常時（図柄揃い約1/189.7）
   ↓ 初当り
  約50% → DREAM RUSH（ST50回・継続約50%）
  約50% → 通常時
   ↓ DREAM RUSH中に大当り
  1回目 → DREAM RUSH継続
   ↓ 右打ち中2回目の大当り獲得
  LT発動 → DREAM RUSH極 / ヒロインRUSH
   ↓
  LT（ST70回・継続約86%）
   ↓ STスルー
  通常時
notes:
- SANKYO公式スペックが通常約1/189.7、RUSH中約1/72.5、LT中約1/36.7、RUSH50回/約50%、LT70回/約86%、特図1 400/1000個、特図2 800〜3200個を明示。
- 遊技通信は正式型式、2026-01-05導入、右打ち中2回大当りでLT突入を明示。
- 特図2の約800〜3200個は4回分の合計値。SANKYO公式注記に従い単一大当り出玉として扱わない。
- 解析詳細のRUSH突入50.1%と公式「約50%」は丸め/詳細値の関係でCONFLICTではない。
- 右打ち出玉の12%は約2000〜3200個のレンジ。内訳を確認できない値に分解しない。
- 2025年導入のスマパチ版 `eフィーバー彼女、お借りします` と別スペック。
sources:
- https://www.sankyo-fever.jp/products/machine_list/prn/spec/ — メーカー公式。通常/右確率、RUSH/LT回数・継続、払出、特図2合算注記。取得2026-09-23
- https://news.p-world.co.jp/articles/32130/yugitsushin — 遊技通信。型式 `Pフィーバー彼女、お借りしますLR`、一種二種混合、右打ち中2回大当りでLT、2026-01-05導入。取得2026-09-23
- https://pachimaga.com/free/mach/maker-p/sankyo/064530.php — パチマガスロマガFREE。型式、導入日、下位RUSH50回/約50%、2回継続でLT、LT70回/約86%。取得2026-09-23
- https://nana-press.com/kaiseki/machine/1083/33210/ — なな徹。基本仕様、遊タイム非搭載、ラウンド別払出。取得2026-09-23
- https://nana-press.com/kaiseki/machine/1083/ — なな徹。特図2約800個50% / 約1400個38% / 約2000〜3200個12%、4回分合計注記。取得2026-09-23
- https://1geki.jp/pachinko/p_kanokari_light/51/ — 一撃。DREAM RUSH ST50回、約1/72.5、約50%、2回大当りでLT。取得2026-09-23
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常遊技全体基準の総LT到達率/到達確率は直接公表値を確認できずUNVERIFIED_AFTER_RESEARCH
conflicts: none
