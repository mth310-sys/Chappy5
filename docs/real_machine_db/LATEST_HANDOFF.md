更新日: 2026-09-13

## 現在地点
- recordCount: **1513**
- latestRecordAdded: **チバリヨ-25 — No.1513**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-08-08_chibariyo-25.md`
- chronologicalFrontier: **2022-08-08**
- frontierLatestMachine: **チバリヨ-25 — No.1513**
- schema: **resetBehavior v0.7**
- status: **2022-08-08_GROUP_CLOSED_3_OF_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1512 `政宗 戦極` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種No.1513 `チバリヨ-25` を性能コア＋resetBehavior v0.7で追加。
- メーカー発表・1geki・K-Navi等で、30φ版 `チバリヨ-30` の25φ版としてゲーム性・内部スペックを完全移植した機種であることを確認。一方、型式 `SチバリヨNC` / 検定番号 `1S0371` は30φ版 `SチバリヨZH-30` / `1S0017` と異なるため独立レコード化した。
- 25φ固有資料で2022-08-08導入、設定別初当り/機械割、33.7G/50枚、約3.0枚/G、BIG約210枚、REG約90枚、900G/チェリー40回天井を確認。
- resetBehaviorは25φ固有の有利区間ランプ解析とモード資料を優先。純電源OFF→ON、設定変更/据え置き時のゲーム数・チェリー回数個別契約、内部状態、固有ガックンは30φ元機を含む再探索でも確定できず `UNVERIFIED_AFTER_RESEARCH` とし、完全移植記述だけを根拠に推測転記しなかった。
- 2022-08-08群を再監査し、`パチスロ 新鬼武者2` / `政宗 戦極` / `チバリヨ-25` の既知3機を処理済みとして **CLOSED 3/3** に更新。
- 次群2022-08-22はGreenbeltの当日新台スケジュールでパチスロ `パチスロ閃乱カグラBURST UP` 1機を確認。次回は漏れ監査を追加してからNo.1514として処理する。

## No.1513 — チバリヨ-25
- path: `docs/real_machine_db/machines/2022-08-08_chibariyo-25.md`
- manufacturer: **ネット**
- formalModel: **SチバリヨNC**
- inspectionCode: **1S0371**
- releaseDate: **2022-08-08**
- generation/system: **6.1号機 / 25φ / 疑似ボーナスAT**
- payoutRate: **設定1 97.9 / 2 99.2 / 3 101.1 / 4 103.2 / 5 105.3 / 6 107.5%**
- bonusInitialHit: **1/240 → 1/189**
- BIG: **1/198 → 1/148**
- REG: **1/302 → 1/260**
- baseGamesPer50: **33.7G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG 70G約210枚 / REG 30G約90枚 / ボーナス後32G連チャンゾーン**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_PARTIAL_UNVERIFIED_POWER_CYCLE**
- confidence: **OFFICIAL_EQUIVALENCE / ANALYSIS_HIGH_CORE / ANALYSIS_HIGH_RESET_DETECTION**

### resetBehavior v0.7 — No.1513
- **設定変更**: モード再抽選。朝一有利区間ランプ消灯は設定変更濃厚。有利区間リセット後は50%以上で天国チャンスA/B/パトランプ準備。
- **据え置き**: 朝一有利区間ランプ点灯は据え置き濃厚。ただし前日最終状態・店舗対策の例外あり。ゲーム数/チェリー回数/内部モード・状態の個別CARRY_OVERは直接資料不足でUNVERIFIED。
- **純電源OFF→ON**: 天井G数、チェリー回数、内部モード/状態は25φ固有資料と30φ元機資料を横断しても確定できずUNVERIFIED_AFTER_RESEARCH。
- **天井**: 通常時最大900Gまたはチェリー最大40回。設定変更専用の固定短縮天井はNONE_CONFIRMED_AFTER_RESEARCH。
- **モード**: 設定変更時に再抽選。有利区間リセット後は50%以上で天国チャンス系。個別振り分けはUNVERIFIED。
- **状態**: モードとは別軸の内部状態契約はUNVERIFIED_AFTER_RESEARCH。
- **有利区間**: 設定変更時RESETを朝一ランプ契約と有利区間リセット後モード抽選からHIGH confidence。消灯後基本1Gで点灯、ボーナス後32G経過時の一部/完走後にも消灯。
- **朝一恩恵**: 有利区間リセット後50%以上で天国チャンスA/B/パトランプ準備。
- **朝一不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: ランプ点灯=据え置き濃厚、消灯=設定変更濃厚。ただし前日消灯ヤメ等の例外あり。本機固有ガックンはUNVERIFIED。
- **公開朝一数値**: 有利区間リセット後50%以上で天国チャンス系。個人実機集計のチェリー5/10回以内当選率はcanonical不採用。

## 2022-08-08群 — CLOSED 3/3
1. `パチスロ 新鬼武者2` — **No.1511 処理済み**
2. `政宗 戦極` — **No.1512 処理済み**
3. `チバリヨ-25` — **No.1513 処理済み**

群監査メモ:
- 遊技日本/P-WORLD/ALL7/1geki等で2022-08-08導入群を横断。
- `チバリヨ-25` は30φ版と内部スペック同一ながら別型式・別検定番号の25φ派生のため独立レコード化。
- 現時点で2022-08-08群の追加未処理パチスロは確認できずCLOSED。

## 次群 2022-08-22 — OPEN 0/1 known
1. `パチスロ閃乱カグラBURST UP` — **No.1514候補 / 未処理**

群監査メモ:
- Greenbelt/P-WORLD 2022-08-22新台スケジュールでは同日導入パチスロは `パチスロ閃乱カグラBURST UP` の1機。
- K-Navi、HAZUSE、複数解析も2022-08-22導入で一致。
- 次回開始時にPB・地域先行・延期・別型式を追加監査してから処理する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線8/8群を前進したため、遡及QAカーソルは変更しない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）**。

## 次回本線の再開地点
- **No.1514候補 `パチスロ閃乱カグラBURST UP` — 2022-08-22**。
- 既確認: 型式 `S閃乱カグラBURSTUP／L4`、検定番号 `2S0491`、オーイズミラボ、6.5号機AT、純増約8.1枚/G。
- 次回は2022-08-22群の最終漏れ監査後、性能コア＋resetBehavior v0.7を収集して保存する。

## GitHub保存
- No.1513追加 commit: `34cf70ba29ea83a656fcc811e03ad5ab33dd30d6`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1513 チバリヨ-25
- https://www.dreamnews.jp/press/0000261490/
- https://1geki.jp/slot/s_chibariyo25/
- https://1geki.jp/slot/s_chibariyo25/3/
- https://1geki.jp/slot/s_chibariyo25/4/
- https://1geki.jp/slot/s_chibariyo25/5/
- https://hazuse.com/machine/pachislot/1S0371/genre/201/
- https://www.p-world.co.jp/machine/database/9677
- https://p.hisshobon.jp/machine/3946/1/90237
- https://pachinavi.net/machines/chibariyo-25/tenjo/
- https://1geki.jp/slot/s_chibariyo/3/
- https://hazuse.com/machine/pachislot/1S0017/
- https://hisshobon.news/analyze/1847/

### 2022-08-22群 / 次機種
- https://news.p-world.co.jp/articles/21494/greenbelt
- https://p-kn.com/slot/3829/
- https://hazuse.com/machine/pachislot/2S0491/
- https://ichikatsu.com/newslot2022/
