machineName: パチスロ北斗の拳 新伝説創造
manufacturer: Sammy（サミー）
releaseDate: 2017-09-04
recordNumber: 1127
generation: 5号機（5.5号機世代）
systemType: ART / 突破型CZ-ART→メインART
formalModelName: パチスロ北斗の拳 2017／XF
certificationNumber: 7S0888
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEは型式 **パチスロ北斗の拳 2017／XF**、検定番号 **7S0888**、メーカーSammy、導入開始日 **2017-09-04** を掲載。
- K-Navi、パチビー、一撃も2017-09-04導入で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY

## payoutRateBySetting
- 設定1: **97.8%**
- 設定2: **98.9%**
- 設定3: **100.9%**
- 設定4: **105.2%**
- 設定5: **108.7%**
- 設定6: **115.1%**
- 一撃の設定別PAYをcanonicalとして採用。
reliability: ANALYSIS_HIGH

## initialHitBySetting
### 突破型CZ-ART「宿命の刻」初当たり
- 設定1: **1/224.3**
- 設定2: **1/220.8**
- 設定3: **1/213.3**
- 設定4: **1/191.8**
- 設定5: **1/180.1**
- 設定6: **1/157.6**
- HAZUSE・一撃で一致。
- 「宿命の刻」は押し順ベル7回+バトルの突破型CZ-ARTで、突破期待度は **40%以上**。突破後にメインART「激闘乱舞」へ移行。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定1～6: **約43.6～46.5G/50枚**。
- HAZUSEの設定差込みベースを採用。
reliability: ANALYSIS_HIGH

## netIncrease
- ART純増: **約1.9枚/G**。
- 宿命の刻・激闘乱舞とも同系ART区間として約1.9枚/G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 宿命の刻: **押し順ベル7回 + 宿命バトル**。激闘乱舞突破期待度 **40%以上**。
- 激闘乱舞: **1セット約30G+α**、継続率 **66～89%**、ストック+継続率+G数上乗せ型。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は低確/通常/高確/前兆の4状態。
- 通常G数天井: **710G+αで宿命の刻**。
- 宿命の刻スルー回数天井: 通常は最大 **6スルー後、次回（7回目）突破濃厚**。
- 規定G数の夜状態抽選: 100G 0.4% / 300G 33.6% / 500G 0.4% / 660G 99.6%。夜状態中の宿命の刻当選は激闘乱舞突入濃厚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_TABLES
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時はG数天井を **510G+α** に再セット。
- 通常内部状態を再抽選。
- 液晶開始ステージは **バトロ / オグル / ビジャマを均等振り分け**。
- 宿命の刻スルー回数天井を再抽選し、天井ポイントは最大4。**4回スルー後の次回（5回目）で突破濃厚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLES

### carryOverBehavior
- 「据え置き」と明記した独立操作契約は、機種名・型式・メーカー名と据え置き/朝一/設定変更/電源OFF ON/天井/スルー/モード/状態を組み替えて再探索したが直接固定できず **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。
- 設定変更なしの純電源OFF→ONについては下記powerCycleBehaviorに直接表があるため、推測で据え置き契約へ転記しない。
reliability: UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ON: **G数天井CARRYOVER / 内部状態CARRYOVER / 宿命の刻スルー回数天井CARRYOVER**。
- 液晶は通常状態なら **バトロ / オグル / ビジャマを均等振り分け**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLES

### gameCounterReset
- 設定変更: **RESET → 510G+α天井**。
- 純電源OFF→ON: **CARRYOVER**。
- 通常運用時の天井は710G+α。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 通常 **710G+α** → 設定変更後 **510G+α** に200G短縮。
- 到達恩恵はいずれも「宿命の刻」当選濃厚。
- 宿命スルー天井も通常最大6スルー→設定変更後最大4スルーへ短縮。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 本機の物差し用途で主要なのは低確/通常/高確/前兆の状態再抽選とスルー天井再抽選。
- 独立した別名「通常モード」テーブルとしての設定変更時振り分けは確認範囲で固定せず、stateAfterResetとnumericResetDataに直接公開された状態振り分けを保存。
reliability: ANALYSIS_HIGH_FOR_STATE_MODEL / UNVERIFIED_FOR_SEPARATE_MODE_NOMENCLATURE

### stateAfterReset
- ART終了時/設定変更時の初期状態振り分けは共通表として公開。
- 設定1～3: **低確37.1% / 通常37.5% / 高確25.0% / 前兆0.4%**。
- 設定4～5: **低確34.4% / 通常31.3% / 高確31.3% / 前兆3.1%**。
- 設定6: **低確31.3% / 通常25.0% / 高確37.5% / 前兆6.3%**。
- 高設定ほど朝一の高確/前兆開始が優遇される。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- G数天井 **710G+α→510G+α** の200G短縮。
- 宿命スルー天井 **最大6スルー→最大4スルー** に短縮。
- 設定変更時は内部状態再抽選があり、設定4～6では前兆スタート率が3.1～6.3%、高確率も31.3～37.5%と高設定ほど優遇。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 通常時は660G到達時に夜状態移行抽選99.6%が存在するが、設定変更後は510G+αで宿命の刻天井となるため、**リセット後初回は通常の660G夜ゾーンを経由しない**。当時攻略資料もリセット後に660G夜移行が無い点を明記。
- 天井短縮の方が主要恩恵であり、この項目は朝一狙いの期待差を説明する補助的不利要素として保持。
reliability: ANALYSIS_HIGH

### resetDetection
- サミー系の朝一リールガックンが設定変更推測に有効とする当時攻略資料あり。ただし店舗側対策が可能で100%確定契約とはしないため **POSSIBLE_GAKKUN_NONDETERMINISTIC**。
- 設定変更/純電断とも液晶開始ステージはバトロ/オグル/ビジャマ均等のため、開始ステージ単独では確定判別不可。
- 電源OFF→ONまたは設定変更後、1回目の宿命の刻当選までは内部的に夜状態へ移行しても液晶の夜ステージへ移行しないとする当時解析があり、夜表示単独による朝一判別には制約がある。
reliability: ANALYSIS_HIGH_FOR_BEHAVIOR / ANALYSIS_SINGLE_FOR_GAKKUN

### numericResetData
- normalGameCeiling: **710G+α**
- resetGameCeiling: **510G+α**
- ceilingShortening: **200G**
- normalSkipCeiling: **最大6スルー後、次回（7回目）突破**
- resetSkipCeiling: **最大4スルー後、次回（5回目）突破**
- resetSkipPoint setting1-2: **0～3 各0.4% / 4 98.4%**
- resetSkipPoint setting3: **0～3 各2.0% / 4 92.2%**
- resetSkipPoint setting4: **0～3 各3.5% / 4 85.9%**
- resetSkipPoint setting5: **0～3 各5.1% / 4 79.7%**
- resetSkipPoint setting6: **0～3 各7.4% / 4 70.3%**
- resetState setting1-3: **低確37.1 / 通常37.5 / 高確25.0 / 前兆0.4%**
- resetState setting4-5: **低確34.4 / 通常31.3 / 高確31.3 / 前兆3.1%**
- resetState setting6: **低確31.3 / 通常25.0 / 高確37.5 / 前兆6.3%**
- liquidStartStage: **バトロ/オグル/ビジャマ 各約1/3**

## conflicts
- スルー天井の表現に「最大4スルー」「最大5回」等の表記差があるが、解析テーブルでは設定変更時に0～4の天井ポイントを選び、**4回スルー後の5回目で突破**する契約で一致。定義差として正規化し数値CONFLICTとは扱わない。

## missingFields
- 据え置きと明記した独立操作表: **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。
- 設定変更時に別体系として存在する「モード」名称/振り分け（内部状態とは別物としての公開値）: **UNVERIFIED_AFTER_RESEARCH**。
- ガックン発生率100%等の本機固有確定率: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09
- HAZUSE 機種/型式/導入/天井: https://hazuse.com/machine/pachislot/7S0586/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/7S0586/genre/201/
- 一撃 機種概要/スペック: https://1geki.jp/slot/s_hokuto_shin/
- 一撃 天井/設定変更・電源OFF ON: https://1geki.jp/slot/s_hokuto_shin/3/
- 一撃 宿命の刻スルー天井: https://1geki.jp/slot/s_hokuto_shin/43/
- 一撃 状態移行/設定変更時状態: https://1geki.jp/slot/s_hokuto_shin/44/
- 一撃 夜状態: https://1geki.jp/slot/s_hokuto_shin/45/
- K-Navi: https://p-kn.com/slot/2857/
- パチビー: https://www.pachibee.jp/machines/index/217080007
- すろぱちくえすと リセット: https://www.slopachi-quest.com/article/hokuto-shindensetsusouzou-reset/
- イチカツ リセット/ガックン: https://ichikatsu.com/hokutoshindensetsu-reset/

## researchNotes
- 欠損確認では「北斗の拳 新伝説創造 / パチスロ北斗の拳 2017 XF / 7S0888 / Sammy」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / スルー / 状態 / モード / 夜 / ガックン」を組み替え、一撃・HAZUSE・K-Navi・パチビー・当時攻略/解析資料を横断。
- 実機完全再現用の小役別状態移行やART内部上乗せ抽選はミッション範囲外として収集していない。
