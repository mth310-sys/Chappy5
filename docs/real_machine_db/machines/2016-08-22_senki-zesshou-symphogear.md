machineName: パチスロ 戦姫絶唱シンフォギア
manufacturer: SANKYO
releaseDate: 2016-08-22
recordNumber: 1004
generation: 5号機 / 5.5号機期
systemType: A+ART / ボーナス+ゲーム数上乗せART
formalModelName: パチスロ戦姫絶唱シンフォギアS
certificationNumber: 5S1161
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2016-08-22、メーカーSANKYO、型式名「パチスロ戦姫絶唱シンフォギアS」、検定番号5S1161を確認。
- P-WORLDでも型式名・検定番号・2016年8月導入を照合。
- 一撃、K-Navi、当時解析でも2016-08-22導入を確認。
reliability: INDUSTRY_DB_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 99.1% |
| 3 | 100.9% |
| 4 | 103.6% |
| 5 | 106.3% |
| 6 | 110.1% |
- P-WORLD、一撃、当時解析、5号機クロニクルで一致。
reliability: INDUSTRY_DB_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
canonical:
| 設定 | ボーナス合算 | ART初当り | ボーナス+ART合算 | CZ TOTAL |
|---:|---:|---:|---:|---:|
| 1 | 1/489 | 1/337 | 1/199 | 1/133 |
| 2 | 1/471 | 1/327 | 1/193 | 1/128 |
| 3 | 1/458 | 1/309 | 1/184 | 1/120 |
| 4 | 1/428 | 1/288 | 1/172 | 1/112 |
| 5 | 1/409 | 1/268 | 1/162 | 1/103 |
| 6 | 1/399 | 1/256 | 1/156 | 1/98 |
- P-WORLD、一撃、pachislo-dataで同系列一致。CZはP-WORLD/pachislo-dataで一致。
- 5号機クロニクルにはBIG/REG別確率とART初当たりが大きく異なる別系列（ART 1/531.0→1/383.3等）が掲載されるため、平均せずconflictsへ分離。
reliability: ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT_FOR_5GOKI_BREAKDOWN

## baseGamesPer50
- 約34G/50枚。
- pachislo-data、期待値見える化系解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「シンフォギアRUSH」: 約1.5枚/G。
- ボーナス込み: 約2.0枚/G。
- ART基本: 最低30G+α。開始時ギア・バーストで初期G数決定。
- P-WORLD、一撃、K-Navi、HAZUSEで1.5枚/G・30G+αを照合。
reliability: INDUSTRY_DB_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 同色BIG/LIVE BONUS: 純増約290枚。
- 異色BIG/LIVE BONUS: 純増約180枚。
- ツヴァイウィングLIVE / 限定解除: 純増約30枚。
- P-WORLD、HAZUSE、ちょんぼりすた、pachislo-dataで一致。
- 5号機クロニクルの「BIG約150枚 / REG約50枚」は上記複数資料と整合せず、同一機のボーナス定義/転記問題の可能性を排除できないためCONFLICTとして分離しcanonicalへ混ぜない。
reliability: INDUSTRY_DB_ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT_FOR_5GOKI_PAYOUT_LABELS

## modeSpecificMinimumData
- A+ART機。ART「シンフォギアRUSH」はゲーム数上乗せ型、純増約1.5枚/G、最低30G+α。
- CZ「ソングバトル」は期待度約40%、ライブチャレンジは約90%。
- ボーナス&ART間777GでCZ「ソングバトル」、1000GでART当選の2段階天井。
- 通常/高確の内部状態が存在する。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_SETTING_CHANGE_STATE_UNVERIFIED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 本機は例外的に、**設定変更でもボーナス&ART間の内部天井ゲーム数を引き継ぐ**と当時複数解析が報告。
- **音符メーターも内部的に前日分を引き継ぐ**。ただし朝一液晶表示は1個点灯へ戻る。
- 液晶ゲーム数表示は0へ戻り、朝一ステージは学校ステージ系。
- RAMクリア時は別扱いで、ゲーム数・音符メーターとも0からスタートするとの当時解析あり。
- 設定変更時の通常/高確内部状態は、ちょんぼりすた・一撃・当時すろぱちくえすとが未確定/調査中。後年単一整理資料に「引き継ぐ」とする記述はあるが、複数高信頼照合できないため **UNVERIFIED_AFTER_RESEARCH** とし推測で固定しない。
- RT/ART等の一時状態をまたぐ設定変更契約は当時資料で未確定のため **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 据え置き時は天井ゲーム数・音符メーターを引き継ぐ。
- 通常/高確状態は据え置きで引き継ぐものとして扱える資料系統はあるが、本DBでは純電源OFF→ONの直接資料を優先し、設定変更との差分を明示する。
- ART/RT中の特殊な翌日処理は完全再現対象外かつ直接資料不足のためUNVERIFIED。

### powerCycleBehavior
- 純電源OFF→ONでも内部天井ゲーム数を引き継ぐ。
- 音符メーターも内部的に引き継ぐが、液晶上は1個点灯へ戻る。
- 液晶G数表示は0へ戻り、ステージは学校ステージ系。
- 通常/高確内部状態はちょんぼりすたおよび後年整理資料で **CARRYOVER_SUPPORTED**。
- RT状態は当時すろぱちくえすと/一撃で調査中のため **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- 内部ボーナス&ART間ゲーム数: **SETTING_CHANGE_CARRYOVER / POWER_CYCLE_CARRYOVER / CARRYOVER**。
- 液晶表示ゲーム数: 朝一0G表示へ戻る。
- RAMクリア: ゲーム数0から。

### ceilingAfterReset
- 通常天井: ボーナス&ART間777GでCZ「ソングバトル」、1000GでART。
- 設定変更専用短縮天井: **NONE**。設定変更でも内部G数を引き継ぐため、前日の進捗に応じて宵越し到達可能。
- RAMクリアは別で0Gから。

### modeAfterReset
- 通常時に朝一専用長期モード・設定変更専用モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 音符メーターは内部CARRYOVER。

### stateAfterReset
- 通常/高確の内部状態は存在。
- 設定変更時: **UNVERIFIED_AFTER_RESEARCH**。当時主要解析が調査中で、後年単一資料の引継ぎ記述だけでは固定しない。
- 純電源OFF→ON: **CARRYOVER_SUPPORTED**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更しても前日の天井進捗と音符メーター内部値が消えないため、前日ハマリ/メーター蓄積台は朝一宵越し狙いが成立し得る。
- これは「設定変更専用の優遇抽選」ではなくCARRYOVER特性。
- 設定変更専用の短縮天井、高確優遇、CZ当選率優遇、専用モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 通常の設定変更で天井進捗・音符メーターを失う不利は確認されない。
- ただしホールがRAMクリアした場合はゲーム数・音符メーターが0になるため宵越し価値を失う。

### resetDetection
- 朝一の液晶G数0、音符メーター1個表示、学校ステージは設定変更/純電源OFF→ON双方で起こり得るため、単独では変更判別不可。
- リールガックンで設定変更を判別できる**可能性**がある当時実戦動画/解析は存在するが、停止形依存も指摘され、確定契約ではない。`POSSIBLE_GACKUN_NOT_DETERMINISTIC`。
- 宵越し777G付近でCZが発生するか等は内部G数保持/RAMクリア対策の事後推測材料になるが、設定変更そのものの判別とは別。

### numericResetData
- 設定変更後専用モード振り分け: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更専用短縮天井: NONE
- CARRYOVER対象の閾値: 777GでCZ、1000GでART
- 音符メーター: 内部前日値CARRYOVER、朝一表示1個
- 朝一設定変更専用一定G以内当選率/恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

## dataQualityNotes
- 導入日、型式/検定番号、機械割、canonicalボーナス/ART/CZ確率、約34G/50枚、ART純増、ボーナス獲得枚数は複数資料で照合。
- 設定変更でも天井G数と音符メーターを引き継ぐという特殊挙動は、2016年当時のすろぱちくえすと、pachislo-data、期待値見える化系、ちょんぼりすたで複数一致。
- 一撃の2016-10-03時点「天井/設定変更」ページは設定変更・電源OFF/ON項目を調査中のまま残しており、解析情報の成熟時差として保持。
- 設定変更時の内部通常/高確状態は十分な再探索後も複数高信頼で固定できずUNVERIFIED。
- 5号機クロニクルのBIG/REG/ART確率・ボーナス獲得表記はP-WORLD/一撃等のcanonical系列と大きく異なり、平均せずCONFLICT。

## conflicts
- `CONFLICT_5GOKI_BONUS_ART_BREAKDOWN`: 5号機クロニクルはBIG 1/399.6→1/327.7、REG 1/496.5→1/390.1、ボーナス合算1/221.4→1/178.1、ART 1/531.0→1/383.3を掲載。一方、P-WORLD/一撃/pachislo-dataはボーナス合算1/489→1/399、ART1/337→1/256で一致。定義または転記差を解消できないため双方保持。
- `CONFLICT_5GOKI_BASIC_PAYOUT_LABELS`: 5号機クロニクルはBIG約150枚/REG約50枚を掲載するが、P-WORLD/HAZUSE/ちょんぼりすた/pachislo-dataは同色約290枚/異色約180枚/特殊約30枚で一致。平均しない。

## sources
取得日: 2026-09-08

1. HAZUSE — パチスロ 戦姫絶唱シンフォギア
   - https://hazuse.com/machine/pachislot/5S1161/
   - 導入2016-08-22、SANKYO、型式パチスロ戦姫絶唱シンフォギアS、検定5S1161、天井、ボーナス仕様
   - reliability: ANALYSIS_HIGH_ARCHIVE
2. P-WORLD — パチスロ 戦姫絶唱シンフォギア
   - https://www.p-world.co.jp/machine/database/8085
   - 型式/検定、機械割、ボーナス合算、ART/CZ、純増、290/180/30枚
   - reliability: INDUSTRY_DB
3. 一撃 — パチスロ戦姫絶唱シンフォギア
   - https://1geki.jp/slot/s_symphogear/
   - 2016-08-22、機械割、ボーナス+ART、純増1.5枚/G、30G+α
   - reliability: ANALYSIS_HIGH
4. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_symphogear/3/
   - 777G CZ、1000G ART、2016-10-03時点の設定変更/電源OFF ON各項目は調査中
   - reliability: ANALYSIS_HIGH_CONTEMPORARY
5. すろぱちくえすと — 設定変更(リセット)挙動・恩恵・狙い目
   - https://www.slopachi-quest.com/article/symphogear-reset/
   - 2016-09-01、設定変更でも天井G数/音符メーター引継ぎ、液晶G数0、学校ステージ、RAMクリア時0、ガックン可能性
   - reliability: ANALYSIS_HIGH_CONTEMPORARY
6. ちょんぼりすた — 戦姫絶唱シンフォギア
   - https://chonborista.com/slot/sankyo-slot/21975/
   - 設定変更/電源OFF ONで天井引継ぎ、音符内部引継ぎ・表示0/1、電源OFF ON内部状態引継ぎ、基本スペック/ボーナス
   - reliability: ANALYSIS_HIGH
7. pachislo-data — 戦姫絶唱シンフォギア
   - https://pachislo-data.com/sankyo/26457
   - 2016-08-22、約34G/50枚、スペック、天井、設定変更でも天井/音符メーター引継ぎ
   - reliability: ANALYSIS_HIGH_CONTEMPORARY
8. K-Navi — パチスロ 戦姫絶唱シンフォギア
   - https://p-kn.com/slot/2547/
   - 2016-08-22、A+ART、純増約1.5枚/G、1セット30G
   - reliability: ANALYSIS_HIGH_ARCHIVE
9. 5号機クロニクル — SANKYO 5号機一覧
   - https://5goki.com/sankyo
   - 機械割は一致、ボーナス/ART確率と獲得枚数はcanonical系列と競合
   - reliability: RETROSPECTIVE_DB_CONFLICT
10. 期待値見える化 — シンフォギア天井・朝一リセット解析
   - https://slotjin.com/zone/symphogear/
   - 約34G/50枚、777/1000G、設定変更でもG数非リセット
   - reliability: ANALYSIS_SINGLE

## missingFields
- setting-change normal/high internal state: UNVERIFIED_AFTER_RESEARCH
- transient RT/ART state across setting change / pure power cycle: UNVERIFIED_AFTER_RESEARCH
- published setting-change-only mode distribution / early-hit rate: NONE_CONFIRMED_AFTER_RESEARCH
