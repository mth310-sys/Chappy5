# P緋弾のアリア ～緋緋神降臨～ ラッキートリガーVer.

収集日: 2026-09-20
QA追記: 2026-09-21
status: COMPLETE_CORE

machineName: P緋弾のアリア ～緋緋神降臨～ ラッキートリガーVer.
manufacturer: 藤商事
releaseDate: 2024-03-04
modelType: ライトミドル（図柄揃い1/399.9、緋弾チャージを含む大当り確率1/192.7）
gameType: 1種2種混合ST
jackpotProbability:
- 図柄揃い: 1/399.9
- 緋弾チャージ: 1/372.1
- 大当り確率（両者合算）: 1/192.7
initialPayout:
- 図柄揃い時の主要出玉: 約1500個 / 約3000個 / 約4500個以上（V入賞条件）
rushEntryRate: 図柄揃い時 約62%（チャンスタイム引き戻し込み）
rushContinuationRate:
- LBR: ST70回または実質次回まで、右打ち当選確率1/105
- 超LBR突入率: 約51%
ltName: 超LBR（超ライトニングバレットラッシュ）
ltEntryRoute:
- 通常時図柄揃いの一部から直接超LBR
- LBR成功から超LBR
- チャンスタイム中の大当りから超LBR
ltEntryRate:
- LBRから超LBR: 約51%（ST70回の引き戻し約49%とST9999回の引き戻し約99.9%の合算値として公式表記）
- 初当り全体からの単一LT到達率は資料表記の定義差を避け、本レコードでは未統合
ltContinuationRate: 約80%
ltPayoutStructure:
- 右打ち大当りは約1500個 / 約3000個 / 約4500個以上の構成
- HAZUSE掲載の特図2割合: 約4500個 約6%、約3000個 約19%、約1500個 約75%
totalPayoutDistribution:
- HAZUSE掲載の特図1図柄揃い時: 約4500個 約10%→超LBR、約3000個 約40%→LBR、約1500個 約5%→LBR、約1500個 約45%→チャンスタイム
timeShortening:
- チャンスタイム: 時短70回、当選確率1/399、引き戻し約16%
- LBR: ST70回または実質次回まで
- 超LBR: ST167回
cTimeOrSpecialSystems: 緋弾チャージあり
ceilingOrSupport: 確認できた主要資料では本DB用途上の記録対象なし

gameFlow:
```
通常時
├─ 緋弾チャージ
└─ 図柄揃い
    ├─ チャンスタイム（時短70回）
    │   └─ 大当り → 超LBR
    ├─ LBR（ST70回 or 実質次回まで）
    │   └─ 成功 → 超LBR
    └─ 一部 → 超LBR
             ↓
       超LBR（ST167回）
       継続率 約80%
```

notes:
- 藤商事グループ初のラッキートリガー搭載機第1弾として公式IR資料で確認。
- 2026-09-21 QAで藤商事公式製品ページを再確認し、図柄揃い1/399.9、緋弾チャージ1/372.1、合算大当り1/192.7、図柄揃い時RUSH約62%、LBR当選1/105、超LBR ST167回・継続約80%、時短70回・引戻し約16%を公式値として照合した。
- 払出表記と獲得表記を混同しない。HAZUSEの振り分けは払い出し設計値。
- 初当りからLTまでの「単一の突入率」は、LBR/チャンスタイム/直接突入の経路定義を統一してから分析側で算出する。

sources:
- https://www.fujimarukun.co.jp/products/p_aria5/ — 藤商事公式製品ページ（再取得 2026-09-21）
- https://www.fujimarukun.co.jp/corp/ir/library/bs_material/ir59_202402.pdf — 藤商事IR資料（取得 2026-09-20）
- https://news.p-world.co.jp/articles/26612/yugitsushin — 遊技通信 / P-WORLD業界ニュース（取得 2026-09-21）
- https://news.p-world.co.jp/articles/26674/nippon — 遊技日本 / P-WORLD業界ニュース（取得 2026-09-21）
- https://data.hazuse.com/?machine_code=PX0206 — HAZUSE DATA（取得 2026-09-20）
- https://www.p-world.co.jp/machine/database/9986 — P-WORLD（取得 2026-09-20）
- https://www.atari7.com/pachinko/p-hidannoaria-lucky-trigger.php — アタリ7（取得 2026-09-20）

confidence:
- LT搭載: OFFICIAL
- 基本スペック: OFFICIAL
- 導入日: ANALYSIS_HIGH（複数資料一致）
- 詳細振り分け: ANALYSIS_HIGH

missingFields:
- 初当り全体を分母にした統一定義のLT到達率（今後の分析用に定義整理が必要）

conflicts:
- なし（表現上の「大当り確率」「図柄揃い確率」の定義差は注記して保持）
