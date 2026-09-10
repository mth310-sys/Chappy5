更新日: 2026-09-10

## 現在地点
- recordCount: **1187**
- latestRecordAdded: **SLOTパックマン**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-04-23_slot-pacman.md`
- chronologicalFrontier: **2018-04-23**
- frontierLatestMachine: **SLOTパックマン — No.1187**
- schema: **resetBehavior v0.7**
- status: **2018-04-23_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1185 `パチスロ これはゾンビですか？` を再取得して開始。
- `INDEX.md` は初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1185件 / chronologicalFrontier 2018-04-09 / 4/9群CLOSED**。
- GitHub検索で `不二子TYPE-A+`、`SLOTパックマン` の既存レコードがないことを確認。
- No.1186 `パチスロ 不二子 TYPE A+` を追加し、4/16群をCLOSE。
- No.1187 `SLOTパックマン` を追加し、複数導入カレンダー/解析資料で4/23の独立追加機種を再監査。追加の同日パチスロ機を固定できなかったため4/23群をCLOSE。

## No.1186 — パチスロ 不二子 TYPE A+
- path: `docs/real_machine_db/machines/2018-04-16_fujiko-type-a-plus.md`
- manufacturer: **オリンピア**
- releaseDateCanonical: **2018-04-16**
- formalModelName: `ルパン三世不二子Type-A＋／G6`
- certificationNumber: `7S1296`
- generation/system: **5.9号機 / A+RT / 技術介入**
- settings: **1 / 4 / 6**
- 通常機械割: **97.9 / 100.8 / 108.0%**
- 完全攻略: **100.1 / 104.5 / 108.1%**
- BIG合算: **1/331.0 / 1/309.1 / 1/299.3**
- REG: **1/390.1 / 1/374.5 / 1/321.3**
- ボーナス合算: **1/179.1 / 1/169.3 / 1/154.9**
- 50枚ベース: **約34〜37G/50枚**
- S-BIG: **最大402枚** / BIG: **平均約350枚** / REG: **最大103枚**
- RT「不二子TIME」: **30G+α**
- 天井: **非搭載**

### resetBehavior v0.7
- 天井非搭載のため天井リセット/短縮は`NOT_APPLICABLE`。
- 設定変更/据え置き/純電断別のRT状態・残G、本機固有有利区間契約、ガックン/初期出目は表記揺れ・型式・メーカー・シリーズ名・各種朝一語を変えて再探索したが直接固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用の主要数値恩恵は`NONE_CONFIRMED_AFTER_RESEARCH`。

### conflict
- パチビー一部ページは導入日2018-04-09、HAZUSE/K-Navi/ちょんぼりすた/当時資料は2018-04-16。平均せず`CONFLICT_RELEASE_DATE_2018_04_09_VS_2018_04_16`。canonicalは2018-04-16。

## No.1187 — SLOTパックマン
- path: `docs/real_machine_db/machines/2018-04-23_slot-pacman.md`
- manufacturer: **メーシー（ユニバーサル系）**
- releaseDateCanonical: **2018-04-23**
- formalModelName: `SLOTパックマン／DG`
- certificationNumber: `7S1558`
- generation/system: **5.9号機 / ノーマル / 完全告知**
- settings: **1 / 2 / 5 / 6**
- 機械割: **97.7 / 99.5 / 103.5 / 111.1%**
- BIG: **1/277.7 / 1/269.7 / 1/259.0 / 1/231.6**
- REG: **1/436.9 / 1/390.1 / 1/350.5 / 1/296.5**
- 合算: **1/169.8 / 1/159.5 / 1/148.9 / 1/130.0**
- 通常ベース: **約35G/50枚**（別資料試算35.2〜36.3G）
- BIG: **312枚** / REG: **最大104枚**
- 天井: **非搭載**

### resetBehavior v0.7
- 設定変更後は **1回目のボーナス当選までコーヒーブレイク状態**。ボーナス後256G以降も同状態へ移行。
- コーヒーブレイク中はリプレイ確率が若干上昇。
- 公開ベース: **設定1 36.9G / 2 36.9G / 5 38.0G / 6 39.7G /50枚**。
- 公開機械割: **100.1 / 102.1 / 105.7 / 113.4%**。
- 天井非搭載なので短縮天井ではない。
- 据え置き/純電断時のコーヒーブレイク状態・ボーナス間G契約、ガックン/初期出目は`UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすたの「朝イチ恩恵なし」と、すろぱちくえすとの設定変更後コーヒーブレイク数値は`WORDING_CONFLICT_RESET_BENEFIT`として定義差を保持。

## 2018-04-16 / 04-23群監査
- 4/16: HAZUSE、K-Navi、ちょんぼりすた、当時資料で `不二子 TYPE A+` を確認。独立同日追加機を固定できずCLOSE。
- 4/23: K-Navi、ちょんぼりすた、HAZUSE、すろかい、導入カレンダーで `SLOTパックマン` を確認。独立同日追加機を固定できずCLOSE。
- 後年導入カレンダーでも4/9=`これはゾンビですか？`、4/16=`不二子TYPE-A+`、4/23=`パックマン` の時系列が一致。

## 次導入日群の先行確認
- 4/24〜5/6境界を監査後、**2018-05-07群**が次の有力OPEN地点。
- 先行候補:
  - `パチスロ 大海物語4` — 三洋物産 / 2018-05-07。
  - `パチスロ北斗の拳 修羅の国篇 羅刹ver.` — サミー / 2018-05-07。
  - `パチスロ FAIRY TAIL` — 藤商事。納品予定2018-05-06資料あり。ホール導入日を5/7群として複数ソース再確認してから登録。
- 次回は5/7群を全メーカー・別スペック・表記揺れで監査し、最古の未処理機種からNo.1188以降を付与する。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- resetBehaviorで推測表現「?」「可能性が高い」「調査中」を確定契約へ昇格しない。
- 5.9号機一般論から本機固有の有利区間リセット契約を推定転記しない。
- `INDEX.md` は旧スナップショット。次回も `LATEST_HANDOFF.md` + main実レコードを優先する。
- 既存性能値を無駄にやり直さず、新規未処理機種とresetBehaviorの必要箇所のみ進める。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1187を再取得。
2. **1187件 / chronologicalFrontier 2018-04-23 / 4/23群CLOSED** を正本として継続。
3. 4/24〜5/6境界を最終監査。
4. **2018-05-07群OPEN**。大海物語4 / 北斗修羅 羅刹ver. / FAIRY TAIL を重複確認し、最古の未処理機種からNo.1188以降で登録。
5. 各機performance core + resetBehavior v0.7を収集。
6. 5/7同日全メーカー・別スペック・表記揺れを横断監査して群CLOSE判定。
7. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1186 不二子 TYPE A+
- HAZUSE: https://hazuse.com/machine/pachislot/7S1296/
- K-Navi: https://p-kn.com/slot/2971/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/53821/
- P-WORLD: https://www.p-world.co.jp/machine/database/8589
- P-WORLD/グリーンべると: https://news.p-world.co.jp/articles/9916/greenbelt
- パチビー（4/9表記 conflict）: https://www.pachibee.jp/movies/index/14439

### No.1187 SLOTパックマン
- HAZUSE: https://hazuse.com/machine/pachislot/7S1558/
- K-Navi: https://p-kn.com/slot/2993/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/56726/
- すろぱちくえすと: https://www.slopachi-quest.com/article/pachislot-pacman/
- すろかい: https://slotkaiseki.hatenablog.com/entry/pacman
