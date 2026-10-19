# コンチネンタルV

machineName: コンチネンタルV
manufacturer: メーシー販売
releaseDate: 2012-02-06
releaseDatePrecision: EXACT_HALL_INTRODUCTION_DATE
releaseDateNotes: K-Navi、HAZUSE、パチビーが2012-02-06導入開始で一致。
generation: 5号機
systemType: A+ART
formalModelName: コンチネンタルファイブ
approvalNumber: 1S0658
recordStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.6% |
| 2 | 99.2% |
| 3 | 101.6% |
| 4 | 104.3% |
| 5 | 108.1% |
| 6 | 112.2% |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

パチビーとpacnkで設定1〜6の系列が一致。

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/443 | 1/482 | 1/231 | 1/640 | 1/175.6 |
| 2 | 1/440 | 1/478 | 1/229 | 1/535 | 1/165.8 |
| 3 | 1/437 | 1/475 | 1/228 | 1/517 | 1/165.8 |
| 4 | 1/434 | 1/471 | 1/226 | 1/424 | 1/152.1 |
| 5 | 1/431 | 1/468 | 1/224 | 1/432 | 1/152.3 |
| 6 | 1/420 | 1/455 | 1/218 | 1/352 | 1/138.9 |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

notes:
- パチビーの整数丸め値を主値として保持。
- pacnkではボーナス合算 1/230.80 / 229.10 / 227.60 / 226.00 / 224.40 / 218.50、ART初当たり 1/639.80 / 534.70 / 517.30 / 424.40 / 431.50 / 352.40 と精密値を掲載し、上表と丸め差の範囲で一致。
- K-Naviの「ボーナス+ART合算」は設定3が1/163.4とされ、パチビーの1/165.8と差があるため当該項目のみCONFLICTとして保持。

## baseGamesPer50

- UNVERIFIED_AFTER_RESEARCH

reliability: UNVERIFIED

notes:
- 「コンチネンタルV / コンチネンタルⅤ / コンチ5 / コンチファイブ / コンチネンタルファイブ」と「50枚 / 1000円 / ベース / コイン持ち / 回転数」を組み替え、K-Navi、HAZUSE、P-WORLD、パチビー、pacnk、後年5号機DBを横断したが、比較可能な直接数値を今回確定できず。
- 実戦記の「コイン持ちが悪い」は定量値ではないため採用しない。

## netIncrease

- ART「スーパーラッシュ」: 約+1.4枚/G

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: 約207枚
- REG: 約54枚
- ART「セーフティーゾーン」: 最低30G+α、約+1.4枚/G
- ART「チャレンジゾーン」: 最低5G+α、約+1.4枚/G

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- A+ART。通常時にはART期待度の異なる低確・高確の内部状態が存在。
- ART「スーパーラッシュ」はセーフティーゾーンとチャレンジゾーンを行き来する構造。
- 通常天井: ボーナス間1200GでART突入確定。
- ボーナス終了後は高確スタート。
- REG終了後1G目のリンゴ入賞でART確定とされる。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: 設定変更時に高確モード移行抽選が行われることをP-WORLD・パチビーで直接確認。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

gameCounterReset: UNVERIFIED_AFTER_RESEARCH
ceilingAfterReset: 通常天井はボーナス間1200G。設定変更時に1200GカウンタをCLEARするかRETAINするか、リセット専用短縮天井があるかは本機固有直接資料を確定できず。
modeAfterReset: HIGH_PROBABILITY_MODE_SELECTION_CONFIRMED_ON_SETTING_CHANGE__DISTRIBUTION_UNVERIFIED
stateAfterReset: 高確モード移行抽選を実施することはCONFIRMED。低確/高確の具体振り分け率はUNVERIFIED_AFTER_RESEARCH。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: 設定変更時に高確モード移行抽選が行われるため、朝一高確スタートの可能性がある。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: UNVERIFIED_AFTER_RESEARCH
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

numericResetData:
- 通常天井: ボーナス間1200G。
- 設定変更時: 高確モード移行抽選あり。
- 設定変更時の高確移行率: UNVERIFIED_AFTER_RESEARCH。
- リセット専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。
- 朝一特定ゲーム数以内の当選率/期待度: NONE_CONFIRMED_AFTER_RESEARCH。

notes:
- 「コンチネンタルV / コンチネンタルⅤ / コンチファイブ / コンチネンタルファイブ / 1S0658 / メーシー」を「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1200G / 高確 / モード / ガックン」と組み替えて再探索。
- P-WORLDとパチビーで設定変更時の高確モード移行抽選を直接確認。
- 設定変更時の天井カウンタCLEAR/RETAIN、据え置き時の天井・内部状態保持、単純電源OFF→ON、ガックン等は本機固有の直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
- 後継機・別コンチシリーズのリセット挙動は流用していない。
- 有利区間は5号機のため非該当。

resetQaReliability: ANALYSIS_HIGH_FOR_HIGH_MODE_RESELECTION__UNVERIFIED_FOR_COUNTER_CARRYOVER_POWER_CYCLE

## sources

取得日: 2026-09-05

1. HAZUSE — https://hazuse.com/machine/pachislot/1S0658/
   - 導入開始日2012-02-06、型式名コンチネンタルファイブ、検定番号1S0658、ART純増約1.4枚/G、低確/高確構造を確認。
   - reliability: DATABASE_HIGH
2. K-Navi — https://p-kn.com/slot/1547/
   - ホール導入開始2012-02-06、ボーナス+ART合算、ART約1.4枚/G、ART構造を確認。
   - reliability: ANALYSIS_HIGH
3. パチビー — https://www.pachibee.jp/machines/index/211110006
   - 導入日2012-02-06、機械割、BIG/REG/ART初当たり、BIG207枚、REG54枚、ART30G+α/5G+α、天井1200G、設定変更時高確モード移行抽選を確認。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — https://www.p-world.co.jp/machine/database/6567
   - BIG207枚、REG54枚、ART約1.4枚/G、設定変更時高確モード移行抽選、ボーナス間1200G天井を照合。
   - reliability: DATABASE_HIGH
5. pacnk — https://pacnk.com/slot/tools/sh_continentalv.html
   - 機械割、ボーナス合算、ART初当たり精密値を照合。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## missingFields

- 50枚あたりゲーム数/ベース
- 設定変更時のボーナス間1200G天井カウンタCLEAR/RETAIN
- 据え置き時の天井・内部状態の保持/再抽選
- 単純電源OFF→ON時の挙動
- 設定変更時の高確移行具体率
- ガックン等の設定変更判別

## conflicts

- ボーナス+ART合算の設定3: K-Navi 1/163.4 / パチビー 1/165.8。平均化せず両値を保持。

## confidenceSummary

- release/model: HIGH
- payout/core probability: HIGH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- ART/basic payout: HIGH
- ceiling: HIGH
- reset high-mode reselection: HIGH
- reset counter/carryover/power-cycle/detection: UNVERIFIED_AFTER_RESEARCH
