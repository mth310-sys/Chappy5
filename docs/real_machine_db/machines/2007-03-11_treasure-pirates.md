# トレジャーパイレーツ

machineName: トレジャーパイレーツ
manufacturer: KPE
releaseDate: 2007-03-11（当時業界記事で納品開始予定）
generation: 5号機初期
systemType: ボーナス + 完走型RT

## payoutRateBySetting

### 旧パチマガスロマガ掲載値
- 設定1: 96.3%
- 設定2: 98.5%
- 設定3: 102.1%
- 設定4: 105.6%
- 設定5: 108.4%
- 設定6: 111.5%

### 5号機クロニクル掲載値
- 設定1: 96.7%
- 設定2: 98.1%
- 設定3: 100.5%
- 設定4: 102.7%
- 設定5: 104.5%
- 設定6: 106.4%

資料系列間の差が大きいため平均せず CONFLICT として双方保持。

信頼度: CONFLICT

## initialHitBySetting

### 赤7BIG
- 設定1: 1/451.97
- 設定2: 1/468.11
- 設定3: 1/451.97
- 設定4: 1/436.91
- 設定5: 1/425.56
- 設定6: 1/402.06

### 青7BIG
- 設定1: 1/485.45
- 設定2: 1/422.81
- 設定3: 1/385.51
- 設定4: 1/354.25
- 設定5: 1/344.93
- 設定6: 1/344.93

### ボーナス合成
- 設定1: 1/234.06
- 設定2: 1/222.16
- 設定3: 1/208.05
- 設定4: 1/195.63
- 設定5: 1/190.51
- 設定6: 1/185.65

当時業界記事の丸め値1/234（設定1）〜1/185（設定6）と整合。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

旧パチマガスロマガの1000円あたりプレイ数:
- 設定1: 31.48P
- 設定2: 31.48P
- 設定3: 31.48P
- 設定4: 31.48P
- 設定5: 31.98P
- 設定6: 32.48P

当時業界発表では平均34〜35G/1000円とされており、算出条件/公表値の定義差が疑われるため、同一値として平均せず注記して保持。

信頼度: CONFLICT

## netIncrease

- トレジャーチャンス: 約+0.6枚/G
- 赤7後: 100G完走型RT
- 青7後: 50G完走型RT
- 規定G消化またはBIG入賞で終了

信頼度: INDUSTRY

## basicPayout

- BIGは赤7・青7の2種類のみ。
- 旧パチマガ基本システム: 253枚超払い出しで終了、純増約204枚。
- 当時業界記事: 両BIGとも純増約174枚、RT込み期待獲得は赤7約250枚、青7約200枚。

純増枚数の定義/攻略手順差が考えられるため、約204枚と約174枚を平均せず双方保持。

信頼度: CONFLICT

## modeSpecificMinimumData

- 型式名: トレジャーパイレーツJA
- 5号機 / 7ライン / 3枚掛け専用。
- ボーナス後に完走型RT「トレジャーチャンス」へ突入。
- 赤7後100G、青7後50G。
- ベルを除く全役が同時抽選対象。
- 当時資料では限定3000台販売との記載あり。
- 通常時ゲーム数解除/天井は確認できず。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の設定変更時内部処理を明記した高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 通常時に天井/ゲーム数解除/モード管理を確認できない。RT中の据え置き時処理について本機固有の高信頼資料は未確認
- powerCycleBehavior: 電源OFF→ONのみの本機固有挙動を明記した資料を確認できず UNVERIFIED
- gameCounterReset: 通常時天井/ゲーム数解除を確認できず、天井用ゲーム数カウンタは物差し上非該当
- ceilingAfterReset: リセット天井/天井短縮は確認できず
- modeAfterReset: 通常時モード/朝一専用モードは確認できず
- stateAfterReset: 通常時状態管理の設定変更時再抽選情報は確認できず。RT中設定変更/電断処理は UNVERIFIED
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 朝一/設定変更固有の主要出玉恩恵は確認できず
- resetPenalties: 設定変更固有の主要不利要素は確認できず
- resetDetection: 「設定変更 / リセット / 朝一 / 据え置き / ガックン」まで再探索したが、本機固有の高信頼な変更判別情報を確定できず UNVERIFIED
- numericResetData: 公開朝一専用数値は確認できず

### resetBehavior 再探索メモ

「トレジャーパイレーツ」「トレジャーパイレーツJA」「KPE」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / モード / RT」を組み合わせ、当時業界記事、P-WORLD、旧パチマガスロマガ、古い機種DB、後年整理資料を横断。通常時天井/モードは確認できなかったが、RT中の設定変更・電断処理やガックン判別を直接示す高信頼資料は発見できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

1. グリーンべると / P-WORLD業界ニュース — KPEがパチスロ2機種を同時発表
   - https://web-greenbelt.jp/00004042/
   - https://news.p-world.co.jp/articles/2026/greenbelt
   - 3月11日納品予定、RT100G/50G、純増約0.6枚/G、合算1/234〜1/185、BIG約174枚、RT込み約250枚/約200枚、平均34〜35G/1000円
   - reliability: INDUSTRY
2. パチマガスロマガ旧攻略 — ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/03/h.php
   - 設定別赤7/青7/合算、PAYOUT 96.3〜111.5%
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ旧攻略 — 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/03/c.php
   - 1000円あたり31.48〜32.48P
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧攻略 — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/03/a.php
   - 5号機/7ライン/3枚掛け専用、赤7後100P/青7後50P RT、253枚超払い出し終了、純増約204枚、限定3000台
   - reliability: ANALYSIS_HIGH
5. P-WORLD機種DB — トレジャーパイレーツ
   - https://www.p-world.co.jp/machine/database/4581
   - 型式名トレジャーパイレーツJA、赤7後100G/青7後50G RT、253枚超払い出し終了
   - reliability: ANALYSIS_HIGH
6. 5号機クロニクル — KPE 5号機一覧
   - https://5goki.com/kpe
   - 2007/3導入、機械割96.7〜106.4%
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更時の本機固有内部処理
- RT中の設定変更/据え置き/電源OFF→ON処理
- 本機固有の変更判別
- 公開朝一専用数値

## conflicts

- 機械割: 旧パチマガスロマガ 96.3 / 98.5 / 102.1 / 105.6 / 108.4 / 111.5% と、5号機クロニクル 96.7 / 98.1 / 100.5 / 102.7 / 104.5 / 106.4% が競合。
- 1000円ベース: 旧パチマガ解析31.48〜32.48P と当時業界発表平均34〜35Gで差。算出条件/公表定義差を疑い平均しない。
- BIG純増: 旧パチマガ約204枚 と当時業界記事約174枚が競合。RT込み期待値（赤約250枚/青約200枚）とは別定義として保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
