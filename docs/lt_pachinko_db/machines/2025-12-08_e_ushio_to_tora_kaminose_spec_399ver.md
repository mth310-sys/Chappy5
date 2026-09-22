# eうしおととら～神のせSPEC～399ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: eうしおととら～神のせSPEC～399ver.
manufacturer: D-light（ディ・ライト / Daiichiグループ）
modelName: eうしおととら～月と太陽～FM-JF
releaseDate: 2025-12-08
modelType: ハイミドル / スマパチ / LT3.0プラス

gameType: 1種2種混合 / ST型LT

jackpotProbability:
- 通常時図柄揃い: 1/399.9（うしとらチャージ除く）
- うしとらチャージ: 約1/2800との解析あり
- 真うしとらRUSH中: 1/150.3

initialPayout:
- 通常時図柄揃い: 10R 約1500個（払い出し）100%
- うしとらチャージは別当りとして分離。LT昇格時は約1500個獲得後LTへ入るとの解析あり。

rushEntryRate:
- 図柄揃いから真うしとらRUSH: 61%
- 本機は真うしとらRUSH自体がLT。非LT下位RUSHは存在しない。

rushContinuationRate:
- 非LT下位RUSH: 該当なし

ltName: 真うしとらRUSH

ltEntryRoute:
- 通常時図柄揃い1/399.9 → 1500個 → 61%で真うしとらRUSH（LT）205回。
- 39%は1500個後通常へ。
- うしとらチャージからLT昇格する経路も解析資料で確認。具体昇格割合は今回直接確認できず推測しない。

ltEntryRate:
- 図柄揃い時 真うしとらRUSH突入率: 61%。
- うしとらチャージ経由を含む通常遊技全体基準の総LT到達率/確率は直接公表値未確認のため独自算出しない。

ltContinuationRate:
- 真うしとらRUSH: 約75%
- ST205回、RUSH中大当り1/150.3。

ltPayoutStructure:
- 真うしとらRUSH中: 3000個以上「二体で最強BONUS」30% / 1500個＋真うしとらRUSH継続70%。いずれもLT継続。
- 二体で最強BONUS内訳: 7500個＋α 約19% / 6000個 約14% / 4500個 約24% / 3000個 約43%。終了後は真うしとらRUSHへ。
- 3000/4500/6000/7500個は1500個×複数回の合計値。単一大当り出玉ではない。

totalPayoutDistribution:
- 特図1図柄揃い: 1500個＋真うしとらRUSH 61% / 1500個＋通常 39%。
- 特図2: 3000個以上＋真うしとらRUSH 30% / 1500個＋真うしとらRUSH 70%。
- 二体で最強BONUS: 7500個＋α 19% / 6000個 14% / 4500個 24% / 3000個 43%。

timeShortening:
- 通常図柄揃い後: 0回 or 205回。
- 真うしとらRUSH: ST205回。
- 一部解析で二体で最強BONUSの内部連続当りに実質次回までの電サポ表現あり。出玉塊形成用の状態として通常ST205回と分離する。

cTimeOrSpecialSystems:
- LT3.0プラス。
- うしとらチャージ搭載。図柄揃い確率1/399.9から除外される別契機。
- 二体で最強BONUSは複数回1500個大当りをまとめた出玉塊。+αは想定を含む表記。

ceilingOrSupport:
- 遊タイム: 非搭載。
- コンプリート機能: 搭載。

gameFlow: |
  通常時
   ├─ 図柄揃い 1/399.9（チャージ除く）→ 1500個
   │    ├─ 39% → 通常
   │    └─ 61% → LT「真うしとらRUSH」205回
   │                   継続 約75%
   │                    ↓ 大当り
   │                    ├─ 70% → 1500個＋LT継続
   │                    └─ 30% → 二体で最強BONUS 3000個以上
   │                                7500個＋α 19% / 6000個 14% / 4500個 24% / 3000個 43%
   │                                → LT継続
   └─ うしとらチャージ 約1/2800
        └─ 一部でLT昇格経路あり（具体割合未確認）

notes:
- 2025-12-08同時導入の150ver.とは別レコード。399ver.は図柄揃い1/399.9、初当り1500個、LT突入61%。
- 型式は `eうしおととら～月と太陽～FM-JF`。検定番号510480との解析資料あり。
- 図柄揃い1/399.9はうしとらチャージを除く。チャージ込み確率と混同しない。
- 真うしとらRUSHは下位RUSHではなくLTそのもの。RUSH=LT直行型。

sources:
- https://www.p-world.co.jp/machine/database/10366 — P-WORLD。1/399.9（チャージ除く）、1/150.3、61%、約75%、ST205、主要振り分け。取得日 2026-09-23。
- https://nana-press.com/kaiseki/machine/1052/33357/ — なな徹。LT搭載、確率、61%/75%、出玉、遊タイムなし。取得日 2026-09-23。
- https://nana-press.com/kaiseki/machine/1052/33358/ — なな徹。うしとらチャージからLT昇格経路、ゲームフロー。取得日 2026-09-23。
- https://ativo.jp/2025/10/07/e%E3%81%86%E3%81%97%E3%81%8A%E3%81%A8%E3%81%A8%E3%82%89%EF%BD%9E%E7%A5%9E%E3%81%AE%E3%81%9Bspec%EF%BD%9E399ver/ — Ativo。型式、検定番号、LT、主要振り分け。取得日 2026-09-23。
- https://pachinko-spec.info/spec/163002/ — スペック解析。D-light、型式、LT3.0+、導入日。取得日 2026-09-23。
- https://www.chiba-tv.com/plus/detail/2025121046991 — 遊技日本転載業界記事。2スペック同時導入、LT直突入。取得日 2026-09-23。

confidence:
- LT搭載/名称/型式/導入日/図柄揃い確率/61%/約75%/ST205: INDUSTRY + ANALYSIS_HIGH
- 主要出玉振り分け: ANALYSIS_HIGH（複数一致）
- うしとらチャージ約1/2800・LT昇格経路: ANALYSIS_HIGH。ただし昇格割合はUNVERIFIED_AFTER_RESEARCH
- 通常遊技全体基準の総LT到達率: UNVERIFIED_AFTER_RESEARCH

missingFields:
- うしとらチャージからLTへ昇格する具体割合
- チャージ経由を含む通常遊技全体基準の直接公表総LT到達率/確率

conflicts: []
