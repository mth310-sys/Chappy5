machineName: 乱嵐エイサーver.100
manufacturer: オーイズミ
releaseDate: 2017-09-19
recordNumber: 1149
generation: 5号機（5.5号機世代）
systemType: ノーマル / 完全告知Aタイプ
formalModelName: ランランエイサー2/CX
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_BASE

## identity
- オーイズミ製の25φ完全告知ノーマル機「乱嵐エイサーver.100」。P-WORLD、K-Navi、すろぱちくえすと、ちょんぼりすたでメーカー/ゲーム性を照合。
- 正式型式 **ランランエイサー2/CX** は2017-07-24の公安委員会告示ベース検定情報、検定通過DB、Re.design機種基本情報で一致し、商品スペック（BIG/REG/出率）も「乱嵐エイサーver.100」の公開値と一致するため対応を固定。
- 導入日は K-Navi / すろぱちくえすと / ちょんぼりすたが **2017-09-19**。Re.designは最短納期 **2017-09-18** で整合。一方、後年カレンダー1系統が **2017-09-04** とするため `CONFLICT_RELEASE_DATE_2017_09_19_VS_2017_09_04` を保持し、多数の当時/解析資料と納品情報から2017-09-19をcanonicalとする。
- 検定番号（7Sxxxx等）は型式、メーカー、検定、告示、古いDBまで検索語を変えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY / CONFLICT_FOR_RELEASE_DATE / UNVERIFIED_FOR_CERTIFICATION_NUMBER

## payoutRateBySetting
- 設定1: **100.0%**
- 設定2: **101.2% canonical / 104.2% conflicting isolated value**
- 設定3: **102.4%**
- 設定4: **104.2%**
- 設定5: **105.5%**
- 設定6: **108.0%**
- Re.design、すろぱちくえすと、ちょんぼりすたは設定2 **101.2%**で一致。K-Naviのみ設定2を **104.2%** とし設定4と同値。平均せず `CONFLICT_PAYOUT_S2_101_2_VS_104_2` とし、複数一致の101.2%をcanonical。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT_FOR_SETTING2

## initialHitBySetting
### BIG
- 設定1: **1/282.5**
- 設定2: **1/277.7**
- 設定3: **1/271.9**
- 設定4: **1/265.3**
- 設定5: **1/258.0**
- 設定6: **1/249.2**

### REG
- 設定1: **1/458.3**
- 設定2: **1/442.8**
- 設定3: **1/434.0**
- 設定4: **1/417.4**
- 設定5: **1/412.2**
- 設定6: **1/360.1**

### ボーナス合算
- 設定1: **1/174.8**
- 設定2: **1/170.7**
- 設定3: **1/167.2**
- 設定4: **1/162.2**
- 設定5: **1/158.7**
- 設定6: **1/147.3**
- K-Navi、Re.design、すろぱちくえすと、ちょんぼりすたで一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **UNVERIFIED_AFTER_RESEARCH**。
- ちょんぼりすたは回転数/50枚を「調査中」、Re.designもG数/千円を未掲載。機種名/型式名/メーカー名に「50枚」「1000円」「ベース」「コイン持ち」「回転数」を組み合わせて再探索したが、比較可能な実数を固定できなかった。
reliability: UNVERIFIED

## netIncrease
- **NOT_APPLICABLE_NORMAL_TYPE**。AT/ART/RTによる継続的な純増区間は搭載しないノーマルタイプ。
reliability: DATABASE_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG: **純増約300枚**（336枚払い出し）。P-WORLD、Re.design、すろぱちくえすとで一致。
- REG: **純増約108枚 canonical**（112枚払い出し）。P-WORLD、Re.design、すろぱちくえすとの詳細REG欄で一致。
- ただし、すろぱちくえすとの機種情報サマリのみREG **約104枚** とするため、`CONFLICT_REG_PAYOUT_108_VS_104` として保持。詳細欄と独立2系統一致の108枚をcanonical。
reliability: INDUSTRY_PLUS_DATABASE_HIGH_MULTI_SOURCE / CONFLICT_FOR_REG_SUMMARY_TYPO_OR_DEFINITION

## modeSpecificMinimumData
- 天井: **非搭載**。すろぱちくえすと、ちょんぼりすたで明記。
- 通常時はボーナスのみで出玉を増やす完全告知ノーマル機。ゲーム数モード、CZ、ART/AT、朝一専用モードは確認されない。
- 告知タイミングは先告知80% / 後告知20%として公開されるが、朝一リセット挙動ではないためresetBehaviorの数値には混ぜない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: NORMAL_TYPE_NO_CEILING_MODE_OR_STATE_RESET_ADVANTAGE_CONFIRMED; SETTING_CHANGE_POWER_CYCLE_SPECIFIC_BEHAVIOR_AND_GAKKUN_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 本機は天井・ゲーム数モード・CZ/ART/AT・内部高確状態を用いた朝一狙い構造を持たないノーマル機。
- 設定変更時に適用される専用ゲーム数、モード、状態、ボーナス優遇などは、機種名/型式名/オーイズミ/乱嵐・ランラン表記に「設定変更」「リセット」「朝一」を組み合わせ、当時解析・機種DB・回顧資料を横断したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更そのもののハードウェア固有挙動（初期出目等）は直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING_AND_NO_MODE_STRUCTURE / UNVERIFIED_FOR_HARDWARE_SPECIFIC_RESET_ACTION

### carryOverBehavior
- 天井・ゲーム数モード・内部状態の引継ぎ対象は **NOT_APPLICABLE**。
- 「据え置き」と明記した本機固有の初期出目/ランプ/ボーナスフラグ等の直接契約は、検索語・資料系統変更後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: NOT_APPLICABLE_FOR_GAMEPLAY_COUNTERS / UNVERIFIED_FOR_MACHINE_SPECIFIC_HARDWARE_CONTRACT

### powerCycleBehavior
- 天井・モード・状態の引継ぎ対象は **NOT_APPLICABLE**。
- 純電源OFF→ONのみの場合の本機固有のリール初期挙動、告知ランプ状態、変更判別に使える公開契約は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
reliability: NOT_APPLICABLE_FOR_GAMEPLAY_COUNTERS / UNVERIFIED_FOR_HARDWARE_SPECIFIC_POWER_CYCLE

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- 天井非搭載のため、朝一客が宵越し利用できる内部天井ゲーム数は存在しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- normalCeiling: **NONE**。
- settingChangeCeiling: **NONE**。
- settingChangeSpecificShortening: **NOT_APPLICABLE**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- ゲーム数モード/朝一専用モード: **NOT_APPLICABLE / NONE_CONFIRMED**。
- 設定変更時だけ適用されるモード振り分けの公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NORMAL_TYPE_STRUCTURE

### stateAfterReset
- ART/AT/CZ用の低確・高確など、朝一狙いへ影響する内部状態: **NOT_APPLICABLE / NONE_CONFIRMED**。
- 設定変更時の状態振り分け公開値は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NORMAL_TYPE_STRUCTURE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮、モード優遇、状態優遇、朝一特定G数当選率上昇などは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常の設定差（BIG/REG確率）はリセット恩恵とは分離する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_MACHINE_STRUCTURE

### resetPenalties
- 設定変更による宵越し天井消失は天井非搭載のため **NOT_APPLICABLE**。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING

### resetDetection
- 本機固有のガックン、初期出目、告知ランプ等による設定変更判別は、機種名・型式名・メーカー・シリーズ名に「ガックン」「リール」「朝一」「設定変更」「据え置き」「電源OFF ON」を組み合わせて再探索したが、直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 他のオーイズミ機や一般的Aタイプの挙動から類推しない。
reliability: UNVERIFIED

### numericResetData
- normalCeiling: **NONE**
- resetCeiling: **NONE**
- resetCeilingReduction: **NOT_APPLICABLE**
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetSpecificHitProbability: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunProbability: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- setting-change / stay-setting / pure-power-cycle hardware-specific initial reel/lamp contract: **UNVERIFIED_AFTER_RESEARCH**
- deterministic gakkun/change-detection behavior: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- releaseDate: **CONFLICT_2017_09_19_VS_2017_09_04**。
  - 2017-09-19: K-Navi / すろぱちくえすと / ちょんぼりすた。
  - 2017-09-18最短納期: Re.design（9/19稼働と整合）。
  - 2017-09-04: 新台カレンダー1系統。
  - canonical: **2017-09-19**。
- payoutRate setting2: **CONFLICT_101_2_VS_104_2**。
  - 101.2%: Re.design / すろぱちくえすと / ちょんぼりすた。
  - 104.2%: K-Naviのみ。
  - canonical: **101.2%**。
- REG payout: **CONFLICT_108_VS_104**。
  - 約108枚: P-WORLD / Re.design / すろぱちくえすと詳細欄。
  - 約104枚: すろぱちくえすと機種情報サマリ。
  - canonical: **約108枚**。

## sources
retrievedAt: 2026-09-10
- K-Navi — 導入日/設定別BIG・REG・合算/機械割（設定2孤立値を含む）: https://p-kn.com/slot/2878/
- P-WORLD — メーカー/ノーマル完全告知/BIG約300枚/REG約108枚: https://www.p-world.co.jp/machine/database/8486
- すろぱちくえすと — 導入日/確率/機械割/天井非搭載/獲得枚数: https://www.slopachi-quest.com/article/ranran-eisa-100/
- ちょんぼりすた — 導入日/確率/機械割/天井非搭載/50枚ベース未公表: https://chonborista.com/slot/oizumi-slot/46606/
- Re.design — 型式ランランエイサー2/CX/最短納期2017-09-18/確率/出率/BIG336枚払出・約300枚/RB112枚払出・約108枚: https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2017080913222401
- パチマガスロマガ検定情報（7/24） — 公安委員会告示ベースでランランエイサー2/CX検定通過: https://cs62.cs-plaza.com/g/pachi/column/detail.php?mcl_cd=0098&mwr_cd=090&tac_cd=00044201&type=1
- すろ・ぱち(解)検定DB — 2017年通過機種としてランランエイサー2/CX: https://kaiseki.sulopachinews.com/archives/2352
- 新台スロット2017年度カレンダー — 導入日2017-09-04の競合資料: https://slotnews777.blog.fc2.com/blog-entry-3121.html
