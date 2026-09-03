# 炎の熱血教師 ～清原、健介、北斗編～

machineName: 炎の熱血教師 ～清原、健介、北斗編～
manufacturer: ロデオ
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-12-07
generation: 5号機
systemType: A+ART / CZ / 天井CZ
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新main 433件地点から継続。
- 2009-11-24〜11-30を、具体日導入・納品・新台・メーカー/シリーズ名で再監査したが、今回追加すべき未登録の具体日導入パチスロは確定できなかった。
- `爆走列島` は2009-11-16発表だが、PachiBeeでホール導入2009-12-14を確認したため11月へ誤配置しない。
- 次の高信頼具体日群は2009-12-07。K-Naviで本機のホール導入開始2009-12-07、当時グリーンべるとで納品2009-12-06開始予定を確認したため434件目として追加。

## payoutRateBySetting

pacnk掲載PAYOUT:
- 設定1: 96.16%
- 設定2: 98.20%
- 設定3: 100.49%
- 設定4: 104.12%
- 設定5: 108.80%
- 設定6: 114.10%

5号機クロニクル掲載値:
- 設定1: 96.2%
- 設定2: 98.2%
- 設定3: 100.5%
- 設定4: 104.1%
- 設定5: 108.8%
- 設定6: 114.1%

丸めで整合する同系列として扱う。平均は行わない。

confidence: HIGH_CROSSCHECKED

## initialHitBySetting

### BIG合算
- 設定1: 1/442.81
- 設定2: 1/436.91
- 設定3: 1/431.16
- 設定4: 1/425.56
- 設定5: 1/409.60
- 設定6: 1/397.19

### REG色別
- 赤REG: 1/474.90 / 1/315.08 / 1/468.11 / 1/310.60 / 1/464.79 / 1/368.18
- 白REG: 1/316.60 / 1/471.48 / 1/313.57 / 1/468.11 / 1/309.13 / 1/370.26

ART初当たり設定別の比較可能な直接系列は今回確定できず、ボーナス・CZ・ストック抽選から逆算しない。

confidence: HIGH_FOR_BONUS / UNVERIFIED_FOR_ART_INITIAL

## baseGamesPer50

- 全設定共通目安: **36.41G / 50枚**
- 旧パチマガスロマガの「1000円あたりのゲーム数」直接値。

confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

ART「清原チャンス」: **約+1.8枚/G**
- 1セット50G、約90枚獲得期待。
- 当時グリーンべると、P-WORLD、K-Navi、旧パチマガで一致。

confidence: HIGH_CROSSCHECKED

## basicPayout

- 清原BIG: 約150枚
- 健介BIG: 約102枚
- 北斗BIG: 約61枚
- REG: 約34枚

当時グリーンべると、P-WORLD、旧パチマガで整合。

confidence: HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 全ボーナス終了後およびART終了後はCZへ。
- CZ中、通常リプレイ入賞で通常へ、ART突入目成立でARTへ。
- ナビストックなしでもK-Naviは約20%で自力ART突入可能と説明。
- ARTは1セット50G、準完走型、純増約+1.8枚/G。
- CZ間600G消化で天井CZへ突入。
- ボーナス間500Gで仮天井（超高確）へ移行し、ベル/チェリー成立時にARTストック抽選が行われるという解析をpacnkで確認。

confidence: HIGH_FOR_MAIN_ART_CZ / MEDIUM_HIGH_FOR_500G_SUB_CEILING

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`炎の熱血教師 / 清原 健介 北斗 / ロデオ` と `設定変更 / 設変 / リセット / 朝一 / CZ / 天井 / 500G / 600G` を組み替え、K-Navi、P-WORLD、旧パチマガ、pacnk、旧天井資料を横断。旧パチマガ本機トップに「攻め時・ヤメ時・設定変更時」専用項目の存在は確認したが、具体本文を取得できず、500G仮天井・CZ間600G進捗の設定変更時処理は断定しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。旧天井狙い資料でも本機の宵越しは「？」扱いで、据え置き時の500G/600G進捗、ARTナビストック、高確/CZ状態保持を直接確定できない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の500G/600Gカウンタ、CZ/RT状態、ナビストック、初期画面・出目復帰を本機固有資料で確定できない。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。公開天井は `ボーナス間500G仮天井` と `CZ間600GでCZ`。設定変更時のclear/retainは未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。リセット専用短縮天井の公開数値は確認できない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。朝一専用モード振分や高確移行率の確定値なし。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ/高確/ARTナビストックの設定変更・据え置き・電断時処理を確定できない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみの短縮・CZ優遇・ARTストック優遇を示す本機固有の公開根拠を確定できない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / リール / 液晶 / 朝一CZ / 変更判別` を追加して再探索したが、本機固有の判別法を確定できない。

numericResetData:
  normalGameCeiling: ボーナス間500Gで仮天井（超高確） / CZ間600GでCZ
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_AFTER_REQUIRED_MULTIQUERY_RESEARCH

## conflicts

- 機械割はpacnkの精密値と5号機クロニクルの小数1桁値が丸めで整合し、CONFLICTにはしない。
- 旧資料の「宵越し？」は不明表示であり、宵越し可/不可の根拠として採用しない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- ART initial probability by setting: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset-specific ceiling/mode numeric values: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi 機種トップ — https://p-kn.com/slot/1095/ — ホール導入開始2009-12-07、ART/CZ概要、各ボーナス規定払い出し — reliability: CONTEMPORARY_ANALYSIS_DATABASE
2. グリーンべると/P-WORLD業界ニュース — https://news.p-world.co.jp/articles/3671/greenbelt — 納品2009-12-06開始予定、ART+1.8枚/G・50G約90枚、ボーナス獲得枚数 — reliability: CONTEMPORARY_INDUSTRY_NEWS
3. P-WORLD — https://www.p-world.co.jp/machine/database/5757 — 5号機ART/CZ/天井、ART+1.8枚/G、基本獲得枚数 — reliability: RELIABLE_DATABASE
4. K-Navi CZ — https://p-kn.com/slot/1095/14045/ — ボーナス/ART後CZ、CZ間600G天井 — reliability: CONTEMPORARY_ANALYSIS_DATABASE
5. 旧パチマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/52/a.php — ART+1.8枚/G、ボーナス/CZ/ART構造、基本獲得枚数 — reliability: ANALYSIS_SINGLE_DIRECT
6. 旧パチマガ 1000円あたりG数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/52/c.php — 36.41G — reliability: ANALYSIS_SINGLE_DIRECT
7. 旧パチマガ 機種トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/52/rodeo_slot_52.php — 「攻め時・ヤメ時・設定変更時」項目の存在 — reliability: ANALYSIS_INDEX_ONLY_FOR_RESET
8. pacnk — https://pacnk.com/slot/tools/sh_nekketukyousi.html — BIG/REG設定差、PAYOUT、500G仮天井、CZ間600G — reliability: RETROSPECTIVE_ANALYSIS_DATABASE
9. 5号機クロニクル ロデオ — https://5goki.com/rodeo — 2009/12、機械割96.2〜114.1% — reliability: RETROSPECTIVE_DATABASE
10. 天井ハイエナ生活（旧回顧資料） — https://macerate.seesaa.net/article/226312110.html — 500G仮天井/600G CZの回顧照合、宵越しは不明表示 — reliability: LOW_MEDIUM_RETROSPECTIVE_CROSSCHECK_ONLY
11. PachiBee 爆走列島 — https://www.pachibee.jp/machines/reach/209110014 — 爆走列島の実導入2009-12-14を確認し、11/16発表日との混同を回避 — reliability: CONTEMPORARY_DATABASE_CHRONOLOGY

## recordMeta

recordNumber: 434
addedDate: 2026-09-03
schema: resetBehavior v0.7
researchStatus: CORE_COLLECTED_RESET_PARTIAL_AFTER_RESEARCH
