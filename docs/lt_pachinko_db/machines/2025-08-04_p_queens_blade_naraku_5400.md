# Pクイーンズブレイド奈落5400

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: Pクイーンズブレイド奈落5400
manufacturer: 高尾
modelNumber: Pクイーンズブレイド奈落V1C
releaseDate: 2025-08-04
modelType: P機 / ミドル / LT搭載
gameType: 一種二種混合 / 直LT型

jackpotProbability:
- 通常時図柄揃い: 約1/319.2（聖乳チャージ除外）
- 聖乳チャージ: 約1/533.96
- 通常時大当り合算: 約1/199.8
- LT「QUEEN'S BLADE」中: 約1/1（大当り1/199.8 + 小当り1/1.005の合算）

initialPayout:
- 図柄揃い: 約1350個（9R、払い出し）
- 聖乳チャージ: 約300個（払い出し）

rushEntryRate:
- 通常RUSHは存在せず、図柄揃いの50.5%でLT「QUEEN'S BLADE」へ直接突入
rushContinuationRate: N/A（下位/通常RUSHなし）

ltName: QUEEN'S BLADE
ltEntryRoute:
- 通常時図柄揃い → 50.5%で約1350個 + LT「QUEEN'S BLADE」
- 残り49.5%は約1350個獲得後に通常へ
ltEntryRate:
- 図柄揃い時LT突入率: 50.5%
- 通常遊技全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（図柄揃いと聖乳チャージを含む分母定義を独自合算しない）
ltContinuationRate: 約50.5%

ltPayoutStructure:
- LT中成功: 約5400個（約1350個×4）+ LT継続 50.5%
- LT中非継続: 約1350個 + 通常 49.5%

totalPayoutDistribution:
- 特図1図柄揃い: 約1350個 + LT 50.5% / 約1350個 + 通常 49.5%
- 聖乳チャージ: 約300個
- 特図2/LT中: 約5400個（1350個×4）+ LT 50.5% / 約1350個 + 通常 49.5%

timeShortening:
- LT「QUEEN'S BLADE」: 電サポ1回
- 通常終了時: 電サポなし

cTimeOrSpecialSystems: 下位RUSHなしの直LT型。LT中は1回転で約50.5%の5400個+継続を狙う構造。小当り時にV入賞しなかった場合は大当りが発生せず、電サポ終了の場合あり。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。

gameFlow: |
  通常時
   ├─ 図柄揃い 約1/319.2
   │    ├─ 50.5%: 約1350個 → LT「QUEEN'S BLADE」
   │    └─ 49.5%: 約1350個 → 通常時
   └─ 聖乳チャージ 約1/533.96: 約300個

  LT「QUEEN'S BLADE」
   └─ 電サポ1回 / 右打ち大当り約1/1 / 継続約50.5%
       ├─ 50.5%: 約5400個（1350個×4）→ LT継続
       └─ 49.5%: 約1350個 → 通常時

notes:
- 2024-06-03の「Pクイーンズブレイド4 UNLIMITED」はLT非搭載。本機は2025-08-04導入のLT搭載別スペックであり混同しない。
- 約5400個は約1350個×4回の合計払い出し。単一大当り5400個ではない。
- 図柄揃い1/319.2、聖乳チャージ1/533.96、大当り合算1/199.8は定義が異なるため分離保存。
- 業界一次資料・P-WORLD・複数解析でLT突入50.5%、継続50.5%、5400個振り分け50.5%が一致。

sources:
- https://news.p-world.co.jp/articles/30918/yugitsushin — 遊技通信。型式、図柄揃い約1/319.2、LT突入50.5%、継続約50.5%、LT中50.5%で5400個、導入日。
- https://nagasaki-yukyo.or.jp/information/%E7%89%B9%E5%88%A5%E8%A1%A3%E8%A3%85%E3%81%AB%E8%BA%AB%E3%82%92%E5%8C%85%E3%82%93%E3%81%A7%E7%99%BB%E5%A0%B4%EF%BC%81%EF%BC%81%E3%80%8Cp%E3%82%AF%E3%82%A4%E3%83%BC%E3%83%B3%E3%82%BA%E3%83%96%E3%83%AC/ — 長崎県遊技業協同組合転載の遊技通信情報。型式・LT構造を照合。
- https://www.p-world.co.jp/machine/database/10282 — P-WORLD。図柄揃い50.5%直LT、LT中50.5%で5400個/49.5%で1350個終了を確認。
- https://www.pachibee.jp/machines/index/125070006 — パチビー。図柄揃い/チャージ/合算、右打ち約1/1、電サポ、出玉を確認。
- https://nana-press.com/kaiseki/machine/991/29770/ — なな徹。特図1/特図2振り分け、9R1350個、聖乳チャージ300個、遊タイム非搭載を照合。
- https://pachiseven.jp/machines/7191/cutout/2 — パチ7。導入日、LT突入/継続、右打ち出玉を照合。

confidence:
- LT搭載/名称/型式/導入日/基本確率/LT構造/突入率/継続率/主要振り分け: INDUSTRY + ANALYSIS_HIGH（複数照合）
- 通常遊技全体基準の総LT到達率: UNVERIFIED

missingFields:
- 通常遊技全体を分母とする総LT到達率の公開直接値
conflicts: none
