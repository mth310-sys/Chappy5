# 新・ドロンジョにおまかせ

machineName: 新・ドロンジョにおまかせ
manufacturer: オリンピア
releaseDate: 2012-02-13
releaseDatePrecision: EXACT_HALL_INTRODUCTION_DATE
releaseDateNotes: K-Navi、パチビー、複数当時解析資料が2012-02-13導入開始で一致。
generation: 5号機
systemType: A+ART
formalModelName: 新・ドロンジョにおまかせC
approvalNumber: 1S1155
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_QA

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.8% |
| 3 | 100.3% |
| 4 | 104.5% |
| 5 | 108.1% |
| 6 | 113.6% |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

K-Navi、パチマガスロマガ、当時解析資料で設定1〜6の系列が一致。P-WORLDも97.2〜113.6%を掲載。

## initialHitBySetting

| 設定 | 同色ボーナス/BIG | REG | ボーナス合算 | ART初当たり |
|---:|---:|---:|---:|---:|
| 1 | 1/183.1 | 1/436.9 | 1/129.0 | 1/458.6 |
| 2 | 1/183.1 | 1/414.8 | 1/127.0 | 1/417.4 |
| 3 | 1/183.1 | 1/394.8 | 1/125.1 | 1/410.0 |
| 4 | 1/183.1 | 1/376.6 | 1/123.2 | 1/352.9 |
| 5 | 1/183.1 | 1/360.1 | 1/121.4 | 1/321.2 |
| 6 | 1/183.1 | 1/344.9 | 1/119.6 | 1/263.7 |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

notes:
- パチマガスロマガの精密値では同色ボーナス合成1/183.06、REG 1/436.91〜1/344.93、ボーナス合成1/129.01〜1/119.59。K-Navi丸め値と整合。
- 同色ボーナスは通常時「おしおきチャンス」扱いとなる場合があり、ART中はBIGとして約180枚獲得となる仕様。単純な通常A+ART機のBIG表記とは定義差があるため注記を残す。

## baseGamesPer50

| 設定 | 50枚あたりゲーム数 |
|---:|---:|
| 1 | 32.13G |
| 2 | 32.11G |
| 3 | 32.09G |
| 4 | 32.08G |
| 5 | 32.06G |
| 6 | 32.04G |

reliability: ANALYSIS_HIGH_DIRECT_TABLE

notes:
- パチマガスロマガが設定別1000円あたりゲーム数を直接掲載。
- パチスロ必勝本の実戦値32.0G、当時解析ブログのベース約32Gとも整合。

## netIncrease

- ART「ギガパーRUSH」: 約+1.9枚/G（ボーナス込み）

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART中BIG: 約180枚
- 通常時おしおきチャンス: 約60枚
- REG: 約30枚
- ART「ギガパーRUSH」: 1セット30G、約+1.9枚/G（ボーナス込み）

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ART「ギガパーRUSH」はセットストック+ゲーム数上乗せ型。
- セット数上乗せ専用「無敵モード」、ゲーム数上乗せ専用「ドラゴンモード」、次回REGまで継続する特殊無限ART「最終決戦モード」を搭載。
- 通常天井: 通常時777G消化で「最終決戦モード」へ突入。
- P-WORLDでは最終決戦モードはREG中バトルに負けるまで継続と説明。
- 内部状態・内部モードの存在はK-Navi解析メニューで確認できるが、通常時全移行表は物差しDB対象外のため収集しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: SETTING_CHANGE_GAME_COUNTER_RESET_REPORTED_IN_PERIOD_SOURCE__OTHER_INTERNAL_BEHAVIOR_UNVERIFIED
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

gameCounterReset: CLEAR_ON_SETTING_CHANGE_REPORTED_IN_PERIOD_KNAVI_LOG
ceilingAfterReset: 通常天井は777G。設定変更時ゲーム数リセットの当時記述あり。リセット専用の777G未満短縮天井はNONE_CONFIRMED_AFTER_RESEARCH。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH
stateAfterReset: UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: 通常777G天井による最終決戦モード恩恵は存在するが、設定変更専用の朝一恩恵はNONE_CONFIRMED_AFTER_RESEARCH。
resetPenalties: 設定変更で天井ゲーム数がリセットされる当時記述があり、前日ハマリを利用する宵越し狙いには不利となる可能性を示す。具体的な据え置き比較はUNVERIFIED_AFTER_RESEARCH。
resetDetection: K-Naviに「設定変更判別」解析項目の存在は確認できるが、具体本文を現行取得経路で安全に回収できずUNVERIFIED_AFTER_RESEARCH。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

numericResetData:
- 通常天井: 777G。
- 設定変更時ゲーム数: リセットとする2012-06-28付K-Naviパチログ記述あり。
- リセット専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更時モード振り分け: UNVERIFIED_AFTER_RESEARCH。
- 朝一特定ゲーム数以内の当選率/期待度: NONE_CONFIRMED_AFTER_RESEARCH。

notes:
- 「新・ドロンジョにおまかせ / 新ドロンジョ / 新ドロンジョにおまかせ / 新・ドロンジョにおまかせC / 1S1155 / オリンピア」を「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 777G / モード / 状態 / ガックン」と組み替えて再探索。
- K-Navi機種ページには「設定変更判別」攻略項目が存在するが、具体ページ本文は今回の取得経路では確定できなかった。
- 同ページ内の2012-06-28当時パチログに「設定変更時ゲーム数リセット」と明記されているため、ゲーム数リセットは時代近接資料として保持する。ただし攻略編集部の正式解析本文ではなくユーザー投稿由来のため、信頼度を過大評価しない。
- 据え置き時の777G進捗保持、単純電源OFF→ON、設定変更時のモード/状態再抽選、ガックン等は本機固有直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
- 2003年旧作「ドロンジョにおまかせ」の1400G天井・設定変更挙動は別機種のため流用していない。
- 有利区間は5号機のため非該当。

resetQaReliability: ANALYSIS_SINGLE_PERIOD_REPORT_FOR_COUNTER_RESET__UNVERIFIED_FOR_CARRYOVER_POWER_CYCLE_MODE_STATE_DETECTION

## sources

取得日: 2026-09-05

1. オリンピア公式 新・ドロンジョにおまかせ — https://www.olympia.co.jp/newmachine/dr2/index.html
   - メーカー公式機種ページの現存を確認。
   - reliability: OFFICIAL
2. K-Navi — https://p-kn.com/slot/1565/
   - 導入日2012-02-13、設定別BIG/REG/ボーナス合算/ART初当たり/機械割、ART30G・約1.9枚/G、設定変更判別項目の存在を確認。
   - 同ページ2012-06-28パチログで「設定変更時ゲーム数リセット」の当時記述を確認。
   - reliability: ANALYSIS_HIGH_FOR_CORE__ANALYSIS_SINGLE_PERIOD_REPORT_FOR_RESET_COUNTER
3. パチビー — https://www.pachibee.jp/machines/lecture/211120013
   - 導入日2012-02-13、5号機ART、天井あり、約1.9枚/Gを照合。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — https://www.p-world.co.jp/machine/database/6610
   - 型式名「新・ドロンジョにおまかせC」、検定番号1S1155、機械割97.2〜113.6%、BIG約180枚/おしおきチャンス約60枚/REG約30枚、ART30G・約1.9枚/G、通常時777G天井を確認。
   - reliability: DATABASE_HIGH
5. パチマガスロマガ スペック — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/102/a.php
   - ART30G、約1.9枚/G、BIG約180枚、おしおきチャンス約60枚、REG約30枚を照合。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ ボーナス確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/102/h.php
   - 設定別ボーナス/ART初当たり/機械割の精密値を確認。
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ 小役確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/102/c.php
   - 設定別1000円あたりゲーム数32.13〜32.04Gを直接確認。
   - reliability: ANALYSIS_HIGH
8. パチスロ必勝本 — https://p.hisshobon.jp/machine/1970/1/33098
   - 1000円あたり32.0Gの実戦値を照合。
   - reliability: ANALYSIS_SINGLE
9. 当時解析記事 — https://ameblo.jp/ex-tencho/entry-11159738166.html
   - 2012年当時のスペック系列、ベース約32G、777G天井、ART30G・約1.9枚/G、2月13日導入を照合。
   - reliability: ANALYSIS_SINGLE_PERIOD

## missingFields

- 据え置き時の天井ゲーム数・内部状態/モードの保持挙動
- 単純電源OFF→ON時の挙動
- 設定変更時のモード/状態再抽選の具体内容・振り分け
- ガックン・表示等の設定変更判別具体手順
- 朝一特定ゲーム数以内の公開当選率/期待度

## conflicts

- NONE_CONFIRMED_FOR_CORE_VALUES
- reset game counterについては当時K-Naviユーザー投稿の直接記述を保持する一方、編集部解析本文の独立確認が取れていないため信頼度を限定。

## confidenceSummary

- release/model: HIGH
- payout/core probability: HIGH
- baseGamesPer50: HIGH
- ART/basic payout: HIGH
- ceiling: HIGH
- reset game counter on setting change: ANALYSIS_SINGLE_PERIOD_REPORT
- reset carryover/power-cycle/mode/state/detection: UNVERIFIED_AFTER_RESEARCH
