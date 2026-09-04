# フルメタル・パニック！TSR

machineName: フルメタル・パニック！TSR
manufacturer: タイヨーエレック
releaseDate: 2012-04-02
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviが2012-04-02ホール導入開始と掲載。P-WORLDは2012年04月表記。前レコードのモンスターハンターはHAZUSEのみ04/02表記だが既登録のため重複しない。
generation: 5号機
systemType: A+ART / ボーナス+ゲーム数上乗せART
formalModelName: フルメタル・パニック！TSR M
approvalNumber: 1S0797
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 2 | 98.5% |
| 3 | 100.6% |
| 4 | 104.3% |
| 5 | 108.4% |
| 6 | 111.6% |

reliability: ANALYSIS_HIGH
notes: P-WORLDと5号機クロニクルで同一系列を照合。

## initialHitBySetting

### ボーナス

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/414.8 | 1/574.9 | 1/240.9 |
| 2 | 1/404.5 | 1/555.4 | 1/234.1 |
| 3 | 1/394.8 | 1/537.2 | 1/227.6 |
| 4 | 1/385.5 | 1/520.1 | 1/221.4 |
| 5 | 1/376.6 | 1/504.1 | 1/215.6 |
| 6 | 1/368.2 | 1/489.1 | 1/210.1 |

### ボーナス+ART合算

| 設定 | ボーナス+ART合算 |
|---|---:|
| 1 | 1/155.8 |
| 2 | 1/144.3 |
| 3 | 1/144.2 |
| 4 | 1/130.1 |
| 5 | 1/125.3 |
| 6 | 1/112.5 |

reliability: ANALYSIS_HIGH
notes: P-WORLD直接表。K-Naviのボーナス合算も一致。ART単独初当たりの比較可能な設定別直接表は今回確定できず、合算値を主要初当たり指標として保持。

## baseGamesPer50

value: 約32G/50枚
sourceDefinition: パチマガスロマガ掲載「1000円あたりのゲーム数 約32G」。
reliability: ANALYSIS_HIGH

## netIncrease

value: 約+1.5枚/G
reliability: ANALYSIS_HIGH
notes: K-NaviとP-WORLDで一致。

## basicPayout

- BIG: 純増207枚
- REG: 純増50枚
- ART「AS-MODE」: 1セット50G+α
- ARTゲーム数上乗せ: 1回10〜300G
- 「ラムダドライバモード」: 3/5/7/10G継続、毎ゲーム5〜300G上乗せ

reliability: ANALYSIS_HIGH

## modeSpecificMinimumData

- ART「AS-MODE」は1セット50G+α、純増約+1.5枚/G。
- 通常時は内部高確モードを持ち、レア小役等からART抽選。
- ART終了後32Gは引き戻し抽選のチャンス状態。
- 通常天井はボーナス間1200G。P-WORLDは1200G消化でART突入と掲載。
- 当時天井狙い資料では1200G消化で天井状態（超高確率モード）へ移行し次回ボーナスまで継続との記述があり、発動表現に差があるため天井処理の完全再現はせず概要のみ保持。

reliability: ANALYSIS_HIGH_FOR_CORE__ANALYSIS_SINGLE_FOR_CEILING_STATE_DESCRIPTION

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。K-Navi本機ページに「朝イチはココに注目」専用解析項目が存在することは確認したが、当該本文を現環境で取得できず、設定変更時の天井・状態処理を直接確定できない。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。当時天井狙い資料も本機の宵越しを「？」としており、据え置き時の1200G進捗保持を推測で補完しない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみの天井・内部状態・ART関連状態処理を本機固有資料で確定できず。
gameCounterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時にボーナス間1200G天井カウンタがCLEAR/RETAINのどちらかを明記する直接本文を確定できず。
ceilingAfterReset: 通常天井1200G。設定変更専用の短縮天井はNONE_CONFIRMED_AFTER_RESEARCH。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時に内部高確モードが存在すること自体は確認済みだが、設定変更時の再抽選/引継ぎや朝一専用モードは確定できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。高確状態の設定変更時振り分けは確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用のART確定、短縮天井、高確保証等の直接根拠を確定できず。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。天井進捗消失の有無自体が未確定のため不利要素を推測しない。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶ステージ等による本機固有の変更判別を直接確認できず。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData: normalCeiling=1200G; shortenedCeiling=NONE_CONFIRMED; settingChangeModeDistribution=UNVERIFIED; morningHitRate=UNVERIFIED

notes:
- 「フルメタル・パニック！TSR / フルメタルパニックTSR / フルメタ / TSR M / タイヨーエレック / 1S0797」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 高確 / モード / ガックン」を組み替えて再探索。
- K-Naviに本機専用「朝イチはココに注目」が存在することは確認したが、本文URLはキャッシュ取得不能。検索インデックスにも具体処理が露出しなかった。
- P-WORLD、K-Navi、パチマガスロマガ、旧天井狙い資料、5号機回顧DBを横断。旧天井資料は本機の宵越しを「？」としており、一般的な5号機仕様や同メーカー他機種から補完しない。

resetQaReliability: UNVERIFIED_FOR_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_DETECTION__ANALYSIS_HIGH_FOR_NORMAL_CEILING

## conflicts

- ceilingDescription: P-WORLDは「ボーナス間1200ゲーム消化でARTへ突入」、当時天井狙い資料は「1200ゲーム消化で天井状態突入、超高確率モードで次回ボーナス成立まで継続」と表現。平均・統合による完全再現はせず両記述を保持。

## missingFields

- ART standalone initial hit by setting
- settingChangeBehavior exact handling
- carryOverBehavior exact handling
- powerCycleBehavior exact handling
- gameCounterReset CLEAR/RETAIN
- mode/state distribution after setting change
- resetDetection
- public morning numeric values

## sources

取得日: 2026-09-05

1. K-Navi「フルメタル・パニック！TSR」 https://p-kn.com/slot/1598/
   - 2012-04-02ホール導入開始、ボーナス合算、ART 50G+α、純増約1.5枚/G、ラムダドライバモード概要、朝イチ専用解析項目の存在。
   - reliability: ANALYSIS_HIGH
2. P-WORLD「フルメタル・パニック!TSR」 https://www.p-world.co.jp/machine/database/6656
   - 型式名、検定番号、設定別BIG/REG/ボーナス合算/ボーナス+ART合算、機械割、BIG207枚、REG50枚、ART性能、1200G天井。
   - reliability: ANALYSIS_HIGH / OLD_DATABASE
3. パチマガスロマガ「パチスロフルメタル・パニック!TSR 小役確率」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/12/c.php
   - 1000円あたり約32G。
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル「タイヨーエレック 5号機全機種一覧」 https://5goki.com/yaiyoelec
   - 2012/4、機械割96.5/98.5/100.6/104.3/108.4/111.6%。
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE_DATABASE
5. 天井ハイエナ生活「天井ハイエナ期待値リスト は行」 https://macerate.seesaa.net/article/226312110.html
   - 本機はボーナス間1200Gで天井状態、宵越しは「？」表記。当時系二次資料として設定変更欠損判断の補助にのみ使用。
   - reliability: ANALYSIS_SINGLE / PERIOD_SECONDARY
