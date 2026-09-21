# e蒼天の拳 羅龍

machineName: e蒼天の拳 羅龍
manufacturer: サミー
formalModel: e蒼天の拳羅龍SREN
releaseDate: 2025-02-03
modelType: スマパチ / 約1/399図柄揃い帯
gameType: 一種二種混合 / 普図ST / 直LT型
jackpotProbability: 図柄揃い 約1/399.1; 羅龍チャージ 約1/372.8; 合算 約1/192.8; 時短中 約1/319.7; LT初回 約1/88.8、2連目以降 約1/95.1
initialPayout: 図柄揃い 5R 約750個（払出）。羅龍チャージ 2R 約300個（払出）
rushEntryRate: 真・蒼拳RUSH(LT)トータル約57%（時短引き戻し込み。必勝本詳細約57.3%）
rushContinuationRate: 下位の蒼拳RUSHは時短50回で引き戻し約14.5%。独立した下位連チャンRUSHではなくLT再抽選区間
ltName: 真・蒼拳RUSH
ltEntryRoute: [1]図柄揃い時50%で直行 [2]非突入図柄揃い後の蒼拳RUSH（時短50回）で引き戻し [3]羅龍チャージの約0.2%
ltEntryRate: トータル約57%（時短引き戻し込み）
ltContinuationRate: 約80%（詳細約79.5%。2連目以降は1G連振り分け込み）
ltPayoutStructure: 特図2は約2400個+1G連 10% / 約2400個 90%。約2400個=約1200個×2回。払出
 totalPayoutDistribution: 特図1図柄揃いは約750個+LT(ST140) 50% / 約750個+時短50 50%。羅龍チャージは約300個で約0.2%LT、約99.8%通常。特図2はALL約2400個、うち10%はさらに1G連+約2400個
 timeShortening: 蒼拳RUSH 時短50回; 真・蒼拳RUSH ST140回; 普電STのため残保留抽選なし
 cTimeOrSpecialSystems: 羅龍チャージ約1/372.8、当選時約0.2%でLT。LT中10%で1G連
 ceilingOrSupport: 遊タイム非搭載
 gameFlow: |
  通常時
   ↓ 図柄揃い約1/399.1
   ├─50% → 約750個 → 真・蒼拳RUSH(LT) 140回
   └─50% → 約750個 → 蒼拳RUSH 時短50回
                       ├─引き戻し → 真・蒼拳RUSH(LT)
                       └─失敗 → 通常時
  通常時
   ↓ 羅龍チャージ約1/372.8
   ├─約0.2% → 真・蒼拳RUSH(LT)
   └─約99.8% → 通常時
  LT中 → ALL約2400個、10%は1G連を伴う → ST140回継続 / スルーで通常時
notes: RUSH突入=LT発動の直LT設計。資料上「RUSH突入率約57%」は図柄揃い50%直行だけではなく時短50回の引き戻しを含む。Amusement Japanは公式製品サイトを併記し、図柄揃い50%、時短引き戻し、羅龍チャージ約0.2%の3経路を明示。約80%は2連目以降1G連込みの実質継続率。
sources:
- https://www.amusement-japan.co.jp/article/detail/10004627/ — 業界記事、メーカー発表ベース。直LT、主要確率・経路・出玉
- https://hisshobon.com/machineinfo/95631/ — 必勝本 基本スペック。合算、約57.3%、約79.5%、払出
- https://hisshobon.com/machineinfo/95633/ — 必勝本 LT解説。3突入経路、時短引き戻し約14.5%、残保留なし
- https://nana-press.com/kaiseki/machine/881/26080/ — なな徹。特図1/特図2振り分け照合
- https://1geki.jp/pachinko/e_soutenraryu/ — 一撃。型式、導入日、主要スペック照合
retrievedAt: 2026-09-21
confidence: INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields: none for mission core; 初当り全体（図柄揃い+チャージ）を分母とする独自LT到達率は公表トータル値と定義が異なるため算出しない
conflicts: none
