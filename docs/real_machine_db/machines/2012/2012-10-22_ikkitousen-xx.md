# パチスロ 一騎当千XX

machineName: パチスロ 一騎当千XX
manufacturer: バルテック
releaseDate: 2012-10-22
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviがホール導入開始2012-10-22、当時解析Wikiも2012-10-22～と明記。後年整理資料には2012-09リリース表記もあるため、製品リリース月とホール導入日の定義差として保持し、本DB時系列キーは具体的ホール導入日の2012-10-22を採用。
generation: 5号機
systemType: A+ART / CZ / 天井あり / ゲーム数上乗せART
modelName: 一騎当千XX 3
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.4% |
| 2 | 98.7% |
| 3 | 99.4% |
| 4 | 104.4% |
| 5 | 108.8% |
| 6 | 113.3% |

- P-WORLD掲載値。
- 設定別BIG/REG/ART初当りと整合する同一機種ページの市場掲載値として採用。
- confidence: ANALYSIS_HIGH_DIRECT_DATABASE

## initialHitBySetting

### ART「一騎当千」初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/415.7 |
| 2 | 1/347.0 |
| 3 | 1/432.7 |
| 4 | 1/327.4 |
| 5 | 1/369.0 |
| 6 | 1/269.1 |

### BIG

| 設定 | BIG |
|---|---:|
| 1 | 1/458.2 |
| 2 | 1/445.8 |
| 3 | 1/434.0 |
| 4 | 1/422.8 |
| 5 | 1/414.8 |
| 6 | 1/402.1 |

### REG

| 設定 | REG |
|---|---:|
| 1 | 1/655.3 |
| 2 | 1/630.0 |
| 3 | 1/606.8 |
| 4 | 1/585.1 |
| 5 | 1/564.9 |
| 6 | 1/546.1 |

### ボーナス合算

| 設定 | BIG+REG |
|---|---:|
| 1 | 1/269.7 |
| 2 | 1/261.1 |
| 3 | 1/253.0 |
| 4 | 1/245.4 |
| 5 | 1/239.2 |
| 6 | 1/231.6 |

- BIG/REGはP-WORLDとK-Naviで一致する範囲を照合。
- ART初当りはP-WORLDと2012年当時天井解析の掲載値（丸め1/415, 1/347, 1/432, 1/327, 1/369, 1/269）が整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「一騎当千XX / 一騎当千XX 3 / バルテック」と「50枚あたり / 1000円 / 千円 / ベース / コイン持ち / 回転」を組み替え、P-WORLD、K-Navi、パチマガスロマガ、当時攻略記事、古い解析DBを横断したが、比較可能な直接数値を確定できず。
- 推測値は採用しない。

## netIncrease

- ART「一騎当千」: **約+1.5枚/G**。
- P-WORLD、パチマガスロマガ、当時記事で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約207枚**（275枚超払い出しで終了）。
- REG: **約54枚**（71枚超払い出しで終了）。
- ART「一騎当千」: **1セット40G+α**。
- 上乗せ特化ゾーン「覇王乱舞」: **最低5G+α、最大95%継続**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時には低確/高確の内部モードが存在。
- CZは「覚醒ZONE」「千人斬り」等を経由。千人斬りは8G。
- 通常天井: **ボーナス間1500G+α**。1500G到達後のリプレイ/ベル/ハズレ等を契機にART突入が確定する当時解析あり。
- 天井ARTは「一騎当千」+高継続率「覇王乱舞」とされる。
- CZ失敗回数に関する別天井も当時資料で確認されるが、規定回数の詳細は公開確認できず、物差し用途では存在のみ保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_1500G_CEILING

## resetBehavior

schemaVersion: v0.7
resetQaStatus: SUBSTANTIAL_RESET_QA
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **CONFIRMED_CLEAR_CEILING_COUNTER__RESELECT_INTERNAL_MODE__RESET_MORNING_DISPLAY_STATE**
- 2012年当時の天井攻略資料は、設定変更後に天井消化ゲーム数をクリア、内部モード移行抽選を実施、液晶左上の勾玉を白から開始すると明記。
- 液晶ステージは成都学園または馬超ステージから選択。
- confidence: CONTEMPORARY_ANALYSIS_DIRECT

### carryOverBehavior

- **PARTIALLY_CONFIRMED_FROM_POWER_CYCLE_COMPARISON**
- 当時資料は「電源ON/OFF時は勾玉を引き継ぐ」と明記し、設定変更時の白玉初期化と対比している。
- 純据え置き時の1500G天井進捗、内部低確/高確、CZ失敗回数天井まで含む完全契約は直接資料を確定できず、そこは **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- **CONFIRMED_PARTIAL_DISPLAY_CARRYOVER__OTHER_INTERNAL_CONTRACT_UNVERIFIED**
- 単純電源OFF→ONでは液晶左上の勾玉表示を引き継ぐ。
- 開始液晶ステージは設定変更時と同様に成都学園or馬超ステージから選択されるため、ステージ単独では変更判別に使いにくい。
- 天井カウンタ、内部モード、CZ失敗回数の単純電断時完全契約は直接記述を確定できず一般挙動から推測しない。

### gameCounterReset

- **CONFIRMED_CLEAR_ON_SETTING_CHANGE**
- 設定変更でボーナス間1500G天井までの消化ゲーム数をクリア。
- 当時天井狙い資料も「宵越し×」として整理。
- confidence: CONTEMPORARY_ANALYSIS_MULTI_SOURCE

### ceilingAfterReset

- **NORMAL_1500G_PLUS_ALPHA_CEILING_RESTARTS__NO_RESET_SPECIFIC_SHORTENING_CONFIRMED**
- 設定変更で天井進捗CLEAR後、通常の1500G+α天井を再スタート。
- 設定変更専用の短縮天井値は、十分な再探索後も確認できず **UNVERIFIED_AFTER_RESEARCH**。

### modeAfterReset

- **CONFIRMED_RESELECTION__DISTRIBUTION_UNVERIFIED**
- 設定変更時に内部モード移行抽選を行うとの当時記述あり。
- 「高確率スタートに期待」とされるが、設定変更専用のモード振り分け数値は確認できず。

### stateAfterReset

- **CONFIRMED_RESELECTION_CONCEPT__NUMERIC_DISTRIBUTION_UNVERIFIED**
- 通常時に低確/高確が存在し、設定変更時に内部モード移行抽選。
- 高確開始率等の比較可能な公開数値は今回確認できず。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **POSSIBLE_HIGH_STATE_START_NO_PUBLIC_RATE__DISPLAY_RESET_CAN_AID_MORNING_INFERENCE**
- 設定変更時は内部モード再抽選により高確スタートの可能性があると当時資料が記載。
- 朝一専用短縮天井や確定CZ等の具体恩恵は確認できず。

### resetPenalties

- **PREVIOUS_1500G_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**
- 前日のボーナス間ハマリ進捗は設定変更で消えるため、宵越し天井狙いには不利。

### resetDetection

- **MAGATAMA_DISPLAY_CAN_AID_INFERENCE__STAGE_ALONE_NOT_USEFUL**
- 設定変更時は液晶左上の勾玉が白から開始。
- 単純電源OFF→ONでは勾玉を引き継ぐため、前日状態を把握できる状況では変更推測材料になる。
- 一方、液晶ステージは設定変更時も電源ON/OFF時も成都学園or馬超ステージから選択されるため、ステージ単独では変更判別に使えない。
- 本機固有リールガックンは検索語を変えて再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け、高確開始率、朝一特定G以内ART/CZ当選率などの比較可能な公開数値は今回確認できず。

### numericResetData

- normalBonusCeiling: 1500G+alpha
- settingChangeCeilingCounter: CLEAR
- resetSpecificShortCeiling: UNVERIFIED_AFTER_RESEARCH
- settingChangeModeDistributionPct: UNVERIFIED_AFTER_RESEARCH
- settingChangeHighStatePct: UNVERIFIED_AFTER_RESEARCH
- morningHitRatePct: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: CONTEMPORARY_ANALYSIS_DIRECT_FOR_COUNTER_MODE_AND_MAGATAMA__ANALYSIS_HIGH_MULTI_SOURCE_CORE__UNVERIFIED_FOR_FULL_POWER_CYCLE_INTERNAL_CONTRACT

## missingFields

- 50枚あたりゲーム数/ベース。
- 検定番号。
- 純据え置き時の天井進捗・内部状態・CZ失敗回数の完全な本機固有契約。
- 単純電源OFF→ON時の天井カウンタ/内部モード/CZ失敗回数の完全契約。
- 設定変更時の内部モード/高確の公開振り分け数値。
- 本機固有リールガックン。

## conflicts

- release timing: K-Navi/当時解析Wikiはホール導入開始 **2012-10-22**。後年機種整理資料は「2012.09リリース」とする。ホール導入日と製品リリース月の定義差として両方保持し、時系列キーは具体的ホール導入日の10/22を採用。

## sources

取得日: 2026-09-05

1. K-Navi パチスロ 一騎当千XX
   - https://p-kn.com/slot/1714/
   - ホール導入開始2012-10-22、設定別BIG/REG等。
2. P-WORLD パチスロ 一騎当千XX
   - https://www.p-world.co.jp/machine/database/6846
   - 5号機A+ART/CZ/天井、BIG/REG/ART初当り、機械割、BIG207枚/REG54枚、ART40G+α/純増1.5枚、1500G+α天井。
3. パチマガスロマガ 一騎当千XX スペック
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/56/a.php
   - ART純増1.5枚/G、40G+α、BIG約207枚、REG約54枚、覇王乱舞最低5G/MAX95%。
4. パチマガスロマガ ART突入フロー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/56/l.php
   - 低確/高確内部モード、ART40G+α、純増1.5枚/G、覇王乱舞仕様。
5. パチンコ・パチスロ.com解析情報@ 一騎当千XX
   - https://w.atwiki.jp/pachikaisekidata/pages/387.html
   - 導入開始2012-10-22～、当時解析ページ群の存在。
6. 天井ハイエナ生活 天井期待値リスト（2012年当時更新）
   - https://macerate.seesaa.net/article/305411305.html
   - 1500G+α天井、ART仕様、設定変更で天井Gクリア、内部モード再抽選、勾玉白開始、電源ON/OFFでは勾玉引継ぎ、開始ステージ挙動、ART初当り丸め値。
7. 天井ハイエナ生活 一騎当千XX項目
   - https://macerate.seesaa.net/article/298605689.html
   - ボーナス間1500G+α天井、宵越し×、CZ失敗回数天井の存在。
8. pachinko’s blog バルテック「パチスロ 一騎当千XX」の筺体＆情報
   - https://pachinko.hatenablog.jp/entry/2012/09/ikki-tousen-XX
   - 型式名「一騎当千XX 3」、2012年9月リリース、ボーナス+ART、純増約1.5枚/G。
