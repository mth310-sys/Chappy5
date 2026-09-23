# e 魔法少女まどか☆マギカ3 時間遡行～始まりの願い～

status: COMPLETE_CORE
retrievedAt: 2026-09-24

machineName: e 魔法少女まどか☆マギカ3 時間遡行～始まりの願い～
manufacturer: 京楽産業.（型式/製造: オッケー.）
formalModelName: e魔法少女まどか☆マギカ3LPM1
inspectionNumber: 5P1435
releaseDate: 2026-03-02
modelType: スマパチ / ミドル / LT搭載
gameType: 一種二種混合 / 普図抽選ST
jackpotProbability: 通常時 1/319.9 / ワルプルギスの夜中 1/146.8 / アルティメット超RUSH中 1/82.4
initialPayout: 450個が主体。初当り1%は1500個＋LT直行。
rushEntryRate: 約70%（内1%はLT直行）
rushContinuationRate: ワルプルギスの夜 ST100回、突破率/継続期待値 約50%
ltName: アルティメット超RUSH
ltEntryRoute: (1) 通常時初当りの1%から1500個＋LT直行。(2) 通常時69%でワルプルギスの夜へ入り、ST100回中の大当りで1500個＋LT発動。
ltEntryRate: 通常時直行1%。下位RUSH経由はワルプルギスの夜中大当りで100%LT。通常初当り基準の総LT到達率は直接公表値未確認のため独自合算しない。
ltContinuationRate: 約80%（ST130回）
ltPayoutStructure: LT中 3000個 75% / 750個 25%、いずれもLT ST130回継続。3000個は5R×4回相当の複数大当り合計表現として扱う。
totalPayoutDistribution: 特図1: 1500個＋LT 1% / 450個＋ワルプルギスの夜 69% / 450個＋通常 30%。下位RUSH中: 1500個＋LT 100%。LT中: 3000個＋LT 75% / 750個＋LT 25%。
timeShortening: ワルプルギスの夜 100回 / アルティメット超RUSH 130回
cTimeOrSpecialSystems: P-スキップ機能搭載。LTは普図抽選ST。LT終了時は残保留なし。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時 1/319.9
   ├─ 1%: 1500個 → アルティメット超RUSH(LT) ST130回
   ├─ 69%: 450個 → ワルプルギスの夜 ST100回（1/146.8、突破約50%）
   │          ├─ 大当り: 1500個 → アルティメット超RUSH(LT)
   │          └─ 100回スルー: 通常時
   └─ 30%: 450個 → 通常時
  LT: 1/82.4、ST130回、継続約80%
   ├─ 75%: 3000個 → LT継続
   └─ 25%: 750個 → LT継続
  130回スルー → 通常時（残保留なし）
notes:
  - 下位RUSH「ワルプルギスの夜」とLT「アルティメット超RUSH」を分離。
  - 初当りRUSH突入約70%にはLT直行1%を含む。
  - 3000個は単一大当り出玉ではなく複数大当り合計として保存。
  - 通常初当り基準の総LT到達率は、1%直行と69%×下位突破率から独自算出せずUNVERIFIED扱い。
  - 2024年のP魔法少女まどか☆マギカ3とは別機種/別スペック。
sources:
  - url: https://news.p-world.co.jp/articles/32802/yugitsushin
    sourceType: INDUSTRY
    retrievedAt: 2026-09-24
    supports: 正式機種名、型式、製造元、通常/下位/LT確率、RUSH約70%（1% LT直行）、下位突破約50%、LT約80%
  - url: https://hisshobon.com/machineinfo/101137/
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-24
    supports: 1種2種混合、各確率、ST100/130、払出450/750/1500、LT搭載、遊タイム非搭載、導入日
  - url: https://hisshobon.com/machineinfo/101139/
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-24
    supports: LT正式名称、LT発動2経路、LT中75%が3000個、ST130回終了条件、残保留なし
  - url: https://1geki.jp/pachinko/e_madokamagica3_hajimari/
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-24
    supports: 型式、検定番号、導入日、通常/下位/LT確率、ゲームフロー
  - url: https://pachimaga.com/free/mach/maker-p/kyoraku/064478.php
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-24
    supports: 型式、導入日、メーカー、下位RUSH構造
  - url: https://www.p-world.co.jp/machine/database/10429
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-24
    supports: 機種DB・ゲームフロー照合
confidence: ANALYSIS_HIGH
missingFields:
  - 通常初当り基準の総LT到達率（直接公表値未確認）
conflicts: []
