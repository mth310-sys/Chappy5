# 信長の野望・天下創世R

machineName: 信長の野望・天下創世R
manufacturer: IGTジャパン
releaseDate: 2005-12
generation: 5号機初期
systemType: ボーナス主体 / Aタイプ

## payoutRateBySetting

資料間で設定3〜6の機械割に差異あり。

### 5号機クロニクル
| 設定 | 機械割 |
|---|---:|
| 1 | 98.0% |
| 2 | 100.0% |
| 3 | 101.7% |
| 4 | 103.7% |
| 5 | 105.4% |
| 6 | 107.0% |

信頼度: ANALYSIS_SINGLE

### pacnk設定判別ツール
| 設定 | 機械割 |
|---|---:|
| 1 | 98.0% |
| 2 | 100.0% |
| 3 | 101.0% |
| 4 | 103.0% |
| 5 | 105.0% |
| 6 | 106.0% |

信頼度: ANALYSIS_SINGLE

設定1・2は一致。設定3〜6はCONFLICTとして保持する。

## initialHitBySetting

ボーナス合算（5号機クロニクル）:

| 設定 | 合算 |
|---|---:|
| 1 | 1/251 |
| 2 | 1/241 |
| 3 | 1/231 |
| 4 | 1/221 |
| 5 | 1/213 |
| 6 | 1/205 |

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「千円」「ベース」「回転数」「ゲーム数」等へ検索語を変え、現存する解析サイト・機種DBを横断したが、比較可能な50枚あたりゲーム数を確認できなかった。

## netIncrease

該当なし（ボーナス主体）。

## basicPayout

パチマガスロマガ:
- BIG: 465枚超の払い出しで終了 / 純増 約340枚
- REG: 126枚超の払い出しで終了 / 純増 約108枚

信頼度: ANALYSIS_SINGLE

## modeSpecificMinimumData

### BB確率
| 設定 | 5号機クロニクル | pacnk |
|---|---:|---:|
| 1 | 1/364 | 1/364.09 |
| 2 | 1/349 | 1/348.60 |
| 3 | 1/334 | 1/334.37 |
| 4 | 1/321 | 1/321.26 |
| 5 | 1/309 | 1/309.13 |
| 6 | 1/298 | 1/297.89 |

丸め差の範囲で整合しているため、BB確率は複数資料一致相当として扱う。
信頼度: ANALYSIS_HIGH

### RB確率
| 設定 | 5号機クロニクル | pacnk |
|---|---:|---:|
| 1 | 1/810 | 1/819.20 |
| 2 | 1/780 | 1/780.19 |
| 3 | 1/745 | 1/744.73 |
| 4 | 1/712 | 1/712.35 |
| 5 | 1/683 | 1/682.67 |
| 6 | 1/655 | 1/655.00 |

設定2〜6はほぼ一致するが、設定1のみ 1/810 と 1/819.20 の差があるため設定1RBはCONFLICTとして保持する。

### ボーナス獲得
- BIG純増: 約340枚
- REG純増: 約108枚

信頼度: ANALYSIS_SINGLE

## sources

取得日: 2026-08-31

1. 5号機クロニクル — IGTジャパン5号機全機種一覧
   - https://5goki.com/igt
   - 導入時期2005/12、設定別BIG/REG/合算、機械割
   - reliability: ANALYSIS_SINGLE
2. パチマガスロマガ — 信長の野望・天下創世R
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/41/a.php
   - 5号機/5ライン/3枚掛け、BIG・REG規定払い出しと純増
   - reliability: ANALYSIS_SINGLE
3. pacnk — 信長の野望・天下創世R 設定判別ツール
   - https://pacnk.com/slot/tools/sh_nobunaganoyaboutenchisouseir.html
   - IGTジャパン、2005年12月導入、設定別BIG/REG/機械割
   - reliability: ANALYSIS_SINGLE
4. A-SLOT — IGT 信長の野望・天下創世R 実機ページ
   - https://www.a-slot.com/SHOP/igt3.html
   - IGT実機、5号機後継機であることの補助確認
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / ベース
- 機械割の設定3〜6の確定値
- 設定1REG確率の確定値

## conflicts

- 機械割: 5号機クロニクルは設定3〜6=101.7/103.7/105.4/107.0%、pacnkは101.0/103.0/105.0/106.0%。平均化しない。
- REG設定1: 5号機クロニクル 1/810、pacnk 1/819.20。設定2〜6はほぼ一致。
