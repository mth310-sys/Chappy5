更新日: 2026-09-12

## 現在地点
- recordCount: **1450**
- latestRecordAdded: **泡盛 — No.1450**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-12-06_awamori.md`
- chronologicalFrontier: **2021-12-06**
- frontierLatestMachine: **泡盛 — No.1450**
- schema: **resetBehavior v0.7**
- status: **2021-12-06_GROUP_CLOSED_AFTER_6_OF_6_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1449「スターパルサー」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoffの境界監査で追加検出されていたNo.1450候補「泡盛」を追加。
- エレコ製、型式 `S/泡盛/EA`、2021-12-06導入、メーカー公式分類は6号機ノーマル。通常時初当りは必ずBIG、終了後は約90%ループの「オトーリモード」へ入る特殊リアルボーナス連チャン機。
- 性能コアは設定1〜6の機械割97.4/98.8/100.3/101.9/103.3/105.0%、通常状態初当り1/596→1/482、約32G/50枚、BIG約130枚/REG約70枚を保存。機械割・初当り表は現存独立高信頼ソースで表全体の複数照合ができず、単一二次整理表扱いを明示。
- resetBehaviorは通常6号機と異なる特殊契約。解析資料では **設定変更だけではオトーリモード等の状態をリセットしない**。前日連チャン状態で閉店した場合、設定変更後も朝一残存の可能性あり。
- **RAMクリア後は約90%ループの連チャン状態から開始**と解析資料が報告。設定変更とRAMクリアを混同せず別契約として保存。店舗側が手動で状態を落とす対策が可能との注意も保持。
- 天井・有利区間は解析上非搭載扱い。設定変更専用短縮天井、設定変更専用モード振り分け率はなし。
- 純電源OFF→ONだけの場合の内部状態保持、本機固有ガックン、朝一表示/出目による変更判別、検定番号は、機種名/型式/メーカー/設定変更/リセット/朝一/据え置き/電源OFF ON/RAMクリア/ガックン等へ検索語と資料系統を変えても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2021-12-06群を再監査。一撃カレンダーは同日パチスロ6機を掲載し、No.1445〜1450の6機と一致。他の2021年導入一覧も主要5機を確認し、泡盛はメーカー/業界/DMMで12/6導入を独立確認。現時点で追加漏れを示す根拠なしのため12/6群をCLOSED。

## No.1450 — 泡盛
- path: `docs/real_machine_db/machines/2021-12-06_awamori.md`
- manufacturer: **エレコ / ユニバーサルエンターテインメント**
- formalModel: **S/泡盛/EA**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-12-06**
- generation/system: **6号機 / ノーマル / リアルボーナス連チャン / 4thリール**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.4 / 98.8 / 100.3 / 101.9 / 103.3 / 105.0%**
- initialHit: **1/596 / 1/575 / 1/551 / 1/524 / 1/504 / 1/482**
- baseGamesPer50: **約32G**（二次整理表。試験導入実測は約30G前後）
- basicPayout: **BIG約130枚 / REG約70枚**
- otoriMode: **初当りBIG後突入 / ボーナスループ約90%**
- normalCeiling: **NOT_APPLICABLE**
- coreStatus: **COMPLETE_CORE_WITH_SINGLE_SECONDARY_SPEC_TABLE**
- resetBehaviorQA: **COMPLETE_SPECIAL_RESET_CONTRACT_WITH_POWER_CYCLE_DETAIL_UNVERIFIED**

### resetBehavior v0.7 — No.1450
- **設定変更**: 天井なし。解析上、設定変更だけでは内部連チャン状態をリセットしない。前日オトーリモードなら残存可能性あり。
- **据え置き**: 内部状態継続。前日連チャン状態なら朝一残存可能性あり。
- **純電源OFF→ON**: 本機固有の直接契約は十分な再探索後も未固定のため `UNVERIFIED_AFTER_RESEARCH`。設定変更情報から推定補完しない。
- **RAMクリア**: 約90%ループの連チャン状態から開始と解析資料が報告。新装初日/RAMクリアの強い朝一恩恵。ただし店舗側の手動対策可能。
- **ゲーム数/天井**: 天井非搭載のためNOT_APPLICABLE。
- **モード/状態**: 設定変更ではCARRY_OVER、RAMクリア時は連チャン状態STARTという特殊契約。
- **有利区間**: 解析上非搭載扱い。朝一物差しとしてNOT_APPLICABLE。
- **朝一恩恵/不利**: 前日状態残存、またはRAMクリアなら約90%ループ状態。通常状態から単なる設定変更をしただけでは連チャン状態へ上げる恩恵は確認されない。
- **変更判別**: 本機固有ガックン/ランプ/出目の確定契約は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: RAMクリア時の開始連チャン状態 **約90%ループ**。設定変更専用の分布表は確認できず。

## 2021-12-06群 — CLOSED / 6機
1. **マイジャグラーV — No.1445 / DONE**
2. **パチスロ モンスターハンター:ワールド™ 黄金狩猟 — No.1446 / DONE**
3. **S牙狼-黄金騎士- — No.1447 / DONE**
4. **主役は銭形3 — No.1448 / DONE**
5. **スターパルサー — No.1449 / DONE**
6. **泡盛 — No.1450 / DONE**

## 次回本線の再開地点
- **No.1451候補「パチスロミクちゃんとイドムンのミラクルチャレンジ」**。導入日 **2021-12-10** として最優先確認・処理する。
- 12/10単独/変則導入日のため、メーカー公式・業界記事・カレンダーで導入日を再照合してから登録する。
- 次いで **2021-12-13「パチスロうまい棒」**。
- 2021-12-20群には少なくとも「パチスロ 戦姫絶唱シンフォギア 勇気の歌」「沖ドキ！DUO」「沖ドキ！DUO-30」「シンデレラブレイド4」「秘宝伝 解き放たれた女神」「パチスロ リング 運命の秒刻」を確認。日付境界ごとに全メーカー/別型式/PB/30Φ/地域先行/延期差を再監査しながら進む。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-06_antonio-inoki-mo-moeru-pachislot-ki.md`（アントニオ猪木も燃えるパチスロ機）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06-25_triple-crown-30.md`（トリプルクラウン-30）**。
- 今回は本線No.1450と12/6群CLOSED監査を優先し、遡及QAカーソルは進めていない。

## GitHub保存
- No.1450追加 commit: `1ea814fef5d82f5e04fb56c5126b1bb6bbb02bb0`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1450 泡盛
- https://www.universal-777.com/product/slot/awamori/
- https://news.p-world.co.jp/articles/18213/nippon
- https://news.p-world.co.jp/articles/18244/yugitsushin
- https://p-town.dmm.com/machines/4026/recommend
- https://2-9densetsu.com/awamori/
- https://29den.com/awamori/
- https://chonborista.com/slot/universal-slot/158723/
- https://nana-press.com/kaiseki/machine/200/
- https://nana-press.com/kaiseki/machine/200/6842/
- https://p-kn.com/slot/3689/
- https://chonborista.com/slot/universal-slot/149927/
- https://zenrin-net.co.jp/9782/

### 2021-12-06境界監査
- https://1geki.jp/newmachinecalender/202112/
- https://www.slopachi-quest.com/article/2021-dounyuukisyu/
