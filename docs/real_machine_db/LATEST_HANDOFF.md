# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **759**
- latestMachineAddedByChronology: **パチスロ PROJECT ARMS**（ニューギン）
- latestRecord: `docs/real_machine_db/machines/2013-09-02_project-arms.md`
- chronologicalFrontier: **2013-09-02**
- frontierLatestExactDateMachine: **パチスロ PROJECT ARMS**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-09-02_GROUP__NEXT_KAIDOU-MOKUSHIROKU-KAIJI3**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前レコード `2013-08-19_contra-3d.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり、より新しい **LATEST_HANDOFF + 実レコード** を正として継続。
- 開始時main正本は recordCount **758** / chronologicalFrontier **2013-08-19** / 08-19群CLOSED。
- 2013-08-20以降を当時導入カレンダー・個別機種DB・業界資料で再監査。後年の撤去/認定・検定期限系資料に現れる8月下旬の日付をホール導入日へ混入させず、今回の検索範囲では **2013-08-20〜2013-09-01に具体的な新規ホール導入日を固定できる未登録5号機を確認できなかった**。
- 次の具体導入日として複数資料で **2013-09-02** を確認。同日群の未処理先頭 **パチスロ PROJECT ARMS（ニューギン）** を759件目として追加。
- 同日には **回胴黙示録カイジ3（ロデオ）** が未処理で残るため、2013-09-02群はOPENのまま。

## 今回追加 — パチスロ PROJECT ARMS

### identity / 性能コア

- manufacturer: **ニューギン**。
- releaseDate: **2013-09-02**。K-Navi / パチビー / パチスロ解析DBで一致し、グリーンべると当時業界記事も9月2日納品開始予定とする。
- 型式名: **プロジェクトアームズW**。
- generation/system: **5号機 / A+ART / ボーナス+ART / CZ**。
- 機械割: **96.6 / 99.5 / 100.3 / 104.2 / 109.8 / 116.6%**。
- ART初当たり: **1/688 / 1/637 / 1/635 / 1/576 / 1/562 / 1/451**。
- BIG: **1/442.8 / 442.8 / 442.8 / 439.8 / 439.8 / 439.8**。
- REG: **1/565.0 / 555.4 / 520.2 / 504.1 / 489.1 / 474.9**。
- ボーナス合算: **1/248.2 / 246.4 / 239.2 / 234.9 / 231.6 / 228.3**。
- baseGamesPer50: **平均約33G/50枚**（単一解析資料値）。
- ART「ARMS RUSH」: **30〜300G+α / 純増約1.5枚/G / 継続率50〜90%**。
- BIG平均約**204枚**、REG平均約**60枚**。

### resetBehavior v0.7

- パチスロ解析DBの本機ページに **設定変更時は天井到達までのゲーム数がクリア**されるとの直接記述あり。`gameCounterReset.settingChange = CLEAR_CONFIRMED_SINGLE_DIRECT_ANALYSIS_SOURCE`。
- 同ページは通常天井を **ボーナス間1200G** とするが、天井節の見出しに別機種「RAVE エンドレスラッシュ」の名称が混入している編集誤記があるため、天井値と設定変更時クリアは **ANALYSIS_SINGLE_WITH_PAGE_TRANSCRIPTION_WARNING** として信頼度を抑えて保存。
- 純据え置き時の天井G/内部状態引継ぎ、設定変更を伴わない電源OFF→ON、設定変更時の低確/高確/超高確初期状態、ガックン・初期出目・液晶等の変更判別は、機種名・型式名・メーカー名と検索語を変え、K-Navi、パチマガスロマガ、当時解析、旧DB、回顧資料を横断後も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の固定短縮天井、専用CZ/高確、朝一特定G以内当選率などの公開恩恵: **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## CONFLICT / safeguard

- releaseDateは、K-Navi / パチビー / パチスロ解析DBが **2013-09-02**、グリーンべるとも9月2日納品開始予定で一致。一方、後年の5号機クロニクルは **2013/8** と掲載。平均せず `CONFLICT_RELEASE_MONTH_RETROSPECTIVE_2013-08_VS_EXACT_MULTI_SOURCE_2013-09-02` とし、具体日一致を主値採用。
- 天井節の別機種名混入は `SOURCE_TRANSCRIPTION_WARNING_CEILING_SECTION_OTHER_MACHINE_NAME_RAVE` として保存し、別機種の仕様を自動転記しない。
- CR PROJECT ARMS（藤商事）等の同名別カテゴリを混入させない。

## 境界監査 / 同日群

- **2013-08-20〜2013-09-01: CLOSED_FOR_CURRENT_RESEARCH**。今回、具体ホール導入日として固定できる未登録5号機を追加確認できなかった。
- 2013-09-02登録済み（今回時点）:
  1. **パチスロ PROJECT ARMS**（ニューギン）
- 2013-09-02未処理確認済み:
  - **回胴黙示録カイジ3**（ロデオ）
- よって **2013-09-02群はOPEN**。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 新規収集キューを優先し、既存性能値の無駄な再収集はしない。

## 次回再開地点

1. **recordCount 759 / chronologicalFrontier 2013-09-02 / 09-02群OPEN** から開始。
2. 同日未処理先頭 **回胴黙示録カイジ3（ロデオ）** を性能コア + resetBehavior v0.7で収集。
3. カイジ3登録後、2013-09-02同日群をメーカー横断・導入カレンダーで再監査し、漏れがなければCLOSEDへ更新。
4. その後、2013-09-03以降の次の具体導入日へ前進。検定日/認定期限/撤去期限を導入日へ混入させない。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から、最初のresetBehavior欠損機を確定して補完。

## 主要出典 — 取得日 2026-09-06

### PROJECT ARMS

- グリーンべると: `https://web-greenbelt.jp/00006797/`
- K-Navi: `https://p-kn.com/slot/1900/`
- パチビー: `https://www.pachibee.jp/machines/index/213080003`
- パチスロ解析DB: `https://pachislo-data.com/newgin/projectarms`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/27/newgin_slot_27.php`
- 5号機クロニクル: `https://5goki.com/newgin-excite`
- pachinko’s blog 型式補助資料: `https://pachinko.hatenablog.jp/entry/2013/09/project-arms`
- 中一商事 型式補助資料: `https://www.nakaiti.com/html/sNyugin010.html`

### 次候補 / 境界

- K-Navi「回胴黙示録カイジ3」: `https://p-kn.com/slot/1901/`

## commits

- 759th record add: `d43c2bebcc31d5942881a537e59300a8cdb2b04a` (`db: add PROJECT ARMS with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay handoff after PROJECT ARMS`)
