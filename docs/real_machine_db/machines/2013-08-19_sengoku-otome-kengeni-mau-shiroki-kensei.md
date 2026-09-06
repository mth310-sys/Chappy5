# 戦国乙女～剣戟に舞う白き剣聖～

machineName: 戦国乙女～剣戟に舞う白き剣聖～
manufacturer: オリンピア
releaseDate: 2013-08-19
releaseDatePrecision: exact_day_multi_source
formalModel: 戦国乙女 剣戟に舞う白き剣聖A1
inspectionNumber: 3S0295
generation: 5号機
systemType: 擬似ボーナス + ART
recordStatus: COMPLETE_CORE_WITH_RESET_MODE_NUMERIC__CARRYOVER_POWER_INTERNAL_CONTRACT_PARTIAL

## identity

- ホール導入開始: **2013-08-19**。K-Navi、HAZUSE、後年機種DBで一致。当時新機種資料は **2013-08-18納品予定** としており整合する。
- manufacturer: **オリンピア**。
- 型式名: **戦国乙女 剣戟に舞う白き剣聖A1**。
- 検定番号: **3S0295**。
- generation/system: **5号機 / 擬似ボーナス + ART「強カワRUSH」**。
- confidence: ANALYSIS_HIGH + PERIOD_SECONDARY

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.5% |
| 3 | 100.3% |
| 4 | 104.7% |
| 5 | 108.7% |
| 6 | 113.2% |

- K-Navi、パチマガスロマガ、HAZUSE系、当時新機種資料で同系列を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「強カワRUSH」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/667.4 |
| 2 | 1/647.7 |
| 3 | 1/605.9 |
| 4 | 1/522.5 |
| 5 | 1/459.7 |
| 6 | 1/397.7 |

### 擬似ボーナス等

| 設定 | 乙女BONUS | 希望の光ゾーン | ボーナス合成 | ボーナス+ART初当たり合成 |
|---|---:|---:|---:|---:|
| 1 | 1/434.3 | 1/578.8 | 1/244.4 | 1/178.9 |
| 2 | 1/396.2 | 1/633.2 | 1/240.1 | 1/175.2 |
| 3 | 1/417.3 | 1/554.0 | 1/234.6 | 1/169.1 |
| 4 | 1/364.0 | 1/574.4 | 1/219.8 | 1/154.7 |
| 5 | 1/391.1 | 1/466.3 | 1/210.0 | 1/144.1 |
| 6 | 1/323.7 | 1/500.6 | 1/194.3 | 1/130.5 |

- 百花繚乱BONUS: **1/16384.0（全設定共通）**。
- パチマガスロマガ、K-Navi、HAZUSE系で主要値を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G/50枚（1000円）**。
- 2013年当時の新機種スペック資料で確認。
- 別系統の精密設定別ベースまでは確認できないため `ANALYSIS_SINGLE_PERIOD`。

## netIncrease

- ART「強カワRUSH」: **約+2.2枚/G**。
- 1セット **50G+α**。
- K-Navi、HAZUSE系、当時新機種資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 百花繚乱BONUS: **約203枚**。
- 乙女BONUS: **平均約146枚**。
- 希望の光ゾーン: **平均約48枚**。
- ART「強カワRUSH」: **1セット50G+α / 約2.2枚/G**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時の規定ゲーム数モード: **通常A / 通常B / 通常C / 天国A / 天国B**。
- 天国A/Bは **99G以内**のボーナス当選が確定。
- 通常A/Bは最大999G帯、通常Cは最大1059G帯。資料表現では最大天井を **1059G / 1060G / 1056G** とする差があり、前兆・カウント定義差を含むため `CONFLICT_CEILING_EXPRESSION` として保持。
- 700G以上のハマリからのボーナスは白7乙女BONUS、1000G以上では白7 + 次回天国の恩恵を複数解析で確認。
- 通常時全モード移行テーブルは物差し目的外のため収集しない。設定変更時の専用分布のみresetBehaviorへ保存。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_GAME_AND_MODE_RESET_CONFIRMED__RESET_MODE_DISTRIBUTION_PUBLIC__POWER_DISPLAY_CHANGE_CONFIRMED__CARRYOVER_POWER_INTERNAL_KEEP_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更で **天井までのゲーム数と内部モードがリセット**されることを本機固有解析で確認。
- 設定変更後は通常A / 天国A / 天国Bへ専用再抽選される。
- 設定変更時の内部状態（低確/高確等）専用振り分けは、今回の再探索で安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 純据え置き時の天井G数・内部モード・内部状態の保持を直接規定する、本機固有かつ確認可能な資料は **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動から推測してKEEPとはしない。

### powerCycleBehavior

- **電源OFF→ONだけでも液晶ステージは変化する**ことを本機固有資料で確認。
- 単純電断時に内部ゲーム数・規定Gモード・内部状態を保持するかの直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- したがって朝一の液晶ステージ変化だけでは設定変更判別に使えない。

### gameCounterReset

- setting change: **RESET_CONFIRMED**。
- carry over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の固定短縮天井は **NONE_CONFIRMED**。
- ただし設定変更後モード再抽選により **天国A/B合計20.5%（設定1～3） / 25.5%（設定4～6）** で99G以内当選モードへ入るため、朝一の実質的な早当たり優遇がある。
- 通常最大天井表現は資料に **1059G / 1060G / 1056G** の差。平均化しない。

### modeAfterReset

設定変更後モード振り分け:

| 設定 | 通常A | 天国A | 天国B |
|---|---:|---:|---:|
| 1～3 | 79.50% | 20.00% | 0.50% |
| 4～6 | 74.50% | 25.00% | 0.50% |

- 設定変更後に通常B / 通常Cへ直接移行する掲載は当該表ではなし。
- K-Navi「モード移行率」の設定変更後専用表を採用。
- confidence: ANALYSIS_HIGH

### stateAfterReset

- 本機に内部状態移行が存在することはHAZUSEで確認。
- 設定変更時専用の状態振り分け、据え置き・電断時の状態保持契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後の **天国A/B合計選択率 20.5%（設定1～3） / 25.5%（設定4～6）**。
- 天国A/B選択時は **99G以内にボーナス当選**。
- 固定の短縮天井ではなく、設定変更専用モード再抽選による朝一優遇として記録。

### resetPenalties

- 設定変更専用の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 電源OFF→ONのみでもステージが変化するため、**朝一ステージ単独では変更判別不可/弱い**。
- 本機固有のガックン、初期出目、ランプ等の確定的変更判別は検索語・資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 1000G超ハマリ後の次回天国等は通常ゲーム性由来であり、設定変更判別専用要素とは扱わない。

### publicMorningNumbers

- settingChangeModeDistribution:
  - settings1to3: **通常A 79.50% / 天国A 20.00% / 天国B 0.50%**
  - settings4to6: **通常A 74.50% / 天国A 25.00% / 天国B 0.50%**
- resetHeavenOrBetterRate:
  - settings1to3: **20.50%**
  - settings4to6: **25.50%**
- heavenCeiling: **99G以内**
- resetSpecificFixedCeiling: **NONE_CONFIRMED**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-06**

1. K-Navi「戦国乙女～剣戟に舞う白き剣聖～」
   - https://p-kn.com/slot/1889/
   - 導入2013-08-19、ボーナス+ART合算、機械割、ART 50G+α・約2.2枚/G。
   - confidence: ANALYSIS_HIGH

2. K-Navi「モード移行率」
   - https://p-kn.com/slot/1889/45678/
   - 設定変更後: 設定1～3 通常A79.50% / 天国A20.00% / 天国B0.50%、設定4～6 通常A74.50% / 天国A25.00% / 天国B0.50%。
   - confidence: ANALYSIS_HIGH

3. パチマガスロマガ「ボーナス確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/110/h-1.php
   - 百花繚乱1/16384、乙女BONUS、希望の光ゾーン、合成、ART初当たり、PAYOUT。
   - confidence: ANALYSIS_HIGH

4. HAZUSE「戦国乙女～剣戟に舞う白き剣聖～」
   - https://hazuse.com/machine/pachislot/SX0049/
   - 型式A1、検定3S0295、導入2013-08-19、ART/天井/モード、百花繚乱約203枚。
   - confidence: ANALYSIS_HIGH

5. HAZUSE「基本スペック」
   - https://hazuse.com/machine/pachislot/SX0049/genre/201/
   - 設定別乙女BONUS/希望の光ゾーン/百花繚乱/合成。
   - confidence: ANALYSIS_HIGH

6. pacnk「戦国乙女 剣戟に舞う白き剣聖」
   - https://pacnk.com/slot/2013/sengokuotome/top.php
   - 設定変更で天井G数・内部モードリセット、電源ON/OFFでもステージ変化、最大天井1060G表記。
   - confidence: ANALYSIS_SECONDARY

7. 2013年当時新機種スペック資料（スロスター）
   - https://ameblo.jp/slostar/entry-11554947959.html
   - 8/18納品予定、ベース約31G/1000円、百花繚乱203枚、乙女BONUS平均146枚、希望の光ゾーン平均48枚、ART約2.2枚/G・50G、設定別主要数値。
   - confidence: PERIOD_SECONDARY

8. パチナビ「戦国乙女～剣戟に舞う白き剣聖～」
   - https://pachinavi.net/machines/sengoku-otome-1/
   - 導入日、機械割、ART初当たり、基本獲得目安の後年整理照合。
   - confidence: SECONDARY_RETROSPECTIVE

## missingFields

- 据え置き時の天井G数・モード・内部状態の直接保持契約
- 単純電源OFF→ON時の内部G数・モード・状態保持契約
- 設定変更時の内部状態専用振り分け
- 本機固有ガックン/初期出目/ランプ等の変更判別

## conflicts

- 天井最大値表現: HAZUSE **最大1056G**、K-Navi/当時ハイエナ資料のモード表では通常C **最大1059G**、pacnkは **1060G消化**。前兆・到達/消化カウントの定義差を含む可能性があるため平均化しない。
- K-Naviトップの「ボーナス合算」1/178.9～1/130.5は、詳細解析の「ボーナス+ART初当たり合成」に相当する。一方パチマガスロマガの純ボーナス合成は1/244.4～1/194.3。定義違いなのでCONFLICTではなく別指標として分離。
- 後継機 **西国参戦編（2014-06-02）** の周期抽選・純増約2.0枚/G・リセット情報は本機に混入させない。