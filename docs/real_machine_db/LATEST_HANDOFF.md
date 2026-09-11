更新日: 2026-09-12

## 現在地点
- recordCount: **1409**
- latestRecordAdded: **スーパーハナハナ-30 — No.1409**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-04-19_super-hanahana-30.md`
- chronologicalFrontier: **2021-04-19**
- frontierLatestMachine: **スーパーハナハナ-30 — No.1409**
- schema: **resetBehavior v0.7**
- status: **2021-04-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1407「ぱちスロ 沖ハナ-30」を再取得して開始。
- 並行更新を検出し、前回チャット地点No.1404からの重複登録を避け、main正本のNo.1407を引き継いだ。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 2021-04-19群の残り2型式、No.1408「スーパーハナハナ（25Φ）」とNo.1409「スーパーハナハナ-30」を追加。
- パイオニア発表会を扱う業界記事、P-WORLD業界ニュース、HAZUSE、一撃、なな徹、必勝本系、ちょんぼりすた、当時立ち回り資料を横断し、性能コアとresetBehavior v0.7を同時収集。
- 25Φ/30Φは性能共通だが、型式 `SスーパーハナハナV1 / 0S1624` と `SスーパーハナハナV1-30 / 0S0985` が別のため独立レコード化。
- 設定変更時は天井・内部モード・内部状態・有利区間RESET、純電断ではCARRY_OVER。通常時有利区間ランプは基本消灯型で、朝一消灯だけでは変更判別不可。
- 設定変更後にもスーハナモード突入チャンスがあることは業界一次系で固定。設定変更専用の正確な各モード初期振り分け率、内部状態初期振り分け率、本機固有ガックン条件/発生率は検索語・型式・25/30Φ・資料系統を変えて再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 2021-04-19群は既知6機すべて処理し、当時新台カレンダー・メーカー別一覧・業界導入記事を再監査。追加未処理型式を確認できなかったためCLOSED。
- 遡及resetBehavior QAは本線優先のため今回は進めず、前回カーソルを維持。

## No.1408 — スーパーハナハナ
- path: `docs/real_machine_db/machines/2021-04-19_super-hanahana.md`
- manufacturer: **パイオニア**
- formalModel: **SスーパーハナハナV1**
- certificationNumber: **0S1624**
- releaseDate: **2021-04-19**
- generation/system: **6.1号機 / 25Φ / AT / 完全告知 / 擬似ボーナス連チャン**
- payoutRateBySetting: **98.0 / 99.0 / 101.0 / 104.0 / 106.0 / 108.0%**
- 初当り: **1/218 / 209 / 193 / 179 / 166 / 148**
- BIG: **1/196 / 183 / 169 / 157 / 145 / 134**
- REG: **1/380 / 356 / 329 / 308 / 286 / 265**
- baseGamesPer50: **約49.8G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG約150枚 / REG約60枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITHOUT_RESET_MODE_RATE**

## No.1409 — スーパーハナハナ-30
- path: `docs/real_machine_db/machines/2021-04-19_super-hanahana-30.md`
- manufacturer: **パイオニア**
- formalModel: **SスーパーハナハナV1-30**
- certificationNumber: **0S0985**
- releaseDate: **2021-04-19**
- generation/system: **6.1号機 / 30Φ / AT / 完全告知沖スロ / 擬似ボーナス連チャン**
- performance: **No.1408と共通（別型式として独立保存）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITHOUT_RESET_MODE_RATE**

### resetBehavior v0.7 — No.1408 / 1409
- 設定変更: **天井・内部モード・内部状態・有利区間RESET**。
- 据え置き/純電断: **天井・内部モード・内部状態・有利区間CARRY_OVER**。
- 天井: 通常最大999G、スーハナ / 超スーハナ / 極スーハナ滞在時32G。設定変更後に必ず32Gとなる固定短縮契約ではない。
- 朝一恩恵: 設定変更後にもスーハナモードへ直接移行するチャンスあり。正確な設定変更専用移行率は `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプ: 通常時基本消灯型。朝一消灯だけでは設定変更判別不可。朝一点灯なら据え置き濃厚材料だが、前日の区間状態依存。
- 当時攻略上のリセット狙い目0〜64Gは期待値目安として保存し、設定変更専用当選率とは分離。
- ガックン: 本機固有条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

## 2021-04-19群 — CLOSED
1. **パチスロAngel Beats! — No.1404 / DONE**
2. **デジスロ — No.1405 / DONE**
3. **パチスロ マクロスデルタ — No.1406 / DONE**
4. **ぱちスロ 沖ハナ-30 — No.1407 / DONE**
5. **スーパーハナハナ — No.1408 / DONE**
6. **スーパーハナハナ-30 — No.1409 / DONE**

- status: **2021-04-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**
- 当時新台カレンダー、メーカー別一覧、25Φ/30Φ別型式、地域/段階導入を再監査し、追加未処理機を確認できずCLOSED。

## 次回本線の再開地点
- 最新main再同期後、**2021-04-20〜2021-05-09境界監査**を実施する。
- 現時点の次の確認済み候補は **2021-05-10「パチスロ Wake Up, Girls！Seven Memories」— No.1410候補**。
- 2021-05-10群を全メーカー・地域機・別型式・PB・延期差まで再監査してから採番する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 既存性能値をやり直さずreset側のみ正式再探索する。

## GitHub保存
- No.1408追加 commit: `f194b1885303c4cecdd5b55e4be2354584dd5509`
- No.1409追加 commit: `f28b515081c895814d50cfde1e055659b14a5fbd`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1408 / No.1409 スーパーハナハナ25&30
- https://www.pidea.jp/articles/1612761356
- https://news.p-world.co.jp/articles/16319/nippon
- https://hazuse.com/machine/pachislot/0S1624/
- https://hazuse.com/machine/pachislot/0S1624/genre/207/
- https://hazuse.com/machine/pachislot/0S0985/
- https://1geki.jp/slot/s_s_hanahana/
- https://1geki.jp/slot/s_s_hanahana30/
- https://nana-press.com/kaiseki/machine/118/3433/
- https://hisshobon.news/analyze/911/
- https://chonborista.com/slot/pionia-slot/131943/
- https://slotjin.com/tenjoukitaichi/superhana/

### 次回境界確認
- https://ichikatsu.com/newslot/
- https://1geki.jp/slot/s_wakeupgirls/
