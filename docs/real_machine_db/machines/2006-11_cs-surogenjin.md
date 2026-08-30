# CSスロ原人

machineName: CSスロ原人
manufacturer: アビリット
releaseDate: 2006-11-22（本州初導入。北海道で先行導入あり）
generation: 5号機初期
systemType: ボーナス + RT / CS（カードスロット）

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
- CS = カードスロット。遊技機本体から貸出メダルを直接払い出す方式だが、ゲーム性能は通常のパチスロとして扱う

## sources

取得日: 2026-08-31

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
   - 設定別BIG/原人ラッシュ/機械割
   - reliability: ANALYSIS_SINGLE
6. 5号機クロニクル — コナミアミューズメント（高砂電器・アビリット）5号機一覧
   - https://5goki.com/konami
   - 設定別BIG/REG/合成/機械割
   - reliability: ANALYSIS_SINGLE

## missingFields

- RT純増/G

## conflicts

- 導入時期: 一部後年DBは2006/10表記だが、当時業界記事では北海道先行後、本州初導入が2006-11-22。実導入時期優先で本DBは2006-11に配置。
- 機械割: 設定1が97.0%/97.1%、設定4が104.6%/104.7%の小差。丸め差として双方を保持。
