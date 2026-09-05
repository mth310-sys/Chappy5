# パチスロ戦国無双2

machineName: パチスロ戦国無双2
manufacturer: 山佐
releaseDate: 2013-04-15
releaseDatePrecision: exact_day
generation: 5号機
systemType: AT / 高純増AT + 自力CZ / プレミアム疑似ボーナス
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-04-15**。K-Navi、パチスロ解析ガイド、グリーンべるとの実機導入開始記事で一致。
- 山佐の「戦国無双」シリーズ後継AT機。
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`。
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.0% |
| 3 | 101.0% |
| 4 | 103.0% |
| 5 | 106.0% |
| 6 | 110.0% |

- パチスロ解析ガイド、当時天井解析資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

AT「戦国RUSH」初当たり:

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/234.8 |
| 2 | 1/225.6 |
| 3 | 1/215.7 |
| 4 | 1/202.9 |
| 5 | 1/186.3 |
| 6 | 1/171.9 |

- パチスロ解析ガイド、当時天井解析資料で一致（丸め表示のみ差）。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約32G/1000円（50枚）**。
- パチマガスロマガ「1000円あたりのゲーム数」と当時スペック記事で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「戦国RUSH」: **約3.0枚/G**。
- K-Navi、P-WORLD、パチマガスロマガ、グリーンべるとで一致。
- 5号機クロニクルには約2.8枚/Gという後年表記があるため、主系列を約3.0枚/Gとし、後年値はCONFLICTとして隔離。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH_FOR_3_0

## basicPayout

- 戦国RUSH: **1セット36G+α**、継続率 **50 / 60 / 72 / 89%**。
- AT「出陣ノ刻」: **最大23G**、純増約3.0枚/G。
- プレミアム「無双ボーナス」: 本能寺フリーズ契機。期待獲得約2500枚とする資料あり。ただし単一トリガー期待値であり通常の基本獲得枚数と混同しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はCZ「一撃当千チャンス」やAT「出陣ノ刻」等を経由して戦国RUSHを目指す。
- 天井: **AT終了後1300G**でAT当選。
- 天井到達時の戦国RUSHは **89%継続**。
- 「出陣ノ刻」もATとして天井G数をリセットする点に注意。
- 一撃当千チャンス中や前兆中に1300Gへ到達しても天井は有効とする当時資料あり。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CLEARS_AT_CEILING_COUNTER__NO_DEDICATED_SHORT_CEILING_CONFIRMED__CARRYOVER_POWER_CYCLE_MODE_STATE_AND_DETECTION_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更で天井までのゲーム数をリセット**。2013年当時の天井解析資料に明記。
- 設定変更専用の短縮天井、朝一専用AT/CZ優遇、専用モード振り分けは十分な再探索後も直接確認できず `NONE_CONFIRMED_AFTER_RESEARCH` / `UNVERIFIED_AFTER_RESEARCH` とする。

### carryOverBehavior

- 当時の天井狙い資料には本機を「宵越し×」とする表記がある。
- ただしこれは同資料内で設定変更時に天井Gがリセットされることと併記されており、**純据え置きでも1300G進捗が消えるという直接契約までは確認できない**。
- 純据え置き時の天井G、内部状態、CZ/AT関連状態の完全な引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 設定変更を伴わない単純な電源OFF→ON時の天井G、内部状態、液晶ステージ、リール初期状態について本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- settingChangeのCLEARから電断時挙動を逆算しない。

### gameCounterReset

- settingChange: **CLEAR**。
- carryOver: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleOnly: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常天井: **AT後1300G**。
- 設定変更専用の短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井恩恵: **89%継続の戦国RUSH**。

### modeAfterReset

- 設定変更時のモード再抽選/引継ぎ、および朝一専用モードの存在を示す本機固有の比較可能な公開表は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 高確等の内部状態について、設定変更時/据え置き時/純電断時の初期振り分け・保持契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、専用モード優遇、朝一AT/CZ優遇などの比較可能な公開恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常天井到達時の89%継続ATはリセット専用恩恵ではないため分離。

### resetPenalties

- **設定変更で前日の天井ゲーム数進捗が消失**。
- それ以外の設定変更固有の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 「戦国無双2 / パチスロ戦国無双2 / 山佐 / 戦国無双シリーズ」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / ステージ」を組み替えて検索したが、本機固有のガックン、初期出目、液晶表示等による変更判別契約は `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- resetShortCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`。
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`。
- resetSpecificHitOrCzRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- normalCeilingAfterFreshCounter: **1300G**。
- ceilingBenefit: **89_PERCENT_LOOP_SENGOKU_RUSH**。

### numericResetData

- settingChangeGameCounter: CLEAR
- normalCeiling: 1300G
- ceilingATLoopRate: 89%
- resetShortCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- resetModeDistribution: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: ANALYSIS_PERIOD_SOURCE_FOR_SETTING_CHANGE_COUNTER__MULTI_SOURCE_HIGH_FOR_NORMAL_CEILING_AND_BENEFIT__UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_MODE_STATE_AND_GACCKUN_CONTRACT

## missingFields

- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- carryOverInternalContract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleInternalContract: `UNVERIFIED_AFTER_RESEARCH`
- resetGacckunOrDisplayContract: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

### netIncrease retrospective alternate

- primary contemporary/industry series: **約3.0枚/G**。
- 5号機クロニクル後年整理: **約2.8枚/G**。
- 当時のK-Navi、P-WORLD、パチマガスロマガ、グリーンべるとが約3.0枚/Gで一致するため主値は約3.0枚/G。後年2.8枚/Gは算出/丸め条件を確定できず平均せず `CONFLICT_NET_INCREASE_RETROSPECTIVE_2_8_VS_CONTEMPORARY_3_0` として保持。

## sources

取得日: **2026-09-06**

1. K-Navi — パチスロ戦国無双2（山佐、導入2013-04-15、AT、約3.0枚/G、36G+α）
   - https://p-kn.com/slot/1819/
   - reliability: ANALYSIS_HIGH_PERIOD_DB
2. グリーンべると — 『パチスロ戦国無双2』のアプリを先行配信（2013-04-12、実機導入4月15日開始、純増約3.0枚）
   - https://web-greenbelt.jp/00000864/
   - reliability: INDUSTRY_PERIOD
3. グリーンべると — フルモデルチェンジ！『パチスロ戦国無双』最新作（2013-02-20、山佐発表、3.0AT、納品予定）
   - https://web-greenbelt.jp/00000758/
   - reliability: INDUSTRY_PERIOD
4. P-WORLD — パチスロ戦国無双2（山佐、5号機AT、約3.0枚/G、出陣ノ刻最大23G、戦国RUSH36G+α）
   - https://www.p-world.co.jp/machine/database/7021
   - reliability: INDUSTRY_ANALYSIS_DB
5. パチマガスロマガ — 基本情報（AT純増約3.0枚/G、ループ50～89%）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/192/a.php
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 小役確率（1000円あたり約32G）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/192/c.php
   - reliability: ANALYSIS_HIGH
7. パチスロ解析ガイド — 戦国無双2（導入2013-04-15、設定別AT初当たり、機械割、36G、約3.0枚/G、1300G天井・89%継続）
   - https://pachislot-guide.net/2013/sengoku-musou2/
   - reliability: ANALYSIS_RETROSPECTIVE_DB
8. スロパチクエスト — 戦国無双2 天井解析（2013-04-11、設定別AT/機械割、1300G天井・89%継続）
   - https://www.slopachi-quest.com/article/354835660-html/
   - reliability: ANALYSIS_PERIOD
9. 天井ハイエナ生活 — 戦国無双2 天井スペック（2013年当時、1300G天井、89%継続、**設定変更で天井Gリセット**、宵越し不可）
   - https://macerate.seesaa.net/article/355071754.html
   - reliability: ANALYSIS_PERIOD_SINGLE_FOR_RESET
10. 5号機クロニクル — 山佐5号機一覧（後年整理、純増約2.8枚/G表記）
   - https://5goki.com/yamasa
   - reliability: RETROSPECTIVE_DATABASE

## queueNotes

- 2013-04-15同日群の既知未処理候補は、次に **戦国パチスロ 信長の野望‐天下創世‐（ニューギン）**、続いて **鬼浜爆走紅蓮隊～友情挽歌編～（ベルコ）**。
- 同日群はまだOPEN。別カレンダー/メーカー別一覧で最終漏れ監査後にCLOSED判定する。
