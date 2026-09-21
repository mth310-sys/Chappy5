# eルパン三世 ONE COLLECTION 超ブチヌキLTver.

machineName: eルパン三世 ONE COLLECTION 超ブチヌキLTver.
manufacturer: 平和
formalModel: eルパン三世14L9YZ5
releaseDate: 2025-02-03
modelType: スマパチ / ライトミドル
status: COMPLETE_CORE
retrievedAt: 2026-09-21

gameType: 一種二種混合 / 普図ST / RUSH突入＝LT発動
jackpotProbability: 通常時図柄揃い 1/399.7; ルパンチャージ 1/390.0; GOLDEN TIME中 実質約1/90.1
initialPayout: 図柄揃い時 8R約1200個+上乗せ（平均約3700個）約35%; 7R約1050個+LT約17%; 7R約1050個通常約48%。別抽選のルパンチャージは2R。
rushEntryRate: 図柄揃い時 約52%（ST突入＝LT発動）
rushContinuationRate: 下位RUSHなし
ltName: GOLDEN TIME
ltEntryRoute: 図柄揃い8R TREASURE BONUSはLT直行（約35%）。7R BONUS時はRUSH獲得チャレンジ成功でLT（7R当選群の約26%、全図柄揃いの約17%相当）。ルパンチャージ後も一部でGOLDEN TIMEへ移行する解析記載あり。
ltEntryRate: 図柄揃い時 約52%
ltContinuationRate: 約77%（130回ST、右打ち実質約1/90.1）
ltPayoutStructure: ST中大当りはLT継続。約80%が1500個以上＋上乗せで平均約3000個のTREASURE BONUS、約20%が約300個。実質的振り分けは2R+10R+α/10R×2+α等を含む約80%群と2R×2約20%群。
totalPayoutDistribution: 特図1図柄揃い 約35% 8R+α→LT、約17% 7R→LT、約48% 7R→通常。特図2は約80%平均約3000個群、約20%約300個群。
timeShortening: GOLDEN TIME 130回。普図抽選のため残保留なし。
cTimeOrSpecialSystems: ルパンチャージ 1/390.0。上乗せ型TREASURE BONUS搭載。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時
   ├─ 図柄揃い 8R（約35%）→ TREASURE BONUS（平均約3700個）→ LT「GOLDEN TIME」130回
   ├─ 図柄揃い 7R → RUSH獲得チャレンジ
   │    ├─ 成功（全図柄揃いの約17%相当）→ LT「GOLDEN TIME」130回
   │    └─ 失敗（約48%）→ 通常時
   └─ ルパンチャージ → 出玉獲得、一部でGOLDEN TIME
  GOLDEN TIME（約77%継続）
   └─ 大当り → 約80%平均約3000個 / 約20%約300個 → GOLDEN TIME継続
  130回スルー → 通常時

notes: |
  本機は下位RUSHを持たず、ST「GOLDEN TIME」突入そのものがラッキートリガー発動。
  業界資料・必勝本・一撃・DMMで導入日2025-02-03が一致。パチマガスロマガのみ2025-02-06表記のため、複数一致する2025-02-03をcanonical releaseDateとし、日付差異を注記する。
  図柄揃い時LT突入約52%と、8R35%+7R成功17%=52%は整合する。

sources:
- https://news.p-world.co.jp/articles/29647/greenbelt — グリーンべると/P-WORLD業界ニュース。2024-12-03。導入日、図柄揃い/チャージ/右打ち確率、LT突入・継続、主要振り分け。
- https://hisshobon.com/machineinfo/95664/ — パチ&スロ必勝本。基本スペック、LT搭載、130回、遊タイム非搭載。
- https://hisshobon.com/machineinfo/95666/ — パチ&スロ必勝本。LT名称・発動契機・残保留なし。
- https://hisshobon.com/machineinfo/95665/ — パチ&スロ必勝本。特図1/特図2振り分け。
- https://1geki.jp/pachinko/e_lupin_oc_lt/ — 一撃。型式、導入日、確率、LT構造。
- https://p-town.dmm.com/machines/4713 — DMMぱちタウン。導入日、ST突入/継続、出玉構造。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/heiwa_pachi/383/kh01.php — パチマガスロマガ。型式・基本構造。導入日2/6表記差あり。

confidence:
- LT搭載/名称/構造: INDUSTRY + ANALYSIS_HIGH
- 基本確率/突入率/継続率: INDUSTRY + ANALYSIS_HIGH
- 振り分け: INDUSTRY + ANALYSIS_HIGH
- releaseDate: ANALYSIS_HIGH（複数一致。単独2/6表記あり）

missingFields: []
conflicts: []
sourceNotes:
- releaseDateについて単独資料に2025-02-06表記があるが、業界一次記事と複数解析資料が2025-02-03で一致するためcanonicalは2025-02-03。数値平均等は行っていない。
