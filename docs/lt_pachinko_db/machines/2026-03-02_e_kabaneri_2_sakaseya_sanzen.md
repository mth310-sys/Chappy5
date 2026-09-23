# e 甲鉄城のカバネリ2 咲かせや燦然

machineName: e 甲鉄城のカバネリ2 咲かせや燦然
manufacturer: サミー（製造元: 銀座）
formalModelName: e甲鉄城のカバネリ2GFEA
releaseDate: 2026-03-02
modelType: ミドル / スマパチ / LT搭載
status: COMPLETE_CORE
gameType: 2種時短 / 普図抽選ST型 / 直LT
jackpotProbability: 通常時 約1/319.7 / LT中 約1/98.3
initialPayout: 5R 750個（払出）
rushEntryRate: 50%。下位RUSHなしでRUSH自体がLT。
rushContinuationRate: 下位RUSHなし。LT「KABANERI OF THE IRON FORTRESS 海門決戦」が約75%。
ltName: KABANERI OF THE IRON FORTRESS 海門決戦
ltEntryRoute: 通常時初当りはALL 750個の決戦BONUS。消化後の「美馬決戦」に勝利するとLTへ直接突入。勝利期待度/初当り基準LT突入率50%。敗北時は通常へ。
ltEntryRate: 初当り基準50%（直接公表値）
ltContinuationRate: 約75%
ltPayoutStructure: LT中 6000個＋α 約6.2% / 3000個 約73.8% / 1500個 約20%。全てLT継続・時短134回。3000個は750個×4回。6000個は3000個当り時の最終保留が次回3000個当りとなる構造で、単一大当り出玉ではない。「輪廻の果報」発生時は6000個＋αとなり、約7.7%で3000個上乗せループとの解析表記あり。
totalPayoutDistribution: 通常時 750個＋LT 50% / 750個＋通常 50%。LT中はltPayoutStructure参照。
timeShortening: LT 134回。非突入時0回。普図抽選STのためLT終了時の残保留なしとの解析資料あり。
cTimeOrSpecialSystems: 「輪廻の果報」/輪廻ループ。3000個当り時の最終保留が次回3000個当りの場合に6000個となり、解析資料では約7.7%で3000個上乗せループと説明。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時 約1/319.7
   ↓ 初当り「決戦BONUS」ALL 750個
  「美馬決戦」
   ├ 50% 勝利 → LT「KABANERI OF THE IRON FORTRESS 海門決戦」
   └ 50% 敗北 → 通常
   ↓
  LT 134回 / 約1/98.3 / 継続約75%
   ↓
  LT中: 6000個＋α 約6.2% / 3000個 約73.8% / 1500個 約20%
   ↓
  全右振り分けでLT継続。134回スルーで通常へ。
notes: |
  本機は通常RUSH→LT昇格型ではなく、初当り50%でLTへ直接入る直LT型。
  正式型式は複数資料で `e甲鉄城のカバネリ2GFEA` と一致。販売ブランドはサミー、製造元は銀座として区別する。
  3000個は750個×4回であり単一大当り出玉ではない。6000個＋αも複数当り/最終保留を含む合計表現として扱う。
  サミー系公式/業界関連資料、パチンコビレッジ系機種DB、P-WORLD、必勝本、なな徹、パチマガで主要値を横断照合し、主要項目に未解決競合なし。
  後発 `e 甲鉄城のカバネリ2 輪廻の果報119ver.` は別スペック。混同しない。
sources:
  - url: https://www.sega.jp/topics/detail/260330_1/
    sourceType: OFFICIAL
    note: セガ公式。e 甲鉄城のカバネリ2 咲かせや燦然を約1/319×LT直撃型として紹介。
  - url: https://prtimes.jp/main/html/rd/p/000001911.000002703.html
    sourceType: OFFICIAL
    note: サミーネットワークス発表。正式商用名と2026-03-02時点の展開を確認。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/333/kh01.php
    sourceType: ANALYSIS_HIGH
    note: メーカー、型式 e甲鉄城のカバネリ2GFEA、導入日、2種時短、1/319.7→1/98.3、LT50%、134回、約75%、3000個以上約80%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/333/kh04.php
    sourceType: ANALYSIS_HIGH
    note: ゲームフロー、初当りALL750個、美馬決戦50%、LT134回、3000個=750個×4回。
  - url: https://www.p-world.co.jp/machine/database/10400
    sourceType: ANALYSIS_HIGH
    note: LT搭載、1/319.7、初当り後美馬決戦50%、LT約75%、3000個以上約80%、輪廻の果報と約7.7%上乗せループ。
  - url: https://hisshobon.com/machineinfo/100556/
    sourceType: ANALYSIS_HIGH
    note: LT正式名称、初当り50%発動、ST134回スルー終了、普図抽選で残保留なし。
  - url: https://nana-press.com/kaiseki/machine/1104/35362/
    sourceType: ANALYSIS_HIGH
    note: 一種二種混合/ミドルLT、1/319.7、LT1/98.3、50%、約75%、134回、5R/10R、遊タイム非搭載。
  - url: https://pachimaga.com/free/mach/maker-p/sammy/064738.php
    sourceType: ANALYSIS_HIGH
    note: 2種時短、初当り750個、美馬決戦約50%、LT134回/約75%、3000個以上約80%、輪廻の果報。
retrievedAt: 2026-09-24
confidence: ANALYSIS_HIGH
missingFields: []
conflicts: []
