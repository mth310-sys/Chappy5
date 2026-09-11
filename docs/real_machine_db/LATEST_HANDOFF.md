更新日: 2026-09-11

## 現在地点
- recordCount: **1309**
- latestRecordAdded: **パチスロ 南国娘2-30 — No.1309**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-10-07_nangoku-musume-2-30.md`
- chronologicalFrontier: **2019-10-07**
- frontierLatestMachine: **パチスロ 南国娘2-30 — No.1309**
- schema: **resetBehavior v0.7**
- status: **2019_10_07_GROUP_OPEN_3_OF_5_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1308 `パチスロ 南国娘2` を再取得して開始。
- 正本が No.1308 / 2019-10-07群OPENまで並行進捗していることを確認し、古いチャット進捗には戻らず継続。
- 2019-10-07群の次の確定候補 **`パチスロ 南国娘2-30`** をNo.1309として登録。
- 25Φと30Φは当時業界資料で同時販売だが、30Φはアムテックス `S南国娘2MA4-30`、別初当たり・別機械割・最大約540枚で独立レコード化。
- 欠損判定前に `南国娘2-30 / 南国娘2 30Φ / S南国娘2MA4-30 / アムテックス` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / テーブル / モード / 有利区間 / 有利区間ランプ / ガックン / 変更判別` を組み替え、業界記事・当時攻略・古いDB・後年整理を横断。

## No.1309 — パチスロ 南国娘2-30
- manufacturer: **アムテックス**
- formalModel: **`S南国娘2MA4-30`**
- certificationNumber: **`8S1147`**
- releaseDate: **2019-10-07**
- generation/system: **6号機 / AT / 疑似ボーナス連荘 / 30Φ**
- payout: **97.7 / 99.8 / 105.9 / 113.0%（設定1/2/5/6）**
- ボーナス初当たり: **1/398.5 / 376.8 / 313.3 / 245.0**
- baseGamesPer50: **50.8〜54.0G/50枚**
- netIncrease: **約6.0枚/G**
- BIG: **20〜90G / 約120〜540枚**
- SP BIG / ENDING BONUS: **90G / 約540枚**
- 最大約540枚の選択率: **約34%**（当時解析）
- 通常天井: **660G canonical / 700G source conflict**

### resetBehavior v0.7 — No.1309
- settingChange: **天井RESET / テーブルRESET / 有利区間RESET**。
- carryOver: **内部天井進捗 / テーブル引継ぎ**。リール下表示G数はリセット。
- powerCycle: **天井 / テーブル / 有利区間 CARRY_OVER**とする30Φ専用資料あり。表示G数はリセット。
- gameCounterReset: 設定変更RESET、据え置き/純電断は内部進捗CARRY_OVER、表示G数は双方RESET。
- ceilingAfterReset: 設定変更専用短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。通常天井自体に660G vs 700GのCONFLICT。
- mode/state: 設定変更でテーブルRESET、純電断でCARRY_OVER。朝一専用振り分け数値は未確認。
- advantageousSection: 設定変更RESET、純電断CARRY_OVERとする資料あり。
- resetBenefits: 当時30Φ専用攻略で **特になし**。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 当時攻略では **ガックン不可 / 通常時ランプ消灯 / リセット判別不可**。後年整理のランプ判別有効記述とはCONFLICTのため確定判別には採用しない。
- publicMorningNumbers: `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_CONFLICT**。

### No.1309 quality / conflicts
- **機械割CONFLICT**: パチマガスロマガ・一撃・P-WORLD・複数解析は97.7/99.8/105.9/113.0%。HAZUSEページ上部レンジも97.7〜113.0%だが、設定別表のみ25Φと同一の97.6/99.5/104.7/109.4%が混在。平均せず複数一致値をcanonical。
- **天井CONFLICT**: 30Φ専用当時攻略は660G、HAZUSEは700G。25Φが700Gで、30Φ専用資料が「25Φより40G浅い」と明示するため660Gをcanonical、700Gも保持。
- **変更判別CONFLICT**: 当時攻略は判別不可、後年整理は有利区間ランプ確認有効。確定材料にせず双方保持。
- releaseDate: 2019-10-06は業界記事の納品予定、2019-10-07はホール導入開始。DBは2019-10-07を採用。

## 2019-10-07群 — OPEN
確認済み候補:
1. **タマどき！** — No.1307 / 登録済み。
2. **パチスロ 南国娘2（25Φ）** — No.1308 / 登録済み。
3. **パチスロ 南国娘2-30** — No.1309 / 登録済み。
4. **カードバトルパチスロ ガンダム クロスオーバー** — ビスティ / 2019-10-07確認 / 未登録。
5. **ドラゴンホイール** — コナミアミューズメント / 2019-10-07確認 / 未登録。

注意:
- 古い導入カレンダーでは10/7候補が省略されるため、更新版・メーカー別DB・別型式を併用して群を閉じる。
- 南国娘2 25Φ/30Φは別型式・別スペックとして独立収録済み。

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — 2019-10-07 / No.1307 / 登録済み。
6. プレドキ！ — **2019年10月までは確認 / 具体導入日・法人未確定 / 未登録**。確定資料が出ない限り本線を停止しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-03_oedo-daisousasen.md`**
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **Git追加順の次機種 `リングにかけろ1` レコードを特定して確認**。既QAなら重複編集せず次へ進み、resetBehavior欠損機を最初に正式補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1309 を再取得。
2. `プレドキ！` の具体導入日/法人は継続保留監査。ただし確定資料が出ない限り本線を停止しない。
3. 2019-10-07群の次機種 **`カードバトルパチスロ ガンダム クロスオーバー`** をNo.1310候補として処理。
4. 続いて **ドラゴンホイール**。全メーカー/別型式/別スペック/PB/地域差を監査して10/7群CLOSED可否を判定。
5. 遡及QAは **リングにかけろ1** からGit追加順に継続。

## 主要出典 — 取得日 2026-09-11
### No.1309 南国娘2-30
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/11606/yugitsushin
- PiDEA X: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E8%A9%95%E4%BE%A1%E3%80%8Es%E5%8D%97%E5%9B%BD%E5%A8%982-h2-ma4-30%E3%80%8F%E3%80%8Es%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9B%E3%82%A4%E3%83%BC%E3%83%AB-kt%E3%80%8F%E6%A9%9F%E7%A8%AE%E8%A9%95%E4%BE%A1%E5%85%AC%E9%96%8B
- HAZUSE: https://hazuse.com/machine/pachislot/8S1147/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/02/h.php
- 一撃: https://1geki.jp/slot/s_nmusume2_30/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9013
- スロパチクエスト: https://www.slopachi-quest.com/article/nanngokumusume2-30-tennjou/
- パチナビ: https://pachinavi.net/machines/nangoku-musume-2-30/tenjo/

### 遡及QA / Git順
- `2007-03-19_kakumei-senshi-choshu-riki.md`: 既QA確認済み。
- `2007-03_battle-caesar-xxx.md`: 既QA確認済み。
- `2007-03_oedo-daisousasen.md`: 既QA確認済み。
- 次: `リングにかけろ1`。
