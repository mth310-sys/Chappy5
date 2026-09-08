machineName: パチスロおそ松さん
manufacturer: D-light（ディ・ライト）
releaseDate: 2017-02-06
recordNumber: 1047
generation: 5号機 / 5.5号機期
systemType: ノーマル / Aタイプ / MAX-A400
formalModelName: パチスロおそ松さんD
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCH_EXHAUSTED

## identity
- K-Navi、ちょんぼりすた、アタリ7でホール導入開始2017-02-06が一致。
- 2016-09-08付の山形県公安委員会検定通過記事転載では型式を `パチスロおそ松さんD` と記載。
- 後年中古流通資料では型式欄を `パチスロおそ松さん` とする表記もあるため、検定通過時名称をformalModelNameのcanonicalに採用し、流通上の末尾D省略を表記差として保持する。
- 検定番号は `パチスロおそ松さんD` / `パチスロ おそ松さん` / D-light / ディ・ライト / 6S / 検定番号 / 検定通過を組み替え、公安委員会・業界記事・古いDB・流通資料まで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_FOR_RELEASE_AND_MODEL; UNVERIFIED_FOR_CERTIFICATION_NUMBER

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.8% |
| 2 | 99.8% |
| 3 | 101.5% |
| 4 | 103.0% |
| 5 | 104.5% |
| 6 | 107.5% |

- 5号機クロニクルは設定3=101.51%、設定4=103.03%と追加桁を掲載。方向性・値は一致しており、別系列の競合とはせず精度差として原値をdataQualityNotesに保持する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
| 設定 | BIG |
|---:|---:|
| 1 | 1/368.18 |
| 2 | 1/364.09 |
| 3 | 1/360.09 |
| 4 | 1/356.17 |
| 5 | 1/348.60 |
| 6 | 1/327.68 |

### REG
| 設定 | REG |
|---:|---:|
| 1 | 1/436.91 |
| 2 | 1/417.43 |
| 3 | 1/397.19 |
| 4 | 1/370.26 |
| 5 | 1/350.46 |
| 6 | 1/327.68 |

### ボーナス合算（公開丸め値）
| 設定 | 合算 |
|---:|---:|
| 1 | 1/200 |
| 2 | 1/194 |
| 3 | 1/189 |
| 4 | 1/182 |
| 5 | 1/175 |
| 6 | 1/164 |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 公開代表値: 約37G / 50枚。
- 設定別解析値: 設定1 36.8G / 2 37.1G / 3 38.0G / 4 38.6G / 5 38.9G / 6 39.1G。
- 物差し比較では代表約37Gと設定別値を定義分離して保持する。
reliability: ANALYSIS_HIGH

## netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`。ART/AT/RTによる継続的な純増性能を主出玉契機に持たない。

## basicPayout
- BIG BONUS: 最大約403枚。
- REGULAR BONUS: 最大約100枚。
- BIGはMAX-A400型の技術介入手順を含む最大獲得表記。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_RETAIL_REFERENCE

## modeSpecificMinimumData
- ノーマルAタイプ。通常ゲーム数天井、周期天井、AT/ART/CZ初当たり管理モードは確認されず、本機のゲーム性上 `NOT_APPLICABLE`。
- ボーナス成立契機や全小役確率、演出詳細は物差しDBのSCOPE_EXCLUDED。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCH_EXHAUSTED_NO_PUBLIC_RESET_SPECIFIC_MACRO_BENEFIT_CONFIRMED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 本機はゲーム数天井・周期・AT/ART/CZ・通常時モードを持たないノーマルAタイプのため、それらに関する設定変更RESET契約は `NOT_APPLICABLE`。
- `パチスロおそ松さん` / `パチスロおそ松さんD` / D-light / ディ・ライトと、設定変更・リセット・朝一・据え置き・電源OFF ON・ガックンを組み替え、当時攻略サイト・古いDB・後年DB・検定/流通資料を横断したが、本機固有の朝一専用恩恵・不利や設定変更専用状態は確認できなかった。
- 設定変更時のリール初期位置等について一般的Aタイプの挙動から推測補完しない。
reliability: ANALYSIS_HIGH_FOR_NOT_APPLICABLE_SYSTEM_FIELDS; RESEARCH_EXHAUSTED_FOR_MACHINE_SPECIFIC_PHYSICAL_BEHAVIOR

### carryOverBehavior
- 据え置きで継続管理すべき天井ゲーム数・周期・モード・AT/ART状態は `NOT_APPLICABLE`。
- ホール経営/朝一客AIへ影響する本機固有の据え置き恩恵・不利は確認されない。
reliability: SYSTEM_STRUCTURE_CONFIRMED_MULTI_SOURCE

### powerCycleBehavior
- 純電源OFF→ONで比較対象となる天井ゲーム数・周期・通常時モード・AT/ART状態は `NOT_APPLICABLE`。
- ボーナス成立中など特殊局面の電断復帰処理は、本機固有の公開直接資料を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。実機完全再現用の推測は行わない。
reliability: SYSTEM_STRUCTURE_CONFIRMED_FOR_MACRO_FIELDS; UNVERIFIED_FOR_SPECIAL_TRANSIENT_STATE

### gameCounterReset
- 通常ゲーム数/天井カウンタ: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。設定変更専用の短縮天井も確認されない。

### modeAfterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED`。
- 朝一専用モードは確認されない。

### stateAfterReset
- AT/ART/CZ用の通常/高確等、朝一客行動へ影響する本機固有状態再抽選は `NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス成立中等の瞬間的特殊状態はpowerCycleBehaviorの未確認範囲として分離する。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井短縮、朝一高確、設定変更専用モード等の公開恩恵は確認されない。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日天井進捗消失等の不利は、そもそも天井非搭載のため `NOT_APPLICABLE`。

### resetDetection
- 本機固有のガックン、初期出目、ランプ/液晶表示等による設定変更確定・濃厚判別は、機種名・正式型式名・メーカー名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 変更判別` を組み替えて再探索しても直接固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一般的な筐体挙動を本機へ転用しない。

### numericResetData
- 設定変更時短縮天井: `NOT_APPLICABLE`。
- 設定変更時モード振り分け: `NOT_APPLICABLE`。
- 朝一特定G以内当選率/専用恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- `おそ松さん`（2017年2月・ノーマル）と `おそ松くん`（2017年4月・A+ART）、`おそ松さん～驚～`（2019年3月・6号機AT）を明確に分離して検索した。
- 性能コアはK-Navi、ちょんぼりすた、アタリ7、後年DBで主要値が整合。
- 機械割設定3/4は当時系資料の101.5/103.0%に対し5号機クロニクルが101.51/103.03%を掲載するが、追加桁の精度差と判断し双方を保持。
- resetBehaviorは本機がノーマル機で天井/モード等を持たないことを明示し、物理的ガックンや特殊電断状態は推測で埋めていない。

## conflicts
- formalModelName notation: `パチスロおそ松さんD`（検定通過記事転載） vs `パチスロおそ松さん`（後年流通資料）。末尾D省略の表記差として保持。
- payout rate precision: setting3 `101.5% vs 101.51%`, setting4 `103.0% vs 103.03%`。丸め精度差として保持し平均しない。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific physical reset detection contract: `NONE_CONFIRMED_AFTER_RESEARCH`。
- special transient-state power-cycle behavior: `UNVERIFIED_AFTER_RESEARCH`。
- 実機完全再現用詳細抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- DATABASE / K-Navi: https://p-kn.com/slot/2687/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/d-light/30168/
- DATABASE / アタリ7: https://www.atari7.com/slot/date1481615670.php
- RETROSPECTIVE_DB / 5号機クロニクル D-light: https://5goki.com/daiichi
- RETAIL_REFERENCE / 中一商事Yahoo!型式・獲得枚数: https://store.shopping.yahoo.co.jp/nakaiticom/60096.html
- RETROSPECTIVE / pachinko's blog 型式・2017年2月資料: https://pachinko.hatenablog.jp/entry/2017/02/osomatsusan
- ARCHIVED_NEWS_REPOST / 2016-09-08山形県公安委員会検定通過記事転載: https://newskenm.blog.2nt.com/blog-entry-53420.html

## retrievalHistory
- performance: おそ松さん 2017 + BIG / REG / 合算 / 機械割 / 50枚 / ベース / 最大獲得枚数。
- reset: `パチスロおそ松さん` / `パチスロおそ松さんD` + 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / 変更判別。
- identity: D-light / ディ・ライト + 型式 / 検定 / 6S / 公安委員会 / 流通実機。
- 同名・近似名の2017年4月「おそ松くん」と2019年「おそ松さん～驚～」を除外し、2017年2月ノーマル機の資料だけをcanonicalへ採用した。