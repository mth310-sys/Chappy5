# パチスロ鉄拳デビルVer.

machineName: パチスロ鉄拳デビルVer.
manufacturer: 山佐
releaseDate: 2012-05-07
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi本機ページで2012-05-07ホール導入開始を確認。2012-04-05付グリーンべるとは納品開始を2012-05-06予定としており、ホール導入日との定義差として整合。
generation: 5号機
systemType: ART特化 / ボーナス非搭載 / セットストックART
formalModelName: パチスロ鉄拳2デビルVer．
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_APPROVAL_NUMBER_UNVERIFIED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 98.9% |
| 3 | 101.5% |
| 4 | 104.9% |
| 5 | 107.3% |
| 6 | 110.8% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガの設定別直接表とパチナビ整理値が一致。

## initialHitBySetting

### ART初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/439.5 |
| 2 | 1/403.5 |
| 3 | 1/379.5 |
| 4 | 1/357.5 |
| 5 | 1/328.2 |
| 6 | 1/287.3 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガ設定別表とパチナビ整理値が一致。

## baseGamesPer50

value: 33.13〜33.00G/50枚（1000円あたり）
reliability: ANALYSIS_HIGH
notes: パチマガスロマガの「1000円あたりのゲーム数」直接値。設定別の対応順を本文表示だけから安全に割り当てられないためレンジとして保持。

## netIncrease

value: ART「デビルRUSH」約+3.0枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガ、P-WORLD、当時livedoor/GetNews記事で一致。

## basicPayout

- ボーナス非搭載。
- ART「デビルRUSH」: 1セット50G + デビルバトル1〜5G、約+3.0枚/G。
- CZ「鉄拳チャンス」: 平均約20G、ART期待度約55%。
- プレミアムデビルフリーズ: 全設定共通1/8192。ART5セット以上 + 80%継続のプレミアム鉄拳アタック。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時には低確 / 通常 / 高確 / 超高確 / 前兆の5内部モードを確認。
- ART間1500G消化で前兆を経由して天井ART「デビルRUSH」へ。天井ARTは2セット以上確定とする当時解析あり。
- K-Naviでは設定変更時も通常時モード移行契機の1つとして明記。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED_COUNTER_AND_ART_STATE_CLEAR_MODE_RELOTTERY_STAGE_RANDOM。設定変更時は天井までのハマリゲーム数をクリア、ART中ならART状態もクリア、液晶ステージをランダム選択、内部モード移行抽選を行う。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時の宵越し不可は直接確認したが、純粋な据え置き時に1500G天井カウンタ・内部モード・ART状態をどの粒度で保持するかを本機固有の直接表では確定できず、一般則から補完しない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない単純電源OFF→ON時の天井カウンタ・内部モード・ART状態を本機固有資料で直接確定できず。
gameCounterReset: CONFIRMED_CLEAR_ON_SETTING_CHANGE。設定変更でART間1500G天井までのハマリゲーム数をクリアし、宵越し天井狙い不可とする当時資料を確認。
ceilingAfterReset: NO_RESET_SPECIFIC_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH。通常天井はART間1500G。設定変更専用の短縮天井は確認できず。
modeAfterReset: CONFIRMED_WITH_PUBLIC_NUMBERS。通常の設定変更では全設定共通で通常50% / 高確50%へ移行する当時解析を確認。K-Naviも設定変更時をモード移行契機として明記。
stateAfterReset: CONFIRMED_ART_STATE_CLEAR_IF_CHANGED_DURING_ART。ART中の設定変更ではART状態クリア。通常時の状態は上記モード再抽選で扱う。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: CONFIRMED_50_PERCENT_HIGH_START_ON_NORMAL_SETTING_CHANGE。通常の設定変更時は50%で高確スタート。
resetPenalties: CONFIRMED_LOSS_OF_1500G_CEILING_PROGRESS_AND_ACTIVE_ART_ON_CHANGE。前日の天井進捗を失い、ART中に変更した場合はART状態も消える。
resetDetection: PARTIAL_STAGE_RANDOMIZATION_ONLY。設定変更時に液晶ステージがランダム選択されることは確認したが、ガックン・初期出目・特定ステージ等による初代デビル固有の確定的変更判別は十分な直接根拠を確定できず。
publicMorningNumbers: CONFIRMED。通常の設定変更時モード振り分けは全設定共通で通常50% / 高確50%。当時資料では同一設定への打ち直し時は100%低確スタートとされるため、通常変更と区別して保持。
numericResetData: settingChangeMode={normal:50%,high:50%}; sameSettingReapply={low:100%}; normalCeiling=1500G_after_ART; shortenedResetCeiling=NONE_CONFIRMED

notes:
- 「パチスロ鉄拳デビルVer. / 鉄拳デビルバージョン / パチスロ鉄拳2デビルVer． / 山佐 / YAMASA」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1500G / モード / 高確 / 低確 / ガックン / コイン持ち / 50枚」を組み替えて再探索。
- K-Navi、パチマガスロマガ、P-WORLD、グリーンべると、2012年当時の天井攻略資料、後年DBを横断。
- 2021年「鉄拳4デビルVer.」および後継デビル系の有利区間・リセット仕様は別機種のため流用していない。
- 同一設定への打ち直し100%低確は当時二次資料値のため、通常の設定変更50/50と混ぜず例外値として保持。

resetQaReliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_MODE_CHANGE_CONTRACT_AND_CORE__PERIOD_SECONDARY_FOR_EXACT_RESET_NUMBERS__UNVERIFIED_FOR_TRUE_CARRYOVER_AND_PURE_POWER_CYCLE

## conflicts

- NONE_CONFIRMED_FOR_CORE_VALUES。
- 設定変更時50%通常/50%高確と、同一設定への打ち直し100%低確は操作条件が異なるためCONFLICT扱いにせず別条件値として保持。

## missingFields

- approvalNumber
- carryOverBehavior exact handling when truly unchanged
- powerCycleBehavior exact handling
- initial-model-specific gakkun / definitive reset detection behavior

## sources

取得日: 2026-09-05

1. K-Navi「パチスロ鉄拳デビルVer.」 https://p-kn.com/slot/1617/
   - 2012-05-07ホール導入開始、山佐、ART特化、1セット50G、TC期待度約55%、フリーズ概要。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
2. K-Navi「モード移行率(通常時)」 https://p-kn.com/slot/1617/38378/
   - 通常時5モード、設定変更時がモード移行契機であることを確認。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
3. K-Navi「プレミアムデビルフリーズ」 https://p-kn.com/slot/1617/37674/
   - 全設定共通1/8192、ART5セット以上+80%継続。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ「パチスロ鉄拳デビルVer. スペック」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/186/a.php
   - ART約+3.0枚/G、1セット50G+デビルバトル、ボーナス非搭載、TC平均20G/期待度約55%。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ「ART確率」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/186/h.php
   - 設定別ART初当り1/439.5〜1/287.3、PAYOUT 96.9〜110.8%。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ「小役確率」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/186/c.php
   - 1000円あたり33.13〜33.00G、ART純増3.00枚/G。
   - reliability: ANALYSIS_HIGH
7. P-WORLD「パチスロ鉄拳デビルVer.」 https://www.p-world.co.jp/machine/database/6689
   - 山佐、5号機ART、BR非搭載、約+3.0枚/G、ART間1500G天井。
   - reliability: OLD_DATABASE
8. グリーンべると「山佐が『パチスロ鉄拳デビルVer.』を発表」 https://web-greenbelt.jp/00001440/
   - 2012-04-05掲載、納品開始2012-05-06予定、ART 1セット50G+α。
   - reliability: INDUSTRY / PERIOD_SOURCE
9. 天井ハイエナ生活「鉄拳デビルバージョン 天井ハイエナ狙い目・設定判別要素」 https://macerate.seesaa.net/article/275873798.html
   - 2012年当時資料。ART間1500G、宵越し×。
   - reliability: PERIOD_SECONDARY
10. 天井ハイエナ生活「天井ハイエナ期待値リスト 8/25更新バージョン」 https://macerate.seesaa.net/article/288333617.html
   - 設定変更で天井Gクリア、ART状態クリア、液晶ステージランダム、内部モード抽選、通常50%/高確50%、同一設定打ち直し100%低確。
   - reliability: PERIOD_SECONDARY
11. パチナビ「パチスロ鉄拳デビルVer. 設定判別・解析」 https://pachinavi.net/machines/tekken-devil/
   - 型式名「パチスロ鉄拳2デビルVer．」、2012-05-07、機械割/ART初当り系列の後年照合。
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE
12. livedoorニュース「デビルの戦いをその身で体感せよ 山佐『パチスロ鉄拳デビルver．』登場」 https://news.livedoor.com/article/detail/6546923/
   - 2012-05-10掲載。全国導入、ボーナス非搭載、ART50G、約+3.0枚/G。
   - reliability: PERIOD_SECONDARY
