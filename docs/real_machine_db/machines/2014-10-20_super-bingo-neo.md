# スーパービンゴNEO

machineName: スーパービンゴNEO
manufacturer: ベルコ
releaseDate: 2014-10-20
releaseDatePrecision: nationwide_hall_start
generation: 5号機
systemType: AT / 周期・ゾーン抽選 / 継続率管理 + ゲーム数上乗せ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- メーカー: **ベルコ**。
- ホール導入開始: **2014-10-20**。K-Navi、ALL7、アタリ7、当時解析資料で一致。
- 型式名: **スーパービンゴネオS2-30**（HAZUSE現存ページ）。
- 数字形式の検定番号: **4S0463**（HAZUSE URL/機種識別子）。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_HALL_DATE / ANALYSIS_DATABASE_FOR_MODEL_IDENTITY

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.8% |
| 3 | 100.2% |
| 4 | 104.3% |
| 5 | 108.6% |
| 6 | 113.1% |

- K-Navi、アタリ7、パチスロ解析ガイドで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT「ビンゴチャンス」初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/337.6 |
| 2 | 1/321.4 |
| 3 | 1/302.1 |
| 4 | 1/277.6 |
| 5 | 1/252.9 |
| 6 | 1/230.0 |

- K-Navi、アタリ7、HAZUSE、パチスロ解析ガイドで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約29.8G/50枚**。
- 後年機種整理「みんスロ」で確認。現存する当時高信頼資料では同値を別系統照合できなかったため、物差し採用値だが信頼度は一段下げる。
- confidence: ANALYSIS_SINGLE_SECONDARY

## netIncrease

- AT純増: **約2.8枚/G**。
- P-WORLD、K-Navi、アタリ7、パチスロ解析ガイド、当時回顧記事で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「ビンゴチャンス」: **1セット33G以上+α**。
- 継続率管理 + ゲーム数上乗せ型。
- 公開解析では継続率 **50% / 66% / 80% / 95%** 系列。
- 「Hooah!」発生時は111G以上の大幅初期G数選択が特徴。
- 999G天井到達時はHooah!発生率が通常より上昇する解析あり。
- confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は周期・ゾロ目G数・CZ等からAT当選を目指す。
- 通常A: 最大 **999G+前兆**。
- 通常B: 最大 **444G+前兆**。
- 999G天井到達でBC当選。444Gは通常Bの天井で、999G到達時のHooah!優遇とは同一扱いしない。
- 設定変更時の通常A/B振り分けは全設定共通 **65% / 35%**。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井までの内部ゲーム数をリセット**。
- **内部モード・状態を再抽選**。
- 設定変更時にも周期集中モード移行抽選が行われる解析あり。
- 設定変更後は液晶が **カジノステージ**から開始する資料あり。ただし電源OFF→ONでも同様のため、ステージ単独では変更判別不可。

### carryOverBehavior

- 据え置き時は前日からの内部ゲーム数を引き継ぐ挙動を、朝一フェイク前兆位置の解析から確認。
- 据え置き時のフェイク前兆は前日+当日の宵越しゲーム数基準で発生する。
- モード・状態そのものの据え置き契約は、現存資料で直接表として固定できなかったため **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更なしの純電源OFF→ONでも朝一液晶はカジノステージ開始という当時解析あり。
- 内部天井G・モード・状態の電断保持について、2014年機固有の直接対照表は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 2024年スマスロ版の電断仕様は本機へ流用しない。

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き: **CARRYOVER_SUPPORTED_BY_PERIOD_ANALYSIS**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の固定短縮天井は確認されない。
- 設定変更時はモード再抽選により **通常B(444G+前兆)が35%**で選択されるため、朝一に444G天井となるケースがある。
- 通常Aは999G+前兆。

### modeAfterReset

- 設定変更時モード振り分け（全設定共通）:
  - 通常A: **65%**
  - 通常B: **35%**
- 周期集中モードへの移行抽選あり。
- confidence: ANALYSIS_HIGH_FOR_A_B_TABLE / ANALYSIS_SINGLE_FOR_PERIODIC_CONCENTRATION_DETAIL

### stateAfterReset

- 設定変更時: **再抽選**という当時解析あり。
- 詳細状態振り分けは物差し用途外のため収集しない。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 朝一の主要比較可能恩恵は、通常B選択 **35% → 最大444G+前兆**。
- 周期集中モード移行抽選も存在するが、実践集計では朝一50G以内等に顕著な強恩恵は確認されていない。

### resetPenalties

- 設定変更固有の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- **3BET/コイン投入ランプ**: 設定変更時は全消灯する解析あり。据え置きなら点灯状態が残るケースがある。
- ただし、コイン投入→精算等でホール側が消灯対策可能なため確定判別ではない。
- **フェイク前兆位置**: 据え置きは宵越し内部G基準。朝一の当日ゾロ目Gで前兆が出れば設定変更濃厚となるケースがある。
- 朝一液晶ステージは電源OFF→ONでも同様のため単独判別不可。

### numericResetData

- 設定変更時モード振り分け:
  - 通常A(999G+前兆): **65%**
  - 通常B(444G+前兆): **35%**
- 全設定共通。
- 新台初日・初回AT **254件**の当時実践値では、朝一に極端な早当たり優遇は見られなかったとする観測あり。
- この254件集計はメーカー公表値ではないため `PERIOD_OBSERVATIONAL`。

### publicMorningNumbers

- 公開解析値として **通常A 65% / 通常B 35%** を採用。
- 254件の新台初日実践値は補助観測として保持し、解析値と混同しない。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `スーパービンゴNEO / スーパービンゴネオ / スーパービンゴネオS2-30 / ベルコ / BELLCO`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 444 / 999 / モード / 通常A / 通常B / 周期集中 / 3BET / コイン投入ランプ / ガックン / 前兆 / ベース / 50枚`。
- 資料系統: K-Navi、P-WORLD、HAZUSE、アタリ7、当時解析サイト、後年回顧DB、ALL7。
- 2024年の **Lスーパービンゴネオ**は別機種。天井777G短縮・有利区間・ビンゴポイント等のスマスロ仕様を2014年機へ転記しない。

## sources

取得日: 2026-09-07

1. K-Navi — スーパービンゴNEO
   - https://p-kn.com/slot/2106/
   - 2014-10-20導入、AT初当たり、機械割、AT概要
   - reliability: ANALYSIS_DATABASE
2. P-WORLD — スーパービンゴネオ「2014年」
   - https://www.p-world.co.jp/machine/database/7481
   - 5号機AT、純増約2.8枚/G、33G以上+α
   - reliability: INDUSTRY_DATABASE
3. アタリ7
   - https://www.atari7.com/slot/date1414054324.php
   - 2014-10-20、設定別AT初当たり・機械割、純増2.8枚/G、33G+α
   - reliability: ANALYSIS_DATABASE
4. パチスロ解析ガイド
   - https://pachislot-guide.net/2014/super-bingo-neo/
   - AT初当たり、機械割、999G天井、純増、33G
   - reliability: ANALYSIS_SINGLE
5. HAZUSE — スーパービンゴネオS2-30
   - https://hazuse.com/machine/pachislot/4S0463/genre/208/
   - 型式識別、AT初当たり、設定差解析
   - reliability: ANALYSIS_HIGH
6. 期待値見える化 — 朝一リセット後の挙動・恩恵・実践値
   - https://slotjin.com/slot/superbingoneo-reset/
   - 設定変更時G数リセット、モード/状態再抽選、A65%/B35%、254件実践値、ランプ/前兆判別
   - reliability: PERIOD_ANALYSIS_AND_OBSERVATIONAL
7. ちょんぼりすた — 2014年機解析
   - https://chonborista.com/slot/belko-slot/46232/
   - 999G/444G天井、A/B振り分け、3BETランプ判別
   - reliability: ANALYSIS_SECONDARY
8. みんスロ
   - https://minslo.com/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%93%E3%83%B3%E3%82%B4%E3%83%8D%E3%82%AA/
   - 50枚約29.8G、基本スペック
   - reliability: SECONDARY_RETROSPECTIVE
9. ALL7 2014年10月一覧
   - https://www.all7.jp/plans/index/2014/10
   - 2014-10-20導入予定
   - reliability: INDUSTRY_DATABASE

## missingFields

- pure power-cycle internal counter/mode/state contract: UNVERIFIED_AFTER_RESEARCH
- exact carry-over mode/state contract: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50 multi-source corroboration: UNVERIFIED_SECOND_SOURCE

## conflicts

- NONE_MATERIAL_FOR_CORE_VALUES.
- 2024年スマスロ版の「777Gリセット天井」等は別機種仕様であり、競合ではなく世代違いとして除外。
