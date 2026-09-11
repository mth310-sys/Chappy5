更新日: 2026-09-12

## 現在地点
- recordCount: **1403**
- latestRecordAdded: **パチスロ1000ちゃん ごらくver. — No.1403**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-04-05_pachislot-1000chan-goraku-ver.md`
- chronologicalFrontier: **2021-04-05**
- frontierLatestMachine: **パチスロ1000ちゃん ごらくver. — No.1403**
- schema: **resetBehavior v0.7**
- status: **2021-04-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1402「ニューパルサーSPⅢ」を再取得して開始。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 前回指定のNo.1403候補「パチスロ1000ちゃん ごらくver.」を追加。親機2020年版の数値を混ぜず、ごらくver.専用スペックのみをcanonical化。
- 2021-04-05群はニューパルサーSPⅢ + パチスロ1000ちゃん ごらくver.の2機を処理済み。1geki/イチカツ系月間カレンダーとPB資料の範囲で追加未処理機を固定できず、地域機・PB・別型式・別スペックを再監査してCLOSEDとした。
- 2021-04-06〜04-18境界を再確認し、次の明確な本線は2021-04-19群。HAZUSE等で `Angel Beats!`、`デジスロ`、`パチスロ マクロスデルタ`、`ぱちスロ 沖ハナ-30`、`スーパーハナハナ`、`スーパーハナハナ-30` の2021-04-19導入を確認。次回は全メーカー横断で群全体を再監査し、未処理先頭からNo.1404へ進む。
- 遡及resetBehavior QAは `常夏アロハ` を正式再探索し、性能側COMPLETE_COREを維持したままreset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。

## No.1403 — パチスロ1000ちゃん ごらくver.
- path: `docs/real_machine_db/machines/2021-04-05_pachislot-1000chan-goraku-ver.md`
- manufacturer: **オーイズミ（ダイナム共同開発PB）**
- formalModel: **Sパチスロ1000ちゃんG1**
- certificationNumber: **0S0313**
- releaseDate: **2021-04-05**
- generation/system: **6.1号機 / A+AT / リアルボーナス+AT / 設定2〜6の5段階**
- payoutRateBySetting: **99.5 / 100.5 / 101.7 / 103.0 / 107.5%**
- BIG合算: **1/279 / 274 / 271 / 266 / 250**
- LIVE BONUS: **1/390 / 383 / 374 / 366 / 302**
- ボーナス合算: **1/163 / 160 / 157 / 154 / 137**
- CZ: **1/482 / 473 / 469 / 461 / 342**
- AT初当たり: **1/380 / 370 / 365 / 356 / 300**
- baseGamesPer50: **37.5G/50枚（全設定共通）**
- basicPayout: **BIG平均約170枚 / LIVE BONUS平均約60枚 / 1000★CHANCE 30G・純増約1.0枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_CEILING_AND_STATE_TABLES**

### resetBehavior v0.7 — No.1403
- 設定変更: 天井G RESET、内部状態再抽選、有利区間移行時抽選。実戦上1000ちゃんステージ開始。
- 据え置き/純電断: 天井G・内部状態CARRY_OVER。純電断後の液晶ステージは資料上調査中。
- 天井: 有利区間移行時に333/555/777Gのいずれか。最深777G。
- 天井振り分け（設定2→6）: 333G **3.9/7.0/9.0/12.1/16.0%**、555G **21.1/25.0/27.0/32.8/44.1%**、777G **75.0/68.0/64.1/55.1/39.8%**。
- 有利区間移行時状態（設定2→6）: 通常 **61.9/59.9/58.8/56.4/52.8%**、高確 **35.0/35.8/36.3/37.2/38.7%**、超高確 **3.1/4.3/5.0/6.4/8.5%**。
- 上記数値は設定変更専用テーブルではなく、有利区間移行時共通値として分離。
- resetDetection: 設定変更後1000ちゃんステージは補助情報。本機固有ガックン/有利区間ランプによる確定判別契約は再探索後もUNVERIFIED。

## 2021-04-05群 — CLOSED
1. **ニューパルサーSPⅢ — No.1402 / DONE**
2. **パチスロ1000ちゃん ごらくver. — No.1403 / DONE**

- status: **2021-04-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 次回本線の再開地点
- 最新main再同期後、**2021-04-19群**を全メーカー・地域機・25φ/30φ・PB・別型式・延期差まで再監査する。
- 現時点確認候補: `パチスロAngel Beats!` / `デジスロ` / `パチスロ マクロスデルタ` / `ぱちスロ 沖ハナ-30` / `スーパーハナハナ` / `スーパーハナハナ-30`。
- 未処理先頭を確定して **No.1404** から継続する。導入日が同じ場合は漏れ防止を優先し、順番は資料上の固定キューに落とす。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- `coreStatus: COMPLETE_CORE` は維持。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 設定変更/据え置き/純電断時の成立済みボーナス・告知待ち状態、ガックン/初期出目/パトライト等の本機固有変更判別を検索語・資料系統変更で再探索したが直接契約を固定できず、一般的5号機挙動から補完しなかった。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。同レコードは既にresetBehavior PARTIALを持つため、既存参考情報を崩さず正式再探索してQA状態を更新する。

## GitHub保存
- No.1403追加 commit: `4dfae4f0248ecffb05c5c0e4f1fdc1d6ad1ace43`
- 常夏アロハ reset QA commit: `43567f6e16a893bf23facd5a57ca97d44447585a`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1403 パチスロ1000ちゃん ごらくver.
- https://prtimes.jp/main/html/rd/p/000000304.000013913.html
- https://www.dynam.jp/pb/lineup/
- https://hazuse.com/machine/pachislot/0S0313/genre/201/
- https://hazuse.com/machine/pachislot/0S0313/genre/207/
- https://hazuse.com/machine/pachislot/0S0313/genre/209/
- https://web-greenbelt.jp/post-44701/
- https://news.p-world.co.jp/articles/15953/yugitsushin
- https://chonborista.com/slot/oizumi-slot/137312/
- https://p-kn.com/slot/3570/

### 2021-04-19境界候補
- https://hazuse.com/machine/pachislot/0S1535/  （Angel Beats!）
- https://hazuse.com/machine/pachislot/0S1483/  （デジスロ）
- https://hazuse.com/machine/pachislot/0S1236/  （マクロスデルタ）
- https://hazuse.com/machine/pachislot/9S1805/  （沖ハナ-30）
- https://hazuse.com/machine/pachislot/0S1624/  （スーパーハナハナ）
- https://hazuse.com/machine/pachislot/0S0985/  （スーパーハナハナ-30）
