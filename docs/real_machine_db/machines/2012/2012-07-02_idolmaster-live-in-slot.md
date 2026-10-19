# アイドルマスターライブインスロット

machineName: アイドルマスターライブインスロット
manufacturer: Sammy / サミー
releaseDate: 2012-07-02
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviの2012年7月新台カレンダーと機種ページが全国導入開始2012-07-02を明記。サミー公式2012-05-14発表は2012年初夏より全国ホール稼働予定としており整合。
generation: 5号機
systemType: A+ART / 完走型押し順ART / セットストック
modelName: アイドルマスターライブインスロットZ（中古実機流通資料で確認。一次検定資料未確認のため型式確度はSECONDARY）
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

### 当時解析系列

| 設定 | 機械割 |
|---|---:|
| 1 | 96.88% |
| 2 | 98.41% |
| 3 | 102.04% |
| 4 | 105.11% |
| 5 | 109.10% |
| 6 | 111.54% |

reliability: ANALYSIS_HIGH_PERIOD_SITE
notes: パチマガスロマガ現存当時機種ページのPAYOUT系列。

### payoutRateConflict

- 5号機クロニクルおよび後年攻略整理には **97.2 / 98.4 / 99.9 / 104.3 / 110.6 / 114.6%** の別系列が存在。
- 設定3〜6の差が単純丸めでは説明できないため平均せずCONFLICTとして双方保持。

reliability: CONFLICT

## initialHitBySetting

### BIG合算

| 設定 | BIG |
|---|---:|
| 1 | 1/296.54 |
| 2 | 1/291.27 |
| 3 | 1/277.69 |
| 4 | 1/265.33 |
| 5 | 1/252.06 |
| 6 | 1/247.31 |

### REG合算

| 設定 | REG |
|---|---:|
| 1 | 1/303.41 |
| 2 | 1/296.54 |
| 3 | 1/281.27 |
| 4 | 1/270.81 |
| 5 | 1/261.10 |
| 6 | 1/252.06 |

### ボーナス合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/149.97 |
| 2 | 1/146.94 |
| 3 | 1/139.74 |
| 4 | 1/134.02 |
| 5 | 1/128.25 |
| 6 | 1/124.83 |

### ART出現率

| 設定 | ART |
|---|---:|
| 1 | 1/137.86 |
| 2 | 1/129.84 |
| 3 | 1/122.82 |
| 4 | 1/113.00 |
| 5 | 1/115.96 |
| 6 | 1/104.68 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガ精密表とK-Naviの丸め値（ボーナス合算1/149.9〜1/124.8、ART1/137.9〜1/104.7）が整合。ARTは資料表記が「ART出現率」であり、純粋な非重複初当たり定義とは断定しない。

## baseGamesPer50

| 設定 | 50枚あたり平均ゲーム数 |
|---|---:|
| 1 | 31.03G |
| 2 | 31.15G |
| 3 | 31.26G |
| 4 | 31.38G |
| 5 | 31.49G |
| 6 | 31.60G |

reliability: ANALYSIS_HIGH_PERIOD_SITE
notes: K-Navi小役確率ページの「1000円あたりの平均ゲーム数（自社調べ）」を50枚貸し相当として保存。後年整理の31〜31.6Gとも整合。

## netIncrease

value: 約0.8枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガ、K-Navi、P-WORLDで一致。

## basicPayout

- HYPER BIG: 約270枚（348枚超払い出しで終了）
- NORMAL BIG: 約198枚（252枚超払い出しで終了、またはREG当選で終了）
- REG: 約104枚 / 最大104枚（8G消化または8回入賞で終了）
- ART「LIVE STAGE」: 1セット30G、純増約0.8枚/G、セットストック型
- 上乗せゾーン「MASTER RUSH」: 20G、BAR揃い約1/1.5

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は通常 / 高確 / 超高確の内部状態が存在。
- ART「LIVE STAGE」は完走型の押し順ART、1セット30G。
- 天井: **ボーナスまたはART終了後の転落リプレイ入賞を起点として通常時765G**で、次回ボーナスまで継続する無限ART（スペシャルART相当）へ移行。
- 天井中に獲得したARTストックはボーナス消化後に放出とする当時天井解析あり。

reliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_CEILING_AND_ART_CORE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_PARTIAL_CONFIRMED_BEHAVIOR
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED_PARTIAL_RETROSPECTIVE_SOURCE. 後年機種整理で「設定変更時」を契機として高確/超高確状態がストックされ得ることを確認。ただし設定変更時の天井カウンタ処理、ARTストック処理、具体的な状態振り分けは本機固有の直接解析を今回確定できず。
carryOverBehavior: PERIOD_STRATEGY_SOURCE_SAYS_YOIGOSHI_X_BUT_EXACT_CONTRACT_UNVERIFIED. 2012年当時の天井狙い資料は本機を「宵越し×」と明記するが、それが設定変更前提の立ち回り評価か、据え置きでも内部カウンタ非継続という仕様断定かを本文から分離できない。設定据え置き時765G進捗の厳密な保持/クリア契約はUNVERIFIED_AFTER_RESEARCH。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 設定変更を伴わない電源OFF→ONのみで765G天井進捗、内部状態、ARTストック、液晶表示がどう処理されるかの本機固有資料を確定できず。
gameCounterReset: UNVERIFIED_AFTER_RESEARCH. 天井起点（ボーナス/ART終了後の転落リプレイ入賞）と765G到達条件は確認済みだが、設定変更・据え置き・単純電断それぞれのカウンタCLEAR/RETAINを直接断定できる資料は今回未確定。「宵越し×」のみからCLEARを自動推定しない。
ceilingAfterReset: NO_RESET_SPECIFIC_SHORTENING_CONFIRMED_AFTER_RESEARCH. 通常天井765Gは確認。設定変更専用の短縮天井や変更後専用天井値は確認できず。
modeAfterReset: NO_SEPARATE_GAME_COUNT_MODE_CONFIRMED; INTERNAL_STATE_TRIGGER_PARTIAL_ONLY. ゲーム数解除型の朝一専用モードは確認できず。通常/高確/超高確という内部状態は存在し、後年整理では設定変更時も高確系状態ストック契機に含まれるが、具体振り分けは未確認。
stateAfterReset: CONFIRMED_PARTIAL. 通常/高確/超高確の内部状態が存在し、設定変更時を高確系状態ストック契機に含む資料あり。設定変更直後の通常/高確/超高確の振り分け数値はUNVERIFIED_AFTER_RESEARCH。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_NUMERIC_CONFIRMED_AFTER_RESEARCH. 設定変更時の高確系状態ストック契機という定性的挙動はあるが、朝一専用ART確定・天井短縮・発生率など比較可能な恩恵数値は確認できず。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH. 当時資料の「宵越し×」は朝一天井狙いに不向きという実戦上の注意だが、設定変更時に何が失われるかを直接仕様として確定できないため、具体ペナルティへ過剰変換しない。
resetDetection: PERIOD_USER_REPORT_ONLY_NOT_PROMOTED_TO_CONFIRMED. K-Naviの2013年実戦投稿に「朝イチ設定変更否定のチャンリプ」という記述があり、同サイトレビューにも「設定変更時の挙動が分かりやすい」との利用者記述がある。しかし解析本文で条件を確定できないため、チャンスリプレイを公式/解析済み変更判別法として採用しない。ガックン、初期出目、ランプの確定契約も未確認。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData:
- 通常天井: 765G（ボーナス/ART終了後の転落リプレイ入賞起点）
- 設定変更時の短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更時状態振り分け: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内当選率: NONE_CONFIRMED_AFTER_RESEARCH

notes:
- 「アイドルマスターライブインスロット / アイドルマスター LIVE IN SLOT / スロマス / アイドルマスターライブインスロットZ / Sammy / サミー」に「設定変更 / 設定変更時 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井リセット / 765G / 高確 / 超高確 / モード / チャンスリプレイ / ガックン」を組み替えて再探索。
- サミー公式、K-Navi、P-WORLD、パチマガスロマガ、当時天井攻略、当時解析、後年5号機DB、実機流通資料を横断。
- 当時資料の「宵越し×」は保存するが、意味を設定変更時CLEARと断定せず原文の実戦評価と仕様を分離。
- 新しい「アイドルマスター ミリオンライブ！」各機種のリセット情報は本機へ流用していない。

resetQaReliability: ANALYSIS_HIGH_FOR_CORE_AND_CEILING__RETROSPECTIVE_SINGLE_FOR_SETTING_CHANGE_STATE_TRIGGER__PERIOD_STRATEGY_SOURCE_FOR_YOIGOSHI_X__UNVERIFIED_FOR_EXACT_COUNTER_POWER_CYCLE_AND_DETECTION

## conflicts

- payoutRateBySetting: パチマガスロマガ当時解析 **96.88/98.41/102.04/105.11/109.10/111.54%** と、5号機クロニクル等 **97.2/98.4/99.9/104.3/110.6/114.6%** が競合。平均せず両系列を保持。
- BIG設定6について、パチマガスロマガ精密表はBIG合算1/247.31。一部当時解析記事には1/243.31の表記があるため、K-Naviのボーナス合算1/124.8と整合する精密表系列を主値とし、1/243.31は転記差候補として保持。

## missingFields

- 検定番号
- 一次資料での正式型式名確認
- 設定変更時の765G天井カウンタCLEAR/RETAIN
- 据え置き時の765G天井進捗の厳密な引継ぎ契約
- 単純電源OFF→ON時の挙動
- 設定変更時の通常/高確/超高確振り分け数値
- 解析本文で確定した設定変更判別法（ガックン/チャンスリプレイ等）
- 公開朝一専用当選率/恩恵率

## sources

取得日: 2026-09-05

1. サミー公式ニュース https://www.sammy.co.jp/japanese/news/2012/113.html
   - 2012-05-14発表、製品発売、2012年初夏全国ホール稼働予定。
   - reliability: OFFICIAL
2. K-Navi機種ページ https://p-kn.com/slot/1652/
   - ホール導入開始2012-07-02、ボーナス合算、ART出現率、通常/高確/超高確、ART30G。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
3. K-Navi小役確率 https://p-kn.com/slot/1652/39372/
   - 設定別1000円あたり平均ゲーム数31.03〜31.60G。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
4. K-Navi 2012年7月導入カレンダー https://p-kn.com/calendar/201207/
   - 2012-07-02のSammyパチスロとして本機を掲載。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
5. パチマガスロマガ基本情報 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/134/a.php
   - ART1セット30G・約0.8枚/G、H-BIG約270枚、N-BIG約198枚、REG約104枚。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
6. パチマガスロマガボーナス確率 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/134/h-1.php
   - BIG/REG/ボーナス合算/ART精密系列、PAYOUT 96.88〜111.54%。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
7. P-WORLD https://www.p-world.co.jp/machine/database/6737
   - 5号機ART、H-BIG270枚/N-BIG約198枚/REG最大104枚、ART30G・約0.8枚/G。
   - reliability: DATABASE_HIGH
8. 5号機クロニクル https://5goki.com/sammy
   - 別機械割系列97.2〜114.6%。
   - reliability: RETROSPECTIVE_DATABASE
9. 後年攻略整理 https://smaslo.man-soft.com/slot-kaiseki/idolmaster.html
   - 導入2012-07-02、天井765G、別機械割系列97.2〜114.6%。
   - reliability: RETROSPECTIVE_ANALYSIS
10. 当時天井攻略 https://macerate.seesaa.net/article/281322900.html
   - 宵越し×、ボーナス/ART終了後転落リプレイから765Gで無限ART、次回ボーナスまで継続。
   - reliability: PERIOD_SECONDARY
11. 当時天井一覧 https://macerate.seesaa.net/article/300741744.html
   - 本機を通常時450G狙い・宵越し×として掲載し、ART非カウント型データ表示機への注意を記載。
   - reliability: PERIOD_SECONDARY
12. 後年機種整理 https://slot-kakaku.com/%E3%82%B5%E3%83%9F%E3%83%BC-%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC-%E3%83%A9%E3%82%A4%E3%83%96%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%AD/
   - 50枚31〜31.6G、765G天井、設定変更時を高確/超高確ストック契機の一つとして説明。
   - reliability: RETROSPECTIVE_SECONDARY
13. 中古実機型式表記 https://item.rakuten.co.jp/kanzaburou/042204k5/
   - 「アイドルマスターライブインスロットZ」表記。
   - reliability: SECONDARY_MARKET

## chronologicalAudit

- 2012-07-02同日群のK-Navi一覧は「スーパー5」「餓狼伝説☆双撃」「アイドルマスターライブインスロット」「めぞん一刻～夏色の風と～」「天空のシンフォニア ～光を求めて～」。本機はこのうち3機種目として登録。
- 次は同日群4機種目 **めぞん一刻～夏色の風と～（オリンピア）** をrepo重複確認後に処理する。同日群を閉じるまで07-03以降へ進まない。
