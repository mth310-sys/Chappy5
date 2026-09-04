# センゴク回胴記

machineName: センゴク回胴記
manufacturer: ニューギン
releaseDate: 2011-07-04
releaseDateStatus: ANALYSIS_HIGH_EXACT_DATE_WITH_MONTH_CONFLICT; K-Naviが2011-07-04ホール導入開始。A-SLOTも2011年7月導入開始。5号機クロニクルは2011/6表記のためCONFLICT保持。
generation: 5号機
systemType: A+ART / CZストック型 / 天井
coreStatus: COMPLETE_CORE_WITH_BASE_AND_RESET_DETAILS_UNVERIFIED

## chronologyNote

- 最新mainの recordCount 588 / chronologicalFrontier 2011-07-04「サイバードラゴン2」から継続。
- LATEST_HANDOFF指定の2011-07-04同日群候補「センゴク回胴記」をrepo内検索し未登録確認後、589件目として追加。
- 2011-07-04同日群は未完のためchronologicalFrontierは2011-07-04維持。

## payoutRateBySetting

- 設定1: **94.6%**
- 設定2: **96.3%**
- 設定3: **97.7%**
- 設定4: **101.7%**
- 設定5: **105.4%**
- 設定6: **112.6%**

パチマガスロマガ、グリーンべると（設定1〜6の両端）、5号機クロニクルで整合。
confidence: ANALYSIS_HIGH_CROSSCHECKED_WITH_INDUSTRY

## initialHitBySetting

### BIG合成
- 設定1: **1/481.88**
- 設定2: **1/474.90**
- 設定3: **1/468.11**
- 設定4: **1/455.11**
- 設定5: **1/448.88**
- 設定6: **1/431.16**

### REG
- 設定1: **1/555.39**
- 設定2: **1/546.13**
- 設定3: **1/537.18**
- 設定4: **1/528.52**
- 設定5: **1/512.00**
- 設定6: **1/489.07**

### ボーナス合成
- 設定1: **1/258.02**
- 設定2: **1/254.02**
- 設定3: **1/250.14**
- 設定4: **1/244.54**
- 設定5: **1/239.18**
- 設定6: **1/229.15**

### ボーナス+ART合成
- 設定1: **約1/115.1**
- 設定6: **約1/89.9**
- 設定2〜5: **UNVERIFIED_AFTER_RESEARCH**

グリーンべるとはBB/REG/ボーナス合成の設定1〜6両端とボーナス+ART合成の設定1/6を掲載。設定別ボーナス詳細はパチマガスロマガと5号機クロニクルで一致。ART単独初当り全設定表はK-Naviに専用項目が存在するが現存取得本文から数値を回収できず、推定しない。
confidence: ANALYSIS_HIGH_CROSSCHECKED; ART_STANDALONE_PARTIAL

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「センゴク回胴記 / ニューギン / 50枚 / 1000円 / 1k / ベース / コイン持ち」等へ検索語を変更し、業界記事、P-WORLD、K-Navi、パチマガスロマガ、旧DB、後年回顧資料を横断したが本機固有の直接値を確定できず。小役確率から逆算しない。

## basicPayoutAndART

- 同色BIG: **約313枚**（372枚超払い出しで終了）
- 異色BIG: **約206枚**（240枚超払い出しで終了）
- REG: **約50枚**
- ART「勇ノ刻」: **1セット50G、約+1.4枚/G**
- CZ「生還への路」: ART当選期待度50%超。5G / 10G / 20G / 255G / 無限 / 超無限が確認される。
- 超無限は次回ボーナスまでCZとARTのループが継続。

グリーンべると、K-Navi、P-WORLD、パチマガスロマガで整合。
confidence: INDUSTRY_AND_ANALYSIS_HIGH

## ceiling

- **ボーナス間1200G**消化で、次回ボーナスまで終了しないCZ「生還への路」へ突入。
- 天井後はCZ→ART→CZのループとなる。

P-WORLDおよび後年DBで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。K-Naviに本機専用「設定変更後の挙動」項目が存在することは確認したが、現存取得本文からボーナス間1200Gカウンタ、CZストック、ARTストック、内部状態の具体処理を直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井ゲーム数、CZ/ARTストック、内部状態の保持を本機固有の直接本文で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時の天井カウンタ・CZ/ARTストック・状態処理を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。ボーナス間1200G天井の設定変更時CLEAR/RETAINを直接確定できず、一般則から補完しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井はボーナス間1200G。設定変更専用短縮天井・別天井数値は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時およびART中に内部モード/状態が存在するが、設定変更時の再抽選・引継ぎを直接確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。K-Naviに「状態移行率(設定変更後)」専用解析項目が存在することは確認したが、具体振り分け本文を取得できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。リセット専用短縮天井、朝一専用CZ/ART優遇、特定G以内当選率等の公開値を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失を含め設定変更時の処理を直接確認できないため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ、ゲーム数挙動等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- 通常天井: **ボーナス間1200G → 次回ボーナスまで終了しないCZ「生還への路」**
- 設定変更時天井カウンタ: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時状態振り分け: **UNVERIFIED_AFTER_RESEARCH**（K-Naviに専用項目存在）
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 据え置き時カウンタ/状態/ストック: **UNVERIFIED_AFTER_RESEARCH**
- 単純電源OFF→ON時カウンタ/状態/ストック: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL_BY_SYSTEM_DATA; SETTING_CHANGE/CARRYOVER/POWER_CYCLE/DETECTION UNVERIFIED_AFTER_RESEARCH**

## conflicts

### releaseDate
- K-Navi: **2011-07-04 ホール導入開始**
- A-SLOT: **2011年7月導入開始**
- 5号機クロニクル: **2011/6**
- exact dateを持つK-Naviを時系列キーに採用し、2011/6表記は平均・上書きせずCONFLICT保持。

## missingFields

- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- ART単独初当り設定1〜6: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior details: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- setting-change state distribution numeric values: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「センゴク回胴記 / センゴク 回胴記 / ニューギン」と「機械割 / BIG / REG / ART初当り / CZ初当り / 50枚 / 1000円 / ベース / 天井 / 1200G / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 状態移行率 / 低確 / 高確 / ガックン / 型式 / 検定」を組み替え、グリーンべると、K-Navi、P-WORLD、パチマガスロマガ、5号機クロニクル、旧実機DBを横断。性能コア・天井は複数系統で回収。resetBehaviorはK-Naviに専用解析項目の存在まで確認できたが具体本文値を回収できないため一般則から補完しない。2026年生成系回顧ページには本機を6号機・有利区間機と誤認する記述があり、5号機の一次/当時資料と矛盾するため性能根拠から除外。

## sources — 取得日 2026-09-04

1. グリーンべると「ニューギン、戦国S機『センゴク回胴記』を発表」
   - https://web-greenbelt.jp/00002041/
   - 2011-05-26掲載。ART50G・約1.4枚/G、CZ概要、BIG/REG、ボーナス合算、ボーナス+ART合算両端、出玉率両端。
2. K-Navi「センゴク回胴記」
   - https://p-kn.com/slot/1430/
   - 2011-07-04ホール導入開始。基本仕様、設定変更後の挙動・状態移行率(設定変更後)の専用解析項目の存在。
3. P-WORLD「センゴク回胴記」
   - https://www.p-world.co.jp/machine/database/6376
   - 5号機A+ART、同色BIG約313枚、異色BIG約206枚、REG約50枚、ART50G・約1.4枚/G、ボーナス間1200G天井。
4. パチマガスロマガ「センゴク回胴記 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/18/a.php
   - ART約+1.4枚/G、1セット50G、各ボーナス純増。
5. パチマガスロマガ「センゴク回胴記 ボーナス抽選確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/18/h-1.php
   - 設定別同色/異色BIG、BIG合成、REG、ボーナス合成、PAYOUT。
6. 5号機クロニクル「ニューギン＆エキサイト 5号機全機種一覧」
   - https://5goki.com/newgin-excite
   - 設定別ボーナス/機械割照合。導入時期2011/6表記はK-Navi exact dateとCONFLICT保持。
7. A-SLOT「ニューギン センゴク回胴記」
   - https://www.a-slot.com/SHOP/newgin10.html
   - 2011年7月導入開始、5号機、ART仕様・ボーナス枚数の回顧照合。
