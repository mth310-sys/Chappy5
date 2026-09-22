# e黄門ちゃま寿限無 LLサイズ

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e黄門ちゃま寿限無 LLサイズ
manufacturer: 平和
modelNumber: e黄門ちゃま9HC3
releaseDate: 2025-08-04
modelType: スマパチ / ハイミドル / LT3.0 PLUS / LLサイズSTART
gameType: 一種二種混合 / ST / 下位RUSH突破型LT

jackpotProbability:
- 通常時図柄揃い: 1/399.8 ※水戸チャージ除外
- 通常時大当り合算: 1/348.5
- 水戸チャージ: 約1/2716
- 寿限無RUSH / 寿限無RUSH極中: 1/97.0

initialPayout:
- 特図1図柄揃い: 2R 約300個（払い出し）
- 水戸チャージ: 2R 約300個（払い出し）

rushEntryRate:
- 特図1図柄揃い時: 約52%で寿限無RUSH
- 水戸チャージの一部からも寿限無RUSHへ移行する経路あり。具体割合は今回の高信頼資料で固定せず。
rushContinuationRate: 寿限無RUSH 約50%（ST66回 / 特図2に限る）

ltName: 寿限無RUSH極
ltEntryRoute: 寿限無RUSH中に大当り → 大当り振り分け約50%の「6000個+α」でLT「寿限無RUSH極」へ。通常図柄揃いからは約52%で下位RUSHに入り、そこで大当りかつLT振り分けを取る構造。
ltEntryRate:
- 寿限無RUSH中大当り時: 約50%
- 通常遊技全体を分母とする総LT到達率は直接公表値を今回確認できずUNVERIFIED_AFTER_RESEARCH。約52%・下位継続約50%・振り分け約50%から独自換算しない。
ltContinuationRate: 約75%（ST132回 / 特図2に限る）

ltPayoutStructure:
- 約6000個+α + 寿限無RUSH極継続: 約7%
- 約3000個 + 寿限無RUSH極継続: 約93%
- 約3000個 = 約1500個×2回、約6000個 = 約1500個×4回の払い出し合計。
- 「+α」は約3000個のおかわり上乗せを含む表記。期待出玉や単一10R出玉と混同しない。

totalPayoutDistribution:
- 特図1図柄揃い: 約300個 + 寿限無RUSH 約52% / 約300個 + 通常 約48%
- 寿限無RUSH中: 約6000個+α + 寿限無RUSH極 約50% / 約3000個 + 寿限無RUSH 約50%
- 寿限無RUSH極中: 約6000個+α + 寿限無RUSH極 約7% / 約3000個 + 寿限無RUSH極 約93%

timeShortening:
- 寿限無RUSH: ST66回
- 寿限無RUSH極: ST132回
- 普電STのため残保留抽選なしとする解析資料あり。規定ST消化で通常へ。

cTimeOrSpecialSystems: LT3.0 PLUS / LLサイズSTART。水戸チャージ経由の一部RUSH突入あり。右打ち大当りは複数回の約1500個払い出しを組み合わせ、3000個/6000個+αを構成。
ceilingOrSupport: 遊タイム非搭載 / コンプリート機能搭載

gameFlow: |
  通常時
   ├─ 図柄揃い 1/399.8 → 2R 約300個
   │   ├─ 約52%: 寿限無RUSH（ST66 / 1/97.0 / 継続約50%）
   │   │   ├─ 大当り時約50%: 約6000個+α → LT「寿限無RUSH極」
   │   │   └─ 大当り時約50%: 約3000個 → 寿限無RUSH継続
   │   └─ 約48%: 通常時
   └─ 水戸チャージ 約1/2716 → 2R 約300個
       ├─ 一部: 寿限無RUSH
       └─ その他: 通常時

  LT「寿限無RUSH極」
   └─ ST132 / 1/97.0 / 継続約75%
       ├─ 約7%: 約6000個+α → LT継続
       └─ 約93%: 約3000個 → LT継続
       STスルー → 通常時

notes:
- 図柄揃い1/399.8、大当り合算1/348.5、水戸チャージ約1/2716は分母定義を分離。
- P-WORLD、必勝本、情報島＋等で図柄揃いRUSH突入約52%、下位ST66回/約50%、LT ST132回/約75%、下位大当り50%でLT、LT中7%/93%を照合。
- 必勝本LT解説本文に「通常時図柄揃い時の50%でRUSH」と丸めた説明があるが、同サイト基本スペックおよび複数資料の約52%を正式な機種値として採用。説明上の概数差でありCONFLICT扱いしない。
- 2026-02-02導入のP黄門ちゃま寿限無 LLサイズ 259ver.およびP黄門ちゃま寿限無 99ver.とは別スペック。混同しない。
- 通常遊技全体基準の総LT到達率は十分な再探索後も直接公表値を固定できずUNVERIFIED_AFTER_RESEARCH。経路から独自算出しない。

sources:
- https://yugi-nippon.com/pachinko-new-machine/post-71474/ — 遊技日本。型式e黄門ちゃま9HC3、LT3.0プラス、1/399.8、右1/97.0、RUSH約52%、ST66/132、継続約50%/75%を照合。
- https://www.p-world.co.jp/machine/database/10295 — P-WORLD。1/399.8、合算1/348.5、約52%、ST66/132、下位50%で6000個+LT、LT約75%、出玉定義を照合。
- https://hisshobon.com/machineinfo/98199/ — 必勝本。2025-08-04、1/399.8、水戸チャージ約1/2716、合算1/348.5、右1/97.0、約52%、ST66/132、約50%/75%、LT搭載を照合。
- https://hisshobon.com/machineinfo/98201/ — 必勝本。LT正式名称「寿限無RUSH極」、下位RUSH中6000個大当り50%が唯一のLT発動契機、ST132、約75%、残保留抽選なしを照合。
- https://p-johojima.jp/new_machine/post-9203/ — 情報島＋。特図1 52/48、下位50/50、LT 7/93、3000=1500×2、6000=1500×4を照合。
- https://1geki.jp/pachinko/e_koumon_jlls/ — 一撃。導入2025-08-04、型式e黄門ちゃま9HC3、LT搭載、一種二種混合を照合。

confidence:
- LT搭載/名称/導入日/型式/基本確率/RUSH構造/ST/継続率/主要振り分け: INDUSTRY + ANALYSIS_HIGH（複数照合）
- 通常遊技全体基準の総LT到達率: UNVERIFIED

missingFields:
- 水戸チャージから寿限無RUSHへ移行する具体割合
- 通常遊技全体を分母とする総LT到達率の直接公表値

conflicts: none
