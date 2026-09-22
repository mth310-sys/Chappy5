# eフィーバーブルーロック

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: eフィーバーブルーロック
formalModelName: eフィーバーブルーロックMZ
manufacturer: SANKYO（製造元: ジェイビー）
releaseDate: 2025-09-08
modelType: ミドル / スマパチ / LT3.0 PLUS
gameType: 一種二種混合 / 普図転落タイプ / RUSH=LT直行型
jackpotProbability: 通常時図柄揃い 約1/399.9（大当り確率1/349.9） / 右打ち中図柄揃い 約1/33.2 / 記者会見（チャージ当り）約1/2110
initialPayout: 特図1 約1500個 / 約1050個 / 約300個（払い出し、振り分けによる）
rushEntryRate: LT「エゴイストBATTLE」トータル突入率 約55%
rushContinuationRate: RUSH=LTのため下位RUSHなし。エゴイストBATTLE継続率 約77%。
ltName: エゴイストBATTLE
ltEntryRoute: 通常時の全回転リーチ・3/7図柄揃い、その他図柄揃い後の最終試練チャレンジ成功、または記者会見（チャージ当り）演出成功から突入。
ltEntryRate: トータル約55%（特図1の1500個/1050個/300個RUSH突入大当りの合算に対する公表値）。通常図柄揃いの詳細振り分けは約0.1%+50%+4.6%=54.7%で、約55%表記と丸め整合する。
ltContinuationRate: 約77%（普電ショート開放/転落小当り 約1/108当選で終了）
ltPayoutStructure: 特図2 約9000個以上 0.5% / 約6000個 5.2% / 約4500個 19.8% / 約3000個 38.0% / 約1500個 36.5%。すべて終了後LT継続。3000個以上は1500個大当りの複数回合計で、9000個は1500個×6回。9000個以上契機ではエゴストラタイムにより1500個以上の追加が発生する場合がある。
totalPayoutDistribution: |
  特図1: 約1500個＋LT 0.1% / 約1050個＋LT 50.0% / 約300個＋LT 4.6% / 約1050個＋通常 45.3%。
  特図2: 約9000個以上＋LT 0.5% / 約6000個＋LT 5.2% / 約4500個＋LT 19.8% / 約3000個＋LT 38.0% / 約1500個＋LT 36.5%。
timeShortening: LT中は時短10000回表記。STではなく、約1/108の普電ショート開放（転落）当選まで継続する転落タイプ。
cTimeOrSpecialSystems: エゴイストATTACKは普電ロング開放発生率約1/29、特図2を5回転させる構造で引き戻し期待度約88%。5回転すべてで大当り時はエゴストラタイムへ移行し、次回1500個以上まで転落しない追加出玉区間となる。
ceilingOrSupport: コンプリート機能搭載。遊タイムの搭載根拠なし。
gameFlow: |
  通常時（図柄揃い約1/399.9 / 記者会見約1/2110）
   ↓
  全回転・3/7図柄揃い → LT直行
  その他図柄揃い → 最終試練チャレンジ成功でLT / 失敗で通常
  記者会見 → 演出成功でLT
   ↓ TOTAL約55%
  LT「エゴイストBATTLE」
   ↓ 普電ロング開放約1/29 → エゴイストATTACK → 特図2 5回転、成功期待約88%
  約1500〜9000個以上獲得 → LT継続
   ↓ 約1/108の普電ショート開放当選
  LT終了 → 通常時
notes: |
  本機は下位RUSHを持たずRUSH自体がラッキートリガーとなる直LT型。
  通常時「図柄揃い約1/399.9」と法定/大当り確率1/349.9は定義が異なるため分離保存する。
  右打ち図柄揃い約1/33.2は、普電ロング開放約1/29と特図2 5回転の成功期待約88%を経た図柄揃い確率として公表される。
  特図2の3000/4500/6000/9000個は単一大当り出玉ではなく1500個大当りの複数回合計。出玉は払い出し。
  業界記事のRUSH突入55%・継続77%、SANKYO公式の詳細構造、P-WORLDの振り分けが整合。競合なし。

sources:
  - url: https://www.sankyo-fever.jp/collection/986/
    retrievedAt: 2026-09-22
    confidence: OFFICIAL
    note: 型式MZ、通常図柄揃い約1/399.9、大当り1/349.9、右打ち約1/33.2、転落約1/108、継続約77%、特図2出玉振り分け、払出定義。
  - url: https://news.p-world.co.jp/articles/31122/greenbelt
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: SANKYO発表、2025-09-08導入、LT3.0 PLUS世代の製品情報。
  - url: https://news.p-world.co.jp/articles/31732/greenbelt
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: 導入日、RUSH突入約55%、継続約77%、右打ち1500〜9000個以上。
  - url: https://yugi-nippon.com/pachinko-new-machine/post-71654/
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: 製造元ジェイビー、型式MZ、一種二種転落タイプ、図柄揃い約1/399.9、突入55%、継続77%。
  - url: https://www.p-world.co.jp/machine/database/10302
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 記者会見約1/2110、特図1/特図2詳細振り分け、時短10000回、普電ロング/ショート開放条件、LT明記。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/542/kh04.php
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: RUSH=LT直LT型、記者会見経路、エゴイストATTACK5回転、エゴストラタイムのゲームフロー。

confidence: OFFICIAL
missingFields: []
conflicts: []
