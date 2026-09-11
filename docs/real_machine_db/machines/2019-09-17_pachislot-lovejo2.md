# パチスロ ラブ嬢2

recordNo: 1305
machineName: パチスロ ラブ嬢2
machineNameVariants: パチスロ ラブ嬢Ⅱ / ラブ嬢2 / ラブ嬢Ⅱ
manufacturer: オリンピア
formalModel: Sパチスロラブ嬢2L2
certificationNumber: 9S0385
releaseDate: 2019-09-17
generation: 6号機
systemType: AT / ベルナビ回数+継続率管理型

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.8% |
| 3 | 101.8% |
| 4 | 104.0% |
| 5 | 105.8% |
| 6 | 112.0% |

HAZUSE、K-Navi、おスロおパチおいでやす等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/330.0 |
| 2 | 1/287.8 |
| 3 | 1/261.4 |
| 4 | 1/238.2 |
| 5 | 1/227.2 |
| 6 | 1/182.5 |

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

設定別の公開解析値:
- 設定1: 51.0G
- 設定2: 51.2G
- 設定3: 51.5G
- 設定4: 52.2G
- 設定5: 53.7G
- 設定6: 55.0G

代表概数として約51G/50枚とする資料もある。設定別値と概数を平均化しない。

信頼度: ANALYSIS_HIGH

## netIncrease

- AT「GOHOUBI RUSH」純増: 約3.0枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout

- GOHOUBI RUSH: ベルナビ回数+継続率管理。AT開始時はベルナビ上乗せ特化ゾーンから開始。
- 上乗せパート: 初回最低8G、2セット目以降最低4G。
- 継続チャンス: 10G、初回継続率50%、以降50〜99%。
- VIP BONUS: 20G、約60枚（純増約3.0枚/G）。

ATの獲得枚数は初期ベルナビ獲得数・継続で変動するため、固定枚数へ単純化しない。

## modeSpecificMinimumData

- 通常時は周期抽選。1周期平均約60G、最大80G。
- 12周期到達（概ね約720〜780G級）が周期天井でAT当選。
- アフターデートチャンス3連続失敗で次回周期AT確定。
- 有利区間移行時にATレベル初期値を抽選し、AT当選まで保持。詳細な通常時全抽選は物差し用途外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 天井周期: RESET。
- 有利区間: RESETし、非有利区間から開始。
- 有利区間ランプ: 消灯。
- 液晶表示G数は `??G` 表示。
- 開始ステージ: キャストスタンバイステージ。
- 有利区間移行時にATレベル初期値を再抽選する構造を確認。

### carryOverBehavior

- 据え置き時は天井周期 / 内部進行 / 有利区間を引き継ぐ。
- 有利区間ランプも前日状態を引き継ぐ。
- 接客・特図ステージ以外で電源OFF→ONした場合、ステージも引き継ぐとする当時解析あり。

### powerCycleBehavior

- 電源OFF→ONのみ: 天井周期CARRY_OVER / 有利区間CARRY_OVER / 内部進行CARRY_OVER。
- 液晶表示は `??G` となっても内部的には進行を引き継ぐ。

### gameCounterReset

- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset

- 設定変更後も12周期天井。
- リセット専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 有利区間移行時にATレベル初期値を抽選。
- 設定変更専用の別天井モードや朝一専用周期モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 公開されているATレベル振り分けは通常の有利区間移行時抽選として扱い、設定変更専用数値とは断定しない。

### stateAfterReset

- 設定変更: 非有利区間へ移行し、同一有利区間内で蓄積する周期/CZ連敗等はRESET。
- 据え置き / 電断: 内部進行を引き継ぐ。

### advantageousSectionReset

- 設定変更: RESET / ランプ消灯。
- 据え置き / 電源OFF→ON: CARRY_OVER / ランプ引継ぎ。

### resetBenefits

- 設定変更専用の短縮天井・朝一高確・特別な初当たり優遇率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 非有利区間からの再スタート自体は確認できるが、比較可能な専用恩恵数値は固定できない。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 前日閉店時に有利区間ランプ点灯を確認できる条件では、朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚。
- ただし前日側が消灯状態なら単独判別不能。
- ステージ挙動も補助材料。ガックンの機種固有発生条件・発生率は検索語・資料系統を変えても `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 設定変更専用のモード振り分け、朝一特定G以内当選率、リセット恩恵発生率として切り出せる確定数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常の有利区間移行時ATレベル振り分けは公開されているが、朝一専用値とはしない。

### resetBehavior 再探索メモ

「ラブ嬢2 / ラブ嬢Ⅱ / Sパチスロラブ嬢2L2 / オリンピア」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / モード / ATレベル / 内部状態 / 有利区間 / 有利区間ランプ / ガックン」を組み合わせて再探索。HAZUSE、当時解析、おスロおパチおいでやす、期待値見える化、一撃、すろぱちくえすと、K-Navi、業界記事を横断した。

## qualityNotes / conflicts

- HAZUSEで型式 `Sパチスロラブ嬢2L2`、検定番号 `9S0385`、2019-09-17導入を確認。
- 平和/オリンピア発表会系業界記事では納品9月16日予定、ホール導入資料は9月17日。DBのreleaseDateはホール導入開始日2019-09-17を採用。
- 50枚ベースは約51Gとする概数資料と設定別51.0〜55.0G資料がある。定義粒度差として平均化しない。
- 後継 `ラブ嬢2プラス`（2021）は別型式・別性能のため混同しない。

## sources

取得日: 2026-09-11

1. HAZUSE — パチスロ ラブ嬢Ⅱ
   - https://hazuse.com/machine/pachislot/9S0385/
   - 型式、検定番号、導入日、設定別AT初当たり/機械割、AT構造。
   - reliability: ANALYSIS_HIGH / DATABASE
2. おスロおパチおいでやす — 天井/朝一リセット
   - https://oslo-opachi.com/2019/09/11/lovejo2_tenjyou/
   - 12周期天井、設定変更/電断の天井・有利区間・ランプ・ステージ挙動、スペック。
   - reliability: ANALYSIS_HIGH
3. 期待値見える化 — 朝一リセット挙動
   - https://slotjin.com/slot/lovejo2-reset/
   - 天井周期、内部状態、有利区間ランプ、ステージのRESET/CARRY_OVER。
   - reliability: ANALYSIS_HIGH
4. 一撃 — ATレベル
   - https://1geki.jp/slot/s_lovej2/84/
   - 有利区間移行時のATレベル初期抽選とAT当選までの保持。
   - reliability: ANALYSIS_HIGH
5. K-Navi — パチスロ ラブ嬢2
   - https://p-kn.com/slot/3286/
   - 2019-09-17、設定別AT初当たり。
   - reliability: ANALYSIS_HIGH
6. Amusement Japan — 『パチスロ ラブ嬢2』プレス発表会
   - https://amusement-japan.co.jp/article/detail/10001290/
   - 周期ゲーム性、業界一次系発表。
   - reliability: INDUSTRY
7. グリーンべると — オール新キャストの『ラブ嬢2』が登場
   - https://web-greenbelt.jp/00011411/
   - AT確率レンジ、純増3.0枚/G、周期/AT構造、納品予定日。
   - reliability: INDUSTRY
8. 日刊スポーツ — 2019年9月導入カレンダー
   - https://www.nikkansports.com/m/amusement/pachislot/news/amp/201909060000314.html
   - 9月17日導入群確認。
   - reliability: INDUSTRY

## missingFields

- machine-specific gakkun condition/probability: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- reset-only dedicated mode distribution / reset-only hit-rate numeric: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- none material; baseGamesPer50 has representation granularity difference (約51G vs setting-specific 51.0〜55.0G), retained without averaging.

recordStatus: COMPLETE_CORE_RESET_V07
