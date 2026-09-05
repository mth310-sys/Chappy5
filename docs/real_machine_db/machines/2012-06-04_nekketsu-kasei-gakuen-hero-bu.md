# パチスロ 熱血！華成学園ヒーロー部

machineName: パチスロ 熱血！華成学園ヒーロー部
manufacturer: ディ・ライト / D-light
releaseDate: 2012-06-04
releaseDatePrecision: exact_day_period_source
releaseDateNotes: 2012-06-05公開の当時新台一覧が導入開始日2012-06-04と明記。P-WORLDは導入開始を2012年05月と月単位表示するため、日付精度差を保持し、時系列キーは当時導入一覧の2012-06-04を採用。
generation: 5号機
systemType: A+ART / ボーナス+ゲーム数上乗せ&セットストックART
formalModelName: 熱血！華成学園～正義参上～XF
approvalNumber: 1S1274
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_PARTIAL_RESET_DATA

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.91% |
| 2 | 98.63% |
| 3 | 100.58% |
| 4 | 104.29% |
| 5 | 106.61% |
| 6 | 111.79% |

reliability: ANALYSIS_HIGH_PERIOD_SOURCE_CROSSCHECKED
notes: パチマガスロマガ直接表。2012-06-05当時新台一覧の95.9/98.6/100.6/104.3/106.6/111.8%と丸め一致。

## initialHitBySetting

| 設定 | BIG合算 | REG合算 | ART初当り | ボーナス+ART合算 |
|---|---:|---:|---:|---:|
| 1 | 1/434.0 | 1/618.3 | 1/490.8 | 1/185.6 |
| 2 | 1/420.1 | 1/595.8 | 1/450.8 | 1/175.7 |
| 3 | 1/407.1 | 1/574.9 | 1/444.3 | 1/171.2 |
| 4 | 1/394.8 | 1/555.4 | 1/389.5 | 1/159.3 |
| 5 | 1/370.3 | 1/546.1 | 1/382.1 | 1/153.8 |
| 6 | 1/374.5 | 1/512.0 | 1/290.0 | 1/134.7 |

reliability: ANALYSIS_HIGH_PERIOD_SOURCE_CROSSCHECKED
notes: P-WORLDとパチマガスロマガが一致。当時新台一覧もBIG合算、REG合算、ボーナス+ART合算で一致（設定2 BIGのみ1/420.0表記の丸め差）。青BIG/赤BIG/PB個別値は完全再現用詳細のため主表では省略。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED_AFTER_RESEARCH
notes: 機種名の全角/半角・「熱血」「華成学園」「正義参上」・型式名・D-lightを用い、「50枚」「1000円」「ベース」「コイン持ち」を組み替え、P-WORLD、パチマガスロマガ、当時新台一覧、中古実機DB、後年一覧を横断したが直接比較可能値を確定できず。

## netIncrease

value: 約1.4枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLD、A-SLOT、2012-06-05当時新台一覧で一致。

## basicPayout

- 青7BIG: 約301枚。
- 赤7BIG: 約203枚。
- REG: 約56枚。
- プレミアムボーナス: 約56枚、成立時ART確定扱い。
- ART「バーニングダッシュ」: 1セット50G+α、約1.4枚/G、ゲーム数上乗せ+セットストック型。
- 「覚醒ラッシュ」: 1セット5G、正義ロゴ揃いごとに100G上乗せ、最大500G上乗せ可能という公開説明あり。

reliability: ANALYSIS_HIGH_PERIOD_SOURCE_CROSSCHECKED

## modeSpecificMinimumData

- 通常時にはART高確等の内部状態が存在し、液晶ステージで示唆。
- 天井: ボーナス間1200G消化後、約30Gの前兆を経由してART 5or7セットへ突入。
- ART初当り: 1/490.8〜1/290.0（設定1〜6）。
- 通常時の全状態移行率、ART内部上乗せ詳細等は物差し用途外。

reliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_CEILING_AND_SYSTEM

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガ本機専用ページに「朝イチ・設定変更」攻略項目が存在することは確認したが、検索取得では具体本文を安全に回収できず。設定変更で天井G数、ART高確状態、ARTストック等がどのように処理されるかを直接確定できないため推測補完しない。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。純据え置き時にボーナス間天井1200Gの進捗、高確状態、ART関連状態が引き継がれるかを本機固有直接資料で確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない単純電源OFF→ON時の天井進捗・内部状態・表示/出目の契約を確定できず。
gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常天井がボーナス間1200Gであることは確定するが、設定変更時CLEAR/RETAINを直接示す本機固有本文を取得できず。
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更専用の短縮/延長天井、または通常1200G据え置きの直接根拠を確定できず。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時にART高確等の内部状態が存在することは確認したが、設定変更時の再抽選/固定移行/引継ぎは未確定。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。ARTストック、高確等の設定変更時処理を確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの短縮天井、ART確定、朝一専用高確保証等の公開恩恵を確認できず。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更による天井進捗消失等を直接確定できないため、不利を推定しない。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶ステージ、表示等による本機固有の変更/据え置き判別契約を確定できず。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時モード振り分け、朝一特定G以内当選率、短縮天井G数等の比較可能な公開朝一数値を確認できず。
numericResetData: none

notes:
- 「パチスロ 熱血！華成学園ヒーロー部 / 熱血!華成学園ヒーロー部 / 華成学園 / 熱血 / 熱血！華成学園～正義参上～XF / D-light」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1200G / 高確 / モード / 状態 / ガックン / 50枚 / ベース」を組み替えて再探索。
- P-WORLD、当時パチマガスロマガ、2012-06-05当時新台一覧、A-SLOT、後年検定回顧資料を横断。
- パチマガスロマガに「朝イチ・設定変更」項目が存在するだけでは内容を推定せず、本文不取得項目はUNVERIFIED_AFTER_RESEARCHのまま保存。

resetQaReliability: ANALYSIS_HIGH_FOR_SYSTEM_AND_CEILING__UNVERIFIED_AFTER_RESEARCH_FOR_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_COUNTER_MODE_STATE_AND_DETECTION

## conflicts

- releaseDate: 2012-06-05当時新台一覧=導入開始2012-06-04。P-WORLD=導入開始2012年05月。平均せず、当時の日付明示資料を時系列キーに採用しP-WORLD月表示を資料差として保持。
- 機械割はパチマガ精密値と当時新台一覧丸め値の差のみで、実質一致として扱う。

## missingFields

- 50枚あたりゲーム数/ベース
- 設定変更時の天井カウンタCLEAR/RETAIN
- 純据え置き時の天井/状態引継ぎ
- 単純電源OFF→ON時の挙動
- 設定変更時の内部モード/状態/ARTストック処理
- ガックン/初期出目/表示等の具体的変更判別
- 設定変更専用の公開朝一数値

## sources

取得日: 2026-09-05

1. P-WORLD「パチスロ 熱血!華成学園ヒーロー部」 https://www.p-world.co.jp/machine/database/6714
   - D-light、5号機ART、型式名「熱血！華成学園～正義参上～XF」、検定番号1S1274、機械割95.91〜111.79%、設定別ボーナス/ART、各ボーナス獲得枚数、ART 50G+α/約1.4枚G、天井1200G+前兆→5or7セット。
   - reliability: DATABASE_HIGH / ANALYSIS_HIGH
2. パチマガスロマガ「ボーナス確率・PAYOUT」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/01/h.php
   - 青BIG/赤BIG/BIG合成/REG/PB/REG合成/ボーナス合成/ART、PAYOUT精密値。
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
3. パチマガスロマガ 機種トップ https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/01/d-light_slot_01.php
   - 本機専用解析メニューに「天井・ヤメ時」「朝イチ・設定変更」が存在。
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE; RESET_BODY_NOT_RETRIEVED
4. 2012-06-05当時「今週のパチスロ新台情報 6/4導入開始」 https://macerate.seesaa.net/article/273495238.html
   - 導入開始2012-06-04、BIG/REG/ART+ボーナス合算/機械割、獲得枚数、ART 50G・約1.4枚/G。
   - reliability: PERIOD_SECONDARY_SOURCE
5. A-SLOT 中古実機DB https://www.a-slot.com/SHOP/dlight_2.html
   - 2012年6月導入、ART 50G+α/約1.4枚/G、ボーナス・覚醒Rush概要を回顧照合。
   - reliability: RETROSPECTIVE_USED_MACHINE_DATABASE
6. パチ7「2018年5号機さよなら予定日カレンダー」 https://pachiseven.jp/articles/detail/5424
   - 本機の検定通過日2012-04-09を回顧確認。
   - reliability: RETROSPECTIVE_INDUSTRY_MEDIA
