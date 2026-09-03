# マイジャグラー

machineName: マイジャグラー
manufacturer: 北電子
releaseDate: 2010-09-06
releaseDateStatus: CONFIRMED_MULTI_SOURCE
releaseDateNote: K-Naviはホール導入開始2010-09-06、グリーンべるとは納品9月6日開始予定、PachiSevenの歴代機種整理も2010-09-06導入で一致。
generation: 5号機
systemType: ノーマルタイプ / 完全告知 / ボーナス主体
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_BASE_CONFLICT

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線505「デビルマンII ～悪魔復活～」を再取得。
- 開始時正本地点は recordCount 505 / chronologicalFrontier 2010-08-27。
- 2010-08-28〜29を再監査。8/30は505「デビルマンII ～悪魔復活～」のK-Navi/パチビー側導入日として既存レコードへ統合済みで、別の明確な未登録パチスロは今回の複数系統検索では確定できなかった。
- 次の明確な全国導入アンカー2010-09-06へ進み、repo未登録を確認した「マイジャグラー」を506件目として追加。
- 同日には「パチスロスパイダーマン3」も2010-09-06登場資料があるため、次回同日群監査対象としてhandoffへ残す。

## payoutRateBySetting

- 設定1: **95.7%**
- 設定2: **97.9%**
- 設定3: **99.9%**
- 設定4: **102.8%**
- 設定5: **105.3%**
- 設定6: **109.4%**

K-Navi、P-WORLD、PachiSevenで一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/287.4**
- 設定2: **1/282.5**
- 設定3: **1/273.1**
- 設定4: **1/264.3**
- 設定5: **1/252.1**
- 設定6: **1/240.9**

### REG
- 設定1: **1/431.2**
- 設定2: **1/364.1**
- 設定3: **1/341.3**
- 設定4: **1/292.6**
- 設定5: **1/277.7**
- 設定6: **1/240.9**

### ボーナス合算
- 設定1: **1/172.5**
- 設定2: **1/159.1**
- 設定3: **1/151.7**
- 設定4: **1/138.9**
- 設定5: **1/132.1**
- 設定6: **1/120.5**

K-Navi、P-WORLD、PachiSevenで一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

### source series A — K-Navi自社調べ
- 設定1: **34.51G**
- 設定2: **34.72G**
- 設定3: **34.94G**
- 設定4: **35.09G**
- 設定5: **35.31G**
- 設定6: **35.84G**

### source series B — 後年ジャグラー解析整理
- 設定1: **34.94G**
- 設定2: **35.20G**
- 設定3: **35.41G**
- 設定4: **35.57G**
- 設定5: **35.80G**
- 設定6: **36.36G**

両系列は差が継続しており単純な丸め差ではない。算出条件（小役取得条件等）が同一と確認できないため平均化せず `CONFLICT` として保持する。物差し集計時は定義を揃えてから採用する。
confidence: CONFLICT_ANALYSIS_MULTI_SOURCE

## netIncrease

- AT/ART/RTによる増加機能: **NOT_APPLICABLE**
- ボーナスのみで出玉を増やすノーマルタイプ。

confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

- BIG: **平均約312枚**
- REG: **平均約104枚**
- P-WORLD配当条件: BIGは345枚超払出で終了、REGは105枚超払出で終了。

2010年当時グリーンべるとがBB平均312枚 / RB平均104枚を明記。K-Navi/P-WORLDとも整合。
confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常ゲーム数天井: **なし / NOT_APPLICABLE**
- 周期CZ: **なし / NOT_APPLICABLE**
- AT/ART: **なし / NOT_APPLICABLE**
- ゲーム数解除モード: **なし / NOT_APPLICABLE**
- 完全告知でGOGO!ランプ点灯時ボーナス確定。
- 告知割合はボーナス成立時の**1/4が先告知、3/4が後告知**。

confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **NO_GAME_NUMBER_ADVANTAGE_CONFIRMED / OTHER_INTERNAL_DETAILS_UNVERIFIED**。本機はノーマルタイプで天井・CZ・ART・ゲーム数解除モードを持たず、設定変更による天井短縮や朝一モード恩恵の対象構造がない。設定変更時のボーナス抽選自体に専用優遇がある資料は確認できず。

carryOverBehavior: **NOT_APPLICABLE_FOR_CEILING_MODE / POWER_STATE_DETAILS_UNVERIFIED**。引き継ぐべき天井ゲーム数・AT/ARTストック・ゲーム数モードは存在しない。ボーナス後BGM条件など演出用カウンタの据え置き時挙動は本機固有一次資料では確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみでの初回リール始動、演出用内部カウンタ、GOGO!ランプ/出目等の復帰条件を初代固有の高信頼資料で確定できず。

gameCounterReset: **NOT_APPLICABLE**。通常時ゲーム数天井・周期天井なし。

ceilingAfterReset: **NOT_APPLICABLE**。設定変更専用短縮天井なし。

modeAfterReset: **NOT_APPLICABLE_AS_GAME_NUMBER_MODE**。ゲーム数解除モードなし。

stateAfterReset: **NOT_APPLICABLE_AS_AT_ART_INTERNAL_STATE / OTHER_HIDDEN_STATE_UNVERIFIED**。朝一客の狙い目になる高確/低確型AT・ART状態は存在しない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED**。朝一専用高確、短縮天井、CZ優遇、初当たり優遇等は確認されない。

resetPenalties: **NONE_CONFIRMED**。天井進捗消失等の不利構造は存在しない。

resetDetection: **GAKKUN_FAMILY_BEHAVIOR_SUPPORTED_BUT_INITIAL_MODEL_DIRECT_EVIDENCE_LIMITED**。後続マイジャグラーIII/IVおよびジャグラー系資料では、設定変更後の朝一1G目にリールがガックンすることがあり変更推測に使えるとされる。ただし初代マイジャグラー固有の当時一次/高信頼解析で同条件を直接確認できなかったため、「初代でも確定」とはせず補助情報として保持。店側の1G回しやリール位置調整で判別無効化/誤認があり、非ガックン＝据え置き確定ではない。

numericResetData:
- resetDedicatedCeiling: **NOT_APPLICABLE**
- resetDedicatedModeDistribution: **NOT_APPLICABLE**
- resetDedicatedInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunExactProbability: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: CORE_RESET_STRUCTURE_CONFIRMED_NON_APPLICABLE_FOR_CEILING_MODE / SPECIFIC_POWER_CYCLE_AND_INITIAL_MODEL_GAKKUN_DIRECT_EVIDENCE_UNVERIFIED

## conflicts

- baseGamesPer50: K-Navi自社調べ **34.51 / 34.72 / 34.94 / 35.09 / 35.31 / 35.84G** vs 後年ジャグラー解析整理 **34.94 / 35.20 / 35.41 / 35.57 / 35.80 / 36.36G**。定義差の可能性があるため平均化しない。

## missingFields

- initial-model-specific powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- initial-model-specific direct primary/high-confidence gakkun evidence: UNVERIFIED_AFTER_RESEARCH
- exact model/type code and inspection number: UNVERIFIED_AFTER_RESEARCH in this relay

## sources

取得日: 2026-09-04

1. グリーンべると / P-WORLD業界ニュース「北電子が最新機『マイジャグラー』を発表」 — https://news.p-world.co.jp/articles/4092/greenbelt — 2010-07-28、納品9/6予定、BB平均312枚、RB平均104枚、設定6合算1/120.5、告知仕様。
2. K-Navi「マイジャグラー」 — https://p-kn.com/slot/1270/ — ホール導入2010-09-06、BIG/REG/合算、機械割、ノーマル/完全告知。
3. K-Navi「1000円あたりのゲーム数」 — https://p-kn.com/slot/1270/26904/ — K-Navi自社調べの設定別34.51〜35.84G。
4. P-WORLD「Myジャグラー」 — https://www.p-world.co.jp/machine/database/6066 — BIG/REG/合算、機械割、配当条件、機種概要。
5. PachiSeven「ジャグラーシリーズ機種一覧」 — https://pachiseven.jp/articles/detail/9823 — 2010-09-06導入、設定別BIG/REG/合算/出玉率。
6. ジャグラー解析整理「マイジャグラー」 — https://juggler7.com/my/ — 1000円あたり34.94〜36.36G、小役解析。K-Navi系列との差はCONFLICT保持。
7. P-Summa「ジャグラーコイン持ち一覧」 — https://slothack.net/matome/17149/ — マイジャグラー系35.0〜36.4G/50枚の後年整理値。
8. パチマガスロマガFREE「名機 the ORIGIN/vol.248」 — https://pachimaga.com/free/special/602410f33b89225fa4c021fcfe7cef5a9f64acfe.php — 初代マイジャグラーが2010年9月登場、シリーズ起点、告知ランプ特徴。
9. juggler7「マイジャグラーIII」 — https://juggler7.com/my3/ — 後続同系機の朝一ガックン挙動。初代への直接転記はせず補助情報扱い。
10. juggler7「マイジャグラーIV」 — https://juggler7.com/my4/ — 後続同系機の朝一ガックン挙動。初代への直接転記はせず補助情報扱い。
