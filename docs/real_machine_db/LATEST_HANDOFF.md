更新日: 2026-09-11

## 現在地点
- recordCount: **1367**
- latestRecordAdded: **PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編 — No.1367**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-09-23_ring-ni-kakero1-world-champion-carnival.md`
- chronologicalFrontier: **2020-09-23**
- frontierLatestMachine: **PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編 — No.1367**
- schema: **resetBehavior v0.7**
- status: **2020-09-23_GROUP_OPEN_1_OF_AT_LEAST_2_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1366「アナターのオット!?はーです」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 正本上の次の未処理候補 **PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編** をNo.1367として追加。
- 2020-09-23群では少なくとも **リングにかけろ1 WCC** と **対魔導学園35試験小隊** の同日導入を複数資料で確認。群はまだOPEN。
- 「回胴黙示録カイジ～沼～」は2020-10-19実導入候補として引き続き保留。

## No.1367 — PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編
- path: `docs/real_machine_db/machines/2020-09-23_ring-ni-kakero1-world-champion-carnival.md`
- manufacturer: **スパイキー（製造） / エンターライズ（開発） / フィールズ（総発売元）**
- formalModel: **S RK1 WCC編YB**
- certificationNumber: **0S0442**
- releaseDate: **2020-09-23**
- generation/system: **6号機 / 差枚数管理型AT / 周期+CZ / 有利区間管理**
- 出玉率: **97.7 / 99.0 / 100.8 / 104.5 / 107.0 / 110.1%**
- AT初当たり: **1/499.4 / 1/476.5 / 1/462.5 / 1/424.6 / 1/416.9 / 1/381.3**
- base: **約50G/50枚**
- netIncrease: **約3.1枚/G**
- AT「チャンピオンロード」初期枚数: **100〜250枚**。影道総帥フリーズ時は初期1000枚濃厚。
- 天井: 有利区間移行後 **999G**、AT当選濃厚+青7選択率優遇。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMERIC_DATA**

### resetBehavior v0.7 — No.1367
- 設定変更: **有利区間RESET→非有利区間、天井G RESET、モード再抽選、内部状態再抽選、液晶ポイント表示RESET**。
- 据え置き/純電源OFF→ON: **有利区間・天井G・モード・内部状態をCARRY_OVER**。液晶ポイントは「??」表示になるが内部的には引継ぎ。
- 設定変更専用の固定短縮天井は確認できず、通常の999G天井を新規区間0G相当から開始。
- 朝一の最初のCZは真・ギリシアバトル相当が選ばれやすい。設定変更時は内部的に真ギリシア相当でも通常告知が出ず、勝利時の青7恩恵として現れる場合があるため、液晶表示と内部恩恵を分離して保存。
- 公開朝一比較値: **有利区間開始時の真・ギリシアバトル発展率20.3%**。これは設定変更専用表ではなく有利区間開始時共通値。
- 有利区間ランプは通常時/CZ中消灯、AT中のみ点灯するため **朝一ランプ判別不可**。
- 据え置きでは周期進行も内部的に引き継がれるため、前日周期途中なら朝一50G未満の周期到達が据え置き推測材料。ただし前日状況依存なので確定扱いしない。
- 本機固有ガックン条件/発生率、および設定変更専用の全モード振り分けは十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2020-09-23群監査 — 継続中
- **PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編**: 2020-09-23導入をHAZUSE、イチカツ、ちょんぼりすた等で一致確認。No.1367として処理済み。
- **対魔導学園35試験小隊**: 2020-09-23導入をちょんぼりすた、必勝本、当時新台資料等で一致確認。次回先頭候補。
- 9/23群はまだ全メーカー・別型式・別スペック・PB・地域差・延期機の最終監査前のため **OPEN**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理: `docs/real_machine_db/machines/2007-04-15_kuma-sakaba.md`（熊酒場）。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）**。
- 今回は本線No.1367収集を優先し、遡及QAの順番は変更していない。

## 次回本線の再開地点
- 最新main再同期後、**2020-09-23群を継続**。
- 先頭候補: **対魔導学園35試験小隊 — No.1368候補**。
- No.1368処理後、9/23群を全メーカー・別型式・別スペック・PB・地域差・延期機まで横断監査して追加機種の有無とCLOSED可否を判定する。
- 「回胴黙示録カイジ～沼～」は2020-10-19実導入候補として、その時系列地点まで保留する。

## GitHub保存
- No.1367追加 commit: `e83b1509390e2205273d70ca3d16eb620b2e5039`

## 主要出典 — 取得日 2026-09-11
### No.1367 リングにかけろ1 WCC
- HAZUSE: https://hazuse.com/machine/pachislot/0S0442/
- HAZUSE AT: https://hazuse.com/machine/pachislot/0S0442/genre/209/
- グリーンべると: https://web-greenbelt.jp/post-39937/
- イチカツ: https://ichikatsu.com/rinkake1/
- パチマガスロマガ AT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/15/at01.php
- パチマガスロマガ 真ギリシア: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/15/tj11-1.php
- 1geki通常時/真ギリシア: https://1geki.jp/slot/s_rinkake1/42/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/117258/
- すろぱちくえすと: https://www.slopachi-quest.com/article/rinkake-world-tenjou/
- pacnk: https://pacnk.com/slot/tools/sh_ringunikakeroichiwarudochampionkanibaruhen.html
- パチスロメソッド: https://slotmethod.jp/archives/9936/

### 次回候補 / 境界
- 対魔導学園35試験小隊: https://chonborista.com/slot/orinpia-slot/117208/
- 対魔導学園35試験小隊 必勝本: https://p.hisshobon.jp/machine/3544/1/78656
