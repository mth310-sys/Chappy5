更新日: 2026-09-11

## 現在地点
- recordCount: **1312**
- latestRecordAdded: **呪怨 再誕AT — No.1312**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-10-15_juon-saitan-at.md`
- chronologicalFrontier: **2019-10-15**
- frontierLatestMachine: **呪怨 再誕AT — No.1312**
- schema: **resetBehavior v0.7**
- status: **2019_10_15_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1311を再取得し、No.1311の次から継続。
- No.1312 **呪怨 再誕AT**を追加。
- 欠損判定前に、機種名表記揺れ・正式型式・メーカー名・シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / 内部状態 / ガックン / 有利区間 / 有利区間ランプ` を組み替えて再探索。
- 10/15導入群を再監査。当時の導入直前記事は「今回導入されるパチスロは1機種のみ」とし、ぱちガブの10月中旬新台情報でも10/13週は `S呪怨 再誕AT` のみを掲載。追加独立機を固定できなかったため **2019-10-15群CLOSED**。

## No.1312 — 呪怨 再誕AT
- manufacturer: **藤商事**
- formalModel: **`S呪怨 再誕AT FC`**
- certificationNumber: **`9S0114`**
- releaseDate canonical: **2019-10-15**
- releaseDate CONFLICT: **2019-10-21（HAZUSE）**
- generation/system: **6号機 / AT / 疑似ボーナス+ST型AT**
- payout: **97.8 / 99.2 / 100.3 / 104.3 / 107.2 / 110.1%**
- payout CONFLICT: HAZUSEトップは **97.14〜110.42%** の別レンジ。複数当時解析の設定別一致値をcanonical。
- AT/業BONUS初当り: **1/365.5 / 345.5 / 330.4 / 292.7 / 245.9 / 201.7**
- 呪縛ST: **1/912.1 / 859.7 / 818.7 / 677.6 / 559.5 / 450.5**
- base: **約50G/50枚**
- 純増: **呪縛ST 約1.3枚/G / 疑似ボーナス 約4.0枚/G**
- 業BONUS: **20G**
- 呪縛ST: **40〜80G**、ループ率 **約72.2〜93.7%**
- 通常天井: **有利区間移行後400G+α → CZ高確率（リセットモード）**。AT確定ではない。

### resetBehavior v0.7 — No.1312
- 設定変更: **天井RESET / 内部状態RESET / 非有利区間から開始 / リセットモード確定**。
- 据え置き: **内部天井・モード/状態CARRY_OVER**。
- 純電源OFF→ON: **天井・内部状態CARRY_OVER**。
- 設定変更後のリセットモード: **CZ約1/50 / CZ当選まで継続**。
- 有利区間ランプ: 通常時消灯のため、朝一消灯だけでは変更判別不可。
- 表示ゲーム数: 朝一0Gでも内部進行RESETを意味しないため、表示と内部を分離。
- ガックン: 本機固有の確定契約/発生率を再探索後も固定できず `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- 当時期待値モデル: 設定1・CZスルー即ヤメ等の条件でリセットモード狙い **約+1600円 / 機械割約110.5%**。メーカー公表値ではなく攻略モデルとして別定義保持。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_BENEFIT_AND_RELEASE_DATE_CONFLICT**。

## 2019-10-15群 — CLOSED
処理済み:
1. **呪怨 再誕AT** — No.1312。

監査根拠:
- ちょんぼりすた / スロパチネット / みんスロ: 2019-10-15導入で一致。
- 2019-10-12の導入直前記事: 10/15導入パチスロは実質 `S呪怨 再誕AT` 1機種と記録。
- ぱちガブ2019-10-15「10月中旬導入機種」: 10月13日週のパチスロとして `S呪怨 再誕AT` を掲載し、次の10月20日週は `PYRAMID EYE` と `闘魂継承アントニオ猪木という名のパチスロ機`。
- HAZUSEのみ導入開始日2019-10-21のため、導入日の定義/DB差としてCONFLICT保持。

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — 2019-10-07 / No.1307 / 登録済み。
6. プレドキ！ — **プレゴオリジナルスロット第二弾 / プレゴ専用**まではプレゴ公式で固定。P-WORLDは2019-12-02時点で機種DB掲載、後年DBは2019年10月導入とするが、具体導入日未固定のため未登録継続。時系列本線を止めない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-03_oedo-daisousasen.md`**
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **Git追加順の次機種 `リングにかけろ1` を確認**。既QAなら重複編集せず次へ進み、resetBehavior欠損機を最初に正式補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1312 を再取得。
2. 保留 `プレドキ！` は具体導入日の確定資料のみ短く再監査し、未確定なら本線を止めない。
3. **2019-10-21群**へ進む。
4. 既知未処理候補: **`闘魂継承 アントニオ猪木という名のパチスロ機` / `PYRAMID EYE（ピラミッドアイ）`**。
5. 10/21群を全メーカー/別型式/別スペック/PB/地域差まで監査してCLOSED可否を判定。
6. 遡及QAは `リングにかけろ1` からGit追加順に継続。

## 主要出典 — 取得日 2026-09-11
### No.1312 呪怨 再誕AT
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/90938/
- スロパチネット: https://slopachi-net.com/jyuonn
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/29/mo02.php
- 期待値見える化: https://slotjin.com/slot/juonat-reset/
- 一撃 呪縛ST: https://1geki.jp/slot/s_juonat/82/
- 一撃 業BONUS: https://1geki.jp/slot/s_juonat/62/
- HAZUSE: https://hazuse.com/machine/pachislot/9S0114/
- みんスロ: https://minslo.com/s-%E5%91%AA%E6%80%A8-%E5%86%8D%E8%AA%95at/
- 10/15導入直前記事: https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/10/12/233341
- ぱちガブ10月中旬新台情報: https://www.youtube.com/watch?v=su73a66-iHE

### プレドキ！継続監査
- プレゴ公式: https://www.p-prego.com/content.html
- P-WORLD: https://www.p-world.co.jp/machine/database/9067
