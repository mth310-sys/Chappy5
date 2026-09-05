# めぞん一刻～夏色の風と～

machineName: めぞん一刻～夏色の風と～
manufacturer: オリンピア
releaseDate: 2012-07-02
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviがホール導入開始2012-07-02を明記。グリーンべるとの2012-05-22業界記事は納品開始2012-07-01予定としており、納品日/ホール導入日の定義差として整合。
generation: 5号機
systemType: A+ART / CZ経由ART / セットストック+ゲーム数上乗せ
modelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.8% |
| 3 | 100.3% |
| 4 | 104.3% |
| 5 | 110.4% |
| 6 | 119.4% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: CrankySevenおよび中古実機流通A-SLOTで97.2/98.8/100.3/104.3/110.4/119.4%が一致。2-9伝説等は設定6を119.5%、パチマガスロマガは119%と丸め表示するため、設定6は119.4%を主値とし119.5%を丸め/転記差候補として保持。

## initialHitBySetting

### BIG

| 設定 | BIG |
|---|---:|
| 1 | 1/468.1 |
| 2 | 1/448.9 |
| 3 | 1/431.2 |
| 4 | 1/404.5 |
| 5 | 1/385.5 |
| 6 | 1/352.3 |

### REG

| 設定 | REG |
|---|---:|
| 1 | 1/565.0 |
| 2 | 1/537.2 |
| 3 | 1/512.0 |
| 4 | 1/489.1 |
| 5 | 1/468.1 |
| 6 | 1/436.9 |

### ボーナス合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/256.0 |
| 2 | 1/244.5 |
| 3 | 1/234.1 |
| 4 | 1/221.4 |
| 5 | 1/211.4 |
| 6 | 1/195.0 |

### ART初当り

| 設定 | ART |
|---|---:|
| 1 | 1/622.8 |
| 2 | 1/605.9 |
| 3 | 1/586.7 |
| 4 | 1/514.3 |
| 5 | 1/486.1 |
| 6 | 1/386.6 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: K-Navi、P-WORLD、中古実機流通資料で主要数値が一致。

## baseGamesPer50

value: 約31G～33G / 50枚相当
reliability: ANALYSIS_SINGLE_RETROSPECTIVE
notes: CrankySevenの「1000円あたり約31G～33G」を50枚貸し相当として保存。今回、独立別ソースで同レンジの直接表記を確定できなかったため単一整理資料扱い。

## netIncrease

value: 約1.4枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED_INDUSTRY
notes: グリーンべると当時業界記事、K-Navi、パチマガスロマガ、P-WORLDで一致。

## basicPayout

- BIG: 約204枚（297枚超払い出しで終了）
- REG: 約50枚（48枚超払い出しで終了）
- ART「ドラマチックタイム」: 1セット40～300G+α / 純増約1.4枚/G / セットストック+ゲーム数上乗せ
- 「ドラマチックタイムSP」: 残りゲーム数を消費せず次回ボーナスまで継続する無限ART相当
- 「ウェディングモード」: 全7エピソード+エンディング+追加ARTが確定するプレミアムART

reliability: INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- CZ「ロマンスタイム」は最大32G、自力ART抽選ゾーン。パチマガスロマガではトータル期待度約33%。
- 通常時は低確/高確の内部状態が存在。
- 状態とは別にA～Dの内部モードが存在する整理資料があり、ボーナス後・規定G消化後に昇格抽選、ART後に転落抽選。
- 第1天井系: ボーナス間の規定G数で「ドラマチックタイムSP」抽選/当選。P-WORLDは100～1500Gで発動可能性、特に510/950/1500Gが強いと整理。別資料は99～1499Gの規定G、または1500G本天井と表記するため、起点/境界の1G差を平均化しない。
- 第2天井: ボーナス間1590Gでウェディングモード。後年整理の一部に1589G表記があり、到達/消化完了のカウント定義差候補として保持。

reliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_ART_AND_CEILING_CORE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_CONFIRMED_GAME_COUNTER_RESET_AND_GAPS
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED_PARTIAL. 本機固有の解析整理で「設定変更時は天井到達までのゲーム数がクリア」を確認。当時2012年の天井攻略も本機を宵越し×とし、設定変更確定台を通常時と別の狙い目で扱う。設定変更時の内部モードA～D/低高確状態/ARTストックの厳密な再抽選契約は今回確定できず。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH. 当時攻略の「宵越し×」は設定変更リスクを含む立ち回り評価として保存するが、純粋な据え置き時にボーナス間天井G数・内部モード・高確ゲーム数・ART関連状態がすべて保持されるという本機固有契約までは直接確認できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 設定変更を伴わない電源OFF→ONのみの場合に、天井進捗・A～Dモード・低高確状態・液晶表示がどうなるかの本機固有資料を確認できず。
gameCounterReset: CONFIRMED_CLEAR_ON_SETTING_CHANGE. CrankySevenが設定変更時に天井到達までのゲーム数がクリアされると明記。2-9伝説も設定変更で天井G数リセットと整理。当時天井攻略の宵越し×とも整合。
ceilingAfterReset: RESET_RESELECTS_OR_ALTERS_FIRST_CEILING_DISTRIBUTION__EXACT_NUMERIC_TABLE_UNVERIFIED. 当時/後年攻略は設定変更確定台を別狙い目とし、後年整理は設定変更後に天井振り分けが変わる旨を記録。ただし設定変更専用の全規定G振り分け表・最大天井短縮値は今回確定できず。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH. 通常時A～Dモードの存在は確認したが、設定変更直後のA～D振り分けや引継ぎ/再抽選の直接値を確定できず。天井規定G振り分け変化と内部A～Dモードを同一概念として自動統合しない。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH. 通常時の低確/高確は確認済みだが、設定変更直後の状態振り分け・高確ゲーム数付与率を直接確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: CONFIRMED_QUALITATIVE_ONLY. 設定変更後は通常時と天井規定G振り分けが異なるとする攻略資料があり、設定変更確定台を通常より浅い700Gから狙う当時資料が存在。ただしリセット専用の全振り分け・期待当選率は未確認のため数値恩恵へ過剰変換しない。
resetPenalties: CONFIRMED. 設定変更で前日の天井進捗がクリアされるため、前日ハマリのボーナス間天井進捗を失う。
resetDetection: UNVERIFIED_AFTER_RESEARCH. 「めぞん一刻/夏色の風と/オリンピア」と設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・初期出目・液晶ステージ等を組み替えて検索したが、本機固有の解析済みガックン/表示判別契約を確定できず。
publicMorningNumbers: PARTIAL_STRATEGY_NUMERIC_ONLY. 当時天井攻略は通常850G狙いに対して設定変更確定台700G狙いを掲載するが、これは解析上の朝一当選率ではなく実戦狙い目。設定変更時の規定G振り分け率、特定G以内当選率はUNVERIFIED_AFTER_RESEARCH。
numericResetData:
- 設定変更時ゲーム数: CLEAR
- 通常側第1天井候補: 100～1500G規定 / 510G・950G・1500Gが主要ポイント（資料表現差あり）
- 第2天井: 1590G（1589G表記資料あり）
- 当時攻略の狙い目: 通常ボーナス間850G / 設定変更確定台700G（仕様値ではなく戦略値）
- 設定変更時A～Dモード振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更時低確/高確振り分け: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内の当選率: UNVERIFIED_AFTER_RESEARCH

notes:
- 「めぞん一刻～夏色の風と～ / めぞん一刻 夏色 / めぞん一刻3 / オリンピア / 平和」に「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井リセット / 天井短縮 / 天井振り分け / モード / 高確 / ガックン / 50枚 / 1000円」を組み替えて再探索。
- K-Navi、P-WORLD、パチマガスロマガ、グリーンべると、2012年当時天井攻略、後年解析整理、旧機種回顧資料、中古実機流通資料を横断。
- K-Naviには本機専用「設定変更後の挙動」ページが存在することまで確認したが、現存キャッシュから本文を直接取得できなかったため、見出しだけを根拠に具体仕様を補完していない。
- 後継/別スペックのめぞん一刻シリーズのリセット情報は本機へ流用していない。

resetQaReliability: ANALYSIS_HIGH_FOR_GAME_COUNTER_RESET__PERIOD_STRATEGY_PLUS_RETROSPECTIVE_FOR_RESET_CEILING_BEHAVIOR__UNVERIFIED_FOR_PURE_CARRYOVER_POWER_CYCLE_STATE_MODE_AND_DETECTION

## conflicts

- 天井第1段階の表記: P-WORLDはボーナス間100～1500Gで発動可能性、K-Navi/パチマガ系は天井到達1500Gの説明、後年資料は99～1499G規定Gと表記。510/950/1500Gが主要ポイントという共通部分を保持し、1G境界差や「規定G抽選」と「本天井」を混同しない。
- 第2天井: 1590G表記が複数、1589G表記も存在。到達ゲーム/消化完了の数え方差候補として平均化しない。
- 設定6機械割: 119.4%と119.5%が存在。97.2～110.4%は一致し、0.1pt差は丸め/転記差候補として保持。

## missingFields

- 一次資料での正式型式名
- 検定番号
- 50枚ベースの独立別ソース照合
- 純据え置き時の天井/モード/状態保持契約
- 単純電源OFF→ON時の挙動
- 設定変更直後A～Dモード振り分け
- 設定変更直後の低確/高確状態振り分け
- 設定変更専用の全天井規定G振り分け数値
- 解析済み変更判別法（ガックン/初期出目/液晶等）
- 公開朝一特定G以内当選率

## sources

取得日: 2026-09-05

1. K-Navi 機種トップ https://p-kn.com/slot/1646/
   - 導入日、設定別BIG/REG/ボーナス合算/ART初当り、ART概要、設定変更後ページの存在。
2. グリーンべると / P-WORLD業界ニュース https://news.p-world.co.jp/articles/5308/greenbelt
   - 2012-05-22記事、納品開始7/1予定、ART純増1.4枚/G・1セット40G～等。
3. P-WORLD https://www.p-world.co.jp/machine/database/6738
   - BIG/REG/ART確率、ボーナス枚数、ART、天井100～1500G・510/950/1500G、1590Gウェディング。
4. パチマガスロマガ スペック https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/104/a.php
   - BIG約204枚、REG約50枚、ART純増1.4枚/G、設定6 PAYOUT119%丸め。
5. パチマガスロマガ ART突入フロー https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/104/l.php
   - CZ期待度約33%、ART1セット40～300G、純増1.4枚/G、1500G天井説明。
6. CrankySeven https://crankyseven.com/mezon-natuiro-pc.htm
   - 機械割97.2～119.4%、1000円約31～33G、低確/高確、A～Dモード、510/950/1500/1590G天井、設定変更時ゲーム数クリア。
7. 天井ハイエナ生活 当時一覧 https://macerate.seesaa.net/article/268277971.html
   - 2012年当時の本機「通常850G / 設定変更確定台700G / 宵越し×」という実戦戦略。
8. 2-9伝説まとめ https://29den.com/mezonikkoku3/
   - 機械割、天井、設定変更で天井G数リセット、設定変更直後を優先する整理。
9. A-SLOT https://www.a-slot.com/SHOP/heiwa79.html
   - 設定別BIG/REG/合算/ART初当り/機械割のクロスチェック。
10. パチスロ解析ガイド https://pachislot-guide.net/2012/mezon-ikkoku-natsuiro/
   - 導入日、基本獲得枚数、ART、99～1499G/1589Gの別天井表記。
