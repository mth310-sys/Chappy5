# パチスロ笑ゥせぇるすまん

machineName: パチスロ笑ゥせぇるすまん
manufacturer: 三洋物産
releaseDate: 2011-06
releaseDateStatus: MONTH_ONLY_VERIFIED; exact day UNVERIFIED_AFTER_RESEARCH. pacnk/P-WORLD系の現存DBで2011年6月導入までは確認できるが、SANYO旧公式・当時解析・旧新台スケジュール・日付候補別検索を横断しても安全な具体日を確定できなかったため推測しない。
generation: 5号機
systemType: A+ART / ボーナス + CZ + ゲーム数モード管理ART
coreStatus: COMPLETE_CORE_EXCEPT_BASE50_AND_EXACT_RELEASE_DAY; RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainの recordCount 586 / chronologicalFrontier 2011-06-27 から継続。
- LATEST_HANDOFFで2011年6月漏れ候補として指定されていた初代「パチスロ笑ゥせぇるすまん」をrecursive tree/code searchで未登録確認後、587件目としてBACKFILL。
- 導入月は2011-06まで確定するが具体日は未確定。時系列位置を6/27以前・同日・以後のいずれかへ強制しない。
- 月粒度BACKFILLのため chronologicalFrontier は2011-06-27のまま維持。

## settingConfiguration

- 設定1〜6の6段階。

## payoutRateBySetting

- 設定1: **97.7%**
- 設定2: **99.5%**
- 設定3: **100.6%**
- 設定4: **104.0%**
- 設定5: **107.3%**
- 設定6: **112.0%**

pacnk設定判別DBと後年シリーズ回顧で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## bonusProbabilityBySetting

### 笑ゥBIG / 黒GIG
- 設定1: **1/1985**
- 設定2: **1/1985**
- 設定3: **1/1985**
- 設定4: **1/1985**
- 設定5: **1/1985**
- 設定6: **1/1985**

### モグロBIG / 赤GIG
- 設定1: **1/993**
- 設定2: **1/993**
- 設定3: **1/978**
- 設定4: **1/949**
- 設定5: **1/897**
- 設定6: **1/829**

confidence: ANALYSIS_SINGLE_STRUCTURED_DB; core table retained without averaging.

## initialHitBySetting

### ART初当たり
- 設定1: **1/260**
- 設定2: **1/255**
- 設定3: **1/248**
- 設定4: **1/237**
- 設定5: **1/216**
- 設定6: **1/197**

pacnkの初代専用設定判別DB。
confidence: ANALYSIS_SINGLE_STRUCTURED_DB

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「パチスロ笑ゥせぇるすまん / 笑うセールスマン / 初代 / 三洋物産」と「50枚 / 1000円 / 千円 / ベース / コイン持ち」を組み替え、当時解析・旧DB・回顧資料を再探索したが初代固有の直接値を確定できず。後継機値や小役確率から逆算しない。

## basicPayout

- 笑ゥBIG: **約204枚**（規定払い出し298枚）
- モグロBIG: **約102枚**（規定払い出し145枚）
- ART「フクゾーラッシュ」: **1セット40G+α / 約+1.8枚/G**
- 上乗せ: 1契機 **10〜300G**
- 上位ART「真フクゾーラッシュ」: 通常ART比で上乗せ期待度約1.5倍
- 上位ART「極フクゾーラッシュ」: 通常ART比で上乗せ期待度約2倍以上

P-WORLD・パチマガスロマガ・pacnkでART基本仕様を照合。
confidence: HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時モード: **通常A / 通常B / 天国**の3種類。
- モードは福ZONEおよびART天井ゲーム数に影響。
- 天国滞在時: **99G以内に天井到達**。
- 通常時は**最大999G**消化でART突入。
- モード移行契機: ART終了時 / ボーナス終了時 / 設定変更時。

## resetBehavior — v0.7

settingChangeBehavior: **VERIFIED_PARTIAL**。設定変更時は**天井ゲーム数を再セット**、**内部モードを再セット/再抽選**、液晶ステージはランダム。初代専用の必勝本解析で直接確認。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井ゲーム数・通常A/B/天国・福ZONE/ART関連状態の引継ぎを本機固有の直接記述で確定できず。一般的5号機挙動から補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井ゲーム数・内部モード・液晶/ART/CZ状態の処理を本機固有資料で確定できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE_VERIFIED**。設定変更時は天井ゲーム数再セット。前日までの天井進捗は消失する。

ceilingAfterReset: **NORMAL_MODE_DEPENDENT_CEILING_RESELECTED; MAX_999G**。変更後モード再抽選に伴って天井を再セット。変更専用の固定短縮天井は確認されないが、天国選択時は99G以内に天井到達。

modeAfterReset: **RESELECTED_WITH_PUBLIC_NUMERIC_DISTRIBUTION**。
- 通常A: 設定1〜3 **75.0%** / 設定4・5 **80.0%** / 設定6 **85.0%**
- 通常B: 設定1〜3 **20.0%** / 設定4・5 **15.0%** / 設定6 **10.0%**
- 天国: **全設定5.0%**

stateAfterReset: **PARTIAL**。液晶ステージはランダムと確認。福ZONE、ART潜伏、上位ART等の活動中状態を設定変更した場合の厳密処理はUNVERIFIED_AFTER_RESEARCH。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **5_PERCENT_TENGOKU_START_VERIFIED**。全設定共通で設定変更時に天国5.0%。天国なら99G以内にART天井到達。

resetPenalties: **PREVIOUS_CEILING_PROGRESS_LOST_VERIFIED**。設定変更で天井ゲーム数が再セットされるため、前日までのハマリ進捗は消失。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ等による設定変更/据え置き判別の本機固有確定情報を、表記揺れ・型式/メーカー名・朝一/変更判別語を変えても回収できず。ステージは設定変更時ランダムのため、特定ステージ固定を変更判別根拠にはしない。

numericResetData:
- 設定変更時天井ゲーム数: **再セット**
- 設定変更時通常A: **75.0% (設定1〜3) / 80.0% (設定4・5) / 85.0% (設定6)**
- 設定変更時通常B: **20.0% / 15.0% / 10.0%**
- 設定変更時天国: **全設定5.0%**
- 天国モード天井: **99G以内**
- 通常時最大天井: **999G**
- 据え置き時天井/モード: **UNVERIFIED_AFTER_RESEARCH**
- 単純電源OFF→ON時天井/モード: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更専用ガックン/初期出目: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorConfidence: **HIGH_FOR_SETTING_CHANGE_COUNTER_AND_MODE_DISTRIBUTION; PARTIAL_FOR_CARRYOVER/POWER_CYCLE/DETECTION**

## conflicts

- releaseDate exact day: **UNVERIFIED_AFTER_RESEARCH**。複数資料で2011年6月までは一致するが、具体日の直接根拠を安全に確定できない。日付候補を推測・平均しない。
- performance core: pacnkの設定別機械割は後年回顧資料と一致。ボーナス/ART初当り表は現時点で初代専用structured DBを主根拠とし、別系統の完全表照合は継続QA候補。

## missingFields

- releaseDate exact day: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- active CZ/ART state handling on setting change: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「パチスロ笑ゥせぇるすまん / 笑ゥせぇるすまん / 笑うセールスマン / 初代 / 三洋物産」と、導入/納品/発売/2011年6月/6月5日/6日/12日/13日/19日/20日/26日/27日、機械割/BIG/REG/ART初当り/50枚/1000円/ベース/コイン持ち、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/天井短縮/モード/通常A/通常B/天国/ガックン/変更判別を組み替えて探索。P-WORLD、パチマガスロマガ、パチ＆スロ必勝本、pacnk、旧新台カレンダー、回顧資料を横断。最初の未ヒットでUNVERIFIEDにせず検索系統を変更したうえで、具体導入日・50枚ベース・据え置き・電断・変更判別のみ未確定として残した。

## sources — 取得日 2026-09-04

1. パチ＆スロ必勝本「設定変更&天井情報 [パチスロ笑ゥせぇるすまん]」
   - https://p.hisshobon.jp/machine/1822/1/29694
   - 設定変更時の天井ゲーム数再セット、内部モード再セット、ステージランダム、通常A/B/天国の設定別振り分け、通常時最大999G。
2. パチ＆スロ必勝本「通常時のモード [パチスロ笑ゥせぇるすまん]」
   - https://p.hisshobon.jp/machine/1822/1/29945
   - 通常A/B/天国、天国99G以内、モード移行契機、設定変更時天国5.0%。
3. pacnk「パチスロ笑ゥせぇるすまん 設定判別ツール・天井・ヤメ時まとめ」
   - https://pacnk.com/slot/2011/warausalesman/top.php
   - 導入開始2011年6月、メーカー/5号機、設定別BIG/REG/ART初当り/PAYOUT、ART基本仕様。
4. P-WORLD「パチスロ 笑ゥせぇるすまん」
   - https://www.p-world.co.jp/machine/database/6350
   - 三洋物産、5号機ART、BIG約204/102枚、ART40G+α・約+1.8枚/G。
5. パチマガスロマガ「パチスロ笑ゥせぇるすまん 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/13/a.php
   - ART40G・約+1.8枚/G、天井999G、BIG約204/102枚、上位ART概要。
6. 歴代笑ゥせぇるすまんシリーズ回顧
   - https://www.marimo0925.net/pachislot-kikaiwariranking-warausealsman-ban/
   - 初代2011年、設定別機械割97.7〜112.0%、ART仕様の別系統照合。
