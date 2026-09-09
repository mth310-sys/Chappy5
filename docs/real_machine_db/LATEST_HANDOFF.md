更新日: 2026-09-09

## 現在地点
- recordCount: **1103**
- latestRecordAdded: **SHAKE III SIDE-A**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-03_shake3-side-a.md`
- chronologicalFrontier: **2017-07-03**
- frontierLatestMachine: **SHAKE III SIDE-A — No.1103**
- schema: **resetBehavior v0.7**
- status: **2017-07-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1102「しすくえパラダイス」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1102件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN**。
- handoff指定の次未処理 **「SHAKE III SIDE-A」** をNo.1103として登録。
- HAZUSE、すろぱちくえすと、ちょんぼりすた、パチスロデータ、K-Navi、すろかい、P-WORLD、中古実機資料を横断。
- 導入日2017-07-03、大都技研、A+RT、型式 `SHAKEIII SIDE-A／A7`、検定番号 `6S1514` を固定。
- 機械割98.6〜111.2%、SIDE-A/SIDE-B確率、合算、約32G/50枚、SIDE-A約308枚、SIDE-B約200枚、30G RTを複数照合。
- RT純増は主要当時解析では「調査中」だが中古実機資料に約0.1枚/G（現状維持程度）があるため、単一補助資料値として `ANALYSIS_SINGLE` を明記して保持。
- 天井は非搭載。2016年版「SHAKE III」の設定変更時天井/CZリセット記事は別AT機のためSIDE-Aへ転用しなかった。
- SIDE-A固有の設定変更/据え置き/純電断時RT・液晶・LIVEチケット/フリーパス状態契約は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の短縮天井・朝一モード・高確スタート・ボーナス初当たり優遇は `NONE_CONFIRMED_AFTER_RESEARCH` / 天井関連は `NOT_APPLICABLE_NO_CEILING`。
- 当時解析の「ガックン判別はおそらく不可」は断定ではないため `POSSIBLE_NO_GAKKUN / NOT_DETERMINISTIC` として保存。

## No.1103 — SHAKE III SIDE-A
- manufacturer: **大都技研**
- releaseDate: **2017-07-03**
- formalModelName: **SHAKEIII SIDE-A／A7**
- certificationNumber: **6S1514**
- generation/system: **5号機 / A+RT / 2種BIG + 30G RT**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.6 / 100.5 / 102.7 / 105.2 / 107.5 / 111.2%**（HAZUSEは完全攻略条件と明記）。
- BIG SIDE-A: **1/370.3 / 364.1 / 358.1 / 346.8 / 326.1 / 316.6**。
- BIG SIDE-B: **1/425.6 / 394.8 / 376.6 / 360.1 / 356.2 / 318.1**。
- ボーナス合算: **1/198.0 / 189.4 / 183.6 / 176.6〜176.7 / 170.2 / 158.7**。
- ベース: canonical **約32G/50枚**。別解析に約32〜35G/50枚レンジあり。
- RT: **30G**、純増 **約0.1枚/G**は単一補助資料値。ボーナス後RT突入率約60%、通常時サボハニ揃いも契機。
- SIDE-A **平均約308枚** / SIDE-B **平均約200枚** / REG非搭載。
- 通常ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- settingChangeBehavior: 天井関連 **NOT_APPLICABLE_NO_CEILING**。RT/液晶/チケット状態契約は **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 宵越しゲーム数天井なし。据え置き時RT/液晶/チケット状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 純電源OFF→ON時RT/液晶/チケット状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。フリーパス非引継ぎ予想記事は推測のためcanonical不採用。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: 設定変更専用朝一/解除/RT優遇モード **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: RT状態の設定変更/据え置き/純電断契約 **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 天井短縮・高確スタート・朝一専用モード・ボーナス初当たり優遇 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: ゲーム数天井消滅 **NOT_APPLICABLE**。状態契約不明のため推定不利は記録しない。
- resetDetection: **POSSIBLE_NO_GAKKUN / NOT_DETERMINISTIC**。確定変更判別は未確認。
- numericResetData: 公開設定変更専用数値 **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。

## conflicts / missing
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- payoutDefinitionNote: 98.6〜111.2%はHAZUSEが完全攻略条件と明示。
- baseGamesPer50Display: 約32G vs 約32〜35Gは掲載粒度差として保持。
- rtNetIncreaseEvidence: 当時主要解析「調査中」 vs 中古実機資料約0.1枚/G。平均せず資料時点/信頼度を分離。
- direct setting-change/carry-over/power-cycle RT-state contract: UNVERIFIED_AFTER_RESEARCH。
- direct LIVE-ticket/free-pass persistence contract: UNVERIFIED_AFTER_RESEARCH。
- deterministicMachineSpecificResetDetection: UNVERIFIED_AFTER_RESEARCH。

## 2017-07-03群 — OPEN
登録済み:
1. パチスロ アクエリオンEVOL — No.1097
2. パチスロ 悪魔城ドラキュラ Lords of Shadow — No.1098
3. パチスロ そらのおとしものフォルテ — No.1099
4. パチスロ 閃乱カグラ — No.1100
5. A-SLOTエイリヤンエボリューション — No.1101
6. しすくえパラダイス — No.1102
7. SHAKE III SIDE-A — No.1103

確認済み未処理候補:
- **熊酒場2丁目店** — 次のNo.1104候補。パチビー/K-Navi等で2017-07-03導入を先行確認済み。
- 上記処理後、2017-07-03同日全メーカー横断監査を行いCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1103を再取得。
2. **1103件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN** を正本として継続。
3. 次の未処理 **「熊酒場2丁目店」** をNo.1104候補として性能コア + resetBehavior v0.7で処理。
4. その後、2017-07-03同日全メーカー横断監査を行いCLOSED可否を判定。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1103 SHAKE III SIDE-A
- HAZUSE: https://hazuse.com/machine/pachislot/6S1514/
- HAZUSE 初打講座: https://hazuse.com/machine/pachislot/6S1514/genre/203/
- すろぱちくえすと: https://www.slopachi-quest.com/article/shake3_sidea/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/40713/
- パチスロデータ: https://pachislo-data.com/daito/48215
- K-Navi: https://p-kn.com/slot/2831/
- すろかい: https://slotkaiseki.hatenablog.com/entry/shakesidea
- P-WORLD: https://www.p-world.co.jp/machine/database/8431
- 中古実機資料: https://www.pachislowasshoi.jp/SHOP/daito-slot0037.html

### 次候補 / 同日境界
- 次候補: 熊酒場2丁目店
- 以降: 2017-07-03群全メーカー横断監査
