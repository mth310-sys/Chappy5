# Pゴブリンスレイヤー ラッキートリガーVer.

machineName: Pゴブリンスレイヤー ラッキートリガーVer.
manufacturer: JFJ / 藤商事系
releaseDate: 2024-05-07
modelType: ライト
status: COMPLETE_CORE
gameType: 1種2種混合 / ST
jackpotProbability: 通常時 約1/129.7 / 右打ち中 約1/51.0
initialPayout: 3R 約300個（払出）
rushEntryRate: 50%
rushContinuationRate: GOBLIN SLAY CHANCE 約70%（ST60回）
ltName: ULTIMATE RUSH
ltEntryRoute: GOBLIN SLAY CHANCE中の大当り約10%でLT発動。初回はソクゲキ演出を経由し、その後ULTIMATE RUSHへ。
ltEntryRate: GOBLIN SLAY CHANCE中大当りの約10%。通常初当り基準の総LT到達率は直接公表値未確認のため換算しない。
ltContinuationRate: 約90.4%（ST113回の引き戻し約89.3%＋ソクゲキ演出成功時の大当り期待度の合算）
ltPayoutStructure: ULTIMATE RUSH中は10R 約1000個 100%（V入賞条件・払出）
totalPayoutDistribution: 特図1 3R約300個→GOBLIN SLAY CHANCE 50% / 通常 50%。GOBLIN SLAY CHANCE中は10R約1000個→LT約10% / 下位RUSH継続約90%。ULTIMATE RUSH中10R約1000個 100%。
timeShortening: GOBLIN SLAY CHANCE 60回 / ULTIMATE RUSH 113回。ソクゲキは実質次回大当り濃厚の区間として資料記載。
cTimeOrSpecialSystems: ソクゲキ演出。LT当選時、次回大当り濃厚区間を経由する構造。
ceilingOrSupport: 遊タイム非搭載（解析資料）
gameFlow: |
  通常時 約1/129.7
   ↓ 初当り
  50% GOBLIN SLAY CHANCE（ST60） / 50% 通常へ
   ↓ RUSH中大当り約10%
  LT発動 → ソクゲキ
   ↓
  ULTIMATE RUSH（ST113）
   ↓
  TOTAL継続約90.4%
notes:
- 右打ち中大当りはALL約1000個、V入賞条件、払出表記。
- 約90.4%はST113回単独の89.3%ではなく、ソクゲキ成功時期待度を含むTOTAL値。
- 通常初当り基準の総LT到達率は推測計算しない。
sources:
- https://www.p-world.co.jp/machine/database/10028 — 基本スペック、RUSH/LT構造、90.4%定義（取得日 2026-09-21）
- https://www.pachibee.jp/machines/about/124040002 — 導入日、LT搭載、通常1/129.7、RUSH突入50%（取得日 2026-09-21）
- https://hisshobon.com/machineinfo/91877/ — 振り分け、LT約10%、ソクゲキ、LT継続率定義（取得日 2026-09-21）
- https://ps-mania.jp/pachinko/p-goblinslayer-129/ — ST60/113、出玉、遊タイム非搭載の照合（取得日 2026-09-21）
confidence: ANALYSIS_HIGH
missingFields: []
conflicts: []
qa:
- LT搭載確認: PASS
- 別スペック混同: PASS（1/129.7 LT Ver.）
- RUSH/LT確率混同: PASS
- 払出/獲得混同: PASS（約300/1000個は払出として記録）
- retrievedAt: 2026-09-21
