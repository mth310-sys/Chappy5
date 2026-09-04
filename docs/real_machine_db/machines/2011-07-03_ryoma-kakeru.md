# 竜馬翔ける

machineName: 竜馬翔ける
manufacturer: 岡崎産業
releaseDate: 2011-07-03
releaseDateStatus: INDUSTRY_EXACT_DELIVERY_DATE; グリーンべると/P-WORLD業界ニュースが2011-07-03納品開始予定。P-WORLDおよび5号機クロニクルは2011年7月導入表記。
generation: 5号機
systemType: ART主体 / ボーナス+ART / パンク回避型 / 天井
coreStatus: PARTIAL_CORE_WITH_RESET_DETAILS_UNVERIFIED

## chronologyNote

- 最新mainの recordCount 589 / chronologicalFrontier 2011-07-04「センゴク回胴記」から継続。
- 2011-07-04同日群と直前境界を再監査したところ、岡崎産業「竜馬翔ける」が未登録で、当時業界記事に2011-07-03納品開始予定の直接記述を確認。
- 漏れ防止を優先して590件目としてBACKFILL追加。
- chronologicalFrontierは既到達の2011-07-04を維持し、frontierLatestExactDateMachineも「センゴク回胴記」のまま。

## payoutRateBySetting

- 設定1: **98.3%**
- 設定2: **99.3%**
- 設定3: **102.89%**
- 設定4: **106.12%**
- 設定5: **107.51%**
- 設定6: **109.13%**

P-WORLDの設定別値。5号機クロニクルは98.3 / 99.3 / 102.9 / 106.1 / 107.5 / 109.1%で丸め差の範囲で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### RUSH初当り
- 設定1: **1/221**
- 設定2: **1/216**
- 設定3: **1/207**
- 設定4: **1/194**
- 設定5: **1/184**
- 設定6: **1/183**

### 超竜馬BONUS
- 設定1: **1/8192**
- 設定2: **1/8192**
- 設定3: **1/7282**
- 設定4: **1/7282**
- 設定5: **1/7282**
- 設定6: **1/7282**

### 竜馬BONUS
- 設定1: **1/358**
- 設定2: **1/352**
- 設定3: **1/343**
- 設定4: **1/312**
- 設定5: **1/305**
- 設定6: **1/303**

### 突然RUSH
- 設定1: **1/603**
- 設定2: **1/596**
- 設定3: **1/558**
- 設定4: **1/550**
- 設定5: **1/493**
- 設定6: **1/489**

### ボーナス合算
- 設定1: **1/343**
- 設定2: **1/338**
- 設定3: **1/328**
- 設定4: **1/299**
- 設定5: **1/293**
- 設定6: **1/291**

P-WORLD設定別表を採用。グリーンべるとの「2種類のボーナス及び特定リプレイのART突入契機合成 1/221（設定1）〜1/183（設定6）」はP-WORLDのRUSH初当り両端と一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED_AT_ENDPOINTS

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「竜馬翔ける / 岡崎産業 / 50枚 / 1000円 / 1k / ベース / コイン持ち」等へ検索語を変更し、P-WORLD、当時業界記事、旧実機販売資料、5号機クロニクル、回顧資料を横断したが、比較可能な本機固有の直接値を確定できず。P-WORLDの定性的な「コイン持ち良し」は数値へ変換しない。

## basicPayoutAndART

- ART「竜馬ラッシュ」: **最低30G+α / 約+2.0枚/G**。
- 30G保証後、パンクリプレイの一部で引き戻し演出へ移行。引き戻しゾーンは **3 / 5 / 7 / 11 / 22 / 33G / 次回竜馬CHANCEまで** の7種類。
- 竜馬CHANCE: **約1/13**。ART中成立は内部モードアップの契機。
- ART中は継続期待度の異なる**5段階の内部モード**を持つ。
- 超竜馬BONUS後は「超竜馬ラッシュ」へ入り、次回竜馬BONUSまで高継続側のARTとして扱われる。
- 竜馬BONUS後は竜馬ラッシュへ必ず突入。
- ボーナスの実純増枚数は現存取得本文で安全に比較可能な直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。P-WORLDは払い出し終了条件のみ掲載しているため、純増枚数へ換算しない。

confidence: INDUSTRY_AND_ANALYSIS_HIGH_FOR_ART; BONUS_NET_PAYOUT_UNVERIFIED

## ceiling

- **ART間888G**ハマリ後にARTへ突入した場合: 引き戻し演出からの**ART復帰4回保障**。
- **ART間1400G**ハマリ後にARTへ突入した場合: **超竜馬ラッシュ確定**。

P-WORLDで直接確認。
confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のART間888G/1400G進捗、内部5モード、引き戻し保障、ART状態の具体処理を本機固有の直接資料で確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のART間天井ゲーム数、内部モード、引き戻し保障の保持を直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時のART間カウンタ・モード・ART状態処理を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。ART間888G/1400G天井の設定変更時CLEAR/RETAINを一般的な5号機則から推測しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常のART間888G/1400G救済は確認済みだが、設定変更専用の短縮・変更天井は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART中に5段階内部モードが存在するが、設定変更時の再抽選/引継ぎおよび朝一専用モードは直接確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/ART/引き戻し状態の設定変更時処理を直接確認できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。リセット専用短縮天井、朝一専用ART優遇、朝一特定G以内当選率等の公開値を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失を直接確定できないため不利要素として断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ、ゲーム数挙動等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- 通常救済1: **ART間888G → 次回ART突入時、引き戻しからのART復帰4回保障**
- 通常救済2: **ART間1400G → 次回ART突入時、超竜馬ラッシュ確定**
- 設定変更時ART間カウンタ: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 据え置き時カウンタ/モード/保障: **UNVERIFIED_AFTER_RESEARCH**
- 単純電源OFF→ON時カウンタ/モード/保障: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL_BY_SYSTEM_DATA; SETTING_CHANGE/CARRYOVER/POWER_CYCLE/DETECTION UNVERIFIED_AFTER_RESEARCH**

## conflicts

- 機械割はP-WORLDの精密値と5号機クロニクルの小数1桁値に丸め差のみ。意味の異なるCONFLICTとは扱わない。
- releaseDateは当時業界記事の**2011-07-03納品開始予定**と、P-WORLD/5号機クロニクルの**2011年7月導入**で矛盾しない。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- ボーナス実純増枚数: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior details: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**
- mode/state after setting change: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「竜馬翔ける / 竜馬翔ける! / パチスロ竜馬翔ける / 岡崎産業」と「機械割 / RUSH初当り / 50枚 / 1000円 / ベース / コイン持ち / 天井 / 888 / 1400 / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / モード / ガックン」を組み替え、当時グリーンべると/P-WORLD業界ニュース、P-WORLD機種DB、A-SLOT当時記事、5号機クロニクル、回顧資料を横断。性能コア主要値・ART構造・通常救済は回収できたが、resetBehaviorの設定変更/据え置き/電源OFF→ON固有処理は直接本文を回収できなかったため一般則で補完しない。

## sources — 取得日 2026-09-04

1. グリーンべると / P-WORLD業界ニュース「引き戻しゾーンでの竜馬チャンス入賞が熱い」
   - https://news.p-world.co.jp/articles/4679/greenbelt
   - 2011-05-19掲載。2011-07-03納品開始予定、ART約+2.0枚/G、最低30G、ART突入契機合成両端、竜馬CHANCE約1/13、引き戻しG数、5モード構造。
2. P-WORLD「竜馬翔ける」
   - https://www.p-world.co.jp/machine/database/6380
   - 設定別機械割、超竜馬BONUS/竜馬BONUS/突然RUSH/RUSH初当り、ボーナス合算、ART約+2.0枚/G・30G+α、内部5モード、ART間888G/1400G天井、型式名/検定番号、2011年7月導入。
3. 5号機クロニクル「岡崎産業 5号機全機種一覧」
   - https://5goki.com/okazaki
   - 2011/7導入、設定別機械割の丸め値照合。
4. A-SLOT「6月2日木曜日」
   - https://www.a-slot.com/hpgen/HPB/entries/169.html
   - ART約+2.0枚/G、最低30G、超竜馬BONUS/竜馬BONUS後のART、引き戻しゾーン構造の当時回顧。
