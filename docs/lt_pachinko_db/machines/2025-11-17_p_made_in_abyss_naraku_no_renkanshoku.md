# Pメイドインアビス 奈落の連環蝕

machineName: Pメイドインアビス 奈落の連環蝕
manufacturer: メーシー / ユニバーサルエンターテインメント
releaseDate: 2025-11-17
modelType: ライト / ライトミドル / LT搭載
gameType: 一種二種混合 / 転落型RUSH / C時短 / 上乗せループ型LT
modelNumber: PメイドインアビスSL
jackpotProbability: 通常時1/129.7。右打ち図柄揃い1/29.0（大当り＋小当り合算）。RUSH中転落1/72.4。
initialPayout: 10R約1000個＋虹の黄金域1% / 2R約200個＋RUSH69% / 2R約200個＋通常30%（払出）。
rushEntryRate: TOTAL 70%（通常初当り1%の虹の黄金域直行を含む）。通常下位RUSH「Deep in Abyss」入口は69%、虹の黄金域直行1%。
rushContinuationRate: Deep in Abyss / オーバードタイム 約76%。図柄揃い1/29.0と転落1/72.4の転落型で、大当りor転落まで継続。
ltName: 連環蝕
ltEntryRoute: 通常時1%で「虹の黄金域」へ直行、またはRUSH中10R大当り/ C時短当選（合算で虹の黄金域突入約1/343.3）から虹の黄金域へ。虹の黄金域は実質次回大当りまで継続し、その大当りの50%でLT「連環蝕」へ突入。LT終了後も下位RUSHへ戻るため再突入可能。
ltEntryRate: 虹の黄金域中大当りの50%でLT。虹の黄金域突入確率はRUSH中10R大当り＋C時短合算で約1/343.3。通常遊技全体基準の総LT到達率/確率は直接公表値を確認できず、経路値から独自算出しない（UNVERIFIED_AFTER_RESEARCH）。
ltContinuationRate: 連環蝕の上乗せループ率88%。LT終了側12%でも6R約600個獲得後に下位RUSHへ移行し、通常時へ直接終了しない。
ltPayoutStructure: 連環蝕中=10R約1000個＋連環蝕4% / 6R約600個＋連環蝕84% / 6R約600個＋下位RUSH12%。合計88%でLTループ、12%で下位RUSHへ。
totalPayoutDistribution: 通常時=10R約1000個＋虹の黄金域1% / 2R約200個＋RUSH69% / 2R約200個＋通常30%。下位RUSH中=10R約1000個＋虹の黄金域4% / 6R約600個＋RUSH96%。虹の黄金域中は大当りの50%でLT発動（解析詳細では10R4%＋6R46%がLT側、6R50%が下位RUSH側）。連環蝕中=10R約1000個＋LT4% / 6R約600個＋LT84% / 6R約600個＋下位RUSH12%。
timeShortening: Deep in Abyss / オーバードタイムは大当りor転落まで。虹の黄金域は実質次回大当りまで。連環蝕も上乗せループ型で、終了時は下位RUSHへ。
cTimeOrSpecialSystems: RUSH中10R大当りまたはC時短当選で虹の黄金域へ。虹の黄金域突入契機の合算確率約1/343.3。RUSH中最初の大当り後は高速変動「オーバードタイム」へ移行。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。
gameFlow: |
  通常時（1/129.7）
   ↓ 初当り
   ├─ 30% 2R約200個 → 通常
   ├─ 69% 2R約200個 → Deep in Abyss（転落型RUSH、約76%）
   └─ 1% 10R約1000個 → 虹の黄金域（実質次回）

  Deep in Abyss / オーバードタイム
   ↓ 図柄揃い1/29.0 vs 転落1/72.4
   ├─ 6R約600個 96% → RUSH継続
   └─ 10R約1000個 4% またはC時短 → 虹の黄金域

  虹の黄金域（実質次回大当りまで）
   ↓ 大当り
   ├─ 50% → 下位RUSHへ
   └─ 50% → LT「連環蝕」

  LT「連環蝕」（上乗せループ88%）
   ├─ 4% 10R約1000個 → LT継続
   ├─ 84% 6R約600個 → LT継続
   └─ 12% 6R約600個 → 下位RUSHへ
notes:
- ユニバーサルエンターテインメント公式が初当り約1/129、RUSH70%/76%、LT「連環蝕」ループ88%、LT終了後もRUSH継続を明示。
- 業界一次資料（遊技通信/グリーンべると）は型式 `PメイドインアビスSL`、メーシー製、右約1/29.0、RUSH中10R→虹の黄金域→同状態中10R等を経てLTという構造を確認。
- 右打ち1/29.0は大当り＋小当り合算。転落1/72.4と定義を分離。
- 虹の黄金域突入約1/343.3は10R大当りとC時短の合算で、LTそのものの通常遊技基準到達率ではない。
- LT88%はLT状態内の上乗せループ率。12%側でも通常終了ではなく下位RUSHへ戻るため、RUSH全体継続率と混同しない。
- 導入日はメーカー公式では2025年11月予定、パチビー・一撃・必勝本等で2025-11-17一致。
sources:
- https://www.universal-777.co.jp/news/20250901002396/
- https://news.p-world.co.jp/articles/31816/yugitsushin
- https://news.p-world.co.jp/articles/31856/greenbelt
- https://www.pachibee.jp/machines/index/125100000
- https://www.p-world.co.jp/machine/database/10344
- https://1geki.jp/pachinko/p_madeinabyss_naraku/
- https://1geki.jp/pachinko/p_madeinabyss_naraku/51/
- https://hisshobon.com/machineinfo/99111/
- https://nana-press.com/kaiseki/machine/1049/32379/
- https://chonborista.com/pachinko/universal/245390/
retrievedAt: 2026-09-23
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields:
- 通常遊技全体基準の総LT到達率/確率（十分な再探索後も直接公表値未確認）
conflicts: []
