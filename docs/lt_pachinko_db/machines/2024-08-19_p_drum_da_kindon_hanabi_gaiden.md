# Pドラムだ！金ドン 花火外伝

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pドラムだ！金ドン 花火外伝
manufacturer: ミズホ / ユニバーサルエンターテインメント
releaseDate: 2024-08-19
modelType: ライトミドル

gameType: 1種2種混合 / c時短 / RUSH=LT
jackpotProbability: 通常時 1/199.8。金ドンチャレンジ約1/2.2（大当り+小当り合算）。金ドンRUSH中図柄揃い約1/1.2（大当り+小当り+c時短合算）。
initialPayout: 特図1 10R約1500個 or 7R約1050個（払出）。
rushEntryRate: LT=RUSHのため最終RUSH突入は、初当り0.5%直行 + 49.5%金ドンチャレンジ（実質突破約29.7%）経由。単純合成値は資料直接値ではなく、DBでは経路別保存。
rushContinuationRate: 金ドンRUSH単体ループ約83%、金ドンRUSH∞およびファイナルチャレンジ込みTOTAL約88.4%。
ltName: 金ドンRUSH / 金ドンRUSH∞
ltEntryRoute: 初当り0.5%で金ドンRUSH∞直行。初当り49.5%で金ドンチャレンジ（時短1回）へ進み、10R当選でLT発動（チャレンジ実質突破約29.7%）。RUSH非継続後のファイナルチャレンジでも10R当選でLT復帰。
ltEntryRate: 初当り直行0.5%。金ドンチャレンジ突入49.5%、チャレンジ実質突破約29.7%。RUSH=LT。通常初当りからの総LT到達率は直接資料値未確認のため経路別値を採用し、合算推測はしない。
ltContinuationRate: TOTAL約88.4%（時短100回と時短1回+ファイナルチャレンジ成功を含む）。RUSHのみ約83%。
ltPayoutStructure: 金ドンRUSH(∞含む)中 特図2: 10R約1500個+金ドンRUSH∞ 1.6%、10R約1500個+金ドンRUSH 63.8%、2R約300個 34.6%。10R比率合計65.4%。
totalPayoutDistribution: 特図1: 10R約1500個+金ドンRUSH∞0.5%、10R約1500個+金ドンチャレンジ49.5%、7R約1050個通常50%。特図2は1500個65.4% / 300個34.6%。
timeShortening: 金ドンチャレンジ1回。金ドンRUSH 1回+残保留/ファイナルチャレンジ構造。金ドンRUSH∞は時短100回で実質次回大当り濃厚。
cTimeOrSpecialSystems: c時短搭載。RUSH中約1/1.2は大当り+小当り+c時短の合算。
ceilingOrSupport: 遊タイムなし

gameFlow: |
  通常時 1/199.8
   ├─ 50% 7R約1050個 → 通常
   ├─ 49.5% 10R約1500個 → 金ドンチャレンジ（1回、約1/2.2）
   │    ↓ 10R当選 / 実質突破約29.7%
   │   LT「金ドンRUSH∞」
   └─ 0.5% 10R約1500個 → LT「金ドンRUSH∞」直行
        ↓
      金ドンRUSH / ∞（RUSHのみ約83%、TOTAL約88.4%）
        ├─ 1500個 65.4%
        └─ 300個 34.6%
      非継続時 → ファイナルチャレンジ → 10RならLT復帰

notes:
- RUSH突入=LT発動というLT特化設計。
- TOTAL88.4%とRUSH単体約83%は定義が違うため混同しない。
- K-Naviに8/5表記があるが、業界発表・必勝本・一撃・複数資料が8/19で一致するためreleaseDateは2024-08-19を採用。K-Navi日付は競合候補として確認したが多数一次/解析照合で8/19を優先。

sources:
- https://news.p-world.co.jp/articles/27965/yugitsushin — 遊技通信/P-WORLD。型式、1/199.8、50%、TOTAL88.4%、8月導入。取得 2026-09-21。
- https://news.p-world.co.jp/articles/28104/nippon — 遊技日本/P-WORLD。RUSH=LT、基本スペック、約30%、TOTAL88.4%。取得 2026-09-21。
- https://p.hisshobon.jp/machine/4332/1/103095 — 必勝本。2024-08-19、直行0.5%、49.5%、約29.7%、出玉。取得 2026-09-21。
- https://1geki.jp/pachinko/p_drumkindon/39/ — 一撃。2024-08-19、時短/c時短、払出/実獲得区別。取得 2026-09-21。
- https://1geki.jp/pachinko/p_drumkindon/52/ — 一撃。RUSH単体約83%、TOTAL88.4%、期待出玉。取得 2026-09-21。
- https://www.p-world.co.jp/machine/database/10065 — P-WORLD機種DB。特図1経路、65.4%、RUSH∞構造。取得 2026-09-21。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: ltEntryRate total-from-normal direct value UNVERIFIED
conflicts: releaseDate secondary source K-Navi lists 2024-08-05; industry/analysis majority and explicit launch materials support 2024-08-19, so canonical date set to 2024-08-19 with discrepancy noted
