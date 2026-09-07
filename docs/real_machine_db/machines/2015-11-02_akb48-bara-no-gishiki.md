# ぱちスロAKB48 バラの儀式

machineName: ぱちスロAKB48 バラの儀式
manufacturer: 京楽産業.
releaseDate: 2015-11-02
releaseDatePrecision: exact_nationwide_hall_start_official
recordNumber: 929
generation: 5号機
systemType: A+ART / ゲーム数上乗せ型ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 京楽産業.公式が **2015-11-02「全国導入スタート」** と告知。K-Navi、グリーンべると等でも同日導入を照合。
- 5号機A+ART。ART「神曲RUSH」はゲーム数上乗せ型。
- 正式型式名・検定番号は「型式」「検定番号」「5S」「京楽」「AKB48 バラの儀式」等の表記を変え、公式・機種DB・攻略資料を再探索したが、パチンコ版同名系統との混同なく固定できる直接資料を取得できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting

| 設定 | 機械割 canonical |
|---:|---:|
| 1 | 97.4% |
| 2 | 99.0% |
| 3 | 100.2% |
| 4 | 103.9% |
| 5 | 107.1% |
| 6 | 111.2% |

- 複数解析資料で上記系列が一致。
- 一方、別整理資料に設定1のみ **98.2%** 表記があるため、平均せず `PAYOUT_SETTING1_97_4_VS_98_2` としてCONFLICT保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING1_CONFLICT

## initialHitBySetting

### ボーナス合算
| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/297.9 |
| 2 | 1/293.9 |
| 3 | 1/282.5 |
| 4 | 1/265.3 |
| 5 | 1/255.0 |
| 6 | 1/242.7 |

### ART「神曲RUSH」初当たり canonical
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/404.8 |
| 2 | 1/393.1 |
| 3 | 1/386.4 |
| 4 | 1/356.8 |
| 5 | 1/326.6 |
| 6 | 1/278.5 |

- 別資料ではART初当たりが **1/401 / 389 / 381 / 353 / 323 / 277** とされる。丸め幅を超える設定があるため平均せず `ART_INITIAL_HIT_EXACT_TABLE_VS_ALTERNATE_ROUNDED_SERIES` として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT

## baseGamesPer50
- canonical: **約33.9G/50枚**。
- 別資料の「約34G/50枚」は丸め差として同一定義扱い。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「神曲RUSH」単体純増: **約1.5枚/G**。
- ボーナス込みの実質純増を **約2.0枚/G** とする解析もあるため、単体純増と定義分離して保持。
- 京楽公式/K-Navi系紹介、P-WORLD、複数解析でART単体約1.5枚/Gを照合。
- confidence: OFFICIAL_OR_INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG: **約200枚**。
- REG: **約48枚**。
- じゃんけんBONUS: **約48枚**。
- ART「神曲RUSH」はゲーム数上乗せ型。初期ゲーム数は「Overture / DDチャージ」等で決定し、公開解析では獲得アイコン1個につき最低10G相当。
- 完全再現用のアイコン振り分け・上乗せ詳細抽選は本DB範囲外。

## modeSpecificMinimumData
- 通常天井: **ボーナス・ART間999G到達でART**。到達後は前兆/待機を経てARTへ。
- 内部ゲーム数シナリオA/B/Cが存在し、規定ポイント **96G / 480G / 777G** で高確以上への移行抽選。777Gは公開解析上、高確以上確定。
- シナリオはボーナス終了、ART終了、設定変更等を契機に再選択。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_CORE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井ゲーム数RESET**。
- **内部モード/シナリオを再抽選**。
- 設定変更時は公開解析上、ゲーム数シナリオ **B以上**。
- 固定の「999G→○G」というリセット専用最大天井短縮は確認できず、通常999Gを0から再カウントする扱い。

### carryOverBehavior
- 据え置き専用の独立比較表は固定できなかったため、純電源OFF→ONの直接比較と宵越し文脈から、**天井進捗・内部モードはCARRYOVER_SUPPORTED** とする。
- 据え置きと純電断を同義にはせず、直接確認できた純電断契約を下段へ分離。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON:
  - **天井ゲーム数: CARRYOVER**
  - **内部モード: CARRYOVER**
  - 朝一ステージ表示: 当時比較資料で「調査中」扱いのため `UNVERIFIED_AFTER_RESEARCH`
- confidence: ANALYSIS_SINGLE_DIRECT_COMPARISON

### gameCounterReset
- settingChange: **RESET**
- carryOver: **CARRYOVER_SUPPORTED**
- purePowerCycle: **CARRYOVER**

### ceilingAfterReset
- 通常天井: **ボーナス・ART間999G**。
- 設定変更後: **999Gを0から再カウント**。
- 固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井恩恵: ART当選。

### modeAfterReset
- settingChange: **RESELECTED**。
- purePowerCycle: **CARRYOVER**。
- 設定変更時ゲーム数シナリオ振り分け（公開解析）:

| 設定 | シナリオA | シナリオB | シナリオC |
|---:|---:|---:|---:|
| 1 | 0% | 65% | 35% |
| 2 | 0% | 15% | 85% |
| 3 | 0% | 65% | 35% |
| 4 | 0% | 15% | 85% |
| 5 | 0% | 65% | 35% |
| 6 | 0% | 15% | 85% |

- この具体振り分けは現存する単一解析系統で直接取得したため `ANALYSIS_SINGLE_DIRECT_NUMERIC`。別系統の同一表を十分再探索したが固定できなかった。

### stateAfterReset
- 設定変更時はシナリオB/Cへ再選択され、特に朝一 **96G** が状態上昇ポイントとして強化される。
- 公開シナリオ別96G振り分け:
  - シナリオB: **高確60% / 超高確40%**
  - シナリオC: **高確30% / 超高確70%**
- 480G:
  - B: **高確75% / 超高確25%**
  - C: **高確10% / 超高確90%**
- 777G:
  - B: **高確50% / 超高確50%**
  - C: **高確10% / 超高確90%**
- 設定変更直後0G時点の瞬間的な低確/高確初期状態そのものは直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時はシナリオB以上が確定し、**96Gの高確/超高確移行が強い**ことが主要朝一恩恵。
- 別解析では「リセット後約95GまでのART期待度約25%」とする立ち回り値もある。メーカー公表値ではなく、96Gの状態移行率とは異なる指標のため `ANALYSIS_SINGLE` として定義分離。

### resetPenalties
- 前日の天井進捗は設定変更で失われる。
- その他、設定変更固有の明確な不利要素は十分な再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 朝一数Gで高確示唆ステージへ移行した場合、設定変更期待が上がるとする当時解析あり。ただし確定判別ではない。
- 本機固有のガックン、初期出目、ランプ等による確定的変更判別は、機種名/表記揺れ + ガックン/リセット/朝一/据え置き/電源OFF ON等で再探索したが直接資料を固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- normal/reset maximum ceiling: **999G**（設定変更時は0から再カウント）。
- reset scenario distribution:
  - settings 1/3/5: **B 65% / C 35%**
  - settings 2/4/6: **B 15% / C 85%**
- reset scenario A: **0%**。
- 96G state distribution:
  - B = **高確60% / 超高確40%**
  - C = **高確30% / 超高確70%**
- secondary morning ART expectation: **リセット後約95Gまで約25%**（ANALYSIS_SINGLE、状態移行率とは別指標）。
- pure power-cycle: **天井・内部モードCARRYOVER**。

## conflicts
- `PAYOUT_SETTING1_97_4_VS_98_2`: 複数解析の設定1機械割97.4%に対し、一部整理資料で98.2%。平均せず97.4%をcanonical、98.2%も競合値として保存。
- `ART_INITIAL_HIT_EXACT_TABLE_VS_ALTERNATE_ROUNDED_SERIES`: canonical 1/404.8〜1/278.5に対し、別資料1/401〜1/277。平均せず双方保持。
- 95G「ART期待度約25%」は96Gの高確/超高確移行率とは測定対象が異なるため、CONFLICTではなく定義分離。

## missingFields
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`。
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- resetImmediateStateAt0G: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleStageDisplay: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetectionDedicatedCue: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-08

1. 京楽産業.公式 — 〈ぱちスロAKB48 バラの儀式〉全国導入スタート!!（2015-11-02）
   - https://www.kyoraku.co.jp/news/2015/11/02/20151102_akb48_slot/
   - 2015-11-02全国導入開始。
   - reliability: OFFICIAL
2. 京楽産業.公式 — ぱちスロAKB48 バラの儀式機種サイト/発表（2015-10-07）
   - https://www.kyoraku.co.jp/
   - A+ART機としての公式告知系統。
   - reliability: OFFICIAL
3. グリーンべると — ぱちスロAKB48 バラの儀式 全国導入（2015-11-02）
   - https://web-greenbelt.jp/
   - 全国導入開始日を業界媒体で照合。
   - reliability: INDUSTRY
4. K-Navi — ぱちスロAKB48 バラの儀式
   - https://p-kn.com/slot/
   - 導入開始2015-11-02、A+ART、ART純増約1.5枚/G等。
   - reliability: ANALYSIS_HIGH
5. P-WORLD — ぱちスロAKB48 バラの儀式 機種情報
   - https://www.p-world.co.jp/
   - 京楽、5号機ART、ART約1.5枚/G、BIG約200枚、REG/じゃんけんBONUS約48枚。
   - reliability: INDUSTRY_DATABASE
6. pacnk — ぱちスロAKB48 バラの儀式 解析
   - https://pacnk.com/
   - 設定別ボーナス合算、ART初当たり、機械割の精密系列。
   - reliability: ANALYSIS_SINGLE_TABLE
7. パチマガスロマガ — ぱちスロAKB48 バラの儀式
   - https://cs62.cs-plaza.com/
   - A+ART、純増約1.5枚/G、ART基本構造。
   - reliability: ANALYSIS_HIGH
8. ちょんぼりすた — ぱちスロAKB48 バラの儀式 解析
   - https://chonborista.com/
   - スペック、33.9G/50枚級、天井、設定変更時シナリオB/C振り分け、96/480/777G状態振り分け。
   - reliability: ANALYSIS_HIGH / reset numeric ANALYSIS_SINGLE_DIRECT_NUMERIC
9. 期待値見える化 — AKB48 バラの儀式 スペック/リセット解析
   - https://slotjin.com/
   - 機械割、ART初当たり別系列、約34G/50枚、ART単体約1.5枚/G、リセットゾーン評価。
   - reliability: ANALYSIS_HIGH_WITH_CONFLICT
10. 朝一設定変更/電源OFF ON比較資料（現存解析）
   - 設定変更: 天井RESET・内部モード再抽選。電源OFF→ON: 天井/内部モード引継ぎ。ステージは調査中。
   - reliability: ANALYSIS_SINGLE_DIRECT_COMPARISON

## confidence
- exactReleaseDate: OFFICIAL_PLUS_INDUSTRY_HIGH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- payoutRate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING1_CONFLICT
- initialHit: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- netIncrease: OFFICIAL_OR_INDUSTRY_PLUS_ANALYSIS_HIGH
- settingChangeBehavior: ANALYSIS_HIGH_DIRECT_RESET_COMPARISON
- carryOverBehavior: ANALYSIS_HIGH_SUPPORTED_BY_PURE_POWER_AND_OVERNIGHT_CONTEXT
- purePowerCycleBehavior: ANALYSIS_SINGLE_DIRECT_COMPARISON
- resetScenarioNumeric: ANALYSIS_SINGLE_DIRECT_NUMERIC
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- formalIdentity: UNVERIFIED_AFTER_RESEARCH
