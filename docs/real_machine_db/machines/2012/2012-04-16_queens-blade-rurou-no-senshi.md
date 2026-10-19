# パチスロ クイーンズブレイド 流浪の戦士

machineName: パチスロ クイーンズブレイド 流浪の戦士
manufacturer: JPS（株式会社ジェイピーエス）
releaseDate: 2012-04-16
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi・パチビー・当時系新機種一覧・HAZUSEで2012-04-16導入開始を照合。
generation: 5号機
systemType: ボーナス+無限RT / SRT（ストックリプレイタイム）
formalModelName: クイーンズブレイドR2
approvalNumber: 2S0037
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.46% |
| 2 | 99.06% |
| 3 | 100.61% |
| 4 | 103.32% |
| 5 | 105.91% |
| 6 | 110.73% |

reliability: ANALYSIS_HIGH
notes: HAZUSE、パチビー、当時系新機種一覧で同一系列を照合。

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/329.3 | 1/508.0 | 1/199.8 |
| 2 | 1/319.7 | 1/461.5 | 1/188.9 |
| 3 | 1/310.6 | 1/422.8 | 1/179.1 |
| 4 | 1/302.0 | 1/390.1 | 1/170.2 |
| 5 | 1/293.9 | 1/362.1 | 1/162.2 |
| 6 | 1/283.7 | 1/334.4 | 1/153.5 |

reliability: ANALYSIS_HIGH
notes: HAZUSEとパチビーの直接表が一致。当時系新機種一覧でも同一系列を確認。

## baseGamesPer50

value: 34.6〜36.2G/50枚
sourceDefinition: パチマガスロマガ掲載「1000円あたりのゲーム数」。設定別通常ベル確率には差があるが、同ページはレンジ表記。
reliability: ANALYSIS_HIGH

## netIncrease

value: RT「ガイノスモード」約+0.6枚/G
reliability: ANALYSIS_HIGH
notes: パチビー、パチマガスロマガ、K-Navi系説明で一致。

## basicPayout

- BIG: 最大311枚（344枚超払い出しで終了）
- REG: 最大103枚（104枚超払い出しで終了）
- RT「ガイノスモード」: 次回ボーナスまで継続する無限RT、約+0.6枚/G

reliability: ANALYSIS_HIGH

## modeSpecificMinimumData

- SRT（ストックリプレイタイム）搭載。ボーナス成立時にRTストック抽選を行い、1回の当選で最大5セット。
- 通常の救済到達条件はゲーム数ではなくチャンス目規定回数。BIG後は1〜12回、REG後は1〜9回のチャンス目成立で無限RTへ移行。
- チャンス目出現率は約1/70〜1/77.6資料帯。物差し上は「ゲーム数天井なし / チャンス目回数型救済」として分類する。
- 「天井なし」とする解析ガイドと、「天井あり」とするパチビーは定義差。前者はゲーム数天井なし、後者はチャンス目規定回数救済を天井と呼んでいるため、数値競合ではなくDEFINITION_DIFFERENCEとして保持。

reliability: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: 設定変更時はチャンス目規定回数を再セットする。ただし当時系天井資料では「再セット値が変更前より多くなる場合は書き換えない」とされ、進捗が悪化しない処理を確認。別解析資料では設定変更時は規定回数1回が選択されやすいとされる。また設定変更後はRT状態からスタートするとの機種固有解析あり。
carryOverBehavior: 据え置き/宵越しは当時系天井資料で「宵越し〇」。設定変更時ですら再セット値が不利になる場合は書き換えないという記述とも整合する。厳密な内部フラグ全保持までは収集対象外。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみでチャンス目規定回数、RT開始状態、転落リプレイ挙動がどう処理されるかを本機固有の直接資料で確定できず。
gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING。本機の救済は経過ゲーム数ではなくチャンス目成立回数で管理。チャンス目規定回数は設定変更時に再セットされるが、不利方向の書き換えは行われないとの当時資料あり。
ceilingAfterReset: ゲーム数短縮天井はNOT_APPLICABLE。設定変更時はチャンス目規定回数を再セットし、1回が選択されやすい。具体的な設定変更専用振り分け率は今回の再探索でも確定できず。
modeAfterReset: 一般的なゲーム数モードはNOT_APPLICABLE。本機では設定変更後RT状態スタートとされ、朝一の転落リプレイ挙動が変更推測材料になる。
stateAfterReset: 設定変更後はRT状態からスタートするとの機種固有解析を確認。チャンス目出現前に転落リプレイ「ベル・リプレイ・リプレイ」が入賞した場合、設定変更の可能性が高い。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: チャンス目規定回数を再セット。1回が選択されやすく、かつ変更前より不利な回数へは書き換えないとの資料があるため、朝一にRT到達が近くなる可能性がある。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。少なくとも確認できた規定回数処理は不利方向の書き換えを避ける仕様。
resetDetection: 設定変更後はRT状態からスタートするため、朝一にチャンス目成立前の転落リプレイ「ベル・リプレイ・リプレイ」入賞が設定変更推測材料。確定ではなく「可能性が高い」として扱う。
publicMorningNumbers: 設定変更時は規定回数1回が選択されやすいことを確認したが、具体的割合はUNVERIFIED_AFTER_RESEARCH。通常の規定回数上限はBIG後12回 / REG後9回。
numericResetData: gameCountCeiling=NOT_APPLICABLE; chanceTriggerCeiling=BIG_after_1to12_hits__REG_after_1to9_hits; settingChangeChanceCount=RESELECT_WITH_NO_WORSENING_REWRITE; resetOneHitSelection=LIKELY_BUT_RATE_UNVERIFIED; morningDetection=drop_replay_before_first_chance_hit

notes:
- 「クイーンズブレイド 流浪の戦士 / パチスロクイーンズブレイド / クイーンズブレイドR2 / JPS / ジェイピーエス / 2S0037」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / チャンス目 / 規定回数 / RT状態 / 転落リプレイ / ガックン」を組み替えて再探索。
- K-Navi本機ページに「設定変更時の挙動」「天井までのチャンス目回数(設定変更時)」専用項目が存在することを確認。
- パチマガスロマガにも「朝イチ・設定変更」専用解析項目の存在を確認。
- 具体挙動は後年解析ガイドと当時系天井資料で相互補完。単純電源OFF→ONだけは本機固有の直接根拠を確定できないため推測しない。

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_RT_START_AND_DETECTION__ANALYSIS_SINGLE_FOR_NO_WORSENING_REWRITE_AND_CARRYOVER__UNVERIFIED_FOR_POWER_CYCLE

## conflicts

- ceilingTerminology: パチビーは「天井あり」とし、チャンス目規定回数でRT突入する救済を天井と呼ぶ。一方、解析ガイドは「天井なし」と表記。ゲーム数天井の有無とチャンス目回数型救済の定義差として保持し、平均・統合しない。
- manufacturerDisplay: JPS公式系・パチビー・K-Navi・当時資料はJPS（ジェイピーエス）。HAZUSE日本語ページはメーカーを「ジェイビーエス」と表示するが、型式2S0037・同一機種であり表記誤り候補。manufacturerはJPSを採用し、HAZUSEメーカー表記は根拠に使用しない。

## missingFields

- powerCycleBehavior exact handling
- setting-change chance-count exact distribution / percentage

## sources

取得日: 2026-09-05

1. パチビー「クイーンズブレイド -流浪の戦士-」 https://www.pachibee.jp/machines/index/212020008
   - 2012-04-16導入、5号機RT、BIG/REG、機械割、ボーナス確率、RT純増、チャンス目回数型救済。
   - reliability: ANALYSIS_HIGH / OLD_DATABASE
2. K-Navi「パチスロ クイーンズブレイド 流浪の戦士」 https://p-kn.com/slot/1605/
   - 2012-04-16導入、SRT/無限RT概要、BIG後最大12回・REG後最大9回、設定変更・朝一専用解析項目の存在。
   - reliability: ANALYSIS_HIGH
3. HAZUSE「パチスロ クイーンズブレイド 流浪の戦士」 https://hazuse.com/machine/pachislot/2S0037/
   - 型式クイーンズブレイドR2、検定番号2S0037、導入日、設定別BIG/REG/合算/PAY OUT。
   - reliability: ANALYSIS_HIGH / OLD_DATABASE
4. パチマガスロマガ「パチスロクイーンズブレイド流浪の戦士」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/26/a.php
   - BIG最大311枚、REG最大103枚、RT約+0.6枚/G、チャンス目規定回数。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ「小役確率」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/26/c.php
   - 1000円あたり34.6〜36.2G、チャンス目1/77.6、設定別通常ベル。
   - reliability: ANALYSIS_HIGH
6. パチスロ解析ガイド「クイーンズブレイド 流浪の戦士」 https://www.pachislot-guide.net/2012/queens-blade/
   - 性能コア照合、設定変更時は規定回数1回が選ばれやすい、設定変更後RT状態スタート、朝一転落リプレイによる変更推測。
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE_ANALYSIS
7. 天井ハイエナ生活「天井ハイエナ期待値リスト 5/31更新」 https://macerate.seesaa.net/article/272914282.html
   - 当時系資料。宵越し〇、設定変更時チャンス目規定回数再セット、変更前より多くなる場合は書き換えない。
   - reliability: ANALYSIS_SINGLE / PERIOD_SECONDARY
8. 当時系新機種一覧「パチスロ・パチンコ新機種導入予定日」 https://macerate.seesaa.net/article/263152916.html
   - 2012/4/16導入、JPS、設定別BIG/REG/合算/機械割。
   - reliability: ANALYSIS_SINGLE / PERIOD_SECONDARY
