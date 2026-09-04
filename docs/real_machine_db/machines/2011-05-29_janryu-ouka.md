# 雀龍桜花

machineName: 雀龍桜花
manufacturer: KPEeleaseDate: 2011-05-29
releaseDateStatus: DELIVERY_START_EXACT_DATE

generation: 5号機
systemType: A+ART / CZ / 天井ART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 571件目「ドラゴノーツ －ザ・レゾナンス－」（2011-05-22納品開始予定）から継続。
- 最新handoffで5/23〜5/28の未登録機監査を指定。今回、当時業界記事・メーカーアーカイブ・機種DBを再確認し、具体日を確認できた次の未登録機として本機を追加。
- グリーンべると当時記事は「納品は5月29日から開始予定」、KONAMI公式アーカイブは「稼働開始 2011年5月」。日付定義は矛盾せず、時系列キーに2011-05-29を採用。

## payoutRateBySetting

- 設定1: **96.9%**
- 設定2: **98.7%**
- 設定3: **101.0%**
- 設定4: **103.9%**
- 設定5: **107.2%**
- 設定6: **110.5%**

パチマガスロマガとpacnkで全設定値一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG合成
- 設定1: **1/368.2**
- 設定2: **1/362.1**
- 設定3: **1/348.6**
- 設定4: **1/334.4**
- 設定5: **1/316.6**
- 設定6: **1/297.9**

### REG
- 設定1: **1/840.2**
- 設定2: **1/771.0**
- 設定3: **1/728.2**
- 設定4: **1/682.7**
- 設定5: **1/630.2**
- 設定6: **1/574.9**

### ボーナス合成
- 設定1: **1/256.0**
- 設定2: **1/246.4**
- 設定3: **1/235.7**
- 設定4: **1/224.4**
- 設定5: **1/210.7**
- 設定6: **1/196.2**

### ボーナス+ART合成
- 設定1: **1/169.4**
- 設定2: **1/154.4**
- 設定3: **1/154.6**
- 設定4: **1/136.1**
- 設定5: **1/131.4**
- 設定6: **1/119.9**

ART単独初当たりの設定別全表は今回直接確定できず、合算値から逆算していない。
confidence: ANALYSIS_HIGH_CROSSCHECKED_FOR_BONUS_AND_COMBINED / UNVERIFIED_FOR_ART_STANDALONE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「雀龍桜花 / じゃんりゅうおうか / KPE」と「50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数」を組み替え、公式アーカイブ、P-WORLD、パチマガスロマガ、旧解析DB、回顧資料を横断したが、比較可能な直接値を今回確定できず。

## netIncrease

- ART「DRAGON RUSH」: **約+1.2枚/G**
- 初回ARTゲーム数: **40G〜最大500G**
- 対局勝利時のゲーム数獲得/上乗せ: **40G〜最大480G**（当時業界記事）

KONAMI公式アーカイブはART機であることを確認し、グリーンべると/P-WORLD/パチマガで約+1.2枚/Gが一致。
confidence: OFFICIAL_TYPE / INDUSTRY_HIGH_CROSSCHECKED_FOR_NET_INCREASE

## basicPayout

- BIG: **最大216枚**
- REG: **約72枚**

P-WORLDとパチマガスロマガで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時のCZ「チッチチャレンジ」は10G。8枚役入賞回数に応じてART期待度が上昇し、4回入賞でART確定。
- ボーナス後などにCZ「爆牌チャレンジ」へ移行し、規定ゲーム数中の押し順8枚役取りこぼし回避がART突入契機。
- 通常天井: **ボーナス間1480G**で天井状態。次回対局演出勝利が確定しARTゲーム数を獲得。
- P-WORLDでは、天井到達からART突入までの潜伏中、特定レア役で約50%のゲーム数上乗せ抽選があると説明。

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_COUNTER_RETAIN_CONFIRMED / OTHER_BEHAVIOR_PARTIAL**。旧解析資料と現行整理DBの双方で「設定変更後も天井ゲーム数を引き継ぐ」「天井到達までのゲーム数はクリアされない」と一致。設定変更が1480G天井カウンタをゼロにしないことを直接確認。

carryOverBehavior: **CEILING_COUNTER_RETAIN_CONFIRMED / OTHER_STATE_UNVERIFIED**。設定変更でも天井カウンタを保持するため、少なくとも据え置きで前日天井進捗が消える根拠はないが、CZ状態・ART関連状態等の厳密な据え置き処理は本機固有資料で確定できず、一般論では補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の天井カウンタ・CZ・潜伏・ART関連状態の処理を直接確定できず。

gameCounterReset: **RETAIN_ON_SETTING_CHANGE_CONFIRMED**。ボーナス間1480G天井カウンタは設定変更でクリアされない。

ceilingAfterReset: **NO_SHORTENING_CONFIRMED / BASE_CEILING_1480G_RETAINED**。設定変更専用短縮天井は確認できず、むしろ既存1480G進捗を保持する資料が複数一致。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。朝一専用モード、設定変更時のモード再抽選/振り分けを直接確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確/前兆/CZ等の内部状態を設定変更時に再抽選または引継ぐかを直接確認できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **CEILING_PROGRESS_PRESERVED_ON_SETTING_CHANGE**。設定変更でも天井進捗が保持されるため、前日深ハマリ台では朝一の天井接近度が失われない点が客側の主要な朝一要素。専用高確・短縮天井などの追加恩恵はNONE_CONFIRMED_AFTER_RESEARCH。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。少なくとも天井進捗消失は確認されず、設定変更固有の主要不利数値も今回確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、データ表示等による本機固有の変更/据え置き判別を直接確定できず。

numericResetData:
- 通常天井: **ボーナス間1480G**
- 設定変更時天井カウンタ: **引継ぎ / クリアされない**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_HIGH_CROSSCHECKED_FOR_CEILING_COUNTER_RETAIN / UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH_FOR_POWER_CYCLE_MODE_STATE_DETECTION**

## conflicts

- 今回採用した主要性能値に明確な数値CONFLICTなし。
- ART単独初当たりは「ボーナス+ART合成」から逆算せず未確認扱い。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- standalone ART initial hit by setting: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

欠損判定前に「雀龍桜花 / じゃんりゅうおうか / KPE / 型式・シリーズ表記」と「機械割 / BIG / REG / ART初当たり / 50枚 / 1000円 / ベース / コイン持ち / 天井 / 設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / モード / 状態 / ガックン」を組み替え、KONAMI公式アーカイブ、グリーンべると/P-WORLD、P-WORLD機種DB、パチマガスロマガ、旧解析サイト、後年DBを横断。設定変更時の1480G天井カウンタ保持は複数資料一致で確定し、それ以外のreset項目は推測せず欠損扱いとした。

## sources — 取得日 2026-09-04

1. KONAMI AMUSEMENT 機種アーカイブ「2011年 雀龍桜花」
   - https://www.konami.com/amusement/psm/archive/ps/2011/jyanryu_ouka/
   - 稼働開始2011年5月、5号機ART
   - confidence: OFFICIAL
2. グリーンべると/P-WORLD「KPE、麻雀パチスロ『雀龍桜花』を発表」
   - https://news.p-world.co.jp/articles/4587/greenbelt
   - 2011-05-29納品開始予定、ART約+1.2枚/G、初回40〜500G、上乗せ10/40〜480G系説明
   - confidence: INDUSTRY
3. P-WORLD「雀龍桜花」
   - https://www.p-world.co.jp/machine/database/6333
   - BIG216枚、REG72枚、ART約+1.2枚/G、ボーナス間1480G天井
   - confidence: INDUSTRY_DATABASE
4. パチマガスロマガ「雀龍桜花 ボーナス抽選確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/25/h-1.php
   - BIG/REG/ボーナス合算/ボーナス+ART合算/PAYOUT全設定
   - confidence: ANALYSIS_HIGH
5. パチマガスロマガ「雀龍桜花 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/25/a.php
   - ART約+1.2枚/G、BIG最大216枚、REG約72枚、CZ構造
   - confidence: ANALYSIS_HIGH
6. crankyseven「雀龍桜花」
   - https://crankyseven.com/sp/janryuouka-pc.htm
   - ボーナス間1480G天井、設定変更時に天井到達までのゲーム数はクリアされない
   - confidence: ANALYSIS_SINGLE_LEGACY
7. pacnk「雀龍桜花 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_janryuouka.html
   - 機械割/BIG/REG全設定、1480G天井、設定変更後も天井ゲーム数を引き継ぐ
   - confidence: SECONDARY_DATABASE_CROSSCHECK

## status

- recordNumber: **572**
- chronologicalFrontier: **2011-05-29**
- relayStatus: **READY_TO_CONTINUE**
