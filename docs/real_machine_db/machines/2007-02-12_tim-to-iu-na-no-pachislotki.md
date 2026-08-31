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

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 設定変更時のCHANCE ZONE/RED ZONE内部状態を明記した高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 据え置き時のRT/CZ内部状態の引継ぎを明記した本機固有高信頼資料を確認できず UNVERIFIED
- powerCycleBehavior: 電源OFF→ONのみのCZ/RT状態処理を明記した公開資料を確認できず UNVERIFIED
- gameCounterReset: 通常時ゲーム数天井を確認せず、天井カウンタは非該当と整理
- ceilingAfterReset: 非該当（通常時天井を確認せず）
- modeAfterReset: 朝一専用モード/設定変更専用モードを確認できず
- stateAfterReset: 設定変更時のCZ/RT内部状態処理は未確定
- advantageousSectionReset: 非該当
- resetBenefits: 設定変更・朝一固有の主要恩恵を確認できず
- resetPenalties: 設定変更固有の主要不利要素を確認できず
- resetDetection: 本機固有のガックン・表示等による変更判別を高信頼で確定できず
- numericResetData: 設定変更時専用の公開数値は確認できず

### resetBehavior 再探索メモ

「TIMという名のパチスロ機 / HEIWABROS / 平和」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RED ZONE / CHANCE ZONE / RT引継ぎ / 天井 / ガックン」を組み合わせ、当時業界記事、P-WORLD、パチマガスロマガ旧攻略、HAZUSE、5号機クロニクル、後年回顧を横断。通常時天井なし相当の資料構造までは確認できたが、設定変更・据え置き・電断時のCZ/RT処理を高信頼で確定できなかったため推測しない。

## sources

取得日: 2026-08-31

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

## conflicts

- 機械割: パチマガ旧攻略シミュレート値 96.98/98.80/101.19/103.41/105.63/107.70%、5号機クロニクル 96.7/98.3/100.5/102.5/104.5/106.3%。平均せず双方保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
