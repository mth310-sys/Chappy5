# パチスロうみねこのなく頃に

machineName: パチスロうみねこのなく頃に
aliases: うみねこのなく頃に / うみねこ / うみねこ初代
manufacturer: オーイズミ
modelName: パチスロうみねこのなく頃にHX
approvalNumber: 3S0831
releaseDate: 2014-01-20
releaseDatePrecision: exact_hall_start_multi_source_with_conflict

generation: 5号機
systemType: ボーナス + 完走型RT / 周期CZ / 技術介入
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- K-NaviとALL7はホール導入開始/導入予定を **2014-01-20** と掲載するため、本DBの時系列キーは2014-01-20を採用。
- HAZUSEは導入開始日を **2014-01-27** とするため、導入日は `CONFLICT_RELEASE_DATE_2014_01_20_VS_2014_01_27` として保持する。
- HAZUSEで型式名 **パチスロうみねこのなく頃にHX**、検定番号 **3S0831** を確認。
- 2026年のスマスロ「Lパチスロうみねこのなく頃に2」は別機種。後継機の数値・リセット仕様を本機へ流用しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY / CONFLICT_FOR_EXACT_RELEASE_DATE

## payoutRateBySetting

### 市場掲載PAYOUT

| 設定 | 機械割 |
|---|---:|
| 1 | 96.1% |
| 2 | 98.7% |
| 3 | 100.2% |
| 4 | 103.4% |
| 5 | 106.2% |
| 6 | 108.5% |

### フル攻略時PAYOUT

| 設定 | 機械割 |
|---|---:|
| 1 | 102.2% |
| 2 | 104.1% |
| 3 | 106.6% |
| 4 | 109.0% |
| 5 | 112.7% |
| 6 | 114.7% |

- HAZUSEとpacnkで通常PAYOUTを照合。HAZUSEはフル攻略時数値と攻略条件も掲載。
- 技術介入機なので通常掲載値と完全攻略値を混ぜず、両系列を保持する。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG合成

| 設定 | 確率 |
|---|---:|
| 1 | 1/390.1 |
| 2 | 1/381.0 |
| 3 | 1/372.4 |
| 4 | 1/364.1 |
| 5 | 1/352.3 |
| 6 | 1/348.6 |

### REG

| 設定 | 確率 |
|---|---:|
| 1 | 1/399.6 |
| 2 | 1/394.8 |
| 3 | 1/381.0 |
| 4 | 1/372.4 |
| 5 | 1/356.2 |
| 6 | 1/364.1 |

### ボーナス合成

| 設定 | 確率 |
|---|---:|
| 1 | 1/197.4 |
| 2 | 1/193.9 |
| 3 | 1/188.3 |
| 4 | 1/184.1 |
| 5 | 1/177.1 |
| 6 | 1/178.1 |

- HAZUSE、pacnk、CrankySevenで主要値を照合。丸め差のみ。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- HAZUSE: 設定1～6 **約36.3～39.6G/50枚**。
- CrankySeven: **約36～40G/1000円**、高設定ほど回ると整理。
- 定義・丸めの範囲で整合するため、比較値は約36.3～39.6G/50枚を採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 完走型RT「真相究明モード」: **約+0.75枚/G**。
- K-Navi、パチマガスロマガ、CrankySevenで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- バトラBIG / ベアトリーチェBIG: **最大314枚**（439枚払い出し）。
- BIG: **最大216枚**（299枚払い出し）。
- REG: **最大48枚**（59枚払い出し）。
- パチマガスロマガで確認。
- RT「真相究明モード」: **30G / 50G / 90G**が基本。CZ中ベル成立時は技術介入成功50G・失敗30G、チェリー成立時90G。
- confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は周期ゲーム数消化でCZ「運命分岐モード」へ移行。
- CZ終了時の技術介入により次回周期は **250G or 500G**。ビタ押し成功なら250G、失敗なら500Gとなる構造をK-Navi / CrankySevenで確認。
- RTは完走型で、終了後は再びCZへ移行。
- 全小役・全RT内部遷移など実機完全再現用の細部は収集対象外。

## ceiling

- 周期CZ天井: **CZ終了後最大500Gで「運命分岐モード」**。
- 技術介入成功時は次回CZまで **250G**へ短縮可能。
- ボーナス天井ではなくCZ周期天井として保存する。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_DOES_NOT_CLEAR_CZ_CYCLE_COUNTER
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- CrankySevenの本機専用解析は、設定変更時について **「天井到達までのゲーム数はクリアされない」** と明記。
- したがって設定変更でも周期CZまでの内部ゲーム数を保持する仕様を `KEEP_CONFIRMED` とする。
- パチマガスロマガにも本機専用「朝イチ・設定変更」攻略項目が存在することを確認。
- 設定変更時の内部高確状態や液晶ステージ等の完全契約は、機種名・型式名・メーカー名と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 状態 / モード / ガックン」を組み替えて再探索したが、安全な直接値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_SINGLE_DIRECT_FOR_COUNTER_KEEP + PERIOD_ANALYSIS_INDEX_SUPPORT

### carryOverBehavior

- 設定変更でも周期天井までのゲーム数をクリアしない直接資料があるため、純据え置き時の周期進捗についても少なくともリセット要因は確認されない。
- ただし「据え置き時に周期G数・RT状態・内部状態をすべて保持する」という本機専用の明示的完全契約は回収できず、周期G数以外は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更なしの電源OFF→ONのみの場合について、本機専用の周期G数 / RT状態 / 内部状態の直接仕様を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 2026年「うみねこのなく頃に2」の電源OFF→ON仕様は後継機なので流用しない。

### gameCounterReset

- 設定変更時: **KEEP_CONFIRMED** — CZ周期天井までのG数はクリアされない。
- 据え置き時: **UNVERIFIED_EXPLICIT_CONTRACT**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の天井短縮は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常仕様として周期は250G / 500Gであり、設定変更によって周期G数がクリアされない。
- 技術介入による250G化はプレイヤー操作結果であり、リセット恩恵ではない。

### modeAfterReset

- 本機はAT機のような規定ゲーム数モード移行を主軸とせず、比較上重要なのはCZ周期250/500G。
- 設定変更専用モード / 朝一専用モードの存在・振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- 通常時の内部高確等が設定変更で再抽選か引継ぎか、直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、CZ確定、RT確定などの主要朝一恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 周期G数がクリアされないため、設定変更そのものによる朝一周期リセット恩恵は確認されない。

### resetPenalties

- 設定変更で周期進捗を失う不利は **NONE_CONFIRMED**。直接資料上は周期天井Gを保持する。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、液晶表示等による確定的な設定変更判別要素は、再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 周期到達Gだけで設定変更判別を行わない。設定変更でも周期G数を保持するため。

### publicMorningNumbers

- 設定変更時専用の公開モード振り分け、短縮率、朝一当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常仕様の比較数値として周期 **250G / 500G**のみ保持する。

## missingFields

- 設定変更時の内部高確状態・液晶状態の完全契約: UNVERIFIED_AFTER_RESEARCH。
- 純据え置き時の周期以外の内部状態保持契約: UNVERIFIED_AFTER_RESEARCH。
- 電源OFF→ONのみの挙動: UNVERIFIED_AFTER_RESEARCH。
- 本機固有の変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- 導入日: K-Navi / ALL7 **2014-01-20** vs HAZUSE **2014-01-27**。平均化せずCONFLICT保持。本DB時系列は複数資料一致の01-20を採用。
- 通常PAYOUTとフル攻略PAYOUTは定義が異なるので別系列として保存。
- 周期250G/500GはプレイヤーのCZ技術介入結果により変わる通常仕様であり、設定変更時の朝一専用振り分けと解釈しない。
- 2026年スマスロ「Lパチスロうみねこのなく頃に2」のリセット・電源OFF→ON仕様を初代へ流用しない。

## sources

取得日: 2026-09-06

- K-Navi: https://p-kn.com/slot/1971/
- ALL7 2014年1月導入一覧: https://www.all7.jp/plans/index/2014/01
- パチマガスロマガ 概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/31/a.php
- パチマガスロマガ 機種TOP / 朝イチ・設定変更項目: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/31/oizumi_slot_31.php
- HAZUSE: https://hazuse.com/machine/pachislot/3S0831/
- pacnk: https://pacnk.com/slot/2014/umineko/top.php
- pacnk 設定判別: https://pacnk.com/slot/tools/sh_umineko.html
- CrankySeven: https://crankyseven.com/umineko-pc.htm
- CrankySeven CZ: https://crankyseven.com/sp/umineko8-pc.htm
