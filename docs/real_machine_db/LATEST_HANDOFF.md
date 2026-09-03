# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **492**
- latestMachineAdded: **戦国物語-猛虎激闘絵巻-**（ニューギン / 2010-06-14）
- latestRecord: `docs/real_machine_db/machines/2010-06-14_sengoku-monogatari.md`
- chronologicalFrontier: **2010-06-14**
- frontierLatestMachine: **戦国物語-猛虎激闘絵巻-**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前491「ゴッドハンターV」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **491** / chronologicalFrontier **2010-06-08**。
- パチビー2010年6月月間導入一覧を再監査。6/9〜6/13に新規パチスロ掲載はなく、次の明確なパチスロ候補は6/14「戦国物語-猛虎激闘絵巻-」。
- 当時グリーンべるとは2010-05-12記事で「戦国物語」は6/13から納品開始予定と報道。K-Navi・パチビーは6/14ホール導入で一致するため、本DBのreleaseDate/chronologicalFrontierは2010-06-14を採用し、6/13は物流開始予定として分離保存。
- repoコード検索で「戦国物語」未登録を確認後、492件目として追加。

## 492 — 戦国物語-猛虎激闘絵巻- 要約

- メーカー: **ニューギン**
- 導入主値: **2010-06-14**（K-Navi / パチビー一致）
- 納品開始予定: **2010-06-13**（当時グリーンべると）
- 世代/タイプ: **5号機 / ノーマル / ボーナス主体 / 単純告知 / ART・AT・CZ非搭載**
- 機械割: K-Navi **97.3 / 98.8 / 100.8 / 103.2 / 106.1 / 111.1%**、パチマガスロマガは設定6のみ **111.6%** → `CONFLICT`
- BIG合成: **1/266 / 1/261 / 1/254 / 1/245 / 1/233 / 1/213**
- REG: **1/397 / 1/377 / 1/350 / 1/324 / 1/299 / 1/271**
- ボーナス合成: **約1/159 → 約1/119**（K-Navi/P-WORLD端数値1/159.5〜1/119.2）
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- 基本獲得: 同色BIG **約312枚**、戦BONUS **200〜300枚・平均約260枚**、REG **約104枚**
- 戦BONUSの「異色BIG約206枚」表記と「平均約260枚」は固定純増欄とJAC変動平均の定義差をレコード内に保持。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

## resetBehavior v0.7 — 戦国物語

- **設定変更**: 天井・ART/AT/CZ・持続型ゲーム数モードが確認されないノーマル機なので、朝一客行動へ影響する主要進行要素はなし。本機固有の低レベルRAM/初期化処理は十分再探索後も直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 引継ぎ対象となる天井G数・ART/AT/CZ・周期/持続モードは `NOT_APPLICABLE`。低レベル状態は未確認。
- **電源OFF→ON**: 初期出目・リール等の本機固有処理は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数・天井**: ゲーム数天井/周期天井なしとして `NOT_APPLICABLE / NONE_CONFIRMED`。リセット短縮天井も `NOT_APPLICABLE`。
- **モード・状態**: 朝一へ持ち越す継続型モード/高確/ART/CZ状態は確認されず。低レベル内部状態のみ未確認。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン/初期出目/リール/ランプ/シャッター等まで再探索したが本機固有高信頼情報は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済み。
- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み。
- 次の欠損候補は2006-11群の `小野真弓のかわいい日本昔話` / `海童王`。既存レコードのreleaseDateと実ファイル順を確認し、順序を固定してから補完する。

## 主要出典（取得日 2026-09-03）

### 戦国物語-猛虎激闘絵巻-
- K-Navi: `https://p-kn.com/slot/1212/`
- K-Navi 機械割&期待収支: `https://p-kn.com/slot/1212/19279/`
- パチビー2010年6月導入一覧: `https://www.pachibee.jp/machines/schedule/2010-06`
- パチビー機種ページ: `https://www.pachibee.jp/machines/reach/210050002`
- グリーンべると 2010-05-12: `https://web-greenbelt.jp/00006598/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5964`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/14/a.php`
- パチマガスロマガ ボーナス抽選確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/14/h.php`

## 今回のGitHub更新

- 492 戦国物語-猛虎激闘絵巻-追加: commit `724caff1f72ddf54f1724b9d08504b26065103d4`

## 次回再開地点

1. **recordCount 492 / chronologicalFrontier 2010-06-14**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-14同日群を別系統の月間導入一覧・K-Navi・P-WORLD・当時業界記事で最終監査**し、戦国物語以外の未登録パチスロがあれば同日群から先に処理する。
3. 6/14同日群を閉じたら **2010-06-15〜2010-06-20** を境界監査。パチビー月間一覧上の次の明確なパチスロ群は **2010-06-21「コード・ルージュ」「恐怖新聞～第二章～」**。
4. 6/15〜20に地域先行/別資料日付の未登録機がないか確認してから、6/21同日群の最古未登録を処理する。
5. 戦国物語の `formalModelName` / `approvalNumber` / `baseGamesPer50` は今回十分再探索後も未確定。後続QAで公的検定資料・保存アーカイブに直接値が見つかれば補完する。
6. 遡及QAは **ジャックと豆の木まで補完済み**。次は2006-11群の `小野真弓のかわいい日本昔話` / `海童王` の順序を固定し、最初のresetBehavior欠損を補完する。
7. 競合値は平均化しない。直接根拠がないresetBehaviorを世代一般論だけで確定しない。
