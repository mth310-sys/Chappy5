# パチスロひぐらしのなく頃に絆

machineName: パチスロひぐらしのなく頃に絆
manufacturer: D-light（ディ・ライト）
releaseDate: 2016-02-22
recordNumber: 957
generation: 5号機
systemType: A+ART / CZ / 周期天井
formalModelName: パチスロひぐらしのなく頃に絆S
certificationNumber: 5S1193
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- D-lightから2016-02-22にホール導入されたA+ART機。
- K-Navi、パチ＆スロ必勝本、一撃、Daiichi公式動画系で2016-02-22導入を照合。
- 型式名「パチスロひぐらしのなく頃に絆S」、検定番号「5S1193」は機種DBで確認。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.6% |
| 3 | 100.5% |
| 4 | 104.6% |
| 5 | 109.3% |
| 6 | 113.1% |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/377.5 |
| 2 | 1/354.5 |
| 3 | 1/341.9 |
| 4 | 1/291.8 |
| 5 | 1/253.4 |
| 6 | 1/218.6 |

- ボーナス合算は全設定共通 **1/565.0**。
- ボーナス+ART合算は設定1〜6で **1/226.3 / 1/217.8前後 / 1/213.0 / 1/192.4 / 1/174.9 / 1/157.6**。資料に設定2の丸め/転記差があるため主初当たりにはART単独系列を採用。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約34.5〜35G/50枚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「Day Break RUSH」: **約1.7枚/G**。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG: **約204枚**。
- ART「Day Break RUSH」: **1セット40G**（継続ジャッジ区間を伴う）。
- プレミアムボーナス「柳桜覚醒」は別性能だが、物差しDBでは通常基本性能と混同しない。

## modeSpecificMinimumData
- ART間の周期天井。ステージチェンジ最大 **40周期**でART当選。
- 1周期は資料により平均約30G〜32G表記。40周期は約1200〜1280G+αの目安で、CZ中などでは進行しないため固定ゲーム数天井と同一視しない。
- 通常時の周期天井候補は1/4/6/10/20/30/40周期。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_DIRECT_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **周期天井を再抽選**。
- **L5メーター（キャラクターレベル）を各キャラごとに再抽選**。
- **液晶ステージを再選択**。
- **ARTレベルを再抽選**。

### carryOverBehavior
- 据え置き時は周期天井進捗を引き継ぐ挙動として扱う資料が複数ある。
- L5メーターは据え置き時の前日レベル差を変更判別に使えるとする解析があるが、純電源OFF→ON比較表では「調査中」とする当時資料もあるため、L5内部レベルの電断契約は下記CONFLICT/未確定を維持する。

### powerCycleBehavior
- 周期天井: **CARRYOVER_CONFIRMED**。
- 液晶ステージ: **RESELECT_CONFIRMED**。
- L5メーター / ARTレベル: 一撃の当時比較表では **調査中**。別解析は据え置き時キャラレベル引継ぎを示唆するため、純電断の厳密契約は `PARTIAL_SOURCE_CONFLICT_AFTER_RESEARCH`。
- ガックン: 設定変更・電源ON/OFFとも **しない** とする当時解析あり。

### gameCounterReset
- setting change: **RESET/RESELECT_CONFIRMED**。
- carry-over / pure power cycle: **CARRYOVER_CONFIRMED**（周期天井）。

### ceilingAfterReset
- 通常最大40周期に対し、設定変更後は **最大20周期**へ短縮。
- 1周期平均約30〜32Gのため、最深部は目安 **約600〜640G+α**。周期進行停止区間があるため固定G数天井とはしない。

### modeAfterReset
- 本機は一般的なA/B等の朝一専用モードではなく、周期天井回数を設定変更専用テーブルから再抽選することが主要な朝一差。
- 設定変更時周期天井振り分けは全設定共通。

### stateAfterReset
- L5メーター各キャラの内部レベルを再抽選。
- ARTレベルも再抽選。
- 液晶上のL5メーターは対応役を引くまで見た目上Lv1のため、内部再抽選値と表示値を混同しない。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大天井が40周期→20周期へ半減。
- 設定変更後は **4周期天井が約24.6%** と高く、朝一128G前後+αの当選期待に直接影響する。
- L5メーター内部レベルも再抽選される。

### resetPenalties
- 設定変更時特有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- ガックンによる変更判別は **不可/しない** とする解析。
- リセット・据え置きとも見た目上のL5メーターはLv1スタートとされ、見た目だけで即判別できない。
- 前日の内部/表示レベルが把握できる場合、次回レベルアップ時のズレから変更推測に使えるとする解析あり。確定判別扱いにはしない。

### numericResetData
設定変更時の周期天井振り分け（全設定共通）:
| 天井周期 | 振り分け |
|---:|---:|
| 1周期 | 0.39〜0.4% |
| 4周期 | 24.61〜24.6% |
| 6周期 | 1.56〜1.6% |
| 10周期 | 3.13〜3.1% |
| 20周期 | 70.31〜70.3% |

- 精密値と1桁丸め値は丸め差としてCONFLICT化しない。

設定変更時L5メーター内部レベル（各キャラごと）:
| レベル | 振り分け |
|---:|---:|
| Lv1 | 39.06% |
| Lv2 | 50.00% |
| Lv3 | 9.71〜9.8% |
| Lv4 | 1.17〜1.2% |

設定変更時ARTレベル:
| レベル | 振り分け |
|---:|---:|
| Lv1 | 92.97% |
| Lv2 | 6.25% |
| Lv3 | 0.78% |

## missingFields
- pure power-cycle L5-meter exact internal-state treatment: PARTIAL_SOURCE_CONFLICT_AFTER_RESEARCH
- pure power-cycle ART-level treatment: UNVERIFIED_AFTER_RESEARCH
- manufacturer-guaranteed hard reset detection: NONE_CONFIRMED

## conflicts
- 純電源OFF→ON時L5メーターについて、一撃の当時比較表は「調査中」、別解析は据え置き時のキャラレベル引継ぎを前提に判別法を記載。設定変更と据え置き/電断を無条件同義化せず `PARTIAL_SOURCE_CONFLICT_AFTER_RESEARCH` として保持。
- 1周期の目安は約30G / 平均32Gの資料差がある。周期制でCZ中など進行停止要素があるため平均せず、約30〜32Gの定義差として保持。
- ボーナス+ART合算の設定2に1/217.3・1/217.8等の二次資料差があるため、主要初当たりは一致しているART初当たり系列を採用。

## sources
取得日: 2026-09-08

1. K-Navi — パチスロひぐらしのなく頃に絆
   - https://p-kn.com/slot/2442/
   - 2016-02-22導入、基本スペック。
   - reliability: ANALYSIS_DATABASE
2. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/2713/1/56216
   - 2016-02-22、ボーナス1/565.0、ART初当たり、機械割、BIG204枚、ART40G。
   - reliability: ANALYSIS_HIGH_PERIOD
3. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/higurashi_kizuna/3/
   - 通常40周期天井、設定変更時20周期、リセット周期振り分け、L5メーター再抽選、ARTレベル再抽選、電源OFF/ON比較。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT
4. 一撃 — 機種基本
   - https://1geki.jp/slot/higurashi_kizuna/
   - 2016-02-22、ART純増約1.7枚/G、40G、設定別性能。
   - reliability: ANALYSIS_HIGH
5. 期待値見える化 — 天井・朝一リセット
   - https://slotjin.com/zone/higurasikizuna/
   - 34.5〜35G級の周辺解析、通常周期天井、設定変更20周期、0.4/24.6/1.6/3.1/70.3%、電源OFF→ON天井引継ぎ、液晶ステージ再抽選。
   - reliability: ANALYSIS_HIGH_SECONDARY
6. すろぱちくえすと — 朝一設定変更・リセット
   - https://www.slopachi-quest.com/article/higurashi-kizuna-reset/
   - 設定変更最大20周期、電源ON-OFF最大40周期引継ぎ、キャラレベル再抽選/引継ぎ表現、ガックンなし。
   - reliability: ANALYSIS_PERIOD
7. pachislo-data — ひぐらしのなく頃に絆
   - https://pachislo-data.com/diright/22601
   - リセット周期振り分け、キャラレベル39.1/50.0/9.8/1.2%、見た目Lv1と変更判別補助。
   - reliability: ANALYSIS_SECONDARY
8. パチ7 — 通常時の打ち方/ベース
   - https://pachiseven.jp/machines/4746/cutout/70
   - 2016-02-22、50枚あたり約34.5〜35G。
   - reliability: ANALYSIS_HIGH
9. Sammy Networks — 777TOWN配信告知
   - https://www.sammy-net.jp/news/2016/09/777townnet-17.html
   - 2016年2月ホール導入、D-light、ART40G・純増約1.7枚/Gの一次系後年確認。
   - reliability: INDUSTRY_PRIMARY_DERIVED
10. pachinavi — 機種DB
   - https://pachinavi.net/machines/higurashi-kizuna/
   - 型式名「パチスロひぐらしのなく頃に絆S」、検定番号5S1193、2016-02-22。
   - reliability: SECONDARY_DATABASE

## confidence
- identity/releaseDate: HIGH_MULTI_SOURCE_WITH_OFFICIAL_VIDEO_SUPPORT
- formalModelName/certification: SECONDARY_DATABASE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_INDUSTRY_SUPPORT
- resetSettingChange: ANALYSIS_HIGH_DIRECT_MULTI_SOURCE
- resetNumericData: ANALYSIS_HIGH_DIRECT_MULTI_SOURCE
- powerCycleCeiling: ANALYSIS_HIGH_DIRECT_MULTI_SOURCE
- purePowerCycleL5State: PARTIAL_SOURCE_CONFLICT_AFTER_RESEARCH
- resetDetection: ANALYSIS_MULTI_SOURCE_NOT_MANUFACTURER_GUARANTEED
