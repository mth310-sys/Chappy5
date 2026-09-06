# TIMという名のパチスロ機

machineName: TIMという名のパチスロ機
manufacturer: HEIWABROS / 平和
releaseDate: 2007-02-12
generation: 5号機初期
systemType: A+RT / ボーナス後CZ経由RT

## payoutRateBySetting

パチマガスロマガ旧攻略シミュレート値:
- 設定1: 96.98%
- 設定2: 98.80%
- 設定3: 101.19%
- 設定4: 103.41%
- 設定5: 105.63%
- 設定6: 107.70%

5号機クロニクルは 96.7 / 98.3 / 100.5 / 102.5 / 104.5 / 106.3% と掲載しており差があるため平均せずCONFLICT。

信頼度: CONFLICT（主値ANALYSIS_HIGH）

## initialHitBySetting

### RED BONUS
- 1: 1/560.14
- 2: 1/546.13
- 3: 1/528.52
- 4: 1/524.29
- 5: 1/516.03
- 6: 1/512.00

### GOLGO BONUS
- 1: 1/963.76
- 2: 1/923.04
- 3: 1/873.81
- 4: 1/809.09
- 5: 1/753.29
- 6: 1/697.19

### REG
- 1: 1/809.09
- 2: 1/771.01
- 3: 1/720.18
- 4: 1/668.73
- 5: 1/624.15
- 6: 1/590.41

### 合成
- 1: 1/246.38
- 2: 1/237.45
- 3: 1/225.99
- 4: 1/215.58
- 5: 1/205.44
- 6: 1/196.80

信頼度: ANALYSIS_HIGH / INDUSTRY

## baseGamesPer50

1000円あたり平均プレイ数:
- 1: 36.45P
- 2: 36.82P
- 3: 37.20P
- 4: 37.60P
- 5: 38.06P
- 6: 38.58P

信頼度: ANALYSIS_HIGH

## netIncrease

- RT「RED ZONE」: 最大100G、約+0.5枚/G。
- 全ボーナス後に最大50GのCHANCE ZONEへ入り、特殊リプレイ成立でRED ZONEへ。
- RED ZONEはボーナス成立で終了。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout

- RED/GOLGO BIG: 345枚超払い出し終了、純増約288枚
- REG: 210枚超払い出し終了、純増約180枚

グリーンべると当時記事ともBIG約288枚、REG約180枚で一致。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン / 3枚掛け専用。
- 全ボーナス後に50G CHANCE ZONE。
- CHANCE ZONE中の特殊リプレイ確率はRED BONUS後1/48.01、GOLGO BONUS後1/120.03、REG後1/399.61。
- 特殊リプレイ成立でRT「RED ZONE」100Gへ。
- 通常時のゲーム数天井は確認できず、パチマガ旧攻略の攻め時・ヤメ時は「特にナシ」。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時のCHANCE ZONE / RED ZONE内部状態および残G数の処理を本機固有で明記した高信頼資料は、再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機RT機の挙動から推定しない。

### carryOverBehavior

- 据え置き時のCZ/RT内部状態・残G数の引継ぎを本機固有で明記した高信頼資料は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更なし電源OFF→ONのみの場合のCZ/RT状態・残G数処理を直接示す公開資料は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 通常時ゲーム数天井は確認できず、通常時天井カウンタは **NOT_APPLICABLE_NO_NORMAL_GAME_CEILING_CONFIRMED**。
- CZ50G / RT100Gはボーナス後状態の規定ゲーム数であり、通常時天井とは区別する。

### ceilingAfterReset

- 通常時天井を確認せず、設定変更専用短縮天井も **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 朝一専用モード / 設定変更専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- CHANCE ZONE / RED ZONE内部状態の設定変更・据え置き・純電断時処理は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更・朝一固有の主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、表示等による高信頼な変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- 設定変更時専用の比較可能な公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetBehavior 再探索メモ

- `TIMという名のパチスロ機 / TIM / HEIWABROS / 平和` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RED ZONE / CHANCE ZONE / RT引継ぎ / 天井 / ガックン / 変更判別` を組み合わせて再探索。
- グリーンべると当時業界記事、P-WORLD、パチマガスロマガ旧攻略、HAZUSE、5号機クロニクル、後年回顧を横断。
- 通常時天井なし相当の資料構造、CZ50G、RT100G、RT純増約0.5枚/Gは再確認できたが、設定変更/据え置き/電断時のCZ/RT処理を直接固定できなかったためPARTIALを維持する。
- 既存 `COMPLETE_CORE` は性能コア完了判定として維持し、resetBehavior QAのみ別管理する。

## sources

取得日: 2026-09-07（resetBehavior QA再取得）

1. グリーンべると — 平和から遊パチと5号機が同時発表
   - https://web-greenbelt.jp/00003985/
   - 納品2007-02-12、BIG約288枚/REG約180枚、CZ50G、RT100G、純増約0.5枚/G、合成1/246.38〜1/196.80
   - reliability: INDUSTRY
2. P-WORLD — TIMという名のパチスロ機
   - https://www.p-world.co.jp/machine/database/4558
   - 3ボーナス、全ボーナス後CZ50G、RED ZONE RT100G
   - reliability: INDUSTRY
3. パチマガスロマガ旧攻略 — 基本
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/a.php
   - 5号機/5ライン/3枚掛け、BIG約288枚、REG約180枚、RT100G
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧攻略 — ボーナス/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/h.php
   - 設定別3ボーナス・合成、PAYOUT 96.98〜107.70%
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧攻略 — 小役/1000円
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/c.php
   - 36.45〜38.58P/1000円、CZ中特殊リプレイ確率
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧攻略 — 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/heiwabros_slot_02.php
   - 攻め時・ヤメ時「特にナシ」
   - reliability: ANALYSIS_HIGH
7. HAZUSE — TIMという名のパチスロ機
   - https://hazuse.com/i/data/tim/top.htm
   - 2007年2月、CZ/RED ZONE仕様、RT純増約0.5枚/G
   - reliability: ANALYSIS_SINGLE
8. 5号機クロニクル — 平和＆オリンピア5号機一覧
   - https://5goki.com/heiwa-olympia
   - 2007年2月、機械割96.7〜106.3%
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更/据え置き/電源OFF→ON時のCZ/RT内部状態処理
- 本機固有のresetDetection
- 設定変更専用の公開朝一数値

## conflicts

- 機械割: パチマガ旧攻略シミュレート値 96.98/98.80/101.19/103.41/105.63/107.70%、5号機クロニクル 96.7/98.3/100.5/102.5/104.5/106.3%。平均せず双方保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
