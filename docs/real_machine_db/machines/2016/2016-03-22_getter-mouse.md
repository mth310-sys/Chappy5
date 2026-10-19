# ゲッターマウス

machineName: ゲッターマウス
manufacturer: アクロス
releaseDate: 2016-03-22
recordNumber: 965
generation: 5号機
systemType: ノーマル / Aタイプ / 技術介入
formalModelName: ゲッターマウスDG
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ユニバーサルエンターテインメント系の当時業界記事で、アクロス社製「A PROJECT」第5弾として確認。
- P-WORLD、一撃、K-Navi、当時解析でメーカー=アクロス、5号機ノーマルタイプを照合。
- 導入日は一撃/K-Navi/複数当時解析で **2016-03-22** 一致。グリーンべるとは2016-02-26時点で「3月下旬納品開始予定」としており整合する。
- 型式名はDMM機種DBおよび中古実機DBで **ゲッターマウスDG** を確認。
- 検定番号は「ゲッターマウス / ゲッターマウスDG / アクロス / 検定 / 5S」等へ検索語を変えて再探索したが、直接固定可能な資料を今回確認できず **UNVERIFIED_AFTER_RESEARCH**。

## payoutRateBySetting
### 市場掲載 / 通常攻略値 canonical
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.7% |
| 2 | 99.7% |
| 3 | 101.3% |
| 4 | 103.4% |
| 5 | 106.7% |
| 6 | 110.8% |

- P-WORLD、一撃、複数解析で一致する系列を市場掲載canonicalとする。

### 完全攻略時
| 設定 | 完全攻略時機械割 |
|---:|---:|
| 1 | 100.2% |
| 2 | 101.2% |
| 3 | 102.6% |
| 4 | 105.0% |
| 5 | 108.4% |
| 6 | 112.6% |

- 技術介入機のため通常掲載値と完全攻略値を混ぜず別系列で保持。
- ちょんぼりすたでは通常値を 97.8 / 98.7 / 100.3 / 103.4 / 106.7 / 109.7%、攻略時を 100.2 / 101.2 / 102.6 / 105.0 / 108.4 / 112.6% と掲載しており、設定1/3/6の通常値がP-WORLD/一撃系列と競合するため平均せずCONFLICT保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PAYOUT_DEFINITION_CONFLICT

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/284.9 | 1/297.9 | 1/145.6 |
| 2 | 1/280.1 | 1/290.0 | 1/142.5 |
| 3 | 1/274.2 | 1/278.9 | 1/138.3 |
| 4 | 1/266.4 | 1/270.8 | 1/134.3 |
| 5 | 1/252.1 | 1/254.0 | 1/126.5 |
| 6 | 1/234.9 | 1/234.9 | 1/117.5 |

- 一撃/K-Navi/P-WORLD系掲載値で整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約34.1G/50枚**。
- ちょんぼりすた掲載値。別当時解析に「約34G」表記があり丸め整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_APPROX

## netIncrease
- **NOT_APPLICABLE_NORMAL_TYPE**。
- AT/ART非搭載の純ノーマルタイプ。

## basicPayout
- BIG BONUS: **最大310枚**。
- REG BONUS: **最大115枚**。
- 公式系業界記事/P-WORLD/一撃で一致。
- BIGは343枚超払い出し終了、REGは118枚超払い出し終了。技術介入成功により最大枚数を取得。
reliability: INDUSTRY_PLUS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData
- 天井: **非搭載**。
- AT/ART、通常時モード、CZ、ゲーム数解除は非搭載のノーマルタイプとして扱う。
- ホール経営用の朝一価値は天井/モード狙いではなく、設定そのものと技術介入性能が中心。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_INTERNAL_RESET_CONTRACT_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 本機は天井・AT/ART・ゲーム数解除・通常時モードを持たないノーマルタイプ。
- 当時一撃の「天井/設定変更」ページは、設定変更時詳細を **現在調査中** としたまま残っている。
- 設定変更固有の内部状態再抽選、朝一専用状態、専用恩恵を直接示す本機固有資料は再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 天井・モードがないため、設定変更による宵越し天井消去/短縮というホール経営上の主要リセット効果は **NOT_APPLICABLE**。

### carryOverBehavior
- 天井ゲーム数・ATモード等の持越し対象は **NOT_APPLICABLE_NO_CEILING_NO_AT_MODE**。
- ボーナス成立状態など通常遊技中の瞬間的内部状態を据え置き跨ぎでどう扱うかは完全再現用の低価値項目であり、公開直接資料も固定できないため推測しない。
- 朝一客行動へ影響する持越し恩恵/不利は **NONE_CONFIRMED_AFTER_RESEARCH**。

### powerCycleBehavior
- 一撃の当時ページでは電源OFF/ON詳細も **現在調査中**。
- 純電源OFF→ONで朝一客行動へ影響する天井・モード・専用状態は本機では確認されない。
- 本機固有の初期出目/ランプ/表示状態の保持・初期化契約は、検索語を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- 内部天井ゲーム数: **NOT_APPLICABLE_NO_CEILING**。
- データカウンター表示の0クリアはホール設備側であり、本機内部resetBehaviorとは分離する。

### ceilingAfterReset
- 通常天井: **NONE / NOT_APPLICABLE**。
- 設定変更後短縮天井: **NONE / NOT_APPLICABLE**。

### modeAfterReset
- 通常時のゲーム数モード/天国モード等: **NOT_APPLICABLE_NORMAL_TYPE**。
- 朝一専用モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 朝一狙いへ影響する低確/高確等の持続内部状態: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の本機固有内部状態再抽選契約は、当時解析・古DB・回顧資料を横断しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- リセット短縮天井、天国優遇、朝一CZ、保証ボーナス等: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更そのものによる設定値変更以外の公開朝一恩恵は確認できない。

### resetPenalties
- 前日ハマリ消去等のリセット不利: **NOT_APPLICABLE_NO_CEILING**。
- 設定変更固有の公開ペナルティ: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 「ゲッターマウス / ゲッターマウスDG / アクロス」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リールガックン / 初期出目 / ランプ」を組み替えて再探索。
- 本機固有のガックン、初期出目、ランプ等による確定的な変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時/ボーナス中の設定示唆（BIG終了時ボイス/GET表示等）は存在するが、設定変更/据え置き判別ではないためresetDetectionへ混入させない。

### numericResetData
- 通常天井: **NONE**。
- 設定変更後短縮天井: **NONE**。
- 設定変更時モード振り分け: **NOT_APPLICABLE / NONE_CONFIRMED**。
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の本機固有内部状態契約: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の初期出目/ランプ等の本機固有表示契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有の確定設定変更判別: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- `CONFLICT_STANDARD_PAYOUT_SERIES`: P-WORLD/一撃等は通常掲載機械割 **98.7 / 99.7 / 101.3 / 103.4 / 106.7 / 110.8%**。ちょんぼりすたは非攻略時 **97.8 / 98.7 / 100.3 / 103.4 / 106.7 / 109.7%**。平均せず双方保持。
- `DEFINITION_SEPARATION_FULL攻略`: 完全攻略時 **100.2 / 101.2 / 102.6 / 105.0 / 108.4 / 112.6%** は通常掲載値と別定義のため独立系列として保持。
- 発売前ブログにも完全攻略相当100.2〜112.6%系列が流通していたが、新台前の暫定情報であるためcanonical根拠には使わず照合補助のみ。

## sources
取得日: 2026-09-08

1. グリーンべると — 4号機のリール配列を完全再現、3兄弟の活躍再び
   - https://web-greenbelt.jp/00008457/
   - 2016-02-26当時業界記事。アクロス社製A PROJECT第5弾、BIG310枚/REG115枚、設定6合算1/118、3月下旬納品予定。
   - reliability: INDUSTRY_PERIOD_HIGH
2. P-WORLD — ゲッターマウス
   - https://www.p-world.co.jp/machine/database/7994
   - アクロス、5号機ノーマル/技術介入、設定別合算、通常掲載機械割98.7〜110.8%、BIG最大310枚/REG最大115枚。
   - reliability: INDUSTRY_DATABASE_HIGH
3. 一撃 — ゲッターマウス
   - https://1geki.jp/slot/gettermouse/
   - 2016-03-22導入、設定別機械割98.7〜110.8%、BIG最大310枚/REG最大115枚。
   - reliability: PERIOD_ANALYSIS_HIGH
4. 一撃 — ボーナス確率
   - https://1geki.jp/slot/gettermouse/1/
   - 2016-03-19更新。設定別BIG/REG/合算。
   - reliability: PERIOD_ANALYSIS_HIGH
5. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/gettermouse/3/
   - 2016-03-15更新。天井非搭載。設定変更時詳細/電源OFF ONはいずれも当時「現在調査中」。
   - reliability: PERIOD_ANALYSIS_DIRECT_RESET_PAGE
6. K-Navi — ゲッターマウス
   - https://p-kn.com/slot/2461/
   - ホール導入開始2016-03-22、ノーマルタイプ、設定別ボーナス確率。
   - reliability: PERIOD_ANALYSIS_DATABASE_HIGH
7. ちょんぼりすた — ゲッターマウス｜リーチ目・設定判別・解析まとめ
   - https://chonborista.com/slot/universal-slot/17567/
   - 導入2016-03-22、天井なし、34.1G/50枚、設定別BIG/REG、通常機械割97.8〜109.7%、攻略時100.2〜112.6%。
   - reliability: PERIOD_ANALYSIS_HIGH_WITH_PAYOUT_DEFINITION_CONFLICT
8. スロット解析情報~すろかい~ — ゲッターマウス解析情報
   - https://slotkaiseki.hatenablog.com/entry/2016/03/28/212125
   - 2016-03-28当時記事。導入2016-03-22、約34G/50枚、設定別ボーナス/機械割98.7〜110.8%。
   - reliability: PERIOD_ANALYSIS_SECONDARY_CROSSCHECK
9. DMMぱちタウン — ゲッターマウス
   - https://p-town.dmm.com/machines/2451
   - 検索索引で型式名「ゲッターマウスDG」、アクロス、導入2016-03-22、完全攻略時上限112.6%を確認。
   - reliability: ANALYSIS_DATABASE_HIGH
10. 中一商事 — アクロス ゲッターマウス中古実機
   - https://item.rakuten.co.jp/auc-nakaiti/geta/
   - 型式名「ゲッターマウスDG」を実機流通情報で照合。
   - reliability: MARKET_MACHINE_IDENTITY_CROSSCHECK

## confidence
- identity/manufacturer/system: **INDUSTRY_PLUS_MULTI_SOURCE_HIGH**
- formalModelName: **ANALYSIS_DATABASE_PLUS_MACHINE_MARKET_CROSSCHECK**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **HIGH_MULTI_SOURCE_PERIOD**
- performanceCore: **HIGH_MULTI_SOURCE_WITH_PAYOUT_DEFINITION_CONFLICT**
- resetBehavior ceiling/mode relevance: **HIGH_NOT_APPLICABLE_NORMAL_TYPE_PLUS_PERIOD_SOURCE**
- settingChange/powerCycle exact internal contract: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH**
