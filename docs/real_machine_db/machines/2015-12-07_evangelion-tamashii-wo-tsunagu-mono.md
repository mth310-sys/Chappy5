# パチスロ ヱヴァンゲリヲン～魂を繋ぐもの～

machineName: パチスロ ヱヴァンゲリヲン～魂を繋ぐもの～
manufacturer: ビスティ
releaseDate: 2015-12-07
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 944
generation: 5号機
systemType: ノーマルA / リアルボーナス / 天井RT / 技術介入
formalModelName: パチスロ ヱヴァンゲリヲン・魂を繋ぐものF
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCHED

## identity
- SANKYOオンライン博物館（メーカー公式系）は導入年月2015.12、ブランドBisty、販売名/型式名「パチスロ ヱヴァンゲリヲン・魂を繋ぐものF」を掲載。
- 一撃、2015年当時新台一覧、後年機種DBで2015-12-07導入を照合したため、canonical releaseDateは **2015-12-07**。
- P-MEDIAの2015-10-27検定通過記事でも型式名「パチスロ ヱヴァンゲリヲン・魂を繋ぐものF」を確認。
- 検定番号は「魂を繋ぐものF」「5S」「検定番号」「ビスティ」等へ検索語を変え、公式/検定通過記事/中古DB/解析DBを横断したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting
canonical:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.37% |
| 2 | 98.05% |
| 3 | 100.04% |
| 4 | 103.90% |
| 5 | 107.71% |
| 6 | 112.34% |

- 一撃および2015年当時解析で上記精密値が一致。
- P-WORLDや後年DBの **97.4 / 98.1 / 100.0 / 103.9 / 107.7 / 112.3%** は同一系列の丸め値として扱う。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
本機はノーマルAタイプなので主要初当たりとしてBIG/REG/ボーナス合算を保存する。

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/399.6 | 1/595.8 | 1/239.2 |
| 2 | 1/399.6 | 1/574.9 | 1/235.7 |
| 3 | 1/392.4 | 1/546.1 | 1/228.3 |
| 4 | 1/376.6 | 1/520.1 | 1/218.5 |
| 5 | 1/356.2 | 1/496.5 | 1/207.4 |
| 6 | 1/337.8 | 1/404.5 | 1/184.1 |

- 一撃、P-WORLD、当時解析、後年設定DBで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
設定別比較値（RT非考慮、1枚役以外取得前提）:

| 設定 | 50枚あたり |
|---:|---:|
| 1 | 39.91G |
| 2 | 40.48G |
| 3 | 41.87G |
| 4 | 43.10G |
| 5 | 45.32G |
| 6 | 47.48G |

- すろぱちくえすと由来の設定別小役確率からの計算値を期待値見える化が掲載し、同系資料でも **約40～47.5G/50枚** と整理される。
- 別ページの一般スペック表には **約42G/50枚** とあるが、これは設定横断の代表表記であり設定1固定値ではない。定義を混ぜず、比較用canonicalは設定別39.91～47.48Gとする。
- reliability: ANALYSIS_HIGH_CALCULATED_FROM_PUBLISHED_SMALL_ROLE_RATES

## netIncrease
- 通常出玉増加はリアルボーナス主体。
- 天井RT「ヴンダーモード」は **約0.1～0.2枚/G** とする攻略資料あり。ただし主出玉契機の純増ではないため補助値として分離。
- manufacturer-official exact RT net increase: `UNVERIFIED_AFTER_RESEARCH`。

## basicPayout
- SUPER BIG / BIG: **最大402枚**。
- REG: **104枚**。
- メーカー公式系SANKYOオンライン博物館、P-WORLD、一撃で一致。
- reliability: OFFICIAL_PLUS_MULTI_SOURCE

## modeSpecificMinimumData
- 天井RT「ヴンダーモード」を搭載。
- BIG後 **999G** 消化で天井RTへ移行。
- REG後 **799G** 消化で天井RTへ移行。
- 天井RTは次回ボーナスまで継続。
- 通常時のゲーム数解除モード/ATモードは `NOT_APPLICABLE_NORMAL_A_TYPE`。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_DIRECT_RESET_POWER_TABLE_WITH_MORNING_NUMERIC_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井ゲーム数を引き継ぐ**。
- 設定変更後の液晶開始ステージは **司令室**。
- 一撃の本機専用「天井/設定変更」ページが設定変更と電源OFF/ONを並列比較し、双方とも天井G引継ぎ・司令室と明記。
- ちょんぼりすた、man-soft系整理資料でも一致。
- 設定変更による固定短縮天井はない。前日ボーナス後からの天井進捗を保持するため、宵越し天井狙いが成立する。

### carryOverBehavior
- 据え置きでは当然ながらボーナス後天井進捗を保持。
- BIG後999G / REG後799Gという前回ボーナス種別に紐づく天井条件も継続する。
- 液晶朝一表示だけでは、設定変更も純電断も司令室に揃うため判別材料にならない。

### powerCycleBehavior
- 純電源OFF→ON: **天井ゲーム数を引き継ぐ**。
- 液晶開始ステージ: **司令室**。
- BAR揃いBIGムービーの進行順は電源OFF→ONでもリセットされるため、ムービー初回化は設定変更固有ではない。
- REG中キャラの設定示唆振り分けは、設定変更後と純電源OFF→ON後で別テーブルが公開されている。

### gameCounterReset
- normalCeilingAfterBIG: **999G**。
- normalCeilingAfterREG: **799G**。
- settingChangeCeilingCounter: **CARRYOVER**。
- carryOverCeilingCounter: **CARRYOVER**。
- purePowerCycleCeilingCounter: **CARRYOVER**。
- 前日最終Gが大きい台は設定変更されても宵越し天井対象になり得る。

### ceilingAfterReset
- 設定変更時も前日の天井進捗を引継ぐため **RESET_DEDICATED_SHORTENED_CEILING_NONE**。
- 設定変更後に0Gから999/799Gを再カウントする仕様ではない。
- 天井到達恩恵は次回ボーナスまで継続するRT「ヴンダーモード」。

### modeAfterReset
- AT/ARTの規定Gモード再抽選は `NOT_APPLICABLE_NORMAL_A_TYPE`。
- BAR揃いBIGのムービー3回1セット進行は、設定変更および電源OFF→ONで初期化される。
- これは天井内部G数とは別管理なので混同しない。

### stateAfterReset
- 通常時の高確/低確のようなAT内部状態は `NOT_APPLICABLE_NORMAL_A_TYPE`。
- 液晶ステージは設定変更/純電断とも **司令室**。
- 天井RT中に設定変更または純電断した場合のRT物理状態の本機固有直接比較については、今回の現存資料から安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。天井G引継ぎ契約とは分離する。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の朝一実戦上メリットは **設定変更されても天井G数が消えない**こと。前日のBIG/REG後からのハマリを宵越せる。
- 設定変更後最初のREGでは、通常REGより設定否定/高設定確定パターンの選択率が上がるため、朝一の設定看破価値が高い。
- ガックン報告があり、未対策店では変更推測材料になり得る。

### resetPenalties
- 設定変更で天井進捗を消去する不利は確認されない。
- 設定変更固有の主要ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- すろぱちくえすとは **設定変更時にガックンする**と報告。ただしメーカー公式保証の確定判別ではなく、対策可能な実戦判別として扱う。
- 液晶ステージは設定変更/電源OFF→ONとも司令室のため単独判別不可。
- BAR揃いBIGムービーは朝一初回化するが、電源OFF→ONでも順番がリセットされることが後から判明したため **設定変更判別には使用不可**。
- 天井G数が設定変更でも引き継がれるため、天井発動G数から変更/据え置きを単純判別することもできない。

### numericResetData
REG中の1G目/5G目キャラ組み合わせによる設定示唆は、朝一条件で選択率が上昇する。完全再現用の全キャラ振り分けではなく、朝一行動へ影響するトータル値のみ保存する。

#### 設定変更後 / 天井REG / REG3連続時 — 設定示唆パターン合算
| 設定 | 設定1否定 | 設定4以上 | 設定6 | 示唆合算 |
|---:|---:|---:|---:|---:|
| 1 | - | - | - | - |
| 2 | 12.45% | - | - | 12.45% |
| 3 | 9.34% | - | - | 9.34% |
| 4 | 6.23% | 11.90% | - | 18.13% |
| 5 | 6.23% | 9.16% | - | 15.38% |
| 6 | 6.23% | 6.41% | 9.16% | 21.79% |

#### 電源OFF→ON後 — 設定示唆パターン合算
| 設定 | 設定1否定 | 設定4以上 | 設定6 | 示唆合算 |
|---:|---:|---:|---:|---:|
| 1 | - | - | - | - |
| 2 | 10.38% | - | - | 10.38% |
| 3 | 7.78% | - | - | 7.78% |
| 4 | 5.19% | 9.92% | - | 15.11% |
| 5 | 5.19% | 7.63% | - | 12.82% |
| 6 | 5.19% | 5.34% | 7.63% | 18.16% |

#### その他REG — 比較基準の示唆合算
| 設定 | 設定1否定 | 設定4以上 | 設定6 | 示唆合算 |
|---:|---:|---:|---:|---:|
| 1 | - | - | - | - |
| 2 | 5.19% | - | - | 5.19% |
| 3 | 3.89% | - | - | 3.89% |
| 4 | 2.59% | 4.97% | - | 7.56%前後 |
| 5 | 2.59% | 3.81% | - | 6.40%前後 |
| 6 | 2.59% | 2.69% | 3.81% | 9.09% |

- 一撃は設定変更後と電源OFF→ON後を明確に別テーブルで掲載。
- ちょんぼりすたも設定変更後 **設定4 18.1 / 設定5 15.4 / 設定6 21.8%**、電源OFF→ON後 **15.1 / 12.8 / 18.2%** と丸めて一致。
- これらは「設定変更を見抜く確率」ではなく、最初のREGが該当条件にある場合の設定示唆パターン選択率。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_MORNING_NUMERIC

## conflicts
- 導入日について一部後年ページに2015-12-21表記があるが、メーカー公式月表示、2015年当時12/7導入予定記事、一撃、複数当時一覧が2015-12-07で一致するためcanonicalは **2015-12-07**。12/21表記は `CONFLICT_RELEASE_DATE_SECONDARY_2015_12_21` として採用しない。
- 50枚ベースの **約42G/50枚** は一般代表値、39.91～47.48Gは設定別計算値であり定義差。平均化しない。

## missingFields
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- manufacturer-official exact RT net increase: `UNVERIFIED_AFTER_RESEARCH`
- ceiling-RT physical-state handling under setting change/pure power cycle: `UNVERIFIED_AFTER_RESEARCH`
- manufacturer-guaranteed reset detection: `UNVERIFIED_AFTER_RESEARCH`（実戦ガックン報告は補助情報）

## sources
取得日: 2026-09-08

1. SANKYOオンライン博物館 — パチスロ ヱヴァンゲリヲン～魂を繋ぐもの～
   - https://www.sankyo-fever.jp/collection/883/
   - メーカー公式系。2015.12、Bisty、Aタイプ、BIG最大402枚、BIG後999G/REG後799G天井RT、型式名F。
   - reliability: OFFICIAL
2. 一撃 — 機種トップ
   - https://1geki.jp/slot/evatsunagumono/
   - 導入予定日2015-12-07、設定別ボーナス合算/機械割、BIG約400枚/REG104枚。
   - reliability: ANALYSIS_HIGH_PERIOD
3. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/evatsunagumono/3/
   - BIG後999G/REG後799G、設定変更・電源OFF/ONとも天井G引継ぎ、司令室開始。
   - reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE
4. 一撃 — REG中キャラ選択率
   - https://1geki.jp/slot/evatsunagumono/65/
   - 設定変更後/電源OFF ON後/通常時を分離した朝一設定示唆トータル選択率。
   - reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_RESET_DATA
5. P-WORLD — ヱヴァンゲリヲン・魂を繋ぐもの
   - https://www.p-world.co.jp/machine/database/7906
   - 5号機ノーマル、BIG最大402枚、REG104枚、天井RT、丸め機械割。
   - reliability: INDUSTRY_DATABASE
6. ちょんぼりすた — 完全攻略
   - https://chonborista.com/slot/bisty-slot/13409/
   - 導入日2015-12-07、設定変更/電源OFF ONの天井引継ぎ、朝一REG示唆率、BARムービー電断リセット。
   - reliability: ANALYSIS_HIGH
7. すろぱちくえすと — 天井/スペック
   - https://www.slopachi-quest.com/article/eva-tamashii/
   - 約42G/50枚代表値、BIG最大402枚、REG104枚、RT純増約0.1～0.2枚/G、天井。
   - reliability: ANALYSIS_HIGH_PERIOD
8. すろぱちくえすと — 設定判別/朝一
   - https://www.slopachi-quest.com/article/eva-tamasi-settei/
   - 設定変更時ガックン報告、コイン持ち約40～47.5G/50枚、朝一示唆強化。
   - reliability: ANALYSIS_HIGH_PERIOD_EMPIRICAL_RESET_DETECTION
9. 期待値見える化 — コイン持ち計算
   - https://slotjin.com/help-tool/eva-graph/
   - 設定別39.91 / 40.48 / 41.87 / 43.10 / 45.32 / 47.48G/50枚（RT非考慮、1枚役以外取得）。
   - reliability: ANALYSIS_DERIVED_FROM_PUBLISHED_RATES
10. P-MEDIA — 検定通過
   - https://p-media.info/%E3%80%90%E9%80%9F%E5%A0%B1%E3%80%91%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%82%A8%E3%83%B4%E3%82%A1%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%83%B1%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%83%B2/
   - 2015-10-27検定通過確認、型式名「パチスロ ヱヴァンゲリヲン・魂を繋ぐものF」。
   - reliability: INDUSTRY_PERIOD
11. man-soft — リセット/設定変更
   - https://smaslo.man-soft.com/slot-kaiseki/evangelion10-tamasiiwotunagumono.html
   - 設定変更/電源ON OFFとも天井G引継ぎ、司令室。
   - reliability: ANALYSIS_SECONDARY_CORROBORATION
12. 2015年導入機種一覧
   - https://slotnews777.blog.fc2.com/blog-entry-2348.html
   - 12月7日: リノ、エヴァ魂。12月21日: 秘宝伝 伝説への道。
   - reliability: PERIOD_SECONDARY_BOUNDARY

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OFFICIAL_MONTH
- formalModelName: OFFICIAL_PLUS_INDUSTRY_PERIOD
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_DERIVED_SETTING_SPECIFIC
- normalCeiling: OFFICIAL_PLUS_MULTI_SOURCE
- settingChangeCeilingCounter: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE
- purePowerCycleCeilingCounter: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE
- resetDetectionGakkun: ANALYSIS_SINGLE_EMPIRICAL_SUPPORTED
- morningNumericResetData: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE
