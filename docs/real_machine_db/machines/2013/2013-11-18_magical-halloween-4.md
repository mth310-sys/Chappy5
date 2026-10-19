# マジカルハロウィン4

machineName: マジカルハロウィン4
aliases: マジハロ4 / マジカルハロウィン４
manufacturer: KPE
releaseDate: 2013-11-18
releaseDatePrecision: exact_day

generation: 5号機
systemType: ART / 擬似ボーナス / CZ / ゲーム数管理 / 天井
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- K-Navi / ALL7 / パチビーでホール導入開始・導入予定 **2013-11-18** を確認。
- KONAMI公式の後年回顧でもマジカルハロウィン4を **2013年** のシリーズ作品として確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_OFFICIAL_RETROSPECTIVE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.6% |
| 3 | 100.5% |
| 4 | 104.2% |
| 5 | 108.1% |
| 6 | 113.2% |

- パチマガスロマガ / CrankySeven / 2-9伝説で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 擬似ボーナス合算

| 設定 | 確率 |
|---|---:|
| 1 | 1/249.7 |
| 2 | 1/241.5 |
| 3 | 1/242.4 |
| 4 | 1/234.1 |
| 5 | 1/237.1 |
| 6 | 1/219.4 |

### ART初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/499.9 |
| 2 | 1/490.8 |
| 3 | 1/489.0 |
| 4 | 1/423.3 |
| 5 | 1/409.3 |
| 6 | 1/335.6 |

- パチマガスロマガ / CrankySevenで一致。K-Naviでも擬似ボーナス合算を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- パチマガスロマガに「1000円あたりのゲーム数」解析項目が存在することまでは確認したが、現存取得本文から数値本体を安全に回収できなかった。
- 後年整理資料に約33G/50枚の記述があるが、一次・当時解析との直接照合不足のため本レコードでは固定せず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: UNVERIFIED

## netIncrease

- ART「マジカルラッシュ」は **純増約2.0枚/G**。
- パチビー / 2-9伝説 / CrankySevenで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG BONUS: **60G**。
- REG BONUS: **30G**。
- ART「マジカルラッシュ」: **1セット40G+α**、純増約2.0枚/G。
- CZ「どっか～ん★チャレンジ」: 15G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナス解除モードは **通常A / 通常B / 天国A / 天国B** の4モード。
- 通常A/B最大 **777G**、天国A/B最大 **96G**。
- 低確 / 高確の状態が存在し、高確時はCZ・ART関連抽選が優遇。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## ceiling

- 擬似ボーナス間最大 **777G** で擬似ボーナス当選。
- 通常A/B最大777G、天国A/B最大96G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__GAME_COUNTER_CLEAR_AND_CARRYOVER_EVIDENCE_CONFIRMED__MODE_STATE_POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- CrankySeven / 2-9伝説で **設定変更後は天井到達までのゲーム数クリア**を確認。
- パチマガスロマガでは設定変更時にも滞在ボーナス解除モードを参照してフェイク前兆テーブルを決定すると記載されており、設定変更後にモードが存在することは直接確認できる。
- ただし設定変更時のモード振り分けそのものは今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_FOR_GAME_COUNTER_CLEAR__PARTIAL_FOR_MODE

### carryOverBehavior

- 2014年当時の「真パチスロ備忘録」で据え置き時は **当日G数+前日G数でフェイクまたは本前兆発生**と整理されている。
- 前日ゲーム数を参照する挙動から宵越しゲーム数が機能する有力な当時資料として保持するが、モード・低高確状態まで含む完全保持契約は確認できずPARTIAL。
- confidence: ANALYSIS_SINGLE_PERIOD_SOURCE

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ONについて、ゲーム数・モード・低高確状態の保持/初期化を本機固有に直接示す資料を、機種名/KPE/朝一/電断/電源OFF ON/据え置き等で再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと電源OFF→ONを自動同一視しない。

### gameCounterReset

- setting change: **CLEAR_CONFIRMED_ANALYSIS_MULTI_SOURCE**。
- carry-over: **CARRYOVER_SUPPORTED_ANALYSIS_SINGLE_PERIOD_SOURCE** — 当日G+前日Gで前兆発生。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更で天井Gはクリア。
- 設定変更専用の短縮天井数値は確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常モードの最大777G、天国モードの最大96Gは通常仕様であり、リセット専用短縮として扱わない。

### modeAfterReset

- 設定変更後にも通常A/B・天国A/Bいずれかの解除モードが存在することは解析構造から確認。
- 設定変更専用モード振り分け値は **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 通常時には低確/高確が存在する。
- 設定変更時の低確/高確初期振り分け、魔界状態の初期化契約は十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、朝一ART/CZ確定、専用高確率などの直接恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更で前日までの天井ゲーム数進捗が消えるため、深い宵越しゲーム数を失う点はホール経営/朝一客行動上の不利要素として記録。
- 期待値の定量推計は行わない。

### resetDetection

- 本機はPUSH操作等でボーナス間ゲーム数を確認できる資料があり、据え置き時は前日+当日G数による前兆発生が判別材料になり得る。
- ガックン、初期出目、液晶初期ステージ、ランプ等による直接的な変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時天井G: **0から再スタート / 最大777G（通常モード時）**。
- 設定変更専用モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時モード振り分け: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の低確/高確初期状態: UNVERIFIED_AFTER_RESEARCH。
- 単純電源OFF→ON時のゲーム数/モード/状態: UNVERIFIED_AFTER_RESEARCH。
- ガックン等の直接変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- 後年整理資料に天井恩恵をART当選とする記述があるが、当時解析では777G到達で擬似ボーナス当選とされるため、後年の誤記を本線へ採用しない。
- 通常A/B=777G、天国A/B=96Gという通常モード天井を、設定変更専用短縮天井と混同しない。
- 設定変更でG数がクリアされることから、モード・内部状態まで全てリセットされるとは推定しない。

## sources

取得日: 2026-09-06

- KONAMI公式「まじおつ◎」: https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20200403.html — マジカルハロウィン4を2013年作品として公式回顧。
- ALL7 2013年11月導入一覧: https://www.all7.jp/plans/index/2013/11 — 2013-11-18導入予定。
- パチビー: https://www.pachibee.jp/machines/index/213100006 — 2013-11-18、5号機ART、BIG60G、REG30G、ART40G+α、純増約2.0枚/G。
- K-Navi: https://p-kn.com/slot/1945/ — 2013-11-18、擬似ボーナス合算、ART/天井/設定変更解析メニューの存在。
- パチマガスロマガ確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/34/h-1.php — 擬似ボーナス、ART初当たり、PAYOUT。
- パチマガスロマガ小役: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/34/c.php — 1000円あたりゲーム数項目の存在、小役解析。
- パチマガスロマガ前兆: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/34/ens02.php — 設定変更時&ボーナス後の解除モード参照フェイク前兆テーブル。
- CrankySeven基本スペック: https://www.crankyseven.com/sp/magicalhalloween4-3-pc.htm — 擬似ボーナス、ART初当たり、機械割。
- CrankySeven天井: https://www.crankyseven.com/sp/magicalhalloween4-12-pc.htm — 777G天井、設定変更後G数クリア。
- CrankySevenモード: https://www.crankyseven.com/sp/magicalhalloween4-6-pc.htm — 通常A/B 777G、天国A/B 96G。
- CrankySeven状態: https://www.crankyseven.com/sp/magicalhalloween4-7-pc.htm — 低確/高確、魔界ステージ。
- 2-9伝説: https://29den.com/magicalhalloween4/ — スペック、天井、設定変更G数リセット照合。
- 真パチスロ備忘録: https://sin-surobi.com/notebook/3111/ — 2014-03-29当時資料。設定変更G数リセット、据え置き時は当日G数+前日G数で前兆発生。
