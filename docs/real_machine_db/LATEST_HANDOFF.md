更新日: 2026-09-09

## 現在地点
- recordCount: **1039**
- latestRecordAdded: **パチスロZETMAN**（EXCITE / エキサイト）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-01-10_zetman.md`
- chronologicalFrontier: **2017-01-10**
- frontierLatestMachine: **パチスロZETMAN — No.1039**
- schema: **resetBehavior v0.7**
- status: **2017-01-09_TO_10_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2017-01-11_TO_2017-01-15_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2017-01-16_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1038実レコードを再取得して開始。
- main正本は **1038件 / chronologicalFrontier 2017-01-10 / 1/09〜10群OPEN**。旧INDEXの19件表示は進捗正本にせず、README規定どおりより新しい `LATEST_HANDOFF.md` と実レコードを優先した。
- handoff指定の次未処理 **EXCITE「パチスロZETMAN」** をNo.1039として登録。
- 2017-01-10同日群を再監査。2-9伝説の当時系導入カレンダーは同日機を **モンスターハンター狂竜戦線 / シスタークエスト4〜時の魔術師と悠久の姉妹〜 / ZETMAN** の3機種として列挙し、3機種とも登録済み。追加未処理を固定できなかったため **2017-01-09_TO_10_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 同カレンダーは次の確定導入日を **2017-01-16「エウレカセブンAO」** としており、検索語・資料系統変更後も1/11〜1/15の全国導入本線未登録機を固定できなかったため **2017-01-11_TO_2017-01-15_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## No.1039 — パチスロZETMAN
- manufacturer: **EXCITE（エキサイト / ニューギングループ）**
- releaseDate canonical: **2017-01-10**
- industry delivery schedule: **2017-01-09納品開始予定**（グリーンべると2016-11-17）
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_AND_PAYOUT_CONFLICT**

### performanceCore
- 機械割: **97.8 / 99.4 / 101.1〜101.4 / 104.0 / 106.6 / 111.2%**。設定3のみ101.1/101.4をCONFLICT保持。
- ボーナス合算: **1/337.8 / 324.4 / 312.1 / 300.6 / 290.0 / 271.9**。
- ART初当たり: **1/289.9 / 275.7 / 260.6 / 239.0 / 218.1 / 191.2**。
- CZ初当たり: **1/141.1 / 133.2 / 125.1 / 113.0 / 105.1 / 97.3**。
- baseGamesPer50: **約31.9G/50枚**。
- ART「ZET RUSH」純増: **1.46〜約1.5枚/G**（精密値/丸め値）。
- ZET BONUS / ALPHAS BONUS: **各156枚**。
- 覚醒BONUS: **約18枚、全設定共通約1/2621（業界表記約1/2600）**、成立時ART確定。
- ART: **初期40G以上**、解析では40〜300G、ゲーム数上乗せ型。
- 通常天井: **ボーナス間1280GでART**。途中ARTを挟んでもボーナス間として進行。

### resetBehavior v0.7
- settingChangeBehavior: 当時朝一資料が天井を「おそらくリセット」としつつ「リセット挙動に関する情報は今のところ出ていません」と明記。後続資料を再探索しても本機固有の直接契約を固定できず、**UNVERIFIED_AFTER_RESEARCH**。推測でRESET確定にしていない。
- powerCycleBehavior: **ボーナス間1280G天井進捗CARRYOVER**を当時解析1系統が直接記述。内部状態/RT/ステージは **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 据え置き独立比較表は固定できず **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH**。
- gameCounterReset: 設定変更はUNVERIFIED、純電源OFF→ONはCARRYOVER。
- ceilingAfterReset: リセット専用固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 朝一専用モード/設定変更モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: 設定変更時高確/状態再抽選の直接数値は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 公開された短縮天井/高確スタート率/CZ優遇/特定G以内当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 朝一ステージは当時資料でも調査中。本機固有の確定ガックン/初期出目/ランプ契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### data quality
- 導入日: ちょんぼりすた、期待値見える化、2017新台カレンダーで2017-01-10一致。グリーンべるとの2017-01-09は「納品開始予定」なので導入日CONFLICTにはせず別フィールドで保持。
- 性能コア: グリーンべると、P-WORLD、ちょんぼりすた、期待値見える化、すろぱちくえすとを横断。
- 設定3機械割: **101.1%（ちょんぼりすた） vs 101.4%（期待値見える化/すろぱちくえすと）** を `CONFLICT_SETTING3_PAYOUT_101_1_VS_101_4` として保持。
- resetBehavior: 当時資料が未解明であること自体を品質情報として保持し、一般的な5.5号機A+ART挙動を転記していない。
- 正式型式名/検定番号: 「ZETMAN/ゼットマン/パチスロZETMAN」「EXCITE/エキサイト/ニューギン」「型式/検定/6S」を組み替えて再探索したが固定できずUNVERIFIED。

## 境界監査
- **2017-01-09_TO_10_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2-9伝説の2017-01-10列は **モンスターハンター狂竜戦線 / シスタークエスト / ZETMAN** の3機種。全て登録済み。
- **2017-01-11_TO_2017-01-15_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- 次の強い日付境界は **2017-01-16**。
- 2017-01-16強候補: **サミー「パチスロ エウレカセブンAO」**。2-9伝説は同日導入約25,000台として列挙。次回、公式/業界/当時解析で導入日・性能・resetBehaviorを固定する。
- chronologicalFrontier: **2017-01-10**（次機種登録後に1/16へ前進予定）。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1039を再取得。
2. **1039件 / chronologicalFrontier 2017-01-10 / 1/09〜10群CLOSED / 1/11〜15境界CLOSED / 1/16群OPEN** を正本として継続。
3. 次の未処理機種は **サミー「パチスロ エウレカセブンAO」** をNo.1040候補として処理。
4. 性能コア＋resetBehavior v0.7を同時収集。天井、設定変更/据え置き/純電断、状態、朝一数値、ガックン等を検索語・資料系統を変えて再探索する。
5. エウレカAO登録後、2017-01-16群を全メーカー横断監査。未登録がなければCLOSED。
6. その後1/17〜1/29境界を監査し、次の既知大群 **2017-01-30**（スターオーシャン4 / ソウルキャリバー / オアシスデイズ / ニューペガサスREVIVAL等）へ前進する。
7. 既登録のモンスターハンター狂竜戦線、弱虫ペダル、シスタークエスト、ZETMANを重複追加しない。

## 主要出典 — 取得日 2026-09-09
### No.1039 ZETMAN
- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/8830/greenbelt
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/8224
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/28706/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/zetman/
- すろぱちくえすと機種まとめ: https://www.slopachi-quest.com/kisyubetsu/zetman/
- すろぱちくえすと天井: https://www.slopachi-quest.com/article/zetman/
- 2017新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
- 2-9伝説導入カレンダー: https://29den.com/newslot/

### 次回候補 エウレカセブンAO
- 2-9伝説導入カレンダー: https://29den.com/newslot/
