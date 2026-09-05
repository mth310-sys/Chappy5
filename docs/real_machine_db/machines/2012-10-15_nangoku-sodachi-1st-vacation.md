# キュインぱちすろ南国育ち 1st vacation

machineName: キュインぱちすろ南国育ち 1st vacation
manufacturer: オリンピア
releaseDate: 2012-10-15
releaseDatePrecision: exact_day_conflict
releaseDateNotes: K-Naviは「ホール導入開始 2012年10月15日」と明記。一方、HAZUSE・パチビー・ALL7.jpは2012-10-22、2012-08-30のグリーンべると業界発表は「納品開始は10月21日からの予定」とする。10/15単独値と、10/21納品予定→10/22導入の複数系列が競合するため平均しない。時系列の漏れ防止を優先し、本線キーは確認できる最早の具体日2012-10-15とし、DATE_CONFLICTとして全根拠を保持する。
generation: 5号機
systemType: ART / 疑似ボーナス / ゲーム数管理 / CZ / 天井あり
modelName: キュインぱちすろ南国育ちY
approvalNumber: 2S0776
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_DATE_CONFLICT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 2 | 98.2% |
| 3 | 100.6% |
| 4 | 105.7% |
| 5 | 110.9% |
| 6 | 119.2% |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

HAZUSE、K-Navi、CrankySevenで一致。

## initialHitBySetting

### ART初当り・合成確率

| 設定 | ART初当り | 合成確率 |
|---|---:|---:|
| 1 | 1/279.2 | 1/236.8 |
| 2 | 1/267.2 | 1/234.7 |
| 3 | 1/250.3 | 1/232.1 |
| 4 | 1/221.9 | 1/221.0 |
| 5 | 1/190.5 | 1/210.0 |
| 6 | 1/149.8 | 1/200.6 |

- 「合成確率」は資料掲載名称を保持。実ボーナス非搭載で疑似ボーナスはART中に抽選されるため、通常のAタイプのボーナス合算と同定しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30G/50枚（1000円）**
- 当時系スペック紹介および後年整理資料で約30G/千円を確認。
- メーカー一次資料の直接値までは今回確認できず。
- confidence: ANALYSIS_MULTI_SOURCE_SECONDARY

## netIncrease

- ART「南国RUSH」: **約+2.0枚/G**
- 1セット **50G+α**。
- グリーンべると当時業界記事、HAZUSE、パチビー、K-Navi、必勝本で一致。
- confidence: INDUSTRY_PLUS_MULTI_SOURCE_HIGH

## basicPayout

- 疑似BIG（赤7/青7）: **50G / 約100枚**
- 疑似REG（BAR）: **20G / 約40枚**
- 赤7/青7/BARはいずれも実ボーナスではなくARTを用いた疑似ボーナス。
- 青7BIGは1G連確定とする解析あり。
- confidence: ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時ART当選は、規定ゲーム数消化または8GのCZ「飛翔チャレンジ」が主経路。
- CZ「飛翔チャレンジ」ART期待度: **約30%**。
- ゲーム数モードは **通常A / 通常B / 天国 / 超天国** の4種類。
- 通常A/Bの最大規定G数: **1280G**。
- 天国/超天国の最大規定G数: **128G**。
- ART「南国RUSH」: 1セット50G+α、約+2.0枚/G、ゲーム数上乗せ型。
- 疑似ボーナス1G連は初回赤7/BAR約25%、2連目以降は約80%ループとする業界/解析資料あり。
- confidence: INDUSTRY_PLUS_CONTEMPORARY_ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: SUBSTANTIAL_RESET_QA
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **CONFIRMED_CLEAR_GAME_COUNTER_RELOT_MODE_RELOT_STATE**
- 設定変更で天井ゲーム数をリセット、ゲーム数モードを再セット、内部状態を再セット。
- 液晶はビーチ or プールから開始し、振り分けは1:1。
- confidence: ANALYSIS_HIGH_DIRECT_MULTI_SOURCE

### carryOverBehavior

- **POWER_CYCLE_WITHOUT_SETTING_CHANGE_CONFIRMED_BROAD_CARRYOVER; PURE_UNCHANGED_CONTRACT_PARTIAL**
- 必勝本の電源OFF/ON項目で、ビーチ/プール表示の再振り分けとART中キャラ表示の一部変化を除き「それ以外は全て引き継ぐ」と明記。
- したがって、少なくとも設定変更を伴わない通常の電断復帰では、ゲーム数・モード・内部状態等が設定変更時のように初期化されないことを直接確認できる。
- 「設定も電源も一切触らない純据え置き」の項目別契約を別立てで列挙した資料までは確認していないため、表現は電断復帰の直接契約を優先する。

### powerCycleBehavior

- **CONFIRMED_CARRYOVER_WITH_DISPLAY_EXCEPTIONS**
- ビーチ or プール滞在時は電源OFF→ONでビーチ/プールを1:1再振り分け。
- ART中のキャラがジョディだった場合はまどかに変化。
- **それ以外は全て引き継ぐ**と解析資料に明記。
- 設定変更との差が明確な機種として保存。
- confidence: CONTEMPORARY_ANALYSIS_DIRECT

### gameCounterReset

- **CONFIRMED_CLEAR_ON_SETTING_CHANGE / RETAIN_ON_POWER_CYCLE**
- 設定変更で天井到達までのゲーム数をクリア。
- 電源OFF→ONのみでは「それ以外は全て引き継ぐ」の対象として保持。

### ceilingAfterReset

- **MAX_1280G_AFTER_SETTING_CHANGE_MODE_RELOTTERY**
- 通常A/Bなら最大1280G、天国なら最大128G。
- 設定変更専用の固定短縮天井は確認されないが、再セット先モードが天国なら128G以内となるためモード再抽選由来の朝一短縮可能性がある。
- 超天国は設定変更時振り分け表に掲載されず、設定変更直後は通常A/B/天国の3行合計100%として扱う。

### modeAfterReset

- **CONFIRMED_RELOTTERY_ON_SETTING_CHANGE**
- K-Navi公開の設定変更時モード移行率:

| 設定 | 通常A | 通常B | 天国 |
|---|---:|---:|---:|
| 1 | 75.00% | 20.00% | 5.00% |
| 2 | 72.16% | 22.50% | 5.34% |
| 3 | 69.35% | 25.00% | 5.65% |
| 4 | 66.39% | 27.50% | 6.10% |
| 5 | 63.28% | 30.00% | 6.71% |
| 6 | 59.16% | 33.33% | 7.50% |

- 数値はK-Navi自社調べ。丸め値を再正規化しない。
- 設定変更時に天国が選ばれれば最大128G。
- confidence: CONTEMPORARY_ANALYSIS_DIRECT_NUMERIC

### stateAfterReset

- **CONFIRMED_RELOTTERY_ON_SETTING_CHANGE**
- 必勝本公開値:
  - 低確: **94.90%**
  - 高確: **5.00%**
  - 超高確: **0.10%**
- 合計100.00%。
- 通常時の全状態移行テーブルはDB目的外のため収集しない。
- confidence: CONTEMPORARY_ANALYSIS_DIRECT_NUMERIC

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **MODE_RELOTTERY_CAN_SELECT_TENGOKU_AND_STATE_CAN_START_HIGH**
- 設定変更直後に天国選択率が設定1 5.00%～設定6 7.50%。天国なら最大128G。
- 高確5.00% + 超高確0.10% = **高確以上5.10%**で朝一開始。

### resetPenalties

- **PREVIOUS_GAME_COUNT_AND_MODE_PROGRESS_LOST_ON_SETTING_CHANGE**
- 前日の規定G数進捗は設定変更でクリア。
- 前日モードも再セットされるため、深いハマリや有利なモードの宵越し価値を失う。

### resetDetection

- **PARTIAL_STAGE_BEHAVIOR_CAN_NEGATE_SETTING_CHANGE_IN_LIMITED_CASES**
- 設定変更時は必ずビーチ or プール開始（1:1）。
- 電源OFF/ONのみでは、ビーチ/プール滞在なら同2ステージを1:1再振り分けするが、それ以外は引継ぎ。
- よって前日閉店時にビーチ/プール以外の状態・表示が明確に把握でき、朝一もそれを引き継いでいるケースは設定変更否定材料になり得る。
- ビーチ/プール開始だけでは設定変更と電断を判別できない。
- 本機固有のリールガックン確定契約は、機種名/型式/メーカーと「ガックン/設定変更/朝一」を組み替えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- **CONFIRMED**
- 設定変更時モード振り分け: 上表。
- 設定変更時内部状態: 低確94.90 / 高確5.00 / 超高確0.10%。
- 朝一天国選択: 設定1 5.00%～設定6 7.50%。
- 朝一高確以上: 全設定共通 **5.10%**。
- 設定変更時液晶初期ステージ: ビーチ/プール **1:1**。

### numericResetData

- normalModeMaxCeiling: 1280G
- heavenModeMaxCeiling: 128G
- settingChangeGameCounter: CLEAR
- settingChangeMode: RELOTTERY
- settingChangeState: RELOTTERY
- settingChangeScreenStage: {beach: 50%, pool: 50%}
- powerCycleBaseStageRedistribution: {beach: 50%, pool: 50%}
- powerCycleOtherData: CARRY_OVER_EXCEPT_DOCUMENTED_DISPLAY_EXCEPTIONS
- settingChangeModeDistributionPct:
  - setting1: {normalA: 75.00, normalB: 20.00, heaven: 5.00}
  - setting2: {normalA: 72.16, normalB: 22.50, heaven: 5.34}
  - setting3: {normalA: 69.35, normalB: 25.00, heaven: 5.65}
  - setting4: {normalA: 66.39, normalB: 27.50, heaven: 6.10}
  - setting5: {normalA: 63.28, normalB: 30.00, heaven: 6.71}
  - setting6: {normalA: 59.16, normalB: 33.33, heaven: 7.50}
- settingChangeStateDistributionPct: {low: 94.90, high: 5.00, superHigh: 0.10}

resetQaReliability: CONTEMPORARY_DIRECT_ANALYSIS_FOR_SETTING_CHANGE_MODE_STATE_AND_POWER_CYCLE__GACCHAN_UNVERIFIED_AFTER_RESEARCH

## conflicts

1. **導入日**
   - K-Navi: 2012-10-15（ホール導入開始）
   - グリーンべると2012-08-30当時記事: 2012-10-21から納品開始予定
   - HAZUSE: 2012-10-22（導入開始日）
   - パチビー: 2012-10-22（導入日）
   - ALL7.jp: 2012-10-22（導入予定）
   - 10/15と、10/21納品予定→10/22導入の系列が競合。平均しない。本DBでは時系列漏れ防止のため最早具体日の10/15をキーにし、DATE_CONFLICTとして保持。

2. **ゲーム数モード名称**
   - パチビー/P-WORLD: 「通常 / 天国準備 / 天国 / 超天国」表記。
   - K-Navi/必勝本/HAZUSE系列: 「通常A / 通常B / 天国 / 超天国」表記。
   - 機能上の対応関係を推測で完全同一視せず、リセット公開表はK-Navi原表記の通常A/Bを保持。

## missingFields

- 本機固有リールガックン等の確定的変更判別
- 設定・電源とも一切操作しない「純据え置き」を別項目として逐語的に列挙した資料（ただし電源OFF/ONのみの広範な引継ぎ契約は直接確認済み）

## sources

取得日: 2026-09-05

1. K-Navi 機種トップ
   - https://p-kn.com/slot/1707/
   - 2012-10-15ホール導入開始、ART初当り、合成確率、機械割、ART約+2.0枚/G・50G。
   - reliability: ANALYSIS_DATABASE_HIGH

2. K-Navi 設定変更時モード移行率
   - https://p-kn.com/slot/1707/40876/
   - 設定変更時の通常A/B/天国振り分けを設定別に公開。
   - reliability: CONTEMPORARY_ANALYSIS_DIRECT_NUMERIC

3. パチ＆スロ必勝本 天井&設定変更
   - https://p.hisshobon.jp/machine/2092/1/36622
   - 天井1280G、設定変更時の天井リセット/モード再セット/内部状態再セット/ビーチ・プール1:1、電源OFF/ON時の表示例外と「それ以外は全て引き継ぐ」。
   - reliability: CONTEMPORARY_ANALYSIS_HIGH_DIRECT

4. パチ＆スロ必勝本 通常時・状態移行率
   - https://p.hisshobon.jp/machine/2092/1/36998
   - 設定変更時内部状態 低確94.90%、高確5.00%、超高確0.10%。
   - reliability: CONTEMPORARY_ANALYSIS_HIGH_DIRECT_NUMERIC

5. HAZUSE
   - https://hazuse.com/machine/pachislot/2S0776/
   - 型式キュインぱちすろ南国育ちY、検定2S0776、2012-10-22導入、設定別ART初当り/合成/機械割、ART/CZ/疑似ボーナス/天井。
   - reliability: ANALYSIS_DATABASE_HIGH

6. パチビー
   - https://www.pachibee.jp/machines/index/212090004
   - 2012-10-22導入、5号機ART、疑似ボーナス、ART 50G+α・約+2.0枚/G、4モード、天国/超天国128G。
   - reliability: INDUSTRY_DATABASE

7. グリーンべると 2012-08-30
   - https://web-greenbelt.jp/00001571/
   - 当時発表。オリンピア製、南国RUSH約+2.0枚/G・50G、CZ8G、疑似ボーナス、納品開始10/21予定。
   - reliability: CONTEMPORARY_INDUSTRY

8. ALL7.jp 2012年10月導入予定一覧
   - https://www.all7.jp/plans/index/2012/10
   - 2012-10-22導入予定として掲載。
   - reliability: INDUSTRY_CALENDAR

9. CrankySeven
   - https://crankyseven.com/nangokusodati1st-pc.htm
   - 機械割、約30G/千円、疑似BIG約100枚/REG約40枚、ART約+2.0枚/G、天井1280G、設定変更時天井クリア。
   - reliability: ANALYSIS_SECONDARY

10. 当時系スペック紹介（スロスター）
   - https://ameblo.jp/slostar/entry-11333929403.html
   - 約30G/千円、ART50G・約+2.0枚/G、CZ期待度約30%。
   - reliability: PERIOD_SECONDARY

## boundaryAudit

- 直前正本: recordCount 691 / chronologicalFrontier 2012-10-09 / 10-09群CLOSED。
- 2012-10-10～10-14についてK-Navi/HAZUSE/ALL7/旧DB/業界記事を再探索し、今回この範囲の具体日付き未登録パチスロを確定できず。
- 「キュインぱちすろ南国育ち 1st vacation」は前handoffで10/22候補だったが、K-Naviに10/15ホール導入開始が存在したため10/22へ飛ばさず今回処理。
- 10/15の他未登録パチスロは今回の複数検索で具体日を確定できず。ただし月間資料の全件性を過信せず、次回は10/16～10/21を再監査してから10/22群へ進む。
