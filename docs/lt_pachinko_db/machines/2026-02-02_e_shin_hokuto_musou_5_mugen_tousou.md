# e 真・北斗無双 第5章 夢幻闘双

retrievedAt: 2026-09-23
status: COMPLETE_CORE

machineName: e 真・北斗無双 第5章 夢幻闘双
manufacturer: Sammy / サミー
formalModelName: e真北斗無双5夢幻闘双SCEA
inspectionNumber: 510595
releaseDate: 2026-02-02
modelType: ライトミドル / スマパチ / LT搭載
gameType: 1種2種混合・直LT型
jackpotProbability: 通常時 約1/159.8 / 右打ち中 約1/3.49
initialPayout: 2R・約200個（払い出し）
rushEntryRate: 20%（RUSH突入=LT発動、V通過条件）
rushContinuationRate: 下位RUSHなし
ltName: 夢幻闘双
ltEntryRoute: 初当り時20%。真・幻闘BONUS後はLT直行、BONUS後は夢幻闘双チャレンジ成功でLT発動。残り80%は通常へ。
ltEntryRate: 20%（初当り基準の直接公表値、V通過条件）
ltContinuationRate: 約82%（時短1回＋残保留4個、右実質約1/3.49、V通過条件）
ltPayoutStructure: 約7500個 0.2% / 約6000個 2.9% / 約4500個 14.7% / 約3000個 36.6% / 約1500個 45.6%。3000～7500個は1500個×2～5回で、単一大当り出玉として扱わない。3000個以上合計54.4%。すべて夢幻闘双継続。
totalPayoutDistribution: 特図1は約200個。LT中は1500～7500個（詳細はltPayoutStructure）。
timeShortening: 夢幻闘双は時短1回＋残保留4個（計5回転）。
cTimeOrSpecialSystems: 特記すべきCタイムなし。RUSH突入率・継続率はV通過条件。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時（約1/159.8）
   ↓ 初当り・約200個
  真・幻闘BONUS → 夢幻闘双（LT）
  または BONUS → 夢幻闘双チャレンジ
                     ├ 成功（初当り全体で計20%）→ 夢幻闘双（LT）
                     └ 失敗 → 通常時
   ↓
  夢幻闘双：右約1/3.49、時短1回＋残保留4個、継続約82%
   ↓ 当選時1500～7500個
  継続 / 終了で通常時
notes: |
  下位RUSHを持たない直LT型。業界一次記事、HAZUSE、必勝本、パチマガスロマガ、なな徹で主要数値を横断確認した。
  右出玉の3000～7500個は1500個×2～5回。払い出し設計値であり、実獲得値と混同しない。
  HAZUSEとパチマガスロマガで正式型式名を一致確認。検定番号510595はHAZUSEで確認。
  初当り20%はLT突入率そのものとして直接公表されており、独自算出値ではない。
sources:
  - url: https://news.p-world.co.jp/articles/32259/yugitsushin
    source: 遊技通信 / P-WORLD業界ニュース
    retrievedAt: 2026-09-23
    confidence: INDUSTRY
    supports: 型式名、通常/右確率、RUSH突入20%、継続約82%、右54%が1500個以上、導入日、3000～7500個の1500個×2～5定義
  - url: https://hazuse.com/machine/pachinko/PX0335/
    source: HAZUSE
    retrievedAt: 2026-09-23
    confidence: ANALYSIS_HIGH
    supports: 型式名、検定番号、導入日、確率、20%、時短1+残4、約82%、出玉定義
  - url: https://hisshobon.com/machineinfo/100072/
    source: パチ&スロ必勝本オフィシャル 基本スペック
    retrievedAt: 2026-09-23
    confidence: ANALYSIS_HIGH
    supports: 1種2種混合、確率、LT搭載、直LT、20%、1+4、約82%、200/1500個、遊タイム非搭載
  - url: https://hisshobon.com/machineinfo/100074/
    source: パチ&スロ必勝本オフィシャル LT解説
    retrievedAt: 2026-09-23
    confidence: ANALYSIS_HIGH
    supports: LT正式名称、発動契機、真・幻闘BONUS/夢幻闘双チャレンジ経路、終了後通常
  - url: https://pachimaga.com/free/article/20260126/064617.php
    source: パチマガスロマガFREE
    retrievedAt: 2026-09-23
    confidence: ANALYSIS_HIGH
    supports: 1/159.8、LT20%、約82%、3000個以上54.4%、最大7500=1500×5、導入日
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/332/kh01.php
    source: パチマガスロマガ 機種DB
    retrievedAt: 2026-09-23
    confidence: ANALYSIS_HIGH
    supports: メーカー、型式名、仕様、導入日、確率、LT名称、20%、約82%、1500～7500個、3000～7500個の複数回定義
  - url: https://nana-press.com/kaiseki/machine/1093/
    source: なな徹
    retrievedAt: 2026-09-23
    confidence: ANALYSIS_HIGH
    supports: LT中詳細振り分け0.2/2.9/14.7/36.6/45.6%、1500個×2～5定義
confidence: ANALYSIS_HIGH
missingFields: []
conflicts: []
