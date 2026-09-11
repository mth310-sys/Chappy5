更新日: 2026-09-11

## 現在地点
- recordCount: **1308**
- latestRecordAdded: **パチスロ 南国娘2（25Φ） — No.1308**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-10-07_nangoku-musume-2.md`
- chronologicalFrontier: **2019-10-07**
- frontierLatestMachine: **パチスロ 南国娘2（25Φ） — No.1308**
- schema: **resetBehavior v0.7**
- status: **2019_10_07_GROUP_OPEN_2_OF_5_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1307 `タマどき！` を再取得して開始。
- 正本が No.1307 / 2019-10-07群OPENまで進んでいることを確認し、古いチャット進捗へ戻らず継続。
- 最優先保留 `プレドキ！` を「プレドキ！ / プレドキ / Sオリスロ2AA / 2019年10月 / 導入日 / 法人 / PB」等で再探索。P-WORLD/後年DB系の2019年10月扱い・同型式性能は追えるが、今回も具体的なホール導入日と導入法人を直接固定できる当時資料を得られず。時系列を崩さないため未登録を維持。
- 2019-10-07群の次の確定候補、25Φ **`パチスロ 南国娘2`** をNo.1308として登録。
- 25Φと30Φは当時業界資料が同時展開を明記する一方、メーカー/型式/出玉特性が異なるため独立レコード方針を維持。

## No.1308 — パチスロ 南国娘2（25Φ）
- manufacturer: **平和**
- formalModel: **`S南国娘2H2`**
- certificationNumber: **`8S1296`**
- releaseDate: **2019-10-07**
- generation/system: **6号機 / AT / 疑似ボーナス連荘 / 25Φ**
- payout: **97.6 / 99.5 / 104.7 / 109.4%（設定1/2/5/6）**
- ボーナス初当たり: **1/346.4 / 331.2 / 289.0 / 252.1**
- baseGamesPer50: **50.8〜54.0G/50枚**
- netIncrease: **約6.0枚/G**
- BIG: **20〜80G / 約120〜480枚**
- SP BIG / ENDING BONUS: **80G / 約480枚**
- 通常天井: **有利区間移行後700G**

### resetBehavior v0.7 — No.1308
- settingChange: **天井RESET / テーブルRESET / 有利区間RESET、非有利区間開始**。
- carryOver: 当時攻略表で **天井・テーブル引継ぎ**。表示G数はリセットされるため内部進捗とは分離。
- powerCycle: **天井 / テーブル / 有利区間 CARRY_OVER**。
- gameCounterReset: 設定変更RESET、据え置き/純電断は内部天井進捗CARRY_OVER。リール下表示G数は双方リセット。
- ceilingAfterReset: 通常700G。設定変更専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- mode/state: 有利区間移行時に4テーブルからセット。設定変更で再セット、純電断で引継ぎ。朝一専用振り分け数値は未確認。
- advantageousSection: 設定変更RESET / 非有利区間開始、純電断CARRY_OVER。通常時は有利区間ランプ消灯型で朝一ランプ単独判別不可。
- resetBenefits: 当時攻略で **特になし**。短縮天井・朝一専用高確・専用当選率の確定数値なし。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 表示G数は双方リセット、通常時ランプ消灯、ガックンは不可/おそらく不可資料のため確定判別材料なし。
- publicMorningNumbers: `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**。

### No.1308 quality / conflicts
- 業界記事の **2019-10-06** は納品予定日、HAZUSE・一撃等の **2019-10-07** は導入開始日。DB時系列はホール導入基準なので10/7をcanonical採用。
- 30Φはアムテックス・別型式・別スペックなので25Φに統合しない。

## 2019-10-07群 — OPEN
確認済み候補:
1. **タマどき！** — No.1307 / 登録済み。
2. **パチスロ 南国娘2（25Φ）** — No.1308 / 登録済み。
3. **パチスロ 南国娘2-30** — 30Φ / アムテックス / 別型式・別スペック / 未登録。
4. **カードバトルパチスロ ガンダム クロスオーバー** — ビスティ / 2019-10-07確認 / 未登録。
5. **ドラゴンホイール** — コナミアミューズメント / 2019-10-07確認 / 未登録。

注意:
- 古い導入カレンダーでは10/7候補が省略されるため、更新版・メーカー別DB・別型式を併用して群を閉じる。
- 南国娘2-30は25Φと独立収録する。

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — 2019-10-07 / No.1307 / 登録済み。
6. プレドキ！ — **2019年10月までは確認 / 具体導入日・法人未確定 / 未登録**。今後も境界監査時に再探索し、日付固定時は時系列整合を優先して処理。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回 `2007-03-19_kakumei-senshi-choshu-riki.md`（革命戦士長州力）を再取得。既にresetBehavior再探索メモ・PARTIAL QAが存在するため重複編集せず通過。
- Git追加履歴から直後が `2007-03_battle-caesar-xxx.md`（バトルシーザーXXX）であることを確定。同機も既に設定変更/据え置き/純電断/ガックン等の再探索記録付きPARTIAL QAのため重複編集せず通過。
- 次のGit追加順 `2007-03_oedo-daisousasen.md`（お江戸大捜査線）も既に同等のresetBehavior再探索記録付きPARTIAL QAを確認し通過。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-03_oedo-daisousasen.md`**
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **Git追加順の次機種 `リングにかけろ1` レコードを特定して確認**。既QAなら重複編集せず次へ進み、resetBehavior欠損機を最初に正式補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1308 を再取得。
2. `プレドキ！` の具体導入日/法人は継続保留監査。ただし確定資料が出ない限り本線を停止しない。
3. 2019-10-07群の次機種 **`パチスロ 南国娘2-30`（30Φ / アムテックス）** をNo.1309候補として処理。
4. 続いて **カードバトルパチスロ ガンダム クロスオーバー → ドラゴンホイール**。全メーカー/別型式/別スペック/PB/地域差を監査して10/7群CLOSED可否を判定。
5. 遡及QAは **リングにかけろ1** からGit追加順に継続。

## 主要出典 — 取得日 2026-09-11
### No.1308 南国娘2 25Φ
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/11606/yugitsushin
- PiDEA X: https://www.pidea.jp/articles/6%E5%8F%B7%E6%A9%9F%E3%83%91%E3%83%88%E3%83%A9%E3%82%A4%E3%83%88%E7%AC%AC2%E5%BC%BE%E3%80%8C%E5%8D%97%E5%9B%BD%E5%A8%982%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E5%B9%B3%E5%92%8C
- HAZUSE: https://hazuse.com/machine/pachislot/8S1296/
- 一撃: https://1geki.jp/slot/s_nmusume2/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/90149/
- スロパチクエスト: https://www.slopachi-quest.com/article/nanngokumusume2-25-tennjou/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9012

### 遡及QA / Git順
- `2007-03-19_kakumei-senshi-choshu-riki.md`: 既QA確認。
- commit `529fbb677717b35c07481aed39c508d1a77dd22a`: Battle Caesar XXX追加順を確認。
- commit `11ab0ef9c0a07c6986b5f3bdc59e371404eb1d1f`: お江戸大捜査線追加順を確認。
