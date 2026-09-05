# ビガースペシャル

machineName: ビガースペシャル
alternateName: ビガーSpecial / Viger Special
manufacturer: エマ
releaseDate: 2012-11-19
releaseDatePrecision: exact_day
releaseDateNotes: HAZUSEが2012-11-19導入開始日として掲載。P-WORLDでも同一機種・メーカー・基本仕様を確認。時系列キーはHAZUSEの具体日を採用。
generation: 5号機
systemType: A+ART / ボーナス+次回BIGまで継続する無限ART / セットストック型
modelName: ビガーR
approvalNumber: 2S0863
recordStatus: PARTIAL_CORE_RESET_RESEARCHED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.0% |
| 3 | 101.5% |
| 4 | 105.5% |
| 5 | 110.0% |
| 6 | 115.0% |

- HAZUSEとパチマガスロマガで全設定一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス確率

| 設定 | BIG | REG | 合成 |
|---|---:|---:|---:|
| 1 | 1/297.8 | 1/504.1 | 1/187.2 |
| 2 | 1/295.2 | 1/481.8 | 1/183.0 |
| 3 | 1/292.5 | 1/461.5 | 1/179.0 |
| 4 | 1/289.9 | 1/442.8 | 1/175.2 |
| 5 | 1/287.4 | 1/425.5 | 1/171.5 |
| 6 | 1/284.9 | 1/409.6 | 1/168.0 |

- HAZUSEとパチマガスロマガで一致。
- ARTはボーナス成立時抽選と約1/70の爆弾揃いの規定回数成立等から突入するが、設定別ART初当たり確率の比較可能な公開表は今回確認できず。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_BONUS__UNVERIFIED_FOR_ART_INITIAL_HIT

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「ビガースペシャル / ビガーSpecial / ビガーR / 2S0863 / エマ」と「50枚 / 1000円 / ベース / コイン持ち / 回転数」を組み替え、HAZUSE、P-WORLD、パチマガスロマガ、当時/後年資料を横断したが、比較可能な本機固有数値を確定できず。

## netIncrease

- ART「ビッグボーナスストック / BSタイム」: **次回BIG成立まで継続**。REGでは終了しない。
- ボーナス込み純増: **約+5.8枚/G**。
- HAZUSEとP-WORLDで一致。
- これはボーナス込みのART区間平均であり、ナビ小役のみの純粋なART純増とは定義を分ける。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約300枚**（336枚を超える払い出しで終了）。
- REG: **約105枚**（140枚を超える払い出しで終了）。
- HAZUSE、P-WORLD、パチマガスロマガで整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ARTは次回BIGまで継続する無限タイプ、セットストック型。
- 1回のART当選で最大5セット（BIG5回成立まで）+αをストック可能。
- 主なART突入契機はボーナス成立時抽選と、通常時約1/70の爆弾揃い（0枚役）の規定回数成立。
- 通常時内部状態は **低確率 / 高確率 / 超高確率** の3状態。超高確中のボーナス成立でART突入確定。
- ART中にも低確率 / 高確率 / 超高確率の内部モードがあり、爆弾でモードアップする旨をHAZUSEが掲載。
- ロングフリーズはART5個以上ストック、HAZUSEでは平均獲得2500枚と掲載。

### 天井

- HAZUSEは本機について **「天井機能非搭載」** と明記。
- P-WORLDは機種分類上「天井」と表示するが、本文で具体的なゲーム数天井を示していない。HAZUSEの直接記述を本線採用し、ゲーム数天井は **NONE_CONFIRMED / NO_CEILING_FUNCTION** とする。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_MOST_RESET_CONTRACT_UNVERIFIED
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- 本機固有の設定変更時の内部状態、爆弾規定回数カウント、ARTストック、液晶/ドット表示等の初期化・引継ぎ契約は、表記揺れ・型式名・メーカー名を含む再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 天井機能非搭載のため、一般的なゲーム数天井リセット処理は非該当。
- 5号機ART一般論からの補完は行わない。

### carryOverBehavior

- 純据え置き時の低確/高確/超高確状態、爆弾規定回数、ARTストック等の保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- 天井ゲーム数の宵越しは、そもそもゲーム数天井非搭載のため **NOT_APPLICABLE_NO_CEILING**。

### powerCycleBehavior

- 設定変更を伴わない電源OFF→ON時の内部状態、爆弾規定回数、ARTストック、表示状態の保持/初期化は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- ゲーム数天井カウンタ: **NOT_APPLICABLE_NO_CEILING_FUNCTION**。
- 爆弾揃いの規定回数に関わる内部カウントが設定変更/据え置き/電源OFF→ONでどう扱われるかは **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING_FUNCTION**。
- 設定変更専用の短縮天井、朝一専用ゲーム数天井も今回確認できず。

### modeAfterReset

- 通常時に低確率/高確率/超高確率の3状態が存在することは確認済み。
- 設定変更時にどの状態へ移行/再抽選するか、専用朝一モードの有無、振り分け数値は **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- **UNVERIFIED_AFTER_RESEARCH**。
- 通常時3状態の存在自体は確認済みだが、変更時・据え置き時・純電断時の状態契約は確認できない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更/朝一専用のART確定、状態優遇、短縮天井、特定G以内当選率等の直接恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更固有の不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ゲーム数天井非搭載のため「前日天井進捗消失」は非該当。

### resetDetection

- 本機固有のガックン、出目、ドット表示、朝一ステージ等による設定変更/据え置き判別契約は、再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時状態振り分け、朝一特定G内当選率、リセット恩恵発生率等の比較可能な公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- ceilingFunction: NONE_CONFIRMED
- gameCeilingCounter: NOT_APPLICABLE
- resetShortenedCeiling: NOT_APPLICABLE
- settingChangeStateDistribution: UNVERIFIED_AFTER_RESEARCH
- bombCountOnSettingChange: UNVERIFIED_AFTER_RESEARCH
- bombCountOnCarryOver: UNVERIFIED_AFTER_RESEARCH
- bombCountOnPowerCycle: UNVERIFIED_AFTER_RESEARCH
- artStockOnSettingChange: UNVERIFIED_AFTER_RESEARCH
- morningSpecificNumericBenefit: NONE_CONFIRMED_AFTER_RESEARCH

resetQaReliability: ANALYSIS_HIGH_FOR_NO_CEILING_AND_SYSTEM_STRUCTURE__UNVERIFIED_AFTER_MULTI_PATH_RESEARCH_FOR_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_AND_DETECTION

## missingFields

- 50枚あたりゲーム数/ベース。
- 設定別ART初当たり確率。
- 設定変更/据え置き/純電断時の内部状態契約。
- 爆弾規定回数の内部カウントの変更/据え置き/電断時処理。
- ARTストックの設定変更/電断時処理。
- 本機固有の設定変更判別要素。
- 公開朝一数値。

## conflicts

- P-WORLDのタイプ欄に「天井」と表示される一方、HAZUSEは天井欄で **天井機能非搭載** と明記。P-WORLD本文に具体的ゲーム数天井がないため、ゲーム数天井の本線値はHAZUSEの直接記述を採用し、P-WORLD分類表示は `SOURCE_LABEL_CONFLICT_WITHOUT_NUMERIC_CEILING` として保持。

## sources

取得日: 2026-09-05

1. HAZUSE ビガースペシャル
   - https://hazuse.com/machine/pachislot/2S0863/
   - 導入開始2012-11-19、メーカー、型式ビガーR、検定番号2S0863、設定別BIG/REG/合成、機械割、天井機能非搭載。
2. HAZUSE 初打講座
   - https://hazuse.com/machine/pachislot/2S0863/genre/203/
   - ART次回BIGまで、最大5セット+α、ボーナス込み純増約5.8枚/G、通常時3状態、BIG約300枚、REG約105枚。
3. HAZUSE 基本スペック
   - https://hazuse.com/machine/pachislot/2S0863/genre/201/
   - 設定別ボーナス確率・機械割・規定払い出し。
4. パチマガスロマガ ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/39/h.php
   - 設定別BIG/REG/合成、機械割。HAZUSEと一致。
5. パチマガスロマガ スペック
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/39/a.php
   - ART突入契機、約1/70のボム、BIG/REG獲得性能。
6. パチマガスロマガ ART突入フロー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/39/l.php
   - 次回BIGまで継続、REGでは終了しない、ロングフリーズでストック5個以上。
7. P-WORLD ビガーSpecial
   - https://www.p-world.co.jp/machine/database/6891
   - メーカー、5号機ART、BIG300枚/REG105枚、ボーナス込み純増約5.8枚/G、セットストック型、通常時3状態、爆弾揃い約1/70。

## qualityNotes

- 性能コアのボーナス確率・機械割は独立2系統で一致し高信頼。
- ART純増は「ボーナス込み約5.8枚/G」という特殊定義なので、一般的なART純増/Gと同列集計しない。
- resetBehaviorは天井非搭載という直接確認以外の契約が乏しい。欠損を一般的な5号機仕様で推測せず、検索語・型式・メーカーを変更して再探索後にUNVERIFIEDとした。
