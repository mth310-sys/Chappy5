# 列強伝

machineName: 列強伝
manufacturer: ラスター（WIN NET TECHNOLOGY開発 / メテオ販売）
formalModelName: サンゴクレッキョウデン
approvalNumber: 8S0066
releaseDate: 2010-02（具体導入日 UNVERIFIED_AFTER_RESEARCH）
generation: 5号機
systemType: ボーナス+周期CZ+完走型RT
coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT_AND_RESET_PARTIAL

## chronologyNote

- 最新mainは recordCount 453 / chronologicalFrontier 2010-02-21。2/22へ進む前の2010年2月月内候補監査から継続。
- LATEST_HANDOFFで優先候補として指定されていた「列強伝」をrepo検索し、既存レコードなしを確認。
- P-WORLDは導入開始を2010年02月、後年筐体資料も2010年2月リリースとする。当時の必勝本では2010-01-23にCZ/RT詳細、2010-02-01〜02に設定看破/シミュレート情報が公開済みで、2009-12-29時点の販売開始発表も確認できる。
- ただし、全国ホール導入の具体日を公式・業界・当時解析・古いDB・回顧資料で再探索しても高信頼に固定できなかったため、日付を推測せず月精度で454件目として遡及追加。chronologicalFrontierは2010-02-21を維持する。

## payoutRateBySetting

### P-WORLD掲載値
- 設定1: **97.8%**
- 設定2: **99.3%**
- 設定3: **101.3%**
- 設定4: **103.3%**
- 設定5: **105.4%**
- 設定6: **107.8%**

### パチマガスロマガ シミュレート値
- 設定1: **97.79%**
- 設定2: **99.40%**
- 設定3: **101.67%**
- 設定4: **103.83%**
- 設定5: **106.21%**
- 設定6: **108.89%**

### パチ&スロ必勝本 シミュレート値
- 設定1: **97.96%**
- 設定2: **99.45%**
- 設定3: **101.53%**
- 設定4: **103.51%**
- 設定5: **105.71%**
- 設定6: **108.16%**

P-WORLD値と2系統のシミュレート値は設定5〜6を中心に単純な丸めでは説明しきれない差があるため、平均せず `CONFLICT` として全系列を保持する。必勝本は7000G×10万日、等価交換、ボーナス成立後3G目に揃える（RT中は完走後）条件を明記。

confidence: CONFLICT_MULTI_SOURCE_WITH_SIMULATION_CONDITION_DIFFERENCE

## initialHitBySetting

### BIG
- 設定1: **1/661.98**（P-WORLD丸め 1/662）
- 設定2: **1/642.51**
- 設定3: **1/574.88**
- 設定4: **1/546.13**
- 設定5: **1/496.48**
- 設定6: **1/464.79**

### REG
- 設定1: **1/809.09**
- 設定2: **1/780.19**
- 設定3: **1/682.67**
- 設定4: **1/642.51**
- 設定5: **1/574.88**
- 設定6: **1/532.81**

### ボーナス合成
- 設定1: **1/364.09**
- 設定2: **1/352.34**
- 設定3: **1/312.08**
- 設定4: **1/295.21**
- 設定5: **1/266.41**
- 設定6: **1/248.24**

P-WORLDとパチマガスロマガで一致（P-WORLDは小数丸め）。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

`列強伝 / サンゴクレッキョウデン / ラスター / WIN NET / メテオ`に対し、`50枚 / 1000円あたり / コイン持ち / ベース`を組み替え、P-WORLD、パチマガスロマガ、必勝本、当時系記事、後年DBを再探索したが、比較可能な50枚ベースを確定できず。小役確率から逆算しない。

confidence: UNVERIFIED

## netIncrease

- RT「千里行」: **約+0.8枚/G**
- 必勝本の直接解析値: **+0.79枚/G**
- 1セット: **100G**
- 100G完走時の純増目安: **約80枚**

P-WORLD、当時販売発表系資料、後年筐体資料、必勝本で整合。

confidence: ANALYSIS_HIGH / MULTI_SOURCE

## basicPayout

- BIG: **約380枚**（462枚超払い出しで終了）
- REG: **約90枚**（98枚超払い出しで終了）
- RT100G: **約80枚増加見込み**

P-WORLD、パチマガスロマガ、当時販売発表系資料で一致。

confidence: ANALYSIS_HIGH / MULTI_SOURCE

## modeSpecificMinimumData

- ボーナス後は最大5Gの強めCZ「ドラタイム（パトタイム）」へ。
- ボーナス後CZ終了後、およびRT100G完走後は「弱CZ」へ。
- 通常時は**150G消化ごとにCZ**へ移行する周期型。
- CZ中に特殊リプレイ入賞で100G完走型RT「千里行」へ。
- CZ中の14枚役・チェリー入賞で通常へ戻る。
- RTは100G消化で終了する完走型。P-WORLDはボーナス入賞も終了条件として記載し、攻略上はRT中にボーナスを揃えず完走させる打ち方を案内。
- 150Gは通常時周期CZ到達ゲーム数であり、ボーナス/ARTが確定する一般的な一発天井とは定義を分ける。

confidence: ANALYSIS_HIGH / MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`列強伝 / サンゴクレッキョウデン / 設定変更 / リセット / 朝一 / メテオ / ラスター / WIN NET`を組み替え、必勝本（本機TOPに「設定変更&天井情報」カテゴリの存在を確認）、P-WORLD、パチマガスロマガ、当時記事、古いDB、後年回顧を再探索したが、設定変更時に150G周期カウンタ、CZ/RT状態をどう処理するか直接本文を確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時に150G周期進捗、CZ/RT状態が引き継がれるかを本機固有資料で直接確定できず。設定変更挙動の逆から推定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の150G周期カウンタ、CZ/RT状態、初期出目/ランプ等の扱いを直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_150G_PERIODIC_CZ_COUNTER**。通常時150G消化でCZへ入る周期構造自体は確定しているが、設定変更/電源OFF→ONで周期進捗がclear/retainのどちらかは未確認。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮周期、変更後天井G数、朝一限定CZ到達ゲーム数は確認できない。通常公開値は150G周期CZ。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機は長期モード管理より周期CZ型だが、設定変更後に通常/ボーナス後CZ相当/弱CZ等へ固定・再抽選されるか直接根拠なし。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時・据え置き時・単純電源OFF→ON時にCZまたはRT滞在状態を維持/解除するか本機固有資料で確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。150G周期CZは通常ゲーム性であり、設定変更時限定恩恵として扱わない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。周期進捗消失等を推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / 朝一出目 / リール / ランプ / CZ到達ゲーム数`まで検索語を広げたが、本機固有の変更/据え置き判別法を高信頼に確定できず。

numericResetData:
  normalPeriodicCZ: **150G_NORMAL_PLAY**
  bonusAfterCZ: **MAX_5G**
  rtAfterCZ: **WEAK_CZ_AFTER_100G_RT_COMPLETION**
  resetSpecificCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

## conflicts

1. **機械割**: P-WORLD 97.8/99.3/101.3/103.3/105.4/107.8%、パチマガスロマガ 97.79/99.40/101.67/103.83/106.21/108.89%、必勝本シミュレート 97.96/99.45/101.53/103.51/105.71/108.16%。平均せず系列別に保持。
2. **RT終了条件の表現**: P-WORLDは「規定ゲーム数消化orボーナス入賞」と記載する一方、完走型としてRT中はボーナスを揃えず100G完走させる攻略を案内。パチマガスロマガは基本システム文に「非完走型」とする記述が検索結果上存在するが、P-WORLD・必勝本・同サイトの攻略文脈は100G完走型として扱う。比較用には100G RT / +0.79〜0.8枚/Gを採用し、内部終了制御の細部は本DB目的外として混同しない。

## missingFields

- concrete release day in 2010-02: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- 150G periodic CZ counter reset/carry: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode/state: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. P-WORLD「列強伝」 — https://www.p-world.co.jp/machine/database/5816 — ラスター、5号機RT、型式サンゴクレッキョウデン、検定8S0066、導入2010年02月、BIG/REG/合算、P-WORLD機械割、約380/90枚、150G周期CZ、100G RT、約+0.8枚/G — reliability: INDUSTRY_DATABASE
2. パチマガスロマガ「列強伝 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/01/a.php — BIG約380枚/REG約90枚、RT約+0.8枚/G — reliability: ANALYSIS_HIGH
3. パチマガスロマガ「列強伝 ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/01/h.php — 設定別BIG/REG/合算、シミュレートPAYOUT 97.79〜108.89% — reliability: ANALYSIS_HIGH
4. パチマガスロマガ「列強伝 機種メニュー」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/01/meteor_slot_01.php — 攻略項目構成、RT/攻め時・ヤメ時等の存在確認 — reliability: ANALYSIS_HIGH
5. パチ&スロ必勝本「列強伝」 — https://p.hisshobon.jp/machine/1532 — 2010-01-23 CZ&RT詳細、2010-02-01設定看破、2010-02-02シミュレート更新、「設定変更&天井情報」カテゴリ存在 — reliability: CONTEMPORARY_ANALYSIS
6. パチ&スロ必勝本「CZ&RT詳細」 — https://p.hisshobon.jp/machine/1532/1/23237 — CZ条件、通常150G消化、ボーナス後5G CZ、RT終了後弱CZ、RT100G、+0.79枚/G — reliability: CONTEMPORARY_ANALYSIS
7. パチ&スロ必勝本「シミュレートデータ」 — https://p.hisshobon.jp/machine/1532/1/23234 — 機械割97.96〜108.16%、7000G×10万日等の算出条件 — reliability: CONTEMPORARY_ANALYSIS
8. 当時販売開始発表の保存記事 — https://messiii88.hatenadiary.org/entry/20091229/1262050217 — WIN NET TECHNOLOGY開発、メテオ販売開始発表、BIG約380枚/REG約90枚、RT100G約80枚、合算1/248.2〜1/364.1、通常150G周期 — reliability: CONTEMPORARY_INDUSTRY_REPRINT
9. pachinko’s blog「列強伝」 — https://pachinko.hatenablog.jp/entry/2010/02/rekkyo-den — 2010年2月リリース、メテオ共同開発、RT約+0.8枚/G — reliability: RETROSPECTIVE_DATABASE

## evidencePolicy

- 150G周期CZを一般的な一発天井と同一視しない。
- 設定変更時の150G周期リセット/引継ぎを5号機一般論から推定しない。
- P-WORLDとシミュレート値の機械割差は平均しない。
- 具体導入日が未確定のため、chronologicalFrontierを2010-02-21より進めない。
