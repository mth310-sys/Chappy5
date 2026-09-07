# パチスロ龍が如く OF THE END

machineName: パチスロ龍が如く OF THE END
manufacturer: タイヨーエレック
releaseDate: 2015-11-02
releaseDatePrecision: exact_hall_start_day_multi_source
generation: 5号機
systemType: 新基準AT / 差枚数管理型AT
formalModelName: 龍が如く OF THE END ZA
inspectionNumber: 5S0756
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- K-Navi、HAZUSE、当時解析資料でホール導入開始 **2015-11-02** を確認。
- HAZUSEで型式名 **龍が如く OF THE END ZA**、検定番号 **5S0756** を確認。
- タイヨーエレックが2015-09-16に発表したことを業界媒体グリーンべるとで確認。

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.4% |
| 3 | 100.0% |
| 4 | 102.8% |
| 5 | 105.0% |
| 6 | 110.3% |

- HAZUSE、すろぱちくえすと、ちょんぼりすたで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

AT「龍が如くRUSH」初当たり:

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/388.6 |
| 2 | 1/369.4 |
| 3 | 1/361.9 |
| 4 | 1/318.0 |
| 5 | 1/297.5 |
| 6 | 1/272.4 |

- K-Navi、すろぱちくえすと、HAZUSE/ちょんぼりすたの丸め値で照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約44.6G/50枚**。
- すろぱちくえすと、ちょんぼりすたで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT「龍が如くRUSH」: **約2.9枚/G**。
- グリーンべると、K-Navi、HAZUSE、複数解析で一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- AT「龍が如くRUSH」は差枚数管理型。
- 初当たり時の「BATTLE ZONE」で初期枚数を決定し、**最低保証100枚**。
- 白7「龍が如くRUSH極」は初期枚数抽選が優遇。
- AT高確率ゾーン「SURVIVE TIME」は1セット30G、最大3セット、公開AT期待度51〜99%。
- 実機完全再現用の上乗せ振り分け等は本DB範囲外。

## modeSpecificMinimumData
- 通常時は低確 / 通常 / 高確 / 超高確の4状態。CZまたはAT当選まで高状態から転落しない解析。
- 通常天井: **AT間1380G+前兆**、到達時AT確定。
- 設定変更時は天井が **800G+前兆** に短縮。
- 一部後年整理文中に「1300G→800G」の表記があるが、同ページ表・短縮幅580Gの記述および複数当時資料は1380Gで一致するため1380Gをcanonicalとし競合欄に保持。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_CORE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井ゲーム数をRESETし、通常1380Gから800Gへ短縮**。
- **内部モードを再抽選**。
- 設定変更時の具体的な低確/通常/高確/超高確振り分けは、表記揺れ・メーカー名・型式名・朝一/設定変更/リセット/状態移行を組み替えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は、当時朝一資料の「電源OFF→ON」比較と宵越し立ち回り記述から、**天井進捗・内部モードはCARRYOVER_SUPPORTED**。
- 設定変更なしの据え置きと純電断は概念上分け、公開比較で確認できる範囲のみ記録。

### powerCycleBehavior
- 純電源OFF→ONのみ:
  - **天井ゲーム数: CARRYOVER**
  - **内部モード: CARRYOVER**
  - ステージ表示: 当時比較資料で `調査中` のため `UNVERIFIED_AFTER_RESEARCH`

### gameCounterReset
- settingChange: **RESET**（リセット専用800G天井へ）
- powerCycle: **CARRYOVER**
- carryOver: **CARRYOVER_SUPPORTED**

### ceilingAfterReset
- 通常: **AT間1380G+前兆**。
- 設定変更後: **800G+前兆**。
- 短縮幅: **580G**。
- 天井恩恵: **AT確定**。

### modeAfterReset
- settingChange: **RESELECTED**。
- powerCycle: **CARRYOVER**。
- 設定変更時の4状態具体振り分け: `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 公開資料では低確/通常/高確/超高確の4状態があり、設定変更が状態移行契機であることを確認。
- 設定変更後の具体的振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- 電断のみでは内部モード引継ぎを確認。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の朝一恩恵は **天井1380G→800Gへの580G短縮**。
- 当時の新台初日1回目データ集計では、リセット後の実戦天井到達率 **約17.3%**。これは実戦集計値でありメーカー公表値ではないため `ANALYSIS_SINGLE_EMPIRICAL` として保持。

### resetPenalties
- 前日の天井進捗は設定変更で失われるため、前日ハマリ台の宵越し価値は消失する。
- リセット時の内部状態具体分布が未確認のため、状態面の不利を推測しない。

### resetDetection
- 本機固有のガックン、初期出目、ランプ等による確定的変更判別を、機種名/型式/メーカー名 + ガックン/朝一/設定変更/据え置き/電源OFF ONで再探索したが、直接契約を固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井短縮そのものは事後的なリセット推測要素になり得るが、朝一時点の確定判別手段とはしない。

### numericResetData
- normal ceiling: **1380G+前兆**。
- reset ceiling: **800G+前兆**。
- ceiling reduction: **580G**。
- reset empirical ceiling-hit rate: **約17.3%**（新台初日1回目集計、ANALYSIS_SINGLE_EMPIRICAL）。
- setting-change internal mode: **RESELECTED / detailed distribution UNVERIFIED_AFTER_RESEARCH**。
- pure power-cycle: **天井・内部モード CARRYOVER**。

## conflicts
- `CEILING_TEXT_1380_VS_1300`: 複数当時攻略資料・同ページの表・「580G短縮」は通常天井1380Gを支持する一方、期待値見える化の記事本文1箇所に「1300G→800G」とある。文脈内整合性と複数ソース一致から **1380G canonical**、1300G表記もCONFLICTとして保存。

## missingFields
- settingChangeStateDistribution: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleStageDisplay: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetectionDedicatedCue: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-08

1. グリーンべると — 「龍が如く」と「銀と金」のパチスロ2機種同時発表（2015-09-17）
   - https://web-greenbelt.jp/00008085/
   - タイヨーエレック、2015-09-16発表、純増2.9枚/Gの枚数管理型AT。
   - reliability: INDUSTRY
2. K-Navi — パチスロ龍が如く OF THE END
   - https://p-kn.com/slot/2360/
   - 導入開始2015-11-02、設定別AT初当たり、純増約2.9枚/G。
   - reliability: ANALYSIS_HIGH
3. HAZUSE — 龍が如く OF THE END 基本/解析
   - https://hazuse.com/machine/pachislot/5S0756/
   - 型式名、検定番号、導入日、機械割、内部状態、AT最低保証等。
   - reliability: ANALYSIS_HIGH
4. すろぱちくえすと — 龍が如く OF THE END 天井恩恵・狙い目・スペック解析
   - https://www.slopachi-quest.com/article/ryugagotoku/
   - 44.6G/50枚、設定別AT/機械割、通常1380G・リセット800G天井。
   - reliability: ANALYSIS_HIGH
5. すろぱちくえすと — 龍が如く OF THE END 解析まとめ
   - https://www.slopachi-quest.com/kisyubetsu/ryugagotoku/
   - 天井1380G、リセット800G、AT確定。
   - reliability: ANALYSIS_HIGH
6. ちょんぼりすた — 龍が如く スロット 解析完全攻略
   - https://chonborista.com/slot/taiyo-slot/12222/
   - 2015-11-02、44.6G/50枚、設定別AT/機械割、通常1380G・リセット800G。
   - reliability: ANALYSIS_HIGH
7. 期待値見える化 — 龍が如く 朝一リセット後の挙動・恩恵・実践値解析
   - https://slotjin.com/slot/ryu-ga-gotoku-reset/
   - 設定変更: 天井RESET 1380→800G、内部モード再抽選。電源OFF→ON: 天井/内部モード引継ぎ。新台初日1回目の実戦天井到達率約17.3%。
   - reliability: ANALYSIS_HIGH_DIRECT_RESET_COMPARISON / empirical numeric ANALYSIS_SINGLE
8. 期待値見える化 — 龍が如く 天井恩恵・ゾーン・狙い目・やめどき解析
   - https://slotjin.com/zone/ryu-ga-gotoku/
   - 表では1380G+前兆 / リセット800G+前兆。一方本文1箇所に1300G表記がありCONFLICT保持。
   - reliability: ANALYSIS_HIGH_WITH_INTERNAL_TEXT_CONFLICT

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- identityFormalModel: ANALYSIS_HIGH
- performanceCore: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_HIGH_DIRECT_RESET_COMPARISON
- carryOverBehavior: ANALYSIS_HIGH_SUPPORTED_BY_POWER_COMPARISON_AND_OVERNIGHT_CONTEXT
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetNumericCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- resetEmpiricalCeilingHitRate: ANALYSIS_SINGLE_EMPIRICAL
- resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
