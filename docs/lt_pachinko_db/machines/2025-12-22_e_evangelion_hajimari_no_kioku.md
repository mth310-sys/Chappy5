# e 新世紀エヴァンゲリオン ～はじまりの記憶～

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e 新世紀エヴァンゲリオン ～はじまりの記憶～
manufacturer: ビスティ
modelName: e新世紀エヴァンゲリオン17 はじまりの記憶R
releaseDate: 2025-12-22
modelType: ミドル / スマパチ / LT

gameType: ST / 時短100回 → LTロングST

jackpotProbability:
- 通常時図柄揃い: 約1/399.9
- チャージを含む大当り合算: 約1/349.9
- LT中: 約1/99.6
- チャンスタイム中: 約1/399.9

initialPayout:
- 図柄揃い: 10R約1500個 0.5% / 2R約300個 99.5%（払い出し）
- チャージ: 約300個。図柄揃いとは別定義。

rushEntryRate:
- LT「インパクトモード」TOTAL突入率: 約61.4%（図柄揃い大当りとチャージからの突入大当りの合算に対する値）。
- 図柄揃い時: 0.5% 1500個＋LT / 50.0% 300個＋LT / 49.5% 300個＋時短100回。

rushContinuationRate:
- 非LT下位RUSHは存在しない。非LT側はチャンスタイム100回で、引き戻し期待度約22.2%。

ltName: インパクトモード / 暴走モード（同一LT性能の演出選択）

ltEntryRoute:
- 図柄揃い → 50.5%でLT ST157回へ直行。
- 図柄揃い → 49.5%でチャンスタイム100回 → 引き戻しでLTへ。
- チャージからLTへ移行する経路もあり、TOTAL突入率約61.4%はチャージ経由を含む。

ltEntryRate:
- TOTAL LT突入率: 約61.4%（公表値、チャージ経由込み）。
- 図柄揃い時LT直行: 50.5%。
- 時短100回引き戻し: 約22.2%。

ltContinuationRate:
- 約80%
- ST157回、LT中約1/99.6。

ltPayoutStructure:
- LT中: 8R×4回 約4800個＋LT 0.5% / 8R×2回 約2400個＋LT 99.5%。
- 2400個=1200個×2、4800個=1200個×4の合計払い出しで、単一大当り出玉と混同しない。

totalPayoutDistribution:
- 図柄揃い特図1: 1500個＋LT 0.5% / 300個＋LT 50.0% / 300個＋時短100回 49.5%。
- LT中: 4800個 0.5% / 2400個 99.5%、いずれもLT継続。

timeShortening:
- チャンスタイム: 100回、通常と同じ約1/399.9、引き戻し約22.2%。
- LT: ST157回。

cTimeOrSpecialSystems:
- 通常時は図柄揃い約1/399.9とチャージを含む大当り合算約1/349.9を定義分離。

ceilingOrSupport:
- 遊タイム: 非搭載。
- コンプリート機能: 搭載。

gameFlow: |
  通常時（図柄揃い約1/399.9 / チャージ込み大当り約1/349.9）
   ↓ 図柄揃い
   ├─ 50.5% → LT「インパクトモード/暴走モード」ST157回
   └─ 49.5% → チャンスタイム100回（引き戻し約22.2%）
                    ↓ 引き戻し
                  LT ST157回
  LT中 約1/99.6 / 継続約80%
   ↓ 大当り
  99.5% 2400個 / 0.5% 4800個 → LT157回再セット

notes:
- 図柄揃い1/399.9とチャージ込み大当り1/349.9は競合ではなく分母定義差。
- 一部資料の「RUSH突入50.5%」は図柄揃い直行割合。公式系資料のTOTAL約61.4%は時短引き戻し・チャージ経由を含むため分離した。
- 型式名・検定番号5P0685をHAZUSEで照合。

sources:
- https://hazuse.com/machine/pachinko/5P0685/ — HAZUSE。LT、型式、図柄揃い/合算確率、TOTAL突入約61.4%、継続約80%、導入日。取得日 2026-09-23。
- https://www.pachibee.jp/machines/index/125110009 — パチビー。LT搭載、確率定義、ST/時短、出玉。取得日 2026-09-23。
- https://1geki.jp/pachinko/e_eva17/39/ — 一撃。図柄揃い1/399.9、LT1/99.6、ST157、時短100、出玉。取得日 2026-09-23。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/bisty_pachi/155/kh04.php — パチマガスロマガ。ゲームフロー、時短引き戻し約22.2%、LT約80%。取得日 2026-09-23。

confidence:
- LT搭載/名称/型式/導入日/基本確率/突入・継続/主要振り分け: ANALYSIS_HIGH + INDUSTRY

missingFields: []
conflicts: []
