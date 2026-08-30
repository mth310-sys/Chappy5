# 出ましたハクション大魔王

machineName: 出ましたハクション大魔王
manufacturer: サミー
releaseDate: 2005-11
generation: 5号機初期
systemType: A+RT / ボーナス主体 + ボーナス後RT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.4% |
| 2 | 97.8% |
| 3 | 99.6% |
| 4 | 101.4% |
| 5 | 103.2% |
| 6 | 106.2% |

複数の解析資料で一致。別の回顧資料では設定1 95.33%〜設定6 106.23%と小数精度の差があるため、丸め差として注記する。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

主要初当たりとしてBIG合成を採用。

| 設定 | BIG合成 | REG |
|---|---:|---:|
| 1 | 1/336 | 1/9362.3 |
| 2 | 1/321 | 1/9362.3 |
| 3 | 1/312 | 1/9362.3 |
| 4 | 1/303 | 1/9362.3 |
| 5 | 1/295 | 1/9362.3 |
| 6 | 1/280 | 1/9362.3 |

BIG3種類は別フラグ。設定別の内訳は以下。

### 赤7BIG（魔王BIG）
| 設定 | 確率 |
|---|---:|
| 1 | 1/1191.5 |
| 2 | 1/1129.9 |
| 3 | 1/1092.3 |
| 4 | 1/1057.0 |
| 5 | 1/1024.0 |
| 6 | 1/963.8 |

### 白7BIG（あくびBIG）
| 設定 | 確率 |
|---|---:|
| 1 | 1/1008.2 |
| 2 | 1/963.7 |
| 3 | 1/936.2 |
| 4 | 1/910.2 |
| 5 | 1/885.6 |
| 6 | 1/840.2 |

### 青7BIG（カンちゃんBIG）
| 設定 | 確率 |
|---|---:|
| 1 | 1/873.8 |
| 2 | 1/840.2 |
| 3 | 1/819.2 |
| 4 | 1/799.2 |
| 5 | 1/780.2 |
| 6 | 1/744.7 |

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

「出ましたハクション大魔王」「50枚」「1000円」「コイン持ち」「回転数」、型式/メーカー併記など複数検索を行ったが、今回確認できた現存資料では物差し比較に使用できる50枚あたりゲーム数を取得できなかった。

## netIncrease

ボーナス後RT「ドキドキタイム」: 約0.8枚/G。

RTゲーム数:
- 赤7BIG後: 180G
- 白7BIG後: 60G
- 青7BIG後: 30G
- REG後: 1000G

規定G数消化またはボーナス成立で終了。

信頼度: ANALYSIS_HIGH

## basicPayout

- BIG: 規定払い出し345枚、純増約230枚
- REG: 8回入賞または12G消化で終了、純増約48枚（パチマガスロマガ）

REG純増は別解析サイトに「約100枚」とする記載があり競合するため、物差し元データでは約48枚を優先しつつCONFLICTとして保持する。

## modeSpecificMinimumData

- BIG 3種類 + REG 1種類
- 全ボーナス後にRTへ突入
- RT純増: 約0.8枚/G
- 赤7BIG後RT: 180G
- 白7BIG後RT: 60G
- 青7BIG後RT: 30G
- REG後RT: 1000G

## sources

取得日: 2026-08-31

1. サミー公式 製品一覧
   - https://www.sammy.co.jp/japanese/products/pachislot/
   - 「出ましたハクション大魔王」をサミー製品として確認。公式一覧では2005.10表記。
   - reliability: OFFICIAL
2. HAZUSE — 出ましたハクション大魔王解析
   - https://www.hazuse.com/i/det2/demasita/top.htm
   - 2005年11月、5号機、BIG3種の設定別確率、BIG合成、REG、機械割
   - reliability: ANALYSIS_HIGH
3. Cranky Seven — 出ましたハクション大魔王解析
   - https://crankyseven.com/sp/demasitahakusyon-pc.htm
   - BIG3種設定別確率、BIG合成、REG、機械割、BIG純増約230枚、RT各ゲーム数
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 出ましたハクション大魔王 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/92/a.php
   - RT約0.8枚/G、BIG規定払い出し345枚/純増約230枚、REG純増約48枚、REG後RT1000G
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — サミー5号機一覧
   - https://5goki.com/sammy
   - 導入年月2005/11、A+RT、機械割
   - reliability: ANALYSIS_SINGLE
6. ドル箱年表 2005年
   - https://www.dorubako.biz/year/2005.html
   - 出玉率95.33%〜106.23%の補助照合
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / ベース

## conflicts

- 導入時期: サミー現行製品一覧は2005.10表記、複数の5号機資料は2005/11導入とする。本DBのreleaseDateはホール導入時期を優先し2005-11とし、公式の2005.10は製品年月候補として保持。
- REG純増: パチマガスロマガは約48枚、Cranky Sevenは約100枚。定義/算出差の可能性があるため平均化せずCONFLICT。物差し利用時は約48枚を高信頼資料値として優先する。
- 機械割: 95.4〜106.2%と95.33〜106.23%があるが、同一値の丸め精度差とみなし、95.4〜106.2%表を採用。
