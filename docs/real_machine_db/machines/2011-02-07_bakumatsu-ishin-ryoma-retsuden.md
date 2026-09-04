# 幕末維新龍馬烈伝

machineName: 幕末維新龍馬烈伝
manufacturer: DAXEL
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: 幕末維新 龍馬烈伝 / 幕末維新龍馬烈伝 / 龍馬烈伝
generation: 5号機
releaseDate: 2011-02-07
releaseDateStatus: HIGH_CONFIDENCE
releaseDateNote: パチビーとK-Naviがホール導入2011-02-07を直接掲載。当時グリーンべるとは2011-02-06から納品予定と報道しており、納品開始/ホール導入の定義差として整合。
systemType: A+ART / ボーナス+自力CZ型ART / ナビストック
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線549レコード「頑固一徹」を再取得して開始。
- 開始時正本は recordCount 549 / chronologicalFrontier 2011-02-07。
- LATEST_HANDOFFが次候補として指定していた本機を再探索し、パチビー/K-Naviで2011-02-07導入を直接確認。
- repo code searchで未登録を確認し、550件目として追加。
- chronologicalFrontierは2011-02-07のまま。同日群監査を継続する。

## payoutRateBySetting

K-Navi / pacnk一致:
- 設定1: **97.9%**
- 設定2: **98.9%**
- 設定3: **100.4%**
- 設定4: **105.6%**
- 設定5: **108.4%**
- 設定6: **112.2%**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

K-Navi / pacnk一致:

### BIG合算
- 設定1: **1/390.1**
- 設定2: **1/383.3**
- 設定3: **1/372.4**
- 設定4: **1/356.2**
- 設定5: **1/339.6**
- 設定6: **1/327.7**

### REG
- 設定1: **1/399.6**
- 設定2: **1/407.1**
- 設定3: **1/420.1**
- 設定4: **1/442.8**
- 設定5: **1/471.5**
- 設定6: **1/496.5**

### ボーナス合算
- 全設定: **1/197.4**

### バトルチャンス（BC）突入率
- 設定1: **1/168.9**
- 設定2: **1/160.9**
- 設定3: **1/150.5**
- 設定4: **1/130.6**
- 設定5: **1/112.2**
- 設定6: **1/101.2**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **36.40G / 1000円(50枚)**（全設定共通掲載）

パチマガスロマガ保存ページの直接値。
confidence: ANALYSIS_HIGH_ARCHIVE

## netIncrease

- ART「開国RUSH」: **約+1.4枚/G**

DAXEL発表を伝える当時グリーンべると、P-WORLD、パチビー、パチマガスロマガで一致。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## basicPayout

- 同色BIG: **約204枚**（271枚超の払い出しで終了）
- 異色BIG: **約150枚**（199枚超の払い出しで終了）
- REG: **約48枚**（63枚超の払い出しで終了）

P-WORLDとパチマガスロマガで一致。規定払い出し枚数と純増獲得枚数を混同しない。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ART「開国RUSH」はナビストック型。獲得したナビストックを消化するまで継続。
- ART突入の主経路は自力型「バトルチャンス（BC）」で、対戦相手を4種類から選択する選略型システム。
- 通常時はBC突入期待度の異なる**低確/高確**が存在し、ボーナス後は高確へ移行。BAR揃い等で超高確の契機も存在。
- 通常ゲーム数天井は**ボーナス間999G+α（最大32G前兆）でBC突入**。以後ボーナス成立まで約32G周期でBCが発生する。
- ART純増は約+1.4枚/G。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **PARTIALLY_CONFIRMED**。本機専用の「朝イチ・設定変更」解析項目がパチマガスロマガ保存インデックスに存在。再探索により、少なくとも設定変更時は**ボーナス間天井ゲーム数がリセット**されることを確認。高確/低確状態、BC前兆、開国RUSHナビストック等の設定変更時処理は直接根拠を確定できず推測しない。

carryOverBehavior: **PARTIAL / CEILING_CARRYOVER_EXPECTED_IF_NO_SETTING_CHANGE_BUT DIRECT_MACHINE_SPECIFIC_DETAIL_LIMITED**。設定変更で天井G数がリセットされることは確認したが、据え置き時の本機固有の明示本文を十分回収できていないため、内部状態・ART権利を一般論で補完しない。朝一宵越し可否の確定表現は追加資料待ち。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の天井G数、内部高確、BC前兆、ARTナビストックの保持/初期化を本機固有資料で直接確定できず。

gameCounterReset: **RESET_ON_SETTING_CHANGE_CONFIRMED**。ボーナス間999G+α天井のゲーム数は設定変更でリセット。

ceilingAfterReset: **NORMAL_CEILING_RESTART / NO_SHORTENED_RESET_CEILING_CONFIRMED**。設定変更後は通常天井カウントを再スタート。リセット専用短縮天井の公開値は確認されない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。長期ゲーム数モードは確認されないが、低確/高確/超高確に相当する状態の設定変更時初期振り分けは直接値を回収できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時低確/高確、BC前兆等の設定変更時状態を推測しない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井、高確スタート率、朝一専用BC/ART優遇の公開数値は確認できず。

resetPenalties: **CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**。前日のボーナス間天井進捗は設定変更で失われることを確認。その他ARTストック/内部状態の消失は直接根拠不足のため追加しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。機種名/表記揺れ+DAXEL+設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/天井を組み替え、当時解析・業界記事・古いDB・回顧資料を横断したが、ガックン・初期出目・表示等の本機固有変更判別を確定できず。

numericResetData:
- normalCeiling: **ボーナス間999G+α（最大32G前兆）**
- settingChangeGameCounter: **0から再スタート / RESET_CONFIRMED**
- resetDedicatedShortCeiling: **NONE_CONFIRMED**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**
- resetDetectionNumeric: **NONE_CONFIRMED**

resetBehaviorQA: **PARTIAL_CONFIRMED_CEILING_RESET_OTHER_RESET_DETAILS_UNVERIFIED**

## conflicts

- 性能コアに実質的CONFLICTなし。
- K-Naviの271/199/63枚はボーナスの終了条件となる規定払い出し、P-WORLD/パチマガスロマガの204/150/48枚は実獲得の目安であり、定義差として分離しCONFLICT扱いしない。

## missingFields

- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior detailed: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset/stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- ART/nav-stock handling on setting change: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. パチビー — 幕末維新龍馬烈伝
   - https://www.pachibee.jp/machines/about/210120007
   - 導入日2011-02-07、5号機ART、天井あり、純増約1.4枚/Gを確認。
   - confidence: ANALYSIS_HIGH

2. K-Navi — 幕末維新 龍馬烈伝
   - https://p-kn.com/slot/1344/
   - ホール導入2011-02-07、設定別BIG/REG/合算/BC、機械割、ボーナス規定払い出しを確認。
   - confidence: ANALYSIS_HIGH

3. P-WORLD — 幕末維新龍馬烈伝
   - https://www.p-world.co.jp/machine/database/6219
   - ART純増約1.4枚/G、同色BIG約204枚/異色BIG約150枚/REG約48枚、ボーナス間999G+α天井と以後約32G周期BCを確認。
   - confidence: INDUSTRY_DATABASE

4. グリーンべると — DAXELが“選略型ART”搭載『龍馬烈伝』を発表
   - https://web-greenbelt.jp/00006693/
   - 2010-12-13掲載、納品2011-02-06予定、DAXEL第2弾/同社初ART機、開国RUSH純増1.4枚/Gを確認。
   - confidence: INDUSTRY_PRIMARY_REPORT

5. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/02/c.php
   - 1000円あたり36.40Gを確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

6. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/02/a.php
   - 開国RUSH約+1.4枚/G、ナビストック継続、ボーナス純増約204/150/48枚を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

7. パチマガスロマガ — 機種インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/02/daxel_slot_02.php
   - 本機専用「天井」「朝イチ・設定変更」解析項目の存在を確認。具体本文は取得できない部分があり、未確認項目は推測しない。
   - confidence: ANALYSIS_HIGH_ARCHIVE_INDEX_ONLY

8. pacnk — 幕末維新龍馬烈伝
   - https://pacnk.com/slot/2011/bakumatuisin/top.php
   - 機械割、BIG/REG/BC、低確/高確、BC最大32G前兆を照合。
   - confidence: ANALYSIS_SINGLE_CROSSCHECKED

9. pacnk — 設定判別/天井
   - https://pacnk.com/slot/tools/sh_bakumatuisin.html
   - ボーナス間999G+α天井、以後約32G周期BC、**設定変更後は天井ゲーム数リセット**を確認。
   - confidence: ANALYSIS_SINGLE_CROSSCHECKED_FOR_CEILING
