# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **913**
- latestRecordAdded: **ハナハナホウオウ-30**（パイオニア / PIONEER）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-09-14_hanahana-houou-30.md`
- chronologicalFrontier: **2015-09-14**
- frontierLatestMachine: **ハナハナホウオウ-30**
- frontierRecord: `docs/real_machine_db/machines/2015-09-14_hanahana-houou-30.md`
- schema: **resetBehavior v0.7**
- status: **2015-09-14_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.912 `2015-09-14_king-jack.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **912件 / 2015-09-14 / 09-14_GROUP_OPEN**。
- 次の未処理候補だったパイオニア **「ハナハナホウオウ-30」** をNo.913として追加。
- 09-14群を「2015年9月14日 / パチスロ / 導入 / 新台 / メーカー」等で再監査。既存No.911「パチスロ聖闘士星矢～女神聖戦～」には必勝本で09-14導入表記があるが既処理のため重複追加しない。今回、新たな未登録5号機を固定できず **CLOSED_FOR_CURRENT_RESEARCH** とした。

## No.913 — ハナハナホウオウ-30

- record: `docs/real_machine_db/machines/2015-09-14_hanahana-houou-30.md`
- manufacturer: **パイオニア / PIONEER**
- formalModelName: **ハナハナホウオウEX-30**
- inspectionNumber: **5S0623**
- systemType: **5号機 ノーマル / Aタイプ / 30Φ / 完全告知**
- canonical releaseDate: **2015-09-14**
- exactReleaseDate conflict: **HAZUSE 2015-09-07 vs K-Navi/イチカツ 2015-09-14**。PiDEA当時記事の09-13納品予定が09-14実ホール導入と工程上整合するため09-14をcanonicalとし、09-07をCONFLICT保持。

### performanceCore

- 機械割: **96 / 98 / 101 / 104 / 107 / 112%**。
- BIG: **1/299 / 1/290 / 1/277 / 1/264 / 1/250 / 1/233**。
- REG: **1/496 / 1/468 / 1/434 / 1/399 / 1/368 / 1/332**。
- 合算: **1/186 / 1/179 / 1/169 / 1/159 / 1/148 / 1/137**。
- 50枚ベース: **約36.5G**。
- BIG: **最大312枚**、REG: **最大130枚**。
- AT/ART/CZ: **非搭載**。
- ゲーム数天井: **非搭載**。

### resetBehavior v0.7

- 設定変更: 天井・AT/ART/CZモードは非該当。**前日ボーナスからの87G以内連チャンBGM判定状態はリセット**。
- 据え置き: 天井進捗は非該当。87G連チャンBGM条件は継続し、朝一条件成立時の連チャンBGMは据え置きの強い材料。
- 純電源OFF→ON: 本機固有の直接比較資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。据え置き契約を純電断へ自動転記しない。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_CEILING**。
- ceilingAfterReset: **NONE / NOT_APPLICABLE**。
- modeAfterReset: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: 87G連チャンBGM判定状態のリセットを確認。その他の設定変更専用状態は `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: **設定変更後初回BIG時、全設定共通50%でパネルフラッシュ**という公開解析値あり（ANALYSIS_SINGLE）。短縮天井・保証CZ等は非該当。
- resetPenalties: 出玉上の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。87G BGM据え置き判別状態は変更で消失。
- resetDetection:
  - 87G以内連チャンBGM: 朝一に条件を満たして発生すれば据え置きの強い材料。非発生のみでは変更確定でない。
  - リールガックン: 変更時に出やすいとする当時解析はあるが個体/出目差が大きく、1G回し対策可能。確定判別にしない。
  - BETランプ: 本文旧情報と追記訂正が競合。クイーンハナハナ以降は判別不可とする追記を安全側で採用し `CONFLICT_DO_NOT_USE_AS_CONFIRMED_DETECTION`。
- numericResetData: **設定変更後初回BIGパネルフラッシュ50%（全設定共通）**。朝一専用当選率/短縮天井/モード振り分けは非該当・未確認。

## conflicts / quality notes

1. `CONFLICT_RELEASE_DATE_2015_09_07_VS_2015_09_14`。
2. `CONFLICT_BET_LAMP_DETECTION`。
3. すろぱちくえすとの設定1 REG「1/469」は、K-Navi・なな徹・イチカツ等の **1/496** と不一致で、同記事内合算とも整合しにくいため `SOURCE_ANOMALY_REG_SETTING1_1_469` としてcanonicalから除外。
4. HAZUSEのメーカー欄「バイオニア」は明確な表記誤りとして、パイオニア公式/業界記事を優先。
5. 2022年「ハナハナホウオウ～天翔～-30」の6号機情報を2015年機へ混入させない。

## 2015-09-14群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
1. **キングジャック** — アクロス — No.912。
2. **ハナハナホウオウ-30** — パイオニア — No.913。

- 既存No.911「聖闘士星矢～女神聖戦～」には09-14表記資料もあるが既存レコードなので重複登録しない。
- 今回の横断再監査で、09-14全国実ホール導入として固定できる新たな未登録5号機を発見できず、群をCLOSEDとする。

## 次回再開地点

1. **recordCount 913 / chronologicalFrontier 2015-09-14 / 09-14_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.913を再確認。
3. **2015-09-15～09-27境界**を日付別・全メーカー横断で監査し、具体日付き未処理5号機があれば最初の機種から処理する。
4. 境界を閉じられる場合、次の強い既知群は **2015-09-28**。現時点で **「パチスロ無双OROCHI」（山佐）**、**「アスラズ ラース」（エンターライズ）** が09-28導入で確認できる。候補だけで群を閉じず、当日全メーカーを再監査する。
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

### No.913 ハナハナホウオウ-30
- パイオニア公式 更新履歴: https://www.slot-pioneer.co.jp/news.html
- PiDEA X 2015-08-21: https://www.pidea.jp/articles/%E3%83%91%E3%82%A4%E3%82%AA%E3%83%8B%E3%82%A2%E3%80%8C%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A%E3%80%8D%E3%82%AC%E3%83%BC%E3%82%B4%E3%82%A4%E3%83%AB%E3%81%A8%E3%82%B3%E3%83%A9%E3%83%9C
- グリーンべると: https://web-greenbelt.jp/00008014/
- K-Navi: https://p-kn.com/slot/2333/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0623/
- なな徹 ボーナス確率/機械割: https://nana-press.com/kaiseki/machine/34/563/
- なな徹 50枚ベース: https://nana-press.com/kaiseki/machine/34/570/
- イチカツ: https://ichikatsu.com/hanahanahouoh/
- すろぱちくえすと 設定判別: https://www.slopachi-quest.com/article/hanahana-houou-30-settei/
- すろぱちくえすと ハナハナシリーズ朝一: https://www.slopachi-quest.com/article/hanahana-reset/
- ジャグラーズネット: https://jugglersnet.com/analysis-hana/hanahana-hou
- みんスロ: https://minslo.com/%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A%E3%83%9B%E3%82%A6%E3%82%AA%E3%82%A6%E2%80%9030/

### 次の既知候補
- パチスロ無双OROCHI（2015-09-28）: https://p.hisshobon.jp/machine/2635/1/54033
- アスラズ ラース（2015-09-28）: https://hazuse.com/machine/pachislot/5S0457/

## confidence

- identity/manufacturer: OFFICIAL_PLUS_INDUSTRY
- formalModelName/inspectionNumber: ANALYSIS_HIGH
- exactReleaseDate: CONFLICT_WITH_INDUSTRY_SCHEDULE_SUPPORT_FOR_2015_09_14
- performanceCore: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- resetBehaviorApplicability: HIGH_BY_SYSTEM_TYPE_AND_NO_CEILING
- reset87GBgmState: ANALYSIS_SINGLE_PLUS_SERIES_CROSSCHECK
- resetInitialBigPanelFlash50Percent: ANALYSIS_SINGLE
- purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetectionGakkun: ANALYSIS_SINGLE_NON_DETERMINISTIC
- resetDetectionBetLamp: CONFLICT_DO_NOT_USE_AS_CONFIRMED