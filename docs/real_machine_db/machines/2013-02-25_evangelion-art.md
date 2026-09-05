# パチスロ「EVANGELION」 / EVANGELION ART

machineName: パチスロ「EVANGELION」
manufacturer: ビスティ
releaseDate: 2013-02-25
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi、パチビー、DMMぱちタウンが2013-02-25導入で一致。フューチャースコープの2013-02-04業界向けリリースも2013年2月下旬全国導入予定とし整合。
generation: 5号機
systemType: A+ART / リアルボーナス+ゲーム数上乗せ+セットストックART / 周期MAP管理
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- 通称/後年アプリ名: **EVANGELION ART**。
- 型式名: **EVANGELION・A**。
- 検定番号: **2S1267**（後年解析DB）。
- シリーズ7作目で初のART搭載機。SANKYOオンライン博物館、K-Navi、フューチャースコープ系リリースでシリーズ初ARTを確認。
- confidence: OFFICIAL_COLLECTION_PLUS_ANALYSIS_DATABASE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.4% |
| 3 | 100.9% |
| 4 | 104.1% |
| 5 | 107.8% |
| 6 | 114.8% |

- DMMぱちタウン、5号機クロニクル、複数解析資料で一致。
- 後年の低品質回顧系に96.9～114.2%表記があるため、平均せず conflicts に隔離。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/438.9 |
| 2 | 1/410.7 |
| 3 | 1/397.1 |
| 4 | 1/338.2 |
| 5 | 1/305.3 |
| 6 | 1/257.0 |

- DMMぱちタウンと解析資料で一致。後年回顧の整数丸め 1/439～1/257 と整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### ボーナス

| 設定 | BIG合成 | REG合成 | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/431.2 | 1/753.3 | 1/274.2 |
| 2 | 1/431.2 | 1/753.3 | 1/274.2 |
| 3 | 1/431.2 | 1/753.3 | 1/274.2 |
| 4 | 1/431.2 | 1/720.2 | 1/269.7 |
| 5 | 1/414.8 | 1/720.2 | 1/263.2 |
| 6 | 1/414.8 | 1/720.2 | 1/263.2 |

- 当時系解析整理で取得。後年回顧のボーナス合算1/274・1/270・1/263と整合。
- confidence: ANALYSIS_PERIOD_SINGLE_PLUS_RETROSPECTIVE_CONFIRMATION

## baseGamesPer50

- **約32G/1000円（50枚相当）**。
- 当時系解析整理の1000円あたり回転数を採用。
- confidence: ANALYSIS_PERIOD_SINGLE

## netIncrease

- ART「EVA RUSH Ver.1.0」: **約+1.6枚/G**。
- 1セット: **30G+α**。
- Ver.2.0はベルが林檎へ変換され上乗せ性能が大きく高まる覚醒ARTだが、物差し用の通常ART純増は+1.6枚/Gとして扱う。
- K-Navi、P-WORLD、パチビー、DMMぱちタウン、SANKYOオンライン博物館で一致。
- confidence: OFFICIAL_COLLECTION_PLUS_MULTI_SOURCE_ANALYSIS

## basicPayout

- BIG / 覚醒BIG: **約203枚**。
- REG: **56枚**。
- ART基本性能: **30G+α / 約+1.6枚/G**。
- K-Navi、P-WORLD、パチビー、DMMぱちタウンで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

### 周期 / MAP

- 通常時は**1周期128G+α**のMAP/周期管理。
- 連続演出やインダクションモード等では周期カウントが停止するため、実ゲーム数は128Gを超える場合がある。
- 3周期目終了後は一部でART、7周期目終了後は50%でART、11周期目終了後はART突入。
- **11周期目終了後は覚醒ART（EVA RUSH Ver.2.0）確定**。
- 11周期到達は実戦上おおむね1500G前後になり得る。

### CZ

- 「インダクションモード」: **ART期待度約25%**。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CYCLE_COUNT_CLEAR_MAP_PROGRESS_RETAIN__POWER_CYCLE_RETAIN__DISPLAY_DIFFERENCE_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井までの消化周期数: CLEAR_CONFIRMED**。
- **現在滞在しているMAP番号: RETAIN_CONFIRMED**。
- **現在MAP内の消化ゲーム数: RETAIN_CONFIRMED**。
- 液晶ステージ: **シンジステージへ移行**。
- したがって本機は「設定変更で現在の128G周期を0Gへ戻す」仕様ではない。前日MAP内の残りゲーム数を消化して周期境界へ到達した後、設定変更でクリアされた周期回数が適用される挙動として扱う。
- DMMぱちタウンのリセット仕様と当時系解析整理の「前日の残り周期G消化＋高確率ステージ消化後に周期回数がクリア」が整合。
- confidence: ANALYSIS_HIGH_PLUS_PERIOD_CONFIRMATION

### carryOverBehavior

- 据え置き時は、設定変更がないため**消化周期数・MAP番号・MAP内消化Gを継続**する扱い。
- 電源OFF→ONのみの直接仕様が全周期関連値引継ぎを示すため、通常の据え置き+電断では天井周期進捗を保持する。
- confidence: ANALYSIS_HIGH_BY_POWER_CYCLE_SPEC

### powerCycleBehavior

- **電源OFF→ONのみ**:
  - 天井までの消化周期数: **RETAIN_CONFIRMED**。
  - 滞在MAP番号: **RETAIN_CONFIRMED**。
  - MAP内消化G: **RETAIN_CONFIRMED**。
  - 液晶ステージ: 通常ステージ中なら**シンジ**、チャンスステージ中なら**表示を引き継ぐ**。
- 設定変更時との最大の差は、設定変更では周期回数のみクリアされる点。
- confidence: ANALYSIS_HIGH_DIRECT

### gameCounterReset

- 設定変更時:
  - **completedCycleCount / ceilingCycleCount: CLEAR**。
  - **currentMapProgressG: RETAIN**。
- 据え置き時: **RETAIN**。
- 電源OFF→ONのみ: **RETAIN**。
- 本機は単純な総ゲーム数天井ではなく、周期回数とMAP内進捗を分けて保存する必要がある。

### ceilingAfterReset

- 設定変更で11周期天井までの**消化済み周期回数はクリア**。
- 現在MAP内の消化Gは引継ぐため、朝一1周期目の周期境界到達までが常に128Gフルとは限らない。
- 設定変更専用の固定短縮天井は確認できない。
- 通常の最終天井契約は**11周期目終了後に覚醒ART**。

### modeAfterReset

- 本機のMAP番号は設定変更時も**引継ぎ**。
- 「設定変更時にMAPを再抽選する」という根拠は確認できず、DMMの直接記載に従いRETAIN。
- MAPとは別の高確/内部抽選状態について、設定変更専用の詳細振り分けは **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時の高確/低確等の内部状態振り分けを直接示す信頼できる数値は、機種名/EVANGELION ART/EVANGELION・A/ビスティと「設定変更・リセット・朝一・状態・高確・据え置き・電源OFF ON」を組み替え、K-Navi、P-WORLD、DMM、当時解析、後年DBを横断したが確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 液晶ステージ挙動はresetDetectionへ分離。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 固定のリセット短縮天井や設定変更専用ART当選率優遇は確認できない。
- ただし現在MAP内Gを引き継ぐため、前日の周期内進捗次第では朝一から次の周期境界までが短いケースがある。これは「設定変更恩恵」というより**MAP進捗引継ぎ特性**。

### resetPenalties

- 設定変更すると、11周期天井へ向けて前日までに蓄積した**消化済み周期数を失う**。
- 深い周期まで進行した台の宵越し天井価値は設定変更で消える。

### resetDetection

- 設定変更時は通常**シンジステージ**へ。
- 電源OFF→ONのみでも通常ステージ中ならシンジへ移るため、**朝一シンジだけでは設定変更判別不可**。
- 前日がチャンスステージで、朝一もそのチャンスステージを引き継いでいる場合は電源OFF→ONのみ/据え置き材料になり得る。一方、設定変更ならシンジへ移る。
- MAP番号・MAP内Gが設定変更でも引き継がれるため、周期境界到達タイミングだけで設定変更を確定することはできない。
- 本機固有のリールガックンについては、検索語・資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- normalCycleLength: **128G+α**。
- settingChangeCompletedCycleCount: **CLEAR**。
- settingChangeCurrentMapProgress: **RETAIN**。
- powerCycleCompletedCycleCount: **RETAIN**。
- powerCycleCurrentMapProgress: **RETAIN**。
- ceiling: **11th cycle end -> EVA RUSH Ver.2.0 / 覚醒ART**。
- 7thCycleART: **50%**。
- 3rdCycleART: **一部/高期待度（具体率未確定）**。
- fixedResetShortCeiling: **NONE_CONFIRMED**。
- resetSpecificModeDistribution: **NOT_APPLICABLE_TO_MAP_NUMBER_AS_MAP_RETAINED / OTHER_INTERNAL_STATE_UNVERIFIED**。
- advantageousSection: **NOT_APPLICABLE_5TH_GEN**。

### numericResetData

- cycleLength: 128G+α
- settingChangeCycleCount: CLEAR_CONFIRMED
- settingChangeMapNumber: RETAIN_CONFIRMED
- settingChangeMapProgressG: RETAIN_CONFIRMED
- powerCycleCycleCount: RETAIN_CONFIRMED
- powerCycleMapNumber: RETAIN_CONFIRMED
- powerCycleMapProgressG: RETAIN_CONFIRMED
- seventhCycleArtProbability: 50%
- eleventhCycleBenefit: EVA_RUSH_VER2_CONFIRMED
- fixedResetShortCeiling: NONE_CONFIRMED
- advantageousSection: NOT_APPLICABLE_5TH_GEN

resetQaReliability: ANALYSIS_HIGH_DIRECT_FOR_RESET_AND_POWER_CYCLE_TABLE__PERIOD_ANALYSIS_CONFIRMATION__MULTI_SOURCE_FOR_CYCLE_CEILING

## missingFields

- 設定変更時の高確/低確等、MAP以外の内部状態振り分け。
- 本機固有のリールガックン/初期出目による設定変更判別。
- 3周期目終了時ART当選の精密率。

## conflicts

- 機械割は主系列 **97.4 / 98.4 / 100.9 / 104.1 / 107.8 / 114.8%** がDMM・5号機クロニクル等で一致。一方、後年の低品質回顧系に **96.9～114.2%** 表記が存在するため `CONFLICT_LOW_QUALITY_RETROSPECTIVE_PAYOUT` として隔離し、主値へ混ぜない。
- リセット説明はDMMの「周期回数CLEAR / MAP番号・MAP内G引継ぎ」と当時解析の「前日残り周期G消化後に周期回数CLEAR」で整合し、CONFLICTではない。

## sources

取得日: 2026-09-06

### 公式/準公式・業界
- SANKYOオンライン博物館 EVANGELION ART: https://www.sankyo-fever.jp/collection/879/
- フューチャースコープ 2013-02-04 導入記念リリース: https://prtimes.jp/main/html/rd/p/000000161.000001932.html
- フューチャースコープ 2014-02-25 Android実機アプリ: https://www.atpress.ne.jp/news/43702
- フューチャースコープ 2014-04-02 FIELDSモバイル: https://www.atpress.ne.jp/news/45030

### 解析/DB
- K-Navi: https://p-kn.com/slot/1798/
- P-WORLD: https://www.p-world.co.jp/machine/database/6993
- パチビー: https://www.pachibee.jp/machines/index/213020002
- DMMぱちタウン: https://p-town.dmm.com/machines/230
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/23/bisty_slot_23.php
- 当時/旧解析整理（crankyseven）: https://crankyseven.com/evangelionart-pc.htm
- 5号機クロニクル ビスティ一覧: https://5goki.com/bisty
- 後年解析DB（型式/検定番号照合）: https://pachinavi.net/machines/eva-art/

## sourceQualitySummary

- releaseDate: ANALYSIS_HIGH_MULTI_SOURCE + INDUSTRY_MONTH_CONFIRMATION
- machineIdentity: OFFICIAL_COLLECTION + ANALYSIS_DATABASE
- payout/core: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_PERIOD_SINGLE
- resetBehavior: ANALYSIS_HIGH_DIRECT + PERIOD_CONFIRMATION
- overall: COMPLETE_CORE_RESET_RESEARCHED
