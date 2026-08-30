# 逮捕しちゃうぞ

machineName: 逮捕しちゃうぞ
manufacturer: IGTジャパン
releaseDate: 2006-08-28
generation: 5号機初期
systemType: A+RT / ループBIG後無限RT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 98.7% |
| 2 | 100.1% |
| 3 | 101.3% |
| 4 | 102.7% |
| 5 | 103.9% |
| 6 | 105.2% |

5号機クロニクルと別二次資料で一致。
信頼度: ANALYSIS_HIGH

## initialHitBySetting

ボーナス確率は資料間で定義/集計差があるためCONFLICT。

5号機クロニクル掲載:
- BIG: 1/819.4 → 1/689.9
- REG: 1/546.1（表の行結合表示上、設定2〜6は同値扱いと読める）
- 合成: 1/327.7 → 1/304.8

別二次資料（みんスロ）掲載:
- BIG: 1/524 → 1/437
- REG: 1/546
- 合成: 1/267 → 1/243

同一機種内で「ループBIG/青7BIG等の内訳」と「BIG合算」の集計単位差が疑われるため、どちらかへ統合せずCONFLICTとして保持。

## baseGamesPer50

パチマガスロマガ:
- 設定1: 42.85G/1000円
- 設定2: 43.47G/1000円
- 設定3: 43.99G/1000円
- 設定4: 44.64G/1000円
- 設定5: 45.19G/1000円
- 設定6: 45.88G/1000円

信頼度: ANALYSIS_HIGH

## netIncrease

RT「特売タイム」: 約0.3枚/Gとする複数二次資料あり。
信頼度: ANALYSIS_HIGH

## basicPayout

パチマガスロマガ:
- BIG: 465枚超払い出しで終了、純増約360枚
- REG: 120枚超払い出しで終了、純増約100枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン / 3枚掛け専用。
- ループBIG後は次回ボーナスまで継続する無限RT「特売タイム」へ突入。
- 後年回顧資料でもRT純増約0.3枚/G、次回ボーナスまで継続する無限RTとして確認。

## sources

取得日: 2026-08-31

1. 5号機クロニクル — IGTジャパン5号機一覧
   - https://5goki.com/igt
   - 2006/8、設定別機械割、掲載上のBIG/REG/合成確率。
   - reliability: ANALYSIS_SINGLE
2. パチマガスロマガ — 逮捕しちゃうぞ 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/42/a.php
   - 5号機/5ライン/3枚掛け、ループBIG後無限RT、BIG/REG払い出し条件と純増目安。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 逮捕しちゃうぞ 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/42/c.php
   - 1000円あたり42.85〜45.88G。
   - reliability: ANALYSIS_HIGH
4. 悠遊道 — 逮捕しちゃうぞ回顧
   - https://www.pachinko-road.com/column/27129/
   - 2006年8月、RT純増0.3枚/G、ループBIG後次回ボーナスまでの無限RT。
   - reliability: ANALYSIS_SINGLE
5. みんスロ — 逮捕しちゃうぞ
   - https://minslo.com/%E9%80%AE%E6%8D%95%E3%81%97%E3%81%A1%E3%82%83%E3%81%86%E3%81%9E/
   - 導入日2006-08-28、A+RT、RT0.3枚/G、BIG360枚/REG100枚、別定義のBIG/REG/合成確率、機械割。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定別ボーナス確率の集計定義を揃えた確定表

## conflicts

- ボーナス確率: 5号機クロニクルのBIG 1/819.4〜1/689.9・合成1/327.7〜1/304.8と、みんスロのBIG 1/524〜1/437・合成1/267〜1/243が大きく競合。機械割は一致するため別機種混同より、BIG分類/集計単位差の可能性がある。確定表が得られるまで双方保持し物差し集計へは使用しない。
