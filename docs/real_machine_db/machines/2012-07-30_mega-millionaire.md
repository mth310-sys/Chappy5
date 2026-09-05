# メガミリオネア

machineName: メガミリオネア
manufacturer: ラスター（製造） / WIN NET TECHNOLOGY・メテオ系販売資料あり
releaseDate: 2012-07-30
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi機種ページおよび2012-06-11発表会記事がホール導入2012-07-30予定/開始とする。
generation: 5号機
systemType: ART専用 / BR非搭載 / セットストック+ゲーム数上乗せ
modelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS_AND_PAYOUT_CONFLICT

## payoutRateBySetting

### P-WORLD / 詳細解析系列

| 設定 | 機械割 |
|---|---:|
| 1 | 95.49% |
| 2 | 98.72% |
| 3 | 101.79% |
| 4 | 104.74% |
| 5 | 109.34% |
| 6 | 119.1% |

### K-Navi系列

| 設定 | 機械割 |
|---|---:|
| 1 | 95.8% |
| 2 | 99.0% |
| 3 | 102.2% |
| 4 | 104.9% |
| 5 | 109.7% |
| 6 | 119.4% |

reliability: CONFLICT
notes: P-WORLDとCrankySevenは95.49/98.72/101.79/104.74/109.34/119.1%（CrankySevenは95.5/98.7/101.8/104.7/109.3/119.1%へ丸め）で一致。一方K-Naviは全設定で約0.2～0.4pt高い系列を掲載。平均化せず両系列保持。

## initialHitBySetting

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED
notes: K-NaviにはART確率専用ページが存在することを確認したが、現存取得経路では本文取得不能。通常時ART初当たりの設定別数値を別系統資料でも直接回収できなかったため推定しない。

### 確定役

- MEGA揃い: 全設定共通 1/8192
- 赤V揃い: 約1/3855.1（CrankySeven）

reliability: ANALYSIS_HIGH_FOR_MEGA_CROSSCHECKED__ANALYSIS_SINGLE_FOR_RED_V

## baseGamesPer50

value: 約20G / 50枚（1000円あたり約20G）
reliability: ANALYSIS_SINGLE_DIRECT
notes: CrankySevenが本機について1000円あたり約20Gと直接掲載。当時発表記事も通常時ベースを抑えART瞬発力へ振った仕様と説明。後継ヴィーナス版の20.5G/1000円は本機値へ流用しない。

## netIncrease

value: 約+2.4枚/G
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_CROSSCHECKED
notes: 2012-06-11発表会記事、遊技通信系記事、K-Navi、P-WORLD、CrankySevenで一致。

## basicPayout

- ART「メガゲーム」: 1セット100G+α、純増約2.4枚/G
- 通常時MEGA揃い: ART5セット以上確定
- 通常時V絵柄揃い: ART2セット以上（K-Navi）
- ボーナス: 非搭載

reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- ART「メガゲーム」はセットストック+ゲーム数上乗せ型。
- 通常時には複数の内部状態があり、小役成立時に状態移行抽選。
- ART終了後は引き戻し区間「メガゾーン」を経由する資料あり。
- 天井: ART間/通常状態1200G消化後、前兆を経てART突入。
- 天井ARTには後年回顧資料でループ率恩恵の記述があるが、一次/当時解析で十分な照合が取れていないためnumericResetDataには採用しない。

reliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_CEILING_AND_ART_STRUCTURE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_GAPS_AND_RETROSPECTIVE_MODE_EVIDENCE
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: PARTIAL_CONFIRMED. 後継「ヴィーナスヴァージョン」の2013年当時攻略資料が、比較注記として「前作のメガミリオネアは設定変更後でもモードは引き継ぐ仕様だった」と明記。本機の設定変更専用K-Navi項目の存在も確認したが本文取得不能のため、モード以外の設定変更契約はUNVERIFIED_AFTER_RESEARCH。
carryOverBehavior: PARTIAL_CONFIRMED_FOR_MODE_BY_RETROSPECTIVE_COMPARISON. 設定変更でもモード引継ぎとされるため純据え置きでもモード保持が自然に示唆されるが、純据え置き専用の本機直接記述は回収できず、ゲーム数/ARTストック等へ一般化しない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. K-Navi当時掲示板には「電源オンオフでARTストックが消滅するか」という質問が残るが回答本文は取得できず、契約根拠として採用しない。
gameCounterReset: UNVERIFIED_AFTER_RESEARCH. 1200G天井は複数資料で確定したが、設定変更時に天井カウンタがCLEAR/RETAINかを本機固有の直接資料で確定できず。K-Navi実戦投稿には「前日からの宵越し天井と思われる」とする事例があるが、設定変更有無が確定しないため根拠にしない。
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH. 通常天井1200G+前兆。設定変更専用短縮天井の公開値は確認できず。
modeAfterReset: RETAIN_ON_SETTING_CHANGE_RETROSPECTIVE_ANALYSIS. 2013年の後継機解析が前作比較として設定変更後もモード引継ぎと明記。単一系統の回顧比較なので信頼度ANALYSIS_SINGLE_RETROSPECTIVE。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH. 「モード」と通常時内部状態の全てを同一視せず、状態の再抽選/保持は別途未確認。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH. 設定変更専用の短縮天井・朝一高確・当選率優遇等は確認できず。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH. 天井カウンタの設定変更時処理が未確定なので前日ハマリ消失等を推測しない。
resetDetection: UNVERIFIED_AFTER_RESEARCH. 初期液晶出目、ガックン、リール挙動等の本機固有変更判別契約を確定できず。後継ヴィーナス版の「123スタート」は流用しない。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData: NONE_CONFIRMED

notes:
- 「メガミリオネア / MEGA MILLIONAIRE / ラスター / WIN NET」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1200G / モード / 状態 / ガックン」を組み替えて、K-Navi、P-WORLD、当時業界記事、旧解析サイト、後継機当時解析の前作比較、回顧資料まで横断。
- 後継「ヴィーナスヴァージョン」は別機種。前作について明示的に比較記述された情報だけを補助証拠として使用し、ヴィーナス版固有の800G天井・123出目・設定変更時天井リセットは本機へ流用しない。
- 5号機のため有利区間は非該当。

resetQaReliability: ANALYSIS_SINGLE_RETROSPECTIVE_FOR_MODE_RETAIN__UNVERIFIED_AFTER_MULTI_QUERY_RESEARCH_FOR_COUNTER_POWER_CYCLE_STATE_AND_DETECTION

## conflicts

- 機械割はP-WORLD/CrankySeven系列 95.49/98.72/101.79/104.74/109.34/119.1% と、K-Navi系列 95.8/99.0/102.2/104.9/109.7/119.4% が競合。平均化しない。
- メーカー表記はK-Naviが「ウィンネット」、P-WORLD・CrankySeven・5号機クロニクルが「ラスター」。2012年業界記事は「メテオが発表」「ラスター製」としており、本レコードでは製造=ラスターを主表記、企画/販売系表記としてWIN NET TECHNOLOGY/メテオを併記。

## missingFields

- modelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- ART initial hit by setting: UNVERIFIED_AFTER_RESEARCH
- setting-change ceiling counter handling: UNVERIFIED_AFTER_RESEARCH
- pure carry-over contract beyond mode: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-05

- K-Navi 機種情報: https://p-kn.com/slot/1675/
- K-Navi 発表会速報（2012-06-11）: https://p-kn.com/topics/exhibition/953/
- P-WORLD: https://www.p-world.co.jp/machine/database/6766
- 遊技通信社提供の当時業界記事転載: https://www.55hadama.com/new/2012-06-13-191541.html
- CrankySeven旧解析: https://crankyseven.com/megamillionaire-pc.htm
- 5号機クロニクル ラスター一覧: https://5goki.com/luster
- 後継ヴィーナス版の当時解析・前作比較: https://macerate.seesaa.net/article/322077320.html

## reliabilitySummary

- releaseDate: ANALYSIS_HIGH_EXACT_DAY_PLUS_CONTEMPORARY_INDUSTRY_SCHEDULE
- manufacturer: INDUSTRY_PLUS_ANALYSIS_HIGH_WITH_LABELING_NOTE
- payoutRateBySetting: CONFLICT_BETWEEN_TWO_ESTABLISHED_SERIES
- ART structure/netIncrease/ceiling: INDUSTRY_PLUS_ANALYSIS_HIGH_CROSSCHECKED
- baseGamesPer50: ANALYSIS_SINGLE_DIRECT
- initialHitBySetting: UNVERIFIED_AFTER_RESEARCH
- resetBehavior: PARTIAL; MODE_RETAIN has retrospective analysis evidence, counter/power/state/detection remain UNVERIFIED_AFTER_RESEARCH
