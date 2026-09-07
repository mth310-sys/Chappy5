# スーパーブラックジャック2

machineName: スーパーブラックジャック2
manufacturer: ネット（NET CORPORATION）
releaseDate: 2015-11-16
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 940
generation: 5号機
systemType: A+ART / リアルボーナス + 疑似ボーナスストック / ART
formalModelName: スーパーブラックジャック2NG
inspectionNumber: 5S0900
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_GAMECOUNTER_POWER

## identity
- NET公式アプリ案内で2015年11月登場機として確認。
- ハズセ機種DBと複数当時解析資料でホール導入開始2015-11-16を確認。
- ハズセで型式名「スーパーブラックジャック2NG」、検定番号「5S0900」を確認。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.6% |
| 3 | 99.9% |
| 4 | 102.8% |
| 5 | 108.7% |
| 6 | 119.9% |

- man-soft、ちょんぼりすた、スロパチクエストで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
主要比較値としてボーナス合算とART「ストックタイム」初当たりを採用。

| 設定 | ボーナス合算 | ARTストックタイム |
|---:|---:|---:|
| 1 | 1/111 | 1/1585 |
| 2 | 1/105 | 1/1421 |
| 3 | 1/99 | 1/1270 |
| 4 | 1/89 | 1/1068 |
| 5 | 1/70 | 1/748 |
| 6 | 1/49 | 1/445 |

- ボーナス合算はリアルボーナス＋リオボーナス（疑似ボーナス）を含む放出ベースの合算値として扱う。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約35.6G/50枚**。
- man-softは約36G、ちょんぼりすた/スロパチクエストは約35.6Gで、丸め差として扱う。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ストックタイム」: **約1.7枚/G**。
- ボーナス込みの参考純増として約2.1枚/G表記の解析あり。定義を分離し、ART単体の物差し値は1.7枚/Gとする。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- Real BIG: **約236枚**。
- Real REG: **約88枚**。
- Rio BIG（疑似）: **約120枚**。
- Rio REG（疑似）: **約60枚**。
- ART「ストックタイム」: **1セット50G / 約1.7枚/G / セットループあり**。
- man-soft、スロパチクエスト、中古実機DBで主要値を照合。

## modeSpecificMinimumData
- 通常時は「抽選モード」と「ゲーム数モード」の2軸管理。
- ゲーム数天井: **ボーナス後777Gでリオボーナス（疑似ボーナス）当選**。
- もう1系統として、ボーナス間の規定スイカ回数到達でリオボーナス当選。資料表現に「10回成立」「11回成立」の差があるため、通常天井の主物差し値は777Gをcanonicalとし、スイカ回数はCONFLICTとして分離。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_HIGH_FOR_MODE_STATE_STOCK_PARTIAL_FOR_GAMECOUNTER_STAGE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **抽選モードをRESELECT**。
- **ゲーム数モードは設定変更専用モードCへ移行**。
- **内部の疑似ボーナスストック個数をRESELECT**。
- 設定変更時の天井までのゲーム数そのものは、当時解析表で「調査中」とされており、RESET/CARRYOVERを推測しない。
- ステージも当時資料で調査中。

### carryOverBehavior
- 据え置きのみを独立記述した直接比較資料は今回固定できなかったため、設定変更なしを純電源OFF→ONと自動同一視しない。
- 抽選モード・ゲーム数モード・ストックについては電源ON/OFF側の引継ぎ資料があるが、据え置き契約としては **UNVERIFIED_AFTER_RESEARCH** とする。
- 天井G数・ステージもUNVERIFIED_AFTER_RESEARCH。

### powerCycleBehavior
- 設定変更なしの電源OFF→ONでは **抽選モードCARRYOVER / ゲーム数モードCARRYOVER / 疑似ボーナスストックCARRYOVER**。
- 天井までのゲーム数とステージは当時直接表で「調査中」のため **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- settingChange: **UNVERIFIED_AFTER_RESEARCH / period sources listed as under investigation**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- purePowerCycle: **UNVERIFIED_AFTER_RESEARCH**。
- 通常ゲーム数天井自体は777Gで存在するが、朝一処理だけを推測でRESET扱いしない。

### ceilingAfterReset
- 通常天井: **777G**。
- 設定変更時に777Gより短縮される固定天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし設定変更専用のゲーム数モードCにより、77G・333G等の規定G数解除期待が通常時より変化するため、固定短縮天井とは別の朝一優遇として保存。

### modeAfterReset
- 抽選モード再抽選:
  - 通常1: **58.0%**
  - 通常2: **25.0%**
  - 高確: **15.0%**
  - SP高確: **2.0%**
- ゲーム数モード: **設定変更専用モードC**。
- 電源OFF→ONのみでは抽選モード・ゲーム数モードとも引継ぎ。

### stateAfterReset
- 本機の朝一比較上重要な内部状態は抽選モードとして上記4状態に再抽選される。
- ステージの初期表示契約は当時資料で調査中のためUNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時はゲーム数モードCへ入り、通常時とは異なる規定G数解除テーブルが使われる。
- 公開値では77G・333Gが比較的強く、朝一0〜77Gおよび310〜333Gが当時解析でリセット狙い候補とされる。
- 設定変更時に疑似ボーナスストックを0〜2個で再抽選するため、朝一からストック保有状態で始まる可能性がある。

### resetPenalties
- 設定変更時ストック個数は0個 **20%** を含むため、前日ストックを保持する電源OFF→ONに対してストック契約上の不利になり得る。ただし前日実ストック数との比較期待値までは本DB対象外。
- 固定天井短縮消滅等の追加不利要素はNONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 本機固有のガックン、初期出目、液晶ステージ、ランプ等で設定変更を確定級に判別する直接資料は、表記揺れ・型式名・「朝一/ガックン/設定変更判別/リセット判別」を再探索しても固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一ゾーン当選は設定変更推測材料にはなるが、単発事象での確定判別とは扱わない。

### numericResetData
- resetDrawModeDistribution:
  - normal1: 58.0%
  - normal2: 25.0%
  - high: 15.0%
  - spHigh: 2.0%
- resetGameMode: **MODE_C_DEDICATED_RESET_MODE**。
- resetDedicatedModeRioBonusReleaseRate:
  - 1G: none
  - 33G: 3.0–12.0%
  - 77G: 20.0–33.4%（別資料の設定1/6例 23% / 30%）
  - 111G: 3.0–12.0%
  - 222G: 6.0–25.0%
  - 333G: 20.0–33.4%
  - 444G: 3.0–12.0%
  - 555G: 6.0–25.0%
  - 666G: 3.0–12.0%
  - 777G: 100% / ceiling
- resetStockCountDistribution:
  - 0: 20%
  - 1: 60%
  - 2: 20%
- resetStockTypeDistribution:
  - stockTime: 1.2%
  - RioRed7: 5.5%
  - RioGreen7: 21.3%
  - RioYellow7: 18.5%
  - RioWhite7: 9.5%
  - RioREG: 44.0%
- purePowerCycleStock: **CARRYOVER**。
- purePowerCycleDrawMode: **CARRYOVER**。
- purePowerCycleGameMode: **CARRYOVER**。
- resetGameCounterContract: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- スイカ回数天井は資料に「10回成立で当選」と「11回成立」の表現差がある。当時解析には「10回成立時は必ず当選」とするものがある一方、別資料は「11回成立」を天井条件として記載。ゲーム数天井777Gは一致しているため、スイカ回数だけCONFLICTとして保持する。
- 設定変更時の天井G数は、当時の直接比較表自体が「調査中」。一般的な5号機挙動や専用モードCの存在からRESETと推定しない。

## missingFields
- settingChange/carryOver/purePowerCycle game-counter contract: `UNVERIFIED_AFTER_RESEARCH`
- settingChange/purePowerCycle initial stage: `UNVERIFIED_AFTER_RESEARCH`
- carryOver mode/state/stock contract as a separately documented no-power-cycle case: `UNVERIFIED_AFTER_RESEARCH`
- machine-specific resetDetection: `NONE_CONFIRMED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. NET公式 — スーパーブラックジャック2 アプリ情報
   - https://www.net-fun.co.jp/app/1439
   - 2015年11月登場、NET製品として確認。
   - reliability: OFFICIAL
2. ハズセ — スーパーブラックジャック2
   - https://hazuse.com/machine/pachislot/5S0900/genre/209/
   - 導入開始2015-11-16、型式スーパーブラックジャック2NG、検定番号5S0900。
   - reliability: ANALYSIS_HIGH_PERIOD_DB
3. man-soft — スーパーブラックジャック2 解析攻略
   - https://smaslo.man-soft.com/slot-kaiseki/superblackjack2.html
   - 導入日、機械割、ボーナス/ST確率、約36G/50枚、777G天井、設定変更時の抽選モード再抽選・専用ゲーム数モード・電源ON/OFF引継ぎ、朝一モード数値。
   - reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_RESET
4. ちょんぼりすた — スーパーブラックジャック2解析
   - https://chonborista.com/slot/net-slot/12276/
   - 約35.6G/50枚、ART約1.7枚/G、性能表、朝一専用モード、内部状態58/25/15/2%、ストック0/1/2個=20/60/20%、電源ON/OFF時ストック引継ぎ。
   - reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_RESET
5. スロパチクエスト — スーパーブラックジャック2 天井・スペック解析
   - https://www.slopachi-quest.com/article/super-black-jack2/
   - 35.6G/50枚、リアルBIG約236枚/REG約88枚、RioBIG約120枚/RioREG約60枚、ART1.7枚/G・50G、設定別性能。
   - reliability: ANALYSIS_HIGH_PERIOD
6. アタリ7 — スーパーブラックジャック2
   - https://www.atari7.com/slot/date1444095081.php
   - ストック設定変更時再抽選/電源OFF→ON保持、ストック個数・種類振り分け。
   - reliability: ANALYSIS_SINGLE_DIRECT_RESET
7. 中一商事 中古実機DB — NET スーパーブラックジャック2
   - https://store.shopping.yahoo.co.jp/nakaiticom/593.html
   - 型式名、Real BIG約236枚/REG約88枚、Rio BIG約120枚/REG約60枚、ST50G・1.7枚/G。
   - reliability: ANALYSIS_SINGLE_DATABASE

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_HIGH_PARTIAL_GAMECOUNTER_POWER
