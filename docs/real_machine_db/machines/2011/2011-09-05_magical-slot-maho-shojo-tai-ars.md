# マジカルスロット 魔法少女隊アルス

machineName: マジカルスロット 魔法少女隊アルス
aliases: 魔法少女隊アルス / マジカルスロット魔法少女隊アルス
manufacturer: 藤商事
formalModelName: マホウショウジョタイアルスFSB
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2011-09-05
releaseDateStatus: **CONFIRMED_EXACT_HALL_INTRODUCTION**。パチビーで2011-09-05導入。藤商事公式製品ページ現存、当時グリーンべるとは2011-07-19時点で9月上旬納品予定としており整合。
generation: 5号機
systemType: A+ART / ナビ回数管理ART・高継続SART搭載
coreStatus: COMPLETE_CORE_WITH_ART_INITIAL_PARTIAL
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH

## chronologyNote

- 最新mainのrecordCount 601 / chronologicalFrontier 2011-09-05「夢夢ワールドDXII」から継続。
- LATEST_HANDOFF指定どおりrepo検索を行い、「魔法少女隊アルス」未登録を確認して602件目として追加。
- 2011-09-05同日群の残存監査は継続が必要。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.0% |
| 3 | 100.6% |
| 4 | 103.9% |
| 5 | 107.4% |
| 6 | 113.1% |

パチマガスロマガとpacnkで一致。後年の機種資料でも同値を確認。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## initialHitBySetting

### BIG / REG / ボーナス合算

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/372.4 | 1/537.2 | 1/219.9 |
| 2 | 1/370.3 | 1/528.5 | 1/217.7 |
| 3 | 1/368.2 | 1/520.1 | 1/215.6 |
| 4 | 1/366.1 | 1/512.0 | 1/213.5 |
| 5 | 1/364.1 | 1/504.1 | 1/211.4 |
| 6 | 1/362.1 | 1/496.5 | 1/209.4 |

- パチマガスロマガ直接値。pacnkは丸め値 BIG 1/372〜1/362、REG 1/537〜1/496、機械割まで一致。
- ART単独初当りの設定別直接公開値は今回確定できず、他の合算値から逆算しない。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## baseGamesPer50

- **約30G / 50枚**。
- 後年の機種資料PDFで直接表記を確認。国内当時解析の直接ベース値は今回回収できなかったため単一資料扱い。
confidence: **ANALYSIS_SINGLE / RETROSPECTIVE_DB**

## netIncrease

- ART「アルスタイム」: **約+1.4枚/G**。
- 基本1セット: **9枚役ナビ10回+α**。P-WORLDは平均継続ゲーム数約50Gと記載。
- ART継続率は **5% / 50% / 66%前後 / 75%前後 / 80% / 90%** の段階制。資料表記に65/66、70/75の差があるため細部はCONFLICT扱い。
- 上位状態SARTは最高継続率90%、期待値1000枚または2500枚の系統。
confidence: **OFFICIAL / ANALYSIS_HIGH**

## basicPayout

- BIG: **約200枚**（藤商事公式: 298枚以上獲得で終了）
- REG: **約46枚**（藤商事公式: 7ゲームまたは7回入賞で終了）
- P-WORLD、パチビー、パチマガスロマガ、pacnkで約200枚/約46枚が一致。
confidence: **OFFICIAL / HIGH_CROSSCHECKED**

## modeSpecificMinimumData

- 通常時はART期待度に関わる **低確 / 高確 / 超高確** の3内部状態を持つ。
- 宝玉5個獲得またはレア役抽選から最大32Gの魔法陣ステージへ移行。
- ART「アルスタイム」はナビ回数管理。マジカル7チャンスでナビ回数を上乗せ。
- 天井: **ART間1500G消化後、準備状態を経由してARTへ突入**。P-WORLD・パチビー・後年機種資料で一致。
- 実機完全再現用途の全状態移行率・全ART継続振り分け等は収集対象外。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。後年の解析整理資料に「設定変更時」の専用内部状態振り分け表が存在し、設定変更で低確/高確/超高確を再抽選することを確認。天井ゲーム数、宝玉、ARTストック等の設定変更時処理は本機固有の直接根拠を今回確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のART間1500G天井進捗、宝玉、内部状態、ARTストック等の保持/再抽選を、本機固有の直接記述として確定できず。一般則から補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ON時の天井ゲーム数、内部状態、宝玉、ARTストック、液晶ステージの扱いを直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井はART間1500Gだが、設定変更時にこのカウンタがCLEAR/RETAINのどちらかを示す直接資料を回収できなかった。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井ART間1500Gは確認。設定変更専用短縮天井・変更後天井数値は、表記揺れ・型式・メーカー・朝一/設定変更/リセット/据え置き/宵越し/天井短縮で再探索しても確認できず。

modeAfterReset: **NOT_APPLICABLE_AS_SEPARATE_LONG_GAME_MODE_NOT_CONFIRMED**。本機には低確/高確/超高確の内部状態が存在するが、ゲーム数管理の長期モード体系としての「通常A/B/天国」等は確認していない。内部状態はstateAfterResetで管理。

stateAfterReset: **RESELECT_CONFIRMED_WITH_NUMERIC_DATA**。設定変更時に低確/高確/超高確を再抽選。後年解析整理資料の設定別振り分けは下記numericResetDataに保存。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **HIGH_OR_SUPERHIGH_START_POSSIBLE**。設定変更時に高確/超高確へ振り分けられることは数値で確認。ただし朝一ART当選率・期待枚数などの直接公開比較値は確認できず、これ以上の恩恵評価はしない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗CLEARが確認できていないため、宵越し不利を推測で記録しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期液晶ステージ、宝玉表示、出目等を用いた本機固有の設定変更/据え置き判別法は十分な再探索後も直接確定できず。

numericResetData:
- 通常天井: **ART間1500G → 準備状態経由でART**
- 設定変更時内部状態振り分け（低確 / 高確 / 超高確）:
  - 設定1: **75.6% / 14.7% / 9.77%**
  - 設定2: **73.6% / 15.6% / 10.7%**
  - 設定3: **70.7% / 17.6% / 11.7%**
  - 設定4: **63.9% / 21.5% / 14.7%**
  - 設定5: **56.1% / 24.4% / 19.5%**
  - 設定6: **41.4% / 29.3% / 29.3%**
- 設定変更時天井ゲーム数: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一特定G以内ART当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_SINGLE_RETROSPECTIVE_FOR_NUMERIC_STATE_RESET / HIGH_FOR_NORMAL_CEILING / UNVERIFIED_AFTER_RESEARCH_FOR_COUNTER_AND_POWER_CYCLE**。設定変更時内部状態再抽選値は後年整理資料1系統で直接確認。通常天井は複数系統で照合。ゲーム数天井リセット・据え置き・電断・変更判別は資料系統を変えても直接確定できず。

## conflicts

- ART継続率の中間段階はpacnkが **5/50/65/70/80/90%**、後年機種資料が **5/50/66/75/80/90%** と表記差。物差し用途では最高90%と段階制を主値とし、中間段階は `CONFLICT_ROUNDING_OR_SOURCE_DEFINITION` として保持。
- システム表記は藤商事公式・P-WORLD等ではART、後年一部資料はA+ART。ボーナス搭載＋ART機であるため本DB分類はA+ARTとする。

## missingFields

- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- ART単独初当り設定別: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehaviorの天井/宝玉/ARTストック処理: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

- 藤商事公式製品ページ（公式、ART純増・BIG/REG規定終了条件）: https://www.fujimarukun.co.jp/products/alice/
- グリーンべると（2011-07-19、藤商事プレス発表・9月上旬納品予定）: https://web-greenbelt.jp/00002173/
- パチビー（2011-09-05導入、約200/46枚、ART純増、ART間1500G天井）: https://www.pachibee.jp/machines/index/211070008
- P-WORLD（ART仕様・約200/46枚・平均約50G・ART間1500G天井）: https://www.p-world.co.jp/machine/database/6446
- パチマガスロマガ 基本仕様（ART純増・獲得枚数）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/11/a.php
- パチマガスロマガ ボーナス確率/PAYOUT（設定別BIG/REG/合算/機械割）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/11/h.php
- パチマガスロマガ 機種目次（朝イチ・設定変更項目の存在確認）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/11/fuji_slot_11.php
- pacnk（設定別BIG/REG/機械割・内部状態・ART仕様）: https://pacnk.com/slot/2011/alice/top.php
- 中一商事（型式名・ボーナス合算・ART仕様）: https://www.nakaiti.com/html/sFujisho001.html
- 樂都後年機種資料PDF（50枚約30G、ART間1500G、設定変更時内部状態振り分け）: https://slotto.com.tw/data/attachment/product/202306/gliqzceebk.pdf

## sourceConfidence

**OFFICIAL/HIGH for machine identity and ART/basic payout; ANALYSIS_HIGH for payout rate and bonus probabilities; ANALYSIS_SINGLE_RETROSPECTIVE for base and setting-change state table; UNVERIFIED only after varied-keyword/source-family research for remaining reset details.**
