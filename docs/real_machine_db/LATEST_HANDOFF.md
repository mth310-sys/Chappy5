# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **921**
- latestRecordAdded: **パチスロ クジラッキー**（三洋物産 / SANYO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-05_kujilucky.md`
- chronologicalFrontier: **2015-10-05**
- frontierLatestMachine: **パチスロ クジラッキー**
- frontierRecord: `docs/real_machine_db/machines/2015-10-05_kujilucky.md`
- schema: **resetBehavior v0.7**
- status: **2015-10-05_GROUP_OPEN_REAUDIT_PENDING**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.920 `2015-10-05_silent-hill.md` を再読。
- INDEXは19件時点の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount 920 / 2015-10-05_GROUP_OPEN。GitHub既存検索でクジラッキー未登録を確認してNo.921を追加。

## No.921 — パチスロ クジラッキー

- record: `docs/real_machine_db/machines/2015-10-05_kujilucky.md`
- manufacturer: **三洋物産（SANYO）**
- releaseDate: **2015-10-05**
- generation/system: **5号機 AT / セットストック型AT + 周期CZ**
- formalModelName: **パチスロクジラッキーKF**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### performanceCore

- 機械割: **97.38 / 98.54 / 100.07 / 103.38 / 106.64 / 110.82%**。
- AT初当たり: **1/314.0 / 305.2 / 292.0 / 275.4 / 254.6 / 207.2**。
- 50枚ベース: **約33G**。
- AT純増: **約2.8枚/G**。
- ノリノリラッシュ: **1セット55G**。
- スーパーノリノリBONUS: **33G / 66G / 99G**。
- パトチャレンジ: **10G、期待度約34%、最大256G周期**。
- モード別天井: 通常A/B **1280G**、通常C **960G**、天国 **128G**。到達時AT。

### resetBehavior v0.7

- 設定変更: **天井G RESET / CZまでのG RESET / 内部モード再抽選 / RT状態引継ぎ**。
- 純電源OFF→ON: **天井G CARRY / CZまでのG CARRY / 内部モードCARRY / RT状態CARRY**。
- 設定変更後モード（全設定共通）: **通常A 40% / 通常B 20% / 通常C 35% / 天国 5%**。
- 朝一は通常C比率がAT終了後より優遇されるため、固定短縮天井ではなく **MODE_RESELECTION_BASED_BENEFIT** として保存。
- 据え置き: 天井/CZ進捗は純電断表と整合し `CARRYOVER_SUPPORTED`。その他内部状態は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更判別: 本機固有の即時ガックン/初期出目/ランプ等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2015-10-05群 — OPEN_REAUDIT_PENDING

処理済み:
1. ルパン三世 ロイヤルロード — No.917
2. ベヨネッタ — No.918
3. Zゴールド・インフィニティ — No.919
4. サイレントヒル — No.920
5. クジラッキー — No.921

- 既知の未処理候補クジラッキーは解消。
- 月間/メーカー系資料を再探索し、次の有力日付として **2015-10-19** の「パチスロ地獄少女」「パチスロ デッドマン・ワンダーランド」を確認。
- ただし2015-10-05群の全メーカー横断再監査を今回完全には閉じ切っていないため、不用意にCLOSEDへせず `OPEN_REAUDIT_PENDING` を維持。

## 遡及 resetBehavior QA

- 既存 `2007-03-19_kakumei-senshi-choshu-riki.md` はすでにv0.7相当のresetBehaviorを保持しているため重複更新しない。
- 長州力直後の「最初の実resetBehavior未処理レコード」の機械的特定は今回完了できず、QAカーソルを推測で進めていない。
- 既存 `COMPLETE_CORE` は変更なし。
- retroQaStatus: **CURSOR_RESOLUTION_PENDING / NO_FALSE_PROGRESS**。

## 次回再開地点

1. **recordCount 921 / chronologicalFrontier 2015-10-05 / 10-05_GROUP_OPEN_REAUDIT_PENDING** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.921を再取得。
3. 2015-10-05群をメーカー横断・当時導入カレンダー・業界資料で再監査し、追加がなければGROUP_CLOSED。
4. 次時系列候補は **2015-10-19**。現時点確認候補: **パチスロ地獄少女 / パチスロ デッドマン・ワンダーランド**。10/05〜10/18境界を再監査してから先頭未処理へ進む。
5. 遡及QAは長州力の次の実未処理resetBehaviorレコードをリポジトリ実体から特定して補完。カーソルを推測で飛ばさない。
6. `COMPLETE_CORE` と `resetBehaviorQA` は別管理を継続。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せずCONFLICT/定義差として双方保持。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 主要出典 — 取得日 2026-09-08

### No.921 クジラッキー
- DMMぱちタウン: https://p-town.dmm.com/machines/2248
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/27/h.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/kujilucky/
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/kujilucky-reset/
- すろぱちくえすとまとめ: https://www.slopachi-quest.com/kisyubetsu/kujilucky/
- P-WORLD: https://www.p-world.co.jp/machine/database/7813
- パチビー: https://www.pachibee.jp/movies/index/12102
- PiDEA X: https://www.pidea.jp/articles/SANYO%E3%80%8C%E6%98%9F%E7%9F%A2%E3%80%8D%E3%80%8C%E3%82%AF%E3%82%B8%E3%83%A9%E3%83%83%E3%82%AD%E3%83%BC%E3%80%8D%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8
- パチマ中古実機: https://www.pachima.com/c/slot/s_28sonota/S00310

### 次時系列候補
- K-Navi デッドマン・ワンダーランド: https://p-kn.com/slot/2345/
- ちょんぼりすた 地獄少女: https://chonborista.com/slot/fuji-slot/11673/

## confidence

- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeGameCounterReset: ANALYSIS_HIGH_DIRECT
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT
- settingChangeModeReselection: ANALYSIS_HIGH_DIRECT
- resetModeNumericData: ANALYSIS_HIGH_PUBLISHED_NUMERIC
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- retroQaCursor: CURSOR_RESOLUTION_PENDING
