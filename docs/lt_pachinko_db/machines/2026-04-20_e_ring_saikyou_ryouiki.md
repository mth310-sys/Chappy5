# eリング 最恐領域

status: COMPLETE_CORE
retrievedAt: 2026-09-24

machineName: eリング 最恐領域
manufacturer: オレンジ（藤商事グループ）
formalModel: eリング最恐領域RHA
inspectionNumber: 5P1458
releaseDate: 2026-04-20
modelType: スマパチ / ミドル相当

gameType: 一種二種混合 / LT3.0プラス / 二段階ST
jackpotProbability: 通常時図柄揃い 約1/399。チャージ約1/2723。チャージ込み大当り確率 1/348。
initialPayout: 図柄揃い時 1500個。チャージ 300個。
rushEntryRate: 約57%（図柄揃い時。チャージ後の手役物落下からRUSHへ繋がる経路も公開資料に記載）
rushContinuationRate: 下位RUSHなし。RUSH自体がLT「最恐領域」。トータル継続率 約70%（前半成功期待度＋後半当選期待度の合算）。
ltName: 最恐領域
ltEntryRoute: 通常時図柄揃い→約57%でLT「最恐領域」へ直行。3・7図柄揃いは直行。それ以外は貞子覚醒BURSTチャレンジ成功から突入。チャージ図柄停止直後の手役物落下からRUSHへ繋がるパターンも存在。
ltEntryRate: 図柄揃い時 約57%。通常時全抽選を分母にした総LT到達率は直接公表値を確認できないため推測しない。
ltContinuationRate: 約70% TOTAL。前半「貞子覚醒BURST」5回転 約1/8、後半「呪いの連鎖」70回転 約1/129。
ltPayoutStructure: 前半5回転で大当り時 6000個 50% / 3000個 50%。3000個=特図2大当り2回分、6000個=特図2大当り4回分の合計値。後半70回転で大当り時 ALL1500個。
totalPayoutDistribution: 通常図柄揃いは1500個。チャージは300個。LT前半当選は3000個/6000個 1:1、LT後半当選は1500個100%。
timeShortening: LT前半5回転 + 後半70回転。通常の下位時短/RUSH段階はなし。
cTimeOrSpecialSystems: 貞子チャージ約1/2723。チャージ後の手役物落下からLTへ繋がるパターンあり。LT3.0プラス対応。
ceilingOrSupport: 公開確認資料で遊タイム等のLT到達用天井は確認せず。

gameFlow: |
  通常時
   ├─ 図柄揃い 約1/399 → 1500個
   │    ├─ 約57% → LT「最恐領域」
   │    └─ 非突入 → 通常時
   └─ 貞子チャージ 約1/2723 → 300個
        └─ 手役物落下時はLTへ繋がるパターンあり

  LT「最恐領域」
   ├─ 前半「貞子覚醒BURST」5回 / 約1/8
   │    └─ 当選 → 3000個 50% / 6000個 50% → LT再セット
   └─ 前半非当選 → 後半「呪いの連鎖」70回 / 約1/129
        ├─ 当選 → 1500個 → LT再セット
        └─ 非当選 → 終了

notes:
- 「最恐領域」は下位RUSHから昇格する上位状態ではなく、初当りから直接入るLT/RUSHそのもの。
- 約70%は前半5回と後半70回を合わせたTOTAL継続率。前半だけの継続率として扱わない。
- 3000個/6000個は複数回大当りの合計値であり、単一大当り出玉ではない。
- 通常時図柄揃い約1/399、チャージ約1/2723、合算1/348は定義を分離する。
- 製造元はオレンジ。藤商事発表/藤商事グループ機として報道されるためメーカー表記を混同しない。

sources:
- https://www.youtube.com/watch?v=u2JnQ4M9SVQ — 藤商事公式PV。2026-04-20導入を確認。retrieved 2026-09-24
- https://yugi-nippon.com/pachinko-new-machine/post-75948/ — 遊技日本。藤商事発表、製造元オレンジ、型式名、LT3.0プラス、二段階STを確認。retrieved 2026-09-24
- https://web-greenbelt.jp/post-110379/ — グリーンべると。LT「最恐領域」、前半5回約1/8、3000/6000個 1:1を照合。retrieved 2026-09-24
- https://1geki.jp/pachinko/e_ring_saikyou/ — 一撃。型式、検定番号、確率、LT突入率、ST回数、継続率、複数大当り合計表記を確認。retrieved 2026-09-24
- https://pachimaga.com/free/mach/maker-p/orange/064969.php — パチマガスロマガFREE。図柄揃い/チャージ/合算、57%、前後半確率、出玉、ゲームフローを照合。retrieved 2026-09-24
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/orange_pachi/006/kh01.php — CS-plaza。型式、導入日、LT搭載、57%、チャージを照合。retrieved 2026-09-24

confidence: ANALYSIS_HIGH
missingFields:
- 通常時全抽選を分母にした総LT到達率の直接公表値は未確認。経路別公開値のみ保存。
conflicts: none
