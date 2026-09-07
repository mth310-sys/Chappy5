# パチスロ大工の源さん～桜満開！源DREAM Ver.～

machineName: パチスロ大工の源さん～桜満開！源DREAM Ver.～
manufacturer: 三洋物産
releaseDate: 2015-06-08
releaseDatePrecision: exact_hall_start_multi_source
releaseDateNote: K-Naviとパチ7で2015-06-08ホール導入開始が一致。P-WORLDは2015年06月表記。
generation: 5号機
systemType: AT / 100G周期管理 / CZ経由 + 直撃
modelName: パチスロ大工の源さん桜満開KF
inspectionNumber: 4S0800
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

パチマガスロマガ独自調査値を精密canonicalとする。

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.95% |
| 2 | 98.17% |
| 3 | 100.16% |
| 4 | 104.14% |
| 5 | 107.70% |
| 6 | 112.86% |

- P-WORLDは丸め値 97.0 / 98.2 / 100.2 / 104.1 / 107.7 / 112.9%。期待値見える化も97.0 / 98.2 / 100.2 / 104.1 / 107.7 / 112.9%。
- すろぱちくえすとは96.9 / 98.1 / 100.1 / 104.1 / 107.7 / 112.8%表記。
- これは大筋同一値の丸め/精度差として扱い、平均しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

AT「源DREAM」初当たり:

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/347.7 |
| 2 | 1/341.2 |
| 3 | 1/333.9 |
| 4 | 1/319.1 |
| 5 | 1/299.9 |
| 6 | 1/279.9 |

- パチマガスロマガ、P-WORLD、期待値見える化で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約24G/50枚**をcanonical比較値とする。
- 期待値見える化、すろぱちくえすとで24G/50枚。一方、クランキーセブンは約25G/50枚。
- 約表記の1G差を平均せず `ROUNDING_OR_SOURCE_DIFFERENCE_24_VS_25_G_PER_50` として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONFLICT

## netIncrease

- AT「源DREAM」純増 **約3.0枚/G**。
- パチマガスロマガ、P-WORLD、K-Navi、複数解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「源DREAM」: **1セット40G+α**、ゲーム数上乗せ + セットストック型。
- AT当選時は50%以上で「山車入魂の刻」または「T-ARA RUSH」を経由。
- 山車入魂の刻: 10G、平均上乗せ約130G。
- T-ARA RUSH: 10G、平均上乗せ約270G。
- AT中BIG BONUS: 40G固定、純増約3.0枚/G。

## modeSpecificMinimumData

- 通常時は原則 **1周期100G** の周期抽選。
- 周期到達時、源魂0個なら修行モード、1～4個なら疾走ゾーン、5個到達なら昇格チャンス経由。
- 天井: **9周期消化時にAT非当選なら次遊技でAT当選**。実ゲーム数は1周期100G+αのため約1000G目安。
- 天井および9周期目からのATは **山車演武ストック3個**で開始。
- 源魂5個到達で周期を待たずに昇格チャンスへ移るため、液晶/実ゲーム数と単純な100G×周期数は常に一致するとは限らない。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_DISPLAY_CONFLICT_AND_POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機は例外的に、**設定変更しても内部の天井到達までの周期数・周期残りゲーム数を引き継ぐ**とする当時解析が複数存在。
- 期待値見える化は設定変更時に「天井までの周期数や周期残りゲーム数を引き継ぐ」と明記。
- すろぱちくえすとも「設定変更・リセットでもゲーム数がリセットされない」と記載。
- 後年回顧資料も「設定変更で天井までの周期数はリセットされない」と一致。
- 設定変更時の内部状態については、後年整理資料で再抽選とする情報があるが、当時高信頼資料で完全な初期振り分けまでは固定できず `RESELECTED_SUPPORTED_BUT_NUMERIC_DISTRIBUTION_UNVERIFIED`。
- 源魂について、設定変更時も内部引継ぎとする後年整理資料がある一方、当時資料では明確な独立表を固定できず `CARRYOVER_SUPPORTED_SECONDARY` とする。

### carryOverBehavior

- 設定変更なし据え置きは、天井周期数・周期残りGを **CARRY_OVER_CONFIRMED**。
- 前日ハマりを翌日へ宵越しできる機種として当時攻略資料・実戦資料で広く扱われている。
- 源魂・内部状態も据え置きで保持されるとする整理資料がある。

### powerCycleBehavior

- 純粋な電源OFF→ONでは **周期数/周期残りGは引継ぎ**とする後年整理資料が存在し、据え置き運用とも整合。
- 同資料では源魂・内部状態も引継ぎ、液晶ステージのみ昼/夕方から再選択とする。
- ただし当時一次/当時解析で「純電断のみ」を完全に分離した同精度表を今回固定できなかったため、内部進捗は `CARRYOVER_SUPPORTED_SECONDARY`、表示契約は `PARTIAL` とする。

### gameCounterReset

- 設定変更: **INTERNAL_CARRY_OVER_CONFIRMED**（周期数・周期残りG）。
- 据え置き: **CARRY_OVER_CONFIRMED**。
- 純電源OFF→ON: **CARRY_OVER_SUPPORTED_SECONDARY**。
- 液晶表示G/周期表示は内部進捗と分離して扱う。

### ceilingAfterReset

- **設定変更専用の短縮天井なし**。
- 設定変更しても9周期天井までの内部進捗を引継ぐため、前日深いハマりはリセット後も宵越し可能。
- resetSpecificFixedCeiling: `NONE_CONFIRMED`。

### modeAfterReset

- 本機の通常時主要管理はモード天井ではなく100G周期 + 源魂/CZ構造。
- 設定変更時専用の通常A/B等のモード振り分けは `NOT_APPLICABLE_AS_PRIMARY_STRUCTURE`。
- 周期内部進捗は引継ぎ。

### stateAfterReset

- 源魂獲得に関わる内部状態は低確A / 低確B / 高確 / 超高確。
- 設定変更時は状態を再抽選とする後年整理資料あり。ただし公開初期振り分けは今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/純電断は状態引継ぎとする整理資料あり。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 最大の朝一実用恩恵は **前日の天井進捗を設定変更後も失わないこと**。深いハマり台はリセット店でも宵越し狙いが成立する。
- リセット専用の短縮天井、朝一専用AT当選率優遇、固定高確保証は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 内部天井進捗が消えないため、一般的なAT機のような「設定変更で前日ハマりを消す」不利はない。
- 液晶表示が初期化される場合、客側が内部進捗を見誤る可能性がある。
- その他の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- **液晶表示について当時資料内で競合あり**。
- すろぱちくえすと本文は「設定変更時は液晶表記上0Gスタート」とし、後段追記でも「設定変更時だとリセット」と記載。
- 同記事のコメント追記には、雑誌情報として「リセットでも液晶ゲーム数・周期数を引継ぐ」とされた経緯があり、その後実戦報告で誤情報の可能性が指摘されている。
- 後年整理資料は設定変更/電断とも周期表示1になるが内部周期進捗は引継ぐとする。
- よって液晶0G/周期1は **変更推測材料にはなり得るが確定判別にしない**。`DISPLAY_BEHAVIOR_CONFLICT` として保持。
- 本機固有ガックンについて、機種名・型式名・朝一・設定変更・ガックンで再探索したが高信頼契約を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- resetInternalCycleCount: **CARRY_OVER**。
- resetInternalCycleRemainingGames: **CARRY_OVER**。
- ceilingCycles: **9周期**。
- nominalCycleLength: **100G+α**。
- nominalCeilingGameEstimate: **約1000G**。
- resetSpecificFixedCeiling: **NONE_CONFIRMED**。
- resetSpecificModeRate: **NOT_APPLICABLE / NONE_CONFIRMED**。
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts

1. payoutRateBySetting:
   - 精密値: 96.95 / 98.17 / 100.16 / 104.14 / 107.70 / 112.86%。
   - 丸め資料: 97.0 / 98.2 / 100.2 / 104.1 / 107.7 / 112.9%。
   - 別丸め: 96.9 / 98.1 / 100.1 / 104.1 / 107.7 / 112.8%。
   - 平均せず、精密独自調査値をcanonical、他は丸め差として保存。
2. baseGamesPer50:
   - 24G/50枚 vs 約25G/50枚。平均しない。
3. resetDisplayBehavior:
   - 設定変更時に液晶0G/周期初期表示とする当時本文・後年整理資料に対し、「リセットでも液晶ゲーム数/周期数を引継ぐ」とされた当時雑誌情報の痕跡あり。
   - 内部進捗引継ぎ自体とは分離し、表示だけ `CONFLICT`。

## missingFields

- 設定変更時の内部状態初期振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン契約: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 純電源OFF→ON時の液晶表示を当時一次資料で完全固定: `UNVERIFIED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. K-Navi — https://p-kn.com/slot/2263/
   - 2015-06-08ホール導入開始、AT/CZ構造。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
2. パチ7 天井 — https://pachiseven.jp/machines/4492/cutout/78
   - 2015-06-08導入、9周期天井、天井時山車演武3個。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
3. P-WORLD — https://www.p-world.co.jp/machine/database/7713
   - 型式パチスロ大工の源さん桜満開KF、検定4S0800、AT初当たり、丸め機械割、AT40G+α/純増約3.0枚/G。
   - confidence: ANALYSIS_HIGH_DATABASE
4. パチマガスロマガ 機種概要 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/24/a.php
   - AT40G、純増約3.0枚/G、ゲーム性。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
5. パチマガスロマガ ボーナス確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/24/h.php
   - AT初当たり1/347.7～1/279.9、PAYOUT96.95～112.86%。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
6. パチマガスロマガ ゲーム性 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/24/l.php
   - 100G周期、源魂別CZ、AT40G+α、純増約3.0枚/G。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
7. パチマガスロマガ 源魂獲得抽選 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/24/06.php
   - 内部状態低確A/B・高確・超高確、源魂構造。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
8. 期待値見える化 — https://slotjin.com/zone/daikunogensan/
   - 24G/50枚、AT初当たり/機械割、9周期天井、設定変更時の周期数・周期残りG引継ぎ。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
9. すろぱちくえすと — https://www.slopachi-quest.com/article/daikuno-gensan/
   - 24G/50枚、設定変更でも内部ゲーム数引継ぎ、液晶表示に関する当時追記・実戦報告。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE_WITH_DISPLAY_CONFLICT
10. スロットガーデン — https://xn--mckza4ard4ttb2d.com/daikunogensan-sakuramankai
   - 9周期天井、設定変更で天井までの周期数をリセットしない。
   - confidence: ANALYSIS_SINGLE_PERIOD_SOURCE
11. クランキーセブン — https://crankyseven.com/daikunogensan-sakura-pc.htm
   - 約25G/50枚、100G周期、AT40G、純増約3.0枚/G。
   - confidence: ANALYSIS_SINGLE
12. 後年整理資料 — https://the-onlinecasino.org/jp/queen-gensan-5gouki/
   - 設定変更/電源OFF→ON時の周期・周期残りG・源魂・内部状態・液晶ステージ整理。
   - 広告性が強いためresetBehavior補助証拠に限定。
   - confidence: ANALYSIS_SINGLE_LOW_FOR_RESET_DETAIL
