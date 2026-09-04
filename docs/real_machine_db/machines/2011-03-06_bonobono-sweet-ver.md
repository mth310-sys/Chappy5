# パチスロ「ぼのぼの」～スウィートver.～

machineName: パチスロ「ぼのぼの」～スウィートver.～
manufacturer: 山佐
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: ぼのぼの ～スウィートver.～ / ぼのぼの スウィートVer. / パチスロぼのぼの / BONOBONO Sweet ver.
releaseDate: 2011-03-06
releaseDateStatus: EXACT_PLANNED_INITIAL_SHIPMENT_DATE_CONFIRMED_WITH_HALL_START_NEXT_DAY
releaseDateNote: 山佐公式は2011年3月稼働。グリーンべると2011-02-28記事は「納品は3月6日からスタートする予定」と明記。K-Naviはホール導入開始を2011-03-07とする。本DBでは最初の市場投入イベントとして3/6納品開始予定を時系列主値とし、ホール導入開始3/7を別イベントとして保持する。
generation: 5号機
systemType: ノーマルAタイプ / ボーナス主体 / REG後20G RT / プチRT
coreStatus: COMPLETE_CORE_WITH_PAYOUT_RATE_CONFLICT_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、555レコード「シオサイマックス-30」を再取得して開始。
- 開始時正本は recordCount 555 / chronologicalFrontier 2011-02-21。
- LATEST_HANDOFF指定どおり2011-02-22〜2011-03-05を境界監査。今回確認できた具体日資料では同期間に本機より前の未登録機を確定できなかったため、次の具体日アンカーである本機へ進行。
- repo検索で本機の既存レコードがないことを確認。
- グリーンべるとで2011-03-06納品開始予定、K-Naviで2011-03-07ホール導入開始、山佐公式で2011年3月稼働を確認。

## payoutRateBySetting

### 主系列 — パチマガスロマガ公式アーカイブ / 5号機クロニクル
- 設定1: **97.5%**
- 設定2: **98.5%**
- 設定3: **100.0%**
- 設定4: **101.0%**
- 設定5: **103.0%**
- 設定6: **107.0%**

### CONFLICT — K-Navi
- 設定1: **98.2%**
- 設定2: **99.3%**
- 設定3: **100.0%**
- 設定4: **101.0%**
- 設定5: **103.5%**
- 設定6: **107.0%**

confidence: CONFLICT
note: 設定1・2・5で差があるため平均化しない。業界記事はレンジ97.5〜107.0%で主系列と整合するため、物差し主値は97.5/98.5/100.0/101.0/103.0/107.0を採用し、K-Navi系列を競合として保持する。

## initialHitBySetting

### BIG合成
- 設定1: **1/199.8**
- 設定2: **1/199.8**
- 設定3: **1/189.4**
- 設定4: **1/189.4**
- 設定5: **1/179.1**
- 設定6: **1/167.2**

### REG
- 設定1: **1/199.8**
- 設定2: **1/199.8**
- 設定3: **1/211.4**
- 設定4: **1/211.4**
- 設定5: **1/226.0**
- 設定6: **1/248.2**

### ボーナス合算
- 設定1〜6: **全設定共通 1/99.9**

K-Naviの設定別値と、山佐公式・グリーンべると・パチマガスロマガの全設定共通合算1/99.9を照合。

confidence: ANALYSIS_HIGH_CROSSCHECKED_WITH_OFFICIAL_AND_INDUSTRY

## baseGamesPer50

- **約37G / 1000円（50枚）**

グリーンべると2011-02-28記事の直接値。

confidence: INDUSTRY

## netIncrease

- 通常ART/AT: **NOT_APPLICABLE**
- REG後RT: **20G / コイン増減ほぼ現状維持**
- RT中ボーナス引き戻し: **約5回に1回（約20%）**

confidence: OFFICIAL_FOR_20G_AND_APPROX_REHIT / ANALYSIS_HIGH_FOR_NEAR_ZERO_NET

## basicPayout

- SUPER BIG: **純増約300枚**
- NORMAL BIG: **純増約200枚**
- REG: **約50枚**

グリーンべるとがBB純増300枚/200枚、P-WORLDがSUPER BIG 300枚・NORMAL BIG 200枚・REG 50枚と記載。K-Navi役構成表示の「PAYOUT 325 / 250 / 50」は払い出し表示とみられるため、実獲得枚数と混同せず別定義として扱う。

confidence: ANALYSIS_HIGH_CROSSCHECKED_WITH_INDUSTRY

## modeSpecificMinimumData

- 甘スロシリーズ第2弾のノーマルAタイプ。
- ボーナス合算は全設定共通1/99.9。
- 2種類のBIG（約300枚 / 約200枚）とREGを搭載。
- REG終了後は必ず**20GのRT**へ突入。RTはほぼ現状維持で、約5回に1回の割合でボーナス引き戻しが期待できる。
- 連続演出用のプチRTも搭載するが、長期出玉モードではない。
- 通常時ゲーム数による天井・規定G数解除・AT/ART/CZは確認されない。
- 有利区間制度前の5号機。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE / NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED**。機種名表記揺れ、山佐、甘スロ、型式候補と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「RT」「天井」「ガックン」を組み合わせ、山佐公式、グリーンべると、K-Navi、P-WORLD、パチマガスロマガ、5号機DBを横断したが、本機固有の設定変更時RT状態処理を直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE**。通常時に蓄積型の天井ゲーム数・モードは確認されないため長期カウンタ引継ぎ問題は実質非該当。一方、REG後20G RT中に据え置き営業をまたぐ場合の残G状態を直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE**。単純電源OFF→ON時のREG後20G RT残G・プチRT状態を本機固有資料で直接確定できず。

gameCounterReset: **NOT_APPLICABLE_FOR_CEILING_GAME_COUNT**。通常時のゲーム数天井・規定G数解除は確認されない。RT残ゲーム数の設定変更/電断処理は別項目としてUNVERIFIED。

ceilingAfterReset: **NOT_APPLICABLE / NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井・朝一天井も確認されず。

modeAfterReset: **NOT_APPLICABLE_FOR_LONG_TERM_OUTPUT_MODE**。長期通常モード/天井モードは確認されず、朝一専用モードの公開情報も確認なし。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE_ONLY**。通常時の高確/超高確等の長期内部状態は確認されず。REG後20G RT・プチRTの変更/電断時状態処理のみ未確定。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮、朝一ボーナス優遇、専用高確/モード等は確認されず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日ゲーム数天井の蓄積自体が確認されない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶/4thリール表示などによる本機固有の設定変更/据え置き判別を再探索したが直接根拠を確定できず。

numericResetData:
- normalGameCountCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- regPostRT: **20G**
- regPostRTRehitApprox: **約20% / 約5回に1回**
- gameCounterOnSettingChange: **NOT_APPLICABLE_FOR_CEILING**
- rtRemainingOnSettingChange: **UNVERIFIED_AFTER_RESEARCH**
- rtRemainingOnPowerCycle: **UNVERIFIED_AFTER_RESEARCH**
- resetModeDistribution: **NONE_CONFIRMED / NOT_APPLICABLE**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

- **releaseDate / rollout definition**: グリーンべるとは2011-03-06納品開始予定、K-Naviは2011-03-07ホール導入開始、山佐公式は2011年3月稼働。納品とホール導入を混同せず、時系列主値は最初の市場投入イベント3/6とする。
- **機械割**: パチマガスロマガ/5号機クロニクルは97.5/98.5/100.0/101.0/103.0/107.0%、K-Naviは98.2/99.3/100.0/101.0/103.5/107.0%。平均化しない。
- **BIGの325/250表記**: K-Naviは役構成欄でPAYOUT 325/250、グリーンべると/P-WORLD/山佐公式説明は実獲得約300/200枚。定義差として分離し、基本獲得性能には実獲得約300/200枚を採用。

## missingFields

- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior for REG後RT / プチRT: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior for RT残G: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior for RT残G: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. 山佐ネクスト公式 — パチスロ「ぼのぼの」～スウィートver.～
   - https://www.yamasa-next.co.jp/model_bon/
   - 5号機/Aタイプ、2011年3月稼働、全設定共通ボーナス合算1/99.9、BIG約200枚/300枚、REG後20G RT、約5回に1回の引き戻しを確認。
   - confidence: OFFICIAL

2. グリーンべると — 山佐、甘スロシリーズ第2弾を発表（2011-02-28）
   - https://web-greenbelt.jp/00001822/
   - 2011-03-06納品開始予定、BB純増300枚/200枚、RB+20G RT、BIG/REGレンジ、機械割97.5〜107.0%、1000円約37Gを確認。
   - confidence: INDUSTRY

3. パチマガスロマガ公式アーカイブ — パチスロ「ぼのぼの」～スウィートVer.～
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/178/h.php
   - 全設定共通ボーナス抽選1/99.9、機械割97.5/98.5/100.0/101.0/103.0/107.0%を確認。
   - confidence: ANALYSIS_HIGH

4. K-Navi — パチスロ「ぼのぼの」～スウィートver.～
   - https://p-kn.com/slot/1395/
   - 2011-03-07ホール導入開始、設定別BIG/REG、全設定共通合算1/99.9、別系列の機械割98.2/99.3/100.0/101.0/103.5/107.0%、REG後20G RTを確認。
   - confidence: ANALYSIS_HIGH

5. P-WORLD — パチスロ「ぼのぼの」～スウィートver.～
   - https://www.p-world.co.jp/machine/database/6289
   - SUPER BIG 300枚 / NORMAL BIG 200枚 / REG 50枚、REG後20G RT、RT中コイン増減ほぼ現状維持を確認。
   - confidence: ANALYSIS_HIGH

6. 5号機クロニクル — 山佐5号機一覧
   - https://5goki.com/yamasa
   - 機械割97.5/98.5/100.0/101.0/103.0/107.0%を別系統で照合。
   - confidence: ANALYSIS_SINGLE
