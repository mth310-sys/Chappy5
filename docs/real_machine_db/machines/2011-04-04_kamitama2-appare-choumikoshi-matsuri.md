# 神たま2 ～あっぱれ超みこし祭～

machineName: 神たま2 ～あっぱれ超みこし祭～
manufacturer: SNKプレイモア
releaseDate: 2011-04-04
releaseDateStatus: EXACT_DATE_CROSSCHECKED
generation: 5号機
systemType: ボーナス + ART / 引き戻しRT / 天井あり
coreStatus: COMPLETE_CORE_EXCEPT_BASE_RESET_PARTIAL

## chronologyNote

- 最新mainの564件目「ヱヴァンゲリヲン～真実の翼～」を正本として引継ぎ。
- 2011-03-28同日群と3/29〜4/3境界を再監査し、次の全国導入日アンカーとしてK-Naviの2011-04-04を確認。
- repo検索で本機未登録を確認して565件目として追加。

## payoutRateBySetting

- 設定1: **96.7%**
- 設定2: **98.4%**
- 設定3: **100.1%**
- 設定4: **104.8%**
- 設定5: **108.5%**
- 設定6: **112.2%**

pacnkと後年シリーズ回顧資料で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG合算
- 1/378.8 / 1/366.1 / 1/354.2 / 1/343.1 / 1/332.7 / 1/322.8

### REG合算
- 1/728.2 / 1/712.3 / 1/697.2 / 1/682.7 / 1/668.7 / 1/655.4

### みこしチャンス
- 全設定 **1/993**

### ART初当り
- 設定1: **1/315.7**
- 設定2: **1/301.4**
- 設定3: **1/306.9**
- 設定4: **1/251.6**
- 設定5: **1/254.4**
- 設定6: **1/223.7**

P-WORLD/K-Navi/pacnkを突合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「神たま2 / 神たま2～あっぱれ超みこし祭～ / SNKプレイモア」と「50枚 / 1000円 / コイン持ち / ベース / 回転数」を組み替え、P-WORLD、K-Navi、パチマガスロマガ、旧解析/後年DBを横断したが、本機固有の比較可能な50枚ベースを直接確定できず。小役確率からの逆算は行わない。

## netIncrease

- ART「みこし祭」: **約+1.2枚/G**
- ART「超みこし祭」: **約+1.2枚/G**
confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- すーぱーびっぐ: **約306枚**
- びっぐ: **約207枚**
- れぐ: **約45枚**
- みこしチャンス: **約27枚**

P-WORLD/パチマガスロマガで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 「みこし祭」: 1セット **30G+α**、ゲーム数上乗せ+ストック式。
- 「超みこし祭」: **30G固定**の上乗せ特化ART。終了後は獲得したゲーム数を上乗せした「みこし祭」へ。
- ART終了後は引き戻しRT「後夜祭」。
- 天井: **ボーナス間1200G**。到達で「超みこし祭+α」が確定し、以降のボーナスでも同恩恵が確定。

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_GAME_COUNT_CLEARED_CONFIRMED / OTHER_INTERNAL_STATE_UNVERIFIED**。旧5号機天井DBの本機専用記述で、設定変更後は天井到達までのゲーム数がクリアされることを確認。

carryOverBehavior: **CEILING_PROGRESS_CARRIED_WHEN_UNCHANGED / OTHER_STATE_PARTIAL**。据え置きなら前日ボーナス間ゲーム数を用いた宵越し天井が成立する資料/実戦記述を確認。ただし通常モード、ARTストック、後夜祭/潜伏等の全状態保持までは直接確定せず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の本機固有天井カウンタ/モード/ART状態処理は直接資料を確定できず、据え置き一般論から補完しない。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。ボーナス間1200G天井進捗は設定変更でクリア。

ceilingAfterReset: **1200G_FROM_RESET / NO_SHORTENING_CONFIRMED**。設定変更専用の短縮天井は確認されない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時には内部モード（高確/超高確等）が存在するが、設定変更時振り分けの直接値は今回確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ARTストック/潜伏/後夜祭等の設定変更時処理を本機固有資料で直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井・高確優遇・朝一当選率優遇の公開値は確認されず。

resetPenalties: **PREVIOUS_CEILING_PROGRESS_LOST**。前日ハマリを設定変更すると1200G天井進捗が消える。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。本機固有のガックン、初期出目、ステージ等による変更判別は直接資料を確定できず。

numericResetData:
- 通常天井: **ボーナス間1200G**
- 設定変更: **天井ゲーム数クリア**
- リセット短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_HIGH_FOR_CEILING_CLEAR / PARTIAL_FOR_CARRYOVER / UNVERIFIED_FOR_POWER_CYCLE_MODE_STATE_DETECTION**

## conflicts

- 現時点で物差し主要値に平均処理が必要な数値競合は確認せず。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- formalModelName / inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- setting-change mode/state distribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

欠損判定前に「神たま2 / 神たま2～あっぱれ超みこし祭～ / 神たま2 あっぱれ超みこし祭り / SNKプレイモア / 神たまシリーズ」と「設定変更 / 設定変更後 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン / 50枚 / 1000円 / コイン持ち」を組み替え、P-WORLD、K-Navi、パチマガスロマガ、旧天井DB、後年解析/回顧資料を横断。一般的な5号機挙動から未確認項目を補完していない。

## sources — 取得日 2026-09-04

1. P-WORLD「神たま2 ～あっぱれ超みこし祭～」
   - https://www.p-world.co.jp/machine/database/6284
   - ボーナス確率、獲得枚数、ART約+1.2枚/G、30G、後夜祭、1200G天井
   - confidence: INDUSTRY_DATABASE
2. K-Navi「神たま2 ～あっぱれ超みこし祭～」
   - https://p-kn.com/slot/1383/
   - 2011-04-04ホール導入開始、BIG/REG、ART概要
   - confidence: ANALYSIS_HIGH
3. パチマガスロマガ「神たま2～あっぱれ超みこし祭～」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/33/a.php
   - ART約+1.2枚/G、30G、獲得枚数、超みこし祭
   - confidence: ANALYSIS_HIGH
4. pacnk「神たま2 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_kamitama2.html
   - 機械割、BIG/REG、ART初当り、天井補助
   - confidence: ANALYSIS_HIGH
5. CrankySeven「か行の機種の天井情報(5号機版)」
   - https://crankyseven.com/sp/tenjo-5ka.htm
   - ボーナス間1200G、設定変更後は天井到達までのゲーム数クリア
   - confidence: HISTORICAL_ANALYSIS_DATABASE
6. K-Navi本機パチログ（補助資料）
   - https://p-kn.com/slot/1383/
   - 据え置き・宵々越し天井の当時実戦記述が現存
   - confidence: USER_REPORT_SUPPLEMENTAL
7. 神たまシリーズ回顧
   - https://www.marimo0925.net/pachislot-kikaiwari-ranking-garoudensetsu-ban/
   - 機械割96.7〜112.2%、基本仕様の別系統照合
   - confidence: RETROSPECTIVE_SECONDARY

## status

- recordNumber: **565**
- chronologicalFrontier: **2011-04-04**
- relayStatus: **READY_TO_CONTINUE**
