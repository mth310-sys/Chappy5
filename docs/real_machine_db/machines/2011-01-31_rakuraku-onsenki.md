# 楽々温泉記

machineName: 楽々温泉記
manufacturer: アイウィル
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: 楽々温泉記 / らくらく温泉記
generation: 5号機
releaseDate: 2011-01-31
releaseDateStatus: HIGH_CONFIDENCE
releaseDateNote: 2010-12-21当時のPマンズ/プレイグラフ転載記事が「ホール導入予定は2011年1月31日から」と明記。P-WORLD、パチマガスロマガで機種同定と性能を照合。後年5号機クロニクルは2011年2月の月粒度なので、日付主値は当時資料を採用。
systemType: ノーマルAタイプ / ボーナス主体 / 完全目押し不要
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFFを再取得。開始時正本は recordCount 543 / chronologicalFrontier 2011-01-24。
- LATEST_HANDOFFで1/24同日群・遡及漏れ監査後の既知次節点として2011-01-31を指定。
- `残機尽きるまで私は戦うS` は当時グリーンべるとで2011-03-06納品開始予定と確認し、1月候補から除外。
- `楽々温泉記` は当時資料で2011-01-31導入予定が確定し、repo候補パス未登録を直接確認。544件目として追加。
- 本機追加により chronologicalFrontier を **2011-01-31** へ更新。

## payoutRateBySetting

P-WORLD / パチマガスロマガ / pacnk一致:
- 設定1: **96.2%**
- 設定2: **98.8%**
- 設定3: **101.2%**
- 設定4: **105.3%**
- 設定5: **108.4%**
- 設定6: **110.6%**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: **1/221.4**
- 設定2: **1/208.1**
- 設定3: **1/195.6**
- 設定4: **1/179.1**
- 設定5: **1/167.6**
- 設定6: **1/160.2**

### REG
- 設定1: **1/442.8**
- 設定2: **1/412.2**
- 設定3: **1/392.4**
- 設定4: **1/354.2**
- 設定5: **1/331.0**
- 設定6: **1/319.7**

### ボーナス合算
- 設定1: **1/147.6**
- 設定2: **1/138.3**
- 設定3: **1/130.5**
- 設定4: **1/118.9**
- 設定5: **1/111.3**
- 設定6: **1/106.7**

P-WORLD、パチマガスロマガ、pacnkで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- パチマガスロマガ保存ページは「1000円あたりのゲーム数 現在調査中」。機種名/アイウィル/1000円/50枚/ベース/コイン持ちで再探索したが、比較可能な直接値を確定できず。

confidence: UNVERIFIED

## netIncrease

- **NOT_APPLICABLE**
- P-WORLDはRT/ARTを搭載しない純粋なノーマルタイプと明記。

confidence: INDUSTRY_DATABASE_PLUS_ANALYSIS

## basicPayout

- BIG: **221枚**（240枚を超える払い出しで終了）
- REG: **104枚**（105枚を超える払い出しで終了）

P-WORLD直接値を主値とする。
confidence: INDUSTRY_DATABASE

## modeSpecificMinimumData

- RT/ARTを搭載しない**純粋なノーマルタイプ**。
- 1列12コマのデカ図柄、通常時・ボーナス入賞とも完全目押し不要。
- ボーナス後はリプレイ確率が上昇する仕様説明があるが、出玉を増やす継続RT/ARTとしては扱わない。
- 天井機能は**非搭載**（pacnk）。
- 通常/天国等のゲーム数モード、CZ、AT/ARTは確認されない。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **NO_MATERIAL_GAMEPLAY_RESET_EFFECT_CONFIRMED_AFTER_RESEARCH**。本機はボーナス主体ノーマル、天井非搭載、AT/ART/CZ・長期ゲーム数モードなし。設定変更時にホール経営/朝一狙いへ影響する専用短縮天井、高確移行、モード優遇等は確認できなかった。リール初期出目等の低レベル挙動は未確認。

carryOverBehavior: **NO_MATERIAL_CARRYOVER_TARGET_CONFIRMED**。天井G数、AT/ART/CZ、長期モード等の持越し対象は確認されない。ボーナス成立状態など遊技機一般の低レベル内部処理は本DB対象外かつ未確認。

powerCycleBehavior: **NO_MATERIAL_GAMEPLAY_EFFECT_CONFIRMED / LOW_LEVEL_UNVERIFIED**。単純電源OFF→ONで朝一狙いに影響する天井・モード・状態恩恵は確認されない。初期出目/表示等の低レベル挙動は未確認。

gameCounterReset: **NOT_APPLICABLE_NO_CEILING**。通常ゲーム数天井非搭載。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。

modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。通常/天国等の長期ゲーム数モードなし。

stateAfterReset: **NO_MATERIAL_INTERNAL_STATE_CONFIRMED**。朝一客行動へ影響する高確/低確等の状態システムは確認されない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶表示等による設定変更/据え置き判別を、機種名＋設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索したが本機固有情報を確定できず。

numericResetData:
- normalCeiling: **NOT_APPLICABLE**
- resetDedicatedShortCeiling: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE**
- resetStateDistribution: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE**
- resetDetectionNumeric: **NONE_CONFIRMED**

resetBehaviorQA: **RESEARCHED_NO_MATERIAL_RESET_FEATURE_CONFIRMED_LOW_LEVEL_DETECTION_UNVERIFIED**

## conflicts

- 後年5号機クロニクルは本機を「Aタイプ(RT機能付き)」「BIG約312枚」と記載するが、P-WORLDは「RTやARTなどの付加機能を搭載しないノーマルタイプ」「BIG221枚」、パチマガスロマガも本機のボーナス確率/機械割系列がP-WORLDと一致する。後年回顧資料側に別仕様混入/記述誤りの疑いが強いため、**RT搭載・BIG312枚はCONFLICTとして不採用**。
- 導入時期は当時資料2011-01-31に対し後年5号機クロニクル2011年2月。日付粒度と月粒度の差として、当時資料の2011-01-31を主値にする。

## missingFields

- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- low-level setting-change/power-cycle reel-display behavior: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. Pマンズ / プレイグラフ転載「アイウィルが『楽々温泉記』発売」
   - https://p-mans.blogspot.com/2010/
   - 2010-12-21記事、アイウィル第2弾、完全告知Aタイプ、設定1合算1/147.6、ホール導入予定2011-01-31を確認。
   - confidence: INDUSTRY_SECONDARY_CONTEMPORARY

2. P-WORLD — 楽々温泉記
   - https://www.p-world.co.jp/machine/database/6216
   - アイウィル、5号機ノーマル、RT/ART非搭載、BIG/REG確率、合算、機械割、BIG221枚/REG104枚を確認。
   - confidence: INDUSTRY_DATABASE

3. パチマガスロマガ — ボーナス抽選確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/02/h.php
   - BIG/REG/合算、機械割96.2〜110.6%を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

4. パチマガスロマガ — 小役/1000円G数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/02/c.php
   - 1000円G数が「現在調査中」であることを確認。欠損を推測補完しない根拠。
   - confidence: ANALYSIS_HIGH_ARCHIVE

5. pacnk — 楽々温泉記 設定判別ツール
   - https://pacnk.com/slot/tools/sh_rakurakuonsen.html
   - BIG/REG/PAYOUTをクロスチェック、天井非搭載を確認。
   - confidence: ANALYSIS_SINGLE_CROSSCHECKED

6. 5号機クロニクル — アイウィル
   - https://5goki.com/iwill
   - 2011年2月月粒度、RT搭載/BIG約312枚の記載を確認。ただしP-WORLD直接仕様と競合するため主値不採用。
   - confidence: CONFLICT_SECONDARY
