更新日: 2026-09-11

## 現在地点
- recordCount: **1329**
- latestRecordAdded: **パチスロ 花伝-30 — No.1329**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-01-20_pachislo-hanaden-30.md`
- chronologicalFrontier: **2020-01-20**
- frontierLatestMachine: **パチスロ 花伝-30 — No.1329**
- schema: **resetBehavior v0.7**
- status: **2020-01-20_GROUP_OPEN_1_OF_4_KNOWN_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1328「Sリング 恐襲ノ連鎖」を再取得。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正として継続。
- 直前handoffの次の確認済み導入群 **2020-01-20** を再監査し、未処理先頭 **「パチスロ 花伝-30」**をNo.1329として追加。
- 花伝は25φ `S花伝M4` と30φ `S花伝M9-30` が別型式。30φ専用パチ7は「内部システムは25パイと全く同じ」と明記しているため、性能値・resetBehaviorは同一内部契約として照合しつつ、型式差を保持して独立レコード化。
- 2020-01-20群はまだOPEN。次は既知候補 **探偵オペラ ミルキィホームズ 1/2の奇跡** から継続する。

## No.1329 — パチスロ 花伝-30
- path: `docs/real_machine_db/machines/2020-01-20_pachislo-hanaden-30.md`
- manufacturer: **アムテックス（総販売元HEIWA）**
- formalModel: **`S花伝M9-30`**
- certificationNumber: **`9S1503`**
- releaseDate: **2020-01-20**
- generation/system: **6号機 / AT / CZ経由型 / 4リール / 30φ**
- payoutRate: **設定1 97.4% / 2 98.8% / 3 100.5% / 4 103.5% / 5 106.2% / 6 110.1%**
- AT初当り: **1/844.8 / 810.5 / 774.7 / 714.9 / 684.0 / 628.3**
- CZ: **1/97.9 / 95.0 / 92.0 / 89.2 / 87.5 / 82.7**
- base: **約35.9G/50枚**
- netIncrease: **約6.2枚/G**
- basicPayout: **五光降臨ベルナビ20回・約220枚 / 乱舞ボーナスベルナビ10回・約110枚 / 五光降臨突入時平均約1100枚**
- coreStatus: **COMPLETE_CORE**

### resetBehavior v0.7 — No.1329
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- 設定変更: **天井G RESET / CZ失敗回数RESET / 内部モードRESET / 内部状態RESET / 有利区間RESET / 有利区間ランプ消灯**。
- 据え置き: **内部天井G / CZ失敗回数 / 内部モード / 内部状態 / 有利区間を引継ぎ**。
- 電源OFF→ONのみ: **内部天井G / CZ失敗回数 / 内部モード / 内部状態 / 有利区間ランプ状態を引継ぎ**。
- 変更判別: **有利区間ランプ消灯＝設定変更濃厚、点灯＝据え置き濃厚**。ホール対策等の例外があるため確定扱いにはしない。
- 共通救済CZ: 100G以内CZ非当選時100G、300G、第2天井700G+α。設定変更専用短縮ではない。
- CZ失敗回数天井振り分け（有利区間移行時共通）: **6回7.8% / 10回91.8% / 14回0.4%**。
- 有利区間RESET後は平均約2Gで再移行との解析あり。
- 設定変更専用モード振り分け、朝一特定G以内当選率、本機固有ガックン発生率は十分再探索後も公開確定値を固定できず推測補完しない。

## conflict / quality notes
- releaseDate: 当時の30φ専用パチ7は **2020-01-20**、後年単一中古実機資料に **2020-01-27**。当時専用資料を優先し1/20をcanonical、1/27は低権威CONFLICT注記として保持。平均化しない。
- 型式/検定: 遊技通信の東京都公安委員会検定通過情報で `S花伝M9-30 / 9S1503` を固定。

## 2020-01-20群監査
既知候補:
1. **パチスロ 花伝-30 — No.1329 処理済み**
2. **探偵オペラ ミルキィホームズ 1/2の奇跡 — 未処理**
3. **スカイガールズ～ゼロノツバサ～ — 未処理**
4. **パチスロ 花伝（25φ / S花伝M4） — 未処理**

- 30φと25φは内部システム同一だが別型式のため、全機種方針上は別レコードとする。
- 同日群は未完了のため **OPEN**。全既知候補処理後に全メーカー/PB/地域差/別型式を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 前回 `2007-03_wild7.md`（ワイルド7）まで再QA済み。
- 次回は **`docs/real_machine_db/machines/2007-03_wanpaku-pilot-daibouken.md`（わんぱくパイロット大冒険）** から継続。
- 既存性能値はやり直さずresetBehavior v0.7のみ順次補完する。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1329を再取得。
2. 2020-01-20群の次の未処理 **「探偵オペラ ミルキィホームズ 1/2の奇跡」** をNo.1330候補として性能コア＋resetBehavior v0.7で調査・登録。
3. 続いて **スカイガールズ～ゼロノツバサ～ → パチスロ 花伝（25φ）**。
4. 同日群を全メーカー/PB/地域差/別型式で監査しCLOSED可否を判定。
5. 遡及QAは **わんぱくパイロット大冒険** から継続。

## 主要出典 — 取得日 2026-09-11

### No.1329 パチスロ 花伝-30
- パチ7 30φ専用: https://pachiseven.jp/machines/5957
- 遊技通信 検定通過: https://www.yugitsushin.jp/news/maker/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%881%E6%9C%8814%E6%97%A5%EF%BC%89-2/
- HAZUSE 花伝: https://hazuse.com/machine/pachislot/9S1112/
- HAZUSE 天井・設定変更: https://hazuse.com/machine/pachislot/9S1112/genre/207/
- ちょんぼりすた: https://chonborista.com/slot/amute/99069/
- pacnk 30φ: https://pacnk.com/slot/tools/sh_hanadensanjupai.html

### 2020-01群境界
- 1geki 2020年1月新台カレンダー: https://1geki.jp/newmachinecalender/202001/

### 遡及QA
- next: `docs/real_machine_db/machines/2007-03_wanpaku-pilot-daibouken.md`
