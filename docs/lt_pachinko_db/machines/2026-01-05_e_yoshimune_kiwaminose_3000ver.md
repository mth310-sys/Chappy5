# e吉宗 極乗3000ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e吉宗 極乗3000ver.
manufacturer: 大都技研
formalModel: e/吉宗極乗3000ver/L06
releaseDate: 2026-01-05
modelType: ライトミドル / スマパチ
gameType: 一種二種混合 / 直LT / ST / LT3.0+

## Core spec
jackpotProbability:
- 通常時: 1/199.9
- 振舞RUSH中: 1/99.5
- 1G連中: 1/1（1G連チャレンジ成功時の上乗せ状態）
initialPayout: 初当りは5R 約750個（払出）100%
rushEntryRate: 30%（RUSH=LT。非LT下位RUSHなし）
rushContinuationRate: 非LT通常RUSHなし

## Lucky Trigger
ltName: 振舞RUSH
ltEntryRoute: 初当り5R「振舞チャレンジボーナス」後のチャレンジ成功。特図1大当りの30%で直LT。
ltEntryRate: 初当り時30%。通常時1/199.9と30%から算術上約1/666.3相当だが、DBでは公表される「約1/666」表記を補助情報として保持し、主値は30%とする。
ltContinuationRate: 約80%
ltPayoutStructure:
- 振舞RUSH中 3000個+α: 50%
  - 詳細: 3000個 + 1G連(1回): 12.5%
  - 詳細: 3000個 + 振舞RUSH157回: 37.5%
- 300個 + 振舞RUSH157回: 50%
- 3000個は750個×4回の合算値。
- 3000個大当り時の1G連チャレンジ成功期待度は約25%。成功時は3000個上乗せ後、再度1G連チャレンジ。約25%でループ。
- 1G連中: 3000個 + 1G連 25% / 3000個 + 振舞RUSH157回 75%。

totalPayoutDistribution:
### 特図1
- 5R 約750個 + 振舞RUSH(LT): 30%
- 5R 約750個 + 通常: 70%
### 特図2 / 振舞RUSH
- 5R×4 約3000個 + 1G連: 12.5%
- 5R×4 約3000個 + 振舞RUSH: 37.5%
- 2R 約300個 + 振舞RUSH: 50%

## Support / special systems
timeShortening: 振舞RUSH ST157回。通常大当り後のLT非突入時は電サポなし。1G連時は1回。
cTimeOrSpecialSystems: LT3.0+。普図抽選のSTで、振舞RUSH終了時の残保留なし。3000個当り時に1G連チャレンジ（約25%成功）があり、成功中は3000個上乗せが約25%でループ。
ceilingOrSupport: 遊タイム非搭載

## Game flow
gameFlow: |
  通常時 1/199.9
   ↓ 初当り 5R約750個
  振舞チャレンジボーナス
   ├─ 成功 30% → LT「振舞RUSH」
   └─ 失敗 70% → 通常時

  LT「振舞RUSH」
   ST157回 / 1/99.5 / 継続約80%
   ↓ 大当り
   ├─ 300個 50% → 振舞RUSH157回へ
   └─ 3000個+α 50%
       ├─ 1G連 12.5%相当 → 3000個上乗せ → 約25%でさらに1G連
       └─ 振舞RUSH 37.5%相当
   ↓ ST157回スルー
  通常時

## Notes
- 本機はRUSH突入=LT発動の直LTタイプで、通常RUSHとLTを別段階として補わない。
- 3000個は単一ラウンドの払出ではなく750個×4回の合算。
- グリーンべるとの「RUSH中3000個+α 50%」と必勝本の詳細12.5%+37.5%=50%は整合する。
- 必勝本は普図抽選のためLT終了時残保留なしと明記。残保留引き戻しを継続率へ加算しない。
- 1G連チャレンジはLTそのものとは別の3000個上乗せループ機構として記録。

## Sources
retrievedAt: 2026-09-23
1. グリーンべると — 大都技研発表、導入日、直LT、1/199.9、30%、約80%、3000個+α/1G連構造
   https://web-greenbelt.jp/post-106751/
   confidence: INDUSTRY
2. パチ&スロ必勝本 基本スペック — 一種二種、1/199.9、右1/99.5、LT30%、ST157、約80%、遊タイム非搭載
   https://hisshobon.com/machineinfo/100347/
   confidence: ANALYSIS_HIGH
3. パチ&スロ必勝本 大当り振り分け — 特図1 30/70、特図2 3000+α 50%/300個50%、1G連約25%
   https://hisshobon.com/machineinfo/100348/
   confidence: ANALYSIS_HIGH
4. パチ&スロ必勝本 LT解説 — LT正式名称、ST157、終了後通常、普図STで残保留なし
   https://hisshobon.com/machineinfo/100349/
   confidence: ANALYSIS_HIGH
5. 一撃 — 導入日、1/199.9、右1/99.5、ST157、約80%、3000個=750個×4
   https://1geki.jp/pachinko/e_yoshimune/
   confidence: ANALYSIS_HIGH
6. おもてなしワールド機種DB — 型式 `e/吉宗極乗3000ver/L06`、導入日、確率、電サポ
   https://pachinko.omotenashi-world.com/machine-4932/
   confidence: ANALYSIS_SINGLE

confidence: ANALYSIS_HIGH
missingFields: none for core mission
conflicts: none
