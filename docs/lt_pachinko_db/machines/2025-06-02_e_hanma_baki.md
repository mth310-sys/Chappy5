# e範馬刃牙

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e範馬刃牙
manufacturer: アムテックス（平和）
releaseDate: 2025-06-02
modelType: ライトミドル / スマパチ
gameType: 1種2種混合 / LT直結型
jackpotProbability: BONUS 1/499.9（バキチャージ・バトルMODE直通を除く）; バキチャージ1/333.3; 実質大当り約1/199.8; LT中1/1.25
initialPayout: BONUSは約1500個または約3000個（1500個×2）; バキチャージ約300個（払出）
rushEntryRate: 独立した通常RUSHなし。BONUS当選時約50%でLT「バトルMODE」へ突入。
rushContinuationRate: 通常RUSHなし
ltName: バトルMODE
ltEntryRoute: BONUS後のバトルMODE突入ジャッジ勝利で約3000個（1500個×2）+LT。バキチャージ昇格時などにもLT突入経路あり。
ltEntryRate: BONUS当選時約50%。通常時全当選（BONUS/バキチャージ等）を分母とする総LT到達率は直接公表値を十分な横断後も確定できず UNVERIFIED_AFTER_RESEARCH。経路確率から独自合算しない。
ltContinuationRate: 約80%（LT中当選1/1.25、抽選1回）
ltPayoutStructure: LT中 約80%が約3000個（1500個×2）+LT継続、約20%が約1500個+LT継続。右打ち大当り後は再度1回抽選。
totalPayoutDistribution: 通常BONUS 約50% 約3000個+LT / 約50% 約1500個+通常。バキチャージ約300個。LT中 約80% 約3000個+LT / 約20% 約1500個+LT。
timeShortening: LT「バトルMODE」1回
cTimeOrSpecialSystems: バキチャージ1/333.3。BONUS確率1/499.9はバキチャージ・バトルMODE直通を除く定義。実質大当り約1/199.8との定義差を分離。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時
   ├─ BONUS 約1/499.9
   │   ↓ バトルMODE突入ジャッジ
   │   ├─ 約50% 勝利 → 約3000個 → LT「バトルMODE」
   │   └─ 約50% → 約1500個 → 通常時
   └─ バキチャージ 約1/333.3
       └─ 約300個（昇格時などLT経路あり）
  LT「バトルMODE」
   ↓ 1/1.25を1回抽選 / 継続約80%
  当選時 約80% 約3000個 / 約20% 約1500個 → LT継続
  非当選 → 終了
notes: |
  2026-01-19導入の「e範馬刃牙 199ver.」とは別スペック。2025-06-02版の型式は eバキ2XAM2。BONUS 1/499.9、バキチャージ1/333.3、実質大当り約1/199.8は同じ分母定義ではないため混同しない。通常RUSHを経由せず、BONUSから直接LTへ入る構造。払出約1500個に対し実獲得目安約1400個、バキチャージ払出約300個に対し実獲得目安約280個という資料もあり、払出/実獲得を定義分離する。
sources:
  - url: https://www.heiwanet.co.jp/products/pachinko/p-bk2/
    sourceType: manufacturer-official
    retrievedAt: 2026-09-22
    confirms: e範馬刃牙公式機種ページ、LT「バトルMODE」系統
  - url: https://news.p-world.co.jp/articles/30676/greenbelt
    sourceType: industry
    retrievedAt: 2026-09-22
    confirms: LT搭載、BONUS1/499.9、バキチャージ1/333.3、LT突入約50%、LT約80%、通常/右打ち3000・1500個振り分け
  - url: https://www.p-world.co.jp/machine/database/10260
    sourceType: industry/database
    retrievedAt: 2026-09-22
    confirms: LT「バトルMODE」、BONUS約1/499.9、実質約1/199.8、LT約80%、右打ち約80%で3000個
  - url: https://1geki.jp/pachinko/e_hanmabaki/
    sourceType: analysis
    retrievedAt: 2026-09-22
    confirms: 型式eバキ2XAM2、導入日、1種2種混合/LT、1/499.9・1/333.3・1/1.25、LT50%/約80%、払出/実獲得定義
  - url: https://1geki.jp/pachinko/e_hanmabaki/51/
    sourceType: analysis
    retrievedAt: 2026-09-22
    confirms: バトルMODEは1回抽選、1/1.25、継続約80%、BONUS勝利後またはバキチャージ昇格時等のLT経路
  - url: https://hazuse.com/hd/410948-2/
    sourceType: industry/database
    retrievedAt: 2026-09-22
    confirms: 型式eバキ2XAM2、LT搭載、導入2025-06-02、公式サイト紐付け
confidence: ANALYSIS_HIGH
missingFields:
  - 通常時全当選を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH
  - バキチャージからLTへ昇格する具体割合: UNVERIFIED_AFTER_RESEARCH
conflicts: []
