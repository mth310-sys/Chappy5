# P少女☆歌劇 レヴュースタァライト 99 LT3000

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: P少女☆歌劇 レヴュースタァライト 99 LT3000
manufacturer: 豊丸産業
releaseDate: 2025-12-22
modelType: 甘デジ / P機 / LT

gameType: 1種2種混合 / 段階ST → LT上乗せループ

jackpotProbability:
- 通常時: 1/99.9
- 右打ち中: 1/72.1

initialPayout:
- 2R 200個（払い出し）100%。50%でトップスタァロード、50%で通常。

rushEntryRate:
- トップスタァロード突入率: 50%。

rushContinuationRate:
- 初回トップスタァロード: ST45回＋残保留4、継続約50%。
- 2回目以降: ST100回＋残保留4、継続約77%。

ltName: 追劇

ltEntryRoute:
- トップスタァロード中大当り1.6% → 3000個（1000個×3）＋追劇へ直行。
- トップスタァロード中大当り13.3% → 1000個＋追劇70%ZONE。
- 追劇70%ZONE中大当り69.5% → 3000個＋追劇。
- 追劇70%ZONE中30.5% → 2000個＋追劇獲得チャンス。成功時に追劇、失敗時はトップスタァロードへ。

ltEntryRate:
- 通常遊技全体基準の総LT到達率は直接公表値を確認できず、経路値から独自算出しない。
- RUSH中大当り: 1.6%直LT / 13.3%追劇70%ZONE。
- 追劇70%ZONE中: 69.5%で3000個＋追劇、30.5%で2000個＋追劇獲得チャンス。

ltContinuationRate:
- 追劇中: 約70%で1000個以上の上乗せループ。

ltPayoutStructure:
- 追劇中: 2000個＋追劇 0.5% / 1000個＋追劇 69.5% / 出玉なし＋追劇70%ZONE 4% / 出玉なし＋トップスタァロード 26%。
- 2000個/3000個は1000個×複数回の合計払い出しとして分離。

totalPayoutDistribution:
- 特図1: 200個＋RUSH 50% / 200個＋通常 50%。
- RUSH中: 3000個＋追劇 1.6% / 1000個＋追劇70%ZONE 13.3% / 1000個＋RUSH 85.1%。
- 追劇70%ZONE中: 3000個＋追劇 69.5% / 2000個＋追劇獲得チャンス 30.5%。
- 追劇中: 2000個＋追劇 0.5% / 1000個＋追劇 69.5% / 追劇70%ZONE 4% / RUSH 26%。

timeShortening:
- 初回RUSH: 45回＋残保留4。
- 2回目以降RUSH: 100回＋残保留4。

cTimeOrSpecialSystems:
- 追劇70%ZONE最終変動・残保留当選時は通常RUSH中と同じ振り分けとの解析注記あり。

ceilingOrSupport:
- コンプリート機能: 搭載。

gameFlow: |
  通常時 1/99.9
   ↓ 2R 200個
   ├─ 50% → トップスタァロード 初回45回＋残4（約50%）
   └─ 50% → 通常
  RUSH大当り
   ├─ 1.6% → 3000個 → LT「追劇」
   ├─ 13.3% → 1000個 → 追劇70%ZONE → 大当りでLT獲得機会
   └─ 85.1% → 1000個 → トップスタァロード（2回目以降100回＋残4 / 約77%）
  追劇
   ├─ 70% → 1000個以上＋追劇継続
   ├─ 4% → 追劇70%ZONE
   └─ 26% → トップスタァロードへ

notes:
- 2025年4月の「ラッキートリガー4500」とは別スペック。
- 業界資料はRUSH中約15%で「追劇 or 追劇70%ZONE」と丸めるが、詳細振り分け1.6%+13.3%=14.9%と整合する。
- 追劇突入時期待出玉約10400個は期待値であり、単一大当り出玉ではない。

sources:
- https://news.p-world.co.jp/articles/32124/greenbelt — グリーンべると。LT搭載、1/99.9、RUSH50%、初回/2回目継続、追劇。取得日 2026-09-23。
- https://news.p-world.co.jp/articles/32353/greenbelt — 導入12/22、基本スペック。取得日 2026-09-23。
- https://www.p-world.co.jp/machine/database/10378 — P-WORLD。1/72.1、ST回数、詳細振り分け、LT構造。取得日 2026-09-23。
- https://p-johojima.jp/machine_spec/post-18312/ — 情報島＋。詳細振り分け、期待出玉定義、最終変動/残保留注記。取得日 2026-09-23。

confidence:
- LT搭載/名称/導入日/基本確率/RUSH/LT構造/振り分け: INDUSTRY + ANALYSIS_HIGH

missingFields:
- formal modelName: UNVERIFIED_AFTER_RESEARCH

conflicts: []
