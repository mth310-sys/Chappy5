# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 開始時点は259件地点 `アルティメットブレイク拳（2008-05）` まで完了。
- 2008年5月境界を再監査した結果、既存treeに未登録だった `ミュージックボックス 五木ひろし` を確認。当時グリーンべるとが **2008-05-06納品開始** と明記しているため、漏れ防止QAとして260件目に遡及追加。
- 続いて `ヒミコスタイル` は正式型式 `ヒミコスタイルA`、当時業界史更新資料で **2008-05-26発売** を確認したため261件目として追加。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。今回も新規収集と境界漏れ補完を優先。

## 260. ミュージックボックス 五木ひろし（JPS）

- record: `docs/real_machine_db/machines/2008-05-06_music-box-itsuki-hiroshi.md`
- commit: `dbcadbf7aadfe12b2336fceca801c1c7874cc2ca`
- releaseDate: `2008-05-06`（グリーンべると納品開始）
- systemType: ノーマル / BIG+REG、RT・AT非搭載
- coreStatus: `COMPLETE_CORE_WITH_PAYOUT_CONFLICT`
- resetBehaviorQA: `COMPLETE_AT_MISSION_V07_STRATEGY_LEVEL_NO_SPECIAL_RESET_FEATURE_CONFIRMED`

### 主要性能

- BIG: `1/297.89 → 1/273.07`
- REG: `1/481.88 → 1/334.37`
- 合成: `1/184.09 → 1/150.31`
- 1000円あたり: `38.12 → 40.68G`
- BIG約310〜312枚、REG約110枚
- RT/AT非搭載、天井機能非搭載。

### CONFLICT

- `CONFLICT_PAYOUT_RATE`
  - パチマガスロマガ シミュレート: `96.60 / 98.33 / 100.01 / 101.75 / 103.43 / 105.42%`
  - 2008年更新wiki/後年5号機クロニクル: `97.5 / 99.5 / 101.5 / 103.0 / 105.0 / 107.0%`
  - 平均せず双方保持。

### v0.7 resetBehavior

- パチマガスロマガの本機攻略メニューで **「攻め時・ヤメ時・設定変更時→特にナシ」** を直接確認。
- RT/AT/CZ/天井非搭載のため、朝一狙いに直結する短縮天井・専用モード・状態恩恵/不利は確認されず。
- 有利区間は `NOT_APPLICABLE`。
- ガックン/初期出目等の本機固有変更判別だけは、表記揺れ・JPS・TYPE-Jを含め再探索しても直接情報を確定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

## 261. ヒミコスタイル（エール）

- formalTypeName: `ヒミコスタイルA`
- record: `docs/real_machine_db/machines/2008-05-26_himiko-style.md`
- commit: `74e4e637737457a8ce549081d498ae284d85e1bc`
- releaseDate: `2008-05-26`
- systemType: ボーナス+RT
- coreStatus: `PARTIAL_CORE_RT_DETAIL_UNVERIFIED`
- resetBehaviorQA: `PARTIAL_RESET_PROCESS_UNVERIFIED_AFTER_RESEARCH`

### 主要性能

- BIG合成: `1/348.60 → 1/287.44`
- LB: `1/819.20 → 1/546.13`
- ボーナス合成: `1/244.54 → 1/188.32`
- メーカー発表PAYOUT: `97.34 / 99.13 / 101.71 / 104.50 / 108.29 / 113.06%`
- 1000円あたり: `40.69 → 48.76G`
- 赤7メガボーナス約416枚、青7BIG約260枚、LB約65枚。
- 青7BIG終了後1G目のみRT「ヒミコタイム」突入チャンス。
- RT規定G数・純増/Gは、機種名/型式/メーカー/RT名称とゲーム数・純増表記を変えて再探索したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- 設定変更時・据え置き・電源OFF→ON時のRT/CZ関連状態処理を直接説明する資料は、表記揺れ・正式型式・メーカー名と検索語を変えて当時解析/旧DB/掲示板/業界史を横断しても未確定。
- 通常ゲーム数天井、リセット短縮天井、朝一専用モード、朝一恩恵/不利、公開朝一数値は `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。
- ガックン/初期出目/液晶・フィギュア表示等の本機固有変更判別は `UNVERIFIED_AFTER_RESEARCH`。

## 今回の主要出典

取得日: 2026-09-01

### ミュージックボックス 五木ひろし
- https://web-greenbelt.jp/00003525/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/14/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/14/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/14/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/14/jps_slot_14.php
- https://w.atwiki.jp/5gouki/pages/83.html
- https://5goki.com/jps
- https://pacnk.com/slot/tools/sh_myujikkubokkusuitsukihiroshi.html

### ヒミコスタイル
- https://slothistory.com/kousin_kako05.html
- https://p-mans.blogspot.com/2008/05/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yell_slot/02/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yell_slot/02/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yell_slot/02/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yell_slot/02/b.php
- https://www.p-world.co.jp/sp/search_kisyubbs.cgi?code=5204&group_id=2999&kisyu_id=5204&mode=articles&past_file_num=&thread_id=9

## 重複防止

- 既存259件の再追加禁止。
- 260 `ミュージックボックス 五木ひろし` を再追加しない。releaseDateは2008-05-06納品開始。
- 261 `ヒミコスタイル / ヒミコスタイルA` を別名で重複登録しない。正式型式名をレコード内に保持。
- `アルティメットブレイク拳` は公式発売月2008-05で既登録。2008-06-02設置記録を理由に6月で重複登録しない。
- `ニューパルサーエボリューション` は5/25納品開始予定として処理済み。
- `キングガッパ` は2008-05月精度で処理済み。
- `犬キングX` は2008年8月導入確認済みのため5月に混入させない。
- `MAX448` は後年一覧の2008/5表記と当時グリーンべると7月納品予定が競合。5月へ即追加せず7月時点で再監査。

## resetBehavior 遡及QA

- 次対象: **`ジャックポット・トロピカルバージョン2（2006-09）` 以降**。
- resetBehavior節が既にある機種は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準261件地点。2008年5月26日までの漏れ補完として「ミュージックボックス 五木ひろし」「ヒミコスタイル」を追加済み。**
2. 2008-05-27〜31の残監査を継続する。同時に月精度候補 `ファイアーヒーローII` を最優先で具体導入/納品日まで詰める。
3. `ファイアーヒーローII` は後年複数一覧で2008年5月扱い、2008年5月付実機資料でも機種存在と主要スペックを確認済み。ただし今回の検索では具体日が未確定なので、当時アトム/業界記事/旧DB/ホール導入記録を再探索して時系列位置確定後に登録する。
4. 5月残漏れが閉じたら6月列へ進む。6月初旬候補を具体日順に並べ直し、同日他メーカー漏れを横断監査する。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
