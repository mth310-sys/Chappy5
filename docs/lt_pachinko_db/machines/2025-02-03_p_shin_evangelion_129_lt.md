# ぱちんこ シン・エヴァンゲリオン 129 LT ver.

machineName: ぱちんこ シン・エヴァンゲリオン 129 LT ver.
manufacturer: ビスティ
formalModel: Pシン・エヴァンゲリオンMV
releaseDate: 2025-02-03
modelType: ライト / LT搭載
status: COMPLETE_CORE
retrievedAt: 2026-09-21

gameType: 一種二種混合 / 時短ST型 / 下位RUSH→LT
jackpotProbability: 通常時図柄揃い 約1/129.8; 右打ち中図柄揃い 約1/54.4
initialPayout: 特図1 10R約1000個 0.5%（LT直行）; 3R約300個 50.0%（シン・IMPACT RUSH）; 3R約300個 49.5%（通常）。出玉は払出。
rushEntryRate: 下位シン・IMPACT RUSH 約50%; LT直行0.5%を含むRUSH系TOTAL 約50.5%（業界資料では丸め約51%）
rushContinuationRate: シン・IMPACT RUSH 約70%（時短60回の継続約67.2% + 残保留4個の引き戻し約7.2%を含むTOTAL表記）
ltName: シン・IMPACT RUSH LT
ltEntryRoute: 通常時10R全回転大当り約0.5%から直行。シン・IMPACT RUSH中の特図2大当り約10%（大当り消化中フリーズ）でLTへ昇格。
ltEntryRate: 通常時直行 約0.5%; 通常RUSH中大当り時 約10%; パチマガスロマガ直接解析値 LT初当り確率 1/1326.67
ltContinuationRate: 約91%（時短123回の継続約89.8% + 残保留4個の引き戻し約7.2%を含むTOTAL表記）
ltPayoutStructure: LT中の特図2大当りは10R約1000個 100%、大当り後はLT継続。出玉は払出。
totalPayoutDistribution: 特図1=10R約1000個+LT 0.5% / 3R約300個+下位RUSH 50.0% / 3R約300個+通常 49.5%。特図2・下位RUSH中=10R約1000個+LT 10% / 10R約1000個+下位RUSH 90%。特図2・LT中=10R約1000個+LT 100%。
timeShortening: 通常RUSH 時短60回+残保留4個; LT 時短123回+残保留4個; 非突入時0回
cTimeOrSpecialSystems: なし（確認した主要資料上、Cタイム等のLT到達特殊機構なし）
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（図柄揃い約1/129.8）
   ├─ 10R全回転 約0.5% → 約1000個 → LT「シン・IMPACT RUSH LT」123回+残保留4
   ├─ 3R 約50.0% → 約300個 → 「シン・IMPACT RUSH」60回+残保留4
   │    ├─ 大当りの約10% → 約1000個 → LT「シン・IMPACT RUSH LT」
   │    └─ 大当りの約90% → 約1000個 → シン・IMPACT RUSH継続
   └─ 3R 約49.5% → 約300個 → 通常時
  シン・IMPACT RUSH LT（TOTAL約91%）
   └─ 大当り → 10R約1000個 → LT継続
  規定回数+残保留スルー → 通常時

notes: |
  2023年のシン・エヴァンゲリオンの129 LT別スペック。LT搭載版のみを本レコード対象とする。
  業界資料のRUSH突入約51%はLT直行を含む丸め表記。詳細振り分け50.0%下位RUSH+0.5%LT直行=50.5%と定義差/丸めで整合し、CONFLICTとはしない。
  約70%・約91%はいずれも残保留4個での引き戻しを含むTOTAL継続値であり、時短区間単独値67.2%/89.8%と分離する。
  導入日はグリーンべると、P-WORLD機種DB、HAZUSE、パチビー等で2025-02-03が一致。遊技通信記事の「2月2日より順次」は導入予定表現としてsource noteに保持し、canonicalは2025-02-03。

sources:
- https://news.p-world.co.jp/articles/29989/greenbelt — グリーンべると/P-WORLD業界ニュース。2025-01-16。LT搭載、導入予定2025-02-03、基本フロー、LT名称。
- https://news.p-world.co.jp/articles/29997/yugitsushin — 遊技通信/P-WORLD業界ニュース。2025-01-17。型式Pシン・エヴァンゲリオンMV、ビスティ、1/129.8→1/54.4、RUSH約51%、下位約70%、LT約91%、右打ちALL1000個。
- https://www.p-world.co.jp/machine/database/10206 — P-WORLD機種DB。特図1 0.5%/50.0%/49.5%、下位RUSH特図2 10%/90%、LT特図2 100%、時短60/123+残保留4、払出。
- https://hazuse.com/machine/pachinko/PX0264/ — HAZUSE。型式、導入日、初当り振り分け、下位→LT10%、継続率。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/bisty_pachi/150/kh02.php — パチマガスロマガ。確率、出玉、時短、LT直行0.5%/通常RUSH時10%、LT初当り1/1326.67、遊タイムなし。
- https://www.pachibee.jp/machines/index/125010010 — パチビー。導入日、基本スペック、時短0/60/123、継続率定義。
- https://1geki.jp/pachinko/p_shineva_129lt/51/ — 一撃。下位RUSH60回、約70%、右打ちALL1000個、フリーズLT経路。

confidence:
- LT搭載/名称/型式/メーカー: INDUSTRY + ANALYSIS_HIGH
- 基本確率/突入率/継続率: INDUSTRY + ANALYSIS_HIGH
- 特図1/特図2振り分け: ANALYSIS_HIGH（複数照合）
- LT初当り1/1326.67: ANALYSIS_SINGLE（直接解析値）
- releaseDate: INDUSTRY + ANALYSIS_HIGH

missingFields: []
conflicts: []
sourceNotes:
- RUSH突入「約51%」はLT直行込みの丸め。詳細値50.5%と競合扱いしない。
- 遊技通信の2025-02-02より順次導入予定と、複数資料の2025-02-03導入開始は表現/日付境界差として保持。canonical releaseDateは複数一致する2025-02-03。
