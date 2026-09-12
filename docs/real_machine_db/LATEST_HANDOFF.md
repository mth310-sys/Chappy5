更新日: 2026-09-12

## 現在地点
- recordCount: **1439**
- latestRecordAdded: **パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION — No.1439**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-11-08_anemone-eureka-seven-hi-evolution.md`
- chronologicalFrontier: **2021-11-08**
- frontierLatestMachine: **パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION — No.1439**
- schema: **resetBehavior v0.7**
- status: **2021-11-08_GROUP_OPEN_1_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1438「パチスロ かまいたちの夜」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 2021-10-04群CLOSED後の指定どおり、2021-11-08群先頭のNo.1439「パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION」を追加。
- 型式/検定、メーカー発表由来スペック、複数解析の性能コア、設定変更/据え置き/純電断、有利区間ランプ、モード別天井、有利区間開始時モード振り分けを横断照合。
- 設定変更専用の固定短縮天井・独自モードテーブルは確認されない。有利区間開始時の共通モード振り分けを朝一比較用数値として保存し、リセット専用値と誤認しない注記を付与。
- 本機固有ガックンと純電断後の表示ステージ詳細は検索語/型式/資料系統を変えても固定できず、一般論補完せずUNVERIFIED_AFTER_RESEARCH。
- 遡及resetBehavior QAカーソルは今回本線優先のため動かさず、`2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）を維持。

## No.1439 — パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION
- path: `docs/real_machine_db/machines/2021-11-08_anemone-eureka-seven-hi-evolution.md`
- manufacturer: **ロデオ製造 / サミー総発売元**
- formalModel: **S ANEMONE FF**
- certificationNumber: **1S0790**
- releaseDate: **2021-11-08**
- generation/system: **6.2号機 / AT / 擬似ボーナス / CZ / 有利区間3000G対応**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 100.1 / 105.4 / 108.6 / 110.5%**
- BONUS初当たり: **1/178.8 / 1/171.9 / 1/171.4 / 1/147.9 / 1/144.9 / 1/126.0**
- AT初当たり: **1/537.3 / 1/519.9 / 1/493.3 / 1/433.3 / 1/378.0 / 1/357.6**
- baseGamesPer50: **約37G/50枚**
- netIncrease: **約2.6枚/G**
- basicPayout: **GULLIVER BONUSベルナビ5回 / ANEMONE BONUSベルナビ10回 / EPISODE BONUS30G / NIRVASH-X BONUS20G**
- normalCeiling: **通常808G / ガリバー606G / エピソード505G（有利区間開始時モード依存）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_ADVANTAGEOUS_SECTION_START_MODE_TABLE**

### resetBehavior v0.7 — No.1439
- **設定変更**: 天井・内部モード・内部状態・有利区間RESET。朝一は富士基地内。有利区間開始時の通常処理へ入る。
- **据え置き**: 天井進行・内部モード/状態・継続中の有利区間をCARRY_OVER。
- **純電源OFF→ON**: 天井・内部モード/状態・有利区間をCARRY_OVER。表示ステージ詳細は当時資料で調査中のため推測しない。
- **天井**: 通常808G / ガリバー606G / エピソード505G。GULLIVER BONUS後は有利区間と天井進行を継続。同一有利区間でGULLIVER BONUS6連続AT非当選なら次回NIRVASH-X BONUS。
- **リセット短縮**: 固定の設定変更専用短縮天井なし。606G/505Gは有利区間開始時に特殊モードが選ばれた場合の通常仕様。
- **有利区間開始時モード振り分け（非レア役）**: 通常/ガリバー/エピソードは設定1=`97.3/1.6/1.2%`、設定2=`97.3/1.2/1.6%`、設定3=`96.9/1.2/2.0%`、設定4=`96.9/1.2/2.0%`、設定5=`95.7/1.2/3.1%`、設定6=`94.5/0.8/4.7%`。設定変更専用値ではなく有利区間開始共通値。
- **変更判別**: 朝一点灯なら据え置き濃厚。消灯単独では判別不可。ただし前日点灯確認済み→朝一消灯ならリセット濃厚。GULLIVER BONUS後は点灯継続。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。

## 2021-11-08群 — OPEN
1. **パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION — No.1439 / DONE**
2. **CCエンジェル — No.1440候補 / NEXT**
3. **パチスロGANTZ極 THE SURVIVAL GAME — 未処理**
4. **パチスロ戦国乙女 暁の関ヶ原-DARKNESS- — 未処理**
5. **ハイハイシオサイ2 — 未処理**
- 群は未CLOSED。次回開始時に全メーカー・PB・地域先行・25/30Φ別型式・延期/段階導入を再監査してからNo.1440を固定する。

## 次回本線の再開地点
- **2021-11-08群 / No.1440候補: CCエンジェル**。
- CCエンジェル処理後、GANTZ極 THE SURVIVAL GAME → 戦国乙女 暁の関ヶ原-DARKNESS- → ハイハイシオサイ2の順に既知候補を処理し、同日群を横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_kemonocchi.md`（けものっち!）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）**。
- 今回は本線No.1439を優先したためカーソルを進めていない。

## GitHub保存
- No.1439追加 commit: `a06e5fb57730749524711b41c10cfb16abe1ae5d`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1439 ANEMONE
- https://p-bomb.co.jp/industry/new-machine/2111/
- https://news.p-world.co.jp/articles/17576/nippon
- https://news.p-world.co.jp/articles/17670/yugitsushin
- https://www.p-world.co.jp/machine/database/9476
- https://www.pachibee.jp/machines/index/221090002
- https://slot-seven.com/anemone-settei/
- https://www.slopachi-quest.com/article/anemone-tenjou/
- https://1geki.jp/slot/s_anemone/8/
- https://nana-press.com/kaiseki/machine/153/6323/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/192/tj04.php
