# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **914**
- latestRecordAdded: **パチスロ無双OROCHI**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-09-28_musou-orochi.md`
- chronologicalFrontier: **2015-09-28**
- frontierLatestMachine: **パチスロ無双OROCHI**
- frontierRecord: `docs/real_machine_db/machines/2015-09-28_musou-orochi.md`
- schema: **resetBehavior v0.7**
- status: **2015-09-28_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.913 `2015-09-14_hanahana-houou-30.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **913件 / 2015-09-14 / 09-14_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2015-09-15～09-27境界を日付別・全メーカー横断で監査。HAZUSE新台カレンダーでは2015年9月の導入日群が09-07 / 09-14 / 09-28で、別検索でも09-15～09-27の全国実ホール導入を具体日付きで固定できる未登録5号機を発見できず **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH** とした。
- 次の未処理機種 **「パチスロ無双OROCHI」** をNo.914として追加。

## No.914 — パチスロ無双OROCHI

- record: `docs/real_machine_db/machines/2015-09-28_musou-orochi.md`
- manufacturer: **山佐 / YAMASA**
- systemType: **5号機 AT / 差枚数管理 / CZ**
- canonical releaseDate: **2015-09-28**
- releaseDate conflict: 必勝本・パチセブン・当時解析は2015-09-28で一致。山佐発表文転載の4Gamer/Gamerは「2015年10月にホールデビュー」と月単位で記載。具体日付き複数当時資料をcanonicalとし、公式発表文由来の月表現はCONFLICT保持。

### performanceCore

- 機械割: **96.9 / 98.7 / 101.4 / 106.9 / 111.8 / 119.1%**。
- AT初当たり: **1/398.1 / 1/389.3 / 1/364.2 / 1/300.6 / 1/262.3 / 1/204.4**。
- CZ突入率: 約 **1/213.4 / 1/209.1 / 1/184.7 / 1/160.1 / 1/128.1 / 1/115.2**。
- 50枚ベース: **約47G**。
- AT純増: **約2.5枚/G**。
- AT「OROCHI CHAIN」: **100枚または250枚+α**。
- 通常天井: **AT終了後1190G**でAT確定となる古志城の刻へ突入。

### resetBehavior v0.7

- 設定変更:
  - 天井までのG数 **RESET**。
  - 高確A / 高確B移行抽選。
  - 規定8枚斬回数を **56回 / 168回**へ再振り分け。
- 据え置き:
  - 直接の「据え置き」表記は限定的だが、電源OFF→ON時に天井G・状態・規定8枚斬回数を引き継ぐ直接比較資料あり。`CARRYOVER_SUPPORTED_BY_POWER_CYCLE_CONTRACT` として保持。
- 純電源OFF→ON:
  - 天井G **CARRYOVER**。
  - 内部状態 **CARRYOVER**。
  - 規定8枚斬回数 **CARRYOVER**。
- ceilingAfterReset: 通常天井1190G。**リセット専用短縮天井はNONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset:
  - 高確A: **30 / 20 / 40 / 20 / 50 / 10%**（設定1～6）。
  - 高確B: **20 / 30 / 20 / 50 / 20 / 20%**。
  - A/B両方当選で超高確。
- numericResetData:
  - 8枚斬56回: **70.3 / 50.0 / 75.4 / 50.0 / 80.1 / 50.0%**。
  - 8枚斬168回: **29.7 / 50.0 / 24.6 / 50.0 / 19.9 / 50.0%**。
  - 規定回数到達時の中OROCHI高確移行率: **31.0%（全設定共通）**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: 本機固有のガックン確定契約・発生率は再探索後も固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。液晶ステージだけでは変更/据え置きの確定判別にしない。

## conflicts / quality notes

1. `CONFLICT_RELEASE_DATE_EXACT_2015_09_28_VS_OFFICIAL_DERIVED_2015_10_MONTH_DESCRIPTION`。
2. formalModelName / inspectionNumber は今回高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
3. 設定変更時の引き戻しシナリオ/モード専用振り分けは `UNVERIFIED_AFTER_RESEARCH`。
4. 通常時の全内部抽選テーブルはミッション対象外のため収集していない。

## 2015-09-15～09-27境界 — CLOSED_FOR_CURRENT_RESEARCH

- HAZUSEの2015年9月導入日群は **09-07 / 09-14 / 09-28**。
- 日付別検索・メーカー横断検索でもこの境界の全国実ホール導入を具体日付きで固定できる未登録5号機を発見できずCLOSED。

## 2015-09-28群 — OPEN

処理済み:
1. **パチスロ無双OROCHI** — 山佐 — No.914。

次の既知未処理:
2. **アスラズ ラース** — エンターライズ — HAZUSE/K-Naviとも2015-09-28導入。

- 09-28群はまだ全メーカー最終監査前のためOPENを維持する。

## 次回再開地点

1. **recordCount 914 / chronologicalFrontier 2015-09-28 / 09-28_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.914を再確認。
3. 次の未処理機種 **「アスラズ ラース」**（エンターライズ / 型式アスラズラースZS / 検定5S0457）を処理する。
4. 同機処理後、2015-09-28群を全メーカー横断で再監査し、追加未登録機がなければCLOSED判定する。
5. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成せずhandoffを同期する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ無条件転記しない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。
- 朝一設定推測数値と設定変更判別を混同しない。

## 主要出典 — 取得日 2026-09-07

### No.914 パチスロ無双OROCHI
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2635/1/54033
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/2635/1/54714
- パチ＆スロ必勝本 中OROCHI抽選: https://p.hisshobon.jp/machine/2635/1/54715
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/205/a.php
- パチマガスロマガ ATフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/205/l.php
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/11263/
- pacnk: https://pacnk.com/slot/tools/sh_musouorochi.html
- パチセブン: https://pachiseven.jp/machines/4611/cutout/4
- 期待値見える化: https://slotjin.com/zone/musouorochi/
- 4Gamer 2015-12-03: https://www.4gamer.net/games/326/G032647/20151203089/
- Gamer 2015-12-03: https://www.gamer.ne.jp/news/201512030060/
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/

### 次の既知候補
- アスラズ ラース HAZUSE: https://hazuse.com/machine/pachislot/5S0457/
- アスラズ ラース K-Navi: https://p-kn.com/slot/2351/

## confidence

- identity/manufacturer: OFFICIAL_DERIVED_PLUS_ANALYSIS_HIGH
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OFFICIAL_DERIVED_MONTH_CONFLICT
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- resetGameCounter: ANALYSIS_HIGH_DIRECT
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARATIVE
- resetStateNumeric: ANALYSIS_HIGH_DIRECT_NUMERIC
- reset8MaiGiriNumeric: ANALYSIS_HIGH_DIRECT_NUMERIC
- resetDetection: UNVERIFIED_AFTER_RESEARCH
