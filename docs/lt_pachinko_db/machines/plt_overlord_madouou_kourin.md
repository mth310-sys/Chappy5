# PLT OVERLORD魔導王光臨

取得日: 2026-09-21
status: COMPLETE_CORE

machineName: PLT OVERLORD魔導王光臨
manufacturer: サンセイアールアンドディ
releaseDate: 2024-03-04
modelType: ライトミドル / LT搭載
gameType: ST + 時短（LT上位ST）
jackpotProbability: 大当り確率 1/197.9。液晶図柄揃い確率 1/329.9（2R大当りからST148回突入となるケースを含めた合算期待値の注記あり）。右打ち中実質 1/88.2。
initialPayout: 3R 約300個、2R 約200個（払出）。液晶図柄揃い時の主要初当りは3R。
rushEntryRate: トータルST突入率 約63%（液晶図柄揃い約1/329におけるST直行50% + 時短100回引戻し率26.22%の合算）。
rushContinuationRate: OVER RUSH（ST120回）約75%。
ltName: OVER MAX
ltEntryRoute: 主経路は (1) 液晶図柄揃い時の25.0%（3R+ST148回 24.2% + 2R+ST148回 0.8%）でOVER MAX直行、(2) 時短100回中の引戻し大当りの33%でOVER MAX、(3) OVER RUSH中大当りの一部でOVER MAX移行。通常時の「ハムスケチャージ」一部からもOVER MAXへ入る説明あり。
ltEntryRate: 単一の「通常時初当りからの総LT到達率」は今回確認資料では明示なし。液晶図柄揃い時は25.0%直行、時短引戻し時は33.0%でLT。OVER RUSH中のLT移行は資料により「大当りの一部」とされ、販売実機系資料では0.25%表記を確認したため、総到達率へ推算せず注記扱い。
ltContinuationRate: 約82%（OVER MAX、ST148回の引戻し率。別資料では約81.5%表記もあるため「約82%」を主要公開値として採用）。
ltPayoutStructure: OVER MAX中の大当りは10R×2回=約2000個払出、ST148回へ。右打ち中は基本的にALL 2000個（10R×2回）設計。
totalPayoutDistribution: 通常時（2R通常大当り除く）= 3R約300個+ST148回 24.2%、2R約200個+ST148回 0.8%、3R約300個+ST120回 25.0%、3R約300個+時短100回 50.0%。時短中=10R×2+ST148回 33.0%、10R×2+ST120回 67.0%。ST中=10R×2+ST 100%（OVER MAX時148回、OVER RUSH時120回。OVER RUSH中大当りの一部でOVER MAX移行）。
timeShortening: 時短100回、ST120回（OVER RUSH）、ST148回（OVER MAX）。
cTimeOrSpecialSystems: LT「OVER MAX」。Cタイム表記は今回確認できず。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時
   ↓ 液晶図柄揃い / ハムスケチャージ等
  ├─ OVER MAX（ST148回・LT）直行
  ├─ OVER RUSH（ST120回）
  └─ ナザリックLORD（時短100回）
       ↓ 引戻し
       ├─ 33% OVER MAX（LT）
       └─ 67% OVER RUSH
  OVER RUSH中大当り
   ↓ 一部でLT移行
  OVER MAX（ST148回・約82%継続、右打ち大当り約2000個払出）
notes: 2025-02-03導入の「PLT OVERLORD魔導王光臨129ver.」は別スペックのため除外。2024-03-04導入初代のみを記録。液晶図柄揃い1/329.9と条件装置作動を含む大当り確率1/197.9を混同しない。出玉は払出表記で統一。

sources:
- https://news.p-world.co.jp/articles/26414/greenbelt — グリーンべると（業界記事、メーカー発表内容）。導入日、LT搭載第1弾、1/329.9、右1/88.2、ST突入約63%、OVER RUSH約75%、OVER MAX約82%、通常/時短振り分け。取得日 2026-09-21。
- https://www.p-world.co.jp/machine/database/9975 — P-WORLD機種DB。1/197.9と液晶図柄揃い1/329.9の定義、各ST/時短回数、払出、振り分け、ゲームフローを照合。取得日 2026-09-21。
- https://nana-press.com/kaiseki/machine/696/18991/ — なな徹。仕様、一種二種混合、各確率、電サポ、遊タイム非搭載、振り分けを照合。取得日 2026-09-21。
- https://p-kn.com/pachinko/4085/ — K-Navi。2024-03-04導入、液晶図柄揃い時25% LT直行、時短引戻し時33% LTを照合。取得日 2026-09-21。
- https://home-slot.net/SHOP/p-sansei251.html — 販売実機系資料。OVER RUSH中大当りの0.25%でOVER MAX移行との補足値を確認。ただし優先度が低いため総LT到達率計算には使用せず。取得日 2026-09-21。

confidence: INDUSTRY / ANALYSIS_HIGH（主要スペックは業界記事+複数解析DB一致）
missingFields:
- 通常時初当りを分母とした単一の総LT到達率は明示資料未確認。
- OVER RUSH中LT移行率0.25%は低優先度資料でのみ具体値確認のため主要確定値には採用せず。
conflicts:
- OVER MAX継続率は主要資料で約82%、販売実機系資料で約81.5%表記。丸め差の可能性が高いが平均せず、主要公開値「約82%」を採用し注記。
