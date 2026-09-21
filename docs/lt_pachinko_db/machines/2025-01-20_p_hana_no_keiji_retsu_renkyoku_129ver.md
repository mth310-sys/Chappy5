# P花の慶次～裂 蓮極129ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P花の慶次～裂 蓮極129ver.
formalModel: P花の慶次～裂N2-VC
manufacturer: ニューギン
releaseDate: 2025-01-20
modelType: ライト / 129帯
gameType: 一種二種混合 / c時短搭載 / 転落型RUSH / ラッキートリガー
jackpotProbability: 通常時 約1/129.77 / 右打ち中 約1/49.98
initialPayout: 2R 約300個（払出）
rushEntryRate: 50%
rushContinuationRate: 約70% TOTAL（煌戦MODE継続約55% + 殿MODE引き戻し約33.3%を含む合算）
ltName: 極煌戦MODE（極殿MODEと合わせた「蓮極ループ」）
ltEntryRoute: 通常時初当り50%で煌戦MODEへ。煌戦MODE/殿MODE中の右打ち大当りの15%（10R約1500個）がLT突入契機。
ltEntryRate: RUSH中大当りの15%。通常初当り基準の総LT到達率は直接公表値未確認のためUNVERIFIED。
ltContinuationRate: 約91% TOTAL（極煌戦MODE継続約85.8% + 極殿MODE引き戻し約33.3%を含む合算）。残保留引き戻し時は通常の煌戦MODEへ戻る場合があるため、永続的にLT状態のみを91%で反復する意味ではない。
ltPayoutStructure: LT中（特図2）10R約1500個 50% / 2R約300個 50%（払出）。
totalPayoutDistribution: 特図1=2R約300個+RUSH 50% / 2R約300個+通常 50%。通常RUSH中特図2=10R約1500個+LT 15% / 10R約1500個+RUSH継続 35% / 2R約300個 50%。LT中=10R約1500個 50% / 2R約300個 50%。
timeShortening: 0 / 15 / 1000回。煌戦MODEは大当りまたは転落まで、転落後は殿MODE（時短15回+残保留）。極煌戦MODEも転落後に極殿MODEへ移行するループ構造。
cTimeOrSpecialSystems: c時短（特定図柄時短）搭載。通常RUSH転落率 約1/61.07、LT側転落率 約1/193.8。殿MODE/極殿MODEの引き戻し率は残保留込み約33.3%。
ceilingOrSupport: 確認したLT資料では遊タイム対象として扱わない（同時導入のPA花の慶次～裂99ver.の遊タイムと混同しない）。
gameFlow: |
  通常時（約1/129.77）
   ↓ 初当り 2R約300個
  50% → 煌戦MODE / 50% → 通常へ
   ↓ 煌戦MODE（大当り約1/49.98、転落約1/61.07）
  転落 → 殿MODE（時短15回+残保留、引き戻し約33.3%）
   ↓ 右打ち大当りの15%（10R約1500個）
  LT「極煌戦MODE」
   ↓ 極煌戦MODE（転落約1/193.8）↔ 極殿MODE
  TOTAL継続 約91%
  ※残保留での大当り引き戻し時は煌戦MODEへ移行する仕様がある。
notes: |
  「約70%」「約91%」はいずれも単一区間の継続率ではなく、転落型MODEと殿MODE系の引き戻しを合わせたTOTAL値。
  業界記事では型式名P花の慶次～裂N2-VC、通常約1/129.77、右約1/49.98、RUSH50%/約70%、LT約91%を確認。
  P-WORLD・一撃・解析資料でLT搭載、右打ち50%1500個、LT突入契機15%を照合。
  同時期のPA花の慶次～裂99ver.は別スペックであり、本レコードに混入させない。
sources:
  - url: https://news.p-world.co.jp/articles/29546/yugitsushin
    type: INDUSTRY
    note: 型式名、通常/右確率、RUSH突入/継続、LT継続、1500個50%
  - url: https://www.p-world.co.jp/machine/database/10181
    type: INDUSTRY_DATABASE
    note: LT搭載、RUSH/LTゲームフロー、継続率定義、1500個50%
  - url: https://1geki.jp/pachinko/p_hanakei_retsu129/
    type: ANALYSIS_HIGH
    note: 型式名、導入日、各確率、転落率、時短、出玉
  - url: https://chonborista.com/pachinko/newgin/224418/
    type: ANALYSIS_HIGH
    note: 特図1/特図2振り分け、LT突入15%、時短0/15/1000、払出
  - url: https://news.p-world.co.jp/articles/30030/greenbelt
    type: INDUSTRY
    note: 2025-01-20全国導入、129ver.がLT搭載、99ver.との別仕様確認
confidence: ANALYSIS_HIGH
missingFields:
  - 通常初当り基準の総LT到達率（経路値から独自合算せずUNVERIFIED）
conflicts: none
