# e 聖戦士ダンバイン3 ZEROSONIC

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e 聖戦士ダンバイン3 ZEROSONIC
manufacturer: 銀座（サミーブランド）
modelName: e聖戦士ダンバイン3GREA
certificationNumber: 5P0673
releaseDate: 2025-10-06
modelType: ライトミドル / スマパチ / LT3.0 PLUS
gameType: 一種二種混合 / ST型

## Core spec
- jackpotProbability:
  - 通常時: 約1/199.8
  - 右打ち中: 約1/29.1
- initialPayout / 通常時大当り振り分け:
  - 約1200個 + HYPERダンバインRUSH: 0.1%
  - 約360個 + 聖戦士RUSH: 50.0%
  - 約360個 + 通常: 49.9%
- rushEntryRate: 約50.1% TOTAL（通常時50.0%の下位RUSH + 0.1% LT直行）
- rushContinuationRate: 聖戦士RUSH 約70%
- timeShortening:
  - 聖戦士RUSH: ST30回 + 残保留4個
  - HYPERダンバインRUSH: ST66回 or 10000回 + 残保留4個

## Lucky Trigger
- ltName: HYPERダンバインRUSH
- ltEntryRoute:
  1. 通常時大当りの0.1%（約1200個）からLT直行
  2. 聖戦士RUSH中の大当りで約1200個振り分け（50%）を獲得するとLTへ
  3. 聖戦士RUSHのST30回終了後、残保留4個で大当りした場合はLT突入濃厚
- ltEntryRate:
  - 聖戦士RUSHからLTへのTOTAL昇格率: 約55%（業界資料の公表合算値）
  - 通常遊技全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（経路値から独自算出しない）
- ltContinuationRate: 約92%（ST66回+残保留4個とST10000回+残保留4個の引き戻し率の合算）
- ltPayoutStructure:
  - 約1200個 + LT継続: 50%
  - 約600個 + LT継続: 20%
  - 約300個 + LT継続: 30%
- totalPayoutDistribution:
  - 通常時: 1200個+LT 0.1% / 360個+聖戦士RUSH 50.0% / 360個+通常 49.9%
  - 聖戦士RUSH中: 1200個+LT 50% / 600個+聖戦士RUSH 20% / 300個+聖戦士RUSH 30%
  - LT中: 1200個+LT 50% / 600個+LT 20% / 300個+LT 30%
- cTimeOrSpecialSystems: 聖戦士RUSH残保留4個の大当りはLT突入濃厚。LT継続率はST10000回振り分けを含む合算。
- ceilingOrSupport: 遊タイム非搭載

## Game flow
通常時 約1/199.8
→ 大当り
  → 0.1%: 約1200個 → LT「HYPERダンバインRUSH」
  → 50.0%: 約360個 → 「聖戦士RUSH」ST30回 + 残保留4個
      → ST30回内の大当り
          → 50% 約1200個 → LT
          → 20% 約600個 → 聖戦士RUSH継続
          → 30% 約300個 → 聖戦士RUSH継続
      → ST30回終了後の残保留4個で大当り → LT突入濃厚
      → TOTAL LT昇格率 約55%
      → スルー → 通常時
  → 49.9%: 約360個 → 通常時

LT「HYPERダンバインRUSH」
→ ST66回 or 10000回 + 残保留4個 / 右打ち約1/29.1 / TOTAL継続約92%
→ 大当り: 約1200個 50% / 約600個 20% / 約300個 30%
→ いずれもLT継続
→ 規定回数スルー → 通常時

## Notes
- 業界一次系資料はRUSH突入率50.1%、解析詳細表は通常時50.0%下位RUSH + 0.1% LT直行。定義が整合するため競合ではない。
- 聖戦士RUSHからLTへの「約55%」は、ST中1200個振り分け50%だけではなく残保留4個でのLT突入を含むTOTAL昇格率として保存。
- LT継続約92%はST66回+残保留4個だけの単純値ではなく、ST10000回振り分けを含む合算値。
- 通常遊技全体基準の総LT到達率は直接公表値を十分な再探索後も確認できなかったため、入口50.1%や昇格約55%から独自算出しない。
- 出玉はすべて払出表記。

## Sources
1. 遊技通信 / P-WORLD業界ニュース — https://news.p-world.co.jp/articles/31513/yugitsushin — retrieved 2026-09-22 — INDUSTRY
2. グリーンべると / P-WORLD業界ニュース — https://news.p-world.co.jp/articles/31477/greenbelt — retrieved 2026-09-22 — INDUSTRY
3. P-WORLD機種DB — https://www.p-world.co.jp/machine/database/10324 — retrieved 2026-09-22 — ANALYSIS_HIGH
4. パチ&スロ必勝本 基本スペック — https://p.hisshobon.jp/machine/4586/1/110792 — retrieved 2026-09-22 — ANALYSIS_HIGH
5. パチ&スロ必勝本 大当り振り分け — https://hisshobon.com/machineinfo/98669/ — retrieved 2026-09-22 — ANALYSIS_HIGH
6. 情報島＋ 機種スペック — https://p-johojima.jp/machine_spec/post-12731/ — retrieved 2026-09-22 — INDUSTRY / ANALYSIS_HIGH
7. 1geki — https://1geki.jp/pachinko/e_dunbine3_zs/ — retrieved 2026-09-22 — ANALYSIS_HIGH
8. なな徹 — https://nana-press.com/kaiseki/machine/1034/31832/ — retrieved 2026-09-22 — ANALYSIS_HIGH

confidence: INDUSTRY / ANALYSIS_HIGH
missingFields:
- 通常遊技全体基準の総LT到達率（直接公表値）: UNVERIFIED_AFTER_RESEARCH
conflicts: none
