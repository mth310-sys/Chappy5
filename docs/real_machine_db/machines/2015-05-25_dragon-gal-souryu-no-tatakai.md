# ドラゴンギャル～双龍の闘い～

machineName: ドラゴンギャル～双龍の闘い～
manufacturer: SNKプレイモア
releaseDate: 2015-05-25
releaseDatePrecision: exact_hall_start_multi_source
releaseDateNote: HAZUSEと当時解析が2015-05-25導入で一致。PiDEA Xの業界記事は2015-05-24納品予定としており、納品予定日とホール導入開始日を分離して扱う。
generation: 5号機
systemType: AT / CZ主体 / 宝玉ストック
modelName: ドラゴンギャル双龍の闘いAB
inspectionNumber: 4S1080
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 98.9% |
| 3 | 100.8% |
| 4 | 104.5% |
| 5 | 109.2% |
| 6 | 114.3% |

- HAZUSE、当時解析、後年解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

AT「双龍乱舞」初当たり:

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/499.7 |
| 2 | 1/467.6 |
| 3 | 1/435.2 |
| 4 | 1/388.4 |
| 5 | 1/343.2 |
| 6 | 1/281.9 |

- HAZUSEと当時解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約59G/50枚**。
- パチマガスロマガ、PiDEA X、当時解析、後年解析で一致。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「双龍乱舞」純増 **約2.5枚/G**。
- PiDEA X、P-WORLD、パチマガスロマガ、HAZUSEで一致。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「双龍乱舞」は **1セット50G+α**。
- ゲーム数上乗せ＋セットストック型。
- 50Gを基礎性能として物差しへ使用し、特化ゾーン・上乗せの詳細振り分けは収集対象外。
- 一部当時解析にAT期待枚数約400枚の記述があるが、期待値ベースの説明値なので基本獲得性能とは分離する。

## modeSpecificMinimumData

- 通常時はCZ「ムイムイチャレンジ」「双龍チャレンジ」がAT突入の中心。
- ゲーム数天井: **1616G+前兆でAT確定**。
- ムイムイチャレンジ連続失敗回数にも天井があり、**最大10回目でAT確定**。
- 宝玉は6個でムイムイチャレンジ当選。宝玉個数はCZ中のAT抽選へ影響。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_AFTER_MACHINE_SPECIFIC_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井ゲーム数リセット**。
- 内部状態は **高確スタート確定**。
- CZ規定ゲーム数を再抽選。
- 宝玉ストック数を再抽選。
- ムイムイチャレンジのスルー回数天井も設定変更後用の振り分けで再抽選される解析を確認。
- 朝一ステージは龍棲村。
- `GAME_COUNTER_RESET_AND_STATE_CZ_ORB_RESELECT_CONFIRMED_BY_PERIOD_ANALYSIS`。

### carryOverBehavior

- 据え置き時は **天井ゲーム数を引き継ぐ**。
- 内部状態を引き継ぐ。
- CZ規定ゲーム数を引き継ぐ。
- 宝玉ストックを引き継ぐ。
- 通常時の表示ステージは龍棲村。前日が通常時以外だった場合はそのステージを引き継ぐとする当時解析あり。
- 据え置き時の宝玉は前日個数を内部的に保持し、当日最初の宝玉ストック時に前日分が見える形で反映される。
- confidence: ANALYSIS_SINGLE_DETAILED_PERIOD_SOURCE

### powerCycleBehavior

- 設定変更を伴わない **純電源OFF→ONだけ**の天井G・CZ規定G・宝玉・内部状態について、本機固有の直接契約を確認できなかった。
- 「ドラゴンギャル/双龍の闘い/型式名」×「電源OFF ON/電断/据え置き/朝一/ガックン」で再探索したが、設定変更と据え置きの比較資料以上の明示情報は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き仕様や一般的5号機AT機の慣例から自動補完しない。

### gameCounterReset

- 設定変更: **RESET**。1616G天井ゲーム数はリセット。
- 据え置き: **CARRYOVER**。
- CZ規定ゲーム数も設定変更で再抽選、据え置きで引継ぎ。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常のゲーム数天井は **1616G+前兆**。
- 設定変更時にゲーム数カウンタはリセットされるが、**リセット専用の固定短縮ゲーム数天井は NONE_CONFIRMED_AFTER_RESEARCH**。
- 一方、ムイムイチャレンジのスルー回数天井は再抽選され、1～10回の公開振り分けが存在する。
- したがって「朝一はG数天井短縮」ではなく、CZ回数天井の再抽選と高確保証が主なリセット差分。

### modeAfterReset

- 本機で朝一専用の一般的なA/B/天国型モード振り分けは確認できず `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- 朝一差分の主対象はCZ規定ゲーム数、ムイムイチャレンジ回数天井、宝玉ストック、内部高確。
- CZ規定ゲーム数のリセット専用振り分け表は公開されているが、完全再現用の全テーブルは収集対象外のため転記しない。

### stateAfterReset

- 設定変更時は **高確スタート確定**。
- 高確保証G数の公開振り分け: **10G 25% / 20G 50% / 30G 25%**。
- 据え置き時は前日状態を引き継ぐ。
- confidence: ANALYSIS_SINGLE_DETAILED_PERIOD_SOURCE

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 朝一設定変更時は **高確移行確定**。保証G数は10/20/30Gで25/50/25%。
- 宝玉ストックが再抽選され、0個以外から始まる可能性がある。
- CZ規定ゲーム数とMCスルー回数天井が再抽選されるため早いCZ/回数天井に当たる可能性がある。
- 当時の実践値解析では、リセット後に特定の強い狙い目ゾーンは観測されていない。

### resetPenalties

- 設定変更専用の固定ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし公開されている宝玉再抽選では高設定ほど0個スタート比率が高く、設定1～4=40.00%、設定5=53.75%、設定6=64.75%。朝一宝玉面では高設定ほど初期ストックなしが増えるという不利側の特徴を持つ。
- これは設定変更専用分布の特徴として保持し、ホール収益上の固定ペナルティとは同一視しない。

### resetDetection

- 据え置き時は前日の宝玉個数を引き継ぎ、最初のストック時に反映されるため、前日確認個数との差から設定変更を**推測**できる場合がある。ただし当日獲得分との混同があり確定判別ではない。
- ステージは設定変更時も通常据え置き時も龍棲村になり得るため、龍棲村だけでは判別不能。前日が通常時以外だった場合、据え置きではそのステージを引き継ぐ解析があり補助材料となる。
- 本機固有のガックン判別は表記・検索語を変えて再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

#### 高確保証G数

| 保証G | 振り分け |
|---:|---:|
| 10G | 25% |
| 20G | 50% |
| 30G | 25% |

#### 設定変更時の初期宝玉ストック

当時解析表は「4・5個」の表示が各値共通であることをHAZUSEの個別4個/5個表で補強する。

| 設定 | 0個 | 1個 | 2個 | 3個 | 4個 | 5個 |
|---:|---:|---:|---:|---:|---:|---:|
| 1～4 | 40.00% | 29.00% | 15.00% | 10.00% | 3.00% | 3.00% |
| 5 | 53.75% | 20.00% | 12.50% | 8.75% | 2.50% | 2.50% |
| 6 | 64.75% | 12.50% | 10.00% | UNVERIFIED_TABLE_RENDERING | 2.00% | 2.00% |

- 設定6の3個欄は、現存する検索表示で列欠落が生じており、合計値から逆算せず `UNVERIFIED_TABLE_RENDERING` とした。

#### 設定変更時MCスルー回数天井

| 回数 | 振り分け |
|---:|---:|
| 1 | 5.00% |
| 2 | 12.50% |
| 3 | 7.50% |
| 4 | 4.50% |
| 5 | 7.10% |
| 6 | 2.50% |
| 7 | 4.50% |
| 8 | 16.30% |
| 9 | 20.00% |
| 10 | 20.00% |

- 10回天井はAT確定。
- 全CZ規定G振り分けは公開されているが、完全再現用詳細テーブルのため本文には転記しない。

## source / definition control

- PiDEA Xの2015-05-24は **納品予定日**。HAZUSE/当時解析の2015-05-25は **ホール導入開始日**として定義を分離し、日付競合として平均化しない。
- 50枚59Gと1000円59Gは20円等価の50枚貸し前提で同一換算として扱われる資料が多いが、DB表記は「約59G/50枚」に統一。
- AT期待枚数約400枚は解析サイトの期待値説明であり、AT基本性能50G+αと混同しない。
- リセット時の宝玉表は設定6の3個欄だけ現存表示欠落があるため推定補完しない。

## sources

取得日: 2026-09-07

1. HAZUSE — https://hazuse.com/machine/pachislot/4S1080/
   - 5号機、導入開始2015-05-25、メーカー、型式ドラゴンギャル双龍の闘いAB、検定4S1080、設定別AT確率/機械割、天井、AT性能、設定変更時宝玉抽選。
   - confidence: ANALYSIS_HIGH_PERIOD_DATABASE
2. すろぱちくえすと 天井解析 — https://www.slopachi-quest.com/article/dragon-girl/
   - 2015-05-25導入、1616G天井、AT初当たり/機械割、約59G、純増2.5枚/G。
   - confidence: ANALYSIS_SINGLE_PERIOD
3. すろぱちくえすと 朝一設定変更 — https://www.slopachi-quest.com/article/doragon-girl-reset/
   - 設定変更/据え置き比較、高確保証10/20/30G、宝玉再抽選、MCスルー回数天井振り分け、変更判別補助。
   - confidence: ANALYSIS_SINGLE_DETAILED_PERIOD_SOURCE
4. PiDEA X — https://www.pidea.jp/articles/SNK%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A2%E3%82%A2%E3%80%8C%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AE%E3%83%A3%E3%83%AB%E3%80%8D10%E5%91%A8%E5%B9%B4%E6%9C%80%E6%96%B0%E4%BD%9C
   - 2015-04-02業界記事、純増約2.5枚/G、50Gワンセット、約59G/50枚、2015-05-24納品予定。
   - confidence: INDUSTRY
5. パチマガスロマガ 基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/50/a.php
   - 5号機AT、純増約2.5枚/G、1セット50G+α。
   - confidence: ANALYSIS_HIGH
6. パチマガスロマガ 小役/ベース — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/50/c.php
   - 50枚あたり約59G。
   - confidence: ANALYSIS_HIGH
7. パチマガスロマガ ATフロー — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/50/l.php
   - CZ構造、AT純増2.5枚/G、1セット50G+α。
   - confidence: ANALYSIS_HIGH
8. P-WORLD — https://www.p-world.co.jp/machine/database/7702
   - 5号機AT、1616G天井、AT1セット50G、純増2.5枚/G。
   - confidence: ANALYSIS_HIGH_DATABASE
9. ちょんぼりすた — https://chonborista.com/slot/snk/7909/
   - 導入2015-05-25、設定別AT/機械割、59G、純増2.5、1616G/MC10回天井。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## missingFields

- resetBehavior.powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetBehavior.numericResetData.setting6InitialOrbThreeCount: UNVERIFIED_TABLE_RENDERING
- resetBehavior.resetDetection.gakkun: NONE_CONFIRMED_AFTER_RESEARCH
- resetBehavior.ceilingAfterReset.fixedShortenedGameCeiling: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- `NO_NUMERIC_CONFLICT_CONFIRMED_CORE`: 設定別AT初当たり・機械割・ベース・純増・AT基本Gは主要資料で一致。
- `RELEASE_DATE_DEFINITION_SEPARATED`: PiDEA X 2015-05-24は納品予定、HAZUSE/当時解析2015-05-25はホール導入開始。異なる定義として保持し平均しない。
