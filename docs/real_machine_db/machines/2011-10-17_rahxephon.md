# ラーゼフォン

machineName: ラーゼフォン
aliases: RahXephon / ラーゼフォンX
manufacturer: ロデオ
formalModelName: ラーゼフォンX
approvalNumber: 1S0691
releaseDate: 2011-10-17
releaseDateStatus: CONFIRMED_BY_HAZUSE_DATABASE

generation: 5号機
systemType: A+ART / CZ / ゲーム数上乗せ+セットストック
coreStatus: PARTIAL_CORE_AFTER_DEEP_RESEARCH
resetQaStatus: PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「キングハナハナ-30」を確認して開始。
- 開始時正本は recordCount 611 / chronologicalFrontier 2011-10-10。
- repo code searchで「ラーゼフォン / RahXephon / ラーゼフォンX」を検索して既存レコードなし、想定実パス `docs/real_machine_db/machines/2011-10-17_rahxephon.md` も404を確認。
- HAZUSEは導入開始日2011-10-17、型式ラーゼフォンX、検定番号1S0691を掲載。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 99.0% |
| 3 | 101.5% |
| 4 | 104.5% |
| 5 | 108.7% |
| 6 | 114.0% |

- A-SLOT中古実機DBの精密値を採用。
- HAZUSEは 97 / 99 / 102 / 105 / 109 / 114% と整数丸めで掲載。精密値と方向性は整合するため、平均せず丸め差として保持。
confidence: ANALYSIS_DATABASE_CROSSCHECKED_WITH_ROUNDING_DIFFERENCE

## initialHitBySetting

| 設定 | BIG | REG | ART初当たり |
|---|---:|---:|---:|
| 1 | 1/394.8 | 1/789.6 | 1/374.7 |
| 2 | 1/368.2 | 1/736.4 | 1/367.5 |
| 3 | 1/381.0 | 1/762.0〜762.1 | 1/338.3 |
| 4 | 1/368.2 | 1/736.4 | 1/314.8 |
| 5 | 1/381.0 | 1/762.0〜762.1 | 1/286.6 |
| 6 | 1/344.9 | 1/689.9 | 1/269.6 |

- HAZUSEとA-SLOTで全設定を照合。REG設定3/5のみ小数第1位の丸め差。
confidence: ANALYSIS_DATABASE_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- `ラーゼフォン / ラーゼフォンX / ロデオ / 50枚 / 1000円 / ベース / コイン持ち` を組み替え、HAZUSE、P-WORLD、A-SLOT、ロデオ5号機一覧系、検索アーカイブを横断したが、比較可能な50枚ベース直接値を確定できず。

## netIncrease

- ART「飛翔RUSH」: **約+1.2枚/G**。
- 1セット **50G+α**。
confidence: DATABASE_HIGH_CROSSCHECKED

## basicPayout

- BIG: **約216枚**。
- REG: **約44枚**。
- プレミアムBIG: **約216枚 + ART確定**。
- P-WORLDとA-SLOTで一致。
confidence: DATABASE_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ART「飛翔RUSH」は1セット50G+α、約+1.2枚/G、ゲーム数上乗せ+セットストック型。
- ART中は上乗せ専用状態「ソニックコンボ」抽選あり。1回の最大上乗せ500G。
- 通常時にART突入契機となる4-TYPEミッション（CZ）を搭載。
- HAZUSE/A-SLOTではART初当たりを設定別に掲載。
- 天井: **BIG後または設定変更後は1400G、REG後は999Gで天井ART突入**（P-WORLD直接記載）。

## resetBehavior — v0.7

settingChangeBehavior: **GAME_COUNT_CEILING_RESET_CONFIRMED / INTERNAL_MODE_RELOTTERY_CONFIRMED**。P-WORLDに「設定変更後は天井までのゲーム数はリセットされるが、内部モードの移行抽選が行われる」と直接記載。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時にBIG後1400G/REG後999Gのどの起点・進捗をそのまま引き継ぐか、本機固有の直接資料を確定できず。一般則から補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみで天井進捗・内部モード・表示状態が保持/初期化されるか、本機固有資料を確定できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。P-WORLD直接記載。

ceilingAfterReset: **1400G_AFTER_SETTING_CHANGE_CONFIRMED**。P-WORLDは「BIG後or設定変更後なら1400G、REG後なら999G」と掲載。リセット専用に通常BIG後より短縮される仕様ではなく、設定変更後はBIG後と同じ1400G起点として扱う。

modeAfterReset: **INTERNAL_MODE_TRANSITION_LOTTERY_CONFIRMED / NUMERIC_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH**。設定変更時に内部モード移行抽選あり。具体的な振り分け数値は今回の探索範囲で確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確/前兆等の内部状態が設定変更でどう処理されるかを直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **CEILING_BASELINE_1400G_AFTER_SETTING_CHANGE_CONFIRMED / OTHER_RESET_ONLY_BENEFITS_NONE_CONFIRMED_AFTER_RESEARCH**。設定変更後の公開朝一特定G以内ART当選率、短縮天井、専用CZ優遇などは確認できず。

resetPenalties: **PREVIOUS_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE_CONFIRMED**。設定変更で天井までのG数がリセットされるため、前日までの天井進捗は設定変更時に失われる。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ラーゼフォン / RahXephon / ラーゼフォンX / ロデオ / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール / 天井`を組み替えたが、本機固有のガックン、出目、液晶、ランプ等による変更判別を直接確定できず。

numericResetData:
- 通常天井: BIG後 1400G / REG後 999G
- 設定変更後天井: 1400G
- 設定変更時モード振り分け: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内ART/CZ当選率: NONE_CONFIRMED_AFTER_RESEARCH
- リセット恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorConfidence: DATABASE_HIGH_FOR_GAME_COUNTER_RESET_CEILING_AND_MODE_RELOTTERY / UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_STATE_RESET_DETECTION_AND_NUMERIC_MODE_SPLIT

## conflicts

1. **機械割の表示精度**
   - A-SLOT: 97.2 / 99.0 / 101.5 / 104.5 / 108.7 / 114.0%。
   - HAZUSE: 97 / 99 / 102 / 105 / 109 / 114%。
   - 平均せず、精密値と整数丸め値の表示精度差として保持。
2. **REG設定3/5の丸め**
   - A-SLOT 1/762.0、HAZUSE 1/762.1。平均せず範囲保持。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- setting-change internal mode numeric distribution: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. HAZUSE — ラーゼフォン
   - https://hazuse.com/machine/pachislot/1S0691/
   - 導入開始日2011-10-17、メーカー、型式ラーゼフォンX、検定番号1S0691、設定別BIG/REG/ART初当たり、整数丸め機械割、ART仕様。
   - reliability: ANALYSIS_HIGH
2. P-WORLD — ラーゼフォン
   - https://www.p-world.co.jp/machine/database/6496
   - BIG約216枚、REG約44枚、ART約+1.2枚/G・1セット50G+α、天井BIG後/設定変更後1400G・REG後999G、設定変更で天井G数リセット+内部モード移行抽選。
   - reliability: DATABASE_HIGH
3. A-SLOT — ロデオ ラーゼフォン中古実機
   - https://www.a-slot.com/SHOP/rodeo39.html
   - 設定別BIG/REG/ART初当たり、精密機械割、ART約+1.2枚/G、BIG約216枚、REG約44枚。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
4. 5号機クロニクル — ロデオ5号機全機種一覧
   - https://5goki.com/rodeo
   - ロデオ5号機ラインアップ確認用。
   - reliability: RETROSPECTIVE_DATABASE
