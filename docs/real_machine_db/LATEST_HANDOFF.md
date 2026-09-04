# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **602**
- latestMachineAdded: **マジカルスロット 魔法少女隊アルス**（藤商事 / 2011-09-05）
- latestRecord: `docs/real_machine_db/machines/2011-09-05_magical-slot-maho-shojo-tai-ars.md`
- chronologicalFrontier: **2011-09-05**
- frontierLatestExactDateMachine: **マジカルスロット 魔法少女隊アルス**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — マジカルスロット 魔法少女隊アルス

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコード「夢夢ワールドDXII」を再取得して開始。
- INDEXは初期19件表示のまま更新が古いため、README規定どおり新しいLATEST_HANDOFFを優先。開始時正本は recordCount **601** / chronologicalFrontier **2011-09-05**。
- repo検索で「魔法少女隊アルス」未登録を確認し602件目として追加。
- 導入日はパチビーで**2011-09-05**。藤商事公式製品ページ現存、当時グリーンべるとは9月上旬納品予定で整合。
- 型式 **マホウショウジョタイアルスFSB**。検定番号は検索語・資料系統を変えても今回確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

- 5号機 A+ART / ナビ回数管理ART。
- 機械割: **97.5 / 99.0 / 100.6 / 103.9 / 107.4 / 113.1%**。パチマガスロマガ・pacnk一致。
- BIG: **1/372.4 / 370.3 / 368.2 / 366.1 / 364.1 / 362.1**。
- REG: **1/537.2 / 528.5 / 520.1 / 512.0 / 504.1 / 496.5**。
- ボーナス合算: **1/219.9 / 217.7 / 215.6 / 213.5 / 211.4 / 209.4**。
- ART単独初当り設定別は直接公開値を確定できず、逆算しない。
- 50枚ベース: **約30G/50枚**。後年機種資料の直接値で、国内当時解析の直接ベース値は未回収のため `ANALYSIS_SINGLE_RETROSPECTIVE`。
- BIG約**200枚**、REG約**46枚**。
- ART「アルスタイム」: **9枚役ナビ10回+α / 約+1.4枚/G**。P-WORLDでは平均継続約50G。
- 天井: **ART間1500G → 準備状態経由でART**。

### resetBehavior v0.7

- 後年解析整理資料に**設定変更時の内部状態振り分け**があり、設定変更で低確/高確/超高確を再抽選することを確認。
- 設定変更時内部状態（低確/高確/超高確）:
  - 設定1: **75.6 / 14.7 / 9.77%**
  - 設定2: **73.6 / 15.6 / 10.7%**
  - 設定3: **70.7 / 17.6 / 11.7%**
  - 設定4: **63.9 / 21.5 / 14.7%**
  - 設定5: **56.1 / 24.4 / 19.5%**
  - 設定6: **41.4 / 29.3 / 29.3%**
- `stateAfterReset = RESELECT_CONFIRMED_WITH_NUMERIC_DATA`。
- 通常天井はART間1500Gだが、**設定変更時に天井ゲーム数がCLEAR/RETAINのどちらか**は本機固有の直接資料を回収できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の天井/宝玉/内部状態/ARTストック引継ぎ、単純電源OFF→ON、設定変更時の宝玉・ARTストック処理、ガックン等の変更判別も、表記揺れ・型式・メーカー・朝一/設定変更/リセット/据え置き/宵越し/電源OFF ON/天井短縮/ガックンへ検索語を変え、公式・当時解析・古いDB・後年資料を横断した後も直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井・朝一特定G以内ART当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。

### CONFLICT

- ART継続率の中間段階はpacnkが **5/50/65/70/80/90%**、後年機種資料が **5/50/66/75/80/90%**。最高90%と段階制は一致するため、中間段階のみ `CONFLICT_ROUNDING_OR_SOURCE_DEFINITION`。

## 2011-09-05同日群 / 次の境界

- 同日群はまだ最終クローズしていない。未来少年コナン、探偵物語TURBO、夢夢ワールドDXII、魔法少女隊アルスは登録済みなので重複追加しない。
- HAZUSE新台カレンダーには2011年9月の次の具体日として **09-09 / 09-11 / 09-12 / 09-16 / 09-20 / 09-26 / 09-30** が存在する。
- **次回は2011-09-05同日群の残存監査を完了させ、未登録がなければ09-09のパチスロ対象機を特定して最古未処理機へ進む。**
- 日付カレンダーはパチンコも混在するため、日付だけでパチスロと決めず各機種ページ/業界資料で区分・導入日を再確認する。

## 主要出典 — 魔法少女隊アルス（取得日 2026-09-04）

- 藤商事公式: `https://www.fujimarukun.co.jp/products/alice/`
- グリーンべると: `https://web-greenbelt.jp/00002173/`
- パチビー: `https://www.pachibee.jp/machines/index/211070008`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6446`
- パチマガスロマガ基本仕様: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/11/a.php`
- パチマガスロマガ確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/11/h.php`
- パチマガスロマガ機種目次: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/11/fuji_slot_11.php`
- pacnk: `https://pacnk.com/slot/2011/alice/top.php`
- 中一商事: `https://www.nakaiti.com/html/sFujisho001.html`
- 樂都後年機種資料PDF: `https://slotto.com.tw/data/attachment/product/202306/gliqzceebk.pdf`
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`

## 遡及resetBehavior QA継続地点

- **小野真弓のかわいい日本昔話 (`2006-11_ono-mayumi-kawaii-nihon-mukashibanashi.md`) までresetBehavior v0.7補完済み**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みで重複更新しない。
- tree実パス順で次の候補は **`docs/real_machine_db/machines/2006-11_rocky-balboa-g.md`**。直接fetchしてresetBehavior欠損有無を確認する。
- その後 `2006-11_thunder-v-special.md`（月のみ別path）の重複/別レコード性とresetBehavior有無を確認する。

## 本線の次回再開地点

1. **recordCount 602 / chronologicalFrontier 2011-09-05**から開始。
2. 未来少年コナン、探偵物語TURBO、夢夢ワールドDXII、魔法少女隊アルスを重複追加しない。
3. **2011-09-05同日群を最終監査**。未登録がなければHAZUSE等で09-09対象機を特定する。
4. 最古の未登録パチスロ機を性能コア＋resetBehavior v0.7で603件目として処理。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを組み替えて再探索する。
6. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。
