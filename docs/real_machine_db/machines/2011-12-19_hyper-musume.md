# ハイパー娘

machineName: ハイパー娘
aliases: ハイパー娘 / ハイパー娘A
manufacturer: SNKプレイモア
formalModelName: ハイパー娘A
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2011-12-19
releaseDateStatus: CONFIRMED_MULTI_SOURCE

generation: 5号機
systemType: ボーナス+ART / CZ搭載
coreStatus: COMPLETE_CORE_EXCEPT_APPROVAL_NUMBER
resetQaStatus: PARTIAL_RESET_CONFIRMED_GAME_COUNTER_RESET

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ ぷよぷよ！」を再取得して開始。
- 開始時正本は recordCount 626 / chronologicalFrontier 2011-12-05。INDEXは旧19件地点のためLATEST_HANDOFFを進捗正本として使用。
- 2011-12-05同日群を再監査し、HAZUSEの次日付枠12/09・12/16もP-WORLD月次一覧等と照合。12/06〜12/18に新たな具体日付き未登録パチスロを確定できなかったため12/19群へ進行。
- GitHub code searchで「ハイパー娘」未検出を確認し627件目として追加。
- K-Navi・パチビーが導入日2011-12-19で一致。当時グリーンべるとは2011-12-18から納品予定と記載し整合。

## payoutRateBySetting

- 設定1: 96.6%
- 設定2: 98.3%
- 設定3: 99.9%
- 設定4: 104.8%
- 設定5: 109.7%
- 設定6: 113.6%

P-WORLD、パチマガスロマガで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: 1/442.8
- 設定2: 1/436.9
- 設定3: 1/431.2
- 設定4: 1/425.6
- 設定5: 1/414.8
- 設定6: 1/404.5

### REG
- 設定1: 1/682.7
- 設定2: 1/655.4
- 設定3: 1/630.2
- 設定4: 1/574.9
- 設定5: 1/546.1
- 設定6: 1/512.0

### ART初当たり
- 設定1: 1/292.5
- 設定2: 1/236.6
- 設定3: 1/262.2
- 設定4: 1/189.7
- 設定5: 1/211.3
- 設定6: 1/157.1

P-WORLD、K-Navi、パチマガスロマガで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- 設定1: 31.30G/50枚
- 設定2: 31.30G/50枚
- 設定3: 31.31G/50枚
- 設定4: 31.32G/50枚
- 設定5: 31.33G/50枚
- 設定6: 31.34G/50枚

パチマガスロマガ「1000円あたりのゲーム数」の直接値。
confidence: ANALYSIS_SINGLE_DIRECT_TABLE

## netIncrease

- ART「バトルチャンス」: 約+1.5枚/G。
- 1ラウンド30G、1セット最大150G（最大5R）+α。

SNK公式・グリーンべると・P-WORLD・パチビーで照合。
confidence: OFFICIAL_INDUSTRY_ANALYSIS_CROSSCHECKED

## basicPayout

- 赤7 BIG: 約306枚
- 黄7/青7 BIG: 約210枚
- REG: 約35枚

グリーンべると、P-WORLD、パチマガスロマガで一致。
confidence: INDUSTRY_ANALYSIS_HIGH

## modeSpecificMinimumData

- ART「バトルチャンス」はストック+ゲーム数上乗せ型。
- 通常時CZ「ハイパーチャンス」を搭載。
- 上乗せ特化「のせのせタイム」は最低5G保証、6G以降は継続抽選。継続率上限についてグリーンべると/K-Naviは95%、パチマガスロマガは90%表記のためCONFLICTとして分離。
- 通常天井はボーナス&ART間999Gで第1天井、1111Gで第2天井。P-WORLDは999G以降レア小役の1/2でART、1111GでART5セット以上と記載。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。当時天井攻略資料に「設定変更で天井までのゲーム数はリセット」と明記。その他のARTストック/CZ/内部状態処理は本機固有の直接資料を確定できずUNVERIFIED_AFTER_RESEARCH。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス&ART間ゲーム数、ARTストック、CZ/内部状態の保持を直接明示する本機固有資料を確定できない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の内部ゲーム数・ART/CZ状態・表示状態を直接確定できない。

gameCounterReset: **CONFIRMED_RESET_ON_SETTING_CHANGE**。設定変更で天井までのゲーム数がリセットされるとの当時攻略資料を確認。

ceilingAfterReset: **NO_RESET_SHORTENING_CONFIRMED**。通常天井999G/1111Gは確認。設定変更専用の短縮天井数値は再探索しても確認できない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のモード再抽選/朝一専用モードの存在を直接確定できない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の高確・CZ関連状態・ART関連状態の再抽選/引継ぎを確定できない。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮、朝一ART/CZ優遇、特定G以内当選率等の公開数値を確認できない。

resetPenalties: **CONFIRMED_PREVIOUS_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**。前日の天井ゲーム数進捗は設定変更でリセットされるため、宵越し天井狙い上は不利要素。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、ランプ等による変更/据え置き判別を本機固有資料で確定できない。

numericResetData:
- 通常第1天井: 999G
- 通常第2天井: 1111G
- 設定変更時天井カウンタ: RESET
- リセット専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更時モード振り分け: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED_AFTER_RESEARCH
- ガックン: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: ANALYSIS_SINGLE_FOR_GAME_COUNTER_RESET_OTHERWISE_UNVERIFIED_AFTER_RESEARCH

## conflicts

### のせのせタイム継続率上限
- グリーンべると / K-Navi: 最大95%。
- パチマガスロマガ: 66〜90%。
- 定義差または資料差を解消できないため平均化せずCONFLICT。

## missingFields

- approvalNumber / 検定番号
- 据え置き時の天井ゲーム数・ART/CZ/内部状態の厳密な引継ぎ
- 単純電源OFF→ON時の挙動
- 設定変更時のモード/状態振り分け
- ガックン等の変更判別
- 朝一専用公開数値

## sources

取得日: **2026-09-05**

1. SNK PLAYMORE公式「ハイパー娘」 — https://slot.snk-corp.co.jp/official/hyper_musume/
   - 型式名ハイパー娘A、公式機種ページ、ART機能の公式確認。
2. グリーンべると「毎G上乗せチャンスの『のせのせタイム』を新搭載」 — https://web-greenbelt.jp/00002394/
   - 2011-11-15、12/18納品予定、ART30G×最大5R、純増1.5枚/G、BIG/REG獲得枚数、ボーナス合算。
3. K-Navi「ハイパー娘」 — https://p-kn.com/slot/1536/
   - ホール導入開始2011-12-19、設定別BIG/REG/ART初当たり、2段階天井の存在。
4. P-WORLD「ハイパー娘」 — https://www.p-world.co.jp/machine/database/6552
   - 機械割、設定別BIG/REG/ART初当たり、獲得枚数、ART純増、999G/1111G天井。
5. パチビー「ハイパー娘」 — https://www.pachibee.jp/machines/lecture/211110002
   - 導入日2011-12-19、5号機ART/CZ/天井あり、純増約1.5枚/G。
6. パチマガスロマガ「ハイパー娘 スペック」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/37/a.php
   - ART仕様、獲得枚数。
7. パチマガスロマガ「ハイパー娘 ボーナス確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/37/h.php
   - 設定別BIG/REG/ART初当たり、機械割。
8. パチマガスロマガ「ハイパー娘 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/37/c.php
   - 設定別1000円あたりゲーム数31.30〜31.34G。
9. 目指せ月収20万！パチスロ天井解析攻略ブログ「ハイパー娘 天井解析・攻略」 — https://mezase20.com/blog-entry-495.html
   - 当時資料として第2天井1111G、設定変更で天井までのゲーム数リセットを確認。
10. HAZUSE新台カレンダー — https://hazuse.com/new-machine-calendar/newmachine-calendar/
    - 2011年12月の境界日12/02, 12/05, 12/09, 12/16, 12/19を時系列監査に使用。
11. P-WORLD 2011年12月新台カレンダー — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2011-12
    - 同月パチスロ4機種（PiaキャロットへようこそG.O.、トリプルチャンスV-30、ハイパー娘、ぷよぷよ!M）を確認。

## nextQaNotes

- 設定変更時の天井カウンタRESETは当時攻略単一資料のため、別系統で直接確認できれば信頼度を引き上げる。
- 据え置き・電断・内部状態・変更判別は一般的5号機挙動から補完しない。
- approvalNumberは型式名「ハイパー娘A」で検定公示/旧型式DBを再探索する余地あり。
