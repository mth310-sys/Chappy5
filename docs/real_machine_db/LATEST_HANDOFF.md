更新日: 2026-09-10

## 現在地点
- recordCount: **1240**
- latestRecordAdded: **パチスロ戦国乙女TYPE-A+**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-11-05_sengoku-otome-type-a-plus.md`
- chronologicalFrontier: **2018-11-05**
- frontierLatestMachine: **パチスロ戦国乙女TYPE-A+ — No.1240**
- schema: **resetBehavior v0.7**
- status: **2018-11-05_GROUP_OPEN_2_OF_AT_LEAST_4_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1239を再取得して開始。
- `INDEX.md`は旧19件スナップショットのため、README指示どおり `LATEST_HANDOFF.md` + main実レコードを現行進捗の正本として継続。
- 開始時正本は1239件 / 2018-11-05 / `2018-11-05_GROUP_OPEN_1_OF_AT_LEAST_4_PROCESSED`。
- handoff指定の次機種 `パチスロ戦国乙女TYPE-A+` をNo.1240として登録。
- 同日群は少なくとも `スーパープラネットSP / パチスロ戦国乙女TYPE-A+ / パチスロらんま1/2 / パチスロ チェインクロニクル` の4機。全メーカー/別スペック/PB/地域差監査完了までCLOSEしない。

## No.1240 — パチスロ戦国乙女TYPE-A+
- manufacturer: **オリンピア**
- releaseDateCanonical: **2018-11-05**
- formalModelName: **戦国乙女Type-A+／D4**
- certificationNumber: **7S0700**
- generation/system: **5.9号機 / A+RT / リアルボーナス / 技術介入**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **97.5 / 99.5 / 104.0 / 108.1%**
- BIG合成: **1/336.1 / 1/324.4 / 1/316.6 / 1/303.4**
- REG: **1/455.1 / 1/436.9 / 1/425.6 / 1/414.8**
- bonusCombined: **1/193.3 / 1/186.2 / 1/181.5 / 1/175.2**
- baseGamesPer50Complete: **36.0 / 36.6 / 38.6 / 39.3G**
- baseGamesPer50Random: **33.1 / 33.6 / 35.1 / 35.7G**
- basicPayout: **真乙女BONUS最大416枚 / 乙女BONUS平均357枚（変動型） / REG最大104枚 canonical**
- payoutConflict: **REG 最大104枚 vs P-WORLD最大103枚**
- RT: **真乙女BONUS後100G / 乙女BONUS後30G**
- RTnetIncrease: **UNVERIFIED_AFTER_RESEARCH**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。一撃の当時専用ページでRT状態・液晶ステージとも「現在調査中」。検索語と資料系統を変えた再探索でも本機固有の確定契約を固定できず。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。天井G数持越しはN/A。据え置き固有のRT/演出/成立状態契約は純電断と分離して固定できず。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH**。当時一撃でもRT状態・液晶ステージとも調査中。別系統再探索でも確定値なし。
- gameCounterReset: **NOT_APPLICABLE_NO_CEILING_COUNTER**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **朝一専用内部モード NONE_CONFIRMED_AFTER_RESEARCH / 遊技者選択6演出モードの設定変更・電断時契約はUNVERIFIED**。
- stateAfterReset: **RT状態契約 UNVERIFIED_AFTER_RESEARCH / 朝一専用高確 NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSection: **N/A_NO_ADVANTAGEOUS_SECTION_DEPENDENT_AT_ART_GAMEPLAY_CONFIRMED**。
- resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。本機固有ガックン/表示/初期出目等の確定条件・率を固定できず。前作TYPE-Aの情報は別型式なので転記していない。
- numericResetData: **resetSpecificCeiling N/A / resetModeDistribution NONE_CONFIRMED / morningHitRate NONE_CONFIRMED / resetBenefitRate NONE_CONFIRMED / gakkunRate UNVERIFIED**。

## No.1240 conflicts / quality notes
- REG最大獲得枚数はグリーンべると・HAZUSE・一撃等が104枚、P-WORLDが103枚。104枚をcanonicalとし `CONFLICT_REG_PAYOUT_MAX_104_VS_103` を保持。
- HAZUSEは型式 `戦国乙女Type-A+／D4` + 検定番号 `7S0700`。一部二次資料の `戦国乙女Type-A/D5` は前作TYPE-Aとの混同可能性が高いためcanonicalへ採用せずCONFLICT保持。
- 完全攻略時機械割として独立定義された値、RT純増/Gは十分な再探索後も固定できずUNVERIFIED。

## 2018-11-05群監査
### 登録済み
- No.1239 スーパープラネットSP
- No.1240 パチスロ戦国乙女TYPE-A+

### 未処理候補
1. **パチスロらんま1/2（EXCITE）**
2. **パチスロ チェインクロニクル（サミー）**

### 横断監査状況
- すろぱちくえすと2018導入一覧、パチスロ立ち回り講座の過去導入予定一覧で11/5の4機群を確認済み。
- No.1240について、グリーンべるとは11月4日から納品予定、HAZUSE/K-Navi/一撃/すろぱちくえすとは11月5日導入で整合。
- 11/5群はまだOPEN。残る既知候補処理後、全メーカー/別型式/別スペック/PB/地域差を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-10_kaitou-tenshi-twin-angel.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-10_kakutou-gekisenku.md`（格闘激戦区）**。
- 今回は新規時系列No.1240を優先し、遡及QAカーソルは進めていない。

## 継続注意事項
- `INDEX.md`は旧19件スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1240を再取得。
2. **1240件 / chronologicalFrontier 2018-11-05 / `2018-11-05_GROUP_OPEN_2_OF_AT_LEAST_4_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理機種 **パチスロらんま1/2（EXCITE）** をNo.1241候補として調査・登録。
4. 続いて **パチスロ チェインクロニクル（サミー）**。
5. その後11/5全メーカー/別型式/別スペック/PB/地域差を再監査し、群CLOSED可否を判定。
6. 遡及QAは `2006-10_kakutou-gekisenku.md`（格闘激戦区）から再開。

## 主要出典 — 取得日 2026-09-10
### No.1240 パチスロ戦国乙女TYPE-A+
- グリーンべると: https://web-greenbelt.jp/00010751/
- HAZUSE: https://hazuse.com/machine/pachislot/7S0700/
- 一撃 機種トップ: https://1geki.jp/slot/s_otomea_p/
- 一撃 50枚あたり/小役: https://1geki.jp/slot/s_otomea_p/4/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_otomea_p/3/
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/141/h.php
- パチマガスロマガ 小役確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/141/c.php
- K-Navi: https://p-kn.com/slot/3102/
- P-WORLD: https://www.p-world.co.jp/machine/database/8769
- すろぱちくえすと: https://www.slopachi-quest.com/article/sengokuotome-typea-plus/
- 中一商事 実機DB: https://www.nakaiti.com/html/sOlympia043.html
- 5号機クロニクル: https://5goki.com/heiwa-olympia

### 時系列境界 / 11/5群
- すろぱちくえすと2018導入一覧: https://www.slopachi-quest.com/article/sindai-2018/
- パチスロ立ち回り講座 新台導入予定日: https://crankyseven.com/newmachine-info.htm
- ALL7.jp 2018年11月導入一覧: https://www.all7.jp/plans/index/2018/11
