# e 北斗の拳11 暴凶星

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e 北斗の拳11 暴凶星
manufacturer: サミー（製造: 銀座）
modelName: e北斗の拳11暴凶星SHEF
releaseDate: 2025-12-08
modelType: スマパチ / ハイミドル（約1/399.8）
gameType: 1種2種混合 / LT3.0プラス / ST10回+残保留4個 / C時短搭載

## Core spec
- jackpotProbability: 通常時 約1/399.8。図柄揃い演出と「拳王覚醒」成功の合算値。
- rightProbability: 約1/10.7（C時短込み）。純粋な大当り確率とは区別する。
- initialPayout / 特図1主要振り分け:
  - 4500個（1500個×3回）+ RUSH: 約5%
  - 1800個（300個+1500個）+ RUSH: 約4%
  - 1500個 + RUSH: 約52%
  - 1500個 + 通常: 約39%
  - 払い出し設計値。V入賞条件が付く出玉を含む。
- rushEntryRate: 約61%（拳王覚醒を含む）
- rushContinuationRate: 約75%（C時短込み）
- timeShortening: ST10回 + 残保留4個
- ceilingOrSupport: 遊タイム非搭載

## Lucky Trigger
- ltName: 拳王RUSH / 救世主RUSH（突入時に選択するLT/RUSH演出モード。解析資料ではLT「拳王RUSH」とも表記）
- ltEntryRoute: 通常時の図柄揃い/拳王覚醒成功後、初当り振り分けの約61%で直接LT/RUSHへ。非LT下位RUSHを経由しない直LT型。
- ltEntryRate: 初当り時 約61%（拳王覚醒を含む）。通常時図柄揃い合算約1/399.8を分母とした別の「総LT確率」は資料に直接値を確認できないため算出しない。
- ltContinuationRate: 約75%（ST10回+残保留4個、C時短込み）
- ltPayoutStructure / RUSH中:
  - 6000個（1500個×4回）: 約10%
  - 4500個（1500個×3回）: 約40%
  - 1500個: 約30%
  - STリセット: 約20%
  - RUSH中の約50%が4500個以上。
  - 「極闘（EXTREME BATTLE）」発生時は6000～12000個の獲得可能性がある。これは単一10R大当り出玉ではなく複数回分/上乗せを含む出玉塊として扱う。

## Game flow
通常時
↓ 図柄揃い / 拳王覚醒成功（合算 約1/399.8）
初当り
├─ 約39%: 1500個 → 通常
└─ 約61%: 1500～4500個 → LT/RUSH（拳王RUSH / 救世主RUSH）
    ↓ ST10回 + 残保留4個、右 約1/10.7（C時短込み）
    LT/RUSH 継続 約75%
    ├─ 6000個 約10%
    ├─ 4500個 約40%
    ├─ 1500個 約30%
    └─ STリセット 約20%
    ↓ 14回転内に大当り/STリセットなし
通常時へ

## Definition / QA notes
- 本機はLT3.0プラス搭載。通常RUSH→LTという二階層ではなく、初当り約61%からLT/RUSHへ直接入る構造。
- 「RUSH中 約1/10.7」「継続約75%」はいずれもC時短込み。純粋な大当り確率と混同しない。
- 4500個=1500個×3、6000個=1500個×4。1800個=300個+約1500個。単一大当りのラウンド出玉として扱わない。
- 極闘の最大12000個も出玉塊/上乗せ結果であり単一大当り出玉ではない。
- 必勝本はLTを「拳王RUSH」として解説する一方、P-WORLDは突入時に「拳王RUSH」「救世主RUSH」の2演出モードを選択可能と記載。性能差を示す根拠はなく、同一LT/RUSHの演出選択として整理。
- conflicts: []
- missingFields: []（通常時全体を分母にした別定義の総LT確率は非公表値として算出対象外）

## Sources
retrievedAt: 2026-09-23
1. 遊技日本（業界記事 / サミー販売発表） — 型式名、基本スペック、LT3.0プラス、初当り/RUSH性能
   https://yugi-nippon.com/pachinko-new-machine/post-73381/
2. グリーンべると / P-WORLD業界ニュース — 詳細スペック、2025-12-08導入、初当り/右振り分け
   https://news.p-world.co.jp/articles/32048/greenbelt
3. P-WORLD機種DB — 通常/右確率、ST、出玉定義、RUSH構造
   https://www.p-world.co.jp/machine/database/10359
4. パチ&スロ必勝本 — 基本スペック、LT搭載、C時短込み注記
   https://hisshobon.com/machineinfo/99243/
5. パチ&スロ必勝本 — LT「拳王RUSH」、発動契機、終了条件
   https://hisshobon.com/machineinfo/99245/
6. Sammy Networks — 拳王RUSH継続約75%、約50%が4500～6000個、極闘6000～12000個
   https://www.sammy-net.jp/news/2026/03/e-11-777town-mobile.html

confidence: INDUSTRY / ANALYSIS_HIGH
