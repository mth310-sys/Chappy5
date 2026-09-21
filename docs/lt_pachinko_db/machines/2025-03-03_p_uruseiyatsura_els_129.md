# Pうる星やつら～Eternal Love Song～ 129ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pうる星やつら～Eternal Love Song～ 129ver.
manufacturer: ニューギン
releaseDate: 2025-03-03
modelType: ライト / 129 / LT
gameType: 1種2種混合 / ST型

jackpotProbability:
- 通常時: 1/129.77
- 右打ち中: 1/95.95

initialPayout:
- 3R: 約240個（払出）
- 初当り98%: 電撃RUSH
- 初当り2%: DESTINY ROAD

rushEntryRate: 100%
rushContinuationRate: 電撃RUSH 約54%（70回+残保留4。ST単体約52.0%に残保留引き戻しを加味）

ltName: 超電撃RUSH
ltEntryRoute:
- 電撃RUSH中、最大2回目の右打ち大当りでLT
- 初当り2%のDESTINY ROADは実質次回大当りまで。そこで大当り時50%でLT直行
- DESTINY ROAD大当りで電撃RUSHへ移行した場合も、次の右打ち大当りでLT到達
ltEntryRate: 通常初当り基準の総LT到達率は直接公表値未確認。独自合算せずUNVERIFIED。
ltContinuationRate: 約85%（174回+残保留4。ST単体約83.9%に残保留引き戻しを加味）

ltPayoutStructure:
- 右打ち中大当り: ALL 10R 約800個（払出）
- 超電撃RUSH中もALL 10R 約800個

totalPayoutDistribution:
- 初当り: 3R約240個、98%電撃RUSH / 2% DESTINY ROAD
- 右打ち: 10R約800個 100%

timeShortening:
- 電撃RUSH: 70回 + 残保留4
- DESTINY ROAD: 10000回（実質次回まで）
- 超電撃RUSH: 174回 + 残保留4
cTimeOrSpecialSystems: DESTINY ROAD
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時 1/129.77
   ↓ 初当り100%RUSH系へ
  98% → 電撃RUSH（70+残4、約54%）
          ↓ 右打ち大当りを最大2回
          超電撃RUSH（LT）
  2%  → DESTINY ROAD（10000回、実質次回）
          ↓ 大当り
          50% → 超電撃RUSH（LT）
          50% → 電撃RUSH → 次の右打ち大当りでLT
   ↓
  超電撃RUSH（174+残4、約85%）
  右打ち大当りはALL 10R約800個

notes:
- 2024年6月の319系 `Pうる星やつら～Eternal Love Song～` とは別スペック。
- 業界記事、必勝本、P-WORLDで2025-03-03全国導入、RUSH100%、電撃RUSH約54%、LT超電撃RUSH約85%、右打ちALL約800個が一致。
- 業界記事の「最大2連続の大当りで上位RUSH」は、必勝本の詳細経路（電撃RUSH中2回目、DESTINY ROAD経路）で補完。
- 総LT到達率は経路から計算可能でも、直接公表値を確認できないため推測値を登録しない。

sources:
- https://news.p-world.co.jp/articles/30263/greenbelt — ニューギン発表、RUSH100%、上位RUSH構造。取得 2026-09-21
- https://news.p-world.co.jp/articles/30247/greenbelt — 先行導入/全国導入3月3日、通常RUSH2回当選、初当り2%チャンス、ALL10R×約85%。取得 2026-09-21
- https://hisshobon.com/machineinfo/96447/ — 基本スペック、確率、回数、LT経路、出玉、遊タイム。取得 2026-09-21
- https://p.hisshobon.jp/machine/4484/1/107794 — LT詳細経路、残保留の扱い。取得 2026-09-21
- https://www.p-world.co.jp/machine/database/10221 — RUSH/LT継続率のST単体と残保留込み定義。取得 2026-09-21

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- ltEntryRate: UNVERIFIED（通常初当り基準の総LT到達率の直接公表値）
conflicts: []
