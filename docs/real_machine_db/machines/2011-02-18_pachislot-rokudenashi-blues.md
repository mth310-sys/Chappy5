# パチスロろくでなしBLUES

machineName: パチスロろくでなしBLUES
manufacturer: Sammy / サミー
formalModelName: ろくでなしBLUES-F
inspectionNumber: 0S0999
aliases: ろくでなしBLUES / パチスロ ろくでなしBLUES / ろくブル
generation: 5号機
releaseDate: 2011-02-18
releaseDateStatus: EXACT_DATE_CONFIRMED
releaseDateNote: HAZUSEで導入開始日2011-02-18、型式名・検定番号を確認。
systemType: ノーマルAタイプ / ボーナス主体 / 天井RT搭載
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、551レコードを再取得して開始。
- 2011-02-07以降を導入日検索し、2/21群（真・三國無双、戦国BASARA2、シオサイマックス-30）より前の具体日として本機2011-02-18を確認。
- mainのコード検索と想定パス直取得の双方で未登録を確認してから追加。

## payoutRateBySetting

HAZUSE / 旧解析資料一致:
- 設定1: **97.5%**
- 設定2: **99.0%**
- 設定3: **101.3%**
- 設定4: **106.0%**
- 設定5: **110.2%**
- 設定6: **116.1%**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: **1/268.6**
- 設定2: **1/265.3**
- 設定3: **1/259.0**
- 設定4: **1/240.9**
- 設定5: **1/225.2**
- 設定6: **1/199.8**

### MIDDLE
- 設定1: **1/339.6**
- 設定2: **1/331.0**
- 設定3: **1/322.8**
- 設定4: **1/300.6**
- 設定5: **1/287.4**
- 設定6: **1/287.4**

### ボーナス合算
- 設定1: **1/150.0**
- 設定2: **1/147.3**
- 設定3: **1/143.7**
- 設定4: **1/133.7**
- 設定5: **1/126.3**
- 設定6: **1/117.9**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- 設定1〜6: **約33.6〜36.7G/50枚**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## netIncrease

- ART/AT純増: **NOT_APPLICABLE**
- 天井RTは次回ボーナス成立まで継続する救済RT。

## basicPayout

- BIG: **約311枚**
- MIDDLE: **約91枚**
- 規定払い出し: BIG 344枚超 / MIDDLE 90枚超で終了

confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ノーマルAタイプで通常時の長期モード管理は確認されない。
- 天井: **BIG後674G / MIDDLE後555G消化で、次回ボーナス成立まで継続するRTへ移行**。
- 技術介入: BIG中に14枚役を1回取得することで最大獲得枚数を狙う方式。

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_PROGRESS_RETAIN_CONFIRMED**。旧解析資料で「設定変更時も天井到達までのゲーム数はクリアされない」「ステージ変更などもない」と明記。

carryOverBehavior: **CEILING_PROGRESS_RETAIN**。設定変更でも天井進捗が保持されるため、据え置き時も少なくとも天井進捗は保持される運用上の持越し対象として扱う。低レベル内部状態の追加差分は確認されない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの挙動を本機固有資料で直接確定できず、設定変更時の保持情報から自動推定しない。

gameCounterReset: **RETAIN**。BIG後674G / MIDDLE後555Gの天井進捗は設定変更でもクリアされない。

ceilingAfterReset: **UNCHANGED**。設定変更専用の短縮天井・延長天井は確認されず、通常天井条件を引き継ぐ。

modeAfterReset: **NOT_APPLICABLE_AS_LONG_TERM_MODE**。朝一専用モード・モード振り分けは確認されない。

stateAfterReset: **NO_MATERIAL_STATE_CHANGE_CONFIRMED**。設定変更時にステージ変更などなし。朝一客AIに影響する高確/低確等の状態再抽選は確認されない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **宵越し天井狙いが成立**。設定変更でも天井進捗を保持するため、前日ハマリを翌日に持ち越せる。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **設定変更によるステージ変更なし**。ガックン、初期出目、表示等の別判別要素は表記揺れ・型式名・朝一/設定変更/据え置き/ガックン等で再探索したが直接確定できず **UNVERIFIED_AFTER_RESEARCH**。

numericResetData:
- normalCeilingAfterBIG: **674G**
- normalCeilingAfterMIDDLE: **555G**
- gameCounterOnSettingChange: **RETAIN**
- resetDedicatedShortCeiling: **NONE_CONFIRMED**
- resetModeDistribution: **NONE_CONFIRMED**
- resetStateDistribution: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_HIGH_CONFIDENCE_FOR_CEILING_RETAIN**

## conflicts

- HAZUSE基本スペックのボーナス合成表に設定6「1/287.4」と読める表示崩れがあるが、同ページのBIG/MIDDLE値、K-Navi、旧解析資料は**1/117.8〜1/117.9**で一致。表示崩れを主値へ採用しない。
- BIG設定1はK-Navi 1/268.5、HAZUSE/旧解析1/268.6の丸め差。定義差ではなく表示精度差として保持。

## missingFields

- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection（ガックン/初期出目等）: **UNVERIFIED_AFTER_RESEARCH**
- 据え置きと設定変更で差が出る低レベル内部挙動: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. HAZUSE — パチスロろくでなしBLUES 基本スペック
   - https://hazuse.com/machine/pachislot/0S0999/genre/201/
   - 導入開始日2011-02-18、型式「ろくでなしBLUES-F」、検定番号0S0999、設定別ボーナス、50枚ベース、機械割、払い出し条件を確認。
   - confidence: ANALYSIS_HIGH

2. K-Navi — パチスロろくでなしBLUES
   - https://p-kn.com/slot/1379/
   - BIG/MID/合算、ノーマルAタイプ、天井・設定変更項目の存在を確認。
   - confidence: ANALYSIS_HIGH

3. Seven Peace旧解析保存ページ — ろくでなしBLUES
   - https://www.mb.ccnw.ne.jp/seven-peace.com/rokudenasi/rokudenasi_brues.html
   - 1000円33.6〜36.7G、BIG約311枚/MIDDLE約91枚、BIG後674G/MIDDLE後555G天井RT、設定変更でも天井進捗をクリアしない・ステージ変更なしを確認。
   - confidence: ANALYSIS_SINGLE_ARCHIVED

4. パチマガスロマガ公式アーカイブ — パチスロろくでなしBLUES
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/127/sammy_slot_127.php
   - 本機専用の天井・朝イチ/設定変更解析項目が存在することを確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE
