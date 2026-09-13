更新日: 2026-09-13

## 現在地点
- recordCount: **1551**
- latestRecordAdded: **パチスロ 探偵オペラ ミルキィホームズR 大収穫祭!!!! — No.1551**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-02-20_milky-holmes-r-daishukakusai.md`
- chronologicalFrontier: **2023-02-20**
- frontierLatestMachine: **パチスロ 探偵オペラ ミルキィホームズR 大収穫祭!!!! — No.1551**
- schema: **resetBehavior v0.7**
- status: **2023-02-20_GROUP_CLOSED_2_OF_2 / NEXT_2023-03-06_GUNDAM_UNICORN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1549 `パチスロ戦国無双3` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり、最新handoffとmain実レコードを進捗正本として採用。
- No.1550 `パチスロ盾の勇者の成り上がり` とNo.1551 `パチスロ 探偵オペラ ミルキィホームズR 大収穫祭!!!!` を性能コア + resetBehavior v0.7で追加。
- 導入日順2023年一覧、2023年導入カレンダー、K-Navi等で2023-02-20群を再監査。パチスロは盾の勇者 + ミルキィホームズRの2機で一致したため2023-02-20群をCLOSED。
- 次の新規パチスロ境界は2023-03-06。既知は `パチスロ機動戦士ガンダムユニコーン` と `戦国コレクション5` の2機。

## No.1550 — パチスロ盾の勇者の成り上がり
- manufacturer: **銀座 / サミー**
- formalModel: **S パチスロ盾の勇者の成り上がり KS**
- inspectionCode: **2S0711**
- releaseDate: **2023-02-20**
- generation/system: **6.5号機 / メダルAT / CZ経由・ST型AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.5 / 100.5 / 104.9 / 108.1 / 111.5%**
- AT初当たり: **1/298.9 / 1/284.0 / 1/274.3 / 1/246.7 / 1/228.5 / 1/190.5**
- baseGamesPer50: **約36.0G/50枚**
- netIncrease: **約2.6枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_SHORTENED_CEILING_RANDOM_GAME_ADD_AND_PUBLIC_POPE_POINT_DISTRIBUTION**

### resetBehavior v0.7 — No.1550
- **設定変更**: 有利区間・天井・内部状態RESET。通常1173G+α天井が800G+αへ短縮。液晶0G表示だが内部ゲーム数をランダム加算。教皇ポイント抽選。謎高確移行が優遇。ガックンなし。
- **据え置き**: 有利区間・天井・内部状態・内部ゲーム数CARRY_OVER。液晶は0G表示。
- **純電源OFF→ON**: 有利区間・天井・内部状態・内部ゲーム数CARRY_OVER。液晶0G、ガックンなし。
- **公開朝一数値**: 教皇ポイント 0pt 50.0% / +1pt 20.8% / +2pt 16.7% / +3pt 8.3% / +5pt 4.2%。1pt以上合算50.0%。
- **未確定**: 内部ゲーム数ランダム加算の具体振り分け、謎高確の具体移行率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- **変更判別**: 有利区間ランプなし、ガックンなし、変更/据え置きとも液晶0G。800G超AT非当選や宵越し天井は据え置き材料。

## No.1551 — パチスロ 探偵オペラ ミルキィホームズR 大収穫祭!!!!
- manufacturer: **カルミナ販売 / ネット製造**
- formalModel: **SパチスロミルキィホームズGNB**
- inspectionCode: **230198**
- releaseDate: **2023-02-20**
- generation/system: **6.5号機 / メダルAT / 疑似ボーナス・A-500タイプ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 98.9 / 101.0 / 104.2 / 106.9 / 108.7%**
- ボーナス合算: **1/255 / 1/245 / 1/227 / 1/209 / 1/198 / 1/148**
- MMB: **1/349 / 1/337 / 1/319 / 1/300 / 1/288 / 1/201**
- MB: **1/964 / 1/908 / 1/802 / 1/700 / 1/642 / 1/560**
- baseGamesPer50: **33.3 / 33.5 / 33.6 / 35.0 / 37.1 / 73.0G/50枚（設定1〜6）**
- netIncrease: **約4.5枚/G**
- basicPayout: **MMB平均約480枚 / MB50枚 / ボーナス後100G+α収穫祭**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_INITIAL_STATE_DISTRIBUTION**

### resetBehavior v0.7 — No.1551
- **設定変更**: 有利区間・ボーナス間777G+α天井・内部状態RESET。シャロ・昼開始。内部状態を専用振り分けで再抽選。
- **据え置き**: 有利区間・ボーナス間天井・内部状態CARRY_OVER。
- **純電源OFF→ON**: 有利区間・ボーナス間天井・内部状態CARRY_OVER。シャロ・昼開始。
- **公開朝一数値**: 通常34.7% / 高確A 2.3% / 高確B 34.7% / 高確C 2.3% / 収穫祭26.0%。高確A以上合算65.3%。
- **朝一恩恵**: 26.0%で内部収穫祭、高確A以上65.3%。設定変更専用ゲーム数天井短縮は確認なし。
- **未確定**: MMB間1000G救済カウンタ、MB2連続救済カウンタの設定変更/据え置き/純電断直接契約、本機固有ガックン、朝一特定G以内当選率は再探索後も `UNVERIFIED/PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- **CONFLICT**: 設定1ベース33.1G概要値 vs 詳細表・別系統33.3G。canonicalは複数一致の33.3G。MMB平均約480枚 vs 業界表現「500枚近く」は定義/丸めを分離。

## 2023-02-20群 — CLOSED 2/2
1. パチスロ盾の勇者の成り上がり — No.1550
2. パチスロ 探偵オペラ ミルキィホームズR 大収穫祭!!!! — No.1551

## 次群候補 — 2023-03-06
1. **パチスロ機動戦士ガンダムユニコーン（ビスティ）** — 未処理
2. **戦国コレクション5（コナミアミューズメント）** — 未処理

## 今回の主要資料
### No.1550
- HAZUSE: https://hazuse.com/machine/pachislot/2S0711/
- パチ＆スロ必勝本: https://p.hisshobon.jp/vpage/2503/2
- 一撃: https://1geki.jp/slot/s_tat_yu/
- パチマガスロマガ 朝イチ・有利区間: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/202/kr01.php
- なな徹 朝一: https://nana-press.com/kaiseki/machine/500/13695/
- パチマガスロマガ CZ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/202/cz01-2.php
- パチマガスロマガ BIG: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/202/tk01-1.php
- SLOT HACK: https://slothack.net/matome/92005/
- パチ7: https://pachiseven.jp/machines/6680/cutout/1007

### No.1551
- P-WORLD: https://www.p-world.co.jp/machine/database/9778
- 遊技日本/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/22790/nippon
- PiDEA検定: https://www.pidea.jp/articles/1671498988
- 遊技通信検定: https://news.p-world.co.jp/articles/22607/yugitsushin
- ちょんぼりすた: https://chonborista.com/slot/carmina/180299/
- スロパチクエスト: https://www.slopachi-quest.com/article/milky-holmes-r-tenjyou/
- イチカツ: https://ichikatsu.com/milkyholmesr/
- フリック7: https://flick7.net/slot/reset_guide2023.php
- パチマガスロマガ MMB: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/05/bn01-4.php

### 境界監査
- 導入日順2023年一覧: https://www.slopachi-quest.com/article/2023-dounyuukisyu/
- 2023年導入カレンダー: https://ichikatsu.com/new-machine-calendar2023/
- K-Navi 2023年3月導入カレンダー: https://p-kn.com/guide/calendar/202303/

## 保存コミット
- No.1550追加: `0e2b7973c49ef4e268a62394b091b9c1793eaca9`
- No.1551追加: `857f7e29c26bd227c2ad40f7995a4846971bacde`
- handoff更新: 本コミット

## 次回再開地点
**No.1552候補 `パチスロ機動戦士ガンダムユニコーン`（ビスティ / 2023-03-06）から継続する。正式型式・検定番号、性能コア、resetBehavior v0.7（設定変更/据え置き/純電断、ゲーム数・天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値）を欠損判定前に表記揺れ・型式名・メーカー名・各リセット語で再探索する。その後 `戦国コレクション5` を処理し、PB・別型式・30Φ派生・地域先行・延期/段階導入まで再監査して2023-03-06群をCLOSED判定する。既存No.1551以前の性能値はやり直さない。**
