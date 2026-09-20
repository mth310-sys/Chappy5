# Pフィーバー機動戦士ガンダムSEED LT-Light ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pフィーバー機動戦士ガンダムSEED LT-Light ver.
formalModel: Pフィーバー機動戦士ガンダムSEED YZ
manufacturer: SANKYO
releaseDate: 2024-12-02
modelType: 強ライト / 約1/129.8
gameType: 一種二種混合 / 突破型 / ST / LT

jackpotProbability:
- 通常時: 約1/129.8
- アスランバトルモード図柄揃い: 約1/57.0
- フリーダムHYPER中: 約1/58.6

initialPayout:
- 1500個 + LT: 約1%
- 300個 + アスランバトルモード: 約99%
- 出玉は払出表記

rushEntryRate:
- フリーダムHYPER突入率: 約36%（初当り1% LT直行 + アスランバトルモード突破を含む公表値）
- アスランバトルモード突破率: 約35%
rushContinuationRate:
- フリーダムHYPER: ST70回、約70%

ltName: フリーダムHYPER（LT発動後）
ltEntryRoute:
- 通常時7図柄/1500個大当り 約1% → LT直行
- 通常初当りの約99% → アスランバトルモード → 突破 → 下位フリーダムHYPER → RUSH中1500個大当りの一部（全大当り比約10%）→ LT
ltEntryRate:
- 通常時LT直行: 約1%
- 下位RUSH大当り時: 1500個 + LT 約10%
- 通常初当り基準の総LT到達率: 直接公表固定値未確認のため推測しない
ltContinuationRate:
- LT発動後フリーダムHYPER: ST137回、約91%

ltPayoutStructure:
- 1500個 + LT継続: 約50%
- 300個 + LT継続: 約50%
- 払出表記

totalPayoutDistribution:
- 通常時: 1500個+LT 約1% / 300個+アスランバトルモード 約99%
- 下位RUSH: 1500個+LT 約10% / 1500個+下位RUSH 約40% / 300個+下位RUSH 約50%
- LT中: 1500個+LT 約50% / 300個+LT 約50%

timeShortening:
- フリーダムHYPER: 70回
- LT発動後: 137回
- アスランバトルモード: 普電ロング開放獲得前にショート開放転落を引く突破型。解析値では図柄揃い約1/57.0、転落約1/30.8

cTimeOrSpecialSystems: 確認なし
ceilingOrSupport: 遊タイムなし

gameFlow: |
  通常時 約1/129.8
   ├─ 約1% 1500個 → LTフリーダムHYPER（ST137 / 約91%）
   └─ 約99% 300個 → アスランバトルモード
                         ├─ 突破 約35% → フリーダムHYPER（ST70 / 約70%）
                         │                 ├─ 1500個+LT 約10% → LT
                         │                 └─ その他 → 下位RUSH継続
                         └─ 転落 → 通常

notes:
- 下位RUSHとLTはいずれも名称「フリーダムHYPER」だが、ST回数70回と137回で状態を分離する。
- RUSH突入約36%とアスランバトル突破約35%は分母/経路が異なるため混同しない。
- 2023年の319スペックとは別レコード。

sources:
- https://news.p-world.co.jp/articles/28954/greenbelt
  - retrievedAt: 2026-09-21
  - class: INDUSTRY
  - supports: release, probabilities, RUSH/LT structure, allocations, payout
- https://news.p-world.co.jp/articles/28971/amusement
  - retrievedAt: 2026-09-21
  - class: INDUSTRY
  - supports: release, LT 91%, 1500 ratio, battle structure, ST70/137
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/527/kh01.php
  - retrievedAt: 2026-09-21
  - class: ANALYSIS_HIGH
  - supports: formalModel, release, probabilities, lower/LT flow
- https://chonborista.com/pachinko/sankyo/225964/
  - retrievedAt: 2026-09-21
  - class: ANALYSIS_HIGH
  - supports: probability and time-shortening cross-check

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率は直接公表固定値未確認。経路から合算推測しない
conflicts: []

qa:
- LT搭載: CONFIRMED
- duplicate: NONE; 旧319版と分離
- rushVsLtProbability: SEPARATED
- payoutVsAcquired: PAYOUT_ONLY
- lowerVsLtSameName: ST70_VS_ST137_SEPARATED
- sourceCrossCheck: PASS
