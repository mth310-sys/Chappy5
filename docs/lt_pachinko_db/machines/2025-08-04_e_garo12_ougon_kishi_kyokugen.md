# e牙狼12黄金騎士極限

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e牙狼12黄金騎士極限
manufacturer: サンセイアールアンドディ
modelNumber: e牙狼12 XX-MJ
releaseDate: 2025-08-04
modelType: スマパチ / ミドル / LT3.0 PLUS
gameType: 一種二種混合 / 1G連ループ / LTチャレンジ突破型

jackpotProbability:
- 通常時大当り合算: 1/349.99
- 液晶図柄揃い: 1/437.49 ※ガロチャージ除外
- ガロチャージ（2R）: 1/1749.97
- 右打ち時実質: 1/1

initialPayout:
- 液晶図柄揃い: 10R 約1500個（払い出し）
- ガロチャージ: 2R 約300個（払い出し）

rushEntryRate: 液晶図柄揃い時50%で初回右打ち「極限7500バトル」。通常RUSHを継続状態として持つ構造ではなく、ここがLT突入判定の1G連チャレンジ。
rushContinuationRate: 通常継続RUSHなし。極限7500バトルは右打ち1/1・時短1回で、50%が7500個+LT、50%が1500個+通常へ。

ltName: 魔戒CHANCE LT
ltEntryRoute: 液晶図柄揃い → 50%で極限7500バトル → 右打ち大当りの50%で10R×5回=7500個獲得 + LT「魔戒CHANCE LT」。
ltEntryRate:
- 極限7500バトルから: 50%
- 液晶図柄揃いを分母とした経路上の公表簡易表記: 25%とする二次資料あり。
- 通常遊技全体を分母とするLT到達確率は、一次/高信頼資料の直接公表値として今回固定せずUNVERIFIED_AFTER_RESEARCH。経路確率から独自換算しない。
ltContinuationRate: 約76%

ltPayoutStructure:
- 10R×5回 約7500個 + LT継続: 約25%
- 10R 約1500個 + LT継続: 約51%
- 10R 約1500個 + 通常へ: 約24%
- したがって継続側合計が約76%。7500個は1500個×5回の払い出し合計。

totalPayoutDistribution:
- 通常時液晶図柄揃い: 10R約1500個 + 極限7500バトル 50% / 10R約1500個 + 通常 50%
- ガロチャージ: 2R約300個 + 通常
- 極限7500バトル: 10R×5回約7500個 + LT 50% / 10R約1500個 + 通常 50%
- LT中: 7500個+継続 約25% / 1500個+継続 約51% / 1500個+終了 約24%

timeShortening:
- 極限7500バトル: 時短1回
- 魔戒CHANCE LT: 時短1回
- 資料に0or1回+残保留最大4個表記あり。ただし主要ゲームフローは1/1の1G連型として時短1回で完結。

cTimeOrSpecialSystems: LT3.0 PLUS。極限7500バトルおよびLTはいずれも右打ち実質1/1の1G連型。7500個は10R×5回。
ceilingOrSupport: 遊タイムなし / 潜伏確変なし / コンプリート機能搭載

gameFlow: |
  通常時
   ├─ 液晶図柄揃い 1/437.49 → 10R 約1500個
   │   ├─ 50%: 極限7500バトル（時短1回 / 右1/1）
   │   │   ├─ 50%: 10R×5 約7500個 → LT「魔戒CHANCE LT」
   │   │   └─ 50%: 10R 約1500個 → 通常時
   │   └─ 50%: 通常時
   └─ ガロチャージ 1/1749.97 → 2R 約300個 → 通常時

  LT「魔戒CHANCE LT」
   └─ 時短1回 / 右1/1 / 継続約76%
       ├─ 約25%: 7500個 → LT継続
       ├─ 約51%: 1500個 → LT継続
       └─ 約24%: 1500個 → 通常時

notes:
- 大当り合算1/349.99、液晶図柄揃い1/437.49、ガロチャージ1/1749.97は分母定義を分離。
- LT中7500個比率25%は業界一次記事と複数解析で一致。
- 極限7500バトル突破時は初当り1500個+7500個を経てLTへ入る。LT突入後最短終了までの総出玉を単一大当り出玉と混同しない。
- 7500個は10R×5回。出玉は払い出し。
- 通常遊技全体基準の総LT到達率は十分な再探索後も一次/高信頼の直接値として固定できずUNVERIFIED_AFTER_RESEARCH。経路から独自算出しない。

sources:
- https://news.p-world.co.jp/articles/31185/amusement — Amusement Japan業界記事。LT3.0 PLUS、導入日、各確率、極限7500バトル50%、LT50%、約76%、LT中7500個約25%。
- https://www.amusement-japan.co.jp/article/detail/10004882/ — 業界一次系同記事。上記を照合。
- https://www.p-world.co.jp/machine/database/10305 — P-WORLD。魔戒CHANCE LT約76%、ゲームフローを照合。
- https://nana-press.com/kaiseki/machine/1009/30845/ — なな徹。1/349.99、1/437.49、1/1749.97、右1/1、払い出し、遊タイムなしを照合。
- https://hisshobon.com/machineinfo/98270/ — 必勝本。導入日、型式表記、基本スペック、時短1回、LT搭載を照合。
- https://hisshobon.com/machineinfo/98271/ — 必勝本。ヘソ/極限7500バトル/LT中の振り分け50/50、25/51/24を照合。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sansei_pachi/314/kh04.php — パチマガスロマガ。通常→極限7500バトル→LTのゲームフロー、7500=1500×5を照合。

confidence:
- LT搭載/名称/導入日/基本確率/50%→50%経路/約76%/7500比率: INDUSTRY + ANALYSIS_HIGH
- 型式/時短/詳細振り分け: ANALYSIS_HIGH（複数照合）
- 通常遊技全体基準の総LT到達率: UNVERIFIED

missingFields:
- 通常遊技全体を分母とする総LT到達率の直接公表値

conflicts: none
