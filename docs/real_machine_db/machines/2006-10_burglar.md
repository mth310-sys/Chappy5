# バーグラー

machineName: バーグラー
manufacturer: メーシー
releaseDate: 2006-10-23（DMMぱちタウン） / 2006-10（メーカー公式）
generation: 5号機初期
systemType: ノーマル / 完全告知 / 小役同時抽選

## payoutRateBySetting

CONFLICT

### pacnk
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.0% |
| 4 | 101.0% |
| 6 | 104.0% |

### 5号機クロニクル
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.3% |
| 4 | 100.8% |
| 6 | 103.5% |

## initialHitBySetting

| 設定 | BIG | REG |
|---:|---:|---:|
| 1 | 1/290.0 | 1/496.5 |
| 4 | 1/281.3 | 1/448.9 |
| 6 | 1/271.9 | 1/407.1 |

信頼度: ANALYSIS_SINGLE（pacnk）

メーカー公式は合成確率を設定1約1/183、設定6約1/163と説明しており、上記BIG/REGから算出される合算レンジと整合する。

## baseGamesPer50
UNVERIFIED

## netIncrease
該当なし（ノーマル機として公式掲載）。

## basicPayout

CONFLICT / 定義差あり。
- DMMぱちタウン: BIGは345枚超払い出し終了、純増約336枚 / BURGLAR CHANCEは120枚超払い出し終了、純増約126枚
- 5号機クロニクル: BIG約270枚 / REG約100枚

数値差が大きいため平均化しない。払い出し条件と実獲得表現の混同可能性も含めQA対象。

## modeSpecificMinimumData

- メーシー
- 5号機
- 完全告知
- ボーナス成立ゲームは第3停止後に必ず告知
- 小役とボーナスの同時抽選
- 設定1/4/6の3段階

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式「バーグラー」 — https://www.universal-777.com/product/slot/burglar/ — メーシー、5号機、ノーマル、2006年10月、完全告知、設定1/6の合成確率 — reliability: OFFICIAL
2. DMMぱちタウン「バーグラー」 — https://p-town.dmm.com/machines/1378 — 導入開始日2006-10-23、ボーナス払い出し条件/純増表記 — reliability: ANALYSIS_HIGH
3. pacnk「バーグラー 設定判別ツール」 — https://pacnk.com/slot/tools/sh_bag.html — 設定1/4/6のBIG/REG/PAYOUT — reliability: ANALYSIS_SINGLE
4. 5号機クロニクル「ユニバーサル系5号機一覧」 — https://5goki.com/universal — 2006年10月、機械割、獲得枚数の別資料 — reliability: ANALYSIS_SINGLE
5. P-WORLD「2006年10月導入機種一覧」 — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2006-10 — 2006年10月導入機として掲載 — reliability: ANALYSIS_HIGH

## missingFields

- 50枚あたりゲーム数
- 獲得枚数の定義差解消
- 設定別BIG/REGの別ソース照合

## conflicts

- 機械割はpacnk 98.0/101.0/104.0% と5号機クロニクル 98.3/100.8/103.5%で小差。
- ボーナス獲得性能はDMMと5号機クロニクルで大きな差があり、現時点ではCONFLICT。平均化しない。
