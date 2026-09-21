# P緋弾のアリア～緋緋神降臨～88Ver.

machineName: P緋弾のアリア～緋緋神降臨～88Ver.
manufacturer: 藤商事
formalModel: P緋弾のアリア～緋緋神降臨～88Ver.FVA
releaseDate: 2025-06-02
modelType: 甘デジ / 約1/88.2
gameType: 1種2種混合 / 普図抽選 / c時短搭載 / 強襲任務→LBR→LT昇格型
jackpotProbability: 通常時 約1/88.2（特図1大当り1/129.7 + 特図1 c時短1/275.3の合算） / 強襲任務中 1/129.9（電チューロング開放） / LBR・超LBR中 1/67.8（電チューロング開放）
initialPayout: 特図1図柄揃いは3R約300個。通常時の約32.0%はc時短で出玉なし。
rushEntryRate: 強襲任務以上への突入率100%（LBR直行を含む）。LBR直行は通常時約0.7%。強襲任務の当選期待度は約32%。
rushContinuationRate: LBR（LIGHTNING BULLET RUSH）約70%。抽選80回、当選確率1/67.8。
ltName: 超LBR（超LIGHTNING BULLET RUSH / 超ライトニングバレットラッシュ）
ltEntryRoute: 強襲任務またはLBR中の右打ち当選の約12.7%で10R約1000個+超LBR（LT）へ。LT発動時は突入初回が実質次回大当り濃厚と解析資料に記載。
ltEntryRate: 強襲任務・LBR中の右打ち当選時 約12.7%。通常初当り全体を分母とする総LT到達率の直接公表値は確認できず、経路確率から独自合算しない。
ltContinuationRate: 約93%。超LBRは抽選175回、当選確率1/67.8。
ltPayoutStructure: 超LBR中は10R約1000個+超LBR継続 約33.6% / 3R約300個+超LBR継続 約66.4%。いずれもV入賞が条件。
totalPayoutDistribution: |
  通常時: 3R約300個+LBR(80回) 約0.7% / 3R約300個+強襲任務(50回) 約67.3% / c時短+強襲任務 約32.0%。
  強襲任務・LBR中: 10R約1000個+超LBR 約12.7% / 10R約1000個+LBR 約20.9% / 3R約300個+LBR 約66.4%。
  超LBR中: 10R約1000個+超LBR 約33.6% / 3R約300個+超LBR 約66.4%。
timeShortening: 強襲任務50回 / LBR80回 / 超LBR175回（普図変動回数）。
cTimeOrSpecialSystems: 特図1 c時短搭載。通常時約1/88.2は特図1大当り1/129.7とc時短1/275.3の合算値。c時短当選時は出玉なしで強襲任務へ。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時（合算 約1/88.2）
   ├─ 約0.7% → 3R約300個 → LBR（80回、継続約70%）
   ├─ 約67.3% → 3R約300個 → 強襲任務（50回、当選期待度約32%）
   └─ 約32.0% → c時短（出玉なし） → 強襲任務
  強襲任務
   ├─ 当選の約12.7% → 10R約1000個 → 超LBR（LT、175回、約93%）
   ├─ 約20.9% → 10R約1000個 → LBR
   └─ 約66.4% → 3R約300個 → LBR
  LBR（約70%）
   ├─ 当選の約12.7% → 10R約1000個 → 超LBR（LT）
   └─ その他 → LBR継続
  超LBR（LT、約93%）
   ├─ 約33.6% → 10R約1000個 → LT継続
   └─ 約66.4% → 3R約300個 → LT継続
notes: |
  業界一次系（遊技通信、遊技日本）とHAZUSE、必勝本、一撃、パチビーを横断照合。
  通常時1/88.2は図柄揃い単独確率ではなく、特図1大当り1/129.7とc時短1/275.3の合算。定義を分離して保存。
  「強襲任務突入率100%」はLBR直行約0.7%を含むメーカー/業界上の定義であり、LBR突入率100%ではない。
  右打ち約33.6%の1000個比率は、強襲任務/LBRではLT12.7%+LBR20.9%=33.6%。LT中も1000個33.6%だが、状態移行先が異なるため混同しない。
  通常初当り基準の総LT到達率は直接値未確認のためUNVERIFIED_AFTER_RESEARCH。独自計算しない。
sources:
  - https://news.p-world.co.jp/articles/30808/yugitsushin — 遊技通信 / 型式、確率、強襲任務、LBR、LT超LBR、継続率、1000個比率、導入日（取得 2026-09-22）
  - https://yugi-nippon.com/pachinko-new-machine/post-70530/ — 遊技日本 / 強襲任務・LBR・超LBRの抽選回数、主要振り分け、LT構造、導入日（取得 2026-09-22）
  - https://hazuse.com/machine/pachinko/4P1104/ — HAZUSE / 型式、導入日、甘デジLT、確率、継続率（取得 2026-09-22）
  - https://hazuse.com/machine/pachinko/4P1104/genre/103/ — HAZUSE / 通常0.7% LBR直行、強襲任務、右打ちLT約12.7%、ゲームフロー（取得 2026-09-22）
  - https://hisshobon.com/machineinfo/97698/ — 必勝本 / 1種2種、確率、抽選回数、継続率、払出、LT搭載、遊タイム非搭載（取得 2026-09-22）
  - https://p.hisshobon.jp/machine/4536/1/109621 — 必勝本 / 通常時・強襲任務/LBR中・超LBR中の詳細振り分け（取得 2026-09-22）
  - https://1geki.jp/pachinko/p_hidannoaria_lt88/ — 一撃 / 型式、導入日、LT搭載、基本スペック（取得 2026-09-22）
  - https://www.pachibee.jp/machines/index/125050009 — パチビー / 合算確率定義、時短50/80/175、LT搭載（取得 2026-09-22）
confidence: INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields:
  - 通常初当り全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（直接公表値未確認）
conflicts: []
retrievedAt: 2026-09-22
