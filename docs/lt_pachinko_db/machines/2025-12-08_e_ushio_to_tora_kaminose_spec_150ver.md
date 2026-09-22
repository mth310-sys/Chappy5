# eうしおととら～神のせSPEC～150ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: eうしおととら～神のせSPEC～150ver.
manufacturer: D-light（ディ・ライト / Daiichiグループ）
modelName: eうしおととら～月と太陽～FH-FH
releaseDate: 2025-12-08
modelType: ライトミドル / スマパチ / LT3.0プラス

gameType: 1種2種混合 / ST型LT

jackpotProbability:
- 通常時大当り: 1/150.3
- 真うしとらRUSH中大当り: 1/150.3
- 特図2小当り: 約1/1との解析あり。右は205回のST型として公表。

initialPayout:
- 通常時大当り: 3R 240個（払い出し設計値）100%

rushEntryRate:
- 真うしとらRUSH突入: 30%
- 本機は真うしとらRUSH自体がLT。非LT下位RUSHは存在しない。

rushContinuationRate:
- 非LT下位RUSH: 該当なし

ltName: 真うしとらRUSH

ltEntryRoute:
- 通常時1/150.3大当り → 3R 240個 → 30%で真うしとらRUSH（LT）205回。
- 残り70%は240個後通常へ。

ltEntryRate:
- 初当り時 真うしとらRUSH突入率: 30%
- 通常遊技全体を分母にした別表現のLT確率は今回直接公表値を確認していないため独自算出しない。

ltContinuationRate:
- 真うしとらRUSH: 約75%
- ST205回、RUSH中大当り1/150.3。

ltPayoutStructure:
- 真うしとらRUSH中: 3000個以上「二体で最強BONUS」30% / 1500個＋真うしとらRUSH継続70%。いずれもLT継続。
- 二体で最強BONUS内訳: 7500個＋α 約19% / 6000個 約14% / 4500個 約24% / 3000個 約43%。終了後は真うしとらRUSHへ。
- 3000/4500/6000/7500個は1500個×複数回の合計値。単一大当りの出玉として扱わない。

totalPayoutDistribution:
- 特図1: 240個＋真うしとらRUSH 30% / 240個＋通常 70%。
- 特図2: 3000個以上＋真うしとらRUSH 30% / 1500個＋真うしとらRUSH 70%。
- 二体で最強BONUS: 7500個＋α 19% / 6000個 14% / 4500個 24% / 3000個 43%。

timeShortening:
- 通常大当り後: 0回 or 205回。
- 真うしとらRUSH: 205回。

cTimeOrSpecialSystems:
- LT3.0プラス。
- 二体で最強BONUSは複数回の1500個大当りをまとめた出玉塊。+αは想定を含む表記として扱い、固定7500個超と断定しない。

ceilingOrSupport:
- 遊タイム: 非搭載。
- コンプリート機能: 搭載。

gameFlow: |
  通常時 1/150.3
   ↓ 初当り 3R 240個
   ├─ 70% → 通常
   └─ 30%
        ↓
      LT「真うしとらRUSH」205回
      継続 約75%
       ↓ 大当り
       ├─ 70% → 1500個＋真うしとらRUSH継続
       └─ 30% → 二体で最強BONUS（3000個以上）
                   7500個＋α 19% / 6000個 14% / 4500個 24% / 3000個 43%
                   → 真うしとらRUSH継続

notes:
- 2025-12-08同時導入の399ver.とは別レコード。150ver.は通常1/150.3、初当り240個、LT突入30%。
- 型式は `eうしおととら～月と太陽～FH-FH`。商品名と型式名が異なるため両方保持。
- P-WORLD、一撃、パチマガスロマガ等でLT搭載、型式、導入日、30%/約75%、主要振り分けを横断照合。
- 真うしとらRUSHは下位RUSHではなくLTそのもの。RUSH=LT直行型として扱う。

sources:
- https://1geki.jp/pachinko/e_ushitora_kaminose150/ — 一撃。型式、検定番号、LT明示、導入日、確率/構造。取得日 2026-09-23。
- https://www.p-world.co.jp/machine/database/10365 — P-WORLD。1/150.3、30%、約75%、ST205、240個、右30/70、複数回出玉定義。取得日 2026-09-23。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/d-light_pachi/037/kh02.php — パチマガスロマガ。確率、LT性能、時短0/205、遊タイムなし。取得日 2026-09-23。
- https://pachinko-spec.info/spec/162995/ — スペック解析。D-light、型式、LT3.0+、一種二種、導入日。取得日 2026-09-23。
- https://ativo.jp/2025/10/07/e%E3%81%86%E3%81%97%E3%81%8A%E3%81%A8%E3%81%A8%E3%82%89%EF%BD%9E%E7%A5%9E%E3%81%AE%E3%81%9Bspec%EF%BD%9E150ver/ — Ativo。型式、検定番号、主要振り分け。取得日 2026-09-23。

confidence:
- LT搭載/名称/型式/導入日/通常確率/30%/約75%/ST205: ANALYSIS_HIGH（複数一致）
- 主要出玉振り分け: ANALYSIS_HIGH（複数一致）
- 通常遊技全体基準の別表現LT確率: UNVERIFIED_AFTER_RESEARCH

missingFields:
- 通常遊技全体を分母にした直接公表のLT到達確率（初当り時30%以外の別表現）

conflicts: []
