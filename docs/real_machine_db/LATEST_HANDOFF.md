更新日: 2026-09-12

## 現在地点
- recordCount: **1410**
- latestRecordAdded: **パチスロ Wake Up, Girls！Seven Memories — No.1410**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-05-10_wake-up-girls-seven-memories.md`
- chronologicalFrontier: **2021-05-10**
- frontierLatestMachine: **パチスロ Wake Up, Girls！Seven Memories — No.1410**
- schema: **resetBehavior v0.7**
- status: **2021-05-10_GROUP_OPEN_1_OF_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1409「スーパーハナハナ-30」を再取得して開始。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 2021-04-19群CLOSED後、2021-04-20〜2021-05-09境界を再監査。今回固定できた次のパチスロ新台群は2021-05-10。
- 2021-05-10群は複数導入カレンダー・機種DBで **SLOTアルドノア・ゼロ / パチスロ Wake Up, Girls！Seven Memories / 豪炎高校應援團 檄** の3機で一致。
- 群先頭としてNo.1410「パチスロ Wake Up, Girls！Seven Memories」を追加。
- カルミナ公式、HAZUSE、1geki、なな徹、K-Navi、パチマガスロマガ、ちょんぼりすた、当時立ち回り資料を横断し、性能コアとresetBehavior v0.7を同時収集。
- 設定変更時は有利区間・通常天井・ごめんね！ランク・神様ポイント・CZ追加アイコンをRESET。純電断/据え置きではCARRY_OVER。
- 通常時有利区間ランプ点灯型のため、未対策なら朝一消灯=設定変更濃厚、点灯=据え置き濃厚。液晶表示自体は設定変更/据え置きで見た目上差がない。
- 有利区間移行時CZ天井振り分け（設定1）50G 2.34% / 100G 23.44% / 250G 0.78% / 500G 73.44%をreset numeric dataとして保存。
- 検定番号はHAZUSE URLに `machine_code=0S1513` があるが、現存本文で検定番号と明示する独立記載を固定できず、推測転記せず `UNVERIFIED_AFTER_RESEARCH`。
- 遡及resetBehavior QAは本線優先のため今回は進めず、前回カーソルを維持。

## No.1410 — パチスロ Wake Up, Girls！Seven Memories
- path: `docs/real_machine_db/machines/2021-05-10_wake-up-girls-seven-memories.md`
- manufacturer: **カルミナ（製造: ネット株式会社）**
- formalModel: **S Wake Up， Girls！NC**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-05-10**
- generation/system: **6.1号機 / AT / 擬似ボーナスループ / 技術介入要素あり**
- payoutRateBySetting: **98.0 / 99.2 / 100.5 / 103.9 / 107.4 / 110.1%**
- ARENA ROULETTE: **1/318 / 308 / 298 / 284 / 271 / 253**
- WUG！LIVE: **1/541 / 521 / 501 / 476 / 454 / 424**
- Wake Up, Bonus！: **1/774 / 755 / 735 / 705 / 674 / 625**
- baseGamesPer50: **約41.1G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **Wake Up, Bonus！約60枚 / WUG！LIVE平均約650枚 / BIG約152〜172枚 / REG約60枚 / SBB約150枚 / Polaris約180枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_CZ_CEILING**

### resetBehavior v0.7 — No.1410
- 設定変更: **有利区間・天井・ごめんね！ランク・神様ポイント・CZ追加アイコンRESET**。
- 据え置き/純電断: **上記を内部的にCARRY_OVER**。
- 通常天井: **有利区間移行後777G+α → ARENA ROULETTE**。設定変更専用固定短縮天井は確認できない。
- CZ天井（有利区間移行時/設定1）: **50G 2.34% / 100G 23.44% / 250G 0.78% / 500G 73.44%**。100G以内合計25.78%。
- 朝一画面: 設定変更/据え置きとも島田真夢ステージで見た目上差なし。
- 有利区間ランプ: 通常時点灯型。未対策なら**消灯=設定変更濃厚 / 点灯=据え置き濃厚**。
- 据え置き時、前日CZ追加アイコン保有なら初回CZのキャラランプ状態が判別材料になる場合あり。
- ガックン条件/発生率、設定変更専用ごめんね！ランク初期振り分けは `UNVERIFIED_AFTER_RESEARCH`。

## 2021-05-10群 — OPEN
1. **パチスロ Wake Up, Girls！Seven Memories — No.1410 / DONE**
2. **SLOTアルドノア・ゼロ — No.1411候補 / NEXT**
3. **豪炎高校應援團 檄 — No.1412候補 / PENDING**

- status: **2021-05-10_GROUP_OPEN_1_OF_3_PROCESSED**
- 群を閉じる前に全メーカー・地域機・別型式・PB・延期差を再監査する。

## 次回本線の再開地点
- 最新main再同期後、**2021-05-10「SLOTアルドノア・ゼロ」— No.1411候補**から継続。
- その後 **「豪炎高校應援團 檄」— No.1412候補**を処理。
- 2機処理後に2021-05-10群を再監査してCLOSED可否を判定し、次の確認済み日付2021-05-24群へ進む。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 既存性能値をやり直さずreset側のみ正式再探索する。

## GitHub保存
- No.1410追加 commit: `d9d1e4adeba1557893ac5726e3da034046362d39`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1410 WUG
- https://carmina-gaming.co.jp/product/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-wake-up-girls%EF%BC%81-seven-memories/
- https://carmina-gaming.co.jp/product/release/2021/
- https://data.hazuse.com/?detail_id=166737&genre=202&machine_code=0S1513
- https://data.hazuse.com/?genre=207&machine_code=0S1513
- https://1geki.jp/slot/s_wakeupgirls/
- https://1geki.jp/slot/s_wakeupgirls/1/
- https://nana-press.com/kaiseki/machine/122/
- https://nana-press.com/kaiseki/machine/122/3609/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/03/kr01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/03/tj09.php
- https://chonborista.com/slot/carmina/134468/
- https://www.slopachi-quest.com/article/s-wake-up-girls-seven-memories-tenjou/
- https://hisshobon.news/column/1394/

### 2021-05-10群監査
- https://www.slopachi-quest.com/article/2021-dounyuukisyu/
- https://hisshobon.news/column/1394/
- https://nana-press.com/kaiseki/machine/121/
- https://1geki.jp/slot/s_goeng/
