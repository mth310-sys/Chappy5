更新日: 2026-09-12

## 現在地点
- recordCount: **1448**
- latestRecordAdded: **主役は銭形3 — No.1448**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-12-06_shuyaku-wa-zenigata3.md`
- chronologicalFrontier: **2021-12-06**
- frontierLatestMachine: **主役は銭形3 — No.1448**
- schema: **resetBehavior v0.7**
- status: **2021-12-06_GROUP_OPEN_4_OF_5_KNOWN_DONE**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1447「S牙狼-黄金騎士-」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定の次機No.1448「主役は銭形3」を追加。
- 平和、型式 `S銭形3H2`、2021-12-06導入、AT/疑似ボーナス機を当時業界記事、P-WORLD、なな徹、パチマガスロマガ、複数解析で照合。
- 性能コアは設定L/1/2/3/5/6の機械割75.9/97.5/98.5/100.7/106.0/110.0%、BONUS初当たり設定1 1/444.7→設定6 1/334.0、CZ初当たり1/250.8→1/227.4、約36.7G/50枚、純増約6.0枚/Gを保存。
- 基本獲得はREG約100枚 / BIG約400枚 / FUJIKO BONUS約711枚。
- resetBehaviorは設定変更時に実ゲーム数天井を通常最大680G+αから480G+αへ短縮、内部モード/内部状態/有利区間RESET、約50%で高確30Gまたは50Gから開始する公開値を収録。
- 設定変更時高確振り分けは非当選50.0%、30G 43.8%、50G 6.2%。別資料の50G 6.3%は丸め差候補だが平均せずCONFLICT保持。
- 据え置き/純電源OFF→ONは天井・内部モード・内部状態・有利区間ランプ状態を引き継ぐ資料を確認。
- 朝一は有利区間ランプ消灯で設定変更濃厚、点灯で据え置き濃厚。ただし前日消灯状態や店舗側対策を例外として明記。
- 世代表記は複数資料で6.2号機、一部解析で6.1号機表記。平均・独自補正せずCONFLICTとして保持。
- 型式 `S銭形3H2` は複数資料で確認したが、検定番号そのものは検索語・資料系統を変えても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン、設定変更専用の各モード正確振り分けも十分再探索後に未固定。
- 2021-12-06群はhandoff既知5機中4機完了。群はOPENのまま継続。

## No.1448 — 主役は銭形3
- path: `docs/real_machine_db/machines/2021-12-06_shuyaku-wa-zenigata3.md`
- manufacturer: **平和**
- formalModel: **S銭形3H2**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-12-06**
- generation/system: **6.2号機表記優勢（6.1号機表記ありCONFLICT） / AT / 疑似ボーナス / CZ経由**
- settings: **L / 1 / 2 / 3 / 5 / 6**
- payoutRate: **75.9 / 97.5 / 98.5 / 100.7 / 106.0 / 110.0%**
- bonusInitialHit: **L=公開固定値未確認 / 1/444.7 / 1/432.2 / 1/407.4 / 1/360.4 / 1/334.0**
- czInitialHit: **L=公開固定値未確認 / 1/250.8 / 1/248.1 / 1/237.9 / 1/229.6 / 1/227.4**
- baseGamesPer50: **約36.7G**
- netIncrease: **約6.0枚/G**
- basicPayout: **REG約100枚 / BIG約400枚 / FUJIKO BONUS約711枚**
- normalCeiling: **内部カウンター最大999G+α / 実ゲーム数最大680G+α**
- coreStatus: **COMPLETE_CORE_WITH_GENERATION_LABEL_CONFLICT_AND_INSPECTION_CODE_UNVERIFIED**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_480G_REAL_GAME_CEILING_AND_HIGH_STATE_RATE**

### resetBehavior v0.7 — No.1448
- **設定変更**: 天井・内部モード・内部状態・有利区間RESET。実ゲーム数天井480G+αへ短縮。
- **据え置き**: 天井・内部モード・内部状態・有利区間ランプ状態をCARRY_OVER。
- **純電源OFF→ON**: 天井・内部モード・内部状態・有利区間ランプ状態をCARRY_OVER。
- **天井/短縮**: 通常の実ゲーム数最大680G+α → 設定変更時480G+α。
- **モード/状態**: 設定変更時に再抽選。高確は非当選50.0%、30G 43.8%、50G 6.2%（別資料6.3%）。各モードのリセット専用正確振り分けは未固定。
- **有利区間**: 設定変更時RESET・ランプ消灯。通常時点灯型。
- **朝一恩恵**: 実ゲーム数天井短縮 + 約50%で高確30G/50G開始。
- **変更判別**: 朝一ランプ消灯で設定変更濃厚、点灯で据え置き濃厚。前日消灯状態や店舗側対策は例外。ガックンは未固定。
- **公開朝一数値**: 実ゲーム数天井480G+α、高確30G 43.8%、高確50G 6.2%。

## 2021-12-06群 — OPEN
1. **マイジャグラーV — No.1445 / DONE**
2. **パチスロ モンスターハンター:ワールド™ 黄金狩猟 — No.1446 / DONE**
3. **S牙狼-黄金騎士- — No.1447 / DONE**
4. **主役は銭形3 — No.1448 / DONE**
5. **スターパルサー — No.1449候補 / NEXT**

## 次回本線の再開地点
- **No.1449候補「スターパルサー」**。
- 型式候補 `SスターパルサーYTCC`、2021-12-06群として処理する。
- スターパルサー完了後に12/6群をメーカー別/別型式/PB/地域先行・延期/段階導入まで再監査し、CLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-06_antonio-inoki-mo-moeru-pachislot-ki.md`（アントニオ猪木も燃えるパチスロ機）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `status: PARTIAL` は維持。50枚ベース未確定や既存CONFLICTを崩していない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06-25_triple-crown-30.md`（トリプルクラウン-30）**。
- 今回は本線No.1448と12/6群継続を優先し、遡及QAカーソルは進めていない。

## GitHub保存
- No.1448追加 commit: `9ff851ee8beee12e55499aa0ba67e7a27d6a7d31`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1448 主役は銭形3
- https://news.p-world.co.jp/articles/18795/greenbelt
- https://news.p-world.co.jp/articles/18092/yugitsushin
- https://www.p-world.co.jp/machine/database/9497
- https://nana-press.com/kaiseki/machine/162/6863/
- https://nana-press.com/kaiseki/machine/162/6971/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/49/tj04.php
- https://chonborista.com/slot/orinpia-slot/152935/
- https://kanzenkokuchi.jp/news/2390.php
- https://ichikatsu.com/zenigata3/
- https://www.marimo0925.net/pachislot-syuyakuhazenigata3-shinkisyu/
- https://zenrin-net.co.jp/10159/
