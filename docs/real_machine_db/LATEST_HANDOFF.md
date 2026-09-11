更新日: 2026-09-11

## 現在地点
- recordCount: **1332**
- latestRecordAdded: **パチスロ 花伝 — No.1332**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-01-20_pachislo-hanaden.md`
- chronologicalFrontier: **2020-01-20**
- frontierLatestMachine: **パチスロ 花伝 — No.1332**
- schema: **resetBehavior v0.7**
- status: **2020-01-20_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1328を再取得してから継続。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- 2020-01-20群を時系列で処理し、**No.1329 パチスロ 花伝-30 / No.1330 探偵オペラ ミルキィホームズ 1/2の奇跡 / No.1331 スカイガールズ～ゼロノツバサ～ / No.1332 パチスロ 花伝** を追加。
- 1geki 2020年1月導入カレンダーは2020-01-20スロット4機として上記4機を列挙。ALL7等の別系統導入一覧とも照合し、追加の同日独立登録候補を確認できなかったため **2020-01-20_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とする。
- 1geki 2020年2月カレンダーを先行監査し、次の確認済みスロット導入群は **2020-02-03「パチスロ 青鬼」**。

## No.1329 — パチスロ 花伝-30
- path: `docs/real_machine_db/machines/2020-01-20_pachislo-hanaden-30.md`
- manufacturer: アムテックス（総販売元HEIWA） / formalModel: `S花伝M9-30` / certificationNumber: `9S1503`
- releaseDate: 2020-01-20 / 6号機AT / 30φ / 4リール
- payoutRate: **97.4 / 98.8 / 100.5 / 103.5 / 106.2 / 110.1%**
- AT初当り: **1/844.8 / 810.5 / 774.7 / 714.9 / 684.0 / 628.3**
- CZ: **1/97.9 / 95.0 / 92.0 / 89.2 / 87.5 / 82.7**
- base: 約35.9G/50枚 / netIncrease: 約6.2枚/G
- resetBehavior: 設定変更で天井G・CZ失敗回数・内部モード/状態・有利区間RESET、純電断/据え置きはCARRY_OVER。有利区間ランプ消灯=変更濃厚/点灯=据え置き濃厚。
- 30φ専用資料は25φと内部システム完全同一と明記。25φ `S花伝M4` とは別型式なので独立レコード。
- releaseDateは当時30φ専用資料1/20と後年中古資料1/27が競合。1/20をcanonical、1/27を低権威CONFLICT注記として保持。

## No.1330 — 探偵オペラ ミルキィホームズ 1/2の奇跡
- path: `docs/real_machine_db/machines/2020-01-20_tantei-opera-milky-holmes-half-no-kiseki.md`
- manufacturer: カルミナ（製造ネット） / formalModel: `SミルキィホームズND` / certificationNumber: `9S1338`
- releaseDate: 2020-01-20 / 6号機AT・疑似ボーナス連チャン / AAA400
- payoutRate: **97.9 / 99.6 / 100.9 / 104.2 / 107.9 / 110.1%**
- 初当り: **1/347 / 333 / 321 / 307 / 293 / 277**
- BIG: **1/174 / 166 / 160 / 153 / 145 / 137** / REG: **1/465 / 445 / 427 / 407 / 388 / 365**
- base: 約42.3G/50枚（別解析に設定差込み42.3〜44.1G表記あり、定義差保持） / netIncrease: 約2.8枚/G
- 天井: 有利区間移行後999GでLIVE BONUS。
- resetBehavior: 設定変更で天井・内部状態・有利区間RESET/ランプ消灯、純電断・据え置きはCARRY_OVER。朝一ランプ消灯=変更濃厚、点灯=据え置き濃厚。
- 設定変更直後の内部アンコールゾーン可能性は解析示唆に留まり、公開確定率がないため確定恩恵にはしない。

## No.1331 — スカイガールズ～ゼロノツバサ～
- path: `docs/real_machine_db/machines/2020-01-20_sky-girls-zero-no-tsubasa.md`
- manufacturer: コナミアミューズメント（製造KPE） / formalModel: `SスカイガールズKK` / certificationNumber: `9S1387`
- releaseDate: 2020-01-20 / 6号機AT / 疑似ボーナス+AT / 可変純増
- payoutRate: **97.9 / 98.7 / 99.9 / 105.0 / 107.4 / 113.2%**
- ボーナス: **1/286.2 / 267.7 / 243.1 / 222.2 / 207.4 / 135.2**
- AT: **1/724.5 / 668.1 / 555.1 / 481.2 / 433.3 / 159.8**
- base: 約50G/50枚 / netIncrease: **約1 / 2 / 4 / 6枚/G**、ソニック約6枚/G。
- 天井候補: **99 / 149 / 199 / 499 / 999G**。
- resetBehavior: 設定変更で天井G・有利区間RESET/ランプ消灯。据え置き/純電断で天井・MOLP内部ポイント・有利区間をCARRY_OVER。朝一ステージは双方横須賀。
- 設定変更後は高確スタートの可能性があるが、公開確定振り分け値は固定できず。純電断時の内部状態契約も一般論で補完しない。
- 第1天井LOCK追加数は資料間CONFLICTのため平均せず、物差しコアは天井G数とAT確定のみcanonical。

## No.1332 — パチスロ 花伝
- path: `docs/real_machine_db/machines/2020-01-20_pachislo-hanaden.md`
- manufacturer: アムテックス（総販売元HEIWA） / formalModel: `S花伝M4` / certificationNumber: `9S1112`
- releaseDate: 2020-01-20 / 6号機AT / 25φ / 4リール
- payoutRate: **97.4 / 98.8 / 100.5 / 103.5 / 106.2 / 110.1%**
- AT初当り: **1/844.8 / 810.5 / 774.7 / 714.9 / 684.0 / 628.3**
- CZ: **1/97.9 / 95.0 / 92.0 / 89.2 / 87.5 / 82.7**
- base: 約35.9G/50枚 / netIncrease: 約6.2枚/G
- resetBehavior: 設定変更で天井G・CZ失敗回数・内部モード/状態・有利区間RESET、純電断/据え置きはCARRY_OVER。有利区間ランプ消灯=変更濃厚/点灯=据え置き濃厚。
- 30φ `S花伝M9-30` はNo.1329に独立登録済み。

## 2020-01-20群監査
- **パチスロ 花伝-30 — No.1329 処理済み**
- **探偵オペラ ミルキィホームズ 1/2の奇跡 — No.1330 処理済み**
- **スカイガールズ～ゼロノツバサ～ — No.1331 処理済み**
- **パチスロ 花伝 — No.1332 処理済み**
- 1geki 2020年1月カレンダーの同日スロット4機と一致。ALL7等を追加照合し、今回の再監査で同日追加独立候補を固定できず。
- 判定: **CLOSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 前回 `2007-03_wild7.md` まで再QA済み。
- 次回: `docs/real_machine_db/machines/2007-03_wanpaku-pilot-daibouken.md`（わんぱくパイロット大冒険）。
- 今回は本線4機の追加と同日群監査を優先し、遡及QAは進めていない。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1332を再取得。
2. 2020-01-21〜02-02境界を再監査し、次の確認済み導入群 **2020-02-03** へ進む。
3. **「パチスロ 青鬼」**をNo.1333候補として性能コア＋resetBehavior v0.7で調査・登録。
4. 2020-02-03群を全メーカー/PB/地域差/別型式で監査してCLOSED可否を判定。
5. 遡及QAは **わんぱくパイロット大冒険** から継続。

## 主要出典 — 取得日 2026-09-11
### 2020-01-20群
- 1geki 2020年1月新台カレンダー: https://1geki.jp/newmachinecalender/202001/
- ALL7 導入日一覧: https://all7.jp/newmachine/2020/01/

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

### No.1331 スカイガールズ～ゼロノツバサ～
- https://www.konami.com/amusement/psm/archive/ps/2020/skygirls3/
- https://p.hisshobon.jp/machine/3467/1/76520
- https://oslo-opachi.com/2020/01/14/skygirls3_tennjyou/
- https://slonuu.com/pg/s-skygirls3

### No.1332 花伝
- https://hazuse.com/machine/pachislot/9S1112/
- https://web-greenbelt.jp/00011606/
- https://hazuse.com/machine/pachislot/9S1112/genre/207/
- https://chonborista.com/slot/amute/99069/

### 次境界
- 1geki 2020年2月新台カレンダー: https://1geki.jp/newmachinecalender/202002/
