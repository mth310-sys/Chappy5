# 超重神グラヴィオン

machineName: 超重神グラヴィオン
manufacturer: ロデオ
formalModelName: 超重神グラヴィオンXA
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: 超重神グラヴィオン / グラヴィオン / 超重神グラヴィオンXA
generation: 5号機
releaseDate: 2011-01-24
releaseDateStatus: HIGH_CONFIDENCE
systemType: A+ART / ボーナス+セットストック式ART / 天井あり
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前進捗を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 541 / chronologicalFrontier 2011-01-24。
- 前handoffで最優先候補として指定されていた本機をrepo検索し、未登録を確認。
- DMMぱちタウン、パチンコビレッジ導入日カレンダー、必勝本、スロット履歴系の複数系統が2011-01-24で一致。2010-12の業界記事は「2011年1月以降納品開始予定」で整合する。
- 542件目として追加。chronologicalFrontierは2011-01-24のまま同日群を継続する。

## payoutRateBySetting

P-WORLD / pacnk / 5号機クロニクル一致系列:
- 設定1: **96.8%**
- 設定2: **98.6%**
- 設定3: **101.6%**
- 設定4: **105.0%**
- 設定5: **109.0%**
- 設定6: **113.1%**

当時個人解析資料では設定3～5に100.6 / 104.3 / 108.2%の別系列があるため、主系列へ平均統合せずCONFLICT候補として保持。
confidence: ANALYSIS_HIGH_CROSSCHECK

## initialHitBySetting

### ボーナス合算
- 設定1: **1/128.0**
- 設定2: **1/121.6**
- 設定3: **1/124.6**
- 設定4: **1/118.5**
- 設定5: **1/121.4**
- 設定6: **1/115.6**

### ART
- 設定別「ART初当たり確率」の比較可能な直接表は、表記揺れ・型式・メーカー名・「ART初当たり/突入率/当選率」等で再探索したが今回確定できず。
- 当時資料にART突入率（ボーナス契機に対する割合）約52.4%～72.7%の掲載はあるが、初当たり確率とは定義が異なるため `initialHitBySetting` に転記しない。

confidence: ANALYSIS_HIGH for bonus combined / UNVERIFIED_AFTER_RESEARCH for ART initial probability

## baseGamesPer50

パチマガスロマガ保存ページ掲載値（1000円あたり）:
- 設定1: **29.75G**
- 設定2: **29.95G**
- 設定3: **29.84G**
- 設定4: **30.04G**
- 設定5: **29.94G**
- 設定6: **30.14G**

当時個人解析の「約29G/千円」とレンジ整合。
confidence: ANALYSIS_HIGH_RANGE_CROSSCHECK

## netIncrease

- ART「アルティメットデュエル」: **約+1.5枚/G**
- セットストック式。継続ゲーム数は固定ではなく、パンクリプレイ回避ナビストックがある限り継続する非固定型。

confidence: ANALYSIS_HIGH

## basicPayout

- グラヴィオンボーナス（赤7）: **約203枚 + ART**
- メイドボーナス: **約105枚**
- REG: **約35枚**

P-WORLDとパチマガスロマガ保存ページで一致。
confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時500G消化後は、**次回ボーナス当選でART突入確定**。この際ARTストック3個。
- ART非当選ボーナスの連続回数にも天井あり。
  - 9回連続非当選後、10～12回目はART当選率50%・当選時ストック5個
  - 12回連続非当選後、13～15回目はART当選率50%・当選時赤or虹ストック5個
  - 15回連続非当選後、16回目以降はART当選率50%・当選時虹ストック5個
- ART終了後もゲーム数天井500GとART非当選ボーナス回数を引き継ぐとする解析資料あり。
- ARTはボーナス経由で突入する構造。

confidence: ANALYSIS_SINGLE_ARCHIVE for detailed ceiling ladder / ANALYSIS_HIGH for basic ART structure

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガ保存インデックスに本機専用「朝イチ・設定変更」解析項目が存在することは確認できたが、今回の取得経路では具体本文を安全に回収できず。機種名/型式名/メーカー名＋「設定変更/リセット/朝一/天井/500G/ART非当選/宵越し」等で検索語を変え、P-WORLD・当時解析・古いDB・回顧資料まで再探索したが、設定変更時のカウンタCLEAR/RETAINを直接確定できる本文は得られなかった。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。通常のART終了時に500G天井と非当選回数を引き継ぐ資料はあるが、日跨ぎ据え置き時に同値を保持するかは別論点のため自動推定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの本機固有処理を直接確認できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の500Gゲーム数天井進捗とART非当選回数天井のCLEAR/RETAINは直接根拠不足。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の短縮天井・変更天井は `NONE_CONFIRMED_AFTER_RESEARCH` だが、通常天井進捗が0から再計測か保持かは未確定。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本DBでいう長期ゲーム数モードの設定変更時再抽選値は確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/高確等の変更時処理について本機固有の直接資料を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits:
- 設定変更専用の短縮天井、高確スタート、ART優遇などは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常仕様として500G天井およびART非当選回数天井は存在するが、リセット恩恵とは区別する。

resetPenalties:
- 設定変更固有の客側不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井進捗消去の有無自体が未確定なので、不利と断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶表示、ゲーム数挙動等による本機固有の変更判別材料を直接確認できず。

numericResetData:
- normalGameCeiling: **通常時500G消化後、次回ボーナスでART確定 / ストック3個**
- artMissCountCeilingStage1: **ART非当選9連続 -> 10～12回目ART当選率50% / 当選時ストック5個**
- artMissCountCeilingStage2: **12連続 -> 13～15回目50% / 赤or虹ストック5個**
- artMissCountCeilingStage3: **15連続 -> 16回目以降50% / 虹ストック5個**
- resetGameCounter: **UNVERIFIED_AFTER_RESEARCH**
- resetMissCount: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleCounter: **UNVERIFIED_AFTER_RESEARCH**
- resetDetectionNumeric: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **RESEARCHED_BUT_CONCRETE_SETTING_CHANGE_BODY_UNAVAILABLE**

## conflicts

- 機械割はP-WORLD/pacnk/5号機クロニクルが 96.8 / 98.6 / 101.6 / 105.0 / 109.0 / 113.1% で一致。
- 2011-01-09の当時個人解析資料は 96.8 / 98.6 / 100.6 / 104.3 / 108.2 / 113.1% と設定3～5が異なる。平均せず `CONFLICT_SECONDARY_SERIES` として保持し、複数一致の前者を主系列とした。

## missingFields

- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- ART初当たり確率: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior具体値: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. DMMぱちタウン — 超重神グラヴィオン
   - https://p-town.dmm.com/
   - 検索結果本文で導入開始日2011-01-24、メーカー・機種概要を確認。
   - confidence: ANALYSIS_HIGH

2. パチンコビレッジ — 2011年導入日カレンダー
   - https://www.pachinkovillage.com/introduction/index.php?Y=2011&action=archive
   - 2011-01-24同日群に超重神グラヴィオンを確認。
   - confidence: INDUSTRY_CALENDAR

3. パチスロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/1735/1/27714
   - 2011-01-24導入、基本スペック項目を確認。
   - confidence: ANALYSIS_HIGH

4. P-WORLD — 超重神グラヴィオン
   - https://www.p-world.co.jp/machine/database/6209
   - 機械割、ボーナス合算、基本獲得枚数、ART純増約1.5枚/G、ART構造を確認。
   - confidence: ANALYSIS_HIGH

5. パチマガスロマガ保存ページ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/56/a.php
   - ART純増約1.5枚/G、ボーナス獲得約203/105/35枚、ストック構造を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

6. パチマガスロマガ保存ページ — 通常時小役/1000円あたりG数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/56/c.php
   - 設定別29.75～30.14G/1000円を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

7. パチマガスロマガ保存インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/56/rodeo_slot_56.php
   - 本機に「天井」「朝イチ・設定変更」専用解析項目が存在することを確認。ただし今回具体本文は取得不能。
   - confidence: ANALYSIS_HIGH_ARCHIVE_INDEX

8. pacnk — 超重神グラヴィオン設定判別/天井
   - https://pacnk.com/slot/tools/sh_gravion.html
   - 機械割・ボーナス合算を照合。500G天井、ART非当選回数天井、ART終了後の通常天井/スルー回数引継ぎを確認。
   - confidence: ANALYSIS_SINGLE

9. 5号機クロニクル — ロデオ全機種一覧
   - https://5goki.com/rodeo
   - 2011年1月導入、機械割系列を照合。
   - confidence: SECONDARY_CROSSCHECK

10. P-Mans / グリーンべると転載 — 2010-12発表記事
   - https://p-mans.blogspot.com/2010/
   - ロデオ発表、ART約+1.5枚/G、3種ボーナス、2011年1月以降納品開始予定を確認。
   - confidence: INDUSTRY_ARCHIVE

11. 当時個人解析（2011-01-09）
   - https://slotwinner777.blog84.fc2.com/blog-entry-57.html
   - 約29G/千円、ART突入率、別機械割系列を補助確認。機械割差はCONFLICT保持。
   - confidence: SECONDARY_SINGLE

12. 福岡県遊技業協同組合系資料 / 型式一覧検索結果
   - https://www.fukuoka-yukyo.jp/
   - 「超重神グラヴィオンXA」の型式表記を確認。
   - confidence: INDUSTRY_SECONDARY
