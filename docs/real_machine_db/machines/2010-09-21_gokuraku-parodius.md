# 極楽パロディウス

machineName: 極楽パロディウス
manufacturer: KPE
releaseDate: 2010-09-21
releaseDateStatus: CONFIRMED_MULTI_SOURCE
releaseDateNote: K-Naviとパチビーが2010-09-21導入を明記。KONAMI公式アーカイブは2010年9月稼働開始、当時プレイグラフ系記事も9月21日ホール導入予定として整合。
generation: 5号機
systemType: ART / ボーナス+ゲーム数上乗せART
formalModelName: 極楽パロディウスR
inspectionNumber: 0S0266
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_RESEARCHED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線508「ワニワニパニック」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount 508 / chronologicalFrontier 2010-09-21。
- repo内で「極楽パロディウス」「極楽パロディウスR」を検索し未登録を確認。同日未処理候補として509件目に追加。

## payoutRateBySetting

- 設定1: **97.0%**
- 設定2: **99.0%**
- 設定3: **100.6%**
- 設定4: **104.2%**
- 設定5: **109.2%**
- 設定6: **112.9%**

K-Navi、旧パチマガスロマガ、pacnkで一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

### 極楽BONUS
- 設定1: **1/978.1**
- 設定2: **1/963.8**
- 設定3: **1/963.8**
- 設定4: **1/949.8**
- 設定5: **1/897.8**
- 設定6: **1/885.6**

### パワーカプセルチャンス（通常時）/極楽RUSH（ART中）
- 設定1: **1/117.9**
- 設定2: **1/117.0**
- 設定3: **1/115.0**
- 設定4: **1/113.4**
- 設定5: **1/111.1**
- 設定6: **1/110.7**

### ボーナス合算
- 設定1: **1/105.2**
- 設定2: **1/104.4**
- 設定3: **1/102.7**
- 設定4: **1/101.3**
- 設定5: **1/98.8**
- 設定6: **1/98.4**

K-Naviと旧パチマガスロマガで全設定一致。P-WORLDもPCC/極楽RUSH・極楽BONUSの設定別値を一致確認。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

- **約37G/1000円（50枚）**
- 旧パチマガスロマガの本機小役ページに直接掲載。
confidence: ANALYSIS_HIGH

## netIncrease

- ART「極楽タイム」: **約+1.6枚/G**
- 基本 **50G+α**。上乗せで継続ゲーム数を拡張。
- 「歌姫タイム」はゲーム数温存型の無限ARTで、次回極楽RUSHまで継続。

K-Navi、P-WORLD、パチビー、KONAMI公式（ARTタイプ）で方式を照合。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- 極楽BONUS: **MAX48枚+ART**
- 極楽RUSH: **MAX48枚+ART**
- パワーカプセルチャンス: **3〜48枚**

P-WORLD掲載値。
confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- ART「極楽タイム」: 50G+α、約+1.6枚/G。150G以上で「超極楽タイム」、300G以上で「絶超極楽タイム」表記となる仕様をP-WORLDで確認。
- 無限ART「歌姫タイム」: ART残Gを減らさず次回極楽RUSHまで継続。
- 通常時には高確・超高確「スケスケチャンス」が存在。超高確中のボーナスはART突入確定。
- ART非当選回数天井: **最大8回**。次回天井回数は内部抽選で決まり、ART非当選ボーナスが規定回数に達するとART突入。もえろゲージ7個満タンでも次回ART当選確定。

confidence: ANALYSIS_MULTI_SOURCE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。後年整理資料pacnkでは、設定変更後に「ゲーム数・もえろゲージ・ステージがリセット」と明記。旧パチマガスロマガにも本機固有の「設定変更」解析項目が現存することを確認したが、検索取得本文では詳細値を直接回収できないため、pacnk記載を単一解析資料として扱う。

carryOverBehavior: **PARTIAL / INFERRED_ONLY_NOT_USED_FOR_UNSTATED_FIELDS**。設定変更時にもえろゲージ等がリセットされることは確認したが、据え置き時のART非当選回数天井・高確/超高確・ART残G/ストック等の全項目を直接列挙する高信頼本文は未回収。一般論で自動補完しない。P-WORLDはもえろゲージが「ART突入まで消えない」とするが、日跨ぎ据え置きの明示ではない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみのART非当選回数、もえろゲージ、高確/超高確、ART残G等の処理を本機固有資料で確定できず。

gameCounterReset: **RESET_CONFIRMED_FOR_SETTING_CHANGE_BUT_COUNTER_SCOPE_PARTIAL**。pacnkは設定変更後「ゲーム数」をリセットと明記。ただし本機の主要天井は通常G数ではなくART非当選ボーナス回数型であり、この記述だけから内部の規定回数天井まで一律CLEARと断定しない。もえろゲージは設定変更でリセット確認。

ceilingAfterReset: **NO_RESET_DEDICATED_SHORTENING_CONFIRMED**。通常のART非当選回数天井は最大8回。設定変更専用の短縮回数・短縮ゲーム数は今回確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_HIGH_SUPERHIGH**。高確/超高確の存在は確認したが、設定変更時の振り分け/初期状態の直接数値を確定できず。

stateAfterReset: **PARTIAL**。もえろゲージとステージは設定変更でリセット確認。ART/CZ残G、内部高確/超高確の変更時処理は未確定。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、朝一ART優遇、高確スタート等の明確な恩恵は今回確認できず。

resetPenalties: **GAUGE_RESET_CONFIRMED**。据え置きなら途中蓄積が価値を持ち得る「もえろゲージ」が設定変更でリセットされるため、朝一客視点では蓄積消失が主要な不利要素。ART非当選回数天井の進捗消失については直接確定できないため断定しない。

resetDetection: **PARTIAL_INDIRECT**。設定変更でステージ/もえろゲージがリセットされるという整理資料があり、前日のゲージ状況を把握できる場合は朝一画面が判別材料になり得る。ただし店側の対策や表示初期化を含む確定判別条件、ガックン確率、初期出目法則は `UNVERIFIED_AFTER_RESEARCH`。

numericResetData:
- normalArtMissCountCeiling: **最大8回**
- gaugeFullArtGuarantee: **7個**
- baseGamesPer50: **約37G**
- resetDedicatedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunExactProbability: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: SETTING_CHANGE_GAME_COUNT_GAUGE_STAGE_RESET_SINGLE_SOURCE_CONFIRMED / ART_MISS_COUNT_CEILING_RESET_SCOPE_UNVERIFIED / POWER_CYCLE_UNVERIFIED

## conflicts

- **NONE_CONFIRMED_FOR_CORE_VALUES**。設定別機械割・主要ボーナス確率はK-Navi/旧パチマガ/pacnk/P-WORLD系で整合。
- 「極楽パロディウスA」は2010年11月導入の別スペック（ノーマル/プチRT）であり、本レコードへ混入しない。

## missingFields

- settingChange時のART非当選回数天井の内部進捗CLEAR/RETAIN: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の高確/超高確・ART残G等の全項目: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset時の高確/超高確振り分け: UNVERIFIED_AFTER_RESEARCH
- gakkun/初期出目等の確定変更判別: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. KONAMI機種アーカイブ — 2010年9月稼働開始 / 5号機ART
   - https://www.konami.com/amusement/psm/archive/ps/2010/parodius/
   - confidence: OFFICIAL
2. K-Navi — 2010-09-21導入 / 設定別極楽BONUS・PCC・合算・機械割 / ART純増・高確/超高確
   - https://p-kn.com/slot/1254/
   - https://p-kn.com/slot/1254/26887/
   - confidence: ANALYSIS_HIGH
3. P-WORLD — 型式・検定番号 / 基本獲得 / ART 50G+α・約1.6枚/G / ART非当選最大8回天井 / ゲージ7個
   - https://www.p-world.co.jp/machine/database/6046
   - confidence: ANALYSIS_HIGH
4. パチビー — 2010-09-21導入 / ART・天井あり・約1.6枚/G
   - https://www.pachibee.jp/machines/lecture/210070001
   - confidence: ANALYSIS_HIGH
5. パチマガスロマガ旧解析 — 設定別確率・PAYOUT / 1000円あたり約37G / 本機固有「天井」「設定変更」項目の存在
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/21/kpe_slot_21.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/21/h.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/21/c.php
   - confidence: ANALYSIS_HIGH
6. pacnk — 設定別主要値照合 / 設定変更後ゲーム数・もえろゲージ・ステージリセット
   - https://pacnk.com/slot/tools/sh_parodyusu.html
   - confidence: ANALYSIS_SINGLE_REVIEW
7. 当時プレイグラフ系記事転載 — 2010-07内覧会 / 9月21日ホール導入予定 / 約1.6枚/G
   - https://p-mans.blogspot.com/2010/07/
   - confidence: INDUSTRY_SECONDARY_ARCHIVE

## nextRelayHint

- recordCount 509 / chronologicalFrontier 2010-09-21。
- 9/21同日群と2010-09-07〜20境界を月間導入一覧・HAZUSE・当時納品資料で再監査してから9/22以降へ進む。
- 既に後続候補として9/27「茉莉花の剣」「リングにかけろ1 ～黄金の日本Jr.編～」等が確認されているが、9/24を含む途中日の未登録機を飛ばさない。
- 遡及resetBehavior QA地点は既存handoff記載を維持し、新規時系列前進を止めない。
