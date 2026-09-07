# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **918**
- latestRecordAdded: **パチスロ ベヨネッタ**（Sammy）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-05_bayonetta.md`
- chronologicalFrontier: **2015-10-05**
- frontierLatestMachine: **パチスロ ベヨネッタ**
- frontierRecord: `docs/real_machine_db/machines/2015-10-05_bayonetta.md`
- schema: **resetBehavior v0.7**
- status: **2015-10-05_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.917 `2015-10-05_lupin-royal-road.md` を再読。
- INDEXは19件時点の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- No.917時点の次候補「ベヨネッタ」を既存レコード検索し、未登録を確認してNo.918として追加。
- 書き込み直前にもLATEST_HANDOFFを再取得し、recordCount 917 / ベヨネッタ未処理のままで同期競合がないことを確認。

## No.918 — パチスロ ベヨネッタ

- record: `docs/real_machine_db/machines/2015-10-05_bayonetta.md`
- manufacturer: **Sammy**
- releaseDate: **2015-10-05**
- generation/system: **5号機 AT / 疑似ボーナス・バトル連鎖型**
- formalModelName: **ベヨネッタZF**
- inspectionNumber: **5S0446**

### performanceCore

- 機械割: **97.4 / 98.6 / 100.0 / 104.3 / 108.5 / 114.5%**。
- 疑似ボーナス/AT初当たり: **1/289.0 / 1/282.3 / 1/274.4 / 1/240.8 / 1/214.9 / 1/179.9**。
- 50枚ベース: **約44G**。
- 純増: **約2.8枚/G**。
- 赤7BIG: **20G+α / 平均約340枚**。
- 青7BIG: **80G+α / 平均約560枚**。
- REG: **12Gのクライマックスバトル**から開始し敗北まで継続。
- 通常時天井: **リプレイ222回成立**。約1600G相当とする解析と平均1320Gとする別資料があるため、G数換算は `CONFLICT_OR_DEFINITION_DIFFERENCE`、天井条件そのものをcanonicalとした。

### resetBehavior v0.7

- 設定変更: **リプレイ222回天井カウントRESET / 内部モード再抽選**。
- 据え置き: 公開された設定変更vs電源ON/OFF比較から、**天井進捗・内部モードは引継ぎ側**。
- 電源OFF→ONのみ: **天井引継ぎ / 内部モード引継ぎ**。
- ステージ: 当時解析で引継ぎ。通常ステージ以外なら発展前ステージへ復帰する注記あり。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一専用モード/リセット専用モード: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の具体モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 通常時の低確/高確準備/高確は確認したが、設定変更時の状態初期振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- 純電断時の状態単独契約: **UNVERIFIED_AFTER_RESEARCH_FOR_STATE_ONLY**。
- 本機固有ガックン確定契約: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### 公開朝一数値

- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一特定G数以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2015-10-05群 — OPEN

処理済み:
1. **パチスロ ルパン三世 ロイヤルロード～金海に染まる黄金神殿～** — オリンピア / 平和 — No.917。
2. **パチスロ ベヨネッタ** — Sammy — No.918。

既知未処理候補:
3. **Zゴールドインフィニティ**。
4. **サイレントヒル**。
5. **クジラッキー**。

- No.916マクロスF2 Bonus Live ver.には2015-10-05表記資料もあるが、2015-09-28 canonical recordの日付工程差として既に保持。10-05群で重複追加しない。
- 同日群は未処理候補が残るため **OPEN**。

## 次回再開地点

1. **recordCount 918 / chronologicalFrontier 2015-10-05 / 10-05_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.918を再確認。
3. 次の未処理候補 **「Zゴールドインフィニティ」** を既存レコード検索・正式表記/メーカー/導入日確認後に処理する。
4. 続いて **サイレントヒル → クジラッキー** を確認し、全メーカー横断再監査後のみGROUP_CLOSED判定する。
5. resetBehaviorは設定変更・据え置き・純電断を分離し、欠損は表記揺れ/型式/メーカー/シリーズ名と検索語・資料系統変更後のみUNVERIFIEDとする。
6. 遡及resetBehavior QAカーソルは新規本線を止めず、2007-03-19長州力より後の最初の既存未QAレコード探索を継続する。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- `COMPLETE_CORE` と `resetBehaviorQA` を別管理する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せず `CONFLICT` / 定義差として双方保持。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 主要出典 — 取得日 2026-09-08

### No.918 ベヨネッタ
- HAZUSE: https://hazuse.com/machine/pachislot/5S0446/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/5S0446/genre/201/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/5S0446/genre/209/
- K-Navi: https://p-kn.com/slot/2339/
- パチビー: https://www.pachibee.jp/movies/index/12082
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/11474/
- すろぱちくえすと: https://www.slopachi-quest.com/article/beyonetta-tenjou/
- 期待値見える化: https://slotjin.com/zone/bayonetta/
- パチマガスロマガ公式: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/146/l.php
- 当時リセット/天井補助資料: https://ameblo.jp/urametalkids/entry-12080442233.html

## confidence

- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelAndInspection: INDUSTRY_DATABASE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeilingCondition: ANALYSIS_HIGH_MULTI_SOURCE
- ceilingGameEquivalent: CONFLICT_OR_DEFINITION_DIFFERENCE
- settingChangeBehavior: ANALYSIS_HIGH
- carryOverBehavior: ANALYSIS_HIGH
- purePowerCycleBehavior: ANALYSIS_HIGH_SINGLE_DIRECT_COMPARISON
- resetNumericData: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: UNVERIFIED_FOR_GAKKUN
