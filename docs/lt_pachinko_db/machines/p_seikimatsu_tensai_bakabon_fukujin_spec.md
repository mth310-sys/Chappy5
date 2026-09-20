# P世紀末・天才バカボン～福神SPEC～

収集日: 2026-09-21
status: COMPLETE_CORE

machineName: P世紀末・天才バカボン～福神SPEC～
manufacturer: D-light（ディ・ライト／大一販売）
releaseDate: 2024-03-04
modelType: ライト（通常時大当り約1/129.99）
gameType: 2種時短 / 2段階ST型LT
jackpotProbability:
- 通常時: 約1/129.99
- 右打ち中: 約1/43.86
initialPayout:
- 通常時初当り: 3R 300個（払出）
rushEntryRate: 72%
rushContinuationRate:
- 神RUSH: ST31回＋残保留4個、約55%
ltName: 極神RUSH
ltEntryRoute:
- 神RUSH中の大当りの15%で10R＋超特訓を経由し、極神RUSHへ突入
ltEntryRate:
- 神RUSH中大当り時: 15%
- 通常時初当りを分母にした単一LT到達率は公表値を確認できず、推算しない
ltContinuationRate: 約91%
ltPayoutStructure:
- 極神RUSH中: 10R 1000個（払出）＋極神RUSH継続 100%
- ST100回＋残保留4個、継続約91%
totalPayoutDistribution:
- 特図1: 3R 300個＋神RUSH 72% / 3R 300個＋通常 28%
- 特図2（神RUSH中）: 10R 1000個＋超特訓＋極神RUSH 15% / 10R 1000個＋神RUSH 85%
- 特図2（極神RUSH中）: 10R 1000個＋極神RUSH 100%
timeShortening:
- 神RUSH: 電サポ31回＋残保留4個
- 極神RUSH: 電サポ100回＋残保留4個
- 超特訓: 電サポ1031回＋残保留4個（次回大当り濃厚相当の中継状態）
- 電サポ: 0 / 31 / 100 / 1031回＋残保留4個
cTimeOrSpecialSystems: ラッキートリガー搭載。神RUSH中15%の虹7系大当りで発動し、超特訓経由で極神RUSHへ。
ceilingOrSupport: 遊タイムなし
gameFlow:
```
通常時（約1/129.99）
 ↓ 初当り 3R 300個
├─ 28% → 通常へ
└─ 72% → 神RUSH（ST31回＋残保留4、継続約55%）
             ↓ 大当り
       ├─ 85% → 10R 1000個＋神RUSH継続
       └─ 15% → 10R 1000個＋超特訓（1031回＋残保留4）
                    ↓
                 LT発動
                    ↓
              極神RUSH
        （ST100回＋残保留4、継続約91%）
                    ↓
       大当りは10R 1000個＋極神RUSH継続
```

notes:
- 型式名: P天才バカボン7～福神スペック～LTH-JH。
- D-light初のラッキートリガー搭載機として業界発表で確認。
- 出玉はすべて払出個数として記録。10R=1000個、3R=300個。
- 極神RUSHは下位RUSHへ通常転落しない設計だが、ST最終変動・残保留での大当りは神RUSH復帰扱いとの注記があるため、単純な「常時100%上位維持」と解釈しない。
- 一部資料で「甘デジ」と表現されるが、大当り約1/129.99のため本DBではライトとして記録。

sources:
- https://daiichi777.jp/product/detail/218/bakabon7_lt — Daiichi公式製品ページ（取得 2026-09-21）
- https://news.p-world.co.jp/articles/26829/yugitsushin — 遊技通信 / P-WORLD業界ニュース（2024-02-06、取得 2026-09-21）
- https://news.p-world.co.jp/articles/26816/greenbelt — グリーンべると / P-WORLD業界ニュース（2024-02-06、取得 2026-09-21）
- https://news.p-world.co.jp/articles/26941/nippon — 遊技日本 / P-WORLD業界ニュース（2024-02-19、取得 2026-09-21）
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/d-light_pachi/023/kh02.php — パチマガスロマガ詳細スペック（取得 2026-09-21）
- https://p-kn.com/pachinko/4105/ — K-Navi（取得 2026-09-21）
- https://www.pachibee.jp/machines/about/124020005 — パチビー（取得 2026-09-21）

confidence:
- LT搭載: OFFICIAL（メーカー公式製品ページでLT機として確認）
- 基本確率/RUSH構造: INDUSTRY（複数業界資料一致）
- 振り分け/ST回数/出玉: ANALYSIS_HIGH（複数資料一致）
- 導入日: ANALYSIS_HIGH（複数資料一致）

missingFields:
- 通常時初当りを分母にした単一公表LT到達率

conflicts:
- なし。資料間の1/129.9・1/129.99、1/43.8・1/43.86は丸め表記差として原精度側を採用。
