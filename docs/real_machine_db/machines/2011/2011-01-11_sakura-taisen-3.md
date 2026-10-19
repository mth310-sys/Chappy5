# パチスロサクラ大戦3 ～巴里は燃えているか～

machineName: パチスロサクラ大戦3 ～巴里は燃えているか～
manufacturer: サミー
releaseDate: 2011-01-11
releaseDateStatus: HALL_INTRODUCTION_DATE_WITH_CONFLICT
releaseDateNote: K-Navi、GameBusiness、当時業界系記事は2011-01-11設置/導入開始で一致。一方、J-CAST転載記事は2011-01-10から稼働と記載するためCONFLICTとして保持する。
generation: 5号機
systemType: A+ART / セットストックART
formalModelName: サクラ大戦3AX
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: サクラ大戦3 / サクラ大戦3～巴里は燃えているか～ / サクラ大戦3AX
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線531「緑ドン VIVA!情熱南米編」、遡及532「スペシャルハナハナII-30」を確認。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 532 / chronologicalFrontier 2010-12-10。
- 2010-12-11～12-31の境界を導入日・新機種・メーカー/業界資料で監査。12/13は既登録「緑ドン VIVA!情熱南米編」の別資料導入日と確認し重複追加しない。12月中に本機より前へ割り込む強い未登録ホール導入日を今回確定できなかった。
- 「真・三國無双」は平和公式の2010年12月登場表記に対し、当時業界記事で2011年2月20日納品開始、別資料で2月21日ホール導入が確認されるため12月本線へ早計に挿入しない。
- repo内で「サクラ大戦3」を検索し既存レコードなしを確認。2012年の「サクラ大戦3 -Loop Ver.-」は別スペックとして混同しない。

## payoutRateBySetting

- 設定1: **97.2%**
- 設定2: **98.8%**
- 設定3: **101.3%**
- 設定4: **104.9%**
- 設定5: **110.0%**
- 設定6: **115.0%**

旧解析資料と後年整理DBで一致。
confidence: ANALYSIS_HIGH

## initialHitBySetting

### BIG合成
- 設定1: **1/414.8**
- 設定2: **1/407.1**
- 設定3: **1/394.8**
- 設定4: **1/381.0**
- 設定5: **1/370.3**
- 設定6: **1/362.1**

### REG
- 設定1: **1/624.1**
- 設定2: **1/590.4**
- 設定3: **1/560.1**
- 設定4: **1/532.8**
- 設定5: **1/500.2**
- 設定6: **1/474.9**

### ボーナス合算
- 設定1: **1/249.1**
- 設定2: **1/240.9**
- 設定3: **1/231.5**
- 設定4: **1/222.1**
- 設定5: **1/212.7**
- 設定6: **1/205.4**

### ART初当たり
- 設定1: **1/233.3**
- 設定2: **1/225.3**
- 設定3: **1/205.0**
- 設定4: **1/183.3**
- 設定5: **1/157.1**
- 設定6: **1/137.4**

K-Naviの整数丸めボーナス合算（1/249～1/205）とも整合。
confidence: ANALYSIS_HIGH

## baseGamesPer50

- 設定1: **33.3G / 1000円（50枚）**
- 設定2: **33.1G**
- 設定3: **33.1G**
- 設定4: **32.9G**
- 設定5: **32.9G**
- 設定6: **32.9G**

confidence: ANALYSIS_SINGLE

## netIncrease

- ART「光武モード」: **約+1.4枚/G**
- 基本1セット: **50G**
- セットストック方式。STOCK by STOCKを搭載。

当時業界記事、パチマガスロマガ、P-WORLD、旧解析で主要値を照合。
confidence: HIGH_MULTI_SOURCE

## basicPayout

- 赤7BIG: **約300枚**（360枚超払い出し終了）
- 白7BIG: **約200枚**（240枚超払い出し終了）
- REG: **約30～50枚**（5Gまたは5回入賞で終了）

confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時内部状態: **低確 / 高確 / 超高確**。
- 通常天井: **ボーナスもARTも引かず900G消化でARTストック確定**。
- シングル天井: **ボーナス後100G間シングル非成立でARTストック確定**。
- ボーナス間救済: 900GでART当選率1.75倍、1200Gで3倍、1500Gで6倍という旧解析値あり。完全再現用の詳細抽選は収集対象外のため主要救済値としてのみ保持。

confidence: ANALYSIS_SINGLE_WITH_CROSSCHECK_FOR_CEILING_EXISTENCE

## resetBehavior — v0.7

settingChangeBehavior: **VERIFIED_PARTIAL**。設定変更時は天井到達までのゲーム数がクリアされ、内部状態を再抽選。液晶滞在ステージはそのままと旧解析に明記。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の天井クリアは直接確認したが、本機固有の据え置き時に通常天井・シングル天井・状態・ARTストックをどこまで保持するかを独立資料で安全に確定できず、推論で補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。2011年初代サクラ大戦3について、設定変更を伴わない単純電源OFF→ON時の天井進捗・内部状態・ARTストック処理を直接確定できず。2012 Loop Ver.や2017年機の電断情報は別機種なので転用しない。

gameCounterReset: **RESET_ON_SETTING_CHANGE**。通常天井到達までのゲーム数は設定変更でクリア。

ceilingAfterReset: **NO_DEDICATED_SHORTER_RESET_CEILING_CONFIRMED**。設定変更専用の短縮天井は確認できず。通常天井900G、シングル天井100Gの通常仕様を保持。

modeAfterReset: **STATE_RESELECTION_CONFIRMED**。低確/高確/超高確を設定別に再抽選する。

stateAfterReset: **NUMERIC_DISTRIBUTION_CONFIRMED_SINGLE_SOURCE**。
- 設定1: 低確74.5% / 高確25.0% / 超高確0.5%
- 設定2: 低確73.4% / 高確26.0% / 超高確0.6%
- 設定3: 低確72.4% / 高確26.9% / 超高確0.7%
- 設定4: 低確71.3% / 高確27.9% / 超高確0.8%
- 設定5: 低確70.2% / 高確28.9% / 超高確0.9%
- 設定6: 低確69.1% / 高確29.9% / 超高確1.0%

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **VERIFIED_NUMERIC_PARTIAL**。設定変更後は設定に応じ約25.5～30.9%で高確以上から開始する。ただし専用短縮天井は確認できない。

resetPenalties: **VERIFIED**。設定変更で前日までの通常天井進捗が消失する。

resetDetection: **PARTIAL_EXISTENCE_CONFIRMED / EXACT_METHOD_UNVERIFIED_AFTER_RESEARCH**。K-Naviに本機専用「ガックン判別は通用する?」項目が現存することは確認したが、検索取得本文では具体的結論を回収できなかった。ガックンの可否を推測で補完しない。液晶ステージは設定変更でも据え置かれるため、ステージ変更だけを確定判別材料とはしない。

numericResetData:
- normalCeiling: **900G without bonus/ART -> ART stock**
- singleCeiling: **100G after bonus without SINGLE -> ART stock**
- settingChangeCeilingProgress: **RESET**
- resetLowState: **74.5 / 73.4 / 72.4 / 71.3 / 70.2 / 69.1%**
- resetHighState: **25.0 / 26.0 / 26.9 / 27.9 / 28.9 / 29.9%**
- resetSuperHighState: **0.5 / 0.6 / 0.7 / 0.8 / 0.9 / 1.0%**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- carryOverCeilingProgress: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleCarryOver: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **VERIFIED_SETTING_CHANGE_COUNTER_AND_STATE_WITH_CARRYOVER_POWER_CYCLE_DETECTION_GAPS**

## conflicts

- 導入日: K-Navi・GameBusiness・業界系資料は**2011-01-11**、J-CAST転載は**2011-01-10**から稼働と記載。平均せずCONFLICTとして保持し、複数一致の1/11を主値。
- 市場で設定1の実出玉率が想定より高いとの報告を受け、サミーが設置継続を希望しないホールへの回収/代替機対応を発表した。当DBのpayoutRateBySettingは公称/解析スペック値として97.2～115.0%を保持し、噂・実績値を混ぜない。

## missingFields

- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior exact: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior exact: UNVERIFIED_AFTER_RESEARCH
- ART stock handling on setting change/carryover/power cycle: UNVERIFIED_AFTER_RESEARCH
- gakkun exact reset-detection conclusion: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. K-Navi「パチスロサクラ大戦3」 — 2011-01-11ホール導入開始、ボーナス合算、天井/設定変更/ガックン/状態移行項目の存在。
   - https://p-kn.com/slot/1320/
   - confidence: ANALYSIS_HIGH
2. GameBusiness.jp「パチスロ版『サクラ大戦3』、想定以上の出玉率の為回収に」 — 2011-01-11設置開始、メーカー対応。
   - https://www.gamebusiness.jp/article/2011/01/29/2975.html
   - confidence: INDUSTRY_SECONDARY
3. 娯楽産業「サミー 『パチスロサクラ大戦3』の対策について」 — 1/11導入、サミー発ニュースリリースの内容を当時掲載。
   - https://www.goraku-sangyo.com/サミー-「パチスロサクラ大戦3」の対策について/
   - confidence: INDUSTRY
4. J-CASTニュース転載 — 2011-01-10稼働開始という導入日競合根拠。
   - https://news.livedoor.com/article/detail/5295050/
   - confidence: SECONDARY
5. パチスロ解析攻略・クランキーセブン「サクラ大戦3 ～巴里は燃えているか～」 — 設定別機械割、BIG/REG/ART、50枚ベース、天井、設定変更時天井クリア、状態振り分け、ART主要仕様。
   - https://crankyseven.com/sakurataisen3-pc.htm
   - confidence: ANALYSIS_SINGLE
6. パチマガスロマガ公式アーカイブ「パチスロサクラ大戦3 ～巴里は燃えているか～」 — ART約+1.4枚/G、50G、赤BIG約300枚、白BIG約200枚、REG最大50枚ほか。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/126/a.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/126/c.php
   - confidence: ANALYSIS_HIGH
7. P-WORLD「サクラ大戦3」 — ART50G、約+1.4枚/G、セットストック/STOCK by STOCK等。
   - https://www.p-world.co.jp/machine/database/6159
   - confidence: INDUSTRY_DB
8. Pマンズ / プレイグラフ転載（2010-11） — 当時発表会、ART純増約1.4枚/G、エウレカセブン正統後継という発表内容。
   - https://p-mans.blogspot.com/2010/11/
   - confidence: INDUSTRY
9. 愛品館実機資料 — 型式表記「サクラ大戦3AX」の補助照合。
   - https://www.aihin.co.jp/new/news-978320/
   - confidence: SECONDARY_PHYSICAL_MACHINE

## researchNotes

- 「パチスロサクラ大戦3 / サクラ大戦3 / 巴里は燃えているか / サクラ大戦3AX / Sammy」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 900G / シングル天井 / 状態移行 / 高確 / 超高確 / ガックン / 50枚 / 1000円 / コイン持ち / 機械割」を組み替えて検索。
- K-Navi、P-WORLD、パチマガスロマガ旧アーカイブ、旧解析DB、当時業界記事、後年実機資料を横断。
- 2012年「サクラ大戦3 -Loop Ver.-」、2017年「サクラ大戦～熱き血潮に～」は別型式/別スペックなのでresetBehaviorを転用していない。
