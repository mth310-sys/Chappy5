更新日: 2026-09-08

## 現在地点
- recordCount: **1021**
- latestRecordAdded: **パチスロ ウィッチマスター**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-11-07_witch-master.md`
- chronologicalFrontier: **2016-11-07**
- frontierLatestMachine: **パチスロ ウィッチマスター — No.1021**
- schema: **resetBehavior v0.7**
- status: **2016-10-25_TO_2016-10-31_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-11-01_TO_2016-11-06_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-11-07_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1019実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 最新main実レコードを進捗正本として使用。既存性能コアはやり直していない。
- main正本 **1020件 / chronologicalFrontier 2016-10-24 / 10/24群CLOSED** から継続。
- **2016-10-25〜10-31境界**を導入日一覧、HAZUSE日付索引、業界記事、古いDB、型式名系で再監査。10/31の日付自体は確認できるが、当該日で固定できた候補はパチンコ側で、新たな全国導入パチスロ未登録機は今回固定できずCLOSED。
- **2016-11-01〜11-06境界**も日付別・全国導入表記で再探索し、新規全国導入パチスロを固定できずCLOSED。
- 11/07群先頭候補 **パチスロ ウィッチマスター**をGitHub内重複確認後、No.1021として追加。
- 同日群にはD-light **パチスロ薄桜鬼蒼焔録**（型式 `薄桜鬼蒼焔録WV` / 検定 `6S0586` / 2016-11-07）が複数資料一致で存在するため、11/07群はOPENのまま次回先頭とする。

## No.1021 — パチスロ ウィッチマスター
- manufacturer: **山佐 / YAMASA**
- releaseDate: **2016-11-07**
- formalModelName: **ウィッチマスター／FF**
- certificationNumber: **6S0303**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ / 分数管理型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.5 / 99.0 / 101.1 / 104.5 / 108.8 / 113.8%**（設定1〜6）。
- BIG: **1/550.7 / 564.9 / 520.1 / 520.0 / 485.4 / 520.1**。
- REG: **1/799.2 / 682.6 / 780.1 / 606.8 / 728.1 / 585.1**。
- ART初当たり: **1/499.5 / 479.6 / 485.0 / 424.6 / 411.0 / 317.2**。
- ボーナス合算: **1/326.0 / 309.1 / 312.0〜312.1 / 280.0 / 291.2 / 275.3**。設定3の312.0/312.1は丸め差。
- ベース: **約31.5〜32G/50枚**。HAZUSE約31.5G、複数解析約32Gの丸め差として統合。
- ART「マジカルダイブ」: **約1.5枚/G**。
- BIG約203枚 / REG約49枚 / ART初期40G+エピソード10G。
- 通常天井: **BIG+ART間 最大1536G / 平均約999G**。REGでは天井ゲーム数をリセットしない。

### resetBehavior v0.7
- 設定変更時は周期減算の**高テーブル（テーブル4）**を選択し、通常最大1536Gから **最大768G**へ短縮、平均到達も約999Gから **約499〜500G**へ短縮。
- 高テーブル恩恵は **初回ART当選まで継続**。
- BIG当選では天井ゲーム数自体は0から再計数されるが、高テーブルは初回ARTまで継続。初期記事に誤読可能な記載があり、後の訂正・必勝本言及・メーカー資料言及を優先してcanonical化。
- REG当選では天井ゲーム数をリセットしない。
- 電源OFF→ONのみでは天井ゲーム数を **CARRYOVER**。設定据え置き時も同様の天井進捗継続として記録。
- 設定変更時/純電断時のCZ高確・ART高確等の詳細内部状態は、当時解析でも調査中が残るため **UNVERIFIED_AFTER_RESEARCH**。一般論から補完しない。
- ガックンは当時解析で **設定変更時あり / 電源OFF→ONのみなし**との報告があるが、通常時にもガックンする個体報告があり確定判別には使わず `GACKUN_REPORTED_USEFUL_BUT_NOT_DETERMINISTIC / NOT_MANUFACTURER_GUARANTEE`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### numericResetData
- 通常最大天井: **1536G**
- 通常平均天井到達: **約999G**
- 設定変更後最大天井: **768G**
- 設定変更後平均天井到達: **約499〜500G**
- 設定変更後テーブル: **高テーブル / テーブル4**
- リセット恩恵継続: **初回ART当選まで**

## 2016-10-25〜10-31境界 — CLOSED_FOR_CURRENT_RESEARCH
- HAZUSE日付索引・導入日一覧・業界記事・古いDBを横断。
- 10/31の日付は存在するが、今回確認できた当該日候補はパチンコ側で、新規全国導入パチスロは固定できなかった。
- 小規模機は後続QAで月横断再監査対象に残すが、時系列本線は11月へ前進。

## 2016-11-01〜11-06境界 — CLOSED_FOR_CURRENT_RESEARCH
- 日付別「新台/導入/納品」検索、11月上旬の業界記事を横断。
- ウィッチマスターは11/06〜納品予定資料があるが、全国ホール導入日は11/07で複数資料一致。11/01〜11/06へ別レコードを置かない。
- その他、新規全国導入パチスロを今回固定できずCLOSED。

## 2016-11-07群 — OPEN
登録済み:
- **パチスロ ウィッチマスター**（山佐）— No.1021

確認済み次候補:
- **パチスロ薄桜鬼蒼焔録**（D-light）— 導入2016-11-07 / 型式 `薄桜鬼蒼焔録WV` / 検定番号 `6S0586`。PiDEA当時業界記事、HAZUSE、K-Naviで11/07一致。次回最優先で重複確認→性能コア+resetBehavior v0.7を収集。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、2006-03-27より後の既存未QAレコードを最新main実体から順次特定して補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1021を再取得。
2. **1021件 / chronologicalFrontier 2016-11-07 / 11/07群OPEN** を正本として継続。
3. 次の未処理先頭 **D-light「パチスロ薄桜鬼蒼焔録」**をGitHub内重複確認後に調査。性能コア + resetBehavior v0.7を同時収集。
4. 薄桜鬼追加後、**2016-11-07同日群を全メーカー横断監査**し、小規模/表記揺れ機も確認。漏れがなければ11/07群CLOSED。
5. その後 **2016-11-08〜11-13境界**を監査して次の確認済み導入日群へ前進。
6. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1021 パチスロ ウィッチマスター
- HAZUSE: https://hazuse.com/machine/pachislot/6S0303/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/6S0303/genre/201/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/6S0303/genre/209/
- グリーンべると / P-WORLD NEWS: https://news.p-world.co.jp/articles/8658/greenbelt
- でちゃう! WEBちゃんねる: https://www.youtube.com/watch?v=nvtG9qlHw4M
- 一撃 機種TOP: https://1geki.jp/slot/s_witchmasters/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_witchmasters/3/
- スロットガーデン: https://xn--mckza4ard4ttb2d.com/witchmaster
- 期待値見える化: https://slotjin.com/zone/witchmaster/
- 期待値見える化 リセット: https://slotjin.com/slot/witchmaster-reset/
- すろぱちくえすと リセット: https://www.slopachi-quest.com/article/witch-master-reset/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/25897/comment-page-6/
- パチスロ解析ガイド: https://pachislot-guide.net/2016/witch-master/
- スロパチネット: https://slopachi-net.com/witchmaster

### 次回候補 パチスロ薄桜鬼蒼焔録
- PiDEA X: https://www.pidea.jp/articles/MAX-Atype%E3%81%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E8%96%84%E6%A1%9C%E9%AC%BC%E8%92%BC%E7%84%94%E9%8C%B2%E3%80%8D%E3%82%92%E7%99%BA%E5%A3%B2%EF%BC%8F%E3%83%87%E3%82%A3%E3%83%BB%E3%83%A9%E3%82%A4%E3%83%88
- HAZUSE: https://hazuse.com/machine/pachislot/6S0586/
- K-Navi: https://p-kn.com/slot/2616/
