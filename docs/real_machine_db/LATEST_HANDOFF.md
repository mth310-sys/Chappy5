更新日: 2026-09-09

## 現在地点
- recordCount: **1044**
- latestRecordAdded: **パチスロ牙狼-守りし者-**（サミー / サンセイR&D）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-02-06_garo-mamorishi-mono.md`
- chronologicalFrontier: **2017-02-06**
- frontierLatestMachine: **パチスロ牙狼-守りし者- — No.1044**
- schema: **resetBehavior v0.7**
- status: **2017-02-06_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1043実レコードを再取得して開始。
- 開始時main正本は **1043件 / chronologicalFrontier 2017-01-30 / 1/30群OPEN**。旧INDEXの19件表示は進捗正本にせず、README規定どおりLATEST_HANDOFFと実レコードを優先。
- handoff指定の次候補 **エマ「ニューペガサスREVIVAL」** を再監査した結果、既登録No.1027 **「ニューペガサスR」** と同一機種/同一流通呼称と判定。別レコード化せず重複回避した。
- HAZUSE/P-WORLDはNo.1027の正式型式 `ペガサスR`、検定番号 `6S1222`、2016-12-12導入を掲載。一方2-9伝説は2017-01-30群で「ニューペガサスREVIVAL」と掲載し、後年中古流通資料でも「ニューペガサスR (リバイバル)」表記が確認できる。このため2017-01-30の「REVIVAL」は別型式ではなく同一機種の再販/流通呼称として扱う。
- 2017-01-30群の独立機種は、既登録 **SLOTスターオーシャン4 / パチスロ ソウルキャリバー / オアシスデイズ** で、ニューペガサスREVIVALはNo.1027重複のため **2017-01-30_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 次導入群を再監査し、2017-02-06群へ前進。
- K-Naviの2/6カレンダーに「パチスロマジンガーZ 新たな魔神の力」が掲載されるが、2-9伝説・ちょんぼりすた・すろぱちくえすと等は2017-02-20導入で一致するため、2/6へ早取りせず導入日CONFLICT候補として後続2/20群で処理する。
- 2/6導入が複数系統で一致する **サミー×サンセイR&D「パチスロ牙狼-守りし者-」** をNo.1044として登録し、性能コア＋resetBehavior v0.7を収集。

## No.1044 — パチスロ牙狼-守りし者-
- manufacturer: **サミー（開発製造） / サンセイR&D（販売・共同展開）**
- releaseDate canonical: **2017-02-06**
- formalModelName: **牙狼 守りし者/ZX**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_POWER_STATE_PARTIAL**

### performanceCore
- 機械割: **97.9 / 99.0 / 100.6 / 104.0 / 108.0 / 112.7%**。
- ボーナス合算: **1/399.6 / 358.1 / 387.8 / 336.1 / 336.1 / 309.1**。
- ART「魔戒CHANCE」初当たり: **1/526.1 / 524.5 / 483.4 / 445.1 / 404.5 / 365.5**。
- CZ「桜幻ノ舞」初当たり: **1/213.4 / 219.4 / 186.2 / 167.7 / 145.5 / 126.5**。
- baseGamesPer50: **約33G/50枚**。
- ART純増 **約1.5枚/G**、ボーナス込み実効表記 **約1.8枚/G**。
- BIG系約 **157枚**、REG約 **56枚**、ART基本 **1セット50G+α**。

### resetBehavior v0.7
- settingChangeBehavior: **天井RESET + 666Gへ短縮 / 内部状態再抽選**。
- carryOverBehavior: **通常999G天井の進捗を継続**。設定変更専用666G短縮は非適用。
- powerCycleBehavior: **天井ゲーム数CARRYOVER**。パチマガスロマガは状態も引継ぎ。一撃2017-03-03時点は状態・液晶ステージ調査中で、資料時点差を保持。
- gameCounterReset: 設定変更 **RESET_TO_666G_SPEC** / 据え置き・純電断 **CARRYOVER**。
- ceilingAfterReset: 通常 **999G + 最大32G前兆** → 設定変更後 **666G + 前兆**。
- stateAfterReset: **低確25.0% / 通常25.0% / 高確25.0% / 連舞ショート25.0%**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 天井333G短縮 + 高確25% / 連舞ショート25%を含む状態再抽選。
- resetDetection: 朝一1G目のサミー系ガックンを当時資料が動画付きで紹介。ただし非発生=据え置きとは断定不可のため **POSSIBLE_RESET_INDICATOR_NOT_DETERMINISTIC**。
- public morning numeric: reset ceiling **666G**、状態振り分け各**25.0%**。朝一固定G以内の実ART当選率は **UNVERIFIED_AFTER_RESEARCH**。

### data quality / CONFLICT
- 純電断の内部状態は、初期一撃資料が「現在調査中」、後発パチマガスロマガが「引き継ぐ」。平均せず `TEMPORAL_SOURCE_DIFFERENCE_ICHIGEKI_2017_INVESTIGATING_VS_PACHIMAGA_CARRYOVER` として保持。
- 液晶ステージも一撃初期「調査中」対パチマガスロマガ「紅蓮の森」の時点差を保持。
- 検定番号は `牙狼 守りし者/ZX` / サミー / サンセイ / 6S / 検定番号等で十分に再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 境界監査
- **2017-01-30_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2017-01-30独立登録済み:
  - SLOTスターオーシャン4 — No.1041
  - パチスロ ソウルキャリバー — No.1042
  - オアシスデイズ — No.1043
- 「ニューペガサスREVIVAL」はNo.1027「ニューペガサスR」（ペガサスR / 6S1222）の同一機種流通呼称として重複追加しない。
- **2017-02-06_GROUP_OPEN**。
- 登録済み:
  - パチスロ牙狼-守りし者- — No.1044
- 同日未処理確認候補:
  - **JAWS ～it's a SHARK PANIC～**（オリンピア）
  - **GⅠ優駿倶楽部**（KPE）
  - **パチスロおそ松さん**（D-light）
  - **ジャックポットトロピカルバージョン2**
  - **パチスロ攻殻機動隊S.A.C. 2nd GIG**（別系統導入期限資料で2/6）
  - **パチスロ機動戦士Zガンダム**（別系統導入期限資料で2/6）
- K-Naviに2/6掲載のマジンガーZは複数資料2/20と競合するため、2/6群では保留し2/20で正式処理予定。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1044を再取得。
2. **1044件 / chronologicalFrontier 2017-02-06 / 2/6群OPEN** を正本として継続。
3. 次の未処理機種は **オリンピア「JAWS ～it's a SHARK PANIC～」** をNo.1045候補として処理。
4. 公式/業界/当時解析/古いDBを横断し、導入日・正式型式/検定番号・性能コア・resetBehavior v0.7を固定。
5. その後、GⅠ優駿倶楽部 → おそ松さん → ジャックポットトロピカルバージョン2 → 攻殻機動隊S.A.C. 2nd GIG / 機動戦士Zガンダムを同日監査し、2/6群CLOSED可否を判定。
6. 既登録No.1044以前とニューペガサスR/REVIVALを重複追加しない。

## 主要出典 — 取得日 2026-09-09
### 1/30重複監査
- HAZUSE ニューペガサスR: https://hazuse.com/machine/pachislot/6S1222/
- P-WORLD ニューペガサスR: https://www.p-world.co.jp/machine/database/8243
- 2-9伝説 新台一覧（1/30「ニューペガサスREVIVAL」）: https://29den.com/newslot/
- ヒカカク「ニューペガサスR (リバイバル)」: https://hikakaku.com/category/all-category/patinko/items/3638329/

### No.1044 牙狼-守りし者-
- 一撃 天井・設定変更: https://1geki.jp/slot/s_garo_mamorishimono/3/
- パチマガスロマガ 朝イチ・設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/155/rs.php
- パチマガスロマガ 天井・ヤメ時: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/155/tj.php
- K-Navi: https://p-kn.com/slot/2686/
- P-WORLD: https://www.p-world.co.jp/machine/database/8226
- すろかい: https://slotkaiseki.hatenablog.com/entry/garo
- すろぱちくえすと 朝一設定変更: https://www.slopachi-quest.com/article/garo-mamorishimono-reset/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/garo/
- 日刊ゲンダイ 発表会記事: https://www.nikkan-gendai.com/articles/view/pr/195690
- 中一商事 型式確認: https://www.nakaiti.com/html/sSammy188.html

### 境界/次群
- K-Navi 2017年2月導入カレンダー: https://p-kn.com/calendar/201702/
- PiDEA 5号機設置期限一覧: https://www.pidea.jp/articles/1620982702
- 2-9伝説 新台一覧: https://29den.com/newslot/
