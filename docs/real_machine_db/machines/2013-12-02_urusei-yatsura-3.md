# うる星やつら3

machineName: うる星やつら3
aliases: パチスロうる星やつら3 / うる星やつらIII / Urusei Yatsura 3
manufacturer: 銀座
releaseDate: 2013-12-02
releaseDatePrecision: exact_day

generation: 5号機
systemType: AT / 擬似ボーナス / 蓄電型BONUS / 天井 / 技術介入
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- K-Naviでメーカー **銀座**、ホール導入開始 **2013-12-02** を確認。
- P-WORLD / パチマガスロマガでも銀座の5号機AT機として一致。
- 通常のリアルボーナスではなく、約2.9枚/Gのベルナビ回数管理型ATによる4種類の擬似ボーナスを搭載。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 98.5% |
| 3 | 100.6% |
| 4 | 105.3% |
| 5 | 110.4% |
| 6 | 112.3% |

- パチマガスロマガの独自調査値と後年設定判別DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | 擬似ボーナス初当たり | 1G連込み総ボーナス合成 |
|---|---:|---:|
| 1 | 1/169.08 | 1/99.74 |
| 2 | 1/155.07 | 1/96.54 |
| 3 | 1/153.11 | 1/90.86 |
| 4 | 1/124.23 | 1/79.12 |
| 5 | 1/124.01 | 1/69.54 |
| 6 | 1/98.73 | 1/65.47 |

- パチマガスロマガ独自調査値。別解析DBの丸め値（169/155/153/124/124/99、100/97/91/79/70/66）とも整合。
- 初当たりと1G連込み総ボーナス合成を混同しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 50枚あたり通常回転数について、今回の公式・業界・当時解析・古いDB横断で独立した信頼可能な直接値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 推測値は採用しない。

## netIncrease

- 擬似ボーナスAT: **純増約2.9枚/G**。
- P-WORLD / パチマガスロマガで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- HYPER BIG BONUS: **約450枚**（ベルナビ75回）。
- SUPER BIG BONUS: **約240枚**（ベルナビ40回）。
- BIG BONUS: **約120枚**（ベルナビ20回）。
- REGULAR BONUS: **約50枚**（ベルナビ8回）。
- すべてベルナビ回数管理型ATによる擬似ボーナス。
- 各擬似ボーナス中は1G連ストック抽選を行う。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時の規定ゲーム数モード: **通常A / 通常B / 通常C / 天国 / 超天国**。
- モード別最大規定G: 通常A **700G** / 通常B **700G** / 通常C **777G** / 天国 **32G** / 超天国 **32G**。
- レア役解除用の内部状態として低確 / 高確 / 超高確系統が存在し、高確平均約40G・超高確平均約20Gという解析値あり。
- 701G以上まで到達し得るのは通常Cで、通常Cの深部後は天国移行確定とする解析系統あり。
- confidence: ANALYSIS_HIGH_FOR_MODE_CEILINGS

## ceiling

- 擬似ボーナス間の最大天井: **777G** → 擬似ボーナス当選。
- 実際はモード管理で、通常A/B 700G、通常C 777G、天国/超天国 32G。
- 規定ゲーム数前に前兆を伴う場合があるため、データ表示上の発動Gと内部規定Gを混同しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_GAME_COUNTER_CLEAR_CONFIRMED__CARRYOVER_POWER_MODE_STATE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 機種固有解析で **設定変更時は天井到達までのゲーム数がクリア**されることを確認。
- 設定変更後のモード選択率、天国/超天国移行率、低確/高確/超高確の初期振り分けについて、本機（2013年銀座版）に限定して数値を固定できる直接資料を今回確保できず **UNVERIFIED_AFTER_RESEARCH**。
- 2024年スマスロ版「Lうる星やつら」のリセット数値は別機種のため混入禁止。
- confidence: ANALYSIS_MACHINE_SPECIFIC_FOR_COUNTER_CLEAR__UNVERIFIED_FOR_MODE_STATE_DISTRIBUTION

### carryOverBehavior

- 純据え置き時に擬似ボーナス間G数、規定ゲーム数モード、低確/高確/超高確をどのように保持するかを明示した本機固有資料を、据え置き/宵越し/朝一/天井/モードで再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時CLEARの逆を据え置きKEEPとは推定しない。

### powerCycleBehavior

- 設定変更を伴わない単純 **電源OFF→ON** 時の擬似ボーナス間G数、モード、内部状態の保持/初期化を示す本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと純電断を自動同一視しない。

### gameCounterReset

- setting change: **CLEAR_CONFIRMED_MACHINE_SPECIFIC_ANALYSIS**。
- carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更時は前日までの天井進捗を消去し、ゲーム数を0から再計数。
- 設定変更専用の短縮天井値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常モード仕様の32 / 700 / 777Gを、設定変更専用短縮値として扱わない。

### modeAfterReset

- 通常A / 通常B / 通常C / 天国 / 超天国の存在は確認済み。
- 設定変更時の各モード振り分け数値は **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス後の通常モード移行解析と設定変更時移行率を混同しない。

### stateAfterReset

- レア役解除に影響する低確 / 高確 / 超高確系統の状態は存在。
- 設定変更時・据え置き時・純電源OFF→ON時の初期/保持振り分けは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、ボーナス確定、朝一高確/天国の公開確定数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 32G天井の天国/超天国は通常モード仕様であり、設定変更専用恩恵とは断定しない。

### resetPenalties

- 設定変更により前日の擬似ボーナス間天井進捗が消えるため、深い宵越しG数を期待する場合には不利要素。
- モード再選択の有利/不利は設定変更時振り分け未確定のため定量化しない。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ、ランプ、データ表示等による設定変更/据え置き判別契約を十分再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時の前兆/内部状態示唆を朝一変更判別に転用しない。

### publicMorningNumbers

- 設定変更時の天井進捗: **0Gから再スタート**。
- 通常モード最大規定G: 通常A/B **700G** / 通常C **777G** / 天国/超天国 **32G**。
- 設定変更時のモード振り分け・高確振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH。
- 据え置き時の天井G/モード/内部状態: UNVERIFIED_AFTER_RESEARCH。
- 単純電源OFF→ON時の天井G/モード/内部状態: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の通常A/B/C/天国/超天国振り分け: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の低確/高確/超高確振り分け: UNVERIFIED_AFTER_RESEARCH。
- 本機固有の変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- **2024年スマスロ「Lパチスロうる星やつら」**は別機種。555G天井・設定変更時天国約46.9%等の数値を2013年銀座「うる星やつら3」へ混入しない。
- 最大777Gという表現とモード別700/777/32Gは競合ではなく階層差。モード別規定を優先して保持。
- 初当たり確率と1G連込み総ボーナス合成は別指標。
- 設定変更時天井G CLEARから、据え置き/純電断時KEEPを推定しない。

## sources

取得日: 2026-09-06

- K-Navi うる星やつら3: https://p-kn.com/slot/1961/ — 銀座、2013-12-02導入、擬似ボーナス仕様・獲得枚数。
- P-WORLD うる星やつら3: https://www.p-world.co.jp/machine/database/7245 — 銀座、5号機AT、約2.9枚/G、4種擬似ボーナス・獲得枚数。
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/12/a.php — 2013年12月、純増約2.9枚/G、擬似ボーナス獲得枚数。
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/12/h-1.php — 設定別初当たり・総ボーナス合成・PAYOUT。
- CrankySeven うる星やつら3解析: https://crankyseven.com/urusei3-pc.htm — 777G天井、設定変更時天井Gクリア、モード別天井、内部状態。
- 期待値見える化: https://slotjin.com/zone/uruseiyatsura3-1/ — 通常A/B 700G、通常C 777G、天国32G、実践値/モード解析。
- 設定判別DB: https://pacnk.com/slot/tools/sh_urusei3.html — 設定別初当たり・総合算・PAYOUTの後年照合用。
