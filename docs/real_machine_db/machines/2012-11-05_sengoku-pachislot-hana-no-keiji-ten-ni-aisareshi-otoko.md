# 戦国パチスロ 花の慶次～天に愛されし漢～

machineName: 戦国パチスロ 花の慶次～天に愛されし漢～
manufacturer: ニューギン
releaseDate: 2012-11-05
releaseDatePrecision: exact_day
releaseDateNotes: HAZUSEは導入開始日2012-11-05、gamebizも2012-11-05にホール稼働開始と明記。グリーンべるとは納品開始2012-11-04予定。後年の4Gamerメーカー発表転載文には「2012年10月の導入開始」とあるためCONFLICTとして保持し、本DB時系列キーは具体的ホール稼働日の2012-11-05を採用。
generation: 5号機
systemType: A+ART / ボーナス+ART / 天井あり
modelName: 花の慶次～天に愛されし漢～W
approvalNumber: 2S0897
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.7% |
| 3 | 101.6% |
| 4 | 104.8% |
| 5 | 109.2% |
| 6 | 115.4% |

- Re.designと後年整理資料で精密系列が一致。
- HAZUSEは 97 / 99 / 102 / 105 / 109 / 115% と整数丸め表示。精密系列と整合するためCONFLICTではなく表示精度差として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「修羅の刻」初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/532 |
| 2 | 1/478 |
| 3 | 1/480 |
| 4 | 1/408 |
| 5 | 1/415 |
| 6 | 1/347 |

- Re.designの設定別ART初当りと後年整理資料が一致。
- 非単調な設定2/3・4/5の値も資料どおり保持し、補正しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### ボーナス合算

| 設定 | ボーナス合算 |
|---|---:|
| 1 | 1/297.9（HAZUSE整数表示1/298） |
| 2 | 1/290.0（1/290） |
| 3 | 1/282.5（1/283） |
| 4 | 1/275.4（1/275） |
| 5 | 1/268.6（1/269） |
| 6 | 1/258.0（1/258） |

- Re.design / HAZUSE / 後年整理資料で精密値と丸め値が整合。

## baseGamesPer50

- **約33.0G/1000円（50枚）**。
- Re.design機種基本情報の「G数/千円」直接値。
- 同一定義の独立精密値は今回の再探索で確定できず、confidence: ANALYSIS_SINGLE_DIRECT。

## netIncrease

- ART「修羅の刻」: **約+1.7枚/G**。
- グリーンべると、HAZUSE、パチマガスロマガ、Re.designで一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## basicPayout

- 極BIG: **約204枚**。
- BIG: **約204枚**。
- REG: **約45枚**。
- ART「修羅の刻」: **1セット40G+α、ループ率50～85%**。
- 真修羅の刻: **1セット10G（初回20G）**のループ式ART/上位契機。
- パチマガスロマガ、HAZUSE、Re.design、グリーンべるとで主要性能を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常天井: **ボーナスまたはART終了後1200G消化で天井ART「修羅の刻」当選**。
- 当時解析では天井ARTの1セット消化後に **+300G上乗せ** が確定するとされる。
- ART発動までの最大前兆は当時解析で **46G**。
- 物差し用途では1200G天井と主要恩恵のみ保存し、通常時の全内部モード移行率・全抽選テーブルは収集対象外。
- confidence: CONTEMPORARY_ANALYSIS_MULTI_SOURCE_FOR_CEILING

## resetBehavior

schemaVersion: v0.7
resetQaStatus: SUBSTANTIAL_RESET_QA
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **CONFIRMED_CLEAR_CEILING_COUNTER__INTERNAL_MODE_RELOTTERY__HIGH_STATE_START_POSSIBLE__LCD_STAGE_RANDOMIZED**
- 2012年当時の天井攻略資料に、設定変更で天井消化ゲーム数をリセットし、内部モード移行抽選を行うと明記。
- 同資料は設定変更後に高確率スタートの可能性があると記載。
- 液晶通常ステージは設定変更時にランダム選択される。
- confidence: CONTEMPORARY_ANALYSIS_DIRECT

### carryOverBehavior

- **PARTIAL__SETTING_CHANGE_IS_YOIKOSHI_NOT_USABLE__PURE_STAY_FULL_CONTRACT_UNVERIFIED**
- 当時資料は設定変更後について「宵越し×」と明記しており、設定変更時に前日の天井進捗が消えることは確定。
- 一方、純据え置き時の1200Gカウンタ、内部モード、内部高確状態、前兆/殿モード等の完全な保持契約を本機固有の直接資料で網羅できなかったため、一般論から補完せず **UNVERIFIED_AFTER_RESEARCH** を残す。

### powerCycleBehavior

- **PARTIAL__LCD_STAGE_RANDOMIZED__INTERNAL_COUNTER_MODE_STATE_UNVERIFIED_AFTER_RESEARCH**
- 当時資料は液晶ステージについて、設定変更時も「電源ON/OFF時と同様ランダムで選択」と記載しており、単純電源OFF→ONでも表示ステージがランダム選択されることを確認。
- ただし単純電源OFF→ONのみの場合の天井カウンタ、内部モード、高確状態のCLEAR/RETAIN契約は、検索語・資料系統を変えた再探索でも本機固有の直接記述を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- **CONFIRMED_CLEAR_ON_SETTING_CHANGE**
- 設定変更で天井消化ゲーム数をリセット。
- 「宵越し天井狙い不可」と当時資料が直接整理。
- confidence: CONTEMPORARY_ANALYSIS_DIRECT

### ceilingAfterReset

- **NORMAL_1200G_CEILING_RESTARTS_FROM_ZERO__NO_FIXED_RESET_SHORT_CEILING_CONFIRMED**
- 通常天井はボーナス/ART後1200G。
- 設定変更で進捗は0から再開。
- 設定変更専用の一律短縮天井（例: 600G等）は、表記揺れ・型式名・「リセット/朝一/天井短縮」を組み替えた再探索でも確認できず、**NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- **CONFIRMED_INTERNAL_MODE_RELOTTERY__FULL_DISTRIBUTION_UNVERIFIED**
- 設定変更時に内部モード移行抽選が行われることを当時資料で確認。
- 設定別または全設定共通の具体的モード振り分け数値は、当時解析・旧DB・回顧資料まで再探索しても今回確定できず **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- **HIGH_PROBABILITY_STATE_START_POSSIBLE__EXACT_DISTRIBUTION_UNVERIFIED**
- 当時資料は設定変更後に高確率スタートの可能性があると記載。
- 高確/低確等の具体振り分け率、設定差、完全な初期状態契約は十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **HIGH_PROBABILITY_STATE_START_POSSIBLE**
- 設定変更後に高確率スタートの可能性がある。
- ただし発生率の公開数値は今回確定できず、数値を推測しない。

### resetPenalties

- **PREVIOUS_DAY_1200G_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**
- 設定変更で天井消化Gがリセットされるため、前日のハマリを使う宵越し狙いには不利。

### resetDetection

- **LCD_INITIAL_STAGE_RANDOM_ON_BOTH_SETTING_CHANGE_AND_POWER_CYCLE__NOT_A_SIMPLE_RESET_MARKER**
- 液晶初期ステージは設定変更時も電源ON/OFF時もランダム選択のため、朝一の初期ステージ単独では設定変更/据え置きの単純判別材料にならない。
- 当時資料は、朝一にレア役なしで別ステージから移行する挙動を高確示唆として扱っているが、これは設定変更確定判別ではないため分離。
- 本機固有のリールガックン、表示ゲーム数差等による確定変更判別は検索語を変えて再探索しても **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- **NO_EXACT_RESET_PROBABILITY_CONFIRMED_AFTER_RESEARCH**
- 設定変更後の高確率スタート「可能性」は確認できるが、その発生率や朝一○G以内当選率などの比較可能な公開数値は今回確定できず **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- normalCeiling: 1200G_AFTER_BONUS_OR_ART
- settingChangeGameCounter: CLEAR
- resetSpecificFixedShortCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- settingChangeMode: RELOTTERY_CONFIRMED
- settingChangeHighStateStart: POSSIBLE_RATE_UNVERIFIED
- lcdStageOnSettingChange: RANDOM_RESELECT
- lcdStageOnPowerCycle: RANDOM_RESELECT
- powerCycleInternalContract: UNVERIFIED_AFTER_RESEARCH
- resetMorningExactProbability: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: CONTEMPORARY_ANALYSIS_DIRECT_FOR_COUNTER_MODE_HIGH_STATE_POSSIBILITY_AND_LCD_RANDOMIZATION__ANALYSIS_HIGH_MULTI_SOURCE_CORE__UNVERIFIED_FOR_FULL_STAY_POWER_CYCLE_INTERNAL_CONTRACT_AND_EXACT_RESET_NUMBERS

## missingFields

- 純据え置き時の天井G/内部モード/内部状態/前兆等の完全な保持契約。
- 単純電源OFF→ON時の内部天井カウンタ/モード/状態契約（液晶ステージのランダム再選択のみ確認）。
- 設定変更時の具体的モード振り分け率。
- 設定変更時の高確スタート率。
- 朝一○G以内当選率などの公開朝一数値。
- 本機固有のリールガックン等による確定設定変更判別。
- 50枚ベース33.0Gの独立精密照合。

## conflicts

- release timing: HAZUSEとgamebizは2012-11-05ホール導入/稼働開始、グリーンべるとは納品開始2012-11-04予定。2013年4月の4Gamer掲載メーカー発表転載文には「2012年10月の導入開始」とある。具体的な当時ホール稼働日の複数資料を優先して時系列キーは2012-11-05とし、10月表記は **CONFLICT_RELEASE_TIMING_2012-10_VS_2012-11-05** として保持。
- payout rate: HAZUSE整数表示97/99/102/105/109/115%と精密系列97.1/98.7/101.6/104.8/109.2/115.4%は丸めで整合するためCONFLICT扱いしない。

## sources

取得日: 2026-09-05

1. HAZUSE 戦国パチスロ花の慶次～天に愛されし漢～
   - https://hazuse.com/machine/pachislot/2S0897/
   - 導入開始日2012-11-05、型式名、検定番号、整数丸め機械割、ボーナス獲得、ART基本性能。
2. gamebiz「インデックス、Mobage…花の慶次カードを配信」2012-11-06
   - https://gamebiz.jp/news/81461
   - 2012-11-05にホール稼働開始と明記。
3. P-WORLD / グリーンべると「史上最大の初陣『戦国パチスロ 花の慶次』が登場」2012-09-24
   - https://news.p-world.co.jp/articles/5474/greenbelt
   - ニューギン発表会、納品開始2012-11-04予定、A+ART、ART純増1.7枚/G、1セット40G+α。
4. Re.design 機種基本情報 花の慶次～天に愛されし漢～W
   - https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2015030207344901
   - 最短納期2012-11-04、精密機械割、設定別ART初当り、ボーナス、天井1200G、33.0G/千円、ART基本性能。
5. パチマガスロマガ 戦国パチスロ 花の慶次～天に愛されし漢～ 基本情報
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/24/a.php
   - ART純増1.7枚/G、1セット40G+α、極BIG/BIG約204枚、REG約45枚、主要ゲーム性。
6. 天井ハイエナ生活「戦国パチスロ 花の慶次 天井ハイエナ期待値・解析攻略」2012年当時
   - https://macerate.seesaa.net/article/300347458.html
   - 天井1200G、設定変更で天井Gリセット、宵越し不可、内部モード移行抽選、高確率スタート可能性、設定変更/電源ONOFF時の液晶ステージランダム選択、最大前兆46G。
7. 2-9伝説 花の慶次 天に愛されし漢
   - https://29den.com/hananokeiji/
   - 精密機械割、ボーナス合算、天井1200G、設定変更で天井Gリセットの後年照合。
8. 4Gamer「戦国パチスロ 花の慶次～天に愛されし漢～が遊技機王7に登場」2013-04-25
   - https://www.4gamer.net/games/212/G021221/20130425098/
   - メーカー発表転載文中に「2012年10月の導入開始」表記。具体的2012-11-05資料と競合するためrelease timing CONFLICT根拠として保存。
9. Gamer「Mobage 遊技機王 デダマ☆マスター…花の慶次カードをリリース」2012-11-05
   - https://www.gamer.ne.jp/news/201211050029/
   - 2012-11-05時点で新機種として展開、同日資料補強。
