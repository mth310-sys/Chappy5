# eとある科学の超電磁砲 PHASE NEXT

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: eとある科学の超電磁砲 PHASE NEXT
manufacturer: オレンジ（藤商事グループ）
modelCode: eとある科学の超電磁砲 LTRSY
releaseDate: 2025-10-06
modelType: ライトミドル / スマパチ / LT3.0 PLUS
gameType: 2種 / 普図ST・直LT型
jackpotProbability: 通常時 1/169.7（特図1小当り確率）; 右打ち中 1/86.8（電チューロング開放確率）
initialPayout: 300個（V入賞が条件）
rushEntryRate: 約25%（初当り後の突破チャレンジ成功でLTへ直行）
rushContinuationRate: 下位RUSHなし。LT自体が約77%
ltName: 超超電磁砲（レールガン）RUSH
ltEntryRoute: 通常時初当り → 突破チャレンジ（1st / Final）→ TOTAL約25%成功 → LT発動。公開解説では各チャレンジ成功率約50%。
ltEntryRate: 約25% / 通常遊技基準の直接公表LT突入率 1/679
ltContinuationRate: 約77%
ltPayoutStructure: 電チュー入賞時 6000個 or 7500個+α 9.3% / 4500個 20.6% / 3000個 23.1% / 1500個 47.0%。3000個以上は特図2大当り複数回分の合計払出。7500個獲得時は1G連濃厚。
totalPayoutDistribution: ヘソ入賞時 300個+LT 約25% / 300個+通常 約75%。電チューは上記LT中振り分け。
timeShortening: LTは普図ST125回
cTimeOrSpecialSystems: LT3.0 PLUS。下位RUSHを介さず突破チャレンジからLTへ直接到達。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（特図1小当り 1/169.7）
   ↓ 初当り 300個
  突破チャレンジ
   ├─ 失敗 約75% → 通常時
   └─ 成功 TOTAL約25% → LT「超超電磁砲RUSH」
                         ↓ 普図ST125回 / 1/86.8 / 継続約77%
                         ↓ 大当り 1500～7500個+α
                         └─ 125回スルー → 通常時

notes:
- メーカー公式が通常1/169.7、LT突入約25%、LT突入率1/679、右打ち1/86.8、125回、継続約77%、主要出玉を直接掲載。
- 業界記事は初当り後1st/Finalの2段階チャレンジ（各約50%）を経てTOTAL約25%でLTと説明。下位RUSHは存在しない。
- 6000個/7500個+αの9.3%表記は同一振り分け枠。7500個は特図2大当り5回分以上、6000個は4回分の合計値。4500個は3回分、3000個は2回分。単一大当り出玉として扱わない。
- 情報島＋のページ見出しには更新日等の表示が混在するため、canonical導入日はメーカー公式動画・業界発表・複数解析が一致する2025-10-06を採用。

sources:
- https://www.fujimarukun.co.jp/products/e_railgun/ — メーカー公式。1/169.7、約25%、1/679、1/86.8、125回、約77%、出玉構造を確認。取得日 2026-09-22。confidence OFFICIAL
- https://news.p-world.co.jp/articles/31743/greenbelt — GreenBelt/P-WORLD業界記事。2025-10-06導入、初当り約1/167表記、1st/Final各約50%、TOTAL約25%、LT約1/679を確認。取得日 2026-09-22。confidence INDUSTRY
- https://hisshobon.com/machineinfo/98896/ — 必勝本。通常1/169.7、右1/86.8、LT1/679、約25%、125回、約77%、遊タイム非搭載を確認。取得日 2026-09-22。confidence ANALYSIS_HIGH
- https://hisshobon.com/machineinfo/98897/ — 必勝本。ヘソ25/75%、特図2 9.3/20.6/23.1/47.0%と複数大当り合計値の定義を確認。取得日 2026-09-22。confidence ANALYSIS_HIGH
- https://hisshobon.com/machineinfo/98898/ — 必勝本。LT名称、初当り約25%直行、125回スルー終了を確認。取得日 2026-09-22。confidence ANALYSIS_HIGH
- https://p-town.dmm.com/machines/4874/recommend — DMMぱちタウン。型式 eとある科学の超電磁砲 LTRSY、導入日、主要LT値を照合。取得日 2026-09-22。confidence ANALYSIS_HIGH

confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
missingFields: []
conflicts: []
