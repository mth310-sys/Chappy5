# デカスタe花の慶次～傾奇一転

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: デカスタe花の慶次～傾奇一転
manufacturer: ニューギン
modelNumber: e花の慶次～傾奇一転H6
releaseDate: 2025-07-22
modelType: スマパチ / ミドル / デカスタ / LT搭載
gameType: 一種二種混合 / 下位転落RUSH → LT ST

jackpotProbability:
- 通常時: 1/348.60
- 右打ち中: 1/96.95
- 戦MODE転落: 1/96.95

initialPayout:
- 10R 約1500個 0.2% → LT
- 5R 約750個 0.8% → LT
- 5R 約750個 51.1% → 戦MODE
- 5R 約750個 47.9% → 通常

rushEntryRate: 52.1%（戦MODE 51.1% + 初当りLT直行1.0%）
rushContinuationRate: 戦MODEのLT突破期待度50%。右打ち大当り1/96.95と転落1/96.95の競合型で、転落前に大当りすればLTへ。

ltName: 傾奇BURST
ltEntryRoute:
- 通常時初当りの1.0%（10R 0.2% + 5R 0.8%）で直行
- 戦MODE中、転落前に大当り（突破率50%）→ 10R約1500個 → LT
ltEntryRate:
- 初当り時直行: 1.0%
- 戦MODE中大当り時: 100%
- 通常初当り全体を分母とした総LT到達率の直接公表値は今回確認できず、独自合算しない。
ltContinuationRate: 約84%（ST本体約83% + 残保留引き戻し約4%の合算表記）

ltPayoutStructure:
- LT中大当り: 10R 約1500個 100% → 傾奇BURST継続

totalPayoutDistribution:
- 特図1: 10R1500個+LT 0.2% / 5R750個+LT 0.8% / 5R750個+戦MODE 51.1% / 5R750個+通常 47.9%
- 特図2 戦MODE中: 10R1500個+LT 100%
- 特図2 LT中: 10R1500個+LT 100%

timeShortening:
- 戦MODE: 時短5000回（転落小当り当選で終了）
- 傾奇BURST: ST170回 + 残保留4個
- 通常戻り: 0回

cTimeOrSpecialSystems: 戦MODEは大当り1/96.95と転落1/96.95の転落ループ。デカスタ（大型始動口）搭載。
ceilingOrSupport: 遊タイムなし / 潜伏確変なし / コンプリート機能搭載

gameFlow: |
  通常時 1/348.60
   ├─ 1.0%: 1500個(0.2%) または750個(0.8%) → LT「傾奇BURST」
   ├─ 51.1%: 750個 → 下位「戦MODE」
   │     ├─ 転落1/96.95より先に大当り1/96.95 → 1500個 → LT
   │     └─ 転落 → 通常時
   └─ 47.9%: 750個 → 通常時

  LT「傾奇BURST」
   └─ ST170回+残保留4 / TOTAL約84%
       └─ 大当り → 1500個 100% → LT継続

notes:
- 2024年版 `e花の慶次～傾奇一転` と別レコード。デカスタ搭載2025年版を混同しない。
- 約84%はST本体約83%と残保留引き戻し約4%を合算したTOTAL値で、単純加算値ではない。
- 出玉は払い出し。
- 通常初当り全体基準の総LT到達率は直接値未確認のためUNVERIFIED_AFTER_RESEARCH。経路値から独自算出しない。

sources:
- https://news.p-world.co.jp/articles/30939/greenbelt — 業界記事。ニューギン発表、2025-07-22導入、デカスタ機であることを確認。
- https://www.p-world.co.jp/machine/database/10304 — 詳細スペック、振り分け、戦MODE、LT、ST、出玉。
- https://nana-press.com/kaiseki/machine/987/30835/ — なな徹。確率、RUSH、振り分け、遊タイムなしを照合。
- https://p.hisshobon.jp/machine/4558/1/110216 — 必勝本。1/348.60、1/96.95、52.1%、戦MODE51.1%、LT直行1.0%、約84%、遊タイム/コンプリート。
- https://hisshobon.com/machineinfo/98132/ — 必勝本。LT正式名称、発動契機、ST170+残保留4、1500個ALL。
- https://1geki.jp/pachinko/e_hanakei_kabuki_ds/51/ — 一撃。戦MODE5000回、転落型、LT到達経路を照合。

confidence:
- 導入日/メーカー: INDUSTRY
- 基本確率/RUSH/LT/振り分け: ANALYSIS_HIGH（複数一致）
- LT搭載/正式名称: ANALYSIS_HIGH
- 総LT到達率: UNVERIFIED

missingFields:
- 通常初当り全体を分母とする総LT到達率の直接公表値

conflicts: none
