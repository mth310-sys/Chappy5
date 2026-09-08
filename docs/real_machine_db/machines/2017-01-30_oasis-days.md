machineName: オアシスデイズ
manufacturer: パイオニア
releaseDate: 2017-01-30
recordNumber: 1043
generation: 5号機 / 5.5号機期
systemType: ノーマル / 完全告知 / 25φ
formalModelName: オアシスデイズ/DX
certificationNumber: 6S1149
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_UNVERIFIED_MACHINE_SPECIFIC_POWER_STATE

## identity
- パイオニア公式2017年製品一覧は「オアシスデイズ」を2017年1月発売と掲載。
- グリーンべると2016-12-02業界記事は、25φオアシスシリーズ第9弾として発表し、一部地域を除き2017-01-29より納品開始予定と記載。
- HAZUSEは導入開始日2017-01-30、型式 `オアシスデイズ/DX`、検定番号 `6S1149` を掲載。P-WORLDも型式・検定番号を一致して掲載するため、2017-01-30をホール導入日のcanonicalとした。
- すろぱちくえすとには2017-01-16導入との記述が残るため、平均化・上書きせず `CONFLICT_RELEASE_DATE_2017_01_30_VS_2017_01_16_SINGLE_SECONDARY` として保持する。
reliability: OFFICIAL_PLUS_INDUSTRY_PLUS_DATABASE_HIGH_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97% |
| 2 | 99% |
| 3 | 101% |
| 4 | 104% |
| 5 | 107% |
| 6 | 110% |

- P-WORLD、HAZUSE、2-9伝説、グリーンべると業界記事で設定1〜6のレンジ/系列が一致。
reliability: INDUSTRY_PLUS_DATABASE_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG BONUS
| 設定 | BIG |
|---:|---:|
| 1 | 1/299 |
| 2 | 1/288 |
| 3 | 1/278 |
| 4 | 1/268 |
| 5 | 1/256 |
| 6 | 1/244 |

### REG BONUS
| 設定 | REG |
|---:|---:|
| 1 | 1/496 |
| 2 | 1/468 |
| 3 | 1/436 |
| 4 | 1/407 |
| 5 | 1/376 |
| 6 | 1/348 |

### ボーナス合算
| 設定 | 合算 |
|---:|---:|
| 1 | 1/186 |
| 2 | 1/178 |
| 3 | 1/170 |
| 4 | 1/161 |
| 5 | 1/152 |
| 6 | 1/143 |

reliability: INDUSTRY_PLUS_DATABASE_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約37.0G / 50枚。
- グリーンべると業界記事、HAZUSE、2-9伝説で一致。
reliability: INDUSTRY_PLUS_DATABASE_HIGH_MULTI_SOURCE

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE_NO_RT_AT_ART。

## basicPayout
- BIG BONUS: 最大純増312枚（345枚超払い出しで終了）。
- REG BONUS: 最大純増130枚（135枚超払い出しで終了）。
- P-WORLD、HAZUSE、グリーンべるとで一致。
reliability: INDUSTRY_PLUS_DATABASE_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- AT/ART/CZなしのノーマルタイプ。
- 天井性能なし。2-9伝説が明記し、通常ゲーム数天井を前提とする狙い目は存在しない。
- 通常時はハイビスカス告知主体。P-WORLDは告知タイミングを、単独当選レバーON約50%、単独当選の次ゲーム約25%、チェリー同時当選の次ゲーム約12.5%、ウキウキストップの次ゲーム約12.5%と整理するが、これは通常ゲーム性情報でありresetBehavior専用数値ではないため物差し本体には採用しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_SCOPE_APPLICABILITY_WITH_MACHINE_SPECIFIC_TRANSIENT_STATE_UNVERIFIED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 本機は通常ゲーム数天井・AT/ART/CZ・長期モードを持たないため、天井短縮や朝一AT/ARTモード再抽選は構造上 `NOT_APPLICABLE`。
- 設定変更操作時の成立済みボーナス状態、リール初期挙動、告知状態等について、本機固有の直接契約は検索語・資料系統を変えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_SCOPE_APPLICABILITY; UNVERIFIED_FOR_MACHINE_SPECIFIC_TRANSIENT_STATE

### carryOverBehavior
- 据え置き時に引き継ぐべきゲーム数天井・AT/ARTモード・CZ周期は存在しない。
- 成立済みボーナス等の一時状態について、本機固有の据え置き比較契約は `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING_OR_LONG_MODE; UNVERIFIED_FOR_TRANSIENT_STATE

### powerCycleBehavior
- 純電源OFF→ONによるゲーム数天井/AT・ARTモード差は構造上 `NOT_APPLICABLE`。
- 成立済みボーナス、リール/告知ランプ等の一時状態が純電断でどう扱われるかは、本機固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的な5号機ノーマルの挙動から補完しない。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_TRANSIENT_STATE

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。
- 通常ゲーム数天井そのものがないため、前日天井進捗のRESET/CARRYOVERというホール経営上の差はない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- AT/ART/CZ・通常A/B等の長期モードは `NOT_APPLICABLE_NORMAL_TYPE`。
- 朝一専用モード/リセット専用ボーナス高確率状態は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_SCOPE

### stateAfterReset
- ホール経営/朝一狙いに影響する公開された設定変更専用高確・低確状態は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 成立済みボーナス等の一時状態は `UNVERIFIED_AFTER_RESEARCH`。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_TRANSIENT_STATE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 短縮天井、朝一モード、CZ/ART優遇、特定ゲーム数以内当選率などのリセット恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後に通常ボーナス確率そのものが上昇する公開数値も確認できない。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 前日天井進捗消失は天井非搭載のため `NOT_APPLICABLE`。
- その他の設定変更専用不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 「オアシスデイズ / オアシスデイズDX / 6S1149 / パイオニア」と「設定変更 / リセット / 朝一 / 据え置き / 電源 / ガックン / 初期出目 / ランプ」を組み替え、当時解析・古いDB・後年資料まで再探索したが、本機固有の設定変更確定ガックン・初期出目・ランプ判別契約は固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス後パネルフラッシュやREG中サイドランプは設定推測要素であり、設定変更/据え置き判別とは別物なのでresetDetectionには混入しない。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### numericResetData
- 設定変更専用短縮天井: `NOT_APPLICABLE_NO_CEILING`。
- 設定変更時モード振り分け: `NOT_APPLICABLE_NO_LONG_MODE`。
- 朝一特定G以内当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時高確開始率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- パイオニア公式2017年製品一覧、グリーンべると業界記事、P-WORLD、HAZUSE、2-9伝説を横断。
- 性能コアはBB/RB/合算/出玉率/ベース/獲得枚数が業界記事と複数DBで一致し、高信頼。
- releaseDateは1/29納品開始予定→1/30導入という一次/当時DBの整合を優先。すろぱちくえすとの1/16表記は単一二次資料CONFLICTとして残した。
- resetBehaviorは、ノーマル機ゆえ構造上非該当な項目と、本機固有資料がない一時状態を明確に分離。一般論から電断・据え置き契約を推定していない。

## conflicts
- releaseDate: `CONFLICT_RELEASE_DATE_2017_01_30_VS_2017_01_16_SINGLE_SECONDARY`。

## missingFields
- settingChange transient bonus/reel/lamp state: `UNVERIFIED_AFTER_RESEARCH`。
- carryOver transient state direct machine-specific contract: `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- powerCycle transient state direct machine-specific contract: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific gakkun/initial-reel/lamp reset detection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- public reset-only numeric data: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用の詳細抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL / パイオニア 2017年製品一覧: https://www.slot-pioneer.co.jp/products/2017.html
- INDUSTRY / グリーンべると 2016-12-02: https://web-greenbelt.jp/00009166/
- DATABASE / P-WORLD: https://www.p-world.co.jp/machine/database/8233
- DATABASE / HAZUSE: https://hazuse.com/machine/pachislot/6S1149/
- ANALYSIS / 2-9伝説: https://29den.com/oasisdays/
- ANALYSIS / すろぱちくえすと設定判別記事（導入日1/16表記CONFLICT）: https://www.slopachi-quest.com/article/oasisdays/

## retrievalHistory
- 初回: 機種名 + 機械割 / BIG / REG / ベース / 導入日。
- identity再探索: `オアシスデイズ/DX`, `6S1149`, パイオニア, 2017-01-29納品, 2017-01-30導入。
- reset再探索: 機種名/型式/検定番号 + 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 初期出目 / ランプ。
- 公式・業界一次、当時解析、古いDB、後年資料を横断し、見つからない本機固有一時状態のみUNVERIFIEDとした。
