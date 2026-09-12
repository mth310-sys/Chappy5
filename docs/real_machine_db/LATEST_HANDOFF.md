更新日: 2026-09-13

## 現在地点
- recordCount: **1511**
- latestRecordAdded: **パチスロ 新鬼武者2 — No.1511**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-08-08_pachislot-shin-onimusha2.md`
- chronologicalFrontier: **2022-08-08**
- frontierLatestMachine: **パチスロ 新鬼武者2 — No.1511**
- schema: **resetBehavior v0.7**
- status: **2022-08-08_GROUP_OPEN_1_OF_2_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1510 `パチスロ FAIRY TAIL2` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 前回会話地点No.1505よりmainが先行していたため既処理へ戻らず、最新handoffの次機種No.1511 `パチスロ 新鬼武者2` を性能コア＋resetBehavior v0.7で追加。
- 遊技日本/P-WORLD等の2022-08-08導入情報を横断し、同日既知パチスロ群は `パチスロ 新鬼武者2 / 政宗 戦極` の2機。No.1511処理後のため群はOPEN 1/2。
- PB・地域先行・延期・別型式候補は次機種処理後のCLOSED監査で再確認する。

## No.1511 — パチスロ 新鬼武者2
- path: `docs/real_machine_db/machines/2022-08-08_pachislot-shin-onimusha2.md`
- manufacturer: **エンターライズ（製造元） / ユニバーサルエンターテインメント（総発売元）**
- formalModel: **S新鬼武者2ZC**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-08-08**
- generation/system: **6.5号機 / 擬似ボーナス+AT**
- payoutRate: **98.2 / 99.5 / 100.5 / 105.4 / 107.7 / 110.1%**
- AT初当り: **1/405.2 → 1/262.2**
- baseGamesPer50: **約37G/50枚**
- netIncrease: **AT約2.0枚/G / 擬似ボーナス約4.0枚/G**
- basicPayout: **AT初回40G・継続時30G / 真蒼剣BONUS約160枚 / 蒼剣BONUS約100枚 / 鬼BONUS約48枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_DIRECT_RESET_NUMBERS**
- confidence: **OFFICIAL_HIGH_CORE / HIGH_RESET**

### resetBehavior v0.7 — No.1511
- **設定変更**: 有利区間・天井・内部モード・内部状態・CZ回数RESET。内部モード/状態は再抽選。開始は堺ステージ。
- **据え置き**: 有利区間・天井・内部モード・内部状態CARRY_OVER。
- **純電源OFF→ON**: 有利区間・天井・内部モード・内部状態・CZ回数CARRY_OVER。サブ液晶表示情報自体はリセットされるため内部進行と表示を分離。
- **天井**: CZ間333G→BZ、AT間1000G→成功確定BZ→AT。設定変更専用の固定短縮G数は確認されず。
- **モード/テーブル**: 設定変更後およびAT終了後の初回BZはテーブル3以上確定。
- **状態**: 設定変更時初期状態は設定1〜3が通常66.8/高確32.8/超高確0.4%、設定4が56.6/43.0/0.4%、設定5が52.3/46.9/0.8%、設定6が50.0/49.2/0.8%。
- **有利区間**: 設定変更RESET、据え置き/純電断CARRY_OVER。通常時ランプ非点灯・AT中点灯タイプで朝一ランプ判別不可。
- **朝一恩恵**: 初回BZテーブル3以上＋初期高確以上抽選。固定天井短縮ではない。
- **朝一不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 契機なし高確示唆は変更期待度UP。初回BZでテーブル2以下なら設定変更否定=据え置き判断材料。固有ガックン条件/発生率はUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 初回BZテーブル3以上確定 / 初期高確以上 設定1〜3 33.2%、設定4 43.4%、設定5 47.7%、設定6 50.0% / CZ間333G / AT間1000G。
- `2Sxxxx`形式の検定番号は型式名・メーカー・検定通過・公安委員会等へ検索語を変え再探索したが固定できず推測していない。

## 2022-08-08群 — OPEN 1/2 known
1. `パチスロ 新鬼武者2` — **No.1511 処理済み**
2. `政宗 戦極` — **No.1512候補 / 未処理**

群監査メモ:
- 遊技日本/P-WORLDで新鬼武者2の2022-08-08全国導入を確認。
- 遊技日本で政宗 戦極（型式S政宗 戦極A5）の2022-08-08全国導入を確認。
- 次回No.1512処理後、PB・地域先行・延期・別型式を含め同日群を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線8/8群を前進したため、遡及QAカーソルは変更しない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）**。

## 次回本線の再開地点
- **No.1512候補 `政宗 戦極`**。
- No.1512処理後に2022-08-08群をクロス監査し、CLOSEDなら08-09以降の次群へ前進する。

## GitHub保存
- No.1511追加 commit: `28fd3f975065c4bee10c6560560a795ee2ab44e8`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1511 パチスロ 新鬼武者2
- https://www.universal-777.co.jp/news/20220606001539/
- https://yugi-nippon.com/pachinko-new-machine/post-53139/
- https://web-greenbelt.jp/post-59830/
- https://www.pachibee.jp/machines/index/222070001
- https://slothack.net/matome/77996/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/25/kr01.php
- https://p.hisshobon.jp/machine/3930/1/89332
- https://p.hisshobon.jp/machine/3930/1/90727
- https://nana-press.com/kaiseki/machine/397/10830/
- https://nana-press.com/kaiseki/machine/397/10677/
- https://slot-seven.com/so2-settei/

### 2022-08-08群監査 / 次機種
- https://news.p-world.co.jp/articles/21398/nippon
- https://yugi-nippon.com/pachinko-new-machine/post-53141/
