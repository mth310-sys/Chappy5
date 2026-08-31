# ビジトジ

machineName: ビジトジ
manufacturer: 銀座
releaseDate: 2007-01（1月下旬納品予定）
generation: 5号機初期
systemType: ボーナス主体 / BIG+2種BC

## payoutRateBySetting

資料間で値が異なるため平均せずCONFLICTとして保持する。

### パチマガスロマガ PAYOUT（シミュレート値）

| 設定 | PAYOUT |
|---|---:|
| 1 | 98.30% |
| 2 | 100.23% |
| 3 | 102.12% |
| 4 | 104.04% |
| 5 | 106.40% |
| 6 | 110.41% |

注: KKK打法使用、1枚役は取りこぼし、BIG中はベル・チェリーのみ取得時のシミュレート条件。

### 5号機クロニクル掲載機械割

| 設定 | 機械割 |
|---|---:|
| 1 | 97.7% |
| 2 | 99.5% |
| 3 | 101.4% |
| 4 | 103.3% |
| 5 | 105.7% |
| 6 | 109.8% |

信頼度: CONFLICT

## initialHitBySetting

本機はBIG、ハイパーBC、ノーマルBCの3ボーナス構成。

| 設定 | BIG | ハイパーBC | ノーマルBC |
|---|---:|---:|---:|
| 1 | 1/346.75 | 1/1310.72 | 1/936.23 |
| 2 | 1/326.05 | 1/1310.72 | 1/936.23 |
| 3 | 1/307.68 | 1/1310.72 | 1/936.23 |
| 4 | 1/291.27 | 1/1310.72 | 1/936.23 |
| 5 | 1/273.07 | 1/1310.72 | 1/936.23 |
| 6 | 1/251.10 | 1/1310.72 | 1/936.23 |

グリーンべるとでは合成確率を設定1約1/212〜設定6約1/172と発表しており、上記個別確率から得られる水準と整合する。

信頼度: ANALYSIS_HIGH / INDUSTRY

## baseGamesPer50

パチマガスロマガの1000円あたりプレイ数を50枚ベースとして保存する。

| 設定 | 50枚あたりゲーム数 |
|---|---:|
| 1 | 40.33G |
| 2 | 40.36G |
| 3 | 40.38G |
| 4 | 40.43G |
| 5 | 40.45G |
| 6 | 41.22G |

信頼度: ANALYSIS_HIGH

## netIncrease

該当する常設RT/ART/ATを主要出玉契機として確認していないため非該当。

## basicPayout

- BIG: 規定払い出し345枚、純増約310枚
- ハイパーBC: 規定払い出し253枚、純増約220枚
- ノーマルBC: 規定払い出し149枚、純増約130枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 4ライン。
- 銀座初のパチスロ機として2006年12月5日に発表。
- 2007年1月下旬から納品予定。
- BIGと2種類のビジトジチャンスを搭載。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: UNVERIFIED
- carryOverBehavior: UNVERIFIED
- powerCycleBehavior: UNVERIFIED
- gameCounterReset: 天井ゲーム数管理を確認できず
- ceilingAfterReset: 天井短縮・変更の公開情報を確認できず
- modeAfterReset: 朝一専用モード/モード再抽選の公開情報を確認できず
- stateAfterReset: 通常時の状態管理について設定変更時に比較可能な公開情報を確認できず
- advantageousSectionReset: 非該当（5号機初期。有利区間制度導入前）
- resetBenefits: 公開された朝一恩恵を確認できず
- resetPenalties: 公開された設定変更時の主要不利要素を確認できず
- resetDetection: ガックン等の設定変更判別情報を高信頼資料で確認できず
- numericResetData: なし / UNVERIFIED

### resetBehavior 再探索メモ

以下の検索語を含め、当時解析、古い機種DB、業界記事、後年回顧資料を横断した。

- 「ビジトジ 設定変更」
- 「ビジトジ リセット」
- 「ビジトジ 朝一」
- 「ビジトジ 据え置き」
- 「ビジトジ 電源OFF ON」
- 「ビジトジ ガックン」
- 「ビジトジ 天井」

本機固有の設定変更・据え置き・電源断時挙動を確定できる高信頼資料は今回確認できなかった。

## sources

取得日: 2026-08-31

1. グリーンべると — 人気お笑い芸人8組がパチンコ＆パチスロに
   - https://web-greenbelt.jp/00004978/
   - 2006-12-15掲載。銀座初のパチスロ機、BIG+2種BC、合成1/212〜1/172、2007年1月下旬納品予定
   - reliability: INDUSTRY
2. パチマガスロマガ — ビジトジ 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/02/a.php
   - 5号機/4ライン、BIG+2種BC、規定払い出し/純増
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — ビジトジ ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/02/h.php
   - 設定別BIG、全設定共通2種BC、PAYOUTシミュレート値
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ビジトジ 小役/1000円あたりプレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/02/c-2.php
   - 1000円あたり40.33〜41.22P
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — 銀座5号機全機種一覧
   - https://5goki.com/ginza
   - 2007/1導入、別系統の設定別機械割97.7〜109.8%
   - reliability: ANALYSIS_SINGLE
6. K-Navi — ビジトジ全国プロジェクト記事
   - https://p-kn.com/topics/news/135/
   - 2007-01-12時点のプロモーション展開確認
   - reliability: INDUSTRY

## missingFields

- resetBehaviorの設定変更/据え置き/電源断時の具体挙動

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## conflicts

- 機械割/PAYOUT: パチマガスロマガ98.30〜110.41%と5号機クロニクル97.7〜109.8%が競合。算出条件も異なるため平均せず双方保持。
