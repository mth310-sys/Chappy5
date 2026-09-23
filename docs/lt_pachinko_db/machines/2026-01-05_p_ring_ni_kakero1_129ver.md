# Pリングにかけろ1 129ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: Pリングにかけろ1 129ver.
manufacturer: ニューギン
modelName: Pリングにかけろ1LM
releaseDate: 2026-01-05
modelType: ライトミドル / P機 / LT

gameType: 1種2種混合 / 下位ST突破 → LT ST / C時短を含むリンかけCHANCE

jackpotProbability:
- 通常時: 1/129.77
- K.O.RUSH中: 1/129.77
- 超K.O.RUSH中: 1/89.79
- リンかけCHANCE中: 1/36.16（C時短/STリセットを含む当選確率として扱う）

initialPayout:
- 10R 1200個＋K.O.RUSH: 5%。
- 6R 720個＋K.O.RUSH: 45%。
- 6R 720個＋通常: 50%。
- いずれも払い出し個数。

rushEntryRate:
- K.O.RUSH突入率: 50%。

rushContinuationRate:
- K.O.RUSH: 約40.5% TOTAL。
- 内訳定義: ST49回の継続率約31.6%と、ラスト1回＋残保留4個「リンかけCHANCE」の引き戻し率約13.1%の合算。

ltName: 超K.O.RUSH

ltEntryRoute:
- 初当り50%でK.O.RUSHへ。
- K.O.RUSH中に大当りまたはST回数リセットへ当選するとLT「超K.O.RUSH」へ昇格。
- K.O.RUSH終了後のリンかけCHANCE（最終1回＋残保留4個）で大当り/STリセットに当選した場合も超K.O.RUSHへ。

ltEntryRate:
- K.O.RUSH突破率: 約40.5%（上記TOTAL定義）。
- 通常遊技全体を分母とする総LT到達率/確率は、今回確認した一次・高信頼解析資料に直接公表値を確認できないため推測しない。

ltContinuationRate:
- 超K.O.RUSH: 約79.5% TOTAL。
- 内訳定義: ST129回の継続率約76.4%と、ラスト1回＋残保留4個の引き戻し率約13.1%の合算。

ltPayoutStructure:
- 超K.O.RUSH中: 10R×2 2400個＋LT 54.5% / 10R 1200個＋LT 19.5% / 4R 480個＋LT 5.5% / ST回数リセット0R＋LT 20.5%。
- 2400個は1200個×2回の合計であり、単一10R出玉ではない。
- リンかけCHANCE中: 10R1200個＋LT 89.5% / 4R480個＋LT 2.2% / ST回数リセット0R＋LT 8.3%。

totalPayoutDistribution:
- 特図1: 1200個＋K.O.RUSH 5% / 720個＋K.O.RUSH 45% / 720個＋通常 50%。
- K.O.RUSH中: 1200個＋LT 70.4% / 0R STリセット＋LT 29.6%。
- 超K.O.RUSH中: 2400個＋LT 54.5% / 1200個＋LT 19.5% / 480個＋LT 5.5% / 0R STリセット＋LT 20.5%。
- リンかけCHANCE中: 1200個＋LT 89.5% / 480個＋LT 2.2% / 0R STリセット＋LT 8.3%。

timeShortening:
- K.O.RUSH: ST49回＋リンかけCHANCE（最終1回＋残保留4個）。
- 超K.O.RUSH: ST129回＋リンかけCHANCE（最終1回＋残保留4個）。

cTimeOrSpecialSystems:
- リンかけCHANCEはRUSH最終変動1回＋残保留4個の計5回で、C時短/STリセットを含む当選確率が1/36.16まで上昇する特殊区間。

ceilingOrSupport:
- 遊タイム: 非搭載。
- コンプリート機能: 搭載。

gameFlow: |
  通常時 1/129.77
   ↓ 初当り
   ├─ 50% → K.O.RUSH（ST49回＋リンかけCHANCE）/ TOTAL約40.5%
   │          ↓ 大当り or ST回数リセット
   │        LT「超K.O.RUSH」（ST129回＋リンかけCHANCE）/ TOTAL約79.5%
   │          ↓ LT中当選
   │        2400個54.5% / 1200個19.5% / 480個5.5% / 0Rリセット20.5% → LT継続
   └─ 50% → 通常へ
  (超)K.O.RUSHの最終1回＋残保留4個
   ↓ リンかけCHANCE 約1/36.16 / 成功約13.1%
  当選 → 超K.O.RUSH

notes:
- 2025年3月導入の兄弟機「Pリングにかけろ1」と混同しない。129ver.は型式Pリングにかけろ1LM、通常1/129.77、RUSH50%。
- 業界一次資料（遊技通信/グリーンべると）がLT搭載、K.O.RUSH1回当選から超K.O.RUSH、約40.5%→約79.5%を確認。HAZUSE/P-WORLD/必勝本/一撃で詳細振り分けを照合。
- 業界記事の「LT突入時2400発割合約55%」は詳細54.5%の丸め表現として扱い競合にしない。

sources:
- https://news.p-world.co.jp/articles/32525/yugitsushin — 遊技通信。型式、1/129.77、RUSH50%、40.5%、LT79.5%、リンかけCHANCE1/36.16、K.O.RUSH当選→LT。取得日 2026-09-23。
- https://news.p-world.co.jp/articles/32510/greenbelt — グリーンべると。ニューギン発表、LT搭載、一種二種、1/129.77、RUSH50%。取得日 2026-09-23。
- https://hazuse.com/machine/pachinko/5P0704/ — HAZUSE。型式Pリングにかけろ1LM、検定5P0704、導入2026-01-05、確率/ST/継続定義。取得日 2026-09-23。
- https://www.p-world.co.jp/machine/database/10406 — P-WORLD。特図1/特図2の詳細振り分け、2400=1200×2、STリセットを含むLT経路。取得日 2026-09-23。
- https://p.hisshobon.jp/machine/4669/1/113026 — 必勝本。1種2種、各確率、49/129回＋CHANCE、遊タイム非搭載、LT搭載。取得日 2026-09-23。
- https://1geki.jp/pachinko/p_rinkake1_129ver/51/ — 一撃。K.O.RUSH/リンかけCHANCE構造と突破率。取得日 2026-09-23。

confidence:
- LT搭載/型式/導入日/基本確率/下位RUSH/LT名称・経路・継続/主要振り分け: INDUSTRY + ANALYSIS_HIGH

missingFields:
- 通常遊技全体基準の総LT到達率/確率: UNVERIFIED_AFTER_RESEARCH（独自算出しない）

conflicts: []
