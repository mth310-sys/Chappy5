# パチスロ装甲騎兵ボトムズ

machineName: パチスロ装甲騎兵ボトムズ
manufacturer: サミー
formalModelName: 装甲騎兵ボトムズS
inspectionNumber: 0S1260
releaseDate: 2011-04-18
releaseDateStatus: CONFLICT_EXACT_DATE_PREFERRED
releaseDateConflict: K-Navi 2011-04-18 / P-WORLD database metadata 2011-03

generation: 5号機
systemType: ボーナス + ART / CZ / 内部状態 / 天井あり
coreStatus: COMPLETE_CORE_EXCEPT_BASE_AND_ART_ONLY_INITIAL_RESET_PARTIAL

## chronologyNote

- 最新mainの566件目「天下布武2」を正本として引継ぎ。
- 2011-04-15同日群および4/16〜17境界を監査し、直前handoffの次候補「パチスロ装甲騎兵ボトムズ」をrepo検索。未登録を確認。
- K-Naviはホール導入開始を2011-04-18と明記。
- P-WORLDの現行DBメタデータは「導入開始 2011年03月」とするため、日付は平均化せずCONFLICT保持。時系列キューは具体的ホール導入日の2011-04-18を採用。

## payoutRateBySetting

- 設定1: **97.1%**
- 設定2: **99.0%**
- 設定3: **101.5%**
- 設定4: **104.3%**
- 設定5: **108.4%**
- 設定6: **112.0%**

P-WORLD、pacnk、5号機クロニクルで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### ボーナス + ART初当り合算
- 設定1: **1/246.8**
- 設定2: **1/236.1**
- 設定3: **1/227.5**
- 設定4: **1/214.8**
- 設定5: **1/196.7**
- 設定6: **1/182.2**

K-Navi、P-WORLD、pacnkで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

### ART単独初当り

**UNVERIFIED_AFTER_RESEARCH**

K-Naviには本機専用「ART初当り確率」の解析項目が存在することを確認したが、今回取得経路では設定別の比較可能値本文を安全に回収できず。ボーナス+ART合算から逆算しない。

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「パチスロ装甲騎兵ボトムズ / 装甲騎兵ボトムズS / Sammy / 0S1260」と「50枚 / 1000円 / 1k / ベース / コイン持ち / 回転数」を組み替え、P-WORLD、K-Navi、パチマガスロマガ、pacnk、CrankySeven、5号機回顧資料を横断したが、比較可能な50枚ベースを直接確定できず。小役確率から逆算しない。

## netIncrease

- ART「バトリングタイム」: **約+1.8枚/G**

K-Navi、P-WORLD、パチマガスロマガで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- BATTLING BONUS: **約300枚**（450枚超払い出し終了）
- BATTLING CHANCE: **約200枚**（290枚超払い出し終了）

P-WORLDとパチマガスロマガで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ART「BATTLING TIME」: **初回50G+α**、ゲーム数上乗せ型。1回の上乗せは公開範囲で20〜300G。
- 通常時内部状態: **低 / 通常 / 天国 / 前兆**の4状態。前兆はART確定状態。
- 「AT-MODE」: **32G**のART超高確ゾーン。ベルミッション等からARTを抽選。
- ART終了後: 引き戻しゾーンへ移行。
- 天井: **ボーナスorART間1200G消化 → 前兆を経由してART当選**。P-WORLDとpacnkで整合。

## resetBehavior — v0.7

settingChangeBehavior: **INTERNAL_STATE_TRANSITION_ON_SETTING_CHANGE_CONFIRMED / GAME_COUNTER_AND_OTHER_INTERNAL_HANDLING_UNVERIFIED**。K-Naviに本機専用「状態移行率(設定変更後)」、パチマガスロマガに「朝イチ・設定変更」解析項目の存在を確認。設定変更が内部状態へ作用すること自体は確認できるが、今回取得経路では具体的振り分け値を回収できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の1200G天井進捗、内部状態、ARTゲーム数/潜伏等の保持範囲を本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の天井カウンタ・内部状態・ART関連の処理を直接確定できず、設定据え置き一般論から補完しない。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井がボーナスorART間1200Gであることは複数資料で確定したが、設定変更時の1200GカウンタCLEAR/RETAINを示す本機固有の直接本文を今回確定できず。

ceilingAfterReset: **NORMAL_CEILING_1200G_KNOWN / RESET_SHORTENING_UNVERIFIED_NONE_CONFIRMED**。通常天井1200Gは確認済み。設定変更専用の短縮天井は十分な再探索後も確認できない。

modeAfterReset: **STATE_RESELECTION_OR_TRANSITION_CONFIRMED_NUMERIC_DISTRIBUTION_UNVERIFIED**。K-Naviに「状態移行率(設定変更後)」解析項目が存在。低/通常/天国/前兆の具体的設定変更後振り分けは今回未回収。

stateAfterReset: **SETTING_CHANGE_STATE_TRANSITION_CONFIRMED_DETAILS_UNVERIFIED**。通常時4状態の存在と設定変更後状態移行解析の存在は確認。ART潜伏・AT-MODE・引き戻しゾーン等を含む詳細な変更時処理は推測しない。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_NUMERIC_CONFIRMED_AFTER_RESEARCH**。設定変更後に状態移行が行われることは確認できるが、朝一専用優遇率、短縮天井、○G以内当選率等の比較可能な公開数値は今回確定できず。

resetPenalties: **UNVERIFIED_AFTER_RESEARCH**。設定変更による天井進捗消失を直接確定できていないため、朝一不利として断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ等による本機固有の設定変更/据え置き判別は、検索語と資料系統を変えて再探索しても十分な直接根拠を確定できず。

numericResetData:
- 通常天井: **ボーナスorART間1200G → 前兆経由ART**
- 設定変更後内部状態: **移行率解析の存在を確認 / 数値UNVERIFIED_AFTER_RESEARCH**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一特定G以内当選率/恩恵率: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_HIGH_FOR_SETTING_CHANGE_STATE_TRANSITION_EXISTENCE / UNVERIFIED_FOR_COUNTER_CARRYOVER_POWER_CYCLE_NUMERIC_STATE_DISTRIBUTION_DETECTION**

## conflicts

1. **導入時期**
   - K-Navi: ホール導入開始 **2011-04-18**
   - P-WORLD DB metadata: 導入開始 **2011年03月**
   - 平均化せずCONFLICT保持。具体的ホール導入日の2011-04-18を時系列キーに採用。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- ART単独初当り設定別: **UNVERIFIED_AFTER_RESEARCH**
- setting-change 1200G counter clear/retain: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- numeric setting-change state distribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

欠損判定前に「パチスロ装甲騎兵ボトムズ / 装甲騎兵ボトムズS / ボトムズ / Sammy / サミー / 0S1260」と「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 1200G / 天井短縮 / モード / 状態 / 状態移行率 / 低確 / 通常 / 天国 / 前兆 / ガックン / 50枚 / 1000円 / ベース / コイン持ち / ART初当り」を組み替え、P-WORLD、K-Navi、パチマガスロマガ、pacnk、CrankySeven、5号機クロニクル、当時実戦/回顧資料まで横断。一般的な5号機挙動から未確認項目を補完していない。

## sources — 取得日 2026-09-04

1. K-Navi「パチスロ装甲騎兵ボトムズ」
   - https://p-kn.com/slot/1378/
   - ホール導入開始2011-04-18、ボーナス+ART合算、ART50G/約+1.8枚/G、内部状態、設定変更後状態移行率項目の存在
   - confidence: ANALYSIS_HIGH
2. P-WORLD「パチスロ装甲騎兵ボトムズ」
   - https://www.p-world.co.jp/machine/database/6272
   - 型式「装甲騎兵ボトムズS」、検定番号0S1260、機械割、ボーナス+ART合算、BB/BC獲得、ART仕様、1200G天井、内部4状態
   - confidence: INDUSTRY_DATABASE
3. パチマガスロマガ「パチスロ装甲騎兵ボトムズ」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/128/sammy_slot_128.php
   - 本機専用「天井」「朝イチ・設定変更」解析項目の存在
   - confidence: ANALYSIS_HIGH
4. パチマガスロマガ「基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/128/a.php
   - ART約+1.8枚/G、BB約300枚、BC約200枚
   - confidence: ANALYSIS_HIGH
5. pacnk「装甲騎兵ボトムズ 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_votoms.html
   - 設定別ボーナス+ART初当り、設定別PAYOUT、ボーナスorART間1200G天井
   - confidence: ANALYSIS_HIGH
6. Sammy Networks news release（2011-04-22）
   - https://www.sammy-net.jp/news/votoms0422.pdf
   - 2011年4月時点でのサミー新機種「パチスロ装甲騎兵ボトムズ」の公式系一次資料
   - confidence: OFFICIAL_GROUP
7. 5号機クロニクル「サミー」
   - https://5goki.com/sammy
   - 設定別機械割の照合
   - confidence: RETROSPECTIVE_DATABASE

## status

- recordNumber: **567**
- chronologicalFrontier: **2011-04-18**
- relayStatus: **READY_TO_CONTINUE**
