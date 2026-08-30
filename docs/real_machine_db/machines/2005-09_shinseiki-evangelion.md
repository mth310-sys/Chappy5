# 新世紀エヴァンゲリオン

machineName: 新世紀エヴァンゲリオン
manufacturer: ビスティ
releaseDate: 2005-09
generation: 5号機初期
systemType: ボーナス主体 + REG後100G RT

## payoutRateBySetting

### 資料A: 5号機クロニクル

| 設定 | 機械割 |
|---|---:|
| 1 | 96.1% |
| 2 | 98.0% |
| 3 | 100.6% |
| 4 | 103.4% |
| 5 | 106.2% |
| 6 | 109.2% |

信頼度: ANALYSIS_SINGLE

### 資料B: エヴァ歴代機まとめ

| 設定 | 機械割 |
|---|---:|
| 1 | 96.77% |
| 2 | 98.55% |
| 3 | 100.84% |
| 4 | 103.34% |
| 5 | 105.88% |
| 6 | 108.51% |

信頼度: ANALYSIS_SINGLE

両資料に差があるため平均化せずCONFLICTとして保持する。

## initialHitBySetting

再探索で設定別BB/RB確率を確認。

| 設定 | BIG | REG |
|---|---:|---:|
| 1 | 1/451.9 | 1/1310.7 |
| 2 | 1/428.3 | 1/1236.5 |
| 3 | 1/397.1 | 1/1170.2 |
| 4 | 1/374.4 | 1/1110.7 |
| 5 | 1/358.1 | 1/1057.0 |
| 6 | 1/358.1 | 1/1057.0 |

信頼度: ANALYSIS_SINGLE

遊技日本の回顧記事ではボーナス合算をおおむね1/336〜1/267としており、上表と整合する方向だが、設定別の高信頼別ソース照合は継続する。

## baseGamesPer50

45〜52G/1000円（20円スロット50枚相当）との業界記事記載あり。

信頼度: ANALYSIS_SINGLE

## netIncrease

該当なし。REG後100GのRTはメダルをほぼ減らさず遊技できる仕様と公式機種紹介に記載。

## basicPayout

BIG: 465枚超の払い出しで終了。純増について業界記事では約360枚。
REG: UNVERIFIED

## modeSpecificMinimumData

- REG後100G RT「レイチャンス」
- BB確率（設定別）: 上表参照（ANALYSIS_SINGLE）
- RB確率（設定別）: 上表参照（ANALYSIS_SINGLE）
- BB獲得枚数: 約360枚（ANALYSIS_SINGLE）
- RB獲得枚数: UNVERIFIED

## sources

取得日: 2026-08-31

1. SANKYOオンライン博物館 — 「新世紀エヴァンゲリオン」の機種詳細
   - https://www.sankyo-fever.jp/collection/859/
   - 導入年月2005.09、ブランド=ビスティ、3種類のBIG・1種類のREG、REG後100G RT
   - reliability: OFFICIAL
2. 5号機クロニクル — ビスティ5号機全機種一覧
   - https://5goki.com/bisty
   - 導入時期、設定別機械割
   - reliability: ANALYSIS_SINGLE
3. 遊技日本 — 平成の名機－パチスロ編⑥－
   - https://yugi-nippon.com/history/post-27551/
   - BIG 465枚超終了/純増約360枚、1000円45〜52G、ボーナス合算1/336〜1/267
   - reliability: ANALYSIS_SINGLE
4. パチ7 — エヴァシリーズ歴代レビュー：序
   - https://pachiseven.jp/articles/detail/12110
   - 2005年機、REG後100G RT、最高設定出玉率109.2%の補助確認
   - reliability: ANALYSIS_SINGLE
5. ptro — 「新世紀エヴァンゲリオン」パチンコ・スロット歴代全41機種まとめ
   - https://ptro.live/p-evangelion.html
   - 初代パチスロの設定別BIG/REG確率、設定別機械割（96.77〜108.51%）
   - reliability: ANALYSIS_SINGLE

## missingFields

- REG獲得枚数
- 設定別BB/RB確率の別系統高信頼ソース照合

## conflicts

機械割は資料間で差がある。5号機クロニクルは96.1〜109.2%、ptroは96.77〜108.51%、さらに過去確認資料に96.9〜108.6%の値もある。平均化せず、物差し集計へ投入する前に定義・算出条件を再確認する。
