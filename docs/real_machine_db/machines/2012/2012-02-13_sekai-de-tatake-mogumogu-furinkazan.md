# 世界で叩け！モグモグ風林火山

machineName: 世界で叩け！モグモグ風林火山
manufacturer: ネット
releaseDate: 2012-02-13
releaseDatePrecision: EXACT_HALL_INTRODUCTION_DATE
releaseDateNotes: K-Navi、パチビーが2012-02-13ホール導入開始で一致。グリーンべるとは2011-12-22時点で2012年2月中旬から納品開始予定と報道。
generation: 5号機
systemType: A+ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_QA

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.5% |
| 2 | 98.5% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 110.5% |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

P-WORLD、パチビー、pacnkで設定1〜6の系列が一致。

## initialHitBySetting

| 設定 | 合戦BONUS合算 | 戦BONUS | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/439.84 | 1/873.81 | 1/353.00 | 1/160 |
| 2 | 1/434.01 | 1/862.32 | 1/327.00 | 1/154 |
| 3 | 1/428.34 | 1/851.12 | 1/298.00 | 1/146 |
| 4 | 1/422.81 | 1/840.21 | 1/277.00 | 1/140 |
| 5 | 1/417.43 | 1/829.57 | 1/252.00 | 1/132 |
| 6 | 1/412.18 | 1/819.20 | 1/217.00 | 1/121 |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

notes:
- P-WORLD/パチビーは丸め値（合戦BONUS 1/439〜1/412、戦BONUS 1/873〜1/819、ART 1/353〜1/217）を掲載。
- pacnkは合戦BONUS/戦BONUSについて精密値を掲載し、丸め系列と整合。
- 「ボーナス+ART合算」はP-WORLD/パチビー掲載の合算定義をそのまま保持し、個別初当たりと混同しない。

## baseGamesPer50

| 設定 | 50枚あたりゲーム数 |
|---:|---:|
| 1 | 30.10G |
| 2 | 30.13G |
| 3 | 30.17G |
| 4 | 30.20G |
| 5 | 30.24G |
| 6 | 30.27G |

reliability: ANALYSIS_HIGH_DIRECT_TABLE

notes:
- パチマガスロマガが「1000円あたりのゲーム数」として設定別に直接掲載。

## netIncrease

- ART「世覇の刻」: 約+1.5枚/G

reliability: INDUSTRY_AND_ANALYSIS_MULTI_SOURCE

## basicPayout

- 超・大合戦ボーナス: 約300枚
- 大合戦ボーナス: 約225枚
- 合戦ボーナス: 約150枚
- 戦ボーナス: 約42枚
- ART「世覇の刻」: 1セット30〜200G+α、約+1.5枚/G

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時にはART期待度の異なる「低確・通常・高確・天国」の4内部モードが存在。
- ART「世覇の刻」は初回1〜15セット、1セット30〜200Gのゲーム数変動型。
- 通常天井はボーナス間で3段階。
  - 888G: ART1〜3セット
  - 1111G: ART1〜5セット
  - 1333G: ART2〜15セット
- 3段階の天井はボーナスを引くまで順次発動する。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: GAME_COUNTER_RESET_AND_INTERNAL_MODE_RESELECTION_REPORTED
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

gameCounterReset: CLEAR_ON_SETTING_CHANGE
ceilingAfterReset: 通常の888G/1111G/1333G段階天井を設定変更でリセット。設定変更専用の短縮天井はNONE_CONFIRMED_AFTER_RESEARCH。
modeAfterReset: INTERNAL_MODE_RESELECTED_ON_SETTING_CHANGE__DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH
stateAfterReset: UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: 設定変更後は内部モード再抽選。朝一、レア役を引かずに高確/前兆示唆の流鏑馬または座禅ステージへ移行した場合は設定変更濃厚とする当時攻略系情報あり。
resetPenalties: 設定変更でボーナス間天井ゲーム数がリセットされるため、前日ハマリの宵越し天井狙いには不利。具体的な据え置き時引継ぎ挙動はUNVERIFIED_AFTER_RESEARCH。
resetDetection: 朝一にレア役無しで流鏑馬/座禅ステージへ移行すれば設定変更濃厚とする当時攻略系情報あり。ガックンによる本機固有判別はUNVERIFIED_AFTER_RESEARCH。
publicMorningNumbers: 設定変更時モード振り分け、朝一特定G以内当選率、リセット専用短縮天井の公開具体値はNONE_CONFIRMED_AFTER_RESEARCH。

numericResetData:
- 通常天井: ボーナス間888G / 1111G / 1333G。
- 設定変更時ゲーム数: CLEAR。
- 設定変更時内部モード: 再抽選。
- 設定変更時モード振り分け: UNVERIFIED_AFTER_RESEARCH。
- 朝一特定ゲーム数以内当選率/期待度: NONE_CONFIRMED_AFTER_RESEARCH。

notes:
- 「世界で叩け！モグモグ風林火山 / 世界で叩け! モグモグ風林火山 / モグモグ風林火山 / ネット」を「設定変更 / 設定変更後 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / 888 / 1111 / 1333 / モード / 流鏑馬 / 座禅 / ガックン」と組み替えて再探索。
- K-Naviには本機専用「設定変更後の挙動」項目の存在を確認。
- pacnkは設定変更でゲーム数天井リセットを明示。
- 2013年の天井攻略回顧資料では、設定変更で内部モード再抽選、朝一レア役無しで流鏑馬/座禅移行なら変更濃厚と記録。
- 据え置き時の天井進捗・内部モード保持、単純電源OFF→ON時の挙動、設定変更時モード振り分け具体値、ガックンは本機固有の直接根拠を十分に確定できずUNVERIFIED_AFTER_RESEARCH。
- 有利区間は5号機のため非該当。

resetQaReliability: ANALYSIS_MULTI_SOURCE_FOR_COUNTER_RESET__ANALYSIS_SINGLE_PERIOD_FOR_MODE_RESELECT_AND_DETECTION__UNVERIFIED_FOR_CARRYOVER_POWER_CYCLE_DISTRIBUTION_GAKKUN

## sources

取得日: 2026-09-05

1. グリーンべると — https://web-greenbelt.jp/00002436/
   - 2011-12-22発表記事。ネット新機種、ART純増1.5枚/G、30〜200G、最大15セット、2012年2月中旬納品予定を確認。
   - reliability: INDUSTRY
2. K-Navi — https://p-kn.com/slot/1561/
   - ホール導入開始2012-02-13、5号機ART、ART30〜200G/約1.5枚/G、「設定変更後の挙動」攻略項目の存在を確認。
   - reliability: ANALYSIS_HIGH
3. パチビー — https://www.pachibee.jp/machines/index/211120012
   - 導入日2012-02-13、機械割96.5〜110.5%、ボーナス/ART初当たり、基本獲得枚数、3段階天井を確認。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — https://www.p-world.co.jp/machine/database/6601
   - 設定別機械割、ボーナス/ART初当たり、ART30〜200G・約1.5枚/G、低確/通常/高確/天国4モード、888/1111/1333G天井を確認。
   - reliability: DATABASE_HIGH
5. パチマガスロマガ 小役確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/152/c.php
   - 設定別1000円あたりゲーム数30.10〜30.27Gを直接確認。
   - reliability: ANALYSIS_HIGH
6. pacnk — https://pacnk.com/slot/tools/sh_sekamog.html
   - 精密ボーナス確率、ART初当たり、PAYOUT系列を照合。設定変更後はゲーム数天井リセットと明記。
   - reliability: ANALYSIS_SINGLE_MODERN_DATABASE
7. 天井ハイエナ生活 回顧資料 — https://macerate.seesaa.net/article/372758539.html
   - 設定変更で内部モード再抽選、朝一レア役無しで流鏑馬/座禅移行なら設定変更濃厚とする攻略情報を確認。
   - reliability: ANALYSIS_SINGLE_PERIOD_RECAP

## missingFields

- 正式型式名・検定番号
- 据え置き時の天井進捗・内部モード保持
- 単純電源OFF→ON時の挙動
- 設定変更時内部モード再抽選の具体振り分け
- ガックンによる本機固有の変更判別
- 朝一特定G以内の公開当選率/期待度

## conflicts

- NONE_CONFIRMED_FOR_CORE_VALUES

## confidenceSummary

- release: HIGH
- payout/core probability: HIGH
- baseGamesPer50: HIGH
- ART/basic payout: HIGH
- ceiling: HIGH
- setting-change game-counter reset: MEDIUM_HIGH
- mode reselection/reset detection: ANALYSIS_SINGLE_PERIOD_RECAP
- carryover/power-cycle/mode-distribution/gakkun: UNVERIFIED_AFTER_RESEARCH
