# パチスロ鉄拳伝タフ

machineName: パチスロ鉄拳伝タフ
manufacturer: オーイズミネオ / オーイズミ
releaseDate: 2007-02（正確な全国納品日は今回の再探索でも確定できず）
generation: 5号機初期
systemType: ボーナス+完走型RT

## payoutRateBySetting

現存する設定判別整理資料の掲載値:

- 設定1: 96.0%
- 設定2: 98.0%
- 設定3: 101.0%
- 設定4: 103.0%
- 設定5: 106.0%
- 設定6: 108.0%

パチマガスロマガ旧攻略のPAYOUT欄は「現在調査中」のまま残存しているため、上記は単一整理資料値として保持する。

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

### BIG合成
- 設定1: 1/496.48
- 設定2: 1/489.07
- 設定3: 1/474.90
- 設定4: 1/461.52
- 設定5: 1/442.81
- 設定6: 1/420.10

### REG合成
- 設定1: 1/753.29
- 設定2: 1/736.36
- 設定3: 1/728.18
- 設定4: 1/697.19
- 設定5: 1/668.73
- 設定6: 1/648.87

### ボーナス合成
- 設定1: 1/299.25
- 設定2: 1/293.88
- 設定3: 1/287.44
- 設定4: 1/277.69
- 設定5: 1/266.41
- 設定6: 1/255.00

### ボーナス種別
- 赤BIG: 1/992.97 → 1/840.21
- 白BIG: 1/992.97 → 1/840.21
- 赤REG: 1/1927.53 → 1/1638.40
- 白REG: 1/1236.53 → 1/1074.36

信頼度: ANALYSIS_HIGH（パチマガスロマガ旧攻略の解析値）

## baseGamesPer50

1000円あたり平均プレイ数:

- 設定1: 36.34〜36.35P
- 設定2: 37.55〜37.56P
- 設定3: 39.23〜39.24P
- 設定4: 40.58〜40.61P
- 設定5: 41.12P
- 設定6: 41.29〜41.33P

旧攻略ページの版違いで小数第2位に軽微な差があるため範囲表記とする。

信頼度: ANALYSIS_HIGH

## netIncrease

- BIG後RT: 100P
- REG後RT: 12P
- 赤7BIG後とREG後は特殊リプレイで100P RT上乗せの可能性あり
- RT中1Pあたり純増:
  - 設定1: +0.74枚
  - 設定2: +0.77枚
  - 設定3: +0.81枚
  - 設定4: +0.85枚
  - 設定5: +0.87枚
  - 設定6: +0.87枚

信頼度: ANALYSIS_HIGH

## basicPayout

- BIG: 456枚を超える払い出しで終了、純増目安 約300枚
- REG: 146枚を超える払い出しで終了、純増目安 約100枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン / 3枚掛け専用
- すべてのボーナス後にRTへ突入
- BIG後100P、REG後12P
- 赤BIG後のRT100P上乗せ確率: 1/210.73
- 赤REG後: 1/53.94
- 白REG後: 1/17.78
- 白BIG後および上乗せRT中は追加RT抽選なし
- 旧攻略の攻め時・ヤメ時は「特にナシ」
- 通常時ゲーム数天井は確認できず
- 有利区間制度導入前

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 設定変更時のRT内部状態やボーナス後RT残G数処理を明記した本機固有高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 据え置き時のRT残G数/内部状態引継ぎを明記した本機固有高信頼資料を確認できず UNVERIFIED
- powerCycleBehavior: 電源OFF→ONのみの場合のRT状態処理を明記した本機固有資料を確認できず UNVERIFIED
- gameCounterReset: 通常時ゲーム数天井は確認できず。リセット対象となる天井カウンタも確認できず
- ceilingAfterReset: リセット専用短縮天井は確認できず
- modeAfterReset: 朝一専用モード/設定変更専用モードは確認できず
- stateAfterReset: RT内部状態の設定変更時処理は未確定
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 設定変更・朝一固有の主要恩恵は確認できず
- resetPenalties: 設定変更固有の主要不利要素は確認できず
- resetDetection: 本機固有のガックン・表示等による設定変更判別を高信頼で確定できず
- numericResetData: 設定変更時専用の比較可能な公開数値は確認できず

### resetBehavior 再探索メモ

「パチスロ鉄拳伝タフ / 鉄拳伝タフ / オーイズミ / オーイズミネオ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT引継ぎ / ガックン」を組み合わせ、旧攻略・設定判別DB・P-WORLD系検索・後年回顧を横断した。通常時天井なし相当の情報とボーナス後RT仕様は確認できたが、設定変更/据え置き/電断時のRT残G数や内部状態処理は高信頼資料で確定できなかったため推測しない。

## sources

取得日: 2026-08-31

1. パチマガスロマガ旧攻略 — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/a.php
   - 5号機/5ライン/3枚掛け、BIG約300枚、REG約100枚
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ旧攻略 — ボーナス抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/h.php
   - 設定別BIG/REG/合成確率。PAYOUT欄は当時「現在調査中」
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ旧攻略 — 小役・1000円プレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/c.php
   - 36.34〜41.33P/1000円
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧攻略 — 小役ページ別版
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/c_1.php
   - 36.35〜41.29P/1000円。軽微な版差を確認
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧攻略 — RT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/k_1.php
   - BIG後100P/REG後12P、設定別RT純増+0.74〜+0.87枚/P、RT100P突入確率
   - reliability: ANALYSIS_HIGH
6. pacnk — パチスロ 鉄拳伝タフ 設定判別ツール
   - https://pacnk.com/slot/tools/sh_tekkendentafu.html
   - 2007年2月導入、PAYOUT 96/98/101/103/106/108%、BIG/REG確率の照合
   - reliability: ANALYSIS_SINGLE
7. 楽天ブログ旧解析回顧 — パチスロ鉄拳伝タフとは
   - https://plaza.rakuten.co.jp/slotlife777/
   - BIG約300枚/REG約100枚、100G完走型RT、RT約0.8枚/Gの後年説明
   - reliability: ANALYSIS_SINGLE

## missingFields

- 正確な全国納品/稼働開始日（日単位）
- 機械割の別系統高信頼照合
- 設定変更/据え置き/電源OFF→ON時のRT内部状態処理
- 本機固有のresetDetection

## conflicts

- 1000円あたりプレイ数は旧攻略のページ版違いで小数第2位に0.01〜0.04P程度の差があるため、平均せず範囲表記。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
