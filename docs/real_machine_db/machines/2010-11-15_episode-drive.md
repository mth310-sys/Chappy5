# エピソードドライブ

machineName: エピソードドライブ
manufacturer: ニューギン
releaseDate: 2010-11-15
releaseDateStatus: HALL_INTRODUCTION_DATE
releaseDateNote: K-Naviがホール導入開始2010-11-15と明記。P-WORLDは2010年11月粒度。既存handoffでグリーンべると2010-10-21記事の2010-11-14納品予定（地域差あり）を確認済みのため、物流日とホール導入日を分離して保持。
generation: 5号機
systemType: A+RT / CZ / ループ式RT
formalModelName: エピソード ドライブZ
inspectionNumber: 0S0398
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前526「パチスロ戦国無双～猛将伝～」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 526 / chronologicalFrontier 2010-11-15。
- LATEST_HANDOFF指定の同日未処理候補「エピソードドライブ」をrepo code searchし、既存レコードなしを確認。
- K-Naviの2010-11-15ホール導入開始を時系列主値として527件目に追加。

## payoutRateBySetting

- 設定1: **96.6%**
- 設定2: **98.6%**
- 設定3: **101.2%**
- 設定4: **104.3%**
- 設定5: **107.8%**
- 設定6: **114.2%**

P-WORLDと5号機クロニクルで一致。
confidence: HIGH_MULTI_SOURCE

## initialHitBySetting

### 赤7BIG
- 設定1: **1/993.0**
- 設定2: **1/963.8**
- 設定3: **1/923.0**
- 設定4: **1/885.6**
- 設定5: **1/840.2**
- 設定6: **1/636.3**

### 青7BIG
- 設定1: **1/537.2**
- 設定2: **1/512.0**
- 設定3: **1/489.1**
- 設定4: **1/461.5**
- 設定5: **1/434.0**
- 設定6: **1/452.0**

### REG
- 設定1: **1/461.5**
- 設定2: **1/455.1**
- 設定3: **1/436.9**
- 設定4: **1/420.1**
- 設定5: **1/407.1**
- 設定6: **1/397.2**

### ボーナス合算
- 設定1: **1/198.6**
- 設定2: **1/192.8**
- 設定3: **1/184.6**
- 設定4: **1/176.2**
- 設定5: **1/168.0**
- 設定6: **1/158.7**

P-WORLDと5号機クロニクルで全系列一致。
confidence: HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「エピソードドライブ / エピソード ドライブZ / ニューギン」と1000円、千円、50枚、コイン持ち、ベース、G数を組み替えて再探索したが、本機固有の直接値を安全に確定できず。
confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- RT「RTステージ」: **1セット30G**
- 純増: **約+0.4枚/G**
- 継続率: **1% / 66% / 75% / 85% / 99%** の5段階
- ラスト5Gで継続バトル。継続抽選に通れば次セットへ。
- 通常時CZ「ドライブチャンス」は7G。条件達成でRTへ。
- ボーナス後RT非当選時またはRT継続非当選時は「リベンジャーシステム」による引き戻し機会あり。

P-WORLDとK-Naviで1セット30G・約+0.4枚/G・ループ式RTを照合。
confidence: HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約250枚**（336枚超払い出しで終了）
- REG: **約60枚**（60枚超払い出しで終了）
confidence: HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は **通常 / 高確 / 超高確** の内部状態を持つ。
- 内部状態は液晶ステージとリンクし、上位状態ほどボーナス当選時のRT突入期待度が高い。
- 12枚役A・スイカ成立時に状態移行抽選。
- 「セットアップシステム」はポイントを蓄積し、100pt到達で次回ボーナス後に99%継続RTへの突入が確定。ポイントはRT突入まで引き継ぐ通常仕様。
- 通常ゲーム数到達型の固定天井は今回アクセス可能な主要資料から確認できず、存在を推測しない。
confidence: SYSTEM_HIGH / CEILING_NONE_CONFIRMED_AFTER_RESEARCH

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL / DIRECT_DETAIL_UNVERIFIED_AFTER_RESEARCH**。K-Navi本機ページに専用「設定変更後の挙動」解析項目が現存することを確認。ただしリンク先本文を現行取得経路から安全に回収できず、設定変更時の内部状態・セットアップポイント・RT権利/CZ状態の具体処理は推定しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のセットアップポイント、通常/高確/超高確、CZ/RT権利・継続率の保持を本機固有の直接本文で確定できず。通常仕様としてポイントはRT突入まで引き継ぐことは確認済みだが、設定据え置き跨ぎを意味するとは解釈しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時のポイント、内部状態、CZ/RT状態・権利、液晶表示の処理を直接確定できず。

gameCounterReset: **NOT_APPLICABLE_OR_NONE_CONFIRMED**。通常ゲーム数型固定天井を主要資料で確認できず。設定変更時にリセットすべき天井G数を推測しない。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井・朝一専用G数は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/高確/超高確の設定変更時振り分け・初期状態を直接本文で回収できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。セットアップポイント、CZ、RT突入権利、RT継続率、引き戻し状態の設定変更時処理を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用のRT優遇、ポイント加算、短縮天井等の公開値を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。ポイント消去等の不利挙動を直接確定できないため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、ポイント表示等による本機固有の変更判別を確定できず。

numericResetData:
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetHighStateProbability: **UNVERIFIED_AFTER_RESEARCH**
- morningHitProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

- 主要仕様のRT1セット30G・約+0.4枚/GについてP-WORLDとK-Naviは一致し、今回採用値に実質競合なし。
- 検索過程では後年・別機種の「ドライブ」名称を含む機種が大量混入するため、それらの朝一/天井情報は採用していない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior詳細本文: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- 公開朝一専用数値: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. K-Navi「エピソードドライブ」 — ホール導入開始2010-11-15、5号機RT、RT1セット30G・約+0.4枚/G、設定変更後の挙動という専用解析項目の存在、通常/高確/超高確系解析項目。
   - https://p-kn.com/slot/1303/
   - confidence: ANALYSIS_HIGH
2. P-WORLD機種DB ID 6139 — ニューギン、5号機RT、型式名エピソード ドライブZ、検定番号0S0398、全設定ボーナス確率・機械割、BIG約250枚/REG約60枚、RT30G・約+0.4枚/G、継続率5段階、内部状態・CZ/RT仕様。
   - https://www.p-world.co.jp/machine/database/6139
   - confidence: ANALYSIS_HIGH
3. 5号機クロニクル「ニューギン＆エキサイト 5号機全機種一覧」 — 2010/11、赤BIG/青BIG/REG/合算、機械割がP-WORLDと一致。
   - https://5goki.com/newgin-excite
   - confidence: RETROSPECTIVE_CROSSCHECK
4. グリーンべると（既存handoff確認） — 2010-10-21発表記事、2010-11-14納品予定（地域差あり）。ホール導入日とは分離。
   - confidence: CONTEMPORARY_INDUSTRY
