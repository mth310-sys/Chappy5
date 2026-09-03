# スペシャルハナハナII-30

machineName: スペシャルハナハナII-30
manufacturer: パイオニア
releaseDate: 2010-12-06
releaseDateStatus: HALL_INTRODUCTION_PLANNED_DATE_WITH_SHIPMENT_CROSSCHECK
releaseDateNote: 当時プレイグラフ転載（Pマンズ）でホール導入予定2010-12-06。グリーンべるとは納品2010-12-05開始予定、パイオニア公式は2010年12月発売。日付定義を分離し、時系列主値はホール導入予定12/06とする。既存frontier 2010-12-10より前の漏れを遡及追加するためfrontier自体は戻さない。
generation: 5号機
systemType: ノーマル / 完全告知 / 沖スロ30φ
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: スペシャルハナハナⅡ-30 / スペハナ2 / スペハナII
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前531「緑ドン VIVA!情熱南米編」を再取得。
- LATEST_HANDOFF指定の最優先境界監査として本機を確認。repo内機種名検索で既存レコードなし。
- 当時業界記事で納品12/05開始予定、別当時業界資料でホール導入予定12/06を確認。2010年12月発売というメーカー公式時系列とも整合。
- 531より前に割り込む漏れとして532件目に遡及追加。chronologicalFrontierは2010-12-10を維持する。

## payoutRateBySetting

- 設定1: **96%**
- 設定2: **98%**
- 設定3: **101%**
- 設定4: **104%**
- 設定5: **107%**
- 設定6: **111%**

P-WORLD、K-Navi、パチマガスロマガで一致。グリーンべるとも設定6最高111%を当時記事で確認。
confidence: ANALYSIS_HIGH_MULTI_SOURCE / INDUSTRY_CROSSCHECK

## initialHitBySetting

### BIG
- 設定1: **1/312**
- 設定2: **1/303**
- 設定3: **1/290**
- 設定4: **1/275**
- 設定5: **1/259**
- 設定6: **1/244**

### REG
- 設定1: **1/520**
- 設定2: **1/489**
- 設定3: **1/452**
- 設定4: **1/417**
- 設定5: **1/383**
- 設定6: **1/348**

### ボーナス合算
- 設定1: **1/195**
- 設定2: **1/187**
- 設定3: **1/176**
- 設定4: **1/165**
- 設定5: **1/154**
- 設定6: **1/143**

P-WORLDとパチマガスロマガで一致。後年整理資料には設定6 BIG 1/245・REG 1/349・合算1/144等の整数丸め差があるため、当時解析系2資料一致値を主値とする。
confidence: ANALYSIS_HIGH

## baseGamesPer50

- **平均約38G / 50枚（1000円）**

グリーンべると当時業界記事、P-WORLD、PAPIMO系機種説明で一致。
confidence: INDUSTRY_HIGH_MULTI_SOURCE

## netIncrease

- NOT_APPLICABLE。ART/RT等の付加機能なしの純ノーマル機。

## basicPayout

- BIG: **約312枚**（345枚超払い出しで終了）
- REG: **約130枚**（135枚超払い出しで終了）

P-WORLDおよび複数後年資料で一致。
confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 完全告知ノーマル。ハイビスカス点滅でボーナス確定。
- 通常ゲーム数天井、RT/ART/AT、ゲーム数モードは確認されない。
- ボーナスのみで出玉を構成。
confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。本機名・表記揺れ・メーカー名と設定変更/リセット/朝一/据え置き/ガックン等を組み替えて探索したが、本機固有の設定変更処理を直接確定できる資料を回収できず。一般的なハナハナ系挙動から補完しない。

carryOverBehavior: **NO_GAME_COUNT_OR_MODE_CARRYOVER_TARGET / OTHER_BEHAVIOR_UNVERIFIED**。通常ゲーム数天井・長期モードがないため、それらの据え置き引継ぎ対象はなし。リール初期挙動等は未確認。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のリール位置・告知ランプ等の本機固有挙動を直接確認できず。

gameCounterReset: **NOT_APPLICABLE_FOR_CEILING**。通常ゲーム数天井なし。

ceilingAfterReset: **NOT_APPLICABLE**。通常天井・リセット短縮天井なし。

modeAfterReset: **NOT_APPLICABLE_FOR_LONG_TERM_GAME_MODE**。通常/天国等のゲーム数モードなし。

stateAfterReset: **NO_RT_ART_AT_STATE / OTHER_INTERNAL_RESET_STATE_UNVERIFIED**。RT/ART/AT状態なし。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の朝一短縮天井・初当たり優遇・専用モード等は確認されず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。消滅する天井進捗等の主要不利要素は対象なし。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。本機固有のガックン、初期出目、ランプ等による変更判別を直接確定できず。

numericResetData:
- normalCeiling: **NONE_CONFIRMED**
- resetDedicatedShortCeiling: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE_FOR_LONG_TERM_GAME_MODE**
- resetBenefitProbability: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **VERIFIED_NON_APPLICABLE_CORE_WITH_DETECTION_POWER_CYCLE_GAPS**

## conflicts

- 導入日定義: グリーンべるとは「納品12月5日より開始予定」、当時プレイグラフ転載は「ホール導入予定12月6日」、メーカー公式履歴は「12月上旬/2010年12月発売」。矛盾として平均せず定義を分離。DB時系列主値はホール導入予定12/06。
- 後年整理資料の設定6 BIG/REG/合算に1/245・1/349・1/144等の丸め差あり。当時解析系P-WORLD/パチマガスロマガ一致の1/244・1/348・1/143を主値として保持。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior exact: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior exact: UNVERIFIED_AFTER_RESEARCH
- resetDetection/gakkun exact: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. パイオニア公式「スペシャルハナハナII-30 発売のお知らせ」
   - https://www.slot-pioneer.co.jp/information/sphana2.html
   - confidence: OFFICIAL
2. パイオニア公式更新履歴 — 2010-09-21「ハナハナシリーズ最新作！12月上旬登場!!」
   - https://www.slot-pioneer.co.jp/news.html
   - confidence: OFFICIAL
3. グリーンべると 2010-11-11「『ハナハナ』シリーズ最新作をパイオニアが発表」 — 1000円約38G、設定6 111%、納品12/05開始予定。
   - https://web-greenbelt.jp/00002891/
   - confidence: INDUSTRY
4. Pマンズ（プレイグラフ転載）2010-10-19 / 2010-11-09 — ホール導入予定12/06、MAX111%、約38G/1000円。
   - https://p-mans.blogspot.com/2010/10/
   - https://p-mans.blogspot.com/2010/11/
   - confidence: INDUSTRY_SECONDARY_ARCHIVE
5. P-WORLD「スペシャルハナハナII-30」 — 5号機ノーマル/完全告知/沖スロ、BIG/REG/合算、機械割、約38G、獲得枚数。
   - https://www.p-world.co.jp/machine/database/6140
   - confidence: ANALYSIS_HIGH
6. パチマガスロマガ「スペシャルハナハナⅡ-30」 — 設定別BIG/REG/合算、機械割。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/97/h.php
   - confidence: ANALYSIS_HIGH
7. K-Navi「機械割&期待収支」 — 設定別機械割96/98/101/104/107/111%。
   - https://p-kn.com/slot/1302/28304/
   - confidence: ANALYSIS_HIGH

## researchNotes

- 「スペシャルハナハナII-30 / スペシャルハナハナⅡ-30 / スペハナ2 / パイオニア」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / 50枚 / 1000円 / 型式 / 検定」を組み替え、メーカー公式、当時業界記事、P-WORLD、パチマガスロマガ、K-Navi、後年DBを横断。
- 本機はノーマル機で、天井・ART/AT・長期ゲーム数モード・有利区間は該当なし。リセット固有のガックン等は十分な再探索後も本機固有資料を確定できなかったため、その部分のみUNVERIFIED_AFTER_RESEARCH。
- 小役確率・BIG中設定推測用スイカ等は実機完全再現寄りでミッションv0.7の必須外のため収集しない。
