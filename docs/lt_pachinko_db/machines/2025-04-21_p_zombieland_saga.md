# Pゾンビランドサガ

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pゾンビランドサガ
modelName: PゾンビランドサガSCPC
manufacturer: サミー
releaseDate: 2025-04-21
modelType: ライトミドル
ltEquipped: true
gameType: 一種二種混合 / 下位ST → LTチャンスST → LTループ

## Core spec
jackpotProbability:
- 通常時: 約1/159.8
- サガRUSH / サガRUSH LTチャンス中: 約1/71.4（大当り＋図柄揃い小当り合算）
- 七福ヘドバンRUSH中: 約1/36.6（大当り＋図柄揃い小当り合算）
- 特図2残保留: 約1/29.6（解析資料表記）

initialPayout:
- 通常初当り: 3R 約405個（払出）

rushEntryRate: 50%
rushContinuationRate:
- サガRUSH: 約76%（90回＋残保留4個）
- サガRUSH LTチャンス: 約76%（90回＋残保留4個）

timeShortening:
- サガRUSH: 90回＋残保留4個
- サガRUSH LTチャンス: 90回＋残保留4個
- 七福ヘドバンRUSH: 10000回＋残保留4個（実質次回まで）

## Lucky Trigger
ltName: 七福ヘドバンRUSH
ltEntryRoute:
1. 通常初当りの50%でサガRUSHへ。
2. サガRUSH中の10R大当り時、約1/3でサガRUSH LTチャンスへ移行。
3. サガRUSH LTチャンス中の10R大当り時にヘドバンチャレンジが発生し、約1/2で成功するとLT「七福ヘドバンRUSH」へ突入。

ltEntryRate:
- 通常初当り基準の総LT到達率: UNVERIFIED（公開された直接値を今回の高信頼ソース群では確認できず。経路値から独自合算しない）
- サガRUSH中10RからLTチャンス: 約1/3
- LTチャンス中10RからLT: 約1/2

ltContinuationRate: 約89.4%
ltContinuationDefinition:
- LT継続振り分け約87.8% + 残保留4個での引き戻し約12.8%を加味したTOTAL値。
- LT本体は10000回の実質次回型ループ。END停止→復活なし後も10R出玉を獲得し、残保留4個で引き戻さなければ通常へ。

ltPayoutStructure:
- LT中大当りはALL 10R（実質9R）約1215個払出。
- 転落契機でも10R出玉あり。

totalPayoutDistribution:
- 3R: 約405個払出
- 4R（実質3R）: 約405個払出
- 10R（実質9R）: 約1215個払出
- サガRUSHは10R比率が段階的に上昇する構造。サガRUSH中10Rの約1/3でLTチャンス、LTチャンス中10Rの約1/2でLT。

cTimeOrSpecialSystems: 残保留中の当選確率が通常のRUSH中と異なる。LT継続率はLT継続振り分けと残保留引き戻しを合算した定義。
ceilingOrSupport: 遊タイム非搭載

## Game flow
通常時（約1/159.8）
↓ 初当り 3R約405個
├─ 50%: 通常時へ
└─ 50%: サガRUSH（90回＋残保留4 / 約76%）
   ↓ 10R大当りの約1/3
   サガRUSH LTチャンス（90回＋残保留4 / 約76%）
   ↓ 10R大当り → ヘドバンチャレンジ成功 約1/2
   LT「七福ヘドバンRUSH」
   ↓ 10000回＋残保留4 / TOTAL約89.4%
   ALL 10R（実質9R）約1215個
   ↓ END停止・復活なし後、残保留4個でも非当選
   通常時

## Notes
- LTは下位STの単純延長ではなく、ST型から実質次回までのループ型へゲーム構造そのものが変化する。
- サガRUSHとサガRUSH LTチャンスは当選確率・ST回数・TOTAL継続率が同じだが、10R比率とLT到達機会が異なるため別状態として保存。
- 「約89.4%」を単純な1回転当選率として扱わない。約87.8%のLT継続振り分けと残保留引き戻しを含むTOTAL値。
- 期待出玉約15074個という資料値は「LT突入までの平均獲得約4346個＋LT初回約1215個＋LT平均約9513個」の合算であり、LT単体の平均出玉と混同しない。

## Sources
retrievedAt: 2026-09-21
1. P-WORLD / 遊技通信「業界初！！増加する10R比率！『Pゾンビランドサガ』」 — 型式名、メーカー、確率、RUSH/LT構造・継続率。INDUSTRY
   https://news.p-world.co.jp/articles/30213/yugitsushin
2. パチ&スロ必勝本「LT『七福ヘドバンRUSH』解説」 — LT正式名称、発動契機、約1/2、終了条件、残保留引き戻し。ANALYSIS_HIGH
   https://hisshobon.com/machineinfo/96805/
3. 一撃「Pゾンビランドサガ」 — 基本スペック、右打ち確率、ST回数、払出/実獲得の区別。ANALYSIS_HIGH
   https://1geki.jp/pachinko/p_zonsaga/
4. 一撃「サガRUSHの詳細」 — サガRUSH→LTチャンス経路、10R約1/3、90回ST。ANALYSIS_HIGH
   https://1geki.jp/pachinko/p_zonsaga/51/
5. 一撃「七福ヘドバンRUSH」 — LT 10000回、約89.4%、LTチャンス中10R約1/2。ANALYSIS_HIGH
   https://1geki.jp/pachinko/p_zonsaga/54/
6. なな徹「スペック詳細・大当たり内訳」 — 一種二種混合、通常/右確率、RUSH/LT継続、出玉、遊タイム非搭載。ANALYSIS_HIGH
   https://nana-press.com/kaiseki/machine/932/28036/
7. HAZUSE「Pゾンビランドサガ」 — 型式名 PゾンビランドサガSCPC、導入日2025-04-21、継続率定義。ANALYSIS_HIGH
   https://hazuse.com/machine/pachinko/4P1637/

confidence: INDUSTRY + ANALYSIS_HIGH（複数一致）
missingFields:
- 通常初当り基準の総LT到達率の直接公表値
conflicts: none
