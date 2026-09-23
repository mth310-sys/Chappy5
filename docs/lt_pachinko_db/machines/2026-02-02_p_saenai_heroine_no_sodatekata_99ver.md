# P冴えない彼女の育てかた 99ver.

machineName: P冴えない彼女の育てかた 99ver.
manufacturer: 大都技研
releaseDate: 2026-02-02
modelType: 甘デジ
formalModelName: P／冴えない彼女の育てかた／A01
gameType: 一種二種混合 / ST型 / ラッキートリガー搭載
jackpotProbability: 通常時 1/99.9 / 右打ち中 1/29.6
initialPayout: 2R 約300個（払出、V入賞条件）
rushEntryRate: 50%
rushContinuationRate: 冴えてる彼女RUSH 約67%（32回）
ltName: 冴えてる彼女RUSH♭（フラット）
ltEntryRoute: 冴えてる彼女RUSH中に2400BONUS（約2400個=1500個＋300個×3、振り分け12.5%）当選でLT発動、冴えてる彼女RUSH♭へ突入
ltEntryRate: 下位RUSH中大当りの12.5%。通常遊技全体基準の総LT到達率は直接公表値を確認できず、経路値から独自算出しない。
ltContinuationRate: 約90%（66回）
ltPayoutStructure: LT中も主要振り分けは2400個 12.5% / 1200個 12.5% / 600個 25.0% / 300個 50.0%。2400個は1500個＋300個×3であり単一大当りの払出として扱わない。全振り分けで冴えてる彼女RUSH♭継続。
totalPayoutDistribution: 通常時=300個＋冴えてる彼女RUSH 50% / 300個＋通常 50%。冴えてる彼女RUSH中=2400個＋LT 12.5% / 1200個＋下位RUSH 12.5% / 600個＋下位RUSH 25.0% / 300個＋下位RUSH 50.0%。LT中=2400個 12.5% / 1200個 12.5% / 600個 25.0% / 300個 50.0%、いずれもLT継続。
timeShortening: 32回 / 66回（LT）
cTimeOrSpecialSystems: 2400BONUSは1500個＋300個×3の合計表現。コンプリート機能搭載。Cタイム等のLT到達用特殊機構は確認できず。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時 1/99.9
   ↓ 初当り（約300個）
   ├─ 50% → 通常へ
   └─ 50% → 冴えてる彼女RUSH（32回 / 約67%）
                    ↓ RUSH中大当り
                    ├─ 87.5% → 300/600/1200個＋下位RUSH継続
                    └─ 12.5% → 2400BONUS（1500＋300×3）＋LT
                                      ↓
                               冴えてる彼女RUSH♭（66回 / 約90%）
                                      ↓ 大当り
                               300/600/1200/2400個＋LT継続
notes: |
  2025年のe冴えない彼女の育てかたとは別スペック。本レコードは2026-02-02導入のP甘デジ99ver.。
  P-WORLD、パチマガスロマガ、HAZUSE、必勝本、ななプレス、業界記事で主要値が一致。
  2400個は1500個＋300個×3の合計表現であり、単一大当り出玉として保存しない。
  遊技日本記事の賞球欄に「1&4&10」とある一方、同記事の2400個定義および複数解析資料は1&4&15/15賞球10Cで一致する。賞球値は本DBの必須比較項目ではないためcanonical主要値には採用せず、主要LT仕様には競合なしと判断する。
sources:
  - url: https://yugi-nippon.com/pachinko-new-machine/post-74991/
    retrievedAt: 2026-09-23
    role: INDUSTRY
    note: 大都技研発表記事。型式P/冴えない彼女の育てかた/A01、通常約1/99、右1/29.6、RUSH50%/32回/約67%、2400BONUS 12.5%からLT、LT66回/約90%、導入時期を確認。
  - url: https://www.p-world.co.jp/machine/database/10416
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: 1/99.9、右1/29.6、RUSH50%/約67%、LT正式名称・約90%、2400個=1500個+300個×3を確認。
  - url: https://pachimaga.com/free/mach/maker-p/daitogiken/064552.php
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: 型式、2026-02-02、1/99.9、初当りALL300個、RUSH32回/約67%、2400BONUSからLTを照合。
  - url: https://hazuse.com/machine/pachinko/5P0172/
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: 型式、検定番号5P0172、導入日、LT搭載、RUSH/LT継続率と突入経路を照合。
  - url: https://nana-press.com/kaiseki/machine/1113/34664/
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: 通常/右確率、32/66回、通常・下位RUSH・LT中の詳細振り分け、遊タイム非搭載を確認。
  - url: https://p.hisshobon.jp/machine/4682/1/113395
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: LT搭載、2400個当選がLT条件、32/66回、約67/90%、遊タイム非搭載を照合。
confidence: INDUSTRY
missingFields:
  - 通常遊技全体基準の総LT到達率（直接公表値未確認）
conflicts: none
status: COMPLETE_CORE
