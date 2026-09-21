# e閃乱カグラ

machineName: e閃乱カグラ
manufacturer: D-light（ディ・ライト / 大一商会グループ）
formalModel: e閃乱カグラLTM-JF
releaseDate: 2025-02-03
modelType: スマパチ / 約1/399図柄揃い帯
gameType: 一種二種混合 / 普図ST / RUSH=LT直行型
jackpotProbability: 図柄揃い 約1/399（詳細資料1/399.2）; 抜刀モード（チャージ）約1/368.5; RUSH中 約1/63.5
initialPayout: 図柄揃い 6R 約900個（払出）。抜刀モード（チャージ）2R 約300個（払出）
rushEntryRate: 絶・秘伝RUSH(LT) 約57%（時短50回の引き戻し込み）。図柄揃い時の直行は51%
rushContinuationRate: 独立した下位連チャンRUSHなし。非LT側は秘伝チャンス（時短50回）、引き戻し率約11.8%
ltName: 絶・秘伝RUSH
ltEntryRoute: [1]図柄揃い大当りの51%で直行 [2]残り49%の図柄揃い後に秘伝チャンス（時短50回）へ入り、その間の大当りでLT突入
ltEntryRate: 約57%（時短引き戻し込み）。一撃はRUSH=LT突入確率を約1/702と記載
ltContinuationRate: 約80%
ltPayoutStructure: LT中大当りはALL約2400個（約1200個×2回、払出）+ ST100回
totalPayoutDistribution: 特図1図柄揃いは約900個+ST100回(LT) 51% / 約900個+時短50回 49%。特図2は約2400個+ST100回 100%。抜刀モード（チャージ）は約300個
 timeShortening: 秘伝チャンス 時短50回; 絶・秘伝RUSH ST100回。普電タイプSTのためLTは100回スルーで通常へ戻り、残保留抽選なし
 cTimeOrSpecialSystems: 抜刀モード（チャージ）約1/368.5。図柄揃い確率約1/399表記は抜刀モード突入時の当りを除く
 ceilingOrSupport: 遊タイム非搭載
 gameFlow: |
  通常時
   ↓ 図柄揃い 約1/399（詳細1/399.2）
   ├─51% → 約900個 → 絶・秘伝RUSH(LT) ST100回
   └─49% → 約900個 → 秘伝チャンス 時短50回
                       ├─大当り（引き戻し約11.8%）→ 約2400個 → 絶・秘伝RUSH(LT)
                       └─失敗 → 通常時
  LT中（約1/63.5、ST100回、継続約80%）
   ↓ 大当り
  ALL約2400個（約1200個×2）→ ST100回再セット
   ↓ STスルー
  通常時
notes: RUSHそのものがLTとなる直LT型。メーカー発表ベースの大一販売プレスリリースはLT正式名称「絶・秘伝RUSH」、ALL2400個、継続約80%、2025-02-03導入を明示。業界記事、必勝本、一撃、なな徹で型式・51%直行・時短50回・TOTAL約57%・ST100回を照合。約57%は図柄揃い時51%直行率ではなく時短引き戻し込みTOTALであり分離保存。後発「P閃乱カグラ 189大入りver.」は別スペックのため混同しない。
sources:
- https://www.oricon.co.jp/pressrelease/2178458/ — 大一販売プレスリリース転載。LT正式名称、ALL2400個、継続約80%、導入日
- https://news.p-world.co.jp/articles/29850/yugitsushin — 遊技通信。型式、約1/399→約1/63.5、RUSH約57%、時短50回、ALL2400個、導入日
- https://hisshobon.com/machineinfo/95660/ — 必勝本。基本スペック、51%直行、時短引き戻し約11.8%、ST100回、LT搭載
- https://hisshobon.com/machineinfo/95662/ — 必勝本。LT突入経路、残保留なし、LT終了条件
- https://1geki.jp/pachinko/e_senrankagura/ — 一撃。型式 e閃乱カグラLTM-JF、RUSH=LT、約1/702、主要数値照合
- https://nana-press.com/kaiseki/machine/878/26518/ — なな徹。特図1 51%/49%、特図2 ALL2400個、払出定義照合
retrievedAt: 2026-09-21
confidence: OFFICIAL/INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields: none for mission core; 抜刀モードを含む全通常当りを分母とした独自LT到達率は公表TOTAL約57%と定義が異なるため算出しない
conflicts: none
