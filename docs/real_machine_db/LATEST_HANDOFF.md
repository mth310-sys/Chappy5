# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **815**
- latestRecordAdded: **パチスロ ロストアイランド**（Sammy）— 2014-05-07
- latestRecord: `docs/real_machine_db/machines/2014-05-07_lost-island.md`
- chronologicalFrontier: **2014-05-07**
- frontierLatestMachine: **パチスロ ロストアイランド**
- schema: **resetBehavior v0.7**
- status: **2014-05-07_GROUP_OPEN / LOST_ISLAND_ADDED**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-04-21_new-pegasus.md` を再読して正本化。
- 作業開始時の正本は **814件 / 2014-04-21 ニューペガサス / 04-21_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- INDEXは旧19件集約のままなのでREADME規定に従い、より新しい `LATEST_HANDOFF.md` と実レコードを進捗正本として継続。
- 2014-04-22〜05-06境界を再監査し、K-Naviの4月・5月全国一斉導入カレンダーおよび2014年機種一覧系で、この期間に追加すべき具体日付き未登録パチスロを固定できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 次の具体日 **2014-05-07** へ進み、同日群1機目 **パチスロ ロストアイランド** を815件目として追加。

## 今回追加 — パチスロ ロストアイランド

### identity / 性能コア

- manufacturer: **Sammy / サミー**。
- hall start: **2014-05-07**。K-Naviと複数解析資料で一致。
- generation/system: **5号機 / AT / BR非搭載 / ゲーム数解除+自力解除**。
- payoutRateBySetting: **97.0 / 98.3 / 100.9 / 103.6 / 107.3 / 117.1%**。
- AT初当たり: **1/198.8 / 192.3 / 185.0 / 171.9 / 158.9 / 124.5**。
- baseGamesPer50: **約23G**（当時スペック速報の単一系統値、別系統照合待ち）。
- AT純増: **約3.0枚/G**。
- 基本AT: 赤ハイビスカス1ライン **30G**、金ハイビスカス1ライン **100G**、最大8ライン。
- 通常最大天井: **777G**、到達で **200G以上AT**。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- settingChangeBehavior: **モーニングモード確定**。
- gameCounterReset: 設定変更時は通常G数契約からモーニング専用契約へ再設定。據え置きでは **内部ゲーム数の宵越し機能を確認**。
- ceilingAfterReset: **99%が555G以内 / 777G 1%**。旧資料の「555G固定天井」は訂正後解析と競合するため不採用。
- modeAfterReset: **モーニングモード**。
- numericResetData: モーニングのゲーム数直当たり **1/283.79**、直当たり時 **金ハイビスカス2ライン以上**。
- carryOverBehavior: 宵越しゲーム数が機能する実戦/当時解析記録あり。ただしガセ前兆は設定変更/据え置きに関係なく **当日ゲーム数依存**。
- powerCycleBehavior: 純電源OFF→ON時の天井G・モード・内部状態は **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: 低確/高確等の設定変更時初期振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: 通常ゾーンのガセ前兆では変更判別不可。上部リールのガックン言及は単一実戦系のため **POSSIBLE / NOT_CONFIRMED**。
- publicMorningNumbers: **99%が555G以内 / 777G 1% / 直当たり1/283.79**。
- resetBehaviorQA: **PARTIAL_WITH_STRONG_MORNING_MODE_DATA**。

## 2014-04-22〜05-06境界監査

- K-Navi 2014年4月カレンダーでは04-21群以降、月末まで追加パチスロ掲載なし。
- K-Navi 2014年5月カレンダーの最初のパチスロ具体日は **05-07**。
- 2014年機種一覧系でも4月対象は既処理のマタドール-30、サムライスピリッツ、モンキーターンII、喧嘩祭、緑ドンVIVA2、Magic Monster3、ハッピージャグラーVII等の既登録群で整合。
- status: **2014-04-22_TO_2014-05-06_CLOSED_FOR_CURRENT_RESEARCH**。

## 2014-05-07群

K-Navi全国一斉導入カレンダーでパチスロは2機:
1. **パチスロ ロストアイランド**（Sammy）— 処理済み / No.815
2. **パチスロ マクロスフロンティア2**（SANKYO）— **次の未処理機種**

status: **2014-05-07_GROUP_OPEN**。

## safeguards / definitions

- ロストアイランドのリセット後は「555G固定」とせず、訂正後解析に従い **777G 1%を残す**。
- 通常777G天井の200G以上AT恩恵をリセット555G側へ根拠なく転記しない。
- 据え置き宵越し内部G数と、当日G依存ガセ前兆を別契約として扱う。
- 2016年「ビッグドリーム in ロストアイランド2」等の後継別機種情報を混入しない。
- formalModelName / 検定番号は再探索後も今回固定できずUNVERIFIED。

## 次回再開地点

1. **recordCount 815 / chronologicalFrontier 2014-05-07 / 05-07_GROUP_OPEN** から開始。
2. 次の未処理機種は **パチスロ マクロスフロンティア2（SANKYO）**。
3. 性能コア＋resetBehavior v0.7を収集し、05/07同日群を全メーカー横断再監査してCLOSED判定。
4. その後は **2014-05-08〜05-11境界監査 → 2014-05-12「パチスロ サムライチャンプルー 流転輪廻」** へ進む。
5. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md` を維持。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- K-Navi 2014年4月カレンダー: `https://p-kn.com/calendar/201404/`
- K-Navi 2014年5月カレンダー: `https://p-kn.com/calendar/201405/`
- 2014年スロット機種一覧: `https://www.nikuziru.com/slot/2014slot-list`

### ロストアイランド
- P-WORLD: `https://www.p-world.co.jp/machine/database/7354`
- パチマガスロマガ旧攻略: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/142/a.php`
- パチスロ解析ガイド: `https://pachislot-guide.net/2014/lost-island/`
- man-soft解析: `https://smaslo.man-soft.com/slot-kaiseki/lostisland.html`
- すろぱちくえすと（2014-06-22/24）: `https://www.slopachi-quest.com/article/lostisland-zone/`
- 真パチスロ備忘録（2014-08-16）: `https://sin-surobi.com/lostiland/5320/`
- 当時スペック速報（2014-03-15）: `https://pachinkopachisro.com/archives/36967059.html`
- P-Summa朝一回顧: `https://psumma.jp/trend/17593/`
