# 龍虎の拳

machineName: 龍虎の拳
manufacturer: SNKプレイモア
releaseDate: 2013-05-07
releaseDatePrecision: exact_day
generation: 5号機
systemType: AT
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-05-07**。HAZUSE、パチビーで一致。
- 業界記事は納品開始を2013-05-06からと報道しており、ホール導入日との定義差として保持。
- formalModelName: **龍虎の拳B**。
- inspectionNumber: **2S1388**。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## payoutRateBySetting

`CONFLICT`。平均せず双方を保持する。

### P-WORLD / パチビー系列

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 98.7% |
| 3 | 99.9% |
| 4 | 104.2% |
| 5 | 108.7% |
| 6 | 114.4% |

### HAZUSE / pacnk系列

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 99.0% |
| 3 | 100.3% |
| 4 | 104.6% |
| 5 | 109.2% |
| 6 | 114.9% |

- 後者は複数整理資料で一致。P-WORLD/パチビーとは設定1～6すべてに差があるため丸め差として統合しない。
- 当時個人記録にはメーカー暫定値として97.2/99.0/100.3/106.4/109.2/114.9%という系列もあるが、設定4の106.4%はHAZUSE 104.6%との転記逆転の可能性を排除できず、主要採用値には混ぜず参考CONFLICTとしてのみ保持。

## initialHitBySetting

AT「極限RUSH」出現率（セット連含む）:

| 設定 | AT |
|---|---:|
| 1 | 1/294.7 |
| 2 | 1/280.5 |
| 3 | 1/266.7 |
| 4 | 1/237.9 |
| 5 | 1/208.2 |
| 6 | 1/180.2 |

- HAZUSE、P-WORLD、業界記事で一致。
- confidence: INDUSTRY_AND_MULTI_SOURCE_HIGH

## baseGamesPer50

- **約33G/50枚**（全設定共通としてHAZUSE掲載）。
- confidence: ANALYSIS_HIGH

## netIncrease

- AT「極限RUSH」: **約3.0枚/G**。
- グリーンべると、パチビー、P-WORLDで一致。
- confidence: INDUSTRY_AND_MULTI_SOURCE_HIGH

## basicPayout

- AT「極限RUSH」: **1セット50G+上乗せ / 約3.0枚/G**。
- ゲーム数上乗せ+セットストック型。

## modeSpecificMinimumData

通常時はモードA / モードB / 天国準備 / 天国の4モード。

- モードA: 最大1280G
- モードB: 最大1280G
- 天国準備: 最大896G
- 天国: 最大128G
- 通常AT天井は最大1280G。ペナルティ等で超える場合あり。
- 992Gを超えたAT初当たりでは、AT中の初回闘神バトルモードがB以上に優遇されやすい。

AT中の闘神バトル規定G数は物差し作成に必要な範囲だけ保持:
- 初回モードA/B: 最大500G
- 初回天国: 最大50G
- 2セット目以降通常: 最大500G
- 2セット目以降天国: 最大50G

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__PARTIAL_DIRECT_RESET_CONTRACT_FIXED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 後年整理資料pacnkで、**設定変更時はゲーム数天井をリセットし、通常時モードを再抽選**と明記。
- 設定変更専用のモード振り分け率までは、機種名/型式名/SNKプレイモアと「設定変更」「リセット」「朝一」「モード」「天井」を組み替え、HAZUSE、P-WORLD、パチビー、当時記事、古い解析/回顧資料を横断したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 純据え置き時のゲーム数天井、モード、内部状態をどの粒度で保持するかを明記した本機固有直接資料は、十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時リセットの反対推定だけで据え置き保持を確定しない。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ON時のゲーム数天井、モード、内部状態、液晶状態の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- settingChange: **RESET**（ANALYSIS_SINGLE_RETROSPECTIVE_DIRECT）。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常時のモード別最大天井は1280G / 1280G / 896G / 128G。
- 設定変更後に専用短縮天井が存在するという直接資料は確認できず、変更後モード再抽選のみ確認。
- settingChangeSpecificCeilingDistribution: **UNVERIFIED_AFTER_RESEARCH**。

### modeAfterReset

- settingChange: **RESELECT / 再抽選**（pacnk）。
- 具体振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver/powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時および電断時のCZ高確等の内部状態処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更によるモード再抽選は確認できるが、朝一専用優遇率・天井短縮率などの公開数値は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 本機固有の設定変更専用不利は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- ガックン、液晶ステージ、初期出目等を本機固有の設定変更判別契約として固定できる資料は `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- 設定変更後のモード振り分け率、朝一特定G数以内当選率などの直接公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- settingChangeGameCounter: RESET
- settingChangeMode: RESELECT
- settingChangeModeDistribution: UNVERIFIED_AFTER_RESEARCH
- carryOverGameCounter: UNVERIFIED_AFTER_RESEARCH
- powerCycleGameCounter: UNVERIFIED_AFTER_RESEARCH
- resetSpecificShortCeiling: NONE_CONFIRMED_AFTER_RESEARCH

resetQaReliability: PARTIAL__SETTING_CHANGE_COUNTER_AND_MODE_DIRECT_SINGLE_SOURCE__POWER_CYCLE_AND_CARRYOVER_UNVERIFIED

## missingFields

- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- pureCarryOverContract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleContract: `UNVERIFIED_AFTER_RESEARCH`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- publicMorningNumbers: `NONE_CONFIRMED_AFTER_RESEARCH`

## conflicts

- payoutRateBySetting: `CONFLICT`
  - P-WORLD / パチビー: 96.9 / 98.7 / 99.9 / 104.2 / 108.7 / 114.4%
  - HAZUSE / pacnk: 97.2 / 99.0 / 100.3 / 104.6 / 109.2 / 114.9%
- 当時個人記録の「メーカー発表暫定値」は設定4のみ106.4%とし、104.6%系列と競合。転記誤りの可能性を除外できないため補正せず参考値として保持。

## sources

retrievedAt: 2026-09-06

- HAZUSE（型式名、検定番号、2013-05-07、AT確率、約33G/50枚、機械割、モード/天井）: `https://hazuse.com/machine/pachislot/2S1388/`
- パチビー（2013-05-07、AT仕様、純増、モード別天井、機械割/AT確率）: `https://www.pachibee.jp/machines/index/213030009`
- P-WORLD（AT初当たり、機械割、AT構造）: `https://www.p-world.co.jp/machine/database/7038`
- グリーンべると（2013-03-21業界記事、純増3枚/G、50G、AT確率、5/6納品開始）: `https://web-greenbelt.jp/00000813/`
- K-Navi（AT中闘神バトルのモード別天井）: `https://p-kn.com/slot/1836/43762/`
- pacnk（後年整理、設定変更で天井Gリセット/モード再抽選、AT確率、機械割）: `https://pacnk.com/slot/tools/sh_ryukonoken.html`
- 当時個人整理資料（メーカー発表暫定値とされる別機械割系列。参考CONFLICTのみ）: `https://dream777star.blog47.fc2.com/blog-entry-2440.html`
