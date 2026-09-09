更新日: 2026-09-09

## 現在地点
- recordCount: **1102**
- latestRecordAdded: **しすくえパラダイス**（ハイライツ・エンタテインメント）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-03_sisuke-paradise.md`
- chronologicalFrontier: **2017-07-03**
- frontierLatestMachine: **しすくえパラダイス — No.1102**
- schema: **resetBehavior v0.7**
- status: **2017-07-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1101「A-SLOTエイリヤンエボリューション」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1101件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN**。
- handoff指定の次未処理 **「しすくえパラダイス」** をNo.1102として登録。
- パチビー、P-WORLD、すろぱちくえすと、ちょんぼりすた、パチスロデータ、パチマガスロマガ検定情報、2017年度新台カレンダー、グリーンべると、中古実機型式資料を横断。
- 導入日2017-07-03、A+RT、設定別機械割/BIG/REG/合算、約30G/50枚、RT純増約0.4枚/G、BIG最大207枚、REG最大56枚、天井非搭載を複数照合。
- 型式 `しすくえ/HC` はパチマガスロマガ検定情報と中古実機資料で確認。検定番号は検索語・資料系統を変更して再探索しても高信頼直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- メーカーは当時業界/解析/権利表記でハイライツ・エンタテインメントが一致する一方、P-WORLDは「アイゲート」とするため `CONFLICT_MANUFACTURER_LABEL` を保持し、canonicalはハイライツ。
- resetBehaviorでは天井非搭載を固定。設定変更/据え置き/純電断時のRT・プチRT内部状態契約は十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の天井短縮・朝一モード・高確スタート・主要初当たり優遇は `NONE_CONFIRMED_AFTER_RESEARCH` / 天井関連は `NOT_APPLICABLE_NO_CEILING`。
- 当時解析は「ガックンは効かない可能性大」「リセット判別はおそらく不可」とするが、旧シリーズ挙動からの推測を含むため確定仕様にせず `POSSIBLE_NO_GAKKUN / NOT_DETERMINISTIC` として保存。

## No.1102 — しすくえパラダイス
- manufacturer: **ハイライツ・エンタテインメント**
- releaseDate: **2017-07-03**
- formalModelName: **しすくえ/HC**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / A+RT / ボーナス主体 / ボーナス後20G RT**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.2 / 98.0 / 99.4 / 101.5 / 105.6 / 110.3%**。
- BIG: **1/197.4 / 192.8 / 186.2 / 177.1 / 165.5 / 153.8**。
- REG: **BIGと同値**。
- ボーナス合算: **1/98.7 / 96.4 / 93.1 / 88.6 / 82.7 / 76.9**。
- ベース: **約30G/50枚**（設定別30.03〜30.58G）。
- RT: ボーナス後**20G**、純増**約0.4枚/G**。
- BIG **最大207枚** / REG **最大56枚**。
- 通常ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- settingChangeBehavior: 天井関連 **NOT_APPLICABLE_NO_CEILING**。RT/プチRT内部状態契約は **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 宵越しゲーム数天井なし。据え置き時RT/表示状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 純電源OFF→ON時RT/液晶状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: 設定変更専用朝一/解除モード **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: RT/プチRT状態の保持/初期化は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 天井短縮・高確スタート・朝一専用モード・初当たり優遇 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: ゲーム数天井消滅 **NOT_APPLICABLE**。RT状態契約未確認のため推定不利は記録しない。
- resetDetection: **POSSIBLE_NO_GAKKUN / NOT_DETERMINISTIC**。確定変更判別は未確認。
- numericResetData: 公開設定変更専用数値 **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。

## conflicts / missing
- manufacturerDisplayConflict: P-WORLD「アイゲート」 vs 当時業界/解析/権利表記「ハイライツ・エンタテインメント」。canonicalは後者、`CONFLICT_MANUFACTURER_LABEL`。
- certificationNumber: UNVERIFIED_AFTER_RESEARCH。
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- direct setting-change/carry-over/power-cycle RT-state contract: UNVERIFIED_AFTER_RESEARCH。
- deterministicMachineSpecificResetDetection: UNVERIFIED_AFTER_RESEARCH。

## 2017-07-03群 — OPEN
登録済み:
1. パチスロ アクエリオンEVOL — No.1097
2. パチスロ 悪魔城ドラキュラ Lords of Shadow — No.1098
3. パチスロ そらのおとしものフォルテ — No.1099
4. パチスロ 閃乱カグラ — No.1100
5. A-SLOTエイリヤンエボリューション — No.1101
6. しすくえパラダイス — No.1102

確認済み未処理候補:
- **SHAKE III SIDE-A** — 次のNo.1103候補。前回までにHAZUSEで2017-07-03導入、型式 `SHAKEIII SIDE-A／A7`、検定番号 `6S1514` を先行確認。
- **熊酒場2丁目店** — パチビー/K-Naviで2017-07-03導入を先行確認。
- 上記処理後、2017-07-03同日全メーカー横断監査を行いCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1102を再取得。
2. **1102件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN** を正本として継続。
3. 次の未処理 **「SHAKE III SIDE-A」** をNo.1103候補として性能コア + resetBehavior v0.7で処理。
4. 続いて **熊酒場2丁目店** を既存登録有無・導入日再照合後に処理。
5. 7/3群全メーカー監査後にCLOSED判定。遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1102 しすくえパラダイス
- パチビー: https://www.pachibee.jp/machines/lecture/217060003
- すろぱちくえすと: https://www.slopachi-quest.com/article/sispara/
- ちょんぼりすた: https://chonborista.com/slot/high-enter/40925/
- P-WORLD: https://www.p-world.co.jp/machine/database/8407
- パチスロデータ: https://pachislo-data.com/hienter/44473
- パチマガスロマガ 遊技機検定情報(5/22): https://cs62.cs-plaza.com/g/pachi/column/detail.php?mcl_cd=0098&mwr_cd=009&tac_cd=00039219&type=1
- 2017年度新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
- グリーンべると: https://web-greenbelt.jp/00011148/
- 中古実機型式照合: https://initialp.cart.fc2.com/ca101/2636/

### 次候補 / 同日境界
- 次候補: SHAKE III SIDE-A
- 以降: 熊酒場2丁目店
