# P大工の源さん超韋駄天2 極源LighT

収集日: 2026-09-21
status: COMPLETE_CORE

machineName: P大工の源さん超韋駄天2 極源LighT
manufacturer: 三洋物産
releaseDate: 2024-04-08
modelType: ライトミドル（LT搭載）
gameType: 一種二種混合機
jackpotProbability:
- 通常時: 約1/129.7
- 右打ち中実質: 約1/2.44
initialPayout:
- 3R: 約240個（払出）
- 9R: 約720個（払出）
rushEntryRate: 56%
rushContinuationRate: 超源RUSH 約88%（時短3回約79.4%＋残保留1回約41.0%の合算約87.9%）
ltName: 極源RUSH
ltEntryRoute: 超源RUSH中の大当りの2%（9R）から発動
ltEntryRate: 超源RUSH中大当りの2%。通常時初当り全体からの単一LT到達率は本レコードでは算出しない
ltContinuationRate:
- 極源RUSH: 約96%
- 初回LT突入時の時短127回: 継続期待値約99.9%
- 以後の時短6回: 継続期待値約95.8%
- ファイナルジャッジを含む資料上の合算値: 約97.5%（約96%とは定義を分けて保持）
ltPayoutStructure:
- 極源RUSH中: 9R 約720個＋時短6回＋残保留1回 20%
- 極源RUSH中: 3R 約240個＋時短6回＋残保留1回 80%
- 残保留1回転での大当りは超源RUSH側の振り分けを使用
totalPayoutDistribution:
- 特図1: 3R約240個＋超源RUSH（時短3回＋残保留1）56% / 3R約240個・時短なし44%
- 超源RUSH中: 9R約720個＋極源RUSH（時短127回＋残保留1）2% / 9R約720個＋超源RUSH18% / 3R約240個＋超源RUSH80%
- 極源RUSH中: 9R約720個20% / 3R約240個80%（いずれも時短6回＋残保留1）
timeShortening:
- 通常RUSH: 時短3回＋残保留1回
- LT初回: 時短127回＋残保留1回
- LT継続時: 時短6回＋残保留1回
cTimeOrSpecialSystems: LT（ラッキートリガー）搭載。極源RUSH初回のみ時短127回
ceilingOrSupport: 遊タイム非搭載
gameFlow:
```
通常時 約1/129.7
├─ 44% → 3R約240個 → 通常へ
└─ 56% → 3R約240個 → 超源RUSH
                         ↓ 継続約88%
                   右打ち大当り
                   ├─ 2% → 9R約720個 → LT発動 / 極源RUSH
                   ├─ 18% → 9R約720個 → 超源RUSH継続
                   └─ 80% → 3R約240個 → 超源RUSH継続

極源RUSH
初回: 時短127回＋残保留1
以後: 時短6回＋残保留1
継続期待値 約96%
```

notes:
- 型式名: P大工の源さん超韋駄天2HLB。
- 三洋の発表を扱う複数業界媒体でLT搭載、通常約1/129.7、RUSH56%、超源約88%、極源約96%を照合。
- 出玉240/720個は払出個数として保存し、獲得個数と混同しない。
- 極源RUSHの「約96%」と「ファイナルジャッジ込み約97.5%」は定義が異なるため統合しない。

sources:
- https://www.sanyobussan.co.jp/products/pk_daikunogensan_idaten2_light/ — 三洋公式機種サイト（業界記事から公式URL確認、取得 2026-09-21）
- https://news.p-world.co.jp/articles/26790/yugitsushin — 遊技通信 / P-WORLD業界ニュース（取得 2026-09-21）
- https://news.p-world.co.jp/articles/26786 — グリーンべると / P-WORLD業界ニュース（取得 2026-09-21）
- https://amusement-japan.co.jp/article/detail/10004106/ — Amusement Japan（取得 2026-09-21）
- https://nana-press.com/kaiseki/machine/720/19305/ — なな徹（取得 2026-09-21）
- https://www.atari7.com/pachinko/daikunogensan-idaten2-light.php — アタリ7（取得 2026-09-21）
- https://www.p-world.co.jp/machine/database/9999 — P-WORLD（取得 2026-09-21）

confidence:
- LT搭載: OFFICIAL/INDUSTRY
- 基本スペック: INDUSTRY + ANALYSIS_HIGH
- 振り分け/時短: ANALYSIS_HIGH（複数資料一致）
- 導入日: INDUSTRY（複数資料一致）

missingFields:
- なし（本ミッション必須範囲）

conflicts:
- なし。極源RUSH継続約96%とファイナルジャッジ込み約97.5%は競合ではなく定義差として併記
