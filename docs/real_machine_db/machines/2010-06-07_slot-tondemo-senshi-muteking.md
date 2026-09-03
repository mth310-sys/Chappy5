# SLOTとんでも戦士ムテキング

machineName: SLOTとんでも戦士ムテキング
manufacturer: ミズホ / ユニバーサルエンターテインメント
formalModelName: とんでも戦士ムテキングT
approvalNumber: 9S1050
releaseDate: 2010-06-07
releaseDateStatus: CONFIRMED_HALL_INTRODUCTION_WITH_MONTH_CONFLICT
releaseDateNote: K-Navi・パチビーはホール導入開始2010-06-07で一致。ユニバーサル公式は2010年6月発売。一方P-WORLD・5号機クロニクルは2010年5月導入表記のため、月差はCONFLICTとして保持し、ホール導入主値は具体日を持つ2010-06-07を採用。
generation: 5号機
systemType: A+ART / ボーナス+セットストック式ART / CZ・AT経由あり
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前489「マジックライアン」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 489 / chronologicalFrontier 2010-06-07。
- LATEST_HANDOFFの2010-06-07同日群未処理候補「とんでも戦士ムテキング」をrepo未登録確認後に追加。
- chronologicalFrontierは2010-06-07を維持する。

## payoutRateBySetting

- 設定1: **97.4%**
- 設定2: **99.3%**
- 設定3: **100.7%**
- 設定4: **104.5%**
- 設定5: **110.7%**
- 設定6: **117.0%**

P-WORLD、パチビー、5号機クロニクルで一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス合算
- 全設定: **1/256**

### ムテキンボーナス
- 設定1: **1/4096**
- 設定2: **1/4096**
- 設定3: **1/4096**
- 設定4: **1/3640.9**
- 設定5: **1/3276.8**
- 設定6: **1/2978.9**

### とんでもボーナス
- 設定1: **1/409.6**
- 設定2: **1/409.6**
- 設定3: **1/409.6**
- 設定4: **1/414.8**
- 設定5: **1/420.1**
- 設定6: **1/425.6**

### クロダコボーナス
- 全設定: **1/819.2**

### ART初当たり
- 設定1: **1/272**
- 設定2: **1/262**
- 設定3: **1/263**
- 設定4: **1/241**
- 設定5: **1/215**
- 設定6: **1/193**

P-WORLD掲載値を主値とし、ボーナス合算1/256と機械割はパチビーでも照合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_COMBINED / ANALYSIS_SINGLE_FOR_DETAILED_BONUS_AND_ART

## baseGamesPer50

- 設定1: **28.05G/1000円**
- 設定2: **28.05G/1000円**
- 設定3: **28.05G/1000円**
- 設定4: **28.10G/1000円**
- 設定5: **28.15G/1000円**
- 設定6: **28.20G/1000円**

パチマガスロマガ専用解析ページから直接取得。
confidence: ANALYSIS_HIGH

## netIncrease

- ART「ムテキンラッシュ」: **約+1.5枚/G**

P-WORLD・パチビーで一致。5号機クロニクルは約+1.2枚/Gとしており、同一名称周辺の要約差があるため **CONFLICT_NET_INCREASE_1.5_VS_1.2** として保持。現存当時系機種DB2系統で一致する約+1.5枚/Gを主値とするが、1.2枚/G記載は削除しない。
confidence: CONFLICT

## basicPayout

- ムテキンボーナス: **約204枚**（297枚超払い出しで終了）
- とんでもボーナス: **約204枚**（297枚超払い出しで終了）
- クロダコボーナス: **約48枚**（63枚超払い出しで終了）

P-WORLD・パチビー・5号機クロニクルで整合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は低確・高確の2状態を確認。
- 偶数図柄ボーナス後は20GのAT「クロダコチャンス」、奇数図柄ボーナス後はART突入確定ゾーン「ムテキンタイム」。
- ART「ムテキンラッシュ」はセットストック式。1回の抽選で最大5セット、ストック上限最大32個。
- P-WORLD/パチビーでは1セットG数はショート・ロング・無限（次回ボーナスまで）で固定ではない。
- 通常ゲーム数による直接ART発動型の天井ではなく、**ボーナス間1200G消化後のボーナス当選時にナビポイントストック率が超高確率**となる救済仕様を確認。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式名/メーカー名と「設定変更・リセット・朝一・据え置き・宵越し・1200G・高確・ストック・ナビポイント・ガックン」を組み替え、公式、P-WORLD、パチビー、K-Navi、パチマガスロマガ、旧機種DBを横断。パチマガスロマガには本機専用「攻め時・ヤメ時・設定変更時」項目の存在までは確認できるが、検索取得可能本文から設定変更時の1200G進捗・内部状態・ARTストック処理を直接確定できなかったため推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。ボーナス間1200Gという救済条件は確認できるが、据え置き時に前日ボーナス間ゲーム数をそのまま宵越しできるかを明記した本機固有の高信頼資料を今回確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のボーナス間ゲーム数、高低状態、ART/ナビポイントストックの扱いを明記する直接資料未確認。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時の救済条件はボーナス間1200G。設定変更時にこの内部ゲーム数が0へ戻るか、引き継ぐかは直接根拠未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の1200G短縮・変更数値は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時低確/高確の存在は確認したが、設定変更時の状態振り分け・朝一専用モードは直接根拠未確定。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確状態、クロダコチャンス/ムテキンタイム、ARTストック/ナビポイントに関する設定変更時処理は直接根拠未確定。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみの短縮天井、高確スタート、ART/CZ優遇、朝一当選率等の直接根拠は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「ガックン / 初期出目 / リール / 液晶 / 朝一ステージ / 設定変更判別」まで検索語を広げたが、本機固有の高信頼な変更判別要素を確定できず。

numericResetData:
- normalRescueCondition: **ボーナス間1200G消化後のボーナス当選時、ナビポイントストック率が超高確率**
- resetCounterHandling: **UNVERIFIED_AFTER_RESEARCH**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: RESCUE_1200G_CONFIRMED_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_MODE_STATE_DETECTION_UNVERIFIED

## conflicts

1. releaseDate: K-Navi/パチビー=2010-06-07、ユニバーサル公式=2010年6月発売、P-WORLD/5号機クロニクル=2010年5月。ホール導入主値は具体日を持つ2010-06-07、月差はCONFLICT保持。
2. ART純増: P-WORLD/パチビー=約+1.5枚/G、5号機クロニクル=約+1.2枚/G。平均化しない。
3. ART基本構造: P-WORLD/パチビーはセットG数ショート/ロング/無限で固定ではない。5号機クロニクルは「1セット50G」と要約しており定義差/後年要約差の可能性があるためCONFLICT保持。実機完全再現用の細かなセット振り分けは収集対象外。

## missingFields

- settingChangeBehaviorDetailed: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterResetAtSettingChange: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. ユニバーサルエンターテインメント公式「SLOTとんでも戦士ムテキング」 — https://www.universal-777.com/product/slot/muteking/ — ミズホ、5号機、ボーナス+ART、2010年6月発売 — reliability: OFFICIAL
2. パチビー「とんでも戦士ムテキング」 — https://www.pachibee.jp/machines/index/210040011 — 2010-06-07導入、ART約+1.5枚/G、機械割、ボーナス獲得、1200G救済条件 — reliability: INDUSTRY_MACHINE_DB
3. K-Navi「とんでも戦士ムテキング」 — https://p-kn.com/slot/1206/ — ホール導入開始2010-06-07、基本スペック/解析項目 — reliability: ANALYSIS_HIGH
4. P-WORLD「SLOTとんでも戦士ムテキング」 — https://www.p-world.co.jp/machine/database/5951 — 型式とんでも戦士ムテキングT、検定9S1050、設定別機械割/ART初当たり/ボーナス確率、約+1.5枚/G、204/48枚、1200G救済条件、通常低確/高確 — reliability: INDUSTRY_MACHINE_DB
5. パチマガスロマガ「とんでも戦士ムテキング」トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/33/mizuho_slot_33.php — 専用解析項目一覧、「攻め時・ヤメ時・設定変更時」項目の存在 — reliability: ANALYSIS_HIGH
6. パチマガスロマガ「小役確率・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/33/c.php — 設定1〜6の1000円あたり28.05〜28.20G — reliability: ANALYSIS_HIGH
7. 5号機クロニクル ユニバーサル系全機種一覧 — https://5goki.com/universal — 機械割97.4〜117.0%、2010年5月、A+ART、BIG約204/REG約48、純増約1.2枚/G・1セット50G記載 — reliability: RETROSPECTIVE
8. スロぱちニュース系回顧「タイアップされたパチンコ・パチスロ機一覧（た行）」 — https://sulocale.sulopachinews.com/archives/23602 — 当時グリーンべると記事への参照、2010-04-20記者発表会情報 — reliability: RETROSPECTIVE_WITH_INDUSTRY_REFERENCE
