# 最胸伝奇 パイ遊記

machineName: 最胸伝奇 パイ遊記
manufacturer: ネット
releaseDate: 2015-05-25
releaseDatePrecision: exact_hall_start_multi_secondary_with_official_schedule_conflict
releaseDateNote: K-Navi、PachiSeven、当時解析が2015-05-25導入で一致。一方、ネット株式会社2015-03-27発表は「2015年6月上旬より全国のパチンコホールに導入予定」としており、予定日と実導入DBの差をCONFLICTとして保持。ネット公式2015-06-01アプリ発表では「2015年5月導入」と記載され、月単位では5月実導入を補強する。
generation: 5号機
systemType: AT / 疑似ボーナス搭載 / 周期管理
modelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.5% |
| 3 | 100.0% |
| 4 | 103.0% |
| 5 | 105.3% |
| 6 | 113.0% |

- グリーンべると、ちょんぼりすた、pacnkで主要系列が一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / INDUSTRY_RANGE_CONFIRMATION

## initialHitBySetting

AT初当たり:

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/303 |
| 2 | 1/289 |
| 3 | 1/275 |
| 4 | 1/244 |
| 5 | 1/226 |
| 6 | 1/180 |

パイ遊記ボーナス:
1/2131 / 1/2090 / 1/2018 / 1/1844 / 1/1713 / 1/1569。

- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約32.3G/50枚**。
- パチマガスロマガ、ちょんぼりすたで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「キントウンRUSH」純増 **約2.5枚/G**。
- メーカー発表、業界記事、K-Navi、PachiSevenで一致。
- confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## basicPayout

- AT初当たり時は「ひょうたんバズーカタイム」で初期G数を決定。
- 基礎獲得ゲーム数は **50〜110G**。プレイヤー選択の激増チャンス成功で1.5〜4倍、失敗で半減。最大220G扱いの解析あり。
- ATは継続率管理要素を持ち、公開資料では継続率アップグレード50〜85%。
- 実機完全再現用の細かな上乗せ振り分けは収集対象外。

## modeSpecificMinimumData

- 通常時は「悟空カウンター」による周期抽選が中心。
- 周期天井は最大12周期、約1400G目安。
- 7周期以降の周期天井当選にはCZ/ATストック恩恵があり、12周期到達はAT2個+C Z2個ストックとする解析が複数存在。
- AT純増約2.5枚/G。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_AFTER_MACHINE_SPECIFIC_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は天井モードを再抽選する解析を確認。
- リセット時モード振り分け: **通常A 24% / 通常B 60% / チャンス 13% / 天国 3%**。
- 内部状態は朝一 **通常78% / 高確22%** の解析値を確認。
- `MODE_AND_STATE_RESELECT_CONFIRMED_BY_ANALYSIS`。

### carryOverBehavior

- 据え置き時の悟空カウンター進行、天井周期、モード、内部状態を包括的に「全て引継ぎ」と直接明示する本機固有資料は、機種名表記揺れ・据え置き・宵越し・リセット・天井で再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 宵越し実戦記述は存在するが、仕様契約としては採用しない。

### powerCycleBehavior

- 設定変更なしの純電源OFF→ON時について、天井周期・悟空カウンター・モード・内部状態の本機固有契約を直接示す資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機AT機の慣例から補完しない。

### gameCounterReset

- 設定変更時は天井モード再抽選が発生するため、前日周期天井の継続とは扱わない。
- 悟空カウンターの表示/減算余剰を含む細部の設定変更時初期化契約は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/純電断時のカウンター契約は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- リセット専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時はモード再抽選により周期天井分布が変化する。
- リセット時天国3%は1周期天井に対応する公開解析。
- 最大天井は通常同様12周期（約1400G目安）を取り得る。

### modeAfterReset

- **通常A 24% / 通常B 60% / チャンス 13% / 天国 3%**。
- 天国モードは1周期天井。
- 通常A/B/チャンスの周期天井振り分けは存在するが、実機完全再現用の全テーブルはDB本文へ転記しない。
- confidence: ANALYSIS_SINGLE_DETAILED; corroborated by reset-summary text

### stateAfterReset

- **通常78% / 高確22%**。
- 朝一22%で高確スタート。
- confidence: ANALYSIS_SINGLE_DETAILED

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 朝一設定変更時 **22%で高確**。
- モード再抽選で **天国3%**、通常B60%、チャンス13%。
- 固定短縮天井や高率天国移行ではなく、当時解析でも「朝一恩恵は弱め」と評価される程度。

### resetPenalties

- 設定変更専用の主要な固定不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただしリセット時天国は3%と低く、強い朝一恩恵機ではないという解析評価は補助情報として保持。

### resetDetection

- 本機固有のガックン、初期出目、表示、悟空カウンター挙動を用いた信頼できる変更判別情報は、検索語を変え再探索しても固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- リセット時モード: **通常A24% / 通常B60% / チャンス13% / 天国3%**。
- リセット時状態: **通常78% / 高確22%**。
- 天国時周期天井: **1周期**。
- 最大周期天井: **12周期（約1400G目安）**。
- リセット専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## source / definition control

- メーカー2015-03-27発表の「2015年6月上旬より全国導入予定」と、K-Navi/PachiSeven/当時解析の2015-05-25導入には日付競合がある。予定と実導入記録を平均・改変せず保持。
- メーカー2015-06-01アプリ告知は「2015年5月導入」としており、5月実導入を月単位で補強する。
- 周期天井は単純な固定G数天井ではなく悟空カウンター周期回数で管理。約1400Gは目安値として扱う。

## sources

取得日: 2026-09-07

1. ネット株式会社プレスリリース（DreamNews） — https://www.dreamnews.jp/press/0000109924
   - 2015-03-27発表、純増約2.5枚/G、AT概要、2015年6月上旬全国導入予定。
   - confidence: OFFICIAL
2. ネット株式会社アプリ発表（DreamNews） — https://www.dreamnews.jp/press/0000113386
   - 「2015年5月導入」の公式記述。
   - confidence: OFFICIAL
3. グリーンべると — https://web-greenbelt.jp/00007728/
   - AT初当たり1/303〜1/180、ボーナス1/2131〜1/1569、出玉率97.0〜113.0%、純増2.5枚/G。
   - confidence: INDUSTRY
4. K-Navi — https://p-kn.com/slot/2254/
   - 2015-05-25ホール導入開始、純増約2.5枚/G、機種構造。
   - confidence: ANALYSIS_HIGH
5. PachiSeven — https://pachiseven.jp/machines/4482/cutout/6
   - 2015-05-25、AT純増2.5枚/G、基本AT性能。
   - confidence: ANALYSIS_HIGH
6. ちょんぼりすた — https://chonborista.com/slot/net-slot/7782/
   - 設定別AT初当たり/機械割、32.3G/50枚、最大12周期、リセット時モード24/60/13/3%、朝一状態通常78%/高確22%。
   - confidence: ANALYSIS_SINGLE_DETAILED
7. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/161/c.php
   - 50枚あたり約32.3G。
   - confidence: ANALYSIS_HIGH
8. すろぱちくえすと — https://www.slopachi-quest.com/article/saikyoudennki-paiyyuuki/
   - 最大12周期/約1400G、7周期以降の周期天井恩恵。
   - confidence: ANALYSIS_SINGLE
9. pacnk — https://pacnk.com/slot/tools/sh_paiyuki.html
   - 設定別AT初当たり、ボーナス、PAYOUTの照合。
   - confidence: ANALYSIS_SINGLE_CURRENT_DB

## missingFields

- modelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- resetBehavior.carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- resetBehavior.powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetBehavior.gameCounterReset detailed counter contract: UNVERIFIED_AFTER_RESEARCH
- resetBehavior.resetDetection: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- `CONFLICT_RELEASE_DATE_OFFICIAL_SCHEDULE_VS_HALL_DATABASE`: NET公式2015-03-27発表は「2015年6月上旬より全国導入予定」。K-Navi/PachiSeven/当時解析は2015-05-25導入。NET公式2015-06-01告知は「2015年5月導入」。DBでは実ホール導入系の複数一致から2015-05-25をchronological canonicalに採用し、公式予定との差をCONFLICTとして残す。
