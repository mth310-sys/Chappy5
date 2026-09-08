machineName: 元祖ハネスロ再び
manufacturer: オーイズミ
releaseDate: 2016-06-20
recordNumber: 988
generation: 5号機
systemType: ノーマルBタイプ / ボーナス主体 + 演出用短期RT
formalModelName: 元祖ハネスロ再び／EX
certificationNumber: 6S0165
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式名 `元祖ハネスロ再び／EX`、検定番号 `6S0165`、導入開始日2016-06-20を確認。
- ALL7、パチビーでも2016-06-20を照合。グリーンべると当時記事は6月中旬以降納品予定。
reliability: INDUSTRY_ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.7% |
| 2 | 99.6% |
| 3 | 100.4% |
| 4 | 103.1% |
| 5 | 107.0% |
| 6 | 111.2% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | 1倍BONUS | 2倍BONUS | 3倍BONUS | SP BONUS | 合算 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/799.2 | 1/799.2 | 1/555.4 | 1/284.9 | 1/128.0 |
| 2 | 1/753.3 | 1/809.1 | 1/541.6 | 1/281.3 | 1/125.5 |
| 3 | 1/697.2 | 1/819.2 | 1/528.5 | 1/280.1 | 1/123.2 |
| 4 | 1/585.1 | 1/771.0 | 1/516.0 | 1/271.9 | 1/116.0 |
| 5 | 1/478.4 | 1/728.2 | 1/504.1 | 1/263.2 | 1/108.1 |
| 6 | 1/392.4 | 1/668.7 | 1/489.1 | 1/253.0 | 1/99.6 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約34.3G/50枚**（HAZUSE）。後年整理の約34Gと整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- 通常の出玉増加はボーナス主体。
- 「ロボゾーン」はチャンスリプレイから入る平均約5Gの演出用RTで、純増性能を物差し値として扱わない。

## basicPayout
- 1倍ボーナス: **60枚**。
- 2倍ボーナス: **120枚**。
- 3倍ボーナス: **180枚**。
- SPボーナス: **247枚**。
- ボーナス当選の約70%が3倍以上。業界発表では概算内訳 SP45% / 3倍23% / 2倍16% / 1倍16%。
reliability: INDUSTRY_ANALYSIS_HIGH

## modeSpecificMinimumData
- 天井: **非搭載**。
- 「ロボゾーン」: チャンスリプレイ成立から入る平均約5GのRT。ボーナス期待度約50%、当選時はSPボーナス。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_RT_RESIDUAL_UNVERIFIED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 天井・通常時ゲーム数モードは非搭載のため **NOT_APPLICABLE**。
- 設定変更時の演出用RT「ロボゾーン」残G/内部RT状態の個別処理は、機種名・型式名・オーイズミ・設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・ロボゾーンを組み替えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 天井/長期ゲーム数モードは **NOT_APPLICABLE**。
- ロボゾーン残G/内部RT状態の据え置き処理は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 天井/長期ゲーム数モードは **NOT_APPLICABLE**。
- 純電源OFF→ON時のロボゾーン残G/内部RT状態は **UNVERIFIED_AFTER_RESEARCH**。設定変更と純電断を同義扱いしない。

### gameCounterReset
- 天井ゲーム数カウンタ非搭載につき **NOT_APPLICABLE**。

### ceilingAfterReset
- 天井非搭載。リセット短縮天井も **NOT_APPLICABLE**。

### modeAfterReset
- 通常時の長期モード/朝一専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 長期内部状態は NONE_CONFIRMED。
- 平均5GのロボゾーンRT残G処理のみ直接資料不足で UNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、朝一専用モード、設定変更時CZ優遇など主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 天井進捗消失はN/A。主要な設定変更不利は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、表示による設定変更判別は十分再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス終了後の下パネルフラッシュは設定差（設定1 50%〜設定6 60%）を持つが、朝一の変更判別とは別物なのでresetDetectionには使用しない。

### numericResetData
- 公開された設定変更専用の朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 性能コアはHAZUSE、P-WORLD、パチマガスロマガ、当時業界記事を横断。
- resetBehaviorはノーマル機だからと一般論で補完せず、短期RTの設定変更/据え置き/純電断処理だけ未確認として明示。
- パネルフラッシュ設定差は通常の設定推測値でありreset専用値ではない。

## sources
取得日: 2026-09-08

1. HAZUSE — 元祖ハネスロ再び
   - https://hazuse.com/machine/pachislot/6S0165/
   - 型式名、検定番号、導入日、設定別ボーナス、機械割、約34.3G/50枚、獲得枚数、ロボゾーン、天井非搭載。
   - reliability: ANALYSIS_HIGH
2. P-WORLD — 元祖ハネスロ再び
   - https://www.p-world.co.jp/machine/database/8041
   - 5号機ノーマル、4種ボーナス獲得枚数、ロボゾーン。
   - reliability: INDUSTRY_DATABASE
3. パチマガスロマガ — 元祖ハネスロ再び
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/36/a.php
   - 2016年6月、設定1合算1/128、各ボーナス獲得枚数、ロボゾーン期待度約50%。
   - reliability: ANALYSIS_HIGH
4. グリーンべると — 遊びやすさ×瞬発力の「ノーマルBタイプ」登場
   - https://web-greenbelt.jp/00008642/
   - 当時発表、合算1/99.6〜1/128.0、各獲得枚数、ボーナス比率、平均5G RT、6月中旬以降納品予定。
   - reliability: INDUSTRY_PERIOD
5. 娯楽産業 — オーイズミ 新機種「元祖ハネスロ再び」機種説明会開催
   - https://www.goraku-sangyo.com/%E3%82%AA%E3%83%BC%E3%82%A4%E3%82%BA%E3%83%9F%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E5%85%83%E7%A5%96%E3%83%8F%E3%83%8D%E3%82%B9%E3%83%AD%E5%86%8D%E3%81%B3%E3%80%8D%E6%A9%9F%E7%A8%AE%E8%AA%AC/
   - 当時説明会、ボーナス性能、平均5Gロボゾーン。
   - reliability: INDUSTRY_PERIOD
6. ALL7 — 2016年6月導入予定一覧
   - https://www.all7.jp/plans/index/2016/06
   - 2016-06-20導入予定。
   - reliability: PERIOD_DATABASE
7. パチビー — 元祖ハネスロ再び
   - https://www.pachibee.jp/movies/index/12701
   - 2016-06-20導入、5号機ノーマル。
   - reliability: PERIOD_DATABASE

## missingFields
- ロボゾーン中閉店時の設定変更/据え置き/純電断におけるRT残G・内部RT処理
- 本機固有の確定的設定変更判別

## conflicts
- 現時点で主要性能コアの明確なCONFLICTなし。
