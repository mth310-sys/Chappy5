# No.1207 エルインカ～黄金文明～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: エルインカ～黄金文明～
- manufacturer: KPE / KONAMI
- releaseDateCanonical: 2018-07-02
- generation: 5.9号機 / 5号機
- systemType: A+RT / BIG2種 + 100G RT
- formalModelName: `エルインカ黄金文明／KK`
- certificationNumber: `7S1600`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE DATA、ちょんぼりすた、すろぱちくえすとで2018-07-02導入が一致。
- HAZUSEで型式`エルインカ黄金文明／KK`、検定番号`7S1600`、メーカーKPEを確認。
- confidence: `ANALYSIS_HIGH`。

## performanceCore

### payoutRateBySetting
市場想定:
- setting1: 97.1%
- setting2: 98.2%
- setting3: 99.1%
- setting4: 101.6%
- setting5: 106.1%
- setting6: 110.2%

完全攻略時:
- setting1: 100.5%
- setting2: 101.8%
- setting3: 102.8%
- setting4: 105.5%
- setting5: 110.2%
- setting6: 114.5%

### initialHitBySetting
S-BIG:
- setting1: 1/390.1
- setting2: 1/387.8
- setting3: 1/385.5
- setting4: 1/381.0
- setting5: 1/372.4
- setting6: 1/360.1

N-BIG:
- setting1: 1/409.6
- setting2: 1/404.5
- setting3: 1/402.1
- setting4: 1/397.2
- setting5: 1/387.8
- setting6: 1/374.5

ボーナス合算:
- setting1: 約1/199.8
- setting2: 約1/198.0
- setting3: 約1/196.8
- setting4: 約1/194.5
- setting5: 約1/190.0
- setting6: 約1/183.6

- 一部資料のsetting1合算`1/198.8`、setting4合算`1/190.0`は個別S-BIG/N-BIG確率から算出される値およびHAZUSE/ちょんぼりすたと整合しないため、`CONFLICT_TABLE_TRANSCRIPTION`として採用しない。

### baseGamesPer50
- 約32～32.7G/50枚。

### netIncrease
- RT「ELDORADO」純増: 約0.3枚/G。
- 継続: 100Gまたはボーナス成立まで。

### basicPayout
- S-BIG: 最大279枚（345枚超払い出しで終了）。
- N-BIG: 最大208枚（225枚超払い出しで終了）。
- REG: 非搭載。
- S-BIG終了時、所定の技術介入条件を満たすことで100G RTへ突入。

### ceiling
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。

## modeSpecificMinimumData
- BIG2種のみのA+RT機。
- S-BIG後は技術介入成功でRT「ELDORADO」100G。
- RT中のS-BIG成立で終了後RT100Gを再セット可能。
- N-BIG後はRTなし。

## resetBehavior

### settingChangeBehavior
- ちょんぼりすたの当時解析は設定変更時の内部状態・ステージをともに`調査中`と記載。
- HAZUSE、パチマガスロマガ、すろぱちくえすと、表記揺れ/型式名を含む検索で再探索したが、本機固有の設定変更時RT残G・内部状態・出目/ステージ契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを独立条件としてRT残G・内部状態の保持を直接明記する本機固有資料は固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- ちょんぼりすたの当時解析は電源OFF→ON時の内部状態・ステージをともに`調査中`。
- 設定据え置き一般論から推定せず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- 通常ゲーム数天井は非搭載のため通常天井カウンタは `NOT_APPLICABLE`。
- RT100G残Gの設定変更/据え置き/純電断時処理は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 朝一専用モード、設定変更専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: `UNVERIFIED_AFTER_RESEARCH`
- carryOver: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`
- powerOFFToON: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`

### advantageousSectionReset
- 本機はA+RT機で、今回確認した機種固有資料では有利区間を用いたART/AT管理・有利区間ランプ契約を確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 5.9号機世代一般論のみから区間リセット挙動を補完しない。

### resetBenefits
- 設定変更時のRT直行、短縮天井、朝一専用高確等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、液晶/ランプによる設定変更・据え置き判別: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificRTBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND`
- morningSpecificPublicHitRate: `PUBLIC_VALUE_NOT_FOUND`

## morningRelatedPublicNumbers
- 設定変更専用の朝一数値、ガックン発生率、RT優遇率、モード振り分けは再探索後も公開値を固定できず。

## conflicts
- すろぱちくえすとのスペック表には個別ボーナス確率から整合しない合算値（setting1 `1/198.8`、setting4 `1/190.0`）が見られる。HAZUSE/ちょんぼりすたおよび個別確率整合を優先し、`CONFLICT_TABLE_TRANSCRIPTION`として保持。

## missingFields
- 設定変更時のRT残G・内部状態・ステージ/出目の直接契約。
- 据え置き時のRT残G・内部状態の直接契約。
- 純電源OFF→ON時のRT残G・内部状態の直接契約。
- 本機固有の変更判別契約と公開朝一数値。

## sources
取得日: 2026-09-10

1. HAZUSE DATA — エルインカ～黄金文明～
   - https://hazuse.com/machine/pachislot/7S1600/
   - 2018-07-02、KPE、型式`エルインカ黄金文明／KK`、検定`7S1600`、A+RT、天井非搭載、設定別ボーナス確率。
   - confidence: `ANALYSIS_HIGH`
2. ちょんぼりすた — エルインカ 黄金文明 スロット新台
   - https://chonborista.com/slot/kpe-slot/58303/
   - 導入日、A+RT、約32G/50枚、RT純増0.3枚/G、天井非搭載、設定別確率、市場想定/完全攻略機械割、S-BIG279枚/N-BIG208枚、朝一設定変更/電源OFF→ON欄が調査中。
   - confidence: `ANALYSIS_HIGH`
3. パチマガスロマガ — ゲーム性まるわかり解説
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/02/l.php
   - S-BIG最大279枚、BIG最大208枚、S-BIG技術介入後100G RT、RT純増0.3枚/G。
   - confidence: `ANALYSIS_HIGH`
4. すろぱちくえすと — エルインカ 黄金文明
   - https://www.slopachi-quest.com/article/el-inca/
   - 2018-07-02、KPE、A+RT、32.7G/50枚、RT0.3枚/G、S-BIG279枚/BIG208枚、市場想定/完全攻略機械割。
   - confidence: `ANALYSIS_HIGH`
