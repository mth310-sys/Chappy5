# Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.
manufacturer: SANKYO
modelName: PAフィーバーダンまち2YG
releaseDate: 2025-10-06
modelType: 甘デジ / P機 / ラッキートリガー搭載
gameType: 一種二種混合 / 普図抽選 / ST（時短）型

## Core spec
- jackpotProbability:
  - 通常時大当り: 約1/99.9
  - ダンジョンチャレンジ中 図柄揃い: 約1/98.6（普図ロング開放当選時、特図2実質約1/1当選を経て大当り）
  - RUSH / LT中 図柄揃い: 約1/37.0（同上）
- initialPayout:
  - 通常時大当り: 3R 約240個（払出）100%
- rushEntryRate:
  - 初当り後「ダンジョンチャレンジ」突入: 100%
  - ダンジョンチャレンジ突破率: 約35%
  - 突破時大当りの95%が通常RUSH、約5%がLT
- rushContinuationRate: 約81%（RUSH 60回、特図2に限る）
- timeShortening:
  - ダンジョンチャレンジ: 42回
  - RUSH: 60回
  - LT: 106回

## Lucky Trigger
- ltName: ラッキートリガー（解析資料ではLT。独自の別固有RUSH名を確認できないため推測しない）
- ltEntryRoute:
  1. 初当り後は100%「ダンジョンチャレンジ」42回へ
  2. ダンジョンチャレンジ中の大当りの約5%でLT（106回）へ
  3. 通常RUSH中の大当りの約5%でLT（106回）へ
- ltEntryRate:
  - ダンジョンチャレンジ / RUSH中大当りの約5%
  - 通常遊技全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（経路確率から独自算出しない）
- ltContinuationRate: 約95%（106回、特図2に限る）
- ltPayoutStructure:
  - 10R 約800個 + LT106回: 52%
  - 3R 約240個 + LT106回: 48%
- totalPayoutDistribution:
  - 通常時: 3R 約240個 + ダンジョンチャレンジ42回 100%
  - ダンジョンチャレンジ / RUSH中大当り: 10R 約800個 + LT106回 5% / 10R 約800個 + RUSH60回 47% / 3R 約240個 + RUSH60回 48%
  - LT中: 10R 約800個 + LT106回 52% / 3R 約240個 + LT106回 48%
- cTimeOrSpecialSystems: 普図抽選。ダンジョンチャレンジ中は図柄揃い約1/98.6、RUSH/LT中は約1/37.0。普図ロング開放当選時、特図2実質約1/1当選を経て大当り。
- ceilingOrSupport: 遊タイムなし

## Game flow
通常時 約1/99.9
→ 大当り（3R 約240個）
→ 100%「ダンジョンチャレンジ」42回 / 図柄揃い約1/98.6 / 突破約35%
  → 大当り時 約5%: 10R 約800個 → LT 106回
  → 大当り時 47%: 10R 約800個 → RUSH 60回
  → 大当り時 48%: 3R 約240個 → RUSH 60回
  → 42回スルー → 通常時

通常RUSH 60回 / 図柄揃い約1/37.0 / 継続約81%
→ 大当り
  → 約5%: 10R 約800個 → LT 106回
  → 47%: 10R 約800個 → RUSH 60回継続
  → 48%: 3R 約240個 → RUSH 60回継続
→ 60回スルー → 通常時

LT 106回 / 図柄揃い約1/37.0 / 継続約95%
→ 大当り: 10R 約800個 52% / 3R 約240個 48%
→ いずれもLT106回継続
→ 106回スルー → 通常時

## Notes
- 2025-07-19の遊技通信発表記事は「ホール導入2025-08-04予定」としたが、その後の実導入資料・複数解析カレンダーは2025-10-06で一致する。型式 `PAフィーバーダンまち2YG` は2025-08-22検定通過との業界系記録もあり、8/4は発表時点の予定日、canonical first-introduction dateは2025-10-06として保存する。
- 右打ち中の「約5%」はダンジョンチャレンジ/RUSH中の大当りを分母とするLT振り分け。通常遊技全体基準のLT到達率へ換算しない。
- RUSH約81% / LT約95%は特図2に限る公表値。
- 出玉は払出表記。10R約800個、3R約240個。
- 「LT-Light ver.」は2025年3月導入の通常版/e版ダンまち2とは別スペックとして分離。

## Sources
1. 遊技通信 / P-WORLD業界ニュース — https://news.p-world.co.jp/articles/31460/yugitsushin — retrieved 2026-09-22 — INDUSTRY（発表時点では2025-08-04導入予定）
2. 遊技日本 新台記事 — https://yugi-nippon.com/pachinko-new-machine/post-72361/ — retrieved 2026-09-22 — INDUSTRY
3. パチマガスロマガ 詳細スペック — https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/543/kh02.php — retrieved 2026-09-22 — ANALYSIS_HIGH
4. 一撃 — https://1geki.jp/pachinko/p_danmachi2_light/ — retrieved 2026-09-22 — ANALYSIS_HIGH
5. SLOT HACK — https://slothack.net/matome/170998/ — retrieved 2026-09-22 — ANALYSIS_HIGH
6. ぱちんこキュレーション — https://pachinko-curation.com/56800/ — retrieved 2026-09-22 — ANALYSIS_HIGH / industry tracking
7. パチンコスペック解析 — https://pachinko-spec.info/spec/161112/ — retrieved 2026-09-22 — ANALYSIS_HIGH
8. パチンコ・パチスロ.com 新台導入日カレンダー2025 — https://pachinkopachisro.com/archives/58760696.html — retrieved 2026-09-22 — calendar cross-check

confidence: INDUSTRY / ANALYSIS_HIGH
missingFields:
- 通常遊技全体基準の総LT到達率（直接公表値）: UNVERIFIED_AFTER_RESEARCH
- LT固有名称: 公開解析では「LT」表記を確認。別の正式固有名称は未確認のため推測しない。
conflicts: none（2025-08-04は発表時点の予定日、2025-10-06は後続の実導入資料で複数一致するため、数値競合ではなく予定変更として整理）
