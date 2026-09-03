# パチスロ「ケロット」～スウィートver.～

machineName: パチスロ「ケロット」～スウィートver.～
manufacturer: 山佐
releaseDate: 2010-09-06
releaseDateStatus: EXACT_DAY_MULTI_SOURCE_CONFIRMED
releaseDateNote: パチビーが導入日2010-09-06を明記。山佐公式は稼働時期2010年9月として整合。
generation: 5号機
systemType: ノーマルAタイプ / プチRT
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線513「リングにかけろ1 ～黄金の日本Jr.編～」を再取得して開始。
- 2010-09-27前線の漏れ監査で、2010-09-06導入の本機が未登録であることを確認。
- 同じ監査で「マイジャグラー」はrepo検索では見えなかったが実ファイルを直接確認すると既登録だったため重複追加せず、本機を遡及追加する。
- 遡及追加のためchronologicalFrontierは2010-09-27を維持する。

## payoutRateBySetting

- 設定1: **98.5%**
- 設定2: **98.5%**
- 設定3: **99.5%**
- 設定4: **99.5%**
- 設定5: **102.5%**
- 設定6: **105.0%**

K-Navi、パチビー、後年解析で一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/166.3**
- 設定2: **1/188.3**
- 設定3: **1/160.6**
- 設定4: **1/181.0**
- 設定5: **1/145.6**
- 設定6: **1/148.9**

### REG
- 設定1: **1/250.1**
- 設定2: **1/212.7**
- 設定3: **1/264.2**
- 設定4: **1/222.9**
- 設定5: **1/318.1**
- 設定6: **1/303.4**

### ボーナス合算
- 全設定: **約1/99.9**

山佐公式が全設定共通1/99.9を明記。設定別BIG/REGはパチビー、P-WORLD、K-Navi系で整合。
confidence: OFFICIAL_AND_ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ公式アーカイブ値:
- 設定1: **35.63G/1000円**
- 設定2: **38.73G/1000円**
- 設定3: **35.92G/1000円**
- 設定4: **38.91G/1000円**
- 設定5: **35.87G/1000円**
- 設定6: **39.19G/1000円**

奇数/偶数でベル確率が大きく異なる設計と同ページの小役確率が整合し、設定別の大きなベース差をそのまま保持する。別系統の同精度直接値は今回回収できなかったため単一高信頼解析値扱い。
confidence: HISTORICAL_ANALYSIS_HIGH_SINGLE

## netIncrease

通常ART/ATの純増: **NOT_APPLICABLE**。

補助仕様として、平行/斜めオレンジ入賞後に**3GのプチRT**へ移行する。

## basicPayout

- SWEET BONUS: **約200枚**（250枚払い出しで終了）
- REGULAR BONUS: **約40枚**（50枚払い出しで終了）

パチビーとパチマガスロマガで一致。P-WORLD本文の一部にREG約48枚表記もあるが、同ページ役構成は約40枚であり、パチビー/パチマガスロマガも40枚なので、48枚記述は本文内不整合としてCONFLICT注記する。
confidence: MULTI_SOURCE_HIGH_WITH_SINGLE_TEXT_CONFLICT

## modeSpecificMinimumData

- 山佐公式: 前作ケロットをベースにしたノーマルAタイプで、全設定ボーナス合算約1/99.9。
- パチマガスロマガ: オレンジ入賞後は**3GプチRT**。
- ART/AT/CZやゲーム数解除は非搭載。
- ゲーム数天井は確認されず、通常の天井狙い対象ではない。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名・表記揺れ・山佐・設定変更・リセット・朝一・据え置き・ガックン等で横断したが、本機固有の設定変更時挙動を直接記した高信頼本文を回収できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH / CEILING_NOT_APPLICABLE**。天井ゲーム数の宵越し概念は非該当。プチRTやボーナス成立状態を含む電断/据え置き処理は本機固有の直接資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONと設定変更の差を本機固有資料で確定できず。

gameCounterReset: **NOT_APPLICABLE_FOR_GAME_COUNT_CEILING**。ゲーム数天井・規定G数解除は確認なし。

ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。設定変更専用の短縮天井も非該当。

modeAfterReset: **NOT_APPLICABLE_NO_AT_ART_MODE_SYSTEM_CONFIRMED**。AT/ARTの朝一専用モード等は持たない。

stateAfterReset: **PARTIAL_NOT_APPLICABLE_FOR_AT_ART_CZ / PETIT_RT_POWER_RESET_UNVERIFIED**。高確/CZ/ART状態は非該当。3GプチRTの設定変更・電断時処理は今回直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一高確、天井短縮、CZ優遇等の公開恩恵は確認できない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等は非該当。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。本機固有のガックン、初期出目、液晶状態等による設定変更/据え置き判別の直接根拠を回収できず。

numericResetData:
- gameCountCeiling: **NOT_APPLICABLE**
- resetDedicatedCeiling: **NOT_APPLICABLE**
- advantageousSection: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE_NO_AT_ART_MODE**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCyclePetitRtBehavior: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: NORMAL_MACHINE_RESET_EFFECTS_MOSTLY_NOT_APPLICABLE / MACHINE_SPECIFIC_POWER_AND_DETECTION_UNVERIFIED

## conflicts

- REG獲得枚数: パチビー、パチマガスロマガ、P-WORLD役構成は**約40枚**。P-WORLD台紹介本文のみ**約48枚**と記載しておりページ内でも矛盾。多数一致の40枚を主値とし、48枚はCONFLICTとして保持。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior固有挙動: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior固有挙動: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior固有挙動: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. 山佐ネクスト公式「パチスロ ケロット～スウィートver.～」 — 5号機/Aタイプ、2010年9月稼働、全設定合算1/99.9
   - https://yamasa-next.co.jp/model_klts/
   - confidence: OFFICIAL_HIGH
2. パチビー機種情報 — 導入日2010-09-06、設定別BIG/REG、機械割、200枚/40枚
   - https://www.pachibee.jp/machines/index/210070010
   - confidence: CONTEMPORARY_DATABASE_HIGH
3. K-Navi「機械割&期待収支」 — 設定別98.5〜105.0%
   - https://p-kn.com/slot/1279/26646/
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
4. パチマガスロマガ公式アーカイブ — 基本システム、3GプチRT、200枚/40枚、設定別1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/174/a.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/174/c.php
   - confidence: HISTORICAL_ANALYSIS_HIGH
5. P-WORLD機種DB — ノーマルタイプ、設定別BIG/REG、役構成200/40枚。台紹介本文のREG約48枚はCONFLICT確認用
   - https://www.p-world.co.jp/machine/database/6065
   - confidence: DATABASE_MEDIUM_HIGH
