# P【超甘LT】華牌RR 1/49×99de遊タイム

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: P【超甘LT】華牌RR 1/49×99de遊タイム
manufacturer: 豊丸産業
formalModel: P超甘LT華牌RRAX5
releaseDate: 2026-01-05
modelType: 甘デジ / 超甘LT
regulation: P機 / LT3.0+
gameType: 一種二種混合 / ST回数可変型RUSH / LT / 遊タイム(b時短)

## Core spec
jackpotProbability:
- 通常時: 1/49.9
- 特図2: 1/16.5（小当り経由を含む。小当り経由はV入賞が条件）

initialPayout:
- 特図1 5R: 約200個（払出）
- 特図1 4R: 約160個（払出）
- 特図1 3R: 約120個（払出）
- 特図1 2R: 約80個（払出）

rushEntryRate: 約40%（詳細資料では39.9%表記あり）
rushContinuationRate: 南国翔TIME 約65%〜約76%（特図2残保留による引き戻し込み。ST13回から、大当り1連ごとにSTを1回ずつ上乗せし最大19回）

## Lucky Trigger
ltName: PREMIUM南国翔TIME
ltEntryRoute:
- 特図1 5R「役満」当選（0.8%）でLT直行
- 南国翔TIME中の特図2 5R「役満」当選（1.2%）でLT直行
- 南国翔TIMEを継続し、8本場（ST19回）中に大当りするとLT発動
ltEntryRate: 通常遊技全体基準の総LT到達率/確率は直接公表値を確認できず。経路別値のみ保存し、独自合算しない。
ltContinuationRate: 約97.2%（ST53回＋特図2残保留を含む）
ltPayoutStructure:
- 特図2 5R 約450個 + PREMIUM南国翔TIME: 1.2%
- 特図2 4R 約360個 + PREMIUM南国翔TIME: 33.2%
- 特図2 3R 約270個 + PREMIUM南国翔TIME: 32.8%
- 特図2 2R 約180個 + PREMIUM南国翔TIME: 32.8%
- LT終了後の残保留で2〜4R当選時はLTへ戻らず、南国翔TIME 2本場（ST13回）へ移行する。

## Payout distribution
totalPayoutDistribution:
### 特図1
- 5R 約200個 + PREMIUM南国翔TIME: 0.8%
- 4R 約160個 + 南国翔TIME: 5.5%
- 3R 約120個 + 南国翔TIME: 11.3%
- 2R 約80個 + 南国翔TIME: 22.3%
- 2R 約80個 + 時短なし: 60.1%

### 南国翔TIME 特図2
- 5R 約450個 + PREMIUM南国翔TIME: 1.2%
- 4R 約360個 + 南国翔TIME: 33.2%
- 3R 約270個 + 南国翔TIME: 32.8%
- 2R 約180個 + 南国翔TIME: 32.8%
- ST中2〜4R当選ごとに次回STを1回転上乗せ。8本場/ST19回での大当り後はLTへ。
- 残保留での2〜4R当選は南国翔TIME 2本場/ST13回から再スタート。

## Support / special systems
timeShortening: 大当り後 0 / 13 / 14 / 15 / 16 / 17 / 18 / 19 / 53回。遊タイム時10000回。各RUSHは残保留4個あり。
cTimeOrSpecialSystems: LT3.0+。南国翔TIMEは連チャンごとにST回数が13→19回へ増える可変ST。PREMIUM南国翔TIMEはST53回。
ceilingOrSupport: 遊タイム搭載。低確率状態99回転消化で時短10000回。実質的に次回大当り/RUSH突入が濃厚とされる。LT終了後は残保留4回転消化を含め遊タイムまで46回転との資料あり。

## Game flow
gameFlow: |
  通常時 1/49.9
   ↓ 初当り
   ├─ 60.1%: 2R約80個 → 時短なし → 通常へ
   ├─ 39.1%: 2〜4R → 南国翔TIME（2本場/ST13回）
   └─ 0.8%: 5R役満 → PREMIUM南国翔TIME（LT）直行

  南国翔TIME
   ST13回から開始 + 残保留4個
   ↓ ST中大当り
   ├─ 5R役満 1.2% → PREMIUM南国翔TIME（LT）
   └─ 2〜4R → STを1回ずつ上乗せして継続
       ↓ 8本場/ST19回中の大当り
       PREMIUM南国翔TIME（LT）

  PREMIUM南国翔TIME
   ST53回 + 残保留 / 継続約97.2%
   ↓
   ST中大当り → LT継続
   ST53回終了後の残保留2〜4R当選 → 南国翔TIME 2本場/ST13回へ
   非当選 → 通常へ

  通常時低確率99回消化
   ↓
  遊タイム 時短10000回 → 実質次回大当り/RUSHへ

## Notes
- 「RUSH突入約40%」は特図1の南国翔TIME 39.1% + LT直行0.8% = 39.9%の丸め表現と整合する。
- 南国翔TIME継続率は固定値ではなく、ST13〜19回への増加に伴う約65〜約76%。残保留込み。
- LT期待出玉「8100個over」はLT突入時の期待値であり、単一大当り出玉ではない。P-WORLDでは突入時450個＋突入後7678個の合算値と注記されるため、出玉振り分けとは分離する。
- LT後の残保留当選は条件により下位RUSHへ戻るため、「約97.2%継続」を無条件LTループ率として単純化しない。
- formalModelはパチマガスロマガFREEの型式名 `P超甘LT華牌RRAX5` を採用。別資料の `P華牌RRAX5` は短縮表記として扱う。

## Sources
retrievedAt: 2026-09-23
1. P-WORLD業界ニュース / グリーンべると転載 — 豊丸産業発表、導入日、LT3.0+、基本スペック
   https://news.p-world.co.jp/articles/32416
   confidence: INDUSTRY
2. グリーンべると — 豊丸産業発表、1/49.9、RUSH約40%、下位約65〜76%、LT約97.2%、遊タイム
   https://web-greenbelt.jp/post-106901/
   confidence: INDUSTRY
3. パチ＆スロ必勝本 — ST13〜19、8本場大当り/5R役満のLT経路、LT ST53・約97.2%
   https://p.hisshobon.jp/news/2234
   confidence: ANALYSIS_HIGH
4. P-WORLD機種DB — LT経路、LT後残保留の下位RUSH復帰、期待出玉注記
   https://www.p-world.co.jp/machine/database/10397
   confidence: ANALYSIS_HIGH
5. パチマガスロマガFREE — 型式名 `P超甘LT華牌RRAX5`、一種二種混合、導入日、基本構造
   https://pachimaga.com/free/mach/maker-p/toyomaru/064482.php
   confidence: ANALYSIS_HIGH
6. なな徹 — 1/49.9、右1/16.5、ST13〜19/53、出玉80〜450、遊タイム
   https://nana-press.com/kaiseki/machine/1078/34225/
   confidence: ANALYSIS_HIGH
7. A-PACHINKO機種資料 — 特図1/2詳細振り分け、残保留処理
   https://www.a-pachinko.com/SHOP/p-toyomaru257.html
   confidence: ANALYSIS_SINGLE
8. パチンコスペック解析 — 型式 `P華牌RRAX5`、LT3.0+、39.9%表記
   https://pachinko-spec.info/spec-detail/164132/
   confidence: ANALYSIS_SINGLE

confidence: ANALYSIS_HIGH
missingFields:
- 通常遊技全体基準の総LT到達率/確率: UNVERIFIED_AFTER_RESEARCH（直接公表値未確認）
conflicts: none
