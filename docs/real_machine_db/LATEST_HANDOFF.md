更新日: 2026-09-12

## 現在地点
- recordCount: **1502**
- latestRecordAdded: **シリウス — No.1502**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-06-06_sirius.md`
- chronologicalFrontier: **2022-06-06**
- frontierLatestMachine: **シリウス — No.1502**
- schema: **resetBehavior v0.7**
- status: **2022-06-06_GROUP_CLOSED_3_OF_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1501 `Sキャッツ・アイ` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種 No.1502 `シリウス`（ヤーマ、2022-06-06）を性能コア＋resetBehavior v0.7で追加。
- 正式型式 `SシリウスSY1`、検定番号 `2S0129` をHAZUSEで確認。
- 性能コアは設定L/1/2/3/4/6。機械割77.3 / 97.5 / 99.5 / 101.0 / 103.0 / 106.0%。初当りは設定1 1/328.2 → 設定6 1/252.2、約31.0G/50枚、疑似ボーナスAT純増約4.5枚/G。
- BIG約313枚、REG約103枚。シリウスモードは初当り後約33.3%で移行、基本2回セット、継続率83%以上、平均約6連、期待枚数約1060枚。
- 通常A/B/引き戻し天井777G+α、シリウスA/B天井200G+α。
- resetBehaviorは設定変更で有利区間・天井・内部モードRESET、据え置きでCARRY_OVER。純電源OFF→ONでも有利区間・天井・内部モード・差枚数CARRY_OVERを直接確認。
- 設定変更後は約10%で引き戻しモードへ移行。引き戻しモードのボーナス確率は約1/99.9。これは公開朝一数値として保存。
- なな徹の設定変更/据え置き比較では内部状態もRESET/CARRY_OVER。純電断時の「内部状態」を内部モードとは別に直接説明する資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプはボーナス開始〜終了時のみ点灯し通常時は基本消灯のため、朝一ランプによる設定変更判別は不可。
- 本機固有ガックン条件/発生率、設定L初当りは再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 2022年6月のパチスロ登場機種をなな徹回顧・一撃月間カレンダーで再監査し、6/6の `パチスロ ピンクパンサーSP / Sキャッツ・アイ / シリウス` の3機のみであることを確認。2022-06-06群をCLOSEDとした。

## No.1502 — シリウス
- path: `docs/real_machine_db/machines/2022-06-06_sirius.md`
- manufacturer: **ヤーマ**
- formalModel: **SシリウスSY1**
- inspectionCode: **2S0129**
- releaseDate: **2022-06-06**
- generation/system: **6.5号機 / 完全告知AT / 疑似ボーナス**
- settings: **L / 1 / 2 / 3 / 4 / 6**
- payoutRate: **77.3 / 97.5 / 99.5 / 101.0 / 103.0 / 106.0%**
- initialHit: **設定1 1/328.2 / 設定2 1/308.6 / 設定3 1/294.5 / 設定4 1/276.7 / 設定6 1/252.2**
- baseGamesPer50: **約31.0G/50枚**
- netIncrease: **約4.5枚/G**
- BIG / REG: **約313枚 / 約103枚**
- normalCeiling: **777G+α**
- siriusModeCeiling: **200G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED**
- confidence: **HIGH_CORE / HIGH_RESET / HIGH_MODEL_CODE**

### resetBehavior v0.7 — No.1502
- **設定変更**: 有利区間・天井・内部モードRESET。内部状態もRESETとする解析あり。約10%で引き戻しモードへ。
- **据え置き**: 有利区間・天井・内部モード・内部状態CARRY_OVER。
- **純電源OFF→ON**: 有利区間・天井・内部モード・差枚数CARRY_OVER。独立した内部状態項目はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 通常A/B/引き戻し777G+α、シリウスA/B 200G+α。設定変更でRESET、据え置き/電断で引継ぎ。
- **天井短縮**: 設定変更専用固定短縮はNONE_CONFIRMED。
- **モード/状態**: 設定変更後約10%で引き戻し。引き戻しボーナス確率約1/99.9。
- **有利区間**: 設定変更RESET、据え置き/電断CARRY_OVER。ボーナス終了時の一部でもRESET。
- **朝一恩恵**: 約10%で引き戻しモード。
- **朝一不利**: 独立した固定ペナルティNONE_CONFIRMED。
- **変更判別**: 有利区間ランプは通常時基本消灯で判別不可。ガックンUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 引き戻し移行約10%、引き戻し中ボーナス約1/99.9。

## 2022-06-06群 — CLOSED
月間監査で確認した3機種:
1. `パチスロ ピンクパンサーSP` — **No.1500 処理済み**
2. `Sキャッツ・アイ` — **No.1501 処理済み**
3. `シリウス` — **No.1502 処理済み**

根拠:
- なな徹「2022年上半期振り返り」は2022年6月登場機種を上記3機のみ列挙。
- 一撃2022年6月新台カレンダーも6/6にスロット3機、月計スロット3機としている。

## 次境界 — 2022-07-04
一撃月間カレンダーでは2022-07-04にスロット5機。
現時点で確認済み:
- `パチスロ甲鉄城のカバネリ`
- `ニューゲッターマウス`
- `パチスロ犬夜叉`
- `パチスロ アクエリオン ALL STARS`
- 残り1機は次回冒頭で月間カレンダーと別系統資料を再監査し、漏れなく確定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理: `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`（科学忍者隊ガッチャマン）。
- 性能側 `coreStatus: COMPLETE_CORE` は維持。
- reset側は **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`（TIMという名のパチスロ機）**。今回カーソルは変更していない。

## 次回本線の再開地点
- **No.1503候補 `パチスロ甲鉄城のカバネリ` — 2022-07-04。**
- ただし処理前に2022-07-04群5機の残り1機を月間カレンダー・業界資料で確定し、同日群の順序を固定してから進む。

## GitHub保存
- No.1502追加 commit: `6b7da098b769d46f8d4a88b3edfceab50146c795`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1502 シリウス
- https://news.p-world.co.jp/articles/20766/amusement
- https://www.nikkansports.com/amusement/pachislot/news/202204130000738.html
- https://p-bomb.co.jp/industry/new-machine/3984/
- https://hazuse.com/machine/pachislot/2S0129/
- https://nana-press.com/kaiseki/machine/369/9186/
- https://nana-press.com/kaiseki/machine/369/9772/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/20/kr01.php
- https://www.p-world.co.jp/machine/database/9630

### 2022年6月群監査
- https://nana-press.com/post/1576830
- https://1geki.jp/newmachinecalender/202206/

### 次境界 2022-07-04
- https://1geki.jp/newmachinecalender/202207/
- https://yugi-nippon.com/pachinko-new-machine/post-52472/
