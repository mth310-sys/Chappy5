# ハネスロ林家一家

machineName: ハネスロ林家一家
manufacturer: オーイズミ
releaseDate: 2011-06-26
releaseDateStatus: INDUSTRY_PRIMARY_DELIVERY_START; グリーンべると/P-WORLD業界ニュース=2011-06-26納品開始予定、後年中古実機DB=2011年6月導入開始

generation: 5号機
systemType: A+ART / ボーナス高確率型 + 押し順ART + 天井無限ART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainの recordCount 581 / chronologicalFrontier 2011-06-20 から、2011-06-20同日群と2011-06-21〜06-25境界を再監査。
- 直前HANDOFFの次候補「ハネスロ林家一家」をmachine一覧とコード検索で突合し、既存レコードがないことを確認して582件目として追加。
- 当時グリーンべると/P-WORLD業界ニュースは **2011年6月26日から納品開始予定**と明記。後年中古実機DBも2011年6月導入開始として整合するため、本DBの時系列キーは2011-06-26を採用。

## payoutRateBySetting

- 設定1: **96.9%**
- 設定2: **98.3%**
- 設定3: **100.0%**
- 設定4: **103.1%**
- 設定5: **106.8%**
- 設定6: **110.2%**

パチマガスロマガ旧解析の設定別PAYOUTを主値とし、後年実機系資料でも同系列を照合。
confidence: CONTEMPORARY_ANALYSIS_HIGH_CROSSCHECKED_SECONDARY

## initialHitBySetting

### ボーナス合成
- 設定1: **1/98.55**
- 設定2: **1/96.80**
- 設定3: **1/95.12**
- 設定4: **1/93.09**
- 設定5: **1/91.15**
- 設定6: **1/89.29**

### 大ボーナス
- 全設定共通: **1/689.85**

### 中ボーナス
- 全設定共通: **1/397.19**

### 小ボーナス
- 設定1: **1/161.82**
- 設定2: **1/157.16**
- 設定3: **1/152.76**
- 設定4: **1/147.60**
- 設定5: **1/142.78**
- 設定6: **1/138.26**

- 当時業界発表の「ボーナス約1/98〜1/89」と整合。
- ART単独初当たりの設定別公開値は今回十分な再探索後も確認できず。ARTは主にボーナス契機であるため、ボーナス合成を主要初当たりとして保持し、ART初当たりを推定しない。
confidence: CONTEMPORARY_ANALYSIS_HIGH; INDUSTRY_CROSSCHECK_RANGE

## baseGamesPer50

パチマガスロマガ旧解析「1000円あたりのゲーム数」:
- 設定1: **34.75G**
- 設定2: **34.85G**
- 設定3: **34.95G**
- 設定4: **35.00G**
- 設定5: **35.00G**
- 設定6: **34.95G**

confidence: CONTEMPORARY_ANALYSIS_HIGH

## netIncrease

- ART「ブンブンモード」: **約+1.2枚/G**
- 1セット最低 **50G**
- グリーンべると/P-WORLD業界ニュースとパチマガスロマガで一致。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## basicPayout

ボーナス「わっしょいモード」:
- 大: **約150枚**（規定払出182枚）
- 中: **約100枚**（規定払出117枚）
- 小: **約50枚**（規定払出52枚）

グリーンべると/P-WORLD業界ニュースは純増50/100/150枚、パチマガスロマガは同値に加え規定払出枚数を掲載。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## modeSpecificMinimumData

- ハネスロシリーズ初のART機。
- ART「ブンブンモード」は押し順ART、1G約+1.2枚、1セット最低50G。
- ART当選契機は主にボーナス。各ボーナス最終ゲームでART突入抽選を行い、獲得枚数が大きいボーナスほどART突入期待度が高い。
- ART中レア役でゲーム数上乗せ抽選。
- ARTラスト5Gの復活成功で無限ARTへ昇格。
- ボーナス中フリーズは無限ART確定、さらに次回ボーナス時 **85%**で無限ART継続。
- 救済天井1: **通常時596Gハマリで無限ART突入**。
- 救済天井2: **9回連続ART未突入で次回ボーナス時に無限ART保証**。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガに本機専用「朝イチ・設定変更」解析項目の存在までは確認。機種名表記揺れ（ハネスロ林家一家 / ハネスロ林屋一家 / 林家一家）、オーイズミ、天井596G、設定変更、リセット、朝一、据え置き、宵越し、電源OFF ON等を組み替えて探索したが、設定変更時に596G天井ゲーム数および「ART9回連続未突入」回数をCLEAR/RETAINするかを直接確定できる本文を回収できず、一般則から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の596G天井進捗、ART非突入連続回数、無限ART関連状態の保持について機種固有の直接本文を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時のゲーム数/救済回数/ART状態の保持を直接示す本機固有資料は未確認。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常596G天井の存在は複数資料で確認済みだが、設定変更時のCLEAR/RETAINは未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の短縮天井、朝一専用天井、596G以外への変更は今回確認できず。ただし「ない」と断定できる直接資料も回収できないためNONEではなくUNVERIFIEDとする。

modeAfterReset: **NOT_CONFIRMED_AS_LONG_TERM_MODE_SYSTEM; RESET_HANDLING_UNVERIFIED**。朝一客行動に影響する通常時の長期モード再抽選/引継ぎを示す公開資料は今回確認できず。ART/無限ARTの状態を「通常モード」と同一視しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART中/無限ART中や内部ART当選状態を含む設定変更時処理は未確定。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **UNVERIFIED_AFTER_RESEARCH**。設定変更時限定の短縮天井、高確スタート、ART優遇、朝一特定G以内当選率等の公開数値を確定できず。

resetPenalties: **UNVERIFIED_AFTER_RESEARCH**。596G進捗やART非突入回数が設定変更で消失する可能性は一般論として考えられるが、本機固有根拠がないため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶表示、ART非突入回数表示などによる設定変更/据え置き判別を直接確定できず。

numericResetData:
- 通常時天井: **596G -> 無限ART**
- ART連続非突入救済: **9回連続スルー -> 次回ボーナスで無限ART**
- ボーナス中フリーズ後の次回無限ART継続率: **85%**（通常のリセット数値ではなくゲーム性参考値）
- 設定変更時596Gカウンタ処理: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時ARTスルー回数処理: **UNVERIFIED_AFTER_RESEARCH**
- リセット専用短縮天井: **UNVERIFIED_AFTER_RESEARCH / NONE NOT CONFIRMED**
- 朝一特定G以内当選率/期待度: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; CEILING/RESCUE NUMBERS CONFIRMED, RESET-SPECIFIC HANDLING UNVERIFIED_AFTER_RESEARCH**

## conflicts

- 現時点で性能コアの重大な数値CONFLICTは確認なし。
- 機種名表記に後年動画等で「ハネスロ林屋一家」とする例があるが、当時業界記事およびパチマガスロマガは「ハネスロ林家一家」。DB主名は当時資料側を採用し、検索表記揺れとして保持。

## missingFields

- ART初当たり設定別: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior details: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset on setting change: **UNVERIFIED_AFTER_RESEARCH**
- reset-only ceiling shortening: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- public numeric morning-only benefit: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「ハネスロ林家一家 / ハネスロ林屋一家 / 林家一家 / オーイズミ」と「機械割 / PAYOUT / ボーナス確率 / ART初当たり / 1000円 / 50枚 / ベース / 純増 / 天井 / 596G / ART9回 / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / ガックン」を組み替え、当時業界記事、パチマガスロマガ旧解析、後年実機DB/回顧資料を横断。性能コアと通常天井/救済条件は高精度で回収できた。一方、設定変更時の596G天井カウンタ・ARTスルー回数・単純電源サイクル・変更判別は専用解析項目の存在までしか追えず、十分な再探索後も本文値を確定できなかったためUNVERIFIEDを維持した。

## sources — 取得日 2026-09-04

1. P-WORLD業界ニュース / グリーンべると「シリーズ初のART機『ハネスロ林家一家』登場」
   - https://news.p-world.co.jp/articles/4666/greenbelt
   - 2011-05-13記事、2011-06-26納品開始予定、ART約+1.2枚/G・最低50G、ボーナス純増50/100/150枚、ボーナス約1/98〜1/89、通常596Gで無限ART、9回連続ART未突入で次回無限ART
   - confidence: INDUSTRY
2. パチマガスロマガ「ハネスロ林家一家｜ボーナス抽選確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/26/h-1.php
   - 設定別PAYOUT、設定別ボーナス合成、大/中/小ボーナス個別確率
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
3. パチマガスロマガ「ハネスロ林家一家｜小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/26/c.php
   - 1000円あたり34.75/34.85/34.95/35.00/35.00/34.95G
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
4. パチマガスロマガ「ハネスロ林家一家｜基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/26/a.php
   - ART約+1.2枚/G・50G、天井596G、9回連続ART未突入救済、フリーズ時無限ART、次回85%継続、ボーナス約150/100/50枚
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
5. パチマガスロマガ 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/26/oizumi_slot_26.php
   - 本機専用「朝イチ・設定変更」解析項目の存在を確認
   - confidence: CONTEMPORARY_ANALYSIS_HIGH_INDEX_ONLY
6. ホームスロット「オーイズミ ハネスロ林家一家」
   - https://home-slot.net/SHOP/s-oizumi11.html
   - 2011年6月導入開始、ボーナス50/100/150枚、596G/ART9回救済を後年照合
   - confidence: SECONDARY_CROSSCHECK

## status

- performanceCore: **COMPLETE_CORE**
- resetBehavior: **PARTIAL_UNVERIFIED_AFTER_RESEARCH**
- overallConfidence: **ANALYSIS_HIGH_WITH_INDUSTRY_CROSSCHECK; RESET_SPECIFIC_PARTIAL**
