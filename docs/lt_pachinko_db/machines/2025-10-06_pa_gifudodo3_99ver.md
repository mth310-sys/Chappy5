# PA義風堂々!!～兼続と慶次～3 99ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: PA義風堂々!!～兼続と慶次～3 99ver.
manufacturer: ニューギン
releaseDate: 2025-10-06
modelType: 甘デジ / 約1/99

gameType: 1種2種混合 / 突破型時短 + ショートRUSH + LTループ型
jackpotProbability: 通常時 実質1/99.90 / 右打ち中 実質1/7.73
initialPayout: 10R 約920個 1% / 4R 約340個 99%（その他入賞口を含む払出表記）
rushEntryRate: TOTAL 50.5%。通常初当り1%は次回大当り濃厚+天衣無縫RUSH、99%はチャンスタイム1回+残保留4個。50.5%は直行1%+時短1回継続率12.93%+残保留4回継続率42.52%の合算表記。
rushContinuationRate: 天衣無縫RUSH 約75%（時短6回56.42% + 残保留4個42.52%の合算期待値）

ltName: 天下無双モード
ltEntryRoute: 通常時10Rの1%は天衣無縫RUSH直行（LT直行ではない）。チャンスタイム/天衣無縫RUSH中の特図2大当りの1%（10R-A）で天下無双モードへ。LT終了後の残保留4個で当選した場合は特図2通常RUSH側振り分けとなり、1%なら天下無双モードへ復帰、残りは天衣無縫RUSHへ。
ltEntryRate: 右打ち中（チャンスタイム/天衣無縫RUSH/残保留）大当りの1%。通常遊技全体基準の総LT到達率は直接公表値を確認できないため UNVERIFIED_AFTER_RESEARCH。経路確率から独自合算しない。
ltContinuationRate: 94%。時短500回+残保留4個。LT本体は特図2大当りの94%（10R 50% + 4R-A 44%）で時短500回へ復帰し、4R-B 6%で時短終了。終了後も残保留4個の引き戻し率は約42.52%。残保留当選時は天衣無縫RUSH側の振り分けへ戻る。
ltPayoutStructure: 天下無双モード中 特図2: 10R 約920個 + LT継続 50% / 4R 約340個 + LT継続 44% / 4R 約340個 + 時短終了 6%。その他入賞口を含む払出表記。
totalPayoutDistribution: 通常時特図1: 10R約920個+次回大当り濃厚/天衣無縫RUSH 1%, 4R約340個+チャンスタイム 99%。チャンスタイム/天衣無縫RUSH中特図2: 10R約920個+LT 1%, 10R約920個+天衣無縫RUSH 49%, 4R約340個+天衣無縫RUSH 50%。LT中は別項参照。
timeShortening: チャンスタイム 時短1回+残保留4個 / 天衣無縫RUSH 時短6回+残保留4個 / 天下無双モード 時短500回+残保留4個。
cTimeOrSpecialSystems: LT終了振り分け後も残保留4個は有効。残保留当選時は天衣無縫RUSH側の特図2振り分けで再判定され、1%ならLT復帰可能。
ceilingOrSupport: 公開主要資料で遊タイム記載なし。

gameFlow: |
  通常時（実質1/99.90）
   ├─ 1%: 10R約920個 → 次回大当り濃厚 → 天衣無縫RUSH
   └─ 99%: 4R約340個 → チャンスタイム（1回+残4）
                         ├─ 引き戻し → 特図2振り分け
                         │   ├─ 1%: 10R → LT「天下無双モード」
                         │   └─ 99%: 天衣無縫RUSH
                         └─ 失敗 → 通常時
  天衣無縫RUSH（6回+残4 / 約75%）
   ├─ 大当り1% → LT「天下無双モード」
   └─ 大当り99% → 天衣無縫RUSH継続
  LT「天下無双モード」（500回+残4 / 94%）
   ├─ 94% → LT本体継続
   └─ 6% → LT本体終了 → 残保留4個
                         ├─ 引き戻し → 天衣無縫RUSH側振り分け（1%でLT復帰）
                         └─ 失敗 → 通常時

notes:
- 2023年のe義風堂々!!～兼続と慶次～3、および後発199ver.とは別スペックとして扱う。
- P-WORLD、情報島＋、HAZUSE、必勝本、一撃で主要値と振り分けが一致。
- 「LT継続率94%」はLT本体の大当り振り分け94%によるループ表記。6%終了後にも残保留4個があり、残保留で当選した場合は下位RUSH側へ戻る。残保留引き戻しをLT94%へ重複加算しない。
- 10R約920個/4R約340個はその他入賞口を含む払出合算値。純獲得と混同しない。

sources:
- https://www.p-world.co.jp/machine/database/10346 — P-WORLD、基本スペック/大当り割合/ゲームフロー、取得2026-09-22
- https://p-johojima.jp/machine_spec/post-13969/ — パチンコ・パチスロ情報島＋、導入日/スペック/振り分け、取得2026-09-22
- https://news.p-world.co.jp/articles/31857/greenbelt — グリーンべると（業界記事）、メーカー発表/LT搭載/基本構造、取得2026-09-22
- https://hazuse.com/machine/pachinko/PX0311/ — HAZUSE、基本スペック/振り分け、取得2026-09-22
- https://hisshobon.com/machineinfo/98849/ — パチ&スロ必勝本、大当り振り分け、取得2026-09-22
- https://1geki.jp/pachinko/p_gifudd3_99/55/ — 一撃、LT構造/残保留仕様、取得2026-09-22

confidence:
- LT搭載/名称: INDUSTRY + ANALYSIS_HIGH
- 導入日: ANALYSIS_HIGH（複数一致）
- 基本確率/RUSH/LT継続/振り分け: ANALYSIS_HIGH（複数一致）
- 通常遊技全体基準LT到達率: UNVERIFIED_AFTER_RESEARCH

missingFields:
- 通常遊技全体基準の総LT到達率（直接公表値）

conflicts: []
