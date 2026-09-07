# パチスロ ベヨネッタ

machineName: パチスロ ベヨネッタ
manufacturer: Sammy
releaseDate: 2015-10-05
releaseDatePrecision: exact_hall_start_day_multi_source
generation: 5号機
systemType: AT / 疑似ボーナス・バトル連鎖型
formalModelName: ベヨネッタZF
inspectionNumber: 5S0446
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式名 **ベヨネッタZF**、検定番号 **5S0446**、導入開始日 **2015-10-05** を確認。
- K-Navi、パチビー、複数解析でもホール導入開始 **2015-10-05** が一致。
- manufacturerはSammy。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_DATE / INDUSTRY_DATABASE_FOR_MODEL_ID

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.6% |
| 3 | 100.0% |
| 4 | 104.3% |
| 5 | 108.5% |
| 6 | 114.5% |
- ちょんぼりすた、期待値見える化等で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | 疑似ボーナス/AT初当たり |
|---:|---:|
| 1 | 1/289.0 |
| 2 | 1/282.3 |
| 3 | 1/274.4 |
| 4 | 1/240.8 |
| 5 | 1/214.9 |
| 6 | 1/179.9 |
- HAZUSEの精密値をcanonicalとし、複数解析の丸め値 1/289 / 1/282 / 1/274 / 1/241 / 1/215 / 1/180 と整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約44G/50枚**。
- HAZUSE、ちょんぼりすた、すろぱちくえすとで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- 疑似ボーナス/AT: **約2.8枚/G**。
- パチビー、ちょんぼりすた、すろぱちくえすと等で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 赤7BIG: **20G+α / 平均約340枚**。
- 青7BIG: **80G+α / 平均約560枚**。バトル勝利時は711枚OVERのムーンライトダンスへ。
- REG: **12Gのクライマックスバトル**から開始し、敗北まで継続。ループ率50～95%とする解析あり。
- ボーナス振り分け目安: 赤7約42% / 青7約18% / REG約40%。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_BIG / ANALYSIS_HIGH_FOR_REG_STRUCTURE

## modeSpecificMinimumData
- 通常時天井は固定ゲーム数ではなく **リプレイ222回成立**。到達後、大チャンス目を経て疑似ボーナス当選。
- ちょんぼりすたではリプレイ約1/7.2から **約1600G相当** と説明。
- 別当時資料には **平均1320G** 表記があるため、G数換算は固定値として扱わず `CONFLICT_OR_DEFINITION_DIFFERENCE`。canonical ceiling conditionは「リプレイ222回」。
- 通常時にはバトル目の内部状態（低確 / 高確準備 / 高確）が存在。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井用リプレイ回数をリセット**。
- **内部モードを再抽選**。
- 液晶ステージについては当時解析で「引き継ぐ」とされ、通常ステージ以外なら発展前ステージへ復帰する注記あり。
- 設定変更時の内部モード具体振り分けは、機種名/型式/Sammy/朝一/リセット/設定変更/モード振り分け等で再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_BASIC_RESET_CONTRACT

### carryOverBehavior
- 設定変更なし据え置きでは、公開された設定変更 vs 電源ON/OFF比較から、**天井進捗・内部モードは引継ぎ側**として扱う。
- 純電断と据え置きを自動同義化せず、直接確認できた電源ON/OFF契約を根拠に運用上のcarry-overを記録。
- confidence: ANALYSIS_HIGH_FOR_OPERATIONAL_CARRYOVER

### powerCycleBehavior
- **電源OFF→ONのみでは天井を引き継ぐ**。
- **内部モードも引き継ぐ**。
- ステージは引継ぎ。通常ステージ以外なら発展前ステージへ復帰するとの注記あり。
- confidence: ANALYSIS_HIGH_SINGLE_DIRECT_COMPARISON

### gameCounterReset
- 設定変更: **RESET（リプレイ222回天井カウント）**。
- 据え置き: **CARRY_OVER**。
- 純電源OFF→ON: **CARRY_OVER**。

### ceilingAfterReset
- 設定変更後も天井条件は **リプレイ222回成立**。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- G数換算値はリプレイ成立率に依存するため、固定G数短縮として扱わない。

### modeAfterReset
- 設定変更: **内部モード再抽選**。
- 純電源OFF→ON: **内部モード引継ぎ**。
- 朝一専用モード・リセット専用モードの存在、具体振り分け: **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset
- 通常時には低確 / 高確準備 / 高確のバトル目内部状態が存在することは確認。
- ただし「内部モード」と「内部状態」を同一概念として流用せず、**設定変更時の低確/高確系状態の具体的再抽選契約はUNVERIFIED_AFTER_RESEARCH**。
- 純電断時も状態単独の直接契約は **UNVERIFIED_AFTER_RESEARCH_FOR_STATE_ONLY**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更で内部モード再抽選は確認できるが、通常より有利な専用振り分け・短縮天井などの数値的恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更により前日のリプレイ222回天井進捗が消失するため、前日ハマり状況次第では宵越し価値を失う。
- その他の設定変更専用不利数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 前日天井進捗と当日挙動を用いた宵越し推測は可能だが、天井がリプレイ回数基準のためデータ表示G数だけでは厳密判別しにくい。
- 本機固有のリールガックン確定契約は「ベヨネッタ/ベヨネッタZF/Sammy + ガックン/朝一/設定変更/据え置き/電源ON OFF」等で再探索したが固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- ステージは設定変更でも引継ぎとする解析があるため、朝一ステージ単独を変更判別材料として採用しない。

### numericResetData
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一特定G数以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
1. `CEILING_GAME_EQUIVALENT_DIFFERENCE`
   - canonical condition: **リプレイ222回成立**。
   - ちょんぼりすた: 約1600G相当（リプレイ約1/7.2換算）。
   - 別当時資料: 平均1320G表記。
   - 天井そのものは回数条件で一致するため、G数換算値を平均しない。

## missingFields
- 設定変更時の内部モード具体振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の低確/高確系内部状態初期振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の内部状態単独契約: `UNVERIFIED_AFTER_RESEARCH_FOR_STATE_ONLY`。
- 本機固有ガックン確定契約: `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット専用短縮天井/公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## boundaryAudit
- 2015-10-05群のNo.917ルパン三世ロイヤルロードに続く未処理候補として処理。
- 同日群には **Zゴールドインフィニティ / サイレントヒル / クジラッキー** が残るため **2015-10-05_GROUP_OPEN** を維持。

## sources — retrieved 2026-09-08
- HAZUSE 基本/型式/検定: https://hazuse.com/machine/pachislot/5S0446/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/5S0446/genre/201/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/5S0446/genre/209/
- K-Navi: https://p-kn.com/slot/2339/
- パチビー: https://www.pachibee.jp/movies/index/12082
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/11474/
- すろぱちくえすと: https://www.slopachi-quest.com/article/beyonetta-tenjou/
- 期待値見える化: https://slotjin.com/zone/bayonetta/
- パチマガスロマガ公式: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/146/l.php
- 当時リセット/天井補助資料: https://ameblo.jp/urametalkids/entry-12080442233.html

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelAndInspection: INDUSTRY_DATABASE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeilingCondition: ANALYSIS_HIGH_MULTI_SOURCE
- ceilingGameEquivalent: CONFLICT_OR_DEFINITION_DIFFERENCE
- settingChangeBehavior: ANALYSIS_HIGH
- carryOverBehavior: ANALYSIS_HIGH
- purePowerCycleBehavior: ANALYSIS_HIGH_SINGLE_DIRECT_COMPARISON
- resetNumericData: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: UNVERIFIED_FOR_GAKKUN
