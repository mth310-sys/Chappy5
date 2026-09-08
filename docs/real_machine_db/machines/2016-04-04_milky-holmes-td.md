# 探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌

machineName: 探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌
manufacturer: DAXEL
releaseDate: 2016-04-04
recordNumber: 970
generation: 5号機
systemType: 疑似ボーナス+ART / 周期管理
formalModelName: ミルキィホームズ／DE
certificationNumber: 6S0010
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSE機種DBで **5号機 / DAXEL / 型式 ミルキィホームズ／DE / 検定番号6S0010 / 導入開始日2016-04-04** を確認。
- K-Naviもホール導入開始2016-04-04で一致。
- DAXEL公式製品ページが現存し、本機固有機種であることを確認。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.3% |
| 3 | 100.3% |
| 4 | 103.6% |
| 5 | 106.2% |
| 6 | 110.0% |

- HAZUSE、Pachinavi、複数当時解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
ミルキィBONUS:
| 設定 | 確率 |
|---:|---:|
| 1 | 1/382.7 |
| 2 | 1/359.9 |
| 3 | 1/333.3 |
| 4 | 1/318.2 |
| 5 | 1/280.3 |
| 6 | 1/264.4 |

ミラクルミルキィBONUS:
| 設定 | 確率 |
|---:|---:|
| 1 | 1/2368.2 |
| 2 | 1/2351.4 |
| 3 | 1/2377.3 |
| 4 | 1/2360.4 |
| 5 | 1/2396.7 |
| 6 | 1/2423.3 |

ART「ミルキィTIME」初当たり:
| 設定 | 確率 |
|---:|---:|
| 1 | 1/638.0 |
| 2 | 1/598.8 |
| 3 | 1/580.6 |
| 4 | 1/538.0 |
| 5 | 1/506.9 |
| 6 | 1/473.5 |

- HAZUSEと一撃で精密値一致。Pachinaviは丸め整数表示で整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約47G/50枚**。
- HAZUSEで直接確認。後年整理資料でも47G表記が一致。
reliability: PERIOD_DATABASE_HIGH_PLUS_SECONDARY_SUPPORT

## netIncrease
- 疑似ボーナスおよびART: **約2.0枚/G**。
- HAZUSE、P-WORLD、複数解析で一致。
- 一撃の旧ART概要ページには「約1.5枚/G」表記が残るため、平均せずCONFLICTとして別記。機種全体の主要資料群は約2.0枚/Gで一致するためcanonicalは2.0枚/G。
reliability: CONFLICT_CANONICAL_MULTI_SOURCE_2_0

## basicPayout
- ミルキィBONUS: **平均約95枚**、ベルナビ10～50回。
- ミラクルミルキィBONUS: **平均約170枚**、ベルナビ20～50回。
- ART「ミルキィTIME」: **初期40G以上**。
- グリーンべると業界発表、HAZUSE、一撃、P-WORLDで整合。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は1周期約80G前後の周期管理。HAZUSE上の構成はオープニングZONE15G→シナリオZONE55G→バトルZONE。
- 通常A / 通常B / 引き戻し / 天国準備 / 天国 / 極楽の6モード。
- 通常A・通常B・天国準備: 最大12周期。
- 引き戻し: 最大6周期、終了後は天国以上。
- 天国・極楽: 最大2周期。
- 通常最大天井は **12周期（約960G目安）でボーナス確定**。周期G数は演出・短縮等で実ゲーム数と完全一致しないため「約960G」は目安値として保持。
- ボーナスからART非当選のスルー回数天井も存在し、最大12回スルー後の次回ボーナスでART確定。ただしresetBehaviorの中心ではないため詳細振り分けは本レコードでは最小限に留める。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井周期をRESET**。
- 内部モードを **再抽選**。
- 液晶は実戦上 **シナリオZONEから開始**し、通常時にあるオープニングZONE15Gが朝一1周期目ではカットされる。
- 設定変更後の1周期目は約65G程度で終了する実戦解析。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_PERIOD

### carryOverBehavior
- 「据え置き」単独の内部契約を直接明記した本機固有資料は、表記揺れ・朝一・据え置き・オープニング・周期・モードで再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ただし純電源OFF→ONでは天井・内部モード引継ぎが直接比較表で確認されるため、通常ホールの据え置き挙動を考える際の補助根拠になるが、本欄では自動同一視しない。
reliability: UNVERIFIED

### powerCycleBehavior
純電源OFF→ONのみ:
- 天井: **CARRYOVER**。
- 内部モード: **CARRYOVER**。
- 液晶ステージ: 当時資料では **調査中**。
- すろぱちくえすと、期待値見える化系の朝一比較表で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRYOVER**。
- 据え置き単独: **UNVERIFIED_AFTER_RESEARCH**。
- 周期管理機のため、通常最大天井は12周期。約960Gは平均周期長からの目安であり固定ゲーム数天井として扱わない。

### ceilingAfterReset
- 設定変更専用の単一固定短縮天井ではない。
- 設定変更後はモード再抽選され、引き戻しが選ばれれば **最大6周期**、天国/極楽なら **最大2周期**、通常A/B/天国準備なら **最大12周期**。
- 朝一1周期目のみオープニングZONE15Gがカットされ、約65G程度へ短縮する実戦挙動あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
設定変更後モード振り分け:
| 設定 | 通常A | 通常B | 引き戻し | 天国準備 | 天国 | 極楽 |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 43.4% | 31.3% | 7.8% | 7.8% | 9.4% | 0.4% |
| 2 | 39.1% | 35.2% | 7.8% | 7.8% | 9.8% | 0.4% |
| 3 | 42.6% | 31.3% | 7.8% | 7.8% | 10.2% | 0.4% |
| 4 | 34.0% | 39.1% | 7.8% | 7.8% | 10.9% | 0.4% |
| 5 | 30.9% | 39.1% | 8.6% | 8.6% | 12.5% | 0.4% |
| 6 | 27.0% | 39.1% | 9.4% | 9.4% | 14.8% | 0.4% |

- 2-9伝説の当時解析表で全列を確認。すろぱちくえすとでも同系統値を確認。
- 高設定ほど通常Aが低下し、天国・引き戻し・天国準備側が概ね優遇される。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_PERIOD

### stateAfterReset
- 上記6種の周期モードとは別の低確/高確等の朝一内部状態について、設定変更専用の直接振り分けは今回再探索で固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時は引き戻し7.8～9.4%、天国9.4～14.8%、極楽0.4%が存在し、通常A以外スタート比率が高設定ほど上がる。
- 引き戻し選択時は最大6周期かつ次回天国以上。
- 天国/極楽選択時は最大2周期。
- 朝一1周期目はオープニングZONE15Gがカットされ、約65Gで1周期を消化できる実戦上の短縮挙動。
- 新台初日1回目の初当たり実践集計では1周期目が約21%で当選との当時集計があるが、メーカー解析値ではないため **EMPIRICAL_SINGLE_DATASET** として分離。

### resetPenalties
- 前日までの天井周期進捗・内部モードは設定変更で失われるため、前日深いハマリや上位モード期待の宵越し価値が消える。
- それ以外の設定変更専用の公開不利契約は今回確認できず。

### resetDetection
- 設定変更時は実戦上シナリオZONE開始、通常のオープニングZONE15Gがカットされるため、朝一の周期進行は変更推測材料になる。
- 当時記事では「据え置き時の挙動は確認できていない」と明記されており、シナリオZONE開始だけを確定判別にはしない。
- 後年コメントには「朝一で画面が復帰中は前日OP中ヤメの据え置き」とする実機経験談があるが、一次解析ではないため `USER_REPORT_WEAK_INDICATOR` としてのみ扱う。
- 本機固有のガックン確定契約は、機種名/型式/朝一/設定変更/据え置き/ガックン/初期出目を変えて再探索しても確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_PERIOD_FOR_STAGE_PLUS_WEAK_USER_REPORT

### numericResetData
- settingChangeModeDistribution:
  - setting1: A43.4 / B31.3 / 引き戻し7.8 / 天国準備7.8 / 天国9.4 / 極楽0.4 (%)
  - setting2: A39.1 / B35.2 / 引き戻し7.8 / 天国準備7.8 / 天国9.8 / 極楽0.4 (%)
  - setting3: A42.6 / B31.3 / 引き戻し7.8 / 天国準備7.8 / 天国10.2 / 極楽0.4 (%)
  - setting4: A34.0 / B39.1 / 引き戻し7.8 / 天国準備7.8 / 天国10.9 / 極楽0.4 (%)
  - setting5: A30.9 / B39.1 / 引き戻し8.6 / 天国準備8.6 / 天国12.5 / 極楽0.4 (%)
  - setting6: A27.0 / B39.1 / 引き戻し9.4 / 天国準備9.4 / 天国14.8 / 極楽0.4 (%)
- resetFirstCycleApproxLength: **約65G**（実戦上。通常約80GからOP15Gカット）。
- resetEmpiricalFirstCycleHitRate: **約21%**（新台初日1回目集計、EMPIRICAL_SINGLE_DATASET）。
- pullbackModeCeiling: **6周期**。
- heavenAndGokurakuCeiling: **2周期**。
- normalMaxCeiling: **12周期**。

## missingFields
- 据え置き単独の内部天井・内部モード・液晶ステージ契約は、純電源OFF→ONとは分離して十分再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の低確/高確等、周期モードとは別軸の朝一内部状態振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- メーカー公式のresetBehavior比較表、ガックン確定契約は確認できず。

## conflicts
- ART純増について、HAZUSE/P-WORLD/後年複数整理は **約2.0枚/G** で一致する一方、一撃の2016-04-21 ART概要ページには **約1.5枚/G** とある。平均せず `CONFLICT_ART_NET_INCREASE_2_0_VS_1_5` として保持し、canonicalは多系統一致の約2.0枚/G。
- 周期長はメーカー発表系グリーンべるとで「平均約85G」、攻略解析では「約80G」が主流。構成上OP15G+シナリオ55G+バトル約10～15Gの資料差があり、固定80Gとして天井G数へ機械変換せず、天井は12周期をcanonicalとする。

## sources
取得日: 2026-09-08

1. DAXEL公式 — 探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌
   - https://www.daxel.co.jp/milky-holmes_td/
   - 公式製品ページ。
   - reliability: OFFICIAL
2. HAZUSE — 探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌
   - https://hazuse.com/machine/pachislot/6S0010/
   - 5号機、型式ミルキィホームズ／DE、検定6S0010、導入2016-04-04、設定別ボーナス/ART、約47G/50枚、機械割、約2.0枚/G、平均95/170枚、周期天井。
   - reliability: PERIOD_DATABASE_HIGH
3. K-Navi — 探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌
   - https://p-kn.com/slot/2466/
   - ホール導入開始2016-04-04。
   - reliability: PERIOD_DATABASE_HIGH
4. グリーンべると / P-WORLD業界ニュース — DAXEL×ブシロード共同開発！アニスロ第4弾堂々発表
   - https://news.p-world.co.jp/articles/8195/greenbelt
   - 2016-03-01発表会、MB平均95枚、MMB平均170枚、周期システム説明。
   - reliability: INDUSTRY_PERIOD
5. 一撃 — ボーナス確率 / ART概要 / 通常時の周期モード
   - https://1geki.jp/slot/s_milkyholmes/1/
   - https://1geki.jp/slot/s_milkyholmes/81/
   - https://1geki.jp/slot/s_milkyholmes/44/
   - 設定別ボーナス/ART初当たり、ART初期40G以上、モード別周期天井。ART純増1.5枚/G表記はCONFLICTとして保持。
   - reliability: ANALYSIS_HIGH_PERIOD
6. すろぱちくえすと — 設定変更(リセット)時 挙動・恩恵・狙い目
   - https://www.slopachi-quest.com/article/milkyhomes-reset/
   - 設定変更=天井/内部モードRESET、電源ON/OFF=引継ぎ、シナリオZONE開始、朝一1周期約65G、設定変更後モード振り分け、実践値。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT_TABLE
7. 2-9伝説 — 設定判別・設定差解析まとめ
   - https://2-9densetsu.com/milkyholmes-settei/
   - 設定変更後モード振り分け全6設定の完全表。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT_TABLE
8. 期待値見える化 — ミルキィホームズ 天井・スルー回数・ゾーン・やめどき・終了画面
   - https://slotjin.com/zone/milkyholmes/
   - 設定変更/電源OFF→ON比較、リセット実践値の別系統照合。
   - reliability: ANALYSIS_HIGH_PERIOD
9. P-WORLD機種DB
   - https://www.p-world.co.jp/machine/database/8006
   - 疑似ボーナス/ART約2.0枚/G、平均95/170枚の照合。
   - reliability: INDUSTRY_DATABASE

## confidence
- identity/formalModel/certification/releaseDate: **PERIOD_DATABASE_HIGH_MULTI_SOURCE_PLUS_OFFICIAL_PAGE**
- performanceCore: **INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- settingChange/powerCycle: **ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE**
- reset mode numeric table: **ANALYSIS_HIGH_MULTI_SOURCE_PERIOD**
- carryOverBehavior据え置き単独: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **ANALYSIS_PERIOD_STAGE_INDICATOR_WEAK**
