# Pえとたま2 神祭

retrievedAt: 2026-09-21
status: COMPLETE_CORE

machineName: Pえとたま2 神祭
manufacturer: メーシー / ユニバーサルエンターテインメント
formalModel: Pえとたま2MY
releaseDate: 2024-12-02
modelType: ライトミドル

gameType: 2種タイプ / 時短突破型 / ラッキートリガー
jackpotProbability: 通常時 1/199.80、右打ち中 1/59.57
initialPayout: 4R 約460個（払出）
rushEntryRate: 初当りの77%で「えとたまバトル冥王はーです編」へ。時短37回+残保留4個のトータル突破率約50%で「えとたまRUSH祭」へ
rushContinuationRate: えとたまRUSH祭 時短90回+残保留4個、トータル約80%
ltName: 超えとたまRUSH祭
ltEntryRoute: えとたまRUSH祭中の大当りの一部。10R-A 12%でLTへ。攻略資料では「10R当選時の約15.6%（残保留当選除外）」という別分母表記もあり、12%/77%=約15.6%で整合
ltEntryRate: えとたまRUSH祭中の大当り全体の12%。業界資料はRUSH突入後「約3回に1回の割合でLT発動に期待」と説明。通常初当り基準の固定総到達率は直接値を確認できず、推測しない
ltContinuationRate: 時短130回+残保留4個、トータル約90%
ltPayoutStructure: LT中 10R 約1360個 77% / 3R 約310個 23%（いずれもLT継続）
totalPayoutDistribution: 特図1=4R約460個+時短37回 77% / 4R約460個+通常 23%。えとたまバトル中=10R約1360個 77% / 3R約310個 23%、いずれもえとたまRUSH祭へ。えとたまRUSH祭中=10R約1360個+LT 12% / 10R約1360個+下位RUSH継続 65% / 3R約310個+下位RUSH継続 23%
timeShortening: えとたまバトル37回、えとたまRUSH祭90回、LT130回。各継続/突破率は残保留4個を含む
cTimeOrSpecialSystems: コンプリート機能搭載
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時
   ↓ 初当り（4R約460個）
  77% → えとたまバトル冥王はーです編（時短37+残保留4、突破約50%）
  23% → 通常
   ↓ 右打ち中大当り
  えとたまRUSH祭（時短90+残保留4、継続約80%）
   ↓ RUSH中大当りの12%
  LT「超えとたまRUSH祭」（時短130+残保留4、継続約90%）
   ↓
  LT中 10R約1360個 77% / 3R約310個 23%、当選時はLT継続

notes:
- 2026年追加スペック「Pえとたま2 神祭 干支甘」（1/99.90）とは別レコード。本レコードは2024年12月の1/199.80版。
- 「LT発動率12%」はRUSH中大当り全体を分母とする振り分け。「10R当選時約15.6%」は10Rを分母とするため競合ではない。
- 業界一次系は型式名 Pえとたま2MY、2種タイプ、1/199.80→1/59.57、初回77%、突破約50%、下位約80%、LT約90%を確認。
- 導入日は業界記事では2024年12月予定まで。複数解析資料が2024-12-02で一致するためcanonical 2024-12-02。

sources:
- https://news.p-world.co.jp/articles/29130/yugitsushin — 遊技通信 / 2024-10-08。型式、確率、77%、突破約50%、下位約80%、LT約90%、導入月
- https://www.p-world.co.jp/machine/database/10135 — P-WORLD。各時短回数、払出、全主要振り分け、ゲームフロー
- https://hisshobon.com/machineinfo/94667/ — パチ&スロ必勝本。主要振り分け、LT12%、時短構造
- https://p.hisshobon.jp/machine/4412/1/105455 — パチ&スロ必勝本。基本スペック、10R当選時LT約15.6%、遊タイム非搭載
- https://chonborista.com/pachinko/universal/223630/ — ちょんぼりすた。導入日2024-12-02、基本構造

confidence: INDUSTRY / ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率の直接公表固定値: UNVERIFIED（経路値は確認済み。推測計算は保存しない）
conflicts: none
