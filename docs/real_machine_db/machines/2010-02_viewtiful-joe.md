# ビューティフルジョー

machineName: ビューティフルジョー
manufacturer: エンターライズ
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-02（具体導入日 UNVERIFIED_AFTER_RESEARCH）
generation: 5号機
systemType: ボーナス+A+ART（30Gセット継続型ART）
coreStatus: COMPLETE_CORE_WITH_ONE_BONUS_SOURCE_CONFLICT_AND_RESET_PARTIAL

## chronologyNote

- 最新mainの recordCount 454 / chronologicalFrontier 2010-02-21 を確認し、2/22へ進む前の2010年2月月内漏れ監査を継続。
- LATEST_HANDOFFの優先候補「ビューティフルジョー」をrepo検索し、既存レコードなしを確認。
- 5号機クロニクルは導入時期を **2010/2** と明記。円谷フィールズHDのタイトル別販売資料でもエンターライズ初期タイトルとして2010/3期「ビューティフルジョー」を確認でき、時期は整合する。
- 全国ホール導入の具体日は、機種名/エンターライズ/導入/納品/ホール/2010年2月等へ検索語を変更し、P-WORLD、当時解析、企業資料、後年DBを横断したが高信頼に固定できないため月精度で455件目として遡及追加。chronologicalFrontierは2010-02-21を維持する。

## payoutRateBySetting

- 設定1: **96.7%**
- 設定2: **98.6%**
- 設定3: **99.8%**
- 設定4: **103.3%**
- 設定5: **107.4%**
- 設定6: **112.9%**

P-WORLD、パチマガスロマガ、5号機クロニクルで一致。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## initialHitBySetting

### 赤7BIG
- 設定1〜6: **1/720.2**

### 青7BIG
- 設定1: **1/624.1**
- 設定2: **1/618.3**
- 設定3: **1/612.5**
- 設定4: **1/606.8**
- 設定5: **1/601.2**
- 設定6: **1/595.8**

### BIG合算
- 設定1: **1/334.3**
- 設定2: **1/332.6**
- 設定3: **1/330.9**
- 設定4: **1/329.3**
- 設定5: **CONFLICT: P-WORLD 1/327.6 / パチマガスロマガ 1/357.6**
- 設定6: **1/326.0**

設定5は赤7 1/720.2・青7 1/601.2という同ページ掲載値とはP-WORLDの1/327.6が整合するが、資料の誤記をこちらで修正確定せず、パチマガスロマガ本文の1/357.6も `CONFLICT_SOURCE_VALUE_POSSIBLE_TYPO` として保持する。

confidence: ANALYSIS_HIGH_EXCEPT_SETTING5_COMBINED_CONFLICT

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

パチマガスロマガ本機専用「小役確率」ページは「1000円あたりのゲーム数」を明示的に **現在調査中** としている。`50枚 / 1000円 / コイン持ち / ベース / 小役確率`、機種名・メーカー名を組み替えて再探索したが比較可能な確定値を回収できず。小役から逆算しない。

confidence: UNVERIFIED

## netIncrease

- ART「ブルーモード」: **約+1.3枚/G**
- ART「ビューティフルモード」: **約+1.3枚/G**
- 1セット: **30G**
- ブルーモード継続率: **40〜90%**
- ビューティフルモード継続率: **25〜75%**、終了時はブルーモードへ

P-WORLD直接値。

confidence: ANALYSIS_HIGH

## basicPayout

- BIG: **約190枚**（270枚超払い出しで終了）
- ART: **30G/セット、約+1.3枚/G**

confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は滞在モードによりART期待度が変化し、レア小役等でモード移行/ART抽選。
- ARTは「ブルーモード（BM）」と、通常時へ転落しない上位側「ビューティフルモード（VM）」の2系統。
- **BIG間1200G**ハマリ後、青1枚役以外のART抽選役成立でART当選。天井状態中はBIG成立まで繰り返しART当選が可能。
- 通常時（周期RT中）・BIG中・ART中に青1枚役を揃えると、BIG当選または1000G消化までARTへ入らないペナルティがある。これは通常ゲーム性上のペナルティであり、設定変更恩恵/不利とは分離する。

confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガ本機メニューに「攻め時・ヤメ時・設定変更時」の専用項目が存在することまでは確認したが、現在取得可能な検索結果/本文から設定変更時のBIG間1200G天井進捗、通常モード、ART潜伏/状態の具体処理を回収できず。`設定変更 / リセット / 朝一 / 天井 / 据え置き / エンターライズ`を組み替え、P-WORLD、当時解析、古いDB、後年資料を再探索したうえで未確定とする。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のBIG間1200G天井進捗、通常モード/ART状態の引継ぎを本機固有の直接資料で確定できず。設定変更情報の逆から推定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の天井カウンタ、通常モード、ART/潜伏状態、初期出目等の保持/初期化を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_BIG_INTERVAL_1200G_CEILING**。通常天井がBIG間1200Gであること自体は確認済みだが、設定変更/電源OFF→ONによるclear/retainは不明。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井や朝一専用到達G数は確認できず。通常公開天井はBIG間1200G。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常モードの設定変更時再抽選/固定/引継ぎを直接確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART潜伏・ART滞在・周期RT等の設定変更/据え置き/電源復帰処理を直接確認できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の高確スタート、短縮天井、朝一ART優遇等の直接根拠なし。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等は不明のため推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / 朝一出目 / リール / 液晶 / 天井ゲーム数`まで検索語を広げたが、本機固有の設定変更/据え置き判別方法を高信頼に確定できず。

numericResetData:
  normalBigIntervalCeiling: **1200G**
  resetSpecificCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

## conflicts

1. **設定5 BIG合算**: P-WORLD **1/327.6**、パチマガスロマガ **1/357.6**。赤7/青7個別確率からはP-WORLD値と整合するが、原資料値を平均/上書きせずCONFLICTとして保持。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- concrete release day in 2010-02: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- BIG間1200G天井の設定変更/据え置き/電源OFF→ON時処理: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode/state: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. P-WORLD「ビューティフルジョー」 — https://www.p-world.co.jp/machine/database/5794 — メーカー、ART構造、約+1.3枚/G、30G/セット、BIG約190枚、赤7/青7/BIG合算、機械割、BIG間1200G天井、青1枚役ペナルティ — reliability: INDUSTRY_DATABASE
2. パチマガスロマガ「ビューティフルジョー ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/03/h.php — BIG合算、PAYOUT。設定5合算はP-WORLDと競合 — reliability: ANALYSIS_HIGH
3. パチマガスロマガ「ビューティフルジョー 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/03/c.php — 1000円あたりゲーム数が「現在調査中」であることを直接確認 — reliability: ANALYSIS_HIGH
4. パチマガスロマガ「ビューティフルジョー 機種メニュー」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/03/enterrise_slot_03.php — 当時解析項目および「攻め時・ヤメ時・設定変更時」項目の存在 — reliability: ANALYSIS_HIGH
5. 5号機クロニクル「エンターライズ5号機全機種一覧」 — https://5goki.com/enterrise — 導入時期2010/2、機械割96.7〜112.9% — reliability: RETROSPECTIVE_DATABASE
6. 円谷フィールズホールディングス「パチスロ タイトル別販売台数推移」 — https://www.tsuburaya-fields.co.jp/ir/j/files/press/2025/press_20250514c.pdf — エンターライズ/アデリオン一覧で2010/3期ビューティフルジョーを確認 — reliability: CORPORATE_OFFICIAL

## retrievalDate

2026-09-03
