# P 俺の妹がこんなに可愛いわけがない。攻略!!スキップ159ver.

machineName: P 俺の妹がこんなに可愛いわけがない。攻略!!スキップ159ver.
manufacturer: 京楽産業.（型式名義: オッケー.）
releaseDate: 2026-02-02
modelType: ライトミドル
gameType: 一種二種混合 / 普図ST型 / ラッキートリガー搭載
formalModelName: P俺の妹がこんなに可愛いわけがない。攻略スキップ159verM6
jackpotProbability: 通常時 約1/159.9 / 俺CHANCE中 約1/12.0
initialPayout: 5R 750個（払出）
rushEntryRate: 50%
rushContinuationRate: 俺CHANCE 約50%（8回）
ltName: ごほうび天国
ltEntryRoute: 俺CHANCE中の大当りの70%が1500個（10R）。1500個大当り時にごほうび天国チャレンジが発生し、その50%でLT「ごほうび天国」発動。俺CHANCE中大当り全体では35%がごほうび天国。
ltEntryRate: 俺CHANCE中大当り全体の35%（1500個大当り70% × そのうちチャレンジ成功50%という分母説明が直接資料にある）。通常遊技全体基準のLT突入率は導入前資料に1/1233との記載があるが「噂」表記のためcanonical値に採用しない。
ltContinuationRate: ごほうび天国の天国ループ率35%。これは通常RUSHの継続率ではなく、LT内で4回分の大当りを追加上乗せするループ率。
ltPayoutStructure: LT発動時の1500個に加え4回分の大当りを一気に獲得。発動時トータル2700～7500個。天国ループ当選（35%）時はさらに4回分、1200～6000個を上乗せ。解析資料では開始時期待出玉分布として9000個オーバー約31.5% / 7000個オーバー約15.4% / 6000個オーバー約25.8% / 5000個オーバー約19.9% / 3900個約6.6% / 2700個約0.8%を掲載。これらは単一大当り払出ではなく、大当り5回分＋α（電サポ次回まで分を含む）の合計/期待出玉表現。
totalPayoutDistribution: 通常時=5R 750個＋俺CHANCE 50% / 5R 750個＋通常 50%。俺CHANCE中=10R 1500個＋ごほうび天国 35% / 10R 1500個＋俺CHANCE 35% / 2R 300個＋俺CHANCE 30%。
timeShortening: 0回 / 俺CHANCE 8回。ごほうび天国終了後は俺CHANCEへ復帰。
cTimeOrSpecialSystems: P-スキップ搭載。通常変動中に専用ゲートへ玉を通すことでハズレ変動を短縮できる。LT「ごほうび天国」はボーナス型で、LT自体が高継続STへ移行する構造ではない。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時 約1/159.9
   ↓ 初当り（5R 750個）
   ├─ 50% → 通常へ
   └─ 50% → 俺CHANCE（8回 / 約50%）
                    ↓ 大当り 約1/12.0
                    ├─ 30% → 2R 300個＋俺CHANCE継続
                    ├─ 35% → 10R 1500個＋俺CHANCE継続
                    └─ 35% → 10R 1500個＋LT「ごほうび天国」
                                      ↓
                         4回分の大当りを追加獲得
                         発動時トータル2700～7500個
                                      ↓
                         35%で天国ループ（4回分を再上乗せ）
                                      ↓ 非ループ
                         俺CHANCEへ復帰
notes: |
  2025-03-03導入のP俺の妹がこんなに可愛いわけがない。（約1/199.9、上位RUSH型LT）とは別スペック。本レコードは2026-02-02導入の攻略!!スキップ159ver.。
  LTは「ごほうび天国」。通常RUSHの継続率を引き上げる上位RUSH型ではなく、複数回大当りをまとめて獲得し、35%でさらに4回分を上乗せするボーナス型LT。
  俺CHANCE中1500個当選率70% × チャレンジ成功率50% = 大当り全体35%という関係は必勝本の分母説明とパチマガの特図2振り分けで整合する。
  導入前資料のLT突入率1/1233は「噂」と明示されているため、確定値として保存しない。
  必勝本の賞球欄はヘソ2個、パチマガ/P-WORLD等はヘソ1個表記で競合するが、本DB必須項目ではなくLT主要仕様に影響しないため注記のみ。主要LT値には未解決競合なし。
sources:
  - url: https://www.kyoraku.co.jp/news/detail/860
    retrievedAt: 2026-09-23
    role: OFFICIAL
    note: 京楽公式。機種名、約1/159.9、P-スキップ、全国導入2026-02-02を確認。
  - url: https://pachimaga.com/free/mach/maker-p/kyoraku/064562.php
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: 型式、導入日、1/159.9、右1/12.0、俺CHANCE50%/8回/約50%、LT搭載、ごほうび天国35%、詳細振り分け、期待出玉分布、遊タイムなしを確認。
  - url: https://p.hisshobon.jp/machine/4687/1/113484
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: 1/159.9、右1/12.0、俺CHANCE50%/8回/約50%、ごほうび天国2700～7500個、ループ35%、遊タイム非搭載を照合。
  - url: https://p.hisshobon.jp/machine/4687/1/113486
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: LT正式名称「ごほうび天国」、1500個大当り時50%・大当り全体35%のLT発動契機、4回分上乗せ、天国ループ35%、終了後俺CHANCE復帰を確認。
  - url: https://www.p-world.co.jp/machine/database/10419
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: 約1/159.9、右約1/12.0、俺CHANCE50%/8回/約50%、300/750/1500個の払出定義、ごほうび天国の概要を照合。
  - url: https://pachinko-curation.com/59388/
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: 型式名義オッケー、LT搭載、特図1/特図2振り分け、ごほうび天国の複数大当り構造を照合。LT1/1233は導入前「噂」欄のためcanonical不採用。
confidence: OFFICIAL
missingFields:
  - 通常遊技全体基準の確定LT突入率/到達率（直接確定資料未確認。1/1233は導入前噂表記のみ）
conflicts: none
status: COMPLETE_CORE
