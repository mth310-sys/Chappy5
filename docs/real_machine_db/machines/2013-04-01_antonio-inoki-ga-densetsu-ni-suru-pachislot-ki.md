# アントニオ猪木が伝説にするパチスロ機

machineName: アントニオ猪木が伝説にするパチスロ機
manufacturer: オリンピア
releaseDate: 2013-04-01
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi、HAZUSEが2013-04-01導入で一致。グリーンべるとは納品開始予定2013-03-31。後年解析ガイドの2013-04-05～はCONFLICTとして別保持。
generation: 5号機
systemType: 擬似ボーナス + 高純増ART / ゲーム数解除
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- 正式表記: **アントニオ猪木が伝説にするパチスロ機**。
- メーカー: **オリンピア**（平和発表・販売系列。K-Naviでは平和ブランド表示）。
- 型式名: **アントニオ猪木が伝説にするパチスロ機P**。
- 検定番号: **2S1297**。
- 導入開始日: **2013-04-01**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.6% |
| 3 | 100.0% |
| 4 | 104.9% |
| 5 | 110.1% |
| 6 | 115.1% |

- K-Navi系、当時資料、後年解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | 擬似ボーナス合算 | ART「闘魂CHANCE」初当り |
|---|---:|---:|
| 1 | 1/285.9 | 1/525.2 |
| 2 | 1/285.4 | 1/488.3 |
| 3 | 1/277.0 | 1/490.5 |
| 4 | 1/262.2 | 1/416.6 |
| 5 | 1/250.6 | 1/364.5 |
| 6 | 1/241.4 | 1/310.0 |

- HAZUSE、K-Navi、P-WORLD等で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31.6G/50枚**（HAZUSE直接値）。
- 当時系別資料の約31.5～32G/1000円とも丸め差の範囲で整合。
- confidence: ANALYSIS_HIGH

## netIncrease

- ART「闘魂CHANCE」: **約+2.8枚/G**。
- 業界発表、HAZUSE、P-WORLD、パチマガスロマガで一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART「闘魂CHANCE」: **初回50G、2セット目以降30～300G+α**、ゲーム数上乗せ+セットストック型。
- 擬似BIG: **約120枚 / 約300枚 / 約600枚**（ベルナビ20/50/100回）。
- 擬似REG: **約30枚+α**（ベルナビ5回後に自力ゾーン）。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

### 通常時モード

- 通常A / 通常B / 通常C / 天国 / 超天国の5モードを確認。
- HAZUSEでは通常C相当を「天国準備」と表記する資料があり、名称差として保持。

### 天井

- ボーナス後最大 **1023G**。
- 通常A: **996G**。
- 通常B: **996G**。
- 通常C（天国準備表記資料あり）: **1023G**。
- 天国 / 超天国: **96G**。
- 1023G到達時はボーナス+ART+次回天国が濃厚/確定扱いの解析資料あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__DIRECT_SETTING_CHANGE_POWER_CYCLE_AND_RESET_NUMERICS_CONFIRMED__POWER_CYCLE_MODE_AND_GACCKUN_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井までのゲーム数を再抽選**。
- **内部状態を再抽選**。
- K-Naviの機種固有解析で**設定変更時モード振り分け**が公開されており、設定変更時にモードも再抽選される。
- 液晶ステージは**機内 or 砂浜が1:1**。
- 液晶履歴情報は**リセット**。
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC

### carryOverBehavior

- 純据え置きについて、前日ゲーム数を利用した設定変更判別法が必勝本に記載されており、設定変更しない場合のゲーム数進行継続を前提とする挙動が確認できる。
- 単純電源OFF→ONでは天井までのゲーム数と内部状態を引き継ぐことを直接確認。
- 一方、**通常時モードそのものの据え置き契約を独立して明記した本機固有資料は今回未確認**のため、mode carry-overは `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_GAME_COUNTER_AND_STATE__UNVERIFIED_FOR_EXPLICIT_MODE_CONTRACT

### powerCycleBehavior

- **天井までのゲーム数を引き継ぐ**。
- **内部状態を引き継ぐ**。
- 通常時の液晶ステージは機内 or 砂浜が1:1、それ以外は引き継ぐ。
- 液晶履歴情報はリセット。
- **モードそのものの引継ぎ明記は、検索語・資料系統を変えた再探索後も直接確定できず `UNVERIFIED_AFTER_RESEARCH`**。天井G引継ぎから自動推定しない。
- confidence: ANALYSIS_HIGH_DIRECT_FOR_COUNTER_STATE_STAGE_HISTORY__UNVERIFIED_FOR_EXPLICIT_MODE

### gameCounterReset

- 設定変更時: **RESET_AND_RESELECT**。
- 電源OFF→ONのみ: **CARRY_OVER**。
- 据え置き: 電源OFF→ON契約および朝一前兆ズレ判別法と整合し **CARRY_OVER_SUPPORTED**。

### ceilingAfterReset

- 設定変更専用の固定短縮天井は確認できない。
- 設定変更時はモードを再抽選し、選択モードの通常天井（A/B 996G、通常C 1023G、天国96G）を使用。
- 前日ハマリ進捗は設定変更で消失する。

### modeAfterReset

- 設定変更時: **RESELECT**。
- 公開振り分け:

| 設定 | 通常A | 通常B | 天国 |
|---|---:|---:|---:|
| 1 | 77.50% | 15.00% | 7.50% |
| 2 | 72.50% | 20.00% | 7.50% |
| 3 | 75.00% | 15.00% | 10.00% |
| 4 | 70.00% | 20.00% | 10.00% |
| 5 | 72.50% | 15.00% | 12.50% |
| 6 | 65.00% | 22.50% | 12.50% |

- 公開表は設定変更時の移行先を通常A/B/天国のみで示し、各行100%。通常C/超天国を別途推定補完しない。
- 電源OFF→ON/純据え置き時の**モードそのものの明示的引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`**。
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC_FOR_RESET_DISTRIBUTION

### stateAfterReset

- 設定変更時: **RESELECT**。
- 設定1～5: **低確75.00% / 高確20.00% / 超高確5.00%**。
- 設定6: **低確70.00% / 高確20.00% / 超高確10.00%**。
- 電源OFF→ONのみ: **CARRY_OVER**。
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時、**天国スタート7.5～12.5%**（設定別）で96G以内の規定ゲーム数ボーナス対象となる。
- 設定変更時の高確以上スタートは、設定1～5で **25.0%**、設定6で **30.0%**。
- モード・状態・天井Gが再抽選される。
- 固定リセット短縮天井は確認できない。

### resetPenalties

- 設定変更で前日天井進捗が消失するため、前日深いハマリの宵越し価値は失われる。
- 設定変更時モードは通常Aが65.0～77.5%で最多。

### resetDetection

- 必勝本の本機固有解析に、**前兆発生ゲーム数のズレを利用した据え置き推測**が明記されている。
- ボーナス後97G以降は190～220G、290～320Gなど「X90Gから30G間」で前兆が発生しやすい。朝一の前兆発生がこの区間からズレる場合、据え置き可能性が上がる。前日最終G数が分かれば精度向上。
- 設定変更時も電源OFF→ON時も通常時液晶は機内/砂浜1:1で開始し、液晶履歴も双方リセットされるため、**初期ステージや履歴だけでは変更判別困難**。
- 本機固有のリールガックン確定契約は、機種名/型式/メーカーと「ガックン/設定変更/朝一/据え置き/電源OFF ON」を組み替えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_DIRECT_FOR_PREMONITION_TIMING_METHOD__UNVERIFIED_FOR_GACCKUN

### publicMorningNumbers

- resetModeDistribution:
  - setting1: A77.50 / B15.00 / heaven7.50%
  - setting2: A72.50 / B20.00 / heaven7.50%
  - setting3: A75.00 / B15.00 / heaven10.00%
  - setting4: A70.00 / B20.00 / heaven10.00%
  - setting5: A72.50 / B15.00 / heaven12.50%
  - setting6: A65.00 / B22.50 / heaven12.50%
- resetStateDistribution:
  - setting1-5: low75.00 / high20.00 / superHigh5.00%
  - setting6: low70.00 / high20.00 / superHigh10.00%
- resetHeavenRate: **7.5～12.5%**。
- resetHighOrAboveRate: **25.0%（設定1～5） / 30.0%（設定6）**。
- resetShortCeiling: **NONE_CONFIRMED_AS_FIXED_RESET_ONLY_CEILING**。
- normalModeCeilings: **A/B 996G / C 1023G / heaven/superHeaven 96G**。
- premonitionDetectionWindowsAfterBonus97G: **190～220G, 290～320G, ... X90～X20形式**。
- advantageousSection: **NOT_APPLICABLE_5TH_GEN**。

### numericResetData

- settingChangeCeilingProgress: RESET_AND_RESELECT
- powerCycleCeilingProgress: CARRY_OVER
- settingChangeState: RESELECT
- powerCycleState: CARRY_OVER
- settingChangeMode: RESELECT_WITH_PUBLISHED_DISTRIBUTION
- powerCycleMode: UNVERIFIED_AFTER_RESEARCH
- resetHeavenRateRange: 7.5-12.5%
- resetHighOrAboveRate: 25.0-30.0%

resetQaReliability: ANALYSIS_HIGH_DIRECT_FOR_SETTING_CHANGE_POWER_CYCLE_RESET_MODE_RESET_STATE_AND_DETECTION__UNVERIFIED_AFTER_RESEARCH_FOR_EXPLICIT_POWER_CYCLE_MODE_AND_GACCKUN

## missingFields

- explicitPowerCycleModeCarryOverContract: `UNVERIFIED_AFTER_RESEARCH`
- explicitPureCarryOverModeContract: `UNVERIFIED_AFTER_RESEARCH`
- machineSpecificGacckunContract: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- releaseDate:
  - **2013-04-01** — K-Navi、HAZUSE。
  - **2013-04-05～** — 後年「パチスロ解析ガイド」。
  - 業界記事は納品開始予定を**2013-03-31**としており、ホール導入開始日とは定義を分離。
  - 本DBの時系列キーは具体日一致が強い **2013-04-01** を採用。平均しない。
- modeNaming:
  - 必勝本/K-Navi: 通常C。
  - HAZUSE: 天国準備。
  - 数値を平均・統合せず、同じ1023G枠の名称差として注記。

## sources

取得日: **2026-09-06**

- グリーンべると — 業界発表/オリンピア製/ART純増2.8枚・初回50G/2セット目以降30～300G/納品開始予定3月31日: `https://web-greenbelt.jp/00000754/`
- K-Navi — 導入日/擬似ボーナス/ART初当り: `https://p-kn.com/slot/1826/`
- K-Navi モード移行率 — 設定変更時モード振り分け: `https://p-kn.com/slot/1826/43670/`
- K-Navi 状態移行率 — 設定変更時低確/高確/超高確振り分け: `https://p-kn.com/slot/1826/43671/`
- HAZUSE — 型式/検定番号/導入日/メーカー/天井: `https://hazuse.com/machine/pachislot/2S1297/`
- HAZUSE 基本スペック — 擬似ボーナス/ART確率/50枚ベース: `https://hazuse.com/machine/pachislot/2S1297/genre/201/`
- パチ＆スロ必勝本 天井&設定変更 — 設定変更/電源OFF→ON/朝一判別の直接契約: `https://p.hisshobon.jp/machine/2175/1/39310`
- P-WORLD — ART構造/擬似ボーナス/確率: `https://www.p-world.co.jp/machine/database/7027`
- パチマガスロマガ — ART/擬似BIG・REG基本獲得性能: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/108/a.php`
- パチスロ解析ガイド — 機械割/ART構造/導入日2013-04-05～の競合値: `https://pachislot-guide.net/2013/inoki-densetsu/`
- CrankySeven — 1000円約32G/設定変更で天井Gクリア/基本性能照合: `https://crankyseven.com/inoki-densetu-pc.htm`
