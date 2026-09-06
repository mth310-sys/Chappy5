# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **794**
- latestMachineAddedByChronology: **主役は銭形2**（オリンピア / OLYMPIA）
- latestRecord: `docs/real_machine_db/machines/2014-02-03_shuyaku-wa-zenigata2.md`
- chronologicalFrontier: **2014-02-03**
- schema: **resetBehavior v0.7**
- status: **2014-02-03_GROUP_CLOSED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-02-03_rinne-no-lagrange.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は **recordCount 793 / chronologicalFrontier 2014-02-03 / 02-03群OPEN**。
- 前handoff指定の次未処理 **2014-02-03「主役は銭形2」**を794件目として追加。
- 02-03群は前handoffの同日一覧で確認済みのパチスロ候補 **「パチスロ輪廻のラグランジェ」「主役は銭形2」**が両方登録済みとなったため `CLOSED_FOR_CURRENT_RESEARCH`。
- 同日一覧に混在する「交響詩篇エウレカセブン～真の約束の地～」「氷川きよし2」「海物語アクア」「魔神英雄伝ワタル」等のパチンコ機は本線へ混入させない。

## 今回追加 — 主役は銭形2

### identity / 性能コア

- manufacturer: **オリンピア / OLYMPIA**。
- modelName: **主役は銭形2B5**。
- approvalNumber: **3S1017**。
- hall start: **2014-02-03**（K-Navi / HAZUSE一致）。オリンピア公式2013年発売機種一覧への掲載は製品発表/発売年として別定義保持。
- generation/system: **5号機 / 差枚数管理型AT・擬似ボーナスAT**。
- payout: **97.1 / 98.4 / 100.3 / 104.8 / 109.0 / 113.3%**。
- 銭形BIG初当たり: **1/297.1 / 284.3 / 272.8 / 235.6 / 206.6 / 180.8**。
- 銭形BIGトータル: **1/228.6 / 218.8 / 210.0 / 181.4 / 159.1 / 139.3**。
- baseGamesPer50: **31.7G/50枚**。
- netIncrease: **約2.8枚/G**。
- 銭形BIG初期差枚数: **150 / 200 / 250 / 300 / 400 / 550 / 711枚**。
- ceiling: **BIG間999G**。926G以降の当選はダブルライン以上（初期200枚以上）。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更時は **天井Gをリセット**し、シナリオ/モード・ランク、高確テーブル、内部状態を再抽選。
- 設定変更時シナリオ/モード公開値は **56.67 / 33.33 / 10.00%**。必勝本はシナリオ1/2/3、別解析はモードA/B/C表記で名称差があるため併記。
- 設定変更時の高確テーブルは **A70 / B10 / C10 / D10%**。
- 設定変更後1～25Gは、ボーナス終了直後の1～25G高確確定と異なり、**約1/3高確・約2/3低確**。
- **設定変更なしの電源OFF→ON**は天井、内部モード/ランク、テーブル/内部状態を **引継ぎ**とする本機専用比較表を確認。純据え置きの基本挙動として保存。
- 朝一ステージは設定変更/電源OFF→ONとも **銭形デスクorICPO周辺**。
- ガックンは設定変更/電源OFF→ONとも **なし** とする直接表を確認。したがってガックン単独で変更判別できない。
- 設定変更専用の固定短縮天井は、表記揺れ・型式・メーカー・シリーズ名と「リセット/設定変更/朝一/天井短縮」を組み替えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## conflicts / safeguards

- 「モードA/B/C」と「シナリオ1/2/3」は名称差。56.67/33.33/10.00%の数値自体は一致するため、平均化せず名称差を注記。
- オリンピア公式は2013年発売機種一覧、K-Navi / HAZUSEは2014-02-03ホール導入。DBのreleaseDateは具体的ホール稼働日を採用し、定義差をCONFLICT扱いにしない。
- 主役は銭形3/4/5のベース・リセット仕様を初代5号機「2」へ混入させない。

## 2014-02-03同日群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
- **パチスロ輪廻のラグランジェ**（Sammy） — 793件目。
- **主役は銭形2**（オリンピア） — 794件目。

今回、前handoffで固定された02-03パチスロ候補は全件処理済み。次回は境界監査から再開する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線794件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 794 / chronologicalFrontier 2014-02-03 / 02-03群CLOSED** から開始。
2. **2014-02-04～02-09** をメーカー横断・導入日別に境界監査し、具体日付き未登録パチスロを先に処理する。
3. 境界に漏れがなければ **2014-02-10「ヱヴァンゲリヲン～決意の刻～」（ビスティ）**を次候補として処理。K-Navi、Pachiseven、EVANGELION STOREの2014-01-22告知で2月10日導入を確認済み。
4. 02-10群は **「サムライスピリッツ～剣豪八番勝負～」（SNKプレイモア）**も候補監査する。2014-02-10付SNK公式ニュースリリースは発売発表日なので、ホール導入具体日は別資料で固定してから時系列へ入れる。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

### 主役は銭形2
- オリンピア公式2013年発売機種: `https://www.olympia.co.jp/official/products/2013.html`
- K-Navi: `https://p-kn.com/slot/1990/`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S1017/`
- パチマガスロマガ 小役/1000円ゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/113/c.php`
- パチマガスロマガ 銭形BIG: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/113/03.php`
- 必勝本 ランク詳細: `https://p.hisshobon.jp/machine/2335/1/44589`
- 期待値見える化 朝一/天井: `https://slotjin.com/zone/syuyakuhazenigata2-tenjou/`
- 目指せ月収20万: `https://mezase20.com/zenigata2.html`
- LackLuckLife モード/ランク: `https://l-l-life.com/36603498/`
- コムシード公式2014-02-10: `https://www.commseed.net/news-old/140210_p1.html`
- gamebiz: `https://gamebiz.jp/news/132509`

### 次候補
- K-Navi ヱヴァンゲリヲン～決意の刻～: `https://p-kn.com/slot/1998/`
- Pachiseven 決意の刻: `https://pachiseven.jp/machines/3079/cutout/94`
- EVANGELION STORE 2014-01-22告知: `https://www.evastore2.jp/news-tokyo-01/2014/01/73/`
- SNKプレイモア 2014-02-10 サムライスピリッツ発売リリース: `https://slot.snk-corp.co.jp/press_releases/pdf/140210_01.pdf`
