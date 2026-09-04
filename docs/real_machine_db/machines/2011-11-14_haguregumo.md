# 浮浪雲

machineName: 浮浪雲
aliases: はぐれ雲 / はぐれぐも / ハグレグモ / ハグレグモA5
manufacturer: 北電子
formalModelName: ハグレグモA5
approvalNumber: 1S0089
releaseDate: 2011-11-14
releaseDateStatus: EXACT_HALL_INTRODUCTION_WITH_DELIVERY_DATE_DIFFERENCE

generation: 5号機
systemType: ボーナス+RT / チャンスゾーン
coreStatus: PARTIAL_CORE_BASE_UNVERIFIED
resetQaStatus: PARTIAL_RESET_BEHAVIOR_AFTER_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「キャッツ・アイ-恋ふたたび」を確認して開始。
- 開始時正本は recordCount 617 / chronologicalFrontier 2011-11-07。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 2011-11-07同日群をK-Navi/HAZUSEカレンダー/検索で再監査した範囲では、既登録のストリートファイターIV / 必勝金閣寺物語～古都絢爛～ / キャッツ・アイ-恋ふたたび以外の未登録5号機を確定できず同日群を閉鎖。
- HAZUSEカレンダー上の次日付2011-11-11は日付枠自体を確認したが、今回の再探索ではパチスロ候補を確定できなかった。パチンコの「野生の王国」等は対象外。
- 次の具体的パチスロ導入日としてK-Naviで「浮浪雲」2011-11-14を確認。
- 当時グリーンべると/P-WORLD業界記事は2011-11-13納品開始予定。本DB時系列キーはホール導入2011-11-14を採用し、納品日は定義分離。
- repo code searchで機種名未検出、想定実パスを直接fetchして404を確認し未登録と判断。

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 96.3% |
| 2 | 97.7% |
| 3 | 99.6% |
| 4 | 101.3% |
| 5 | 105.2% |
| 6 | 110.1% |

- 北電子公式の工場データ算出予測値。K-Navi/P-WORLDでも同系列を確認。
confidence: OFFICIAL_CROSSCHECKED

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/390.1 | 1/407.1 | 1/199.2 |
| 2 | 1/372.4 | 1/392.4 | 1/191.1 |
| 3 | 1/348.6 | 1/376.6 | 1/181.0 |
| 4 | 1/334.4 | 1/352.3 | 1/171.6 |
| 5 | 1/307.7 | 1/332.7 | 1/159.8 |
| 6 | 1/278.9 | 1/304.8 | 1/145.6 |

- 北電子公式、K-Navi、当時業界記事で一致。
confidence: OFFICIAL_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「浮浪雲 / はぐれぐも / ハグレグモA5」「50枚 / 1000円 / ベース / コイン持ち」等で検索し、北電子公式、K-Navi、P-WORLD、当時業界記事、後年DBを横断したが、比較可能な50枚あたり通常ゲーム数を直接確定できず。
- 小役確率からの推算は行わない。
confidence: UNVERIFIED

## netIncrease

- RT「縁日モード」: **約+0.5枚/G**。
- 当時グリーンべると/P-WORLD業界記事では平均約30G継続。
- P-WORLDでは2人縁日と4人縁日の2段構成を確認。4人縁日は通常時への転落なし、2人縁日の転落役成立で終了。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## basicPayout

- BIG: **約300枚**（348枚を超える払い出しで終了）。
- REG/BG: **約100枚**（108枚を超える払い出しで終了）。
- 当時業界記事、P-WORLD、中古実機資料で一致。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## modeSpecificMinimumData

- ボーナス後などのCZ「ふすまチャンス」からRT「縁日モード」へ突入する構造。
- RT突入契機は当時業界記事で「リプレイ・ベル・スイカ」停止時。RT or ボーナス成立合算は全設定約1/99と紹介。
- RTは2人縁日/4人縁日の2状態。P-WORLDによれば2人縁日中の転落役で通常へ、4人縁日は通常転落なし。
- ゲーム数到達型天井・規定G数当選は、今回確認した公式/業界/解析資料では確認できなかった。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名、型式名、北電子、設定変更、リセット、朝一を組み替えて検索したが、本機固有の設定変更時RT/CZ状態処理を直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時にCZ/RT状態や一時状態がどこまで保持されるか、本機固有資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合のRT/CZ/内部状態の扱いを直接確定できず。

gameCounterReset: **NOT_APPLICABLE_FOR_GAME_COUNT_CEILING / TRANSIENT_STATE_HANDLING_UNVERIFIED**。今回確認した資料では通常ゲーム数到達型天井を確認できないため、天井ゲーム数カウンタのCLEAR/RETAINは非該当扱い。ただしCZ/RT等の一時状態処理は別項目として未確認。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。通常天井および設定変更専用短縮天井の公開数値を確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。朝一専用モード、設定変更時のモード再抽選/振り分けを確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。RT「縁日モード」/CZ「ふすまチャンス」に関係する状態が設定変更でどう処理されるかを本機固有資料で確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、朝一高確、特別RT/CZ優遇等の公開恩恵を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日ハマリ消失等を一般則から推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶/ステージ、RT/CZ挙動等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- 設定変更専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更時モード/状態振り分け: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内当選率/RT突入率: UNVERIFIED_AFTER_RESEARCH
- ガックン等変更判別数値: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: UNVERIFIED_AFTER_RESEARCH_EXCEPT_NOT_APPLICABLE_ADVANTAGEOUS_SECTION_AND_NO_CONFIRMED_GAME_COUNT_CEILING

## conflicts

1. **型式表記の業界記事内不整合**
   - 北電子公式/P-WORLD: `ハグレグモA5`、検定番号1S0089。
   - 2011-09-20グリーンべると/P-WORLD業界記事は冒頭で「ハグレグモA5」と紹介する一方、本文中に「ハグレグモA7」と記載。記事内表記揺れ/誤記候補として平均・統合せず記録。本DBformalModelNameは公式/P-WORLDのA5を採用。
2. **出玉率設定6の丸め差**
   - 北電子公式/K-Navi/P-WORLD: 110.1%。
   - 当時業界記事: 110.0%。
   - 公式値110.1%を主値とし、業界記事は丸め差として保持。

## missingFields

- baseGamesPer50
- 設定変更時のRT/CZ/内部状態処理
- 据え置き時の状態保持
- 単純電源OFF→ON時の状態処理
- 朝一専用恩恵/不利の公開数値
- ガックン等の変更判別

## sources

取得日: 2026-09-05

1. 北電子公式「浮浪雲」 — https://www.kitadenshi.co.jp/slot/haguregumo/
   - メーカー、設定別BB/RB/合算、設定別出玉率。
   - confidence: OFFICIAL
2. K-Navi「浮浪雲」 — https://p-kn.com/slot/1508/
   - 2011-11-14ホール導入開始、設定別確率/機械割、RT構造。
   - confidence: ANALYSIS_HIGH
3. P-WORLD「浮浪雲」 — https://www.p-world.co.jp/machine/database/6506
   - 型式ハグレグモA5、検定番号1S0089、BIG約300枚、BG約100枚、RT約+0.5枚/G、RT状態構造。
   - confidence: ANALYSIS_HIGH
4. グリーンべると/P-WORLD業界ニュース「北電子がパチスロ2機種を同時リリース」2011-09-20 — https://news.p-world.co.jp/articles/4910/greenbelt
   - 2011-11-13納品開始予定、RT平均約30G、RT/ボーナス合算1/99、BIG約300枚/REG約100枚、設定別レンジ。
   - confidence: INDUSTRY
5. HAZUSE新台カレンダー — https://hazuse.com/new-machine-calendar/newmachine-calendar/
   - 2011-11-07 / 11-11 / 11-14の時系列境界確認。
   - confidence: ANALYSIS_HIGH

## status

- 性能コアは50枚ベースのみUNVERIFIED_AFTER_RESEARCH。主要設定別性能、ボーナス獲得、RT純増/基本構造は公式+複数資料で確定。
- resetBehaviorは本機固有の直接資料不足が大きいため、一般則で埋めずPARTIALのまま保存。
