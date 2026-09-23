# P黄門ちゃま寿限無 99ver.

machineName: P黄門ちゃま寿限無 99ver.
manufacturer: 平和
releaseDate: 2026-02-02
modelType: 甘デジ
formalModelName: P黄門ちゃま9AD2
gameType: 一種二種混合 / ST型 / ラッキートリガー搭載
jackpotProbability: 通常時 1/99.9 / 右打ち中 1/84.6
initialPayout: 2R 約300個（払出）
rushEntryRate: 約50%
rushContinuationRate: 寿限無RUSH 約70%（ST100回、特図2）
ltName: 寿限無RUSH極
ltEntryRoute: 寿限無RUSH中の大当りの約10%で2,000個＋αを獲得し、寿限無RUSH極へ突入
ltEntryRate: RUSH中大当りの約10%。通常遊技全体基準の総LT到達率は直接公表値を確認できず、経路値から独自算出しない。
ltContinuationRate: 約80%（ST134回、特図2）
ltPayoutStructure: 寿限無RUSH極中は約95%が2,000個＋α、約5%が4,000個＋α。2,000個は500個×4回、4,000個は500個×8回として公表され、大当り時は600個となる旨の注記あり。単一大当りの払出として扱わない。
totalPayoutDistribution: 通常時=300個＋寿限無RUSH 約50% / 300個＋通常 約50%。寿限無RUSH中=2,000個＋α＋寿限無RUSH極 約10% / 500個＋寿限無RUSH 約90%。寿限無RUSH極中=4,000個＋α＋LT継続 約5% / 2,000個＋α＋LT継続 約95%。
timeShortening: 0回 / ST100回 / ST134回
cTimeOrSpecialSystems: 2,000個＋αは500個×4回、4,000個＋αは500個×8回。資料により「2,000個大当り当選時は5%で2,000個上乗せループ」と説明される。+αを固定払出値へ変換しない。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時 1/99.9
   ↓ 初当り（2R 約300個）
   ├─ 約50% → 通常へ
   └─ 約50% → 寿限無RUSH（ST100回 / 約70%）
                    ↓ RUSH中大当り
                    ├─ 約90% → 約500個＋寿限無RUSH継続
                    └─ 約10% → 2,000個＋α＋LT「寿限無RUSH極」
                                      ↓
                               寿限無RUSH極（ST134回 / 約80%）
                                      ↓ 大当り
                                      ├─ 約95% → 2,000個＋α＋LT継続
                                      └─ 約5% → 4,000個＋α＋LT継続
notes: |
  同日導入の「P黄門ちゃま寿限無 LLサイズ 259ver.」（型式 P黄門ちゃま9ME2）はLT非搭載の別スペック。本レコードの99ver.（P黄門ちゃま9AD2）と混同しない。
  継続率は公表上、寿限無RUSH約70%、寿限無RUSH極約80%。「約」「+α」を保持する。
  2,000個/4,000個は複数回大当りの合計表現であり、単一大当り出玉として保存しない。
sources:
  - url: https://www.heiwanet.co.jp/news/2025/
    retrievedAt: 2026-09-23
    role: OFFICIAL
    note: 平和公式ニュースで2025-12-08に99ver.製品情報掲載を確認。
  - url: https://news.p-world.co.jp/articles/32483/greenbelt
    retrievedAt: 2026-09-23
    role: INDUSTRY
    note: 2026-02-02導入、1/99.9、RUSH50%/約70%、RUSH中約10%でLT、LT約80%、主要振り分けを確認。
  - url: https://yugi-nippon.com/pachinko-new-machine/post-74589/
    retrievedAt: 2026-09-23
    role: INDUSTRY
    note: 型式P黄門ちゃま9AD2、平和、兄弟259ver.との区別を確認。
  - url: https://pachimaga.com/free/mach/maker-p/heiwa/064619.php
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: 型式、1/99.9、ST100、約70%、RUSH中10%でLTを照合。
  - url: https://nana-press.com/kaiseki/machine/1102/34785/
    retrievedAt: 2026-09-23
    role: ANALYSIS_HIGH
    note: 右1/84.6、ST100/134、約70/80%、出玉定義、遊タイム非搭載を照合。
confidence: INDUSTRY
missingFields:
  - 通常遊技全体基準の総LT到達率（直接公表値未確認）
conflicts: none
status: COMPLETE_CORE
