# お江戸大捜査線

machineName: お江戸大捜査線
manufacturer: タイヨーエレック
releaseDate: 2007-03
generation: 5号機初期
systemType: ボーナス+完走型RT

## payoutRateBySetting

### パチマガスロマガ掲載シミュレート値
- 設定1: 97.69%
- 設定2: 99.95%
- 設定3: 102.58%
- 設定4: 104.81%
- 設定5: 107.22%
- 設定6: 110.63%

### 5号機クロニクル掲載値
- 設定1: 97.6%
- 設定2: 99.7%
- 設定3: 102.1%
- 設定4: 104.1%
- 設定5: 106.2%
- 設定6: 109.2%

設定1〜4は比較的近いが設定5〜6で差が広がるため、平均せず CONFLICT として双方保持。

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガ掲載値。

### 赤BIG
- 設定1: 1/478.36
- 設定2: 1/451.97
- 設定3: 1/428.34
- 設定4: 1/407.06
- 設定5: 1/390.10
- 設定6: 1/370.26

### 青BIG
- 設定1: 1/5461.33
- 設定2: 1/5461.33
- 設定3: 1/5041.23
- 設定4: 1/5041.23
- 設定5: 1/4681.14
- 設定6: 1/4369.07

### REG
- 設定1: 1/496.48
- 設定2: 1/461.52
- 設定3: 1/431.16
- 設定4: 1/404.54
- 設定5: 1/381.02
- 設定6: 1/360.09

### ボーナス合成
- 設定1: 1/233.22
- 設定2: 1/219.18
- 設定3: 1/206.09
- 設定4: 1/195.05
- 設定5: 1/185.13
- 設定6: 1/175.23

HAZUSE掲載のBIG合成 1/439.8〜1/341.3、REG 1/496.5〜1/360.1、合成 1/233.2〜1/175.2 と丸め差の範囲で整合する。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

「お江戸大捜査線」「CSお江戸大捜査線TD」「タイヨーエレック」に「50枚」「1000円」「ベース」「コイン持ち」「通常時ゲーム数」を組み合わせ、当時解析・古いDB・業界記事・後年回顧資料を横断したが、本機固有の比較可能な50枚あたりゲーム数を確定できず。

信頼度: UNVERIFIED

## netIncrease

HAZUSE当時解析で、全ボーナス後RTは完走型、1Gあたり純増 約0.6枚を確認。

- 青7BIG後: 次回ボーナスまでの無限RT
- 赤7BIG後: 50G RT
- REG後: 20G RT

P-WORLD機種DBではREG欄を「RT30」と記載しており、HAZUSEの「REG後20G RT」と競合するため、REG後RTゲーム数は平均せず CONFLICT とする。

信頼度: ANALYSIS_HIGH / CONFLICT（REG後RTゲーム数）

## basicPayout

HAZUSE当時解析の実獲得目安:
- 青7BIG: 約350枚
- 赤7BIG: 約290枚
- REG: 約100枚

P-WORLD機種DBの払い出し終了条件:
- 青7BIG: 466枚超の払い出しで終了
- 赤7BIG: 391枚超の払い出しで終了
- REG: 12G消化または8回入賞で終了

払い出し条件と実獲得目安は定義を分けて保持する。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 型式名: CSお江戸大捜査線TD
- タイヨーエレックの5号機第1弾として2007年2月9日にプレス発表、導入時期は複数資料で2007年3月。
- 2種類のBIGと1種類のREGを搭載。
- 全ボーナス後にRTへ移行する完走型RT機。
- 青7BIG後は次回ボーナスまで継続する無限RT。
- 赤7BIG後は50G RT。
- REG後RTゲーム数はHAZUSE 20G、P-WORLD表記 RT30で CONFLICT。
- RT純増はHAZUSEで約0.6枚/G。
- 通常時ゲーム数天井、通常モード管理は今回確認できず。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の設定変更時内部処理を明記した高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 通常時ゲーム数天井/通常モード管理を確認できないため、天井ゲーム数・モード引継ぎは物差し上非該当。本機固有のRT内部状態据え置き資料は未確認
- powerCycleBehavior: 電源OFF→ONのみの本機固有挙動を明記した高信頼資料を確認できず UNVERIFIED
- gameCounterReset: 通常時天井/ゲーム数解除を確認できず、天井用ゲーム数カウンタは物差し上非該当
- ceilingAfterReset: リセット時天井短縮/変更は確認できず
- modeAfterReset: 通常時モード/朝一専用モードは確認できず
- stateAfterReset: 設定変更時のRT等内部状態再抽選・引継ぎを直接示す高信頼資料は未確認
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 朝一/設定変更固有の主要出玉恩恵は確認できず
- resetPenalties: 設定変更固有の主要不利要素は確認できず
- resetDetection: 「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「変更判別」まで検索語を変えて再探索したが、本機固有の高信頼な変更判別情報を確定できず UNVERIFIED
- numericResetData: 公開朝一専用数値は確認できず

### resetBehavior 再探索メモ

「お江戸大捜査線」「CSお江戸大捜査線TD」「タイヨーエレック」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 変更判別」を組み合わせ、P-WORLD、HAZUSE、パチマガスロマガ、業界記事、古い5号機DB、後年回顧資料を横断。ボーナス・RT仕様は複数系統資料で確認できたが、設定変更・電断時の本機固有挙動や朝一専用数値は確定できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

1. グリーンべると — タイヨーE、人気パチキャラを5号機で起用
   - https://web-greenbelt.jp/00004001/
   - 2007-02-23記事。2月9日プレス発表、タイヨーエレック5号機第1弾を確認
   - reliability: INDUSTRY
2. パチマガスロマガ — お江戸大捜査線 ボーナス抽選確率 / PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/01/h.php
   - 設定別赤BIG/青BIG/REG/合成、シミュレート機械割を取得
   - reliability: ANALYSIS_HIGH
3. HAZUSE DATA — お江戸大捜査線
   - https://hazuse.com/i/data/ooedozenigata/top.htm
   - 2007年当時解析。BIG/REG/合成、獲得枚数、全ボーナス後RT、青7後無限RT、赤7後50G、REG後20G、純増約0.6枚/G
   - reliability: ANALYSIS_HIGH
4. P-WORLD機種DB — お江戸大捜査線
   - https://www.p-world.co.jp/machine/database/4600
   - 型式名CSお江戸大捜査線TD、ボーナス払い出し終了条件、青BIG後無限RT、赤BIG後RT50、REG欄RT30
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — タイヨーエレック5号機一覧
   - https://5goki.com/yaiyoelec
   - 2007年3月導入、機械割97.6〜109.2%
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数/ベース
- 本機固有の設定変更時内部処理
- 電源OFF→ONのみの本機固有挙動
- 本機固有の変更判別/ガックン情報
- 公開朝一専用数値

## conflicts

- 機械割: パチマガスロマガのシミュレート値 97.69 / 99.95 / 102.58 / 104.81 / 107.22 / 110.63%、5号機クロニクル 97.6 / 99.7 / 102.1 / 104.1 / 106.2 / 109.2%。平均せず双方保持。
- REG後RTゲーム数: HAZUSE当時解析 20G、P-WORLD機種DBの備考表記 RT30。平均せず双方保持。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
