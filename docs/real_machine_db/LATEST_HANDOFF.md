更新日: 2026-09-10

## 現在地点
- recordCount: **1154**
- latestRecordAdded: **パチスロ 闘え！サラリーマン**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-04_tatakae-salaryman.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **パチスロ ゴルゴ13 — No.1153**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN_RETROACTIVE_RELEASE_DATE_CONFLICT_GAP_RECOVERED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1153を再取得して開始。
- INDEXは初期19件時点の旧スナップショット。README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1153件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_FINAL_CROSS_SOURCE_AUDIT_FOUND_ADDITIONAL_GAP**。
- 9/19群のメーカー・導入カレンダー・表記揺れ再監査で、ロデオ **「パチスロ 闘え！サラリーマン」** が未登録と判明したため **No.1154** として追加。
- 本機の導入日は資料競合あり。HAZUSE・ちょんぼりすた・2017年新台カレンダーは **2017-09-04**、パチビー・後年天井資料は **2017-09-19**。平均せず `CONFLICT_RELEASE_DATE_2017_09_04_VS_2017_09_19` とし、複数の当時系資料一致の **9/4をchronological canonical** とした。このため今回追加は遡及漏れ回収で、chronologicalFrontier自体は **2017-09-19** のまま。

## No.1154 — パチスロ 闘え！サラリーマン
- manufacturer: **ロデオ**。
- formalModelName: **闘え！サラリーマン／XA**。
- certificationNumber: **7S0687**。
- 型式・製造者・検定番号は鹿児島県公安委員会2017-07-25公告で一次確認。フィールズ2017-07-11発売告知でもロデオ製を確認。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_POWER_CYCLE**。

### 性能コア
- 機械割: **97.2 / 98.6 / 100.3 / 102.2 / 105.4 / 110.2%**。
- 赤7BIG: **1/528.52 / 524.29 / 508.03 / 504.12 / 481.88 / 464.79**。
- 白7宴BIG: **1/16384.0**（全設定共通掲載）。
- ボーナス合算: **1/512.0 / 508.0 / 492.8 / 489.1 / 468.1 / 452.0**。
- ART初当たり: **1/358.9 / 342.7 / 326.2 / 299.6 / 281.3 / 259.1**。
- 50枚ベース: **約34G**（ちょんぼりすた34.1G）。
- 純増: **ART単体約1.5枚/G / ボーナス込み約1.7枚/G**を定義分離。HAZUSE本文の約1.7枚/G表記は定義曖昧として注記。
- BIG約 **200枚** / 宴BIG約 **300枚**。
- ART「通勤RUSH」: 基本 **約36G+α**。資料によって約40G+α要約あり。
- 通常最大天井: ART間 **1095G**、ボーナスではリセットされない。

### resetBehavior v0.7
- 設定変更時の天井: **365G or 730G**。
- HAZUSE公開振り分け: 通常3年から **1年短縮50.00% / 2年短縮50.00%**、すなわち **730G 50% / 365G 50%**。
- 設定変更時の内部状態・開始ステージ: 当時比較表でも調査中。再探索後 **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きを独立条件とした天井/モード/状態の直接契約: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- 純電源OFF→ON: ちょんぼりすた比較表で天井・内部状態・ステージ全て調査中。HAZUSE・当時/後年解析・中古実機資料まで再探索しても直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ガックン・初期出目・ランプ等の確定変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## CONFLICT / 品質メモ
- `CONFLICT_RELEASE_DATE_2017_09_04_VS_2017_09_19`: 9/4系と9/19系を平均せず保持。canonical 9/4。
- `NET_INCREASE_DEFINITION_SPLIT`: ART単体約1.5枚/Gとボーナス込み約1.7枚/Gを別定義として保存。
- `ART_SET_LENGTH_DISPLAY_DIFFERENCE`: 高解像度時間換算は約36G+α、別資料は約40G+α要約。両方保持。

## 2017-09-19群 — OPEN / 最終横断監査継続
- 今回も追加漏れが1件見つかったため群はCLOSEしない。
- 「闘え！サラリーマン」は9/4 canonicalだが9/19資料にも載るため、9/19群監査から発見した遡及漏れとして処理した。
- 次回は **2017-09-19導入カレンダーの残りメーカー・別スペック・地域差を、No.1154までの実レコードと再突合**する。
- 追加漏れが見つかれば、その最古未処理機種を **No.1155候補**として追加。
- 複数系統で追加漏れ無しを確認できた時点で **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とし、次導入日群へ進む。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1154を再取得。
2. **1154件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_RETROACTIVE_RELEASE_DATE_CONFLICT_GAP_RECOVERED** を正本として継続。
3. 2017-09-19を導入カレンダー・メーカー別一覧・HAZUSE/P-WORLD/K-Navi/当時解析・地域差・別スペックで再横断し、No.1154までの既存レコードと突合。
4. 漏れが見つかった場合は最古未処理を **No.1155候補**としてperformance core + resetBehavior v0.7を収集・保存。
5. 漏れが無ければ **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とし、複数導入日資料で次の日付群を確定して時系列前進。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
- フィールズ「新機種『パチスロ 闘え!サラリーマン』発売のお知らせ」（2017-07-11）: https://www.tsuburaya-fields.co.jp/ir/j/files/press/2017/press_20170711a.pdf
- 鹿児島県公報 第3334号 / 公安委員会告示第85号（2017-07-25）: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1707/documents/60654_20170724145425-1.pdf
- HAZUSE: https://hazuse.com/machine/pachislot/7S0687/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/45491/
- パチビー: https://www.pachibee.jp/machines/about/217080013
- パチマ中古実機DB: https://www.pachima.com/c/slot/s_23sammyk/S00443
- 楽スロ: https://rakuslo.com/tatakae_salaryman-tenjyo.html
- slotnews777 2017年度新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
