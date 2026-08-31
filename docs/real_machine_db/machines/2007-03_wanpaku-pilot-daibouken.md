# わんぱくパイロット大冒険

machineName: わんぱくパイロット大冒険
manufacturer: 岡崎産業
releaseDate: 2007-03 / 2007-04（資料差あり。業界一次資料は2007年3月上旬納品予定、HAZUSEは2007年4月表記）
generation: 5号機初期
systemType: ボーナス + RT「わくわくTIME」
formalModelName: わんぱくパイロットダイボウケン

## payoutRateBySetting

### パチマガスロマガ旧DB（シミュレート値）
- 設定1: 96.03%
- 設定2: 98.18%
- 設定3: 100.41%
- 設定4: 103.17%
- 設定5: 105.92%
- 設定6: 109.93%

### 5号機クロニクル後年整理値
- 設定1: 96.5%
- 設定2: 98.5%
- 設定3: 100.5%
- 設定4: 103.0%
- 設定5: 105.5%
- 設定6: 109.0%

定義/算出条件が完全一致することを確認できず、数値差を平均せず保持する。

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガ旧DBのボーナス抽選確率:

### BIG
- 設定1: 1/399.61
- 設定2: 1/378.82
- 設定3: 1/358.12
- 設定4: 1/332.67
- 設定5: 1/310.60
- 設定6: 1/287.44

### REG
- 設定1: 1/697.19
- 設定2: 1/630.15
- 設定3: 1/574.88
- 設定4: 1/528.52
- 設定5: 1/492.75
- 設定6: 1/461.52

### ボーナス合算
- 設定1: 1/254.02
- 設定2: 1/236.59
- 設定3: 1/220.66
- 設定4: 1/204.16
- 設定5: 1/190.51
- 設定6: 1/177.12

HAZUSE当時版はボーナス出現率「調査中」のため、精密値の別系統照合には使えない。

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

パチマガスロマガ旧DB「1000円あたりのゲーム数」:

- 設定1: 33.67G
- 設定2: 33.84G
- 設定3: 34.02G
- 設定4: 34.20G
- 設定5: 34.38G
- 設定6: 35.32G

当時の20円等価換算で1000円=50枚として物差し用ベース値に使用。

信頼度: ANALYSIS_HIGH

## netIncrease

### RT「わくわくTIME」
- グリーンべると一次資料: 100G、約+0.65枚/G、完走約65枚
- パチマガスロマガ旧DB: 設定1 +0.67枚/G、設定2 +0.67枚/G、設定3 +0.68枚/G、設定4 +0.68枚/G、設定5 +0.69枚/G、設定6 +0.71枚/G

一次資料の約0.65枚/Gと解析値0.67〜0.71枚/Gは丸め/条件差の可能性があるため、用途別に併記し平均しない。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout

- BIG: 346枚を超える払い出しで終了、純増約275枚
- REG: 181枚を超える払い出しで終了、純増約156枚

グリーンべると、パチマガスロマガ旧DB、P-WORLDで概ね一致。

信頼度: ANALYSIS_HIGH / INDUSTRY

## modeSpecificMinimumData

- 5号機 / 5ライン。
- 通常時にRT「わくわくTIME」を搭載。
- わくわくTIMEは100G。
- 3種類の1枚役がRT突入契機。グリーンべると一次資料では1枚役C（緑・赤7・赤7）は成立時100%RT、1枚役A/Bは約1/2でRT突入。
- HAZUSEでは「わくわくCHANCE」中に特定RT役成立でわくわくTIMEへ突入と整理。
- 中パネル左4ランプ点灯中にBIG成立で「わくわくボーナス」。ボーナス終了後50G間はランプ点灯高確率状態へ移行するとの当時解析あり。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 「わんぱくパイロット大冒険 / わんぱくﾊﾟｲﾛｯﾄ大冒険 / わんぱくパイロットダイボウケン / 岡崎産業 / OKAZAKI」に「設定変更 / リセット / 朝一 / 高確率 / RT / わくわくCHANCE / わくわくTIME」を組み合わせて再探索したが、本機固有の設定変更時処理を断定できる高信頼資料は確認できず UNVERIFIED
- carryOverBehavior: 据え置き時のRT・高確率状態・ゲーム数等の引継ぎ仕様を明記した資料を確認できず UNVERIFIED
- powerCycleBehavior: 電源OFF→ONのみでのRT/高確率状態の扱いを明記した本機固有資料を確認できず UNVERIFIED
- gameCounterReset: 今回確認した一次/当時解析/旧DBではゲーム数天井を主要仕様として確認できず。設定変更時に比較可能な天井ゲーム数リセット数値なし
- ceilingAfterReset: リセット時の天井短縮・変更に関する公開数値を確認できず
- modeAfterReset: 朝一専用モード、設定変更時モード振り分けの公開情報を確認できず
- stateAfterReset: ボーナス後50Gのランプ点灯高確率状態自体は確認できるが、設定変更/電源断時に当該状態を引き継ぐか再抽選するかは未確認
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 設定変更/朝一固有の主要恩恵は確認できず
- resetPenalties: 設定変更固有の主要不利要素は確認できず
- resetDetection: 設定変更判別 / ガックン / 朝一表示 / 据え置き判別まで検索したが、本機固有の高信頼な変更判別情報を確認できず UNVERIFIED
- numericResetData: 公開朝一専用数値は確認できず

### resetBehavior 再探索メモ

機種名・半角表記・正式型式名・メーカー名を変え、設定変更、リセット、朝一、据え置き、電源OFF ON、RT、わくわくTIME、わくわくCHANCE、高確率状態、ガックン、変更判別、天井を組み合わせた。グリーンべると、HAZUSE、パチマガスロマガ旧DB、P-WORLD、5号機クロニクルまで横断したが、設定変更時/据え置き時/電源断時の本機固有挙動は確定できなかったため推測補完しない。

## sources

取得日: 2026-08-31

1. グリーンべると — 岡崎産業が初の液晶搭載機をリリース
   - https://web-greenbelt.jp/00004037/
   - 2007-02-02記事。納品2007年3月上旬予定、岡崎産業初液晶、RT100G、約0.65枚/G、完走約65枚、BIG約275枚、RB156枚を確認
   - reliability: INDUSTRY
2. HAZUSE — わんぱくパイロット大冒険 解析・機種情報
   - https://hazuse.com/i/data/wanpaku/top.htm
   - 2007年4月表記、BIG/REG、わくわくTIME、わくわくCHANCE、ボーナス後50G高確率状態を確認。ボーナス出現率/機械割は当時版で調査中
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ旧DB — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/50/h.php
   - 設定別BIG/REG/合算、シミュレート機械割を確認
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧DB — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/50/c.php
   - 設定別1000円あたり33.67〜35.32G、RT純増+0.67〜+0.71枚/Gを確認
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧DB — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/50/a.php
   - BIG346枚超/純増約275枚、REG181枚超/純増約156枚を確認
   - reliability: ANALYSIS_HIGH
6. 5号機クロニクル — 岡崎産業5号機全機種一覧
   - https://5goki.com/okazaki
   - 導入2007/3、機械割96.5〜109.0%を確認
   - reliability: ANALYSIS_SINGLE
7. P-WORLD — わんぱくパイロット大冒険
   - https://www.p-world.co.jp/machine/database/4615
   - 型式名「わんぱくパイロットダイボウケン」、BIG346枚以上/ボーナスゲーム181枚以上払い出し終了を確認
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定別機械割の定義統一可能な一次/別系統照合
- 設定別BIG/REG/合算の別系統精密照合
- 本機固有の設定変更時挙動
- 本機固有の据え置き時挙動
- 電源OFF→ONのみの状態引継ぎ
- 本機固有の変更判別/ガックン情報
- 公開朝一専用数値

## conflicts

- 導入時期: グリーンべると一次資料は2007年3月上旬納品予定、5号機クロニクルは2007/3、HAZUSEは2007年4月表記。平均化せず2007-03 / 2007-04資料差として保持。
- 機械割: パチマガスロマガ旧DBシミュレート値96.03/98.18/100.41/103.17/105.92/109.93%に対し、5号機クロニクル96.5/98.5/100.5/103.0/105.5/109.0%。定義/算出条件を同一と確定できないためCONFLICTとして双方保持。
- RT純増: グリーンべると一次資料は約0.65枚/G、旧解析DBは設定別+0.67〜+0.71枚/G。丸めまたは算出条件差の可能性があるため平均しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
