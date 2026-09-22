# e女神のカフェテラス

machineName: e女神のカフェテラス
manufacturer: JFJ（藤商事グループ）
releaseDate: 2025-08-18
modelType: スマパチ / ミドル帯
modelNumber: UNVERIFIED
status: COMPLETE_CORE
gameType: LT3.0 PLUS / BIGスタート / RUSH=LT直行型 / ST
jackpotProbability: 図柄揃い約1/399（解析値1/399.8）。大当り確率約1/348はTERRACE CHARGEからの突入を含む別定義。TERRACE CHARGE約1/2721（解析値1/2721.2）。
initialPayout: 図柄揃い約300個。TERRACE CHARGE約300個。
rushEntryRate: 図柄揃い時 約40%。下位RUSHなし、RUSH突入=LT。
rushContinuationRate: 下位RUSHなし。
ltName: 女神の交響曲 TIME（資料に「女神の交響曲」とする表記もあり）
ltEntryRoute: 7図柄揃いはLT直行。その他図柄揃いはハーレムチャレンジ成功でLT。図柄揃い時TOTAL約40%。TERRACE CHARGEの一部からLT昇格経路あり。
ltEntryRate: 図柄揃い時約40%。通常遊技全体を分母とする総LT到達率は直接公表値を確認できずUNVERIFIED。
ltContinuationRate: 約75%
ltPayoutStructure: 右打ち時 約4500個+α 25% / 約3000個 50% / 約1500個 25%、いずれも女神の交響曲 TIME継続。4500個+αは特図2大当り3回分以上、3000個は特図2大当り2回分の合計。LT初回の4500個は注記あり。
totalPayoutDistribution: 通常図柄揃い 約300個+LT 40% / 約300個+通常 60%。右打ちは4500個+α 25% / 3000個 50% / 1500個 25%。
timeShortening: LT 100回。LT中当選確率 約1/73（解析値1/73.6、電チューロング開放確率）。
cTimeOrSpecialSystems: BIGスタート。TERRACE CHARGEの一部からLT昇格あり。
ceilingOrSupport: 遊タイムの搭載根拠なし。
gameFlow: |
  通常時
   ↓ 図柄揃い（約1/399）
  7図柄揃い → LT「女神の交響曲 TIME」
  その他図柄 → ハーレムチャレンジ → 成功でLT / 失敗で通常
  （図柄揃い時LT突入TOTAL約40%）
   ↓
  女神の交響曲 TIME（ST100回 / 約75%）
   ↓ 大当り
  1500個 / 3000個 / 4500個+α → LT継続

  別経路: TERRACE CHARGE（約1/2721、約300個）の一部 → LT昇格
notes: 図柄揃い約1/399、大当り約1/348、TERRACE CHARGE約1/2721は定義を混同しない。RUSH=LTで通常RUSHは存在しない。3000/4500+αは複数回大当りの合計払い出しで単一大当り出玉ではない。情報島は右打ち4500個+αを25%として掲載し、SLOT HACK検索結果には別注記由来の6%断片があるため、詳細振り分けは情報島の機種スペックを採用。総LT到達率は経路から独自算出しない。
sources:
  - url: https://p-johojima.jp/new_machine/post-10306/
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: JFJ製、導入8/18、LT3.0 PLUS、RUSH=LT、図柄揃い約1/399、LT約40%、ST100/約75%、TERRACE CHARGE経路。
  - url: https://p-johojima.jp/machine_spec/post-10366/
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: 基本スペック、通常/右打ち振り分け、複数回大当り合計の注記。
  - url: https://www.atari7.com/pachinko/e-megamicafe.php
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 図柄揃い/大当り/TERRACE CHARGEの分母定義、LT100回・約75%。
  - url: https://slothack.net/matome/166344/
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_SINGLE
    note: 1/399.8、1/2721.2、1/73.6等の詳細値照合。
confidence: INDUSTRY
missingFields:
  - 正式型式名は今回確認できずUNVERIFIED。
  - 通常遊技全体を分母とする総LT到達率の直接公表値。
  - TERRACE CHARGEからLTへ昇格する具体割合。
conflicts: []
