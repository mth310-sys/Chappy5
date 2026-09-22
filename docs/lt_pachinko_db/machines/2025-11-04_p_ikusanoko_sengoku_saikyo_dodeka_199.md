# P いくさの子 戦極最強ドデカ199ver.

machineName: P いくさの子 戦極最強ドデカ199ver.
manufacturer: サミー（製造: 銀座 / GINZA）
releaseDate: 2025-11-04
modelType: ライトミドル / デカヘソ（ドデカSTART） / LT搭載
gameType: 一種二種混合 / 二段階突破型 / 時間管理型上乗せZONE / LT
modelNumber: Pいくさの子戦極最強GRPJ
jackpotProbability: 通常時 約1/199（解析資料では1/199.8）。「戦極最強の刻」「極・戦極最強の刻」中 約1/69.9。
initialPayout: 初当り2R 約300個（払出）100%。約20%で「桶狭間の戦いBONUS」へ、約80%で通常へ。
rushEntryRate: 桶狭間の戦いBONUS突入 約20%。同BONUS勝利期待度約50%で「戦極最強の刻」またはLT「極・戦極最強の刻」へ。
rushContinuationRate: 桶狭間の戦いBONUSは勝利期待度約50%。戦極最強の刻/極・戦極最強の刻は規定時間終了後に必ず桶狭間の戦いBONUSへ戻り、再び約50%で上乗せZONEへ再突入するループ構造。単純なST継続率ではない。
ltName: 極・戦極最強の刻
ltEntryRoute: 初当り後約20%で桶狭間の戦いBONUSへ → 今川義元とのバトル勝利約50%で上乗せZONEへ → 勝利時の約25%でLT「極・戦極最強の刻」（300秒）。勝利時の約75%は通常上乗せZONE「戦極最強の刻」（100秒）。戦極最強の刻/極・戦極最強の刻終了後は桶狭間の戦いBONUSへ戻るため、ループ中にも再度LT抽選機会がある。
ltEntryRate: 桶狭間の戦いBONUS勝利時の約25%がLT。通常遊技全体基準の総LT到達率/確率は直接公表値を確認できず、20%・50%・25%から独自算出しない（UNVERIFIED_AFTER_RESEARCH）。
ltContinuationRate: LT「極・戦極最強の刻」自体は300秒の時間管理型上乗せZONEで、300秒終了後に桶狭間の戦いBONUSへ移行。桶狭間の戦いは約50%で再び（極）戦極最強の刻へ。LTを一般的なST継続率として表す直接公表値は確認できず、約50%は桶狭間の戦いBONUSの勝利/ループ期待度として保存。
ltPayoutStructure: 極・戦極最強の刻は300秒間、約1/69.9で約1500個（10R）を上乗せ。平均大当り回数約5回。公表される獲得期待出玉約9000個は、約1500個×LT中平均大当り約5回＋終了後の桶狭間の戦いBONUS約1500個の合算期待値であり、単一大当り出玉ではない。
totalPayoutDistribution: 初当り=2R約300個＋桶狭間の戦いBONUS約20% / 2R約300個＋通常約80%。桶狭間の戦いBONUS=10R約1500個＋（極）戦極最強の刻約50% / 10R約1500個＋通常約50%（敗北後に約0.5%で復活・継続する解析注記あり）。勝利時の秒数振り分け=極・戦極最強の刻300秒約25% / 戦極最強の刻100秒約75%。戦極最強の刻は平均大当り約1.7回＋終了後BONUS込み獲得期待約4000個、極・戦極最強の刻は平均大当り約5回＋終了後BONUS込み獲得期待約9000個。
timeShortening: 通常時は時短なし。桶狭間の戦いBONUSを経て、戦極最強の刻100秒または極・戦極最強の刻300秒の時間管理型上乗せZONEへ。一般的な「ST○回」ではなく秒数管理。
cTimeOrSpecialSystems: ドデカSTART（デカヘソ）搭載。戦極最強の刻/極・戦極最強の刻は規定秒数内に約1/69.9の大当りを抽選し、大当り中は秒数減算が停止、終了後は残り秒数から再開する時間管理型。規定時間終了後は桶狭間の戦いBONUSへ移行。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。
gameFlow: |
  通常時（約1/199、解析詳細1/199.8）
   ↓ 初当り2R 約300個
   ├─ 約80% → 通常時
   └─ 約20% → 桶狭間の戦いBONUS（10R 約1500個）
                  ↓ 今川義元とのバトル
                  ├─ 約50%敗北 → 通常時
                  └─ 約50%勝利
                       ├─ 約75% → 戦極最強の刻（100秒、約1/69.9）
                       │             └─ 終了後 → 桶狭間の戦いBONUSへ
                       └─ 約25% → LT「極・戦極最強の刻」（300秒、約1/69.9）
                                     └─ 終了後 → 桶狭間の戦いBONUSへ
  ※100秒/300秒ZONE中は大当りごとに約1500個を上乗せし、大当り中は秒数減算停止。
notes:
- パチビー、K-Navi、一撃が本スペックのラッキートリガー搭載を明示。必勝本はLT正式名称を「極・戦極最強の刻」と明示し、発動契機を桶狭間の戦い勝利時の約25%としている。
- 型式は `Pいくさの子戦極最強GRPJ`。サミー発表、銀座製。2024年9月の「Pいくさの子 織田三郎信長伝」とは追加スペックとして分離。
- 通常時大当りは業界資料・P-WORLD等で「約1/199」、一撃等の解析資料で1/199.8。丸め差として扱いCONFLICTにはしない。
- 「RUSH継続率約50%」は桶狭間の戦いBONUSで次の（極）戦極最強の刻へ進む勝利期待度/ループ構造を示す。100秒/300秒ZONE自体の大当り継続率と混同しない。
- 約4000個/約9000個は単一大当り出玉ではなく、ZONE中平均上乗せ＋終了後の桶狭間の戦いBONUSを含む期待出玉。払出1500個/300個と分離。
- 通常遊技全体基準の総LT到達率/確率は直接公表値を確認できず、経路値を掛け合わせて推測しない。
sources:
- https://news.p-world.co.jp/articles/31715
- https://news.p-world.co.jp/articles/31720/greenbelt
- https://www.p-world.co.jp/machine/database/10334
- https://www.pachibee.jp/machines/index/125090020
- https://1geki.jp/pachinko/p_ikusanoko_ds/
- https://p-kn.com/pachinko/4385/
- https://p-johojima.jp/machine_spec/post-13327/
- https://hisshobon.com/machineinfo/98838/
- https://hisshobon.com/machineinfo/98839/
retrievedAt: 2026-09-23
confidence: INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields:
- 通常遊技全体基準の総LT到達率/確率（十分な再探索後も直接公表値未確認）
conflicts: []
