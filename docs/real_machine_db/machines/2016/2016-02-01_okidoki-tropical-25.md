# 沖ドキ！トロピカル

machineName: 沖ドキ！トロピカル
manufacturer: ユニバーサルブロス
releaseDate: 2016-02-01
releaseDatePrecision: exact_hall_start_multi_source_with_delivery_boundary
recordNumber: 953
generation: 5号機
systemType: AT / 完全告知 / 擬似ボーナス / 25φ
formalModelName: 沖ドキ！トロピカルHH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_CORE_CONFLICTS

## identity
- ユニバーサル系公式製品情報で5号機AT「沖ドキ！トロピカル」、メーカーはユニバーサルブロス、2016年2月発売の製品系列を確認。
- K-Naviはホール導入開始を **2016-02-01** と掲載。当時記事では2016-01-31から納品予定のため、納品予定日とホール導入日を分離し、本DBのcanonical導入日は2016-02-01とする。
- 中古実機資料で25φ型式 **沖ドキ！トロピカルHH** を確認。
- 30φは別型式 **沖ドキ！トロピカルHH-30** かつメーカー表記もアクロスとなる資料があり、P-WORLDも「30φバージョンが登場」と明記するため、本レコードへ統合しない。30φの導入時期は別途時系列境界で監査する。
- 検定番号は「沖ドキ！トロピカルHH / ユニバーサルブロス / 検定 / 5S / 認定」等へ検索語を変更して再探索したが、安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。

## payoutRateBySetting
### canonical multi-source family
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.7% |
| 2 | 99.0% |
| 3 | 101.4% |
| 4 | 103.9% |
| 5 | 106.3% |
| 6 | 108.4% |

- ちょんぼりすた、みんスロ系で一致する系列を25φ/genericのcanonicalとする。
- 一方、当時解析には **97.0 / 99.7 / 101.7 / 103.9 / 106.3 / 108.4%** の系列も存在する。設定1〜3が一致しないため平均せず `PAYOUT_VARIANT_OR_SOURCE_CONFLICT` として保持する。
- reliability: ANALYSIS_MULTI_SOURCE_WITH_CONFLICT

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/1428.8 | 1/285.4 | 1/237.9 |
| 2 | 1/1005.2 | 1/271.9 | 1/214.0 |
| 3 | 1/1134.2 | 1/271.1 | 1/218.8 |
| 4 | 1/823.8 | 1/254.4 | 1/194.4 |
| 5 | 1/934.5 | 1/253.0 | 1/199.1 |
| 6 | 1/692.5 | 1/231.6 | 1/173.6 |

- 複数解析で同じ合算系列を確認。BIG/REGの精密値はみんスロ整理値を採用。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical family: **約39〜40G/50枚**。
  - みんスロ: 39G。
  - ちょんぼりすた: 約39G。
  - 当時解析資料: 約40G。
- 別の2016年当時解析には **約46.2G/50枚** の記載があるため、平均せず `BASE_GAMES_CONFLICT_39_40_VS_46_2` として保持。
- reliability: CONFLICT_MULTI_SOURCE_VS_PERIOD_SINGLE

## netIncrease
- AT純増: **約3.0枚/G**。
- 業界記事、P-WORLD系、複数解析で一致。
- reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG: **AT 70G / 約210枚**。
- REG: **AT 20G / 約60枚**。
- reliability: INDUSTRY_MULTI_SOURCE

## modeSpecificMinimumData
- 通常A / 通常B / 天国準備: ボーナス間最大 **1199G** 到達、次ゲーム告知。
- 引き戻し: **100〜199G**。
- 保証 / 天国 / ドキドキ / 超ドキドキ: **31G**。
- 一部当時資料では天井を「1200G」「200G」と丸めて表記するため、`CEILING_PRESENTATION_DIFFERENCE_1199_PLUS_NEXT_GAME_VS_1200` および引き戻し100〜199G/200G表記差として定義分離する。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_DIRECT_NUMERIC_RESET_CONTRACT
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井ゲーム数をリセットして再抽選**。
- 内部モードも **再抽選**。
- 公開リセット振り分けは全設定共通として、通常A 50.00% / 通常B 15.23% / 天国準備 1.17% / 引き戻し 33.59%。

### carryOverBehavior
- 設定据え置き側は天井ゲーム数・内部モードを引き継ぐ契約として扱う。電源OFF→ONのみの公開解析でも双方の引継ぎが明示されている。

### powerCycleBehavior
- **電源OFF→ONのみ**では天井ゲーム数を引き継ぐ。
- 内部モードも引き継ぐ。
- 設定変更と純電断を同義にしない。

### gameCounterReset
- setting change: **RESET / RESELECT**。
- carry-over / pure power cycle: **CARRYOVER**。

### ceilingAfterReset
- 全リセット共通で固定短縮天井になる方式ではない。
- 設定変更時のモード再抽選で **33.59%** が引き戻しモードとなり、その場合は **100〜199G（200G表記あり）** が上限となるため、`PROBABILISTIC_RESET_SHORTENING_VIA_MODE_RESELECT` とする。
- 通常A/B/天国準備へ再抽選された場合の最大は1199G。

### modeAfterReset
- 設定変更時に再抽選。
- 全設定共通公開値:
  - 通常A: **50.00%**
  - 通常B: **15.23%**
  - 天国準備: **1.17%**
  - 引き戻し: **33.59%**
- 電源OFF→ONのみではモード引継ぎ。

### stateAfterReset
- 朝一客AI用にモードとは別建てで必要な低確/高確等の設定変更専用状態振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時に **33.59%で引き戻しモード**へ入り、100〜199Gでボーナス到達となる公開契約が主要朝一恩恵。
- ただし「設定変更台の200G以内総当選率=33.59%」ではない。他モードからの自力当選もあるため、33.59%は引き戻しモード選択率としてのみ保持する。

### resetPenalties
- 設定変更時だけに適用される主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 「沖ドキ！トロピカル / HH / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール / 初期出目」等へ検索語を変更して再探索。
- 本機固有のガックン・初期出目・ランプ等による設定変更確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- REG中パネル/ランプ等のモード示唆は設定変更判別とは分離する。
- 引き戻し帯の当選だけでも設定変更確定にはしない。

### numericResetData
- reset mode allocation: **通常A 50.00% / 通常B 15.23% / 天国準備 1.17% / 引き戻し 33.59%**。
- reset shortened ceiling via comeback mode: **100〜199G（資料によって200G天井表記）**。
- reset-only benefit occurrence: **引き戻しモード選択率33.59%**。
- exact overall hit probability within 200G after reset: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- `PAYOUT_VARIANT_OR_SOURCE_CONFLICT`:
  - canonical multi-source: **96.7 / 99.0 / 101.4 / 103.9 / 106.3 / 108.4%**。
  - alternate period-analysis family: **97.0 / 99.7 / 101.7 / 103.9 / 106.3 / 108.4%**。
  - 設定1〜3を平均しない。30φ別型式資料が混在する可能性もあるため定義/variant QA対象として保持。
- `BASE_GAMES_CONFLICT_39_40_VS_46_2`:
  - 複数資料: **約39〜40G/50枚**。
  - 2016年当時単一解析: **約46.2G/50枚**。
- `CEILING_PRESENTATION_DIFFERENCE_1199_PLUS_NEXT_GAME_VS_1200`:
  - 詳細解析: 1199G到達→次ゲーム告知。
  - 一部資料: 1200G天井と丸め表記。
- `VARIANT_SPLIT_REQUIRED`:
  - 25φ: **沖ドキ！トロピカルHH / ユニバーサルブロス**。
  - 30φ: **沖ドキ！トロピカルHH-30 / アクロス**の資料あり。
  - 30φ導入時期にも2016-02-01と2016年3月の資料差があるため、本レコードに統合せず後続境界で再監査する。

## missingFields
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- manufacturer-official exact hall start date: UNVERIFIED; exact 2016-02-01 is multi-source analysis/database, official month is 2016-02
- manufacturer-guaranteed setting-change detection: NONE_CONFIRMED_AFTER_RESEARCH
- exact reset total hit probability within 200G: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. ユニバーサルエンターテインメント公式 — 沖ドキ！トロピカル
   - https://www.universal-777.com/product/slot/okidoki_tropical/
   - 製品系列、5号機AT、2016年2月、25φ/30φ系列。
   - reliability: OFFICIAL
2. グリーンべると — 沖ドキ！トロピカル業界発表
   - https://web-greenbelt.jp/00008353/
   - 納品予定、純増約3.0枚/G、BIG70G約210枚、REG20G約60枚。
   - reliability: INDUSTRY
3. K-Navi — 沖ドキ！トロピカル
   - https://p-kn.com/slot/2427/
   - メーカー、AT、ホール導入開始2016-02-01、BIG70G/REG20G。
   - reliability: ANALYSIS_DATABASE
4. 一撃 — 沖ドキ！トロピカル 天井/設定変更
   - https://1geki.jp/slot/okidoki_tropical/3/
   - 天井、設定変更時の天井/モード再抽選、モード振り分け、電源OFF/ON引継ぎ。
   - reliability: ANALYSIS_HIGH
5. ちょんぼりすた — 沖ドキ トロピカルver
   - https://chonborista.com/slot/universal-slot/16618/
   - 約39G/50枚、機械割96.7〜108.4%、純増、獲得枚数、リセット解析補強。
   - reliability: ANALYSIS_HIGH
6. みんスロ — 沖ドキ！トロピカル
   - https://minslo.com/%E6%B2%96%E3%83%89%E3%82%AD%E3%83%88%E3%83%AD%E3%83%94%E3%82%AB%E3%83%AB-2/
   - 設定別BIG/REG/合算/機械割、39G/50枚、純増、獲得枚数、1199G天井。
   - reliability: SECONDARY_DATABASE_MULTI_MATCH
7. 時給2000円生活 — 沖ドキ！トロピカル
   - https://jikyu2000.com/matome/okidoki_t/
   - 2016-02-01、別機械割系列、46.2G/50枚。競合保持用。
   - reliability: ANALYSIS_PERIOD_SINGLE
8. 中一商事 — ユニバーサルブロス 沖ドキ！トロピカル
   - https://store.shopping.yahoo.co.jp/nakaiticom/634.html
   - 25φ型式名 **沖ドキ！トロピカルHH**。
   - reliability: SECONDARY_MACHINE_DATABASE
9. P-WORLD — 沖ドキ！トロピカル-30
   - https://www.p-world.co.jp/machine/database/7996
   - 30φが別バージョン、メーカー表記アクロス、AT純増/ボーナス性能/天井。25φと混同しないためのvariant照合。
   - reliability: INDUSTRY_DATABASE
10. 中一商事 — アクロス 沖ドキ！トロピカル-30
   - https://store.shopping.yahoo.co.jp/nakaiticom/2020408.html
   - 30φ型式 **沖ドキ！トロピカルHH-30**。
   - reliability: SECONDARY_MACHINE_DATABASE

## confidence
- identity/25phiFormalModel: OFFICIAL_FAMILY_PLUS_SECONDARY_MACHINE_DATABASE
- exactReleaseDate: ANALYSIS_DATABASE_HIGH_WITH_INDUSTRY_DELIVERY_BOUNDARY
- inspectionNumber: UNVERIFIED_AFTER_REQUIRED_RESEARCH
- payoutRateBySetting: CONFLICT_MULTI_SOURCE
- initialHitBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: CONFLICT_MULTI_SOURCE_VS_PERIOD_SINGLE
- netIncrease/basicPayout: INDUSTRY_PLUS_ANALYSIS_HIGH
- ceiling: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PRESENTATION_DIFFERENCE
- settingChangeBehavior: ANALYSIS_HIGH_DIRECT_NUMERIC
- powerCycleBehavior: ANALYSIS_HIGH_DIRECT
- resetDetection: RESEARCHED_NO_CONFIRMED_CHANGE_DETECTION
