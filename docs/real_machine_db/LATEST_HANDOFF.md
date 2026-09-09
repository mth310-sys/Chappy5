更新日: 2026-09-10

## 現在地点
- recordCount: **1153**
- latestRecordAdded: **パチスロ ゴルゴ13**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_pachislot-golgo13-sankyo.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **パチスロ ゴルゴ13 — No.1153**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN_FINAL_CROSS_SOURCE_AUDIT_FOUND_ADDITIONAL_GAP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1152を再取得して開始。
- INDEXは初期19件時点の旧スナップショット。README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1152件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_PENDING_FINAL_CROSS_SOURCE_AUDIT**。
- 9/19群を導入日・メーカー・表記揺れで再横断した結果、SANKYO **「パチスロ ゴルゴ13」** が複数の2017-09-19導入資料に存在し、GitHub既存検索では2017年SANKYO機として未登録だったため **No.1153** として追加。
- 2006年既存「ゴルゴ13 ザ・プロフェッショナルJ」とは別機種。型式・メーカー・世代を分離し重複扱いしない。

## No.1153 — パチスロ ゴルゴ13
- manufacturer: **SANKYO**。
- releaseDate: **2017-09-19**。SANKYO公式は2017.09、HAZUSE・K-Navi・パチビー・ちょんぼりすた・すろぱちくえすとで9/19一致。
- formalModelName: **パチスロゴルゴ13S**。
- certificationNumber: **7S0229**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_NUMERIC_RESET**。

### 性能コア
- 機械割: **96.9 / 98.4 / 99.9 / 103.6 / 105.7 / 110.2%**。
- CZ「GAME13」後半突入相当: **1/367 / 357 / 348 / 327 / 326 / 318**。
- ART初当たり: **1/673 / 655 / 639 / 592 / 569 / 518**。
- 50枚ベース: **約44G**。
- ART純増: **約2.0枚/G**。
- ART「G-FEVER」: **1セット100G+α / セットストック型**。
- 通常ART初当たり時の超A級スナイパーRUSHスタート率: **約25%**（reset専用値ではない）。
- 最大天井: **1565G**。

### 定義差 / CONFLICT
- SANKYO公式/すろぱちくえすとのCZ率 **1/367〜1/318** はGAME13後半突入相当。一部当時解析のGAME13 **1/131〜1/125** は前半を含む広い突入率。定義差として分離し平均しない。
- 最大1565G天井の恩恵は、HAZUSE・ちょんぼりすた・2017年当時解析が **GAME13後半突入 / ART非確定** と詳細記述。一方P-WORLDは **ART突入** と要約するため `CONFLICT_CEILING_EFFECT_CZ_VS_ART_DIRECT`。canonicalは複数の高解像度解析一致のCZ後半突入。

### resetBehavior v0.7
- 設定変更: **天井RESET / SCテーブルRESET・再抽選 / CB状態RESET / 各種状態RESET表記あり**。
- 純電源OFF→ON: **天井・SCテーブル・CB状態CARRYOVER**。
- 据え置き: **天井CARRYOVER**を直接確認。その他の独立契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 設定変更時開始ステージ: **ニューヨーク / ロンドン / 東京**。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。通常の天井候補56/130/565/999/1300/1565Gと設定差はあるが、reset専用テーブルとしては固定しない。
- 朝一恩恵: 設定変更時、ART当選時の **超A級スナイパーRUSHスタート割合が優遇**されるとの解析あり。
- 通常時基準は約25%だが、reset時の上昇後具体率は検索語・資料系統を変えても固定できず **UNVERIFIED_AFTER_RESEARCH**。25%をreset専用値として転記しない。
- 本機固有ガックン率・初期出目・ランプによる確定変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-09-19群 — OPEN / 最終横断監査継続
- 前handoffの「漏れ無しならCLOSE」監査を実施したところ、SANKYO「パチスロ ゴルゴ13」の追加漏れを1件発見したため、今回は群をCLOSEしない。
- 既確認9/19機として、ウルトラセブン / 地獄少女 宵伽 / 亜人 / STEINS;GATE ランヴォア / 蒼き鋼のアルペジオ / 魁!!男塾 / 盗忍！剛衛門 / シンデレラブレイド3 / トロピカルKISS各スペック等は導入資料上再出現。既存DBとの突合を継続する。
- 次回は **SANKYO以外も含む2017-09-19導入カレンダーの残りメーカー・別スペック・地域導入差**をさらに横断し、No.1153までの実レコードと突合する。
- 追加漏れが見つかれば最古未処理を **No.1154候補**として追加。追加漏れが無いことを複数系統で確認できた時点で **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** として次導入日群へ進む。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1153を再取得。
2. **1153件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_FINAL_CROSS_SOURCE_AUDIT_FOUND_ADDITIONAL_GAP** を正本として継続。
3. 2017-09-19を導入カレンダー・メーカー別一覧・HAZUSE/P-WORLD/K-Navi/当時解析・表記揺れ・地域差・別スペックで再横断し、既存レコードと突合。
4. 漏れが見つかった場合は、その最古未処理機種を **No.1154候補**としてperformance core + resetBehavior v0.7を収集・保存。
5. 漏れが無ければ **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とし、複数導入日資料で次の日付群を確定して時系列前進。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
- SANKYOオンライン博物館（公式）: https://www.sankyo-fever.jp/collection/694/
- HAZUSE: https://hazuse.com/machine/pachislot/7S0229/
- HAZUSE ART解析: https://hazuse.com/machine/pachislot/7S0229/genre/209/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/42642/
- すろぱちくえすと: https://www.slopachi-quest.com/article/gorugo13/
- スロット解析情報~すろかい~（2017年当時解析）: https://slotkaiseki.hatenablog.com/entry/golgo13
- K-Navi: https://p-kn.com/slot/2845/
- パチビー: https://www.pachibee.jp/machines/lecture/217080016
- P-WORLD: https://www.p-world.co.jp/machine/database/8454
