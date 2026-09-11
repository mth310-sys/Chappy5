更新日: 2026-09-11

## 現在地点
- recordCount: **1366**
- latestRecordAdded: **アナターのオット!?はーです — No.1366**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-09-07_anata-no-otto-hades.md`
- chronologicalFrontier: **2020-09-07**
- frontierLatestMachine: **アナターのオット!?はーです — No.1366**
- schema: **resetBehavior v0.7**
- status: **2020-09-07_GROUP_CLOSED_AFTER_FULL_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1365「ハイパーブラックジャック」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 正本上の次の未処理候補 **アナターのオット!?はーです** をNo.1366として追加。
- 2020-09-07の当時導入記事・機種DB・新台資料を横断し、同日へ追加すべき別パチスロを固定できなかったため9/7群CLOSED。
- 旧販売予定表に9/7として存在した「回胴黙示録カイジ～沼～」は、実導入が2020-10-19へ延期された資料を複数確認したため9/7群には登録しない。

## No.1366 — アナターのオット!?はーです
- path: `docs/real_machine_db/machines/2020-09-07_anata-no-otto-hades.md`
- manufacturer: **ミズホ**
- formalModel: **S／アナターのオット！？はーです／BR**
- certificationNumber: **0S0094**
- releaseDate: **2020-09-07**
- generation/system: **6号機 / AT / チャレンジ型AT+ゲーム数上乗せAT**
- 出玉率: **97.7 / 99.3 / 101.4 / 103.0 / 105.1 / 108.2%**
- AT初当たり: **1/199.2 / 1/197.2 / 1/194.6 / 1/181.7 / 1/163.4 / 1/162.3**
- base: **約39.8G/50枚**（HAZUSEは46枚あたり同値表記のため分母定義差をレコード内に注記）
- netIncrease: **約2.5枚/G**
- GOD RUSH: **40G+α**。JUDGEMENTは最大10G ST型、平均上乗せはゆるべろす約20G / ゆるせぽね約40G / ゆるはーです約80G。
- 天井: 有利区間移行後 **555G+αでゆるちゃれ**。闇天国は最大100G+αでJUDGEMENT。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_MODE_DATA**

### resetBehavior v0.7 — No.1366
- 設定変更: **天井G RESET、非有利区間へ移行、通常内部モード/裏キャラモードを再抽選、有利区間ランプ消灯**。
- 据え置き/純電源OFF→ON: **天井G・モード・内部状態・有利区間CARRY_OVER**。
- 朝一ランプ消灯＝設定変更濃厚、点灯＝据え置き濃厚。ただし前日非有利区間終了や店側対策等の例外があるため確定扱いにしない。
- 有利区間移行時の通常内部モード公開値（設定1）: **通常約20% / 天国準備約75% / 天国約5% / 低確0%**。設定変更後にも適用されるが、設定変更専用表ではなく有利区間移行時共通値。
- 設定変更専用の固定短縮天井は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率は検索語・資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2020-09-07群監査
- グリーンべると、遊技通信、K-Navi、HAZUSE等で **アナターのオット!?はーです** の2020-09-07導入を一致確認。
- 旧販売予定に9/7表記のあった **回胴黙示録カイジ～沼～** は、後続機種DB/攻略資料で実導入2020-10-19を一致確認。延期機として後日に回す。
- 別型式・別スペック・PB・地域差を含め9/7へ追加すべき未処理パチスロは固定できず。
- 群判定: **CLOSED_AFTER_FULL_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理: `docs/real_machine_db/machines/2007-04-15_kuma-sakaba.md`（熊酒場）。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）**。
- 今回は本線No.1366収集と9/7群監査を優先し、遡及QAの順番は変更していない。

## 次回本線の再開地点
- 最新main再同期後、**2020-09-23群**へ進む。
- 先頭候補: **リングにかけろ1 ワールドチャンピオンカーニバル編 — No.1367候補**。
- 続く候補: **対魔導学園35試験小隊**。
- 9/23群を全メーカー・別型式・別スペック・PB・地域差・延期機まで横断監査してCLOSED可否を判定する。
- 「回胴黙示録カイジ～沼～」は2020-10-19実導入候補として、その時系列地点まで保留する。

## GitHub保存
- No.1366追加 commit: `7f62168f459b2ff489585ae30a91e8fb144ba7c9`

## 主要出典 — 取得日 2026-09-11
### No.1366 アナターのオット!?はーです
- HAZUSE: https://hazuse.com/machine/pachislot/0S0094/
- HAZUSE内部状態: https://hazuse.com/machine/pachislot/0S0094/genre/209/
- グリーンべると導入: https://news.p-world.co.jp/articles/14557/greenbelt
- 遊技通信: https://news.p-world.co.jp/articles/14329/yugitsushin
- グリーンべると検定通過: https://news.p-world.co.jp/articles/13302/greenbelt
- K-Navi: https://p-kn.com/slot/3461/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9219
- イチカツ: https://ichikatsu.com/husbandhades/
- すろぱちくえすと設定: https://www.slopachi-quest.com/article/anata-noottoha-desu-settei/
- すろぱちくえすと天井: https://www.slopachi-quest.com/article/anata-noottoha-desu-tenjou/
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/44/kh01.php
- パチマガスロマガモード移行: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/44/tj09-2.php
- なな徹有利区間移行時: https://nana-press.com/kaiseki/machine/78/1665/
- 1geki有利区間/裏キャラ: https://1geki.jp/slot/s_husband_hades/41/
- DMMぱちタウン朝一: https://p-town.dmm.com/specials/2330
- 期待値見える化: https://slotjin.com/tenjoukitaichi/ottohades/

### 次回境界 / 延期確認
- 回胴黙示録カイジ～沼～実導入2020-10-19: https://www.pachibee.jp/machines/index/220020002
- 同機解析: https://www.slopachi-quest.com/article/kaiji-numa-tenjou/
