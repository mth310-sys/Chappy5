更新日: 2026-09-12

## 現在地点
- recordCount: **1495**
- latestRecordAdded: **Sスーパー海物語IN JAPAN祭 — No.1495**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-05-09_s-super-umi-monogatari-in-japan-matsuri.md`
- chronologicalFrontier: **2022-05-09**
- frontierLatestMachine: **Sスーパー海物語IN JAPAN祭 — No.1495**
- schema: **resetBehavior v0.7**
- status: **2022-05-09_GROUP_OPEN_1_OF_3_CURRENTLY_CONFIRMED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1494 `2027DB` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 直前handoffの次機種 `Sスーパー海物語IN JAPAN祭` をNo.1495として登録。
- 三洋物産系業界発表、HAZUSE、K-Navi、一撃、パチマガスロマガ、なな徹、P-WORLD、ちょんぼりすた、イチカツ等を横断し、性能コアとresetBehavior v0.7を収集。
- 型式 `Sスーパー海物語INJAPAN祭PE`、検定番号 `1S1823`、製造サンスリー、2022-05-09導入、6.4号機ATを確認。
- 設定はL/1/2/4/5/6。機械割91.36(L)/97.59/98.97/103.92/106.88/110.25%。設定Lは下パネル常時消灯。
- ボーナス初当り1/253.7〜1/151.8、AT初当り1/620.3〜1/426.1、ベース約37.7G/50枚、純増約2.8枚/G。海祭BONUSは30G、海RUSHは初回BONUS込み平均約600枚。
- BONUS天井は110〜573G＋前兆最大26G（最大599G）。AT間天井は有利区間開始後1700〜2000G＋前兆最大26G。AT後に有利区間を引き継いだ場合のみBONUS天井299Gだが、設定変更リセット専用短縮ではない。
- 設定変更では有利区間・天井RESET。据え置きと純電源OFF→ONは有利区間・天井CARRY_OVER。桜チャレンジ中/ボーナス中/AT中の純電源OFF→ONは元状態へ復帰とする解析あり。
- 設定変更後初回ボーナス時は約30%でHAPPY魚群→AT直行。HAPPY魚群込みの設定1初回ボーナスAT期待度は約60%。通常時開始時の次回奇数ボーナス抽選は有利区間リセット時7.03%、引継ぎ時37.50%。
- 設定変更・純電源OFF→ONとも朝一液晶はお祭りモード夕方＋ウリンカウンター『???』で、液晶初期表示だけでは変更判別不可。有利区間ランプ非搭載。
- 設定変更後50G以降のモード選択画面で祭アイコンが出る場合があり、黒=設定変更濃厚＋HAPPY魚群期待度UP、赤=設定変更濃厚＋HAPPY魚群濃厚。ただし必ず出るわけではない。
- 設定変更時の低確A/低確B/通常/天国準備/天国/超天国の全開始振り分けと、本機固有ガックン条件/発生率は検索語・資料系統変更後も直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1495 — Sスーパー海物語IN JAPAN祭
- path: `docs/real_machine_db/machines/2022-05-09_s-super-umi-monogatari-in-japan-matsuri.md`
- manufacturer: **サンスリー（製造） / 三洋物産・三洋販売（ブランド/販売）**
- formalModel: **Sスーパー海物語INJAPAN祭PE**
- inspectionCode: **1S1823**
- releaseDate: **2022-05-09**
- generation/system: **6.4号機 / 擬似ボーナス＋差枚数管理AT**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **91.36(L) / 97.59 / 98.97 / 103.92 / 106.88 / 110.25%**
- pseudoBonus: **1/253.7 / 1/237.4 / 1/193.0 / 1/171.4 / 1/151.8（設定1/2/4/5/6）**
- atUmiRush: **1/620.3 / 1/590.7 / 1/510.2 / 1/468.5 / 1/426.1**
- baseGamesPer50: **約37.7G/50枚**
- netIncrease: **約2.8枚/G**
- basicPayout: **海祭BONUS 30G / 海RUSH平均約600枚（初回BONUS込み）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE**
- confidence: **HIGH**

### resetBehavior v0.7 — No.1495
- **設定変更**: 有利区間RESET / 天井RESET / 内部状態RESELECT。
- **据え置き**: 有利区間・天井・内部状態CARRY_OVER。
- **純電源OFF→ON**: 有利区間・天井CARRY_OVER。CZ/ボーナス/AT中は元状態へ復帰とする解析あり。
- **ゲーム数/天井**: BONUS最大599G、AT間1700〜2000G＋前兆。設定変更専用固定短縮なし。
- **モード/状態**: 有利区間開始時ウリンカウンター200。全開始モード振り分けはUNVERIFIED_AFTER_RESEARCH。
- **有利区間**: 設定変更RESET、据え置き/純電断CARRY_OVER。有利区間ランプ非搭載。
- **朝一恩恵**: 初回BONUS時HAPPY魚群約30%→AT直行、設定1初回BONUSのAT期待度約60%。初回奇数BONUS抽選7.03%。
- **変更判別**: 初期液晶では不可。50G以降の祭アイコン黒/赤が設定変更濃厚材料。有利区間ランプ不可。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。

## 2022-05-09群 — OPEN
現在確認できる独立候補:
1. `Sスーパー海物語IN JAPAN祭` — **No.1495 処理済み**
2. `SLOT STEINS;GATE` — **未処理 / 2022-05-09を複数資料で確認**
3. `ハナハナホウオウ～天翔～紫パネル`（型式 `Sハナハナホウオウ～天翔～GP`）— **未処理候補 / 2022年5月上旬追加導入、1月のLX/EX-30とは別型式**

### 日付監査メモ
- K-Naviの2022-05カレンダーは `パチスロ ゼーガペイン2` を5/9群に掲載するが、HAZUSE実戦記事、ちょんぼりすた、イチカツ、ニコナナ導入前動画、5/27実戦報道はいずれも **2022-05-23導入**で一致。前倒し予定記事には5/9予定も存在する。
- よって `ゼーガペイン2` は5/9群へ登録せず、**2022-05-23本線候補として保留**。導入予定変更による日付CONFLICTとして扱う。
- なな徹上半期回顧も5月実導入を `5/9 スーパー海 / ハナハナGP / STEINS;GATE`、`5/23 けものフレンズ / ゼーガペイン2` と整理しており、現状はこちらを実導入時系列のcanonical候補とする。

## 次回本線の再開地点
- **No.1496候補 `SLOT STEINS;GATE`（2022-05-09）から継続。**
- その後 `ハナハナホウオウ～天翔～紫パネル（GP）` を独立レコード化すべきか、既存1/24のLX/EX-30レコードとの型式差・パネル差・性能同一性をmain既存レコードと再照合して処理する。
- 5/9群CLOSED後は5/10〜5/22境界を監査し、5/23群 `ぱちすろ けものフレンズ` / `パチスロ ゼーガペイン2` へ進む。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1495登録を優先し、遡及QAカーソルは進めていない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`（科学忍者隊ガッチャマン）**。

## GitHub保存
- No.1495追加 commit: `ad8e0e1e73a2ad11ffd839b487a0b732d85f2af9`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1495 Sスーパー海物語IN JAPAN祭
- https://news.p-world.co.jp/articles/19764/nippon
- https://news.p-world.co.jp/articles/20390/nippon
- https://hazuse.com/machine/pachislot/1S1823/
- https://p-kn.com/slot/3764/
- https://1geki.jp/slot/s_sumi_ij_matsuri/
- https://1geki.jp/slot/s_sumi_ij_matsuri/3/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/38/kr01.php
- https://nana-press.com/kaiseki/machine/348/9242/
- https://nana-press.com/kaiseki/machine/348/9245/
- https://www.p-world.co.jp/machine/database/9603
- https://chonborista.com/slot/sanyo-slot/165134/
- https://ichikatsu.com/supersea-japan-matsuri/

### 2022-05-09群 / 次境界監査
- https://p-kn.com/calendar/202205/
- https://1geki.jp/newmachinecalender/202205/
- https://nana-press.com/post/1576830
- https://hazuse.com/research/shida8/
- https://chonborista.com/slot/yamasa-slot/164299/
- https://ichikatsu.com/newslot2022/
- https://news.p-world.co.jp/articles/19785/nippon
