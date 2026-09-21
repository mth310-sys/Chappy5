# Pとある魔術の禁書目録2 Light PREMIUM 2000 ver.

machineName: Pとある魔術の禁書目録2 Light PREMIUM 2000 ver.
manufacturer: JFJ（藤商事グループ）
formalModel: Pとある魔術の禁書目録2 Light JWX
releaseDate: 2025-02-03
modelType: 甘デジ / ライトスペック 約1/99.9
gameType: 二種機 / 普図ST / 下位RUSH→LT昇格型
jackpotProbability: 通常時当選 約1/99.9（特図1小当りからのV当り、V入賞条件）; 右打ち中 電チューロング開放 約1/68.0
initialPayout: 特図1はALL約200個（払出）
rushEntryRate: 50%
rushContinuationRate: 最強激突(ヒーローズRUSH) 70回、約65%
ltName: 最強領域(ラッキートリガー)
ltEntryRoute: 最強激突(ヒーローズRUSH)中に右打ち大当りの約11%を占める約2000個大当り（特図2大当り2回分、V入賞条件）を獲得するとLT発動
ltEntryRate: 下位RUSH中の大当り1回あたり約11%。通常初当り基準の総LT到達率は直接公表値を確認できずUNVERIFIED（経路から独自合算しない）
ltContinuationRate: 約91%
ltPayoutStructure: LT中 約2000個 約11.0% / 約1150個 約44.5% / 約300個 約44.5%。いずれも特図2大当り2回分の合計払出、V入賞条件。LTはST162回再セット
totalPayoutDistribution: 特図1 約200個+最強激突RUSH 50% / 約200個+通常 50%。下位RUSH中 約2000個+LT 約11.0% / 約1150個+下位RUSH 約44.5% / 約300個+下位RUSH 約44.5%。LT中は約2000個 約11.0% / 約1150個 約44.5% / 約300個 約44.5%でLT継続
timeShortening: 最強激突(ヒーローズRUSH) 70回; 最強領域(LT) 162回。普図抽選のため残保留なし
cTimeOrSpecialSystems: none confirmed for LT route
ceilingOrSupport: 遊タイム非搭載として解析系資料で扱われる; LTコア構造への関与なし
gameFlow: |
  通常時 約1/99.9
   ↓ 初当り 約200個
   ├─50% → 最強激突(ヒーローズRUSH) 70回 / 約65%
   │          ↓ 右打ち当り 約1/68.0
   │          ├─約11% 約2000個 → 最強領域(LT) 162回 / 約91%
   │          └─約89% 約1150個or約300個 → 下位RUSH70回再セット
   └─50% → 通常時
  LT中 162回 / 約91%
   ↓ 右打ち当り
  約2000個11% / 約1150個44.5% / 約300個44.5% → LT162回再セット
   ↓ STスルー
  通常時
notes: JFJ公式製品ページで通常1/99.9、RUSH50%、下位70回/約65%、LT162回/約91%、右打ち主要出玉を確認。必勝本で下位RUSH中2000個振り分け約11%がLT唯一の発動契機であること、普図STゆえ残保留なしを確認。右打ち出玉はすべて特図2大当り2回分の合計払出であり単一大当り出玉と混同しない。P-WORLDもLT突入時期待出玉約11844個（LT発動まで平均約3175個+発動後期待約8669個）を掲載するが、これはLT突入率ではないためltEntryRateへ流用しない。
sources:
- https://www.fujimarukun.co.jp/products/p_toaru2ama/ — JFJ公式。通常1/99.9、RUSH50%、右1/68.0、70回/約65%、LT162回/約91%、主要出玉
- https://hisshobon.com/machineinfo/95695/ — 必勝本。特図1/特図2振り分け、下位RUSH2000個約11%でLT
- https://p.hisshobon.jp/machine/4455/1/106860 — 必勝本。LT発動契機、162回、約91%、残保留なし
- https://p.hisshobon.jp/machine/4455/1/106858 — 必勝本。基本スペック、右打ち2回1セット、LT期待出玉定義
- https://www.p-world.co.jp/machine/database/10192 — P-WORLD。LT搭載、RUSH/LT継続、期待出玉定義照合
- https://p-kn.com/pachinko/4274/ — K-Navi。導入日2025-02-03、型式/甘デジ/ST/LT照合
retrievedAt: 2026-09-21
confidence: OFFICIAL + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields: 通常初当り基準の総LT到達率は直接公表値未確認のためUNVERIFIED
conflicts: none
