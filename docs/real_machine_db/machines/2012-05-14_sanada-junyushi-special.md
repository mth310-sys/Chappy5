# 真田純勇士すぺしゃる

machineName: 真田純勇士すぺしゃる
manufacturer: ニューギン
releaseDate: 2012-05-14
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviで2012-05-14ホール導入開始を確認。当時業界記事転載では納品開始2012-05-13予定であり、納品日/ホール導入日の定義差として整合。
generation: 5号機
systemType: A+ART / 周期CZ / ゲーム数上乗せART
formalModelName: 真田純勇士すぺしゃるW
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_PARTIAL_RESET_DATA

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.9% |
| 3 | 102.4% |
| 4 | 105.2% |
| 5 | 110.1% |
| 6 | 115.8% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガ設定別PAYOUTと5号機クロニクルが一致。

## initialHitBySetting

### ボーナス

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/448.9 | 1/468.1 | 1/229.1 |
| 2 | 1/448.9 | 1/461.5 | 1/227.6 |
| 3 | 1/425.6 | 1/455.1 | 1/219.9 |
| 4 | 1/425.6 | 1/448.9 | 1/218.5 |
| 5 | 1/404.5 | 1/442.8 | 1/211.4 |
| 6 | 1/399.6 | 1/399.6 | 1/199.8 |

### ART初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/458 |
| 2 | 1/457 |
| 3 | 1/424 |
| 4 | 1/406 |
| 5 | 1/372 |
| 6 | 1/337 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: ボーナス系列はパチマガスロマガと5号機クロニクルが一致。ART初当りは5号機クロニクルの整理値を採用し、実機完全再現用の契機別抽選は収集しない。

## baseGamesPer50

value: 33.77〜33.98G/50枚（1000円あたり）
reliability: ANALYSIS_HIGH
notes: パチマガスロマガの「1000円あたりのゲーム数」直接値。設定別対応を安全に割り当てずレンジ保持。

## netIncrease

value: ART「常夏の陣」および「バナナスプラッシュ」約+1.3枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: K-Navi、P-WORLD、パチマガスロマガ、当時業界記事系列で一致。

## basicPayout

- BIG: 約204枚（規定297枚超払い出しで終了）。
- REG: 約56枚（8回入賞または8G消化で終了）。
- ART「常夏の陣」: 初当り時10 / 20 / 30 / 50 / 100G、約+1.3枚/G。
- 上乗せART「バナナスプラッシュ」: 1セット30G、約+1.3枚/G。常夏の陣中の特殊リプレイ成立を主契機に約1/12で突入。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は32G消化ごとに周期CZが存在し、押し順正解でARTを目指す構造を確認。
- 高確率/前兆に関わる内部モードが存在し、液晶ステージで示唆される。
- 通常時約1000G消化で天井ART「常夏の陣」へ突入。P-WORLDでは100Gまたは150GのARTと記載。
- 通常の全モード移行率・全抽選テーブルは物差し用途外のため収集しない。

reliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_SYSTEM_AND_CEILING

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: PARTIAL_CONFIRMED_CEILING_PROGRESS_CLEAR。2012年当時の天井攻略資料で「宵越し×」を確認し、設定変更時に前日天井進捗を利用できないことを確認。周期CZ進捗・内部モード・ART状態の変更時処理は本機固有の直接表を確定できず。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。純粋な据え置き時に天井ゲーム数、32G周期、内部モード、ART関連状態をどこまで保持するか、本機固有の直接資料を確定できず、一般則から補完しない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない単純電源OFF→ON時の天井/周期/内部状態を本機固有資料で確定できず。
gameCounterReset: CONFIRMED_CLEAR_ON_SETTING_CHANGE_FOR_CEILING_PROGRESS。2012年当時の天井攻略資料で本機を「宵越し×」と明記。前日ハマリを利用した設定変更後の天井狙いは不可として保持。
ceilingAfterReset: NO_RESET_SPECIFIC_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH。通常天井は約1000Gで100Gまたは150GのART。変更専用の短縮天井や変更時だけの別天井数値は確認できず。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更後の高確/前兆モード再抽選の有無や具体振り分けを本機固有の直接資料で確定できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。ART/CZ/高確状態の変更時クリア・再抽選契約を直接確認できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井・ART/CZ優遇・公開された高確スタート率等を確認できず。
resetPenalties: CONFIRMED_LOSS_OF_PREVIOUS_DAY_CEILING_PROGRESS_ON_SETTING_CHANGE。前日の約1000G天井進捗を利用できない。
resetDetection: UNVERIFIED_AFTER_RESEARCH。K-Navi掲示板/レビューには朝一変更判別可能という利用者言及が残るが、判別条件の解析本文を回収できず、ガックン・初期ステージ・周期挙動等の具体条件は未確認として扱う。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData: normalCeiling=approximately_1000G; ceilingART=100G_or_150G; shortenedResetCeiling=NONE_CONFIRMED; publicResetModeDistribution=UNVERIFIED

notes:
- 「真田純勇士すぺしゃる / 真田純勇士すぺしゃるW / ニューギン」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1000G / 32G / 周期CZ / モード / 高確 / ガックン / 50枚 / コイン持ち」を組み替えて再探索。
- K-Navi、P-WORLD、パチマガスロマガ、5号機クロニクル、2012年当時の天井攻略資料、当時業界記事転載、後年回顧資料を横断。
- K-Naviとパチマガスロマガの機種インデックスには本機専用「設定変更後の挙動」「朝イチ・設定変更」項目が存在することを確認したが、具体本文/数値を安全に回収できない項目は推測せずUNVERIFIEDとした。
- 2016年「真田純勇士～ラブストライク～」のリセット仕様は別機種のため流用していない。

resetQaReliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_CORE__PERIOD_SECONDARY_FOR_CEILING_CARRYOVER_NEGATION__UNVERIFIED_FOR_TRUE_CARRYOVER_POWER_CYCLE_AND_MODE_STATE_DETAILS

## conflicts

- 機械割の丸め表現として後年アプリ回顧資料に「設定1 97%〜設定6 116%」があるが、精密値97.4〜115.8%と整合する丸めでありCONFLICT扱いしない。
- 通常天井はP-WORLDの「約1000G」を採用。999G等の厳密到達条件を直接確認できていないため、推定で999Gへ固定しない。

## missingFields

- approvalNumber
- exact ceiling trigger game number (approximately 1000G only confirmed)
- exact carryOverBehavior when truly unchanged
- exact powerCycleBehavior
- modeAfterReset / stateAfterReset details and public reset-specific mode numbers
- definitive resetDetection conditions (gakkun/stage/cycle behavior)

## sources

取得日: 2026-09-05

1. K-Navi「真田純勇士すぺしゃる」 https://p-kn.com/slot/1615/
   - 2012-05-14ホール導入開始、ニューギン、A+ART、ART初回10〜100G、約+1.3枚/G、設定変更後の挙動/天井項目の存在。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
2. パチマガスロマガ「スペック」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/22/a.php
   - 32G周期CZ、常夏の陣10〜100G、バナナスプラッシュ30G、約+1.3枚/G、BIG約204枚、REG約56枚。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ「ボーナス確率」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/22/h.php
   - 設定別BIG/REG/合算、PAYOUT 97.4〜115.8%。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ「小役確率」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/22/c.php
   - 1000円あたり33.77〜33.98G。
   - reliability: ANALYSIS_HIGH
5. P-WORLD「真田純勇士すぺしゃる」 https://www.p-world.co.jp/machine/database/6686
   - 5号機A+ART、BIG約204枚、REG約56枚、ART約+1.3枚/G、通常時約1000Gで100Gまたは150GのART。
   - reliability: OLD_DATABASE
6. 5号機クロニクル「ニューギン＆エキサイト 5号機全機種一覧」 https://5goki.com/newgin-excite
   - 2012/5導入、設定別BIG/REG/合算、ART初当り1/458〜1/337、機械割97.4〜115.8%。
   - reliability: RETROSPECTIVE_DATABASE / CROSSCHECK
7. 天井ハイエナ生活「天井ハイエナ期待値リスト 5/31更新パチスロ」 https://macerate.seesaa.net/article/272914282.html
   - 2012年当時資料。本機を通常時550G狙い・宵越し×として掲載。
   - reliability: PERIOD_SECONDARY
8. Pマンズ「3月 2012」 https://p-mans.blogspot.com/2012/03/
   - 当時グリーンべると記事転載。納品開始2012-05-13予定、ART常夏の陣約+1.3枚/G・初回10〜100G、バナナスプラッシュ30G。
   - reliability: PERIOD_INDUSTRY_REPRINT
9. パチマガスロマガFREE「この台はエロではない、スケベです 真田純勇士すぺしゃる編」 https://pachimaga.com/free/special/0b144da21cba21742d7f085751f881125b5c8264.php
   - 後年回顧。2012年ニューギン機、A+ART、常夏の陣と30G固定バナナスプラッシュの二段ART構造。
   - reliability: RETROSPECTIVE_ANALYSIS
10. 江戸スロ「真田純勇士すぺしゃるW」 https://edoslot.net/SHOP/sanadajunnyuusisupesyaru.html
   - 実機流通名として末尾Wを確認。
   - reliability: SECONDARY_MARKET_IDENTIFICATION
