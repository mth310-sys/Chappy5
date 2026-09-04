# メーメーパラダイス

machineName: メーメーパラダイス
manufacturer: ラスター / ウィンネットテクノロジー発表
formalModelName: ザコクチシリーズ
inspectionNumber: 0S0846
releaseDate: 2011-04-24
releaseDateStatus: DELIVERY_START_EXACT_DATE

generation: 5号機
systemType: ノーマル / 完全告知 / BIG+REG
coreStatus: COMPLETE_CORE_EXCEPT_BASE_RESET_LOW_LEVEL_PARTIAL

## chronologyNote

- 最新mainの567件目「パチスロ装甲騎兵ボトムズ」を正本として引継ぎ。
- 2011-04-18同日群と4/19〜23境界を再監査し、今回確認できた次の未登録具体日候補として本機を採用。
- グリーンべると2011-04-11記事が「納品は4月24日開始予定」と明記。P-WORLD現行機種DBは導入開始日を空欄としているため、時系列キーは業界一次系記事の具体的納品開始予定日2011-04-24を採用。

## payoutRateBySetting

- 設定1: **96.32%**
- 設定2: **97.78%**
- 設定3: **100.42%**
- 設定4: **103.04%**
- 設定5: **105.48%**
- 設定6: **110.21%**

P-WORLD機種DB。
confidence: INDUSTRY_DATABASE_SINGLE

## initialHitBySetting

### BIG
- 設定1: **1/287.44**
- 設定2: **1/282.48**
- 設定3: **1/282.48**
- 設定4: **1/273.07**
- 設定5: **1/273.07**
- 設定6: **1/249.19**

### REG
- 設定1: **1/455.11**
- 設定2: **1/442.81**
- 設定3: **1/348.60**
- 設定4: **1/321.25**
- 設定5: **1/268.59**
- 設定6: **1/249.19**

### ボーナス合算
- 設定1: **1/176.17**
- 設定2: **1/172.46**
- 設定3: **1/156.04**
- 設定4: **1/147.60**
- 設定5: **1/135.40**
- 設定6: **1/124.59**

BIG/REGはグリーンべると記事の設定1・6端値とP-WORLDが整合。中間設定はP-WORLD。
confidence: INDUSTRY_HIGH_FOR_ENDPOINTS / INDUSTRY_DATABASE_SINGLE_FOR_FULL_TABLE

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「メーメーパラダイス / メーメー パラダイス / ザコクチシリーズ / ラスター / ウィンネットテクノロジー」と「50枚 / 1000円 / 1k / ベース / コイン持ち / 回転数」を組み替えて再探索したが、比較可能な直接値を確定できず。小役確率から逆算しない。

## netIncrease

**NOT_APPLICABLE** — ボーナス主体ノーマル機でART/AT/RTによる純増比較対象なし。

## basicPayout

- BIG: **約312枚**
- REG: **約104枚**

グリーンべると、P-WORLDで一致。
confidence: INDUSTRY_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 完全告知タイプ。
- 「ME～ME～!ランプ」点灯でボーナス確定。
- BIG成立時の**12.5%**で30種類超のプレミア告知音が選択されるとグリーンべるとが報道。
- ボーナスのみで出玉を構成するノーマルタイプ。天井・ART/AT/CZ・通常時長期モードは確認されない。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_LOW_LEVEL_BEHAVIOR**。ノーマル完全告知機で、設定変更専用の天井短縮・朝一モード・状態優遇等は確認されない。リール初期位置等の低レベル挙動は本機固有資料を確定できず。

carryOverBehavior: **NOT_APPLICABLE_FOR_CEILING_MODE / LOW_LEVEL_STATE_UNVERIFIED**。天井・ART/AT/CZ・長期内部モードが確認されないため、朝一客AI向けの持越し対象は実質なし。ボーナス成立状態等の特殊状況は収集対象外。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_LOW_LEVEL_BEHAVIOR**。単純電源OFF→ON時のリール初期位置・告知状態等の本機固有情報は確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。ゲーム数天井・周期抽選は確認されない。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。

modeAfterReset: **NOT_APPLICABLE_NO_LONG_TERM_MODE_CONFIRMED**。朝一専用モードや通常時モードテーブルは確認されない。

stateAfterReset: **NOT_APPLICABLE_FOR_HALL_AI_RELEVANT_STATE / LOW_LEVEL_UNVERIFIED**。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。短縮天井、朝一高確、朝一専用当選率等の公開恩恵は確認されない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗やモード持越しを失う構造自体が確認されない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、告知ランプ等による本機固有の設定変更/据え置き判別は、検索語・資料系統を変えても十分な直接根拠を確定できず。

numericResetData:
- 設定変更専用短縮天井: **NOT_APPLICABLE**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **INDUSTRY_HIGH_FOR_NON_ART_NON_CEILING_STRUCTURE / UNVERIFIED_FOR_LOW_LEVEL_POWER_CYCLE_AND_DETECTION**

## conflicts

- 現時点で主要性能値の数値CONFLICTは確認なし。
- 導入日についてP-WORLDは空欄、グリーンべるとは2011-04-24納品開始予定。日付定義競合ではなく、具体日が得られる業界記事を時系列キーに採用。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- low-level settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

欠損判定前に「メーメーパラダイス / メーメー パラダイス / ザコクチシリーズ / ラスター / ウィンネットテクノロジー / 0S0846」と「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / ガックン / 天井 / 50枚 / 1000円 / ベース / コイン持ち」を組み替え、P-WORLD、グリーンべると/P-WORLD業界ニュース、後年5号機一覧・回顧系DBを横断。一般的なノーマル機挙動から低レベル項目を補完していない。

## sources — 取得日 2026-09-04

1. グリーンべると「シンプルな完全告知『メーメーパラダイス』登場」
   - https://web-greenbelt.jp/00002007/
   - 2011-04-11、納品2011-04-24開始予定、BIG/REG設定1・6、BIG312枚、REG104枚、BIG時プレミア告知音12.5%
   - confidence: INDUSTRY
2. P-WORLD 業界ニュース転載
   - https://news.p-world.co.jp/articles/4590/greenbelt
   - 上記記事の独立現存経路として照合
   - confidence: INDUSTRY_REPRINT
3. P-WORLD「メーメーパラダイス」
   - https://www.p-world.co.jp/machine/database/6336
   - 5号機ノーマル/完全告知、型式ザコクチシリーズ、検定番号0S0846、設定別BIG/REG/合算、機械割、BIG312枚/REG104枚
   - confidence: INDUSTRY_DATABASE

## status

- recordNumber: **568**
- chronologicalFrontier: **2011-04-24**
- relayStatus: **READY_TO_CONTINUE**
