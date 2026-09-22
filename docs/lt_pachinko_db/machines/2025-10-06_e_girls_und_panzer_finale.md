# eガールズ＆パンツァー 最終章

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: eガールズ＆パンツァー 最終章
manufacturer: 平和（製造: アムテックス）
modelCode: eガールズ＆パンツァー3LAH1 / 資料に eガールズ＆パンツァー3 LBH7 表記もあり（型式表記差はnotes参照）
releaseDate: 2025-10-06
modelType: ライトミドル / スマパチ / LT3.0 PLUS
gameType: 一種二種混合 / ST + 残保留 + C時短 / LT型
jackpotProbability: 通常 1/199.8; ST中 1/15.3（大当り1/199.8 + 小当り1/16.5の合算）; 残保留中 1/6.7（大当り1/199.8 + 小当り1/16.5 + C時短1/12.1の合算）
initialPayout: 300個 or 1500個
rushEntryRate: 初当り0.1%でLT直行。59.9%でLTチャレンジ「運命の戦車道」へ。運命の戦車道突破期待度約51%。
rushContinuationRate: 下位継続RUSHはなし。運命の戦車道はST1回+残保留4個のLTチャレンジで突破約51%。
ltName: 戦車道RUSH
ltEntryRoute: 初当り0.1%直行、または初当り59.9% → 運命の戦車道（ST1回+残保留4個）→ 約51%突破 → LT。
ltEntryRate: 直行0.1%; LTチャレンジ入口59.9%; チャレンジ突破約51%。通常遊技全体基準の総LT到達率は直接公表値を今回確認できず、経路値から独自合算しない。
ltContinuationRate: 約80%（ST14回引き戻し約61.2% + 残保留4個引き戻し約47.2%の合算期待）
ltPayoutStructure: ST14回転中 3000個+α（平均4570個）51.0% / 1500個36.9% / 300個12.1%。残保留消化中はC時短「当て勝つ革命」リセット55.8% / 1500個38.1% / 300個6.1%。3000個+αは1500個×2を基礎に上乗せ約50%ループする「無限軌道」。
totalPayoutDistribution: 通常時 1500個+戦車道RUSH0.1% / 300個+運命の戦車道59.9% / 300個+通常40.0%。LT中は上記。
timeShortening: 0 / 1 / 14 / 255回。運命の戦車道=ST1回+残保留4個、戦車道RUSH=ST14回+残保留4個。C時短当選時はST14回へリセット（資料上255回表記も特殊状態に関連）。
cTimeOrSpecialSystems: 残保留ではC時短1/12.1を含めて抽選。C時短当選で「当て勝つ革命」へ移行しSTをリセット。同状態で大当りすれば300個当りを含め「無限軌道」へ昇格する仕様。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時 1/199.8
   ├─ 0.1%: 1500個 → LT「戦車道RUSH」直行
   ├─ 59.9%: 300個 → 「運命の戦車道」ST1回+残保留4個
   │                    ├─ 突破 約51% → LT「戦車道RUSH」
   │                    └─ 失敗 → 通常
   └─ 40.0%: 300個 → 通常
  LT「戦車道RUSH」 ST14回+残保留4個 / 継続約80%
   ├─ ST中大当り: 約51%が「無限軌道」3000個+α（平均4570個）
   └─ 残保留: C時短当選で「当て勝つ革命」→ STリセット → 次回大当りなら無限軌道

notes:
- LT3.0 PLUS対応。LT「戦車道RUSH」は約80%継続。
- 「無限軌道」の3000個+αは単一大当りではなく1500個×2を基礎とする合計払出。αは上乗せ約50%ループ、平均4570個。
- ST中と残保留中は抽選対象が異なる。ST中1/15.3と残保留1/6.7を同一定義として扱わない。
- HAZUSEは型式 `eガールズ＆パンツァー3LAH1`、K-Naviは `eガールズ＆パンツァー3 LBH7` と記載。スペック本体・導入日は一致するが型式文字列は競合候補として原文併記し、数値を平均・統合しない。主要LT性能のCONFLICTではないため status は COMPLETE_CORE。

sources:
- https://amusement-japan.co.jp/article/detail/10004944/ — 業界記事。平和/アムテックス、2025-10-06、LT3.0 PLUS、59.9%入口、突破約51%、直行0.1%、LT約80%、無限軌道を確認。取得日 2026-09-22。confidence INDUSTRY
- https://web-greenbelt.jp/post-104006/ — GreenBelt。通常1/199.8、約60%で運命の戦車道、ST1+残4、突破約51%、LT ST14+残4、約80%、C時短革命を照合。取得日 2026-09-22。confidence INDUSTRY
- https://hazuse.com/hd/5p0311/ — HAZUSE。型式eガールズ＆パンツァー3LAH1、1/199.8、LT搭載、2025-10-06を確認。取得日 2026-09-22。confidence ANALYSIS_HIGH
- https://p-johojima.jp/machine_spec/post-13534/ — 情報島＋。通常/右打ち振り分け、ST14回/残保留の別振り分け、C時短仕様を確認。取得日 2026-09-22。confidence INDUSTRY
- https://chonborista.com/pachinko/heiwa/241809/ — ちょんぼりすた。1/199.8、ST1/15.3、残保1/6.7、59.9%、51%、80%、全振り分けを照合。取得日 2026-09-22。confidence ANALYSIS_HIGH
- https://p-kn.com/pachinko/4382/ — K-Navi。型式表記eガールズ＆パンツァー3 LBH7、特図2小当り1/16.5等を確認。取得日 2026-09-22。confidence ANALYSIS_HIGH

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: [通常遊技全体基準の直接公表LT到達率]
conflicts:
- modelCode: HAZUSE `eガールズ＆パンツァー3LAH1` vs K-Navi `eガールズ＆パンツァー3 LBH7`; LT主要性能には影響せず原文併記。一次資料で型式確定時にQAする。
