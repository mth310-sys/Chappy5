# 沖ドキ！トロピカル-30

machineName: 沖ドキ！トロピカル-30
manufacturer: アクロス
releaseDate: 2016-03-14
recordNumber: 962
generation: 5号機
systemType: AT / 擬似ボーナス / 完全告知 / 30Φ
formalModelName: 沖ドキ！トロピカルHH-30
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 25Φ版「沖ドキ！トロピカルHH」（ユニバーサルブロス）とは型式・メーカーが分かれる30Φ版。中古実機流通資料でも30Φ型式を **沖ドキ！トロピカルHH-30**、メーカーをアクロスと確認。
- ユニバーサル公式製品ページは25Φ/30Φ双方を同一製品ページに掲載する一方、当時グリーンべるとは2016-02-26記事で「好評稼働中の沖ドキ！トロピカルの30φバージョン」として後発発表し、納品日を3月6日予定と報道。
- 2016年導入カレンダーおよび後年シリーズ整理では30Φ版を2016-03-14導入として扱う資料があるため、本DBの全国導入canonicalは **2016-03-14** とする。ただし一撃は30Φ個別ページでも2016-02-01を掲げるため、日付競合をconflictsに保存する。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 99.7% |
| 3 | 101.7% |
| 4 | 103.9% |
| 5 | 106.3% |
| 6 | 108.4% |

- 30Φ個別資料の一撃とpacnkで全設定一致。
- 25Φ/初期解析系には設定1〜3を **96.7 / 99.0 / 101.4%** とする資料があり、30Φ個別2ソースと一致しないため平均せずCONFLICTとして保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_30PHI

## initialHitBySetting
| 設定 | ボーナス初当り |
|---:|---:|
| 1 | 1/237.9 |
| 2 | 1/214.0 |
| 3 | 1/218.8 |
| 4 | 1/194.4 |
| 5 | 1/199.1 |
| 6 | 1/173.6 |

- 一撃30Φ個別ページとpacnkで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約40G/50枚**（概算）。
- 当時/回顧資料は約39G〜約40Gで概ね一致。別の当時解析に約46.2G表記があるため、精密値とはせずconflictsへ保持。
reliability: ANALYSIS_MULTI_SOURCE_APPROXIMATE

## netIncrease
- AT擬似ボーナス純増: **約3.0枚/G**。
- P-WORLD、一撃、ユニバーサル系資料で一致。
reliability: HIGH_MULTI_SOURCE

## basicPayout
- びっぐぼーなす: **70G / 約210枚**。
- れぎゅらーぼーなす: **20G / 約60枚**。
- P-WORLD、一撃で一致。
reliability: HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常A / 通常B / 天国準備 / 引き戻し / 保証 / 天国 / ドキドキ / 超ドキドキの8モード。
- 通常A・通常B・天国準備の天井: **1199G**。
- 引き戻し: **100〜199G**でボーナス当選。
- 保証 / 天国 / ドキドキ / 超ドキドキ: **31G**天井相当（32G以内の連チャン帯）。
- BIGは70G、REGは20GのAT擬似ボーナス。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井ゲーム数RESET（再抽選）**。
- モードも **再抽選**。
- 設定変更時モード振り分けは通常A 50.00%、通常B 15.23%、天国準備 1.17%、引き戻し 33.59%。

### carryOverBehavior
- 据え置き時は設定変更処理を行わないため、公開解析上は前日ゲーム数/モードを継続して扱う。
- 純電源OFF→ONの明示表でも天井ゲーム数・モードとも **引き継ぐ** とされる。

### powerCycleBehavior
- 純電源OFF→ON: **天井ゲーム数引継ぎ / モード引継ぎ**。
- 電源OFF→ONだけを設定変更と同義扱いしない。

### gameCounterReset
- 設定変更: **RESET / RESELECT**。
- 据え置き・純電断: **CARRYOVER**。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は確認されない。
- ただしリセット時に **引き戻しモード33.59%** が選択され、その場合は100〜199Gでボーナスとなるため、結果として朝一早当たり恩恵がある。
- 通常A/B/天国準備選択時の最大天井は1199G。

### modeAfterReset
| モード | 設定変更時振り分け |
|---|---:|
| 通常A | 50.00% |
| 通常B | 15.23% |
| 天国準備 | 1.17% |
| 引き戻し | 33.59% |

- 約3分の1で引き戻しへ入ることが朝一の主要リセット恩恵。

### stateAfterReset
- AT擬似ボーナス非当選の通常状態からの朝一マクロ挙動として上記モードを再抽選。
- ボーナス成立中など特殊な非通常状態の設定変更時契約は、実機完全再現用途の微細内部処理として本DBでは収集対象外。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時 **引き戻し33.59%**。引き戻しモードでは100〜199Gで当選するため、朝一200G以内の早当たり期待が通常時より明確に上がる。
- 天国準備1.17%も設定変更時抽選対象。

### resetPenalties
- 設定変更により前日の天井ゲーム数・滞在モードは消去されるため、前日ハマリや上位モードを期待した宵越し狙いは成立しない。

### resetDetection
- 「沖ドキ！トロピカル-30 / 沖ドキ！トロピカルHH-30 / アクロス」×「ガックン / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON」を組み替えて再探索したが、本機固有の確定的なガックン・初期出目・ランプによる即時変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- REG後パネルフラッシュや点灯パターンは滞在モード示唆であり、朝一の設定変更確定サインとは分離。

### numericResetData
- 通常A: **50.00%**
- 通常B: **15.23%**
- 天国準備: **1.17%**
- 引き戻し: **33.59%**
- 引き戻し時当選レンジ: **100〜199G**
- 通常A/B/天国準備最大天井: **1199G**
- 天国系/保証系: **31G天井相当**

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 30Φ版の全国初稼働日について3/14 vs 2/1表記競合あり（後発発表/納品資料から30Φ独立版は3月扱いをcanonical）
- 本機固有の確定的設定変更即時判別

## conflicts
- `CONFLICT_RELEASE_DATE_30PHI_0314_VS_MERGED_0201`: 30Φ独立版は当時業界記事で2/26発表・3/6納品予定、複数年表で3月/3月14日。一方、一撃30Φ個別ページは2/1と記載。25Φ初販との日付混同可能性を考慮し、30Φのcanonicalは2016-03-14、2/1は競合値として保持。
- `CONFLICT_PAYOUT_EARLY_25PHI_VS_30PHI`: 30Φ個別2ソースは97.0/99.7/101.7/103.9/106.3/108.4%。25Φ/初期解析系に96.7/99.0/101.4/103.9/106.3/108.4%あり。平均せずvariant/source conflictとして保持。
- `CONFLICT_BASE_APPROX`: 約39G〜40Gが複数資料の中心。一部当時解析に46.2G表記あり。精密値へ平均しない。

## sources
取得日: 2026-09-08

1. ユニバーサルエンターテインメント公式 — 沖ドキ！トロピカル
   - https://www.universal-777.com/product/slot/okidoki_tropical/
   - AT/5号機、基本ゲーム性、25Φ/30Φ双方の存在。
   - reliability: OFFICIAL
2. グリーンべると — 4号機のリール配列を完全再現、3兄弟の活躍再び
   - https://web-greenbelt.jp/00008457/
   - 2016-02-26当時記事。好評稼働中25Φ版の30Φバージョンを同時発表、3/6納品予定。
   - reliability: INDUSTRY_PERIOD_HIGH
3. P-WORLD — 沖ドキ！トロピカル-30
   - https://opt.p-world.co.jp/machine/database/7996
   - メーカーアクロス、30Φ版、AT純増3.0枚/G、BIG70G/REG20G、最大1199G天井。
   - reliability: INDUSTRY_DATABASE_HIGH
4. 一撃 — 沖ドキ！トロピカル-30
   - https://1geki.jp/slot/s_okidoki_t30
   - 設定別初当り、機械割。導入日2/1表記は日付競合として保持。
   - reliability: ANALYSIS_HIGH
5. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_okidoki_t30/3/
   - 天井1199G、引き戻し100〜199G、天国系31G、設定変更時天井/モード再抽選、純電断時双方引継ぎ、リセットモード振り分け。
   - reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE
6. 一撃 — モード移行抽選
   - https://1geki.jp/slot/s_okidoki_t30/42/
   - 8モード、設定変更時振り分け。
   - reliability: ANALYSIS_HIGH
7. pacnk — 沖ドキ!トロピカル-30設定判別
   - https://pacnk.com/slot/tools/sh_okidokitoropikaru2016b.html
   - 設定別初当り/機械割を30Φ個別で照合。
   - reliability: ANALYSIS_SECONDARY
8. 中一商事 — 中古実機
   - https://store.shopping.yahoo.co.jp/nakaiticom/2020408.html
   - メーカーアクロス、型式名「沖ドキ！トロピカルHH-30」。
   - reliability: SECONDARY_IDENTITY
9. 中一商事 — 25Φ版中古実機
   - https://store.shopping.yahoo.co.jp/nakaiticom/634.html
   - 25Φ版のメーカーはユニバーサルブロス、型式「沖ドキ！トロピカルHH」。30Φとの独立性確認用。
   - reliability: SECONDARY_IDENTITY
10. スロリスクタイム 5号機一覧
   - https://pachisuro100.com/agyo/
   - 25Φをユニバーサルブロス/2016年1月、30Φをアクロス/2016年3月として分離。
   - reliability: HISTORICAL_DATABASE_SECONDARY
11. PTRO 沖ドキ歴代整理
   - https://ptro.live/p-okidoki.html
   - 30Φ版の導入開始日2016-03-14、機械割97.0〜108.4%、約40G/k、純増3.0枚/G。
   - reliability: RETROSPECTIVE_SECONDARY
12. ちょんぼりすた — 沖ドキ トロピカルver
   - https://chonborista.com/slot/universal-slot/16618/
   - 当時記事。約39G/50枚、天井1199G、純増約3.0枚/G。初期機械割表記差の確認。
   - reliability: ANALYSIS_PERIOD

## confidence
- identity/formalModelName: HIGH_MULTI_SOURCE
- releaseDate: CONFLICT_RESOLVED_CANONICAL_2016_03_14_WITH_0201_RETAINED
- performanceCore: HIGH_MULTI_SOURCE_WITH_EARLY_VARIANT_CONFLICT
- resetBehavior: HIGH_DIRECT_RESET_TABLE
- resetDetection: NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH
