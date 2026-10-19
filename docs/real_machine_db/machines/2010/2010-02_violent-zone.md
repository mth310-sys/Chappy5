# バイオレントゾーン

machineName: バイオレントゾーン
manufacturer: JPS
formalModelName: バイオレットゾーンX
approvalNumber: 9S1043
releaseDate: 2010-02（具体導入日 UNVERIFIED_AFTER_RESEARCH）
generation: 5号機
systemType: ボーナス+ART（CZ/ミッション経由・ゲーム数上乗せ型）
coreStatus: PARTIAL_BASE_AND_ART_INITIAL_HIT_UNVERIFIED_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainの recordCount 455 / chronologicalFrontier 2010-02-21 を確認し、2/22へ進む前の2010年2月月内漏れ監査を継続。
- LATEST_HANDOFF優先候補「バイオレントゾーン」をrepo検索し、既存レコードなしを確認。
- P-WORLDおよび5号機クロニクルは導入時期を **2010年2月** と一致して記載。当時グリーンべるとは2010-01-26に新機種発表を報道。
- 全国ホール導入の具体日は検索語・資料系統を変更して再探索したが高信頼に固定できないため、月精度で456件目として遡及追加。chronologicalFrontierは2010-02-21を維持する。

## payoutRateBySetting

- 設定1: **98.8%**
- 設定2: **99.6%**
- 設定3: **101.4%**
- 設定4: **103.4%**
- 設定5: **106.0%**
- 設定6: **107.7%**

P-WORLDと5号機クロニクルで一致。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## initialHitBySetting

### BIG
- 設定1〜6: **1/8192**

### BATTLE CHANCE（BC）
- 設定1〜6: **1/264.3**

### ボーナス合算
- 設定1〜6: **1/256**

### ART初当たり
- **UNVERIFIED_AFTER_RESEARCH**

P-WORLDおよび当時グリーンべるとでボーナス合算1/256（全設定共通）を確認。ARTはBIG後100%突入・BC成功・通常時CZ/ミッション経由など複数経路のため、比較可能な設定別ART初当たり確率は今回確定できず。

confidence: ANALYSIS_HIGH_FOR_BONUS / UNVERIFIED_FOR_ART_INITIAL_HIT

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

`50枚 / 1000円あたりG数 / ベース / コイン持ち / 小役確率`、機種名・型式名・メーカー名を組み替え、P-WORLD、パチマガスロマガ、当時業界記事、旧DB、回顧資料を再探索したが比較可能な確定値を回収できず。小役から逆算しない。

confidence: UNVERIFIED

## netIncrease

- ART「バイオレントゾーン」: **約+2.0枚/G**
- 基本ループ部: **10G/セット、約80%ループ**
- BIG後: **最低40GのART**
- BC成功後: **20GのART**
- ダブルアップチャレンジ: ARTゲーム数を倍化、**最大320G**

P-WORLD、当時グリーンべると、パチマガスロマガで主要仕様が整合。

confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## basicPayout

- BIG: **約312枚**（465枚超払い出しで終了）
- BATTLE CHANCE: **約18枚**（3G消化または3回入賞で終了）
- ART: **約+2.0枚/G**

confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- ARTへの主要突入契機は、BIG終了後、BC中ミッションクリア、ハンティングゾーン中の3択リプレイ、エスケープミッション中のチェリー/3択リプレイ。
- BIG後はARTへ100%突入し最低40G。BC成功時は20G。
- ARTゲーム数消化後も10Gの基本ARTが約80%でループし、その間も上乗せ抽選あり。
- ART中ボーナス後は「ダブルアップチャレンジ」で上乗せ分を倍化可能。最大320G。
- 通常ゲーム数型の固定天井は、今回確認したP-WORLD・当時業界記事・パチマガ本文では **NONE_CONFIRMED_AFTER_RESEARCH**。

confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のCZ/ART内部状態、ARTゲーム数、ミッション状態、内部高確の扱いを本機固有の直接資料で確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のCZ/ART状態・内部高確・ARTゲーム数の引継ぎを直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のCZ/ART内部状態、ARTゲーム数、初期出目等の保持/初期化を本機固有資料で確定できず。

gameCounterReset: **NOT_APPLICABLE_FOR_FIXED_GAME_CEILING / OTHER_INTERNAL_COUNTERS_UNVERIFIED**。通常ゲーム数型の固定天井は今回確認できず。CZ/ART関連内部カウンタの変更時処理は不明。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井・朝一専用到達G数は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ハンティングゾーン等に関係する内部高確/状態の再抽選・引継ぎを直接確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART/CZ/ミッション滞在・ART残Gの設定変更/据え置き/電源復帰処理を直接確認できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用ART/CZ優遇、高確スタート、短縮天井等の高信頼根拠なし。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。ART残G消滅等は本機固有資料で未確認のため推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / 液晶 / 朝一 / 設定変更判別 / 据え置き`まで検索語を広げたが、本機固有の高信頼判別要素を確定できず。

numericResetData:
  resetSpecificCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

## conflicts

- **NONE_CONFIRMED**。今回取得した主要な機械割・ボーナス確率・ART純増・基本獲得枚数は主要資料間で整合。

## missingFields

- concrete release day in 2010-02: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- setting-specific ART initial hit: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode/state: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. P-WORLD「バイオレントゾーン」 — https://www.p-world.co.jp/machine/database/5810 — メーカー、型式名、検定番号、導入月、BIG/BC確率、合算、機械割、獲得枚数、ART約+2.0枚/G、10G約80%ループ、CZ/ART基本構造 — reliability: INDUSTRY_DATABASE
2. グリーンべると / P-WORLD業界ニュース「JPSからダブルアップ機能搭載のART機登場」2010-01-26 — https://news.p-world.co.jp/articles/3786/greenbelt — 発表時期、ART約+2.0枚/G、約80%ループ、BIG後40G、BC後20G、最大320G、ボーナス合算1/256、主要ART突入契機 — reliability: INDUSTRY
3. パチマガスロマガ「バイオレントゾーン 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/21/a.php — BIG約312枚、BC約18枚、ART純増、BIG後最低40G、BC成功後20G、ダブルアップ最大320G — reliability: ANALYSIS_HIGH
4. 5号機クロニクル「JPS 5号機全機種一覧」 — https://5goki.com/jps — 2010/2導入、機械割98.8〜107.7% — reliability: RETROSPECTIVE_DATABASE

## retrievalDate

2026-09-03
