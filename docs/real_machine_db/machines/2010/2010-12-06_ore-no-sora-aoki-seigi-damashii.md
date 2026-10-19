# 俺の空～蒼き正義魂～

machineName: 俺の空～蒼き正義魂～
manufacturer: ロデオ
releaseDate: 2010-12-06
releaseDateStatus: HALL_INTRODUCTION_DATE_WITH_CONFLICT
releaseDateNote: K-Naviとパチ＆スロ必勝本が2010-12-06導入で一致。HAZUSEは2010-12-03を導入開始日としており、平均化せずCONFLICT保持。P-WORLDは2010年11月表記のため月単位資料として補助扱い。
generation: 5号機
systemType: A+ART / セットストック+ゲーム数上乗せART
formalModelName: 俺の空 蒼き正義魂
inspectionNumber: 0S0855
aliases: 俺の空 蒼き正義魂 / 俺空2
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_VERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前529「アントニオ猪木が元気にするパチスロ機」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 529 / chronologicalFrontier 2010-11-29。
- 2010-11-29同日群と11/30～12/05境界を導入カレンダー・当時資料・メーカー年次一覧等で再監査し、本機より前に割り込む強い未登録ホール導入日を確定できず。
- repo内機種名検索で既存レコードなしを確認し530件目として追加。

## payoutRateBySetting

- 設定1: **97.1%**
- 設定2: **98.8%**
- 設定3: **100.5%**
- 設定4: **104.0%**
- 設定5: **108.5%**
- 設定6: **113.5%**

P-WORLDで設定別系列を直接確認。K-Navi/必勝本も同機のスペック解析系統として照合に使用。
confidence: ANALYSIS_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/397.2**
- 設定2: **1/390.1**
- 設定3: **1/383.3**
- 設定4: **1/376.6**
- 設定5: **1/370.3**
- 設定6: **1/358.1**

### REG
- 設定1: **1/704.7**
- 設定2: **1/682.7**
- 設定3: **1/662.0**
- 設定4: **1/642.5**
- 設定5: **1/595.8**
- 設定6: **1/560.1**

### ボーナス合算
- 設定1: **1/254.0**
- 設定2: **1/248.2**
- 設定3: **1/242.7**
- 設定4: **1/237.4**
- 設定5: **1/228.3**
- 設定6: **1/218.5**

ART単独初当たりの全設定表は、K-Naviに専用項目の存在を確認したが本文数値を今回の取得経路で直接回収できず、別資料でも比較可能な全設定表を確定できなかったため未記入。
confidence: HIGH_FOR_BONUS / UNVERIFIED_AFTER_RESEARCH_FOR_ART_INITIAL

## baseGamesPer50

- **約32.0G / 1000円**
- Cranky Sevenの本機解析で直接値を確認。
- P-WORLD/K-Navi/パチマガスロマガ/必勝本等では今回比較可能な同値を直接回収できなかったため単一解析資料値として保持。
confidence: ANALYSIS_SINGLE

## netIncrease

- ART「俺チャンス」: **約+1.3枚/G**
- 基本1セット: **25G / 50G / 100G**
- 初回ARTは50G以上保証。
- セットストック＋ゲーム数上乗せ方式。

P-WORLD、K-Navi、HAZUSE、Cranky Sevenで主要仕様を照合。
confidence: HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約265枚**
- REG: **最大72枚**

P-WORLD、Cranky Sevenで一致。K-NaviはBIG 360枚超払い出し終了、REG 8Gまたは8回入賞終了を確認。
confidence: HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- CZ「俺タイム」: **15G**。リプレイ4連続または合計7回成立、CZ中ボーナス等でART契機。
- 「スーパー俺タイム」: **3G**。小役成立がART契機となる高期待CZ。
- 通常時は低確 / 高確 / 超高確の内部状態を持つ。
- 第1天井: **ボーナス後501～600Gの間にメット25回以上成立 → 50%で俺タイム**。
- 第2天井: **ボーナス後801～900Gの間にメット25回以上成立 → 俺タイム確定**。
- 第3天井: **ボーナス間1200G → ART確定**、前兆経由。
confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **VERIFIED**。設定変更で天井到達までのゲーム数をクリアし、内部状態を再振り分けする。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない据え置き時に天井進捗・状態・ART関連をどこまで保持するかを本機固有の高信頼本文で直接確認できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの天井・状態・ART関連処理を本機固有資料で直接確定できず。

gameCounterReset: **RESET_ON_SETTING_CHANGE**。設定変更で第1～第3天井へ向かうゲーム数進捗はクリア。

ceilingAfterReset: **STANDARD_TIERS_FROM_RESET / NO_DEDICATED_SHORTER_RESET_CEILING_CONFIRMED**。設定変更専用の短縮天井は確認されず、通常の501～600G / 801～900G / 1200G条件を新たに数える。

modeAfterReset: **RESELECT_INTERNAL_STATE**。設定変更後は低確66.7%、残りが高確以上。高確/超高確内訳は設定差あり。

stateAfterReset: **VERIFIED_NUMERIC**。
- 低確: 全設定 **66.7%**
- 高確: 設定1～3 **32.3%** / 設定4～6 **29.3%**
- 超高確: 設定1～3 **1.0%** / 設定4～6 **4.0%**

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **VERIFIED**。設定変更時に約1/3で高確以上スタート。設定1～3は高確以上33.3%、設定4～6も33.3%（29.3%+4.0%）。

resetPenalties: **VERIFIED**。設定変更で前日までの天井ゲーム数進捗が消失する。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。機種名・型式・ロデオと「ガックン / リールガックン / 初期出目 / 朝一 / 設定変更判別」を組み替えて再探索したが、本機固有の確定的判別手段を十分な資料から直接確認できず。

numericResetData:
- settingChangeCeilingProgress: **RESET**
- resetLowState: **66.7% all settings**
- resetHighState: **32.3% (settings 1-3) / 29.3% (settings 4-6)**
- resetSuperHighState: **1.0% (settings 1-3) / 4.0% (settings 4-6)**
- resetHighOrBetterTotal: **33.3% all settings**
- firstCeilingZone: **501-600G + 25 helmets => 50% CZ**
- secondCeilingZone: **801-900G + 25 helmets => CZ guaranteed**
- thirdCeiling: **1200G bonus-to-bonus => ART guaranteed**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- powerCycleCarryOver: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **VERIFIED_CORE_WITH_POWER_CYCLE_AND_DETECTION_GAPS**

## conflicts

- releaseDate: K-Navi・パチ＆スロ必勝本 **2010-12-06** vs HAZUSE **2010-12-03**。本DB主値は複数一致の12/06、HAZUSE値はCONFLICT保持。
- P-WORLD下部データは導入開始を「2010年11月」と月単位で記載。日付精度が粗いため主値にはしない。

## missingFields

- ART初当たり設定別全表: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. P-WORLD「俺の空～蒼き正義魂～」 — 設定別BIG/REG/合算/機械割、BIG約265枚、REG最大72枚、ART約+1.3枚/G、25/50/100G、型式・検定番号。
   - https://www.p-world.co.jp/machine/database/6131
   - confidence: ANALYSIS_HIGH
2. K-Navi「俺の空～蒼き正義魂～」 — ホール導入2010-12-06、基本システム、設定変更後挙動/モード移行専用解析項目の存在。
   - https://p-kn.com/slot/1310/
   - confidence: ANALYSIS_HIGH
3. パチ＆スロ必勝本「基本スペック」 — 2010-12-06導入、設定別ボーナス確率。
   - https://p.hisshobon.jp/machine/1695/1/27141
   - confidence: ANALYSIS_HIGH
4. HAZUSE「俺の空～蒼き正義魂～」 — 型式、検定番号0S0855、2010-12-03導入開始、ART約+1.3枚/G、25/50/100G。
   - https://hazuse.com/machine/pachislot/0S0855/
   - confidence: ANALYSIS_HIGH
5. Cranky Seven「俺の空～蒼き正義魂～」 — 1000円約32.0G、天井3段階、設定変更で天井G数クリア、設定変更後の状態振り分け。
   - https://crankyseven.com/orenosora-aokiseigi-pc.htm
   - confidence: ANALYSIS_SINGLE
6. パチマガスロマガ「俺の空～蒼き正義魂～」 — 天井、朝イチ・設定変更、状態/モード等の専用解析項目の存在確認。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/55/rodeo_slot_55.php
   - confidence: ANALYSIS_HIGH

## researchNotes

- 欠損項目は「俺の空～蒼き正義魂～ / 俺の空 蒼き正義魂 / 俺空2 / ロデオ / 0S0855」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 50枚 / 1000円 / ベース / ART初当たり」を組み替え、P-WORLD、K-Navi、HAZUSE、必勝本、パチマガスロマガ、古い解析サイト、回顧資料まで横断。
- 詳細な通常時モード移行表や小役別内部抽選は、ミッションv0.7の範囲外なので保存していない。
