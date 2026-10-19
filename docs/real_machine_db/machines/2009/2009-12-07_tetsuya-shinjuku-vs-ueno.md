# 哲也 ～雀聖と呼ばれた男～ 新宿VS上野編

machineName: 哲也 ～雀聖と呼ばれた男～ 新宿VS上野編
manufacturer: アリストクラートテクノロジーズ
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-12-07
generation: 5号機
systemType: A+ART / 周期CZ / ストックART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新main 434件地点から継続。
- K-Naviがホール導入開始を2009-12-07と明示。当時グリーンべるとの2009-10-16プレス発表記事でもアリストクラートテクノロジーズの後継機として確認。
- 2009-12-07同日群のrepo未登録候補としてLATEST_HANDOFFに先行指定されていたため、重複検索と直前handoff再取得を行い435件目として追加。
- 2020年のDaiichi系「哲也－天運地力－」および2010年の「哲也 新宿vs上野DX」は別機種として数値を混入させていない。

## payoutRateBySetting

### 旧パチマガスロマガ PAYOUT（シミュレート値）
- 設定1: 97.76%
- 設定2: 99.45%
- 設定3: 101.65%
- 設定4: 104.32%
- 設定5: 106.76%
- 設定6: 111.56%

### 後年DB・実機系で広く流通する系列
- 設定1: 97.3%
- 設定2: 98.8%
- 設定3: 100.9%
- 設定4: 104.2%
- 設定5: 107.0%
- 設定6: 112.1%

両系列は単純な丸めでは一致しないため平均せずCONFLICTとして保持。

confidence: CONFLICT

## initialHitBySetting

### BIG
- 設定1: 1/383.25
- 設定2: 1/364.09
- 設定3: 1/364.09
- 設定4: 1/326.05
- 設定5: 1/326.05
- 設定6: 1/276.52

### REG
- 設定1: 1/618.26
- 設定2: 1/555.39
- 設定3: 1/541.62
- 設定4: 1/489.07
- 設定5: 1/474.90
- 設定6: 1/431.16

### ボーナス合成
- 設定1: 1/236.59
- 設定2: 1/219.92
- 設定3: 1/217.73
- 設定4: 1/195.63
- 設定5: 1/193.32
- 設定6: 1/168.47

旧パチマガスロマガの直接解析値。後年DBの整数丸め系列（BIG 1/383→1/276、REG 1/618→1/431）とも整合。

ART初当たりの設定別比較可能系列は今回確定できず、ボーナス・CZ・ナビストックから逆算しない。

confidence: HIGH_FOR_BONUS / UNVERIFIED_FOR_ART_INITIAL

## baseGamesPer50

旧パチマガスロマガ「1000円あたりのゲーム数」:
- 設定1: 31.88G
- 設定2: 31.92G
- 設定3: 31.94G
- 設定4: 31.99G
- 設定5: 32.01G
- 設定6: 32.09G

後年DBの約32G/50枚とも整合。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## netIncrease

ART「玄人TIME（バイニンタイム）」: **約+1.1枚/G**

- 1ストックは30G / 100G / 1000Gの3種類。
- CZ「天運チャンス」中のART突入リプレイ入賞で開始。
- 当時旧パチマガ、後年実機販売資料・回顧資料で約+1.1枚/Gが一致。

confidence: HIGH_CROSSCHECKED

## basicPayout

- BIG: 約250枚（336枚超払い出しで終了）
- REG: 最大約77枚（83枚超払い出しで終了）

K-Naviの規定払い出し条件、旧パチマガの純増目安、後年実機販売資料で整合。

confidence: HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ボーナス後などにCZ「天運チャンス」へ移行。
- CZ中、ナビストックがあれば押し順ナビが発生しART突入を補助。ストックなしでも自力突入余地がある。
- ART「玄人TIME」は30G / 100G / 1000G、純増約+1.1枚/G。
- 通常500G消化で第1天井CZ到達。K-Naviはさらに第2・第3天井CZの専用項目を持つ。
- 回顧天井資料では、第1天井後さらに通常500Gで第2天井、第2天井後さらに通常500Gで第3天井とされ、第2天井はARTストック5個以上、第3天井は10個以上という記録がある。後年実戦掲示板にも第1→第2→第3の500G周期到達例が残る。

confidence: HIGH_FOR_ART_CZ / MEDIUM_HIGH_FOR_MULTI_STAGE_CEILING

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`哲也 新宿VS上野 / 哲也2 / アリストクラート / 設定変更 / 設変 / リセット / 朝一 / 500G / 天井 / 天運チャンス` を組み替え、K-Navi、旧パチマガ、当時業界記事、後年DB・回顧資料を横断。K-Naviに「朝イチは狙い目!?」「ガックン判別は可能!?」、旧パチマガに「攻め時・ヤメ時・設定変更時」の本機専用項目が存在することまでは確認したが、具体本文を取得できず、設定変更時の天井/CZ/ARTストック処理を断定しない。

carryOverBehavior: **PARTIAL_CONFIRMED**。K-Naviが本機を明示的に「宵越アリ」と分類しており、据え置き時に宵越し狙いが成立すること自体は確認。一方、第1〜第3天井の各500G進捗・ARTナビストック・CZ状態のどこまでを保持するかは本文を取得できず `UNVERIFIED_AFTER_RESEARCH` のまま分離する。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみでの天井進捗、CZ/ART状態、ナビストック、リール初期挙動を本機固有の直接資料で確定できない。中古実機の電源系故障例は個体故障情報であり仕様根拠に採用しない。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_SETTING_CHANGE / CARRYOVER_INDICATED_FOR_STAYPUT**。通常500Gごとの天井CZ構造と「宵越アリ」は確認。設定変更時clear/retainの直接本文は未回収。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮値は確認できない。

modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用モード振り分け・設定変更時のみのモード数値は確認できない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ状態・ARTナビストック・内部状態の変更時/据え置き/電断時処理を確定できない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。K-Naviに「朝イチは狙い目!?」専用項目は存在するが本文具体値を取得できず、恩恵内容を推測しない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。K-Naviに「ガックン判別は可能!?」専用項目の存在は確認したが、可否・条件・精度の本文を回収できないため、ガックン可能/不可能を断定しない。初期出目・液晶・ゲーム数挙動も本機固有の直接根拠を確定できない。

numericResetData:
  normalGameCeiling: 第1天井=通常500G / 第2・第3天井も前段天井後の通常500G周期という回顧資料あり
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_AFTER_REQUIRED_MULTIQUERY_RESEARCH

## conflicts

- 機械割は旧パチマガのシミュレート値 `97.76 / 99.45 / 101.65 / 104.32 / 106.76 / 111.56%` と、後年DB・実機系で広く流通する `97.3 / 98.8 / 100.9 / 104.2 / 107.0 / 112.1%` が競合。平均しない。
- 後年5号機クロニクル検索結果は `哲也 新宿vs上野DX` 見出し下に同系ボーナス確率を載せるため、初代2009年版の独立根拠としては使用しない。
- メーカー名を後継企業「クロスアルファ」と表記する後年DBがあるが、当時グリーンべるとの発表主体はアリストクラートテクノロジーズ。2009年当時のメーカーとして後者を採用。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- ART initial probability by setting: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior detail: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- setting-change game counter clear/retain: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric benefits: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetection detail: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi 機種トップ — https://p-kn.com/slot/1083/ — ホール導入開始2009-12-07、アリストクラート、RT/ART・周期CZ・天井・宵越アリ分類、朝一/ガックン/第2第3天井の専用項目、規定払い出し — reliability: CONTEMPORARY_ANALYSIS_DATABASE
2. グリーンべると/P-WORLD業界ニュース — https://news.p-world.co.jp/articles/3649/greenbelt — 2009-10-16、アリストクラートテクノロジーズ発表、後継機・ART/CZ構造 — reliability: CONTEMPORARY_INDUSTRY_NEWS
3. 旧パチマガ ボーナス確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/39/h.php — BIG/REG/合成、シミュレートPAYOUT — reliability: ANALYSIS_SINGLE_DIRECT
4. 旧パチマガ 1000円あたりG数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/39/c.php — 31.88〜32.09G — reliability: ANALYSIS_SINGLE_DIRECT
5. 旧パチマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/39/a.php — CZ、ART約+1.1枚/G、30/100/1000G、BIG約250枚、REG最大77枚 — reliability: ANALYSIS_SINGLE_DIRECT
6. 旧パチマガ 機種トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/39/arist_slot_39.php — 「攻め時・ヤメ時・設定変更時」専用項目の存在 — reliability: ANALYSIS_INDEX_ONLY_FOR_RESET
7. みんスロ — https://minslo.com/%E5%93%B2%E4%B9%9F-%E6%96%B0%E5%AE%BFvs%E4%B8%8A%E9%87%8E/ — 導入日、約32G、+1.1枚/G、250/77枚、97.3〜112.1%系列、500G天井 — reliability: RETROSPECTIVE_DATABASE
8. ときどき美味いもん 天井回顧 — https://kotuumai.exblog.jp/ — 第1天井500G、第2/第3天井500G周期、ストック5個以上/10個以上 — reliability: LOW_MEDIUM_RETROSPECTIVE_CROSSCHECK_ONLY
9. P-WORLD掲示板 — https://www.p-world.co.jp/sp/search_kisyubbs.cgi?code=&group_id=3332&mode=thread_list&page=65 — 当時実戦の第1→第2→第3天井到達例の補助照合 — reliability: COMMUNITY_CROSSCHECK_ONLY
10. ホームスロット実機販売資料 — https://home-slot.net/SHOP/s-aristocrat9.html — BIG約250枚、REG約77枚、ART約+1.1枚/G、CZ→ART構造 — reliability: RETROSPECTIVE_REAL_MACHINE_SALES_REFERENCE
11. みんスロ/スパイダー/シリーズ回顧など — 97.3 / 98.8 / 100.9 / 104.2 / 107.0 / 112.1%系列の複数照合 — reliability: RETROSPECTIVE_CROSSCHECK

## recordMeta

recordNumber: 435
addedDate: 2026-09-03
schema: resetBehavior v0.7
researchStatus: CORE_COLLECTED_RESET_PARTIAL_AFTER_RESEARCH