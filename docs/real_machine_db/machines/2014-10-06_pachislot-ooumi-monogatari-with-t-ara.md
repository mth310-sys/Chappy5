# パチスロ大海物語 with T-ARA

machineName: パチスロ大海物語 with T-ARA
manufacturer: 三洋物産
releaseDate: 2014-10-06
releaseDatePrecision: nationwide_hall_start
generation: 5号機
systemType: AT / ベルナビ回数管理 / 確変ループ + ST引き戻し
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- メーカー: **三洋物産**。
- 全国ホール導入開始: **2014-10-06**。K-Navi、パチビー、パチ7、パチ＆スロ必勝本で一致。2014-08-04のグリーンべると発表記事も「10月6日より納品開始予定」とする。
- 型式名: **パチスロ大海物語KD**。中古実機DBで確認。
- 数字形式の検定番号: `UNVERIFIED_AFTER_RESEARCH`。型式名・三洋・検定・4S系を組み替えて再探索したが、今回安全に固定できる数字形式番号は未確認。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE_FOR_HALL_DATE / SECONDARY_FOR_MODEL_NAME

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.24% |
| 2 | 98.38% |
| 3 | 100.32% |
| 4 | 105.25% |
| 5 | 107.67% |
| 6 | 110.73% |

- パチ＆スロ必勝本編集部調べ。
- 後年回顧資料では97.2%〜110.7%の丸め系列が確認でき、上記精密値と整合。
- confidence: ANALYSIS_HIGH

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/199.50 |
| 2 | 1/192.98 |
| 3 | 1/184.64 |
| 4 | 1/158.47 |
| 5 | 1/150.79 |
| 6 | 1/141.48 |

- パチ＆スロ必勝本の基本スペック/設定看破ページで一致。
- PiDEAの発表記事も設定1約1/199.5〜設定6約1/141.5として整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- 「50枚」「1000円」「ベース」「コイン持ち」等で再探索。ユーザー実戦投稿に「1kで30回回るか回らないか」程度の記述はあるが、実戦感想値であり物差しの確定値には採用しない。

## netIncrease

- AT純増: **約2.8枚/G**。
- グリーンべると、P-WORLD、パチビー、必勝本で一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- チャンス図柄大当り: **ベルナビ20回**、約100枚目安。
- 確変図柄大当り: **ベルナビ20回 or 40回**、約100枚 or 約200枚目安。
- 確変「大海チャンス」: **55% / 75% / 85%**の継続率管理。保留5個以内の大当りが確定。
- ST「大海チャレンジ」: **5回転**。設定1の引き戻し期待度は約15%。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時の大当りはレア役解除等によるAT当選が中心。
- 本機には通常ゲーム数天井は **非搭載**。必勝本機種TOPに「天井&設定変更→ナシ」と明記され、後年回顧/実戦整理でも天井なしとして一致。
- 規定G数解除型の通常モードは確認されない。後年整理資料でも「内部モードなどもない」とされるため、少なくとも天井・ゾーン狙い用の規定Gモードは非該当として扱う。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- パチ＆スロ必勝本の本機TOPは **「天井&設定変更→ナシ」** と明記。
- 本機は通常ゲーム数天井・規定G数解除モードを持たないため、設定変更による天井短縮/規定Gリセットの対象そのものがない。
- ただし、設定変更時の内部抽選状態や初期状態の具体契約を示す本機固有資料は確認できず、状態面は `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 天井・規定G数解除モードが非搭載のため、天井G/規定Gの宵越し項目は `NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_MODE`。
- その他の内部状態/保留・確変/ST関連状態について、据え置き時の朝一契約を本機固有資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 設定変更なしの単純電源OFF→ONで、内部抽選状態・確変/ST関連状態・液晶表示等がどう扱われるかを本機固有資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き一般論から純電断挙動を推定しない。

### gameCounterReset

- `NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_MODE`。

### ceilingAfterReset

- `NOT_APPLICABLE_NO_CEILING`。
- 設定変更専用の短縮天井数値も存在対象外。

### modeAfterReset

- 規定G数解除型の通常モード/天国モードは `NOT_APPLICABLE_NO_GAME_NUMBER_MODE_CONFIRMED`。
- 設定変更専用の朝一モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時の内部抽選状態の初期化/再抽選/引継ぎは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 天井短縮、朝一天国、CZ優遇など設定変更専用の主要恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更固有の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、初期出目、液晶表示、朝一ステージ等による設定変更/据え置き判別契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- 設定変更時のみ適用される公開当選率、モード振り分け、短縮天井等の比較可能な朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ST「大海チャレンジ」の設定1引き戻し期待度約15%はAT終了後の通常仕様であり、設定変更朝一値ではないためここには転記しない。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `パチスロ大海物語 with T-ARA / パチスロ大海物語withT-ARA / 大海物語 with T-ARA / 大海物語KD / 三洋 / SANYO`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / 天国 / ガックン / 初期出目 / ステージ / 50枚 / ベース / コイン持ち`。
- 資料系統: グリーンべると、P-WORLD、パチビー、K-Navi、パチ7、パチ＆スロ必勝本、PiDEA、後年回顧/実戦整理、中古実機DB。
- 「天井&設定変更→ナシ」は、本機に天井/規定G数解除が存在しないことと整合。これを根拠に内部状態まで「何も変わらない」と拡張解釈しない。

## sources

取得日: 2026-09-07

1. パチ＆スロ必勝本 — 機種TOP
   - https://p.hisshobon.jp/machine/2464
   - 「天井&設定変更→ナシ」、解析項目一覧
   - reliability: ANALYSIS_HIGH
2. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/2464/1/48481
   - AT初当たり、機械割、2014/10/06導入
   - reliability: ANALYSIS_HIGH
3. パチ＆スロ必勝本 — 設定看破ポイント
   - https://p.hisshobon.jp/machine/list.php?c=1&d=48725&mid=2464&p=2
   - AT初当たり1/199.50〜1/141.48
   - reliability: ANALYSIS_HIGH
4. パチ＆スロ必勝本 — システム概要
   - https://p.hisshobon.jp/machine/2464/1/48360
   - AT純増2.8枚/G、20or40回ナビ、確変/ST構造
   - reliability: ANALYSIS_HIGH
5. パチ＆スロ必勝本 — 確変・ST中の抽選
   - https://p.hisshobon.jp/machine/2464/1/48391
   - ST引き戻し期待度約15%
   - reliability: ANALYSIS_HIGH
6. グリーンべると / P-WORLD業界ニュース
   - https://news.p-world.co.jp/articles/6730/greenbelt
   - 2014-08-04発表、10/06納品開始予定、純増約2.8枚/G
   - reliability: INDUSTRY
7. パチビー
   - https://www.pachibee.jp/machines/index/214090006
   - 2014-10-06導入、AT、20/40回ナビ、純増約2.8枚/G
   - reliability: INDUSTRY_DATABASE
8. K-Navi
   - https://p-kn.com/slot/2109/
   - 2014-10-06ホール導入開始、ベルナビ管理AT
   - reliability: ANALYSIS_DATABASE
9. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/7492
   - 5号機AT、BR非搭載、純増約2.8枚/G
   - reliability: INDUSTRY_DATABASE
10. PiDEA
   - https://www.pidea.jp/articles/SANYO%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%A4%A7%E6%B5%B7%E3%80%8D%E3%81%AB%E3%83%86%E3%82%A3%E3%82%A2%E3%83%A9%E5%86%8D%E7%99%BB%E5%A0%B4%21
   - 設定1約1/199.5〜設定6約1/141.5、約100/200枚、10/5納品予定
   - reliability: INDUSTRY
11. 中古実機DB 中一商事
   - https://www.nakaiti.com/html/sayo0054.html
   - 型式名パチスロ大海物語KD、AT仕様
   - reliability: SECONDARY_DATABASE
12. 後年実戦整理
   - https://www.nikuziru.com/archives/964
   - 天井なし、内部ゲーム数モードなしという整理
   - reliability: SECONDARY_RETROSPECTIVE

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- numeric inspection / test number: UNVERIFIED_AFTER_RESEARCH
- setting-change internal state contract: UNVERIFIED_AFTER_RESEARCH
- carry-over internal state contract: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle internal state contract: UNVERIFIED_AFTER_RESEARCH

## conflicts

- NONE_MATERIAL_FOR_CORE_VALUES.
- PiDEAは納品日10/05予定、グリーンべるとは10/06より納品開始予定、複数DBは10/06導入。DB releaseDateはホール導入日の複数一致 **2014-10-06** を採用し、物流予定日とは定義分離。
