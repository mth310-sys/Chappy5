更新日: 2026-09-08

## 現在地点
- recordCount: **992**
- latestRecordAdded: **A-SLOT 北斗の拳 将**（サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-07-04_a-slot-hokuto-no-ken-shou.md`
- chronologicalFrontier: **2016-07-04**
- frontierLatestMachine: **A-SLOT 北斗の拳 将**（サミー）
- schema: **resetBehavior v0.7**
- status: **2016-07-04_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.991 `2016-06-20_nangoku-monogatari-special.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点のmainは recordCount **991** / chronologicalFrontier **2016-06-27** / `2016-06-27_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
- HAZUSEの2016新台カレンダーは6月の導入日を06/06・06/13・06/20・06/27、7月の次を07/04として掲載。ALL7の2016年6月一覧も06/27掲載機で終了しているため、**2016-06-28〜07-03境界は未登録パチスロを固定できず CLOSED_FOR_CURRENT_RESEARCH** とした。
- 07/04群ではサミー公式マイスロが `A-SLOT 北斗の拳 将` と `A-SLOT 偽物語`を2016-07-04「本日ホール導入日」と直接確認。ファンキージャグラーもK-Navi/当時解析で07/04を確認済み。
- GitHub重複検索で `A-SLOT 北斗の拳 将` の既存独立レコードがないことを確認し、No.992として追加。

## No.992 — A-SLOT 北斗の拳 将
- manufacturer: **サミー**
- releaseDate: **2016-07-04**
- formalModelName: **A-SLOT北斗の拳 強敵/ZS**
- certificationNumber: **6S0341**
- generation/system: **5号機 / 5.5号機期 / ノーマル・A+RT / 技術介入 / 4段階設定（1・2・5・6）**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 市場掲載機械割: **97.7 / 99.9 / 104.5 / 110.1%**（設定1/2/5/6）。
- 完全攻略時: **100.1 / 102.3 / 107.1 / 112.8%**。通常値とは攻略条件が異なるため別系列。
- BIG: **1/267.5 / 260.1 / 241.8 / 220.7**。
- REG: **1/409.6 / 383.3 / 358.1 / 339.6**。
- 合算: **1/161.8 / 154.9 / 144.3〜144.4 / 133.7〜133.8**。設定5/6の0.1差は丸め表示差として保持。
- 50枚ベース: **33.5 / 34.0 / 35.1 / 35.8G**。
- BIG **最大311枚** / REG **104枚**。
- 北斗揃いBIGは全設定共通 **1/8192**。終了後は次回ボーナスまでRT「闘神ステージ」、RT純増 **約+0.2枚/G**。
- 通常時ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- ゲーム数天井非搭載のため、設定変更/据え置きの天井進捗、リセット短縮天井は **NOT_APPLICABLE**。
- AT/ART系の通常A/B・天国などの長期内部ゲーム数モードも **NOT_APPLICABLE**。通常時の6モードはプレイヤー選択型の演出告知モードとして分離。
- 一撃の2016-09-22「天井/設定変更」は、設定変更時・純電源OFF/ON時とも液晶ステージを **現在調査中** と記録。
- 北斗揃いBIG後RT中における **設定変更 / 据え置き / 純電源OFF→ON** のRT内部状態保持・終了は、機種名・正式型式・闘神ステージ・RT・朝一・リセット・据え置き・電源を組み替え、当時解析/古DB/回顧資料まで再探索したが本機固有の直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有の確定ガックン・初期出目・ランプ・ステージによる変更判別も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用の朝一天井短縮・朝一専用モード・特定G以内当選率などの公開数値恩恵は **NONE_CONFIRMED / NOT_APPLICABLE**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### data quality
- 導入日はサミー公式マイスロの2016-07-04告知を最優先し、HAZUSE/複数解析とも一致。
- 型式/検定番号はHAZUSEと旧実機DBで照合。
- 性能コアはHAZUSE、P-WORLD、ちょんぼりすた、2-9伝説、パチ7等で複数照合。
- 通常機械割と完全攻略時機械割は定義差なのでCONFLICT化しない。
- resetBehaviorは一般的なAタイプ論から推測せず、本機固有資料で固定できないRT電源契約はUNVERIFIEDのまま保持。

## 2016-06-28〜07-03境界監査 — CLOSED
- HAZUSE新台カレンダー上、2016年6月は06/27の次が2016-07-04。
- ALL7 2016年6月一覧でも06/27掲載3機が月末のパチスロ候補。
- 06/28、06/29、06/30、07/01、07/02、07/03を日付＋パチスロ＋新台＋導入で再検索したが、本線へ追加すべき全国初導入パチスロを固定できなかった。
- status: **2016-06-28_TO_2016-07-03_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## 2016-07-04群 — OPEN
確認済み同日候補:
1. **A-SLOT 北斗の拳 将** — サミー公式で07/04、本回No.992登録済み。
2. **A-SLOT 偽物語** — サミー公式で07/04「本日ホール導入日」。未処理、次。
3. **ファンキージャグラー** — K-Navi/当時解析で07/04。未処理。
- 07/04群はこの3機だけとまだ確定しない。上記処理後、ALL7/HAZUSE/P-WORLD/K-Navi/メーカー別資料で全メーカー横断監査してCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02-19_heisei-katsuo-densetsu.md**
- retroQaNextInspection: **2006-03-06_be-bop.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線の07/04群開始を優先。遡及QAは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.992を再取得。
2. **2016-07-04群OPEN → サミー「A-SLOT 偽物語」**を重複確認後に次レコードとして処理。
3. 性能コア＋resetBehavior v0.7を同時収集。特に設定変更/据え置き/純電断時のRT・プチRT・液晶/演出状態、天井非搭載、朝一変更判別を本機固有資料で再探索する。
4. その次に **北電子「ファンキージャグラー」**を処理し、ガックン/BGM等の朝一判別契約を本機固有資料で確認する。
5. その後07/04群を全メーカー横断監査し、追加未登録機がなければCLOSEDとして07/05以降へ進む。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/RT/ガックン等へ検索語と資料系統を変えて十分再探索後のみ確定。
7. 競合は平均せずCONFLICT。通常機械割/完全攻略値、設定変更/据え置き/純電断を混同しない。
8. 遡及QAは `2006-03-06_be-bop.md` から継続。

## 主要出典 — 取得日 2026-09-08
### No.992 A-SLOT 北斗の拳 将
- Sammy公式マイスロ: https://www.sammy.co.jp/japanese/myslot/news/index_10.html
- HAZUSE: https://hazuse.com/machine/pachislot/6S0341/
- P-WORLD: https://www.p-world.co.jp/machine/database/8063
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/20547/
- 2-9伝説: https://29den.com/hokutoshou/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_a_slot_hokuto_shou/3/
- パチ7回顧: https://pachiseven.jp/news/index/page%3A48
- 中一商事 実機DB: https://www.nakaiti.com/html/sSammy185.html

### boundary / next
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ALL7 2016年6月: https://www.all7.jp/plans/index/2016/06
- Sammy公式マイスロ（A-SLOT 偽物語も07/04公式確認）: https://www.sammy.co.jp/japanese/myslot/news/index_10.html
- K-Navi ファンキージャグラー: https://p-kn.com/slot/2518/
