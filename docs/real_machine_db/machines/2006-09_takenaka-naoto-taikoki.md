# 竹中直人のパチスロ太閤記

machineName: 竹中直人のパチスロ太閤記
manufacturer: ラスター
releaseDate: 2006-09
generation: 5号機初期
systemType: ボーナス + RT / リプパン・技術介入

## payoutRateBySetting
1: 96.4%
2: 98.5%
3: 101.6%
4: 103.7%
5: 105.9%
6: 108.9%

reliability: ANALYSIS_SINGLE

## initialHitBySetting
UNVERIFIED_AFTER_RESEARCH

## baseGamesPer50
UNVERIFIED_AFTER_RESEARCH

## netIncrease
RT機能あり。通常時とRT中でRT目の扱いが変わる技術介入仕様。MB終了後には最大100GのRTへ突入する回顧資料あり。比較可能な純増/Gは未確定。

## basicPayout
BIG: 規定払い出し345枚 / 純増約300枚
MB: 規定払い出し138枚 / 純増約110枚

## modeSpecificMinimumData
- 5ライン / 3枚掛け専用。
- RT目とボーナスの同時成立あり。
- パチマガスロマガ旧解析ではRT突入契機をMB終了後、ボーナス成立後、1枚役入賞時、RT目出現時と整理。
- 通常時は1枚役を取りこぼしてRT目を出す一方、MB後RT中はRT残Gを維持するため1枚役/RT目の扱いに技術介入が必要。
- 後年回顧資料ではMB後RTは最大100Gとされる。

## resetBehavior
settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
gameCounterReset: NONE_CONFIRMED_AFTER_RESEARCH
ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH
modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH
stateAfterReset: UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: UNVERIFIED_AFTER_RESEARCH
numericResetData:
  resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
note: 機種名の完全表記/「竹中直人の太閤記」表記、ラスター/テクノコーシン、設定変更/リセット/朝一/据え置き/電源/天井/RT/ガックンを組み替え、パチマガスロマガ旧解析、Pachinko Vista、5号機クロニクル、当時機回顧/機種一覧まで横断。RT構造自体は詳細に復元できたが、設定変更・据え置き・電源OFF→ON時にMB後RT残GやRT内部状態をどう扱うか、本機固有の朝一恩恵/不利、変更判別、公開朝一数値を直接確定できなかった。一般的な初期5号機/リプパン機の挙動から推測補完しない。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_WITH_DEVICE_SPECIFIC_RESET_DETAILS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

## sources
取得日: 2026-09-02
1. 5号機クロニクル ラスター — https://5goki.com/luster — 導入月、設定別機械割 — reliability: ANALYSIS_SINGLE
2. パチマガスロマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/10/a.php — 5号機、RT/技術介入、BIG/MB規定払い出し・純増目安 — reliability: ANALYSIS_HIGH
3. パチマガスロマガ RTの種類 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/10/k.php — RT突入契機、RT目/1枚役による技術介入 — reliability: ANALYSIS_HIGH
4. パチマガスロマガ 機種トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/10/luster_slot_10.php — 攻め時・ヤメ時、ボーナス確率/PAYOUT、RT解析の存在を再確認 — reliability: ANALYSIS_HIGH
5. Pachinko Vista — https://www.pachinkovista.com/pfactory/model.php?dsp=1&gc=0&km=2&nid=015898 — RT延命要素を持つ機種構造 — reliability: ANALYSIS_DATABASE
6. パチ7 自由帳「有名人・芸能人タイアップパチスロの歴史」 — https://pachiseven.jp/articles/detail/11773 — MB後RT最大100G、パンク回避型という回顧記述 — reliability: RETROSPECTIVE
7. なな徹「歴代最大の出玉率 神輿」回顧 — https://nana-press.com/post/1559653 — ラスター5号機第1弾、本機がリプパン機だったことを補助確認 — reliability: RETROSPECTIVE

## missingFields
- 設定別BIG/MB確率（パチマガ旧サイトに「ボーナス確率・PAYOUT」項目の存在は確認したが検索結果本文から数表を復元できず）
- 50枚あたりゲーム数
- RT純増/G
- 機械割の別ソース照合
- 設定変更/据え置き/電源OFF→ON時の本機固有RT残G・内部RT状態処理
- 朝一恩恵/不利、変更判別、公開朝一数値

## conflicts
なし（現時点）。

## researchNotes
- v0.7 resetBehavior遡及QAとして2026-09-02に再探索。
- 既存の性能コアPARTIAL判定は維持し、resetBehaviorQAを別管理で追加。
- RT構造はパチマガスロマガ旧解析で再確認できたため「RTがある」だけでなく、MB後/ボーナス成立後/1枚役/RT目がRTに関係する点まで補強。
- ただしリセット時の内部処理本文は回収できず、RT最大100Gをリセット天井や朝一恩恵へ読み替えていない。