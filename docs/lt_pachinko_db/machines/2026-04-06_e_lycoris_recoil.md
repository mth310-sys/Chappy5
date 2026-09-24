# eリコリス・リコイル

status: COMPLETE_CORE
retrievedAt: 2026-09-24

machineName: eリコリス・リコイル
formalModelName: eリコリス・リコイルM3
inspectionNumber: 510852
manufacturer: ニューギン
releaseDate: 2026-04-06
modelType: ライトミドル / スマパチ / LT搭載
gameType: 一種二種混合 / 普電ST（LT直行型）
jackpotProbability: 通常時 約1/259.7 / RUSH中 約1/97.1（電チューロング開放確率）
initialPayout: 310個 / 600個 / 1500個（払出）
rushEntryRate: 50%（本機ではRUSH自体がLT）
rushContinuationRate: 約75%
ltName: SPECIAL LycoReco RUSH HYPER DELUXE
ltEntryRoute: 通常初当りから直行。図柄揃い時は約60%、チンアナゴBONUS時は20%でLT。全初当りTOTAL 50%。
ltEntryRate: 50%（初当りTOTAL、直接公表値）
ltContinuationRate: 約75%（132回）
ltPayoutStructure: LT内部モードAでは大当り750個。LT突入時約30%でモードBスタート、モードA大当り時50%でモードBへ移行。モードB大当りは3000個50% / 6000個+ULTIMATE DRIVE 50%。ULTIMATE DRIVEは3000個上乗せが50%でループし、終了後LTへ復帰。3000個=750個×4回、6000個=750個×8回の合計表現。
totalPayoutDistribution: 通常時310個/600個/1500個。RUSH中750個/3000個/6000個以上。詳細な通常初当り各割合は主要照合資料で一貫した直接表を確保できた範囲のみ採用し、推測しない。
timeShortening: LT 132回（普図変動回数）。大当り後0回 / 132回 / ULTIMATE DRIVE等で実質次回までの区分あり。
cTimeOrSpecialSystems: ULTIMATE DRIVE — モードB大当りの50%で6000個獲得後、3000個上乗せが50%ループ。これはLTとは別のLT内出玉トリガーで、終了後SPECIAL LycoReco RUSH HYPER DELUXEへ戻る。
ceilingOrSupport: 遊タイム非搭載。普電STのため132回スルー後の残保留抽選なし。
gameFlow: |
  通常時（約1/259.7）
   ↓ 初当り
  LT非突入（50%）→通常時
  または
  SPECIAL LycoReco RUSH HYPER DELUXE（LT、50%）
   ↓ 132回 / 約1/97.1 / 継続約75%
  モードA ↔ モードB
   ├ モードA大当り: 750個、50%でモードBへ
   └ モードB大当り: 3000個50% / 6000個+ULTIMATE DRIVE 50%
        ↓ ULTIMATE DRIVE
       3000個上乗せ50%ループ
        ↓ 終了後LTへ復帰
  LT132回スルー → 通常時
notes: |
  下位RUSHを経由しない直LT型で、RUSH=LT。図柄揃い時約60%・チンアナゴBONUS時20%という入口別割合と、全初当りTOTAL 50%を分離して保存する。
  LT内部にはモードA/Bがあり、モードBは別LTではなく同一LT内の出玉モード。ULTIMATE DRIVEもLTそのものではなくLT内の上乗せ出玉トリガー。
  3000個/6000個は単一大当りのラウンド出玉ではなく750個大当り複数回の合計表現。
  型式eリコリス・リコイルM3および検定番号510852を別資料で確認。
sources:
  - url: https://news.p-world.co.jp/articles/33154/yugitsushin
    role: INDUSTRY / ニューギン販売発表、型式、確率、RUSH、ULTIMATE DRIVE
    retrievedAt: 2026-09-24
  - url: https://news.p-world.co.jp/articles/33112/greenbelt
    role: INDUSTRY / 導入日、LT名称、ULTIMATE DRIVE
    retrievedAt: 2026-09-24
  - url: https://www.pachibee.jp/machines/index/126030001
    role: ANALYSIS_HIGH / 基本スペック、入口別LT率、出玉、時短
    retrievedAt: 2026-09-24
  - url: https://hisshobon.com/machineinfo/101628/
    role: ANALYSIS_HIGH / LT正式名称、発動契機、普電ST、残保留なし
    retrievedAt: 2026-09-24
  - url: https://hazuse.com/machine/pachinko/PX0349/
    role: ANALYSIS_HIGH / 型式・検定番号、LTモード構造、出玉合計表現、ゲームフロー
    retrievedAt: 2026-09-24
  - url: https://yugi-nippon.com/pachinko-new-machine/post-74436/
    role: INDUSTRY / 型式検定通過照合
    retrievedAt: 2026-09-24
confidence: INDUSTRY / ANALYSIS_HIGH cross-check
missingFields: []
conflicts: []
