# P FAIRY TAIL 超一夜Ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: P FAIRY TAIL 超一夜Ver.
modelName: P FAIRY TAIL 超一夜Ver.FQY
manufacturer: 藤商事
releaseDate: 2025-09-08
modelType: ミドル / LT3.0 PLUS / BIGスタート
gameType: 二種タイプ / ST型RUSH → LT
jackpotProbability:
- 通常時: 約1/319（特図1小当りからのV当り確率）
- 右打ち中: 約1/40（特図2小当りからのV当り確率）
initialPayout:
- 約960個（特図1、V入賞条件、払い出し設計値）
rushEntryRate:
- FAIRY RUSH: 約55%
rushContinuationRate:
- FAIRY RUSH: TOTAL約60%
- 内訳定義: ST32回部分 約55.4% + 残保留引き戻し期待度 約9.6% の合算値
ltName: 七炎竜RUSH
ltEntryRoute:
- 通常時初当りの約55% → FAIRY RUSH
- FAIRY RUSH中に1回目の大当り → FAIRY RUSH継続
- FAIRY RUSH中に2回目の大当り → LT発動。振り分けにより一夜モードまたは七炎竜RUSHへ
ltEntryRate:
- 通常遊技全体を分母とした直接公表の総LT到達率は確認できず。約55%・約60%等から独自合算しない。
ltContinuationRate:
- 七炎竜RUSH: TOTAL約81%
- 内訳定義: ST61回部分 約78.5% + 残保留引き戻し期待度 約9.6% の合算値
ltPayoutStructure:
- 七炎竜RUSH中: 約1500個+α + 一夜モード 約25% / 約1500個 + 七炎竜RUSH 約25% / 約240個 + 七炎竜RUSH 約50%
- 一夜モード中: 約1500個+α + 超一夜モード 約25% / 約1500個+α + 一夜モード 約25% / 約240個 + 七炎竜RUSH 約50%
- 超一夜モード中: 約1500個+α + 超一夜モード 約50% / 約240個 + 一夜モード 約50%
- 「約1500個+α」は特図2大当り2回分以上の合計値で、単一大当り出玉ではない。V入賞条件。
totalPayoutDistribution:
- 通常時: 約960個 + FAIRY RUSH 約55% / 約960個 + 通常 約45%
- FAIRY RUSH中（1回目）: 約1500個 + FAIRY RUSH 約50% / 約240個 + FAIRY RUSH 約50%
- FAIRY RUSH中（2回目）: 約1500個+α + 一夜モード 約50% / 約240個 + 七炎竜RUSH 約50%
timeShortening:
- FAIRY RUSH: 32回 + 残保留
- 七炎竜RUSH: 61回 + 残保留
cTimeOrSpecialSystems:
- BIGスタート
- 一夜モード / 超一夜モード: LT中の上乗せ特化状態。七炎竜RUSH中大当りの約25%で一夜モード。一夜モード中は25%で超一夜、25%で一夜継続、50%で七炎竜RUSHへ。超一夜モード中は50%で約1500個+αを上乗せして超一夜継続、50%で約240個後に一夜モードへ。
ceilingOrSupport: 公開資料で遊タイム等は確認せず
gameFlow: |
  通常時（約1/319）
   ↓ 初当り 約960個
  約55% → FAIRY RUSH（32回+残保留 / TOTAL約60%）
  約45% → 通常時
   ↓ FAIRY RUSH中1回目の大当り
  FAIRY RUSH継続
   ↓ FAIRY RUSH中2回目の大当り
  LT発動
   ├ 約50%: 約1500個+α → 一夜モード
   └ 約50%: 約240個 → 七炎竜RUSH
  七炎竜RUSH（61回+残保留 / TOTAL約81%）
   ↓ 大当りの約25%
  一夜モード
   ↓ 25%
  超一夜モード
   ↔ 一夜モードを介した上乗せループ
   ↓
  七炎竜RUSHへ復帰 / RUSH終了
notes:
- LT3.0 PLUS対応。
- 業界発表、P-WORLD、必勝本、1geki、情報島＋で主要確率・RUSH回数・継続率が一致。
- 約60%/約81%は残保留込みTOTAL値。ST単体の約55.4%/約78.5%と混同しない。
- 七炎竜RUSH中の一夜モード突入は約25%。一夜モード中は1500個+α側合計50%のうち25%が超一夜、25%が一夜継続。超一夜は50%上乗せ継続、転落側50%でも一夜へ移るため単純な50%終了ではない。
- 期待出玉（参考）: 七炎竜RUSH突入時 約6114発、一夜モード突入時 約8724発、超一夜モード突入時 約10494発。これは状態突入からRUSH終了までの期待値であり大当り払出と分離。
sources:
- https://news.p-world.co.jp/articles/31548/yugitsushin — 業界発表。型式、導入日、1/319→1/40、RUSH約55%/60%、LT約81%、2回当りLT経路。取得 2026-09-22
- https://www.p-world.co.jp/machine/database/10323 — 基本スペック、32/61回、出玉定義、ゲームフロー。取得 2026-09-22
- https://p-johojima.jp/machine_spec/post-11585/ — 詳細振り分け、一夜/超一夜遷移、期待出玉。取得 2026-09-22
- https://p.hisshobon.jp/machine/4585/1/110788 — RUSH/LT構造、一夜/超一夜構造の照合。取得 2026-09-22
- https://1geki.jp/pachinko/p_fairytail_bs/39/ — 導入日、確率、RUSH回数/継続率の照合。取得 2026-09-22
confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常遊技全体基準の総LT到達率（直接公表値未確認）
conflicts: none
