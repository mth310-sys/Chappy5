# eワンパンマン2～正義執行

machineName: eワンパンマン2～正義執行
manufacturer: ニューギン
formalModelName: eワンパンマン2～正義執行LM10
releaseDate: 2026-03-02
modelType: ライトミドル / スマパチ / LT搭載
status: COMPLETE_CORE
gameType: 1種2種混合 / ST型LT
jackpotProbability: 通常時 約1/179.55 / HERO RUSH中SHOW DOWN発生率 約1/98.55
initialPayout: 6R 約710個、10R×2 約2540個（いずれも払出表記）
rushEntryRate: 25%
rushContinuationRate: 下位RUSHなし。HERO RUSH自体がLT。継続約75%
ltName: HERO RUSH
ltEntryRoute: 初当りの25%から直接LT。特図1は10R×2＋HERO RUSH 4%、6R＋HERO RUSH 21%、6R＋通常 75%。
ltEntryRate: 初当り基準25%（直接公表値）
ltContinuationRate: 約75%
ltPayoutStructure: 特図2は10R×4 約5080個 50.00% / 10R約1270個＋不屈CHANCE2回 18.75% / 10R約1270個＋不屈CHANCE1回 7.02% / 10R約1270個 4.23% / STリセット 20.00%。全振り分けでHERO RUSH継続。10R×4は4回分合計であり単一大当り出玉ではない。
totalPayoutDistribution: 特図1 10R×2 約2540個＋LT 4% / 6R 約710個＋LT 21% / 6R 約710個＋通常 75%。特図2はltPayoutStructure参照。
timeShortening: HERO RUSH 134回
cTimeOrSpecialSystems: 不屈CHANCE。SUPER HERO BONUS後の一部で最大2回の上乗せ抽選。1回あたり成功期待度約14%、成功時10R約1270個を上乗せ。右打ち中20%にSTリセットあり。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時 約1/179.55
   ↓ 初当り
  75%: 6R約710個 → 通常
  21%: 6R約710個 → LT「HERO RUSH」
   4%: 10R×2約2540個 → LT「HERO RUSH」
   ↓
  HERO RUSH 134回 / SHOW DOWN約1/98.55 / 継続約75%
   ↓
  右打ち中は50%で10R×4約5080個、その他10R・不屈CHANCE・STリセット
   ↓
  全右振り分けでHERO RUSH継続
notes: |
  本機は通常RUSHからLTへ昇格する二段階型ではなく、初当り25%でLT「HERO RUSH」へ直接入る直LT型。
  P-WORLD、なな徹、パチンコビレッジ系機種DB、業界記事で主要値を横断照合。
  「5000発」は10R×4回（払出約5080個）の合計表現で、単一大当りの出玉として扱わない。
  右打ち中の20%は出玉なしのSTリセット。HERO RUSH継続率約75%はこれを含む公表継続値。
  2026年11月予定の99ver.とは別スペックであり混同しない。
sources:
  - url: https://news.p-world.co.jp/articles/32926/yugitsushin
    sourceType: INDUSTRY
    note: 遊技通信転載。型式名、通常/右確率、RUSH25%、継続約75%、右50%5000発、2026年3月導入。
  - url: https://www.p-world.co.jp/machine/database/10439
    sourceType: ANALYSIS_HIGH
    note: LT搭載、特図1/特図2振り分け、払出、HERO RUSH、ST134回、不屈CHANCE。
  - url: https://nana-press.com/kaiseki/machine/1103/35379/
    sourceType: ANALYSIS_HIGH
    note: 1/179.55、1/98.55、LT搭載、25%、約75%、ST134回、全振り分け、遊タイム非搭載。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/515/kh01.php
    sourceType: ANALYSIS_HIGH
    note: メーカー、正式型式、導入日、直LT構造。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/515/kh04.php
    sourceType: ANALYSIS_HIGH
    note: ゲームフロー、HERO RUSH 134回、5000BONUS=10R×4、不屈CHANCE。
retrievedAt: 2026-09-24
confidence: ANALYSIS_HIGH
missingFields: []
conflicts: []
