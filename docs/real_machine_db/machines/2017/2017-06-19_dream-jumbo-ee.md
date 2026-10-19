machineName: ドリームジャンボ あの興奮をもう一度
manufacturer: JPS
releaseDate: 2017-06-19
recordNumber: 1094
generation: 5号機
systemType: ノーマル / A+RT / リアルボーナス / 無限RT
formalModelName: ドリームあの興奮をもう一度ジャンボEE
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- P-WORLD、ちょんぼりすた、2017年導入一覧、5号機クロニクルでJPS製・A+RT機として照合。
- 5号機クロニクルおよび検定通過一覧では型式表記 `ドリームあの興奮をもう一度ジャンボEE` を確認。
- 導入日は複数資料で2017-06-19が一致するためcanonicalを2017-06-19とする。
- すろぱちくえすと記事冒頭に6月12日表記が残る一方、同記事内機種情報表は6月19日。6月12日は旧予定/記事作成時残存表記の可能性があるためCONFLICTとして保持し、平均しない。
- 検定番号は機種名/型式/JPS/EE/検定番号/検定通過を組み替えて再探索したが、今回高信頼な番号を直接固定できずUNVERIFIED。
reliability: OLD_DB_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.7%|
|2|99.2%|
|3|101.7%|
|4|103.7%|
|5|105.9%|
|6|108.4%|
- ちょんぼりすた、すろぱちくえすと、5号機クロニクル、pacnkで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG合算（PREMIUM BIGを含む）
|設定|確率|
|---:|---:|
|1|1/307.7|
|2|1/300.6|
|3|1/292.6|
|4|1/280.1|
|5|1/266.4|
|6|1/253.0|

### REG
|設定|確率|
|---:|---:|
|1|1/303.4|
|2|1/302.0|
|3|1/299.3|
|4|1/291.3|
|5|1/287.4|
|6|1/275.4|

### PREMIUM BIG
- 全設定共通 **1/2114.06**。
- PREMIUM BIG後は次回ボーナスまでRT「DREAM ROAD」。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_MAJOR_VALUES

## baseGamesPer50
- 直接的な「約xxG/50枚」表記は、機種名/型式/JPSと「50枚/ベース/コイン持ち/1000円」を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 小役確率からの理論推定は本DBの不明値推測禁止ルールにより採用しない。
reliability: UNVERIFIED

## netIncrease
- RT「DREAM ROAD」純増: **約0.1枚/G**。
- 次回ボーナスまで継続。
reliability: OLD_DB_AND_MULTI_SOURCE_ANALYSIS

## basicPayout
- BIG / PREMIUM BIG: **最大311枚**。
- REG: **104枚**。
- PREMIUM BIG後: 次回ボーナスまで無限RT「DREAM ROAD」。
reliability: OLD_DB_AND_MULTI_SOURCE_ANALYSIS

## modeSpecificMinimumData
- 通常ゲーム数天井: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- 通常時に5G継続のCZ「BIG CHANCE」があり、突入率は約1/150、ボーナス期待度52〜54%。これはゲーム数天井/朝一モードではない。
- PREMIUM BIG後のみ次回ボーナスまでRTへ移行。
reliability: OLD_DB_AND_MULTI_SOURCE_ANALYSIS

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NO_CEILING_AND_LIMITED_DIRECT_RESET_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 通常ゲーム数天井・周期天井・AT/ARTゲーム数モードを持たないため、ゲーム数リセット恩恵は `NOT_APPLICABLE`。
- 設定変更時のRT状態、成立済みボーナス状態、デジタル/CZ一時状態の具体的な本機固有契約は、表記揺れ/型式/JPSと「設定変更/リセット/朝一/RT/状態」を組み替えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING; UNVERIFIED_FOR_TRANSIENT_RT_STATE

### carryOverBehavior
- 据え置き時の本機固有RT/ボーナス成立状態/CZ一時状態の独立契約は `UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH`。
- 天井・通常モードは非搭載のため引継ぎ対象なし。
reliability: UNVERIFIED_FOR_TRANSIENT_STATE

### powerCycleBehavior
- 純電源OFF→ONのみの場合のRT状態、成立済みボーナス状態、デジタル/CZ一時状態について、直接比較できる本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数天井・モードは非搭載。
reliability: UNVERIFIED

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用の短縮天井は存在確認なし。

### modeAfterReset
- ゲーム数解除モード/天井モード: **NOT_APPLICABLE**。
- 朝一専用モード/設定変更専用当選モード: **NONE_CONFIRMED_AFTER_RESEARCH**。
- RT状態そのものの設定変更時契約はUNVERIFIED。

### stateAfterReset
- 低確/高確等の通常内部状態を用いるAT/ART型ではないため、該当する公開朝一状態振り分けは **NOT_APPLICABLE_NO_CLASSIC_LOW_HIGH_AT_STATE**。
- 一時的なRT/CZ状態契約はUNVERIFIED。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の短縮天井、朝一高確、専用モード、特定G以内当選率優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更専用の公開冷遇要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- すろぱちくえすと当時記事では「ガックン判別が効くかどうか調査中」とされていた。
- 本機固有の確定ガックン/初期出目/ランプ/デジタル表示による設定変更判別契約は、検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_SINGLE_DIRECT_FOR_GAKKUN_UNRESOLVED

### numericResetData
- resetShortCeiling: NOT_APPLICABLE。
- resetModeDistribution: NONE_CONFIRMED。
- resetStateDistribution: NOT_APPLICABLE / NONE_CONFIRMED。
- publicFirstNGameHitRateAfterReset: NONE_CONFIRMED。

## conflicts
- releaseDate: 2017-06-19が複数導入資料で一致。すろぱちくえすと記事冒頭の6月12日表記はCONFLICTとして保持。同記事の機種情報表自体は6月19日。
- 一部古いスペック整理ではREG設定6が1/387と読める表記があるが、pacnk精密値1/275.4および合算整合性を優先。誤記疑いとしてcanonicalに採用しない。
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for payout rate / BIG / REG / RT net increase after multi-source comparison.

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- direct setting-change transient RT/bonus/CZ state contract: UNVERIFIED_AFTER_RESEARCH
- direct independent stay-setting transient-state contract: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle transient-state contract: UNVERIFIED_AFTER_RESEARCH
- deterministic reset-detection contract: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. P-WORLD ドリームジャンボEE — https://www.p-world.co.jp/machine/database/8377
2. ちょんぼりすた「ドリームジャンボ あの興奮をもう一度」 — https://chonborista.com/slot/jps-slot/38091/
3. すろぱちくえすと 解析まとめ — https://www.slopachi-quest.com/article/dreamjumbo-anokouhun/
4. すろぱちくえすと 2017年導入日順一覧 — https://www.slopachi-quest.com/article/2017-sindai/
5. 5号機クロニクル JPS全機種一覧 — https://5goki.com/jps
6. pacnk ドリームジャンボEE 設定判別/精密値 — https://pacnk.com/slot/tools/sh_dorimujamboii.html
7. すろ・ぱち(解) 検定通過情報 — https://kaiseki.sulopachinews.com/archives/2352
8. P-Summa 2017年6月新台まとめ — https://psumma.jp/trend/35081/
