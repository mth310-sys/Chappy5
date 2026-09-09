更新日: 2026-09-09

## 現在地点
- recordCount: **1112**
- latestRecordAdded: **トラッドサンダーブラック**（岡崎産業）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-18_trad-thunder-black.md`
- chronologicalFrontier: **2017-07-18**
- frontierLatestMachine: **トラッドサンダーブラック — No.1112**
- schema: **resetBehavior v0.7**
- status: **2017-07-18_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1111「グレートキングハナハナ-30」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1111件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN**。
- handoff指定の次未処理 **「トラッドサンダーブラック」** をNo.1112として登録。
- performance core + resetBehavior v0.7を同時収集。
- 7/18群は複数の年次導入一覧・当時導入カレンダーを横断。現時点の全候補7機が登録済みとなったため `2017-07-18_GROUP_CLOSED_FOR_CURRENT_RESEARCH` と判定。

## No.1112 — トラッドサンダーブラック
- manufacturer: **岡崎産業**
- releaseDate canonical: **2017-07-18**
- secondary exact-date source: **2017-07-17 — CONFLICT_SECONDARY_RELEASE_DATE**
- formalModelName: **トラッドサンダーブラック／T1**
- certificationNumber: **7S0197**
- generation/system: **5号機 / ノーマルA / 完全告知**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.5 / 99.0 / 101.0 / 104.3 / 107.1 / 111.5%**。
- BIG: **1/293.88 / 1/287.44 / 1/277.69 / 1/265.33 / 1/254.02 / 1/253.03**。
- REG: **1/383.25 / 1/350.46 / 1/327.68 / 1/291.27 / 1/276.52 / 1/227.56**。
- 合算: **1/166.34 / 1/157.92 / 1/150.31 / 1/138.85 / 1/132.40 / 1/119.81**。
- ベース: **約35G/50枚**。
- BIG最大 **312枚**、REG **104枚**。
- AT/ART純増: **NOT_APPLICABLE_NORMAL_A**。
- ゲーム数天井: **NO_GAME_COUNT_CEILING**。

### resetBehavior v0.7
- settingChange: 朝一高確・専用モード・初当たり優遇・短縮天井等の本機固有変更恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。一般的ノーマル機挙動から推測補完しない。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: 高確/低確/CZ前兆等は **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_A_GAMEPLAY**。成立済みボーナス等の低レベル内部状態は直接契約を固定できずUNVERIFIED。
- carryOver: 据え置き時の成立済みボーナス/告知状態/ボーナス後履歴等の本機固有直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycle: 同項目の純電源OFF→ON直接契約も **UNVERIFIED_AFTER_RESEARCH**。
- resetBenefits / resetPenalties: 設定変更専用の公開恩恵・不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有の確定ガックン/ランプ/初期出目等は十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。通常のREG確率・小役・BIG中ハズレは設定推測材料であって変更判別には転用しない。
- numericResetData: reset-specificな公開朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflict / definition QA
- exact release date: **2017-07-18 vs 2017-07-17**。すろぱちくえすと/2-9伝説/年次一覧は7/18、HAZUSE/別新台カレンダーは7/17。7/18をchronological canonical、7/17を二次競合として保持。
- BIG時の特別BGM条件（ボーナス後50G以内、100G以内ゾロ目等）は演出条件であり天井/解除ゾーンではない。

## 2017-07-18群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
1. パチスロ 聖闘士星矢 海皇覚醒 — No.1106
2. パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～ — No.1107
3. パチスロ 結城友奈は勇者である — No.1108
4. ラグナロクサーガ — No.1109
5. ワンバーワン-30 — No.1110
6. グレートキングハナハナ-30 — No.1111
7. トラッドサンダーブラック — No.1112

### 群監査
- すろぱちくえすと2017年導入日順一覧は7/18群を上記7機として列挙。
- 2-9伝説導入日一覧も7/18群に主要同日機を列挙。
- ALL7の当時導入予定一覧も聖闘士星矢/ガールフレンド/結城友奈/ラグナロクサーガ/ワンバーワン等を7/18として確認。
- HAZUSEはトラッドサンダーブラックを7/17、一部別資料はグレートキングハナハナ-30を7/24とするため、個別レコードにexact-date conflictを保持したまま群を閉じる。

## 次境界の先行監査
- 7/18群の後は資料間で導入日の揺れがある。
- **バイオハザード リベレーションズ**は、モゲスロが2017-07-24、すろぱちくえすと/別カレンダー系が2017-07-31とするため、次の未処理先行候補として最優先で導入日CONFLICTを再監査する。
- **グレートキングハナハナ-30**の7/24表記はNo.1111で既処理・競合保存済みなので重複追加しない。
- 7/31候補として **政宗2 / 燃えよ！功夫淑女ドラゴン** も確認。ただし政宗2はHAZUSEに8/7表記もあり、個別処理時に導入日を再固定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_the-king-of-fighters.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-06_churahime-sun.md`。
- 今回は新規No.1112と7/18群監査を優先し、遡及QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1112を再取得。
2. **1112件 / chronologicalFrontier 2017-07-18 / 7/18群CLOSED** を正本として継続。
3. 次の未処理 **「バイオハザード リベレーションズ」** をNo.1113候補として処理し、まず **2017-07-24 vs 2017-07-31** の導入日競合を公式/業界/HAZUSE/P-WORLD/当時解析/年次カレンダーで再固定する。
4. 型式・検定番号・性能コア・resetBehavior v0.7を同時収集。設定変更/据え置き/純電断、天井・モード・状態、朝一恩恵/不利、変更判別、公開朝一数値を欠損前に再探索する。
5. その後 **政宗2 / 燃えよ！功夫淑女ドラゴン** を導入日競合込みで監査し、7/24〜7/31境界を漏れなく確定する。
6. 遡及QAは `2006-06_churahime-sun.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1112 トラッドサンダーブラック
- HAZUSE 基本/天井・設定判別: https://hazuse.com/machine/pachislot/7S0197/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/7S0197/genre/201/
- HAZUSE 初打講座: https://hazuse.com/machine/pachislot/7S0197/genre/203/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/7S0197/genre/208/
- すろぱちくえすと: https://www.slopachi-quest.com/article/trad-thunder-black/
- 2-9伝説: https://29den.com/tradthunderblack/
- ちょんぼりすた: https://chonborista.com/slot/okazaki-slot/43051/
- pacnk: https://pacnk.com/slot/tools/sh_toraddosandaburakku.html
- すろぱちくえすと2017年導入日順一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 2-9伝説 新台導入日一覧: https://29den.com/newslot/
- ALL7 2017年7月導入予定一覧: https://www.all7.jp/plans/index/2017/07/10
- 新台スロット2017年度カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
- ぱちんこドキュメント（岡崎産業公式ページ公開記録）: https://pachinkolist.com/archives/51416747.html
- 岡崎産業当時公式ページURL（保存記録）: http://www.okazakisangyo.com/slot/tradthunderblack/index.html
- ホームスロット: https://home-slot.net/SHOP/s-okazaki14.html

### 次境界監査
- モゲスロ2017年導入カレンダー: https://moge-site.com/new-slot2017
- すろぱちくえすと2017年導入日順一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 新台スロット2017年度カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
