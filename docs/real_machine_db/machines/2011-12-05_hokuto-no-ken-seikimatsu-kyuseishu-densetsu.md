# パチスロ北斗の拳 世紀末救世主伝説

machineName: パチスロ北斗の拳 世紀末救世主伝説
aliases: パチスロ北斗の拳～世紀末救世主伝説～ / 北斗の拳 世紀末救世主伝説 / 北斗 世紀末救世主
manufacturer: Sammy / サミー
formalModelName: パチスロ北斗の拳F
approvalNumber: 1S0777
releaseDate: 2011-12-05
releaseDateStatus: EXACT_HALL_INTRODUCTION_CROSSCHECKED

generation: 5号機
systemType: ART / ボーナス+ART
coreStatus: COMPLETE_CORE_EXCEPT_BASE_DIRECT_SETTING_TABLE_UNVERIFIED
resetQaStatus: RESET_BEHAVIOR_CORE_CONFIRMED_WITH_NUMERIC_RESET_MODE_DATA

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「クイーンジャック-30」を再取得して開始。
- 開始時正本は recordCount 624 / chronologicalFrontier 2011-11-21。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定の2011-12-02枠をHAZUSEカレンダー、日付完全一致検索、業界記事検索で再監査したが、2011-12-02導入の5号機パチスロ機種を今回確定できなかった。12/02当日の業界記事として確認できたのは旧4号機アプリ配信等で、本線実機候補ではない。
- 2011-12-05導入はHAZUSEとアタリ7で一致。「パチスロ北斗の拳 世紀末救世主伝説」をGitHub repo code searchで未検出確認し625件目として追加。
- 同日群は未閉鎖。少なくとも「パチスロ ぷよぷよ！」が2011-12-05導入候補として確認されているため次回も12/05群を継続する。

## payoutRateBySetting

HAZUSE解析値:
- 設定1: 97.0%
- 設定2: 98.5%
- 設定3: 100.6%
- 設定4: 104.4%
- 設定5: 109.4%
- 設定6: 115.2%

後年回顧資料・アタリ7でも同系列を確認。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### ART「激闘乱舞」初当たり

- 設定1: 1/389.5
- 設定2: 1/378.5
- 設定3: 1/354.4
- 設定4: 1/318.8
- 設定5: 1/271.1
- 設定6: 1/221.6

CrankySevenおよび後年北斗シリーズ回顧資料で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

### ボーナス+ART初当たり合成

HAZUSE / アタリ7:
- 設定1: 1/298.9
- 設定2: 1/288.5
- 設定3: 1/272.0
- 設定4: 1/247.7
- 設定5: 1/216.5
- 設定6: 1/182.2

ART単独初当たりとは定義が異なるためCONFLICTにせず別指標として保持。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH_FOR_DIRECT_COMPARABLE_TABLE**。

- 「パチスロ北斗の拳 世紀末救世主伝説 / パチスロ北斗の拳F / 1S0777」に「50枚 / 1000円 / 1k / コイン持ち / ベース / 34.6 / 35.0」を組み替えて再探索。
- 34.6～35.0G/50枚とする整理値は検索履歴上確認したが、今回保存時に機種固有の比較可能な一次/高信頼直接表を再取得できなかったため推定・検索スニペット転記はしない。
confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- ART「激闘乱舞」: 約+2.2枚/G。
- 基本1セット30G+αに継続バトル8Gを伴う。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- 通常時ボーナス「宿命の刻」: 約113枚。
- ART中ボーナス「TURBO」: 約76枚。
- HAZUSE配当表、パチマガスロマガ、中一商事の機種概要で同定義を確認。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時の主要内部モードは低確 / 通常 / 天国 / 前兆。
- ART「激闘乱舞」は1セット30G+α+継続バトル8G、純増約+2.2枚/G。
- 通常時1599G消化で天井。到達時は89%継続ART + トキストック1個が確定する解析。
- ボーナスまたはART成立で通常ゲーム数をリセット。
- 完全再現用の小役別全モード移行率、ART上乗せ詳細、継続率全振り分けは物差しDB対象外として収集しない。

## resetBehavior — v0.7

settingChangeBehavior: **GAME_COUNTER_CLEAR_AND_INTERNAL_MODE_RELOT_CONFIRMED**。設定変更時は天井到達までのゲーム数がクリアされる。さらに設定変更後は低確/通常/天国へ設定別でモード再振り分けされる。一方、設定変更しても液晶ステージは引き継ぐため、画面だけでは内部モード据え置きとは判断できない。

carryOverBehavior: **CEILING_AND_INTERNAL_MODE_CARRYOVER_UNVERIFIED_AFTER_RESEARCH / DISPLAY_STAGE_PERSISTENCE_NOT_EQUIVALENT_TO_INTERNAL_CARRYOVER**。据え置き時の1599G天井進捗および内部モード引継ぎを機種固有の直接資料で今回確定できなかった。設定変更時のクリアとは分離して保持する。

powerCycleBehavior: **DISPLAY_STAGE_AND_COMPANION_PERSIST_CONFIRMED / CEILING_AND_INTERNAL_MODE_EFFECT_UNVERIFIED_AFTER_RESEARCH**。CrankySevenは設定変更の有無や電源OFFがあっても液晶ステージ・同行キャラは変化しないと記載。ただし単純電源OFF→ONのみの天井カウンタ/内部モードについて明示した直接資料は今回確定できない。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。通常1599G天井へのゲーム数は設定変更でクリア。通常遊技中はボーナスまたはART成立でも通常ゲーム数がリセットされる。

ceilingAfterReset: **NO_SHORTENED_RESET_CEILING_CONFIRMED / NORMAL_CEILING_COUNTER_RESTARTS_TOWARD_1599G**。設定変更時に天井カウンタはクリアされるが、設定変更専用の短縮天井値は確認されない。通常天井は1599G。

modeAfterReset: **RELOT_WITH_SETTING_DEPENDENT_LOW_NORMAL_HEAVEN_DISTRIBUTION**。設定変更後のモード移行率は公開数値あり。低確/通常/天国へ再振り分け。

stateAfterReset: **COVERED_BY_MODE_AFTER_RESET_FOR_MAIN_NORMAL_STATE / ART_CLOSING_EDGE_CASE_PARTIAL**。朝一客行動へ主要な通常状態は上記モード再抽選で表現する。CrankySevenはART中閉店後に設定変更された場合シンステージ開始とするが、ART内部ストック等の完全再現用境界抽選は収集対象外。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **SETTING_DEPENDENT_HEAVEN_START_CHANCE**。設定変更時に天国スタート抽選があり、設定1 15.1%～設定6 30.0%。一方、天井短縮は確認されない。

resetPenalties: **PREVIOUS_DAY_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**。前日の1599G天井進捗は設定変更時にクリアされるため、宵越し天井狙いに対する明確な不利要素。

resetDetection: **DISPLAY_STAGE_IS_NOT_A_SIMPLE_RESET_MARKER / POST_RESET_MODE_INFERENCE_POSSIBLE_FROM_SUBSEQUENT_BEHAVIOR / GAKKUN_UNVERIFIED_AFTER_RESEARCH**。設定変更後も液晶ステージを引き継ぐためステージ初期化による単純判別は不可。K-Naviは変更後の演出から滞在モードを見抜く旨を示す。本機固有のガックン確定判別資料は、機種名/型式に「ガックン / 朝一 / 設定変更 / リセット」を組み替えて再探索しても確定できなかった。

numericResetData:
- 設定変更後・低確: 設定1 54.9% / 設定2 53.8% / 設定3 51.0% / 設定4 48.0% / 設定5 44.0% / 設定6 40.0%
- 設定変更後・通常: 全設定30.0%
- 設定変更後・天国: 設定1 15.1% / 設定2 16.2% / 設定3 19.0% / 設定4 22.0% / 設定5 26.0% / 設定6 30.0%
- 設定変更時天井カウンタ: CLEAR
- 通常天井: 1599G
- リセット専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- ガックン: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_COUNTER_MODE_AND_DISPLAY_STAGE / UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_INTERNAL_COUNTER_AND_GAKKUN

## conflicts

NONE_CONFIRMED_FOR_SAME_DEFINITION_CORE_VALUES。

- ART初当たり1/389.5～1/221.6と「ボーナス+ART初当たり」1/298.9～1/182.2は定義差であり競合ではない。
- 宿命の刻約113枚 / TURBO約76枚はHAZUSE・パチマガスロマガ・中一商事の同定義で一致。

## missingFields

- baseGamesPer50（保存時に再取得可能な高信頼直接表）
- 据え置き時の1599G天井カウンタ引継ぎの直接明示
- 単純電源OFF→ONのみの天井カウンタ/内部モード挙動
- 本機固有のガックン変更判別

## sources

取得日: **2026-09-05**

1. HAZUSE「パチスロ北斗の拳 世紀末救世主伝説」 — https://hazuse.com/machine/pachislot/1S0777/
   - 導入2011-12-05、Sammy、型式パチスロ北斗の拳F、検定1S0777、ボーナス+ART初当たり、機械割、ART仕様、1599G天井、宿命の刻/TURBO獲得枚数。
2. K-Navi「モード移行率(その他の契機)」 — https://p-kn.com/slot/1512/36183/
   - 設定変更時の低確/通常/天国モード振り分け全設定、設定変更後もステージ引継ぎ。
3. CrankySeven「北斗の拳 世紀末救世主伝説 天井について」 — https://www.crankyseven.com/sp/hokutonoken-seikimatu19-pc.htm
   - 1599G天井、89%ART+トキストック1個、設定変更時に天井ゲーム数クリア。
4. CrankySeven「北斗の拳 世紀末救世主伝説 解析」 — https://crankyseven.com/hokutonoken-seikimatu-pc.htm
   - 設定変更で天井ゲーム数クリア、設定変更/電源OFFでも液晶ステージ・同行キャラは変化しない、ART初当たり、ART仕様。
5. パチマガスロマガ「パチスロ北斗の拳～世紀末救世主伝説～」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/131/a.php
   - ART 30G+バトル8G、純増2.2枚/G、通常時約113枚/TURBO約76枚。
6. 中一商事「サミー パチスロ北斗の拳 世紀末救世主伝説」 — https://www.nakaiti.com/html/sSammy164.html
   - 型式名、5号機ART、宿命の刻約113枚、TURBO約76枚、ART30G+α/約2.2枚G。
7. アタリ7「パチスロ北斗の拳 世紀末救世主伝説」 — https://www.atari7.com/slot/date1320203826.php
   - 導入2011-12-05、ボーナス+ART初当たり、機械割のクロスチェック。
8. 後年北斗シリーズ回顧 — https://hyakuretsu.com/sammy_hokutonoken_kyudai_shindai/
   - ART初当たり1/389.5～1/221.6、機械割97.0～115.2の補助照合。
9. グリーンべると「ネクソン、『スーパーブラックジャック』を配信」（2011-12-02） — https://web-greenbelt.jp/00002470/
   - 12/02日付監査の補助。旧4号機オンラインアプリ配信記事であり本線の新規5号機導入ではない。

## QA note

- 本機では「ART単独初当たり」と「ボーナス+ART初当たり」の2系列を同じ初当たりとして混ぜない。
- resetBehaviorでは設定変更時だけ必要なモード振り分けを保存し、通常小役別の全モード移行表は物差し範囲外として収集しない。
- 設定変更後も液晶ステージが残るため、「見た目が据え置き＝内部も据え置き」とは扱わない。
- 次回は2011-12-05同日群を継続監査し、未登録確認後「パチスロ ぷよぷよ！」を優先候補とする。12/05群を閉じるまで後日へ進まない。
