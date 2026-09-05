# パチスロ 喰霊－零－

machineName: パチスロ 喰霊－零－
manufacturer: オーイズミ
releaseDate: 2012-10-09
releaseDatePrecision: exact_day_multi_source
releaseDateNotes: パチビー、K-Navi、HAZUSEが2012-10-09導入で一致。2012-07-24のグリーンべると発表記事には納品9月9日開始予定との記載があり、発表時予定と実導入DBの差を混同しない。本線キーは複数の導入DBが一致する2012-10-09。
generation: 5号機
systemType: A+ART / ボーナス+ART / 天井あり / 技術介入要素あり
modelName: パチスロガレイゼロC
approvalNumber: 2S0497
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_BASE_UNVERIFIED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.6% |
| 3 | 101.2% |
| 4 | 105.7% |
| 5 | 110.2% |
| 6 | 115.0% |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

HAZUSE、パチビーおよび当時解析系列で一致。

## initialHitBySetting

### ボーナス・ART

| 設定 | BIG | REG | ボーナス合算 | ART初当り | ボーナス+ART合算 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/431.1～431.2 | 1/642.5 | 1/258.0 | 1/594.3 | 1/179.9 |
| 2 | 1/414.8 | 1/624.2 | 1/249.2 | 1/531.5 | 1/169.6 |
| 3 | 1/404.5 | 1/595.8 | 1/240.9 | 1/573.6 | 1/169.7 |
| 4 | 1/385.5 | 1/569.9 | 1/230.0 | 1/478.9 | 1/155.4 |
| 5 | 1/372.4 | 1/537.2 | 1/219.9 | 1/504.5 | 1/153.2 |
| 6 | 1/348.6 | 1/504.1 | 1/206.1 | 1/383.1 | 1/134.0 |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

BIG設定1は資料の丸めで1/431.1と1/431.2が存在。差を平均せず表記差として保持。

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「パチスロ喰霊-零- / 喰霊零 / パチスロガレイゼロC / オーイズミ」と「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数」を組み替え、P-WORLD、K-Navi、HAZUSE、パチビー、当時攻略、旧解析、回顧資料を横断したが、2012年初代固有の比較可能な直接値を確定できず。
- 2019年「喰霊-零- 運命乱」および2026年「Lパチスロ 喰霊-零-Re」のベース値は別機種のため流用しない。

## netIncrease

- ART「喰霊CHANCE」: **約+1.5枚/G**
- 1セット **50G+α**。
- オーイズミ発表を扱った当時業界記事、パチビー、K-Navi、HAZUSEで一致。
- confidence: INDUSTRY_PLUS_MULTI_SOURCE_HIGH

## basicPayout

- BIG: **約204枚**
- REG: **約53枚**（HAZUSE初打講座には最大60枚表記もあり、配当/最大獲得と平均・純増目安の定義を分離）
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ART「喰霊CHANCE」: 1セット50G+α、約+1.5枚/G、ゲーム数上乗せ+継続抽選+セットストック型。
- ART継続率として50 / 67 / 80 / 89%の解析値あり。
- 天井: **ボーナス後1280G消化で次回ボーナスまで継続する無限ART+ART1ストック**。
- ペナルティ等で天井ゲーム数を超える場合あり。
- 通常時/ART中は低確・通常・高確・超高確の4モードを持ち、ART当選等に影響。
- confidence: CONTEMPORARY_ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: SUBSTANTIAL_RESET_QA
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **CONFIRMED_CLEAR_CEILING_COUNT_AND_INTERNAL_MODE_RELOTTERY**
- 当時攻略資料で、設定変更時は天井消化ゲーム数をリセットし、内部モード移行抽選を行うことを確認。
- 液晶ステージは対策室ステージから開始。
- confidence: CONTEMPORARY_ANALYSIS_SINGLE_DIRECT_WITH_CROSS_SUPPORT_FOR_COUNTER_CLEAR

### carryOverBehavior

- **PARTIAL_INFERABLE_FROM_RESET_SOURCE_BUT_PURE_UNCHANGED_CONTRACT_NOT_DIRECTLY_COMPLETE**
- 設定変更時に天井Gがリセットされるため宵越し天井狙い不可との当時記述は確認。
- ただし「純据え置きなら1280Gカウンタ・4モード・各状態をすべて保持」と項目別に直接列挙した本機固有資料までは確定できず、一般論で補完しない。

### powerCycleBehavior

- **PARTIAL_STAGE_ONLY**
- 当時解析で、設定変更時だけでなく**電源ON/OFF時も液晶は対策室ステージから開始**と明記。
- 単純電源OFF→ONで1280G天井カウンタや内部4モードを保持/再抽選するかは、今回の再探索では直接確定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- **CONFIRMED_CLEAR_ON_SETTING_CHANGE**
- 設定変更で天井消化ゲーム数をリセット。

### ceilingAfterReset

- **NORMAL_1280G_FROM_CLEARED_COUNT; RESET_SHORTENING_NONE_CONFIRMED**
- 通常天井はボーナス後1280G。
- 設定変更専用の短縮天井は確認できず。

### modeAfterReset

- **CONFIRMED_RELOTTERY_ON_SETTING_CHANGE**
- 設定変更後モード選択率:

| 設定 | 低確 | 通常 | 高確 | 超高確 | 高確以上合計 |
|---|---:|---:|---:|---:|---:|
| 1 | 76.9% | 1.6% | 20.0% | 1.6% | 21.6% |
| 2 | 76.9% | 1.6% | 20.0% | 1.6% | 21.6% |
| 3 | 72.9% | 1.6% | 25.0% | 1.6% | 26.6% |
| 4 | 71.9% | 1.6% | 25.0% | 1.6% | 26.6% |
| 5 | 63.5% | 1.6% | 33.3% | 1.6% | 34.9% |
| 6 | 63.5% | 1.6% | 33.3% | 1.6% | 34.9% |

- 公開値は丸めにより設定ごとに合計が100.0%前後からずれる場合がある。再正規化しない。
- confidence: CONTEMPORARY_ANALYSIS_SINGLE_DIRECT; FOUR_MODE_EXISTENCE_CROSS_CHECKED_BY_HISSHOBON

### stateAfterReset

- **FOUR_MODE_RELOTTERY_CONFIRMED; FINER_STATE_CONTRACT_UNVERIFIED**
- 低確/通常/高確/超高確の再抽選は確認済み。
- 高確は平均約50G、超高確は平均約25G継続との当時解析あり。
- それ以外のRT状態や細分状態の設定変更/電断契約は本DB目的上の必要範囲で直接確定できず。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **SETTING_CHANGE_CAN_START_HIGH_OR_SUPER_HIGH**
- 設定1・2でも高確以上21.6%、設定3・4は26.6%、設定5・6は34.9%の公開振り分け。
- 朝一の設定変更により高確/超高確スタートの可能性がある。

### resetPenalties

- **CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**
- 前日の1280G天井進捗は設定変更でクリアされるため、深いハマリの宵越し価値を失う。

### resetDetection

- **PARTIAL_LIMITED**
- 液晶は設定変更時も単純電源ON/OFF時も対策室ステージ開始のため、初期ステージ単独では変更判別にならない。
- ガックン、初期出目、ランプ等による本機固有の確定/高精度変更判別は、表記・資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- **CONFIRMED**
- 設定変更時モード振り分けを上表のとおり公開値として保持。
- 設定変更専用の短縮天井、朝一専用当選率は確認なし。

### numericResetData

- normalCeiling: 1280G_AFTER_BONUS
- settingChangeGameCounter: CLEAR
- resetCeiling: 1280G_FROM_CLEARED_COUNT
- settingChangeModeDistributionPct:
  - setting1: {low: 76.9, normal: 1.6, high: 20.0, superHigh: 1.6}
  - setting2: {low: 76.9, normal: 1.6, high: 20.0, superHigh: 1.6}
  - setting3: {low: 72.9, normal: 1.6, high: 25.0, superHigh: 1.6}
  - setting4: {low: 71.9, normal: 1.6, high: 25.0, superHigh: 1.6}
  - setting5: {low: 63.5, normal: 1.6, high: 33.3, superHigh: 1.6}
  - setting6: {low: 63.5, normal: 1.6, high: 33.3, superHigh: 1.6}
- initialScreenStageAfterSettingChange: 対策室
- initialScreenStageAfterPowerCycle: 対策室
- purePowerCycleCounterAndMode: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: CONTEMPORARY_DIRECT_ANALYSIS_FOR_SETTING_CHANGE_AND_PUBLIC_MODE_NUMBERS__PURE_POWER_CYCLE_COUNTER_MODE_AND_GACCHAN_UNVERIFIED_AFTER_RESEARCH

## conflicts

1. **REG獲得表現**
   - パチビー: 約53枚
   - HAZUSE配当/初打資料: 約53枚の表記と最大60枚の表記が混在。
   - 平均/純増目安と最大獲得の定義差として保持し、同一値として平均しない。

2. **BIG設定1確率の丸め**
   - パチビー: 1/431.1
   - 当時解析/HAZUSE系列: 1/431.2前後
   - 丸め差として双方保持。

3. **発表時納品予定と実導入DB**
   - グリーンべると2012-07-24記事: 納品9月9日開始予定
   - パチビー/K-Navi/HAZUSE: 導入2012-10-09
   - 予定日と実導入DBの定義差をCONFLICT_NOTEとして保持。本線キーは2012-10-09。

## missingFields

- 50枚あたりゲーム数/ベース
- 純据え置き時の1280Gカウンタ・内部モード/状態の厳密保持契約
- 単純電源OFF→ON時の天井カウンタ・内部モード契約（初期液晶ステージのみ確認）
- ガックン/初期出目/ランプ等の本機固有変更判別

## sources

取得日: 2026-09-05

1. パチビー 機種情報
   - https://www.pachibee.jp/machines/index/212090001
   - 導入2012-10-09、5号機ART、約+1.5枚/G、BIG約204枚、REG約53枚、1280G天井、設定別機械割/ボーナス/ART確率。
   - reliability: INDUSTRY_DATABASE

2. K-Navi 機種情報
   - https://p-kn.com/slot/1697/
   - ホール導入開始2012-10-09、1セット50G+α、約+1.5枚/G。
   - reliability: CONTEMPORARY_ANALYSIS_HIGH

3. HAZUSE 機種情報
   - https://hazuse.com/machine/pachislot/2S0497/
   - 型式パチスロガレイゼロC、検定番号2S0497、導入2012-10-09、機械割、ボーナス/ART仕様。
   - reliability: ANALYSIS_HIGH

4. グリーンべると 2012-07-24「ART上乗せ連に特化した『喰霊-零-』登場」
   - https://web-greenbelt.jp/00001530/
   - オーイズミ発表会、ART純増約1.5枚/G、1セット50G+α、当時の納品9月9日開始予定。
   - reliability: INDUSTRY_CONTEMPORARY

5. パチスロ 喰霊-零- 朝イチ設定変更後のモード（当時攻略）
   - https://macerate.seesaa.net/article/300137056.html
   - 設定変更時モード振り分け、天井Gリセット、設定変更/電源ONOFF時の対策室ステージ開始。
   - reliability: CONTEMPORARY_ANALYSIS_SINGLE

6. パチスロ 喰霊-零- 天井ハイエナ・解析攻略（当時攻略）
   - https://macerate.seesaa.net/article/296508634.html
   - 1280G天井、設定変更で天井消化Gリセット、ART仕様。
   - reliability: CONTEMPORARY_ANALYSIS_SINGLE

7. パチ＆スロ必勝本 モード移行率
   - https://p.hisshobon.jp/machine/2083/1/37203
   - 低確/通常/高確/超高確の4モード、設定変更時もモード移行抽選契機であることを確認。
   - reliability: ANALYSIS_HIGH

8. 当時解析回顧（スペック照合用）
   - https://ameblo.jp/roof/entry-11381090685.html
   - 機械割、ボーナス/ART確率、1280G天井、設定変更リセット、ART仕様を照合。
   - reliability: SECONDARY_LOW_FOR_CROSSCHECK_ONLY
