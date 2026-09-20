# Pこの素晴らしい世界に祝福を！199LT「このラッキートリガーに祝福を！」

収集日: 2026-09-21
status: COMPLETE_CORE

machineName: Pこの素晴らしい世界に祝福を！199LT「このラッキートリガーに祝福を！」
manufacturer: 豊丸産業
formalModelName: Pこの素晴らしい世界に祝福を！LT3
releaseDate: 2024-03-04
modelType: ライトミドル（約1/199.8）
gameType: 1種2種混合 / ST型RUSH / LT搭載
jackpotProbability:
- 通常時: 1/199.8
- 右打ち中: 1/67.3
initialPayout:
- 特図1: 7R 約420個（払出）100%
rushEntryRate: 100%
rushContinuationRate:
- このすばRUSH: 約70%（77回+残保留4個）
ltName: 祝福RUSH
ltEntryRoute:
- このすばRUSH中の特図2大当りの0.5%で10R+祝福RUSHへ
- このすばRUSH最終変動および特図2残保留での大当りは、祝福RUSH側振り分けとなり88.6%（10R 50.0% + 4R 38.6%）で祝福RUSHへ
ltEntryRate:
- LT初当り確率: 1/2443.18（解析資料表記）
- 初当りからのLT出現割合: 約12.2回に1回（解析資料表記）
- このすばRUSH通常区間の大当り時: 0.5%
- RUSH最終変動+残保留での大当り時: 88.6%
ltContinuationRate: 約89%
ltPayoutStructure:
- 祝福RUSH中/特図2残保留/このすばRUSH最終変動: 10R約1500個+祝福RUSH 50.0% / 4R約330個or約240個+祝福RUSH 38.6% / 4R約330個+このすばRUSH 11.4%（払出）
- 祝福RUSHは10000回+残保留4個の実質次回大当り型。LT状態から通常RUSHへ戻る振り分けを含めた継続率表記が約89%。
totalPayoutDistribution:
- 特図1: 7R約420個+このすばRUSH 100%
- このすばRUSH中: 10R約1500個+祝福RUSH 0.5% / 10R約1500個+このすばRUSH 49.5% / 4R約330個or約240個+このすばRUSH 50.0%
- 祝福RUSH中等: 10R約1500個+祝福RUSH 50.0% / 4R約330個or約240個+祝福RUSH 38.6% / 4R約330個+このすばRUSH 11.4%
timeShortening:
- このすばRUSH: 77回+残保留4個
- 祝福RUSH: 10000回+残保留4個
cTimeOrSpecialSystems: コンプリート機能搭載
ceilingOrSupport: 遊タイム非搭載

gameFlow:
```
通常時（1/199.8）
 ↓ 初当り 7R約420個
このすばRUSHへ100%突入
ST77回+残保留4個 / 継続約70%
 ↓ 大当り
├─ 通常区間の大当り: 0.5%で祝福RUSH / その他はこのすばRUSH
└─ 最終変動+残保留での大当り: 88.6%で祝福RUSH
                    ↓
              祝福RUSH（LT）
              10000回+残保留4個
              継続率 約89%
              ↓
              88.6%は祝福RUSH継続 / 11.4%はこのすばRUSHへ
```

notes:
- 2024年3月4日導入の初期LT機。後発の99/129/49スペックとは別レコード。
- 正式型式名は「Pこの素晴らしい世界に祝福を！LT3」、検定番号310564として解析DBで確認。
- 出玉は払出表記で統一。解析資料では実獲得目安として10R約1400個、7R約350個、4R約290個/約200個も併記されるため混同しない。
- LT突入経路は通常RUSH中0.5%直行に加え、RUSH最終変動+残保留での大当りが主要経路。

sources:
- https://1geki.jp/repo/20240111toyomaru/ — 一撃・豊丸産業プレス発表会レポート（基本スペック/振り分け/導入日、取得 2026-09-21）
- https://www.p-world.co.jp/machine/database/9974 — P-WORLD（機種/導入・ゲームフロー照合、取得 2026-09-21）
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/toyomaru_pachi/306/kh02.php — パチマガスロマガ（詳細スペック/LT初当り確率、取得 2026-09-21）
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/toyomaru_pachi/306/kh03.php — パチマガスロマガ（特図1/特図2振り分け、取得 2026-09-21）
- https://1geki.jp/pachinko/p_konosuba199lt/1/ — 一撃（スペック照合、取得 2026-09-21）
- https://pachiseven.jp/machines/6877/cutout/16 — パチ7（遊タイム非搭載確認、取得 2026-09-21）
- https://hazuse.com/en/machine/pachinko/PX0201/ — HAZUSE（正式型式名/検定番号/導入日照合、取得 2026-09-21）

confidence:
- LT搭載: INDUSTRY（豊丸産業プレス発表会資料を報じる業界/解析資料および複数DB一致）
- 基本スペック: ANALYSIS_HIGH（複数資料一致）
- 導入日: ANALYSIS_HIGH（複数資料一致）
- 詳細振り分け: ANALYSIS_HIGH（複数解析資料一致）
- LT初当り確率: ANALYSIS_HIGH
- 正式型式名: ANALYSIS_HIGH

missingFields:
- 豊丸産業の当時製品ページは検索結果から直接取得できなかったため、プレス発表会資料を含む複数資料で照合。

conflicts:
- なし。
