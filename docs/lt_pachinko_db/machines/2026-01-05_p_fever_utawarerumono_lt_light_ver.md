# Pフィーバーうたわれるもの LT-Light ver.

status: CONFLICT
retrievedAt: 2026-09-23

machineName: Pフィーバーうたわれるもの LT-Light ver.
manufacturer: SANKYO
formalModelName: PAフィーバーうたわれるものY
releaseDate: 2026-01-05
modelType: 甘デジ / LT搭載
gameType: 一種二種混合 / ST（時短）+残保留 / 2段階LT

jackpotProbability:
- 通常時図柄揃い: 約1/99.9
- 右打ち中図柄揃い: 約1/14.1（特図2、大当り+小当り合算）

initialPayout:
- 5R 約350個（払出）

totalPayoutDistribution:
- 特図1: 5R約350個 + 仮面RUSH 約50%
- 特図1: 5R約350個 + 通常 約50%
- 仮面RUSH中/残保留: 10R約700個 + 仮面RUSH超 約5%
- 仮面RUSH中/残保留: 10R約700個 + 仮面RUSH 約95%
- 仮面RUSH超中/次回まで: 約1400個 + 次回大当りまで 約60%
- 仮面RUSH超中: 約700個 + 仮面RUSH超 約40%
- 約1400個は約700個×2であり、単一10Rの1400個ではない。

rushEntryRate: 約50%
rushContinuationRate: 約75%（時短15回の約67% + 残保留4個の約25%を含むTOTAL）

ltName: 仮面RUSH超（資料により「仮面アクルカRUSH超」表記）
ltEntryRoute:
- 初当り約50% → 仮面RUSH
- 仮面RUSH中/残保留の大当り約5% → LT「仮面RUSH超」
ltEntryRate:
- 仮面RUSH中/残保留大当り時: 約5%
- 通常遊技全体を分母とする総LT到達率/確率: UNVERIFIED_AFTER_RESEARCH（経路値から独自算出しない）
ltContinuationRate: 約75%（通常RUSHと同じST15回+残保留4個の継続期待度。LTの性能差は主に出玉振り分け/次回まで状態）
ltPayoutStructure:
- 約60%: 約1400個（700個×2）+ ST10000回＝実質次回大当りまで
- 約40%: 約700個 + 仮面RUSH超
- ST10000回の次回大当りでも同じ約60%の1400個振り分けが有効なため、1400個上乗せが約60%でループする構造。

timeShortening:
- 仮面RUSH: 時短15回 + 残保留4個
- 仮面RUSH超: 時短15回 + 残保留4個
- LT中1400個側: 時短10000回（実質次回大当りまで）

cTimeOrSpecialSystems:
- 上乗せ特化型2段階LT。LTそのものの継続率は下位RUSHと同じ約75%だが、LT中は約60%で700個×2 + 次回までとなり、次回当りでも同振り分けを再抽選する。

ceilingOrSupport: CONFLICT
- なな徹は遊タイム「非搭載」と明示。
- パチ＆スロ必勝本の基本スペックページは遊タイム「搭載」と明示。
- SANKYO公式スペックには遊タイム発動条件/恩恵の記載を確認できない。
- 競合値を平均・推測せずCONFLICTとして保持し、後続QAで一次資料/追加高信頼資料を再探索する。

gameFlow: |
  通常時（図柄揃い約1/99.9）
   ↓ 初当り 5R約350個
   ├─ 約50% → 通常へ
   └─ 約50% → 仮面RUSH（時短15回+残保留4個、TOTAL継続約75%）
                    ↓ 大当り
                    ├─ 約95% → 700個 + 仮面RUSH継続
                    └─ 約5% → 700個 + LT「仮面RUSH超」
                                   ↓
                              時短15回+残保留4個、継続約75%
                                   ↓ 大当り
                                   ├─ 約40% → 700個 + LT継続
                                   └─ 約60% → 1400個（700×2）+ 時短10000回
                                                    ↓ 実質次回大当り
                                               同じLT振り分けを再抽選

notes:
- 公式名称では「仮面RUSH」、P-WORLD等では読みを付した「仮面アクルカRUSH」表記もある。同一状態の表記差として扱う。
- RUSH/LTの約75%は時短15回だけの値ではなく残保留4個込みTOTAL。
- 右約1/14.1は大当り+小当り合算かつ特図2限定。
- LTは継続率を上げるタイプではなく、1400個+実質次回までの振り分けを追加して出玉性能を上げる2段階LT。

sources:
- https://www.sankyo-fever.jp/products/machine_list/pce/ — SANKYO公式、LT-Light ver.公開/導入案内。取得 2026-09-23。confidence OFFICIAL
- https://www.sankyo-fever.jp/products/machine_list/pce/spec/ — SANKYO公式スペック。1/99.9、右約1/14.1、RUSH50%、ST15+残4 or 10000、継続約75%、払出350/700/1400。取得 2026-09-23。confidence OFFICIAL
- https://news.p-world.co.jp/articles/32131/yugitsushin — 遊技通信。型式PAフィーバーうたわれるものY、導入2026-01-05、基本構造。取得 2026-09-23。confidence INDUSTRY
- https://yugi-nippon.com/pachinko-new-machine/post-73867/ — 遊技日本。型式、導入日、LT1400個上乗せループ。取得 2026-09-23。confidence INDUSTRY
- https://pachimaga.com/free/mach/maker-p/sankyo/064528.php — パチマガスロマガFREE。型式、下位RUSH、LT発動5%。取得 2026-09-23。confidence ANALYSIS_HIGH
- https://nana-press.com/kaiseki/machine/1082/33664/ — なな徹。詳細振り分け、遊タイム非搭載。取得 2026-09-23。confidence ANALYSIS_HIGH
- https://hisshobon.com/machineinfo/99982/ — 必勝本。詳細振り分け/1400個上乗せ構造。取得 2026-09-23。confidence ANALYSIS_HIGH
- https://p.hisshobon.jp/machine/4643/1/112233 — 必勝本基本スペック。遊タイム搭載表記。取得 2026-09-23。confidence ANALYSIS_HIGH
- https://www.p-world.co.jp/machine/database/10381 — P-WORLD。ゲームフロー、RUSH/LT構造。取得 2026-09-23。confidence ANALYSIS_HIGH

confidence: CONFLICT
missingFields:
- 通常遊技全体基準の総LT到達率/確率は直接公表値未確認。
conflicts:
- 遊タイム: なな徹「非搭載」 vs 必勝本「搭載」。一次資料で明示解消できずCONFLICT維持。
