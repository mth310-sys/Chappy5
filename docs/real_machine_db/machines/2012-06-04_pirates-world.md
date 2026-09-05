# パイレーツワールド

machineName: パイレーツワールド
manufacturer: 大都技研
releaseDate: 2012-06-04
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviおよび2012-06-04当時新台一覧はホール導入2012-06-04。HAZUSEは導入開始日2012-06-03、大都技研公式製品一覧は2012年6月。導入日/先行導入・納品系の日付定義差を保持し、本DBの時系列キーは明示的なホール導入日2012-06-04を採用。
generation: 5号機
systemType: A+ART / 押し順ART / 継続ポイント・ストック型ART
formalModelName: パイレーツワールドU
approvalNumber: 2S0091
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_PARTIAL_RESET_DATA

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.67% |
| 2 | 99.11% |
| 3 | 101.91% |
| 4 | 105.78% |
| 5 | 110.89% |
| 6 | 117.40% |

reliability: ANALYSIS_HIGH_PERIOD_SOURCE
notes: パチマガスロマガ本機専用スペック表の値。後年整理資料でも97.7 / 99.1 / 101.9 / 105.8 / 110.9 / 117.4%と丸め一致。

## initialHitBySetting

| 設定 | BIG | ART初当り | BIG+ART合算 |
|---|---:|---:|---:|
| 1 | 1/799.2 | 1/340.7 | 1/238.9 |
| 2 | 1/789.6 | 1/320.8 | 1/228.1 |
| 3 | 1/780.2 | 1/301.2 | 1/217.3 |
| 4 | 1/771.0 | 1/262.0 | 1/195.5 |
| 5 | 1/762.1 | 1/219.3 | 1/170.3 |
| 6 | 1/744.7 | 1/181.2 | 1/145.7 |

reliability: ANALYSIS_HIGH_PERIOD_SOURCE_CROSSCHECKED
notes: BIG・ART初当りはパチマガスロマガ精密表。当時天井資料の丸め値（BIG 1/799〜1/745、ART 1/341〜1/181）とも一致。BIG+ART合算はパチマガスロマガ別表。REGは搭載を確認できる独立系列がなく、BIGのみのボーナス構成として扱う。

## baseGamesPer50

value: 約31G/50枚（1000円あたり約31G）
reliability: ANALYSIS_HIGH_PERIOD_SOURCE
notes: パチマガスロマガ本機専用小役ページの1000円あたりゲーム数。

## netIncrease

value: ART「OCEAN DRIVE」約+2.0枚/G
reliability: INDUSTRY_ANALYSIS_CROSSCHECKED
notes: 当時新台資料・パチマガスロマガ・当時運用資料で一致。

## basicPayout

- BIG: 約203枚。280枚を超える払い出しで終了。
- ART「OCEAN DRIVE」: 1セット30G+α、約+2.0枚/G。
- ARTは継続ポイントやストックを軸とするゲーム性。物差し用途外となる全上乗せ/バトル内部抽選は収集しない。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常天井: ボーナス後またはART終了後、最大900Gで天井ART「OCEAN DRIVE」。
- 天井発動ゲーム数は100G / 300G / 600G / 900Gのいずれかから選択される。
- ART初当りは設定1 1/340.7〜設定6 1/181.2。
- 全モード移行テーブル、全継続ポイント振り分け、全上乗せ抽選は物差し用途外。

reliability: ANALYSIS_HIGH_FOR_CORE; PERIOD_SECONDARY_FOR_CEILING_CONTRACT

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: VERIFIED_PERIOD_SOURCE。設定変更時は天井までの消化ゲーム数をクリアし、天井ゲーム数を再セット。内部モード移行抽選を行う。ART中に設定変更した場合はART状態をクリア。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き（設定を変更しない翌日運用）時の天井進捗・内部モード・ART関連状態の完全な保持契約を、本機固有の直接本文としては今回確定できず。一般論から推測しない。
powerCycleBehavior: PARTIAL_VERIFIED。単純電源OFF→ONでは液晶ステージが引き継がれることを本機固有資料で確認。天井ゲーム数・内部モード・ART関連状態の電断時保持契約までは直接確定できず。
gameCounterReset: CLEAR_ON_SETTING_CHANGE_CONFIRMED。設定変更で天井までのハマリゲーム数をクリア。
ceilingAfterReset: RESELECT_CONFIRMED。設定変更で天井ゲーム数を再セット。本機の公開天井候補は100G / 300G / 600G / 900Gだが、設定変更時専用の各候補振り分け率は今回未取得。
modeAfterReset: RESELECT_CONFIRMED_NUMERIC_DISTRIBUTION_UNVERIFIED。設定変更時に内部モード移行抽選あり。具体的な振り分け率は十分な再探索後も確定できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。モード以外の高確/内部状態について設定変更時の独立した再抽選・引継ぎ契約は確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: POSSIBLE_EARLY_CEILING_VIA_RESELECTION_NOT_RESET_EXCLUSIVE。設定変更で天井を再セットするため100G/300G/600Gの浅い天井が選ばれる余地はあるが、これを設定変更専用恩恵とは断定しない。設定変更専用の保証恩恵・専用確率は未確認。
resetPenalties: PREVIOUS_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE; ART_STATE_LOST_IF_CHANGED_DURING_ART。前日の天井進捗は設定変更で失われ、ART中に変更した場合はART状態もクリアされる。
resetDetection: STAGE_BASED_POSSIBLE_DETECTION_CONFIRMED_WITH_CAVEAT。液晶ステージは設定変更時も「栄光の大海原」以外は引き継がれる一方、単純電源ON/OFFではステージが引き継がれるため、前日「栄光の大海原」で閉店した場合は朝一ステージから設定変更を見抜ける可能性があると当時資料が明記。確定判別ではない。ガックンは本機固有の直接根拠を未確認。
publicMorningNumbers: RESET_SPECIFIC_PERCENTAGES_UNVERIFIED。本機の天井候補100G / 300G / 600G / 900Gは公開されているが、設定変更時専用の選択率・朝一特定G以内当選率は今回確定できず。
numericResetData: ceilingCandidates=100G|300G|600G|900G; settingChangeCeilingDistribution=UNVERIFIED; resetModeDistribution=UNVERIFIED

notes:
- 「パイレーツワールド / パイレーツワールドU / 大都技研」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 100G / 300G / 600G / 900G / モード / 状態 / ガックン / 50枚 / 1000円 / ベース」を組み替えて再探索。
- 大都技研公式、K-Navi、HAZUSE、パチマガスロマガ、当時新台一覧、当時天井運用資料、後年整理DBを横断。
- 据え置き・電断時の天井/モード契約、設定変更時の天井候補振り分け、ガックンは直接根拠を回収できなかったため推測せずUNVERIFIED_AFTER_RESEARCH。

resetQaReliability: ANALYSIS_HIGH_PERIOD_SOURCE_FOR_CORE__PERIOD_SECONDARY_DIRECT_FOR_RESET__UNVERIFIED_AFTER_RESEARCH_FOR_MISSING_RESET_CONTRACTS

## conflicts

- releaseDate: K-Navi/当時新台一覧=2012-06-04、HAZUSE=2012-06-03、大都技研公式=2012年6月。平均せず日付定義差として保持。
- パチマガスロマガの別スペック表示で設定1/2のPAY OUTが「197.67% / 199.11%」と表示される取得経路があるが、同サイト精密表は97.67% / 99.11%で、設定3〜6も連続するため明白なSOURCE_DISPLAY_CORRUPTIONとして前者を性能値へ採用しない。

## missingFields

- 据え置き時の天井進捗/内部モードの直接契約
- 単純電源OFF→ON時の天井ゲーム数/内部モード/ART状態の直接契約（液晶ステージのみ確認済み）
- 設定変更時の100G/300G/600G/900G天井選択率
- 設定変更時の内部モード振り分け率
- 本機固有のガックン判別
- 設定変更専用の朝一特定G以内当選率/期待度

## sources

取得日: 2026-09-05

1. 大都技研 公式製品一覧 https://www.daitogiken.com/products/slot/
   - パイレーツワールド、導入2012年6月、OCEAN DRIVE/LEGEND DRIVEを確認。
   - reliability: OFFICIAL
2. K-Navi「パイレーツワールド」 https://p-kn.com/slot/1636/
   - ホール導入開始2012-06-04、メーカー大都技研、ART、BIG280枚超払い出し。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
3. HAZUSE「パイレーツワールド」 https://hazuse.com/machine/pachislot/SX0043/
   - 導入開始日2012-06-03、型式パイレーツワールドU、検定番号2S0091、BIG純増約203枚。
   - reliability: OLD_DATABASE / PERIOD_SOURCE
4. パチマガスロマガ「スペック」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/51/h-1.php
   - 設定別BIG、ART初当り、機械割の精密値。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
5. パチマガスロマガ「スペック別表」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/51/h.php
   - BIG+ART合算。設定1/2 PAY OUT表示には明白な桁破損があるため機械割には不採用。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE_WITH_DISPLAY_CORRUPTION
6. パチマガスロマガ「小役確率」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/51/c.php
   - 1000円あたり約31G。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
7. パチマガスロマガ 機種TOP https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/51/daitogiken_slot_51.php
   - 純増約2枚ART、本機専用「朝イチ・設定変更」「天井・ヤメ時」「モード移行抽選」導線。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
8. 2012-06-04当時新台一覧 https://macerate.seesaa.net/article/273495238.html
   - 2012-06-04、大都技研パイレーツワールド、ART1セット30G+α、約+2.0枚/G。
   - reliability: PERIOD_SECONDARY
9. 天井ハイエナ生活「天井ハイエナ期待値リスト」 https://macerate.seesaa.net/article/288333617.html
   - 本機固有の天井100/300/600/900G、設定変更時の天井消化Gクリア/再セット、内部モード移行抽選、ART状態クリア、液晶ステージと電源ON/OFF差、朝一変更判別可能性。
   - reliability: PERIOD_SECONDARY_DIRECT_RESET_SOURCE
10. 2-9伝説「パイレーツワールド」 https://29den.com/piratesworld/
   - 設定別機械割/ART初当りの丸め照合、天井候補100/300/600/900G、設定変更で天井Gリセットの後年整理。
   - reliability: RETROSPECTIVE_ANALYSIS

## searchCoverage

- official: 大都技研公式製品一覧。
- period-analysis: K-Navi、パチマガスロマガ、HAZUSE。
- period-secondary: 2012-06-04当時新台一覧、当時天井運用資料。
- retrospective: 2-9伝説。
- reset-specific: 設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/100G/300G/600G/900G/モード/状態/ガックンを表記揺れ・型式名・メーカー名と組み替えて再探索。
- missing-field policy: 据え置き/電断の天井・モード、設定変更専用振り分け、ガックンは十分な再探索後も直接根拠未取得のためUNVERIFIED_AFTER_RESEARCH。
