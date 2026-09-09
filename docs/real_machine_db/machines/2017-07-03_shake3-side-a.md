machineName: SHAKE III SIDE-A
manufacturer: 大都技研
releaseDate: 2017-07-03
recordNumber: 1103
generation: 5号機
systemType: A+RT / ノーマル寄り / 2種BIG + 30G RT
formalModelName: SHAKEIII SIDE-A／A7
certificationNumber: 6S1514
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2017-07-03、メーカー大都技研、型式 `SHAKEIII SIDE-A／A7`、検定番号 `6S1514` を直接確認。
- すろぱちくえすと、ちょんぼりすた、パチスロデータ、K-Naviでも2017-07-03導入・大都技研・A+RT/ノーマル系が一致。
- 2016年導入のAT機「SHAKE III」とは別スペック。本レコードは2017年のSIDE-A/A7のみを対象とする。
reliability: INDUSTRY_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
- 設定1: **98.6%**
- 設定2: **100.5%**
- 設定3: **102.7%**
- 設定4: **105.2%**
- 設定5: **107.5%**
- 設定6: **111.2%**
- HAZUSEは「小役取りこぼしなし・ボーナス5G以内入賞」の完全攻略条件と明記。すろぱちくえすと、ちょんぼりすた、パチスロデータも同一数値系列を掲載。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG BONUS SIDE-A
- 設定1: **1/370.3**
- 設定2: **1/364.1**
- 設定3: **1/358.1**
- 設定4: **1/346.8**
- 設定5: **1/326.1**
- 設定6: **1/316.6**

### BIG BONUS SIDE-B
- 設定1: **1/425.6**
- 設定2: **1/394.8**
- 設定3: **1/376.6**
- 設定4: **1/360.1**
- 設定5: **1/356.2**
- 設定6: **1/318.1**

### ボーナス合算
- 設定1: **1/198.0**
- 設定2: **1/189.4**
- 設定3: **1/183.6**
- 設定4: **1/176.6〜176.7**
- 設定5: **1/170.2**
- 設定6: **1/158.7**
- HAZUSE/すろぱちくえすと/パチスロデータで一致。設定4合算の176.6/176.7は丸め表示差として扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 比較用代表値: **約32G/50枚**。
- すろぱちくえすと/すろかいは **約32〜35G/50枚** とレンジ掲載。
- パチスロデータ、ちょんぼりすたは約32G表記。
- DB canonicalは単一値に過度な精密化をせず「約32G」、注記として公開レンジ32〜35Gを保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- RT「SHAKE高確率」: **30G**。
- RT純増: **約0.1枚/G（現状維持程度）**という中古実機資料を確認。
- 当時主要解析のちょんぼりすた/HAZUSEでは純増を「調査中」としており、0.1枚/Gは単一補助資料値のため canonical は **約0.1枚/G / ANALYSIS_SINGLE_SUPPORT** とする。
reliability: ANALYSIS_SINGLE_FOR_RT_NET_INCREASE / ANALYSIS_HIGH_MULTI_SOURCE_FOR_30G_RT

## basicPayout
- BIG BONUS SIDE-A: **平均約308枚**。
- BIG BONUS SIDE-B: **平均約200枚**。
- REGULAR BONUSは非搭載。
- ボーナス終了後は約60%で30G RTへ突入。通常時サボハニ図柄揃いからもRT突入契機あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- A+RTのボーナス主体機で、AT/ARTのゲーム数解除モードは持たない。
- RT「SHAKE高確率」は最大30G、ボーナス後の約60%または通常時サボハニ図柄揃いから突入。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_CEILING_WITH_LIMITED_DIRECT_RESET_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井非搭載のためゲーム数/CZ天井リセットは **NOT_APPLICABLE_NO_CEILING**。
- SIDE-A固有の設定変更時RT状態、液晶状態、チケット/フリーパス保持を直接規定した高信頼資料は、表記・型式・メーカー・「設定変更/リセット/朝一/据え置き/電源OFF ON/RT/ガックン」を変えて再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 2016年版「SHAKE III」の設定変更挙動は本機へ転用しない。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_DIRECT_STATE_CONTRACT

### carryOverBehavior
- 据え置きで引き継ぐゲーム数天井は存在しない。
- RT状態・液晶状態・LIVEチケット/フリーパスの据え置き契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: NOT_APPLICABLE_FOR_CEILING / UNVERIFIED_FOR_STATE_AND_TICKET

### powerCycleBehavior
- 純電源OFF→ON時のRT状態、液晶状態、チケット/フリーパス保持を本機固有で確定する直接資料は **UNVERIFIED_AFTER_RESEARCH**。
- すろぱちくえすとはフリーパスについて「据え置きでも電源ON/OFFされるとおそらく引き継がない」と予想しているが、推測表記のため確定契約には採用しない。
reliability: ANALYSIS_SINGLE_SPECULATION_NOT_CANONICAL / UNVERIFIED_FOR_DIRECT_CONTRACT

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用短縮天井なし。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- ゲーム数解除/AT・ARTモードは非搭載。
- 設定変更専用朝一モード、解除モード、RT突入優遇モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_ANY_UNPUBLISHED_SPECIAL_MODE

### stateAfterReset
- 通常時のAT/ART低確・高確を初当たり管理する構造ではない。
- RT内部状態の設定変更/据え置き/純電断時契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_FOR_DIRECT_RT_STATE_CONTRACT

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、高確スタート、朝一専用モード、ボーナス初当たり優遇などの設定変更専用恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_ANY_UNPUBLISHED_BENEFIT

### resetPenalties
- ゲーム数天井進捗消滅は **NOT_APPLICABLE_NO_CEILING**。
- RT/チケット状態の直接契約未確認のため、設定変更時の消滅不利を推測記録しない。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_STATE

### resetDetection
- すろぱちくえすとのSIDE-A当時解析は **「ガックン判別はおそらく不可」** とする。
- 断定ではないため **POSSIBLE_NO_GAKKUN / NOT_DETERMINISTIC** として保存。
- 本機固有の確定初期出目、ランプ、ゲーム数表示による変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_SINGLE_FOR_GAKKUN_ASSESSMENT / UNVERIFIED_FOR_DETERMINISTIC_DETECTION

### numericResetData
- settingChangeCeiling: **NOT_APPLICABLE_NO_CEILING**。
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- gakkunProbability: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- payoutDefinitionNote: 98.6〜111.2%はHAZUSEが完全攻略条件と明示。定義を通常市場掲載値と混同しない。
- baseGamesPer50Display: 約32G vs 約32〜35G。固定競合ではなく掲載粒度差として保持。
- rtNetIncreaseEvidence: 当時主要解析は「調査中」、中古実機資料は約0.1枚/G。時点/資料粒度差として保持し、0.1枚/GはANALYSIS_SINGLE。

## missingFields
- direct setting-change/carry-over/power-cycle RT-state contract: UNVERIFIED_AFTER_RESEARCH。
- direct LIVE-ticket/free-pass persistence contract: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific reset detection: UNVERIFIED_AFTER_RESEARCH。
- reset-specific numeric benefit/mode/state distribution: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. HAZUSE — https://hazuse.com/machine/pachislot/6S1514/
2. HAZUSE 初打講座 — https://hazuse.com/machine/pachislot/6S1514/genre/203/
3. すろぱちくえすと — https://www.slopachi-quest.com/article/shake3_sidea/
4. ちょんぼりすた — https://chonborista.com/slot/daito-slot/40713/
5. パチスロデータ — https://pachislo-data.com/daito/48215
6. K-Navi — https://p-kn.com/slot/2831/
7. すろかい — https://slotkaiseki.hatenablog.com/entry/shakesidea
8. P-WORLD — https://www.p-world.co.jp/machine/database/8431
9. 中古実機資料（RT純増補助） — https://www.pachislowasshoi.jp/SHOP/daito-slot0037.html

## researchNotes
- 2016年版SHAKE IIIのリセット記事は検索上多数ヒットするが、AT機で本機SIDE-A/A7とはゲーム性・天井構造が異なるためresetBehaviorへ転用していない。
- 完全再現用の小役/チケット全振り分けはv0.7範囲外。設定変更固有数値が見つからないためnumericResetDataへ通常設定差を混入させていない。
