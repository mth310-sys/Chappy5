# Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.
manufacturer: SANKYO
modelNumber: PAフィーバー戦姫絶唱シンフォギア4YS
releaseDate: 2025-08-04
modelType: P機 / 甘デジ / LT搭載
gameType: 1種2種混合 / 普図ST / 下位RUSH→LT

jackpotProbability:
- 通常時: 約1/99.9
- 最終決戦中: 約1/2.2（特図2）
- 絶唱RUSH / 超絶唱RUSH中: 約1/38（普図ロング開放当選後、特図2実質約1/1を経て大当り）

initialPayout:
- 通常時SPECIAL FEVER: 約1500個（約500個×3回、払い出し）
- 通常時FEVER: 約300個（2R、払い出し）

rushEntryRate:
- 最終決戦突破率 / RUSHトータル突入率: 約45%
- 通常初当りの約99.8%は最終決戦（時短1回）へ
- 通常初当りの約0.2%はLT「超絶唱RUSH」へ直接突入
rushContinuationRate:
- 絶唱RUSH: ST45回 / 約70%

ltName: 超絶唱RUSH
ltEntryRoute:
- 通常時SPECIAL FEVER（約1500個）→ LT直行
- 最終決戦突破 → 絶唱RUSH → 大当り時約9%のSPECIAL FEVER（約1500個）→ LT
ltEntryRate:
- 通常時大当りからのLT直行: 約0.2%
- 絶唱RUSH中大当りからLT: 約9%
- 通常遊技全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（経路確率から独自算出しない）
ltContinuationRate: 約85%

ltPayoutStructure:
- 約3000個（約500個×6回）+ LT継続: 約20%
- 約1500個（約500個×3回）+ LT継続: 約10%
- 約1000個（約500個×2回）+ LT継続: 約20%
- 約500個 + 実質次回大当り濃厚/V-STOCK: 約5%
- 約500個 + LT継続: 約45%

totalPayoutDistribution:
- 特図1/通常時: 約1500個 + LT 約0.2% / 約300個 + 最終決戦 約99.8%
- 最終決戦中: 約500個 + 絶唱RUSH 100%
- 絶唱RUSH中: 約1500個 + LT 約9% / 約500個 + 絶唱RUSH 約91%
- LT中: 約3000個20% / 約1500個10% / 約1000個20% / 約500個+実質次回5% / 約500個45%（全てLT状態継続）

timeShortening:
- 最終決戦: 時短1回
- 絶唱RUSH: ST45回
- 超絶唱RUSH: ST70回
- LT中約5%のV-STOCK: 実質次回大当り濃厚

cTimeOrSpecialSystems: 普図ST。LT中約5%にV-STOCK/実質次回大当り濃厚振り分けあり。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。

gameFlow: |
  通常時 約1/99.9
   ├─ 約0.2%: SPECIAL FEVER 約1500個 → LT「超絶唱RUSH」
   └─ 約99.8%: FEVER 約300個 → 最終決戦（時短1回 / 突破約45%）
        ├─ 突破: 約500個 → 絶唱RUSH（ST45回 / 約70%）
        │    ├─ 大当り約9%: 約1500個 → LT「超絶唱RUSH」
        │    └─ 大当り約91%: 約500個 → 絶唱RUSH継続
        └─ 非突破: 通常時

  LT「超絶唱RUSH」
   └─ ST70回 / 約1/38 / 継続約85%
       └─ 大当り後はLT継続（約5%は実質次回大当り濃厚/V-STOCK）

notes:
- メーカー公式SANKYOオンライン博物館で型式YS・通常約1/99.9を確認。業界一次資料でもYS、最終決戦約45%、絶唱RUSH約70%、LT超絶唱RUSH約85%を確認。
- 通常時LT直行率はP-WORLD、HAZUSE、一撃、必勝本「大当り振り分け」、複数解析が約0.2%で一致する。
- 必勝本の別ページ「LT『超絶唱RUSH』解説」にのみヘソ約0.9%表記があるが、同サイトの詳細振り分けページ自体が約0.2%で、外部複数資料も0.2%一致。0.9%は孤立したページ内誤記と判断し、DB値は0.2%を採用。競合値として平均しない。
- 約3000/1500/1000個は約500個大当りの複数回合計であり、単一大当り出玉ではない。
- 同日導入の `Pフィーバー戦姫絶唱シンフォギア4 Light ver.`（型式AR）は別スペック。ARは解析資料でラッキートリガー「なし」と明記されており、本レコードへ統合しない。

sources:
- https://www.sankyo-fever.jp/collection/974/ — SANKYO公式オンライン博物館。型式YS、通常約1/99.9、同シリーズARとの別型式を確認。
- https://news.p-world.co.jp/articles/31046/yugitsushin — 遊技通信。YS、約1/99.9、最終決戦約45%、絶唱RUSH約70%、LT約85%、導入日。
- https://www.p-world.co.jp/machine/database/10292 — P-WORLD。通常直行約0.2%、最終決戦/絶唱RUSH/LT構造、右打ち出玉定義を確認。
- https://hazuse.com/machine/pachinko/5P0116/genre/103/ — HAZUSE。通常直行約0.2%、下位大当り約9%LT、LT約85%、3000個=500個×6を照合。
- https://1geki.jp/pachinko/p_sympho4_lt99/55/ — 一撃。通常直行約0.2%、下位約9%、ST70、約85%を照合。
- https://p.hisshobon.jp/machine/4563/1/110237 — 必勝本・大当り振り分け。ヘソ約0.2%、絶唱RUSH中約9%、LT中振り分けを確認。
- https://p.hisshobon.jp/machine/4563/1/110236 — 必勝本・基本スペック。ST1/45/70、約45/70/85%、LT搭載を確認。
- https://p.hisshobon.jp/machine/4563/1/110943 — 必勝本LT解説。ヘソ約0.9%の孤立表記を確認し、同サイト詳細表および複数外部資料との不一致をQA。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/541/kh02.php — パチマガスロマガ。兄弟ARはLTなしと明記。別スペック分離根拠。

confidence:
- LT搭載/名称/型式/導入日/基本確率/RUSH構造/LT継続/主要振り分け: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- 通常時LT直行約0.2%: ANALYSIS_HIGH（同一サイト詳細表を含む複数一致。0.9%孤立誤記をQA済み）
- 通常遊技全体基準の総LT到達率: UNVERIFIED

missingFields:
- 通常遊技全体を分母とする総LT到達率の公開直接値
conflicts: none（必勝本LT解説の0.9%は、同サイト詳細振り分け0.2%および複数独立資料0.2%との照合により孤立誤記として整理）