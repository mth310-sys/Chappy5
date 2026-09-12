更新日: 2026-09-13

## 現在地点
- recordCount: **1525**
- latestRecordAdded: **パチスロRYUKYU BEAT-30 — No.1525**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-10-03_pachislot-ryukyu-beat-30.md`
- chronologicalFrontier: **2022-10-03**
- frontierLatestMachine: **パチスロRYUKYU BEAT-30 — No.1525**
- schema: **resetBehavior v0.7**
- status: **2022-10-03_GROUP_OPEN_3_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1524 `パチスロ バイオハザード RE:2` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の2022-10-03群を継続し、No.1525 `パチスロRYUKYU BEAT-30` を性能コア＋resetBehavior v0.7で追加。
- 10/3群known候補は `パチスロハードボイルド`、`パチスロ バイオハザード RE:2`、`パチスロRYUKYU BEAT-30`、`S笑ゥせぇるすまん4` の4機。No.1525まで3/4処理済み。群はまだOPEN。

## No.1525 — パチスロRYUKYU BEAT-30
- path: `docs/real_machine_db/machines/2022-10-03_pachislot-ryukyu-beat-30.md`
- manufacturer: **ロデオ（サミーブランド/販売）**
- formalModel: **S RYUKYU Beat-30 FR**
- inspectionCode: **1S1418**
- releaseDate: **2022-10-03**
- generation/system: **6.1号機 / 30Φ / NEO-A / 擬似ボーナスAT / 完全告知**
- payout: **97.5 / 98.9 / 101.1 / 106.1 / 109.2%**（設定1/2/3/5/6、設定L数値未確認）
- 通常時全ボーナス初当り合算: **1/189.4 / 184.6 / 177.7 / 162.3 / 156.7**
- baseGamesPer50: **33.1 / 33.4 / 33.8 / 34.4 / 34.8G/50枚**
- netIncrease: **擬似ボーナス約3.0枚/G**
- basicPayout: **HBB約300枚 / BIG約200枚 / REG約100枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **INDUSTRY / ANALYSIS_HIGH**

### resetBehavior v0.7 — No.1525
- **天井**: 非搭載。設定変更専用短縮天井も `NOT_APPLICABLE`。
- **設定変更**: ボーナス内部抽選状態、成立済みストック、告知待ち状態等の機種別直接契約は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。朝一専用モード・固定初当り優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **据え置き**: 天井カウンタは非該当。成立済みボーナスストック/本前兆等の引継ぎ直接資料は `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: リプレイ報知モードが電源OFFでRESETすることは、なな徹/HAZUSEで直接確認。ただしこれは遊技補助設定で、内部ボーナス状態や設定変更とは分離。その他内部状態は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: 6.1号機ATだが、本機固有の設定変更/据え置き/純電断別直接契約は固定できず `UNVERIFIED_AFTER_RESEARCH`。一般論から補完していない。
- **変更判別**: 本機固有ガックン/初期出目/有利区間ランプ等は `UNVERIFIED_AFTER_RESEARCH`。設定Lの待機中下パネル消灯は「現在L」の判別であり「設定変更判別」とは別。
- **公開朝一数値**: 設定変更専用の比較可能な数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- **注意**: 1G連込み1～100G当選割合60.4～67.8%は通常統計であり、リセット朝一数値には使用しない。

## conflicts / definition notes — No.1525
- 一般DBではメーカー「サミー」表記が多い一方、公安委員会検定通過記事は正式型式 `S RYUKYU Beat-30 FR` を株式会社ロデオとしている。canonicalは `ロデオ（サミーブランド/販売）`。
- 設定1の全ボーナス初当り合算は複数解析で1/189.4、一部紹介動画説明のみ1/189.2。平均せず1/189.4をcanonical、1/189.2を転記/丸め差CONFLICT候補として保持。

## 遡及 resetBehavior QA
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03_wild7.md`（ワイルド7）**。
- 本線を優先し、今回QAカーソルは進めていない。

## 2022-10-03群 — OPEN 3/4 known
1. `パチスロハードボイルド` — **No.1523 処理済み**
2. `パチスロ バイオハザード RE:2` — **No.1524 処理済み**
3. `パチスロRYUKYU BEAT-30` — **No.1525 処理済み**
4. `S笑ゥせぇるすまん4` — **次回 No.1526候補**

群監査メモ:
- 当時導入予定一覧で上記4機を2022-10-03 known候補として固定済み。
- `S笑ゥせぇるすまん4` 処理後、PB・派生・別型式・地域先行・延期/段階導入を再監査し、CLOSED可否を判定する。

## 次回本線の再開地点
- **No.1526候補 `S笑ゥせぇるすまん4` — 2022-10-03。**
- No.1523～1525の性能コアはやり直さず、No.1526から性能コア＋resetBehavior v0.7を収集する。
- No.1526処理後に10/3群のCLOSED監査へ進む。
- 遡及QAは `2007-03_wild7.md` から継続。

## GitHub保存
- No.1525追加 commit: `626f6f052b8f38b31687743357663ef9d29791f1`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1525 パチスロRYUKYU BEAT-30
- https://news.p-world.co.jp/articles/19137/nippon
- https://hazuse.com/machine/pachislot/1S1418/
- https://hazuse.com/machine/pachislot/1S1418/genre/202/
- https://1geki.jp/slot/s_ryukyubeat30/1/
- https://1geki.jp/slot/s_ryukyubeat30/3/
- https://1geki.jp/slot/s_ryukyubeat30/4/
- https://nana-press.com/kaiseki/machine/392/9787/
- https://nana-press.com/kaiseki/machine/392/11997/
- https://pachiseven.jp/machines/6560/cutout/8
