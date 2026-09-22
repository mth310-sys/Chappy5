# P真・座頭市物語 LT99ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: P真・座頭市物語 LT99ver.
modelName: P真・座頭市物語N2-K
manufacturer: ニューギン
releaseDate: 2025-09-08
modelType: 甘デジ / LT搭載
gameType: 1種2種混合 / ST型RUSH → LT
jackpotProbability:
- 通常時: 約1/99.90
- 右打ち中: 1/46.64
initialPayout:
- 10R 約1000個 / 4R 約400個 / 2R 約200個（払い出し）
rushEntryRate:
- 初当り後電サポ突入: 100%
- 激闘の鼓動: 99.5%（残り0.5%は10Rから竜騰虎闘モードへ直行）
rushContinuationRate:
- 激闘の鼓動: ST20回+残保留4、突破約41%
- 竜騰虎闘モード: ST51回+残保留4、継続約70%
ltName: 神速一閃モード
ltEntryRoute:
- 激闘の鼓動または竜騰虎闘モード中の10R当りの約34%でLT発動
- 右打ち全大当りに占めるLT移行は10.0%（10R 29.5%の一部）
ltEntryRate:
- 通常遊技全体を分母とした直接公表の総LT到達率は確認できず。下位突破率・右打ち10%等から独自合算しない。
ltContinuationRate:
- 神速一閃モード: ST130回+残保留4、TOTAL約95%
ltPayoutStructure:
- 神速一閃モード中: 10R 約1000個 + 神速一閃モード 29.5% / 3R 約300個 + 神速一閃モード 70.5%
- 注意: LTのST130回をスルー後、残保留4個で引き戻した場合はLT継続ではなく基本RUSH側の振り分けへ戻る。
totalPayoutDistribution:
- 通常時: 10R 約1000個 + 竜騰虎闘モード 0.5% / 4R 約400個 + 激闘の鼓動 20.0% / 2R 約200個 + 激闘の鼓動 79.5%
- 激闘の鼓動・竜騰虎闘モード中: 10R 約1000個 + 神速一閃モード 10.0% / 10R 約1000個 + 竜騰虎闘モード 19.5% / 3R 約300個 + 竜騰虎闘モード 70.5%
timeShortening:
- 激闘の鼓動: ST20回 + 残保留4
- 竜騰虎闘モード: ST51回 + 残保留4
- 神速一閃モード: ST130回 + 残保留4
cTimeOrSpecialSystems: none confirmed
ceilingOrSupport: 遊タイム非搭載 / コンプリート機能搭載
gameFlow: |
  通常時 約1/99.90
   ↓ 初当り
  0.5%: 10R約1000個 → 竜騰虎闘モード
  99.5%: 4R/2R → 激闘の鼓動（ST20+残4 / 突破約41%）
   ↓ 激闘の鼓動中大当り
  10.0% → 神速一閃モード（LT）
  90.0% → 竜騰虎闘モード（ST51+残4 / 約70%）
   ↓ 竜騰虎闘モード中大当り
  10.0% → 神速一閃モード（LT）
  90.0% → 竜騰虎闘モード継続
   ↓
  神速一閃モード（ST130+残4 / TOTAL約95%）
notes:
- ST20回部分約35.18% + 残保留4回約8.3%の合算が突破約41%。
- ST51回部分約66.89% + 残保留4回約8.3%の合算がTOTAL約70%。
- ST130回部分約94.03% + 残保留4回約8.3%の合算がTOTAL約95%。
- 必勝本の「右打ち10R時の約34%」と詳細振り分けの「右打ち大当り10.0%でLT」は整合する（10R比率29.5% × 10R内約34% ≒ 全体10%）。
- P-WORLD本文に竜騰虎闘モード中LT移行「約7%」との記載がある一方、同ページ基本表および情報島＋、必勝本、パチマガスロマガの詳細振り分けは10.0%を支持。孤立本文値は採用せず、10.0%を採用した。
sources:
- https://p-johojima.jp/machine_spec/post-12724/ — 確率、ST回数/継続率、全振り分け。取得 2026-09-22
- https://news.p-world.co.jp/articles/31637/greenbelt — ニューギン発表報道、LT搭載、基本ゲームフロー。取得 2026-09-22
- https://amusement-japan.co.jp/article/detail/10004970/ — 導入日2025-09-08、ニューギン直営先行導入、基本構造。取得 2026-09-22
- https://hisshobon.com/machineinfo/98814/ — 1/99.9、右1/46.64、ST回数、10R比率、LT。取得 2026-09-22
- https://hisshobon.com/machineinfo/98815/ — LT発動契機（右打ち10Rの約34%）、LT終了/残保留仕様。取得 2026-09-22
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/506/kh01.php — 型式N2-K、導入日、仕様照合。取得 2026-09-22
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/506/kh02.php — 確率、出玉、ST/TOTAL定義。取得 2026-09-22
confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常遊技全体基準の総LT到達率（直接公表値未確認）
conflicts: none
