更新日: 2026-09-12

## 現在地点
- recordCount: **1496**
- latestRecordAdded: **SLOT STEINS;GATE — No.1496**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-05-09_slot-steins-gate.md`
- chronologicalFrontier: **2022-05-09**
- frontierLatestMachine: **SLOT STEINS;GATE — No.1496**
- schema: **resetBehavior v0.7**
- status: **2022-05-09_GROUP_OPEN_2_OF_3_CURRENTLY_CONFIRMED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1495 `Sスーパー海物語IN JAPAN祭` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 直前handoff指定の次機種 `SLOT STEINS;GATE` をNo.1496として登録。
- ユニバーサル公式、業界記事、HAZUSE、K-Navi、一撃、なな徹、パチマガスロマガ、ちょんぼりすた、スロットセブン等を横断し、性能コアとresetBehavior v0.7を収集。
- 型式 `S/STEINS;GATE/TG`、検定番号 `1S1545`、製造メーシー、2022-05-09導入、6.2号機ATを確認。
- 設定はL/1/2/4/5/6。通常設定の機械割97.2/98.8/102.0/105.0/108.1%。設定Lは下パネル消灯だが正確なPAYOUTは資料上調査中のためUNVERIFIED。
- 初当りボーナス合算1/283.6〜1/130.8、設定1ベース33.9G/50枚、純増約5.0枚/G。
- 運命創始のボーナスは20G・約100枚、狂気再醒のボーナスは25G・約125枚。STEINS;ROADは初期16G〜最大32G、STEINS;GATEは32G固定・ボーナスとのループ期待度86%。
- 通常時は有利区間移行後1000Gでボーナス天井（運命創始50% / 狂気再醒50%）、12周期で上位CZダイバージェンスゾーン。1周期150pt・平均約70G。
- 設定変更では有利区間・1000G天井・周期数・内部状態RESET。周期は0スタート。
- 据え置きと純電源OFF→ONは有利区間・天井・周期数・内部状態CARRY_OVER。
- 新規有利区間移行時の魔眼獲得率は50%。設定変更時にも適用されるが、設定変更専用抽選ではなく新規有利区間移行時共通値として保存。
- 通常時は有利区間ランプ非点灯タイプのため朝一消灯だけでは変更判別不可。前日DZ/ボーナス等で点灯状態→朝一消灯なら設定変更濃厚材料だが店舗対策例外あり。
- 設定変更/電源OFF→ONの固定開始ステージ、設定変更専用ダイバージェンスMAP全初期振り分け、本機固有ガックン条件/発生率、設定L正確PAYOUTは検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1496 — SLOT STEINS;GATE
- path: `docs/real_machine_db/machines/2022-05-09_slot-steins-gate.md`
- manufacturer: **メーシー（製造） / ユニバーサルエンターテインメント（販売・ブランド）**
- formalModel: **S/STEINS;GATE/TG**
- inspectionCode: **1S1545**
- releaseDate: **2022-05-09**
- generation/system: **6.2号機 / 擬似ボーナス連鎖型AT**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **97.2 / 98.8 / 102.0 / 105.0 / 108.1%（設定1/2/4/5/6、LはUNVERIFIED）**
- initialBonusCombined: **1/283.6 / 1/262.5 / 1/211.0 / 1/167.4 / 1/130.8**
- baseGamesPer50: **33.9G/50枚（設定1）**
- netIncrease: **約5.0枚/G**
- basicPayout: **運命創始20G・約100枚 / 狂気再醒25G・約125枚 / SG 32G・86%ループ期待度**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE**
- confidence: **HIGH**

### resetBehavior v0.7 — No.1496
- **設定変更**: 有利区間RESET / 1000G天井RESET / 周期0スタート / 内部状態RESET。
- **据え置き**: 有利区間・天井・周期・内部状態CARRY_OVER。
- **純電源OFF→ON**: 有利区間・天井・周期・内部状態CARRY_OVER。
- **ゲーム数/天井**: 1000Gでボーナス、12周期でDZ。設定変更専用短縮なし。
- **モード/状態**: 新規有利区間へ移行。設定変更専用MAP全初期振り分けはUNVERIFIED_AFTER_RESEARCH。
- **有利区間**: 設定変更RESET、据え置き/純電断CARRY_OVER。通常時ランプ非点灯。
- **朝一恩恵**: 新規有利区間移行時の魔眼獲得50%。設定変更専用値ではなく共通値。
- **変更判別**: 通常時ランプ消灯のため単純判別不可。前日点灯→朝一消灯のみ変更濃厚材料。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。

## 2022-05-09群 — OPEN
現在確認できる独立候補:
1. `Sスーパー海物語IN JAPAN祭` — **No.1495 処理済み**
2. `SLOT STEINS;GATE` — **No.1496 処理済み**
3. `ハナハナホウオウ～天翔～紫パネル`（型式 `Sハナハナホウオウ～天翔～GP`）— **未処理候補 / 2022年5月上旬追加導入、1月のLX/EX-30とは別型式**

### 日付監査メモ
- K-Naviの2022-05カレンダーは `パチスロ ゼーガペイン2` を5/9群に掲載するが、HAZUSE実戦記事、ちょんぼりすた、イチカツ、ニコナナ導入前動画、5/27実戦報道はいずれも **2022-05-23導入**で一致。前倒し予定記事には5/9予定も存在する。
- よって `ゼーガペイン2` は5/9群へ登録せず、**2022-05-23本線候補として保留**。導入予定変更による日付CONFLICTとして扱う。
- なな徹上半期回顧も5月実導入を `5/9 スーパー海 / ハナハナGP / STEINS;GATE`、`5/23 けものフレンズ / ゼーガペイン2` と整理しており、現状はこちらを実導入時系列のcanonical候補とする。

## 次回本線の再開地点
- **No.1497候補 `ハナハナホウオウ～天翔～紫パネル`（型式 `Sハナハナホウオウ～天翔～GP`）を独立レコード化すべきか、既存1/24のLX/EX-30レコードとの型式差・パネル差・性能同一性をmain既存レコードと再照合して処理する。**
- 5/9群CLOSED後は5/10〜5/22境界を監査し、5/23群 `ぱちすろ けものフレンズ` / `パチスロ ゼーガペイン2` へ進む。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1496登録を優先し、遡及QAカーソルは進めていない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`（科学忍者隊ガッチャマン）**。

## GitHub保存
- No.1496追加 commit: `2953b553fe830e017027d74cda2186ea95eb6271`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1496 SLOT STEINS;GATE
- https://www.universal-777.co.jp/news/20220307001533/
- https://p-bomb.co.jp/industry/new-machine/3760/
- https://hazuse.com/machine/pachislot/1S1545/
- https://p-kn.com/slot/3767/
- https://1geki.jp/slot/s_steins_gate/
- https://1geki.jp/slot/s_steins_gate/3/
- https://nana-press.com/kaiseki/machine/347/9125/
- https://nana-press.com/kaiseki/machine/347/9220/
- https://chonborista.com/slot/universal-slot/164980/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/55/kh02-3.php
- https://slot-seven.com/steinsgate-tenzyou/

### 2022-05-09群 / 次境界監査
- https://p-kn.com/calendar/202205/
- https://1geki.jp/newmachinecalender/202205/
- https://nana-press.com/post/1576830
- https://hazuse.com/research/shida8/
- https://chonborista.com/slot/yamasa-slot/164299/
- https://ichikatsu.com/newslot2022/
- https://news.p-world.co.jp/articles/19785/nippon
