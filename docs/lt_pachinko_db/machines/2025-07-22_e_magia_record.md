# e マギアレコード 魔法少女まどか☆マギカ外伝

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e マギアレコード 魔法少女まどか☆マギカ外伝
manufacturer: 京楽産業.
modelNumber: eマギアレコード魔法少女まどか☆マギカ外伝KRJ1
releaseDate: 2025-07-22
modelType: スマパチ / ミドル / LT3.0 PLUS
gameType: 一種二種混合 / ST / 直LT型

jackpotProbability:
- 図柄揃い: 約1/399（解析詳細値 1/399.9） ※マギレポチャージ図柄を除く
- 大当り合算: 約1/349
- マギレポチャージ: 約1/2800（解析値）
- コネクトRUSH中: 約1/97（解析詳細値 1/97.1）

initialPayout:
- 図柄揃い: 10R 1000個（払い出し）
- マギレポチャージ: 2R 200個（解析資料）

rushEntryRate: 図柄揃い時50%。本機は通常RUSHを別段階に持たず、突入先コネクトRUSH自体がLT。
rushContinuationRate: 通常RUSHなし

ltName: コネクトRUSH
ltEntryRoute: 通常時図柄揃いの50% → 1000個 + 1G連（VコネクトBONUS）保証 + コネクトRUSH。メーカー公式は「初当り出玉1000個にプラスしてVコネクトBONUSの出玉を持ってLTへ突入」と明記。
ltEntryRate: 図柄揃い時50%。通常遊技全体を分母とする総LT到達率の直接公表値は今回確認できず、図柄揃い/チャージ合算から独自計算しない。
ltContinuationRate:
- 約83%（1G連込み）
- ST単体の解析値として約77%表記あり。約83%と混同しない。

ltPayoutStructure:
- VコネクトBONUS: 800 / 1200 / 1600 / 2000 / 2400 / 2800 / 3200 / 3600 / 4000個 + α
- 800〜1200個: 約21.0%
- 1600個: 約26.7%
- 2000〜2800個: 約43.3%
- 3200〜4000個: 約9.0%
- VコネクトBONUSは2R(200個)・6R(600個)・10R(1000個)の組み合わせによる大当り4回分。
- 出玉が多いほど1G連期待度が上昇するLT3.0 PLUS「新1G連」。

totalPayoutDistribution:
- 通常時図柄揃い: 1000個 + VコネクトBONUS + ST140回 50% / 1000個・通常へ 50%
- LT中: 上記VコネクトBONUS分布

timeShortening:
- コネクトRUSH: ST140回
- 非突入図柄揃い: 0回
- RUSH突入時は1G連保証（実質次回扱いの資料あり）

cTimeOrSpecialSystems: LT3.0 PLUSによる「新1G連」。VコネクトBONUSの出玉数が多いほど1G連期待度アップ。RUSH突入時は1G連を必ず保証。
ceilingOrSupport: 遊タイムなし / 潜伏確変なし / コンプリート機能搭載

gameFlow: |
  通常時
   ├─ 図柄揃い 約1/399
   │   ├─ 50%: 10R 1000個 → 1G連 VコネクトBONUS保証 → LT「コネクトRUSH」
   │   └─ 50%: 10R 1000個 → 通常時
   └─ マギレポチャージ（解析 約1/2800）→ 2R 200個

  LT「コネクトRUSH」
   └─ ST140回 / RUSH中約1/97 / 1G連込み継続約83%
       └─ VコネクトBONUS 800〜4000個+α → 出玉量に応じて1G連期待度変化 → LT継続

notes:
- LT搭載根拠はメーカー公式および業界一次記事で確認。
- 「約1/399」は図柄揃い確率でマギレポチャージ図柄を除く。大当り合算約1/349と定義を分離。
- 継続率約83%は1G連込み。ST140回・約1/97のみの継続率として約77%を掲載する解析資料があるが、定義差でありCONFLICTではない。
- 出玉は払い出し。小当り時はV入賞が条件。
- 通常遊技全体基準の総LT到達率は、直接公表値未確認のためUNVERIFIED_AFTER_RESEARCH。独自合算しない。

sources:
- https://www.kyoraku.co.jp/news/detail/835 — メーカー公式。2025-07-22導入、LT3.0 PLUS、新1G連、RUSH突入時1G連保証、LTコネクトRUSH140回、約83%、800〜4000個+α。
- https://news.p-world.co.jp/articles/31105/greenbelt — 業界記事。導入日、LT搭載、確率、突入率、ST、主要振り分けを照合。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/kyoraku_pachi/227/kh01.php — パチマガスロマガ。型式、仕様、導入日、確率・ST概要を照合。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/kyoraku_pachi/227/kh02.php — パチマガスロマガ詳細。大当り合算、遊タイム/LT/コンプリート機能等を照合。
- https://nana-press.com/kaiseki/machine/981/30759/ — なな徹。基本スペック、払い出し、遊タイムなしを照合。
- https://chonborista.com/pachinko/kyoraku/235619/ — 解析補助。1/399.9、チャージ1/2800、1/97.1、ST単体約77%/1G連込み約83%を定義分離に使用。

confidence:
- LT搭載/名称/導入日/140回/約83%/50%/主要出玉: OFFICIAL + INDUSTRY
- 型式/詳細確率/チャージ/補助仕様: ANALYSIS_HIGH（複数照合）
- 総LT到達率（通常遊技全体基準）: UNVERIFIED

missingFields:
- 通常遊技全体を分母とする総LT到達率の直接公表値

conflicts: none
