更新日: 2026-09-12

## 現在地点
- recordCount: **1458**
- latestRecordAdded: **パチスロ リング 運命の秒刻 — No.1458**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-12-20_ring-unmei-no-byokoku.md`
- chronologicalFrontier: **2021-12-20**
- frontierLatestMachine: **パチスロ リング 運命の秒刻 — No.1458**
- schema: **resetBehavior v0.7**
- status: **2021-12-20_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1455「沖ドキ！DUO-30」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 既存性能値をやり直さず、handoff指定の次機から以下3機を追加。
  - No.1456 **シンデレラブレイド4**
  - No.1457 **秘宝伝 解き放たれた女神**
  - No.1458 **パチスロ リング 運命の秒刻**
- 2021-12-20群を業界記事・当時新台カレンダー・メーカー系一覧・25φ/30φ別型式で再監査。通常カレンダーは「沖ドキ！DUO / シンフォギア勇気の歌 / シンデレラブレイド4 / 秘宝伝 / リング」の5タイトル、ユニバーサル系資料で沖ドキ！DUO-30の別型式も確認済み。既登録6独立レコードで群をCLOSED。

## No.1456 — シンデレラブレイド4
- path: `docs/real_machine_db/machines/2021-12-20_cinderella-blade-4.md`
- manufacturer: **ネット**
- formalModel: **Sシンデレラ×ブレイド4NA**
- certificationNumber: **1S0839**
- releaseDate: **2021-12-20**
- generation/system: **6.2号機 / AT / 周期抽選 / CZ経由AT**
- payoutRate: **97.8 / 99.0 / 101.3 / 104.3 / 106.9 / 110.0%**
- CZ: **1/229 → 1/153**
- AT: **1/523 → 1/318**
- baseGamesPer50: **約34.3G**
- netIncrease: **約2.7枚/G**
- normalCeiling: **最大18周期（候補1/3/6/10/17/18周期）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE**

### resetBehavior v0.7 — No.1456
- **設定変更**: 天井/周期進行・内部状態・有利区間RESET。有利区間移行時の天井周期抽選を新規実施。
- **据え置き/純電断**: 天井/周期・内部状態・有利区間をCARRY_OVERとする解析。
- **朝一恩恵**: 設定変更後1周期目はAT終了後の有利区間移行時1周期目と同様にCZ当選期待度が優遇。
- **変更判別**: 通常時有利区間ランプ消灯型のためランプ単独判別不可。純電断時は修行ステージ開始・周期G数「??」表示とする解析あり。
- **未固定**: 本機固有ガックン、設定変更専用の独立1周期目CZ当選率。

## No.1457 — 秘宝伝 解き放たれた女神
- path: `docs/real_machine_db/machines/2021-12-20_hihouden-tokihanatareta-megami.md`
- manufacturer: **サボハニ**
- formalModel: **S秘宝伝 解き放たれた女神SA1**
- certificationNumber: **0S0183**
- releaseDate: **2021-12-20**
- generation/system: **6号機 / AT / 疑似ボーナス / 伝説ループ**
- payoutRate: **97.5 / 98.7 / 100.6 / 102.8 / 105.2 / 110.0%**
- initialHit: **1/364.9 → 1/240.9**
- baseGamesPer50: **約50.8G**
- netIncrease: **秘宝RUSH約2.5枚/G / 超秘宝RUSH約4.3枚/G**
- normalCeiling: **663G+前兆**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE**

### resetBehavior v0.7 — No.1457
- **設定変更**: 天井・有利区間RESET、有利区間移行時の通常モード抽選を新規実施、朝一墳墓ステージ。
- **据え置き/純電断**: 天井・内部状態/モード・有利区間CARRY_OVER。
- **天井短縮**: 設定変更専用固定短縮は確認できず。通常663G+前兆を新規開始。
- **変更判別**: 有利区間ランプでは判別不可。朝一墳墓なら変更濃厚、墳墓以外なら据え置き濃厚（店側対策は例外）。
- **未固定**: 本機固有ガックン、設定変更専用A/B/チャンス各モード振り分け。
- **CONFLICT**: 業界発表に12/19予定表記あり。実導入日は複数資料一致の2021-12-20をcanonical。

## No.1458 — パチスロ リング 運命の秒刻
- path: `docs/real_machine_db/machines/2021-12-20_ring-unmei-no-byokoku.md`
- manufacturer: **藤商事**
- formalModel: **Sリング 運命の秒刻FL**
- certificationNumber: **1S0477**
- releaseDate: **2021-12-20**
- generation/system: **6.1号機 / AT / 疑似ボーナス / 高純増ストレートAT**
- payoutRate: **97.3 / 98.4 / 100.2 / 103.6 / 106.2 / 110.1%**
- SadakoBonus: **1/296.2 → 1/220.1**
- SuperSadakoBonus: **1/787.2 → 1/565.4**
- baseGamesPer50: **約35.3G**
- netIncrease: **約6.0枚/G**
- normalCeiling: **最大800G+α（モードA/B/C/D=800/500/300/100G）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE**

### resetBehavior v0.7 — No.1458
- **設定変更**: 天井・内部モード・内部状態・有利区間RESET。
- **据え置き/純電断**: 天井・モード・状態・有利区間CARRY_OVER。
- **朝一ステージ**: 奇数設定 ユイ43.7%/智子43.7%/メグミ12.5%、偶数設定 ユイ37.5%/智子37.5%/メグミ25.0%。
- **変更判別**: 朝一メグミは変更濃厚。通常時有利区間ランプ点灯型で消灯=変更濃厚、点灯=据え置き濃厚（前日消灯閉店/店側対策は例外）。
- **天井短縮**: 固定のリセット専用短縮は確認できず。再抽選モード次第で最大100/300/500/800G。
- **未固定**: 本機固有ガックン。
- **CONFLICT**: 世代表記は6.1号機が複数高信頼資料で一致、一部二次資料に6.2号機表記。canonical=6.1号機。

## 2021-12-20群 — CLOSED / 6独立レコード
1. **パチスロ戦姫絶唱シンフォギア 勇気の歌 — No.1453 / DONE**
2. **沖ドキ！DUO — No.1454 / DONE**
3. **沖ドキ！DUO-30 — No.1455 / DONE**
4. **シンデレラブレイド4 — No.1456 / DONE**
5. **秘宝伝 解き放たれた女神 — No.1457 / DONE**
6. **パチスロ リング 運命の秒刻 — No.1458 / DONE**

## 次回本線の再開地点
- **2021-12-21〜2022-01-10境界監査**を最初に行い、年末年始の地域先行・少数導入・別型式/PB漏れがないか確認する。
- 現時点の次既知導入群は **2022-01-11**。先頭候補 **「バーサスリヴァイズ」No.1459候補**。
- 同群候補として **スーパーリノSP**、別カレンダーで **鬼浜爆走紅蓮隊 激闘謳歌編** の日付差があるため、導入日をメーカー/業界資料で再確定してから時系列登録する。
- 1/11群処理後も、別型式/30φ/PB/地域先行/延期・段階導入をクロス監査してCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理済み: `docs/real_machine_db/machines/2007-01_marine-gang.md`（マリーンギャング）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存 `coreStatus: COMPLETE_CORE` は維持。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-01_aa-warera-nihonmatsu-judobu.md`（嗚呼!我ら日本松柔道部）**。
- 今回は2021-12-20群CLOSEDを優先し、retro QAカーソルは進めていない。

## GitHub保存
- No.1456追加 commit: `8fee99a94cb700818e005e207b71e6a44c726e4c`
- No.1457追加 commit: `7b0548f9ec04d8a42c302a59985e647dbb8ba8a5`
- No.1458追加 commit: `24a2313f4ed806609c37978bc9f1c862493a7e3e`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1456 シンデレラブレイド4
- https://hazuse.com/machine/pachislot/1S0839/
- https://hazuse.com/machine/pachislot/1S0839/genre/207/
- https://nana-press.com/kaiseki/machine/222/7111/
- https://nana-press.com/kaiseki/machine/222/7119/
- https://www.pachibee.jp/machines/index/221110004
- https://chonborista.com/slot/net-slot/154174/
- https://slot-seven.com/cinderellablade4-tenzyou/
- https://www.slopachi-quest.com/article/shindererablade4-tenjou/

### No.1457 秘宝伝 解き放たれた女神
- https://hazuse.com/machine/pachislot/0S0183/
- https://hazuse.com/machine/pachislot/0S0183/genre/203/
- https://nana-press.com/kaiseki/machine/164/7085/
- https://nana-press.com/kaiseki/machine/164/7090/
- https://news.p-world.co.jp/articles/18450/greenbelt
- https://p-kn.com/slot/3704/
- https://1geki.jp/slot/hihouden_kaihou/
- https://chonborista.com/slot/daito-slot/153123/
- https://ichikatsu.com/hihoudenkaihou/

### No.1458 パチスロ リング 運命の秒刻
- https://www.p-world.co.jp/machine/database/9515
- https://www.pachibee.jp/machines/index/221110006
- https://web-greenbelt.jp/post-52243/
- https://p-kn.com/slot/3695/
- https://data.hazuse.com/?genre=208&machine_code=1S0477
- https://www.slopachi-quest.com/article/ring-unnmeinobyoukoku-settei/
- https://slot-seven.com/ringunmeinobyokoku-tenzyou/
- https://chonborista.com/slot/fuji-slot/153989/comment-page-8/

### 2021-12-20群クロス監査
- https://ichikatsu.com/newslot/
- https://news.p-world.co.jp/articles/18909/nippon
- https://1geki.jp/maker/universal/
