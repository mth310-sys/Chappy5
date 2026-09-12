更新日: 2026-09-12

## 現在地点
- recordCount: **1442**
- latestRecordAdded: **パチスロ戦国乙女 暁の関ヶ原-DARKNESS- — No.1442**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-11-08_sengoku-otome-akatsuki-no-sekigahara-darkness.md`
- chronologicalFrontier: **2021-11-08**
- frontierLatestMachine: **パチスロ戦国乙女 暁の関ヶ原-DARKNESS- — No.1442**
- schema: **resetBehavior v0.7**
- status: **2021-11-08_GROUP_OPEN_4_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1441「パチスロGANTZ極 THE SURVIVAL GAME」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定の次機No.1442「パチスロ戦国乙女 暁の関ヶ原-DARKNESS-」を追加。
- 当時業界記事、HAZUSE、なな徹、K-Navi、解析資料を横断し、型式・検定番号・導入日・設定別AT初当たり/機械割・ベース・純増・通常天井・resetBehaviorを照合。
- 設定変更時は有利区間/天井/内部モード/内部状態をRESET。据え置き・純電源OFF→ONでは天井/内部モード/内部状態/有利区間をCARRY_OVER。
- 設定変更専用公開数値として、天井A/B/C=58.2/40.2/1.6%、アルティメットモード5.1%、黄7×3連AT高確中のAT当選率10.2%を保存。通常有利区間移行時の引き戻し50%・アルティメット0.4%等とは分離した。
- 遡及resetBehavior QAは `2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）を再探索。既存性能側 `PARTIAL` は維持し、reset側のみ **PARTIAL_RESEARCH_EXHAUSTED** へ更新。
- 次の遡及QAカーソルはGit追加履歴の直後を確認し、`2007-06_antonio-inoki-mo-moeru-pachislot-ki.md`（アントニオ猪木も燃えるパチスロ機）へ進める。

## No.1442 — パチスロ戦国乙女 暁の関ヶ原-DARKNESS-
- path: `docs/real_machine_db/machines/2021-11-08_sengoku-otome-akatsuki-no-sekigahara-darkness.md`
- manufacturer: **オリンピア（平和）**
- formalModel: **S戦国乙女暁の関ヶ原L7**
- certificationNumber: **1S1071**
- releaseDate: **2021-11-08**
- generation/system: **6.2号機 / AT / ゲーム数上乗せ型 / CZ搭載**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.5 / 99.9 / 105.1 / 108.0 / 111.1%**
- AT初当たり: **1/385.5 / 1/371.5 / 1/352.2 / 1/298.3 / 1/272.5 / 1/248.0**
- baseGamesPer50: **約37.3G/50枚**
- netIncrease: **約2.2枚/G**
- normalCeiling: **通常時634GでCZ / 969G+αでAT**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_RESET_TABLES**

### resetBehavior v0.7 — No.1442
- **設定変更**: 有利区間・天井・内部モード・内部状態RESET。専用天井A/B/Cを再抽選。
- **据え置き**: 天井・内部モード・内部状態・有利区間CARRY_OVER。
- **純電源OFF→ON**: 天井・内部モード・内部状態・有利区間CARRY_OVER。
- **天井/短縮**: A=58.2%（CZ634G/AT969G+α）、B=40.2%（CZ300G/AT635G+α）、C=1.6%（CZ100G/AT435G+α）。
- **モード/状態**: 設定変更時アルティメットモード移行率5.1%（全設定共通）。設定変更後の黄7×3連AT高確中はAT当選率10.2%（全設定共通）。
- **有利区間**: 設定変更でRESET、据え置き/純電断でCARRY_OVER。AT終了時も必ずRESET。
- **朝一恩恵**: 約41.8%で通常より浅い天井B/C、アルティメット5.1%、黄7×3連AT高確。
- **変更判別**: 通常時有利区間ランプ点灯型。未対策なら朝一消灯=設定変更濃厚、点灯=据え置き濃厚。前日消灯閉店・店舗対策は例外。
- **公開朝一数値**: 天井A/B/C振り分け、アルティメット5.1%、黄7×3連10.2%を固定。本機固有ガックン条件はUNVERIFIED_AFTER_RESEARCH。

## 2021-11-08群 — OPEN
1. **パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION — No.1439 / DONE**
2. **CCエンジェル — No.1440 / DONE**
3. **パチスロGANTZ極 THE SURVIVAL GAME — No.1441 / DONE**
4. **パチスロ戦国乙女 暁の関ヶ原-DARKNESS- — No.1442 / DONE**
5. **ハイハイシオサイ2 — No.1443候補 / NEXT**
- 群は未CLOSED。次回開始時に全メーカー・PB・地域先行・25/30Φ別型式・延期/段階導入を再監査し、ハイハイシオサイ2処理後に同日群のCLOSED可否を判定する。

## 次回本線の再開地点
- **2021-11-08群 / No.1443候補: ハイハイシオサイ2**。
- 処理後、2021-11-08群を横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `status: PARTIAL` は維持。設定変更後内部DJタイム開始と朝一変更推測は既存根拠を維持し、据え置き/純電断時のRT/DJ状態・残G、本機固有ガックンは再探索後も直接契約を固定できず推測補完しない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06_antonio-inoki-mo-moeru-pachislot-ki.md`（アントニオ猪木も燃えるパチスロ機）**。

## GitHub保存
- No.1442追加 commit: `b199d3c68a0077644aea378728a847b19fe1e93f`
- ディスクアップオルタナティブQA commit: `0ce0fb335aa6bd821aee568d6ba5e2a316bef18f`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1442 パチスロ戦国乙女 暁の関ヶ原-DARKNESS-
- https://news.p-world.co.jp/articles/17793/greenbelt
- https://www.pidea.jp/articles/1631263875
- https://hazuse.com/machine/pachislot/1S1071/
- https://hazuse.com/machine/pachislot/1S1071/genre/207/
- https://nana-press.com/kaiseki/machine/157/6385/
- https://nana-press.com/kaiseki/machine/157/6382/
- https://nana-press.com/kaiseki/machine/157/6589/
- https://chonborista.com/slot/orinpia-slot/150615/
- https://p-kn.com/slot/3669/
- https://ichikatsu.com/otome-darkness/

### 遡及QA ディスクアップオルタナティブ
- https://wave-master.com/ent/du25th/
- https://p-kn.com/topics/news/186/
- https://p-kn.com/slot/688/
- https://slonet.sakura.ne.jp/kouryaku/diskupalu.html
