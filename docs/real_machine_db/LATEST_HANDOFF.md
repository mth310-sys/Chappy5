更新日: 2026-09-12

## 現在地点
- recordCount: **1430**
- latestRecordAdded: **パチスロ楽園追放 — No.1430**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-09-06_rakuen-tsuiho.md`
- chronologicalFrontier: **2021-09-06**
- frontierLatestMachine: **パチスロ楽園追放 — No.1430**
- schema: **resetBehavior v0.7**
- status: **2021-09-06_GROUP_OPEN_3_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1429「パチスロ麻雀物語4」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定どおり、次の未処理機種No.1430「パチスロ楽園追放」を追加。
- 遡及resetBehavior QAは本線を優先して今回は進めず、次カーソル「機動警察パトレイバーX」を維持。

## No.1430 — パチスロ楽園追放
- path: `docs/real_machine_db/machines/2021-09-06_rakuen-tsuiho.md`
- manufacturer: **サミー（製造元: ロデオ）**
- formalModel: **S 楽園追放 FS**
- certificationNumber: **1S0218**
- releaseDate: **2021-09-06**
- generation/system: **6.1号機 / AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.5 / 100.9 / 104.5 / 108.1 / 109.0%**
- AT/BIG/RD初当たり合算: **1/164.5 / 1/160.1 / 1/147.9 / 1/134.0 / 1/121.3 / 1/111.1**
- FS防衛戦初当たり: **1/575.1 / 1/542.4 / 1/484.9 / 1/412.1 / 1/353.1 / 1/310.0**
- CZ RD: **1/323.1 / 1/308.1 / 1/270.8 / 1/226.7 / 1/190.2 / 1/165.4**
- baseGamesPer50: **約38G/50枚**
- netIncrease: **約4.0枚/G**
- basicPayout: **通常時BIG 25G・約100枚 / FS防衛戦 初期30G+α / 設定1 AT突入時平均約540枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_MORNING_NUMERIC_BENEFIT**

### resetBehavior v0.7 — No.1430
- **設定変更**: 天井・内部状態・有利区間RESET。新規有利区間は高確スタート確定。
- **据え置き/純電源OFF→ON**: 天井・内部状態・有利区間CARRY_OVER。
- **通常天井**: 有利区間移行後の通常時最大650G+αでBIG濃厚。設定変更専用の固定短縮天井は確認できず。
- **朝一恩恵**: 有利区間開始時は高確確定。開始から30G間はCZ当選率アップ。
- **朝一数値**: 設定変更後は100G以内にCZ以上へ当選する期待度60%以上との当時解析あり。通常運用全体の100G以内初当たり50%以上とは別定義で保存。
- **朝一不利/制約**: 有利区間開始後30G間はレア役からBIGに当選しないとされる。
- **変更判別**: 通常時有利区間ランプ点灯型。朝一消灯＝設定変更濃厚、点灯＝据え置き濃厚。ただし前日消灯閉店・店舗側対策等は例外。
- **UNVERIFIED**: 本機固有ガックン条件/発生率、設定変更時の高確内部振り分け、100G以内60%以上の設定別内訳。

## 2021-09-06群 — OPEN
1. **パチスロ うしおととら 雷槍一閃 — No.1428 / DONE**
2. **パチスロ麻雀物語4 — No.1429 / DONE**
3. **パチスロ楽園追放 — No.1430 / DONE**
4. **パチスロ ロリクラ☆ほーるど！ — No.1431候補 / NEXT**
- No.1431処理後、メーカー横断・PB・地域先行・別型式・延期/段階導入を再監査してCLOSED可否を判断する。

## 次回本線の再開地点
- 最新main再同期後、**2021-09-06群「パチスロ ロリクラ☆ほーるど！」No.1431候補**から継続。
- 処理後、2021-09-06群を横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_sangokushi-igt.md`（三國志 / IGTジャパン）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`（機動警察パトレイバーX）**。

## GitHub保存
- No.1430追加 commit: `b931f7f70350467a5754ac0a64791c37c82dfbf8`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1430 パチスロ楽園追放
- https://news.p-world.co.jp/articles/17688/nippon
- https://hazuse.com/machine/pachislot/1S0218/
- https://p-kn.com/slot/3636/
- https://nana-press.com/kaiseki/machine/146/4853/
- https://nana-press.com/kaiseki/machine/146/4932/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/190/kh02-1.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/190/bn01.php
- https://1geki.jp/slot/s_rakuentsuiho/
- https://1geki.jp/slot/s_rakuentsuiho/6/
- https://chonborista.com/slot/sammy-slot/144802/
