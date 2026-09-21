# PLT激デジ ジューシーハニー極嬢

machineName: PLT激デジ ジューシーハニー極嬢
manufacturer: サンセイR&D
formalModel: Pジューシーハニー極嬢77LT-ARB
releaseDate: 2025-06-02
modelType: 甘デジ
gameType: 1種2種混合 / ST / ラッキートリガー
status: COMPLETE_CORE

## Core spec
jackpotProbability:
- 通常時: 1/77.7
- 右打ち中: 1/43.4

initialPayout:
- 3R 約210個（払い出し）

rushEntryRate: 約50%
rushContinuationRate: 約50%（ST30回の引き戻し率）
timeShortening:
- ジューシーハニーRUSH: ST30回
- ジューシーハニーRUSH ラッキートリガー: ST70回

## Lucky Trigger
ltName: ジューシーハニーRUSH ラッキートリガー
ltEntryRoute:
- 通常初当りの50%でジューシーハニーRUSHへ。
- RUSH中大当りの50%が上乗せループ型「極嬢HONEY BONUS」。10R約700個の上乗せが50%でループし、ループごとにLT突入抽選。
- 極嬢HONEY BONUS当選時のLT昇格率は約30%。解析振り分けではRUSH中大当りの15%が10R+α＋LT、35%が10R+α＋LTチャレンジ、50%が10R＋下位RUSH。
ltEntryRate:
- 極嬢HONEY BONUS当選時のLT昇格率: 約30%
- RUSH中大当り振り分け上の直接LT: 15%
- 通常初当り全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（経路確率から独自合算しない）
ltContinuationRate: 約80%（ST70回の引き戻し率）
ltPayoutStructure:
- LT中大当り: 10R+α「極嬢HONEY BONUS」50% / 10R「SUPER HONEY BONUS」50%
- 10Rは約700個払い出し。極嬢HONEY BONUSは10R約700個の上乗せ50%ループで、平均払い出し約2100個。
- LT中の大当り後はいずれもLT継続。

totalPayoutDistribution:
- 通常時: 3R約210個＋ジューシーハニーRUSH 50% / 3R約210個＋通常 50%
- ジューシーハニーRUSH中: 10R+α＋LT 15% / 10R+α＋LTチャレンジ 35% / 10R約700個＋RUSH 50%
- LT中: 10R+α＋LT 50% / 10R約700個＋LT 50%

cTimeOrSpecialSystems: なし（確認資料上、LT到達に関係するc時短等の記載なし）
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（1/77.7）
   ↓ 初当り3R約210個
  50% → 通常へ
  50% → ジューシーハニーRUSH（ST30回・約50%継続）
            ↓ 右打ち大当り
            50% → SUPER HONEY BONUS 約700個 → 下位RUSH
            50% → 極嬢HONEY BONUS（約700個上乗せ50%ループ）
                       ↓ ループごとにLT抽選 / BONUS当選時LT昇格約30%
                     ジューシーハニーRUSH ラッキートリガー
                     （ST70回・約80%継続）
                       ↓
                     LT中大当りは極嬢HONEY BONUS 50% / SUPER HONEY BONUS 50%
                       ↓
                     LT継続

notes:
- 業界一次系記事はLT突入時の平均期待出玉約9,125個を掲載するが、これは単発の大当り出玉ではなくLT突入後の期待出玉なので、主要振り分けとは分離。
- 「極嬢HONEY BONUS当選時LT昇格約30%」と「RUSH中大当りの15%が直接LT」は分母が異なるため競合ではない。
- 解析資料の10R実獲得約600個 / 3R実獲得約180個は、業界資料の払い出し700個 / 210個と定義差。DB主要値は払い出し表記を採用し、実獲得値を混同しない。
- 通常初当り全体を分母とした総LT到達率の直接公表値は、公式/業界/複数解析の再探索後も確定できずUNVERIFIED_AFTER_RESEARCH。

sources:
- https://news.p-world.co.jp/articles/30838/greenbelt — グリーンべると/P-WORLD業界ニュース。2025-05-01。導入日、LT搭載、基本確率、RUSH/LT構造、期待出玉、振り分け。
- https://www.p-world.co.jp/machine/database/10278 — P-WORLD機種DB。基本スペック、ST回数、LT昇格率約30%、ゲームフロー。
- https://hazuse.com/machine/pachinko/PX0293/ — HAZUSE。導入日、基本構造、LT昇格率約30%。
- https://hisshobon.com/machineinfo/97770/ — パチ&スロ必勝本。基本スペック、ST30/70、遊タイム非搭載。
- https://1geki.jp/pachinko/p_ltjcyhny_gj77/ — 一撃。型式、基本確率、ST、払い出し/実獲得定義。
- https://nana-press.com/kaiseki/machine/994/29765/ — なな徹。通常/RUSH/LT中の詳細振り分け。

retrievedAt: 2026-09-22
confidence:
- LT搭載/導入日/基本スペック: INDUSTRY + ANALYSIS_HIGH
- RUSH/LT構造・振り分け: INDUSTRY + ANALYSIS_HIGH（複数一致）
- 総LT到達率: UNVERIFIED
missingFields:
- 通常初当り全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH
conflicts: []
