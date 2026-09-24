# eラグナドール 妖しき皇帝と終焉の夜叉姫

status: COMPLETE_CORE
retrievedAt: 2026-09-24

machineName: eラグナドール 妖しき皇帝と終焉の夜叉姫
formalModelName: eラグナドールCMB
inspectionNumber: 510956
manufacturer: メーシー（ユニバーサルエンターテインメント）
releaseDate: 2026-04-06
modelType: ライトミドル / スマパチ / LT3.0Plus / LT搭載
gameType: 一種二種混合 / c時短搭載 / ST型LT + 裏LT
jackpotProbability: 通常図柄揃い 約1/349.9 / 裏CHALLENGE(c時短) 約1/758.9 / 両者合算 約1/239.5 / RUSH中ラグナドATTACK(GOLD)発生 約1/79.2
initialPayout: 図柄揃い6R 900個、10R×2 3000個（払出）。裏CHALLENGEは出玉なし。
rushEntryRate: 約39%（通常時大当り+裏CHALLENGE合算を入口としたRUSH/LT突入率の公表値）
rushContinuationRate: 約80%（ラグナドRUSH、ST125回でのラグナドATTACK発生率。本機では通常RUSH自体が表LT）
ltName: ラグナドRUSH（表LT） / ラグナドRUSH GOLD（裏LT）
ltEntryRoute: 通常時合算当選のうち0.7%は3000個後ラグナドRUSH GOLD直行、34.2%は900個後ラグナドRUSH直行、31.6%は出玉なし裏CHALLENGE50回へ（成功率12%、成功後の裏CHAIN CHANCEからLT/裏LTへ）、33.5%は900個後通常へ。ラグナドRUSH中はラグナドATTACK成功時0.9%の3000個でGOLD直行、またCHAIN CHANCE→裏CHAIN CHANCE成功からGOLDへ昇格する経路あり。
ltEntryRate: 約1/620.1（通常時からラグナドRUSH/GOLDへ到達する直接解析値。大当り経由34.9%と裏CHALLENGE経由成功率12%を合算した定義）。図柄揃い時のLT突入率は51%。
ltContinuationRate: ラグナドRUSH 約80% / ラグナドRUSH GOLD 約80%（いずれも125回でのラグナドATTACK(GOLD)発生率）
ltPayoutStructure: ラグナドRUSHのATTACK成功時は3000個+GOLD 0.9% / 1500個+CHAIN CHANCE 49.8% / 1500個+RUSH 49.3%。ATTACK失敗時は出玉なしでST回数をリセットし状態継続。ラグナドRUSH GOLDのATTACK GOLD成功時は3000個+CHAIN CHANCE GOLD 7.9% / 3000個+GOLD継続 92.1%。3000個は1500個×2回の合計表現。CHAIN CHANCE(GOLD)成功期待度は約75%で1G連を獲得。
totalPayoutDistribution: 通常時(c時短含む合算)は3000個+GOLD 0.7% / 900個+RUSH 34.2% / 900個+時短なし33.5% / 出玉なし裏CHALLENGE 31.6%。表LT ATTACK成功時は3000個0.9% / 1500個99.1%。裏LT ATTACK GOLD成功時は3000個100%。
timeShortening: 裏CHALLENGE 50回（時短中確率 約1/399.6） / ラグナドRUSH 125回 / ラグナドRUSH GOLD 125回 / CHAIN CHANCE系は1G連チャンス。ATTACK(GOLD)失敗時はST回数リセット。
cTimeOrSpecialSystems: c時短「裏CHALLENGE」を通常時約1/758.9で抽選。50回・成功率12%。成功後は裏CHAIN CHANCEを経由し、ラグナドRUSHまたはラグナドRUSH GOLDへ。CHAIN CHANCE / 裏CHAIN CHANCE / CHAIN CHANCE GOLDは1G連チャンスで、成功期待度約75%。
ceilingOrSupport: 公開主要資料で遊タイム搭載根拠なし。
gameFlow: |
  通常時
   ├ 図柄揃い 約1/349.9
   └ 裏CHALLENGE(c時短) 約1/758.9
      （合算 約1/239.5）
   ↓
  0.7%: 3000個 → ラグナドRUSH GOLD（裏LT）
  34.2%: 900個 → ラグナドRUSH（表LT）
  33.5%: 900個 → 通常時
  31.6%: 出玉なし → 裏CHALLENGE 50回
                         ↓ 成功率12%
                       裏CHAIN CHANCE → LT / 裏LT

  ラグナドRUSH（表LT）
   ↓ ST125回 / ATTACK発生 約1/79.2 / 継続約80%
  ATTACK成功 → 1500個中心
   ├ 49.8% CHAIN CHANCE → 成功で1500個1G連、連鎖抽選
   ├ 49.3% RUSH継続
   └ 0.9% 3000個 → ラグナドRUSH GOLD
  ATTACK失敗 → ST125回へリセット
   ↓ 裏CHAIN CHANCE成功等
  ラグナドRUSH GOLD（裏LT）
   ↓ ST125回 / ATTACK GOLD発生 約1/79.2 / 継続約80%
  ATTACK GOLD成功 → ALL3000個
   ├ 7.9% CHAIN CHANCE GOLD → 約75%で3000個1G連
   └ 92.1% GOLD継続
  ATTACK GOLD失敗 → ST125回へリセット
notes: |
  本機は「ダブルラッキートリガー」を採用し、ラグナドRUSHが表LT、ラグナドRUSH GOLDが裏LT。下位の通常RUSHを経由してLTへ上げる構造ではなく、RUSH自体がLT。
  約1/239.5は出玉あり大当り1/349.9と出玉なしc時短・裏CHALLENGE1/758.9の合算であり、図柄揃い確率とは分離する。
  業界発表の「図柄揃い時LT突入51%」と、解析資料の「通常時合算からLT到達約1/620.1（RUSH突入約39%）」は分母定義が異なるため競合ではない。
  3000個は1500個×2回の合計表現で、単一大当りの出玉として扱わない。
  RUSH継続約80%はST125回でATTACKが発生する率。ATTACK発生後は成功約75%で出玉、失敗約25%では出玉なしSTリセットとなるため、単純な「大当り継続率」と混同しない。
sources:
  - url: https://news.p-world.co.jp/articles/32765/yugitsushin
    role: INDUSTRY / メーカー発表、型式、図柄揃い確率、表/裏LT名称・基本性能
    retrievedAt: 2026-09-24
  - url: https://news.p-world.co.jp/articles/32806/greenbelt
    role: INDUSTRY / 表LT約80%、CHAIN CHANCE、裏LT ALL3000構造
    retrievedAt: 2026-09-24
  - url: https://hazuse.com/hd/510956h/
    role: ANALYSIS_HIGH / 型式・検定番号・導入日・LT搭載確認
    retrievedAt: 2026-09-24
  - url: https://hazuse.com/machine/pachinko/PX0348/
    role: ANALYSIS_HIGH / 合算確率、LT突入約1/620、表/裏LT継続、裏LT構造
    retrievedAt: 2026-09-24
  - url: https://1geki.jp/pachinko/e_ragnador/
    role: ANALYSIS_HIGH / ゲームフロー、1/620.1定義、振り分け、CHAIN CHANCE/GOLD、払出と実獲得の区別
    retrievedAt: 2026-09-24
  - url: https://chonborista.com/pachinko/universal/253799/
    role: ANALYSIS_HIGH / 通常・LT・裏LT振り分け、c時短、125回、リセット構造
    retrievedAt: 2026-09-24
  - url: https://pachimaga.com/free/mach/maker-p/macy/064768.php
    role: ANALYSIS_HIGH / 型式、一種二種混合、通常合算構造、LT基本性能
    retrievedAt: 2026-09-24
confidence: INDUSTRY / ANALYSIS_HIGH cross-check
missingFields: []
conflicts: []
