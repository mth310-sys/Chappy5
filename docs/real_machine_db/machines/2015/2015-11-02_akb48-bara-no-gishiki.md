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
- 京楽産業.公式が **2015-11-02「全国導入スタート」** と明記。K-Navi等でも同日を照合。
- 公式はA+ART機と明記。
- 正式型式名・検定番号は、型式/検定番号/5S/メーカー/表記揺れで公式・業界DB・古い解析を再探索したが、同名パチンコ系統と混同せず固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting
| 設定 | 機械割 canonical |
|---:|---:|
| 1 | 97.4% |
| 2 | 99.0% |
| 3 | 100.2% |
| 4 | 103.9% |
| 5 | 107.1% |
| 6 | 111.2% |

- 複数解析で上記系列を確認。一部整理資料に設定1 **98.2%** 表記があり、平均せず `PAYOUT_SETTING1_97_4_VS_98_2` として保持。

## initialHitBySetting
| 設定 | ボーナス合算 | ART「神曲RUSH」初当たり canonical |
|---:|---:|---:|
| 1 | 1/297.9 | 1/404.8 |
| 2 | 1/293.9 | 1/393.1 |
| 3 | 1/282.5 | 1/386.4 |
| 4 | 1/265.3 | 1/356.8 |
| 5 | 1/255.0 | 1/326.6 |
| 6 | 1/242.7 | 1/278.5 |

- pacnk精密値と、ちょんぼりすたの丸め系列を照合。
- 別解析のART系列 **1/401 / 389 / 381 / 353 / 323 / 277** は `ART_INITIAL_HIT_EXACT_TABLE_VS_ALTERNATE_SERIES` として平均せず保持。

## baseGamesPer50
- canonical: **約33.9G/50枚**。約34G表記は丸め差。

## netIncrease
- ART単体純増: **約1.5枚/G**。
- ボーナス込み約2.0枚/G表記は別定義として分離。

## basicPayout
- BIG: **約200枚**。
- REG / じゃんけんBONUS: **約48枚**。
- ARTはゲーム数上乗せ型。初期ゲーム数はOverture / DDチャージ等で決定。完全再現用の詳細振り分けは対象外。

## modeSpecificMinimumData
- 通常天井: **ボーナス・ART間999G → ART**。
- ゲーム数シナリオA/B/Cを持ち、**96G / 480G / 777G**で高確移行抽選。777Gは高確以上。
- シナリオ移行契機に設定変更、ボーナス終了、ART終了を含む。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_CORE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井RESET**。
- **内部モード/ゲーム数シナリオ再抽選**。
- 設定変更時は **シナリオB以上**。
- 固定のリセット専用短縮最大天井は確認できず、999Gを0から再カウント。

### carryOverBehavior
- 据え置き専用の独立比較表は固定できなかったため、純電源OFF→ON直接比較と宵越し文脈から **天井進捗・内部モード CARRYOVER_SUPPORTED**。
- 据え置きと純電断は同義化せず分離記録。

### powerCycleBehavior
- 純電源OFF→ONのみ: **天井ゲーム数 CARRYOVER / 内部モード CARRYOVER**。
- ステージは当時比較資料で「調査中」→ `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_SINGLE_DIRECT_COMPARISON

### gameCounterReset
- settingChange: **RESET**
- carryOver: **CARRYOVER_SUPPORTED**
- purePowerCycle: **CARRYOVER**

### ceilingAfterReset
- normal: **999G**。
- settingChange: **999Gを0から再カウント**。
- fixedShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset
- settingChange: **RESELECTED** / purePowerCycle: **CARRYOVER**。

| 設定 | シナリオA | B | C |
|---:|---:|---:|---:|
| 1/3/5 | 0% | 65% | 35% |
| 2/4/6 | 0% | 15% | 85% |

- 具体振り分けは現存する単一解析系統のため `ANALYSIS_SINGLE_DIRECT_NUMERIC`。

### stateAfterReset
- 設定変更時はB/Cのみ。
- B: 96G **高確60 / 超高40%**、480G **75/25%**、777G **50/50%**。
- C: 96G **高確30 / 超高70%**、480G **10/90%**、777G **10/90%**。
- 0G直後の瞬間的な初期状態分布は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更でB以上となり、**朝一96Gの高確/超高確移行が強い**。
- 別解析の「リセット後約95GまでART期待度約25%」はメーカー公表ではなく、状態移行率と別指標として `ANALYSIS_SINGLE` で分離。

### resetPenalties
- 前日の天井進捗は設定変更で失われる。
- その他の設定変更固有不利は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 朝一数Gで高確示唆ステージへ移行した場合、設定変更可能性が上がるとする解析あり。ただし確定ではない。
- 本機固有ガックン/初期出目/ランプ等は表記・検索語を変えて再探索したが固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- reset max ceiling: **999G**（0から再カウント）。
- 1/3/5: **B65% / C35%**。
- 2/4/6: **B15% / C85%**。
- 96G: B **60/40%**、C **30/70%**（高確/超高確）。
- purePowerCycle: **天井・内部モード CARRYOVER**。

## conflicts
- `PAYOUT_SETTING1_97_4_VS_98_2`: 97.4% vs 98.2%。canonical 97.4%。
- `ART_INITIAL_HIT_EXACT_TABLE_VS_ALTERNATE_SERIES`: 1/404.8〜1/278.5 vs 1/401〜1/277。
- 95G ART期待度約25%と96G状態移行率は別指標でありCONFLICT扱いしない。

## missingFields
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- resetImmediateStateAt0G: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleStageDisplay: `UNVERIFIED_AFTER_RESEARCH`
- resetDetectionDedicatedCue: `NONE_CONFIRMED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. 京楽産業.公式 — 全国導入スタート（2015-11-02）
   - https://www.kyoraku.co.jp/news/20151102.php
   - exact date / A+ART。reliability: OFFICIAL
2. ちょんぼりすた — AKB48バラの儀式 スロット 天井・解析情報まとめ
   - https://chonborista.com/slot/kyoraku-slot/12160/
   - 天井999G、設定変更/電源ON-OFF比較、シナリオB/C、96/480/777G状態、機械割・初当たり。reliability: ANALYSIS_HIGH / reset numeric ANALYSIS_SINGLE_DIRECT_NUMERIC
3. pacnk — ぱちスロ AKB48 バラの儀式 設定判別ツール
   - https://pacnk.com/slot/tools/sh_akb482015.html
   - ボーナス合算、ART初当たり精密値、設定変更時天井リセット。reliability: ANALYSIS_SINGLE_TABLE
4. K-Navi — ぱちスロAKB48 バラの儀式
   - https://p-kn.com/slot/
   - 導入日・基本仕様照合。reliability: ANALYSIS_HIGH
5. P-WORLD / パチマガスロマガ / 期待値見える化の現存機種資料も、獲得枚数・純増・別系列値・朝一立ち回り値の相互照合に使用。

## confidence
- exactReleaseDate: OFFICIAL_PLUS_MULTI_SOURCE_HIGH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- payoutRate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING1_CONFLICT
- initialHit: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT
- settingChangeBehavior: ANALYSIS_HIGH_DIRECT_RESET_COMPARISON
- carryOverBehavior: ANALYSIS_HIGH_SUPPORTED_BY_PURE_POWER_AND_OVERNIGHT_CONTEXT
- purePowerCycleBehavior: ANALYSIS_SINGLE_DIRECT_COMPARISON
- resetScenarioNumeric: ANALYSIS_SINGLE_DIRECT_NUMERIC
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- formalIdentity: UNVERIFIED_AFTER_RESEARCH
