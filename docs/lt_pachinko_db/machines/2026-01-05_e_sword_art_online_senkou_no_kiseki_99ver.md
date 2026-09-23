# e ソードアート・オンライン 閃光の軌跡 99Ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e ソードアート・オンライン 閃光の軌跡 99Ver.
manufacturer: 京楽産業.
formalModel: eソードアート・オンライン～閃光の軌跡～99Ver．K1
releaseDate: 2026-01-05
modelType: 甘デジ / 99ver. / スマパチ
gameType: 一種二種混合 / ST型 / LT搭載
jackpotProbability:
- 通常時: 約1/99.9
- 右打ち中: 約1/35.2
initialPayout:
- 10R: 800個（払出）
- 3R: 240個（払出）
rushEntryRate:
- TOTAL 55%（うち1%はLIGHTNING RUSH直行）
- 非LT下位SWORD RUSHへの直接振り分け: 54%
rushContinuationRate:
- SWORD RUSH: 約65%
- ST32回 + 残保留4個
ltName: LIGHTNING RUSH
ltEntryRoute:
- 初当り10R 1%から直行し、実質次回まで
- SWORD RUSH中10Rの一部。LAST ATTACK CHANCE成功等を経てLIGHTNING RUSHへ昇格
- SWORD RUSH中大当り全体のLT側振り分けは16.5%（1.0%実質次回 + 15.5% ST77回）
ltEntryRate:
- 初当り直行: 1%
- SWORD RUSH中大当り: 16.5%がLT側
- 通常遊技全体基準の総LT到達率/到達確率: UNVERIFIED_AFTER_RESEARCH（経路値から独自合算しない）
ltContinuationRate:
- 約94% TOTAL
- 内訳上、ST77回+残保留4個のみの継続は約90.3%。LT中大当り33%の時短10000回（実質次回まで）を合わせたTOTAL値
ltPayoutStructure:
- 10R 800個 + 実質次回まで: 33%
- 10R 800個 + LIGHTNING RUSH ST77回+残保留4個: 32%
- 3R 240個 + LIGHTNING RUSH ST77回+残保留4個: 35%
totalPayoutDistribution:
- 特図1/通常時: 10R 800個 + LIGHTNING RUSH実質次回 1% / 3R 240個 + SWORD RUSH 54% / 3R 240個 + 通常 45%
- SWORD RUSH中: 10R 800個 + LT実質次回 1.0% / 10R 800個 + LT77回 15.5% / 10R 800個 + SWORD RUSH 48.5%（資料詳細ではLAST ATTACK CHANCE敗北36.0% + その他12.5%） / 3R 240個 + SWORD RUSH 35.0%
- LIGHTNING RUSH中: 10R 800個 + 実質次回33% / 10R 800個 + LT77回32% / 3R 240個 + LT77回35%
timeShortening:
- SWORD RUSH: 32回 + 残保留4個
- LIGHTNING RUSH: 77回 + 残保留4個、または時短10000回（実質次回まで）
cTimeOrSpecialSystems:
- LIGHTNING RUSH中33%は時短10000回で実質次回大当りまで
- LT終了後の残保留で大当りした場合はLIGHTNING RUSH中振り分けではなくSWORD RUSH中振り分けを適用。LT継続と単純化しない
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時（約1/99.9）
   ↓ 初当り
  10R 1% → LIGHTNING RUSH（LT・実質次回まで）
  3R 54% → SWORD RUSH（32回+残保留4個、約65%）
  3R 45% → 通常時
   ↓ SWORD RUSH中大当り
  16.5% → LIGHTNING RUSH（1%実質次回 + 15.5% ST77回+残4）
  その他 → SWORD RUSH継続
   ↓
  LIGHTNING RUSH（77回+残4 or 実質次回、TOTAL約94%）
   ↓
  STスルー → 通常時
  残保留当選 → SWORD RUSH中振り分けで再判定
notes:
- 京楽公式は2025-12-01発表、2026-01-05全国導入予定、通常約1/99.9、LIGHTNING RUSH約94%を明示。
- 必勝本はSWORD RUSH 54%と表記する一方、P-WORLD等のTOTAL RUSH突入率は55%。これは1%のLIGHTNING RUSH直行を含む/含まない分母差でありCONFLICTではない。
- 必勝本ではLAST ATTACK CHANCE勝利を「10R当選時の31.4%」と説明。SWORD RUSH中全大当り基準ではLT側16.5%（1%+15.5%）として詳細振り分け資料と整合するため、分母を混同しない。
- 800個/240個は払出表記。実獲得値と混同しない。
- 2024-12導入のライトミドル版「e ソードアート・オンライン 閃光の軌跡」と別スペック。
sources:
- https://www.kyoraku.co.jp/news/detail/853 — メーカー公式。99Ver.発表、約1/99.9、LIGHTNING RUSH約94%、2026-01-05導入。取得2026-09-23
- https://hisshobon.com/machineinfo/100701/ — 基本スペック、右1/35.2、SWORD RUSH 54%/32+4/約65%、LT 77+4 or実質次回/約94%、払出。取得2026-09-23
- https://hisshobon.com/machineinfo/100703/ — LT正式名称、直行1%、LAST ATTACK CHANCE、残保留時の扱い。取得2026-09-23
- https://www.p-world.co.jp/machine/database/10398 — TOTAL RUSH55%（1% LT直行）、ゲームフロー、LT定義。取得2026-09-23
- https://1geki.jp/pachinko/e_sao_lt99/51/ — SWORD RUSH構造、右1/35.2、約65%、右大当りのLT移行。取得2026-09-23
- https://1geki.jp/pachinko/e_sao_lt99/52/ — LIGHTNING RUSH 77+4、33%実質次回、TOTAL約94%、残保留注記。取得2026-09-23
- https://nana-press.com/kaiseki/machine/1085/ — SWORD/LIGHTNING RUSHの詳細振り分け。取得2026-09-23
confidence: OFFICIAL + ANALYSIS_HIGH
missingFields:
- 通常遊技全体基準の総LT到達率/到達確率は直接公表値を確認できずUNVERIFIED_AFTER_RESEARCH
conflicts: none
