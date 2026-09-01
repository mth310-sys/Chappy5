# 餓狼伝説スペシャル

machineName: 餓狼伝説スペシャル
manufacturer: SNKプレイモア
releaseDate: 2008-01-20
releaseDatePrecision: DAY
generation: 5号機
systemType: ボーナス + 差枚数管理ART「餓狼チャンス」 + AT「舞チャンス」
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
confidence: CORE_HIGH / RESET_LOW_TO_MEDIUM

## releaseDateEvidence

- グリーンべると2007-12-14記事で「納品は来年1月20日から」。
- 2008-01-25同紙で関東1都6県の納期遅延を報道。トップ納品予定日は1月20日、対象地域は約1週間遅れ、1月27日から納品可能見通し。
- K-Navi展示会記事の「2008年1月中旬予定」、5号機クロニクルの2008/1とも整合するため、本DBの日精度は全国トップ納品開始予定日の2008-01-20を採用。地域遅延は注記として保持する。

## payoutRateBySetting

K-Navi / Pacnk:
- 設定1: 97.1%
- 設定2: 98.6%
- 設定3: 101.1%
- 設定4: 103.6%
- 設定5: 106.3%
- 設定6: 112.7%

5号機クロニクル:
- 97.0 / 99.0 / 101.0 / 104.0 / 107.0 / 113.0%

後者は整数丸め系列とみられるが、平均せず `CONFLICT_PAYOUT_ROUNDING_OR_METHOD` として併記。物差し主系列は小数精度を持つK-Navi/Pacnk系列。

## initialHitBySetting

### BIG
- 設定1: 1/461.52
- 設定2: 1/442.81
- 設定3: 1/425.56
- 設定4: 1/409.60
- 設定5: 1/399.61
- 設定6: 1/315.08

### REG合算
- 設定1: 1/668.73
- 設定2: 1/618.26
- 設定3: 1/555.39
- 設定4: 1/504.12
- 設定5: 1/455.11
- 設定6: 1/399.61

### ボーナス合算
- 設定1: 1/273.07
- 設定2: 1/258.02
- 設定3: 1/240.94
- 設定4: 1/225.99
- 設定5: 1/212.78
- 設定6: 1/176.17

K-Navi / Pacnk / 5号機クロニクル / 当時グリーンべるとの丸め値が整合。

## baseGamesPer50

パチ＆スロ必勝本:
- 全設定共通: 49.37G/1000円

信頼度: ANALYSIS_HIGH

## basicPayout

- BIG: 351枚超払い出しで終了、純増目安約280枚。
- REG: 134枚超払い出しで終了、純増目安約105枚。
- レジェンドボーナス: REG系の特別ボーナスで、成立時に差枚数1000枚分の餓狼チャンスが付与される資料あり。

## modeSpecificMinimumData

### ART「餓狼チャンス」
- 全ボーナス後に突入。
- 固定ゲーム数型ではなく差枚数管理。規定獲得差枚数まで3択ベルをナビし、3択チェリーは終了役のため回避ナビを行う。
- BIG中ミニゲームの結果などでART目標差枚数が変動し、最大1000枚。レジェンドボーナスは1000枚ART付与。

### AT「舞チャンス」
- 3択チェリーと9枚役を完全ナビして通常時のコイン持ちを上げるAT。
- ショート/ロングが存在し、当選契機・設定・内部モードで移行率が変化。
- 通常時は少なくとも高確/低確のモードが存在。
- ボーナス後333G・666G到達でAT突入契機。
- ボーナス間999Gで特殊高確（天井）へ移行し、AT当選率が上昇。天井契機で当選したATは次回ボーナスまで継続する資料あり。

## v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 設定変更時に333G/666G/999Gカウンタ、高低モード、ART/AT状態をどう初期化するかを本機固有の直接資料で確定できず。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 据え置き時のボーナス間ゲーム数・内部モード・AT/ART状態の継続仕様は直接資料未確定。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 電源OFF→ONだけを行った際のカウンタ/モード/状態処理は直接資料未確定。
- gameCounterReset: `EXISTS_BUT_RESET_RULE_UNVERIFIED`
  - ボーナス後333G/666G、ボーナス間999Gという公開ゲーム数契機自体は確定。
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`
  - 設定変更後の短縮天井や333/666/999Gの再起算/持越しを断定できる資料なし。
- modeAfterReset: `UNVERIFIED_AFTER_RESEARCH`
  - 通常時に高確/低確モードが存在するが、設定変更後の初期モード振分は未確定。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`
  - ART「餓狼チャンス」/AT「舞チャンス」中の設定変更・据え置き・電断処理は未確定。
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `PARTIAL_SOURCE_POINTER_UNRESOLVED`
  - K-Navi攻略一覧に「設定変更判別も!?」という本機専用項目の存在は確認できるが、現存取得可能本文から具体手順・停止出目・数値まで復元できず。判別法の内容は推測しない。
- numericResetData: `NONE_CONFIRMED`
  - 朝一専用モード率、短縮G数等の公開数値は今回の再探索で確定できず。

resetBehaviorConfidence: LOW_TO_MEDIUM

## conflicts

- `CONFLICT_PAYOUT_ROUNDING_OR_METHOD`: K-Navi/Pacnkの97.1〜112.7%と5号機クロニクルの整数丸め97〜113%。平均せず双方保持。
- `REG_TERMINOLOGY_NOTE`: 資料により通常REGとレジェンドボーナスを分ける表記/REG合算表記が混在。ボーナス合算の整合性を優先し、内訳を誤統合しない。
- `REGIONAL_DELIVERY_DELAY_NOTE`: 全国トップ納品は2008-01-20予定だが、関東1都6県では部品供給不足で約1週間遅延し、1/27以降納品見通し。導入日フィールドは全国トップ基準。

## sources

取得日: 2026-09-01

1. グリーンべると / P-WORLD業界ニュース — リプパン外し搭載、『餓狼伝説スペシャル』
   - https://news.p-world.co.jp/articles/2566/greenbelt
   - 発表内容、差枚数ART、舞チャンス、合算1/273〜1/176、納品2008-01-20。
   - reliability: INDUSTRY_PERIOD_HIGH
2. グリーンべると — 『餓狼SP』の納期、関東で遅延
   - https://web-greenbelt.jp/00003397/
   - 関東1都6県の納期遅延、トップ納品1/20予定、1/27から納品可能見通し。
   - reliability: INDUSTRY_PERIOD_HIGH
3. K-Navi — 餓狼伝説スペシャル
   - https://p-kn.com/slot/743/
   - BIG/REG、機械割、天井/設定変更判別ページの存在、システム概要。
   - reliability: ANALYSIS_HIGH
4. K-Navi — プレス発表会
   - https://p-kn.com/topics/exhibition/217/
   - 2007-12-11発表、差枚数ART、2008年1月中旬導入予定。
   - reliability: INDUSTRY_PERIOD_HIGH
5. Pacnk — 餓狼伝説スペシャル 設定判別
   - https://pacnk.com/slot/tools/sh_garoudensetsusp.html
   - 設定別合算/REG/赤7/青7/機械割、333/666/999G天井・AT情報。
   - reliability: ANALYSIS_HIGH
6. パチ＆スロ必勝本 — AT「舞チャンス」詳細
   - https://p.hisshobon.jp/machine/1044/1/16245
   - 舞チャンス仕様、高低モード、333/666G、1000円49.37G。
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — SNKプレイモア
   - https://5goki.com/snkplaymore
   - 2008/1、設定別BIG/REG/合成、整数丸め機械割。
   - reliability: RETROSPECTIVE_DB_MEDIUM
8. P-WORLD — 餓狼伝説スペシャル
   - https://www.p-world.co.jp/machine/database/5009
   - 合成、払い出し条件、ART/AT概要。
   - reliability: INDUSTRY_DB_MEDIUM_HIGH

## missingFields

- 設定変更/据え置き/電源OFF→ON時の333/666/999Gカウンタ処理。
- 設定変更後の高低モード初期振分。
- K-Navi「設定変更判別も!?」の具体手順本文。
- ART/AT中の設定変更・電断時の状態処理。
