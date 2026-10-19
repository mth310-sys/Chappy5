# BASTARD!!－暗黒の破壊神－

machineName: BASTARD!!－暗黒の破壊神－
manufacturer: DAXEL
releaseDate: 2012-11-05
releaseDatePrecision: exact_day
releaseDateNotes: パチビーが導入日2012-11-05と明記。2012年当時攻略更新も11月上旬から開始しており整合。型式名はBASTARD!!DG。
generation: 5号機
systemType: ART特化 / 規定ゲーム数管理 / 32G周期抽選 / 天井あり / プレミアムボーナス
modelName: BASTARD!!DG
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.4% |
| 3 | 100.5% |
| 4 | 104.6% |
| 5 | 107.4% |
| 6 | 111.1% |

- K-Naviと2012年当時天井攻略資料で同一系列を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART出現確率（99G以内を含むトータル系列）

| 設定 | ART |
|---|---:|
| 1 | 1/253.4 |
| 2 | 1/227.0 |
| 3 | 1/222.9 |
| 4 | 1/195.5 |
| 5 | 1/197.4 |
| 6 | 1/142.7 |

- K-Navi、P-WORLD、2012年当時攻略資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### 99G以内を除くART初当り

| 設定 | ART初当り（99G以内除外） |
|---|---:|
| 1 | 1/417.6 |
| 2 | 1/373.5 |
| 3 | 1/397.8 |
| 4 | 1/350.7 |
| 5 | 1/374.2 |
| 6 | 1/248.2 |

- P-WORLDと当時攻略資料で同一定義を確認。
- トータルART系列と定義が異なるため混ぜずに併記。

### オーバードライブ

- 全設定共通 **1/16384**。
- P-WORLD / K-Naviで一致。

## baseGamesPer50

- **30.10～30.43G/1000円（50枚）**。
- パチマガスロマガ小役確率ページの直接値。
- confidence: ANALYSIS_SINGLE_DIRECT。

## netIncrease

- ART「デビルゲーム」: **約+2.0枚/G**。
- パチビー、P-WORLD、K-Navi、パチマガスロマガで整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- プレミアムボーナス「オーバードライブ」: **約18枚**。
- ART突入時は上乗せゾーン「ウルティマデュエル」から開始し、そこで獲得したG数がART「デビルゲーム」の初期G数となるため、固定1セットG数を物差し値として置かない。
- ウルティマデュエルは最低3G保障、消化中毎ゲームART G数を上乗せ。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ART当選契機の主軸は **規定ゲーム数 / レア役 / 最大32G周期抽選**。
- 通常時モード: 通常A / 通常B / 天国A / 天国B、加えて設定変更時の専用挙動が公開される。
- 複数資料で整合する最大規定G: **通常A 999G / 通常B 1111G / 天国A 99G / 天国B 99G**。
- 最大天井は **1111G**。
- 900G以降のART当選では魔ジン化ステージ移行率50%へ上昇、1000G超ハマリは通常Bが確定するという当時解析あり。
- パチマガスロマガ取得本文の表には通常A 1999G / 天国A・B 1199Gと表示されるが、同ページ本文自身が「天国99G以内」「最大天井1111G」と説明し、P-WORLD/当時解析も999/1111/99/99で一致するため、抽出・表示異常候補としてCONFLICT_NOTEに分離。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_999_1111_99_99

## resetBehavior

schemaVersion: v0.7
resetQaStatus: SUBSTANTIAL_RESET_QA
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **CONFIRMED_REGULATION_GAME_RESET_AND_RESELECT__SETTING_CHANGE_SPECIFIC_MODE__SETTING1_APPROX20PCT_WITHIN99G**
- 2012年当時攻略資料は設定変更後について「規定ゲーム数が再セット」と明記し、宵越し×と整理。
- P-WORLD / パチマガスロマガは設定変更時に専用挙動があり、**設定1でも約20%で99G以内にART当選**すると明記。
- 設定変更時の全設定別振り分けまでは今回回収できず。
- confidence: CONTEMPORARY_ANALYSIS_PLUS_MULTI_SOURCE

### carryOverBehavior

- **PARTIAL__SETTING_CHANGE_BREAKS_PREVIOUS_REGULATION_GAME_PROGRESS__PURE_STAY_FULL_CONTRACT_UNVERIFIED**
- 当時資料の「宵越し×」および規定G再セットから、設定変更時は前日規定G進捗を使用できないことを確認。
- 純据え置き時の規定G・32G周期・通常A/B/天国A/B・低確/高確の完全保持契約は、本機固有の直接資料を十分再探索しても網羅できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 「BASTARD!!DG / DAXEL / バスタード」と「電源OFF ON / 電断 / 電源オンオフ / 朝一 / 据え置き」を組み替え、P-WORLD、必勝本、パチマガスロマガ、当時天井資料、旧実機DBまで横断したが、設定変更を伴わない単純電源OFF→ON時の規定G、32G周期、モード、内部状態の本機固有契約を確定できず。

### gameCounterReset

- **CONFIRMED_CLEAR_AND_RESELECT_REGULATION_GAME_ON_SETTING_CHANGE**
- 設定変更後は規定ゲーム数を再セット。
- 当時資料は宵越し×。
- confidence: CONTEMPORARY_ANALYSIS_DIRECT

### ceilingAfterReset

- **SETTING_CHANGE_SPECIFIC_BEHAVIOR__APPROX20PCT_SETTING1_ART_WITHIN99G__FULL_DISTRIBUTION_UNVERIFIED**
- 設定変更後は専用挙動があり、設定1でも約20%で99G以内ART当選。
- 通常時の最大天井1111Gに対し、朝一99G以内の明確な当選チャンスが存在する。
- 「設定変更後は必ず99G天井」ではないため、そのようには記録しない。

### modeAfterReset

- **SETTING_CHANGE_SPECIFIC_MODE_OR_RESET_SELECTION_CONFIRMED__SETTING1_APPROX20PCT_WITHIN99G__FULL_TABLE_UNVERIFIED**
- P-WORLDは「設定変更モード」として設定変更時の専用挙動を説明。
- 設定1で約20%が99G以内ART。
- 設定2～6を含む全振り分け、通常A/B/天国A/Bとの厳密な対応表は検索語・資料系統を変えて再探索しても今回確定できず **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- **UNVERIFIED_AFTER_RESEARCH**
- 通常時に低確/高確状態が存在することはパチマガスロマガで確認できるが、設定変更時に低確/高確をどの割合で再抽選・初期化・保持するかの本機固有直接値は十分再探索後も確定できず。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **SETTING1_APPROX20PCT_ART_WITHIN99G**
- 設定1でも設定変更後 **約20%で99G以内ART当選**。
- 朝一客の狙いに直結する公開数値として保存。

### resetPenalties

- **PREVIOUS_DAY_REGULATION_GAME_PROGRESS_LOST_ON_SETTING_CHANGE**
- 設定変更で規定ゲーム数を再セットするため、前日のハマリ進捗を使った宵越し狙いには不利。

### resetDetection

- **UNVERIFIED_AFTER_RESEARCH**
- 本機固有のガックン、液晶初期ステージ、32G周期表示、前日最終状態との差等で設定変更/据え置きを確定・高信頼推測できる公開契約は、当時解析・旧DB・回顧資料まで再探索しても今回確定できず。
- 99G以内ARTはリセット恩恵だが、通常天国でも99G以内ARTがあり得るため、それ単独を変更確定判別とはしない。

### publicMorningNumbers

- **CONFIRMED_SETTING1_APPROX20PCT_ART_WITHIN99G**
- 設定1: **設定変更後 約20%で99G以内ART**。
- 設定2～6の同一指標は今回確定できず **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- normalModeACeiling: 999G
- normalModeBCeiling: 1111G
- heavenModeACeiling: 99G
- heavenModeBCeiling: 99G
- normalMaximumCeiling: 1111G
- settingChangeRegulationGame: RESET_AND_RESELECT
- setting1ResetWithin99GArtPct: approximately_20pct
- setting2to6ResetWithin99GArtPct: UNVERIFIED_AFTER_RESEARCH
- powerCycleInternalContract: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: CONTEMPORARY_ANALYSIS_PLUS_MULTI_SOURCE_FOR_REGULATION_GAME_RESET_AND_SETTING1_20PCT_WITHIN99G__ANALYSIS_HIGH_MULTI_SOURCE_CORE__UNVERIFIED_FOR_POWER_CYCLE_FULL_STAY_STATE_AND_RESET_DETECTION

## missingFields

- 検定番号。
- 設定変更時の設定2～6を含む99G以内ART率/専用モード全振り分け。
- 設定変更時の低確/高確状態の具体的処理・振り分け。
- 純据え置き時の規定G/32G周期/モード/状態の完全契約。
- 単純電源OFF→ON時の規定G/周期/モード/状態契約。
- 本機固有の設定変更判別（ガックン・液晶等）。
- 30.10～30.43G/千円の独立精密照合。

## conflicts

- ceiling table extraction/display: パチマガスロマガ取得本文のモード別表では通常A 1999G、天国A/B 1199Gと表示される一方、同ページ本文が「天国99G以内」「最大天井1111G」と明記。P-WORLDと2012年当時攻略資料も通常A999G / 通常B1111G / 天国A99G / 天国B99Gで一致するため、本DBでは後者を採用し、前者を **CONFLICT_NOTE_SOURCE_INTERNAL_DISPLAY_OR_EXTRACTION_ANOMALY** として保持。
- initialHit definition: P-WORLDは「ART初当り」1/417.6～1/248.2と「ART当選」1/253.4～1/142.7を別系列で掲載。当時資料から前者は99G以内除外、後者はトータルART出現系列と定義差を確認できるため、数値競合ではなく定義分離して保存。

## sources

取得日: 2026-09-05

1. パチビー BASTARD!!－暗黒の破壊神－
   - https://www.pachibee.jp/movies/index/8664
   - 導入日2012-11-05、DAXEL、5号機ART、天井あり、純増約2.0枚/G。
2. P-WORLD BASTARD!!
   - https://www.p-world.co.jp/machine/database/6884
   - ART基本性能、設定別ART2系列、オーバードライブ1/16384、通常/天国モード、設定変更時設定1約20%で99G以内ART。
3. K-Navi BASTARD!!-暗黒の破壊神-
   - https://p-kn.com/slot/1739/
   - 設定別ART出現確率、機械割、純増約2.0枚/G、基本ゲーム性。
4. パチマガスロマガ 基本情報
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/03/a.php
   - ART特化型、純増2.0枚/G、32G周期/規定G/レア役、オーバードライブ約18枚。
5. パチマガスロマガ ゲーム性まるわかり解説
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/03/01.php
   - 最大32G周期、低確/高確、天国99G以内、設定1でも設定変更後20%で99G以内ART、最大天井1111G。取得本文の一部モード天井表には内部不整合あり。
6. パチマガスロマガ 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/03/c.php
   - 1000円あたり30.10～30.43G。
7. パチ＆スロ必勝本 BASTARD!!-暗黒の破壊神-
   - https://p.hisshobon.jp/machine/2103
   - 当時更新履歴、天井&設定変更・モード/状態解析ページの存在、基本構造。
8. パチ＆スロ必勝本 モード移行率
   - https://p.hisshobon.jp/machine/2103/1/37098
   - 通常A/B・天国A/Bのモード構造確認。
9. 天井ハイエナ生活「BASTARD!!（バスタード）天井ハイエナ期待値・解析攻略」2012年当時
   - https://macerate.seesaa.net/article/300344087.html
   - 宵越し×、通常A999G/B1111G/天国A・B99G、設定変更後規定G再セット、設定1約20%で99G以内、設定別ART/機械割照合。
10. 中一商事 DAXEL BASTARD!!
   - https://www.nakaiti.com/html/Daxel003.html
   - 型式名BASTARD!!DG、5号機ART、ウルティマデュエル概要。
11. pachinko's blog DAXEL「パチスロ BASTARD!! 暗黒の破壊神」の筐体＆情報
   - https://pachinko.hatenablog.jp/entry/2012/11/bastard-ankoku-no-hakaishin
   - 型式名BASTARD!! DG、2012年11月リリース、純増約2.0枚/Gの後年整理照合。
