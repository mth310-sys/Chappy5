# シスタークエスト2～魔剣の騎士と白銀の巫女～

machineName: シスタークエスト2～魔剣の騎士と白銀の巫女～
manufacturer: SNKプレイモア
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: シスタークエスト2 / シスクエ2 / シスタークエスト2～魔剣の騎士と白銀の巫女～
generation: 5号機
releaseDate: 2011-01-11
releaseDateStatus: HIGH_CONFIDENCE
releaseDateNote: K-Naviがホール導入開始2011-01-11を直接記載。当時プレイグラフは2011年1月中旬予定、後年回顧も同月ハーレムエース2と同日導入として整合。
systemType: ノーマルAタイプ / 天井RT
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFFを再取得して前線を監査。
- repo code searchで本機名の既存レコードが無いことを確認。
- K-Naviが2011-01-11を直接記載しており、chronologicalFrontier以前の取りこぼしとしてBACKFILL。
- 既存frontierは巻き戻さず、本線件数へ加算する。

## payoutRateBySetting

P-WORLD:
- 設定1: **96.7%**
- 設定2: **98.3%**
- 設定3: **100.2%**
- 設定4: **104.5%**
- 設定5: **108.4%**
- 設定6: **112.2%**

confidence: INDUSTRY_DATABASE_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/268.6**
- 設定2: **1/268.6**
- 設定3: **1/262.1**
- 設定4: **1/253.0**
- 設定5: **1/238.3**
- 設定6: **1/228.3**

### REG
- 設定1: **1/455.1**
- 設定2: **1/420.1**
- 設定3: **1/390.1**
- 設定4: **1/346.8**
- 設定5: **1/316.6**
- 設定6: **1/291.3**

### ボーナス合算
- 設定1: **1/168.9**
- 設定2: **1/163.8**
- 設定3: **1/156.8**
- 設定4: **1/146.3**
- 設定5: **1/136.0**
- 設定6: **1/128.0**

K-Naviは丸め差でBIG 1/268.5等、REG 1/346.7等を掲載。P-WORLDと実質整合するため主系列はP-WORLD、丸め差を注記。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- K-Naviに「1000円あたりのゲーム数」専用解析項目が存在することは確認したが、現存取得本文を回収できず。機種名＋1000円/50枚/ベース/コイン持ちを再探索しても安全な直接値を確定できなかったため推測しない。

confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- 天井RT: **現状維持型**
- 一部後年整理資料に約+0.5枚/G表記があるが、P-WORLD/K-Naviの直接表現は現状維持。定義差の可能性があるため主値は「現状維持型」とし、+0.5枚/Gを単一確定値には採用しない。

confidence: INDUSTRY_DATABASE_HIGH / NUMERIC_CONFLICT_PARTIAL

## basicPayout

- BIG: **約312枚**（345枚を超える払い出しで終了）
- REG: **約104枚**（105枚を超える払い出しで終了）

P-WORLD・K-Navi一致。
confidence: HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 基本はボーナスのみで増やすノーマルタイプ。
- BIG後 **999G** 消化で天井RT。
- REG後 **777G** 消化で天井RT。
- 天井RTは**次回ボーナス成立まで継続**。
- AT/ART、CZ、通常/天国などの長期ゲーム数モードは非搭載/確認なし。

confidence: HIGH_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_COUNTER_RETAIN_CONFIRMED**。P-WORLDが「設定変更しても天井までの消化ゲーム数はリセットされない」と直接明記。前日大ハマリ台は宵越し天井RT狙いが可能と説明している。

carryOverBehavior: **CEILING_COUNTER_RETAIN_CONFIRMED**。設定変更を跨いでもBIG後999G/REG後777G天井までの消化G数が保持される。少なくとも天井G数進捗は据え置き・設定変更の双方で持越し対象として扱える。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の天井進捗、天井RT状態、液晶ストーリー等の処理を本機固有の直接資料で確定できず。設定変更時RETAINから類推しない。

gameCounterReset: **RETAIN**。
- BIG後天井: 999G
- REG後天井: 777G
- 設定変更時: 消化G数をリセットしない

ceilingAfterReset: **SAME_AS_PREVIOUS_PROGRESS / NO_RESET_SHORTENING_CONFIRMED**。設定変更専用の短縮天井ではなく前日の天井進捗を継承。

modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。AT/ART用通常/天国等のモードなし。

stateAfterReset: **UNVERIFIED_FOR_ACTIVE_CEILING_RT**。天井RT突入中に設定変更した場合のRT状態そのものの継続/終了は直接資料不足。通常時の天井カウンタ保持とは分離して未確認。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **CEILING_CARRYOVER_CAN_ENABLE_MORNING_CEILING_TARGETING**。前日ハマリG数を引き継ぐため、朝一から宵越し天井を狙える点が実用上の恩恵。ただしリセット固有の優遇ではなく「設定変更しても消えない」性質。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。設定変更/据え置き判別用のガックン、初期出目、液晶表示等は本機固有の直接根拠を確定できず。

numericResetData:
- bigCeiling: **999G**
- regCeiling: **777G**
- settingChangeCeilingCounter: **RETAIN**
- resetDedicatedShortCeiling: **NONE_CONFIRMED**
- resetModeDistribution: **NOT_APPLICABLE**
- resetStateDistribution: **UNVERIFIED**
- powerCycleCounter: **UNVERIFIED**
- resetDetectionNumeric: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **RESEARCHED_COUNTER_RETAIN_DIRECTLY_CONFIRMED_OTHER_LOW_LEVEL_BEHAVIOR_PARTIAL**

## conflicts

- 天井RTの純増はP-WORLD/K-Naviが「現状維持型」、一部後年整理が約+0.5枚/G。平均せず、現存一次に近い業界DB表現を主値、数値はCONFLICT_PARTIAL。
- BIG/REG確率の小数末尾はK-NaviとP-WORLDで0.1程度の丸め差。性能判断に影響しないため平均せずP-WORLD値を主系列として併記。

## missingFields

- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior exact: **UNVERIFIED_AFTER_RESEARCH**
- active ceiling-RT behavior after setting change: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. K-Navi — シスタークエスト2～魔剣の騎士と白銀の巫女～
   - https://p-kn.com/slot/1321/
   - ホール導入開始2011-01-11、BIG/REG/合算、BIG後999G・REG後777Gの天井RT、専用「設定変更後の挙動」解析項目の存在を確認。
   - confidence: ANALYSIS_HIGH

2. P-WORLD — シスタークエスト2～魔剣の騎士と白銀の巫女～
   - https://www.p-world.co.jp/machine/database/6169
   - 機械割96.7〜112.2%、ボーナス確率、BIG約312枚/REG約104枚、天井条件、**設定変更しても天井までの消化G数がリセットされない**ことを直接確認。
   - confidence: INDUSTRY_DATABASE_HIGH

3. Pマンズ / プレイグラフ転載 — SNKが「シスタークエスト2」を発表
   - https://p-mans.blogspot.com/2010/11/
   - 2010-11-16記事。Aタイプ＋天井RT、合算1/168〜1/128、市場導入2011年1月中旬予定を確認。
   - confidence: CONTEMPORARY_INDUSTRY_SECONDARY

4. パチ7 5号機回顧
   - https://pachiseven.jp/articles/detail/5164
   - ハーレムエース2とシスタークエスト2を2011年1月の同日導入機として回顧。K-Navi直接日付の補助照合。
   - confidence: RETROSPECTIVE_SECONDARY

5. 中一商事 中古実機情報
   - https://www.nakaiti.com/html/sSNK078.html
   - P-WORLD同様、設定変更しても天井消化G数がリセットされず宵越し可能との仕様をクロスチェック。
   - confidence: SECONDARY_CROSSCHECK
