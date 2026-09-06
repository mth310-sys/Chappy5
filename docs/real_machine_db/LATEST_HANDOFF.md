# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **817**
- latestRecordAdded: **パチスロ サムライチャンプルー 流転輪廻**（ニューギン）— primary release 2014-05-07 / queue date 2014-05-12
- latestRecord: `docs/real_machine_db/machines/2014-05-07_samurai-champloo-ryuten-rinne.md`
- chronologicalFrontier: **2014-05-12**
- frontierLatestMachine: **パチスロ サムライチャンプルー 流転輪廻**
- schema: **resetBehavior v0.7**
- status: **2014-05-12_GROUP_CLOSED_WITH_RELEASE_DATE_CONFLICT / 2014-05-13_TO_2014-05-18_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-05-07_macross-frontier-2.md` を再読して正本化。
- INDEXは旧19件集約のままなのでREADME規定に従い、より新しい `LATEST_HANDOFF.md` と実レコードを進捗正本として継続。
- 作業開始時の正本は **816件 / 2014-05-07 パチスロ マクロスフロンティア2 / 05-07_GROUP_CLOSED / 05-08〜05-11境界CLOSED**。
- handoff指定の次の未処理 **パチスロ サムライチャンプルー 流転輪廻** を817件目として追加。
- 導入日は資料競合あり。K-Navi全国一斉導入カレンダーは **2014-05-12**、DMMぱちタウン・HAZUSE・当時記事系は **2014-05-07**。平均化せず `CONFLICT_RELEASE_DATE_2014_05_07_VS_2014_05_12` を保持。
- recordのreleaseDate本線は複数資料が一致する **2014-05-07**、リレーの時系列queueDate/chronologicalFrontierは直前handoffと全国一斉導入カレンダーに従い **2014-05-12** として分離。
- この競合により、前回の「05-07群は2機のみ」というK-Navi基準の監査結果は、他資料基準では本機を含み得る。既存2機を崩さず本機のdate conflictとして明示保存。
- K-Navi 2014年5月全国一斉導入カレンダーを再監査し、05-12のパチスロ掲載は本機1機。次の掲載は05-19の **メイドルナイト / ハイサイ蝶特急ターボ**。よって05-12群をCLOSED、05-13〜05-18をCLOSED_FOR_CURRENT_RESEARCHとする。

## 今回追加 — パチスロ サムライチャンプルー 流転輪廻

### identity / 性能コア

- manufacturer: **ニューギン**。
- formalModelName: **サムライチャンプルー流転輪廻X**。
- inspectionNumber: **3S1053**。
- generation/system: **5号機 / 疑似ボーナス+ART / ゲーム数管理+CZ+確変状態**。
- payoutRateBySetting: **97.0 / 98.8 / 100.2 / 101.7 / 104.9 / 109.7%**。2-9伝説のみ設定5を104.8%とするためminor CONFLICT保持。
- ART初当たり: **1/271.1 / 256.6 / 243.0 / 236.2 / 212.0 / 181.4**。
- CZ初当たり: **1/395.1 / 420.0 / 361.5 / 407.2 / 300.5 / 353.5**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。表記揺れ・型式・メーカー・50枚/1000円/ベース/コイン持ち/千円Gを変え、複数系統を横断後も安全な直接値を固定できず。
- netIncrease: **約2.0枚/G**。
- 疾風怒涛BONUS: **23G**。ART「騒乱TIME」: **20G+α**。NORMAL/HYPER BONUS: **30G+α**。
- 通常最大天井: **ART間999G**、到達でART。
- coreStatus: **PARTIAL_CORE_BASE_UNVERIFIED**。

### resetBehavior v0.7

- settingChangeBehavior: **天井までのG数クリア / モードクリア**。液晶開始はムゲンorジン。
- carryOverBehavior: 据え置き専用の直接文言は今回固定できず **UNVERIFIED_DIRECT_STAY_UNCHANGED_CONTRACT**。ただし純電源OFF→ON時の引継ぎ契約は確認。
- powerCycleBehavior: 設定変更なしの **電源OFF→ONでは天井G・モードを引継ぎ**。液晶開始はムゲンorジン。
- gameCounterReset: 設定変更 **RESET_CONFIRMED** / 純電源再投入 **CARRY_OVER_CONFIRMED**。
- ceilingAfterReset: 設定変更で999G天井進捗クリア。専用固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 設定変更 **MODE_CLEAR_CONFIRMED** / 純電源再投入 **MODE_CARRY_OVER_CONFIRMED**。設定変更専用の通常A/B・天国A/B振り分け数値は **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: 回想モード/内部確変/CZ状態等を含む完全な内部状態契約は **UNVERIFIED_AFTER_RESEARCH**。DMMの「モード」表記を内部状態全般へ拡張しない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 専用短縮天井・専用天国率・CZ優遇率等の定量恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 設定変更で前日ART間天井進捗を失う。
- resetDetection: 設定変更/電源OFF→ONとも朝一ムゲンorジンで共通のため液晶開始ステージ単独では判別不可。本機固有ガックン契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。通常ART後のモード移行率をリセット専用値へ流用しない。
- resetBehaviorQA: **PARTIAL_WITH_CONFIRMED_COUNTER_MODE_POWER_CYCLE**。

## conflicts / safeguards

- `CONFLICT_RELEASE_DATE_2014_05_07_VS_2014_05_12`: DMMぱちタウン、HAZUSE、当時記事は05-07、K-Navi全国一斉導入日は05-12。releaseDateとqueueDateを分離し平均化しない。
- `CONFLICT_PAYOUT_SETTING5_104_9_VS_104_8`: K-Navi/DMM/P-WORLD 104.9%、2-9伝説 104.8%。本線104.9%、競合保持。
- 2008年初代「サムライチャンプルー」、2011年「サムライチャンプルー極」は別機種。スペック・resetBehaviorを混入しない。
- 通常時の全モード移行表は本ミッション対象外。設定変更専用数値が確認できないためnumericResetDataへ転記しない。

## 2014-05-12群 / 境界監査

K-Navi全国一斉導入カレンダーの05-12パチスロ掲載:
1. **パチスロ サムライチャンプルー 流転輪廻**（ニューギン）— No.817 / 処理済み。release date conflictは上記保持。

- status: **2014-05-12_GROUP_CLOSED_WITH_RELEASE_DATE_CONFLICT**。
- K-Navi上、05-13〜05-18に追加全国一斉導入パチスロ掲載なし。
- status: **2014-05-13_TO_2014-05-18_CLOSED_FOR_CURRENT_RESEARCH**。
- 次の具体日は **2014-05-19**。

## 次回再開地点

1. **recordCount 817 / chronologicalFrontier 2014-05-12 / 05-12_GROUP_CLOSED_WITH_RELEASE_DATE_CONFLICT / 05-13〜05-18境界CLOSED** から開始。
2. 次の未処理機種は **メイドルナイト（JIN）— 2014-05-19**。
3. 続いて **ハイサイ蝶特急ターボ（タイヨー）— 2014-05-19**。2機処理後、05-19同日群を全メーカー横断再監査してCLOSED判定。
4. 次のK-Navi具体日候補は **2014-05-26 B-MAX（アクロス） / 麻雀格闘倶楽部（KPE） / パチスロ御伽屋HANZO（タイヨーエレック）**。各境界で再監査する。
5. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md` を維持。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- K-Navi 2014年5月全国一斉導入カレンダー: `https://p-kn.com/calendar/201405/`
- K-Navi サムライチャンプルー 流転輪廻: `https://p-kn.com/slot/2034/`

### サムライチャンプルー 流転輪廻
- DMMぱちタウン — 型式/導入日/機械割/天井/resetBehavior設定変更・電源OFF→ON: `https://p-town.dmm.com/machines/1674`
- K-Navi — 導入日/機械割/ART初当たり: `https://p-kn.com/slot/2034/`
- K-Navi — CZ突入率: `https://p-kn.com/slot/2034/50002/`
- HAZUSE DATA — 導入開始日/machine_code 3S1053: `https://data.hazuse.com/?detail_id=100498&genre=203&machine_code=3S1053`
- P-WORLD — システム/ART初当たり/機械割/純増/基本G数: `https://www.p-world.co.jp/machine/database/7359`
- パチマガスロマガ旧攻略 — 疑似ボーナス+ART/純増/基本G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/32/a.php`
- パチマガスロマガ旧攻略 — ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/32/l.php`
- 2-9伝説 — 天井/設定変更Gリセット/機械割/初当たり/通常モード解析: `https://29den.com/samuraichamploo/`
- 2-9伝説 天井一覧 — 宵×定義と本機掲載: `https://2-9densetsu.com/blog-entry-311-html/`
- すろぱちくえすと — 天井/設定変更時ハマリGリセット/スペック: `https://www.slopachi-quest.com/kisyubetsu/samurai-chanpuru3/`
- 当時解析記事（2014-05-06） — 05-07導入候補/基本仕様: `https://pachinkolist.com/archives/38663249.html`
