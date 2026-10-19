# 兎-野性の闘牌-

machineName: 兎-野性の闘牌-
manufacturer: ニューギン
releaseDate: 2012-08-06
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviがホール導入開始2012-08-06と明記。P-WORLD/パチマガスロマガ/当時紹介資料でも2012年8月機として整合するため本DBの時系列キーは2012-08-06。
generation: 5号機
systemType: A+ART / CZ / 規定ゲーム数解除・モード管理
modelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 2 | 98.6% |
| 3 | 100.4% |
| 4 | 103.2% |
| 5 | 106.1% |
| 6 | 112.6% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガの設定別PAYOUTを主値とし、後年整理DB pacnkでも全設定一致を確認。

## initialHitBySetting

### ART「闘牌MODE」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/284.9 |
| 2 | 1/255.6 |
| 3 | 1/277.2 |
| 4 | 1/231.1 |
| 5 | 1/267.2 |
| 6 | 1/204.8 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガとpacnkで一致。通常時からのART初当たりとして扱う。

### ボーナス

- 青7 BIG: 全設定 1/16384
- 天衣無縫BONUS（BAR）: 全設定 1/16384
- ボーナス合成: 全設定 1/8192

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガ、当時機種紹介資料、K-Navi掲載ユーザー解説の主要値が一致。

## baseGamesPer50

value: 31.4～31.5G/50枚相当（1000円あたり）
reliability: ANALYSIS_SINGLE_PERIOD
notes: パチマガスロマガ小役確率ページの「1000円あたりのゲーム数」31.4～31.5G。独立別系統で同じ定義の直接値を確定できなかったため単一当時解析値として保持。

## netIncrease

value: 約+2.0枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: K-Navi、P-WORLD、パチマガスロマガ、当時紹介資料で一致。

## basicPayout

- BIG BONUS: 約204枚
- 天衣無縫BONUS: 約204枚
- ART「闘牌MODE」: 1セット50G+α、純増約+2.0枚/G、ゲーム数上乗せ+セットストック型
- 天衣無縫BONUS成立時: ART3セット以上確定
- BIG成立時: ART1セット以上確定

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLD、パチマガスロマガ、K-Navi、当時紹介資料で主要値を照合。

## modeSpecificMinimumData

- 通常時は通常A / 通常B / 天国A / 天国Bの4モードが存在。
- 規定ゲーム数解除の前兆「開眼ZONE」と、自力CZ「闘牌チャレンジ」を経由してARTへ突入する。
- CZ「闘牌チャレンジ」は基本10Gまたは20Gで、ART期待度は約40%。
- ゲーム数天井は滞在モードで異なる。P-WORLD/pacnk整理では通常A 1024G、通常B 1280G、天国 128GでART当選。
- ペナルティにより天井を超過する場合がある。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_GAPS__SETTING_CHANGE_COUNTER_RESET_CONFIRMED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED_PARTIAL. K-Naviに本機固有「設定変更後の挙動」解析項目が存在し、後年整理DBでも設定変更で天井ゲーム数がリセットされることを確認。設定変更時のモード/状態の具体再抽選契約までは現存本文から直接確定できず。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH. 「兎-野性の闘牌-/兎 野性の闘牌/ニューギン」と「据え置き/宵越し/天井引継ぎ/モード引継ぎ」を組み替え、K-Navi、P-WORLD、パチマガスロマガ、当時ブログ、後年DBを横断したが、純据え置き時のゲーム数・モード・状態保持契約を本機固有本文で確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 「電源OFF ON/電断/電源オン/朝一」を含めて再探索したが、設定変更を伴わない単純電源OFF→ON時の天井カウンタ・モード・状態処理を直接確定できず。
gameCounterReset: RESET_ON_SETTING_CHANGE_CONFIRMED. 設定変更で天井ゲーム数はリセットされる。
ceilingAfterReset: NO_MACHINE_SPECIFIC_SHORTENED_CEILING_VALUE_CONFIRMED. 設定変更専用の短縮天井G数や変更後専用天井を直接確定できず。通常のモード別天井は通常A 1024G / 通常B 1280G / 天国 128G。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH. 4モード構成自体は確認済みだが、設定変更直後のモード振り分けおよび朝一専用モード有無を直接確定できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH. 設定変更直後の内部状態振り分けを直接確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NO_DIRECT_MACHINE_SPECIFIC_RESET_BENEFIT_CONFIRMED_AFTER_RESEARCH. 天国なら128G天井だが、設定変更時に天国が優遇されるという直接根拠は未確定のためリセット恩恵として扱わない。
resetPenalties: PREVIOUS_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE. 天井ゲーム数がリセットされるため、前日までの天井進捗を期待する立ち回りには不利。
resetDetection: UNVERIFIED_AFTER_RESEARCH. ガックン、初期出目、液晶ステージ、ランプ等による本機固有の変更判別を直接確定できず。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData:
- 設定変更時: 天井ゲーム数リセット（具体的な朝一専用振り分け数値は未確定）

notes:
- K-Naviは本機に「設定変更後の挙動」専用項目があることを確認できるが、現存キャッシュでは本文取得不能。そのため項目の存在だけからモード再抽選等を推測しない。
- pacnkは設定変更で天井ゲーム数リセットと明記するため、その一点は確認済みとして採用。
- 通常A 1024G / 通常B 1280G / 天国 128Gは通常時のモード別天井であり、「設定変更時の短縮天井」と誤って扱わない。
- 据え置き、単純電源OFF→ON、設定変更直後モード/状態振り分け、ガックンは一般的5号機知識から補完しない。
- 5号機のため有利区間は非該当。

resetQaReliability: ANALYSIS_SINGLE_RETROSPECTIVE_FOR_COUNTER_RESET_PLUS_PERIOD_PAGE_EXISTENCE__UNVERIFIED_AFTER_MULTI_QUERY_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_MODE_STATE_DETECTION_NUMBERS

## conflicts

- 現時点で性能コアの重大な数値競合は確認していない。
- 「天国128G」は通常モード仕様として複数資料で確認できるが、設定変更時の天国優遇率は未確認。リセット恩恵へ転用しない。

## missingFields

- modelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset numeric distribution: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset numeric distribution: UNVERIFIED_AFTER_RESEARCH
- machine-specific resetDetection/gakkun: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumbers: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-05

- K-Navi 兎-野性の闘牌-: https://p-kn.com/slot/1677/
- K-Navi 設定変更後の挙動（リンク先ID 39568、現存キャッシュ本文取得不能）: https://p-kn.com/slot/1677/39568/
- P-WORLD 兎‐野性の闘牌‐: https://www.p-world.co.jp/machine/database/6788
- パチマガスロマガ 機種TOP: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/23/newgin_slot_23.php
- パチマガスロマガ スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/23/a.php
- パチマガスロマガ ボーナス確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/23/h.php
- パチマガスロマガ 小役確率/1000円あたりG数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/23/c.php
- パチマガスロマガ ART突入フロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/23/l.php
- pacnk 兎‐野性の闘牌‐ 設定判別/天井: https://pacnk.com/slot/tools/sh_usagi.html
- P.S enter blog ニューギン パチスロ 兎-野性の闘牌-（2012-06-27）: https://blog.livedoor.jp/psenter/archives/10039240.html

## reliabilitySummary

- releaseDate: ANALYSIS_HIGH_EXACT_DAY
- manufacturer: ANALYSIS_HIGH_CROSSCHECKED
- payoutRateBySetting: ANALYSIS_HIGH_CROSSCHECKED
- initialHitBySetting: ANALYSIS_HIGH_CROSSCHECKED
- baseGamesPer50: ANALYSIS_SINGLE_PERIOD
- netIncrease/basicPayout: ANALYSIS_HIGH_CROSSCHECKED
- resetBehavior: counter reset CONFIRMED; carryover/power-cycle/mode-state reset/detection/public morning numbers remain UNVERIFIED_AFTER_RESEARCH
