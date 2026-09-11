更新日: 2026-09-11

## 現在地点
- recordCount: **1311**
- latestRecordAdded: **ドラゴンホイール — No.1311**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-10-07_dragon-wheel.md`
- chronologicalFrontier: **2019-10-07**
- frontierLatestMachine: **ドラゴンホイール — No.1311**
- schema: **resetBehavior v0.7**
- status: **2019_10_07_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1308を再取得。並行更新で正本がNo.1308まで進んでいたため古い進捗へ戻らず継続。
- No.1309 **パチスロ 南国娘2-30**、No.1310 **カードバトルパチスロ ガンダム クロスオーバー**、No.1311 **ドラゴンホイール**を追加。
- 欠損判定前に、機種名表記揺れ・正式型式・メーカー名・シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / 内部状態 / ガックン / 有利区間 / 有利区間ランプ` を組み替えて再探索。
- 2019-10-07群を当時導入カレンダー・導入日一覧・PB資料で再監査。日刊スポーツ当時カレンダーは南国娘2/ガンダムクロスオーバー/ドラゴンホイール、スロパチクエストは南国娘2の25Φ/30Φを分離、ぱちガブ試打動画はタマどき！を2019-10-07コンサートホール専用導入と明示。既知5レコード処理済みとして群をCLOSED。

## No.1309 — パチスロ 南国娘2-30
- manufacturer: **アムテックス**
- formalModel: **`S南国娘2MA4-30`** / certification **`8S1147`**
- releaseDate: **2019-10-07**
- generation/system: **6号機 / AT / 疑似ボーナス連荘 / 30Φ**
- payout: **97.7 / 99.8 / 105.9 / 113.0%（設定1/2/5/6）**
- 初当たり: **1/398.5 / 376.8 / 313.3 / 245.0**
- base: **50.8〜54.0G/50枚** / 純増 **約6.0枚/G**
- BIG: **20〜90G / 約120〜540枚**、SP/ENDING **90G / 約540枚**
- reset: 設定変更で天井/テーブル/有利区間RESET、据え置き/純電断で内部天井・テーブル・有利区間CARRY_OVERとする30Φ専用資料あり。表示G数は双方RESET。特別な朝一恩恵なし。
- CONFLICT: 通常天井 **660G vs 700G**。30Φ専用当時資料が25Φより40G浅い660Gとするため660G canonical、700Gも保持。
- CONFLICT: 機械割は複数資料97.7/99.8/105.9/113.0%に対しHAZUSE設定別表だけ25Φ値混入。平均せず複数一致値をcanonical。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_CONFLICT**。

## No.1310 — カードバトルパチスロ ガンダム クロスオーバー
- manufacturer: **ビスティ**
- formalModel: **`S GUNDAM X-OVER A`**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2019-10-07**
- generation/system: **6号機 / 周期抽選AT / 自力バトルAT**
- payout: **97.3 / 98.8 / 100.7 / 103.5 / 107.2 / 108.6%**
- AT/ボーナス初当たり: **1/296.4 / 285.8 / 285.0 / 286.6 / 271.2 / 222.7**
- CZ: **1/116.3 / 117.4 / 117.5 / 117.8 / 118.6 / 119.6**
- base: **約50G/50枚** / 純増: **強化約1.2枚/G・バトル最大約4.3枚/G**
- 天井: **最大8周期目（平均約928〜930G）**。2/3/5周期天井も通常仕様として存在。
- reset: 設定変更で周期天井/有利区間RESET、据え置き/純電断でCARRY_OVER。リセット恩恵特になし。通常時有利区間ランプ常時消灯。朝一メニューカードは変更/純電断ともボール固定。ガックン有効とする当時攻略あり。
- stateAfterResetは当時資料で調査中のまま、再探索後も直接固定できず推測なし。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_STATE**。

## No.1311 — ドラゴンホイール
- manufacturer: **コナミアミューズメント**
- formalModel: **`SドラゴンホイールKT`** / certification **`9S0098`**
- releaseDate: **2019-10-07**
- generation/system: **6号機 / AT / 疑似ボーナス連荘 / ポイントCZ**
- payout: **98.0 / 98.9 / 99.9 / 102.3 / 103.7 / 108.1%**
- 初当たり: **1/368 / 333 / 299 / 271 / 258 / 237**
- base: **約50G/50枚** / 純増: **約5.1枚/G**
- ドラゴンボーナス: **100 / 200 / 300枚**
- 天井: **有利区間移行後700G+α**

### resetBehavior v0.7 — No.1311
- 発売当時の主要解析は設定変更時・電源OFF→ON時の **天井 / 内部状態 / ステージを「調査中」** と明記。
- 表記揺れ・型式・メーカー名に設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/内部状態/ガックン/有利区間を組み合わせ、当時解析・古いDB・後年攻略まで再探索したが、本機固有の設定変更/純電断契約を追加固定できず。
- 据え置き時でも液晶ポイント表示は0から開始とする当時攻略あり。ただし表示値であり内部天井/内部ポイントのRESETを意味しないため分離。
- 通常時有利区間ランプは消灯とする後年資料があり、ランプ単独での変更判別は不可。
- ガックン発生条件・発生率は `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- 後年攻略ではリセット狙い不要/特別な恩恵なし。ただし発売当時は恩恵も調査中だったため `NO_MAJOR_RESET_BENEFIT_CONFIRMED_RETROSPECTIVE` と低めの信頼度で保持。
- 朝一専用公開数値は `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。

## 2019-10-07群 — CLOSED
処理済み:
1. **タマどき！** — No.1307 / PB / 2019-10-07コンサートホール専用導入を当時試打資料で再確認。
2. **パチスロ 南国娘2（25Φ）** — No.1308。
3. **パチスロ 南国娘2-30** — No.1309。
4. **カードバトルパチスロ ガンダム クロスオーバー** — No.1310。
5. **ドラゴンホイール** — No.1311。

監査根拠:
- 日刊スポーツ2019-10-04導入カレンダー: 10/7パチスロとして南国娘2、ガンダムクロスオーバー、ドラゴンホイール。
- スロパチクエスト2019年導入一覧: 10/7にドラゴンホイール、ガンダムクロスオーバー、南国娘2(25π)、南国娘2(30π)。
- ぱちガブ2019-09-23試打動画: タマどき！を2019-10-07よりコンサートホール専用導入予定と明示。
- `プレドキ！` は2019年10月までは追えるが具体導入日/法人未固定。時系列本線を止めず継続保留監査。

## 次の時系列境界
- **2019-10-15 `呪怨 再誕AT`** を次の確定機種として確認。
- 複数資料で2019-10-15導入、藤商事、6号機AT、型式 `S呪怨 再誕AT FC`、約50G/50枚、純増約1.3〜4.0枚/G、天井400G+αを確認。
- 当時解析には設定変更時 **天井RESET / 内部状態RESET**、電源ON/OFF **天井CARRY_OVER / 内部状態CARRY_OVER** の表が存在するため、次回resetBehavior収集をここから開始可能。

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — 2019-10-07 / No.1307 / 登録済み。
6. プレドキ！ — **2019年10月までは確認 / 具体導入日・法人未確定 / 未登録**。境界監査時に再探索するが、本線は停止しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-03_oedo-daisousasen.md`**
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **Git追加順の次機種 `リングにかけろ1` を確認**。既QAなら重複編集せず次へ進み、resetBehavior欠損機を最初に正式補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1311 を再取得。
2. 保留 `プレドキ！` は具体導入日/法人の確定資料のみ短く再監査し、未確定なら本線を止めない。
3. **2019-10-15 `呪怨 再誕AT` をNo.1312候補**として性能コア+resetBehavior v0.7を収集。
4. 10/15群を全メーカー/別型式/別スペック/PB/地域差まで監査してCLOSED可否を判定。
5. その次の既知境界は2019-10-21群（`闘魂継承 アントニオ猪木という名のパチスロ機` / `ピラミッドアイ`）。
6. 遡及QAは `リングにかけろ1` からGit追加順に継続。

## 主要出典 — 取得日 2026-09-11
### No.1309 南国娘2-30
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/11606/yugitsushin
- PiDEA X: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E8%A9%95%E4%BE%A1%E3%80%8Es%E5%8D%97%E5%9B%BD%E5%A8%982-h2-ma4-30%E3%80%8F%E3%80%8Es%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9B%E3%82%A4%E3%83%BC%E3%83%AB-kt%E3%80%8F%E6%A9%9F%E7%A8%AE%E8%A9%95%E4%BE%A1%E5%85%AC%E9%96%8B
- HAZUSE: https://hazuse.com/machine/pachislot/8S1147/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/02/h.php
- 一撃: https://1geki.jp/slot/s_nmusume2_30/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9013
- スロパチクエスト: https://www.slopachi-quest.com/article/nanngokumusume2-30-tennjou/

### No.1310 ガンダム クロスオーバー
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/895/
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/11797/greenbelt
- P-WORLD / Amusement Japan: https://news.p-world.co.jp/articles/11750/amusement
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/92192/
- スロパチクエスト: https://www.slopachi-quest.com/article/gundam-xover-tennjou/

### No.1311 ドラゴンホイール
- K-Navi: https://p-kn.com/slot/3293/
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/90185/
- 一撃: https://1geki.jp/slot/s_dragonw/
- スロパチクエスト: https://www.slopachi-quest.com/article/dragonwheel-tennjou/
- パチナビ: https://pachinavi.net/machines/dragon-wheel/
- Slot Method: https://slotmethod.jp/dragonwheel-reset/

### 2019-10-07群監査 / 次境界
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/m/amusement/pachislot/news/201910040000287_m.html
- スロパチクエスト2019年導入一覧: https://www.slopachi-quest.com/article/2019-dounyuukishu/
- ぱちガブ タマどき！試打動画: https://www.youtube.com/watch?v=bX1pGlgFGng
- ちょんぼりすた 呪怨 再誕AT: https://chonborista.com/slot/fuji-slot/90938/
- スロパチネット 呪怨 再誕AT: https://slopachi-net.com/jyuonn
