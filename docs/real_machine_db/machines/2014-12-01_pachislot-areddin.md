# パチスロ アレジン

machineName: パチスロ アレジン
manufacturer: 藤商事
releaseDate: 2014-12-01
releaseDatePrecision: hall_start_multi_source
generation: 5号機
systemType: AT / アクセルAT / CZ搭載
modelName: アレジンFSF
inspectionNumber: 4S0446
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **藤商事**。
- 導入開始: **2014-12-01**。HAZUSE / パチ＆スロ必勝本で一致。当時解析記事でも12月1日導入を確認。
- 型式名: **アレジンFSF**。
- 検定番号: **4S0446**。
- 5号機AT。藤商事公式はAT「アレジンタイム」を **1セット70G+α / 純増約3.0枚/G** と公表。
- confidence: OFFICIAL_FOR_AT_CORE / ANALYSIS_HIGH_MULTI_SOURCE_FOR_HALL_START_AND_IDENTITY

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.6% |
| 3 | 101.3% |
| 4 | 104.8% |
| 5 | 108.8% |
| 6 | 116.5% |

- HAZUSE表記。必勝本は **97.2 / 98.6 / 101.3 / 104.8 / 108.8 / 116.6%**、旧パチマガスロマガ系整理は **97.20 / 98.58 / 101.32 / 104.84 / 108.78 / 116.55%** と精度差がある。
- 小数1桁の丸め差として原値を併記し、平均しない。canonical比較値はHAZUSEの1桁表記。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_ROUNDING_DIFFERENCE

## initialHitBySetting

### AT「アレジンタイム」初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/381.4 |
| 2 | 1/350.7 |
| 3 | 1/366.9 |
| 4 | 1/304.8 |
| 5 | 1/324.4 |
| 6 | 1/271.1 |

- HAZUSE / パチ＆スロ必勝本 / 当時解析整理で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **23.72G / 50枚**（旧パチマガスロマガ）。HAZUSEは丸めて **23.7G / 50枚**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「アレジンタイム」: **純増約3.0枚/G**。
- 藤商事公式・当時業界記事・複数解析資料で一致。
- confidence: OFFICIAL_AND_INDUSTRY_MULTI_SOURCE

## basicPayout

- AT「アレジンタイム」: **1セット70G+α**、純増約3.0枚/G。
- 通常時の奇数図柄揃い、CZ「アレジンチャレンジ」等からATへ突入。
- 比較用には「70G+α / 約3.0枚/G」を保持し、実獲得枚数を固定値へ換算しない。
- confidence: OFFICIAL

## modeSpecificMinimumData

- 通常時はAT当選率の異なる複数内部モードを持つ。
- CZ「アレジンチャレンジ」搭載。
- 通常時の天井は **1000G or 1400G**。
- 天井振り分け:
  - 1000G: **10.00%**（AT1セット、50%ループ75% / 75%ループ25%）
  - 1400G・AT2セット: **80.00%**（50%ループ80% / 75%ループ20%）
  - 1400G・AT6セット: **10.00%**（50%ループ100%）
- 「アレスロ」は16G周期の盤面システム。リプレイ成立に応じてマスが点灯し、ライン成立がCZ/AT契機になる。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_MULTI_SOURCE_WITH_POWER_CYCLE_CONTRACT
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **天井までのゲーム数: 再抽選 / リセット**。
- **内部モード: 再抽選**。
- **内部状態: 再抽選**。
- **アレスロ: 再抽選**。
- 液晶ステージ: **オアシスステージ**。
- 液晶出目: **7・3・1**。
- 朝一はフェイク前兆スタートという当時解析がある。
- HAZUSEとパチ＆スロ必勝本で主要契約が一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は設定変更処理を伴わないため、当時攻略では**アレスロ点灯状態を引き継ぐ**ことが明示され、宵越し判別材料として利用されていた。
- 天井G・内部モード・内部状態については、パチ＆スロ必勝本の「電源OFF→ON」契約で **引き継ぐ** と明記されており、設定変更なし据え置き運用の基本契約として保持する。
- confidence: ANALYSIS_HIGH_FOR_POWER_CYCLE / ANALYSIS_MULTI_SOURCE_FOR_ARESLO_CARRY

### powerCycleBehavior

設定変更を伴わない純電源OFF→ON:

- 天井までのゲーム数: **引き継ぐ**。
- モード: **引き継ぐ**。
- 状態: **引き継ぐ**。
- アレスロ: **基本的に引き継ぐ。ただし任意でリセット可能**。
- 液晶ステージ: **オアシスへ**。
- 液晶出目: **7・3・1**。
- したがって液晶初期ステージ/初期出目だけでは設定変更判別に使えない。
- confidence: ANALYSIS_HIGH_DIRECT_TABLE

### gameCounterReset

- 設定変更時: **RESET / RESELECT**。
- 電源OFF→ONのみ: **CARRYOVER**。
- 通常時天井1000G/1400Gの内部ゲーム数が対象。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset

- 設定変更専用の固定短縮天井は **NONE_CONFIRMED**。
- 通常天井自体は1000G/1400Gで、設定変更時に天井までのゲーム数が再抽選される。
- 「設定変更後だけ○Gへ短縮」という別契約は確認できないため推測しない。

### modeAfterReset

- 設定変更時は内部モードを再抽選。
- パチ＆スロ必勝本の直接表:

| 設定 | 低確A | 低確B | 高確 | 天国準備 | 天国 | 天国ロング | 超天国 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 34.85% | 21.66% | 18.31% | 25.00% | 0.11% | 0.05% | 0.01% |
| 2 | 38.82% | 11.44% | 24.56% | 25.00% | 0.11% | 0.05% | 0.01% |
| 3 | 34.85% | 21.66% | 18.31% | 25.00% | 0.11% | 0.05% | 0.01% |
| 4 | 31.35% | 21.66% | 21.36% | 25.00% | 0.46% | 0.11% | 0.05% |
| 5 | 27.07% | 28.99% | 18.31% | 25.00% | 0.46% | 0.11% | 0.05% |
| 6 | 26.31% | 26.70% | 21.36% | 25.00% | 0.46% | 0.11% | 0.05% |

- 天国ロング準備A/Bには設定変更時 **移行しない**。
- HAZUSEも同数値を掲載。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset

- 設定変更時: **状態再抽選**。
- 電源OFF→ONのみ: **状態引き継ぎ**。
- 状態の全詳細振り分けは完全再現用なので本DBでは収集対象外。
- confidence: ANALYSIS_HIGH_DIRECT_TABLE

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時、内部モードの **天国準備が全設定25.00%**。
- さらにアレスロモードは全設定共通で **通常87.5% / 天国12.5%** に再抽選。
- 朝一はフェイク前兆スタートという解析があり、リセット挙動の識別材料になる。
- 固定短縮天井は確認できない。

### resetPenalties

- 設定変更時に、前日の天井G・モード・状態・アレスロ進行を失うため、前日有利な進捗を持つ台ではその持越し価値が消える。
- ただし「リセット専用冷遇率」等の公開された独立ペナルティは **NONE_CONFIRMED**。

### resetDetection

- 設定変更/リセット時は、画面右下の**アレスロが全消灯し1マス目からスタート**する当時解析あり。
- 据え置き/通常の電源OFF→ONではアレスロを基本的に引き継ぐため、前日点灯状況を記録していれば判別材料になる。
- ただし電源OFF→ON時でもアレスロは**任意でリセット可能**という必勝本の直接契約があるため、全消灯だけで100%設定変更とは断定しない。
- 設定変更時はフェイク前兆スタートも補助判別要素。
- 液晶ステージと液晶出目は設定変更・電源OFF→ONの双方でオアシス / 7・3・1になるため単独判別には使えない。
- ガックンについて本機固有の安全な直接契約は今回確認できず、主要判別はアレスロ/前兆挙動を採用。

### numericResetData

- 設定変更時内部モード: 上記 `modeAfterReset` 表。
- 設定変更時アレスロモード:
  - 通常: **87.5%**
  - 天国: **12.5%**
- 設定変更時天国準備: **全設定25.00%**。
- 固定リセット短縮天井: **NONE_CONFIRMED**。

### publicMorningNumbers

- 公開朝一数値として、設定変更時の内部モード振り分けとアレスロモード振り分けを取得済み。
- 設定1のみを丸めた当時解析では、低確A約35% / 低確B約22% / 高確約18% / 天国準備25% / 天国系約0.17%として紹介されており、精密表と整合する。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `パチスロ アレジン / パチスロアレジン / アレジンFSF / AREDDIN / 藤商事`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / アレスロ / ガックン / 50枚 / 千円 / ベース / コイン持ち`。
- 資料系統: 藤商事公式、グリーンべると、PiDEA、HAZUSE、パチ＆スロ必勝本、旧パチマガスロマガ、2014年当時攻略記事、後年機種DB。
- 2022年のパチンコ「Pアレジン プレミアム」等、別機種の仕様は混入させていない。

## sources

取得日: 2026-09-07

1. 藤商事公式 — パチスロ アレジン
   - https://www.fujimarukun.co.jp/products/s_areddin/
   - AT 1セット70G+α、純増約3.0枚/G
   - reliability: OFFICIAL
2. HAZUSE — パチスロアレジン
   - https://hazuse.com/machine/pachislot/SX0110/
   - 2014-12-01導入、型式アレジンFSF、検定4S0446、AT確率、機械割、23.7G/50枚、天井、設定変更時モード/天井/アレスロ契約
   - reliability: ANALYSIS_DATABASE_HIGH
3. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/2481/1/49265
   - AT初当たり、機械割、2014/12/01導入、70G+α・約3.0枚/G
   - reliability: ANALYSIS_HIGH
4. パチ＆スロ必勝本 — 天井&設定変更
   - https://p.hisshobon.jp/machine/2481/1/49778
   - 1000G/1400G天井、天井振り分け、設定変更時の天井G/モード/状態/アレスロ再抽選、モード精密表、電源OFF→ON時の天井G/モード/状態/アレスロ引継ぎ、液晶初期状態
   - reliability: ANALYSIS_HIGH_DIRECT_TABLE
5. 旧パチマガスロマガ — 小役確率 / 50枚ゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/17/c.php
   - 50枚あたり23.72G
   - reliability: ANALYSIS_HIGH_ARCHIVE
6. 旧パチマガスロマガ — 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/17/a.php
   - 2014年12月、AT/CZ、70G・約3枚/G
   - reliability: ANALYSIS_HIGH_ARCHIVE
7. グリーンべると — アレンジボールの名機『アレジン』がパチスロに！
   - https://web-greenbelt.jp/00007345/
   - 2014-10-27業界発表記事、AT純増約3.0枚/G、70G+α
   - reliability: INDUSTRY
8. すろぱちくえすと — 朝一設定変更・リセット判別
   - https://www.slopachi-quest.com/article/areddin-reset-check/
   - 設定変更時フェイク前兆、アレスロ全消灯/1マス目、据え置き時引継ぎ、判別上の注意
   - reliability: PERIOD_ANALYSIS_SINGLE
9. すろぱちくえすと — リセット時モード移行率
   - https://www.slopachi-quest.com/article/%E3%82%A2%E3%83%AC%E3%82%B8%E3%83%B3-%E6%9C%9D%E4%B8%80%E8%A8%AD%E5%AE%9A%E5%A4%89%E6%9B%B4%E3%83%BB%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88%E6%99%82%E3%81%AF%E5%A4%A9%E5%9B%BD%E6%BA%96%E5%82%99%E3%83%A2/
   - 設定1朝一モード丸め値、天国準備25%、フェイク前兆
   - reliability: PERIOD_ANALYSIS_SINGLE
10. モゲスロ — 宵越し・設定変更判別
    - https://moge-site.com/archives/2138
    - リセット時アレスロ全消灯、電源ON/OFFで前日状態を引継ぐという当時整理
    - reliability: PERIOD_ANALYSIS_SINGLE

## missingFields

- resetDetection gakku/reel-start contract: UNVERIFIED_AFTER_RESEARCH（主要判別情報はアレスロ/フェイク前兆で取得済み）

## conflicts

- `ROUNDING_DIFFERENCE_PAYOUT_RATE_NOT_AVERAGED`
  - HAZUSE: 97.2 / 98.6 / 101.3 / 104.8 / 108.8 / 116.5%
  - 必勝本: 97.2 / 98.6 / 101.3 / 104.8 / 108.8 / 116.6%
  - 旧解析精密値: 97.20 / 98.58 / 101.32 / 104.84 / 108.78 / 116.55%
  - 小数桁の丸め定義差と判断できる範囲だが平均せず原表記を保持。

## confidenceSummary

- identity: ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- resetBehavior: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DIRECT_POWER_CYCLE_TABLE
- publicMorningNumbers: ANALYSIS_HIGH_MULTI_SOURCE
