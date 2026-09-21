# PLT世界でいちばん強くなりたい!2

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: PLT世界でいちばん強くなりたい!2
formalModel: PLT世界でいちばん強くなりたいMQ
manufacturer: サンセイR&D
releaseDate: 2025-05-07
modelType: ライトミドル / LT搭載
gameType: 一種二種混合 / 下位ST型RUSH → LTループ型

jackpotProbability:
- 通常時: 1/199.5
- 右打ち時: 1/1.71

initialPayout:
- 通常時初当り: 6R 約600個（払出）

rushEntryRate:
- 悶STARラッシュ突入率: 約60%
- 特図1: 6R約600個 + RUSH（時短2回+残保留1個）60% / 6R約600個 + 時短なし40%

rushContinuationRate:
- 悶STARラッシュ: TOTAL約93%
- 内訳定義: 時短2回の継続約82.8% + 残保留1個の継続約58.5%の合算

ltName: 悶STARラッシュHYPER
ltEntryRoute:
- 初当りの60%で下位「悶STARラッシュ」へ。
- 悶STARラッシュ中の10R大当りの50%でLT突入と解析資料が説明。
- 特図2全大当り基準では10R+LT（時短100回+残保留1個）が3.0%。
- 10Rは合計6.0%（LT 3.0% / 下位RUSH 3.0%）のため、「10R時50%」と「全大当りの3%」は分母差で整合しCONFLICTではない。

ltEntryRate:
- 悶STARラッシュ中の全大当り基準: 3.0%
- 悶STARラッシュ中10R大当りを条件にした場合: 50%
- 通常初当りを分母とした総LT到達率: UNVERIFIED（直接公表値を確認できず、経路値から独自計算しない）

ltContinuationRate:
- 悶STARラッシュHYPER TOTAL: 約99%
- LT本体継続約97.5% + 残保留1個継続約58.5%の合算定義。
- 「一発逆転さくらスペシャル」で残保留当選した場合は下位「悶STARラッシュ」の振り分けとなる。

ltPayoutStructure:
- 悶STARラッシュHYPER中 特図2:
  - 10R 約700個 + LT（時短100回+残保留1個）: 6.0%
  - 2R 約140個 + LT（時短100回+残保留1個）: 91.5%
  - 2R 約140個 + 時短なし「一発逆転さくらスペシャル」（残保留1個）: 2.5%
- 出玉は払出表記。

totalPayoutDistribution:
- 通常時 特図1:
  - 6R 約600個 + 悶STARラッシュ（2回+残保留1個）: 60%
  - 6R 約600個 + 時短なし: 40%
- 悶STARラッシュ中 特図2:
  - 10R 約700個 + LT（100回+残保留1個）: 3%
  - 10R 約700個 + 悶STARラッシュ（2回+残保留1個）: 3%
  - 2R 約140個 + 悶STARラッシュ（2回+残保留1個）: 94%
- 特図2残保留で当選した場合は悶STARラッシュ中の振り分け。

timeShortening:
- 悶STARラッシュ: 時短2回 + 残保留1個
- 悶STARラッシュHYPER: 時短100回 + 残保留1個
- 一発逆転さくらスペシャル: 時短0回 + 残保留1個

cTimeOrSpecialSystems:
- 一発逆転さくらスペシャル: LT中2.5%の時短なし大当り後に残保留1個で引き戻しを狙う。引き戻し成功時は下位RUSH振り分けへ。
- Cタイム: 確認なし。

ceilingOrSupport:
- 遊タイム: 非搭載
- 潜伏確変: 非搭載

gameFlow:
通常時 1/199.5
 ↓ 初当り 6R約600個
60% → 悶STARラッシュ / 40% → 通常時
 ↓
悶STARラッシュ = 時短2回+残保留1個、右1/1.71、TOTAL約93%
 ↓ 大当り
10Rの50%（全大当り基準3%）→ LT「悶STARラッシュHYPER」
その他 → 悶STARラッシュ継続
 ↓
悶STARラッシュHYPER = 時短100回+残保留1個、TOTAL約99%
 ↓
97.5%相当のLT継続振り分け / 2.5%時短なし → 一発逆転さくらスペシャル
 ↓ 残保留1個で当選（約58.5%）
悶STARラッシュの振り分けへ / 非当選で通常時

notes:
- サンセイR&D発表を報じた複数業界記事で2025-05-07導入、1/199.5、RUSH約60%、下位約93%、LT約99%、時短2回or100回を確認。
- 型式 `PLT世界でいちばん強くなりたいMQ` は一撃およびスペックDBで一致。
- LTは単純に下位RUSHの回数を延長するだけでなく、下位のSTタイプ（2回+残保留1）からLTの実質ループ型（100回+残保留1）へゲーム構造が変化する。
- 約99%はLT本体約97.5%と残保留引き戻し約58.5%を合算したTOTAL値。定義を分離して保存。
- 通常初当り基準の総LT到達率は直接値未確認のため推測しない。

sources:
- https://news.p-world.co.jp/articles/30480/amusement — アミューズメントジャパン/P-WORLD業界ニュース。メーカー発表、導入日、通常/右確率、RUSH約60%/93%、LT約99%、時短。取得日2026-09-21。
- https://news.p-world.co.jp/articles/30455/greenbelt — グリーンべると/P-WORLD業界ニュース。メーカー発表、導入日、ST→ループ型LT、約99%。取得日2026-09-21。
- https://1geki.jp/pachinko/p_sekatuyo2/ — 一撃。型式、導入日、基本スペック、LT搭載。取得日2026-09-21。
- https://1geki.jp/pachinko/p_sekatuyo2/51/ — 一撃。下位RUSH、10R時50%LT、LT構造。取得日2026-09-21。
- https://nana-press.com/kaiseki/machine/963/28963/ — なな徹。確率、継続率定義、特図1/特図2/LT振り分け、払出、遊タイム非搭載。取得日2026-09-21。
- https://www.p-world.co.jp/machine/database/10248 — P-WORLD機種DB。3% LT、約99%定義、一発逆転さくらスペシャル。取得日2026-09-21。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当りを分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH
conflicts: none
