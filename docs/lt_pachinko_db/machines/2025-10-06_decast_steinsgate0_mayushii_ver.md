# デカスタPシュタインズ・ゲート ゼロ まゆしぃば～じょん

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: デカスタPシュタインズ・ゲート ゼロ まゆしぃば～じょん
manufacturer: ニューギン
releaseDate: 2025-10-06
modelType: 甘デジ / デカスタ / 約1/99
gameType: 1種2種混合 / ST型下位RUSH + LT上位ST
modelName: PSTEINS；GATE0N3（資料表記。業界記事等では P STEINS;GATE0 N3 とも表記）
jackpotProbability: 通常時 約1/99.9 / 右打ち中 約1/59.4（いずれも大当り確率と小当り確率の合算値）
initialPayout: 4R 約400個（実獲得約360個）100%。うちRUSH 0突入50% / 通常復帰50%。
rushEntryRate: 50%
rushContinuationRate: RUSH 0 約60%。時短50回での引き戻し約57.2% + 残保留4個を加味したTOTAL。

ltName: RUSH 0 HYPER
ltEntryRoute: RUSH 0中の出玉なし当り「タイムリープ」当選時の50%。RUSH 0の大当り全体ではタイムリープ4%（LT 2% / 下位STリセット2%）のため、LT移行は大当り全体の2%。
ltEntryRate: RUSH 0中大当り全体の2%。通常遊技全体基準の総LT到達率は直接公表値を十分な再探索後も確認できず UNVERIFIED_AFTER_RESEARCH。経路確率から独自算出しない。
ltContinuationRate: 約93%。時短150回での引き戻し約92.2% + 残保留4個を加味したTOTAL。
ltPayoutStructure: RUSH 0 HYPER中特図2: タイムリープ+鳳凰院凶真ZONE（電サポ10000回/実質次回）4% / 10R約1000個+RUSH 0 HYPER 48% / 3R約300個+RUSH 0 HYPER 48%。出玉は払出。実獲得目安は10R約900個、3R約270個。
totalPayoutDistribution: 通常時特図1: 4R約400個+RUSH 0 50% / 4R約400個+通常 50%。RUSH 0中特図2: タイムリープ+RUSH 0 HYPER 2% / タイムリープ+RUSH 0 2% / 10R約1000個+RUSH 0 48% / 3R約300個+RUSH 0 48%。LT中は別項参照。
timeShortening: RUSH 0 50回+残保留4個 / RUSH 0 HYPER 150回+残保留4個 / 鳳凰院凶真ZONE 10000回（実質次回まで）。通常初当り非RUSH側は電サポなし。
cTimeOrSpecialSystems: RUSH中の出玉なし当り「タイムリープ」でSTを巻き戻す。下位RUSHではタイムリープ4%のうち半分がLT、半分が下位STリセット。LT中タイムリープ4%は鳳凰院凶真ZONEへ移行し電サポ10000回（実質次回）。残保留4個での大当りはRUSH 0中と同じ振り分け。
ceilingOrSupport: 遊タイム非搭載。

gameFlow: |
  通常時（約1/99.9）
   ↓ 初当り 4R約400個
   ├─ 50% → RUSH 0（50回+残4 / 約60%）
   │          ├─ 2%: タイムリープ → LT「RUSH 0 HYPER」
   │          ├─ 2%: タイムリープ → RUSH 0を50回へリセット
   │          ├─ 48%: 10R約1000個 → RUSH 0継続
   │          └─ 48%: 3R約300個 → RUSH 0継続
   └─ 50% → 通常時
  LT「RUSH 0 HYPER」（150回+残4 / 約93%）
   ├─ 4%: タイムリープ → 鳳凰院凶真ZONE（10000回 / 実質次回）
   ├─ 48%: 10R約1000個 → LT継続
   └─ 48%: 3R約300個 → LT継続
  ST150回スルー → 残保留4個
   ├─ 残保留当選 → RUSH 0側振り分け（タイムリープならLT復帰可能）
   └─ 非当選 → 通常時

notes:
- 2024年導入のミドル版「Pシュタインズ・ゲート ゼロ」と別スペック。甘デジ×デカスタ×LT仕様。
- 型式はHAZUSEで `PSTEINS；GATE0N3`、業界資料等では空白・記号違いの `P STEINS;GATE0 N3` 表記があるため同一型式の表記揺れとして扱う。
- 情報島＋、一撃、必勝本、HAZUSE、パチビー等は導入開始2025-10-06で一致。ぱちんこキュレーションは10/6と10/20を併記し、一部カレンダー/解析は10/20表記。実導入開始を明示する複数機種DBに基づき10/6をcanonicalとし、10/20は二次展開/日付差として保持する。
- RUSH 0中の「タイムリープ4%」と「LT 2%」は競合ではない。タイムリープ当選4%の50%がLT、残り50%が下位STリセット。
- 約60%/約93%は残保留込みTOTAL。ST部分のみの約57.2%/約92.2%と混同しない。
- 約1000/400/300個は払出、約900/360/270個は実獲得目安。定義を分離する。

sources:
- https://p-johojima.jp/machine_spec/post-14260/ — パチンコ・パチスロ情報島＋、導入日/基本スペック/全振り分け/特殊状態、取得2026-09-22
- https://1geki.jp/pachinko/p_steinsgate0_99_ds/39/ — 一撃、導入日/基本確率/RUSH・LT継続/払出と実獲得、取得2026-09-22
- https://1geki.jp/pachinko/p_steinsgate0_99_ds/54/ — 一撃、タイムリープ/LT/鳳凰院凶真ZONE構造、取得2026-09-22
- https://hisshobon.com/machineinfo/98942/ — パチ&スロ必勝本、基本スペック/LT突入契機/10000回状態、取得2026-09-22
- https://p.hisshobon.jp/machine/4603/1/111312 — パチ&スロ必勝本、LT構造/終了条件/残保留仕様、取得2026-09-22
- https://hazuse.com/machine/pachinko/PX0312/ — HAZUSE、型式/導入日/基本スペック/LT構造、取得2026-09-22
- https://www.pachibee.jp/machines/index/125090008 — パチビー、導入日/基本スペック/払出/残保留注記、取得2026-09-22
- https://pachinko-curation.com/56710/ — ぱちんこキュレーション、10/6・10/20日付併記/LT搭載、取得2026-09-22

confidence:
- LT搭載/名称/構造: ANALYSIS_HIGH（複数解析資料一致）
- 基本確率/RUSH/LT継続/振り分け: ANALYSIS_HIGH（複数一致）
- 型式: ANALYSIS_HIGH
- canonical導入日2025-10-06: ANALYSIS_HIGH（複数機種DB一致。10/20表記資料あり）
- 通常遊技全体基準LT到達率: UNVERIFIED_AFTER_RESEARCH

missingFields:
- 通常遊技全体基準の総LT到達率（直接公表値）

conflicts: []
