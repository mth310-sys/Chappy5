# バミューダ

machineName: バミューダ
manufacturer: ネイチャー・アセスメント
releaseDate: 2007-12
generation: 5号機
systemType: ノーマル / ボーナス主体 / 同時成立あり / ボーナスチェック機能
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 99.2% |
| 3 | 101.0% |
| 4 | 102.6% |
| 5 | 104.1% |
| 6 | 105.4% |

5号機クロニクル掲載値。パチマガスロマガにはPAYOUT項目の存在を確認したが、今回の検索インデックスでは数値本文を独立取得できなかったため、機械割数列自体の信頼度は `ANALYSIS_SINGLE` とする。

## initialHitBySetting

### BIG

赤7 / 青7が各1種類。

| 設定 | 各BIG | BIG合成 |
|---|---:|---:|
| 1 | 1/780.19 | 1/390.10 |
| 2 | 1/744.73 | 1/372.36 |
| 3 | 1/712.35 | 1/356.17 |
| 4 | 1/712.35 | 1/356.17 |
| 5 | 1/712.35 | 1/356.17 |
| 6 | 1/712.35 | 1/356.17 |

### REG

赤7 / 青7が各1種類。

| 設定 | 各REG | REG合成 |
|---|---:|---:|
| 1 | 1/1260.31 | 1/630.15 |
| 2 | 1/1260.31 | 1/630.15 |
| 3 | 1/1260.31 | 1/630.15 |
| 4 | 1/1092.27 | 1/546.13 |
| 5 | 1/1024.00 | 1/512.00 |
| 6 | 1/949.80 | 1/474.90 |

### ボーナス合成

| 設定 | 合成 |
|---|---:|
| 1 | 1/240.94 |
| 2 | 1/234.06 |
| 3 | 1/227.56 |
| 4 | 1/215.58 |
| 5 | 1/210.05 |
| 6 | 1/203.53 |

パチマガスロマガ解析値。信頼度: `ANALYSIS_HIGH`（同サイト内の基本仕様・小役/ベースとの整合を確認）。

## baseGamesPer50

パチマガスロマガ掲載の1000円あたりゲーム数:

| 設定 | 1000円あたりG数 |
|---|---:|
| 1 | 44.33G |
| 2 | 44.78G |
| 3 | 45.25G |
| 4 | 46.20G |
| 5 | 47.72G |
| 6 | 48.78G |

信頼度: `ANALYSIS_HIGH`。

## netIncrease

`NOT_APPLICABLE`。RT / ART / AT非搭載のノーマルタイプとして確認。

## basicPayout

- BIG: 400枚を超える払い出しで終了、純増約350枚
- REG: 105枚を超える払い出しで終了、純増約100枚

パチマガスロマガの基本システムで確認。後年の初打ち記録でもBIG約350枚 / REG約100枚・RT非搭載と整合。

## modeSpecificMinimumData

- ノーマル / 同時成立あり。
- 業界初とされる「ボーナスチェック機能」を搭載。チャンス目や同時成立役後などに1BETボタンを押すと、ボーナス成立時は告知ランプで確認できる仕様。
- 液晶非搭載のリーチ目主体機として当時の実戦記録にも残る。

## resetBehavior

### settingChangeBehavior

`UNVERIFIED_AFTER_RESEARCH`。

「バミューダ / ネイチャー・アセスメント / 設定変更 / リセット / 朝一 / 初期出目 / ガックン / RAM」等へ検索語を変更し、パチマガスロマガ・5号機DB・実機情報・当時実戦記録を横断したが、本機固有の設定変更時内部処理を直接説明する資料は確認できなかった。

### carryOverBehavior

通常時ゲーム数天井、RT/ART/CZ残G、モード管理は `NONE_CONFIRMED / NOT_APPLICABLE`。

据え置き時のボーナス成立状態・告知状態などRAMレベルの内部状態引継ぎは `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

電源OFF→ONのみの場合のボーナス成立状態、初期出目、告知ランプ状態等の本機固有処理は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

通常時ゲーム数天井 / 周期CZ / AT当選ゲーム数管理: `NONE_CONFIRMED`。

### ceilingAfterReset

通常天井 / リセット短縮天井 / 朝一専用天井: `NONE_CONFIRMED`。

### modeAfterReset

通常時モード管理、設定変更時モード再抽選、朝一専用モード: `NONE_CONFIRMED`。

### stateAfterReset

RT / ART / AT / CZ状態: `NOT_APPLICABLE`。

ボーナス成立済み等の内部状態については `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

`NOT_APPLICABLE`（5号機初期、有利区間制度前）。

### resetBenefits

短縮天井、朝一RT/ART、専用モード、初当たり優遇等: `NONE_CONFIRMED`。

### resetPenalties

`NONE_CONFIRMED`。

### resetDetection

ガックン、初期出目、ボーナスチェックランプ等による本機固有の設定変更 / 据え置き判別法は `UNVERIFIED_AFTER_RESEARCH`。

ボーナスチェック機能は通常の成立確認機能として資料化されており、設定変更判別機能とは扱わない。

### numericResetData

設定変更時のみ適用される公開朝一数値: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. パチマガスロマガ — バミューダ 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/01/a.php
   - ノーマル/同時成立、ボーナスチェック機能、BIG約350枚・REG約100枚。
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — バミューダ ボーナス抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/01/h.php
   - 設定別BIG/REG/合算。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — バミューダ 小役確率 / 1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/01/c.php
   - 設定1〜6で44.33〜48.78G/1000円。
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル — ネイチャー・アセスメント5号機一覧
   - https://5goki.com/nature-assessment
   - 2007/12導入、機械割97.4〜105.4%。
   - reliability: ANALYSIS_SINGLE
5. パチンコFAN — 2007年度機種一覧
   - https://pacnk.com/photoslot/plist2007_0_0.html
   - 2007年12月欄にバミューダ（ネイチャー・アセスメント）。
   - reliability: ANALYSIS_SINGLE
6. パチスロ機種情報 — バミューダ初打ちの感想
   - https://ameblo.jp/w-wolfvct/
   - 当時実戦記録として液晶非搭載、BIG約350枚/REG約100枚、RT非搭載を補助確認。体感コイン持ちや推測確率は採用しない。
   - reliability: RETROSPECTIVE_LOW

## missingFields

- 具体的な納品開始日 / 全国ホール導入日
- 正式型式名
- 機械割数列の独立した第二資料照合
- 設定変更時RAM処理
- 据え置き / 電源OFF→ON時のボーナス成立状態等の内部処理
- 本機固有の設定変更判別法

## conflicts

- 現時点で性能値の明示的な数値CONFLICTは確認していない。
- 当時実戦記録の「1000円で多分50G前後」は体感値なので、解析値44.33〜48.78GとのCONFLICTには数えず参考扱いとする。
