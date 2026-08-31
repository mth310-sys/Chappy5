# ダイナマイトマン

machineName: ダイナマイトマン
manufacturer: JPS（ジェイピーエス）
releaseDate: 2007-03（5号機クロニクル。HAZUSE系資料では2007-04表記もあり）
generation: 5号機
systemType: ボーナス + 20GループRT
formalModelName: バクレツセンシ

## payoutRateBySetting

status: CONFLICT

公称/機種DB系（P-WORLD、5号機クロニクル）:
- 設定1: 96.0〜96.01%
- 設定2: 98.45〜98.5%
- 設定3: 100.30〜100.3%
- 設定4: 103.17〜103.2%
- 設定5: 105.55〜105.6%
- 設定6: 107.64〜107.6%

パチマガスロマガのシミュレート値:
- 設定1: 98.30%
- 設定2: 100.15%
- 設定3: 101.85%
- 設定4: 103.80%
- 設定5: 105.36%
- 設定6: 107.59%

note: 公称/DB値とシミュレート値は定義が異なるため平均せず双方を保存する。
confidence: HIGH

## initialHitBySetting

BIG合成:
- 設定1: 1/337.81
- 設定2: 1/327.68
- 設定3: 1/318.14
- 設定4: 1/309.13
- 設定5: 1/309.13
- 設定6: 1/309.13

怒りボーナス（CT）合成:
- 設定1: 1/642.51
- 設定2: 1/585.14
- 設定3: 1/546.13
- 設定4: 1/496.48
- 設定5: 1/436.91
- 設定6: 1/436.91

全ボーナス合成:
- 設定1: 1/221.41
- 設定2: 1/210.05
- 設定3: 1/201.03
- 設定4: 1/190.51
- 設定5: 1/181.04
- 設定6: 1/181.04

confidence: HIGH

## baseGamesPer50

1000円あたりプレイ数（50枚換算）:
- 設定1: 35.85G
- 設定2: 35.98G
- 設定3: 36.11G
- 設定4: 36.23G
- 設定5: 36.36G
- 設定6: 39.68G

confidence: HIGH

## netIncrease

- RT「怒りモード」: 20G継続
- RTループ率: 約75%（基本システム資料）
- 1Gあたり純増枚数: UNVERIFIED

confidence: MEDIUM

## basicPayout

- スーパーダイナマイトボーナス: 規定払い出し348枚 / 純増約261枚
- ダイナマイトボーナス: 規定払い出し348枚 / 純増約261枚
- 怒りボーナス（CT）: 規定払い出し134枚 / 通常手順で純増約108枚
- 怒りボーナス（CT）: 技術介入時の最大純増117枚の攻略情報あり

confidence: HIGH

## modeSpecificMinimumData

- ボーナス後はRT突入チャンス。
- ボーナス後480G周期で「イライラモード」へ移行し、RT突入に期待できる。
- 「怒りモード」は20GのRTで、約75%でループするとされる。
- 2007年2月の業界発表記事では480Gの仕組みを「ハマリ救済機能」と説明。
- 5号機のため有利区間は非該当。

confidence: HIGH

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior: UNVERIFIED
carryOverBehavior: UNVERIFIED
powerCycleBehavior: UNVERIFIED
gameCounterReset: UNVERIFIED
ceilingAfterReset: UNVERIFIED
modeAfterReset: UNVERIFIED
stateAfterReset: UNVERIFIED
advantageousSectionReset: NOT_APPLICABLE（5号機初期・有利区間制度導入前）
resetBenefits: UNVERIFIED（設定変更/朝一固有の恩恵を確定できる資料未発見）
resetPenalties: UNVERIFIED（設定変更/朝一固有の不利を確定できる資料未発見）
resetDetection: UNVERIFIED（ガックン等、本機固有の変更判別を高信頼資料で確定できず）
numericResetData: UNVERIFIED

### resetBehavior research memo

2026-08-31取得。機種名「ダイナマイトマン」、型式名「バクレツセンシ」、メーカー名JPSを組み合わせ、設定変更/リセット/朝一/据え置き/電源OFF→ON/ガックン/480G/イライラモード/怒りモード/天井/救済の語へ展開して検索した。パチマガスロマガ旧解析、P-WORLD、5号機クロニクル、当時業界発表、後年回顧資料を横断したが、設定変更または単純電断時に480G周期カウンタ・RT/CZ状態をクリアするか引き継ぐかを機種固有資料で確定できなかった。480G周期の救済仕様そのものは確認できるが、リセット時の扱いは推測で埋めない。

## sources

取得日: 2026-08-31

1. パチマガスロマガ「ダイナマイトマン 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/08/a.php
   - 5号機/3枚掛け、20G RT、約75%ループ、480G周期、各ボーナス獲得枚数
   - confidence: HIGH
2. パチマガスロマガ「ダイナマイトマン ボーナス確率・PAYOUT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/08/h.php
   - 設定別BIG/怒りボーナス/全ボーナス合成、シミュレートPAYOUT
   - confidence: HIGH
3. パチマガスロマガ「ダイナマイトマン 小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/08/c.php
   - 1000円あたりプレイ数
   - confidence: HIGH
4. パチマガスロマガ「ダイナマイトマン BIG・怒りボーナス中の打ち方」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/08/e.php
   - CT技術介入時最大117枚、通常狙い108枚
   - confidence: HIGH
5. P-WORLD「ダイナマイトマン」
   - https://www.p-world.co.jp/machine/database/4622
   - 型式名バクレツセンシ、設定別合成確率、出玉率
   - confidence: HIGH
6. 5号機クロニクル「JPS 5号機全機種一覧」
   - https://5goki.com/jps
   - 導入時期2007/3、設定別機械割
   - confidence: MEDIUM-HIGH
7. パチ7「5号機界のキテレツ発明家『JPS』の歴史」
   - https://pachiseven.jp/articles/detail/11436
   - 2007年JPS機としての位置づけ、ループ式RT・技術介入性の後年回顧
   - confidence: MEDIUM

## missingFields

- RT「怒りモード」の1Gあたり純増枚数
- 正確な全国導入日（日付単位。2007/3と2007/4の資料差あり）
- 設定変更時の480G周期カウンタ処理
- 据え置き時の周期/内部状態保持仕様
- 電源OFF→ON時の周期/内部状態保持仕様
- 朝一固有モード・数値恩恵/不利
- 本機固有の変更判別挙動

## conflicts

1. 機械割/出玉率
   - P-WORLD/5号機クロニクル: 約96.0〜107.6%
   - パチマガスロマガ（シミュレート値）: 98.30〜107.59%
   - 処理: 平均せずCONFLICT。資料の定義差として双方保持。
2. 導入時期
   - 5号機クロニクル: 2007/3
   - HAZUSE系旧資料: 2007/4表記
   - 処理: 月単位の競合を明記し、現時点では2007/3を主レコード位置とする。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
