更新日: 2026-09-11

## 現在地点
- recordCount: **1276**
- latestRecordAdded: **ゴーゴージャグラー2**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-04-08_gogo-juggler2.md`
- chronologicalFrontier: **2019-04-08**
- frontierLatestMachine: **ゴーゴージャグラー2 — No.1276**
- schema: **resetBehavior v0.7**
- status: **2019-04-08_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1275を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoffの次の未処理 `ゴーゴージャグラー2` をNo.1276として性能コア + resetBehavior v0.7で登録。
- HAZUSE、K-Navi、NANA PRESS、PiDEA X、当時解析、2019年導入一覧を横断。
- 型式 `ゴーゴージャグラー2／KD`、検定番号 `7S1147`、北電子、2019-04-08、5.9号機ノーマルAタイプを固定。
- 設定1〜6のBIG 1/269.7〜1/242.7、REG 1/364.1〜1/242.7、合算1/154.9〜1/121.4、機械割97.0〜106.5%を複数資料で照合。
- 50枚あたり設定別33.27/33.47/33.67/33.87/34.07/34.27G、BIG約312枚、REG約104枚を保存。
- 天井非搭載、AT/ART/CZ/通常モードなし。
- resetBehaviorでは本機固有資料で設定変更後も朝一リールガックンしないことを確認。天井短縮・朝一当選優遇・専用高確等の出玉恩恵は確認されず。
- 設定変更/据え置き/純電断時の成立済みボーナス等の特殊境界状態契約は検索語・資料系統を変えても固定できず、その項目だけUNVERIFIED_AFTER_RESEARCH。
- 5.9号機ノーマルのため本DB上の有利区間朝一管理はNOT_APPLICABLE。

## No.1276 — ゴーゴージャグラー2
- manufacturer: **北電子**
- formalModel: **`ゴーゴージャグラー2／KD`**
- certificationNumber: **`7S1147`**
- generation/system: **5.9号機 / ノーマルAタイプ / 完全告知**
- releaseDate: **2019-04-08**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- BIG: **1/269.7 / 1/268.6 / 1/266.4 / 1/260.1 / 1/255.0 / 1/242.7**
- REG: **1/364.1 / 1/336.1 / 1/318.1 / 1/283.7 / 1/255.0 / 1/242.7**
- 合算: **1/154.9 / 1/149.3 / 1/145.0 / 1/135.7 / 1/127.5 / 1/121.4**
- 機械割: **97.0 / 98.2 / 99.2 / 101.6 / 103.8 / 106.5%**
- baseGamesPer50: **33.27 / 33.47 / 33.67 / 33.87 / 34.07 / 34.27G**
- basicPayout: **BIG約312枚 / REG約104枚**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 設定変更後もリールガックンなし。天井/モード/CZはNOT_APPLICABLE。成立済みボーナス等の特殊境界状態は未固定。
- carryOver: 据え置きで継承して朝一狙いに使える天井/モード/CZ状態なし。特殊境界状態はUNVERIFIED_AFTER_RESEARCH。
- powerCycle: 引継ぎ対象となる天井/モード/有利区間はNOT_APPLICABLE。成立済みボーナス等の純電断契約のみUNVERIFIED_AFTER_RESEARCH。
- gameCounterReset / ceilingAfterReset: 天井非搭載のためNOT_APPLICABLE。
- modeAfterReset / stateAfterReset: 通常ゲームフロー上のAT型モード・高低状態はNOT_APPLICABLE。設定変更専用当選優遇は確認されず。
- advantageousSectionReset: 本DBの朝一有利区間管理はNOT_APPLICABLE。
- resetBenefits: 出玉面の設定変更専用恩恵はNONE_CONFIRMED_AFTER_RESEARCH。
- resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
- resetDetection: **ガックン判別不可**。天井/有利区間ランプによる判別もNOT_APPLICABLE。
- numericResetData: 設定変更専用のモード振り分け・当選率・短縮天井・恩恵発生率はPUBLIC_NUMERIC_VALUE_NOT_FOUND / NOT_APPLICABLE。

## 2019-04-08群
### 登録済み / 境界照合
- No.1276 ゴーゴージャグラー2 — 2019-04-08。
- No.1273 戦国パチスロ 義風堂々!!～兼続と慶次～ — 2019-04-01 vs 2019-04-08の導入日CONFLICT保持済み。重複登録しない。

### 未処理候補
- **マイフラワー-30**
- **ワンダフルジャック**

### 群監査
- K-Navi 2019年4月カレンダー、すろぱちくえすと2019年導入一覧、PiDEA X当時記事、個別機種資料を横断。
- すろぱちくえすとは4/8群をゴーゴージャグラー2 / ワンダフルジャック / マイフラワーとして掲載。
- PiDEA Xはゴーゴージャグラー2とマイフラワー30を北電子が同時発表し、双方4/7納品予定と報道。
- ワンダフルジャックは個別資料で岡崎産業 / 2019-04-08 / 型式ワンダフルジャック／W2 / 検定7S1921を先行確認。
- 未処理2機と追加同日漏れ監査が残るため **2019-04-08_GROUP_OPEN**。

## qualityNotes
- 一部後年DBが本機を6号機と記載するが、HAZUSEと複数当時資料は5号機/5.9号機で一致するため5.9号機をcanonical。
- ベースは設定別33.27〜34.27G/50枚に対し、別当時概要で約34.5G/50枚表記あり。平均化せず設定別値をcanonical、34.5Gを定義/丸め差注記として保持。
- BIG設定2は1/268.5と1/268.6の丸め差あり。複数高信頼資料一致の1/268.6をcanonical。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_playboy.md`**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2007-02_playboy-30.md`**
- 既存性能CONFLICTは崩さず、resetBehaviorのみ順次再探索・別管理する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1276を再取得。
2. **2019-04-08群の次の未処理 `マイフラワー-30` をNo.1277候補として登録。**
3. その後 `ワンダフルジャック` を処理。
4. 4/8群を全メーカー/別型式/別スペック/PB/地域差まで再監査してCLOSED判定。
5. 遡及QAは `2007-02_playboy-30.md` から再開。

## 主要出典 — 取得日 2026-09-11
### ゴーゴージャグラー2
- HAZUSE: https://hazuse.com/machine/pachislot/7S1147/genre/204/
- K-Navi: https://p-kn.com/slot/3189/
- NANA PRESS: https://nana-press.com/kaiseki/machine/19/300/
- PiDEA X: https://www.pidea.jp/articles/%E3%80%8C%E3%82%B4%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B02%E3%80%8D%EF%BC%86%E5%88%9D6%E5%8F%B7%E6%A9%9F%E3%80%8C%E3%83%9E%E3%82%A4%E3%83%95%E3%83%A9%E3%83%AF%E3%83%BC30%E3%80%8D%E7%99%BA%E5%A3%B2%EF%BC%8F%E5%8C%97%E9%9B%BB%E5%AD%90
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/78290/
- 元プロMGのパチスロブログ: https://www.pachislotblog.tokyo/gogojuggler2-kaiseki/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/04/08/post-5542/

### 2019-04-08群監査
- K-Navi 2019年4月新台カレンダー: https://p-kn.com/calendar/201904/
- すろぱちくえすと2019年導入一覧: https://www.slopachi-quest.com/article/2019-dounyuukishu/
- ワンダフルジャック HAZUSE: https://hazuse.com/machine/pachislot/7S1921/

### 遡及QA引継ぎ
- 次対象: `docs/real_machine_db/machines/2007-02_playboy-30.md`
