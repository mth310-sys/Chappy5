更新日: 2026-09-11

## 現在地点
- recordCount: **1330**
- latestRecordAdded: **探偵オペラ ミルキィホームズ 1/2の奇跡 — No.1330**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-01-20_tantei-opera-milky-holmes-half-no-kiseki.md`
- chronologicalFrontier: **2020-01-20**
- frontierLatestMachine: **探偵オペラ ミルキィホームズ 1/2の奇跡 — No.1330**
- schema: **resetBehavior v0.7**
- status: **2020-01-20_GROUP_OPEN_2_OF_4_KNOWN_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1328を再取得し、並行更新を確認してから継続。
- `INDEX.md` は旧19件表示のためREADME指示どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- 2020-01-20群の未処理先頭から **No.1329「パチスロ 花伝-30」**、続いて **No.1330「探偵オペラ ミルキィホームズ 1/2の奇跡」**を追加。
- 2020-01-20群はまだOPEN。次は **スカイガールズ～ゼロノツバサ～**。

## No.1329 — パチスロ 花伝-30
- path: `docs/real_machine_db/machines/2020-01-20_pachislo-hanaden-30.md`
- manufacturer: アムテックス / formalModel: `S花伝M9-30` / certificationNumber: `9S1503`
- releaseDate: 2020-01-20 / 6号機AT / 30φ / 4リール
- payoutRate: **97.4 / 98.8 / 100.5 / 103.5 / 106.2 / 110.1%**
- AT初当り: **1/844.8 / 810.5 / 774.7 / 714.9 / 684.0 / 628.3**
- CZ: **1/97.9 / 95.0 / 92.0 / 89.2 / 87.5 / 82.7**
- base: 約35.9G/50枚 / netIncrease: 約6.2枚/G
- reset: 設定変更で天井G・CZ失敗回数・内部モード/状態・有利区間RESET、純電断/据え置きはCARRY_OVER。有利区間ランプ消灯=変更濃厚/点灯=据え置き濃厚。
- 30φ専用パチ7が25φと内部システム完全同一と明記。25φ `S花伝M4` とは別型式なので独立レコード。
- releaseDateは当時30φ専用資料1/20と後年中古資料1/27が競合。1/20をcanonical、1/27を低権威CONFLICT注記として保持。

## No.1330 — 探偵オペラ ミルキィホームズ 1/2の奇跡
- path: `docs/real_machine_db/machines/2020-01-20_tantei-opera-milky-holmes-half-no-kiseki.md`
- manufacturer: カルミナ（製造ネット） / formalModel: `SミルキィホームズND` / certificationNumber: `9S1338`
- releaseDate: 2020-01-20 / 6号機AT・疑似ボーナス連チャン / AAA400
- payoutRate: **97.9 / 99.6 / 100.9 / 104.2 / 107.9 / 110.1%**
- 初当り: **1/347 / 333 / 321 / 307 / 293 / 277**
- BIG: **1/174 / 166 / 160 / 153 / 145 / 137**
- REG: **1/465 / 445 / 427 / 407 / 388 / 365**
- BONUS合算: **1/127 / 121 / 116 / 111 / 106 / 100**
- base: 約42.3G/50枚（別解析に設定差込み42.3〜44.1G表記あり、定義差保持） / netIncrease: 約2.8枚/G
- basicPayout: BIG100枚+α / REG50枚+α / びよんどTHEミルキィウェイ200枚+α / みるきぃあたっく400〜1000枚+α
- 天井: 有利区間移行後999GでLIVE BONUS。
- reset: 設定変更で天井・内部状態・有利区間RESET/ランプ消灯、純電断・据え置きはCARRY_OVER。朝一ランプ消灯=変更濃厚、点灯=据え置き濃厚。
- 設定変更直後「内部アンコールゾーンの可能性」は当時解析の示唆に留まり、公開確定率がないため確定恩恵にはしない。

## 2020-01-20群監査
1. **パチスロ 花伝-30 — No.1329 処理済み**
2. **探偵オペラ ミルキィホームズ 1/2の奇跡 — No.1330 処理済み**
3. **スカイガールズ～ゼロノツバサ～ — 未処理**
4. **パチスロ 花伝（25φ / S花伝M4） — 未処理**

- status: **OPEN**。残り既知候補処理後、全メーカー/PB/地域差/別型式を再監査してCLOSED可否を判定。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 前回 `2007-03_wild7.md` まで再QA済み。
- 次回: `docs/real_machine_db/machines/2007-03_wanpaku-pilot-daibouken.md`（わんぱくパイロット大冒険）。
- 既存性能値はやり直さずresetBehavior v0.7のみ順次補完。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1330を再取得。
2. 2020-01-20群 **「スカイガールズ～ゼロノツバサ～」**をNo.1331候補として性能コア＋resetBehavior v0.7で登録。
3. 続いて **パチスロ 花伝（25φ / S花伝M4）**。
4. 同日群を全メーカー/PB/地域差/別型式で再監査しCLOSED可否を判定。
5. 遡及QAは **わんぱくパイロット大冒険** から継続。

## 主要出典 — 取得日 2026-09-11

### No.1329 花伝-30
- https://pachiseven.jp/machines/5957
- https://www.yugitsushin.jp/news/maker/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%881%E6%9C%8814%E6%97%A5%EF%BC%89-2/
- https://hazuse.com/machine/pachislot/9S1112/genre/207/
- https://chonborista.com/slot/amute/99069/

### No.1330 ミルキィホームズ 1/2の奇跡
- https://carmina-gaming.co.jp/product/milkyholmes/
- https://www.yugitsushin.jp/open/maker/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%8812%E6%9C%889%E6%97%A5%EF%BC%89/
- https://www.p-world.co.jp/machine/database/9107
- https://chonborista.com/slot/carmina/103519/
- https://oslo-opachi.com/2020/01/16/milkyholmes_tennjyou/
