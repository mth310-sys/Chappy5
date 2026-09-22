# P沖ドキ！ドキドキ弾丸ツアー

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: P沖ドキ！ドキドキ弾丸ツアー
manufacturer: メーシー
modelName: P沖ドキ！LG
releaseDate: 2025-12-22
modelType: 役物機 / P機 / LT

gameType: 2種 / 役物突破 → 直LT ST

jackpotProbability:
- 通常時実質大当り: 約1/22.2
- LT中: 約1/17.0

initialPayout:
- 初当り: 10R 1500個100%（払い出し）。

rushEntryRate:
- RUSH=LT直行型。
- 初当りの18%でGOLDEN超ドキRUSH、82%は通常へ。

rushContinuationRate:
- 非LT下位RUSHなし。

ltName: GOLDEN超ドキRUSH

ltEntryRoute:
- 役物突破 → スタート入賞 → 約1/22.2の大当り → 10R1500個 → 18%でLT直行。

ltEntryRate:
- 初当り時: 18%。
- 通常遊技基準LT突入確率: 約1/123.4（業界資料の直接公表値）。

ltContinuationRate:
- 約89%（ST32回＋残保留4個の合算）。
- LT中大当り約1/17.0。

ltPayoutStructure:
- 10R 1500個＋LT継続 75%。
- 2R 300個＋LT継続 25%。

totalPayoutDistribution:
- 特図1: 10R1500個＋LT 18% / 10R1500個＋通常 82%。
- 特図2: 10R1500個＋LT 75% / 2R300個＋LT 25%。

timeShortening:
- LT: ST32回＋残保留4個。
- ST32回終了後、残保留4個を「シオマネちゃれんじ」として消化。残保留引き戻し期待度約22%。

cTimeOrSpecialSystems:
- 通常時は役物を経由してスタート入賞後に大当り抽選を受ける役物タイプ。

ceilingOrSupport:
- 遊タイム: 非搭載。
- コンプリート機能: 搭載。

gameFlow: |
  通常時
   ↓ 役物突破 → スタート入賞
  実質大当り 約1/22.2 → 10R 1500個
   ├─ 18% → LT「GOLDEN超ドキRUSH」ST32回＋残4 / 約89%
   └─ 82% → 通常へ
  LT中 約1/17.0
   ↓ 大当り
   ├─ 75% → 10R 1500個 → LT再セット
   └─ 25% → 2R 300個 → LT再セット

notes:
- 業界一次資料が型式P沖ドキ！LG、メーシー製、LT直行型、LT突入確率約1/123.4を明示。
- K-Naviに2025-12-01表記があるが、HAZUSE・必勝本・パチビー・情報島＋等が2025-12-22で一致するためcanonical releaseDateは12/22。孤立日付は採用しない。

sources:
- https://news.p-world.co.jp/articles/32043/yugitsushin — 遊技通信。型式、メーカー、1/22.2→1/17.0、18%、約89%、LT1/123.4。取得日 2026-09-23。
- https://news.p-world.co.jp/articles/32080/greenbelt — グリーンべると。直LT、LT1/123.4、1500個、32回＋残保留、約89%。取得日 2026-09-23。
- https://hazuse.com/machine/pachinko/4P1855/genre/103/ — HAZUSE。型式、LT、導入日、75%10R。取得日 2026-09-23。
- https://www.p-world.co.jp/machine/database/10369 — P-WORLD。18/82、LT中75/25、ST32＋残4。取得日 2026-09-23。
- https://p.hisshobon.jp/machine/4631/1/112005 — 必勝本。LT搭載、32+4、約89%、遊タイム非搭載。取得日 2026-09-23。

confidence:
- LT搭載/名称/型式/導入日/基本確率/突入・継続/振り分け: INDUSTRY + ANALYSIS_HIGH

missingFields: []
conflicts: []
