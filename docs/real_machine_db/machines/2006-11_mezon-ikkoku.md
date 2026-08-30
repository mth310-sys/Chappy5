# めぞん一刻

machineName: めぞん一刻
manufacturer: オリンピア
releaseDate: 2006-11-26予定
generation: 5号機初期
systemType: ボーナス + RT

## payoutRateBySetting

解析資料A（pacnk）:

| 設定 | 機械割 |
|---|---:|
| 1 | 95.96% |
| 2 | 98.48% |
| 3 | 101.02% |
| 4 | 103.55% |
| 5 | 106.78% |
| 6 | 108.80% |

5号機クロニクルでは94.5/97.7/100.0/102.4/105.4/107.4%と差があるためCONFLICT。平均化しない。

reliability: CONFLICT

## initialHitBySetting

### BIG合算
| 設定 | BIG合算 |
|---|---:|
| 1 | 1/291.3 |
| 2 | 1/273.1 |
| 3 | 1/257.0 |
| 4 | 1/245.5 |
| 5 | 1/232.4 |
| 6 | 1/227.6 |

### REG
| 設定 | REG |
|---|---:|
| 1 | 1/874 |
| 2 | 1/874 |
| 3 | 1/874 |
| 4 | 1/874 |
| 5 | 1/874 |
| 6 | 1/655 |

reliability: ANALYSIS_SINGLE

## baseGamesPer50

UNVERIFIED。

「めぞん一刻 2006 初代 50枚/1000円/ベース/コイン持ち」を変えて再探索したが、今回比較可能な通常時ベースを確定できず。

## netIncrease

RTの1G純増は今回、信頼できる比較値を確定できず。

## basicPayout

資料間で仕様表現に差があるためCONFLICT保持。

- 5号機クロニクル: BIG純増約260枚 + 50G RT、REG純増約104枚
- 後年まとめ資料: スーパーBIG約265枚 + RT159G、ノーマルBIG約200枚 + RT51G、REG約100枚

SBB/NBB別仕様について別資料照合が必要。

## modeSpecificMinimumData

- 当時業界記事で2006-10-30発表、2006-11-26納品開始予定
- 「ドラマチックエピソード」「キャラクター増加システム」搭載
- 5号機初期のボーナス+RT機

## sources

取得日: 2026-08-31

1. P-WORLD / グリーンべると — 新演出搭載のパチスロ機『めぞん一刻』
   - https://news.p-world.co.jp/articles/1916/greenbelt
   - 2006-10-30発表、11-26納品予定、SBB/演出構造
   - reliability: INDUSTRY
2. pacnk — めぞん一刻設定判別
   - https://pacnk.com/slot/tools/sh_mezonikkoku.html
   - 設定別BIG合算、REG、PAYOUT
   - reliability: ANALYSIS_SINGLE
3. 5号機クロニクル 平和＆オリンピア
   - https://5goki.com/heiwa-olympia
   - 2006年11月、ボーナス/RT、機械割
   - reliability: ANALYSIS_SINGLE
4. めぞん一刻シリーズ機械割回顧
   - https://www.marimo0925.net/pachislot-kikaiwariranking-mezonikkoku-ban/
   - 別機械割表、SBB/NBB/REG獲得・RT表記
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / ベース
- RT純増
- SBB/NBBそれぞれの設定別確率の確証

## conflicts

- 設定別機械割が資料間で大きく異なる。
- BIG/RT仕様が「BIG約260枚+50G」と「SBB約265枚+159G / NBB約200枚+51G」に分かれる。別スペック混同の有無を含め再監査対象。
