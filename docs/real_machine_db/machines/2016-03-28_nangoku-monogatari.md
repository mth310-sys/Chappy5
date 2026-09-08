# 南国物語

machineName: 南国物語
manufacturer: オリンピア
releaseDate: 2016-03-28
recordNumber: 967
generation: 5号機
systemType: AT / 擬似ボーナス / ゲーム数・モード管理 / 連チャンゾーン
formalModelName: 南国物語／F1
certificationNumber: 5S1146
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEの当時機種DBで **オリンピア / 型式 南国物語／F1 / 検定番号5S1146 / 導入開始日2016-03-28** を直接確認。
- PiDEAの2016-02-05機械選定記事では「納品3/27～」とされ、全国導入開始日2016-03-28と整合する。
- 後年の同名系「南国物語SPECIAL」「南国物語TYPE-A」「南国物語30」と混同しない。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.2% |
| 3 | 100.4% |
| 4 | 103.2% |
| 5 | 107.0% |
| 6 | 110.3% |

- HAZUSE、PiDEA、当時解析で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | AT/南国ボーナス初当り | ボーナス総出現率 |
|---:|---:|---:|
| 1 | 1/323.9 | 1/134.3 |
| 2 | 1/318.4 | 1/129.1 |
| 3 | 1/304.7 | 1/120.7 |
| 4 | 1/294.9 | 1/113.2 |
| 5 | 1/276.9 | 1/100.6 |
| 6 | 1/244.2 | 1/90.5 |

- 物差しの主要初当たりには「初当り」を採用し、連チャン込みの総出現率は定義を分離して保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約46G/50枚**。
- HAZUSE 約46G、PiDEA 46G/50枚で一致。
- 一部解析の約45.8Gは丸め精度差として扱う。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## netIncrease
- AT純増: **約2.9枚/G**。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG: **70G+α / 基本約203枚**。
- REG: **20G / 基本約58枚**。
- HAZUSEはBIG AT70G+α / REG AT20G、PiDEAはBIG70G・203枚 / REG20G・58枚と記載。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は「初当たりモード」と、REG後32G以内連チャン期待度に影響する「飛翔（連チャン）モード」を別管理。
- 通常時の主要天井候補は **759G / 996G**。初当たりD1～D3では最大333Gとなり、D系天井は111G 10% / 222G 20% / 333G 70%。
- 蝶ときめきゾーン抜け後は222G引き戻し天井の対象となる場合がある。
- 細かな通常モード全移行率は実機完全再現用となるため収録対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_TABLES
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井を再抽選 / 内部モードを再抽選**。
- 告知タイプ、パトランラン表示も初期化される。
- リセット専用の天井振り分け・初当たりモード振り分け・飛翔モード振り分けが公開されている。

### carryOverBehavior
- 設定を変更しない通常の据え置きについて、今回の公開表では「電源OFF→ON」条件として **天井・内部モード引継ぎ** が確認できる。
- 設定据え置きかつ電源を落とさないケースを独立条件で説明する資料は確認していないが、少なくとも営業間の純電源OFF→ONで天井/内部モードは保持される。
- status: **CARRYOVER_SUPPORTED_BY_DIRECT_POWER_CYCLE_TABLE**。

### powerCycleBehavior
- 純電源OFF→ONのみ: **天井引継ぎ / 内部モード引継ぎ**。
- 告知タイプ、パトランラン表示はリセットされるため、表示だけでは設定変更との区別がつかない。
reliability: ANALYSIS_HIGH_DIRECT_TABLE_MULTI_SOURCE

### gameCounterReset
- 設定変更: **RESET / 天井再抽選**。
- 純電源OFF→ON: **CARRYOVER**。
- 据え置き営業間: **CARRYOVER_SUPPORTED_BY_POWER_CYCLE_TABLE**。

### ceilingAfterReset
設定変更時天井振り分け（全設定共通）:
| 天井G | 振り分け |
|---:|---:|
| 8G | 1.0% |
| 16G | 1.0% |
| 28G | 1.0% |
| 759G | 72.0% |
| 996G | 25.0% |

- 28G以内天井が合計 **3.0%**。
- 759G選択が **72.0%** と通常より優遇されるため、朝一リセット狙いに直接影響する。
- 一部業界事前記事は通常天井を「759G or 999G（1:1）」と記載するが、導入後解析は996Gおよびリセット専用上表を採用。平均せずCONFLICTとして保持。

### modeAfterReset
設定変更時「初当たりモード」振り分け:
| 初当たりモード | 設定1・3・5 | 設定2・4・6 |
|---|---:|---:|
| A | 25.0% | 60.9% |
| B | 25.0% | 12.5% |
| C | 25.0% | 12.5% |
| D-1 | 15.6% | 7.8% |
| D-2 | 3.1% | 1.6% |
| D-3 | 3.1% | 1.6% |
| SP南国 | 3.1% | 3.1% |

設定変更時「飛翔（連チャン）モード」振り分け:
| 飛翔モード | 設定1・3・5 | 設定2・4・6 |
|---|---:|---:|
| A | 50.0% | 50.0% |
| B | 37.5% | 25.0% |
| C | 12.5% | 25.0% |

- 設定変更時は内部モードを再抽選。
- 純電源OFF→ONは内部モード引継ぎ。
- リセット時の奇数/偶数で初当たりモード構成が大きく異なるため、朝一客AIの行動差を作れる公開数値として収録。

### stateAfterReset
- 本機の朝一で重要な公開マクロ状態は上記2系統モードの再抽選/引継ぎとして収録。
- 通常時の全状態移行率・全小役別抽選は対象外。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時は759G天井が **72.0%**、8/16/28G天井が合計 **3.0%**。
- 初当たりD系合計は設定1・3・5で **21.8%**、設定2・4・6で **11.0%**（公開個別値の単純合計）。D系は最大333G。
- SP南国は全設定グループ **3.1%**。
- 飛翔B+Cは設定1・3・5で **50.0%**、設定2・4・6で **50.0%**だが、偶数側は上位C比率が25.0%と高い。
- 朝一は通常より浅い天井・上位モードの可能性が明確に存在する。

### resetPenalties
- 前日の天井進捗・内部モードは設定変更で失われるため、前日ハマリや良好モードの宵越し価値は消失する。
- その他の設定変更固有ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 告知タイプとパトランラン表示は **設定変更でも純電源OFF→ONでもリセット** されるため、これら単独では変更判別不可。
- ガックンは当時解析でも確定情報ではなく「不明/効かない可能性が高い」レベルに留まるため、変更判別根拠に採用しない。
- 実際の早い当選G数・モード示唆からの推測は可能だが、確定的な設定変更判別ではない。
- status: **NO_DETERMINISTIC_RESET_DETECTION_CONFIRMED**。

### numericResetData
- resetCeiling: 8G 1.0% / 16G 1.0% / 28G 1.0% / 759G 72.0% / 996G 25.0%。
- resetInitialMode oddSettings(1,3,5): A25.0 / B25.0 / C25.0 / D1 15.6 / D2 3.1 / D3 3.1 / SP 3.1%。
- resetInitialMode evenSettings(2,4,6): A60.9 / B12.5 / C12.5 / D1 7.8 / D2 1.6 / D3 1.6 / SP 3.1%。
- resetFlightMode oddSettings: A50.0 / B37.5 / C12.5%。
- resetFlightMode evenSettings: A50.0 / B25.0 / C25.0%。

## missingFields
- 設定据え置きかつ電源OFFを伴わないケースを独立明記した資料（営業実務上の主要挙動は電源OFF→ON表で補足可能）。
- ガックンの本機固有確定契約。

## conflicts
- **CEILING_PRE_RELEASE_CONFLICT**: PiDEA事前記事は「759G or 999G（振り分け1:1）」、導入後解析は最大996Gおよびリセット時759G 72% / 996G 25%等。canonicalは導入後解析の996Gを採用し、事前値999Gは削除せずCONFLICTとして保持。
- ベース45.8G/50枚と46G/50枚は丸め精度差であり重大CONFLICT扱いしない。

## sources
取得日: 2026-09-08

1. HAZUSE — 南国物語 基本スペック / 機種DB
   - https://hazuse.com/machine/pachislot/5S1146/
   - https://hazuse.com/machine/pachislot/5S1146/genre/201/
   - オリンピア、型式 南国物語／F1、検定5S1146、導入2016-03-28、設定別初当たり/総出現率、機械割、約46G/50枚、BIG70G+α/REG20G。
   - reliability: PERIOD_ANALYSIS_HIGH
2. PiDEA — 三木流「南国物語」の評価は？（2016-02-05）
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%8C%E5%8D%97%E5%9B%BD%E7%89%A9%E8%AA%9E%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
   - 納品3/27～、BIG70G/203枚、REG20G/58枚、初当たり、機械割、ベース46G/50枚、事前天井759/999G。
   - reliability: INDUSTRY_PERIOD
3. 期待値見える化 — 南国物語 天井・ゾーン・朝一リセット
   - https://slotjin.com/zone/nangoku-monogatari/
   - 設定変更/電源OFF→ON比較表、リセット天井振り分け、初当たりモード/連チャンモード振り分け。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT_TABLE
4. すろぱちくえすと — 南国物語 朝一設定変更・リセット
   - https://www.slopachi-quest.com/article/nangokumonogatari-reset/
   - 設定変更時の天井/モード再抽選、電源ON/OFF時の引継ぎ、表示系初期化。
   - reliability: ANALYSIS_HIGH_PERIOD
5. すろぱちくえすと — 南国物語 リセット狙い
   - https://www.slopachi-quest.com/article/nangoku-reset28/
   - リセット天井 8/16/28/759/996G振り分け、奇偶別初当たりモード、飛翔モード振り分け。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT_NUMERIC_TABLE
6. スロットガーデン — 南国物語 攻略まとめ
   - https://xn--mckza4ard4ttb2d.com/nangokumonogatari
   - 2016-03-28、約45.8G/50枚、純増約2.9枚/G、設定別初当たり/機械割、リセット759G約72%。
   - reliability: ANALYSIS_SECONDARY_CROSSCHECK
7. すろぱちくえすと — 2016年パチスロ導入日順一覧
   - https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
   - 2016-03-28群に南国物語のみ掲載。
   - reliability: PERIOD_CALENDAR_CROSSCHECK

## QA status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_PUBLIC_MACRO_BEHAVIOR
- resetRetroactiveQA: NOT_APPLICABLE_NEW_RECORD
