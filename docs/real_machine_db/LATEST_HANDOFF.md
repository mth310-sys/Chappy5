更新日: 2026-09-08

## 現在地点
- recordCount: **993**
- latestRecordAdded: **A-SLOT 偽物語**（サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-07-04_a-slot-nisemonogatari.md`
- chronologicalFrontier: **2016-07-04**
- frontierLatestMachine: **A-SLOT 偽物語**（サミー）
- schema: **resetBehavior v0.7**
- status: **2016-07-04_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.992 `2016-07-04_a-slot-hokuto-no-ken-shou.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点のmainは recordCount **992** / chronologicalFrontier **2016-07-04** / `2016-07-04_GROUP_OPEN`。
- 07/04群の次の未処理としてサミー公式で同日導入確認済みの **A-SLOT 偽物語**をNo.993として追加。
- 遡及QAは `2006-03-06_be-bop.md` を再探索し、性能側PARTIALは維持したままreset QAのみ前進。

## No.993 — A-SLOT 偽物語
- manufacturer: **サミー**
- releaseDate: **2016-07-04**
- formalModelName: **A-SLOT偽物語/ZR**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / ノーマル・A+RT / 技術介入 / 4段階設定（1・2・5・6）**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 市場機械割: **98.32 / 99.98 / 104.58 / 109.70%**（設定1/2/5/6）。
- 上級打法: 一撃 **100.43 / 102.12 / 105.96 / 112.65%**。攻略条件差なので市場値と別系列。
- BIG合算: **1/227.56 / 224.44 / 210.05 / 189.41**。
- REG: **1/455.11 / 422.81 / 385.51 / 318.14**。
- ボーナス合算: **1/151.70 / 146.61 / 135.97 / 118.72**。
- 50枚ベース: 設定1代表 **約34.1G**。プチRT非考慮解析値 **32.67 / 33.16 / 33.69 / 34.28G**、プチRT込み説明は **34〜36G**で条件分離。
- 同色BIG **最大312枚** / 異色BIG **208枚** / REG **104枚**。
- 怪異リプレイ後は最大 **8GプチRT**、BIG後はRT「倖時間」**20G固定**。
- 通常時ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- ゲーム数天井非搭載のため設定変更/据え置きの天井進捗・短縮天井は **NOT_APPLICABLE**。
- AT/ART機の通常A/B・天国等のゲーム数モードも **NOT_APPLICABLE**。
- 一撃当時資料は設定変更時・純電源OFF/ON時の液晶ステージをともに **現在調査中** と記録。
- 20G RT「倖時間」および最大8GプチRT中の **設定変更 / 据え置き / 純電源OFF→ON** の内部RT保持/終了は、本機固有資料を再探索しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ガックン可能との予測記事は存在するが予測止まりのため確定変更判別に採用せず、**NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一専用モード・短縮天井・特定G以内当選率などの公開リセット恩恵は **NONE_CONFIRMED / NOT_APPLICABLE**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### data quality
- 導入日はSammy公式を最優先し、P-WORLD/K-Navi/一撃で一致。
- 性能コアはP-WORLD、一撃、K-Navi、ちょんぼりすたで複数照合。
- 市場機械割と攻略条件付き値、通常ベースとプチRT込みベースは定義を分離。
- resetBehaviorは一般的Aタイプ論から推測せず、当時資料で未確定のRT/液晶電源契約はUNVERIFIEDを維持。

## 2016-07-04群 — OPEN
処理状況:
1. **A-SLOT 北斗の拳 将** — No.992登録済み。
2. **A-SLOT 偽物語** — No.993、本回登録済み。
3. **ファンキージャグラー** — 未処理、次。
- ファンキージャグラー処理後、ALL7/HAZUSE/P-WORLD/K-Navi/メーカー別資料で07/04群を全メーカー横断監査し、追加未登録機がなければCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-06_be-bop.md**
- retroQaNextInspection: **2006-03-27_kengou-musashi.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**

### BE-BOP QA結果
- 性能側の既存 `PARTIAL` は維持。
- reset QA: **PARTIAL_RESEARCH_EXHAUSTED**（2026-09-08更新）。
- ユニバーサル公式でBIG後RT「BE-BOP TIME」は **100Gまたは次回ボーナスまで**、100G消化で約60枚増加を再確認。
- 後年5号機クロニクルのRT **50G** 表記と公式100Gが競合するため、一次資料100Gをcanonicalとし50G説をCONFLICTとして追加。
- 設定変更/据え置き/純電断時のRT残G・内部状態、本機固有ガックン等は、検索語・資料系統を変えた再探索でも直接資料を追加固定できず **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.993を再取得。
2. **2016-07-04群OPEN → 北電子「ファンキージャグラー」**を重複確認後に次レコードとして処理。
3. 性能コア＋resetBehavior v0.7を同時収集。特に朝一ガックン、設定変更/据え置き/純電断、ボーナス後BGM等を「設定変更判別」と「単なる設定示唆」に分離する。
4. その後07/04群を全メーカー横断監査し、漏れがなければCLOSEDとして07/05以降へ進む。
5. 遡及QAは `2006-03-27_kengou-musashi.md` から継続。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/RT/ガックン等へ検索語と資料系統を変えて十分再探索後のみ確定。
7. 競合は平均せずCONFLICT。性能側COMPLETE_CORE/PARTIALとreset QA状態を混同しない。

## 主要出典 — 取得日 2026-09-08
### No.993 A-SLOT 偽物語
- Sammy公式マイスロ: https://new.sammy.co.jp/japanese/myslot/news/
- P-WORLD: https://www.p-world.co.jp/machine/database/8064
- K-Navi: https://p-kn.com/slot/2523/
- 一撃 機種概要: https://1geki.jp/slot/s_aslot_nisemono/
- 一撃 ボーナス確率: https://1geki.jp/slot/s_aslot_nisemono/1/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_aslot_nisemono/3/
- 一撃 RT概要: https://1geki.jp/slot/s_aslot_nisemono/81/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/20560/
- 愛品館実機情報: https://www.aihin.co.jp/new/news-1043582/

### BE-BOP QA
- ユニバーサル公式: https://www.universal-777.com/product/slot/be_bop/
- 5号機クロニクル: https://5goki.com/universal
- ALL7 2006年3月: https://www.all7.jp/plans/index/2006/03
