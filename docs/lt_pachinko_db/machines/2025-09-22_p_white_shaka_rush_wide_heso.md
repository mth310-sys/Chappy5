# ～廻るヘソワイド～PホワイトシャカRUSH

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: ～廻るヘソワイド～PホワイトシャカRUSH
manufacturer: マルホン工業
formalModelCode: PシャカRUSH ZD
releaseDate: 2025-09-22
modelType: ライトミドル / LT搭載
gameType: 一種二種混合 / ST（下位50回、LT 50回 or 3000回=実質次回）

jackpotProbability:
- 通常時: 1/199.8
- RUSH中: 1/59.5

initialPayout:
- 2R 約220個（払出）

rushEntryRate: 50%
rushContinuationRate: Z超RUSH 約57%

ltName: Z超RUSH LT
ltEntryRoute:
- 通常初当り50%で下位「Z超RUSH」（ST50回）へ突入。
- Z超RUSH中の大当りの10.7%（5.1% + 5.6%）でLT「Z超RUSH LT」へ移行。
- 5.1%は約2200個 + LT/ST3000回、5.6%は約2200個 + LT/ST50回。

ltEntryRate:
- 下位Z超RUSH中大当り基準: 10.7%
- 通常遊技全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（経路値から独自合算しない）

ltContinuationRate: 約80%

ltPayoutStructure:
- LT中大当りはALL約2200個（10R約1100個 × 2回の合計払出）。
- 約2200個 + ST3000回（実質次回）: 52.3%
- 約2200個 + ST50回: 47.7%
- いずれもLT継続。

totalPayoutDistribution:
- 通常時: 2R約220個 + Z超RUSH/ST50回 50% / 2R約220個 + 通常 50%
- Z超RUSH中: 約2200個 + LT/ST3000回 5.1% / 約2200個 + LT/ST50回 5.6% / 約2200個 + 下位ST50回 89.3%
- Z超RUSH LT中: 約2200個 + LT/ST3000回 52.3% / 約2200個 + LT/ST50回 47.7%

timeShortening:
- 通常非突入: 0回
- Z超RUSH: 50回
- Z超RUSH LT: 50回 or 3000回（3000回は実質次回大当り濃厚として案内）

cTimeOrSpecialSystems:
- 「∞インフィニティBONUS」: ST3000回。LT中大当りの52.3%で選択され、実質次回大当りまで継続。
- 廻るヘソワイド搭載。

ceilingOrSupport: 遊タイム非搭載（解析資料で確認）

gameFlow: |
  通常時（1/199.8）
   ↓ 初当り
  50%: 2R約220個 → Z超RUSH（ST50回）
  50%: 2R約220個 → 通常
   ↓ Z超RUSH中大当り（1/59.5）
  10.7%: 約2200個 → Z超RUSH LT
    ├ 5.1%: ST3000回（実質次回）
    └ 5.6%: ST50回
  89.3%: 約2200個 → Z超RUSH/ST50回継続
   ↓ LT
  Z超RUSH LT（継続約80%）
   ↓ 大当りはALL約2200個
  52.3%: ST3000回（実質次回）
  47.7%: ST50回

notes:
- 2024-12導入「PシャカRUSH Z」のヘソワイド版。別スペックとして分離。
- 右打ち約2200個は単一10Rではなく、10R約1100個×2回の合計払出。単一大当り出玉と混同しない。
- 業界記事、情報島＋、1geki、HAZUSE、ぱちんこキュレーション等で通常1/199.8、右1/59.5、RUSH50%、下位約57%、LT約80%、下位大当り10.7% LTを一致確認。
- メーカー公式ニュースで本機スペックページ公開を確認。通常遊技全体基準の総LT到達率は直接公表値を確認できず、推測しない。

sources:
- https://maruhon-kogyo.co.jp/news/%EF%BD%9E%E5%BB%BB%E3%82%8B%E3%83%98%E3%82%BD%E3%83%AF%E3%82%A4%E3%83%89%EF%BD%9E-p%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%82%B7%E3%83%A3%E3%82%ABrush-%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E5%85%AC.html
- https://web-greenbelt.jp/post-101670/
- https://news.p-world.co.jp/articles/31636/greenbelt
- https://p-johojima.jp/new_machine/post-13521/
- https://1geki.jp/pachinko/p_white_shakarushz/
- https://1geki.jp/pachinko/p_white_shakarushz/51/
- https://hazuse.com/machine/pachinko/5P0545/
- https://pachinko-curation.com/56430/
- https://nana-press.com/kaiseki/machine/1020/31901/
- https://p-kn.com/pachinko/4384/

confidence:
- LT搭載: OFFICIAL / INDUSTRY
- 型式・導入日: ANALYSIS_HIGH（複数一致）
- 基本スペック・振り分け: INDUSTRY / ANALYSIS_HIGH（複数一致）
- LT名称・構造: INDUSTRY / ANALYSIS_HIGH

missingFields:
- 通常遊技全体基準の総LT到達率: UNVERIFIED_AFTER_RESEARCH

conflicts: none
