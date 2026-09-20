# P魔王学院の不適合者

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P魔王学院の不適合者
manufacturer: 藤商事
formalModelName: P魔王学院の不適合者FMY
releaseDate: 2024-06-03
modelType: ミドル / ライトミドル表記あり（図柄揃い1/399.9、チャージ合算大当り1/197.9）
gameType: 一種二種混合 / ST / LTストック型
jackpotProbability: 図柄揃い1/399.9。魔力CHARGE300約1/392.0。両者合算の大当り確率1/197.9。魔王学院RUSH中の電チューロング開放確率1/58.0。
initialPayout: 図柄揃い時2R約300個。魔力CHARGE300も約300個。
rushEntryRate: 図柄揃い時100%で魔王学院RUSH。魔力CHARGE300は一部のみRUSH突入だが割合のCore確定値は今回保存しない。
rushContinuationRate: 魔王学院RUSH 約75%（ST80回、当選確率1/58.0）。
ltName: 暴虐の魔王BURST
ltEntryRoute: 魔王学院RUSH中大当りの約25%でLIMITED BURST CHANCE（LBC）へ。LBC成功（約40%）でLT発動し暴虐の魔王BURSTへ。ストック消化後は魔王学院RUSHへ戻るため再度LTを狙える。
ltEntryRate: 初回図柄揃い後のLT到達率 約42%（業界記事の直接公表値）。LBC単発契機はRUSH大当りの約25% × LBC成功約40%。到達率42%はRUSH継続・再試行を含む公表値であり単純積算しない。
ltContinuationRate: 暴虐の魔王BURST突入時 約86%。ストック獲得率約51%。
ltPayoutStructure: 暴虐の魔王BURST中は10R約1500個（V入賞条件）100%。制限時間内のストック獲得成功でストックを保持し、ストックがなくなるまでループ。ストック消化後は下位RUSHへ復帰。
totalPayoutDistribution: 図柄揃い時: 2R約300個+魔王学院RUSH 100%。魔王学院RUSH中: 10R約1500個+LBC 約25%、10R約1500個+魔王学院RUSH 約75%。LBC/暴虐の魔王BURST中: 約1500個+暴虐の魔王BURST 100%（V入賞条件）。
timeShortening: 魔王学院RUSH ST80回。LBCは時間制限型のストック獲得チャンスで、通常ST回数と同一扱いしない。
cTimeOrSpecialSystems: 魔力CHARGE300（通常時約1/392.0）。LBC成功率約40%。暴虐の魔王BURSTのストック獲得率約51%。
ceilingOrSupport: 遊タイムの確認なし。コンプリート機能搭載。
gameFlow: |
  通常時
   ├─ 図柄揃い 1/399.9 → 約300個 → 魔王学院RUSH 100%
   └─ 魔力CHARGE300 約1/392.0 → 約300個 → 基本通常（一部RUSH）
  魔王学院RUSH（ST80回、継続約75%）
   ├─ 大当り約75% → 約1500個 → 魔王学院RUSH
   └─ 大当り約25% → 約1500個 → LIMITED BURST CHANCE
                                 ├─ 成功約40% → LT発動 → 暴虐の魔王BURST
                                 └─ 失敗 → 魔王学院RUSH
  暴虐の魔王BURST（LT、突入時継続約86%）
   └─ ストック獲得を繰り返す → ストック消化後は魔王学院RUSHへ復帰
notes: LT突入時期待値約11,345個は「LT突入までの平均出玉+LT突入以後の期待値」の合算。後発の甘デジ『PA魔王学院の不適合者 魔王再臨 99Ver』は別スペックであり混同しない。
sources:
  - https://news.p-world.co.jp/articles/27578/nippon
  - https://news.p-world.co.jp/articles/27579/greenbelt
  - https://www.pachibee.jp/machines/about/124040010
  - https://1geki.jp/pachinko/p_maougakuin/
  - https://1geki.jp/pachinko/p_maougakuin/51/
  - https://1geki.jp/pachinko/p_maougakuin/53/
  - https://hisshobon.com/machineinfo/92228/
confidence: INDUSTRY / ANALYSIS_HIGH（主要Core/LT値を業界記事と複数解析資料で照合）
missingFields: 魔力CHARGE300から魔王学院RUSHへ入る正確な割合は今回のCore公表資料で直接確定せず、推測しない。
conflicts: none for FMY core values. 後発FVX/99Ver由来の約92%等は別スペックとして除外。
