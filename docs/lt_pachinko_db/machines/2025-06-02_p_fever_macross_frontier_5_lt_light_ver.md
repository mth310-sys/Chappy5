# Pフィーバーマクロスフロンティア5 LT-Light ver.

machineName: Pフィーバーマクロスフロンティア5 LT-Light ver.
manufacturer: SANKYO
formalModel: Pフィーバーマクロスフロンティア5YS
releaseDate: 2025-06-02
modelType: 甘デジ / 約1/99.9
gameType: 1種2種混合 / ST（時短）+ 残保留 / c時短搭載 / 下位RUSH→LT昇格型（通常時LT直行あり）
jackpotProbability: 通常時図柄揃い 約1/99.9 / 右打ち中 約1/56.9（大当り・小当り合算）
initialPayout: 約160個（2R）が中心。約0.1%のみ10R約800個+LT直行。
rushEntryRate: TOTAL約55%。SPECIAL GALAXY RUSH直行、GALAXY RUSH直行、強行突破チャレンジでの引き戻し（c時短含む）の合算。解析資料では直行部分約50.6%（別資料では「約51%直行」と丸め表記）。
rushContinuationRate: GALAXY RUSH 約67% TOTAL。ST55回の継続約64%（c時短含む）+残保留4個の継続約7%（c時短含む）を合わせた公表値。
ltName: SPECIAL GALAXY RUSH
ltEntryRoute: (1) 通常時図柄揃いの約0.1%で10R約800個+SPECIAL GALAXY RUSH直行。(2) GALAXY RUSH/強行突破チャレンジ中の図柄揃いの約10%で10R約800個+SPECIAL GALAXY RUSH。(3) 強行突破チャレンジ成功時はGALAXY RUSHまたはSPECIAL GALAXY RUSHへ移行し得る。
ltEntryRate: 通常時直行 約0.1%。下位RUSH等の右打ち図柄揃い時 約10%。通常初当りを分母とする総LT到達率の直接公表値は確認できず、経路確率から独自合算しない。
ltContinuationRate: 約92% TOTAL。ST135回の継続約91%（時短最終回転のみc時短含む）+残保留4個の継続約7%（c時短含む）の合算公表値。
ltPayoutStructure: LT中の図柄揃いは10R約800個+LT継続 100%。ただしLT中でも残保留での当選時は下位RUSH中の振り分けが適用されると解析資料に注記あり。
totalPayoutDistribution: |
  通常時: 10R約800個+LT 約0.1% / 2R約160個+GALAXY RUSH 約50.6% / 2R約160個+強行突破チャレンジ 約49.3%。
  解析詳細では50.6%部分を、2R+RUSH直行17.7% / 強行突破チャレンジ成功→RUSH32.9% と分解する表記あり。
  強行突破チャレンジ・GALAXY RUSH中: 10R約800個+LT 約10.0% / 10R約800個+GALAXY RUSH 約85%前後（解析精密値85.3%） / c時短・STリセット 約5%前後（解析精密値4.7%）。
  LT中: 10R約800個+LT 100%（LT中残保留当選は上記下位側振り分け）。
timeShortening: 強行突破チャレンジ ST1回+残保留4個 / GALAXY RUSH ST55回+残保留4個 / SPECIAL GALAXY RUSH ST135回+残保留4個。
cTimeOrSpecialSystems: c時短搭載。下位RUSHの約67%、LTの約92%はいずれもc時短を含むTOTAL値。右打ち振り分けに約5%（解析精密値4.7%）のSTリセットあり。
ceilingOrSupport: 遊タイムの確認なし。
gameFlow: |
  通常時（図柄揃い 約1/99.9）
   ├─ 約0.1% → 10R約800個 → SPECIAL GALAXY RUSH（LT、ST135+残4）
   ├─ 約50.6% → 2R約160個 → GALAXY RUSH（ST55+残4）
   └─ 約49.3% → 2R約160個 → 強行突破チャレンジ（ST1+残4）
                         ├─ 成功/当選 → GALAXY RUSH またはLT
                         └─ 失敗 → 通常へ
  GALAXY RUSH（TOTAL約67%）
   ├─ 右打ち図柄揃い約10% → 10R約800個 → SPECIAL GALAXY RUSH
   ├─ 約85% → 10R約800個 → GALAXY RUSH継続
   └─ 約5% → STリセット
  SPECIAL GALAXY RUSH（LT、TOTAL約92%）
   └─ 図柄揃い → 10R約800個 → LT継続
notes: |
  業界一次系（遊技通信、グリーンべると転載）とP-WORLD/HAZUSE/パチマガスロマガ/情報島を横断照合。
  右打ち85%/5%と85.3%/4.7%は丸め差でありCONFLICT扱いしない。
  RUSH突入約55%は直行率ではなく、LT直行・GALAXY RUSH直行・強行突破チャレンジ引き戻し（c時短含む）のTOTAL定義。
  LT期待出玉について業界資料に約10,240個の表記があるが、これはLT突入まで約2,050個+LT期待出玉約8,190個の合算定義であり、単発出玉や継続率と混同しない。
  通常初当り基準の総LT到達率は直接値未確認のためUNVERIFIED_AFTER_RESEARCH。経路値から推測合算しない。
sources:
  - https://news.p-world.co.jp/articles/30462/yugitsushin — 遊技通信 / 型式、確率、RUSH/LT継続、c時短を含む定義、導入日（取得 2026-09-22）
  - https://news.p-world.co.jp/articles/30430 — グリーンべると転載 / LT搭載、ゲームフロー、主要振り分け、期待出玉（取得 2026-09-22）
  - https://www.p-world.co.jp/machine/database/10246 — P-WORLD / LT直行0.1%、下位RUSH、LT構造、継続率定義（取得 2026-09-22）
  - https://hazuse.com/machine/pachinko/4P1510/ — HAZUSE / 型式4P1510、導入日、主要振り分け（取得 2026-09-22）
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/536/kh01.php — パチマガスロマガ / 型式、1種2種、直行約51%とTOTAL約55%、LT名/構造（取得 2026-09-22）
  - https://p-johojima.jp/machine_spec/post-3109/ — 情報島 / 詳細振り分け、電サポ回数（取得 2026-09-22）
confidence: INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields:
  - 通常初当り全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（直接公表値未確認）
conflicts: []
retrievedAt: 2026-09-22
