# PシャカラッシュZ

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: PシャカラッシュZ
formalModel: PシャカRUSH Z1
manufacturer: マルホン工業
releaseDate: 2024-12-02
modelType: ライトミドル / LT
gameType: 一種二種混合 / ST型RUSH + ラッキートリガー
jackpotProbability: 通常時 1/197.4 / 右打ち中実質 1/67.0
initialPayout: 9R 約1018個 / 6R 約682個 / 2R 約234個（払出）
rushEntryRate: 100%（うち初当り3%はLTへ直行）
rushContinuationRate: シャカRUSH 約70%
ltName: Z超RUSH
ltEntryRoute: 通常時初当り9Rの3%で直行。またはシャカRUSH中9R大当り6%で発動。
ltEntryRate: 初当り時3%直行 / シャカRUSH中大当り時6%。通常初当り基準の総LT到達率は確認資料に直接値なしのため推測しない。
ltContinuationRate: 約93.5%
ltPayoutStructure: Z超RUSH中は9R約1018個 6% + ST3000、6R約682個 46% + ST3000、2R約234個 13% + ST3000、6R約682個 28% + ST108、2R約234個 7% + ST108。ST3000側は合計65%で実質次回大当り濃厚の「∞インフィニティBONUS」。いずれも払出表記。
totalPayoutDistribution: 特図1=9R約1018個+Z超RUSH 3% / 6R約682個+シャカRUSH 27% / 2R約234個+シャカRUSH 70%。シャカRUSH中特図2=9R約1018個+Z超RUSH 6% / 6R約682個+シャカRUSH 74% / 2R約234個+シャカRUSH 20%。
timeShortening: シャカRUSH ST76回。Z超RUSH ST108回または3000回。解析資料では残保留4回を含む算出記載あり。
cTimeOrSpecialSystems: Z超RUSH中大当りの65%がST3000回となる∞インフィニティBONUS。コンプリート機能搭載。
ceilingOrSupport: 遊タイムの確認なし。
gameFlow: |
  通常時 1/197.4
   ↓ 初当り（RUSH突入100%）
   ├─ 9R 3% → LT発動 → Z超RUSH（ST3000 / 約93.5%）
   └─ 6R 27% / 2R 70% → シャカRUSH（ST76 / 約70%）
        ↓ 大当り
        ├─ 9R 6% → LT発動 → Z超RUSH
        └─ 6R 74% / 2R 20% → シャカRUSH継続
  Z超RUSH
   ↓ 大当り
   ├─ 65% → ∞インフィニティBONUS（ST3000、実質次回まで）
   └─ 35% → ST108
   ↓
  TOTAL継続 約93.5%
notes: |
  型式名・検定番号4P0881・導入日2024-12-02をP-WORLDと解析資料で照合。
  2026年6月導入の甘デジ「PシャカRUSH Z Jr. / PシャカRUSH ZA」（1/98.7、LT2%）とは別スペックであり混同しない。
  P-WORLDの大当り割合とパチンコスペック解析の二種振分は、シャカRUSH中9R 6%、LT中ST3000合計65%などで整合する。
  1gekiの現行ページでも通常1/197.4、右1/67.0、RUSH100%、下位約70%、LT約93.5%、76/108/3000回を照合。
  通常初当り基準の総LT到達率は経路値から計算せずUNVERIFIEDのまま扱う。
sources:
  - url: https://www.p-world.co.jp/machine/database/10131
    role: 型式・導入日・基本スペック・全主要振分・LT経路
    confidence: ANALYSIS_HIGH
  - url: https://1geki.jp/pachinko/p_shakarushz/
    role: 導入日・型式・基本スペック・LT搭載確認
    confidence: ANALYSIS_HIGH
  - url: https://1geki.jp/pachinko/p_shakarushz/51/
    role: シャカRUSH ST76・約70%・9R LT経路
    confidence: ANALYSIS_HIGH
  - url: https://1geki.jp/pachinko/p_shakarushz/52/
    role: Z超RUSH ST108・約93.5%・∞BONUS 65%
    confidence: ANALYSIS_HIGH
  - url: https://pachinko-spec.info/spec-detail/147664/
    role: 型式・一種二種構造・右打ち確率/振分/残保留定義の照合
    confidence: ANALYSIS_HIGH
confidence: ANALYSIS_HIGH
missingFields:
  - 通常初当り基準の総LT到達率（直接公表値を未確認）
conflicts: []
