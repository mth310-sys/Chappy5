更新日: 2026-09-11

## 現在地点
- recordCount: **1310**
- latestRecordAdded: **カードバトルパチスロ ガンダム クロスオーバー — No.1310**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-10-07_gundam-cross-over.md`
- chronologicalFrontier: **2019-10-07**
- frontierLatestMachine: **カードバトルパチスロ ガンダム クロスオーバー — No.1310**
- schema: **resetBehavior v0.7**
- status: **2019_10_07_GROUP_OPEN_4_OF_5_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1308 を再取得し、並行更新で正本がNo.1308まで進んでいることを確認して開始。
- **No.1309 `パチスロ 南国娘2-30`** を登録。25Φと同時販売だが、アムテックス `S南国娘2MA4-30`、別初当たり/別機械割/最大約540枚の別スペックとして独立収録。
- **No.1310 `カードバトルパチスロ ガンダム クロスオーバー`** を登録。メーカー公式機種コレクション、当時業界記事、解析資料を横断。
- 欠損判定前に機種名表記揺れ・正式型式・メーカー名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / 周期 / モード / ガックン / 有利区間` を組み替えて再探索した。

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
- carryOver: **内部天井進捗 / テーブル引継ぎ**。表示G数はRESET。
- powerCycle: **天井 / テーブル / 有利区間 CARRY_OVER**とする30Φ専用資料あり。
- ceilingAfterReset: 専用短縮なし確認。通常天井自体に **660G vs 700G CONFLICT**。
- resetBenefits: **特になし**。
- resetDetection: 当時攻略は **ガックン不可 / 通常時ランプ消灯 / 判別不可**。後年ランプ判別有効記述とCONFLICT。
- publicMorningNumbers: `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_CONFLICT**。

### No.1309 quality / conflicts
- 機械割: 複数資料97.7/99.8/105.9/113.0% vs HAZUSE設定別表の25Φ値混入。平均せず複数一致値をcanonical。
- 天井: 30Φ専用当時攻略660G vs HAZUSE700G。660Gをcanonical、700Gも保持。

## No.1310 — カードバトルパチスロ ガンダム クロスオーバー
- manufacturer: **ビスティ**
- formalModel: **`S GUNDAM X-OVER A`**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2019-10-07**
- generation/system: **6号機 / 周期抽選AT / 自力バトルAT**
- payout: **97.3 / 98.8 / 100.7 / 103.5 / 107.2 / 108.6%**
- AT/ボーナス初当たり: **1/296.4 / 285.8 / 285.0 / 286.6 / 271.2 / 222.7**
- CZ: **1/116.3 / 117.4 / 117.5 / 117.8 / 118.6 / 119.6**
- baseGamesPer50: **約50G/50枚**
- netIncrease: **強化パート約1.2枚/G / バトルパート最大約4.3枚/G**
- クロスボーナス: **約30枚**
- AT: **1セット30G+α / 1〜5set継続率約80%**
- 天井: **最大8周期目（平均約928〜930G）**、2/3/5周期天井も存在。

### resetBehavior v0.7 — No.1310
- settingChange: **周期天井RESET / 有利区間RESET**。
- carryOver: **周期天井進捗 / 有利区間 CARRY_OVER**。
- powerCycle: **天井 / 有利区間 CARRY_OVER**。
- ceilingAfterReset: 設定変更専用短縮・専用天井振り分けは `PUBLIC_RESET_ONLY_CEILING_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- modeAfterReset: 通常2/3/5/8周期天井は確認。リセット専用モード振り分けは再探索後も未固定。
- stateAfterReset: 当時朝一表は設定変更/純電断とも **ステージ調査中**。単一実戦ではリセット台が朝一カード育成パート開始だが一般契約には昇格しない。
- advantageousSection: 設定変更RESET / 純電断CARRY_OVER。
- resetBenefits: **特になし**。
- resetDetection: **ガックン有効**とする当時攻略。通常時有利区間ランプ常時消灯でランプ判別不可。朝一メニューカードは設定変更/電源OFF→ONともボール固定で判別不可。
- publicMorningNumbers: `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_STATE**。

### No.1310 quality
- SANKYO公式機種コレクションで型式 `S GUNDAM X-OVER A` を確認。
- certificationNumberは機種名/型式/メーカー/検定表記を変えて再探索したが直接固定できず、推測せずUNVERIFIED_AFTER_RESEARCH。
- 2019-10-06は納品予定、2019-10-07は導入開始。DBは10/7をcanonical。

## 2019-10-07群 — OPEN
確認済み候補:
1. **タマどき！** — No.1307 / 登録済み。
2. **パチスロ 南国娘2（25Φ）** — No.1308 / 登録済み。
3. **パチスロ 南国娘2-30** — No.1309 / 登録済み。
4. **カードバトルパチスロ ガンダム クロスオーバー** — No.1310 / 登録済み。
5. **ドラゴンホイール** — コナミアミューズメント / 2019-10-07確認 / 未登録。

注意:
- 古い導入カレンダーでは10/7候補が省略されるため、更新版・メーカー別DB・別型式を併用して群を閉じる。
- `プレドキ！` は2019年10月までは確認できるが具体導入日/法人未確定のため保留し、本線は停止しない。

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — 2019-10-07 / No.1307 / 登録済み。
6. プレドキ！ — **2019年10月までは確認 / 具体導入日・法人未確定 / 未登録**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-03_oedo-daisousasen.md`**
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **Git追加順の次機種 `リングにかけろ1` レコードを特定して確認**。既QAなら重複編集せず次へ進み、resetBehavior欠損機を最初に正式補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1310 を再取得。
2. 2019-10-07群の次の確定未処理 **`ドラゴンホイール`** をNo.1311候補として処理。
3. 登録後、10/7群を全メーカー/別型式/別スペック/PB/地域差まで再監査しCLOSED可否を判定。
4. `プレドキ！` の具体導入日/法人は境界監査時に継続探索するが、確定資料がない限り本線を止めない。
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

### No.1310 ガンダム クロスオーバー
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/895/
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/11797/greenbelt
- P-WORLD / Amusement Japan: https://news.p-world.co.jp/articles/11750/amusement
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/92192/
- スロパチクエスト: https://www.slopachi-quest.com/article/gundam-xover-tennjou/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9031
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/x-over
- 復活!!でるでる仮面: https://ameblo.jp/deruderu-kamen/entry-12575568715.html

### 遡及QA / Git順
- `2007-03-19_kakumei-senshi-choshu-riki.md`: 既QA確認済み。
- `2007-03_battle-caesar-xxx.md`: 既QA確認済み。
- `2007-03_oedo-daisousasen.md`: 既QA確認済み。
- 次: `リングにかけろ1`。
