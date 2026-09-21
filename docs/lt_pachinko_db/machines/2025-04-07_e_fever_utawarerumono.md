# eフィーバーうたわれるもの

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: eフィーバーうたわれるもの
manufacturer: SANKYO
releaseDate: 2025-04-07
modelType: スマパチ / ミドル相当 / LT搭載
gameType: 一種二種混合 / RUSH=LT直行 / ショートST
jackpotProbability: 図柄揃い 約1/399.7。うたわれチャージ 1/264.7（公式系解析では約1/264.6表記あり）。大当り合算は約1/159〜1/159.8（資料上の丸め・定義差を保持）。LT中 約1/13.4（特図2、大当り・小当り・c時短の合算）。
initialPayout: 図柄揃いは主に10R約1500個。全回転等で10R×2 約3000個。うたわれチャージは2R約192個。すべて払出表記。
rushEntryRate: RUSH=LT。トータル約55%。必勝本では図柄揃い時約54.5%、うたわれチャージ時約0.7%と明記。
rushContinuationRate: RUSH=LTのため通常RUSHは別に存在しない。
ltName: 仮面RUSH（アクルカRUSH）
ltEntryRoute: 通常時の奇数図柄揃い、偶数図柄揃い後ファイナルジャッジ成功、うたわれチャージ昇格、仮面の者出目停止、全回転（約3000個+LT）など。初当りからLTへ直行する構造。
ltEntryRate: 約55%（公式。特図1の3000個大当り・1500個大当り・192個LT突入大当りの合算に対するTOTAL突入率）。解析振り分け例では特図1: 3000個+LT 約1%、1500個+LT 約53%、192個+LT 約1%、1500個通常 約45%。
ltContinuationRate: 約77%。ST15回の継続約69%（c時短含む）と残保留4個の継続約27%（c時短含む）のTOTAL。
ltPayoutStructure: LT中の出玉あり図柄揃いはALL約3000個（1500個×2）。解析資料では特図2 約80%が10R×2=約3000個、約20%が出玉なしSTリセット（15回へ再セット）。保留内当選等により3000個単位の上乗せ演出あり。
totalPayoutDistribution: 特図1解析値: 約1% 3000個+LT / 約53% 1500個+LT / 約1% 192個+LT / 約45% 1500個+通常。特図2解析値: 約80% 3000個+LT継続 / 約20% STリセット+LT継続。
timeShortening: LTは時短15回+残保留4個。通常終了時は0回。c時短を継続率計算に含む。
cTimeOrSpecialSystems: 特図2の約1/13.4は大当り・小当り・c時短当選の合算。STリセット契機あり。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時
   ├─ 図柄揃い / うたわれチャージ
   │    ├─ TOTAL約55% → LT「仮面RUSH」(15回+残保留4、約77%)
   │    └─ 非突入 → 通常時
   └─ LT中
        ├─ 約80% 出玉あり約3000個 → LT継続
        └─ 約20% STリセット → 15回へ再セット
notes: |
  RUSH突入=ラッキートリガー発動の直LT型。Pフィーバーうたわれるもの199ver.（同日導入）および後発LT-Light ver.とは別スペックとして分離する。
  うたわれチャージは1/264.6と1/264.7の表記差があるが丸め差として扱い、CONFLICTにはしない。
  「図柄揃い1/399.7」と「大当り合算約1/159〜1/159.8」を混同しない。
sources:
  - https://www.sankyo-fever.jp/products/machine_list/pce/spec/ — メーカー公式。図柄揃い約1/399.7、LT中約1/13.4、LT突入約55%、ST15+残4、LT約77%、払出3000/1500/192、各定義注記。取得 2026-09-21。
  - https://www.sankyo-fever.jp/collection/978/ — SANKYO公式博物館。2025年4月導入、1種2種混合、3000個上乗せ特化LT、主要突入経路。取得 2026-09-21。
  - https://hisshobon.com/machineinfo/96821/ — 必勝本。2025-04-07導入、図柄揃い1/399.7、チャージ1/264.7、図柄揃い時約54.5%/チャージ時約0.7%/TOTAL約55%、LT約1/13.4・15+4・約77%、遊タイム非搭載。取得 2026-09-21。
  - https://1geki.jp/pachinko/e_utawarerumono/39/ — 一撃。導入日、スペック定義、実獲得併記。取得 2026-09-21。
  - https://chonborista.com/pachinko/sankyo/229566/ — 解析資料。特図1/特図2振り分け、直LT構造。取得 2026-09-21。
  - https://nana-press.com/kaiseki/machine/913/28754/ — なな徹。仮面RUSH突入契機、15+4、約77%、図柄揃い約3000個。取得 2026-09-21。
confidence: OFFICIAL + ANALYSIS_HIGH
missingFields: []
conflicts: []
