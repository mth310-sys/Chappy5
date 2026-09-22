# PA CYBORG009 RULE OF SACRIFICE LT99ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: PA CYBORG009 RULE OF SACRIFICE LT99ver.
manufacturer: ニューギン
formalModelName: PACYBORG009N2-K
releaseDate: 2025-07-07
modelType: 甘デジ / LT搭載
gameType: 一種二種混合 / 普図時短ST

jackpotProbability:
- 通常時・時短中: 1/99.9
- 加速RUSH・超加速RUSH中: 1/51.16

initialPayout:
- 3R: 270個（払い出し）

rushEntryRate:
- 初当り後は時短50回へ100%
- 時短50回の突破率: 約40%（大当りで加速RUSHまたは振り分けによりLT直行）
rushContinuationRate: 加速RUSH 約75%（ST70回）

ltName: 超加速RUSH
ltEntryRoute:
- 初当り3R → 時短50回 → 時短中大当りの9.5%（10R）で超加速RUSHへ直行
- 時短突破後の加速RUSH中大当りの9.5%（10R）で超加速RUSHへ
- 加速RUSH中10R比率は19.0%で、そのうち50%がDEAD HEAT BATTLE勝利=LTとなる構造（全大当り基準9.5%）。
ltEntryRate:
- 時短中・加速RUSH中大当りの9.5%
- P-WORLD掲載の通常遊技全体基準LT突入率: 約1/857
ltContinuationRate: 約95%（ST147回）

ltPayoutStructure:
- 超加速RUSH中: 10R 900個 19.0% / 9R 810個 1.0% / 8R 720個 1.5% / 7R 630個 2.0% / 6R 540個 2.0% / 5R 450個 4.5% / 4R 360個 20.0% / 3R 270個 50.0%。すべて超加速RUSH継続。

totalPayoutDistribution:
- 通常時: 3R 270個 + 時短50回 100%
- 時短中・加速RUSH中: 10R 900個 + LT 9.5% / 10R 900個 + 加速RUSH 9.5% / 9R 810個 + 加速RUSH 1.0% / 8R 720個 + 加速RUSH 1.5% / 7R 630個 + 加速RUSH 2.0% / 6R 540個 + 加速RUSH 2.0% / 5R 450個 + 加速RUSH 4.5% / 4R 360個 + 加速RUSH 20.0% / 3R 270個 + 加速RUSH 50.0%
- 超加速RUSH中: 10R 900個 19.0% / 9R 810個 1.0% / 8R 720個 1.5% / 7R 630個 2.0% / 6R 540個 2.0% / 5R 450個 4.5% / 4R 360個 20.0% / 3R 270個 50.0%。すべてLT継続。
- 出玉は払い出し。実獲得目安（例: 10R約800個、3R約240個）とは定義を分離。

timeShortening:
- 初当り後: 時短50回
- 加速RUSH: ST70回
- 超加速RUSH: ST147回

cTimeOrSpecialSystems: 普図時短を用いたRUSH構造
ceilingOrSupport: 遊タイム非搭載 / コンプリート機能搭載

gameFlow: |
  通常時（1/99.9）
   ↓ 初当り3R 270個
  時短50回（100%、突破約40%）
   ↓ 大当り
  9.5%: 10R 900個 → LT「超加速RUSH」直行
  その他: 加速RUSH（ST70回、約75%）
   ↓ 加速RUSH中大当り
  9.5%: 10R 900個 → LT「超加速RUSH」
  90.5%: 各ラウンド → 加速RUSH継続
   ↓
  超加速RUSH（ST147回、約95%）
   ↓ 大当り
  3R〜10R → 超加速RUSH継続

notes:
- 2024年のPA CYBORG009 RULE OF SACRIFICE、および199ver.とは別スペック。
- P-WORLD台紹介本文に「100回転の時短」とあるが、機種固有の詳細スペック、業界資料、一撃等は初回時短50回で一致するため50回を採用。P-WORLDの当該本文値は採用しない。
- 「RUSH突入率約40%」は初当り後50回時短の突破期待度。時短中大当りには9.5%のLT直行振り分けがあるため、下位加速RUSHだけの突入率と混同しない。
- P-WORLDがLT突入率約1/857を直接掲載しているため、経路値から独自合算せず直接値として保存。

sources:
- https://p-johojima.jp/new_machine/post-9306/ — ニューギン発表ベース業界記事、確率・RUSH/LT・振り分け・導入日
- https://news.p-world.co.jp/articles/31173/greenbelt — 業界記事、RUSH/LT構造・振り分け
- https://www.goraku-sangyo.com/ニューギン　パチンコ新機種「pa-cyborg009-rule-of-sacrifice-lt99ver-」を直/ — 業界記事、初回時短50回・基本確率
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/502/kh02.php — 詳細スペック、50/70/147回、払い出し、遊タイム/LT
- https://1geki.jp/pachinko/pa_cyborg009_ros99lt/51/ — 初回時短50回・突破約40%
- https://1geki.jp/pachinko/pa_cyborg009_ros99lt/53/ — 加速RUSH70回・約75%・10R時LTバトル
- https://www.p-world.co.jp/machine/database/10303 — LT突入率約1/857・機種概要

confidence:
- machine identity / release: INDUSTRY
- core probabilities / RUSH: ANALYSIS_HIGH
- LT name / route / continuation / payout: ANALYSIS_HIGH
- total LT arrival from normal play: ANALYSIS_SINGLE（P-WORLD直接値 約1/857）

missingFields: []

conflicts: []
