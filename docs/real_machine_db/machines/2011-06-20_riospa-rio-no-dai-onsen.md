# リオスパ Rioの大温泉

machineName: リオスパ Rioの大温泉
manufacturer: ネット
modelName: リオの大温泉3
releaseDate: 2011-06-20
releaseDateStatus: SOURCE_DATE_DEFINITION_DIFFERENCE; K-Navi/アタリ7=ホール導入2011-06-20; GreenBelt=納品開始予定2011-06-19

generation: 5号機
systemType: ノーマルA / ボーナス主体 + 演出用7GプチRT / 技術介入要素あり
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_BASE_UNVERIFIED

## chronologyNote

- 最新main recordCount 579 / chronologicalFrontier 2011-06-17 から同日群および06-18〜06-19境界を監査し、repo未登録を確認して580件目として追加。
- グリーンべるとは **2011-06-19納品開始予定**、K-Naviおよびアタリ7は **2011-06-20ホール導入開始/導入日**。定義差を平均せず保持し、本DB主releaseDateはホール導入日2011-06-20を採用。

## payoutRateBySetting

- 設定1: **97.0%**
- 設定2: **98.5%**
- 設定3: **100.0%**
- 設定4: **103.0%**
- 設定5: **106.0%**
- 設定6: **110.0%**

K-Naviとアタリ7で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### SBB / BB / Rio BONUS 合成
- 設定1: **1/273**
- 設定2: **1/262**
- 設定3: **1/254**
- 設定4: **1/246**
- 設定5: **1/239**
- 設定6: **1/232**

### REG
- 設定1: **1/409**
- 設定2: **1/385**
- 設定3: **1/368**
- 設定4: **1/348**
- 設定5: **1/327**
- 設定6: **1/303**

### ボーナス合算
- 設定1: **1/163**
- 設定2: **1/156**
- 設定3: **1/150**
- 設定4: **1/144**
- 設定5: **1/138**
- 設定6: **1/131**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「リオスパ / RioSpa / Rioの大温泉 / リオの大温泉3 / NET」と「50枚 / 1000円 / ベース / コイン持ち / 1k / 小役確率」を組み替え、K-Navi、P-WORLD、パチマガスロマガ旧解析、当時実戦資料、後年DBを横断したが、比較可能な50枚あたりG数の直接掲載値を確定できず。
- 小役確率からの独自逆算は行わない。
confidence: UNVERIFIED

## netIncrease

- 出玉増加ART/AT: **NOT_APPLICABLE**
- チャンスリプレイ入賞後に **7Gの演出用プチRT** を搭載するが、出玉増加装置としての純増値は物差しコア対象外。
confidence: ANALYSIS_HIGH

## basicPayout

- SUPER BIG BONUS: **最大335枚**
- BIG BONUS: **最大311枚**
- Rio BONUS: **最大327枚**
- REGULAR BONUS: **最大103枚**
- グリーンべると、P-WORLD、パチマガスロマガ旧解析で一致。
confidence: INDUSTRY_PRIMARY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData

- Rioシリーズ初のノーマルタイプ。
- チャンスリプレイ入賞で **7GのプチRT** に入り、温泉ステージ/トランプステージ等のチャンス演出へ移行。
- ART/ATによる出玉増加機能は非搭載。
- SBB/REGは14枚役を1回取得する技術介入で最大獲得枚数を狙える。
- 通常ゲーム数天井・ボーナス間救済RT等は、複数攻略/機種DBと天井検索を横断しても本機固有の搭載情報を確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。本機固有の設定変更時の液晶/出目/俺スロ状態等の直接資料を確定できず。ノーマル機一般則で補完しない。

carryOverBehavior: **NO_GAME_COUNT_OR_LONG_TERM_MODE_FEATURE_CONFIRMED; OTHER_DISPLAY_STATE_UNVERIFIED**。通常ゲーム数天井や長期ゲーム数モードは確認されないため、その種の宵越し狙い要素は確認なし。俺スロ・表示履歴等の据え置き時挙動は直接資料未確定。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の液晶表示、俺スロ/履歴表示、出目等の本機固有資料を確定できず。

gameCounterReset: **NOT_APPLICABLE_TO_CEILING_AFTER_RESEARCH**。通常ゲーム数天井/規定ゲーム数当選機能を確認できず、天井進捗CLEAR/RETAINの対象となるゲーム数カウンタは確認なし。データ表示器等の外部カウンタは対象外。

ceilingAfterReset: **NOT_APPLICABLE; NO_CEILING_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井も確認なし。

modeAfterReset: **NOT_APPLICABLE_TO_LONG_TERM_HIT_MODE_AFTER_RESEARCH**。ボーナス当選を左右する長期ゲーム数モード/天国等は確認されず。7GプチRTはチャンスリプレイ入賞契機の短期演出状態であり、朝一専用モードではない。

stateAfterReset: **UNVERIFIED_FOR_ACTIVE_7G_RT_EDGE_CASE**。7GプチRT中に設定変更/電源断した場合の厳密処理は直接資料を確定できず、実機再現用推測はしない。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。短縮天井、朝一高確、設定変更専用モード、朝一特定G以内当選率等の公開恩恵は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等の主要な設定変更不利要素は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ、履歴表示等による本機固有の設定変更/据え置き判別を確定できず。

numericResetData:
- 通常天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **NOT_APPLICABLE_TO_LONG_TERM_MODE_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 公開朝一恩恵数値: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; NORMAL_MACHINE_WITH_NO_CEILING_OR_LONG_TERM_MODE_CONFIRMED, MACHINE_SPECIFIC_POWER/DETECTION DETAILS_UNVERIFIED**

## conflicts

- 導入時期: グリーンべると **2011-06-19納品開始予定** / K-Navi・アタリ7 **2011-06-20ホール導入開始/導入日**。定義差として保持し平均しない。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior machine-specific display/detail: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- active 7G RT during setting change/power-cycle edge behavior: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「リオスパ / RioSpa / Rioの大温泉 / リオスパ Rioの大温泉 / リオの大温泉3 / NET」と「導入 / 納品 / 機械割 / SBB / BB / Rio BONUS / REG / 合算 / 50枚 / 1000円 / ベース / コイン持ち / 天井 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」を組み替え、当時グリーンべると、K-Navi、P-WORLD、パチマガスロマガ旧解析、アタリ7、中古実機DB、当時実戦資料を横断。性能コアは複数系統で照合。50枚ベースと本機固有の設定変更/電源断/判別挙動は直接値を確定できず、一般的ノーマル5号機の挙動で補完していない。

## sources — 取得日 2026-09-04

1. グリーンべると「ネット、Rioシリーズ最新作は温泉が舞台！」2011-05-16
   - https://web-greenbelt.jp/00002079/
   - ネット、演出用RT搭載ノーマル、SBB335枚/BB311枚/RioB327枚/RB103枚、2011-06-19納品開始予定
   - confidence: CONTEMPORARY_INDUSTRY_PRIMARY_HIGH
2. K-Navi「リオスパ Rioの大温泉」
   - https://p-kn.com/slot/1420/
   - 2011-06-20ホール導入開始、設定別SBB/BB/RioB合成・REG・合算・機械割
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
3. K-Navi「プチRT」
   - https://p-kn.com/slot/1420/31421/
   - チャンスリプレイ入賞で7GプチRT、規定G消化で終了
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
4. P-WORLD「リオスパ Rioの大温泉」
   - https://www.p-world.co.jp/machine/database/6359
   - 5号機ノーマル/技術介入、SBB335枚/BB311枚/RioB327枚/REG103枚、通常ゲーム構造
   - confidence: INDUSTRY_DATABASE_HIGH
5. パチマガスロマガ旧解析「基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/150/a.php
   - ノーマル、7GプチRT、各ボーナス純増/規定払い出し枚数
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
6. パチマガスロマガ旧解析「ボーナス中の打ち方」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/150/e.php
   - 技術介入手順、RioBのJAC構造
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
7. アタリ7「リオスパ Rioの大温泉」
   - https://www.atari7.com/slot/date1441265718.php
   - 2011-06-20導入、設定別確率・機械割のクロスチェック
   - confidence: RETROSPECTIVE_ANALYSIS_MEDIUM_HIGH
8. 中一商事 中古実機DB
   - https://www.nakaiti.com/html/Net009.html
   - 型式名「リオの大温泉3」、5号機ノーマル、各ボーナス最大枚数
   - confidence: SECONDARY_MACHINE_DATABASE_MEDIUM
