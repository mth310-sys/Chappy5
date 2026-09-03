# CSスロ原人

machineName: CSスロ原人
manufacturer: アビリット
releaseDate: 2006-11-22（本州初導入。北海道で先行導入あり）
generation: 5号機初期
systemType: ボーナス + RT / CS（カードスロット）
coreStatus: COMPLETE_CORE_RESET_QA_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0〜97.1% |
| 2 | 99.6% |
| 3 | 101.9% |
| 4 | 104.6〜104.7% |
| 5 | 106.2% |
| 6 | 107.4% |

信頼度: ANALYSIS_HIGH

pacnkと5号機クロニクルで設定1・4に0.1ptの丸め差があるため範囲表記。平均化しない。

## initialHitBySetting

### BIG / 原人ラッシュ(REG相当)

| 設定 | BIG | 原人ラッシュ | 合成（概算資料値） |
|---|---:|---:|---:|
| 1 | 1/303.4 | 1/555.4 | 約1/196 |
| 2 | 1/288.7 | 1/532.8 | 約1/187 |
| 3 | 1/275.4 | 1/520.1 | 約1/180 |
| 4 | 1/269.7 | 1/500.3 | 約1/175 |
| 5 | 1/263.2 | 1/485.5 | 約1/171 |
| 6 | 1/259.0 | 1/485.5 | 約1/169 |

信頼度: ANALYSIS_HIGH

P-WORLD、pacnk、5号機クロニクルで主要確率が一致（丸め差のみ）。

## baseGamesPer50

パチマガスロマガ掲載の1000円あたりゲーム数（20円スロット50枚相当）:

| 設定 | G/50枚 |
|---|---:|
| 1 | 35.54G |
| 2 | 35.64G |
| 3 | 35.74G |
| 4 | 36.54G |
| 5 | 36.95G |
| 6 | 37.29G |

信頼度: ANALYSIS_SINGLE

## netIncrease

RT純増/G: UNVERIFIED

- BIG後50G RT
- 原人ラッシュ後20G RT

## basicPayout

- BIG: 345枚超の払い出しで終了 / 純増約283枚
- 原人ラッシュ(REG相当): 135枚超の払い出しで終了 / 純増約120枚

信頼度: ANALYSIS_SINGLE

## modeSpecificMinimumData

- 6段階設定
- ボーナスは小役との同時成立
- BIG後50G RT
- 原人ラッシュ後20G RT
- **天井機能は非搭載**（pacnk現行整理で明記。旧パチマガスロマガも攻め時・ヤメ時「特にナシ」で、ボーナス後固定RTが主な状態性）
- CS = カードスロット。遊技機本体から貸出メダルを直接払い出す方式だが、ゲーム性能は通常のパチスロとして扱う

## resetBehavior — v0.7 QA

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE**。本機固有の設定変更時に、ボーナス後RT中の残りゲーム数/RT状態を保持・終了・再構成するかの直接資料を確定できず。天井・周期・ART/ATモードは非搭載のため、それらのゲーム数リセット問題は対象外。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE**。据え置き時の固定RT残Gの扱いを本機固有資料で直接確定できず。天井カウンタや周期モードは存在しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE**。単純電源OFF→ON時にBIG後50G/原人ラッシュ後20G RTの残G・RT状態をどう扱うか高信頼な直接資料を確定できず。一般的な5号機挙動から推測しない。

gameCounterReset: **NOT_APPLICABLE_FOR_CEILING_OR_CYCLE**。天井非搭載、通常時周期救済なし。ボーナス後RTの残G処理は別項目としてUNVERIFIED_AFTER_RESEARCH。

ceilingAfterReset: **NOT_APPLICABLE**。天井機能非搭載。

modeAfterReset: **NOT_APPLICABLE_FOR_PERSISTENT_NORMAL_MODE**。通常時の天井/周期/ARTモードを持たない。RT状態処理のみ未確認。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE**。ボーナス後固定RT中に設定変更/据え置き/単純電断を跨ぐ場合の状態処理は直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機初期・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の朝一高確、短縮天井、RT付与等は確認できず。ボーナス後RTは通常仕様で朝一恩恵ではない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。RT残G消失等を直接確認できないため不利要素として推測登録しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ランプ、RT挙動等を用いた本機固有の設定変更/据え置き判別を、検索語・資料系統を変えた再探索でも高信頼に確定できず。

numericResetData:
- normalRTAfterBIG: **50G**
- normalRTAfterGenjinRush: **20G**
- normalCeiling: **NOT_APPLICABLE / 天井非搭載**
- resetCeilingShortening: **NOT_APPLICABLE**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **NOT_APPLICABLE_FOR_PERSISTENT_NORMAL_MODE**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: COMPLETE_FOR_CEILING_CYCLE_NA_RT_STATE_AND_DETECTION_UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-08-31（resetBehavior QA追補: 2026-09-03）

1. グリーンべると — アビリットのカードパチスロ機、本州初導入
   - https://web-greenbelt.jp/00004918/
   - 2006-11-22本州初導入、北海道で先行1店舗、CS機の実導入状況
   - reliability: INDUSTRY
2. パチマガスロマガ — CSスロ原人 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/13/a.php
   - 6段階設定、BIG後50G/REG後20G RT、BIG/REG払い出し・純増
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — CSスロ原人 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/13/c.php
   - 1000円あたり35.54〜37.29G
   - reliability: ANALYSIS_HIGH
4. P-WORLD — CSスロ原人
   - https://www.p-world.co.jp/machine/database/4335
   - BIG 1/303.4〜1/259.0、原人ラッシュ1/555.4〜1/485.5
   - reliability: INDUSTRY
5. pacnk — CSスロ原人 設定判別ツール
   - https://pacnk.com/slot/tools/sh_cssurogenzin.html
   - 設定別BIG/原人ラッシュ/機械割、天井非搭載、ボーナス後固定RT
   - reliability: ANALYSIS_SINGLE
6. 5号機クロニクル — コナミアミューズメント（高砂電器・アビリット）5号機一覧
   - https://5goki.com/konami
   - 設定別BIG/REG/合成/機械割
   - reliability: ANALYSIS_SINGLE
7. パチマガスロマガ — CSスロ原人 攻略トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/13/abilit_slot_13.php
   - 攻め時・ヤメ時「特にナシ」、基本システム各項目への導線
   - reliability: ANALYSIS_HIGH

## missingFields

- RT純増/G
- settingChangeBehavior for active RT: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior for active RT: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior for active RT: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- public reset-specific morning numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- 導入時期: 一部後年DBは2006/10表記だが、当時業界記事では北海道先行後、本州初導入が2006-11-22。実導入時期優先で本DBは2006-11に配置。
- 機械割: 設定1が97.0%/97.1%、設定4が104.6%/104.7%の小差。丸め差として双方を保持。
