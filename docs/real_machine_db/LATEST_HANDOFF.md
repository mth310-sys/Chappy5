# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **946**
- latestRecordAdded: **戦国乙女2～深淵に輝く気高き将星～**（オリンピア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-01-18_sengoku-otome2-shinen-ni-kagayaku-kedakaki-shousei.md`
- chronologicalFrontier: **2016-01-18**
- frontierLatestMachine: **戦国乙女2～深淵に輝く気高き将星～**
- schema: **resetBehavior v0.7**
- status: **2016-01-18_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.945 `2015-12-21_hihouden-densetsu-e-no-michi.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **945** / chronologicalFrontier **2015-12-21** / 12-21群CLOSED。
- main先行レコードがないことを再確認してNo.946を追加。

## 境界監査 — 2015-12-22〜2016-01-17
- HAZUSE新台カレンダー、2016年1月の当時解析記事、機種名/メーカー/導入日検索を横断。
- HAZUSEカレンダーには2016-01-04 / 01-12の日付枠があるが、今回の再探索でこの2日を全国ホール導入日として固定できる未登録パチスロ機は確認できなかった。検索で具体化したのはパチンコ側機種であり、パチスロ本線へ混入させない。
- 2015-12-22〜12-31についても12-21群後の具体日付き未登録パチスロを追加固定できず。
- 次に複数ソースで具体日を固定できたパチスロ群は **2016-01-18**。
- よって現時点では **2015-12-22_TO_2016-01-17_CLOSED_FOR_CURRENT_RESEARCH** とし、1/18群をOPENで処理する。

## No.946 — 戦国乙女2～深淵に輝く気高き将星～
- record: `docs/real_machine_db/machines/2016-01-18_sengoku-otome2-shinen-ni-kagayaku-kedakaki-shousei.md`
- manufacturer: **オリンピア**
- releaseDate: **2016-01-18**
- formalModelName: **戦国乙女2深淵に輝く気高き将星／D2**
- inspectionNumber: **5S1043**
- generation/system: **5号機 / 新基準AT機 / 疑似ボーナス連鎖型 / 天下ポイントCZ**

### performanceCore
- 機械割: **96.9 / 98.4 / 100.5 / 104.7 / 107.4 / 110.5%**。
- ボーナス初当たり: **1/384.9 / 332.1 / 354.4 / 295.2 / 323.4 / 247.0**。
- ボーナス合算: **1/156.9 / 147.5 / 139.4 / 120.1 / 110.0 / 99.9**。初当たりとは定義分離。
- 50枚ベース: **約46.2G**。
- 疑似ボーナスAT純増: **約2.9枚/G**。
- 乙女BONUS: **30G / 約87枚**。
- 真乙女BONUS: **70G / 約203枚**。
- 通常天井: **ボーナス間999G（前兆込み）→疑似ボーナス**。
- 天下ポイント **10000pt** 到達でCZ「天下統一モード」。

### resetBehavior v0.7
- settingChange game ceiling: **RESET**。
- settingChange天下ポイント: **RESELECT**（表示上0pt、内部専用初期pt）。
- settingChange liquid-crystal stage: **RESELECT**。
- settingChange internal state: **RESELECT**。
- purePowerCycle game ceiling: **CARRYOVER**。
- purePowerCycle天下ポイント: **CARRYOVER**（表示上0pt）。
- purePowerCycle internal state: **CARRYOVER**。
- purePowerCycle stage: **RESELECT**。
- 据え置き時も天井/天下pt/状態を引継ぐ扱い。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

#### 公開朝一数値
設定変更時の内部初期天下ポイント:
- 3500pt: **15.24%**（HAZUSE 15.23%）
- 4000pt: **14.84%**
- 6000pt: **50.00%**
- 8000pt: **19.92%**
- 6000pt以上: **69.92%**
- 3500ptの0.01pt差は平均せず `ROUNDING_CONFLICT_MINOR` として双方保存。

設定変更時の内部状態振り分け:
- 設定1・2: 通常A **39.84%** / 通常B **19.92%** / 高確A **30.08%** / 高確B **10.16%**
- 設定3: **34.77 / 25.00 / 30.08 / 10.16%**
- 設定4: **34.77 / 19.92 / 35.16 / 10.16%**
- 設定5: **29.69 / 25.00 / 35.16 / 10.16%**
- 設定6: **30.08 / 19.92 / 39.84 / 10.16%**

#### reset benefits / detection
- 設定変更で天下ポイントが3500〜8000ptへ再抽選され、約70%が6000pt以上なので、朝一の天下統一モード到達距離が短くなり得る。
- 一方、前日天井G数/天下ポイント/内部状態は変更で消える。
- 純電断では天下ポイントの表示だけ0ptになり内部は引継ぐため、**表示0pt単独では変更判別不能**。
- 前日最終天下pt＋当日獲得分が10000ptで天下統一モードへ到達した場合は据え置き推測材料。
- 期待値見える化はガックンを「なし濃厚/なし」と整理。本機固有の確定ガックン契約としては採用しない。
- 設定変更専用の短縮G数天井は `NONE_CONFIRMED_AFTER_RESEARCH`。固定「朝一○G以内当選率」は `UNVERIFIED_AFTER_RESEARCH`。

## 2016-01-18群 — OPEN
今回具体日付きで確認した同日パチスロ候補:
1. **戦国乙女2～深淵に輝く気高き将星～** — オリンピア — No.946登録済み。
2. **パチスロ 機動戦士ガンダム 覚醒-Chained battle-** — ビスティ — 2016-01-18導入を複数資料で確認。次回先頭候補。
3. **ペガッパ（PEGAPPA）** — エマ — 当時記事で2016-01-18導入を確認。ガンダム後に正式型式/性能/resetBehaviorを詰める。
- 上記だけで同日群を閉じず、次回も同日全メーカーを再監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_dokonjo-gaeru-s.md**
- retroQaNextInspection: **2006-01_birei2.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 既存性能コアを不用意にやり直さず、余力リレーでresetBehavior欠損のみ順次補完する。

## 次回再開地点
1. **recordCount 946 / chronologicalFrontier 2016-01-18 / 01-18群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.946をmainから再取得。
3. 先頭候補 **「パチスロ 機動戦士ガンダム 覚醒-Chained battle-」** を性能コア + resetBehavior v0.7で登録する。
4. 続いて **「ペガッパ（PEGAPPA）」** を処理し、同日全メーカー監査で1/18群の漏れを確認する。
5. 1/18群を閉じられたら次の具体日 **2016-01-25** へ進む。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与する。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. main先行レコードを見つけた場合は重複作成せず、その次の未処理機へ進む。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 検定日/認定日/発表日/納品予定日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- COMPLETE_COREは性能コアの従来判定として保持し、reset QA状態は別管理する。

## 主要出典 — 取得日 2026-09-08
### No.946 戦国乙女2
- HAZUSE: https://hazuse.com/machine/pachislot/5S1043/
- 一撃 天井/設定変更: https://1geki.jp/slot/sengokuotome2/3/
- 一撃 天下ポイント: https://1geki.jp/slot/sengokuotome2/45/
- 一撃 機種トップ: https://1geki.jp/slot/sengokuotome2/
- 期待値見える化: https://slotjin.com/zone/sengoku-otome2/
- すろぱちくえすと: https://www.slopachi-quest.com/article/sengokuotome2/
- K-Navi: https://p-kn.com/slot/2406/
- P-Summa: https://psumma.jp/pachislo/19211/
- 平和/オリンピア 打-WIN: https://www.heiwanet.co.jp/da-win/news.html
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/14773/

### 境界 / 2016-01-18群
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ガンダム覚醒資料: https://smaslo.man-soft.com/slot-kaiseki/gundam-kakusei.html
- ガンダム当時スペック/納期記事: https://pachinkopachisro.com/archives/46238096.html
- 2016年1月当時解析一覧（ペガッパ/ガンダム）: https://jikyu2000.com/2016/01/

## confidence
- No.946 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_OFFICIAL_CONTEXT
- No.946 identity/formalModel/inspection: ANALYSIS_HIGH_OLD_DB
- No.946 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.946 settingChangeBehavior: ANALYSIS_HIGH_DIRECT_RESET_TABLE
- No.946 powerCycleBehavior: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE
- No.946 numericResetData: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_ROUNDING_CONFLICT
- No.946 resetDetection: ANALYSIS_HIGH_FOR_POINT_BEHAVIOR / ANALYSIS_SINGLE_FOR_GAKKUN
- boundary 2015-12-22〜2016-01-17: CLOSED_FOR_CURRENT_RESEARCH
