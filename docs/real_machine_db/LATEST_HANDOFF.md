更新日: 2026-09-13

## 現在地点
- recordCount: **1560**
- latestRecordAdded: **L主役は銭形4 — No.1560**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-05-08_l-shuyaku-wa-zenigata4.md`
- chronologicalFrontier: **2023-05-08**
- frontierLatestMachine: **L主役は銭形4 — No.1560**
- schema: **resetBehavior v0.7**
- status: **2023-05-08_GROUP_OPEN_1_OF_3_CANONICAL_PROCESSED / NEXT_NO1561_S_FIRE_FORCE**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1559 `Lゴブリンスレイヤー` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 直前handoffの次の未処理である2023-05-08群を再監査。
- `L戦国BASARAギガZE` はグリーンべると/P-WORLDの5/8更新スケジュールに5/8導入として掲載されるが、ユニバーサル側資料では5/8発売発表・ホール導入8月予定、K-Naviおよびグリーンべると実導入記事では2023-08-07で一致。5/8実導入群から除外し、8/7境界で再確認する。
- `パチスロ ジャベリン` は一撃動画ページに2023-05-08導入表記がある一方、なな徹および2023年導入一覧では2023-05-22で一致。現時点では5/22をcanonical候補として5/8群には入れず、5/22境界で `CONFLICT_RELEASE_DATE` として再監査する。
- 2023-05-08 canonical knownは現時点で `L主役は銭形4`、`パチスロ 炎炎ノ消防隊`、`マイフラワー2-30` の3機。
- No.1560を性能コア + resetBehavior v0.7で追加。

## No.1560 — L主役は銭形4
- manufacturer: **オリンピア（平和グループ）**
- formalModel: **L主役は銭形4L1**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2023-05-08**
- generation/system: **6.5号機 / スマスロAT / ゲーム数上乗せ型**
- payoutRate: **98.2 / 98.7 / 100.7 / 104.3 / 109.5 / 114.1%**
- AT初当り: **1/367.9 / 1/365.3 / 1/348.3 / 1/329.0 / 1/314.5 / 1/305.8**
- baseGamesPer50: **約32.0G/50枚（設定1）**
- netIncrease: **約2.7枚/G**
- basicPayout: **逮捕RUSH 初期50G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMBERS_AND_POWER_CYCLE_GAP**

### resetBehavior v0.7 — No.1560
- 設定変更: **有利区間・天井・内部状態・モードRESET / 執念ポイント再抽選**。
- 据え置き: **有利区間・天井・内部状態・モード・執念ポイントCARRY_OVER**。
- 純電源OFF→ON: 本機固有の独立比較資料を十分な再探索後も固定できず、各項目を **UNVERIFIED_AFTER_RESEARCH**。設定変更/据え置き表から推測転記しない。
- 通常実ゲーム数天井: **999G**。
- 通常ガッツ最大天井: **1399ガッツ**。
- 設定変更後ガッツ最大天井: **899ガッツ**（500ガッツ短縮）。
- 設定変更時の初期執念ポイントは **50pt以上 約60.2%**。
- 設定変更時の内部状態は **通常50% / 高確50%**。
- 設定変更時の通常モード振り分けは高信頼解析でも詳細調査中で、再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 朝一のガッツカウンターは設定変更/据え置きとも `？？？`、ステージも市街地で単独判別不可。
- 据え置きは内部進行を引き継ぐため、規定ガッツゾーンのズレが据え置き可能性UP材料。
- 有利区間ランプ判別不可。本機固有ガックン条件/発生率も `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers — No.1560
- 設定変更後ガッツ天井: **最大899ガッツ**。
- 初期執念ポイント50pt以上: **約60.2%**。
- 初期高確: **50%**。
- 初期執念ポイント詳細: 49pt以下39.8 / 50pt25.0 / 55pt0.4 / 60pt4.7 / 65pt7.4 / 70pt9.8 / 75pt0.4 / 80pt9.8 / 85pt0.4 / 90pt2.3%。

## 2023-05-08群 — OPEN 1/3 canonical
1. L主役は銭形4 — No.1560 **DONE**
2. パチスロ 炎炎ノ消防隊 — **NEXT**
3. マイフラワー2-30 — pending

### 境界CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8更新スケジュール表記と、発売発表/実導入8/7の差。**2023-08-07へdeferしCONFLICT保持**。
- `パチスロ ジャベリン`: 一撃動画の5/8表記 vs なな徹・導入一覧の5/22。**2023-05-22をcanonical候補としてdeferし、5/22境界で再監査**。
- `課長 熊田工作`: 公式系/業界資料で5月下旬、パチビーで **2023-05-22**。5/8群には含めない。

## resetBehavior 遡及QA
- 本線の新規機種収集を優先して継続。
- 既存QA再開候補は `2007-06-25_morning-musume.md` の安全な全文更新可否確認後、`2007-07-08_caribbean-queen.md`。
- 既存性能値は再収集せず、resetBehaviorのみ必要時に遡及補完する。

## 今回の主要資料
### No.1560 L主役は銭形4
- 平和公式導線 / 遊技日本・P-WORLD: https://news.p-world.co.jp/articles/23192/nippon
- 遊技日本・P-WORLD 販売発表: https://news.p-world.co.jp/articles/23259/nippon
- グリーンべると・P-WORLD: https://news.p-world.co.jp/articles/23369/greenbelt
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4076/1/94084
- パチ＆スロ必勝本 スペック: https://p.hisshobon.jp/vpage/2529/2
- なな徹 AT確率/機械割: https://nana-press.com/kaiseki/machine/531/14421/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/531/14824/
- なな徹 天井: https://nana-press.com/kaiseki/machine/531/14822/
- なな徹 モード: https://nana-press.com/kaiseki/machine/531/14917/
- K-Navi: https://p-kn.com/slot/3938/
- すろぱちくえすと: https://www.slopachi-quest.com/article/syuyakuhazenigata4-settei/

### 境界監査
- グリーンべると/P-WORLD 2023-05-08新台スケジュール: https://news.p-world.co.jp/articles/23998/greenbelt
- ユニバーサル「戦国BASARA GIGA」5/8発売発表・8月導入予定: https://www.fieldservice.store/business-topics/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%80%81%E3%80%8C%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD-%E6%88%A6%E5%9B%BDbasara-giga%E3%80%8D%EF%BD%90%EF%BD%96%E3%83%BB%E8%A9%A6%E6%89%93
- K-Navi 戦国BASARA GIGA: https://p-kn.com/slot/3965/
- グリーンべると 8/7実導入: https://web-greenbelt.jp/post-75158/
- 一撃 ジャベリン動画ページ（5/8表記）: https://1geki.jp/slot/s_javelin/7/
- なな徹 機種一覧（ジャベリン5/22）: https://nana-press.com/kaiseki/index/machine/s/sa/
- すろぱちくえすと 2023導入一覧（ジャベリン5/22）: https://www.slopachi-quest.com/article/2023-dounyuukisyu/
- パチビー 課長熊田工作（5/22）: https://www.pachibee.jp/machines/about/223040001

## 保存コミット
- No.1560追加: `e6ad8f3924e46c4ce79c38fba2c3adc6303b38fb`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1561候補 `パチスロ 炎炎ノ消防隊`（ジェイビー / 2023-05-08）から継続。性能コア + resetBehavior v0.7を収集後、`マイフラワー2-30` を処理し、2023-05-08群をCLOSED監査する。`L戦国BASARAギガZE` は2023-08-07、`パチスロ ジャベリン` は2023-05-22境界で導入日CONFLICTを再監査する。**
