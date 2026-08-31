# 革命戦士長州力

machineName: 革命戦士長州力
manufacturer: トリビー（サミー開発支援）
releaseDate: 2007-03-19（当時業界記事で納品開始予定）
generation: 5号機初期
systemType: ノーマルA / ボーナス主体（RT・AT非搭載）

## payoutRateBySetting

### 旧パチマガスロマガ掲載シミュレート値
- 設定1: 97.81%
- 設定2: 97.69%
- 設定3: 100.90%
- 設定4: 105.24%
- 設定5: 109.86%
- 設定6: 110.00%

### 5号機クロニクル掲載値
- 設定1: 96.9%
- 設定2: 96.8%
- 設定3: 99.8%
- 設定4: 103.8%
- 設定5: 108.0%
- 設定6: 108.0%

### HAZUSE掲載値
- 設定1: 95.0%
- 設定2: 96.8%
- 設定3: 99.8%
- 設定4: 103.8%
- 設定5: 106.0%
- 設定6: 108.0%

資料系列間で差が大きいため平均せず CONFLICT として保持。

信頼度: CONFLICT

## initialHitBySetting

旧パチマガスロマガ掲載値。

### 赤BIG
- 設定1: 1/949.80
- 設定2: 1/630.15
- 設定3: 1/595.78
- 設定4: 1/555.39
- 設定5: 1/516.03
- 設定6: 1/636.27

### 青BIG
- 設定1: 1/949.80
- 設定2: 1/630.15
- 設定3: 1/595.78
- 設定4: 1/555.39
- 設定5: 1/516.03
- 設定6: 1/636.27

### BIG合成
- 設定1: 1/474.90
- 設定2: 1/315.08
- 設定3: 1/297.89
- 設定4: 1/277.69
- 設定5: 1/258.02
- 設定6: 1/318.14

### 赤MID
- 設定1: 1/636.27
- 設定2: 1/1524.09
- 設定3: 1/1310.72
- 設定4: 1/1149.75
- 設定5: 1/1024.00
- 設定6: 1/636.27

### 青MID
- 設定1: 1/636.27
- 設定2: 1/1524.09
- 設定3: 1/1310.72
- 設定4: 1/1149.75
- 設定5: 1/1024.00
- 設定6: 1/636.27

### MID合成
- 設定1: 1/318.14
- 設定2: 1/762.05
- 設定3: 1/655.36
- 設定4: 1/574.88
- 設定5: 1/512.00
- 設定6: 1/318.14

BIG合成とMID合成から算出される全ボーナス合算は設定1約1/190.5、設定6約1/159.1で、当時業界記事の1/190〜1/159と整合する。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

- 当時グリーンべると/P-WORLD業界記事: 1000円あたり37〜38G
- HAZUSE当時解析: 1000円あたり約37〜38回転

50枚貸しを前提とした比較値として約37〜38G/50枚。

信頼度: ANALYSIS_HIGH

## netIncrease

非該当。RT/AT非搭載のノーマルAタイプ。

## basicPayout

- BIG: 約312枚
- MIDDLE BONUS / CB: 約182〜183枚
- P-WORLD型式情報: BIGは346枚以上の払い出しで終了、MIDDLEは196枚以上の払い出しで終了

信頼度: INDUSTRY

## modeSpecificMinimumData

- 型式名: カクメイセンシチョウシュウリキ
- 5号機。
- RT/ATなどの付加機能なし。
- BIG 2種類 + MIDDLE BONUS 2種類。
- 全小役でボーナス同時当選の可能性あり。
- 通常時ゲーム数解除・天井・通常モード管理は確認できず。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の設定変更時内部処理を明記した高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 通常時天井・ゲーム数解除・モード管理を確認できないため、それらの据え置き引継ぎは物差し上非該当。本機固有のその他内部状態引継ぎ資料は未確認
- powerCycleBehavior: 電源OFF→ONのみの本機固有挙動を明記した高信頼資料を確認できず UNVERIFIED
- gameCounterReset: 通常時天井/ゲーム数解除を確認できず、天井用ゲーム数カウンタは物差し上非該当
- ceilingAfterReset: リセット天井/天井短縮は確認できず
- modeAfterReset: 通常時モード/朝一専用モードは確認できず
- stateAfterReset: ホール経営・朝一狙いに影響する設定変更時の主要状態再抽選は確認できず
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 朝一/設定変更固有の主要出玉恩恵は確認できず
- resetPenalties: 設定変更固有の主要不利要素は確認できず
- resetDetection: 「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」まで検索語を変えて再探索したが、本機固有の高信頼な変更判別情報を確定できず UNVERIFIED
- numericResetData: 公開朝一専用数値は確認できず

### resetBehavior 再探索メモ

「革命戦士長州力」「カクメイセンシチョウシュウリキ」「トリビー」「サミー開発支援」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン / 変更判別」を組み合わせ、当時業界記事、P-WORLD、旧パチマガスロマガ、HAZUSE、古い機種DB、後年整理資料を横断。通常時の天井・モード管理は確認できなかったが、本機固有の設定変更/電断/ガックン挙動を直接示す高信頼資料は発見できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

1. グリーンべると — トリビー新機種に長州力が参戦
   - https://web-greenbelt.jp/00003995/
   - 2007-03-19納品予定、ノーマルA、RT/AT非搭載、BIG約312枚、CB約183枚、合算1/190〜1/159、1000円37〜38G
   - reliability: INDUSTRY
2. P-WORLD業界ニュース — トリビー新機種に長州力が参戦
   - https://news.p-world.co.jp/articles/2059/greenbelt
   - 上記業界発表の別掲載
   - reliability: INDUSTRY
3. パチマガスロマガ旧攻略 — ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/02/h.php
   - 設定別赤/青BIG、赤/青MID、BIG/MID合成、PAYOUTシミュレート値
   - reliability: ANALYSIS_HIGH
4. P-WORLD機種DB — 革命戦士長州力
   - https://www.p-world.co.jp/machine/database/4624
   - 型式名、BIG346枚以上払い出し終了、MIDDLE196枚以上払い出し終了
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — トリビー5号機一覧
   - https://5goki.com/trivy
   - 2007/3導入、機械割96.9〜108.0%
   - reliability: ANALYSIS_SINGLE
6. HAZUSE — 革命戦士長州力 解析・機種情報
   - https://hazuse.com/i/data/cyousyusiki/top.htm
   - 2007年3月、RT/AT非搭載、1000円37〜38回転、BIG約312枚、MIDDLE約182枚、機械割95.0〜108.0%
   - reliability: ANALYSIS_SINGLE

## missingFields

- 本機固有の設定変更時内部処理
- 電源OFF→ONのみの本機固有挙動
- 本機固有の変更判別/ガックン情報
- 公開朝一専用数値

## conflicts

- 機械割: 旧パチマガ 97.81 / 97.69 / 100.90 / 105.24 / 109.86 / 110.00%、5号機クロニクル 96.9 / 96.8 / 99.8 / 103.8 / 108.0 / 108.0%、HAZUSE 95.0 / 96.8 / 99.8 / 103.8 / 106.0 / 108.0%。平均せず全系列を保持。
- MIDDLE純増: 業界記事約183枚、HAZUSE約182枚。丸め差の可能性が高いが原数値を双方保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
