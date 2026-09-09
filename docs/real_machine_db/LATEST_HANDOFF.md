更新日: 2026-09-10

## 現在地点
- recordCount: **1164**
- latestRecordAdded: **SLOT魔法少女まどか☆マギカA**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-12-18_slot-madoka-magica-a.md`
- chronologicalFrontier: **2017-12-18**
- frontierLatestMachine: **SLOT魔法少女まどか☆マギカA — No.1164**
- schema: **resetBehavior v0.7**
- status: **2017-12-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__2017_YEAR_END_REACHED__NEXT_CONFIRMED_2018-01-09__ONIWAKA_BENKEI_2017-12-04_PLANNED_DATE_FALSE_POSITIVE_ACTUAL_2018-02-19__2017-11_MONTH_DAY_UNRESOLVED_IMISORE_XX**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1163 `まめ`を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1163件 / chronologicalFrontier 2017-12-04 / 12/4群CLOSED**。
- 12/5〜12/17の地域差/別スペック境界監査を実施。
- すろぱちくえすとの2017年一覧に12/4 **「鬼若弁慶」** があったため未登録漏れ候補として再監査したが、PiDEA X当時記事は「2017-12-04導入予定」、HAZUSE/DMM/2018年導入資料は実導入を **2018-02-19** とする。したがって12/4の表記は予定日由来のfalse positiveと判定し、2017年レコードとしては追加しない。2018-02-19群で正式回収する。
- handoff本線どおりNo.1164 **「SLOT魔法少女まどか☆マギカA」** をperformance core + resetBehavior v0.7で収集。
- K-Navi / モゲスロ / すろぱちくえすと系の2017年12月導入一覧はいずれも12/18のパチスロを本機のみとして扱うため、**2017-12-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- 12/18以降の2017年全国導入パチスロを複数カレンダーで確認できず、収集frontierは2017年末へ到達。次の確認済み全国導入群は **2018-01-09**。

## No.1164 — SLOT魔法少女まどか☆マギカA
- path: `docs/real_machine_db/machines/2017-12-18_slot-madoka-magica-a.md`
- manufacturer: エレコ
- releaseDate: 2017-12-18
- generation/system: 5.9号機 / ノーマルA / プチRT / 技術介入
- formalModelName: `SLOT魔法少女まどか☆マギカAMA`
- certificationNumber: `7S1057`
- 通常掲載機械割: **97.8 / 98.4 / 100.4 / 103.6 / 107.8 / 114.3%**
- 完全攻略機械割: **99.4 / 100.1 / 102.2 / 105.6 / 110.2 / 117.2%**
- BIG: **1/256.0 / 256.0 / 256.0 / 247.3 / 229.1 / 206.7**
- REG: **1/425.6 / 394.8 / 350.5 / 310.6 / 291.3 / 249.2**
- 合算: **1/159.8 / 155.3 / 147.9 / 137.7 / 128.3 / 113.0**
- 50枚ベース: 約 **34.1 / 34.1 / 35.0 / 35.7 / 36.4 / 37.1G**。設定1約34.1Gと全体34.1〜37.1Gは複数二次資料、設定別内訳は後年整理1系統。
- 基本獲得: BIG最大311枚 / REG最大103枚。
- 天井: **なし**。

### resetBehavior v0.7
- 設定変更時の液晶開始ステージ: **通学路（まどか）**。
- 純電源OFF→ON時の液晶開始ステージも **通学路（まどか）**。
- よって液晶開始ステージ単独では設定変更と純電断を判別できない。
- 天井非搭載なのでゲーム数天井/短縮天井はN/A。
- 設定変更時・据え置き・純電断時のRT内部状態および成立済みボーナスの低レベル契約は、表記/型式/メーカー/検索語/資料系統を変えて再探索しても本機固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的ノーマル機挙動から推測補完しない。
- 朝一専用天国/高確固定/初当たり優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン確定契約/発生率、初期出目・ランプ等の決定的変更判別は `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は公開ゲーム性上の朝一客AI比較値として `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`。5.9号機一般論から付加しない。

### conflicts
- HAZUSE機械割欄は **97.8 / 100.1 / 102.2 / 105.6 / 110.2 / 117.2%**。複数資料が通常値と完全攻略値を別系列で示すのに対し、設定1のみ通常値・設定2〜6が完全攻略値と一致する混在表になっているため `CONFLICT_SOURCE_LABEL_OR_COPY_PAYOUT_TABLE_HAZUSE`。平均しない。
- BIG最大はK-Navi/P-WORLD/パチマガ等 **311枚**、後年整理1系統 **310枚**。311枚をcanonical、`CONFLICT_SECONDARY_BIG_MAX_310_VS_311`保持。

## 12/4境界監査 — 鬼若弁慶
- すろぱちくえすと2017年一覧: 2017-12-04として掲載。
- PiDEA X 2017-10-17業界記事: ボーダー「鬼若弁慶」、**2017-12-04導入予定**。
- HAZUSE: 型式`オニワカベンケイ`、検定番号`7S1056`、メーカー ボーダー、**導入開始2018-02-19**。
- DMM系機種DBおよび2018年導入カレンダーも **2018-02-19** を支持。
- 結論: `PLANNED_DATE_2017_12_04_VS_ACTUAL_RELEASE_2018_02_19`。2017年12/4群には追加せず、2018-02-19群で収録予定。
- 性能先行メモ: Aタイプ、機械割 **97.62 / 98.19 / 101.11 / 104.62 / 107.92 / 110.26%**、BIG **1/278.88 → 1/240.06**、REG **1/313.57 → 1/239.18**、合算 **1/147.60 → 1/119.81**、天井なし。正式回収時にresetBehavior v0.7を再探索する。

## 12/18群監査 / 2017年末境界
- K-Navi 2017年12月カレンダー: 12/18パチスロは **SLOT魔法少女まどか☆マギカA** のみ。
- モゲスロ2017年カレンダー: 12/18は同機のみ。
- すろぱちくえすと系年次一覧でも12/18は同機のみ。
- 12/19〜12/31に別の全国導入パチスロをこれら複数系統で確認できず、**2017_YEAR_END_REACHED_AFTER_CROSS_SOURCE_CALENDAR_AUDIT**。

## 次の確認済み導入群
- **2018-01-09**
  - `パチスロ コードギアス反逆のルルーシュR2 C.C.ver.`
  - `南国物語 TYPE-A`
- K-Naviの南国物語TYPE-A機種ページは導入2018-01-09。
- ちょんぼりすた/一撃/HAZUSE等もコードギアスR2 C.C.ver.を2018-01-09導入としている。
- 次回は2018年1月カレンダーを全メーカー横断し、同日漏れを確認した上で最古未処理からNo.1165候補として収集する。

## 品質メモ
- ノーマル/A+RT機ではRT内部状態の設定変更・純電断挙動を機種固有資料なしに一般論で埋めない。
- 「導入予定日」と「実導入日」をreleaseDateで混同しない。鬼若弁慶はこのルールで2018-02-19へ送る。
- 5.9号機であっても、有利区間を出玉ゲーム性に使わないノーマル機へ朝一有利区間恩恵を推測追加しない。
- `イミソーレXX`の日単位導入日は引き続き `UNVERIFIED_AFTER_RESEARCH`。月単位No.1159として回収済みで本線は止めない。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1164を再取得。
2. **1164件 / chronologicalFrontier 2017-12-18 / 12/18群CLOSED / 2017年末到達** を正本として継続。
3. 2017-12-19〜12-31の地域差・別スペックを短く最終境界監査。決定的な未登録がなければ2018へ進む。
4. 2018-01-09群を複数カレンダー/メーカー別一覧で監査し、最古未処理をNo.1165としてperformance core + resetBehavior v0.7収集。現時点候補は **コードギアスR2 C.C.ver. / 南国物語 TYPE-A**。
5. 2018-01-09群をCLOSED判定後、次の日付群へ時系列前進。
6. **鬼若弁慶は2018-02-19実導入として正式回収**。2017-12-04予定表記はconflict/evidenceとして保持。
7. `イミソーレXX` exact dayは新しい決定的資料が出た場合のみ追補。
8. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### SLOT魔法少女まどか☆マギカA
- K-Navi: https://p-kn.com/slot/2916/
- K-Navi 2017年12月カレンダー: https://p-kn.com/calendar/201712/
- HAZUSE: https://hazuse.com/machine/pachislot/7S1057/
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/7S1057/genre/201/
- ユニバーサル公式系ブログ: https://ameblo.jp/aruzefreaks/entry-12333972487.html
- Pachibee / PiDEA系: https://www.pachibee.jp/pparticles/view/1008
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/9677/greenbelt
- P-WORLD: https://www.p-world.co.jp/machine/database/8531
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/103/a.php
- パスログ当時スペック: https://slotlog.net/archives/26162816.html
- スロがち: https://slogati.com/madomagi-a/
- モゲスロ2017年カレンダー: https://moge-site.com/new-slot2017

### 鬼若弁慶境界監査
- PiDEA X 当時発表（2017-12-04導入予定）
- HAZUSE（実導入2018-02-19 / 7S1056）: https://hazuse.com/machine/pachislot/7S1056/
- DMM系機種DB（2018-02-19）

### 2018次回境界
- K-Navi 南国物語 TYPE-A: https://p-kn.com/slot/2924/
- ちょんぼりすた コードギアスR2 C.C.ver.: https://chonborista.com/slot/sammy-slot/50647/
- HAZUSE コードギアスR2 C.C.ver.: https://hazuse.com/machine/pachislot/7S1251/
