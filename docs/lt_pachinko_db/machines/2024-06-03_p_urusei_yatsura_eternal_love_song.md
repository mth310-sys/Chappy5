# Pうる星やつら～Eternal Love Song～

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pうる星やつら～Eternal Love Song～
manufacturer: ニューギン
releaseDate: 2024-06-03
modelType: ミドル
gameType: 1種2種混合 / STタイプ / ラッキートリガー搭載
jackpotProbability:
- 通常時図柄揃い: 約1/319
- だっぴゃチャージ込み大当り: 1/211.41
- 右打ち中図柄揃い: 1/86.80
initialPayout:
- 2R: 約300個（払出）
- 10R: 約1500個（払出）
rushEntryRate: 図柄揃い時70%（電撃RUSHまたはDESTINY ROAD）
rushContinuationRate: 電撃RUSH 約77%（ST121回+残保留4個として公表資料で説明）
ltName: 超電撃RUSH
ltEntryRoute:
- 通常時HYPER DESTINY BONUS（10R）→ DESTINY ROAD（電サポ10000回、次回大当り濃厚）→ 次回大当りの50%でLT発動
- 電撃RUSH中の大当り時20.3%で内部LT準備状態へ移行 → 準備状態中に再度大当りでLT発動
ltEntryRate:
- メーカー発表系業界資料: 「RUSHの約3回に1回はLTを体感できる設計」
- DESTINY ROAD中次回大当り: LT 50%
- 電撃RUSH中大当り時: LT準備状態移行20.3%（準備状態で次回大当りが必要）
- 初当り基準の総LT到達率は直接公表値を確認できていないためUNVERIFIED。上記を掛け合わせた推測値は登録しない。
ltContinuationRate: 超電撃RUSH 約85%（ST160回+残保留4個）
ltPayoutStructure: 超電撃RUSH中の大当りはALL 10R約1500個（払出）
totalPayoutDistribution:
- 通常図柄揃い: 2R約300個または10R約1500個。図柄揃い時RUSH突入率70%。HYPER DESTINY BONUSは10R+DESTINY ROAD。
- 電撃RUSH中: 大当りALL約1500個。大当り時20.3%で内部LT準備状態へ。
- DESTINY ROAD中: 次回大当りALL約1500個、50%で超電撃RUSH / 50%で電撃RUSH。
- LT中: ALL約1500個。
timeShortening: 電撃RUSH 121回 / 超電撃RUSH 160回 / DESTINY ROAD 10000回。各RUSHの継続率資料は残保留引き戻し込み。
cTimeOrSpecialSystems: DESTINY ROAD（電サポ10000回・次回大当り濃厚）、内部LT準備状態
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時（図柄揃い約1/319、だっぴゃチャージ込み1/211.41）
   ↓ 図柄揃い
  RUSH非突入 / 電撃RUSH / HYPER DESTINY BONUS→DESTINY ROAD
   ↓ 電撃RUSH（121回、約77%）
  大当り時20.3%で内部LT準備状態 → 準備中に大当り
   ↓ または DESTINY ROAD次回大当りの50%
  LT「超電撃RUSH」（160回、約85%、右打ちALL約1500個）
   ↓ 駆け抜け
  通常時
notes:
- 型式名: Pうる星やつら2L2-K。
- 通常時とRUSH中の双方からLT到達ルートがある。
- 業界発表では「RUSHの約3回に1回はLTを体感」とされるが、初当り基準の総LT到達率とは定義が異なるため分離保存。
- 2025年129ver.は別スペックのため混同しない。
sources:
- https://news.p-world.co.jp/articles/27544/nippon — 遊技日本/P-WORLD転載。LT搭載、通常/RUSH双方からLTチャンス、RUSH約3回に1回LT体感、2024-06-03導入予定。
- https://news.p-world.co.jp/articles/27584/nippon — 遊技日本/P-WORLD転載。型式、図柄揃い約1/319、右1/86.80、RUSH70%、下位約77%、LT約85%、300/1500、ST121/160/10000、LT準備20.3%、DESTINY ROAD中LT50%。
- https://hisshobon.com/machineinfo/92427/ — パチ&スロ必勝本。1種2種混合、図柄揃い約1/319、右1/86.8、RUSH70%、ST121+4/160+4、払出300/1500、LT搭載、遊タイム非搭載、2024-06-03導入。
- https://p.hisshobon.jp/machine/4314/1/102201 — パチ&スロ必勝本。LT発動契機2系統、DESTINY ROAD 50%、LT準備状態20.3%を照合。
- https://news.p-world.co.jp/articles/27911/amusement — アミューズメントジャパン/P-WORLD転載。LT準備状態→次回大当りで発動、ST160、約85%を照合。
confidence: ANALYSIS_HIGH
missingFields:
- 初当り基準の総LT到達率（直接公表値）
conflicts: []
